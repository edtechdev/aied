---
title: Projektowanie uczenia się
created: "2026-10-27T17:15:00-04:00"
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks, learning-design-wiki]
translation_of: concepts/learning-design
source_updated: "2026-10-27T08:20:32-04:00"
updated: "2026-10-27T17:15:00-04:00"
translation_note: "*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-27"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

> **Projektowanie uczenia się** (znane też jako *projektowanie nauczania*) - systematyczny proces tworzenia skutecznych doświadczeń uczenia się przez analizę potrzeb edukacyjnych oraz projektowanie, opracowanie, wdrażanie i ewaluację materiałów i działań dydaktycznych. SI przekształca projektowanie uczenia się, automatyzując tworzenie treści, umożliwiając [[adaptive-learning|uczenie się adaptacyjne]], wspierając iterację opartą na danych oraz wzmacniając - a nie zastępując - rolę projektanta nauczania.

## Pytania do rozważenia

- Pomyśl o kursie lub lekcji, których doświadczyłeś lub które projektowałeś. Gdzie kończyło się „czego uczyć" (program), a gdzie zaczynało „jak tego uczyć" (projektowanie uczenia się) - i jak oba się przeplatały?
- Powszechne założenie mówi, że lepsza biegłość w SI automatycznie daje lepsze treści edukacyjne. Ta strona przeciwstawia temu dowody, że to wyraźna struktura pedagogiczna - a nie sama biegłość w SI - określa skuteczność uczenia się. Gdzie widziałeś imponujący wynik, który nie potrafił nauczyć?
- Jeśli narzędzie SI potrafi wygenerować pełny kurs z jednego promptu, które ludzkie decyzje stają się ważniejsze, a nie mniej ważne? Strona argumentuje, że SI wzmacnia, a nie zastępuje rolę projektanta nauczania - jak wyglądałaby ta wzmocniona rola?
- Niektóre modele projektowania nauczania, jak ADDIE, są używane jako sztywne, liniowe kroki. Strona traktuje je jednak jako iteracyjne, elastyczne heurystyki planowania. Kiedy zbyt dosłowne trzymanie się procesu mogłoby podkopać dobry projekt?
- Strona pokazuje, że promptowanie ugruntowane pedagogicznie - na przykład pięciostopniowa rama oparta na teorii uczenia się - istotnie poprawiło wyniki wyższego rzędu. Gdybyś budował tutora SI, co zakodowałbyś w wyraźnej warstwie projektowej, aby jego strategia nauczania pozostała identyfikowalna i odtwarzalna?

## Wprowadzenie

Projektowanie uczenia się łączy możliwości SI ze skuteczną pedagogiką. Tam, gdzie [[curriculum-design|projektowanie programu nauczania]] zajmuje się tym, *czego* uczyć na poziomie programu, projektowanie uczenia się zajmuje się tym, *jak* tego uczyć na poziomie kursu i lekcji. Artykuły w tej bazie wiedzy badają zarówno SI jako narzędzie dla projektantów uczenia się, jak i zasady projektowania uczenia się służące budowaniu skutecznych systemów [[intelligent-tutoring|tutoringu SI]].

To, co ta praca projektowa obejmuje w praktyce, jest samo w sobie pytaniem empirycznym. [[tang-chatbots-learning-design-2026|Tang i wsp. (2026)]] zakodowali 1 378 tur projektant-chatbot od pięciu początkujących projektantów uczenia się pracujących z chatbotem wbudowanym w narzędzie projektowe i stwierdzili, że dialog skupiał się na zamierzonych efektach uczenia się i podejściu pedagogicznym, a nie na generowaniu treści. Projektanci wielokrotnie wracali do efektów jako kontroli spójności, przekształcając elementy programu w konkretne zadania, a rola asystenta zmieniała się w kolejnych fazach: od wyjaśniania terminów, przez wspieranie projektowania zadań, po przebieg weryfikacyjny przed terminem. Wsparcie projektowe, według tych dowodów, polega mniej na wytwarzaniu materiału, a bardziej na utrzymywaniu spójności intencji projektowej.

