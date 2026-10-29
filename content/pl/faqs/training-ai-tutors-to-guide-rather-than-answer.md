---
title: "Jak wytrenować tutora SI, aby prowadził studentów, a nie odpowiadał za nich"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Tutor oddaje odpowiedź. Demo tego nie pokazało, bo pytanie było łatwe, a student współpracował. Logi pilotażu pokazują: student pyta dwa razy, model powtarza metodę, a potem rozwiązuje zadanie. Nauczyciel ogląda sesję i mówi, że to chatbot z przyjaznym głosem. Teraz trzeba rozstrzygnąć, czy przeznaczyć ćwierć czasu inżynierskiego na douczanie po treningu, czy wypuścić produkt z lepszą instrukcją systemową.

Krótka odpowiedź: samo formułowanie instrukcji nie usuwa ciągoty do odpowiadania, ponieważ bycie pomocnym to właśnie to, do czego wytrenowano model bazowy. Jeśli zachowanie polegające na prowadzeniu ma być produktem, trzeba je wytrenować, a zmienną, która rozstrzyga wynik, jest **nagroda**. Nagrodę trzeba napisać względem benchmarku, umieścić w danych treningowych rozumowanie na poziomie kroków i oceniać trening po następnym posunięciu pedagogicznym, które model wybiera.

## W skrócie

**1.** Sprawdzić, czy instrukcja wytrzymuje nacisk, zanim uzna się, że sama instrukcja wystarcza. Zgoda z błędnym studentem to wzorzec awarii, którego trzeba szukać.

**2.** Napisać nagrodę jako specyfikację pożądanego zachowania, z wykluczonymi trudnymi negatywami, a potem sprawdzić, co faktycznie optymalizowała.

**3.** Trenować na śladach na poziomie kroków. Korpus par pytanie i poprawna odpowiedź nie nauczy modelu widzieć, gdzie student się pomylił.

**4.** Preferować uczenie ze wzmocnieniem nad naśladownictwem, gdy liczy się osąd, i zachowywać wyniki etapów pośrednich.

**5.** Uczynić nagrodę wystarczająco gęstą, aby zadziałała przy większości odpowiedzi, i prowadzić ewaluację na całych rozmowach.

## Sprawdzić, czy instrukcja wytrzymuje nacisk

[[prompt-engineering|Formułowanie instrukcji]] i ogólny trening zgodności pozostawiają ciągotę do zgody. [[contextual-sycophancy-ai-literacy|Sykofancja kontekstowa]] utrzymuje się po obu, a błędy osób uczących się nadal przenikają do porad SI.

EduFrameTrap dodaje szczegół istotny dla decyzji produktowej. Modele, które opierają się atakom ze zmianą kontekstu, nadal ulegają pod naciskiem autorytetu lub presji społeczno-afektywnej i wstrzymują korygującą informację zwrotną, dlatego jego autorzy twierdzą, że zachowanie „życzliwe, ale poprawne” powinno być **wyraźnym wymogiem treningowym**, a nie preferencją ([[eduframetrap-llm-sycophancy-educational-safety]]).

Jeśli awarią tutora jest zgoda z błędną odpowiedzią, instrukcja zakazująca zgody jest złagodzeniem problemu. Najpierw przeprowadzić test nacisku, zapisać, gdzie się załamuje, i użyć tego zapisu jako argumentu za budżetem na trening.

## Napisać nagrodę, zanim zbierze się dane

Nagroda to skompresowana specyfikacja tego, czego się chce, a modele optymalizują dokładnie to, co zostało napisane. Dlatego projekt nagrody jest decyzją, która wyznacza pułap dla wszystkiego dalej.

Model nagrody EduQwen **przedkładał odpowiedzi prowadzące nad odpowiedziami bezpośrednimi**, z wydobywaniem trudnych negatywów, aby wykluczyć pytania, które model bazowy już rozwiązywał, a przebiegi rozszerzono z 5 do 8 kroków, aby uchwycić wieloetapowe decyzje pedagogiczne. Jego trzystopniowy potok, najpierw RL, potem syntetyczny SFT, a na końcu runda RL, osiągnął **96,52%** na benchmarku CDPK wobec **90,55%** Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]).

