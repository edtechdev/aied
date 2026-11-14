---
title: "Welche Optionen und Probleme sind bei der Einführung von KI-Werkzeugen zu bedenken?"
created: "2026-11-12T11:10:00-05:00"
updated: "2026-11-14T04:15:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-14T04:15:00-05:00"
translation_note: "Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

Eine Fachbereichsleiterin hat drei Angebote für eine Plattform für [[intelligent-tutoring|KI-Tutoring]] und eine Frist am Freitag. Eine [[teacher-role|Lehrkraft]] möchte ein kostenloses Werkzeug nutzen, das die Hälfte des Kollegiums bereits verwendet. Ein IT-Leiter wird gefragt, ob die Einrichtung ein eigenes Modell betreiben sollte, und kann nicht sagen, was das kosten würde.

Das sind dieselben Fragen auf drei Ebenen. Die Optionen sind weniger, als eine Anbieterliste nahelegt, und die Probleme halten länger als jedes Produkt.

Die Wahl sollte zur Entscheidung passen, die vor Ihnen liegt. Eine Einzelperson entscheidet, was sie in ein Werkzeug eingibt. Eine Einrichtung entscheidet, wer welches Modell nutzen darf, mit welchen Daten, zu welchem Preis und wer antwortet, wenn etwas schiefgeht. Die meisten schlechten Einführungsentscheidungen entstehen daraus, dass die institutionelle Frage mit einem individuellen Werkzeug beantwortet wird.

## Die Kurzfassung

Fünf Regeln decken das meiste ab.

1. Klären Sie zuerst die Datengrenze, denn alles andere lässt sich nachverhandeln, sie nicht.
2. Wählen Sie die kleinste passende Form: kostenlose oder ausgelagerte Werkzeuge für einen Piloten, eine gehostete Plattform, wenn Sie Datenkontrolle ohne GPUs brauchen, ein Gateway, wenn Sie Quoten und Routing brauchen, und eigene Inferenz erst, wenn die anderen drei scheitern.
3. Vergleichen Sie Preise pro Sitzplatz und nutzungsabhängige Preise mit Ihren eigenen Zahlen, denn der meiste Verbrauch kommt meist von wenigen intensiven Nutzern.
4. Machen Sie den genehmigten Weg schneller als den nicht genehmigten, denn EDUCAUSE fand heraus, dass 94 % des Personals und der Lehrenden KI für ihre Arbeit nutzten, 54 % die Richtlinie kannten und 56 % Werkzeuge nutzten, die die Einrichtung nicht bereitstellt.
5. Legen Sie dann im Voraus fest, welche Evidenz Sie zum Aufhören bringen würde, denn eine Einführung ohne Ausstiegstest wird per Vorgabe dauerhaft.

## Auf individueller Ebene

Eine Lehrkraft oder ein Studierender trifft eine Datenentscheidung vor einer Lehr- oder Lernentscheidung. Namen von Studierenden, IEP-Angaben, Disziplinarnotizen und unveröffentlichte Forschung begründen die Haftung, also redigieren Sie zuerst und prüfen Sie, ob das Werkzeug die Aufgabe noch erfüllt. Lesen Sie dann die Bedingungen: Aufbewahrung, Training mit Ihren Eingaben und Subunternehmer stehen meist in einem Dokument, das niemand öffnet, und wenn die Antwort nicht in fünf Minuten zu finden ist, behandeln Sie sie als unbekannt.

Wissen Sie, was das Werkzeug gut kann. Generierter Text ist am stärksten beim Entwerfen, Umstrukturieren und Zusammenfassen und am schwächsten bei Arithmetik, Zitaten und allem, was aktuelle Fakten braucht. Wissen Sie auch, was es Sie kostet. Eine kostenlose Stufe ist kostenlos, weil die Nutzung das Produkt ist oder weil die Stufe sich ändern wird, und beides ist ein Grund, einen Ausstieg im Blick zu behalten.

Zwei Fragen bleiben. Wer sonst ist betroffen, denn ein Werkzeug, das einen Kurs umgestaltet, ist eine Entscheidung für die Studierenden darin. Und ob es erlaubt ist: Lesen Sie die Richtlinie einmal, wenn es eine gibt, und wenn es keine gibt, legen die Befunde zu [[shadow-ai]] nahe, dass Sie bereits per Vorgabe Politik machen.

Die grobe Heuristik: Nutzen Sie das genehmigte Werkzeug, wenn es erreichbar ist, und wenn nicht, schreiben Sie auf, was Sie getan haben und warum. Dieser Nachweis schützt Sie, wenn das Urteil später infrage gestellt wird.

## Auf institutioneller Ebene

Eine Einrichtung kauft mit einem Einkauf eine Dienstleistung, einen Datenfluss, eine Supportpflicht und eine politische Bindung. Sechs Formen bilden das tatsächliche Menü, und die meisten Einrichtungen befinden sich in zwei oder drei davon, ohne es zu wissen.

Der einfachste Einstieg ist ein kostenloses ausgelagertes Werkzeug. AI Tutor Pro von Contact North braucht kein Konto, und mit Playlab können Lehrende Apps bauen, die auf ihrem eigenen [[curriculum-design|Curriculum]] beruhen, während der Anbieter die Modelle hostet. Beide sind für einen Piloten in Ordnung und als dauerhafte Lösung schlecht: keine Prüfspur, keine Quotensteuerung und Bedingungen, die sich ändern können.

