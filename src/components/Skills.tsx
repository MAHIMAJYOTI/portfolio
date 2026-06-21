import { skills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I work with"
        description="From frontend polish to distributed backends and interpretable ML pipelines."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-500/30"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">{group.icon}</span>
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-[#0a0a0f] px-3 py-1 text-sm text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
