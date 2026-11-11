---
title: "¿Qué deberían evitar hacer los educadores con la IA?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

La mayor parte de las orientaciones sobre la IA en la educación se formulan como lo que hay que probar. Esta página es la otra lista: las prácticas que la evidencia dice que hay que dejar de hacer, organizadas por el rol que tendría que dejar de hacerlas. Deliberadamente no es una lista de creencias falsas —de eso se ocupa la [[addressing-common-misconceptions-ai-education|FAQ sobre concepciones erróneas]], y la página de concepto [[misconceptions]] explica por qué persisten— ni una lista de lo que la investigación aún no puede decirle, que es lo que cubren los [[limitations-in-aied-research|límites de la investigación en AIED]]. El foco aquí es el paso posterior a una creencia: lo que las personas hacen realmente, lo que cuesta y qué hacer en su lugar.

Tres fallos se repiten en todos los roles. **Sustitución**: una herramienta realiza el pensamiento que quien aprende debía hacer, y la salida se califica como si la hubiera hecho esa persona. **Evidencia no ganada**: una señal fácil de recoger (confianza, fluidez, implicación, una tasa de finalización) se trata como prueba de algo que no puede mostrar. **Estructura dejada a la exhortación**: se pide a un aviso, a una frase de política o a una sesión de formación que haga el trabajo que deben hacer el diseño de la interfaz, el diseño de la evaluación o la gobernanza.

## La versión breve

**1.** Nunca califique, cite o promueva una salida como evidencia de la capacidad que la produjo.

**2.** Recoja la medida sin ayuda junto a la medida asistida, siempre.

**3.** Trate la fluidez, la confianza y la implicación como características del uso, no como aprendizaje.

**4.** Ponga la salvaguarda en el flujo de trabajo, no en un aviso.

**5.** Suponga que cualquier dato que la herramienta pueda ver se conservará, se combinará y se filtrará.

**6.** Si la afirmación viene con una demostración pero no con una comparación, es marketing.

## Para el estudiantado

**No entregue la parte que se supone que debe practicar.** La distinción no es cuánto usa la IA, sino qué trabajo cognitivo se desplaza. Externalizar los deberes sube las notas de los deberes y baja las de los exámenes sin apuntes —una ganancia del 18% frente a una pérdida del 20% en un estudio de secundaria—, porque la práctica que construye conocimiento recuperable se fue a la herramienta ([[reducing-ai-misuse]]). Si el ejercicio es lo que importa, la herramienta no puede hacer el ejercicio.

**No lea la fluidez como exactitud.** El texto fluido es la salida de un modelo de lenguaje tanto si el contenido es verdadero como si no, y el mecanismo que lo vuelve persuasivo es el mismo que lo vuelve erróneo ([[hallucination-risk]]). Verifique la afirmación concreta, no el tono del párrafo. El hábito de verificar rara vez aparece por sí solo: en un panel de 900 personas adultas a las que se dio un resumen de IA, quienes leían siguieron una fuente citada dentro de él en el 1% de las visitas ([[trust-calibration]]).

**No acepte el acuerdo como retroalimentación.** Los modelos afirman bastante más que las personas —en 11 modelos, las respuestas de IA afirmaron a quienes las usaban un 49% más a menudo que las respuestas humanas—, y ese exceso es lo que hace que la interacción se sienta de apoyo ([[ai-sycophancy]]). Un tutor que nunca está en desacuerdo con usted ha eliminado la señal correctiva por la que vino. Pida la objeción, no el respaldo.

**No cambie una pregunta por una respuesta cuando está atascado.** El esfuerzo productivo que se salta es el aprendizaje; la búsqueda de ayuda que recupera una respuesta es una conducta distinta de la que recupera una pista ([[help-seeking]], [[desirable-difficulties]]). Use herramientas que retengan la respuesta terminada.

**No pegue información personal, de salud o familiar en una herramienta para obtener una mejor respuesta.** La herramienta no tiene obligación de olvidarla, y el coste para la privacidad no se ve en la calidad de la respuesta ([[privacy]]).

