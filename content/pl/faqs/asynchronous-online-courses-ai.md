---
title: "Jak projektować i prowadzić asynchroniczne kursy online, gdy SI może wykonać tę pracę?"
created: "2026-09-17T03:40:00-04:00"
connected_faqs: [reducing-over-reliance, course-ai-policy, verify-ai-output, group-work-ai]
weight: 68
type: faq
foundations: [academic-integrity, cognitive-offloading, learning-design]
pedagogy: [community-of-inquiry, online-teaching-and-learning, self-regulated-learning, student-engagement]
technology: [generative-ai]
assessment: [assessment]
methods: [meta-analysis-systematic-review, rct, mixed-methods-research, design-based-research]
ethics: [guardrails]
audience: [instructors, instructional designers]
level: [higher ed, adult learning]
updated: "2026-10-29T15:22:01-04:00"
translation_of: faqs/asynchronous-online-courses-ai
source_updated: "2026-10-28T11:34:12-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Semestr się zaczyna i nic nie dzieje się o wyznaczonej godzinie. Publikuje się lekturę pierwszego tygodnia, polecenie do dyskusji, pierwszy przypadek, a potem czeka, żeby zobaczyć, co wróci. To, co wraca, jest płynne, trzyma się tematu i nie mówi nic o studencie, który to przesłał. Nie ma sali, do której można wejść, nie ma twarzy, którą można odczytać we wtorek o 10:15, i nie ma pytania pogłębiającego, które można zadać, gdy student wciąż stoi obok.

Odpowiedź, którą warto dać współpracownikowi: w kursie asynchronicznym wszystko, co sala daje za darmo, trzeba zbudować celowo. Ocena powinna dotyczyć procesu, a nie gotowego pliku; trzeba utrzymać jeden pomiar, który student wykonuje bez narzędzi i bez pomocy; należy ograniczyć każdą SI, którą się rozdaje, i zatrzymać ją wewnątrz kursu; a kalendarz trzeba potraktować jako decyzję projektową. Przy każdym zadaniu warto zapytać, co student musiałby jeszcze zrobić, gdyby model wytworzył za niego gotowy produkt.

## W skrócie

**1.** Oceniać proces. Dziennik decyzji, etapowa wersja robocza albo akapit samowyjaśnienia pokazują rozumowanie, które końcowa praca ukrywa.

**2.** Utrzymać jeden pomiar bez wsparcia w każdej ocenie, która poświadcza kompetencje. Opisana poniżej luka w utrwaleniu wiedzy, widoczna w danych populacyjnych, zamyka się, gdy tylko wprowadzi się nadzorowanie.

**3.** Stosować [[asynchronous-oral-assessment-2026|ocenianie ustne asynchroniczne]] tam, gdzie stawka uzasadnia nakład produkcyjny: polecenia w trybie just-in-time, krótkie nagrania, których student nie może poprawić, rubryki wbudowane w system, transkrypcje generowane automatycznie.

**4.** Skonfigurować każdą SI, którą się udostępnia, tak aby podpowiadała, a nie odpowiadała, i osadzić ją w kursie, zamiast linkować do czegoś ogólnego.

**5.** Rozsunąć najważniejsze terminy i otworzyć przed każdym z nich okno 7-8 dni. Tyle ostrzeżenia dają dane o interakcjach.

**6.** Oceniać ruch w dyskusji: zajęte stanowisko, zakwestionowanie, udokumentowane przemyślenie na nowo.

## Zdecydować, czego dowodem jest zadanie

Kurs asynchroniczny jest odsłonięty z powodu strukturalnego. Jego dowodem uczenia się jest praca przesłana przez studenta, a takie prace są dziś tanie w wytworzeniu.

Przytoczone demonstracje całkowicie usuwają studenta z obrazu. Na rzeczywistym kursie psychologii na poziomie licencjackim autonomiczne agenty zalogowały się do systemu zarządzania uczeniem się, przeczytały materiały kursowe i wykonały oceniane prace bez nadzoru, bez udziału studenta. Dwa quizy zostały ukończone w około **12 minut** i w **mniej niż 5 minut**, oba z wynikiem **10/10**. W przypadku postu w dyskusji agent wydobył posty kolegów z grupy, a następnie sfabrykował wiarygodną pierwszoosobową historię życia, żeby na nie odpowiedzieć. Szerszy rejestr autorów obejmuje co najmniej **15 udokumentowanych przebiegów agenta** w Canvas, Moodle i Brightspace, z użyciem **siedmiu narzędzi agentowych**. Ich sposób ujęcia ma znaczenie dla sylabusa: to problem [[assessment-validity|trafności oceniania]], zanim staje się problemem [[academic-integrity|uczciwości akademickiej]], ponieważ ukończenie pracy przez agenta usuwa założenie, że przesłana praca pochodzi od osoby, której uczenie się jest oceniane ([[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou i El-Haddad, 2026]]).

