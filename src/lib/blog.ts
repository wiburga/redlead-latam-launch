export const SITE_URL = "https://redlead-latam-launch.lovable.app";
export const blogCategories = ["Inteligencia Artificial", "Empleabilidad", "Becas", "Liderazgo"] as const;
export type BlogCategory = (typeof blogCategories)[number];

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: BlogCategory;
  readingTime: number;
  coverImage: string;
  coverAlt: string;
  keywords: string[];
  content: string;
}

export const articleUrl = (slug: string) => `${SITE_URL}/blog/${encodeURIComponent(slug)}`;
export const absoluteCover = (image: string) => new URL(image, SITE_URL).href;
export const formatPostDate = (date: string) => new Intl.DateTimeFormat("es", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
}).format(new Date(`${date}T12:00:00Z`));

export function filterPosts(posts: BlogPost[], category: string) {
  return posts.filter((post) => !category || post.category === category);
}

export function relatedPosts(posts: BlogPost[], current: BlogPost, limit = 2) {
  return posts.filter((post) => post.slug !== current.slug)
    .sort((a, b) => Number(b.category === current.category) - Number(a.category === current.category))
    .slice(0, limit);
}

export function shareLinks(post: BlogPost) {
  const url = encodeURIComponent(articleUrl(post.slug));
  return {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(post.title)}%20${url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  };
}