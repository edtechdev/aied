---
title: Pedagogía culturalmente relevante
created: "2026-09-28T18:18:41-04:00"
updated: "2026-09-28T21:21:51-04:00"
type: concept
foundations: [ai-literacy, curriculum-design]
technology: [generative-ai, intelligent-tutoring, llm]
ethics: [equity-in-ai-education, inclusive-learning]
audience: [learners]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/culturally-relevant-pedagogy
source_updated: "2026-09-17T02:43:50-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Pedagogía culturalmente relevante** — introducida por Gloria Ladson-Billings (1995), centra las referencias culturales del estudiantado marginado en el [[curriculum-design|diseño curricular]]. Se apoya en tres pilares: el **éxito académico** (estándares rigurosos que honran la identidad cultural), la **competencia cultural** (conciencia crítica sobre la cultura y el poder) y la **[[critical-pedagogy|conciencia sociopolítica]]** (empoderar al estudiantado para cuestionar sistemas inequitativos). A medida que las herramientas de IA entran en las aulas, la PCR se ha convertido en una lente central para evaluar si la [[generative-ai|IA]] amplifica o borra los conocimientos culturales no dominantes.

## Preguntas para reflexionar

- La pedagogía culturalmente relevante se apoya en el éxito académico, la competencia cultural y la conciencia sociopolítica. ¿Cuál de estos pilares es más difícil de lograr con herramientas de IA, y por qué?
- Un estudio encontró que el 94% de los planes de clase generados por IA no contenían contenido multicultural discernible, y que casi ninguno alcanzaba el nivel de transformación o de acción social. Si la IA produce por defecto resultados monoculturales, ¿de quién es la responsabilidad de introducir las perspectivas que faltan?
- Los datos de entrenamiento de la IA son predominantemente occidentales y anglófonos. ¿Qué significa que un sistema «margina activamente» formas de conocer, y en qué se diferencia eso de simplemente carecer de acceso?
- El aprendizaje con IA basado en la comunidad propone que las epistemologías vividas del propio estudiantado sean el estándar para evaluar la salida de la IA, y que el rechazo y el no uso se traten como respuestas válidas. ¿Cómo centrarías el conocimiento de la comunidad como juez de la relevancia y el daño de una IA?
- Los datos culturalmente fundamentados pueden mejorar drásticamente la relevancia de una IA: un conjunto de datos de conocimiento indio llevó a un modelo pequeño de estar cerca de cero a rivalizar con uno de propósito general mucho mayor. Si la solución son mejores datos, ¿quién debería construirlos y poseerlos?
- Un estudio transcultural encontró que comportamientos idénticos de uso de la IA se juzgaban [[ethics|éticos]] en un país y no éticos en otro, independientemente de la política escrita. ¿Qué te dice eso sobre intentar gobernar el uso de la IA con reglas uniformes?

## Introducción

### El doble filo de la IA en la PCR

La IA puede ayudar al profesorado a hacer la enseñanza culturalmente sensible, pero sus resultados por defecto también corren el riesgo de **reforzar las narrativas dominantes** cuando no se le da ninguna indicación.

- **Apoyo al profesorado:** Wang et al. (2025) construyeron **CulturAIEd**, un sistema impulsado por [[llm|LLM]] que ayuda al profesorado de [[k-12|K-12]] a diseñar actividades de [[ai-literacy|alfabetización en IA]] culturalmente sensibles combinando información demográfica del estudiantado con orientaciones basadas en rúbricas (una lista de verificación de la pedagogía culturalmente relevante integrada en la generación). En un piloto con cuatro docentes **mejoró la confianza del profesorado** para detectar oportunidades de sensibilidad cultural y para modificar actividades existentes, y el 78% consideró útiles las sugerencias de la IA para diversificar los materiales. La herramienta ataca directamente las barreras de tiempo, formación y recursos que bloquean la implementación de la PCR.
- **Riesgo de resultados monoculturales:** [[civic-education-ai-lesson-plans|Trust et al. (2025)]] analizaron 310 planes de clase de educación cívica generados por IA (2.230 actividades): **el 94% no contenía contenido multicultural discernible**, y de los 144 que sí lo contenían, 137 se situaban en el nivel más bajo, «Aditivo»: **solo uno alcanzó la «Transformación» y ninguno llegó a la «Acción social».** Los tres [[conversational-ai|chatbots]] produjeron plantillas de clase estructuralmente idénticas y monoculturales. Es evidencia concreta de que la IA produce currículos homogeneizados por defecto a menos que el [[teacher-ai-competency|profesorado]] intervenga activamente.

