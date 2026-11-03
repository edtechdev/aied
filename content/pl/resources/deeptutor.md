---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "Otwartoźródłowe wydanie agentowych ram korepetycji DeepTutor: jedno środowisko do korepetycji, generowania pytań, ćwiczenia do mistrzostwa, badań i wizualizacji, z możliwą do wglądu pamięcią uczącego się."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**DeepTutor** to otwartoźródłowa implementacja ram korepetycji ocenianych w [[intelligent-tutoring|badaniu DeepTutor]], która rozrosła się znacznie poza zakres tamtej pracy, stając się ogólnym, agentowym środowiskiem uczenia się. Korepetycje, rozwiązywanie problemów, generowanie quizów, ćwiczenie do mistrzostwa, badania i wizualizacja dzielą jedno środowisko wykonawcze i jeden kontekst sesji, więc profil uczącego się budowany podczas rozwiązywania problemów warunkuje kolejne wyjaśnienia i zadania ćwiczeniowe.

## Co można z nim zrobić

Dziesięć trybów — Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading i Immersive Watching — działa na tym samym środowisku wykonawczym, korzystając z baz wiedzy wielokrotnego użytku, książek, szkiców, notatników, banków pytań i person. Wyszukiwanie jest celowo wielosilnikowe: wersjonowane biblioteki RAG na LlamaIndex, PageIndex, GraphRAG, LightRAG lub zdalnym serwerze LightRAG, a do tego samodzielnie hostowana baza WeKnora, biblioteka Tencent IMA lub MarginNote albo podłączony skarbiec Obsidian. Pamięć jest dostępna do wglądu, a nie nieprzejrzysta: ślady L1, powierzchniowe streszczenia L2 i synteza L3 są widoczne i edytowalne, a Graf Pamięci wiąże każde streszczenie z dowodami, na których się opiera. Binarka `deeptutor` daje REPL w terminalu i strumieniuje NDJSON dla każdego agenta, który chce sterować nią jak narzędziem, a społeczność EduHub rozprowadza instalowalne umiejętności.

## Dla kogo

Wykładowcy i badacze ze szkolnictwa wyższego, którzy chcą wdrożalnej wersji ram opisanych w pracy, deweloperzy budujący na wymiennym środowisku wykonawczym oraz samokierujący się uczący, gotowi uruchomić własną instancję. Dokumentacja znajduje się na deeptutor.info.

## Uwagi

Licencja Apache 2.0, wersja 1.6.9 na wrzesień 2026, z około 40 000 gwiazdek na GitHubie. Opublikowana ewaluacja, na której się opiera — średnia poprawa o 10,8% na metrykach personalizowanych wobec silnych punktów odniesienia i o 29,4% mocniejsze ogólne rozumowanie agentowe w pięciu modelach bazowych, na benchmarku TutorBench — jest streszczona na [[zhao-deeptutor-agentic-personalized-tutoring-2026|stronie artykułu]], którego ograniczenia obowiązują również tutaj. Jak w każdym otwartoźródłowym stosie SI, klucze dostawców modeli dostarcza się samodzielnie, a wdrożenie desktopowe lub serwerowe wymaga Pythona 3.11 i Node.

## Powiązane pojęcia

[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
