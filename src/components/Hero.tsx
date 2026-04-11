"use client";

import ParticleFace from "./ParticleFace";

const TECH_STACK = [
  "react", "next.js", "typescript", "javascript", "node.js",
  "python", "tailwind", "docker", "git", "postgresql",
  "redis", "aws", "linux", "figma",
];

const HIGHLIGHT_TECH = ["redis", "aws"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* ── Left: Particle Face ── */}
          <div className="flex-shrink-0">
            <ParticleFace imageSrc="/me.png" size={450} />
          </div>

          {/* ── Right: Bio ── */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 pt-4">
            {/* whoami header */}
            <p className="text-gruvbox-text-muted text-xs tracking-widest mb-2">
              ~ whoami
            </p>

            {/* Name */}
            <h1 className="font-mono leading-none mb-1">
              <span className="block text-4xl lg:text-5xl font-bold text-gruvbox-text-primary">
                shubhashish
              </span>
              <span className="block text-lg lg:text-xl text-gruvbox-text-secondary font-light mt-1">
                / developer
              </span>
            </h1>

            {/* Open to work badge */}
            <div className="mt-4 mb-6">
              <span className="badge-work">open to work</span>
            </div>

            {/* Bio description */}
            <p className="text-gruvbox-text-secondary text-sm leading-relaxed max-w-md mb-2">
              i build web apps and tools. currently exploring
              cloud architecture and open-source.
            </p>

            {/* Current project */}
            <p className="text-gruvbox-text-secondary text-sm mb-6">
              <span className="text-gruvbox-text-muted">▸</span>{" "}
              building{" "}
              <span className="text-gruvbox-text-primary font-semibold">cool stuff</span>
              {" "}- crafting digital experiences
            </p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 mb-6 max-w-lg justify-center lg:justify-start">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className={`tech-badge ${
                    HIGHLIGHT_TECH.includes(tech) ? "tech-badge-highlight" : ""
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 mb-6">
              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
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
                href="https://twitter.com/yourhandle"
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
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@yoursite.dev"
                className="social-icon"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bordered"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                resume
              </a>
              <a
                href="mailto:hello@yoursite.dev"
                className="btn-bordered"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                get in touch
              </a>
            </div>

            {/* Status line */}
            <div className="flex items-center gap-3 mt-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs text-gruvbox-text-muted bg-gruvbox-surface border border-gruvbox-border">
                tl;dr
              </span>
              <span className="flex items-center gap-2 text-xs text-gruvbox-text-muted">
                <span className="status-dot" />
                {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
