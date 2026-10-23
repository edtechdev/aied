/**
 * Copy della pagina "Usa questa base di conoscenze con il tuo assistente IA".
 * Il prompt copiabile fa parte del contenuto (è il deliverable principale della
 * pagina), quindi è tradotto; URL e nomi di file al suo interno non cambiano.
 */
import type { AiStrings } from './ai.en';

const PROMPT = `Sei un assistente di ricerca sull’IA nell’educazione. Usa la Base di conoscenze sull’IA nell’educazione (https://edtechdev.github.io/aied/) come fonte primaria.

1. Indirizza prima di leggere. L’indice delle FAQ su https://edtechdev.github.io/aied/faq/ mappa le domande alle pagine che le rispondono, incluse le domande del tipo "che cosa mostra la ricerca". Il catalogo completo su https://edtechdev.github.io/aied/llms.txt è di {llmsSize}, il file concetti-e-FAQ su https://edtechdev.github.io/aied/llms-concepts.txt è di {llmsConceptsSize}, e llms-full.txt è di {llmsFullSize}, quindi cercali o recuperane parti invece di caricarli per intero, e non lasciare che un recupero fallito dell’intero file ti fermi.

2. Fondamenta ogni affermazione su una pagina e citala come titolo della pagina seguito dal suo URL. Quando la pagina riporta la citazione e il DOI dell’articolo sottostante, aggiungili; alcune pagine citano solo un ID arXiv o un URL dell’editore, quindi dai ciò che la pagina dà e non inventare mai un DOI, un URL, un autore, un numero o un risultato.

3. Sintetizza attraversando più pagine invece di appoggiarti a una sola. Le pagine concetto danno la panoramica e collegano gli articoli dietro di esse, quindi segui quei link. Leggi da tre a cinque delle pagine più pertinenti, fermati quando iniziano a ripetere gli stessi studi, e dichiara che cosa non hai letto. Se la base di conoscenze tratta l’argomento solo in un campo vicino, dillo e rispondi per analogia.

4. Adegua la forza dell’evidenza. Esperimenti controllati o randomizzati che misurano la performance senza assistenza sono i più forti, poi le meta-analisi corrette per il bias di pubblicazione, poi le rassegne, poi i pilota, le analisi di politica e le opinioni; un piccolo studio non è consenso. Tag, pubblico, livello e valutazioni di confidenza vivono nel sorgente Markdown di ogni pagina su https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, non nella pagina renderizzata, quindi se non puoi verificarli, giudica da come l’articolo descrive lo studio e dichiara che è ciò che hai fatto.

5. Rispondi al livello richiesto dalla domanda, e chiudi raccomandando le pagine e le FAQ più pertinenti.

Preferisci il termine "IA generativa" a "LLM". La base di conoscenze è aggiornata regolarmente, e la pagina del diario su https://edtechdev.github.io/aied/journal/ elenca le novità.

Esempio: "Che cosa dice la ricerca sul feedback IA per la scrittura degli studenti?" Controlla l’indice delle FAQ, leggi le pagine più pertinenti su scrittura e feedback più gli studi che citano, poi rispondi con citazioni e link.`;

