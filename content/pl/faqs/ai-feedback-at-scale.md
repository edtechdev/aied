---
title: "Jak SI może pomóc w udzielaniu lepszej informacji zwrotnej na dużą skalę?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
updated: "2026-10-29T15:22:01-04:00"
translation_of: faqs/ai-feedback-at-scale
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

To szósty tydzień. Na biurku leży stos szkiców, rubryka, w którą wierzymy, i rosnące podejrzenie, że jedna trzecia komentarzy jest tylko przeglądana i zapominana. Współpracownik wspomina, że narzędzie komentuje teraz każdy szkic w ciągu godziny. Zebranie katedry wymaga odpowiedzi: to ulepszenie czy szybszy sposób wytwarzania tekstu, którego nikt nie czyta?

Krótka odpowiedź do przekazania współpracownikowi: informacja zwrotna od SI zasługuje na swoje miejsce ze względu na pokrycie, terminowość i spójność, w wąskim pasmie. Praca językowa w skali korekty oraz komentarze pierwszego przejścia prowadzone według rubryki są warte automatyzacji. Zasięg jest tą tanią częścią. W eksperymencie z randomizacją klastrową z 1 176 studentami pierwszego roku studiów licencjackich projekty refleksyjny i hybrydowy pobiły bezpośrednią krytykę SI pod względem odroczonego [[transfer-of-learning|transferu]] bez SI. W randomizowanym eksperymencie z esejami z 70 studentami lepiej oceniana informacja zwrotna od SI nie dała lepszych poprawek niż informacja od doświadczonego nauczyciela. O wyniku decyduje to, co student robi z komentarzem, a [[feedback-literacy|kompetencje w zakresie informacji zwrotnej]] oddzielają studentów, którzy zyskują, od tych, którzy kopiują.

## W skrócie

**1.** Ustal, co liczy się jako sukces, zanim cokolwiek przetestujesz: jakość poprawek i odroczone wykonanie bez pomocy, a nie płynność komentarzy.

**2.** Posortuj własne komentarze na poprawki językowe i rozstrzygnięcia wymagające osądu. Tylko pierwsza kategoria jest kandydatem do automatyzacji.

**3.** Rozłóż źródła w etapy. Najpierw samoocena, potem informacja zwrotna rówieśnicza, na końcu krytyka SI. Dwa źródła postawione obok siebie dają bierne przejmowanie.

**4.** Przekaż modelowi rubrykę i każ mu rozumować krok po kroku. Samo polecenie daje wynik ogólny.

**5.** Ostateczną wiadomość, ton i wszystko, co staje się zapisem, zostaw człowiekowi.

**6.** Zaplanuj godziny na usuwanie i kalibrację i porównaj je z godzinami, które uwolniłeś.

## Ustalenie, co liczy się jako sukces, zanim cokolwiek się przetestuje

Kuszącą metryką jest jakość tego, co pisze model. To także metryka, która wprowadza w błąd.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia i wsp. (2026)]] losowo przydzielili 70 studentów piszących eseje argumentacyjne po persku do trzech grup. Promptowanie z łańcuchem myśli dało istotnie wyżej ocenianą informację zwrotną (M = 12,90) niż promptowanie zerostrzałowe (M = 11,25, p = 0,01) i niż doświadczony nauczyciel (M = 11,20, p = 0,008). Grupa z łańcuchem myśli nie poprawiła esejów istotnie bardziej niż grupa z informacją zwrotną od nauczyciela, która osiągnęła porównywalne przyrosty. Lepsze komentarze, te same poprawki. Jeśli kryterium sukcesu jest jakość komentarzy, to badanie czyta się jako sukces. Jeśli kryterium jest to, co zmieniło się w eseju, nie.

Dwa inne sygnały schlebią pilotażowi, który idzie źle, więc ustal je z góry. Jednym jest satysfakcja studentów. W pilotażu na całym uniwersytecie Deakin, opisanym przez [[tubino-adachi-ai-automated-feedback-literacy|Tubino i Adachiego (2022)]], dodatnie średnie oceny współistniały z błędami zgłaszanymi przez studentów, więc ankieta z uśmiechniętymi twarzami nie jest dowodem trafności. Drugim jest użycie. Narzędzie w Deakin było opcjonalne, a użycie wynosiło średnio około 13% studentów studiów licencjackich i 12% studentów studiów magisterskich, mimo że dostęp miało prawie 4 000 osób. Korzystali z niego częściej studenci proaktywni i osiągający wysokie wyniki. Oto co daje samo udostępnienie narzędzia.

