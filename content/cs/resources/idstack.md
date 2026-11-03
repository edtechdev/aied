---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Open-source sada jedenácti dovedností pro Claude Code, které prověřují kurz proti důkazní základně návrhu výuky a každé doporučení označují úrovní důkazů."
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
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

**idstack** je open-source sbírka jedenácti dovedností pro [[learning-design|návrh výuky]] založený na důkazech, distribuovaná jako plugin pro Claude Code s doprovodným rozšířením pro boční panel Chrome. Dovednosti kurz nekoncipují, ale prověřují: klasifikují cíle podle revidované Bloomovy taxonomie, kontrolují konstruktivní sladění cílů, aktivit a hodnocení, označují problémy kognitivní zátěže a posuzují přístupnost proti WCAG 2.1 AA a Universal Design for Learning. Každé doporučení nese úroveň důkazů, od T1 pro metaanalýzy a randomizované pokusy po T5 pro odborný názor. Projekt uvádí, že jeho citace vycházejí ze 108 recenzovaných studií v jedenácti výzkumných doménách; tento počet je tvrzením projektu a jeho bibliografie je zveřejněna v Markdownu, takže ji recenzent může zkontrolovat.

Kurzy vstupují přes připojení k API Canvasu, soubor IMS Common Cartridge, balíček SCORM, export do PDF z autorského nástroje nebo vložené dokumenty. Sdílený manifest projektu si kurz pamatuje mezi sezeními a dovednost pipeline řetězí fáze návrhu a přeskakuje hotovou práci. Revize referují proti osmi standardům Quality Matters a rámci Community of Inquiry, oddělují výukovou, sociální a kognitivní přítomnost a doporučení pak řadí podle závažnosti.

## Co vědět, než jej přijmete

Plugin vyžaduje ke instalaci Claude Code a shell bash; PowerShell a cmd instalační skript nespustí a pro trendy skóre se doporučuje Python 3. Data kurzu zůstávají ve složce projektu na stroji čtenáře a opouštějí jej jen přes integraci, kterou uživatel sám vyvolá, například volání API Canvasu. Živá inference v rozšíření Chrome potřebuje vlastní bezplatný klíč API z Google AI Studio, i když simulační režim jej předvede i bez něj. Projekt se označuje za betu ve verzi 3.5.1.0 a varuje před zlomovými změnami mezi menšími verzemi; je publikován pod účtem savvides na GitHubu, nikoli pod jménem autora.

## Související pojmy
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
