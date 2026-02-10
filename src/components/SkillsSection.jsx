import { Tag } from "antd";
import SectionHeader from "./SectionHeader";

const SkillsSection = ({ skills }) => (
  <section className="section" id="skills">
    <SectionHeader
      eyebrow="How I work"
      title="Focus areas"
      copy="Hands-on engineer who moves between discovery, prototyping, and production-quality delivery."
    />
    <div className="pill-grid dense">
      {skills.map((skill) => (
        <Tag key={skill} className="pill muted">
          {skill}
        </Tag>
      ))}
    </div>
  </section>
);

export default SkillsSection;
