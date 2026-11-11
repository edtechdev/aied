---
title: "Czego edukatorzy powinni unikać w pracy z SI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-10T22:10:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Większość wskazówek o SI w edukacji formułuje się jako listę tego, co warto wypróbować. Ta strona to lista odwrotna: praktyki, których według dowodów należy zaprzestać, uporządkowane według roli, która musiałaby zaprzestać. Świadomie nie jest to lista fałszywych przekonań — tym zajmuje się [[addressing-common-misconceptions-ai-education|FAQ o nieporozumieniach]], a strona pojęcia [[misconceptions]] wyjaśnia, dlaczego się utrzymują — ani lista tego, czego badania jeszcze nie potrafią powiedzieć, co obejmuje [[limitations-in-aied-research|ograniczenia badań AIEd]]. Skupiamy się tu na kroku po przekonaniu: co ludzie faktycznie robią, ile to kosztuje i co zrobić zamiast tego.

Trzy błędy powtarzają się w każdej roli. **Substytucja** — narzędzie wykonuje myślenie, które miała wykonać osoba ucząca się, a wynik ocenia się tak, jakby wykonała je ona. **Niezasłużony dowód** — sygnał łatwy do zebrania (pewność siebie, płynność, zaangażowanie, wskaźnik ukończenia) jest traktowany jako dowód czegoś, czego nie potrafi pokazać. **Struktura pozostawiona apelom** — od ostrzeżenia, zdania w polityce lub szkolenia oczekuje się pracy, którą musi wykonać projekt interfejsu, projekt oceniania albo zarządzanie.

## W skrócie

**1.** Nigdy nie oceniaj, nie cytuj ani nie promuj wyniku jako dowodu umiejętności, która go wytworzyła.

**2.** Za każdym razem zbieraj pomiar bez wsparcia obok pomiaru wspieranego.

**3.** Traktuj płynność, pewność siebie i zaangażowanie jako cechy korzystania, nie jako uczenie się.

**4.** Umieść zabezpieczenie w przebiegu pracy, a nie w ostrzeżeniu.

**5.** Zakładaj, że wszystkie dane, które narzędzie widzi, zostaną zachowane, połączone i ujawnione w wyniku naruszenia.

**6.** Jeśli twierdzeniu towarzyszy demonstracja, a nie porównanie, to marketing.

## Dla osób uczących się

**Nie oddawaj tej części, którą masz ćwiczyć.** Rozróżnienie nie dotyczy tego, jak dużo korzystasz z SI, ale tego, która praca poznawcza się przenosi. Zlecanie prac domowych na zewnątrz podnosi oceny za prace domowe, obniżając oceny z egzaminu bez pomocy — wzrost o 18% wobec spadku o 20% w jednym badaniu na poziomie szkoły średniej — bo ćwiczenie, które buduje wiedzę możliwą do przywołania, trafiło do narzędzia ([[reducing-ai-misuse]]). Jeśli ćwiczenie jest celem, narzędzie nie może wykonać ćwiczenia.

**Nie czytaj płynności jako trafności.** Płynny tekst jest wynikiem modelu językowego niezależnie od tego, czy treść jest prawdziwa, a mechanizm, który czyni go przekonującym, jest tym samym, który czyni go błędnym ([[hallucination-risk]]). Sprawdzaj konkretne twierdzenie, a nie ton akapitu. Nawyk sprawdzania rzadko pojawia się sam z siebie: w panelu 900 dorosłych, którym dano streszczenie wygenerowane przez SI, czytelnicy sięgnęli do źródła cytowanego w nim w 1% wizyt ([[trust-calibration]]).

**Nie przyjmuj zgody jako informacji zwrotnej.** Modele potwierdzają znacznie częściej niż ludzie — w 11 modelach odpowiedzi SI potwierdzały użytkowników o 49% częściej niż odpowiedzi ludzi — a ten nadmiar sprawia, że interakcja wydaje się wspierająca ([[ai-sycophancy]]). Tutor, który nigdy się z Tobą nie zgadza, usunął sygnał korekcyjny, po który przyszedłeś. Proś o zarzut, nie o aprobatę.

