---
title: "¿Cómo deberíamos diseñar y facilitar cursos en línea asíncronos cuando la IA puede hacer el trabajo?"
created: "2026-09-22T18:29:06-04:00"
updated: "2026-09-22T18:29:06-04:00"
weight: 68
type: faq
foundations: [academic-integrity, cognitive-offloading, learning-design]
pedagogy: [community-of-inquiry, online-teaching-and-learning, self-regulated-learning, student-engagement]
technology: [generative-ai]
assessment: [assessment]
methods: [meta-analysis-systematic-review, rct, mixed-methods-research, design-based-research]
ethics: [guardrails]
audience: [instructors, instructional designers]
level: [higher ed, adult learning]
translation_of: faqs/asynchronous-online-courses-ai
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

# ¿Cómo deberíamos diseñar y facilitar cursos en línea asíncronos cuando la IA puede hacer el trabajo?

Ya ha hecho el descubrimiento que obliga a plantearse esta pregunta. En algún lugar de su curso asíncrono hay una tarea cuyo primer borrador ahora es gratis (una publicación en un foro de discusión, una reflexión, un análisis de caso, un conjunto de problemas), y el trabajo que llega es fluido, pertinente y no le dice nada sobre lo que el estudiante sabe hacer. Usted no está en el aula para ver cómo ocurre el pensamiento, y el artefacto que antes lo representaba ya no lo representa.

Esa era la versión del problema en la que un estudiante decide, a las dos de la madrugada, dejar que un modelo escriba la publicación. La versión más difícil ya está aquí. En tres demostraciones en un curso de psicología de grado en vivo, agentes autónomos iniciaron sesión en el sistema de gestión del aprendizaje, leyeron los materiales del curso y completaron trabajo evaluado sin supervisión sin que hubiera ningún estudiante involucrado: dos cuestionarios terminados en unos **12 minutos** y en **menos de 5 minutos**, ambos con **10/10**, y una publicación de discusión en la que el agente extrajo las publicaciones de sus pares y luego fabricó una historia de vida creíble en primera persona para responderles. El registro más amplio que reúnen los autores cubre al menos **15 ejecuciones de agentes documentadas** en Canvas, Moodle y Brightspace usando **siete herramientas de agentes**. Su argumento es que esto es un problema de [[assessment-validity|validez de la evaluación]] y no solo de [[academic-integrity|integridad]]: la finalización por un agente elimina el supuesto de que el trabajo entregado fue producido por la persona cuyo aprendizaje se está evaluando ([[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou y El-Haddad, 2026]]).

La conclusión de fondo: un curso asíncrono no tiene presencia ni visibilidad del proceso a la que recurrir, así que el diseño tiene que fabricarlas. Desplace la evidencia del aprendizaje del producto terminado, conserve una medición que el estudiante deba producir sin ayuda, ponga salvaguardas a cualquier IA que proporcione y marque el ritmo del periodo deliberadamente: la autorregulación es lo que los formatos a ritmo propio dan por supuesto en silencio y rara vez enseñan. Dicho sin rodeos: deje de diseñar sobre el supuesto de que producir el artefacto demuestra aprendizaje. Eso no es un argumento para prohibir la IA ni para hacer tareas a prueba de IA, sino para diseñar el curso de modo que tener la IA producir el artefacto sea insuficiente para lograr el aprendizaje.

## La versión breve

