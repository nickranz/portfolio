import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ResumeModal from "./ResumeModal";
import { EXPERIENCES, PERSONAL } from "../constants";
import headshot from "../assets/headshot.jpg";

const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const startMonth = PERSONAL.expStartMonth;
  const startYear = PERSONAL.expStartYear;
  let curYear = new Date().getFullYear();
  let curMonth = new Date().getMonth();

  const calcYearsOfExp =()=>{
    const totalMonths = (curYear - startYear) * 12 + (curMonth - startMonth);
    const totalYears = totalMonths / 12;
    const wholeYears = Math.floor(totalYears);
    const extraYears = totalYears - wholeYears;

    return wholeYears + (extraYears >= 0.4 ? 0.5 : 0);
  }
  const yearsOfExp = calcYearsOfExp();
  return (
  
  <section className="hero" id="home">
    <div className="hero-inner">
      <div className="eyebrow">Portfolio · {curYear}</div>
      <div className="hero-body">
        <div className="hero-body-text">
          <h1>Hello! I'm Nick</h1>
          <p className="lede">
            I'm a full-stack developer who enjoys learning and building across different parts of the stack.
            Lately, I've been exploring projects in the AI space, while still staying curious about systems and web development.
          </p>
          <div className="cta-row">
            <a href="#projects" className="primary-button">
              View selected work
            </a>
            <a
              href="https://www.linkedin.com/in/nick-ranz/"
              target="_blank"
              rel="noreferrer"
              className="ghost-button"
            >
              LinkedIn →
            </a>
            <div className="stat">
              <strong>{yearsOfExp}+</strong>
              <span>Years in craft</span>
            </div>
          </div>
        </div>

        <div className="hero-headshot-wrap">
          <img src={headshot} alt="Nick Ranz" className="hero-headshot" />
        </div>
      </div>
    </div>

    {/* Experience strip — own background to signal a new sub-section */}
    <div className="hero-experience">
      <div className="hero-inner">
        <div className="exp-list">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.employer} experience={exp} />
          ))}
        </div>
        <div className="hero-resume-cta">
          <button className="primary-button" onClick={() => setResumeOpen(true)}>
            <span className="material-symbols-outlined">description</span>
            View Resume
          </button>
        </div>
      </div>
    </div>

    {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
  </section>
)} 

export default Hero;
