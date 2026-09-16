import { Facebook, Instagram, Music2, Youtube, type LucideIcon } from "lucide-react";

/**
 * Configuración editable del sitio.
 * Cambia aquí los enlaces de redes y el endpoint del formulario.
 */

export type SocialLink = {
  key: string;
  name: string;
  handle: string;
  url: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  {
    key: "instagram",
    name: "Instagram",
    handle: "@redlead.latam",
    url: "https://www.instagram.com/redlead.latam",
    icon: Instagram,
  },
  {
    key: "facebook",
    name: "Facebook",
    handle: "Redlead",
    url: "https://www.facebook.com/Redlead",
    icon: Facebook,
  },
  {
    key: "tiktok",
    name: "TikTok",
    handle: "@redlead.latam",
    url: "https://www.tiktok.com/@redlead.latam",
    icon: Music2,
  },
  {
    key: "youtube",
    name: "YouTube",
    handle: "@redlead_latam",
    url: "https://www.youtube.com/@redlead_latam",
    icon: Youtube,
  },
];

/**
 * Endpoint del formulario de inscripción.
 * Reemplázalo por tu backend, Formspree, Google Apps Script, etc.
 * Si queda vacío, el formulario simula el envío sin llamar a ningún servicio.
 */
export const CONTACT_ENDPOINT = "";

/** Enlace al formulario oficial de inscripción (cuando esté disponible). */
export const OFFICIAL_FORM_URL = "#inscripcion";
