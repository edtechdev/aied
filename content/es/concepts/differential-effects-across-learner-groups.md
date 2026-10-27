---
title: Efectos diferenciales entre grupos de estudiantes
created: "2026-09-28T20:12:29-04:00"
updated: "2026-10-26T22:02:40-04:00"
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
reviewed_by: [editor]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-26T10:50:00-04:00"
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

> **Efectos diferenciales entre grupos de estudiantes** — lo que encuentra la investigación en [[ai-education|IA en la educación]] sobre cómo el *uso* de la IA y sus *efectos* difieren entre tipos de estudiantes: [[special-education|estudiantes con discapacidad]] y [[neurodiversity|estudiantes neurodivergentes]], aprendices de segunda lengua y [[multilingual-learning|estudiantes multilingües]], niñas y niños, estudiantes minorizados, estudiantes de familias con menos ingresos, estudiantes rurales, estudiantes de primera generación, estudiantes internacionales y [[adult-learning|estudiantes adultos]]. El patrón que conviene retener es desigual en dos direcciones a la vez: algunas vertientes cuentan con evidencia real (discapacidad, lengua) mientras que otras están casi vacías (primera generación, internacional, refugiados), e incluso las vertientes sólidas rara vez establecen que un *grupo* difiera: establecen que una herramienta ayudó o perjudicó a una muestra de ese grupo, lo cual es una afirmación distinta. Esta página mapea lo que existe, lo que muestra y las razones metodológicas por las que una media de grupo no es una predicción sobre un estudiante.

## Preguntas para considerar

- Su herramienta funciona sobre todo con los estudiantes de su clase, y un subgrupo de cinco tuvo dificultades. ¿Sería siquiera detectable una diferencia de subgrupo de ese tamaño en un estudio de este tipo? ¿Y querría cambiar la herramienta para toda la clase con esa evidencia?
- La investigación sobre estudiantes con discapacidad informa de efectos que varían según la categoría de discapacidad. Si dos categorías se sitúan en tamaños del efecto muy distintos dentro del mismo [[meta-analysis-systematic-review|metaanálisis]], ¿qué dice eso sobre tratar la «discapacidad» como un solo grupo en una decisión de diseño?
- Varios estudios encuentran herramientas de IA que *no* difieren por género en sus efectos, y otros trabajos muestran que la [[ai-feedback-quality|retroalimentación con IA]] y la escritura asistida por IA *sí* reproducen estereotipos de género cuando las personas simuladas o los prompts los llevan consigo. ¿Cómo pueden ser ciertas ambas cosas a la vez?
- La mayor parte del trabajo sobre equidad prueba personas de estudiante simuladas en lugar de aprendices reales, porque en la mayoría de los despliegues los atributos demográficos reales no están disponibles para el modelo en el momento de la inferencia. ¿Qué puede establecer una auditoría contrafactual de personas simuladas, y qué no?
- Al revisar las vertientes de esta página, ¿qué grupos de estudiantes están realmente representados en los estudios que respaldan la validación de su herramienta? ¿Y qué haría con un grupo que está ausente?
- Una intervención que mejora los resultados de todos pero cierra una brecha (al ayudar a quienes estaban más atrás) cuenta una historia de equidad distinta de una que sube la media. Cuando evalúa un piloto, ¿está midiendo la brecha o la media?

## Introducción

Dentro de la pregunta «¿funciona la IA para *este* tipo de estudiante?» se esconden dos cuestiones. La primera es sobre los efectos: si una herramienta produce resultados distintos para grupos distintos. La segunda es sobre el uso: si grupos distintos adoptan, acceden o interactúan de forma diferente con la misma herramienta, lo que puede moldear los resultados sin que exista ningún efecto diferencial. Esta página cubre ambas, grupo por grupo, y señala con claridad dónde se detiene la literatura.

