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
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import joelPhoto from "@/assets/team-joel.png";
import chadPhoto from "@/assets/team-chad.png";
import jonPhoto from "@/assets/team-jon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "fitcapital — Debt-Focused Investment Bank for Growth Companies" },
      {
        name: "description",
        content:
          "fitcapital is a debt-focused investment bank built by lenders. We advise growth-stage companies on venture debt, growth debt, and structured capital from $10M–$100M+.",
      },
      { property: "og:title", content: "fitcapital — Growth Capital Advisors" },
      {
        property: "og:description",
        content:
          "Debt-focused investment bank built by lenders. Venture debt, growth debt, and structured capital for growth-stage companies.",
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
          name: "fitcapital",
          description:
            "Debt-focused investment bank advising growth-stage companies on venture debt, growth debt, and structured capital.",
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
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-fade-up">
          <span className="text-foreground">
            A debt-focused
            <br />
            investment bank,
          </span>
          <br />
          <span className="italic text-lender-gold">built by lenders.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed animate-fade-up">
We advise growth-stage companies non-dilutive growth capital raises from $10M to $100M+
        </p>

        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ["60+", "Years Experience"],
            ["150+", "Transactions"],
            ["250+", "Capital Partners"],
            ["$3.0B+", "Commitments"],
          ].map(([k, v]) => (
            <div key={k} className="bg-card border border-border rounded-sm shadow-elegant p-6 md:p-8">
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
      body: "Non-dilutive growth capital from banks and non-bank venture lenders, structured to extend runway",
    },
    {
      tag: "02",
      title: "Growth Debt",
      body: "Larger facilities, typically enterprise value or ARR focused, to fund growth, M&A, and other strategic initiatives",
    },
    {
      tag: "03",
      title: "Structured & Sponsor-Backed Capital Solutions",
      body: "Bespoke structured hybrid capital solutions and leverage sponsor finance",
    },
  ];
  return (
    <section id="services" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_2fr] gap-8">
        <div>
          <div className="eyebrow">What We Do</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Specialized focus. Expert Guidance
          </h2>
        </div>
        <div className="grid gap-3">
          {items.map((it) => (
            <div key={it.tag} className="bg-card border border-border rounded-sm shadow-elegant p-6 grid md:grid-cols-[80px_1fr] gap-6 items-baseline">
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
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="eyebrow">Why fitcapital</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            We have sat on the other side of the table.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            Stay focused on building your business. As an experienced team of former lenders, we manage the capital raise process for growth-stage tech companies from start to finish. Having worked on both sides of the table across hundreds of venture debt and growth capital transactions, we understand how capital providers think and use that to your advantage.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-5">
          {bullets.map((b) => (
            <li key={b} className="bg-[#d4d4d8] border border-black/10 rounded-sm p-5 flex items-start gap-3">
              <span className="text-black mt-1 font-bold">✓</span>
              <span className="font-semibold text-black">{b}</span>
            </li>
          ))}
          <li className="bg-[#d4d4d8] border border-black/10 rounded-sm p-6 sm:col-span-2">
            <div className="text-black uppercase tracking-[0.22em] text-[0.7rem] font-medium">Engagements</div>
            <div className="mt-2 font-serif text-2xl text-black">Target raise $10M – $100M+</div>
            <div className="text-sm text-black/70 mt-1">
              VC or PE-backed
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
      photo: joelPhoto,
      linkedin: "https://linkedin.com/in/joelgragg",
      bio: [
        "Joel has over two decades of experience in direct lending, banking, and private equity focused on middle-market and technology companies. He has originated and led more than $1 billion in debt capital commitments.",
        "Prior to founding fitcapital, Joel was Managing Director and Head of Stifel Technology Capital, part of Stifel Financial Corp (NYSE: SF). He previously served as Managing Director at ORIX Growth Capital, where he led the West Coast team, and as Business Line Manager at Bridge Bank Technology Banking.",
        "Joel received a BS from the University of California, Davis and an MBA in Entrepreneurship from San Diego State University.",
        "Joel is a Registered Representative of BA Securities, LLC, Member FINRA SIPC",
      ],
    },
    {
      name: "Chad Cochran",
      role: "Managing Partner",
      photo: chadPhoto,
      linkedin: "https://linkedin.com/in/chadcochran",
      bio: [
        "Chad has over 15 years of technology banking and lending experience across the venture, growth, and middle-market sectors. He has structured and closed more than $1 billion in debt capital commitments.",
        "Prior to fitcapital, Chad led the Bay Area Innovation Economy team at J.P. Morgan and previously served as a Relationship Manager in the Technology and Global Cleantech groups at Wells Fargo.",
        "Chad received an MS in Project Management from Northwestern University and a BS in Business Management from Palm Beach Atlantic University.",
        "Chad is a Registered Representative of BA Securities, LLC, Member FINRA SIPC.",
      ],
    },
    {
      name: "Jon Weitzel",
      role: "Partner",
      photo: jonPhoto,
      linkedin: "https://linkedin.com/in/jon-weitzel-4862b1b",
      bio: [
        "Jon Weitzel is a Partner at fitcapital, where he advises growth-stage technology companies on debt capital raising across the full capital stack, including venture debt, private credit, and growth equity. He has more than 25 years of underwriting and investment experience and has participated in 100+ transactions totaling over $1 billion invested, with a particular focus on enterprise software.",
        "Jon's career includes investment and lending roles at White Oak Global Advisors, ORIX Growth Capital, Monroe Capital, and Bridge Bank Technology Banking.",
        "He received a BS in Business Administration (Finance) from Cal Poly, San Luis Obispo, and an MBA in Finance and Accounting from the University of Chicago Booth School of Business.",
        "Jon is a Registered Representative of BA Securities, LLC, Member FINRA SIPC.",
      ],
    },
  ];
  return (
    <section id="team" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow">Leadership</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Senior partners lead every engagement
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {members.map((m) => (
            <Dialog key={m.name}>
              <DialogTrigger asChild>
                <article className="group text-left cursor-pointer focus:outline-none">
                  <div className="aspect-[4/5] max-w-[270px] mx-auto bg-secondary border border-border relative overflow-hidden">
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
                  <div className="mt-4 max-w-[270px] mx-auto text-left">
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
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </Button>
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

function CTA() {
  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="eyebrow">Start a Conversation</div>
        <h2 className="mt-4 text-4xl md:text-6xl text-balance">
          Considering a capital raise?
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Reach out to explore fit, structure, and market terms for your business
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
