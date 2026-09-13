import { useEffect, useRef, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export function SectionHeading({ eyebrow, children, lead }: { eyebrow?: string; children: React.ReactNode; lead?: string }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{children}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

export function IconBadge({ icon: Icon, tone = "teal" }: { icon: LucideIcon; tone?: "red" | "teal" | "gold" }) {
  return (
    <span className={`icon-badge icon-badge-${tone}`}>
      <Icon aria-hidden="true" />
    </span>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}>{children}</div>;
}