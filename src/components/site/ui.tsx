import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none";
export const btn = {
  gold: cn(btnBase, "bg-gold text-ink hover:shadow-[0_10px_30px_-10px_var(--gold)]"),
  ghost: cn(btnBase, "border border-ink-foreground/35 text-ink-foreground hover:bg-ink-foreground/10"),
  ink: cn(btnBase, "bg-primary text-primary-foreground"),
  outline: cn(btnBase, "border border-border text-foreground hover:border-gold"),
};

export function Tag({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span className={cn("mb-3 inline-block rounded-full px-3 py-1 text-[13px] font-semibold", onDark ? "bg-gold/15 text-gold" : "bg-gold/15 text-foreground")}>
      {children}
    </span>
  );
}

export function PageHeader({ tag, title, lead }: { tag?: string; title: string; lead?: string }) {
  return (
    <div className="bg-gradient-to-br from-ink to-steel pb-16 pt-36 text-ink-foreground">
      <div className="container-site">
        {tag && <Tag onDark>{tag}</Tag>}
        <h1 className="max-w-[20ch] text-4xl font-extrabold md:text-6xl">{title}</h1>
        {lead && <p className="mt-4 max-w-[60ch] text-lg text-ink-muted">{lead}</p>}
      </div>
    </div>
  );
}

export function Section({ children, alt, className }: { children: ReactNode; alt?: boolean; className?: string }) {
  return (
    <section className={cn("py-16 md:py-24", alt && "bg-card", className)}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export function H2({ children, lead }: { children: ReactNode; lead?: string }) {
  return (
    <Reveal>
      <h2 className="mb-4 max-w-[22ch] text-3xl font-bold md:text-5xl">{children}</h2>
      {lead && <p className="max-w-[62ch] text-lg text-muted-foreground">{lead}</p>}
    </Reveal>
  );
}

export function CtaBand() {
  return (
    <Section>
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-7 rounded-[1.5rem] bg-ink px-7 py-10 text-ink-foreground md:px-12 md:py-14">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Un projet de fiabilisation ?</h2>
            <p className="mt-2 text-ink-muted">Parlons de vos équipements, de vos équipes et de vos objectifs.</p>
          </div>
          <Link to="/contact" className={btn.gold}>Nous contacter</Link>
        </div>
      </Reveal>
    </Section>
  );
}

export function useScrolled(threshold: number) {
  const [s, setS] = useState(false);
  useEffect(() => {
    const on = () => setS(window.scrollY > threshold);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [threshold]);
  return s;
}

export const inputCls =
  "w-full rounded-md border border-input bg-card px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold";
