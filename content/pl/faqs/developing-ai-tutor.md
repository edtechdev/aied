---
title: "Jakie są najlepsze praktyki tworzenia skutecznego tutora SI?"
created: "2026-08-29T20:36:43-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
audience: [educational technology developers, software developers, instructional designers]
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
updated: "2026-10-29T15:22:02-04:00"
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Do pilotażu tutora zostały trzy tygodnie. Czat działa, model czyściutko wyjaśnia pochodną, a wewnętrzne demo zebrało oklaski. Potem ktoś z centrum dydaktyki zadaje pytanie, na które w specyfikacji nie ma pola: czy po semestrze z tym narzędziem student rozwiąże zadanie, gdy narzędzia nie będzie w pokoju? To, co jest, to lista funkcji. Tego, czego nie ma, to jedno zdanie mówiące, co uczący się musi umieć samodzielnie na koniec.

Tutor to polityka opakowująca [[conversational-ai|chatbota]], a to polityka rozstrzyga, czy uczenie się w ogóle nastąpi. Należy nazwać pracę poznawczą, którą musi wykonać uczący się, sprawić, by system jej wymagał (próba przed pomocą, drabinka podpowiedzi, która wygasa, sprawdzenie, którego model nie zdoła podrobić), i ewaluować przy wyłączonym tutorze. Jakość modelu decyduje o tym, jak dobra wydaje się rozmowa. Polityka rozstrzyga, co student potrafi w czerwcu.

## W skrócie

**1.** Zapisać cel jako twierdzenie o wynikach bez wsparcia, a następnie wyprowadzić z niego każdą funkcję. Jeśli funkcji nie da się wyprowadzić z tego zdania, jest to funkcja demonstracyjna.

**2.** Zbudować model uczącego się z dowodów, które można zalogować, i przechowywać każdą diagnozę jako hipotezę z wartością pewności, a nie jako fakt.

**3.** Ustalić drabinkę pomocy w kodzie, z nazwanymi szczeblami, i sprawić, by interfejs pobierał od uczącego się jakąś opłatę za każdy krok w dół.

**4.** Oprzeć treść na własnych materiałach i oddać sprawdzanie arytmetyki, algebry i kodu narzędziom deterministycznym, które nie potrafią halucynować.

**5.** Testować porażki dydaktyczne w całych rozmowach: wyciek odpowiedzi, schlebianie, wzmacnianie błędnych przekonań, dryf instrukcyjny.

**6.** Mierzyć w fazie wycofania i testem odroczonym, a nie wynikiem satysfakcji.

## Zapisać cel jako twierdzenie o wynikach bez wsparcia

Trzy listy, spisane zanim ktokolwiek wybierze model:

- Co uczący się powinni wiedzieć lub umieć potem.
- Jaką pracę poznawczą muszą wykonać sami.
- Co tutor może zrobić za nich.

Literatura o [[intelligent-tutoring|inteligentnym tutorowaniu]] wskazuje, że skuteczność zależy od projektu [[pedagogy|dydaktycznego]], a nie od samej zdolności modelu, i że porażkę łatwo zbudować przez przypadek. Tutor optymalizowany pod „skończyć zadanie” podkopie tutora optymalizowanego pod „nauczyć się rozwiązywać zadanie”, przechodząc przy tym każdy test funkcjonalny, jaki się napisze, bo oba dają poprawne odpowiedzi końcowe. Różnica tkwi w tym, co student zrobił między pytaniem a odpowiedzią.

Druga lista to miejsce, w którym zespoły programistyczne stają się konkretne. Etykietę mistrzostwa typu „mistrzostwo pochodnych” trzeba czytać tak, by nie znaczyła po prostu wytworzenia poprawnej pochodnej. Trzeba ją rozbić na rozpoznawanie, kiedy pochodna jest właściwa, interpretowanie jej jako chwilowej szybkości zmiany, wybór reguły, wykonanie procedury, wyjaśnienie, dlaczego wybór był trafny, sprawdzenie sensowności i zastosowanie do nieznanego zadania. Każdy z tych elementów jest osobną rzeczą do zalogowania i każdy sugeruje inną reakcję, gdy go brakuje. Ten rozkład jest też obroną przed [[correct-answer-trap-misconceptions|pułapką poprawnej odpowiedzi]], w której uczący się dochodzi do właściwego wyniku przez błędne rozumowanie, a analityka odnotowuje sukces. [[correct-answer-trap-ai-tutor|Łapanie pułapki poprawnej odpowiedzi]] i [[zhang-tutormoments-2026|Gdy pomoc nie pomaga]] opisują wersje tej porażki w warunkach produkcyjnych.

## Zbudować model uczącego się przed rozmową

Model uczącego się przechowuje dwa rodzaje stanu: szacunki dla poszczególnych pojęć (granica: w rozwoju, reguła potęgowa: opanowana, reguła iloczynu: w rozwoju, reguła łańcuchowa: nie wykazano) oraz hipotezy błędnych przekonań wraz z dowodami i pewnością, jaka za każdą stoi. Należy trzymać je osobno. Szacunek pojęciowy steruje doborem trudności. Hipoteza steruje następnym pytaniem.

