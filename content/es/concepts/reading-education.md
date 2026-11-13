---
title: "Enseñanza de la lectura"
created: "2026-11-05T02:16:00-05:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding, motivation, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
assessment: [assessment, assessment-validity]
ethics: [neurodiversity, accessibility]
audience: [instructors, curriculum designers, researchers]
level: [primary education, k 12, higher ed]
confidence: medium
updated: "2026-11-12T22:30:00-05:00"
translation_of: "concepts/reading-education"
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-05"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Enseñanza de la lectura** — la enseñanza y la evaluación de la lectura: comprensión, fluidez, vocabulario y motivación para leer, junto con el diseño de textos a la dificultad adecuada para cada lector. En la [[ai-education|educación con IA]] la literatura se despliega en cuatro líneas: herramientas que apoyan a los lectores mientras leen, herramientas que evalúan la lectura, herramientas que adaptan o generan texto para el nivel de un lector, y la cuestión de medición que subyace a las tres anteriores: qué hace difícil un texto y si la **legibilidad** lo capta. La lectura es un dominio propio, distinto del [[language-learning|aprendizaje de lenguas]] (adquirir otra lengua), de la [[english-education|enseñanza del inglés]] (EAP/EFL/ESL, que tiene su propia vertiente de lectura y legibilidad) y de la [[writing-education|escritura]] (componer texto): trata del encuentro del lector con el texto. La evidencia es prometedora pero desigual: varios pilotos, un puñado de instrumentos validados y pocas comparaciones controladas. Donde solo existe un estudio pequeño, la evidencia se informa como tal.

## Preguntas para reflexionar

- Cuando una herramienta de IA ayuda a un estudiante a comprender un pasaje, ¿qué ha aprendido el estudiante: el contenido, una estrategia de lectura o cómo pedirle la respuesta a la herramienta? ¿Cuál de esas cosas quiere evaluar?
- Las fórmulas de legibilidad cuentan palabras y longitudes de oración. ¿Qué deja fuera eso de la experiencia que un lector tiene de un texto, y qué mediría usted en su lugar?
- Si la IA puede reescribir cualquier texto al nivel de lectura de un estudiante, ¿deja de importar el nivel en sí, o el estudiante sigue necesitando enfrentarse tarde o temprano a un texto difícil?
- ¿A quién beneficia que la evaluación de la lectura se genere automáticamente: a la carga de trabajo del [[teacher-role|docente]], a la motivación del estudiante o a la validez de la puntuación? ¿Pueden mejorar las tres cosas a la vez?
- La dificultad de lectura es también una cuestión de accesibilidad. ¿En qué deberían diferir las herramientas para lectores con dificultades, estudiantes [[multilingual-learning|multilingües]] y estudiantes neurodivergentes de un asistente de lectura de propósito general?

## Introducción

La enseñanza de la lectura es una vertiente joven de la investigación sobre IA en educación. La mayoría de los estudios son pequeños y recientes, y se agrupan en torno al texto más que en torno a los lectores: generar un pasaje, simplificarlo, puntuarlo o juzgar su dificultad. La pregunta que los une es si una máquina puede decir cuán difícil será un texto para un lector concreto, y si puede actuar sobre ese juicio sin eliminar el trabajo que la lectura debe hacer.

Aparecen cuatro líneas de trabajo:

- **Apoyar al lector** mientras lee, incluidas herramientas motivacionales y de acompañamiento.
- **Evaluar la lectura**, mediante pasajes generados, cuestionarios y [[ai-feedback-quality|retroalimentación de IA]] sobre el trabajo de lectura.
- **Adaptar y generar texto** a un nivel objetivo, desde la simplificación hasta los materiales diferenciados.
- **Medir la legibilidad y la dificultad del texto**, la capa de la que dependen las otras tres.

## Apoyar a los lectores mientras leen

Leer con [[generative-ai|IA generativa]] produce resultados inconsistentes en comprensión —ganancias en un estudio, ninguna [[transfer-of-learning|transferencia del aprendizaje]] en otro— y el instrumento AIR se construyó sobre la hipótesis de que la varianza está en por qué los lectores recurren a la herramienta. Brann, Etgar y Sidi desarrollaron y validaron una escala de 21 ítems con cuatro motivos: orientado a la tarea, sentirse bien, traducción y bajo esfuerzo ([[air-scale-motivations-ai-reading-2026|Brann et al., 2026]]). Su evidencia proviene de 425 estudiantes británicos de educación superior en la muestra exploratoria y 414 en la confirmatoria, con índices de ajuste de CFI 0,95 y RMSEA 0,056. La distinción importa para la práctica: un lector que usa la herramienta para terminar una tarea está en una postura distinta de quien la usa para evitar el esfuerzo, y el bajo esfuerzo es el motivo que los autores señalan como el que hay que vigilar por el procesamiento superficial.

