---
title: Unterschiedliche Effekte zwischen Gruppen von Lernenden
created: "2026-09-19T06:20:00-04:00"
updated: "2026-10-10T09:04:25-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-01T10:47:53-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Unterschiedliche Effekte zwischen Gruppen von Lernenden** — was die [[ai-education|KI-in-der-Bildung]]-Forschung darüber findet, wie sich die *Nutzung* von KI und ihre *Effekte* zwischen Arten von Lernenden unterscheiden: [[special-education|Studierende mit Behinderungen]] und [[neurodiversity|neurodivergente Studierende]], Lernende einer Zweitsprache und [[multilingual-learning|mehrsprachige Lernende]], Mädchen und Jungen, minoritisierte Studierende, Studierende aus einkommensschwächeren Verhältnissen, ländliche Studierende, Studierende der ersten Generation, internationale Studierende und [[adult-learning|erwachsene Lernende]]. Das mitzunehmende Muster ist in zwei Richtungen zugleich ungleich: einige Stränge haben echte Belege (Behinderung, Sprache), während andere nahezu leer sind (erste Generation, international, geflüchtet), und selbst die starken Stränge begründen selten, dass sich eine *Gruppe* unterscheidet — sie begründen, dass ein Werkzeug einer Stichprobe dieser Gruppe half oder schadete, was eine andere Behauptung ist. Diese Seite kartiert, was existiert, was es zeigt, und die methodischen Gründe, weshalb ein Gruppenmittelwert keine Vorhersage über eine lernende Person ist.

## Fragen zum Nachdenken

- Ihr Werkzeug funktioniert überwiegend für die Studierenden in Ihrem Kurs, und eine Untergruppe von fünf kämpfte. Wäre ein Unterschied zwischen Untergruppen dieser Größe in einer Studie dieser Art überhaupt nachweisbar — und würden Sie auf dieser Grundlage das Werkzeug für den ganzen Kurs ändern wollen?
- Forschung zu Studierenden mit Behinderungen berichtet Effekte, die nach Behinderungskategorie variieren. Wenn zwei Kategorien in derselben [[meta-analysis-systematic-review|Metaanalyse]] sehr unterschiedliche Effektstärken aufweisen, was sagt das darüber, „Behinderung“ in einer Designentscheidung als eine Gruppe zu behandeln?
- Mehrere Studien finden KI-Werkzeuge, die sich in ihren Effekten *nicht* nach Geschlecht unterscheiden, und andere Arbeiten zeigen, dass [[ai-feedback-quality|KI-Feedback]] und KI-gestütztes Schreiben *doch* Geschlechterstereotype reproduzieren, wenn Personas oder Prompts sie tragen. Wie kann beides zugleich wahr sein?
- Die meiste Fairness-Arbeit testet simulierte Studierenden-Personas statt echter Lernender, weil echte demografische Attribute dem Modell beim Schlussfolgern in den meisten Einsätzen nicht verfügbar sind. Was kann ein kontrafaktisches Persona-Audit begründen, und was nicht?
- Wenn Sie die Stränge auf dieser Seite durchgehen: Welche Gruppen von Lernenden sind in den Studien hinter der Validierung Ihres Werkzeugs tatsächlich repräsentiert — und was würden Sie bei einer abwesenden Gruppe tun?
- Eine Intervention, die die Ergebnisse für alle hebt, aber eine Lücke schließt (indem sie den zurückgefallenen Studierenden am meisten hilft), hat eine andere Gerechtigkeitsgeschichte als eine, die den Mittelwert hebt. Messen Sie bei der Evaluation eines Piloten die Lücke oder das Mittel?

## Einführung

Zwei Fragen verbergen sich in „funktioniert KI für *diese* Art von Studierenden?“. Die erste betrifft Effekte: ob ein Werkzeug für unterschiedliche Gruppen unterschiedliche Ergebnisse hervorbringt. Die zweite betrifft Nutzung: ob unterschiedliche Gruppen dasselbe Werkzeug unterschiedlich übernehmen, darauf zugreifen oder damit interagieren, was Ergebnisse prägen kann, ohne dass überhaupt ein unterschiedlicher Effekt vorliegt. Diese Seite behandelt beides, Gruppe für Gruppe, und benennt offen, wo die Literatur aufhört.

