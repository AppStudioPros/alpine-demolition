import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import Animate from "@/components/Animate";

export const metadata: Metadata = {
  title: 'Alpine Demolition in the News | Colorado Press Coverage',
  description: 'Alpine Demolition has been featured in 9 News Denver, the Denver Post, and the Longmont Times-Call for safe, professional demolition work throughout Colorado.',
  alternates: { canonical: '/news' },
  openGraph: { title: 'Alpine Demolition in the News | Colorado Press Coverage', description: 'Alpine Demolition has been featured in 9 News Denver, the Denver Post, and the Longmont Times-Call for safe, professional demolition work throughout Colorado.' },
};

const articles = [
  {
    slug: "9-news-denver-demolition-coverage",
    outlet: "9 News Denver",
    title: "Channel 9 News Denver Demolition Coverage",
    date: "June 22, 2018",
    excerpt: "Channel 9 News Denver covered Alpine Demolition's work removing the fire-damaged construction site at East 18th Avenue and North Emerson Street in Denver.",
  },
  {
    slug: "denver-post-demolition-coverage",
    outlet: "Denver Post",
    title: "Denver Post — Wrecking Ball Meets Denver Hotel",
    date: "February 22, 2010",
    excerpt: "The Denver Post covered Alpine Demolition's takedown of the landmark Sheraton hotel at Interstate 25 and East Hampden Avenue — a major Denver demolition project.",
  },
  {
    slug: "longmont-times-call-demolition-coverage",
    outlet: "Longmont Times-Call",
    title: "Longmont Times-Call — Demolition & Recycling Project",
    date: "October 15, 2012",
    excerpt: "The Longmont Times-Call covered Alpine's demolition of the building at 700 Coffman Street, making way for the Roosevelt Park Apartments development.",
  },
];

export default function News() {
  return (
    <>
      <section className="bg-[#17262B] text-white min-h-[320px] flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">Press</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-center">Alpine In The News.</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed mx-auto text-center">Alpine Demolition has been featured in local and regional news outlets for its safe, professional, and high-profile demolition work throughout Colorado.</p>
        </div>
      </section>

      <section className="bg-[#F4F2ED] py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {articles.map((a) => (
              <Link key={a.slug} href={`/news/${a.slug}`}
                data-animate="fade-up" className="bg-white border border-[#DEE3DC] rounded-xl p-8 hover:border-[#165B38] transition-all duration-200 group card-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#17262B] flex items-center justify-center shrink-0">
                    <Newspaper size={18} className="text-[#76B852]" />
                  </div>
                  <div>
                    <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest">{a.outlet}</p>
                    <p className="text-gray-400 text-xs">{a.date}</p>
                  </div>
                </div>
                <h2 className="text-xl font-extrabold text-[#17262B] mb-3 group-hover:text-[#165B38] transition-colors">{a.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-[#165B38] text-sm font-semibold">Read more <ChevronRight size={15}/></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
