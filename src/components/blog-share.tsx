import { useState } from "react";
import { Check, Copy, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articleUrl, shareLinks, type BlogPost } from "@/lib/blog";

export function BlogShare({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const links = shareLinks(post);
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(articleUrl(post.slug));
      setCopied(true); setFailed(false);
    } catch { setFailed(true); }
  }
  return (
    <div className="blog-share">
      <span>Compartir</span>
      <Button asChild variant="outline" size="icon"><a href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Compartir por WhatsApp" title="Compartir por WhatsApp"><MessageCircle /></a></Button>
      <Button asChild variant="outline" size="icon"><a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Compartir en LinkedIn" title="Compartir en LinkedIn"><Linkedin /></a></Button>
      <Button variant="outline" size="icon" onClick={copyLink} aria-label={copied ? "Enlace copiado" : "Copiar enlace"} title={copied ? "Enlace copiado" : "Copiar enlace"}>{copied ? <Check /> : <Copy />}</Button>
      <span role="status" className="blog-copy-status">{copied ? "Enlace copiado" : failed ? "No se pudo copiar el enlace" : ""}</span>
    </div>
  );
}