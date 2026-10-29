---
title: "Jak uczyć studentów weryfikowania wyników SI?"
created: "2026-09-16T15:58:20-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/verify-ai-output
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Jest tydzień przed wystawieniem ocen i dwie prace cytują źródła, które nie istnieją. Obaj studenci twierdzą, że sprawdzili. Jeden otworzył link. Drugi przeczytał akapit i uznał, że brzmi prawidłowo. Grupa została już poinformowana, że trzeba weryfikować to, co daje chatbot, i samo poinformowanie nie wytworzyło zachowania.

Weryfikacja jest sekwencją, którą można wbudować w zadanie. Należy zdecydować, co uchodzi za poprawne, zanim zadanie się zacznie, sprawić, by student zapisał oczekiwanie, odesłać go do rejestru zamiast do wrażenia o prozie i ocenić rejestr, który wytworzy. Wiersz rubryki mówiący „sprawdzone źródła” nie mierzy niczego z tego.

## W skrócie

**1.** Najpierw napisz klucz odpowiedzi. Sprawdzenie potrzebuje czegoś, wobec czego można je rozstrzygnąć, a większość zadań weryfikacyjnych nigdy nie definiuje, co znaczy „poprawne”.

**2.** Wymagaj predykcji, zanim pojawi się wynik, aby rozumowanie studenta istniało na papierze, zanim narzędzie będzie mogło je nadpisać.

**3.** Nazwij cel każdego sprawdzenia: listę autorów, miejsce publikacji, rok, konkretną liczbę, konkretny krok. „Upewnij się, że to jest dobrze” nie jest sprawdzeniem.

**4.** Oddziel sprawdzenie, które może wykonać maszyna, od osądu, którego może dokonać tylko czytelnik, i ucz studentów, które z nich wykonują.

**5.** Oceniaj rejestr wobec klucza, a nie wobec wysiłku, aby teatr sprawdzania nie przynosił nic.

**6.** Zaplanuj sprawdzenie w obrębie zadania. Presja czasu jest udokumentowanym powodem, dla którego studenci je pomijają.

## Zdecyduj, co znaczy poprawne, zanim ktokolwiek cokolwiek sprawdzi

[[verification-quality-reliance-calibration-genai-2026|Wei i Shang (2026)]], analizując 493 zdeduplikowane rekordy i mapując 14 priorytetowych badań empirycznych, oddzielają siedem rzeczy, które „krytyczne korzystanie z SI” spłaszcza w jedną: ocenę epistemiczną, inicjację weryfikacji, jakość procesu, powodzenie weryfikacji, decyzje o poleganiu, natychmiastowy wynik w zadaniu i samodzielne uczenie się. Rubryka mówi „sprawdzone źródła”, co odpowiada drugiemu etapowi i nie mówi nic o tym, czy sprawdzenie było kompetentne ani czy zmieniło odpowiedź studenta. Inicjacja nie jest powodzeniem. Silny proces może zakończyć się bezrozstrzygająco, słaby może trafić na właściwą odpowiedź, a student, który wykonał wyszukiwanie i pozostał zdezorientowany, oceniany jest tak samo jak ten, który rozstrzygnął pytanie.

Ten sam przegląd rysuje drugą linię, między [[trust|zaufaniem]] a poleganiem. [[trust-calibration|Kalibracja polegania]] pyta, czy decyzja o poleganiu była odpowiednia ze względu na faktyczną jakość wyniku, co wiąże osąd z jedną decyzją i jednym wynikiem. Jedno z audytowanych badań wykazało, że fałszywa informacja od ChatGPT zmieniła deklarowane zaufanie uczestników, i nigdy nie odnotowało, czy później przyjęli lub odrzucili konkretne zalecenie. Inne rejestrowało decyzje o przyjęciu i odrzuceniu w [[feedback|informacji zwrotnej]] ChatGPT u 78 studentów tłumaczenia, ale bez niezależnej oceny eksperckiej przyjęcia nie można nazwać odpowiednim, a odrzucenia uzasadnionym. Bez wiedzy o rzeczywistej jakości wyniku polegania nie da się w ogóle sklasyfikować.

