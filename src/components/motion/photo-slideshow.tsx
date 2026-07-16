import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhotoSlideshow({
  images,
  index,
  altPrefix,
}: {
  images: string[];
  index: number;
  altPrefix: string;
}) {
  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${altPrefix} — foto ${i + 1}`}
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </>
  );
}
