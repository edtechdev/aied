---
title: Efectos diferenciales entre grupos de estudiantes
created: "2026-09-28T20:12:29-04:00"
updated: "2026-10-02T21:25:27-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-01T10:47:53-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Efectos diferenciales entre grupos de estudiantes** — lo que encuentra la investigación en [[ai-education|IA en la educación]] sobre cómo el *uso* de la IA y sus *efectos* difieren según el tipo de estudiante: [[special-education|estudiantado con discapacidad]] y [[neurodiversity|estudiantado neurodivergente]], aprendices de segunda lengua y [[multilingual-learning|multilingües]], niñas y niños, estudiantado minorizado, estudiantado de hogares con menos ingresos, estudiantado rural, estudiantado de primera generación, estudiantado internacional y [[adult-learning|personas adultas que aprenden]]. El patrón que conviene llevarse es desigual en dos direcciones a la vez: algunas vertientes tienen evidencia real (discapacidad, lengua) mientras que otras están casi vacías (primera generación, internacional, refugiados), e incluso las vertientes fuertes rara vez establecen que un *grupo* difiera: establecen que una herramienta ayudó o perjudicó a una muestra de ese grupo, lo cual es una afirmación distinta. Esta página mapea lo que existe, lo que muestra y las razones metodológicas por las que una media de grupo no es una predicción sobre una persona que aprende.

## Preguntas para reflexionar

- Su herramienta funciona sobre todo con el estudiantado de su clase, y un subgrupo de cinco tuvo dificultades. ¿Sería siquiera detectable una diferencia de subgrupo de ese tamaño en un estudio de este tipo? ¿Y querría cambiar la herramienta para toda la clase con esa evidencia?
- La investigación sobre estudiantado con discapacidad informa de efectos que varían según la categoría de discapacidad. Si dos categorías se sitúan en tamaños del efecto muy distintos en el mismo [[meta-analysis-systematic-review|metaanálisis]], ¿qué dice eso sobre tratar la «discapacidad» como un solo grupo en una decisión de diseño?
- Varios estudios encuentran herramientas de IA que *no* difieren por género en sus efectos, y otros trabajos muestran que el [[ai-feedback-quality|feedback con IA]] y la escritura asistida por IA *sí* reproducen estereotipos de género cuando las personas o los prompts los llevan consigo. ¿Cómo pueden ser ciertas ambas cosas a la vez?
- La mayor parte del trabajo sobre equidad prueba personas de estudiante simuladas en lugar de aprendices reales, porque en la mayoría de los despliegues los atributos demográficos reales no están disponibles para el modelo en el momento de la inferencia. ¿Qué puede establecer una auditoría contrafactual de personas, y qué no?
- Al revisar las vertientes de esta página, ¿qué grupos de estudiantes están realmente representados en los estudios que respaldan la validación de su herramienta? ¿Y qué haría con un grupo que está ausente?
- Una intervención que mejora los resultados de todos pero cierra una brecha (al ayudar a quien estaba más atrás) cuenta una historia de equidad distinta de una que sube la media. Cuando evalúa un piloto, ¿está midiendo la brecha o la media?

## Introducción

Dentro de «¿funciona la IA para *este* tipo de estudiante?» se esconden dos preguntas. La primera es sobre los efectos: si una herramienta produce resultados distintos para grupos distintos. La segunda es sobre el uso: si grupos distintos adoptan, acceden o interactúan de forma diferente con la misma herramienta, lo que puede moldear los resultados sin ningún efecto diferencial. Esta página cubre ambas, grupo por grupo, y señala con claridad dónde se detiene la literatura.