Trzeba uważać, by nie pozwolić [[llm|modelowi językowemu]] diagnozować samodzielnie. [[benchmark|Benchmarki]] pokazały, że tutory oparte na LLM potrafiły rozpoznać jednoznacznie poprawne rozumowanie, a jednocześnie odrzucać trafne alternatywy albo akceptować rozumowanie błędne. Model, który wychwytuje dobry przypadek, a mylnie czyta niejednoznaczny, zawodzi dokładnie tych studentów, którzy pomocy potrzebują. W dziedzinach o wysokich konsekwencjach architektura, która się utrzymuje, to **strukturalna diagnoza plus elastyczny dialog z LLM**, układ opisany w [[yasir-llm-tutoring-agents-2026|Potwierdza poprawność, gubi resztę]]: własny detektor ustala, co student prawdopodobnie zrobił, a model pisze rozmowę wokół tego ustalenia.

Diagnoza powinna mieć wyraźną sekwencję, której model nie może pominąć: wykryj, zweryfikuj, odpowiedz. Model może zaproponować [[misconceptions|błędne przekonanie]] jako hipotezę, ale potem musi ją zweryfikować wobec rzeczywistej pracy studenta lub pytania celowanego, zanim tutor na nią odpowie. Bez tego kroku system wymyśla dowody, a następnie tutoryzuje studenta w sprawie błędu, którego ten nie popełnił, co jest i bezużyteczne, i lekko obraźliwe.

Dowody warte logowania, w przybliżonej kolejności użyteczności: ostatnie próby wraz z krokami pośrednimi, wykazana wiedza według pojęć, zachowania w poszukiwaniu pomocy (co samo jest sygnałem o pewności siebie) oraz samoopisowa pewność, jeśli się ją zbiera. Trzeba dostosowywać trudność i pomoc do tego zapisu, a najnowszy prompt uczącego się traktować jako jedno z jego wejść. Pojedynczy prompt jest złym estymatorem tego, co student wie, a tutor, który reaguje tylko na niego, będzie szarpał.

## Ustalić drabinkę pomocy, a potem sprawić, by interfejs pobierał za nią opłatę

Szczeble trzeba spisać przed napisaniem promptu, bo drabinka jest decyzją produktową z nazwanymi stanami, a ustawienie tonu nie potrafi jej wyrazić. Wykonalna sekwencja:

1. Samodzielna próba.
2. Pytanie metapoznawcze o to, czego student już próbował.
3. Wskazówka pojęciowa.
4. Wskazanie właściwej reguły.
5. Ustawienie części zadania.
6. Rozwiązany krok pośredni.
7. Rozwiązanie wzorcowe.
8. Student objaśnia rozwiązanie.
9. Student rozwiązuje zadanie porównywalne bez pomocy.

Wsparcie wygasa wraz ze wzrostem kompetencji, i to jest mechanizm w centrum [[scaffolding|rusztowania]]. Zobaczenie rozwiązanego przykładu nie wykazuje mistrzostwa, więc każda sesja, która dociera do siódmego szczebla, jest winna dziewiąty, zanim uzna się ją za zakończoną.

Dowód przyczynowy na to, że drabinkę warto w ogóle budować, pochodzi z eksperymentu terenowego, w którym nieosłonięty interfejs GPT podniósł wyniki z pomocą i obniżył późniejsze wyniki egzaminu bez pomocy. Tutor udzielający podpowiedzi w dużej mierze usunął tę karę za uczenie się ([[generative-ai-guardrails-harm-learning|Generatywna SI bez barier ochronnych może szkodzić uczeniu się]]). Ograniczenie jest architektoniczne. Ten sam model, z innym zachowaniem pomocowym, dał przeciwne wyniki na miarze, która ma znaczenie.

Większy randomizowany eksperyment terenowy z ponad 6 000 uczniów klas 6-8 szkoły podstawowej na platformie ćwiczeń opartej na mistrzostwie pokazuje, jak drabinka wygląda w logach. Studenci przypisani do wsparcia SI postępowali wolniej i podejmowali mniej pytań, a odpowiadali trafniej. Najwyraźniejszym mechanizmem była poprawność kolejnej próby po błędzie: potrzeba było mniej prób, by wrócić do poprawnej odpowiedzi. Ten wzorzec to produktywne spowolnienie i właśnie taki ślad drabinka podpowiedzi powinna zostawiać ([[making-ai-tutoring-productive-mastery-math-2026|Czynić tutoryzację SI produktywną]]).

To samo badanie dostarcza ostrzeżenia o pulpitach, które się buduje. Wymóg trzech poprawnych odpowiedzi z rzędu ostro podniósł mistrzostwo definiowane przez platformę, nie dając wykrywalnych zysków w odroczonym teście tydzień później. Najsilniejszy dowód z testu odroczonego pojawił się tylko tam, gdzie SI siedziała wewnątrz procesu mistrzostwa (współczynnik 0,085), a nie tam, gdzie była dostępna jako samodzielny dostęp. Jeśli metryką sukcesu jest licznik serii, trafi do produkcji system, który optymalizuje serię.

