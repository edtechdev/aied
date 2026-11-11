---
title: "Czego edukatorzy powinni unikać w pracy z SI?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Większość wskazówek o SI w edukacji mówi, czego spróbować. Ta strona zbiera praktyki, których według dowodów należy zaprzestać, uporządkowane według roli, która musiałaby ich zaprzestać. Fałszywe przekonania omawiamy gdzie indziej: zajmuje się nimi [[addressing-common-misconceptions-ai-education|FAQ o nieporozumieniach]], a strona pojęcia [[misconceptions]] wyjaśnia, dlaczego się utrzymują. To, czego badania nie potrafią jeszcze powiedzieć, należy do [[limitations-in-aied-research|ograniczeń badań AIEd]]. Dalej chodzi o krok po przekonaniu: co ludzie robią, ile to kosztuje i co zrobić zamiast tego.

Trzy błędy powtarzają się we wszystkich rolach.

1. **Substytucja.** Narzędzie wykonuje myślenie, które miała wykonać osoba ucząca się, a wynik ocenia się tak, jakby wykonała je ona. Oddany esej jest zapisem tego, co potrafi model, a nie tego, co potrafi student.
2. **Niezasłużony dowód.** Sygnał, który łatwo zebrać, jak pewność siebie, płynność, zaangażowanie czy wskaźnik ukończenia, traktuje się jako dowód czegoś, czego nie może pokazać. Pulpit może zaraportować czterdzieści minut sesji z tutorem; nie może zaraportować, czy ktokolwiek nauczył się rozwiązywać równanie kwadratowe.
3. **Struktura pozostawiona apelom.** Od ostrzeżenia, zdania w polityce albo szkolenia oczekuje się pracy, którą musi wykonać projekt interfejsu, projekt oceniania lub zarządzanie. Sylabus mówi, żeby używać SI odpowiedzialnie, a tutor nadal podaje gotową odpowiedź już po pierwszym poleceniu.

## W skrócie

**1.** Nigdy nie oceniaj, nie cytuj ani nie promuj wyniku jako dowodu umiejętności, która go wytworzyła.

**2.** Za każdym razem zbieraj pomiar bez wsparcia obok pomiaru wspieranego.

**3.** Traktuj płynność, pewność siebie i zaangażowanie jako cechy korzystania, nie jako uczenie się.

**4.** Umieść zabezpieczenie w przebiegu pracy, a nie w ostrzeżeniu.

**5.** Zakładaj, że wszelkie dane, które narzędzie widzi, zostaną zachowane, połączone i ujawnione w wyniku naruszenia.

**6.** Jeśli twierdzeniu towarzyszy demonstracja, ale nie porównanie, to marketing.

## Dla prowadzących zajęcia

**Nie poświadczaj wyniku jako umiejętności.** Dopracowana praca jest dowodem dopracowanej pracy. Jeśli student oddaje przegląd literatury, którego źródeł nie możesz skonfrontować z niczym, czego uczył kurs, a ocenianie nie potrafi odróżnić, co ten student potrafi bez wsparcia, ocenianie przestało mierzyć to, co poświadcza zaliczenie ([[assessment-validity]], [[authentic-assessment]]). Rozwiązaniem jest przeprojektowanie zadania; surowszy kodeks honorowy tego nie zrobi.

**Nie używaj wyniku detektora jako dowodu niewłaściwego postępowania.** W kontrolowanym badaniu 642 opublikowanych streszczeń detektory oznaczyły 38–80% lekkiej redakcji z użyciem SI zgodnej z wytycznymi i 9–15% niezmodyfikowanego tekstu pisanego przez człowieka, wychwytując mniej niż 4% przeróbek przepuszczonych przez usługę uczłowieczającą ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Niezależny benchmark wykazał, że żadne z 14 narzędzi komercyjnych nie osiągnęło 80% trafności, a proste parafrazowanie zmniejsza nawet ten wynik o połowę ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Przy realistycznych wskaźnikach bazowych fałszywe trafienia przewyższają prawdziwe ([[should-we-use-ai-detectors]]). Detektor może rozpocząć rozmowę; nie może jej zakończyć.

**Nie dodawaj SI do oceniania, którego nie przeprojektowałeś.** Dołożenie narzędzia do zadania zaprojektowanego pod pracę bez wsparcia daje dokładnie tę inflację ocen, która ukrywa stratę: prace domowe w górę, egzamin w dół. Przy każdym ocenianym zadaniu pytaj, co pokazałaby wersja bez wsparcia, i najpierw napraw zadanie ([[reducing-ai-misuse]]). Jeśli domowy zestaw zadań i kartkówka na zajęciach sprawdzają tę samą umiejętność, tylko jedno z nich mierzy studenta.

