import { SKILLS } from "../constants";

const { languages, frameworks, databases, cloudDevOps, tools } = SKILLS;

const SkillsSection = ({ skills }) => (
  <section className="section" style={{ background: "var(--surface-container)" }} id="skills">
    <div className="section-inner">
      <div className="section-header">
        <div className="eyebrow">Technical skills</div>
        <h2>Tools I've picked up along the way</h2>
        <p className="section-copy">
          Each role has pushed me into a different part of the stack. I pick up what the project needs and get productive with it — the list keeps growing.
        </p>
      </div>
      <div className="tech-matrix">
        <div className="tech-col">
          <h3>Languages</h3>
          <div className="tech-list">
            {languages.map((item) => (
              <div key={item[0]} className="tech-item">{item[0]}<span>{item[1]}</span></div>
            ))}
          </div>
        </div>
        <div className="tech-col">
          <h3>Frameworks &amp; Libraries</h3>
          <div className="tech-list">
            {frameworks.map((item) => (
              <div key={item[0]} className="tech-item">{item[0]}<span>{item[1]}</span></div>
            ))}
          </div>
        </div>
        <div className="tech-col">
          <h3>Databases</h3>
          <div className="tech-list">
            {databases.map((item) => (
              <div key={item[0]} className="tech-item">{item[0]}<span>{item[1]}</span></div>
            ))}
          </div>
        </div>
        <div className="tech-col">
          <h3>Cloud &amp; DevOps</h3>
          <div className="tech-list">
            {cloudDevOps.map((item) => (
              <div key={item[0]} className="tech-item">{item[0]}<span>{item[1]}</span></div>
            ))}
          </div>
        </div>
        <div className="tech-col">
          <h3>Tools &amp; Platforms</h3>
          <div className="tech-list">
            {tools.map((item) => (
              <div key={item[0]} className="tech-item">{item[0]}<span>{item[1]}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