Deliberadamente no duplica a sus páginas vecinas. [[equity-in-ai-education|Equidad en la IA educativa]] aporta el marco normativo y estructural —acceso, representación y equidad de resultados, y el argumento sobre lo que la IA en la educación *debería* hacer—. El [[inclusive-learning|aprendizaje inclusivo]] aporta el marco de diseño, incluido el [[universal-design-for-learning|Diseño Universal para el Aprendizaje]]. La [[digital-divide|brecha digital]] cubre las capas de acceso y de habilidades. La [[neurodiversity|neurodiversidad]], la [[special-education|educación especial]], la [[accessibility|accesibilidad]] y el [[multilingual-learning|aprendizaje multilingüe]] profundizan en grupos concretos. Lo que le queda a esta página es el mapa de la evidencia entre grupos y la pregunta de valoración: cómo se estiman estos efectos, qué grupos se estudian siquiera y qué autoriza a hacer un hallazgo a nivel de grupo.

## Cómo se informan las diferencias entre grupos, y por qué la mayoría no puede

**Un estudio de un solo grupo no es un estudio de efectos diferenciales.** La mayor parte de la literatura de este ámbito mide un grupo en ausencia de un grupo de comparación. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]] agruparon 29 estudios (cuasi)experimentales sobre IA para estudiantes con discapacidad y encontraron un efecto positivo medio (g de Hedges = 0,588; IC del 95% [0,349; 0,826]), sin comparador neurotípico. Eso indica que una intervención ayudó, no que ayudara a este grupo de forma distinta.

**Los análisis de subgrupos suelen ser demasiado pequeños para responder a la pregunta.** El [[ai-tutoring-micro-rct-gcse-science-2026|micro-ECA de ciencias de GCSE]] es inusualmente explícito: su interacción tratamiento por estatus fue de 0,57 puntos (IC del 95% de −2,25 a 3,39), con estimaciones estratificadas de g = 0,28 (IC del 95% de −0,04 a 0,59) para un grupo y g = 0,35 (IC del 95% de 0,18 a 0,52) para el otro. Un intervalo de subgrupo que se solapa con cero es una pregunta para un piloto local, no una base para una regla que abarque toda la clase.

**Los atributos demográficos suelen ser simulados.** Las demografías reales del estudiantado rara vez se adjuntan a las entradas del modelo, así que las auditorías aportan personas simuladas en su lugar. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto y Hovy (2026)]] ejecutaron seis modelos ajustados con instrucciones en tres tareas educativas bajo condiciones de valores por defecto del modelo, persona explícita e historial implícito —192.480 llamadas de inferencia— y encontraron que tanto las personas explícitas como los historiales de conversación *implícitos* modifican el comportamiento del modelo. Su distinción merece conservarse: la conciencia de las diferencias entre quienes aprenden puede ser deseable (ajustar la retroalimentación a la primera lengua de un estudiante), mientras que esa misma sensibilidad es un daño cuando altera el juicio sobre un trabajo idéntico.

**Los arreglos de equidad pueden no generalizarse.** [[student-attention-estimation-fairness-2026|Fragkiadakis et al. (2026)]] redujeron las brechas de error por género y por edad en la estimación de la atención del estudiantado sobre datos de [[assessment-validity|validación]], pero las ganancias no se trasladaron de forma consistente a asignaturas reservadas ni a divisiones repetidas a nivel de asignatura.

**Las etiquetas de grupo esconden la variación que hay dentro de ellas.** En el mismo metaanálisis sobre discapacidad, los estudiantes con dificultades específicas del aprendizaje, con discapacidad intelectual y del desarrollo, o sordos mostraron un efecto mayor (g = 0,952) que los estudiantes con trastorno del espectro autista (g = 0,368), una diferencia que los autores informan como no estadísticamente significativa entre 239 tamaños del efecto procedentes de 41 muestras independientes. «Discapacidad» no es un solo grupo, y «aprendiz de L2» tampoco.

## Discapacidad y neurodivergencia

Esta es la vertiente más profunda de la base de conocimientos, y aquella en la que el reporte es más sólido.

