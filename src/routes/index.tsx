import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Plus } from "lucide-react";
import { domaines, faq, formatDate, formations, methode, images } from "@/data/site";
import { btn, CtaBand, H2, Reveal, Section, Tag } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Fiabilité, maintenance et formation industrielle",
      "Cabinet d'étude et de formation à Ouagadougou : expertise industrielle, minière, BTP et ressources humaines.",
    ),
  component: Home,
});

function Wave() {
  return (
    <svg className="pointer-events-none absolute bottom-0 left-0 h-40 w-[200%] opacity-60" viewBox="0 0 2400 220" preserveAspectRatio="none" aria-hidden>
      <path
        className="wave-draw stroke-gold"
        fill="none"
        strokeWidth="2.5"
        d="M0 120 L150 120 L170 40 L195 200 L215 70 L235 150 L255 120 L420 120 Q450 60 480 120 T540 120 L600 120 L625 30 L655 210 L680 80 L705 140 L725 120 L900 120 Q930 70 960 120 T1020 120 L1080 120 L1105 50 L1130 190 L1150 120 L1200 120 L1350 120 L1370 40 L1395 200 L1415 70 L1435 150 L1455 120 L1620 120 Q1650 60 1680 120 T1740 120 L1800 120 L1825 30 L1855 210 L1880 80 L1905 140 L1925 120 L2100 120 Q2130 70 2160 120 T2220 120 L2280 120 L2305 50 L2330 190 L2350 120 L2400 120"
      />
      <path className="wave-draw stroke-ink-foreground/25" style={{ animationDelay: ".4s" }} fill="none" strokeWidth="1.5" d="M0 150 Q100 110 200 150 T400 150 T600 150 T800 150 T1000 150 T1200 150 T1400 150 T1600 150 T1800 150 T2000 150 T2200 150 T2400 150" />
    </svg>
  );
}

function Home() {
  const prochaines = formations.slice(0, 8);
  return (
    <>
      <div className="relative overflow-hidden bg-ink pb-48 pt-36 text-ink-foreground md:pt-44">
        <img src={images.industrie} alt="" width={1024} height={768} className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <Wave />
        <div className="container-site relative">
          <Reveal>
            <Tag onDark>Ouagadougou · Burkina Faso</Tag>
            <h1 className="max-w-[15ch] text-5xl font-extrabold md:text-7xl lg:text-[5.25rem]">Des équipements qui ne tombent pas en panne.</h1>
            <p className="my-7 max-w-[56ch] text-lg text-ink-muted">
              Cabinet d'étude et de formation en expertise, fiabilité et maintenance pour l'industrie, les mines, le BTP et les ressources humaines.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link to="/formations" className={btn.gold}>Voir les formations <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Section>
        <H2 lead="Seven Consulting accompagne cadres supérieurs, agents de maîtrise et techniciens avec une vision novatrice et une expertise de haut niveau.">
          Quatre domaines d'expertise
        </H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {domaines.map((d, i) => (
            <Reveal key={d.titre} delay={i * 90}>
              <div className="card-lift group h-full overflow-hidden rounded-lg border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.img} alt={d.titre} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{d.titre}</h3>
                  <p className="text-[15px] text-muted-foreground">{d.texte}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <H2 lead="Faites défiler pour découvrir les sessions.">Nos prochaines formations</H2>
        <div className="no-scrollbar mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {prochaines.map((f) => (
            <Link
              key={f.slug}
              to="/formations/$slug"
              params={{ slug: f.slug }}
              className="card-lift flex min-h-52 w-[min(320px,80%)] shrink-0 snap-start flex-col justify-between rounded-lg bg-gradient-to-br from-ink to-steel p-6 text-ink-foreground"
            >
              <span className="text-sm font-semibold text-gold">{formatDate(f.date)}</span>
              <div>
                <h3 className="text-xl font-bold">{f.titre}</h3>
                <p className="mt-1 text-sm text-ink-muted">{f.domaine}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/formations" className={`${btn.ink} mt-6`}>Toutes les formations</Link>
      </Section>

      <Section>
        <H2 lead="Une démarche simple, en quatre étapes.">Notre méthode</H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {methode.map((m, i) => (
            <Reveal key={m.titre} delay={i * 110}>
              <div className="card-lift h-full rounded-lg border bg-card p-7">
                <div className="mb-4 font-display text-4xl font-extrabold text-gold">0{i + 1}</div>
                <h3 className="mb-2 text-xl font-bold">{m.titre}</h3>
                <p className="text-[15px] text-muted-foreground">{m.texte}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <H2>Actualités récentes</H2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {formations.filter((f) => f.date).slice(0, 3).map((f, i) => (
            <Reveal key={f.slug} delay={i * 100}>
              <Link to="/formations/$slug" params={{ slug: f.slug }} className="card-lift group block h-full overflow-hidden rounded-lg border bg-background">
                <img src={f.img} alt="" loading="lazy" width={1024} height={768} className="aspect-video w-full object-cover" />
                <div className="p-6">
                  <span className="text-sm text-muted-foreground">{formatDate(f.date)}</span>
                  <h3 className="mt-1 text-lg font-bold">{f.titre}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <H2>Questions fréquentes</H2>
        <div className="mt-8 max-w-3xl divide-y rounded-lg border bg-card">
          {faq.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-muted-foreground">{f.r}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