Ese es un resultado de medición, no un estudio de resultados, y la distinción importa. Ningún [[rct|ensayo controlado]] de un compañero de lectura muestra aún ganancias duraderas de comprensión.

## Evaluar la lectura

La evaluación de la lectura es donde la IA aparece más a menudo como un dispositivo que ahorra trabajo. El estudio de caso profesional de Almirabi construyó la Evaluación de Lectura Motivacional Mediada por IA en torno a seis cuestionarios de opción múltiple con 53 estudiantes de grado de EFL con L1 árabe, pasando de un pasaje de libro de texto a pasajes generados por IA, y de la aplicación en línea sin supervisión al papel con vigilancia ([[almirabi-ai-reading-assessment-motivation-2026|Almirabi, 2026]]). Las puntuaciones subieron del 69,4% en el cuestionario del libro de texto a una media de ciclo del 76,5%, con el agregado de IA 4,2 puntos por encima del cuestionario del libro de texto una vez excluidos los cuestionarios sin supervisión. El autor es explícito en que la fuente del pasaje, la modalidad de aplicación, la vigilancia y la secuencia no se aislaron, y en que la [[motivation|motivación]] nunca se midió, de modo que los datos son compatibles con un beneficio motivacional más que evidencia de él.

Un segundo estudio avanza en la dirección opuesta, tratando la retroalimentación de IA como un proceso centrado en el estudiante y no como una comodidad de puntuación. En un cuasiexperimento de dos meses con 200 estudiantes de séptimo grado en Shenzhen, la [[feedback|retroalimentación]] apoyada en ChatGPT sobre lectura en chino produjo una ganancia de 30,40 puntos en una medida de retroalimentación y de 17,95 en orientación a la retroalimentación, frente a descensos en la clase con retroalimentación convencional ([[chatgpt-feedback-orientation-chinese-reading-2026|Chen et al., 2026]]). El mecanismo que se afirma es la [[feedback-literacy|alfabetización en retroalimentación]], no la comprensión, y la pregunta de [[assessment|evaluación]] —si las puntuaciones significan lo mismo en todas las condiciones— queda abierta.

## Legibilidad: qué hace difícil un texto

La legibilidad es la medición más antigua de este ámbito y la que la IA desestabiliza más. Una puntuación Flesch–Kincaid o Lexile estima la dificultad a partir de rasgos superficiales, principalmente la longitud de palabras y oraciones. CLARA se construyó sobre la objeción de que dos historias con la misma puntuación pueden exigir un trabajo cognitivo, lingüístico y socioemocional distinto: su taxonomía de desarrollo de 122 etiquetas alcanzó una exactitud de solapamiento de 0,904 frente a las referencias de edad de las editoriales y un acuerdo de 0,81 con clasificaciones ciegas de educadores, frente a 0,603 de la fórmula FKGL ([[clara-developmental-appropriateness-children-stories-2026|Yin et al., 2026]]). El problema de [[assessment-validity|validez]] es el punto: una fórmula puede ser fiable y aun así medir lo equivocado.

Dos estudios más amplían la brecha. Bird fusiona la clasificación con transformadores y rasgos de lingüística computacional para situar la literatura en inglés en una Key Stage del Reino Unido, alcanzando F1 0,996 y empaquetando el resultado como una herramienta para docentes ([[bird-multimodal-educational-literature-2026|Bird, 2026]]). Clark et al. descienden completamente por debajo de la superficie y miden construcciones con costes de procesamiento conocidos —n-gramas de baja frecuencia, dependencias largas, sustantivos apilados, verbos denominales, sujetos inanimados, relativas de objeto reducidas— y encuentran que los modelos recientes las usan en exceso en relación con sus propias paráfrasis que preservan el significado y con las referencias humanas de base ([[clark-ai-generated-language-readability-2026|Clark et al., 2026]]). La legibilidad, con esta evidencia, es una propiedad de las demandas de procesamiento del texto y de quién lo produjo, no solo de sus estadísticas de longitud.

La consecuencia práctica es que una puntuación de nivel de grado es una garantía débil sobre cualquier texto, y una garantía particularmente débil sobre un texto escrito por IA.

