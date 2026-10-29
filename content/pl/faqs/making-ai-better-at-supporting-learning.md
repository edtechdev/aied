---
title: "Jak sprawić, by SI lepiej wspierała uczenie się we własnej dziedzinie?"
created: "2026-10-02T08:07:09-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Zgłoszenie mówi „dostrój model do naszych materiałów kursowych”. Budżet jest zatwierdzony, karta GPU zarezerwowana na przyszły miesiąc, a doktorant poproszony o złożenie zbioru danych. Nikt na spotkaniu nie zapytał, ile punktów zdobywa zwykły prompt albo wyszukiwanie po słowach kluczowych na tych samych pytaniach.

Te dwa pytania trzeba zadać najpierw. W tej bazie wiedzy luka między modelem ogólnym a modelem kompetentnym w kursie to w większości problem osadzenia i promptowania, a dowody na taką kolejność są wyjątkowo bezpośrednie: badanie asystenta kursowego wykazało, że decyzją pierwszego rzędu było wyszukiwanie, a nie model, a model ogólny bez osadzenia wypadł *poniżej* prostego punktu odniesienia TF-IDF.

Trenowanie jest realne i czasem konieczne. To trzecia lub czwarta rzecz do wypróbowania, a poniższa praca jest uporządkowana tak, by najpierw ustalić, który szczebel jest faktycznie potrzebny, zanim wyda się kwartalne środki na obliczenia.

## W skrócie

**1.** Zapisz, ile punktów zdobywa zwykły prompt i ile prosta metoda leksykalna, zanim cokolwiek zmienisz. Ta druga liczba utrzymuje uczciwość.

**2.** Postaw wyszukiwanie po własnych materiałach przed modelem. To największy pojedynczy przyrost raportowany tu w stosunku do kosztu, i jest odwracalny.

**3.** Pracuj nad promptem pod rubrykę i iteruj, aż poprawa się zatrzyma. Plateau jest sygnałem, że trenowanie może coś dodać.

**4.** Dostosuj wagi za pomocą [[llm-training-and-fine-tuning|LoRA]], gdy cel jest stabilny i wąski: format, rubryka, poziom czytelności, słownik dziedzinowy.

**5.** Dotrenuj, gdy problemem jest zachowanie, a nie treść, i pisz nagrodę wobec punktu odniesienia, co do którego oczekuje się, że zostanie oszukany.

**6.** Buduj zbiór treningowy na poziomie kroków. Dane zawierające tylko odpowiedź nie uczą błędnego przekonania.

## Uzyskaj punkt odniesienia, który da się pobić

Zanim cokolwiek zostanie zmienione, należy zapisać, co zwraca zwykły prompt. Potem zapisać, co zwraca trywialna metoda.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Badanie asystenta bazy wiedzy dla kursu]] warto przeczytać choćby dla tego jednego ustalenia. Lokalny LLM bez wyszukiwania osiągnął **52,3%** trafności. Punkt odniesienia TF-IDF, metoda leksykalna sprzed dziesięcioleci, osiągnął **55,4%**. Model był gorszy od metody klasycznej.

Pominięcie tego kroku oznacza, że nie da się stwierdzić, czy dostrojenie pomogło. Co gorsza, można wdrożyć system, który bije wyszukiwanie po słowach kluczowych, i dowiedzieć się o tym dopiero wtedy, gdy wspomni o tym asystent dydaktyczny. Dwie liczby w arkuszu, uzyskane w jedno popołudnie, chronią resztę budżetu.

## Osadź model we własnych materiałach

Dodanie [[rag|generowania wspomaganego wyszukiwaniem]] po materiałach kursowych, bez żadnego dostrajania, podniosło ten sam system z 52,3% do **66,6%**. Ten przyrost pochodził z indeksu i ma właściwość, której przebieg trenowania nie ma: gdy dokumenty się zmieniają, indeksuje się je ponownie.

Dwa inne wyniki wskazują w tę samą stronę. Przegląd PRISMA 23 badań empirycznych nad dostosowywaniem SI do [[writing-education|nauczania pisania]] wykazał **przewagę inżynierii promptów (N = 13) nad dostrajaniem (N = 7)** ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Gdzie baza wiedzy musi pozostawać aktualna, wyszukiwanie jest jedyną dźwignią, która pozostaje aktualna bez ponownego uruchamiania zadania treningowego.

