---
title: "¿Cómo pueden los agentes de IA apoyar a estudiantes y docentes?"
created: "2026-09-22T18:34:19-04:00"
updated: "2026-09-22T18:34:19-04:00"
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

# ¿Cómo pueden los agentes de IA apoyar a estudiantes y docentes?

**Los agentes de IA pueden ir más allá de responder preguntas en un solo turno** al planificar, usar herramientas, recordar el contexto relevante, coordinar subtareas y adaptar el apoyo a lo largo de una secuencia de interacciones. Para el estudiantado, entre los papeles plausibles están la tutoría adaptativa, la planificación del estudio, la retroalimentación [[formative-assessment|formativa]], la [[problem-solving|resolución de problemas]] guiada, la generación de ejercicios de práctica, la simulación, las recomendaciones de prerrequisitos y la [[prompt-engineering|formulación de indicaciones]] reflexiva o metacognitiva. Para el profesorado, los agentes pueden ayudar con el desarrollo de materiales, la [[automated-question-generation|generación y validación de preguntas]], la clasificación de la retroalimentación, la [[learning-analytics|analítica]] del curso, los flujos de trabajo de diseño instruccional, la recuperación de recursos y la orquestación de agentes especializados.

## Capacidades agenticas recurrentes

El artículo [[agentic-workflows-education|Agentic Workflows in Education]] describe cuatro capacidades agenticas recurrentes: **reflexión, planificación, uso de herramientas y colaboración multiagente**. Cada una añade posibilidades, pero también introduce retos de [[explainable-ai|interpretabilidad]], coordinación, confianza, latencia y supervisión.

## Lo que los agentes de IA pueden hacer bien (implicaciones positivas)

- **Apoyo sostenido y adaptativo.** A diferencia de los [[conversational-ai|chatbots]] de un solo turno, los agentes pueden mantener una conversación de aprendizaje a lo largo de muchos turnos, recordando lo que sabe quien aprende, adaptando la dificultad y secuenciando el [[scaffolding]] en varios pasos. Esto sostiene el aprendizaje [[adaptive-learning|adaptativo]] y [[personalized-learning|personalizado]] a escala.
- **Aliviar la carga del profesorado.** Los agentes pueden redactar borradores de materiales, generar y validar preguntas (por ejemplo, un emparejamiento de generador y validador), clasificar la retroalimentación y orquestar subagentes especializados, lo que libera al profesorado para interacciones de mayor valor.
- **Interacción rica y [[desirable-difficulties|fricción productiva]].** Las aulas multiagente y los compañeros simulados crean dinámicas variadas, como el discurso entre pares, el desacuerdo constructivo y el juego de roles, que sostienen el [[collaborative-learning|aprendizaje colaborativo]] y el [[socratic-method|sondeo de estilo socrático]]. Los agentes diseñados para cuestionar en lugar de asentir pueden empujar a quien aprende hacia una reconsideración más profunda (los agentes de conflicto constructivo mejoraron los resultados de diseño en la investigación).
- **Práctica y simulación de bajo riesgo.** Las [[simulation|simulaciones]] basadas en agentes ([[simulating-students|estudiantes simulados]], escenarios [[medical-education|clínicos]]) permiten practicar en entornos seguros y repetibles antes de la aplicación en el mundo real.

## Riesgos y advertencias clave (implicaciones negativas)

- **La automatización excesiva puede vaciar el aprendizaje.** Cuanto más automatiza un agente, menos trabajo cognitivo hace quien aprende. Los agentes proactivos pueden dejar al estudiantado como consumidor pasivo, debilitando los procesos esforzados que construyen un aprendizaje duradero y elevando el riesgo de [[cognitive-offloading|dependencia excesiva]].
- **Menor implicación metacognitiva.** Si los agentes se encargan de la planificación y el seguimiento, quienes aprenden pueden no desarrollar la [[metacognition]] y la [[self-regulated-learning|autorregulación]] que la educación pretende construir. Los agentes deberían provocar estos procesos, no sustituirlos.
- **Confianza mal depositada y lagunas de verificación.** Los agentes autónomos pueden producir resultados verosímiles pero no validados; quienes aprenden y quienes enseñan pueden [[trust-calibration|confiar en exceso]] en ellos. La verificación robusta y la [[ai-literacy]] cobran más importancia a medida que los agentes ganan [[agency|autonomía]].
- **Opacidad y rendición de cuentas.** Los sistemas multiagente complican la [[human-in-the-loop-ai|supervisión humana]]: ¿qué agente responde por un error y dónde interviene una persona? Los fallos de coordinación y la deriva de personalidad pueden socavar la fiabilidad y la [[pedagogical-safety]].
- **[[equity-in-ai-education|Equidad]] y sesgo.** Los agentes pueden reproducir a escala el sesgo de los datos de entrenamiento, y el acceso desigual a sistemas agenticos capaces puede ampliar la inequidad.

