import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { PERSONAL } from "../constants";

const Topbar = ({ isDark, onToggleTheme }) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const linkStyle = (path) => ({
    color: pathname === path ? "var(--on-surface)" : undefined,
  });

  const closeMenu = () => setMenuOpen(false);

  const scrollToSkills = (e) => {
    e.preventDefault();
    closeMenu();
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);


  return (
    <header className="topbar" ref={menuRef}>
      <Link to="/" className="brand">NR</Link>

      {/* Desktop nav */}
      <nav className="nav nav-desktop">
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <a href="#skills" onClick={scrollToSkills}>Skills</a>
        <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
        <Link to="/pacman" style={linkStyle("/pacman")}>Pac-Man</Link>
      </nav>

      <div className="topbar-actions">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="material-symbols-outlined">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </button>

        {/* Desktop CTA */}
        <a href={`mailto:${PERSONAL.email}`} className="nav-cta nav-cta-desktop">
          Let&apos;s talk <span className="nav-cta-arrow">↗</span>
        </a>

        {/* Hamburger (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav className={`nav-mobile${menuOpen ? " nav-mobile--open" : ""}`}>
        <Link to="/" style={linkStyle("/")} onClick={closeMenu}>Home</Link>
        <a href="#skills" onClick={scrollToSkills}>Skills</a>
        <Link to="/contact" style={linkStyle("/contact")} onClick={closeMenu}>Contact</Link>
        <Link to="/pacman" style={linkStyle("/pacman")} onClick={closeMenu}>Pac-Man</Link>
        <a href={`mailto:${PERSONAL.email}`} className="nav-cta nav-mobile-cta">
          Let&apos;s talk <span className="nav-cta-arrow">↗</span>
        </a>
      </nav>
    </header>
  );
};

export default Topbar;
