---
title: "idstack"
created: "2026-10-14T21:58:00-04:00"
type: resource
summary: "Un insieme open source di undici skill per Claude Code che verificano un corso rispetto alla base di evidenze del design didattico, etichettando ogni raccomandazione con il proprio livello di evidenza."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---
*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**idstack** è una raccolta open source di undici skill per il [[learning-design|design didattico]] basato su evidenze, distribuita come plugin di Claude Code con un'estensione complementare a pannello laterale per Chrome. Anziché redigere un corso, le skill ne fanno la verifica: classificano gli obiettivi rispetto alla tassonomia di Bloom rivista, controllano l'allineamento costruttivo tra obiettivi, attività e valutazioni, segnalano problemi di carico cognitivo ed esaminano l'accessibilità rispetto a WCAG 2.1 AA e allo Universal Design for Learning. Ogni raccomandazione riporta un livello di evidenza, da T1 per metanalisi e trial randomizzati fino a T5 per l'opinione di esperti. Il progetto dichiara che le sue citazioni attingono a 108 studi sottoposti a revisione tra pari in undici ambiti di ricerca; quel conteggio è un'affermazione del progetto stesso, e la sua bibliografia è pubblicata in Markdown così che chi la esamina possa verificarla.

I corsi entrano attraverso una connessione con l'API di Canvas, un file IMS Common Cartridge, un pacchetto SCORM, un'esportazione in PDF da uno strumento di authoring o documenti incollati. Un manifesto di progetto condiviso ricorda il corso tra le sessioni, e una skill di pipeline incatena le fasi di progettazione saltando il lavoro già completato. Le verifiche riferiscono rispetto agli otto standard Quality Matters e al quadro della Community of Inquiry, separando presenza didattica, sociale e cognitiva, e poi ordinano le raccomandazioni per gravità.

## Cosa sapere prima di adottarlo

Il plugin richiede Claude Code e una shell bash per l'installazione; PowerShell e cmd non possono eseguire lo script di setup, e Python 3 è raccomandato per le tendenze dei punteggi. I dati del corso restano nella cartella del progetto sul computer di chi legge, e ne escono solo attraverso un'integrazione che l'utente invoca, come una chiamata all'API di Canvas. L'inferenza in tempo reale dell'estensione per Chrome richiede la chiave API gratuita di Google AI Studio di chi legge, anche se una modalità di simulazione la dimostra senza. Il progetto si definisce beta alla versione 3.5.1.0 e avverte di modifiche incompatibili tra versioni minori, ed è pubblicato sull'account GitHub savvides anziché da un autore nominato.

## Concetti collegati
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