Sie ist absichtlich keine Dublette ihrer Nachbarseiten. [[equity-in-ai-education|Gerechtigkeit in der KI-Bildung]] trägt den normativen und strukturellen Rahmen — Zugang, Repräsentation und Ergebnisfairness, und das Argument dafür, was KI in der Bildung *tun sollte*. [[inclusive-learning|Inklusives Lernen]] trägt den Designrahmen, einschließlich [[universal-design-for-learning|Universal Design for Learning]]. [[digital-divide|Digitale Kluft]] deckt die Ebenen Zugang und Fähigkeiten ab. [[neurodiversity|Neurodiversität]], [[special-education|Sonderpädagogik]], [[accessibility|Barrierefreiheit]] und [[multilingual-learning|mehrsprachiges Lernen]] gehen bei einzelnen Gruppen in die Tiefe. Was für diese Seite bleibt, ist die gruppenübergreifende Evidenzkarte und die Bewertungsfrage: wie diese Effekte geschätzt werden, welche Gruppen überhaupt untersucht werden, und was ein Befund auf Gruppenebene Ihnen zu tun erlaubt.

## Wie Gruppenunterschiede berichtet werden, und warum das meiste davon nichts kann

**Eine Eingruppenstudie ist keine Studie zu unterschiedlichen Effekten.** Der Großteil der Literatur in diesem Bereich misst eine Gruppe ohne Vergleichsgruppe. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] poolten 29 (quasi-)experimentelle Studien zu KI für Studierende mit Behinderungen und fanden einen mittleren positiven Effekt (Hedges' g = 0.588, 95% CI [0.349, 0.826]) — ohne neurotypische Vergleichsgruppe. Das sagt Ihnen, dass eine Intervention half, nicht dass sie dieser Gruppe anders half.

**Teilgruppenanalysen sind meist zu klein, um die Frage zu beantworten.** Die [[ai-tutoring-micro-rct-gcse-science-2026|GCSE-Micro-RCT in Naturwissenschaften]] ist ungewöhnlich explizit: ihre Treatment-by-Status-Interaktion war 0.57 Notenpunkte (95% CI −2.25 bis 3.39), mit stratifizierten Schätzungen von g = 0.28 (95% CI −0.04 bis 0.59) für die eine Gruppe und g = 0.35 (95% CI 0.18 bis 0.52) für die andere. Ein Teilgruppenintervall, das null überlappt, ist eine Frage für einen lokalen Piloten, keine Grundlage für eine kursweite Regel.

**Demografische Attribute werden meist simuliert.** Echte Demografien der Lernenden werden selten an Modelleingaben angehängt, daher liefern Audits stattdessen Personas. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto und Hovy (2026)]] fuhren sechs instruktionsabgestimmte Modelle über drei Bildungsaufgaben unter den Bedingungen Modell-Default, explizite Persona und implizite Historie — 192.480 Inferenzaufrufe — und fanden, dass sowohl explizite Personas als auch *implizite* Gesprächshistorien das Modellverhalten bewegen. Ihre Unterscheidung lohnt zu behalten: Bewusstsein für Unterschiede zwischen Lernenden kann wünschenswert sein (Feedback an die Erstsprache einer lernenden Person anzupassen), während dieselbe Sensitivität ein Schaden ist, wenn sie das Urteil über identische Arbeit verschiebt.

**Fairness-Korrekturen generalisieren womöglich nicht.** [[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]] reduzierten geschlechts- und altersspezifische Fehlerlücken bei der Schätzung studentischer Aufmerksamkeit an [[assessment-validity|Validierungs]]daten, aber die Zugewinne übertrugen sich nicht konsistent auf zurückgehaltene Subjekte oder wiederholte Subjekt-Splits.

**Gruppenlabels verbergen die Variation in ihnen.** In derselben Metaanalyse zu Behinderung zeigten Studierende mit spezifischen Lernbehinderungen, intellektuellen und Entwicklungsbehinderungen oder Taubheit einen größeren Effekt (g = 0.952) als Studierende mit Autismus-Spektrum-Störung (g = 0.368) — ein Unterschied, den die Autoren als statistisch nicht signifikant über 239 Effektstärken aus 41 unabhängigen Stichproben berichten. „Behinderung“ ist nicht eine Gruppe, und „L2-Lernende“ auch nicht.

## Behinderung und Neurodivergenz

Dies ist der tiefste Strang in der Wissensbasis und der, in dem die Berichterstattung am stärksten ist.

