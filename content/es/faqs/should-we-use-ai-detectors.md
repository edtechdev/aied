---
title: "¿Deberíamos usar detectores de IA?"
created: "2026-09-22T18:29:10-04:00"
updated: "2026-10-28T13:19:13-04:00"
connected_faqs: [redesign-assessment-ai-era, course-ai-policy, reduce-ai-cheating, addressing-common-misconceptions-ai-education]
weight: 85
foundations: [academic-integrity]
assessment: [ai-detection, assessment-validity]
ethics: [equity-in-ai-education, trust, privacy, ai-use-disclosure]
level: [higher ed]
audience: [instructors, administrators, assessment professionals]
institutions: [educational-policy-ai, governance]
source_updated: "2026-10-28T11:14:23-04:00"
translation_of: faqs/should-we-use-ai-detectors
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

Una puntuación de detector vuelve marcada en una entrega que usted ya ha leído dos veces, o un colega quiere activar la herramienta antes de la próxima fecha límite de un ensayo, o un panel de integridad le pide defender un hallazgo que se apoya en un porcentaje. Alguien en la sala dirá que la puntuación es solo una pieza de evidencia. Lo que usted está decidiendo es más estrecho que el debate que le sigue: si esta cifra puede tener peso en un proceso por mala conducta, y qué pondrá en su lugar si no puede.

La respuesta breve que puede repetir en la reunión: una puntuación de detector no puede fundamentar un hallazgo, porque no puede validarse contra la verdad de referencia, no puede someterse a contrainterrogatorio y no alcanza el equilibrio de probabilidades. Sus errores se repiten en patrones, y recaen con más fuerza sobre quienes editan con honestidad y sobre los estudiantes que escriben en una segunda lengua. Pregunte en cambio si un estudiante puede demostrar que comprende lo que entregó, y financie esa capacidad.

## La versión breve

**1.** Escriba en la política que el resultado de un detector nunca desencadena una consecuencia, nunca se sostiene solo y nunca fundamenta un hallazgo. Póngalo en el propio documento de política, donde un panel pueda encontrarlo cuando el memorando ya no exista.

**2.** Sustituya "¿usaste IA?" por "¿puedes mostrarme que entiendes esto?". Use una conversación breve, un borrador temprano o una explicación grabada.

**3.** Introduzca un paso autenticado o sin ayuda en cada tarea de alto riesgo, dimensionado según la capacidad de corrección que realmente tiene.

**4.** Pida al proveedor las tasas de error por escrito y luego intente reproducirlas en sus propias entregas. Vanderbilt lo intentó y desactivó la herramienta.

**5.** Mueva el dinero de una licencia de detección a capacidad de verificación y orientación. Hacia ahí apunta la queja documentada del profesorado.

## Decida si tiene un hallazgo o una pregunta

Son dos trabajos distintos y funcionan con evidencia distinta. Un hallazgo requiere evidencia que alcance el equilibrio de probabilidades, y una puntuación de detector no llega ahí por sí sola. No puede validarse contra la verdad de referencia, porque en las entregas reales nadie sabe cómo se produjo el texto, de modo que la validación se vuelve circular y las tasas de falsos positivos y falsos negativos solo significan algo dentro de una prueba controlada. La herramienta no publica umbrales ni datos de entrenamiento y no permite replicación independiente, lo que deja al estudiante señalado sin nada que responder y a usted sin nada que explicar ([[bassett-ai-detectors-education-2026]], [[teichmann-detecting-undetectable-misconduct-2026]]).

Combinar la puntuación con otras señales no repara esto. Los marcadores lingüísticos, las comparaciones de estilo, los juicios del [[llm|LLM]] y el silencio de un estudiante siguen sumando menos que el estándar. El silencio es el que hay que vigilar: los estudiantes conservan el derecho a no responder, y negarse no inclina la balanza. Lo que legítimamente puede preguntar es si el estudiante puede demostrar el [[learning-gains|aprendizaje]] que la [[assessment|evaluación]] dice medir, y una respuesta oral lo responde de una manera que una puntuación de similitud nunca logrará ([[bassett-ai-detectors-education-2026]]).