### La marginación epistémica en los sistemas de IA

Más allá de la generación de clases, la PCR conecta con una crítica más profunda: los datos de entrenamiento y los procesos de diseño de la IA codifican marcos epistémicos occidentales y anglófonos que marginan otras formas de conocer.

- **Colonialidad epistémica:** Tali-Otmani (2026) sostiene que los sistemas de IA generativa no son epistémicamente neutros: unos datos de entrenamiento predominantemente occidentales **marginan activamente los conocimientos minorizados**, lo que produce una «doble marginación» para el estudiantado con discapacidad, cuyas epistemologías están a la vez infrarrepresentadas en los datos de entrenamiento y excluidas del diseño. Esto extiende la conversación sobre [[equity-in-ai-education|equidad]] del *acceso* a *qué conocimiento se valida*.
- **Redistribuir la autoridad epistémica:** [[ojeda-ramirez-community-based-ai-learning|Ojeda-Ramirez, Gyles y Peppler (2026)]] proponen el **aprendizaje con IA basado en la comunidad**, un marco que reposiciona las epistemologías vividas y comunitarias de quien aprende como estándar evaluativo frente a las salidas de la IA. Sus tres compromisos —el **ajuste fino epistémico**, la **redistribución de la autoridad** y el discernimiento [[situated-learning|situado]]— calibran la confianza frente a las historias locales y la pericia de la comunidad, y tratan el rechazo y el no uso estratégico como respuestas válidas de la PCR ante la IA.

### Datos y evaluación culturalmente fundamentados

Un conjunto de trabajos procedentes de la base de conocimiento aborda las brechas de *contenido* y de *evaluación* que hay detrás de la PCR.

- **Datos de entrenamiento no occidentales:** IKS-Instruct ofrece un **conjunto de datos de instrucciones [[multilingual-learning|multilingüe]] de 24.795 ejemplos** para [[teacher-role|enseñar]] a los LLM los sistemas de conocimiento indios a través de siete [[language-learning|idiomas]] y 41 técnicas [[pedagogy|pedagógicas]]. Un modelo compacto de 7B ajustado al dominio alcanzó una puntuación mediana de juez de 6,39 (frente a 6,54 de un modelo de propósito general mucho mayor), mientras que el modelo base puntuó **cerca de cero** en las dimensiones específicas de los sistemas de conocimiento indios, lo que muestra cuánto mejora la relevancia con datos culturalmente fundamentados.
- **[[benchmark|Referencias de evaluación]] del [[global-south|Sur global]]:** la referencia **NSMQ Riddles** extrae 1,8K acertijos científicos y matemáticos de 11 años del National Science and Maths Quiz de Ghana —una de las primeras referencias educativas del Sur global— y encontró que los LLM de última generación **rinden por debajo de los mejores estudiantes concursantes**, lo que expone el sesgo geográfico en cómo se evalúan los modelos.
- **La cultura por encima de la política:** una encuesta transcultural con estudiantes canadienses y surcoreanos de [[cs-education|informática]] encontró que **la cultura, y no el texto de las políticas, determinaba las percepciones sobre la ética del uso de la IA**: comportamientos idénticos se juzgaban de forma distinta entre cohortes, lo que refuerza la necesidad de una comunicación culturalmente consciente en lugar de reglas abstractas.
- **La adaptación cultural como decisiones de diseño:** [[culturally-aware-student-stress-chatbot-2026|Bashir y Afzal (2026)]] operacionalizan la relevancia cultural en un sistema de apoyo con IA al [[well-being|bienestar]] ([[culturally-aware-student-stress-chatbot-2026|Sukoon]]) mediante tres movimientos: una evaluación bilingüe de 20 preguntas con etiquetas paralelas en inglés y urdu; un prompt de sistema que indica al modelo que responda de forma coherente con las normas sociales y culturales pakistaníes y que use expresiones en urdu y roman urdu cuando proceda; y una sensibilidad explícita a los factores de estrés localmente relevantes (expectativas familiares, presión económica, relaciones jerárquicas entre docente y estudiantado). Su justificación es tanto empírica como ética —la [[explainable-ai|importancia de las características]] situó la relación docente-estudiantado en segundo lugar entre los predictores de estrés—, pero admiten que la adaptación vive en el prompt y no en la canalización de PLN, y que la idoneidad cultural se evaluó solo mediante pruebas informales, no con el estudiantado al que se dirige el sistema.

