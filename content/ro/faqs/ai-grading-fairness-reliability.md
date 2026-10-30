---
title: "Pot folosi IA pentru a nota corect și fiabil lucrările studenților?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Ai o grilă de evaluare în care crezi, mai multe lucrări decât ore și un instrument care îți returnează un punctaj plus câteva paragrafe încrezătoare în timpul necesar pentru a citi un singur eseu. Îl încerci pe lucrări pe care le-ai notat deja. Jumătate dintre punctaje par corecte. Unul este ciudat de generos, altul ciudat de aspru și încă nu poți spune dacă asta ține de instrument sau de eseu.

Răspunsul scurt pe care să îl dai unui coleg: notarea cu IA își câștigă un loc ca asistent supervizat sau ca al doilea cititor, pe sarcini la care ai verificat-o față de lucrări pe care le-ai notat deja. Acordul nu se transferă între tipuri de evaluare. Într-un examen de farmacie cu șaisprezece studenți, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] au găsit un acord aproape perfect pe itemii obiectivi și un acord nesigur pe răspunsurile deschise. În trei universități englezești, [[opraise-automated-marking-ai-assessment-2026|proiectul OpRaise]] a găsit că evaluatorii IA și cei umani cad de acord asupra benzii de diplomă între 35% și 65% din cazuri, în funcție de instituție, cu notele comprimate spre mijloc. O justificare fluentă nu este dovadă că criteriile tale au fost aplicate. Dacă rezultatul este [[assessment-validity|valid pentru decizia ta]] este o întrebare locală la care trebuie să răspunzi singur, iar [[human-in-the-loop-ai|o persoană rămâne responsabilă]] pentru orice devine notă înregistrată.

## Pe scurt

**1.** Numește rolul înainte de a rula ceva: asistent de feedback, al doilea cititor sau notator principal. Ele cer cantități diferite de dovezi.

**2.** Începe cu rolul cel mai puțin consecvent care îți rezolvă problema reală. Dacă un barem determinist ar face treaba, un LLM adaugă risc, nu valoare.

**3.** Calibrează pe lucrări pe care le-ai notat deja, incluzând lucrări puternice, slabe, de graniță și cu structură neobișnuită. Exemplele convenabile nu dovedesc nimic.

**4.** Ține setul de calibrare și setul de test separate, altfel măsori cât de bine ai reglat instrumentul pe eseuri familiare.

**5.** Raportează acordul exact, diferențele de punctaj și direcția părtinirii, nu o corelație. Verifică în special pragurile admis/respins.

**6.** Spune-le studenților ce rol joacă instrumentul, cine decide nota și cum pot cere o reevaluare.

## Decide ce i se permite IA să facă

Trei aranjamente se numesc „notare cu IA” și ele poartă obligații diferite.

Un **asistent de feedback** schițează comentarii sau semnalează posibile omisiuni pe care tu le accepți, le rescrii sau le arunci. Riscul se limitează la calitatea comentariilor, iar tu citești totul înainte ca ceva să ajungă la un student. Un **al doilea cititor** propune punctaje pe criterii sau semnalează dezacorduri pentru a-ți structura propria notare. Erorile lui trebuie să fie utile, nu doar greșite: un semnal care te trimite înapoi la o lucrare pe care ai fi notat-o în grabă merită păstrat. Un **notator principal** produce punctaje care devin note înregistrate. Acesta este aranjamentul pe care dovezile din această bază de cunoștințe nu îl susțin dincolo de cazuri înguste, validate local.

Alege treapta cea mai de jos care răspunde constrângerii tale reale. Dacă volumul tău de notare vine din verificarea unui barem fix de răspunsuri, notarea deterministă obișnuită este mai transparentă și mai auditabilă decât un model lingvistic, iar studiul din farmacie sugerează că avantajul LLM-ului pe itemii obiectivi a fost în parte un artefact al faptului că i s-au furnizat răspunsurile corecte în timpul notării. Rezervă modelul pentru munca ce cere interpretare, apoi verifică acea interpretare.

[[automated-assessment|Evaluarea automatizată]] acoperă mașinăria mai largă a notării, a moderării și a generării de feedback. Această pagină este întrebarea de judecată de sub ea.

## Ce arată de fapt dovezile

