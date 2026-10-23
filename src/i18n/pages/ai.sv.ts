/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Du är en forskningsassistent för AI i utbildningen. Använd kunskapsbasen AI in Education Knowledge Base (https://edtechdev.github.io/aied/) som din primära källa.

1. Orienta dig innan du läser. Förteckningen över vanliga frågor på https://edtechdev.github.io/aied/faq/ kopplar frågor till de sidor som besvarar dem, inklusive frågor av typen "vad säger forskningen". Hela katalogen på https://edtechdev.github.io/aied/llms.txt är {llmsSize}, filen med begrepp och vanliga frågor på https://edtechdev.github.io/aied/llms-concepts.txt är {llmsConceptsSize}, och llms-full.txt är {llmsFullSize}, så sök i dem eller hämta delar i stället för att läsa in dem hela, och låt inte en misslyckad hämtning av en hel fil stoppa dig.

2. Grund varje påstående i en sida och citera den som sidans titel följt av dess URL. När sidan anger den underliggande studiens källhänvisning och DOI, lägg till dem; vissa sidor citerar bara ett arXiv-ID eller en förlags-URL, så ange det sidan anger och hitta aldrig på någon DOI, URL, författare, siffra eller resultat.

3. Syntetisera över flera sidor i stället för att luta dig mot en. Begreppssidor ger översikten och länkar till artiklarna bakom dem, så följ de länkarna. Läs tre till fem av de mest relevanta sidorna, sluta när de börjar upprepa samma studier, och säg vad du inte läste. Om kunskapsbasen bara täcker ämnet inom ett närliggande fält, säg det och svara genom analogi.

4. Anpassa dina påståenden till evidensens styrka. Kontrollerade eller randomiserade experiment som mäter prestation utan assistans är starkast, därefter metaanalyser justerade för publiceringsbias, därefter översikter, därefter pilotstudier, policyanalyser och åsikter; en liten studie är inte konsensus. Taggar, målgrupp, nivå och tillförlitlighetsbetyg finns i varje sidas Markdown-källkod på https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, inte på den renderade sidan, så om du inte kan kontrollera dem, bedöm utifrån hur artikeln beskriver studien och säg att det är vad du gjorde.

5. Svara på den nivå som frågan ber om, och avsluta med att rekommendera de mest relevanta sidorna och de vanliga frågorna.

Föredra termen "generativ AI" framför "LLM". Kunskapsbasen uppdateras regelbundet, och journalsidan på https://edtechdev.github.io/aied/journal/ listar de nyaste tillskotten.

Exempel: "Vad säger forskningen om AI-återkoppling på elevers skrivande?" Kontrollera förteckningen över vanliga frågor, läs de mest relevanta skriv- och återkopplingssidorna plus studierna de citerar, och svara sedan med källhänvisningar och länkar.`;

const sv: AiStrings = {
  title: 'Använd den här kunskapsbasen med din egen AI-assistent',
  description:
    'Prompt att kopiera och klistra in för att använda kunskapsbasen om AI i utbildningen med din egen chattbot eller agent.',
  h1: 'Använd den här kunskapsbasen med din egen AI-assistent',
  introHtml: `Rikta vilken AI-chattbot eller AI-agent som helst mot den här kunskapsbasen och den svarar utifrån dessa sidor i stället för från sitt eget minne. Kopiera prompten nedan, klistra in den i din assistent som ditt första meddelande och ställ sedan din fråga. Ett bra svar anger vilka sidor det bygger på och länkar till dem, så att du kan kontrollera källorna själv.`,
  intro2Html: `Ingenting behöver installeras. Vill du hellre hoppa över prompten behärskar <a href="#ready-made-assistants">de färdiga assistenterna</a> redan det här materialet.`,
  promptHeading: 'Prompten att kopiera',
  promptIntro:
    'Klistra in den här först, före din fråga. Den fungerar med alla chattbotar och agenter som kan läsa en webbsida eller ta emot ett inklistrat dokument. Prompten är längre än rutan visar; knappen kopierar hela.',
  copyButton: '📋 Kopiera prompten till urklipp',
  copyHint: 'Klistra sedan in den i din assistent och ställ din fråga.',
  copyOk: '✅ Kopierad!',
  copyFail: '❌ Kopieringen misslyckades',
  promptAriaLabel: 'Prompt att kopiera',
  promptText: PROMPT,
  howHeading: 'Så använder du den',
  howSteps: [
    '<strong>Kopiera prompten</strong> med knappen ovan.',
    '<strong>Klistra in den i din assistent</strong> som det första meddelandet. Assistenten svarar oftast att den förstår.',
    '<strong>Ställ din fråga</strong> i vanligt språk, till exempel "vad säger forskningen om AI-återkoppling i stora klasser?" eller "bör vi använda AI-detektorer?"',
    '<strong>Kontrollera länkarna.</strong> Ett bra svar anger vilka sidor det använt. Får du självsäkra påståenden utan några sidnamn, svara "vilken sida kommer det ifrån?" och be den försöka igen.',
  ],
  howNoteHtml: `Det här fungerar bäst i assistenter som kan surfa på webben, eftersom prompten pekar ut sidor att läsa. Om din inte kan öppna länkar ska du även bifoga kunskapsbasens text: <a href="/aied/llms-full.txt">ladda ner fulltextfilen</a> en gång, ladda upp eller klistra in den i konversationen och använd prompten tillsammans med den. Det är en enda textfil på {llmsFullSize}. Många chattprodukter vägrar en fil av den storleken, så det finns också <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>, varje begrepps- och FAQ-sida i fulltext på {llmsConceptsSize}. Ta den filen först: begreppen är synteserna av vad forskningen visar, de vanliga frågorna är de frågor som synteserna besvarar, och varje begreppssida länkar till studierna bakom sig.`,
  techSummary: 'Tekniska anmärkningar för verktyg som vill ha en URL i stället för en prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: en katalog över varje sida, en rad vardera, för verktyg som indexerar en webbplats innan de läser den',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: kunskapsbasens fullständiga text i en enda fil, {llmsFullSize}',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: fulltext för begrepps- och FAQ-sidorna, {llmsConceptsSize}, för verktyg och chattar som vägrar den större filen',
    '<a href="/aied/sitemap-index.xml">Sitemap</a>: varje sidas adress',
    '<a href="/aied/rss.xml">RSS-flöde</a>: nya och uppdaterade sidor',
  ],
  assistantsHeading: 'Färdiga assistenter',
  assistantsIntro:
    'Vill du inte ställa in något, använd en av dessa färdiga assistenter:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, en <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> som svarar utifrån den här kunskapsbasen. Dess <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">anpassade instruktioner</a> är offentliga, och den byggdes på en statisk kopia av kunskapsbasen, så den kan ligga efter de nyaste sidorna.',
    '<strong>NotebookLM-anteckningsbok</strong>: en <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">anteckningsbok i Google NotebookLM</a> byggd på samma material, med autogenererade rapporter, infografik, en podd, presentationsbilder och <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">en video</a>.',
  ],
  corpusHeading: 'Vad kunskapsbasen innehåller',
  corpusHtml1: `Över tusen forskningssammanfattningar täcker handledning och AI-handledare, bedömning och återkoppling, akademisk redlighet, AI-kompetens, lärar- och fakultetsutveckling, jämlikhet och tillgänglighet, integritet, policy och styrning, samt ämnen inom lärarvetenskapen som kognitiv avlastning och inlärningsmotivation. Varje sammanfattning slutar med fullständig källhänvisning och en länk till originalstudien, så att din assistent kan vidarebefordra referensen.`,
  corpusHtml2: `Tre slags sidor besvarar olika frågor: begreppssidor sammanfattar vad forskningen säger om en idé och länkar till studierna bakom den, artikelsidor behandlar en studie i taget, och de vanliga frågorna besvarar praktiska frågor från lärare och administratörer. Fråga efter en begreppssida när du vill ha en översikt, och efter artiklarna bakom den när du vill ha evidensen.`,
  answeredHeading: 'Frågor som redan är besvarade',
  answeredIntro:
    'Många av de frågor som människor först ställer till en AI har redan besvarats här för hand, med forskningen bifogad:',
  answeredLinks: [
    {
      href: '/aied/faqs/course-ai-policy/',
      label: 'Hur skriver jag en AI-policy för min kurs och hur förmedlar jag den till studenterna?',
    },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Hur kan jag minska AI-fusk i min kurs?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Bör vi använda AI-detektorer?' },
    {
      href: '/aied/faqs/redesign-assessment-ai-era/',
      label: 'Hur bör bedömningen omarbetas för AI-eran?',
    },
    {
      href: '/aied/faqs/reducing-over-reliance/',
      label: 'Hur hindrar jag studenter från att bli alltför beroende av AI?',
    },
    {
      href: '/aied/faqs/institutional-ai-policy/',
      label: 'Hur skriver och inför vi en AI-policy på institutionsnivå?',
    },
  ],
  answeredOutroHtml: `Det är värt att titta på <a href="/aied/faq/">hela listan över vanliga frågor</a> innan du frågar, och prompten uppmanar din assistent att kontrollera den listan först.`,
  offlineHeading: 'Läs kunskapsbasen utan internet',
  offlineHtml: `Du kan också ladda ner kunskapsbasen som <a href="/aied/aied.epub">EPUB</a> eller <a href="/aied/aied.pdf">PDF</a> till en läsplatta, telefon, surfplatta eller dator. Dessa offlineutgåvor innehåller begreppssidorna och de vanliga frågorna, inte artikelsammanfattningarna.`,
  toc: [
    { text: 'Prompten att kopiera', slug: 'the-prompt', depth: 2 },
    { text: 'Så använder du den', slug: 'how-to-use-it', depth: 2 },
    { text: 'Färdiga assistenter', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Vad kunskapsbasen innehåller', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Frågor som redan är besvarade', slug: 'already-answered', depth: 2 },
    { text: 'Läs kunskapsbasen utan internet', slug: 'read-offline', depth: 2 },
  ],
};

export default sv;
