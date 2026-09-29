---
title: Tecnología de asistencia
created: "2026-09-28T20:10:38-04:00"
updated: "2026-09-28T20:10:38-04:00"
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education]
confidence: high
translation_of: concepts/assistive-technology
source_updated: "2026-09-22T09:52:55-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Tecnología de asistencia** — dispositivos, software y servicios que ayudan a las personas con discapacidad a percibir, operar, comunicarse y participar en el aprendizaje y en la vida diaria. En la [[ai-education|IA en la educación]], la tecnología de asistencia abarca lectores de pantalla, conversión de voz a texto y de texto a voz, subtitulación, salida en braille y táctil, herramientas de lengua de signos y, cada vez más, adaptaciones impulsadas por IA que ajustan el contenido y la interacción a las necesidades individuales.

## Preguntas para reflexionar

- La tecnología de asistencia es la capa de herramientas de la accesibilidad: los dispositivos y programas concretos que cada persona usa para salvar las brechas de acceso. Antes de leer, ¿pensaba que accesibilidad y tecnología de asistencia eran lo mismo? ¿Cómo podría cambiar su forma de diseñar entornos de aprendizaje si las trata como conceptos distintos?
- La [[research-methods-aied|investigación]] encuentra que las intervenciones basadas en IA producen un efecto positivo medio en los [[learning-gains|resultados de aprendizaje]] del estudiantado con discapacidad (g = 0,588). Sin embargo, la página advierte de que las herramientas de acceso no garantizan por sí mismas una enseñanza inclusiva ni la agencia de quien aprende. ¿Cuál es la diferencia entre dar acceso a un estudiante e incluirlo de verdad?
- La página señala que los documentos estadounidenses de política sobre IA en gran medida no abordan la tecnología de asistencia ni las adaptaciones para el estudiantado con dificultades específicas de aprendizaje. ¿Por qué cree que las adaptaciones se cuelan tan fácilmente por las grietas de la política sobre IA, y quién pierde cuando eso ocurre?
- La [[generative-ai|IA generativa]] puede subtitular automáticamente, simplificar textos y generar alternativas táctiles, lo que abarata la adaptación. Pero la página le pide que evalúe la calidad de las alternativas generadas por IA en cuanto a su exactitud [[pedagogy|pedagógica]]. ¿Qué podría salir mal si una versión «simplificada» o «táctil» tergiversa el contenido que pretende hacer accesible?
- La IA está ampliando las herramientas de asistencia, desde compañeros de aprendizaje centrados en la voz hasta gráficos táctiles y herramientas de lengua de signos. Como docente o diseñador, ¿qué barrera concreta de qué estudiante querría abordar primero con IA, y qué necesitaría saber sobre esa persona antes de elegir una herramienta?

## Introducción

La tecnología de asistencia es la *capa de herramientas* concreta de la [[accessibility|accesibilidad]]. Mientras que la accesibilidad es la propiedad de diseño de un entorno (¿puede acceder todo el mundo a él?), la tecnología de asistencia es el equipo y el software concretos que las personas usan para salvar las brechas de acceso. Es fundacional para la [[special-education|educación especial]] y el [[inclusive-learning|aprendizaje inclusivo]]: el estudiantado con dificultades específicas de aprendizaje, con discapacidad visual o auditiva y con dificultades motoras depende de herramientas de asistencia para acceder al [[curriculum-design|currículo]]. En Estados Unidos, la [[educational-policy-ai|Ley de Tecnología de Asistencia (2004)]] y la Ley de Mejora de la Educación para Personas con Discapacidad (IDEA, 2004) constituyen la base legal para proporcionar estas herramientas al estudiantado con discapacidad.

### Temas clave de investigación

**La IA está ampliando la tecnología de asistencia.** La IA generativa y los LLM están transformando las herramientas de asistencia: la [[text-simplification-its|simplificación de textos basada en LLM]] adapta el nivel de lectura en la [[intelligent-tutoring|tutoría inteligente]], la [[kutti-ai-voice-first-learning-companion|IA centrada en la voz]] elimina la dependencia visual para quien aprende con ceguera o baja visión, y los [[tactile-statistical-graphs-accessibility|gráficos táctiles generados por IA]] convierten datos visuales en salida táctil. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al.]]** encuentran que las intervenciones basadas en IA (robots, software, realidad virtual inteligente) producen un efecto positivo medio en los resultados de aprendizaje del estudiantado con discapacidad (g = 0,588). **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** añaden un estudio de caso [[qualitative-research|cualitativo]] con 21 estudiantes universitarios con discapacidad visual en Palestina, que muestra que la IA generativa funciona como una capa de asistencia que ajusta el ritmo, el contenido y la presentación, simplifica textos complejos y convierte contenido entre modalidades, y quienes aprenden la consideran de forma consistente un complemento del profesorado y no un sustituto.

**Política y provisión.** **[[shin-ai-policies-sld-2026|Shin et al.]]** documentan que los documentos estadounidenses de política sobre IA en gran medida no abordan la tecnología de asistencia ni las adaptaciones para el estudiantado con dificultades específicas de aprendizaje, y piden orientación política fundamentada en la Ley de Tecnología de Asistencia y en IDEA.

