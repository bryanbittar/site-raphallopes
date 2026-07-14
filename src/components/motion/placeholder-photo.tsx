import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Stand-in for real photography. Renders an intentional, on-brand block
 * (never a broken <img>) with a caption naming the shot to drop in later.
 * Swap for <Image src="/images/..." /> once assets are delivered.
 */
export function PlaceholderPhoto({
  caption,
  tone = "light",
  fill = false,
  className,
}: {
  caption: string;
  tone?: "light" | "dark";
  fill?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "placeholder-hatch relative overflow-hidden",
        fill && "absolute inset-0",
        className,
      )}
    >
      {tone === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/35 to-ink/60" />
      )}
      {/* Full-bleed placeholders sit behind centered headline copy (hero, CTA) —
          a centered icon there would collide with that text, so it only
          appears on standalone thumbnails (grid, cards, avatars). */}
      {!fill && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            tone === "dark" ? "text-white/25" : "text-ink-faint/50",
          )}
        >
          <ImageIcon strokeWidth={1} className="size-8" />
        </div>
      )}
      <span
        className={cn(
          "absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded-sm px-2 py-1 text-[0.6rem] uppercase tracking-[0.14em]",
          tone === "dark"
            ? "bg-white/10 text-white/70 backdrop-blur-sm"
            : "bg-ink/5 text-ink-faint",
        )}
      >
        {caption}
      </span>
    </div>
  );
}