Wyszukiwanie ma też formę pedagogiczną. Osadzenie modelu we własnych rozwiązanych przykładach i rubrykach to sposób, w jaki model pozostaje w obrębie [[scaffolding|rusztowania]], które zaprojektowano, odpowiadając na poziomie, który został ustalony, zamiast dryfować w ogólne porady. Ten dryf jest najczęstszą skargą dotyczącą gotowych tutorów i częściej jest problemem wyszukiwania niż problemem wag.

## Pisz prompt pod rubrykę i wypatruj plateau

Praca nad promptem nie jest wstępem, który robi się w oczekiwaniu na kartę GPU. Dwa wyniki pokazują, co osiąga sama:

- **Promptowanie kierowane rubryką, iteracyjnie współdopracowywane, podniosło zgodność LLM z człowiekiem w pracach projektowych studentów z 54,75% do 81,25%** (alfa Cronbacha od 0,393 do 0,798), bez żadnego dostrajania ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Prompt oparty na literaturze i dostosowany do kontekstu wywoływał docelowe matematyczne [[misconceptions|błędne przekonania]] na poziomie **0,98** obecności, wobec **0,40** przy promptcie ogólnym ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Praktycznym sygnałem jest **plateau**. W badaniu nad generowaniem pozycji iteracyjne dopracowywanie promptu przestało przynosić poprawę, a dostrojenie GPT-4.1 *na zoptymalizowanym promptcie* dodało wtedy pozostały przyrost ([[gpt-item-generation-l2-listening-2026]]). Plateau po rzeczywistej pracy nad promptem jest dowodem, że trenowanie ma co dodać. Sięganie po trenowanie przed osiągnięciem plateau jest zgadywaniem, a zgadywanie kosztuje miesiąc.

Warto zauważyć, co wynik z generowania pozycji mówi o kolejności. Dostrojenie zbudowano na zoptymalizowanym promptcie, więc praca nad promptem nie poszła na marne, gdy zespół ostatecznie trenował. Tani szczebel jest też specyfikacją dla drogiego.

## Dostosuj wagi, gdy cel jest stabilny i wąski

Adaptacja się opłaca, gdy model ma niezawodnie trzymać jakąś właściwość: poziom czytelności, format wyniku, dziedzinę, której mu brakuje. Powracający wynik jest taki, że **celowanie bije rozmiar**.

- Trzy modele **8B** dostrojone na zaprojektowanym przez ekspertów programie czytania dla dzieci przewyższyły GPT-4o i Llama 3.3 70B w trybie zero-shot w metrykach związanych z trudnością, przy nieistotnych problemach z bezpieczeństwem. Autorzy ujmują to jako **kontrolowalność ponad skalę** ([[llm-children-reading-story-generation]]).
- Zbiór instrukcji liczący **24 795 przykładów**, osadzony w indyjskich systemach wiedzy, dał dostrojenie **7B** ocenione na **6,39** przez zewnętrzny panel pięciu sędziów, w granicach **0,15** od mocnego ogólnego modelu referencyjnego, przy ułamku kosztu wdrożenia. Ten sam model bazowy bez dostrojenia uzyskał **wynik bliski zeru w wymiarach dziedzinowych** ([[iks-instruct-dataset-indian-knowledge]]). Ta luka między kompetencją ogólną a kompetencją tu jest całym uzasadnieniem adaptacji dziedzinowej.
- Pojedynczy adapter [[llm-training-and-fine-tuning|LoRA]] wytrenowany na około **3 900** połączonych ocenionych przykładach doprowadził pięć małych otwartych modeli (od 4B do 30B) do równości lub przewagi nad człowiekiem oceniającym na dwóch egzaminach z informatyki ([[llm-graders-computer-science-exams-2026]]). Jeden adapter, jeden zbiór danych, kilka modeli bazowych: to kształt wdrożenia, który może prowadzić mały zespół.

Słowo *stabilny* w nagłówku dźwiga ciężar. Format, rubryka, poziom czytelności i słownik dziedzinowy są celami stabilnymi. Proza nasycona osądem takiego celu nie ma i właśnie tam adaptacja zawodzi, co pokazują dwa następne rozdziały.

