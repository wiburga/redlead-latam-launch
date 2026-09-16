import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Rocket,
  Users,
} from "lucide-react";

import { IconBadge, SectionHeading } from "@/components/brand-elements";
import { TeamMemberCard } from "@/components/team-member-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import communityImage from "@/assets/redlead-community.jpg";
import { teamAreas } from "@/lib/team";

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

const pillars = [
  [GraduationCap, "Becas", "Encuentra convocatorias y recursos para dar el siguiente paso en tu formación.", "red"],
  [MessageCircle, "Mentorías", "Aprende de personas que ya recorrieron caminos parecidos al tuyo.", "teal"],
  [BriefcaseBusiness, "Oportunidades", "Prepárate para acceder a programas, empleos y experiencias que impulsan tu perfil.", "gold"],
  [HeartHandshake, "Comunidad", "Conecta con jóvenes de Latinoamérica que comparten tus ganas de crecer e impactar.", "red"],
] as const;

const stats = [
  ["+1,000", "jóvenes acompañados"],
  ["15", "países conectados"],
  ["100%", "virtual y accesible"],
  ["4", "rutas para avanzar"],
] as const;

const testimonials = [
  ["“REDLEAD me ayudó a ordenar mis metas y a sentir que una oportunidad internacional también podía ser para mí.”", "Valentina M.", "Participante, Colombia"],
  ["“Encontré herramientas concretas para mejorar mi perfil y una comunidad que me motivó a seguir intentando.”", "Diego R.", "Participante, Perú"],
  ["“La mentoría convirtió mis dudas en un plan de acción que puedo aplicar desde hoy.”", "Camila S.", "Participante, Ecuador"],
] as const;

