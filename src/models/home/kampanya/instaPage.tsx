"use client";
import { useEffect } from "react";

// ✅ window.instgrm
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramEmbed() {
  useEffect(() => {
    const instgrm = window.instgrm;

    if (instgrm) {
      instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/DILuhzEqfsA/"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          margin: 0,
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
}
