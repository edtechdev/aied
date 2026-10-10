---
title: Missverständnisse über KI
created: "2026-08-12T19:08:47-04:00"
updated: "2026-10-10T09:04:22-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading, teacher-role]
pedagogy: [metacognition]
technology: [generative-ai]
ethics: [trust-calibration]
audience: [learners, instructors]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education]
translation_of: concepts/misconceptions
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Missverständnisse über KI** — die ungenauen Überzeugungen, die Menschen darüber halten, was KI-Systeme sind, was sie tun, und was ihre Nutzung für Lernen und Arbeit bedeutet. Missverständnisse sind nicht eine einzige Falschheit, sondern eine Familie von Kalibrierungsfehlern, die sich um zwei Kernfehler bündeln: zu verkennen, was das Modell ist (Autorität vs. Werkzeug, neutral vs. biased, verstehen vs. generieren) und zu verkennen, was Lernen erfordert (Output vs. Prozess). Sie werden nicht nur von Studierenden gehalten, sondern auch von Lehrenden, der Administration, politischen Entscheidungsträgerinnen und -trägern und der breiteren Öffentlichkeit —, und ihre Korrektur ist ein Kernziel von [[ai-literacy|KI-Kompetenz]]- und [[trust-calibration|Vertrauenskalibrierungs]]bildung.

## Fragen zum Nachdenken

- Viele Menschen glauben, die Antwort eines KI-Chatbots sei ein verifiziertes Faktum, weil sie selbstsicher und flüssig klingt. Die Seite nennt das die „Autoritäts-Fehlannahme“. Wenn Sie eine KI-generierte Erklärung lesen, wie entscheiden Sie, ob Sie sie akzeptieren —, und wie oft verifizieren Sie sie tatsächlich?
- Das Missverständnis „Lernen gleich Output“ ist die Überzeugung, dass Arbeit mit KI zu produzieren dasselbe sei, wie sie gelernt zu haben. Haben Sie sich schon einmal gefühlt, als hätten Sie etwas „gelernt“, indem Sie ein Werkzeug das Entwerfen machen ließen? Was fehlte danach tatsächlich?
- Menschen nehmen oft an, KI sei objektiv und unbefangen. Die Seite nennt das die „Neutralitätsillusion“ — Modelle enkodieren Biases aus Trainingsdaten, was in Schreibkontexten Ideen über eine ganze Kohorte hinweg homogenisieren kann. Wo könnte sich Bias in einem Werkzeug verstecken, das sich neutral anfühlt?
- Missverständnisse über akademische Integrität bündeln sich an zwei Extremen: manche Studierende behandeln KI-Output als „keine Person kopieren“ und daher zulässig, während andere denken, jede Nutzung sei Schummeln. Wo sollte die Grenze Ihrer Meinung nach fallen, und wer sollte sie entscheiden?
- Eine verbreitete Überzeugung ist, dass eine Anfrage genügt und KI-Output deterministisch ist — dieselbe Frage ergebe immer dieselbe Antwort. Die Seite beschreibt das als Determinismusfehler. Wie könnte dieses Missverständnis jemanden dazu bringen, einem einzelnen Output übermäßig zu vertrauen?
- Missverständnisse werden beschrieben als stabil, plausibel und korrektionsresistent — ähnlich wie Missverständnisse in jedem Fach. Wenn einfach die Wahrheit zu sagen selten Meinungen ändert, wie sollte KI-Kompetenz tatsächlich gelehrt werden?

## Einführung

Missverständnisse über KI zählen, weil sie der kognitive Vorläufer der schädlichen Verhaltensweisen sind, die die Wissensbasis unter [[cognitive-offloading|Überabhängigkeit]] und [[academic-integrity|akademischer Integrität]] dokumentiert. Menschen machen sich selten daran, KI [[ai-misuse-learning-harm|zu missbrauchen]]; sie tun es, weil ungenaue mentale Modelle sie dazu bringen, Vertrauen falsch zu platzieren, Verifikation zu überspringen und Output als Verstehen zu behandeln. In der Bildung prägen diese Fehler alles davon, wie Studierende lernen, bis dazu, wie Lehrende und Institutionen Curricula, [[assessment|Assessment]] und Politik gestalten.

