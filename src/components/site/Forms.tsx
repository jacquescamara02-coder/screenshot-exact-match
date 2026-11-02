import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { sujets, waLink } from "@/data/site";
import { btn, inputCls } from "./ui";

type Field = { name: string; label: string; type?: string; required?: boolean; options?: string[]; textarea?: boolean; accept?: string };

export function SmartForm({ fields, submitLabel, waIntro, defaults = {} }: { fields: Field[]; submitLabel: string; waIntro: string; defaults?: Record<string, string> }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<Record<string, string> | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    const errs: Record<string, string> = {};
    for (const f of fields) {
      const v = fd.get(f.name);
      const s = typeof v === "string" ? v.trim() : v instanceof File ? v.name : "";
      data[f.name] = s;
      if (f.required && !s) errs[f.name] = "Champ requis";
      else if (f.type === "email" && s && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) errs[f.name] = "Email invalide";
      else if (f.type === "tel" && s && !/^[+\d\s().-]{8,20}$/.test(s)) errs[f.name] = "Numéro invalide";
      else if (s.length > 2000) errs[f.name] = "Texte trop long";
    }
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(data);
    }, 800);
  };

  if (done) {
    const msg = `${waIntro}\n` + fields.filter((f) => f.type !== "file").map((f) => `${f.label} : ${done[f.name]}`).join("\n");
    return (
      <div className="rounded-lg border border-success/40 bg-success/10 p-6">
        <CheckCircle2 className="mb-3 h-8 w-8 text-success" />
        <p className="font-semibold">Merci, votre demande a bien été enregistrée.</p>
        <p className="mt-1 text-sm text-muted-foreground">Nous revenons vers vous rapidement. Vous pouvez aussi poursuivre l'échange sur WhatsApp.</p>
        <a href={waLink(msg)} target="_blank" rel="noopener noreferrer" className={`${btn.ink} mt-5`}>Continuer sur WhatsApp</a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      {fields.map((f) => (
        <div key={f.name} className="grid gap-1.5">
          <label htmlFor={f.name} className="text-sm font-semibold">{f.label}{f.required && " *"}</label>
          {f.options ? (
            <select id={f.name} name={f.name} defaultValue={defaults[f.name] ?? ""} className={inputCls}>
              <option value="" disabled>Choisir…</option>
              {f.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          ) : f.textarea ? (
            <textarea id={f.name} name={f.name} rows={5} maxLength={2000} defaultValue={defaults[f.name]} className={inputCls} />
          ) : (
            <input id={f.name} name={f.name} type={f.type ?? "text"} accept={f.accept} maxLength={200} defaultValue={f.type === "file" ? undefined : defaults[f.name]} className={inputCls} />
          )}
          {errors[f.name] && <span className="text-sm text-destructive">{errors[f.name]}</span>}
        </div>
      ))}
      <button className={btn.gold} disabled={loading}>
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading ? "Envoi en cours…" : submitLabel}
      </button>
    </form>
  );
}

const base: Field[] = [
  { name: "nom", label: "Nom complet", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "telephone", label: "Téléphone", type: "tel" },
];

export const ContactForm = ({ sujet }: { sujet?: string }) => (
  <SmartForm
    submitLabel="Envoyer le message"
    waIntro="Bonjour Seven Consulting,"
    defaults={sujet ? { sujet } : {}}
    fields={[...base, { name: "sujet", label: "Sujet", options: sujets, required: true }, { name: "message", label: "Message", textarea: true, required: true }]}
  />
);

export const InscriptionForm = ({ formation }: { formation: string }) => (
  <SmartForm
    submitLabel="Envoyer mon inscription"
    waIntro={`Bonjour, je souhaite m'inscrire à la formation « ${formation} ».`}
    fields={[...base, { name: "entreprise", label: "Entreprise / organisation" }, { name: "fonction", label: "Fonction" }, { name: "message", label: "Message", textarea: true }]}
  />
);

export const CandidatureForm = () => (
  <SmartForm
    submitLabel="Envoyer ma candidature"
    waIntro="Bonjour, je vous adresse ma candidature."
    fields={[...base, { name: "poste", label: "Poste visé", required: true }, { name: "cv", label: "CV (PDF)", type: "file", accept: ".pdf,.doc,.docx", required: true }, { name: "message", label: "Lettre de motivation", textarea: true }]}
  />
);
