"use client";

import { useRef } from "react";

// ─── Editable YouTube / Content Links ──────────────────────────────────────
export const CONTENT_ITEMS: {
  title: string;
  url: string;
  type: "video" | "course" | "tutorial" | "talk";
}[] = [
  {
    title: "CP",
    url: "https://youtu.be/vL5lLZfgSCY?si=MDQUEdeBofdNQu12",
    type: "video",
  },
  {
    title: "Git github",
    url: "https://youtu.be/EOkItVOgjeE?si=nDwN_hMGxUQRJNZz",
    type: "video",
  },
  {
    title: "Gsoc related 1",
    url: "https://youtu.be/TuFa6jy1mzo?si=C5PlQuE9LgqfaGRV",
    type: "video",
  },
  {
    title: "Git github",
    url: "https://youtu.be/9uDNJJpTjiM?si=7aRtai7fTN5Pfkzc",
    type: "video",
  },
];

function getYouTubeEmbedUrl(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
}

export default function ContentMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-10 z-10">
      <div className="max-w-5xl mx-auto px-6 mb-5 flex items-center justify-between">
        <p className="terminal-prompt">cat content.log</p>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="px-3 py-1.5 rounded-lg border border-gruvbox-border bg-gruvbox-surface hover:border-gruvbox-green hover:text-gruvbox-green transition-colors text-gruvbox-text-muted"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="px-3 py-1.5 rounded-lg border border-gruvbox-border bg-gruvbox-surface hover:border-gruvbox-green hover:text-gruvbox-green transition-colors text-gruvbox-text-muted"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden py-4 max-w-5xl mx-auto">
        {/* Fade edges inside the max-w container */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0d0e0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0d0e0f] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {CONTENT_ITEMS.map((item, i) => {
            const embedUrl = getYouTubeEmbedUrl(item.url);

            return (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-[85vw] sm:w-[460px] rounded-xl overflow-hidden border border-gruvbox-border bg-gruvbox-surface/60 transition-all duration-300 hover:border-gruvbox-border-light group"
              >
                {embedUrl ? (
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={embedUrl}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 aspect-video flex items-center justify-center text-gruvbox-text-primary text-sm hover:text-gruvbox-green transition-colors"
                  >
                    Open Link ↗
                  </a>
                )}
                <div className="p-4 border-t border-gruvbox-border/50 flex justify-between items-center bg-gruvbox-surface">
                  <div className="flex-1 min-w-0 pr-4">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <p className="text-gruvbox-text-primary text-sm font-semibold truncate group-hover:text-gruvbox-green transition-colors">
                        {item.title}
                      </p>
                    </a>
                    <p className="text-gruvbox-text-muted text-[10px] uppercase tracking-wider mt-1">
                      {item.type}
                    </p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 flex-shrink-0 rounded border border-gruvbox-border text-gruvbox-text-muted hover:border-gruvbox-green hover:text-gruvbox-green transition-colors"
                    title="Open in new tab"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
