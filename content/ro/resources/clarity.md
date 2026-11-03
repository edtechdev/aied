---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Un Agent Skill open-source și un editor de browser privat care transformă optsprezece reguli pentru o scriere mai clară în moduri de schițare, rescriere și revizuire."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**Clarity** îmbină un Agent Skill cu un editor de browser, ambele construite în jurul a optsprezece reguli pentru o scriere care „își câștigă cititorul”. Skill-ul se instalează în agenți de codare precum Claude Code și Codex cu `npx skills add addyosmani/clarity` și funcționează apoi în trei moduri: modul de revizuire critică o schiță și lasă fișierul neatins, modul de rescriere editează o schiță pe loc, iar modul de interviu pune mai întâi întrebări autorului și scrie împreună cu el pornind de la răspunsuri. [[feedback|Feedbackul]] pe care îl primește autorul vizează substanța înaintea stilului. Regulile întreabă pentru cine este textul și ce știe deja cititorul, cer afirmații în loc de subiecte și concret în loc de abstract, și tratează umplutura ca pe o problemă de a nu ști la ce folosește textul, nu ca pe una de vocabular.

Editorul de browser rulează local în pagină și nu încarcă nicio schiță. El raportează semnele prozei scrise de mașină, lizibilitatea și lipsurile de substanță, ceea ce îl face util pentru a revizui un text produs de o [[generative-ai|IA generativă]] înainte ca acesta să ajungă la un cititor. Proiectul declară explicit că scopul este o scriere care rămâne recognoscibil a autorului, nu o proză construită ca să treacă de [[ai-detection|detectarea IA]], o distincție pe care cadrele didactice o recunosc atunci când stabilesc o politică privind [[writing-education|scrierea]] asistată de IA.

## Ce trebuie să știi înainte de a-l adopta

Depozitul publică un protocol de evaluare, mostre înainte-după în `samples/` și fișiere de referință în spatele skill-ului, astfel încât un evaluator poate inspecta cum se comportă regulile în loc să accepte o afirmație pe încredere; pagina de față nu reia niciun rezultat măsurat. Autorul este Addy Osmani, licența este MIT, iar lucrarea este independentă, nu un produs al vreunei instituții. Este tânără și activă: creată în august 2026, 54 de commit-uri, trei versiuni, ultima la versiunea 0.2.1 în septembrie, și aproximativ 250 de stele la verificarea din septembrie 2026. Trei contribuitori au adus modificări. Instrucțiunile skill-ului se încarcă într-un agent pe care cititorul îl rulează deja, așa că se aplică precauțiile obișnuite de [[prompt-engineering|inginerie de prompt]]: calitatea criticii depinde de schița care i se dă.

## Concepte conexe
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