**La IA para la dislexia a través de la detección, el apoyo y el [[personalized-learning|aprendizaje personalizado]].** Una [[meta-analysis-systematic-review|revisión sistemática]] interdisciplinar de 2026 (Dabaghi, D'Urso y Sciarrone, guiada por PRISMA, 2018–2024, n=72) mapea el apoyo de la IA al estudiantado con dislexia y encuentra que la IA se usa para la detección, el apoyo asistencial y el aprendizaje personalizado, pero con estas líneas evolucionando en paralelo en lugar de integrarse, impulsadas más por la oportunidad tecnológica que por una teoría educativa consolidada. Las herramientas de ayuda a la educación basadas en aprendizaje automático se reparten en cinco áreas (aplicaciones específicas, [[student-engagement|implicación]], personalización, recomendación y apoyo genérico), pero hacen hincapié en el rendimiento técnico y la exactitud de la clasificación mientras pasan por alto la validez ecológica y el despliegue práctico en el aula. La investigación sobre detección (EEG, seguimiento ocular, modelos de aprendizaje automático) muestra potencial diagnóstico para la intervención temprana, pero a menudo exige equipo especializado y entornos controlados, lo que limita la escalabilidad y la accesibilidad en contextos escolares habituales. Entre los retos abiertos están la validación experimental limitada, la escalabilidad, las preocupaciones de [[ethics|ética]] y privacidad con datos sensibles del estudiantado, el apoyo y la formación limitados para el [[teacher-role|profesorado]] y las barreras lingüísticas y culturales (la mayor parte de la investigación se dirige a poblaciones anglófonas), un recordatorio de que las herramientas de asistencia deben validarse, poder escalar y fundamentarse éticamente para salvar de verdad las brechas de acceso.

**Los límites de las herramientas de asistencia.** La tecnología de asistencia permite el acceso, pero no garantiza por sí misma una enseñanza inclusiva ni la [[agency|agencia]] de quien aprende. La **[[genai-minoritized-knowledges-disability|investigación crítica]]** y el impulso de roles [[agency|agénticos]] para el estudiantado con discapacidad nos recuerdan que el acceso debe ir acompañado de una participación significativa.

Una revisión de alcance de 2026 sobre [[ai-technologies|tecnologías]] digitales de asistencia para el estudiantado [[neurodiversity|neurodivergente]] en la [[higher-ed|educación superior]] mapea la producción de la década: 766 registros examinados en cinco bases de datos, 40 estudios incluidos, con herramientas basadas en IA en 15 de ellos y [[virtual-and-augmented-reality|realidad virtual]] en 11. Su hallazgo organizador es un desajuste entre aquello a lo que apuntan las herramientas y dónde se sitúan las barreras: 27 estudios apoyaban el aprendizaje de forma directa, 13 abordaban la lectura y la escritura y 12 la gestión del estudio, mientras que la atención (n = 4) y la comunicación social (n = 5) quedaban comparativamente desatendidas y solo 6 abordaban múltiples barreras ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]).

## Implicaciones para la práctica

- **Ajuste la herramienta a quien aprende y a la tarea.** Los lectores de pantalla, los subtítulos, la voz y la salida táctil abordan barreras distintas; elija en función de las necesidades de la persona y del formato del contenido.
- **Aproveche la IA para abaratar las adaptaciones de asistencia.** La IA puede subtitular automáticamente, simplificar textos y generar alternativas, pero evalúe la calidad de la salida en cuanto a su exactitud pedagógica.
- **Funde la provisión en la política.** Consulte la Ley de Tecnología de Asistencia, IDEA y las WCAG al adquirir o construir herramientas de IA.

## Conceptos conectados

- [[accessibility]] — la propiedad de diseño que la tecnología de asistencia operacionaliza
- [[inclusive-learning]]
- [[special-education]]
- [[universal-design-for-learning]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[learning-design]]
- [[speech-and-voice-technologies]]

## Artículos conectados

- [[shin-ai-policies-sld-2026]] — Políticas de IA y adaptaciones para el estudiantado con dificultades específicas de aprendizaje
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Metaanálisis de las intervenciones con IA para el estudiantado con discapacidad
- [[kutti-ai-voice-first-learning-companion]] — IA centrada en la voz para niños con discapacidad visual
- [[tactile-statistical-graphs-accessibility]] — Gráficos estadísticos táctiles generados por IA
- [[text-simplification-its]] — Simplificación de textos basada en LLM para la tutoría inteligente
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Generación de preguntas con LLM para estudiantes sordos y con dificultades auditivas
- [[gemini-lualatex-physics-video-transcription-2026]] — Transcripción de vídeos de física con matemáticas accesibles mediante Gemini+LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — IA generativa de asistencia para estudiantes con discapacidad visual
- [[dabaghi-ai-dyslexia-education-review-2026]] — La IA para ayudar a las personas con dislexia en la educación
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — IA generativa, realidad virtual y más allá: revisión de alcance de las tecnologías digitales de asistencia para estudiantes neurodivergentes en la educación superior
- [[adapted-stories-social-story-intervention-2026]] — Intervención con historias sociales asistida por IA para la educación especial: el diseño de AdaptED Stories
