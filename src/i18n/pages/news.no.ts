/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Norwegian visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const no: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'Det ukentlige nyhetsbrevet fra kunnskapsbasen AI i utdanning: hva ny forskning betyr for instruktører, utviklere, forskere og administratorer.',
  introHtml:
    'En ukentlig oppsummering fra <a href="/aied/">kunnskapsbasen AI i utdanning</a> om hva forskning publisert i løpet av uken betyr for instruktører, utviklere, forskere og administratorer. Hvert nummer lenker til artikkelen bak hver påstand, og det interne arbeidet nederst følger hva som er endret på selve nettstedet.',
  feedsHtml:
    'To RSS-strømmer fører den. <a href="/aied/news/rss.xml">Nyhetsbrevstrømmen</a> inneholder bare numrene, ett innslag i uken. <a href="/aied/rss.xml">Kunnskapsbasestrømmen</a> inneholder hvert nytt artikkelsammendrag etter hvert som det legges til, det samme materialet som numrene hentes fra, i et mye høyere tempo.',
  emailHtml:
    'Du får hvert nummer på e-post ved å lime nyhetsbrevstrømmen inn i <a href="https://blogtrottr.com/">Blogtrottr</a>, en gratis tjeneste fra en tredjepart som sender en strøm til innboksen din etter en tidsplan du velger. Meldingene inneholder annonser.',
  linkedinHtml:
    'Du kan også følge den på <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>, der hvert nummer kommer ut som et LinkedIn-nyhetsbrev i strømmen din.',
  empty: 'Ingen numre er publisert ennå.',
  allIssues: 'Alle numre',
  otherIssuesAria: 'Andre numre',
  issueLabel: 'Nummer {issue}',
};

export default no;