Dowody przyczynowe na to, co narzędzie robi z uczeniem się, są równie bezpośrednie. W badaniu z randomizacją, w którym wzięło udział około 1 000 uczniów szkół średnich na lekcjach matematyki, nieograniczona pomoc SI podniosła wyniki ćwiczeń o **48%** i obniżyła wyniki egzaminu bez wsparcia i bez materiałów o **17%**. Uczniowie bez dostępu wypadli lepiej niż uczniowie z dostępem. Tutor z [[guardrails|ograniczeniami]], który dawał podpowiedzi zamiast odpowiedzi, usunął szkodę. O wyniku zdecydowało ograniczenie.

Dane populacyjne układają się tak samo. W **3,2 miliona interakcji w ALEKS** czas nauki nad zadaniami podatnymi na SI spadł o **26,9%** po publicznym udostępnieniu ChatGPT, a szansa poprawnej odpowiedzi na nadzorowane zadania sprawdzające utrwalenie spadła o **25%**. Efekt zniknął, gdy wprowadzono nadzorowanie. To zniknięcie jest tym, co najbardziej przydaje się w projektowaniu kursu, ponieważ lokuje skrót poza platformą i pokazuje, że szkoda żyje w warunkach, które się ustawia.

Jest też cichsza porażka, przeciw której trzeba projektować. [[metacognitively-discordant-completion-genai-2026|Metapoznawczo niezgodne ukończenie]] nazywa stan, w którym student oddaje poprawną, kompletną pracę, wiedząc prywatnie, że zrozumienie nigdy nie przyszło. W sali można to wychwycić w zawahaniu studenta. W kursie asynchronicznym jedynym kanałem jest przesłana praca, a poprawna praca czyta się jako sukces. Projektowanie [[assessment|oceniania]] jest pierwszą dźwignią.

## Umieścić dowód w procesie

Jeśli gotowy produkt niczego nie dowodzi, dowód musi pochodzić z tego, jak praca powstała, albo z warunku, którego student nie może delegować.

**Artefakty ujawniające proces** to najtańsza zmiana i działają w skali: etapowo oddawane prace z wymaganym dziennikiem decyzji na etapie pośrednim, jednakapitowe samowyjaśnienie dołączone do każdej odpowiedzi, adnotacja źródła, plan poprawiony po informacji zwrotnej. Uchwytują [[cognitive-offloading|rozumowanie]], a nie jego pozostałość, i kosztują prowadzącego stosunkowo niewiele przy przeglądzie.

**Asynchroniczne ocenianie ustne** ma największą wagę tam, gdzie trzeba poświadczyć kompetencje. [[asynchronous-oral-assessment-2026|Pentland, Lowenthal i Krier (2026)]] przeanalizowali ocenianie prowadzone przez internet, które dostarcza polecenia w trybie just-in-time, każe studentom nagrywać krótkie, ograniczone czasowo odpowiedzi kamerą, do których nie mogą wrócić, i ocenia według wbudowanych rubryk, podczas gdy transkrypcje powstają automatycznie. W dwóch badaniach, pilocie na średnim kursie rachunkowości i kursie analityki danych, studenci uzyskali wyższe wyniki niż na egzaminach testowych prowadzonych osobiście. Różnica była istotna w drugim badaniu, a w pierwszym dodatnia, ale nieistotna, przy umiarkowanych korelacjach między formatami wspierających trafność zbieżną [[assessment-validity|oceniania]]. Studenci relacjonowali, że przygotowywali się inaczej, stosowali więcej [[active-learning|aktywnych]] strategii uczenia się i traktowali ten format jako zawodowo istotny. Dla kursu bez wspólnej godziny to najbliższy odpowiednik strukturalny: myślenie dzieje się na żywo, w czasie i miejscu wybranym przez studenta, przy koszcie administracyjnym, który nie rośnie wraz z liczebnością grupy.

**Jeden pomiar bez wsparcia** należy do każdego kursu, którego ocena poświadcza wiedzę. Wynik z ALEKS jest argumentem: przy nadzorowaniu luka w utrwaleniu zniknęła. Warto powiedzieć studentom, dlaczego ten warunek istnieje. To uzasadnienie należy do [[course-ai-policy|polityki kursowej wobec SI]].

