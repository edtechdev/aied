---
title: "Czy mogę używać AI do oceniania pracy studentów w sposób sprawiedliwy i rzetelny?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Masz rubrykę, w którą wierzysz, więcej prac niż godzin i narzędzie, które zwraca ocenę oraz kilka pewnych siebie akapitów w czasie potrzebnym na przeczytanie jednego eseju. Wypróbowujesz je na pracach, które już oceniłeś. Połowa ocen wygląda dobrze. Jedna jest dziwnie łaskawa, jedna dziwnie surowa, i nie potrafisz jeszcze powiedzieć, czy to wina narzędzia, czy eseju.

Krótka odpowiedź do przekazania współpracownikowi: ocenianie przez AI zasługuje na miejsce jako nadzorowany asystent albo drugi czytelnik, w zadaniach, w których sprawdziłeś je na pracach już przez siebie ocenionych. Zgodność nie przenosi się między typami oceniania. W egzaminie farmaceutycznym z szesnastoma studentami [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat i wsp. (2026)]] stwierdzili niemal doskonałą zgodność dla zadań obiektywnych i niewiarygodną zgodność dla odpowiedzi otwartych. Na trzech angielskich uniwersytetach [[opraise-automated-marking-ai-assessment-2026|projekt OpRaise]] stwierdził, że oceniający AI i oceniający ludzcy zgadzali się co do przedziału oceny w 35% do 65% przypadków, w zależności od instytucji, przy ocenach ściśniętych ku środkowi. Płynne uzasadnienie nie jest dowodem, że twoje kryteria zostały zastosowane. To, czy wynik jest [[assessment-validity|trafny dla twojej decyzji]], jest lokalnym pytaniem, na które musisz odpowiedzieć sam, a [[human-in-the-loop-ai|człowiek pozostaje odpowiedzialny]] za wszystko, co staje się zapisaną oceną.

## W skrócie

**1.** Nazwij rolę, zanim cokolwiek uruchomisz: asystent informacji zwrotnej, drugi czytelnik albo główny oceniający. Każda wymaga innej ilości dowodów.

**2.** Zacznij od roli o najmniejszych konsekwencjach, która rozwiązuje twój rzeczywisty problem. Jeśli klucz deterministyczny wystarczy, LLM dodaje ryzyko, a nie wartość.

**3.** Kalibruj na pracach, które już oceniłeś, w tym na pracach mocnych, słabych, granicznych i nietypowo zbudowanych. Wygodne przykłady niczego nie dowodzą.

**4.** Trzymaj zbiór kalibracyjny i testowy osobno, inaczej mierzysz, jak dobrze dostroiłeś narzędzie do znanych esejów.

**5.** Raportuj dokładną zgodność, różnice ocen i kierunek obciążenia, a nie korelację. Sprawdź osobno granice zaliczenia.

**6.** Powiedz studentom, jaką rolę odgrywa narzędzie, kto decyduje o ocenie i jak poprosić o weryfikację.

## Ustal, co AI może robić

Trzy układy nazywa się „ocenianiem przez AI” i niosą one różne zobowiązania.

**Asystent informacji zwrotnej** szkicuje komentarze lub wskazuje możliwe pominięcia, które przyjmujesz, przepisujesz albo odrzucasz. Ryzyko ogranicza się do jakości komentarzy, a ty czytasz wszystko, zanim trafi do studenta. **Drugi czytelnik** proponuje oceny według kryteriów lub zgłasza rozbieżności, by uporządkować twoje własne ocenianie. Jego błędy muszą być użyteczne, a nie tylko błędne: sygnał, który odsyła cię do pracy, którą oceniłbyś niedbale, jest wart posiadania. **Główny oceniający** tworzy oceny, które stają się zapisanymi stopniami. To układ, którego dowody w tej bazie wiedzy nie wspierają poza wąskimi, lokalnie zweryfikowanymi przypadkami.

Wybierz najniższy szczebel, który rozwiązuje twoje rzeczywiste ograniczenie. Jeśli twoje obciążenie ocenianiem wynika ze sprawdzania stałego klucza odpowiedzi, zwykłe ocenianie deterministyczne jest bardziej przejrzyste i audytowalne niż model językowy, a badanie farmaceutyczne sugeruje, że przewaga LLM na zadaniach obiektywnych była częściowo artefaktem podania poprawnych odpowiedzi podczas oceniania. Zachowaj model do pracy wymagającej interpretacji, a potem tę interpretację sprawdź.

[[automated-assessment|Ocenianie automatyczne]] obejmuje szerszą maszynerię oceniania, moderacji i generowania informacji zwrotnej. Ta strona dotyczy pytania o osąd, które leży pod tym wszystkim.

## Co faktycznie pokazują dowody

