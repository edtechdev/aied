---
title: "¿Cómo puedo rediseñar la evaluación para que una calificación siga diciéndome algo defendible sobre lo que el estudiante sabe o puede hacer?"
created: "2026-09-22T18:29:05-04:00"
updated: "2026-09-22T18:29:05-04:00"
weight: 84
foundations: [academic-integrity]
assessment: [assessment, assessment-validity, authentic-assessment]
translation_of: faqs/redesign-assessment-ai-era
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

# ¿Cómo puedo rediseñar la evaluación para que una calificación siga diciéndome algo defendible sobre lo que el estudiante sabe o puede hacer?

**Empiece por declarar explícitamente qué capacidad se supone que representa la calificación.** ¿Está evaluando lo que un estudiante puede hacer de forma independiente, lo que puede lograr de manera apropiada con IA, su capacidad de evaluar y dirigir la IA, o alguna combinación de estas? La página [[assessment-validity|Validez de la evaluación]] de esta base de conocimiento lo trata como un problema de validez: un producto pulido ya no es evidencia suficiente de que el estudiante posea la capacidad que ese producto parece demostrar. Esta es la mitad del mismo argumento que corresponde a la evaluación; la mitad que corresponde al control está en [[reduce-ai-cheating]], y el marco general de validez atraviesa [[evaluating-ai-interventions-methods]].

## El riesgo de la sustitución del constructo

El artículo [[authentic-products-authenticated-processes-2026|De los productos auténticos a los procesos autenticados]] llama **sustitución del constructo** al riesgo resultante: quien evalúa atribuye al estudiante un producto mediado por IA y mide, sin querer, las capacidades de la herramienta en lugar de las del estudiante. Su respuesta recomendada es hacer visibles el razonamiento, el juicio, la verificación, la iteración y la responsabilidad del estudiante mediante enfoques como entregas por etapas, justificaciones de decisiones anotadas, registros de proceso, declaraciones sobre el uso de la retroalimentación, defensas orales y otras formas de evidencia de proceso autenticada.

[[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed y Temimi]] replantean el mismo problema como uno de **información imperfecta** y no de moralidad: el estudiante sabe cómo se produjo el trabajo y la institución solo ve el producto más rastros parciales, así que la pregunta de diseño pasa a ser *qué respuesta del estudiante hace más atractiva cada entorno de evaluación*. Su modelo de regiones de respuesta compara tres opciones (no usar IA, uso [[ai-use-disclosure|declarado]] y uso oculto) y muestra que las normas, la vigilancia, la declaración y el rediseño operan por canales distintos y solo funcionan cuando la respuesta más atractiva coincide con el propósito de la evaluación. Dos resultados inciden directamente en la arquitectura. La disuasión opera a través de la **discriminación** de un detector entre el uso oculto y el trabajo legítimo, no de su tasa bruta de detección, así que cuando los falsos positivos crecen más rápido que los verdaderos positivos, una vigilancia más fuerte puede volver el ocultamiento relativamente *más* atractivo. Y el rediseño orienta al estudiantado hacia un uso responsable solo cuando la rúbrica realmente premia la evidencia de proceso; de lo contrario, se queda en algo cosmético. Su regla práctica es diseñar para el estudiante con más tentación de ocultar, y no para el más concienzudo.

## Una arquitectura de evaluación sólida

En la práctica, una arquitectura de evaluación sólida suele combinar una **tarea auténtica habilitada por IA** con alguna forma de **verificación independiente**. Según la disciplina, eso puede incluir una breve explicación oral, aplicación en clase, demostración en vivo, [[eportfolio|portafolio]] anotado, un componente corto sin ayuda o preguntas sobre decisiones clave.

El concepto de [[authentic-assessment|Evaluación auténtica]] también insiste en el trabajo intelectual realista, el desafío cognitivo, la capacidad de acción del estudiante, la retroalimentación y la autenticidad social o profesional, y no solo en hacer que las tareas convencionales sean más difíciles de completar para la IA. Los componentes orales y en vivo exigen una atención cuidadosa a la ansiedad, los ajustes por discapacidad, las diferencias lingüísticas y el sesgo de quien evalúa.

Una arquitectura popular sin vigilancia, la **variación de tareas por estudiante**, en la que cada examinando recibe una versión superficialmente distinta pero equivalente en constructo de la misma tarea para que las respuestas no puedan compartirse de forma útil, depende de la capacidad en lugar de ser gratuita. [[varia-construct-equivalent-assessment-variant-generation-2026|VARIA]], un [[benchmark]] de 600 variantes generadas en 60 celdas de condiciones, encontró que los modelos de frontera se agrupan estrechamente en una puntuación conjunta de integridad (0,81–0,88) mientras que las referencias que no son de frontera caen a 0,50–0,55, y que ninguna estrategia única de [[prompt-engineering|indicaciones]] optimiza a la vez la diversidad superficial y la equivalencia de constructo. La variación a escala no puede darse por supuesta solo a partir de las indicaciones, así que una institución debería validar su propio par modelo-indicación antes de tratar la garantía como real.

El rediseño también rara vez funciona tarea por tarea. En un estudio [[qualitative-research|cualitativo]] con 12 académicos y 17 estudiantes de una gran universidad australiana, [[nicola-richmond-programwide-assessment-genai-2025|Nicola-Richmond et al.]] encontraron que ambos grupos coincidían en que la evaluación debe cambiar, pero subrayaron la fricción sistémica (plazos largos, restricciones de acreditación en cohortes grandes, carga de trabajo y costo) y concluyeron que el rediseño *necesita a toda la comunidad*: un equipo de alcance de titulación que combine experiencia en diseño de evaluación, [[generative-ai|IA generativa]], contenido disciplinar, industria y evidencia, con puntos de alfabetización en IA generativa y de garantía del aprendizaje colocados estratégicamente a lo largo de una titulación. El método a nivel de tarea que lo hace viable es el que documenta [[mccorkle-aligned-genai-course-policy-2025|McCorkle]]: inventariar cada paso que realiza un estudiante, preguntar de cada paso "¿qué estoy evaluando, en concreto?" y derivar de la respuesta el límite de la IA, que es también la forma en que las expectativas que hay detrás de [[reduce-ai-cheating]] se vuelven explícitas y exigibles.

El propósito importa tanto como la mecánica. [[ai-agents-joyful-assessment-third-space-2026|El Khoury y Ma]] sostienen que una reforma organizada solo en torno a prevenir la conducta indebida es demasiado defensiva y proponen la **evaluación gozosa**: segura, emocionalmente receptiva, empoderadora y favorable a la [[agency|capacidad de acción]] del estudiante, en la que la integridad es una *consecuencia* de un buen diseño en lugar de su punto de partida. Su ejemplo desarrollado usa un [[agentic-ai|agente de IA]] construido por el docente para que el estudiantado ensaye antes de emitir un juicio y para producir un informe de evidencia alineado con la rúbrica, pero la división del trabajo se enuncia con claridad: la IA organiza la evidencia y el docente la interpreta.
