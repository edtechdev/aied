---
title: Interacción entre el estudiantado y la IA
created: "2026-09-28T18:15:36-04:00"
updated: "2026-09-28T18:15:36-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, learning-analytics, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
translation_of: concepts/student-ai-interaction
source_updated: "2026-09-24T10:07:27-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La interacción entre el estudiantado y la IA** — los patrones, los procesos y el trabajo cognitivo que hay en cómo el estudiantado se relaciona con los sistemas de [[generative-ai|IA generativa]] durante el aprendizaje y la [[problem-solving|resolución de problemas]]. La [[research-methods-aied|investigación]] aquí caracteriza qué le pide el estudiantado a la IA, cómo evolucionan los prompts y los diálogos, y cómo se relaciona la calidad de la interacción con los [[learning-gains|resultados de aprendizaje]], la [[cognitive-offloading|descarga cognitiva]] y la [[agency|agencia]].

## Preguntas para reflexionar

- Piense en los últimos prompts que usted (o un estudiante) escribió a una IA. ¿Describiría la mayoría como peticiones de la respuesta, o como peticiones de que la IA explique, indague o evalúe? ¿Qué sospecha que ese patrón le hace al aprendizaje?
- La investigación encuentra que un subconjunto pequeño de tipos de pregunta concentra la mayoría de las consultas del estudiantado, y que las preguntas cambian a medida que avanza una tarea. ¿Por qué cree que se estrecha el preguntar del estudiantado, y qué sugiere eso sobre cómo usa la herramienta?
- La página sostiene que los prompts superficiales orientados a obtener la respuesta se asocian con menos aprendizaje y más dependencia, mientras que una interacción reflexiva y orientada a la verificación apoya la comprensión. ¿Qué cree que separa un prompt «bueno» de uno «malo», y es responsabilidad del estudiantado o del diseño de la herramienta?
- Si la calidad de la interacción está modelada por el contexto de la tarea y el andamiaje, y no es un rasgo fijo del estudiantado, ¿cómo podría rediseñarse un curso o una herramienta para invitar a un rango de indagación más amplio y más productivo?
- ¿Cómo sabría si el diálogo fluido de un estudiante con la IA refleja aprendizaje genuino o solo una delegación hábil, y qué comprobaría para averiguarlo?

## Introducción

La interacción entre el estudiantado y la IA es la superficie observable de la [[student-engagement|implicación]] del estudiantado con la IA generativa: las preguntas que plantea, los prompts que escribe, cómo negocia y verifica los resultados de la IA y cómo esos patrones cambian a lo largo de las etapas de una tarea y con el tiempo. Se sitúa en la intersección de la [[student-experience|experiencia del estudiantado]], la [[prompt-engineering|ingeniería de prompts]] y la [[learning-analytics|analítica del aprendizaje]], y es central en los debates sobre si el uso de la IA en la educación representa aprendizaje genuino o [[cognitive-offloading|dependencia excesiva]]. Donde la [[human-ai-collaboration|colaboración entre las personas y la IA]] enmarca la división de alto nivel del trabajo cognitivo entre las personas y los modelos, la interacción entre el estudiantado y la IA es la puesta en práctica concreta y medible de esa relación: las consultas, los prompts y los movimientos de negociación específicos que quien aprende hace momento a momento.

### Qué le pide el estudiantado a la IA

Una línea central de la investigación mide los **tipos y la calidad de las consultas del estudiantado**. Los estudios aplican taxonomías de tipos de pregunta —por ejemplo, la taxonomía de 18 tipos de Graesser et al.— para clasificar las interacciones entre estudiantado e IA, a menudo con clasificadores de pocos ejemplos para escalar el análisis a cientos o miles de interacciones. Los hallazgos indican que un subconjunto pequeño de tipos de pregunta concentra la mayoría de las consultas del estudiantado y que las preguntas que este plantea **cambian sustancialmente a medida que avanza la tarea** (p. ej., [[student-ai-inquiry-types-cs2-2026]]). Esta dependencia de la tarea importa: la calidad de la interacción no es un rasgo fijo del estudiantado, sino que está modelada por el contexto del problema, el [[scaffolding|andamiaje]] y las posibilidades que ofrece la herramienta de IA. En las edades más tempranas, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed y Martin (2025)]] encontraron que los niños (de 6 a 14 años) ponían a prueba activamente la credibilidad de un [[conversational-ai|chatbot]] planteando preguntas cuya respuesta ya conocían (por ejemplo, «cuánto mide un t rex»), una expresión de autoagencia epistémica, mientras que el niño modal solo hacía de 1 a 3 preguntas y un destacado estudiante de primer grado hizo 21, lo que subraya cómo la variación evolutiva e individual modela las preguntas que plantea quien aprende.

