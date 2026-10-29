---
title: "Ce măsuri și metode de cercetare poate folosi un profesor pentru a evalua intervențiile legate de IA?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
audience: [instructors, researchers, faculty developers]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T15:41:26-04:00"
translation_of: faqs/evaluating-ai-interventions-methods
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Ai rulat proiectul pilot în două grupe, ai strâns un chestionar la sfârșitul unității și ai o ședință de facultate peste trei săptămâni, unde cineva va întreba dacă a funcționat. Sau un recenzor te-a întrebat care a fost condiția ta de comparație, iar cealaltă grupă a făcut altceva. Într-un fel sau altul: ce ar conta aici drept dovadă?

Potrivește metoda cu afirmația. Un chestionar îți spune dacă studenților le-a plăcut activitatea. Dacă au învățat cere o măsură a performanței, iar dacă IA a cauzat câștigul cere o condiție de comparație.

## Pe scurt

**1.** Scrie afirmația într-o singură frază, cu rezultatul numit. „Studenții care au folosit tutorul au obținut scoruri mai mari la examenul fără asistență” este testabilă.

**2.** Rulează o măsurătoare de bază, intervenția, o măsurătoare imediată după și o măsurătoare ulterioară luată fără IA.

**3.** Descrie condiția de comparație la fel de atent ca tratamentul, chiar și atunci când ea este practica ta existentă.

**4.** Măsoară separat performanța asistată și învățarea independentă și tratează orice medie publicată ca pe o ipoteză despre grupa ta.

## Alege metoda care rezistă întrebării tale

Pagina despre [[research-methods-aied|metodele de cercetare în AIED]] expune ce cumpără fiecare opțiune. Experimentele randomizate dau cea mai puternică inferență cauzală. Designurile cvasi-experimentale pre/post sau cu grupuri perechi se potrivesc grupelor intacte și susțin afirmații mai slabe. Interviurile [[qualitative-research|calitative]], focus-grupurile, observațiile și analiza artefactelor relevă mecanisme și experiențe neașteptate. [[mixed-methods-research|Metodele mixte]] împerechează dovezile despre rezultat cu o explicație. [[design-based-research|Cercetarea bazată pe design]] i se potrivește unui profesor care rafinează o intervenție de la o iterație la alta.

Analiza calitativă asistată de IA intră pe acea listă cu o condiție. Reorganizează un corpus de interviuri în câteva minute, așa că [[chain-behind-claim-warrantability-2026|justificabilitatea]] contează la fel de mult ca acuratețea: consemnează reorganizările documentate care îi permit unui cititor să inspecteze, să conteste și să revizuiască traseul de la date la afirmație.

Un chestionar este o [[self-report-measures|măsură autoreportată]]: potrivită pentru atitudini, greșită pentru învățare.

## Dă un nume condiției de comparație

Trei condiții fac o afirmație cauzală interpretabilă: un tratament descris precis, o condiție de comparație bine definită și o măsură validă a învățării durabile. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] au auditat 19 comparații cu ChatGPT în educație față de aceste criterii. Patru (21%) le îndeplineau pe toate trei. Tratamentul era bine definit în 74%, grupul de control în 42%, iar rezultatul se califica drept învățare în 53%.

Modul de eșec este ușor de reprodus. Un [[generative-ai|instrument de uz general]] introdus alături de activități noi, feedback nou sau o interfață reproiectată confundă mediul cu metoda, iar rezultatul semnificativ aparține reproiectării.

## Măsoară rezultatele de care îți pasă cu adevărat

Sinteza despre [[ai-ed-evaluation|evaluarea în educația cu IA]] recomandă câștigul de învățare fără asistență, retenția întârziată, transferul la o sarcină nouă, calitatea raționamentului, [[misconceptions|concepțiile greșite]], preluarea feedbackului și performanța subgrupurilor. Angajamentul, satisfacția, jurnalele de utilizare a IA, [[self-efficacy|autoeficacitatea]] și [[technology-acceptance-model|utilitatea percepută]] sunt măsuri secundare rezonabile și substituenți slabi pentru învățare. Volumul de muncă și economiile de timp contează ca rezultate de implementare, o întrebare diferită.

Minimul la scară de sală este o măsurătoare de bază, intervenția, o măsurătoare imediată după și o măsurătoare ulterioară fără asistență. Adaugă o condiție de comparație acolo unde poți: practica existentă, fără IA, IA fără restricții față de IA cu sprijin de tip schelă sau două designuri alternative. Notează performanța asistată și cea fără asistență pe instrumente separate, pentru că o singură rubrică le va amesteca.

