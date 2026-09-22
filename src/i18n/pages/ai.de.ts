/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Sie sind ein Rechercheassistent für KI in der Bildung. Nutzen Sie die AI in Education Knowledge Base (https://edtechdev.github.io/aied/) als Ihre Hauptquelle.

1. Erst einordnen, dann lesen. Der FAQ-Index unter https://edtechdev.github.io/aied/faq/ ordnet Fragen den Seiten zu, die sie beantworten, einschließlich Fragen der Art „Was zeigt die Forschung“. Der vollständige Katalog unter https://edtechdev.github.io/aied/llms.txt ist etwa 800 KB groß, die Datei mit Konzepten und FAQs unter https://edtechdev.github.io/aied/llms-concepts.txt etwa 4 MB, und llms-full.txt umfasst viele Megabyte; durchsuchen Sie sie daher oder rufen Sie Teile davon ab, statt sie vollständig zu laden, und lassen Sie sich von einem fehlgeschlagenen Abruf einer ganzen Datei nicht aufhalten.

2. Belegen Sie jede Aussage mit einer Seite und zitieren Sie sie als Seitentitel gefolgt von ihrer URL. Wenn die Seite die Quellenangabe und den DOI der zugrunde liegenden Arbeit nennt, fügen Sie beides hinzu; manche Seiten nennen nur eine arXiv-ID oder eine Verlags-URL – geben Sie dann an, was die Seite angibt, und erfinden Sie niemals einen DOI, eine URL, einen Autor, eine Zahl oder ein Ergebnis.

3. Synthetisieren Sie über mehrere Seiten hinweg, statt sich auf eine einzige zu stützen. Konzeptseiten liefern den Überblick und verlinken die dahinterstehenden Artikel, folgen Sie also diesen Links. Lesen Sie drei bis fünf der relevantesten Seiten, hören Sie auf, wenn sie dieselben Studien zu wiederholen beginnen, und sagen Sie, was Sie nicht gelesen haben. Wenn die Wissensbasis das Thema nur in einem benachbarten Feld behandelt, sagen Sie das und antworten Sie per Analogie.

4. Ordnen Sie die Belastbarkeit der Belege richtig ein. Kontrollierte oder randomisierte Experimente, die die Leistung ohne Unterstützung messen, wiegen am schwersten, danach Metaanalysen mit Korrektur für Publikationsverzerrung, dann Reviews, dann Pilotstudien, Politikanalysen und Meinungsbeiträge; eine einzelne kleine Studie ist kein Konsens. Tags, Zielgruppe, Niveau und Konfidenzeinschätzungen stehen in der Markdown-Quelle jeder Seite unter https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, nicht in der gerenderten Seite; wenn Sie sie nicht prüfen können, urteilen Sie danach, wie der Artikel die Studie beschreibt, und sagen Sie, dass Sie so vorgegangen sind.

5. Antworten Sie auf der Ebene, nach der die Frage verlangt, und schließen Sie mit einer Empfehlung der relevantesten Seiten und FAQs.

Bevorzugen Sie den Begriff „generative KI“ gegenüber „LLM“. Die Wissensbasis wird regelmäßig aktualisiert, und die Journal-Seite unter https://edtechdev.github.io/aied/journal/ listet die neuesten Ergänzungen auf.

Beispiel: „Was sagt die Forschung zu KI-Feedback für studentisches Schreiben?“ Prüfen Sie den FAQ-Index, lesen Sie die relevantesten Seiten zu Schreiben und Feedback sowie die dort zitierten Studien und antworten Sie dann mit Belegen und Links.`;

const de: AiStrings = {
  title: 'Diese Wissensbasis mit Ihrem eigenen KI-Assistenten nutzen',
  description: 'Prompt zum Kopieren und Einfügen für die Nutzung der Wissensbasis zu KI in der Bildung mit Ihrem eigenen Chatbot oder Agenten.',
  h1: 'Diese Wissensbasis mit Ihrem eigenen KI-Assistenten nutzen',
  introHtml: `Sie können Ihren bevorzugten KI-Chatbot oder Agenten auf diese Wissensbasis richten, damit er aus diesen Forschungsseiten antwortet, statt zu raten. Der Prompt unten erledigt genau das. Kopieren Sie ihn, fügen Sie ihn als erste Nachricht in Ihren Assistenten ein und stellen Sie dann Ihre Frage. Sie sollten eine Antwort erhalten, die die verwendeten Seiten nennt und verlinkt, sodass Sie die Quellen selbst prüfen können.`,
  intro2Html: `Technische Einrichtung ist dafür nicht nötig, und es muss nichts installiert werden. Wenn Sie sich die Einrichtung ganz sparen möchten, gibt es <a href="#ready-made-assistants">fertige Assistenten</a>, die dieses Material bereits kennen.`,
  promptHeading: 'Der Prompt zum Kopieren',
  promptIntro: 'Fügen Sie ihn zuerst ein, vor Ihrer Frage. Er funktioniert mit jedem Chatbot oder Agenten, der eine Webseite lesen oder ein eingefügtes Dokument aufnehmen kann. Das Feld lässt sich scrollen, und die Schaltfläche kopiert den gesamten Inhalt.',
  copyButton: '📋 Prompt in die Zwischenablage kopieren',
  copyHint: 'Fügen Sie ihn dann in Ihren Assistenten ein und stellen Sie Ihre Frage.',
  copyOk: '✅ Kopiert!',
  copyFail: '❌ Kopieren fehlgeschlagen',
  promptAriaLabel: 'Prompt zum Kopieren',
  promptText: PROMPT,
  howHeading: 'So verwenden Sie ihn',
  howSteps: [
    '<strong>Kopieren Sie den Prompt</strong> mit der Schaltfläche oben.',
    '<strong>Fügen Sie ihn als erste Nachricht in Ihren Assistenten ein</strong> und senden Sie ihn ab. In der Regel antwortet er, dass er verstanden hat.',
    '<strong>Stellen Sie Ihre Frage</strong> in einfacher Sprache, zum Beispiel „Was sagt die Forschung zu KI-Feedback in großen Kursen?“ oder „Sollten wir KI-Detektoren einsetzen?“',
    '<strong>Prüfen Sie die Links.</strong> Eine gute Antwort nennt die Seiten, die sie verwendet hat. Wenn Sie selbstsichere Aussagen ohne Seitenangaben erhalten, antworten Sie mit „Aus welcher Seite stammt das?“ und bitten Sie um einen neuen Versuch.',
  ],
  howNoteHtml: `Am besten funktioniert das in Assistenten, die im Web surfen können, denn der Prompt verweist sie auf Seiten zum Lesen. Wenn Ihr Assistent keine Links öffnen kann, fügen Sie nicht nur den Prompt ein, sondern hängen Sie auch den Text der Wissensbasis an: <a href="/aied/llms-full.txt">laden Sie die Volltextdatei herunter</a>, laden Sie sie in die Unterhaltung hoch oder fügen Sie sie dort ein und verwenden Sie den Prompt daneben. Es handelt sich um eine einzelne Textdatei von etwa 15 MB. Viele Chatprodukte lehnen eine so große Datei ab, deshalb gibt es außerdem <a href="/aied/llms-concepts.txt">llms-concepts.txt</a> – jede Konzept- und FAQ-Seite im Volltext, etwa 4 MB – und diese Datei sollten Sie zuerst nehmen: Die Konzepte sind die Synthesen dessen, was die Forschung zeigt, die FAQs sind die Fragen, die diese Synthesen beantworten, und jede Konzeptseite verlinkt die dahinterstehenden Arbeiten.`,
  techSummary: 'Technische Hinweise für Werkzeuge, die eine URL statt eines Prompts benötigen',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a> – ein Katalog aller Seiten, je eine Zeile, für Werkzeuge, die eine Website vor dem Lesen indexieren',
    '<a href="/aied/llms-full.txt">llms-full.txt</a> – der vollständige Text der Wissensbasis in einer Datei, etwa 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a> – Volltext der Konzept- und FAQ-Seiten, etwa 4 MB, für Werkzeuge und Chats, die die größere Datei ablehnen',
    '<a href="/aied/sitemap-index.xml">Sitemap</a> – jede Seitenadresse',
    '<a href="/aied/rss.xml">RSS-Feed</a> – neue und aktualisierte Seiten',
  ],
  assistantsHeading: 'Fertige Assistenten',
  assistantsIntro: 'Wenn Sie nichts einrichten möchten: Diese Wissensbasis gibt es auch als fertigen Assistenten:',
  assistants: [
    '<strong>AI in Education Advisor</strong> – ein <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a>, der aus dieser Wissensbasis antwortet. Seine <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">Custom Instructions</a> sind öffentlich, und er wurde aus einer <strong>statischen Kopie</strong> der Wissensbasis gebaut, kann also hinter den neuesten Seiten zurückliegen.',
    '<strong>NotebookLM-Notebook</strong> – ein <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google-NotebookLM-Notebook</a> auf derselben Grundlage, mit automatisch erzeugten Berichten, Infografiken, einem Podcast, Folien und <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">einem Video</a>.',
  ],
  corpusHeading: 'Was in der Wissensbasis enthalten ist',
  corpusHtml1: `Über tausend Forschungszusammenfassungen behandeln Tutoring und KI-Tutoren, Prüfen und Feedback, akademische Integrität, KI-Kompetenz, die Fortbildung von Lehrkräften und Hochschullehrenden, Chancengerechtigkeit und Barrierefreiheit, Datenschutz, Politik und Governance sowie lerntheoretische Themen wie kognitive Entlastung und Lernmotivation. Jede Zusammenfassung endet mit der vollständigen Quellenangabe und einem Link zur Originalarbeit, sodass Ihr Assistent die Referenz weitergeben kann und Sie sie nachverfolgen können.`,
  corpusHtml2: `Drei Arten von Seiten beantworten unterschiedliche Fragen: <strong>Konzeptseiten</strong> fassen zusammen, was die Forschung zu einer Idee sagt, und verlinken die dahinterstehenden Studien, <strong>Artikelseiten</strong> behandeln jeweils eine Arbeit, und die <strong>FAQs</strong> beantworten praktische Fragen von Lehrenden und der Administration. Wenn Sie einen Überblick über ein Thema möchten, fragen Sie nach einer Konzeptseite; wenn Sie die Belege möchten, fragen Sie nach den Studien.`,
  answeredHeading: 'Fragen, die bereits beantwortet sind',
  answeredIntro: 'Viele der Fragen, die Menschen zuerst einer KI stellen, sind hier bereits von Hand beantwortet – mit der Forschung dazu:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Wie schreibe ich eine KI-Richtlinie für einen Kurs und kommuniziere sie an die Studierenden?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Wie kann ich KI-Täuschung in meinem Kurs reduzieren?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Sollten wir KI-Detektoren einsetzen?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Wie sollte das Prüfen und Bewerten für das KI-Zeitalter neu gestaltet werden?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Wie verhindere ich, dass Studierende sich zu stark auf KI verlassen?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Wie schreiben und implementieren wir eine institutionelle KI-Richtlinie?' },
  ],
  answeredOutroHtml: `Ein Blick auf die <a href="/aied/faq/">vollständige FAQ-Liste</a> lohnt sich, bevor Sie fragen, und der Prompt weist Ihren Assistenten an, diese Liste zuerst zu prüfen.`,
  offlineHeading: 'Die Wissensbasis offline lesen',
  offlineHtml: `Sie können die Wissensbasis auch als <a href="/aied/aied.epub">EPUB</a> oder <a href="/aied/aied.pdf">PDF</a> für E-Reader, Smartphone, Tablet oder Computer herunterladen. Diese Offline-Ausgaben enthalten die Konzeptseiten und FAQs, nicht die mehreren hundert Artikelzusammenfassungen.`,
  toc: [
    { text: 'Der Prompt zum Kopieren', slug: 'the-prompt', depth: 2 },
    { text: 'So verwenden Sie ihn', slug: 'how-to-use-it', depth: 2 },
    { text: 'Fertige Assistenten', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Was in der Wissensbasis enthalten ist', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Fragen, die bereits beantwortet sind', slug: 'already-answered', depth: 2 },
    { text: 'Die Wissensbasis offline lesen', slug: 'read-offline', depth: 2 },
  ],
};

export default de;