**Nie traktuj zaangażowania jako uczenia się.** Czas spędzony na zadaniu, zadowolenie, liczba próśb o pomoc i aktywność w czacie łatwo zmierzyć i wszystkie dają się pogodzić z całkowitym brakiem uczenia się. W eksperymencie 3 × 2 ze 186 uczestnikami oceniającymi sprawy cywilne na platformie wspieranej przez LLM zabezpieczenie, które zmniejszyło przechodzenie na błędne stanowisko SI z 42–60,5% do 5,7–8,2%, nie dało mierzalnego efektu uczenia się w obrębie sesji (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Zachowanie się zmieniło; miara uczenia się nie ([[student-engagement]]).

**Nie polegaj na ostrzeżeniu tam, gdzie interfejs mógłby ograniczać.** Tutor, który potrafi wygenerować gotową odpowiedź, wygeneruje ją pod presją terminu, cokolwiek mówi sylabus. Działa zabezpieczenie wbudowane w interakcję ([[reducing-ai-misuse]], [[pedagogical-safety]]). Wstrzymanie ostatecznej odpowiedzi przez pierwsze dwie próby jest decyzją projektową; proszenie studentów, żeby o nią nie pytali, jest prośbą.

**Nie wklejaj prac studentów, IEP, dokumentacji dyscyplinarnej ani możliwych do zidentyfikowania wersji roboczych do narzędzia konsumenckiego.** Minimalizacja danych jest decyzją projektową, którą podejmujesz w imieniu studenta, niezależnie od tego, czy o niej myślałeś ([[privacy]]). Darmowe konto chatbota, które odpowiada na pytanie o plan behawioralny studenta, jest także kopią tego planu na cudzym serwerze.

## Dla osób uczących się

**Nie oddawaj tej części, którą masz ćwiczyć.** Załóżmy, że zadaniem jest esej na pięć akapitów: wklejasz polecenie do chatbota, bierzesz zwróconą wersję roboczą i oddajesz ją. To, co oddajesz, jest zapisem tego, co potrafi model. Pytanie brzmi, która praca poznawcza się przenosi, a nie ile SI używasz. Zlecanie prac domowych na zewnątrz podnosi oceny za prace domowe, obniżając oceny z egzaminu bez pomocy: wśród 26 811 uczniów szkół średnich obserwowanych przez 30 miesięcy oceny za prace domowe wzrosły o 18%, a oceny z egzaminu spadły o 20% w ciągu sześciu miesięcy ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Ćwiczenie, które buduje wiedzę możliwą do przywołania, trafiło do narzędzia ([[reducing-ai-misuse]]). Jeśli ćwiczenie jest celem, narzędzie nie może wykonać ćwiczenia.

**Nie czytaj płynności jako trafności.** Płynny tekst jest wynikiem [[llm|modelu językowego]] niezależnie od tego, czy treść jest prawdziwa, a mechanizm, który czyni go przekonującym, jest tym samym, który czyni go błędnym ([[hallucination-risk]]). Sprawdzaj konkretne twierdzenie, a nie ton akapitu. Ten nawyk rzadko pojawia się sam: w panelu pasywnego śledzenia 900 dorosłych w USA, którym dano streszczenie wygenerowane przez SI, czytelnicy sięgnęli do źródła cytowanego w nim w 1% wizyt ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). Jeśli zadanie wymaga trzech źródeł, otwórz wszystkie trzy.

**Nie przyjmuj zgody jako informacji zwrotnej.** Modele potwierdzają znacznie częściej niż ludzie: w 11 modelach odpowiedzi SI potwierdzały użytkowników o 49% częściej niż odpowiedzi ludzi, a ten nadmiar sprawia, że interakcja wydaje się wspierająca ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Tutor, który nigdy się z Tobą nie zgadza, usunął sygnał korekcyjny, po który przyszedłeś ([[ai-sycophancy]]). Proś o zarzut, nie o aprobatę: „Co jest nie tak z tym argumentem i co powiedziałby sceptyk?”

**Nie zamieniaj pytania na odpowiedź, gdy utkniesz.** Produktywne zmaganie, które pomijasz, jest uczeniem się. Szukanie pomocy, które wydobywa odpowiedź, to inne zachowanie niż szukanie pomocy, które wydobywa podpowiedź ([[help-seeking]], [[desirable-difficulties]]). Korzystaj z narzędzi, które wstrzymują gotową odpowiedź, i proś o następny krok, a nie o rozwiązanie.

