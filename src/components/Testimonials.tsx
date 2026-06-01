import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import obsidianVideo from "@/assets/obsidian-testimonial.mp4.asset.json";

type Testimonial =
  | { type: "quote"; quote: string; name: string }
  | { type: "video"; src: string; name: string };

export function Testimonials() {
  const quotes: Testimonial[] = [
    {
      type: "quote",
      quote:
        "At the end of the process, we weren't left wondering whether we had seen enough of the market or left terms on the table. That certainty is hard to put a dollar figure on, but it's real and significant.",
      name: "VP Finance, Observe Inc (acquired by Snowflake)",
    },
    {
      type: "quote",
      quote:
        "The outcome was much better than what we could have done ourselves. We ended up going with somebody we didn't even have in our list.",
      name: "Head of Finance, Obsidian Security",
    },
    {
      type: "video",
      src: obsidianVideo.url,
      name: "Obsidian Security Video",
    },
    {
      type: "quote",
      quote:
        "Anyone can put together an outreach list, but having fitcapital on our side was a major differentiator. Their market knowledge and ability to navigate lender diligence and negotiations was unmatched.",
      name: "Founder-CEO, Pipedreams",
    },
    {
      type: "quote",
      quote:
        "fitcapital was a thoughtful, responsive partner throughout the process, and they took a lot off our plate while helping us get to an economically strong outcome efficiently. We'd absolutely work with them again.",
      name: "Founder-CEO, Savvy Wealth",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const card = cards[0];
    if (!card) return;
    const next =
      dir === "right"
        ? (activeIndex + 1) % quotes.length
        : (activeIndex - 1 + quotes.length) % quotes.length;
    const target = cards[next] ?? card;
    setActiveIndex(next);
    el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="pt-12 lg:pt-16 pb-6 lg:pb-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow">In Their Words</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Trusted by operators and investors.
          </h2>
        </div>
      </div>

      <div className="mt-10 relative" aria-label="Client testimonials">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 py-10 overflow-x-auto scrollbar-hide scroll-smooth px-6 lg:px-10"
          style={{ scrollbarWidth: "none" }}
        >
          {quotes.map((q, i) =>
            q.type === "video" ? (
              <VideoCard key={i} src={q.src} name={q.name} />
            ) : (
              <figure
                key={i}
                className="bg-card border border-border p-4 md:p-5 flex flex-col gap-3 md:gap-4 rounded-sm shadow-elegant w-[210px] sm:w-[270px] md:w-[315px] shrink-0"
              >
                <div className="text-gold font-serif text-4xl md:text-5xl leading-none">"</div>
                <blockquote className="text-sm md:text-base leading-relaxed text-foreground/90 flex-1">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-auto pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">{q.name}</div>
                </figcaption>
              </figure>
            ),
          )}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-6 flex gap-3 justify-end">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-background bg-foreground text-background hover:bg-background hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-background bg-foreground text-background hover:bg-background hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ src, name }: { src: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      v.muted = false;
      v.currentTime = 0;
      v
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          v.muted = true;
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        });
    } catch {
      setPlaying(false);
    }
  };

  return (
    <figure className="bg-card border border-border p-4 md:p-5 flex flex-col gap-3 md:gap-4 rounded-sm shadow-elegant w-[210px] sm:w-[270px] md:w-[315px] shrink-0">
      <div className="relative w-full flex-1 rounded-sm overflow-hidden bg-black min-h-[280px]">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="auto"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onError={() => setPlaying(false)}
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
        {!playing && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label="Play testimonial video"
            className="absolute left-1/2 bottom-16 -translate-x-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-gold text-background hover:scale-110 transition-transform shadow-elegant"
          >
            <Play size={18} strokeWidth={2.5} fill="currentColor" className="ml-0.5" />
          </button>
        )}
      </div>
      <figcaption className="mt-auto pt-4 border-t border-border">
        <div className="text-sm text-muted-foreground">{name}</div>
      </figcaption>
    </figure>
  );
}
