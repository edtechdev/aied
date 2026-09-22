/**
 * Home page copy, per locale. Each locale module exports the same keys, so the
 * page component (`src/components/pages/HomePage.astro`) renders any language with
 * no branching. HTML is allowed; internal links are authored exactly as in English
 * and are moved into the active locale by `localizeHtml` only for the routes that
 * actually have a translation.
 */
export interface HomeStrings {
  title: string;
  h1: string;
  introHtml: string;
  navHeading: string;
  navHtml: string;
  chatHeading: string;
  chatHtml: string;
  startingHeading: string;
  startingIntro: string;
  groups: Array<{ id: string; heading: string; html: string }>;
  statsHeading: string;
  statsIntro: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const de: HomeStrings = {
  title: 'Startseite',
  h1: 'AI in Education Knowledge Base',
  introHtml: `Willkommen in der <strong>Wissensbasis zu KI in der Bildung</strong> – einer freien, gemeinfreien Ressource über <a href="/aied/concepts/ai-education/">künstliche Intelligenz in der Bildung</a>, für alle, die sie lehren, studieren, gestalten oder verwalten. Sie verdichtet aktuelle Open-Access-Forschung zu kurzen, strukturierten Seiten, die Sie lesen und direkt nutzen können. Ein Hinweis zur Entstehung: Die Seiten werden von einem KI-Agenten erstellt und aktualisiert, mit redaktioneller Begleitung durch den Entwickler der Website. Jede Aussage nennt die dahinterstehende Arbeit, sodass sich die Quellen nachprüfen lassen.`,
  navHeading: 'Orientierung auf der Website',
  navHtml: `Blättern Sie in der linken Seitenleiste durch den nach Strängen gegliederten Index, um zu sehen, wie das Feld aufgebaut ist, oder <a href="/aied/search">durchsuchen Sie die gesamte Wissensbasis</a>, wenn Sie bereits ein Thema im Kopf haben. Artikelseiten verdichten eine Arbeit auf ihren Zweck, ihre Methoden und ihre Ergebnisse, mit vollständiger Quellenangabe und Links zu verwandter Forschung; Konzeptseiten bündeln, was die Forschung zu einer Idee sagt, und verlinken die dahinterstehenden Studien. Wenn Sie lieber von einer Frage ausgehen, sammelt der <a href="/aied/faq">FAQ-Index</a> die Fragen, die Besucher zuerst stellen – von der KI-Richtlinie für einen Kurs bis zur Frage, ob man KI-Detektoren einsetzen sollte; wenn Sie lieber von einem Werkzeug ausgehen, listet die <a href="/aied/resources">Ressourcenseite</a> kostenlose Werkzeuge, Sammlungen und Instrumente auf, die Sie direkt nutzen können, jeweils mit der Angabe, wer sie erstellt hat und was sie kosten. Die Konzeptkarte oben zeigt, was womit zusammenhängt; <a href="/aied/concepts/ai-education/">KI in der Bildung</a> ist die dahinterliegende Kartenseite, die die Konzepte in etwa einem Dutzend übergreifender Stränge gruppiert.`,
  chatHeading: 'Mit der Wissensbasis chatten',
  chatHtml: `Alle Inhalte werden zusätzlich als maschinenlesbare Dateien veröffentlicht, sodass Sie Ihren bevorzugten KI-Chatbot oder Agenten auf die Wissensbasis richten und Antworten erhalten können, die sie zitieren, statt zu raten – <a href="/aied/ai">die Prompts finden Sie hier</a>. Neue Seiten erscheinen im <a href="/aied/journal">Journal</a>, das einen <a href="/aied/rss.xml">RSS-Feed</a> hat, wenn Sie mitlesen möchten. Für das Lesen offline nehmen Sie die <a href="/aied/aied.epub">EPUB</a>- oder die <a href="/aied/aied.pdf">PDF</a>-Ausgabe.`,
  startingHeading: 'Empfohlene Einstiegspunkte nach Zielgruppe',
  startingIntro: 'Im Folgenden finden Sie einige empfohlene Konzepte für den Einstieg in diese Wissensbasis.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Zentrale Konzepte',
      html: `<a href="/aied/concepts/ai-literacy/">KI-Kompetenz</a>, <a href="/aied/concepts/misconceptions/">Missverständnisse über KI</a>, <a href="/aied/concepts/agentic-ai/">agentische KI</a>, <a href="/aied/concepts/cognitive-offloading/">kognitive Entlastung</a> und <a href="/aied/concepts/interpreting-and-applying-aied-research/">wie man diese Forschung liest und anwendet</a>: was die Ergebnisse stützen können und was nicht, und warum eine einzelne Studie eine Frage selten klärt.`,
    },
    {
      id: 'instructors',
      heading: 'Lehrende',
      html: `<a href="/aied/concepts/teacher-role/">Die sich wandelnde Rolle der Lehre</a>, <a href="/aied/concepts/learning-design/">Lerndesign</a>, <a href="/aied/concepts/assessment/">Prüfen und Bewerten</a>, <a href="/aied/concepts/feedback/">Feedback</a>, <a href="/aied/concepts/academic-integrity/">akademische Integrität</a>, <a href="/aied/concepts/framing-ai-use-for-students/">die KI-Nutzung für Studierende einordnen</a> und <a href="/aied/concepts/reducing-ai-misuse/">Missbrauch reduzieren</a>. Zu Werkzeugen, Belegen und Beispielen in Ihrem eigenen Fach siehe <a href="/aied/concepts/discipline-specific-aied/">KI in Ihrem eigenen Fach</a>.`,
    },
    {
      id: 'developers',
      heading: 'Entwicklerinnen und Entwickler',
      html: `<a href="/aied/concepts/educational-technology-developers/">Für die Bildung entwickeln</a>, <a href="/aied/concepts/ai-technologies/">die zugrunde liegenden Technologien</a>, <a href="/aied/concepts/intelligent-tutoring/">intelligentes Tutoring</a>, <a href="/aied/concepts/multimodal/">multimodale KI</a>, <a href="/aied/concepts/student-modeling/">Lernendenmodellierung</a> und <a href="/aied/concepts/pedagogical-llm-training/">ein Modell für das Lehren trainieren und anpassen</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administratorinnen und Administratoren',
      html: `<a href="/aied/concepts/administrator/">Die Rolle der Administration</a>, <a href="/aied/concepts/governance/">KI-Governance</a>, <a href="/aied/concepts/educational-policy-ai/">institutionelle Richtlinien</a>, <a href="/aied/concepts/legal-issues-and-risks/">rechtliche Fragen und Risiken</a> und <a href="/aied/concepts/change-management/">Change-Management</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Forschende',
      html: `<a href="/aied/concepts/research-methods-aied/">Forschungsmethoden in der AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">Theorien und Rahmenwerke</a>, <a href="/aied/concepts/ai-ed-evaluation/">die Bewertung einer KI-Intervention in der Bildung</a>, <a href="/aied/concepts/educational-measurement/">Bildungsmessung</a>, <a href="/aied/concepts/learning-gains/">die Messung von Lernzuwächsen</a> und die <a href="/aied/concepts/limitations-in-aied-research/">übergreifenden Grenzen dieser Evidenzbasis</a>.`,
    },
  ],
  statsHeading: 'Was in der Wissensbasis enthalten ist',
  statsIntro:
    'Jede Seite ist datiert, und die Wissensbasis wächst, während neue Open-Access-Forschung veröffentlicht und geprüft wird. Die Zahlen unten stammen aus dem aktuellen Bestand; das Datum ist die jüngste Aktualisierung einer Seite.',
  toc: [
    { text: 'Orientierung auf der Website', slug: 'navigating-the-site', depth: 2 },
    { text: 'Mit der Wissensbasis chatten', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Empfohlene Einstiegspunkte nach Zielgruppe', slug: 'starting-points', depth: 2 },
    { text: 'Zentrale Konzepte', slug: 'essential-concepts', depth: 3 },
    { text: 'Lehrende', slug: 'instructors', depth: 3 },
    { text: 'Entwicklerinnen und Entwickler', slug: 'developers', depth: 3 },
    { text: 'Administratorinnen und Administratoren', slug: 'administrators', depth: 3 },
    { text: 'Forschende', slug: 'researchers', depth: 3 },
    { text: 'Was in der Wissensbasis enthalten ist', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default de;