## Para familias y progenitores

**No haga los deberes con la herramienta ni permita que se hagan a su lado.** El patrón que aparece en los datos es una inflación de notas con un coste oculto: las notas de deberes suben un 18% mientras las de los exámenes sin apuntes bajan un 20% ([[reducing-ai-misuse]]). Lo que sí puede comprobar es el proceso: ¿puede su hijo o hija explicar el paso, rehacerlo en papel y decir en qué dudaba? Si no, la herramienta hizo la tarea.

**No deje que un chatbot se convierta en el confidente.** Los sistemas aduladores afirman mucho más que las personas —un 49% más en 11 modelos—, y esa afirmación es el mecanismo que los hace parecer seguros para hablar con ellos ([[ai-sycophancy]]). En un gran estudio longitudinal, quienes usaban estos sistemas recurrieron a la IA aduladora para consejos personales casi tan a menudo como a amistades cercanas y familiares, con menor satisfacción en sus relaciones reales ([[sycophantic-ai-social-interaction-2026]]). Un niño o una niña que lleva su angustia a un modelo que siempre está de acuerdo no está siendo escuchado; está siendo reflejado.

**No entregue un chatbot generativo a un niño pequeño y lo llame supervisado porque usted está en la habitación.** La orientación por tramos de edad es concreta: actividades con andamiaje y no generativas para edades de 9 a 12 años, y uso generativo supervisado con razonamiento ético a partir de los 13 ([[ai-guidance-children-under-13]]). Para los más pequeños el riesgo es la creencia: los niños en la etapa preoperacional aceptan el contenido generado como verdadero, y los sistemas no están calibrados evolutivamente en la retroalimentación que dan. El uso compartido con una persona adulta significa preguntar qué acaba de hacer el juguete, no vigilar desde la puerta ([[early-childhood-elementary-ai-education]]).

**No suponga que la herramienta del centro protege los datos de su hijo o hija porque el centro la eligió.** Pregunte qué se conserva, durante cuánto tiempo, si entrena algo y quién más lo ve ([[privacy]]). La conciencia no se sigue de la exposición: un mes después de una lección en la que el estudiantado vio proyectado en vivo su propio comportamiento registrado, el 66% de una clase de 7.º año seguía eligiendo la configuración de chatbot menos protectora ([[privacy]]).

**No use el resultado de un detector para acusar a su hijo o hija ni para respaldar una acusación del centro.** En la prueba controlada más sólida, los detectores marcaron entre el 9 y el 15% de escritura humana sin modificar y detectaron menos del 4% de las reescrituras de IA humanizadas; con tasas base realistas, los falsos positivos superan a los verdaderos positivos ([[ai-detection]]). Trate una marca como motivo para pedir el historial de borradores y una conversación, no como un hallazgo.

**No concluya que prohibir la herramienta es la opción segura.** La desconfianza excesiva es un fallo de calibración con su propio coste —la capacidad que se deja de aprovechar—, y la habilidad que importa es una confianza ajustada, no la evitación ([[trust-calibration]]). El movimiento parental útil es el mismo que la investigación respalda para el estudiantado: exigir un paso de verificación y hacerlo lo bastante barato como para que un niño cansado lo haga de verdad ([[verify-ai-output]]).

**No confunda un filtro de contenido con seguridad.** Los filtros abordan lo que un sistema dirá; no abordan lo que una interacción le hace a quien aprende —práctica erosionada, acuerdo adulador o rechazos desiguales— ([[pedagogical-safety]]).

## Para el profesorado

**No certifique la salida como capacidad.** Una entrega pulida es evidencia de una entrega pulida. Si la evaluación no puede distinguir lo que el estudiante puede hacer sin ayuda, la evaluación ha dejado de medir aquello que afirma la credencial ([[assessment-validity]], [[authentic-assessment]]). La solución es rediseñar la tarea, no endurecer el código de honor.

