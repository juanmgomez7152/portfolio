import Background from "./components/layout/Background";
import IntroSection from "./components/sections/IntroSection";
import SummarySection from "./components/sections/SummarySection";
import WorkExperienceSection from "./components/sections/WorkExperienceSection";
import ProjectSection from "./components/sections/ProjectsSection";
import TechnicalSkillsSection from "./components/sections/TechnicalSkillsSection";
// import StaggeredMenu from "./components/StaggeredMenu";

// const menuItems = [
//   { label: "Welcome", ariaLabel: "Go to welcome section", link: "#intro" },
//   { label: "About Me", ariaLabel: "Learn about me", link: "#summary" },
//   {
//     label: "Experience",
//     ariaLabel: "View our my work experience",
//     link: "#experience",
//   },
//   { label: "Projects", ariaLabel: "Get in touch", link: "#projects" },
//   { label: "Skills", ariaLabel: "View my skills", link: "#skills" },
// ];
// const socialItems = [
//   { label: "GitHub", link: "https://github.com/juanmgomez7152" },
//   { label: "LinkedIn", link: "https://www.linkedin.com/in/jmgomezguzman7/" },
//   { label: "Email", link: "mailto:juan.m.gomez7152@gmail.com" },
// ];

function App() {
  return (
    <div
      aria-label="Entry Point"
      className="dark"
      style={{
        background: "black",
        minHeight: "100vh",
        overflowY: "auto",
        position:'relative'
        // scrollSnapType: "y mandatory",
      }}
    >
      {/* <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#2F4F6F"]}
        logoUrl="/jg_neon_logo.svg"
        accentColor="#2F4F6F"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      /> */}
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
      
    </div>
  );
}

export default App;