El binario también es la pregunta equivocada. El trabajo de los estudiantes se crea con frecuencia con IA, a lo largo de un continuo híbrido, y las políticas que dicen "en la evaluación" rara vez definen cuándo empieza una evaluación, lo que deja el juicio a quien lea el archivo primero ([[bassett-ai-detectors-education-2026]]).

Debajo de todo esto hay un problema de datos de referencia. Los detectores se entrenan y se prueban con escritura humana anterior a la IA generativa, y la propia validación de Turnitin usó 700.000 trabajos anteriores a 2019. Se supone que ese corpus representa la prosa estudiantil actual, un supuesto que nadie ha verificado y que cambia con cada nuevo modelo ([[bassett-ai-detectors-education-2026]]).

## Mire las cifras de exactitud antes de citar una

La prueba controlada más sólida de la base de conocimiento examinó 642 resúmenes publicados en inglés de cuatro dominios y dos periodos. Con un umbral de 0,50, dos detectores comerciales señalaron la edición ligera con IA y conforme a las directrices en el 38% al 80% de los casos, señalaron los originales sin modificar de 2023-25 en el 9% al 15% (el trabajo no [[stem-education|STEM]] muy por encima del STEM, p<0,001) y, una vez que el texto había pasado por un servicio de humanización, detectaron menos del 4% de las reescrituras etiquetadas como IA, una tasa de falsos negativos superior al 96%. Los autores lo llaman un catch-22 de la integridad: los estudiantes que declaran y editan poco son los que la herramienta detecta, y los que se proponen evadirla no. Su recomendación es explícita: las puntuaciones de detector no deberían servir nunca como evidencia única de mala conducta ([[karr-ai-detection-humanization-2026]]).

Una [[benchmark|prueba comparativa]] independiente llega al mismo punto desde otra dirección. Ninguna de 14 herramientas alcanzó el 80% de exactitud, y el simple parafraseo, la edición menor o un servicio de humanización reducen a la mitad aproximadamente incluso ese rendimiento. Con tasas base realistas, los falsos positivos superan a los verdaderos positivos ([[teichmann-detecting-undetectable-misconduct-2026]]).

Las tasas de detección en la generación íntegra son peores de lo que sugieren las cifras de error titulares. En un estudio de campo encubierto, los investigadores inyectaron entregas totalmente generadas por IA en un [[summative-assessment|sistema de examen]] en línea real de cinco módulos de psicología: el 94% pasó sin ser detectado, y el trabajo de la IA superó por término medio al del estudiantado real. Las trampas por encargo ya habían mostrado el mismo problema estructural, ya que no dejan un rastro fiable que encontrar ([[teichmann-detecting-undetectable-misconduct-2026]]).

La exactitud también se mueve con la tarea. Cuando los investigadores probaron si la [[generative-ai|IA generativa]] puede detectar su propia producción, los resultados fueron fiables para la programación y la escritura reflexiva extensa y pobres para las respuestas cortas, donde el modelo a menudo valoraba su propio texto como más humano que el trabajo auténtico de los estudiantes. Variaciones menores en la indicación reducían bruscamente la exactitud ([[llm-detecting-llm-generated-content-education]]). Un umbral que vale para una tarea fallará en otra, y no lo sabrá hasta la apelación.

Luego está la caducidad. Un estudio de 2026 replantea la detección como un problema de adaptación: un [[ren-test-time-adaptation-ai-text-detection-2026|ataque de reescritura de caja negra]] hizo caer al detector comercial Pangram a una exactitud equilibrada del 63,5% y a una recuperación de IA del 27,0%, y un detector entrenado con Llama 3.3 70B Instruct alcanzó solo un 55% de recuperación en resúmenes de un modelo más nuevo. La adaptación en tiempo de prueba se recuperó hasta el 94,4% de exactitud equilibrada y el 99% de recuperación en ese mismo texto, que es la mitad alentadora. El mismo artículo muestra lo que cuesta la solución: a medida que se extiende la adopción simulada de LLM, la recuperación de un detector supervisado fijo sobre texto humano decae del 85,9% al 73,4% a lo largo de la década. Su condición de caducidad se enuncia sin rodeos: la exactitud equilibrada no puede superar la mitad de uno más la distancia de variación total entre las distribuciones humana y de IA, de modo que la convergencia de ambas derrotaría a todo detector basado en aprendizaje. Una puntuación validada se sostiene hasta que los modelos se mueven, y se mueven cada pocos meses ([[ren-test-time-adaptation-ai-text-detection-2026]]).

