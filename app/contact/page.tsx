import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin your OCIA journey or ask a question at St. Mary, Star of the Sea in Astoria, Oregon.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin your journey."
        description="Tell us a little about yourself. The first step is simply a conversation."
      />
      <Section tone="navy" className="py-20 md:py-28">
        <div className="page-wrap grid items-start gap-14 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Section>
      <Section tone="dark" className="pb-24">
        <div className="page-wrap">
          <ImagePlaceholder
            label="Church Exterior Placeholder"
            aspectRatio="21/9"
            caption="A future photograph of St. Mary, Star of the Sea — Astoria, Oregon."
          />
        </div>
      </Section>
    </>
  );
}