## Lo que muestra la evidencia hasta ahora

Se acumulan resultados concretos, y también advertencias. [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], el primer [[rct|ensayo controlado aleatorizado]] de un sistema humano-IA en tutoría en vivo, dio a tutores novatos orientación experta en tiempo real extraída del razonamiento de tutores experimentados: en **900 tutores y ~1.800 estudiantes**, el alumnado de los tutores con acceso tenía **4 puntos porcentuales más de probabilidad de dominar los temas**, cifra que subía a **9 p.p.** entre los tutores peor valorados, cuyos estudiantes alcanzaron a los de los tutores mejor valorados del grupo de control. Costó alrededor de **\$20 por tutor al año**, y el análisis de **más de 550.000 mensajes de tutoría** mostró que los tutores se desplazaban hacia formular preguntas guía en lugar de dar las respuestas, un caso claro de IA que aumenta al [[teacher-role|profesorado]] en lugar de sustituirlo.

Pero «agentico» no es automáticamente mejor. [[ilieva-agentic-genai-higher-education-2026|Un estudio con 130 estudiantes en un curso de comercio electrónico]] encontró que tanto los chatbots de [[generative-ai]] como los agentes de GAI obtuvieron valoraciones superiores a la [[online-teaching-and-learning|enseñanza en línea]] tradicional en mejora del aprendizaje y [[personalized-learning|personalización]], pero **sin diferencias estadísticamente significativas entre las condiciones de chatbot y de agente**, de modo que la autonomía añadida no se tradujo en valor de aprendizaje añadido. El marco propuesto Agentic GAI-Supported Learning Framework trata en consecuencia a los agentes como **socios de aprendizaje acotados y supervisados por personas**, con objetivos, puntos de control y decisiones finales reservados a los humanos.

Otras dos advertencias importan. Primero, la **retirada**: los ensayos aleatorizados muestran que incluso una asistencia de IA breve puede deprimir el rendimiento posterior sin ayuda, y el intervalo posterior a la retirada, denominado [[cognitive-washout-ai-skill-decay-2026|desvanecimiento cognitivo]], apenas se ha medido, por lo que se desconoce la durabilidad de las [[learning-gains|ganancias de aprendizaje]] asistidas por agentes. Segundo, la **evaluación**: [[zhang-platform-scores-miss-ai-teaching-agents-2026|al desplegar ocho agentes de enseñanza con IA en un plan de estudios de medicina]], las puntuaciones generadas por la plataforma clasificaron a los agentes de forma distinta a una rúbrica experta independiente (el agente situado en tercer lugar por la plataforma quedó último en calidad docente) porque las puntuaciones de la plataforma indexan el rendimiento del estudiantado y no la calidad docente del [[pedagogical-agent|agente]]. La revisión de [[governance]] [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]] añade una regla de proporcionalidad, **la autonomía no debería exceder la madurez de la evidencia ni la solidez del control humano responsable**, y señala que la evidencia es más sólida para resultados a nivel de artefacto y más débil para el aprendizaje duradero y la equidad. Para saber cómo construir uno, véase [[developing-ai-tutor]]; para saber cómo evaluar si funciona, véase [[evaluating-ai-interventions-methods]].

## El estado de la evidencia

La base de evidencia aún está emergiendo. La síntesis [[agentic-ai|Agentic AI in Education]] de esta base de conocimiento se apoya en una [[meta-analysis-systematic-review|revisión de alcance]] de 474 estudios, pero señala una concentración sustancial en la [[higher-ed|educación superior]], la [[stem-education|educación STEM]], los diseños de corto plazo y la tutoría basada en texto; solo una minoría de los trabajos revisados fundamentó explícitamente sus sistemas en teoría educativa, y la validación rigurosa de aula a largo plazo sigue siendo limitada.

La advertencia clave de diseño es, por tanto, no equiparar una mayor autonomía con un mejor aprendizaje. [[agentic-ai-pedagogical-best-practice-2026|Agentic AI and Pedagogical Best Practice]] recomienda fricción intencionada, andamiaje dinámico y supervisión humana para que la iniciativa del agente no elimine la planificación, el seguimiento, el juicio y el esfuerzo propios de quien aprende. Véanse también [[intelligent-tutoring|Tutoría inteligente]] y [[human-in-the-loop-ai|IA con supervisión humana]].
