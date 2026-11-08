---
title: "Teorii și cadre"
created: "2026-09-19T05:40:00-04:00"
type: concept
foundations: [ai-education, theory-development-aied, philosophy-of-ai-in-education]
pedagogy: [learning-theories]
assessment: [assessment-validity, item-response-theory]
methods: [research-methods-aied]
confidence: high
updated: "2026-11-08T07:31:21-05:00"
translation_of: "concepts/theories-and-frameworks"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

> **Teorii și cadre** — inventarul de lucru al structurilor explicative și organizatorice pe care le folosește efectiv această bază de cunoștințe. Teoriile explică de ce se produce învățarea ([[learning-theories|teoriile învățării]], [[self-determination-theory|teoria autodeterminării]], [[sociocultural-learning|învățarea socioculturală]], [[activity-theory-aied|teoria activității]]); cadrele organizează deciziile de design, predare și adoptare ([[tpack|TPACK]], [[samr-model|SAMR]], [[technology-acceptance-model|modelele de adoptare a tehnologiei]], [[icap-framework|ICAP]], [[universal-design-for-learning|designul universal pentru învățare]]); modelele fac afirmațiile despre învățare testabile și calculabile ([[item-response-theory|teoria răspunsului la item]], [[assessment-validity|validitatea evaluării]], [[knowledge-tracing|urmărirea cunoștințelor]]). Folosește această pagină pentru a găsi lentila pe care se sprijină un studiu sau pentru a alege una pentru propria ta muncă.

## Întrebări de reflecție

- O teorie prezice ce se întâmplă când ceva se schimbă; un cadru îți spune la ce să fii atent. Când un studiu raportează un câștig sub sigla unui cadru, dar nu face nicio predicție care ar fi putut eșua, ce s-a învățat de fapt?
- [[tpack|TPACK]], [[samr-model|SAMR]], [[universal-design-for-learning|UDL]], [[technology-acceptance-model|modelele de adoptare]] și [[icap-framework|ICAP]] preced toate [[llm|modelele de limbaj mari]]. Care părți ale lor mai rezistă atunci când instrumentul poate scrie, explica și adapta singur și cum ai afla?
- Câteva dintre teoriile catalogate mai jos au fost create pentru IA în ultimii ani. Ce ar fi necesar pentru ca una dintre ele să fie greșită și a încercat cineva să arate asta?
- Adoptarea este adesea raportată ca mișcare prin stadii. Dacă un coleg raportează că cursul său a trecut „de la substituire la redefinire” anul acesta, ce dovezi independente ai cere înainte de a-l crede?
- O mare parte a acestui domeniu aplică teorie împrumutată, în loc să o testeze. Alege o constatare pe care te bazezi: ar putea fi reîncadrată ca test al [[self-determination-theory|unei teorii]] și ce măsurare ar cere asta?

## Introducere

Fiecare tutor de IA, sistem de feedback și dashboard încorporează presupuneri despre cum învață oamenii, fie că designerii le declară sau nu. Această pagină adună teoriile, cadrele și modelele din care provin acele presupuneri, ordonate lejer după cât de mult se sprijină literatura de cercetare actuală pe ele, și spune pe scurt la ce este bun fiecare. Distincțiile dintre cele trei etichete sunt reale, dar minore, și sunt rezumate spre final, în loc să fie tratate ca subiect. Practic, contează pe ce lentilă se sprijină o afirmație și dacă acea lentilă poate susține afirmația.

## Teorii ale învățării pe care le aplică literatura

Acestea explică mecanisme: numesc părțile care fac munca și prezic ce urmează când acele părți se schimbă. În literatura despre IA sunt în mare parte împrumutate din psihologie și din [[learning-sciences|științele învățării]] și folosite ca ramuri interpretative în jurul unui instrument nou.

