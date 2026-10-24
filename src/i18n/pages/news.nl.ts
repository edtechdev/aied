/**
 * Copy for the newsletter archive (`/aied/news`) and the chrome of one issue.
 *
 * The issues themselves are English-only: they live in content/en/newsletters, carry
 * no translations, and their markdown is the whole body. What a translated reader
 * gets here is the surrounding copy, so a Dutch visitor can see what the
 * newsletter is, when issues appeared, and how to get back to the list.
 */
import type { NewsStrings } from './news.en';

const nl: NewsStrings = {
  title: 'AIEd Research Weekly Update',
  description:
    'De wekelijkse nieuwsbrief van de kennisbank AI in het onderwijs: wat nieuw onderzoek betekent voor docenten, ontwikkelaars, onderzoekers en bestuurders.',
  introHtml:
    'Een wekelijks overzicht van de <a href="/aied/">kennisbank AI in het onderwijs</a> over wat onderzoek dat in de week is verschenen betekent voor docenten, ontwikkelaars, onderzoekers en bestuurders. Elk nummer linkt naar het artikel achter elke bewering, en het interne werk onderaan volgt wat er op de site zelf is veranderd.',
  feedsHtml:
    'Twee RSS-feeds brengen het. De <a href="/aied/news/rss.xml">feed van de nieuwsbrief</a> bevat alleen de nummers, één item per week. De <a href="/aied/rss.xml">feed van de kennisbank</a> bevat elke nieuwe artikelsamenvatting zodra die wordt toegevoegd, hetzelfde materiaal waaruit de nummers worden samengesteld, in een veel hoger tempo.',
  emailHtml:
    'Om elk nummer per e-mail te ontvangen, plak je de feed van de nieuwsbrief in <a href="https://blogtrottr.com/">Blogtrottr</a>, een gratis dienst van een derde partij die een feed volgens een schema dat je zelf kiest naar je inbox stuurt. De berichten bevatten advertenties.',
  linkedinHtml:
    'Je kunt de nieuwsbrief ook volgen op <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7519570283561852928">LinkedIn</a>, waar elk nummer als een LinkedIn-nieuwsbrief in je feed verschijnt.',
  empty: 'Er zijn nog geen nummers gepubliceerd.',
  allIssues: 'Alle nummers',
  otherIssuesAria: 'Andere nummers',
  issueLabel: 'Nummer {issue}',
};

export default nl;