Y la máquina nunca ha superado claramente a un lector atento. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall y Parapadakis (2025)]] informan de una detección automática de texto de IA o parafraseado de aproximadamente el 80%, frente al 78,4% de los revisores humanos, y citan evidencia de que el texto generado por IA ha pasado como escrito por humanos en hasta el 80% de los casos. Ese margen desaparece dentro de la banda de error que la persona ya aporta, que es demasiado estrecha para fundamentar un hallazgo ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

## Averigüe sobre quién recae el error

Los rasgos que los detectores leen como señales de IA, es decir, la densidad de tokens largos, la frecuencia de vocabulario académico y el estilo uniforme, son también rasgos de una escritura competente en una segunda lengua. La clasificación errónea sigue por tanto al origen lingüístico y no a la conducta, lo que convierte esto en una cuestión de [[equity-in-ai-education|equidad]] antes que en una cuestión técnica ([[teichmann-detecting-undetectable-misconduct-2026]]).

Ese sesgo aparece también fuera del inglés. Una [[kazakh-ai-text-detectors-2026|prueba comparativa con 3.811 pasajes cuya autoría humana anterior a ChatGPT es demostrable]] encontró que cinco detectores públicos entrenados en inglés, tal como se publicaron, señalan el 81,4% de los pasajes humanos en kazajo (TMR RoBERTa) y el 79,6% de los ensayos publicados de estudiantes kazajos (Desklib DeBERTa), con un 25,5% en Fakespot, y que recalibrarlos a una tasa de falsos positivos del 1% detecta como mucho el 1,3% del texto de máquina a cambio. La propia advertencia del estudio importa cuando se cita: los pasajes humanos son texto público anterior a ChatGPT tal como se encontró, no ensayos de estudiantes, así que sus tasas educativas son las cifras menos seguras que reporta ([[kazakh-ai-text-detectors-2026]]).

La disciplina añade otro eje. Los resúmenes no STEM se señalaron muy por encima de los STEM en el estudio de 642 resúmenes, lo que refleja las convenciones de escritura de esos campos y no la conducta de sus autores ([[karr-ai-detection-humanization-2026]]). Dos herramientas comerciales ampliamente usadas midieron 0,69 y 0,61 de exactitud en una comparación, y ambas fallaron con texto híbrido humano-IA ([[hadra-ai-detector-accuracy-efl-2026]], [[van-vlasselaer-ai-detector-reliability-2026]]). Un detector es una prueba de estilo, y el estilo que castiga sigue el origen lingüístico, la disciplina y el registro. Nada de eso es un hecho sobre si un estudiante usó IA, y todo ello es un hecho sobre el estudiante. El patrón más amplio está documentado en [[differential-effects-across-learner-groups|Efectos diferenciales entre grupos de aprendices]].

Parte del costo aparece antes de cualquier audiencia. Como los procesos formales exigen una prueba de grado de detección que en la práctica no está disponible, el profesorado acaba con lo que un relato profesional llama "sospecha sin recurso", mientras el estudiantado [[student-rationalization-ai-writing|racionaliza]] su propio uso y los expedientes se estancan ([[best-response-student-ai-dialog-2026]]). El costo en [[trust|confianza]] recae sobre la relación de la que depende el proceso.

## Cambie la pregunta que le hace al estudiante

La Universidad Grand Canyon pasó de "¿Usó IA este estudiante?" a "¿Puede este estudiante demostrar que comprende lo que entregó?", con conversaciones breves, borradores tempranos y explicaciones grabadas, implementado en toda la institución en otoño de 2025. El argumento es práctico: el profesorado ya está cualificado para juzgar la comprensión, y el cambio le devuelve su autoridad en lugar de dejarlo esperando una prueba que nunca llegará ([[best-response-student-ai-dialog-2026]]).

