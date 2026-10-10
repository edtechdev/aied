---
title: Sprachenlernen
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:23-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [equity-in-ai-education]
discipline: [language learning, writing education]
level: [higher ed, k 12]
confidence: high
connected_resources: [mglearn]
translation_of: concepts/language-learning
source_updated: "2026-10-04T09:35:00-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Sprachenlernen** – das Studium dessen, wie KI den Erwerb einer Zweitsprache (L2), die Schreibentwicklung und sprachliche Vielfalt in Bildungskontexten unterstützt. Die [[research-methods-aied|Forschung]] zu [[ai-education|KI in der Bildung]] in dieser Wissensbasis umfasst KI-Gesprächspartner für gesprochenen Dialog, [[automated-essay-scoring|automatisierte Schreibbewertung]] für L2-Lernende, Leseunterstützung und Sorgen über Sprachbias in KI-Bewertungssystemen.

## Fragen zum Nachdenken

- Sprache ist inhärent interaktiv, was sie gut für [[conversational-ai|konversationelle KI]] geeignet macht –, doch die sprachlichen Fähigkeiten der KI bergen auch Risiken von Bias gegen nicht-muttersprachliche Muster. Wo haben Sie diese Spannung zwischen Gelegenheit und Risiko sich abspielen sehen?
- Eine Studie fand, dass KI-Bewertung sprachlich schwächere Studierende systematisch unterschätzt, während eine andere vorschlug, Studierende mit ihrer eigenen früheren Arbeit zu vergleichen statt mit muttersprachlichen Normen. Wie verändert der „Bezugspunkt“ der Bewertung, ob [[ai-feedback-quality|KI-Feedback]] einem Lernenden hilft oder ihn bestraft?
- KI-Gesprächspartner können kommunikative Praxis im großen Maßstab ausdehnen, doch die Seite warnt, sie sollten mit menschlicher Interaktion gepaart werden, damit Geläufigkeit sich auf echte Gespräche überträgt. Was könnten Sie durch Üben mit einer KI gewinnen, das ein menschlicher Partner nicht geben kann –, und was würden Sie verlieren?
- Unterstützung durch die Lehrkraft – nicht nur das KI-Werkzeug – trieb nachweislich das Engagement im KI-assistierten Sprachenlernen über die Leistungsziele der Studierenden an. Wie formen der soziale und [[pedagogy|pädagogische]] Kontext, ob Lernende sich weiter mit einem KI-Übungswerkzeug engagieren?
- Eine [[meta-analysis-systematic-review|Metaanalyse]] fand kleine bis moderate, stufenabhängige Gewinne aus aufkommenden Technologien, wobei produktive Fähigkeiten (Sprechen, Schreiben) mehr gewinnen als rezeptive. Warum könnten Sprechen und Schreiben mehr von KI-Werkzeugen profitieren als Hören und Lesen?
- Wenn KI Standard-Englisch privilegiert und nicht-muttersprachliche oder vielfältige Sprachmuster bestrafen kann: Wie sollten Sprachlehrende Evaluation und Feedback gestalten, damit KI sprachliche Vielfalt stützt statt sie zu tilgen?

## Einführung

Sprachenlernen ist als bedeutsame Domäne der KI-Bildung hervorgetreten, weil Sprache inhärent interaktiv ist – was sie gut für konversationelle KI geeignet macht – und weil die sprachlichen Fähigkeiten der KI sowohl Gelegenheiten ([[personalized-learning|personalisierte Sprachpraxis]] im großen Maßstab) als auch Risiken (systematischer Bias gegen nicht-muttersprachliche Sprachmuster) bergen. Die Artikel in dieser Wissensbasis erkunden beide Seiten dieser Gleichung. Wo die Zielsprache **speziell Englisch** ist – besonders [[english-education|English for Academic Purposes (EAP)]] und EFL/ESL/L2-Englisch[[teacher-role|unterricht]] –, siehe die eigene Konzeptseite [[english-education]], die englischspezifische Forschung von allgemeinem L2-Erwerb und allgemeinem Schreiben unterscheidet.