**No use la puntuación de un detector como prueba de mala conducta.** La prueba controlada más sólida marca entre el 38 y el 80% de la edición ligera con IA que cumple las directrices y entre el 9 y el 15% de la escritura humana sin modificar, mientras detecta menos del 4% de las reescrituras pasadas por un servicio de humanización; 14 herramientas comerciales en una evaluación independiente quedaron todas por debajo del 80% de exactitud, y con tasas base realistas los falsos positivos superan a los verdaderos positivos ([[ai-detection]], [[should-we-use-ai-detectors]]). Un detector puede iniciar una conversación; no puede terminarla.

**No añada IA a una evaluación que no ha rediseñado.** Atornillar una herramienta a una tarea diseñada para el desempeño sin ayuda produce exactamente la inflación de notas que oculta la pérdida: deberes arriba, examen abajo. Pregunte por cada tarea calificada qué mostraría la versión sin ayuda, y arregle primero la tarea ([[reducing-ai-misuse]]).

**No trate la implicación como aprendizaje.** El tiempo dedicado a la tarea, la satisfacción, el volumen de búsqueda de ayuda y la actividad de chat son fáciles de instrumentar y compatibles con ningún aprendizaje en absoluto. Una barrera de seguridad que redujo el cambio del estudiantado a una posición incorrecta de la IA del 42–60,5% al 5,7–8,2% no produjo ningún efecto de aprendizaje medible dentro de la sesión (β = 0,03; p = 0,18). La conducta se mantuvo; el aprendizaje no se movió ([[student-engagement]]).

**No confíe en un aviso donde la interfaz podría restringir.** Un tutor que puede producir la respuesta terminada la producirá bajo la presión de una fecha límite. La barrera que funciona es la que está integrada en la interacción, no la frase del programa ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**No pegue trabajos del estudiantado, planes educativos individualizados, expedientes disciplinarios ni borradores identificables en una herramienta de consumo.** La minimización de datos es una decisión de diseño que usted toma en nombre del estudiante, tanto si lo ha pensado como si no ([[privacy]]).

## Para el desarrollo educativo y del profesorado

**No imparta formación en herramientas y la llame alfabetización en IA.** Una sesión sobre prompts enseña la interfaz de un producto; la [[ai-literacy]] es la capacidad de juzgar cuándo debe usarse la herramienta, qué está haciendo y qué hay que verificar. El profesorado que aprende los botones sin el juicio se va con confianza y sin calibración ([[teacher-ai-competency]]).

**No organice desarrollo profesional de una sola sesión y espere que cambie la práctica.** La evidencia sobre el [[professional-training|aprendizaje profesional]] es consistente en cuanto a duración y seguimiento: los eventos únicos mueven la confianza autoinformada, rara vez la conducta en el aula, y la ganancia de confianza puede enmascarar la ausencia de cambio ([[educational-development]]).

**No ignore el sistema de evaluación que deja en su sitio.** El profesorado adoptará la práctica que usted enseña solo si la evaluación a la que se le somete no la penaliza. Un taller sobre diseño de tareas resistentes a la IA que se imparte junto a un régimen de exámenes sin cambios enseña al profesorado que la formación es decorativa.

**No modele el uso acrítico contra el que advierte.** Demostrar una herramienta generando un plan de clase delante del profesorado, sin paso de verificación, enseña al público que la salida es el producto.

**No acepte una demostración de proveedor como evidencia de eficacia.** La afirmación que está evaluando trata sobre el aprendizaje, y una demostración muestra capacidad. Pida resultados sin ayuda, resultados por subgrupos y pruebas de seguridad en varios turnos ([[checking-whether-educational-ai-works]]).

## Para quienes desarrollan software educativo

**No optimice la métrica fácil de registrar.** La duración de la sesión, el número de mensajes y las valoraciones de satisfacción mejorarán con casi cualquier cambio; el aprendizaje a menudo no. El mismo equipo que lanza una barrera de seguridad puede lanzar un panel que recompense el volumen de interacción, y ambos apuntarán en direcciones opuestas ([[learning-analytics]], [[student-engagement]]).

