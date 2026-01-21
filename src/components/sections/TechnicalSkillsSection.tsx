import LogoLoop from "../LogoLoop";
import techLogos from "@/assets/tech-stack";
import Section from "../layout/Section";

export default function TechnicalSkillsSection() {
  return (
    <Section ariaLabel="Technical Skills">
      <div
        style={{
          fontWeight: "bold",
          fontSize: "250%",
          textDecoration: "underline",
          marginBottom: "40px",
        }}
      >
        Technical Skills
      </div>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="black"
        ariaLabel="Technical Skills"
      />
    </Section>
  );
}
