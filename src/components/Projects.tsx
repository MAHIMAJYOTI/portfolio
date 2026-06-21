import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Systems I've designed and shipped"
        description="Projects spanning computer vision, full-stack social apps, analytics pipelines, and cloud-native systems."
      />

      <div className="grid gap-8">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent transition hover:border-violet-500/30"
          >
            {"screenshot" in project && project.screenshot && (
              <div className="relative aspect-video w-full border-b border-white/10 bg-black/40">
                <Image
                  src={project.screenshot}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
              </div>
            )}

            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-500/10 px-3 py-0.5 text-xs font-medium text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="mt-1 text-violet-400">{project.subtitle}</p>
                  <p className="mt-3 max-w-3xl text-zinc-400">{project.description}</p>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
                    aria-label={`${project.name} GitHub`}
                  >
                    <GitHubIcon size={18} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 transition hover:bg-violet-500/20"
                      aria-label={`${project.name} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 px-3 py-1 font-mono text-xs text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    {h}
                  </li>
                ))}
              </ul>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition hover:text-violet-300"
                >
                  Try live demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
