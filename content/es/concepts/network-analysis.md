---
title: Análisis de redes
created: "2026-09-28T18:19:10-04:00"
updated: "2026-10-04T17:12:06-04:00"
type: concept
technology: [knowledge-graph, learning-analytics]
confidence: high
methods: [network-analysis, research-methods-aied]
translation_of: concepts/network-analysis
source_updated: "2026-10-04T10:50:04-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-04"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **El análisis de redes** — la familia de [[research-methods-aied|métodos de investigación]] que modelan entidades (personas, conceptos, acciones o códigos) como **nodos** conectados por **aristas** que representan relaciones o transiciones, y después analizan la estructura y la dinámica de la red resultante para revelar patrones invisibles a los recuentos de frecuencia o a las comparaciones por pares. En la investigación sobre IA en educación, el análisis de redes se usa para mapear los patrones de interacción entre quien aprende y las herramientas de IA, modelar cómo coocurren el conocimiento o los elementos del discurso, y trazar secuencias temporales de comportamiento. Incluye variantes distintas —el **Análisis de Redes Epistémicas** (ENA, que modela la coocurrencia de códigos o constructos), el **Análisis de Redes Sociales** (SNA, que modela las relaciones entre personas) y el **Análisis de Redes de Transición** (TNA, que modela secuencias temporales de estados)—, y cada una operacionaliza «el aprendizaje como conexión» de una manera diferente. ([[tracing-genai-literacy-interaction-patterns]]) ([[penny-transition-network-analysis-efl-writing-2026]]) ([[misiejuk-cognitive-offloading-prompting-2026]])

## Preguntas para reflexionar

- Cuando oye «análisis de redes» en educación, ¿qué imágenes le vienen a la mente: mapas de amistad del estudiantado, vínculos entre ideas o algo distinto? ¿En qué se diferencian de simplemente contar con qué frecuencia ocurren las cosas?
- Suponga que quiere saber si el estudiantado interactúa de verdad con la retroalimentación de una herramienta de escritura con IA o si solo obtiene respuestas. ¿Por qué una métrica de «cuántas veces hicieron clic» podría dejar escapar la historia que revelaría una secuencia de acciones (por ejemplo, un bucle de revisión frente a un bucle de chat)?
- La página distingue el análisis de redes epistémicas, sociales y de transición. Sin conocer los detalles, ¿puede adivinar qué variante usaría para estudiar (a) cómo colaboran las personas, (b) qué ideas coocurren en el razonamiento del estudiantado y (c) cómo pasa quien aprende de un estado a otro a lo largo del tiempo?
- Una persona investigadora encuentra que el estudiantado con alfabetización alta y baja usa la misma herramienta de IA pero produce estructuras de red de razonamiento muy distintas. ¿Qué le dice eso sobre evaluar herramientas de IA con una única puntuación promedio?
- Métricas de red como la «densidad» y la «centralidad» describen si la interacción es aleatoria u organizada en torno a nodos centrales. ¿Cuándo sería una red organizada en torno a un solo estudiante una señal de buena colaboración, y cuándo una señal de problema?

## Introducción

Los métodos de análisis de redes comparten una premisa central: que la estructura de las conexiones —y no solo su presencia o su frecuencia— tiene significado. En lugar de preguntar «cuánto de X ocurrió», preguntan «cómo están conectados los elementos, y qué revela esa conectividad sobre la [[metacognition|cognición]], la [[collaborative-learning|colaboración]] o los procesos de aprendizaje?». Esto los hace especialmente valiosos en la IA en educación, donde la investigación quiere cada vez más entender el *proceso* de la [[student-ai-interaction|interacción entre quien aprende y la IA]] (cómo navega el estudiantado la [[feedback]], el diálogo y la revisión) y no solo el producto (puntuaciones finales, tasas de error).

## Variantes usadas en el corpus de la base de conocimiento

- **Análisis de Redes Epistémicas (ENA)** — la variante más común en la base de conocimiento (tratada en ~24 artículos). El ENA modela la coocurrencia de códigos o constructos dentro de segmentos de discurso o actividad, y produce redes que muestran qué ideas, habilidades o acciones epistémicas tienden a estar conectadas en un contexto dado. Se usa para comparar cómo distintos grupos (por ejemplo, estudiantado con alfabetización alta frente a baja, colaboradores humanos frente a IA) estructuran su cognición. ([[tracing-genai-literacy-interaction-patterns]]) ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Análisis de Redes Sociales (SNA)** — modela las relaciones entre personas (estudiantado, profesorado, agentes) para revelar estructuras de colaboración, influencia, centralidad y comunidad. Útil para estudiar el [[collaborative-learning|aprendizaje colaborativo]] y el aprendizaje entre pares. ([[misiejuk-cognitive-offloading-prompting-2026]])
- **Análisis de Redes de Transición (TNA)** — modela secuencias temporales de estados discretos (por ejemplo, las acciones de quien aprende en una sesión de tutoría) como una red dirigida, y cuantifica la probabilidad de pasar de un estado a otro. El TNA se usa para revelar bucles de comportamiento, trayectorias y dinámicas de aprovechamiento en la interacción entre quien aprende y la IA. ([[penny-transition-network-analysis-efl-writing-2026]])