Der Kauf von Sitzplätzen bei einem kommerziellen Anbieter, sei es [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot oder Google Gemini for Education, bringt schnelle Beschaffung, SSO und eine Administrationskonsole und lässt Modellwahl und Aufbewahrung beim Anbieter.

Eine selbst gehostete Plattform hält die Daten näher. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) wird in Ihrem eigenen AWS-Konto bereitgestellt, und Vanderbilts Pilot meldete etwa \$3 pro Nutzer und Monat bei 1.300 Nutzern, die Hälfte davon unter \$1 an Tokens. Das kauft Datenkontrolle ohne GPUs.

Ein Gateway über gemischte Anbieter stellt einen einzigen Zugang vor mehrere Dienste. Es trägt Quoten, SSO, Protokollierung und regionales Routing; Fontys betrieb eines für 300 Nutzer unter einer monatlichen Obergrenze von \$500, die nie überschritten wurde, und [MindRouter](/aied/resources/mindrouter/) ergänzt rollengewichtete Planung und Energiemessung.

Eigene Inferenz ist die teuerste und unabhängigste Form. Purdues zwei Dienste erreichten über 1000 Nutzer auf 10+ [[open-source]]-Modellen für rund \$100,000 an Hardware, vor Personalkosten. Sie antwortet einer Aufsichtsbehörde, ohne einen Anbieter um Erlaubnis zu bitten.

Die letzte Form ist KI in Werkzeugen, die Sie bereits betreiben: ein Moodle-Fragentyp, der KI-Partner einer Diskussionsplattform, ein Werkzeug für Aufsatzfeedback. Geringer Aufwand und Veränderung Kurs für Kurs, mit wenig Erkenntnisgewinn in der Zentrale.

## Die Probleme, die nicht verschwinden

[[privacy|Datenschutz]] kommt zuerst. Entscheidend ist, welcher Datensatz nun existiert, der vorher nicht existierte, wo er liegt und wer ihn abrufen kann. Ein Werkzeug, das eine Klassenliste erhält, hat einen institutionellen Datensatz erzeugt, was auch immer der Vertrag sagt.

Identität und Zugriff kommen als Nächstes. Alles, was im großen Maßstab genutzt wird, braucht SSO, rollenbasierten Zugriff und Offboarding, und ein Werkzeug, das einen ausscheidenden Beschäftigten nicht deregistrieren kann, hinterlässt ein dauerhaftes Konto mit Ihren Daten.

Kosten hängen davon ab, wie der Preis gezählt wird. Preis pro Sitzplatz belohnt Kopfzahl, nutzungsabhängiger Preis belohnt Nutzung. Weil ein kleiner Anteil der Nutzer meist die meisten Tokens erzeugt, wirkt der Sitzplatzpreis günstig, bis die intensiven Nutzer woanders hingehen.

Messung ist meist der fehlende Baustein. EDUCAUSE fand 92 % mit einer arbeitsbezogenen KI-Strategie und 13 %, die den Return on Investment messen. Wenn Sie nicht sagen können, was das Werkzeug ersetzt hat, können Sie die Verlängerung nicht verteidigen.

[[equity-in-ai-education|Gerechtigkeit]] und Barrierefreiheit gehören in die Beschaffung statt in eine spätere Reparatur. Ein Werkzeug, das eine schnelle Verbindung, eine bezahlte Stufe oder Englischkenntnisse verlangt, verteilt seinen Nutzen ungleich.

[[academic-integrity|Akademische Integrität]] verändert, was Prüfung misst. Wenn ein Werkzeug die Aufgabe erledigen kann, ist die Aufgabe das, was überarbeitet werden muss.

Personal und Anbieterabhängigkeit zählen so viel wie der Preis. Jede der obigen Formen außer der kostenlosen braucht eine verantwortliche Person, und der übliche Fehler ist, die vierte oder fünfte Form zu kaufen und sie mit der Person zu besetzen, die ohnehin schon ausgelastet war. Fragen Sie, was bei Verlängerung, bei einer Preisänderung und bei einer Modellabkündigung passiert; die Gateway-Formen existieren, damit die Antwort eine Routingänderung statt einer Migration ist.

## Wie ein gutes erstes Jahr aussieht

Wählen Sie zwei oder drei Messgrößen, bevor irgendetwas startet: wer es genutzt hat, wofür, was es pro aktivem Nutzer gekostet hat und was sich in der Arbeit verändert hat. Ein Pilot, der diese Zahlen nicht liefern kann, ist eine Demo mit Budget.

Prüfen Sie gleichzeitig die Randbedingungen. Wenn das Werkzeug Studierendendaten berührt hat, entsprach der Datenfluss dem, was Sie der Datenschutzstelle gesagt haben? Wenn die Nutzung nicht gemessen wurde, lag das daran, dass das Werkzeug nicht berichten konnte, oder daran, dass niemand gefragt hat?

Halten Sie den genehmigten Weg kurz. Die EDUCAUSE-Zahlen legen nahe, dass Menschen Governance umgehen, weil der genehmigte Weg länger dauert als die Aufgabe. Ein Gateway mit Modellkarte und Zugang am selben Tag ist ebenso ein Governance-Instrument wie eine IT-Bequemlichkeit.

## Häufige Fehler

Eine Plattform kaufen, bevor das Problem benannt ist, erzeugt Nutzungsstatistiken und wenig mehr. Kostenlos als Strategie zu behandeln funktioniert für einen Piloten und scheitert als Infrastruktur. Ein lokales Modell ändert, wer eine Vorladung erhalten kann; es entscheidet nicht, ob Prompts aufbewahrt werden. Zufriedenheit statt Wirkung zu messen macht aus „Lehrende mochten es" einen Befund, der es nicht ist. Und eine veröffentlichte Richtlinie ohne gangbaren Weg beschreibt Präferenzen statt Regeln.
