---
title: "Jak ograniczyć oszukiwanie z użyciem SI na kursie?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [should-we-use-ai-detectors, redesign-assessment-ai-era, addressing-common-misconceptions-ai-education, top-10-findings-ai-education-instructors]
weight: 88
audience: [instructors, assessment designers]
foundations: [academic-integrity, ai-literacy, reducing-ai-misuse]
assessment: [assessment]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/reduce-ai-cheating
source_updated: "2026-10-28T11:06:17-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

To szósty tydzień. Esej pisany w domu wraca płynny i pusty w środku i nie da się rozstrzygnąć, czy student go napisał. Albo cztery prace mają kształt, którego nikt w sali nie wytworzył we wrześniu, a biuro uczciwości akademickiej chce pisemnego wyjaśnienia, co zadanie miało mierzyć. Albo katedra przegłosowała w zeszłym miesiącu ograniczenie [[generative-ai|generatywnej SI]] na kursach kierunkowych i zostawiła zadanie, by to ograniczenie coś znaczyło.

Odpowiedź, którą można dać koledze: przestać próbować dowieść, kto napisał pracę, i zmienić warunki, w których powstaje. Detekcja to najsłabsza z dostępnych dźwigni. Dźwignie, które się trzymają, to zadanie, w którym skrót zostawia ślad, jeden samodzielny krok, który można zaobserwować, i krótka wyuczona sekwencja, która utrzymuje studentów w pracy poznawczej.

## W skrócie

**1.** Zdjąć detekcję ze ścieżki krytycznej. Dowody poniżej pokazują, że myli się przy dozwolonej edycji i przegapia celowe unikanie.

**2.** Wprowadzić jeden samodzielny, obserwowalny krok do każdego [[assessment|oceniania]] o wysokiej stawce i dać mu realną wagę.

**3.** Wyznaczać granicę SI na poziomie kroku zadania, a nie kursu, żeby podążała za tym, co się ocenia.

**4.** Jeśli SI jest dozwolona, skonfigurować ją tak, by podpowiadała, a nie odpowiadała, i wymagać próby studenta, zanim zareaguje.

**5.** Uczynić ujawnienie konkretnym i wolnym od kary. Zasady niejasne i te karzące popychają studentów ku ukrywaniu.

## Detekcja nie udźwignie sprawy

Synteza [[academic-integrity|Uczciwość akademicka]] odnotowuje istotne ograniczenia detekcji tekstu generowanego przez SI i argumentuje, że uczciwość w erze generatywnej SI staje się coraz bardziej problemem projektowania oceniania, a nie tylko problemem detekcji. Liczby warto zabrać na zebranie, na którym uzasadnia się to komuś, kto już kupił licencję.

W kontrolowanym badaniu 642 opublikowanych angielskich streszczeń dwa komercyjne detektory oznaczyły lekką edycję przez SI, zgodną z wytycznymi, w 38-80% przypadków. Oznaczyły niezmienione oryginały z lat 2023-25 w 9-15%, przy czym prace spoza [[stem-education|STEM]] znacznie powyżej STEM, na poziomie p<0,001. Po „humanizacji” przez SI te same narzędzia wychwyciły mniej niż 4% przepisanych tekstów oznaczonych jako SI ([[karr-ai-detection-humanization-2026]]). Te trzy liczby trzeba czytać po kolei. Dozwolone użycie było oznaczane częściej niż użycie zakazane, a użycie zakazane było w większości niewidoczne, gdy ktoś przepuścił je przez parafrazator. To paragraf 22 uczciwości akademickiej: detektor karze uczciwą pomoc, a zarazem umożliwia celowe unikanie.

