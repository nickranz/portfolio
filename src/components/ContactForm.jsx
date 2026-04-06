import { useState } from "react";
import "./ContactForm.css";

const empty = { name: "", email: "", message: "" };

const ContactForm = () => {
  const [fields, setFields] = useState(empty);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Opens the user's mail client with the form data pre-filled
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${fields.name}`);
    const body = encodeURIComponent(
      `From: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    );
    window.location.href = `mailto:nicolasranz@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFields(empty);
  };

  return (
    <div className="contact-form-card">
      <div className="contact-form-card-header">
        <h2 className="contact-form-title">Send a message</h2>
        <p className="contact-form-subtitle">Fill out the fields below to initialize a connection.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {/* Two-column row: Name and Email side by side */}
        <div className="contact-form-row">
          <div className="contact-form-group">
            <label className="contact-form-label" htmlFor="cf-name">Name / Company</label>
            <input
              id="cf-name"
              name="name"
              type="text"
              className="contact-form-input"
              placeholder="Jane Smith / Acme Corp"
              value={fields.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-form-group">
            <label className="contact-form-label" htmlFor="cf-email">Your Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              className="contact-form-input"
              placeholder="you@example.com"
              value={fields.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Full-width message */}
        <div className="contact-form-group">
          <label className="contact-form-label" htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            className="contact-form-input contact-form-textarea"
            placeholder="Project details or inquiry..."
            rows={5}
            value={fields.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Footer row: security note + submit button */}
        <div className="contact-form-footer">
          <button type="submit" className="primary-button contact-form-submit">
            Send message
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>

        {submitted && (
          <p className="contact-form-confirm">Opening your mail client…</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