Wynikają z tego dwie rzeczy. Należy oczekiwać, że nagroda zostanie oszukana, bo specyfikuje mniej, niż zamierzano, więc trzeba pisać ją względem benchmarku, a nie intuicji. I trzeba zachować liczby pośrednie: sam pierwszy etap RL osiągnął 94,13%, SFT na 40 000 samodzielnie wygenerowanych odpowiedzi podniósł wynik do 96,20%, a ostatnia runda dodała resztę ułamka. Większość zysku przyszła wcześnie, co jest użyteczne, gdy ktoś pyta, czy ostatni etap był wart swojego kosztu.

## Sprawić, by nagroda zadziałała wystarczająco często, by uczyć

Nagroda za dokładne dopasowanie jest zbyt rzadka, gdy to, na czym zależy, ma kilka wymiarów. Symulator pisania SWIM pokazuje progresję czytelnie: instrukcje oparte na rubryce osiągnęły najlepszą średnią cechę QWK **0,577** z Claude Sonnet i **0,422** z GPT-5.4, blisko zera dla otwartego modelu 7B; nadzorowane dostrajanie osiągnęło **0,474 ± 0,023** dla tego modelu 7B; GRPO z gęstą, znormalizowaną względem cech nagrodą za trafność osiągnęło **0,618 ± 0,005** na każdej cesze i każdej instrukcji ([[swim-student-writing-simulation-2026]]).

Tę lukę wytworzył projekt nagrody. Gęsty sygnał znormalizowany względem cech bije dokładne dopasowanie w warunkach wielu cech, a jeśli nagroda zadziała tylko przy doskonałej odpowiedzi, większość sygnału treningowego to cisza.

## Umieścić rozumowanie w przykładach

Najbardziej praktyczne ustalenie w tym obszarze dotyczy tego, co muszą zawierać dane treningowe. Modele dostrojone do instrukcji uczyły się błędnych przekonań algebraicznych tylko wtedy, gdy trenowano je na **śladach rozwiązań na poziomie kroków**. Trenowane wyłącznie na odpowiedziach końcowych, utrzymywały trafność **poniżej 30% przy każdym rozmiarze danych** ([[misconception-acquisition-dynamics-llms-2026]]).

Dwa szczegóły z tego badania są istotne dla każdego, kto buduje którąkolwiek stronę tutora. Rola studenta nadmiernie generalizowała wyuczony błąd, dopóki poprawne przykłady nie zostały domieszane w proporcjach tak niskich jak **jeden do czterech**. Rola tutora nie poniosła takiego kosztu, utrzymując poprawną trafność od **93% do 98%** w dziesięciu wspólnie trenowanych błędnych przekonaniach.

Zbiór par pytanie i poprawna odpowiedź nie nauczy modelu zauważać, gdzie student się pomylił. Jeśli trenowany jest tutor do diagnozowania, przykłady muszą zawierać rozumowanie.

## Wybrać sygnał treningowy dopasowany do osądu

Nadzorowane dostrajanie uczy model naśladować pokazy. To wystarcza dla formatu i nie wystarcza dla osądu. LearnLM formułuje to ustalenie wprost: **RL jest istotnie skuteczniejsze niż samo SFT w podążaniu za niuansowymi instrukcjami pedagogicznymi w długich rozmowach** ([[learnlm-improving-gemini-learning]]).

Jego ramy warunkowane instrukcją pozwalają deweloperom i nauczycielom określać zachowanie tutora bez rozstrzygania o jednej definicji pedagogiki, a wspólny trening wplata je w etapy douczania Gemini. Eksperci preferowali to rozwiązanie nad GPT-4o (**+31%**), Claude 3.5 Sonnet (**+11%**) i bazowym Gemini 1.5 Pro (**+13%**).

Praktyczny odczyt: jeśli awarią jest niewłaściwy ton albo brakujący format, SFT jest tanią drogą. Jeśli awarią jest wybór niewłaściwego posunięcia pedagogicznego w dwunastej wymianie, sygnał musi nagradzać ten wybór.

## Oznaczyć każdy przykład zachowaniem, którego uczy

Jeśli nadzór musi zawierać rozumowanie, schemat oznaczania jest decyzją o programie nauczania. Badanie etykiet nadzoru wykazało, że przypisanie każdemu przykładowi treningowemu jednego docelowego zachowania, spośród kompetencji przedmiotowej, osadzenia w programie, rozumowania diagnostycznego i rusztowania, podniosło wyniki przy każdym testowanym rozmiarze modelu, z największymi zyskami w rusztowaniu i w korzystaniu z historii osoby uczącej się. Diagnoza stanu wiedzy pozostała najsłabszym zachowaniem na poziomie **54,04%** ([[omniedu-open-educational-foundation-models-2026]]). Diagnoza jest najtrudniejszą pozycją na tej liście, więc trzeba na nią zaplanować budżet.