## Zmień zachowanie, gdy problemem są odpowiedzi

Adaptacja uczy model *co wytwarzać*. Dotrenowanie uczy go *jak się zachowywać*. W tutoringu ta różnica jest całym problemem: modele ogólne są dotrenowywane na ludzkich preferencjach co do pomocności, co oznacza szybkie odpowiadanie, a nauczanie wymaga powstrzymania odpowiedzi.

Najsilniejsze wyniki edukacyjne w tym korpusie są tutaj. Model nagrody EduQwen wprost przedkładał **prowadzenie odpowiedzi nad odpowiadanie wprost**, a jego trzystopniowy potok osiągnął **96,52%** na benchmarku CDPK wobec **90,55%** Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). Symulator pisania SWIM przeszedł od promptowania osadzonego w rubryce (najlepszy QWK **0,577**) do nadzorowanego dostrajania (**0,474 ± 0,023**), a potem do uczenia ze wzmocnieniem (**0,618 ± 0,005**) w każdej cesze i każdym promptcie ([[swim-student-writing-simulation-2026]]).

Liczby SWIM trzeba czytać uważnie, bo środkowy krok poszedł wstecz. Nadzorowane dostrajanie na demonstracjach pogorszyło symulator względem promptu, od którego zaczynał, i dopiero sygnał nagrody odzyskał stratę, a potem pobił punkt odniesienia. Jeśli plan zatrzymuje się na nadzorowanym dostrajaniu, plan może być objazdem.

## Nadzoruj na poziomie kroków

Jedno ustalenie jest łatwe do przeoczenia i kosztowne do zignorowania: **jakość nadzoru bije ilość nadzoru**. Modele dostrojone instrukcyjnie uczyły się błędnych przekonań algebraicznych tylko wtedy, gdy trenowano je na **śladach rozwiązań na poziomie kroków**. Trenowane na samych odpowiedziach końcowych utrzymywały trafność **poniżej 30% przy każdym rozmiarze danych** ([[misconception-acquisition-dynamics-llms-2026]]).

Jeśli przykłady treningowe to pary pytanie i poprawna odpowiedź, model uczy się niewłaściwej rzeczy, a dodawanie przykładów tego nie naprawi. Potrzebna jest praca pośrednia: błędny zwrot, krok, w którym student zbłądził, korekta. Zbieranie tego jest problemem inżynierii danych z ograniczeniem pedagogicznym i zwykle oznacza rejestrowanie sesji, a nie zbieranie kluczy odpowiedzi.

## Gdzie adaptacja po cichu zawodzi

To jest część, którą entuzjazm pomija.

**Proza nasycona osądem.** W WrAFT ten sam projekt, który z powodzeniem dostroił model do *oceniania* esejów (QWK 0,84), dawał ucięty i nieparsowalny wynik, gdy dostrajał go do *informacji zwrotnej*, podczas gdy bezpośrednie promptowanie Claude 3.7 dało informację zwrotną najwyżej ocenioną przez nauczycieli ([[wraft-automated-writing-evaluation-argumentative-2026]]). Dostrajanie nauczyło model trafiać w ocenę i ocenianie było jedyną rzeczą, której się nauczył.

**Transfer między modelami.** Skala nie jest pewnym predyktorem wyników dalszych przy adaptacji LoRA, a **identyczne hiperparametry dawały jakościowo różne zachowanie w różnych architekturach** ([[aiawe-automated-writing-evaluation]]). Przepis, który zadziałał na jednym modelu, nie jest przepisem.

**Architektura ponad liczbę parametrów.** Dostrojenie trzech otwartych modeli tekst-na-obraz na 1 000 podpisanych obrazach z inżynierii jądrowej znacznie poprawiło Stable Diffusion XL, dało ograniczone przyrosty dla SD-v3.5-Medium i **nie dało żadnej mierzalnej poprawy dla Flux.1** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Problem był w walidacji.** Model GPT-4 z czołówki, bez dostrojenia, wytwarzał około **35%** zbyt ogólnych, błędnych lub zdradzających odpowiedź podpowiedzi przy tworzeniu informacji zwrotnej w tutoringu, a jego własne automatyczne kontrole jakości nie zgadzały się z osądem człowieka ([[reddig-maclellan-personalized-feedback-llm-2026]]). To problem filtrowania i LoRA go nie rozwiąże.

