---
title: "Jakie są najważniejsze dziesięć wniosków z badań nad SI w edukacji, o których powinni wiedzieć nauczyciele akademiccy?"
created: "2026-08-24T09:42:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/top-10-findings-ai-education-instructors
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

Jest tydzień przed początkiem semestru albo tydzień po pierwszym dużym oddaniu pracy i ktoś zadaje pytanie, na które nie da się odpowiedzieć z doświadczenia: co studenci mogą zrobić z SI przy tym zadaniu i co ocena wtedy właściwie poświadcza. Być może esej przygotowywany w domu wrócił tak wypracowany, że nie pasuje do wcześniejszej pracy studenta. Być może wydział pisze politykę dotyczącą SI i chce, żeby kurs był z nią zgodny do piątku. Być może student odwołuje się od oceny, a nie ma czym pokazać, co ta praca dowodzi.

Najważniejszy wniosek z badań zgromadzonych w tej bazie wiedzy: sposób włączenia [[generative-ai|generatywnej SI]] w aktywność decyduje o tym, czy wzmacnia ona myślenie, czy je zastępuje. Dźwignią, którą kontroluje nauczyciel, jest projekt zadania. Testem każdego projektu jest to, co studenci potrafią jeszcze zrobić, gdy narzędzia zabraknie. Dziesięć wniosków, od których ta strona bierze nazwę, znajduje się poniżej, w kolejności według decyzji, której każdy z nich służy.

## W skrócie

**1.** Należy nazwać myślenie, które ma wytwarzać zadanie, a następnie wyznaczyć SI rolę, która tego myślenia nie wykonuje.

**2.** Regułę dotyczącą SI warto ustalać dla każdego zadania, a nie dla całego kursu, i zapisywać obok niej uzasadnienie tam, gdzie studenci je przeczytają.

**3.** W każdej jednostce powinien znaleźć się co najmniej jeden oceniany krok, który student wykonuje bez obecności SI.

**4.** Aktywność należy oceniać po tym, co studenci potrafią zrobić tygodnie później, bez pomocy, a nie po jakości tego, co oddają.

**5.** Warto pytać, jak studenci korzystali z narzędzia, i oceniać weryfikację, a nie logowania.

**6.** Należy patrzeć, którym studentom projekt pomaga, bo średnia ukrywa tych, których gubi.

## Zdecydować, czemu zadanie służy

Warto napisać jedno zdanie nazywające kompetencję, zanim sięgnie się po narzędzie: co student powinien potrafić na końcu tej jednostki, czego nie potrafił na początku? Odpowiedź może brzmieć: zbudować argument z dowodów, przeprowadzić dowód, postawić diagnozę, podjąć decyzję projektową w warunkach ograniczeń. Jeśli nie da się tego nazwać, reguła dotycząca SI będzie arbitralna, a studenci to zauważą.

Dwie linie badań wyjaśniają, dlaczego to jest pierwsze. [[productive-failure|Produktywne porażki]] to ustalenie, że uczący się często zapamiętują więcej, gdy zmierzą się z problemem, zanim pokaże się im rozwiązanie, więc tarcie bywa mechanizmem, a nie przeszkodą do usunięcia. [[icap-framework|Framework ICAP]] przewiduje odmienne uczenie się przy biernym, aktywnym, konstruktywnym i interaktywnym korzystaniu z tego samego materiału. Oba wskazują na jedno pytanie projektowe: co student robi, gdy narzędzie jest otwarte?

Najwyraźniejsza ilustracja w korpusie pochodzi z porównania chatbota opartego na teorii, który rusztował wyjaśnienia studentów, ze zwykłym ChatGPT i z nauczaniem prowadzonym jak dotychczas. Natychmiastowe różnice nie były istotne. Cztery tygodnie później grupa z rusztowaniem zachowała więcej wiedzy pojęciowej. To jedno badanie, a nie uniwersalny efekt, a jego użyteczna treść to kształt wyniku: projekt może przeważyć nad możliwościami modelu, bo warunki różniły się tym, czego aktywność wymagała od studentów.

[[kumar-genai-computing-education-systematic-review-2026|Przegląd systematyczny 72 recenzowanych badań z zakresu edukacji informatycznej]] dochodzi do tej samej warstwy z drugiej strony. Krytyczne zaangażowanie w wynik SI nazywa „wspólnym mechanizmem łączącym każdą skuteczną interwencję w korpusie” i zaleca [[scaffolding|stopniowany dostęp]], czyli wprowadzanie generatywnej SI dopiero po wykazaniu kompetencji podstawowych. Żadne z tych twierdzeń nie dotyczy tego, na jaki produkt wykupiona jest licencja.

