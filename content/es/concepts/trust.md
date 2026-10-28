---
title: Confianza
created: "2026-09-28T20:10:47-04:00"
updated: "2026-10-28T13:25:03-04:00"
type: concept
foundations: [ai-literacy, critical-thinking, human-ai-collaboration]
technology: [educational-robotics, intelligent-tutoring]
ethics: [trust]
confidence: high
translation_of: concepts/trust
source_updated: "2026-10-28T09:45:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Confianza**: la disposición de estudiantes, educadores e instituciones a apoyarse en una persona o en un sistema de IA para el aprendizaje, el juicio y la toma de decisiones. En la [[ai-education|educación con IA]], la confianza abarca dos ámbitos relacionados pero distintos: la **confianza en la IA** (la seguridad en la competencia, la transparencia, la fiabilidad y la benevolencia de un sistema o agente de IA) y la **confianza interpersonal** (la confianza relacional entre estudiantes y docentes, entre estudiantes y pares, y en el conjunto de la institución). Ambas son de doble filo: la confianza apropiada permite una [[student-engagement|implicación]] productiva, mientras que la confianza excesiva invita a la [[cognitive-offloading|dependencia excesiva]] y la confianza insuficiente bloquea un uso beneficioso. El reto central es la **calibración**: alinear la confianza con la fiabilidad real, pertenezca esa fiabilidad a un modelo o a una persona.

## Preguntas para considerar

- Cuando dice que 'confía' en una herramienta de IA frente a confiar en un docente o en un colega, ¿está describiendo lo mismo? ¿Qué hay de parecido y qué de fundamentalmente distinto entre depositar la confianza en un sistema y depositarla en una persona?
- Existe una 'brecha entre confianza y utilidad' documentada: la competencia aparente de una herramienta suele superar su fiabilidad real. Recuerde una herramienta que parecía impresionante pero le falló, o una que parecía limitada y resultó fiable. ¿Qué moldeó la brecha entre cómo se veía y lo que realmente podía hacer?
- Piense en una IA que siempre está de acuerdo con usted y nunca cuestiona sus ideas. Puede resultar cómoda y digna de confianza, pero ¿es el acuerdo lo mismo que la fiabilidad? ¿A qué podría estar renunciando si la herramienta en la que se apoya nunca le lleva la contraria?
- La página sostiene que la confianza de un docente en la IA moldea cómo los estudiantes confían en esa IA: los dos ámbitos interactúan. En un curso que conoce bien, ¿cómo influiría el entusiasmo o el escepticismo de un docente hacia la IA en que los estudiantes aceptaran o cuestionaran la herramienta?
- Los estudiantes suelen decidir si declaran su uso de IA según su comodidad con el docente más que según la política. Si fuera (o es) estudiante, ¿qué le haría estar dispuesto a ser honesto sobre su uso de la IA, y qué le haría ocultarlo? ¿Qué dice eso sobre cómo se construye realmente la confianza en un aula?
- Un hallazgo: un tutor de IA que advierte 'puedo cometer errores' llevó a los estudiantes a buscar más ayuda, no menos. ¿Qué sugiere eso sobre si reconocer los límites socava o fortalece la confianza que sostiene el aprendizaje real?

## Introducción

La confianza en la IA está moldeada por la competencia percibida, la transparencia, la consistencia y por si el sistema parece alineado con los objetivos del estudiante; está estrechamente ligada a la [[ai-literacy|alfabetización en IA]] (saber en qué confiar), al [[critical-thinking|pensamiento crítico]] (evaluar la producción) y al diseño de una IA responsable. La confianza interpersonal, en cambio, se construye mediante relaciones, la revelación de información, la retroalimentación y el cuidado [[pedagogy|pedagógico]]: las cualidades en las que se apoyan los estudiantes cuando deciden si un docente o una IA es una fuente fiable de orientación. Los dos ámbitos interactúan cada vez más: la IA está entretejida en las relaciones entre docentes y estudiantes, así que cómo confían los estudiantes en su docente moldea cómo confían (o cuestionan) las herramientas de IA que ese docente recomienda.

La confianza es una víctima medida, no solo un principio. En [[gillette-partnership-ethics-genai-higher-education-2026|Gillette et al. (2026)]], los estudiantes dijeron confiar menos en sus compañeros tras descubrir un uso no declarado de IA generativa en un trabajo en grupo, y lo calificaron de "perjudicial para la confianza y la ética de la academia", mientras que unos pocos sospechaban que los docentes usaban IA generativa y se lo ocultaban a los estudiantes.

