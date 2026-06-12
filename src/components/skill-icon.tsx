"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SkillIconProps {
  icons: {
    light: string;
    dark: string;
  } | null;
  name: string;
  size?: number;
}

export function SkillIcon({ icons, name, size = 24 }: SkillIconProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Some skills have no icon — render a neutral placeholder with the
  // skill's initial instead of crashing.
  if (!icons || (!icons.light && !icons.dark)) {
    return (
      <div
        className="flex items-center justify-center rounded bg-muted text-[10px] font-semibold text-muted-foreground"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  if (!mounted) {
    return (
      <div
        className="bg-muted rounded animate-pulse"
        style={{ width: size, height: size }}
      />
    );
  }

  const iconUrl =
    resolvedTheme === "dark"
      ? icons.dark || icons.light
      : icons.light || icons.dark;

  return (
    <Image
      src={iconUrl}
      alt={name}
      width={size}
      height={size}
      className="object-contain"
      unoptimized
      // Load skillicons images eagerly to avoid LCP delays when they're above the fold.
      loading={iconUrl.includes("skillicons.dev") ? "eager" : undefined}
    />
  );
}