Analityka uczenia się i generatywna SI wspierają różne części projektowania: w 11 grupach fokusowych na jednym australijskim uniwersytecie dyskurs analityki współwystępował najczęściej z kontekstem i rozwiązywaniem problemów na poziomie kursu (0,32), podczas gdy dyskurs GenAI koncentrował się na projektowaniu oceniania (0,26) i projektowaniu dla samostanowienia studentów (0,15) ([[claassen-learning-analytics-genai-learning-design-2026|Claassen i wsp. (2026)]]).

### Kluczowe motywy badawcze

**Tworzenie treści wspierane przez SI** jest najbardziej bezpośrednio transformacyjnym zastosowaniem. **[[curriculum-as-code-instructional-design-2026|Program jako kod]]** przedstawia sześciofazową architekturę integrującą generatywną SI z LaTeX i Pythonem, by automatyzować tworzenie materiałów [[stem-education|STEM]], zwalidowaną na 8 modułach i 28 kontekstach projektowych z ocenami jakości studentów na poziomie 8,5-9,9/10. **[[instructional-agents-multi-agent-course-gen|Agenci dydaktyczni]]** wykorzystują ramę wieloagentową ustrukturyzowaną wokół modelu ADDIE, z agentami opartymi na rolach (wykładowca, projektant nauczania, koordynator kursu) współpracującymi przy generowaniu kompletnych materiałów kursu. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]** dostarcza ustrukturyzowanego procesu adaptacyjnego [[video-education|generowania wideo]] [[pedagogy|pedagogicznego]] ugruntowanego w korpusach kursów, pokazując, że wyraźna struktura pedagogiczna - a nie sama biegłość w SI - jest niezbędna do generowania treści edukacyjnych. Platformy [[generative-ai|generatywnej SI]] mogą także ucieleśniać zasady projektowania uczenia się w treściach, które wytwarzają: [[ai-modeling-problem-generation-platform-2026|platforma oparta na SI do generowania zadań modelowania matematycznego]] łączyła ugruntowane zasady projektowania z [[prompt-engineering|generowaniem wspieranym wyszukiwaniem]], rozwijana podejściem ADDIE, by dawać pedagogicznie ugruntowane zadania i rekomendacje, których konwencjonalnym generatorom treści brakuje. Jednak wypłata z takiego wspieranego przez SI generowania treści i lekcji jest zapośredniczona przez własną ekspertyzę nauczyciela: [[choi-teacher-ai-interaction-lesson-design-2026|Choi i wsp. (2026)]] stwierdzili, że doświadczeni nauczyciele krytycznie adaptują pomysły lekcji generowane przez SI do uczniów i kontekstu (ponownie promptując i rozbudowując wynik), podczas gdy nowicjusze mają tendencję do przyjmowania sugestii SI wprost - więc wartość pedagogiczna narzędzi do treści SI zależy od doświadczenia nauczyciela i biegłości w SI, a nie od samego narzędzia. Przegląd systematyczny [[wang-teacher-ai-co-design-review-2026|współprojektowania zadań edukacyjnych przez nauczyciela i SI]] (Wang, Liu i Islam 2026) potwierdza ten wzorzec w skali na 28 badaniach (2015-2025): GenAI jest używana głównie do planowania lekcji, generowania promptów i ideacji twórczej, a dominującym trybem współpracy jest SI jako asystent/generator treści, a nie pełniejszy współprojektant - przy czym wydajność, responsywność, [[creativity|kreatywność]] i [[equity-in-ai-education|równość]] powracają jako afordancje. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]] zaostrza ustalenie o ekspertyzie nauczyciela dla projektowania działań grupowych: doświadczeni nauczyciele tworzą bogatsze, bardziej synergiczne i lepiej dopasowane do ZPD architektury ról w działaniach kooperacyjnych projektowanych przez SI niż nowicjusze, niezależnie od zaznajomienia z SI, ramując „pedagogiczną kompetencję promptową" jako dźwignię, która zamienia wynik SI w skuteczne [[collaborative-learning|zróżnicowane uczenie się grupowe]].

