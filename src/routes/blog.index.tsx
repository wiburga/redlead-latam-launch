import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { posts } from "@/data/posts";
import { absoluteCover, blogCategories, filterPosts, SITE_URL } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  staticData: { sitemap: true },
  validateSearch: (search: Record<string, unknown>) => ({ category: typeof search.category === "string" ? search.category : "" }),
  head: () => ({
    meta: [
      { title: "Blog REDLEAD | Guías para jóvenes de Latinoamérica" },
      { name: "description", content: "Ideas y guías de inteligencia artificial, empleabilidad, becas y liderazgo para preparar tu próxima oportunidad con REDLEAD." },
      { property: "og:title", content: "Blog REDLEAD" },
      { property: "og:description", content: "Ideas, herramientas y guías para jóvenes líderes de Latinoamérica." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
      ...(posts[0] ? [{ property: "og:image", content: absoluteCover(posts[0].coverImage) }, { name: "twitter:image", content: absoluteCover(posts[0].coverImage) }] : []),
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/blog/" });
  const selected = blogCategories.some((item) => item === category) ? category : "";
  const visible = filterPosts(posts, selected);
  return <>
    <section className="blog-hero"><div className="site-container"><span className="eyebrow">Aprender para avanzar</span><h1>Blog REDLEAD</h1><p>Ideas, herramientas y guías para jóvenes líderes de Latinoamérica</p></div></section>
    <section className="blog-list-section"><div className="site-container">
      <div className="blog-filter-row">
        <div className="blog-filter"><label htmlFor="blog-category">Categoría</label>
          <Select value={selected || "all"} onValueChange={(value) => navigate({ search: { category: value === "all" ? "" : value } })}>
            <SelectTrigger id="blog-category" className="blog-filter-control"><SelectValue /></SelectTrigger>
            <SelectContent><SelectItem value="all">Todas las categorías</SelectItem>{blogCategories.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}</SelectContent>
          </Select>
        </div><span aria-live="polite">{visible.length} {visible.length === 1 ? "artículo" : "artículos"}</span>
      </div>
      {visible.length ? <div className="blog-grid">{visible.map((post) => <BlogCard key={post.slug} post={post} />)}</div> :
        <div className="blog-empty"><h2>Próximamente, nuevas ideas sobre {selected.toLowerCase()}</h2><p>Aún no hay artículos en esta categoría.</p><Button asChild variant="outline"><Link to="/blog" search={{ category: "" }}>Ver todos los artículos</Link></Button></div>}
    </div></section>
  </>;
}