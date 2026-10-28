---
title: "¿Cómo deberíamos diseñar y facilitar cursos en línea asíncronos cuando la IA puede hacer el trabajo?"
created: "2026-09-22T18:29:06-04:00"
updated: "2026-10-28T13:12:16-04:00"
connected_faqs: [reducing-over-reliance, course-ai-policy, verify-ai-output, group-work-ai]
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
source_updated: "2026-10-28T11:34:12-04:00"
translation_of: faqs/asynchronous-online-courses-ai
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

El semestre empieza y no ocurre nada a una hora fija. Usted publica la lectura de la primera semana, la consigna de discusión, el primer caso, y luego espera a ver qué llega. Lo que llega es fluido, pertinente y no le dice nada sobre el estudiante que lo envió. No hay aula en la que entrar, ni una cara que leer un martes a las 10:15, ni una pregunta de seguimiento que pueda hacer mientras el estudiante sigue delante de usted.

La respuesta que dar a un colega: en un curso asíncrono, todo lo que un aula ofrece gratis tiene que construirse a propósito. Ponga la calificación en el proceso y no en el archivo terminado, conserve una medición que el estudiante produzca sin herramientas y sin ayuda, restrinja la IA que entregue y manténgala dentro del curso, y trate el calendario como una decisión de diseño. Ante cualquier asignación, pregunte qué tendría que hacer todavía un estudiante si un modelo produjera el artefacto por él.

## La versión breve

**1.** Califique el proceso. Un registro de decisiones, un borrador por etapas o un párrafo de autoexplicación muestran un razonamiento que la entrega final esconde.

**2.** Conserve una medición sin ayuda en toda evaluación que certifique competencia. La brecha de retención de los datos poblacionales que aparecen más abajo se cierra en cuanto hay vigilancia.

**3.** Use la [[asynchronous-oral-assessment-2026|evaluación oral asíncrona]] donde el riesgo justifique el trabajo de producción: consignas en el momento oportuno, grabaciones breves que el estudiante no puede revisar, rúbricas integradas, transcripciones generadas automáticamente.

**4.** Configure cualquier IA que entregue para que dé pistas en lugar de respuestas, e intégrela en el curso en vez de enlazar a algo genérico.

**5.** Espacie las entregas importantes y abra una ventana de 7-8 días antes de cada una. Eso es toda la advertencia que le dan los datos de interacción.

**6.** Califique el movimiento en una discusión: una postura asumida, una impugnación, una reconsideración documentada.

## Decida de qué es evidencia su asignación

Un curso asíncrono queda expuesto por una razón estructural. Su evidencia de aprendizaje es la entrega, y las entregas ahora son baratas de producir.

Las demostraciones sacan al estudiante de la escena por completo. En un curso universitario de psicología en vivo, unos agentes autónomos iniciaron sesión en el sistema de gestión del aprendizaje, leyeron los materiales del curso y completaron trabajo evaluado sin vigilancia sin que interviniera ningún estudiante. Dos cuestionarios se terminaron en unos **12 minutos** y en **menos de 5 minutos**, ambos con **10/10**. En una publicación de discusión, el agente extrajo las publicaciones de sus pares y luego inventó una historia de vida verosímil en primera persona para responderles. El registro más amplio de los autores abarca al menos **15 ejecuciones de agentes** documentadas en Canvas, Moodle y Brightspace, con **siete herramientas de agente**. Su encuadre importa para su programa: esto es un problema de [[assessment-validity]] antes que un problema de [[academic-integrity|integridad]], porque la finalización por un agente elimina el supuesto de que el trabajo entregado proviene de la persona cuyo aprendizaje se está evaluando ([[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou y El-Haddad, 2026]]).

La evidencia causal sobre lo que la herramienta hace al aprendizaje es igual de directa. En un ensayo aleatorizado con cerca de 1.000 estudiantes de secundaria de matemáticas, la asistencia de IA sin salvaguardas elevó el desempeño en la práctica un **48%** y redujo las puntuaciones en el examen sin ayuda y a libro cerrado un **17%**. El estudiantado sin acceso superó al estudiantado con acceso. Un tutor con [[guardrails|salvaguardas]] que daba pistas en lugar de respuestas eliminó el daño. La restricción decidió el resultado.

