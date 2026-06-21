import { Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-600/10 p-10 sm:p-16">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Open to SDE/MLE internships, research collaborations, and interesting engineering challenges."
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30"
          >
            <Mail className="text-violet-400" size={22} />
            <div>
              <p className="text-sm text-zinc-500">Email</p>
              <p className="text-sm text-white">{siteConfig.email}</p>
            </div>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30"
          >
            <Phone className="text-violet-400" size={22} />
            <div>
              <p className="text-sm text-zinc-500">Phone</p>
              <p className="text-sm text-white">{siteConfig.phone}</p>
            </div>
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30"
          >
            <GitHubIcon className="text-violet-400" size={22} />
            <div>
              <p className="text-sm text-zinc-500">GitHub</p>
              <p className="text-sm text-white">@MAHIMAJYOTI</p>
            </div>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30"
          >
            <LinkedInIcon className="text-violet-400" size={22} />
            <div>
              <p className="text-sm text-zinc-500">LinkedIn</p>
              <p className="text-sm text-white">mahima-jyoti</p>
            </div>
          </a>

          <a
            href={siteConfig.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-500/30"
          >
            <span className="text-sm font-bold text-violet-400">LC</span>
            <div>
              <p className="text-sm text-zinc-500">LeetCode</p>
              <p className="text-sm text-white">150+ solved · @Mahima4</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-sm text-zinc-500">
      <p>
        © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.location}
      </p>
    </footer>
  );
}
