import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import type { EducationVideo } from "@/lib/education-videos";

export function VideoCard({ video }: { video: EducationVideo }) {
  const ready = Boolean(video.href);

  return (
    <article className="card-hover flex h-full flex-col border border-gold/15 bg-navy-lift/20 p-5 md:p-6">
      <ImagePlaceholder
        label={video.thumbnailLabel}
        aspectRatio="16/9"
        alt=""
      />
      <p className="mt-5 text-[0.62rem] tracking-[0.18em] text-gold uppercase">
        {video.category}
      </p>
      <h3 className="mt-3 font-serif text-2xl text-ivory italic">{video.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-stone-light">{video.description}</p>
      <p className="mt-4 text-[0.62rem] tracking-[0.14em] text-stone uppercase">
        {video.duration} · {video.date}
      </p>
      <div className="mt-6">
        {ready && video.href ? (
          <Button href={video.href} variant="secondary" className="px-5 py-3">
            Watch video
          </Button>
        ) : (
          <p className="text-[0.65rem] tracking-[0.18em] text-stone uppercase">
            Video coming soon
          </p>
        )}
      </div>
    </article>
  );
}