Selekcja danych to osobny problem treningowy. Edu-QuRating dostosowuje destylację preferencji do porządkowania danych edukacyjnych, zastępując jedną ocenę „czy to jest edukacyjne?” **20 wymiarami rubryki** obejmującymi trafność faktyczną, strukturę pedagogiczną i dopasowanie poziomu ([[garrod-edu-qurating-educational-data-curation-2026]]). Jeśli korpus składa się z tekstu z sieci, ten filtr decyduje, jak model nauczy się brzmieć.

## Wybrać zakład danych, na który można sobie pozwolić

Przestrzeń wyznaczają dwa przeciwne zakłady, a wybór między nimi zależy od tego, co już jest dostępne.

Gdy danych jest mało, zachowanie niesie douczanie warunkowane instrukcją. LearnLM używa instrukcji na poziomie systemu, które pozwalają nauczycielom i deweloperom określać zachowanie tutora, i opiera się na wspólnym treningu, a nie na dużym korpusie transkrypcji korepetycji.

Gdy dostępne są autentyczne dane interakcji, wygrywa dostrajanie na nich. TeachLM zakłada, że [[prompt-engineering|inżynieria instrukcji]] to rozwiązanie tymczasowe, a rzadkim składnikiem jest rzeczywista interakcja osoby uczącej się z tutorem. Wytrenowany na **100 000 godzin** sesji indywidualnych przy rygorystycznej anonimizacji, podwaja czas mówienia studenta, poprawia styl zadawania pytań i zwiększa liczbę wymian w dialogu o **50%** ([[teachlm-post-training-llms-education]]).

Tańszą drogą jest destylacja. Pedagogy-R1, w wersjach 1,5B i 7B, dostrojono do instrukcji na wyjściach przefiltrowanych pedagogicznie i zdestylowanych z nauczyciela QwQ-32B, w połączeniu z podpowiadaniem łańcucha pedagogiki ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Trenować decyzję, z którą student spotka się dalej

Douczanie nie musi kształtować wyłącznie tego, co model mówi. TACT douczył tutora na taksonomii 13 strategii oraz dwuosiowej taksonomii posunięć studenta i zyskał **20,30 punktu** wobec swojego szkieletu Qwen3.5-4B, przy benchmarku diagnostycznym, który **wstrzymuje etykiety stanu osoby uczącej się** dostępne w treningu, tak że model musi wnioskować stan z dialogu ([[tact-pedagogically-adaptive-esl-tutoring]]).

Ta sama logika przenika dopasowanie w [[special-education|edukacji specjalnej]] ([[special-r1-rl-special-education]]) oraz prace nad RL heurystycznym, które dopasowują modele jako przewodników sokratejskich, a nie odpowiadających ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Jedna platforma idzie dalej i trenuje politykę, a nie prozę: agent uczący się ze wzmocnieniem wybiera następne zadanie ćwiczeniowe, więc to, co osoba ucząca się zrobi dalej, rozstrzyga wytrenowany model ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Ten ostatni przypadek jest testem, czy zaprojektowano tutora, czy generator tekstu. Jeśli jedynym wyjściem modelu jest proza, pedagogika tkwi w kodzie orkiestracji. Jeśli model wybiera następne zadanie, pedagogika jest w wagach.

## Testować na długości rozmowy

Trening nie czyni modelu bezpiecznym w długiej rozmowie. SafeTutors pokazuje, że nawet wyspecjalizowane modele pedagogiczne degradują się w przedłużonym dialogu i mogą dopuszczać się szkód polegających na nadmiernym ujawnianiu odpowiedzi ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Bezpieczeństwo pedagogiczne]] trzeba mierzyć na długości rozmowy, obejmując wymiany, w których student się myli, nalega lub wywiera nacisk.

## Co zespoły trenujące rozumieją błędnie

Więcej instrukcji w końcu utrzyma zachowanie. Sykofancja utrzymuje się po instrukcjach i po dopasowaniu, a nacisk autorytetu otwiera na nowo zachowanie, które zamknął test ze zmianą kontekstu. Zapis własnego testu nacisku jest dowodem w konkretnym produkcie.

Liczba z rankingu jest wynikiem. 96,52% na CDPK opisuje wykonanie na zadaniach pedagogicznych jednego benchmarku. Studenci spotkają program, notację i osobę, która utknęła dwadzieścia minut temu.

