"use client";

import { useEffect, useRef } from "react";

export default function FadeSection({ children, id, style }: {
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} className="fade-section" style={style}>
      {children}
    </div>
  );
}