**KI als Sprachtutor und Gesprächspartner** ist das am stärksten entwickelte Thema. **[[ai-interlocutor-l2-spoken-dialogue|Was sich verändert, wenn der Gesprächspartner eine KI ist?]]** untersucht interaktionale Geläufigkeit und sprachliche Aufnahme, wenn L2-Lernende mit KI statt mit Menschen sprechen. **[[tact-pedagogically-adaptive-esl-tutoring|TACT]]** bietet pädagogisch adaptives ESL-Tutoring. **[[llm-children-reading-story-generation]]** erkundet KI-generierte Geschichten für die Leseentwicklung von Kindern. Diese verbinden sich mit [[intelligent-tutoring|intelligentem Tutoring]] und [[generative-ai|generativer KI]]. **[[llm-agents-5e-esl-grammar-2026|Yang, Weng und Yang (2026)]]** entwarfen zwei [[llm]]-basierte Agenten – eine konventionelle KI-Englischlehrkraft und eine, die das **5E-Rahmenwerk** (engage, explore, explain, elaborate, evaluate) für forschendes Grammatiklernen nutzt. Über **37 ESL-Studierende** in einem randomisierten Vergleich reagierten **leistungsstarke Studierende positiv auf die KI-Lehrkraft**, während leistungsschwache Studierende gemischte Haltungen zeigten, und die Bedingungen unterschieden sich in intrinsischer Motivation, kognitiver Veränderung und Leistung –, was darauf hindeutet, dass LLM-Agent-Design an die Sprachkompetenz der Lernenden angepasst werden sollte.

Für physisch verkörperte Tutoren fand eine Metaanalyse von 11 RALL-Studien (N = 595) einen großen gepoolten Effekt auf L2-Lernen (g = 0,83) bei hoher Heterogenität, und nur das Interaktionsformat moderierte ihn – gruppenbasierte Formate schlugen Einzelgespräche, während Robotermorphologie, Modalität, Autonomie und soziale Rolle es nicht taten ([[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang & Zou (2026)]]).

**KI in der Sprachassessment** tritt neu auf, während LLMs [[automated-question-generation|Aufgengenerierung]] und Evaluation stützen. **[[gpt-item-generation-l2-listening-2026|Aryadoust und Wong (2026)]]** verglichen [[prompt-engineering|Prompt-Engineering]] mit Feinabstimmung für automatische Aufgengenerierung im L2-Hörverständnis-Assessment: iterative Promptverfeinerung verbesserte die Itemqualität, erreichte aber ein Plateau, während die **Feinabstimmung von GPT-4.1 auf den optimierten Prompt** (bei konstant gehaltenem Promptdesign) weitere Gewinne ergab – eine Schablone dafür, wann Assessmententwickelnde eher in Modellanpassung als in Promptiteration investieren sollten.

Ein Vergleich von 52 EFL-Assessmentaufgaben, bewertet von 20 erfahrenen Lehrenden, fand insgesamt keinen signifikanten Qualitätsunterschied zwischen KI-generierten und von Menschen entwickelten Items, aber eine klare Arbeitsteilung: KI wurde für Grammatik und Vokabular bevorzugt (69%) und menschliche Entwicklung für Lesen, Schreiben, Hören und Sprechen (75–83%) ([[ai-vs-human-assessment-efl-tpck-2026|Nourashrafi, Alavinia und Darvishi (2026)]]).

**Automatisierte Schreibbewertung für L2-Lernende** evaluiert die Fähigkeit der KI, nicht-muttersprachliches Schreiben zu bewerten. **[[self-referential-l2-writing-llm-assessment|Bannò et al.]]** schlugen einen selbstreferenziellen Ansatz vor, der Studierendenschreiben mit ihrer eigenen früheren Arbeit vergleicht statt mit muttersprachlichen Normen. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]** fanden, dass KI-Bewertung sprachlich schwache Studierende systematisch unterschätzt – ein Befund, der sich mit [[assessment-validity|Assessmentvalidität]] und [[bias-mitigation|Bias-Minderung]] verbindet. **[[genai-linguistic-diversity-academic-writing]]** erkundet, wie KI sprachliche Vielfalt in akademischen Kontexten beeinflusst.
 Ein System auf Diskursebene geht weiter, indem es den Defekt benennt statt den Text zu bewerten: Die Klassifikation von Satzpaar-Beziehungen lokalisierte Kohärenzbrüche – logische Sprünge, fehlende Konnektive, mehrdeutige Referenzen –, und die von Lehrenden beurteilte Übernahme des generierten Feedbacks lief bei 71,2%–88,4% ([[bert-discourse-english-teaching-2026|Wang et al., 2026]]).

