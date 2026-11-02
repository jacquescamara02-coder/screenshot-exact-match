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
- Site content lives in src/data/site.ts until the admin/Cloud phase replaces it with database tables (single source for pages + sitemap).
- Training carousel uses Embla for looping, touch gestures and navigation; automatic advancement pauses on interaction and respects reduced motion.
- Shared page headers include history-aware return navigation with parent-page fallback so direct arrivals never leave the site.
