---
title: Aprendizaje personalizado
created: "2026-09-25T04:31:17-04:00"
updated: "2026-10-03T02:57:43-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/personalized-learning
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-25"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **El aprendizaje personalizado**: adaptar las experiencias educativas a los [[student-modeling|perfiles individuales de quien aprende]], incluidos los conocimientos previos, el ritmo de aprendizaje, las preferencias y los estados [[affective-computing|afectivos]]. La IA permite la personalización a escala, aunque la brecha entre la *personalización del sistema* y la *personalización percibida por quien aprende* sigue siendo un reto de medición abierto. Junto con el [[adaptive-learning|aprendizaje adaptativo]] y la [[intelligent-tutoring|tutoría inteligente]], es uno de los miembros del lado de la aplicación de la familia del [[student-modeling|modelado del estudiantado y la instrucción adaptativa]], que consume modelos de quien aprende para adaptar la instrucción.

## Preguntas para reflexionar

- Cuando piensa en el «aprendizaje personalizado», ¿imagina contenido ajustado al ritmo de quien aprende o a las metas que esa persona elige? La página sostiene que son cosas profundamente distintas (resultados uniformes por vías variadas frente a resultados diversos). ¿Cuál de las dos valora más, y por qué?
- La página distingue el aprendizaje personalizado (la meta) del aprendizaje adaptativo (un mecanismo). ¿Se le ocurre alguna personalización que no implique adaptación en tiempo real, y cuenta igual como tal?
- Un sistema puede adaptarse sin que quien aprende llegue a sentirse reconocido. ¿Cuándo ha experimentado que se «personalizara para usted» sin sentirse de verdad conocido? ¿Cuál es la diferencia?
- La página advierte de que la personalización excesiva puede dejar a quien aprende atrapado en itinerarios de bajas expectativas. ¿Cómo podría un ajuste con IA bien intencionado rebajar sin querer el techo de quien aprende?
- La personalización necesita datos detallados sobre quien aprende; la privacidad necesita minimización de datos. ¿Dónde traza la línea entre «datos suficientes para adaptarse» y «tantos que quien aprende queda expuesto»?
- ¿Qué tendría que recordar una IA sobre usted entre sesiones para personalizar de verdad su aprendizaje, y cuáles son los riesgos de que recuerde esas cosas?

## Introducción

Adaptar las experiencias educativas a los perfiles individuales de quien aprende, incluidos los [[prior-knowledge|conocimientos previos]], el ritmo de aprendizaje, las preferencias y los estados afectivos. La IA permite la personalización a escala, aunque la brecha entre la *personalización del sistema* y la *personalización percibida por quien aprende* sigue siendo un reto de medición abierto.

- **[[mishra-control-vs-agency-history-2025|Mishra et al.]]** distinguen dos formas de personalización con raíces históricas profundas: los resultados uniformes alcanzados por vías variadas (de las máquinas de [[teacher-role|enseñanza]] de Skinner a la tutoría para el dominio al estilo de Khan Academy) frente a los resultados diversos que elige quien aprende, lo que se corresponde con la tensión del campo entre el control y la agencia.

## Arquitecturas para la personalización impulsada por IA

### Memoria longitudinal (PersonaVLM → educación)

Nie et al. (2026) desarrollaron una arquitectura de memoria a largo plazo [[multimodal]] (PersonaVLM) que mantiene la coherencia de la persona a lo largo de las interacciones. Trasladada a la educación, permite sistemas de tutoría que recuerdan las [[misconceptions|ideas erróneas]] de quien aprende, sus explicaciones preferidas y su historial de progreso entre sesiones, lo que aborda una carencia crítica de los tutores de [[conversational-ai|chatbot]] sin estado.

### Sustrato de personalización nativo de agentes (DeepTutor)