- **Effekte sind real, aber ungleich über Ergebnisse verteilt.** In [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] zeigte [[learning-gains|akademische Leistung]] den größten Effekt (k = 80, g = 0.929), vor Fähigkeiten für Alltag und andere (g = 0.766) und sozial-emotionalen Fähigkeiten (k = 144, g = 0.382). Publikationsbias lag vor (Eggers Test β = 2.837, p < .001); Trim-and-Fill senkte die gepoolte Schätzung auf g = 0.2694, was statistisch signifikant blieb. Lesen Sie den Haupteffekt und den bias-adjustierten zusammen.
- **Das Feld hat sich um [[generative-ai|generative KI]] reorganisiert.** Der [[assistive-tech-neurodivergent-higher-ed-review-2026|Scoping Review zu digitalen assistiven Technologien für neurodivergente Studierende]] sichtete 766 Datensätze, um 40 empirische Studien einzuschließen, von denen 15 generative KI und 11 immersive Formate nutzten. Der Strang ist klein und neu statt ausgereift.
- **Manche KI-Unterstützungen egalisieren eher, als dass sie differenzieren.** [[adhd-video-segmentation-computing-education|Pimenova, Begel und Kollegen]] segmentierten [[video-education|Unterrichtsvideos]] in Einzelanweisungs-Häppchen mit festen Pausen in einer Within-Participants-Studie (17 ADHS, 10 ohne ADHS); alle verbesserten sich, und die Fehler und Zögern der ADHS-Teilnehmenden fielen zur Parität mit ihren Peers ohne ADHS. Das ist die stärkste verfügbare Form von Belegen für [[universal-design-for-learning|Universal Design for Learning]] durch automatisierte Inhaltstransformation: eine allgemeine Veränderung, die eine Lücke schließt, statt einer gruppenspezifischen Nachbesserung.
- **Was neurodivergente Studierende sagen, dass sie brauchen, ist oft banal.** [[neurodivergent-computing-students|Eine Befragung von 24 neurodivergenten Informatikstudierenden und 20 neurotypischen Peers]], mit vier Interviews, fand erhebliches Unbehagen mit Aufgaben, denen klare Struktur fehlt oder die mehrdeutige Erwartungen tragen — eine Anpassung, die nichts kostet, sie bereitzustellen.
- **Designentscheidungen können auch epistemisch ausschließen.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] argumentiert, dass anglophone, westlich-zentrierte Trainingsdaten nicht-hegemoniale Wege des Wissens marginalisieren und die Situation behinderter Lernender ins Zentrum dieser Kritik stellen.

## Sprache: Zweitsprache, Mehrsprachigkeit und Englischlernende

Nach Artikelzahl ist dies der größte Strang, und er teilt sich sauber in Werkzeugeffekte und Werkzeugschäden.

- **Werkzeugeffekte sind vielversprechend und verrauscht.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang und Zou (2026)]] meta-analysierten 11 Studien (17 Effektstärken, N = 595) zu robotergestütztem [[language-learning|Sprachenlernen]] und fanden einen positiven Gesamteffekt (g = 0.83, 95% CI [0.46, 1.21]) mit hoher Heterogenität (I² = 84.4%); von sechs getesteten Moderatoren war nur der Roboter-Lernende-Interaktionstyp signifikant. Eine Evidenzbasis dieser Größe stützt einen vorläufigen [[benchmark|Benchmark]], keine Beschaffungsentscheidung.
- **Die Infrastruktur selbst ist ungleich, bevor irgendein Werkzeug genutzt wird.** [[structural-silence-underrepresented-language-ai-2026|Roy und Roy (2026)]] dokumentieren die Korpuslücke am Fall Bengalisch: unter 0.5% der globalen Webinhalte gegenüber etwa 49.5% für Englisch, obwohl Bengali-Sprechende fast 4% der Weltbevölkerung sind.
- **Unterrichtssprache verändert Ergebnisse über 294 Studierende der Hochschulbildung hinweg.** Derselbe Review berichtet, dass fremdsprachige Inhalte niedrigere Ergebnisse erbrachten als muttersprachlicher Unterricht, und dass bilingualer [[cs-education|Programmier]]-Unterricht englischsprachigen Unterricht übertraf.
- **Detektoren bestrafen Zweitsprachen-Schreibende.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge und Mesbah (2026)]] testeten Turnitin und Originality an 192 Texten: Ein Detektor klassifizierte 48 von 48 professionell verfassten Texten korrekt, klassifizierte aber vier von 48 EFL-Studierendentexten falsch (91.6%). Die Asymmetrie ist der Punkt — der Fehler landet auf der Gruppe, deren Schreiben bereits genau unter die Lupe genommen wird.

## Geschlecht

