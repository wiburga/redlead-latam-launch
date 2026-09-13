import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, LockKeyhole, Mail, MapPin } from "lucide-react";

import { SocialLinks } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto e inscripción | REDLEAD" },
      { name: "description", content: "Formaliza tu interés en REDLEAD y conecta con nuestra comunidad latinoamericana." },
      { property: "og:title", content: "Únete a REDLEAD" },
      { property: "og:description", content: "Completa el formulario de inscripción al programa gratuito y virtual REDLEAD." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="contact-page" id="inscripcion">
      <div className="site-container contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">Inscripciones</span>
          <h1>Tu próximo gran paso empieza aquí</h1>
          <p>Completa este formulario para formalizar tu inscripción. La información proporcionada será tratada con confidencialidad y utilizada únicamente para fines de organización, comunicación y evaluación del programa.</p>
          <div className="privacy-note"><LockKeyhole aria-hidden="true" /><span>Tus datos se utilizarán únicamente para la gestión del programa.</span></div>
          <div className="contact-meta">
            <p><MapPin aria-hidden="true" /> Abierto a jóvenes de toda Latinoamérica</p>
            <p><Mail aria-hidden="true" /> Programa gratuito y 100% virtual</p>
          </div>
          <div className="contact-socials">
            <h2>Síguenos y conoce la comunidad</h2>
            <SocialLinks showHandles />
          </div>
        </div>

        <div className="form-panel">
          <div className="form-heading"><span>01</span><div><p>Formulario de interés</p><h2>Cuéntanos sobre ti</h2></div></div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="name">Nombre completo</label>
            <input id="name" name="name" type="text" placeholder="Escribe tu nombre" autoComplete="name" />
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" placeholder="tu@correo.com" autoComplete="email" />
            <label htmlFor="country">País</label>
            <input id="country" name="country" type="text" placeholder="¿Desde qué país nos escribes?" autoComplete="country-name" />
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows={5} placeholder="Cuéntanos por qué quieres ser parte de REDLEAD" />
            <Button type="submit" variant="hero" size="lg" className="w-full">Enviar mi interés <ArrowRight /></Button>
            <p className="form-placeholder">Este formulario es demostrativo. Próximamente habilitaremos el envío.</p>
          </form>
          <a href="#inscripcion" className="official-form-link">Enlace reservado para el formulario oficial <ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}