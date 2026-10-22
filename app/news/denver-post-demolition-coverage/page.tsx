import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Denver Post Demolition Coverage | Alpine Demolition",
  description: "The Denver Post covered Alpine Demolition's takedown of the landmark Sheraton hotel at Interstate 25 and East Hampden Avenue in Denver, Colorado.",
  alternates: { canonical: "/news/denver-post-demolition-coverage" },
};

export default function DenverPost() {
  return (
    <>
      <section className="bg-[#17262B] text-white min-h-[320px] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">Denver Post · February 22, 2010</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 text-center">Denver Post — Wrecking Ball Meets Denver Hotel</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <Link href="/news" className="inline-flex items-center gap-2 text-[#165B38] text-sm font-semibold mb-10 hover:text-[#17262B] transition-colors">
            <ChevronLeft size={16}/> Back to News
          </Link>

          <div className="bg-[#F4F2ED] border border-[#DEE3DC] rounded-xl p-6 mb-10">
            <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-1">Alpine's Note</p>
            <p className="text-gray-700 text-base leading-relaxed">Thank you Denver Post for covering Alpine's demolition work. We love having our projects covered by the news and are proud of serving the Denver Metro Area. The Denver Post has followed our safe demolitions for years, and we love being a part of Denver, Colorado's history and future.</p>
          </div>

          <div className="prose max-w-none">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Via Denver Post · Published February 22, 2010</p>
            <h2 className="text-2xl font-extrabold text-[#17262B] mt-4 mb-4">Wrecking ball meets Denver hotel</h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">Alpine Demolition began today to bring down a Denver landmark at Interstate 25 and East Hampden Avenue.</p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">The hotel, built as a Marriott in 1974 and transformed into the Four Points by Sheraton Denver Southeast five years ago, is meeting the wrecking ball. When the lease expired in 2008, Four Points owner Starwood Hotels &amp; Resorts opted not to re-up. The property reverted to the hands of the landlord — the Gaiser family, a storied clan of developers with real estate holdings throughout the metro area.</p>

            <p className="text-gray-600 text-base leading-relaxed mb-4">The hotel encompasses 12 acres with over 615 rooms and was once among the eight largest hotels in Denver. Alpine Demolition was contracted for the full demolition scope — structural takedown, deconstruction, and material recovery — at the prominent Interstate 25 site.</p>

            <p className="text-gray-600 text-base leading-relaxed">The project represented one of Alpine's most high-profile urban demolition scopes and was completed with the company's standard focus on safety and site management throughout the process.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
