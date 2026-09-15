import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 16,
            height: 22,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 0,
              left: 6,
              width: 4,
              height: 22,
              background: "#b8954d",
            }}
          />
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 5,
              left: 0,
              width: 16,
              height: 4,
              background: "#b8954d",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
