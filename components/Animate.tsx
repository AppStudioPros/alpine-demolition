"use client";
import { useEffect, useRef, ReactNode, ElementType } from "react";

interface AnimateProps {
  children: ReactNode;
  type?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
  stagger?: boolean;      // applies stagger-grid — children animate in sequence
  className?: string;
  as?: ElementType;
  threshold?: number;
}

export default function Animate({
  children,
  type = "fade-up",
  delay = 0,
  stagger = false,
  className = "",
  as: Tag = "div",
  threshold = 0.12,
}: AnimateProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("in"); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const base = stagger ? `stagger-grid ${className}` : `anim-${type}${delay ? ` delay-${delay}` : ""} ${className}`;

  // @ts-expect-error — dynamic tag with ref
  return <Tag ref={ref} className={base}>{children}</Tag>;
}
