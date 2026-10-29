---
title: "Care sunt primele 10 constatări din cercetarea despre IA în educație pe care ar trebui să le știe cadrele didactice?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
updated: "2026-10-29T15:41:27-04:00"
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-10-28T11:06:17-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Este săptămâna dinaintea începerii semestrului sau săptămâna de după prima lucrare mare, iar cineva te-a întrebat ceva la care nu poți răspunde din experiență: ce pot face studenții cu IA la această temă și ce dovedește apoi nota. Poate că un eseu scris acasă s-a întors lustruit într-un fel care nu se potrivește cu munca anterioară a studentului. Poate că departamentul tău scrie o politică privind IA și vrea ca cursul tău să se conformeze până vineri. Poate că un student contestă o notă și nu poți arăta ce anume demonstrează lucrarea.

Concluzia esențială a cercetării pe care a strâns-o această bază de cunoștințe: felul în care integrezi [[generative-ai|IA generativă]] în activitate decide dacă aceasta întărește gândirea sau o înlocuiește. Pârghia pe care o controlezi este proiectarea sarcinii. Testul oricărei proiectări este ce pot face încă studenții atunci când instrumentul dispare. Cele zece constatări care dau numele acestei pagini sunt mai jos, ordonate după decizia pe care o informează fiecare.

## Pe scurt

**1.** Numește gândirea pe care tema există ca să o producă, apoi dă IA o sarcină care nu efectuează acea gândire.

**2.** Stabilește regula privind IA pentru fiecare temă, nu pentru întreg cursul, și scrie motivul lângă ea, acolo unde îl vor citi studenții.

**3.** Pune în fiecare unitate cel puțin o etapă notată pe care studentul o încheie fără nicio IA de față.

**4.** Judecă activitatea după ce pot face studenții săptămâni mai târziu, fără ajutor, nu după calitatea lucrării pe care o depun.

**5.** Întreabă cum au folosit studenții instrumentul și notează verificarea, nu autentificările.

**6.** Uită-te la ce studenți ajută proiectarea, pentru că o medie îi ascunde pe cei pe care îi pierde.

## Stabilește pentru ce este tema

Scrie o singură propoziție care numește competența înainte să atingi instrumentul: ce ar trebui să poată face un student la finalul acestei unități și nu putea face la început? Răspunsul ar putea fi: să construiască un argument pe baza dovezilor, să scrie o demonstrație, să ajungă la un diagnostic, să ia o decizie de proiectare în condiții de constrângeri. Dacă nu poți numi competența, regula privind IA va fi arbitrară, iar studenții vor observa asta.

Două direcții de cercetare explică de ce acest pas vine primul. [[productive-failure|Eșecul productiv]] este constatarea că învățăceii rețin adesea mai mult atunci când încearcă o problemă înainte de a li se arăta cum se rezolvă, așa că frecarea este uneori mecanismul, nu un obstacol de înlăturat. [[icap-framework|Cadrul ICAP]] prevede învățare diferită în funcție de folosirea pasivă, activă, constructivă și interactivă a aceluiași material. Ambele indică o singură întrebare de proiectare: ce face studentul în timp ce instrumentul este deschis?

Ilustrarea cea mai clară din corpus vine dintr-o comparație între un chatbot construit pe o teorie, care oferea sprijin de tip schelă pentru explicațiile studenților, ChatGPT obișnuit și predarea obișnuită. Diferențele imediate nu au fost semnificative. Patru săptămâni mai târziu, grupul cu sprijin de tip schelă a reținut mai multe cunoștințe conceptuale. Este un singur studiu, nu un efect universal, iar conținutul lui util este forma rezultatului: proiectarea poate cântări mai greu decât capacitatea modelului, pentru că ceea ce a separat condițiile a fost ce anume le cerea activitatea studenților să facă.

