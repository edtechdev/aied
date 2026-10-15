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

const PROMPT = `Du er en forskningsassistent for AI i utdanning. Bruk kunnskapsbasen om AI i utdanning (https://edtechdev.github.io/aied/) som din primærkilde.\n\n1. Finn riktig sted før du leser. FAQ-oversikten på https://edtechdev.github.io/aied/faq/ kobler spørsmål til sidene som besvarer dem, inkludert spørsmål av typen «hva viser forskningen». Hele katalogen på https://edtechdev.github.io/aied/llms.txt er omkring 800 KB, filen med begreper og FAQ på https://edtechdev.github.io/aied/llms-concepts.txt er omkring 4 MB, og llms-full.txt er mange megabyte — søk i dem eller hent deler i stedet for å laste dem hele, og la ikke en mislykket nedlasting av hele filen stanse deg.\n\n2. Forankre hver påstand i en side og siter den som sidetittelen fulgt av dens URL. Når siden oppgir det underliggende papirets kildeliste og DOI, legg dem til; noen sider siterer bare en arXiv-ID eller en URL til utgiveren, så oppgi det siden oppgir, og finn aldri på en DOI, en URL, en forfatter, et tall eller et funn.\n\n3. Syntetiser på tvers av sider i stedet for å lene deg på én. Begrepssidene gir oversikten og lenker til artiklene bak den, så følg de lenkene. Les tre til fem av de mest relevante sidene, stopp når de begynner å gjenta de samme studiene, og si hva du ikke leste. Hvis kunnskapsbasen dekker temaet bare i et tilstøtende felt, si det og svar analogt.\n\n4. Match styrken i bevismaterialet. Kontrollerte eller randomiserte eksperimenter som måler prestasjoner uten assistanse, er sterkest, deretter metaanalyser justert for publiseringsskjevhet, deretter oversiktsartikler, deretter pilotstudier, policyanalyser og meninger; én liten studie er ikke konsensus. Merkelapper, målgruppe, nivå og sikkerhetsvurderinger finnes i Markdown-kilden til hver side på https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, ikke på den opptegnede siden, så hvis du ikke kan kontrollere dem, døm ut fra hvordan artikkelen beskriver studien, og si at det er det du gjorde.\n\n5. Svar på det nivået spørsmålet ber om, og avslutt med å anbefale de mest relevante sidene og FAQ-ene.\n\nForetrekk begrepet «generativ AI» fremfor «LLM». Kunnskapsbasen oppdateres regelmessig, og journalsiden på https://edtechdev.github.io/aied/journal/ viser de nyeste tilskuddene.\n\nEksempel: «Hva sier forskningen om AI-tilbakemeldinger på studenters skriving?» Sjekk FAQ-oversikten, les de mest relevante sidene om skriving og tilbakemelding pluss studiene de siterer, og svar deretter med kildelister og lenker.`;