## La confianza en los sistemas de IA

La [[research-methods-aied|investigación]] de esta base de conocimiento examina cuándo confían los estudiantes de forma apropiada en la orientación generada por IA. Las [[ai-fallibility-warning-help-seeking|advertencias sobre la falibilidad de la IA]] pueden mejorar la calibración: una intervención sencilla de transparencia que decía a los estudiantes que un tutor de IA podía equivocarse aumentó la [[help-seeking|búsqueda de ayuda]] en un sistema de tutoría inteligente de matemáticas, lo que sugiere que reconocer los límites con honestidad fomenta una dependencia apropiada en lugar de socavarla. El [[calibrating-trustworthiness-llm-education-2026|codiseño de métricas de fiabilidad]] con ingenieros de aprendizaje muestra que la confianza se construye mejor sobre criterios observables y acordados que sobre una capacidad supuesta. Los estudios de [[fouad-bentley-trust-utility-gap-physics-2026|física]] y de [[t2i-competence-paradox-2026|generación de imágenes]] revelan una *brecha entre confianza y utilidad* persistente: los usuarios deben sopesar la competencia aparente de una herramienta frente a su fiabilidad real en una tarea. Entre los usuarios más jóvenes, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed y Martin (2025)]] encontraron que el 52% de los niños (de 6 a 14 años) confiaba en general en un chatbot adaptado a su edad y el 35% confiaba en él como en un docente o un amigo, y cerca de un tercio estaba dispuesto a confiarle confidencias; los niños también ponían a prueba su credibilidad con preguntas de respuesta conocida, y la confianza no mostró diferencias estadísticamente significativas por curso, lo que ilustra cómo la confianza temprana puede formarse antes de la evaluación crítica.

La transparencia sobre *qué es un sistema*, y no solo sobre lo que puede hacer, también moldea la calibración: el prototipo de acompañamiento Amico hacía explícitos su identidad y sus límites, y su piloto entre Italia y China encontró que los estudiantes lo reconocían como una herramienta de apoyo acotada y no como un tutor autónomo o un sustituto relacional, evitando una confianza excesiva de tipo antropomórfico ([[ai-pedagogical-accompaniment-amico|Benedetti (2026)]]).

En las instituciones de educación superior, la palanca puede ser la utilidad más que las reglas: una encuesta a 2.121 estudiantes, profesorado y personal de una universidad encontró que la utilidad percibida era el correlato más fuerte de la confianza en la IA (β = 0,402), mientras que la claridad percibida de las políticas era positiva pero más débil (β = 0,223) ([[ai-adaptation-gap-higher-education-2026|Braun y Khafizov, 2026]]).
**La desconfianza en la exactitud puede coexistir con la confianza en el manejo de la herramienta.** En una encuesta a 8.021 estudiantes de cuatro universidades australianas, el 51% desconfiaba de la exactitud factual de la IA generativa mientras que el 76% se sentía capaz de obtener los resultados que quería, y el uso lo impulsaba la utilidad más que la confianza o el cumplimiento de las normas ([[genai-use-usefulness-student-experience-australia-2026|Chung et al., 2026]]).

La [[ai-overreliance-complex-adaptive-system-2026|modelización de la dependencia excesiva de la IA como sistema adaptativo complejo]] reformula la confianza como un proceso a nivel de población: que las personas confíen en un asistente cuando acierta y lo verifiquen cuando se equivoca depende de dinámicas sociales y bucles de retroalimentación, no solo del juicio individual. La adulación amenaza la calibración desde la dirección opuesta: [[ai-sycophancy|una IA que siempre da la razón]] puede parecer fiable precisamente porque nunca cuestiona al usuario, lo que invita a una aceptación acrítica ([[contextual-sycophancy-ai-literacy|adulación contextual]] y [[sycophantic-ai-social-interaction-2026|IA aduladora en la interacción social]]). En contextos [[embodied-learning|corporizados]] como la [[educational-robotics|robótica educativa]], la confianza está moldeada más por lo que hace el robot que por su aspecto ([[task-context-trust-educational-hri-2026|contexto de la tarea y confianza en la interacción humano-robot educativa]]), y la [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|identidad del avatar]] moldea la confianza epistémica que los estudiantes depositan en el contenido de IA. La confianza en las herramientas de [[learning-analytics|analítica]] también depende del contexto. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain et al. (2026)]] encontraron que las preocupaciones y las barreras de adopción del profesorado divergían marcadamente según el contexto de aprendizaje: el profesorado de aula invertida (universidad) se preocupaba sobre todo por la anonimización de los datos y por la posibilidad de que los estudiantes se excluyeran, mientras que el de escritura reflexiva (formación profesional) temía el mal uso de la herramienta por parte de otros educadores e insistía en la necesidad de contextualizar los datos, aunque ambos grupos informaron de una [[self-efficacy|autoeficacia]] y unos beneficios percibidos similares en una encuesta sobre confianza en la IA. El hallazgo de que la confianza en la herramienta se desacopla de la confianza en su gobernanza de datos y en su uso social subraya que construir una confianza apropiada en la analítica exige atender a preocupaciones específicas de cada contexto, y no solo a la competencia aparente del sistema.

