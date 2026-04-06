import "./ContactCard.css";
import { CONTACT_LINKS } from "../constants";

// Versatile contact component — two modes:
//   Modal: pass onClose handler → renders backdrop + close button
//   Page:  omit onClose       → renders standalone (Information Registry + System Status)

const Card = ({ onClose }) => (
  <div className="contact-info-card">
    {/* Header — only shown in modal mode */}
    {onClose && (
      <div className="contact-info-header">
        <div>
          <div className="eyebrow">Contact</div>
          <h2 className="contact-info-title">Let's talk.</h2>
          <p className="contact-info-sub">Open to new roles, collaborations, or just a good conversation.</p>
        </div>
        <button className="contact-info-close" onClick={onClose} aria-label="Close">✕</button>
      </div>
    )}

    {/* Information Registry */}
    <h3 className="contact-registry-heading">Information Registry</h3>
    <div className="contact-info-list">
      {CONTACT_LINKS.map(({ label, value, href, icon }) => (
        <a
          key={label}
          href={href}
          className="contact-info-row"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
        >
          <div className="contact-info-icon">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <div className="contact-info-text">
            <span className="contact-info-label">{label}</span>
            <span className="contact-info-value">{value}</span>
          </div>
        </a>
      ))}
    </div>

    
  </div>
);

const ContactCard = ({ onClose }) => {
  // Modal mode — render with backdrop
  if (onClose) {
    return (
      <div className="contact-modal-backdrop" onClick={onClose}>
        {/* Stop clicks on the card from closing the modal */}
        <div onClick={(e) => e.stopPropagation()}>
          <Card onClose={onClose} />
        </div>
      </div>
    );
  }

  // Page mode — render card directly
  return <Card />;
};

export default ContactCard;
