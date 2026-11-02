// Chaque photo n'est utilisée qu'à un seul endroit du site.
import hero from "@/assets/hero-ingenieur.jpg";
import industrie from "@/assets/domaine-industrie.jpg";
import mines from "@/assets/domaine-mines.jpg";
import btp from "@/assets/domaine-btp.jpg";
import rh from "@/assets/domaine-rh.jpg";
import presentation from "@/assets/presentation-equipe.jpg";
import emploi from "@/assets/prestation-emploi.jpg";
import fabrication from "@/assets/prestation-fabrication.jpg";
import outillage from "@/assets/prestation-outillage.jpg";
import fParcAuto from "@/assets/formation-parc-auto.jpg";
import fGestion from "@/assets/formation-gestion-maintenance.jpg";
import fBudget from "@/assets/formation-budget.jpg";
import fPlanif from "@/assets/formation-planification.jpg";
import fMiniers from "@/assets/formation-equipements-miniers.jpg";
import fRisque from "@/assets/formation-risque.jpg";
import fPlanificateurs from "@/assets/formation-planificateurs.jpg";
import fMobiles from "@/assets/formation-equipements-mobiles.jpg";
import fCertif from "@/assets/formation-certification.jpg";
import fRh from "@/assets/formation-rh-atelier.jpg";
import fSenior from "@/assets/formation-planificateur-senior.jpg";
import mThermo from "@/assets/media-thermographie.jpg";
import mAlign from "@/assets/media-alignement.jpg";
import mHuile from "@/assets/media-analyse-huile.jpg";
import mSoudure from "@/assets/media-soudure.jpg";
import mSecours from "@/assets/media-secourisme.jpg";
import mCao from "@/assets/media-cao.jpg";
import vPromo from "@/assets/video-promotion.jpg";
import vPratique from "@/assets/video-pratique.jpg";
import vAudit from "@/assets/video-audit.jpg";
import avisMaintenance from "@/assets/avis-responsable-maintenance.jpg";
import avisRh from "@/assets/avis-responsable-rh.jpg";
import avisIngenieure from "@/assets/avis-ingenieure.jpg";

// Illustrative content only. Replace with approved customer quotes and portraits.
export const testimonials = [
  { name: "Responsable maintenance", designation: "Industrie", quote: "Une formation concrète, avec des méthodes directement applicables à l’organisation de la maintenance et au suivi de nos équipements.", src: avisMaintenance },
  { name: "Responsable ressources humaines", designation: "Formation des équipes", quote: "Des échanges de qualité et une approche adaptée aux besoins des équipes. Les cas pratiques rendent les notions accessibles et utiles au quotidien.", src: avisRh },
  { name: "Ingénieure planification", designation: "Mines et BTP", quote: "Les exercices de planification nous donnent des repères clairs pour mieux préparer les interventions et coordonner les équipes sur le terrain.", src: avisIngenieure },
];

export const images = { hero, presentation };

export const photos = [
  { src: mThermo, alt: "Thermographie infrarouge sur armoire électrique" },
  { src: mAlign, alt: "Alignement laser d'une pompe" },
  { src: mHuile, alt: "Analyse des huiles en laboratoire" },
  { src: mSoudure, alt: "Soudure en atelier de fabrication" },
  { src: mSecours, alt: "Formation sécurité et secourisme" },
  { src: mCao, alt: "Conception CAO-DAO" },
];

export const videos = [
  { src: vPromo, titre: "Promotion de techniciens formés" },
  { src: vPratique, titre: "Travaux pratiques en atelier" },
  { src: vAudit, titre: "Audit de maintenance sur site" },
];

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
  { titre: "Ressources humaines", texte: "Formation des cadres, développement des compétences.", img: rh },
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
  { slug: "offres-emploi", titre: "Offres d'emploi", texte: "Recrutement et placement de profils techniques et de gestion de la maintenance.", img: emploi },
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
  { slug: "gestion-parc-automobile", titre: "Gestion d'un parc automobile", date: "2025-01-04", domaine: "Transport", img: fParcAuto },
  { slug: "gestion-maintenance-janvier-2025", titre: "Gestion de la maintenance", date: "2025-01", domaine: "Management de la maintenance", img: fGestion },
  { slug: "aspects-economiques-maintenance", titre: "Aspects économiques de la maintenance, conception de budget", date: "2024-02-15", domaine: "Management de la maintenance", img: fBudget },
  { slug: "planification-ordonnancement", titre: "Planification et ordonnancement de la maintenance", date: "2024-02-07", domaine: "Maintenance industrielle", img: fPlanif },
  { slug: "fiabilite-equipements-miniers-btp", titre: "Fiabilité des équipements miniers et BTP", date: "2023-12-16", domaine: "Condition monitoring et fiabilité", img: fMiniers },
  { slug: "gestion-risque-iso-31000", titre: "Gestion du risque ISO 31000", date: "2023-12-13", domaine: "Qualité-Hygiène-Sécurité-Environnement", img: fRisque },
  { slug: "metiers-planificateurs", titre: "Métiers de planificateurs de maintenance", domaine: "Maintenance industrielle", img: fPlanificateurs },
  { slug: "fiabilite-equipements-mobiles", titre: "Fiabilité des équipements mobiles mines et BTP (techniciens fiabilistes)", domaine: "Condition monitoring et fiabilité", img: fMobiles },
  { slug: "pecb", titre: "PECB", domaine: "Qualité-Hygiène-Sécurité-Environnement", img: fCertif },
  { slug: "formation-rh", titre: "Formation RH", domaine: "Ressources humaines", img: fRh },
  { slug: "planificateur-senior", titre: "Planificateur senior", domaine: "Maintenance industrielle", img: fSenior },
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
