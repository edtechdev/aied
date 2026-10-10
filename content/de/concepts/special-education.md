---
connected_resources: [teacherserver]
title: Sonderpädagogik
created: "2026-08-09T07:47:05-04:00"
updated: "2026-10-10T09:04:24-04:00"
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
translation_of: concepts/special-education
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "Automatische Übersetzung der englischen Seite; noch nicht von einer muttersprachlichen Person geprüft."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Dies ist eine automatische Übersetzung der englischen Seite; sie wurde noch nicht von einer muttersprachlichen Person geprüft.*

> **Sonderpädagogik** — die Gestaltung und Durchführung von Instruktion für Lernende mit Behinderungen, umfassend kognitive, physische, sensorische und neuronentwicklungsspezifische Unterschiede. Die [[ai-education|KI in der Bildung]]-[[research-methods-aied|Forschung]] in dieser Wissensbasis erkundet, wie KI-Werkzeuge verschiedene Bedürfnisse von Lernenden durch [[personalized-learning|Personalisierung]], [[scaffolding|adaptives Scaffolding]] und barrierefreie Schnittstellen unterstützen können –, während sie auch die Risiken [[ai-technologies|KI-System]]e untersucht, die Lernende mit Behinderung übersehen oder marginalisieren.

> ⚠️ **Sonderpädagogik ist primär ein [[k-12|K-12]]-Begriff.** Er ist verwurzelt im U.S. Individuals with Disabilities Education Act (IDEA) und dem auf Anspruchsberechtigung basierenden System Individualized Education Programs (IEPs), das Sonderpädagogik-Dienste in Primar- und Sekundarbildung steuert. In der [[higher-ed|Hochschulbildung]] – und zunehmend auch in der K-12 – ist die verbreitetere Rahmung **[[universal-design-for-learning|Universal Design for Learning]]** (ein proaktives Designrahmen, der allen Lernenden nützt) neben [[accessibility|Barrierefreiheit]] und [[assistive-technology|assistiven Technologien]] statt „Sonderpädagogik". Ein K-12-Sonderpädagogik-Artikel und ein Hochschul-UDL-Stück behandeln überlappende, aber verschiedene Kontexte; die Wissensbasis behält beide, weil die Forschungsliteratur beide umspannt. Wenn eine Quelle die Hochschulbildung und Lernende mit Behinderung betrifft, ist sie meist besser mit [[universal-design-for-learning|Universal Design for Learning]], [[accessibility|Barrierefreiheit]] oder [[inclusive-learning|inklusivem Lernen]] verlinkt als mit Sonderpädagogik.

## Fragen zum Nachdenken

- Die Seite betont, dass „Sonderpädagogik" primär ein K-12-, anspruchsbasierter Begriff ist, verwurzelt in IDEA und IEPs, während die Hochschulbildung häufiger von Universal Design for Learning und Barrierefreiheit spricht. Warum, glauben Sie, unterscheiden sich diese Kontexte, und was legt dieser Unterschied offen?
- KI-Versprechen von Personalisierung scheint maßgeschneidert für Lernende mit verschiedenen Bedürfnissen. Aber wenn ein System sich an „individuelle kognitive Profile" anpassen kann, was könnte schiefgehen, wenn das Modell einer Behinderung zu grob oder ganz abwesend ist?
- Die Forschung schließt KI-Werkzeuge ein, gestaltet für spezifische Behinderungsprofile (z. B. Legasthenikerinnen und Legastheniker oder gehörlose und schwerhörige Lernende). Welche Risiken sehen Sie im Gestalten für enge Profile gegenüber dem Gestalten universell für alle Lernenden von Anfang an?
- Wie könnten KI-Systeme, die für die „durchschnittliche" lernende Person gebaut sind, damit enden, Lernende mit Behinderung zu übersehen oder zu marginalisieren, selbst unbeabsichtigt –, und wessen Verantwortung ist es, das zu verhindern?
- Was würde es bedeuten, dass ein KI-Werkzeug eine lernende Person mit Behinderung echt einschließt, statt sie bloß zu berücksichtigen –, und wie würden Sie den Unterschied in der Praxis erkennen?

## Einführung

Sonderpädagogik ist eine Domäne, in der KI-Fähigkeit zu Personalisierung und Anpassung besonderes Versprechen bietet. Anders als Einheitsgröße-Instruktion können [[intelligent-tutoring|KI-Tutoren]] theoretisch sich an individuelle kognitive Profile, Kommunikationsbedürfnisse und Lerntempi anpassen. Die Artikel dieser Wissensbasis umspannen KI für spezifische Behinderungsprofile, Erfahrungen neurodivergenter Lernender und kritische Perspektiven auf KI und Behinderung.

