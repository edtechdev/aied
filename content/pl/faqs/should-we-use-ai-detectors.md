---
title: "Czy powinniśmy używać detektorów SI?"
created: "2026-09-17T09:21:00-04:00"
connected_faqs: [redesign-assessment-ai-era, course-ai-policy, reduce-ai-cheating, addressing-common-misconceptions-ai-education]
weight: 85
foundations: [academic-integrity]
assessment: [ai-detection, assessment-validity]
ethics: [equity-in-ai-education, trust, privacy, ai-use-disclosure]
level: [higher ed]
audience: [instructors, administrators, assessment professionals]
institutions: [educational-policy-ai, governance]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/should-we-use-ai-detectors
source_updated: "2026-10-28T11:14:23-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Ocena detektora wraca z oznaczeniem na pracę, którą czytało się już dwa razy, albo współpracownik chce włączyć narzędzie przed kolejnym terminem eseju, albo komisja ds. rzetelności akademickiej prosi o obronę ustalenia opartego na procencie. Ktoś w sali powie, że ocena to tylko jeden dowód. To, co trzeba rozstrzygnąć, jest węższe niż spór, który za tym idzie: czy ta liczba może w ogóle cokolwiek ważyć w postępowaniu w sprawie naruszenia zasad, a jeśli nie, to co zostanie postawione na jej miejscu.

Krótka odpowiedź do powtórzenia na zebraniu: ocena detektora nie może stanowić podstawy ustalenia, bo nie da się jej zwalidować względem stanu faktycznego, nie da się jej poddać kontrprzesłuchaniu i nie spełnia progu przewagi prawdopodobieństwa. Jej błędy powtarzają się w schematach i najbardziej dotykają osób uczciwie redagujących tekst oraz studentów piszących w drugim języku. Warto zamiast tego zapytać, czy student potrafi wykazać zrozumienie tego, co złożył, i wesprzeć tę zdolność finansowo.

## W skrócie

**1.** Zapisać w polityce, że wynik detektora nigdy nie uruchamia konsekwencji, nigdy nie stoi sam i nigdy nie stanowi podstawy ustalenia. Umieścić to w samym dokumencie polityki, tam, gdzie komisja znajdzie to po zniknięciu notatki.

**2.** Zastąpić pytanie „czy użyto SI?” pytaniem „czy student potrafi wykazać zrozumienie tej pracy?”. Wykorzystać krótką rozmowę, wczesną wersję roboczą albo nagrane wyjaśnienie.

**3.** Wpisać jeden uwierzytelniony albo samodzielny krok w każde zadanie o wysokiej stawce, dopasowany do zdolności oceniania, którą naprawdę się dysponuje.

**4.** Poprosić dostawcę na piśmie o wskaźniki błędów, a potem spróbować je odtworzyć na własnych pracach. Vanderbilt to zrobił i wyłączył narzędzie.

**5.** Przenieść pieniądze z licencji na detekcję na zdolność weryfikacji i wsparcie merytoryczne. Tam prowadzi udokumentowana skarga kadry.

## Rozstrzygnąć, czy to ustalenie, czy pytanie

To dwie różne prace i opierają się na różnych dowodach. Ustalenie wymaga dowodów spełniających próg przewagi prawdopodobieństwa, a ocena detektora sama go nie osiąga. Nie da się jej zwalidować względem stanu faktycznego, bo w rzeczywistych pracach nikt nie wie, jak powstał tekst, więc walidacja staje się cyrkularna, a wskaźniki fałszywych trafień i fałszywych pominięć znaczą coś tylko w kontrolowanym teście. Narzędzie nie publikuje progów ani danych treningowych i nie pozwala na niezależną replikację, co zostawia oznaczonego studenta bez niczego do odpowiedzi, a prowadzącego bez niczego do wyjaśnienia ([[bassett-ai-detectors-education-2026]], [[teichmann-detecting-undetectable-misconduct-2026]]).

