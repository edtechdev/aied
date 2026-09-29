---
connected_resources: [drawsplat, fpds-apps-and-resources, id-toolbox, idstack]
title: Accesibilidad
created: "2026-09-28T19:10:33-04:00"
updated: "2026-09-28T19:10:33-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, ai-disabled-neurodivergent-learners]
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, universal-design-for-learning]
level: [special education]
confidence: high
translation_of: concepts/accessibility
source_updated: "2026-09-28T21:37:06-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Accesibilidad** — el diseño de la tecnología educativa, los contenidos y las interfaces para que puedan ser percibidos, operados y comprendidos por personas con discapacidad y necesidades diversas. En la [[ai-education|IA en la educación]], la accesibilidad abarca barreras concretas y operativas del *medio* de aprendizaje: subtítulos de vídeo, texto alternativo, transcripciones, compatibilidad con lectores de pantalla y con el teclado, contraste de color, simplificación de texto, salida táctil, apoyo en lengua de signos y compatibilidad con [[ai-technologies|tecnologías]] de asistencia.

## Preguntas para reflexionar

- Cuando diseñó o eligió por última vez una herramienta digital de aprendizaje, ¿comprobó si sus subtítulos, su texto alternativo, su navegación por teclado y su contraste de color funcionaban antes de considerar su [[pedagogy|pedagogía]]? ¿Por qué podría importar ese orden?
- Un vídeo con subtítulos precisos es «accesible», mientras que un curso que estructura la discusión en torno a las necesidades comunicativas de un estudiante sordo «apoya a ese estudiante». ¿Dónde trazaría la línea entre eliminar una barrera técnica y atender de forma significativa a un estudiante?
- [[research-methods-aied|La investigación]] muestra que los [[video-education|vídeos instructivos]] segmentados con IA y con pausas fijas eliminaron la brecha de rendimiento entre el [[learners|estudiantado]] con [[neurodiversity|TDAH]] y el estudiantado sin TDAH. ¿Recuerda algún «arreglo diseñado para un solo estudiante» que acabara beneficiando a todo el mundo en una clase en la que participó?
- Algunos sostienen que la accesibilidad es necesaria pero no suficiente: una herramienta accesible no es automáticamente inclusiva ni justa con la discapacidad. ¿Cuál es la diferencia entre poder usar una herramienta y recibir de ella una atención significativa?
- Muchas herramientas de IA se entrenan en gran medida con datos en inglés y centrados en Occidente. ¿Cómo podría eso limitar lo bien que sirven a quienes tienen la lengua de signos como primera lengua, o cuyas formas de conocer difieren de las mayoritarias?
- La IA puede automatizar la accesibilidad a escala: generar subtítulos, simplificar texto, producir salida táctil. ¿Qué querría verificar a mano antes de confiar en esa accesibilidad automatizada, y por qué?

## Introducción

La accesibilidad es distinta de, aunque está estrechamente relacionada con, tres conceptos vecinos de esta base de conocimiento. El **[[inclusive-learning|aprendizaje inclusivo]]** es el paraguas más amplio para diseñar una educación para toda la variabilidad del estudiantado (física, cognitiva, sensorial, situacional). La **[[special-education|educación especial]]** es el ámbito instruccional para quienes tienen discapacidades diagnosticadas, incluidas las adaptaciones individualizadas. El **[[universal-design-for-learning|diseño universal para el aprendizaje]]** es el marco de diseño proactivo (múltiples medios de [[student-engagement|implicación]], representación y acción/expresión). La **accesibilidad** se sitúa dentro de esta constelación como la *capa técnica y procedimental*: eliminar barreras para percibir y operar el formato, en lugar de rediseñar la pedagogía. Ambas cosas pueden separarse en un espectro: la accesibilidad pregunta «¿puede todo el mundo acceder a este contenido y a esta herramienta?», mientras que apoyar al estudiantado con discapacidad pregunta «¿sirve la instrucción de forma significativa a cada estudiante, incluidas las adaptaciones y el apoyo específico para la discapacidad?». Ambas importan, y la IA se cruza con las dos.

