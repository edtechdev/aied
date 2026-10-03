---
connected_resources: [teacherserver]
title: Educación especial
created: "2026-09-28T19:11:16-04:00"
updated: "2026-10-02T22:24:42-04:00"
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
translation_of: concepts/special-education
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Educación especial** — el diseño y la impartición de la enseñanza para estudiantes con discapacidad, abarcando diferencias cognitivas, físicas, sensoriales y del neurodesarrollo. La [[research-methods-aied|investigación]] sobre [[ai-education|IA en la educación]] en esta base de conocimiento explora cómo las herramientas de IA pueden apoyar las diversas necesidades del estudiantado mediante la [[personalized-learning|personalización]], el [[scaffolding|andamiaje adaptativo]] y las interfaces accesibles, a la vez que examina los riesgos de los [[ai-technologies|sistemas de IA]] que pasan por alto o marginan al estudiantado con discapacidad.

> ⚠️ **La educación especial es principalmente un término de [[k-12|K-12]].** Está enraizado en la Ley de Educación para Personas con Discapacidades (IDEA) de Estados Unidos y en el sistema de derechos de los Programas de Educación Individualizada (IEP) que rige los servicios de educación especial en la enseñanza primaria y secundaria. En la [[higher-ed|educación superior]] —y cada vez más también en K-12— el encuadre más habitual es el **[[universal-design-for-learning|Diseño Universal para el Aprendizaje]]** (un marco de diseño proactivo que beneficia a todo el estudiantado) junto con la [[accessibility|accesibilidad]] y la [[assistive-technology|tecnología de apoyo]], y no la «educación especial». Un artículo sobre educación especial en K-12 y un trabajo universitario sobre DUA tratan contextos que se solapan pero son distintos; la base de conocimiento conserva ambos porque la literatura de investigación abarca los dos. Cuando una fuente trata de educación superior y estudiantes con discapacidad, suele ser mejor vincularla a [[universal-design-for-learning|el Diseño Universal para el Aprendizaje]], [[accessibility|la accesibilidad]] o [[inclusive-learning|el aprendizaje inclusivo]] que a educación especial.

## Preguntas para reflexionar

- La página subraya que «educación especial» es principalmente un término de K-12 basado en derechos, enraizado en IDEA y los IEP, mientras que la educación superior habla más a menudo de Diseño Universal para el Aprendizaje y accesibilidad. ¿Por qué cree que difieren estos contextos y qué revela esa diferencia?
- La promesa de personalización de la IA parece hecha a medida para estudiantes con necesidades diversas. Pero si un sistema puede adaptarse a «perfiles cognitivos individuales», ¿qué podría salir mal cuando el modelo de una discapacidad es demasiado grueso o está ausente por completo?
- La investigación incluye herramientas de IA diseñadas para perfiles de discapacidad específicos (por ejemplo, estudiantes con dislexia o estudiantes sordos y con dificultades auditivas). ¿Qué riesgos ve en diseñar para perfiles estrechos frente a diseñar universalmente para todo el estudiantado desde el principio?
- ¿Cómo podrían los sistemas de IA construidos para el estudiante «medio» acabar pasando por alto o marginando al estudiantado con discapacidad, incluso sin querer, y de quién es la responsabilidad de evitarlo?
- ¿Qué significaría que una herramienta de IA incluyera de verdad, y no solo acomodara, a un estudiante con discapacidad, y cómo reconocería la diferencia en la práctica?

## Introducción

La educación especial es un ámbito en el que la capacidad de personalización y adaptación de la IA ofrece un potencial particular. A diferencia de una enseñanza uniforme, los [[intelligent-tutoring|tutores de IA]] pueden en teoría adaptarse a perfiles cognitivos, necesidades de comunicación y ritmos de aprendizaje individuales. Los artículos de esta base de conocimiento abarcan IA para perfiles de discapacidad específicos, experiencias del estudiantado neurodivergente y perspectivas críticas sobre la IA y la discapacidad.