Wzór we wszystkich czterech przypadkach: adaptacja niezawodnie przesuwa model w stronę celu, który można określić i ocenić. Nie dodaje osądu, a potok bez sprawdzenia i tak wypuści zły wynik.

## Zaplanuj koszt adaptacji uczciwie

Dla szczebla adaptacji próg jest niższy, niż zakłada większość zespołów: **kilkaset do kilku tysięcy przykładów i jedna karta GPU**. LoRA trenuje niewielką liczbę dodanych parametrów i pozostawia wagi bazowe zamrożone, więc kilka modeli można obsługiwać z jednego adaptera.

Ranga jest kompromisem, a nie pokrętłem do maksymalizacji. Przyrost na milion parametrów adaptera spadał monotonicznie wraz ze wzrostem rangi, a wyrównanie do poziomu kursu było decyzją o skali i randze, a nie darmowym ulepszeniem ([[lora-finetuned-control-systems-course-qa-2026]]).

To, które warstwy się adaptuje, też jest realnym wyborem. Aktualizacja **tylko czterech ostatnich warstw Transformera** w analizatorze dyskursu opartym na BERT przewyższyła zarówno adaptację tylko górnej warstwy, jak i dostrajanie pełnej głębokości ([[bert-discourse-english-teaching-2026]]). Trzy konfiguracje, trzy różne wyniki, i najtańsza wygrała.

Koszt, który łatwo zaniżyć, to ewaluacja, większa niż rachunek za obliczenia. Zobacz [[checking-whether-educational-ai-works|Jak sprawdzić, czy edukacyjna SI działa poprawnie, a nie tylko dobrze ocenia?]].

## Skalibruj oczekiwania

Wybór modelu i promptu odpowiadają razem tylko za około **15%** niedopasowania między LLM a przyrostami uczenia się studentów, a w tym badaniu zestawy ważone benchmarkiem i głosowanie jednomyślne pogarszały wyrównanie ([[educational-llm-alignment]]). Dane pretreningowe są dominującą dźwignią zachowania modelu i jedyną, której nie można pociągnąć.

Nic z tego nie argumentuje przeciw powyższej pracy. Argumentuje przeciw oczekiwaniu, że dostrojenie naprawi problem projektowy. Jeśli problem polega na tym, że tutor odpowiada zbyt chętnie, trenowanie może temu zaradzić. Jeśli problem polega na tym, że uczący się nie angażują się w niego, trenowanie tego nie zrobi, a liczba 15% mówi, że pieniądze lepiej wydać gdzie indziej.

## Co zespoły rozumieją błędnie

Dostrajanie to sposób nauczenia modelu kursu. Wyszukiwanie po własnych materiałach podniosło ten sam system z 52,3% do 66,6% bez żadnego trenowania, a prompt dopracowany wobec rubryki przesunął zgodność z 54,75% do 81,25%. Trenowanie uczy zachowania i formatu znacznie pewniej niż treści.

Większy model bazowy usuwa potrzebę tego wszystkiego. Model 8B dostrojony na programie czytania dla dzieci pobił GPT-4o i Llama 3.3 70B w trybie zero-shot w metrykach trudności, a dostrojenie 7B wypadło w granicach 0,15 od mocnego ogólnego modelu referencyjnego przy ułamku kosztu wdrożenia. Rozmiar i dopasowanie to różne osie i tylko jedną z nich można kupić na tokeny.

Więcej danych naprawi źle zbudowany zbiór treningowy. Nadzór obejmujący tylko odpowiedzi pozostawił trafność poniżej 30% przy każdym rozmiarze danych w badaniu błędnych przekonań. Skala nie naprawia celu, w którym brakuje informacji potrzebnej modelowi.

Przepis, który zadziałał na jednym modelu, zadziała na następnym. Identyczne hiperparametry dawały jakościowo różne zachowanie w różnych architekturach, a ta sama metoda dostrajania znacznie poprawiła jeden model obrazu i nie dała mierzalnego efektu w innym. Przepis trzeba uruchomić ponownie na własnym modelu bazowym, inaczej jest to zgadywanie.