Łączenie oceny z innymi sygnałami tego nie naprawia. Markery językowe, porównania stylu, osądy [[llm|modelu językowego]] i milczenie studenta wciąż sumują się do czegoś mniej niż standard. Milczenie jest tym, na co warto patrzeć: student zachowuje prawo do odmowy, a odmowa nie przechyla szali. O co można zasadnie zapytać, to czy student potrafi wykazać [[learning-gains|przyrost wiedzy]], który [[assessment|ocena]] ma rzekomo mierzyć, a odpowiedź ustna odpowiada na to w sposób, w jaki wynik podobieństwa nigdy nie odpowie ([[bassett-ai-detectors-education-2026]]).

Dychotomia to też złe pytanie. Prace studentów często powstają z użyciem SI, w poprzek hybrydowego kontinuum, a polityki mówiące „w ramach oceny” rzadko definiują, kiedy ocena się zaczyna, co zostawia rozstrzygnięcie temu, kto pierwszy czyta plik ([[bassett-ai-detectors-education-2026]]).

Pod tym wszystkim leży problem danych referencyjnych. Detektory są trenowane i testowane na ludzkich tekstach sprzed ery generatywnego SI, a własna walidacja Turnitin użyła 700 000 prac sprzed 2019 roku. Zakłada się, że ten korpus reprezentuje obecną prozę studencką, czego nikt nie zweryfikował i co zmienia się z każdym wydaniem modelu ([[bassett-ai-detectors-education-2026]]).

## Zajrzeć w liczby dotyczące dokładności, zanim się je przytoczy

Najmocniejszy kontrolowany test w bazie wiedzy objął 642 opublikowane angielskie streszczenia w czterech dziedzinach i dwóch okresach. Przy progu 0,50 dwa komercyjne detektory oznaczyły zgodną z wytycznymi lekką redakcję z użyciem SI w 38-80% przypadków, oznaczyły niezmodyfikowane oryginały z lat 2023-25 w 9-15% (poza [[stem-education|naukami ścisłymi]] znacznie częściej niż w naukach ścisłych, p<0,001), a gdy tekst przeszedł przez usługę humanizującą, wychwyciły mniej niż 4% przepisań oznaczonych jako SI, przy wskaźniku fałszywych pominięć powyżej 96%. Autorzy nazywają to pętlą bez wyjścia dla rzetelności akademickiej: narzędzie łapie studentów, którzy ujawniają i lekko redagują, a nie łapie tych, którzy od początku chcą je obejść. Ich zalecenie jest jednoznaczne: oceny detektorów nigdy nie powinny służyć jako samodzielny dowód naruszenia zasad ([[karr-ai-detection-humanization-2026]]).

Niezależny [[benchmark|test porównawczy]] dochodzi do tego samego z innej strony. Żadne z 14 narzędzi nie osiągnęło 80% dokładności, a proste parafrazowanie, drobna redakcja albo usługa humanizująca zmniejszają o mniej więcej połowę nawet tę skuteczność. Przy realistycznych częstościach bazowych fałszywe trafienia przewyższają trafienia prawdziwe ([[teichmann-detecting-undetectable-misconduct-2026]]).

Skuteczność wychwytywania przy generowaniu całościowym jest gorsza, niż sugerują nagłówkowe wskaźniki błędów. W ukrytym badaniu terenowym badacze wstrzyknęli w pełni wygenerowane przez SI prace do działającego systemu egzaminów online [[summative-assessment|zaliczeniowych]] w pięciu modułach psychologii: 94% pozostało niewykryte, a prace SI wypadły średnio lepiej niż prawdziwi studenci. Pisanie prac na zamówienie pokazywało ten sam problem strukturalny już wcześniej, bo nie zostawia żadnego wiarygodnego śladu ([[teichmann-detecting-undetectable-misconduct-2026]]).

Dokładność zmienia się też z zadaniem. Gdy badacze sprawdzali, czy [[generative-ai|generatywne SI]] potrafi wykryć własny wynik, rezultaty były wiarygodne dla programowania i dłuższego pisania refleksyjnego, a słabe dla krótkich odpowiedzi, gdzie model często oceniał własny tekst jako bardziej ludzki niż autentyczne prace studentów. Drobne zmiany w prompcie ostro obniżały dokładność ([[llm-detecting-llm-generated-content-education]]). Próg, który działa dla jednego zadania, zawiedzie przy innym, i nie będzie wiadomo przy którym, dopóki nie przyjdzie odwołanie.

