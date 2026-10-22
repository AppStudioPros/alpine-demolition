import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Longmont Times-Call Demolition Coverage | Alpine Demolition",
  description: "The Longmont Times-Call covered Alpine Demolition's work at 700 Coffman Street in Longmont, Colorado — making way for the Roosevelt Park Apartments.",
  alternates: { canonical: "/news/longmont-times-call-demolition-coverage" },
};

export default function LongmontTimes() {
  return (
    <>
      <section className="bg-[#17262B] text-white min-h-[320px] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">Longmont Times-Call · October 15, 2012</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 text-center">Longmont Times-Call — Demolition &amp; Recycling Project</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <Link href="/news" className="inline-flex items-center gap-2 text-[#165B38] text-sm font-semibold mb-10 hover:text-[#17262B] transition-colors">
            <ChevronLeft size={16}/> Back to News
          </Link>

          <div className="bg-[#F4F2ED] border border-[#DEE3DC] rounded-xl p-6 mb-10">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-1">Alpine's Note</p>
            <p className="text-gray-700 text-base leading-relaxed">Thank you Longmont Times-Call. We're very proud of having our Longmont demolition projects covered by the news. The Longmont Times-Call has followed our controlled demolitions for years, and we love being a part of Longmont, Colorado's history and future.</p>
          </div>

          <div className="prose max-w-none">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Via Longmont Times-Call · Posted October 15, 2012</p>
            <h2 className="text-2xl font-extrabold text-[#17262B] mt-4 mb-4">Longmont Demolition &amp; Recycling Project — 700 Coffman Street</h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">In its colorful history, the building on the northeast corner of Longs Peak Avenue and Coffman Street has housed a church and a handful of bars and restaurants. Now, it has been demolished to make way for apartment units.</p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">Demolition started Monday at 700 Coffman St., as crews began preparing for the groundbreaking of the Roosevelt Park Apartments. The $21 million project at Main Street and Longs Peak Avenue is planned to include 115 apartments, plus a restaurant and retail space and a parking garage.</p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">About $16 million for the project is coming from development company Burden Inc., with the remainder financed through other sources. Alpine Demolition handled the demolition and material recovery scope as part of the site preparation work.</p>

            <p className="text-gray-600 text-base leading-relaxed">The Longmont project is consistent with Alpine's commitment to being part of Colorado communities' growth — clearing historic structures safely to make way for new development.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
