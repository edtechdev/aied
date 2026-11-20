---
title: Niveles educativos
created: "2026-09-28T20:10:35-04:00"
updated: "2026-11-15T10:13:31-05:00"
type: concept
foundations: [ai-education, learner-identity]
pedagogy: [scaffolding, self-regulated-learning, prior-knowledge]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment, learning-gains]
methods: [meta-analysis-systematic-review]
audience: [learners, parents and families]
institutions: [educational-policy-ai, governance]
ethics: [differential-effects-across-learner-groups, equity-in-ai-education, privacy, pedagogical-safety]
discipline: [teacher education]
level: [preschool, primary education, middle school, secondary, k 12, higher ed, undergraduate, graduate, adult learning, special education]
confidence: medium
translation_of: concepts/education-levels
source_updated: "2026-11-15T06:45:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
connected_concepts: [primary-education, secondary-education, undergraduate-education, graduate-education, k-12, early-childhood-elementary-ai-education, higher-ed, adult-learning, special-education, teacher-education, vocational-education, learners, parents-and-families, differential-effects-across-learner-groups]
connected_articles: [adaptive-intelligent-tutoring-primary-mathematics-2026, dai-chatbots-problem-posing-primary-2026, chatgpt-music-education-junior-high-2026, ai-lms-middle-school-longitudinal, stromberg-generative-ai-learning-penalty-secondary-2026, llm-reliance-types-undergrad, ai-assisted-seminar-learning-information-literacy-2026, ai-mediated-research-agency-formation-2026, data-privacy-ai-african-higher-education-2026, ai-adoption-readiness-ukraine-education-managers-2026, ai-ive-pbl-vocational-design-creativity-2026, preschool-teachers-ai-behavioral-intention-2026, vahedian-children-attitudes-ai-chatbot-2026, yim-ai-literacy-primary-schools-review-2025, perez-montesdeoca-genai-secondary-systematic-review-2026, torres-peralta-perceived-learning-engagement-homework-2026, kumar-chatgpt-academic-assignments-2025, zaripova-genai-self-regulation-neuroai-competence-2026, zhi-modeling-measuring-graduate-genai-literacy-2026]
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Niveles educativos** — las bandas que organizan el metadato `level`: **preescolar**, **educación primaria**, **educación media**, **secundaria**, **K-12**, **educación superior**, **grado**, **posgrado**, **aprendizaje de personas adultas**, **educación especial** y formación del [[teacher-role|profesorado]]. La página paraguas no duplica ninguna página de banda concreta: explica qué cambia al pasar de una banda a otra, por qué la ruptura entre escuela y universidad importa más que la asignatura que se enseña, y dónde la evidencia sobre IA es densa y dónde es escasa.

## Preguntas para reflexionar

- Un seminario de posgrado y una clase de matemáticas de segundo grado son ambos «educación», pero una herramienta que ayuda a uno puede perjudicar a la otra. ¿Qué hay en la banda, y no en la asignatura, que cambia cómo se ve un buen uso de la IA?
- Un ensayo con 132 estudiantes de segundo grado encontró que un tutor adaptativo de matemáticas no era mejor que una secuencia fija. ¿Esperaría el mismo resultado nulo con un estudiante universitario, y qué capacidad del estudiantado presupone en silencio la adaptación?
- «K-12» y «educación superior» comprimen cada uno varios entornos distintos en una sola etiqueta. ¿Qué comparaciones ocultan esas etiquetas?
- Si la base de evidencia de una banda es escasa, ¿la respuesta honesta es no decir nada, tomar prestado de una banda adyacente o diseñar un estudio?

## Introducción

El campo de metadatos `level` nombra la banda educativa sobre la que trata una fuente: bandas, no edades: **preescolar**, **educación primaria**, **educación media**, **secundaria**, **K-12**, **educación superior**, **grado**, **posgrado**, **aprendizaje de personas adultas** y **educación especial**. Algunas nombran una etapa de la escolarización, dos nombran las dos mitades muy distintas del estudio universitario, y dos nombran una [[learners|población de aprendientes]] y no una etapa. Una fuente puede llevar varias bandas a la vez. La formación docente no es una banda: es un campo profesional, etiquetado en [[discipline-specific-aied|disciplina]] porque atraviesa los estudios de grado y posgrado (formación inicial) y la educación K-12 y el aprendizaje de personas adultas (formación continua).

