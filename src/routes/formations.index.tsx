import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { contact, domainesFormation, formatDate, formations } from "@/data/site";
import { btn, CtaBand, H2, PageHeader, Reveal, Section } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/formations/")({
  head: () => seo("Formations", "Formations programmées et 9 domaines : maintenance, fiabilité, QHSE, CAO-DAO, ressources humaines, transport."),
  component: Formations,
});

function Formations() {
  return (
    <>
      <PageHeader tag="Formations" title="Développer les compétences qui fiabilisent." lead="Sessions programmées et catalogue complet, pour techniciens, agents de maîtrise et cadres." />
      <Section>
        <a href={contact.catalogue} target="_blank" rel="noopener noreferrer" className={btn.gold}>
          <Download className="h-4 w-4" /> Télécharger le catalogue PDF
        </a>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <H2>Formations programmées</H2>
            <ol className="mt-8 border-l-2 border-gold pl-6">
              {formations.map((f) => (
                <li key={f.slug} className="relative mb-6">
                  <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-gold" />
                  <Link to="/formations/$slug" params={{ slug: f.slug }} className="group block">
                    <span className="block text-sm text-muted-foreground">{formatDate(f.date)}</span>
                    <b className="font-display text-lg group-hover:text-gold">{f.titre}</b>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <H2>9 domaines de formation</H2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {domainesFormation.map((d, i) => (
                <Reveal key={d} delay={i * 50}>
                  <div className="card-lift h-full rounded-lg border bg-card p-5">
                    <span className="font-display text-sm font-bold text-gold">0{i + 1}</span>
                    <p className="mt-1 font-semibold">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
