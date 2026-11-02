import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { formations, formatDate } from "@/data/site";
import { Button } from "@/components/ui/button";

export function FormationCarousel() {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [playing, setPlaying] = useState(true);
  const [interacting, setInteracting] = useState(false);
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSelected(api.selectedScrollSnap());
      setSnaps(api.scrollSnapList());
    };
    update();
    api.on("select", update).on("reInit", update);
    return () => { api.off("select", update).off("reInit", update); };
  }, [api]);

  useEffect(() => {
    if (!api || !playing || interacting || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) api.scrollNext();
    }, 2500);
    return () => window.clearInterval(timer);
  }, [api, playing, interacting]);

  return (
    <div role="region" aria-roledescription="carrousel" aria-label="Nos prochaines formations"
      onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false); }}>
      <div ref={ref} className="mt-9 overflow-hidden">
        <div className="-ml-5 flex touch-pan-y">
          {formations.map((f, i) => (
            <div key={f.slug} role="group" aria-roledescription="diapositive" aria-label={`${i + 1} sur ${formations.length}`}
              className="min-w-0 flex-[0_0_88%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <Link to="/formations/$slug" params={{ slug: f.slug }}
                className="card-lift my-1 flex min-h-64 flex-col justify-between gap-6 rounded-lg bg-gradient-to-br from-ink to-steel p-6 text-ink-foreground">
                <span className="text-sm font-semibold text-gold">{formatDate(f.date)}</span>
                <div>
                  <h3 className="text-xl font-bold">{f.titre}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{f.domaine}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gold" aria-hidden />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1" aria-label="Position du carrousel">
          {snaps.map((_, i) => (
            <Button key={i} variant="ghost" size="icon" aria-label={`Afficher la formation ${i + 1}`}
              aria-pressed={selected === i} onClick={() => api?.scrollTo(i)} className="h-7 w-5">
              <span className={`h-1.5 w-3 rounded-full ${selected === i ? "bg-gold" : "bg-muted-foreground/35"}`} />
            </Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" title="Formation précédente" aria-label="Formation précédente" onClick={() => api?.scrollPrev()}><ArrowLeft /></Button>
          <Button variant="outline" size="icon" title={playing ? "Mettre en pause" : "Reprendre le défilement"} aria-label={playing ? "Mettre en pause" : "Reprendre le défilement"} onClick={() => setPlaying((p) => !p)}>{playing ? <Pause /> : <Play />}</Button>
          <Button variant="outline" size="icon" title="Formation suivante" aria-label="Formation suivante" onClick={() => api?.scrollNext()}><ArrowRight /></Button>
        </div>
      </div>
    </div>
  );
}