function Index() {
  return (
    <>
      <section className="home-hero home-hero-redesign">
        <div className="hero-shape hero-shape-one" aria-hidden="true" />
        <div className="hero-shape hero-shape-two" aria-hidden="true" />
        <div className="site-container hero-content hero-layout">
          <div className="hero-copy">
            <span className="hero-kicker">REDLEAD · Comunidad latinoamericana</span>
            <h1>Conectamos a jóvenes latinoamericanos con <span>oportunidades que transforman su futuro</span></h1>
            <p>Becas, mentorías y recursos para que dar el siguiente paso en tu formación y carrera sea más fácil.</p>
            <div className="hero-actions">
              <Button asChild variant="hero" size="lg">
                <Link to="/oportunidades">Explora oportunidades <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
            <div className="hero-trust" aria-label="REDLEAD en Latinoamérica">
              <Globe2 aria-hidden="true" />
              <span>Una comunidad para avanzar, estés donde estés.</span>
            </div>
          </div>
          <div className="hero-placeholder" role="img" aria-label="Espacio reservado para una imagen de jóvenes latinoamericanos">
            <div className="hero-placeholder-inner">
              <Users aria-hidden="true" />
              <span>Imagen de nuestra comunidad</span>
              <small>Próximamente</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-redlead-section" id="que-es-redlead">
        <div className="site-container about-redlead-grid">
          <div className="about-redlead-copy">
            <SectionHeading eyebrow="¿Qué es REDLEAD?" lead="Un punto de encuentro para que más jóvenes latinoamericanos puedan descubrir, preparar y aprovechar nuevas posibilidades.">
              Tu siguiente oportunidad puede empezar con una conexión
            </SectionHeading>
            <p>Somos una comunidad que acerca información, acompañamiento y herramientas prácticas a jóvenes que quieren crecer profesionalmente, estudiar, liderar proyectos o generar impacto en su entorno.</p>
            <Button asChild variant="hero">
              <Link to="/sobre-nosotros">Conoce nuestra misión <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
          <div className="about-redlead-image image-frame">
            <img src={communityImage} alt="Jóvenes latinoamericanos colaborando en una comunidad virtual" width={1280} height={960} loading="lazy" />
            <div className="image-note"><Users aria-hidden="true" /> Crecemos en comunidad</div>
          </div>
        </div>
      </section>

      <section className="section pillars-section" id="oportunidades">
        <div className="site-container">
          <SectionHeading eyebrow="Lo que puedes encontrar" lead="Elige el tipo de impulso que necesitas hoy y construye tu próxima oportunidad con acompañamiento. ">
            Recursos para pasar de la intención a la acción
          </SectionHeading>
          <div className="pillars-grid">
            {pillars.map(([Icon, title, description, tone]) => (
              <article className={`pillar-card pillar-card-${tone}`} key={title}>
                <IconBadge icon={Icon} tone={tone} />
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="pillar-arrow" aria-hidden="true"><ArrowRight /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="site-container">
          <div className="stats-intro">
            <span className="eyebrow eyebrow-light">Una red que crece contigo</span>
            <h2>Cuando una persona avanza, toda la comunidad se mueve.</h2>
          </div>
          <div className="stats-grid">
            {stats.map(([value, label]) => (
              <div className="stat-item" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="stats-note">* Datos de referencia para esta etapa de lanzamiento.</p>
        </div>
      </section>

      <section className="section team-section" id="nuestro-equipo">
        <div className="site-container">
          <SectionHeading eyebrow="Cohorte I-2026" lead="Personas jóvenes de distintos países que hacen posible que REDLEAD conecte, acompañe y crezca.">
            Nuestro equipo
          </SectionHeading>
          <Tabs defaultValue="area-0" className="team-tabs">
            <TabsList className="team-tabs-list" aria-label="Áreas de trabajo de la Cohorte I-2026">
              {teamAreas.map((area, index) => (
                <TabsTrigger key={area.name} value={`area-${index}`} className="team-tab-trigger">
                  {area.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {teamAreas.map((area, index) => (
              <TabsContent key={area.name} value={`area-${index}`} className="team-tab-content">
                <div className="team-area-heading">
                  <div>
                    <span className="eyebrow">Área de trabajo</span>
                    <h3>{area.name}</h3>
                  </div>
                  <span>{area.members.length} integrantes</span>
                </div>
                <div className="team-members-grid">
                  {area.members.map((member, memberIndex) => (
                    <TeamMemberCard key={`${member.name}-${memberIndex}`} member={member} area={area.name} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="site-container">
          <SectionHeading eyebrow="Historias que inspiran" lead="Cada proceso es distinto. Lo importante es no recorrerlo a solas.">
            Voces de nuestra comunidad
          </SectionHeading>
          <div className="testimonials-grid">
            {testimonials.map(([quote, name, role]) => (
              <figure className="testimonial-card" key={name}>
                <div className="testimonial-mark" aria-hidden="true">“</div>
                <blockquote>{quote}</blockquote>
                <figcaption><strong>{name}</strong><span>{role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section next-step-section">
        <div className="site-container next-step-panel">
          <div>
            <span className="eyebrow">Empieza por donde estás</span>
            <h2>Hay una oportunidad esperando a que te prepares para encontrarla.</h2>
            <p>Cuéntanos qué estás buscando y mantente cerca de las próximas convocatorias, mentorías y programas de REDLEAD.</p>
          </div>
          <div className="next-step-action">
            <div className="next-step-icon"><CheckCircle2 aria-hidden="true" /></div>
            <div>
              <strong>Formulario de interés</strong>
              <span>Déjanos tus datos y conecta con la comunidad.</span>
            </div>
            <Button asChild variant="hero" size="lg">
              <Link to="/contacto" hash="inscripcion">Quiero participar <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="final-cta home-final-cta">
        <div className="site-container final-cta-inner">
          <div>
            <span className="eyebrow eyebrow-light">Tu próximo paso empieza aquí</span>
            <h2>Haz que tus ganas de crecer encuentren dirección.</h2>
          </div>
          <Button asChild variant="warm" size="lg">
            <Link to="/contacto" hash="inscripcion">Únete a REDLEAD <Rocket aria-hidden="true" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
