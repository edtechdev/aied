---
title: "conText"
created: "2026-11-12T11:07:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Bezpłatny tutor w przeglądarce, który czyta zdjęcie notatnika, PDF lub tekst, a potem prowadzi studenta przez ten materiał metodą sokratejską po angielsku lub hiszpańsku, rysując na żywo graf pojęć, które student łączy w trakcie mówienia."
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
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

conText to najczystsza mała demonstracja kierunku, o którym [[intelligent-tutoring|tutoring AI]] głównie mówi, a rzadko go wdraża: model nie odpowiada na pytanie studenta, lecz zadaje następne, a pomysły studenta są rysowane jako graf, gdy mówi. Prześlij zdjęcie strony notatnika, PDF lub tekst, a narzędzie najpierw mówi, co zrozumiało, potem zaczyna mówiony dialog [[socratic-method|sokratejski]]. Każdy pomysł, który student nazwie, pojawia się jako węzeł w żywym [[knowledge-graph|grafie wiedzy]]; krawędzie pojawiają się, gdy rozmowa je łączy, a panel podaje, ile pomysłów pozostaje niepołączonych.

## Co można z nim zrobić

Pętla jest celowo krótka. Materiał wchodzi (do 10 MB, osiem stron PDF lub 15 000 znaków tekstu), tutor go odczytuje, a rozmowa odbywa się głosem — strona mówi, że tutor nie ocenia i nie pisze za studenta. Graf jest artefaktem, który sprawia, że sesja jest coś warta później: pokazuje, które pomysły student rzeczywiście powiązał, a które pozostały luźne, co jest znacznie bardziej konkretną rzeczą do przeglądu niż transkrypt czatu. Sesję można wyeksportować jako plik XML grafu i przesłać ponownie innego dnia, by kontynuować, a przycisk usuwania kasuje ją natychmiast; w przeciwnym razie serwer usuwa ją po godzinie.

To połączenie — tutor, który wstrzymuje odpowiedź, plus wizualny zapis rozumowania — mieści się dokładnie w tym, co próbują osiągnąć [[scaffolding|rusztowanie]] i refleksja [[metacognition|metapoznawcza]], i daje nauczycielowi coś konkretnego, o co można zapytać, zamiast gotowego eseju czy poprawnej liczby. Własne ujęcie strony jest takie, że poprawny wynik nie dowodzi już zrozumienia, odkąd generatywna AI potrafi go wytworzyć, więc proces musi być widoczny.

## Dla kogo

Studenci przerabiający lekturę lub zestaw zadań, którzy chcą, by ich pytano, a nie odpowiadano za nich; nauczyciele, którzy chcą niskostawkowej kontroli, czy student potrafi łączyć pomysły; oraz specjaliści ds. rozwoju kadry szukający konkretnego przykładu dowodu procesu. Nauczyciele mają przewodnik zgodny z programem nauczania po angielsku, hiszpańsku, portugalsku i francusku; samo narzędzie działa po angielsku i hiszpańsku, a film instruktażowy jest po hiszpańsku.

## Uwagi i zastrzeżenia

Nie opublikowano ceny ani konta dla narzędzia skierowanego do studentów, natomiast wdrożenie instytucjonalne — chmurowe, lokalne lub hybrydowe — jest oferowane przez indywidualną propozycję i spotkanie; traktuj „bezpłatne” jako stan publicznego demo w listopadzie 2026 r., a nie gwarancję. Tekst i obrazy trafiają do hostowanej usługi napędzanej przez Claude, a sama strona każe użytkownikom usuwać imiona, kwoty, adresy i nazwy firm przed przesłaniem, co przenosi ciężar deidentyfikacji na osobę przesyłającą, a nie na platformę. Sesje usuwają się po godzinie, chyba że zostaną wyeksportowane. Firma stojąca za narzędziem sprzedaje instytucjom także szerszą platformę oceny grafów rozumowania, a jej twierdzenia o rozróżnianiu grafów dedukcyjnych, indukcyjnych, abdukcyjnych i analogicznych pochodzą z czterech tekstów referencyjnych — strona nazywa to demonstracją, a walidacja na skalę dopiero przed nią.

## Powiązane pojęcia

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
