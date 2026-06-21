"use client";

import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { AnimatedCounter } from "./AnimatedCounter";
import { heroBadges, siteConfig, stats } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="mb-8 flex flex-wrap gap-3">
          {heroBadges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm"
            >
              <span>{badge.icon}</span>
              <span className="font-medium text-white">{badge.title}</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-400">{badge.subtitle}</span>
            </div>
          ))}
        </div>

        <p className="mb-4 text-lg text-zinc-400">
          Hi, I&apos;m {siteConfig.name.split(" ")[0]} 👋{" "}
          <span className="text-violet-400">{siteConfig.status}</span>
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          {siteConfig.roles[0]}
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {siteConfig.roles[1]}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-zinc-400">
          {siteConfig.tagline}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-3xl font-bold text-white">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={
                    "decimals" in stat && stat.decimals !== undefined
                      ? stat.decimals
                      : stat.value % 1 !== 0
                        ? 1
                        : 0
                  }
                />
              </p>
              <p className="mt-1 font-medium text-zinc-300">{stat.label}</p>
              <p className="text-sm text-zinc-500">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
          >
            View Projects
            <ArrowDown size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </a>
          <a
            href={siteConfig.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
            aria-label="LeetCode"
          >
            LC
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-zinc-400 transition hover:text-white"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