[[kumar-genai-computing-education-systematic-review-2026|Revizuirea sistematică a 72 de studii de educație în informatică evaluate de colegi]] ajunge la același nivel din direcția opusă. Ea numește angajarea critică față de rezultatele IA „mecanismul comun care leagă fiecare intervenție eficace din corpus” și recomandă [[scaffolding|acces gradual]], introducând IA generativă doar după ce s-a demonstrat o competență de bază. Niciuna dintre cele două afirmații nu privește ce produs ai licențiat.

## Dă IA o sarcină care nu este gândirea pe care o notezi

Decenii de [[intelligent-tutoring|cercetare despre tutoratul inteligent]] descriu tiparul care funcționează: diagnostichează ce înțelege studentul, pune întrebări, dă indicii graduale, cere explicații, oferă feedback. Totul, cu excepția predării soluției. Cercetarea actuală despre [[pedagogical-agent|agenți pedagogici]] trasează aceeași linie între comportamentul de predare și producerea răspunsului, iar [[thermomix-genai-education-analogy-2026|analogia cu Thermomix]] o face concretă. Un aparat poate găti în locul tău, iar atunci pierzi deprinderea, sau poate acționa ca partener de testare pentru idei pe care tot tu trebuie să le înțelegi. Aceste moduri corespund cadrului ICAP: pasiv, activ, constructiv, interactiv.

Instrumentele înguste arată același principiu. Un [[structrag-diagram-reasoning-ai-tutoring|tutore care citește structural diagrame de inginerie]] a atins 93,0% F1 la nivel de muchie față de 89,3% acuratețe pe diagrama întreagă, ceea ce înseamnă că poate numi conexiunile lipsă sau citite greșit, chiar și atunci când toată diagrama este greșită. Este feedback pe baza căruia studentul poate acționa, în loc de un admis sau respins.

Întrebarea mai grea este ce are voie tutorele să recomande. Când o [[tuo-armada-multi-agent-debate-overreliance-2026|dezbatere între mai mulți agenți]] a înlocuit „iată răspunsul IA” cu o discuție în care propria poziție preferată era reținută, trecerea dăunătoare la o poziție incorectă a IA a scăzut de la 42-60,5% la 5,7-8,2%. Și adoptarea unei poziții corecte a IA a scăzut, de la 61,1-72,3% la 22,1-33,3%. Reținerea unei recomandări protejează judecata inițială a studentului și lasă corectarea în seama deliberării, așa că proiectarea face un schimb: mai puțină corectare a erorilor, în schimbul mai puținelor rătăciri încrezătoare. Decide care dintre cele două o vrei din schimb, înainte să scrii promptul.

În clasă, asta se implementează ieftin. O secvență [[socratic-method|socratică]] este tiparul pe care să îl urmărești, cu instrumentul întrebând, nu răspunzând. Spune studenților să ceară „un singur indiciu”, „pune-mi întrebări” sau „critică-mi raționamentul” și fă din „rezolvă asta” cazul neobișnuit. Schimbi verbul implicit al interacțiunii, adică exact partea pe care studenții o controlează.

O limită merită spusă direct. Cea mai mare parte a acestor dovezi vine din sarcini scurte, în câteva cursuri, și niciuna nu promite că un tutore care dă indicii va ridica notele la examen în grupa ta. Pentru această întrebare ai nevoie de studiul randomizat discutat mai jos, iar rezultatul lui dă de gândit.

## Stabilește regula la nivelul temei și spune de ce

Un cadru util separă trei cazuri. Restrânge IA atunci când măsori competența independentă. Oferă sprijin de tip schelă atunci când ajutorul mărginit nu compromite acea competență. Cere IA atunci când colaborarea pricepută om-IA este ea însăși lucrul pe care studenții trebuie să îl învețe. Majoritatea cursurilor le conțin pe toate trei, în săptămâni diferite, de aceea o singură regulă la nivel de curs eșuează mereu la margini.

