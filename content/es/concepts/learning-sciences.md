---
title: "Ciencias del aprendizaje"
created: "2026-09-28T20:12:29-04:00"
updated: "2026-10-26T22:02:40-04:00"
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
source_updated: "2026-10-26T07:05:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa.*

> **Ciencias del aprendizaje** — el campo de investigación interdisciplinar que estudia cómo aprenden las personas y cómo diseñar entornos en los que ocurre el aprendizaje, apoyándose en la [[cognitive-psychology|psicología cognitiva]], la [[learning-theories|teoría del aprendizaje]], la informática y la lingüística, y juzgando sus diseños con evidencia empírica y no solo con teoría. En esta base de conocimientos es el campo de investigación en torno a la [[ai-education|IA en la educación]] y no una de las asignaturas escolares: aporta los mecanismos que los sistemas de IA operacionalizan (componentes de conocimiento, [[mastery-learning|umbrales de dominio]], [[transfer-of-learning|transferencia]]), los objetos de diseño en los que se incrustan ([[learning-design|secuencias de curso planificadas]], [[intelligent-tutoring|tutores]], regímenes de [[feedback]]) y los estándares con los que se juzgan ([[learning-gains]], [[assessment-validity]], [[equity-in-ai-education|equidad]]). Su pregunta organizadora no es si una herramienta funciona bien, sino si una persona que aprende cambió.

## Preguntas para reflexionar

- Una persona que aprende supera todos los ítems de práctica, así que el umbral de dominio pone fin al conjunto, y luego aplica mal la regla allí donde la acción debería retenerse. ¿De quién es el error: de la persona que aprende, del modelo o de la regla de parada?
- La minería de secuencias puede describir 554 cursos como patrones sin observar un aula. ¿Qué gana y qué pierde el campo al estudiar intenciones diseñadas en lugar de actividad efectivamente desplegada?
- La sensibilidad demográfica en la retroalimentación de un LLM parece adaptación cuando sigue el nivel educativo declarado de la persona que aprende y sesgo cuando desplaza el sentimiento. ¿Debería un campo que no puede separar ambas cosas seguir usando modelos abiertos para evaluar?
- ¿Reduce el apetito de las ciencias del aprendizaje por el diseño causal —asignación aleatoria, auditorías contrafactuales, modelos ejecutables de la persona que aprende— lo que cuenta como evidencia en la IA en la educación?

## Introducción

Las ciencias del aprendizaje estudian el aprendizaje y el diseño de entornos de aprendizaje, y se definen tanto por sus métodos como por sus temas: experimentos, ensayos en el aula, modelado [[quantitative-research|cuantitativo]] de datos del estudiantado, análisis [[qualitative-research|cualitativo]] de diseños y contextos, e investigación basada en el diseño que construye una intervención y la revisa en uso. Esa amplitud separa esta página de las vecinas que aportan los marcos, la práctica y los instrumentos; la sección siguiente expone cada frontera y lo que el campo ha establecido al otro lado de ella.

Esta página cubre el conocimiento sustantivo que tales métodos han producido —lo que hacen las personas que aprenden con un modelo generativo, qué disposiciones cambian los resultados y dónde fallan los propios instrumentos del campo—. [[discipline-specific-aied]] hace el corte opuesto, al sostener que la materia concreta cambia lo que el apoyo debe hacer; las ciencias del aprendizaje adoptan la perspectiva transversal, y los mecanismos que ponen a prueba se reúnen bajo [[cognitive-psychology]].

### Cómo aparece la IA en las ciencias del aprendizaje