Ma et al. (2026) diseñan cada función de [[deeptutor]] para que comparta un sustrato de personalización común, en lugar de añadir la personalización a posteriori sobre herramientas reactivas. Esta arquitectura garantiza la coherencia entre modalidades: el mismo perfil de quien aprende impulsa la [[problem-solving|resolución de problemas]], la [[automated-question-generation|generación de preguntas]] y la escritura colaborativa.

### Personalización social multiagente (MAIC)

Yu et al. (2024) personalizan no solo el contenido, sino también el *contexto social*. Los arquetipos de compañeros de clase (el payaso de la clase, el pensador profundo, quien toma apuntes, la mente inquisitiva) crean dinámicas variadas de aprendizaje entre pares ajustadas a las necesidades individuales de quien aprende.

### AutoML para perfiles de quien aprende

La personalización es un objetivo central para mejorar la calidad educativa, pero procesar datos heterogéneos de conducta de aprendizaje procedentes de múltiples fuentes sigue siendo un reto. Un marco de búsqueda personalizada de arquitecturas cognitivas neuronales, impulsado por [[reinforcement-learning|aprendizaje automático]] automatizado, construye perfiles de quien aprende y genera modelos de diagnóstico para perfiles heterogéneos, integrando datos multimodales para ir más allá de los resultados estáticos de examen.

Una base de conocimiento estática no puede personalizar: las ontologías evolucionan despacio y manejan mal la incertidumbre, así que la arquitectura empareja la representación con el tipo de conocimiento —declarativo con ontologías, procedimental con reglas, incierto con ontologías difusas o probabilísticas, implícito con analítica y aprendizaje automático— y prefiere un sistema de ontologías pequeñas y mapeadas a un único modelo monolítico ([[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova, 2026]]).

## Relación con el aprendizaje adaptativo y la tutoría inteligente

El aprendizaje personalizado se confunde a menudo con el [[adaptive-learning|aprendizaje adaptativo]], pero no son lo mismo. El **aprendizaje adaptativo** se refiere al *mecanismo*: un sistema que ajusta el contenido, el ritmo y la dificultad en tiempo real a partir de un modelo de quien aprende. El **aprendizaje personalizado** es la *meta más amplia*: adaptar toda la experiencia de aprendizaje (contenido, itinerarios, ritmo, preferencias, metas) a una persona, de la cual la adaptación en tiempo real es solo una implementación. Los sistemas adaptativos son un *medio* para la personalización, pero esta también puede lograrse mediante perfiles estáticos de quien aprende, itinerarios basados en la elección o ajustes hechos por tutores humanos que no se adaptan en tiempo real.

Una revisión PRISMA 2020 de 22 intervenciones en educación superior sitúa el apoyo al aprendizaje personalizado y los itinerarios adaptativos entre los casos de uso dominantes de la IA, aunque la mayoría de las implementaciones mejoraron la práctica existente en lugar de transformarla ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh et al. (2026)]]).

La [[intelligent-tutoring|tutoría inteligente]] se sitúa en medio: los ITS son las plataformas *adaptativas* canónicas que ofrecen instrucción personalizada mediante un modelado estructurado del estudiantado, mientras que los tutores basados en [[llm]] personalizan de forma conversacional. Los tres son los miembros del lado de la aplicación de la familia del [[student-modeling|modelado del estudiantado y la instrucción adaptativa]]: consumen las representaciones de quien aprende que producen el [[student-modeling|modelado del estudiantado]], el [[knowledge-tracing|seguimiento del conocimiento]] y el [[cognitive-diagnosis|diagnóstico cognitivo]] para decidir qué enseñar a continuación. La distinción importa para la evaluación: los estudios que etiquetan un sistema como «adaptativo», «personalizado» o «individualizado» de forma intercambiable (véase más abajo) pueden ocultar si el beneficio que se atribuye proviene de la adaptación en tiempo real, de la elección de quien aprende o del ajuste del contenido.

## Retos de medición

