<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the replaceable home cover photo at `public/hero-jovenes.webp`; the explicit public path lets the owner replace it without editing the page.
- Keep blog entries in `src/data/posts.ts` as typed Markdown content; shared cards and article rendering allow new entries without page design changes.
- Keep blog category selection in URL search state so filtered views survive reload and browser navigation.
- Derive sitemap static entries from required route decisions and dynamic entries from complete public local collections; omit lastmod without authoritative page-specific change timestamps.
