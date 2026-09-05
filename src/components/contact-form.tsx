"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";

const SAMPLE_INQUIRY = {
  name: "Alex Rivera",
  email: "alex@example.com",
  message:
    "We run a Rails app and want a thin AI slice for operator tools — retrieval over existing models, not a sidebar chatbot. Can you help us ship that without standing up a separate stack?",
};

const INITIAL_STATE: ContactState = { ok: false };

export function ContactForm() {
  const [name, setName] = useState(SAMPLE_INQUIRY.name);
  const [email, setEmail] = useState(SAMPLE_INQUIRY.email);
  const [message, setMessage] = useState(SAMPLE_INQUIRY.message);
  const [state, formAction, pending] = useActionState(sendContact, INITIAL_STATE);
  const statusRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!state.ok && !state.error) return;
    statusRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [state]);

  function fillSample() {
    setName(SAMPLE_INQUIRY.name);
    setEmail(SAMPLE_INQUIRY.email);
    setMessage(SAMPLE_INQUIRY.message);
  }

  if (state.ok) {
    return (
      <p
        ref={statusRef}
        className="contact-form-status is-success"
        role="status"
        aria-live="polite"
      >
        Sent. I will reply if it looks like a fit.
      </p>
    );
  }

  return (
    <form className="contact-form" action={formAction}>
      <label className="contact-form-honeypot" aria-hidden="true">
        <span>Company</span>
        <input
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
      <label>
        <span>Name</span>
        <input
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={100}
          required
        />
      </label>
      <label>
        <span>Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          maxLength={254}
          required
        />
      </label>
      <label className="contact-form-message">
        <span>What are you trying to ship?</span>
        <textarea
          name="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          maxLength={5000}
          required
        />
      </label>
      <div className="contact-form-actions">
        <button type="submit" className="button" disabled={pending}>
          {pending ? "Sending…" : "Start a conversation"}
        </button>
        <button type="button" className="button-ghost" onClick={fillSample}>
          Use sample
        </button>
        <p
          ref={statusRef}
          className={
            state.error
              ? "contact-form-status is-error"
              : "contact-form-status"
          }
          role="status"
          aria-live="polite"
        >
          {state.error ?? ""}
        </p>
      </div>
    </form>
  );
}
