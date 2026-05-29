export function Tombstones() {
  const deals = [
    { company: "Series C SaaS Platform", amount: "$75M", type: "Growth Debt", lender: "Top-Tier Credit Fund" },
    { company: "AI Infrastructure Co.", amount: "$50M", type: "Venture Debt", lender: "Bank Lender" },
    { company: "Vertical SaaS Leader", amount: "$120M", type: "Structured Finance", lender: "Private Credit" },
    { company: "Healthcare Technology", amount: "$40M", type: "Venture Debt", lender: "Specialty Lender" },
    { company: "Fintech Lending Platform", amount: "$200M", type: "Warehouse Facility", lender: "Money-Center Bank" },
    { company: "Climate Tech Pioneer", amount: "$60M", type: "Project Finance", lender: "Infrastructure Fund" },
    { company: "Enterprise Cybersecurity", amount: "$35M", type: "Growth Debt", lender: "Credit Fund" },
    { company: "Marketplace Operator", amount: "$90M", type: "Structured Finance", lender: "Private Credit" },
  ];

  return (
    <section id="transactions" className="py-24 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="eyebrow">Select Transactions</div>
          <h2 className="mt-4 text-4xl md:text-5xl text-balance">
            Capital committed to companies we believe in.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A representative sample of advised transactions across venture debt,
            growth debt, and structured finance.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 border border-border">
          {deals.map((d, i) => (
            <article
              key={i}
              className="group bg-card p-6 md:p-8 flex flex-col justify-between min-h-[220px] hover:bg-secondary transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {d.type}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold opacity-70 group-hover:opacity-100" />
              </div>
              <div className="mt-8">
                <div className="font-serif text-3xl md:text-4xl text-gold">{d.amount}</div>
                <div className="mt-3 font-serif text-lg leading-snug">{d.company}</div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Advised on facility from {d.lender}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">*Partial transaction list. Selected for illustration.</p>
      </div>
    </section>
  );
}