[[zou-is-this-a-trap-student-teachers-genai-2026|Studiul cu metode mixte pe 85 de viitori profesori]] arată ce produce o regulă fără motiv. 62,4% dintre participanți au refuzat să folosească IA generativă chiar și acolo unde era permisă, iar 41,5% dintre cei care au refuzat au invocat teama de a fi acuzați de [[academic-integrity|plagiat]]. 9 din 11 persoane intervievate au citit politica permisivă însăși ca pe o capcană. În același studiu, doar 37,6% au folosit măcar o dată IA generativă permisă, alegerile lor au urmat cultura programului și [[assessment|proiectarea evaluării]] mai mult decât permisiunea unui anumit curs, iar propriile declarații de divulgare au subraportat folosirea reală în fiecare curs.

Citește aceste cifre ca pe un caiet de sarcini pentru proiectare. O permisiune fără scop declarat arată ca o înscenare, iar o interdicție fără scop declarat arată ca un obstacol pe care să îl ocolești. Studenții reacționează la rațiunea atașată acestei teme. Pune regula în fișa temei, pe un singur rând, și fă rândul destul de precis încât studentul să își dea seama dacă ajutorul pe care urmează să îl accepte subminează exact lucrul pe care îl notezi.

## Notează ceva ce studentul a făcut fără instrument

Acesta este pasul care face treaba, iar dovezile de aici sunt cele mai puțin ambigue din pagină.

Revizuirea celor 72 de studii a constatat că IA generativă a crescut în mod fiabil finalizarea pe termen scurt și a redus timpul de lucru la sarcină în 36 de studii, ceea ce autorii tratează drept rezultatul cel mai bine replicat din corpus, iar aceste câștiguri de eficiență „nu se transferă în performanța independentă” în 21 de studii. Un [[yan-cognitive-outsourcing-genai-assessments-2026|studiu cu gândire cu voce tare pe 38 de studenți]] arată cum se întâmplă asta în cazul obișnuit. [[cognitive-offloading|Descărcarea cognitivă]] afectează cel mai tare învățarea atunci când IA efectuează raționamentul pe care studentul ar fi trebuit să îl exerseze. Acolo, 76,32% au rămas în tiparul cu un singur schimb, întreabă, primește răspuns, se oprește, iar doar 21,06% au alternat folosirea IA cu cititul și redactarea independentă. Cel mai mare grup, 31 din 38, a descris obiective de stăpânire, a lucrat în schimburi fragmentate și apoi a raportat supra-dependență, comoditate mentală și uitare rapidă; unul dintre ei a spus-o așa: „viteza cu care uiți este și ea foarte mare”. O [[critical-thinking-paradox-genai-learning-2026|lucrare conceptuală din 2026]] dă un nume acestui tipar. Notele și produsele cresc, în timp ce munca mentală care produce învățare durabilă scade.

Studiul randomizat închide dezbaterea pentru cel puțin un context. Un [[bassner-performance-learning-dissociation-ai-programming-2026|RCT cu trei brațe pe 275 de studenți la CS1]] a comparat un tutore care dă indicii și reține soluțiile complete, ChatGPT fără restricții și resursele web tradiționale. Notele la exerciții s-au separat net: 71,84% pentru ChatGPT față de 29,85% pentru grupul de control fără IA, cu tutorele care dă indicii la 57,50%. Câștigurile de cunoștințe conceptuale nu au diferit deloc între cele trei brațe: 0,83, 0,71 și 0,85 puncte (timp × grup p = 0,773). Ambele condiții cu IA au redus frustrarea și încărcarea extraneză, iar doar tutorele care dă indicii a crescut motivația intrinsecă. Instrumentul pe care studenții l-au evaluat ca mai util și mai ușor a fost și cel care a redus cel mai mult procesarea ce produce învățare.

Observă ce nu poate susține această proiectare. Este un singur curs, un singur semestru, o singură limbă, iar notele la exerciții sunt prin construcție performanță asistată, exact măsura despre care studiul avertizează să nu te încrezi în ea. Nu arată că tutorele sunt inutile. Arată că rezultatul pe care alegi să îl măsori decide răspunsul pe care îl obții și că preferința studenților nu este o măsură a învățării.

