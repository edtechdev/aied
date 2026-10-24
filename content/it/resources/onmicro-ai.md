---
title: "OnMicro.AI"
created: "2026-10-14T22:40:00-04:00"
type: resource
summary: "A no-code builder that lets educators make focused AI apps, publish them by link, embed them in an LMS through LTI, and see how students use them."
url: https://onmicro.ai/
source_code: https://github.com/onmicroai/micro_ai
author: "The OnMicro.AI project"
resource_type: [software, collection of tools]
access: [freemium]
license: "AGPL-3.0"
last_verified: "2026-09-23"
foundations: [ai-literacy, ai-education]
pedagogy: [scaffolding, active-learning]
technology: [open-source, edtech-platform]
audience: [instructors, instructional designers, administrators]
level: [higher ed]
confidence: high
connected_resources: [vibes-diy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: "resources/onmicro-ai"
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

**OnMicro.AI** è un builder no-code per l'educazione che produce app di AI circoscritte e costruite su misura anziché conversazioni aperte. Un docente progetta un flusso di lavoro strutturato, controlla ciò che l'app accetta e restituisce, la pubblica come link che gli studenti possono aprire senza account né licenze, e poi osserva l'uso aggregato, il costo, la soddisfazione e l'accuratezza dell'app stessa.

## Cosa si può farne

Le app possono essere incorporate in Canvas, Moodle, Blackboard o in qualsiasi [[edtech-platform|piattaforma compatibile con LTI]], dove voti e accessi possono essere sincronizzati; gli esempi pubblicati includono una [[simulation|simulazione]] di comunicazione con il paziente, un'app di feedback su casi di studio che valuta la comprensione prima che lo studente proceda, e una breve sfida di pratica linguistica. Le analisi d'uso sono la ragione che il progetto adduce per preferire le app ai [[conversational-ai|chatbot]] personalizzati: un flusso progettato può essere osservato e rivisto, mentre una chat aperta non può. Si possono selezionare modelli dei principali provider, e la piattaforma tiene traccia del costo di esecuzione di ciascuna app.

## A chi è destinata

Si adatta a docenti e progettisti dell'apprendimento che desiderano interazioni circoscritte e ripetibili, e ad amministratori che hanno bisogno di un percorso di deployment supportato. È un servizio commerciale ospitato che questo repository documenta: il codice sorgente è aperto, e la piattaforma è venduta anche in abbonamento.

## Note e avvertenze

Il piano gratuito è limitato a 10.000 crediti AI e a tre app; app illimitate e modelli avanzati partono dal piano Pro, mentre integrazione LTI, single sign-on e analisi avanzate sono elencate nel piano Enterprise, quindi le funzionalità di cui un'istituzione ha più bisogno sono quelle a pagamento. Il repository è sotto licenza **AGPL-3.0** secondo il suo file `LICENSE`, il che conta per chi intenda ospitarlo o modificarlo in autonomia, e il suo README riporta ancora la licenza LGPL precedente a quel cambio: leggete il file di licenza anziché il README. Le istituzioni dovrebbero inoltre verificare i propri termini di trattamento dei dati prima di far transitare il lavoro degli studenti attraverso un servizio terzo ospitato.

## Concetti collegati

[[teacher-ai-competency]], [[learning-design]], [[open-source]], [[intelligent-tutoring]], [[scaffolding]], [[ai-literacy]], [[edtech-platform]]