Więcej danych jest odpowiedzią, gdy ślady są cienkie. Odpowiedzi końcowe przy każdym rozmiarze danych utrzymywały trafność błędnych przekonań poniżej 30%. Wynik zmieniło rozumowanie na poziomie kroków w przykładach; rozmiar korpusu nigdy go nie zmienił.

Rola studenta jest trudną częścią, więc trzeba ją trenować na końcu. Student nadmiernie generalizował wyuczone błędy, dopóki poprawne przykłady nie pojawiły się w proporcji jeden do czterech. Rola tutora utrzymała 93% do 98% w tych samych warunkach, co sugeruje, że tutor jest łatwiejszą połową do wytrenowania, a sprawdzać trzeba symulator.

Ostatni punkt kontrolny jest wynikiem. Pierwszy etap RL osiągnął 94,13%, a SFT podniósł to do 96,20%, więc większość ruchu nastąpiła przed ostatnią rundą. Warto zachować wyniki etapów; mówią, który etap wypracował zysk, a który można by w następnym razem odciąć.

## Co się na Tobie odbije

**„Nie stać nas na RL”.** Wtedy zacząć od części, które nic nie kosztują: śladów na poziomie kroków w danych, jednej etykiety docelowego zachowania na przykład i nagrody zapisanej słowami, zanim zostanie zapisana w kodzie. Porównanie SWIM pokazuje, że samo SFT podnosi model 7B do 0,474, co jest realnym zyskiem i wciąż krótkim krokiem do 0,618.

**„Model naszego dostawcy już odmawia udzielania odpowiedzi”.** Douczanie u dostawcy optymalizuje bycie pomocnym, a odmowa odpowiedzi nie jest tym, co nagradzają wskaźniki pomocności. Trzeba sprawdzić zachowanie we własnych rozmowach; odpowiedź jest w zapisie, nie w karcie modelu.

**„Destylacja doprowadzi nas większość drogi”.** Pedagogy-R1 to destylacja w wersjach 1,5B i 7B i rozsądny punkt wyjścia. Dziedziczy jednak pedagogikę nauczyciela, wraz z tym, co ten nauczyciel zrobił źle, i potrzebny będzie benchmark, by zobaczyć, które części się przeniosły.

**„Testowanie długich rozmów jest zbyt drogie, by je często prowadzić”.** Prowadzić je raz na każdą zmianę modelu, ze stałym scenariuszem i stałym zestawem wymian adversatywnych, i porównywać zapisy różnicowo. Koszt leży w napisaniu scenariusza za pierwszym razem.

**„Nauczyciel mówi, że to przypomina chatbota”.** To sprawozdanie o kształcie rozmowy, a kształt rozmowy jest polityką. Warto policzyć, ile wymian mija, zanim model przekaże krok.

## Co zrobić w tym tygodniu

**1.** Przeprowadzić test nacisku: błędna odpowiedź, student nalega, student powołuje się na autorytet, student prosi o odpowiedź. Zachować zapis.

**2.** Zapisać nagrodę jako trzy zdania zwykłym językiem, a potem sprawdzić, czy kod mierzy te trzy rzeczy.

**3.** Przejrzeć próbkę przykładów treningowych pod kątem rozumowania na poziomie kroków. Podać udział tych, które zawierają błędny krok i jego diagnozę.

**4.** Dodać po jednej etykiecie docelowego zachowania na przykład, zaczynając od rusztowania, i rejestrować rozkład.

**5.** Umieścić wyniki etapów pośrednich w karcie modelu obok wyniku końcowego.

## Dokąd dalej

[[making-ai-better-at-supporting-learning|Jak można poprawić wspieranie uczenia się przez SI we własnym przedmiocie?]] pyta, czy trening jest w ogóle właściwą dźwignią, a [[developing-ai-tutor|Tworzenie tutora SI]] omawia odpowiednik w projekcie interakcji, który to samo zachowanie prowadzenia uzyskuje przez rusztowanie i drabinki podpowiedzi, a nie przez gradienty. [[checking-whether-educational-ai-works|Sprawdzanie, czy edukacyjna SI działa]] omawia pomiar tego, czy zachowanie faktycznie się zmieniło, a [[llm-training-and-fine-tuning|Trening i dostrajanie LLM]] to strona koncepcyjna leżąca u podstaw tego wszystkiego.