Dowody terenowe idą w tym samym kierunku. W badaniu tajnym 94% prac w całości wygenerowanych przez SI, wstrzykniętych do odbywających się na żywo egzaminów online na pięciu modułach psychologii, pozostało niewykrytych, a prace SI wypadały średnio lepiej niż prawdziwi studenci ([[teichmann-detecting-undetectable-misconduct-2026]]). Uniwersytet Vanderbilt wyłączył swój licencjonowany detektor, gdy nie udało się potwierdzić reklamowanego odsetka wyników fałszywie dodatnich na poziomie 1%, co oznaczałoby około 750 błędnie oznaczonych studentów pośród 75 000 rocznych prac.

Nic z tego nie dowodzi, że detekcja nigdy nie działa. Dowodzi profilu błędów, z którym trzeba żyć. Oznaczony student to osoba z odwołaniem, a wynik na 642 streszczeniach mówi, że oznaczenie spada najboleśniej na studentów, którzy zrobili rzecz dozwoloną. Pełny argument, dlaczego zmienia to to, co ocena może uzasadniać, jest w [[redesign-assessment-ai-era|przeprojektowaniu oceniania w erze SI]].

## Zmienić to, co zadanie czyni łatwym

Synteza [[reducing-ai-misuse|Ograniczanie niewłaściwego korzystania z SI]] stawia przeprojektowanie na poziomie Tier-1 ze względu strukturalnego: działa niezależnie od tego, czy student wybierze właściwe zachowanie, bo ogranicza środowisko, zamiast zależeć od motywacji.

Zacząć od etykiety. [[ai-assessment-scale-reform|Skala oceniania z SI (AIAS)]] nadaje każdemu zadaniu poziom korzystania z SI, od „żadnej SI” przez „SI tylko do burzy mózgów” i „pomoc SI z atrybucją” po „pełne korzystanie z SI”, dzięki czemu oczekiwanie jest wypowiedziane i egzekwowalne, a nie wywnioskowane.

Potem zmienić artefakt. [[meta-analysis-systematic-review|Przegląd systematyczny]] 72 badań nad generatywną SI w [[cs-education|edukacji informatycznej]] ocenia przeprojektowanie jako wykonalne i o największym wpływie, i wyróżnia jeden ruch: dodać element ustny lub inaczej ujawniający proces do co najmniej jednego oceniania o wysokiej stawce na kursie. Nazywa to jedyną najskuteczniejszą interwencją w korpusie. Detekcja to najcieńszy obszar, który przegląd obejmuje, zaledwie 3 badania, wobec 60-80% studentów informatyki deklarujących korzystanie z generatywnej SI w pracach kursowych, zwykle bez wyraźnej zgody nauczyciela, i 70% jednej krajowej próby kadry akademickiej wprost proszącej o szkolenie w projektowaniu oceniania odpornego na SI ([[kumar-genai-computing-education-systematic-review-2026]]).

Menu, z grubsza w kolejności od tego, jak dobrze każda opcja przetrwa dużą grupę.

Samodzielnie, w sali, bez materiałów: egzaminy nadzorowane, kartkówki, pisanie z limitem czasu. Należy je ważyć mocniej niż dotąd, bo praca domowa to artefakt, który SI zawyża. Egzaminy ustne i obrony działają z tego samego powodu, bo dialog w czasie rzeczywistym trudno outsourcować ([[fenton-oral-exams-ai-authentic-assessment-2025]]).

Artefakty procesu: szkice, ślady rozumowania, opatrzone komentarzem „pokaż swoje myślenie”, dzienniki rewizji, żeby widoczny był *proces*, a nie tylko produkt ([[authentic-products-authenticated-processes-2026]]). Obok nich działają zadania autentyczne: lokalne przypadki, materiał ze stażu, własne dane studenta, cokolwiek trudno delegować ([[kirsanov-beyond-detection-ai-online-assessments-2026]]).

Zróżnicowanie zadania na studenta, gdzie każdy dostaje wersję powierzchownie odrębną, ale równoważną konstruktowo, czyni kopiowanie strukturalnie bezużytecznym. Tę gwarancję trzeba traktować jako warunkową wobec zdolności: [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]] stwierdziła, że generatory z czołówki osiągają tylko 0,81-0,88 na łącznym wskaźniku integralności, podczas gdy modele spoza czołówki spadają do 0,50-0,55. Jeśli warianty nie są równoważne, kupiono ochronę przed dzieleniem się razem z niesprawiedliwością między studentami.

