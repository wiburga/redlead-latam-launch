import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, HeartHandshake, LockKeyhole, Sprout, Users } from "lucide-react";

import { IconBadge, SectionHeading } from "@/components/brand-elements";
import { JoinCTA } from "@/components/join-cta";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/nosotros/mision-vision")({
  head: () => ({
    meta: [
      { title: "Misión y Visión | REDLEAD" },
      { name: "description", content: "Conoce la misión, visión y valores que guían a REDLEAD." },
      { property: "og:title", content: "Misión y Visión | REDLEAD" },
      { property: "og:description", content: "La misión, visión y valores de REDLEAD para ampliar oportunidades en Latinoamérica." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MissionVisionPage,
});

const values = [
  [Users, "Comunidad", "Avanzamos acompañados, compartiendo aprendizajes y oportunidades.", "red"],
  [HeartHandshake, "Acceso equitativo", "Acercamos información útil sin que el país de origen sea una barrera.", "teal"],
  [Sprout, "Crecimiento", "Convertimos cada experiencia en capacidades para el siguiente paso.", "gold"],
  [LockKeyhole, "Transparencia", "Construimos confianza con procesos claros y comunicación responsable.", "red"],
] as const;

function MissionVisionPage() {
  return (
    <>
      <section className="page-hero mission-vision-hero">
        <div className="site-container">
          <span className="eyebrow">Quiénes somos</span>
          <h1>Misión y Visión</h1>
          <p>Una dirección compartida para conectar el talento joven de Latinoamérica con nuevas posibilidades.</p>
        </div>
      </section>

      <section className="section mission-vision-section">
        <div className="site-container mission-vision-grid">
          <article className="mission-vision-card mission-card">
            <IconBadge icon={HeartHandshake} tone="red" />
            <span className="eyebrow">Nuestra misión</span>
            <h2>Conectar para que el talento avance</h2>
            <p>Conectar a jóvenes latinoamericanos con becas, mentorías y oportunidades de desarrollo, sin importar en qué país estén, para que el talento nunca dependa del acceso a la información.</p>
          </article>
          <article className="mission-vision-card vision-card">
            <IconBadge icon={Eye} tone="teal" />
            <span className="eyebrow">Nuestra visión</span>
            <h2>Un futuro con caminos más claros</h2>
            <p>Ser la red líder de oportunidades para jóvenes en América Latina, construyendo un futuro donde cada joven con ambición tenga un camino claro para alcanzar sus metas.</p>
          </article>
        </div>
      </section>

      <section className="section values-section mission-values-section">
        <div className="site-container">
          <SectionHeading eyebrow="Lo que nos guía" lead="Estos principios orientan cómo diseñamos experiencias, compartimos información y trabajamos en equipo.">Valores que se convierten en acción</SectionHeading>
          <div className="values-grid mission-values-grid">
            {values.map(([Icon, title, description, tone], index) => (
              <article key={title} className="mission-value-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <IconBadge icon={Icon} tone={tone} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <Button asChild variant="hero" size="lg"><Link to="/contacto" hash="inscripcion">Forma parte de REDLEAD <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <JoinCTA eyebrow="Una visión compartida" title="Las oportunidades crecen cuando las hacemos más visibles y accesibles" showSocials={false} />
    </>
  );
}
