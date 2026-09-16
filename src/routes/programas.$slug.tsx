import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Users } from "lucide-react";

import { IconBadge, SectionHeading } from "@/components/brand-elements";
import { JoinCTA } from "@/components/join-cta";
import { getPrograma } from "@/lib/programas";

export const Route = createFileRoute("/programas/$slug")({
  loader: ({ params }) => {
    const programa = getPrograma(params.slug);
    if (!programa) throw notFound();
    return { slug: programa.slug, title: programa.title, summary: programa.summary };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Programa no disponible | REDLEAD" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} | Programas REDLEAD` },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: `${loaderData.title} — REDLEAD` },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProgramaDetalle,
});

function ProgramaDetalle() {
  const { slug } = Route.useParams();
  const programa = getPrograma(slug);
  if (!programa) return null;

  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <Link to="/programas" className="back-link"><ArrowLeft aria-hidden="true" /> Todos los programas</Link>
          <span className="eyebrow">Pilar REDLEAD</span>
          <h1>{programa.title}</h1>
          <p>{programa.summary}</p>
        </div>
      </section>

      <section className="section story-section">
        <div className="site-container story-grid">
          <div className="year-mark">
            <IconBadge icon={programa.icon} tone={programa.tone} />
            <p>Formación gratuita, virtual y en español.</p>
          </div>
          <div>
            <SectionHeading eyebrow="De qué trata">Descripción del pilar</SectionHeading>
            <p className="large-copy">{programa.description}</p>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="site-container detail-grid">
          <div>
            <h2 className="detail-title"><Users aria-hidden="true" /> ¿A quién va dirigido?</h2>
            <ul className="detail-list">
              {programa.audience.map((item) => (
                <li key={item}><Check aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="detail-title"><Check aria-hidden="true" /> ¿Qué lograrás?</h2>
            <ul className="detail-list">
              {programa.outcomes.map((item) => (
                <li key={item}><Check aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <JoinCTA eyebrow="Inscripciones abiertas" title={`Inscríbete y empieza con ${programa.title}`} showSocials={false} />
    </>
  );
}