### Por qué importa la distinción

Un vídeo con subtítulos precisos y una transcripción correctamente etiquetada es *accesible*; un curso que estructura la discusión para incluir las preferencias comunicativas de un estudiante sordo *apoya a ese estudiante*. Se solapan —los medios accesibles son un requisito previo para la instrucción inclusiva—, pero exigen movimientos de diseño distintos y se apoyan en evidencia distinta. La accesibilidad se ancla en estándares y en la ley (WCAG, la [[assistive-technology|Ley de Tecnología de Asistencia]] de EE. UU. y la IDEA), mientras que el aprendizaje accesible y la educación especial se anclan en la pedagogía y en la [[student-experience|experiencia de quien aprende]].

### Grandes temas de investigación

**Accesibilidad del formato: subtítulos, transcripciones y texto.** Los **[[adhd-video-segmentation-computing-education|vídeos instructivos segmentados con IA]]** con pausas fijas eliminaron la brecha de rendimiento entre quienes tienen TDAH y quienes no: la accesibilidad como catalizador que beneficia a todos. **[[text-simplification-its|MuTSE]]** evalúa la [[intelligent-tutoring|simplificación de texto]] basada en [[llm|LLM]] para ajustar la complejidad del contenido al nivel de lectura de cada estudiante, una capa de accesibilidad [[human-in-the-loop-ai|con la persona en el bucle]]. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** construyen [[automated-question-generation|generación de preguntas]] con LLM para estudiantes sordos y con hipoacusia, afrontando el desajuste entre los prompts basados en texto y las lenguas de signos como primeras lenguas.

**Acceso sensorial: salida no visual y táctil.** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** convierte la conversación hablada en la modalidad principal para niños y niñas con discapacidad visual, eliminando la dependencia de lo visual. Los **[[tactile-statistical-graphs-accessibility|gráficos táctiles impresos en 3D]]** convierten datos estadísticos visuales en salida tangible para estudiantes ciegos y con baja visión. Los **[[pepper-robot-sign-language-lis-2025|robots de lengua de signos]]** extienden la [[educational-robotics|robótica educativa]] a la accesibilidad comunicativa para estudiantes sordos.

**[[generative-ai|IA generativa]] para estudiantes con discapacidad visual.** **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** —un estudio de caso [[qualitative-research|cualitativo]] con 21 [[higher-ed|estudiantes universitarios]] con discapacidad visual de tres universidades palestinas— encontraron que la IA generativa adapta el ritmo, el contenido y la presentación a perfiles de aprendizaje individuales y simplifica textos académicos complejos, además de convertir contenido entre modalidades (texto, audio, visual), haciendo utilizables materiales que antes eran inaccesibles. El estudiantado enmarcó la inmediatez como un requisito fundacional de accesibilidad y no como una comodidad, y seis atributos tecnológicos interdependientes —interactividad, facilidad de uso, asequibilidad, multimodalidad, integración y escalabilidad— determinaron si la IA generativa era genuinamente accesible en un [[global-south|contexto de bajos recursos]], con la [[usability-research|usabilidad]], la asequibilidad y la accesibilidad reforzándose mutuamente en lugar de ser consideraciones de diseño separadas.

**Política y adaptaciones para estudiantes con discapacidad.** **[[shin-ai-policies-sld-2026|Shin et al.]]** analizan documentos de política de IA de EE. UU. y revelan un vacío en la orientación para estudiantes con dificultades específicas de aprendizaje, y proponen adaptaciones y recomendaciones de [[educational-policy-ai|política]] fundamentadas en la [[assistive-technology|Ley de Tecnología de Asistencia]] y la IDEA. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]** hacen un metaanálisis de 29 estudios sobre intervenciones basadas en IA para estudiantes con discapacidad y encuentran un efecto positivo medio en los [[learning-gains|resultados de aprendizaje]] (g = 0,588), y sostienen que la IA debe hacer más que garantizar la accesibilidad: debe permitir una participación [[agency|agencial]].