Jest jeszcze kwestia terminu ważności. Badanie z 2026 roku ujmuje detekcję jako problem adaptacji: [[ren-test-time-adaptation-ai-text-detection-2026|atak przepisania w czarnej skrzynce]] obniżył komercyjny detektor Pangram do zbalansowanej dokładności 63,5% i czułości wobec SI 27,0%, a detektor wytrenowany na Llama 3.3 70B Instruct osiągnął tylko 55% czułości na streszczeniach z nowszego modelu. Adaptacja w czasie testu przywróciła 94,4% zbalansowanej dokładności i 99% czułości na tym samym tekście, i to jest ta pocieszająca połowa. Ten sam artykuł pokazuje, ile naprawa kosztuje: w miarę jak symulowane przyjęcie modeli językowych rośnie, czułość stałego detektora nadzorowanego na tekście ludzkim spada z 85,9% do 73,4% w ciągu dekady. Warunek jego ważności jest sformułowany wprost: zbalansowana dokładność nie może przekroczyć połowy sumy jedynki i odległości wariacji całkowitej między rozkładem tekstów ludzkich i tekstów SI, więc zbieżenie się obu rozkładów pokonałoby każdy detektor oparty na uczeniu. Zwalidowana ocena trzyma się tak długo, jak długo modele stoją w miejscu, a modele ruszają co kilka miesięcy ([[ren-test-time-adaptation-ai-text-detection-2026]]).

A maszyna nigdy wyraźnie nie pobiła uważnego czytelnika. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall i Parapadakis (2025)]] podają wykrywanie maszynowe tekstu SI lub przepisanego na poziomie około 80% wobec 78,4% dla ludzkich recenzentów i przytaczają dowody, że tekst generowany przez SI przechodził jako autorski w aż 80% przypadków. Ten margines ginie w paśmie błędu, który człowiek i tak wnosi, zbyt wąskim, by oprzeć na nim ustalenie ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

## Ustalić, na czyją pracę spada błąd

Cechy, które detektory czytają jako sygnały SI, czyli gęstość długich tokenów, częstość słów akademickich i jednolity styl, są także cechami sprawnego pisania w drugim języku. Błędna klasyfikacja idzie więc za pochodzeniem językowym, a nie za zachowaniem, co czyni z tego pytanie o [[equity-in-ai-education|równość szans]], zanim staje się pytaniem technicznym ([[teichmann-detecting-undetectable-misconduct-2026]]).

To przekrzywienie widać także poza angielskim. [[kazakh-ai-text-detectors-2026|Test porównawczy 3 811 fragmentów o dowodliwie przedchatgptowskim autorstwie]] wykazał, że pięć publicznych detektorów trenowanych na angielskim, uruchomionych w wersji wydanej, oznacza 81,4% ludzkich fragmentów kazachskich (TMR RoBERTa) i 79,6% opublikowanych kazachskich esejów studenckich (Desklib DeBERTa), przy 25,5% dla Fakespot, a przekalibrowanie ich do 1% fałszywych trafień wychwytuje w zamian najwyżej 1,3% tekstu maszynowego. Zastrzeżenie samych autorów ma znaczenie, gdy się ich cytuje: fragmenty ludzkie to publiczne teksty sprzed ChatGPT w takiej postaci, w jakiej je znaleziono, a nie eseje studenckie, więc ich wskaźniki edukacyjne są najmniej pewnymi liczbami w artykule ([[kazakh-ai-text-detectors-2026]]).

Dyscyplina dokłada kolejną oś. Streszczenia spoza nauk ścisłych były oznaczane znacznie częściej niż te ze ścisłych w badaniu 642 streszczeń, co odzwierciedla konwencje pisania w tych dziedzinach, a nie zachowanie ich autorów ([[karr-ai-detection-humanization-2026]]). Dwa szeroko używane narzędzia komercyjne miały dokładność 0,69 i 0,61 w jednym porównaniu i oba zawiodły na tekstach hybrydowych, ludzko-maszynowych ([[hadra-ai-detector-accuracy-efl-2026]], [[van-vlasselaer-ai-detector-reliability-2026]]). Detektor to test stylu, a styl, który karze, idzie za pochodzeniem językowym, dyscypliną i rejestrem. Żadna z tych rzeczy nie jest faktem o tym, czy student użył SI, a każda jest faktem o studencie. Szerszy wzorzec opisuje [[differential-effects-across-learner-groups|zróżnicowane skutki w grupach uczących się]].

