---
title: Aprendizaje basado en juegos
created: "2026-09-28T18:19:10-04:00"
updated: "2026-10-02T22:23:30-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **El aprendizaje basado en juegos (GBL)** — el uso de los juegos mismos (digitales o físicos) como medio y contexto para el aprendizaje, donde la mecánica, los desafíos y la progresión del juego vehiculan el contenido educativo. Quien aprende aprende *jugando*. De forma relacionada, la **gamificación** aplica elementos de diseño de juegos (puntos, insignias, niveles, tablas de clasificación) a actividades de aprendizaje que no son juegos, sin convertirlas en juegos completos. En la educación en IA y [[educational-robotics|robótica]], ambos enfoques se usan para hacer que el contenido técnico resulte atractivo y motivador.

## Preguntas para reflexionar

- El aprendizaje basado en juegos usa el juego mismo como medio para aprender: se aprende *jugando*. La gamificación solo superpone puntos, insignias y niveles a una actividad que no es un juego. ¿Qué tan distintos cree que son esos dos enfoques en su efecto sobre el aprendizaje real, frente a su efecto sobre la implicación a corto plazo?
- Una revisión comparativa encontró que el aprendizaje basado en juegos era más frecuente en entornos informales, mientras que la gamificación dominaba las aulas formales y favorecía el aprendizaje basado en proyectos. ¿Por qué cree que cada enfoque encontró un hogar distinto, y qué nos dice eso sobre dónde funciona mejor cada uno?
- La gamificación se fundamenta en la teoría de la autodeterminación: [[agency|autonomía]], competencia y relación. Si la motivación consiste en satisfacer esas necesidades, ¿por qué un sistema de puntos e insignias podría tener éxito o fracasar según cómo dé forma al esfuerzo y a la atención percibidos?
- La [[research-methods-aied|investigación]] sugiere que el beneficio motivacional de los diseños lúdicos y apoyados por IA depende de cómo dan forma a la carga de trabajo y a la atención percibidas, y no de la gamificación por sí sola. ¿Cuándo ha visto que un juego o unas insignias aumentaran la implicación sin mejorar realmente el aprendizaje, o al revés?

## Introducción

El GBL se fundamenta en las teorías de la [[motivation]], la [[student-engagement]] y el [[active-learning]]: los juegos proporcionan motivación intrínseca, retroalimentación inmediata y contextos de problemas auténticos. Se solapa con la [[simulation]], el [[project-based-learning]] y la [[educational-robotics]]. El GBL es especialmente relevante para la [[educational-robotics]], el [[computational-thinking]] y la [[cs-education]], donde los juegos pueden hacer concretos y divertidos conceptos técnicos abstractos.

### Cómo aparece el GBL en la investigación de la base de conocimiento

- **Educación en robótica:** [[game-based-gamified-robotics-education-review-2026|una revisión sistemática comparativa]] del aprendizaje basado en juegos y la gamificación en la educación en robótica encontró que el GBL era más frecuente en entornos informales, mientras que la gamificación dominaba las aulas formales y favorecía el [[project-based-learning|aprendizaje basado en proyectos]].
- **Juegos mediados por robots:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]] es un juego de rol mediado por un robot para la intervención contra el acoso escolar, y [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] usa la [[storytelling-in-education|narrativa digital]] interactiva para impulsar la motivación.
- **[[conversational-ai|Agentes conversacionales]] de IA en juegos de simulación:** Wenzel, Geiger y Liening (2026) derivan el marco CAIS-GBL —cuatro principios de diseño y quince características de diseño para agentes conversacionales de IA en el aprendizaje digital basado en juegos— a partir de metarrequisitos guiados por la teoría que abarcan la implicación cognitiva, motivacional, [[affective-computing|afectiva]] y [[sociocultural-learning|sociocultural]], con una postura de [[equity-in-ai-education|equidad]] por diseño. Su agente instanciado (Lara) en un juego de simulación empresarial tuvo una acogida positiva por su apoyo cognitivo, su [[community-of-inquiry|presencia social]] y su apoyo al [[self-regulated-learning]], y aborda la brecha habitual de retroalimentación [[formative-assessment|formativa]] limitada y reflexión estructurada en los juegos de simulación.

