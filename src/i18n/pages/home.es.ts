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
  /** Home page concept map: node labels are looked up by concept slug. */
  conceptMap: {
    title: string;
    desc: string;
    navLabel: string;
    center: string;
    nodes: Record<string, string>;
  };
}

const en: HomeStrings = {
  title: 'Inicio',
  h1: 'Base de conocimiento sobre IA en la educación',
  introHtml: `Te damos la bienvenida a la Base de conocimiento sobre IA en la educación, un recurso gratuito y de dominio público sobre <a href="/aied/concepts/ai-education/">inteligencia artificial en la educación</a> para quienes enseñan, estudian, diseñan o administran este campo. Resume y sintetiza investigación educativa reciente de acceso abierto. Un agente de IA escribe y actualiza las páginas con la orientación editorial del desarrollador del sitio.`,
  navHeading: 'Cómo navegar por el sitio',
  navHtml: `Consulta en la barra lateral izquierda el índice, organizado por líneas temáticas, o <a href="/aied/search">busca</a> un tema. Las páginas de artículo condensan un trabajo en su propósito, sus métodos y sus hallazgos; las páginas de concepto reúnen lo que dice la investigación sobre una idea y enlazan los estudios en los que se basa. Para partir de una pregunta, las <a href="/aied/faq">preguntas frecuentes</a> cubren lo que más se consulta, como la política de IA de un curso o si conviene usar detectores de IA. Para partir de una herramienta, la <a href="/aied/resources">página de recursos</a> enumera herramientas y colecciones gratuitas, con quién creó cada una y cuánto cuesta. El mapa de arriba agrupa el campo en doce líneas temáticas, con <a href="/aied/concepts/ai-education/">AI in Education</a> como nodo central.`,
  chatHeading: 'Conversa con la base de conocimiento',
  chatHtml: `Toda la base de conocimiento también se publica como archivos legibles por máquina, así que puedes apuntar un chatbot o agente de IA a ella y obtener respuestas que citan las páginas. <a href="/aied/ai">Los prompts están aquí</a>. Las páginas nuevas pasan al <a href="/aied/journal">diario</a>, que tiene una <a href="/aied/rss.xml">fuente RSS</a>. Para leer sin conexión, descarga el <a href="/aied/aied.epub">EPUB</a> o el <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Puntos de partida recomendados según el perfil',
  startingIntro: 'Empieza por el grupo que corresponde a tu perfil.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Conceptos esenciales',
      html: `<a href="/aied/concepts/ai-literacy/">Alfabetización en IA</a>, <a href="/aied/concepts/misconceptions/">ideas erróneas sobre la IA</a>, <a href="/aied/concepts/agentic-ai/">IA agéntica</a>, <a href="/aied/concepts/cognitive-offloading/">descarga cognitiva</a> y <a href="/aied/concepts/interpreting-and-applying-aied-research/">cómo interpretar y aplicar esta investigación</a>, incluido por qué un solo estudio rara vez resuelve una pregunta.`,
    },
    {
      id: 'instructors',
      heading: 'Docentes',
      html: `<a href="/aied/concepts/teacher-role/">El papel cambiante de la docencia</a>, <a href="/aied/concepts/learning-design/">diseño del aprendizaje</a>, <a href="/aied/concepts/assessment/">evaluación</a>, <a href="/aied/concepts/feedback/">retroalimentación</a>, <a href="/aied/concepts/academic-integrity/">integridad académica</a>, <a href="/aied/concepts/framing-ai-use-for-students/">cómo enmarcar el uso de la IA</a> y <a href="/aied/concepts/reducing-ai-misuse/">cómo reducir el mal uso</a>. Para herramientas y ejemplos específicos de tu materia, consulta <a href="/aied/concepts/discipline-specific-aied/">la IA en tu disciplina</a>.`,
    },
    {
      id: 'developers',
      heading: 'Desarrolladores',
      html: `<a href="/aied/concepts/educational-technology-developers/">Construir para la educación</a>, <a href="/aied/concepts/ai-technologies/">las tecnologías subyacentes</a>, <a href="/aied/concepts/intelligent-tutoring/">la tutoría inteligente</a>, <a href="/aied/concepts/multimodal/">la IA multimodal</a>, <a href="/aied/concepts/student-modeling/">el modelado de estudiantes</a> y <a href="/aied/concepts/llm-training-and-fine-tuning/">entrenar y adaptar un modelo para la enseñanza</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Administradores',
      html: `<a href="/aied/concepts/administrator/">El papel de la administración</a>, <a href="/aied/concepts/governance/">la gobernanza de la IA</a>, <a href="/aied/concepts/educational-policy-ai/">la política institucional</a>, <a href="/aied/concepts/legal-issues-and-risks/">las cuestiones legales y los riesgos</a> y <a href="/aied/concepts/change-management/">la gestión del cambio</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Investigadores',
      html: `<a href="/aied/concepts/research-methods-aied/">Métodos de investigación en AIED</a>, <a href="/aied/concepts/theories-and-frameworks/">teorías y marcos</a>, <a href="/aied/concepts/ai-ed-evaluation/">evaluar una intervención de IA en la educación</a>, <a href="/aied/concepts/educational-measurement/">medición educativa</a>, <a href="/aied/concepts/learning-gains/">medir las mejoras en el aprendizaje</a> y los <a href="/aied/concepts/limitations-in-aied-research/">límites transversales de este corpus de evidencia</a>.`,
    },
  ],
  statsHeading: 'Qué contiene la base de conocimiento',
  statsIntro:
    'Todas las páginas indican su fecha, y los recuentos de abajo reflejan lo que está publicado ahora mismo; la fecha de "última actualización" al final de la lista es la edición más reciente.',
  conceptMap: {
    title: 'Mapa conceptual de la IA en la educación',
    desc:
      'Un mapa radial con la IA en la educación en el centro, conectado a doce conceptos de primer nivel: ' +
      'Modelado, Aprendizaje, Equidad, Retroalimentación, Alfabetización IA, Evaluación, Disciplinas, ' +
      'Pedagogía, Ética, Tecnologías, Evaluación IAED e Investigación.',
    navLabel: 'Conceptos de IA en la educación',
    center: 'IA en la educación',
    nodes: {
      'student-modeling': 'Modelado',
      'learning-theories': 'Aprendizaje',
      'equity-in-ai-education': 'Equidad',
      feedback: 'Retroalimentación',
      'ai-literacy': 'Alfabetización IA',
      assessment: 'Evaluación',
      'discipline-specific-aied': 'Disciplinas',
      pedagogy: 'Pedagogía',
      ethics: 'Ética',
      'ai-technologies': 'Tecnologías',
      'ai-ed-evaluation': 'Evaluación IAED',
      'research-methods-aied': 'Investigación',
    },
  },
  toc: [
    { text: 'Cómo navegar por el sitio', slug: 'navigating-the-site', depth: 2 },
    { text: 'Conversa con la base de conocimiento', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Puntos de partida recomendados según el perfil', slug: 'starting-points', depth: 2 },
    { text: 'Conceptos esenciales', slug: 'essential-concepts', depth: 3 },
    { text: 'Docentes', slug: 'instructors', depth: 3 },
    { text: 'Desarrolladores', slug: 'developers', depth: 3 },
    { text: 'Administradores', slug: 'administrators', depth: 3 },
    { text: 'Investigadores', slug: 'researchers', depth: 3 },
    { text: 'Qué contiene la base de conocimiento', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default en;