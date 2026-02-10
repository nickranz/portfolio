import { ConfigProvider, Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Topbar from "./components/Topbar";
import { projects, skills } from "./content";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7cb2ff",
          colorBgContainer: "rgba(255,255,255,0.04)",
          colorBgBase: "#060911",
          colorTextBase: "#e8ecf7",
          borderRadius: 12,
          fontFamily: "'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif",
        },
      }}
    >
      <Layout className="page">
        <Topbar />
        <Content>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <ProjectsSection projects={projects} />
                  <SkillsSection skills={skills} />
                  <ContactSection />
                </>
              }
            />
            <Route path="/ai" element={<ArtificialIntelligence />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
}

export default App;