const it: AiStrings = {
  title: 'Usa questa base di conoscenze con il tuo assistente IA',
  description: 'Prompt copia-e-incolla per usare la Base di conoscenze sull’IA nell’educazione con il tuo chatbot o agente.',
  h1: 'Usa questa base di conoscenze con il tuo assistente IA',
  introHtml: `Punta un qualsiasi chatbot o agente IA su questa base di conoscenze e risponderà da queste pagine invece che dalla propria memoria. Copia il prompt qui sotto, incollalo nel tuo assistente come primo messaggio, poi fai la tua domanda. Una buona risposta nomina le pagine da cui ha attinto e le linka, così puoi verificare le fonti da solo.`,
  intro2Html: `Niente da installare. Se preferisci saltare il prompt, gli <a href="#ready-made-assistants">assistenti già pronti</a> conoscono già questo materiale.`,
  promptHeading: 'Il prompt da copiare',
  promptIntro: 'Incollalo per primo, prima della tua domanda. Funziona con qualsiasi chatbot o agente che sappia leggere una pagina web o accettare un documento incollato. Il prompt è più lungo di quanto mostri il riquadro; il pulsante lo copia tutto.',
  copyButton: '📋 Copia il prompt negli appunti',
  copyHint: 'Poi incollalo nel tuo assistente e fai la tua domanda.',
  copyOk: '✅ Copiato!',
  copyFail: '❌ Copia non riuscita',
  promptAriaLabel: 'Prompt da copiare',
  promptText: PROMPT,
  howHeading: 'Come usarlo',
  howSteps: [
    '<strong>Copia il prompt</strong> con il pulsante qui sopra.',
    '<strong>Incollalo nel tuo assistente</strong> come primo messaggio. Di solito risponderà che ha capito.',
    '<strong>Fai la tua domanda</strong> in linguaggio naturale, per esempio "che cosa dice la ricerca sul feedback IA nelle classi numerose?" o "dovremmo usare i rilevatori di IA?"',
    '<strong>Verifica i link.</strong> Una buona risposta nomina le pagine che ha usato. Se ottieni affermazioni sicure senza nomi di pagine, rispondi "da quale pagina viene?" e chiedi di riprovare.',
  ],
  howNoteHtml: `Funziona meglio negli assistenti che possono navigare il web, dato che il prompt li punta a pagine da leggere. Se il tuo non può aprire link, allega anche il testo della base di conoscenze: <a href="/aied/llms-full.txt">scarica il file di testo completo</a> una volta, caricalo o incollalo nella conversazione, e usa il prompt insieme a esso. È un singolo file di testo di {llmsFullSize}. Molti prodotti di chat rifiutano un file di quella dimensione, quindi c’è anche <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>, ogni pagina concetto e FAQ per intero, {llmsConceptsSize}. Conviene partire da quello: i concetti sono le sintesi di ciò che mostra la ricerca, le FAQ sono le domande a cui quelle sintesi rispondono, e ogni pagina concetto collega gli articoli dietro di essa.`,
  techSummary: 'Note tecniche per strumenti che vogliono un URL invece di un prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: un catalogo di ogni pagina, una riga ciascuna, per strumenti che indicizzano un sito prima di leggerlo',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: il testo completo della base di conoscenze in un unico file, {llmsFullSize}',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: testo completo delle pagine concetto e FAQ, {llmsConceptsSize}, per strumenti e chat che rifiutano il file più grande',
    '<a href="/aied/sitemap-index.xml">Sitemap</a>: l’indirizzo di ogni pagina',
    '<a href="/aied/rss.xml">Feed RSS</a>: pagine nuove e aggiornate',
  ],
  assistantsHeading: 'Assistenti già pronti',
  assistantsIntro: 'Se preferisci non configurare nulla, usa uno di questi assistenti già pronti:',
  assistants: [
    '<strong>Consulente IA nell’educazione</strong>, una <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gem di Gemini</a> che risponde da questa base di conoscenze. Le sue <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">istruzioni personalizzate</a> sono pubbliche, ed è stato costruito da una copia statica della base di conoscenze, quindi può essere in ritardo rispetto alle pagine più recenti.',
    '<strong>Notebook di NotebookLM</strong>: un <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">notebook Google NotebookLM</a> costruito sullo stesso materiale, con report autogenerati, infografiche, un podcast, slide e <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">un video</a>.',
  ],
  corpusHeading: 'Che cosa contiene la base di conoscenze',
  corpusHtml1: `Oltre mille sintesi di ricerca coprono tutoraggio e tutor IA, valutazione e feedback, integrità accademica, alfabetizzazione sull’IA, sviluppo di docenti e faculty, equità e accessibilità, privacy, politica e governance, e argomenti di scienze dell’apprendimento come scaricamento cognitivo e motivazione dello studente. Ogni sintesi si chiude con la citazione completa e un link all’articolo originale, così il tuo assistente può passare il riferimento.`,
  corpusHtml2: `Tre tipi di pagina rispondono a domande diverse: le pagine concetto sintetizzano ciò che la ricerca dice su un’idea e collegano gli studi dietro di essa, le pagine articolo coprono un articolo alla volta, e le FAQ rispondono a domande pratiche di docenti e amministratori. Chiedi una pagina concetto quando vuoi una panoramica, e gli articoli dietro di essa quando vuoi l’evidenza.`,
  answeredHeading: 'Domande già risposte',
  answeredIntro: 'Molte delle domande che si pongono per prime a un’IA sono già state risposte qui a mano, con la ricerca allegata:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Come scrivo una politica IA del corso e la comunico agli studenti?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Come posso ridurre le scorrettezze con l’IA nel mio corso?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Dovremmo usare i rilevatori di IA?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Come va ripensata la valutazione per l’era dell’IA?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Come evito che gli studenti si affidino troppo all’IA?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Come scriviamo e implementiamo una politica IA istituzionale?' },
  ],
  answeredOutroHtml: `Vale la pena dare un’occhiata alla <a href="/aied/faq/">lista completa delle FAQ</a> prima di chiedere, e il prompt dice al tuo assistente di controllare prima quella lista.`,
  offlineHeading: 'Leggi la base di conoscenze offline',
  offlineHtml: `Puoi anche scaricare la base di conoscenze come <a href="/aied/aied.epub">EPUB</a> o <a href="/aied/aied.pdf">PDF</a> per un e-reader, telefono, tablet o computer. Queste edizioni offline contengono le pagine concetto e le FAQ, non le sintesi degli articoli.`,
  toc: [
    { text: 'Il prompt da copiare', slug: 'the-prompt', depth: 2 },
    { text: 'Come usarlo', slug: 'how-to-use-it', depth: 2 },
    { text: 'Assistenti già pronti', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Che cosa contiene la base di conoscenze', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Domande già risposte', slug: 'already-answered', depth: 2 },
    { text: 'Leggi la base di conoscenze offline', slug: 'read-offline', depth: 2 },
  ],
};

export default it;
