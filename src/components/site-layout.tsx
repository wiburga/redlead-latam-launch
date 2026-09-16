import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Menu,
  Music2,
  X,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoAsset from "@/assets/LogoREDLEAD.png";

const socialLinks = [
  { label: "Instagram @redlead.latam", handle: "@redlead.latam", icon: Instagram },
  { label: "Facebook Redlead", handle: "Redlead", icon: Facebook },
  { label: "TikTok @redlead.latam", handle: "@redlead.latam", icon: Music2 },
  { label: "YouTube @redlead_latam", handle: "@redlead_latam", icon: Youtube },
];

export function SocialLinks({ showHandles = false }: { showHandles?: boolean }) {
  return (
    <div className={showHandles ? "grid gap-3 sm:grid-cols-2" : "flex items-center gap-2"}>
      {socialLinks.map(({ label, handle, icon: Icon }, index) => (
        <a
          key={label}
          href="#"
          aria-label={label}
          className={showHandles ? "social-row" : `social-icon social-icon-${index + 1}`}
        >
          <span className={`social-icon social-icon-${index + 1}`}>
            <Icon aria-hidden="true" />
          </span>
          {showHandles && (
            <span>
              <strong>{label.split(" ")[0]}</strong>
              <small>{handle}</small>
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const close = () => setOpen(false);

  const aboutLinks = [
    { label: "Misión y Visión", to: "/nosotros/mision-vision" },
    { label: "Nuestro Impacto", to: "/nosotros/impacto" },
    { label: "Nuestro Equipo", to: "/", hash: "nuestro-equipo" },
    { label: "Proyectos", to: "/nosotros/proyectos" },
  ] as const;

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link to="/" className="brand-link" aria-label="REDLEAD — Inicio" onClick={close}>
          <img
            src={logoAsset}
            alt="REDLEAD"
            width={768}
            height={768}
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link to="/oportunidades" activeProps={{ className: "active" }}>Oportunidades</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button type="button" className="nav-dropdown-trigger" aria-label="Abrir menú Nosotros">
                Nosotros <ChevronDown aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="nav-dropdown-content">
              {aboutLinks.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link to={item.to} hash={"hash" in item ? item.hash : undefined}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/programas">Recursos</Link>
          <Link to="/oportunidades">Convocatorias REDLEAD</Link>
          <Link to="/contacto" activeProps={{ className: "active" }}>Contáctanos</Link>
        </nav>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="menu-button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          <Link to="/oportunidades" onClick={close}>Oportunidades</Link>
          <Collapsible open={mobileAboutOpen} onOpenChange={setMobileAboutOpen} className="mobile-about">
            <CollapsibleTrigger className="mobile-about-trigger">
              <span>Nosotros</span><ChevronDown aria-hidden="true" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mobile-about-content">
              {aboutLinks.map((item) => (
                <Link key={item.label} to={item.to} hash={"hash" in item ? item.hash : undefined} onClick={close}>{item.label}</Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
          <Link to="/programas" onClick={close}>Recursos</Link>
          <Link to="/oportunidades" onClick={close}>Convocatorias REDLEAD</Link>
          <Link to="/contacto" onClick={close}>Contáctanos</Link>
          <Button asChild variant="hero" className="w-full">
            <Link to="/contacto" hash="inscripcion" onClick={close}>Únete a REDLEAD</Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div className="footer-brand">
          <img src={logoAsset} alt="REDLEAD" width={768} height={768} loading="lazy" />
          <div>
            <strong>REDLEAD</strong>
            <p>Líderes que potencian Líderes</p>
          </div>
        </div>
        <SocialLinks />
        <p className="copyright">© 2026 REDLEAD</p>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