Tarcie w interfejsie należy do tego samego przebiegu projektowego. Nieograniczone podpowiedzi pod widocznym przyciskiem zamieniają całą drabinkę w skrót, a przedwczesne prośby o podpowiedź przy pobieżnej lekturze wiążą się z niższymi [[learning-gains|przyrostami uczenia się]]. Zastąpienie `[Hint][Hint][Hint][Show Answer]` pytaniami „co zostało już wypróbowane?” i „co blokuje pracę?” (wybór reguły, ustawienie równania, wykonanie algebry, zrozumienie pojęcia) kosztuje jeden ekran i kieruje studenta na szczebel, którego naprawdę potrzebuje. Daje też dane z logów mówiące, który szczebel zwykle pomija.

## Oddać sprawdzalne części sprawdzaczowi

Generowanie trzeba zakotwiczyć w materiale zatwierdzonym przez prowadzącego: fragmentach podręcznika, notatkach do kursu, rozwiązanych przykładach, terminologii, zatwierdzonych metodach, notacji, zasadach zadania, politykach i zasobach [[curriculum-design|programowych]]. Generowanie wspomagane wyszukiwaniem wobec tego korpusu zmniejsza [[hallucination-risk|ryzyko halucynacji]], ale go nie eliminuje, co omawia [[rag|RAG]]. W interfejsie należy pokazywać cytaty lub proweniencję tam, gdzie student mógłby sprawdzić twierdzenie, bo cytat jest tym, co czyni zakotwiczenie audytowalnym po fakcie.

Zakotwiczenie robi też robotę, której metryki trafności nie widzą. Kurs ma zatwierdzone metody, a tutor, który wprowadza matematycznie poprawną technikę nieobecną w kursie, nauczył studenta czegoś, za co ten dostanie mniej punktów. Wyszukiwanie w warstwie kursu to sposób, w jaki tutor pozostaje w zbiorze metod.

W dziedzinach z odpowiedziami formalnie sprawdzalnymi trzeba dodać narzędzia deterministyczne: kalkulatory, systemy algebry symbolicznej, wykonywanie kodu, grafy wiedzy, walidatory regułowe i solvery [[discipline-specific-aied|specyficzne dla dziedziny]]. Podział pracy jest tu najważniejszy. LLM obsługuje wyjaśnienie i dialog. Silnik symboliczny weryfikuje równoważność algebraiczną, pochodne, całki, rozwiązania równań, punkty krytyczne i przybliżenia numeryczne. Błędny krok pośredni, który wyłapie weryfikator, staje się momentem tutoryzacji. Błędny krok pośredni, którego nikt nie wyłapie, staje się błędnym przekonaniem, z którym student idzie na egzamin.

## Wymagać, by uczący się działał na podstawie informacji zwrotnej

Informacja zwrotna mówiąca „poprawnie”, „niepoprawnie” albo „dobra robota” to zdarzenie punktacyjne w przebraniu nauczania. Baza wiedzy traktuje [[feedback|informację zwrotną]] jako pętlę dostarczenie-przyjęcie: informacja wspiera uczenie się, gdy studenci ją rozumieją i działają na jej podstawie, a druga połowa to ta, którą systemy zwykle pomijają. Tutor należy zbudować tak, by nazywał krok rozumowania, którego sprawa dotyczy, mówił, co wymaga przemyślenia, dawał jedną konkretną następną czynność i prosił uczącego się o przewidzenie lub wyjaśnienie, zanim informacja zostanie ujawniona.

Sekwencja, która to unosi, brzmi: najpierw uczący się, potem SI, potem znów uczący się. Student generuje, wybiera, uzasadnia, ocenia lub reflektuje; tutor odpowiada; student robi coś z odpowiedzią. Struktura tury powinna być zaprojektowana tak, by nie było to opcjonalne. System, w którym model może wyprodukować trzy akapity w odpowiedzi na jedno pytanie, uczy studenta pytać i czytać.

Celem długoterminowym jest interioryzacja. Uczący się powinni w końcu sami prowadzić pytania tutora i jego strategie [[problem-solving|rozwiązywania problemów]], co jest argumentem o [[agency|sprawczości]] i powodem, dla którego drabinka ma najwyższy szczebel, na którym tutor milczy.

## Projektować z myślą o tym, co dzieje się w czterdziestej turze

Bezpieczeństwo pedagogiczne to osobny zestaw testów niż zwykłe bezpieczeństwo chatbota, a większość zespołów wypuszcza produkt tylko z drugim. Toksyczność i odporność na jailbreak nie mówią nic o tym, czy tutor poda odpowiedź studentowi, który poprosi dwa razy, zgodzi się z błędną metodą, bo student brzmiał pewnie, wypłynie ze zbioru metod kursu w długiej sesji albo popchnie uczącego się ku [[cognitive-offloading|odciążaniu poznawczemu]]. [[ai-sycophancy|Schlebianie]] przedostaje się pierwsze, bo zgoda czyta się jako życzliwość, a dane preferencji ją nagradzają.

