import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Demolition Contractor Boulder, CO | Alpine Demolition",
  description: "Alpine Demolition provides commercial and industrial demolition services in Boulder, CO. Documented project history, safety-first approach, and competitive pricing. Call 303-421-3366.",
  alternates: { canonical: "/demolition-contractor-boulder" },
  openGraph: { title: "Demolition Contractor Boulder CO | Alpine Demolition", description: "Commercial and industrial demolition in Boulder, Colorado. Structural demolition, abatement, tank removal, and material recovery. Call 303-421-3366." },
};

const projects = ["Boulder County regional service coverage", "Experience with university and institutional demolition scopes (CSU Fort Collins)"];

const services = [
  "Commercial and industrial structural demolition",
  "Environmental remediation and asbestos abatement",
  "Underground storage tank (UST) removal",
  "Material recovery and deconstruction",
  "Disaster and emergency site response",
  "Interior and selective demolition",
];

const faq = [
  { q: "Does Alpine Demolition serve Boulder, Colorado?", a: "Yes. Alpine Demolition is a Colorado-based contractor that serves Boulder and the broader Boulder County area for commercial and industrial demolition projects. The company is headquartered in Arvada, CO." },
  { q: "What types of demolition projects does Alpine handle in Boulder?", a: "Alpine handles structural demolition, asbestos abatement, environmental remediation, tank removal, material recovery, and disaster response for commercial, industrial, and government clients in Boulder and across Colorado." },
  { q: "How do I get a demolition quote for a project in Boulder?", a: "Contact Alpine by phone at 303-421-3366 or submit a project inquiry online. Alpine will review your site conditions and scope, then route your request to the right team." },
];

const ld = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alpine Demolition",
  url: "https://www.alpinedemolition.com",
  telephone: "+13034213366",
  address: { "@type": "PostalAddress", streetAddress: "5790 W 56th Ave Suite C", addressLocality: "Arvada", addressRegion: "CO", postalCode: "80002", addressCountry: "US" },
  areaServed: { "@type": "City", name: "Boulder", containedInPlace: { "@type": "State", name: "Colorado" } },
  description: "Commercial and industrial demolition contractor serving Boulder, Colorado and the broader Colorado Front Range.",
  serviceType: ["Structural Demolition", "Environmental Remediation", "Asbestos Abatement", "Tank Removal", "Material Recovery"],
  "@type_faq": "FAQPage",
  mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function CityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="bg-[#17262B] text-white min-h-[320px] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">
            <MapPin size={12} className="inline mr-1" />Boulder, Colorado
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-center">
            Demolition Contractor<br/>in Boulder, CO.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mx-auto text-center">
            Alpine Demolition serves Boulder and Boulder County with full-scope commercial and industrial demolition — structural teardowns, abatement, tank removal, and material recovery.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-4">About This Area</p>
              <h2 className="text-3xl font-extrabold text-[#17262B] mb-6">Boulder — University of Colorado&#39;s Home City</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">Alpine Demolition serves Boulder and Boulder County commercial, institutional, and industrial clients as part of its Colorado statewide service area.</p>
              {projects.length > 0 && (
                <>
                  <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-4">Alpine&#39;s Boulder Project History</p>
                  <ul className="space-y-3 mb-6">
                    {projects.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-[#165B38] mt-0.5 shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <p className="text-sm text-gray-500 italic">Boulder clients benefit from Alpine&#39;s experience with university campus demolition, institutional structures, and environmental abatement scopes common in Colorado&#39;s Front Range.</p>
            </div>
            <div>
              <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-4">Services in Boulder</p>
              <ul className="space-y-3 mb-8">
                {services.map(s => (
                  <li key={s} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-[#165B38] mt-0.5 shrink-0" />{s}
                  </li>
                ))}
              </ul>
              <div className="bg-[#F4F2ED] rounded-xl border border-[#DEE3DC] p-6">
                <p className="font-bold text-[#17262B] mb-1">Ready to discuss a project in Boulder?</p>
                <p className="text-gray-500 text-sm mb-4">Contact Alpine to review your site, scope, and timeline.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-5 py-3 rounded text-sm transition-colors">
                    Submit Project Details <ChevronRight size={16} />
                  </Link>
                  <a href="tel:3034213366" className="inline-flex items-center justify-center gap-2 border border-[#DEE3DC] text-[#17262B] font-semibold px-5 py-3 rounded text-sm hover:bg-white transition-colors">
                    Call 303-421-3366
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F2ED] py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3 text-center">FAQ</p>
          <h2 className="text-3xl font-extrabold text-[#17262B] mb-10 text-center">Common Questions — Boulder</h2>
          <div className="space-y-6">
            {faq.map(f => (
              <div key={f.q} className="bg-white border border-[#DEE3DC] rounded-xl p-6">
                <p className="font-bold text-[#17262B] mb-2">{f.q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17262B] text-white py-16">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Contact Alpine for a Boulder Project</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Share your site location, structure type, and scope. Alpine will follow up promptly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#165B38] hover:bg-[#1a7044] text-white font-semibold px-8 py-4 rounded text-base transition-colors">
              Discuss Your Project <ChevronRight size={18} />
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
