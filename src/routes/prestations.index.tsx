import { AnimatedTitle } from "@/components/ui/text-rotate";
import { createFileRoute, Link } from "@tanstack/react-router";
import { prestations } from "@/data/site";
import { btn, CtaBand, PageHeader, Reveal, Section } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/prestations/")({
  head: () => seo("Prestations", "Offres d'emploi, fabrication mécanique et outillage pour l'industrie, les mines et le BTP."),
  component: Prestations,
});

function Prestations() {
  return (
    <>
      <PageHeader tag="Prestations" title="Au-delà de la formation." lead="Recrutement, fabrication mécanique et outillage pour vos sites." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {prestations.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <div className="card-lift group flex h-full flex-col overflow-hidden rounded-lg border bg-card">
                <img src={p.img} alt={p.titre} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="mb-2 text-2xl font-bold"><AnimatedTitle>{p.titre}</AnimatedTitle></h2>
                  <p className="mb-6 flex-1 text-muted-foreground">{p.texte}</p>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/prestations/$slug" params={{ slug: p.slug }} className={btn.ink}>
                      {p.slug === "offres-emploi" ? "Voir et postuler" : "Demander un devis"}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