## Wyznaczyć SI zajęcie, które nie jest ocenianym myśleniem

Dziesięciolecia [[intelligent-tutoring|badań nad tutoringiem inteligentnym]] opisują wzorzec, który działa: zdiagnozować, co student rozumie, zadawać pytania, udzielać stopniowanych podpowiedzi, prosić o wyjaśnienie, udzielać informacji zwrotnej. Wszystko poza podaniem rozwiązania. Obecne prace nad [[pedagogical-agent|agentem pedagogicznym]] wyznaczają tę samą granicę między zachowaniem nauczycielskim a produkcją odpowiedzi, a [[thermomix-genai-education-analogy-2026|analogia z Thermomixem]] czyni to konkretnym. Jedno urządzenie może ugotować za człowieka, i wtedy traci się umiejętność, albo może być partnerem do testowania pomysłów, które wciąż trzeba zrozumieć. Te tryby odpowiadają ICAP: bierny, aktywny, konstruktywny, interaktywny.

Wąskie narzędzia pokazują tę samą zasadę. [[structrag-diagram-reasoning-ai-tutoring|Tutor, który czyta diagramy inżynierskie strukturalnie]], osiągnął 93,0% F1 na poziomie krawędzi wobec 89,3% dokładności całego diagramu, co znaczy, że potrafi wskazać konkretne brakujące lub błędnie odczytane połączenia, nawet gdy cały diagram jest błędny. To informacja zwrotna, na której student może działać, zamiast zaliczenia albo braku zaliczenia.

Trudniejsze pytanie dotyczy tego, co tutorowi wolno rekomendować. Gdy [[tuo-armada-multi-agent-debate-overreliance-2026|debata wieloagentowa]] zastąpiła „oto odpowiedź SI” dyskusją, której własne preferowane stanowisko zostało zatrzymane, szkodliwe przechodzenie na błędne stanowisko SI spadło z 42-60,5% do 5,7-8,2%. Przyjmowanie trafnego stanowiska SI także spadło, z 61,1-72,3% do 22,1-33,3%. Zatrzymanie rekomendacji chroni początkowy osąd studenta i pozostawia korektę namysłowi, więc projekt oddaje korygowanie błędów w zamian za mniej pewnych siebie błędnych zwrotów. Warto zdecydować, który z tych dwóch efektów jest pożądany w danej wymianie, zanim napisze się prompt.

Na zajęciach wdrożenie tego jest tanie. Sekwencja [[socratic-method|sokratejska]] to wzorzec, do którego warto dążyć, z narzędziem pytającym, a nie odpowiadającym. Warto polecić studentom proszenie o „jedną podpowiedź”, „zadaj mi pytania” albo „skrytykuj moje rozumowanie”, a „rozwiąż to” uczynić przypadkiem nietypowym. Zmienia się domyślny czasownik interakcji, a to jest ta część, którą studenci rzeczywiście kontrolują.

Jedno ograniczenie warto powiedzieć wprost. Większość tych dowodów pochodzi z krótkich zadań w kilku kursach i nic nie obiecuje, że tutor udzielający podpowiedzi podniesie wyniki egzaminu w danej grupie. Do tego pytania potrzebne jest omówione poniżej badanie randomizowane, a jego wynik otrzeźwia.

## Ustalić regułę na poziomie zadania i powiedzieć dlaczego

Użyteczny framework rozdziela trzy przypadki. Ograniczać SI, gdy mierzy się samodzielną kompetencję. Rusztować nią, gdy ograniczona pomoc nie narusza tej kompetencji. Wymagać jej, gdy biegła współpraca człowieka z SI jest tym, czego studenci mają się nauczyć. Większość kursów zawiera wszystkie trzy przypadki, w różnych tygodniach, i dlatego jedna reguła na poziomie kursu stale zawodzi na brzegach.