Próba Aila nadaje temu wzorcowi liczbę czasu planowania. Nauczyciele w jej zrandomizowanych szkołach podstawowych spędzali 2,51 godziny tygodniowo na przygotowaniu lekcji z narzędziem wobec 3,32 godziny bez niego, a mimo to mediana nauczyciela planowała tylko 21% do 40% lekcji od zera, co jest przypadkiem, który adresuje narzędzie do pracy od zera ([[roy-aila-lesson-planning-teacher-choices-2026|Roy i wsp., 2026]]).

Tam, gdzie generowane materiały zawodzą, jest dopasowanie do programu: siedmiu nauczycieli matematyki oceniło generowane przez SI zadania produktywnego niepowodzenia blisko ludzkich pod względem ogólnej jakości (M = 17,19 vs 17,43 z 25), ale niżej w dopasowaniu do programu (M = 2,57 vs 3,29), więc generowane zadania nadal wymagały edycji pod kątem długości, poziomu czytania i materiałów wizualnych ([[rhaimi-productivemath-2025|Rhaimi i wsp. (2025)]]).

**Tutoring SI ugruntowany pedagogicznie** stosuje zasady projektowania nauczania do projektowania systemów SI. **[[didactical-teacher-assistant-dimensional-modeling|Brisson i wsp.]]** zbudowali dydaktycznie napędzanego asystenta nauczyciela [[llm|LLM]], w którym strategia tutoringu jest zakodowana w wyraźnej warstwie zewnętrznej - co czyni dobór treści i strukturyzowanie dydaktyczne identyfikowalnymi i odtwarzalnymi, odpowiadając wprost na obawy o nieprzejrzystość w [[rethinking-scaffolding-llm-tutors]]. **[[instructional-guidance-genai-learning|Hou i wsp.]]** pokazali, że pięciostopniowa rama [[prompt-engineering|promptowania]] ugruntowana w generatywnej [[learning-theories|teorii uczenia się]] istotnie poprawiła poznawcze wyniki wyższego rzędu, dowodząc, że to wskazówki dydaktyczne - a nie sam dostęp do SI - określają skuteczność uczenia się. Oba podejścia łączą się z [[scaffolding|rusztowaniem]] i [[intelligent-tutoring|tutoringiem inteligentnym]].

**Ramy i ewaluacja** dostarczają ustrukturyzowanych podejść. **[[bridging-instructional-design-framework-math]]** i **[[cotal-formative-assessment-scoring-2026|CoTAL]]** pokazują zasady projektowania z [[human-in-the-loop-ai|człowiekiem w pętli]]. **[[genai-mindtool-generative-learning]]** sytuuje SI jako „narzędzie myślowe" - partnera poznawczego, który rozszerza, a nie zastępuje myślenie uczącego się - stosując teorię projektowania nauczania wprost do integracji SI. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** stosuje zasady Universal Design for Learning, by tworzyć dostępnego partnera myślowego SI dla edukatorów, łącząc projektowanie nauczania z [[inclusive-learning|uczeniem się włączającym]]. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate-Inquire-Reflect) to rama strukturyzowania zadań dla poznawczo aktywowanego użycia SI, która ogranicza wkład SI tak, by przewidywanie, interpretacja i ocena pozostały zadaniem uczącego się - adaptacja cykli dociekania swoista dla SI, ugruntowana w [[self-regulated-learning|samoregulowanym uczeniu się]], teorii obciążenia poznawczego i [[human-ai-collaboration|współpracy człowiek-SI]]. Uzupełniając te ramy projektowe, [[dohn-boundary-object-classifying-genai-learning-activities-2026|taksonomia Dohna i wsp. (2026)]] oferuje *klasyfikację*, a nie metodę projektowania: sześć kategorii (Cel uczenia się, Treść, Format reprezentacji, Epistemiczne [[student-engagement|zaangażowanie]], Projekt społeczny, Artefakty), które pozwalają projektantom i [[research-methods-aied|badaczom]] opisywać, porównywać i wyobrażać sobie działania edukacyjne z GenAI przez ujawnienie, dlaczego, czego, jak, z czym i z kim uczący się angażują GenAI - zbudowana jako obiekt graniczny przez dialog postcyfrowy. Ramy inteligentnej klasy rozszerzają to na [[teacher-education|kształcenie nauczycieli]]: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao i Wang (2026)]] proponują trójwymiarową ramę inteligentnej edukacji - efektywność uczenia się, technologie informacyjno-komunikacyjne (ICT) i organizację klasy - i urzeczywistniają ją w kursie magisterskim z [[math-education|matematyki]], który integruje [[automated-assessment|automatyczne punktowanie]], rekomendacje personalizowane i wielokrotne [[ai-feedback-quality|sprzężenie zwrotne SI]] w etapach przed-, w trakcie i po zajęciach. Quasi-eksperyment wykazał istotne przyrosty w zdolności studentów do formułowania precyzyjnych, zawodowo ugruntowanych celów dydaktycznych, dając przenośny **Model D-T-E** (Wymóg Dyscyplinarny-Wzmocnienie Technologiczne-Pętla Ewaluacji) - wskazówki [[discipline-specific-aied|specyficzne dla dyscypliny]] dla [[educational-development|kształcących nauczycieli]], którzy przenoszą koncepcje inteligentnej edukacji do praktyki projektowania nauczania.

