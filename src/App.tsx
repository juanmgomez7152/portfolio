import Plasma from "./components/Plasma";
import LogoLoop from "./components/LogoLoop";
import techLogos from "./assets/tech-stack";
import TextType from "./components/TextType";
import ProfileCard from "./components/ProfileCard";
import ElectricBorder from "./components/ElectricBorder";

function App() {
  return (
    <div
      aria-label="Entry Point"
      style={{
        background: "black",
        height: "100vh",
        overflowY: "scroll",
        // scrollSnapType: "y mandatory",
      }}
    >
      <div
        aria-label="Background"
        style={{
          width: "100%",
          position: "relative",
          color: "white",
        }}
      >
        <div
          aria-label="Plasma Background Div"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Plasma
            color="#2F4F6F"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.8}
            mouseInteractive={true}
          />
        </div>

        {/* Section 1: Welcome Text */}
        <div
          aria-label="Welcome Text Section"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "start",
          }}
        >
          <div
            style={{
              fontSize: "300%",
              fontWeight: "bold",
            }}
          >
            <TextType
              text={["Welcome to Juan's Portfolio"]}
              typingSpeed={75}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
              loop={true}
            />
          </div>
        </div>

        {/* Section 2: Summary & Picture */}
        <div
          aria-label="Summary Section"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "start",
            padding: "20px",
          }}
        >
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
            chaos={.1}
            style={{ flex: "1 1 500px", maxWidth: "600px" }}
            >
              <div>
                <div
                  style={{
                    fontSize: "200%",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    marginBottom: "20px",
                  }}
                >
                  Who am I?
                </div>
                <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
                  Hello my name is Juan Gomez Guzman and I am a Senior Software
                  Engineer currently solving complex problems at Visa Inc. using
                  GenAI
                </p>
              </div>
            </ElectricBorder>

            {/* ProfileCard */}
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
        </div>

        {/* Section 3: Technical Skills */}
        <div
          aria-label="Technical Skills Section"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
            scrollSnapAlign: "start",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "125%",
              textDecoration: "underline",
              marginBottom: "20px",
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
        </div>
      </div>
    </div>
  );
}

export default App;