- **Personalización del sistema frente a personalización percibida**: un sistema puede adaptarse sin que quien aprende se sienta reconocido
- **Validez longitudinal**: los beneficios de la personalización pueden decaer si los perfiles quedan obsoletos o se sobreajustan
- **Riesgos de [[equity-in-ai-education|equidad]]**: la personalización excesiva puede dejar a quien aprende atrapado en itinerarios de bajas expectativas
- **Riesgos de sesgo**: condicionar por atributos del estudiante puede codificar estereotipos: manteniendo los ensayos constantes, la retroalimentación para el estudiantado marcado por raza, lengua o discapacidad se volvió más elogiosa y menos crítica ([[marked-pedagogies-linguistic-bias-writing-feedback|Tan, Phalen y Demszky (2026)]]).

## Personalización y evaluación

La personalización y la [[assessment|evaluación]] están estrechamente acopladas en el aprendizaje impulsado por IA. La personalización adaptativa depende de una medición [[formative-assessment|formativa]] continua de lo que sabe quien aprende (mediante el [[knowledge-tracing|seguimiento del conocimiento]], el [[student-modeling|modelado del estudiantado]] y el [[cognitive-diagnosis|diagnóstico cognitivo]]) para decidir qué adaptar después, de modo que la fiabilidad de la señal de [[assessment|evaluación]] limita directamente la calidad de la personalización. A la inversa, cuando la [[summative-assessment|evaluación sumativa]] se personaliza para cada persona, la [[bias-mitigation|equidad]] y la comparabilidad se vuelven más difíciles de establecer. Los [[research-methods-aied|métodos de investigación]] de esta base de conocimiento advierten contra adaptarse en exceso a señales superficiales o ruidosas: los sistemas [[adaptive-learning|adaptativos]] que miden mal a quien aprende pueden personalizar de maneras que reducen el aprendizaje en lugar de apoyarlo, y el estudiantado nativo en IA cuya autoevaluación no es fiable (una «línea base cognitiva ausente») es más difícil de modelar con precisión.

## La personalización en la era de la IA

La evidencia más sólida de que esta preocupación no es hipotética procede de un [[personalization-paradox-adaptive-learning-emotions-2026|estudio longitudinal de tres oleadas con 486 estudiantes universitarios chinos (Li, Lin y Qiu, 2026)]], que encontró que cuanto más personalizado percibía el estudiantado su entorno adaptativo con IA, *menor* era su [[self-regulated-learning|aprendizaje autorregulado]]: la «paradoja de la personalización». Los cambios en las emociones académicas concentraron la mayor parte del efecto: encontrarse con el entorno adaptativo predecía menos disfrute y más ansiedad y aburrimiento, y esos cambios emocionales explicaban en conjunto alrededor de la mitad de la asociación entre personalización y menor autorregulación. La [[ai-literacy|alfabetización en IA]] amortiguó el daño, ya que debilitó la asociación emocional negativa hasta hacerla no significativa en niveles altos de alfabetización. La personalización parece, por tanto, comprar un ajuste adaptativo a costa de la actividad [[regulation|regulatoria]] de quien aprende, y el estudio señala la experiencia emocional, y no solo la carga cognitiva, como el canal por el que se paga ese coste.

Donde el diagnóstico que hay detrás de una ruta está validado, la personalización compensa reduciendo la carga más que cubriendo más: la remediación por el camino más corto promedió 3,82 pasos y recortó el tiempo de estudio un 22,0% (57,6 frente a 73,8 minutos), y la carga cognitiva concentró el 53,7% del efecto en el postest ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng y Huang, 2026]]).

La evidencia sobre la propia herramienta también puede ser negativa a pequeña escala: en un ensayo de cinco días sobre fracciones en primaria (n final = 22), el grupo de práctica habitual mostró mejoras de comprensión significativamente mayores que el grupo de Mathbot adaptativo con IA, y los autores señalan confusión de nivel de curso, adivinación y coste de licencia como límites: la etiqueta «adaptativo» no conlleva ningún efecto ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman (2024)]]).

