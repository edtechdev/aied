---
connected_resources: [process-feedback]
title: Detección de IA
created: "2026-09-28T20:16:26-04:00"
updated: "2026-09-28T20:16:26-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
technology: [generative-ai, llm]
assessment: [ai-detection, assessment, assessment-validity, process-oriented-assessment]
ethics: [equity-in-ai-education]
audience: [learners]
level: [higher ed]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reduce-ai-cheating, ai-guidance-children-under-13]
institutions: [educational-policy-ai]
translation_of: concepts/ai-detection
source_updated: "2026-09-26T07:13:32-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La detección de IA** — las [[ai-technologies|tecnologías]] y los métodos que se emplean para identificar contenido generado por IA en las entregas académicas, y la cuestión más amplia de cómo deberían responder las instituciones al riesgo de que el estudiantado use modelos de lenguaje grandes (LLM) para producir trabajo que no es suyo. Abarca enfoques basados en clasificadores, técnicas de prompt latente y de verosimilitud, marcas de agua y análisis estilístico, y, cada vez más, debates sobre los límites de la detección y el valor de rediseñar la evaluación en lugar de vigilarla.

## Preguntas para reflexionar

- Si un detector de IA marca el ensayo de un estudiante como generado por IA, ¿cuánta confianza tendría en que la marca es correcta, y qué evidencia querría ver antes de actuar en consecuencia?
- Un argumento es que la detección de IA no solo es poco fiable sino conceptualmente errónea: un binario «humano frente a IA» ignora que el trabajo del estudiantado suele crearse *con* IA, y no *por* IA. Si el trabajo es híbrido, ¿qué significa siquiera «detectar IA»?
- Las herramientas de detección pueden estar sesgadas contra quienes escriben en una lengua no nativa, produciendo falsos positivos que penalizan injustamente al estudiantado. ¿Cómo ponderaría el riesgo de una [[legal-issues-and-risks|acusación falsa]] frente al valor de pillar un mal uso genuino?
- La detección puede socavar la integridad en lugar de protegerla, fomentando un clima de sospecha que erosiona la confianza. ¿Cómo cambia el hecho de sentirse vigilado su comportamiento, o el de un estudiante, en una evaluación?
- La investigación sugiere que la detección debería ser una herramienta limitada y situacional y no una estrategia de primera elección, y que el diseño de la evaluación debería reconocer el papel de la IA. ¿Qué alternativas a la detección podrían verificar mejor lo que un estudiante ha aprendido de verdad?
- Los detectores de IA no pueden verificarse de forma independiente en entregas reales: no hay una verdad de referencia sobre si un texto marcado fue realmente generado por IA. ¿Qué grado de comodidad le da actuar sobre una probabilidad inverificable en una investigación de integridad?

## Introducción

La detección de IA se sitúa en la intersección de la [[academic-integrity|integridad académica]], la [[generative-ai|IA generativa]], los [[llm|modelos de lenguaje grandes]] y la [[assessment|evaluación]]. Surgió cuando las instituciones se toparon con estudiantado que usaba LLM para redactar ensayos, código y respuestas breves. El campo tiene dos hilos entrelazados: la **detección técnica** (¿con qué fiabilidad puede identificarse el contenido generado por IA?) y la **respuesta institucional** (¿a qué debería llevar la detección, dados sus límites y sus problemas de equidad?).

## Enfoques de detección

La investigación de la base de conocimiento ilustra las principales familias técnicas:

- **Métodos de verosimilitud zero-shot y de prompt latente:** [[detecting-llm-generated-text-latent-prompt|EchoPrompt]] es un detector zero-shot sin entrenamiento que explota la dependencia del prompt latente inherente al texto generado por máquina. Al restaurar un prefijo genérico de respuesta de asistente y medir las diferencias de ganancia de verosimilitud entre modelos ajustados por instrucciones y modelos base, alcanza un estado del arte en detección sin entrenamiento y se mantiene robusto ante el cambio de dominio y los ataques de paráfrasis. Esto contrasta con los detectores estadísticos puramente probabilísticos que ignoran el mecanismo de generación.
- **Autodetección por LLM:** [[llm-detecting-llm-generated-content-education|Leinonen y Denny (2026)]] ponen a prueba si los LLM pueden detectar de forma fiable su propio contenido generado en tareas de programación, escritura reflexiva y respuesta breve. La detección resulta **muy dependiente de la tarea**: fiable en programación y en respuestas reflexivas largas, pero pobre en respuestas breves, donde los LLM a menudo juzgan su propia salida como *más* humana que el trabajo auténtico del estudiantado. Variaciones menores en el prompt reducen bruscamente la precisión.
- **Enfoques basados en clasificadores y en marcas de agua:** los clasificadores estadísticos y las marcas de agua están ampliamente desplegados en herramientas comerciales, aunque su fiabilidad se cuestiona a medida que las salidas de los LLM se vuelven más sofisticadas.