Testować należy wyciek odpowiedzi, wzmacnianie błędnych przekonań, nadmierną zgodę, nieodpowiednią trudność, odciążanie, stronnicze traktowanie, utratę sprawczości uczącego się, dryf instrukcyjny i nadmierną pewność w błędnych wyjaśnieniach. Testy trzeba prowadzić na rozciągniętych rozmowach, a nie na pojedynczych turach, bo porażki pedagogiczne kumulują się: pierwsze dziesięć tur może być wzorowych, a jedenasta może zniszczyć sesję. Tutor powinien być życzliwy i poprawny naraz, także wtedy, gdy uczący się upiera się przy błędnym przekonaniu. [[pedagogical-safety|Bezpieczeństwo pedagogiczne]] i [[hazra-safetutors-pedagogical-safety-2026|Bezpieczeństwo tutorów SI i szkody pedagogiczne]] rozkładają taksonomię porażek.

## Umieścić architekturę danych w tym samym dokumencie projektowym

Zbierać należy tylko te dane o uczących się, które są pedagogicznie konieczne, i umieć powiedzieć, po co istnieje każde pole. Tam, gdzie trzyma się pamięć trwałą lub [[student-modeling|model uczącego się]], trzeba pokazać jego cel uczącemu się, dać uczącemu się nad nim odpowiednią kontrolę, chronić informacje wrażliwe, zdefiniować retencję i kierować decyzje o skutkach do prowadzącego lub innego [[human-in-the-loop-ai|punktu kontrolnego z człowiekiem]]. Model uczącego się, który po cichu gromadzi szacunek pewności, jakiego student nigdy nie widzi, jest problemem ochrony danych i problemem pedagogicznym.

Należy audytować zachowanie systemu ze względu na tło językowe, poziom zdolności, kontekst kulturowy, potrzeby [[accessibility|dostępności]] oraz poziom [[prior-knowledge|wiedzy wstępnej]] i doświadczenia z SI. Zróżnicowane wyniki przy tym samym celu to błąd, do którego przypisany jest student, i nie pojawi się w zagregowanej liczbie trafności.

Jedna decyzja o dostępności zasługuje na osobną linię: nie czynić zaawansowanego [[prompt-engineering|inżynierii promptów]] warunkiem dobrego nauczania. Jeśli tutor uczy dobrze tylko wtedy, gdy student napisze staranny prompt, zbudowano system, który uprzywilejowuje studentów już umiejących rozmawiać z modelami. Tutor powinien pomagać uczącym się formułować produktywne pytania, co jest też umiejętnością [[metacognition|metapoznawczą]], którą warto mieć.

## Oprzyrządować okres po wycofaniu wsparcia

Metryki sesji nie powiedzą, czy to działa. Trafność odpowiedzi, długość rozmowy, preferencja studentów, satysfakcja, ukończenie zadania i [[student-engagement|zaangażowanie]] rosną także w systemach, które niczego nie uczą, bo studenci lubią pomoc, a pomoc łatwo zmierzyć. Ewaluować należy wyniki bez pomocy, odroczone utrzymanie wiedzy, transfer na nowe zadania, korektę błędnych przekonań, niezależność uczącego się, przyjęcie informacji zwrotnej i [[differential-effects-across-learner-groups|zróżnicowane efekty między grupami uczących się]]. [[ai-ed-evaluation|Ewaluacja interwencji w edukacji ze SI]] ma metody, a [[ai-tutor-behavioral-evaluation|Brakująca oś ewaluacji]] dowodzi, że konstruktem jest zachowanie.

Dwa badania zaostrzają regułę przeciw [[self-report-measures|samoopisowi]] i krótkim horyzontom czasowym. Pilotaż z 38 początkującymi studentami programowania wykazał silny związek między korzystaniem z [[generative-ai|generatywnej SI]] a uczeniem się *postrzeganym* (rs=0,802, p<0,001), podczas gdy wskaźniki samodzielnego postępu bez wsparcia prowadzącego wypadły najniżej. Autorki i autorzy nazywają tę lukę iluzją kompetencji i długiem epistemicznym, i jest to dokładnie ta luka, którą nagradza metryka satysfakcji ([[genai-cognitive-tutor-programming-2026|Generatywna SI jako nieformalny tutor poznawczy]]).

Mówiąc bardziej zasadniczo, większość ewaluacji zatrzymuje się w momencie, w którym kończy się pomoc. [[cognitive-washout-ai-skill-decay-2026|Dynamika wymywania poznawczego]] nazywa niezmierzony okres po wycofaniu wsparcia i formalizuje cztery wyniki: sprężyste odbicie, częściowy plateau, utajone rusztowanie i nadrobienie z nadwyżką. Jej krzywa wymywania zawiera stałą czasu odzyskiwania, człon kompletności odzyskiwania i wskaźnik histerezy porównujący wysiłek ponownego uczenia się z wysiłkiem pierwotnym. Ponieważ odwracalność rozstrzyga o ciężkości, ramy przekonują, że zaplanowaną praktykę bez pomocy należy dawkować według krzywej odzyskiwania, a nie dyskutować o niej jako o zasadzie. Plan ewaluacji potrzebuje fazy wycofania obok bezpośredniego testu po interwencji, a [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|randomizowany dowód, że krótka pomoc obniża późniejsze wyniki bez pomocy]] jest powodem, by zaplanować ją wcześnie.

## Dać nauczycielom coś do redagowania

