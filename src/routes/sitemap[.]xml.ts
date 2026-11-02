import { createFileRoute } from "@tanstack/react-router";
import { formations, prestations } from "@/data/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = ["/", "/presentation", "/prestations", "/formations", "/mediatheque", "/contact",
          ...prestations.map((p) => `/prestations/${p.slug}`), ...formations.map((f) => `/formations/${f.slug}`)];
        const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${origin}${p}</loc></url>`).join("")}</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