To jest konsekwencja projektowa i pierwsza rzecz do naprawienia. Zanim zostanie ustawione zadanie weryfikacyjne, trzeba napisać dwa krótkie opisy: jak wygląda poprawny wynik tego zadania i jak wygląda wynik prawdopodobny, ale błędny. Po jednym wystarczy. Studenci mają wtedy standard, wobec którego sprawdzają, a prowadzący ma coś, wobec czego można ocenić sprawdzenie, inne niż wrażenie, że student brzmi starannie.

## Pozwól im zobowiązać się, zanim narzędzie odpowie

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] buduje program pomiaru wokół zasady *najpierw przewidź, potem uruchom*: uczący się stwierdza, co powinno się stać, a następnie zachowanie artefaktu jest oceniane wobec tej predykcji na podstawie wiedzy dziedzinowej, a nie tego, czy artefakt działa.

Jego audyt 24 badań wykazał, że to samo narzędzie daje przeciwne wyniki przy różnych strukturach zadania. Konwencjonalna konfiguracja ChatGPT kończyła się istotnie niższymi osiągnięciami, [[self-efficacy|poczuciem własnej skuteczności]] i poczuciem przepływu, podczas gdy warunek z dodatkowymi wymogami weryfikacji i modułami refleksji nad błędami dawał silniejsze [[critical-thinking|myślenie wyższego rzędu]]. Narzędzie było w tych warunkach stałe. Zmieniało się to, czy zadanie wymagało od studenta zajęcia stanowiska, które narzędzie mogło zakwestionować.

W praktyce to jedna linia na karcie zadania: przed otwarciem narzędzia zapisz, czego oczekujesz, że ono powie, i dlaczego. Potem porównaj. Dwaj studenci mogą wytworzyć ten sam akapit, a tylko jeden z nich potrafi wyjaśnić, gdzie akapit odbiega od tego, co przewidział.

## Odeślij ich do rejestru

[[citation-errors-hallucinations-computing-education-2026|Denny i in. (2026)]] prześledzili 113 588 odwołań z 5 225 prac z zakresu edukacji informatycznej opublikowanych od 2021 roku i ręcznie zweryfikowali 828 podejrzanych rekordów. Znaleźli 30 zawierających weryfikowalnie sfabrykowane informacje bibliograficzne w 14 pracach, wszystkie z lat 2025 i 2026. Trzynaście było całkowicie wymyślonych. Pozostałe 17 łączyło prawdziwy tytuł ze sfabrykowanym lub błędnym autorstwem, miejscem publikacji lub rokiem. Na SIGCSE Technical Symposium liczba wzrosła z 3 w materiałach z 2025 roku do 17 w 2026 roku, czyli 2,3% prac w tamtym roku.

Pole autorów zawodzi częściej niż jakakolwiek inna część wygenerowanego przypisu. To jedno ustalenie mówi, o co prosić. „Otwórz źródło i przeczytaj listę autorów” celuje w pole najbardziej narażone na błąd i daje fakt, który student albo ma, albo go nie ma. „Upewnij się, że źródła są prawdziwe” daje zapewnienie. Studentów należy prosić o potwierdzenie autorów, miejsca publikacji i roku wobec samego rejestru. Praca postuluje, by każde cytowane dzieło było zweryfikowane, a każdy automatyczny sprawdzacz pozostawał [[human-in-the-loop-ai|z człowiekiem w obiegu]], co jest dokładnie nawykiem, który ćwiczy wymóg cytowania.

