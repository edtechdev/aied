---
title: "¿Cómo sabemos que una IA educativa funciona correctamente y no solo que puntúa bien?"
created: "2026-10-02T09:08:04-04:00"
updated: "2026-10-02T09:08:04-04:00"
weight: 73
type: faq
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
source_updated: "2026-10-02T08:21:34-04:00"
translation_of: faqs/checking-whether-educational-ai-works
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-02"
    agent: hermes-agent
---

*Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa.*

# ¿Cómo sabemos que una IA educativa funciona correctamente y no solo que puntúa bien?

Una IA educativa puede parecer que funciona cuando no lo hace. Las puntuaciones que más se ven —cuán parecida es la respuesta del modelo a una correcta, o cuán cerca quedan sus calificaciones de las de una persona— pueden verse sólidas mientras lo que a usted le importa de verdad está roto.

En un proyecto de esta base de conocimiento, el mismo sistema obtuvo una buena puntuación de concordancia al calificar ensayos y, en el mismo despliegue, produjo retroalimentación cortada a mitad de frase e ilegible. La calificación funcionaba. La retroalimentación no. Nada en el número titular lo indicaba.

Esta página trata de distinguir una cosa de la otra, y no supone ningún conocimiento previo de medición.

## Qué miden en realidad las puntuaciones habituales

Dos tipos de número dominan esta literatura, y ambos miden **parecido y no corrección**.

- **Puntuaciones de similitud** (las verá llamadas ROUGE y BLEU) comparan la redacción de la respuesta del modelo con la redacción de una respuesta de referencia. Un modelo que escribe algo cercano al texto esperado puntúa bien, aunque su razonamiento sea incorrecto y aunque un estudiante pudiera llegar a la respuesta correcta por una vía que no enseña nada.
- **Puntuaciones de concordancia** (las verá como QWK, o kappa cuadrática ponderada) miden cuán cerca quedan las calificaciones del modelo de las calificaciones de una persona. Un modelo puede coincidir con quien califica en la nota final y estar equivocado sobre el *porqué*, que es justo la parte de la que aprende un estudiante.

Un estudiante puede llegar a una respuesta incorrecta por una vía equivocada que parece correcta, y ninguna puntuación de similitud lo notará. Si lo que le importa es el razonamiento, necesita algo que lea el razonamiento: una rúbrica aplicada por una persona, o una comprobación escrita para ese paso concreto.

El asistente de curso de Sistemas de Control Lineal es un buen ejemplo de un equipo que informa de esto con honestidad. Su mejor configuración alcanzó una puntuación de similitud de **0.4093** frente a respuestas de referencia, con la mejora medida de forma fiable por encima de cero, y los autores afirman con claridad que sus números miden redacción y formato ([[lora-finetuned-control-systems-course-qa-2026]]).

## Un sistema puede pasar una prueba y fallar la siguiente

Esta es la lección más útil de la base de conocimiento, porque es la que pilla a la gente.

En el proyecto WrAFT, un modelo ajustado alcanzó una puntuación de concordancia de **0.84** con calificadores humanos en 360 ensayos TOEFL reservados. Es un resultado sólido para *calificar*. El modelo del mismo proyecto entrenado para *escribir retroalimentación* produjo una salida truncada e ilegible, mientras que promptear simplemente otro modelo produjo la retroalimentación que el profesorado prefirió ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Así que evalúe cada salida que produce su sistema, una a una. Una buena puntuación en el módulo de calificación no le dice nada sobre el módulo de retroalimentación que tiene al lado.

## Compruebe si su verificador automático coincide con las personas

Muchos equipos usan ahora una segunda IA para comprobar la primera. Es razonable, pero la segunda IA no es correcta de forma automática.

Un estudio en el que un modelo de frontera redactaba pistas para un [[intelligent-tutoring|sistema de tutoría inteligente]] encontró que aproximadamente el **35%** eran demasiado generales, incorrectas o revelaban la respuesta, y que las propias comprobaciones automáticas de calidad del modelo discrepaban del juicio humano sobre cuáles eran malas ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Versión práctica: tome una muestra de unos cincuenta resultados, haga que una persona los valore y compare eso con las valoraciones de su verificador automático. Si los dos discrepan, su número automático no es evidencia.

## Convierta una puntuación en una regla que pueda aplicar

Una correlación le dice que el modelo acierta normalmente. No le dice qué hacer en las ocasiones en que no acierta. El resultado del enrutado por confianza es la plantilla más clara que hay aquí, y es lo bastante simple como para copiarla.

La confianza resultó ser una señal de advertencia fiable: cuando el modelo no estaba seguro, era más probable que se equivocara (**β = −0.602, p < .001**). Así que el equipo envió al **20%** de respuestas menos seguras a una persona. Esa única regla elevó la concordancia con las calificaciones humanas de **0.78 a 0.82** y recortó el trabajo manual de calificación en aproximadamente un **80%** ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Fíjese en lo que contiene el informe: un umbral, una persona y un ahorro. «Concordancia 0.84» no contiene nada de eso, y por eso es difícil actuar sobre ello.