**Behinderungsspezifisches KI-Tutoring** schneidert KI auf besondere Bedürfnisse von Lernenden zu. **[[special-r1-rl-special-education|Special-R1]]** erweitert [[reinforcement-learning|bestärkendes Lernen]], um kognitive und kommunikative Diversität über fünf Behinderungsprofile hinweg zu modellieren, und nutzt personabewusste Prompts und Denkbelohnungen, um Tutorantworten für jede lernende Person zu formen. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** analysierte, wie Lernende mit Legasthenie KI-Werkzeuge erleben, und legte sowohl den Wert von KI für Literalitätsunterstützung als auch persistierende Barrierefreiheitsbarrieren offen. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** gestalteten ein [[llm]]-angetriebenes Fragengenerierungssystem für [[accessibility|gehörlose und schwerhörige Lernende]] und führten Visuelle- und Emotions-Fragenstrategien ein und verfeinerten Fragen iterativ mit der Zielgemeinschaft, um die Fehlanpassung zwischen textbasierten KI-Prompts und gebärdensprachbasierten Erstsprachen zu überwinden. **[[embodied-string-learning-blindness-low-vision-musicians]]** entwickelten nicht-visuelle Lernstrategien mit blinden und sehbehinderten Musikerinnen und Musikern und zentrierten behinderten-geführtes [[embodied-learning|verkörpertes]] Design. Diese verbinden sich mit [[inclusive-learning|inklusivem Lernen]] und [[neurodiversity|Neurodiversität]].

**Erfahrungen neurodivergenter Lernender** zentrieren autistische Studierende und solche mit ADHS. **[[neurodivergent-computing-students|Zastudil et al.]]** fanden, dass neurodivergente Informatik-Studierende strukturierte Aufgaben, kleine konsistente Teams und explizite Rollendefinitionen brauchen – Designanforderungen, die [[collaborative-learning|kollaboratives Lernen]]-Werkzeuge adressieren müssen. **[[adhd-video-segmentation-computing-education]]** demonstrierte, dass KI-segmentierte Videos die ADHS-Leistungslücke beseitigten. Beide verbinden sich mit [[learning-design|Lerndesign]] und [[universal-design-for-learning|Universal Design for Learning]].

**Kritische Perspektiven** untersuchen, wie KI Lernende mit Behinderung marginalisieren kann. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** argumentiert, dass KI-Systeme behinderten-zentriertes Wissen aktiv marginalisieren aufgrund westlich-zentrierter Trainingsdaten –, verbunden mit [[equity-in-ai-education|Gerechtigkeit]]s-Bedenken zu epistemischer Gerechtigkeit.

**KI für Legasthenie über Detektion, Unterstützung und personalisiertes Lernen hinweg.** Ein interdisziplinärer [[meta-analysis-systematic-review|systematischer Review]] von 2026 (Dabaghi, D'Urso & Sciarrone, PRISMA-geleitet, 2018–2024, n=72) kartiert, wie KI Studierende mit Legasthenie in der Bildung unterstützt, und findet KI genutzt für Detektion, assistive Unterstützung und personalisiertes Lernen –, aber mit diesen Strängen, die parallel statt in Integration evolvieren, stärker getrieben durch technologische Gelegenheit als durch konsolidierte Bildungstheorie. ML-basierte Hilfs-Bildung-Werkzeuge fallen in fünf Bereiche (spezifische Anwendungen, Engagement, Personalisierung, Empfehlung, generische Unterstützung), betonen dennoch technische Leistung und Klassifikationsgenauigkeit, während sie ökologische Validität und praktische Einsatz in Klassenräumen übersehen. Detektionsforschung (EEG, Eye-Tracking, ML-Modelle) priorisiert frühe Intervention und zeigt diagnostisches Versprechen, erfordert aber oft spezialisierte Ausstattung und kontrollierte Umgebungen, was Skalierbarkeit und Barrierefreiheit in typischen Schulumgebungen begrenzt. Offene Herausforderungen schließen begrenzte experimentelle Validierung, Skalierbarkeit, [[ethics|Ethik]]-/Datenschutzbedenken bei sensiblen studentischen Daten, begrenzte Unterstützung und Training für Lehrkräfte und Sprach-/Kulturschranken ein (die meiste Forschung zielt auf englischsprachige Populationen).

**Kognitive Entlastung für Studierende mit Lernbehinderungen (SWLDs).** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]], ein konzeptueller Review in einer *Learning Disability Quarterly*-Sonderreihe zu KI für Studierende mit LD, rahmen [[generative-ai|GenAI]]-Nutzung für SWLDs durch die Linse der [[cognitive-offloading|kognitiven Entlastung]] neu. Sie argumentieren, dass GenAI je nachdem, wie Entlastungsentscheidungen mit den kognitiven und [[motivation|motivationalen]] Profilen von SWLDs interagieren (Exekutivfunktions- und Arbeitsgedächtnis-Herausforderungen, erhöhte kognitive Last, anstrengungsvermeidende Leistungsziele, geringere akademische Selbstwirksamkeit und aufgeblasene Erwartungen gegenüber GenAI) und mit Instruktionsdesign, eine **kompensatorische Hilfe oder ein Kurzweg** sein kann. Für Lesen und Schreiben kann GenAI Zugang stützen (Textnivellierung, Zusammenfassen, [[multimodal|multimodale]] Ausgaben, Planen, Entwerfen, Revisionsfeedback), während höherstufiges [[student-engagement|Engagement]] bewahrt wird –, aber exzessive Entlastung riskiert, die Verstehens-, Planungs- und Monitoringprozesse zu umgehen, die für diese Lernenden bereits fragil sind, „[[metacognition|metakognitive]] Faulheit" zu fördern und Literalitätsschwierigkeiten über Domänen hinweg zu verschärfen. Das Papier positioniert **instruktionale [[guardrails|Leitplanken]]** als den Schlüssel-moderierenden Faktor und empfiehlt, strategische Entlastung zu [[teacher-role|lehren]], [[ai-literacy|KI-Kompetenz]] aufzubauen, um Vertrauen in Werkzeuge zu kalibrieren, Beherrschungserfahrungen zu sequenzieren, um [[self-efficacy|Selbstwirksamkeit]] aufzubauen, und Aufgaben und Assessment an IEP-Zielen auszurichten, die Kompetenzentwicklung gegenüber Substitution priorisieren. Das erweitert die Sonderpädagogik-Abdeckung der Wissensbasis auf die Gerechtigkeitsdimension der Entlastung: dasselbe Werkzeug, das Barrieren für Zugang senkt, kann, wenn ungesichert, für die Übung einspringen, die SWLDs am meisten brauchen.
**KI-generierte Interventionsinhalte brauchen Vorgenerierungs-Kontrollen, nicht nur Review.** [[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]] fanden, dass Praktikerinnen und Praktiker das co-gestaltete Social-Story-Werkzeug als hoch gebrauchstauglich bewerteten (SUS 86.8), seine Bilder dennoch als generisch westlich und seinen Verhaltenstracker als fehlangepasst an zielverbundene klinische Urteilskraft bezeichneten – Einschränkungen, die sie vor der Generierung gesetzt hätten.

