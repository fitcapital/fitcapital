const LOGOS = [
  "https://static.wixstatic.com/media/104b7b_c88399e438f34fa5abf477ac35cd26bf~mv2.png",
  "https://static.wixstatic.com/media/104b7b_0a60050928d54888aa541de518dd6c84~mv2.png",
  "https://static.wixstatic.com/media/104b7b_c3a44b1ac8e84e37aaa345e5a2fe49dc~mv2.png",
  "https://static.wixstatic.com/media/104b7b_5c87cccd55cd45ad9f35ad051ef14531~mv2.png",
  "https://static.wixstatic.com/media/104b7b_ac0f385092f747fc966edec763592cab~mv2.png",
  "https://static.wixstatic.com/media/104b7b_a7a8f6a05dbd439cbf3c5f17cd796f3d~mv2.png",
  "https://static.wixstatic.com/media/104b7b_4f998121a62544a9a7a375c47b5f466f~mv2.png",
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
        className="mt-14 relative overflow-hidden border-y border-border bg-secondary/30"
        aria-label="Client logos"
      >
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex items-center gap-16 py-10 w-max">
          {track.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity shrink-0"
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
