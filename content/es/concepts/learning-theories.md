---
title: Teorías del aprendizaje
created: "2026-09-28T19:11:03-04:00"
updated: "2026-09-28T19:11:03-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories, metacognition, self-regulated-learning]
technology: [generative-ai]
level: [higher ed]
confidence: high
connected_faqs: [research-gaps-aied]
translation_of: concepts/learning-theories
source_updated: "2026-09-23T16:28:35-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Teorías del aprendizaje** — la familia de marcos que explican cómo ocurre el aprendizaje, y el concepto general para las ideas relacionadas con la teoría en la base de conocimiento. En la [[ai-education|IA en la educación]], las teorías del aprendizaje determinan tanto cómo se diseñan los sistemas de IA (la pedagogía que encarnan) como la forma en que el campo interpreta si la IA «funciona»: una misma herramienta puede ser un andamiaje bajo supuestos [[constructivist|constructivistas]], un motor de refuerzo bajo el [[behaviorism|conductismo]] o un riesgo de carga cognitiva bajo la Teoría de la Carga Cognitiva.

## Preguntas para reflexionar

- Piense en un tutor de IA o un sistema adaptativo que haya usado o visto. ¿Qué supuestos hacía sobre cómo aprende la gente? ¿Premiaba las respuestas correctas (conductismo), construía comprensión (constructivismo) o gestionaba el esfuerzo mental (carga cognitiva)? ¿Declararon alguna vez sus creadores esos supuestos?
- La página describe una brecha recurrente: el discurso defiende el constructivismo mientras que las implementaciones de IA recurren por defecto a mecánicas de ejercicios y retroalimentación. ¿Dónde ha visto una herramienta que afirme apoyar el aprendizaje profundo pero que en realidad solo refuerce respuestas superficiales?
- La misma herramienta de IA puede parecer un éxito bajo una teoría y un fracaso bajo otra: unas notas de deberes infladas se leen como aprendizaje bajo el conductismo, pero como un fracaso a la hora de construir una comprensión duradera bajo el constructivismo. ¿Qué lente es más justa para juzgar si el estudiantado aprendió de verdad?
- Como todo tutor de IA incorpora una teoría, lo digan o no sus diseñadores, «¿funciona?» puede ser la pregunta equivocada. ¿Cuál es la pregunta mejor que hacer sobre una IA educativa, dadas las teorías que podría encarnar?
- La IA generativa está llevando al profesorado a considerar teorías nuevas, como el aprendizaje entendido como coconstrucción iterativa entre personas y IA, o la IA como pareja cognitiva a lo largo de la vida. ¿Exige el auge de la IA teorías del aprendizaje genuinamente nuevas o bastan las existentes?
- La medición de las ganancias de aprendizaje está ella misma «cargada de teoría»: un instrumento construido sobre una teoría puede no capturar las ganancias que predice otra. ¿Cómo podrían dos investigadores con compromisos teóricos distintos mirar los mismos datos y llegar a conclusiones opuestas sobre si una herramienta de IA funcionó?

## Introducción

Este es el concepto general de la línea de teorías del aprendizaje de la base de conocimiento. Las teorías del aprendizaje están en el centro de la IA en la educación porque todo tutor de IA, sistema adaptativo y herramienta de retroalimentación incorpora supuestos sobre cómo aprende la gente, los declaren o no sus diseñadores. La base de conocimiento documenta estas teorías por separado y las trata como la lente conceptual con la que se evalúan el diseño y los efectos de la IA. El campo de investigación que pone a prueba esos marcos tiene su propia página: [[learning-sciences|las ciencias del aprendizaje]] estudian el aprendizaje de forma empírica (experimentos, ensayos en el aula e investigación basada en el diseño) y tratan una teoría como algo que se confirma o se refuta, mientras que esta página reúne los marcos en sí; las dos expresiones se mantienen distintas en esta base de conocimiento, y el singular «ciencia del aprendizaje» nombra esta línea teórica.

### El panorama de las teorías del aprendizaje

La base de conocimiento documenta varias familias de teorías del aprendizaje, cada una con sus propios conceptos:

- **Teorías clásicas del aprendizaje.** El [[behaviorism|conductismo]] (el aprendizaje como cambio conductual observable mediante refuerzo y práctica de ejercicios) y el [[constructivist|constructivismo]] (el aprendizaje como construcción activa de conocimiento) son los dos polos que más se repiten en la investigación sobre IA. El campo muestra con frecuencia una brecha de «constructivismo de nombre, conductismo de práctica», en la que el discurso defiende la construcción pero las implementaciones de IA recurren por defecto a mecánicas de ejercicios y retroalimentación.([[ai-vocational-education-training-review]]) La [[cognitive-psychology|psicología cognitiva / cognitivismo]] es el tercer polo clásico —el aprendizaje como cambio en las representaciones mentales internas— y la teoría más responsable de las aportaciones características de la AIED ([[knowledge-tracing|seguimiento del conocimiento]], [[cognitive-diagnosis|diagnóstico cognitivo]], [[student-modeling|modelado del estudiante]], [[intelligent-tutoring|tutoría inteligente]]).
- **Teorías socioculturales y del desarrollo.** El [[sociocultural-learning|aprendizaje sociocultural]] sostiene que el aprendizaje y el desarrollo surgen de la participación social y están mediados por herramientas culturales y por otras personas con más conocimiento, y abarca la [[sociocultural-learning|Zona de Desarrollo Próximo]], el [[scaffolding|andamiaje]], el aprendizaje y las comunidades de práctica y la [[distributed-cognition|cognición distribuida]]. En la era de la IA, la [[generative-ai|IA generativa]] se enmarca cada vez más como un *agente mediacional* que media la actividad y a la vez genera contribuciones contingentes a la interacción.([[generative-ai-mediational-agent-sociocultural-2026]])
- **Cognición y arquitectura cognitiva.** La [[cognitive-psychology|psicología cognitiva / cognitivismo]] es el paraguas de esta familia: la Teoría de la Carga Cognitiva (cómo los límites de la memoria de trabajo condicionan la enseñanza), la Teoría del Proceso Dual (el procesamiento intuitivo rápido frente al deliberativo lento) y la [[metacognition|metacognición]] (supervisar y regular el propio aprendizaje) explican los mecanismos *internos* que las herramientas de IA activan o eluden.
- **Motivación y autodirección.** La [[self-determination-theory|teoría de la autodeterminación]] (autonomía, competencia, relación), la [[self-efficacy|autoeficacia]] (la confianza en la propia capacidad), el [[self-regulated-learning|aprendizaje autorregulado]] (fijar metas, supervisar y ajustar) y la [[motivation|motivación]] explican por qué quien aprende se implica con la IA como lo hace.
- **Contexto y actividad de aprendizaje.** El [[experiential-learning|aprendizaje experiencial]], el [[active-learning|aprendizaje activo]], el [[project-based-learning|aprendizaje basado en proyectos]], el [[collaborative-learning|aprendizaje colaborativo]], la [[transfer-of-learning|transferencia del aprendizaje]], las [[desirable-difficulties|dificultades deseables]] y el [[embodied-learning|aprendizaje corporeizado]] describen los tipos de actividad y de contexto que producen un aprendizaje duradero.

### Las teorías del aprendizaje y las ganancias de aprendizaje

Las teorías del aprendizaje se evalúan en última instancia por sus resultados, y el concepto de [[learning-gains|ganancias de aprendizaje]] de la base de conocimiento es donde la teoría se encuentra con la evidencia. Cada teoría hace una predicción distinta sobre qué *cuenta* como aprendizaje y cómo medirlo: el conductismo predice ganancias observables de rendimiento en tareas de ejercicios y retroalimentación; el constructivismo predice una comprensión más profunda que se transfiere a problemas nuevos; la teoría sociocultural predice ganancias en la participación y en la resolución mediada de problemas; y la teoría de la carga cognitiva solo predice ganancias cuando la enseñanza respeta los límites de la memoria de trabajo. Por eso la medición de las [[learning-gains|ganancias de aprendizaje]] está cargada de teoría: un instrumento construido sobre una teoría puede no capturar las ganancias que predice otra. En la era de la IA, la fuerte divergencia entre el rendimiento asistido por IA y las [[learning-gains|ganancias de aprendizaje]] sin ayuda (véanse [[generative-ai-reduced-study-time-math|IA generativa y reducción del tiempo de estudio en matemáticas]] y [[stromberg-generative-ai-learning-penalty-secondary-2026|penalización del aprendizaje con IA generativa en secundaria]]) puede leerse con esta lente: una lectura conductista ve las notas de deberes infladas como un éxito, mientras que una lectura constructivista, centrada en la comprensión duradera, ve la misma evidencia como un fracaso del aprendizaje. Conectar las teorías con la [[ai-ed-evaluation|evaluación]] y con los [[learning-gains|resultados medidos]] es, por tanto, esencial para decidir qué lente teórica satisface realmente un sistema de IA dado.

