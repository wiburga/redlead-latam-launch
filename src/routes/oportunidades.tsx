import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarClock, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/brand-elements";
import { JoinCTA } from "@/components/join-cta";
import { formatDeadline, oportunidades } from "@/lib/oportunidades";

export const Route = createFileRoute("/oportunidades")({
  head: () => ({
    meta: [
      { title: "Convocatorias y oportunidades | REDLEAD" },
      { name: "description", content: "Becas, empleos y pasantías vigentes para jóvenes de Latinoamérica seleccionadas por REDLEAD." },
      { property: "og:title", content: "Oportunidades REDLEAD" },
      { property: "og:description", content: "Convocatorias de becas, empleos y pasantías para jóvenes latinoamericanos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OportunidadesPage,
});

function OportunidadesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">Convocatorias</span>
          <h1>Oportunidades</h1>
          <p>Becas, empleos y pasantías seleccionadas para jóvenes de Latinoamérica. Actualizamos este listado constantemente.</p>
        </div>
      </section>

      <section className="section best-section">
        <div className="site-container">
          <SectionHeading eyebrow="Vigentes">Postula antes de que cierren</SectionHeading>
          <div className="opportunity-list">
            {oportunidades.map((item) => (
              <article className="opportunity-card" key={item.id}>
                <div className="opportunity-main">
                  <span className={`opportunity-tag tag-${item.type.toLowerCase().normalize("NFD").replace(/[^a-z]/g, "")}`}>{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="opportunity-meta">
                    <span><MapPin aria-hidden="true" />{item.region}</span>
                    <span><CalendarClock aria-hidden="true" />Cierra el {formatDeadline(item.deadline)}</span>
                  </div>
                </div>
                <a className="opportunity-link" href={item.url} target="_blank" rel="noreferrer">
                  Ver más <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <JoinCTA eyebrow="No postules solo" title="Prepara tu postulación con el acompañamiento de REDLEAD" showSocials={false} />
    </>
  );
}
