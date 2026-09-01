import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume · Paul Vudmaska",
  description:
    "Full-stack developer and designer with UX/UI judgment, infrastructure depth, and creative visual skills.",
};

const skills = [
  {
    title: "Application development",
    items:
      "Ruby on Rails, Ruby, Gems, JavaScript, jQuery, jQuery Mobile, SvelteKit",
  },
  {
    title: "Frontend and design",
    items:
      "HTML, CSS, Tailwind, Bootstrap, Grid, Flexbox, Framer, Figma, UX design",
  },
  {
    title: "Infrastructure",
    items:
      "MySQL, Postgres, DigitalOcean, Linode, Ubuntu, Passenger, Nginx, SSH keys, Capistrano, SSL certificates, Git, Netlify",
  },
  {
    title: "Creative tools",
    items:
      "Procreate, Krita, Blender, AI-assisted visual direction, Static site generators",
  },
];

const jobs = [
  {
    org: "MBLZ",
    role: "Full-stack developer",
    dates: "2016 to Present",
    bullets: [
      "Built and maintained CRM software for small businesses.",
      "Developed systems for managing customers, clients, phone workflows, invoices, and related operations.",
      "Worked across Ruby on Rails, Nginx, Passenger, MySQL, and Twilio.",
    ],
  },
  {
    org: "Rackspace",
    role: "Senior developer",
    dates: "2010 to 2015",
    bullets: [
      "Worked on internal applications that managed contracts.",
      "Integrated Salesforce through its API.",
      "Encrypted documents at rest to satisfy audit requirements.",
      "Implemented workflows that streamlined sales and contract processes.",
      "Worked closely with business representatives to gather requirements and ship practical tools.",
    ],
  },
  {
    org: "USAA",
    role: "Tech lead",
    dates: "3 years",
    bullets: [
      "Led work on intranet applications.",
      "Built server-side ASP and JScript systems.",
      "Supported internal teams with practical business software.",
    ],
  },
  {
    org: "U.S. Navy",
    role: "E5, honorably discharged",
    dates: "4 years",
    bullets: [
      "Worked on the flight deck of the aircraft carrier Saratoga.",
      "Attained the rank of E5 during a short enlistment.",
      "Held a security clearance and served in the Mediterranean.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main id="top" className="page">
      <section className="hero">
        <p className="eyebrow">Resume</p>
        <h1>Paul Vudmaska</h1>
        <p className="lede">
          Full-stack developer and designer with UX/UI judgment, infrastructure
          depth, and creative visual skills.
        </p>
        <div className="hero-actions">
          <a className="button" href="mailto:paul.vudmaska@gmail.com">
            paul.vudmaska@gmail.com
          </a>
          <a
            className="button-ghost"
            href="https://github.com/voodoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Profile</h2>
        <div className="prose">
          <p>
            I build practical software for teams that need useful internal
            tools, customer systems, workflows, and durable infrastructure. My
            work spans product thinking, Rails application development,
            frontend implementation, deployment, and hands-on UX/UI design.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="card-grid">
          {skills.map((group) => (
            <article className="card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="resume-jobs">
          {jobs.map((job) => (
            <article className="card" key={job.org}>
              <h3>{job.org}</h3>
              <p className="resume-role">
                {job.role} — {job.dates}
              </p>
              <ul className="resume-list">
                {job.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Creative Work</h2>
        <div className="prose">
          <p>
            Alongside engineering, I work with visual tools including Framer,
            Figma, Blender, Procreate, Krita, and AI-assisted art direction.
            That gives me a stronger bridge between product implementation and
            the visual systems users actually experience.
          </p>
        </div>
      </section>
    </main>
  );
}
