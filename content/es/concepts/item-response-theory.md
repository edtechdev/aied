---
title: Teoría de respuesta al ítem
created: "2026-09-28T19:10:33-04:00"
updated: "2026-10-09T17:40:00-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
translation_of: concepts/item-response-theory
source_updated: "2026-10-05T08:24:47-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-09"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La teoría de respuesta al ítem (TRT)** — una familia de modelos psicométricos que estiman la habilidad latente a partir de las respuestas a los ítems modelando la relación entre la habilidad de quien aprende y la probabilidad de responder correctamente a cada ítem. Los modelos de TRT modelan la dificultad y la discriminación de los ítems, lo que permite precisión de medición y pruebas adaptativas. En la era de la IA, la TRT se encuentra con los [[llm|LLM]] en la [[llm-item-difficulty-prediction|predicción de la dificultad de los ítems con LLM]] y la [[llm-psychometric-calibration-cdp|calibración psicométrica con LLM]]: la IA predice y calibra la dificultad de los ítems, lo que puede mejorar la precisión de la medición y alimentar el [[adaptive-learning|aprendizaje adaptativo]].

## Preguntas para reflexionar

- La teoría de respuesta al ítem trata la habilidad y la dificultad del ítem como algo estimado conjuntamente a partir de los patrones de respuesta, en lugar de tratar la puntuación bruta de un test como la medida. ¿En qué podrían diferir realmente en habilidad dos estudiantes con el mismo número de aciertos?
- La TRT permite comparar a quienes aprenden en una escala común y estimar la precisión por persona. ¿Por qué podría importar más conocer la dificultad y la discriminación de un ítem que saber solo si un estudiante acertó?
- Un estudio usó estadísticos de ajuste de persona de la TRT para distinguir respuestas humanas de respuestas generadas por IA en pruebas de opción múltiple, marcando las respuestas de IA como «aberrantes». ¿Cómo podría la misma maquinaria de medición que evalúa el aprendizaje servir también para vigilar la integridad académica?
- El [[research-methods-aied|personal investigador]] usa la TRT para validar que las preguntas de examen generadas por IA igualan a las escritas por especialistas en dificultad y discriminación. Si una IA escribe un ítem que «parece» bueno, ¿por qué sigue siendo necesaria la calibración empírica frente a parámetros de TRT ajustados?
- A medida que la IA predice y calibra la dificultad de los ítems, ¿qué podría salir mal si la estimación de dificultad de un modelo no se valida contra datos reales de respuesta del estudiantado?
- La TRT se conecta con las pruebas adaptativas y el trazado de conocimiento — usar tus respuestas para elegir qué preguntar después. ¿Cómo permite estimar tu habilidad a partir de cada respuesta que un test sea más corto y más preciso, y no solo más largo?

## Introducción

La TRT trata la habilidad (θ) y los parámetros de los ítems (dificultad, discriminación y, a veces, adivinación) como algo estimado conjuntamente a partir de los patrones de respuesta, en lugar de tratar la puntuación bruta como la medida. Esto permite comparar a quienes aprenden en una escala común, seleccionar ítems de forma adaptativa y estimar la precisión por persona en lugar de globalmente.

### Cómo aparece la TRT en la investigación

- **Dificultad predicha por IA:** la [[llm-item-difficulty-prediction|predicción de la dificultad de los ítems con LLM]] usa modelos de lenguaje para estimar la dificultad de los ítems, lo que debe validarse contra parámetros de TRT ajustados empíricamente.
- **Calibración psicométrica:** la [[llm-psychometric-calibration-cdp|calibración psicométrica con LLM]] alinea la evaluación basada en modelos con la medición basada en la TRT, de modo que las respuestas generadas por IA preserven las propiedades de medición.
- **Trazado de conocimiento y modelado del estudiantado:** la TRT está estrechamente relacionada con el [[knowledge-tracing|trazado de conocimiento]] y el [[student-modeling|modelado del estudiantado]] — modelos que siguen el conocimiento de quien aprende a lo largo del tiempo — y comparte el objetivo de estimar estados no observables de quien aprende a partir de respuestas observables.