Estas se diferencian de un **[[knowledge-graph]]**, que es una estructura de datos para representar y razonar sobre hechos (una ontología o almacén de tripletas), y no un método analítico para estudiar procesos o estructuras de relación.

## El análisis de redes en la investigación sobre IA en educación

Los métodos de redes se usan en toda la base de evidencia de la base de conocimiento para responder preguntas que las métricas agregadas no pueden responder:

- **Abrir la «caja negra» de la interacción entre quien aprende y la IA.** El TNA revela el *proceso* —los bucles de comportamiento y las trayectorias que sigue el estudiantado al usar herramientas de IA (por ejemplo, un «bucle de revisión» frente a un «bucle de chat» en la [[writing-education|escritura]] con andamiaje de [[conversational-ai|chatbot]])— y no solo el resultado final. ([[penny-transition-network-analysis-efl-writing-2026]])
- **Comparar la estructuración cognitiva entre grupos.** El ENA muestra cómo distintos grupos conectan los constructos de manera distinta; por ejemplo, cómo la [[metacognition]] coocurre con la delegación frente al razonamiento humano en la colaboración humano-IA, lo que revela modos de colaboración diferentes. ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Trazar la alfabetización en IA y las firmas de interacción.** El ENA sobre registros de interacción identifica patrones distintos de uso de [[llm|LLM]] (refinamiento estratégico iterativo frente a comandos lineales), y distingue la [[ai-literacy|competencia]] y el desarrollo de quien aprende. ([[tracing-genai-literacy-interaction-patterns]])
- **Analizar el discurso y el encuadre.** El ENA se aplica a datos [[qualitative-research|cualitativos]] y [[multimodal]] (por ejemplo, encuadres de YouTube sobre ChatGPT en educación) para revelar la estructura del discurso público o disciplinar. ([[youtube-frames-chatgpt-education]])
- **Complementar el autoinforme y las métricas de producto.** Como los métodos de redes usan datos conductuales observados, pueden exponer discrepancias entre lo que el estudiantado afirma y lo que hace realmente: un hallazgo recurrente en la literatura de la base de conocimiento sobre aprovechamiento de la retroalimentación.
- **La estructura de grafo como cantidad de validación, no como resumen descriptivo.** [[synthetic-educational-data-structural-fidelity-2026|Inoue y Yasutake (2026)]] siguen β0 —el número de componentes conexas de un grafo de proximidad semanal sobre el estudiantado con un umbral euclídeo fijo— para comprobar si las cohortes sintéticas reproducen las reales, y lo prefieren porque queda fijado por el grafo mismo, no necesita optimización ni semilla aleatoria a diferencia de la maximización de modularidad, y sigue definido cuando entre un séptimo y un tercio del estudiantado queda aislado en una componente.

## Consideraciones metodológicas

- **La codificación es la base.** Todas las variantes de redes dependen de codificar de forma fiable los datos brutos (enunciados, eventos, relaciones) en nodos o códigos discretos; la codificación automatizada basada en LLM se usa cada vez más, pero requiere validación humana (por ejemplo, κ de Fleiss de 0,70–0,71 en los estudios de TNA). ([[penny-transition-network-analysis-efl-writing-2026]])
- **Tratar el acuerdo entre codificadores como una comprobación continua, no como una estadística puntual.** [[preservice-teachers-noticing-ai-simulations-2026|Galiç et al. (2026)]] codificaron 304 enunciados de observación con un α de Krippendorff de .803 y monitorizaron el acuerdo a lo largo del estudio, recodificando los enunciados disputados siempre que la κ agrupada caía por debajo de su umbral de recalibración de .85 (en los casos 18 y 27) y sin necesitar más recalibración en los casos 36–51. La secuencia es lo importante: una fiabilidad medida solo al final habría dejado los primeros modelos de transición apoyados en una deriva de los codificadores, ya que esos patrones de transición semanales eran el hallazgo del estudio.
- **Las métricas de nivel de red resumen la estructura.** La densidad, la reciprocidad, la centralización y la fuerza de entrada y de salida describen si la interacción es aleatoria u organizada en torno a nodos «gravitatorios», y cuán recíproco es el intercambio.
- **Se necesita comparación estadística para las diferencias entre grupos.** Se usan pruebas de chi cuadrado o pruebas de permutación para establecer que las diferencias de red observadas (por ejemplo, por competencia) no se deben al azar. [[caeai-response-length-ai-ethics-education-2026|Shao et al. (2026)]] muestran que la hipótesis nula tiene que construirse para ajustarse al texto. En una discusión de caso con veinte [[higher-ed|estudiantes de posgrado]] de disciplinas mixtas, la proporción de términos compartidos de tamaño 3 subió del 5,2% al 8,0% mientras que los tokens de contenido cayeron a aproximadamente 0,65× su nivel posterior a la lectura. Una prueba de permutación de bolsa completa habría declarado significativo ese aumento; su prueba de permutación de tokens condicionada por la longitud no lo hizo (Q6 p = 0,62, Q7 p = 0,15).
- **Validar el instrumento antes de leer su red.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai y Alshahri (2026)]] construyeron el AI-STEM-MLCS de 45 ítems mediante la ruta completa de desarrollo de una escala —ratios de validez de contenido por expertos, análisis factorial exploratorio y luego confirmatorio (CFI = 0,983, RMSEA = 0,019), ω de McDonald de 0,888–0,905 e ICC de test-retest a dos semanas de 0,751–0,900— antes de modelar las cuatro dimensiones con un análisis de grafos exploratorio. Derivar la estructura de una red cuyos nodos son puntuaciones de escala no validadas es justo lo que ese orden previene, y los autores señalan la validación específica para Arabia Saudí como el límite para transferir la estructura.
- **Interpretar con cuidado.** La granularidad de los nodos (por ejemplo, un nodo «chat» demasiado grueso) puede ocultar la intención; la clasificación automatizada conlleva cierta ambigüedad; y una estructura de red transversal no establece causalidad.
- **Redes que exponen lo que un agregado oculta.** [[genai-social-annotation-epistemic-network-analysis-2026|Pan et al. (2026)]] encontraron que la clase que anotaba con IA generativa superó en puntuación e implicación a su control, y luego dividieron la clase experimental por la mediana de rendimiento y mostraron que la ganancia no era compartida: los grupos de alto rendimiento iniciaron el 60,7 por ciento de las solicitudes de retroalimentación en sus anotaciones frente al 34,0 por ciento de los grupos de bajo rendimiento, que se quedaron en un bucle autorreferencial (separación de grupos significativa en el eje X del ENA, U = 25,00, p = 0,01). La lección de diseño es que un único efecto a nivel de grupo puede resumir dos estructuras de interacción diferentes, y los dos grupos eran clases intactas, así que la comparación identifica el patrón sin atribuirlo causalmente.