Las páginas de banda hacen el trabajo profundo y pertenecen a cualquier lectura del campo. Dentro de los años escolares: [[early-childhood-elementary-ai-education|educación infantil]] (preescolar y los primeros cursos), [[primary-education|educación primaria]] (aproximadamente de 5 a 11 años) y [[secondary-education|educación secundaria]] (educación media y secundaria juntas), con [[k-12|K-12]] reuniendo los hallazgos transversales. Dentro del estudio universitario: [[higher-ed|educación superior]] como paraguas, [[undergraduate-education|educación de grado]] para el trabajo de curso bajo juicio externo, y [[graduate-education|educación de posgrado]] para la supervisión, la formación investigadora y los programas profesionales. Fuera de las dos escaleras: [[adult-learning|aprendizaje de personas adultas]], [[vocational-education|formación profesional]], [[special-education|educación especial]] y [[teacher-education|formación docente]].

## Qué distingue una banda de otra

Las bandas difieren a lo largo de varios ejes a la vez, y la investigación sobre IA suele variar solo uno de ellos.

- **Capacidad de autorregulación.** Dos versiones del mismo tutor de matemáticas de segundo grado —con contenido, interfaz, retroalimentación y pistas habladas idénticos, y que solo diferían en si la selección de tareas seguía una estimación de dominio mediante [[knowledge-tracing|seguimiento bayesiano del conocimiento]]— no produjeron ninguna diferencia en la prueba posterior entre 132 niños y niñas de siete años (F(1, 124) = 0,32, p = 0,574). La primera explicación de los autores es evolutiva: los [[adaptive-learning|sistemas adaptativos]] presuponen aprendientes capaces de implicarse con la retroalimentación, regular su esfuerzo y mantenerse concentrados, y la infancia temprana tiene una [[self-regulated-learning|autorregulación]] limitada ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Quién media la interacción.** En las bandas escolares hay una persona adulta entre quien aprende y la herramienta. Una encuesta a 270 docentes de preescolar encontró que la intención de adopción estaba impulsada por la [[technology-acceptance-model|utilidad percibida]], la facilidad de uso, la [[self-efficacy|autoeficacia]] en IA y la [[anxiety-and-stress|ansiedad ante la IA]], y el estudio excluyó deliberadamente la IA dirigida a la infancia ([[preschool-teachers-ai-behavioral-intention-2026]]).
- **Para qué sirve la evaluación.** La evaluación en secundaria alimenta decisiones con consecuencias externas; la universitaria son trabajos de curso y credenciales; la de posgrado es la formación de un investigador.
- **[[prior-knowledge|Conocimientos previos]].** Los conocimientos previos dominaron el rendimiento en la prueba posterior de ese ensayo (F(1, 124) = 206,99, p < 0,001, η²p = 0,63), así que una etiqueta de banda correlaciona con un nivel de conocimiento, pero no equivale a él.

## Los años escolares y los años universitarios

La división más determinante es la ruptura entre la escuela y la universidad, y las dos etiquetas más comunes la ocultan o la cruzan.

Dentro de los años escolares, el resultado medido cambia bruscamente según la banda. En primaria es el aprendizaje de la asignatura: 97 estudiantes chinos de tercer grado que usaron [[conversational-ai|chatbots de IA generativa]] en [[science-education|indagación científica]] plantearon mejores problemas que un grupo de control con motor de búsqueda (t = 2,47, p = 0,015) ([[dai-chatbots-problem-posing-primary-2026]]). En secundaria a menudo pasa a ser actitud y no logro: una encuesta a 508 estudiantes taiwaneses de secundaria básica encontró que el atractivo experiencial operaba a través del disfrute para moldear la intención de usar [[generative-ai|ChatGPT]] en el aprendizaje de letras de canciones (XM → PEOU β = 0,630; PE → ATU β = 0,369), con un 81,5% en el plan gratuito, un hecho de [[equity-in-ai-education|equidad]] de acceso disfrazado de hallazgo de aceptación tecnológica ([[chatgpt-music-education-junior-high-2026]]). La secundaria también alberga la mayor advertencia de aprendizaje del corpus: en 26.811 estudiantes chinos de 7.º a 12.º grado, las notas de deberes subieron un 18% y el tiempo de finalización cayó un 30%, mientras que las puntuaciones de los [[summative-assessment|exámenes a libro cerrado]] bajaron alrededor de un 20% en seis meses, con la caída concentrada en el ~81% cuyo comportamiento indicaba externalización de los deberes ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).