Część kosztu pojawia się przed jakimkolwiek przesłuchaniem. Ponieważ formalne procedury wymagają dowodu na poziomie detekcyjnym, którego funkcjonalnie nie ma, kadra zostaje z tym, co jedna relacja praktyka nazywa „podejrzeniem bez drogi odwołania”, podczas gdy [[student-rationalization-ai-writing|studenci racjonalizują]] własne użycie, a akta spraw stoją w miejscu ([[best-response-student-ai-dialog-2026]]). Koszt w [[trust|zaufaniu]] spada na relację, od której cała procedura zależy.

## Zmienić pytanie stawiane studentowi

Grand Canyon University przeszedł od pytania „czy ten student użył SI?” do „czy ten student potrafi wykazać zrozumienie tego, co złożył?”, wykorzystując krótkie rozmowy, wczesne wersje robocze i nagrane wyjaśnienia, i wdrożył to w całej instytucji jesienią 2025 roku. Argument za tym jest praktyczny: kadra jest już przygotowana do oceny zrozumienia, a zmiana oddaje jej władzę, zamiast zostawiać ją w oczekiwaniu na dowód, który nigdy nie nadejdzie ([[best-response-student-ai-dialog-2026]]).

To zmienia też to, co student może zrobić z oskarżeniem. Gdy przedstawi się wątpliwość i poprosi o wyjaśnienie, student może ją rozwiązać. Gdy pokaże się procent, może go tylko zaprzeczyć.

## Poprowadzić rozmowę tak, by przetrwała weryfikację

Rozmowę weryfikacyjną warto potraktować jako krok procedury, z powiadomieniem i zapisem, a wtedy się utrzyma, gdy ktoś przeczyta akta semestr później.

Zacząć od powiadomienia. Powiedzieć studentowi, co wzbudziło wątpliwość, prostym językiem, i po co ta rozmowa jest. Jeśli wątpliwość wzięła się z oceny detektora, trzeba to powiedzieć i powiedzieć, że ocena nie jest ustaleniem. Powiedzenie studentowi tylko, że jest oskarżony o oszustwo, zamienia spotkanie w obronę charakteru, a nie w relację o pracy.

Potem pytać o samą pracę. Jaką tezę próbowano postawić w tej części. Skąd wzięły się te dowody. Dlaczego tak to uporządkowano. Co odrzucono. Student, który napisał ten tekst, odpowie na te pytania na poziomie decyzji. Student, który go nie napisał, odpowie na poziomie tematu, a różnica wychodzi szybko, bez potrzeby dowodzenia intencji.

Zachować nienaruszone prawo do milczenia. Odmowa odpowiedzi niczego nie przyznaje, a procedura, która traktuje odmowę jako przyznanie się, nie przetrwa odwołania. Zapisać, o co pytano, co odpowiedziano i czego odmówiono.

Zamknąć decyzją, którą można przedstawić bez oceny. Albo student wykazał zrozumienie, które mierzy ocena, albo istnieje odrębna, rzeczowa wątpliwość co do pracy, którą można opisać własnymi słowami. Jeśli żadne z tego nie jest prawdą, akta kończą się tam. Taki wynik jest normalny i tak należy go zapisać, bo procedura, która odnotowuje wyłącznie winę, uczy następną komisję, że podejrzenie znaczy to samo co ustalenie.

## Wpisać w zadanie jeden krok, w który narzędzie nie wejdzie

