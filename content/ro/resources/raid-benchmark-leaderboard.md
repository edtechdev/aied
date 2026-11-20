---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Un clasament public de detectoare de text AI, punctate pe RAID, un benchmark construit pentru a testa robustețea la modele, domenii, setări de decodare și atacuri adversariale."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
contributors: [editor]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

RAID este benchmark-ul din spatele majorității afirmațiilor serioase despre [[ai-detection|detectarea textului generat de AI]], iar clasamentul său este locul unde verificați dacă acuratețea publicată a unui detector supraviețuiește unei schimbări de model, domeniu, setare de decodare sau unui atac deliberat. Intrările sunt punctate pe setul de test și pot fi depuse de oricine respectă procedura de depunere a depozitului de cod.

## Ce poți face cu el

Filtrați după domeniu — rezumate, cărți, știri, poezie, rețete, Reddit, recenzii, wiki — după strategia de decodare (greedy sau sampling), după penalizarea repetiției și după atacul adversarial, inclusiv spații albe, homoglife, substituție de sinonime, parafrazare, spații cu lățime zero și ștergerea articolelor. Apoi comparați un detector între metrici: AUROC, TPR la o rată de fals-pozitive de 5% și TPR la 1%.

Acel set de filtre este esențial. Un detector care punctează aproape 1.000 pe agregat poate cădea odată ce textul a fost parafrazat sau modelul sursă se schimbă, iar clasamentul vă permite să vedeți căderea înainte ca o instituție să își bazeze pe el un caz de [[academic-integrity|abatere]]. Coloana de 1% fals-pozitive contează cel mai mult în educație, deoarece la scară instituțională o rată de eroare de 1% înseamnă sute de studenți acuzați pe nedrept.

## Pentru cine este

Cercetători care evaluează metode de detecție, administratori care redactează politici ce ar putea face referire la un detector și instructori care vor un răspuns concret la „poate fi detectat?" înainte de a afirma asta într-o fișă de disciplină.

## Note și precauții

Benchmark-ul măsoară detectarea textului generat de mașină, nu abaterile: un student care folosește AI pentru a planifica, a schița sau a revizui produce un text pe care detectoarele nu au fost construite să îl prindă, iar un student care [[language-learning|scrie într-o a doua limbă]] este un risc cunoscut de fals-pozitive pe care un clasament nu îl poate arăta. RAID este un artefact de cercetare întreținut de o echipă academică; acoperirea urmărește modelele generatoare din setul său de test, astfel încât modelele mai noi pot fi subreprezentate până când benchmark-ul este reîmprospătat. Clasamentul clasează detectoarele, nu practicile de gestionare a datelor ale furnizorilor lor, iar un AUROC mare nu spune nimic despre faptul dacă trimiterea lucrărilor studenților către acel serviciu este legală sau etică în jurisdicția dumneavoastră.
