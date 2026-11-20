---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Publiczny ranking czołowych modeli oceniających rzeczywiste, odręczne odpowiedzi studentów z przedmiotów STEM na uczelniach wyższych według punktów rubryki wybranych przez wykładowcę."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
contributors: [editor]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

GradeBench zadaje wąskie, użyteczne pytanie o [[automated-assessment|automatyczne ocenianie]]: czy — mając odręczną odpowiedź studenta, rubrykę wykładowcy, rozwiązanie referencyjne i punkty rubryki, które wykładowca rzeczywiście wybrał — czołowy model wybierze te same punkty? Złote etykiety to rzeczywiste wybory punktów rubryki dokonane przez wykładowców i asystentów nauczania na egzaminach i quizach, a nie ponownie ocenione wyniki modeli.

## Co można z nim zrobić

Przeczytaj ranking, zanim zaufasz deklaracji dokładności któregokolwiek dostawcy narzędzi do oceniania, i przeczytaj opis konstrukcji zadań, zanim zaufasz rankingowi. [[benchmark]] obejmuje 464 zadania pochodzące ze 125 pytań z 45 [[higher-ed|uniwersyteckich]] kursów w ponad dziesięciu instytucjach, ograniczone do otwartych zadań egzaminacyjnych i quizowych, które profesor lub asystent nauczania przejrzał linia po linii, z przewagą zadań za częściowe punkty — zadania za pełną pulę punktów i za zero punktów są ograniczone do 5% każde, ponieważ modele uznają je za łatwe.

Obecny ranking kończy się znacznie poniżej poziomu zgodności między ludzkimi oceniającymi: najlepszy model osiąga 57.3% dokładnego dopasowania do rubryki, a strona przedstawia dokładność w zestawieniu z kosztem na 1,000 odpowiedzi, gdzie model o 0.8 punktu słabszy kosztuje około jednej siódmej tej ceny. Ta oś kosztowa jest praktycznie użyteczną częścią, ponieważ ocenianie to operacja masowa.

Po drugi, niezależnie zbudowany instrument, zobacz [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) od Learning Design Alliance, który jest udostępniony jako otwarte repozytorium, a nie hostingowany ranking, i został streszczony w [[porcaro-ai-grading-benchmark-2026|badaniu Porcaro]].

## Dla kogo

Wykładowcy decydujący, czy pozwolić narzędziu do oceniania wystawiać oceny bez przeglądu, specjaliści ds. oceniania piszący wymagania przetargowe oraz badacze, którzy potrzebują celu na poziomie rubryki, a nie korelacji z ocenianiem esejów.

## Uwagi i zastrzeżenia

GradeBench jest publikowany przez Pensive, komercyjną platformę do oceniania AI, więc benchmark i produkt mają tego samego właściciela; konstrukcja zadań jest udokumentowana i obronialna, ale traktuj sposób prezentacji jako narrację dostawcy. Obejmuje egzaminy STEM z rubrykami liczącymi co najmniej cztery punkty, co wyklucza eseje, krótkie odpowiedzi i posty dyskusyjne — formaty, w których odbywa się większość oceniania w [[humanities-education|humanistyce]]. Dokładne dopasowanie do rubryki to rygorystyczna metryka: dwóch oceniających może nie zgodzić się co do punktu i obaj mogą mieć rację co do studenta. Wyniki opisują wersje modeli dostępne w listopadzie 2026 i będą się zmieniać.

## Powiązane pojęcia

- [[automated-assessment]] — praktyka, którą mierzy benchmark
- [[assessment-validity]] — kryterium, którego zastępnikiem jest wynik rankingu
- [[benchmark]] — szersza klasa instrumentów, do której należy ten zasób
