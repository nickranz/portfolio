import resumePdf from "../assets/Resume.pdf";
import "./ResumeModal.css";

const ResumeModal = ({ onClose }) => (
  <div className="resume-modal-backdrop" onClick={onClose}>
    <div className="resume-modal" onClick={(e) => e.stopPropagation()}>

      {/* Header */}
      <div className="resume-modal-header">
        <div className="resume-modal-title">
          <span className="eyebrow" style={{ marginBottom: 0 }}>Resume</span>
          <span className="resume-modal-name">Nick Ranz</span>
        </div>
        <div className="resume-modal-actions">
          <a href={resumePdf} download="NickRanz_Resume.pdf" className="primary-button resume-modal-download">
            <span className="material-symbols-outlined">download</span>
            Download
          </a>
          <button className="resume-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
      </div>

      {/* PDF viewer */}
      <div className="resume-modal-viewer">
        <iframe
          src={resumePdf}
          title="Nick Ranz Resume"
          className="resume-modal-iframe"
        />
      </div>

    </div>
  </div>
);

export default ResumeModal;