Zgodność zależy od typu zadania. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat i wsp. (2026)]] ocenili egzamin farmaceutyczny o mieszanym formacie, który rozwiązało 16 studentów, i podali zgodność z ocenianiem wykładowców między 0,935 a 1,000 dla zadań wielokrotnego wyboru, wyboru wszystkich pasujących odpowiedzi i uzupełniania luk. Zgodność dla subiektywnych odpowiedzi otwartych była niewiarygodna. Dwa szczegóły znaczą więcej niż nagłówek. Podczas oceniania dostarczono poprawne odpowiedzi, co schlebi wynikom dla zadań obiektywnych, a dodanie rubryki nie poprawiało zgodności w sposób systematyczny, co podważa powszechne założenie, że dobra rubryka zamienia LLM w spójnego oceniającego. Szesnastu studentów nie wystarczy do twierdzenia o twoim kursie. Przenośnym ustaleniem jest zmienność wewnątrz jednego egzaminu: system, który radzi sobie z twoją sekcją wielokrotnego wyboru, nic nie mówi o twoich esejach.

Zgodność na poziomie przedziału oceny jest umiarkowana i nierówna. [[opraise-automated-marking-ai-assessment-2026|Raport OpRaise]] zbadał autentyczne eseje psychologiczne studentów studiów licencjackich i stwierdził zgodność między oceniającymi AI i ludzkimi co do brytyjskiego przedziału oceny na poziomie 63% w Cambridge, 53% w Nottingham i 35% na Manchester Metropolitan. Oceny zostały ściśnięte ku środkowi, a najgorzej oceniono skraje: esej, który człowiek ocenił na 75, każdy system AI ocenił o kilka punktów niżej, a esej oceniony na 50 o kilka punktów wyżej. To ściśnięcie jest awarią, na którą trzeba uważać, bo uderza dokładnie w studentów z góry i z dołu twojego rozkładu, pozostawiając środek w porządku. To raport projektowy, a nie recenzowane badanie, i jest to najbardziej użyteczne ostrzeżenie w bazie dowodów.

Twoje własne oceny są niedoskonałym punktem odniesienia. Oceniający nie zgadzają się ze sobą, a twoja wcześniejsza ocena podobnego eseju jest osądem, nie prawdą wzorcową. Zgodność z jednym oceniającym ustala spójność z tym oceniającym, co nie jest tym samym co sprawiedliwość. Tam, gdzie stawka na to pozwala, użyj drugiego wykwalifikowanego czytelnika do rozstrzygania trudnych przypadków, a rozbieżność między AI i ludzkim oceniającym traktuj jako sygnał do ponownego przeczytania pracy, a nie werdykt o tym, kto ma rację.

Spójność i trafny osąd się rozchodzą. Model może zwrócić niemal identyczne oceny przy ponownym uruchomieniu, stosując twoje kryteria źle, bo powtarzalność mierzy stabilność, a nie trafność. Skraje w OpRaise pokazują ten wzorzec: system był stały i mylił się co do esejów, które znaczyły najwięcej.

## Zweryfikuj procedurę, zanim dotknie oceny

Przejdź przez to na wcześniej ocenionych, odpowiednio zabezpieczonych pracach, które obejmują odpowiedzi, jakie naprawdę otrzymujesz: mocne, słabe, graniczne, niekompletne, nietypowo zbudowane i poprawne odpowiedzi wyrażone w nieznany sposób.

**1. Określ kryteria i żądaj dowodów.** Daj zadanie, rubrykę, zasady punktowania i przykłady, jak uzasadnione alternatywne odpowiedzi zdobywają punkty. Poproś o zwięzłe uzasadnienia na poziomie kryteriów powiązane z możliwymi do wskazania fragmentami. Potem sam sprawdź te uzasadnienia wobec pracy.

**2. Oddziel kalibrację od ewaluacji.** Dostrajaj na jednym zbiorze, testuj na innym. Bez tego podziału nie odróżnisz procedury zweryfikowanej od dobrze dopasowanej.

**3. Mierz decyzje, które mają znaczenie.** Zapisuj dokładną zgodność, wielkość i kierunek różnic ocen oraz to, czy model systematycznie przyznaje wyższe czy niższe oceny. Zbadaj osobno granicę zaliczenia i inne granice o poważnych konsekwencjach. Wysoka korelacja może leżeć na szczycie systematycznego przesunięcia.

**4. Testuj powtarzalność i zachowanie w podgrupach.** Uruchom ponownie podzbiór w identycznych ustawieniach. Szukaj błędów na poziomie kryteriów oraz tego, czy język, formatowanie lub uzasadniony styl są brane za słabsze rozumienie. Małe liczebności podgrup uzasadniają ostrożność, a nie twierdzenie o sprawiedliwości.

**5. Zapisz regułę eskalacji.** Zdecyduj, które przypadki zawsze trafiają do oceniania przez człowieka i jak rozstrzyga się rozbieżności. Nie pozwól, by decydowała o tym deklarowana pewność modelu; pewność trzeba zweryfikować wobec zaobserwowanych błędów, zanim będzie mogła coś ważyć.

**6. Zabezpiecz przebieg pracy.** Używaj zatwierdzonego środowiska, minimalizuj informacje identyfikujące i trzymaj rubrykę oraz instrukcje osobno od treści zgłoszonej pracy. To rozdzielenie utrudnia ukrycie manipulacji. Nie czyni jej niemożliwą.