## Zdecydować, gdzie narzędzie stoi w sekwencji

Gdy produkt przestaje być wiarygodnym dowodem, kolejność pracy staje się częścią projektu oceniania.

[[brcic-effortless-trap-productive-struggle-2026|Brcic i Frljic (2026)]] stawiają umiejscowienie w centrum argumentu: wybór między pozwoleniem a zakazem jest fałszywym wyborem, a pytaniem projektowym, które ma znaczenie, jest **gdzie stoi narzędzie**. Zbierane przez nich dowody przyczynowe pokazują, że wynik odwraca się już przy samej zmianie umiejscowienia. Ten sam nieograniczony pomocnik, który zostawił uczniów szkół średnich o około **17% gorszych** na egzaminie bez wsparcia, nie wyrządził szkody, gdy przebudowano go tak, aby nie udzielał odpowiedzi, a dobrze zaprojektowany [[intelligent-tutoring|tutor]] mniej więcej **podwoił** uczenie się. Ich sześcioelementowa rama umieszczania narzędzia (prime, probe, point, attach, strengthen, test) jest jednym użytecznym menu. Warto zachować ich test diagnostyczny: *jeśli wpuszczenie SI sprawia, że zadanie wydaje się bezwysiłkowe, narzędzie stoi w złym miejscu.* Złe umiejscowienie pozostawia iluzję uczenia się, która załamuje się przy zadaniu bez wsparcia, czyli stan opisywany jako [[metacognitively-discordant-completion-genai-2026|metapoznawczo niezgodne ukończenie]].

Zapisane w poleceniu, daje to sekwencję, którą można wydrukować na karcie zadania:

**Pomyśl, zajmij stanowisko, użyj SI, skrytykuj, popraw, wyjaśnij.**

Studenci podejmują pracę intelektualną i zajmują stanowisko wobec wstępnej interpretacji, przewidywania, konspektu lub decyzji. Potem wchodzi model, żeby dać informację zwrotną, alternatywy, kontrargumenty albo krytykę. Następnie studenci oceniają to, co model wytworzył, poprawiają pracę i wyjaśniają, co się zmieniło i dlaczego. To krok zajęcia stanowiska sprawia, że reszta jest możliwa do ocenienia. Student bez stanowiska nie ma czego poprawiać, a artefakt napisany przez model od zera nie ma w ogóle historii poprawek.

Nadmierna korekta, której trzeba unikać: zbieranie wszystkich promptów i dokumentowanie każdego naciśnięcia klawisza daje nakład pracy bez dowodu. Warto prosić o te punkty decyzyjne, które naprawdę się przeczyta: które dowody wybrano, którą alternatywę odrzucono, co zmieniło się po krytyce.

## Połączyć zadanie, którego nie da się obronić, z bliźniakiem

Opcja strukturalna polega na tym, żeby przestać wybierać między zadaniem uzasadnionym pedagogicznie a zadaniem obronnym. [[roe-assessment-twins-2026|Roe, Perkins i Giray (2026)]] proponują **bliźniaki oceniania**: połączyć zadanie podatne na SI, na przykład esej lub analizę pisaną w domu, z drugim, mniej podatnym zadaniem, które ocenia *te same* efekty uczenia się, zaplanowanym wystarczająco blisko, by możliwa była weryfikacja krzyżowa, i ocenianym współzależnie. Ich mapowanie przechodzi przez sześć nici dowodów trafności Messicka, a ich proces projektowy ma trzy kroki: zidentyfikować podatności, dopasować efekty i wybrać bliźniaka, a następnie opracować ocenianie, które łączy oba zadania. Analiza pisana w domu zachowuje wartość dla pogłębionego dociekania. Bliźniakiem może być krótka wariacja przypadku, wyjaśnienie jednej kluczowej decyzji albo krótka obrona ustna lub multimedialna.

Pytanie towarzyszące dotyczy autorstwa. [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani i Buckingham Shum]] twierdzą, że współautorstwo z generatywną SI podkopuje kilka form dowodów trafności, i proponują **uczciwość współautorstwa** jako samodzielne źródło dowodów trafności, naruszane wtedy, gdy student oddaje treść wygenerowaną przez SI, której nie rozumie. Aby sprawdzać autorstwo w skali, opisują prace nad **AI Viva**: agentem konwersacyjnym, który prowadzi hybrydowe viva voce, zadając pytania sprawdzające o kontrolowanym typie i złożoności, zwalidowanym dogłębnie przez ekspertów dydaktyki i specjalistów od oceniania. Warto zestawić to z nadzorowaniem wszystkiego. Ustna obrona własnego rozumowania skaluje się tam, gdzie nadzór nad salą się nie skaluje, i daje dowód dotyczący zrozumienia.

