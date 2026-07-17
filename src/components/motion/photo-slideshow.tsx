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
        <div
          key={src}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Blurred fill visible only on narrow/tall screens, where a landscape
              photo can't cover the frame without cropping into the subject. */}
          <Image
            src={src}
            alt=""
            aria-hidden
            fill
            priority={i === 0}
            sizes="100vw"
            quality={90}
            className="scale-110 object-cover object-center blur-2xl sm:hidden"
          />
          <Image
            src={src}
            alt={`${altPrefix} — foto ${i + 1}`}
            fill
            priority={i === 0}
            sizes="100vw"
            quality={90}
            className="object-contain sm:object-cover"
          />
        </div>
      ))}
    </>
  );
}