## Implikationen für Lehrende in der Sonderpädagogik

- **KI mit den Ziel-Lernenden und der Gemeinschaft co-designen.** [[llm-question-generation-deaf-hard-of-hearing-2026|Fragengenerierung für gehörlose/schwerhörige Lernende]] zeigt den Wert, KI iterativ mit der Gemeinschaft zu verfeinern, um die Lücke zwischen textbasierten Prompts und gebärdensprachbasierten Erstsprachen zu überbrücken –, Lernende und ihre Gemeinschaften in Design einzubeziehen, statt anzunehmen, KI passe zu ihnen.
- **KI auf spezifische Behinderungsprofile abstimmen, nicht auf generische Barrierefreiheit.** [[special-r1-rl-special-education|Special-R1]] modelliert kognitive und kommunikative Diversität über Behinderungsprofile hinweg; [[dyslexlens-dyslexic-learners-ai|DysLexLens]] dokumentiert sowohl den Literalitätswert als auch die persistenten Barrierefreiheitsbarrieren, denen Lernende mit Legasthenie begegnen –, Werkzeuge wählen, die auf das Profil jeder lernenden Person ausgerichtet sind, und wachsam für unerfüllte Barrieren sein.
- **Kollaboration für neurodivergente Lernende strukturieren.** [[neurodivergent-computing-students|Neurodivergente Informatik-Studierende]] brauchen strukturierte Aufgaben, kleine konsistente Teams und explizite Rollen –, diese Designanforderungen auf jede KI-vermittelte kollaborative Aktivität anwenden.
- **KI nutzen, um Leistungslücken zu schließen (nicht zu verbreitern).** [[adhd-video-segmentation-computing-education|KI-segmentierte Videos]] beseitigten die ADHS-Leistungslücke –, adaptive KI dort einsetzen, wo Evidenz zeigt, dass sie Ergebnisse egalisiert, nicht wo sie bloß automatisiert.
- **Behinderten-geführtes verkörpertes Design zentrieren.** [[embodied-string-learning-blindness-low-vision-musicians|Blinde/sehbehinderte Musikerinnen und Musiker]]-Forschung zeigt, dass nicht-visuelle, behinderten-geführte Strategien visuelle Standard-Schnittstellen übertreffen –, KI mit der Expertise von Lernenden mit Behinderung bauen und adaptieren.
- **Gegen epistemische Marginalisierung absichern.** [[genai-minoritized-knowledges-disability|Kritische Perspektiven]] warnen, dass westlich-zentrierte Trainingsdaten behinderten-zentriertes Wissen marginalisieren können –, KI-Inhalte und -Werkzeuge auf epistemische Gerechtigkeit neben [[equity-in-ai-education|Gerechtigkeit]] prüfen.

## Verbundene Konzepte

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## Verbundene Artikel
- [[seung-basham-cognitive-offloading-swld-2026]] — GenAI cognitive offloading for students with learning disabilities
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories
