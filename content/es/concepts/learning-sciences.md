---
title: "Ciencias del aprendizaje"
created: "2026-09-28T20:12:29-04:00"
updated: "2026-09-28T20:12:29-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/learning-sciences
source_updated: "2026-09-17T14:48:59-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Ciencias del aprendizaje** — el campo de investigación interdisciplinar que estudia cómo aprenden las personas y cómo diseñar entornos en los que ocurra el aprendizaje, apoyándose en la [[cognitive-psychology|psicología cognitiva]], la [[learning-theories|teoría del aprendizaje]], la informática y la lingüística, y juzgando sus diseños con evidencia empírica y no solo con teoría. En esta base de conocimiento es el campo de investigación en torno a la [[ai-education|IA en la educación]] y no una de las asignaturas escolares: aporta los mecanismos que los sistemas de IA operacionalizan (componentes de conocimiento, [[mastery-learning|umbrales de dominio]], [[transfer-of-learning|transferencia]]), los objetos de diseño en los que se incrustan ([[learning-design|secuencias de curso planificadas]], [[intelligent-tutoring|tutores]], regímenes de [[feedback]]) y los estándares con los que se juzgan ([[learning-gains|ganancias de aprendizaje]], [[assessment-validity|validez de la evaluación]], [[equity-in-ai-education|equidad]]). Su pregunta organizadora no es si una herramienta funciona bien, sino si una persona que aprende cambió.

## Preguntas para reflexionar

- Una persona que aprende supera todos los ítems de práctica, así que el umbral de dominio pone fin al conjunto, y luego aplica mal la regla allí donde la acción debería retenerse. ¿De quién es el error: de quien aprende, del modelo o de la regla de parada?
- La minería de secuencias puede describir 554 cursos como patrones sin observar un aula. ¿Qué gana y qué pierde el campo al estudiar intenciones diseñadas en lugar de actividad puesta en práctica?
- La sensibilidad demográfica en el feedback de un LLM parece adaptación cuando sigue el nivel educativo declarado de quien aprende y sesgo cuando desplaza el sentimiento. ¿Debería un campo que no puede separar ambas cosas seguir usando modelos abiertos para evaluar?
- ¿Reduce el apetito de las ciencias del aprendizaje por el diseño causal —asignación aleatoria, auditorías contrafactuales, modelos ejecutables de quien aprende— lo que cuenta como evidencia en la IA en la educación?

## Introducción

Las ciencias del aprendizaje estudian el aprendizaje y el diseño de entornos de aprendizaje, y se definen tanto por sus métodos como por sus temas: experimentos, ensayos en el aula, modelado [[quantitative-research|cuantitativo]] de datos del estudiantado, análisis [[qualitative-research|cualitativo]] de diseños y contextos, e investigación basada en el diseño que construye una intervención y la revisa en uso. Esa amplitud separa esta página de las vecinas que aportan los marcos, la práctica y los instrumentos; la sección siguiente expone cada frontera y lo que el campo ha establecido al otro lado de ella.

Esta página cubre el conocimiento sustantivo que esos métodos han producido: qué hace quienes aprenden con un modelo generativo, qué disposiciones cambian los resultados y dónde fallan los propios instrumentos del campo. [[discipline-specific-aied|La IAEd específica de disciplina]] hace el corte opuesto, al sostener que la materia cambia lo que debe hacer el apoyo; las ciencias del aprendizaje adoptan la mirada transversal, y los mecanismos que prueban se reúnen en [[cognitive-psychology|la psicología cognitiva]].

### Cómo aparece la IA en las ciencias del aprendizaje

- **Primero el mecanismo, después el modelo.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren y Stamper (2026)]] realizaron once experimentos (N = 192) con sistemas de [[intelligent-tutoring|tutoría inteligente]] para Riichi Mahjong y mostraron que quienes aprenden que compilaron una producción sobregeneralizada —la acción sin su restricción de aplicación— la aplicaron mal en el primer ítem de «no actuar» entre el 61,5% y el 100% de las veces, frente a un 12% de error esperado según el [[knowledge-tracing|seguimiento bayesiano del conocimiento]]. Con un umbral de dominio del 95%, el sistema detuvo la práctica antes de que quienes aprendían se enfrentaran a un caso que exigía retener la acción, así que el defecto pasó inadvertido. Una práctica breve de «no actuar» con [[feedback]] que nombraba la restricción ausente redujo la mala aplicación al 0,0%–23,1% (h de Cohen 1,70–2,44), y un análisis secundario de trece conjuntos de datos de *Decimal Point* de K-12 encontró la misma estructura en el sesgo de números enteros (84%–88% de los errores de comparación).

