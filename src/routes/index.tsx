import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Tombstones } from "@/components/Tombstones";
import { Testimonials } from "@/components/Testimonials";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fit Capital — Debt-Focused Investment Bank for Growth Companies" },
      {
        name: "description",
        content:
          "Fit Capital is a debt-focused investment bank built by lenders. We advise growth-stage companies on venture debt, growth debt, and structured finance from $10M–$100M+.",
      },
      { property: "og:title", content: "Fit Capital — Growth Capital Advisors" },
      {
        property: "og:description",
        content:
          "Debt-focused investment bank built by lenders. Venture debt, growth debt, and structured finance for growth-stage companies.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "Fit Capital",
          description:
            "Debt-focused investment bank advising growth-stage companies on venture debt, growth debt, and structured finance.",
          areaServed: "United States",
        }),
      },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="animate-fade-in eyebrow">Growth Capital Advisors</div>
        <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-fade-up">
          A debt-focused
          <br />
          investment bank,
          <br />
          <span className="italic text-lender-gold">built by lenders.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed animate-fade-up">
          We advise growth-stage companies on venture debt, growth debt, and
          structured finance — typically $10M to $100M+.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-6 py-3 rounded-sm font-medium shadow-gold hover:opacity-95 transition-opacity"
          >
            Start a Conversation
            <span aria-hidden>→</span>
          </a>
          <a
            href="#transactions"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-3"
          >
            View select transactions
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            ["60+", "Years Experience"],
            ["150+", "Transactions"],
            ["250+", "Capital Partners"],
            ["$3.0B+", "Commitments"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6 md:p-8">
              <dt className="font-serif text-3xl md:text-5xl text-gold">{k}</dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      tag: "01",
      title: "Venture Debt",
      body: "Non-dilutive growth capital from banks and specialty lenders, structured to extend runway.",
    },
    {
      tag: "02",
      title: "Growth Debt",
      body: "Larger facilities from private credit funds, sized to scale ARR and fund acquisitions.",
    },
    {
      tag: "03",
      title: "Structured Finance",
      body: "Warehouse, ABL, and bespoke structures for capital-intensive business models.",
    },
  ];
  return (
    <section id="services" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_2fr] gap-12">
        <div>
          <div className="eyebrow">What We Do</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Three mandates. One discipline.
          </h2>
        </div>
        <div className="grid gap-px bg-border border border-border">
          {items.map((it) => (
            <div key={it.tag} className="bg-card p-8 grid md:grid-cols-[80px_1fr] gap-6 items-baseline">
              <div className="font-serif text-2xl text-gold">{it.tag}</div>
              <div>
                <h3 className="font-serif text-2xl">{it.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const bullets = [
    "Faster, more efficient processes",
    "Stronger negotiating leverage",
    "Better deal outcomes",
    "Less management time fundraising",
  ];
  return (
    <section className="py-24 lg:py-32 border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="eyebrow">Why Fit Capital</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            We have sat on the other side of the table.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            Our team of former lenders has worked on hundreds of venture debt,
            growth lending, and structured financing transactions. We know how
            capital providers underwrite — and we use that to your advantage.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-px bg-border border border-border">
          {bullets.map((b) => (
            <li key={b} className="bg-card p-6 flex items-start gap-3">
              <span className="text-gold mt-1">✓</span>
              <span>{b}</span>
            </li>
          ))}
          <li className="bg-card p-6 sm:col-span-2 border-t border-border">
            <div className="eyebrow">Engagements</div>
            <div className="mt-2 font-serif text-2xl">Target raise $10M – $100M+</div>
            <div className="text-sm text-muted-foreground mt-1">
              VC-backed, PE-backed, or bootstrapped
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    {
      name: "Joel Gragg",
      role: "Managing Partner",
      photo:
        "https://static.wixstatic.com/media/104b7b_698538d8544a4011a12bb4ec8be5ca05~mv2.png/v1/fill/w_538,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Joel_headshot_GREY.png",
      bio: [
        "Joel is a Managing Partner at Fit Capital and co-leads the firm's debt advisory practice. Prior to founding Fit Capital, Joel spent his career on the lender side, originating, underwriting, and structuring venture and growth debt facilities for high-growth technology companies.",
        "He has been involved in hundreds of millions of dollars of debt commitments across software, fintech, healthcare technology, and consumer internet, working with both venture-backed and bootstrapped issuers.",
      ],
    },
    {
      name: "Chad Cochran",
      role: "Managing Partner",
      photo:
        "https://static.wixstatic.com/media/104b7b_25a126c9e33b40599a45b854f4213231~mv2.png/v1/fill/w_538,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chad_Cochran_headshot_GREY.png",
      bio: [
        "Chad is a Managing Partner at Fit Capital and brings deep experience structuring credit facilities for growth-stage companies. Earlier in his career he held senior origination and underwriting roles at leading venture and specialty lenders.",
        "Chad has executed financings across venture debt, growth term loans, ABL, and warehouse facilities, and works closely with founders and CFOs to align capital structure with the company's operating plan.",
      ],
    },
    {
      name: "Jon Weitzel",
      role: "Partner",
      photo:
        "https://static.wixstatic.com/media/104b7b_d2e996c8f8644ead8d62c8b5a6ac4de4~mv2.png/v1/fill/w_538,h_608,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jon_headshot_GREY.png",
      bio: [
        "Jon is a Partner at Fit Capital, focused on structuring and executing debt financings for technology and tech-enabled businesses. Prior to Fit Capital, Jon worked at leading credit funds and venture lenders, evaluating and underwriting debt opportunities across multiple sectors.",
        "He partners with management teams from process kickoff through closing, negotiating terms with banks, private credit funds, and specialty lenders to deliver the best fit for the business.",
      ],
    },
  ];
  return (
    <section id="team" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow">Leadership</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Senior bankers on every engagement.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m) => (
            <Dialog key={m.name}>
              <DialogTrigger asChild>
                <article className="group text-left cursor-pointer focus:outline-none">
                  <div className="aspect-[4/5] bg-secondary border border-border relative overflow-hidden">
                    <img
                      src={m.photo}
                      alt={`Portrait of ${m.name}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                      <span className="text-xs uppercase tracking-[0.2em] text-foreground/80">
                        Read bio →
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-serif text-xl underline-offset-4 group-hover:underline">
                      {m.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {m.role}
                    </div>
                  </div>
                </article>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-background border-border">
                <DialogHeader>
                  <DialogTitle className="font-serif text-3xl">{m.name}</DialogTitle>
                  <DialogDescription className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {m.role}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid sm:grid-cols-[160px_1fr] gap-6 mt-2">
                  <img
                    src={m.photo}
                    alt=""
                    className="w-full aspect-[4/5] object-cover border border-border"
                  />
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    {m.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="eyebrow">Start a Conversation</div>
        <h2 className="mt-4 text-4xl md:text-6xl text-balance">
          Considering a capital raise?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          A 30-minute call is the fastest way to understand fit, structure, and
          market terms for your business.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:info@fitcapital.com"
            className="inline-flex items-center gap-2 bg-gradient-gold text-gold-foreground px-7 py-3 rounded-sm font-medium shadow-gold hover:opacity-95 transition-opacity"
          >
            Email the Team
          </a>
          <a
            href="mailto:info@fitcapital.com"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            info@fitcapital.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Tombstones />
        <Testimonials />
        <Team />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