Przed wdrożeniem nauczyciele powinni przetestować realistyczne profile uczących się, typowe błędne przekonania, przypadki brzegowe, prompty adwersarialne, odpowiedzi niejednoznaczne i długie rozmowy tutoryzacyjne. Porażki pedagogiczne należy logować i zawracać do promptów systemowych, polityk tutoryzacji, źródeł wiedzy, [[guardrails|barier ochronnych]], reguł modelu uczącego się i doboru modelu. Płynna odpowiedź wciąż może być pedagogicznie błędna, a nauczyciel to jedyny recenzent, który to widzi.

[[teacher-intervention-k12-ai-based-instruction-2026|Przegląd systematyczny Lee obejmujący 29 badań K-12]] opisuje, z czego ten nadzór się składa i gdzie się załamuje. Interwencja [[teacher-role|nauczyciela]] to powtarzający się czterofazowy cykl monitorowania, osądu, interwencji i orkiestracji. Alerty SI, [[visualization|pulpity]] i automatyczne oceny „nie prowadzą automatycznie do działania pedagogicznego”. Najsilniejszą strategią nauczyciela, jaką znajduje przegląd, jest przekład pedagogiczny: wybieranie, poprawianie, uzupełnianie, streszczanie lub usuwanie informacji zwrotnej chatbota zamiast przepuszczania jej dalej.

Wynikają z tego dwa ostrzeżenia projektowe i oba przeczą zwykłej mapie drogowej. Więcej informacji od SI nie jest lepsze: systemy nieustannie emitujące diagnozy przeciążały nauczycieli i odciągały uwagę od ich własnej obserwacji. Trzeba priorytetyzować to, na co warto działać, czynić to interpretowalnym i podawać rekomendacje w formie, którą nauczyciel może przyjąć, zmodyfikować, odłożyć lub odrzucić. Więcej wsparcia dla nauczyciela też nie jest lepsze: opóźnienie interwencji po to, by studenci mogli pracować samodzielnie, samo w sobie jest ekspertyzą. Warunki strukturalne, czyli czas na przegląd danych, liczebność klasy i możliwość fizycznego dotarcia do grup potrzebujących pomocy, są częścią interwencji, a nie tłem logistycznym. Pulpit zbudowany dla nauczyciela bez wolnej godziny nie zostanie otwarty.

## Przypadek pierwszy: tutor analizy matematycznej, gdzie weryfikacja jest tania

Tutor analizy matematycznej na pierwszym semestrze studiów powinien podnosić to, co studenci potrafią rozwiązać i wyjaśnić samodzielnie po jego usunięciu, a nie maksymalizować poprawnie ukończonych zadań. Tutoryzacja matematyki jest szczególnie podatna na nadmierne rusztowanie, przedwczesne korzystanie z podpowiedzi i błędną diagnozę rozumowania studenta, a wszystkie trzy są widoczne w logach, jeśli się w nie spojrzy ([[math-education|edukacja matematyczna]]).

**Zakotwiczenie i weryfikacja.** Konstrukcja o sześciu warstwach: materiały kursu i polityki prowadzącego, potem warstwa wyszukiwania, potem silnik zadań i model uczącego się obok symbolicznego weryfikatora i silnika diagnostycznego, potem warstwa polityki pedagogicznej, potem generowanie rozmowy, potem student, a potem z powrotem do modelu uczącego się. Weryfikator jest powodem, dla którego ten projekt jest wykonalny. Rozstrzyga, czy wyrażenie jest równoważne, czy pochodna jest poprawna, czy całka została obliczona, czy punkt krytyczny został znaleziony, i robi to bez pytania modelu o zdanie.

**Jedna interakcja.** Przy różniczkowaniu $f(x)=(x^2+1)\sin x$ konwencjonalny chatbot ujawnia odpowiedź. Tutor zorientowany na uczenie się rozumuje wewnętrznie, że student zróżniczkował oba składniki, ale pomnożył wyniki, czyli możliwe [[misconceptions|błędne przekonanie]] „reguła iloczynu jako $f'g'$”, i najpierw zadaje pytanie diagnostyczne: jaka reguła obowiązuje, gdy mnoży się dwie funkcje? Potem student zapisuje symbolicznie regułę iloczynu, ustawia $u$ i $v$, a dopiero potem tutor weryfikuje końcowe wyrażenie. Warto zauważyć, jak wiele tutoryzacji wydarzyło się, zanim do studenta dotarła jakakolwiek proza modelu.

**Wiele reprezentacji.** Trzeba łączyć procedury symboliczne ze wzorem, wykresem, tabelą, interpretacją słowną i fizycznym kontekstem szybkości zmiany. Biegłość proceduralna i rozumienie pojęciowe wyglądają identycznie na arkuszu poprawnych odpowiedzi, a rozchodzą się na zadaniu transferowym.

**Pulpit.** Trzeba pokazywać zagregowane dowody zamiast nieprzejrzystych osądów: „reguła iloczynu, 62% wykazanego mistrzostwa; typowe wzorce, 18% pomija jeden składnik, 11% mnoży pochodne”. Pojedyncze diagnozy wychodzą jako hipotezy wraz z dowodami, które je wspierają, i to także czyni je przeglądalnymi dla nauczyciela ([[explainable-ai|wyjaśnialność]] liczy się tu bardziej dla nauczyciela niż dla studenta).

