---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Una guida sul campo per chi insegna per costruire un sito didattico statico con un assistente di programmazione IA: tre file di istruzioni Markdown per progettazione, sicurezza e privacy degli studenti, con guide leggibili e un pacchetto scaricabile."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**The Vibe-Coding Center** è la guida gratuita sul campo di Miguel Guhlin per un insegnante che vuole costruire in [[vibe-coding|vibe coding]] un piccolo sito didattico statico con un assistente di programmazione IA — un biglietto d'uscita, un quiz, un portfolio di classe — senza distribuire insieme una chiave API esposta o dati degli studenti.

## Che cosa puoi farci

Tre file di istruzioni portano l'orientamento: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` e `securevcc.md`. Scaricali nella radice di un progetto, completa il modello di brief del progetto, poi chiedi all'assistente di leggere e applicare tutti e tre; la guida è esplicita sul fatto che la presenza non è attivazione, quindi i file devono essere nominati nella richiesta. Guide leggibili spiegano ciascuno di essi, incluso un percorso «Tre controlli essenziali prima di condividere»: raccogliere meno dati sugli studenti, ispezionare una chiave API esposta e adattare il progetto di uno strumento al suo compito di apprendimento. Il pacchetto completo aggiunge il sito stesso, il prompt pack, la revisione di lancio e gli script di ricostruzione, con un manifest SHA-256 per il download.

La pagina complementare [esempi di EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) mostra i risultati come strumenti statici funzionanti anziché come schermate: un generatore di biglietti d'uscita che scrive una domanda a un livello scelto della tassonomia SOLO, un portfolio studentesco che è un singolo file HTML su GitHub Pages e una biblioteca ricercabile di risorse per lo sviluppo professionale, tutti eseguiti lato client senza login LMS.

## A chi si rivolge

Insegnanti e [[learning-design|progettisti didattici]] nella scuola K-12 e nell'istruzione superiore che sanno descrivere lo strumento che vogliono e sono disposti a controllare ciò che l'assistente ha prodotto. Si adatta anche a un dipartimento che vuole un'unica lista di controllo condivisa prima che qualcuno pubblichi uno strumento rivolto agli studenti, e a docenti che insegnano l'[[ai-literacy|alfabetizzazione sull'IA]] costruendo anziché criticando.

## Note e avvertenze

Il centro è orientamento, non un prodotto di conformità: il sito non avanza alcuna dichiarazione di conformità per il proprio obiettivo WCAG 2.2 AA, risponde «no» alla domanda «usare questi file rende il mio sito conforme?», e afferma che una revisione ingegneristica non sostituisce l'autorizzazione della scuola o la revisione legale. Lo scaffale della sicurezza punta ad axe-core, Gitleaks, ZAP e Playwright; sono riferimenti anziché software incluso, e quelli invasivi sono pensati per un obiettivo usa e getta o esplicitamente autorizzato. La lettura non richiede account. Ricostruire le pagine HTML richiede Python e `markdown-it-py`, che è una dipendenza di build e non una dipendenza per chi visita. Il repository è con licenza MIT, mentre le opere grafiche di terzi e i progetti collegati mantengono i propri termini, documentati in `CREDITS.md`.
