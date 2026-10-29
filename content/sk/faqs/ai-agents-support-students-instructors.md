---
title: "Ako môžu agenti AI podporovať študentov a vyučujúcich?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T12:11:33-04:00"
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

Predajná ukážka od dodávateľa trvá štyridsať minút. Agent prečíta sylabus, navrhne budúcotýždňový kvíz, označí troch študentov, ktorí si neotvorili čítanie, a ponúkne, že im napíše. Vaša prorektorka chce rozhodnutie o licencii do konca mesiaca.

[[agentic-ai|Agent]] plánuje, volá nástroje, udržiava kontext, delí prácu na podúlohy a prispôsobuje sa naprieč ťahmi, čo je viac, než robí [[conversational-ai|chatbot]]. Roly na strane študenta a na strane vyučujúceho, ktoré sa tým otvárajú, sú reálne. Dôkazy však neukazujú, že viac autonómie produkuje viac učenia: v jedinej porovnávacej štúdii tu agent a chatbot skončili nerozhodne. Autonómiu dajte tam, kde výstup kontroluje človek, plánovanie nechajte študentovi a kvalitu výučby bodujte podľa vlastnej rubriky.

## Krátka verzia

**1.** Pomenujte prácu skôr než produkt.

**2.** Začnite na strane vyučujúceho, kde prácu už niekto kontroluje.

**3.** Pridanú autonómiu berte ako náklad, kým dôkazy nehovoria inak.

**4.** Plánovanie a posudzovanie nechajte študentovi, pretože práve tie má zadanie vybudovať.

**5.** Bodujte agenta podľa svojej rubriky a naplánujte kontrolu bez pomoci skôr, než sa pilot skončí.

## Vyberte prácu skôr, než vyberiete agenta

[[agentic-workflows-education|Agentické pracovné postupy vo vzdelávaní]] pomenúvajú štyri opakujúce sa schopnosti: reflexiu, plánovanie, používanie nástrojov a spoluprácu viacerých agentov. Každá pridáva náklad popri možnosti, vo [[explainable-ai|vysvetliteľnosti]], koordinácii, [[trust-calibration|dôvere]], latencii a dohľade.

Roly na strane študenta siahajú od [[adaptive-learning|adaptívneho]] tutorovania a plánovania štúdia cez [[formative-assessment|formujúcu]] spätnú väzbu, vedené [[problem-solving|riešenie problémov]] a generovanie cvičení až po odporúčania predpokladov a reflexné [[metacognition|metakognitívne]] [[prompt-engineering|promptovanie]]. Roly na strane vyučujúceho pokrývajú tvorbu materiálov, [[automated-question-generation|generovanie a validáciu otázok]], triedenie spätnej väzby, kurzovú [[learning-analytics|analytiku]], inštrukčný dizajn, vyhľadávanie zdrojov a orchestráciu špecializovaných podagentov.

Dve z nich sú bezpečnejšie zavčasu, pretože obe produkujú artefakt, ktorý človek číta skôr než študenti: generátor otázok spárovaný s validátorom a koncept, ktorý učiteľ upravuje.

## Začnite tam, kde prácu už kontroluje človek

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], prvá [[rct|randomizovaná kontrolovaná štúdia]] systému človek-AI v živom tutorovaní, dal nováčikom v tutorovaní usmernenie v reálnom čase odvodené z uvažovania skúsených tútorov, a to naprieč 900 tútormi a približne 1 800 študentmi. Študenti tútorov s prístupom mali o 4 percentuálne body vyššiu pravdepodobnosť zvládnutia tém, čo stúplo na 9 bodov u najhoršie hodnotených tútorov, ktorých študenti dobehli študentov lepšie hodnotených tútorov v kontrolnej skupine. Stálo to asi 20 dolárov na tútora ročne a analýza viac než 550 000 tutorských správ ukázala, že tútori prešli od dávania odpovedí ku kladeniu navádzajúcich otázok. To je AI, ktorá rozširuje schopnosti [[teacher-role|učiteľa]].

Agent neučil študenta. Podával človeku vstupy v strede rozhovoru a človek rozhodol, čo povedať. Človek v slučke a výsledok blízko práce sú to, čo robí výsledok prenosným do iného kurzu.

## Nepredpokladajte, že viac autonómie kúpi viac učenia

[[ilieva-agentic-genai-higher-education-2026|Štúdia so 130 študentmi v kurze elektronického obchodu]] zistila, že chatboty aj agenti s [[generative-ai|generatívnou AI]] boli hodnotení vyššie než tradičné [[online-teaching-and-learning|e-learning]] v učení a [[personalized-learning|personalizácii]], bez významného rozdielu medzi chatbotom a agentom. Pridaná autonómia nepriniesla na týchto meradlách žiadnu pridanú hodnotu.

Rámec tejto štúdie berie agentov ako ohraničených, človekom dohliadaných učebných partnerov, pričom ciele, kontrolné body a konečné rozhodnutia zostávajú ľuďom. [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] z toho robí pravidlo [[governance|správy a riadenia]]: autonómia by nemala presahovať zrelosť dôkazov ani silu zodpovednej ľudskej kontroly, a dôkazy sú najsilnejšie pri výsledkoch na úrovni artefaktov, najslabšie pri trválom [[learning-gains|učení]] a [[equity-in-ai-education|rovnosti]].

