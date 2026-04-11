"use client";

const EXPERIENCES = [
  {
    role: "full-stack developer",
    where: "freelance",
    description:
      "built responsive web applications for clients. focused on clean architecture, fast performance, and pixel-perfect UI implementations.",
    dotColor: "exp-dot",
  },
  {
    role: "open source contributor",
    where: "github",
    description:
      "contributed to various open-source projects. fixed bugs, added features, and helped maintain community codebases.",
    dotColor: "exp-dot-yellow",
  },
  {
    role: "self-taught developer",
    where: "internet",
    description:
      "learned web development through building real projects. mastered react, node.js, databases, and cloud deployment through hands-on experience.",
    dotColor: "exp-dot-orange",
  },
];

interface Project {
  name: string;
  repo: string;
  description: string;
  stars?: string;
  href: string;
}

const PROJECTS: Project[] = [
  {
    name: "project-alpha",
    repo: "yourusername/project-alpha",
    description:
      "a full-stack web application with real-time features and modern UI.",
    stars: "★ 12",
    href: "https://github.com/yourusername/project-alpha",
  },
  {
    name: "dev-tools",
    repo: "yourusername/dev-tools",
    description:
      "collection of developer utilities and CLI tools for productivity.",
    stars: "★ 8",
    href: "https://github.com/yourusername/dev-tools",
  },
  {
    name: "portfolio",
    repo: "yourusername/portfolio",
    description:
      "terminal-themed developer portfolio with particle face animation.",
    href: "https://github.com/yourusername/portfolio",
  },
];

export default function ExperienceAndProjects() {
  return (
    <>
      {/* ── Experience Section ─────────────────────────────────── */}
      <section id="experience" className="relative py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <p className="terminal-prompt">cat experience.log</p>
          </div>

          {/* Experience entries */}
          <div className="space-y-10 pl-2">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="flex gap-5">
                <div className={exp.dotColor} />
                <div>
                  <h3 className="text-gruvbox-yellow text-sm font-semibold mb-1">
                    {exp.role}{" "}
                    <span className="text-gruvbox-text-muted font-normal">
                      — {exp.where}
                    </span>
                  </h3>
                  <p className="text-gruvbox-text-secondary text-sm leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Section ──────────────────────────────────── */}
      <section id="projects" className="relative py-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section header */}
          <div className="flex items-center justify-between mb-8">
            <p className="terminal-prompt">gh contributions —external</p>
          </div>

          {/* Project cards */}
          <div className="space-y-3">
            {PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group"
              >
                {/* Repo icon */}
                <svg
                  className="w-4 h-4 mt-0.5 text-gruvbox-text-muted flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-gruvbox-text-primary text-sm font-semibold group-hover:text-gruvbox-green transition-colors">
                      {project.repo}
                    </h3>
                  </div>
                  <p className="text-gruvbox-text-secondary text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stars */}
                {project.stars && (
                  <span className="text-gruvbox-text-muted text-xs flex-shrink-0 ml-2">
                    {project.stars}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* View all on GitHub */}
          <div className="mt-8 text-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gruvbox-text-muted text-xs hover:text-gruvbox-text-secondary transition-colors inline-flex items-center gap-2"
            >
              view all on github
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
