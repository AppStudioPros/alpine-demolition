import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "9 News Denver Demolition Coverage | Alpine Demolition",
  description: "Channel 9 News Denver covered Alpine Demolition's removal of the fire-damaged construction site at East 18th Avenue and North Emerson Street in Denver, Colorado.",
  alternates: { canonical: "/news/9-news-denver-demolition-coverage" },
};

export default function NineNews() {
  return (
    <>
      <section className="bg-[#17262B] text-white min-h-[320px] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">9 News Denver · June 22, 2018</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 text-center">Channel 9 News Denver Demolition Coverage</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <Link href="/news" className="inline-flex items-center gap-2 text-[#165B38] text-sm font-semibold mb-10 hover:text-[#17262B] transition-colors">
            <ChevronLeft size={16}/> Back to News
          </Link>

          <div className="bg-[#F4F2ED] border border-[#DEE3DC] rounded-xl p-6 mb-10">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-1">Alpine's Note</p>
            <p className="text-gray-700 text-base leading-relaxed">Thank you Channel 9 News Denver for covering another one of Alpine's Denver demolitions. Here at Alpine Demolition, we are proud of our demolition work and safety record. Channel 9 News Denver has followed our controlled demolitions for years, and we love being a part of Denver, Colorado's history and future.</p>
          </div>

          <div className="prose max-w-none">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Via 9 News Denver · Published 6:02 PM MDT June 22, 2018</p>
            <h2 className="text-2xl font-extrabold text-[#17262B] mt-4 mb-4">The demolition crew starts to remove what's left of a burnt construction site in Denver</h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">The site is at East 18th Avenue and North Emerson Street, where a construction site in early March caught fire, killing two and damaging nearby buildings and cars.</p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">Changing from a button-down, collared shirt into a plain white one with a bright construction vest, Jim Gochis prepared for a project he already did less than a year ago. Gochis is the owner of the Arvada-based Alpine Demolition.</p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">"I can't get up there and swing a hammer anymore," said Gochis, 74. "But I take pride in what they do. It's their hands and they do it right."</p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">On Friday, Alpine Demolition started the cleanup process of the charred construction site at 18th Avenue and Emerson Street. The fire back on March 4th was the largest structure fire in Denver in about two decades. Two construction workers died and nearby residents had to be evacuated.</p>

            <p className="text-gray-600 text-base leading-relaxed">The cleanup was expected to take about two to three weeks. Alpine Demolition handled the structural removal and debris clearance as part of the emergency response scope.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
