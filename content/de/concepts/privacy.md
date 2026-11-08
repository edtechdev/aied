---
connected_resources: [drawsplat]
title: Datenschutz
created: "2026-08-09T07:47:05-04:00"
updated: "2026-11-07T20:05:54-05:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13, institutional-ai-policy]
type: concept
technology: [learning-analytics, personalized-learning]
ethics: [equity-in-ai-education, ethics]
level: [k 12]
confidence: high
institutions: [educational-policy-ai, governance, regulation]
translation_of: concepts/privacy
source_updated: "2026-11-08T08:41:46-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Datenschutz** — der Schutz von Studierendendaten, Identität und [[agency|Autonomie]] in KI-augmentierten Lernumgebungen. Datenschutzbedenken intensivieren sich, während KI-Systeme zunehmend granulare Verhaltensdaten für [[personalized-learning|Personalisierung]], [[learning-analytics|Analytik]] und [[adaptive-learning|adaptiven Unterricht]] sammeln. Er ist eine zentrale ethische und regulatorische Restriktion für [[ai-education|KI in der Bildung]]: Nahezu jedes KI-Werkzeug, das personalisiert, vorhersagt oder prüft, hängt von Lernendendaten ab, was Datenminimierung, Einwilligung, Transparenz und Sicherheit zu fundamentalen Gestaltungsanforderungen statt zu Nachgedanken macht.

## Fragen zum Nachdenken

- Über welche Studierendendaten wären Sie unwohl, wenn sie über Sie gesammelt würden —, selbst wenn sie Ihr Lernen verbesserten? Wo wird Personalisierung zu Überwachung?
- Viele Studierende haben „keine echte Wahl“, als eine verpflichtende Plattform zu nutzen, was Einwilligung nominell macht. Haben Sie jemals etwas zugestimmt, ohne wirklich zu verstehen, was gesammelt wurde und warum? Was würde informierte Einwilligung tatsächlich verlangen?
- Dieselben Lernendendaten, die adaptives, personalisiertes Lernen speisen, erzeugen auch Risiko von Missbrauch und Schaden. Können Sie einen Personalisierungsnutzen benennen, für den Sie etwas Datenschutz zu tauschen bereit wären —, und die Linie, die Sie nicht überschreiten würden?
- Die Seite warnt, dass Datenschutzsicherungen „standardmäßig nur manche Lernende schützen könnten“. Welche Studierende könnten am stärksten exponiert sein, und wie verbindet sich Datenschutz mit Gerechtigkeit und [[bias-mitigation|Fairness]]?
- Ständiges KI-Monitoring —, selbst wohlmeinendes —, kann Verhalten und [[anxiety-and-stress|Angst]] formen. Wann hat das Beobachtetwerden verändert, wie Sie sich verhielten, und was legt das über KI-Erfassung im Klassenzimmer nahe?
- Für Kinder erstreckt sich Datenschutz über Datenschutz hinaus in Sicherheit. Warum könnten allgemeine Sicherheitswerkzeuge bildungsbezogene Risiken von Minderjährigen verpassen, und wer sollte in der Schleife sein?

## Einleitung

Datenschutz ist die Vorbedingung für vertrauenswürdige KI in der Bildung. Weil KI-Systeme sich mit Daten verbessern —, [[personalized-learning|Personalisierung]] verlangt detaillierte Lernendenprofile, [[learning-analytics|Lernanalytik]] verlangt granulare Interaktionsprotokolle, und [[llm-training-and-fine-tuning|feinabgestimmte Tutoringmodelle]] verlangen authentische Lernende-Tutor-Transkripte —, erzeugen dieselben Daten, die adaptive, skalierbare Bildung ermöglichen, auch Risiko von Überwachung, Missbrauch und Schaden. Die Wissensdatenbank behandelt Datenschutz als untrennbar von [[ethics|Ethik]] (dem normativen Rahmen), [[regulation|Regulierung]] (den Rechtsanforderungen), [[governance|Steuerung]] (der institutionellen Verantwortung) und [[equity-in-ai-education|Gerechtigkeit]] (wer geschützt und wer exponiert ist). Ihre Datenschutzartikel ballen sich um vier wiederkehrende Probleme: Sammlung in großem Maßstab, Einwilligung und Transparenz, Sicherheit und Anonymisierung, und die eigenen Schutzpflichten gegenüber Kindern.

