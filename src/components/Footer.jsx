import { PERSONAL } from "../constants";

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <span>© {new Date().getFullYear()} {PERSONAL.name}</span>
      <div className="nav">
        <a href={`mailto:${PERSONAL.email}`}>Email</a>
        <a href={PERSONAL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={PERSONAL.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href="#home">Back to top</a>
      </div>
    </div>
  </footer>
);

export default Footer;
