import {
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Globe2,
  Lightbulb,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Programa = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  audience: string[];
  outcomes: string[];
  icon: LucideIcon;
  tone: "red" | "teal" | "gold";
};

export const programas: Programa[] = [
  {
    slug: "liderazgo",
    title: "Liderazgo",
    summary: "Descubre tu estilo de liderazgo y aprende a movilizar equipos y comunidades.",
    description:
      "Trabajamos el liderazgo desde la práctica: autoconocimiento, comunicación, trabajo en equipo y toma de decisiones. Aprenderás a liderar proyectos con propósito y a inspirar a otras personas jóvenes de tu entorno.",
    audience: [
      "Jóvenes de 17 a 29 años de toda Latinoamérica",
      "Estudiantes universitarios y recién egresados",
      "Personas que lideran colectivos, voluntariados o proyectos comunitarios",
    ],
    outcomes: [
      "Identificarás tu estilo de liderazgo y tus fortalezas",
      "Desarrollarás habilidades de comunicación y trabajo en equipo",
      "Diseñarás un plan de acción para liderar un proyecto propio",
    ],
    icon: Lightbulb,
    tone: "red",
  },
  {
    slug: "empleabilidad",
    title: "Empleabilidad",
    summary: "Prepárate para conseguir el empleo que quieres con herramientas reales.",
    description:
      "Un recorrido práctico por todo el proceso de búsqueda de empleo: CV, LinkedIn, portafolio, entrevistas y negociación. Revisamos casos reales del mercado laboral latinoamericano y remoto.",
    audience: [
      "Jóvenes en búsqueda de su primer empleo o prácticas",
      "Profesionales que quieren cambiar de sector",
      "Estudiantes en etapa final de carrera",
    ],
    outcomes: [
      "Tendrás un CV y un LinkedIn que destaquen",
      "Practicarás entrevistas y procesos de selección",
      "Conocerás estrategias para postular a empleos remotos",
    ],
    icon: BriefcaseBusiness,
    tone: "teal",
  },
  {
    slug: "marca-personal",
    title: "Marca Personal",
    summary: "Construye una presencia profesional coherente y memorable.",
    description:
      "Aprende a comunicar quién eres, qué sabes hacer y qué valor aportas. Trabajarás tu narrativa profesional, tu presencia digital y tu red de contactos con criterios estratégicos.",
    audience: [
      "Jóvenes que quieren visibilizar su talento",
      "Emprendedores y creadores de proyectos",
      "Quienes buscan becas o posiciones competitivas",
    ],
    outcomes: [
      "Definirás tu propuesta de valor profesional",
      "Crearás contenido y perfiles alineados a tus metas",
      "Ampliarás tu red con contactos estratégicos",
    ],
    icon: Sparkles,
    tone: "gold",
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligencia Artificial",
    summary: "Usa la IA como aliada en tu estudio, tu trabajo y tus proyectos.",
    description:
      "Formación aplicada en herramientas de inteligencia artificial: escritura de prompts, automatización de tareas, investigación y creación de contenido, siempre con criterio ético y pensamiento crítico.",
    audience: [
      "Jóvenes sin experiencia técnica previa",
      "Estudiantes de cualquier carrera",
      "Personas que quieren optimizar su productividad",
    ],
    outcomes: [
      "Dominarás herramientas de IA aplicadas a tu área",
      "Automatizarás tareas de estudio y trabajo",
      "Aplicarás criterios éticos en el uso de IA",
    ],
    icon: BrainCircuit,
    tone: "teal",
  },
  {
    slug: "analisis-de-datos",
    title: "Análisis de Datos",
    summary: "Convierte datos en decisiones y en una habilidad que el mercado busca.",
    description:
      "Iniciación práctica al análisis de datos: lectura de información, hojas de cálculo, visualización y storytelling con datos para presentar hallazgos con claridad.",
    audience: [
      "Jóvenes que empiezan desde cero en datos",
      "Profesionales de áreas sociales y de negocio",
      "Quienes buscan sumar una habilidad técnica a su perfil",
    ],
    outcomes: [
      "Analizarás conjuntos de datos reales",
      "Crearás visualizaciones claras y útiles",
      "Comunicarás hallazgos con impacto",
    ],
    icon: ChartNoAxesCombined,
    tone: "red",
  },
  {
    slug: "oportunidades-internacionales",
    title: "Acceso a Oportunidades Internacionales",
    summary: "Postula con confianza a becas, programas y experiencias globales.",
    description:
      "Te acompañamos en el proceso de postulación a becas y programas internacionales: búsqueda de convocatorias, cartas de motivación, ensayos, recomendaciones y entrevistas.",
    audience: [
      "Jóvenes que sueñan con estudiar o formarse fuera",
      "Postulantes a becas, fellowships e intercambios",
      "Quienes ya postularon y quieren mejorar su perfil",
    ],
    outcomes: [
      "Sabrás dónde y cómo buscar convocatorias confiables",
      "Escribirás cartas de motivación y ensayos sólidos",
      "Prepararás entrevistas en contextos internacionales",
    ],
    icon: Globe2,
    tone: "gold",
  },
];

export function getPrograma(slug: string) {
  return programas.find((programa) => programa.slug === slug);
}
