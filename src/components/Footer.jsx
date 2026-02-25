const Footer = () => {
  const handleBackToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Nicolas Ranz</span>
      <div className="nav">
        <a href="mailto:nicolasranz@hotmail.com">Email</a>
        <a href="https://www.linkedin.com/in/nick-ranz/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="#top" onClick={handleBackToTop}>
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