**Projektowanie dla zasięgu.** Siedmiodźwigniowa rama Halani pyta o każde ustawienie kursu, które z nich wciąż działa, gdy student jest sam z SI; ruchy strukturalne, takie jak zmiana tego, co poświadcza ocena, czy zadania, których nie da się wykonać bez myślenia, sięgają dalej niż mówienie studentom, że proces ma znaczenie ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Ogranicz narzędzie, by chronić myślenie.** Dziewięciotygodniowy projekt pisania argumentacyjnego uszeregował chatboty ograniczane przez nauczyciela, które zadają pytania i odmawiają generowania prozy studenta, a czworo uczniów szkół średnich przeszło od pasywnych konsumentów SI do ewaluatorów, którzy odpierali wyniki - zysk podążał za strategicznym ograniczeniem, a nie za nieograniczoną generatywnością ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote i Taub (2026)]]).

**Promptowanie kierowane rubryką jako dźwignia projektowa.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar i wsp. (2026)]] pokazali, że rubryka działa jako pośredniczący interfejs między ludzką intencją pedagogiczną a wnioskowaniem maszyny: traktowanie kryteriów oceniania jako rewidowalnych artefaktów projektowych - a nie stałych instrumentów - oraz iteracyjne współdopracowywanie ich z LLM podniosło zgodność LLM-człowiek w pracy projektowej studentów z 54,75% do 81,25%. Rubryki projektowane dla LLM-ów muszą równoważyć precyzję i elastyczność - zbyt ogólna zaprasza wolną interpretację, zbyt sztywna redukuje model do dopasowywania wzorców - a promptowanie świadome roli (instruktor, recenzent rówieśniczy, recenzent grantowy) dawało odrębne sprzężenie zwrotne ewaluacyjne. Sytuuje to inżynierię rubryk jako konkretną praktykę projektowania uczenia się kształtującą zachowanie ewaluacyjne SI, przy zachowaniu niezbędnego nadzoru z człowiekiem w pętli.

**Agenci SI w projektowaniu nauczania** rozszerzają dziedzinę na [[agentic-ai|SI agentową]]. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]** jest pierwszym standardowym, teoretycznie ugruntowanym benchmarkiem do oceny agentów projektowania nauczania opartych na LLM - jego Macierz Kontekstu z 25 795 scenariuszy (51 zmiennych kontekstowych x 33 podkroki ISD z ADDIE) pokazuje, że agenci ugruntowani w klasycznych ramach ISD (ADDIE, Dick i Carey, Rapid Prototyping ISD) przewyższają agentów bez teorii, walidując empirycznie, że projektowanie nauczania jest ustrukturyzowaną dyscypliną, a nie ogólnym zadaniem promptowania. Agenci nie są tylko *budowniczymi* projektów, ale też ich *krytykami*: [[ai-web-agents-lesson-design-2025|Wang, Mitchell i Piech (2025)]] używają jednego autonomicznego agenta webowego, który przechodzi wieloetapową lekcję online jak student, by ocenić projekt uczenia się *przed* zaangażowaniem rzeczywistych uczących się - jego opis doświadczenia studenta przewiduje, gdzie nowicjusze odpadną, i wydobywa wykonalne sprzężenie zwrotne projektowe, przewyższając każdą linię bazową, a nawet symulowaną kohortę studentów na globalnym kursie CS1. Ujmuje to przedstartową, agentową ewaluację jako tanie uzupełnienie ludzkiej iteracji projektowej. **[[wang-multi-agent-systems-learning-designers-2025]]** i **[[instructional-agents-multi-agent-course-gen|Agenci dydaktyczni]]** badają ramy wieloagentowe, które orkiestrują agentów opartych na rolach wokół modeli projektowania nauczania, a **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]** analizuje, jak nauczyciele i agenci wspólnie stosują wiedzę technologiczno-pedagogiczno-przedmiotową. Praca ta łączy projektowanie nauczania z [[benchmark|benchmarkowaniem]], [[ai-ed-evaluation|ewaluacją SI w edukacji]] i projektowaniem [[curriculum-design|programu nauczania]] w skali.

