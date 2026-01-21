import Plasma from "../Plasma";

export default function Background() {
  return (
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
        speed={1}
        direction="forward"
        scale={1.3}
        opacity={1}
        mouseInteractive={true}
      />
    </div>
  );
}
