import ElectricBorder from "../ElectricBorder";
import ProfileCard from "../ProfileCard";
import Section from "../layout/Section";

export default function SummarySection() {
  return (
    <Section ariaLabel="Personal Summary Section">
      <div
        style={{
          fontSize: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          maxWidth: "1200px",
          width: "100%",
          alignItems: "stretch",
        }}
      >
        <ElectricBorder
          chaos={0.1}
          style={{ flex: "1 1 500px", maxWidth: "600px" }}
        >
          <div>
            <div
              style={{
                fontSize: "300%",
                fontWeight: "bold",
                textDecoration: "underline",
                marginBottom: "20px",
              }}
            >
              About Me
            </div>
            <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
              Hello, my name is Juan Gomez Guzman, and I am a Senior Software
              Engineer at Visa Inc., where I deploy GenAI solutions
              at scale across the enterprise. I hold a Bachelor's degree in Electrical Engineering 
              (Computer & Embedded Systems) from The University of Houston and have completed 
              internships across diverse industries including biotech, oil & gas, and banking.
            </p>
            <br/>
            <br/>
            <p>
              What drives my passion for software engineering is the very thing that challenges 
              others—the complexity. I'm drawn to seemingly insurmountable problems, and this 
              pursuit of difficult challenges has defined my journey through personal, professional, 
              and academic endeavors. I thrive in environments where innovation meets adversity.
            </p>
          </div>
        </ElectricBorder>
        <div style={{ flex: "0 0 auto" }}>
          <ProfileCard
            name="Juan M. Gomez Guzman"
            title="Sr.Software Engineer - Visa Inc."
            handle="hello_world"
            status="Reach Out!"
            contactText="Contact Me"
            avatarUrl="src/assets/profesional_picture.jpeg"
            iconUrl="src/assets/hash-svgrepo-com.svg"
            behindGlowColor="rgba(0, 229, 255, 0.2)"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </Section>
  );
}
