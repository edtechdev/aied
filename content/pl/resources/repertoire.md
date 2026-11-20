---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Aplikacja internetowa do tworzenia etapowych zadań z AI, w której prowadzący określa rolę modelu i bramki ograniczające korzystanie z niego przez studentów, a tożsamość studenta pozostaje poza kontekstem modelu."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Builder zadań zintegrowanych z AI, zbudowany przez Joseph Slade na Oregon State University i prowadzony przez AI Education Labs, Inc. Założenie jest takie, że alternatywą dla chatbota bez reguł nie jest zakaz, lecz struktura: prowadzący definiuje kroki, przez które przechodzi student, decyduje, jaką rolę model pełni w każdym kroku, i określa, jak dalece student może się na nim opierać. Zadanie jest następnie publikowane jako link do dołączenia, zamiast być rozprowadzane jako dokument z promptem.

## Co można z nim zrobić

- **Ustaw rolę modelu dla każdego zadania.** Builder oferuje gotowe ustawienia: tutor, sokratejski pytający, dostawca informacji zwrotnej i asystent badawczy, a także własny prompt, dzięki czemu asystent zachowuje się tak, jak wymaga tego zadanie.
- **Wstaw bramki między krokami.** Krok może wymagać, aby student wyjaśnił swoje rozumowanie przed przejściem dalej, a pomoc AI można ograniczyć limitem na krok — interfejs pokazuje pozostałą liczbę zamiast nieograniczonego dostępu.
- **Wybierz powierzchnię roboczą.** Studenci piszą na stronie dokumentu z komentarzami na marginesie, a układy czatu i notatnika są dostępne tam, gdzie pasują do zadania lepiej niż strona.
- **Publikuj i obserwuj rozumowanie, nie tylko wynik.** Link do dołączenia zapisuje studentów, postępy zapisują się na bieżąco, a prowadzący może przeczytać transkrypt każdego studenta i wyeksportować go jako CSV lub Markdown.
- **Twórz szkic z AI, a potem dopracowuj.** Konfiguracja może zacząć się od kilku pytań, wgranego istniejącego zadania lub poprzedniego zadania, z asystentem po stronie prowadzącego, który wypełnia pierwszy szkic.

Opublikowane przykłady sugerują zamierzony zakres: zadanie z fizyki dotyczące dowodów i zeznań, ćwiczenie z biologii diagnozujące błąd rozumowania w wyjaśnieniu stażysty AI oraz zadanie z psychologii sprawdzające, czy doniesienie prasowe opisuje projekt badania.

## Dla kogo

Prowadzący w szkolnictwie wyższym, którzy chcą, aby [[learning-design|projektowanie uczenia się]] było nośnikiem polityki AI — czyli tacy, którzy wolą ograniczać sposób, w jaki model może być używany w zadaniu, niż kontrolować, czy w ogóle został użyty. Bramki i ustawienia ról to wyraz [[guardrails|barier ochronnych]] na etapie projektowania, a aplikacja jest przeznaczona do zadań kursowych, a nie do instytucjonalnego wdrażania czatu.

## Uwagi i zastrzeżenia

- **Etap pilotażu.** Warunki stwierdzają, że usługa jest obecnie świadczona bezpłatnie na potrzeby pilotaży i że płatne plany mogą zostać wprowadzone po powiadomieniu, a funkcje mogą się zmienić lub zostać wycofane. Nie ma publicznej strony z cennikiem; do cen docierasz dopiero po zalogowaniu.
- **Twierdzenie o prywatności jest architektoniczne i warto je uważnie przeczytać.** Każdy student otrzymuje losowy identyfikator sesji na zadanie, mapowanie konta studenta na sesję pozostaje na serwerze Repertoire, a model otrzymuje anonimową sesję, kontekst zadania i tekst pisany przez studenta. Zastrzeżenie tkwi w samej polityce: tekst, który student wpisuje i który go identyfikuje, jest wysyłany jak każdy inny tekst, a prowadzący kurs może czytać transkrypty.
- **Inferencja stron trzecich.** Odpowiedzi są generowane przez API Claude firmy Anthropic, z API OpenAI jako zapasem, na warunkach komercyjnych, które według polityki wykluczają trenowanie na danych wejściowych i wyjściowych API (stan na September 2026). Instytucja powinna potwierdzić to we własnej umowie, a nie na stronie internetowej.
- **To nie jest oceniający.** Polityka i warunki opisują sądy asystenta, takie jak „cel osiągnięty", jako pomoc dla prowadzącego; oceny i decyzje akademickie pozostają przy prowadzącym i instytucji, a decyzje o [[ai-use-disclosure|ujawnianiu użycia AI]] studentom pozostawia się prowadzącemu.
- **Hostowane w USA.** Dane znajdują się w Google Cloud Firestore z hostingiem Vercel, a polityka odnosi się do obowiązków FERPA tam, gdzie usługa przetwarza dokumentację edukacyjną; użytkownicy poza Stanami Zjednoczonymi są informowani, że ich dane są przetwarzane właśnie tam.