## Los límites y los riesgos de la detección

La investigación advierte de forma consistente contra confiar en la detección de manera aislada:

- **Fallos de validez y de equidad:** las herramientas de detección pueden estar sesgadas contra quienes escriben en una lengua no nativa, produciendo falsos positivos que penalizan injustamente al estudiantado, una preocupación que conecta con la [[bias-mitigation|mitigación de sesgos]] y la [[equity-in-ai-education|equidad en la educación con IA]].
- **Tasas de error notables y erosión de la confianza:** una detección poco fiable socava la [[trust|confianza]] del estudiantado y la integridad del proceso de evaluación.
- **Dependencia de la tarea:** como muestra el estudio de autodetección, la precisión varía bruscamente según el tipo de tarea, así que ningún detector es fiable en todas las evaluaciones.
- **El dilema sin salida de la integridad (catch-22), cuantificado.** [[karr-ai-detection-humanization-2026|Un estudio controlado de 642 resúmenes publicados (Karr et al. 2026)]] muestra que el fallo de la [[educational-policy-ai|política]] no es solo conceptual sino medido: la edición ligera con IA conforme a las directrices se marca entre el 38% y el 80%, los originales recientes sin modificar entre el 9% y el 15% (muy por encima en las disciplinas no STEM que en las STEM), y el texto de IA asistido por humanizadores evade la detección en más del 96% de los casos. Como los detectores se fijan en el estilo superficial (densidad de tokens largos y de palabras académicas) y no en la intención de autoría, la asistencia honesta con IA atrae sanciones mientras que la evasión deliberada con humanizadores escapa; los autores sostienen que las puntuaciones de los detectores nunca deberían ser prueba de mala conducta por sí solas.

Las evaluaciones empíricas más recientes hacen concretas esas tasas de error en lugar de genéricas. [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge y Mesbah (2026)]] aplicaron Turnitin y Originality a un corpus equilibrado de 192 textos de trabajos reales de inglés como lengua extranjera (EFL), escritura profesional, salida de IA e híbridos 50/50: la precisión macro alcanzó solo 0,69 y 0,61, ambas cayeron por debajo de un F1 macro de 0,55, y ambas fueron prácticamente inútiles en los textos híbridos (sensibilidad de Originality 0,02), con la precisión bajando de forma significativa a medida que los textos se alargaban y de nuevo en la escritura científica, además de una tendencia casi significativa a clasificar erróneamente trabajo legítimo del estudiantado de EFL. [[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer, Van Droogenbroeck y Spruyt (2026)]] probaron cuatro herramientas comerciales contra un corpus de 160 tesis de máster con verdad de referencia controlada: tres de ellas (Turnitin, GPTZero, Copyleaks) fallaron casi por completo en los trabajos totalmente generados por IA, mientras que solo Pangram rindió de forma convincente, y al aplicarse a 1.163 tesis realmente entregadas marcó el 45,5% de ellas, una cifra que los autores insisten en que no es una tasa de prevalencia porque las entregas reales no tienen verdad de referencia. Ambos estudios llegan a la misma conclusión procedimental: una puntuación de detector puede motivar una revisión más atenta, pero no es una conclusión. La cuestión de la calibración también corta en el otro sentido: como la etiqueta de alta confianza de GPTZero conllevaba tasas de falsos positivos a nivel de solicitante del 0,7%, el 0,5% y el 1,4% entre 2020 y 2022, [[ai-written-admissions-essays-penalized-2026|Isley, Gaebler y Goel (2026)]] leen sus marcas como una serie de prevalencia conservadora a lo largo de seis ciclos de admisión en un máster de políticas públicas estadounidense: la proporción de solicitantes que entregaron al menos un ensayo marcado subió del 21,8% en 2023 al 45,1% en 2024 y al 56,1% en 2025 frente a una prohibición firmada, y alcanzó el 69,3% de solicitantes internacionales frente al 38,6% de nacionales. Los lectores humanos fueron un instrumento aún más débil: cinco responsables de admisión que separaron 50 ensayos humanos de 50 ensayos de IA alcanzaron un AUC de 0,70 (IC del 95% [0,65, 0,75]), por encima del azar pero muy por debajo de los detectores comerciales.

