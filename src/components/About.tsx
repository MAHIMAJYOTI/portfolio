import { aboutParagraphs, siteConfig } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Analytics-first engineering, shipped end-to-end"
        description="I publish interpretable ML pipelines and ship full-stack systems that people actually use."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-zinc-400">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
              Currently Building
            </p>
            <p className="mt-2 text-lg text-white">{siteConfig.currentlyBuilding}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-medium uppercase tracking-wider text-violet-400">
              Open To
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {siteConfig.openTo.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 py-3">
            <div className="animate-marquee flex w-max gap-6">
              {[...siteConfig.interestTags, ...siteConfig.interestTags].map(
                (tag, i) => (
                  <span
                    key={`${tag}-${i}`}
                    className="whitespace-nowrap rounded-full border border-white/10 px-4 py-1.5 text-sm text-zinc-400"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