**Prohibiciones de IA demasiado amplias y transcripción de asistencia.** **[[wright-transcription-not-generation-2026|Wright (2026)]]** sostiene que las prohibiciones generales del «uso de IA» son demasiado amplias porque no distinguen la transcripción de voz a texto y el OCR de la redacción generativa: las tecnologías de reconocimiento convierten el formato de un contenido que el estudiante ya había creado, en lugar de producir contenido nuevo, pero una política redactada en torno a la identidad de la plataforma captura ambas por igual. El estudiantado con afecciones que afectan al control motor fino, a la legibilidad de la escritura a mano o a la precisión al teclear —incluidas las condiciones del espectro autista, la dispraxia, la parálisis cerebral y las lesiones por esfuerzo repetitivo— ha dependido de la voz a texto y el OCR independientes, y los informes sugieren que varios productos autónomos de voz a texto se han retirado o degradado, dejando a la transcripción impulsada por IA cubrir ese hueco funcional. Tratar esa sustitución como mala conducta plantea dudas de equidad a la luz del deber de ajuste razonable de la Ley de Igualdad de 2010 del Reino Unido, del deber anticipatorio del sector público en materia de igualdad, de la Ley de Estadounidenses con Discapacidades de EE. UU. y de la Ley de Discriminación por Discapacidad de 1992 de Australia, aunque el artículo no afirma que esa caracterización se haya probado ante un tribunal. Señala que la intersección entre discapacidad, tecnología de asistencia y política de mala conducta con IA está poco explorada, que la escala de este desplazamiento no se ha medido y que la misma imprecisión produce un riesgo diferencial de falsos positivos, ya que los detectores leen el texto de baja perplejidad de quienes escriben en inglés como lengua no nativa como autoría de máquina. La exposición legal que crea esta inclusión excesiva se mapea en [[legal-issues-and-risks|cuestiones y riesgos legales]].