Los años universitarios se dividen otra vez. El grado es trabajo de curso bajo juicio externo: entre escritores de grado de una universidad R1 que atiende a minorías, la [[ai-literacy|alfabetización en IA]] predecía *qué tipo* de dependencia del [[llm|LLM]] ocupaba un estudiante, y no cuánto lo usaba ([[llm-reliance-types-undergrad]]). El posgrado es formación investigadora, donde el resultado pasa del rendimiento a la formación. Entre 420 investigadores de doctorado y posdoctorado en astronomía, la dependencia de la IA se asoció negativamente con la [[agency|autonomía]] investigadora (r = −0,355) y con la [[self-efficacy|autoeficacia]] (r = −0,321), y la vía indirecta hacia la conducta innovadora pasaba en su mayor parte por la autonomía (−0,115) y no por la autoeficacia (−0,069); el apoyo de la supervisión debilitaba el vínculo negativo con la autonomía (B = 0,077, p = 0,020) ([[ai-mediated-research-agency-formation-2026]]). A un estudiante de doctorado se lo juzga por el juicio que la dependencia de la IA parece erosionar; a un estudiante de grado, no. Meter a ambos bajo «educación superior» oculta eso.

## La alfabetización en IA como secuencia evolutiva

Los cuatro componentes de la alfabetización en IA en primaria ya incluyen lo que los marcos de posgrado tratan como avanzado. En 25 estudios empíricos, [[yim-ai-literacy-primary-schools-review-2025|Yim y Su (2025)]] encontraron alfabetización digital para interactuar con la IA en 19, pensamiento computacional en 10, ética de la IA en 10 y alfabetización crítica de datos en 5. Los agentes inteligentes aparecieron en 15 estudios y la actividad desconectada en 3, de modo que la banda más temprana enseña IA construyendo e inspeccionando un modelo en lugar de usándolo.

En secundaria el constructo se convierte en juicio bajo presión de tiempo. En 33 estudios, todas las herramientas evaluadas quedaron por debajo del 20% en ítems de biología de orden superior, mientras que BingChat y Bard alcanzaron el 92,11% en los básicos ([[perez-montesdeoca-genai-secondary-systematic-review-2026|Pérez-Montesdeoca et al. (2026)]]). Las ganancias aparecieron donde el estudiantado comparaba y rechazaba la salida y se desvanecieron donde la herramienta producía el trabajo. Lo que el estudiantado dice aprender apenas sigue lo que hace con la salida: en un estudio con 1.477 respondientes, el aprendizaje percibido y un índice de implicación correlacionaron en 0,052 ([[torres-peralta-perceived-learning-engagement-homework-2026|Torres-Peralta et al. (2026)]]).

En el nivel de grado la bisagra es la alfabetización y no la ética. Entre 304 estudiantes de grado y posgrado, la alfabetización digital predijo el rendimiento autodeclarado en las tareas (β = 0,393) mientras que la conciencia ética no lo hizo (β = −0,006) ([[kumar-chatgpt-academic-assignments-2025|Kumar et al. (2025)]]). Para el posgrado la brecha es de juicio: el estudiantado de posgrado superó al de grado en d = 1,47 en ética y autonomía académica, y la frecuencia de uso predijo la competencia con β = 0,030 una vez que la ética y la autorregulación entraron en el modelo ([[zaripova-genai-self-regulation-neuroai-competence-2026|Zaripova et al. (2026)]]). El marco de posgrado añade la reflexión metacognitiva, la dimensión que a los cuatro componentes de primaria les falta ([[zhi-modeling-measuring-graduate-genai-literacy-2026|Zhi et al. (2026)]]).

Leído como secuencia, el continuo cambia lo que cada banda debería evaluar y no lo que debería enseñar. El trabajo de primaria pide un artefacto que un niño pueda explicar, el de secundaria una comparación que un estudiante pueda defender, y el de posgrado un recuento de qué afirmaciones son propias del candidato ([[academic-integrity|integridad académica]]). Una herramienta adecuada en un extremo no es evidencia en el otro.

## Dónde se concentra la evidencia y dónde es escasa

La evidencia está distribuida de forma desigual, y el campo de nivel hace visible ese desequilibrio.