- **Los efectos son reales, pero se distribuyen de forma desigual según el resultado.** En [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang et al. (2024)]], el [[learning-gains|rendimiento académico]] mostró el efecto mayor (k = 80, g = 0,929), por delante de las habilidades para la vida diaria y otras habilidades (g = 0,766) y de las habilidades socioemocionales (k = 144, g = 0,382). Había sesgo de publicación (prueba de Egger β = 2,837, p < ,001); el método trim-and-fill redujo la estimación agrupada a g = 0,2694, que siguió siendo estadísticamente significativa. Conviene leer el efecto principal y el ajustado por sesgo de forma conjunta.
- **El campo se ha reorganizado en torno a la [[generative-ai|IA generativa]].** La [[assistive-tech-neurodivergent-higher-ed-review-2026|revisión de alcance de tecnologías asistivas digitales para estudiantes neurodivergentes]] examinó 766 registros para incluir 40 estudios empíricos, de los cuales 15 usaban IA generativa y 11 usaban formatos inmersivos. La vertiente es pequeña y reciente, más que madura.
- **Algunos apoyos con IA igualan en lugar de diferenciar.** [[adhd-video-segmentation-computing-education|Pimenova, Begel y colegas]] segmentaron los [[video-education|vídeos instructivos]] en fragmentos de una sola instrucción con pausas fijas en un estudio intrasujetos (17 con TDAH, 10 sin TDAH); todos mejoraron, y los errores y vacilaciones de los participantes con TDAH descendieron hasta la paridad con sus compañeros sin TDAH. Es la forma más sólida de evidencia disponible para el [[universal-design-for-learning|Diseño Universal para el Aprendizaje]] mediante la transformación automatizada de contenidos: un cambio general que cierra una brecha, en lugar de un arreglo dirigido a un grupo.
- **Lo que los estudiantes neurodivergentes dicen necesitar suele ser mundano.** [[neurodivergent-computing-students|Una encuesta a 24 estudiantes neurodivergentes de informática y 20 compañeros neurotípicos]], con cuatro entrevistas, encontró una molestia significativa con las tareas que carecen de una estructura clara o conllevan expectativas ambiguas, una adaptación que no cuesta nada proporcionar.
- **Las decisiones de diseño también pueden excluir epistémicamente.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]] sostiene que los datos de entrenamiento anglófonos y occidentalo-céntricos marginan las formas de conocimiento no hegemónicas y sitúa la situación de los estudiantes con discapacidad en el centro de esa crítica.

## Lengua: estudiantes de segunda lengua, multilingües y de inglés

Por número de artículos, esta es la vertiente más grande, y se divide con claridad en efectos de las herramientas y daños de las herramientas.

- **Los efectos de las herramientas son prometedores y ruidosos.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang y Zou (2026)]] realizaron un metaanálisis de 11 estudios (17 tamaños del efecto, N = 595) sobre [[language-learning|aprendizaje de idiomas]] asistido por robots y encontraron un efecto global positivo (g = 0,83; IC del 95% [0,46; 1,21]) con alta heterogeneidad (I² = 84,4%); de los seis moderadores probados, solo el tipo de interacción robot-estudiante resultó significativo. Una base de evidencia de este tamaño respalda un [[benchmark]] provisional, no una decisión de compra.
- **La propia infraestructura es desigual antes de usar cualquier herramienta.** [[structural-silence-underrepresented-language-ai-2026|Roy y Roy (2026)]] documentan la brecha de corpus con el bengalí como caso: menos del 0,5% del contenido web mundial frente a aproximadamente el 49,5% del inglés, a pesar de que las personas hablantes de bengalí son casi el 4% de la población mundial.
- **La lengua de instrucción cambia los resultados entre 294 estudiantes de educación superior.** La misma revisión informa de que los contenidos en lengua extranjera arrojaron peores resultados que la instrucción en la lengua materna, y de que la instrucción bilingüe de [[cs-education|programación]] superó a la instrucción solo en inglés.
- **Los detectores penalizan a quienes escriben en segunda lengua.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge y Mesbah (2026)]] probaron Turnitin y Originality contra 192 textos: un detector clasificó correctamente 48 de 48 textos escritos por profesionales, pero clasificó erróneamente cuatro de 48 textos de estudiantes de inglés como lengua extranjera (91,6%). La asimetría es el punto clave: el error recae sobre el grupo cuya escritura ya está siendo examinada con lupa.

