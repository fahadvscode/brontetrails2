import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bronte Trails Townhomes Oakville by Caivan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1e3a3f",
          padding: 60,
        }}
      >
        <div
          style={{
            width: 48,
            height: 2,
            backgroundColor: "#c4a35a",
            marginBottom: 36,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontFamily: "Georgia, serif",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Bronte Trails Townhomes
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#c4a35a",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Oakville · Pre-Construction by Caivan
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#ffffff",
            opacity: 0.8,
            marginTop: 28,
            textAlign: "center",
          }}
        >
          Freehold Townhomes — No Condo Fees — Register VIP
        </div>
      </div>
    ),
    { ...size },
  );
}
