import cloudhesive from "@/assets/clients/cloudhesive.png";
import observe from "@/assets/clients/observe.png";
import obsidian from "@/assets/clients/obsidian.png";
import pipedreams from "@/assets/clients/pipedreams.png";
import savvy from "@/assets/clients/savvy.png";
import stake from "@/assets/clients/stake.png";
import tqa from "@/assets/clients/tqa.png";
import trustlogix from "@/assets/clients/trustlogix.png";

const LOGOS = [
  { src: cloudhesive, alt: "CloudHesive" },
  { src: observe, alt: "Observe" },
  { src: obsidian, alt: "Obsidian" },
  { src: pipedreams, alt: "Pipedreams" },
  { src: savvy, alt: "Savvy" },
  { src: stake, alt: "Stake" },
  { src: tqa, alt: "TQA" },
  { src: trustlogix, alt: "TrustLogix" },
];

export function Tombstones() {
  // Duplicate twice so the marquee loops seamlessly (translate -50%).
  const track = [...LOGOS, ...LOGOS];

  return (
    <section id="transactions" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow">Select Clients</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Partnering with exceptional companies.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A representative sample of companies our team has advised across
            venture debt, growth debt, and structured finance.
          </p>
        </div>
      </div>

      <div
        className="mt-14 relative overflow-hidden border-y border-border bg-neutral-200"
        aria-label="Client logos"
      >
        {/* edge fades over the light strip */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-neutral-200 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-neutral-200 to-transparent" />

        <div className="marquee-track flex items-center gap-24 py-12 w-max">
          {track.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="h-14 md:h-20 w-auto object-contain shrink-0 contrast-125"
            />
          ))}
        </div>
      </div>

      <p className="mt-6 max-w-7xl mx-auto px-6 lg:px-10 text-xs text-muted-foreground">
        *Partial transaction list. Selected for illustration.
      </p>
    </section>
  );
}