Miara wyniku, która się broni, to jakość poprawek plus odroczone wykonanie bez SI. Wielokrotne oddania tego samego dnia są użytecznym śladem tego, czy student w ogóle się zaangażował. Nie są dowodem, że cokolwiek zostało poznane.

## Posortowanie własnych komentarzy przed automatyzacją

Weź ostatni zestaw swoich komentarzy i podziel go na dwie części: poprawki w zdaniach i rozstrzygnięcia o myśleniu. Ten podział mówi, co automatyzować, i jest węższy, niż sugerują dostawcy.

Pilotaż w Deakin prowadzono w 2021 roku z użyciem narzędzia automatycznej informacji zwrotnej FeedbackFruits w 29 jednostkach kursowych i wśród prawie 4 000 studentów. Działa ono na mikroskopijnych cechach tekstu: długości zdań, interpunkcji, gramatyce, strukturze tekstu. To wspiera etap korekty, w którym nauczyciel ustala parametry, student używa narzędzia samodzielnie, a informacja zwrotna przychodzi na tyle wcześnie, by dało się na nią zareagować. Skaluje się podział pracy, a nie model.

Komentarze wymagające osądu to miejsce, w którym mieszkają tryby awarii. [[learner-centered-feedback-ai|Aldino i wsp. (2026)]] zebrali problemy po stronie nauczycieli od 21 osób ze szkolnictwa wyższego: niespójny ton (n = 7), potencjalne dezinformacje (n = 5) i problemy z zaufaniem (n = 5). Ich wysiłek poprawkowy szedł w usuwanie przesadnych pochwał i ogólnych sugestii, a nie w dodawanie treści. Ta lista to zakres pracy przeglądowej i tam idą godziny.

## Rozłożenie źródeł w etapy zamiast nakładania ich

Najmocniejszy dowód projektowy pochodzi z wieloośrodkowego, longitudinalnego eksperymentu terenowego z randomizacją klastrową: 1 176 studentów pierwszego roku studiów licencjackich w 48 sekcjach na 4 uniwersytetach i w 3 dziedzinach [[stem-education|nauki]], losowo przydzielonych na poziomie sekcji do warunków: tylko rówieśnicy, bezpośrednia GenAI, refleksyjna GenAI i hybrydowy ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Warunek refleksyjny wymagał samooceny przed krytyką SI. Warunek hybrydowy prowadził samoocenę, potem informację zwrotną rówieśniczą, a potem krytykę GenAI. Warunek hybrydowy dał największe przyrosty jakości argumentacji i najwyraźniejszą przewagę w uczeniu się pojęć. Warunki refleksyjny i hybrydowy dały zarówno silniejsze przejmowanie informacji zwrotnej, jak i więcej [[self-regulated-learning|samoregulowanego uczenia się]] niż bezpośrednia GenAI, i oba pobiły ją w odroczonym transferze bez SI. Bezpośrednia GenAI podniosła natychmiastową jakość argumentacji ponad informację zwrotną rówieśniczą, i to jest jej przewaga, ale zrobiła to przy słabszym transferze.

Mechanizm wyjaśnia, dlaczego kolejność ma większe znaczenie niż narzędzie. Bezpośrednia krytyka zaprasza do biernego przejmowania: student czyta werdykt i go stosuje. Projekty refleksyjny i hybrydowy zmuszają studenta do zinterpretowania komentarza, porównania go z kryteriami, oceny jego trafności i dopiero potem do poprawki. Wartość edukacyjna zależy mniej od dostępu do SI niż od tego, czy środowisko informacji zwrotnej zachowuje [[agency|sprawczość uczącego się]] i [[evaluative-judgment|osąd wartościujący]] w trakcie poprawiania.