Așadar, notează versiunea fără ajutor. O sarcină pe unitate în care studenții reactualizează, explică, rezolvă sau apără idei fără nicio IA de față, și pune puncte reale pe ea. Argumentul de validitate din spate este în [[assessment-validity|validitatea evaluării]]: un produs lustruit făcut acasă nu mai arată că persoana care l-a predat are competența pe care o afișează produsul. [[redesign-assessment-ai-era|Regândirea evaluării în era IA]] parcurge întreaga arhitectură, inclusiv etapa autentificată ieftină pentru cursurile mari.

## Schimbă tema pe care o ai deja, nu tot cursul

Cei mai mulți profesori care pun această întrebare nu construiesc un curs nou. Au o lucrare de semestru, un referat de laborator sau un set de probleme care funcționează de ani de zile și vor să știe unde să pună cusătura. Desfă tema pas cu pas, întreabă la fiecare pas ce anume evaluezi acolo și lasă răspunsul să stabilească granița. Este metoda la nivel de sarcină documentată în [[mccorkle-aligned-genai-course-policy-2025|lucrarea lui McCorkle despre politica de curs aliniată]], iar o singură trecere peste tema ta cea mai contestată e de obicei suficientă ca să vezi forma.

O lucrare de semestru de zece pagini se separă de obicei așa. Alegerea temei și căutarea surselor sunt locul unde stă judecata, așa că un instrument care propune o teză sau adună lista de lecturi a efectuat exact partea pe care o notezi. Sinteza și argumentarea sunt constructul însuși. Formatarea citărilor, verificarea referințelor și editarea lingvistică sunt pași în care folosirea instrumentului este invizibilă pentru constructul tău, iar interdicția acolo nu îți aduce nimic în afară de resentiment. Spune asta în fișa temei, pas cu pas, într-un tabel scurt dacă vrei.

Apoi fă vizibil pasul din mijloc. Cere o justificare adnotată de o pagină, predată împreună cu lucrarea, care numește două surse pe care studentul le-a respins și de ce, o afirmație pe care a revizuit-o după verificare și locul în care a ales să nu urmeze o sugestie. Noteaz-o cu aceeași specificitate pe care o folosești pentru text. O justificare contează doar dacă un student care o sare pierde mai mult decât câștigă sărind-o, așa că dă-i suficiente puncte încât aritmetica să fie evidentă.

Un set de probleme este mai ușor, iar cusătura stă în alt loc. Răspunsurile nu sunt constructul; alegerea metodei și diagnosticarea erorilor sunt. Cere primul pas al fiecărei probleme, în cuvintele studentului, înainte de a se deschide vreun instrument, și rezolvă o problemă din set în clasă, fără nimic disponibil. Este o schimbare mai mică decât pare și transformă setul dintr-un produs pe care nu îl poți verifica într-o urmă a felului în care a gândit studentul.

La un referat de laborator, cusătura este de obicei interpretarea datelor și analiza erorilor. Lasă instrumentul să formateze tabelul și să verifice unitățile de măsură. Ține în mâinile studentului interpretarea, alegerea a ceea ce contează drept anomalie și explicarea dezacordului cu rezultatul așteptat, și notează-le cu puncte atașate.

Tiparul se generalizează: localizează pasul în care se află competența, protejează acel pas, eliberează restul și pune dovada procesului acolo unde sunt punctele. Ce eviți este regândirea care schimbă felul în care se produce munca fără să schimbe ce poate susține nota.

## Judecă instrumentele de feedback și de notare după performanța ulterioară

