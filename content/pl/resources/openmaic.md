---
title: "OpenMAIC"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Otwartoźródłowe wydanie MAIC: wieloagentowa klasa, która zamienia temat lub dokument w slajdy, quizy, symulacje i projekty, prowadzona przez nauczycieli i kolegów z klasy napędzanych SI."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
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

**OpenMAIC** to otwartoźródłowe wydanie wieloagentowej klasy MAIC opisanej w [[intelligent-tutoring|badaniu MAIC]]: wystarczy opisać temat albo załączyć własne materiały, a system generuje całą lekcję — slajdy, quizy, interaktywne symulacje HTML i aktywności projektowe — a potem prowadzi ją przez nauczycieli i kolegów z klasy napędzanych SI, którzy mówią, rysują na tablicy i biorą udział w dyskusji. To kod stojący za klasą, którą można uruchomić, a nie tylko o niej czytać.

## Co można z nim zrobić

Generowanie jednym kliknięciem tworzy lekcję w kilka minut z promptu albo wgranego dokumentu, dźwięku lub wideo. Warstwa wieloagentowa dodaje dyskusję klasową, do której uczący się może dołączyć lub zostać wezwany, debaty przy okrągłym stole między personami z ilustracjami na tablicy oraz swobodne pytania i odpowiedzi, w których nauczyciel odpowiada slajdami lub diagramami. Sesje obsługują zestawy slajdów, quizy, interaktywne symulacje i PBL, a eksportują się jako edytowalne `.pptx` albo interaktywne `.html`. Wersja 1.0.0 (sierpień 2026) dodała warsztat agentowy: środowisko z czatem na pierwszym planie, które planuje i poprawia całe kursy, trwałe sesje po stronie serwera, które można anulować, wznowić lub sterować nimi, oraz 24 wbudowane umiejętności obejmujące slajdy, quizy, interaktywne elementy, obrazy, wideo i głosy. Pakiet `SKILL.md` pozwala harnessowi agentowemu budować klasy z aplikacji do komunikacji.

## Dla kogo

Wykładowcy i zespoły kursowe, które chcą generowanych materiałów, które wciąż mogą edytować; projektanci nauczania prototypujący aktywności wieloagentowe; oraz deweloperzy, którzy potrzebują klasy do samodzielnego hostowania, a nie hostowanego produktu. Szkoły mogą wdrożyć ją na Vercelu lub w Dockerze, a projekt dostarcza hostowane demo pod open.maic.chat.

## Uwagi

Licencja MIT, z przewodnikiem użytkownika po angielsku i chińsku oraz aktywną społecznością na Discordzie i Feishu. Projekt nie zależy od modelu: dostarcza się co najmniej jeden klucz dostawcy LLM, a opcjonalne komponenty lokalne (Lemonade dla modeli lokalnych, FunASR do rozpoznawania mowy) pozwalają uruchomić więcej stosu offline — więc „bezpłatny” opisuje oprogramowanie, a nie rachunek za wnioskowanie. Praca, na której się opiera, ukazała się w *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), a repozytorium miało ponad 38 000 gwiazdek do września 2026.

## Powiązane pojęcia

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]
