import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { WhyOcia } from "@/components/home/WhyOcia";
import { SchedulePreview } from "@/components/home/SchedulePreview";
import { TopicsPreview } from "@/components/home/TopicsPreview";
import { JourneyPreview } from "@/components/home/JourneyPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
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