Deliberadamente no duplica a sus páginas vecinas. [[equity-in-ai-education|La equidad en la IA educativa]] aporta el marco normativo y estructural —acceso, representación y equidad de resultados, y el argumento sobre lo que la IA en la educación *debería* hacer—. El [[inclusive-learning|aprendizaje inclusivo]] aporta el marco de diseño, incluido el [[universal-design-for-learning|diseño universal para el aprendizaje]]. La [[digital-divide|brecha digital]] cubre las capas de acceso y de habilidades. La [[neurodiversity|neurodiversidad]], la [[special-education|educación especial]], la [[accessibility|accesibilidad]] y el [[multilingual-learning|aprendizaje multilingüe]] profundizan en grupos concretos. Lo que le queda a esta página es el mapa de evidencia entre grupos y la pregunta de valoración: cómo se estiman estos efectos, qué grupos se estudian siquiera y qué autoriza a hacer un hallazgo a nivel de grupo.

## Cómo se informan las diferencias entre grupos, y por qué la mayoría no puede

**Un estudio de un solo grupo no es un estudio de efectos diferenciales.** La mayor parte de la literatura de este ámbito mide un grupo en ausencia de un grupo de comparación. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] agruparon 29 estudios (cuasi)experimentales sobre IA para estudiantado con discapacidad y encontraron un efecto positivo medio (g de Hedge = 0,588; IC del 95% [0,349; 0,826]), sin comparador neurotípico. Eso indica que una intervención ayudó, no que ayudara a este grupo de forma distinta.

**Los análisis de subgrupos suelen ser demasiado pequeños para responder a la pregunta.** El [[ai-tutoring-micro-rct-gcse-science-2026|micro-ECA de ciencias de GCSE]] es inusualmente explícito: su interacción tratamiento por estatus fue de 0,57 puntos (IC del 95% de −2,25 a 3,39), con estimaciones estratificadas de g = 0,28 (IC del 95% de −0,04 a 0,59) para un grupo y g = 0,35 (IC del 95% de 0,18 a 0,52) para el otro. Un intervalo de subgrupo que se solapa con cero es una pregunta para un piloto local, no una base para una regla que abarque toda la clase.

**Los atributos demográficos suelen ser simulados.** Las demografías reales del estudiantado rara vez se adjuntan a las entradas del modelo, así que las auditorías aportan personas en su lugar. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto y Hovy (2026)]] probaron seis modelos ajustados con instrucciones en tres tareas educativas bajo condiciones de valores por defecto del modelo, persona explícita e historial implícito —192.480 llamadas de inferencia— y encontraron que tanto las personas explícitas como los historiales de conversación *implícitos* mueven el comportamiento del modelo. Su distinción merece conservarse: la conciencia de las diferencias entre quienes aprenden puede ser deseable (ajustar el feedback a la primera lengua de un estudiante), mientras que esa misma sensibilidad es un daño cuando altera el juicio sobre un trabajo idéntico.

**Los arreglos de equidad pueden no generalizarse.** [[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]] redujeron las brechas de error por género y por edad en la estimación de la atención del estudiantado sobre datos de [[assessment-validity|validación]], pero las ganancias no se trasladaron de forma consistente a asignaturas reservadas ni a divisiones repetidas por asignatura.

**Las etiquetas de grupo esconden la variación que hay dentro de ellas.** En el mismo metaanálisis sobre discapacidad, el estudiantado con dificultades específicas del aprendizaje, con discapacidad intelectual y del desarrollo, o sordo, mostró un efecto mayor (g = 0,952) que el estudiantado con trastorno del espectro autista (g = 0,368), una diferencia que los autores informan como no estadísticamente significativa entre 239 tamaños del efecto procedentes de 41 muestras independientes. «Discapacidad» no es un grupo, y «aprendiz de L2» tampoco.

## Discapacidad y neurodivergencia

Esta es la vertiente más profunda de la base de conocimiento, y aquella en la que el reporte es más sólido.