## Género

La investigación sobre género se divide aquí entre si las herramientas tratan a los estudiantes de forma distinta, y si los estudiantes están expuestos a herramientas cargadas de estereotipos.

- **Un diseño deliberadamente neutro en cuanto al género no mostró diferencias de género.** [[ada-female-coded-chatbot-gender-stereotypes-2026|Un estudio cuasiexperimental con 195 estudiantes de noveno curso]] probó ADA, un [[conversational-ai|chatbot]] con codificación femenina basado en Ada Lovelace: el interés situacional aumentó en ambos géneros sin diferencia de género en la respuesta emocional, la carga cognitiva ni el rendimiento académico. Se puede construir una persona modelo sin desencadenar amenaza de estereotipo.
- **Pero el contenido de los prompts transfiere sesgo al trabajo del estudiante.** [[gender-bias-transfer-llm-writing|Un estudio controlado con 123 participantes]] pidió a estudiantes escribir ensayos sobre planes de carrera para perfiles emparejados que diferían solo en el género, bajo condiciones sin IA, con IA neutra y con IA con sesgo de género; la condición sesgada transfirió lenguaje diferenciado por género a la escritura de los estudiantes y suprimió la [[agency|agencia]] femenina de forma asimétrica. Los investigadores confirmaron primero el efecto sobre 1.600 ensayos generados.
- **El espacio y el encuadre importan tanto como la herramienta.** [[all-girls-genai-makerspace-gender-equity-2026|Un estudio de caso de un espacio de creación con IA generativa solo para chicas]] encontró que las chicas valoraban el entorno de un solo género como más seguro y relajado, y advierte contra la «girlification»: una adaptación superficial que deja intactas las relaciones de poder.
- **La sensibilidad del modelo es una propiedad del modelo, no una constante.** En [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]], se auditaron cinco tutores de 7B a 70B en nueve niveles demográficos: Qwen2.5-7B superó el umbral de sesgo de |r| ≥ 0,10 en 7 de 12 celdas dominio-por-dimensión, mientras que LLaMA-3.1-8B lo superó una sola vez. El entrenamiento específico en pedagogía redujo algunos sesgos y aumentó otros.
- **Un arreglo de un solo eje puede dejar a un grupo peor:** los estudiantes de género diverso agrupados en una categoría «Unknown Gender» tuvieron las tasas más bajas de verdaderos positivos bajo todos los métodos de equidad, y ningún método de un solo eje mejoró su trato: la variación de las etiquetas de grupo señalada antes, dentro de un modelo predictivo de alerta temprana en lugar de un tutor ([[fairness-theatre-early-warning-systems-2026|McConvey et al. (2026)]]).

## Raza, etnia y estudiantes minorizados

Esta vertiente es pequeña en número de artículos y fuerte en mecanismo, porque la evidencia versa sobre lo que la IA *hace* con un atributo demográfico una vez que lo tiene.

- **La [[personalized-learning|personalización]] es un vector de sesgo.** [[marked-pedagogies-linguistic-bias-writing-feedback|Marked Pedagogies]] muestra que las herramientas de [[llm|LLM]] de retroalimentación sobre la escritura se desplazan hacia un elogio alineado con estereotipos y una crítica retenida cuando la retroalimentación se personaliza con la raza, la lengua, la discapacidad, el rendimiento o la [[motivation|motivación]] del estudiante, sobre ensayos idénticos.
- **La señal demográfica puede ser implícita.** La auditoría contrafactual anterior encontró que los historiales de conversación, y no solo las personas simuladas explícitas, modificaban el comportamiento de puntuación y retroalimentación: el mismo resultado de las [[demographic-signals-llm-student-assessment-2026|192.480 llamadas de inferencia]], y una razón por la que una norma de divulgación sobre datos demográficos *declarados* es insuficiente.
- **Las brechas de migración y lengua pueden dominar.** En EduFair-Bench, el modelo de 70B combinó las mayores brechas de lengua e inmigración con las menores brechas pedagógicas, de modo que un tutor que parece pedagógicamente sólido puede ser el más sensible a quién parece ser el estudiante.
- **Exclusión epistémica, no solo error:** véase [[genai-minoritized-knowledges-disability|la marginación de los conocimientos minorizados]] más arriba.

