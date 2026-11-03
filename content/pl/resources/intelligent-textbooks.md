---
title: "Building Intelligent Textbooks"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Otwartoźródłowy przewodnik Dana McCreary'ego po budowaniu inteligentnych podręczników: podręczniki online z wyszukiwaniem, nawigacją, słownikiem, quizami, grafem pojęć i symulacjami, tworzone w MkDocs Material i generatywnej SI."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Serwis **Intelligent Textbooks** to prowadzony krok po kroku przewodnik Dana McCreary'ego po budowaniu *inteligentnych podręczników* — podręczników online, które wychodzą poza statyczne pliki PDF, dodając wyszukiwanie, nawigację po serwisie, słownik pojęć, spis treści, zarządzanie quizami, renderowane wzory, podglądy w mediach społecznościowych, sprawdzanie linków oraz łatwy do zwizualizowania **graf pojęć**, pokazujący wszystkie pojęcia kursu i ich zależności. Przewodnik przekonuje, że wiele dzisiejszych kursów może skorzystać z wysokiej jakości podręczników online z tymi funkcjami, i pokazuje, jak je zbudować, łącząc system budowania [MkDocs](http://mkdocs.com/) z motywem Material i generatywną SI do tworzenia i utrzymywania treści.

Decydujący ruch polega na tym, że podręcznik jest *pisany w Markdownie i generowany przez SI* — konkretny przykład wzorca [[vibe-coding|autoringu wspomaganego SI]] zastosowanego do [[curriculum-design|treści kursu]]: zamiast ręcznie utrzymywać duży serwis, opisuje się kurs i pozwala generatywnej SI wytwarzać i utrzymywać strony, a łańcuch narzędzi obsługuje nawigację, wyszukiwanie i graf pojęć. Towarzysząca biblioteka [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) twierdzi, że automatyzuje ponad 90% zadań potrzebnych do zbudowania podręcznika poziomu 2 z opisu kursu.

## Zasób towarzyszący: MicroSims

Naturalnym towarzyszem tego przewodnika jest biblioteka **MicroSims** McCreary'ego pod adresem <https://dmccreary.github.io/microsims/> (źródło: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), która dostarcza interaktywne symulacje wbudowywane w inteligentny podręcznik. *MicroSim* (mikrosymulacja) to prosta interaktywna symulacja generowana przez SI, która pomaga nauczycielowi wyjaśnić pojęcie i którą można osadzić w inteligentnym podręczniku lub w dowolnym serwisie przyjmującym `iframe`. MicroSims wyróżniają się z trzech powodów: **generowanie wspomagane SI** (standardowe wzorce projektowe zamieniają naturalnojęzykowy opis symulacji w udostępnialny zasób), **uniwersalne osadzanie** (jeden element HTML `iframe` wstawia ją na dowolną stronę) oraz **przejrzysty, modyfikowalny kod** (żadnej czarnej skrzynki — jedno kliknięcie otwiera symulację w edytorze webowym, a licencja Creative Commons pozwala większości nauczycieli używać ich bez opłat licencyjnych). Termin ukuty przez Valerie Lockhart w 2023 roku, po tym jak odkryła, że nauczyciele i studenci potrafią budować symulacje w bibliotece JavaScript p5.js przy niewielkim szkoleniu lub bez niego.

Projekt publikuje też schemat JSON metadanych MicroSim, żeby narzędzia SI mogły generować przeszukiwalne deskryptory, a fasetowy rejestr MicroSim jest w planach. Praca badawcza opisująca ramy — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — jest na arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Przykładowe symulacje to Bouncing Ball, Projectile Motion, String Harmonics, Gra w życie Conwaya, wzór Eulera i wykres stóp zwrotu z giełdy, każda działająca na żywo na stronie.

## Dla kogo

Wykładowcy i projektanci nauczania, którzy chcą zbudować lub utrzymywać podręcznik do kursu, zwłaszcza w szkolnictwie wyższym i szkoleniach zawodowych, a także trenerzy kadry akademickiej i wszyscy, którzy używają generatywnej SI do tworzenia treści edukacyjnych. Przewodnik pasuje do edukatorów swobodnie poruszających się w przepływie Markdown i Git (lub gotowych się go nauczyć), którzy chcą, by SI zajęła się instalacją serwisu — wyszukiwaniem, nawigacją, grafem pojęć — i pozwoliła im skupić się na pedagogice.

## Uwagi i zastrzeżenia

To przewodnik praktyka i łańcuch narzędzi, a nie recenzowane badanie — przedstawia przepływ pracy i własne uzasadnienie edukacyjne („inteligentne podręczniki prowadzą studentów przez pojęcia w ich poszukiwaniu wiedzy”), a nie dowody na wyniki uczenia się. Praca o MicroSims jest najbliższa podparciu empirycznemu i jest samopublikowana na arXiv. Oba projekty są otwartoźródłowe (repozytorium intelligent-textbooks podaje licencję MIT i 38 gwiazdek; MicroSims licencję Creative Commons i 13 gwiazdek) i aktywnie utrzymywane. Grafy pojęć i struktura zaczynająca się od słownika są naprawdę użyteczne dla odkrywalności, ale przewodnik zakłada dość techniczny przepływ autorski — MkDocs, Git i narzędzia generatywnej SI — co dla części kadry może być barierą. W momencie wprowadzania do bazy rejestr MicroSims wciąż jest tylko w planach, więc znalezienie konkretnej istniejącej symulacji opiera się na wyszukiwaniu i nawigacji samego serwisu.

## Powiązane pojęcia

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