- **Primero el mecanismo, luego el modelo.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren y Stamper (2026)]] realizaron once experimentos (N = 192) con sistemas de [[intelligent-tutoring]] para el Riichi Mahjong y mostraron que quienes aprendían y compilaban una producción sobregeneralizada —la acción sin su restricción de aplicación— la aplicaban mal en el primer ítem de «no actuar» en un 61,5%–100%, frente al 12% de error esperado bajo [[knowledge-tracing|trazado de conocimiento bayesiano]]. Con un umbral de dominio del 95% el sistema detenía la práctica antes de que quienes aprendían se encontraran con un caso que exigiera retener la acción, así que el defecto pasaba desapercibido. Una práctica breve de «no actuar» con [[feedback]] que nombraba la restricción ausente redujo la aplicación indebida a un 0,0%–23,1% (h de Cohen 1,70–2,44), y un análisis secundario de trece conjuntos de datos K-12 de *Decimal Point* encontró la misma estructura en el sesgo de números enteros (84%–88% de los errores de comparación).
- **Un consenso cartografía dónde la IA generativa ayuda y dónde perjudica al aprendizaje.** Un Delphi preregistrado con 30 científicos del aprendizaje valoró 65 procesos de aprendizaje y alcanzó acuerdo en 42: la IA generativa amenaza la adquisición inicial y el [[critical-thinking|pensamiento de orden superior]] pero mejora la consolidación ([[genai-support-threaten-learning-k20-expert-consensus-2026|Kendeou et al., 2026]]).
- **El estilo de retroalimentación, y no el tipo de agente, movió la implicación autorregulada.** En un experimento 2 × 2 con 51 estudiantes de posgrado, la retroalimentación [[socratic-method|socrática]] se asoció con una monitorización de la comprensión más sólida, mientras que la retroalimentación directiva conllevó una mayor carga cognitiva; los dos estilos se aplicaron en una secuencia fija y no contrabalanceada, así que el contraste es relativo a la condición y no causal ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

