/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The canonical issues live in content/en/newsletters; the French translations
 * live in content/fr/newsletters and get the same archive chrome and localized
 * feed. This module supplies the words around those translated issues.
 */
import type { NewsStrings } from './news.en';

const fr: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    "La newsletter hebdomadaire de la base de connaissances sur l'IA en éducation : ce que la recherche nouvelle signifie pour les enseignants, les développeurs, les chercheurs et les administrateurs.",
  introHtml:
    "Un point hebdomadaire depuis la <a href=\"/aied/\">base de connaissances sur l'IA en éducation</a>, sur ce que la recherche publiée au cours de la semaine signifie pour les enseignants, les développeurs, les chercheurs et les administrateurs. Chaque numéro relie l'article derrière chaque affirmation, et les travaux internes en bas suivent ce qui a changé sur le site lui-même.",
  feedsHtml:
    "Deux flux RSS la portent. Le <a href=\"/aied/fr/news/rss.xml\">flux de la newsletter en français</a> ne contient que les numéros traduits, une entrée par semaine. Le <a href=\"/aied/rss.xml\">flux de la base de connaissances</a> contient chaque nouveau résumé d'article dès son ajout, soit la même matière que celle dont les numéros sont tirés, à un rythme bien plus élevé.",
  emailHtml:
    "Pour recevoir chaque numéro par courriel, collez le flux de la newsletter dans <a href=\"https://blogtrottr.com/\">Blogtrottr</a>, un service tiers gratuit qui envoie un flux dans votre boîte de réception au rythme que vous choisissez. Ses messages contiennent de la publicité.",
  linkedinHtml:
    "Vous pouvez aussi la suivre sur <a href=\"https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928\">LinkedIn</a>, où chaque numéro paraît en newsletter LinkedIn dans votre fil.",
  empty: "Aucun numéro n'a encore été publié.",
  allIssues: 'Tous les numéros',
  otherIssuesAria: 'Autres numéros',
  issueLabel: 'Numéro {issue}',
};

export default fr;
