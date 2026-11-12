---
title: "MindRouter"
created: "2026-11-12T11:08:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Brama inferencji na licencji Apache-2.0 z Uniwersytetu Idaho, która stawia kampusowy klaster węzłów GPU vLLM i Ollama za jednym API zgodnym z OpenAI i dodaje sprawiedliwe szeregowanie, limity tokenów na użytkownika, SSO, logowanie audytu oraz monitorowanie GPU i energii na żywo."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Tłumaczenie automatyczne tej strony z języka angielskiego, jeszcze nie sprawdzone przez rodzimego użytkownika języka.*

Większość kampusowych dyskusji o AI zaczyna się od tego, który model kupić, i kończy przed trudniejszym pytaniem: gdzie działa, kto go rozlicza i kto widzi logi. MindRouter jest odpowiedzią na to drugie pytanie. To samodzielnie hostowana brama, która stoi przed heterogenicznym klastrem serwerów [[llm|LLM]] — węzłów vLLM i Ollama na GPU, które instytucja posiada — i wystawia jedno API mówiące dialektami OpenAI, Anthropic i Ollama, tłumacząc między nimi, by istniejący kod klienta działał dalej.

## Co można z nim zrobić

Skieruj narzędzie na bramę zamiast na punkt końcowy dostawcy. Za nią MindRouter zajmuje się tym, czego potrzebuje współdzielone wdrożenie: sprawiedliwym szeregowaniem z ważonym deficytowym round robin, limitami tokenów i żądań na użytkownika, dostępem opartym na rolach z opcjonalnym SSO przez Azure AD/Entra, Google, dowolnego dostawcę OIDC lub SAML 2.0 oraz pełnym logowaniem audytowym promptów, odpowiedzi i artefaktów. Agent sidecar GPU raportuje wykorzystanie, pamięć, temperaturę i moc na węzeł, więc administrator widzi koszt energii na żądanie i może płynnie wyłączyć backend, gdy zbliża się konserwacja. Obejmuje więcej niż czat — embeddingi, wizję, generowanie obrazów i wideo, syntezę mowy i rozpoznawanie mowy, OCR dokumentów — i dostarcza serwery MCP oraz umiejętności agentowe dla asystentów kodowania.

Powód, dla którego uczelnia miałaby się tym przejmować, to ten, który nazywa projekt: [[institutional-ai-infrastructure|suwerenność instytucjonalna w zakresie AI]]. Prompty i dokumenty pozostają na infrastrukturze, którą instytucja obsługuje, zamiast przechodzić przez chmurę strony trzeciej, co łatwiej obronić przed senatem akademickim lub biurem [[privacy|ochrony prywatności]] niż umowę o przetwarzaniu danych z dostawcą. Czy ten argument się utrzyma, zależy od tego, czy instytucja ma GPU, moc i personel — brama czyni lokalny hosting zarządzalnym, nie tanim.

## Dla kogo

Grupy obliczeń naukowych i centralne IT z istniejącą mocą GPU, centra nauczania i uczenia się, które chcą jednego miejsca do rozliczania użycia przez kadrę i studentów, oraz administratorzy ważący hostowane platformy korporacyjne przeciw samodzielnemu prowadzeniu inferencji. To wdrożenie Docker Compose z udokumentowaną konfiguracją SSO i własną marką, utrzymywane na Uniwersytecie Idaho, gdzie autor przedstawił je na PEARC '26; projekt ma 22 gwiazdki i 3 forki według stanu z listopada 2026 r.

## Uwagi i zastrzeżenia

Bezpłatny i otwarty na licencji Apache-2.0, ale koszt się przenosi, a nie znika: sprzęt, prąd i czas pracy personelu na prowadzenie klastra. Oprogramowanie jest młode jak na standardy infrastruktury — trzech współtwórców, jedna instytucja pochodzenia i wydania numerowane w setkach tagów — więc uczelnia powinna pilotować je obok istniejącej usługi, a nie jako jedyną drogę do modelu. Opublikowana ocena zachowania szeregowania i limitów pod rzeczywistym obciążeniem kampusu nie znajduje się w repozytorium; artykuł z PEARC to miejsce, gdzie szukać własnego opisu autorów.

## Powiązane pojęcia

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