### Orientaciones prácticas

A partir de los propios artículos de la base de conocimiento, el profesorado y los diseñadores pueden aplicar la PCR a la IA:

- **Tratar la IA como generadora de borradores, no como autoridad.** Los hallazgos de Trust et al. sobre educación cívica muestran que el profesorado debe introducir el [[critical-thinking|pensamiento de orden superior]] y las perspectivas multiculturales que la IA omite; el [[human-in-the-loop-ai|juicio humano]] sigue siendo esencial para la autenticidad cultural y la sintonía con la comunidad.
- **Incorporar el contexto demográfico y cultural en los prompts y las herramientas.** CulturAIEd y [[connected-ai-lesson-planning-vietnam|ConnectED]] (un sistema vietnamita de planificación de clases alineado con el currículo) muestran que las plantillas de prompt estructuradas y localmente fundamentadas, junto con controles de validación docente, mejoran el encaje cultural frente a la generación genérica.
- **Centrar el conocimiento de la comunidad como estándar evaluativo.** Siguiendo el aprendizaje con IA basado en la comunidad, haz que el estudiantado juzgue las salidas de la IA con criterios de relevancia, daño y utilidad fundamentados localmente, y respeta los contextos en los que rechazar o no usar la IA es la decisión correcta.
- **Adoptar y evaluar conjuntos de datos culturalmente fundamentados.** IKS-Instruct y NSMQ Riddles ilustran que los datos [[discipline-specific-aied|específicos de dominio]] y no occidentales mejoran de forma significativa tanto la relevancia como una evaluación honesta.

## Conceptos conectados

- [[equity-in-ai-education]]
- [[curriculum-design]]
- [[ai-literacy]]
- [[k-12]]
- [[teacher-ai-competency]]
- [[teacher-role]]
- [[bias-mitigation]]
- [[critical-pedagogy]]
- [[human-in-the-loop-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[language-learning]]
- [[cs-education]]
- [[pedagogy]] — Marco general: pedagogías y estrategias de enseñanza en la educación con IA

## Artículos conectados

- [[llm-cultural-relevance-k12]] — LLM para una pedagogía culturalmente relevante en K-12
- [[civic-education-ai-lesson-plans]] — Planes de clase generados por IA en la educación cívica
- [[ojeda-ramirez-community-based-ai-learning]] — Aprendizaje con IA basado en la comunidad
- [[genai-minoritized-knowledges-disability]] — La IA generativa y la marginación de los conocimientos minorizados
- [[iks-instruct-dataset-indian-knowledge]] — IKS-Instruct: conjunto de datos de los sistemas de conocimiento indios
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles: referencia de evaluación STEM de Ghana
- [[cross-cultural-student-perceptions-genai-computing]] — Percepciones transculturales del uso de la IA generativa
- [[international-students-conversational-ai-adaptation]] — El estudiantado internacional y la IA conversacional
- [[connected-ai-lesson-planning-vietnam]] — ConnectED: planificación de clases en Vietnam
- [[culturally-aware-aied-community-learning]] — IA culturalmente consciente para el aprendizaje comunitario
- [[taklif-ai-interest-based-personalized-assignments]] — Taklif: tareas personalizadas basadas en intereses
- [[multilingual-adaptive-learning-nigeria-2026]] — Plataforma de aprendizaje adaptativo con IA para contextos multilingües de bajos recursos
- [[culturally-aware-student-stress-chatbot-2026]] — Un chatbot culturalmente consciente impulsado por IA para la detección del estrés y el apoyo al bienestar entre estudiantes universitarios pakistaníes mediante PLN y aprendizaje automático
