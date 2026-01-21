import { type CSSProperties, type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  ariaLabel?: string;
  style?: CSSProperties;
}

export default function Section({ children, ariaLabel, style }: SectionProps) {
  return (
    <div
      aria-label={ariaLabel}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
        color:"white",
        scrollSnapAlign: "start",
        ...style,
      }}
    >
      {children}
    </div>
  );
}