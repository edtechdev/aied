---
connected_resources: [vibes-diy]
title: Vibe coding
created: "2026-09-28T20:16:26-04:00"
updated: "2026-10-02T22:23:31-04:00"
type: concept
foundations: [agentic-ai, ai-literacy, computational-thinking, human-ai-collaboration, teacher-role]
technology: [generative-ai, llm, prompt-engineering]
audience: [instructors, curriculum designers, researchers, software developers]
level: [higher ed, k 12]
confidence: high
discipline: [cs education, writing education]
translation_of: concepts/vibe-coding
source_updated: "2026-10-01T09:59:06-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Vibe coding** — construir software pidiendo iterativamente a un modelo de lenguaje grande y juzgando el comportamiento resultante, sin leer ni editar directamente el código fuente subyacente. Popularizado por Andrej Karpathy en 2025 como el flujo de trabajo en el que uno «olvida que el código existe», el vibe coding es la realización nativa de LLM de la programación en lenguaje natural y el desarrollo por parte de usuarios finales —encuadres que ahora se tratan como sinónimos en esta base de conocimiento—, en la que la prosa se convierte en la interfaz de programación principal.

## Preguntas para reflexionar

- El encuadre original de Karpathy decía que uno debería «olvidar que el código existe». Antes de seguir leyendo, pregúntese: ¿no ver el código es una ventaja (rebaja las barreras) o un riesgo (no puede verificar ni arreglar lo que no ve)? ¿Qué implica la respuesta para quién debería poder hacer vibe coding?
- La investigación sobre quién tiene éxito en el vibe coding encontró que el [[cs-education|rendimiento tradicional en informática]] sigue prediciendo el éxito incluso cuando la persona usuaria nunca toca el código. Si eso le sorprende, ¿qué habilidad oculta podría estar construyendo la formación en informática que la prosa por sí sola no captura?
- El mismo estudio encontró que la habilidad de escritura predice el rendimiento en vibe coding en gran medida *porque* produce prompts de mayor calidad. Si el prompting es de verdad el cuello de botella, ¿la solución correcta es [[prompt-engineering|enseñar a la gente a promptear mejor]] o rediseñar las herramientas para que exijan menos habilidad de prosa?
- El vibe coding se celebra a menudo por convertir a «cualquiera» en desarrollador. Pero si tanto la habilidad de escritura como el conocimiento de informática moldean los resultados, ¿el vibe coding amplía el acceso a construir software o simplemente traslada la barrera de habilidad del código a la prosa?
- Algunos desarrolladores distinguen el vibe coding «puro» (no leer nunca el código) de la programación asistida por IA en la que uno revisa y edita lo que escribió el modelo. ¿Dónde cree que es más probable que ocurra el aprendizaje genuino —frente a la [[cognitive-offloading|dependencia excesiva]]—, y por qué?

## Introducción

El vibe coding describe un estilo de interacción que habilitan las plataformas de desarrollo integradas con LLM (Replit, Lovable, Cursor y otras): la persona usuaria especifica un programa en lenguaje natural, el modelo genera un sistema funcional, y la persona usuaria itera según el comportamiento observado en lugar de editar el código fuente. El término lo acuñó el cofundador de OpenAI Andrej Karpathy en febrero de 2025 para capturar la experiencia de depender del modelo hasta tal punto que «el código» se desvanece de la conciencia. El vibe coding se sitúa en la convergencia de varias líneas que esta base de conocimiento ya sigue: es [[generative-ai|IA generativa]] aplicada a la [[cs-education|programación]], una forma extrema de trabajo guiado por [[prompt-engineering|prompts]], una instancia concreta de [[human-ai-collaboration|colaboración humano-IA]] y la ruta más clara hasta ahora para que [[teacher-role|quienes no programan]] y las personas usuarias finales construyan su propio software (desarrollo por parte de usuarios finales).

También tiene raíces profundas. La idea de programar en lenguaje ordinario es muy anterior a los LLM: desde la aspiración de COBOL de ser «un sistema de programación en lengua inglesa para programadores no profesionales», pasando por la programación literaria de Donald Knuth, hasta la investigación sobre programación en lenguaje natural con subconjuntos restringidos del inglés. Solo con los LLM se volvió factible mapear instrucciones genuinamente conversacionales y poco especificadas a código ejecutable. El vibe coding es la variante concreta en la que la persona usuaria no inspecciona ni edita deliberadamente el código generado, y se apoya por completo en el prompting iterativo y la evaluación del comportamiento.

### Definir el constructo: vibe coding «puro» frente a vibe coding con código visible

La definición del vibe coding sigue en flujo. Algunos usan el término en sentido amplio para referirse a cualquier programación guiada por IA; otros insisten en que se refiere estrictamente a «construir software con un LLM sin revisar el código que escribe». Google Cloud distingue una versión «pura» sin código (coherente con la definición de Karpathy) de una versión en la que la persona usuaria entiende y refina el código generado. Esta distinción importa para la [[research-methods-aied|investigación]]: un estudio controlado de la competencia en vibe coding exige un constructo bien definido. El estudio de CHI 2026 sobre los predictores de la competencia en vibe coding se dirigió deliberadamente a la variante «pura», sin código: los participantes no podían ver ni editar el código generado, así que el rendimiento medido reflejaba solo la capacidad de especificar, refinar y depurar comportamiento mediante prosa y salida observada (véase [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al.]]).

### Quién tiene éxito en el vibe coding: la evidencia

Un estudio transversal preregistrado (N = 100 estudiantes de educación superior) aporta la primera evidencia controlada a nivel de participante sobre qué habilidades predicen el éxito en vibe coding. Tanto la [[writing-education|competencia en comunicación escrita]] (r = 0,29) como el rendimiento en informática (r = 0,39) predijeron significativamente el rendimiento en tareas de vibe coding orientadas a GUI y validadas por especialistas, y el rendimiento en informática siguió siendo significativo tras controlar habilidades cognitivas generales de dominio (r parcial = 0,281). En un modelo conjunto, el rendimiento en informática aportó aproximadamente el doble de varianza única que la habilidad de escritura, pero ambas añadieron valor predictivo independiente. De forma crítica, la calidad del prompt calificada por personas medió en el vínculo escritura→rendimiento, lo que aporta evidencia de proceso de respuesta de que la prosa clara opera produciendo mejores prompts. Como el entorno ocultaba el código fuente, el conocimiento de informática solo podía ayudar de forma indirecta (mediante la descomposición del problema, el pensamiento algorítmico y los modelos mentales del flujo de control), así que los autores sostienen que su estimación del efecto de la informática es un *límite inferior* para la programación asistida por IA en la que la persona usuaria también puede editar el código directamente ([[vibe-coding-writing-cs-achievement-2026|Thorgeirsson et al., 2026]]).

### El vibe coding como desarrollo de usuarios finales y herramientas para el profesorado

Una de las grandes promesas del vibe coding es que permite a quienes no programan —incluidos [[teacher-role|docentes]] y especialistas de dominio— construir su propio software, una forma de desarrollo por parte de usuarios finales propia de la era de los LLM. Un [[gaide-vibe-coding-k12-teachers|estudio del marco GAIDE]] mostró a docentes de K-12 (no programadores) usando vibe coding en un taller de ocho semanas para crear herramientas de aprendizaje impulsadas por IA, lo que elevó su [[ai-literacy|alfabetización en IA]] y demostró el «aprender creando» como modelo de desarrollo profesional. En educación superior, un docente construyó rápidamente un [[vibe-coding-programming-process-visualizer|visualizador del proceso de programación a partir de registros de actividad del IDE]] mediante vibe coding en cuestión de días, haciendo visibles los procesos de programación del estudiantado para la docencia y la revisión de [[academic-integrity|integridad académica]]. Estos casos sitúan el vibe coding no solo como una habilidad de quien aprende, sino como una capacidad de autoría que [[educational-development|reconfigura quién puede crear tecnología educativa]].

### Homogeneización del diseño: acceso sin diversidad

La promesa de desarrollo de usuarios finales del vibe coding tiene que ver con quién puede construir, no con qué se construye. En un despliegue de curso, 73 estudiantes que construían sitios para negocios distintos en una misma plataforma de vibe coding produjeron alrededor de una docena de diseños distintos, y la autoría percibida no se correspondía con la originalidad medida ([[vibe-coding-design-diversity-2026|Boussioux et al. (2026)]]). Bajar la barrera para construir puede estandarizar el resultado: un coste que la promesa de acceso no anuncia.

### Aprendizaje, agencia y el riesgo de dependencia excesiva

El vibe coding reabre preguntas centrales sobre qué se aprende cuando la IA automatiza la implementación. Como la persona usuaria no lee el código, debe confiar en el comportamiento del modelo, lo que convierte el vibe coding en un caso de alto riesgo de la tensión entre la [[agency|agencia]] y la [[cognitive-offloading|dependencia excesiva]] que recorre la programación asistida por IA. Los currículos están respondiendo al pasar de enseñar a implementar a enseñar a dirigir, verificar y auditar artefactos generados por IA (véanse [[reshaping-cs-education-genai|la reconfiguración de la informática de grado]] y la [[agentic-ai|ingeniería de software agéntica]]). El vibe coding también cambia la posición epistémica de quien aprende: el éxito depende menos de escribir código que de expresar la intención con precisión y evaluar el comportamiento frente a los objetivos, competencias más cercanas al [[computational-thinking|pensamiento computacional]] y a la escritura estructurada que al dominio tradicional de la sintaxis.

### Conexiones con conceptos relacionados

El vibe coding conecta de forma natural con la [[prompt-engineering|ingeniería de prompts]] (la calidad del prompt es el mecanismo del desarrollo guiado por prosa), con la [[cs-education|enseñanza de la informática]] (como el dominio donde más se usa y más se discute la técnica), con el [[computational-thinking|pensamiento computacional]] (el modelado mental que predice el éxito incluso sin acceso al código), con la [[writing-education|enseñanza de la escritura]] (la escritura convertida en habilidad de programación) y con la [[agentic-ai|IA agéntica]] (dirigir un modelo hacia un artefacto en lugar de construirlo a mano). También se cruza con la [[ai-literacy|alfabetización en IA]] y el [[teacher-role|rol docente]], ya que la capacidad de construir las propias herramientas cambia lo que pueden hacer docentes y estudiantes. Por último, plantea preguntas de [[academic-integrity|integridad académica]] y de evaluación idénticas a las que plantea la generación de código por IA en toda la educación en informática.

Un estudio de caso a nivel de facultad en esta base de conocimiento aporta la capa organizativa. [[zimmer-ai-intrapreneurship-faculty-innovation-2026|Zimmer (2026)]] describe el *intraemprendimiento con IA* —educadores que construyen sus propias herramientas en lugar de esperar la compra institucional—, incluida una autora que no programa y que usa Claude Code para construir un comprobador de 321 enlaces de curso. Los facilitadores decisivos fueron organizativos y no técnicos: la discrecionalidad sobre el trabajo, los reconocimientos y la disponibilidad de tiempo, esta última descrita como la más obviamente deficitaria en los entornos académicos y minada por la promoción y la titularidad. El panorama de seguridad se mantuvo sobrio, ya que el análisis de Veracode de 2025 encontró que solo el 55% del código generado por IA era seguro, así que las herramientas de aula hechas con vibe coding siguen necesitando una pasada de revisión antes de manejar datos del estudiantado o conectarse a un LMS.

## Conceptos conectados

- [[generative-ai]]
- [[llm]]
- [[prompt-engineering]]
- [[cs-education]]
- [[computational-thinking]]
- [[writing-education]]
- [[agentic-ai]]
- [[human-ai-collaboration]]
- [[ai-literacy]]
- [[teacher-role]]
- [[cognitive-offloading]]

## Artículos conectados

- [[vibe-coding-writing-cs-achievement-2026]] — El rendimiento en informática y las habilidades de escritura predicen la competencia en vibe coding (estudio empírico de CHI 2026)
- [[gaide-vibe-coding-k12-teachers]] — Un marco orientativo para docentes de K-12 en la creación de tecnologías de aprendizaje impulsadas por IA mediante vibe coding
- [[vibe-coding-programming-process-visualizer]] — De la idea al aula en días: usar el «vibe coding» para crear un visualizador del proceso de programación a partir de registros de actividad del IDE
- [[prompt-problems-nl-programming-mistakes]] — Entender las percepciones, los errores y los enfoques de depuración del estudiantado al resolver tareas de programación en lenguaje natural
- [[code-to-learn-genai-artifact-construction-2026]] — Aprender programando con IA generativa: un marco teóricamente fundamentado para la construcción de artefactos en la educación secundaria superior
- [[reshaping-cs-education-genai]] — Reconfigurar la enseñanza de grado en informática para la IA generativa
- [[flowcode-ai-creative-coding]] — Flowcode: un entorno de programación impulsado por IA para andamiar la iteración en la educación en computación creativa
- [[zimmer-ai-intrapreneurship-faculty-innovation-2026]] — Intraemprendimiento con IA: el profesorado que construye sus propias herramientas, y los facilitadores organizativos que deciden si el impulso sobrevive (Zimmer 2026)
- [[vibe-coding-design-diversity-2026]] — Una herramienta, un gusto? Cómo el vibe coding cambia diversidad colectiva por creatividad individual
