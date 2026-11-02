import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { OrbitBorderButton } from "@/components/ui/orbit-border-button";

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export function CircularTestimonials({ testimonials, autoplay = true }: { testimonials: Testimonial[]; autoplay?: boolean }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoplay);
  const [interacting, setInteracting] = useState(false);
  const reduced = useReducedMotion();
  const count = testimonials.length;
  useEffect(() => {
    if (!count || !playing || interacting || reduced) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % count);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [count, playing, interacting, reduced]);
  const active = testimonials[index % count];
  if (!active) return null;
  const move = (step: number) => {
    setPlaying(false);
    setIndex((current) => (current + step + count) % count);
  };
  return (
    <div className="testimonial-grid" role="region" aria-roledescription="carrousel" aria-label="Avis clients"
      tabIndex={0} onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}>
      <div className="testimonial-portraits" aria-hidden="true">
        {testimonials.map((item, position) => {
          const offset = (position - index + count) % count;
          const center = offset === 0;
          const left = !center && offset === count - 1;
          const visible = center || left || offset === 1;
          return <motion.img key={item.src} src={item.src} alt="" width={768} height={1024} loading="lazy"
            className="testimonial-portrait" initial={false}
            animate={{ x: center ? "0%" : left ? "-19%" : "19%", y: center ? "0%" : "-7%", scale: center ? 1 : 0.86, rotate: center ? 0 : left ? -9 : 9, opacity: visible ? 1 : 0, zIndex: center ? 3 : visible ? 2 : 1 }}
            transition={{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }} />;
        })}
      </div>
      <div className="flex min-w-0 flex-col justify-center">
        <span className="mb-5 text-sm font-semibold uppercase text-muted-foreground">Exemple d’avis · {index + 1} / {count}</span>
        <div className="testimonial-copy" aria-live={playing ? "off" : "polite"} aria-atomic="true">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, y: reduced ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -12 }} transition={{ duration: reduced ? 0 : 0.25 }}>
              <blockquote className="font-display text-2xl font-medium leading-relaxed md:text-3xl">« {active.quote} »</blockquote>
              <h3 className="mt-7 text-xl font-bold">{active.name}</h3>
              <p className="mt-2 text-muted-foreground">{active.designation}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-7 flex gap-3">
          <OrbitBorderButton variant="outline" size="icon" className="h-11 w-11 rounded-full" title="Avis précédent" aria-label="Avis précédent" onClick={() => move(-1)}><ArrowLeft /></OrbitBorderButton>
          <OrbitBorderButton variant="outline" size="icon" className="h-11 w-11 rounded-full" title={playing ? "Mettre les avis en pause" : "Reprendre les avis"} aria-label={playing ? "Mettre les avis en pause" : "Reprendre les avis"} onClick={() => setPlaying((current) => !current)}>{playing ? <Pause /> : <Play />}</OrbitBorderButton>
          <OrbitBorderButton variant="outline" size="icon" className="h-11 w-11 rounded-full" title="Avis suivant" aria-label="Avis suivant" onClick={() => move(1)}><ArrowRight /></OrbitBorderButton>
        </div>
      </div>
    </div>
  );
}