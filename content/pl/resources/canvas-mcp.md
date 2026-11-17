---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Otwarty serwer MCP, który pozwala Claude'owi, Cursorowi, Codexowi i innym agentom czytać i działać w Canvas LMS — narzędzia dla studentów, edukatorów i projektantów nauczania, z bramkowanymi akcjami zapisu i opcjonalną anonimizacją danych studentów."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**Canvas MCP** to otwarty serwer Model Context Protocol autorstwa Vishala Sachdeva, który łączy klienta AI z instancją Canvas LMS: agent może wypisać nadchodzące zadania studenta, odczytać zadania i zgłoszenia kursu, wysłać wiadomość do klasy albo przeprowadzić audyt kursu pod kątem dostępności — wszystko przez narzędzia, które serwer wystawia, a nie przez doraźne zeskrobywanie ekranu.

## Co można z tym zrobić

Serwer dostarcza trzy rodziny narzędzi. Narzędzia studenckie odpowiadają na „co jest zadane w tym tygodniu”, „czy oddałem wszystko”, „ile prób quizu mi zostało”, korzystając z własnych punktów końcowych `self` Canvasa. Narzędzia edukatorskie wypisują i tworzą zadania, czytają zgłoszenia, oceniają zbiorczo, wysyłają rozmowy i pobierają analitykę zadań. Narzędzia projektanta nauczania obejmują kontrole jakości kursu i skany dostępności WCAG. Łącznie dostępnych jest do 128 narzędzi, choć domyślny profil rejestruje ich mniej, a narzędzia za flagami funkcji podnoszą tę liczbę. Poza narzędziami osiem umiejętności agentowych pakuje wieloetapowe przepisy — tygodniowy plan, poranny przegląd kondycji kursu, drzewo decyzyjne zbiorczego oceniania, potok recenzji rówieśniczej, audyt kursu przed semestrem — instalowalne w ponad 40 agentach przez `skills.sh`.

## Dla kogo jest przeznaczone

Prowadzący, którzy chcą, by agent obsłużył rutynowe czytanie i wysyłanie wiadomości wokół kursu, oraz [[institutional-ai-infrastructure|zespoły instytucjonalne]] oceniające, do czego agent podłączony do LMS naprawdę dociera. Projektanci nauczania dostają tu najbliższą rzecz do automatycznego przeglądu kursu. Projekt jest wypracowanym przykładem [[agentic-ai|narzędzi agentowych]] na poziomie LMS jednej instytucji, a nie ogólnego chatbota.

## Uwagi i zastrzeżenia

Konfiguracja jest lokalna: Python 3.11 lub nowszy, token i adres API Canvasa oraz klient MCP, z rozszerzeniem uruchamianym dwukrotnym kliknięciem dla Claude Desktop. Publiczny hostowany serwer został wycofany, więc współdzielone wdrożenie oznacza samodzielny hosting za własnym uwierzytelnianiem instytucji. Narzędzia zapisu są bramkowane — serwery HTTP są tylko do odczytu, chyba że narzędzia zapisu zostaną wyraźnie dozwolone, usunięcia wymagają tokenów potwierdzenia, a wykonywanie kodu działa w piaskownicy, która w razie błędu pozostaje zamknięta. Kontrole prywatności są opcjonalne: anonimizacja odpowiedzi, maskowanie adresów e-mail i filtrowanie danych osobowych muszą być włączone, a README starannie zaznacza, że mogą wspierać obowiązki FERPA, nie ustanawiając zgodności, która zależy od wdrożenia i dostawcy AI. Serwer nie zbiera telemetrii, ale Canvas i wybrany klient prowadzą własne logi. Projekt ma licencję MIT, jest aktywnie rozwijany, a jego własne przewodniki są autorytetem w kwestii aktualnych nazw narzędzi i konfiguracji.

## Powiązane pojęcia

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
