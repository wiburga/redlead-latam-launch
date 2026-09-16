export type Historia = {
  id: string;
  name: string;
  country: string;
  initials: string;
  quote: string;
  achievement: string;
  /** Contenido de ejemplo: reemplázalo por testimonios reales. */
  placeholder: boolean;
};

export const historias: Historia[] = [
  {
    id: "historia-1",
    name: "Nombre de ejemplo 1",
    country: "Perú",
    initials: "N1",
    quote:
      "REDLEAD me ayudó a ordenar mi perfil profesional y a postular con confianza a mi primera oportunidad internacional.",
    achievement: "Beca en Programa X",
    placeholder: true,
  },
  {
    id: "historia-2",
    name: "Nombre de ejemplo 2",
    country: "Colombia",
    initials: "N2",
    quote:
      "Aprendí a contar mi historia profesional y a usar la IA para preparar entrevistas en menos tiempo.",
    achievement: "Pasantía en Empresa Y",
    placeholder: true,
  },
  {
    id: "historia-3",
    name: "Nombre de ejemplo 3",
    country: "México",
    initials: "N3",
    quote:
      "La comunidad latinoamericana fue lo mejor: encontré mentores y personas que hoy son mi red de apoyo.",
    achievement: "Primer empleo remoto en Organización Z",
    placeholder: true,
  },
];