### Powiązania z pokrewnymi koncepcjami

Projektowanie uczenia się jest dyscypliną mostową [[ai-education|edukacji z SI]] - łączy [[curriculum-design|projektowanie programu nauczania]] (czego uczyć) z [[scaffolding|rusztowaniem]] (jak wspierać uczących się), [[educational-development|rozwojem edukacyjnym]] (jak przygotować edukatorów) i [[generative-ai|generatywną SI]] (samymi narzędziami). Jest ściśle sprzężone z [[teacher-role|rolą nauczyciela]], ponieważ narzędzia SI przekształcają to, co robią projektanci uczenia się i nauczyciele, oraz z [[ai-literacy|kompetencjami w zakresie SI]], ponieważ skuteczna integracja SI wymaga od edukatorów rozumienia możliwości i ograniczeń SI. Praca projektowa ostatecznie rozstrzyga się w *porządku aktywności*: [[pedagogical-patterns|wzorce pedagogiczne]] katalogują sprawdzone porządki ruchów, więc projektant może zdecydować, gdzie w lekcji należy umieścić SI, a nie tylko co włączyć. [[learning-sciences|Nauki o uczeniu się]] to pole badawcze stojące za tymi zasadami: tam, gdzie ta strona obejmuje zawodową praktykę tworzenia doświadczeń uczenia się, nauki o uczeniu się badają tę praktykę i jej projekty empirycznie i generują zasady poznawcze, motywacyjne i społeczne, które projektowanie uczenia się następnie operacjonalizuje.

### Jak projektowanie uczenia się określa przyrosty uczenia się

Projektowanie uczenia się to dźwignia, która decyduje, czy SI daje [[learning-gains|przyrosty uczenia się]], czy jedynie zawyżone przez SI wyniki. Dowody w bazie wiedzy są tu spójne: **to samo narzędzie SI daje duże zyski lub szkodę netto w zależności od tego, jak doświadczenie uczenia się jest wokół niego zaprojektowane.** [[instructional-guidance-genai-learning|Hou i wsp.]] pokazali, że pięciostopniowa rama promptowania ugruntowana w teorii uczenia się istotnie poprawiła poznawcze wyniki wyższego rzędu, podczas gdy sam dostęp do SI nie; ramy [[genai-mindtool-generative-learning|narzędzia myślowego]] i [[airis-cognitively-activated-ai-physics-2026|AIRIS]] zachowują pracę poznawczą uczącego się, tak by wynikiem były trwałe przyrosty (a nie efektywność zadania). Wybory projektowe chroniące [[learning-gains|przyrosty uczenia się]] - rusztowanie wymagające próby studenta, [[formative-assessment|ocenianie kształtujące]] z miarami wyników bez wsparcia oraz struktura pedagogiczna utrzymująca uczącego się jako sprawcę - odzwierciedlają ustalenie dziedziny (zobacz [[learning-gains]]), że SI jest silnym zyskiem, gdy coachuje, a szkodą, gdy odpowiada. Odwrotnie, źle zaprojektowane lekcje zintegrowane z SI padają ofiarą [[cognitive-offloading|luki wynik-nauka]], w której pozorny sukces maskuje brak uczenia się.

