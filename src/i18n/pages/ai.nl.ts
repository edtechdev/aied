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

const PROMPT = `Je bent een onderzoeksassistent voor AI in het onderwijs. Gebruik de Kennisbank over AI in het onderwijs (https://edtechdev.github.io/aied/) als belangrijkste bron.

1. Kies eerst de juiste route. De FAQ-index op https://edtechdev.github.io/aied/faq/ wijst vragen aan de pagina's die ze beantwoorden, waaronder vragen als „wat laat het onderzoek zien". De volledige catalogus op https://edtechdev.github.io/aied/llms.txt is {llmsSize}, het bestand met concepten en FAQ's op https://edtechdev.github.io/aied/llms-concepts.txt is {llmsConceptsSize}, en llms-full.txt is {llmsFullSize}, dus doorzoek ze of haal er delen op in plaats van ze in hun geheel te laden, en laat een mislukte poging om een heel bestand op te halen je niet tegenhouden.

2. Grond elke bewering op een pagina en citeer die als paginatitel gevolgd door de URL. Wanneer de pagina de bronvermelding en DOI van het onderliggende artikel geeft, voeg die dan toe; sommige pagina's verwijzen alleen naar een arXiv-ID of de URL van de uitgever — geef wat de pagina geeft en verzin nooit een DOI, URL, auteur, getal of resultaat.

3. Synthetiseer over meerdere pagina's heen in plaats van op één te leunen. Conceptpagina's geven het overzicht en linken naar de artikelen die eraan ten grondslag liggen, dus volg die links. Lees de drie tot vijf meest relevante pagina's, stop wanneer ze dezelfde studies gaan herhalen, en zeg wat je niet hebt gelezen. Als de kennisbank het onderwerp alleen in een aangrenzend vakgebied behandelt, zeg dat dan en antwoord door middel van een analogie.

4. Stem de kracht van je bewering af op de kracht van het bewijs. Gecontroleerde of gerandomiseerde experimenten die ongeassisteerde prestaties meten zijn het sterkst, dan meta-analyses die zijn gecorrigeerd voor publicatiebias, dan reviews, dan pilots, beleidsanalyses en meningen; één kleine studie is geen consensus. Tags, doelgroep, niveau en betrouwbaarheidsbeoordelingen staan in de Markdown-bron van elke pagina op https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, niet op de weergegeven pagina — als je ze niet kunt controleren, oordeel dan op basis van hoe het artikel het onderzoek beschrijft, en zeg dat je dat hebt gedaan.

5. Antwoord op het niveau dat de vraag vraagt, en sluit af met een aanbeveling van de meest relevante pagina's en FAQ's.

Geef de voorkeur aan de term „generatieve AI" boven „LLM". De kennisbank wordt regelmatig bijgewerkt, en de journaalpagina op https://edtechdev.github.io/aied/journal/ vermeldt de nieuwste toevoegingen.

Voorbeeld: „Wat zegt het onderzoek over AI-feedback op geschreven werk van studenten?" Raadpleeg de FAQ-index, lees de meest relevante pagina's over schrijven en feedback plus de studies die ze noemen, en antwoord dan met bronvermeldingen en links.`;

