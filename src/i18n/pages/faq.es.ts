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
}

const es: FaqStrings = {
  title: 'Preguntas frecuentes',
  h1: 'Preguntas frecuentes',
  introHtml:
    'Esta sección responde a preguntas habituales sobre la <strong>IA en la educación</strong>: qué dice la investigación sobre cómo la IA afecta a la enseñanza y al aprendizaje, y cómo el profesorado, los instructores y los diseñadores instruccionales pueden llevar esa evidencia a la práctica. Cada respuesta sintetiza los hallazgos de la investigación resumida en esta base de conocimiento y conecta la pregunta con los conceptos y los artículos pertinentes para seguir leyendo.',
  assistantHtml:
    '¿Tienes una pregunta que no se responde aquí? Pregúntale a tu propio asistente de IA con la página <a href="/aied/ai">Usa esta base de conocimiento con tu propio asistente de IA</a>, que muestra cómo apuntar un agente al catálogo completo para obtener respuestas fundamentadas y con citas.',
  empty: 'Todavía no hay preguntas frecuentes.',
};

export default es;