### Was KI-Missverständnisse sind

Ein Missverständnis ist hier nicht bloße Unkenntnis darüber, wie ein Modell funktioniert — es ist eine aktiv gehaltene, oft sich selbst verstärkende Überzeugung, die systematische Fehler darin erzeugt, wie Studierende mit KI interagieren. Sie sind direkt analog zu den Fachmissverständnissen, die in den [[learning-sciences|Lernwissenschaften]] studiert werden: stabil, plausibel und korrektionsresistent, bis sie konfrontiert werden. Ihre Korrektur ist ein Kernziel von [[ai-literacy|KI-Kompetenz]]- und [[trust-calibration|Vertrauenskalibrierungs]]bildung.

### Verbreitete Missverständnisse in akademischen Kontexten

- **Die Autoritäts-Fehlannahme** — [[llm]]-Output als verifiziertes Faktum behandeln statt als probabilistische Vervollständigung. Treibt unkritische Akzeptanz und das antwortensuchende-über-verstehende Muster, das in der [[intelligent-tutoring|KI-Tutoring]]-Forschung dokumentiert ist, wo Lernende die Antwort eines Modells akzeptieren, ohne sie gegen [[hallucination-risk|Halluzinationsrisiko]] zu prüfen.
- **Die unabhängige-Prüfungs-Illusion** — KI-Feedback als äußere Korrektur behandeln, wenn das Modell das eigene Schlussfolgern spiegelt. Die Baseline-Genauigkeit der Nutzenden war der dominante Prädiktor der Endleistung, und sykophantiespezifisches Prompting schnitt positionale Mimikry (OR = 0,26), ließ Fehlerpropagation aber unberührt, sodass Lernendentraining nicht die Absicherung ist ([[contextual-sycophancy-ai-literacy|Koyuturk et al. (2026)]]).
- **Lernen gleich Output** — glauben, dass Arbeit *mit* KI zu produzieren dasselbe sei, wie sie gelernt zu haben. Das ist genau der Fehler hinter [[cognitive-offloading|Überabhängigkeit]]: die Entwurfs-, Abruf- und Überarbeitungsprozesse, die dauerhaftes Wissen aufbauen, werden ausgelagert.
- **Die Neutralitätsillusion** — annehmen, KI sei objektiv und unbefangen. Studierende übersehen oft, dass Modelle Trainingsdatenbias enkodieren, und dass dies in [[writing-education|Schreib]]kontexten Ideenhomogenisierung über eine Kohorte produziert.
- **Die Integritäts-Grauzone** — verkennen, ob [[academic-integrity|KI-Nutzung akzeptabel ist]]. Manche Studierende sehen KI-Output als „keine Person kopieren“ und daher zulässig; andere überkorrigieren und denken, *jede* Nutzung sei Schummeln. [[governance|Institutionelle]] Inkonsistenz nährt beide Fehler.
- **Anthropomorphisierung** — glauben, das Modell habe Absicht, Gedächtnis und Verständnis für *ihren* Kontext. Dieses Übertrauen ist akademisch besonders riskant, weil Studierende sich auf plausibel klingende Erklärungen verlassen können, die das Modell tatsächlich nicht gründen kann.
- **Der Determinismusfehler** — erwarten, dass eine Anfrage genügt, und nicht erkennen, dass Output nicht-deterministisch und promptsensibel ist. Das zu unterschätzen produziert die „[[prompt-engineering|Prompting]]lücke“, wo Studierende flache Ergebnisse für die Decke des Werkzeugs halten.
- **Die [[ai-detection|Detektions]]-Fehlkalibrierung** — sowohl die institutionelle Detektion als auch, wichtiger, den Selbstschaden unterschätzen, Arbeit einzureichen, die sie später nicht erklären oder verteidigen können.
- **Die Effizienzillusion** — eingesparte Zeit als reinen Gewinn behandeln, verpassend, dass nicht geübte grundlegende Fähigkeiten verfallen und dass Novizen guten noch nicht von schlechtem Output unterscheiden können.
- **Die Freundlichkeit-Sicherheit-Illusion (Kinder)** — glauben, eine freundlich wirkende KI sei inhärent sicher und weniger spionierend. [[children-ai-safety-misconceptions-2026|Leisten et al. (2026)]] befragten 71 Kinder im Alter von 10–16 (*M*age = 12.90) und führten sechs Fokusgruppen (n = 36) um den [[open-source|Open-Source]]-sozialen Roboter Blossom durch und fanden, dass grundlegendes KI-Wissen verlässlich mit dem Alter stieg (*M* = 4.41 von 6; β = 0.17), während Sicherheitseinstellungen ambivalent blieben (Wichtigkeit *M* = 2.51, aktuelle Sicherheit *M* = 2.77 auf einer 1–4-Skala), festgehalten in der Überzeugung eines 12–13-Jährigen, dass „vielleicht, wenn sie gute Freunde sind, spioniert er nicht so viel“ —, neben der Überzeugung, dass KI-Wissen auf Knopfdruck gelöscht werden kann, dass Hacking zur Entführung führt, und dass „das WLAN ins Gehirn strahlt“.