[[zou-is-this-a-trap-student-teachers-genai-2026|Badanie metodami mieszanymi z 85 przyszłymi nauczycielami]] pokazuje, co produkuje reguła bez uzasadnienia. 62,4% próby odmówiło korzystania z generatywnej SI nawet tam, gdzie była dozwolona, a 41,5% z tych, którzy odmówili, wskazało obawę przed oskarżeniem o [[academic-integrity|plagiat]]. 9 z 11 osób, z którymi rozmawiano, odczytało samą politykę przyzwalającą jako pułapkę. W tym samym badaniu tylko 37,6% korzystało w ogóle z dozwolonej generatywnej SI, ich wybory szły za kulturą programu i [[assessment|projektem oceniania]] bardziej niż za zgodą w jakimkolwiek pojedynczym kursie, a własne deklaracje ujawniania zaniżały faktyczne użycie w każdym kursie.

Warto czytać te liczby jak zlecenie projektowe. Zgoda bez podanego celu wygląda na zastawioną pułapkę, a zakaz bez podanego celu wygląda na przeszkodę do obejścia. Studenci reagują na uzasadnienie przypisane do konkretnego zadania. Warto zapisać regułę w instrukcji zadania, w jednej linii, i uczynić ją tak konkretną, żeby student potrafił rozpoznać, czy pomoc, którą za chwilę przyjmie, nie podkopuje tego, co jest oceniane.

## Oceniać coś, co student zrobił bez narzędzia

To jest krok, który wykonuje pracę, a dowody w tym miejscu są najmniej dwuznaczne na tej stronie.

Przegląd 72 badań stwierdził, że generatywna SI rzetelnie podnosiła krótkoterminowe ukończenie zadania i skracała czas jego wykonania w 36 badaniach, co autorzy traktują jako najlepiej replikowany wynik w korpusie, a te korzyści wydajności „nie przenoszą się na samodzielne wykonanie” w 21 badaniach. [[yan-cognitive-outsourcing-genai-assessments-2026|Badanie myślenia na głos z 38 studentami studiów licencjackich]] pokazuje, jak to wygląda w zwykłym przypadku. [[cognitive-offloading|Odciążanie poznawcze]] najbardziej szkodzi uczeniu się, gdy SI wykonuje rozumowanie, które student miał ćwiczyć. Tam 76,32% pozostało w schemacie jednej tury: pytanie, odpowiedź, koniec, a tylko 21,06% przeplatało korzystanie z SI z samodzielnym czytaniem i pisaniem. Największa grupa, 31 z 38 osób, deklarowała cele mistrzowskie, pracowała w rozdrobnionych pojedynczych turach, a potem zgłaszała nadmierne poleganie, poznawcze samozadowolenie i szybkie zapominanie; jedna z tych osób ujęła to tak: „szybkość, z jaką się to zapomina, też jest bardzo duża”. [[critical-thinking-paradox-genai-learning-2026|Praca frameworkowa z 2026 roku]] nadaje temu wzorcowi nazwę. Oceny i produkty rosną, a praca umysłowa, która wytwarza trwałe uczenie się, spada.

Badanie randomizowane rozstrzyga spór przynajmniej w jednym środowisku. [[bassner-performance-learning-dissociation-ai-programming-2026|Trzyramienne RCT z 275 studentami kursu CS1]] porównało tutora udzielającego podpowiedzi, który nie podawał pełnych rozwiązań, z nieograniczonym ChatGPT i z tradycyjnymi zasobami internetowymi. Wyniki zadań ćwiczeniowych różniły się ostro: 71,84% dla ChatGPT wobec 29,85% w grupie kontrolnej bez SI, przy 57,50% dla tutora z podpowiedziami. Przyrost wiedzy pojęciowej nie różnił się wcale między trzema ramionami: 0,83, 0,71 i 0,85 punktu (czas × grupa p = 0,773). Oba warunki z SI obniżały frustrację i obciążenie zbędne, a jedynie tutor z podpowiedziami podnosił motywację wewnętrzną. Narzędzie oceniane przez studentów jako bardziej pomocne i łatwiejsze było także tym, które najbardziej ograniczało przetwarzanie wytwarzające uczenie się.

Warto zauważyć, czego ten projekt nie może uzasadnić. To jeden kurs, jeden semestr, jeden język, a wyniki ćwiczeń są z założenia wykonaniem wspomaganym, czyli dokładnie tą miarą, przed zaufaniem której badanie ostrzega. Nie pokazuje, że tutoringi są bezużyteczne. Pokazuje, że wybrany wynik pomiaru decyduje o otrzymanej odpowiedzi oraz że preferencja studentów nie jest miarą uczenia się.

