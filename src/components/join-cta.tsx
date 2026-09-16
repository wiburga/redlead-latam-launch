import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SocialLinks } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export function JoinCTA({
  eyebrow = "Da el siguiente paso",
  title = "No esperes a que las oportunidades lleguen, prepárate para conquistarlas",
  showSocials = true,
}: {
  eyebrow?: string;
  title?: string;
  showSocials?: boolean;
}) {
  return (
    <section className="final-cta">
      <div className="site-container final-cta-inner">
        <div>
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="cta-actions">
          <Button asChild variant="warm" size="lg">
            <Link to="/contacto" hash="inscripcion">
              Únete a REDLEAD <Check />
            </Link>
          </Button>
          {showSocials && <SocialLinks />}
        </div>
      </div>
    </section>
  );
}