**Nie wklejaj danych osobowych, zdrowotnych ani rodzinnych do narzędzia, aby uzyskać lepszą odpowiedź.** Narzędzie nie ma obowiązku o nich zapomnieć, a koszt prywatności nie jest widoczny w jakości odpowiedzi ([[privacy]]). Lepsze polecenie nie wymaga Twojej diagnozy, adresu ani imion rodziny.

## Dla rodziców i rodzin

**Nie odrabiaj pracy domowej z narzędziem ani nie pozwól, by robiono ją obok Ciebie.** Wzorzec w danych to inflacja ocen z ukrytym kosztem: w tym samym 30-miesięcznym panelu oceny za prace domowe wzrosły o 18%, a oceny z egzaminu bez pomocy spadły o 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Dziecko, które przynosi do domu bezbłędną pracę domową i oblany sprawdzian z rozdziału, pokazuje Ci dokładnie tę lukę. Sprawdzić możesz proces. Czy Twoje dziecko potrafi objaśnić krok, powtórzyć jedno zadanie na papierze i powiedzieć, czego nie było pewne? Jeśli nie, zadanie wykonało narzędzie.

**Nie pozwól, by chatbot stał się powiernikiem.** Systemy sykofantyczne potwierdzają znacznie częściej niż ludzie, o 49% częściej w 11 modelach, i to potwierdzanie sprawia, że rozmowa z nimi wydaje się bezpieczna ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). W dużym badaniu podłużnym użytkownicy sięgali po sykofantyczną SI po osobiste porady prawie tak często jak po bliskich przyjaciół i rodzinę, przy niższym zadowoleniu ze swoich rzeczywistych relacji ([[sycophantic-ai-social-interaction-2026]]). Dziecko, które przynosi cierpienie modelowi zawsze się zgadzającemu, nie jest wysłuchane. Jest odzwierciedlane. Jeśli Twoje dziecko rozmawia z chatbotem o przyjaźni albo stracie, to moment, by zapytać, komu jeszcze o tym powiedziało.

**Nie dawaj małemu dziecku generatywnego chatbota i nie nazywaj tego nadzorem tylko dlatego, że jesteś w pokoju.** Wskazówki według wieku są konkretne: działania z rusztowaniem, niegeneratywne, dla wieku od 9 do 12 lat, nadzorowane korzystanie generatywne z rozumowaniem etycznym od 13 lat ([[ai-guidance-children-under-13]]). W przypadku najmłodszych dzieci ryzyko dotyczy przekonania. Dzieci w fazie przedoperacyjnej przyjmują wygenerowane treści jako prawdziwe, a systemy nie są rozwojowo skalibrowane w informacji zwrotnej, której udzielają. Wspólne korzystanie przez dorosłego oznacza siedzenie obok dziecka i pytanie, co właśnie zrobiła zabawka, a nie obserwowanie zza drzwi ([[early-childhood-elementary-ai-education]]).

**Nie zakładaj, że narzędzie szkolne chroni dane Twojego dziecka, bo szkoła je wybrała.** Zapytaj, co jest przechowywane, jak długo, czy coś trenuje i kto jeszcze to widzi ([[privacy]]). Świadomość nie wynika z kontaktu: miesiąc po lekcji, na której klasa siódma oglądała własne zalogowane zachowanie rzutowane na żywo, 66% z 47 uczniów nadal wybierało najmniej ochronne ustawienie chatbota ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Zadaj szkole pytania na piśmie i poproś o odpowiedzi na piśmie.

**Nie używaj wyniku detektora, by oskarżyć swoje dziecko ani by poprzeć oskarżenie ze szkoły.** W kontrolowanym badaniu 642 opublikowanych streszczeń detektory oznaczyły 9–15% niezmodyfikowanego tekstu pisanego przez człowieka i wychwyciły mniej niż 4% uczłowieczonych przeróbek SI ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Przy realistycznych wskaźnikach bazowych fałszywe trafienia przewyższają prawdziwe ([[ai-detection]]). Oznaczenie traktuj jako powód, by poprosić o historię wersji i rozmowę, a nie jako ustalenie.

