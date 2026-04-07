"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SkillIconProps {
  icons: {
    light: string;
    dark: string;
  };
  name: string;
  size?: number;
}

export function SkillIcon({ icons, name, size = 24 }: SkillIconProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="bg-muted rounded animate-pulse"
        style={{ width: size, height: size }}
      />
    );
  }

  const iconUrl = resolvedTheme === "dark" ? icons.dark : icons.light;

  return (
    <Image
      src={iconUrl}
      alt={name}
      width={size}
      height={size}
      className="object-contain"
      unoptimized
    />
  );
}
