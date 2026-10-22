import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import PortfolioAccordion from "@/components/PortfolioAccordion";

export const metadata: Metadata = {
  title: "Project Portfolio | Alpine Demolition",
  description: "Alpine Demolition's project portfolio — commercial, industrial, institutional, and government demolition projects throughout Colorado. Click any project to view details and photos.",
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#17262B] text-white min-h-[320px] flex flex-col justify-center items-center">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 text-center w-full">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Project Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Work That Speaks for Itself.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mx-auto">
            20 documented projects — commercial, industrial, institutional, and government demolition
            throughout Colorado. Click any project to expand details and photos.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-white py-0">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-12">
          <div className="border border-[#DEE3DC] rounded-xl overflow-hidden bg-white shadow-sm">
            <PortfolioAccordion />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#17262B] text-white py-16">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 text-center w-full">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Discuss a project with Alpine.
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Share site details and scope — Alpine will route your request to the right team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-8 py-4 rounded text-base transition-colors">
              Contact Alpine <ChevronRight size={18} />
            </Link>
            <a href="tel:3034213366" className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded text-base transition-colors">
              303-421-3366
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