## Citește orice număr ca pe o ipoteză

Un efect mediu din literatură este un ghid slab pentru o singură sală. [[oneill-presumed-effective-meta-analysis-2026|Auditul lui O'Neill (2026)]] asupra a 14 [[meta-analysis-systematic-review|meta-analize]] cu impact mare a constatat că niciuna nu oferea o bază validă pentru afirmațiile ei. [[learning-gains|„Performanța academică”]] agregată amesteca scoruri la teste, motivație, [[self-efficacy|autoeficacitate]] și atitudini într-o singură estimare. Heterogenitatea era extremă: I² a mers de la 77,2% la 94,4% în cele 13 analize care au raportat-o, iar 12 dintre ele stăteau peste 80%. Toate cele 14 au evaluat invalid [[limitations-in-aied-research|părtinirea de publicare]], iar 61% dintre studiile primare verificate aleatoriu aveau probleme de validitate. Patru analize au raportat varianța între studii, două au raportat un interval de predicție, iar ambele intervale includeau zero.

Un scor convenabil poate măsura constructul greșit. În [[zhang-platform-scores-miss-ai-teaching-agents-2026|o evaluare a opt agenți de predare cu IA]], agentul clasat pe locul al treilea după scorul propriu al platformei a ieșit pe ultimul loc la o rubrică validată de experți, pentru că scorurile platformei indexau performanța studentului în timpul interacțiunii. Tratează o valoare dintr-un tablou de bord ca pe o ipoteză.

## Ce greșesc cadrele didactice

Un chestionar de satisfacție măsoară învățarea. Măsoară satisfacția, pe care sinteza despre evaluarea în educația cu IA o listează ca măsură secundară, alături de rezultatele învățării.

Un câștig pre/post arată că intervenția a funcționat. Arată că scorurile au crescut. Dacă măsura conta drept învățare este o întrebare separată, iar auditul a găsit un rezultat de învățare care se califică în 53% dintre comparațiile revizuite.

Mărimile efectului publicate se transferă în grupa mea. Cele 14 meta-analize ale lui O'Neill nu puteau susține afirmațiile construite pe ele, iar ambele intervale de predicție raportate includeau zero.

Analiticele platformei măsoară calitatea predării. Agentul clasat al treilea la Zhang a ieșit ultimul la o rubrică de experți.

## Ce se va întoarce împotriva ta

**„Avem deja evaluările de la sfârșitul cursului.”** Ele măsoară cursul și rulează după semestrul în care aveai nevoie de răspuns.

**„Un grup de comparație este imposibil într-un curs intact.”** Compară cu versiunea de anul trecut a aceleiași sarcini sau cu o a doua grupă și descrie diferența onest. Designurile cvasi-experimentale sunt mai slabe și tot informative atunci când alternativa este o afirmație fără comparație.

**„Mărimea efectului din meta-analiză este mare.”** La ce rezultat, în grupa cui? Ambele intervale de predicție găsite de O'Neill includeau zero.

**„Tabloul nostru de bord arată un angajament puternic.”** Angajamentul este o măsură secundară pe lista evaluării în educația cu IA. Pune măsura învățării fără asistență lângă el.

## Ce să faci săptămâna aceasta

**1.** Scrie-ți afirmația ca o singură frază și subliniază rezultatul.

**2.** Adaugă în calendar măsurătoarea ulterioară fără asistență, după intervenție și nu în aceeași săptămână.

**3.** Scrie un paragraf care descrie condiția de comparație, la fel de detaliat ca tratamentul.

**4.** Scoate numerele de platformă pe care le ai deja și marchează fiecare ca rezultat de artefact sau rezultat de învățare.

**5.** Roagă un coleg să citească designul și să spună ce altceva s-a schimbat în timpul semestrului.

## Încotro mai departe

[[does-ai-help-students-learn|Ajută IA studenții să învețe?]] rezumă ce arată dovezile despre rezultate, iar [[research-gaps-aied|golurile de cercetare în AIED]] acoperă locurile unde ele se subțiază. [[checking-whether-educational-ai-works|Cum știm că o IA educațională funcționează corect?]] este versiunea acestei întrebări pentru cei care construiesc sau cumpără un sistem.
