import { HubGrid } from "@/components/education/HubGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { resourceGroups } from "@/lib/resources";

export function ResourceLibrary() {
  return (
    <div className="space-y-16 md:space-y-24">
      {resourceGroups.map((group, index) => (
        <Reveal key={group.id} delay={index * 0.04}>
          <section id={group.id} className="scroll-mt-28 md:scroll-mt-32">
            <SectionHeading
              eyebrow={group.eyebrow}
              title={group.title}
              description={group.description}
            />
            <div className="mt-14">
              <HubGrid items={group.items} />
            </div>
          </section>
        </Reveal>
      ))}
    </div>
  );
}