**Plan ewaluacji.** Wyniki z tutorem, wyniki na porównywalnych zadaniach bez niego, odroczone utrzymanie wiedzy, transfer na nieznane zadania, jakość wyjaśnienia pojęciowego, korekta błędnych przekonań, właściwe wobec przedwczesnego [[help-seeking|poszukiwania pomocy]], wyciek odpowiedzi, wskaźniki fałszywych trafień i fałszywych alarmów diagnozy oraz zróżnicowane wyniki. Porównaniem, które rozstrzyga o projekcie, jest pomoc wobec późniejszego braku pomocy. Student, który z tutorem przechodzi z 60% na 95%, a sam zostaje na 60%, nie był tutoryzowany.

## Przypadek drugi: coach pisania, gdzie o pozwoleniu decyduje etap

Pisanie nie ma jednej poprawnej odpowiedzi, więc weryfikacja jest osądem, a praca projektowa przenosi się na etapowanie. Baza wiedzy ujmuje pisanie jako proces poznawczy, społeczny i retoryczny, co znaczy, że system pisania ze SI może wspierać uczenie się, a może też wyeliminować dokładnie to myślenie, które zadanie miało rozwijać ([[writing-education|edukacja pisania]], [[coach-not-crutch-ai-writing|Coach, nie kula u nogi]]).

**Model kompetencji.** Śledzić argumentację (konkretność tezy, zgodność twierdzenia z dowodem, kontrargument), organizację (fokus akapitu, postęp logiczny, przejścia), dowody (trafność źródła, integrację, interpretację), rewizję (rewizję globalną i zdaniową, ocenę informacji zwrotnej) oraz styl (jasność, gramatykę, głos). Każdy z tych elementów staje się osobnym sygnałem w modelu uczącego się, i to dopiero czyni ukierunkowaną informację zwrotną w ogóle możliwą.

**Zakotwiczyć coacha w zadaniu.** Wyszukiwać instrukcję, rubrykę prowadzącego, lektury kursu, wymagania cytowania, konwencje gatunku, przykłady prowadzącego i politykę korzystania z SI, tak by informacja zwrotna mogła powiedzieć „rubryka prowadzącego wymaga powiązania każdego głównego twierdzenia z dowodem z co najmniej dwóch lektur kursu”, zamiast wymyślać ogólne oczekiwania. Ogólna porada to domyślna porażka narzędzia do pisania bez zakotwiczenia, a studenci rozpoznają ją w dwóch sesjach.

**Ustalić pozwolenia dla każdego etapu.** Udział SI na różnych etapach różnie wpływa na postrzegane autorstwo. Wsparcie w planowaniu obniża poczucie autorstwa mniej niż wsparcie w pisaniu szkicu, a szkic wygenerowany przez SI daje największy spadek ([[ai-writing-support-stage-ownership-2026|Od planowania do rewizji]]). To ustalenie przekłada się wprost na tabelę pozwoleń. Na etapie planowania coach zadaje pytania, porównuje stanowiska, kwestionuje założenia i krytykuje konspekty, a nie generuje argumentu. Na etapie szkicu uczący się najpierw produkuje prozę, a coach rozwija, zamiast przejmować. Na etapie rewizji coach diagnozuje i na tym poprzestaje: niejasne twierdzenia, brakujące dowody, dowody niepopierające twierdzenia, problemy organizacyjne, szkic wobec rubryki. Na etapie redakcji, po rewizji, zajmuje się gramatyką, interpunkcją, zwięzłością i formatowaniem cytowań.

**Przepracowana interakcja.** Przy eseju o obowiązkowych [[online-teaching-and-learning|kursach online]] ogólny system przepisuje akapit studenta na wypolerowaną prozę i wykonuje pracę intelektualną. Coach mówi, co działa, nazywa główny problem (akapit podaje powody, ale nigdy nie wyjaśnia, dlaczego uzasadniają one obowiązek na całej uczelni), stawia pytanie rewizyjne i prosi studenta o dokończenie zdania własnymi słowami. Argument zostaje tam, gdzie jego miejsce.

**Informacja zwrotna z priorytetem.** Jedna mocna strona do zachowania, jeden problem o dużym wpływie, jedno pytanie wymagające osądu autora, jeden konkretny cel rewizji. Nie czterdzieści komentarzy. Student, który dostaje czterdzieści komentarzy, sortuje je według długości, a to sortowanie nie ma nic wspólnego z tym, co ważne.

**Niech student osądza informację zwrotną.** [[feedback-literacy|Umiejętność korzystania z informacji zwrotnej]] jest celem uczenia się samym w sobie. Trzeba okresowo pytać, czy uczący się zgadza się z sugestią i dlaczego, i pozwalać mu ją odrzucić. Wynikiem jest [[evaluative-judgment|osąd wartościujący]], a nie podporządkowanie, i jest to też jedyna obrona przed coachem, który pewnie się myli.

**Zachować głos.** Trzeba odróżniać błędy, problemy z jasnością, wybory retoryczne i preferencje stylistyczne, a dwie ostatnie kategorie zostawić w spokoju. Coach, który „poprawia” wybory retoryczne, ujednolica pisanie w stronę stylu preferowanego przez model, i wyrządza najwięcej szkody piszącym [[multilingual-learning|wielojęzycznie]] oraz niekanonicznym tradycjom retorycznym ([[ai-feedback-quality|jakość informacji zwrotnej SI]] to ogólna wersja tego problemu).

