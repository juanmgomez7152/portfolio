import Plasma from "./components/Plasma";
import LogoLoop from "./components/LogoLoop";
import techLogos from "./assets/tech-stack";
import TextType from "./components/TextType";

function App() {
  return (
    <div
      aria-label="Entry Point"
      style={{
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        aria-label="Background"
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          aria-label="Plasma Background Div"
          style={{
            position: "absolute",
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
        <div
          aria-label="Portfolio Content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            aria-label="Welcome Text"
            style={{
              fontSize: "200%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextType
              text={["Welcome!", "This is Juan's Portfolio"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
        <div
          aria-label="Technical Skills Loop"
          style={{
            height: "100px",
            position: "absolute",
            overflow: "hidden",
            left: 0,
            right: 0,
            display: "flex",
            bottom: "5px",
          }}
        >
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