[[ai-feedback-quality|Feedbackul generat de IA]] poate fi oportun, specific, scalabil și acceptabil pentru studenți, inclusiv în [[higher-ed|învățământul superior]]. Dacă produce învățare depinde de acuratețe, de potrivirea [[pedagogy|pedagogică]] și de [[feedback-literacy|alfabetizarea în feedback]] a studenților, adică de capacitatea lor de a judeca feedbackul și de a acționa pe baza lui. Dacă îl cântărești pentru feedback sau pentru notare, cifrele de mai jos sunt cele pe care să le aduci în discuția de achiziție.

O [[mcinnes-salvaging-constructive-alignment-genai-2026|analiză critică a 14 documente de îndrumare instituțională]] a constatat că prompturile generice produc rezultate, activități și evaluări în izolare. Instrumentul nu poate ști cât de interconectat este un subiect, așa că feedbackul rămâne general în loc să fie diagnostic precis.

Configurarea chiar mișcă calitatea, măsurabil. Într-un [[teacher-ai-literacy-prompt-feedback-quality-2026|studiu despre feedbackul IA pe obiective de învățare]], doar modelul explica 26,9% din variația calității feedbackului, iar adăugarea promptului a ridicat-o la 42,8%, adică 15,9% în plus. Singura caracteristică a promptului care a contat a fost terminologia specifică disciplinei; înlocuirea ei cu parafraze de zi cu zi a înrăutățit semnificativ feedbackul. Și alegerea modelului a contat: Claude 3 și Gemini Advanced au produs feedback evaluat semnificativ mai slab decât ChatGPT-4.

Notarea este și mai șubredă. O [[llm-automated-grading-programming-comparison-2026|comparație între 18 modele de limbaj care au notat 6.081 de lucrări de programare]] a găsit note medii de la 0,290 la 0,608 în funcție de model, cu rate de acord exact de doar 0,20 la unele și de cel mult 0,74. Doi studenți cu lucrări identice pot fi notați diferit în funcție de modelul pentru care departamentul a cumpărat licență.

Apoi este întrebarea care îi interesează pe studenți: dacă feedbackul schimbă ce pot face ei mai târziu. Un [[llm-feedback-handwritten-mathematics-exam-performance-2026|proiect derulat un semestru într-un curs de matematică de licență]], cu 343 de studenți cu limba engleză și 236 cu limba neerlandeză, a generat comentarii individualizate și exerciții de practică din fișe de răspuns fotografiate. Evaluatorii au considerat exercițiile de practică cel mai puternic punct, iar specificitatea diagnostică și claritatea, cele mai slabe. Crossoverul randomizat pe întrebări de examen legate între ele nu a găsit nicio diferență semnificativă statistic după ajustare (pHolm = 0,104), iar prezența la curs a urmărit notele la examen mult mai clar decât expunerea la feedback (ρ = 0,49 și 0,54, ambele p < 0,001). Feedbackul pe care studenții îl prețuiesc și pe baza căruia acționează nu este același lucru cu feedbackul care produce învățare măsurabilă.

Mai este o capcană dacă lași un model să noteze. Într-un [[llm-grading-self-preference-bias-2026|studiu pe 1.426 de teze de psihologie din zece ani universitari]], toate cele patru evaluatoare IA au notat cel mai slab lucrările scrise de studenți și cel mai sus lucrările scrise de IA. 10 din 16 comparații au fost destul de mari încât diferențe de această mărime sunt rare în cercetarea educațională, până la cel mai mare decalaj observat, iar părtinirea a fost cea mai puternică la textele generate în întregime de IA. Un evaluator poate recompensa un text pentru că seamănă cu o mașină, chiar și atunci când instrucțiunile lui spun să judece conținutul.

## Separă studenții pe care proiectarea îi ajută de cei pe care îi pierde

O îmbunătățire medie poate ascunde un curs în care cei puternici devin mai puternici, iar cei slabi primesc o ofertă mai proastă. [[digital-divide|Decalajul digital]] trece acum pe cel puțin trei linii: accesul la instrumente, priceperea de a le folosi și cine primește efectiv un rezultat util. Doar priceperea de a scrie prompturi produce un „privilegiu al promptului”, în care utilizatorii mai experimentați obțin rezultate mai bune din același sistem.

