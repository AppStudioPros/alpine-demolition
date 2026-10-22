import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import ServicesTabs from "@/components/ServicesTabs";

export const metadata: Metadata = {
  title: "Services | Alpine Demolition",
  description:
    "Alpine Demolition offers structural demolition, environmental remediation, asbestos abatement, tank removal, material recovery, and disaster response services across Colorado.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#17262B] text-white min-h-[320px] flex items-center">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#76B852] text-xs font-bold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 max-w-2xl">
            Full-Scope Demolition and Remediation Services
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Alpine Demolition serves commercial, industrial, and government clients throughout
            Colorado with a structured, safety-first approach on every project.
          </p>
        </div>
      </section>

      {/* Tabbed services — client component */}
      <ServicesTabs />

      {/* Safety band */}
      <section className="bg-[#17262B] text-white py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#76B852] text-xs font-bold uppercase tracking-widest mb-4">
                Safety
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                Site-Specific Safety Planning on Every Project
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Alpine develops project-specific safety plans as a standard part of every scope.
                Safety planning is integrated with abatement and demolition sequencing — not added
                as an afterthought.
              </p>
              <Link href="/safety" className="inline-flex items-center gap-2 text-[#76B852] font-semibold text-sm hover:text-white transition-colors">
                Read about Alpine's safety program <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Site-specific safety plans",
                "Hazardous material assessment",
                "Regulatory compliance coordination",
                "Project documentation and handover",
                "Integrated abatement sequencing",
                "Qualified staff oversight",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4">
                  <ShieldCheck size={18} className="text-[#76B852] shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
