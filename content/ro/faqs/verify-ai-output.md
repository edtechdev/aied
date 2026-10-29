---
title: "Cum îi învăț pe studenți să verifice rezultatul IA?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T15:41:27-04:00"
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Este săptămâna dinaintea încheierii notelor și două lucrări citează surse care nu există. Amândoi studenții spun că au verificat. Unul a deschis linkul. Celălalt a citit paragraful și a decis că sună bine. Ai spus deja acestei clase să verifice ce îi dă chatbotul, iar spusul nu a produs comportamentul.

Verificarea este o secvență pe care o poți construi într-o lucrare. Decide ce contează ca fiind corect înainte să înceapă sarcina, fă studentul să se angajeze în scris la o așteptare, trimite-l la înregistrarea sursei în loc de impresia lui despre proză și notează înregistrarea pe care o produce. O linie de rubrică ce spune „a verificat sursele” nu măsoară nimic din toate acestea.

## Pe scurt

**1.** Scrie mai întâi cheia de răspuns. O verificare are nevoie de ceva față de care să se raporteze, iar majoritatea lucrărilor de verificare nu definesc niciodată ce înseamnă corect.

**2.** Cere o predicție înainte să apară rezultatul, ca raționamentul studentului să existe pe hârtie înainte ca instrumentul să îl poată suprascrie.

**3.** Numește ținta fiecărei verificări: lista de autori, publicația, anul, numărul specific, pasul specific. „Asigură-te că este corect” nu este o verificare.

**4.** Separă verificarea pe care o poate face o mașină de judecata pe care doar un cititor o poate face și învață studenții care dintre ele o fac.

**5.** Notează înregistrarea față de cheie, nu efortul, ca teatrul verificării să nu câștige nimic.

**6.** Programează verificarea în interiorul sarcinii. Presiunea timpului este un motiv documentat pentru care studenții o sar.

## Decide ce înseamnă corect înainte ca cineva să verifice ceva

[[verification-quality-reliance-calibration-genai-2026|Wei și Shang (2026)]], trecând în revistă 493 de înregistrări deduplicate și cartografind 14 studii empirice prioritare, separă șapte lucruri pe care „utilizarea critică a IA” le turtește într-unul singur: evaluarea epistemică, inițierea verificării, calitatea procesului, succesul verificării, deciziile de a te baza pe rezultat, performanța imediată la sarcină și învățarea independentă. Rubrica ta spune „a verificat sursele”, ce stă la pasul doi și nu îți spune nimic despre dacă verificarea a fost competentă sau dacă a schimbat răspunsul studentului. Inițierea nu este succes. Un proces puternic se poate termina neconcludent, unul slab poate ajunge la răspunsul corect, iar un student care a făcut o căutare și a rămas confuz ia aceeași notă ca unul care a lămurit întrebarea.

Aceeași trecere în revistă trasează o a doua linie, între [[trust|încredere]] și încrederea în rezultat. [[trust-calibration|Calibrarea încrederii]] întreabă dacă o decizie de a te baza pe rezultat a fost potrivită dată fiind calitatea reală a rezultatului, ceea ce leagă judecata de o singură decizie și un singur rezultat. Un studiu auditat a constatat că informațiile false date de ChatGPT au modificat încrederea raportată a participanților și nu a înregistrat niciodată dacă aceștia au acceptat sau au respins ulterior o recomandare specifică. Altul a înregistrat decizii de acceptare și respingere asupra [[feedback|feedbackului]] dat de ChatGPT pentru 78 de studenți traducători, dar fără o evaluare independentă a expertului o acceptare nu poate fi numită potrivită și o respingere nu poate fi numită justificată. Fără un adevăr de referință despre calitatea rezultatului, încrederea în rezultat nu poate fi clasificată deloc.

Aceasta este consecința de design și este primul lucru de reparat. Înainte să stabiliști o sarcină de verificare, scrie două descrieri scurte: cum arată un rezultat corect pentru această sarcină și cum arată un rezultat plauzibil, dar greșit. Una din fiecare este de ajuns. Studenții au atunci un standard față de care să verifice, iar tu ai ceva față de care să notezi verificarea, altfel decât dacă studentul pare atent.

