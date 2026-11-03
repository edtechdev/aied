---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Otwarty format tekstowy dla blokowych lekcji e-learningowych oraz umiejętność agentowa, która pisze w nim lekcje, ocenianie i całe pakiety kursów."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
translation_of: resources/lesson-md
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**LESSON.md** to otwarty format treści e-learningowych opartych na blokach: plik Markdown z frontmatterem YAML i dyrektywami `:::` dla tekstu, obrazów i sprawdzianów wiedzy, czytelny dla człowieka i parsowalny dla dowolnego narzędzia. Istnieje dlatego, że treść kursu jest zwykle zamknięta w jednym narzędziu autorskim, a [[llm|duże modele językowe]] mogą pomóc tylko z lekcjami, które naprawdę potrafią przeczytać.

## Co można z nim zrobić

Napisać lekcję w dowolnym edytorze tekstu i zaimportować ją do dowolnego narzędzia obsługującego format, bez kopiowania i przeformatowywania. Elementy interaktywne — sprawdziany wiedzy z wyborem odpowiedzi, z limitem prób i informacją zwrotną na poziomie odpowiedzi — wyraża się jako proste właściwości, a nie przez GUI. Towarzyszący plik `ASSESSMENT.md` w katalogu głównym pakietu staje się punktowanym [[assessment|ocenianiem]] kursu. Projekt dostarcza też umiejętność `lesson-md`, która uczy Claude'a, Codexa lub innego [[agentic-ai|agenta]] tego formatu, więc opisanie kursu zwykłym językiem zwraca lekcje, ocenianie i pełny pakiet.

## Dla kogo

Projektanci nauczania i twórcy kursów, którzy chcą, by ich treść przetrwała zmianę narzędzia; dostawcy e-learningu, którzy chcą formatu importu i eksportu, jaki ich użytkownicy już rozumieją; oraz wszyscy budujący autoring wspomagany SI na czytelnym formacie. Wśród współtwórców jest Dan Bashaw z LXD Integral, a format ma publiczny changelog do wersji v1.8.

## Powiązane pojęcia

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]], [[assessment]], [[edtech-platform]]
