---
title: "conText"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Bezplatný prehliadačový tútor, ktorý prečíta fotografiu zošita, PDF alebo text a potom študenta sokratovsky vedie v angličtine alebo španielčine a súčasne kreslí živý graf myšlienok, ktoré počas rozhovoru prepája."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový preklad tejto anglickej stránky, ktorý ešte nebol skontrolovaný rodeným hovorcom.*

conText je najčistejšia malá ukážka smeru, o ktorom [[intelligent-tutoring|AI doučovanie]] väčšinou hovorí a ktorý zriedka implementuje: model neodpovedá na študentovu otázku, ale kladie ďalšiu, a študentove myšlienky sa počas rozprávania kreslia ako graf. Nahrajte fotografiu strany zošita, PDF alebo text a nástroj najprv povie, čomu porozumel, a potom začne hovorený [[socratic-method|sokratovský]] dialóg. Každá myšlienka, ktorú študent pomenuje, sa objaví ako uzol v živom [[knowledge-graph|znalostnom grafe]]; hrany sa objavujú, ako ich rozhovor prepája, a panel uvádza, koľko myšlienok zostáva neprepojených.

## Čo s ním môžete robiť

Slučka je zámerne krátka. Materiál vstúpi (do 10 MB, osem strán PDF alebo 15 000 znakov textu), tútor ho prečíta späť a konverzácia je hlasová — stránka uvádza, že tútor neznámkuje a nepíše za študenta. Graf je artefakt, ktorý robí sedenie neskôr hodnotným: ukazuje, ktoré myšlienky študent skutočne dal do vzťahu a ktoré zostali voľné, čo je oveľa konkrétnejšia vec na preskúmanie než prepis chatu. Sedenie možno exportovať ako súbor XML grafu a iný deň ho znova nahrať a pokračovať, a tlačidlo odstránenia ho okamžite vymaže; inak ho server zahodí po jednej hodine.

Táto kombinácia — tútor, ktorý zadržiava odpoveď, plus vizuálny záznam uvažovania — presne zapadá do toho, čo sa snaží dosiahnuť [[scaffolding|postupné vedenie]] a [[metacognition|metakognitívna]] reflexia, a dáva učiteľovi niečo konkrétne, na čo sa môže pýtať, namiesto hotovej eseje alebo správneho čísla. Rámcovanie samotnej stránky je, že správny výsledok už nepreukazuje porozumenie, keď ho dokáže vyprodukovať generatívna AI, takže proces musí byť viditeľný.

## Pre koho je určený

Študenti, ktorí prechádzajú čítaním alebo sadou úloh a chcú byť skôr vypočutí a spochybnení než obslúžení odpoveďou, učitelia, ktorí chcú nenáročnú kontrolu, či študent dokáže prepájať myšlienky, a rozvojoví pracovníci pre fakulty, ktorí hľadajú konkrétny príklad dôkazu o procese. Učitelia majú príručku zosúladenú s osnovami v angličtine, španielčine, portugalčine a francúzštine; samotný nástroj funguje v angličtine a španielčine a video s prehliadkou je v španielčine.

## Poznámky a upozornenia

Pre nástroj určený študentom nie je zverejnená cena ani účet, zatiaľ čo inštitucionálne nasadenie — cloud, lokálne alebo hybridné — sa ponúka prostredníctvom individuálnej ponuky a stretnutia; berte „bezplatne“ ako stav verejnej ukážky v novembri 2026, nie ako záruku. Text a obrázky idú do hostovanej služby poháňanej Claude a samotná stránka hovorí používateľom, aby pred nahraním odstránili mená, sumy, adresy a názvy firiem, čo presúva bremeno deidentifikácie na nahrávajúceho, nie na platformu. Sedenia sa samy vymažú po hodine, ak nie sú exportované. Spoločnosť za nástrojom tiež inštitúciám ponúka širšiu platformu na hodnotenie myšlienkových grafov a jej tvrdenia o rozlišovaní deduktívnych, induktívnych, abduktívnych a analogických grafov vychádzajú zo štyroch referenčných textov — stránka to nazýva ukážkou, pričom validácia vo veľkom ešte len príde.

## Prepojené pojmy

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