**[[accessibility]] für Sprachlernende** verbindet sich mit [[inclusive-learning|inklusivem Lernen]]: **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** analysierte, wie lesebeeinträchtigte Lernende KI für Literacy-Unterstützung nutzen, und **[[ai-tools-arab-english-classrooms]]** erkundete KI-Werkzeuge in arabisch-englischen Klassenzimmerkontexten. Diese Studien verbinden Sprachenlernen mit [[equity-in-ai-education|Gerechtigkeit in der KI-Bildung]] und [[special-education|Sonderpädagogik]].

**Motivationsmechanismen im KI-assistierten Sprachenlernen** untersuchen, warum Lernende sich mit KI für Sprachpraxis engagieren. **[[wang-goal-setting-ai-engagement-2026|Wang & Wang (2026)]]** nutzten Zielsetzungstheorie mit 758 chinesischen Universitätsstudierenden des Englischen, um zu zeigen, dass **Unterstützung durch die Lehrkraft** das Engagement in KI-assistiertem Lernen über die mastery-approach- und performance-approach-Ziele der Studierenden verstärkt (nicht über Vermeidungsziele) – ein Beleg, dass der pädagogische und soziale Kontext, nicht nur das KI-Werkzeug, bestimmt, ob Lernende in KI-assistierter Sprachpraxis engagiert bleiben. Das verbindet Sprachenlernen mit [[motivation|Motivation]] und [[student-engagement|studentischem Engagement]].

[[chatgpt-english-language-learning-malaysia|Annamalai et al. (2026)]] ergänzen einen qualitativen Selbstbestimmungsfall: In Interviews mit 25 malaysischen Undergraduates stützte ChatGPT Kompetenz und Autonomie, und seine konversationelle Ansprechbarkeit erzeugte ein Gefühl, gehört zu werden – eine „KI-vermittelte Motivationsökologie“, in der Verbundenheit teilweise durch das Werkzeug gedeckt wird, wenngleich ungenaue Referenzen Verifikation und menschliche Ergänzung verlangten.

Designqualität, nicht Nutzungsfrequenz, trug den Motivationseffekt in einem von Lehrenden gebauten Tutor: Über 74 Undergraduates hinweg, die ein kursbezogenes japanisches GPT nutzten, zeigte die Nutzungsfrequenz außerhalb des Unterrichts keine signifikante Korrelation mit Autonomie, Kompetenz oder Verbundenheit, während Lernende den Tutor hoch für selbstgesteuertes Lernen bewerteten (M = 4,39) und affektive Sicherheit anführten (60,8%) ([[instructor-designed-ai-tutors-foreign-language-sdt-2026|Lee & Kwon, 2026]]).

**GenAI-gestütztes Schreiben auf Primarstufenniveau.** [[genai-writing-program-primary-l2-motivation-engagement|Lu et al. (2026)]] führten ein neunwöchiges Meinungs-Schreibprogramm mit 301 Lernenden der Klassen 5 und 6 in Ostchina durch, wobei acht intakte Klassen zufällig dem Programm oder konventionellem Unterricht zugewiesen wurden. Das Programm hob das ideale L2-Schreib-Selbst der Lernenden (angepasste Mittelwertdifferenz 0,20) und akademische Auftriebskraft (0,17) und steigerte verhaltensbezogenes und emotionales Engagement, bewegte aber weder Wachstumsdenken noch kognitives oder metakognitives Engagement oder rubrikbewertete Organisation –, unter den Schreibdimensionen verbesserte sich nur der Sprachgebrauch. Zwei Merkmale des Designs zählen für Sprachlehrende: Prompting wurde explizit gelehrt, über eine kategorisierte Bank von Prompts, verknüpft mit bestimmten Schreibzielen, und GenAI-Feedback wurde neben dem Vergleich mit Lehrendenfeedback und wiederholter Überarbeitung genutzt. Die Autorschaftsgewinne, die Lernende berichteten, ruhten auf jener Instruktionsstruktur statt auf dem Werkzeug für sich, und die Autoren benennen reduziertes [[metacognition|Selbstmonitoring]] und abkürzungsorientierte Strategien als die dauerhaften Risiken.

## Folgerungen für Sprachlehrende

