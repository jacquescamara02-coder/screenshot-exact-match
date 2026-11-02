import { AnimatedTitle } from "@/components/ui/text-rotate";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { images, missions, missionsIntro, objectifs } from "@/data/site";
import { CtaBand, PageHeader, Reveal, Section } from "@/components/site/ui";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/presentation")({
  head: () => seo("Présentation", "Qui sommes-nous, nos objectifs et nos missions : fiabilité, maintenance et gestion des actifs."),
  component: Presentation,
});

const tabs = ["Qui sommes-nous ?", "Nos objectifs", "Nos missions"] as const;

function Presentation() {
  const [tab, setTab] = useState<(typeof tabs)[number]>(tabs[0]);
  return (
    <>
      <PageHeader tag="Présentation" title="Une expertise de haut niveau, au service de vos équipes." />
      <Section>
        <div role="tablist" className="mb-10 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
              className={cn("rounded-full border px-5 py-2.5 font-semibold transition-colors", tab === t ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-gold")}>
              {t}
            </button>
          ))}
        </div>

        {tab === "Qui sommes-nous ?" && (
          <Reveal className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4 text-lg text-muted-foreground">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl"><AnimatedTitle>Qui sommes-nous ?</AnimatedTitle></h2>
              <p>Seven Consulting est un cabinet d'étude et de formation qui excelle dans l'expertise, la formation et la consultation industrielle, minière, BTP et en ressources humaines.</p>
              <p>Entouré de spécialistes, le cabinet porte une vision novatrice et une expertise de haut niveau.</p>
              <p>Il transmet aux cadres supérieurs, agents de maîtrise et techniciens les compétences et savoirs utiles au développement personnel et collectif.</p>
            </div>
            <img src={images.presentation} alt="Session de formation Seven Consulting" loading="lazy" width={1024} height={768} className="rounded-lg" />
          </Reveal>
        )}

        {tab === "Nos objectifs" && (
          <div className="grid gap-4 md:grid-cols-2">
            {objectifs.map((o, i) => (
              <Reveal key={o} delay={i * 70}>
                <div className="card-lift flex h-full items-start gap-4 rounded-lg border bg-card p-6">
                  <span className="font-display text-2xl font-extrabold text-gold">0{i + 1}</span>
                  <p className="text-lg font-medium">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {tab === "Nos missions" && (
          <>
            <ul className="mb-10 grid gap-3 md:grid-cols-2">
              {missionsIntro.map((m) => (
                <li key={m} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-gold" />{m}</li>
              ))}
            </ul>
            <div className="grid gap-5 md:grid-cols-2">
              {missions.map((m, i) => (
                <Reveal key={m.titre} delay={i * 90}>
                  <div className="card-lift h-full rounded-lg border bg-card p-7">
                    <h3 className="mb-3 text-xl font-bold">{i + 1}. {m.titre}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {m.items.map((it) => <li key={it} className="rounded-full bg-muted px-3 py-1 text-sm">{it}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </Section>
      <CtaBand />
    </>
  );
}