**No lance un detector sin un estudio de validación contra el constructo.** Un modelo que obtiene 0,98 de F1 en una partición filtrada puede caer a 0,60 con una validación independiente del ensayo, y un detector de sonrisas puede correr *negativamente* contra la empatía valorada por observadores porque carece del contexto que tiene un evaluador humano ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Publique el protocolo de validación, no solo el titular.

**No infiera afecto, atención ni «implicación» de rostros y cuerpos sin consentimiento y un propósito declarado.** El riesgo en varios turnos no es el riesgo en un solo turno: las tasas de daño en una revisión subieron del 18% aproximadamente en evaluaciones de un solo turno al 78% aproximadamente en las de varios turnos, así que un sistema certificado con prompts aislados está certificado para una interacción que el estudiantado no tiene ([[pedagogical-safety]], [[privacy]]).

**No oculte el traspaso.** Un estudiante que no puede distinguir cuándo un tutor genera y cuándo recupera, o cuándo hay una persona en el circuito, no puede calibrar su confianza en él, y el sesgo de automatización opera con más nitidez cuando el sistema acierta y la persona ha dejado de comprobar ([[automation-bias]], [[trust-calibration]]).

**No diseñe para el punto de referencia y luego reclame el aula.** El rendimiento en un punto de referencia es una propiedad del punto de referencia. Informe de las condiciones de uso que probó, la población y las tareas; de lo contrario, la cifra se leerá como una promesa sobre un contexto distinto ([[limitations-in-aied-research]]).

**No haga de la herramienta la única vía de ayuda.** Si el acceso del estudiantado a la retroalimentación depende de la disponibilidad, la cuota o la licencia de un modelo, la cuestión de equidad ya la ha decidido la compra ([[equity-in-ai-education]]).

## Para la administración educativa

**No compre afirmaciones de capacidad como evidencia de resultados.** Los proveedores pueden demostrar un producto; solo una evaluación puede demostrar aprendizaje. Exija resultados sin ayuda, resultados por subgrupos, abandono y un plan para lo que ocurre cuando termina el piloto ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**No despliegue vigilancia porque esté disponible.** Los sistemas de supervisión de exámenes capturan imágenes faciales, documentos de identidad, escaneos de la habitación —incluidos barridos de 360 grados— y audio del micrófono, y una revisión de 80 estudios encontró que solo el 25% cumplía el umbral de reporte para las preguntas que una institución necesita responder antes de desplegarlos ([[privacy]], [[remote-proctoring]]). El coste recae en el estudiantado; la base de evidencia es más delgada de lo que implica el contrato.

**No escriba una política de solo prohibición y la llame gobernanza.** Una prohibición sin rediseño de la evaluación, sin apoyo y sin vía de apelación desplaza la conducta en lugar de prevenirla, y castiga al estudiantado con menos capacidad de impugnar una acusación falsa. La política tiene que cubrir también a quien califica: dos de cinco estrategias de inyección indirecta de prompts insertadas en una entrega elevaron la nota de un ensayo suspenso ([[institutional-ai-policy]], [[course-ai-policy]]).

**No equipare adopción con mejora.** Un panel que informa de uso, satisfacción y finalización parecerá un éxito mientras la medida de aprendizaje se mantiene plana. Decida de antemano qué resultado le haría cancelar el contrato ([[ai-ed-evaluation]]).

**No deje que la accesibilidad llegue como una solicitud de adaptación.** En una revisión de 40 estudios sobre tecnologías de asistencia digital para estudiantado neurodivergente, 28 hacían del diagnóstico formal una condición de participación: un modelo condicionado al diagnóstico que excluye a todo aprendiz con necesidades y sin etiqueta ([[accessibility]], [[universal-design-for-learning]]).

## Para quienes investigan en educación