**Nie wnioskuj, że zakaz narzędzia jest bezpieczną opcją.** Zbyt niskie zaufanie to błąd kalibracji z własnym kosztem, utraconą możliwością, a umiejętnością, która się liczy, jest dopasowana pewność, nie unikanie ([[trust-calibration]]). Użyteczny ruch rodzica jest ten sam, który badania wspierają w przypadku uczniów: wymagać kroku weryfikacji i uczynić go tak tanim, by zmęczone dziecko faktycznie go wykonało ([[verify-ai-output]]). Poproszenie o źródło, którego użył chatbot, kosztuje minutę; zakazanie chatbota kosztuje ćwiczenie.

**Nie myl filtra treści z bezpieczeństwem.** Filtry dotyczą tego, co system powie. Nie dotyczą tego, co interakcja robi osobie uczącej się: erozji ćwiczenia, sykofantycznej zgody czy nierównomiernych odmów ([[pedagogical-safety]]).

## Dla specjalistów ds. rozwoju nauczania i kadry

**Nie prowadź szkolenia z obsługi narzędzia i nie nazywaj tego kompetencjami w zakresie SI.** Sesja o [[prompt-engineering|formułowaniu poleceń]] uczy interfejsu produktu. [[ai-literacy|Kompetencje w zakresie SI]] to umiejętność oceny, kiedy narzędzia użyć, co ono robi i co sprawdzić. Nauczyciele, którzy opanują przyciski bez tej oceny, wychodzą z pewnością siebie i bez kalibracji ([[teacher-ai-competency]]). Warsztat, który kończy się tym, że wszyscy potrafią wygenerować scenariusz lekcji, a nikt nie potrafi powiedzieć, kiedy nie należy go używać, nauczył interfejsu.

**Nie prowadź jednorazowego doskonalenia zawodowego i nie oczekuj, że praktyka się zmieni.** Dowody dotyczące [[professional-training|uczenia się zawodowego]] są spójne co do czasu trwania i kontynuacji: pojedyncze wydarzenia zmieniają deklarowaną pewność siebie, rzadko zachowanie w klasie, a przyrost pewności może maskować brak zmiany ([[educational-development]]). Dwugodzinna sesja w sierpniu bez kontynuacji w październiku jest interwencją w pewność siebie.

**Nie ignoruj systemu oceniania, który zostawiasz bez zmian.** Kadra przyjmie praktykę, której uczysz, tylko jeśli ocenianie, któremu podlega, nie karze za nią. Warsztat o projektowaniu zadań odpornych na SI, prowadzony obok niezmienionego reżimu egzaminów, uczy kadrę, że szkolenie jest ozdobą.

**Nie pokazuj bezkrytycznego użycia, przed którym ostrzegasz.** Demonstrowanie narzędzia przez generowanie scenariusza lekcji na oczach kadry, bez kroku weryfikacji, uczy publiczność, że wynik jest produktem. Wygeneruj go na ich oczach, a potem zaznacz dwa twierdzenia, które wymagają sprawdzenia.

**Nie przyjmuj demonstracji dostawcy jako dowodu skuteczności.** Twierdzenie, które oceniasz, dotyczy uczenia się, a demonstracja pokazuje możliwości. Proś o wyniki bez wsparcia, wyniki w podgrupach i testy bezpieczeństwa w wielu turach ([[checking-whether-educational-ai-works]]).

## Dla twórców oprogramowania edukacyjnego

**Nie optymalizuj metryki, którą łatwo zalogować.** Długość sesji, liczba wiadomości i oceny zadowolenia poprawią się przy niemal każdej zmianie; uczenie się często nie. Ten sam zespół, który wdraża zabezpieczenie, może wdrożyć pulpit nagradzający wolumen interakcji, a oba będą wskazywać przeciwne kierunki ([[learning-analytics]], [[student-engagement]]). Jeśli Twoją metryką sukcesu jest liczba wiadomości na sesję, zbudowałeś produkt, który nagradza studentów za pozostanie w czacie.

**Nie wdrażaj detektora bez badania walidacyjnego względem konstruktu.** Benchmark piętnastu modeli EEG osiągnął 0,9853 F1 przy stratyfikowanej walidacji krzyżowej; niezależna od próby walidacja Group K-Fold, która respektuje granice prób, obniżyła szczyt do 0,6038 wobec poziomu losowego 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). Detektor uśmiechu może wypaść *ujemnie* względem empatii ocenianej przez obserwatora, bo brakuje mu kontekstu, który ma ludzki oceniający ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publikuj protokół walidacji razem z nagłówkową liczbą.

