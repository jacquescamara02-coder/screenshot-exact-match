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
- Button orbit borders are shared through the global CSS and site/Button classes; use the local OrbitBorderButton wrapper for new controls to preserve colors without requiring Originkit authentication.
- The circular testimonial component uses Framer Motion with scoped keyboard controls and reduced-motion-aware autoplay; testimonial content belongs to the site's central data source.

- Large page and section headings use the shared AnimatedTitle/TextRotate primitive with the existing Framer Motion dependency, preserving source wording and stable dimensions.
- The logo is a repo-bundled file (`src/assets/logo-seven-consulting.jpg`) imported directly in the header and footer; never reference external or CDN-hosted logo URLs — they break outside Lovable (Cloudflare Workers deploys). Global semantic tokens drive the brand palette, with separate accent foreground for accessible button and title contrast.