Asynchroniczne oceny ustne, zbudowane jako prompty w trybie just-in-time z krótkimi, ograniczonymi czasowo nagranymi odpowiedziami ocenianymi według wpisanych rubryk, wypadły porównywalnie z egzaminami testowymi na miejscu w jednym badaniu i istotnie lepiej w innym, a studenci zgłaszali aktywniejsze przygotowanie i wyższą postrzeganą przydatność zawodową. Dla [[administrator|osoby zarządzającej]] liczy się to, że skala jest możliwa bez nadzoru ([[asynchronous-oral-assessment-2026]]).

Przeprojektowanie zadania robi więcej niż utwardzenie kontroli. Studium przypadku studentów ekonomii na studiach pierwszego stopnia pokazało, że tylko około jedna trzecia zgłosiła jakiekolwiek użycie SI, a ujawnienie było jeszcze rzadsze, i odczytało nieujawnianie jako racjonalną ostrożność przy niejasnej polityce, a nie jako nieuczciwość. Ci sami studenci widzieli rozwiązanie w zadaniach opartych na rzeczywistych danych ([[kirsanov-beyond-detection-ai-online-assessments-2026]]). Oczekiwanie, deklarowanie i przyglądanie się użyciu SI bije jego pilnowanie, bo [[authentic-assessment|autentyczność]] trzeba zaprojektować, a nie wymusić ([[beyond-detection-authentic-assessment-ai-2025]]).

Wynikają z tego dwie decyzje. Najpierw rozmiar. Krótka kontrola ustna przy każdej większej pracy jest wykonalna w seminarium. Na wykładzie dla trzystu osób tym, co przetrwa dziesiąty tydzień, są etapowe wersje robocze i wyrywkowa kontrola prac nietypowych. Wybrać wersję, którą da się jeszcze poprowadzić w ostatnim tygodniu semestru przy dostępnych godzinach oceniania, bo uwierzytelniony krok, który się załamuje pod obciążeniem, zostawia z powrotem sam wytwór.

Punkty są drugie. Jeśli uzasadnienie, historia wersji roboczych albo refleksja nad odrzuconą propozycją SI nie daje żadnych punktów, powstanie w pięć minut i nikt tego nie przeczyta, a studenci będą optymalizować pod tę część, która jest oceniana. Dać temu dość wagi, by pominięcie kroku kosztowało więcej niż jego wykonanie.

## Uczynić ujawnienie tanim wyborem

Niejasne albo karzące polityki popychają do ukrywania. Konkretne ramy deklaracji powiązane z etapami poznawczymi, połączone z zapewnieniem, że prawdziwe ujawnienie nie jest karane, wydobywają ze studentów więcej informacji niż nadzór ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). Pytanie projektowe brzmi, którą odpowiedź reguły czynią najłatwiejszą dla studenta, który ma pokusę ukrycia, a reguła, która traktuje deklarację jako przyznanie się, odpowiedziała na to źle.

Sformułowanie robi tu najwięcej. Deklaracja, która prosi o zaznaczenie pola, a potem leży nieprzeczytana w systemie składania prac, uczy, że ujawnianie to teatr, a następny rocznik uczy się tego szybciej. Deklaracja przypisana do etapu pracy, pytająca, do czego narzędzia użyto na tym etapie i co student zrobił z wynikiem, daje coś, co naprawdę można przeczytać, i daje studentowi powód, by być dokładnym.

## Napisać klauzule, które trzymają poza przesłuchaniem

Ekspozycja rzadko zaczyna się od procesu sądowego. Najpierw pojawia się jako wewnętrzne odwołanie albo skarga do regulatora, a pierwsze, co jest testowane, to procedura. Zasady sprawiedliwości naturalnej wymagają, by studentowi przedstawiono zarzut i dano możliwość odpowiedzi przed jakimkolwiek rozstrzygnięciem, a tą możliwością jest zwykle spotkanie wyjaśniające albo rozmowa z komisją, której zapis staje się dowodem. Ustalenia podjęte bez tego kroku są podatne na zakwestionowanie, nawet gdy sama wątpliwość była uzasadniona ([[munoz-misconduct-allegation-evidence-2026]]).

Standardy dowodowe są drugie. Ustalenia o naruszeniu zasad wymagają dowodów spełniających próg przewagi prawdopodobieństwa, a jeśli sprawy nie da się przedstawić bez oceny detektora, sprawa jest słaba na pierwszy rzut oka ([[bassett-ai-detectors-education-2026]]). Gdy sprawa opiera się wyłącznie na stylu, droga weryfikacji ustnej należy do procedury, a nie do dobrej woli przewodniczącego komisji.

