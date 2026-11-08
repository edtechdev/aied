---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Bezpłatne narzędzie w przeglądarce, które przeprowadza pisemną, ograniczoną czasem wersję ustnej obrony kodu u każdego studenta kursu programowania i proponuje oceny z cytowanymi dowodami do zatwierdzenia."
url: https://code-viva.pisan.me/
author: "Code Viva"
author_url: https://code-viva.pisan.me/
resource_type: [software]
access: [free]
last_verified: "2026-11-04"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Code Viva przeprowadza pisemną, ograniczoną czasem wersję [[oral-assessment|obrony ustnej]] u każdego studenta kursu programowania, po około piętnaście do dwudziestu minut, bez wykładowcy w sali. Czyta przesłany kod studenta i historię commitów, pisze cztery do sześciu pytań o własne funkcje, nazwy i commity tego studenta, a każdemu studentowi daje osobisty link, z którego ma odpowiadać.

## Co można z nim zrobić

Zgłoszenia pochodzą z eksportu Gradescope, pliku zip z Canvas, pliku zip z katalogiem na studenta albo z GitHub Classroom z tokenem odczytu. Wykładowca ustala długość sesji, liczbę pytań i termin, oznacza wydłużony czas od 1,25x do 3x i czyta, edytuje lub zastępuje wygenerowane pytania przed wysłaniem linków. Pytania obejmują przypadki bazowe rekurencji, strażników brzegowych, wybór struktur danych, niejasne nazwy zmiennych, skalę i śledzenie wykonania, zdania ze specyfikacji zadania oraz wzorce commitów, takie jak jeden zbiorczy commit albo commit późną nocą. Odpowiedzi wracają jako kod odpowiedzi, a ekran przeglądu pokazuje każdy zapis obok proponowanej oceny od 0 do 3 wraz ze zdaniami, na których się opiera, oraz kolejkę oznaczeń uporządkowaną według tego, jak bardzo rozmowa jest uzasadniona. Wyniki eksportują się do CSV, a jedenaście kursów demonstracyjnych pozwala czytelnikowi przejść całą pętlę na wymyślonych danych.

## Dla kogo

Wykładowcy kursów programowania, którzy chcą dowodu, że student potrafi wyjaśnić własny kod, i którzy wolą rozmawiać z krótką listą studentów niż ze wszystkimi; pytania o commity czynią z narzędzia formę [[process-oriented-assessment|oceniania zorientowanego na proces]].

## Uwagi i zastrzeżenia

Wszystko działa w przeglądarce: kurs siedzi w pamięci lokalnej z eksportem do JSON, pytania podróżują w tej części linku, której przeglądarki nie wysyłają do serwerów, a odpowiedzi wracają tylko jako kody, które studenci zdecydują się wysłać, więc żadne dane studenta nie trafiają do osób trzecich. Generator pytań jest oparty na regułach, a nie na modelu. Według własnego opisu narzędzia jego czytnik kodu jest heurystyczny, więc nietypowe formatowanie lub makra mogą ukryć funkcję, a ocena może nagradzać znajomość słownictwa zamiast rozumienia kodu — dlatego oceny są propozycjami zatwierdzanymi przez wykładowcę i dlatego narzędzie zaleca utrzymywanie niskiej stawki. Licencja i repozytorium źródłowe nie są publikowane, a ponieważ linki niosą pytania, rozciągają się do kilku kilobajtów — dość długo, by zawijać się w polu wiadomości systemu zarządzania uczeniem się.

## Powiązane pojęcia

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
