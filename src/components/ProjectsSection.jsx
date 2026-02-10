import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ projects }) => (
  <section className="section" id="projects">
    <SectionHeader
      eyebrow="Selected work"
      title="Recent projects"
      copy="Partnered with cross-functional teams to design, prototype, and ship thoughtful experiences."
    />
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
