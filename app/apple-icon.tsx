import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0908",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 90,
            height: 124,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 0,
              left: 34,
              width: 22,
              height: 124,
              background: "#b8954d",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 28,
              left: 0,
              width: 90,
              height: 22,
              background: "#b8954d",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