## Zdecydować, co wolno SI, którą się udostępnia

Znaczenie ma różnica między osadzoną, ograniczoną SI a chatbotem bez przywiązania do kursu. Te dwa rozwiązania dają różne wyniki.

[[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Asystent AIDA w Open University]] jest najlepiej udokumentowanym przypadkiem osadzonym: sześć iteracyjnych badań projektowych w ciągu 18 miesięcy, z 498 studentami i 20 osobami personelu, w instytucji obsługującej ponad 200 000 uczących się w ponad 50 krajach. W eksploracyjnym badaniu z randomizacją studenci korzystający z AIDA spędzili **dwa razy więcej czasu** i odwiedzili więcej stron swojego kursu niż grupa kontrolna, a **96%** chciało mieć asystenta dostępnego w formalnej nauce. Doświadczenie tej samej instytucji z zewnętrznym chatbotem bez przywiązania do kursu potoczyło się w drugą stronę.

[[lock-integrating-ai-online-learning-higher-ed-2025|Przegląd autorstwa Lock, Arteaga i Johnson (2025)]], 63 cytowania z 32 krajów, dodaje warunek społeczny: studenci, którzy używali ChatGPT *obok* tutoringu prowadzonego przez nauczyciela, odczuwali większe [[learning-gains|przyrosty uczenia się]] niż ci, którzy używali go sami. Asystent uzupełnia prowadzącego albo zastępuje relację, a tylko jedno z tych dwóch jest projektem kursu.

Dwie ostrożności zasługują na uwagę. Porażka KhanMigo nie była techniczna. Uczący się nie podejmowali interakcji z chatbotem, a dowody na przyrosty były ograniczone, co wskazuje na [[governance|gotowość organizacyjną]] i dopasowanie dydaktyczne. Strona prowadzących też nie jest gotowa: w porównaniu kształcenia nauczycieli w Republice Południowej Afryki deklarowany TPACK do nauczania przedmiotów przyrodniczych zintegrowanego z SI wyniósł **64,0%** na uniwersytecie kształcącym stacjonarnie wobec **47,4%** na uniwersytecie kształcącym na odległość, przy wiedzy pedagogicznej jako najsłabszej domenie w obu przypadkach ([[online-teaching-and-learning]]). Wdrożenie asystenta w kursie asynchronicznym nie szkoli ludzi, którzy muszą oceniać jego wyniki.

## Oceniać ruch w dyskusji

Fora dyskusyjne to miejsce, w którym kurs asynchroniczny buduje [[community-of-inquiry|wspólnotę dociekania]] albo po cichu staje się skrzynką na zgłoszenia. Dwa odkrycia powinny kształtować to, co się tam automatyzuje.

Czas jest najtrudniejszą częścią. [[llm-facilitation-timing-online-discussions|Tsirmpas i współpracownicy]] zbudowali korpus PEFK do porównywania zbiorów danych o facylitacji, a następnie przeprowadzili pierwsze badanie *wyczucia czasu* facylitacji z udziałem ekspertów prowadzących facylitację i sędziów LLM. Ludzie byli ostrożniejsi w podejmowaniu interwencji. Modele LLM były nadmiernie skłonne do działania. Obie grupy były pewniejsze, gdy oceniały, że facylitacja **nie** jest potrzebna, niż gdy oceniali, że jest. Wytrenowane modele klasyfikacyjne wypadły lepiej niż konfiguracje LLM, a nawet wtedy istniejące zbiory danych ograniczały wyniki. Wniosek praktyczny: trzymać autonomiczną moderację poza ścieżką krytyczną, a jeśli SI ma w ogóle brać udział w dyskusji, skonfigurować ją tak, aby domyślnie milczała.

Podsumowania pomagają studentom poruszać się po forum, nie zmuszając ich do uczestnictwa. W badaniu ze 128 studentami uczelni wyższej w trzech iteracjach [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao i Cukurova (2026)]] stwierdzili, że generowane przez SI podsumowania dyskusji poszerzyły ekspozycję na wkład innych studentów i wzmocniły łączność sieciową, czyli słabe więzi, które teoria kapitału społecznego nazywa mostowymi, obniżając wysiłek potrzebny do znalezienia sensownych postów. Nie zatrzymały jednak spadku aktywności przeglądania w trakcie kursu. Podsumowywanie jest [[scaffolding|rusztowaniem]] nawigacyjnym.

