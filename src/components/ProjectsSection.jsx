import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ projects }) => {
  const [featured, ...rest] = projects;

  return (
    <section className="section" style={{ background: "var(--surface-low)" }} id="projects">
      <div className="section-inner">
        <div className="section-header">
          <div className="eyebrow">Selected work</div>
          <h2>Recent projects</h2>
          <p className="section-copy">
            Partnered with cross-functional teams to design, prototype, and ship thoughtful experiences.
          </p>
        </div>

        {/* Featured project */}
        {featured && (
          <div className="project-featured">
            <div className="project-featured-visual">
              <div className="hero-visual-grid" />
              <span className="project-featured-num">#01</span>
            </div>
            <div className="project-featured-content">
              <div>
                <div className="card-meta">{featured.stack.join(" · ")}</div>
                <h3 style={{ fontSize: "1.375rem", marginBottom: "12px" }}>{featured.title}</h3>
                <p className="card-body">{featured.blurb}</p>
              </div>
              <div className="cta-row" style={{ marginBottom: 0 }}>
                <a href={featured.link} className="primary-button">View project</a>
              </div>
            </div>
          </div>
        )}

        {/* Secondary grid */}
        <div className="grid">
          {rest.map((project, i) => (
            <ProjectCard key={project.title} num={i + 2} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