- **El óptimo depende del contenido.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger y Carvalho (2025)]] tratan la proporción de ejemplos y problemas como una interacción contenido-tratamiento: en un experimento 2×2 con 95 participantes sobre material de áreas de geometría, el entrenamiento solo con práctica produjo mayores [[learning-gains|ganancias de aprendizaje]] para hechos literales, mientras que el entrenamiento integrado con ejemplos produjo mayores ganancias para habilidades generalizables (β = 0,41; p = 0,038; d = 0,38). Un aprendiz simulado (Apprentice Learner) reprodujo el cruce solo cuando se le dio un mecanismo de [[cognitive-psychology|memoria y olvido]] al estilo ACT-R. Más práctica no es uniformemente mejor: el contenido orientado a la memoria justifica la recuperación, y las habilidades orientadas a la inducción justifican ejemplos integrados.

- **El diseño como objeto analizable.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec y Horvat (2026)]] dirigieron la [[learning-analytics|analítica del aprendizaje]] hacia el propio [[learning-design|diseño del aprendizaje]], codificando 29.064 actividades de 554 cursos planificados en una herramienta gratuita de diseño de cursos. La adquisición fue el tipo de aprendizaje más común y el punto de entrada más frecuente; la transición de Markov más fuerte fue Evaluación → Discusión (0,332) y la regla de mayor confianza fue Adquisición → Evaluación → Práctica → Práctica (0,743; lift 1,45). El tipo de aprendizaje siguió el nivel de resultado previsto, con la adquisición cayendo de alrededor del 50% de las actividades en el nivel 1 de Bloom a en torno al 20% en el nivel 6. Los autores insisten en que se trata de diseños previos a la implementación: el parecido con secuencias invertidas, [[inquiry-based-learning|basadas en la indagación]] o [[project-based-learning|basadas en proyectos]] no es evidencia de intención.

- **Auditar los modelos que evalúan.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto y Hovy (2026)]] auditaron seis [[llm|LLM]] en [[automated-essay-scoring|puntuación de ensayos]], [[formative-assessment|feedback formativo]] y respuesta a preguntas, manteniendo fija la entrada de la tarea y variando solo el contexto demográfico (192.480 llamadas). La puntuación fue estable con personas explícitas, pero Llama-70B infló sus propias puntuaciones en 1,57 puntos con un historial de conversación implícito (p < 0,001), y la educación superior produjo respuestas menos legibles y más positivas: una brecha de sentimiento de unas cuatro desviaciones estándar. Los efectos de legibilidad se redujeron mientras los de longitud crecieron, y algunos coeficientes cambiaron de signo entre condiciones. Los autores lo ofrecen como instrumento de auditoría y no como veredicto de despliegue, y leen el entrelazamiento de la señal demográfica y la temática como una amenaza para la [[assessment-validity|validez]] y la [[equity-in-ai-education|equidad]].

- **Medir la competencia, y sus límites.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]] organiza los instrumentos para el uso competente de la [[generative-ai|IA generativa]] en cuatro dominios —conocimiento y uso, supervisión epistémica, calibración de la dependencia y control de agentes que usan herramientas— y se niega a colapsarlos en un único continuo de competencia. Tres correlaciones de la misma muestra entre la [[ai-literacy|alfabetización en IA]] autoevaluada y la demostrada se agruparon en r = 0,055 (IC del 95% [-0,047; 0,156]; N declarada = 2.765), lo que la autora lee como suficiente para rechazar tratar las [[self-report-measures|autoevaluaciones]] como intercambiables con las puntuaciones de desempeño, aunque no para fijar un punto de corte. Ningún instrumento validado cubría el conjunto completo de decisiones que crean los agentes que usan herramientas; la batería por capas propuesta es una hipótesis de diseño.

