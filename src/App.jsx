import { ConfigProvider, Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Topbar from "./components/Topbar";
import { SKILLS as skills } from "./constants";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import Contact from "./pages/Contact";
import Pacman from "./pages/pacman/Pacman";
import Chat from "./components/Chat/Chat";
import Pacman from "./pages/pacman/Pacman";
import Home from "./pages/Home";

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0055ff",
          colorBgContainer: "#ffffff",
          colorBgBase: "#f9f9fc",
          colorTextBase: "#1a1c1e",
          borderRadius: 12,
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        },
      }}
    >
      <Layout className="page" style={{ background: "var(--surface, #f9f9fc)" }}>
        <Topbar />
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