- **Los efectos son reales, pero se distribuyen de forma desigual según el resultado.** En [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]], el [[learning-gains|rendimiento académico]] mostró el efecto mayor (k = 80; g = 0,929), por delante de las habilidades para la vida diaria y otras (g = 0,766) y de las habilidades socioemocionales (k = 144; g = 0,382). Hubo sesgo de publicación (prueba de Egger β = 2,837; p < 0,001); el método trim-and-fill redujo la estimación agrupada a g = 0,2694, que siguió siendo estadísticamente significativa. Conviene leer juntos el efecto de titular y el ajustado por sesgo.
- **El campo se ha reorganizado en torno a la [[generative-ai|IA generativa]].** La [[assistive-tech-neurodivergent-higher-ed-review-2026|revisión de alcance de tecnologías de asistencia digitales para estudiantado neurodivergente]] cribó 766 registros para incluir 40 estudios empíricos, de los cuales 15 usaban IA generativa y 11 formatos inmersivos. La vertiente es pequeña y reciente, no madura.
- **Algunos apoyos de IA igualan en lugar de diferenciar.** [[adhd-video-segmentation-computing-education|Pimenova, Begel y colegas]] segmentaron [[video-education|vídeos instructivos]] en fragmentos de una sola instrucción con pausas fijas en un estudio intrasujeto (17 con TDAH, 10 sin TDAH); todo el mundo mejoró, y los errores y las vacilaciones de los participantes con TDAH cayeron hasta la paridad con sus pares sin TDAH. Esa es la forma de evidencia más sólida disponible a favor del [[universal-design-for-learning|diseño universal para el aprendizaje]] mediante transformación automatizada de contenido: un cambio general que cierra una brecha, en lugar de un arreglo dirigido a un grupo.
- **Lo que el estudiantado neurodivergente dice que necesita suele ser mundano.** [[neurodivergent-computing-students|Una encuesta a 24 estudiantes de informática neurodivergentes y 20 pares neurotípicos]], con cuatro entrevistas, encontró una incomodidad significativa con tareas que carecen de estructura clara o conllevan expectativas ambiguas: un ajuste que no cuesta nada ofrecer.
- **Las decisiones de diseño también pueden excluir epistémicamente.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] sostiene que los datos de entrenamiento anglófonos y centrados en Occidente marginan formas de conocer no hegemónicas y sitúa la situación de quienes aprenden con discapacidad en el centro de esa crítica.

## Lengua: segunda lengua, multilingüismo y aprendices de inglés

Por número de artículos es la vertiente más grande, y se divide con nitidez en efectos de las herramientas y daños de las herramientas.

- **Los efectos de las herramientas son prometedores y ruidosos.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang y Zou (2026)]] metaanalizaron 11 estudios (17 tamaños del efecto; N = 595) sobre [[language-learning|aprendizaje de lenguas]] asistido por robots y encontraron un efecto global positivo (g = 0,83; IC del 95% [0,46; 1,21]) con alta heterogeneidad (I² = 84,4%); de seis moderadores probados, solo el tipo de interacción robot-aprendiz fue significativo. Una base de evidencia de este tamaño respalda un [[benchmark|punto de referencia]] provisional, no una decisión de compra.
- **La infraestructura ya es desigual antes de usar ninguna herramienta.** [[structural-silence-underrepresented-language-ai-2026|Roy y Roy (2026)]] documentan la brecha de corpus con el bengalí como caso: menos del 0,5% del contenido web global frente a alrededor del 49,5% del inglés, pese a que quienes hablan bengalí son casi el 4% de la población mundial.
- **La lengua de instrucción cambia los resultados en 294 estudiantes de educación superior.** La misma revisión informa de que el contenido en lengua extranjera produjo resultados inferiores a la instrucción en lengua materna, y de que la instrucción bilingüe de [[cs-education|programación]] superó a la instrucción solo en inglés.
- **Los detectores penalizan a quienes escriben en una segunda lengua.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge y Mesbah (2026)]] probaron Turnitin y Originality contra 192 textos: un detector clasificó correctamente 48 de 48 textos de autoría profesional, pero clasificó mal cuatro de 48 textos de estudiantado de inglés como lengua extranjera (91,6%). La asimetría es el punto: el error recae sobre el grupo cuya escritura ya está siendo escrutada.

## Género

La investigación sobre género se divide aquí entre si las herramientas tratan de forma distinta a quienes aprenden y si el estudiantado está expuesto a herramientas cargadas de estereotipos.