- **Haga del pensamiento el producto entregable.** Los borradores por etapas, los registros de decisiones y la autoexplicación son más difíciles de externalizar que un artefacto final, y le muestran el razonamiento que de otro modo no puede ver.
- **Conserve una medición sin ayuda** en las evaluaciones que certifican la competencia. Los datos poblacionales muestran que el efecto del acceso a la IA sobre la retención desaparece bajo supervisión, lo que indica que el atajo está fuera de la plataforma y depende de las condiciones que usted fije.
- **Use [[asynchronous-oral-assessment-2026|evaluaciones orales asíncronas]]** donde la importancia lo justifique: indicaciones en el momento oportuno, grabaciones breves y no revisables con límite de tiempo, rúbricas integradas y transcripciones automáticas.
- **Ponga salvaguardas a la IA que proporcione.** La tutoría que da pistas y no respuestas eliminó la penalización en el examen que produjo el acceso sin salvaguardas en un ensayo aleatorizado; suministrar un modelo sin restricciones es la versión que daña el aprendizaje.
- **Incruste el apoyo dentro del curso** en lugar de enlazar a un chatbot genérico. El asistente integrado de la Open University duplicó el tiempo en la tarea en su ensayo; la experiencia de la misma institución con un chatbot externo y desvinculado fue en la dirección opuesta.
- **Marque el ritmo del periodo a propósito.** Existen señales de alerta temprana hasta 7-8 días antes de las fechas límite de los módulos, y la autorregulación y el bienestar disminuyen a lo largo del periodo al compás de la acumulación de evaluaciones, de modo que espaciar las fechas límite es una decisión de diseño con consecuencias medibles, no un detalle de planificación.
- **Facilite las discusiones con moderación y secuéncielas de forma deliberada.** Los facilitadores LLM son notablemente más propensos a intervenir que los facilitadores humanos, y las herramientas de resumen que de verdad ayudan a los estudiantes a navegar un foro grande no evitan por sí solas que la participación decaiga. Pida una posición comprometida, un desafío y una reconsideración documentada en lugar de un recuento de publicaciones.
- **Comprométase antes de consultar.** Haga que los estudiantes produzcan primero su propia posición, predicción, esquema o decisión y después traigan el modelo para la crítica; el pensamiento que debe aprenderse debería ocurrir antes de abrir la herramienta.
- **Empareje una tarea vulnerable con una gemela.** Conserve el análisis para casa y añada una segunda tarea programada muy cerca que evalúe el mismo resultado de una forma en la que la primera no pueda delegarse.
- **Dele a la IA un rol declarado,** y sea capaz de terminar la frase: *el trabajo de la IA aquí es X, el trabajo del estudiante es Y.* Si Y es escaso, la actividad no está lista.

## Decida qué está midiendo realmente la evaluación

La razón por la que un curso asíncrono está más expuesto que uno presencial no es que sus estudiantes sean menos honestos. Es que la evidencia de aprendizaje del curso es la entrega, y la entrega ahora es barata de producir. Dos piezas de evidencia causal muestran lo que eso cuesta.

En un ensayo aleatorizado con unos 1.000 estudiantes de matemáticas de secundaria, la asistencia de IA sin salvaguardas elevó el desempeño en la práctica un **48%** mientras reducía las puntuaciones en el examen sin ayuda y a libro cerrado un **17%**: los estudiantes que nunca tuvieron acceso superaron a quienes lo tuvieron. El detalle crítico es la solución: un tutor [[guardrails|con salvaguardas]] que daba pistas en lugar de respuestas eliminó el daño. El problema nunca fue la presencia del modelo, sino la ausencia de una restricción sobre lo que haría.

La evidencia conductual a escala poblacional apunta en la misma dirección. En **3,2 millones de interacciones con ALEKS**, el tiempo de estudio en problemas susceptibles a la IA cayó un **26,9%** tras el lanzamiento público de ChatGPT, con una **reducción del 25% en las probabilidades de responder correctamente a los ítems de retención supervisados**, un efecto que desapareció una vez que hubo supervisión. Esa desaparición es la parte importante para el diseño del curso: sitúa el atajo fuera de la plataforma y muestra que el daño es una propiedad de las condiciones que usted fija, no del carácter del estudiante.

Hay además un fallo más sutil contra el que diseñar. La [[metacognitively-discordant-completion-genai-2026|finalización metacognitivamente discordante]] nombra el estado de entregar un trabajo correcto y completo sabiendo en privado que la comprensión nunca llegó. En un aula podría detectarlo en la vacilación de un estudiante; en un curso asíncrono la entrega es su único canal, y una entrega correcta se lee como éxito. El diseño de la [[assessment|evaluación]] es, por tanto, la primera palanca, no el último recurso.

## Decida qué cuenta como evidencia cuando no hay un aula en la que entrar

Si el producto terminado ya no demuestra el pensamiento, la evidencia tiene que venir del proceso o de una condición que el estudiante no pueda delegar.

