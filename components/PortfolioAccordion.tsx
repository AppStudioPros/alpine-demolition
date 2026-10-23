"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin, Calendar, Layers } from "lucide-react";

const projects = [
  {
    title: "990 Bannock",
    location: "Denver, CO",
    year: "2019",
    scope: "Structural Demolition",
    image: "/images/portfolio/990-bannock.jpg",
    desc: "Alpine was hired to perform the demolition, transportation, and disposal of the former Denver Health Administrative building at 990 Bannock — a five-story concrete and steel structure encompassing over 100,000 sq ft in downtown Denver.",
    tags: ["Structural Demolition", "Urban Site", "Commercial"],
  },
  {
    title: "Kodak Buildings",
    location: "Windsor, CO",
    year: "2014",
    scope: "Demolition, Recycling",
    image: "/images/portfolio/kodak-buildings.jpg",
    desc: "Demolition of the former Kodak plant in Windsor — once one of Kodak's largest film production facilities including X-Ray machine production. The site encompassed over 1,000,000 sq ft of building scope with extensive material recovery and recycling.",
    tags: ["Industrial", "Recycling", "Large Scope"],
  },
  {
    title: "Buckley Annex Lowry",
    location: "Denver/Aurora, CO",
    year: "2014",
    scope: "Demolition, Recycling, Asbestos Abatement",
    image: "/images/portfolio/buckley-annex.jpg",
    desc: "Demolition, transportation, recycling, disposal, and asbestos abatement of three free-standing retired government structures. Project scope expanded and Alpine maintained as the primary demolition contractor.",
    tags: ["Government", "Abatement", "Recycling"],
  },
  {
    title: "Denver University — Aspen Hall",
    location: "Denver, CO",
    year: "2018",
    scope: "Demolition",
    image: "/images/portfolio/denver-university.jpg",
    desc: "Demolition of the former Aspen Hall educational building at Denver University, located at 2280 Vine Street. The structure was approximately 39,000 sq ft including basement area.",
    tags: ["Institutional", "Educational"],
  },
  {
    title: "May Fair Flats",
    location: "Denver, CO",
    year: "2014",
    scope: "Demolition, Recycling",
    image: "/images/portfolio/may-fair-flats.jpg",
    desc: "Demolition, transportation, recycling, and disposal of a five-story apartment structure of approximately 6,534 sq ft at 5785 East 8th Ave in Denver. Recycling was incorporated throughout the project scope.",
    tags: ["Residential", "Multi-Story", "Recycling"],
  },
  {
    title: "Blackhawk Hotels",
    location: "Black Hawk, CO",
    year: "2014",
    scope: "Deconstruction, Recycling",
    image: "/images/portfolio/blackhawk-hotels.jpg",
    desc: "Demolition, transportation, disposal, and recycling of a two-story light frame structure and multiple earth-retaining structures. Heavy track-hoe excavators with specialized attachments were used for selective demolition.",
    tags: ["Commercial", "Recycling"],
  },
  {
    title: "Sheraton Hotel",
    location: "Denver, CO",
    year: "2010",
    scope: "Deconstruction, Recycling",
    image: "/images/portfolio/sheraton-hotel.jpg",
    desc: "Demolition of the landmark Sheraton Hotel in Denver — built in 1974, spanning 12 acres with over 615 rooms. Once among the eight largest hotels in Denver, this was a high-profile urban deconstruction and recycling project.",
    tags: ["Hotel", "Commercial", "Recycling", "Large Scope"],
  },
  {
    title: "Buckingham Mall",
    location: "Aurora, CO",
    year: "2008",
    scope: "Deconstruction, Recycling",
    image: "/images/portfolio/buckingham-mall.jpg",
    desc: "Demolition of the former Buckingham Mall — a 900,000 sq ft mall built in the early 1970s on a 35-acre site, once the most populated mall in the area until the early 1990s.",
    tags: ["Commercial", "Retail", "Recycling", "Large Scope"],
  },
  {
    title: "Lory Apartments — CSU",
    location: "Fort Collins, CO",
    year: "2012",
    scope: "Demolition",
    image: "/images/portfolio/lory-apartments.jpg",
    desc: "Demolition of the former Lory Apartments on the Colorado State University campus — home to approximately 100 students. The site was redeveloped for a larger modern residential facility.",
    tags: ["Institutional", "Educational", "Residential"],
  },
  {
    title: "Gove Middle School",
    location: "Denver, CO",
    year: "2012",
    scope: "Deconstruction, Recycling",
    image: "/images/portfolio/gove-middle-school.jpg",
    desc: "Demolition of the former Gove Middle School between two major intersections in Denver. Alpine was contracted by National Jewish Hospital to perform the demolition for site expansion into a parking area.",
    tags: ["Government", "Educational", "Recycling"],
  },
  {
    title: "Ramada Inn",
    location: "Denver Tech Center, CO",
    year: "2012",
    scope: "Deconstruction, Recycling",
    image: "/images/portfolio/ramada-inn.jpg",
    desc: "Demolition of the former Ramada Inn within the Denver Tech Center — a hotel that had been closed for three years. Alpine coordinated closely with surrounding neighbors and city agencies throughout the project.",
    tags: ["Hotel", "Commercial", "Recycling"],
  },
  {
    title: "St. Anne's",
    location: "Denver, CO",
    year: "2013",
    scope: "Demolition, Recycling, Abatement",
    image: "/images/portfolio/st-annes.jpg",
    desc: "Demolition, transportation, recycling, abatement, and disposal of a two-story convent building (~5,800 sq ft) and a maintenance building (~2,300 sq ft) at 2701 South York Street.",
    tags: ["Institutional", "Abatement", "Recycling"],
  },
  {
    title: "Office Depot",
    location: "Denver, CO",
    year: "2013",
    scope: "Demolition, Recycling, Abatement",
    image: "/images/portfolio/office-depot.jpg",
    desc: "Demolition, transportation, recycling, and disposal of a single-story retail structure at 1350 16th Street in Denver. Project included asbestos abatement of approximately 1,500 sq ft of materials.",
    tags: ["Commercial", "Retail", "Abatement"],
  },
  {
    title: "JC Penney's — Foothills Mall",
    location: "Fort Collins, CO",
    year: "2011",
    scope: "Demolition",
    image: "/images/portfolio/jc-penneys.jpg",
    desc: "Structural demolition of the JC Penney's store within the still-operational Foothills Mall. Alpine performed the demolition while maintaining active mall operations — a constrained, active-site project.",
    tags: ["Commercial", "Retail", "Active Site"],
  },
  {
    title: "Berthoud Bridge",
    location: "Berthoud, CO",
    year: "2012",
    scope: "Demolition",
    image: "/images/portfolio/berthoud-bridge.jpg",
    desc: "Demolition of the former Berthoud Bridge at the I-25 and Berthoud exit using high-reach excavators with hammer attachments. All steel from the bridge was recycled. Work was completed despite significant wind conditions on site.",
    tags: ["Infrastructure", "Recycling"],
  },
  {
    title: "Applewood Church",
    location: "Lakewood, CO",
    year: "2012",
    scope: "Demolition",
    image: "/images/portfolio/applewood-church.jpg",
    desc: "Demolition of the former Applewood Church structure in Lakewood, Colorado, with material handling and site clearance as part of the project scope.",
    tags: ["Institutional"],
  },
  {
    title: "800 South Hoover Street",
    location: "Longmont, CO",
    year: "—",
    scope: "Demolition",
    image: "/images/portfolio/800-south-hoover.jpg",
    desc: "Commercial structure demolition and site clearance at 800 South Hoover Street in Longmont, Colorado.",
    tags: ["Commercial"],
  },
  {
    title: "Fire Structure — 1833 Emerson",
    location: "Denver, CO",
    year: "—",
    scope: "Demolition",
    image: "/images/portfolio/fire-structure-emerson.jpg",
    desc: "Demolition of a fire-damaged vacant construction site structure at 1833 Emerson Street in Denver — emergency demolition and site stabilization following a fire event.",
    tags: ["Disaster Response", "Emergency"],
  },
  {
    title: "Seasons Pool",
    location: "Denver, CO",
    year: "—",
    scope: "Demolition",
    image: "/images/portfolio/seasons-pool.jpg",
    desc: "Pool structure demolition and concrete removal in Denver, Colorado, with material disposal and site clearance.",
    tags: ["Commercial"],
  },
  {
    title: "Country Dinner Playhouse",
    location: "Longmont, CO",
    year: "—",
    scope: "Demolition",
    image: "/images/portfolio/country-dinner-playhouse.jpg",
    desc: "Demolition of the former Country Dinner Playhouse structure in Longmont, Colorado — a well-known regional entertainment venue.",
    tags: ["Commercial"],
  },
];

