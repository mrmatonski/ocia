import Link from "next/link";
import { ParishFillImage } from "@/components/ui/ImagePlaceholder";
import { parseAnnouncementContent, type InlineNode } from "@/lib/announcement-content";
import { parishImagePosition } from "@/lib/site";

function Inline({ nodes }: { nodes: InlineNode[] }) {
  return (
    <>
      {nodes.map((node, index) => {
        const key = `${node.type}-${index}`;
        if (node.type === "strong") {
          return <strong key={key}>{node.value}</strong>;
        }
        if (node.type === "em") {
          return <em key={key}>{node.value}</em>;
        }
        if (node.type === "a") {
          const external = node.href.startsWith("http");
          return (
            <Link
              key={key}
              href={node.href}
              className="text-gold underline-offset-4 hover:underline"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {node.value}
            </Link>
          );
        }
        return <span key={key}>{node.value}</span>;
      })}
    </>
  );
}

export function AnnouncementBody({
  content,
  light = false,
}: {
  content: string;
  light?: boolean;
}) {
  const blocks = parseAnnouncementContent(content);
  const body = light ? "text-ink/75" : "text-stone-light";
  const heading = light ? "text-ink" : "text-ivory";

  return (
    <div className={`space-y-5 text-base leading-8 ${body}`}>
      {blocks.map((block, index) => {
        if (block.type === "note") {
          const labelId = `announcement-note-${index}`;
          return (
            <aside
              key={index}
              aria-labelledby={labelId}
              className="border-l-2 border-gold bg-gold/[0.07] px-5 py-4 md:px-6 md:py-5"
            >
              <p
                id={labelId}
                className="text-[0.62rem] tracking-[0.16em] text-gold uppercase"
              >
                Important reminder
              </p>
              <p
                className={`mt-2 font-serif text-[1.65rem] leading-snug italic md:text-[2rem] ${heading}`}
              >
                <Inline nodes={block.title} />
              </p>
              {block.body.length > 0 ? (
                <p className="mt-3 max-w-2xl text-sm leading-7 md:text-[0.95rem] md:leading-8">
                  <Inline nodes={block.body} />
                </p>
              ) : null}
            </aside>
          );
        }
        if (block.type === "figure") {
          const portrait = block.src.endsWith("bishop-preaching.jpg");
          return (
            <figure key={index} className={portrait ? "mx-auto w-full max-w-sm" : undefined}>
              <div
                className={`relative overflow-hidden border border-gold/15 ${
                  portrait ? "aspect-[2/3]" : "aspect-[3/2]"
                }`}
              >
                <ParishFillImage
                  src={block.src}
                  alt={block.alt}
                  sizes={portrait ? "(min-width: 768px) 24rem, 100vw" : "(min-width: 768px) 48rem, 100vw"}
                  objectPosition={portrait ? "center" : parishImagePosition(block.src)}
                />
              </div>
              {block.caption && block.caption.length > 0 ? (
                <figcaption className="media-caption mt-2 text-xs leading-relaxed">
                  <Inline nodes={block.caption} />
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className={`font-serif text-3xl italic ${heading} md:text-4xl`}
            >
              <Inline nodes={block.children} />
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className={`font-serif text-2xl italic ${heading} md:text-[1.85rem]`}
            >
              <Inline nodes={block.children} />
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Inline nodes={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index} className="list-decimal space-y-2 pl-5">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Inline nodes={item} />
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={index}>
            <Inline nodes={block.children} />
          </p>
        );
      })}
    </div>
  );
}
