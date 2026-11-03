---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Un set open-source de unsprezece competențe Claude Code care auditează un curs față de baza de dovezi a designului instrucțional, etichetând fiecare recomandare cu nivelul ei de dovezi."
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
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**idstack** este o colecție cu sursă deschisă de unsprezece competențe pentru [[learning-design|design instrucțional]] bazat pe dovezi, distribuită ca plugin Claude Code, cu o extensie însoțitoare de panou lateral pentru Chrome. În loc să schițeze un curs, competențele îl auditează: clasifică obiectivele după taxonomia Bloom revizuită, verifică alinierea constructivă între obiective, activități și evaluări, semnalează probleme de încărcare cognitivă și revizuiesc accesibilitatea față de WCAG 2.1 AA și Universal Design for Learning. Fiecare recomandare poartă un nivel de dovezi, de la T1 pentru meta-analize și studii randomizate până la T5 pentru opinia experților. Proiectul declară că citările sale se sprijină pe 108 studii recenzate inter-pares din unsprezece domenii de cercetare; acel număr este afirmația proiectului, iar bibliografia este publicată în Markdown, astfel încât un evaluator o poate verifica.

Cursurile intră printr-o conexiune la API-ul Canvas, un fișier IMS Common Cartridge, un pachet SCORM, un export PDF dintr-un instrument de autorare sau documente lipite. Un manifest de proiect partajat ține minte cursul între sesiuni, iar o competență de pipeline înlănțuie etapele de design sărind peste munca deja făcută. Recenziile raportează față de cele opt standarde Quality Matters și cadrul Community of Inquiry, separând prezența didactică, socială și cognitivă, apoi ordonează recomandările după gravitate.

## Ce trebuie să știi înainte de a-l adopta

Pluginul cere Claude Code și un shell bash pentru instalare; PowerShell și cmd nu pot rula scriptul de configurare, iar Python 3 este recomandat pentru tendințele de scor. Datele cursului rămân în dosarul proiectului, pe mașina cititorului, și o părăsesc doar printr-o integrare pe care utilizatorul o invocă, cum ar fi un apel la API-ul Canvas. Inferența live a extensiei Chrome are nevoie de propria cheie gratuită Google AI Studio a cititorului, deși un mod de simulare o demonstrează fără ea. Proiectul se etichetează drept beta la versiunea 3.5.1.0 și avertizează asupra unor schimbări incompatibile între versiunile minore, și este publicat sub contul GitHub savvides, nu de un autor numit.

## Concepte conexe
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