- **Un diseño deliberadamente neutro en género no mostró diferencias de género.** [[ada-female-coded-chatbot-gender-stereotypes-2026|Un estudio cuasiexperimental con 195 estudiantes de noveno grado]] probó ADA, un [[conversational-ai|chatbot]] con código femenino basado en Ada Lovelace: el interés situacional aumentó en ambos géneros sin diferencias de género en respuesta emocional, carga cognitiva o rendimiento académico. Se puede construir una persona modelo sin activar la amenaza del estereotipo.
- **Pero el contenido de los prompts transfiere sesgo al trabajo del estudiantado.** [[gender-bias-transfer-llm-writing|Un estudio controlado con 123 participantes]] hizo que el estudiantado escribiera ensayos de plan de carrera para perfiles emparejados que solo diferían en género, en condiciones sin IA, con IA neutra y con IA sesgada por género; la condición sesgada transfirió lenguaje diferenciado por género a la escritura del estudiantado y suprimió de forma asimétrica la [[agency|agencia]] femenina. El personal investigador confirmó primero el efecto en 1.600 ensayos generados.
- **El espacio y el encuadre importan tanto como la herramienta.** [[all-girls-genai-makerspace-gender-equity-2026|Un estudio de caso de un makerspace de IA generativa solo para chicas]] encontró que las chicas valoraban el entorno de un solo género como más seguro y relajado, y advierte contra la «girlificación»: una adaptación superficial que deja intactas las relaciones de poder.
- **La sensibilidad del modelo es una propiedad del modelo, no una constante.** En [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]], se auditaron cinco tutores de 7B a 70B en nueve niveles demográficos: Qwen2.5-7B superó el umbral de sesgo |r| ≥ 0,10 en 7 de 12 celdas de dominio por dimensión, mientras que LLaMA-3.1-8B lo superó una vez. El entrenamiento específico en pedagogía redujo algunos sesgos y aumentó otros.
- **Un arreglo de un solo eje puede dejar a un grupo en peor situación:** el estudiantado de género diverso colapsado en una categoría «Género desconocido» tuvo las tasas de verdaderos positivos más bajas bajo todos los métodos de equidad, y ningún método de un solo eje mejoró su tratamiento — la variación de etiquetas de grupo señalada más arriba, dentro de un modelo predictivo de alerta temprana en lugar de un tutor ([[fairness-theatre-early-warning-systems-2026|McConvey et al. (2026)]]).

## Raza, etnia y estudiantado minorizado

Esta vertiente es pequeña en número de artículos y fuerte en mecanismo, porque la evidencia trata de lo que la IA hace *con* un atributo demográfico una vez que lo tiene.

- **La [[personalized-learning|personalización]] es un vector de sesgo.** [[marked-pedagogies-linguistic-bias-writing-feedback|Pedagogías marcadas]] muestra que las herramientas de feedback de escritura con [[llm|LLM]] se desplazan hacia el elogio alineado con estereotipos y la crítica retenida cuando el feedback se personaliza con la raza, la lengua, la discapacidad, el rendimiento o la [[motivation|motivación]] de un estudiante, sobre ensayos idénticos.
- **La señal demográfica puede ser implícita.** La auditoría contrafactual anterior encontró que los historiales de conversación, y no solo las personas explícitas, movían la puntuación y el comportamiento del feedback: el mismo resultado de [[demographic-signals-llm-student-assessment-2026|192.480 llamadas de inferencia]], y una razón por la que una regla de divulgación sobre demografías *declaradas* es insuficiente.
- **Las brechas de migración y de lengua pueden dominar.** En EduFair-Bench, el modelo de 70B emparejó las mayores brechas de lengua e inmigración con las menores brechas de pedagogía, de modo que un tutor que parece pedagógicamente sólido puede ser el más sensible a quién parece ser el estudiante.
- **Exclusión epistémica, no solo error:** véase más arriba [[genai-minoritized-knowledges-disability|la marginación de los conocimientos minorizados]].

## Nivel socioeconómico, geografía y edad