Trzeba więc oceniać wersję bez pomocy. Jedno zadanie w jednostce, w którym studenci przypominają, wyjaśniają, rozwiązują albo bronią pomysłów bez obecności SI, i realne punkty za nie. Argument o trafności, który za tym stoi, znajduje się w [[assessment-validity|trafności oceniania]]: wypracowany artefakt przygotowany w domu nie pokazuje już, że osoba, która go oddała, ma kompetencję, którą ten artefakt prezentuje. [[redesign-assessment-ai-era|Przeprojektowanie oceniania w erze SI]] przechodzi przez całą architekturę, w tym przez tani, uwierzytelniony krok dla dużych kursów.

## Zmieniać zadanie, które już jest, a nie cały kurs

Większość nauczycieli akademickich, którzy zadają to pytanie, nie buduje nowego kursu. Mają pracę semestralną, raport z laboratorium albo zestaw zadań, który działa od lat, i chcą wiedzieć, gdzie położyć granicę. Warto rozłożyć zadanie krok po kroku, zapytać o każdy krok, co się tam ocenia, i pozwolić, żeby odpowiedź wyznaczyła granicę. To metoda na poziomie zadania udokumentowana w [[mccorkle-aligned-genai-course-policy-2025|pracy McCorkle’a o spójnej polityce kursu]], a jedno przejście przez najbardziej sporne zadanie zwykle wystarcza, żeby zobaczyć jego kształt.

Dziesięciostronicowa praca semestralna zwykle dzieli się tak. Wybór tematu i poszukiwanie źródeł to miejsce, w którym żyje osąd, więc narzędzie, które proponuje tezę albo składa listę lektur, wykonało tę część, która jest oceniana. Synteza i argumentacja to sam konstrukt. Formatowanie cytowań, sprawdzanie odnośników i redakcja językowa to kroki, w których użycie narzędzia jest niewidoczne dla konstruktu, a zakazywanie go tam nie daje niczego poza niechęcią. Warto powiedzieć to w instrukcji zadania, krok po kroku, w krótkiej tabeli, jeśli tak wygodniej.

Potem trzeba uczynić widocznym krok środkowy. Warto poprosić o jednostronicowe uzasadnienie z adnotacjami, oddawane razem z pracą, które wskazuje dwa odrzucone źródła i powód odrzucenia, jedno twierdzenie poprawione po sprawdzeniu oraz miejsce, w którym student postanowił nie iść za sugestią. Oceniać je z tą samą konkretnością, jaką stosuje się do tekstu. Uzasadnienie ma wagę tylko wtedy, gdy student, który je pominie, traci więcej, niż zyskuje, więc warto dać mu tyle punktów, żeby arytmetyka była oczywista.

Zestaw zadań jest łatwiejszy, a granica leży w innym miejscu. Odpowiedzi nie są konstruktem; są nim wybór metody i diagnoza błędu. Warto wymagać pierwszego kroku każdego zadania, własnymi słowami studenta, zanim otworzy się jakiekolwiek narzędzie, i rozwiązać jedno zadanie z zestawu na zajęciach bez żadnych dostępnych pomocy. To mniejsza zmiana, niż brzmi, i zamienia zestaw z produktu, którego nie da się zweryfikować, w zapis tego, jak student myślał.

W raporcie laboratoryjnym granica to zwykle interpretacja danych i analiza błędów. Narzędzie może formatować tabelę i sprawdzać jednostki. Interpretacja, decyzja o tym, co liczy się jako anomalia, i wyjaśnienie rozbieżności z wynikiem oczekiwanym powinny pozostać w rękach studenta, i te elementy warto oceniać z przypisanymi punktami.

Wzorzec się uogólnia: zlokalizować krok, w którym żyje kompetencja, chronić ten krok, uwolnić resztę i umieścić dowód procesu tam, gdzie są punkty. Unika się tu przeprojektowania, które zmienia sposób powstawania pracy, nie zmieniając tego, co ocena może uzasadnić.

## Oceniać narzędzia informacji zwrotnej i oceniania po późniejszych wynikach

