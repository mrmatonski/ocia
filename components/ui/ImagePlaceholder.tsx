import Image from "next/image";
import { CameraIcon } from "@/components/icons";
import { CathedralVault } from "@/components/ui/Ornament";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  aspectRatio?: `${number}/${number}` | number | string;
  className?: string;
  src?: string;
  alt?: string;
  caption?: string;
};

export function ImagePlaceholder({
  label,
  aspectRatio = "16/9",
  className,
  src,
  alt,
  caption,
}: Props) {
  return (
    <figure className={cn("group image-frame relative overflow-hidden", className)}>
      <div
        className="relative overflow-hidden border border-gold/25"
        style={{ aspectRatio }}
      >
        <div className="pointer-events-none absolute inset-3 z-10 border border-gold/12" />
        <div className="pointer-events-none absolute top-3 left-3 z-10 h-4 w-4 border-t border-l border-gold/50" />
        <div className="pointer-events-none absolute top-3 right-3 z-10 h-4 w-4 border-t border-r border-gold/50" />
        <div className="pointer-events-none absolute bottom-3 left-3 z-10 h-4 w-4 border-b border-l border-gold/50" />
        <div className="pointer-events-none absolute right-3 bottom-3 z-10 h-4 w-4 border-r border-b border-gold/50" />

        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            className="image-frame-inner object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        ) : (
          <div className="image-frame-inner placeholder-sheen absolute inset-0">
            <CathedralVault className="absolute inset-x-[-8%] -top-[8%] h-[120%] w-[116%] opacity-70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="flex h-11 w-11 items-center justify-center border border-gold/35 text-gold">
                <CameraIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-[0.62rem] tracking-[0.28em] text-gold/90 uppercase">
                {label}
              </span>
              <span className="max-w-[16rem] text-xs leading-relaxed text-stone-light/80">
                St. Mary, Star of the Sea — Astoria, Oregon.
              </span>
            </div>
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs tracking-wide text-stone">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