Los datos poblacionales van en la misma dirección. En **3,2 millones de interacciones con ALEKS**, el tiempo de estudio en problemas susceptibles a la IA cayó un **26,9%** después del lanzamiento público de ChatGPT, con un **25% de descenso en las probabilidades de responder correctamente a los ítems de retención vigilados**. El efecto desapareció en cuanto hubo vigilancia. Esa desaparición es la parte útil para el diseño de cursos, porque sitúa el atajo fuera de la plataforma y muestra que el daño vive en las condiciones que usted fija.

Hay un fracaso más silencioso contra el que diseñar. La [[metacognitively-discordant-completion-genai-2026|finalización metacognitivamente discordante]] nombra el estado de entregar un trabajo correcto y completo sabiendo en privado que la comprensión nunca llegó. En un aula podría detectarlo en la vacilación de un estudiante. En un curso asíncrono la entrega es el único canal, y una entrega correcta se lee como éxito. El diseño de la [[assessment|evaluación]] es su primera palanca.

## Ponga la evidencia en el proceso

Si el producto terminado no prueba nada, la evidencia tiene que venir de cómo se hizo el trabajo o de una condición que el estudiante no pueda delegar.

Los **artefactos que revelan el proceso** son el cambio más barato y funcionan a escala: entregas por etapas con un registro de decisiones intermedio obligatorio, una autoexplicación de un párrafo adjunta a cada respuesta, una anotación de una fuente, un plan revisado tras la retroalimentación. Capturan [[cognitive-offloading|el razonamiento]] y no su residuo, y le cuestan al docente relativamente poco de revisar.

La **evaluación oral asíncrona** es la que más peso tiene donde hay que certificar competencia. [[asynchronous-oral-assessment-2026|Pentland, Lowenthal y Krier (2026)]] evaluaron pruebas basadas en la web que entregan consignas en el momento oportuno, hacen que el estudiantado grabe respuestas breves y limitadas en el tiempo con la cámara que no puede revisar, y califican con rúbricas integradas mientras las transcripciones se generan automáticamente. En dos estudios, un piloto de contabilidad intermedia y un curso de analítica de datos, el estudiantado obtuvo puntuaciones más altas que en exámenes presenciales de opción múltiple. La diferencia fue significativa en el segundo estudio y una tendencia positiva pero no significativa en el primero, con correlaciones moderadas entre formatos que respaldan la [[assessment-validity|validez]] convergente. El estudiantado informó que se preparaba de otra manera, que usaba estrategias de estudio más [[active-learning|activas]] y que consideraba el formato relevante para la profesión. Para un curso sin una hora compartida, este es el equivalente estructural más cercano: el pensamiento ocurre en vivo, en un momento y un lugar que el estudiante elige, con un costo administrativo que no crece con el tamaño de la cohorte.

**Una medición sin ayuda** pertenece a cualquier curso cuya calificación certifique conocimiento. El resultado de ALEKS es el argumento: con vigilancia, la brecha de retención desapareció. Explique al estudiantado por qué existe la condición. Ese razonamiento pertenece a [[course-ai-policy|su política de IA del curso]].

## Decida dónde se sitúa la herramienta en la secuencia

Una vez que el producto es evidencia poco fiable, el orden del trabajo pasa a formar parte del diseño de la evaluación.

[[brcic-effortless-trap-productive-struggle-2026|Brcic y Frljic (2026)]] sitúan la colocación en el centro del argumento: permitir o prohibir es una falsa disyuntiva, y la pregunta de diseño que importa es **dónde se sitúa la herramienta**. La evidencia causal que reúnen muestra que el resultado se invierte solo por la colocación. El mismo ayudante sin salvaguardas que dejó a estudiantes de secundaria aproximadamente un **17% peor** en un examen sin ayuda no causó daño una vez reconstruido para retener las respuestas, y un [[intelligent-tutoring|tutor]] bien diseñado llegó a **duplicar** el aprendizaje. Su marco de seis movimientos para colocar la herramienta (preparar, sondear, señalar, adjuntar, reforzar, comprobar) es un menú utilizable. Conserve su diagnóstico: *si dejar entrar la IA hace que la tarea se sienta sin esfuerzo, está en el lugar equivocado.* Una mala colocación deja una ilusión de aprendizaje que se derrumba en la tarea sin ayuda, el estado que describe la [[metacognitively-discordant-completion-genai-2026|finalización metacognitivamente discordante]].