[[ai-feedback-quality|Informacja zwrotna od SI]] może być terminowa, konkretna, skalowalna i akceptowana przez studentów, także w [[higher-ed|szkolnictwie wyższym]]. To, czy uczy, zależy od trafności, dopasowania [[pedagogy|pedagogicznego]] i [[feedback-literacy|kompetencji w zakresie informacji zwrotnej]] studentów, czyli umiejętności oceny informacji zwrotnej i działania na jej podstawie. Jeśli rozważa się ją jako źródło informacji zwrotnej albo jako narzędzie oceniania, poniższe liczby warto zabrać na rozmowę o zakupie.

[[mcinnes-salvaging-constructive-alignment-genai-2026|Krytyczna analiza 14 instytucjonalnych dokumentów wytycznych]] wykazała, że ogólne prompty tworzą efekty uczenia się, aktywności i ocenianie w izolacji. Narzędzie nie może wiedzieć, jak powiązany jest temat, więc jego informacja zwrotna pozostaje ogólna zamiast diagnostycznie precyzyjnej.

Konfiguracja rzeczywiście przesuwa jakość, i to mierzalnie. W [[teacher-ai-literacy-prompt-feedback-quality-2026|badaniu informacji zwrotnej od SI dotyczącej celów uczenia się]] sam model wyjaśniał 26,9% wariancji jakości informacji zwrotnej, a dodanie promptu podniosło to do 42,8%, czyli o dodatkowe 15,9%. Jedyną cechą promptu, która miała znaczenie, była terminologia właściwa dla przedmiotu; zastąpienie jej codziennymi parafrazami istotnie pogarszało informację zwrotną. Wybór modelu też miał znaczenie: Claude 3 i Gemini Advanced dawały istotnie niżej ocenianą informację zwrotną niż ChatGPT-4.

Ocenianie jest jeszcze chwiejniejsze. [[llm-automated-grading-programming-comparison-2026|Porównanie 18 modeli językowych oceniających 6 081 zgłoszeń programistycznych]] wykazało średnie oceny od 0,290 do 0,608 w zależności od modelu, przy wskaźnikach pełnej zgodności sięgających 0,20 u niektórych i 0,74 w najlepszym przypadku. Dwóch studentów z identyczną pracą może dostać różne oceny w zależności od tego, który model wydział wykupił.

Jest jeszcze pytanie, które obchodzi studentów: czy informacja zwrotna zmienia to, co potrafią zrobić później. [[llm-feedback-handwritten-mathematics-exam-performance-2026|Semestralne wdrożenie na licencjackim kursie matematyki]] z 343 studentami angielskojęzycznymi i 236 niderlandzkojęzycznymi generowało indywidualne komentarze i ćwiczenia z fotografowanych arkuszy odpowiedzi. Oceniający najwyżej ocenili ćwiczenia, a najniżej diagnostyczną konkretność i klarowność. Randomizowane przejście krzyżowe na powiązanych pytaniach egzaminacyjnych nie wykazało istotnej statystycznie różnicy po korekcie (pHolm = 0,104), a obecność na zajęciach wiązała się z wynikami egzaminu znacznie wyraźniej niż ekspozycja na informację zwrotną (ρ = 0,49 i 0,54, oba p < 0,001). Informacja zwrotna, którą studenci cenią i na której działają, nie jest tym samym co informacja zwrotna, która wytwarza mierzalne uczenie się.

Jest jeszcze jedna pułapka, gdy pozwoli się modelowi oceniać. W [[llm-grading-self-preference-bias-2026|badaniu 1 426 prac dyplomowych z psychologii z dziesięciu lat akademickich]] wszystkie cztery oceniające modele SI najniżej oceniły prace napisane przez studentów, a najwyżej prace napisane przez SI. 10 z 16 porównań było na tyle dużych, że różnice tej wielkości są w badaniach edukacyjnych rzadkie, aż do największej zaobserwowanej luki, a obciążenie było najsilniejsze przy tekście w pełni wygenerowanym przez SI. Oceniający może nagradzać tekst za to, że jest maszynowy, nawet gdy jego instrukcja mówi, żeby oceniać treść.

## Oddzielić studentów, którym projekt pomaga, od tych, których gubi

Przeciętna poprawa może ukryć kurs, w którym silni stają się silniejsi, a słabi dostają gorsze warunki. [[digital-divide|Luka cyfrowa]] przebiega dziś co najmniej trzema liniami: dostępu do narzędzi, umiejętności ich używania i tego, kto rzeczywiście dostaje użyteczny wynik. Sama umiejętność promptowania tworzy „przywilej promptu”, w którym bardziej doświadczeni użytkownicy dostają lepszy wynik z tego samego systemu.

