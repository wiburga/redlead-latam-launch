import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, ArrowRight, Clock3, UserRound } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { BlogShare } from "@/components/blog-share";
import { Button } from "@/components/ui/button";
import { getPost, posts } from "@/data/posts";
import { absoluteCover, articleUrl, formatPostDate, relatedPosts, SITE_URL } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: true },
  beforeLoad: ({ params }) => { if (!getPost(params.slug)) throw notFound(); },
  head: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) return { meta: [
      { title: "Artículo no disponible | Blog REDLEAD" }, { name: "robots", content: "noindex" },
      { name: "description", content: "Este artículo no está disponible. Descubre otras guías en el Blog REDLEAD." },
      { property: "og:title", content: "Artículo no disponible | REDLEAD" },
      { property: "og:description", content: "Descubre otras guías en el Blog REDLEAD." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    ] };
    const url = articleUrl(post.slug), image = absoluteCover(post.coverImage);
    return {
      meta: [
        { title: `${post.title} | REDLEAD` }, { name: "description", content: post.description },
        { name: "author", content: post.author }, { name: "keywords", content: post.keywords.join(", ") },
        { property: "og:title", content: post.title }, { property: "og:description", content: post.description },
        { property: "og:type", content: "article" }, { property: "og:url", content: url },
        { property: "og:image", content: image }, { property: "og:image:alt", content: post.coverAlt },
        { property: "article:published_time", content: post.date },
        { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:image", content: image },
        { name: "twitter:title", content: post.title }, { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title,
        description: post.description, datePublished: post.date, author: { "@type": "Organization", name: post.author },
        publisher: { "@type": "Organization", name: "REDLEAD", url: SITE_URL }, image,
        mainEntityOfPage: { "@type": "WebPage", "@id": url }, inLanguage: "es", articleSection: post.category,
      }).replace(/</g, "\\u003c") }],
    };
  },
  component: BlogArticle,
  notFoundComponent: () => <div className="site-container blog-unavailable"><h1>Artículo no encontrado</h1><p>Esta guía no está disponible.</p><Button asChild variant="hero"><Link to="/blog" search={{ category: "" }}>Volver al blog</Link></Button></div>,
  errorComponent: ({ reset }) => {
    const router = useRouter();
    return <div className="site-container blog-unavailable"><h1>No pudimos abrir el artículo</h1><p>Inténtalo de nuevo o visita las otras guías.</p><Button variant="hero" onClick={async () => { await router.invalidate(); reset(); }}>Reintentar</Button></div>;
  },
});

function BlogArticle() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) return null;
  return <>
    <article className="blog-article"><div className="site-container">
      <header className="blog-article-header">
        <Link to="/blog" search={{ category: "" }} className="back-link"><ArrowLeft aria-hidden="true" />Blog REDLEAD</Link>
        <span className="blog-category">{post.category}</span><h1>{post.title}</h1><p className="blog-article-intro">{post.description}</p>
        <div className="blog-meta"><span><UserRound aria-hidden="true" />{post.author}</span><time dateTime={post.date}>{formatPostDate(post.date)}</time><span><Clock3 aria-hidden="true" />{post.readingTime} min de lectura</span></div>
        <img className="blog-article-cover" src={post.coverImage} alt={post.coverAlt} width={1200} height={630} loading="eager" fetchPriority="high" />
      </header>
      <div className="blog-reading">
        <ReactMarkdown components={{ a: ({ href, children }) => {
          if (href?.startsWith("/blog/")) return <Link to="/blog/$slug" params={{ slug: href.slice(6) }}>{children}</Link>;
          if (href === "/programas") return <Link to="/programas">{children}</Link>;
          if (href === "/oportunidades") return <Link to="/oportunidades">{children}</Link>;
          if (href === "/contacto#inscripcion") return <Link to="/contacto" hash="inscripcion">{children}</Link>;
          return <a href={href}>{children}</a>;
        } }}>{post.content}</ReactMarkdown>
        <BlogShare key={slug} post={post} />
        <aside className="blog-join"><h2>Únete a REDLEAD</h2><p>Sigue desarrollando tus habilidades con una comunidad de jóvenes de Latinoamérica.</p><Button asChild variant="hero"><Link to="/contacto" hash="inscripcion">Únete a REDLEAD <ArrowRight aria-hidden="true" /></Link></Button></aside>
      </div>
    </div></article>
    <section className="blog-related"><div className="site-container"><h2>Artículos relacionados</h2><div className="blog-grid">{relatedPosts(posts, post).map((related) => <BlogCard key={related.slug} post={related} />)}</div></div></section>
  </>;
}