### Por qué las teorías del aprendizaje importan para la IA en la educación

Las teorías del aprendizaje importan por tres razones:

- **Predicen los efectos de la IA.** Que una herramienta de IA mejore o perjudique el aprendizaje depende del mecanismo que active. Un tutor que regala las respuestas perjudica bajo una lente constructivista (se salta la construcción), es neutro bajo el conductismo (refuerza) y suscita preocupaciones de carga cognitiva (descarga en lugar de construir). El concepto general de [[cognitive-offloading|dependencia excesiva]] y el de [[cognitive-offloading|dependencia excesiva]] («Over-Reliance») de la base de conocimiento recogen el lado de riesgo de esto.
- **Exponen la brecha entre teoría y práctica.** El trabajo empírico encuentra una y otra vez que las implementaciones de IA encarnan teorías distintas de las que afirma el discurso, y muy en particular un lenguaje constructivista emparejado con mecánicas conductistas de ejercicios y práctica.([[ai-vocational-education-training-review]]) Evaluar la IA exige, por tanto, preguntar *qué* teoría encarna realmente un sistema, y no solo si «funciona».
- **Se están repensando activamente.** La IA generativa está [[prompt-engineering|empujando]] al profesorado a revisar si las teorías clásicas bastan. El [[generativism-learning-theory|generativismo]] propone que el aprendizaje en la era de la IA ocurre cada vez más mediante una coconstrucción iterativa entre quienes aprenden y los sistemas de IA, lo que amplía las cuatro teorías clásicas (conductismo, cognitivismo, constructivismo, conectivismo) en lugar de sustituirlas.([[generativism-learning-theory]])

### Nuevas direcciones teóricas a partir del trabajo reciente en AIED

El trabajo teórico reciente amplía la línea clásica en varias direcciones, y cada una recentra la relación humano-IA en lugar de tratar la IA como una herramienta neutra:

- **[[regulation|Corregulación]] humano-IA.** Un marco evolutivo sitúa la IA no como un instrumento externo, sino como una **pareja cognitiva** que corregula el pensamiento, el aprendizaje y el autocontrol a lo largo de la vida.([[ai-cognitive-partner-co-regulation-learning]]) A partir de la función ejecutiva, la [[metacognition|metacognición]], la cognición distribuida y el desarrollo sociocultural, asigna a la IA cuatro roles (andamiaje, apoyo metacognitivo, sistema de memoria externa o de [[cognitive-offloading|dependencia excesiva]] y pareja en la toma de decisiones), y el marco resulta más pertinente a partir de la infancia media.
- **Cognición en conjunto.** Un marco [[philosophy-of-ai-in-education|filosófico]] reconceptualiza el pensamiento como algo que emerge de interacciones dinámicas entre agentes humanos y artificiales en lugar de residir únicamente en mentes individuales.([[ensemble-cognition-philosophy-ai-education]]) Cuestiona el «paradigma de la conciencia» (los supuestos de autonomía, conciencia y estabilidad) y articula cinco rasgos —agencia distribuida, centralidad dinámica, orquestación cognitiva, integración multirrepresentacional y conmutación sensible al contexto—, a la vez que distingue la **agencia funcional** de la IA de la responsabilidad moral.
- **Crecimiento [[self-directed-learning|autodirigido]] / A2PL.** Una extensión del [[self-regulated-learning|aprendizaje autodirigido]] integra la IA generativa con la [[learning-analytics|analítica del aprendizaje]] para cultivar el **Crecimiento Autodirigido**, operacionalizado mediante el modelo Aspire to Potentials for Learners (A2PL).([[self-directed-growth-generative-ai-learning-analytics]]) Reconfigura las aspiraciones de quien aprende (humanistas), el pensamiento complejo (constructivista) y la autoevaluación (pragmática) en una única competencia, y sitúa la IA generativa como un andamiaje colaborativo no prescriptivo y no como un proveedor de contenidos.

