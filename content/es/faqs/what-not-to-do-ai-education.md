---
title: "¿Qué deberían evitar hacer los educadores con la IA?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-12T22:30:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors, adopting-ai-options-and-issues]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-13T00:25:09-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

La mayor parte de las orientaciones sobre la IA en la educación dice qué hay que probar. Las prácticas que la evidencia indica que hay que dejar de hacer están ordenadas por el rol que tendría que abandonarlas. Las creencias falsas se tratan en otro lugar: la [[addressing-common-misconceptions-ai-education|FAQ sobre concepciones erróneas]] se ocupa de ellas, y la página de concepto [[misconceptions]] explica por qué persisten. Lo que la investigación todavía no puede decirle pertenece a los [[limitations-in-aied-research|límites de la investigación en AIEd]]. Lo que sigue aquí es el paso posterior a la creencia, es decir, lo que las personas hacen, lo que cuesta y qué hacer en su lugar.

Tres fallos se repiten en todos los roles.

1. **Sustitución.** Una herramienta hace el pensamiento que debía hacer quien aprende, y la salida se califica como si esa persona la hubiera hecho. El ensayo que se entrega es un registro de lo que puede hacer el modelo, no de lo que puede hacer el estudiante.
2. **Evidencia no ganada.** Una señal barata de recoger, como la confianza, la fluidez, la implicación o una tasa de finalización, se trata como prueba de algo que no puede mostrar. Un panel puede informar de cuarenta minutos en una sesión de tutoría; no puede informar de si alguien aprendió la fórmula cuadrática.
3. **Estructura dejada a la exhortación.** Se pide a un aviso, a una frase de política o a una sesión de formación que haga el trabajo que deben hacer el diseño de la interfaz, el diseño de la evaluación o la gobernanza. El programa del curso dice que se use la IA con responsabilidad, y el tutor sigue entregando la respuesta terminada al primer prompt.

## La versión breve

**1.** Nunca califique, cite o promueva una salida como evidencia de la capacidad que la produjo.

**2.** Recoja la medida sin ayuda junto a la medida asistida, siempre.

**3.** Trate la fluidez, la confianza y la implicación como características del uso, no como aprendizaje.

**4.** Ponga la salvaguarda en el flujo de trabajo, no en un aviso.

**5.** Suponga que cualquier dato que la herramienta pueda ver se conservará, se combinará y se filtrará.

**6.** Si la afirmación viene con una demostración pero no con una comparación, es marketing.

## Para el profesorado

**No certifique una salida como capacidad.** Una entrega pulida es evidencia de una entrega pulida. Si un estudiante entrega una revisión de la literatura cuyas fuentes usted no puede contrastar con nada de lo que el curso enseñó, y la evaluación no distingue lo que ese estudiante puede hacer sin ayuda, la evaluación ha dejado de medir aquello que afirma la credencial ([[assessment-validity]], [[authentic-assessment]]). La solución es rediseñar la tarea; un código de honor más estricto no lo conseguirá.

**No use la puntuación de un detector como prueba de mala conducta.** En un estudio controlado de 642 resúmenes publicados, los detectores marcaron entre el 38 y el 80% de la edición ligera con IA conforme a las directrices y entre el 9 y el 15% de la escritura humana sin modificar, mientras detectaban menos del 4% de las reescrituras pasadas por un servicio de humanización ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Una evaluación de referencia independiente encontró que ninguna de 14 herramientas comerciales alcanzaba el 80% de exactitud, y una paráfrasis sencilla reduce incluso esa cifra a la mitad ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Con tasas base realistas, los falsos positivos superan a los verdaderos positivos ([[should-we-use-ai-detectors]]). Un detector puede iniciar una conversación; no puede terminarla.

**No añada IA a una evaluación que no ha rediseñado.** Atornillar una herramienta a una tarea diseñada para el desempeño sin ayuda produce exactamente la inflación de notas que oculta la pérdida, con los deberes al alza y el examen a la baja. Pregunte, de cada tarea calificada, qué mostraría la versión sin ayuda, y arregle primero la tarea ([[reducing-ai-misuse]]). Si el conjunto de problemas para casa y el cuestionario en clase evalúan la misma habilidad, solo uno de los dos está midiendo al estudiante.