Acordul depinde de tipul de item. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] au notat un examen de farmacie cu format mixt, susținut de 16 studenți, și au raportat o concordanță cu notarea cadrelor didactice între 0,935 și 1,000 pentru itemii cu alegere multiplă, selectează-tot-ce-se-aplică și completare de spații libere. Acordul pe răspunsurile subiective deschise a fost nesigur. Două detalii contează mai mult decât rezultatul principal. Răspunsurile corecte au fost furnizate în timpul notării, ceea ce flattează rezultatele pe itemii obiectivi, iar adăugarea unei grile nu a îmbunătățit constant acordul, ceea ce subminează presupunerea răspândită că o grilă bună transformă un LLM într-un notator consistent. Șaisprezece studenți nu pot susține o afirmație despre cursul tău. Variația din interiorul unui singur examen este constatarea transferabilă: un sistem care se descurcă la secțiunea ta cu alegere multiplă nu spune nimic despre eseurile tale.

Acordul pe bandă este moderat și neuniform. [[opraise-automated-marking-ai-assessment-2026|Raportul OpRaise]] a examinat eseuri autentice de psihologie de licență și a găsit un acord între evaluatorii IA și cei umani asupra benzii de diplomă din Regatul Unit de 63% la Cambridge, 53% la Nottingham și 35% la Manchester Metropolitan. Notele au fost comprimate spre mijloc, iar extremele au fost notate cel mai puțin exact: un eseu notat 75 de un om a primit cu câteva puncte mai puțin de la fiecare sistem IA, iar un eseu notat 50, cu câteva puncte mai mult. Această comprimare este eșecul de urmărit, pentru că îi afectează exact pe studenții din vârful și din coada distribuției tale, lăsând mijlocul să pară în regulă. Acesta este un raport de proiect, nu un studiu revizuit de colegi, și este cel mai util avertisment din baza de dovezi.

Notele tale sunt o referință imperfectă. Instructorii nu sunt de acord între ei, iar punctajul tău anterior pe un eseu similar este o judecată, nu un adevăr de referință. Acordul cu un singur notator stabilește consistența cu acel notator, ceea ce nu este același lucru cu corectitudinea. Acolo unde miza o justifică, folosește un al doilea cititor calificat pentru a arbitra cazurile dificile și tratează un dezacord între IA și un notator uman ca un îndemn de a reciti lucrarea, nu ca un verdict despre care parte are dreptate.

Consistența și judecata solidă diverg. Un model poate returna punctaje aproape identice la o rulare repetată în timp ce aplică prost criteriile tale, pentru că repetabilitatea măsoară stabilitatea, nu validitatea. Extremele OpRaise arată tiparul: sistemul a fost constant și greșit exact la eseurile care contau cel mai mult.

## Validează procedura înainte ca ea să atingă o notă

Parcurge asta pe lucrări evaluate anterior, protejate corespunzător, care acoperă răspunsurile pe care le primești de fapt: puternice, slabe, de graniță, incomplete, cu structură neobișnuită și răspunsuri corecte exprimate într-un mod nefamiliar.

**1. Specifică criteriile și cere dovezi.** Dă tema, grila, regulile de punctare și exemple de moduri în care răspunsurile alternative legitime obțin puncte. Cere justificări concise la nivel de criteriu, legate de pasaje identificabile. Apoi verifică tu acele justificări față de lucrare.

**2. Separă calibrarea de evaluare.** Reglează pe un set, testează pe altul. Fără această separare nu poți distinge o procedură validată de una bine potrivită.

**3. Măsoară deciziile care contează.** Înregistrează acordul exact, mărimea și direcția diferențelor de punctaj și dacă modelul acordă sistematic note mai mari sau mai mici. Examinează separat pragurile admis/respins și alte limite cu consecințe. O corelație ridicată poate sta deasupra unei deplasări sistematice.

**4. Testează repetabilitatea și comportamentul pe subgrupuri.** Rulează din nou un subset în setări identice. Caută erori la nivel de criteriu și cazuri în care limba, formatarea sau un stil legitim sunt confundate cu o înțelegere mai slabă. Numerele mici pe subgrupuri susțin prudența, nu o afirmație despre corectitudine.

**5. Scrie regula de escaladare.** Decide ce cazuri primesc mereu notare umană și cum se rezolvă dezacordurile. Nu lăsa încrederea declarată a modelului să decidă; încrederea trebuie validată față de erorile observate înainte să poată cântări.

**6. Protejează fluxul de lucru.** Folosește un mediu aprobat, minimizează informațiile identificatoare și ține grila și instrucțiunile separate de conținutul trimis. Această separare face manipularea mai greu de ascuns. Nu o face imposibilă.

