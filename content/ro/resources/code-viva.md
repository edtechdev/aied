---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Instrument gratuit de browser care rulează o versiune scrisă și cronometrată a unei susțineri orale de cod pentru fiecare student, propunând note cu dovezi citate, spre aprobare."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Code Viva rulează o versiune scrisă și cronometrată a unei [[oral-assessment|susțineri orale]] pentru fiecare student de la un curs de programare, cam cincisprezece până la douăzeci de minute fiecare, fără un instructor în sală. Citește codul trimis de student și istoricul de commit-uri, scrie patru până la șase întrebări despre propriile funcții, nume și commit-uri ale acelui student și îi dă fiecăruia un link personal de la care să răspundă.

## Ce poți face cu el

Trimiterile vin dintr-un export Gradescope, dintr-o arhivă zip descărcată din Canvas, dintr-un zip cu un dosar pe student sau din GitHub Classroom cu un token de citire. Instructorul stabilește durata sesiunii, numărul de întrebări și termenul, marchează timp suplimentar la 1,25x până la 3x și citește, editează sau înlocuiește întrebările generate înainte de a trimite linkurile. Întrebările acoperă cazurile de bază ale recursiei, gardurile de margine, alegerile de structuri de date, numele de variabile opace, scalarea și urmărirea, propoziții din enunțul temei și tipare de commit precum un singur commit masiv sau unul târziu noaptea. Răspunsurile se întorc ca un cod de răspuns, iar ecranul de revizuire arată fiecare transcriere lângă un punctaj propus de la 0 la 3, cu propozițiile pe care se sprijină, plus o coadă de semnalări ordonată după cât de necesară este o conversație. Rezultatele se exportă în CSV, iar unsprezece cursuri demonstrative permit unui cititor să încerce întregul ciclu pe date inventate.

## Pentru cine este

Cadre didactice de la cursuri de programare care vor dovezi că un student își poate explica propriul cod și care ar prefera să discute cu o listă scurtă de studenți, nu cu toți; întrebările despre commit-uri îl fac o formă de [[process-oriented-assessment|evaluare orientată pe proces]].

## Note și precauții

Totul rulează în browser: cursul stă în stocarea locală, cu un export JSON, întrebările călătoresc în partea unui link pe care browserele nu o trimit către servere, iar răspunsurile se întorc doar ca coduri pe care studenții aleg să le trimită, așa că nicio dată a studenților nu ajunge la o terță parte. Generatorul de întrebări este bazat pe reguli, nu pe model. După propria relatare a instrumentului, cititorul său de cod este euristic, așa că o formatare neobișnuită sau macrocomenzile pot ascunde o funcție, iar un punctaj poate recompensa cunoașterea vocabularului în locul înțelegerii codului — de aceea punctajele sunt propuneri pe care instructorul le aprobă și de aceea recomandă mize mici. Nu este publicată nicio licență și niciun depozit sursă, iar pentru că linkurile poartă întrebările, ele ajung la câțiva kilobiți, suficient de lungi ca să fie lipite într-o casetă de mesaj a unui sistem de management al învățării.

## Concepte conexe

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
