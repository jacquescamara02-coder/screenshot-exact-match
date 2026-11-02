import { createFileRoute, notFound } from "@tanstack/react-router";
import { prestations } from "@/data/site";
import { PageHeader, Section } from "@/components/site/ui";
import { CandidatureForm, ContactForm } from "@/components/site/Forms";

export const Route = createFileRoute("/prestations/$slug")({
  loader: ({ params }) => {
    const p = prestations.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.titre} · Seven Consulting` },
          { name: "description", content: loaderData.texte },
          { property: "og:title", content: `${loaderData.titre} · Seven Consulting` },
          { property: "og:description", content: loaderData.texte },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Prestation introuvable" }, { name: "robots", content: "noindex" }],
  }),
  component: Detail,
});

function Detail() {
  const p = Route.useLoaderData();
  const emploi = p.slug === "offres-emploi";
  return (
    <>
      <PageHeader tag="Prestations" title={p.titre} lead={p.texte} />
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <img src={p.img} alt={p.titre} width={1024} height={768} className="rounded-lg" />
            {emploi && (
              <div className="mt-8 rounded-lg border bg-card p-6">
                <h2 className="mb-2 text-xl font-bold">Offres en cours</h2>
                <p className="text-muted-foreground">Aucune offre publiée pour le moment. Vous pouvez déposer une candidature spontanée.</p>
              </div>
            )}
          </div>
          <div className="rounded-lg border bg-card p-7">
            <h2 className="mb-5 text-2xl font-bold">{emploi ? "Déposer une candidature" : "Demander un devis"}</h2>
            {emploi ? <CandidatureForm /> : <ContactForm sujet={p.slug === "outillage" || p.slug === "fabrication-mecanique" ? "Fabrication mécanique-outillage" : "Demande de devis"} />}
          </div>
        </div>
      </Section>
    </>
  );
}