**7. Zapisuj, co unieważniłoby sprawdzenie.** Zachowaj model i wersję, prompt, rubrykę i ustawienia. Aktualizacja modelu lub rewizja rubryki jest powodem, by powtórzyć reprezentatywne sprawdzenia, a nie zakładać ciągłości.

## Uczyń ten układ widocznym dla studentów

Studenci mają prawo wiedzieć, jaką rolę odgrywa narzędzie, kto decyduje i jak zakwestionować wynik. Niejasne ujawnienie rodzi podejrzenia; konkret buduje wykonalną relację. Na przykład: „Zatwierdzone narzędzie AI może szkicować komentarze według rubryki do twojego szkicu. Przeglądam każdy komentarz i ustalam twoją ocenę. Skontaktuj się ze mną, jeśli komentarz błędnie przedstawia twoją pracę”. Potem spraw, by to była prawda.

Dwa kierunki awarii wymagają osobnej uwagi. Nadmierne odjęcia punktów są tym, co zgłaszają studenci, i dominują w odwołaniach. Niezasłużone punkty to ten, o którym się nie mówi i który po cichu psuje zapis. Próbkuj pod oba i wliczaj swoje godziny weryfikacji, gdy oceniasz, czy przebieg pracy cokolwiek ci oszczędził.

## Co usłyszysz w odpowiedzi

**„Ludzie też są stronniczy.”** Są, i dlatego porównanie wymaga wyraźnych kryteriów, a nie oceny jednego oceniającego jako standardu. Rozrzut instytucjonalny OpRaise jest tu argumentem: jeśli ludzcy oceniający na trzech uniwersytetach uzyskali tak różną zgodność przedziałów z tymi samymi systemami, ludzkie odniesienie jest częścią tego, co trzeba określić, a nie stałą miarą.

**„Rubryka czyni to obiektywnym.”** Rubryka czyni oczekiwania wyraźnymi. Jej stosowanie pozostaje interpretacją, a badanie farmaceutyczne wykazało, że dostarczenie rubryki nie poprawiało zgodności systematycznie. Rubryka daje ci sprawdzalny standard dla uzasadnień, a nie gwarancję ocen.

**„Musiałbym sprawdzić wszystko, co niweczy cel.”** Dla niektórych zadań to słuszny wniosek, a odpowiedzią jest zawężenie pracy. Szkicowanie komentarzy z własnych notatek oceniających zostawia osąd przy tobie i usuwa pisanie. Sygnały drugiego czytelnika przy pracach granicznych skupiają twoją uwagę tam, gdzie zmieniają wynik.

**„Kolega wypróbował i działało dobrze.”** Zapytaj, co mierzył. Dodatnie oceny współistnieją z błędami w tej literaturze rutynowo, a kolega, który przeczytał kilka sensownych wyników, przeprowadził demonstrację, nie walidację. Pytanie brzmi, co jego procedura zrobiłaby z esejami, które zauważyłbyś na końcu.

## Co zrobić w tym tygodniu

**1.** Wybierz jedno ocenianie i zapisz jedyną rolę, jaką odegra AI. Zapisz, jakie dowody pozwoliłyby ci przesunąć je o szczebel wyżej.

**2.** Uruchom je na pięciu pracach, które już oceniłeś, wybranych tak, by zawierały mocną, słabą, graniczną i jedną o nietypowej, ale uzasadnionej strukturze.

**3.** Zapisuj każdą rozbieżność wraz z pracą i kryterium oraz nazwij błędy, które uznałbyś za nie do przyjęcia, a nie tylko błędne.

**4.** Sprawdź, czy różnice ocen idą w spójnym kierunku, i osobno zbadaj granicę zaliczenia.

**5.** Naszkicuj akapit ujawnienia dla studentów i drogę do weryfikacji, a potem porównaj czas weryfikacji z czasem oceniania, którego uniknąłeś.

## Dokąd dalej

[[assessment-validity|Trafność oceniania]] to pojęcie, które rozstrzyga te pytania: czy dowody wspierają wnioskowanie, które chcesz przeprowadzić. [[automated-assessment]] obejmuje technologię i jej zmierzone działanie w różnych formatach, a [[ai-feedback-at-scale]] zajmuje się sąsiednim problemem generowanych komentarzy i tego, czy studenci na nie reagują.

O tym, co ocena powinna reprezentować, gdy studenci korzystają z AI, w tym o zastępowaniu konstruktu i uwierzytelnionych dowodach procesu, zobacz [[redesign-assessment-ai-era|przeprojektowanie oceniania w erze AI]]. O tym, czy wykrywanie może zastąpić obronny projekt zadania, zobacz [[should-we-use-ai-detectors|czy używać detektorów AI]]. O pytaniu ewaluacyjnym leżącym pod tym wszystkim zobacz [[checking-whether-educational-ai-works|sprawdzanie, czy edukacyjna AI działa]].
