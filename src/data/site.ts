import industrie from "@/assets/industrie.jpg";
import mines from "@/assets/mines.jpg";
import btp from "@/assets/btp.jpg";
import formation from "@/assets/formation.jpg";
import fabrication from "@/assets/fabrication.jpg";
import outillage from "@/assets/outillage.jpg";

export const images = { industrie, mines, btp, formation, fabrication, outillage };

export const contact = {
  phones: ["(+226) 55 60 60 31", "(+226) 55 60 60 32"],
  phoneHrefs: ["tel:+22655606031", "tel:+22655606032"],
  email: "infos@sevenconsultingservices.com",
  address: "13 BP 15 Ouagadougou 13, Burkina Faso",
  whatsapp: "https://wa.me/22655606031",
  catalogue:
    "https://sevenconsultingservices.com/wp-content/uploads/2020/10/Catalogue-Formation-SevenConsulting-2021.pdf",
};

export const waLink = (msg: string) => `${contact.whatsapp}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { to: "/", label: "Accueil" },
  { to: "/presentation", label: "Présentation" },
  { to: "/prestations", label: "Prestations" },
  { to: "/formations", label: "Formations" },
  { to: "/mediatheque", label: "Médiathèque" },
  { to: "/contact", label: "Contact" },
] as const;

export const domaines = [
  { titre: "Industrie", texte: "Maintenance, fiabilité et gestion des actifs industriels.", img: industrie },
  { titre: "Mines", texte: "Fiabilité des équipements miniers et mobiles.", img: mines },
  { titre: "BTP", texte: "Équipements de chantier, parc automobile, transport.", img: btp },
  { titre: "Ressources humaines", texte: "Formation des cadres, développement des compétences.", img: formation },
];

export const methode = [
  { titre: "Diagnostic", texte: "Audit de vos systèmes de maintenance selon les normes mondiales de fiabilité." },
  { titre: "Formation", texte: "Transmission des compétences aux cadres, agents de maîtrise et techniciens." },
  { titre: "Mise en œuvre", texte: "Implantation de systèmes performants de fiabilité et de progiciels de maintenance." },
  { titre: "Suivi", texte: "Coaching des personnels techniques et de gestion de la maintenance." },
];

export const objectifs = [
  "Former sur les techniques de fiabilisation",
  "Concevoir des bases de données et applications",
  "Implanter des systèmes performants de fiabilité",
  "Coacher les personnels techniques et de gestion de la maintenance",
  "Développer les habiletés des cadres de la fiabilité et de la maintenance",
];

export const missionsIntro = [
  "Concevoir des bases de données de gestion des actifs",
  "Concevoir et implanter des progiciels de maintenance et de fiabilité",
  "Auditer les systèmes de maintenance selon les normes mondiales de fiabilité",
  "Former sur la fiabilité et les audits",
];

export const missions = [
  { titre: "Ingénierie de la fiabilité", items: ["Conception centrée sur la fiabilité", "Analyse de la criticité", "Analyse des causes profondes de bris"] },
  { titre: "Gestion de la condition des actifs", items: ["Alignement et équilibrage", "Lubrification", "Analyse des huiles", "Thermographie infrarouge", "Test moteur", "Contrôles non destructifs", "Ultrasons", "Analyse vibratoire", "Gestion des cycles de vie"] },
  { titre: "Exécution des tâches techniques", items: ["GMAO", "Pièces de rechange", "Planification et ordonnancement", "Maintenance préventive", "Élimination des défauts"] },
  { titre: "Leadership pour la fiabilité", items: ["Apprentissage par compétences", "Indicateurs de performance", "Excellence opérationnelle", "Stratégie et plan", "Gestion des risques", "Gestion du capital humain", "Prise de décision"] },
];

export type Prestation = { slug: string; titre: string; texte: string; img: string };
export const prestations: Prestation[] = [
  { slug: "offres-emploi", titre: "Offres d'emploi", texte: "Recrutement et placement de profils techniques et de gestion de la maintenance.", img: formation },
  { slug: "fabrication-mecanique", titre: "Fabrication mécanique", texte: "Fabrication de pièces et d'ensembles mécaniques pour l'industrie, les mines et le BTP.", img: fabrication },
  { slug: "outillage", titre: "Outillage", texte: "Fourniture et conseil en outillage pour la maintenance industrielle.", img: outillage },
];

export const domainesFormation = [
  "CAO-DAO",
  "Condition monitoring et fiabilité",
  "Maintenance industrielle",
  "Management de la maintenance",
  "Mécanique",
  "Qualité-Hygiène-Sécurité-Environnement",
  "Ressources humaines",
  "Sécurité et secourisme",
  "Transport",
];

export type Formation = { slug: string; titre: string; date?: string; domaine: string; img: string };
// Dates/durées manquantes : laissées vides, à compléter (« à confirmer »).
export const formations: Formation[] = [
  { slug: "gestion-parc-automobile", titre: "Gestion d'un parc automobile", date: "2025-01-04", domaine: "Transport", img: btp },
  { slug: "gestion-maintenance-janvier-2025", titre: "Gestion de la maintenance", date: "2025-01", domaine: "Management de la maintenance", img: industrie },
  { slug: "aspects-economiques-maintenance", titre: "Aspects économiques de la maintenance, conception de budget", date: "2024-02-15", domaine: "Management de la maintenance", img: formation },
  { slug: "planification-ordonnancement", titre: "Planification et ordonnancement de la maintenance", date: "2024-02-07", domaine: "Maintenance industrielle", img: industrie },
  { slug: "fiabilite-equipements-miniers-btp", titre: "Fiabilité des équipements miniers et BTP", date: "2023-12-16", domaine: "Condition monitoring et fiabilité", img: mines },
  { slug: "gestion-risque-iso-31000", titre: "Gestion du risque ISO 31000", date: "2023-12-13", domaine: "Qualité-Hygiène-Sécurité-Environnement", img: formation },
  { slug: "metiers-planificateurs", titre: "Métiers de planificateurs de maintenance", domaine: "Maintenance industrielle", img: industrie },
  { slug: "fiabilite-equipements-mobiles", titre: "Fiabilité des équipements mobiles mines et BTP (techniciens fiabilistes)", domaine: "Condition monitoring et fiabilité", img: mines },
  { slug: "pecb", titre: "PECB", domaine: "Qualité-Hygiène-Sécurité-Environnement", img: formation },
  { slug: "formation-rh", titre: "Formation RH", domaine: "Ressources humaines", img: formation },
  { slug: "planificateur-senior", titre: "Planificateur senior", domaine: "Maintenance industrielle", img: fabrication },
];

const mois = ["janv.", "fév.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
export function formatDate(d?: string) {
  if (!d) return "Date à confirmer";
  const [y, m, day] = d.split("-");
  return `${day ? Number(day) + " " : ""}${mois[Number(m) - 1]} ${y}`;
}

export const faq = [
  { q: "À qui s'adressent vos formations ?", r: "Aux cadres supérieurs, agents de maîtrise et techniciens de l'industrie, des mines, du BTP et des ressources humaines." },
  { q: "Où trouver le programme complet ?", r: "Le catalogue des formations est téléchargeable en PDF depuis la page Formations." },
  { q: "Proposez-vous des audits de maintenance ?", r: "Oui. Nous auditons les systèmes de maintenance selon les normes mondiales de fiabilité." },
  { q: "Comment s'inscrire à une session ?", r: "Depuis la page de chaque formation, via le bouton « S'inscrire », ou en nous contactant par téléphone ou WhatsApp." },
];

export const sujets = [
  "Inscription à une formation",
  "Demande de devis",
  "Audit de maintenance",
  "Fabrication mécanique-outillage",
  "Offre d'emploi",
  "Autre",
];
