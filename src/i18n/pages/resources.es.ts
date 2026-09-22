/**
 * Copy for the resources index page (`/aied/resources`). The list itself is built
 * from the `resources` collection, which stays in English until those pages are
 * translated; the labels here are what a reader sees above it.
 */
export interface ResourcesStrings {
  /** <title> for the page. */
  title: string;
  /** The page heading. */
  h1: string;
  /** Intro paragraphs, in order. May contain inline HTML. */
  introHtml: string[];
  /** Shown when the collection is empty. */
  empty: string;
  /** Group heading per `resource_type` slug. */
  groupLabels: Record<string, string>;
}

const es: ResourcesStrings = {
  title: 'Recursos',
  h1: 'Herramientas y recursos gratuitos',
  introHtml: [
    'Una selección de <strong>herramientas, colecciones, instrumentos y formatos gratuitos</strong> para la IA en la educación: cosas que puedes ir a usar hoy mismo en lugar de investigación que primero hay que leer. Las crean sobre todo docentes, diseñadores instruccionales, bibliotecarios e investigadores, y muchas se construyeron con ayuda de la IA por personas que no son desarrolladoras profesionales.',
    'No todo lo que hay aquí es interactivo. Junto a las herramientas de navegador y los tutores de IA encontrarás bibliotecas de prompts y "gems" ya preparados, colecciones de actividades para el aula, documentos informativos y de política, instrumentos de evaluación y formatos de archivo abiertos. Cada entrada es un resumen breve que enlaza a una página donde se indica quién lo hizo, de qué tipo de cosa se trata, si el código fuente está disponible, cuánto cuesta usarlo y cuándo se comprobó su enlace por última vez.',
    'Todas las entradas enlazan a un sitio externo que esta base de conocimiento no controla, y los enlaces se vuelven a revisar periódicamente: cada página muestra la fecha de la última comprobación de su enlace. Si una herramienta ha cambiado de dirección, ha cerrado o merece estar aquí y falta, la vía más rápida es abrir una incidencia en el repositorio.',
  ],
  empty: 'Todavía no hay recursos.',
  groupLabels: {
    software: 'Software',
    'ai tutor': 'Tutores de IA',
    'agent skill': 'Habilidades de agente',
    'prompt or gem library': 'Bibliotecas de prompts y gems',
    'collection of tools': 'Colecciones de herramientas',
    'collection of activities': 'Colecciones de actividades',
    'assessment instrument': 'Instrumentos de evaluación',
    'open format or specification': 'Formatos y especificaciones abiertos',
    'ebook or guide': 'Libros electrónicos y guías',
    'case study collection': 'Colecciones de estudios de caso',
    'dataset or benchmark': 'Conjuntos de datos y benchmarks',
  },
};

export default es;