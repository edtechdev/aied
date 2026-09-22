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

const en: HomeStrings = {
  title: 'Inicio',
  h1: 'AI in Education Knowledge Base',
  introHtml: `Te damos la bienvenida a la <strong>AI in Education Knowledge Base</strong>, un recurso gratuito y de dominio público sobre <a href="/aied/concepts/ai-education/">inteligencia artificial en la educación</a>, pensado para quienes enseñan, estudian, diseñan o administran este campo. Condensa investigación reciente de acceso abierto en páginas breves y estructuradas que puedes leer y aplicar. Una nota sobre cómo se elabora: las páginas las genera y actualiza un agente de IA, con la orientación editorial del desarrollador del sitio. Cada afirmación indica el trabajo en el que se basa, así que las fuentes están ahí para consultarlas.`,
  navHeading: 'Cómo navegar por el sitio',
  navHtml: `Consulta en la barra lateral izquierda el índice por líneas temáticas para ver cómo se organiza el campo, o <a href="/aied/search">busca</a> en toda la base de conocimiento si ya tienes un tema en mente. Las páginas de artículo condensan un trabajo en su propósito, sus métodos y sus hallazgos, con la cita completa y enlaces a trabajos relacionados; las páginas de concepto reúnen lo que dice la investigación sobre una idea y enlazan los estudios en los que se basa. Si prefieres partir de una pregunta, el <a href="/aied/faq">índice de preguntas frecuentes</a> reúne las que más se consultan, desde la política de IA de un curso hasta si conviene usar detectores de IA; si prefieres partir de una herramienta, la <a href="/aied/resources">página de recursos</a> enumera herramientas, colecciones e instrumentos gratuitos que puedes usar, indicando en cada caso quién los creó y cuánto cuestan. El mapa conceptual de arriba muestra qué se conecta con qué; <a href="/aied/concepts/ai-education/">AI in Education</a> es la página de mapa que hay detrás, que agrupa los conceptos en una docena aproximada de líneas generales.`,
  chatHeading: 'Conversa con la base de conocimiento',
  chatHtml: `Todo lo que hay aquí también se publica como archivos legibles por máquina, así que puedes apuntar tu chatbot o agente de IA preferido a la base de conocimiento y obtener respuestas que la citan en lugar de improvisar: <a href="/aied/ai">los prompts están aquí</a>. Las páginas nuevas aparecen en el <a href="/aied/journal">diario</a>, que tiene una <a href="/aied/rss.xml">fuente RSS</a> si quieres seguirlo. Para leer sin conexión, descarga el <a href="/aied/aied.epub">EPUB</a> o el <a href="/aied/aied.pdf">PDF</a>.`,
  startingHeading: 'Puntos de partida recomendados según el perfil',
  startingIntro: 'A continuación se recogen algunos conceptos recomendados para empezar en esta base de conocimiento.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Conceptos esenciales',
      html: `<a href="/aied/concepts/ai-literacy/">Alfabetización en IA</a>, <a href="/aied/concepts/misconceptions/">ideas erróneas sobre la IA</a>, <a href="/aied/concepts/agentic-ai/">IA agéntica</a>, <a href="/aied/concepts/cognitive-offloading/">descarga cognitiva</a> y <a href="/aied/concepts/interpreting-and-applying-aied-research/">cómo interpretar y aplicar esta investigación</a>: qué pueden respaldar los hallazgos y qué no, y por qué un solo estudio rara vez resuelve una pregunta.`,
    },
    {
      id: 'instructors',
      heading: 'Docentes',
      html: `<a href="/aied/concepts/teacher-role/">El papel cambiante de la docencia</a>, <a href="/aied/concepts/learning-design/">diseño del aprendizaje</a>, <a href="/aied/concepts/assessment/">evaluación</a>, <a href="/aied/concepts/feedback/">retroalimentación</a>, <a href="/aied/concepts/academic-integrity/">integridad académica</a>, <a href="/aied/concepts/framing-ai-use-for-students/">cómo enmarcar el uso de la IA</a> y <a href="/aied/concepts/reducing-ai-misuse/">cómo reducir el mal uso</a>. Para las herramientas, la evidencia y los ejemplos de tu propia materia, consulta <a href="/aied/concepts/discipline-specific-aied/">la IA en tu disciplina</a>.`,
    },
    {
      id: 'developers',
      heading: 'Desarrolladores',
      html: `<a href="/aied/concepts/educational-technology-developers/">Construir para la educación</a>, <a href="/aied/concepts/ai-technologies/">las tecnologías subyacentes</a>, <a href="/aied/concepts/intelligent-tutoring/">la tutoría inteligente</a>, <a href="/aied/concepts/multimodal/">la IA multimodal</a>, <a href="/aied/concepts/student-modeling/">el modelado de estudiantes</a> y <a href="/aied/concepts/pedagogical-llm-training/">entrenar y adaptar un modelo para la enseñanza</a>.`,
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
    'Todas las páginas indican su fecha, y la base de conocimiento crece a medida que se publica y se revisa investigación nueva de acceso abierto. Los recuentos que aparecen abajo se leen del contenido actual; la fecha corresponde a la última actualización de una página.',
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