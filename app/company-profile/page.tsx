import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Recycle, Users, ShieldCheck, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Company Profile | Alpine Demolition",
  description: "Alpine Demolition has provided structural demolition, environmental remediation, and material recovery services to commercial and industrial clients throughout Colorado for decades.",
  alternates: { canonical: "/company-profile" },
};

const commitments = [
  {
    icon: ShieldCheck,
    title: "Safety First — Always",
    body: "Safety is the top priority on every Alpine project. Site-specific safety plans are developed before work begins, and a health and safety officer is present on every project site. Alpine's health and safety requirements exceed OSHA and other industry standards in many cases.",
  },
  {
    icon: Recycle,
    title: "Committed to Recycling",
    body: "Alpine is committed to reusing and recycling materials from demolition projects. The key is careful deconstruction rather than outright demolition — recovering steel, concrete, wood, and other materials for reuse or resale. This approach reduces waste, lowers transport costs, and can generate revenue for clients.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    body: "Alpine understands that each project is different and approaches every job with a thorough understanding of site conditions, client goals, and project constraints. Once work begins, client priorities become Alpine's priorities — from first contact through final documentation and handover.",
  },
];

const services = [
  "Commercial and industrial structural demolition",
  "Interior and selective demolition",
  "Environmental remediation and abatement",
  "Asbestos, lead, mold, and soil remediation",
  "Underground and above-ground storage tank removal",
  "Material recovery, deconstruction, and recycling",
  "Disaster and emergency site response",
  "Public agency and government-contracted demolition",
  "Residential demolition (secondary market)",
];

export default function CompanyProfile() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#17262B] text-white py-24">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Company Profile
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 max-w-3xl">
            Decades of Demolition Experience in Colorado.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Alpine Demolition began as a small demolition company and has grown into a full-service
            commercial and industrial contractor with a track record that spans structures of all
            types and scales across Colorado.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-4">
                About Alpine
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B] mb-6 leading-tight">
                From a focused start to a full-service operation.
              </h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  Alpine Demolition Inc. began as a company providing demolition services and has
                  expanded over the years to include interior and exterior demolition, environmental
                  abatement services — asbestos abatement, lead and mold remediation — underground
                  storage tank removals, and soil remediation.
                </p>
                <p>
                  Alpine serves a wide range of clients across commercial, public agency, residential,
                  private sector, and industrial facilities. The company's portfolio includes some of
                  Colorado's most recognized demolition projects — including the former Kodak plant in
                  Windsor and 990 Bannock in downtown Denver.
                </p>
                <p>
                  Alpine's approach is built on listening to clients, understanding site-specific
                  conditions, and executing with a focus on safety, schedule, and minimal disruption.
                  Once a project starts, the client is the number one priority.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-4">
                Services Provided
              </p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-[#165B38] mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Commitments */}
      <section className="bg-[#F4F2ED] py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">
              How Alpine Operates
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B]">
              Three things that don't change project to project.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-white rounded-lg border border-[#DEE3DC] p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#17262B] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#76B852]" />
                  </div>
                  <h3 className="font-bold text-[#17262B] text-lg mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recycling detail */}
      <section className="bg-[#17262B] text-white py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#76B852] text-xs font-bold uppercase tracking-widest mb-4">
                Deconstruction & Recovery
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
                Recycling materials is part of how Alpine works — not an afterthought.
              </h2>
              <div className="space-y-4 text-white/70 text-base leading-relaxed">
                <p>
                  Alpine's commitment to material recovery goes back to the company's roots. Where
                  project conditions allow, Alpine deconstructs buildings carefully to recover and
                  sort usable materials — steel, concrete, wood, and more — rather than sending
                  everything to landfill.
                </p>
                <p>
                  This approach can reduce transport costs, generate revenue from salvaged materials,
                  and contribute to greener building practices. Alpine has been recognized for
                  leading its industry in construction and demolition recycling.
                </p>
                <p>
                  Actual recovery rates depend on project materials, site conditions, and scope —
                  contact Alpine to discuss what recovery opportunities exist on your project.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Steel", detail: "Recovered and recycled from structural frames, tank removals, and mechanical systems" },
                { label: "Concrete", detail: "Crushed on-site or transported for aggregate reuse where feasible" },
                { label: "Wood", detail: "Salvaged timbers and dimensional lumber recovered for reuse or resale" },
                { label: "Other Materials", detail: "Brick, masonry, and architectural elements recovered as site conditions allow" },
              ].map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <p className="text-[#76B852] font-bold text-sm mb-2">{m.label}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4F2ED] py-16">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17262B] mb-4">
            Ready to discuss a project?
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Contact Alpine to discuss your project scope, site conditions, and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-8 py-4 rounded text-base transition-colors">
              Contact Alpine <ChevronRight size={18} />
            </Link>
            <a href="tel:3034213366" className="inline-flex items-center justify-center gap-2 border border-[#17262B] text-[#17262B] font-semibold px-8 py-4 rounded text-base transition-colors hover:bg-[#17262B] hover:text-white">
              303-421-3366
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