Revizuirea celor 72 de studii separă două mecanisme. Un decalaj de competență apare acolo unde studenții cu [[prior-knowledge|cunoștințe anterioare]] mai solide transformă ajutorul în câștiguri durabile, în timp ce studenții mai puțin pregătiți îl substituie exersării. Un decalaj de resurse apare acolo unde internetul fiabil și accesul plătit susțin o folosire mai bună a instrumentelor între instituții. Doar șase studii din corpus au examinat direct echitatea, pe care autorii o tratează ca pe problema însăși, nu ca pe o notă de subsol; [[equity-in-ai-education|echitatea în educația cu IA]] este locul unde se dezvoltă acest argument.

Ajutorul poate închide un decalaj atunci când studenții care au nevoie de el sunt cei care îl folosesc. Un [[co-learning-ai-agent-hidden-rules-2026|studiu cu patru experimente despre învățăcei care descoperă reguli ascunse cu ajutorul unui agent IA]] a constatat că sprijinul a redus cu 33-52% numărul de mutări necesare, iar beneficiul s-a concentrat la cei mai slabi, în timp ce învățăceii mai puternici au rămas în mare neafectați. Aceasta este versiunea optimistă, și depinde de faptul că studenții care au cel mai mult nevoie de ajutor sunt cei care îl folosesc bine, ceea ce decalajul de competență sugerează că nu vor reuși fără predare.

## Ține deciziile cu consecințe la o persoană

Alfabetizarea în IA a cadrelor didactice nu este acolo unde presupune discuția despre politici. Între [[science-educators-ai-literacy-postqualification-2026|profesorii de științe care încheiaseră deja o formare în IA]], alfabetizarea medie în IA a fost 16,7 din 30, sub valoarea eșantionului de referință, 18,79, și nu a fost legată de vârstă, gen, ani de serviciu sau cât de mult folosiseră IA. Un [[ai-tpack-mathematics-teacher-education-2026|sondaj pe 412 viitori profesori de matematică]] a găsit pregătirea într-o etapă incipientă, cu convingerile despre predare la cel mai înalt nivel, o medie de 5,24 pe o scală de 7 puncte, și cunoștințele tehnice despre IA la cel mai jos nivel, 4,23.

Acesta este un argument pentru instrumente mărginite, nu autonome. Analiza documentelor de îndrumare propune un agent [[rag|cu generare augmentată prin recuperare]], configurat instituțional, care ghidează gândirea fără să dea răspunsuri, semnalează nealinierea și escaladează la o persoană la margini, cu o autoritate descrisă drept „derivată și mărginită”. Există dovezi directe pentru a ține oamenii în buclă, nu în fața ei: un [[instructional-agents-multi-agent-course-gen|sistem de generare a materialelor de curs]] a obținut scoruri mai bune când oamenii au rămas implicați, modul cu cea mai multă contribuție umană îmbunătățind scorurile evaluatorilor cu 0,5-0,9 puncte față de modul complet autonom. Evaluatorii autonomi ai sistemului s-au strâns în jurul valorilor 2,9-3,1, în timp ce evaluatorii umani s-au împrăștiat și au discriminat mai mult, așa că autorii au păstrat judecata umană drept principalul semnal de calitate.

Versiunea practică pentru un curs: lasă IA să schițeze, să sorteze și să semnaleze. Ține acuratețea, corectitudinea, confidențialitatea și orice decizie despre progresul unui student sub [[human-in-the-loop-ai|supraveghere umană semnificativă]]. Riscurile care fac asta necesară sunt setul cunoscut: părtinire, confidențialitate, transparență, [[agency|autonomia]] învățăcelului, responsabilitate și [[pedagogical-safety|siguranță pedagogică]]. Această listă este motivul pentru care [[teacher-ai-competency|competența pedagogică în IA]] contează mai mult decât familiaritatea tehnică.

