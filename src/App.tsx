import Background from "./components/layout/Background";
import IntroSection from "./components/sections/IntroSection";
import SummarySection from "./components/sections/SummarySection";
import WorkExperienceSection from "./components/sections/WorkExperienceSection";
import ProjectSection from "./components/sections/ProjectsSection";
import TechnicalSkillsSection from "./components/sections/TechnicalSkillsSection";
import StaggeredMenu from "./components/StaggeredMenu";
import CommentsSection from "./components/sections/CommentsSection";
import { useEffect } from "react";
import { socialItems, menuItems } from "./assets/MenuItems";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <div
      aria-label="Entry Point"
      className="dark"
      style={{
        background: "black",
        height: "100vh",
        overflowY: "scroll",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          isFixed={true}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#00D9FF", "#2F4F6F"]}
          logoUrl="/jg_neon_logo.svg"
          accentColor="#2F4F6F"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
        />
      </div>
      <Background />
      <section id="intro">
        <IntroSection />
      </section>
      <section id="summary">
        <SummarySection />
      </section>
      <section id="experience">
        <WorkExperienceSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="skills">
        <TechnicalSkillsSection />
      </section>
      <section id="dev-comments">
        <CommentsSection/>
      </section>
    </div>
  );
}

export default App;
