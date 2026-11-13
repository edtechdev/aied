---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Otwarty system autorski z Generative AI Labs na Wharton School, który zamienia ustrukturyzowany wywiad z edukatorem w uruchamialną, adaptacyjną symulację edukacyjną z własnym mentorem oraz agentami ćwiczeń i informacji zwrotnej."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Primer to [[open-source|system open source]] do budowania edukacyjnej [[simulation|symulacji]] przez opisanie lekcji sztucznej inteligencji, a nie przez jej zaprogramowanie. Osąd edukatora wyznacza, czego uczy symulacja: wywiad wydobywa to, co wykładowca wie o lekcji i studentach, dokument projektowy czyni tę wiedzę możliwą do przejrzenia, a nic nie zostaje zbudowane, dopóki edukator tego nie zatwierdzi.

## Co można z nim zrobić

Wywiad toczy się jedno pytanie naraz: lekcja, poziom studentów i ich wcześniejsza wiedza, typowe błędne przekonania, podejście wykładowcy i sposób oceny sukcesu. Edukatorzy mogą mówić lub pisać, a także przesyłać sylabusy, plany lekcji lub rubryki. W odpowiedzi powstaje dokument projektowy obejmujący cele, przebieg scenariusza, postacie, stawki i logikę adaptacji, który edukator poprawia i zatwierdza tak, jak zrobiłby to z planem lekcji. Następnie buduje go pięć agentów: Intake, Design, Casting Director, Image Generation i Experience Builder, który składa wynik dla jednego studenta lub całej klasy.

W czasie działania trzej agenci stają naprzeciw studenta. Mentor aktywizuje wcześniejszą wiedzę i wydobywa błędne przekonania. Agent ćwiczeniowy odgrywa partnera w grze fabularnej albo ucznia w ćwiczeniu teachback, w którym student wyjaśnia pojęcie i poprawia wyjaśnienie, gdy jest pytany. Agent informacji zwrotnej pracuje na transkrypcji, omawiając konkretne momenty i to, jak nauka przenosi się poza scenariusz. Każdy agent ma postać w świecie i warstwę dydaktyczną, która śledzi cele i gromadzi dowody, a edukator otrzymuje raporty indywidualne i zbiorcze.

## Dla kogo

Wykładowcy, projektanci nauczania i trenerzy kadry akademickiej mogą szczegółowo opisać lekcję, nie chcąc pisać do niej kodu. Badacze zajmujący się autorskim tworzeniem z edukatorem w pętli lub [[agentic-ai|wieloagentowymi przepływami pracy]] otrzymują działający system do zbadania, a deweloperzy mogą go rozszerzać, ponieważ prompty, szablony, listy kontrolne, wzorce orkiestracji i kod TypeScript są w całości open source.

## Uwagi i zastrzeżenia

Autorzy nazywają Primer eksperymentalnym prototypem, a nie sprawdzonym produktem klasowym. Nie oceniono go jako interwencji edukacyjnej w klasach i nikt nie przejrzał go pod kątem FERPA, COPPA, stanowego prawa o prywatności studentów ani polityki okręgu, więc instytucja, która używa go ze studentami, bierze tę weryfikację na siebie. Oprogramowanie ma licencję MIT i jest bezpłatne, ale uruchomienie symulacji wymaga dostępu do modelu, co kosztuje. Ponieważ jest niezależne od modelu i działa na modelach lokalnych lub z otwartymi wagami, można je wdrażać tam, gdzie zasady prywatności są ostrzejsze. Biała księga o architekturze i promptach jest podlinkowana ze strony projektu. Repozytorium miało 98 gwiazdek i 16 forków, gdy sprawdzano je w listopadzie 2026.

## Powiązane pojęcia

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
