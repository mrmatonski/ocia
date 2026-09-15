import { Hero } from "@/components/home/Hero";
import { LatestAnnouncement } from "@/components/home/LatestAnnouncement";
import { Introduction } from "@/components/home/Introduction";
import { WhyOcia } from "@/components/home/WhyOcia";
import { SchedulePreview } from "@/components/home/SchedulePreview";
import { TopicsPreview } from "@/components/home/TopicsPreview";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTASection } from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { nextClassEventLd } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

export default function Home() {
  const eventLd = nextClassEventLd();

  return (
    <>
      {eventLd ? <JsonLd data={eventLd} /> : null}
      <Hero />
      <LatestAnnouncement />
      <Introduction />
      <WhyOcia />
      <SchedulePreview />
      <TopicsPreview />
      <JourneyPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
}