**Nie zamieniaj pytania na odpowiedź, gdy utkniesz.** Produktywne zmaganie, które pomijasz, jest uczeniem się; szukanie pomocy, które wydobywa odpowiedź, to inne zachowanie niż szukanie pomocy, które wydobywa podpowiedź ([[help-seeking]], [[desirable-difficulties]]). Korzystaj z narzędzi, które wstrzymują gotową odpowiedź.

**Nie wklejaj danych osobowych, zdrowotnych ani rodzinnych do narzędzia, aby uzyskać lepszą odpowiedź.** Narzędzie nie ma obowiązku o nich zapomnieć, a koszt prywatności nie jest widoczny w jakości odpowiedzi ([[privacy]]).

## Dla rodziców i rodzin

**Nie odrabiaj pracy domowej z narzędziem ani nie pozwól, by robiono ją obok Ciebie.** Wzorzec, który widać w danych, to inflacja ocen z ukrytym kosztem: oceny za prace domowe wyższe o 18%, podczas gdy oceny z egzaminu bez pomocy spadają o 20% ([[reducing-ai-misuse]]). To, co możesz sprawdzić, to proces — czy Twoje dziecko potrafi objaśnić krok, powtórzyć go na papierze i powiedzieć, czego było niepewne? Jeśli nie, zadanie wykonało narzędzie.

**Nie pozwól, by chatbot stał się powiernikiem.** Systemy sykofantyczne potwierdzają znacznie częściej niż ludzie — o 49% częściej w 11 modelach — a to potwierdzanie jest mechanizmem, który sprawia, że rozmowa z nimi wydaje się bezpieczna ([[ai-sycophancy]]). W dużym badaniu podłużnym użytkownicy sięgali po sykofantyczną SI po osobiste porady prawie tak często jak po bliskich przyjaciół i rodzinę, przy niższym zadowoleniu ze swoich rzeczywistych relacji ([[sycophantic-ai-social-interaction-2026]]). Dziecko, które przynosi cierpienie modelowi zawsze się zgadzającemu, nie jest wysłuchane; jest odzwierciedlane.

**Nie dawaj małemu dziecku generatywnego chatbota i nie nazywaj tego nadzorem tylko dlatego, że jesteś w pokoju.** Wskazówki według grup wiekowych są konkretne: działania z rusztowaniem, niegeneratywne, dla dzieci w wieku od 9 do 12 lat; nadzorowane korzystanie generatywne z rozumowaniem etycznym od 13 lat ([[ai-guidance-children-under-13]]). W przypadku najmłodszych dzieci ryzykiem jest przekonanie — dzieci w fazie przedoperacyjnej przyjmują wygenerowane treści jako prawdziwe, a systemy nie są rozwojowo skalibrowane w informacji zwrotnej, której udzielają. Wspólne korzystanie przez dorosłego oznacza pytanie, co właśnie zrobiła zabawka, a nie nadzorowanie zza drzwi ([[early-childhood-elementary-ai-education]]).

**Nie zakładaj, że narzędzie szkolne chroni dane Twojego dziecka, bo szkoła je wybrała.** Zapytaj, co jest przechowywane, jak długo, czy coś trenuje i kto jeszcze to widzi ([[privacy]]). Świadomość nie wynika z ekspozycji: miesiąc po lekcji, na której uczniowie oglądali własne zalogowane zachowanie rzutowane na żywo, 66% klasy siódmej nadal wybrało najmniej ochronne ustawienie chatbota ([[privacy]]).