**Los artefactos que revelan el proceso** son el cambio más barato y funcionan a escala: entregas por etapas con un registro de decisiones intermedio obligatorio, una autoexplicación de un párrafo adjunta a cada respuesta, una anotación de una fuente, un plan revisado tras la retroalimentación. Capturan [[cognitive-offloading|el razonamiento]] y no su residuo, y al docente le cuestan comparativamente poco de revisar.

**La evaluación oral asíncrona** es la opción más sólida cuando hay que certificar la competencia. [[asynchronous-oral-assessment-2026|Pentland, Lowenthal y Krier (2026)]] evaluaron evaluaciones basadas en la web en las que las indicaciones se entregan en el momento oportuno, los estudiantes graban respuestas breves con límite de tiempo ante la webcam que no pueden revisar, y el profesorado califica con rúbricas integradas mientras las transcripciones se generan automáticamente. En dos estudios (un piloto de contabilidad intermedia y un curso de analítica de datos), los estudiantes obtuvieron puntuaciones más altas en estas evaluaciones que en exámenes presenciales de opción múltiple (significativo en el segundo estudio, y una tendencia positiva pero no significativa en el primero), con correlaciones moderadas entre formatos que respaldan la [[assessment-validity|validez]] convergente. Los estudiantes informaron de que se preparaban de forma distinta, usaban más estrategias de estudio [[active-learning|activas]] y consideraban el formato profesionalmente relevante. Responde directamente al problema asíncrono: el pensamiento se realiza en vivo, en el momento y el lugar que elija el estudiante, con un coste administrativo que no escala con el tamaño de la cohorte.

**Una medición sin ayuda** corresponde a cualquier curso cuya calificación certifique conocimiento. El resultado de ALEKS anterior es el argumento: cuando había supervisión, la brecha de retención desapareció. Cierre el círculo diciendo a los estudiantes por qué existe esa condición; el razonamiento corresponde a su [[course-ai-policy|redacción de una política de IA del curso]].

## Decida la secuencia, no solo el artefacto

Una vez que el producto terminado es evidencia poco fiable, el orden en que ocurre el trabajo pasa a formar parte del diseño de la evaluación.

[[brcic-effortless-trap-productive-struggle-2026|Brcic y Frljic (2026)]] sitúan la colocación en el centro del argumento: permitir o prohibir es una falsa dicotomía, y la pregunta de diseño que importa es **dónde se sitúa la herramienta**. La evidencia causal que reúnen muestra el resultado dándose la vuelta solo por la colocación: el mismo ayudante sin salvaguardas que dejó a los estudiantes de secundaria unos **17% peores** en un examen sin ayuda no causó daño una vez reconfigurado para retener las respuestas, mientras que un [[intelligent-tutoring|tutor]] bien diseñado **duplicó** aproximadamente el aprendizaje. Su marco de seis movimientos para colocar la herramienta (preparar, sondear, señalar, adjuntar, reforzar, probar) es un menú utilizable, y su diagnóstico en una línea es el que conviene conservar: *si dejar entrar a la IA hace que la tarea parezca no costar esfuerzo, está en el lugar equivocado.* La asistencia mal colocada no solo deja de ayudar; deja una ilusión de aprendizaje que se derrumba en la tarea sin ayuda, el estado que la [[metacognitively-discordant-completion-genai-2026|finalización metacognitivamente discordante]] nombra para una entrega que es correcta y no se comprende.

Para un curso asíncrono, eso se traduce en una secuencia que puede escribir en la propia tarea:

**Pensar → Comprometerse → Usar la IA → Criticar → Revisar → Explicar.**

Los estudiantes intentan el trabajo intelectual y se comprometen con una interpretación, una predicción, un esquema o una decisión iniciales. Solo entonces entra el modelo, para retroalimentación, alternativas, contraargumentos o crítica. Después los estudiantes evalúan lo que produjo, revisan y explican qué cambió y por qué. El paso del compromiso es lo que hace evaluable el resto: un estudiante no comprometido no tiene nada que revisar, y un artefacto escrito desde cero por un modelo no tiene ningún historial de revisión.