**Uczyć się z rewizji.** Przechowywać historię rewizji, a nie tylko eseje końcowe. Powtarzający się wzorzec „dowód wprowadzony, ale nie zinterpretowany”, który poprawia się przez trzy eseje, jest najbardziej użytecznym sygnałem, jaki system pisania może mieć, i jest darmowy.

**Ewaluacja.** Jakość pisania wspieranego przez SI i późniejszego pisania bez niego, umiejętność znajdowania słabości w cudzym pisaniu, jakość rewizji, przyjęcie informacji zwrotnej, umiejętność wyjaśnienia rewizji, autorstwo, zależność od prozy SI, zachowanie głosu, stronniczość wobec dialektów i piszących wielojęzycznie, zgodność z osądem prowadzącego i odroczony transfer. Projekt, który na to odpowiada, ma trzy ramiona: pisanie samodzielne, tekst generowany przez SI i coach. Wszystkie trzy grupy piszą potem nowy esej bez SI. Jeśli grupa z tekstem generowanym wygrywa w praktyce i przegrywa bez SI, system poprawił wyniki, a nie uczenie się. Wzorce na poziomie klasy z pulpitu (41% potrzebuje wsparcia w łączeniu twierdzenia z dowodem) są sygnałem [[formative-assessment|oceniania kształtującego]] dla prowadzącego.

## Porównanie obu realizacji

| Pytanie projektowe | Tutor analizy matematycznej | Coach pisania |
|---|---|---|
| Główny obiekt uczenia się | Pojęcia matematyczne i rozwiązywanie zadań | Argumentacja i proces pisania |
| Weryfikacja | Często obiektywnie sprawdzalna | Zwykle wymaga osądu kontekstowego |
| Narzędzia deterministyczne | Silnik matematyki symbolicznej, kalkulator | Gramatyka, cytowania, kontrola rubryki |
| Główna rola SI | Diagnozować i rusztować rozumowanie | Diagnozować i rusztować rewizję |
| Główne ryzyko | Oddanie rozwiązania | Napisanie tekstu za uczącego się |
| Działanie uczącego się, które ma znaczenie | Rozwiązać i wyjaśnić | Naszkicować, ocenić i zrewidować |
| Model uczącego się | Pojęcia, procedury, błędne przekonania | Argument, dowody, organizacja, rewizja |
| Kluczowa bariera ochronna | Próba przed rozwiązaniem | Proza studenta przed przepisaniem przez SI |
| Test transferu | Nowe zadania z analizy bez SI | Nowe zadanie pisarskie bez SI |
| Kryterium sukcesu | Samodzielne rozumowanie matematyczne | Samodzielne pisanie i osąd wartościujący |

Oba systemy korzystają z tego samego zestawu [[ai-technologies|technologii SI]] i ucieleśniają różne polityki pedagogiczne, bo dziedziny wymagają różnych rodzajów myślenia. Reguła, która się uogólnia, brzmi: zidentyfikować aktywność poznawczą, która wytwarza uczenie się, i zaprojektować SI tak, by ją wspierała, nie wykonując jej. Ta reguła stoi wyżej niż jakikolwiek konkretny model, prompt, framework agentowy czy interfejs.

## Co zespoły programistyczne rozumieją błędnie

Pedagogika żyje w prompcie systemowym, więc staranny prompt jest projektem pedagogicznym. Prompt to jedna warstwa polityki, która obejmuje też to, jakie dowody się zbiera, jaki szczebel oferuje interfejs, co sprawdza weryfikator i co pokazuje pulpit. Dobrze napisany prompt na modelu uczącego się, który nic nie przechowuje, da płynnego tutora bez pamięci o studencie, a drabinka będzie startować od nowa w każdej sesji.

Lepszy model naprawi diagnozę. Przytoczony wyżej wynik benchmarków pokazał tutory LLM rozpoznające poprawne rozumowanie, a jednocześnie odrzucające trafne alternatywy i akceptujące błędne, co jest wzorcem błędu, którego skala w oczywisty sposób nie naprawia. Strukturalna diagnoza istnieje dlatego, że osąd modelu jest tą częścią, której nie da się zaudytować.

Satysfakcja i ukończenie dowodzą, że projekt działa. Dowodzą, że studenci dostali pomoc. Pilotaż z 38 studentami programowania wykazał silny związek postrzeganego uczenia się z korzystaniem, podczas gdy samodzielny postęp wypadł najniżej, a badanie nad mistrzostwem pokazało, że wymóg serii podnosi mistrzostwo platformowe bez zysku w teście odroczonym. Miarę wycofania trzeba wbudować w pilotaż, inaczej efektywnie nauczy się niewłaściwej lekcji.

Wyszukiwanie czyni odpowiedzi godnymi zaufania. Zmniejsza [[hallucination-risk|ryzyko halucynacji]], a resztę powierzchni porażek zostawia nietkniętą: wyszukany fragment można błędnie odczytać, poprawna technika może być niewłaściwa dla kursu, a model wciąż może się pewnie mylić co do kroku, który sam wyprowadził. Wyszukiwanie to podłoga.

