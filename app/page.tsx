import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Building2,
  Leaf,
  Flame,
  Recycle,
  Siren,
  ChevronRight,
  Calendar,
  PhoneCall,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alpine Demolition | Commercial & Industrial Demolition Colorado",
  description:
    "Alpine Demolition provides structural demolition, environmental remediation, tank removal, and material recovery for commercial and industrial projects throughout Colorado. Call 303-421-3366.",
  alternates: { canonical: "/" },
};

const services = [
  {
    icon: Building2,
    title: "Structural & Mechanical Demolition",
    desc: "Demolition work planned around site access, sequencing, and project-specific conditions for commercial and industrial structures.",
    href: "/services#structural",
  },
  {
    icon: Leaf,
    title: "Environmental Remediation & Abatement",
    desc: "Abatement and remediation services — including asbestos, lead, mold, and soil — across Alpine's established project portfolio.",
    href: "/services#environmental",
  },
  {
    icon: Flame,
    title: "Tank Removal & Purging",
    desc: "Tank purging, removal, and dismantling capabilities for above-ground and underground storage tank projects.",
    href: "/services#tank-removal",
  },
  {
    icon: Recycle,
    title: "Material Recovery & Deconstruction",
    desc: "Selective recovery, sorting, and recycling of steel, concrete, and other materials as project conditions allow.",
    href: "/services#material-recovery",
  },
  {
    icon: Siren,
    title: "Disaster & Site Response",
    desc: "Project support following fire, wind, water, and related events — subject to assessment and staff availability.",
    href: "/services#disaster-response",
  },
];

const proofTiles = [
  {
    label: "Historic Scope",
    project: "Kodak Buildings",
    detail: "1M+ sq ft historic demolition scope, completed 2014",
    location: "Windsor, Colorado",
  },
  {
    label: "Urban Demolition",
    project: "990 Bannock",
    detail: "100,000+ sq ft five-story structure, completed 2019",
    location: "Denver, Colorado",
  },
  {
    label: "Safety-First Planning",
    project: "Every Project",
    detail: "Site-specific safety and abatement planning on every project",
    location: "Colorado & Region",
  },
];

const featuredWork = [
  {
    title: "990 Bannock",
    location: "Denver, CO",
    year: "2019",
    desc: "Demolition of a five-story structure exceeding 100,000 sq ft in downtown Denver.",
    tags: ["Structural Demolition", "Urban Site"],
  },
  {
    title: "Kodak Buildings",
    location: "Windsor, CO",
    year: "2014",
    desc: "Over 1,000,000 sq ft of demolition scope at a former industrial complex — one of Alpine's largest historic projects.",
    tags: ["Industrial", "Historic Scope"],
  },
  {
    title: "Buckley Annex",
    location: "Aurora, CO",
    year: "2014",
    desc: "Demolition of three former government structures with asbestos abatement and extensive paved-area scope.",
    tags: ["Government", "Abatement"],
  },
];