Cuán explicable es un sistema, y en qué términos, también moldea si el profesorado confía en sus recomendaciones. En un experimento intra-sujeto con 41 docentes de [[chemistry-education|química]] en activo que usaban la herramienta de recomendación de agrupamientos [[xai-teachers-trust-edtech-recommendations-2026|GrouPer]], [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor et al. (2025)]] encontraron que la [[explainable-ai|IA explicable]] construye confianza de forma indirecta al aumentar la *comprensibilidad* del desempeño del sistema, y que las explicaciones **guiadas por el dominio**, formuladas en lenguaje [[curriculum-design|curricular]] y pedagógico, fomentaban una comprensibilidad y una confianza aprendida significativamente mayores que las explicaciones puramente **guiadas por los datos** (importancia de las características). Cabe destacar que la comprensibilidad por sí sola resultaba insuficiente para algunos docentes, que decían necesitar experiencia real en el aula con la herramienta antes de apoyarse plenamente en ella, lo que refuerza que la confianza en la IA es dinámica y se valida en un uso [[situated-learning|situado]], y no se concede con la explicación.

**La percepción del riesgo y la confianza no son opuestos.** Un estudio de percepción con 130 estudiantes sobre IA generativa [[agentic-ai|agéntica]] en [[higher-ed|educación superior]] encontró un riesgo percibido moderadamente elevado (M = 3,33, DE 0,89) junto con una confianza y una intención de adopción más favorables (M = 3,62, DE 0,81), y, en contra de una expectativa simple de disuasión, una asociación *positiva* entre el riesgo percibido y la intención de seguir usando (ρ de Spearman = 0,317, p < 0,001) ([[ilieva-agentic-genai-higher-education-2026|Ilieva et al. 2026]]). Los autores lo interpretan como una adopción informada y no como indiferencia: los usuarios implicados o experimentados reconocen tanto el valor como los límites de la tecnología, y solo el 45,4% dijo confiar en los agentes bajo la guía de un docente. Para la [[trust-calibration|calibración de la confianza]], la implicación es que la conciencia del riesgo no es la ausencia de confianza, puede ser un componente de ella, mientras que el diseño transversal deja indistinguibles la conciencia, la exposición y la autoselección.


La confianza en la IA se comporta como una vía que va de la valoración a la dependencia, y no como una actitud única: el empoderamiento percibido y la amenaza percibida de la IA eran casi independientes (r = 0,030) pero movían la confianza en direcciones opuestas (β = 0,576 y β = −0,328), y la confianza mantenía asociaciones indirectas significativas con la dependencia de la IA generativa en ambas direcciones ([[ai-empowerment-threat-genai-dependence-2026|Zhu et al. (2026)]]).

Un modelo estructural somete ese papel de puente a una prueba empírica. En la encuesta de [[trust-calibration-genai-collaborative-regulation-2026|Bu y Li (2026)]] a 642 estudiantes universitarios, el apoyo contextual predecía la calibración de la confianza (β = 0,56), la calibración de la confianza predecía la [[collaborative-learning|regulación]] [[regulation|colaborativa]] (β = 0,49) y las ganancias percibidas de [[transfer-of-learning|transferencia]] (β = 0,22), y la vía directa del apoyo contextual a las ganancias no era significativa.

