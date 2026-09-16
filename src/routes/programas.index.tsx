import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { IconBadge, SectionHeading } from "@/components/brand-elements";
import { JoinCTA } from "@/components/join-cta";
import { programas } from "@/lib/programas";

export const Route = createFileRoute("/programas/")({
  head: () => ({
    meta: [
      { title: "Programas de formación | REDLEAD" },
      { name: "description", content: "Conoce los seis pilares de REDLEAD: liderazgo, empleabilidad, marca personal, IA, datos y oportunidades internacionales." },
      { property: "og:title", content: "Programas REDLEAD" },
      { property: "og:description", content: "Seis pilares de formación gratuita y virtual para jóvenes de Latinoamérica." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramasPage,
});

function ProgramasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">Formación REDLEAD</span>
          <h1>Programas</h1>
          <p>Seis pilares complementarios para que desarrolles liderazgo, empleabilidad y acceso a oportunidades internacionales.</p>
        </div>
      </section>

      <section className="section best-section">
        <div className="site-container">
          <SectionHeading eyebrow="Nuestros pilares">Elige por dónde empezar</SectionHeading>
          <div className="best-grid">
            {programas.map((programa) => (
              <Link
                key={programa.slug}
                to="/programas/$slug"
                params={{ slug: programa.slug }}
                className={`best-card best-card-${programa.tone} program-card`}
              >
                <IconBadge icon={programa.icon} tone={programa.tone} />
                <h3>{programa.title}</h3>
                <p>{programa.summary}</p>
                <span className="card-link">Ver programa <ArrowRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JoinCTA eyebrow="Inscripciones abiertas" title="Forma parte de la próxima generación REDLEAD" showSocials={false} />
    </>
  );
}