Esto también cambia lo que un estudiante puede hacer con la acusación. Si se le muestra la preocupación y se le pide explicarla, puede resolverla. Si se le muestra un porcentaje, solo puede negarlo.

## Lleve la conversación de modo que resista una revisión

Trate una conversación de verificación como un paso del proceso, con aviso y registro, y resistirá cuando alguien lea el expediente un trimestre después.

Empiece por el aviso. Diga al estudiante qué motivó la preocupación, en lenguaje llano, y para qué sirve la conversación. Si la preocupación vino de una puntuación de detector, dígalo, y diga que la puntuación no es un hallazgo. Dígale a un estudiante solo que está acusado de hacer trampas y la reunión se convierte en una defensa de su carácter y no en un relato del trabajo.

Después pregunte por el trabajo mismo. Qué afirmación intentaba sostener en esta sección. De dónde salió esta evidencia. Por qué la organizó así. Qué descartó. Un estudiante que escribió el texto puede responder esto en el nivel de las decisiones. El que no lo escribió responderá en el nivel del tema, y la diferencia aparece rápido sin que nadie tenga que probar la intención.

Mantenga intacto el derecho al silencio. Negarse a responder no concede nada, y un procedimiento que trata la negativa como una admisión no sobrevivirá a una apelación. Registre qué se preguntó, qué se respondió y qué se declinó responder.

Cierre con una decisión que pueda enunciar sin la puntuación. O el estudiante demostró la comprensión que mide la evaluación, o hay una preocupación separada y sustantiva sobre el trabajo que usted puede describir con sus propias palabras. Si ninguna de las dos cosas es cierta, el expediente termina ahí. Ese desenlace es normal y debería quedar registrado como tal, porque un proceso que solo registra culpa enseña al siguiente panel que la sospecha es lo mismo que un hallazgo.

## Ponga en la tarea un paso en el que la herramienta no pueda meterse

Las evaluaciones orales asincrónicas, construidas como consignas de último momento con respuestas grabadas breves y de tiempo limitado, calificadas con rúbricas integradas, rindieron de forma comparable a exámenes presenciales de opción múltiple en un estudio y significativamente mejor en otro, con estudiantes que informaron de una preparación más activa y una mayor relevancia profesional percibida. Para un [[administrator|administrador]], la propiedad que importa es que esto escala sin vigilancia ([[asynchronous-oral-assessment-2026]]).

Rediseñar la tarea hace más trabajo que blindar la comprobación. Un estudio de caso con estudiantes de grado de economía encontró que solo alrededor de un tercio declaraba algún uso de IA, con una declaración aún más rara, y leía la no declaración como una cautela racional bajo una política ambigua y no como deshonestidad. Esos mismos estudiantes preferían tareas realistas y basadas en datos como solución ([[kirsanov-beyond-detection-ai-online-assessments-2026]]). Esperar, declarar y escudriñar el uso de IA supera a vigilarlo, porque la [[authentic-assessment|autenticidad]] tiene que diseñarse y no imponerse ([[beyond-detection-authentic-assessment-ai-2025]]).

De ahí se siguen dos decisiones. El tamaño va primero. Una comprobación oral breve en cada entrega importante es asequible en un seminario. En una clase magistral de trescientos, lo que sobrevive a la semana diez son los borradores por etapas y una comprobación por muestreo del trabajo anómalo. Elija la versión que todavía pueda ejecutar en la última semana del curso con las horas de corrección que tiene, porque un paso autenticado que se derrumba bajo carga le devuelve al artefacto.

Los puntos van después. Si una justificación, un historial de borradores o una reflexión sobre una sugerencia de IA rechazada no puntúa nada, se producirá en cinco minutos y no la leerá nadie, y los estudiantes optimizarán para la parte que se califica. Deles peso suficiente para que saltarse el paso cueste más que hacerlo.

## Haga que declarar sea la opción barata