Una advertencia sobre la corrección excesiva: recoger cada indicación y forzar la documentación de cada pulsación de tecla produce carga de trabajo sin evidencia. Pida puntos de decisión significativos (qué evidencia se seleccionó, qué alternativa se rechazó, qué cambió tras la crítica) y el razonamiento que de verdad leería.

## Empareje una tarea vulnerable con una gemela

La otra opción estructural es dejar de elegir entre una tarea pedagógicamente valiosa y una defendible. [[roe-assessment-twins-2026|Roe, Perkins y Giray (2026)]] proponen **tareas gemelas de evaluación**: emparejar la tarea vulnerable a la IA, como un ensayo o un análisis para casa, con una segunda tarea menos vulnerable que evalúe los *mismos* resultados, programada lo bastante cerca para poder verificarla de forma cruzada y calificada de manera interdependiente. Su mapeo recorre los seis hilos de evidencia de validez de Messick, y el proceso de diseño tiene tres pasos: identificar las vulnerabilidades, alinear los resultados y elegir la gemela, y después desarrollar una calificación que conecte ambas. El análisis para casa conserva su valor para la indagación extensa; su gemela podría ser una variación breve de un caso, una explicación de una decisión clave o una defensa oral o multimedia breve.

La pregunta que acompaña es la de la propiedad más que la de la autoría. [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani y Buckingham Shum]] sostienen que la coautoría con IA generativa socava varias formas de evidencia de validez y proponen la **integridad de la coautoría** como una fuente de evidencia de validez por derecho propio, que se vulnera cuando un estudiante entrega contenido generado por IA que no comprende. Para comprobar la propiedad a escala en lugar de por inspección, informan de un trabajo sobre un **AI Viva**: un agente conversacional que dirige una viva voce híbrida, planteando preguntas de comprensión de tipo y complejidad controlables, validado en profundidad por educadores expertos y especialistas en evaluación. Merece la pena sopesarlo frente a supervisar todo: una defensa hablada del propio razonamiento escala de una forma que la vigilancia del aula no, y produce evidencia sobre la comprensión en lugar de sobre quién estaba en la sala.

## Decida qué puede hacer la IA dentro de su curso

La comparación que importa no es IA frente a no IA. Es IA integrada y restringida frente a un chatbot desvinculado, y las dos producen resultados distintos.

El [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|asistente AIDA de la Open University]] es el caso integrado mejor documentado: seis estudios iterativos basados en el diseño a lo largo de 18 meses con 498 estudiantes y 20 miembros del personal, en una institución que atiende a más de 200.000 estudiantes en más de 50 países. En un ensayo aleatorizado exploratorio, los estudiantes que usaron AIDA pasaron **el doble de tiempo** y visitaron más páginas de su curso que el grupo de control, y el **96%** quería que el asistente estuviera disponible en sus estudios formales. Lo específicamente diseñado y dentro del entorno superó a lo genérico y externo.

[[lock-integrating-ai-online-learning-higher-ed-2025|La revisión de Lock, Arteaga y Johnson (2025)]], con 63 citas de 32 países, añade una condición social a la condición de diseño: los estudiantes que usaron ChatGPT *junto con* la tutoría del docente percibieron mayores [[learning-gains|ganancias de aprendizaje]] que quienes lo usaron solos. El asistente complementa al docente o sustituye la relación, y solo una de esas dos cosas es un diseño de curso.

Dos cautelas merecen tomarse en serio. El fracaso de KhanMigo no fue técnico: los estudiantes simplemente no se implicaron con el chatbot y la evidencia de ganancias fue limitada, lo que apunta a la [[governance|preparación organizativa]] y al ajuste instruccional más que a la calidad del modelo. Y el lado del profesorado no está automáticamente preparado: en una comparación de la formación docente sudafricana, el TPACK autoinformado para la enseñanza de ciencias integrada con IA fue del **64,0%** en una universidad presencial frente al **47,4%** en una universidad a distancia, con el conocimiento pedagógico como el dominio más débil en ambas ([[online-teaching-and-learning]]). Desplegar un asistente en un curso asíncrono no forma a las personas que deben juzgar su resultado.

## Decida cómo se facilita realmente la discusión asíncrona