## Implicaciones para la investigación sobre IA en educación

1. **Preferir métodos de proceso frente a métricas solo de producto.** Para evaluar si las herramientas de IA apoyan el aprendizaje, modelar cómo interactúa realmente el estudiantado (aprovechamiento, diálogo, revisión) con métodos de secuencia y de redes, en lugar de depender solo de las puntuaciones finales.
2. **Usar el ENA para comparar la estructuración cognitiva.** Cuando se pregunta cómo estructuran su razonamiento distintos estudiantes o modos (humano frente a IA), el ENA ofrece una comparación visual y directa de redes de coocurrencia: una técnica muy adecuada para el [[student-modeling|modelado del estudiantado]] de cómo quien aprende conecta ideas.
3. **Validar la codificación automatizada.** Con grandes conjuntos de registros, la clasificación basada en [[llm|LLM]] es potente, pero debe contrastarse con la codificación humana (informar del acuerdo entre evaluadores) antes de interpretar la estructura de la red.
4. **Diseñar para la diferenciación.** El análisis de redes revela a menudo que la *misma* herramienta de IA produce patrones de interacción distintos entre subgrupos de estudiantes, lo que informa un diseño adaptativo en lugar de una evaluación uniforme.


## Validación con ENA del diálogo colaborativo simulado

- **El ENA como validación del diálogo simulado.** Fang (2026) aplica el Análisis de Redes Epistémicas para evaluar si agentes LLM ajustados reproducen la estructura del diálogo real de [[problem-solving]] colaborativa. Al comparar los vectores de adyacencia simulados con la red empírica, reporta una distancia ENA de 0,17 —dentro del umbral del percentil 95 de la distribución nula, con un valor p de permutación de 0,65—, lo que demuestra el poder del ENA como comprobación [[quantitative-research|cuantitativa]] de la fidelidad de las [[simulation|simulaciones]] generativas del discurso, junto a otras aplicaciones del ENA, el SNA y el TNA en la investigación educativa.

## Conceptos conectados

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## Artículos conectados

- [[caeai-response-length-ai-ethics-education-2026]] — La longitud de la respuesta, y no la alineación léxica, determina las estadísticas de términos compartidos en las redes participante–morfema (Shao et al. 2026)
- [[penny-transition-network-analysis-efl-writing-2026]] — TNA de las interacciones entre estudiantado y chatbot en la escritura en inglés con andamiaje
- [[tracing-genai-literacy-interaction-patterns]] — ENA de los patrones de interacción de la alfabetización en IA generativa
- [[hao-human-ai-collaborative-problem-solving-cognition]] — ENA de la resolución colaborativa de problemas entre humanos y IA
- [[misiejuk-cognitive-offloading-prompting-2026]] — Descarga cognitiva y prompting (métodos de SNA y de redes)
- [[youtube-frames-chatgpt-education]] — ENA de los encuadres de YouTube sobre ChatGPT en educación
- [[agency-gap-ai-writing]] — La brecha de agencia en la escritura apoyada por IA (ENA)
- [[synthetic-educational-data-structural-fidelity-2026]] — Lo que las métricas de fidelidad pasan por alto: una comprobación estructural de los datos educativos sintéticos