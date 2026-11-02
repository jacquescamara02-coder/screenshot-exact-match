import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUp, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { contact, nav, waLink } from "@/data/site";
import { btn, inputCls, useScrolled } from "./ui";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-seven-consulting.jpg";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-foreground/10 bg-ink/85 backdrop-blur-md">
      <div className="container-site flex h-[68px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display text-xl font-extrabold text-ink-foreground" onClick={() => setOpen(false)}>
          <img src={logo} alt="Seven Consulting" className="h-[52px] w-[158px] rounded-sm object-contain" />
        </Link>
        <nav
          className={cn(
            "absolute inset-x-0 top-full flex-col gap-1 bg-ink px-5 pb-5 pt-3 md:static md:flex md:flex-row md:bg-transparent md:p-0",
            open ? "flex" : "hidden",
          )}
        >
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3.5 py-2 text-[15px] font-medium text-ink-muted transition-colors hover:text-ink-foreground"
              activeProps={{ className: "bg-ink-foreground/10 text-ink-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="text-ink-foreground md:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };
  return (
    <footer className="bg-ink pb-8 pt-16 text-ink-muted">
      <div className="container-site grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="mb-3 inline-flex"><img src={logo} alt="Seven Consulting" className="h-[70px] w-[210px] max-w-full rounded-sm object-contain" loading="lazy" /></Link>
          <p className="text-sm">Cabinet d'étude et de formation : expertise industrielle, minière, BTP et ressources humaines.</p>
        </div>
        <div>
          <div className="mb-3 font-display text-lg font-bold text-ink-foreground">Navigation</div>
          <ul className="space-y-1.5 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <div className="mb-3 font-display text-lg font-bold text-ink-foreground">Contact</div>
          {contact.phones.map((p, i) => (
            <a key={p} href={contact.phoneHrefs[i]} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4" />{p}</a>
          ))}
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 break-all hover:text-gold"><Mail className="h-4 w-4 shrink-0" />{contact.email}</a>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" />{contact.address}</p>
        </div>
        <div>
          <div className="mb-3 font-display text-lg font-bold text-ink-foreground">Newsletter</div>
          {sent ? (
            <p className="text-sm text-gold">Merci, votre inscription est enregistrée.</p>
          ) : (
            <form onSubmit={submit} className="grid gap-2">
              <input type="email" required placeholder="Votre email" aria-label="Email" className={inputCls} />
              <button className={btn.gold} disabled={loading}>{loading ? "Envoi…" : "S'abonner"}</button>
            </form>
          )}
        </div>
      </div>
      <div className="container-site mt-12 border-t border-ink-foreground/10 pt-6 text-sm">
        © {new Date().getFullYear()} Seven Consulting · Ouagadougou, Burkina Faso
      </div>
    </footer>
  );
}

export function Floaters() {
  const show = useScrolled(500);
  return (
    <div className="fixed bottom-5 right-5 z-[60] grid gap-3">
      <button
        aria-label="Remonter en haut"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-opacity duration-300",
          show ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ArrowUp />
      </button>
      <a
        href={waLink("Bonjour Seven Consulting, je souhaite avoir des informations sur vos formations et prestations.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp"
        className="wa-pulse grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-ink-foreground shadow-lg"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
