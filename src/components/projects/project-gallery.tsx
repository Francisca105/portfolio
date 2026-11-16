"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "@/lib/paths";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types/portfolio";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

// Cover image plus optional extra screenshots. The dialog renders it with
// key={project.title}, so the selection resets when another project opens.
export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selected, setSelected] = useState(0);
  const current = images[selected] ?? images[0];

  if (!current) return null;

  return (
    // This wrapper is the dialog's grid item, not the aspect-ratio box: a
    // stretched grid item ignores its aspect ratio, collapses its row and
    // overlaps the text below.
    <div className="space-y-2">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-border/50 bg-secondary/30">
        <Image
          src={assetPath(current.src)}
          alt={current.alt}
          fill
          sizes="(min-width: 640px) 42rem, 100vw"
          className="object-cover object-top"
        />
      </div>

      {images.length > 1 && (
        // One column per screenshot, each at most 6rem wide, so the row
        // shrinks to fit a phone instead of overflowing the dialog.
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${images.length}, minmax(0, 6rem))`,
          }}
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Show screenshot ${index + 1} of ${images.length}: ${image.alt}`}
              aria-pressed={index === selected}
              className={cn(
                "relative aspect-video w-full overflow-hidden rounded-md border transition-opacity",
                index === selected
                  ? "border-primary"
                  : "border-border/50 opacity-60 hover:opacity-100",
              )}
            >
              <Image
                src={assetPath(image.src)}
                alt=""
                fill
                sizes="6rem"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