Geschlechterforschung teilt sich hier darin, ob Werkzeuge Lernende unterschiedlich behandeln, und ob Lernende stereotypbeladenen Werkzeugen ausgesetzt sind.

- **Ein absichtlich geschlechtsneutrales Design zeigte keinen Geschlechterunterschied.** [[ada-female-coded-chatbot-gender-stereotypes-2026|Eine quasi-experimentelle Studie mit 195 Neuntklässlerinnen und Neuntklässlern]] testete ADA, einen weiblich kodierten [[conversational-ai|Chatbot]], der auf Ada Lovelace gründet: situatives Interesse stieg für beide Geschlechter ohne Geschlechterunterschied in emotionaler Reaktion, kognitiver Last oder akademischer Leistung. Eine Persona als Rollenvorbild kann ohne Auslösen von Stereotypbedrohung gebaut werden.
- **Doch Promptinhalt überträgt Bias in studentische Arbeit.** [[gender-bias-transfer-llm-writing|Eine kontrollierte Studie mit 123 Teilnehmenden]] ließ Studierende Berufsplanaufsätze für gepaarte Profile schreiben, die sich nur im Geschlecht unterschieden, unter den Bedingungen ohne KI, neutrale KI und geschlechtsverzerrte KI; die verzerrte Bedingung übertrug geschlechtsdifferenzierte Sprache in studentisches Schreiben und unterdrückte weibliche [[agency|Handlungsfähigkeit]] asymmetrisch. Die Forschenden bestätigten den Effekt zuerst an 1.600 erzeugten Aufsätzen.
- **Raum und Rahmung zählen so viel wie das Werkzeug.** [[all-girls-genai-makerspace-gender-equity-2026|Eine Fallstudie zu einem Nur-Mädchen-Makerspace für generative KI]] fand, dass Mädchen das geschlechtsspezifische Setting als sicherer und entspannter schätzten, und warnt vor „Girlification“ — oberflächlicher Anpassung, die Machtverhältnisse unangetastet lässt.
- **Modellsensitivität ist eine Eigenschaft des Modells, keine Konstante.** In [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]] wurden fünf Tutoren von 7B bis 70B über neun demografische Niveaus hinweg auditiert: Qwen2.5-7B überschritt die Bias-Schwelle |r| ≥ 0.10 in 7 von 12 Domäne-×-Dimension-Zellen, während LLaMA-3.1-8B sie einmal überschritt. Pädagogikspezifisches Training reduzierte einige Biases und erhöhte andere.
- **Eine einachsige Korrektur kann eine Gruppe schlechter dastehen lassen:** geschlechtsdiverse Studierende, die in eine Kategorie „Unbekanntes Geschlecht“ zusammengefasst wurden, hatten unter jeder Fairness-Methode die niedrigsten True-Positive-Raten, und keine einachsige Methode verbesserte ihre Behandlung — die oben notierte Variation von Gruppenlabels, diesmal innerhalb eines prädiktiven Frühwarnmodells statt eines Tutors ([[fairness-theatre-early-warning-systems-2026|McConvey et al. (2026)]]).

## Rasse, Ethnizität und minoritisierte Studierende

Dieser Strang ist klein in der Artikelzahl und stark im Mechanismus, weil die Belege davon handeln, was KI *mit* einem demografischen Attribut tut, sobald sie eines hat.

- **[[personalized-learning|Personalisierung]] ist ein Bias-Vektor.** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] zeigt, wie [[llm|LLM]]-Schreibfeedback-Werkzeuge hin zu stereotypausgerichtetem Lob und zurückgehaltener Kritik kippen, wenn Feedback mit Rasse, Sprache, Behinderung, Leistung oder [[motivation|Motivation]] einer Person personalisiert wird — an identischen Aufsätzen.
- **Der demografische Hinweis kann implizit sein.** Das obige kontrafaktische Audit fand, dass Gesprächshistorien, nicht nur explizite Personas, Bewertungs- und Feedbackverhalten bewegten — dasselbe Ergebnis von [[demographic-signals-llm-student-assessment-2026|192.480 Inferenzaufrufen]], und ein Grund, weshalb eine Offenlegungsregel über *deklarierte* Demografien nicht ausreicht.
- **Migrations- und Sprachlücken können dominieren.** In EduFair-Bench verband das 70B-Modell die größten Sprach- und Einwanderungslücken mit den kleinsten Pädagogiklücken, sodass ein Tutor, der pädagogisch stark aussieht, der sein kann, der am empfindlichsten dafür ist, wer die lernende Person zu sein scheint.
- **Epistemischer Ausschluss, nicht nur Fehler: siehe [[genai-minoritized-knowledges-disability|die Marginalisierung minoritärter Wissensformen]] oben.**