- **[[learning-theories|Teoriile învățării (umbrelă)]]** — familia ca întreg, inclusiv polii clasici ai [[behaviorism|behaviorismului]] și [[constructivist|constructivismului]] și decalajul „constructivism cu numele, behaviorism în practică” care reapare în implementările de IA. Conectivismul și teoria încărcării cognitive sunt acoperite și ele aici.
- **[[constructivist|Constructivism]]** — învățarea ca construcție activă a cunoașterii. Fundamentează munca [[project-based-learning|prin proiecte]], [[intelligent-tutoring|tutoriatul de IA]] bazat pe dialog și critica potrivit căreia sistemele de exersare și feedback își încalcă propria pedagogie declarată.
- **[[sociocultural-learning|Teoria socioculturală]]** — învățarea ca mediată de instrumente și interacțiune socială, motiv pentru care IA este teoretizată ca artefact mediator, nu ca simplu ajutor.
- **[[activity-theory-aied|Teoria activității]]** — ia întregul sistem de activitate, inclusiv contradicțiile, ca unitate de analiză. Comună în studiile despre IA adresate profesorilor, unde constatarea interesantă este de obicei tensiunea dintre instrumente, reguli și comunitate.
- **[[situated-learning|Învățarea situată]]** și **[[embodied-learning|învățarea întrupată]]** — învățarea ca legată de context și de corp, contragreutatea la tratarea IA ca mediu pur lingvistic.
- **[[distributed-cognition|Cogniția distribuită]]** — gândirea răspândită între oameni și artefacte, care încadrează asistența IA ca redistribuire a muncii cognitive, nu ca substituire a ei.
- **[[community-of-inquiry|Comunitatea de anchetă]]** — prezențele socială, cognitivă și didactică care fac să funcționeze o experiență online; o teorie a experienței și un cadru de design deodată.
- **[[self-determination-theory|Teoria autodeterminării]]** — autonomia, competența și relaționarea ca precondiții motivaționale. Adesea explicația oferită atunci când utilizarea IA ridică implicarea fără a ridica învățarea.
- **[[cognitive-psychology|Cognitivism]]** — procesarea informației, memoria de lucru și divergența dintre sentimentul învățării și învățarea reală.
- **Teoria percepției sociale (căldură și competență)** — importată din cogniția socială și cercetarea roboților de serviciu, încadrează modul în care utilizatorii judecă credibilitatea unui [[agentic-ai|agent de IA]]: competența percepută a prezis direct credibilitatea feedbackului ChatGPT, în timp ce căldura a acționat doar prin empatia umană (SEM, 230 de studenți; [[chatgpt-feedback-credibility-perceived-learning|Pérez-López et al. (2026)]]).
- **O a patra categorie de afordanță a fost propusă, nu testată.** Codând 24 de studii față de o schemă de afordanță în trei părți, recenzenții au constatat că implicarea, siguranța și autoeficacitatea nu se potriveau categoriilor tehnologice, [[pedagogy|pedagogice]] sau sociale și au propus afordanțe emoționale fundamentate în determinismul reciproc al lui Bandura ([[genai-chatbots-language-learning-affordances-review-2026|Lopez & Arabadzhy (2026)]]).

## Modele ale învățăcelului și ale procesului de învățare

- **[[self-regulated-learning|Învățarea autoreglată]]** — planificarea, monitorizarea și evaluarea propriei învățări. Constructul de bază pentru a întreba dacă sprijinul IA ajunge la fazele care contează sau doar la execuție.
- **[[metacognition|Metacogniția]]** — gândirea despre propria gândire și constructul cel mai des numit atunci când IA este acuzată că gândește în locul studenților.
- **[[motivation|Motivația]]** — de ce se implică învățăceii și constructul care separă implicarea de învățare în studiile despre IA.
- **[[self-efficacy|Autoeficacitatea]]** — credința în propria capacitate, distinctă de competență, și un mediator frecvent între utilizarea IA și rezultate.
- **[[agency|Agenția]]** — cine dirijează munca: constructul din spatele tensiunii control-versus-autonomie a domeniului și din spatele mecanismului agenției delegate din cea mai nouă teorie.
- **[[desirable-difficulties|Dificultățile dezirabile]]**, **[[retrieval-spacing-interleaving|reactualizarea, spațierea și intercalarea]]** și **[[refutation-text|textul de refutație]]** — constatări care fac fricțiunea pedagogic valoroasă, aplicate deciziilor despre cât de mult ar trebui să facă o IA.
- **[[transfer-of-learning|Transferul învățării]]** — dacă capacitatea persistă odată ce sprijinul este retras, ceea ce teoria recentă tratează ca criteriu care separă învățarea de asistență, nu ca un rezultat printre altele.