const nl: AiStrings = {
  title: 'Gebruik deze kennisbank met je eigen AI-assistent',
  description:
    'Kopieer-en-plak-prompt om de Kennisbank over AI in het onderwijs te gebruiken met je eigen chatbot of agent.',
  h1: 'Gebruik deze kennisbank met je eigen AI-assistent',
  introHtml: `Je kunt elke AI-chatbot of -agent op deze kennisbank richten, en dan antwoordt die uit deze pagina's in plaats van uit zijn eigen geheugen. Kopieer de prompt hieronder, plak hem in je assistent als eerste bericht en stel daarna je vraag. Een goed antwoord noemt de pagina's waarop het is gebaseerd en linkt ernaar, zodat je de bronnen zelf kunt controleren.`,
  intro2Html: `Er hoeft niets te worden geïnstalleerd. Als je de prompt liever overslaat, kennen de <a href="#ready-made-assistants">kant-en-klare assistenten</a> dit materiaal al.`,
  promptHeading: 'De prompt om te kopiëren',
  promptIntro:
    'Plak dit eerst in, vóór je vraag. Het werkt met elke chatbot of agent die een webpagina kan lezen of een geplakt document kan accepteren. De prompt is langer dan het vak laat zien; de knop kopieert hem helemaal.',
  copyButton: '📋 Kopieer prompt naar klembord',
  copyHint: 'Plak het daarna in je assistent en stel je vraag.',
  copyOk: '✅ Gekopieerd!',
  copyFail: '❌ Kopiëren mislukt',
  promptAriaLabel: 'Prompt om te kopiëren',
  promptText: PROMPT,
  howHeading: 'Hoe je het gebruikt',
  howSteps: [
    '<strong>Kopieer de prompt</strong> met de knop hierboven.',
    '<strong>Plak het in je assistent</strong> als eerste bericht. Meestal antwoordt de assistent dat hij het begrijpt.',
    '<strong>Stel je vraag</strong> in gewone taal, bijvoorbeeld „wat zegt het onderzoek over AI-feedback in grote groepen?" of „moeten we AI-detectoren gebruiken?"',
    '<strong>Controleer de links.</strong> Een goed antwoord noemt de pagina\'s die het heeft gebruikt. Als je overtuigende beweringen krijgt zonder paginanamen, vraag dan „uit welke pagina komt dat?" en vraag het opnieuw te proberen.',
  ],
  howNoteHtml: `Dit werkt het beste in assistenten die het web kunnen doorzoeken, omdat de prompt hen naar pagina's wijst om te lezen. Als die van jou geen links kan openen, voeg dan naast de prompt ook de tekst van de kennisbank toe: <a href="/aied/llms-full.txt">download het volledige-tekstbestand</a> een keer, upload of plak het in het gesprek en gebruik de prompt ernaast. Het is één tekstbestand van {llmsFullSize}. Veel chatproducten weigeren een bestand van die omvang, daarom is er ook <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>, elke concept- en FAQ-pagina in volledige tekst op {llmsConceptsSize}. Pak dat bestand eerst: de concepten zijn de syntheses van wat het onderzoek laat zien, de FAQ's zijn de vragen die die syntheses beantwoorden, en elke conceptpagina linkt naar de artikelen die eraan ten grondslag liggen.`,
  techSummary: 'Technische opmerkingen voor tools die een URL willen in plaats van een prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: een catalogus van elke pagina, één regel per pagina, voor tools die een site indexeren voordat ze die lezen',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: de volledige tekst van de kennisbank in één bestand, {llmsFullSize}',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: volledige tekst van de concept- en FAQ-pagina\'s, {llmsConceptsSize}, voor tools en chats die het grotere bestand weigeren',
    '<a href="/aied/sitemap-index.xml">Sitemap</a>: het adres van elke pagina',
    '<a href="/aied/rss.xml">RSS-feed</a>: nieuwe en bijgewerkte pagina\'s',
  ],
  assistantsHeading: 'Kant-en-klare assistenten',
  assistantsIntro:
    'Als je liever niets instelt, gebruik dan een van deze kant-en-klare assistenten:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, een <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> die uit deze kennisbank antwoordt. De <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">aangepaste instructies</a> zijn openbaar, en hij is gebouwd uit een statische kopie van de kennisbank, dus hij kan achterlopen op de nieuwste pagina\'s.',
    '<strong>NotebookLM-notitieboek</strong>: een <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google NotebookLM-notitieboek</a> gebouwd op hetzelfde materiaal, met automatisch gegenereerde rapporten, infographics, een podcast, dia\'s en <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">een video</a>.',
  ],
  corpusHeading: 'Wat zit er in de kennisbank',
  corpusHtml1: `Ruim duizend onderzoeksamenvattingen behandelen tutoring en AI-tutoren, toetsing en feedback, academische integriteit, AI-geletterdheid, ontwikkeling van docenten en faculteit, gelijkheid en toegankelijkheid, privacy, beleid en governance, en leerthema's zoals cognitief uitbesteden en motivatie van leerlingen. Elke samenvatting eindigt met de volledige bronvermelding en een link naar het oorspronkelijke artikel, zodat je assistent de verwijzing kan doorgeven.`,
  corpusHtml2: `Drie soorten pagina's beantwoorden verschillende vragen: conceptpagina's vatten samen wat het onderzoek zegt over één idee en linken naar de studies die eraan ten grondslag liggen, artikelpagina's behandelen één artikel tegelijk, en de FAQ's beantwoorden praktische vragen van docenten en bestuurders. Vraag om een conceptpagina als je een overzicht wilt, en om de artikelen erachter als je het bewijs wilt.`,
  answeredHeading: 'Vragen die al beantwoord zijn',
  answeredIntro:
    'Veel vragen die mensen eerst aan een AI stellen, zijn hier al met de hand beantwoord, met het onderzoek erbij:',
  answeredLinks: [
    {
      href: '/aied/faqs/course-ai-policy/',
      label: 'Hoe schrijf ik een AI-beleid voor een cursus en communiceer ik dat naar studenten?',
    },
    {
      href: '/aied/faqs/reduce-ai-cheating/',
      label: 'Hoe kan ik spieken met AI in mijn cursus verminderen?',
    },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Moeten we AI-detectoren gebruiken?' },
    {
      href: '/aied/faqs/redesign-assessment-ai-era/',
      label: 'Hoe moet toetsing worden herontworpen voor het AI-tijdperk?',
    },
    {
      href: '/aied/faqs/reducing-over-reliance/',
      label: 'Hoe voorkom ik dat studenten te veel op AI leunen?',
    },
    {
      href: '/aied/faqs/institutional-ai-policy/',
      label: 'Hoe schrijven we een institutioneel AI-beleid en voeren we dat uit?',
    },
  ],
  answeredOutroHtml: `De <a href="/aied/faq/">volledige lijst met FAQ's</a> is een blik waard voordat je iets vraagt, en de prompt zegt je assistent die lijst eerst te raadplegen.`,
  offlineHeading: 'Lees de kennisbank offline',
  offlineHtml: `Je kunt de kennisbank ook downloaden als <a href="/aied/aied.epub">EPUB</a> of <a href="/aied/aied.pdf">PDF</a> voor een e-reader, telefoon, tablet of computer. Deze offline-edities bevatten de conceptpagina's en FAQ's, niet de artikelsamenvattingen.`,
  toc: [
    { text: 'De prompt om te kopiëren', slug: 'the-prompt', depth: 2 },
    { text: 'Hoe je het gebruikt', slug: 'how-to-use-it', depth: 2 },
    { text: 'Kant-en-klare assistenten', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Wat zit er in de kennisbank', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Vragen die al beantwoord zijn', slug: 'already-answered', depth: 2 },
    { text: 'Lees de kennisbank offline', slug: 'read-offline', depth: 2 },
  ],
};

export default nl;