Informacja zwrotna rówieśnicza ma własne miejsce w tej sekwencji. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen i Yan (2026)]] prowadzili dwie równoległe klasy języka angielskiego (N = 118 studentów pierwszego roku studiów licencjackich w Chinach; GenAI n = 56, rówieśnicy n = 62) przez trzy cykle samooceny w ciągu jednego semestru. Rusztowanie GenAI poprawiło kompetencje w zakresie informacji zwrotnej nieznacznie, ale istotnie, w porównaniu z recenzją rówieśniczą (ANCOVA p = 0,049, ηp² = 0,03). Studenci z GenAI dopracowywali prompty iteracyjnie i weryfikowali lub kwestionowali niedokładne wyniki. Studenci z grupy rówieśniczej wybierali źródła według wygody społecznej, a ich osąd wartościujący był zniekształcany przez stronniczość przyjaźni. Recenzja rówieśnicza zachowała odrębną wartość dla świadomości odbiorcy, dlatego autorzy proponują wieloetapowe projekty z anonimową informacją zwrotną rówieśniczą, a nie zastąpienie jej.

Przewaga Gu i wsp. była niewielka i autorzy czytają ją jako realną, ale nie przełomową samą w sobie. Pracę wspierającą wykonało rusztowanie nauczyciela, wytyczne do promptów i karty pracy.

## Wręczenie modelowi rubryki, a potem wymuszenie widocznych kroków

Generowanie według rubryki to ta część, którą można automatyzować.

Przyrost jakości u Farrokhnii i wsp. pochodził z promptu z łańcuchem myśli, który przeprowadzał model przez ocenę krok po kroku według rubryki argumentacji, a nie z samego polecenia udzielenia informacji zwrotnej. Gu i wsp. dali swojej grupie GenAI ChatGPT-4o z wytrenowanymi wcześniej rubrykami i wytycznymi do promptów, co pozwoliło sprawdzać wynik wobec podanych kryteriów. W obu przypadkach prompt jest miejscem, w którym kryteria wchodzą do systemu, a ślad rozumowania pozwala zobaczyć, czy model je zastosował.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson i Yan (2025)]] czynią jakość promptu zawiasem całego procesu. Niejasne prompty dają wynik ogólny i bezużyteczny, a generowane komentarze mogą być zmyślone, stronnicze lub nakładające się, co przenosi osąd wartościujący z powrotem na czytelnika. Kalibracja jest jeszcze ostrzejsza. U Farrokhnii i wsp. jakość informacji zwrotnej od GenAI była istotnie powiązana z siłą wstępnego szkicu studenta, a jakość informacji zwrotnej od nauczyciela nie. Nauczyciel kalibrował bardziej konsekwentnie. Wolumen się skaluje. Kalibracja nie.

## Zachowanie ostatniego słowa i zapisu po stronie człowieka

[[becerra-aicofe-feedback-2026|Becerra, Palma i Cobos (2026)]] opisują AICoFE, który prowadzi trzy niezależnie dostrojone modele (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) po wynikach rubryki i obserwacjach jakościowych, aby wytworzyć niezależne komentarze do szkicu. Nauczyciel układa potem ostateczną wiadomość, wybierając zdania lub akapity, przy legendzie pokazującej, który model wniósł co. Model szkicuje. Nauczyciel dostarcza, a dostarczony tekst podpisuje jedna osoba, która przeczytała szkic.

Aldino i wsp. znajdują ten sam wzorzec „najpierw pomoc, potem weryfikacja” w zwykłej praktyce. Komponent uczenia maszynowego najczęściej wskazywał brak „osiągnięcia celu uczenia się” (20 z 21 nauczycieli je pominęło; 16 przyjęło wskazanie) oraz „relacji student-nauczyciel” (14 pominęło; 12 przyjęło). Nauczyciele decydowali o każdej sugestii według osądu zawodowego i to jest sens trzymania ich w pętli.

Dwunastu z 21 nauczycieli Aldino i wsp. dokonało dalszych poprawek na poziomie zdań, a dominującym wzorcem była kalibracja tonu: zmniejszanie pochwał (f = 11), usuwanie sugestii (f = 9), usuwanie zachęt (f = 8). Poprawki skupiały się w wymiarze relacyjnym, zwłaszcza w relacji student-nauczyciel (f = 24). Chronili autentyczność i zawodowy głos, a ta praca się nie automatyzuje.

## Nauczenie studentów czytania komentarza

