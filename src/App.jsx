import { ConfigProvider, Layout, theme } from "antd";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import Topbar from "./components/Topbar";
import { SKILLS as skills } from "./constants";
import Contact from "./pages/Contact";
import Pacman from "./pages/pacman/Pacman";
import Chat from "./components/Chat/Chat";

const { Content } = Layout;

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleDark = () => setIsDark((d) => !d);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: isDark ? "#6b9fff" : "#0055ff",
          colorBgContainer: isDark ? "#1a1c1e" : "#ffffff",
          colorBgBase: isDark ? "#121416" : "#f9f9fc",
          colorTextBase: isDark ? "#e2e2e5" : "#1a1c1e",
          borderRadius: 12,
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        },
      }}
    >
      <Layout className="page" style={{ background: "var(--surface, #f9f9fc)" }}>
        <Topbar isDark={isDark} onToggleTheme={toggleDark} />
        <Content>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  {/* <ProjectsSection projects={projects} /> */}
                  <SkillsSection skills={skills} />
                  <ContactSection />
                </>
              }
            />
            {/* <Route path="/ai" element={<ArtificialIntelligence />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/pacman" element={<Pacman />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
      <Chat />
    </ConfigProvider>
  );
}

export default App;
