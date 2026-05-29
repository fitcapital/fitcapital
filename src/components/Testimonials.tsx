export function Testimonials() {
  const quotes = [
    {
      quote:
        "Fit Capital ran a tight, efficient process and delivered terms that materially beat our internal benchmark. They negotiated like they were still on the lender side of the table.",
      name: "Chief Financial Officer",
      role: "Series D SaaS Company",
    },
    {
      quote:
        "Their lender relationships and structuring instincts saved us months. We closed a complex facility on terms we would not have reached on our own.",
      name: "Chief Executive Officer",
      role: "Vertical Software Platform",
    },
    {
      quote:
        "The diligence preparation alone was worth the engagement. By the time we were in lender meetings, every question had a clean answer.",
      name: "Head of Finance",
      role: "AI Infrastructure Company",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-24 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow">In Their Words</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Trusted by operators and boards.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure
              key={i}
              className="bg-card border border-border p-8 flex flex-col gap-6 rounded-sm shadow-elegant"
            >
              <div className="text-gold font-serif text-5xl leading-none">"</div>
              <blockquote className="text-base leading-relaxed text-foreground/90">
                {q.quote}
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-border">
                <div className="text-sm">{q.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
