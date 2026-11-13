---
title: Investigación longitudinal
created: "2026-11-12T22:30:00-05:00"
updated: "2026-11-13T14:20:00-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [longitudinal-research, research-methods-aied, quantitative-research]
contributors: [editor]
translation_of: concepts/longitudinal-research
source_updated: "2026-11-13T00:25:09-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Investigación longitudinal** — diseños que miden las mismas unidades repetidamente a lo largo del tiempo, de modo que el cambio *dentro* de una persona, un aula o una institución puede separarse de las diferencias *entre* ellas. En la [[ai-education|educación con IA]], el trabajo longitudinal es lo que convierte las afirmaciones sobre adopción, crecimiento de habilidades e implicación de instantáneas en trayectorias: cuatro semestres de encuestas a la formación docente que muestran un uso creciente de la [[generative-ai|IA generativa]], un semestre de datos de autorregulación que muestra el conocimiento [[metacognition|metacognitivo]] cayendo bajo la presión de la evaluación, cinco oleadas de datos de implicación cuyas pendientes se mueven juntas. Su valor no es que mida más, sino que puede plantear una pregunta que una sola medición no puede responder: qué está cambiando, para quién y a qué ritmo.

## Preguntas para reflexionar

- Una encuesta transversal encuentra que el estudiantado que usa más IA informa de una mayor autoeficacia. ¿Qué otra cosa podría explicarlo, y qué diseño separaría las explicaciones?
- «Longitudinal» se usa a menudo para cualquier estudio con dos puntos temporales. ¿Qué establece un par pre/post, y qué deja abierto?
- El modelo de panel de Xu separa un rasgo estable de la fluctuación específica de la ocasión. ¿Por qué importa eso para afirmar que la alfabetización en retroalimentación causa implicación?
- Las herramientas de IA cambian durante un estudio: los modelos se actualizan, aparecen funciones, las licencias caducan. ¿Qué le hace eso a un diseño que supone un tratamiento constante?
- La atrición no es aleatoria. ¿Cómo debería informar un estudio de un semestre en el que abandonó una quinta parte de la muestra?
- Un semestre es largo para un curso y corto para un desarrollo. ¿Qué afirmaciones sobre la IA necesitan años, y cuáles se responden en semanas?

## Introducción

La investigación longitudinal es una familia de diseños y no un método único: encuestas repetidas a la misma cohorte, estudios de panel, modelos de curva de crecimiento, comparaciones de cohortes, muestreo de experiencias y análisis de datos de registro que se acumulan a lo largo de un semestre. Lo que las une es la unidad de análisis —la misma persona, aula o institución observada más de una vez— y la ganancia inferencial que se sigue de ello.

Esa ganancia se exagera a menudo. Un centenar largo de artículos se describen como longitudinales, y van de análisis de tendencia de cuatro semestres a una única comparación pre/post. La etiqueta se ha convertido en una señal de calidad, lo que hace que valga la pena precisar qué respalda cada diseño. Una encuesta repetida puede mostrar que una distribución se movió. Un modelo de panel puede mostrar que una persona se movió respecto a su propia línea base. Un modelo de crecimiento puede mostrar que la tasa de movimiento difiere entre personas y que dos procesos se mueven juntos. Solo algunos diseños con una medida de resultado en ambos extremos pueden empezar a abordar si la herramienta causó el cambio.

Los estudios más sólidos establecen menos de lo que sugieren sus etiquetas, y las familias de diseño difieren en lo que cada una puede respaldar.

## Cambio intrapersonal frente a diferencia interpersonal

La distinción que hace más trabajo es la que hay entre un rasgo estable y un estado específico de la ocasión. Xu (2026) midió la [[feedback-literacy|alfabetización en retroalimentación de IA]] y la [[student-engagement|implicación agéntica]] en 480 estudiantes universitarios chinos tres veces con intervalos de seis semanas, y usó un modelo de panel cruzado con intercepto aleatorio para separar los dos niveles. La correlación del rasgo estable fue r = 0,315 (p < 0,001); las rutas cruzadas intrapersonales contaron otra historia sobre qué constructo se movió primero. Sin esa separación, una correlación transversal entre ambos se habría presentado como evidencia de una relación, y habría sido ambigua: las personas que en general están más alfabetizadas en retroalimentación pueden también estar en general más implicadas, sin que ninguna de las dos cosas cambie a la otra.

