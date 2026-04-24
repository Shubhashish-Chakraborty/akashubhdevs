"use client";

import ParticleFace from "./ParticleFace";

// ─── Editable Tech Stack ─────────────────────────────────────────────────
// Add or remove technologies here. Set `highlight: true` for accent color.
const TECH_STACK: { name: string; highlight?: boolean }[] = [
  { name: "next.js", highlight: true },
  { name: "react" },
  { name: "typescript"},
  { name: "javascript" },
  { name: "node.js" },
  { name: "express" },
  { name: "python" },
  { name: "fastAPI", highlight: true },
  { name: "C++", highlight: true },
  { name: "GoLang" },
  { name: "tailwindcss" },
  { name: "docker" },
  { name: "git" },
  { name: "postgresql", highlight: true },
  { name: "mongodb" },
  { name: "aws" },
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
                tl;dr
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
                Under Development
              </span>
            </div>

            {/* Name */}
            <h1 className="font-mono leading-none mb-4">
              <span className="block text-4xl lg:text-5xl font-bold text-gruvbox-text-primary">
                Shubhashish Chakraborty
              </span>
              <span className="block text-base lg:text-lg text-gruvbox-text-secondary font-light mt-1">
                / Software Developer,Tech Educator
              </span>
            </h1>

            {/* Bio */}
            <p className="text-white text-sm leading-relaxed max-w-lg mb-2">
              has a learn-by-doing mindset. currently exploring
              AIML, practicing on codeforces & contributing to open-source.
            </p>

            {/* Current project */}
            <p className="text-gruvbox-text-secondary text-sm mb-5">
              <span className="text-gruvbox-text-muted">▸</span>{" "}
              currently working with{" "}
              <span className="text-gruvbox-text-primary font-bold">
                cloudflare workers
              </span>{" "}
              in python
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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

              {/* Medium  */}
              <a
                href="https://medium.com/@shubhashish147"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Medium"
              >
                <svg className="w-7 h-7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M465.4 96C508.8 96 544 131.2 544 174.6L544 258.4C542.1 258.3 540.2 258.2 538.3 258.2L537.9 258.2C527.9 258.2 515.6 260.6 506.8 265C496.8 269.6 488.1 276.5 480.8 285.6C469 300.2 461.9 319.9 460.2 342C460.1 342.7 460.1 343.3 460 344C459.9 344.7 459.9 345.2 459.9 345.9C459.8 347.1 459.8 348.3 459.8 349.5C459.8 351.4 459.7 353.3 459.8 355.3C461 405.4 488 445.5 536.1 445.5C538.8 445.5 541.4 445.4 544 445.1L544 465.5C544 508.9 508.8 544.1 465.4 544.1L174.6 544C131.2 544 96 508.8 96 465.4L96 174.6C96 131.2 131.2 96 174.6 96L465.4 96zM178.3 202.9L178.6 203C191.8 206 198.4 210.4 198.4 226.4L198.4 413.6C198.4 429.6 191.7 434 178.5 437L178.2 437.1L178.2 439.9L231 439.9L231 437.1L230.7 437C217.5 434 210.8 429.6 210.8 413.6L210.8 237.3L296.9 439.8L301.8 439.8L390.4 231.6L390.4 418.2C389.3 430.8 382.6 434.7 370.7 437.4L370.4 437.5L370.4 440.2L462.3 440.2L462.3 437.5L462 437.4C450.1 434.7 443.3 430.8 442.1 418.2L442 226.4L442.1 226.4C442.1 210.4 448.8 206 462 203L462.3 202.9L462.3 200.2L390.1 200.2L323.1 357.6L256.1 200.2L178.3 200.2L178.3 202.9zM544 404.3C518.9 396.9 501 369.2 502.8 336.5L502.8 336.5L543.9 336.5L543.9 404.3zM537.6 268.7C539.9 268.7 542 269 544 269.6L544 327L503.8 327C505.3 293.4 517.4 269.1 537.6 268.7z"/>
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:shubhashish147@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3 mb-5">
              {/* <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bordered"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                resume | NO
              </a> */}
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
