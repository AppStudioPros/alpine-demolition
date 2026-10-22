import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Safety", href: "/safety" },
  { label: "About", href: "/company-profile" },
  { label: "News", href: "/news" },
  { label: "Jobs", href: "/job-openings" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const cityLinks = [
  { label: "Denver", href: "/demolition-contractor-denver" },
  { label: "Aurora", href: "/demolition-contractor-aurora" },
  { label: "Fort Collins", href: "/demolition-contractor-fort-collins" },
  { label: "Longmont", href: "/demolition-contractor-longmont" },
  { label: "Arvada", href: "/demolition-contractor-arvada" },
  { label: "Lakewood", href: "/demolition-contractor-lakewood" },
  { label: "Boulder", href: "/demolition-contractor-boulder" },
];

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-[#17262B] text-white">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + NAP */}
          <div className="flex flex-col gap-6">
            <Image
              src="/alpine-logo-dark-background.svg"
              alt="Alpine Demolition"
              width={180}
              height={48}
              className="h-12 w-auto"
            />
            <div className="space-y-3 text-white/70 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-[#76B852] shrink-0" />
                <address className="not-italic">
                  5790 W 56th Ave Suite C<br />
                  Arvada, CO 80002
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#76B852] shrink-0" />
                <a
                  href="tel:3034213366"
                  className="hover:text-white transition-colors duration-200"
                >
                  303-421-3366
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#76B852] mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* City pages */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#76B852] mb-4">
              Service Areas
            </h3>
            <nav className="flex flex-col gap-2">
              {cityLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-white/70 hover:text-white text-sm transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#76B852] mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>Structural &amp; Mechanical Demolition</li>
              <li>Environmental Remediation &amp; Abatement</li>
              <li>Tank Removal &amp; Purging</li>
              <li>Material Recovery &amp; Deconstruction</li>
              <li>Disaster &amp; Site Response</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {year} Alpine Demolition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
