const ProjectCard = ({ title, blurb, stack, link, num }) => (
  <div className="card">
    <div className="card-meta">
      {num ? `#0${num} · ` : ""}{stack.join(" · ")}
    </div>
    <div className="card-header">
      <h3>{title}</h3>
      <a href={link} className="text-link">View →</a>
    </div>
    <p className="card-body">{blurb}</p>
    <div className="chip-row">
      {stack.map((item) => (
        <span key={item} className="chip">{item}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
