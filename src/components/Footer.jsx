const Footer = () => (
  <footer className="footer">
    <span>© {new Date().getFullYear()} Nicolas Ranz</span>
    <div className="nav">
      <a href="mailto:nicolasranz@hotmail.com">Email</a>
      <a href="https://www.linkedin.com/in/nick-ranz/" target="_blank" rel="noreferrer">
        LinkedIn
      </a>
      <a href="#home">Back to top</a>
    </div>
  </footer>
);

export default Footer;