Przegląd 72 badań rozdziela dwa mechanizmy. Luka umiejętności pojawia się tam, gdzie studenci z silniejszą [[prior-knowledge|wiedzą wcześniejszą]] zamieniają pomoc w trwałe przyrosty, a słabiej przygotowani zastępują nią ćwiczenie. Luka zasobów pojawia się tam, gdzie niezawodny internet i płatny dostęp podtrzymują lepsze korzystanie z narzędzi w instytucjach. Tylko sześć badań w korpusie badało równość bezpośrednio, co autorzy traktują jako problem, a nie przypis; [[equity-in-ai-education|równość w edukacji z SI]] to miejsce, gdzie ten argument jest rozwijany.

Pomoc może zamknąć lukę, gdy angażują się ci studenci, którzy jej potrzebują. [[co-learning-ai-agent-hidden-rules-2026|Badanie z czterema eksperymentami, w którym uczący się odkrywali ukryte reguły z pomocą agenta SI]], wykazało, że wsparcie zmniejszyło liczbę potrzebnych ruchów o 33-52%, a korzyść skupiła się u najsłabszych, podczas gdy silniejsi uczący się pozostali w dużej mierze bez zmian. To wersja optymistyczna, i zależy od tego, czy studenci najbardziej potrzebujący pomocy używają jej dobrze, czego, jak sugeruje luka umiejętności, nie osiągną bez nauczania.

## Zostawić decyzje o skutkach człowiekowi

Kompetencje nauczycieli akademickich w zakresie SI nie są tam, gdzie zakłada to rozmowa o polityce. Wśród [[science-educators-ai-literacy-postqualification-2026|nauczycieli przedmiotów przyrodniczych, którzy ukończyli już szkolenie z SI]], przeciętne kompetencje w zakresie SI wyniosły 16,7 na 30, poniżej 18,79 w próbie referencyjnej, i nie były związane z wiekiem, płcią, stażem pracy ani z tym, jak dużo używali SI. [[ai-tpack-mathematics-teacher-education-2026|Badanie ankietowe 412 przyszłych nauczycieli matematyki]] wykazało gotowość na wczesnym etapie, z przekonaniami o nauczaniu najwyżej, przy średniej 5,24 na skali 7-punktowej, a wiedzą techniczną o SI najniżej, przy 4,23.

To argument za narzędziami ograniczonymi, a nie autonomicznymi. Analiza dokumentów wytycznych proponuje skonfigurowanego instytucjonalnie agenta [[rag|z poszerzonym wyszukiwaniem]], który prowadzi myślenie bez dostarczania odpowiedzi, oznacza niezgodności i eskaluje do człowieka na brzegach, a jego uprawnienie opisuje jako „pochodne i ograniczone”. Istnieją bezpośrednie dowody na to, że lepiej trzymać ludzi w pętli niż przed nią: [[instructional-agents-multi-agent-course-gen|system generowania materiałów kursowych]] wypadał lepiej, gdy ludzie pozostawali zaangażowani, a tryb z największym udziałem człowieka poprawiał oceny recenzentów o 0,5-0,9 punktu wobec trybu w pełni autonomicznego. Jego autonomiczni recenzenci skupiali się ciasno wokół 2,9-3,1, podczas gdy oceniający ludzie rozrzucali się i różnicowali bardziej, więc autorzy zachowali osąd człowieka jako podstawowy sygnał jakości.

Praktyczna wersja dla kursu: pozwolić SI tworzyć wstępne wersje, sortować i oznaczać. Trafność, uczciwość, prywatność oraz każdą decyzję o postępach studenta trzeba pozostawić pod [[human-in-the-loop-ai|znaczącym nadzorem człowieka]]. Ryzyka, które to czynią koniecznym, to znany zestaw: obciążenie, prywatność, przejrzystość, [[agency|autonomia]] uczącego się, odpowiedzialność i [[pedagogical-safety|bezpieczeństwo pedagogiczne]]. Ta lista wyjaśnia, dlaczego [[teacher-ai-competency|kompetencja pedagogiczna w zakresie SI]] ma większe znaczenie niż techniczna znajomość narzędzi.

## Co nauczyciele akademiccy rozumieją tu błędnie

