---
title: "Jak mohou AI agenti podporovat studenty a instruktory?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
updated: "2026-10-29T11:57:26-04:00"
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Ukázka od dodavatele trvá čtyřicet minut. Agent přečte sylabus, navrhne kvíz na příští týden, označí tři studenty, kteří si neotevřeli četbu, a nabídne, že jim napíše. Vaše prorektorka chce rozhodnutí o licenci do konce měsíce.

[[agentic-ai|Agent]] plánuje, volá nástroje, drží kontext, dělí práci na podúkoly a přizpůsobuje se napříč tahy, což je víc, než dělá [[conversational-ai|chatbot]]. Role na straně studenta a na straně instruktora, které to otevírá, jsou skutečné. Důkazy ale neukazují, že více autonomie produkuje více učení: v jediné studii s přímým srovnáním tady agent a chatbot skončili nerozhodně. Dejte autonomii tam, kde výstup kontroluje člověk, plánování nechte na studentovi a kvalitu výuky skórujte proti vlastní rubrice.

## Stručně

**1.** Pojmenujte úkol dřív než produkt.

**2.** Začněte na straně instruktora, kde práci už kontroluje učitel.

**3.** Přidanou autonomii berte jako náklad, dokud důkazy neřeknou opak.

**4.** Plánování a posuzování nechte na studentovi, protože právě ty má zadání budovat.

**5.** Skórujte agenta proti své rubrice a naplánujte kontrolu bez pomoci dřív, než pilot skončí.

## Vyberte úkol dřív, než vyberete agenta

[[agentic-workflows-education|Agentní pracovní postupy ve vzdělávání]] pojmenovávají čtyři opakující se schopnosti: reflexe, plánování, používání nástrojů a spolupráce více agentů. Každá přidává vedle možnosti i náklad, v [[explainable-ai|vysvětlitelnosti]], koordinaci, [[trust-calibration|důvěře]], latenci a dohledu.

Role na straně studenta jdou od [[adaptive-learning|adaptivního]] doučování a plánování studia přes [[formative-assessment|formativní]] zpětnou vazbu, vedené [[problem-solving|řešení problémů]] a generování procvičování až k doporučením předpokladů a reflektivnímu [[metacognition|metakognitivnímu]] [[prompt-engineering|promptování]]. Role na straně instruktora pokrývají tvorbu materiálů, [[automated-question-generation|generování otázek]] a jejich validaci, třídění zpětné vazby, [[learning-analytics|analytiku]] kurzu, návrh výuky, vyhledávání zdrojů a orchestraci specializovaných podagentů.

Dvě z nich jsou zpočátku bezpečnější, protože obě produkují artefakt, který člověk čte dřív než studenti: generátor otázek spárovaný s validátorem a koncept, který učitel upravuje.

## Začněte tam, kde práci už kontroluje člověk

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], první [[rct|randomizovaný kontrolovaný pokus]] se systémem člověk-AI při živém doučování, dával začínajícím tutorům vodítka v reálném čase odvozená z uvažování zkušených tutorů, a to u 900 tutorů a zhruba 1 800 studentů. Studenti tutorů s přístupem měli o 4 procentní body vyšší pravděpodobnost zvládnutí tématu, u nejhůř hodnocených tutorů to stouplo na 9 bodů a jejich studenti dohnali studenty lépe hodnocených tutorů v kontrolní skupině. Stálo to asi \$20 na tutora ročně a analýza více než 550 000 zpráv z doučování ukázala, že tutoři přešli od dávání odpovědí k pokládání navádějících otázek. To je AI, která posiluje [[teacher-role|učitele]].

Agent studenta neučil. Zásoboval člověka uprostřed rozhovoru a člověk rozhodl, co říct. Člověk ve smyčce a výsledek blízko samotné práce jsou to, co činí výsledek přenositelným do jiného kurzu.

## Nepředpokládejte, že více autonomie kupuje více učení

[[ilieva-agentic-genai-higher-education-2026|Studie se 130 studenty v kurzu elektronického obchodu]] zjistila, že chatbota i agenty s [[generative-ai|generativní AI]] hodnotili výš než tradiční [[online-teaching-and-learning|e-learning]], co do učení i [[personalized-learning|personalizace]], bez významného rozdílu mezi chatbotem a agentem. Přidaná autonomie, žádná přidaná hodnota v těchto mírách.

Rámec této studie chápe agenty jako ohraničené, člověkem dohlížené studijní partnery, s cíli, kontrolními body a konečnými rozhodnutími ponechanými lidem. [[beyond-agent-label-agentic-ai-governance-2026|Za nálepkou agenta]] z toho dělá pravidlo [[governance|správy]]: autonomie nemá přesáhnout zralost důkazů ani sílu odpovědné lidské kontroly, a důkazy jsou nejsilnější u výsledků na úrovni artefaktů, nejslabší u trvalého [[learning-gains|učení]] a [[equity-in-ai-education|spravedlnosti]].