**Denso.** La educación superior es la banda más cubierta: las páginas consultadas aquí incluyen un ensayo de plataforma de ocho semanas con 60 estudiantes de ingeniería ([[ai-assisted-seminar-learning-information-literacy-2026]]), una encuesta a 395 gestores educativos ([[ai-adoption-readiness-ukraine-education-managers-2026]]), una metasíntesis de 18 estudios africanos de educación superior ([[data-privacy-ai-african-higher-education-2026]]) y un estudio de formación doctoral con 420 investigadores ([[ai-mediated-research-agency-formation-2026]]). Primaria y secundaria también aportan evidencia de resultados.

**Escasa, y en algunos puntos ausente.** Las páginas consultadas aquí no informan de ningún estudio de resultados en la infancia para la banda de preescolar; la evidencia más cercana es una encuesta sobre intenciones docentes que excluía herramientas dirigidas a la infancia ([[preschool-teachers-ai-behavioral-intention-2026]]). La educación media aparece sobre todo como un diseño *propuesto* y un estudio longitudinal, y no como resultados informados ([[ai-lms-middle-school-longitudinal]]). La evidencia más sólida de la banda de formación profesional son 63 respuestas de [[self-report-measures|autoinforme]] de un solo curso, que sus autores dicen que requieren replicación ([[ai-ive-pbl-vocational-design-creativity-2026]]). La evidencia de posgrado es transversal, y un modelo de vía inversa ajusta algo mejor que el evolutivo, así que la dirección que va de la dependencia a una menor autonomía se infiere y no se confirma ([[ai-mediated-research-agency-formation-2026]]). Nada de lo consultado aquí informa de evidencia de resultados sobre IA para el **aprendizaje de personas adultas** ni para la **educación especial** como bandas; esas tienen su propia cobertura en [[adult-learning|aprendizaje de personas adultas]] y [[special-education|educación especial]], y no generaliza a partir de hallazgos con población escolar para llenar el hueco.

Un patrón se mantiene en todos los niveles examinados: la capa humana absorbe los casos más difíciles. Una persona experta se mantuvo en el punto de decisión de credibilidad de los estudiantes de ingeniería incluso cuando la recomendación algorítmica alcanzó F1 = 0,64 ([[ai-assisted-seminar-learning-information-literacy-2026]]); el apoyo de la supervisión fue la única condición que debilitó los vínculos negativos de la dependencia de la IA en la formación doctoral ([[ai-mediated-research-agency-formation-2026]]); y son los docentes de preescolar, y no los niños, quienes adoptan la tecnología ([[preschool-teachers-ai-behavioral-intention-2026]]).

Los resultados de educación media ya existen: entre 178 estudiantes indonesios de secundaria básica, las tareas de diagnóstico culturalmente integradas predijeron el rendimiento simbólico (β = 0,42) y la implicación (β = 0,37), y los perfiles de diagnóstico con IA coincidieron con los juicios de expertos (ICC = 0,81) ([[culturally-embedded-ai-diagnostic-assessment-2026|Anggara et al. (2026)]]).

## Qué cambia de verdad un diseño adecuado al nivel