**IA para la dislexia: detección, apoyo y [[personalized-learning|aprendizaje personalizado]].** Una [[meta-analysis-systematic-review|revisión sistemática]] interdisciplinar de 2026 (Dabaghi, D'Urso y Sciarrone, guiada por PRISMA, 2018-2024, n=72) encuentra que la IA apoya a estudiantes con dislexia en la detección, el apoyo asistencial y el aprendizaje personalizado, pero con estas líneas evolucionando en paralelo en lugar de de forma integrada, impulsadas más por la oportunidad tecnológica que por una teoría educativa consolidada. Las herramientas de ayuda educativa basadas en aprendizaje automático abarcan cinco áreas (aplicaciones específicas, implicación, personalización, recomendación y apoyo genérico), pero enfatizan el rendimiento técnico y la precisión de clasificación y descuidan la validez ecológica y el despliegue práctico en el aula. La investigación sobre detección (EEG, seguimiento ocular, modelos de aprendizaje automático) muestra promesas diagnósticas para la intervención temprana, pero a menudo requiere equipos especializados y entornos controlados, lo que limita su escalabilidad y su accesibilidad en contextos escolares típicos. Entre los retos abiertos están la validación experimental limitada, la escalabilidad, las preocupaciones de [[ethics|ética]] y [[privacy|privacidad]] con datos sensibles del estudiantado, el apoyo y la formación limitados para el [[teacher-role|profesorado]] y las barreras lingüísticas y culturales (la mayoría de la investigación se dirige a poblaciones anglófonas), lo que refuerza que la accesibilidad debe estar validada, ser escalable y estar fundamentada éticamente, y no solo demostrada técnicamente.

**Los límites de la accesibilidad por sí sola.** El **[[genai-minoritized-knowledges-disability|trabajo crítico]]** advierte de que la IA entrenada con datos anglófonos y centrados en Occidente puede marginar formas de conocer centradas en la discapacidad. Los formatos accesibles no garantizan una instrucción inclusiva o justa, lo que refuerza que la accesibilidad es necesaria pero no suficiente y debe conectarse con la [[equity-in-ai-education|equidad en la educación con IA]].

## Implicaciones para la práctica

- **Priorice primero la barrera del formato.** Los subtítulos, las transcripciones, el texto alternativo, el contraste y la operabilidad con teclado son la capa que controla el acceso: sin ellos, nada más importa para quienes los necesitan.
- **Use la IA para automatizar la accesibilidad a escala.** La IA puede generar subtítulos, simplificar texto, producir alternativas táctiles o de audio y adaptar la presentación, pero evalúe la calidad de la salida con comprobaciones humanas dentro del proceso.
- **Trate la accesibilidad como necesaria pero no suficiente.** Una herramienta accesible no es automáticamente inclusiva ni justa con la discapacidad; combine la accesibilidad con el diseño de [[inclusive-learning|aprendizaje inclusivo]] y el apoyo de [[special-education|educación especial]].
- **Fundamente las adaptaciones en la ley y la política.** Consulte estándares (WCAG) y normas legales (Ley de Tecnología de Asistencia, IDEA) al diseñar o adquirir herramientas de IA.

- **Transcripción matemáticamente accesible de vídeos de [[physics-education|física]] (2026):** un flujo de trabajo con IA que usa Gemini (audio + muestreo de vídeo a 1 fps) y LuaLaTeX compila vídeos instructivos de física en PDF accesibles en matemáticas según PDF/UA-2 e ISO 32005 que superan habitualmente la validación de accesibilidad: una vía práctica y gratuita para que el contenido de vídeo con muchas ecuaciones sea legible por lector de pantalla para estudiantes ciegos y con baja visión ([[gemini-lualatex-physics-video-transcription-2026]]).

## Conceptos conectados
- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]] — paraguas más amplio para diseñar la educación ante toda la variabilidad del estudiantado
- [[special-education]] — ámbito instruccional para estudiantes con discapacidades diagnosticadas
- [[universal-design-for-learning]] — marco de diseño proactivo
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[learning-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]
- [[virtual-and-augmented-reality]] — los visores, el mareo por movimiento y el acceso a los dispositivos deciden quién puede usarla
- [[speech-and-voice-technologies]]
- [[legal-issues-and-risks]] — la página paraguas sobre reglas demasiado amplias, evidencia defectuosa y ajuste razonable
- [[arts-design-and-media-education]]
## Artículos conectados
- [[powerful-learning-with-emerging-technology-2025]] — La accesibilidad como requisito centrado en quien aprende
- [[seung-basham-cognitive-offloading-swld-2026]] — Descarga cognitiva con IA generativa para estudiantes con dificultades de aprendizaje
- [[shin-ai-policies-sld-2026]] — Políticas de IA y adaptaciones para estudiantes con dificultades específicas de aprendizaje
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Metaanálisis de intervenciones con IA para estudiantes con discapacidad
- [[adhd-video-segmentation-computing-education]] — Vídeos segmentados con IA y pausas fijas
- [[text-simplification-its]] — Simplificación de texto basada en LLM para la tutoría inteligente
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Generación de preguntas con LLM para estudiantes sordos y con hipoacusia
- [[kutti-ai-voice-first-learning-companion]] — Compañero con la voz como primer medio para niños y niñas con discapacidad visual
- [[tactile-statistical-graphs-accessibility]] — Gráficos estadísticos táctiles impresos en 3D
- [[pepper-robot-sign-language-lis-2025]] — El robot Pepper como apoyo a la lengua de signos
- [[genai-minoritized-knowledges-disability]] — Perspectiva crítica sobre la IA y el conocimiento centrado en la discapacidad
- [[gemini-lualatex-physics-video-transcription-2026]] — Transcripción de vídeos de física accesible en matemáticas con Gemini+LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — IA generativa de asistencia para estudiantes con discapacidad visual
- [[dabaghi-ai-dyslexia-education-review-2026]] — La IA para ayudar a las personas con dislexia en la educación
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — IA generativa, realidad virtual y más allá: una revisión de alcance de las tecnologías digitales de asistencia para estudiantes neurodivergentes en la educación superior
- [[wright-transcription-not-generation-2026]] — Transcribir no es generar: prohibiciones de IA demasiado amplias y las herramientas de asistencia que capturan
