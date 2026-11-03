---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Un format deschis, text simplu, pentru lecții eLearning pe blocuri, plus o competență de agent care scrie lecții, evaluări și pachete de curs întregi în acest format."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

**LESSON.md** este un format deschis pentru conținut eLearning pe blocuri: un fișier Markdown cu frontmatter YAML și directive `:::` pentru text, imagini și verificări de cunoștințe, citibil de o persoană și parsabil de orice instrument. Există pentru că conținutul de curs este de obicei blocat într-un singur instrument de autorare și pentru că [[llm|modelele lingvistice mari]] pot ajuta doar cu lecțiile pe care le pot citi efectiv.

## Ce poți face cu el
Scrie o lecție în orice editor de text și import-o în orice instrument care suportă formatul, fără copiere-lipire și reformatare. Piesele interactive — verificări de cunoștințe cu variante multiple, cu limite de încercări și feedback la nivel de răspuns — sunt exprimate ca proprietăți simple, nu printr-o interfață grafică. Un `ASSESSMENT.md` însoțitor la rădăcina unui pachet devine [[assessment|evaluarea]] punctată a cursului. Proiectul livrează și o competență `lesson-md` care învață Claude, Codex sau alt [[agentic-ai|agent]] formatul, așa că descrierea unui curs în limbaj simplu returnează lecții, evaluări și un pachet complet.

## Pentru cine este
Designeri instrucționali și creatori de cursuri care vor ca conținutul lor să supraviețuiască unei schimbări de instrument, furnizori de eLearning care vor un format de import și export pe care utilizatorii lor îl înțeleg deja, și oricine construiește autorare asistată de IA peste un format citibil. Contribuitorii includ Dan Bashaw de la LXD Integral, iar formatul are un jurnal public de modificări până la v1.8.

## Concepte conexe

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
