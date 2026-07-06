import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050208",
        backgroundImage:
          "radial-gradient(circle at 25% 20%, rgba(168, 85, 247, 0.25), transparent 45%), radial-gradient(circle at 80% 75%, rgba(168, 85, 247, 0.15), transparent 45%)",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "10px 24px",
          borderRadius: 999,
          border: "1px solid rgba(168, 85, 247, 0.4)",
          backgroundColor: "rgba(168, 85, 247, 0.12)",
          color: "#a855f7",
          fontSize: 28,
          fontWeight: 600,
          marginBottom: 32,
        }}
      >
        Software Engineer & CS Master's Student
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 96,
          fontWeight: 700,
          color: "#f5f3f7",
          letterSpacing: "-0.03em",
        }}
      >
        Francisca <span style={{ color: "#a855f7", marginLeft: 20 }}>Almeida</span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 32,
          color: "#a8a0af",
        }}
      >
        falmeida.dev
      </div>
    </div>,
    { ...size },
  );
}
