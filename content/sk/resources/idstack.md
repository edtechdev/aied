---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Open-source sada jedenástich zručností pre Claude Code, ktoré preverujú kurz voči dôkazovej základni inštrukčného dizajnu a každé odporúčanie označujú úrovňou dôkazu."
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
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

**idstack** je open-source zbierka jedenástich zručností pre [[learning-design|inštrukčný dizajn]] podložený dôkazmi, distribuovaná ako plugin pre Claude Code so sprievodným rozšírením pre bočný panel v Chrome. Namiesto písania konceptu kurzu zručnosti kurz preverujú: klasifikujú ciele voči revidovanej Bloomovej taxonómii, kontrolujú konštruktívne zladenie cieľov, aktivít a hodnotení, označujú problémy kognitívnej záťaže a preverujú prístupnosť voči WCAG 2.1 AA a Universal Design for Learning. Každé odporúčanie nesie úroveň dôkazu, od T1 pre metaanalýzy a randomizované pokusy po T5 pre odborný názor. Projekt uvádza, že jeho citácie vychádzajú zo 108 recenzovaných štúdií v jedenástich výskumných doménach; tento počet je tvrdením projektu a jeho bibliografia je zverejnená v Markdowne, takže ju recenzent môže overiť.

Kurzy vstupujú cez pripojenie k API Canvas, súbor IMS Common Cartridge, balík SCORM, export do PDF z nástroja na tvorbu alebo vložené dokumenty. Zdieľaný manifest projektu si kurz pamätá naprieč sedeniami a zručnosť pipeline reťazí fázy návrhu a preskakuje hotovú prácu. Recenzie referujú voči ôsmim štandardom Quality Matters a rámcu Community of Inquiry, oddeľujúc výučbu, sociálnu a kognitívnu prítomnosť, a potom zoraďujú odporúčania podľa závažnosti.

## Čo treba vedieť pred nasadením

Plugin vyžaduje Claude Code a shell bash na inštaláciu; PowerShell a cmd setup skript nespustia a pre trendy skóre sa odporúča Python 3. Dáta kurzu zostávajú v priečinku projektu na stroji čitateľa a odchádzajú len cez integráciu, ktorú používateľ sám vyvolá, napríklad volaním API Canvas. Živá inferencia rozšírenia pre Chrome potrebuje vlastný bezplatný kľúč API z Google AI Studio, hoci simulačný režim ho demonštruje aj bez neho. Projekt sa označuje ako beta vo verzii 3.5.1.0 a varuje pred prelomovými zmenami medzi vedľajšími verziami; je publikovaný pod účtom savvides na GitHube, nie pod menom autora.

## Prepojené pojmy
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