## Die zentralen Datenschutzherausforderungen

- **De-Identifikation hängt von messbarer Erkennungsqualität ab.** [[ji-de-identification-personally-identifiable-information-2025|Ji et al. (2025)]] bewerteten fünf PII-Erkennungskonfigurationen an Studierendentext.
Feinabgestimmtes GPT-4o-mini erreichte einen Recall von 0,9589 für 0,92 US-Dollar pro 1 Mio. Token, etwa ein Sechstel von Azure AI Language mit 4,90 US-Dollar pro 1 Mio. Token.
Ein zweistufiger Verifier hob die Präzision auf 0,8893, wo Falschpositive die Korpusnutzbarkeit beeinträchtigen würden, und der Fehlermodus niedriger Präzision ist semantisch disruptiv: Er ersetzt „Newton“ durch „David“ in einem Mathetext oder markiert Jesus Christus, Maria und Josef in einer Geschichte, deren Hinweis Nazareth ist.
- **Die Prüfungsaufsichts-Evidenzbasis ist dünn bei Ethik.** Ein Review von 80 Studien fand 35%, die ihren Datensatz nicht offenlegten, 40%, die ein einzelnes Modell evaluierten, 30%, die nicht reproduzierbar waren, und nur 25%, die ethische Fragen adressierten; Falschmeldungen —, normales Verhalten zu markieren —, bleiben ein zentrales Reliabilitätsrisiko ([[automated-online-exam-proctoring-decade-review-2026|Malhotra & Chhabra (2026)]]).

- **Chat-Oberflächen geben das Gespräch selbst preis.** Ein Audit von 42 KI-Chat-Plattformen durch [[bekos-contextual-leakage-ai-chat-platforms-2026|Bekos et al. (2026)]] fand 21, die Gesprächstitel an Drittanbieter-Tracker sendeten, und die sieben Bildungsplattformen kamen im Schnitt auf etwa 367 Tracker-Anfragen je Plattform, wobei fünf Kontext preisgaben.

## Kindersicherheit und K-12-Schutz

[[k-12|K-12]]-Umgebungen verlangen stärkere Datenschutzsicherungen, weil Lernende minderjährig sind. Das erstreckt Datenschutz über Datenschutz hinaus in [[pedagogical-safety|pädagogische Sicherheit]]: die Werkzeuge, die Kinder nutzen, müssen nicht bloß ihre Daten schützen, sondern sie auch vor Schaden schützen. [[child-safety-genai|Kindersicherheitsforschung]] zeigt, dass allgemeine Sicherheitsklassifikatoren oft bildungsbezogene unsichere Prompts von Kindern verpassen, und warnt, dass Schulen nicht annehmen können, Standard-Modellsicherungen schützten jüngere Nutzende —, sie brauchen kinderspezifische Evaluation, vorfallbegründetes Testen und [[human-in-the-loop-ai|menschliche Aufsicht]]. Die Rahmung verbindet Datenschutz mit [[equity-in-ai-education|Gerechtigkeit]]: wer durch Standardsicherheit und -datenschutzpraxis geschützt wird, reflektiert, wessen Sicherheit und Autonomie ein System als unverhandelbar behandelt.

## Datenschutz in der Praxis