### Institutionelle und öffentliche KI-Mythen

Missverständnisse sind nicht auf Studierende beschränkt — sie sättigen den institutionellen und öffentlichen Diskurs über KI, den Studierende erben. [[rudolph-ai-myths-critical-higher-ed|Rudolph et al. (2025)]] demontieren acht verwurzelte „Mythen“, die Hochschulpolitik und -lehre prägen: dass KI echt „künstlich“ sei (statt aus ausgebeuteter menschlicher Arbeit gebaut), dass sie wirklich „intelligent“ und [[agentic-ai|agentisch]] sei, dass sie unproblematisch „die Welt zu einem besseren Ort machen“ werde, dass sie „objektiv und unbefangen“ sei, dass die USA ein Alleinsupermachtmonopol halten, dass sie den Arbeitsmarkt nicht stören werde, dass sie die [[higher-ed|Hochschulbildung]] „revolutioniere“, und dass Lehrende KI-erzeugte Arbeit verlässlich erkennen können. Diese institutionellen Mythen sind die vorgelagerte Quelle vieler oben dokumentierter Studierendenmissverständnisse — am direktesten die [[trust|Neutralitätsillusion]] („KI ist objektiv“) und die [[trust-calibration|Autoritäts-Fehlannahme]] („KI ist intelligent“), und die Detektionsfehlkalibrierung, die Studierende dazu bringt anzunehmen, unentdeckbare, unverifizierbare Nutzung sei sicher. Wo Studierende institutionell wiederholte Mythen absorbieren und danach handeln, erfordert ihre Korrektur, nicht nur die Überzeugung der oder des Lernenden zu konfrontieren, sondern auch den Diskurs, der sie nährt.

### Warum Missverständnisse für Lernen zählen

Missverständnisse übersetzen sich direkt in die Verhaltensweisen, die Lernschaden verursachen. Die Überzeugung, dass „KI immer recht hat“, unterdrückt Verifikation; die Überzeugung, dass „KI zu nutzen Lernen ist“, unterdrückt aufwändige Verarbeitung; die Überzeugung, dass „es nicht Schummeln ist“, umgeht die metakognitive Review, die Verstehen konsolidiert. In diesem Sinne sind Missverständnisse [[ai-misuse-learning-harm|KI-Missbrauch und Lernschaden]] vorgelagert, die über die Evidenzbasis der Wissensbasis hinweg dokumentiert sind.

### Missverständnisse jenseits von Studierenden: Lehrende, Institutionen und die Öffentlichkeit

KI-Missverständnisse sind nicht auf Lernende beschränkt — sie sind durchdringend unter den Erwachsenen, die Bildung prägen:

- **Lehrende und Fakultäten** können die Fähigkeit von KI überschätzen, verlässlich zu benoten oder Missbrauch zu erkennen, oder ihren Bias unterschätzen, was zu entweder unkritischer Übernahme oder reflexivem Verbot führt. Diese Annahme von Verlässlichkeit ist teils testbar und teils falsch: [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] red-teamte einen alltäglichen [[automated-assessment|KI-Benotungs]]arbeitsablauf und fand, dass Instruktionen, die in einer eingereichten Datei versteckt waren, die Note eines durchfallenden Aufsatzes ohne sichtbare Warnung hoben, in 9 von 9 Iterationen für eine Strategie und 17 von 18 für eine andere. Wenn Lehrende die [[trust|Autoritäts-Fehlannahme]] über KI-Outputs halten, modellieren sie dieselbe unkritische Haltung, die sie bei Studierenden korrigieren sollten. [[teacher-role|Lehrende]] mit akkuraten mentalen Modellen von KI vorzubereiten ist eine Voraussetzung für [[teacher-ai-competency|verantwortungsvolle KI-Integration]] und [[pedagogical-safety|sichere Pädagogik]].
- **Die Administration und politische Entscheidungsträgerinnen und -träger** erben und propagieren institutionelle Mythen —, dass KI „objektiv“ sei, dass sie Bildung „revolutionieren“ werde, oder dass Detektionswerkzeuge vertrauenswürdig seien —, die dann [[educational-policy-ai|Politik]], Beschaffung und Assessmentregeln prägen. Das [[trust-calibration|Vertrauen]], das Studierende entwickeln, ist teils ein Produkt der institutionellen Rahmung, die sie erben.
- **Die breite Öffentlichkeit** absorbiert Medien- und Anbietererzählungen über Fähigkeiten und Risiken von KI. Weil Studierende innerhalb dieses Diskurses lernen, werden öffentliche Mythen zum Substrat, aus dem Studierendenmissverständnisse wachsen. KI-Missverständnisse zu korrigieren ist daher eine [[ai-literacy|KI-Kompetenz]]aufgabe, die auf das gesamte Bildungsökosystem zielt, nicht nur auf Lernende.

Diese Breite ist, warum die Wissensbasis Missverständnisse als querschneidendes fundamentales Thema behandelt statt als ein rein studierendenseitiges: dieselben Kalibrierungsfehler kehren über Lernende, Lehrende, Institutionen und die Öffentlichkeit hinweg wieder, und ihre Korrektur erfordert, sowohl individuelle Überzeugungen als auch den Diskurs zu konfrontieren, der sie nährt.

### Missverständnisse korrigieren

Korrektur ist keine einmalige Offenlegung, sondern ein laufender [[ai-literacy|KI-Kompetenz]]prozess, der [[metacognition|Metakognition]] und [[self-regulated-learning|selbstreguliertes Lernen]] entwickelt: Studierenden (und den Erwachsenen um sie herum) helfen, ihre Verlassung zu überwachen, zu kalibrieren, wann sie einem Modell vertrauen und wann sie es hinterfragen, und die Kosten des Umgehens der eigenen [[cognitive-offloading|kognitiven Arbeit]] zu sehen. Weil Missverständnisse resistent sind, werden sie am besten durch direkte Konfrontation mit Evidenz adressiert —, einschließlich des Befunds, dass Studierende den Lernschaden von KI-Missbrauch oft *nicht wahrnehmen*.

**Refutationstext ist eine zentrale Korrekturtechnik.** Weil Missverständnisse aktiv gehalten und resistent sind, ist die direkteste evidenzbasierte Strategie der [[refutation-text|Refutationstext]] — ein Instruktionstext, der das Missverständnis nennt, es explizit widerlegt und die korrekte Konzeption präsentiert. Das ist dieselbe Technikfamilie, die genutzt wird, um die Fachmissverständnisse zu korrigieren, die in der Lernwissenschaft studiert werden, hier angewandt auf die Überzeugungen der Studierenden über KI selbst. Die [[refutation-text|Refutationstext]]-Konzeptseite der Wissensbasis synthetisiert, wie das sich in [[ai-education|KI in der Bildung]] in drei komplementären Weisen abspielt:

- **KI als Korrektorin.** [[conversational-ai|Konversationelle KI]]-Tutoren können *personalisierte* Refutation liefern, die Refutation an das spezifische Missverständnis einer lernenden Person on the fly anpassen. [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen (2026)]] fanden, dass personalisierter KI-Dialog größere und schnellere Überzeugungsreduktionen produzierte als statische lehrbuchartige Refutation, mit höherem [[student-engagement|Engagement]] und Vertrauen —, obwohl der Vorteil ohne Verstärkung nach zwei Monaten verblasste.
- **KI als Generatorin von Refutationsinhalten.** [[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan (2025)]] fand, dass KI-generierter Konzeptwandel-/Refutationstext expertenverfasste Qualität erreichte (und beide übertrafen in jenem Wissenschaftskontext einen geführten interaktiven Dialog), was zeigt, dass KI effektive Korrekturmaterialien in großem Maßstab produzieren kann.
- **KI-generierte Missverständnisse als Lernressource.** Statt KI-generierte Missverständnisse als bloß schädlich zu behandeln, schlagen [[llms-misconception-collaborative-learning-healthcare-2026|Cheah et al. (2026)]] vor, Missverständnisse zu generieren und sie durch strukturierte Peerdiskussion zu adressieren — eine [[collaborative-learning|kollaborative]] Form der Refutation, die Konzeptwandel und [[critical-thinking|kritisches Denken]] fördert.

Für Missverständnisse über KI bedeutet das, dass Korrektur **direkte Konfrontation** (Refutationsmaterialien, die spezifische Mythen benennen und widerlegen) mit **gerüsteter Praxis** kombinieren sollte — [[ai-literacy|KI-Kompetenz]]-Instruktion und [[metacognition|Metakognition]] nutzen, um Menschen sowohl den falschen Glauben als auch das korrekte Modell sehen zu helfen. Die Evidenz mahnt, dass das *Format* zählt: personalisierte, interaktive Korrektur ist engagierender und zunächst effektiver, braucht aber Verstärkung, um zu persistieren; und das gemessene Ergebnis (Wissen vs. Einstellungen vs. Fähigkeiten) prägt, wie groß ein Korrektureffekt erscheint. Weil Missverständnisse Lernende und die Erwachsenen umfassen, die Lernen prägen, muss effektive Korrektur [[teacher-role|Lehrende]], [[administrator|Administratorinnen und Administratoren]] und [[educational-policy-ai|politische Entscheidungsträger]] ebenso erreichen wie Studierende.

Bernstein und Sibia (2026) zeigen, dass [[generative-ai|GenAI]]-generierte Analogien strukturelle Missverständnisse einführen, die nur Quellfachwissen abfangen kann ([[student-reception-genai-analogies-computing-2026]]): eine Zirkel-Route-Analogie für eine verknüpfte Liste impliziert eine Schleife zurück zum Anfang, und eine Badminton-Spielwechsel-Analogie für Rekursion trägt keinen garantiert schrumpfenden Input. Studierende, die das Quellfach kannten, identifizierten diese Fehler und schlugen Reparaturen vor, während Teilnehmende bemerkten, dass eine fehlerhafte Analogie dennoch einprägsam sein kann — was anzeigt, dass eine vertraute Analogiequelle Lernenden helfen kann, ein KI-produziertes Missverständnis eher zu erkennen als zu absorbieren, und dass das Rahmen von Fehlern als bewusste Artefakte für Kritik das Risiko in eine Assessmentgelegenheit verwandelt.