Los foros de discusión son donde los cursos asíncronos o bien construyen [[community-of-inquiry|comunidad]] o bien se convierten silenciosamente en buzones de entrega. Dos hallazgos deberían dar forma a lo que automatiza allí.

Primero, **el momento es la parte difícil, no la detección del tema.** [[llm-facilitation-timing-online-discussions|Tsirmpas y sus colegas]] construyeron el corpus PEFK para comparar conjuntos de datos de facilitación y después realizaron el primer estudio del *momento* de la facilitación con facilitadores humanos expertos y jueces LLM. Los humanos eran más cautos a la hora de intervenir; los LLM eran excesivamente propensos a hacerlo. Ambos eran más seguros al juzgar que la facilitación **no** era necesaria que al juzgar que sí lo era. Los modelos clasificadores entrenados superaron a las configuraciones de LLM, y aun así los conjuntos de datos existentes limitaban el desempeño. La lectura práctica: no entregue la moderación autónoma a un agente y, si usa IA en una discusión, configúrela para que se mantenga callada por defecto.

Segundo, **la IA ayuda a los estudiantes a navegar un foro sin hacer que participen.** Con 128 estudiantes universitarios en tres iteraciones, [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao y Cukurova (2026)]] encontraron que los resúmenes de discusión generados por IA ampliaban la exposición a las contribuciones de los pares y reforzaban la conectividad de la red, los vínculos débiles que la teoría del capital social llama puentes, al reducir el esfuerzo de encontrar publicaciones significativas. No evitaron que la actividad de visualización decayera a lo largo del curso. La síntesis es un [[scaffolding|andamiaje]] de navegación, no un sustituto de generar participación.

La estructura que mitiga esto es una secuencia y no un hilo: **Posición → Desafío → Reconsideración.** Los estudiantes se comprometen con una interpretación fundamentada en el material del curso, después se encuentran con otra perspectiva, un contraejemplo o una crítica, y luego explican si su razonamiento se movió y cómo. Lo que se califica es el movimiento entre ideas, no el número de publicaciones, y una publicación entregada más dos respuestas ya no lo demuestra, dado que la tercera demostración anterior tiene a un agente extrayendo las publicaciones de un par e imitando la historia de vida de un compañero para encargar la tarea.

Como lo que un agente imita es la conducta superficial, las propias contribuciones del docente se convierten en el recurso escaso. Responder mecánicamente a docenas de publicaciones individuales es la forma menos valiosa de presencia docente; sintetizar a través de la discusión es la más: *tres supuestos siguen apareciendo en sus análisis; varios de ustedes leen esta evidencia de forma distinta; este argumento es convincente hasta que introducimos este contraejemplo.* Eso es [[teacher-role|orquestación]] y no producción de mensajes, y es la parte que ningún agente de esta literatura realiza.

La pregunta de fondo bajo ambas cosas es la rendición de cuentas. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim y Anderson (2026)]] sostienen que la IA generativa desestabiliza el supuesto de la [[community-of-inquiry|comunidad de indagación]] de que los indicadores de presencia pueden atribuirse a seres humanos en absoluto: tratan la GenAI como una condición epistémica, y las presencias como logros sociotécnicos cuya relación con la calidad de la indagación depende de dónde se sitúe la responsabilidad humana. La implicación de diseño para un curso asíncrono es concreta: decida y declare quién es responsable de qué en cada intercambio, en lugar de suponer que la presencia surge porque existe un foro.

## Decida cómo mantienen el ritmo los estudiantes sin un aula en la que entrar

Los formatos a ritmo propio dan por supuesta la [[self-regulated-learning|autorregulación]] y rara vez la enseñan. La evidencia sobre qué conductas se correlacionan de verdad con mantenerse en la tarea es inusualmente práctica.

Al encuestar a 530 estudiantes universitarios con minería de reglas de asociación y agrupamiento, [[decreasing-digital-distraction-college-online-learning-2026|Shi et al. (2026)]] encontraron que las conductas de aprendizaje autorregulado (**fijación de objetivos, estructuración del entorno y gestión del tiempo**) se presentaban de forma más consistente con una baja distracción digital, junto con la [[student-engagement|implicación]] entre estudiante e instructor y entre estudiante y contenido, y la competencia técnica. Cabe destacar que la dependencia de buscar ayuda entre pares y la implicación entre estudiantes aparecían *menos* a menudo en los perfiles de baja distracción. Estructure el entorno y el calendario antes de diseñar otra actividad de grupo.