- **Autonomía y apoyo.** Con aprendientes jóvenes, adapte el *nivel de apoyo* —más [[scaffolding|andamiaje]], orientación o pistas— y no la dificultad de la tarea; la adaptación de la dificultad no aportó nada en primaria temprana, y la exigencia de dominar antes de avanzar puede haber frenado a los estudiantes que usaban el sistema adaptativo ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **Nivel de lectura.** Un chatbot adaptado por edad usó variables de prompt para las edades de 7 a 9, 9 a 11 y 12 a 14 años, y 63 niños y niñas de primero a octavo grado lo trataron como una fuente de información creíble ([[vahedian-children-attitudes-ai-chatbot-2026]]).
- **Mediación.** [[parents-and-families|Las familias]] y el profesorado median en los años escolares, y el personal de [[librarians|biblioteca]] y la supervisión en los años universitarios; y la contraparte universitaria es la pericia y no la tutela: la plataforma de ingeniería mantuvo a una persona donde el algoritmo tenía menos confianza ([[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Consecuencias de la evaluación.** El diseño de LMS para educación media regula la IA por actividad, manteniendo pistas acotadas en el modo de práctica y desactivando la IA en los ítems calificados ([[ai-lms-middle-school-longitudinal]]), una precaución que la evidencia de la penalización en el aprendizaje en secundaria vuelve concreta ([[stromberg-generative-ai-learning-penalty-secondary-2026]]).
- **Deberes de protección de datos de menores.** Las obligaciones escalan con la edad: para los menores, las propuestas son estructurales (minimización de datos, restricciones de respuesta adecuadas a la edad, control de acceso basado en roles, registros auditables) ([[ai-lms-middle-school-longitudinal]]), y no puede darse por supuesta la conciencia de los niños sobre seguridad digital, ya que algunos estaban dispuestos a confiar secretos a un chatbot ([[vahedian-children-attitudes-ai-chatbot-2026]]). Para las personas adultas, los deberes se desplazan hacia el consentimiento, el control y el flujo transfronterizo de datos ([[data-privacy-ai-african-higher-education-2026]]).
- **Gobernanza que encaja con la banda.** La preparación es específica de cada capa: 395 gestores ucranianos puntuaron su preparación personal 0,68 puntos por encima de la del sistema (d = 0,73), citaron la ausencia de regulación como el factor más frecuente (58,5%) y valoraron la [[personalized-learning|personalización]] —el beneficio que más prometen los proveedores— como la aplicación menos puntuada de todas (29,4%) ([[ai-adoption-readiness-ukraine-education-managers-2026]]).

## Implicaciones para la IA en la educación

- **Lea el campo de nivel antes que el campo de tema.** Un hallazgo de una banda es una hipótesis para otra, no un resultado transferible.
- **Para las bandas más jóvenes, adapte el apoyo y no la dificultad de la tarea** ([[adaptive-intelligent-tutoring-primary-mathematics-2026]]).
- **No traslade una herramienta a través de la ruptura escuela/universidad sin volver a especificar quién tiene la autoridad epistémica.** La dependencia que reduce la autonomía en la formación doctoral es un riesgo para la formación investigadora ([[ai-mediated-research-agency-formation-2026]]).
- **Regule la IA por actividad y no por entusiasmo**, y escale los deberes de privacidad con la edad ([[ai-lms-middle-school-longitudinal]], [[data-privacy-ai-african-higher-education-2026]]).
- **Diseñe para la persona adulta que media en esa banda** —madre, padre, docente, bibliotecario o supervisor— y mida su preparación por separado de la de la institución ([[ai-adoption-readiness-ukraine-education-managers-2026]], [[ai-assisted-seminar-learning-information-literacy-2026]]).
- **Diga con claridad cuándo una banda no tiene evidencia**, y **no confunda la intención con el logro**: varios estudios específicos de nivel informan de actitudes o resultados de [[self-report-measures|autoinforme]] y no de aprendizaje.

## Concepciones erróneas

**«Una etiqueta de banda le dice lo que puede hacer un estudiante.»** La banda y el nivel de conocimiento se correlacionan sin ser iguales. En el ensayo de tutoría de segundo grado, los [[prior-knowledge|conocimientos previos]] dominaron el rendimiento en la prueba posterior (**F(1, 124) = 206,99, p < 0,001, η²p = 0,63**), un efecto grande que convierte la etiqueta de nivel educativo en un predictor débil frente a los conocimientos previos reales del estudiante. Diseñar para la banda e ignorar la dispersión dentro de ella es diseñar para la media de una distribución amplia.

**«La asignatura que se enseña importa más que el nivel educativo.»** La ruptura entre escuela y universidad importa más. Lo que cambia al cruzar esa frontera no es el contenido, sino la capacidad de autorregulación, la naturaleza del contrato de evaluación y quién es responsable del aprendizaje; por eso una herramienta que ayuda a un seminario de posgrado puede perjudicar una clase de segundo grado incluso con contenidos comparables.

**«Un [[intelligent-tutoring|tutor adaptativo]] ayuda por igual a todos los niveles.»** La comparación que aísla la variable es ilustrativa: dos versiones del mismo tutor de matemáticas de segundo grado —contenido, interfaz, retroalimentación y pistas habladas idénticos— que solo diferían en si la selección de tareas seguía un modelo bayesiano de [[knowledge-tracing|seguimiento del conocimiento]]. La selección adaptativa de tareas es una intervención sensible al nivel, y su beneficio depende de si quienes aprenden en ese nivel pueden actuar sobre la adaptación.

**«La evidencia concentrada en educación superior se generaliza hacia abajo.»** No lo hace, y la distribución de la literatura es una advertencia y no una comodidad. Dónde la evidencia es densa y dónde escasa es una propiedad de la economía de la investigación, no de dónde se usa más la IA, así que una afirmación sobre K-12 extraída de muestras universitarias es una extrapolación a través de la frontera que más importa.
