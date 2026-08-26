import { faqPreviewItems } from "@/lib/faq";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FAQPreview() {
  return (
    <Section tone="dark" className="py-28 md:py-36">
      <div className="page-wrap">
        <SectionHeading
          eyebrow="Is OCIA for me?"
          title="Come as you are."
          description="The most honest questions are often the ones people are afraid to ask. They are welcome here."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <FAQAccordion items={faqPreviewItems} />
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/faq" variant="secondary">
            Read all questions
          </Button>
        </div>
      </div>
    </Section>
  );
}