## Ce greșesc cadrele didactice aici

**„Lucrarea lustruită din fața mea este dovada că studentul poate face asta.”** Este dovada că lucrarea este lustruită. Decalajul de 71,84% față de 29,85% la notele pe exerciții, cu câștiguri conceptuale constante în același studiu, și cele 36 de studii din revizuire care au găsit eficiență fără transfer descriu toate distanța dintre performanța asistată și competență. Dacă produsul este singurul lucru pe care îl notezi, atunci produsul este tot ce ai măsurat.

**„Dacă IA este un tutore, este de partea bună a liniei.”** Eticheta nu aduce garanția. În studiul CS1, tutorele care dă indicii a evitat daunele pe care le-a făcut ChatGPT fără restricții la exerciții și tot nu a produs niciun avantaj conceptual față de absența oricărei IA. A reține răspunsul final nu este același lucru cu a reține raționamentul, iar un tutore le poate face pe a doua în timp ce pare că o face doar pe prima.

**„Un detector sau o regulă mai strictă rezolvă problema integrității.”** Detectarea abordează un singur răspuns dintre mai multe. Studiul cu viitori profesori a constatat că teama de acuzație a suprimat folosirea permisă, că cultura programului a prezis comportamentul mai bine decât orice politică de curs și că autodeclarațiile au subraportat folosirea în fiecare curs. O regulă mai strictă schimbă ce ascund studenții, nu ce învață.

**„O singură regulă privind IA pentru tot cursul este mai corectă și mai simplă.”** Mai simplă, da. Dovezile favorizează regulile stabilite pentru fiecare temă, pentru că cele trei cazuri, restrânge, oferă sprijin de tip schelă și cere, coexistă în majoritatea cursurilor, iar aceeași permisiune înseamnă lucruri diferite într-un referat de laborator și într-o reflecție. Pozițiile uniforme, valabile pentru tot cursul, sunt și cele pe care studenții le ocolesc cel mai ușor.

**„Studenții care spun că instrumentul ajută învață din el.”** Satisfacția este o [[self-report-measures|măsură autoreportată]], iar în studiul CS1 condiția cel mai bine evaluată a fost cea care a redus cel mai mult procesarea din spatele învățării. Proiectul de matematică a găsit aceeași scindare: feedback pe care studenții îl prețuiau, nicio diferență semnificativă la examen.

**„Alfabetizarea în IA înseamnă pricepere la prompturi, iar studenții o dobândesc folosind instrumentul.”** Cadrele conceptuale tratează [[ai-literacy|alfabetizarea în IA]] ca înțelegere conceptuală, pricepere operațională, [[critical-thinking|evaluare critică]], judecată [[ethics|etică]] și conștiență a limitelor. Revizuirea spune explicit că [[prompt-engineering|ingineria prompturilor]], verificarea rezultatelor și analiza erorilor IA sunt competențe care se pot preda și care nu se dezvoltă prin expunere. Profesorii de științe cu formare, care au obținut 16,7 din 30, sunt versiunea empirică a acestei afirmații.

**„Problema echității este accesul.”** Accesul este una dintre cele trei linii. Competența și cine primește un rezultat util sunt celelalte două, iar doar șase studii din corpus au examinat direct vreuna dintre ele. A da fiecărui student o licență rezolvă cea mai ușoară treime.

## Ce se va întoarce împotriva ta

**„Studenții mei spun că IA îi ajută.”** De obicei chiar ajută cu munca din fața lor, iar constatarea privește ce rămâne după. Întreabă ce pot face încă fără ajutor și obții un alt răspuns, motiv pentru care există etapa notată fără ajutor.

**„Predau la 200 de studenți. Nu pot citi schițe sau face verificări orale.”** Nu trebuie să citești tot. O aplicație în clasă sau o explicație scurtă înregistrată la tema cu cea mai mare miză, plus o verificare pe eșantion la lucrările care par inconsecvente față de predările anterioare, acoperă cea mai mare parte a riscului. Predările etapizate, justificările adnotate și [[eportfolio|portofoliile]] de proces se scalează; la fel și notarea verificării unui rezultat IA greșit în mod deliberat.