Las políticas vagas o punitivas empujan a la ocultación. Los marcos de declaración específicos vinculados a etapas cognitivas, acompañados de la garantía de que una declaración veraz no se penaliza, extraen más información de los estudiantes que la vigilancia ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). La pregunta de diseño es qué respuesta facilitan sus reglas al estudiante tentado de ocultar, y una regla que trata una declaración como una confesión la ha respondido mal.

La redacción hace casi todo el trabajo aquí. Una declaración que pide marcar una casilla y luego queda sin leer en un sistema de entregas les enseña que declarar es teatro, y la siguiente promoción lo aprende más rápido. Una declaración asociada a una etapa del trabajo, que pregunte para qué se usó la herramienta en esa etapa y qué hizo el estudiante con el resultado, le da algo que realmente puede leer y le da al estudiante una razón para ser exacto.

## Redacte las cláusulas que le mantienen fuera de una audiencia

La exposición rara vez empieza como litigio. Aparece primero como una apelación interna o una queja ante un regulador, y lo primero que se pone a prueba es el procedimiento. La justicia natural exige que se informe al estudiante de la acusación y se le dé la oportunidad de responder antes de cualquier determinación, y esa oportunidad suele ser una reunión de investigación o una entrevista ante un panel cuyo registro se convierte en evidencia. Los hallazgos alcanzados sin ese paso son vulnerables incluso cuando la sospecha de fondo era razonable ([[munoz-misconduct-allegation-evidence-2026]]).

Los estándares de evidencia van después. Los hallazgos de mala conducta necesitan evidencia que alcance el equilibrio de probabilidades, y si su caso no puede enunciarse sin la puntuación del detector, el caso es débil a primera vista ([[bassett-ai-detectors-education-2026]]). Cuando el caso se apoya solo en el estilo, una vía de verificación oral corresponde al procedimiento y no a la buena voluntad de quien preside el panel.

El alcance es lo tercero. Las prohibiciones generales de IA que no separan la transcripción y el OCR del borrado generativo pueden retirar una herramienta de apoyo de la que dependen estudiantes con condiciones que afectan el control motor, la legibilidad de la escritura a mano o la precisión al teclear, varias de las cuales se han descontinuado con la transcripción por IA cubriendo el hueco. Eso es exposición legal además de imprecisión ([[wright-transcription-not-generation-2026]]). Nombre las herramientas [[assistive-technology|de apoyo]] y de transcripción en el texto de la política.

Las compras son lo cuarto. Los detectores almacenan el trabajo de los estudiantes en servidores de terceros, a veces en el extranjero y con protecciones de [[privacy|privacidad]] más débiles, lo que pone la filtración, la retención y el uso comercial posterior en el registro de riesgos de su institución y no en la página de marketing del proveedor. Los términos deberían cubrir la retención, el uso para el [[llm-training-and-fine-tuning|entrenamiento de modelos]], la ubicación del almacenamiento, la notificación de filtraciones y los derechos de apelación ([[bassett-ai-detectors-education-2026]]). El relato de la base de conocimiento sobre la exposición legal está en [[legal-issues-and-risks]], y es honesto sobre sus límites: documenta procedimientos, categorías de evidencia y fiabilidad de instrumentos, no resultados litigados.

Lo que reduce el riesgo es lo procesal. Nunca trate un resultado como evidencia única ni como disparador automático. Documente el estándar que aplica su proceso. Dé aviso y una oportunidad real de responder con registro. Ofrezca verificación cuando el caso se apoya en el estilo. Conserve la pista de auditoría que muestra que todo eso ocurrió.

## Pruebe la redacción con cuatro casos

El lenguaje de las políticas falla en los casos que nadie imaginó cuando se escribió. Pase estos cuatro por su borrador antes de que llegue al comité y anote dónde el texto no tiene respuesta.

Un estudiante que pasó un borrador por una herramienta de traducción. La política tiene que decir si la traducción cuenta como uso de IA, y si cuenta igual para un estudiante que escribe en una segunda lengua que para uno que escribe en la primera. Si guarda silencio, el panel improvisará, y la improvisación es donde empieza el argumento de equidad.