- **Eficacia del AI-GBL:** una revisión sistemática de 55 estudios sobre aprendizaje basado en juegos apoyado por IA encuentra efectos positivos sobre el conocimiento, la motivación intrínseca y la implicación afectiva, pero solo 4 estudios (7%) alcanzaron su umbral de alta calidad y solo 4 (7%) eran [[rct|ECA]] ([[ai-game-based-learning-systematic-review-2026|Kaşarcı y Yurt, 2026]]). La eficacia dependía de alinear el mecanismo de IA con una [[learning-theories|teoría del aprendizaje]] declarada.

### Gamificación

**La gamificación** es la aplicación de elementos de diseño de juegos (puntos, insignias, niveles, tablas de clasificación, desafíos, barras de progreso) a contextos que no son juegos para motivar e implicar a las personas usuarias. A diferencia del aprendizaje basado en juegos —donde el aprendizaje ocurre *a través de* un juego—, la gamificación superpone mecánicas de juego a una actividad de aprendizaje existente sin convertirla en un juego completo. Se usa en educación para impulsar la motivación, la [[student-engagement]] y la persistencia, y se aplica ampliamente en entornos de aula formales.

La gamificación se fundamenta en la teoría motivacional, en particular en la [[self-determination-theory]] (que apoya la autonomía, la competencia y la relación) y en los marcos de cambio de comportamiento. Ha mostrado una sinergia particular con el [[project-based-learning]] en dominios aplicados como la robótica. En la investigación de la base de conocimiento:

- **Educación en robótica:** la revisión comparativa encontró que la gamificación dominaba las aulas formales en la educación en robótica (p < .001) y favorecía con claridad el [[project-based-learning|aprendizaje basado en proyectos]] (p = .009), mientras que el aprendizaje basado en juegos era más común en entornos informales.
- **Implicación y motivación:** la gamificación se usa en toda la base de conocimiento para aumentar la implicación y la motivación del estudiantado en contextos de aprendizaje de IA, [[cs-education|programación]] y [[stem-education|STEM]]. La investigación sobre [[genai-motivation-engagement-2026|IA generativa, motivación e implicación]] examina cómo los elementos lúdicos se combinan con la IA para sostener el interés de quien aprende. Dos estudios de 2026 amplían esto comparando condiciones gamificadas y apoyadas por IA frente a la instrucción tradicional: [[nasa-tlx-workload-gamified-ai-2026|un estudio con NASA-TLX]] midió la carga de trabajo percibida en condiciones de aprendizaje tradicionales, gamificadas y apoyadas por IA, y [[arcs-motivational-ergonomics-gamified-ai-2026|un estudio ARCS]] examinó la «ergonomía» motivacional en el aprendizaje gamificado y apoyado por IA, con implicaciones para la [[professional-training|formación en el puesto de trabajo]]. En conjunto, aclaran que el beneficio motivacional de los diseños lúdicos y apoyados por IA depende de cómo dan forma al [[motivation|esfuerzo percibido]], a la carga de trabajo y a la atención (por ejemplo, las dimensiones de atención y relevancia del modelo ARCS), y no de la gamificación por sí sola.

El GBL y la gamificación se conectan en conjunto con la [[educational-robotics]], la [[student-engagement]], la [[motivation]], la [[self-determination-theory]], el [[active-learning]], la [[simulation]], el [[project-based-learning]] y el [[computational-thinking]].

## Conceptos conectados
- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — Marco general: pedagogías y estrategias de enseñanza en la educación en IA
- [[virtual-and-augmented-reality]] — la práctica inmersiva y la gamificada se solapan en diseño y evidencia

## Artículos conectados
- [[ai-game-based-learning-systematic-review-2026]] — Revisión sistemática de 55 estudios de aprendizaje basado en juegos apoyado por IA: resultados positivos, una base de evidencia delgada

- [[game-based-gamified-robotics-education-review-2026]] — Educación en robótica basada en juegos y gamificada
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[genai-motivation-engagement-2026]] — IA generativa, motivación e implicación
- [[nasa-tlx-workload-gamified-ai-2026]] — Carga de trabajo NASA-TLX en condiciones gamificadas y con IA
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — Motivación ARCS y gamificación apoyada por IA