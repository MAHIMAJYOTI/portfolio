import { certifications, education, experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Leadership & internships"
        description="Building production skills through remote internships and hands-on projects."
      />

      <div className="space-y-8">
        {experience.map((role) => (
          <div
            key={role.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                <p className="mt-1 text-violet-400">{role.org}</p>
              </div>
              <span className="rounded-full border border-white/10 px-4 py-1 text-sm text-zinc-400">
                {role.period}
              </span>
            </div>
            <ul className="mt-6 space-y-2">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-zinc-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div>
                <h3 className="font-semibold text-white">{edu.institution}</h3>
                <p className="mt-1 text-zinc-400">{edu.program}</p>
                <p className="mt-1 text-sm text-zinc-500">{edu.period}</p>
              </div>
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                {edu.result}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="Certifications" title="Credentials" />

        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-semibold text-white">{cert.name}</h3>
              <p className="mt-2 text-sm text-zinc-400">{cert.issuer}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-violet-400 hover:text-violet-300"
                >
                  View credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