[[student-perspectives-ai-writing-grading-2026|AlGhamdi (2026)]] respalda una explicación **específica de la función y no global** de la confianza en los algoritmos: ni la aversión a los algoritmos ni la apreciación de los algoritmos describían a estos 13 estudiantes, que confiaban a la vez en ChatGPT para la retroalimentación superficial y desconfiaban de él como calificador. Su confianza dependía de la supervisión del docente, y su escepticismo provenía de los límites contextuales de la IA (leer mal la letra manuscrita escaneada, "escribió mal mi apellido y cree que cometí errores de ortografía cuando no los cometí", no conocer el sistema de calificación del docente y una positividad crónica) y no de tecnofobia, lo que sugiere que las medidas de confianza deberían descomponerse según la función que cumple la IA y lo que está en juego.


Las tres dimensiones de la credibilidad de la fuente pueden disociarse: diecisiete estudiantes de grado de inglés como lengua extranjera concedieron al asistente de escritura una amplia experiencia, dudaron de su fiabilidad sobre todo por lo que la plataforma retenía y valoraron su benevolencia como lo más bajo; el techo de su dependencia estaba en el cuidado y no en la competencia ([[bounded-reliance-ai-writing-feedback-2026|Serpil y Mor, 2026]]).

Las señales de credibilidad pueden aumentar la dependencia de respuestas erróneas: añadir citas y señales de autoridad a una interfaz de debate elevó el abandono de un juicio correcto en favor de la posición de la IA del 15,0% al 31,8%, mientras que ocultar una posición recomendada redujo ese cambio al 5,7-8,2% ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

La confianza en la IA tampoco sigue la adopción nacional: los rumanos, con un 17,8% de uso de IA generativa frente al 48,4% de Dinamarca, valoraron su confianza en la IA ligeramente más alto (4,1 frente a 3,8 en una escala de siete puntos), mientras que la confianza institucional se separó 28 frente a 45 puntos en la dirección contraria ([[lucau-uneven-use-similar-trust-genai-2026|Lucau, Voicu y Christensen (2026)]]).

## La confianza en la IA sigue el estado psicológico, no la categoría demográfica

[[trust-in-ai-psychological-profiles-ml-2026|Kumar et al. (2026)]] agruparon a 107 estudiantes de una HBCU pública según la resiliencia, el estrés percibido y la confianza en la IA, y encontraron tres perfiles en los que **la confianza en la IA se disociaba de la confianza en uno mismo**: un grupo de alta resiliencia y bajo estrés con una confianza favorable en la IA, un grupo con estrés moderado que presentaba la confianza en la IA *más alta* de los tres pese a la tensión, y un grupo psicológicamente resiliente que era casi tan resiliente como los adoptantes pero marcadamente menor en confianza en la IA. El estrés y la confianza en la IA separaban los grupos con más fuerza (eta cuadrado parcial 0,528 y 0,521 frente a 0,315 de la resiliencia), y el género fue la única variable demográfica asociada significativamente a la pertenencia, mientras que la afiliación a [[stem-education|STEM]], el nivel académico, la situación laboral y el grupo de edad no fueron significativos. Dos implicaciones importan para esta página: primero, una baja confianza en la IA no es un indicador indirecto de baja seguridad en uno mismo ni de poca familiaridad técnica, ya que los escépticos eran el grupo más resiliente y con más presencia de STEM, lo que los autores leen como escepticismo calibrado y no como resistencia; segundo, como los grupos solo estaban débilmente separados (silueta 0,288, con el índice Calinski-Harabasz prefiriendo dos grupos), deben tratarse como perfiles solapados y no como tipos de estudiante distintos. Los hallazgos proceden de una sola institución y de una encuesta transversal de [[self-report-measures|autoinforme]], así que establecen que la confianza varía con el estado psicológico, no por qué.

## La confianza interpersonal en la educación

La confianza también es fundamentalmente relacional. La brecha de confianza en el aula está documentada en [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai|las opiniones de docentes y estudiantes sobre el control y la agencia en la IA de K-12]]: los estudiantes quieren más [[agency|autonomía]] y flexibilidad, mientras que el profesorado prioriza la supervisión y el monitoreo, un desajuste que ambas partes deben gestionar para que la adopción de la IA tenga éxito. [[qu-wang-disclose-or-not-genai-2026|Por qué los estudiantes declaran u ocultan su uso de IA]] muestra que la declaración está impulsada menos por la política que por factores relacionales: las normas percibidas de los pares y la **comodidad con los docentes** son los predictores más fuertes, lo que apunta a una baja confianza interpretativa en entornos [[governance|institucionales]]. [[vetter-hidden-cost-disclosure-genai-2026|Los costos ocultos de la declaración]] añaden matices sobre cuándo la honestidad tiene un costo social.

