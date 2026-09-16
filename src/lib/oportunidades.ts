export type Oportunidad = {
  id: string;
  title: string;
  type: "Beca" | "Empleo" | "Pasantía";
  region: string;
  /** Fecha límite en formato ISO (AAAA-MM-DD). */
  deadline: string;
  summary: string;
  url: string;
};

/** Edita este arreglo para actualizar las convocatorias publicadas. */
export const oportunidades: Oportunidad[] = [
  {
    id: "beca-liderazgo-global-2026",
    title: "Beca de Liderazgo Global para jóvenes de LATAM",
    type: "Beca",
    region: "Latinoamérica",
    deadline: "2026-10-30",
    summary:
      "Programa de formación en liderazgo con cobertura total de matrícula y mentoría internacional durante seis meses.",
    url: "#",
  },
  {
    id: "pasantia-datos-remota",
    title: "Pasantía remota en análisis de datos",
    type: "Pasantía",
    region: "Remoto · Región Andina",
    deadline: "2026-10-15",
    summary:
      "Organización social busca practicantes para apoyar la visualización de datos de proyectos comunitarios.",
    url: "#",
  },
  {
    id: "empleo-junior-marketing",
    title: "Analista junior de marketing digital",
    type: "Empleo",
    region: "México · Híbrido",
    deadline: "2026-09-30",
    summary:
      "Posición de entrada para jóvenes profesionales con interés en contenidos, métricas y campañas digitales.",
    url: "#",
  },
  {
    id: "beca-ia-aplicada",
    title: "Beca de Inteligencia Artificial aplicada",
    type: "Beca",
    region: "Virtual · Toda LATAM",
    deadline: "2026-09-20",
    summary:
      "Curso intensivo virtual sobre herramientas de IA para estudiantes universitarios de cualquier carrera.",
    url: "#",
  },
];

export function formatDeadline(deadline: string) {
  const date = new Date(`${deadline}T00:00:00`);
  return new Intl.DateTimeFormat("es", { day: "2-digit", month: "long", year: "numeric" }).format(date);
}

/** Convocatorias ordenadas por fecha límite más próxima. */
export function oportunidadesRecientes(limit = 3) {
  return [...oportunidades]
    .sort((a, b) => a.deadline.localeCompare(b.deadline))
    .slice(0, limit);
}