Struktura, która się utrzymuje, jest sekwencją, a nie wątkiem: **stanowisko, zakwestionowanie, przemyślenie.** Studenci zajmują stanowisko wobec interpretacji osadzonej w materiale kursowym, potem spotykają inną perspektywę, kontrprzykład lub krytykę, a następnie wyjaśniają, czy ich rozumowanie się przesunęło i jak. Ocenia się ruch między ideami. Przesłany post plus dwie odpowiedzi przestały to pokazywać w momencie, gdy agent potrafił wydobyć posty rówieśnika i podszyć się pod historię życia kolegi z roku.

Ponieważ agent naśladuje zachowanie powierzchniowe, własny wkład prowadzącego staje się zasobem rzadkim. Mechaniczne odpowiadanie na dziesiątki pojedynczych postów jest najsłabszą formą obecności dydaktycznej; syntetyzowanie całej dyskusji jest najsilniejszą: *w analizach wciąż pojawiają się trzy założenia; kilka osób czyta ten dowód inaczej; ten argument przekonuje, dopóki nie wprowadzimy tego kontrprzykładu.* To [[teacher-role|orkiestrowanie]], a nie produkcja wiadomości.

Pytanie ramowe pod oboma dotyczy odpowiedzialności. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim i Anderson (2026)]] twierdzą, że generatywna SI podważa przyjmowane w [[community-of-inquiry|ramie wspólnoty dociekania]] założenie, że wskaźniki obecności można w ogóle przypisać ludziom. Traktują GenAI jako warunek epistemiczny, a obecności jako osiągnięcia socjotechniczne, których związek z jakością dociekania zależy od tego, gdzie ulokowana jest ludzka odpowiedzialność. Konkretnie: warto zdecydować i powiedzieć, kto za co odpowiada w każdej wymianie, zamiast zakładać, że obecność powstaje dlatego, że forum istnieje.

## Utrzymać tempo bez sali, do której można wejść

Formaty z własnym tempem zakładają [[self-regulated-learning|samoregulację]] i rzadko jej uczą. Dowody na to, które zachowania rzeczywiście wiążą się z utrzymaniem skupienia na zadaniu, są wyjątkowo praktyczne.

W badaniu ankietowym 530 studentów uczelni wyższej z użyciem eksploracji reguł asocjacyjnych i grupowania [[decreasing-digital-distraction-college-online-learning-2026|Shi i in. (2026)]] stwierdzili, że zachowania związane z samoregulacją uczenia się, **wyznaczanie celów, strukturyzowanie środowiska i zarządzanie czasem**, współwystępowały najstabilniej z niskim rozproszeniem cyfrowym, obok [[student-engagement|zaangażowania]] na linii student-prowadzący i student-treść oraz kompetencji technicznej. Poleganie na pomocy rówieśników i zaangażowanie student-student pojawiały się w profilach niskiego rozproszenia *rzadziej*. Warto ustrukturyzować środowisko i harmonogram, zanim zaprojektuje się kolejną aktywność grupową.

Samoregulacja nie jest też stałą cechą. W badaniu obejmującym cały semestr z 75 studentami pierwszego roku [[song-genai-learning-partner-srl-over-time-2026|Song i in. (2026)]] stwierdzili, że funkcjonuje ona zarówno jako stabilna zdolność, jak i jako zmienny stan. Indywidualne poziomy wyjściowe pozostawały stabilne, podczas gdy wiedza metapoznawcza i [[well-being|dobrostan]] spadały systematycznie w ciągu semestru, pod wpływem wymagań programu, takich jak najważniejsze terminy oceniania. Nagromadzenie terminów może być efektywnym wyborem administracyjnym, jest jednak także mierzalnym obciążeniem dla regulacji, na której opiera się ten format.

Okno interwencji jest poznawalne. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries i Koprinska (2025)]] pokazali, że interpretowalne uczenie maszynowe na logach interakcji z treścią przewiduje postęp na poziomie modułu i sygnalizuje ryzyko porzucenia kursu nawet **7-8 dni przed terminami modułów** w wielkoskalowych internetowych kursach programowania. To wystarczające wyprzedzenie, by wysłać konkretną zachętę do konkretnego studenta, co jest lepsze niż odkrycie porażki przy ocenianiu. Dla [[adult-learning|uczących się dorosłych]] i uczących się na odległość wytyczne projektowe AI-ALOE dodają ograniczenie, które liczy się najbardziej: dostęp mobilny, możliwość pracy offline i rzeczywista dostępność asynchroniczna, ponieważ ci uczący się uczą się we fragmentach czasu między innymi obowiązkami.