## Sozioökonomischer Status, Geografie und Alter

- **Digitale Kompetenz, nicht KI-Nutzung, ist der Mediator.** [[ai-divide-ses-personality-primary-education-2026|Wang und Kollegen (2026)]] modellierten Befragungs- und nationale Registerdaten von 4.497 Sechstklässlerinnen und Sechstklässlern in den Niederlanden und fanden, dass der Zusammenhang zwischen Persönlichkeitsmerkmalen und akademischer Leistung über digitale Kompetenz verlief statt über die Intensität der KI-Nutzung, wobei Unterschiede in digitaler Kompetenz stärker durch Persönlichkeit getrieben waren als durch sozioökonomischen Status — und SES-Vorteile unabhängig vom KI-Engagement operierten. Die klassische nur-SES-Rahmung ist unvollständig.
- **Geografie kann die bindende Einschränkung sein.** [[arc-hubs-k12-ai-robotics-rural-2026|ARCs Darstellung]] von Robotik und KI-Bildung im [[k-12|K-12]]-Bereich berichtet, dass ländliche Teilnahme an der FIRST LEGO League in der Fernsaison 2020 fiel und sich nie erholte, während urbane Teilnahme allmählich zurückkam, und identifiziert nachhaltige lokale technische Mentorschaft — nicht Bausätze oder [[curriculum-design|Curriculum]] — als die Einschränkung, die geografisch verteilt ist.
- **Erwachsene Lernende sind ein eigener Designfall,** abgedeckt durch [[adult-learning|Erwachsenenbildung]] und die Andragogie-Arbeit der Wissensbasis statt durch K-12-Studien.
- **Zugang bestimmt weiterhin alles andere: siehe [[digital-divide|Digitale Kluft]] und den Befund, dass [[access-not-enough-ai-tutoring-2026|Zugang zu KI-Tutoring nicht genug ist]] ohne [[pedagogy|pädagogische]] Integration.**

## Wo die Belege fehlen

Der ehrliche Befund dieser Übersicht ist, wie dünn manche Gruppen sind. Jede davon ist eine echte Lücke in der Evidenzbasis, keine Lücke auf dieser Seite.

- **Studierende der ersten Generation:** eine Studie berichtet einen Nutzungsunterschied statt einen Effekt. In [[student-ai-inquiry-types-cs2-2026|einer CS2-Anfragestudie]] behandelten Studierende der weiterführenden Generation die KI als aktive [[problem-solving|Problemlöse]]-Partnerin, während Studierende der ersten Generation eine bestätigende, validierungsorientierte Rolle einnahmen und insgesamt weniger Fragen stellten.
- **Studierende der ersten Generation: die erste Effektschätzung, und sie läuft in die falsche Richtung.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]]s [[rct|randomisierte Studie]] eines kursintegrierten [[intelligent-tutoring|KI-Tutors]] liefert, was dem Eintrag oben fehlt — einen gemessenen Unterschied statt ein Nutzungsmuster. In der vollen Stichprobe war der Effekt des Tutorzugangs auf die Abschlussnoten für Studierende der ersten Generation um 2.87 Punkte (0.28 SDs) negativer, was −5.10 Punkte (−0.50 SDs) für sie gegenüber −2.23 Punkten (−0.22 SDs) für ihre Peers impliziert; der Unterschied war in der Exakt-Match-Stichprobe größer (−3.89 Punkte, −0.35 SDs), und Studierende der ersten Generation verloren auch mehr Hausaufgabpunkte und Plattform-Seitenaufrufe. Die Studie berichtet keinen Mechanismus und ihre Präzision variiert nach Ergebnis, aber die Richtung ist das Gegenteil der Lücke-schließenden Geschichte: die Studierenden mit dem geringsten früheren Zugang zu akademischer Unterstützung trugen die größte gemessene Kostenlast.
- **Internationale Studierende:** eine [[mixed-methods-research|Mixed-Methods]]-Studie (Befragung n = 60, Interviews n = 14) zu [[international-students-conversational-ai-adaptation|Unterstützung bei kultureller Anpassung]].
- **Begabte und leistungsstarke Studierende:** als Gruppe in diesem Korpus praktisch unerforscht.
- **Geflüchtete, migrantische und vertriebene Lernende:** keine Studien.
- **Geschlecht wird in den meisten der obigen Arbeiten noch binär analysiert**, und Behinderungskategorien variieren zwischen Studien, sodass studienübergreifender Vergleich „derselben“ Gruppe Grenzen hat.

