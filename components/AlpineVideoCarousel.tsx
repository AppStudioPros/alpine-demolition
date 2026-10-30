"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    type: "drive" as const,
    src: "https://drive.google.com/file/d/1EJhRrGdZLBMt-xkfYSQ-x5cvYc3uv53T/preview",
    poster: "/images/worlds-greatest-thumbnail.png",
    title: "Alpine Demolition — Featured on World's Greatest TV Show",
    eyebrow: "FEATURED ON WORLD'S GREATEST TV SHOW",
    heading: "Alpine on World's Greatest",
    description: "Alpine Demolition was selected and featured on World's Greatest TV Show — recognizing Colorado's top demolition company for excellence, safety, and decades of service.",
    caption: "World's Greatest TV Show feature — Alpine Demolition, Colorado.",
  },
  {
    type: "youtube" as const,
    src: "https://www.youtube.com/embed/PJcIkoSwm6c",
    poster: undefined,
    title: "Demolition Crew Removes Burnt Denver Construction Site — 9News",
    eyebrow: "AS SEEN ON 9NEWS",
    heading: "Alpine in the Field",
    description: "Fire damage, full removal. Watch Alpine's crew clear a burnt Denver construction site.",
    caption: "9News coverage: Alpine clears a burnt residential and commercial building in Denver, CO.",
  },
];

export default function AlpineVideoCarousel() {
  const [current, setCurrent] = useState(0);
  const video = videos[current];

  return (
    <div>
      {/* Dynamic header */}
      <div className="text-center mb-10 transition-all duration-300">
        <p className="text-xs font-bold tracking-widest text-[#76B852] uppercase mb-2">{video.eyebrow}</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{video.heading}</h2>
        <p className="text-white/60 mt-3 max-w-xl mx-auto">{video.description}</p>
      </div>

      {/* Video frame */}
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-2xl relative">
        {video.type === "drive" ? (
          <iframe
            key={`drive-${current}`}
            src={video.src}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <iframe
            key={`yt-${current}`}
            src={video.src}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>

      {/* Caption */}
      <p className="text-center text-white/60 text-sm mt-4">{video.caption}</p>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={() => setCurrent(0)}
          disabled={current === 0}
          aria-label="Previous video"
          className={`flex items-center gap-2 px-5 py-2 rounded font-semibold text-sm transition-all duration-200 ${
            current === 0
              ? "opacity-30 cursor-not-allowed text-white/40 border border-white/20"
              : "text-white border border-white/40 hover:border-white hover:bg-white/10"
          }`}
        >
          <ChevronLeft size={18} /> Previous
        </button>

        <div className="flex gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to video ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === current ? "bg-[#76B852]" : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrent(1)}
          disabled={current === 1}
          aria-label="Next video"
          className={`flex items-center gap-2 px-5 py-2 rounded font-semibold text-sm transition-all duration-200 ${
            current === 1
              ? "opacity-30 cursor-not-allowed text-white/40 border border-white/20"
              : "text-white border border-white/40 hover:border-white hover:bg-white/10"
          }`}
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