Zdanie zestawu testów bezpieczeństwa znaczy, że system jest bezpieczny dla studentów. Zwykłe testy bezpieczeństwa obejmują toksyczność i jailbreaki. Porażki pedagogiczne, które tu mają znaczenie, wyciek odpowiedzi, schlebianie i dryf, są dla nich niewidoczne, i kumulują się w rozmowie, zamiast pojawiać się w jednej turze.

Zaangażowanie jest celem. Długość rozmowy i liczba sesji to najtańsze metryki do oprzyrządowania, i dlatego awansują na cele. Argument o [[scaffolding|rusztowaniu]] mówi, że idealna sesja skraca się wraz z poprawą studenta, więc wzrost zaangażowania równie dobrze może być objawem.

## Co się na Tobie odbije

**„Wdrażamy za sześć tygodni, a to kwartał pracy.”** Większość architektury jest tania. Brama próby, skonfigurowana drabinka, wyszukiwanie po notatkach, które już są, i schemat logów z polem wycofania to dni pracy. Drogie elementy (model uczącego się, weryfikator, pulpit) mogą startować za flagą funkcji dla jednego kursu, a pilotaż jest bardziej informacyjny, gdy tanie części są już zrobione.

**„Studenci to uwielbiają, a ukończenie wzrosło.”** Oba fakty są spójne z systemem, który dobrze odpowiada na pytania i niczego nie uczy. Badanie na 6 000 studentów wykazało wolniejszy postęp i mniej podejmowanych pytań obok lepszej trafności, więc spadek ukończenia też nie jest automatycznie złą wiadomością. Wyniki bez pomocy trzeba raportować obok liczb zaangażowania i pozwolić im publicznie się nie zgadzać.

**„Nie możemy przeprowadzić randomizowanego badania.”** Porównanie w obrębie studenta da się zrobić bez niego: ten sam cel, z pomocą w trakcie jednostki, testowany bez pomocy dwa tygodnie później, z wynikiem z pomocą podanym obok. Taki projekt odpowiada na pytanie produktowe i nie wymaga ramienia kontrolnego. Czego nie powie, to kontrfaktycznego scenariusza dla studentów, którzy z tutora nigdy nie korzystali.

**„Model to API dostawcy, więc zachowanie pomocowe jest poza naszą kontrolą.”** Szczeble żyją w warstwie orkiestracji, a wynik eksperymentu z barierami ochronnymi pochodził ze zmiany tego, co tutorowi wolno było mówić, nie z podmiany modelu. Można oczekiwać, że posttrening dostawcy ciągnie ku szybkiemu odpowiadaniu, bo właśnie na pomocność był dostrajany, i dlatego powściągliwość trzeba umieścić we własnym kodzie.

**„Nauczyciele nie będą używać kolejnego pulpitu.”** Nie będą używać takiego, który emituje ciągłe diagnozy, co według przeglądu K-12 odciągało uwagę od ich własnej obserwacji. Trzeba dać im niewielką liczbę interpretowalnych sygnałów, sposób przyjęcia lub odrzucenia każdej rekomendacji i czas w tygodniu, by na nie spojrzeć.

**„Nie mamy w zespole ekspertów dziedzinowych.”** Wtedy tutor będzie uczył ogólnej metody, a notacja kursu rozjedzie się w ciągu semestru. Ekspert przedmiotowy na dwa dni na etapie projektowania, piszący listę błędnych przekonań i listę zatwierdzonych metod, to najtańsza pozycja w projekcie i ta, którą zespoły tną jako pierwszą.

## Co zrobić w tym tygodniu

**1.** Zapisać zdanie o wynikach bez wsparcia dla pilotażu i umieścić je w specyfikacji, nad listą funkcji.

**2.** Dodać bramę próby i logować ją. Rejestrować, czy student podjął próbę przed pierwszą podpowiedzią i do którego szczebla dotarł.

**3.** Zastąpić przycisk podpowiedzi pytaniem o punkt blokujący i logować odpowiedź jako kategorię.

**4.** Zaplanować jedno sprawdzenie bez pomocy dwa tygodnie po jednostce i wpisać je do kalendarza z osobą odpowiedzialną.

**5.** Zarezerwować dwa dni z nauczycielem przedmiotu na napisanie listy błędnych przekonań i listy zatwierdzonych metod.

## Dokąd dalej

[[designing-educational-ai-software|Projektowanie oprogramowania edukacyjnego ze SI]] omawia reguły na poziomie oprogramowania, które tutor musi spełniać, a [[designing-ai-into-learning|Wprowadzanie SI do uczenia się]] mówi, gdzie tutor lokuje się w sekwencji kursu. [[evaluating-ai-interventions-methods|Metody ewaluacji interwencji ze SI]] i [[checking-whether-educational-ai-works|Sprawdzanie, czy edukacyjna SI działa]] odpowiadają na pytanie, czy to działa. Jeśli problemem jest to, że model odpowiada zbyt chętnie, [[making-ai-better-at-supporting-learning|Czynienie SI lepszą we wspieraniu uczenia się]] i [[training-ai-tutors-to-guide-rather-than-answer|Szkolenie tutorów SI, by prowadzili, a nie odpowiadali]] przechodzą przez stronę treningową tego samego pytania.