- **Cantidades de la TRT leídas de los logits de un LLM.** [[huang-interpretable-knowledge-tracing-2026|Huang et al. (2026)]] extraen la habilidad del estudiantado θ = z^GOOD − z^BAD y la dificultad del turno del tutor d = z^HARD − z^EASY de los logits del siguiente token y las combinan en un predictor Rasch 1PL, lo que hace interpretable el trazado de conocimiento basado en diálogo (64,29% de precisión, 65,25 de AUC en QATD2k).
- **Validación de campo jerárquica bayesiana:** [[assessing-quality-ai-generated-exams-field-2025|Evaluar la calidad de exámenes generados por IA]] usa un modelo de TRT 2PL jerárquico bayesiano (con ítems ancla de pretest para situar a 1.686 estudiantes en una escala θ común) para mostrar que las preguntas generadas por IA igualan a los ítems de exámenes estandarizados escritos por especialistas en dificultad y discriminación: una demostración a gran escala de la TRT como columna vertebral de validación de la [[automated-question-generation|generación automática de preguntas]].
- **La información del test localiza la precisión.** Una prueba de alfabetización en IA generativa de 20 ítems validada con un modelo 2PL (RMSEA = 0,03, CFI = 0,97) tenía su función de información con un pico en θ = −0,8, lo que la hace más precisa para estudiantes de alfabetización baja a moderada en lugar de uniforme en toda la escala ([[jin-glat-genai-literacy-assessment|Jin et al. (2025)]]).

- **Separar las respuestas humanas de las de IA generativa con estadísticos de ajuste de persona:** [[irt-human-genai-mcq-responses|Strugatski y Alexandron (2026)]] aplican estadísticos de ajuste de persona (PFS) dentro de la TRT para distinguir las respuestas humanas de las de [[generative-ai|IA generativa]] en evaluaciones de opción múltiple. Los PFS marcan las respuestas de IA generativa como respondientes «aberrantes» en dos contextos auténticos (un examen de [[chemistry-education|química]] y un examen nacional), muestran que distintos [[conversational-ai|chatbots]] producen patrones de respuesta diferentes (un grupo heterogéneo de «inteligencias») y revelan que las versiones más nuevas de IA generativa se vuelven más parecidas a las humanas, lo que posiciona la TRT como un marco robusto para el cribado de [[academic-integrity|integridad]] en pruebas de alto impacto.

- **Los mismos ítems pueden no medir el mismo constructo latente para un LLM.** [[assessment-latent-structure-human-llm-2026|Strugatski, Zeinfeld y Alexandron (2026)]] compararon las estructuras factoriales de personas y LLM en dos instrumentos mediante análisis factorial exploratorio y emparejamiento por congruencia; la similitud LLM–humano se mantuvo de forma fiable por debajo de la línea base humano–humano, así que los parámetros de la TRT ajustados sobre personas no se transfieren automáticamente.

- **Estimación de dificultad con LLM frente a parámetros de TRT de Rasch:** [[razavi-powers-item-difficulty-llm-2026|Razavi y Powers (2026)]] evalúan si GPT-4o puede estimar la dificultad de ítems de evaluación de matemáticas y lectura de K-5 (N = 5170) calibrados bajo el modelo de TRT de Rasch. Un enfoque de estimación directa en cero disparos correlacionó de moderada a fuertemente con las dificultades reales de Rasch (r = 0,83 en matemáticas, r = 0,81 en lectura), pero fue desigual entre cursos y a menudo no mejor que un regresor ficticio de media de curso para los cursos K y 1, probablemente por la restricción de rango en las dificultades de los ítems de los cursos inferiores. Una estrategia basada en características — características cognitivas y lingüísticas extraídas por LLM introducidas en modelos de árboles — superó la estimación directa (correlaciones de hasta r = 0,87), con el nivel de curso y el número de palabras como mejores predictores. El estudio subraya que las estimaciones de dificultad de los LLM deben validarse contra parámetros de TRT ajustados empíricamente, y que la extracción estructurada de características puede afinar la predicción allí donde el juicio holístico en cero disparos se queda corto.

