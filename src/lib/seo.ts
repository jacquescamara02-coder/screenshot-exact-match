export const seo = (title: string, description: string) => ({
  meta: [
    { title: `${title} · Seven Consulting` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} · Seven Consulting` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
