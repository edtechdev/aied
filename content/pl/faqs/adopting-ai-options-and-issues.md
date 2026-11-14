---
title: "Jakie opcje i kwestie rozważyć przy wdrażaniu narzędzi AI?"
created: "2026-11-12T11:04:00-05:00"
updated: "2026-11-14T04:15:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-14T04:15:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Przewodniczący katedry ma trzy oferty na platformę [[intelligent-tutoring|tutoringu AI]] i termin do piątku. [[teacher-role|Nauczyciel]] chce używać bezpłatnego narzędzia, z którego korzysta już połowa kadry. Dyrektor ds. informatyki dostaje pytanie, czy instytucja powinna uruchomić własny model, i nie potrafi powiedzieć, ile by to kosztowało.

To to samo pytanie na trzech poziomach. Opcji jest mniej, niż sugeruje lista dostawców, a problemy trwają dłużej niż jakikolwiek produkt.

Wybór powinien pasować do decyzji, przed którą stoisz. Jednostka decyduje, co włożyć do narzędzia. Instytucja decyduje, kto może używać którego modelu, na jakich danych, za jaką cenę i kto odpowiada, gdy coś pójdzie nie tak. Większość złych decyzji wdrożeniowych bierze się z odpowiadania na pytanie instytucjonalne narzędziem jednostkowym.

## W skrócie

Pięć reguł obejmuje większość spraw.

1. Najpierw ustal granicę danych, bo wszystko inne można wynegocjować na nowo, a tej granicy nie.
2. Wybierz najmniejszą formę, która pasuje: bezpłatne lub zewnętrzne narzędzia na pilotaż, hostowana platforma, gdy potrzebujesz kontroli nad danymi bez GPU, brama, gdy potrzebujesz limitów i routingu, oraz własna inferencja tylko wtedy, gdy trzy pozostałe zawiodą.
3. Porównaj ceny za miejsce i rozliczane za użycie z własnymi liczbami, bo większość użycia zwykle pochodzi od kilku intensywnych użytkowników.
4. Spraw, by ścieżka sankcjonowana była szybsza niż niezatwierdzona, bo EDUCAUSE ustalił, że 94% pracowników i kadry używa AI w pracy, 54% zna politykę, a 56% używa narzędzi, których instytucja nie zapewnia.
5. Potem z góry ustal, jakie dowody skłonią cię do zatrzymania, bo wdrożenie bez testu wyjścia domyślnie staje się trwałe.

## Na poziomie jednostki

Prowadzący lub student podejmuje decyzję o danych, zanim podejmie decyzję dydaktyczną. Imiona i nazwiska studentów, szczegóły indywidualnego planu edukacyjnego, notatki dyscyplinarne i niepublikowane badania tworzą odpowiedzialność prawną, więc najpierw usuń dane identyfikujące i sprawdź, czy narzędzie nadal wykonuje swoje zadanie. Potem przeczytaj warunki: retencja, trenowanie na twoich danych wejściowych i podprocesory zwykle znajdują się w dokumencie, którego nikt nie otwiera, a jeśli nie da się znaleźć odpowiedzi w pięć minut, traktuj ją jako nieznaną.

Wiedz, w czym narzędzie jest dobre. Generowany tekst jest najmocniejszy w tworzeniu szkiców, restrukturyzacji i streszczaniu, a najsłabszy w arytmetyce, cytowaniach i wszystkim, co wymaga aktualnych faktów. Wiedz też, ile cię kosztuje. Bezpłatny plan jest bezpłatny, bo produktem jest użycie albo bo plan się zmieni, i jedno, i drugie to powód, by pamiętać o wyjściu.

Pozostają dwa pytania. Kto jeszcze jest dotknięty, bo narzędzie, które przekształca kurs, jest decyzją dla studentów na nim. I czy jest dozwolone: przeczytaj politykę raz, jeśli istnieje, a jeśli nie, dowody dotyczące [[shadow-ai]] sugerują, że już domyślnie tworzysz politykę.

Prosta heurystyka: używaj sankcjonowanego narzędzia, gdy jest w zasięgu, a gdy nie jest, zapisz, co zrobiłeś i dlaczego. Ten zapis chroni cię, jeśli osąd zostanie później zakwestionowany.

## Na poziomie instytucji

Instytucja kupuje jednym zakupem usługę, przepływ danych, obowiązek wsparcia i zobowiązanie polityczne. Sześć form tworzy rzeczywiste menu, a większość instytucji znajduje się w dwóch lub trzech, nie wiedząc o tym.

Najłatwiejszy start to bezpłatne narzędzie zewnętrzne. AI Tutor Pro od Contact North nie wymaga konta, a Playlab pozwala edukatorom budować aplikacje oparte na własnym [[curriculum-design|programie nauczania]], podczas gdy dostawca hostuje modele. Oba są dobre na pilotaż i słabe jako rozwiązanie docelowe: brak ścieżki audytu, brak kontroli limitów i warunki, które mogą się zmienić.