## Fă-i să se angajeze înainte ca instrumentul să răspundă

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] construiește un program de măsurare în jurul principiului *prezice înainte să rulezi*: cel care învață declară ce ar trebui să se întâmple, apoi comportamentul artefactului este judecat față de acea predicție pe criterii de domeniu, nu după dacă rulează. Raționamentul există înainte să existe rezultatul, iar asta este ce îl face notabil.

Auditul lui asupra a 24 de studii a găsit același instrument producând rezultate opuse sub structuri diferite de sarcină. O configurație convențională cu ChatGPT se încheia semnificativ mai jos la realizare, [[self-efficacy|autoeficacitate]] și flux, în timp ce o condiție care adăuga cerințe de verificare și module de reflecție asupra erorilor arăta o [[critical-thinking|gândire de ordin superior]] mai puternică. Instrumentul a fost constant între acele condiții. Ce a variat a fost dacă sarcina îi cerea studentului să dețină o poziție pe care instrumentul o putea contrazice.

În practică aceasta este o linie pe fișa de lucrare: înainte să deschizi instrumentul, scrie ce te aștepți să spună și de ce. Apoi compară. Doi studenți pot produce același paragraf și doar unul dintre ei poate explica unde se abate paragraful de la ce a prezis.

## Trimite-i la înregistrarea sursei

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] au urmărit 113.588 de referințe din 5.225 de lucrări de educație în informatică publicate din 2021 încoace și au verificat manual 828 de înregistrări suspecte. Au găsit 30 care conțineau informații bibliografice verificabil fabricate, în 14 lucrări, toate din 2025 și 2026. Treisprezece erau în întregime inventate. Celelalte 17 combinau un titlu real cu autori, publicație sau an fabricați ori incorecți. La Simpozionul Tehnic SIGCSE numărul a crescut de la 3 în volumele din 2025 la 17 în 2026, adică 2,3% din lucrările acelui an.

Câmpurile de autori greșesc mai des decât orice altă parte a unei referințe generate. Această singură constatare îți spune ce să ceri. „Deschide sursa și citește lista de autori” vizează câmpul cel mai probabil greșit și produce un fapt pe care studentul îl are sau nu îl are. „Asigură-te că sursele sunt reale” produce o asigurare. Cere studenților să confirme autorii, publicația și anul față de înregistrarea sursei în sine. Lucrarea cere ca fiecare operă citată să fie verificată și ca orice verificator automat să rămână [[human-in-the-loop-ai|cu om în buclă]], ceea ce este exact obiceiul pe care îl exersează o cerință de citare.

## Separă verificarea pe care o poate face o mașină de judecata pe care doar un cititor o poate face

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] stabilește un prag de apărat pentru ce poate fi verificat mecanic: criterii documentate, comparație cu cunoaștere stabilită fără judecată interpretativă și un singur răspuns corect sau alternative acceptabile specificate dinainte. Datele, formulele, citările și calculele trec acel prag. Orice este interpretativ îl ratează, iar acolo lectura proprie a studentului este instrumentul verificării.

Gousopoulos formalizează aceeași despărțire ca pe o problemă de detectare a semnalului cu doi parametri independenți. Sensibilitatea este capacitatea de a distinge rezultatul corect de cel defectuos; criteriul este unde pune cel care învață pragul de respingere. Supra-dependența se divide de-a lungul acestei linii. Avertizările, listele de verificare și prompturile despre halucinații mută criteriul, schimbând când respinge un student. Instruirea de domeniu, comparațiile lucrate și exersarea cu erori plantate ridică sensibilitatea, pentru că atunci cel care învață poate să își dea seama. Un student care acceptă un rezultat defectuos poate avea o problemă de criteriu sau una de sensibilitate, iar cele două cer predare diferită.

Premisa este inconfortabilă. Instruirea în verificare este educativă doar acolo unde sensibilitatea poate depăși zero, ceea ce cere suficientă cunoaștere de domeniu pentru a distinge un rezultat corect de unul incorect. În același audit, novicii rugați să explice cod generat de [[llm|LLM]] au reușit la aproximativ o treime din sarcini, așa că a judeca feedbackul IA sau codul față de propriul raționament este o verificare reală doar acolo unde acel raționament are substanță. Dacă studenții tăi nu pot încă face gândirea de domeniu fără ajutor, mai multe avertizări nu cumpără nimic. Predă conținutul și atașează verificarea la el.

