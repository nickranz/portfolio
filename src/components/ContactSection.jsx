import { useState } from "react";
import ContactCard from "./ContactCard";

const ContactSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);

  return (
    <>
      <section className="section" style={{ background: "var(--surface-low)" }} id="contact">
        <div className="section-inner">
          <div className="contact-card">
            <div className="eyebrow">Get in touch</div>
            <h2>Always open to <em>what's next.</em></h2>
            <p className="section-copy">
              Whether it's a new role, a project, or just a good conversation — I'm always looking to learn, grow, and work on things that matter. Don't hesitate to reach out.
            </p>
            <div className="cta-row" style={{ marginTop: "32px" }}>
              <button className="primary-button" onClick={() => setModalOpen(true)}>
                Get in touch
              </button>
              <a
                href="https://github.com/nickranz"
                target="_blank"
                rel="noreferrer"
                className="ghost-button"
                onMouseEnter={() => setGithubHovered(true)}
                onMouseLeave={() => setGithubHovered(false)}
              >
                {githubHovered ? "GitHub ↗" : "See my work"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal — rendered outside section to sit above everything */}
      {modalOpen && <ContactCard onClose={() => setModalOpen(false)} />}
    </>
  );
};

export default ContactSection;