### Praktyczne wskazówki dla projektantów i developerów

Dla projektantów nauczania, developerów kursów i inżynierów budujących doświadczenia uczenia się wspierane przez SI ustalenia bazy wiedzy przekładają się na wykonalną praktykę. Jedną granicę warto zaznaczyć przed samymi praktykami: projektowanie uczenia się w ujęciu tej strony to projekt kursu dla znanej kohorty, podczas gdy te same zasady wbudowane w produkt, którego użyje wiele kursów - prowadzonych przez osoby, których projektant nigdy nie spotka - są pracą [[educational-technology-developers|twórców technologii edukacyjnych]], gdzie wartości domyślne, konfigurowalność i dokumentacja niosą wagę pedagogiczną:

**Ugruntuj generowanie SI w ustrukturyzowanym modelu dydaktycznym.** Treść SI jest tak dobra, jak struktura pedagogiczna za nią - to wyraźna struktura, a nie biegłość w SI, określa jakość. Projektuj wokół uznanego modelu (ADDIE, Dick i Carey, szybkie prototypowanie) i koduj decyzje pedagogiczne wprost, zamiast polegać na tym, że model je wywnioskuje.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**Przyjmij ramę na poziomie zasad obok modelu dydaktycznego.** Model na poziomie kursu strukturyzuje jeden projekt; opublikowana rama wyznacza kryteria, które powinno spełniać wiele projektów. Przykładem wartym pełnej lektury jest *Powerful Learning with Emerging Technology* Digital Promise, która organizuje swoje wskazówki pod trzema zasadami - oparte na dowodach, skoncentrowane na uczącym się, budujące umiejętności - z których każda rozwijana jest w praktyki i strategie, i przypisuje [[privacy|prywatność]], [[explainable-ai|wyjaśnialność]] i sprawiedliwość do poszczególnych praktyk jako obowiązki bezpieczeństwa, a nie opcjonalne dodatki.([[powerful-learning-with-emerging-technology-2025]])
**Dopasuj konfigurację SI do zadania, a nie do wyrafinowania.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]] rozróżnia cztery warstwy - prompt, kontekst, uprząż i pętla weryfikowana - i stosuje zasadę minimalnie wystarczającej warstwy: używaj najmniej złożonej konfiguracji zdolnej do weryfikowalnego wyniku, ponieważ dodana orkiestracja niesie koszty koordynacji, weryfikacji, prywatności i rozumienia.

**Używaj wieloagentowych przepływów opartych na rolach do produkcji treści.** Zamiast jednego ogólnego promptu, orkiestruj odrębnych agentów/role (wykładowca, projektant nauczania, koordynator kursu), którzy współpracują przez zdefiniowany proces - odzwierciedla to sposób pracy rzeczywistych zespołów kursowych i daje kompletniejsze materiały niż pojedynczy prompt.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**Zapewniaj wskazówki dydaktyczne, a nie tylko dostęp do SI.** Niezależnie od tego, czy uczący się wchodzą w interakcję z SI bezpośrednio, czy z materiałami generowanymi przez SI, wskazówki zbudowane na teorii uczenia się (np. stopniowe [[scaffolding|rusztowanie]] promptowania ugruntowane w zasadach uczenia się generatywnego) napędzają wyniki wyższego rzędu; sam dostęp tego nie robi. Projektuj działanie edukacyjne wokół tego, jak uczy się umysł, i traktuj SI jako poznawcze „narzędzie myślowe", które rozszerza myślenie, a nie je zastępuje.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Modeluj zapominanie i planuj powtórki tam, gdzie zanik jest najgorszy.** G4L reprezentuje zanik wiedzy krzywą zapominania Ebbinghausa napędzaną upływem czasu i powtórzeniami oraz priorytetyzuje jednostki najbardziej narażone na zanik, zamiast ponownie serwować to, co oceniono najświeżej ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes i Kovács, 2026]]).

Fowlin i wsp. (2026) dodają ruch operacyjny do decyzji, gdzie wchodzi SI: rozłóż działanie na komponenty najlepiej wykonywane samodzielnie i te najlepiej sprzężone z SI, utrzymując osąd edukatora w centrum tego podziału ([[fowlin-operationalizing-learning-principles-ai|Fowlin i wsp. (2026)]]).