- **La alfabetización digital, y no el uso de la IA, es el mediador.** [[ai-divide-ses-personality-primary-education-2026|Wang y colegas (2026)]] modelaron datos de encuesta y de un registro nacional de 4.497 estudiantes de sexto grado (grado 6) en los Países Bajos y encontraron que el vínculo entre los rasgos de personalidad y el rendimiento académico pasaba por la alfabetización digital y no por la intensidad de uso de la IA, con diferencias en alfabetización digital impulsadas más por la personalidad que por el nivel socioeconómico, y con las ventajas de nivel socioeconómico operando con independencia de la implicación con la IA. El encuadre clásico basado solo en el nivel socioeconómico es incompleto.
- **La geografía puede ser la restricción vinculante.** [[arc-hubs-k12-ai-robotics-rural-2026|El relato de ARC]] sobre la educación en robótica e IA en [[k-12|K-12]] informa de que la participación rural en la FIRST LEGO League cayó en la temporada remota de 2020 y nunca se recuperó, mientras que la urbana sí lo hizo gradualmente, e identifica la mentoría técnica local sostenida —y no los kits o el [[curriculum-design|currículo]]— como la restricción que se distribuye geográficamente.
- **Las personas adultas que aprenden son un caso de diseño aparte,** cubierto por el [[adult-learning|aprendizaje adulto]] y el trabajo de andragogía de la base de conocimiento, más que por estudios de K-12.
- **El acceso sigue condicionando todo lo demás:** véanse la [[digital-divide|brecha digital]] y el hallazgo de que [[access-not-enough-ai-tutoring-2026|el acceso a la tutoría con IA no es suficiente]] sin integración [[pedagogy|pedagógica]].

## Dónde faltan las pruebas

El hallazgo honesto de este repaso es lo delgados que son algunos grupos. Cada uno de estos es una brecha real en la base de evidencia, no una brecha de esta página.

- **Estudiantado de primera generación:** un estudio informa de una diferencia de uso y no de un efecto. En [[student-ai-inquiry-types-cs2-2026|un estudio de indagación en CS2]], el estudiantado de generación continua trató la IA como un socio activo de [[problem-solving|resolución de problemas]], mientras que el estudiantado de primera generación adoptó un papel confirmatorio, orientado a la validación, y formuló menos preguntas en conjunto.
- **Estudiantado de primera generación: la primera estimación de efecto, y va en la dirección equivocada.** El [[rct|ensayo aleatorizado]] de un [[intelligent-tutoring|tutor de IA]] integrado en un curso de [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] aporta lo que falta a la entrada anterior: una diferencia medida en lugar de un patrón de uso. En la muestra completa, el efecto del acceso al tutor sobre las calificaciones finales fue 2,87 puntos (0,28 SD) más negativo para el estudiantado de primera generación, lo que implica −5,10 puntos (−0,50 SD) para este frente a −2,23 puntos (−0,22 SD) para sus pares; la diferencia fue mayor en la muestra de coincidencia exacta (−3,89 puntos, −0,35 SD), y el estudiantado de primera generación también perdió más puntos de tareas y más vistas de páginas de la plataforma. El estudio no informa de un mecanismo y su precisión varía según el resultado, pero la dirección es la opuesta al relato de la brecha que se cierra: el estudiantado con menos acceso previo al apoyo académico cargó con el mayor costo medido.
- **Estudiantado internacional:** un estudio de [[mixed-methods-research|métodos mixtos]] (encuesta n = 60; entrevistas n = 14) sobre [[international-students-conversational-ai-adaptation|apoyo a la adaptación transcultural]].
- **Estudiantado con altas capacidades y de alto rendimiento:** efectivamente no estudiado como grupo en este corpus.
- **Personas refugiadas, inmigrantes y desplazadas:** ningún estudio.
- **El género todavía se analiza como binario** en la mayor parte del trabajo anterior, y las categorías de discapacidad varían entre estudios, así que la comparación entre estudios del «mismo» grupo tiene límites.

## Usar estas pruebas sin sobreajustar una etiqueta de grupo

