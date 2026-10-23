"use client";
import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-animate]");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay || "0";
            setTimeout(() => el.classList.add("in"), parseInt(delay));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