Kompetencje w zakresie informacji zwrotnej są warunkiem wstępnym i są rozłożone nierówno.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths i Lodge (2026)]] poprosili 32 studentów psychologii o wykonanie nagrywanego ekranowo 25-minutowego zadania esejowego z nieograniczonym dostępem do ChatGPT, a potem o obejrzenie nagrania w wywiadzie stymulowanym wideo. Kompetencje w zakresie informacji zwrotnej były jedynym istotnym dodatnim predyktorem oceny eseju (β = 0,46, p = 0,017). Częstotliwość korzystania z GenAI, [[trust|wiarygodność źródła]] i [[prior-knowledge|wcześniejsza wiedza]] nie przewidywały wykonania, co [[feedback-futures-genai|Zhan, Wood, Carless i Yan (2026)]] również podnoszą w redakcyjnym wstępie do numeru specjalnego. Mniej niż jedna trzecia studentów porównała wynik SI z innym źródłem internetowym. Połowa zadeklarowała świadome unikanie SI ze względu na [[academic-integrity|rzetelność akademicką]] lub dlatego, że chciała mieć esej we własnych słowach. Większość prosiła o informację zwrotną na poziomie zadania, która słabo przenosi się na inne zadania.

Skrajności widać w parze piszących na IELTS, którą opisują Zhan i wsp. Student o niskich kompetencjach napisał niejasny prompt, dostał ogólną informację zwrotną, zaufał jej lub ją przekopiował i zaangażował się powierzchownie. Student o wysokich kompetencjach napisał prompt odwołujący się do kryteriów, dopytywał dalej, porównywał źródła i monitorował poprawki. Różnicą było nauczanie i nawyk, a nie dostęp do narzędzia.

Powiedz studentom wprost, że komentarze modelu mogą być zmyślone, stronnicze lub nakładające się, i że poprawka należy do studenta. Ujmij wynik jako opinię w postaci szkicu, którą trzeba ocenić, a nie odpowiedź do skopiowania. Potem poproś o porównanie, bo mniej niż jedna trzecia studentów robi to bez zachęty.

## Co nauczyciele akademiccy rozumieją tu błędnie

Więcej komentarzy oznacza więcej informacji zwrotnej. Komentarze są tanie w produkcji i drogie w przyswojeniu, a ograniczenie leży po stronie studenta w tej pętli. Lepiej oceniane komentarze SI u Farrokhnii i wsp. nie dały więcej poprawek niż komentarze nauczyciela.

Lepszy model naprawi ogólny wynik. Awarie narzędzia w Deakin były awariami zakresu: cechy na poziomie zdań, wąskie pasmo korekty. Zhan i wsp. lokują rozwiązanie w promptcie, rubryce lub człowieku, a nie w większym modelu. Para piszących na IELTS jest tego demonstracją: to samo narzędzie, inne nawyki, inne wyniki.

Udostępnienie narzędzia jest interwencją. Użycie wynosiło około 13% studentów studiów licencjackich i 12% studentów studiów magisterskich, gdy narzędzie było opcjonalne. Reszta pytania o projekt dotyczy tego, co dzieje się z pozostałymi 87%.

Oszczędność czasu jest automatyczna. Zapytani, co dało im narzędzie informacji zwrotnej od SI, 21 nauczycieli rzadko wymieniało oszczędność czasu (n = 2). Znacznie częściej wymieniali refleksję (n = 14), lepszy język i strukturę (n = 11) oraz wskazanie brakujących elementów (n = 10). W ich pracy poprawkowej dominowało edytowanie (f = 32) i usuwanie (f = 27), a dodawanie było rzadkie (f = 8). Pojawia się szkic i prompt diagnostyczny. Pojawia się też praca przeglądu, kalibracji i weryfikacji. [[ai-save-instructor-time|Pytanie o obciążenie pracą]] jest tym, które najczęściej obiecuje się od ręki, a GenAI redystrybuuje pracę nauczyciela, a nie ją usuwa.

Oceny satysfakcji mówią, że komentarze są trafne. W pilotażu w Deakin dodatnie średnie oceny współistniały z błędami zgłaszanymi przez studentów. Przejrzyj próbkę wyników wobec własnej lektury tych samych szkiców i zapisuj, gdzie model był ogólny, błędny lub schlebił.

## Co się na Tobie odbije

**„Informacja zwrotna od SI nie jest osobista.”** Często prawda, i to jest powód, by ostatnie słowo zostawić człowiekowi. AICoFE istnieje dlatego, że ogólna proza modelu nie jest tym, co student powinien otrzymać: nauczyciel wybiera, redaguje i podpisuje ostateczną wiadomość. 21 nauczycieli u Aldino i wsp. przepisało ton z tego samego powodu. Personalizacja jest zadaniem nauczyciela w tym projekcie, a model wykonuje pracę przygotowawczą.