La autorregulación tampoco es un rasgo fijo que se pueda suponer o descartar. A lo largo de un semestre completo con 75 estudiantes de primer año, [[song-genai-learning-partner-srl-over-time-2026|Song et al. (2026)]] encontraron que la autorregulación del aprendizaje funcionaba a la vez como aptitud estable y como estado fluctuante: las líneas base individuales se mantuvieron estables mientras el conocimiento metacognitivo y el [[well-being|bienestar]] disminuían de forma sistémica a lo largo del periodo, impulsados por exigencias del plan de estudios como las fechas límite de las evaluaciones principales. Agrupar las fechas límite puede ser una elección administrativa eficiente, y también es un coste medible para la regulación de la que depende el formato.

La ventana de intervención es conocida. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries y Koprinska (2025)]] mostraron que el aprendizaje automático interpretable sobre registros de interacción con el contenido predice el progreso a nivel de módulo y señala resultados de abandono hasta **7-8 días antes de las fechas límite de los módulos** en cursos de programación en línea a gran escala. Eso es aviso suficiente para enviar un recordatorio específico a un estudiante concreto, y es mejor que descubrir el fallo en el momento de calificar. Para el estudiantado [[adult-learning|adulto]] y a distancia, las directrices de diseño de AI-ALOE añaden la restricción que más importa: acceso móvil, capacidad sin conexión y disponibilidad asíncrona genuina, ya que estos estudiantes estudian en fragmentos de tiempo entre otras obligaciones.

## Qué puede quitarle la IA de encima como diseñador

Dos usos tienen evidencia razonable detrás, y ambos se dirigen a la carga de trabajo del docente más que al pensamiento del estudiante.

**Coste de producción.** [[mooc-to-maic|MAIC]] reformula la emisión del MOOC de "un vídeo para N estudiantes" como "N agentes para un estudiante", usando agentes especializados de docente, asistente, compañero y analizador sobre una base de modelo compartida. Sus autores informan de que redujeron la producción del curso de aproximadamente **25.000 dólares y 60 horas** por MOOC a **menos de 2 dólares y 30 minutos**, pilotado en Tsinghua en dos cursos con **más de 100.000 registros de aprendizaje de más de 500 estudiantes**, y publicado como OpenMAIC de código abierto. Los medios personalizados son la misma idea a nivel de activo: en un curso en línea grande, [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] encontraron que los estudiantes preferían vídeos personalizados generados por IA a vídeos no personalizados grabados por personas, con el efecto de personalización superando el valor atribuido a un presentador humano.

**Navegación del foro.** El andamiaje de resumen anterior redujo el coste de localizar buenas contribuciones sin cargar al profesorado con la tarea de resumir.

**Qué no automatizar.** Decidir si un texto es el pensamiento propio del estudiante, juzgar si una discusión necesita intervención y calibrar la dificultad son las tareas que la evidencia señala como poco fiables o portadoras de responsabilidad. El material generado también necesita revisión pedagógica antes de otorgar crédito: la producción barata no es lo mismo que un diseño sólido.

## Dele a la IA un rol declarado y compruebe que el estudiante conserva el suyo

"El estudiantado puede usar IA" es una especificación demasiado amplia para diseñar contra ella. Nombrar el rol es lo que hace diseñable una actividad, y los roles conllevan consecuencias para la presencia: un estudio sobre IA generativa en la educación en marketing distingue **tutor, compañero de equipo y herramienta**, muestra que cada uno influye de forma distinta en la presencia docente, social y cognitiva, y enumera las exposiciones éticas conocidas (privacidad de datos, plagio, dependencia y equidad en la evaluación) ([[genai-marketing-education-roles-2026|GenAI en la educación en marketing]]). El mismo modelo puede ser un interrogador socrático antes de una tarea, un crítico después de un primer borrador, una parte interesada simulada durante un análisis de caso, un oponente cuyo argumento hay que refutar, un tutor que da pistas durante la práctica o un editor que se incorpora solo después de que exista el razonamiento sustantivo. Esas son actividades distintas, y confundirlas es como "la IA está permitida" pasa silenciosamente a significar "no se diseñó nada".