Esta es la contribución central del diseño. La mayoría de las preguntas de esta literatura —si la retroalimentación de IA construye implicación, si la dependencia erosiona la autorregulación, si el uso predice el bienestar— son preguntas sobre el cambio, y una sola medición no puede responder a una pregunta sobre el cambio por grande que sea la muestra.

## Trayectorias y qué covaría con ellas

El modelado de crecimiento plantea una pregunta distinta: no si una persona difiere de su nivel habitual, sino qué forma toma el cambio y si dos procesos de cambio están vinculados. Zhang y Tang encuestaron a 850 estudiantes universitarios de música en cuatro universidades chinas cinco veces a lo largo de un semestre, midiendo la implicación en el aula, el flow y la inteligencia emocional musical autopercibida en clases asistidas por IA. Las tres subieron a lo largo de las cinco oleadas, y las pendientes se movieron juntas: la pendiente de la implicación correlacionó 0,39 con la del flow y 0,22 con la de la inteligencia emocional.

El hallazgo es correlacional respecto a las pendientes y no causal respecto a las herramientas, y los autores lo presentan así. Su valor es que sitúa el cambio en una tasa y no en un nivel, que es el tipo de afirmación sobre la que puede actuar quien diseña un currículo: si la implicación sube más rápido donde el flow sube más rápido, la pregunta de diseño pasa a ser qué produce el flow en primer lugar.

## Tendencias de adopción y actitud

Una tercera familia sigue a una población y no a un proceso de crecimiento. Parker, Loper, Carter, Hayes y Karakas analizaron cuatro semestres de datos de encuesta de más de 300 estudiantes de un programa de [[teacher-education|formación docente]] del Medio Oeste estadounidense, siguiendo el uso de IA generativa y las percepciones éticas tras el lanzamiento de ChatGPT. El uso creció sustancialmente: la preparación de evaluaciones del 57% al 83%, el estudio del 44% al 76%, mientras las posturas éticas se volvieron más inciertas en lugar de asentarse, y las percepciones difirieron por subgrupo.

Este es un diseño transversal repetido: el mismo programa, no necesariamente los mismos estudiantes. Establece una tendencia en una población, que es exactamente lo que necesita una pregunta de política, y no puede establecer el cambio individual. La distinción importa cuando la tendencia se lee como desarrollo: un aumento del uso declarado entre semestres puede reflejar cohortes nuevas que entran con normas distintas tanto como estudiantes que cambian.

## Estado, rasgo y la forma de un semestre

El estudio de un semestre de Song y colaboradores con 75 estudiantes universitarios de primer año muestra por qué vale la pena plantear la pregunta intrapersonal sobre constructos que suelen tratarse como aptitudes. Las líneas base individuales de [[self-regulated-learning|aprendizaje autorregulado]] del estudiantado eran estables, pero su conocimiento metacognitivo y su [[well-being|bienestar]] disminuyeron sistemáticamente a lo largo del semestre, siguiendo demandas del currículo como los plazos de las evaluaciones principales. Una prueba de concepto mostró que se podía dar a un [[llm|LLM]] contexto por estudiante para apoyar la regulación en el momento en que se necesitaba.

La lectura práctica es que un rasgo medido una sola vez habría ocultado el descenso. La lectura metodológica es que «estable» e «invariable» son afirmaciones distintas, y solo la medición repetida las distingue.

## Las familias de diseño y lo que cuesta cada una