Alguien que usó IA para el esquema y escribió cada párrafo por su cuenta. Bajo una regla que pregunta si la IA tocó el trabajo, este estudiante está en la misma categoría que quien generó la entrega entera. Bajo una regla vinculada a pasos, no lo está, y usted puede decir por qué. Esa diferencia es el constructo, y la política tiene que nombrarlo.

Alguien que generó el texto y no puede explicarlo. Este es el caso para el que está construido su proceso, y es el que se resuelve sin una puntuación de detector.

Un estudiante que usa transcripción porque teclear no es fiable. Nombre las herramientas [[assistive-technology|de apoyo]] como una categoría separada con su propia vía, para que un ajuste razonable no se convierta en una acusación.

## En qué se equivocan los administradores sobre los detectores

**La tasa de falsos positivos publicada por un proveedor es una cifra de riesgo sobre la que se puede presupuestar.** Vanderbilt licenció un detector que anunciaba una tasa de falsos positivos del 1%, luego intentó validar la cifra y no pudo. Con 75.000 entregas anuales, el 1% implicaba aproximadamente 750 estudiantes mal etiquetados. La universidad desactivó la herramienta ([[teichmann-detecting-undetectable-misconduct-2026]]). Una tasa que no puede reproducir en su propio corpus es una cifra de marketing, y los estudiantes mal etiquetados siguen siendo suyos para procesarlos.

**La detección disuade a los estudiantes que de otro modo harían trampas.** La disuasión pasa por la discriminación del detector entre el uso oculto y el trabajo legítimo, no por su tasa bruta de detección. Cuando la sensibilidad añadida produce más falsos positivos nuevos que verdaderos positivos nuevos, una vigilancia más fuerte hace relativamente más atractiva la ocultación, de modo que gasta credibilidad en estudiantes que no hicieron nada malo más rápido de lo que identifica a los que sí ([[mohamed-temimi-assessment-imperfect-information-disclosure-2026]]). El metaanálisis de Krou et al., citado en la misma revisión, encuentra que la autoeficacia se correlaciona negativamente con las trampas mientras que la capacidad real no se correlaciona inversamente con ellas en absoluto, así que los estudiantes capaces pueden hacer trampas cuando juzgan que la evaluación es injusta. La detección no es ni un instrumento fiable ni un elemento disuasorio evidente ([[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]]).

**Una puntuación más un par de indicadores suma un caso.** No lo hace. El estándar es evidencia que alcance el equilibrio de probabilidades, y las puntuaciones combinadas con marcadores, comparaciones de estilo, juicios de LLM o silencio siguen quedándose cortas. Una prueba que vale la pena aplicar es si diría el razonamiento en voz alta en una audiencia ([[bassett-ai-detectors-education-2026]]).

**Una licencia de detector cuesta menos que rediseñar la evaluación.** La licencia es la partida más pequeña, y conlleva exposición en protección de datos, trabajo de compras y un flujo permanente de apelaciones construido sobre un instrumento cuyo error sigue patrones por origen lingüístico. El profesorado describe la experiencia como "sospecha sin recurso", así que la partida presupuestaria que cambia resultados es la capacidad de verificación y la orientación ([[best-response-student-ai-dialog-2026]]).

**Una prohibición general protege a la institución.** Las reglas demasiado amplias pueden eliminar un ajuste razonable e invitar al argumento de discriminación que usted intentaba evitar, porque el error que producen se concentra en grupos identificables en lugar de repartirse por igual ([[wright-transcription-not-generation-2026]], [[hadra-ai-detector-accuracy-efl-2026]]).

## Lo que le van a responder

**"Nuestro proveedor anuncia una tasa de falsos positivos del 1%."** El detector licenciado de Vanderbilt afirmaba exactamente eso, y la afirmación no sobrevivió al intento de la universidad de validarla. Las pruebas comparativas independientes no sitúan ninguna herramienta por encima del 80% de exactitud ([[teichmann-detecting-undetectable-misconduct-2026]]). Pida el estudio de validación y el corpus con el que se hizo, y luego pida hacerlo usted mismo.

