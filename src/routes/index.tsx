import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  BriefcaseBusiness,
  Check,
  Compass,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Lightbulb,
  MessageCircleMore,
  Rocket,
  Sparkles,
  Target,
  UserRoundSearch,
  Users,
} from "lucide-react";

import { IconBadge, SectionHeading } from "@/components/brand-elements";
import { SocialLinks } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/redlead-hero.jpg";
import communityImage from "@/assets/redlead-community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REDLEAD | Liderazgo y empleabilidad juvenil" },
      { name: "description", content: "Programa gratuito y virtual de liderazgo, empleabilidad y desarrollo para jóvenes de Latinoamérica." },
      { property: "og:title", content: "REDLEAD | Líderes que potencian líderes" },
      { property: "og:description", content: "Prepárate para el empleo que quieres o la beca que puede cambiar tu futuro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tools = [
  [Lightbulb, "Desarrolla tu liderazgo", "red"],
  [BriefcaseBusiness, "Mejora tu empleabilidad", "teal"],
  [GraduationCap, "Prepárate para becas internacionales", "gold"],
  [MessageCircleMore, "Conecta con ponentes especializados", "red"],
  [Bot, "Potencia tus habilidades con IA", "teal"],
] as const;

const achievements = [
  [Compass, "Definirás tu propósito y tu camino profesional"],
  [UserRoundSearch, "Crearás un CV y LinkedIn que realmente destaquen"],
  [Sparkles, "Aprenderás a brillar en entrevistas y procesos de selección"],
  [Rocket, "Elaborarás cartas de motivación que abran puertas"],
  [Users, "Formarás parte de una comunidad latinoamericana que te inspira"],
] as const;

function Index() {
  return (
    <>
      <section className="home-hero">
        <img src={heroImage} alt="Dos jóvenes latinoamericanos con mochilas mirando hacia su futuro" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="site-container hero-content">
          <span className="hero-kicker">Tu futuro empieza hoy</span>
          <h1>¿Listo para tu próximo gran paso?</h1>
          <p>Prepárate para el empleo que quieres o la beca que puede cambiar tu futuro.</p>
          <Button asChild variant="warm" size="lg">
            <Link to="/contacto" hash="inscripcion">Únete a REDLEAD <Rocket aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>

      <section className="section tools-section">
        <div className="site-container">
          <SectionHeading eyebrow="Herramientas para avanzar">
            La universidad te da conocimientos, <span className="text-primary">REDLEAD</span> te da las herramientas para destacar en el mundo real
          </SectionHeading>
          <div className="tools-grid">
            {tools.map(([Icon, label, tone]) => (
              <article className="tool-item" key={label}>
                <IconBadge icon={Icon} tone={tone} />
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievement-section">
        <div className="site-container split-layout">
          <div className="image-frame community-image">
            <img src={communityImage} alt="Jóvenes latinoamericanos colaborando con laptops y en videollamada" width={1280} height={960} loading="lazy" />
            <span className="image-note"><Globe2 /> 100% Latinoamérica</span>
          </div>
          <div>
            <SectionHeading eyebrow="Resultados reales">¿Qué lograrás con REDLEAD?</SectionHeading>
            <div className="achievement-list">
              {achievements.map(([Icon, label], index) => (
                <div className="achievement-row" key={label}>
                  <span className={`number-dot number-dot-${(index % 3) + 1}`}>{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section best-section">
        <div className="site-container">
          <SectionHeading eyebrow="Sin barreras">Lo mejor de REDLEAD</SectionHeading>
          <div className="best-grid">
            {[
              [Laptop, "100% virtual", "Desde donde estés", "teal"],
              [Globe2, "Para jóvenes de Latinoamérica", "Sin importar tu país", "red"],
              [HeartHandshake, "Completamente gratuito", "Sin costo de inscripción ni participación", "gold"],
            ].map(([Icon, title, text, tone]) => (
              <article className={`best-card best-card-${tone}`} key={title as string}>
                <IconBadge icon={Icon as typeof Laptop} tone={tone as "red" | "teal" | "gold"} />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="site-container">
          <SectionHeading eyebrow="Una experiencia transformadora">REDLEAD es más que un programa, es una experiencia que te impulsa a</SectionHeading>
          <div className="orbit-layout">
            <article className="orbit-point orbit-red"><IconBadge icon={Lightbulb} tone="red" /><h3>Crecer como líder</h3></article>
            <div className="orbit-center"><Target aria-hidden="true" /><span>Tu potencial<br />en acción</span></div>
            <article className="orbit-point orbit-gold"><IconBadge icon={Rocket} tone="gold" /><h3>Ampliar tus oportunidades</h3></article>
            <article className="orbit-point orbit-teal"><IconBadge icon={HeartHandshake} tone="teal" /><h3>Generar impacto en tu comunidad</h3></article>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="site-container final-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light">Da el siguiente paso</span>
            <h2>No esperes a que las oportunidades lleguen, prepárate para conquistarlas</h2>
          </div>
          <div className="cta-actions">
            <Button asChild variant="warm" size="lg"><Link to="/contacto" hash="inscripcion">Únete a REDLEAD <Check /></Link></Button>
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}