El aprendizaje por refuerzo es un mecanismo distinto de personalización, y [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper y Lugrin (2025)]] trazan su historial empírico: su revisión [[meta-analysis-systematic-review|PRISMA]] de 89 estudios sobre el aprendizaje por refuerzo en educación encuentra que la personalización con esta técnica se concentra en la [[higher-ed|educación superior]] y en la [[math-education|educación matemática]], y que la adaptación se implementa sobre todo como programación de contenidos (n = 53) o como personalización relacionada con la orientación, por ejemplo pistas y retroalimentación (n = 36). Informan de que las políticas de aprendizaje por refuerzo superan a las líneas base no adaptativas con más frecuencia en la adaptación relacionada con la orientación y en las variables [[affective-computing|afectivas]] (el 63% de los estudios analizados), y que la ganancia de aprendizaje, en especial la ganancia de aprendizaje normalizada, fue la fuente de recompensa más eficaz: una orientación práctica para diseñar señales de recompensa que personalicen hacia el aprendizaje genuino y no hacia la [[student-engagement|implicación]].

[[ai-coaching-rl-skill-development|Wang et al. (2026)]] muestran que el objetivo de recompensa es en sí mismo una elección de personalización: un entrenador de aprendizaje por refuerzo entrenado con la competencia independiente de quien aprende recortó el tiempo de vuelta un 27,9% (p = 0,005) donde el desvanecimiento basado en reglas no produjo ningún cambio fiable, y los autores sostienen que los agentes de programación optimizados para el rendimiento en la tarea no aportan ningún incentivo respecto a lo que la persona retiene.

Bernstein y Sibia (2026) afinan una distinción entre la personalización por interés y la personalización por pericia: las analogías de IA generativa ajustadas al interés se percibieron como más atractivas y memorables, pero no de forma uniformemente más fiable, y parte del estudiantado prefirió la explicación técnica genérica incluso cuando la analogía coincidía con el interés declarado, por autosuficiencia y completitud ([[student-reception-genai-analogies-computing-2026]]). Su recomendación de diseño es personalizar a través de la estructura del dominio de origen y preguntar al estudiantado qué sabe ya, y no solo qué le interesa, puesto que la familiaridad con un dominio de origen es lo que permite a quien aprende inspeccionar la analogía, y dar a quien aprende control sobre la personalización mediante un menú de analogías, la opción de activarla o la oferta conjunta de versiones genéricas y personalizadas. Sidorkin (2026) documenta otro emparejamiento en el nivel de los materiales del curso y no de las explicaciones individuales: las lecturas semanales generadas a demanda para un curso de posgrado de liderazgo educativo se ajustaron a la vez por interés (sector, papel profesional, ejemplos locales) y por nivel de comprensión (ritmo, definiciones, profundidad), y los registros resultantes compartían una columna vertebral común (similitud coseno TF-IDF de 0,50 a 0,61), lo que él interpreta como una plantilla con controles ajustables y no como una reescritura completa por persona. El mismo corpus muestra que el ajuste era estructural pero desigual en intensidad: los marcadores de ajuste en el nivel de artefacto promediaron 52,24 por cada 10.000 palabras y oscilaron entre 38,74 y 74,29 en los distintos registros, mientras que las indicaciones orientadas a la comprensión produjeron entre 3,4 y 8,7 veces más [[scaffolding|andamiaje]] definicional que el texto explicativo de referencia.

