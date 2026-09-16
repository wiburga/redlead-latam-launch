import { createFileRoute } from "@tanstack/react-router";
import { Quote, Trophy } from "lucide-react";

import { SectionHeading } from "@/components/brand-elements";
import { JoinCTA } from "@/components/join-cta";
import { historias } from "@/lib/historias";

export const Route = createFileRoute("/historias")({
  head: () => ({
    meta: [
      { title: "Historias de la comunidad | REDLEAD" },
      { name: "description", content: "Testimonios de jóvenes latinoamericanos que avanzaron en su carrera con REDLEAD." },
      { property: "og:title", content: "Historias REDLEAD" },
      { property: "og:description", content: "Becas, pasantías y empleos logrados por la comunidad REDLEAD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HistoriasPage,
});

function HistoriasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="eyebrow">Comunidad</span>
          <h1>Historias</h1>
          <p>Jóvenes de Latinoamérica que dieron su próximo gran paso junto a REDLEAD.</p>
        </div>
      </section>

      <section className="section best-section">
        <div className="site-container">
          <SectionHeading eyebrow="Testimonios" lead="Los siguientes testimonios son contenido de ejemplo y serán reemplazados por historias reales de la comunidad.">
            Lo que cuentan nuestros participantes
          </SectionHeading>
          <div className="best-grid">
            {historias.map((historia, index) => (
              <article className="story-card" key={historia.id}>
                {historia.placeholder && <span className="placeholder-tag">Ejemplo</span>}
                <div className="story-card-head">
                  <span className={`story-avatar number-dot-${(index % 3) + 1}`}>{historia.initials}</span>
                  <div>
                    <strong>{historia.name}</strong>
                    <small>{historia.country}</small>
                  </div>
                </div>
                <p className="story-quote"><Quote aria-hidden="true" />{historia.quote}</p>
                <p className="story-result"><Trophy aria-hidden="true" />{historia.achievement}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <JoinCTA eyebrow="Tu historia sigue" title="La próxima historia puede ser la tuya" showSocials={false} />
    </>
  );
}