**„Detectarea este tot ce avem.”** Detectoarele au probleme documentate de fiabilitate și de corectitudine, iar validitatea este problema mai grea: un produs lustruit făcut acasă nu mai arată că persoana care l-a predat are competența. Dovada procesului este mai ieftină decât o cursă a înarmărilor și produce ceva ce poți apăra într-o contestație.

**„Interzicerea este mai simplă.”** Mai simplă, și de obicei eșuează. Adoptarea în studiul cu viitori profesori a urmat cultura programului, nu politica unui singur curs, iar divulgarea a subraportat folosirea reală în fiecare curs. O interdicție îți ia și posibilitatea de a vedea cum ar folosi studenții instrumentul după ce pleacă.

**„Nu predau IA. Nu este materia mea.”** Constatările sunt despre materia ta. Când IA efectuează exersarea pe care cursul tău există ca să o ofere, exact atunci interferează, iar interferența apare în evaluările tale, fie că menționezi instrumentul, fie că nu.

**„Dovezile sunt prea noi ca să acționezi pe baza lor.”** Parțial adevărat, și taie în ambele direcții. O bună parte din corpus este formată din intervenții scurte, studii [[self-report-measures|autoreportate]], o singură disciplină sau lucrări din 2025 și 2026, iar afirmațiile din [[intelligent-tutoring|cercetarea matură despre tutoratul inteligent]] sunt mai puternice decât cele despre [[conversational-ai|chatboți]] generali fără restricții. Acolo unde o afirmație are acum în spate un studiu randomizat, disocierea dintre performanță și învățare din studiul CS1 și rezultatul despre feedback din proiectul de matematică, acel studiu este citat aici. Acolo unde nu are, tratează constatarea drept cea mai bună îndrumare disponibilă, nu drept lege stabilită, și fii cel mai sceptic față de rezultatele care arată doar satisfacție, viteză de lucru, calitatea rezultatului sau performanță asistată imediată.

## Ce să faci săptămâna aceasta

**1.** Alege tema pe care ești cel mai puțin confortabil să o aperi. Scrie propoziția despre competență în capul fișei temei.

**2.** Adaugă o etapă care se desfășoară fără nicio IA de față: o aplicație de cinci minute în clasă, o explicație scurtă înregistrată sau un paragraf scris în sală. Dă-i puncte reale.

**3.** Enunță condiția privind IA pentru acea temă și adaugă un rând de motivare. Dacă tema amestecă etape, spune care etapă este care.

**4.** Rescrie un prompt pe care le dai studenților din „rezolvă asta” în „dă-mi un singur indiciu și pune-mi o întrebare” și spune-le de ce.

**5.** Înainte să înceapă semestrul, du schimbarea la coordonatorul programului și la cine aprobă adaptările, ca prima contestație să nu fie și prima discuție.

## Încotro mai departe

Pentru versiunea acestor neînțelegeri, luată parte interesată cu parte interesată, vezi [[addressing-common-misconceptions-ai-education|abordarea concepțiilor greșite obișnuite în educația cu IA]]. Pentru cerințele de proiectare pe care le implică constatările despre echitate și judecata umană, vezi [[equity-ethics-pedagogical-safety-research|echitate, etică și siguranță pedagogică]]. [[redesign-assessment-ai-era|Regândirea evaluării în era IA]] duce mai departe jumătatea despre evaluare, iar [[does-ai-help-students-learn|Ajută IA studenții să învețe?]] este revizuirea de dovezi din spatele afirmațiilor de pe această pagină. Dacă alegi între regândire și aplicare strictă, [[reduce-ai-cheating|Reducerea trișatului cu IA]] și [[course-ai-policy|Politica de curs privind IA]] sunt paginile însoțitoare.