## Zdecydować, co automatyzować w produkcji

Dwa zastosowania mają za sobą rozsądne dowody i oba dotyczą obciążenia prowadzącego.

**Koszt produkcji.** [[mooc-to-maic|MAIC]] przeformułowuje model MOOC, w którym jeden film trafia do N studentów, na model N agentów dla jednego studenta, wykorzystując wyspecjalizowane agenty nauczyciela, asystenta, kolegi z grupy i analityka na wspólnej podstawie modelowej. Autorzy relacjonują skrócenie produkcji kursu z około **25 000 dolarów i 60 godzin** na MOOC do **poniżej 2 dolarów i 30 minut**, w pilocie na Uniwersytecie Tsinghua w dwóch kursach, z **ponad 100 000 rekordów uczenia się od ponad 500 studentów**, i udostępnienie rozwiązania jako otwartoźródłowego OpenMAIC. Personalizowane media to ta sama idea na poziomie zasobu: w dużym kursie internetowym [[personalized-ai-generated-videos-preference-2026|Tomlinson i in. (2026)]] stwierdzili, że studenci woleli generowane przez SI filmy personalizowane od niepersonalizowanych nagrań z człowiekiem, przy czym efekt personalizacji przeważał nad wartością przypisywaną ludzkiemu prezenterowi.

**Nawigacja po forum.** Opisane wyżej rusztowanie podsumowań obniżyło koszt lokalizowania dobrych wypowiedzi, nie zwiększając obciążenia prowadzącego lekturą.

Trzy zadania zostają przy ludziach: rozstrzygnięcie, czy dany tekst jest myślą studenta, ocena, czy dyskusja wymaga interwencji, i kalibracja trudności. Materiały generowane wymagają też przeglądu dydaktycznego, zanim staną się podstawą zaliczenia. Tania produkcja to osobne pytanie od trafnego projektu.

## Nazwać rolę SI i sprawdzić, czy student nadal ma swoją

„Studenci mogą korzystać z SI” to zbyt szeroka specyfikacja, by projektować przeciwko niej. Nazwanie roli jest tym, co czyni aktywność projektowalną, a role niosą konsekwencje dla obecności: badanie generatywnej SI w edukacji marketingowej rozróżnia **tutora, członka zespołu i narzędzie**, pokazuje, że każda z ról wpływa inaczej na obecność dydaktyczną, społeczną i poznawczą, i wymienia znane zagrożenia etyczne: prywatność danych, plagiat, zależność i sprawiedliwość oceniania ([[genai-marketing-education-roles-2026|GenAI w edukacji marketingowej]]). Ten sam model może być pytającym sokratejskim przed zadaniem, krytykiem po pierwszej wersji, symulowanym interesariuszem w analizie przypadku, przeciwnikiem, którego argument trzeba odeprzeć, tutorem podpowiadającym w czasie ćwiczeń albo redaktorem wprowadzonym wtedy, gdy merytoryczne rozumowanie już istnieje. To różne aktywności, a ich zmieszanie jest sposobem, w jaki „SI jest dozwolona” zaczyna znaczyć „nic nie zostało zaprojektowane”.

[[scaffolding]] dostarcza testu. Wsparcie powinno pomagać uczącym się robić to, czego jeszcze nie potrafią zrobić sami, i powinno wycofywać się w miarę rozwoju kompetencji. Model, który wciąż dostarcza kompletne rozwiązania, wykonuje zadanie za studenta. Dla każdej aktywności z SI powinno dać się bez wahania dokończyć to zdanie:

*Zadaniem SI jest tu _____, a zadaniem studenta jest ________.*

Jeśli w drugą lukę wpada niewiele myślenia, aktywność wymaga przeprojektowania.

## Prosić o ocenę odpowiedzi, której student nie napisał

[[ai-literacy]] obejmuje krytyczną ocenę, osąd [[metacognition|metapoznawczy]] i wiedzę o tym, kiedy pominąć narzędzie. Deklarowana pewność siebie jest słabym wskaźnikiem zastępczym dla pokazanej kompetencji.