- **Encuesta repetida a una cohorte.** Los mismos estudiantes, varias oleadas. Establece el cambio individual; es vulnerable a la atrición y a los efectos de la prueba.
- **Corte transversal repetido (tendencia).** La misma población, una muestra nueva en cada oleada. Establece el cambio poblacional; no puede seguir a individuos.
- **Modelo de panel con efectos rezagados.** Oleadas espaciadas para modelar el orden, con rasgo y estado separados. Establece la precedencia temporal; necesita un espaciado y un tamaño de muestra adecuados.
- **Modelo de curva de crecimiento.** Tres o más oleadas que modelan el intercepto y la pendiente. Establece la forma y la tasa del cambio, y la covariación entre procesos.
- **Cuasiexperimento longitudinal.** Condiciones comparadas a través de medidas repetidas, como en el estudio de nueve semanas de Melanou y colaboradores con 87 estudiantes en tres condiciones de IA, donde el conocimiento subió en todos los grupos (F(1, 50) = 29,8) y el rendimiento previo moderó el beneficio. Establece si una condición cambia una trayectoria; sigue sin ser asignación aleatoria.
- **Muestreo de experiencias y paneles de registros.** Medidas frecuentes in situ o datos de rastro. Establece dinámicas de grano fino; es débil en constructos que necesitan reflexión.

## Amenazas que muerden en los estudios de IA

Cuatro problemas se repiten, y los dos últimos son específicos de este campo.

**Atrición.** El estudiantado que se desvincula abandona el estudio, así que las oleadas posteriores sobrerrepresentan a quienes están implicados. Una trayectoria estimada a partir de quienes sobreviven puede tener pendiente ascendente mientras la cohorte en su conjunto no la tiene.

**Efectos de la prueba y de la instrumentación.** La exposición repetida al mismo instrumento cambia las respuestas, sobre todo en las medidas de autoinforme sobre actitudes y uso.

**Deriva de la herramienta.** Una herramienta de IA no es un tratamiento fijo. Los modelos se actualizan, las interfaces cambian, las licencias institucionales se retiran a mitad de semestre. Un estudio que abarca un semestre mide un objeto en movimiento, y pocos artículos informan de cambios de versión.

**Desempeño asistido confundido con aprendizaje.** Una ganancia medida con la herramienta disponible puede mostrar lo que quien aprende puede hacer con apoyo, no lo que ha interiorizado. La distinción es la misma que separa el [[scaffolding|andamiaje]] del desarrollo, y los diseños longitudinales no la resuelven a menos que las oleadas posteriores incluyan una medida sin asistencia.

## Implicaciones para la práctica

El profesorado puede dejar de leer una única encuesta de fin de semestre como prueba de que un cambio funcionó. Una distribución que se movió entre dos semestres puede reflejar una cohorte nueva, un régimen de evaluación nuevo o un instrumento que perdió su novedad. Comparar al mismo estudiantado con sus propias puntuaciones anteriores responde a una pregunta más estrecha y más útil.

Quienes dirigen programas pueden planificar la evaluación por oleadas. Tres o más mediciones a lo largo de un programa permiten a un departamento estimar una pendiente en lugar de comparar dos puntos, e informar de la atrición en cada oleada evita que un promedio creciente oculte al estudiantado que se marchó.

Quienes desarrollan al profesorado pueden evaluar el desarrollo profesional del mismo modo, con medidas repetidas y al menos una tarea realizada sin la herramienta. Una serie de talleres que eleva la confianza y el uso mientras deja plano el desempeño sin ayuda ha mostrado algo sobre las actitudes, y la distinción merece comunicarse a quienes financian la siguiente serie.

La administración puede registrar qué cambió durante un estudio o un piloto: versiones del modelo, cambios de licencia, actualizaciones de la interfaz. Un semestre es tiempo suficiente para que la herramienta se convierta en otro tratamiento, y dejar constancia es barato comparado con explicar un salto que nadie entiende.

Quien investiga puede mantener dos afirmaciones separadas en su propia escritura. El orden temporal respalda la precedencia, no la causalidad, y un par pre/post es un diseño de medidas repetidas y no una trayectoria.

## Lo que los diseños longitudinales no pueden hacer

No establecen causalidad por sí solos. El orden temporal es necesario pero no suficiente: una variable no medida que cambia con el mismo calendario —un nuevo régimen de evaluación, una reforma curricular, un efecto de cohorte— puede producir el mismo patrón. Son costosos en tiempo de los participantes, lo que limita los tamaños de muestra y a menudo obliga al autoinforme. Y un semestre es corto: las preguntas evolutivas, en el sentido en que [[developmental-psychology|la psicología del desarrollo]] usa el término, necesitan años, y casi nada en esta literatura los abarca.