Nadzorowane dostrajanie to bezpieczny krok pośredni przed uczeniem ze wzmocnieniem. W SWIM etap nadzorowany uzyskał 0,474 wobec 0,577 z promptu, który zastępował, i tylko sygnał nagrody to odzyskał. Krok pośredni może kosztować miesiąc i regresję.

## Co się na Tobie odbije

**„Budżet jest zatwierdzony na dostrajanie, więc dostrójmy”.** Najpierw tydzień na punkcie odniesienia i indeksie. Jeśli wyszukiwanie przesuwa liczbę, dostrojenie jest późniejszą decyzją podejmowaną z lepszą informacją, a uzasadnienie będzie mocniejsze albo pojawi się dobry powód, by zwrócić kartę GPU.

**„Nasz problem polega na tym, że studenci tego nie używają”.** Trenowanie zmienia to, co model wytwarza. Liczba 15% opisuje, ile wyjaśnia wybór modelu i promptu w niedopasowaniu do przyrostów uczenia się, a zaangażowanie leży poza tym. Zanim kupi się obliczenia, warto zbadać, gdzie studenci odpadają.

**„Nie możemy wysyłać prac studentów do API dostawcy”.** Najsilniejszy wynik LoRA w tym materiale pochodził z otwartych modeli w zakresie od 4B do 30B, a jeden adapter obsługiwał kilka z nich. Ten kształt wdrożenia jest dostępny dla zespołu z jedną kartą GPU i bez umowy o przetwarzaniu danych.

**„Promptowanie to hack; prawdziwa praca to trenowanie”.** Przegląd 23 badań nad nauczaniem pisania wykazał, że promptowanie jest podejściem dominującym, a dostrajanie za nim, a największy raportowany przyrost na tej stronie pochodził z indeksu. I przegląd, i badanie asystenta kursowego uporządkowały te szczeble według zmierzonego przyrostu.

**„Próbowaliśmy promptowania i osiągnęło plateau, więc potrzebujemy trenowania”.** To jest właściwe odczytanie i jedyny przypadek, w którym wspinaczka jest uzasadniona. Zoptymalizowany prompt należy wziąć do dostrojenia, jak zrobił zespół od generowania pozycji, i oczekiwać przyrostu mniejszego niż praca nad promptem.

**„Nasze materiały kursowe są niespójne, więc wyszukiwanie zwróci śmieci”.** Zwróci, a wyszukiwanie dziedziczy jakość korpusu. Czyszczenie korpusu jest tańsze niż trenowanie modelu, by to obejść, a przyrost z 52,3% do 66,6% zmierzono na zwykłych materiałach kursowych, a nie na wyselekcjonowanym zbiorze.

## Co zrobić w tym tygodniu

**1.** Uruchom punkt odniesienia tylko na promptcie i punkt odniesienia na słowach kluczowych na 50 prawdziwych pytaniach z kursu i zapisz obie liczby.

**2.** Skieruj wyszukiwanie na materiały, które już są, i ponownie uruchom te same 50 pytań, aby przyrost był mierzony wobec własnego punktu odniesienia.

**3.** Wstaw rubrykę do promptu systemowego i iteruj przez tydzień. Zatrzymaj się, gdy dwie rundy nic nie dodadzą.

**4.** Przeaudytuj zbiór treningowy pod kątem śladów na poziomie kroków. Jeśli to pary pytanie i odpowiedź, zbiór nie jest gotowy.

**5.** Zapisz jedną właściwość, która ma być niezawodnie trzymana, i zdecyduj, czy to zachowanie, czy treść. Ta decyzja wybiera szczebel.

## Dokąd dalej

[[training-ai-tutors-to-guide-rather-than-answer|Jak trenować tutora SI, by prowadził studentów, a nie odpowiadał za nich?]] omawia szczegółowo połowę dotyczącą dotrenowania. [[checking-whether-educational-ai-works|Jak sprawdzić, czy edukacyjna SI działa poprawnie?]] omawia, jak stwierdzić, czy cokolwiek z tego zadziałało. [[developing-ai-tutor|Jakie są najlepsze praktyki rozwijania skutecznego tutora SI?]] to strona projektowania interakcji dla tego samego celu, a [[designing-educational-ai-software|Jakie są najlepsze praktyki projektowania oprogramowania edukacyjnej SI?]] omawia otaczający system. Pełna strona koncepcyjna to [[llm-training-and-fine-tuning]].
