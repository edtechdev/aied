---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Open-source vydání MAIC: multiagentní třída, která z tématu či dokumentu udělá slajdy, kvízy, interaktivní simulace a projektové aktivity s AI učiteli a spolužáky."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**OpenMAIC** je open-source vydání multiagentní třídy MAIC popsané v [[intelligent-tutoring|studii MAIC]]: popište téma nebo přiložte vlastní materiály a ono vygeneruje celou hodinu — slajdy, kvízy, interaktivní HTML simulace a projektové aktivity — a poté ji odučí prostřednictvím AI učitelů a AI spolužáků, kteří mluví, kreslí na tabuli a účastní se diskuse. Je to kód třídy, kterou lze spustit, ne jen číst o ní.

## Co s ním můžete dělat

Generování jedním kliknutím vytvoří hodinu během minut z promptu nebo nahraného dokumentu, zvuku či videa. Multiagentní vrstva přidává třídní diskusi, do níž se student může zapojit nebo být vyvolán, kulaté stoly mezi personami s ilustracemi na tabuli a volné otázky a odpovědi, kde učitel odpovídá slajdy nebo diagramy. Sezení podporují sady slajdů, kvízy, interaktivní simulace a PBL a exportují se jako upravitelný `.pptx` nebo interaktivní `.html`. Verze 1.0.0 (srpen 2026) přidala pracovní stůl agenta: pracovní prostor orientovaný na chat, který plánuje a reviduje celé kurzy, trvanlivá sezení na serveru, která lze zrušit, obnovit nebo usměrnit, a 24 vestavěných dovedností pro slajdy, kvízy, interaktivní prvky, obrázky, video a hlasy. Balíček `SKILL.md` umožňuje agentnímu harnessu stavět třídy z aplikace pro zasílání zpráv.

## Pro koho je určen

Pro vyučující a kurzovní týmy, kteří chtějí generované materiály, jež mohou dál upravovat, pro návrháře výuky prototypující multiagentní aktivity a pro vývojáře, kteří potřebují třídu, již lze hostovat sami, nikoli hostovaný produkt. Školy jej mohou nasadit na Vercelu nebo v Dockeru a projekt dodává hostovanou ukázku na open.maic.chat.

## Poznámky

Licence MIT, s anglickým a čínským uživatelským průvodcem a aktivní komunitou na Discordu a Feishu. Je nezávislý na modelu: dodáváte alespoň jeden klíč k poskytovateli LLM a volitelné lokální komponenty (Lemonade pro lokální modely, FunASR pro rozpoznávání řeči) umožňují provozovat větší část stacku offline — „zdarma“ tedy popisuje software, nikoli účet za inferenci. Článek, který za ním stojí, vyšel v *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0) a repozitář měl do září 2026 více než 38 000 hvězd.

## Související pojmy

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