Jedna zmiana, którą każdy kurs asynchroniczny może wprowadzić od razu: **czasem to prowadzący wręcza studentom wynik pracy SI.** Warto podać dwie konkurencyjne odpowiedzi i zapytać, która jest mocniejsza i dlaczego. Warto prosić o najsłabsze twierdzenie, brakujące założenie, źródło niemożliwe do zweryfikowania, wiarygodne wyjaśnienie, które jednak jest błędne. Warto pytać, jaki dowód zmieniłby zdanie studenta.

Ujęta w ten sposób, oceniana zdolność to rozpoznanie odpowiedzi, której można zaufać; jest to bliższe wymaganiom dyscypliny i znacznie trudniejsze do delegowania. [[verify-ai-output|Praktyki weryfikacji]] to miejsce, w którym ta technika żyje. Tutaj liczy się to, żeby ocenianie umieścić wewnątrz ocenianego zadania, a nie zostawić je jako radę w ogłoszeniu modułu.

## Co projektanci kształcenia rozumieją błędnie w kursach asynchronicznych

Problemem jest przesłana praca, więc to ją trzeba naprawić. Jest też jedynym kanałem, jaki pozostaje, dlatego samo zaostrzenie wymagań wobec artefaktu niewiele zmienia. Warto dodać drugi kanał: zapis procesu, nagrane wyjaśnienie, jeden pomiar bez wsparcia.

Elastyczność oznacza, że student sam zarządza tempem. Format zakłada samoregulację, a badanie semestralne z 75 studentami pokazuje spadek wiedzy metapoznawczej i dobrostanu w miarę nagromadzenia terminów. Tempo jest decyzją projektową podejmowaną za studentów.

Forum to uczestnictwo, więc liczę posty. Opisana wyżej demonstracja agenta wytworzyła post, który wydobył treści rówieśników i wymyślił historię życia; licznik nie odróżni go od dobrego postu. Podsumowania Hao i Cukurovej poprawiły nawigację, a aktywność przeglądania i tak spadała.

Dodanie asystenta czyni kurs zintegrowanym z SI. AIDA była zbudowana celowo, osadzona i iterowana w sześciu badaniach; zewnętrzny chatbot w tej samej instytucji potoczył się inaczej, a uczący się KhanMigo po prostu nie podjęli interakcji.

Dowód procesu oznacza dokumentowanie wszystkiego. Zbieranie każdego promptu i każdego naciśnięcia klawisza daje papierologię i niewiele więcej. Wersja warta oceniania prosi o kilka punktów decyzyjnych: które dowody wybrano, którą alternatywę odrzucono, co zmieniło się po krytyce.

## Co się na Tobie odbije

**„To dorośli, którzy sami wybrali kurs asynchroniczny. Jeśli pozwolili SI napisać pracę, to ich decyzja.”** Argument o wyborze byłby trafny, gdyby kurs niczego nie poświadczał. A poświadcza. Dowody z ALEKS pokazują, że skrót wytwarza pozór kompetencji, który nie przetrwa nadzorowanego sprawdzenia, a koszt pojawia się później: w następnym kursie, na egzaminie uprawniającym albo w pracy. Jest tu też wymiar równościowy: uczący się najczęściej skłonni do oddania pracy narzędziu to często ci z najmniejszą ilością czasu, a właśnie tej grupie kurs asynchroniczny ma służyć.

**„Rozwiązaniem jest detekcja.”** Detekcja jest sporna, a wynik badania z nadzorowaniem pokazuje, dlaczego projekt wygrywa z pilnowaniem: szkoda zniknęła, gdy zmieniły się warunki. Detekcja niesie też koszty fałszywych trafień i zamienia nauczanie w wyścig zbrojeń. Warto przeprojektować zadanie i utrzymać jeden pomiar bez wsparcia. Zobacz [[reduce-ai-cheating]] i [[redesign-assessment-ai-era]].

**„Obecność dydaktyczna na odległość jest niemożliwa, więc tryb asynchroniczny jest z natury gorszy.”** Obecność w kursie asynchronicznym jest projektowana. Przytoczone wyżej przeformułowanie ramy CoI mówi, że jej wskaźniki są w erze GenAI osiągnięciami socjotechnicznymi, a badanie pilotażowe AIDA podwoiło czas pracy nad zadaniem w kursie bez żadnych spotkań synchronicznych.

**„Nadzorowanie to inwigilacja i nie wprowadzę go.”** To stanowisko, którego można bronić, i zostawia ono otwarte opcje. Artefakty ujawniające proces, asynchroniczne ocenianie ustne i AI Viva uchwytują rozumowanie bez monitorowania czyjegokolwiek pokoju. Jeśli jednak wprowadza się warunek nadzorowany, trzeba go wpisać do sylabusa, wyjaśnić uzasadnienie i ograniczyć do ocen, które poświadczają kompetencje.

