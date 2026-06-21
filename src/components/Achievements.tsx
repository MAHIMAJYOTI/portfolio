import { achievements } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Achievements"
        title="Milestones along the way"
        description="Hackathons, certifications, internships, and academic excellence."
      />

      <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[19px] before:w-px before:bg-white/10 md:before:left-1/2">
        {achievements.map((item, i) => (
          <div
            key={item.title}
            className={`relative flex flex-col gap-4 md:flex-row ${
              i % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="hidden flex-1 md:block" />
            <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-[#0a0a0f] md:left-1/2 md:-translate-x-1/2">
              <span className="text-xs font-bold text-violet-400">{item.year}</span>
            </div>
            <div
              className={`flex-1 pl-14 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
