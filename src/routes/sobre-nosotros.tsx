import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BrainCircuit, BriefcaseBusiness, ChartNoAxesCombined, Eye, Flag, HeartHandshake, Lightbulb, Sparkles, Target } from "lucide-react";

import { IconBadge, Reveal, SectionHeading } from "@/components/brand-elements";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/redlead-community.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre Nosotros | REDLEAD" },
      { name: "description", content: "Conoce REDLEAD, su origen en KECTIL 2026, misión y compromiso con la juventud latinoamericana." },
      { property: "og:title", content: "Sobre REDLEAD" },
      { property: "og:description", content: "Una red latinoamericana que fortalece liderazgo, empleabilidad y desarrollo profesional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const missionSkills = [
  [Lightbulb, "Liderazgo"],
  [BriefcaseBusiness, "Empleabilidad"],
  [BrainCircuit, "Inteligencia artificial"],
  [ChartNoAxesCombined, "Análisis de datos"],
  [Sparkles, "Marca personal"],
  [Target, "Desarrollo profesional"],
] as const;

function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="site-container page-hero-grid">
          <div>
            <span className="eyebrow">Quiénes somos</span>
            <h1>Una red para impulsar el talento joven de Latinoamérica</h1>
            <p>REDLEAD significa Red Latinoamericana de Liderazgo, Empleabilidad, Acceso y Desarrollo.</p>
          </div>
          <div className="image-frame about-image">
            <img src={communityImage} alt="Comunidad REDLEAD de jóvenes colaborando" width={1280} height={960} />
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container story-grid">
          <div className="year-mark"><span>2026</span><p>El año en que nuestra red comenzó</p></div>
          <div>
            <SectionHeading eyebrow="Nuestro origen">Una iniciativa que nace para multiplicar oportunidades</SectionHeading>
            <p className="large-copy">REDLEAD nació como <strong>Community Project del programa internacional KECTIL 2026</strong>, con una convicción sencilla: cuando una persona joven fortalece sus capacidades, también puede transformar su comunidad.</p>
            <p className="large-copy">Somos un programa gratuito y 100% virtual que conecta a jóvenes de 17 a 29 años con herramientas, conocimiento especializado y una comunidad regional que los impulsa a avanzar.</p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="site-container mission-grid">
          <div className="mission-copy">
            <SectionHeading eyebrow="Nuestra misión">Fortalecer competencias para un futuro con más posibilidades</SectionHeading>
            <p>Desarrollamos capacidades prácticas que complementan la formación académica y ayudan a cada participante a convertir su potencial en acción.</p>
          </div>
          <div className="skill-cloud">
            {missionSkills.map(([Icon, label], index) => (
              <div className="skill-pill" key={label}>
                <IconBadge icon={Icon} tone={index % 3 === 0 ? "red" : index % 3 === 1 ? "teal" : "gold"} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-vision-section">
        <div className="site-container mission-vision-grid">
          <Reveal>
            <article className="mission-vision-card mission-card">
              <div className="mission-vision-header">
                <IconBadge icon={Flag} tone="red" />
                <h3>Misión</h3>
              </div>
              <p>Fortalecer las competencias de liderazgo, empleabilidad y desarrollo profesional de jóvenes latinoamericanos de 17 a 29 años, brindándoles herramientas prácticas, mentoría y una comunidad regional que impulse su acceso a oportunidades de empleo y becas internacionales.</p>
            </article>
          </Reveal>

          <Reveal>
            <article className="mission-vision-card vision-card">
              <div className="mission-vision-header">
                <IconBadge icon={Eye} tone="teal" />
                <h3>Visión</h3>
              </div>
              <p>Ser la red juvenil de referencia en Latinoamérica para el desarrollo de liderazgo y empleabilidad, reconocida por transformar el potencial de miles de jóvenes en impacto real dentro de sus comunidades y países.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section objective-section">
        <div className="site-container objective-inner">
          <Target aria-hidden="true" />
          <div>
            <span className="eyebrow eyebrow-light">Nuestro objetivo</span>
            <h2>Preparar a los participantes para acceder a oportunidades de empleo y becas internacionales</h2>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="site-container">
          <SectionHeading eyebrow="Nuestros pilares" lead="Tres ideas guían cada experiencia, encuentro y herramienta que compartimos.">Lo que nos mueve</SectionHeading>
          <div className="values-grid">
            <article><span>01</span><IconBadge icon={Lightbulb} tone="red" /><h3>Liderazgo</h3><p>Reconocer tu voz, movilizar ideas y liderar con propósito.</p></article>
            <article><span>02</span><IconBadge icon={Sparkles} tone="gold" /><h3>Oportunidades</h3><p>Prepararte para identificar, crear y conquistar nuevas posibilidades.</p></article>
            <article><span>03</span><IconBadge icon={HeartHandshake} tone="teal" /><h3>Impacto comunitario</h3><p>Convertir tu crecimiento en una fuerza positiva para los demás.</p></article>
          </div>
          <div className="center-action"><Button asChild variant="hero" size="lg"><Link to="/contacto" hash="inscripcion">Quiero ser parte <ArrowRight /></Link></Button></div>
        </div>
      </section>
    </>
  );
}