**Nie używaj wyniku detektora, by oskarżyć swoje dziecko ani by poprzeć oskarżenie ze szkoły.** W najsilniejszym kontrolowanym teście detektory oznaczyły jako podejrzane 9–15% niezmienionego tekstu pisanego przez człowieka i wychwyciły mniej niż 4% przeróbek SI poddanych uczłowieczaniu; przy realistycznych wskaźnikach bazowych fałszywe trafienia przewyższają prawdziwe ([[ai-detection]]). Oznaczenie traktuj jako powód, by poprosić o historię wersji i rozmowę, a nie jako ustalenie.

**Nie wnioskuj, że zakaz narzędzia jest bezpieczną opcją.** Zbyt niskie zaufanie to błąd kalibracji z własnym kosztem — utraconą możliwością — a umiejętnością, która się liczy, jest dopasowana pewność, nie unikanie ([[trust-calibration]]). Użyteczny ruch rodzica jest ten sam, który badania wspierają w przypadku uczniów: wymagać kroku weryfikacji i uczynić go tak tanim, by zmęczone dziecko faktycznie go wykonało ([[verify-ai-output]]).

**Nie myl filtra treści z bezpieczeństwem.** Filtry dotyczą tego, co system powie; nie dotyczą tego, co interakcja robi osobie uczącej się — erozji ćwiczenia, sykofantycznej zgody czy nierównomiernych odmów ([[pedagogical-safety]]).

## Dla prowadzących zajęcia

**Nie poświadczaj wyniku jako umiejętności.** Dopracowana praca jest dowodem dopracowanej pracy. Jeśli ocenianie nie potrafi odróżnić tego, co student potrafi bez wsparcia, przestało mierzyć to, co poświadcza zaliczenie ([[assessment-validity]], [[authentic-assessment]]). Rozwiązaniem jest przeprojektowanie zadania, a nie surowszy kodeks honorowy.

**Nie używaj wyniku detektora jako dowodu niewłaściwego postępowania.** Najsilniejszy kontrolowany test oznacza jako podejrzane 38–80% lekkiej redakcji z użyciem SI zgodnej z wytycznymi i 9–15% niezmienionego tekstu pisanego przez człowieka, wychwytując mniej niż 4% przeróbek przepuszczonych przez usługę uczłowieczającą; 14 narzędzi komercyjnych w niezależnym benchmarku osiągnęło trafność poniżej 80%, a przy realistycznych wskaźnikach bazowych fałszywe trafienia przewyższają prawdziwe ([[ai-detection]], [[should-we-use-ai-detectors]]). Detektor może rozpocząć rozmowę; nie może jej zakończyć.

**Nie dodawaj SI do oceniania, którego nie przeprojektowałeś.** Dołożenie narzędzia do zadania zaprojektowanego pod pracę bez wsparcia daje dokładnie tę inflację ocen, która ukrywa stratę — prace domowe w górę, egzamin w dół. Przy każdym ocenianym zadaniu pytaj, co pokazałaby jego wersja bez wsparcia, i najpierw napraw zadanie ([[reducing-ai-misuse]]).

**Nie traktuj zaangażowania jako uczenia się.** Czas spędzony na zadaniu, zadowolenie, liczba próśb o pomoc i aktywność w czacie są łatwe do zmierzenia i wszystkie dają się pogodzić z całkowitym brakiem uczenia się. Zabezpieczenie, które zmniejszyło odsetek studentów przechodzących na błędne stanowisko SI z 42–60,5% do 5,7–8,2%, nie dało mierzalnego efektu uczenia się w obrębie sesji (β = 0,03, p = 0,18). Zachowanie pozostało; uczenie się nie ruszyło ([[student-engagement]]).

**Nie polegaj na ostrzeżeniu tam, gdzie interfejs mógłby ograniczać.** Tutor, który potrafi wygenerować gotową odpowiedź, wygeneruje ją pod presją terminu. Działa zabezpieczenie wbudowane w interakcję, a nie zdanie w sylabusie ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Nie wklejaj prac studentów, dokumentów IEP, dokumentacji dyscyplinarnej ani możliwych do zidentyfikowania wersji roboczych do narzędzia konsumenckiego.** Minimalizacja danych to decyzja projektowa, którą podejmujesz w imieniu studenta, niezależnie od tego, czy o niej myślałeś ([[privacy]]).