Zakres jest trzeci. Ogólne zakazy SI, które nie oddzielają transkrypcji i OCR od generatywnego pisania, mogą usunąć narzędzie wspomagające, od którego zależą studenci z ograniczeniami kontroli motorycznej, czytelności pisma odręcznego lub dokładności pisania na klawiaturze, a kilka takich narzędzi wycofano, gdy lukę wypełniła transkrypcja z SI. To ekspozycja prawna, a także nieprecyzyjność ([[wright-transcription-not-generation-2026]]). Warto wymienić narzędzia [[assistive-technology|wspomagające]] i transkrypcyjne w tekście polityki.

Zamówienia publiczne są czwarte. Detektory przechowują prace studentów na serwerach osób trzecich, czasem za granicą przy słabszej ochronie [[privacy|prywatności]], co przenosi naruszenie, retencję i dalsze wykorzystanie komercyjne na rejestr ryzyka instytucji, a nie na stronę marketingową dostawcy. Warunki powinny obejmować retencję, użycie do [[llm-training-and-fine-tuning|trenowania modeli]], lokalizację przechowywania, powiadamianie o naruszeniach i prawa do odwołania ([[bassett-ai-detectors-education-2026]]). Opis ekspozycji prawnej w bazie wiedzy jest w [[legal-issues-and-risks|kwestiach prawnych i ryzykach]], i jest uczciwy co do swoich ograniczeń: dokumentuje procedury, kategorie dowodów i rzetelność narzędzi, a nie rozstrzygnięcia sądowe.

Ryzyko obniża to, co proceduralne. Nigdy nie traktować wyniku jako samodzielnego dowodu ani automatycznego wyzwalacza. Udokumentować standard, który stosuje procedura. Dać powiadomienie i realną szansę odpowiedzi zapisanej w protokole. Zaproponować weryfikację, gdy sprawa opiera się na stylu. Prowadzić ścieżkę audytu, która pokazuje, że wszystko to się odbyło.

## Sprawdzić sformułowanie na czterech przypadkach

Język polityki zawodzi na przypadkach, których nikt nie przewidział, gdy go pisano. Warto przepuścić te cztery przez projekt, zanim trafi do komisji, i odnotować, gdzie tekst nie ma odpowiedzi.

Student, który przepuścił wersję roboczą przez narzędzie tłumaczeniowe. Polityka musi powiedzieć, czy tłumaczenie liczy się jako użycie SI i czy liczy się tak samo dla osoby piszącej w drugim języku, jak dla piszącej w pierwszym. Jeśli milczy, komisja będzie improwizować, a improwizacja jest miejscem, gdzie zaczyna się argument o równości szans.

Ktoś, kto użył SI do zrobienia konspektu i sam napisał każdy akapit. Przy regule pytającej, czy SI dotknęło pracy, ten student jest w tej samej kategorii co ktoś, kto wygenerował całą pracę. Przy regule powiązanej z krokami nie jest, i można powiedzieć dlaczego. Ta różnica to konstrukt, a polityka musi go nazwać.

Ktoś, kto wygenerował tekst i nie potrafi go wyjaśnić. To przypadek, dla którego zbudowana jest procedura, i ten, który rozstrzyga się bez oceny detektora.

Student, który korzysta z transkrypcji, bo pisanie na klawiaturze jest zawodne. Warto nazwać narzędzia [[assistive-technology|wspomagające]] osobną kategorią z własną drogą, żeby dostosowanie nie stawało się zarzutem.

## Co administracja rozumie błędnie na temat detektorów

**Publikowany przez dostawcę wskaźnik fałszywych trafień to liczba ryzyka, pod którą można planować budżet.** Vanderbilt licencjonował detektor reklamowany jako mający 1% fałszywych trafień, a potem próbował tę liczbę zwalidować i nie zdołał. Przy 75 000 zgłoszeń rocznie 1% oznaczał około 750 błędnie oznaczonych studentów. Uniwersytet wyłączył narzędzie ([[teichmann-detecting-undetectable-misconduct-2026]]). Wskaźnik, którego nie da się odtworzyć na własnym korpusie, jest liczbą marketingową, a błędnie oznaczeni studenci wciąż zostają do obsłużenia.