- **Simular a los respondientes puede recuperar lo que la regresión sobre el estímulo no puede:** un LLM multimodal ajustado finamente que reproduce las probabilidades de elección de opción del estudiantado a través de los niveles de habilidad aproximó la dificultad retenida en r = 0,85, por encima de las líneas base de regresión de MathBERT (0,68) y MetaMath (0,75), y recuperó el parámetro de adivinación c en 0,48 mientras que la discriminación a se mantuvo débil (0,31) ([[multimodal-item-parameter-estimation-2026|Ormerod y Kim, 2026]]).
- **Defectos de redacción de ítems como cribado previo al despliegue de los parámetros de TRT:** [[item-writing-flaws-irt-difficulty-2026|Schmucker y Moore (2026)]] comprueban si las rúbricas de defectos de redacción de ítems (IWF) — una evaluación textual, general al dominio y que no requiere datos del estudiantado — predicen la dificultad y la discriminación de la TRT estimadas empíricamente. En **7.126 preguntas de opción múltiple** de [[stem-education|STEM]] (ciencias físicas, [[math-education|matemáticas]], ciencias de la vida y de la Tierra), usaron codificación automatizada asistida por LLM para mostrar que las rúbricas IWF tienen validez predictiva respecto a los parámetros empíricos de la TRT, lo que ofrece un cribado escalable previo al despliegue que complementa o sustituye parcialmente las pruebas piloto intensivas en recursos.
- **Filtrado de riesgo basado en TRT para la calificación selectiva con IA:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros y Kortemeyer]] ajustan un modelo de TRT logístico de dos parámetros a datos de química manuscrita calificados por IA y definen el «riesgo» de aceptar un juicio de la IA como la desviación absoluta entre la puntuación normalizada de la IA y la probabilidad de crédito esperada por la TRT (Riesgo = |s−p|); aceptar solo los ítems dentro de una tolerancia elegida respecto a esta expectativa bayesiana marca las puntuaciones de IA «sorprendentes» para [[human-in-the-loop-ai|revisión humana]], lo que convierte la TRT de una herramienta pura de agregación de puntuaciones en un mecanismo operativo de aceptación o aplazamiento para la [[automated-assessment|evaluación automatizada]], uno que logró una alineación con la calificación humana similar a la de umbrales de crédito parcial más simples, pero con menor carga humana, aunque su lógica es menos transparente para audiencias no técnicas.

- **La TRT como capa de calibración dentro de un modelo diagnóstico:** PLCD añade una cabeza de adivinación y deslizamiento inspirada en la TRT sobre las respuestas a nivel de ejercicio, mejorando la calidad de la probabilidad más que la precisión —el error de calibración esperado cayó de 0,071 a 0,037 en XES3G5M—, lo que convierte la TRT en una corrección interna del ruido de respuesta y no solo en un modelo de puntuación ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

- **Calibración de divide y vencerás para bancos en evolución continua:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury et al. (2026)]] tratan la recalibración de la TRT como un problema de escalado y no de ajuste. Cuando la generación de ítems con IA y la predicción de parámetros basada en características hacen que un banco sea más grande, más disperso y se actualice de forma continua, reajustar todo el historial de respuestas en cada actualización se vuelve cada vez más costoso; su *calibración por consenso* calibra en cambio cada periodo una sola vez y combina un periodo nuevo con las posteriores anteriores ya calculadas. Dos rasgos la separan del trabajo previo de divide y vencerás en TRT: los periodos no comparten una métrica latente, así que cada uno se vincula a una métrica de referencia mediante un criterio robusto de Haebara resuelto *por separado para cada extracción posterior* (lo que arrastra el error de enlace a las posteriores enlazadas), y cada periodo es su propio ajuste jerárquico que aporta una prior estimada, de modo que al producto ingenuo de posteriores hay que dividirle esa prior y reinstaurar una prior de consenso — lo que se reduce a la regla de la máquina de comité bayesiana cuando las priors son fijas. Frente a una referencia agrupada en cuatro periodos trimestrales del Duolingo English Test, las medias posteriores coincidieron en r = 0,998 (dificultad) y 0,991 (log-discriminación) con desviaciones estándar posteriores de r = 0,970 y 0,920, lo que deja una leve subdispersión (razón de desviaciones estándar 0,91–0,98) que fue mayor en el tercil de menor exposición por periodo. Es calibración de TRT rediseñada para las condiciones de aplicación que crean los bancos de ítems generados por IA.

- **Con qué poca frecuencia la TRT ancla la validación de instrumentos:** una evaluación de instrumentos de alfabetización en IA del profesorado cuantifica la ausencia de TRT más que su uso. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore y Maat (2026)]] calificaron 33 instrumentos con una matriz de decisión adaptada de COSMIN y Terwee et al. (2007); la validez estructural fue sólida, con 24 (72,7%) en grado A mediante AFC, PLS-SEM o modelado de TRT, y sin embargo ninguno usó la TRT o Rasch como evidencia principal, y solo cinco instrumentos (15,2%) informaron de invariancia de medición o de evidencia de funcionamiento diferencial del ítem. Los autores abogan por la TRT y las tareas de desempeño junto con la autoevaluación para separar la capacidad validada de la confianza declarada.