- **Trate las medias de grupo como hipótesis sobre una población, nunca como predicciones sobre una persona.** Toda afirmación diferencial anterior es un enunciado distribucional.
- **Pregunte si su estudiantado estaba siquiera en la muestra de validación** antes de fiarse de la inclusividad que declara una herramienta; tanto la vertiente de neurodivergencia como la de lengua muestran que la representación en el desarrollo es la excepción.
- **Prefiera diseños igualadores cuando la evidencia lo permita.** El resultado de segmentación de vídeo para TDAH —todos mejoran, la brecha se cierra— es un objetivo más adecuado para un aula general que un complemento dirigido a un grupo.
- **Tenga cuidado con la personalización que consume atributos demográficos.** El hallazgo de las [[marked-pedagogies-linguistic-bias-writing-feedback|pedagogías marcadas]] trata directamente de ese mecanismo, y se aplica a los controles de [[well-being|bienestar]], a los [[affective-computing|tutores afectivos]] y a los [[recommender-systems-and-learning-paths|sistemas de recomendación]] que perfilan a quienes aprenden.
- **Pruebe localmente, con el grupo que le importa, con un resultado medido sin la herramienta.** Véanse [[interpreting-and-applying-aied-research|Interpretar y aplicar la investigación en IAEd]] para los hábitos de valoración y [[research-methods-aied|Métodos de investigación en IA en la educación]] para los diseños que hacen defendible una prueba local.

## Conceptos conectados

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## Artículos conectados

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 estudios sobre IA para estudiantado con discapacidad: g = 0,588, y g = 0,269 tras el ajuste por sesgo
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — De 766 registros a 40 estudios, 15 de ellos de IA generativa
- [[adhd-video-segmentation-computing-education]] — Un cambio de diseño general que llevó a los participantes con TDAH a la paridad
- [[neurodivergent-computing-students]] — 24 estudiantes neurodivergentes sobre estructura, ambigüedad y colaboración
- [[genai-minoritized-knowledges-disability]] — Marginación epistémica en la IA, con la discapacidad como caso
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0,83 con I² = 84,4% en una base de evidencia pequeña sobre L2
- [[structural-silence-underrepresented-language-ai-2026]] — El bengalí, por debajo del 0,5% del contenido web frente al 49,5% del inglés
- [[hadra-ai-detector-accuracy-efl-2026]] — Los detectores clasifican mal la escritura de inglés como lengua extranjera mientras puntúan perfectamente los textos profesionales
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — Una prueba con 195 estudiantes sobre modelos femeninos sin diferencias de género
- [[gender-bias-transfer-llm-writing]] — Prompts sesgados por género que se transfieren a los ensayos del estudiantado
- [[all-girls-genai-makerspace-gender-equity-2026]] — Un espacio de un solo género valorado, con una advertencia contra la girlificación
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — La equidad de los tutores varía según el modelo, el dominio y la dimensión de comportamiento
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Feedback alineado con estereotipos sobre ensayos idénticos
- [[demographic-signals-llm-student-assessment-2026]] — 192.480 llamadas: tanto las personas explícitas como los historiales implícitos mueven a los modelos
- [[student-attention-estimation-fairness-2026]] — Regularización de equidad que no se generalizó
- [[ai-divide-ses-personality-primary-education-2026]] — 4.497 estudiantes: la alfabetización digital, y no el uso de IA, media la brecha
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Participación rural que nunca se recuperó, y la mentoría como restricción
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Una interacción de subgrupo cuyo intervalo de confianza cruza el cero
- [[student-ai-inquiry-types-cs2-2026]] — El único hallazgo del corpus sobre uso en primera generación
- [[international-students-conversational-ai-adaptation]] — El único estudio del corpus sobre estudiantado internacional
- [[liu-course-integrated-ai-tutoring-rct-2026]] — La primera estimación de efecto del corpus para el estudiantado de primera generación: el acceso al tutor les costó 0,50 SD de calificación final frente a 0,22 para sus pares (Liu et al. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: evaluación de las intervenciones de equidad post hoc en sistemas de alerta temprana controlados por proveedores