## Estatus socioeconómico, geografía y edad

- **La alfabetización digital, no el uso de la IA, es el mediador.** [[ai-divide-ses-personality-primary-education-2026|Wang y colegas (2026)]] modelaron datos de encuesta y de registros nacionales de 4.497 estudiantes de 6.º curso en los Países Bajos y encontraron que el vínculo entre los rasgos de personalidad y el rendimiento académico pasaba por la alfabetización digital en lugar de por la intensidad de uso de la IA, con diferencias en la alfabetización digital motivadas más por la personalidad que por el estatus socioeconómico, y con las ventajas del estatus socioeconómico operando de forma independiente del compromiso con la IA. El encuadre clásico centrado solo en el estatus socioeconómico es incompleto.
- **La geografía puede ser la restricción vinculante.** [[arc-hubs-k12-ai-robotics-rural-2026|El relato de ARC]] sobre la educación en robótica e IA para [[k-12|K-12]] informa de que la participación rural en FIRST LEGO League cayó en la temporada remota de 2020 y nunca se recuperó, mientras que la participación urbana se recuperó gradualmente, e identifica la mentoría técnica local sostenida —no los kits ni el [[curriculum-design|currículo]]— como la restricción que se distribuye geográficamente.
- **Los estudiantes adultos son un caso de diseño aparte,** cubierto por [[adult-learning|Aprendizaje Adulto]] y el trabajo de andragogía de la base de conocimientos en lugar de por los estudios de K-12.
- **El acceso sigue condicionando todo lo demás:** véase [[digital-divide|Brecha Digital]] y el hallazgo de que [[access-not-enough-ai-tutoring-2026|el acceso a la tutoría con IA no basta]] sin una integración [[pedagogy|pedagógica]].

## Formación disciplinar

La formación disciplinar es un eje diferencial que el mapa grupo por grupo de esta página aún no recogía: la misma herramienta puede distribuir su beneficio de forma desigual entre campos en lugar de entre características demográficas del estudiantado.

- **Una herramienta puede atraer a una disciplina y alejar a otra.** En un cuasiexperimento de dos semanas con 130 estudiantes de grado en equipos multidisciplinares, [[generative-ai|ChatGPT]] aumentó el [[student-engagement|compromiso]] físico de los estudiantes de STEM y lo redujo en los estudiantes que no eran de STEM (Q = 9,87; p < ,05), y los apuntes escritos sin ChatGPT puntuaron más alto en diversidad e integración de ideas disciplinares ([[caeai-chatgpt-interdisciplinary-stem-nonstem-2026|Zhu et al. (2026)]]).

## Dónde falta la evidencia

El hallazgo honesto de este estudio es lo delgadas que son algunas líneas. Cada uno de estos casos es una brecha real en la base de evidencia, no una brecha en esta página.