## Dla specjalistów ds. rozwoju nauczania i kadry

**Nie prowadź szkolenia z obsługi narzędzia i nie nazywaj tego kompetencjami w zakresie SI.** Sesja o formułowaniu poleceń uczy interfejsu produktu; [[ai-literacy]] to umiejętność oceny, kiedy narzędzia użyć, co ono robi i co sprawdzić. Nauczyciele, którzy opanują przyciski bez tej oceny, wychodzą z pewnością siebie i bez kalibracji ([[teacher-ai-competency]]).

**Nie prowadź jednorazowego doskonalenia zawodowego i nie oczekuj, że praktyka się zmieni.** Dowody dotyczące [[professional-training|uczenia się zawodowego]] są spójne co do czasu trwania i kontynuacji: pojedyncze wydarzenia zmieniają deklarowaną pewność siebie, rzadko zachowanie w klasie, a przyrost pewności może maskować brak zmiany ([[educational-development]]).

**Nie ignoruj systemu oceniania, który zostawiasz bez zmian.** Kadra przyjmie praktykę, której uczysz, tylko jeśli ocenianie, któremu podlega, nie karze za nią. Warsztat o projektowaniu zadań odpornych na SI, prowadzony obok niezmienionego systemu egzaminów, uczy kadrę, że szkolenie jest ozdobą.

**Nie pokazuj bezkrytycznego użycia, przed którym ostrzegasz.** Demonstrowanie narzędzia przez generowanie scenariusza lekcji na oczach kadry, bez kroku weryfikacji, uczy publiczność, że wynik jest produktem.

**Nie przyjmuj demonstracji dostawcy jako dowodu skuteczności.** Twierdzenie, które oceniasz, dotyczy uczenia się, a demonstracja pokazuje możliwości. Proś o wyniki bez wsparcia, wyniki w podgrupach i testy bezpieczeństwa w wielu turach ([[checking-whether-educational-ai-works]]).

## Dla twórców oprogramowania edukacyjnego

**Nie optymalizuj metryki, którą łatwo zalogować.** Długość sesji, liczba wiadomości i oceny zadowolenia poprawią się przy niemal każdej zmianie; uczenie się często nie. Ten sam zespół, który wdraża zabezpieczenie, może wdrożyć pulpit nagradzający wolumen interakcji, a oba będą wskazywać przeciwne kierunki ([[learning-analytics]], [[student-engagement]]).

**Nie wdrażaj detektora bez badania walidacyjnego względem konstruktu.** Model, który uzyskuje 0,98 F1 na zbiorze, z którego wyciekły dane, może spaść do 0,60 przy walidacji na niezależnych próbach, a detektor uśmiechu może wypaść *ujemnie* względem empatii ocenianej przez obserwatora, bo brakuje mu kontekstu, który ma ludzki oceniający ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publikuj protokół walidacji, nie tylko nagłówek.

**Nie wnioskuj o afekcie, uwadze ani „zaangażowaniu” z twarzy i ciał bez zgody i określonego celu.** Ryzyko w wielu turach to nie ryzyko w jednej turze: wskaźniki szkód w jednym przeglądzie wzrosły z około 18% w ocenach jednoturowych do około 78% w wieloturowych, więc system certyfikowany na izolowanych poleceniach jest certyfikowany dla interakcji, z którą studenci nie mają do czynienia ([[pedagogical-safety]], [[privacy]]).

**Nie ukrywaj przekazania kontroli.** Student, który nie potrafi rozpoznać, kiedy tutor generuje, a kiedy wyszukuje, ani kiedy w pętli jest człowiek, nie może skalibrować do niego zaufania, a obciążenie automatyzacją działa najwyraźniej wtedy, gdy system ma rację, a człowiek przestał sprawdzać ([[automation-bias]], [[trust-calibration]]).

