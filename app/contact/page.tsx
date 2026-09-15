import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactAsk } from "@/components/contact/ContactAsk";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Reach Religious Education at St. Mary, Star of the Sea in Astoria, Oregon, or ask the St. Mary OCIA assistant a question about the Catholic faith.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin your journey."
        description="Call or write Religious Education to speak with a member of the parish staff. For ordinary questions about the Catholic faith, you may also ask the AI assistant on this page."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap grid items-start gap-14 lg:grid-cols-2">
          <ContactDetails />
          <ContactAsk />
        </div>
      </Section>
      <Section tone="dark" className="pb-24">
        <div className="page-wrap">
          <ImagePlaceholder
            label="St. Mary, Star of the Sea"
            aspectRatio="21/9"
            src="/images/parish/church-farley.jpg"
            alt="St. Mary, Star of the Sea, photograph by Michael Farley, Jr."
            caption="St. Mary, Star of the Sea — 1465 Grand Avenue, Astoria, Oregon. Photograph by Michael Farley, Jr."
          />
        </div>
      </Section>
    </>
  );
}