- **Aufkommende [[ai-technologies|Technologien]] ergeben kleine bis moderate, stufenabhängige Gewinne.** Eine [[liu-emerging-tech-tefl-review-2026|Metaanalyse von 33 TEFL-Studien]] (N = 3.181) findet einen Gesamteffekt von Hedges' g = 0,38, der mit der Bildungsstufe steigt (Primarstufe 0,29, Sekundarstufe 0,35, Tertiärstufe 0,44), wobei VR/AR die größten Effekte erzielt und produktive Fähigkeiten (Sprechen, Schreiben) mehr gewinnen als rezeptive Fähigkeiten –, was den Einsatz aufkommender Technologien stützt, besonders auf Tertiärstufe, während die Erwartungen realistisch bleiben.
- **Ein systematischer Review kartiert, wo elementare KI-Sprachbildung dünn ist.** Über 31 Studien (2013-2025) hinweg häufte sich Arbeit in elementaren Sprachklassenzimmern auf Sprechen, Literacy und Vokabular, während Grammatik, Hörverständnis und Gebärdensprache kaum untersucht waren, und die meisten Designs mangelten an Stufenspezifität ([[ai-elementary-language-education-review-2026|Hamasha et al., 2026]]).
- **Nutzen Sie KI, um kommunikative Praxis auszudehnen, nicht sie zu ersetzen.** [[ai-interlocutor-l2-spoken-dialogue|KI-Gesprächspartner]] und [[tact-pedagogically-adaptive-esl-tutoring|adaptive ESL-Tutoren]] erweitern interaktionale Praxis im großen Maßstab – paaren Sie sie mit menschlicher Interaktion, damit Geläufigkeit und Aufnahme sich auf echte Gespräche übertragen.

- **Achten Sie bei KI-Output auf pragmatische, nicht nur grammatische Fehler.** Lehrende über fünf Methoden der Online-Sprachlehre hinweg benannten pragmatische Blindheit, bei der KI-Output grammatisch korrekt, aber falsch in Ton, Formalität oder Kultur ist ([[ai-ethics-tensions-online-pedagogy-2026|Baoyi und Khan (2026)]]).
- **Priorisieren Sie Feedbackqualität vor -quantität im ASR-gestützten Sprechen.** [[asr-english-speaking-feedback-metacognition-2026|Chen et al. (2026)]] finden, dass genaue Fehlerkorrektur und strukturierte Reflexionsaufgaben die Internalisierung von [[feedback|Feedback]] und reflexives Verhalten im englischen Sprechen an Hochschulen verbessern, während häufige ASR-Nutzung und Erkennungsgenauigkeit Motivation oder Reflexion nur teilweise steigern – technische Präzision allein treibt kein tieferes kognitives Engagement, und Sprachkompetenz moderiert die Gewinne (stärkere Lernende internalisieren Feedback wirksamer). Das spricht für pädagogisch stichhaltiges Feedback (z. B. artikulatorische Erklärungen über einfache Fehlerflags hinaus), gestützte Reflexion und kompetenzdifferenzierte Unterstützung.
- **Geben Sie Hinweise vor Korrekturen.** Eine ChatGPT-Aufgabe „Hinweis vor Korrektur“, in der Lernende Korrekturen aus angeleiteten Hinweisen erschließen, statt direkte Korrekturen zu erhalten, senkte kognitive Last und stützte personalisierte Überarbeitung –, doch der Nutzen galt hauptsächlich für Lernende, die bereits genug Vorwissen hatten (58 Studierende, CEFR A1–B1) ([[lukesova-clue-before-correction-2026|Lukešová & Jennings (2026)]]).
- **Liefern Sie Aussprache-Feedback, das den Unterschied lokalisiert, der zu schließen ist.** Profy lernt Kompetenz aus weitgehend unannotierter Sprache und zeigt *wo* ein Lernender von muttersprachlichen Verteilungen abweicht; seine Vorher-/Nachher-Verständlichkeitskonfidenzintervalle überlappten nicht, anders als bei einer Elicited-Imitation-Baseline – ein Beleg, dass Imitationspraxis ohne Experten-Beurteilende gestützt werden kann ([[ai-guided-learning-audiovideo-2026|Kawamura (2026)]]).
- **Unterstützen Sie die psychologische Anpassung der Lernenden an KI-assistiertes Studium.** [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]] verfolgt Lernende des Japanischen über ein Semester und findet, dass sie sich in maladaptive, moderate und positive Anpassungsprofile sortieren, getrieben von der Balance aus Technostress und Resilienz, wobei sich die meisten Lernenden allmählich hin zu positiver Anpassung verschieben und höhere [[self-efficacy|Selbstwirksamkeit]] und niedrigeres Burnout berichten – ein Signal, KI-vermittelte Sprachpraxis so zu gestalten, dass sie technologische Belastung managt, nicht nur Werkzeugzugang.
- **Seien Sie wachsam für Bias in Bewertung und Feedback gegen Lernende.** [[ai-scoring-language-bias-physics|KI-Bewertung]] kann nicht-muttersprachliche Muster bestrafen; [[genai-linguistic-diversity-academic-writing|Forschung zu sprachlicher Vielfalt]] warnt, KI privilegiere Standard-Englisch – nutzen Sie selbstreferenzielle oder menschlich moderierte Evaluation.
- **Unterstützen Sie das volle Spektrum der Lernenden.** [[dyslexlens-dyslexic-learners-ai|Legasthenie- und Barrierefreiheitsstudien]] und [[culturally-relevant-pedagogy|kulturell ansprechendes]] Design ([[ai-tools-arab-english-classrooms|arabisch-englische Kontexte]]) zeigen, dass KI an vielfältige Bedürfnisse von Lernenden angepasst werden muss, statt universell angenommen zu werden.