- **Estudiantes de primera generación:** un estudio informa de una diferencia de uso en lugar de un efecto. En [[student-ai-inquiry-types-cs2-2026|un estudio de indagación en CS2]], los estudiantes de generaciones continuas trataban la IA como un compañero activo de [[problem-solving|resolución de problemas]], mientras que los estudiantes de primera generación adoptaban un papel confirmatorio y orientado a la validación, y formulaban menos preguntas en general.
- **Estudiantes de primera generación: la primera estimación de efecto, y va en la dirección equivocada.** El [[rct|ensayo aleatorizado]] de [[liu-course-integrated-ai-tutoring-rct-2026|Liu et al. (2026)]] sobre un [[intelligent-tutoring|tutor de IA]] integrado en el curso aporta lo que le falta a la entrada anterior: un diferencial medido en lugar de un patrón de uso. En la muestra completa, el efecto del acceso al tutor sobre las notas finales fue 2,87 puntos (0,28 DE) más negativo para los estudiantes de primera generación, lo que implica −5,10 puntos (−0,50 DE) para ellos frente a −2,23 puntos (−0,22 DE) para sus compañeros; el diferencial fue mayor en la muestra de emparejamiento exacto (−3,89 puntos, −0,35 DE), y los estudiantes de primera generación también perdieron más puntos de tareas y visitas a páginas de la plataforma. El estudio no informa de ningún mecanismo y su precisión varía según el resultado, pero la dirección es la opuesta a la historia de reducción de la brecha: los estudiantes con menos acceso previo a apoyo académico cargaron con el mayor coste medido.
- **Estudiantes internacionales:** un estudio [[mixed-methods-research|de métodos mixtos]] (encuesta n = 60, entrevistas n = 14) sobre [[international-students-conversational-ai-adaptation|apoyo a la adaptación transcultural]].
- **Estudiantes internacionales: un patrón de compromiso medido, no una estimación de efecto.** Entre 270 estudiantes internacionales de etnia minoritaria en siete [[business-education|escuelas de negocios]] del Reino Unido, el uso declarado de [[generative-ai|IA generativa]] se asoció positivamente con las cuatro vertientes de [[student-engagement|compromiso]], sobre todo el compromiso agéntico (β = 0,429), y las condiciones facilitadoras (β = 0,369) fueron el predictor más fuerte de la intención de uso ([[bjet-genai-engagement-minority-ethnic-students-2026|Adekoya et al. (2026)]]).
- **Estudiantes superdotados y de alto rendimiento:** prácticamente no estudiados como grupo en este corpus.
- **Estudiantes refugiados, inmigrantes y desplazados:** ningún estudio.
- **El género sigue analizándose como binario** en la mayor parte de los trabajos anteriores, y las categorías de discapacidad varían entre estudios, por lo que la comparación entre estudios del «mismo» grupo tiene límites.

## Usar esta evidencia sin sobreajustar una etiqueta de grupo

- **Trate las medias de grupo como hipótesis sobre una población, nunca como predicciones sobre una persona.** Toda afirmación diferencial anterior es un enunciado distribucional.
- **Pregunte si sus estudiantes estuvieron siquiera en la muestra de validación** antes de confiar en la inclusividad declarada de una herramienta; las vertientes de neurodivergencia y de lengua muestran ambas que la representación en el desarrollo es la excepción.
- **Prefiera diseños igualadores cuando la evidencia lo permita.** El resultado de la segmentación de vídeos para el TDAH —todos mejoran, la brecha se cierra— es un objetivo más ajustado a un aula general que un complemento dirigido a un grupo.
- **Tenga cuidado con la personalización que consume atributos demográficos.** El hallazgo de las [[marked-pedagogies-linguistic-bias-writing-feedback|marked pedagogies]] versa directamente sobre ese mecanismo, y se aplica a los chequeos de [[well-being|bienestar]], a los tutores [[affective-computing|afectivos]] y a los [[recommender-systems-and-learning-paths|sistemas de recomendación]] que perfilan a los estudiantes.
- **Pruebe localmente, con el grupo que le importa, y con un resultado medido sin la herramienta.** Véase [[interpreting-and-applying-aied-research|Interpretar y aplicar la investigación en AIEd]] para los hábitos de valoración y [[research-methods-aied|Métodos de investigación en IA en la educación]] para los diseños que hacen defendible una prueba local.

## Concepciones erróneas comunes