const no: AiStrings = {
  title: 'Bruk denne kunnskapsbasen med din egen AI-assistent',
  description:
    'Instruksjoner å kopiere for å bruke kunnskapsbasen om AI i utdanning med din egen chatbot eller agent.',
  h1: 'Bruk denne kunnskapsbasen med din egen AI-assistent',
  introHtml: `Du kan peke din foretrukne AI-chatbot eller -agent mot denne kunnskapsbasen, slik at den svarer ut fra disse forskningssidene i stedet for å gjette. Instruksjonene nedenfor gjør nettopp det. Kopier dem, lim dem inn i assistenten din som første melding, og still deretter spørsmålet ditt. Du bør få et svar som oppgir hvilke sider det bygget på, og lenker til dem, slik at du kan kontrollere kildene selv.`,
  intro2Html: `Det kreves ingen teknisk oppsett, og det er ingenting å installere. Hvis du helst vil hoppe over oppsettet, finnes det <a href=\"#ready-made-assistants\">ferdige assistenter</a> som allerede kjenner dette stoffet.`,
  promptHeading: 'Instruksjonene å kopiere',
  promptIntro:
    'Lim dem inn først, før spørsmålet ditt. De fungerer med enhver chatbot eller agent som kan lese en nettside eller ta imot et limt inn dokument. Boksen kan rulles, og knappen kopierer hele teksten.',
  copyButton: '📋 Kopier instruksjonene til utklippstavlen',
  copyHint: 'Lim dem deretter inn i assistenten din og still spørsmålet ditt.',
  copyOk: '✅ Kopiert!',
  copyFail: '❌ Kopiering mislyktes',
  promptAriaLabel: 'Instruksjoner å kopiere',
  promptText: PROMPT,
  howHeading: 'Slik bruker du dem',
  howSteps: [
    '<strong>Kopier instruksjonene</strong> med knappen ovenfor.',
    '<strong>Lim dem inn i assistenten din</strong> som første melding, og send. Den vil vanligvis svare at den har forstått.',
    '<strong>Still spørsmålet ditt</strong> i klartekst, for eksempel «hva sier forskningen om AI-tilbakemeldinger i store klasser?» eller «bør vi bruke AI-detektorer?»',
    '<strong>Sjekk lenkene.</strong> Et godt svar oppgir hvilke sider det brukte. Hvis du får selvsikre påstander uten sidenavn, svar «hvilken side kommer det fra?» og be den prøve igjen.',
  ],
  howNoteHtml: `Dette fungerer best i assistenter som kan surfe på nett, siden instruksjonene peker dem mot sider å lese. Hvis din ikke kan åpne lenker, kan du i stedet for å lime inn instruksjonene alene også legge ved teksten fra kunnskapsbasen: <a href=\"/aied/llms-full.txt\">last ned fulltekstfilen</a> én gang, last den opp eller lim den inn i samtalen, og bruk instruksjonene sammen med den. Det er én enkelt tekstfil på omkring 15 MB. Mange chatprodukter avviser en fil av den størrelsen, så det finnes også <a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a> — alle begreps- og FAQ-sider i sin helhet, omkring 4 MB — som er den beste filen å gripe til først: begrepene er syntesene av det forskningen viser, FAQ-ene er spørsmålene disse syntesene besvarer, og hver begrepsside lenker til papirene bak den.`,
  techSummary: 'Tekniske merknader for verktøy som vil ha en URL i stedet for instruksjoner',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> — en katalog over alle sider, én linje hver, for verktøy som indekserer et nettsted før de leser det',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> — hele kunnskapsbasens tekst i én fil, omkring 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> — full tekst av begreps- og FAQ-sidene, omkring 4 MB, for verktøy og chatter som avviser den større filen',
    '<a href="/aied/sitemap-index.xml">Sidekart</a> — alle sideadresser',
    '<a href="/aied/rss.xml">RSS-strøm</a> — nye og oppdaterte sider',
  ],
  assistantsHeading: 'Ferdige assistenter',
  assistantsIntro:
    'Hvis du helst vil sette opp ingenting, er denne kunnskapsbasen også tilgjengelig som en ferdig assistant:',
  assistants: [
    '<strong>AI in Education Advisor</strong> — en <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> som svarer ut fra denne kunnskapsbasen. Dens <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">tilpassede instruksjoner</a> er offentlige, og den er bygd på en <strong>statisk kopi</strong> av kunnskapsbasen, så den kan ligge etter de nyeste sidene.',
    '<strong>NotebookLM-hefte</strong> — et <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google NotebookLM-hefte</a> bygd på samme materiale, med autogenererte rapporter, infografikk, en podkast, lysbilder og <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">en video</a>.',
  ],
  corpusHeading: 'Hva kunnskapsbasen inneholder',
  corpusHtml1: `Over tusen forskningsoppsummeringer dekker veiledning og AI-veiledere, vurdering og tilbakemelding, akademisk integritet, AI-kompetanse, lærer- og personalutvikling, likestilling og tilgjengelighet, personvern, politikk og styring, og læringsvitenskapelige temaer som kognitiv avlasting og motivasjon hos den lærende. Hver oppsummering slutter med full kildeliste og en lenke til opprinnelig artikkel, slik at assistenten din kan formidle referansen og du kan følge den opp.`,
  corpusHtml2: `Tre slags sider svarer på ulike spørsmål: <strong>begrepssider</strong> oppsummerer hva forskningen sier om én idé og lenker til studiene bak den, <strong>artikkelsider</strong> dekker ett papir om gangen, og <strong>FAQ-ene</strong> besvarer praktiske spørsmål fra instruktører og administratorer. Hvis du vil ha en oversikt over et tema, be om en begrepsside; hvis du vil ha bevismaterialet, be om studiene.`,
  answeredHeading: 'Spørsmål som allerede er besvart',
  answeredIntro:
    'Mange av spørsmålene folk stiller til en AI først, er allerede besvart her for hånd, med forskningen vedlagt:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Hvordan skriver jeg retningslinjer for bruk av AI i et emne, og formidler dem til studentene?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Hvordan kan jeg redusere juks med AI i emnet mitt?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Bør vi bruke AI-detektorer?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Hvordan bør vurdering redesigned for AI-tidsalderen?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Hvordan forhindrer jeg at studenter blir for avhengige av AI?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Hvordan skriver vi og gjennomfører institusjonelle retningslinjer for AI?' },
  ],
  answeredOutroHtml: `Den <a href=\"/aied/faq/\">fullstendige listen over FAQ</a> er verd å se på før du spør, og instruksjonene ber assistenten din om å sjekke den listen først.`,
  offlineHeading: 'Les kunnskapsbasen uten nett',
  offlineHtml: `Du kan også laste ned kunnskapsbasen som en <a href=\"/aied/aied.epub\">EPUB</a> eller <a href=\"/aied/aied.pdf\">PDF</a> til en leseplate, telefon, nettbrett eller datamaskin. Disse offlineutgavene inneholder begrepssidene og FAQ-ene, ikke de flere hundre artikkeloppsummeringene.`,
  toc: [
    { text: 'Instruksjonene å kopiere', slug: 'the-prompt', depth: 2 },
    { text: 'Slik bruker du dem', slug: 'how-to-use-it', depth: 2 },
    { text: 'Ferdige assistenter', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Hva kunnskapsbasen inneholder', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Spørsmål som allerede er besvart', slug: 'already-answered', depth: 2 },
    { text: 'Les kunnskapsbasen uten nett', slug: 'read-offline', depth: 2 },
  ],
};

export default no;