export default function PortfolioAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="divide-y divide-[#DEE3DC]">
      {projects.map((p) => {
        const isOpen = open === p.title;
        return (
          <div key={p.title}>
            {/* Collapsed row — hover preloads image before click */}
            <button
              onClick={() => setOpen(isOpen ? null : p.title)}
              onMouseEnter={() => { const img = new window.Image(); img.src = p.image; }}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#F4F2ED] transition-colors duration-150 group"
            >
              <div className="flex items-center gap-4 min-w-0 overflow-hidden">
                <span className="text-[#165B38] font-bold text-sm sm:text-base leading-tight group-hover:text-[#17262B] transition-colors truncate min-w-0">
                  {p.title}
                </span>
                <span className="hidden sm:flex items-center gap-1.5 text-gray-400 text-sm shrink-0">
                  <MapPin size={13} />
                  {p.location}
                </span>
                {p.year !== "—" && (
                  <span className="hidden md:flex items-center gap-1.5 text-gray-400 text-sm shrink-0">
                    <Calendar size={13} />
                    {p.year}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="hidden lg:block text-xs font-semibold text-[#165B38] bg-[#F4F2ED] border border-[#DEE3DC] px-3 py-1 rounded-full whitespace-nowrap">
                  {p.scope}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </div>
            </button>

            {/* Expanded panel */}
            {isOpen && (
              <div className="bg-[#F4F2ED] border-t border-[#DEE3DC] px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px]">
                  {/* Image */}
                  <div className="rounded-lg overflow-hidden border border-[#DEE3DC] aspect-[4/3] relative bg-[#17262B]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Details */}
                  <div>
                    <h3 className="text-xl font-extrabold text-[#17262B] mb-1">{p.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><MapPin size={13}/> {p.location}</span>
                      {p.year !== "—" && <span className="flex items-center gap-1"><Calendar size={13}/> Completed {p.year}</span>}
                      <span className="flex items-center gap-1"><Layers size={13}/> {p.scope}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs font-semibold bg-white text-[#165B38] border border-[#DEE3DC] px-3 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