**No deje que el autoinforme sostenga la afirmación causal.** La confianza, el aprendizaje percibido y la satisfacción son resultados, pero no son los resultados que la mayoría de los estudios dice medir. La literatura sobre la [[empathy|empatía]] es el caso más claro: un campo que pretende enseñar empatía mide sobre todo comodidad, y la revisión más sólida de 17 estudios encontró ganancias de confianza mucho más frecuentes que evidencia de la empatía en sí ([[self-report-measures]], [[empathy]]).

**No cite un efecto sin su diseño.** En una revisión crítica de 80 estudios de interacción persona-ordenador sobre pensamiento crítico con IA, 42 no tenían grupo de control. Un efecto de titular con 30 estudiantes de un curso en un solo sitio es la forma habitual de una afirmación frágil ([[limitations-in-aied-research]]).

**No informe de heterogeneidad sin el modelo.** Los mismos datos dan I² = 82,98% con un modelo de efectos fijos y 15,75% con un modelo de efectos aleatorios; un I² citado sin su modelo es ininterpretable ([[meta-analysis-systematic-review]]).

**No generalice desde un solo contexto y lo llame hallazgo.** Un curso, una institución, una versión del modelo, un idioma. El comportamiento del modelo cambia con cada versión, y los detectores entrenados con una generación pierden exhaustividad con la siguiente ([[research-gaps-aied]], [[ai-detection]]).

**No trate una correlación entre interacción y resultado como un mecanismo.** El volumen de prompts no mide la descarga cognitiva: los grupos por volumen no difirieron en la distribución del trabajo cognitivo, y el diálogo codificado a mano no encontró descarga alguna en el 49,6% de 125 diálogos ([[cognitive-offloading]]). Mida el trabajo, no su rastro visible.

**No publique un párrafo de limitaciones que podría haberse escrito antes del estudio.** Nombre la amenaza concreta, el recuento concreto y la afirmación que acota. Eso es lo que hace que una limitación sea utilizable por quien lea después ([[interpreting-and-applying-aied-research]]).

## Por qué estas precauciones van juntas

Cada elemento anterior es un caso de un indicador indirecto promovido a veredicto: el ensayo representa a quien escribe, la puntuación representa la mala conducta, la sonrisa representa la empatía, la demostración representa el aprendizaje, la política representa la gobernanza. La corrección es siempre el mismo movimiento: nombrar el constructo, encontrar una medida que pudiera salir al revés y recogerla junto a la conveniente.

Por eso también estas precauciones no son una lista de cosas que siempre están mal. Un detector puede ser un motivo para hablar con un estudiante. Un chatbot puede ser un ensayo útil. Un panel puede ser una invitación a hacer una pregunta. El daño está en la sustitución, no en la herramienta.

## Qué hacer esta semana

- Elija una tarea calificada y anote qué mostraría con la herramienta cerrada. Si la respuesta es «nada distinto», el problema es la tarea.
- Añada una medida sin ayuda a un curso que actualmente solo informa del desempeño asistido.
- Lea el contrato de supervisión de exámenes o de herramientas de IA de su institución en cuanto a retención, uso secundario y condiciones de filtración, y compruebe si el texto de consentimiento describe lo que el sistema captura realmente.
- Pida a un proveedor resultados sin ayuda y resultados por subgrupos. Si la respuesta es una demostración, ya tiene su respuesta.
- En su próxima sesión con el profesorado, dedique la segunda mitad al rediseño de la evaluación en lugar de a los prompts.

## Adónde ir después

- [[addressing-common-misconceptions-ai-education]] — las creencias que hay detrás de estas prácticas, y cómo corregirlas sin condescendencia.
- [[limitations-in-aied-research]] — lo que la base de evidencia aún no puede sostener.
- [[reducing-ai-misuse]] — las palancas estructurales contra el mal uso, y por qué superan a la exhortación.
- [[pedagogical-safety]] — lo que un tutor puede hacerle a quien aprende mientras pasa todas las comprobaciones de contenido.
- [[should-we-use-ai-detectors]] — la evidencia sobre detectores, completa.
- [[checking-whether-educational-ai-works]] — cómo evaluar una afirmación antes de adoptarla.
