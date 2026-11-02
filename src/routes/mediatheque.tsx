import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { photos, videos } from "@/data/site";
import { PageHeader, Reveal, Section, H2 } from "@/components/site/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/mediatheque")({
  head: () => seo("Médiathèque", "Photothèque et vidéothèque des formations et interventions de Seven Consulting."),
  component: Mediatheque,
});


function Mediatheque() {
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % photos.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [idx]);

  return (
    <>
      <PageHeader tag="Médiathèque" title="En images." />
      <Section>
        <H2>Photothèque</H2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={p.alt} delay={i * 60}>
              <button onClick={() => setIdx(i)} className="card-lift block w-full overflow-hidden rounded-lg border" aria-label={`Agrandir : ${p.alt}`}>
                <img src={p.src} alt={p.alt} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
              </button>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section alt>
        <H2 lead="Les vidéos de nos sessions seront publiées ici.">Vidéothèque</H2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {videos.map((v) => (
            <div key={v.titre} className="relative overflow-hidden rounded-lg border">
              <img src={v.src} alt={v.titre} loading="lazy" width={1088} height={608} className="aspect-video w-full object-cover" />
              <div className="absolute inset-0 grid place-items-center bg-ink/50 text-ink-foreground">
                <div className="text-center"><PlayCircle className="mx-auto h-12 w-12" /><p className="mt-2 text-sm font-semibold">{v.titre}</p><p className="text-xs text-ink-muted">Bientôt disponible</p></div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {idx !== null && (
        <div role="dialog" aria-modal className="fixed inset-0 z-[70] grid place-items-center bg-ink/95 p-4" onClick={() => setIdx(null)}>
          <img src={photos[idx]?.src} alt={photos[idx]?.alt} className="max-h-[85vh] max-w-full rounded-lg" onClick={(e) => e.stopPropagation()} />
          <button aria-label="Fermer" className="absolute right-5 top-5 text-ink-foreground"><X className="h-8 w-8" /></button>
          <button aria-label="Précédente" className="absolute left-4 text-ink-foreground" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + photos.length) % photos.length); }}><ChevronLeft className="h-10 w-10" /></button>
          <button aria-label="Suivante" className="absolute right-4 text-ink-foreground" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % photos.length); }}><ChevronRight className="h-10 w-10" /></button>
        </div>
      )}
    </>
  );
}
