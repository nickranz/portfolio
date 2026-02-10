// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
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
import Chat from "./components/Chat/Chat";

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
          fontFamily:
            "'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif",
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
      <Chat />
    </ConfigProvider>
  );
}

export default App;