## Oddziel sprawdzenie, które może wykonać maszyna, od osądu, którego może dokonać tylko czytelnik

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] wyznacza próg, którego można bronić, dla tego, co da się sprawdzić mechanicznie: udokumentowane kryteria, porównanie z ustaloną wiedzą bez osądu interpretacyjnego oraz jedna poprawna odpowiedź lub z góry określone akceptowalne alternatywy. Daty, wzory, cytowania i obliczenia ten próg spełniają. Wszystko interpretacyjne go nie spełnia, a tam instrumentem sprawdzenia jest własna lektura studenta.

Gousopoulos formalizuje ten sam podział jako problem detekcji sygnału z dwoma niezależnymi parametrami. Czułość to zdolność odróżniania wyniku poprawnego od wadliwego; kryterium to miejsce, w którym uczący się ustawia próg odrzucenia. Nadmierne poleganie dzieli się wzdłuż tej linii. Ostrzeżenia, listy kontrolne i podpowiedzi o halucynacjach przesuwają kryterium, zmieniając to, kiedy student odrzuca. Nauczanie dziedzinowe, porównania rozwiązanych przykładów i ćwiczenia z zasianymi błędami podnoszą czułość, bo uczący się potrafi wtedy odróżnić. Student, który przyjmuje wadliwy wynik, może mieć problem z kryterium albo problem z czułością, a te dwa wymagają innego nauczania.

Warunek wstępny jest niewygodny. Nauczanie weryfikacji jest kształcące tylko tam, gdzie czułość może przekroczyć zero, co wymaga dość wiedzy dziedzinowej, by odróżnić wynik poprawny od niepoprawnego. W tym samym audycie nowicjusze proszeni o wyjaśnienie kodu wygenerowanego przez [[llm|LLM]] osiągali sukces w około jednej trzeciej zadań, więc ocena informacji zwrotnej od SI lub kodu wobec własnego rozumowania jest rzeczywistym sprawdzeniem tylko tam, gdzie to rozumowanie ma substancję. Jeśli studenci nie potrafią jeszcze samodzielnie myśleć w danej dziedzinie, więcej ostrzeżeń nic nie da. Trzeba uczyć treści i przyczepić do niej sprawdzenie.

Jeszcze jedno ostrzeżenie należy do projektu: interwencje, które ograniczają nieodpowiednie przyjmowanie, trzeba też sprawdzić pod kątem niezamierzonego odrzucania trafnej pomocy. Należy zostawić miejsce na to, by student przyjął dobry wynik z podanym powodem.

## Oceniaj sprawdzenie, nie zamieniając go w nadzór

Gousopoulos wyciąga konsekwencję wprost. Jeśli SI może wytworzyć artefakt, artefakt nie może być ocenianiem, więc ocena przenosi się na specyfikację, rozumowanie weryfikacyjne i interpretację. Jego konstrukt autorstwa modelu ma cztery aspekty: specyfikację, model koncepcyjny, weryfikację i interpretację, na czterech uporządkowanych poziomach od delegowanego do autorskiego. Poziom autorski wymaga weryfikowalnej specyfikacji przed pierwszym promptem, odrzucenia wyniku na podstawie wiedzy dziedzinowej z podanym powodem oraz interpretacji wykraczającej poza to, co artefakt sam o sobie donosi.

Rubryka korzysta z materiałów, które zadanie konstrukcyjne i tak wytwarza, więc to samo narzędzie jest i [[formative-assessment|ocenianiem kształtującym]], i miarą badawczą. To odpowiada na obawę o zbędną pracę: ocenia się produkt uboczny zadania, które i tak zostało ustawione. Obok tego należą się dwa ograniczenia. Żadne z 14 priorytetowych badań Wei i Shang nie mierzyło powodzenia weryfikacji i następującej po nim decyzji o poleganiu razem, a niewiele śledziło natychmiastowy wynik przez odroczone zatrzymanie wiedzy lub [[transfer-of-learning|transfer]], więc rubryka opiera się na mapie analitycznej, a nie na potwierdzonej sekwencji przyczynowej.