**La tutoría con IA específica para cada discapacidad** adapta la IA a necesidades concretas de quien aprende. **[[special-r1-rl-special-education|Special-R1]]** extiende el [[reinforcement-learning|aprendizaje por refuerzo]] para modelar la diversidad cognitiva y comunicativa en cinco perfiles de discapacidad, usando prompts conscientes del personaje y recompensas de pensamiento para moldear las respuestas del tutor para cada estudiante. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** analizó cómo el estudiantado con dislexia experimenta las herramientas de IA, revelando tanto el valor de la IA para el apoyo a la alfabetización como barreras de accesibilidad persistentes. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** diseñaron un sistema de generación de preguntas impulsado por [[llm|LLM]] para [[accessibility|estudiantes sordos y con dificultades auditivas]], introduciendo estrategias de preguntas visuales y emocionales y refinando iterativamente las preguntas con la comunidad destinataria para superar el desajuste entre los prompts de IA basados en texto y las lenguas de signos como primeras lenguas. **[[embodied-string-learning-blindness-low-vision-musicians|Aprendizaje de cuerdas corporeizado con músicos ciegos y con baja visión]]** desarrolló estrategias de aprendizaje no visuales con músicos ciegos y con baja visión, centrando un diseño [[embodied-learning|corporeizado]] liderado por la discapacidad. Todo esto conecta con el [[inclusive-learning|aprendizaje inclusivo]] y la [[neurodiversity|neurodiversidad]].

**Las experiencias del estudiantado neurodivergente** se centran en estudiantes autistas y con TDAH. **[[neurodivergent-computing-students|Zastudil et al.]]** encontraron que el estudiantado neurodivergente de informática necesita tareas estructuradas, equipos pequeños y consistentes y definiciones de roles explícitas, requisitos de diseño que las herramientas de [[collaborative-learning|aprendizaje colaborativo]] deben abordar. **[[adhd-video-segmentation-computing-education|La segmentación de vídeo con IA en la educación en informática]]** demostró que los vídeos segmentados por IA eliminaban la brecha de rendimiento del TDAH. Ambos conectan con el [[learning-design|diseño del aprendizaje]] y el [[universal-design-for-learning|Diseño Universal para el Aprendizaje]].

**Las perspectivas críticas** examinan cómo la IA puede marginar al estudiantado con discapacidad. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** sostiene que los sistemas de IA marginan activamente el conocimiento centrado en la discapacidad debido a unos datos de entrenamiento centrados en Occidente, lo que conecta con las preocupaciones de la [[equity-in-ai-education|equidad en la educación con IA]] sobre la justicia epistémica.

