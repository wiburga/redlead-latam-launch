import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Facebook,
  Instagram,
  Menu,
  Music2,
  X,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/redlead-logo.webp.asset.json";

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
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link to="/" className="brand-link" aria-label="REDLEAD — Inicio" onClick={close}>
          <img src={logoAsset.url} alt="REDLEAD" width={768} height={768} className="h-10 w-auto object-contain" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>Inicio</Link>
          <Link to="/sobre-nosotros" activeProps={{ className: "active" }}>Sobre Nosotros</Link>
          <Link to="/contacto" activeProps={{ className: "active" }}>Contacto</Link>
        </nav>
        <Button asChild variant="hero" className="desktop-join">
          <Link to="/contacto" hash="inscripcion">Únete</Link>
        </Button>
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
          <Link to="/" onClick={close}>Inicio</Link>
          <Link to="/sobre-nosotros" onClick={close}>Sobre Nosotros</Link>
          <Link to="/contacto" onClick={close}>Contacto</Link>
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
          <img src={logoAsset.url} alt="REDLEAD" width={768} height={768} loading="lazy" />
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