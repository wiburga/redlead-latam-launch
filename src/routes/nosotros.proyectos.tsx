import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarRange, Rocket } from "lucide-react";

import { SectionHeading } from "@/components/brand-elements";
import { JoinCTA } from "@/components/join-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/nosotros/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos | REDLEAD" },
      { name: "description", content: "Conoce los proyectos que REDLEAD está construyendo para ampliar oportunidades juveniles." },
      { property: "og:title", content: "Proyectos | REDLEAD" },
      { property: "og:description", content: "Iniciativas de REDLEAD para conectar, acompañar y desarrollar talento joven." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  description: string;
  status: "En curso" | "Próximamente";
  tone: "red" | "teal" | "gold";
};

const projects: Project[] = [
  {
    title: "Mapa de oportunidades latinoamericanas",
    description: "Una colección curada de becas, mentorías y convocatorias para descubrir el siguiente paso.",
    status: "En curso",
    tone: "red",
  },
  {
    title: "Laboratorio de habilidades",
    description: "Espacios prácticos para fortalecer liderazgo, empleabilidad y herramientas digitales.",
    status: "Próximamente",
    tone: "teal",
  },
  {
    title: "Red de mentorías REDLEAD",
    description: "Conexiones de acompañamiento entre jóvenes, profesionales y personas expertas de la región.",
    status: "Próximamente",
    tone: "gold",
  },
];

function ProjectCard({ project }: Readonly<{ project: Project }>) {
  return (
    <Card className={`project-card project-card-${project.tone}`}>
      <div className="project-image-placeholder" role="img" aria-label={`Espacio reservado para imagen de ${project.title}`}>
        <Rocket aria-hidden="true" />
        <span>Imagen del proyecto</span>
      </div>
      <CardHeader className="project-card-header">
        <Badge variant="outline" className="project-status"><CalendarRange aria-hidden="true" /> {project.status}</Badge>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="project-card-content">
        <p>{project.description}</p>
        <Button asChild variant="link" className="project-link">
          <Link to="/contacto">Conocer más <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-hero">
        <div className="site-container">
          <span className="eyebrow">Ideas que se vuelven acción</span>
          <h1>Proyectos</h1>
          <p>Iniciativas en construcción para que encontrar, preparar y compartir oportunidades sea cada vez más sencillo.</p>
        </div>
      </section>

      <section className="section projects-section">
        <div className="site-container">
          <div className="projects-intro">
            <div>
              <SectionHeading eyebrow="Lo que estamos construyendo">Proyectos con propósito regional</SectionHeading>
            </div>
            <p>Esta sección crecerá junto con la comunidad. Aquí podrás conocer el estado de cada iniciativa y la forma de participar.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </section>

      <JoinCTA eyebrow="Construyamos juntos" title="Una buena idea puede convertirse en una oportunidad para muchas personas" showSocials={false} />
    </>
  );
}
