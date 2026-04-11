"use client";

import ParticleFace from "./ParticleFace";

// ─── Editable Tech Stack ─────────────────────────────────────────────────
// Add or remove technologies here. Set `highlight: true` for accent color.
const TECH_STACK: { name: string; highlight?: boolean }[] = [
  { name: "react" },
  { name: "next.js" },
  { name: "typescript" },
  { name: "javascript" },
  { name: "node.js" },
  { name: "express" },
  { name: "python" },
  { name: "tailwind" },
  { name: "docker" },
  { name: "git", highlight: true },
  { name: "postgresql" },
  { name: "mongodb" },
  { name: "redis", highlight: true },
  { name: "aws" },
  { name: "linux" },
  { name: "figma" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-start pt-24 lg:pt-28 pb-10 z-10"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-14">
          <div className="flex flex-col justify-center items-center">

            {/* ── Left: Particle Face ── */}
            <div className="flex-shrink-0 self-start">
              <ParticleFace imageSrc="/me.png" size={320} />
            </div>

            {/* Status line */}
            <div className="flex items-center gap-3 mt-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs text-white bg-black border border-white">
                tl;dr | modal
              </span>
              <span className="flex items-center border border-white gap-2 px-3 py-1.5 rounded text-xs text-white">
                <span className="status-dot" />
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </span>
            </div>

          </div>

          {/* ── Right: Bio ── */}
          <div className="flex flex-col items-start flex-1 pt-2">
            {/* whoami + open to work row */}
            <div className="flex items-start justify-between w-full mb-1">
              <p className="text-gruvbox-text-muted text-sm tracking-widest">
                ~ whoami
              </p>
              <span className="badge-work ml-4 hidden sm:inline-flex">
                open to work
              </span>
            </div>

            {/* Name */}
            <h1 className="font-mono leading-none mb-4">
              <span className="block text-4xl lg:text-5xl font-bold text-gruvbox-text-primary">
                Shubhashish Chakraborty
              </span>
              <span className="block text-base lg:text-lg text-gruvbox-text-secondary font-light mt-1">
                / developer
              </span>
            </h1>

            {/* Bio */}
            <p className="text-gruvbox-text-secondary text-sm leading-relaxed max-w-lg mb-2">
              i build web apps and tools. currently exploring
              cloud architecture and contributing to open-source.
            </p>

            {/* Current project */}
            <p className="text-gruvbox-text-secondary text-sm mb-5">
              <span className="text-gruvbox-text-muted">▸</span>{" "}
              building{" "}
              <span className="text-gruvbox-text-primary font-bold">
                cool stuff
              </span>{" "}
              - crafting digital experiences
            </p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 mb-5 max-w-lg">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech.name}
                  className={`tech-badge ${tech.highlight ? "tech-badge-highlight" : ""
                    }`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5 mb-5">
              {/* GitHub */}
              <a
                href="https://github.com/Shubhashish-Chakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/__Shubhashish__"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/Shubhashish-Chakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Youtube */}
              <a
                href="https://www.youtube.com/@shubhdevs"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:shubhashish147@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3 mb-5">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bordered"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                resume
              </a>
              <a
                href="mailto:shubhashish@dev.com"
                className="btn-bordered"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