Una respuesta que prioriza la detección funciona al revés: los detectores poco fiables que señalan de forma desproporcionada a hablantes no nativos estancan los casos de mala conducta por falta de pruebas, produciendo una "sospecha sin recurso", mientras que conversaciones de verificación de cinco a diez minutos anunciadas como pedagogía y no como vigilancia restauraron la autoridad del profesorado y atrajeron una declaración del uso de IA más abierta ([[best-response-student-ai-dialog-2026|Mandernach, 2026]]).

Apoyarse en detectores y en la vigilancia, sostienen [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]], fomenta un clima de sospecha que erosiona la confianza de los estudiantes en la evaluación y en la institución, lo contrario de la confianza que los procesos de integridad pretenden proteger.

La retroalimentación es un sitio clave de la confianza interpersonal. [[genai-teacher-feedback-comparison|Las percepciones de los estudiantes sobre la retroalimentación de la IA generativa frente a la del docente]] encuentran que ambas sirven a necesidades distintas, complementarias pero no intercambiables, y que los estudiantes confían en la retroalimentación del docente para el juicio relacional y personalizado y en la [[generative-ai|IA generativa]] para la rapidez y la [[accessibility|accesibilidad]]. [[care-full-feedback-genai|Una explicación "llena de cuidado" de la retroalimentación]] sostiene que la retroalimentación fiable es una práctica [[ethics|ética]] y relacional: construye relaciones educativas y se respeta como un oficio profesional, valores que una IA no puede replicar sin más. Por eso la confianza entre docente y estudiante, construida sobre el cuidado y el juicio profesional, sigue siendo central incluso cuando la IA entra en el circuito de retroalimentación.


La confianza entre pares circula por un canal distinto: entre 406 estudiantes universitarios que valoraban a un compañero recordado, el uso de IA generativa de ese compañero se asociaba con una menor confianza interpersonal, mediada por la calidez y la competencia percibidas, y la asociación negativa solo se mantenía cuando la [[ai-literacy|alfabetización en IA]] percibida era baja; no era significativa cuando era alta ([[observer-perceptions-genai-interpersonal-trust-2026|Zhang et al. (2026)]]).

## La calibración y los dos ámbitos juntos

El reto unificador es la **calibración**: ajustar la confianza a la fiabilidad real, sea la parte depositaria de la confianza un modelo o una persona. La [[trust-calibration|calibración de la confianza]] es la capacidad [[metacognition|metacognitiva]] de saber cuándo confiar y cuándo cuestionar. Los estudios sobre la [[feedback|retroalimentación]] de la IA y la [[intelligent-tutoring|tutoría inteligente]] examinan cuándo se apoyan los estudiantes de forma apropiada en la orientación de la IA y cuándo la cuestionan, mientras que la literatura interpersonal muestra que la confianza de los estudiantes en un docente depende de una confianza relacional construida con el tiempo. A medida que la IA se integra en la [[teacher-role|enseñanza]], estos ámbitos convergen: un docente que explica con transparencia qué puede y qué no puede hacer una herramienta de IA, y que demuestra fiabilidad en su propio juicio, construye el tipo de confianza que se traslada a las herramientas que recomienda. Construir una confianza apropiada, tanto en la IA como entre las personas, es un objetivo central del diseño responsable de IA en educación.

La calibración también se pone a prueba por los incentivos del propio sistema en el que se confía. Cuando el personal escéptico ante la adopción de la IA consulta a la [[conversational-ai|IA conversacional]], construida por organizaciones con un interés comercial en esa adopción, existe el riesgo de que el sistema esté predispuesto a fomentarla. Una auditoría de diez modelos frontera encontró que la mayoría reconocía las preocupaciones de un miembro del personal de una escuela [[k-12|K-12]] rural (la amenaza al empleo, el sentirse "no es para gente como yo") antes de reorientar hacia la implicación. Esto cuestiona la confianza ingenua y subraya la importancia de la [[human-in-the-loop-ai|supervisión humana]] y de una [[ai-ed-evaluation|evaluación de la IA]] independiente del asesoramiento.

## Concepciones erróneas comunes

**"La confianza y la desconfianza están en extremos opuestos de una misma escala."** Son separables, y confundirlas malinterpreta lo que los estudiantes informan en realidad. **La percepción del riesgo y la confianza no son opuestos:** un estudio de percepción con 130 estudiantes sobre IA generativa [[agentic-ai|agéntica]] en [[higher-ed|educación superior]] encontró un riesgo percibido moderadamente elevado (M = 3,33, DE 0,89) *junto con* una confianza y una adopción más favorables. Un estudiante puede sostener ambas cosas a la vez, y por eso una única puntuación de confianza no puede decirle si su dependencia es apropiada.

**"Desconfiar de la exactitud de la IA significa que los estudiantes no se apoyarán en ella."** Los estudiantes distinguen la producción de su capacidad de dirigirla. En una encuesta a **8.021 estudiantes de cuatro universidades australianas, el 51% desconfiaba de la exactitud factual de la IA generativa mientras que el 76% se sentía capaz de obtener los resultados que quería.** El segundo número es el que predice la conducta: la confianza en la extracción coexiste con la duda sobre la verdad, y solo una de las dos es una propiedad de seguridad.

**"Lo que construye la confianza de los estudiantes son reglas y políticas más claras."** La utilidad domina. Una encuesta a 2.121 estudiantes, profesorado y personal de una universidad encontró que la utilidad percibida era el **correlato más fuerte de la confianza en la IA (β = 0,402)**, seguida de la claridad percibida de las políticas. Las instituciones que invierten en elaborar reglas mientras despliegan herramientas que nadie encuentra útiles han apuntado a la palanca más débil.

**"Si los estudiantes confían más en ella, la usarán con más cuidado, o al menos de forma apropiada."** El patrón documentado es el contrario. Entre 432 estudiantes de grado que resolvían problemas de Python con sugerencias exactas y deliberadamente engañosas, una mayor confianza predecía una dependencia apropiada **menor** (r = −0,42), y los estudiantes aceptaron el 86,03% de las sugerencias engañosas. La confianza no es un indicador indirecto de calibración; véase [[trust-calibration|calibración de la confianza]].

**"Las advertencias honestas sobre la falibilidad socavarían la confianza en un tutor."** Mejoran la conducta. Las [[ai-fallibility-warning-help-seeking|advertencias sobre la falibilidad de la IA]] en un sistema de tutoría inteligente de matemáticas aumentaron la [[help-seeking|búsqueda de ayuda]] en lugar de reducir el uso, lo que sugiere que declarar los límites fomenta una dependencia apropiada en vez de erosionarla.

## Implicaciones para la práctica

**Para los docentes**

- Mida dos cosas y no una: lo que los estudiantes creen sobre la exactitud de la IA y lo que creen sobre su propia capacidad de usarla. La división 51%/76% muestra que ambas divergen marcadamente y que solo la segunda impulsa la conducta.
- Declare los límites de la herramienta desde el principio. Las advertencias de falibilidad aumentaron la búsqueda de ayuda en la evidencia sobre sistemas de tutoría inteligente, así que la divulgación es una herramienta de calibración y no un riesgo para la confianza.
- Esté atento a una confianza alta combinada con una verificación superficial; esa combinación es el modo de fallo de la calibración, no una señal de éxito.

**Para los desarrolladores**

- Construya confianza sobre criterios observables y acordados, no sobre la capacidad aparente, siguiendo el trabajo de codiseño de la fiabilidad con ingenieros de aprendizaje. La fluidez no es una señal de fiabilidad y los estudiantes la leen como tal.
- Priorice la utilidad en la incorporación por encima del texto normativo, ya que la utilidad es el correlato de confianza más fuerte medido.
- No trate una confianza alta como un éxito de implicación; acompañe cualquier métrica de confianza con una medida de dependencia apropiada.

**Para los investigadores**

- Informe la confianza, la percepción del riesgo y la dependencia apropiada como constructos distintos, porque covarían en direcciones poco obvias, incluso negativas.
- Informe el resultado conductual (la tasa de aceptación de sugerencias erróneas) junto con la confianza autoinformada; las escalas de confianza por sí solas invierten la conclusión.

## Conceptos conectados

- [[explainable-ai]]
- [[trust-calibration]]
- [[ai-literacy]]
- [[critical-thinking]]
- [[cognitive-offloading]]
- [[educational-robotics]]
- [[ethics]]
- [[intelligent-tutoring]]
- [[ai-sycophancy]]
- [[human-ai-collaboration]]
- [[remote-proctoring]]
- [[social-norms-ai-use]] — el riesgo social sobre el que operan las normas y la divulgación