**"Solo lo usamos como una pieza de evidencia."** El estándar es evidencia que alcance el equilibrio de probabilidades, y una puntuación combinada con marcadores, comparaciones de estilo, juicios de LLM o silencio sigue sin satisfacerlo ([[bassett-ai-detectors-education-2026]]). Si el panel no aceptaría el razonamiento dicho en voz alta, el expediente no debería contenerlo.

**"Si dejamos de detectar, ganan las trampas."** Las trampas ya se cuelan por estas herramientas. El 94% de las entregas de IA inyectadas pasaron desapercibidas en un examen en línea real, la humanización derrota la detección más del 96% de las veces, y las trampas por encargo ya no dejaban rastro fiable. Lo que los detectores sí detectan, con fiabilidad medida, es la edición ligera honesta y la prosa no nativa ([[teichmann-detecting-undetectable-misconduct-2026]], [[karr-ai-detection-humanization-2026]]).

**"Solo lo usamos en privado, para iniciar una conversación."** Ese es el uso menos dañino, y aun así cuesta algo, porque los estudiantes con más probabilidades de ser señalados son los que tienen menos probabilidades de estar haciendo un mal uso de la IA. La sospecha recae entonces sobre las personas equivocadas antes de que empiece cualquier conversación ([[teichmann-detecting-undetectable-misconduct-2026]]). La respuesta de Grand Canyon fue dejar de partir de la sospecha ([[best-response-student-ai-dialog-2026]]).

**"Un estudiante que no tiene nada que esconder no tiene nada que temer."** El estudio de 642 resúmenes encontró que la edición ligera conforme a las directrices se señalaba en el 38% al 80% de los casos con un umbral de 0,50, y la prueba comparativa kazaja encontró que el 81,4% y el 79,6% de pasajes demostrablemente humanos fueron señalados por detectores tal como se publicaron ([[karr-ai-detection-humanization-2026]], [[kazakh-ai-text-detectors-2026]]). Un historial limpio no ofrece protección cuando la señal es el estilo. Por eso también los autores kazajos señalan sus propias tasas educativas como la cifra más débil del estudio, y por eso no debería citarlas como una tasa de ensayos de estudiantes.

**"¿No basta con exigir una declaración y tratar la ausencia como culpa?"** Una declaración ausente no es evidencia de uso oculto, y tratarla como tal hace racional la ocultación. Los marcos específicos vinculados a etapas cognitivas, con la declaración veraz protegida de penalización, extraen más información que la vigilancia ([[gonsalves-student-non-compliance-ai-declarations-2025]], [[chang-should-i-tell-my-teacher-ai-disclosure-2026]]). La evidencia de esta página se refiere a qué produce la declaración. No dice nada sobre cuántas trampas evita un régimen de declaraciones.

## Qué hacer esta semana

**1.** Abra su procedimiento de mala conducta y localice cada punto en el que una puntuación de detector podría desencadenar un paso. Escriba una frase que elimine el disparador y llévela a quien sea responsable del documento.

**2.** Escriba al proveedor para pedir el estudio de validación que respalda la tasa de error anunciada y pregunte qué corpus usó.

**3.** Elija su tarea de mayor riesgo y añada un paso autenticado que pueda calificar en el tiempo que tiene.

**4.** Redacte las tres preguntas que hará a un estudiante señalado, empezando por qué intentaba sostener y cómo lo comprobó.

**5.** Envíe las cláusulas de compras y de accesibilidad a la oficina que firma los contratos, con los términos de retención, uso para entrenamiento y filtraciones explicitados.

## Adónde ir después

El compañero del lado del diseño es [[reduce-ai-cheating|¿Cómo puedo reducir las trampas con IA en mi curso?]], y [[redesign-assessment-ai-era]] lleva más lejos el argumento sobre la evaluación. [[course-ai-policy]] cubre cómo redactar y comunicar una política de curso, y [[ai-literacy]] cubre lo que los estudiantes necesitan saber para trabajar con estas herramientas sin perder el trabajo mismo. Las páginas de concepto que sostienen el argumento son [[academic-integrity]], [[equity-in-ai-education]] y [[legal-issues-and-risks]]; las cláusulas específicas de detección anteriores son la capa institucional de [[educational-policy-ai]].
