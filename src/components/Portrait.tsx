import Image from "next/image";
import { imageExists } from "@/lib/images";

const PORTRAIT_PATH = "/images/personal/portraits/portrait.jpg";
const PORTRAIT_WEBP = "/images/personal/portraits/portrait.webp";

function findPortrait(): string | null {
  if (imageExists(PORTRAIT_WEBP)) return PORTRAIT_WEBP;
  if (imageExists(PORTRAIT_PATH)) return PORTRAIT_PATH;
  return null;
}

export default function Portrait() {
  const src = findPortrait();

  if (!src) {
    return (
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 5",
          backgroundColor: "var(--surface)",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-hidden
      >
        <span
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "var(--border)",
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          SS
        </span>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "4 / 5",
        borderRadius: "6px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image
        src={src}
        alt="Sebastian Suarez"
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        sizes="(max-width: 768px) 0px, 220px"
        priority
      />
    </div>
  );
}