**Nie wnioskuj o afekcie, uwadze ani „zaangażowaniu” z twarzy i ciał bez zgody i określonego celu.** Ryzyko w wielu turach to nie ryzyko w jednej turze: w jednym przeglądzie bezpieczeństwa pedagogicznego odsetek awarii wzrósł z 17,7% w ocenach jednoturowych do 77,8% w wieloturowych ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). System certyfikowany na izolowanych poleceniach jest certyfikowany dla interakcji, której studenci nie prowadzą ([[pedagogical-safety]], [[privacy]]).

**Nie ukrywaj przekazania kontroli.** Student, który nie potrafi rozpoznać, kiedy tutor generuje, a kiedy wyszukuje, ani kiedy w pętli jest człowiek, nie może skalibrować do niego zaufania. [[automation-bias|Obciążenie automatyzacją]] działa najczyściej wtedy, gdy system ma rację, a człowiek przestał sprawdzać ([[trust-calibration]]). Powiedz w interfejsie, kiedy człowiek przeczyta pracę.

**Nie projektuj pod benchmark i nie twierdź potem, że to klasa.** Wynik w benchmarku jest właściwością benchmarku. Raportuj warunki użycia, które testowałeś, populację i zadania; inaczej liczba zostanie odczytana jako obietnica dotycząca innego otoczenia ([[limitations-in-aied-research]]).

**Nie czyń narzędzia jedyną drogą do pomocy.** Jeśli dostęp studenta do [[feedback|informacji zwrotnej]] zależy od dostępności modelu, limitu albo licencji, kwestię równości rozstrzygnęło już postępowanie zakupowe ([[equity-in-ai-education]]).

## Dla administratorów edukacyjnych

**Nie kupuj twierdzeń o możliwościach jako dowodów wyników.** Dostawcy potrafią zademonstrować produkt; tylko ewaluacja potrafi zademonstrować uczenie się. Wymagaj wyników bez wsparcia, wyników w podgrupach, wskaźnika rezygnacji i planu na to, co się stanie, gdy pilotaż się skończy ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Demonstracja pokazuje tutora rozwiązującego zadanie; nie pokazuje studenta rozwiązującego następne.

**Nie wdrażaj nadzoru dlatego, że jest dostępny.** Systemy nadzoru egzaminacyjnego rejestrują obrazy twarzy, dokumenty tożsamości, skany pomieszczenia obejmujące obroty o 360 stopni i dźwięk z mikrofonu. Przegląd 80 badań wykazał, że tylko 25% w ogóle poruszało kwestie etyczne, 35% nie ujawniło swojego zbioru danych, a 30% nie udało się odtworzyć ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). Koszt spada na studentów, a baza dowodowa jest cieńsza, niż sugeruje umowa ([[privacy]], [[remote-proctoring]]).

**Nie pisz polityki opartej wyłącznie na zakazach i nie nazywaj tego zarządzaniem.** Zakaz bez przeprojektowania oceniania, bez wsparcia i bez ścieżki odwoławczej przenosi zachowanie, zamiast mu zapobiegać, i karze studentów najmniej zdolnych do zakwestionowania fałszywego oskarżenia. [[governance|Polityka]] musi obejmować także oceniającego: w teście penetracyjnym codziennego procesu oceniania dwie z pięciu strategii wstrzykiwania poleceń ukrytych w oddanej pracy przeniosły niezaliczony esej na zaliczenie ze 100% i 94% skuteczności w różnych typach plików ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Polityka, która ogranicza studentów, ale nie proces oceniania, jest połową polityki.

**Nie utożsamiaj przyjęcia z poprawą.** Pulpit raportujący użycie, zadowolenie i ukończenia będzie wyglądał na sukces, podczas gdy miara uczenia się pozostanie płaska. Zdecyduj z góry, który wynik skłoniłby Cię do rozwiązania umowy ([[ai-ed-evaluation]]). Zapisz tę liczbę przed rozpoczęciem pilotażu.

**Nie pozwól, by dostępność pojawiała się dopiero jako wniosek o dostosowanie.** W przeglądzie 40 badań nad cyfrowymi technologiami wspomagającymi dla [[neurodiversity|studentów neuroróżnorodnych]] 28 uzależniało udział od formalnej diagnozy. Ten model z bramką diagnostyczną wyklucza każdego uczącego się z potrzebami i bez etykiety ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Dla badaczy edukacji