La percepción del público objetivo ahora puede medirse directamente. [[thome-perceived-text-complexity-student-profiles-2025|Thome et al., 2025]] recopilaron un conjunto de datos de 3.954 anotaciones de 193 estudiantes alemanes de secundaria que calificaron oraciones de guías de estudio de orientación profesional y de Wikipedia, y encontraron que los lectores discrepaban de la fórmula: el 72,8% de las anotaciones eran muy fáciles o fáciles a pesar de las bajas puntuaciones de Flesch-Reading-Ease de la muestra. El análisis SHAP de un modelo basado en perfiles mostró que los rasgos del lector impulsaban esa percepción: la lengua hablada en casa fue el rasgo personal más influyente (0,09), por delante del género (0,08) y de la habilidad autoevaluada en alemán (0,07), de modo que una puntuación de nivel de grado no solo pasa por alto las demandas de procesamiento del texto, sino también de quién es la experiencia de lectura que mide.

## Adaptar y generar texto

El mayor grupo de estudios genera o reescribe texto para un lector. Tres enfoques difieren en qué controlan:

- **Generación controlada por nivel.** El [[llm-training-and-fine-tuning|ajuste fino]] de tres modelos de 8B con un [[curriculum-design|plan de estudios]] de lectura infantil diseñado por expertos e historias de GPT-4o y Llama 3.3 70B superó a ambos modelos mayores de cero disparos en métricas relacionadas con la dificultad, con problemas de seguridad insignificantes ([[llm-children-reading-story-generation|Li et al., 2026]]).
- **Materiales diferenciados.** Un flujo de trabajo de IA generativa con roles para materiales de lectura de [[english-education|EAP]] mejoró los resultados principalmente añadiendo capas de apoyo específicas por nivel de dominio —glosas, descomposición de oraciones, señales retóricas, consignas críticas— en lugar de cambiar la complejidad del pasaje, con el mayor efecto entre estudiantes de alto dominio (d = 1,40) ([[genai-differentiated-eap-reading-materials-2026|Gao, 2026]]).
- **Lecturas de curso a medida.** Un curso de posgrado sustituyó su libro de texto por lecturas bajo demanda adaptadas al interés y al nivel de comprensión; 24 estudiantes las valoraron como útiles y el 75% coincidió en que aprendieron más, mientras que el análisis de los artefactos encontró falta de trazabilidad y citas inconsistentes ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]).

La simplificación es la cuarta variante, y su cuello de botella es la evaluación y no la generación. MuTSE empareja una canalización de generación por modelo y consigna con un motor de alineación semántica por niveles, de modo que las simplificaciones pueden compararse y puntuarse con criterios pedagógicamente significativos en lugar de con un único número de legibilidad ([[text-simplification-its|Roscan et al., 2026]]).

## Lectores, interfaces y acceso

La lectura es también una cuestión de acceso. AIRRI presenta el material de las tareas como imágenes perturbadas para derrotar las canalizaciones de captura de pantalla a [[llm|LLM]], y sus autores informan honestamente del coste en legibilidad: las superposiciones de rayas fueron juzgadas legibles por los cuatro expertos en diseño y tipografía entrevistados, mientras que el error de extracción alcanzó el 100% ([[airri-machine-resistant-reading-interface-2026|Airri et al., 2026]]). El intercambio entre legibilidad para la máquina y legibilidad para la persona es una decisión de diseño con un precio en accesibilidad.

Para estudiantes con dislexia, una revisión guiada por [[meta-analysis-systematic-review|PRISMA]] de 72 estudios de 2018 a 2024 encuentra que la IA se usa para la detección, el [[assistive-technology|apoyo asistivo]] y el [[personalized-learning|aprendizaje personalizado]], pero con una base de evidencia fragmentada y poca validación experimental; la IA generativa está mínimamente representada ([[dabaghi-ai-dyslexia-education-review-2026|Dabaghi et al., 2026]]). La dificultad de lectura es donde la [[neurodiversity|neurodiversidad]] y la [[accessibility|accesibilidad]] se encuentran con la agenda general de la lectura, sin tratarlas como un tema aparte.

## Qué muestra y qué no muestra la evidencia

La vertiente es rica en medición y pobre en resultados. Hay instrumentos validados (AIR), modelos de dificultad validados (CLARA, Bird) y un conjunto creciente de herramientas de generación y simplificación. Hay muy pocos estudios controlados que conecten una intervención de lectura con ganancias de comprensión, y varios de los estudios de evaluación confunden la fuente del pasaje con la modalidad de aplicación o la vigilancia. Los tamaños de muestra son pequeños: 53 estudiantes en el caso de evaluación de la lectura, 24 en el estudio de lecturas a medida, 200 estudiantes de séptimo grado en el cuasiexperimento más grande. La evidencia documenta un espacio de diseño, no de un efecto establecido.

