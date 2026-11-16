import { useState } from "react";
import "./Contact.css";

/* Fill in your real details. Empty values are simply not shown. */
const EMAIL = "nabil.ouadjou.dev@gmail.com"; // TODO: your real email
const PHONE = "+212 6 13 90 50 79"; // e.g. "+212 6 00 00 00 00"
const GITHUB = "https://github.com/nabil-ouadjou-dev";
const LINKEDIN = "https://www.linkedin.com/in/nabil-ouadjou-22110a324"; 

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available: the mailto link still works */
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-head">
        <span className="contact-label">(04) Get in touch</span>
        <h2>
          Let's <em>talk</em>
        </h2>
      </div>

      <p className="contact-intro">
        I'm looking for an internship as a junior full-stack or front-end
        developer, and I'm open to relocating. If you have an opportunity or
        just want to say hello, my inbox is open.
      </p>

      <div className="contact-main">
        <a className="contact-email" href={`mailto:${EMAIL}`}>
          {EMAIL} <span aria-hidden="true">↗</span>
        </a>

        <button type="button" className="copy-btn" onClick={copyEmail}>
          {copied ? "Copied ✓" : "Copy email"}
        </button>
      </div>

      <ul className="contact-links">
        {GITHUB && (
          <li>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </li>
        )}
        {LINKEDIN && (
          <li>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </li>
        )}
        {PHONE && (
          <li>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
              {PHONE} <span aria-hidden="true">↗</span>
            </a>
          </li>
        )}
        <li>
          <a href="/CV.pdf" download>
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </li>
      </ul>

      <footer className="site-footer">
        <span>
          © {new Date().getFullYear()} Nabil Ouadjou · Morocco
        </span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </section>
  );
}