## Zamknąć lukę między ćwiczeniem a egzaminem

To jest ta część, którą nauczyciele akademiccy pomijają, i tu dowód przyczynowy jest najmocniejszy.

W terenowym [[rct|RCT]] niestrzeżony tutor w stylu ChatGPT podniósł wyniki ćwiczeń wspieranych o 48% i obniżył wyniki egzaminu bez wsparcia o 17%. Wersja strzeżona, podpowiadająca zamiast odpowiadać i zasilona informacją o zadaniu autorstwa [[teacher-role|nauczyciela]], wyeliminowała szkodę całkowicie ([[generative-ai-guardrails-harm-learning]]). W większej skali badanie 26 811 studentów wykazało, że outsourcowanie pracy domowej podniosło wyniki pracy domowej o 18%, obniżając w ciągu sześciu miesięcy wyniki [[summative-assessment|egzaminu zamkniętego]] o 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).

Warto zauważyć kształt obu wyników. Zysk i strata spadają na różne miary, a tylko jedna z nich jest tą, którą się poświadcza. Pojedynczy RCT nie da wielkości efektu na własnym kursie. Daje kierunek, a oba badania wskazują w tę samą stronę.

Jeśli studenci mają korzystać z tutora, trzeba go skonfigurować przed semestrem, a nie po pierwszej skardze:

**1.** Ustawić go tak, by dawał stopniowe, [[socratic-method|sokratyczne]] podpowiedzi, a nie kolejny krok odpowiedzi.

**2.** Zasilić go poprawnymi rozwiązaniami i typowymi [[misconceptions|błędnymi wyobrażeniami]], żeby mógł celować w błędy, a nie powtarzać treść.

**3.** Wymagać próby, zanim pojawi się jakikolwiek wynik.

**4.** Stosować zasadę [[brcic-effortless-trap-productive-struggle-2026|pułapki bez wysiłku]]: jeśli dopuszczenie SI sprawia, że zadanie wydaje się bez wysiłku, to jest ona w złym miejscu.

Ta ostatnia zasada to także miejsce, w którym [[scaffolding|rusztowanie]] i [[guardrails|bariery ochronne]] zarabiają na siebie, i w którym [[simulating-students|symulowany student]] jest użyteczny do przetestowania własnego promptu, zanim spotkają go prawdziwi studenci.

## Poprosić studentów, by pokazali, co potrafią

Nigdy nie ustali się, jak powstał plik. Tanio można ustalić, czy student potrafi to, co plik zdaje się demonstrować.

[[best-response-student-ai-dialog-2026|„Najlepszą odpowiedzią na korzystanie z SI przez studenta nie jest detekcja, lecz dialog”]] opisuje mechanizmy: dwuminutowe wyjaśnienie indywidualne albo nagrane wyjaśnienie oddanej pracy, krótki quiz uzupełniający z tego samego materiału rozwiązany bez narzędzi, prośbę o rewizję próbki własnej pracy i wyjaśnienie zmian. Źródło to relacja praktyka, więc należy traktować ją jako obiecującą praktykę, a nie dowód efektu.

Weryfikacja rozstrzyga też, czy postępowanie w sprawie naruszenia przetrwa odwołanie. [[munoz-misconduct-allegation-evidence-2026|Munoz i wsp. (2026)]] przeanalizowali rzeczywiste akta spraw o zarzuty naruszenia z użyciem generatywnej SI i stwierdzili, że sprawiedliwość proceduralna wymaga, by studentowi przedstawiono zarzut i dano szansę odpowiedzi *przed* jakimkolwiek rozstrzygnięciem, zwykle na spotkaniu wyjaśniającym lub przed panelem, a to, co powie, wchodzi do materiału dowodowego. Ich kategorie dowodów wyjaśniają, dlaczego trzeba to wbudować w kurs: ślady behawioralne zapisywane przez system istnieją tylko w ocenianiu nadzorowanym, a słabsze dowody procesu, takie jak szkice, spotkania opiekuńcze i prezentacje, istnieją tylko tam, gdzie już były rutyną. Nawyk weryfikacji staje się dowodem, na którym można się później oprzeć.

