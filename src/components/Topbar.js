import { Button, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { key: "home", label: <Link to="/">Home</Link> },
  { key: "work", label: <a href="/#projects">Work</a> },
  { key: "skills", label: <a href="/#skills">Focus</a> },
  { key: "ai", label: <Link to="/ai">AI</Link> },
  { key: "contact", label: <a href="/#contact">Contact</a> },
];

const Topbar = () => {
  const { pathname, hash } = useLocation();
  const selectedKey = pathname === "/ai" ? "ai" : hash === "#projects" ? "work" : hash === "#skills" ? "skills" : "home";

  return (
    <header className="topbar">
      <div className="brand">NR</div>
      <Menu
        mode="horizontal"
        items={menuItems}
        selectedKeys={[selectedKey]}
        className="nav-menu"
      />
      <Button type="default" href="mailto:nicolasranz@gmail.com" className="ghost-button">
        Let&apos;s talk
      </Button>
    </header>
  );
};

export default Topbar;
