import "./ExperienceCard.css";

// Renders a single experience entry in the timeline.
// Wrap multiple <ExperienceCard> in a <div className="exp-list">, most recent first.
//
// experience shape:
//   title             string   — job title
//   employer          string   — company name
//   startDate         string   — e.g. "Aug 2024"
//   endDate           string   — e.g. "Jan 2026", omit or "Present" for current role
//   location          string?  — optional, e.g. "Remote"
//   description       string | string[]  — paragraph or bullet points
//   technicalHighlight string? — a key achievement rendered in the accent snippet block
//   stack             string[] — tech chips shown at the bottom

const ExperienceCard = ({ experience }) => {
  const {
    title,
    employer,
    startDate,
    endDate,
    location,
    description,
    technicalHighlight,
    stack = [],
  } = experience;

  // Blue dot for current role, grey for past
  const isCurrent = !endDate || endDate.toLowerCase() === "present";
  const dateRange = `${startDate} — ${isCurrent ? "Present" : endDate}`;

  // Supports both a plain string and an array of bullet points
  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="exp-bullets">
          {description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      );
    }
    return <p className="exp-body">{description}</p>;
  };

  return (
    <div className="exp-entry">
      {/* Timeline spine: dot + vertical line connecting to the next entry */}
      <div className="exp-marker">
        <span className={`exp-dot${isCurrent ? " exp-dot--current" : ""}`} />
        <span className="exp-line" />
      </div>

      <div className="exp-content">
        {/* Header: title/employer on the left, monospace date on the right */}
        <div className="exp-header">
          <div className="exp-title-group">
            <h3 className="exp-title">{title}</h3>
            <span className="exp-employer">{employer}</span>
            {location && (
              <span className="exp-location">{location}</span>
            )}
          </div>
          <span className="exp-date">{dateRange}</span>
        </div>

        {description && renderDescription()}

        {/* Optional accent block for a key technical achievement */}
        {technicalHighlight && (
          <div className="technical-snippet exp-technical">
            {technicalHighlight}
          </div>
        )}

        {/* Tech stack chips */}
        {stack.length > 0 && (
          <div className="chip-row exp-chips">
            {stack.map((item) => (
              <span key={item} className="chip">{item}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