**Detekcja odstrasza studentów, którzy inaczej by oszukiwali.** Odstraszanie działa przez to, jak detektor rozróżnia ukryte użycie od pracy zgodnej z zasadami, a nie przez surowy wskaźnik wychwytywania. Gdy dodana czułość daje więcej nowych fałszywych trafień niż nowych trafień prawdziwych, silniejszy nadzór czyni ukrywanie relatywnie bardziej atrakcyjnym, więc wiarygodność traci się na studentach, którzy nic nie zrobili źle, szybciej, niż identyfikuje się tych, którzy zrobili ([[mohamed-temimi-assessment-imperfect-information-disclosure-2026]]). Metaanaliza Krou i in., cytowana w tej samej pracy przeglądowej, pokazuje, że poczucie własnej skuteczności koreluje negatywnie z oszukiwaniem, a rzeczywiste zdolności nie korelują z nim odwrotnie wcale, więc zdolni studenci mogą oszukiwać, gdy uznają ocenę za niesprawiedliwą. Detekcja nie jest ani rzetelnym narzędziem, ani oczywistym środkiem odstraszającym ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

**Ocena plus kilka wskaźników daje sprawę.** Nie daje. Standardem są dowody spełniające próg przewagi prawdopodobieństwa, a oceny połączone z markerami, porównaniami stylu, osądami modeli językowych albo milczeniem wciąż go nie spełniają. Warto zadać sobie jedno pytanie kontrolne: czy to rozumowanie dałoby się wypowiedzieć na głos podczas przesłuchania ([[bassett-ai-detectors-education-2026]]).

**Licencja na detektor kosztuje mniej niż przeprojektowanie oceny.** Licencja jest najmniejszą pozycją, a niesie ekspozycję na ochronę danych, pracę zamówieniową i stały strumień odwołań opartych na narzędziu, którego błąd jest wzorowany przez pochodzenie językowe. Kadra opisuje to doświadczenie jako „podejrzenie bez drogi odwołania”, więc pozycją budżetową, która zmienia wyniki, jest zdolność weryfikacji i wsparcie merytoryczne ([[best-response-student-ai-dialog-2026]]).

**Ogólny zakaz chroni instytucję.** Reguły zbyt szerokie mogą odebrać dostosowanie i zaprosić argument o dyskryminacji, którego chciano uniknąć, bo ich błąd koncentruje się na dających się zidentyfikować grupach, a nie rozkłada równo ([[wright-transcription-not-generation-2026]], [[hadra-ai-detector-accuracy-efl-2026]]).

## Co się na Tobie odbije

**„Nasz dostawca reklamuje 1% fałszywych trafień.”** Licencjonowany detektor Vanderbilta twierdził dokładnie to, a twierdzenie nie przetrwało próby walidacji podjętej przez uniwersytet. Niezależne testy porównawcze nie stawiają żadnego narzędzia powyżej 80% dokładności ([[teichmann-detecting-undetectable-misconduct-2026]]). Warto poprosić o badanie walidacyjne i o korpus, na którym je przeprowadzono, a potem poprosić o możliwość przeprowadzenia go samodzielnie.

**„Używamy tego tylko jako jednego dowodu.”** Standardem są dowody spełniające próg przewagi prawdopodobieństwa, a ocena połączona z markerami, porównaniami stylu, osądami modeli językowych albo milczeniem wciąż go nie spełnia ([[bassett-ai-detectors-education-2026]]). Jeśli komisja nie przyjęłaby tego rozumowania wypowiedzianego na głos, akta nie powinny go zawierać.