[[scaffolding|El andamiaje]] aporta la prueba: el apoyo debería ayudar a los estudiantes a hacer lo que todavía no pueden hacer solos, y debería desvanecerse a medida que se desarrolla la competencia. Un modelo que sigue suministrando soluciones completas no es un andamiaje: está haciendo la tarea. Así que, para cada actividad habilitada con IA, quien diseña debería poder completar esta frase sin dudar:

*El trabajo de la IA aquí es \_\_\_\_\_\_, mientras que el trabajo del estudiante es \_\_\_\_\_\_\_\_ .*

Si el segundo espacio en blanco contiene poco pensamiento significativo, la actividad necesita un rediseño y no una política más estricta.

## Enseñe evaluación, no solo operación

[[ai-literacy|La alfabetización en IA]] no es la capacidad de operar un chatbot; incluye la evaluación crítica, el juicio [[metacognition|metacognitivo]] y saber cuándo no usar la herramienta en absoluto, y la base de conocimiento es coherente en que la confianza autoinformada es un mal indicador de la competencia demostrada. Eso apunta a un cambio que cualquier curso asíncrono puede adoptar de inmediato: **a veces entregue usted mismo el resultado de la IA a los estudiantes.** Déles dos respuestas contrapuestas y pregunte cuál es más sólida y por qué. Pida la afirmación más débil, el supuesto que falta, la fuente no verificable, la explicación plausible que sin embargo es errónea. Pregunte qué evidencia les haría cambiar de opinión.

Enmarcada así, la capacidad que se califica ya no es solo *¿puede este estudiante producir una respuesta?*, sino *¿puede este estudiante reconocer si una respuesta merece confianza?*, algo más cercano a lo que la disciplina exige de verdad y mucho más difícil de delegar. Las [[verify-ai-output|prácticas de verificación]] y el material de alfabetización en IA son donde vive la técnica; lo que importa aquí es poner la evaluación dentro de la tarea calificada en lugar de dejarla como un consejo.

## Las objeciones que escuchará

**"Son adultos que eligieron un curso asíncrono. Si dejan que la IA lo escriba, es su decisión."** El argumento de la elección se sostendría si el curso no certificara nada. Lo hace. La evidencia de ALEKS muestra que el atajo produce una apariencia de competencia que no sobrevive a una comprobación supervisada, y el coste recae sobre el estudiante más tarde: en el siguiente curso, en el examen de habilitación profesional o en el empleo. También hay un componente de equidad: quienes tienen más probabilidades de descargar el trabajo son a menudo quienes tienen menos tiempo, precisamente el grupo al que un curso asíncrono existe para servir.

**"La detección es la respuesta."** La detección está en disputa, y el resultado de la supervisión anterior muestra por qué el diseño supera a la vigilancia: el daño desapareció cuando cambiaron las condiciones, no cuando se intensificó la vigilancia. La detección también conlleva costes de falsos positivos y convierte la enseñanza en una carrera armamentística. Rediseñe la tarea y conserve una medición sin ayuda; véanse [[reduce-ai-cheating]] y [[redesign-assessment-ai-era]].

**"La presencia docente es imposible a distancia, así que lo asíncrono es intrínsecamente inferior."** La presencia en un curso asíncrono se diseña y no se sobreentiende, y la reconceptualización de la CoI anterior dice que sus indicadores son logros sociotécnicos en la era de la GenAI. El ensayo de AIDA es un contraejemplo útil: el apoyo generativo integrado duplicó el tiempo en la tarea en un curso sin ninguna reunión síncrona.

**"La supervisión es vigilancia y no la impondré."** Es una posición defendible, y no le deja sin opciones. Los artefactos que revelan el proceso, la evaluación oral asíncrona, la autoexplicación y el AI Viva descritos arriba capturan el razonamiento sin vigilar la sala de nadie. Si usa una condición supervisada, dígalo en el programa, explique el razonamiento y limítela a las evaluaciones que certifican la competencia.