Trzy decyzje chronią przed zamianą tego w nadzór. Oceniaj sprawdzenie wobec rozstrzygniętej jakości, a nie wobec wysiłku, bo inaczej buduje się zachętę do odgrywania sprawdzania. Podawaj pochodzenie informacji, jak wymaga Venetsanos: studenci muszą wiedzieć, które części otrzymywanej informacji zwrotnej zostały zweryfikowane maszynowo, które oceniono wartościująco, i że osąd człowieka ma pierwszeństwo, bo nie potrafią zważyć informacji zwrotnej, której nie umieją umiejscowić. I trzymaj egzekwowanie z dala od narzędzi detekcji. [[bassett-ai-detectors-education-2026|Bassett i in. (2026)]] argumentują, że [[ai-detection|wykrywania SI]] nie należy w edukacji używać w ogóle: jego szacunki są probabilistyczne i nie mogą być niezależnie zweryfikowane, bo rzeczywiste pochodzenie tekstu jest nieznane, jego wyniki nie spełniają standardu przewagi prawdopodobieństwa, którego wymagają postępowania w sprawach rzetelności, a dychotomia człowiek kontra SI nie ma sensu dla prac tworzonych z SI, a nie przez SI. Ich wniosek jest taki, że detekcja „nie chroni rzetelności akademickiej; podkopuje ją”. Reżimy nadzoru rodzą podejrzliwość i osłabiają [[trust|zaufanie]] studentów. Dwa znaczenia detekcji trzeba trzymać osobno. Wykrywanie tekstu generowanego przez SI nie ma tu obronnej roli dowodowej; uczenie studentów wykrywania błędów w wynikach SI to całe ćwiczenie.

Rozdzielenie jest architektoniczne i warte przekazania studentom. [[vetting-dual-llm-safety-education|Li, Zhang i Botelho (2026)]] sprawdzają wynik drugim modelem, zamiast wbudowywać sprawdzenie w generator. Student, który widzi dlaczego, widzi też, dlaczego „narzędzie powiedziało, że jest dobrze” nie jest argumentem weryfikacyjnym.

## Jeśli projektujesz kurs, a nie go prowadzisz

Trzy ustalenia z powyższych należą do budowy kursu, gdzie prowadzący pracujący sam ich nie osiągnie.

Pierwsze jest diagnostyczne. Przeprowadź zadanie z zasianymi błędami: 20 pozycji, 8 z błędem dziedzinowym. To mówi, czy studenci potrafią w ogóle odróżniać, zanim upłynie semestr na nauczaniu kryterium, którego nie mogą użyć. Grupa, która przeoczyła zasiane błędy, potrzebuje powtórki treści, niezależnie od tego, co sylabus mówi o krytycznym korzystaniu.

Drugie to umiejscowienie ostrzeżenia. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings i Park (2026)]] pokazali ogólny komunikat ostrzegawczy bezpośrednio przed dwoma zadaniami u 100 studentów w USA, 40 krajowych i 60 międzynarodowych uczących się angielskiego jako języka obcego. Zaszczepieni studenci istotnie częściej weryfikowali zadanie z podsumowaniem źródła akademickiego (M = 0,34 wobec 0,18), a deklarowane intencje weryfikacji się nie zmieniły. Efekt zależał też od zadania: pojawił się przy zadaniu z podsumowaniem źródła, ale nie był jednolity przy quizie matematycznym z potęgowania i mnożenia dużych liczb. Ostrzeżenie należy umieścić w punkcie użycia, dla każdego typu zadania, a nie raz w sylabusie czy module wprowadzającym.

Trzecie to harmonogram. Sylabus, który zostawia weryfikację niezaplanowaną, mówi, że jest opcjonalna, a presja czasu jest udokumentowanym powodem pomijania sprawdzeń. Weryfikacja, która żyje w obrębie zadania, z przypisanym oznaczanym artefaktem, się zdarza. Weryfikacja, która żyje w akapicie polityki, nie.

## Jeśli czytasz to jako student

Cztery ruchy obejmują większość tego, o co proszą badania.

