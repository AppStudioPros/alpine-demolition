"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    type: "youtube" as const,
    src: "https://www.youtube.com/embed/PJcIkoSwm6c",
    title: "Demolition Crew Removes Burnt Denver Construction Site — 9News",
    caption: "9News coverage: Alpine clears a burnt residential and commercial building in Denver, CO.",
  },
  {
    type: "drive" as const,
    src: "https://drive.google.com/file/d/1EJhRrGdZLBMt-xkfYSQ-x5cvYc3uv53T/preview",
    title: "Alpine Demolition Project Footage",
    caption: "On-site project footage from Alpine Demolition's Denver fire response work.",
  },
];

export default function AlpineVideoCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative">
      {/* Video frame */}
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-2xl">
        <iframe
          key={current}
          src={videos[current].src}
          title={videos[current].title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Caption */}
      <p className="text-center text-white/60 text-sm mt-4">{videos[current].caption}</p>

      {/* Navigation arrows */}
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

        {/* Dots */}
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