**Nie projektuj pod benchmark i nie twierdź potem, że to klasa.** Wynik w benchmarku jest właściwością benchmarku. Raportuj warunki użycia, które testowałeś, populację i zadania; inaczej liczba zostanie odczytana jako obietnica dotycząca innego otoczenia ([[limitations-in-aied-research]]).

**Nie czyń narzędzia jedyną drogą do pomocy.** Jeśli dostęp studenta do informacji zwrotnej zależy od dostępności modelu, limitu albo licencji, kwestię równości rozstrzygnęło już postępowanie zakupowe ([[equity-in-ai-education]]).

## Dla administratorów edukacyjnych

**Nie kupuj twierdzeń o możliwościach jako dowodów wyników.** Dostawcy potrafią zademonstrować produkt; tylko ewaluacja potrafi zademonstrować uczenie się. Wymagaj wyników bez wsparcia, wyników w podgrupach, wskaźnika rezygnacji i planu na to, co się stanie, gdy pilotaż się skończy ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Nie wdrażaj nadzoru dlatego, że jest dostępny.** Systemy nadzoru egzaminacyjnego rejestrują obrazy twarzy, dokumenty tożsamości, skany pomieszczenia obejmujące obroty o 360 stopni i dźwięk z mikrofonu, a przegląd 80 badań wykazał, że tylko 25% spełniało próg raportowania dla pytań, na które instytucja musi odpowiedzieć przed wdrożeniem ([[privacy]], [[remote-proctoring]]). Koszt spada na studentów; baza dowodowa jest cieńsza, niż sugeruje umowa.

**Nie pisz polityki opartej wyłącznie na zakazach i nie nazywaj tego zarządzaniem.** Zakaz bez przeprojektowania oceniania, bez wsparcia i bez ścieżki odwoławczej przenosi zachowanie, zamiast mu zapobiegać, i karze studentów najmniej zdolnych do zakwestionowania fałszywego oskarżenia. Polityka musi obejmować także oceniającego: dwie z pięciu strategii pośredniego wstrzykiwania poleceń osadzonych w oddanej pracy podniosły ocenę niezaliczonego eseju ([[institutional-ai-policy]], [[course-ai-policy]]).

**Nie utożsamiaj przyjęcia z poprawą.** Pulpit raportujący użycie, zadowolenie i ukończenia będzie wyglądał na sukces, podczas gdy miara uczenia się pozostanie płaska. Zdecyduj z góry, który wynik skłoniłby Cię do rozwiązania umowy ([[ai-ed-evaluation]]).

**Nie pozwól, by dostępność pojawiała się dopiero jako wniosek o dostosowanie.** W przeglądzie 40 badań nad cyfrowymi technologiami wspomagającymi dla studentów neuroróżnorodnych 28 uzależniało udział od formalnej diagnozy — model z bramką diagnostyczną, który wyklucza każdego uczącego się z potrzebami i bez etykiety ([[accessibility]], [[universal-design-for-learning]]).

## Dla badaczy edukacji

**Nie pozwól, by samoopis dźwigał twierdzenie przyczynowe.** Pewność siebie, postrzegane uczenie się i zadowolenie są wynikami, ale nie tymi wynikami, które większość badań twierdzi, że mierzy. Literatura o [[empathy|empatii]] jest najjaśniejszym przypadkiem: dziedzina, która zamierza uczyć empatii, mierzy głównie komfort, a najsilniejszy przegląd 17 badań wykazał przyrosty pewności siebie znacznie częstsze niż dowody samej empatii ([[self-report-measures]], [[empathy]]).

**Nie cytuj efektu bez jego projektu.** W krytycznym przeglądzie 80 badań HCI nad myśleniem krytycznym z SI 42 nie miały grupy kontrolnej. Głośny efekt z 30 studentów na jednym kursie w jednym miejscu to typowa forma kruchego twierdzenia ([[limitations-in-aied-research]]).