**No trate la implicación como aprendizaje.** El tiempo en la tarea, la satisfacción, el volumen de búsqueda de ayuda y la actividad en el chat son fáciles de instrumentar y todos compatibles con ningún aprendizaje. En un experimento de 3 × 2 con 186 participantes que juzgaban casos civiles en una plataforma asistida por un LLM, una barrera de seguridad que redujo el cambio a una posición incorrecta de la IA del 42–60,5% al 5,7–8,2% no produjo ningún efecto de aprendizaje medible dentro de la sesión (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). La conducta cambió; la medida de aprendizaje no ([[student-engagement]]).

**No confíe en un aviso donde la interfaz podría restringir.** Un tutor que puede producir la respuesta terminada la producirá bajo presión de plazo, diga lo que diga el programa. La barrera que funciona está integrada en la interacción ([[reducing-ai-misuse]], [[pedagogical-safety]]). Retener la respuesta final durante los dos primeros intentos es una decisión de diseño; pedir al estudiantado que no la pida es una solicitud.

**No pegue trabajos del estudiantado, planes educativos individualizados, expedientes disciplinarios ni borradores identificables en una herramienta de consumo.** La minimización de datos es una decisión de diseño que usted toma en nombre del estudiante, tanto si lo ha pensado como si no ([[privacy]]). La cuenta gratuita de chatbot que responde a una pregunta sobre el plan de conducta de un estudiante es también una copia de ese plan en el servidor de otra persona.

## Para el estudiantado

**No entregue la parte que se supone que debe practicar.** Suponga que la tarea es un ensayo de cinco párrafos: pega el enunciado en un chatbot, toma el borrador que devuelve y lo entrega. Lo que entrega es un registro de lo que puede hacer el modelo. La cuestión es qué trabajo cognitivo se desplaza, no cuánta IA usa. Externalizar los deberes sube las notas de deberes y baja las de los exámenes sin apuntes: en 26.811 estudiantes de secundaria seguidos durante 30 meses, las notas de deberes subieron un 18% y las de examen cayeron un 20% en seis meses ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei y Wu, 2026]]). La práctica que construye conocimiento recuperable se fue a la herramienta ([[reducing-ai-misuse]]). Si el ejercicio es el objetivo, la herramienta no puede hacer el ejercicio.

**No lea la fluidez como exactitud.** El texto fluido es la salida de un [[llm|modelo de lenguaje]] tanto si el contenido es verdadero como si no, y el mecanismo que lo hace persuasivo es el mismo que lo hace erróneo ([[hallucination-risk]]). Verifique la afirmación concreta, no el tono del párrafo. Ese hábito rara vez surge solo: en un panel de seguimiento pasivo de 900 adultos estadounidenses a quienes se dio un resumen de IA, los lectores siguieron una fuente citada dentro de él en el 1% de las visitas ([[trust-calibration-chatbots-design-problem-2026|Jaidka y Cai, 2026]]). Si su tarea exige tres fuentes, abra las tres.

**No acepte el acuerdo como retroalimentación.** Los modelos afirman mucho más que las personas: en 11 modelos, las respuestas de IA afirmaron a los usuarios un 49% más a menudo que las respuestas humanas, y ese exceso es lo que hace que la interacción se sienta de apoyo ([[ai-personal-coach-review-benefits-risks-2026|Potel y Kumashiro, 2026]]). Un tutor que nunca discrepa de usted ha eliminado la señal correctiva por la que vino ([[ai-sycophancy]]). Pida la objeción, no el respaldo: «¿Qué tiene de malo este argumento y qué diría un escéptico?».