Încă o avertizare își are locul în design: intervențiile care reduc acceptarea nepotrivită trebuie verificate și pentru respingerea nedorită a asistenței corecte. Lasă loc unui student să accepte un rezultat bun pentru un motiv declarat.

## Notează verificarea fără să o transformi în supraveghere

Gousopoulos trage consecința direct. Dacă IA poate produce artefactul, artefactul nu poate fi evaluarea, așa că evaluarea se mută la specificație, la raționamentul de validare și la interpretare. Constructul lui de paternitate a modelului are patru fațete, specificație, model conceptual, verificare și interpretare, la patru niveluri ordonate, de la delegat la asumat. Nivelul asumat cere o specificație verificabilă înainte de primul prompt, respingerea rezultatului pe criterii de domeniu cu un motiv declarat și o interpretare care merge dincolo de raportul artefactului despre sine.

Rubrica se sprijină pe materiale pe care o sarcină de construcție le generează deja, așa că același instrument este și [[formative-assessment|evaluare formativă]], și măsură de cercetare. Asta răspunde îngrijorării despre munca inutilă: notezi un produs secundar al unei lucrări pe care ai dat-o oricum. Două limite își au locul alături. Niciun studiu dintre cele 14 cazuri prioritare ale lui Wei și Shang nu a măsurat împreună succesul verificării și decizia de a te baza pe rezultat care urmează, iar puține au urmărit performanța imediată cu retenția întârziată sau cu [[transfer-of-learning|transferul]], așa că rubrica se sprijină pe o hartă analitică, nu pe o secvență cauzală validată.

Trei decizii împiedică asta să devină supraveghere. Notează verificarea față de calitatea adjudecată, nu față de efort, altfel construiești un stimulent pentru a juca verificarea. Declară proveniența, cum cere Venetsanos: studenții trebuie să știe care părți din feedbackul primit au fost verificate de mașină, care au fost judecate evaluativ și că judecata umană are primat, pentru că nu pot cântări un feedback pe care nu îl pot situa. Și ține aplicarea regulilor departe de instrumentele de detectare. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] argumentează că [[ai-detection|detectarea IA]] nu ar trebui folosită în educație deloc: estimările ei sunt probabilistice și nu pot fi verificate independent, pentru că originea reală a textului din lume este necunoscută, scorurile ei nu îndeplinesc standardul balanței probabilităților pe care îl cer anchetele de integritate, iar dihotomia om versus IA este lipsită de sens pentru lucrări create cu IA, nu de IA. Concluzia lor este că detectarea „nu protejează integritatea academică; o subminează.” Regimurile de supraveghere hrănesc suspiciunea și erodează [[trust|încrederea]] studenților. Ține cele două sensuri ale detectării separate. Detectarea textului generat de IA nu are niciun rol probatoriu de apărat aici; a-i învăța pe studenți să detecteze erori în rezultatul IA este tot exercițiul.

Separarea este arhitecturală și merită spusă studenților. [[vetting-dual-llm-safety-education|Li, Zhang și Botelho (2026)]] verifică rezultatul cu un al doilea model, în loc să încorporeze verificarea în generator. Un student care vede de ce poate vedea de ce „instrumentul a spus că este corect” nu este un argument de verificare.

## Dacă proiectezi cursul, nu îl predai

Trei constatări de mai sus își au locul în construcția cursului, acolo unde un instructor care lucrează singur nu ajunge la ele.

Prima este un diagnostic. Rulează o sarcină cu erori plantate: douăzeci de itemi, opt cu o eroare de nivel de domeniu. Îți spune dacă studenții pot discrimina deloc, înainte să petreci un semestru predând un criteriu pe care nu îl pot folosi. O clasă care ratează erorile plantate are nevoie de reluarea conținutului, orice ar spune programa despre utilizarea critică.

