import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import "./Contact.css";

const Contact = () => (
  <div className="contact-page">
    <div className="contact-page-inner">

      {/* Hero */}
      <header className="contact-hero">
        <div className="contact-hero-badge">
          <span className="contact-hero-dot" />
          Available for opportunities
        </div>
        <h1 className="contact-hero-title">
          Let's Connect<span className="contact-hero-accent">.</span>
        </h1>
        <p className="contact-hero-sub">
          Whether you have a role, a project, or just want to have a conversation — I'm always open to what's next.
        </p>
      </header>

      {/* Bento grid: info card (5) + form (7) */}
      <div className="contact-page-grid">
        <div className="contact-page-left">
          <ContactCard />
        </div>
        <div className="contact-page-right">
          <ContactForm />
        </div>
      </div>

    </div>
  </div>
);

export default Contact;
