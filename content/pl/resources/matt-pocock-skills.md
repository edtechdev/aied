---
title: "Skills for Real Engineers"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Otwartoźródłowy zbiór małych, komponowalnych umiejętności agentowych Matta Pococka, w tym wielosesyjna umiejętność nauczania, umiejętność bezlitosnego wypytywania i wskazówki pisania dokumentów zrozumiałych dla agenta."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

**Skills for Real Engineers** to opublikowany przez Matta Pococka katalog umiejętności agentowych: małe, komponowalne pliki instrukcji, które instalują się w Claude Code, Codexie lub innym agencie i są pisane tak, by je adaptować, a nie przyjmować w całości. Większość zbioru służy pracy programistycznej, ale kilka umiejętności to instrumenty edukacyjne zbudowane do nauczania i wypytywania, a nie do kodu.

Najczystszym przykładem jest `teach`, która działa przez wiele sesji i traktuje katalog roboczy jako stanowe środowisko nauczania, więc postęp uczącego się i otwarte pytania trwają między rozmowami, zamiast zaczynać się od nowa za każdym razem. `grill-me` i jej pierwotna `grilling` wypytują użytkownika bezlitośnie o plan, aż każda gałąź zostanie rozstrzygnięta — to [[socratic-method|pytanie sokratejskie]] jako procedura wielokrotnego użytku, a nie nastrój rozmowy. `wait-what` reaguje w chwili, gdy wiadomość nie dociera, i przedstawia ją ponownie prostym językiem wraz z brakującym kontekstem — ruch, który każdy wykładowca rozpozna, widząc, jak wyjaśnienie mija się z celem za pierwszym razem. `writing-for-agents` obejmuje pisanie dokumentów, których [[prompt-engineering|agent]] potrafi przestrzegać, co jest dziś praktyczną formą pisania instrukcji do [[pedagogical-agent|materiałów kursowych z SI]]. `to-questionnaire` zamienia decyzję w kwestionariusz dla tego, kto może na nie odpowiedzieć, `handoff` kompaktuje rozmowę w dokument, z którego inny agent może kontynuować, a `wizard` generuje interaktywny przewodnik po krokach, które może wykonać tylko człowiek.

## Co warto wiedzieć przed wdrożeniem

Wszystko jest [[open-source|otwartoźródłowe]] na licencji MIT i wolne do wzięcia jako punkt wyjścia dla lokalnych [[ai-literacy|kompetencji w zakresie SI]] albo [[self-directed-learning|samodzielnej nauki]]. Przyjęcie jest duże i szybkie: około 270 000 gwiazdek i 23 000 forków w chwili sprawdzania we wrześniu 2026, z ostatnim commitem 18 września 2026. Zastrzeżenie dotyczy zakresu. Umiejętności zakładają kontekst pracy [[human-ai-collaboration|inżyniera]], są uporządkowane w kubełki inżynierii, produktywności, wycofanych i w toku, więc część pozycji jest wyraźnie niedokończona lub wycofana, a README służy zarazem jako zapis do newslettera. Umiejętności nauczania i wypytywania traktuj jako część przenośną i zakładaj, że każdą przepiszesz, zanim postawisz ją przed studentami.

## Powiązane pojęcia

[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
