import { Link, useLocation } from "react-router-dom";
import { PERSONAL } from "../constants";

const Topbar = () => {
  const { pathname } = useLocation();

  const linkStyle = (path) => ({
    color: pathname === path ? "var(--on-surface)" : undefined,
  });

  return (
    <header className="topbar">
      <Link to="/" className="brand">NR</Link>

      <nav className="nav">
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>Skills</a>
        {/* <Link to="/ai" style={linkStyle("/ai")}>AI</Link> */}
        <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
        <Link to="/pacman" style={linkStyle("/pacman")}>Pac-Man</Link>
      </nav>

      <div className="topbar-actions">
        <a href={`mailto:${PERSONAL.email}`} className="nav-cta">
          Let&apos;s talk <span className="nav-cta-arrow">↗</span>
        </a>
      </div>
    </header>
  );
};

export default Topbar;
