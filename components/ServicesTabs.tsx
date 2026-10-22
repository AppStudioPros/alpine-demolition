"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Leaf, Flame, Recycle, Siren, ChevronRight, ShieldCheck } from "lucide-react";

const services = [
  {
    id: "structural",
    tabLabel: "Structural",
    icon: Building2,
    title: "Structural Demolition",
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
    tabLabel: "Environmental",
    icon: Leaf,
    title: "Environmental Remediation",
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
    tabLabel: "Tank Removal",
    icon: Flame,
    title: "Tank Removal",
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
    tabLabel: "Material Recovery",
    icon: Recycle,
    title: "Material Recovery",
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
    tabLabel: "Disaster Response",
    icon: Siren,
    title: "Disaster Response",
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

export default function ServicesTabs() {
  const [active, setActive] = useState(services[0].id);
  const svc = services.find((s) => s.id === active)!;
  const Icon = svc.icon;

  return (
    <>
      {/* Centered tab bar */}
      <div className="bg-[#F4F2ED] border-b border-[#DEE3DC]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`text-sm font-semibold px-5 py-2.5 rounded border transition-colors duration-200 ${
                  active === s.id
                    ? "bg-[#165B38] text-white border-[#165B38]"
                    : "bg-white text-[#165B38] border-[#DEE3DC] hover:border-[#165B38]"
                }`}
              >
                {s.tabLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active service panel */}
      <section className="bg-white py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex flex-col items-center gap-3 mb-6 text-center">
                <div className="w-14 h-14 rounded-lg bg-[#165B38] flex items-center justify-center shrink-0">
                  <Icon size={28} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17262B]">{svc.title}</h2>
                  <p className="text-[#165B38] font-medium text-sm mt-1">{svc.tagline}</p>
                </div>
              </div>
              <div className="space-y-4 text-center">
                {svc.body.map((para, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#F4F2ED] border border-[#DEE3DC] rounded-xl p-8">
                <h3 className="font-bold text-[#17262B] mb-5 text-center">Capabilities Include</h3>
                <ul className="space-y-3">
                  {svc.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm text-gray-600 justify-center">
                      <ShieldCheck size={18} className="text-[#165B38] mt-0.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[#DEE3DC] flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-6 py-3 rounded text-sm transition-colors duration-200"
                  >
                    Discuss This Service <ChevronRight size={16} />
                  </Link>
                  <a
                    href="tel:3034213366"
                    className="inline-flex items-center gap-2 border border-[#DEE3DC] hover:border-[#165B38] text-[#17262B] font-semibold px-6 py-3 rounded text-sm transition-colors duration-200"
                  >
                    Call 303-421-3366
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