- **El óptimo depende del contenido.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger y Carvalho (2025)]] tratan la proporción de ejemplos y problemas como una interacción contenido-tratamiento: en un experimento 2×2 con 95 participantes sobre material de áreas de geometría, el entrenamiento basado solo en práctica produjo mayores [[learning-gains|ganancias de aprendizaje]] para los datos factuales literales, mientras que el entrenamiento con ejemplos integrados produjo mayores ganancias para las habilidades generalizables (β = 0,41, p = 0,038, d = 0,38). Una persona que aprende simulada (Apprentice Learner) reprodujo el cruce solo cuando se le dotó de un mecanismo [[cognitive-psychology|de memoria y olvido al estilo ACT-R]]. Más práctica no es uniformemente mejor: el contenido orientado a la memoria justifica la recuperación, y las habilidades orientadas a la inducción justifican ejemplos integrados.
- **El diseño como objeto analizable.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec y Horvat (2026)]] aplicaron [[learning-analytics]] al propio [[learning-design]], codificando 29.064 actividades en 554 cursos planificados con una herramienta libre de diseño de cursos. La adquisición era el tipo de aprendizaje más común y el punto de entrada más frecuente; la transición de Markov más fuerte fue Evaluación → Discusión (0,332) y la regla de mayor confianza fue Adquisición → Evaluación → Práctica → Práctica (0,743, lift 1,45). El tipo de aprendizaje seguía el nivel de resultado previsto, cayendo la Adquisición desde alrededor del 50% de las actividades en el nivel 1 de Bloom hasta cerca del 20% en el nivel 6. Los autores insisten en que se trata de diseños previos a la implementación: el parecido con secuencias invertidas, de [[inquiry-based-learning|indagación]] o de [[project-based-learning|proyectos]] no es prueba de intención.
- **Auditar los modelos que evalúan.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto y Hovy (2026)]] auditaron seis [[llm|LLM]] en [[automated-essay-scoring|corrección de ensayos]], [[formative-assessment|retroalimentación formativa]] y respuesta a preguntas, manteniendo fija la entrada de la tarea y variando únicamente el contexto demográfico (192.480 llamadas). La puntuación fue estable bajo personas explícitas, pero Llama-70B infló sus propias puntuaciones en 1,57 puntos bajo un historial conversacional implícito (p < 0,001), y la educación superior obtuvo respuestas menos legibles y más positivas: una brecha de sentimiento de aproximadamente cuatro desviaciones típicas. Los efectos de legibilidad se redujeron mientras los de longitud crecieron, y algunos coeficientes cambiaron de signo entre condiciones. Los autores lo ofrecen como instrumento de auditoría, no como veredicto de despliegue, y leen el entrelazamiento de la señal demográfica y la señal temática como una amenaza para la [[assessment-validity|validez]] y la [[equity-in-ai-education|equidad]].
- **Medir la competencia, y sus límites.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]] organiza los instrumentos para el uso competente de la [[generative-ai]] en cuatro dominios —conocimiento y uso, supervisión epistémica, calibración de la dependencia y control de agentes que usan herramientas—, negándose a colapsarlos en un único continuo de competencia. Tres correlaciones entre valoraciones propias y [[ai-literacy|alfabetización en IA]] demostrada, calculadas sobre la misma muestra, se agruparon en r = 0,055 (IC del 95% [-0,047, 0,156], N declarada = 2.765), lo que el autor lee como suficiente para rechazar tratar las [[self-report-measures|autovaloraciones]] como intercambiables con las puntuaciones de desempeño, aunque no para fijar un umbral. Ningún instrumento validado cubría el conjunto completo de decisiones que crean los agentes que usan herramientas; la batería por capas propuesta es una hipótesis de diseño.
- **La autovaloración sobre la propia delegación cognitiva de quien aprende.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]] traduce la literatura sobre [[cognitive-offloading]] a PAUSE, una autocomprobación solo de navegador con cuatro dominios, cada ítem de la era de los LLM anclado a una fuente, sin compuesto, sin almacenamiento y sin modelo en producción; sus bandas son descriptivas y no normativas, y una lectura no debe justificar decisiones de evaluación, admisión o contratación. Sus límites declarados importan: la autovaloración de la delegación cognitiva es vulnerable a la propia facultad que le preocupa, una persona que responde y que usa deliberadamente la IA como [[scaffolding|andamiaje]] aparece como delegación cognitiva en varios ítems, y si la delegación asociada a la IA es distinta de la dependencia general de la tecnología sigue abierto.
- **Dónde reside la experiencia humana.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang et al. (2024)]] presentan la división del trabajo más clara: en un [[rct|ensayo controlado aleatorizado]] de dos meses con unos 900 tutores noveles de K-12 y unos 1.800 estudiantes, las sugerencias en tiempo real extraídas del razonamiento de tutores experimentados elevaron el dominio del tema en 4 puntos porcentuales (del 62% al 66%, p < 0,01), y en 9 puntos para los tutores peor valorados, con un coste de unos \\$20 por tutor y año, orientando la tutoría hacia las preguntas orientadoras. Las ganancias fueron próximas: las pruebas de fin de año no se movieron. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert et al. (2026)]] encuentran al profesorado llegando a la misma posición por diseño: seis docentes de secundaria que prototipaban chatbots especificaron un experto acotado, manteniendo fronteras de autoridad (la responsabilidad del aprendizaje y la seguridad no es delegable) y fronteras de experiencia (al modelo le falta su conocimiento de los estudiantes individuales), y delegando la presentación de contenidos, la práctica y el [[feedback]] correctivo, y reservando la fijación de objetivos y la [[summative-assessment|evaluación sumativa]].
- **Capacidad al nivel del campo.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury y Liu (2026)]] encuestaron a 127 docentes universitarios con un instrumento [[tpack|TPACK]] adaptado a la IA generativa: conocimiento del contenido y conocimiento pedagógico del contenido sólidos (M = 4,70–5,15) junto a un conocimiento integrado de la tecnología notablemente más bajo, con el TPACK holístico más bajo de todos en 2,55, el conocimiento del contenido no correlacionado con ningún dominio integrado de la tecnología, y los tres dominios integrados correlacionando tan alto (r = 0,81–0,91) que podrían funcionar como un único factor. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]] lee la capa de gobernanza a través de un prototipo interrumpido de la administración pública británica cuya base de código era un prompt de sistema más una tubería de recuperación sobre modelos comerciales, y sostiene que la generalidad de los modelos fundacionales permite tanto su reaprovechamiento rápido en herramientas de [[educational-policy-ai|política]] como que la salida aberrante sea un riesgo permanentemente solo mitigable: una supervisión que mira por encima del bucle en lugar de sentarse dentro de él.
- **La brecha de integración, cartografiada:** [[malik-bashir-reconceptualizing-learning-sciences-hybrid-intelligence-2026|Malik y Bashir (2026)]] sintetizaron 32 estudios (PRISMA 2020, análisis temático) en cuatro temas: la fragmentación epistemológica dentro del campo, las contradicciones entre teoría y tecnología (los sistemas computacionales operan sobre predicción y conducta medible, mientras las teorías educativas enfatizan el contexto y la interacción social), la datificación del aprendizaje a través de la analítica, y la inteligencia híbrida como paradigma emergente. Su Marco de Inteligencia Híbrida es una síntesis conceptual, no un modelo validado —los autores afirman que aguarda comprobación empírica—, pero el mapa de cuatro temas es una lente de auditoría útil para el problema de traducción de teoría a computación que este campo no deja de encontrar.

