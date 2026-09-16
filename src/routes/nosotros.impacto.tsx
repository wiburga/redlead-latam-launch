import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Handshake, Lightbulb, Users } from "lucide-react";

import { IconBadge, SectionHeading } from "@/components/brand-elements";
import { JoinCTA } from "@/components/join-cta";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/nosotros/impacto")({
  head: () => ({
    meta: [
      { title: "Nuestro Impacto | REDLEAD" },
      { name: "description", content: "Conoce cómo REDLEAD organiza su trabajo para ampliar oportunidades en Latinoamérica." },
      { property: "og:title", content: "Nuestro Impacto | REDLEAD" },
      { property: "og:description", content: "Una red joven, regional y colaborativa que trabaja para acercar oportunidades." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ImpactPage,
});

const impactStats = [
  // TODO: reemplazar con datos reales
  ["+X", "jóvenes alcanzados", Users, "red"],
  // TODO: reemplazar con datos reales
  ["+X", "países en la región", Globe2, "teal"],
  // TODO: reemplazar con datos reales
  ["+X", "oportunidades compartidas", Lightbulb, "gold"],
  // TODO: reemplazar con datos reales
  ["+X", "mentorías realizadas", Handshake, "red"],
] as const;

const workAreas = [
  "Relaciones Internacionales y Alianzas",
  "Gestión de Investigación",
  "Organización, Gestión y Moderación de Talleres",
  "Talento Humano",
  "Diseño, Redes Sociales y Difusión",
  "Formularios, Datos y Análisis",
  "Desarrollo y Mantenimiento de Página Web",
  "Gestor de Informes y Tareas",
];

function ImpactPage() {
  return (
    <>
      <section className="page-hero impact-hero">
        <div className="site-container">
          <span className="eyebrow">Más que cifras</span>
          <h1>Nuestro Impacto</h1>
          <p>Medimos nuestro avance por las conexiones que construimos y por las posibilidades que acercamos a jóvenes de toda Latinoamérica.</p>
        </div>
      </section>

      <section className="section impact-stats-section">
        <div className="site-container">
          <SectionHeading eyebrow="En construcción" lead="Estas cifras son placeholders de lanzamiento y se actualizarán cuando contemos con mediciones consolidadas.">Una red que empieza a tomar forma</SectionHeading>
          <div className="impact-stats-grid">
            {impactStats.map(([value, label, Icon, tone]) => (
              <article className={`impact-stat-card impact-stat-${tone}`} key={label}>
                <IconBadge icon={Icon} tone={tone} />
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cohort-section">
        <div className="site-container cohort-grid">
          <div>
            <span className="eyebrow">Nuestra Cohorte 2026</span>
            <h2>El impacto también se organiza detrás de escena</h2>
          </div>
          <div className="cohort-copy">
            <p>REDLEAD trabaja con un equipo organizado en áreas que combinan talento, criterio y colaboración. Desde distintos países de Latinoamérica, la Cohorte I-2026 construye una red capaz de investigar, diseñar, acompañar y comunicar mejores oportunidades.</p>
            <div className="work-area-list">
              {workAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section impact-next-section">
        <div className="site-container impact-next-inner">
          <div>
            <SectionHeading eyebrow="Seguimos creciendo">Cada conexión abre la puerta a la siguiente</SectionHeading>
            <p>Queremos construir una forma responsable de reconocer lo que funciona, escuchar a nuestra comunidad y mejorar continuamente.</p>
          </div>
          <Button asChild variant="hero" size="lg"><Link to="/contacto" hash="inscripcion">Conecta con REDLEAD <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>

      <JoinCTA eyebrow="Impacto compartido" title="Ayúdanos a acercar más oportunidades a la región" showSocials={false} />
    </>
  );
}
