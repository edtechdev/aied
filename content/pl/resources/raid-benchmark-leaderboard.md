---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Publiczny ranking detektorów tekstu AI ocenianych na RAID — benchmarku zbudowanym do testowania odporności na modele, domeny, ustawienia dekodowania i ataki adwersarialne."
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
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [ai-detection, academic-integrity, benchmark]
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

RAID to benchmark stojący za większością poważnych twierdzeń o [[ai-detection|wykrywaniu tekstu AI]], a jego ranking to miejsce, w którym można sprawdzić, czy opublikowana dokładność detektora przetrwa zmianę modelu, domeny, ustawienia dekodowania lub celowy atak. Zgłoszenia są oceniane na zbiorze testowym i może je składać każdy, kto postępuje zgodnie z procedurą zgłoszeń repozytorium.

## Co można z nim zrobić

Filtruj według domeny — abstrakty, książki, wiadomości, poezja, przepisy, Reddit, recenzje, wiki — według strategii dekodowania (greedy lub sampling), według kary za powtórzenia oraz według ataku adwersarialnego, w tym białych znaków, homoglify, podstawiania synonimów, parafrazy, spacji o zerowej szerokości i usuwania przedimków. Następnie porównaj detektor między metrykami: AUROC, TPR przy 5% odsetku fałszywie pozytywnych wyników oraz TPR przy 1%.

Ten zestaw filtrów jest sednem. Detektor, który osiąga blisko 1.000 w ujęciu łącznym, może przepaść, gdy tekst zostanie sparafrazowany lub zmieni się model źródłowy, a ranking pozwala zobaczyć ten spadek, zanim instytucja oprze na nim sprawę o [[academic-integrity|nieuczciwość akademicką]]. Kolumna 1% fałszywie pozytywnych wyników ma największe znaczenie w edukacji, ponieważ na skalę instytucji 1% błędów oznacza setki niesłusznie oskarżonych studentów.

## Dla kogo

Badacze oceniający metody wykrywania, administratorzy piszący polityki, które mogą odwoływać się do detektora, oraz wykładowcy, którzy chcą konkretnej odpowiedzi na pytanie „czy to da się wykryć?", zanim powiedzą o tym w sylabusie.

## Uwagi i zastrzeżenia

Benchmark mierzy wykrywanie tekstu wygenerowanego maszynowo, a nie nieuczciwość: student, który używa AI do planowania, tworzenia konspektu lub poprawiania tekstu, wytwarza tekst, którego detektory nie zostały zbudowane, by wyłapywać, a student [[language-learning|piszący w drugim języku]] jest znanym ryzykiem fałszywie pozytywnego wyniku, którego ranking nie potrafi pokazać. RAID to artefakt badawczy utrzymywany przez zespół akademicki; pokrycie nadąża za modelami generatorów w jego zbiorze testowym, więc nowsze modele mogą być niedoreprezentowane, dopóki benchmark nie zostanie odświeżony. Ranking szereguje detektory, a nie praktyki przetwarzania danych ich dostawców, a wysokie AUROC nic nie mówi o tym, czy przesyłanie prac studenckich do tej usługi jest legalne lub etyczne w twojej jurysdykcji.
