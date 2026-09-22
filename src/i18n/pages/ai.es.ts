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

const PROMPT = `Eres un asistente de investigación sobre IA en la educación. Usa la AI in Education Knowledge Base (https://edtechdev.github.io/aied/) como fuente principal.

1. Elige la ruta antes de leer. El índice de preguntas frecuentes en https://edtechdev.github.io/aied/faq/ asigna cada pregunta a las páginas que la responden, incluidas las preguntas del tipo "qué muestra la investigación". El catálogo completo en https://edtechdev.github.io/aied/llms.txt ocupa unos 800 KB, el archivo de conceptos y preguntas frecuentes en https://edtechdev.github.io/aied/llms-concepts.txt ocupa unos 4 MB, y llms-full.txt ocupa varios megabytes, así que búscalos o descarga partes en lugar de cargarlos enteros, y no dejes que un intento fallido de descargar el archivo completo te detenga.

2. Fundamenta cada afirmación en una página y cítala con el título de la página seguido de su URL. Cuando la página incluya la cita del trabajo original y su DOI, añádelos; algunas páginas solo citan un identificador de arXiv o una URL de la editorial, así que da lo que da la página y nunca inventes un DOI, una URL, un autor, una cifra ni un hallazgo.

3. Sintetiza la información de varias páginas en lugar de apoyarte en una sola. Las páginas de concepto ofrecen la visión general y enlazan los artículos en los que se basan, así que sigue esos enlaces. Lee entre tres y cinco de las páginas más relevantes, detente cuando empiecen a repetir los mismos estudios y di qué no has leído. Si la base de conocimiento solo trata el tema en un campo vecino, dilo y responde por analogía.

4. Ajusta la respuesta a la fuerza de la evidencia. Los experimentos controlados o aleatorizados que miden el rendimiento sin ayuda son los más sólidos; después, los metaanálisis ajustados por sesgo de publicación; luego, las revisiones; y por último, los estudios piloto, los análisis de políticas y las opiniones; un solo estudio pequeño no es consenso. Las etiquetas, el público destinatario, el nivel y las valoraciones de confianza están en el código Markdown de cada página, en https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, no en la página tal como se muestra, así que si no puedes consultarlos, júzgalos por cómo describe el estudio el artículo e indica que eso es lo que has hecho.

5. Responde al nivel que pide la pregunta y termina recomendando las páginas y las preguntas frecuentes más relevantes.

Prefiere el término "IA generativa" antes que "LLM". La base de conocimiento se actualiza con regularidad, y la página del diario en https://edtechdev.github.io/aied/journal/ enumera las novedades más recientes.

Ejemplo: "¿Qué dice la investigación sobre la retroalimentación con IA para la escritura del estudiantado?" Consulta el índice de preguntas frecuentes, lee las páginas más relevantes sobre escritura y retroalimentación junto con los estudios que citan, y responde con citas y enlaces.`;

