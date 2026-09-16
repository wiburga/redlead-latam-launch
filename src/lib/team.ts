export type TeamSocialLink = {
  label: string;
  url: string;
};

export type TeamMember = {
  name: string;
  country: string;
  role?: string;
  isLead?: boolean;
  socials?: TeamSocialLink[];
};

export type TeamArea = {
  name: string;
  members: TeamMember[];
};

export const teamAreas: TeamArea[] = [
  {
    name: "Relaciones Internacionales y Alianzas",
    members: [
      {
        name: "Mayra Elisa Paredes Sahonero",
        country: "Bolivia / Tarija",
        role: "Arquitecta Urbanista",
        isLead: true,
        socials: [
          { label: "Instagram", url: "https://instagram.com/mayra_elisa5463" },
          { label: "LinkedIn", url: "https://linkedin.com/in/mayra-elisa-paredes-sahonero-4b5b901a6" },
        ],
      },
      { name: "Juan Carlos Villarruel Valdivia", country: "Perú" },
      { name: "Alexa Naihovy Payán Soto", country: "México" },
      { name: "Santiago Ivan Vega Guerrero", country: "México" },
      { name: "Lady Johanna Guerrero Ortiz", country: "Ecuador" },
      { name: "Esperanza Aurora Balderrama Mamani", country: "Bolivia" },
      { name: "Litzi Wara Huallpino Surculento", country: "Bolivia / Tarija" },
      { name: "Moises Nicolás Martínez Barrera", country: "Chile" },
      { name: "Rebeca María Inés Vecinday Fuster", country: "Paraguay" },
    ],
  },
  {
    name: "Gestión de Investigación",
    members: [
      {
        name: "Pedro Jose Velasquez Velasquez",
        country: "Honduras",
        role: "Químico",
        isLead: true,
        socials: [{ label: "Instagram", url: "https://instagram.com/totovp15" }],
      },
      { name: "Willian Steeven Valenzuela Chanatasig", country: "Ecuador" },
      { name: "Juan Carlos Villarruel Valdivia", country: "Perú" },
      { name: "Yadira Mishel Arias López", country: "Ecuador", role: "Nutricionista" },
      { name: "Alejandra Clemente Monago", country: "Perú" },
      { name: "María Milagros Márquez Escalante", country: "Venezuela" },
    ],
  },
  {
    name: "Organización, Gestión y Moderación de Talleres",
    members: [
      { name: "Annye Alvarado Troncos", country: "Perú / Piura", isLead: true },
      { name: "Wendy Estefania Chicaiza Vasquez", country: "Ecuador / Quito", isLead: true },
      { name: "Jazmín Jael Jimenez Huanca", country: "Bolivia" },
      { name: "Santiago Ivan Vega Guerrero", country: "México" },
      { name: "Yuly Pierre", country: "República Dominicana" },
    ],
  },
  {
    name: "Talento Humano",
    members: [
      { name: "Melany Johanna Dueñas Delgado", country: "Ecuador", isLead: true },
      { name: "Jhon Jairon Chávez", country: "Ecuador" },
      { name: "Guadalupe Veronica Rodriguez Madero", country: "México" },
      { name: "Cielo Lindsay Temple de la Cruz", country: "Perú" },
    ],
  },
  {
    name: "Diseño, Redes Sociales y Difusión",
    members: [
      { name: "Mayra Elisa Paredes Sahonero", country: "Bolivia / Tarija", isLead: true },
      { name: "Annye Alvarado Troncos", country: "Perú / Piura", isLead: true },
      { name: "Marisol Sumuano Keller", country: "México", role: "Ingeniería en Biotecnología", isLead: true },
      { name: "Moises Nicolás Martínez Barrera", country: "Chile" },
      { name: "Karen Granada", country: "Colombia" },
      { name: "Eliana Frías", country: "Venezuela" },
      { name: "Milca Karen Acevedo", country: "Perú" },
      { name: "Julibeth Román Arrieta", country: "Colombia" },
      { name: "Selena Heredia Yaros", country: "Perú" },
    ],
  },
  {
    name: "Formularios, Datos y Análisis",
    members: [
      { name: "Melany Johanna Dueñas Delgado", country: "Ecuador", isLead: true },
      { name: "Alejandra Anahí Flores Paredes", country: "Ecuador", role: "Ciencias Biomédicas", isLead: true },
      { name: "Lady Guerrero Ortiz", country: "Ecuador" },
      { name: "Santiago Ivan Vega Guerrero", country: "México" },
      { name: "Willian Steeven Valenzuela Chanatasig", country: "Ecuador" },
      { name: "Esperanza Aurora Balderrama Mamani", country: "Bolivia" },
      { name: "Carlos Andres Diaz Diaz", country: "Perú" },
    ],
  },
  {
    name: "Desarrollo y Mantenimiento de Página Web",
    members: [
      { name: "Daira Mamani Durán", country: "Bolivia", isLead: true },
      { name: "Wuidezon Isaias Burga Cabascango", country: "Ecuador", role: "Desarrollador de Software" },
      { name: "Annye Alvarado Troncos", country: "Perú" },
    ],
  },
  {
    name: "Gestor de Informes y Tareas",
    members: [
      { name: "Isabel Ariana Bedon Mendoza", country: "Perú", isLead: true },
      { name: "Kiara Isabel Paucar Verde", country: "Perú" },
    ],
  },
];
