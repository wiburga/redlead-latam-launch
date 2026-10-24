import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { posts } from "@/data/posts";
import { programas } from "@/lib/programas";
import { SITE_URL } from "@/lib/blog";
import { isSitemapRouteIncluded, sitemapPathForLocation, sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: { handlers: { GET: async () => {
    const router = await getRouterInstance();
    const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
    if (isSitemapRouteIncluded(router.routesById["/blog/$slug"])) {
      for (const post of posts) {
        const location = router.buildLocation({ to: "/blog/$slug", params: { slug: post.slug }, search: () => ({}), hash: "" });
        const path = sitemapPathForLocation(router, location, "/blog/$slug");
        if (path) entries.push({ path });
      }
    }
    if (isSitemapRouteIncluded(router.routesById["/programas/$slug"])) {
      for (const programa of programas) {
        const location = router.buildLocation({ to: "/programas/$slug", params: { slug: programa.slug }, search: () => ({}), hash: "" });
        const path = sitemapPathForLocation(router, location, "/programas/$slug");
        if (path) entries.push({ path });
      }
    }
    return new Response(sitemapXML(SITE_URL, entries), { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
  } } },
});