Kupowanie miejsc na komercyjnym tenancie, czy to [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot czy Google Gemini for Education, przynosi szybkie zaopatrzenie, SSO i konsolę administracyjną, a wybór modelu i retencję pozostawia dostawcy.

Hostowana przez ciebie platforma trzyma dane bliżej. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) wdraża się na twoim własnym koncie AWS, a pilotaż Vanderbilta raportował około \$3 na użytkownika miesięcznie przy 1 300 użytkownikach, z których połowa zużywała poniżej \$1 na tokeny. To daje kontrolę nad danymi bez GPU.

Brama nad mieszanymi dostawcami stawia jedne drzwi frontowe przed kilkoma. Niesie limity, SSO, logowanie i routing regionalny; Fontys prowadził jedną dla 300 użytkowników w ramach miesięcznego limitu \$500, który nigdy nie został przekroczony, a [MindRouter](/aied/resources/mindrouter/) dodaje harmonogramowanie ważone rolami i pomiar energii.

Własna inferencja to najdroższa forma i najbardziej niezależna. Dwie usługi Purdue osiągnęły ponad 1 000 użytkowników na 10+ modelach [[open-source]] za około \$100 000 w sprzęcie, przed kosztami kadry. Odpowiada regulatorowi bez pytania dostawcy o pozwolenie.

Ostatnia forma to AI w narzędziach, które już prowadzisz: typ pytania w Moodle, partner AI platformy dyskusyjnej, narzędzie do informacji zwrotnej na eseje. Niski nakład i zmiana kurs po kursie, z niewielką wiedzą zdobytą w centrum.

## Kwestie, które nie znikają

[[privacy|Ochrona danych]] jest pierwsza. Liczy się to, jaki zapis istnieje teraz, a nie istniał wcześniej, gdzie się znajduje i kto może go odzyskać. Narzędzie, które otrzymuje listę klasy, stworzyło zapis instytucjonalny, cokolwiek mówi umowa.

Tożsamość i dostęp są następne. Wszystko używane na skalę wymaga SSO, dostępu opartego na rolach i obsługi offboardingu, a narzędzie, które nie potrafi odebrać dostępu odchodzącemu pracownikowi, pozostawia aktywne konto z twoimi danymi.

Koszty zależą od tego, jak liczona jest cena. Cena za miejsce nagradza liczbę osób, a rozliczanie za użycie nagradza użycie. Ponieważ niewielka część użytkowników zwykle generuje większość tokenów, cena za miejsce wygląda tanio, dopóki intensywni użytkownicy nie pójdą gdzie indziej.

Pomiar to zwykle brakujący element. EDUCAUSE ustalił, że 92% ma strategię AI związaną z pracą, a 13% mierzy zwrot z inwestycji. Jeśli nie potrafisz powiedzieć, co narzędzie zastąpiło, nie możesz obronić odnowienia.

[[equity-in-ai-education|Równość]] i dostępność należą do zaopatrzenia, a nie do późniejszej poprawki. Narzędzie wymagające szybkiego łącza, płatnego planu lub biegłości w angielskim rozkłada korzyści nierówno.

[[academic-integrity|Uczciwość akademicka]] zmienia to, co mierzy ocenianie. Gdy narzędzie potrafi wykonać zadanie, to zadanie wymaga rewizji.

Kadry i zależność od dostawcy znaczą tyle samo co cena. Każda z powyższych form poza bezpłatną potrzebuje właściciela, a typowym błędem jest kupienie czwartej lub piątej formy i obsadzenie jej kimś, kto już był zajęty. Zapytaj, co się stanie przy odnowieniu, zmianie ceny i wycofaniu modelu; formy bram istnieją po to, by odpowiedzią była zmiana routingu, a nie migracja.

## Jak wygląda dobry pierwszy rok

Wybierz dwa lub trzy wskaźniki, zanim cokolwiek ruszy: kto tego używał, do czego, ile to kosztowało na aktywnego użytkownika i co zmieniło się w pracy. Pilotaż, który nie potrafi podać tych liczb, to demonstracja z budżetem.

Sprawdź jednocześnie warunki brzegowe. Jeśli narzędzie dotknęło dokumentacji studentów, czy przepływ danych zgadzał się z tym, co powiedziałeś biuru ochrony prywatności? Jeśli użycie pozostało niemierzone, czy to dlatego, że narzędzie nie mogło raportować, czy dlatego, że nikt nie zapytał?

Utrzymuj sankcjonowaną ścieżkę krótką. Liczby EDUCAUSE sugerują, że ludzie omijają nadzór, bo zatwierdzona droga trwa dłużej niż zadanie. Brama z kartą modelu i dostępem tego samego dnia jest instrumentem nadzoru tak samo jak udogodnieniem IT.

## Częste błędy

Kupowanie platformy przed nazwaniem problemu daje statystyki użycia i niewiele więcej. Traktowanie „bezpłatne” jako strategii działa na pilotażu i zawodzi jako infrastruktura. Lokalny model zmienia to, kogo można wezwać do sądu; nie decyduje, czy prompty są przechowywane. Mierzenie satysfakcji zamiast efektu zamienia „nauczycielom się podobało” we wniosek, którym to nie jest. A polityka opublikowana bez wykonalnej ścieżki opisuje preferencje, a nie reguły.
