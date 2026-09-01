import { CalendarEmbed } from "@/components/calendar-embed";
import { ContactForm } from "@/components/contact-form";
import { BOOK_A_CALL_HREF } from "@/lib/booking";

export default function Home() {
  return (
    <main id="top" className="page">
      <section className="hero">
        <p className="eyebrow">AI consulting · Rails first</p>
        <h1>
          Put AI in the product. Keep the <em>Rails</em> shop.
        </h1>
        <p className="lede">
          I help founders and operators add AI to systems people already depend
          on. The model is the easy part. Auth, jobs, data, and the boring
          connective tissue — that is Rails work, and that is where most AI
          projects stall.
        </p>
        <div className="hero-actions">
          <a className="button" href={BOOK_A_CALL_HREF}>
            Book a 15-minute fit call
          </a>
          <a className="button-ghost" href="#rails">
            Why Rails
          </a>
        </div>
      </section>

      <section id="work" className="section">
        <p className="eyebrow">The work</p>
        <h2>Senior judgment, then the implementation.</h2>
        <p>
          Best fit: small teams with real stakes, a living Rails app, and no
          patience for a chatbot bolted onto the sidebar.
        </p>
        <div className="card-grid three">
          <article className="card">
            <h3>AI product strategy</h3>
            <p>
              Decide what should be a model, what should be a rule, and what
              should stay a form. Clear the roadmap so the next useful thing
              can ship.
            </p>
          </article>
          <article className="card">
            <h3>Rails + AI build</h3>
            <p>
              Agents, retrieval, and evals wired into the app you already run:
              Active Job, Action Cable, Hotwire, and the domain models that
              know your business.
            </p>
          </article>
          <article className="card">
            <h3>Rescue and review</h3>
            <p>
              A prototype that impressed a demo and then met production. I
              tighten the harness — tools, context, verification — until it
              is something you can operate.
            </p>
          </article>
        </div>
      </section>

      <section id="rails" className="section">
        <p className="eyebrow">The Rails thesis</p>
        <h2>AI fails at the edges. Rails already lives there.</h2>
        <div className="rails-panel">
          <div className="prose">
            <p>
              I have spent a career on full-stack Rails: the messy internals,
              the operator tools, the product calls that sit between a
              requirement and working software. That is the same surface AI
              has to land on if it is going to matter.
            </p>
            <p>
              A fluent generator is not a product. The harness is — the
              tools, the context window, the callbacks, the audit trail. Rails
              already has conventions for all of that. I start there instead
              of standing up a separate stack that nobody on the team wants
              to own.
            </p>
          </div>
          <article className="card">
            <h3>What I reach for</h3>
            <p>
              <code>Active Job</code> for long-running model work.{" "}
              <code>Hotwire</code> when the interface should update without a
              SPA. Solid models and authorization so an agent cannot wander.
              Eval loops so “it felt smart in Slack” is not the acceptance
              test.
            </p>
          </article>
        </div>
      </section>

      <section id="approach" className="section">
        <p className="eyebrow">Approach</p>
        <h2>Smallest useful thing. Then the next one.</h2>
        <p>
          No multi-month transformation theater. We pick a bottleneck, put AI
          where it earns its keep, and leave the rest of the app healthier
          than we found it.
        </p>
        <ol className="steps">
          <li>
            <strong>Fit call</strong>
            <span>
              Fifteen minutes. If the problem is not a match, I will say so.
            </span>
          </li>
          <li>
            <strong>Diagnose the system</strong>
            <span>
              Read the Rails app, the data, and the operational reality.
              Write down what AI should not touch.
            </span>
          </li>
          <li>
            <strong>Ship a thin slice</strong>
            <span>
              One workflow in production, with logging and a way to tell if
              it is actually helping.
            </span>
          </li>
        </ol>
      </section>

      <section id="about" className="section">
        <p className="eyebrow">About</p>
        <h2>Paul Vudmaska</h2>
        <div className="prose">
          <p>
            I am a full-stack Rails developer and product consultant based in
            San Antonio. I help teams fix fuzzy direction, brittle internal
            tools, and execution problems that need senior engineering
            judgment — now including the AI layer that sits on top of those
            systems.
          </p>
          <p>
            The work is general-purpose AI consulting with a bias toward
            applications that last: Ruby on Rails, operator-facing tools, and
            interfaces that do not make the model the product. If you need a
            demo by Friday and a rewrite in March, I am the wrong person.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <p className="eyebrow">Contact</p>
        <h2>Tell me what is stuck.</h2>
        <div className="contact-layout">
          <div className="prose">
            <p>
              A short note is enough: the app, the users, and the thing AI
              is supposed to change. I will reply if it looks like a fit.
            </p>
            <p>
              Prefer a calendar slot? Book a 15-minute fit call — that is the
              booking path.
            </p>
            <p>
              <a className="button" href={BOOK_A_CALL_HREF}>
                Book a 15-minute fit call
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
        <CalendarEmbed />
      </section>
    </main>
  );
}