Zasadę trzeba też napisać precyzyjnie. [[wright-transcription-not-generation-2026|Wright (2026)]] pokazuje, że zakazy traktujące transkrypcję mowy na tekst i generatywne redagowanie jako to samo „korzystanie z SI” są zbyt szerokie i ryzykują ukaranie studentów, którzy nie zrobili rzeczy zakazanej. To problem sprawiedliwości, zanim staje się problemem prawnym, a resztę obejmuje [[legal-issues-and-risks|kwestie prawne i ryzyko]].

## Utrzymać studentów w pętli podczas pracy

Zakaz narzędzia i zezwolenie bez struktury dają ten sam wynik: studentów stojących obok pracy poznawczej.

Synteza Ograniczanie niewłaściwego korzystania z SI podaje osiem zasad projektowych dla wersji dozwolonej, w tym: zachować [[desirable-difficulties|tarcie poznawcze]], ustawić SI jako tymczasowego partnera myślenia, a nie autorytet, wbudować punkty kontroli oceny oraz wymagać [[metacognition|metapoznawczego]] dziennikowania i dzienników promptów.

Sekwencja, która niesie te zasady, jest dość krótka, by wydrukować ją na karcie zadania:

**1.** Najpierw myślenie. Studenci robią burzę mózgów, konspekt lub szkic samodzielnie, zanim cokolwiek otworzą.

**2.** SI druga. Używają jej, by skrytykować, rozszerzyć albo wygenerować alternatywy wobec myślenia, które już mają.

**3.** Refleksja trzecia. Zapisują, do czego jej użyli, co przyjęli i odrzucili oraz dlaczego. Prompt plus dziennik rewizji wystarczą.

## Uczynić deklarację konkretną i tanią w wypełnieniu

Zastąpić ogólny checkbox „użyłem SI” ramą deklaracji [[discipline-specific-aied|swoistą dla dziedziny]], która mapuje użycie na etapy poznawcze, takie jak planowanie struktury wobec generowania treści ([[genai-declaration-frameworks-higher-education]]). Karta tytułowa, która pyta o etapy, narzędzie, prompty i sposób oceny wyniku, robi więcej niż tak lub nie.

Dwa warunki czynią ją uczciwą. Ujawnienie musi być bezpieczne, bo polityki karzące lub niejasne aktywnie pchają ku ukrywaniu ([[gonsalves-student-non-compliance-ai-declarations-2025]]), a studenci ważą ryzyko powiedzenia z ryzykiem niepowiedzenia ([[chang-should-i-tell-my-teacher-ai-disclosure-2026]]).

Arytmetyka też musi sprzyjać powiedzeniu. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed i Temimi]] modelują to jako problem informacji niedoskonałej, a nie moralności. Ujawnienie jest atrakcyjne tylko dopóty, dopóki koszt uczciwości pozostaje niski, a ponieważ wyniki fałszywie dodatnie detektora spadają też na uczciwych studentów, silniejszy nadzór może uczynić ukrywanie relatywnie bardziej atrakcyjnym, ilekroć dodatkowa czułość daje więcej nowych wyników fałszywie dodatnich niż nowych prawdziwie dodatnich. Zadeklarowane użycie trzeba czytać jako kontekst, a nie spowiedź, i projektować dla studenta najbardziej skłonnego do ukrywania.

## Uczyć tej kompetencji, którą się ocenia

Synteza Ograniczanie niewłaściwego korzystania z SI stawia nauczanie [[ai-literacy|kompetencji w zakresie SI]] i [[prompt-engineering|promptowania]] na poziomie Tier-2, poniżej zmiany strukturalnej.

