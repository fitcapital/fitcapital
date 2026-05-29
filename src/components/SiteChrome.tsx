import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import logoUrl from "@/assets/fitcapital-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#transactions", label: "Clients" },
  { href: "#team", label: "Team" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="Fit Capital home">
          <img
            src={logoUrl}
            alt="Fit Capital"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="inline-flex items-center justify-center gap-2 text-sm text-foreground border border-foreground/40 rounded-sm px-3 py-2 hover:bg-foreground hover:text-background transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
            <span className="hidden sm:inline">Menu</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {NAV_LINKS.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <a href={link.href} className="cursor-pointer">
                  {link.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <img src={logoUrl} alt="Fit Capital" className="h-9 w-auto object-contain" />
          <p className="mt-4 text-muted-foreground max-w-sm">
            A debt-focused investment bank built by lenders. Advising growth-stage
            companies on venture debt, growth debt, and structured finance.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-3">Firm</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#team" className="hover:text-foreground">Team</a></li>
            <li><a href="#transactions" className="hover:text-foreground">Clients</a></li>
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

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 text-[11px] leading-relaxed text-muted-foreground/80 space-y-4">
          <p>
            <span className="text-foreground/80 font-medium">Disclosure:</span>{" "}
            Securities Products and Investment Banking Services are offered through
            BA Securities, LLC. Member{" "}
            <a
              href="https://www.finra.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              FINRA
            </a>{" "}
            <a
              href="https://www.sipc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              SIPC
            </a>
            . fitcapital, LLC and BA Securities, LLC are separate, unaffiliated
            entities. To learn more about the professional background of fitcapital,
            LLC and our Registered Representatives, please visit{" "}
            <a
              href="https://brokercheck.finra.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              FINRA BrokerCheck
            </a>
            .
          </p>
          <p>
            Past performance, awards, or testimonials are not indicative of future
            results. No guarantee of future performance or success is implied.
            Testimonials may not be representative of the experience of other
            clients and should not be construed as a guarantee of future performance
            or success.
          </p>
          <p>
            <span className="text-foreground/80 font-medium">Tombstones:</span>{" "}
            Commitments and Transaction experience may include deals that were
            completed by the firm&rsquo;s professionals at prior firms.
          </p>
          <p>
            The information on this Site is for informational purposes only. No
            material on this Site shall be used or considered as an offer to sell or
            a solicitation of any offer to buy the securities or services of
            fitcapital, LLC (&ldquo;fitcapital,&rdquo; &ldquo;we&rdquo; or
            &ldquo;us&rdquo;) or any other issuer. Offers can only be made where
            lawful under, and in compliance with, applicable law. The information
            contained in this Site has been prepared without reference to any
            particular user&rsquo;s investment requirements or financial situation.
            Decisions based on information contained on the Site are the sole
            responsibility of the visitor. fitcapital is not utilizing this Site to
            provide investment or other advice, and no information or material at
            this Site is to be deemed a recommendation to buy or sell any securities
            or is to be relied upon for the purpose of making or communicating
            investment or other decisions. Any transactions listed on this Site are
            included as representative transactions and are not necessarily
            reflective of overall performance. Nothing on this Site constitutes
            investment, legal or tax advice and we do not advise on the tax
            consequences of any investment.
          </p>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} fitcapital, LLC. All Rights Reserved.
      </div>
    </footer>
  );
}