- **Cómo usa el estudiantado un modelo generativo importa más que si lo usa.** La codificación de 50 intercambios de estudiantes de grado encontró que el 64% eran revisión pasiva o preguntas transaccionales y solo el 36% diálogo estratégico, y una tarea estructurada en torno a la reflexión desplazó el equilibrio hacia el diálogo ([[three-pathways-student-ai-interaction-2026|Zahra, 2026]]).
- **La dependencia intrapersonal precede a una caída de la [[agency|agencia]] percibida.** A lo largo de tres oleadas de datos de 342 estudiantes de grado en 85 grupos fijos de un curso de [[writing-education|escritura]] [[collaborative-learning|colaborativa]] apoyado por IA, una dependencia de la IA generativa superior a la habitual predijo una agencia humana percibida posterior menor, mientras que la vía inversa era más débil y no tuvo respaldo estadístico ([[genai-reliance-human-agency-collaborative-learning-2026|Wu y Lu (2026)]]).

- **La distribución del uso de IA generativa es una elección institucional.** [[sun-student-genai-entanglement-literacy-demands-2026|Sun, Dohn y Rehm (2026)]] clasificaron 102 estudios de educación superior según cómo se distribuía el trabajo epistémico entre el estudiantado y el sistema y encontraron que los entrelazamientos de Asistente y Habilitador dominaban con un 42,16% cada uno, y leen ese sesgo como legitimidad institucional y no como capacidad tecnológica.

- **La evidencia de proceso depende del canal.** Al codificar una tarea de diseño instruccional asistida por IA generativa con 79 estudiantes de grado, tanto en registros de interacción como en pensamiento en voz alta concurrente, [[metacognitive-processes-genai-interaction-logs-2026|Li y Liu (2026)]] encontraron que la evidencia de monitorización de mayor profundidad era más común en el registro de pensamiento en voz alta, pero la evidencia de [[regulation|regulación]] de mayor profundidad lo era más en los registros, de modo que ningún rastro por sí solo es el criterio de una afirmación sobre [[metacognition|metacognición]].

## Cómo se relacionan las ciencias del aprendizaje con sus vecinas

La [[design-based-research|investigación basada en el diseño]] es el método que este campo desarrolló en lugar de tomar prestado: se construye una intervención y se revisa dentro de un aula en funcionamiento, con su justificación teórica revisada a la par, de modo que un estudio produce a la vez un artefacto y un principio de diseño. Eso es lo que la separa de un experimento de laboratorio, que aísla una causa manteniendo quieto el contexto, y es por lo que los hallazgos del campo llegan como conocimiento de diseño y no como tamaños de efecto. [[research-methods-aied]] hace el corte opuesto: esa página examina todo el repertorio —experimentos, encuestas, trabajo cualitativo, benchmarks, revisiones, métodos de consenso— como una elección entre instrumentos, sopesados por la validez de la afirmación que cada uno puede sostener. Esta página lee el mismo corpus desde el lado sustantivo, preguntando qué ha establecido el repertorio sobre el aprendizaje y juzgando un método por si su afirmación de diseño sobrevive al contacto con quienes aprenden.

