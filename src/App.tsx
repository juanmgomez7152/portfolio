import Background from "./components/layout/Background";
import IntroSection from "./components/sections/IntroSection";
import SummarySection from "./components/sections/SummarySection";
import WorkExperienceSection from "./components/sections/WorkExperienceSection";
import ProjectSection from "./components/sections/ProjectsSection";
import TechnicalSkillsSection from "./components/sections/TechnicalSkillsSection";

function App() {
  return (
    <div
      aria-label="Entry Point"
      className="dark"
      style={{
        background: "black",
        height: "100vh",
        overflowY: "scroll",
        // scrollSnapType: "y mandatory",
      }}
    >
      <Background/>
      <IntroSection/>
      <SummarySection/>
      <WorkExperienceSection/>
      <ProjectSection/>
      <TechnicalSkillsSection/>
    </div>
  );
}

export default App;
