"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0e0f]/90 backdrop-blur-sm border-b border-gruvbox-border/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono font-bold text-base text-gruvbox-green hover:text-gruvbox-yellow transition-colors"
        >
          ShubhDEVs
        </a>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {[
            { label: "projects", href: "#projects" },
            { label: "experience", href: "#experience" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-sm text-gruvbox-text-secondary hover:text-gruvbox-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