Oczekiwanie należy zapisać przed wysłaniem promptu. Jedno zdanie o tym, jaka powinna być odpowiedź, a potem porównanie wyniku z nim.

Warto otworzyć źródło. Listę autorów, miejsce publikacji i rok czyta się wobec rejestru, bo pole autora jest tym, które w wygenerowanych przypisach zawodzi najczęściej.

W przypadku wszystkiego interpretacyjnego trzeba zapisać powód własnymi słowami. Sfabrykowany powód jest tak widoczny jak sfabrykowane cytowanie.

Warto nie ufać poczuciu, że proza czyta się dobrze. Nowicjusze proszeni o wyjaśnienie kodu wygenerowanego przez LLM osiągali sukces w około jednej trzeciej zadań, a badanie terenowe rozmów studentów z ChatGPT na quizie wykazało, że podążanie za poprawnymi wskazówkami i tak dało błędną odpowiedź. To, co można sprawdzić, jest węższe niż to, co można przeczytać.

## Co nauczyciele akademiccy rozumieją tu błędnie

**„Już im mówiłem, żeby sprawdzali źródła”.** Ostrzeżenie prosi o dyspozycję. Staranni studenci ją mają, spieszący się nie, a w tym zdaniu nie ma nic, na czym student może działać o 23:00, mając na ekranie wynik, który czyta się doskonale.

**„Wiersz rubryki o sprawdzaniu źródeł to obejmuje”.** Ten wiersz dotyczy inicjacji i nie mówi nic o jakości procesu ani o powodzeniu. Student, który wykonał jedno wyszukiwanie i się poddał, oceniany jest tak samo jak student, który rozstrzygnął pytanie, więc rubryka nagradza gest.

**„Jeśli będą czytać uważnie, wychwycą błędy”.** Płynność przejmuje osąd. Audytowana literatura pokazuje nowicjuszy na poziomie około jednej trzeciej sukcesów w wyjaśnianiu wygenerowanego kodu, a badanie terenowe odnotowało błędną odpowiedź, która przyszła przez poprawne wskazówki.

**„Studenci, którzy mówią, że będą weryfikować, weryfikują”.** W badaniu Vu, Cummingsa i Parka deklarowane intencje się nie zmieniły, a realizowane zachowanie tak (M = 0,34 wobec 0,18). Oceniaj zachowanie, bo ono się zmieniło.

**„Studenci, którzy pomijają sprawdzenie, to ci, którym nie zależy”.** [[trust-calibration-chatbots-design-problem-2026|Jaidka i Cai (2026)]] krzyżują zdolność weryfikacji z motywacją do weryfikacji, a te profile wymagają różnych środków zaradczych. Student o wysokiej zdolności i niskiej motywacji jest podatny na beztroskie, zbyt duże zaufanie. Student o niskiej zdolności i niskiej motywacji jest najbardziej narażony. Dwaj studenci oblewający to samo sprawdzenie mogą potrzebować przeciwnego nauczania, a [[prior-knowledge|wiedza uprzednia]] decyduje, z którym z nich mamy do czynienia.

**„Więcej ostrzeżeń naprawi studentów, którzy nie potrafią odróżnić”.** Ostrzeżenia przesuwają kryterium. Nie podnoszą czułości, a czułość jest tym, co odróżnia studenta, który potrafi dostrzec wadę, od tego, który nie potrafi.

**„Detektor wspiera politykę”.** Wobec powyższych dowodów wynik detektora nie spełnia standardu wymaganego w sprawie o rzetelność, podział człowiek kontra SI nie utrzymuje się dla prac tworzonych z SI, a reżim kosztuje [[trust|zaufanie]] potrzebne do tego, by studenci cokolwiek ujawniali.

## Co się na Tobie odbije