[[learning-theories]] reúne los marcos candidatos —conductismo, cognitivismo, constructivismo, explicaciones socioculturales, motivación y autorregulación— como lentes para leer la IA. Las ciencias del aprendizaje comparten ese vocabulario pero no esa postura: aquí una teoría es una afirmación sobre un mecanismo que un diseño debe o bien instanciar o bien refutar, y la posición del campo se apoya en el trabajo empírico y de diseño y no en la coherencia de un marco. La página de teoría es la que hay que abrir para saber qué afirma un marco; esta página es la que hay que abrir para la evidencia que un marco ha acumulado.

El campo también construye teoría en lugar de limitarse a poner a prueba marcos prestados: [[theory-development-aied]] cubre el trabajo conceptual que explica cómo interactúan las personas que aprenden, los docentes y los sistemas de IA, y es donde los constructos propios del campo se argumentan antes de ser medidos. Lo que sus diseños suelen tener que producir es [[transfer-of-learning|transferencia]] —conocimiento y habilidad que sobreviven más allá del tutor, la materia o la tarea en la que se aprendieron—, y es por lo que una ganancia medida dentro de una herramienta cuenta como una afirmación más débil que una medida sin ella. Y como un entorno diseñado es una intervención compuesta, atribuir un resultado a un componente es el problema de medición permanente del campo: [[educational-measurement]] aporta el aparato psicométrico que hace la atribución argumentable siquiera, y es por lo que aquí las preguntas de medición llegan pronto y no a posteriori.

La [[cognitive-psychology]] es la disciplina del nivel de mecanismo en la que el campo se apoya con más fuerza, aportando memoria de trabajo acotada, codificación y recuperación, componentes de conocimiento descomponibles y el lenguaje diagnóstico del modelado de la persona que aprende. Las ciencias del aprendizaje usan esos mecanismos sin reducirse a ellos: su unidad de análisis es un entorno diseñado que lleva variables sociales, motivacionales y contextuales que un relato de laboratorio sobre la memoria no tiene, y sus pruebas se ejecutan sobre intervenciones completas en lugar de sobre efectos cognitivos aislados.

La [[pedagogy]] y el [[learning-design]] cubren la práctica —qué estrategia docente usar, y cómo secuenciar objetivos, actividades y evaluación en un curso—. Ambas son lo que las ciencias del aprendizaje estudian desde fuera, como objetos de descripción y evaluación; el campo no le dice a un docente qué táctica emplear a continuación, informa de lo que se ha demostrado que hacen las tácticas. El diseño de aprendizaje es el pariente más cercano, ya que ambos producen algo que puede implementarse y ponerse a prueba, pero el resultado del diseñador es un curso enseñable y el resultado del campo es conocimiento sobre los diseños en general.

Los hallazgos solo importan una vez que llegan a la enseñanza, y ese recorrido pasa por tres páginas. [[educational-development]] es la práctica institucional que los transporta —el desarrollo del profesorado, los estándares, la política y el trabajo sobre la identidad deciden si un diseño validado llega alguna vez a un aula, y es por lo que la evidencia del campo va sistemáticamente por delante de lo que las instituciones han implementado—. [[teacher-education]] es donde el conocimiento tiene que aterrizar antes de que un docente entre en el aula, y [[teacher-role]] es donde aterriza después, en el juicio momento a momento sobre cuándo intervenir, qué instrumento usar y cuándo dejar sola a una persona que aprende. Ninguna de las tres produce hallazgos de las ciencias del aprendizaje; las tres deciden si esos hallazgos cambian la práctica.

## Concepciones erróneas