Escrito en una asignación, eso le da una secuencia que puede imprimir en la hoja:

**Pensar, comprometerse, usar IA, criticar, revisar, explicar.**

El estudiantado intenta el trabajo intelectual y se compromete con una interpretación, una predicción, un esquema o una decisión inicial. Después entra el modelo, para retroalimentación, alternativas, contraargumentos o crítica. Luego el estudiantado juzga lo que produjo, revisa y explica qué cambió y por qué. El paso de compromiso es lo que hace evaluable el resto. Un estudiante sin compromiso no tiene nada que revisar, y un artefacto que un modelo escribió desde cero no tiene historial de revisión alguno.

La corrección excesiva que hay que evitar: recoger cada mensaje y documentar cada pulsación produce carga de trabajo sin evidencia. Pida los puntos de decisión que leería de verdad: qué evidencia se seleccionó, qué alternativa se rechazó, qué cambió tras la crítica.

## Empareje la tarea que no puede defender con una gemela

La opción estructural aquí es dejar de elegir entre una tarea pedagógicamente sólida y una defendible. [[roe-assessment-twins-2026|Roe, Perkins y Giray (2026)]] proponen **evaluaciones gemelas**: emparejar la tarea vulnerable a la IA, un ensayo o análisis para llevar a casa, con una segunda tarea menos vulnerable que evalúa los *mismos* resultados, programada lo bastante cerca para la verificación cruzada y calificada de forma interdependiente. Su mapeo recorre los seis hilos de evidencia de validez de Messick, y su proceso de diseño tiene tres pasos: identificar las vulnerabilidades, alinear los resultados y elegir la gemela, y después desarrollar una calificación que conecte ambas. El análisis para llevar a casa conserva su valor para la indagación extensa. La gemela puede ser una variación breve de caso, una explicación de una decisión clave o una defensa oral o multimedia breve.

La pregunta que acompaña es la de autoría. [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani y Buckingham Shum]] sostienen que la coautoría con IA generativa socava varias formas de evidencia de validez, y proponen la **integridad de la coautoría** como una fuente de evidencia de validez por derecho propio, que se infringe cuando un estudiante entrega contenido generado por IA que no entiende. Para comprobar la autoría a escala informan de un trabajo sobre un **AI Viva**: un agente conversacional que conduce una viva voce híbrida, formulando preguntas de comprensión de tipo y complejidad controlables, validado en profundidad por educadores expertos y especialistas en evaluación. Sopesemos eso frente a vigilarlo todo. Una defensa hablada del propio razonamiento escala donde la vigilancia en el aula no lo hace, y produce evidencia sobre la comprensión.

## Decida qué puede hacer la IA que usted entrega

Lo que importa es la diferencia entre una IA integrada y restringida y un chatbot sin vinculación. Las dos producen resultados distintos.

El [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|asistente AIDA de la Open University]] es el caso integrado mejor documentado: seis estudios iterativos de diseño durante 18 meses con 498 estudiantes y 20 miembros del personal, en una institución que atiende a más de 200.000 estudiantes en más de 50 países. En un ensayo aleatorizado exploratorio, el estudiantado que usó AIDA dedicó **el doble de tiempo** y visitó más páginas de su curso que el grupo de control, y el **96%** quería tener el asistente disponible en sus estudios formales. La experiencia de la misma institución con un chatbot externo y sin vinculación fue en sentido contrario.

La [[lock-integrating-ai-online-learning-higher-ed-2025|revisión de Lock, Arteaga y Johnson (2025)]], 63 citas en 32 países, añade una condición social: el estudiantado que usó ChatGPT *junto a* la tutoría del docente percibió mayores [[learning-gains|ganancias de aprendizaje]] que quien lo usó solo. Un asistente complementa al docente o sustituye la relación, y solo una de esas dos cosas es un diseño de curso.

Dos advertencias merecen peso. El fracaso de KhanMigo no fue técnico. El estudiantado no se implicó con el chatbot y la evidencia de ganancias era limitada, lo que apunta a la [[governance|preparación organizativa]] y al encaje instruccional. El lado docente tampoco está listo: en una comparación de la formación docente sudafricana, el TPACK autoinformado para la enseñanza de ciencias integrada con IA era del **64,0%** en una universidad con campus frente al **47,4%** en una universidad a distancia, con el conocimiento pedagógico como el dominio más débil en ambas ([[online-teaching-and-learning]]). Desplegar un asistente en un curso asíncrono no forma a quienes deben juzgar su salida.