Riziko na strane študenta ide rovnakým smerom. Agent, ktorý za študenta plánuje a monitoruje, odstraňuje prax, ktorá buduje [[self-regulated-learning|samoreguláciu]], a pozýva [[cognitive-offloading|odľahčenie]]. [[agentic-ai-pedagogical-best-practice-2026|Usmernenie k osvedčeným postupom]] žiada zámerné trenie, [[scaffolding|lešenie]], ktoré sa vytráca, a [[human-in-the-loop-ai|ľudský dohľad]]. [[desirable-difficulties|Produktívne trenie]] má funkčné príklady. Agenti konštruktívneho konfliktu, ktorí argumentujú proti slabému dizajnu, zlepšili výsledky dizajnu vo výskume, ktorý prehľad pokrýva. [[simulating-students|Simulovaní rovesníci]] podporujú [[collaborative-learning|kolaboratívne učenie]] a [[socratic-method|sokratovské]] sondovanie a [[medical-education|klinické]] [[simulation|simulácie]] nechajú študentov nacvičovať tam, kde je chyba lacná.

Test pre ktoréhokoľvek z nich: čo po sedení dokáže študent, čo predtým robil agent? Odovzdanie úsudku stojí študenta [[agency|prax]] v jeho používaní.

## Overujte agenta proti vlastnému úsudku

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Osem agentov na výučbu s AI nasadených naprieč lekárskym kurikulom]] bolo zoradených inak podľa skóre generovaných platformou a podľa nezávislej odbornej rubriky. Agent, ktorý bol na platforme tretí, skončil v kvalite výučby posledný. Skóre platformy indexuje výkon študentov, ktorý sa hýbe z dôvodov, ktoré s výučbou nemajú nič spoločné.

Pýtajte sa, čo číslo na paneli počíta, kto napísal rubriku za ním a ako by nízke skóre vyzeralo v práci študenta. [[pedagogical-safety|Pedagogická bezpečnosť]] patrí do tej istej revízie, pretože reťaz [[pedagogical-agent|agentov]] sťažuje povedať, ktorá zložka je zodpovedná, keď je odpoveď nesprávna.

## Plánujte vypnutie

Randomizované štúdie ukazujú, že krátka pomoc AI môže znížiť neskorší výkon bez pomoci, a interval po odňatí, [[cognitive-washout-ai-skill-decay-2026|kognitívne vyplavenie]], je takmer úplne nemeraný. Syntéza za touto stránkou vychádza zo [[meta-analysis-systematic-review|scopingového prehľadu]] 474 štúdií a zisťuje, že práca sa sústreďuje vo [[higher-ed|vysokoškolskom vzdelávaní]], v [[stem-education|STEM]], v krátkodobých dizajnoch a v tutorovaní založenom na texte, pričom len menšina je explicitne zakotvená vo vzdelávacej teórii. Pilot, ktorý sa skončí s licenciou, meral nesprávne okno.

## V čom sa správcovia v tomto mýlia

Agent je vylepšený chatbot, takže vylepšenie by sa malo ukázať vo výsledkoch. V porovnaní so 130 študentmi obe podmienky s AI prekonali e-learning a ani jedna neprekonala druhú.

Panel zoraďuje kvalitu výučby. Zoraďuje výkon študentov a osem agentov vyprodukovalo poradie, ktoré proti odbornej rubrike obrátilo tretie a posledné miesto.

Autonómia je tá funkcia, ktorú treba kúpiť. Pravidlo proporcionality ide opačným smerom a dôkazy sú najtenšie tam, kde je autonómia najväčšia.

Prístup uzatvára medzeru v rovnosti. Nerovný prístup k schopným agentickým systémom ju môže rozšíriť a agent reprodukuje predpojatosť tréningových dát vo veľkom rozsahu.

## Čo vám bude vracať

**„Študenti to nechajú len urobiť.“** Niektorí áno, a architektúra rozhoduje o tom, aké ľahké to bude. Agenti, ktorí za študenta plánujú a píšu koncept, to pozývajú. Agenti, ktorí vyžadujú pokus a potom položia otázku, nie.

**„Hodnotenie dodávateľa hovorí, že to funguje.“** Pýtajte sa, čo to číslo počíta. Ak je to výkon študentov meraný platformou, meria študentov rovnako ako agenta.

**„Nikto nevie povedať, ktorý agent je v reťazi zodpovedný.“** Platí to pre väčšinu súčasných nasadení. Pomenujte vlastníka reťaze, zaznamenávajte, ktorá zložka vyprodukovala ktorý výstup, a predtým než sa čokoľvek dostane do záznamu študenta, udržte ľudský kontrolný bod.

## Čo urobiť tento týždeň

**1.** Napíšte prácu a výsledok, podľa ktorého ju budete posudzovať, po jednej vete, skôr než budete mať ďalší hovor s dodávateľom.

**2.** Obodujte výstup jedného agenta podľa svojej rubriky na desiatich kusoch skutočnej práce študentov a skóre si nechajte.

**3.** Doplňte do plánu pilota datovanú úlohu bez pomoci s vlastníkom.

## Kam ďalej

[[developing-ai-tutor|Vývoj AI tútora]] pokrýva stavbu na strane študenta od cieľa k rebríku pomoci a [[evaluating-ai-interventions-methods|Metódy hodnotenia AI intervencií]] pokrývajú, či vec fungovala. [[intelligent-tutoring|Inteligentné tutorovanie]] a [[ai-literacy|AI gramotnosť]] dodávajú dizajnovú slovnú zásobu, ktorú táto stránka predpokladá.
