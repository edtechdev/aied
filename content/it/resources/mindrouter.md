---
title: "MindRouter"
created: "2026-11-12T19:24:00-05:00"
updated: "2026-11-12T19:24:00-05:00"
type: resource
summary: "Un gateway di inferenza con licenza Apache-2.0 dell'Università dell'Idaho che mette davanti a un cluster universitario di nodi GPU vLLM e Ollama un'unica API compatibile con OpenAI, aggiungendo pianificazione equa, quote di token per utente, SSO, log di audit e monitoraggio in tempo reale di GPU ed energia."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Traduzione automatica della pagina in inglese, non ancora rivista da una persona di madrelingua.*

La maggior parte delle discussioni universitarie sull'IA parte da quale modello comprare e si ferma prima della domanda più difficile: dove gira, chi lo misura e chi può vedere i log. MindRouter è una risposta a quella seconda domanda. È un gateway auto-ospitato che sta davanti a un cluster eterogeneo di server [[llm|LLM]] — nodi vLLM e Ollama su GPU possedute dall'istituzione — ed espone un'unica API che parla i dialetti OpenAI, Anthropic e Ollama, traducendo tra loro così il codice client esistente continua a funzionare.

## Che cosa puoi farci

Punta uno strumento al gateway invece che all'endpoint di un fornitore. Dietro, MindRouter gestisce le parti che servono a una distribuzione condivisa: pianificazione equa con deficit round robin ponderato, quote di token e richieste per utente, accesso basato sui ruoli con SSO opzionale tramite Azure AD/Entra, Google, qualsiasi provider OIDC o SAML 2.0, e registrazione completa di audit di prompt, risposte e artefatti. Un agente sidecar per la GPU riporta utilizzo, memoria, temperatura e potenza per nodo, così un amministratore può vedere il costo energetico per richiesta e svuotare un backend con garbo quando è ora di manutenzione. Copre più della chat — embedding, visione, generazione di immagini e video, sintesi vocale e riconoscimento vocale, OCR di documenti — e fornisce server MCP e competenze agente per assistenti di programmazione.

La ragione per cui un college dovrebbe interessarsene è quella che il progetto nomina: [[institutional-ai-infrastructure|sovranità istituzionale dell'IA]]. Prompt e documenti restano su infrastrutture gestite dall'istituzione anziché passare per un cloud di terzi, cosa più facile da difendere davanti a un senato accademico o a un ufficio [[privacy|privacy]] che un accordo sul trattamento dei dati con un fornitore. Se quell'argomento regga dipende dal fatto che l'istituzione abbia le GPU, la corrente e il personale — il gateway rende l'hosting locale gestibile, non economico.

## A chi è rivolto

Gruppi di calcolo per la ricerca e IT centrale con capacità GPU già disponibile, centri per l'insegnamento e l'apprendimento che vogliono un unico posto per misurare l'uso di docenti e studenti, e amministratori che soppesano piattaforme enterprise ospitate rispetto all'esecuzione propria dell'inferenza. È una distribuzione Docker Compose con configurazione SSO documentata e branding personalizzato, ed è mantenuta all'Università dell'Idaho, dove l'autore l'ha presentata a PEARC '26; il progetto ha 22 stelle e 3 fork a novembre 2026.

## Note e avvertenze

Gratuito e open source con licenza Apache-2.0, ma il costo si sposta anziché sparire: hardware, elettricità e tempo del personale per gestire un cluster. Il software è giovane per gli standard dell'infrastruttura — tre contributori, un'unica istituzione di origine e rilasci numerati in centinaia di tag — quindi un college dovrebbe provarlo accanto a un servizio esistente anziché come unica via a un modello. Nel repository non c'è una valutazione pubblicata del comportamento di pianificazione e quote sotto carico reale di un campus; il paper di PEARC è il posto dove cercare il resoconto degli autori.

## Concetti collegati

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
