"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean;
  error?: string;
};

const NAME_MAX = 100;
const EMAIL_MAX = 254;
const MESSAGE_MAX = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = readString(formData, "company");
  if (honeypot) {
    return { ok: true };
  }

  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const message = readString(formData, "message");

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email, and message." };
  }

  if (name.length > NAME_MAX || email.length > EMAIL_MAX || message.length > MESSAGE_MAX) {
    return { ok: false, error: "That message is too long. Please shorten it and try again." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO;

  if (!apiKey || !from || !to) {
    console.error("Contact form is missing RESEND_API_KEY, CONTACT_FROM, or CONTACT_TO.");
    return {
      ok: false,
      error: "This form is not configured yet. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);
  const subject = `AI consulting inquiry from ${name}`;
  const text = `${message}\n\n— ${name} · ${email}`;
  const html = `<p>${escapeHtml(message).replaceAll("\n", "<br />")}</p><p>— ${escapeHtml(name)} · ${escapeHtml(email)}</p>`;

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("Resend rejected the contact email.", error);
      return {
        ok: false,
        error: "The message could not be sent. Please try again.",
      };
    }

    if (!data) {
      return {
        ok: false,
        error: "The message could not be sent. Please try again.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("Resend request failed.", error);
    return {
      ok: false,
      error: "The message could not be sent. Please try again.",
    };
  }
}