**Czyń treść identyfikowalną i przeglądalną.** Pozwól ludzkiemu projektantowi przejrzeć i poprawić wynik SI, zanim dotrze do uczących się, i strukturyzuj generowanie SI tak, by uzasadnienie pedagogiczne (dlaczego ta treść, w tej kolejności) było inspekcjonowalne - odpowiadając zarówno na kwestie jakości, jak i na obawy o nieprzejrzystość, które podkopują [[trust]] wobec generowanego nauczania.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **Przeglądaj generowane przez SI media na etapie scenariusza, a nie po syntezie.** PedaCo umieszcza przegląd edukatora na scenariuszu - gdzie błędy pedagogiczne są tanie do naprawienia - przed jakimkolwiek renderowaniem; oceniana trafność dydaktyczna wzrosła z 3,07 do 3,86, podczas gdy zautomatyzowana warstwa po syntezie poprawiła tylko dwa z pięciu wymiarów ([[ai-video-dual-gatekeeping-2026|Kim, Baek i Kwak (2026)]]).

**Projektuj pod [[accessibility|dostępność]] od początku.** Stosuj zasady [[universal-design-for-learning|UDL]] przy budowaniu narzędzi SI i materiałów generowanych przez SI, by służyły różnorodnym uczącym się, zamiast dorabiać dostępność po fakcie.([[ludia-udl-ai-thought-partner-2026]])

**Planuj medium dostarczania.** Projektowanie nauczania dla [[online-teaching-and-learning|nauczania i uczenia się online]] nie jest neutralnym tłumaczeniem projektu stacjonarnego - medium zmienia to, jakie rusztowanie, ocenianie i interakcja są wykonalne, a SI mnoży zarówno szanse (skalowalna [[personalized-learning|personalizacja]], wsparcie zawsze dostępne), jak i ryzyka ([[academic-integrity|uczciwość]], [[cognitive-offloading|odciążanie poznawcze]]), które projektanci muszą planować. Projektuj pedagogiczną otoczkę SI tak samo celowo online, jak w kontekstach bezpośrednich.

**Oceniaj wobec benchmarku, a nie wobec wrażeń.** Jeśli budujesz agenta projektowania nauczania, oceniaj go wobec standardowego, teoretycznie ugruntowanego benchmarku (np. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]), by móc zmierzyć, czy ugruntowanie w rzeczywistej ramie ISD faktycznie poprawia wynik wobec ogólnego LLM.([[jeon-isd-agent-bench-2026]])

- **SI przekształca praktykę projektowania nauczania.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar i Ilgaz (2026)]] [[meta-analysis-systematic-review|systematycznie przeglądają]] 28 badań (2020-2025) i stwierdzają, że SI wspiera projektantów w generowaniu treści, szablonach i personalizacji oraz jest konceptualizowana jako współpracownik/współautor/partner, a nie tylko narzędzie - choć dopasowanie pedagogiczne i gotowość praktyków pozostają wyzwaniami.

- **Udokumentowana aktywność koncentruje się w jednej fazie cyklu.** W przeglądzie 78 badań nad projektowaniem nauczania wspieranym przez SI aktywność w fazie Projektowania pojawia się w **74 z 78 badań (95%)**, a w Rozwoju w 44 (56%), podczas gdy Analiza sięga tylko 11 (14%), Ewaluacja 10 (13%), a Wdrożenie 7 (9%) - i **żadne badanie nie badało wsparcia SI w całym cyklu ADDIE**. Cykl jest aspiracją, której baza dowodowa nie pokrywa, co ma znaczenie dla każdego, komu sprzedaje się „rozwój kursów napędzany SI" jako zdolność end-to-end ([[spyropoulou-genai-instructional-design-systematic-review-2026|Spyropoulou i Kameas, 2026]]).
- **Trzy role SI, rozłożone hierarchicznie.** Użycie *generatywne* - SI wytwarzająca treść projektu na polecenie edukatora - dominuje w **96% badań**; użycie *rusztujące*, gdzie SI strukturyzuje rozumowanie samego projektanta, pojawia się w 35%; użycie *ewaluacyjne*, gdzie SI ocenia jakość artefaktu, w 21%. Dziedzina przytłaczająco używa SI do wytwarzania rzeczy, a nie do przesłuchiwania własnych decyzji projektowych, co jest odwrotnością konfiguracji krytycznego przyjaciela, którą przegląd wskazuje jako edukacyjnie obiecującą.