- **La autoevaluación sobre la propia delegación de quien aprende.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]] traduce la literatura sobre [[cognitive-offloading|delegación cognitiva]] a PAUSE, una autocomprobación solo para navegador con cuatro dominios, cada ítem de la era de los LLM anclado en una fuente, sin compuesto, sin almacenamiento y sin modelo en producción; sus bandas son descriptivas y no normadas, y una lectura no debe justificar decisiones de evaluación, admisión o contratación. Sus límites declarados importan: la autoevaluación de la delegación es vulnerable a la facultad que le preocupa, quien responde y usa deliberadamente la IA como [[scaffolding|andamiaje]] puntúa como delegación en varios ítems, y sigue abierto si la delegación asociada a la IA es distinta de la dependencia tecnológica general.

- **Dónde se sitúa la experiencia humana.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] informan de la división del trabajo más clara: en un [[rct|ensayo controlado aleatorizado]] de dos meses con unos 900 tutores noveles de K-12 y aproximadamente 1.800 estudiantes, las sugerencias en tiempo real extraídas del razonamiento de tutores con experiencia elevaron el dominio del tema en 4 puntos porcentuales (del 62% al 66%; p < 0,01), y en 9 puntos para los tutores peor valorados, a unos 20 dólares por tutor al año, desplazando la tutoría hacia preguntas guía. Las ganancias fueron próximas: las pruebas de fin de año no se movieron. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] encuentran que el profesorado llega a la misma posición por diseño: seis docentes de secundaria que prototiparon chatbots especificaron un experto acotado, manteniendo fronteras de autoridad (la responsabilidad del aprendizaje y de la seguridad no es delegable) y fronteras de experiencia (el modelo carece de su conocimiento de estudiantes concretos), y delegando la presentación de contenido, la práctica y el [[feedback]] correctivo mientras se reservaban el establecimiento de objetivos y la [[summative-assessment|evaluación sumativa]].

- **Capacidad a nivel del campo.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury y Liu (2026)]] encuestaron a 127 docentes universitarios con un instrumento [[tpack|TPACK]] adaptado a la IA generativa: conocimiento sólido del contenido y del contenido pedagógico (M = 4,70–5,15) junto a un conocimiento integrado de la tecnología marcadamente menor, con el TPACK holístico más bajo en 2,55, el conocimiento del contenido sin correlación con ningún dominio integrado de tecnología, y los tres dominios integrados correlacionando tan alto (r = 0,81–0,91) que podrían funcionar como un solo factor. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] lee la capa de gobernanza a través de un prototipo discontinuado de la administración pública británica cuya base de código era un prompt de sistema más una canalización de recuperación sobre modelos comerciales, y sostiene que la generalidad de los modelos fundacionales permite tanto la reutilización rápida en herramientas de [[educational-policy-ai|política]] como el hecho de que una salida aberrante sea un riesgo permanentemente solo mitigable: una supervisión que se asoma al bucle en lugar de situarse dentro de él.

## Cómo se relacionan las ciencias del aprendizaje con sus vecinas

[[design-based-research|La investigación basada en el diseño]] es el método que este campo desarrolló en lugar de tomar prestado: una intervención se construye y se revisa dentro de un aula en funcionamiento, con su justificación teórica revisada a la par, de modo que un solo estudio produce tanto un artefacto como un principio de diseño. Eso es lo que la separa de un experimento de laboratorio, que aísla una causa manteniendo quieto el contexto, y es la razón de que los hallazgos del campo lleguen como conocimiento de diseño y no como tamaños del efecto. [[research-methods-aied|Los métodos de investigación en IA en la educación]] hacen el otro corte: esa página repasa todo el repertorio —experimentos, encuestas, trabajo cualitativo, puntos de referencia, revisiones, métodos de consenso— como una elección entre instrumentos, sopesada por la validez de la afirmación que cada uno puede sostener. Esta página lee el mismo corpus desde el lado sustantivo, preguntando qué ha establecido el repertorio sobre el aprendizaje y juzgando un método por si su afirmación de diseño sobrevive al contacto con quienes aprenden.

[[learning-theories|Las teorías del aprendizaje]] reúnen los marcos candidatos —conductismo, cognitivismo, constructivismo, enfoques socioculturales, motivación y autorregulación— como lentes para leer la IA. Las ciencias del aprendizaje comparten ese vocabulario pero no esa postura: aquí una teoría es una afirmación sobre el mecanismo que un diseño debe instanciar o refutar, y el prestigio del campo se apoya en el trabajo empírico y de diseño y no en la coherencia de un marco. La página de teorías es la que hay que abrir para saber qué afirma un marco; esta página es la que hay que abrir para saber qué evidencia ha acumulado un marco.

