import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-gradient-gold flex items-center justify-center text-gold-foreground font-serif text-lg leading-none">
            F
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base">Fit Capital</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Growth Capital Advisors
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#transactions" className="hover:text-foreground transition-colors">Transactions</a>
          <a href="#team" className="hover:text-foreground transition-colors">Team</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Clients</a>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 text-sm border border-gold/60 text-gold px-4 py-2 rounded-sm hover:bg-gold hover:text-gold-foreground transition-colors"
        >
          Start a Conversation
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl">Fit Capital</div>
          <p className="mt-3 text-muted-foreground max-w-sm">
            A debt-focused investment bank built by lenders. Advising growth-stage
            companies on venture debt, growth debt, and structured finance.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3">Firm</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#team" className="hover:text-foreground">Team</a></li>
            <li><a href="#transactions" className="hover:text-foreground">Transactions</a></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-3">Contact</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>info@fitcapital.com</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fit Capital Advisors. All rights reserved.
      </div>
    </footer>
  );
}