## Artículos conectados
- [[lucau-uneven-use-similar-trust-genai-2026]] — Uso desigual, confianza similar: la IA generativa en Dinamarca y Rumanía (Lucau, Voicu y Christensen 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — El riesgo percibido se correlaciona positivamente con la intención de seguir usando: adopción informada (Ilieva et al. 2026)
- [[mind-the-trust-gap-teacher-student-views-control-agency-k12-classroom-ai]] — La brecha de confianza entre docentes y estudiantes sobre el control y la agencia en la IA del aula de K-12
- [[qu-wang-disclose-or-not-genai-2026]] — Declarar el uso de IA está impulsado por factores relacionales y por la comodidad con los docentes, no por la política
- [[genai-teacher-feedback-comparison]] — La IA generativa y la retroalimentación del docente atienden necesidades de confianza distintas y complementarias
- [[care-full-feedback-genai]] — La retroalimentación fiable como práctica relacional "llena de cuidado"
- [[ai-fallibility-warning-help-seeking]] — Advertir sobre la falibilidad de la IA aumenta la búsqueda de ayuda en un sistema de tutoría inteligente
- [[calibrating-trustworthiness-llm-education-2026]] — Codiseñar métricas y visualizaciones de fiabilidad para los LLM en educación
- [[ai-overreliance-complex-adaptive-system-2026]] — La dependencia excesiva de la IA modelada como sistema adaptativo complejo
- [[fouad-bentley-trust-utility-gap-physics-2026]] — La brecha entre confianza y utilidad en las herramientas de IA para física
- [[t2i-competence-paradox-2026]] — La paradoja de la competencia en la generación de imágenes con IA
- [[task-context-trust-educational-hri-2026]] — El contexto de la tarea moldea la confianza en los robots educativos más que su apariencia
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — La identidad del avatar y la confianza epistémica en el aprendizaje mediado por IA
- [[contextual-sycophancy-ai-literacy]] — La adulación contextual y sus límites para la calibración de la confianza
- [[sycophantic-ai-social-interaction-2026]] — La IA aduladora hace que la interacción humana resulte menos satisfactoria con el tiempo
- [[ai-pedagogical-accompaniment-amico]] — Mediación pedagógica responsable y confianza en sistemas habilitados por IA
- [[best-response-student-ai-dialog-2026]] — La confianza en el diálogo entre estudiante e IA
- [[ai-adaptation-gap-higher-education-2026]] — La utilidad percibida como el predictor más fuerte de la confianza en la IA en educación superior
- [[bassett-ai-detectors-education-2026]] — Confianza y desconfianza en los sistemas de detección de IA
- [[genai-use-usefulness-student-experience-australia-2026]] — La experiencia del estudiante con la utilidad de la IA generativa en la educación superior australiana (Chung et al. 2026)
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Hacer accesibles al profesorado los hallazgos de aprendizaje automático en aulas semipresenciales
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-perspectives-ai-writing-grading-2026]] — ¿Quién debería calificar mi trabajo? Perspectivas de los estudiantes sobre la evaluación transparente de la escritura asistida por IA en la educación superior
- [[trust-in-ai-psychological-profiles-ml-2026]] — Tres perfiles de estudiantes en los que la confianza en la IA sigue la resiliencia y el estrés y no la demografía (Kumar et al. 2026)
- [[bounded-reliance-ai-writing-feedback-2026]] — Dependencia acotada: una perspectiva de credibilidad de la fuente sobre la implicación de estudiantes de inglés como lengua extranjera con la retroalimentación escrita generada por IA

- [[ai-empowerment-threat-genai-dependence-2026]] — Las valoraciones de empoderamiento y de amenaza movieron la confianza en direcciones opuestas, portando la dependencia de la IA generativa
- [[observer-perceptions-genai-interpersonal-trust-2026]] — El uso de IA generativa por parte de los pares reduce la confianza interpersonal a través de la calidez y la competencia percibidas, amortiguado por la alfabetización en IA
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Las señales de credibilidad aumentaron el cambio a una posición incorrecta de la IA; ocultar una recomendación lo suprimió
- [[trust-calibration-genai-collaborative-regulation-2026]] — Un modelo estructural somete ese papel de puente a una prueba empírica