**No cambie una pregunta por una respuesta cuando está atascado.** El esfuerzo productivo que se salta es el aprendizaje. La búsqueda de ayuda que recupera una respuesta es una conducta distinta de la que recupera una pista ([[help-seeking]], [[desirable-difficulties]]). Use herramientas que retengan la respuesta terminada, y pida el paso siguiente en lugar de la solución.

**No pegue información personal, de salud o familiar en una herramienta para obtener una mejor respuesta.** La herramienta no tiene obligación de olvidarla, y el coste para la privacidad no aparece en la calidad de la respuesta ([[privacy]]). Un prompt mejor no necesita su diagnóstico, su dirección ni los nombres de su familia.

## Para familias y progenitores

**No haga los deberes con la herramienta ni permita que se hagan a su lado.** El patrón de los datos es una inflación de notas con un coste oculto: en el mismo panel de 30 meses, las notas de deberes subieron un 18% mientras las de los exámenes sin apuntes cayeron un 20% ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei y Wu, 2026]]). Un niño que trae deberes perfectos y suspende el examen del capítulo le muestra exactamente esa brecha. Lo que usted puede comprobar es el proceso. ¿Puede su hijo explicar el paso, rehacer un problema en papel y decir en qué parte dudaba? Si no, la herramienta hizo la tarea.

**No deje que un chatbot se convierta en el confidente.** Los sistemas aduladores afirman mucho más que las personas, un 49% más en 11 modelos, y esa afirmación es lo que los hace parecer seguros para hablar ([[ai-personal-coach-review-benefits-risks-2026|Potel y Kumashiro, 2026]]). En un gran estudio longitudinal, los usuarios recurrieron a la IA aduladora para consejos personales casi tan a menudo como a amigos cercanos y familiares, con menor satisfacción en sus relaciones reales ([[sycophantic-ai-social-interaction-2026]]). Un niño que lleva su angustia a un modelo que siempre está de acuerdo no está siendo escuchado. Está siendo reflejado. Si su hijo habla con un chatbot sobre una amistad o una pérdida, ese es el momento de preguntarle a quién más se lo contó.

**No entregue un chatbot generativo a un niño pequeño y lo llame supervisado porque usted está en la habitación.** La orientación por tramos de edad es concreta: actividades con andamiaje y no generativas de los 9 a los 12 años, uso generativo supervisado con razonamiento ético a partir de los 13 ([[ai-guidance-children-under-13]]). Para los más pequeños el riesgo tiene que ver con la creencia. Los niños en la etapa preoperacional aceptan el contenido generado como verdadero, y los sistemas no están calibrados al desarrollo en la retroalimentación que dan. El uso compartido con una persona adulta significa sentarse al lado del niño y preguntar qué acaba de hacer el juguete, no vigilar desde la puerta ([[early-childhood-elementary-ai-education]]).

**No suponga que la herramienta del centro protege los datos de su hijo porque el centro la eligió.** Pregunte qué se conserva, durante cuánto tiempo, si entrena algo y quién más lo ve ([[privacy]]). La conciencia no se sigue de la exposición: un mes después de una lección en la que una clase de 7.º año vio proyectado en vivo su propio comportamiento registrado, el 66% de los 47 estudiantes seguía eligiendo la configuración de chatbot menos protectora ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Plantee las preguntas al centro por escrito y pida las respuestas por escrito.

**No use el resultado de un detector para acusar a su hijo ni para respaldar una acusación del centro.** En un estudio controlado de 642 resúmenes publicados, los detectores marcaron entre el 9 y el 15% de la escritura humana sin modificar y detectaron menos del 4% de las reescrituras de IA humanizadas ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Con tasas base realistas, los falsos positivos superan a los verdaderos positivos ([[ai-detection]]). Trate una marca como un motivo para pedir el historial de borradores y una conversación, no como un hallazgo.