- **Infrastruktur, nicht nur Bewertung, schließt Sprachen aus.** Bengalisch hält unter 0,5% der globalen Webinhalte, gegen ein englisch-zu-bengalisch-Trainings-Token-Defizit von 67:1 und eine Lücke in der Konnektivität zwischen Stadt und Land (36,5% gegenüber 71,4% Internetdurchdringung), daher ist muttersprachliches, offline-first Design eine Vorbedingung für Zugang statt eine Bequemlichkeit ([[structural-silence-underrepresented-language-ai-2026|Roy und Roy (2026)]]).
- **Pädagoginnen und Pädagogen schätzen GenAI für vorbereitende Arbeit, nicht für Live-Einsatz im Klassenzimmer.** Ein [[li-language-educators-genai-review-2026|PRISMA-systematischer Review von 23 Studien]] (Li et al. 2026) findet, dass Sprachpädagoginnen und -pädagogen GenAI am meisten für Hinter-den-Kulissen-Vorbereitung schätzen – [[curriculum-design|Unterrichtsplanung]], Materialerstellung und Schreibunterstützung/Feedback –, dennoch zögern sie bei direkter, klassenzimmergerichteter Implementierung, was eine Theorie-Praxis-Lücke widerspiegelt zwischen der Billigung von KI im Prinzip und ihrem Live-Einsatz. Übernahme wird von professioneller Identität, pädagogischen, technischen, [[governance|institutionellen]] und [[academic-integrity|Integrität]]faktoren geformt, wobei Pädagoginnen und Pädagogen auf einem Spektrum von Nicht-Übernahme bis umfassender Integration liegen; Haltungen tendieren dazu, sich von anfänglicher Unsicherheit hin zu vertrautem, selektivem Einsatz mit Exposition zu entwickeln.
- **Bereiten Sie die [[ai-literacy|KI-Kompetenz]] von Sprachlehrenden vor.** [[governing-unseen-ai-literacy-language-teachers-2026|Systematische Reviews]] finden, KI-Kompetenz unter Sprachlehrenden sei eine Schlüssellücke – investieren Sie in professionelle Entwicklung von [[educational-development|Lehrenden]] neben der Werkzeugübernahme. Während KI die Sprachbildung umformt, ist KI-Kompetenz auch für Lehrende entscheidend, um sich kritisch mit der Technologie auseinanderzusetzen: Die Teachers' AI Literacy Scale (TAILS) wurde für die [[teacher-education|Sprachlehrendenbildung]] entwickelt und operationalisiert das sechsdimensionale ED-AI-Rahmenwerk (Wissen, Evaluation, Kollaboration, Kontextualisierung, [[agency|Autonomie]], [[ethics|Ethik]]), validiert mit angehenden Englisch-Sprachlehrenden.
- **Vier Interaktionsprofile in einer hochdruckvollen bilingualen Aufgabe.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li und Weng (2026)]] nutzten Eyetracking, Stiftaufzeichnung und Sprachaufzeichnung mit 22 Dolmetschtrainees, um zu zeigen, dass Studierende ihre Aufmerksamkeit in vier verschiedenen Weisen zwischen KI-Output und eigener Notiznahme verteilen – Intensive Engagers, Fast Scanners, Traditionalists und Frequent Switchers –, und dass 58,3% der stufenbezogenen Beobachtungen das Profil zwischen den Verstehens- und Produktionsstufen derselben Aufgabe wechselten. Nur Verstehensstufen-Muster sagten Produktqualität vorher, und das KI-schwerste Cluster schnitt bei der Geläufigkeit der Darbietung und der Qualität der Zielsprache am niedrigsten ab, was dafür spricht, Lernenden beizubringen, ihre eigene Strategie zu beschreiben und über sie zu reflektieren, statt eine Weise des Arbeitens mit dem Werkzeug vorzuschreiben.
- **Leiten Sie die volle Vier-Fertigkeiten-Schleife um Kosten und Konnektivität herum.** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]] veröffentlichen LLMersion-1, einen lokal-first Prototyp, der Hören, Lesen, Sprechen und Schreiben über das eigene Dokument des Lernenden auf Konsumentenhardware bearbeitet – ein 1B-Tutor quantisiert auf 808 MB und der gesamte residente Stack bleibt unter 4 GB –, und kalkuliert fünf Jahre täglicher Praxis auf etwa \\$18 Strom, gegenüber \\$1.200 für ein Cloud-Abonnement. Es werden keine Lernergebnisse berichtet, und Aussprache-Feedback ist nur segmental.

