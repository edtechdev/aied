---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Przewodnik terenowy dla edukatora po budowaniu statycznej strony edukacyjnej z asystentem kodującym AI: trzy pliki instrukcji Markdown o projekcie, bezpieczeństwie i prywatności studentów, z czytelnymi przewodnikami i pakietem do pobrania."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**The Vibe-Coding Center** to bezpłatny przewodnik terenowy Miguela Guhlina dla nauczyciela, który chce zbudować w trybie [[vibe-coding|vibe codingu]] małą statyczną stronę edukacyjną z asystentem kodującym AI — bilet wyjściowy, quiz, portfolio klasy — bez wysyłania razem z nią odsłoniętego klucza API ani danych studentów.

## Co można z tym zrobić

Trzy pliki instrukcji niosą wskazówki: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` i `securevcc.md`. Pobierz je do katalogu głównego projektu, wypełnij szablon briefu projektu, a potem poproś asystenta o odczytanie i zastosowanie wszystkich trzech; przewodnik mówi wprost, że obecność nie jest aktywacją, więc pliki trzeba wymienić w żądaniu. Czytelne przewodniki objaśniają każdy z nich, w tym przejście „Trzy zasadnicze kontrole przed udostępnieniem”: zbieraj mniej danych studentów, sprawdź odsłonięty klucz API i dopasuj projekt narzędzia do jego zadania uczenia się. Kompletny pakiet dodaje samą stronę, pakiet promptów, przegląd przed publikacją i skrypty przebudowy, z manifestem SHA-256 dla pobrania.

Towarzysząca strona [przykładów EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) pokazuje wyniki jako działające narzędzia statyczne, a nie zrzuty ekranu: generator biletów wyjściowych, który pisze pytanie na wybranym poziomie taksonomii SOLO, portfolio studenta będące pojedynczym plikiem HTML na GitHub Pages oraz przeszukiwalna biblioteka zasobów rozwoju zawodowego — wszystko działa po stronie klienta, bez logowania do LMS.

## Dla kogo jest przeznaczone

Nauczyciele i [[learning-design|projektanci nauczania]] w K-12 i szkolnictwie wyższym, którzy potrafią opisać narzędzie, jakiego chcą, i są gotowi sprawdzić, co wyprodukował asystent. Pasuje też wydziałowi, który chce jednej wspólnej listy kontrolnej, zanim ktokolwiek opublikuje narzędzie dla studentów, oraz prowadzącym uczącym [[ai-literacy|kompetencji w zakresie AI]] przez budowanie, a nie przez krytykę.

## Uwagi i zastrzeżenia

Centrum jest wskazówką, a nie produktem zgodności: strona nie rości sobie zgodności z własnym celem WCAG 2.2 AA, na pytanie „czy użycie tych plików czyni moją stronę zgodną?” odpowiada nie, i mówi, że przegląd inżynierski nie zastępuje autoryzacji szkoły ani przeglądu prawnego. Półka bezpieczeństwa wskazuje axe-core, Gitleaks, ZAP i Playwright; to odniesienia, a nie dołączone oprogramowanie, a te inwazyjne są przeznaczone dla celu jednorazowego lub wyraźnie autoryzowanego. Czytanie nie wymaga konta. Przebudowa stron HTML wymaga Pythona i `markdown-it-py`, co jest zależnością budowania, a nie zależnością odwiedzającego. Repozytorium ma licencję MIT, natomiast grafiki osób trzecich i linkowane projekty zachowują własne warunki, opisane w `CREDITS.md`.
