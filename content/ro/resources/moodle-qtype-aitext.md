---
title: "Tipul de întrebare AI Text din Moodle"
created: "2026-11-12T19:40:00-05:00"
updated: "2026-11-12T19:40:00-05:00"
type: resource
summary: "Un tip de întrebare Moodle open-source (GPL v3) care notează răspunsuri libere cu un model lingvistic mare, pe baza unui prompt per întrebare și a unei scheme de notare opționale, folosind OpenAI, Azure sau un model Ollama auto-găzduit și arătând feedbackul IA unui corector uman."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Traducere automată a acestei pagini în limba engleză, încă neverificată de un vorbitor nativ.*

Majoritatea integrărilor de quiz cu IA trimit fiecare răspuns la un apel fix de notare. Acest tip de întrebare Moodle face invers: instructorul scrie rubrica. Fiecare întrebare poartă un **prompt** care spune modelului cum să evalueze răspunsul și o **schemă de notare** opțională care descrie cum se acordă punctele, așa că un item de tipul „scrie o propoziție la trecut” poate specifica zece puncte pentru nicio greșeală, zero pentru gramatică ruptă și un punct scăzut pentru fiecare greșeală de ortografie. Modelul returnează un punctaj și [[feedback|feedback]], iar un instructor poate vedea acel feedback lângă răspuns când corectează manual.

## Ce poți face cu el

Adaugă o întrebare AIText în orice quiz Moodle, scrie promptul și schema de notare, și testează prompturi cu un **prompt tester** AJAX în formularul de editare, în loc să treci prin încercări de previzualizare. Notarea rulează prin două comportamente de întrebare însoțitoare (imediat și amânat) care trebuie instalate alături de tipul de întrebare, ceea ce izolează notarea IA de comportamentele de bază ale Moodle; încercările existente care foloseau comportamentul legacy `interactivecountback` migrează la actualizare. Dacă modelul este inaccesibil, notarea se degradează în loc să dea eroare, așa că o încercare nu se pierde. Pentru că întrebarea este un tip nativ de quiz, rezultatele ajung în catalog ca orice alt item — ceea ce are nevoie o echipă de curs înainte de a trata [[automated-assessment|notarea automată]] ca pilot, nu ca demonstrație.

Designul pune și rubrica acolo unde se decide [[ai-feedback-quality|calitatea feedbackului]]: în promptul scris de instructor, nu într-o valoare implicită a furnizorului. Aceasta este utilizarea onestă a instrumentului — criterii pe care le poți inspecta și revizui — deși înseamnă și că plafonul de calitate este rubrica, iar un prompt vag produce notare vagă. Instituțiile apelează la el pentru verificările frecvente cu miză mică de care depinde [[formative-assessment|evaluarea formativă]], acolo unde un om ar citi altfel patruzeci de răspunsuri scurte într-o noapte.

## Pentru cine este

Administratori și dezvoltatori Moodle care rulează deja site-ul, instructori care vor notare cu IA fără o platformă separată sau licență comercială, și cercetători care au nevoie de o conductă de notare controlabilă pentru studiu. Necesită Moodle 4.5 sau mai nou și acces API la un model — fie OpenAI, fie Azure prin subsistemul AI al Moodle, fie o instanță Ollama auto-găzduită prin Local AI Manager, care ține textul studenților pe infrastructura locală. Pluginul este întreținut de Marcus Green, se află pe piața de pluginuri Moodle și avea 33 de stele și 36 de fork-uri când a fost verificată această pagină.

## Note și precauții

Open source sub GPL v3 sau mai nou, dar gratuit nu înseamnă gratuit de rulat: cineva plătește API-ul modelului, iar calitatea notării depinde de alegerea modelului și de designul promptului. Răspunsurile libere părăsesc serverul Moodle când se folosește un furnizor remote, așa că acordul de date al instituției guvernează ce poate fi trimis; ruta Ollama auto-găzduită există pentru site-urile care nu pot trimite munca studenților în afară. Repository-ul nu declară niciun studiu publicat de acuratețe sau de concordanță, așa că pluginul nu ar trebui adoptat pe presupunerea că notarea LLM este echivalentă cu notarea umană — [[assessment-validity|validitatea]] trebuie stabilită local față de scorurile umane înainte ca vreo notă să aibă greutate. Comportamentele însoțitoare sunt o dependență dură: instalarea doar a tipului de întrebare lasă întrebările nenotate.

## Concepte conexe

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
