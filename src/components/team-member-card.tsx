import { ExternalLink, MapPin } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TeamMember } from "@/lib/team";

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function getAvatarPalette(name: string) {
  const hash = [...name].reduce((total, character) => total + (character.codePointAt(0) ?? 0), 0);
  return `team-avatar-palette-${hash % 4}`;
}

export function TeamMemberCard({ member, area }: Readonly<{ member: TeamMember; area: string }>) {
  const socialLink = member.socials?.[0];
  const card = (
    <Card className={`team-member-card ${socialLink ? "team-member-card-linkable" : ""}`}>
      <span className="team-card-decoration team-card-decoration-one" aria-hidden="true" />
      <span className="team-card-decoration team-card-decoration-two" aria-hidden="true" />
      <CardHeader className="team-member-header">
        <Avatar className={`team-member-avatar rounded-2xl object-cover ${getAvatarPalette(member.name)}`} aria-hidden="true">
          <AvatarFallback className="rounded-2xl flex items-center justify-center">{getInitials(member.name)}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="team-member-content">
        <div className="team-member-name-strip">
          <CardTitle>{member.name}</CardTitle>
        </div>
        <Badge className="team-member-area-badge">{area}</Badge>
        <div className="team-member-details">
          {member.role && <p className="team-member-role">{member.role}</p>}
          <p className="team-member-country"><MapPin aria-hidden="true" /> {member.country}</p>
        </div>
        {member.isLead && <Badge className="team-lead-badge">Responsable de equipo</Badge>}
        {socialLink && <span className="team-member-social-link"><ExternalLink aria-hidden="true" /> Ver perfil en {socialLink.label}</span>}
      </CardContent>
    </Card>
  );

  return socialLink ? (
    <a className="team-member-card-link" href={socialLink.url} target="_blank" rel="noreferrer" aria-label={`Ver perfil de ${member.name} en ${socialLink.label}`}>
      {card}
    </a>
  ) : card;
}
