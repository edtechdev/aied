/**
 * Copy for the FAQ index page (`/aied/faq`). The questions themselves come from
 * the `faqs` collection.
 */
export interface FaqStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraph. May contain inline HTML and links. */
  introHtml: string;
  /** Second intro paragraph, pointing at the bring-your-own-assistant page. */
  assistantHtml: string;
  /** Shown when the collection is empty. */
  empty: string;
  /**
   * Optional localized labels for the FAQ index sections, keyed by the English heading
   * from src/data/faqIndex.ts. Omitting one falls back to the English heading.
   */
  sectionHeadings?: Record<string, string>;
  /** Optional localized section blurbs, keyed the same way. */
  sectionBlurbs?: Record<string, string>;
}

const de: FaqStrings = {
  title: 'FAQ',
  h1: 'Häufig gestellte Fragen',
  introHtml:
    'Dieser Abschnitt beantwortet häufige Fragen zu <strong>KI in der Bildung</strong> – dazu, was die Forschung über die Wirkung von KI auf Lehren und Lernen sagt und wie Lehrende, Dozierende und Instructional Designer diese Belege in die Praxis umsetzen können. Jede Antwort verdichtet Ergebnisse der Forschung, die in dieser Wissensbasis zusammengefasst ist, und verknüpft die Frage mit den relevanten Konzepten und Artikeln für eine vertiefte Lektüre.',
  assistantHtml:
    'Sie haben eine Frage, die hier nicht beantwortet wird? Stellen Sie sie Ihrem eigenen KI-Assistenten mit der Seite <a href="/aied/ai">Diese Wissensbasis mit Ihrem eigenen KI-Assistenten nutzen</a>, die zeigt, wie Sie einen Agenten auf den vollständigen Katalog richten, um belegte Antworten mit Quellenangaben zu erhalten.',
  empty: 'Noch keine FAQs.',
  sectionHeadings: {
    "Start here": "Hier starten",
    "Course and institutional policy": "Kurs- und Hochschulpolitik",
    "Designing courses and activities": "Kurse und Aktivitäten gestalten",
    "Assessment, feedback and integrity": "Bewertung, Feedback und Integrität",
    "How students learn and use AI": "Lernen und Nutzen von KI",
    "Particular learners, access and wellbeing": "Vielfalt, Zugang und Wohlbefinden",
    "Careers and AI literacy": "Berufswege und KI-Kompetenz",
    "Building and evaluating educational AI": "Bildungs-KI bauen und bewerten",
    "Research practice": "Forschungspraxis",
  },
  sectionBlurbs: {
    "Start here": "Zwei übergreifende Fragen, die sich vor den speziellen Fragen lohnen, unabhängig von Ihrer Rolle.",
    "Course and institutional policy": "Für Lehrende, die die Regeln schreiben, die Studierende lesen, und für Hochschulleitungen und Fakultätsentwicklung, die sie auf Programmebene festlegen.",
    "Designing courses and activities": "Für alle, die entscheiden, wo KI in eine Aufgabe, ein Semester oder einen Onlinekurs eintritt, und für Lehrende, die die Zeit zurückwollen, die KI ihnen eigentlich sparen sollte.",
    "Assessment, feedback and integrity": "Der größte Block, weil hier die Belege am schärfsten sind und die Folgen im Studienverlauf landen.",
    "How students learn and use AI": "Für Fragen dazu, was Studierende tatsächlich gewinnen, was sie zu verlieren riskieren und wie das Lernen bei ihnen bleibt.",
    "Particular learners, access and wellbeing": "Für Lehrende und Unterstützungspersonal, die die Gestaltung an die tatsächlich Anwesenden anpassen, und für Hochschulleitungen, die an die Abwesenden denken.",
    "Careers and AI literacy": "Für Verantwortliche der Curriculumsentwicklung und Programmleitungen, die Studierenden antworten, die fragen, wozu das alles gut ist.",
    "Building and evaluating educational AI": "Für Entwicklerinnen und Entwickler, Instructional Designer und Forschende, die einen Tutor, eine Simulation oder eine Plattform in einen echten Kurs bringen.",
    "Research practice": "Für Forschende, die in diesem Feld berichten, begutachten oder planen.",
  },
};

export default de;