## Diese Belege nutzen, ohne ein Gruppenlabel zu überanpassen

- **Gruppenmittelwerte als Hypothesen über eine Population behandeln, nie als Vorhersagen über eine Person.** Jede obige Unterschiedsbehauptung ist eine verteilungsbezogene Aussage.
- **Fragen, ob Ihre Lernenden überhaupt in der Validierungsstichprobe waren**, bevor Sie der behaupteten Inklusivität eines Werkzeugs vertrauen; die Neurodivergenz- und Sprachstränge zeigen beide, dass Repräsentation in der Entwicklung die Ausnahme ist.
- **Egalisierende Designs bevorzugen, wo die Belege es erlauben.** Das ADHS-Videosegmentierungs-Ergebnis — alle verbessern sich, die Lücke schließt sich — ist ein besser passendes Ziel für ein allgemeines Klassenzimmer als ein gruppenspezifisches Add-on.
- **Vorsichtig sein mit Personalisierung, die demografische Attribute konsumiert.** Der [[marked-pedagogies-linguistic-bias-writing-feedback|Marked-Pedagogies]]-Befund handelt direkt von diesem Mechanismus, und er gilt für [[well-being|Wohlbefindens]]-Check-ins, [[affective-computing|affektive Tutoren]] und [[recommender-systems-and-learning-paths|Empfehlungssysteme]], die Lernende profilieren.
- **Lokal testen, an der Gruppe, die Ihnen wichtig ist, mit einem Ergebnis, das ohne das Werkzeug gemessen wird.** Siehe [[interpreting-and-applying-aied-research|Interpretation und Anwendung von AIEd-Forschung]] für die Bewertungsgewohnheiten und [[research-methods-aied|Forschungsmethoden in der KI-Bildung]] für die Designs, die einen lokalen Test vertretbar machen.

## Verbundene Konzepte
- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## Verbundene Artikel
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 Studien zu KI für Studierende mit Behinderungen: g = 0.588, und g = 0.269 nach Bias-Adjustierung
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 766 Datensätze zu 40 Studien, 15 davon generative KI
- [[adhd-video-segmentation-computing-education]] — A general design change that brought ADHD participants to parity
- [[neurodivergent-computing-students]] — 24 neurodivergente Studierende zu Struktur, Mehrdeutigkeit und Zusammenarbeit
- [[genai-minoritized-knowledges-disability]] — Epistemische Marginalisierung in der KI, mit Behinderung als Fall
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0.83 mit I² = 84.4% in einer kleinen L2-Evidenzbasis
- [[structural-silence-underrepresented-language-ai-2026]] — Unter 0.5% der Webinhalte für Bengalisch gegenüber 49.5% für Englisch
- [[hadra-ai-detector-accuracy-efl-2026]] — Detektoren klassifizieren EFL-Schreiben falsch, während sie professionelle Texte perfekt bewerten
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — A 195-student test of female-coded role models with no gender difference
- [[gender-bias-transfer-llm-writing]] — Gender-biased prompts transferring into student essays
- [[all-girls-genai-makerspace-gender-equity-2026]] — Single-gender space valued, with a warning against girlification
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — Tutor fairness varying by model, domain, and behavior dimension
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Stereotype-aligned feedback on identical essays
- [[demographic-signals-llm-student-assessment-2026]] — 192.480 Aufrufe: explizite Personas und implizite Historien bewegen beide Modelle
- [[student-attention-estimation-fairness-2026]] — Fairness regularization that did not generalize
- [[ai-divide-ses-personality-primary-education-2026]] — 4.497 Studierende: digitale Kompetenz, nicht KI-Nutzung, mediiert die Lücke
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Rural participation that never recovered, and mentorship as the constraint
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Eine Teilgruppeninteraktion, deren Konfidenzintervall null kreuzt
- [[student-ai-inquiry-types-cs2-2026]] — The corpus's one first-generation usage finding
- [[international-students-conversational-ai-adaptation]] — The corpus's one international-student study
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Die erste Effektschätzung des Korpus für Studierende der ersten Generation: Tutorzugang kostete sie 0.50 SDs der Abschlussnote gegenüber 0.22 für ihre Peers (Liu et al. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: Evaluating Post-Hoc Fairness Interventions in Vendor-Controlled Early Warning Systems