- **Una alternativa causal a la TRT asociativa.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]] sostienen que la TRT y los modelos de estudiante basados en redes bayesianas no pueden expresar intervenciones ni contrafactuales, y en su lugar elicitan ecuaciones estructurales de especialistas; en una batería de test adaptativo con 109 estudiantes el modelo elicitado fue ligeramente menos predictivo (−287 frente a −277 de log-verosimilitud del test) pero admitió consultas contrafactuales sobre la ayuda.
- **Explicar la dificultad en lugar de predecirla.** [[explaining-question-difficulty-natural-language-2026|Cui et al. (2026)]] ajustaron un modelo Rasch 1PL a los registros de respuestas de LLM para GSM8K (1.319 preguntas), BBH-structured (1.396) y WinoGrande (1.267), con 5.000 modelos para GSM8K y WinoGrande y 3.811 para BBH-structured. Luego pidieron a un LLM que propusiera hipótesis en lenguaje natural sobre por qué un ítem es más difícil que otro, y las seleccionaron con una regresión regularizada L1 sobre preguntas dejadas fuera. Usadas por sí solas en preguntas no vistas, las hipótesis seleccionadas alcanzan R² = 0,373 en GSM8K, 0,580 en BBH-structured y 0,090 en WinoGrande, las mejores de los métodos comparados en GSM8K y WinoGrande y las segundas mejores en BBH-structured, donde un RoBERTa-base ajustado alcanza 0,646. Como características adicionales suman +0,11 a RoBERTa-base en GSM8K (de 0,362 a 0,468) y +0,19 y +0,18 a dos modelos de embeddings congelados. Una sonda causal edita 50 preguntas de prueba por conjunto hacia o fuera de una hipótesis.

### Conexiones

La TRT es un fundamento de la [[educational-measurement|medición educativa]] y de la [[assessment-validity|validez de la evaluación]], sustenta el [[adaptive-learning|aprendizaje adaptativo]] (selección adaptativa de ítems) y el [[student-modeling|modelado del estudiantado]], y se conecta con la [[psychometrically-aware-ai|IA psicométricamente consciente]] (evaluación con IA alineada con la teoría de la medición) y con el [[knowledge-tracing|trazado de conocimiento]]. Aparece en la [[llm-difficulty-calibration-programming-exams-2026|calibración de dificultad con LLM]] para la evaluación de programación.

## Conceptos conectados

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## Artículos conectados
- [[item-writing-flaws-irt-difficulty-2026]] — Impacto de los defectos de redacción de ítems en la dificultad y la discriminación de la TRT (Schmucker y Moore 2026)
- [[causal-modeling-competency-assessment-2026]] — Modelado causal de intervenciones de apoyo para la evaluación de competencias del estudiantado
- [[assessment-latent-structure-human-llm-2026]] — ¿Miden los instrumentos de evaluación lo mismo para las personas y para los LLM? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Validación de campo de TRT a gran escala de exámenes generados por IA
- [[jin-glat-genai-literacy-assessment]] — GLAT usa validación con TRT/2PL (Jin et al. 2025)
- [[llm-item-difficulty-prediction]] — Predicción de la dificultad de los ítems con LLM
- [[llm-psychometric-calibration-cdp]] — Alinear la evaluación con LLM con la calibración psicométrica
- [[llm-difficulty-calibration-programming-exams-2026]] — Calibración de dificultad con LLM en exámenes de programación
- [[multimodal-item-parameter-estimation-2026]] — Estimación multimodal de parámetros de ítems
- [[huang-interpretable-knowledge-tracing-2026]] — Trazado de conocimiento interpretable
- [[irt-human-genai-mcq-responses]] — Usar la TRT para separar respuestas humanas y de IA generativa en opción múltiple
- [[razavi-powers-item-difficulty-llm-2026]] — Estimar la dificultad de los ítems con LLM y aprendizaje automático basado en árboles
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Más allá de las incrustaciones de identificador: modelado del lenguaje anclado en el proceso para el diagnóstico cognitivo
- [[bayesian-consensus-irt-item-banks-2026]] — Calibración por consenso bayesiana de un banco de ítems de TRT en evolución continua (Jewsbury et al. 2026)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Auditoría de campo que muestra que la TRT/Rasch rara vez se usa como evidencia principal de validación en los instrumentos de alfabetización en IA del profesorado
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: la tutoría con IA y la humana producen ganancias de aprendizaje equivalentes en el GRE
- [[explaining-question-difficulty-natural-language-2026]] — Explicar la dificultad de las preguntas de LLM en lenguaje natural mediante TRI y ediciones causales (Cui et al. 2026)
