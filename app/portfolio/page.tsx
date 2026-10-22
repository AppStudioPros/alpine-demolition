import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Project Portfolio | Alpine Demolition",
  description: "Alpine Demolition's project portfolio — commercial, industrial, institutional, and government demolition projects throughout Colorado.",
  alternates: { canonical: "/portfolio" },
};

const projects = [
  {
    title: "990 Bannock",
    location: "Denver, CO",
    year: "2019",
    scope: "Demolition",
    type: ["Structural Demolition", "Urban Site"],
    desc: "Alpine was hired to perform the demolition, transportation, and disposal of the former Denver Health Administrative building at 990 Bannock — a five-story concrete and steel structure encompassing over 100,000 sq ft in downtown Denver.",
    featured: true,
  },
  {
    title: "Kodak Buildings",
    location: "Windsor, CO",
    year: "2014",
    scope: "Demolition, Recycling",
    type: ["Industrial", "Recycling"],
    desc: "Demolition of the former Kodak plant in Windsor — once one of Kodak's largest film production facilities. The site encompassed over 1,000,000 sq ft of building scope. Material recovery and recycling were central to the project.",
    featured: true,
  },
  {
    title: "Buckley Annex Lowry",
    location: "Denver/Aurora, CO",
    year: "2014",
    scope: "Demolition, Recycling, Asbestos Abatement",
    type: ["Government", "Abatement", "Recycling"],
    desc: "Demolition, transportation, recycling, disposal, and asbestos abatement of three free-standing retired government structures at the former Buckley Annex Lowry site. Project scope expanded and Alpine maintained as the primary demolition contractor.",
    featured: true,
  },
  {
    title: "Denver University — Aspen Hall",
    location: "Denver, CO",
    year: "2018",
    scope: "Demolition",
    type: ["Institutional", "Educational"],
    desc: "Demolition of the former Aspen Hall building at Denver University, located at 2280 Vine Street. The structure was approximately 39,000 sq ft including basement area.",
  },
  {
    title: "May Fair Flats",
    location: "Denver, CO",
    year: "2014",
    scope: "Demolition, Recycling",
    type: ["Residential", "Recycling"],
    desc: "Demolition, transportation, recycling, and disposal of a five-story apartment structure of approximately 6,534 sq ft at 5785 East 8th Ave in Denver. Recycling was incorporated as part of the project scope.",
  },
  {
    title: "Blackhawk Hotels",
    location: "Black Hawk, CO",
    year: "2014",
    scope: "Deconstruction, Recycling",
    type: ["Commercial", "Recycling"],
    desc: "Demolition, transportation, disposal, and recycling of a two-story light frame structure and multiple earth-retaining structures in Black Hawk. Heavy track-hoe excavators were used for selective demolition.",
  },
  {
    title: "Sheraton Hotel",
    location: "Denver, CO",
    year: "2010",
    scope: "Deconstruction, Recycling",
    type: ["Commercial", "Hotel", "Recycling"],
    desc: "Demolition of the landmark Sheraton Hotel in Denver — built in 1974, spanning 12 acres with over 615 rooms and once among the eight largest hotels in Denver. A high-profile urban deconstruction and recycling project.",
  },
  {
    title: "Buckingham Mall",
    location: "Aurora, CO",
    year: "2008",
    scope: "Deconstruction, Recycling",
    type: ["Commercial", "Retail", "Recycling"],
    desc: "Demolition of the former Buckingham Mall — a 900,000 sq ft mall built in the early 1970s on a 35-acre site. Once the most populated mall in the area until the early 1990s.",
  },
  {
    title: "Lory Apartments — CSU",
    location: "Fort Collins, CO",
    year: "2012",
    scope: "Demolition",
    type: ["Institutional", "Educational"],
    desc: "Demolition of the former Lory Apartments on the Colorado State University campus — home to approximately 100 students at the time. The site was redeveloped for a significantly larger residential facility.",
  },
  {
    title: "Gove Middle School",
    location: "Denver, CO",
    year: "2012",
    scope: "Deconstruction, Recycling",
    type: ["Government", "Educational", "Recycling"],
    desc: "Demolition of the former Gove Middle School between two major intersections in Denver. Alpine was contracted by National Jewish Hospital to perform the demolition to allow site expansion.",
  },
  {
    title: "Ramada Inn",
    location: "Denver (Greenwood Village), CO",
    year: "2012",
    scope: "Deconstruction, Recycling",
    type: ["Commercial", "Hotel", "Recycling"],
    desc: "Demolition of the former Ramada Inn within the Denver Tech Center — a hotel that had been closed for three years. Alpine coordinated the work with surrounding neighbors and worked alongside city agencies.",
  },
  {
    title: "St. Anne's",
    location: "Denver, CO",
    year: "2013",
    scope: "Demolition, Recycling, Abatement",
    type: ["Institutional", "Abatement", "Recycling"],
    desc: "Demolition, transportation, recycling, abatement, and disposal of a two-story convent building of approximately 5,800 sq ft and a maintenance building of approximately 2,300 sq ft at 2701 South York Street.",
  },
  {
    title: "Office Depot",
    location: "Denver, CO",
    year: "2013",
    scope: "Demolition, Recycling, Abatement",
    type: ["Commercial", "Retail", "Abatement"],
    desc: "Demolition, transportation, recycling, and disposal of a single-story retail structure at 1350 16th Street in Denver. Project included asbestos abatement of approximately 1,500 sq ft of materials.",
  },
  {
    title: "JC Penney's — Foothills Mall",
    location: "Fort Collins, CO",
    year: "2011",
    scope: "Demolition",
    type: ["Commercial", "Retail"],
    desc: "Structural demolition of the JC Penney's store within the operational Foothills Mall in Fort Collins. Alpine performed demolition while maintaining mall operations — a constrained, active-site project.",
  },
  {
    title: "Berthoud Bridge",
    location: "Berthoud, CO",
    year: "2012",
    scope: "Demolition",
    type: ["Infrastructure"],
    desc: "Demolition of the former Berthoud Bridge at the I-25 and Berthoud exit using high-reach excavators with hammer attachments. All steel from the bridge was recycled. Work was completed despite significant wind conditions.",
  },
  {
    title: "Applewood Church",
    location: "Lakewood, CO",
    year: "—",
    scope: "Demolition",
    type: ["Institutional"],
    desc: "Demolition of the former Applewood Church structure in Lakewood, Colorado.",
  },
  {
    title: "800 South Hoover Street",
    location: "Longmont, CO",
    year: "—",
    scope: "Demolition",
    type: ["Commercial"],
    desc: "Commercial structure demolition at 800 South Hoover Street in Longmont, Colorado.",
  },
  {
    title: "Vacant Fire Structure — 1833 Emerson",
    location: "Denver, CO",
    year: "—",
    scope: "Demolition",
    type: ["Fire/Disaster Response"],
    desc: "Demolition of a fire-damaged vacant construction site structure at 1833 Emerson Street in Denver, Colorado.",
  },
  {
    title: "Seasons Pool",
    location: "Denver, CO",
    year: "—",
    scope: "Demolition",
    type: ["Commercial"],
    desc: "Pool structure demolition in Denver, Colorado.",
  },
  {
    title: "Country Dinner Playhouse",
    location: "Longmont, CO",
    year: "—",
    scope: "Demolition",
    type: ["Commercial"],
    desc: "Demolition of the former Country Dinner Playhouse structure in Longmont, Colorado.",
  },
  {
    title: "Office Depot — Metro",
    location: "Denver Metro, CO",
    year: "—",
    scope: "Demolition, Recycling, Abatement",
    type: ["Commercial", "Retail"],
    desc: "Commercial retail demolition with recycling and abatement scope in the Denver metro area.",
  },
];

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#17262B] text-white py-24">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <p className="text-[#76B852] text-xs font-bold tracking-[0.2em] uppercase mb-5">
            Project Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Work That Speaks for Itself.
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Commercial, industrial, institutional, and government demolition projects throughout
            Colorado. Every project listed here reflects Alpine's documented scope and completed work.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-white py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">
            Notable Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B] mb-10">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <div key={p.title} className="bg-[#F4F2ED] rounded-lg border border-[#DEE3DC] overflow-hidden flex flex-col">
                <div className="bg-[#17262B] aspect-[16/9] flex items-center justify-center">
                  <Building2 size={40} className="text-white/20" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-[#17262B] text-lg">{p.title}</h3>
                      <p className="text-gray-400 text-xs mt-0.5">{p.location} · {p.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.type.map((t) => (
                      <span key={t} className="text-xs font-semibold bg-white text-[#165B38] border border-[#DEE3DC] px-3 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full project list */}
      <section className="bg-[#F4F2ED] py-20">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
          <p className="text-[#165B38] text-xs font-bold uppercase tracking-widest mb-3">
            Full Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17262B] mb-10">
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((p) => (
              <div key={p.title} className="bg-white rounded-lg border border-[#DEE3DC] p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-bold text-[#17262B] text-base">{p.title}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{p.location}{p.year !== "—" ? ` · ${p.year}` : ""}</p>
                  </div>
                  <p className="text-[#165B38] text-xs font-semibold whitespace-nowrap shrink-0">{p.scope}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.type.map((t) => (
                    <span key={t} className="text-xs font-semibold bg-[#F4F2ED] text-[#165B38] border border-[#DEE3DC] px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#17262B] text-white py-16">
        <div className="max-w-[1260px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Discuss a project with Alpine.
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Share site details and scope — Alpine will route your request to the right team.
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
