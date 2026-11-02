import { AnimatedTitle } from "@/components/ui/text-rotate";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { formatDate, formations } from "@/data/site";
import { PageHeader, Section } from "@/components/site/ui";
import { InscriptionForm } from "@/components/site/Forms";

export const Route = createFileRoute("/formations/$slug")({
  loader: ({ params }) => {
    const f = formations.find((x) => x.slug === params.slug);
    if (!f) throw notFound();
    return f;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.titre} · Formation Seven Consulting` },
          { name: "description", content: `Formation ${loaderData.titre} (${loaderData.domaine}) à Ouagadougou.` },
          { property: "og:title", content: `${loaderData.titre} · Seven Consulting` },
          { property: "og:description", content: `Formation ${loaderData.titre} (${loaderData.domaine}).` },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Formation introuvable" }, { name: "robots", content: "noindex" }],
  }),
  component: Detail,
});

function Detail() {
  const f = Route.useLoaderData();
  const rows = [
    ["Date", formatDate(f.date)],
    ["Domaine", f.domaine],
    ["Durée", "À confirmer"],
    ["Lieu", "Ouagadougou"],
    ["Tarif", "Sur demande"],
  ];
  return (
    <>
      <PageHeader tag={f.domaine} title={f.titre} />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <img src={f.img} alt="" width={1024} height={768} className="rounded-lg" />
            <dl className="mt-8 divide-y rounded-lg border bg-card">
              {rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 p-4"><dt className="text-muted-foreground">{k}</dt><dd className="text-right font-semibold">{v}</dd></div>
              ))}
            </dl>
          </div>
          <div id="inscription" className="rounded-lg border bg-card p-7">
            <h2 className="mb-5 text-2xl font-bold"><AnimatedTitle>S'inscrire</AnimatedTitle></h2>
            <InscriptionForm formation={f.titre} />
          </div>
        </div>
      </Section>
    </>
  );
}