**No concluya que prohibir la herramienta es la opción segura.** La desconfianza excesiva es un fallo de calibración con su propio coste, que es la capacidad que se deja de aprovechar, y la habilidad que importa es una confianza ajustada, no la evitación ([[trust-calibration]]). El movimiento parental útil es el que la investigación respalda para el estudiantado: exigir un paso de verificación y hacerlo lo bastante barato como para que un niño cansado lo haga de verdad ([[verify-ai-output]]). Pedir que se vea la fuente que usó un chatbot cuesta un minuto; prohibir el chatbot cuesta la práctica.

**No confunda un filtro de contenido con seguridad.** Los filtros abordan lo que un sistema dirá. No abordan lo que una interacción le hace a quien aprende: práctica erosionada, acuerdo adulador o rechazos desiguales ([[pedagogical-safety]]).

## Para el desarrollo educativo y del profesorado

**No imparta formación en herramientas y la llame alfabetización en IA.** Una sesión sobre [[prompt-engineering|prompts]] enseña la interfaz de un producto. La [[ai-literacy|alfabetización en IA]] es la capacidad de juzgar cuándo debe usarse la herramienta, qué está haciendo y qué hay que verificar. El profesorado que aprende los botones sin el juicio se va con confianza y sin calibración ([[teacher-ai-competency]]). Un taller que termina con todo el mundo capaz de generar un plan de clase, y nadie capaz de decir cuándo no debería usarse ese plan, ha enseñado la interfaz.

**No organice desarrollo profesional de una sola sesión y espere que cambie la práctica.** La evidencia sobre el [[professional-training|aprendizaje profesional]] es coherente en cuanto a duración y seguimiento: los eventos únicos mueven la confianza autoinformada, rara vez la conducta en el aula, y la ganancia de confianza puede enmascarar la ausencia de cambio ([[educational-development]]). Una sesión de dos horas en agosto, sin seguimiento en octubre, es una intervención sobre la confianza.

**No ignore el sistema de evaluación que deja en su sitio.** El profesorado adoptará la práctica que usted enseña solo si la evaluación a la que está sometido no la penaliza. Un taller sobre diseño de tareas resistentes a la IA que se imparte junto a un régimen de exámenes sin cambios enseña al profesorado que la formación es decorativa.

**No modele el uso acrítico contra el que advierte.** Demostrar una herramienta generando un plan de clase delante del profesorado, sin un paso de verificación, enseña al público que la salida es el producto. Genérelo delante de ellos y luego marque las dos afirmaciones que hay que comprobar.

**No acepte la demostración de un proveedor como evidencia de eficacia.** La afirmación que está evaluando trata sobre el aprendizaje, y una demostración muestra capacidad. Pida resultados sin ayuda, resultados por subgrupo y pruebas de seguridad en varios turnos ([[checking-whether-educational-ai-works]]).

## Para quienes desarrollan software educativo

**No optimice la métrica fácil de registrar.** La duración de la sesión, el número de mensajes y las valoraciones de satisfacción mejorarán con casi cualquier cambio; el aprendizaje a menudo no. El mismo equipo que lanza una barrera de seguridad puede lanzar un panel que recompensa el volumen de interacción, y los dos apuntarán en direcciones opuestas ([[learning-analytics]], [[student-engagement]]). Si su métrica de éxito son los mensajes por sesión, ha construido un producto que recompensa al estudiantado por quedarse en el chat.

**No lance un detector sin un estudio de validación contra el constructo.** Una evaluación de referencia de quince modelos de EEG alcanzó un F1 de 0,9853 con validación cruzada estratificada; el Group K-Fold independiente del ensayo, que respeta los límites entre ensayos, bajó el máximo a 0,6038 frente a un nivel de azar del 25% ([[eeg-familiarity-automated-assessment-2026|Nanayakkara y Halloluwa, 2026]]). Un detector de sonrisas puede funcionar *en negativo* respecto a la empatía valorada por observadores porque carece del contexto que tiene un evaluador humano ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publique el protocolo de validación junto a la cifra principal.