Incluso un detector interpretable que rinde bien mantiene sus errores en el nivel de los documentos. [[detecting-gpt-assisted-writing-stylometric-2026|Kumar, Siddiqui y Fuchsberger (2026)]] entrenaron clasificadores a nivel de ventana sobre nueve rasgos estilométricos interpretables — ratio tipo-token, ratio de hápax, entropía de palabras, ratio de palabras no vacías, ratios de categorías gramaticales y variabilidad de la longitud de las oraciones — con 90 participantes que escribieron los mismos prompts de forma independiente y luego parafraseando la salida de GPT, manteniendo todas las ventanas de un participante en un mismo pliegue y probando con 18 escritores no vistos. Random Forest alcanzó un ROC-AUC de 0,870 y un F1 de 0,842 en 36 documentos reservados, pero aun así marcó 4 de 18 documentos escritos de forma independiente como asistidos por GPT, una tasa de falsos positivos del 22,2% (IC del 95% 9,0-45,2%); la atribución [[explainable-ai|SHAP]] puso el mayor peso en el ratio de hápax. Los autores enmarcan el modelo como apoyo a la decisión que debería motivar una revisión contextual y no como un filtro automático de mala conducta, y la precisión que alcanza no reduce la apuesta de sus errores: cada falso positivo es un documento escrito de forma independiente acusado de asistencia de GPT, un problema de validez y no de ajuste.

Los problemas definicionales y procedimentales conviven con los estadísticos. [[wright-transcription-not-generation-2026|Wright (2026)]] sostiene que las prohibiciones generales sobre el «uso de IA» se redactan en torno a la identidad de la plataforma y no a su función, de modo que capturan la conversión de formato no generativa — transcripción de voz a texto, OCR, texto plano a LATEX — junto con la redacción generativa que pretenden impedir; y como los detectores leen la escritura de baja perplejidad como autoría de máquina, los falsos positivos resultantes recaen con más fuerza sobre el estudiantado con discapacidad y expuesto a la [[equity-in-ai-education|inequidad]]. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] llega a la versión de diseño de la misma conclusión y sitúa la detección, como mucho, como una capa suplementaria de la infraestructura de integridad, ya que pregunta si se usó IA generativa y no cómo se tomaron las decisiones.

La investigación sobre detección también conlleva un argumento de validez que sobrevive a las cuestiones de precisión. Weidlich (2026) trata la salida del detector como una señal condicional y probabilística que puede motivar una indagación adicional pero no puede por sí sola establecer mala conducta o competencia, lo que convierte una gobernanza centrada en la detección en una base insuficiente para sostener la [[assessment-validity|validez de la evaluación]]. El rendimiento de la clasificación varía de forma sistemática entre herramientas, tipos de tarea, disciplinas, versiones de modelo y prácticas de edición humano-IA, y la escritura STEM formulista es especialmente susceptible al sesgo algorítmico. Los intentos de restaurar la seguridad de la evaluación mediante la detección corren entonces el riesgo de introducir varianza irrelevante para el constructo, amenazando la equidad y la interpretación de las puntuaciones.

## Por qué no usar (ni intentar usar) detectores de IA