Zmierzonym przykładem jest moduł [[k-12|K-12]] wykorzystujący ćwiczenie promptowania na scenariuszach z automatycznym ocenianiem przez [[llm]]. Poprawił rzeczywistą umiejętność promptowania i podniósł pewność korzystania z SI w uczeniu się o 10,4%, przy czym 87% uczestników deklarowało, że nauczyło się odpowiedzialnie korzystać z SI ([[aaai2026-prompting-literacy-k12]]).

To, w co studenci faktycznie wierzą, jest mniej cyniczne, niż sugeruje panika. Wśród 504 studentów socjologii 65% korzystało z generatywnej SI przy pracach kursowych, ale tylko 3% do generowania tekstu zadania i 2% do wygenerowania pełnego szkicu. 81% otrzymało jakiekolwiek wytyczne dotyczące SI, a tylko 46% uznało je za bardzo jasne ([[student-genai-use-views-writing]]). Praktycznym problemem jest niejednoznaczność, a nie bunt, dlatego jasna zasada plus wyuczona sekwencja zmieniają więcej zachowań niż ostrzeżenie. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa i Mezgebu (2026)]] opisują studentów pytających, czy generatywna SI to narzędzie ułatwiające oszukiwanie, czy partner wspierający uczenie się, i to pytanie powinny rozstrzygać oczekiwania.

Szkodą wartą wyraźnego nauczania jest [[ai-misuse-learning-harm|luka między wynikiem a uczeniem się]]: wynik rośnie teraz, uczenie się spada później, a student doświadcza tylko pierwszego. [[ai-tools-academic-work-cheating-2026|Narzędzia SI w pracy akademickiej]] i [[student-rationalization-ai-writing|racjonalizacje studentów]] obejmują stronę norm rówieśniczych i racjonalizacji, w tym obronę „wszyscy to robią”, którą jasna norma spłaszcza. O tym, jak mocna jest ta baza, mówią [[ai-literacy-evidence|dowody o kompetencjach w zakresie SI]] i [[top-10-findings-ai-education-instructors|dziesięć najważniejszych ustaleń dla nauczycieli akademickich]].

## Co nauczyciele akademiccy rozumieją tu błędnie

**Detektor to ubezpieczenie.** Trzeba policzyć, co pokrywa składka: przy odsetku, którego Vanderbilt nie zdołał potwierdzić, 1% z 75 000 rocznych prac to 750 błędnie oznaczonych studentów, a badanie na 642 streszczeniach pokazuje, że oznaczenia grupują się przy dozwolonej edycji.

**Zakaz rozstrzyga kwestię.** Zakaz napisany językiem „korzystania z SI” łapie transkrypcję razem z redagowaniem, co oznacza, że można ukarać studenta za dyktowanie własnego zdania ([[wright-transcription-not-generation-2026|Wright, 2026]]). Nie mówi też nic o tym, co ten student potrafi.

**Oszukiwanie to problem motywacji, więc narzędziem są kary.** Motywacja jest realna i nie jest dźwignią z najlepszym dowodem. Przeprojektowanie ma Tier-1, bo nie wymaga, by student wybrał dobrze, a model regionów odpowiedzi mówi, by projektować dla studenta najbardziej skłonnego do ukrywania.

**Jeśli pozwolę na SI, niewłaściwe korzystanie przestaje być moim problemem.** Zezwolenie bez barier ochronnych dało w tym samym badaniu 48% zysku w ćwiczeniach i 17% straty na egzaminie. Po przywróceniu bariery szkoda zniknęła.

**Studenci już wiedzą, gdzie jest granica.** 81% miało wytyczne, a mniej niż połowa uznała je za jasne. Liczby 3% i 2% mówią, że większość nie generuje całych zadań; 46% mówi, że w pozostałym zakresie zgadują.

