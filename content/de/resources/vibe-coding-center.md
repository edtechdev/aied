---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Ein Field Guide für Lehrkräfte zum Bauen einer statischen Bildungswebsite mit einem KI-Coding-Assistenten: drei Markdown-Anweisungsdateien für Design, Sicherheit und Datenschutz von Lernenden, mit lesbaren Leitfäden und einem herunterladbaren Bundle."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [vibe-coding, ai-literacy, accessibility, learning-design, design-thinking, generative-ai, privacy]
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

**The Vibe-Coding Center** ist Miguel Guhlins kostenloser Field Guide für eine Lehrkraft, die mit einem KI-Coding-Assistenten eine kleine statische Bildungswebsite per [[vibe-coding|Vibe Coding]] bauen will – ein Exit Ticket, ein Quiz, ein Klassenportfolio –, ohne einen offengelegten API-Schlüssel oder Daten von Lernenden mit auszuliefern.

## Was man damit tun kann

Drei Anweisungsdateien tragen die Anleitung: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` und `securevcc.md`. Laden Sie sie in ein Projektverzeichnis herunter, füllen Sie die Vorlage für das Projektbriefing aus und bitten Sie den Assistenten dann, alle drei zu lesen und anzuwenden; der Leitfaden sagt ausdrücklich, dass Anwesenheit keine Aktivierung ist, die Dateien müssen in der Anfrage also benannt werden. Lesbare Leitfäden erklären jede einzelne, darunter eine Anleitung „Drei wesentliche Prüfungen vor dem Teilen": weniger Daten von Lernenden erheben, einen offengelegten API-Schlüssel prüfen und das Design eines Werkzeugs an seine Lernaufgabe anpassen. Das vollständige Bundle ergänzt die Website selbst, ein Prompt-Paket, eine Startprüfung und Rebuild-Skripte, mit einem SHA-256-Manifest für den Download.

Die begleitende Seite mit [EduSynth-Hub-Beispielen](https://mguhlin.github.io/funquiz/examples.html) zeigt die Ergebnisse als funktionierende statische Werkzeuge statt als Screenshots: einen Exit-Ticket-Generator, der eine Frage auf einer gewählten Stufe der SOLO-Taxonomie schreibt, ein Studierendenportfolio, das eine einzige HTML-Datei auf GitHub Pages ist, und eine durchsuchbare Ressourcenbibliothek für die berufliche Weiterbildung, die alle clientseitig ohne LMS-Login laufen.

## Für wen es gedacht ist

Lehrkräfte und [[learning-design|Instructional Designer]] in K-12 und Hochschule, die beschreiben können, welches Werkzeug sie wollen, und bereit sind zu prüfen, was der Assistent erzeugt hat. Es eignet sich auch für einen Fachbereich, der eine gemeinsame Checkliste will, bevor jemand ein schülerseitiges Werkzeug veröffentlicht, und für Lehrende, die [[ai-literacy|KI-Kompetenz]] durch Bauen statt durch Kritik vermitteln.

## Anmerkungen und Vorbehalte

Das Zentrum ist eine Anleitung, kein Compliance-Produkt: Die Seite erhebt keinen Konformitätsanspruch für ihr eigenes Ziel WCAG 2.2 AA, beantwortet die Frage „Macht die Nutzung dieser Dateien meine Website konform?" mit Nein und sagt, dass eine technische Prüfung die schulische Genehmigung oder eine rechtliche Prüfung nicht ersetzt. Das Sicherheitsregal verweist auf axe-core, Gitleaks, ZAP und Playwright; das sind Referenzen statt gebündelter Software, und die invasiven sind für ein Wegwerf- oder ausdrücklich autorisiertes Ziel gedacht. Das Lesen braucht kein Konto. Der Neuaufbau der HTML-Seiten braucht Python und `markdown-it-py`, eine Build-Abhängigkeit und keine Besucherabhängigkeit. Das Repository steht unter MIT-Lizenz, während Kunstwerke Dritter und die verlinkten Projekte ihre eigenen Bedingungen behalten, dokumentiert in `CREDITS.md`.