## Częste błędne wyobrażenia

- **„Planowanie lekcji z SI oddaje nauczycielom czas."** Czas planowania faktycznie spadł, z 3,32 godziny tygodniowo do 2,51 z narzędziem, ale **mediana nauczyciela planowała tylko 21% do 40% lekcji od zera**. Czas został zaoszczędzony, a planowanie nie stało się istotnie staranniejsze - oszczędność narastała, zamiast zostać reinwestowana.
- **„Współprojektowanie z SI jest dobrze udokumentowane."** Przegląd systematyczny [[wang-teacher-ai-co-design-review-2026|współprojektowania zadań edukacyjnych przez nauczyciela i SI]] **potwierdza wzorzec w skali na 28 badaniach**, co opisuje spójną praktykę, a nie wykazuje lepszych wyników.
- **„Rubryka to stały wkład."** Rubryka działa jako **pośredniczący interfejs między ludzką intencją pedagogiczną a wnioskowaniem maszyny**: traktowanie kryteriów oceniania jako **rewidowalnych** jest tym, co pozwala instrumentowi nieść intencję edukatora. Stała rubryka przenosi domyślne ramowanie maszyny do oceniania.

## Połączone koncepcje

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] - partnerstwa pedagogiczne
- [[online-teaching-and-learning]] - nauczanie i uczenie się online
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] - parasol: pedagogiki i strategie nauczania w edukacji z SI
- [[stakeholders]] - parasol: ludzie i odbiorcy w edukacji z SI (uczący się, nauczyciele, projektanci, administratorzy, decydenci)

## Połączone artykuły

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Zmierzone oszczędności czasu planowania obok ustalenia, że nauczyciele planują tylko 21% do 40% lekcji od zera
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — Analityka uczenia się i GenAI w podejmowaniu decyzji projektowych
- [[tang-chatbots-learning-design-2026]] — Użycie chatbota w projektowaniu uczenia się: projektanci zatrzymują się na efektach i pedagogice, a nie na generowaniu treści (Tang i wsp. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Wzorce interakcji nauczyciel-SI w projektowaniu lekcji według doświadczenia i biegłości w SI (Choi i wsp. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — SI w szkolnictwie wyższym: zaangażowanie i pośrednicząca rola metod nauczania
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taksonomia (obiekt graniczny) do klasyfikowania działań edukacyjnych z GenAI
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — Agenci webowi SI: autonomiczny agent webowy ocenia projekty lekcji i przewiduje rezygnację studentów przed ich zaangażowaniem (Wang, Mitchell i Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: rama poznawczo aktywowanego wzmocnienia SI w fizyce
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Projektowanie dla zasięgu: siedem dźwigni i student sam z SI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — Kiedy odmowa daje lepsze wideo: podwójna kontrola dostępu dla pedagogicznie ugruntowanego tworzenia treści SI
- [[rhaimi-productivemath-2025]] — ProductiveMath: SI we wspieraniu projektowania zadań produktywnego niepowodzenia
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — SI i praktyka projektowania nauczania: przegląd systematyczny (Kibar i Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Oparty na grafach tutoring inteligentny dla domen dynamicznych (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Celowe czynienie SI irytującą: ograniczenie w pisaniu wspieranym przez SI (Konradt, Boote i Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Model inteligentnej klasy i pętla D-T-E poprawiające biegłość w projektowaniu nauczania na studiach magisterskich z matematyki (Zhu i wsp. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Platforma oparta na SI generująca zadania modelowania matematycznego (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Współprojektowanie zadań edukacyjnych przez nauczyciela i SI: trendy i perspektywy (Wang i wsp. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Architektura ról w zróżnicowanych działaniach grupowych projektowanych przez SI (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLM-y jako agenci iteracyjnego projektowania pedagogicznego
