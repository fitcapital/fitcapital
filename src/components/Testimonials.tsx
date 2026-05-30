export function Testimonials() {
  const quotes = [
    {
      quote:
        "At the end of the process, we weren't left wondering whether we had seen enough of the market or left terms on the table. That certainty is hard to put a dollar figure on, but it's real and significant.",
      name: "VP Finance, Observe Inc (acquired by Snowflake)",
    },
    {
      quote:
        "The outcome was much better than what we could have done ourselves. We ended up going with somebody we didn't even have in our list.",
      name: "Head of Finance, Obsidian Security",
    },
    {
      quote:
        "Anyone can put together an outreach list, but having fitcapital on our side — a team that has completed hundreds of transactions both as advisors and lenders — was a major differentiator. Their market knowledge and ability to navigate lender diligence and negotiations was unmatched.",
      name: "Founder-CEO, Pipedreams",
    },
    {
      quote:
        "fitcapital was a thoughtful, responsive partner throughout the process, and they took a lot off our plate while helping us get to an economically strong outcome efficiently. We'd absolutely work with them again.",
      name: "Founder-CEO, Savvy Wealth",
    },
  ];

  const track = [...quotes, ...quotes];

  return (
    <section id="testimonials" className="py-12 lg:py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow">In Their Words</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Trusted by operators and boards.
          </h2>
        </div>
      </div>

      <div
        className="mt-10 relative overflow-hidden border-y border-border"
        aria-label="Client testimonials"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex items-stretch gap-6 py-10 w-max">
          {track.map((q, i) => (
            <figure
              key={i}
              className="bg-card border border-border p-6 flex flex-col gap-5 rounded-sm shadow-elegant w-[360px] md:w-[420px] shrink-0"
            >
              <div className="text-gold font-serif text-5xl leading-none">"</div>
              <blockquote className="text-base leading-relaxed text-foreground/90 flex-1">
                {q.quote}
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground">{q.name}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
