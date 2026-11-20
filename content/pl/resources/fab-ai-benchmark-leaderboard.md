---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Ranking modeli dla benchmarków edukacyjnych skierowanych do krajów o niskich i średnich dochodach, obejmujący pedagogikę, podstawową alfabetyzację, SEND, matematykę wizualną i wyniki wielojęzyczne, z kolumnami ceny i otwartych wag."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
contributors: [editor]
translation_of: resources/fab-ai-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Fab AI ocenia modele na zadaniach edukacyjnych, które mają znaczenie tam, gdzie budżety, przepustowość łączy i pokrycie językowe są ograniczone — w [[global-south|krajach o niskich i średnich dochodach]], dla których zbudowano ten benchmark — i publikuje wyniki jako sortowalny ranking, a nie artykuł naukowy. Główna tabela punktuje benchmark pedagogiczny obok SEND, matematyki wizualnej i rozumowania wizualnego, z osobnymi zakładkami dla pedagogiki wielojęzycznej, podstawowej alfabetyzacji i oceniania czytania na głos.

## Co można z nim zrobić

Porównaj około 300 modeli pod względem wyników pedagogicznych, które obecnie rozciągają się od nieco ponad dziewięćdziesięciu procent aż do 21%, a następnie posortuj według tego, co ministerstwo edukacji naprawdę musi ważyć: cena za milion tokenów, liczba parametrów, otwarte wagi i data wydania. Rozrzut na dole stawki jest użyteczną częścią. Otwarte modele o mniej niż 2B parametrów mieszczą się między 21% a 43% w benchmarku pedagogicznym, podczas gdy czołowe modele utrzymują się nieco powyżej dziewięćdziesięciu procent, co zamienia pytanie „czy możemy uruchomić to offline na tanim sprzęcie" w skwantyfikowany kompromis, a nie zgadywanie.

Zakładka pedagogiki [[multilingual-learning|wielojęzycznej]] to powód, by dodać tę stronę do zakładek. Większość benchmarków edukacyjnych jest wyłącznie anglojęzyczna, a pytanie, czy pedagogika modelu przetrwa tłumaczenie, jest dokładnie tym pytaniem, na które ministerstwo w wielojęzycznym systemie potrzebuje odpowiedzi. Dane można pobrać jako CSV, więc porównania da się odtworzyć lokalnie.

## Dla kogo

Decydenci polityczni i zespoły zamówień publicznych wybierające modele dla systemów krajowych, badacze analizujący [[digital-divide|lukę dostępu]] w edukacji wspieranej przez AI oraz twórcy, którzy potrzebują celu pedagogicznego niebędącego anglojęzycznym egzaminem.

## Uwagi i zastrzeżenia

Ranking mierzy modele na zadaniach samego benchmarku: wysoki wynik pedagogiczny jest dowodem dotyczącym tych zadań, a nie klasy szkolnej. Kolumna ceny łączy ceny tokenów wejściowych i wyjściowych w proporcji 3:1, co jest wyborem modelowym, a nie kosztem konkretnego wdrożenia. Pokrycie języków i modeli hostowanych lokalnie zmienia się wraz z pojawianiem się nowych modeli, a niskie wyniki małych modeli częściowo odzwierciedlają format zadania w równym stopniu co możliwości. Fab AI wyraźnie kieruje swoje przesłanie do krajów o niskich i średnich dochodach, więc zestaw zadań benchmarku odzwierciedla ten kontekst i nie należy go czytać jako ogólnego rankingu edukacji. Sprawdź daty wydań: kilka pozycji pochodzi sprzed obecnej generacji modeli.

## Powiązane pojęcia

- [[benchmark]] — szersza klasa instrumentów, do której należy ten zasób
- [[digital-divide]] — ograniczenie, które kolumny ceny i otwartych wag mają uwidocznić
- [[equity-in-ai-education]] — pytanie polityki publicznej, które ranking naświetla