**7. Înregistrează ce ar invalida verificarea.** Păstrează modelul și versiunea, promptul, grila și setările. O actualizare a modelului sau o revizuire a grilei este un motiv să repeți verificările reprezentative, nu să presupui continuitate.

## Fă aranjamentul vizibil pentru studenți

Studenții au dreptul să știe ce rol joacă instrumentul, cine decide și cum pot contesta un rezultat. Dezvăluirea vagă produce suspiciune; specificul produce o relație funcțională. Ceva de genul: „Un instrument IA aprobat poate schița comentarii pe grilă la schița ta. Eu revizuiesc fiecare comentariu și stabilesc nota ta. Contactează-mă dacă un comentariu îți reprezintă greșit lucrarea.” Apoi fă asta adevărat.

Două direcții de eșec cer atenție separată. Deducerile excesive sunt cele pe care le raportează studenții și domină contestațiile. Creditele nemeritate sunt cele care trec nemenționate și corup în liniște evidența. Eșantionează pentru amândouă și include orele tale de verificare când judeci dacă fluxul de lucru ți-a economisit ceva.

## Ce se va întoarce împotriva ta

**„Și oamenii sunt părtinitori.”** Sunt, de aceea comparația are nevoie de criterii explicite, nu de punctajul unui singur notator ca etalon. Împrăștierea instituțională din OpRaise este argumentul aici: dacă notatorii umani din trei universități au produs un acord pe bandă atât de diferit cu aceleași sisteme, referința umană este parte din ce trebuie specificat, nu un etalon fix.

**„Grila îl face obiectiv.”** O grilă face așteptările explicite. Aplicarea ei rămâne interpretare, iar studiul din farmacie a constatat că furnizarea unei grile nu a îmbunătățit constant acordul. Ce îți cumpără grila este un standard verificabil pentru justificări, nu o garanție a punctajelor.

**„Ar trebui să verific totul, ceea ce anulează scopul.”** Pentru unele sarcini aceasta este concluzia corectă, iar răspunsul este să îngustezi treaba. Schițarea comentariilor din propriile tale note de notare lasă judecata la tine și elimină tastarea. Semnalele de al doilea cititor pe lucrările de graniță îți concentrează atenția acolo unde schimbă un rezultat.

**„Colegul meu a încercat-o și a mers bine.”** Întreabă ce a măsurat. În această literatură, evaluările pozitive coexistă în mod obișnuit cu erori, iar un coleg care a citit câteva rezultate rezonabile a făcut o demonstrație, nu o validare. Întrebarea este ce ar face procedura lui cu eseurile pe care le-ai observa ultimele.

## Ce să faci săptămâna aceasta

**1.** Alege o evaluare și notează singurul rol pe care l-ar juca IA. Notează ce dovezi ți-ar permite să îl urci o treaptă.

**2.** Rulează-l pe cinci lucrări pe care le-ai notat deja, alese astfel încât să includă una puternică, una slabă, una de graniță și una cu structură neobișnuită, dar legitimă.

**3.** Înregistrează fiecare dezacord împreună cu lucrarea și criteriul și numește erorile pe care le-ai considera inacceptabile, nu doar greșite.

**4.** Testează dacă diferențele de punctaj merg într-o direcție consistentă și verifică separat pragul tău admis/respins.

**5.** Schițează paragraful de dezvăluire pentru studenți și ruta de reevaluare și compară timpul tău de verificare cu timpul de notare pe care l-ai evitat.

## Încotro mai departe

[[assessment-validity|Validitatea evaluării]] este conceptul care decide aceste întrebări: dacă dovezile susțin inferența pe care vrei să o faci. [[automated-assessment]] acoperă tehnologia și performanța ei măsurată pe formate, iar [[ai-feedback-at-scale]] tratează problema adiacentă a comentariilor generate și dacă studenții acționează pe baza lor.

Pentru ce ar trebui să reprezinte o notă odată ce studenții folosesc IA, inclusiv substituirea constructului și dovezi de proces autentificate, vezi [[redesign-assessment-ai-era|reproiectarea evaluării în era IA]]. Pentru dacă detectarea poate substitui un design de sarcină defendabil, vezi [[should-we-use-ai-detectors|dacă să folosim detectoare de IA]]. Pentru întrebarea de evaluare de sub toate acestea, vezi [[checking-whether-educational-ai-works|verificarea dacă o IA educațională funcționează]].
