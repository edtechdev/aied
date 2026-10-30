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

const es: FaqStrings = {
  title: 'Preguntas frecuentes',
  h1: 'Preguntas frecuentes',
  introHtml:
    'Esta sección responde a preguntas habituales sobre la <strong>IA en la educación</strong>: qué dice la investigación sobre cómo la IA afecta a la enseñanza y al aprendizaje, y cómo el profesorado, los instructores y los diseñadores instruccionales pueden llevar esa evidencia a la práctica. Cada respuesta sintetiza los hallazgos de la investigación resumida en esta base de conocimiento y conecta la pregunta con los conceptos y los artículos pertinentes para seguir leyendo.',
  assistantHtml:
    '¿Tienes una pregunta que no se responde aquí? Pregúntale a tu propio asistente de IA con la página <a href="/aied/ai">Usa esta base de conocimiento con tu propio asistente de IA</a>, que muestra cómo apuntar un agente al catálogo completo para obtener respuestas fundamentadas y con citas.',
  empty: 'Todavía no hay preguntas frecuentes.',
  sectionHeadings: {
    "Start here": "Empieza aquí",
    "Course and institutional policy": "Política de curso e institución",
    "Designing courses and activities": "Diseño de cursos y actividades",
    "Assessment, feedback and integrity": "Evaluación, retroalimentación e integridad",
    "How students learn and use AI": "Aprendizaje y uso de la IA",
    "Particular learners, access and wellbeing": "Diversidad, acceso y bienestar",
    "Careers and AI literacy": "Carreras y alfabetización en IA",
    "Building and evaluating educational AI": "Crear y evaluar IA educativa",
    "Research practice": "Práctica investigadora",
  },
  sectionBlurbs: {
    "Start here": "Dos preguntas amplias que conviene leer antes de las específicas, sea cual sea tu rol.",
    "Course and institutional policy": "Para el profesorado que redacta las normas que leerá el estudiantado, y para la administración y los equipos de desarrollo profesional docente que las fijan a nivel de programa.",
    "Designing courses and activities": "Para quien decide dónde entra la IA en una tarea, un semestre o un curso en línea, y para el profesorado que quiere recuperar el tiempo que la IA debía ahorrarle.",
    "Assessment, feedback and integrity": "El grupo más grande, porque aquí es donde la evidencia es más nítida y donde las consecuencias recaen sobre el expediente académico del estudiante.",
    "How students learn and use AI": "Para las preguntas sobre lo que el estudiantado gana de verdad, lo que arriesga perder y cómo mantener el aprendizaje en sus manos.",
    "Particular learners, access and wellbeing": "Para el profesorado y el personal de apoyo que adapta el diseño a quien realmente está en el aula, y para la administración que piensa en quien no está.",
    "Careers and AI literacy": "Para diseñadores curriculares y responsables de programa que responden al estudiantado que pregunta para qué sirve todo esto.",
    "Building and evaluating educational AI": "Para desarrolladores, diseñadores instruccionales e investigadores que llevan un tutor, una simulación o una plataforma a un curso real.",
    "Research practice": "Para investigadores que informan, revisan o planifican trabajo en este campo.",
  },
};

export default es;