---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "En webapplikation til at bygge trinvise AI-opgaver, hvor underviseren sætter modellens rolle og portene for studerendes brug, og den studerendes identitet holdes uden for modellens kontekst."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Automatisk maskinoversættelse af denne engelske side, der endnu ikke er blevet gennemgået af en modersmålstalere.*

En bygger til AI-integrerede opgaver, bygget af Joseph Slade på Oregon State University og drevet af AI Education Labs, Inc. Præmissen er, at alternativet til en chatbot uden begrænsninger ikke er forbud, men struktur: underviseren definerer de trin, en studerende bevæger sig gennem, beslutter hvilken rolle modellen spiller i hvert trin, og fastsætter, hvor langt en studerende må læne sig op ad den. Opgaven publiceres derefter som et tilmeldingslink i stedet for at blive distribueret som et prompt-dokument.

## Hvad du kan gøre med det

- **Sæt modellens rolle pr. opgave.** Byggeren tilbyder forudindstillinger som tutor, sokratisk spørger, feedbackgiver og forskningsassistent plus et brugerdefineret prompt, så assistenten opfører sig, som opgaven kræver.
- **Sæt porte mellem trinnene.** Et trin kan kræve, at en studerende forklarer sin ræsonneren, før der gås videre, og AI-hjælp kan loftbegrænses pr. trin — grænsefladen viser et resterende antal i stedet for ubegrænset adgang.
- **Vælg arbejdsfladen.** Studerende skriver på en dokumentside med kommentarer i margenen, og chat- og notesbogslayouts er tilgængelige, hvor de passer bedre til opgaven end en side.
- **Publicér og følg ræsonnementet, ikke kun outputtet.** Et tilmeldingslink tilmelder studerende, fremskridt gemmes løbende, og underviseren kan læse hver studerendes transskript og eksportere det som CSV eller Markdown.
- **Udkast med AI, finpuds derefter.** Opsætningen kan starte fra nogle få spørgsmål, en uploadet eksisterende opgave eller en tidligere en, med en assistent på undervisersiden, der udfylder et første udkast.

De publicerede eksempler antyder det tilsigtede spænd: en fysikopgave om evidens og vidnesbyrd, en biologiøvelse, der diagnosticerer ræsonnementfejlen i en AI-interns forklaring, og en psykologiopgave, der tjekker, om en nyhedshistorie beskriver en undersøgelses design.

## Hvem det er til

Undervisere i videregående uddannelser, der ønsker, at [[learning-design|undervisningsdesign]] skal bære AI-politikken — det vil sige, som hellere vil begrænse, hvordan en model kan bruges inde i en opgave, end overvåge, om den blev brugt. Portene og rolleindstillingerne er et udtryk for [[guardrails|sikkerhedsrammer]] allerede på designtidspunktet, og appen sigter mod kursusarbejde snarere end institutionel chat-udrulning.

## Noter og forbehold

- **Pilotfase.** Vilkårene angiver, at tjenesten i øjeblikket leveres vederlagsfrit til piloter, og at betalingsplaner kan indføres med varsel, og at funktioner kan ændres eller trækkes tilbage. Der er ingen offentlig prisside; priserne nås først efter login.
- **Privatlivspåstanden er arkitektonisk og værd at læse nøje.** Hver studerende får et tilfældigt sessions-id pr. opgave, koblingen mellem studerendes konto og session bliver på Repertoires server, og modellen modtager den anonyme session, opgavekonteksten og den studerendes tekst. Forbeholdet ligger i selve politikken: tekst, en studerende skriver, som identificerer vedkommende, sendes som al anden tekst, og kursusunderviseren kan læse transskripterne.
- **Tredjepartsinferens.** Svar genereres via Anthropic's Claude API med OpenAI's API som backup, under kommercielle vilkår, som ifølge politikken udelukker træning på API-input og -output pr. september 2026. En institution bør bekræfte det gennem sin egen aftale snarere end gennem en webside.
- **Det er ikke en karaktergiver.** Politikken og vilkårene beskriver begge assistentens vurderinger såsom »mål nået« som hjælp til underviseren; karakterer og akademiske beslutninger bliver hos underviseren og institutionen, og beslutninger om [[ai-use-disclosure|åbenhed om AI-brug]] over for studerende overlades til underviseren.
- **Hostet i USA.** Data ligger i Google Cloud Firestore med Vercel-hosting, og politikken adresserer FERPA-forpligtelser, hvor tjenesten håndterer uddannelsesjournaler; brugere uden for USA får at vide, at deres data behandles dér.
