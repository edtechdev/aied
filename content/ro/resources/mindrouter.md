---
title: "MindRouter"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "Un gateway de inferență Apache-2.0 de la University of Idaho, care pune un cluster de campus de noduri GPU vLLM și Ollama în spatele unui singur API compatibil OpenAI, adăugând programare echitabilă, cote de tokeni per utilizator, SSO, jurnalizare de audit și monitorizare live a GPU-urilor și a energiei."
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
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Majoritatea discuțiilor despre IA din campus încep cu ce model să cumperi și se opresc înainte de întrebarea mai grea: unde rulează, cine îl măsoară și cine poate vedea logurile. MindRouter este un răspuns la a doua întrebare. Este un gateway auto-găzduit care stă în fața unui cluster eterogen de servere [[llm|LLM]] — noduri vLLM și Ollama pe GPU-uri pe care instituția le deține — și expune un singur API care vorbește dialectele OpenAI, Anthropic și Ollama, traducând între ele, astfel încât codul client existent să continue să funcționeze.

## Ce poți face cu el

Îndreaptă un instrument spre gateway în loc de un endpoint de furnizor. În spate, MindRouter se ocupă de părțile de care are nevoie o implementare partajată: programare echitabilă cu weighted deficit round robin, cote de tokeni și cereri per utilizator, acces bazat pe roluri cu SSO opțional prin Azure AD/Entra, Google, orice furnizor OIDC sau SAML 2.0, și jurnalizare completă de audit a prompturilor, răspunsurilor și artefactelor. Un agent sidecar de GPU raportează utilizarea, memoria, temperatura și puterea pe nod, astfel încât un administrator poate vedea costul energetic pe cerere și poate goli grațios un backend când se apropie mentenanța. Acoperă mai mult decât chat — embeddings, viziune, generare de imagini și video, text-to-speech și speech-to-text, OCR de documente — și livrează servere MCP și abilități de agent pentru asistenți de programare.

Motivul pentru care un colegiu ar fi interesat este cel pe care proiectul îl numește: [[institutional-ai-infrastructure|suveranitatea instituțională asupra IA]]. Prompturile și documentele rămân pe infrastructura pe care instituția o operează, în loc să treacă printr-un cloud terț, ceea ce este mai ușor de apărat în fața unui senat al cadrelor didactice sau a unui birou de [[privacy|confidențialitate]] decât un acord de prelucrare a datelor cu un furnizor. Dacă argumentul rezistă depinde de dacă instituția are GPU-urile, energia și personalul — gateway-ul face găzduirea locală gestionabilă, nu ieftină.

## Pentru cine este

Grupurile de calcul științific și IT central cu capacitate GPU existentă, centrele de predare și învățare care vor un singur loc pentru a măsura utilizarea cadrelor didactice și a studenților, și administratorii care cântăresc platformele enterprise găzduite față de rularea inferenței pe cont propriu. Este o implementare Docker Compose cu configurare SSO documentată și branding personalizat, întreținută la University of Idaho, unde autorul a prezentat-o la PEARC '26; proiectul avea 22 de stele și 3 fork-uri în noiembrie 2026.

## Note și precauții

Gratuit și open source sub Apache-2.0, dar costul se mută, nu dispare: hardware, electricitate și timpul personalului pentru a rula un cluster. Software-ul este tânăr după standardele infrastructurii — trei contribuitori, o singură instituție de origine și versiuni numerotate în sute de tag-uri — așa că un colegiu ar trebui să îl piloteze alături de un serviciu existent, nu ca singura cale către un model. O evaluare publicată a comportamentului de programare și de cote sub încărcare reală de campus nu există în repository; lucrarea PEARC este locul unde să cauți relatarea autorilor înșiși.

## Concepte conexe

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
