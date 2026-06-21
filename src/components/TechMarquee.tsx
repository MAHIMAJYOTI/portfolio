import { marqueeTech } from "@/data/portfolio";

export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <section className="overflow-hidden border-y border-white/5 py-6">
      <div className="animate-marquee flex w-max gap-8">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap text-sm font-medium text-zinc-500"
          >
            {tech}
            <span className="mx-4 text-violet-500">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
