import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Leaf,
  Flame,
  Recycle,
  Siren,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Alpine Demolition",
  description:
    "Alpine Demolition offers structural demolition, environmental remediation, asbestos abatement, tank removal, material recovery, and disaster response services across Colorado.",
};

const services = [
  {
    id: "structural",
    icon: Building2,
    title: "Structural & Mechanical Demolition",
    tagline: "Planned around site access, sequencing, and project-specific conditions.",
    body: [
      "Alpine's structural and mechanical demolition work spans commercial, industrial, and government structures across Colorado. Projects are scoped with attention to site access, equipment selection, sequencing, and structural conditions unique to each site.",
      "The team manages interior demolition, full building demolition, selective deconstruction, and complex multi-phase teardowns. Alpine has documented experience with multi-story structures, former industrial complexes, and government-contracted demolition scopes.",
      "Approach varies by project: high-reach excavation, saw-cutting, deconstruction, and mechanical removal are matched to site constraints and schedule requirements.",
    ],
    bullets: [
      "Commercial and industrial building demolition",
      "Interior and selective demolition",
      "Multi-story structural takedowns",
      "High-reach and mechanical demolition methods",
      "Government and institutional structures",
    ],
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental Remediation & Abatement",
    tagline: "Abatement and remediation services across Alpine's established project portfolio.",
    body: [
      "Alpine's environmental services include asbestos abatement, lead paint remediation, mold assessment and removal, and soil remediation where applicable to the project scope. Requirements and the appropriate process depend on the site and must be reviewed by qualified staff.",
      "Environmental work is typically integrated into demolition projects where hazardous materials are identified during pre-project surveys. Alpine coordinates abatement sequences with demolition planning to manage cost, schedule, and regulatory compliance.",
      "Alpine's portfolio includes projects where remediation was a primary scope driver — see the Buckley Annex project for an example of combined abatement and structural demolition.",
    ],
    bullets: [
      "Asbestos survey support and abatement",
      "Lead paint remediation",
      "Mold assessment and removal",
      "Soil remediation (project-specific)",
      "Integrated abatement and demolition sequencing",
    ],
  },
  {
    id: "tank-removal",
    icon: Flame,
    title: "Tank Removal & Purging",
    tagline: "Tank purging, removal, and dismantling for above-ground and underground projects.",
    body: [
      "Alpine provides tank purging, removal, and dismantling capabilities for suitable projects. This includes above-ground storage tanks (ASTs) and underground storage tanks (USTs) at commercial, industrial, and government facilities.",
      "Tank removal projects require coordination with environmental review, regulatory notification, and proper disposal or material recovery of tank components. Alpine's team manages these logistics as part of the project scope.",
      "Contact Alpine to discuss the specifics of your tank project, including tank size, contents history, site access, and any known soil or groundwater concerns.",
    ],
    bullets: [
      "Above-ground storage tank (AST) removal",
      "Underground storage tank (UST) removal",
      "Tank purging and cleaning",
      "Regulatory coordination support",
      "Material disposal and recovery",
    ],
  },
  {
    id: "material-recovery",
    icon: Recycle,
    title: "Material Recovery & Deconstruction",
    tagline: "Selective recovery, sorting, and recycling of materials as project conditions allow.",
    body: [
      "Alpine incorporates material recovery and deconstruction into demolition projects where site materials and conditions support it. Steel, concrete, and other recoverable materials are sorted and diverted from landfill when economically and logistically feasible.",
      "Deconstruction approaches — where components are removed intact for reuse — are evaluated on a project-by-project basis. Recovery rates vary significantly depending on the structure's age, materials, and conditions.",
      "Alpine does not publish a universal recycling rate, as actual recovery depends on site materials and project conditions. Recovery practices are documented at the project level.",
    ],
    bullets: [
      "Structural steel salvage and recovery",
      "Concrete crushing and recycling",
      "Selective material deconstruction",
      "Landfill diversion where feasible",
      "Material recovery documentation",
    ],
  },
  {
    id: "disaster-response",
    icon: Siren,
    title: "Disaster & Site Response",
    tagline: "Project support following fire, wind, water, and related events.",
    body: [
      "Alpine provides project support following fire, wind, water damage, and related site emergencies. Response capability is subject to assessment, current project commitments, and staff availability — Alpine does not advertise a guaranteed dispatch time.",
      "Disaster response work typically includes emergency shoring, partial structure removal, debris clearance, and coordination with property owners, insurers, and local authorities. Scope is determined after an initial site assessment.",
      "For time-sensitive site conditions, contact Alpine directly by phone to discuss current availability and project specifics.",
    ],
    bullets: [
      "Post-fire structure assessment and removal",
      "Storm damage debris clearance",
      "Emergency partial demolition",
      "Coordination with insurers and authorities",
      "Site stabilization and shoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#17262B] text-white py-20 md:py-28">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <p className="text-[#76B852] text-xs font-bold uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 max-w-2xl">
            Full-Scope Demolition &amp; Remediation Services
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Alpine Demolition serves commercial, industrial, and government clients throughout
            Colorado with a structured, safety-first approach on every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="/#callback-form"
              className="inline-flex items-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-8 py-4 rounded text-base transition-colors duration-200"
            >
              Discuss Your Project
              <ChevronRight size={18} />
            </a>
            <a
              href="tel:3034213366"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded text-base transition-colors duration-200"
            >
              Call 303-421-3366
            </a>
          </div>
        </div>
      </section>

      {/* Jump nav */}
      <section className="bg-[#F4F2ED] border-b border-[#DEE3DC]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-wrap gap-3">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="text-sm font-semibold text-[#165B38] hover:text-[#17262B] border border-[#DEE3DC] bg-white rounded px-4 py-2 transition-colors duration-200"
              >
                {svc.title.split(" ")[0]} {svc.title.split(" ")[1] || ""}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((svc, i) => {
        const Icon = svc.icon;
        const isEven = i % 2 === 0;
        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`${isEven ? "bg-white" : "bg-[#F4F2ED]"} py-20`}
          >
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-[#165B38] flex items-center justify-center shrink-0">
                      <Icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17262B]">
                        {svc.title}
                      </h2>
                      <p className="text-[#165B38] font-medium text-sm mt-1">{svc.tagline}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {svc.body.map((para, j) => (
                      <p key={j} className="text-gray-600 text-base leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="bg-white border border-[#DEE3DC] rounded-xl p-8">
                    <h3 className="font-bold text-[#17262B] mb-5">Capabilities Include</h3>
                    <ul className="space-y-3">
                      {svc.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-gray-600">
                          <ShieldCheck
                            size={18}
                            className="text-[#165B38] mt-0.5 shrink-0"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-[#DEE3DC]">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-6 py-3 rounded text-sm transition-colors duration-200"
                      >
                        Discuss This Service
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Safety section */}
      <section id="safety" className="bg-[#17262B] text-white py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#76B852] text-xs font-bold uppercase tracking-widest mb-4">
                Safety &amp; Responsibility
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                Site-Specific Safety Planning on Every Project
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Alpine develops project-specific safety plans as a standard part of every scope.
                Safety planning is integrated with abatement and demolition sequencing — not added
                as an afterthought.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                Projects involving hazardous materials are assessed before demolition begins.
                Regulatory compliance, proper handling procedures, and documentation are coordinated
                by qualified staff on each project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "Site-specific safety plans",
                "Hazardous material assessment",
                "Regulatory compliance coordination",
                "Project documentation and handover",
                "Integrated abatement sequencing",
                "Qualified staff oversight",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-4"
                >
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
