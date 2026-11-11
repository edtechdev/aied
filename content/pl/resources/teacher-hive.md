---
title: "Teacher Hive"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: resource
summary: "Bezpłatna platforma hostingowa Tony'ego Vincenta, na której nauczyciele publikują wygenerowane przez SI aplikacje klasowe, udostępniają je linkiem lub kodem QR i przeglądają setki aplikacji zrobionych przez innych nauczycieli."
url: https://teacherhive.app/
author: "Tony Vincent"
author_url: https://teacherhive.app/about
resource_type: [software, collection of tools]
access: [freemium]
last_verified: "2026-11-10"
foundations: [teacher-ai-competency]
technology: [generative-ai]
audience: [instructors, instructional designers]
level: [k 12, teacher education]
translation_of: resources/teacher-hive
source_updated: "2026-11-10T19:52:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**Teacher Hive** to platforma hostingowa i udostępniająca aplikacje klasowe tworzone przez nauczycieli, zbudowana przez Tony'ego Vincenta. Jej założenie jest takie, że trudną częścią SI w klasie nie jest już nakłonienie modelu do napisania małej aplikacji, ale znalezienie miejsca, w którym będzie działać w sieci szkolnej i które uczniowie łatwo otworzą. Nauczyciele wklejają lub wgrywają pojedynczy plik HTML wytworzony przez ChatGPT, Claude albo Gemini, a Teacher Hive serwuje go pod krótkim publicznym linkiem z ikoną i kodem QR. Przeglądanie, zapisywanie, obserwowanie i publikowanie są bezpłatne; płatny plan Pro podnosi limity miejsca i liczby aplikacji.

## Co można z nim zrobić

**Przeglądaj** opublikowane aplikacje według kolekcji — przerwy na ruch, ELA, matematyka, przyroda, wiedza o społeczeństwie, narzędzia dla nauczycieli — a potem **Publikuj** aplikację, wklejając HTML i dodając nazwę, opis, ikonę oraz atrybucję SI. Każda aplikacja otrzymuje stronę informacyjną z przyciskiem Uruchom i wyświetlanym kodem QR, i otwiera się bez brandingu ani logowania ucznia. Opcjonalna warstwa **Superpowers** dodaje zapisane odpowiedzi, wywołania SI, pocztę i przechowywanie plików, rozliczane według planu. Dla pojedynczej aplikacji, która nie potrzebuje galerii, dwie bezpłatne alternatywy działają przez przeciągnij i upuść: [Cloudflare Drop](https://www.cloudflare.com/drop/) publikuje folder, plik zip albo pojedynczy plik HTML pod adresem workers.dev bez konta, pod warunkiem że wdrożenie zostanie przejęte w ciągu 60 minut, a [Netlify Drop](https://app.netlify.com/drop) publikuje te same dane wejściowe pod publicznym linkiem w planie bezpłatnym.

## Dla kogo

Nauczyciele K–12, którzy użyli [[generative-ai|generatywnej SI]] do zbudowania małego narzędzia i potrzebują niezawodnego miejsca do jego hostowania, są główną publicznością; platforma jest zaprojektowana pod [[vibe-coding]], a nie pod deweloperów. Projektanci nauczania i edukatorzy nauczycieli mogą wykorzystywać kolekcje jako przykłady i jako sposób budowania [[teacher-ai-competency|kompetencji nauczycieli w zakresie SI]] przy niskich stawkach.

## Uwagi i zastrzeżenia

Plany Member i Builder są bezpłatne (Builder: 50 aplikacji, 50 MB); Pro kosztuje 10 USD miesięcznie albo 60 USD rocznie za 500 aplikacji. Dostęp jest freemium.

Prywatność jest mocniejszym twierdzeniem, ale przenosi odpowiedzialność na nauczycieli. Teacher Hive nie tworzy kont uczniów, nie prosi uczniów o dane osobowe i nie uruchamia skryptów analitycznych ani reklamowych w opublikowanych aplikacjach. Ponieważ aplikacje są dostępne publicznie pod linkiem, regulamin czyni nauczycieli odpowiedzialnymi za to, by ich aplikacje nie zbierały imion, adresów e-mail, identyfikatorów uczniów ani lokalizacji. Zakres dostępności (WCAG 2.2 AA) dotyczy własnych stron Teacher Hive, a nie aplikacji tworzonych przez nauczycieli, które nie są testowane. Nie podano licencji open source, a dostępność usługi i retencja danych nie są gwarantowane.

## Powiązane pojęcia

- [[teacher-ai-competency]]
- [[generative-ai]]
- [[vibe-coding]]
- [[ai-literacy]]
- [[professional-training]]
