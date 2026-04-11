"use client";

// ─── Editable YouTube / Content Links ──────────────────────────────────────
// Add your YouTube video URLs and titles here. They will scroll in a marquee.
export const CONTENT_ITEMS: {
  title: string;
  url: string;
  type: "video" | "course" | "tutorial" | "talk";
}[] = [
  {
    title: "Building a Full-Stack App with Next.js",
    url: "https://youtu.be/vL5lLZfgSCY?si=MDQUEdeBofdNQu12",
    type: "video",
  },
];

function getTypeIcon(type: string) {
  switch (type) {
    case "video":
      return "▶";
    case "course":
      return "📚";
    case "tutorial":
      return "💡";
    case "talk":
      return "🎤";
    default:
      return "▶";
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "video":
      return "text-gruvbox-red";
    case "course":
      return "text-gruvbox-yellow";
    case "tutorial":
      return "text-gruvbox-green";
    case "talk":
      return "text-gruvbox-aqua";
    default:
      return "text-gruvbox-text-secondary";
  }
}

export default function ContentMarquee() {
  // Duplicate items for seamless infinite scroll
  const items = [...CONTENT_ITEMS, ...CONTENT_ITEMS];

  return (
    <section className="relative py-10 z-10">
      <div className="max-w-5xl mx-auto px-6 mb-5">
        <p className="terminal-prompt">cat content.log</p>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d0e0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d0e0f] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="marquee-track flex gap-4">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 px-5 py-3 
                         border border-gruvbox-border rounded-lg bg-gruvbox-surface/60
                         hover:border-gruvbox-border-light hover:bg-gruvbox-elevated/60
                         transition-all duration-300 group cursor-pointer"
            >
              <span className={`text-sm ${getTypeColor(item.type)}`}>
                {getTypeIcon(item.type)}
              </span>
              <div className="flex flex-col">
                <span className="text-gruvbox-text-primary text-xs font-medium group-hover:text-gruvbox-green transition-colors whitespace-nowrap">
                  {item.title}
                </span>
                <span className="text-gruvbox-text-muted text-[10px] uppercase tracking-wider">
                  {item.type}
                </span>
              </div>
              <svg
                className="w-3 h-3 text-gruvbox-text-muted group-hover:text-gruvbox-green transition-colors ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
