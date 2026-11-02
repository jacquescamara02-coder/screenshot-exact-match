import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";
import { PageHeader, Section } from "@/components/site/ui";
import { ContactForm } from "@/components/site/Forms";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Contactez Seven Consulting à Ouagadougou : formations, devis, audits de maintenance."),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader tag="Contact" title="Parlons de votre projet." lead="Formation, devis, audit de maintenance : nous vous répondons rapidement." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-lg border bg-card p-6">
              <Phone className="mb-2 h-5 w-5 text-gold" />
              {contact.phones.map((p, i) => <a key={p} href={contact.phoneHrefs[i]} className="block font-semibold hover:text-gold">{p}</a>)}
            </div>
            <div className="rounded-lg border bg-card p-6">
              <Mail className="mb-2 h-5 w-5 text-gold" />
              <a href={`mailto:${contact.email}`} className="break-all font-semibold hover:text-gold">{contact.email}</a>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <MapPin className="mb-2 h-5 w-5 text-gold" />
              <p className="font-semibold">{contact.address}</p>
            </div>
            <iframe
              title="Carte de Ouagadougou"
              src="https://www.google.com/maps?q=Ouagadougou,Burkina+Faso&output=embed"
              loading="lazy"
              className="h-72 w-full rounded-lg border"
            />
          </div>
          <div className="rounded-lg border bg-card p-7">
            <h2 className="mb-5 text-2xl font-bold">Envoyer un message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
