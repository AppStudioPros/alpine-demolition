"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "Safety", href: "/safety" },
  { label: "About", href: "/company-profile" },
  { label: "News", href: "/news" },
  { label: "Jobs", href: "/job-openings" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#17262B] shadow-lg">
      {/* Utility band */}
      <div className="bg-[#165B38] text-white text-sm py-1.5 px-4 text-center">
        <span className="opacity-90">Colorado demolition and remediation — </span>
        <a
          href="tel:3034213366"
          className="font-semibold hover:text-[#76B852] transition-colors duration-200"
        >
          303-421-3366
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/alpine-logo-dark-background.svg"
            alt="Alpine Demolition"
            width={180}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:3034213366"
            className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            <Phone size={16} />
            303-421-3366
          </a>
          <Link
            href="/contact"
            className="bg-[#165B38] hover:bg-[#1a7044] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
          >
            Discuss Your Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#17262B] border-t border-white/10 px-4 pb-6 pt-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-base py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="tel:3034213366"
              className="flex items-center justify-center gap-2 text-white border border-white/30 rounded py-3 font-semibold"
            >
              <Phone size={18} />
              Call 303-421-3366
            </a>
            <Link
              href="/contact"
              className="bg-[#165B38] text-white text-center rounded py-3 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