**No infiera afecto, atención o «implicación» de rostros y cuerpos sin consentimiento y un propósito declarado.** El riesgo en varios turnos no es el riesgo en un solo turno: en una revisión de seguridad pedagógica, los fallos aumentaron del 17,7% en evaluaciones de un solo turno al 77,8% en las de varios turnos ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). Un sistema certificado con prompts aislados está certificado para una interacción que el estudiantado no tiene ([[pedagogical-safety]], [[privacy]]).

**No oculte el traspaso.** Un estudiante que no puede distinguir cuándo un tutor genera y cuándo recupera, o cuándo hay una persona en el circuito, no puede calibrar su confianza en él. El [[automation-bias|sesgo de automatización]] opera con más nitidez cuando el sistema acierta y la persona ha dejado de comprobar ([[trust-calibration]]). Diga en la interfaz cuándo una persona leerá el trabajo.

**No diseñe para la evaluación de referencia y luego reclame el aula.** El rendimiento en una evaluación de referencia es una propiedad de esa evaluación. Informe de las condiciones de uso que probó, la población y las tareas; de lo contrario, la cifra se leerá como una promesa sobre un contexto distinto ([[limitations-in-aied-research]]).

**No haga de la herramienta la única vía de ayuda.** Si el acceso de un estudiante a la [[feedback|retroalimentación]] depende de la disponibilidad, la cuota o la licencia de un modelo, la cuestión de equidad ya la ha decidido la contratación ([[equity-in-ai-education]]).

## Para la administración educativa

**No compre afirmaciones de capacidad como evidencia de resultados.** Los proveedores pueden demostrar un producto; solo una evaluación puede demostrar aprendizaje. Exija resultados sin ayuda, resultados por subgrupo, abandono y un plan para lo que ocurre cuando termina el piloto ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Una demostración muestra al tutor resolviendo un problema; no muestra a un estudiante resolviendo el siguiente.

**No despliegue vigilancia porque esté disponible.** Los sistemas de supervisión de exámenes capturan imágenes faciales, documentos de identidad, escaneos de la habitación, incluidos barridos de 360 grados, y audio del micrófono. Una revisión de 80 estudios encontró que solo el 25% abordaba cuestiones éticas, el 35% no divulgaba su conjunto de datos y el 30% no podía reproducirse ([[automated-online-exam-proctoring-decade-review-2026|Malhotra y Chhabra, 2026]]). El coste recae en el estudiantado, y la base de evidencia es más delgada de lo que implica el contrato ([[privacy]], [[remote-proctoring]]).

**No escriba una política de solo prohibición y la llame gobernanza.** Una prohibición sin rediseño de la evaluación, sin apoyo y sin vía de apelación desplaza la conducta en lugar de prevenirla, y castiga al estudiantado con menos capacidad de impugnar una acusación falsa. La [[governance|política]] tiene que cubrir también a quien califica: en una prueba de equipo rojo de un flujo de trabajo de calificación cotidiano, dos de cinco estrategias de inyección de prompts ocultas en una entrega hicieron pasar un ensayo suspenso con un 100% y un 94% de éxito según el tipo de archivo ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Una política que limita al estudiantado y no al proceso de calificación es media política.

**No equipare adopción con mejora.** Un panel que informa de uso, satisfacción y finalización parecerá un éxito mientras la medida de aprendizaje se mantiene plana. Decida de antemano qué resultado le haría cancelar el contrato ([[ai-ed-evaluation]]). Anote esa cifra antes de que empiece el piloto.

**No deje que la accesibilidad llegue como una solicitud de adaptación.** En una revisión de alcance de 40 estudios sobre tecnologías de asistencia digital para estudiantes [[neurodiversity|neurodivergentes]], 28 exigían un diagnóstico formal como condición de participación. Ese modelo condicionado al diagnóstico excluye a todo aprendiz con necesidades y sin etiqueta ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Para quienes investigan en educación

**No deje que el autoinforme sostenga la afirmación causal.** La confianza, el aprendizaje percibido y la satisfacción son resultados, pero no son los resultados que la mayoría de los estudios dice medir. La literatura sobre la [[empathy|empatía]] es el caso más claro: un campo que pretende enseñar empatía mide sobre todo comodidad, y una revisión de 17 estudios encontró ganancias de confianza mucho más frecuentes que evidencia de la empatía en sí ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail y Zafira, 2026]]; [[self-report-measures]]).