[[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] sostienen que la detección de IA generativa **no debería usarse en educación en absoluto**, por razones que van más allá de «tener cuidado» hasta «esto es conceptualmente erróneo». Su argumento consolida las razones contra confiar en los detectores de IA:

1. **Estimaciones probabilísticas inverificables.** Los detectores de IA producen una probabilidad de que el texto haya sido generado por IA, basada en marcadores lingüísticos (perplejidad, burstiness). A diferencia de otras herramientas probabilísticas (filtros de spam, diagnósticos médicos), sus resultados **no pueden verificarse de forma independiente**: en condiciones reales no existe una verdad de referencia sobre si un texto marcado fue realmente generado por IA, así que la validación se reduce a un razonamiento circular. Las métricas de detección de señal (tasas de falsos positivos y falsos negativos) solo se aplican en pruebas controladas, no en entregas reales.
2. **Datos de entrenamiento y de prueba cuestionables.** Los detectores se entrenan y se validan con escritura humana anterior a la IA generativa (por ejemplo, Turnitin se probó con 700.000 trabajos anteriores a 2019). El supuesto de que ese texto refleja la escritura contemporánea del estudiantado —que ahora escribe moldeado por la IA— no está verificado, y el rendimiento cambia con el modelo, el prompt y la plataforma.
3. **Los marcadores lingüísticos mutuamente excluyentes son un supuesto defectuoso.** No hay ninguna razón de principio por la que un humano no pueda escribir con los rasgos lingüísticos atribuidos a la IA (ni una IA con rasgos humanos), así que la base misma de los marcadores es frágil.
4. **La falsa dicotomía.** Clasificar el texto como humano o generado por IA ignora la realidad de que el trabajo del estudiantado se crea con frecuencia *con* IA y no *por* IA: un continuo híbrido. El binario no solo es inadecuado, carece de sentido, lo que hace que la detección sea conceptualmente defectuosa desde el principio.
5. **Injusticia procesal e insuficiencia probatoria.** Las investigaciones de integridad académica deben cumplir el estándar de balance de probabilidades; las puntuaciones de los detectores de IA —solas o combinadas con marcadores lingüísticos, comparaciones de estilo, afirmaciones de un LLM o el silencio del estudiante— no lo alcanzan. El estudiantado bajo investigación también conserva un derecho al silencio, que los procesos guiados por la detección erosionan.
6. **Riesgos de seguridad y de privacidad.** Los detectores almacenan el trabajo del estudiantado en servidores (a veces en el extranjero, con protecciones de [[privacy|privacidad]] más débiles), lo que crea riesgos de brechas, mal uso y explotación comercial.
7. **La detección socava la integridad en lugar de protegerla.** Confiar en detectores y en la vigilancia fomenta un clima de sospecha que erosiona la [[trust|confianza]] del estudiantado y la integridad de la propia evaluación.

Bassett et al. concluyen que la detección de IA es una solución inviable a un problema que no puede resolverse mediante la vigilancia y el castigo: el foco debe pasar al [[assessment|diseño de la evaluación]] que reconoce el papel de la IA en el aprendizaje y la realidad de que las evaluaciones no supervisadas no pueden asegurarse. Esto consolida la postura de la base de conocimiento de [[beyond-detection-authentic-assessment-ai-2025|ir más allá de la detección]] con un argumento directo y basado en la evidencia para retirar las herramientas de detección.

### Sesgo de los detectores y el mecanismo de la carrera armamentística

La detección no es solo imprecisa; sus errores tienen un patrón. [[teichmann-detecting-undetectable-misconduct-2026|Teichmann (2026)]] reúne el caso acumulado contra tratar la puntuación de un detector como prueba: ninguna herramienta del [[benchmark|punto de referencia]] temprano más completo alcanzó el 80% de precisión; la paráfrasis simple o el «humanizado» reduce aproximadamente a la mitad incluso esa cifra; los falsos positivos a tasas base realistas superan a los verdaderos; y quienes hablan inglés como segunda lengua se clasifican mal de forma sistemática porque los rasgos que los detectores tratan como señales de IA también caracterizan la escritura competente en una segunda lengua. El juicio humano no cubre el hueco: tanto quienes corrigen con experiencia como quienes son novatos fracasan al distinguir prosa de IA de prosa de estudiante y se muestran seguros cuando se equivocan; y la asimetría del error significa que se pilla a los descuidados pero honestos mientras que quienes son deliberadamente deshonestos escapan, ya que los detectores también son opacos (sin umbrales, sin datos de entrenamiento, sin replicación independiente) y por tanto no pueden ser respondidos ni contrainterrogados en una audiencia.

Dos puntos más agudizan la apuesta práctica. Primero, la señal estadística subyacente se encoge a medida que los modelos se optimizan hacia la prosa humana, así que la carrera armamentística es una que una institución no puede ganar. Segundo, el caso límite empírico es contundente: en un estudio de campo encubierto, el 94% de las entregas totalmente generadas por IA pasaron inadvertidas por un sistema de [[summative-assessment|examen]] en línea en vivo a lo largo de cinco módulos de psicología, y el trabajo de IA superó de media a estudiantes reales. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed y Temimi (2026)]] añaden el corolario contraintuitivo que determina cuándo la monitorización compensa en absoluto: como la sensibilidad eleva los falsos positivos junto con los verdaderos positivos, el elemento disuasorio racional es la discriminación, es decir, la brecha entre marcar el uso oculto y marcar el trabajo legítimo. Donde una sensibilidad extra crea más falsos positivos nuevos que verdaderos positivos nuevos, más monitorización hace que el ocultamiento resulte relativamente más atractivo, penalizando a los estudiantes honestos más rápido de lo que identifica a los usuarios ocultos. La consecuencia de diseño es que los detectores, las reglas y los procedimientos de declaración no deberían construirse por separado.

