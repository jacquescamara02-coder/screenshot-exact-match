import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Vertical text animation adapted from the supplied reference. */
export function TextRotate({ texts, rotationInterval = 3000, mainClassName }: {
  texts: string[]; rotationInterval?: number; mainClassName?: string;
}) {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced || !visible || texts.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setStep((current) => current + 1);
    }, rotationInterval);
    return () => window.clearInterval(timer);
  }, [reduced, visible, texts.length, rotationInterval]);
  return <span ref={ref} className={cn("title-rotate", mainClassName)}>
    <span className="sr-only">{texts[0]}</span>
    <span aria-hidden="true" className="title-rotate-sizer">{texts[0]}</span>
    <AnimatePresence initial={false}>
      <motion.span aria-hidden="true" key={step} className="title-rotate-layer"
        initial={{ y: reduced ? 0 : "110%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} exit={{ y: reduced ? 0 : "-110%", opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}>
        {texts[step % texts.length] ?? ""}
      </motion.span>
    </AnimatePresence>
  </span>;
}

export function AnimatedTitle({ children }: { children: string }) {
  const words = children.trim().split(/\s+/);
  // Preserve the wording; animate the final meaningful word, not punctuation.
  const punctuation = /^[?!]$/.test(words.at(-1) ?? "") ? words.pop() : "";
  const last = words.pop() ?? "";
  return <>{words.length > 0 && `${words.join(" ")} `}<TextRotate texts={[last, last]} />{punctuation && ` ${punctuation}`}</>;
}
