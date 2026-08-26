import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Ornament } from "@/components/ui/Ornament";

export function Introduction() {
  return (
    <Section id="introduction" tone="ivory" className="py-24 md:py-32">
      <div className="page-wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow text-gold-dim">An invitation</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.12] font-medium text-ink italic md:text-6xl">
            What is OCIA?
          </h2>
          <Ornament className="mt-7" light align="start" />
          <div className="mt-8 space-y-5 text-base leading-8 text-ink/72 md:text-lg">
            <p>
              OCIA — the Order of Christian Initiation of Adults — is the
              Church&apos;s way of walking with adults who wish to explore the
              Catholic faith and discern a deeper relationship with Christ and
              His Church.
            </p>
            <p>
              It is not a lecture series to complete, nor a test to pass. It is
              a season of encounter: of questions asked in good faith, of
              prayer learned slowly, of a community that makes room for those
              who are still finding their way.
            </p>
            <p>
              Some who come are unbaptized. Some were baptized in another
              Christian tradition. Some are Catholic already and wish to
              complete the sacraments, or simply to understand the faith more
              deeply. All are welcome to begin. At St. Mary, classes are weekly
              and begin in the Fall.
            </p>
          </div>
          <div className="mt-10">
            <Button href="/about" className="bg-ink text-ivory hover:bg-navy">
              Learn more about OCIA
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ImagePlaceholder
            label="St. Mary, Star of the Sea"
            aspectRatio="4/5"
            src="/images/parish/church-exterior.jpg"
            alt="St. Mary, Star of the Sea Catholic Church in Astoria, Oregon"
            caption="St. Mary, Star of the Sea — 1465 Grand Avenue, Astoria."
          />
        </Reveal>
      </div>
    </Section>
  );
}