## Cadre de predare, integrare și adoptare

- **[[tpack|TPACK]]** — cunoașterea profesorului care îmbină tehnologia, pedagogia și conținutul; cadrul implicit pentru studiile despre IA adresate profesorilor.
- **[[technology-acceptance-model|Modelele de adoptare]]** — intenția ca funcție a utilității percepute și a ușurinței de utilizare. Folosite atât de larg încât dependența domeniului de intenție, mai degrabă decât de comportament, este o critică permanentă.
- **[[icap-framework|ICAP]]** — ierarhizează implicarea ca pasivă, activă, constructivă, interactivă; util pentru a întreba ce mod permite de fapt o [[student-ai-interaction|interacțiune cu IA]].
- **[[samr-model|SAMR]]** — de la substituire la redefinire. Popular ca poveste a maturității, slab ca instrument de măsurare.
- **[[universal-design-for-learning|Designul universal pentru învățare]]**, **[[inclusive-learning|învățarea incluzivă]]** și **[[accessibility|accesibilitatea]]** — cadre de design pentru cine este servit și cele mai des invocate în munca despre dizabilitate și [[equity-in-ai-education|echitate]].
- **[[learning-design|Designul învățării]]**, **[[curriculum-design|designul curriculumului]]** și **[[design-thinking|gândirea de design]]** — cum sunt structurate sarcinile, secvențele și programele înainte de a alege vreun instrument.
- **[[change-management|Managementul schimbării]]** — dacă un sistem este preluat deloc, ceea ce este de obicei o întrebare instituțională, nu una pedagogică.

## Modele de măsurare și de calcul

- **[[item-response-theory|Teoria răspunsului la item]]** — estimarea itemilor și a abilității, și modelul care face numerele unui test interpretabile.
- **[[educational-measurement|Măsurarea educațională]]** — peisajul instrumentelor, inclusiv măsurile construite special pentru [[ai-literacy|alfabetizarea în IA]].
- **[[assessment-validity|Validitatea]]** — dacă un instrument măsoară constructul pe care îl pretinde, ceea ce decide dacă un rezultat raportat susține afirmația teoretică atașată lui.
- **[[self-report-measures|Măsurătorile de autoevaluare]]** — sursa dominantă și cea mai fragilă de dovezi din această literatură; despre câteva constructe de mai sus se știe că diferă puternic între autoevaluare și performanță.
- **[[knowledge-tracing|Urmărirea cunoștințelor]]** și **[[student-modeling|modelarea studentului]]** — estimarea stării unui învățăcel în timp din datele de interacțiune.
- **[[cognitive-diagnosis|Diagnosticul cognitiv]]** — atribuirea performanței unor componente specifice de competență, omologul de modelare al predării diagnostice.
- **[[benchmark|Etaloanele]]**, **[[ai-ed-evaluation|evaluarea educației cu IA]]** și **[[psychometrically-aware-ai|conștientizarea psihometrică în designul IA]]** — cum sunt notate, comparate și auditate sistemele și intervențiile.
- **[[design-based-research|Cercetarea bazată pe design]]** — metoda care generează teorie din intervenții proiectate, în loc să o testeze în avans.

## Teorii create pentru era IA

Patru propuneri din baza de cunoștințe construiesc teorie, în loc să o împrumute. Ele sunt pagini de articol, nu noduri de concept, pentru că fiecare este un singur argument:

- **[[generativism-learning-theory|Generativismul]]** — o teorie nouă a învățării care susține că cele patru teorii clasice arată limitări conceptuale semnificative pe măsură ce [[generative-ai|IA generativă]] se răspândește.
- **[[learning-with-machines-toward-a-theory-of-epistemic-co-agency|Co-agenția epistemică]]** — un model al modului în care învățăceii și sistemele de IA produc împreună cunoaștere și înțelegere.
- **[[absent-cognitive-baseline-2026|Baza cognitivă absentă]]** — teoretizează de ce studenții nativi digital în IA își supraestimează propria învățare atunci când IA umflă performanța.
- **[[yan-agentivism-learning-theory-ai-2026|Agentivismul]]** — o teorie de rază medie care numește patru mecanisme (agenția delegată, monitorizarea și verificarea epistemică, internalizarea reconstructivă și transferul sub sprijin redus) și enunță șase propoziții testabile.