## Cuando pueda, mida la cosa en sí

El arreglo más limpio es entrenar el modelo sobre la misma cantidad que pretende medir. Un modelo ajustado se entrenó para reproducir las propiedades estadísticas de los ítems de un examen —los números que describen cuán difícil es cada pregunta y qué bien separa a los estudiantes más fuertes de los más débiles— y aprendió esos patrones en lugar de que se los dijeran ([[multimodal-item-parameter-estimation-2026]]). El objetivo era una propiedad del propio instrumento de evaluación, así que la evaluación pudo ser sobre esa propiedad y no sobre la redacción.

Informe también de la progresión, no solo del punto final. El simulador de escritura SWIM publicó la puntuación de cada etapa una junto a otra —prompting basado en rúbrica **0.577**, ajuste fino **0.474 ± 0.023**, aprendizaje por refuerzo **0.618 ± 0.005** ([[swim-student-writing-simulation-2026]])—, y eso es lo que permite a quien lee ver si el entrenamiento hizo algo. Un único número final no puede decírselo.

## Pruebe la seguridad en una conversación completa, no en una respuesta

La mayoría de las pruebas de seguridad comprueban un único intercambio. Los daños que importan en la tutoría se acumulan. SafeTutors encontró que incluso los modelos construidos específicamente para enseñar se degradan a lo largo de una conversación larga y pueden revelar respuestas que deberían retener ([[hazra-safetutors-pedagogical-safety-2026]]).

Ejecute la comprobación de seguridad en conversaciones completas, e incluya los turnos en los que el estudiante se equivoca, insiste o intenta convencer al modelo de que abandone su papel.

## Si prueba con estudiantes falsos, compruebe antes a los estudiantes falsos

Generar estudiantes simulados en lugar de reclutar personas reales abarata mucho la evaluación. Pero un estudiante simulado es un instrumento de medición, y puede equivocarse como cualquier instrumento.

La prueba más directa de esto en la base de conocimiento comparó estudiantes simulados y prompteados con **382 diálogos reservados** de la mayor colección pública de diálogos reales de matemáticas entre estudiante y tutor, usando siete medidas que cubren lenguaje, comportamiento y pensamiento ([[simulated-students-tutoring-dialogues-2026]]). Otros trabajos inciden en el realismo desde otros ángulos: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] entrena modelos para *actuar* y *pensar* como estudiantes, y los perfiles conscientes del historial condicionan la simulación al pasado de un estudiante en lugar de a una persona fija ([[history-aware-student-simulation]]).

Si su banco de pruebas es un estudiante simulado, compruebe el simulador antes de fiarse de lo que dice sobre su tutor.

## Compare con algo fuera de su propio proyecto

Si no tiene una línea base propia, un benchmark externo le dice si su número es bueno. En el benchmark de pedagogía CDPK, EduQwen alcanzó un **96.52%** frente al **90.55%** de Gemini-3 Pro ([[singh-eduqwen-pedagogical-rl-2026]]). El Pedagogy Benchmark, construido a partir de exámenes reales de desarrollo profesional docente y con **97 modelos**, encontró una precisión que va del **28% al 89%** ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

Esa dispersión es el punto: en una tarea sobre enseñanza, los modelos fueron de malos a buenos. Lea los resultados de un benchmark como un rango dentro del cual usted se sitúa, no como un veredicto.

## Una lista de comprobación antes de publicar

**1.** Escriba en una frase qué le importa de verdad, y elija una medida que capture *eso* y no el parecido.
**2.** Obtenga primero una línea base, incluida una simple. El modelo del asistente de curso sin fundamentación puntuó por debajo de una búsqueda por palabras clave.
**3.** Compruebe cada salida que produce su sistema por separado.
**4.** Haga que una persona valore una muestra y compárelo con su verificador automático.
**5.** Convierta la precisión en una regla: un umbral, una persona y un ahorro.
**6.** Pruebe la seguridad en conversaciones completas.
**7.** Compruebe cualquier estudiante simulado antes de fiarse de él.
**8.** Guarde los fallos. La retroalimentación truncada y las pistas que revelan la respuesta son los hallazgos, no el ruido.

## Preguntas relacionadas

- [[making-ai-better-at-supporting-learning|¿Cómo podemos hacer que la IA apoye mejor el aprendizaje en nuestra propia materia?]]
- [[training-ai-tutors-to-guide-rather-than-answer|¿Cómo entrenamos a un tutor de IA para que guíe a los estudiantes en lugar de responderles?]]
- [[evaluating-ai-interventions-methods|¿Qué medidas y métodos de investigación puede usar el profesorado para evaluar intervenciones relacionadas con la IA?]] — la versión orientada al profesorado
- [[reporting-interpreting-aied-research|¿Cuáles son las buenas prácticas para informar e interpretar la investigación sobre IA en educación?]] — la versión orientada a la investigación
- [[llm-training-and-fine-tuning]] — la página de concepto completa