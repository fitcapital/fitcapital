import cloudhesive from "@/assets/clients/cloudhesive.png";
import observe from "@/assets/clients/observe.png";
import obsidian from "@/assets/clients/obsidian.png";
import pipedreams from "@/assets/clients/pipedreams.png";
import savvy from "@/assets/clients/savvy.png";
import stake from "@/assets/clients/stake.png";
import tqa from "@/assets/clients/tqa.png";
import trustlogix from "@/assets/clients/trustlogix.png";
import incortaAsset from "@/assets/clients/incorta.png.asset.json";
import praxentAsset from "@/assets/clients/praxent.png.asset.json";
import symphonyaiAsset from "@/assets/clients/symphonyai.png.asset.json";

const LOGOS = [
  { src: cloudhesive, alt: "CloudHesive" },
  { src: incortaAsset.url, alt: "Incorta" },
  { src: observe, alt: "Observe" },
  { src: obsidian, alt: "Obsidian" },
  { src: pipedreams, alt: "Pipedreams" },
  { src: praxentAsset.url, alt: "Praxent" },
  { src: savvy, alt: "Savvy" },
  { src: stake, alt: "Stake" },
  { src: symphonyaiAsset.url, alt: "SymphonyAI" },
  { src: tqa, alt: "TQA" },
  { src: trustlogix, alt: "TrustLogix" },
];

const LOGO_GROUPS = [0, 1, 2, 3];

export function Tombstones() {
  return (
    <section id="transactions" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow">Select Clients</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Partnering with exceptional companies.
          </h2>
        </div>
      </div>

      <div
        className="mt-10 relative overflow-hidden border-y border-border bg-[#0a0a0a]"
        aria-label="Client logos"
      >
        {/* edge fades over the dark strip */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <div className="marquee-track flex items-center py-10 w-max">
          {LOGO_GROUPS.map((groupIdx) => (
            <div
              key={groupIdx}
              className="flex items-center gap-24 pr-24"
              aria-hidden={groupIdx > 0}
            >
              {LOGOS.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  loading="eager"
                  decoding="async"
                  className="h-7 md:h-10 w-auto object-contain shrink-0 brightness-0 invert [image-rendering:auto]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