- **«Un umbral de dominio alto garantiza que quien aprende sepa discriminar.»** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren y Stamper (2026)]] realizaron **once experimentos (N = 192)** con sistemas de [[intelligent-tutoring|tutoría inteligente]] y encontraron que con un **umbral de dominio del 95% el sistema detenía la práctica antes de que el estudiantado se enfrentara a un caso que exigiera retener la acción**, de modo que el defecto pasó inadvertido. Dominar la acción no incluía saber cuándo no aplicarla, y el umbral certificaba el constructo equivocado.
- **«Más ejemplos son más seguros.»** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger y Carvalho (2025)]] tratan la ratio de ejemplos y problemas como una **interacción contenido-tratamiento**, y en un experimento 2×2 el óptimo **dependía del contenido**. No hay una ratio correcta en general, así que una plantilla instruccional fija es una apuesta contra una interacción.
- **«Corregir la idea errónea es cuestión de decirle al estudiantado la respuesta correcta.»** Una práctica breve de no actuar con [[feedback]] que nombra la restricción ausente redujo la aplicación errónea a **0,0%-23,1% (h de Cohen 1,70-2,44)**, y un análisis secundario de **trece conjuntos de datos de *Decimal Point* de K-12** encontró el mismo patrón estructural. La intervención eficaz fue la práctica discriminativa con retroalimentación específica, y no la corrección por afirmación, que es lo que el trabajo sobre [[refutation-text|textos de refutación]] establece en general.
- **«Un nivel de Bloom más alto significa más aprendizaje activo.»** El tipo de aprendizaje siguió el nivel del resultado pretendido, con la **adquisición bajando de alrededor del 50% de las actividades en el nivel 1 de Bloom a cerca del 20% en el nivel 6**. La demanda cognitiva y el tipo de actividad se mueven juntos pero no son el mismo eje, así que etiquetar una tarea por su nivel de Bloom no dice qué hará el estudiantado con ella.

## Qué significa esto para la práctica

**Para el profesorado**

- Enseñe explícitamente el caso negativo. El fallo del umbral del 95% es la razón: introduzca condiciones en las que el movimiento correcto sea retener la acción, o quien aprende la aplicará en todas partes.
- No fije la ratio de ejemplos y problemas a lo largo de un curso. La interacción contenido-tratamiento significa que la ratio adecuada para los procedimientos no es la adecuada para los conceptos.
- Use práctica discriminativa con retroalimentación que nombre la restricción ausente en lugar de repetir la regla. Esa es la intervención con tamaños del efecto medidos aquí.
- Compruebe qué certifica de verdad su criterio de dominio antes de confiar en él.

**Para quienes desarrollan**

- No detenga la práctica solo por corrección. Modele la condición de retención como una habilidad propia, o el sistema certificará la sobregeneralización.
- Deje que la ratio sea un parámetro y no una constante, porque la evidencia dice que el óptimo depende del contenido.
- Informe de qué constructo mide su criterio, por separado de qué constructo mide su validación.

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
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — Una autocomprobación que preserva la privacidad y no es diagnóstica para la delegación asociada a la IA (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Gobernanza de cero disparos: la IA de propósito general en la política, leída a través de la base de código de Redbox (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Por qué la mejor proporción de ejemplos y problemas depende del contenido (Rachatasumrit, Koedinger y Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — El profesorado diseña chatbots de experto acotado, con delegación selectiva de la instrucción (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — TPACK de IA generativa del profesorado universitario: conocimiento del contenido sólido, conocimiento integrado de la tecnología débil (Sutedjo, Chowdhury y Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: un ensayo aleatorizado de tutoría en directo humano-IA a escala (Wang et al. 2024)
- [[genai-support-threaten-learning-k20-expert-consensus-2026]] — Un Delphi preregistrado con 30 expertos sobre qué procesos de aprendizaje mejora la IA generativa y cuáles amenaza
- [[three-pathways-student-ai-interaction-2026]] — Una tipología de la interacción estudiantado-IA: 64% pasiva o transaccional, 36% diálogo estratégico
- [[agent-type-feedback-style-self-directed-learning-2026]] — El estilo de retroalimentación, y no el tipo de agente, movió la implicación autorregulada
- [[metacognitive-processes-genai-interaction-logs-2026]] — La evidencia de proceso depende del canal
- [[sun-student-genai-entanglement-literacy-demands-2026]] — La distribución del uso de IA generativa es una elección institucional
- [[genai-reliance-human-agency-collaborative-learning-2026]] — La dependencia intrapersonal precede a una caída de la agencia percibida