## Califique el movimiento en una discusión

Los foros de discusión son donde un curso asíncrono construye [[community-of-inquiry|comunidad]] o se convierte sin ruido en un buzón de entregas. Dos hallazgos deberían moldear lo que automatiza allí.

El momento es la parte difícil. [[llm-facilitation-timing-online-discussions|Tsirmpas y sus colegas]] construyeron el corpus PEFK para comparar conjuntos de datos de facilitación y después realizaron el primer estudio del *momento* de la facilitación con facilitadores humanos expertos y jueces LLM. Los humanos eran más cautos a la hora de intervenir. Los LLM eran excesivamente entusiastas. Ambos se mostraban más seguros al juzgar que la facilitación **no** era necesaria que al juzgar que sí lo era. Los modelos clasificadores entrenados superaron a las configuraciones con LLM, y aun así los conjuntos de datos existentes limitaban el desempeño. Lectura práctica: mantenga la moderación autónoma fuera de la ruta crítica, y si usa IA en una discusión, configúrela para que se quede callada por defecto.

Los resúmenes ayudan al estudiantado a navegar un foro sin hacerlo participar. Con 128 estudiantes universitarios en tres iteraciones, [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao y Cukurova (2026)]] encontraron que los resúmenes de discusión generados por IA ampliaban la exposición a las aportaciones de los pares y reforzaban la conectividad de la red, esos vínculos débiles que la teoría del capital social llama puente, al reducir el esfuerzo de encontrar publicaciones significativas. No impidieron que la actividad de visualización declinara a lo largo del curso. El resumen es un [[scaffolding|andamiaje]] de navegación.

La estructura que se sostiene es una secuencia y no un hilo: **postura, impugnación, reconsideración**. El estudiantado se compromete con una interpretación fundamentada en el material del curso, luego se encuentra con otra perspectiva, un contraejemplo o una crítica, y después explica si su razonamiento se movió y cómo. Lo que usted califica es el movimiento entre ideas. Una publicación entregada más dos respuestas dejó de demostrarlo en el momento en que un agente pudo extraer las publicaciones de un par e imitar la historia de vida de un compañero para encargarlas.

Como lo que un agente imita es conducta de superficie, sus propias aportaciones se vuelven el recurso escaso. Responder mecánicamente a docenas de publicaciones individuales es la forma más débil de presencia docente; sintetizar a través de la discusión es la más fuerte: *tres supuestos no dejan de aparecer en sus análisis; varios de ustedes leyeron esta evidencia de manera distinta; este argumento convence hasta que introducimos este contraejemplo.* Eso es [[teacher-role|orquestación]] y no producción de mensajes.

La pregunta de marco que subyace a ambas es la de responsabilidad. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim y Anderson (2026)]] sostienen que la IA generativa desestabiliza el supuesto de la [[community-of-inquiry|comunidad de indagación]] de que los indicadores de presencia pueden atribuirse a humanos. Tratan la IA generativa como una condición epistémica y las presencias como logros sociotécnicos cuya relación con la calidad de la indagación depende de dónde se sitúe la responsabilidad humana. En concreto: decida y declare quién responde de qué en cada intercambio, en lugar de suponer que la presencia surge porque existe un foro.

## Mantenga el semestre en marcha sin un aula en la que entrar

Los formatos a ritmo propio presuponen la [[self-regulated-learning|autorregulación]] y rara vez la enseñan. La evidencia sobre qué conductas se correlacionan de verdad con mantenerse en la tarea es inusualmente práctica.

Al encuestar a 530 estudiantes universitarios con minería de reglas de asociación y agrupamiento, [[decreasing-digital-distraction-college-online-learning-2026|Shi et al. (2026)]] encontraron que las conductas de aprendizaje autorregulado, **el establecimiento de metas, la estructuración del entorno y la gestión del tiempo**, aparecían de forma más consistente con baja distracción digital, junto con el [[student-engagement|compromiso]] entre estudiante y docente, entre estudiante y contenido, y la competencia técnica. La dependencia de la búsqueda de ayuda entre pares y del compromiso entre estudiantes aparecía *menos* a menudo en los perfiles de baja distracción. Estructure el entorno y el calendario antes de diseñar otra actividad grupal.

