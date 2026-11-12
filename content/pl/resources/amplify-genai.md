---
title: "Amplify GenAI"
created: "2026-11-12T11:06:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Licencjonowana na MIT platforma generatywnej AI dla instytucji od Vanderbilta, wdrażana na własnym koncie AWS instytucji: niestandardowi asystenci na lokalnych dokumentach, odpowiedzi z wyszukiwaniem rozszerzonym, udostępnianie w całej organizacji i rozliczanie kosztów aż do poziomu pojedynczej wiadomości."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Amplify GenAI to zakład przeciwny wobec ogólnokampusowej licencji na komercyjnego asystenta: instytucja sama prowadzi platformę, na własnym koncie Amazon Web Services, i płaci za to, czego używa. Vanderbilt zbudował ją dla własnej społeczności, udostępnił na licencji MIT w trzech repozytoriach i oferuje teraz innym organizacjom jako alternatywę dla korporacyjnych umów za miejsce — argument brzmi, że drogą częścią powinny być modele, a nie liczba miejsc.

## Co można z nim zrobić

Użytkownicy budują niestandardowych asystentów, przesyłając dokumenty lub podłączając źródła danych, a asystenci odpowiadają za pomocą [[rag|generowania z wyszukiwaniem rozszerzonym]] na podstawie tego materiału, a nie tylko ogólnego treningu. Asystentów można udostępniać w całej organizacji, łączyć w jedną rozmowę i wyposażać w szablony promptów; platforma tworzy też pliki PowerPoint i Word, diagramy i wizualizacje. Administratorzy dostają to, czego potrzebuje współdzielona usługa: rozliczanie kosztów do poziomu wiadomości, limity na użytkownika, foldery i przestrzenie robocze oraz SSO — wszystko we wdrożeniu kontrolowanym przez instytucję.

Decyzją projektową, która najbardziej liczy się dla [[higher-ed|uczelni]], jest model rozliczania. Vanderbilt podaje, że przy 1 300 użytkownikach pilotażu koszt na użytkownika wynosił około \$3 miesięcznie, łącznie z AWS, a połowa tych użytkowników zużywała mniej niż \$1 miesięcznie na tokeny — liczby, które uniwersytet przedstawia jako studium przypadku, a nie zbadany benchmark. Rozliczanie za użycie nagradza kampus, w którym mniejszość użytkowników wykonuje większość pracy, co jest normalnym kształtem adopcji AI, i sprawia, że na pytanie biura finansowego („ile to kosztuje na studenta?”) można odpowiedzieć z logów, a nie z umowy.

## Dla kogo

Centralne działy IT i biura CIO, które już prowadzą obciążenia w AWS i chcą alternatywy wspieranej przez społeczność wobec komercyjnego asystenta korporacyjnego; kadra, która potrzebuje asystentów opartych na materiale kursu bez wysyłania go do konsumenckiego produktu dostawcy; oraz instytucje, które chcą jednego miejsca, by zobaczyć, co ludzie robią z modelami. Ponieważ platforma wdraża się na własnym koncie instytucji, kwestię rezydencji danych rozstrzyga wdrożenie, a nie obietnica dostawcy.

## Uwagi i zastrzeżenia

Bezpłatna licencja, nie bezpłatne działanie: instytucja płaci AWS i dostawcom modeli. Wybór modelu odbywa się przez Amazon Bedrock (Anthropic, Mistral) albo OpenAI i Microsoft Azure, a uruchamianie własnych modeli lokalnych nie jest zaimplementowane. Projekt wprost stwierdza, że nie może wspierać indywidualnych wdrożeń, i kieruje organizacje do partnerów komercyjnych — więc realistyczny koszt obejmuje personel lub wykonawcę. To wdrożenie z trzech repozytoriów (frontend, backend, infrastruktura) z dziesiątkami gwiazdek, a nie tysiącami, a powyższe porównanie kosztów to własne doświadczenie Vanderbilta, a nie kontrolowane badanie. Instytucje, które wolą trzymać inferencję na własnym sprzęcie, powinny spojrzeć na [MindRouter](/aied/resources/mindrouter/) i czytać oba razem: Amplify to warstwa aplikacji nad modelami dostawców, MindRouter to brama nad własnymi GPU.

## Powiązane pojęcia

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