Complementando estos estudios de taxonomía, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] caracterizan la *forma del diálogo* de las consultas del estudiantado. Entre 38 [[higher-ed|estudiantes de grado]] que completaron ensayos argumentativos sin supervisión, el 76,32% usó un patrón de un solo turno —preguntar, obtener la respuesta, parar—, normalmente pegando el título de la tarea sin especificar sus necesidades y reenviando prompts idénticos cuando no quedaban satisfechos, y el 78,94% tocó la [[generative-ai|IA generativa]] solo al principio (ideas, contexto) o al final (pulido, extensión) de una tarea, manteniéndola separada de la lectura y de la [[writing-education|escritura]] independiente; solo el 23,68% mantuvo un diálogo iterativo con preguntas de seguimiento y razonamiento propio. Los autores sitúan estos patrones en un espectro que va de la **externalización cognitiva** a la **reubicación cognitiva** —el análogo en la era de la IA generativa de los enfoques superficiales frente a los [[metacognition|enfoques profundos]] del aprendizaje—, y señalan que la mayoría del estudiantado concebía la herramienta como un buscador mejorado, lo que los limitaba al extremo de la externalización.

### Calidad de la interacción y aprendizaje

Una línea complementaria vincula la *forma* de la interacción con el aprendizaje. Los prompts superficiales o habitualmente estrechos (pedir a la IA que produzca la respuesta en lugar de que explique, indague o evalúe) se asocian con menos aprendizaje y más dependencia, mientras que una interacción reflexiva y orientada a la verificación apoya la [[metacognition|metacognición]] y una comprensión duradera. Esto conecta directamente la interacción entre el estudiantado y la IA con el diseño de la [[intelligent-tutoring|tutoría inteligente]]: se pueden construir sistemas que inviten a un rango de indagación más amplio y más productivo y que andamien el formular preguntas en lugar de limitarse a responder. La interacción no tiene por qué pasar en absoluto por prompts que buscan la respuesta: cuando la IA critica el trabajo del propio estudiantado, el intercambio se convierte en un diálogo reflexivo y orientado a la verificación. En [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash y Connell Pensky (2025)]], las respuestas de quien aprende a la [[feedback|retroalimentación]] de un [[llm|LLM]] sobre sus ensayos mostraron reflexión en el 92,7% de los casos, aceptación en el 93,6% y refutación activa de las afirmaciones del LLM en el 87,8% (κs entre evaluadores = 0,81–0,89), y su respuesta a la [[ai-feedback-quality|calidad de la retroalimentación]] mejoró a lo largo de las iteraciones como una habilidad aprendible. El lado reflexivo de la interacción no tiene por qué pasar por el prompting directo: en [[breideband-community-builder-cobi-2026|CoBi]], el estudiantado interactuó con visualizaciones de IA a nivel de aula de su propio habla [[collaborative-learning|colaborativa]] y deliberó sobre cuándo las clasificaciones de la IA parecían equivocadas, convirtiendo aparentes errores de clasificación en oportunidades para calibrar su comprensión de las capacidades y los límites de la IA ([[trust-calibration|calibración de la confianza]]) en lugar de aceptar sin más su resultado.

Bernstein y Sibia (2026) documentan un patrón de filtrado iterativo en cómo el estudiantado de CS2 maneja las explicaciones de IA generativa ([[student-reception-genai-analogies-computing-2026]]): contrastan con los apuntes de clase, exigen procedencia («sería mucho más escéptico... sin una») e indagan con preguntas de seguimiento en busca de inconsistencias en lugar de emitir un único juicio de aceptar o rechazar. El estudiantado también lee las explicaciones por el conocimiento y el trasfondo que atribuyen a su destinatario: un [[prior-knowledge|conocimiento previo]] supuesto más allá del programa, referencias por defecto al deporte y a los videojuegos («el lado más masculinizado de la informática») y una repetición excesiva funcionaban como señales sobre el lector imaginado, y un andamiaje excesivo se leía como condescendiente y no solo como ineficiente.

Consultar la IA en el *punto* adecuado de una tarea importa tanto como la redacción del prompt individual: en el mismo estudio, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan et al. (2026)]] encontraron que la minoría orientada a la reubicación alternaba el trabajo independiente con la consulta a la IA generativa y declaraba un esfuerzo total sin cambios pero un foco desplazado —moviendo recursos de la búsqueda a la comprobación de la calidad argumentativa y el equilibrio, y escribiendo notas de reflexión después de las sesiones para contrarrestar una retención superficial—, mientras que quien tenía metas de dominio pero una [[ai-literacy|alfabetización en IA]] débil caía en una «paradoja de la eficiencia» y externalizaba «no por intención, sino por defecto».

### De la interacción a la pedagogía

Caracterizar la interacción entre el estudiantado y la IA informa el [[learning-design|diseño del aprendizaje]]: el profesorado puede advertir cuándo los patrones de pregunta del estudiantado son estrechos o superficiales y diseñar intervenciones que amplíen la indagación; el [[teacher-role|papel docente]] se desplaza hacia acompañar al estudiantado a interactuar de forma productiva con la IA. También fundamenta currículos de [[ai-literacy|alfabetización en IA]] que tratan el prompting eficaz y la verificación como habilidades aprendibles y no como capacidades innatas.