**„Jeśli przestaniemy wykrywać, oszustwo wygra.”** Oszustwo już przechodzi przez te narzędzia. 94% wstrzykniętych prac SI przeszło niezauważone przez działający egzamin online, humanizowanie pokonuje detekcję w więcej niż 96% przypadków, a pisanie prac na zamówienie już wcześniej nie zostawiało wiarygodnego śladu. To, co detektory wychwytują z mierzalną rzetelnością, to uczciwa lekka redakcja i proza nierodzimych użytkowników języka ([[teichmann-detecting-undetectable-misconduct-2026]], [[karr-ai-detection-humanization-2026]]).

**„Używamy tego tylko prywatnie, żeby zacząć rozmowę.”** To najmniej szkodliwe użycie, ale też coś kosztuje, bo studenci najczęściej oznaczani najrzadziej nadużywają SI. Podejrzenie spada więc na niewłaściwe osoby, zanim zacznie się jakakolwiek rozmowa ([[teichmann-detecting-undetectable-misconduct-2026]]). Odpowiedzią Grand Canyon było w ogóle nie wychodzić od podejrzenia ([[best-response-student-ai-dialog-2026]]).

**„Student, który nie ma nic do ukrycia, nie ma się czego bać.”** Badanie 642 streszczeń pokazało, że zgodna z zasadami lekka redakcja była oznaczana w 38-80% przy progu 0,50, a kazachski test porównawczy pokazał 81,4% i 79,6% dowodliwie ludzkich fragmentów oznaczonych przez wydane detektory ([[karr-ai-detection-humanization-2026]], [[kazakh-ai-text-detectors-2026]]). Czysta historia nie daje ochrony, gdy sygnałem jest styl. To także powód, dla którego kazachscy autorzy oznaczają własne wskaźniki edukacyjne jako najsłabszą liczbę w artykule, i dla którego nie należy ich cytować jako wskaźnika dla esejów studenckich.

**„Czy nie można po prostu wymagać deklaracji i traktować jej braku jako winy?”** Brak deklaracji nie jest dowodem ukrytego użycia, a traktowanie go takim czyni ukrywanie racjonalnym. Konkretne ramy powiązane z etapami poznawczymi, z prawdziwym ujawnieniem chronionym przed karą, wydobywają więcej informacji niż nadzór ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). Dowody na tej stronie dotyczą tego, co prowadzi do ujawnienia. Nie mówią nic o tym, ile oszustwa zapobiega reżim deklaracji.

## Co zrobić w tym tygodniu

**1.** Otworzyć procedurę postępowania w sprawie naruszeń i znaleźć każde miejsce, w którym ocena detektora mogłaby uruchomić krok. Napisać jedno zdanie, które usuwa ten wyzwalacz, i zanieść je osobie odpowiedzialnej za dokument.

**2.** Napisać do dostawcy o badanie walidacyjne stojące za reklamowanym wskaźnikiem błędu i zapytać, jakiego korpusu użyto.

**3.** Wybrać zadanie o najwyższej stawce i dodać jeden uwierzytelniony krok, który da się ocenić w dostępnym czasie.

**4.** Napisać szkic trzech pytań, które zostaną zadane studentowi, zaczynając od tego, jaką tezę próbowano postawić i jak ją sprawdzono.

**5.** Wysłać klauzule zamówieniowe i dostępnościowe do biura, które podpisuje umowy, z wypisanymi warunkami retencji, użycia do trenowania i naruszeń.

## Dokąd dalej

Towarzyszem od strony projektowania jest [[reduce-ai-cheating|Jak ograniczyć oszukiwanie z użyciem SI na moim kursie?]], a [[redesign-assessment-ai-era|przeprojektowanie oceny w erze SI]] rozwija argument o ocenie. [[course-ai-policy|polityka kursu wobec SI]] omawia, jak sformułować i zakomunikować politykę kursu, a [[ai-literacy|kompetencje w zakresie SI]] omawiają, co studenci muszą wiedzieć, by pracować z tymi narzędziami bez utraty samej pracy. Strony koncepcyjne stojące za argumentem to [[academic-integrity|rzetelność akademicka]], [[equity-in-ai-education|równość szans w edukacji z SI]] i [[legal-issues-and-risks|kwestie prawne i ryzyka]]; klauzule dotyczące detekcji opisane wyżej to warstwa instytucjonalna [[educational-policy-ai|polityki edukacyjnej wobec SI]].