## Más allá de la detección: el rediseño de la evaluación

Un tema clave de la base de conocimiento es que la detección debería ser una **herramienta limitada y situacional, no una estrategia de primera elección**. [[beyond-detection-authentic-assessment-ai-2025|Kickbusch et al. (2025)]] sostienen que la vigilancia y la detección **diagnostican mal el problema**: en un mundo mediado por IA, la autenticidad no puede imponerse por vigilancia; debe rediseñarse. Reconceptualizan la autenticidad como algo construido allí donde se espera, se declara y se escruta la IA, y ofrecen patrones de diseño para el aprendizaje independientes de la disciplina que sitúan la IA como colaboradora y no como aplicación para copiar. Esto conecta la detección con la [[authentic-assessment|evaluación auténtica]], la [[assessment-validity|validez de la evaluación]], la [[responsible-assessment-ai-era-stanford-2026|evaluación responsable]] y la [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|integridad de coautoría]].

La pregunta constructiva pasa de «¿cómo impedimos que el estudiantado use IA?» a «¿cómo les permitimos usarla de forma reflexiva, responsable y eficaz en contextos que reflejan su trabajo futuro?». La detección conecta por tanto con la [[ai-literacy|alfabetización en IA]] (ayudar al estudiantado a [[reducing-ai-misuse|usar la IA de forma responsable]]), con la [[cognitive-offloading|dependencia excesiva]] (entender cuándo el uso de IA socava el aprendizaje) y con el objetivo más amplio de apoyar el aprendizaje genuino en lugar de vigilar las entregas. También enlaza con fenómenos del lado del estudiantado, como la [[student-rationalization-ai-writing|racionalización del estudiantado sobre la escritura con IA]] y el reto de la detección de identidad en [[socially-fluent-ai-identity-detection|contextos de IA socialmente fluida]].

## Implicaciones para la IA en la educación

- **La detección es situacional:** las instituciones deberían usar las herramientas de detección con moderación y con conciencia de sus tasas de error, sus límites de equidad y su dependencia de la tarea, no como una puerta automática y aislada.
- **El diseño de la evaluación importa más que la vigilancia:** invertir en [[authentic-assessment|evaluación auténtica]] y [[process-oriented-assessment|evaluación basada en procesos]], donde el uso de IA se espera y se declara, aborda la integridad con más eficacia que la detección por sí sola.
- **Equidad e igualdad:** las herramientas de detección que penalizan a quienes escriben en una lengua no nativa o que producen falsos positivos corren el riesgo de amplificar las inequidades existentes.
- **La alfabetización en IA es complementaria:** ayudar al estudiantado a entender la diferencia entre el uso apropiado y el [[ai-misuse-learning-harm|uso dañino de la IA]] es más productivo que confiar en la vigilancia.

