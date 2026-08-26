import Link from "next/link";
import { parseAnnouncementContent, type InlineNode } from "@/lib/announcement-content";

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