## Distincția între cele trei etichete

Cuvintele sunt folosite lejer în literatură, iar diferența merită un paragraf, nu o pagină întreagă:

- **O teorie explică un mecanism** și prezice ce se întâmplă când părțile lui se schimbă. Poate eșua, motiv pentru care studiile care o testează pot raporta dimensiuni de efect.
- **Un cadru organizează sau prescrie.** Numește componentele la care să fii atent, de obicei fără a prezice magnitudini, și nu poate fi falsificat.
- **Un model este o reprezentare formală**, cel mai adesea a măsurării sau a stării învățăcelului. Poate fi ajustat, comparat și dovedit greșit într-un mod în care un cadru nu poate.
- **Etichetele se suprapun.** [[community-of-inquiry|Comunitatea de anchetă]] este o teorie și un cadru de design deodată; [[activity-theory-aied|teoria activității]] este explicativă și analitică. Tratează eticheta ca indiciu despre ce pretinde o sursă, nu ca o categorie de arhivare.

## Straturi înrudite

Două pagini vecine sunt în mod deliberat despre altceva. [[philosophy-of-ai-in-education|Filosofia IA în educație]] pune întrebări normative și conceptuale — *pentru ce* este educația, dacă o mașină poate preda — și nu prezice dimensiuni de efect; un studiu poate fi filosofic naiv și teoretic solid, sau invers. [[theory-development-aied|Dezvoltarea teoriei]] este meta-activitatea de a construi, împrumuta și revizui teorie, inclusiv critica permanentă că multă muncă [[ai-education|AIED]] aplică teorie existentă în loc să o testeze. Această pagină este inventarul; dezvoltarea teoriei privește producerea și revizuirea inventarului.

## Alegerea unei lentile când întrebarea este practică

- **Instructorii** care pornesc de la o problemă pot lucra invers: dacă învățăceii nu se implică, [[icap-framework|ICAP]] și [[self-determination-theory|SDT]] numesc cauze diferite și sugerează remedii diferite; dacă întrebarea este dacă să adopte deloc un instrument, [[technology-acceptance-model|modelele de adoptare]] și [[samr-model|SAMR]] întreabă lucruri diferite despre el.
- **Designerii de învățare** câștigă cel mai mult din cadrele de design — [[universal-design-for-learning|UDL]], [[learning-design|designul învățării]] și [[scaffolding|sprijinul de tip schelă]] — împerecheate cu o teorie care prezice ce se întâmplă când schela este retrasă.
- **Cercetătorii** ar trebui să declare la ce nod pretinde că se referă un studiu și dacă designul îl poate testa efectiv; modelele de măsurare ([[item-response-theory|IRT]], [[assessment-validity|validitatea evaluării]], [[self-report-measures|măsurătorile de autoevaluare]]) decid dacă un rezultat raportat susține acea afirmație.
- **Administratorii** întâlnesc aceste cadre ca întrebări de adoptare și schimbare, unde un model pe stadii este adesea folosit ca poveste a maturității, nu ca instrument.

## Ce nu pot face cadrele

Cadrele nu sunt dovezi. Ele sunt de obicei împrumutate din contexte pre-LLM și localizate de cine le aplică, pot funcționa ca branding, iar modelele pe stadii invită la o adoptare bifată care raportează mișcarea prin niveluri, nu învățarea. Afirmațiile care se sprijină pe un cadru ar trebui citite alături de [[limitations-in-aied-research|limitările transversale ale domeniului]], de [[assessment-validity|validitatea]] a ceea ce a măsurat rezultatul și de limitele cunoscute ale [[self-report-measures|autoevaluării]].

Alinierea mecanism–teorie poate fi totuși decisivă: o sinteză tematică a 55 de studii de [[game-based-learning|învățare bazată pe joc]] sprijinită de IA a constatat că eficacitatea depindea de dacă mecanismul IA punea în act pedagogia pe care trebuia să o servească, nu de sofisticarea algoritmică ([[ai-game-based-learning-systematic-review-2026|Kaşarcı și Yurt (2026)]]).

