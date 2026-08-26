export type InlineNode =
  | { type: "text"; value: string }
  | { type: "strong"; value: string }
  | { type: "em"; value: string }
  | { type: "a"; href: string; value: string };

export type ContentBlock =
  | { type: "p"; children: InlineNode[] }
  | { type: "h2"; children: InlineNode[] }
  | { type: "h3"; children: InlineNode[] }
  | { type: "ul"; items: InlineNode[][] }
  | { type: "ol"; items: InlineNode[][] };

export function isSafeHref(href: string) {
  return (
    (href.startsWith("/") && !href.startsWith("//")) ||
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("mailto:")
  );
}

export function parseInline(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > cursor) {
      nodes.push({ type: "text", value: text.slice(cursor, match.index) });
    }
    if (match[1] != null && match[2] != null && isSafeHref(match[2])) {
      nodes.push({ type: "a", value: match[1], href: match[2] });
    } else if (match[1] != null && match[2] != null) {
      nodes.push({ type: "text", value: match[1] });
    } else if (match[3] != null) {
      nodes.push({ type: "strong", value: match[3] });
    } else if (match[4] != null) {
      nodes.push({ type: "em", value: match[4] });
    }
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) {
    nodes.push({ type: "text", value: text.slice(cursor) });
  }

  return nodes;
}

function isUnorderedList(block: string) {
  return block.split("\n").every((line) => /^[-*]\s+/.test(line.trim()));
}

function isOrderedList(block: string) {
  return block.split("\n").every((line) => /^\d+\.\s+/.test(line.trim()));
}

export function parseAnnouncementContent(content: string): ContentBlock[] {
  return content
    .trim()
    .split(/\n{2,}/)
    .map((raw) => raw.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("## ")) {
        return { type: "h2" as const, children: parseInline(block.slice(3).trim()) };
      }
      if (block.startsWith("### ")) {
        return { type: "h3" as const, children: parseInline(block.slice(4).trim()) };
      }
      if (isUnorderedList(block)) {
        return {
          type: "ul" as const,
          items: block.split("\n").map((line) => parseInline(line.trim().replace(/^[-*]\s+/, ""))),
        };
      }
      if (isOrderedList(block)) {
        return {
          type: "ol" as const,
          items: block.split("\n").map((line) => parseInline(line.trim().replace(/^\d+\.\s+/, ""))),
        };
      }
      return { type: "p" as const, children: parseInline(block.replace(/\n/g, " ")) };
    });
}