- **Behandeln Sie Datenschutz als Gestaltungsanforderung, nicht als politisches Nachgedanke.** Das [[teachlm-post-training-llms-education|TeachLM]]-Beispiel zeigt, dass Einwilligung, Anonymisierung und sichere Datenhandhabung in die Datenpipeline selbst eingebaut werden können —, ein Modell zur ethischen Beschaffung der authentischen Daten, die [[intelligent-tutoring|KI-Tutoren]] wirksam machen.
- **Gestalten Sie für Datenminimierung.** Bevorzugen Sie Ansätze, die nur sammeln, was Anpassung verlangt (Edge/föderierte KI, Verarbeitung auf dem Gerät), statt Interaktionsdaten standardmäßig zu horten. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] demonstrieren eine konkrete föderierte Form davon für [[cognitive-diagnosis|kognitive Diagnose]]: mehrere kommerzielle [[llm|LLM]]-APIs kollaborieren an der Diagnose, während sie lokal ε-lokale differentielle-Datenschutz-Rauschen zu jeder Modellvorhersage vor der Aggregation hinzufügen, sodass kein Anbieter rohe Studierendendaten sieht —, eine datenschutzbewahrende Architektur, die [[intelligent-tutoring|KI-Tutoring]] funktionsfähig hält, ohne sensible Lernendentrajektorien zu zentralisieren. Föderiertes Lernen ermöglicht auch **institutionenübergreifende Analytik ohne Datenteilung**: [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]] trainieren ein multi-task akademisches Risikomodell über Institutionen hinweg durch föderierte Aggregation, sodass rohe Lernendendaten lokal bleiben und nur Modellparameter geteilt werden —, eine kollaborative, datenschutzbewahrende Alternative zu zentralisierter [[learning-analytics|Lernanalytik]], die Datensouveränität wahrt und gleichzeitig institutionenübergreifende Muster erfasst.
- **Sichern Sie ausdrückliche, informierte Einwilligung.** Wo Lernendendaten KI-Entwicklung oder -Verbesserung finanzieren, sollten Institutionen über Sammlung, Speicherung und Nutzung transparent sein —, und Studierende sollten echte Optionen haben, nicht verpflichtende Plattformen.
- **Prüfen Sie, wer geschützt wird.** Datenschutzsicherungen sollten nicht standardmäßig nur manche Lernende schützen; [[equity-in-ai-education|Gerechtigkeit]] verlangt, dass dieselbe Sorgfalt über Alter, Sprache, Behinderung und sozioökonomische Linien hinweg gilt.

## Verbindungen

Datenschutz verbindet sich mit [[learning-analytics|Lernanalytik]] (dem Datensammler), [[personalized-learning|Personalisierung]] (dem Datenkonsumenten), [[k-12]] (verstärktem Schutz), [[ethics|Ethik]] (dem normativen Rahmen), [[regulation|Regulierung]] (Rechtsanforderungen), [[governance|Steuerung]] (institutioneller Verantwortung), [[equity-in-ai-education|Gerechtigkeit]] (wer geschützt wird), [[pedagogical-safety|pädagogische Sicherheit]] (Kinderschutz) und [[educational-policy-ai|Bildungspolitik zu KI]] (Politikantworten). Er ist eine der fundamentalen Restriktionen, die jede verantwortliche KI-Einsatz in der Bildung erfüllen muss —, der Grund, weshalb vertrauenswürdige KI, in der Rahmung der Wissensdatenbank, mit vertrauenswürdigen Daten beginnt.

## Verbreitete Fehlvorstellungen