**Nie pozwól, by samoopis dźwigał twierdzenie przyczynowe.** Pewność siebie, postrzegane uczenie się i zadowolenie są wynikami, ale nie tymi wynikami, które większość badań twierdzi, że mierzy. Literatura o [[empathy|empatii]] jest najjaśniejszym przypadkiem: dziedzina, która zamierza uczyć empatii, mierzy głównie komfort, a przegląd 17 badań wykazał przyrosty pewności siebie znacznie częstsze niż dowody samej empatii ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Nie cytuj efektu bez jego projektu.** W krytycznym przeglądzie 80 badań HCI nad [[critical-thinking|myśleniem krytycznym]] z SI 42 (52%) nie miały grupy kontrolnej ([[critical-review-critical-thinking-hci-research-ai-2026]]). Głośny efekt z 30 studentów na jednym kursie w jednym miejscu to typowa forma kruchego twierdzenia ([[limitations-in-aied-research]]).

**Nie raportuj heterogeniczności bez modelu.** Te same dane dają I² = 82,98% w modelu efektów stałych i I² = 15,75% w modelu efektów losowych ([[ai-supported-instruction-stem-meta-analysis-2026]]). Cytowane I² bez modelu jest nieinterpretowalne ([[meta-analysis-systematic-review]]).

**Nie uogólniaj z jednego kontekstu i nie nazywaj tego ustaleniem.** Jeden kurs, jedna instytucja, jedna wersja modelu, jeden język. Zachowanie modeli zmienia się z każdym wydaniem, a detektory wytrenowane na jednej generacji tracą czułość na następnej ([[research-gaps-aied]], [[ai-detection]]).

**Nie traktuj korelacji między interakcją a wynikiem jako mechanizmu.** Wolumen poleceń nie mierzy odciążania poznawczego. Klastry według wolumenu nie różniły się rozkładem pracy poznawczej, a ręcznie kodowany dialog nie wykazał odciążania w ogóle w 49,6% ze 125 dialogów ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Mierz samą pracę.

**Nie publikuj akapitu o ograniczeniach, który można było napisać przed badaniem.** Wskaż konkretne zagrożenie, konkretną liczbę i twierdzenie, które ogranicza. To czyni ograniczenie użytecznym dla następnego czytelnika ([[interpreting-and-applying-aied-research]]).

## Dlaczego te punkty należą do siebie

Każdy punkt powyżej podnosi zastępnik do rangi wyroku. Esej zastępuje autora, wynik zastępuje przewinienie, uśmiech zastępuje empatię, demonstracja zastępuje uczenie się. Poprawka jest za każdym razem ta sama: nazwij konstrukt, znajdź miarę, która mogłaby wypaść w drugą stronę, i zbieraj ją obok tej wygodnej.

Żadne z tych ostrzeżeń nie znaczy, że narzędzie jest zawsze złe. Detektor może być powodem, by porozmawiać ze studentem. Chatbot może być użyteczną próbą. Pulpit może być bodźcem do zadania pytania. Szkoda bierze się z substytucji.

## Co zrobić w tym tygodniu

- Wybierz jedno oceniane zadanie i zapisz, co pokazałoby z zamkniętym narzędziem. Jeśli odpowiedź brzmi „nic innego”, problemem jest zadanie.
- Dodaj jeden pomiar bez wsparcia do kursu, który obecnie raportuje tylko pracę wspieraną.
- Przeczytaj umowę swojej instytucji dotyczącą nadzoru egzaminacyjnego albo narzędzia SI pod kątem retencji, wtórnego wykorzystania i warunków naruszenia, i sprawdź, czy tekst zgody opisuje, co system faktycznie rejestruje.
- Poproś dostawcę o wyniki bez wsparcia i wyniki w podgrupach. Jeśli odpowiedzią jest demonstracja, masz odpowiedź.
- Na następnym spotkaniu z kadrą poświęć drugą połowę na przeprojektowanie oceniania, a nie na polecenia.

## Dokąd dalej

- [[addressing-common-misconceptions-ai-education]]: przekonania stojące za tymi praktykami i sposoby ich korygowania bez protekcjonalności.
- [[limitations-in-aied-research]]: czego baza dowodowa jeszcze nie potrafi uzasadnić.
- [[reducing-ai-misuse]]: strukturalne dźwignie wobec niewłaściwego korzystania i dlaczego biją apele.
- [[pedagogical-safety]]: co tutor może zrobić osobie uczącej się, przechodząc każdą kontrolę treści.
- [[should-we-use-ai-detectors]]: pełny materiał dowodowy o detektorach.
- [[checking-whether-educational-ai-works]]: jak ocenić twierdzenie, zanim je przyjmiesz.