const en: AiStrings = {
  title: 'Usa esta base de conocimiento con tu propio asistente de IA',
  description: 'Prompt para copiar y pegar que permite usar la AI in Education Knowledge Base con tu propio chatbot o agente.',
  h1: 'Usa esta base de conocimiento con tu propio asistente de IA',
  introHtml: `Puedes apuntar tu chatbot o agente de IA preferido a esta base de conocimiento para que responda a partir de estas páginas de investigación en lugar de improvisar. El prompt que aparece abajo cumple esa función. Cópialo, pégalo en tu asistente como primer mensaje y haz tu pregunta. Deberías obtener una respuesta que nombra las páginas en las que se ha basado y enlaza a ellas, para que puedas comprobar las fuentes por tu cuenta.`,
  intro2Html: `No hace falta ninguna configuración técnica ni instalar nada. Si prefieres saltarte la configuración por completo, hay <a href="#ready-made-assistants">asistentes ya preparados</a> que conocen este material.`,
  promptHeading: 'El prompt que hay que copiar',
  promptIntro: 'Pega esto primero, antes de tu pregunta. Funciona con cualquier chatbot o agente que pueda leer una página web o aceptar un documento pegado. El cuadro tiene barra de desplazamiento y el botón copia todo el texto.',
  copyButton: '📋 Copiar el prompt al portapapeles',
  copyHint: 'Después pégalo en tu asistente y haz tu pregunta.',
  copyOk: '✅ ¡Copiado!',
  copyFail: '❌ No se pudo copiar',
  promptAriaLabel: 'Prompt para copiar',
  promptText: PROMPT,
  howHeading: 'Cómo usarlo',
  howSteps: [
    '<strong>Copia el prompt</strong> con el botón de arriba.',
    '<strong>Pégalo en tu asistente</strong> como primer mensaje y envíalo. Lo normal es que responda que lo ha entendido.',
    '<strong>Haz tu pregunta</strong> en lenguaje sencillo, por ejemplo "¿qué dice la investigación sobre la retroalimentación con IA en clases numerosas?" o "¿deberíamos usar detectores de IA?"',
    '<strong>Comprueba los enlaces.</strong> Una buena respuesta nombra las páginas que ha usado. Si recibes afirmaciones tajantes sin ninguna página, responde "¿de qué página sale eso?" y pídele que lo intente de nuevo.',
  ],
  howNoteHtml: `Esto funciona mejor en asistentes que pueden navegar por la web, porque el prompt les indica páginas que leer. Si el tuyo no puede abrir enlaces, en lugar de pegar el prompt solo, adjunta también el texto de la base de conocimiento: <a href="/aied/llms-full.txt">descarga el archivo de texto completo</a> una vez, súbelo o pégalo en la conversación y usa el prompt junto con él. Es un único archivo de texto de unos 15 MB. Muchos productos de chat rechazan un archivo de ese tamaño, así que también existe <a href="/aied/llms-concepts.txt">llms-concepts.txt</a>, con todas las páginas de concepto y de preguntas frecuentes completas, unos 4 MB, que es el archivo al que conviene recurrir primero: los conceptos son las síntesis de lo que muestra la investigación, las preguntas frecuentes son las preguntas que esas síntesis responden, y cada página de concepto enlaza los trabajos en los que se basa.`,
  techSummary: 'Notas técnicas para herramientas que prefieren una URL en lugar de un prompt',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: un catálogo de todas las páginas, con una línea por página, para herramientas que indexan un sitio antes de leerlo',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: el texto completo de la base de conocimiento en un solo archivo, unos 15 MB',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: el texto completo de las páginas de concepto y de preguntas frecuentes, unos 4 MB, para herramientas y chats que rechazan el archivo más grande',
    '<a href="/aied/sitemap-index.xml">Mapa del sitio</a>: todas las direcciones de las páginas',
    '<a href="/aied/rss.xml">Fuente RSS</a>: páginas nuevas y actualizadas',
  ],
  assistantsHeading: 'Asistentes ya preparados',
  assistantsIntro: 'Si prefieres no configurar nada, esta base de conocimiento también está disponible como asistente ya preparado:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, un <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a> que responde a partir de esta base de conocimiento. Sus <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">instrucciones personalizadas</a> son públicas, y se creó a partir de una <strong>copia estática</strong> de la base de conocimiento, así que puede ir por detrás de las páginas más recientes.',
    '<strong>Cuaderno de NotebookLM</strong>, un <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">cuaderno de Google NotebookLM</a> creado con el mismo material, con informes, infografías, un pódcast y diapositivas generados automáticamente, y <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">un vídeo</a>.',
  ],
  corpusHeading: 'Qué contiene la base de conocimiento',
  corpusHtml1: `Más de mil resúmenes de investigación abarcan la tutoría y los tutores de IA, la evaluación y la retroalimentación, la integridad académica, la alfabetización en IA, el desarrollo profesional del profesorado, la equidad y la accesibilidad, la privacidad, las políticas y la gobernanza, y temas de ciencias del aprendizaje como la descarga cognitiva y la motivación del estudiantado. Cada resumen termina con la cita completa y un enlace al trabajo original, de modo que tu asistente puede transmitir la referencia y tú puedes consultarla.`,
  corpusHtml2: `Tres tipos de página responden a preguntas distintas: las <strong>páginas de concepto</strong> resumen lo que dice la investigación sobre una idea y enlazan los estudios en los que se basa, las <strong>páginas de artículo</strong> tratan un trabajo cada una, y las <strong>preguntas frecuentes</strong> responden a dudas prácticas del profesorado y de la administración. Si quieres una visión general de un tema, pide una página de concepto; si quieres la evidencia, pide los estudios.`,
  answeredHeading: 'Preguntas que ya tienen respuesta',
  answeredIntro: 'Muchas de las preguntas que la gente plantea primero a una IA ya están respondidas aquí a mano, con la investigación adjunta:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: '¿Cómo redacto una política de IA para un curso y la comunico al estudiantado?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: '¿Cómo puedo reducir las trampas con IA en mi curso?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: '¿Deberíamos usar detectores de IA?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: '¿Cómo debería rediseñarse la evaluación para la era de la IA?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: '¿Cómo evito que el estudiantado dependa demasiado de la IA?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: '¿Cómo redactamos y aplicamos una política institucional de IA?' },
  ],
  answeredOutroHtml: `Merece la pena consultar la <a href="/aied/faq/">lista completa de preguntas frecuentes</a> antes de preguntar, y el prompt indica a tu asistente que revise esa lista primero.`,
  offlineHeading: 'Leer la base de conocimiento sin conexión',
  offlineHtml: `También puedes descargar la base de conocimiento en <a href="/aied/aied.epub">EPUB</a> o <a href="/aied/aied.pdf">PDF</a> para un lector de libros electrónicos, un teléfono, una tableta o un ordenador. Estas ediciones sin conexión contienen las páginas de concepto y las preguntas frecuentes, no los varios cientos de resúmenes de artículos.`,
  toc: [
    { text: 'El prompt que hay que copiar', slug: 'the-prompt', depth: 2 },
    { text: 'Cómo usarlo', slug: 'how-to-use-it', depth: 2 },
    { text: 'Asistentes ya preparados', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Qué contiene la base de conocimiento', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Preguntas que ya tienen respuesta', slug: 'already-answered', depth: 2 },
    { text: 'Leer la base de conocimiento sin conexión', slug: 'read-offline', depth: 2 },
  ],
};

export default en;