A doua este plasarea avertizării. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings și Park (2026)]] au arătat un mesaj generic de preîntâmpinare imediat înaintea a două sarcini unor 100 de studenți din SUA, 40 autohtoni și 60 internaționali vorbitori de engleză ca limbă străină. Studenții „inoculați” au fost semnificativ mai predispuși să verifice sarcina de rezumare a unei surse academice (M = 0,34 față de 0,18), în timp ce intențiile de verificare raportate de sine nu s-au mișcat. Efectul a depins și de sarcină: a apărut pentru sarcina de rezumare a sursei, dar nu uniform pentru un test de matematică despre ridicarea la putere și înmulțirea numerelor mari. Pune avertizarea în punctul de utilizare, pentru fiecare tip de sarcină, nu o dată în programă sau în modulul de orientare.

A treia este programarea. O programă care lasă verificarea neprogramată spune că este opțională, iar presiunea timpului este un motiv documentat pentru care studenții sar verificările. Verificarea care trăiește în interiorul sarcinii, cu un artefact notat atașat, se întâmplă. Verificarea care trăiește într-un paragraf de politică nu se întâmplă.

## Dacă tu ești studentul care citește asta

Patru mișcări acoperă cea mai mare parte din ce îți cere cercetarea.

Scrie așteptarea ta înainte să dai promptul. O propoziție despre cum ar trebui să fie răspunsul, apoi compară rezultatul cu ea.

Deschide sursa. Citește lista de autori, publicația și anul față de înregistrare, pentru că câmpul de autori este locul unde referințele generate greșesc cel mai des.

Pentru orice este interpretativ, scrie motivul în cuvintele tale. Un motiv fabricat este la fel de vizibil precum o citare fabricată.

Nu te încrede în sentimentul că proza sună bine. Novicii rugați să explice cod generat de LLM au reușit la aproximativ o treime din sarcini, iar un studiu de teren asupra conversațiilor studenților cu ChatGPT pentru teste a constatat că urmarea unei îndrumări corecte producea totuși un răspuns greșit. Ce poți verifica este mai îngust decât ce poți citi.

## Ce greșesc cadrele didactice aici

**„Le-am spus deja să își verifice sursele.”** O avertizare cere o dispoziție. Studenții atenți o au, cei grăbiți nu, iar în propoziție nu este nimic pe baza căruia un student să poată acționa la ora 11 seara, cu un rezultat pe ecran care sună perfect bine.

**„O linie de rubrică despre verificarea surselor acoperă asta.”** Linia aceea stă la inițiere și nu spune nimic despre calitatea procesului sau despre succes. Un student care a făcut o căutare și a renunțat ia aceeași notă ca un student care a lămurit întrebarea, așa că rubrica recompensează gestul.

**„Dacă citesc atent, vor prinde erorile.”** Fluența târăște judecata. Literatura auditată arată novici la aproximativ o treime succes la explicarea codului generat, iar studiul de teren a înregistrat un răspuns greșit care a sosit prin îndrumare corectă.

**„Studenții care spun că vor verifica o fac.”** În studiul lui Vu, Cummings și Park, intențiile raportate de sine nu s-au mișcat, în timp ce comportamentul efectiv s-a mișcat (M = 0,34 față de 0,18). Notează comportamentul, care s-a mișcat.

**„Studenții care sar verificarea sunt cei cărora nu le pasă.”** [[trust-calibration-chatbots-design-problem-2026|Jaidka și Cai (2026)]] încrucișează capacitatea de a verifica cu motivația de a verifica, iar profilurile cer remedii diferite. Studentul cu capacitate mare și motivație mică este predispus la o încredere excesivă și complacentă. Studentul cu capacitate mică și motivație mică este cel mai expus. Doi studenți care eșuează la aceeași verificare pot avea nevoie de predare opusă, iar [[prior-knowledge|cunoașterea prealabilă]] decide pe care dintre ei îl privești.

**„Mai multe avertizări îi vor repara pe studenții care nu pot să își dea seama.”** Avertizările mută criteriul. Nu ridică sensibilitatea, iar sensibilitatea este ce separă un student care poate sesiza defectul de unul care nu poate.

**„Un detector susține politica.”** Pe dovezile de mai sus, un scor de detector nu îndeplinește standardul pe care îl cere un caz de integritate, dihotomia om versus IA nu se ține pentru lucrări făcute cu IA, iar regimul te costă [[trust|încrederea]] de care ai nevoie ca studenții să declare ceva.