La autorregulación tampoco es un rasgo fijo. A lo largo de un semestre completo con 75 estudiantes de primer año, [[song-genai-learning-partner-srl-over-time-2026|Song et al. (2026)]] la encontraron funcionando a la vez como aptitud estable y como estado fluctuante. Las líneas de base individuales se mantuvieron estables mientras el conocimiento metacognitivo y el [[well-being|bienestar]] declinaban de forma sistémica a lo largo del semestre, impulsados por exigencias del plan de estudios como las entregas importantes de evaluación. Agrupar las fechas de entrega puede ser una decisión administrativa eficiente, y también es un impuesto medible sobre la regulación de la que depende su formato.

La ventana de intervención es cognoscible. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries y Koprinska (2025)]] mostraron que el aprendizaje automático interpretable sobre registros de interacción con el contenido predice el progreso a nivel de módulo y señala resultados de abandono hasta **7-8 días antes de las fechas límite del módulo** en cursos de programación en línea a gran escala. Es aviso suficiente para enviar un recordatorio específico a un estudiante específico, lo que supera a descubrir el fracaso en el momento de calificar. Para el estudiantado [[adult-learning|adulto]] y a distancia, las directrices de diseño de AI-ALOE añaden la restricción que más importa: acceso móvil, capacidad sin conexión y disponibilidad asíncrona genuina, ya que estas personas estudian en fragmentos de tiempo entre otras obligaciones.

## Decida qué automatizar en la producción

Dos usos tienen evidencia razonable detrás, y ambos apuntan a la carga de trabajo del docente.

**Costo de producción.** [[mooc-to-maic|MAIC]] reformula la emisión del MOOC de "un vídeo para N estudiantes" como "N agentes para un estudiante", con agentes especializados de docente, asistente, compañero y analizador sobre una base de modelo compartida. Sus autores informan de que la producción de cursos se reduce de unos **25.000 dólares y 60 horas** por MOOC a **menos de 2 dólares y 30 minutos**, probado en Tsinghua en dos cursos con **más de 100.000 registros de aprendizaje de más de 500 estudiantes**, y publicado como código abierto en OpenMAIC. Los medios personalizados son la misma idea a nivel de activo: en un curso en línea grande, [[personalized-ai-generated-videos-preference-2026|Tomlinson et al. (2026)]] encontraron que el estudiantado prefería vídeos personalizados generados por IA frente a vídeos no personalizados grabados por una persona, y el efecto de la personalización pesaba más que el valor atribuido a un presentador humano.

**Navegación del foro.** El andamiaje de resumen descrito arriba redujo el costo de localizar buenas aportaciones sin añadir carga de lectura al docente.

Tres tareas se quedan con usted: decidir si un texto es el pensamiento propio del estudiante, juzgar si una discusión necesita intervención y calibrar la dificultad. El material generado también necesita revisión pedagógica antes de llevar crédito. La producción barata es una pregunta distinta de la del diseño sólido.

## Nombre el papel de la IA y compruebe que el estudiante conserva uno

"El estudiantado puede usar IA" es una especificación demasiado amplia para diseñar contra ella. Nombrar el papel es lo que hace diseñable una actividad, y los papeles tienen consecuencias para la presencia: un estudio sobre IA generativa en la educación de marketing distingue entre **tutor, compañero y herramienta**, muestra que cada uno influye de manera distinta en la presencia docente, social y cognitiva, y enumera las exposiciones éticas conocidas de privacidad de datos, plagio, dependencia y equidad en la evaluación ([[genai-marketing-education-roles-2026|IA generativa en la educación de marketing]]). El mismo modelo puede ser un interrogador socrático antes de una asignación, un crítico tras un primer borrador, una parte interesada simulada durante un análisis de caso, un oponente cuyo argumento hay que refutar, un tutor que da pistas durante la práctica o un editor que entra cuando ya existe el razonamiento sustantivo. Son actividades distintas, y confundirlas es como "se permite la IA" acaba significando "no se diseñó nada".