Riziko na straně studenta jde stejným směrem. Agent, který za studenta plánuje a monitoruje, odstraňuje procvičování, které buduje [[self-regulated-learning|samoregulaci]], a zve k [[cognitive-offloading|kognitivnímu odklánění]]. Doporučení [[agentic-ai-pedagogical-best-practice-2026|osvědčených postupů]] žádají záměrné tření, [[scaffolding|scaffolding]], které se vytrácí, a [[human-in-the-loop-ai|lidský dohled]]. [[desirable-difficulties|Produktivní tření]] má funkční příklady. Agenti konstruktivního konfliktu, kteří se hádají se slabým návrhem, v prostudovaném výzkumu zlepšili výsledky návrhu. [[simulating-students|Simulovaní vrstevníci]] podporují [[collaborative-learning|spolupráci ve výuce]] a [[socratic-method|sokratovské]] dotazování a [[medical-education|klinické]] [[simulation|simulace]] nechávají studenty nacvičovat tam, kde chyba není drahá.

Test pro kterýkoli z nich: co student po relaci umí sám, co předtím dělal agent? Předání úsudku stojí studenta [[agency|procvičování]] toho úsudku.

## Zkontrolujte agenta proti vlastnímu úsudku

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Osm AI agentů pro výuku nasazených v lékařském kurikulu]] se umístilo různě podle skóre generovaného platformou a podle nezávislé expertní rubriky. Agent, který byl v platformě třetí, skončil v kvalitě výuky poslední. Skóre platformy indexují výkon studentů, a ten se hýbe z důvodů, které s výukou nemají nic společného.

Ptejte se, co číslo na dashboardu počítá, kdo napsal rubriku za ním a jak by nízké skóre vypadalo v práci studenta. [[pedagogical-safety|Pedagogická bezpečnost]] patří do stejné revize, protože řetěz [[pedagogical-agent|agentů]] ztěžuje říct, která složka odpovídá za chybnou odpověď.

## Plánujte vypnutí

Randomizované pokusy ukazují, že krátká pomoc AI může snížit pozdější výkon bez pomoci, a interval po odebrání nástroje, [[cognitive-washout-ai-skill-decay-2026|kognitivní vymývání]], je téměř úplně nezměřený. Syntéza, o kterou se tato stránka opírá, vychází ze [[meta-analysis-systematic-review|scopingového přehledu]] 474 studií a nachází práci soustředěnou ve [[higher-ed|vysokém školství]], v [[stem-education|STEM]], v krátkodobých designech a v doučování založeném na textu, přičemž jen menšina je výslovně zakotvena ve vzdělávací teorii. Pilot, který skončí s koncem licence, měřil špatné okno.

## V čem se správci mýlí

Agent je vylepšený chatbot, takže vylepšení se má projevit ve výsledcích. Ve srovnání se 130 studenty obě podmínky s AI porazily e-learning a ani jedna neporazila druhou.

Dashboard hodnotí kvalitu výuky. Hodnotí výkon studentů a osm agentů vytvořilo pořadí, které proti expertní rubrice obrátilo třetí a poslední místo.

Autonomie je ta funkce, kterou je třeba koupit. Pravidlo proporcionality jde opačným směrem a důkazy jsou nejtenčí tam, kde je autonomie největší.

Přístup uzavírá mezeru ve spravedlnosti. Nerovný přístup ke schopným agentním systémům ji může rozšířit a agent reprodukuje zaujatost trénovacích dat ve velkém.

## Co vám budou říkat

**„Studenti to prostě nechají udělat.“** Někteří ano, a architektura rozhoduje o tom, jak snadno. Agenti, kteří za studenta plánují a píší koncept, k tomu zvou. Agenti, kteří vyžadují pokus a pak položí otázku, ne.

**„Hodnocení od dodavatele říká, že to funguje.“** Ptejte se, co to číslo počítá. Pokud je to výkon studentů měřený platformou, měří studenty stejně jako agenta.

**„Nikdo neumí říct, který agent v řetězu odpovídá.“** To platí o většině současných nasazení. Pojmenujte vlastníka řetězu, zaznamenávejte, která složka vytvořila který výstup, a držte lidský kontrolní bod dřív, než se cokoli dostane do záznamu studenta.

## Co udělat tento týden

**1.** Napište úkol a výsledek, podle kterého ho budete posuzovat, každý jednou větou, dřív než příští hovor s dodavatelem.

**2.** Ohodnoťte výstup jednoho agenta proti své rubrice na deseti kusech skutečné práce studentů a skóre si nechte.

**3.** Přidejte do plánu pilotu datovanou úlohu bez pomoci s vlastníkem.

## Kam dál

[[developing-ai-tutor|Vývoj efektivního AI tutora]] pokrývá stavbu na straně studenta od cíle k žebříku pomoci a [[evaluating-ai-interventions-methods|Hodnocení intervencí s AI]] pokrývá, zda to fungovalo. [[intelligent-tutoring|Inteligentní doučování]] a [[ai-literacy|gramotnost v oblasti AI]] dodávají slovní zásobu návrhu, kterou tato stránka předpokládá.