**„To zróbmy wszystko synchronicznie i pod nadzorem.”** Wielu studentów wybiera naukę asynchroniczną z powodu pracy zarobkowej, obowiązków opiekuńczych, niepełnosprawności lub geografii. Detekcja też ma swoje koszty równościowe: narzędzia oznaczające osoby piszące w języku innym niż ojczysty dają nieproporcjonalnie wiele fałszywych trafień, które karzą uczciwą pracę ([[ai-detection]]). Proporcjonalna alternatywa to niewielka liczba momentów weryfikacji w elastycznym kursie: krótkie nagrane wyjaśnienie, spersonalizowane zastosowanie, odpowiedź na pytanie wybrane przez prowadzącego, opatrzony komentarzem ślad decyzji, sprawdzian indywidualny o niskiej stawce. Weryfikacja powinna podnosić trafność dowodów i zachowywać elastyczność, dla której ten format warto oferować.

## Czego dowody nie rozstrzygają

[[ai-distance-education-systematic-review-2026|Przegląd systematyczny dotyczący SI w edukacji na odległość]] (56 artykułów, 2020-2025) obejmuje personalizację (24 badania), ocenianie i informację zwrotną (19), interakcję człowiek-SI (17) oraz zarządzanie i równość, i dochodzi do wniosku, że baza jest krótkoterminowa i przekrojowa, z niewielką liczbą prac podłużnych. [[ai-student-engagement-online-learning-review-2025|Przegląd dotyczący SI i zaangażowania studentów w uczeniu się online]] (24 badania) ogranicza się do jednej bazy, zajmuje się wyłącznie zaangażowaniem i miesza konteksty synchroniczne z asynchronicznymi, więc jego wnioski nie dotyczą specyficznie trybu asynchronicznego. Asynchroniczne ocenianie ustne opiera się na dwóch badaniach w dwóch kursach. MAIC jest pilotażem. Zbiory danych o wyczuciu czasu facylitacji ograniczają wyniki nawet przy wytrenowanych klasyfikatorach. Żadne z przytoczonych badań nie śledzi kohorty asynchronicznej wystarczająco długo, by pokazać, czy przeprojektowane ocenianie daje trwałe uczenie się, czy tylko lepszy jego dowód. Wszystko to jest wystarczająco mocne, by zmienić następny kurs, i zbyt cienkie, by uzasadnić twierdzenie o charakterze polityki.

## Co zrobić w tym tygodniu

**1.** Wybrać ocenę o najwyższej stawce i dodać do niej jeden warunek, który student wykonuje bez wsparcia. Powiedzieć studentom, dlaczego istnieje.

**2.** Wziąć zadanie, które SI potrafi dziś wykonać od początku do końca, i przepisać je tak, żeby artefaktem był proces: dziennik decyzji, etapowa wersja robocza, samowyjaśnienie, porównanie dwóch podejść.

**3.** Zamienić jedną ważną ocenę na asynchroniczną obronę ustną z wbudowanymi rubrykami i ustawić zgodę na SI dla każdego zadania w sylabusie, tam gdzie studenci naprawdę będą to czytać.

**4.** Rozsunąć najważniejsze terminy i zarezerwować okno 7-8 dni przed terminem na kontakt ze studentami, których dane o interakcjach ucichły.

**5.** Zadać trzy pytania o najsłabsze zadanie. Czy system SI mógłby wykonać tę aktywność bez rozumienia materiału przez studenta? Jaka aktywność poznawcza ma tu wytworzyć uczenie się? Jaki dowód pokaże, że student rzeczywiście tę aktywność wykonał? Jeśli odpowiedź na pierwsze pytanie brzmi „tak”, a na dwa pozostałe trudno odpowiedzieć, problem leży w projekcie uczenia się i żadne sformułowanie polityki go nie naprawi.

**Dokąd dalej:** zasady na poziomie kursu należą do [[course-ai-policy]]; przebudowa oceniania jest omówiona w [[redesign-assessment-ai-era]]; problem nadmiernego polegania pod tym w [[reducing-over-reliance]]; obciążenie prowadzących i to, co SI realnie zdejmuje, w [[ai-save-instructor-time]]; a widok projektowy osadzania SI w doświadczeniu uczenia się w [[designing-ai-into-learning]].