- **«Las etiquetas de grupo capturan la variación que importa.»** **Las etiquetas de grupo esconden la variación que hay dentro de ellas**: en el metaanálisis sobre discapacidad, los estudiantes con **dificultades específicas del aprendizaje, discapacidad intelectual y del desarrollo** y otras categorías se agrupan en una misma estimación, de modo que la media del grupo no describe a ninguno de ellos.
- **«Los análisis de subgrupos responden a la pregunta de los efectos diferenciales.»** Normalmente **son demasiado pequeños para responderla**: el [[ai-tutoring-micro-rct-gcse-science-2026|micro-ECA de ciencias de GCSE]] es inusualmente explícito al señalar que su contraste de **tratamiento** tiene potencia para el efecto global y no para las diferencias entre subgrupos. Un hallazgo de subgrupo sin potencia suficiente es una hipótesis, no un resultado.
- **«Un efecto agrupado medio indica si un grupo concreto se beneficia.»** [[zhang-ai-students-disabilities-meta-analysis-2024|29 estudios (cuasi)experimentales]] se agruparon en **g de Hedges = 0,588 (IC del 95% [0,349; 0,826])** entre categorías de discapacidad. El intervalo describe la media de esas categorías, y «qué grupo, qué necesidad» es un análisis aparte.

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

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — 29 estudios sobre IA para estudiantes con discapacidad: g = 0,588, y g = 0,269 tras el ajuste por sesgo
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — ChatGPT benefició de forma desigual a estudiantes de STEM y no STEM en el aprendizaje interdisciplinar
- [[bjet-genai-engagement-minority-ethnic-students-2026]] — Uso de IA generativa y compromiso de cuatro vertientes entre estudiantes internacionales de etnia minoritaria
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — De 766 registros a 40 estudios, 15 de ellos con IA generativa
- [[adhd-video-segmentation-computing-education]] — Un cambio de diseño general que llevó a los participantes con TDAH a la paridad
- [[neurodivergent-computing-students]] — 24 estudiantes neurodivergentes sobre estructura, ambigüedad y colaboración
- [[genai-minoritized-knowledges-disability]] — Marginación epistémica en la IA, con la discapacidad como caso
- [[robot-assisted-language-learning-meta-analysis-2026]] — g = 0,83 con I² = 84,4% en una pequeña base de evidencia sobre L2
- [[structural-silence-underrepresented-language-ai-2026]] — Menos del 0,5% del contenido web en bengalí frente al 49,5% del inglés
- [[hadra-ai-detector-accuracy-efl-2026]] — Los detectores clasifican erróneamente la escritura de estudiantes de inglés como lengua extranjera mientras puntúan perfectamente los textos profesionales
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — Una prueba con 195 estudiantes de modelos femeninos sin diferencia de género
- [[gender-bias-transfer-llm-writing]] — Prompts con sesgo de género que se transfieren a los ensayos de los estudiantes
- [[all-girls-genai-makerspace-gender-equity-2026]] — Espacio de un solo género valorado, con una advertencia contra la girlification
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — La equidad de los tutores varía según el modelo, el dominio y la dimensión de comportamiento
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Retroalimentación alineada con estereotipos sobre ensayos idénticos
- [[demographic-signals-llm-student-assessment-2026]] — 192.480 llamadas: tanto las personas simuladas explícitas como los historiales implícitos modifican los modelos
- [[student-attention-estimation-fairness-2026]] — Una regularización de equidad que no generalizó
- [[ai-divide-ses-personality-primary-education-2026]] — 4.497 estudiantes: la alfabetización digital, no el uso de la IA, media en la brecha
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Una participación rural que nunca se recuperó, y la mentoría como restricción
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Una interacción de subgrupo cuyo intervalo de confianza cruza el cero
- [[student-ai-inquiry-types-cs2-2026]] — El único hallazgo de uso sobre estudiantes de primera generación del corpus
- [[international-students-conversational-ai-adaptation]] — El único estudio del corpus sobre estudiantes internacionales
- [[liu-course-integrated-ai-tutoring-rct-2026]] — La primera estimación de efecto del corpus para estudiantes de primera generación: el acceso al tutor les costó 0,50 DE de nota final frente a 0,22 para sus compañeros (Liu et al. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Fairness Theatre: Evaluating Post-Hoc Fairness Interventions in Vendor-Controlled Early Warning Systems