La fluidez en los primeros cursos de primaria es la excepción hasta ahora: en una escuela, el estudiantado de primero y segundo grado que registró al menos 10 minutos semanales durante 6 semanas superó a sus pares de baja dosis (g = 0.56), un contraste de dosis y no un ensayo ([[burns-ai-tutor-reading-growth-2026|Burns y Morton (2026)]]).

[[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes y sus colegas (2026)]] probaron si un chatbot ayuda a quienes leen en un experimento preregistrado con 344 estudiantes de Year 10 en siete escuelas secundarias inglesas. Cada estudiante leyó dos pasajes de historia con un LLM, con toma de notas o con ambos; tres días después, la toma de notas por sí sola superó al LLM en retención literal (d = 0.44), comprensión (d = 0.38) y recuerdo libre (d = 0.21). LLM + notas recuperó parte del terreno en las dos primeras pero no en el recuerdo libre (beta = -0.08, p = .854). El estudiantado valoró el LLM como más fácil, más útil y más agradable mientras obtenía puntuaciones más bajas, y el 25.63% de quienes estaban en la condición combinada copió más del 70% de su redacción en sus notas.

## Concepciones erróneas

- **«Una puntuación de legibilidad dice si un texto es adecuado.»** Una puntuación mide rasgos superficiales; la comparación de CLARA con FKGL y los rasgos de procesamiento de Clark et al. muestran cuánto de la dificultad deja fuera.
- **«El texto generado por IA es más fácil porque se genera para un nivel.»** La evidencia apunta en sentido contrario para la salida de los modelos: los modelos de frontera usan en exceso construcciones asociadas con un coste de comprensión.
- **«Leer con IA es una sola conducta.»** La escala AIR encuentra cuatro motivos distintos, y predicen tipos de uso diferentes.
- **«Si la IA puede reescribir el texto, el nivel de lectura deja de importar.»** La diferenciación cambia el apoyo en torno a un pasaje más que la complejidad estructural del pasaje, que es una intervención distinta de bajar su nivel.

## Conceptos conectados

- [[ai-education]] — el marco general bajo el que se sitúa este dominio
- [[language-learning]] — la lectura en L2 se solapa, pero allí el objeto es la adquisición
- [[writing-education]] — el lado compositivo de la alfabetización
- [[english-education]] — lectura y legibilidad en EAP/EFL/ESL
- [[educational-nlp]] — la capa de medición de texto de la que depende la legibilidad
- [[assessment]] — evaluación de la lectura y validez de las puntuaciones
- [[motivation]] — por qué los lectores usan IA, y qué le hace eso al procesamiento
- [[scaffolding]] — capas de apoyo en materiales de lectura diferenciados
- [[neurodiversity]] — dislexia y dificultad de lectura
- [[accessibility]] — texto legible para personas frente a texto legible para máquinas
- [[generative-ai]] — la tecnología detrás de los textos generados y adaptados

## Artículos conectados

- [[air-scale-motivations-ai-reading-2026]] — una escala validada de motivos para leer con IA generativa
- [[almirabi-ai-reading-assessment-motivation-2026]] — evaluación de la lectura mediada por IA en un aula de EFL
- [[genai-differentiated-eap-reading-materials-2026]] — materiales de lectura de EAP diferenciados
- [[llm-children-reading-story-generation]] — historias de lectura infantil controladas por nivel
- [[text-simplification-its]] — evaluar la simplificación de texto para la tutoría
- [[clara-developmental-appropriateness-children-stories-2026]] — dificultad de desarrollo más allá de las fórmulas de legibilidad
- [[bird-multimodal-educational-literature-2026]] — clasificar literatura por etapa clave
- [[clark-ai-generated-language-readability-2026]] — por qué el lenguaje generado por IA es más difícil de leer
- [[sidorkin-ai-generated-course-readings-2026]] — lecturas de curso generadas por IA y a medida
- [[airri-machine-resistant-reading-interface-2026]] — interfaces de lectura resistentes a la máquina y su coste en legibilidad
- [[chatgpt-feedback-orientation-chinese-reading-2026]] — retroalimentación de ChatGPT en lectura secundaria
- [[dabaghi-ai-dyslexia-education-review-2026]] — IA para estudiantes con dislexia
- [[kreijkes-llm-note-taking-reading-comprehension-2026]] — Uso de LLM, toma de notas y comprensión lectora en la educación secundaria: la comparación aleatorizada