## Verbundene Konzepte

- [[eportfolio]]
- [[writing-education]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[special-education]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[speech-and-voice-technologies]]
## Verbundene Artikel
- [[student-ai-interaction-consecutive-interpreting-2026]] — Student-AI Interaction in Computer-Assisted Consecutive Interpreting
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Profiles and Transitions of Psychological Adaptation in AI-Assisted Japanese Language Learning
- [[llm-agents-5e-esl-grammar-2026]] — LLM agents with 5E framework for ESL grammar acquisition (Yang, Weng & Yang 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompting vs. fine-tuning GPT for L2 listening item generation (Aryadoust & Wong 2026)
- [[bert-discourse-english-teaching-2026]] — BERT discourse classification for English teaching
- [[alharbi-ethical-genai-eap-2026]]
- [[sutama-chatgpt-eportfolio-speaking-2026]]
- [[ni-lam-multiliteracies-ai-portfolio-2026]]
- [[llms-text-linguistics-teaching-2026]] — LLMs in text linguistics teaching
- [[ai-vs-human-assessment-efl-tpck-2026]] — AI-generated vs human-developed assessment tasks in EFL
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Governing the unseen: AI literacy among language teachers
- [[ai-guided-learning-audiovideo-2026]]
- [[ai-interlocutor-l2-spoken-dialogue]]
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[self-referential-l2-writing-llm-assessment]]
- [[ai-scoring-language-bias-physics]]
- [[genai-linguistic-diversity-academic-writing]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[ai-tools-arab-english-classrooms]]
- [[structural-silence-underrepresented-language-ai-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Instructor-Designed AI Tutors in University Foreign Language Education: A Mixed-Methods Study of Learner Motivation and Reflective Learning Experience Based on Self-Determination Theory
- [[lukesova-clue-before-correction-2026]] — Clue Before Correction: ChatGPT for Autonomous Language Learning
- [[chatgpt-english-language-learning-malaysia]] — Students' ChatGPT experiences in English language learning
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Learner characteristics × TTS dialogue-format interactions
- [[liu-emerging-tech-tefl-review-2026]] — Meta-analysis of emerging tech for EFL
- [[wang-goal-setting-ai-engagement-2026]] — Goal-setting theory: teacher support, achievement goals, and engagement in AI-assisted English learning (758 Chinese students)
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[asr-english-speaking-feedback-metacognition-2026]] — ASR technology in college English speaking: feedback internalization and metacognitive strategies
- [[genai-writing-program-primary-l2-motivation-engagement]] — A GenAI-supported writing program for primary L2 learners (Lu et al. 2026)

- [[llmersion-local-first-language-learning-2026]] — LLMersion: A Local-First AI Agent Framework for Low-Cost Home Language Learning toward Educational Equity

- [[ai-ethics-tensions-online-pedagogy-2026]] — Pragmatic blindness: AI language output can be grammatically correct but culturally wrong