La no utilización es en sí misma un patrón de interacción que la [[pedagogy|pedagogía]] debe prever. [[zou-is-this-a-trap-student-teachers-genai-2026|Zou et al. (2026)]], al estudiar a 85 [[teacher-education|futuros docentes]] en tres cursos donde el uso de IA generativa en la [[assessment|evaluación]] estaba explícitamente permitido, encontraron que el 62,4% (53 de 85) optó por no usarla en absoluto, muy por debajo del 79–83% de adopción observado en encuestas comparables del Reino Unido y Australia, y que el uso de quienes la adoptaron era superficial y correctivo más que generativo (corrección de pruebas 43,8%, comprobaciones de claridad 34,4%, generación de texto solo 18,8%). Sus decisiones seguían el diseño de la evaluación y la cultura institucional más que la dificultad técnica: el 41,5% de quienes no la adoptaron temía ser acusado injustamente de [[academic-integrity|plagio]], y nueve de los once entrevistados interpretaron la propia política permisiva como una posible «trampa». La brecha entre los 32 usuarios que declaró la encuesta y las 28 autodeclaraciones muestra que la interacción con la IA que el estudiantado *reporta* está modelada por las consecuencias de la calificación: una advertencia de medición para los relatos de la analítica del aprendizaje sobre la interacción entre el estudiantado y la IA.

## Disciplina e implicación cognitiva en el chat entre el estudiantado y la IA

- **Implicación cognitiva asociada a la disciplina en el chat entre el estudiantado y la IA.** Chang y Li (2026) analizan los prompts del estudiantado a la IA en 116 cursos con un diseño intrapersonal y transdisciplinar, y muestran que las conversaciones entre el estudiantado y la IA reflejan una implicación cognitiva **asociada a la disciplina** y no estilos de interacción individuales fijos. En conjunto, alrededor del 62% de los prompts codificaba una demanda cognitiva de orden superior, pero los perfiles por nivel de Bloom diferían marcadamente según la disciplina: los cursos de [[stem-education|STEM]] provocaban prompts predominantemente de Aplicar (20,8%), los de idiomas de Comprender (31,7%) y los de ciencias sociales de Crear (33,8%). Las comparaciones intrapersonales emparejadas confirmaron que los mismos estudiantes producían significativamente más prompts de orden superior en ciencias sociales que en cursos de STEM (n agrupada = 16, p < .001), y la variación a nivel de curso superó la variación a nivel de estudiante: un argumento sólido de que los asistentes docentes de IA deberían diseñarse y evaluarse teniendo en cuenta el contexto disciplinar.

## Conceptos conectados
- [[learners]] — Estudiantado: el paraguas de los conceptos del lado de quien aprende
- [[human-ai-collaboration]]
- [[student-experience]]
- [[prompt-engineering]]
- [[learning-analytics]]
- [[cognitive-offloading]]
- [[intelligent-tutoring]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[llm]]
- [[ai-literacy]]

## Artículos conectados
- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Externalización frente a reubicación cognitiva en evaluaciones sin supervisión con IA generativa (Yan et al. 2026)
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — “Is this a trap?”: student teachers’ non-adoption of GenAI in assessments (Zou et al. 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[enright-staff-perspectives-genai-2026]]
- [[student-ai-inquiry-types-cs2-2026]] — Analysis of Types of Inquiries in Student-AI Interaction
- [[student-llm-interaction-taxonomy-review-2026]] — Student-LLM Interaction Taxonomy Review
- [[teacher-authored-prompts-student-ai-dialogue]] — Teacher-Authored Prompts in Student-AI Dialogue
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy
- [[icap-cognitive-engagement-llm-agents]] — ICAP Cognitive Engagement with LLM Agents
- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): LLM Integration in CS2
- [[learnlm-improving-gemini-learning]] — LearnLM: scenario-guided learner-AI tutoring conversations
- [[li-dbagent-llm-educational-agent-cs-2026]] — LLM-based educational agent (DBagent) in CS education
- [[strydom-human-gai-paradigms-2026]] — Framing human-AI dynamics: seven GAI engagement paradigms (Strydom 2026)
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT solves Qiskit homework; autogradable design
- [[llm-adaptive-programming-error-explanations-2026]] — Explicaciones adaptativas de errores de programación con LLM
- [[isaza-chatgpt-engineering-prompting-2026]] — Logged prompting and integration behaviors
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-associated Bloom-level cognitive engagement in student-AI conversations (Chang & Li 2026)
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — Bypass, Offload, or Scaffold: A Conceptual Model of How Large Language Models Shape Learning
- [[bounded-reliance-ai-writing-feedback-2026]] — Bounded Reliance: A Source Credibility Perspective on EFL Students' Engagement with AI-Generated Writing Feedback
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[ai-tutor-modality-randomized-field-experiment-2026]] — When AI Tutors Speak: Evidence from a Randomized Field Experiment
- [[context-prompts-physics-assignments-2026]] — Artificial Intelligence Driven Physics Assignments using Context Prompts
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: A Framework for AI in Computing Education