El [[scaffolding|andamiaje]] aporta la prueba. El apoyo debe ayudar a quien aprende a hacer lo que todavía no puede hacer solo, y debe retirarse a medida que se desarrolla la competencia. Un modelo que sigue entregando soluciones completas está haciendo la tarea. Para cada actividad con IA, usted debería poder terminar esta frase sin dudar:

*El trabajo de la IA aquí es _____, mientras que el trabajo del estudiante es ________.*

Si el segundo espacio contiene poco pensamiento, la actividad necesita un rediseño.

## Pídales juzgar una respuesta que no escribieron

La [[ai-literacy|alfabetización en IA]] abarca la evaluación crítica, el juicio [[metacognition|metacognitivo]] y saber cuándo prescindir de la herramienta. La confianza autoinformada es un mal indicador de la competencia demostrada.

Un cambio que cualquier curso asíncrono puede adoptar de inmediato: **a veces, entregue usted mismo la salida de la IA**. Entregue dos respuestas que compiten y pregunte cuál es más sólida y por qué. Pida la afirmación más débil, el supuesto que falta, la fuente no verificable, la explicación plausible que sin embargo es errónea. Pregunte qué evidencia les haría cambiar de opinión.

Formulada así, la capacidad que se califica es si un estudiante puede reconocer una respuesta que merece confianza, lo que se acerca más a lo que exige la disciplina y es mucho más difícil de delegar. Las [[verify-ai-output|prácticas de verificación]] son donde vive la técnica. Lo que importa aquí es situar la evaluación dentro de la tarea calificada en lugar de dejarla como consejo en un anuncio del módulo.

## En qué se equivocan los diseñadores instruccionales con los cursos asíncronos

La entrega es el problema, así que la entrega es lo que hay que arreglar. También es el único canal que tiene, y por eso apretar el artefacto por sí solo cambia poco. Añada un segundo canal: un registro del proceso, una explicación grabada, una medición sin ayuda.

Flexibilidad significa que el estudiante marca su propio ritmo. El formato presupone autorregulación, y el estudio semestral con 75 estudiantes muestra el conocimiento metacognitivo y el bienestar declinando a medida que se agrupan las fechas límite. El ritmo es una decisión de diseño que usted toma por ellos.

Un foro es participación, así que cuento publicaciones. La demostración con agentes descrita arriba produjo una publicación que extrajo contenidos de pares e inventó una historia de vida; un recuento no puede distinguirla de una buena. Los resúmenes de Hao y Cukurova mejoraron la navegación y aun así dejaron la actividad de visualización en declive.

Añadir un asistente hace que el curso esté integrado con IA. AIDA se construyó a propósito, se integró y se iteró a lo largo de seis estudios; un chatbot externo en la misma institución fue en sentido contrario, y el estudiantado de KhanMigo simplemente no se implicó.

Evidencia de proceso significa documentarlo todo. Recoger cada mensaje y cada pulsación produce papeleo y poco más. La versión que vale la pena calificar pide unos pocos puntos de decisión: qué evidencia se seleccionó, qué alternativa se rechazó, qué cambió tras la crítica.

## Lo que le van a responder

**"Son adultos que eligieron un curso asíncrono. Si dejan que la IA lo escriba, es su decisión."** El argumento de la elección se sostendría si el curso no certificara nada. Sí certifica. La evidencia de ALEKS muestra un atajo que produce una apariencia de competencia que no sobrevive a una comprobación vigilada, y el costo recae más tarde, en el siguiente curso, en el examen de habilitación profesional o en el empleo. Hay un borde de equidad: quienes tienen más probabilidades de delegar suelen ser quienes tienen menos tiempo, el grupo al que un curso asíncrono existe para servir.

**"La detección es la respuesta."** La detección está en disputa, y el resultado de la vigilancia muestra por qué el diseño supera a la vigilancia policial: el daño desapareció cuando cambiaron las condiciones. La detección también conlleva costos de falsos positivos y convierte la enseñanza en una carrera de armamentos. Rediseñe la tarea y conserve una medición sin ayuda. Véanse [[reduce-ai-cheating]] y [[redesign-assessment-ai-era]].