**„Moi studenci i tak nie czytają informacji zwrotnej.”** Czytają mniej, niżbyśmy chcieli, a dowody mówią, że rozwiązaniem jest projekt, a nie wolumen. Przejmowanie w pilotażu w Deakin wynosiło około 13% i 12%. Lepiej oceniane komentarze u Farrokhnii i wsp. nie dały dodatkowych poprawek. Igłę poruszyła sekwencja wymuszająca zaangażowanie, samoocena, potem informacja zwrotna rówieśnicza, potem krytyka SI, oraz trzy cykle poprawek w semestrze, które dały mierzalne różnice w kompetencjach w zakresie informacji zwrotnej.

**„To nie jest to, za co płacą studenci.”** Wtedy nie pozwól, by SI stała się jedynym głosem, który słyszą. Wersja do obrony daje studentom więcej momentów informacji zwrotnej, podczas gdy spędzasz godziny na częściach wymagających osądu: ostatnim słowie, kalibracji, komentarzach, które noszą powagę nauczyciela. To, co studenci tracą przy niestarannym wdrożeniu, to spójność między kryteriami, komentarzami i wynikiem. Określ komplementarność przez sekwencjonowanie, porównanie, redagowanie i zarządzanie, a zarzut traci siłę. Zostaw dwa źródła obok siebie i jej nie traci.

**„Nie mam czasu przeglądać wszystkiego, co pisze model.”** Wtedy nie przeglądaj wszystkiego. Automatyzuj pasmo, w którym błędy są tanie do wychwycenia, czyli pracę językową na poziomie zdań, i próbkuj wynik wymagający osądu wobec szkiców, które już oceniłeś. Liczby Aldino mówią, czego szukać: tonu, dezinformacji, przesadnych pochwał, nakładania się.

## Co zrobić w tym tygodniu

**1.** Posortuj własny ostatni zestaw komentarzy na poprawki językowe i rozstrzygnięcia wymagające osądu i policz oba stosy.

**2.** Zapisz prompt odwołujący się do rubryki, prowadzony krok po kroku, który dałbyś modelowi, i przetestuj go na trzech szkicach, które już oceniłeś.

**3.** Przejrzyj próbkę wyników wobec własnych komentarzy i zapisuj, gdzie model był ogólny, błędny lub schlebił.

**4.** Rozłóż jedno zadanie na etapy: samoocena, potem informacja zwrotna rówieśnicza, potem krytyka SI, i powiedz studentom, że SI to opinia w postaci szkicu, którą mają zakwestionować.

**5.** Poproś o jedno porównanie z drugim źródłem lub z kryteriami, bo mniej niż jedna trzecia studentów robi to bez zachęty.

**6.** Zapisuj, jaka część ostatecznej informacji zwrotnej pochodziła od modelu, a ile zmieniłeś. Śledzenie kuracji w AICoFE jest wzorcem dla takiego zapisu.

**7.** Obserwuj podział ekspert-nowicjusz. Nauczyciele z ponad pięcioletnim doświadczeniem zgłaszali więcej problemów z wynikami narzędzia niż mniej doświadczeni współpracownicy, którzy doceniali rusztowanie. Jeśli doświadczeni współpracownicy widzą więcej awarii niż reszta zespołu, to informacja o własnej kalibracji.

## Dokąd dalej

[[feedback|Informacja zwrotna]] to pojęcie parasolowe dla całego systemu: dostarczania, pętli, przejmowania i kontekstu oceniania. [[ai-feedback-quality|Jakość informacji zwrotnej od SI]] omawia, co czyni generowane komentarze trafnymi, użytecznymi, terminowymi i uzasadnionymi pedagogicznie, a ta strona jest praktycznym środkiem: chodzi o to, które kombinacje tych części dają lepszą informację zwrotną na dużą skalę.

Pytania o to, co ocena powinna znaczyć, gdy w grę wchodzi SI, w tym zastępowanie konstruktu, uwierzytelnione dowody procesu i zasady rzetelności, należą do stron [[redesign-assessment-ai-era|przeprojektowanie oceniania w erze SI]] i [[assessment-validity|trafność oceniania]], a nie tutaj. O szczególnym przypadku nauczania pisania zobacz [[writing-instruction-ai-best-practices|najlepsze praktyki nauczania pisania w kontekście SI]].
