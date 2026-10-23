import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPostDate, type BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      <Link to="/blog/$slug" params={{ slug: post.slug }} className="blog-card-cover" aria-label={post.title}>
        <img src={post.coverImage} alt={post.coverAlt} width={1200} height={630} loading="lazy" />
      </Link>
      <div className="blog-card-body">
        <span className="blog-category">{post.category}</span>
        <h2><Link to="/blog/$slug" params={{ slug: post.slug }}>{post.title}</Link></h2>
        <p>{post.description}</p>
        <div className="blog-meta"><time dateTime={post.date}>{formatPostDate(post.date)}</time><span><Clock3 aria-hidden="true" />{post.readingTime} min</span></div>
        <Button asChild variant="link" className="blog-read-link">
          <Link to="/blog/$slug" params={{ slug: post.slug }} aria-label={`Leer más: ${post.title}`}>Leer más <ArrowRight aria-hidden="true" /></Link>
        </Button>
      </div>
    </article>
  );
}