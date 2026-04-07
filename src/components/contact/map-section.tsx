"use client";

import { useTheme } from "next-themes";

export function MapSection() {
  const { theme, systemTheme } = useTheme();

  const location = encodeURIComponent("Lisbon, Portugal");
  const noKeySrc = `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const mapFilter =
    resolvedTheme === "dark" ? "grayscale(100%) invert(90%)" : "grayscale(20%)";

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-purple-500/20 shadow-lg">
      <iframe
        width="100%"
        height="100%"
        title="Location map of Lisbon, Portugal"
        style={{ border: 0, filter: mapFilter }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={noKeySrc}
      ></iframe>
    </div>
  );
}