const processSteps = [
  { n: "01", label: "Inquiry", desc: "Share site location, structure type, and project scope." },
  { n: "02", label: "Scope Review", desc: "Alpine reviews conditions and routes to the right team." },
  { n: "03", label: "Safety Planning", desc: "Site-specific safety and abatement plans are developed." },
  { n: "04", label: "Execution", desc: "Demolition and material handling with documented procedures." },
  { n: "05", label: "Handover", desc: "Site documentation and final handover to the client." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alpine Demolition",
  url: "https://www.alpinedemolition.com",
  telephone: "+13034213366",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5790 W 56th Ave Suite C",
    addressLocality: "Arvada",
    addressRegion: "CO",
    postalCode: "80002",
    addressCountry: "US",
  },
  description:
    "Commercial and industrial demolition, environmental remediation, tank removal, and material recovery throughout Colorado.",
  areaServed: {
    "@type": "State",
    name: "Colorado",
  },
  serviceType: [
    "Structural Demolition",
    "Environmental Remediation",
    "Tank Removal",
    "Material Recovery",
    "Disaster Response",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 01 HERO */}
      <section className="bg-[#17262B] text-white min-h-[560px] flex items-center">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 w-full py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">
                Commercial / Industrial / Environmental
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
                Complex Demolition.
                <br />
                Clear Execution.
              </h1>
              <p className="text-white/75 text-lg sm:text-xl mb-10 max-w-lg leading-relaxed">
                Structural demolition, environmental remediation, and material recovery for projects
                throughout Colorado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#callback-form"
                  className="inline-flex items-center justify-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-8 py-4 rounded text-base transition-colors duration-200"
                >
                  Discuss Your Project
                  <ChevronRight size={18} />
                </a>
                <a
                  href="tel:3034213366"
                  className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded text-base transition-colors duration-200"
                >
                  <Phone size={18} />
                  Call Alpine
                </a>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                <Image
                  src="/images/hero-main.jpg"
                  alt="Alpine Demolition project site"
                  width={700}
                  height={525}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 PROOF RAIL */}
      <section className="bg-[#F4F2ED] border-b border-[#DEE3DC]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {proofTiles.map((tile) => (
              <div
                key={tile.project}
                className="bg-white rounded-lg border border-[#DEE3DC] p-8"
              >
                <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-2">
                  {tile.label}
                </p>
                <h3 className="text-lg font-bold text-[#17262B] mb-2">{tile.project}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tile.detail}</p>
                <p className="text-gray-400 text-xs mt-3">{tile.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 SERVICES */}
      <section id="services" className="bg-white">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B]">
              Full-Scope Demolition Services
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              From structural takedown to environmental remediation — Alpine handles the full project
              lifecycle for commercial and industrial clients.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className="group bg-white border border-[#DEE3DC] rounded-lg p-8 hover:border-[#165B38] hover:shadow-md transition-all duration-200 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <h3 className="text-base font-bold text-[#17262B] mb-3">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                <div className="flex items-center gap-1 mt-5 text-[#165B38] text-sm font-semibold">
                  Learn more <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-8 py-4 rounded text-base transition-colors duration-200"
            >
              View All Services
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 04 FEATURED WORK */}
      <section id="featured-work" className="bg-[#F4F2ED]">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B]">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWork.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-lg border border-[#DEE3DC] overflow-hidden"
              >
                {/* Photo placeholder */}
                <div className="relative aspect-[16/9] bg-[#17262B] flex items-center justify-center">
                  <Building2 size={40} className="text-white/20" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold text-base">{project.title}</p>
                    <p className="text-white/70 text-xs">
                      {project.location} · {project.year}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold bg-[#F4F2ED] text-[#165B38] border border-[#DEE3DC] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 HOW WE WORK */}
      <section className="bg-white">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B]">How We Work</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
              A structured, safety-first approach from first contact through final handover.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.n} className="relative flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#165B38] text-white flex items-center justify-center text-lg font-extrabold mb-4 shrink-0">
                  {step.n}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-px bg-[#DEE3DC]" />
                )}
                <h3 className="font-bold text-[#17262B] text-sm mb-2">{step.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 LEAD ACTION PANEL */}
      <section className="bg-[#17262B] text-white">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to discuss a project?</h2>
            <p className="text-white/70 mt-3 text-base">
              Choose the path that works for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/contact?tab=book"
              className="group flex flex-col items-center text-center bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg p-8 transition-all duration-200"
            >
              <Calendar size={32} className="text-[#76B852] mb-4" />
              <h3 className="font-bold text-lg mb-2">Book a Time</h3>
              <p className="text-white/60 text-sm">
                Schedule a project discussion at a time that works for you.
              </p>
            </Link>
            <a
              href="tel:3034213366"
              className="group flex flex-col items-center text-center bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg p-8 transition-all duration-200"
            >
              <PhoneCall size={32} className="text-[#76B852] mb-4" />
              <h3 className="font-bold text-lg mb-2">Call Alpine</h3>
              <p className="text-white/60 text-sm">
                Talk to the team directly at 303-421-3366.
              </p>
            </a>
            <a
              href="#callback-form"
              className="group flex flex-col items-center text-center bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg p-8 transition-all duration-200"
            >
              <MessageSquare size={32} className="text-[#76B852] mb-4" />
              <h3 className="font-bold text-lg mb-2">Request a Callback</h3>
              <p className="text-white/60 text-sm">
                Send your details and Alpine will reach out to you.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* 07 CALLBACK FORM */}
      <section id="callback-form" className="bg-[#F4F2ED]">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B]">
              Request a Callback
            </h2>
            <p className="text-gray-500 mt-4 text-base max-w-lg mx-auto">
              Send your name, email, and phone number. Alpine will contact you using the details
              provided.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-[#DEE3DC] p-8 sm:p-10 shadow-sm">
            <LeadForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