**Nie raportuj heterogeniczności bez modelu.** Te same dane dają I² = 82,98% w modelu efektów stałych i 15,75% w modelu efektów losowych; cytowane I² bez modelu jest nieinterpretowalne ([[meta-analysis-systematic-review]]).

**Nie uogólniaj z jednego kontekstu i nie nazywaj tego ustaleniem.** Jeden kurs, jedna instytucja, jedna wersja modelu, jeden język. Zachowanie modeli zmienia się z każdym wydaniem, a detektory wytrenowane na jednej generacji tracą czułość na następnej ([[research-gaps-aied]], [[ai-detection]]).

**Nie traktuj korelacji między interakcją a wynikiem jako mechanizmu.** Wolumen poleceń nie mierzy odciążania poznawczego — klastry według wolumenu nie różniły się rozkładem pracy poznawczej, a ręcznie kodowany dialog nie wykazał odciążania w ogóle w 49,6% ze 125 dialogów ([[cognitive-offloading]]). Mierz pracę, a nie jej widoczny ślad.

**Nie publikuj akapitu o ograniczeniach, który można było napisać przed badaniem.** Wskaż konkretne zagrożenie, konkretną liczbę i twierdzenie, które ogranicza. To czyni ograniczenie użytecznym dla następnego czytelnika ([[interpreting-and-applying-aied-research]]).

## Dlaczego te punkty należą do siebie

Każdy punkt powyżej to przypadek zastępnika awansowanego do roli wyroku: esej zastępuje autora, wynik zastępuje przewinienie, uśmiech zastępuje empatię, demonstracja zastępuje uczenie się, polityka zastępuje zarządzanie. Poprawka jest zawsze tym samym ruchem — nazwać konstrukt, znaleźć miarę, która mogłaby wypaść w drugą stronę, i zbierać ją obok tej wygodnej.

To także dlatego te ostrzeżenia nie są listą rzeczy zawsze błędnych. Detektor może być powodem, by porozmawiać ze studentem. Chatbot może być użyteczną próbą. Pulpit może być bodźcem do zadania pytania. Szkoda jest w substytucji, nie w narzędziu.

## Co zrobić w tym tygodniu

- Wybierz jedno oceniane zadanie i zapisz, co pokazałoby ono z zamkniętym narzędziem. Jeśli odpowiedź brzmi „nic innego”, problemem jest zadanie.
- Dodaj jeden pomiar bez wsparcia do kursu, który obecnie raportuje tylko pracę wspieraną.
- Przeczytaj umowę swojej instytucji dotyczącą nadzoru egzaminacyjnego albo narzędzia SI pod kątem retencji, wtórnego wykorzystania i warunków naruszenia — i sprawdź, czy tekst zgody opisuje, co system faktycznie rejestruje.
- Poproś dostawcę o wyniki bez wsparcia i wyniki w podgrupach. Jeśli odpowiedzią jest demonstracja, masz odpowiedź.
- Na następnym spotkaniu z kadrą poświęć drugą połowę na przeprojektowanie oceniania, a nie na polecenia.

## Dokąd dalej

- [[addressing-common-misconceptions-ai-education]] — przekonania stojące za tymi praktykami i sposoby ich korygowania bez protekcjonalności.
- [[limitations-in-aied-research]] — czego baza dowodowa jeszcze nie potrafi uzasadnić.
- [[reducing-ai-misuse]] — strukturalne dźwignie wobec niewłaściwego korzystania i dlaczego biją apele.
- [[pedagogical-safety]] — co tutor może zrobić osobie uczącej się, przechodząc każdą kontrolę treści.
- [[should-we-use-ai-detectors]] — pełny materiał dowodowy o detektorach.
- [[checking-whether-educational-ai-works]] — jak ocenić twierdzenie, zanim je przyjmiesz.
