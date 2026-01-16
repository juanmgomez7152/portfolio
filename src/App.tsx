import Plasma from "./components/Plasma";
import LogoLoop from "./components/LogoLoop";
import techLogos from "./assets/tech-stack";

function App() {
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Plasma
          color="#2F4F6F"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
        <div
          style={{ 
            height: "100px", 
            position: "absolute", 
            overflow: "hidden",
            left:0,
            right:0,
            display: 'flex',
            bottom:'5px',
            color:'white'
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
            fadeOutColor='black'
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