## Ce se va întoarce împotriva ta

**„Pot să facă asta doar pentru notă.”** Parțial adevărat, așa că notează materiale pe care IA nu le poate produce în numele studentului. O specificație scrisă înainte de primul prompt, o predicție înregistrată înainte ca artefactul să ruleze, o listă de surse verificată față de înregistrare, un motiv de domeniu declarat pentru respingere: fiecare îi cere studentului să dețină o poziție pe care generatorul nu o poate furniza. Un motiv fabricat este la fel de vizibil precum o citare fabricată. Acolo unde un student nu are cunoaștere de domeniu față de care să verifice, verificarea este teatru și nicio rubrică nu o salvează, ceea ce este un argument pentru a preda mai întâi conținutul.

**„Nu este timp în programă.”** Preîntâmpinarea este un mesaj înaintea sarcinii. Sarcina cu erori plantate refolosește un test pe care îl dai deja. Rubrica se sprijină pe materiale pe care sarcina le generează deja, așa că te costă timp de notare pe dovezi pe care altfel le-ai lipsi. Alternativa costă mai mult: lucrări neverificate, referințe fabricate și conversațiile despre integritate care urmează.

**„Instrumentul are de obicei dreptate.”** Atunci verificarea este ieftină, iar excepțiile sunt miezul. Câmpurile de autori greșesc mai des decât orice altă parte a unei referințe generate, 17 din cele 30 de elemente fabricate combinau un titlu real cu autori, publicație sau an greșit, iar 17 au apărut într-un singur an de volume de simpozion. Acuratețea pe părțile pe care le observi din întâmplare nu spune nimic despre părțile pe care nu le observi.

**„Studenții mei nu știu destul ca să judece rezultatul.”** Acesta este pragul de sensibilitate și este real. Gousopoulos prezice că instruirea în verificare eșuează sub un nivel minim de cunoaștere de domeniu și notează că unele domenii furnizează un criteriu extern, fizica, chimia, ecologia și epidemiologia printre ele, în timp ce istoria, literatura și [[ethics|etica]] în mare nu o fac. Predă domeniul și atașează verificarea la el, sau așteaptă-te ca verificarea să devină un ritual.

**„Asta este supraveghere.”** Este, dacă notezi efortul sau urmărești cum lucrează studenții. Notează artefactul față de cheie, declară ce feedback a fost verificat de mașină și ce a fost judecat de o persoană și lasă detectoarele în afara ecuației.

## Ce să faci săptămâna aceasta

**1.** Scrie cele două descrieri pentru următoarea ta lucrare: un rezultat corect și unul plauzibil greșit. Aceasta este cheia față de care se raportează verificarea.

**2.** Adaugă linia de predicție. O propoziție, scrisă înainte să fie deschis instrumentul, comparată după aceea pe criterii de domeniu.

**3.** Înlocuiește „verifică-ți sursele” cu „deschide înregistrarea și confirmă autorii, publicația și anul”.

**4.** Pune opt erori plantate într-un test pe care îl dai deja și vezi care studenți le găsesc.

**5.** Notează un artefact de verificare față de cheie și spune-i studentului care parte a verificării a eșuat: standardul, procesul sau decizia.

## Încotro mai departe

[[incorporating-ai-literacy|Cum integrăm alfabetizarea în IA]] acoperă cum se construiește înțelegerea pe care această pagină o pune la lucru, iar [[ai-literacy-evidence|Dovezile privind alfabetizarea în IA]] acoperă cât valorează acea muncă de alfabetizare. [[reducing-over-reliance|Reducerea supra-dependenței]] tratează partea de design pentru studenții care se sprijină pe instrument, [[study-with-ai|Cum să înveți cu IA]] este companionul pentru studenți, iar [[asynchronous-online-courses-ai|Cursuri online asincrone și IA]] acoperă versiunea acestei probleme fără o întâlnire de curs în care să programezi o verificare. Despre feedbackul pe care îl verifică studenții, vezi [[ai-feedback-quality|Calitatea feedbackului IA]] și [[hallucination-risk|Riscul de halucinație]].