**„Wypracowana praca, którą mam przed sobą, jest dowodem, że student to potrafi.”** Jest dowodem, że praca jest wypracowana. Rozpiętość 71,84% wobec 29,85% w wynikach ćwiczeń, przy płaskich przyrostach pojęciowych w tym samym badaniu, oraz 36 badań w przeglądzie, które wykazały wydajność bez transferu, opisują odległość między wykonaniem wspomaganym a kompetencją. Jeśli artefakt jest jedyną rzeczą, która jest oceniana, to artefakt jest wszystkim, co zostało zmierzone.

**„Jeśli SI jest tutorem, to jest po właściwej stronie granicy.”** Etykieta nie niesie gwarancji. W badaniu CS1 tutor z podpowiedziami uniknął szkód, które nieograniczony ChatGPT wyrządził w ćwiczeniach, a mimo to nie dał przewagi pojęciowej nad brakiem SI. Zatrzymanie ostatecznej odpowiedzi nie jest tym samym co zatrzymanie rozumowania, a tutor może robić to drugie, wyglądając, jakby robił tylko pierwsze.

**„Detektor albo surowsza reguła rozwiązuje problem rzetelności.”** Wykrywanie dotyczy jednej reakcji z kilku. Badanie przyszłych nauczycieli wykazało, że obawa przed oskarżeniem tłumiła dozwolone użycie, że kultura programu przewidywała zachowanie lepiej niż jakakolwiek polityka kursu i że własne deklaracje zaniżały użycie w każdym kursie. Surowsza reguła zmienia to, co studenci ukrywają, a nie to, czego się uczą.

**„Jedna reguła dotycząca SI dla całego kursu jest sprawiedliwsza i prostsza.”** Prostsza, tak. Dowody przemawiają za regułami ustalanymi dla każdego zadania, bo trzy przypadki, ograniczanie, rusztowanie i wymaganie, współistnieją w większości kursów, a ta sama zgoda znaczy co innego w raporcie laboratoryjnym i w refleksji. Stanowiska całościowe są też tymi, które studenci najłatwiej obchodzą.

**„Studenci, którzy mówią, że narzędzie pomaga, uczą się z niego.”** Zadowolenie jest [[self-report-measures|miarą samoopisową]], a w badaniu CS1 najwyżej oceniany warunek był tym, który najbardziej ograniczał przetwarzanie stojące za uczeniem się. Wdrożenie na kursie matematyki pokazało ten sam rozłam: informacja zwrotna ceniona przez studentów, brak istotnej różnicy w egzaminie.

**„Kompetencje w zakresie SI to umiejętność promptowania, a studenci nabywają je, używając narzędzia.”** Frameworki traktują [[ai-literacy|kompetencje w zakresie SI]] jako rozumienie pojęciowe, umiejętność obsługi, [[critical-thinking|krytyczną ocenę]], osąd [[ethics|etyczny]] i świadomość ograniczeń. Przegląd mówi wprost, że [[prompt-engineering|inżynieria promptów]], weryfikacja wyników i analiza błędów SI to umiejętności, których można nauczyć i które nie rozwijają się przez sam kontakt. Szkoleni nauczyciele przedmiotów przyrodniczych z wynikiem 16,7 na 30 są empiryczną wersją tego twierdzenia.

**„Problem równości to dostęp.”** Dostęp jest jedną z trzech linii. Umiejętność i to, kto dostaje użyteczny wynik, to pozostałe dwie, a tylko sześć badań w korpusie badało którąkolwiek z nich bezpośrednio. Rozdanie każdemu studentowi licencji rozwiązuje najłatwiejszą z trzech części.

## Co się na Tobie odbije

**„Moi studenci mówią, że SI im pomaga.”** Zwykle rzeczywiście pomaga w pracy, która jest przed nimi, a ustalenie dotyczy tego, co zostaje potem. Pytanie o to, co potrafią jeszcze bez pomocy, daje inną odpowiedź, i dlatego istnieje oceniany krok bez wsparcia.

**„Uczę 200 studentów. Nie mogę czytać wersji roboczych ani przeprowadzać sprawdzeń ustnych.”** Nie trzeba czytać wszystkiego. Jedno zastosowanie na zajęciach albo krótkie nagrane wyjaśnienie w zadaniu o najwyższej wadze, plus wyrywkowe sprawdzenie prac wyglądających niespójnie z wcześniejszymi oddaniami, pokrywa większość ryzyka. Etapowe oddawanie prac, uzasadnienia z adnotacjami i [[eportfolio|portfolio]] procesu się skalują; podobnie ocenianie weryfikacji celowo wadliwego wyniku SI.