Una tercera dimensión de la personalización es la *meta*, y es la entrada que peor manejan los planificadores de IA. [[personapath-personalized-learning-paths-2026|Liu et al. (2026)]] emparejaron 2.000 personas sintéticas de estudiantes con un grafo de prerrequisitos de 347 libros de texto y 4.092 conceptos, y pidieron a diez LLM que planificaran, paso a paso, qué conocimiento debería estudiar quien aprende para alcanzar una unidad objetivo declarada. Los modelos produjeron currículos estructuralmente sólidos (DeepSeek-V3.1 alcanzó un 90,9% en validez de prerrequisitos y de alucinación), pero no lograron adaptarlos a quien aprende: la adaptabilidad se quedó en un máximo del 44,7%, la tasa de aprobación final de DeepSeek-V3.1 fue del 29,5% en educación básica y del 14,6% en educación superior, y eliminar el campo de dominio de la persona costó hasta 26,1 puntos porcentuales de adaptabilidad, mientras que dejó la validez casi intacta. Generar todo el itinerario de una sola vez en lugar de hacerlo de forma interactiva elevó la validez hasta 30,8 puntos, pero recortó la adaptabilidad en 28,8. La afirmación «personalizado» es una afirmación sobre la respuesta al estado de quien aprende, y la variable de estado es justamente la parte de la que estos planificadores pueden prescindir con más facilidad: una réplica computacional de la preocupación de medición anterior.

Una cuarta dimensión es el *público destinatario* y no la persona que aprende: [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]] regenera una clase existente para un grupo profesional concreto (sanidad, finanzas o energía), y sus evaluadores expertos puntuaron las versiones enmarcadas por sector 0,32 puntos más alto en profundidad de personalización (3,97 frente a 3,65), mientras que la calibración al público se quedó atrás (3,52). Ajustar para un grupo y no para una persona es una forma más barata y más manejable de personalización, pero la rúbrica que la midió evaluaba el ajuste juzgado, no los resultados de aprendizaje.

La personalización puede superar a un presentador humano: en un curso en línea grande (493 encuestados), el estudiantado clasificó los vídeos personalizados generados por IA por encima de los grabados por personas sin personalizar (rango medio 2,26 frente a 2,69) y el 88,4% situó algún vídeo personalizado en primer lugar, frente al 73,8% de los grabados por personas ([[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]]).

## Micropersonalización condicionada por prompts

[[prompt-engineering-personalization-ai-teaching-assistant-2026|Basu, Kakar y Goel (2026)]] muestran que la brecha entre la personalización del sistema y la percibida puede abordarse en el nivel de la respuesta. Su marco para el tutor [[llm]]/[[rag]] Jill Watson combina preferencias elegidas por quien aprende (abstracción, verbosidad, percepción, procesamiento, comprensión) con la demanda cognitiva inferida por el sistema ([[cognitive-diagnosis|taxonomía de Bloom]]) para producir 96 microperfiles adaptados en cada interacción mediante el [[prompt-engineering|condicionamiento estructurado de prompts]], sin reentrenamiento ni autoría [[discipline-specific-aied|específica de la disciplina]]. Es un híbrido de [[adaptive-learning|adaptabilidad]] (selección de preferencias por quien aprende) y adaptatividad (evaluación cognitiva impulsada por el sistema), y muestra que la personalización de *cómo* se presenta el contenido puede ser a la vez escalable y perceptible para quien aprende.

## Ambigüedad terminológica

Un problema recurrente es que el «aprendizaje personalizado» es un término paraguas amplio y definido de forma laxa. Las revisiones sistemáticas ([[khalifeh-redefining-personalized-learning-ai-2026|Khalifeh et al., 2026]]) encuentran que el [[adaptive-learning|aprendizaje adaptativo]], la instrucción individualizada, el aprendizaje a medida y el aprendizaje personalizado se usan de forma intercambiable, sin una definición aceptada universalmente: una fuente de ambigüedad conceptual que complica la síntesis de la investigación y la práctica basada en la evidencia. El campo reclama cada vez más un marco y una definición unificados para que «personalizado» denote una afirmación precisa y respaldada por evidencia y no una etiqueta vaga (un punto que refuerza la [[limitations-in-aied-research|crítica del uso débil de constructos]] de esta base de conocimiento).

## Conceptos conectados