**"La presencia docente es imposible a distancia, así que lo asíncrono es inherentemente inferior."** La presencia en un curso asíncrono se diseña. La reconceptualización de la CoI citada arriba dice que sus indicadores son logros sociotécnicos en la era de la IA generativa, y el ensayo de AIDA duplicó el tiempo en la tarea en un curso sin ninguna sesión sincrónica.

**"Eso es vigilancia, y no la voy a imponer."** Es una posición defendible, y deja opciones abiertas. Los artefactos que revelan el proceso, la evaluación oral asíncrona y el AI Viva capturan el razonamiento sin vigilar la habitación de nadie. Si usa una condición vigilada, póngala en el programa, explique el razonamiento y limítela a las evaluaciones que certifican competencia.

**"Entonces hagámoslo todo sincrónico y vigilado."** Muchos estudiantes eligen el estudio asíncrono por el empleo, las responsabilidades de cuidado, la discapacidad o la geografía. La detección también tiene sus propios costos de equidad: las herramientas que marcan a quienes escriben en una lengua no nativa producen desproporcionadamente falsos positivos que penalizan el trabajo honesto ([[ai-detection]]). La alternativa proporcionada es un pequeño número de momentos de verificación dentro de un curso por lo demás flexible: una explicación breve grabada, una aplicación personalizada, una respuesta a una pregunta elegida por el docente, un rastro de decisiones anotado, una comprobación individual de bajo impacto. La verificación debería elevar la validez de su evidencia y conservar la flexibilidad que hacía que el formato valiera la pena.

## Lo que la evidencia aún no establece

La [[ai-distance-education-systematic-review-2026|revisión sistemática de la IA en la educación a distancia]] (56 artículos, 2020-2025) cubre la personalización (24 estudios), la evaluación y la retroalimentación (19), la interacción humano-IA (17) y la gobernanza y la equidad, y concluye que la base es de corto plazo y transversal, con poco trabajo longitudinal. La [[ai-student-engagement-online-learning-review-2025|revisión sobre IA y compromiso estudiantil en el aprendizaje en línea]] (24 estudios) se limita a una sola base de datos, trata solo el compromiso y confunde contextos sincrónicos con asíncronos, así que sus conclusiones no son específicas de lo asíncrono. La evaluación oral asíncrona se apoya en dos estudios en dos cursos. MAIC es un piloto. Los conjuntos de datos sobre el momento de la facilitación limitan el desempeño incluso con clasificadores entrenados. Ningún estudio de este conjunto sigue a una cohorte asíncrona el tiempo suficiente para mostrar si una evaluación rediseñada produce aprendizaje duradero o solo mejor evidencia de él. Todo ello es lo bastante sólido para cambiar su próximo curso y demasiado escaso para justificar una afirmación de política.

## Qué hacer esta semana

**1.** Elija su evaluación de mayor impacto y añada una condición que el estudiante complete sin ayuda. Explíqueles por qué existe.

**2.** Tome la asignación que la IA ahora completa de principio a fin y reescríbala para que el proceso sea el artefacto: un registro de decisiones, un borrador por etapas, una autoexplicación, una comparación de dos intentos.

**3.** Convierta una evaluación importante en una defensa oral asíncrona con rúbricas integradas, y fije el permiso de IA por tarea en el programa, donde el estudiantado vaya a leerlo de verdad.

**4.** Espacie las fechas límite importantes y reserve una ventana de 7-8 días antes de cada una para contactar al estudiantado cuyos datos de interacción se han quedado en silencio.

**5.** Pase tres preguntas por su asignación más débil. ¿Podría un sistema de IA completar esta actividad sin que el estudiante entienda el material? ¿Qué actividad cognitiva se supone que produce aquí el aprendizaje? ¿Qué evidencia mostrará que el estudiante realizó realmente esa actividad? Si la primera respuesta es sí y las otras dos son difíciles de responder, el problema está en el diseño del aprendizaje, y ninguna redacción de la política lo arreglará.

**Adónde ir después:** las reglas a nivel de curso corresponden a [[course-ai-policy]]; la reconstrucción de la evaluación se trata en [[redesign-assessment-ai-era]]; el problema de dependencia que subyace, en [[reducing-over-reliance]]; las cargas de trabajo del profesorado y lo que la IA elimina de forma realista, en [[ai-save-instructor-time]]; y la visión desde el diseño de la integración de la IA en una experiencia de aprendizaje, en [[designing-ai-into-learning]].