**Modellgenerierte Missverständnisse sind eine messbare Fähigkeit, kein Zufall.** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] bauten SocraticTrap-CS, das sieben offengewichtige Modelle promptete, eine „[[socratic-method|sokratische]] Falle“ für 35 Kern-CS-Konzepte zu schreiben — eine Erklärung, die flüssig und autoritativ ist, während sie auf einem subtilen, fachspezifischen Fehler ruht. Von 241 geprompteten Segmenten wurden 221 (91,7%) per Expertenmehrheitsvotum als strategische Missverständnisse bestätigt (Fleiss' κ = 0.9487), ohne signifikante Unterschiede zwischen CS-Domänen; 66,5% der bestätigten Fehler waren konzeptionell statt faktisch und keine rein logisch. Flüssigkeit ist der Mechanismus statt eine Verteidigung: Überzeugungskraft mittelte 3,71 auf einer Fünf-Punkte-Skala und war stark modellabhängig, und Häufigkeit und Schwere dissoziierten, wobei die zwei Modelle, die am häufigsten Fallen produzierten, auch als am überzeugendsten bewertet wurden. Weil eine schlecht gestellte Frage einer oder eines Studierenden selbst als adversarieller Prompt wirken kann, behandeln die Autoren die Rate als Fähigkeit unter adversariellem Prompting statt als Basisrate für gewöhnliche Studiensitzungen — und argumentieren, dass sich die [[ai-literacy|KI-Kompetenz]]aufgabe vom Faktencheck individueller Aussagen hin zu konzeptioneller Verifikation und mentaler Modellvalidierung verschiebt. Das ist das dunklere Gesicht der generativen Nutzung oben: dieselbe Fähigkeit, die produktive Peerdiskussion säen kann, kann auch einen Fehler verankern, den eine lernende Person bereits formte.

### Refutationsstil-Korrekturen für verbreitete KI-Missverständnisse

Weil Missverständnisse aktiv gehalten und resistent sind, ist die direkteste Weise, sie zu adressieren —, einschließlich auf dieser Seite —, die [[refutation-text|Refutationstext]]struktur: **das Missverständnis benennen, es explizit widerlegen und die korrekte Konzeption nennen.** Die Einträge unten wenden diese Struktur auf die folgenreichsten Missverständnisse über KI und über Lernen, Lehren und Bildung an:

**„KI hat immer recht.“** *Das ist ein Missverständnis.* KI-Output ist eine probabilistische Vervollständigung, kein verifiziertes Faktum. *Die Korrektur:* LLMs generieren plausibel klingenden Text auf Basis statistischer Muster; sie können [[hallucination-risk|halluzinieren]], biased sein und selbstsicher falsch. Output als Entwurf behandeln, der gegen Quellen zu prüfen ist, statt als Autorität, die zu akzeptieren ist. Das ist der Kern von [[trust-calibration|Vertrauenskalibrierung]] und warum „immer verifizieren“ „immer vertrauen“ schlägt.

**„KI zu nutzen ist Lernen.“** *Das ist ein Missverständnis.* Arbeit *mit* KI zu produzieren ist nicht dasselbe, wie das Wissen oder die Fähigkeit zu erwerben, die die Arbeit demonstrieren soll. *Die Korrektur:* dauerhaftes Lernen passiert durch die aufwändigen Prozesse des Entwerfens, Abrufens, Überarbeitens und metakognitiven Reviewens — genau die Prozesse, die [[cognitive-offloading|Auslagerung]] zu KI kurzschließt. KI als Werkzeug neben jener Anstrengung nutzen, nicht als Ersatz für sie.

**„KI ist neutral und objektiv.“** *Das ist ein Missverständnis.* Modelle erben die Biases, Lücken und Perspektiven ihrer Trainingsdaten. *Die Korrektur:* KI kann [[bias-mitigation|Bias]] reproduzieren und verstärken; ihre Outputs mit derselben quellenkritischen Prüfung behandeln, die Sie auf jeden anderen Text anwenden würden. Bewusstsein davon ist Teil von [[ai-literacy|KI-Kompetenz]] und hilft, den [[equity-in-ai-education|Gerechtigkeits]]schäden unkritischer Übernahme entgegenzuwirken.

**„KI wird Lehrende ersetzen.“** *Das ist ein Missverständnis.* KI erweitert, verdrängt aber nicht die [[pedagogy|pädagogische]] Arbeit von [[teacher-role|Lehrenden]] — Urteil, Kontextualisierung und die relationalen und [[ethics|ethischen]] Dimensionen des Lehrens. *Die Korrektur:* KI erhöht die Notwendigkeit pädagogischer Vermittlung und kritischen Urteils; Lehrende, die KI verstehen, werden effektiver, nicht obsolet. Diese Neurahmung zählt, weil sie prägt, ob Institutionen in [[teacher-ai-competency|KI-Kompetenz von Lehrkräften]] investieren oder reflexiv widerstehen oder überübernehmen.

**„KI versteht wie eine Person.“** *Das ist ein Missverständnis.* Modelle haben keine Absicht, kein Gedächtnis an Sie und kein echtes Verständnis Ihres Kontexts. *Die Korrektur:* KI zu anthropomorphisieren führt zu Übertrauen und Verlassung auf Erklärungen, die das Modell tatsächlich nicht gründen kann. Die Grenze klar halten: KI ist ein mächtiges Werkzeug, kein Geist.

**„KI wird Bildung automatisch transformieren.“** *Das ist ein Missverständnis.* Technologie allein verändert Lernen nicht; es ist die Pädagogik darum herum, die es tut. *Die Korrektur:* die Vorteile von KI hängen von intentionalem [[learning-design|Instruktionsdesign]], Lehrkräftevorbereitung und institutioneller Unterstützung ab —, nicht davon, einfach das Werkzeug einzusetzen. Das ist, warum [[ai-ed-evaluation|Evidenz]] und [[research-methods-aied|rigorose Evaluation]] zählen, und warum die Wissensbasis verantwortungsvolle KI-Nutzung als [[governance|Governance]]- und [[educational-policy-ai|politik]]frage rahmt statt als rein technische.

**„Ein Prompt sollte mir die Antwort geben.“** *Das ist ein Missverständnis.* Output ist nicht-deterministisch und promptsensibel. *Die Korrektur:* erwarten Sie zu iterieren, zu verfeinern und querzuprüfen; die „Promptinglücke“ — flache erste Ergebnisse für die Decke des Werkzeugs zu halten — ist ein Fähigkeitsproblem, kein Werkzeuglimit. Das zu entwickeln ist Teil von [[prompt-engineering|Prompt-Engineering]].

**„Es ist kein Schummeln, wenn keine Person es geschrieben hat.“** *Das ist ein Missverständnis.* Akademische Integrität betrifft die ehrliche, zuschreibbare Produktion von Arbeit, nicht nur, keine Person zu kopieren. *Die Korrektur:* eine nicht offengelegte KI-generierte Einreichung kann [[academic-integrity|akademische Integrität]] verletzen, selbst wenn keine Person kopiert wurde; die Frage ist, ob die Arbeit echt die der lernenden Person ist. Im Zweifel offenlegen und die Politik Ihrer Institution prüfen.

Diese Refutationen sind bewusst in der [[refutation-text|Refutationstext]]form geschrieben, damit sie selbst genutzt (oder in interaktiven [[conversational-ai|KI-Dialog]] adaptiert) werden können, um Missverständnisse über KI zu konfrontieren und zu korrigieren —, und über Lernen, Lehren und Bildung breiter.

## Verbundene Konzepte

- [[pedagogical-patterns]] — The conceptual-change sequences that confront a specific held belief
- [[learners]] — Learners: the umbrella for the learner-side concepts
- [[ai-literacy]]
- [[trust-calibration]]
- [[cognitive-offloading]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[generative-ai]]
- [[student-experience]]
- [[framing-ai-use-for-students]]
- [[refutation-text]]
- [[teacher-role]]
- [[educational-policy-ai]]
- [[trust]]

## Verbundene Artikel
- [[rudolph-ai-myths-critical-higher-ed]] — Don't believe the hype: eight AI myths and the need for a critical approach in higher education
- [[student-rationalization-ai-writing]] — Student Rationalization of AI Writing
- [[genai-skill-bypass-literacy]] — GenAI Skill Bypass and Literacy
- [[trust-reliance-ai-education-2026]] — Trust and Reliance in AI Education
- [[contextual-sycophancy-ai-literacy]] — Contextual Sycophancy and AI Literacy
- [[sycophantic-ai-social-interaction-2026]] — Sycophantic AI in Social Interaction
- [[llm-fallacy-misattribution]] — LLM Fallacy Misattribution (Kim et al.)
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: fluent, authoritative explanations that are wrong conceptually rather than factually (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Hidden instructions in a submitted file can raise an AI-graded mark with no visible warning (Humble 2026)
- [[children-ai-safety-misconceptions-2026]] — Children's AI-safety misconceptions: friendship with a robot misread as a privacy guarantee (Leisten et al. 2026)