**Checkbox to deklaracja.** Checkbox zapisuje, że student kliknął. Deklaracja etapowa mówi, co zrobił na każdym kroku, i to jedyna wersja, która pomaga nauczycielowi lub studentowi.

## Co się na Tobie odbije

**„Nie mam czasu przeprojektować kursu w tym semestrze”.** Nie trzeba przeprojektowywać kursu. Wystarczy przeprojektować jedno zadanie: jeden samodzielny krok, jedna linijka rubryki z punktami. To zmiana na dwie godziny i właśnie ją wyróżnia przegląd 72 badań.

**„Obrony ustne są niemożliwe przy 300 studentach”.** Więc nie prowadzić ich 300. Zwiększyć wagę części zamkniętej, wymagać artefaktów procesu i pobierać próbkę kontroli ustnych przy pracach, które wyglądają niespójnie z wcześniejszą pracą. Trzystu studentów nie potrzebuje 300 rozmów, żeby zmienić rachunek.

**„Potrzebuję czegoś do pokazania biuru uczciwości akademickiej”.** Dowód procesu jest mocniejszy niż wynik detektora, bo Munoz i wsp. stwierdzili, że akta opierają się na szansie odpowiedzi i na własnych zapisach kursu. Oznaczony odsetek to zarzut. Nagrane wyjaśnienie to zapis.

**„Wymaganie deklaracji obciąża tylko uczciwych”.** Obciąża, jeśli ujawnienie ściąga podejrzenie. Koszt uczciwości trzeba utrzymać blisko zera: żadnej kary za zadeklarowane użycie i deklaracja czytana jako kontekst. Model przewiduje ukrywanie dokładnie wtedy, gdy uczciwość staje się droga.

**„Studenci i tak będą używać SI”.** Będą, a użyteczne pytanie brzmi, którą reakcję zadanie czyni najłatwiejszą. W grupie, gdzie 65% deklaruje użycie, a 2% generowanie pełnego szkicu, większość ruchu to pomoc, której można nauczać, a nie oszustwo, które trzeba złapać.

**„Zaostrzenie zasad złapie studentów, którzy nic złego nie zrobili”.** To udokumentowany wzorzec porażki, a nie hipoteza. Ochroną jest precyzja: nazwać zakazany czyn, a nie narzędzie.

## Co zrobić w tym tygodniu

**1.** Przepisać klauzulę dotyczącą SI w najbardziej spornym zadaniu tak, by nazywała konkretne kroki i konkretne czyny, i usunąć brzmienie ogólne.

**2.** Dodać do tego zadania jeden samodzielny krok i dać mu wagę, która ma znaczenie.

**3.** Wpisać do rubryki artefakt procesu z przypisanymi punktami i opisać, jak wygląda dobry, równie precyzyjnie jak produkt.

**4.** Jeśli tutor jest dozwolony, sprawdzić w tym tygodniu jego konfigurację wobec czterech ustawień powyżej.

**5.** Powiedzieć studentom na piśmie, że zadeklarowane użycie nie będzie karane, i naprawdę tak zrobić.

## Dokąd dalej

[[redesign-assessment-ai-era|Przeprojektowanie oceniania w erze SI]] to towarzysz projektowania oceniania i miejsce, od którego zacząć, jeśli pytaniem jest, czego dowodem jest ocena. [[should-we-use-ai-detectors|Czy używać detektorów SI]] zajmuje się bezpośrednio decyzją o detektorze, [[course-ai-policy|polityka dotycząca SI na kursie]] obejmuje brzmienie, które studenci faktycznie czytają, a [[ai-assessment-scale-reform|reforma skali oceniania z SI]] dostarcza schemat etykiet. Po stronie nauczania [[ai-literacy-evidence|dowody o kompetencjach w zakresie SI]] i [[ai-misuse-learning-harm|szkoda w uczeniu się z niewłaściwego korzystania z SI]] obejmują to, ile warta jest praca nad kompetencjami i dlaczego szkoda się dzieje.