El campo también construye teoría en lugar de limitarse a probar marcos ajenos: [[theory-development-aied|El desarrollo teórico en IAEd]] cubre el trabajo conceptual que explica cómo interactúan quienes aprenden, el profesorado y los sistemas de IA, y es donde los constructos propios del campo se argumentan antes de medirse. Lo que normalmente se pide a sus diseños que produzcan es [[transfer-of-learning|transferencia]] —conocimiento y habilidad que sobreviven al tutor, la asignatura o la tarea en que se aprendieron—, y por eso una ganancia medida dentro de una herramienta cuenta como una afirmación más débil que una medida sin ella. Y como un entorno diseñado es una intervención compuesta, atribuir un resultado a un solo componente es el problema de medición permanente del campo: [[educational-measurement|La medición educativa]] aporta el aparato psicométrico que hace que la atribución sea siquiera discutible, y por eso las cuestiones de medición llegan aquí pronto y no a posteriori.

[[cognitive-psychology|La psicología cognitiva]] es la disciplina a nivel de mecanismo de la que más se nutre el campo, y aporta la memoria de trabajo limitada, la codificación y la recuperación, los componentes de conocimiento descomponibles y el lenguaje diagnóstico del modelado de quien aprende. Las ciencias del aprendizaje usan esos mecanismos sin reducirse a ellos: su unidad de análisis es un entorno diseñado que lleva variables sociales, motivacionales y contextuales que un relato de laboratorio sobre la memoria no lleva, y sus pruebas se hacen sobre intervenciones completas y no sobre efectos cognitivos aislados.

[[pedagogy|La pedagogía]] y el [[learning-design|diseño del aprendizaje]] cubren la práctica: qué estrategia de enseñanza usar y cómo secuenciar objetivos, actividades y evaluación en un curso. Ambas son lo que las ciencias del aprendizaje estudian desde fuera, como objetos de descripción y evaluación; el campo no le dice a una docente qué táctica usar a continuación, sino que informa de lo que se ha demostrado que hacen las tácticas. El diseño del aprendizaje es el pariente más cercano, ya que ambos producen algo que se puede implementar y probar, pero el producto de quien diseña es un curso enseñable y el producto del campo es conocimiento sobre diseños en general.

Los hallazgos solo importan cuando llegan a la enseñanza, y ese recorrido pasa por tres páginas. [[educational-development|El desarrollo educativo]] es la práctica institucional que los transporta —el desarrollo del profesorado, los estándares, la política y el trabajo de identidad deciden si un diseño validado llega alguna vez a un aula, y por eso la evidencia del campo va sistemáticamente por delante de lo que las instituciones han implementado—. [[teacher-education|La formación del profesorado]] es donde el conocimiento tiene que aterrizar antes de que un docente entre en el aula, y el [[teacher-role|rol docente]] es donde aterriza después, en el juicio momento a momento sobre cuándo intervenir, qué instrumento usar y cuándo dejar en paz a quien aprende. Ninguna de las tres produce hallazgos de ciencias del aprendizaje; las tres deciden si esos hallazgos cambian la práctica.

## Conceptos conectados

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## Artículos conectados

- [[competent-generative-ai-use-measures-review-2026]] — Revisión y metaanálisis exploratorio de las medidas para el uso competente de la IA generativa (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — La corrección que enmascara una regla incompleta: reglas de parada por dominio en el aprendizaje adaptativo (An, McLaren y Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Auditoría contrafactual de las señales demográficas en la evaluación del estudiantado con LLM (Rooein, Benedetto y Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Cadenas de Markov y minería de patrones sobre 29.064 actividades en 554 cursos (Divjak, Svetec y Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — Una autocomprobación no diagnóstica y que preserva la privacidad para la delegación asociada a la IA (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Gobernanza cero disparos: la IA de propósito general en la política, leída a través de la base de código de Redbox (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Por qué la mejor proporción de ejemplos y problemas depende del contenido (Rachatasumrit, Koedinger y Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — El profesorado diseña chatbots de experto acotado, con delegación selectiva de la instrucción (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — TPACK de IA generativa del profesorado universitario: conocimiento del contenido sólido, conocimiento integrado de la tecnología débil (Sutedjo, Chowdhury y Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: un ensayo aleatorizado de tutoría en directo humano-IA a escala (Wang et al. 2024)
