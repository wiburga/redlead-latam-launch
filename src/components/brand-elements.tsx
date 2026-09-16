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