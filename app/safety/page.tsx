import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ClipboardList, HardHat, Users, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Demolition Safety Program | Alpine Demolition Colorado',
  description: 'Alpine Demolition’s site-specific safety program exceeds OSHA standards on every project. Daily toolbox meetings, dedicated safety officers, and integrated abatement planning.',
  alternates: { canonical: '/safety' },
  openGraph: { title: 'Demolition Safety Program | Alpine Demolition Colorado', description: 'Alpine Demolition’s site-specific safety program exceeds OSHA standards on every project. Daily toolbox meetings, dedicated safety officers, and integrated abatement planning.' },
};

const pillars = [
  {
    icon: ClipboardList,
    title: "Site-Specific Safety Plans",
    body: "Every Alpine project begins with a site-specific safety plan developed before work starts. No two projects share the same conditions, and safety planning reflects that. Every site is analyzed for potential hazards before crews arrive.",
  },
  {
    icon: HardHat,
    title: "Daily Toolbox Meetings",
    body: "Mandatory daily toolbox meetings keep crews aligned on hazards, procedures, and any changes to site conditions. Supervisor meetings ensure safety priorities are communicated at every level of the project team.",
  },
  {
    icon: ShieldCheck,
    title: "On-Site Safety Officer",
    body: "Every Alpine project is monitored by a dedicated health and safety officer to ensure compliance with all safety requirements throughout the project. Management maintains a presence at each site.",
  },
  {
    icon: Users,
    title: "Trained & Equipped Staff",
    body: "Alpine staff are trained in the latest regulations, laws, and procedures. All workers are properly equipped with personal protective equipment appropriate to their assigned task. Office, field, and equipment personnel all participate in the safety program.",
  },
];

export default function Safety() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#17262B] text-white min-h-[320px] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Safety Program
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 max-w-3xl mx-auto text-center">
            Safety is never compromised.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mx-auto text-center">
            An umbrella for every project is safety. Alpine leaves nothing to chance — a double check
            is conducted of all equipment, personnel, materials, and the project site before and
            during every project.
          </p>
        </div>
      </section>

      {/* Core statement */}
      <section className="bg-white py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-4">
                Our Commitment
              </p>
              <h2 className="text-3xl font-extrabold text-[#17262B] mb-6 leading-tight">
                Safety and regulatory compliance are of paramount importance at Alpine.
              </h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  Alpine Demolition's health and safety program is aimed at reducing the risks
                  inherent in demolition work by creating the safest working environment possible for
                  employees and everyone in and around the project site.
                </p>
                <p>
                  In many cases, Alpine's health and safety requirements exceed OSHA and other
                  industry standards. Staff are trained in the latest regulations, laws, and
                  procedures — working closely with state and federal agencies where required.
                </p>
                <p>
                  Safety is a commitment made by each employee at Alpine — whether office personnel,
                  field crews, or equipment operators. It is not a department or a checklist. It is
                  how Alpine operates.
                </p>
                <p>
                  All codes, specifications, and regulations must be met to ensure the safety and
                  integrity of the project and the people directly and indirectly involved.
                </p>
              </div>
            </div>
            <div className="bg-[#F4F2ED] rounded-xl border border-[#DEE3DC] p-8">
              <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-6">
                What This Means on a Project
              </p>
              <ul className="space-y-4">
                {[
                  "Site-specific safety plan developed before mobilization",
                  "Mandatory daily toolbox meetings for all crew members",
                  "Dedicated health and safety officer on every project site",
                  "Management presence throughout the project",
                  "Personal protective equipment appropriate to every task",
                  "Equipment and vehicle fleet maintained to operating standards",
                  "Double-check of equipment, personnel, materials, and site conditions",
                  "All OSHA requirements met — often exceeded",
                  "Ongoing staff training in current regulations and procedures",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm text-left">
                    <ShieldCheck size={16} className="text-[#165B38] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="bg-[#F4F2ED] py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">
              Program Structure
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B]">
              How Alpine builds safety into every project.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-lg border border-[#DEE3DC] p-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-lg bg-[#17262B] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#76B852]" />
                  </div>
                  <h3 className="font-bold text-[#17262B] text-lg mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#17262B] text-white py-16">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 text-center w-full">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Questions about Alpine's safety program?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Contact Alpine to discuss project requirements, site conditions, or safety protocols.
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