- **Sobre-generalización engañosa.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren y Stamper (2026)]] amplían la tradición ACT-R / Knowledge-Learning-Instruction al teorizar cuándo la corrección observada enmascara una comprensión condicional incompleta: quien aprende compila una producción sobre-generalizada que omite una restricción de aplicación y aun así se desempeña correctamente, un modo de fallo que los sistemas adaptativos de dominio, e incluso la enseñanza tradicional, pueden pasar por alto salvo que pongan a prueba *cuándo abstenerse* de actuar.
- **Teoría KLI ejecutable.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger y Carvalho (2025)]] fundamentan el marco Knowledge-Learning-Instruction en un modelo computacional ejecutable (el marco Apprentice Learner con un mecanismo de memoria al estilo ACT-R) que reproduce una interacción cruzada en datos humanos: la práctica pura ayuda a la memoria literal de hechos (al retrasar el olvido), mientras que la práctica integrada con ejemplos ayuda a la inducción de habilidades generalizables. Como la KLI vincula el conocimiento constante (de hechos) con los procesos de memoria y el conocimiento variable (de habilidades) con la inducción, el resultado es una interacción contenido-tratamiento predicha y no una contradicción entre las recomendaciones de evaluación y las de ejemplos resueltos, y el éxito del modelo solo cuando hay un mecanismo de memoria demuestra que la práctica y los ejemplos desempeñan papeles distintos y complementarios.

### Cómo organiza la base de conocimiento esta línea

En lugar de tratar las teorías del aprendizaje como filosofía abstracta, la base de conocimiento fundamenta cada una en la investigación sobre IA en la educación que la utiliza. Las páginas sobre el [[constructivist|constructivismo]] y el [[behaviorism|conductismo]] documentan cómo los diseños de IA encarnan (o traicionan) cada teoría; la Teoría de la Carga Cognitiva, el [[self-regulated-learning|aprendizaje autorregulado]], la [[metacognition|metacognición]] y la [[transfer-of-learning|transferencia del aprendizaje]] conectan la teoría con mecanismos y resultados concretos de la IA. Esto refleja cómo trata la base de conocimiento otros dominios generales como la [[feedback|retroalimentación]] y la [[assessment|evaluación]]: un sistema coherente de conceptos que interactúan y no páginas aisladas.

### Las teorías del aprendizaje y la «educación sobre la IA»

Las teorías del aprendizaje también aparecen como contenido en los currículos de [[ai-literacy|alfabetización en IA]]: el estudiantado estudia el conductismo, el cognitivismo, el constructivismo y el conectivismo para entender los supuestos [[pedagogy|pedagógicos]] que hay detrás de las herramientas que usa.([[generativism-learning-theory]]) Enseñar esta línea da al estudiantado (y al profesorado) el vocabulario para criticar por qué un producto de IA está construido como está y si sus mecánicas sirven al objetivo de aprendizaje en cuestión.

- **El agente mediacional.** Warschauer, Tate y Ritchie (2026) sostienen que la IA generativa rompe la distinción sociocultural entre medios mediacionales e interacción social, y proponen el *agente mediacional*: un sistema que media la acción y a la vez genera contribuciones contingentes y no atribuibles, y que ocupa un espacio híbrido entre la herramienta y la pareja social. De ahí se derivan cinco hábitos de participación centrados en lo humano (primacía de la cognición humana, [[student-engagement|implicación]] intencionada, agencia supervisora, vigilancia epistémica y autorregulación reflexiva).([[generative-ai-mediational-agent-sociocultural-2026]])
### Teorías propuestas para la era de la IA

