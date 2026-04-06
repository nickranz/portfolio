import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

import { projects, skills } from "../content";

const Home = () => {
  return (
    <>
      <Hero />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ContactSection />
    </>
  );
};

export default Home;
