import Plasma from "./components/Plasma";

function App() {
  return (
    <div style={{
      background:'black',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      minHeight:'100vh'
    }
    }>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Plasma
          color="#2F4F6F"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
    </div>
  );
}

export default App;