- **„Prüfungsaufsicht erfasst einen begrenzten, gut verstandenen Ausschnitt von Daten."** Ein Katalog dessen, was [[remote-proctoring|Prüfungsaufsichts]]systeme tatsächlich erfassen, listet **Gesichtsbilder, Ausweisdokumente, Raumscans einschließlich 360-Grad-Abtastungen, Mikrofon-Audio, Gesichtserkennung** und mehr. Der Umfang ist breiter, als die meisten Einwilligungsverfahren beschreiben.
- **„Die Prüfungsaufsichtsliteratur belegt die Ethik der Prüfungsaufsicht."** Ein Review von **80 Studien** fand **35%, die ihren Datensatz nicht offenlegten, 40%, die ein einzelnes Modell evaluierten, 30%, die nicht reproduzierbar waren, und nur 25%**, die die Berichtsschwelle erfüllten. Die Evidenzbasis ist dünn genau bei den Fragen, die eine Institution vor dem Einsatz beantwortet haben muss.
- **„Datenschutz ist ein Compliance-Häkchen statt eine Gestaltungsanforderung."** Nahezu jedes KI-Werkzeug, das personalisiert, vorhersagt oder prüft, hängt von Lernendendaten ab, was Datenminimierung zu einer Gestaltungsentscheidung macht. Ein Werkzeug, das die Daten benötigt, hat keine optionale Datenschutzeinstellung; es hat eine Datenabhängigkeit, die das Design gewählt hat.
- **Bewusstsein für Datenpraktiken folgt nicht daraus, sie zu sehen.** [[bergdahl-student-epistemic-agency-ai-2026|Bergdahl (2026)]] fand **66% von 47 Siebtklässlerinnen und Siebtklässlern**, die bei [[conversational-ai|Chatbots]], die ihr Schreiben lasen, die am wenigsten schützende Option wählten, und **47%**, die algorithmischen Einfluss als „just fun" abtaten — gemessen **einen Monat nach** einer Unterrichtsstunde, in der die Klasse ihr eigenes protokolliertes Verhalten live projiziert sah, es als „scary" bezeichnete und mehrere über die Pause hinaus blieben, um die Plattform weiter zu nutzen. Datenschutzunterricht, der den Mechanismus sichtbar macht, ohne die Kosten konkret zu machen, lässt die Haltung unverändert. Der Autor merkt an, dass die niedrigen Werte hier **verlässlicher sein könnten als die hohen**, da es für diese Items keine sozial erwartete Antwort gibt, während Verantwortung und Governance die richtig klingende Antwort einladen.

## Verbundene Konzepte

- [[remote-proctoring]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[k-12]]
- [[ethics]]
- [[regulation]]
- [[equity-in-ai-education]]
- [[governance]]
- [[educational-policy-ai]]
- [[pedagogical-safety]]
- [[legal-issues-and-risks]]
- [[student-experience]]
- [[student-support-and-success]] — Studierendenakten, datenübergreifende gemeinsame Nutzung zwischen Ämtern und föderiertes Risikomodellieren

## Verbundene Artikel
- [[bekos-contextual-leakage-ai-chat-platforms-2026]] — Penny für Ihre Prompts: kontextuelles Leck in KI-Chat-Plattformen (Bekos et al. 2026)
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Föderiertes und erklärbares Learning Analytics für datenschutzwahrendes akademisches Risikomodellieren (Villegas-Ch et al. 2026)
- [[learning-analytics-to-educational-interventions-2026]] — Vom Learning Analytics zu Bildungsinterventionen: Faktoren, die vertrauenswürdige LA-basierte Interventionen ermöglichen (Svetec, Divjak & Kadoić 2026)
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[agentic-literacy-debt]] — Agentische Kompetenz-Schuld: die strukturelle KI-Kompetenzlücke durch autonome Agenten (Nama 2026)
- [[ai-fatigue-academic-contexts]]
- [[ai-lms-middle-school-longitudinal]]
- [[child-safety-genai]]
- [[eduzone-llm-safety-k12]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[teachlm-post-training-llms-education]] — TeachLM: Anonymisierung und Einwilligung für authentische Lerndaten
- [[bassett-ai-detectors-education-2026]] — Kopf gewinnen wir, Zahl verlierst du: KI-Detektoren in der Bildung (Bassett et al. 2026)
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Datenschutzwahrende föderierte LLM-kognitive Diagnose
- [[agarwal-ethical-values-norms-aied-2026]] — Ethische Werte und Normen für KI in der Bildung
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Was Prüfungsaufsichtssysteme erfassen, und die Abwesenheit der Datenschutzliteratur in der Evidenzbasis
- [[edtech-privacy-deferral-2026]] — „We'll Fix It Later“: Bildung, KI und das Aufschieben von Datenschutz für Lernende in EdTech
