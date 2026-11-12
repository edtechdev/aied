---
title: "Moodle-Fragentyp KI-Text"
created: "2026-11-12T11:18:00-05:00"
updated: "2026-11-12T11:18:00-05:00"
type: resource
summary: "Ein Open-Source-Fragentyp für Moodle (GPL v3), der Freitextantworten mit einem großen Sprachmodell anhand eines Prompts pro Frage und eines optionalen Bewertungsschemas bewertet, OpenAI, Azure oder ein selbst gehostetes Ollama-Modell nutzt und das KI-Feedback einer menschlichen Bewertungsperson anzeigt."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Die meisten KI-Quiz-Integrationen schicken jede Antwort an einen festen Bewertungsaufruf. Dieser Moodle-Fragentyp macht das Gegenteil: Die Lehrkraft schreibt das Bewertungsschema. Jede Frage trägt einen **Prompt**, der dem Modell sagt, wie die Antwort zu bewerten ist, und ein optionales **Bewertungsschema**, das beschreibt, wie Punkte vergeben werden, sodass ein Item „Schreibe einen Satz im Präteritum" zehn Punkte für fehlerfrei, null für gebrochene Grammatik und einen Punkt Abzug pro Rechtschreibfehler festlegen kann. Das Modell gibt eine Note und [[feedback|Feedback]] zurück, und eine Lehrkraft kann dieses Feedback beim manuellen Bewerten neben der Antwort sehen.

## Was man damit tun kann

Fügen Sie eine AIText-Frage zu einem beliebigen Moodle-Quiz hinzu, schreiben Sie Prompt und Bewertungsschema und testen Sie Prompts mit einem AJAX-**Prompt-Tester** im Bearbeitungsformular, statt Vorschauversuche durchzuspielen. Die Bewertung läuft über zwei begleitende Frageverhalten (sofort und aufgeschoben), die zusammen mit dem Fragentyp installiert werden müssen, was die KI-Bewertung von Moodles Kernverhalten isoliert; bestehende Versuche, die das alte Verhalten `interactivecountback` nutzten, migrieren beim Upgrade. Ist das Modell nicht erreichbar, verschlechtert sich die Bewertung, statt einen Fehler zu werfen, sodass ein Versuch nicht verloren geht. Weil die Frage ein nativer Quiztyp ist, landen Ergebnisse wie bei jedem anderen Item im Notenbuch — genau das braucht ein Kursteam, bevor es [[automated-assessment|automatisierte Bewertung]] als Piloten statt als Demo behandeln kann.

Das Design legt außerdem das Bewertungsschema dorthin, wo über [[ai-feedback-quality|Feedback-Qualität]] entschieden wird: in den Prompt, geschrieben von der Lehrkraft, statt in eine Anbietervorgabe. Das ist der ehrliche Einsatz des Werkzeugs — Kriterien, die man prüfen und überarbeiten kann —, bedeutet aber auch, dass die Qualitätsobergrenze das Schema ist und ein vager Prompt vage Bewertung erzeugt. Einrichtungen greifen darauf bei den häufigen Prüfungen mit niedrigen Einsätzen zurück, auf denen [[formative-assessment|formative Bewertung]] beruht, wo sonst ein Mensch vierzig kurze Antworten pro Nacht lesen würde.

## Für wen es gedacht ist

Moodle-Administratoren und -Entwickler, die die Seite bereits betreiben, Lehrende, die KI-Bewertung ohne separate Plattform oder kommerzielle Lizenz wollen, und Forschende, die eine kontrollierbare Bewertungspipeline zum Untersuchen brauchen. Vorausgesetzt werden Moodle 4.5 oder später und API-Zugang zu einem Modell — entweder OpenAI oder Azure über Moodles KI-Subsystem oder eine selbst gehostete Ollama-Instanz über Local AI Manager, was den Text der Studierenden auf lokaler Infrastruktur hält. Das Plugin wird von Marcus Green gepflegt, ist im Moodle-Plugin-Marktplatz vertreten und hatte 33 Sterne und 36 Forks, als diese Seite geprüft wurde.

## Anmerkungen und Vorbehalte

Open Source unter GPL v3 oder später, aber kostenlos heißt nicht kostenlos im Betrieb: Jemand zahlt für die Modell-API, und die Qualität der Bewertung hängt von Modellwahl und Prompt-Design ab. Freitextantworten verlassen den Moodle-Server, wenn ein externer Anbieter genutzt wird, also regelt die Datenvereinbarung der Einrichtung, was gesendet werden darf; die selbst gehostete Ollama-Route existiert für Standorte, die studentische Arbeiten nicht hinausschicken können. Das Repository nennt keine veröffentlichte Genauigkeits- oder Übereinstimmungsstudie, das Plugin sollte also nicht in der Annahme eingeführt werden, LLM-Bewertung sei menschlicher Bewertung gleichwertig — [[assessment-validity|Validität]] muss lokal gegen menschliche Noten belegt werden, bevor eine Note Gewicht trägt. Die begleitenden Verhalten sind eine harte Abhängigkeit: Wer nur den Fragentyp installiert, lässt Fragen unbewertbar.

## Verbundene Konzepte

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