## Idei greșite frecvente

**„A aplica o teorie împrumutată unui instrument de IA înseamnă a folosi teorie.”** O mare parte a acestui domeniu aplică teorie împrumutată, în loc să o testeze, iar diferența constă în dacă cadrul a făcut o predicție care ar fi putut eșua. Când un studiu raportează un câștig sub sigla unui cadru, fără a se angaja la nicio predicție falsificabilă, nu s-a învățat nimic despre cadru — un rezultat compatibil cu orice teorie din catalog este dovadă pentru niciuna dintre ele.

**„Valoarea unui cadru este cât de bine descrie un sistem pe care l-ai construit deja.”** Aceasta este etichetare post-hoc. O taxonomie care acomodează orice design nu are putere discriminantă, motiv pentru care cadrele descriptive ar trebui judecate după ce exclud. Întrebarea de evaluare nu este „se potrivește sistemul meu cu asta?”, ci „ce fel de sistem ar spune acest cadru că este greșit?”.

**„Teoriile învățării, modelele învățăcelului și cadrele de adoptare sunt lentile interschimbabile.”** Ele răspund la întrebări diferite — cum se produce învățarea, care este starea învățăcelului și de ce se răspândește o practică — iar tipurile lor de dovezi diferă în consecință. Alegerea stratului greșit produce un studiu care măsoară variabila corectă față de predicția greșită, ceea ce se citește ca rezultat nul atunci când este o eroare de categorie.

**„Mai multe cadre înseamnă un domeniu mai matur.”** Cadrele create pentru era IA se acumulează mai repede decât sunt testate, iar acumularea fără falsificare este un simptom, nu un progres. Maturitatea se arată prin rezolvarea unor predicții concurente, nu prin creșterea vocabularului.

## Concepte conectate

- [[theory-development-aied]] — construirea și revizuirea teoriei în domeniu
- [[philosophy-of-ai-in-education]] — stratul normativ și conceptual
- [[learning-theories]] — umbrela pentru teoria învățării
- [[learning-sciences]] — domeniul vecin din care este împrumutată cea mai mare parte a teoriei
- [[limitations-in-aied-research]] — ce poate și ce nu poate susține baza de dovezi
- [[tpack]] — cadrul cunoașterii profesorului
- [[technology-acceptance-model]] — cadrele de adoptare
- [[item-response-theory]] — un model de măsurare
- [[universal-design-for-learning]] — un cadru de design
- [[research-methods-aied]] — cum este testată teoria

## Articole conectate

- [[genai-chatbots-language-learning-affordances-review-2026]] — Afordanțele emoționale propuse ca a patra categorie într-o taxonomie a afordanțelor
- [[ai-game-based-learning-systematic-review-2026]] — Alinierea mecanism–teorie, nu sofisticarea algoritmică, a condus eficacitatea în 55 de studii de învățare bazată pe joc cu IA

- [[rismanchian-ai-education-four-decades-aixed-2026]] — patru decenii de AIED prin cadrul AI×Ed
- [[educating-minds-generative-ai-2026]] — sinteză bogată în teorie despre IA generativă și învățare
- [[activity-theory-teacher-pd-ai-agent-design-2026]] — teoria activității aplicată dezvoltării profesionale a profesorilor
- [[activity-theory-teachers-adoption-ai-sem-2026]] — teoria activității și adoptarea de către profesori
- [[generativism-learning-theory]] — o teorie a învățării propusă pentru era IA generativă
- [[learning-with-machines-toward-a-theory-of-epistemic-co-agency]] — spre o teorie a co-agenției epistemice
- [[absent-cognitive-baseline-2026]] — teoretizarea unui decalaj structural în autoevaluarea studenților nativi în IA
- [[yan-agentivism-learning-theory-ai-2026]] — o teorie de rază medie a învățării pentru interacțiunea om–IA
- [[ai-literacy-instrument-development-systematic-review-2026]] — dezvoltarea de instrumente pentru un construct tânăr
- [[mishra-control-vs-agency-history-2025]] — tensiunea fundamentală control-versus-agenție a domeniului