**„Mogą to po prostu zrobić pod ocenę”.** Częściowo prawda, więc oceniaj materiały, których SI nie może wytworzyć w imieniu studenta. Specyfikacja napisana przed pierwszym promptem, predykcja zapisana przed uruchomieniem artefaktu, lista źródeł sprawdzona wobec rejestru, podany powód dziedzinowy odrzucenia: każde z nich wymaga, by student zajął stanowisko, którego generator nie dostarczy. Sfabrykowany powód jest tak widoczny jak sfabrykowane cytowanie. Gdzie student nie ma wiedzy dziedzinowej, wobec której mógłby sprawdzać, weryfikacja jest teatrem i żadna rubryka tego nie uratuje, co jest argumentem za tym, by najpierw uczyć treści.

**„W sylabusie nie ma na to czasu”.** Ostrzeżenie to jedna wiadomość przed zadaniem. Zadanie z zasianymi błędami używa quizu, który i tak jest prowadzony. Rubryka opiera się na materiałach, które zadanie i tak wytwarza, więc kosztuje czas oceniania dowodów, których inaczej by nie było. Alternatywa kosztuje więcej: niesprawdzone prace, sfabrykowane przypisy i rozmowy o rzetelności, które po nich następują.

**„Narzędzie zwykle ma rację”.** Wtedy sprawdzenie jest tanie, a wyjątki są sednem. Pole autorów zawodzi częściej niż jakakolwiek inna część wygenerowanego przypisu, 17 z 30 sfabrykowanych pozycji łączyło prawdziwy tytuł z błędnym autorstwem, miejscem publikacji lub rokiem, a 17 pojawiło się w materiałach jednej konferencji w jednym roku. Trafność w częściach, które akurat się zauważy, nie mówi nic o częściach, których się nie zauważa.

**„Moi studenci nie wiedzą dość, by ocenić wynik”.** To jest próg czułości i jest realny. Gousopoulos przewiduje, że nauczanie weryfikacji zawodzi poniżej progu wiedzy dziedzinowej, i zauważa, że niektóre dziedziny dostarczają kryterium zewnętrznego, między innymi fizyka, chemia, ekologia i epidemiologia, a historia, literatura i [[ethics|etyka]] w dużej mierze nie. Ucz dziedziny i przyczep do niej sprawdzenie albo oczekuj, że sprawdzenie stanie się rytuałem.

**„To nadzór”.** Jest nim, jeśli ocenia się wysiłek albo obserwuje sposób pracy studentów. Oceniaj artefakt wobec klucza, stwierdź, która informacja zwrotna została sprawdzona maszynowo, a która oceniona przez człowieka, i zostaw detektory poza tym.

## Co zrobić w tym tygodniu

**1.** Napisz dwa opisy do następnego zadania: wynik poprawny i wynik prawdopodobny, ale błędny. To jest klucz, wobec którego rozstrzyga się sprawdzenie.

**2.** Dodaj linię predykcji. Jedno zdanie, zapisane przed otwarciem narzędzia, porównane potem na podstawie wiedzy dziedzinowej.

**3.** Zastąp „sprawdź swoje źródła” zdaniem „otwórz rejestr i potwierdź autorów, miejsce publikacji i rok”.

**4.** Wstaw 8 zasianych błędów do quizu, który i tak prowadzisz, i zobacz, którzy studenci je znajdą.

**5.** Oznacz jeden artefakt weryfikacji wobec klucza i powiedz studentowi, która część sprawdzenia zawiodła: standard, proces czy decyzja.

## Dokąd dalej

[[incorporating-ai-literacy]] omawia, jak zbudować rozumienie, które ta strona uruchamia, a [[ai-literacy-evidence]] mówi, ile warte jest kształcenie tych kompetencji. [[reducing-over-reliance]] zajmuje się stroną projektową studentów, którzy opierają się na narzędziu, [[study-with-ai]] jest towarzyszącą stroną dla studentów, a [[asynchronous-online-courses-ai]] omawia wersję tego problemu bez zajęć, na które można wpisać sprawdzenie. Informację zwrotną, którą studenci sprawdzają, opisują [[ai-feedback-quality]] i [[hallucination-risk]].