**„Wykrywanie to wszystko, co mamy.”** Detektory mają udokumentowane problemy z rzetelnością i uczciwością, a trafność jest trudniejszym problemem: wypracowany produkt przygotowany w domu nie pokazuje już, że osoba, która go oddała, ma tę kompetencję. Dowody procesu są tańsze niż wyścig zbrojeń i dają coś, czym można się obronić w odwołaniu.

**„Zakaz jest prostszy.”** Prostszy i zwykle zawodzi. Korzystanie w badaniu przyszłych nauczycieli szło za kulturą programu, a nie za polityką pojedynczego kursu, a deklaracje zaniżały faktyczne użycie w każdym kursie. Zakaz odbiera też możliwość zobaczenia, jak studenci użyliby narzędzia, gdy wychodzą.

**„Nie uczę o SI. To nie mój przedmiot.”** Te ustalenia dotyczą właśnie tego przedmiotu. Gdy SI wykonuje ćwiczenie, które kurs ma zapewniać, dokładnie wtedy przeszkadza, a przeszkoda ujawnia się w ocenianiu, niezależnie od tego, czy narzędzie się wspomina.

**„Dowody są zbyt nowe, żeby na nich działać.”** Częściowo prawda, i działa to w obie strony. Wiele w korpusie to krótkie interwencje, badania [[self-report-measures|samoopisowe]], pojedyncze dyscypliny albo prace z 2025 i 2026 roku, a twierdzenia z dojrzałych badań nad [[intelligent-tutoring|tutoringiem inteligentnym]] są mocniejsze niż twierdzenia o nieograniczonych uniwersalnych [[conversational-ai|chatbotach]]. Tam, gdzie za twierdzeniem stoi już badanie randomizowane, a więc rozdzielenie wykonania i uczenia się w badaniu CS1 oraz wynik dotyczący informacji zwrotnej we wdrożeniu matematycznym, to badanie jest tu cytowane. Tam, gdzie go nie ma, ustalenie trzeba traktować jako najlepszą dostępną wskazówkę, a nie utrwalone prawo, i najbardziej sceptycznie podchodzić do wyników pokazujących wyłącznie zadowolenie, szybkość zadania, jakość wyniku albo natychmiastowe wykonanie wspomagane.

## Co zrobić w tym tygodniu

**1.** Wybrać jedno zadanie, którego najtrudniej bronić. Zapisać zdanie o kompetencji na górze instrukcji zadania.

**2.** Dodać jeden krok przebiegający bez obecności SI: pięciominutowe zastosowanie na zajęciach, krótkie nagrane wyjaśnienie albo akapit napisany w sali. Dać za niego realne punkty.

**3.** Podać warunek dotyczący SI dla tego zadania i dopisać jedną linię uzasadnienia. Jeśli zadanie miesza kroki, wskazać, które są które.

**4.** Przepisać jeden prompt dawany studentom z „rozwiąż to” na „daj mi jedną podpowiedź i zadaj mi pytanie” i wyjaśnić, dlaczego.

**5.** Przed rozpoczęciem semestru przedstawić zmianę kierownikowi programu i osobie zatwierdzającej dostosowania, żeby pierwsze odwołanie nie było jednocześnie pierwszą rozmową.

## Dokąd dalej

Wersję tych nieporozumień rozbitą na poszczególne grupy interesariuszy zawiera [[addressing-common-misconceptions-ai-education|strona o typowych nieporozumieniach dotyczących SI w edukacji]]. Wymagania projektowe wynikające z ustaleń o równości i ludzkim osądzie opisuje [[equity-ethics-pedagogical-safety-research|strona o równości, etyce i bezpieczeństwie pedagogicznym]]. [[redesign-assessment-ai-era|Przeprojektowanie oceniania w erze SI]] rozwija połowę dotyczącą oceniania, a [[does-ai-help-students-learn|strona o tym, czy SI pomaga studentom się uczyć]] jest przeglądem dowodów stojącym za twierdzeniami z tej strony. Przy wyborze między przeprojektowaniem a egzekwowaniem pomocne są strony towarzyszące: [[reduce-ai-cheating|ograniczanie oszukiwania z użyciem SI]] i [[course-ai-policy|polityka kursu dotycząca SI]].