**No cite un efecto sin su diseño.** En una revisión crítica de 80 estudios de interacción persona-ordenador sobre [[critical-thinking|pensamiento crítico]] con IA, 42 (el 52%) no tenían grupo de control ([[critical-review-critical-thinking-hci-research-ai-2026]]). Un efecto de titular de 30 estudiantes en un curso de un solo centro es la forma habitual de una afirmación frágil ([[limitations-in-aied-research]]).

**No informe de heterogeneidad sin el modelo.** Los mismos datos dan I² = 82,98% con un modelo de efectos fijos e I² = 15,75% con un modelo de efectos aleatorios ([[ai-supported-instruction-stem-meta-analysis-2026]]). Un I² citado sin su modelo es ininterpretable ([[meta-analysis-systematic-review]]).

**No generalice desde un solo contexto y lo llame hallazgo.** Un curso, una institución, una versión del modelo, un idioma. El comportamiento del modelo cambia con cada versión, y los detectores entrenados con una generación pierden exhaustividad con la siguiente ([[research-gaps-aied]], [[ai-detection]]).

**No trate una correlación entre interacción y resultado como un mecanismo.** El volumen de prompts no mide la descarga cognitiva. Los grupos por volumen no difirieron en la distribución del trabajo cognitivo, y el diálogo codificado a mano no encontró descarga alguna en el 49,6% de 125 diálogos ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). Mida el trabajo en sí.

**No publique un párrafo de limitaciones que podría haberse escrito antes del estudio.** Nombre la amenaza concreta, el recuento concreto y la afirmación que acota. Eso es lo que hace que una limitación sea utilizable por quien lea después ([[interpreting-and-applying-aied-research]]).

## Por qué estas precauciones van juntas

Todos los elementos anteriores elevan un indicador indirecto a veredicto. El ensayo representa a quien escribe, la puntuación representa la mala conducta, la sonrisa representa la empatía y la demostración representa el aprendizaje. La corrección es la misma cada vez: nombrar el constructo, encontrar una medida que pudiera salir al revés y recogerla junto a la conveniente.

Ninguna de estas precauciones significa que la herramienta siempre esté mal. Un detector puede ser un motivo para hablar con un estudiante. Un chatbot puede ser un ensayo útil. Un panel puede ser una invitación a hacer una pregunta. Lo que causa daño es la sustitución.

## Qué hacer esta semana

- Elija una tarea calificada y anote qué mostraría con la herramienta cerrada. Si la respuesta es «nada distinto», el problema es la tarea.
- Añada una medida sin ayuda a un curso que actualmente solo informa del desempeño asistido.
- Lea el contrato de supervisión de exámenes o de herramientas de IA de su institución en cuanto a retención, uso secundario y condiciones de filtración, y compruebe si el texto de consentimiento describe lo que el sistema captura realmente.
- Pida a un proveedor resultados sin ayuda y resultados por subgrupo. Si la respuesta es una demostración, ya tiene su respuesta.
- En su próxima sesión con el profesorado, dedique la segunda mitad al rediseño de la evaluación en lugar de a los prompts.

## Adónde ir después

- [[addressing-common-misconceptions-ai-education]]: las creencias que hay detrás de estas prácticas, y cómo corregirlas sin condescendencia.
- [[limitations-in-aied-research]]: lo que la base de evidencia aún no puede sostener.
- [[reducing-ai-misuse]]: las palancas estructurales contra el mal uso, y por qué superan a la exhortación.
- [[pedagogical-safety]]: lo que un tutor puede hacerle a quien aprende mientras pasa todas las comprobaciones de contenido.
- [[should-we-use-ai-detectors]]: la evidencia sobre detectores, completa.
- [[checking-whether-educational-ai-works]]: cómo evaluar una afirmación antes de adoptarla.
