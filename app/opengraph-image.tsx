import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(160deg, #0c0b0a 0%, #10141c 55%, #1a1510 100%)",
          color: "#f4efe6",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 36,
            border: "1px solid rgba(196,163,90,0.35)",
          }}
        />
        <div style={{ fontSize: 22, letterSpacing: 10, color: "#c4a35a" }}>
          {site.parish.toUpperCase()}
        </div>
        <div style={{ fontSize: 28, letterSpacing: 14, color: "#c4a35a", marginTop: 18 }}>
          OCIA
        </div>
        <div style={{ fontSize: 88, marginTop: 28, fontStyle: "italic" }}>
          Come and See.
        </div>
        <div style={{ fontSize: 28, marginTop: 24, color: "#b7b0a3", maxWidth: 820 }}>
          {site.description}
        </div>
      </div>
    ),
    size,
  );
}