Junto a las familias clásicas, la base de conocimiento documenta teorías escritas específicamente para el aprendizaje con sistemas de IA, y estas aportan las implicaciones de diseño que las teorías más antiguas dejan abiertas. El [[yan-agentivism-learning-theory-ai-2026|agentivismo (Yan y Gašević 2026)]] es un ejemplo de alcance medio: define el aprendizaje como un crecimiento duradero de la capacidad humana y no como la mera finalización exitosa de una tarea, nombra cuatro mecanismos (agencia delegada, supervisión y verificación epistémicas, internalización reconstructiva y transferencia con apoyo reducido) y enuncia seis proposiciones contrastables, entre ellas que el apoyo de IA que preserva la responsabilidad de quien aprende sobre el planteamiento del problema, el establecimiento de criterios y la justificación produce un aprendizaje más sólido que el apoyo que entrega respuestas.

## Conceptos conectados

- [[behaviorism]]
- [[cognitive-psychology]]
- [[constructivist]]
- [[metacognition]]
- [[distributed-cognition]]
- [[self-regulated-learning]]
- [[self-determination-theory]]
- [[self-efficacy]]
- [[motivation]]
- [[sociocultural-learning]]
- [[scaffolding]]
- [[transfer-of-learning]]
- [[learning-gains]]
- [[desirable-difficulties]]
- [[active-learning]]
- [[experiential-learning]]
- [[collaborative-learning]]
- [[embodied-learning]]
- [[cognitive-offloading]]
- [[learning-design]]
- [[learning-sciences]]
- [[philosophy-of-ai-in-education]]
- [[ai-education]]
- [[pedagogy]] — General: pedagogías y estrategias didácticas en la educación con IA
## Artículos conectados
- [[yan-agentivism-learning-theory-ai-2026]] — Una teoría del aprendizaje de alcance medio para la interacción humano-IA, con cuatro mecanismos y seis proposiciones contrastables (Yan y Gašević 2026)

- [[powerful-learning-with-emerging-technology-2025]] — Tres principios de diseño para la tecnología emergente: basada en la evidencia, centrada en quien aprende y generadora de habilidades
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Sobre-generalización engañosa: el dominio adaptativo puede detener la práctica antes de que quien aprende sepa cuándo abstenerse de actuar (An, McLaren y Stamper 2026)
- [[airis-hybrid-human-ai-cognition-2026]] — Indagación y regulación aumentadas por IA en sistemas híbridos (AIRIS)
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Fomentar el aprendizaje sostenible mediante la inteligencia corporeizada (E3-HOT)
- [[voicu-ai-interpretive-cognition-ssh-2026]]
- [[ai-cognitive-partner-co-regulation-learning]] — Sitúa la IA como pareja cognitiva en la corregulación humano-IA; marco evolutivo a lo largo de la vida
- [[ensemble-cognition-philosophy-ai-education]] — Cognición en conjunto: un marco filosófico que reconceptualiza el pensamiento como interacción humano-IA
- [[self-directed-growth-generative-ai-learning-analytics]] — El Crecimiento Autodirigido y el modelo A2PL, que extiende el aprendizaje autodirigido con IA generativa
- [[generativism-learning-theory]] — Propone una nueva teoría del aprendizaje para la era de la IA generativa, revisando las cuatro clásicas
- [[ai-vocational-education-training-review]] — Documentó la brecha teoría-práctica entre constructivismo y conductismo en la IA para la formación profesional
- [[genai-educational-outcomes-meta-analysis]]
- [[vargas-situated-learning-ai-review-2024]]
- [[raffaghelli-situated-ai-ethics-2026]]
- [[elsayed-pedagogical-symbiosis-posthuman-learner]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[videla-embodied-ai-education-choreography]]
- [[generative-ai-mediational-agent-sociocultural-2026]] — La IA generativa como agente mediacional
- [[strydom-human-gai-paradigms-2026]] — Enmarcar la dinámica humano-IA: siete paradigmas de implicación con la IA generativa (Strydom 2026)
- [[kim-ai-productive-failure-adult-2026]] — Diseñar sistemas de IA para apoyar el aprendizaje basado en el fracaso productivo
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Dirección pedagógica de los LLM para el fracaso productivo
- [[lukesova-clue-before-correction-2026]] — Pista antes de la corrección: ChatGPT para el aprendizaje autónomo de idiomas
- [[rachatasumrit-example-problem-ratio-2026]]