**La IA para la dislexia en la detección, el apoyo y el aprendizaje personalizado.** Una [[meta-analysis-systematic-review|revisión sistemática]] interdisciplinar de 2026 (Dabaghi, D'Urso y Sciarrone, guiada por PRISMA, 2018–2024, n=72) mapea cómo la IA apoya al estudiantado con dislexia en la educación, y encuentra que la IA se usa para la detección, el apoyo asistencial y el aprendizaje personalizado, pero con estas líneas evolucionando en paralelo en lugar de de forma integrada, impulsadas más por la oportunidad tecnológica que por una teoría educativa consolidada. Las herramientas de ayuda educativa basadas en aprendizaje automático se reparten en cinco áreas (aplicaciones específicas, implicación, personalización, recomendación y apoyo genérico), pero enfatizan el rendimiento técnico y la precisión de clasificación y pasan por alto la validez ecológica y el despliegue práctico en el aula. La investigación sobre detección (EEG, seguimiento ocular, modelos de aprendizaje automático) prioriza la intervención temprana y muestra potencial diagnóstico, pero a menudo requiere equipos especializados y entornos controlados, lo que limita su escalabilidad y accesibilidad en contextos escolares típicos. Entre los retos abiertos están la validación experimental limitada, la escalabilidad, las preocupaciones de [[ethics|ética]] y privacidad con datos sensibles del estudiantado, el apoyo y la formación limitados del profesorado, y las barreras lingüísticas y culturales (la mayoría de la investigación se dirige a poblaciones anglófonas).

**La delegación cognitiva en estudiantes con dificultades de aprendizaje (SWLD).** [[seung-basham-cognitive-offloading-swld-2026|Seung y Basham (2026)]], una revisión conceptual en una serie especial de *Learning Disability Quarterly* sobre IA para estudiantes con dificultades de aprendizaje, reformulan el uso de la [[generative-ai|IA generativa]] para las SWLD a través de la lente de la [[cognitive-offloading|delegación cognitiva]]. Sostienen que la IA generativa puede ser una **ayuda compensatoria o un atajo** según cómo interactúen las decisiones de delegación con los perfiles cognitivos y [[motivation|motivacionales]] de las SWLD (dificultades de función ejecutiva y memoria de trabajo, mayor carga cognitiva, metas de rendimiento que evitan el esfuerzo, menor autoeficacia académica y expectativas infladas hacia la IA generativa) y con el diseño instruccional. Para la lectura y la escritura, la IA generativa puede andamiar el acceso (nivelación de texto, resumen, salidas [[multimodal|multimodales]], planificación, redacción, retroalimentación de revisión) a la vez que preserva una [[student-engagement|implicación]] de orden superior, pero una delegación excesiva corre el riesgo de saltarse los procesos de comprensión, planificación y monitorización que ya son frágiles en este estudiantado, fomentando una «pereza [[metacognition|metacognitiva]]» y agravando las dificultades de alfabetización en todos los dominios. El artículo sitúa las **[[guardrails|barreras de protección]] instruccionales** como el factor moderador clave y recomienda [[teacher-role|enseñar]] a delegar de forma estratégica, construir una [[ai-literacy|alfabetización en IA]] para calibrar la confianza en las herramientas, secuenciar experiencias de dominio para construir la [[self-efficacy|autoeficacia]] y alinear las tareas y la evaluación con metas de IEP que priorizan el desarrollo de habilidades por encima de la sustitución. Esto extiende la cobertura de educación especial de la base de conocimiento a la dimensión de equidad de la delegación: la misma herramienta que rebaja las barreras de acceso puede, si no se protege, sustituir la práctica que las SWLD más necesitan.
**El contenido de intervención generado por IA necesita controles previos a la generación, no solo revisión.** [[adapted-stories-social-story-intervention-2026|Enkhjargal et al. (2026)]] encontraron que quienes ejercen la práctica valoraron la herramienta codiseñada de Historias Sociales como muy usable (SUS 86,8), pero señalaron que sus imágenes eran genéricamente occidentales y que su rastreador de conducta no encajaba con el juicio clínico vinculado a las metas, restricciones que habrían fijado antes de la generación.

## Implicaciones para el profesorado de educación especial

- **Codiseñe la IA con el estudiantado destinatario y su comunidad.** [[llm-question-generation-deaf-hard-of-hearing-2026|La generación de preguntas para estudiantes sordos y con dificultades auditivas]] muestra el valor de refinar la IA iterativamente con la comunidad para salvar la brecha entre los prompts basados en texto y las lenguas de signos como primeras lenguas: implique al estudiantado y a sus comunidades en el diseño en lugar de dar por hecho que la IA les encaja.
- **Ajuste la IA a perfiles de discapacidad específicos, no a una accesibilidad genérica.** [[special-r1-rl-special-education|Special-R1]] modela la diversidad cognitiva y comunicativa entre perfiles de discapacidad; [[dyslexlens-dyslexic-learners-ai|DysLexLens]] documenta tanto el valor para la alfabetización como las barreras de accesibilidad persistentes que afronta el estudiantado con dislexia: elija herramientas alineadas con el perfil de cada estudiante y esté atento a las barreras no resueltas.
- **Estructura la colaboración para el estudiantado neurodivergente.** [[neurodivergent-computing-students|El estudiantado neurodivergente de informática]] necesita tareas estructuradas, equipos pequeños y consistentes y roles explícitos: aplique estos requisitos de diseño a cualquier actividad colaborativa mediada por IA.
- **Use la IA para cerrar (y no ampliar) las brechas de rendimiento.** [[adhd-video-segmentation-computing-education|Los vídeos segmentados por IA]] eliminaron la brecha de rendimiento del TDAH: despliegue IA adaptativa donde la evidencia muestre que iguala los resultados, no donde solo automatiza.
- **Centre el diseño corporeizado liderado por la discapacidad.** [[embodied-string-learning-blindness-low-vision-musicians|La investigación con músicos ciegos y con baja visión]] muestra que las estrategias no visuales lideradas por la discapacidad superan a las interfaces visuales por defecto: construya y adapte la IA con la experiencia del estudiantado con discapacidad.
- **Protéjase contra la marginación epistémica.** [[genai-minoritized-knowledges-disability|Las perspectivas críticas]] advierten de que unos datos de entrenamiento centrados en Occidente pueden marginar el conocimiento centrado en la discapacidad: audite el contenido y las herramientas de IA en busca de justicia epistémica junto con la [[equity-in-ai-education|equidad en la educación con IA]].

## Conceptos conectados

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## Artículos conectados
- [[seung-basham-cognitive-offloading-swld-2026]] — Delegación cognitiva de la IA generativa para estudiantes con dificultades de aprendizaje
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Generación de preguntas impulsada por LLM para estudiantes sordos y con dificultades auditivas
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — IA generativa, realidad virtual y más allá: revisión de alcance de las tecnologías digitales de apoyo para estudiantes neurodivergentes en la educación superior
- [[adapted-stories-social-story-intervention-2026]] — Intervención con historias sociales asistida por IA para educación especial: el diseño de AdaptED Stories