## Cómo aparece en la investigación

Los ejemplos más sólidos se concentran en la educación superior, donde un semestre ofrece un marco natural: el panel de tres oleadas de Xu, el modelo de crecimiento de cinco oleadas de Zhang y Tang, el semestre de datos de autorregulación de Song, el cuasiexperimento de nueve semanas de Melanou. La formación docente aporta el estudio de tendencia. El trabajo longitudinal a nivel escolar es más escaso, y el artículo sobre el LMS de secundaria que lleva «longitudinal» en su slug es una propuesta de diseño y no un estudio longitudinal: un recordatorio de que la etiqueta en un título no es el diseño.

## Relación con otros métodos

Los diseños longitudinales se sitúan dentro de la [[quantitative-research|investigación cuantitativa]] y comparten sus problemas de medición. A menudo se combinan con [[mixed-methods-research|métodos mixtos]] cuando la pregunta es por qué se torció una trayectoria. Difieren de los [[rct|experimentos aleatorizados]] en que observan la variación que ocurre naturalmente a lo largo del tiempo en lugar de asignarla, y de la [[design-based-research|investigación basada en el diseño]] en que no iteran sobre una intervención: la DBR explica cómo hacer que algo funcione en contexto, y el trabajo longitudinal explica qué cambió y cuándo. El [[learning-analytics|análisis del aprendizaje]] aporta los datos de rastro que hacen posible un análisis longitudinal de grano fino sin encuestas repetidas.

## Concepciones erróneas

- **«Dos puntos temporales convierten un estudio en longitudinal.»** Un par pre/post es un diseño de medidas repetidas; no puede estimar una trayectoria, y normalmente no puede separar el cambio de los efectos de la prueba.
- **«Longitudinal significa causal.»** El orden en el tiempo es necesario pero no suficiente; los efectos de cohorte, las reformas simultáneas y las actualizaciones de herramientas producen cambio sin que el tratamiento lo cause.
- **«Una muestra grande arregla una ventana corta.»** El tamaño de la muestra aborda la precisión, no el tiempo que necesita un proceso evolutivo o institucional para desplegarse.
- **«El mismo programa significa las mismas personas.»** Los cortes transversales repetidos siguen a una población, no a individuos; los dos respaldan afirmaciones distintas.
- **«Las tendencias de autoinforme son tendencias de actitud.»** El uso declarado y la postura declarada cambian con las normas y con el instrumento, además de con la conducta.

## Conceptos conectados

- [[research-methods-aied]]
- [[quantitative-research]]
- [[qualitative-research]]
- [[mixed-methods-research]]
- [[rct]]
- [[design-based-research]]
- [[learning-analytics]]
- [[self-report-measures]]
- [[limitations-in-aied-research]]
- [[interpreting-and-applying-aied-research]]
- [[developmental-psychology]]
- [[self-regulated-learning]]
- [[student-engagement]]

## Artículos conectados

- [[ai-feedback-literacy-agentic-engagement-panel-2026]] — Un panel de tres oleadas que separa el rasgo del estado (Xu)
- [[zhang-tang-ai-music-classroom-engagement-longitudinal-2026]] — Modelo de crecimiento de cinco oleadas sobre implicación, flow e inteligencia emocional
- [[longitudinal-ai-usage-ethics-policy-teacher-education-2026]] — Cuatro semestres de uso de IA generativa y percepciones éticas en la formación docente
- [[song-genai-learning-partner-srl-over-time-2026]] — Estudio de autorregulación de un semestre que muestra un descenso bajo la presión de la evaluación
- [[melanou-genai-learning-dynamics-longitudinal-2026]] — Cuasiexperimento longitudinal de nueve semanas en tres condiciones de IA
- [[ai-lms-middle-school-longitudinal]] — Propuesta de LMS integrado con IA para secundaria (diseño, no un estudio longitudinal)