- **Advertencia sobre la fiabilidad de la detección.** Una [[meta-analysis-systematic-review|revisión sistemática]] sobre IA e integridad académica concluye que las herramientas de plagio y de detección de IA no son fiables para el trabajo generado por IA y deberían combinarse con múltiples métodos de evaluación y con revisión manual, lo que refuerza que la detección es una herramienta limitada y situacional.([[ssaho-ai-academic-integrity-review-2025]])
- **Más allá de la detección: diálogo en lugar de vigilancia.** Un relato de práctica sobre el marco de verificación del aprendizaje de la Grand Canyon University ([[best-response-student-ai-dialog-2026|Mandernach 2026]]) sostiene que la mejor respuesta al [[student-ai-interaction|uso de IA por parte del estudiantado]] es el diálogo y no la detección. Como los detectores son poco fiables (y están sesgados contra quienes escriben en una lengua no nativa), la GCU dejó de preguntar «¿usó el estudiante IA?» y en su lugar pide al estudiantado que demuestre comprensión en una breve conversación, una extensión del [[authentic-assessment|rediseño de la evaluación]] que trata la detección como un callejón sin salida y la verificación como buena docencia.

## Conceptos conectados

- [[academic-integrity]]
- [[llm]]
- [[generative-ai]]
- [[assessment]]
- [[assessment-validity]]
- [[authentic-assessment]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[higher-ed]]
- [[ai-education]]
- [[legal-issues-and-risks]]

## Artículos conectados
- [[evaluation-age-ai-output-evidence-2026]] — La evaluación en la era de la IA
- [[best-response-student-ai-dialog-2026]]
- [[ai-tools-academic-work-cheating-2026]]
- [[detecting-llm-generated-text-latent-prompt]] — EchoPrompt: detector por restauración del prompt latente
- [[ivory-psychology-assessment-integrity-2026]] — La detección es la palanca equivocada: el umbral de aprobado decidía si el trabajo con IA se calificaba como logro (Ivory et al. 2026)
- [[llm-detecting-llm-generated-content-education]] — Evaluación de los LLM para detectar contenido generado por LLM
- [[beyond-detection-authentic-assessment-ai-2025]] — Más allá de la detección: la evaluación auténtica
- [[responsible-assessment-ai-era-stanford-2026]] — Evaluación responsable en la era de la IA
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Integridad de coautoría y validez de la evaluación
- [[student-rationalization-ai-writing]] — La racionalización del estudiantado sobre la escritura con IA
- [[socially-fluent-ai-identity-detection]] — Detección de identidad en IA socialmente fluida
- [[ssaho-ai-academic-integrity-review-2025]] — Revisión de la fiabilidad de la detección de plagio y de contenido de IA
- [[bassett-ai-detectors-education-2026]] — Cara gano yo, cruz pierdes tú: los detectores de IA en educación (Bassett et al. 2026)
- [[teichmann-detecting-undetectable-misconduct-2026]] — Por qué la salida de un detector no puede fundamentar una conclusión de mala conducta
- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — La discriminación en lugar de la tasa de detección, y cuándo la monitorización se vuelve contraproducente
- [[hadra-ai-detector-accuracy-efl-2026]] — Turnitin y Originality sobre 192 textos: ambas por debajo de un F1 macro de 0,55 y casi inútiles en escritura híbrida
- [[van-vlasselaer-ai-detector-reliability-2026]] — Cuatro detectores contra 160 trabajos con verdad de referencia; solo Pangram rindió, y aun así marcó el 45,5% de las tesis reales
- [[munoz-misconduct-allegation-evidence-2026]] — La salida del detector es el tipo de evidencia peor valorado en 1.162 expedientes reales de mala conducta
- [[wright-transcription-not-generation-2026]] — Las reglas generales sobre el «uso de IA» confunden transcripción con generación
- [[sharma-judgment-visible-genai-assessment-2026]] — La detección degradada a capa suplementaria tras el juicio visible
- [[weidlich-inference-at-risk-assessment-validity-2026]] — La detección como señal condicional, y por qué las respuestas de seguridad añaden varianza irrelevante para el constructo (Weidlich 2026)
- [[ai-written-admissions-essays-penalized-2026]] — Los ensayos de admisión escritos por IA están muy extendidos pero se penalizan
- [[detecting-gpt-assisted-writing-stylometric-2026]] — Nueve rasgos estilométricos interpretables: ROC-AUC 0,870 pero cuatro de 18 documentos escritos de forma independiente marcados (Kumar et al. 2026)
- [[computing-assessment-genai-workshop-report-2026]] — La IA puede hacer tus deberes. ¿Y ahora qué? Informe de un taller en línea sobre la evaluación en informática en la era de la IA generativa
