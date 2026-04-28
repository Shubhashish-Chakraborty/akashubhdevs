"use client";

import { useRef } from "react";

// ─── X (Twitter) Posts ──────────────────────────────────────
export const CONTENT_ITEMS: {
  title: string;
  url: string;
  type: "post";
}[] = [
  {
    title: "Start Competitive Programming now!",
    url: "https://x.com/__Shubhashish__/status/2048638522052251977",
    type: "post",
  },
  {
    title: "Read this article on DSA/CP",
    url: "https://x.com/__Shubhashish__/status/2043370834350489703",
    type: "post",
  },
];

// Convert tweet URL → embeddable URL
function getXEmbedUrl(url: string) {
  try {
    const tweetId = url.split("/status/")[1]?.split("?")[0];
    return tweetId
      ? `https://platform.twitter.com/embed/Tweet.html?id=${tweetId}`
      : null;
  } catch {
    return null;
  }
}

export default function LatestContent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="relative py-10 z-10">
      <div className="max-w-5xl mx-auto px-6 mb-5 flex items-center justify-between">
        <p className="terminal-prompt">cat recent_usefull_content.log</p>
        <div className="flex gap-2">
          <button onClick={scrollLeft} className="btn">←</button>
          <button onClick={scrollRight} className="btn">→</button>
        </div>
      </div>

      <div className="relative overflow-hidden py-4 max-w-5xl mx-auto">
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#0d0e0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#0d0e0f] to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 [&::-webkit-scrollbar]:hidden"
        >
          {CONTENT_ITEMS.map((item, i) => {
            const embedUrl = getXEmbedUrl(item.url);

            return (
              <div
                key={i}
                className="snap-center flex-shrink-0 w-[85vw] sm:w-[460px] rounded-xl overflow-hidden border border-gruvbox-border bg-gruvbox-surface/60"
              >
                {embedUrl ? (
                  <div className="w-full h-[500px]">
                    <iframe
                      src={embedUrl}
                      className="w-full h-full border-0"
                      scrolling="no"
                    />
                  </div>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    className="block p-4 h-[500px] flex items-center justify-center"
                  >
                    Open Post ↗
                  </a>
                )}

                <div className="p-4 border-t border-gruvbox-border/50 flex justify-between items-center">
                  <p className="text-sm font-semibold truncate">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}