- [[adaptive-learning]] — Sistemas adaptativos que ajustan el contenido, el ritmo y la dificultad a quien aprende en tiempo real
- [[intelligent-tutoring]] — Sistemas de tutoría que modelan a quien aprende y ofrecen instrucción individualizada
- [[student-modeling]] — Representar el conocimiento, las habilidades y los estados de quien aprende que impulsan la adaptación
- [[knowledge-tracing]] — Inferir el dominio de los componentes de conocimiento a partir del rendimiento a lo largo del tiempo
- [[cognitive-diagnosis]] — Diagnosticar el conocimiento y los atributos latentes de quien aprende a partir de sus respuestas
- [[scaffolding]] — Apoyo y desvanecimiento calibrados a las necesidades individuales de quien aprende
- [[student-experience]] — La experiencia vivida de la personalización por parte de quien aprende
- [[learning-analytics]] — Medición del aprendizaje basada en datos que informa la adaptación
- [[formative-assessment]] — Evaluación continua que señala qué adaptar después
- [[summative-assessment]] — Evaluación final cuya comparabilidad complica la personalización
- [[generative-ai]] — Personalización conversacional basada en LLM
- [[edtech-platform]] — Plataformas que ofrecen aprendizaje personalizado a escala
- [[higher-ed]] — Contexto de educación superior para la personalización
- [[online-teaching-and-learning]] — Enseñanza y aprendizaje en línea
- [[recommender-systems-and-learning-paths]]

## Artículos conectados

- [[bespoke-industry-personalized-lecture-videos-2026]] — Regeneración de vídeos de clase personalizados por sector a partir de una transcripción semilla: ajuste a nivel de público, evaluado por expertos de dominio (Puech et al. 2026)
- [[prompt-engineering-personalization-ai-teaching-assistant-2026]] — Micropersonalización mediante ingeniería de prompts de un asistente docente con IA (Basu, Kakar y Goel 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — La tutoría con IA no es un monolito: lo que realmente sabemos (informe de Stanford SCALE/NSSA)
- [[mishra-control-vs-agency-history-2025]] — Distingue dos formas de personalización (resultados uniformes frente a diversos)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Redefinir el aprendizaje personalizado: revisión sistemática
- [[deeptutor]] — Sustrato de personalización nativo de agentes para la tutoría
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Modelo de conocimiento híbrido por capas basado en ontologías para el aprendizaje electrónico personalizado
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — Aprendizaje adaptativo personalizado para fracciones en primaria
- [[ai-coaching-rl-skill-development]] — Entrenamiento con aprendizaje por refuerzo para el desarrollo de habilidades
- [[personalized-ai-generated-videos-preference-2026]] — El estudiantado prefiere vídeos personalizados generados por IA a los grabados por personas sin personalizar (Tomlinson et al. 2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Diagnóstico cognitivo bayesiano para itinerarios de aprendizaje personalizados
- [[graph-its-adaptive-algorithms-2026]] — Tutoría inteligente basada en grafos para dominios dinámicos (2026)
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — Los papeles del profesorado y de la IA en la evaluación formativa con ChatGPT
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Pedagogías marcadas: sesgo en la retroalimentación automatizada personalizada
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Revisión sistemática: los itinerarios adaptativos y los recomendadores son uno de los principales casos de uso de integración de IA en la educación superior
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Defectuosas pero memorables: recepción crítica del estudiantado ante analogías de IA generativa personalizadas por interés en la enseñanza de la informática
- [[personalization-paradox-adaptive-learning-emotions-2026]] — Paradoja de la personalización: la personalización adaptativa percibida se asocia con un menor aprendizaje autorregulado a través de las emociones académicas, amortiguado por la alfabetización en IA (Li, Lin y Qiu 2026)
- [[personapath-personalized-learning-paths-2026]] — PersonaPath: los planificadores LLM alcanzan un 90,9% de validez, pero ningún modelo supera el 44,7% de adaptabilidad al personalizar itinerarios hacia una meta declarada de quien aprende (Liu et al. 2026)