**"Entonces hagámoslo todo síncrono y supervisado."** Muchos estudiantes eligen el estudio asíncrono precisamente porque tienen empleo, responsabilidades de cuidado, discapacidades o limitaciones geográficas que dificultan la asistencia síncrona, y la detección conlleva sus propios costes de equidad: las herramientas que señalan a escritores no nativos producen de forma desproporcionada falsos positivos que penalizan el trabajo honesto ([[ai-detection|detección de IA]]). La alternativa proporcionada es un número reducido de momentos de verificación dentro de un curso por lo demás flexible: una explicación breve grabada, una aplicación personalizada, una respuesta a una pregunta elegida por el docente, un rastro de decisiones anotado, una comprobación individual de bajo riesgo. La verificación debería elevar la validez de su evidencia sin eliminar la flexibilidad que hacía que mereciera la pena ofrecer el formato.

## Lo que la evidencia no resuelve

La [[ai-distance-education-systematic-review-2026|revisión sistemática de la IA en la educación a distancia]] (56 artículos, 2020-2025) cubre la personalización (24 estudios), la evaluación y la retroalimentación (19), la interacción humano-IA (17) y la gobernanza y la equidad, y concluye que la base es de corto plazo y transversal, con poco trabajo longitudinal. La [[ai-student-engagement-online-learning-review-2025|revisión de la IA y la implicación del estudiantado en el aprendizaje en línea]] (24 estudios) se limita a una sola base de datos, trata solo la implicación y confunde explícitamente los contextos síncronos con los asíncronos, por lo que sus conclusiones no deberían leerse como específicas de lo asíncrono. La evaluación oral asíncrona se apoya en dos estudios en dos cursos. MAIC es un piloto. Los conjuntos de datos sobre el momento de la facilitación limitan el desempeño incluso con clasificadores entrenados. Y ningún estudio de aquí sigue a una cohorte asíncrona el tiempo suficiente para mostrar si la evaluación rediseñada produce aprendizaje duradero en lugar de mejor evidencia de él. Tome todo esto como suficientemente sólido para cambiar su próximo curso y demasiado escaso para justificar una afirmación de política.

## Qué hacer esta semana

**En diez minutos:** elija su evaluación de mayor importancia y añada una condición que el estudiante complete sin ayuda. Dígales por qué existe.

**Antes de que salga la próxima tarea:** tome la tarea que la IA ahora completa de principio a fin y reescríbala para que el proceso sea el artefacto, es decir, un registro de decisiones, un borrador por etapas, una autoexplicación o una comparación de dos intentos. Si la tarea puede terminarse sin nada de ese razonamiento, el razonamiento nunca fue necesario.

**Este periodo:** convierta una evaluación importante en una defensa oral asíncrona con rúbricas integradas; fije el permiso de IA por tarea en el programa y colóquelo donde los estudiantes realmente lo lean; espacie las fechas límite principales en lugar de agruparlas; y abra una ventana de 7-8 días antes de la fecha límite en la que contacte con los estudiantes cuyos datos de interacción se han vuelto silenciosos.

**Pase tres preguntas por su tarea más débil.** (1) ¿Podría un sistema de IA completar esta actividad sin que el estudiante entienda el material? (2) ¿Qué actividad cognitiva se supone que produce aquí el aprendizaje? (3) ¿Qué evidencia mostrará que el estudiante realizó realmente esa actividad? Si la primera respuesta es sí y las otras dos son difíciles de responder, el problema es el diseño del aprendizaje y no la política de IA, y ninguna redacción de la política lo arreglará.

El objetivo no es un curso en el que la IA no pueda participar. Es un curso en el que la IA pueda participar **sin desplazar el aprendizaje que el curso existe para producir**.

**A dónde ir después:** las reglas a nivel de curso corresponden a [[course-ai-policy]]; la reconstrucción de la evaluación se cubre en [[redesign-assessment-ai-era]]; el problema de la dependencia que subyace en [[reducing-over-reliance]]; las cargas de trabajo del profesorado y lo que la IA elimina de forma realista en [[ai-save-instructor-time]]; y la visión a nivel de diseño de integrar la IA en una experiencia de aprendizaje en [[designing-ai-into-learning]].
