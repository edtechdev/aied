---
title: "¿Cómo enseño a los estudiantes a verificar los resultados de la IA?"
created: "2026-09-22T18:29:06-04:00"
updated: "2026-10-28T13:28:08-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
source_updated: "2026-10-28T11:43:14-04:00"
translation_of: faqs/verify-ai-output
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

Es la semana antes de que se entreguen las calificaciones y dos trabajos citan fuentes que no existen. Ambos estudiantes dicen que las comprobaron. Uno abrió el enlace. El otro leyó el párrafo y decidió que sonaba bien. Usted ya le dijo a esta clase que verificara lo que le daba el chatbot, y decirlo no produjo la conducta.

La verificación es una secuencia que se puede incorporar a una tarea. Decida qué cuenta como correcto antes de que empiece la tarea, haga que el estudiante se comprometa por escrito con una expectativa, envíelo al registro en lugar de a su impresión de la prosa, y califique el registro que produce. Una línea de rúbrica que dice "comprobó las fuentes" no mide nada de eso.

## La versión breve

**1.** Escriba primero la clave de respuestas. Una comprobación necesita algo contra lo que resolverse, y la mayoría de las tareas de verificación nunca definen qué significa correcto.

**2.** Exija una predicción antes de que aparezca la salida, para que el razonamiento del estudiante exista en papel antes de que la herramienta pueda sobrescribirlo.

**3.** Nombre el objetivo de cada comprobación: la lista de autores, el medio, el año, la cifra concreta, el paso concreto. "Asegúrese de que está bien" no es una comprobación.

**4.** Separe la comprobación que puede ejecutar una máquina del juicio que solo puede hacer un lector, y enseñe a los estudiantes cuál están haciendo.

**5.** Califique el registro contra la clave, no el esfuerzo, para que el teatro de la comprobación no gane nada.

**6.** Programe la comprobación dentro de la tarea. La presión de tiempo es una razón documentada por la que los estudiantes la omiten.

## Decida qué significa correcto antes de que nadie compruebe nada

[[verification-quality-reliance-calibration-genai-2026|Wei y Shang (2026)]], tras revisar 493 registros deduplicados y mapear 14 estudios empíricos prioritarios, separan siete cosas que el "uso crítico de la IA" colapsa en una: evaluación epistémica, inicio de la verificación, calidad del proceso, éxito de la verificación, decisiones de dependencia, desempeño inmediato en la tarea y aprendizaje independiente. Su rúbrica dice "comprobó las fuentes", lo que se sitúa en el segundo paso y no le dice nada sobre si la comprobación fue competente ni sobre si cambió la respuesta del estudiante. Iniciar no es tener éxito. Un proceso sólido puede terminar sin conclusión, uno débil puede acertar la respuesta, y un estudiante que hizo una búsqueda y se quedó confundido puntúa igual que uno que resolvió la pregunta.

La misma revisión traza una segunda línea, entre la [[trust|confianza]] y la dependencia. La [[trust-calibration|calibración de la dependencia]] pregunta si una decisión de depender fue apropiada dada la calidad real de la salida, lo que ata el juicio a una decisión y a una salida. Un estudio auditado encontró que la información falsa de ChatGPT modificaba la confianza declarada de los participantes y nunca registró si después aceptaban o rechazaban una recomendación concreta. Otro registró decisiones de aceptación y rechazo sobre la [[feedback|retroalimentación]] de ChatGPT para 78 estudiantes de traducción, pero sin una evaluación experta independiente una aceptación no puede llamarse apropiada ni un rechazo justificado. Sin verdad de referencia sobre la calidad de la salida, la dependencia no puede clasificarse en absoluto.

Esa es la consecuencia para el diseño, y es lo primero que hay que arreglar. Antes de plantear una tarea de verificación, escriba dos descripciones breves: cómo se ve una salida correcta para esta tarea y cómo se ve una salida verosímil pero incorrecta. Con una de cada una basta. Los estudiantes tienen entonces un estándar contra el que comprobar, y usted tiene algo contra lo que calificar la comprobación distinto de si el estudiante suena cuidadoso.

## Haga que se comprometan antes de que la herramienta responda

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]] construye un programa de medición en torno a *predecir antes de ejecutar*: quien aprende declara qué debería ocurrir, y después el comportamiento del artefacto se juzga contra esa predicción con criterios de dominio y no por si se ejecuta. El razonamiento existe antes que la salida, que es lo que lo hace calificable.

Su auditoría de 24 estudios encontró la misma herramienta produciendo resultados opuestos bajo estructuras de tarea distintas. Una configuración convencional de ChatGPT terminaba significativamente más baja en rendimiento, [[self-efficacy|autoeficacia]] y flujo, mientras que una condición que añadía requisitos de verificación y módulos de reflexión sobre errores mostraba un [[critical-thinking|pensamiento de orden superior]] más sólido. La herramienta era constante entre esas condiciones. Lo que variaba era si la tarea pedía al estudiante sostener una posición que la herramienta pudiera contradecir.

En la práctica eso es una línea en la hoja de la tarea: antes de abrir la herramienta, escriba qué espera que diga y por qué. Después compare. Dos estudiantes pueden producir el mismo párrafo y solo uno de ellos puede explicar en qué se aparta el párrafo de lo que había predicho.

## Envíelos al registro

[[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]] rastrearon 113.588 referencias de 5.225 artículos de educación en informática publicados desde 2021 y verificaron manualmente 828 registros sospechosos. Encontraron 30 que contenían información bibliográfica verificablemente fabricada en 14 artículos, todos de 2025 y 2026. Trece eran enteramente inventados. Los otros 17 combinaban un título real con una autoría, un medio o un año fabricados o incorrectos. En el SIGCSE Technical Symposium el recuento subió de 3 en las actas de 2025 a 17 en 2026, o el 2,3% de los artículos de las actas de ese año.

Los campos de autoría fallan más a menudo que cualquier otra parte de una referencia generada. Ese único hallazgo le dice qué pedir. "Abra la fuente y lea la lista de autores" apunta al campo con más probabilidad de estar mal, y produce un hecho que el estudiante tiene o no tiene. "Asegúrese de que las fuentes son reales" produce una garantía. Pida a los estudiantes que confirmen autores, medio y año contra el propio registro. El artículo pide que se verifique toda obra citada y que cualquier comprobador automático se mantenga [[human-in-the-loop-ai|con una persona en el circuito]], que es exactamente el hábito que ensaya un requisito de citación.

## Separe la comprobación que puede hacer una máquina del juicio que solo puede hacer un lector

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]] fija un umbral defendible para lo que puede comprobarse mecánicamente: criterios documentados, comparación con conocimiento establecido sin juicio interpretativo, y una única respuesta correcta o alternativas aceptables preespecificadas. Las fechas, las fórmulas, las citas y los cálculos superan ese umbral. Todo lo interpretativo no lo supera, y ahí la propia lectura del estudiante es el instrumento de la comprobación.

Gousopoulos formaliza la misma división como un problema de detección de señales con dos parámetros independientes. La sensibilidad es la capacidad de discriminar una salida correcta de una defectuosa; el criterio es dónde fija quien aprende el umbral para el rechazo. La dependencia excesiva se divide a lo largo de esa línea. Las advertencias, las listas de verificación y los avisos sobre alucinaciones desplazan el criterio, cambiando cuándo rechaza un estudiante. La instrucción de dominio, las comparaciones resueltas y la práctica con errores sembrados elevan la sensibilidad, porque entonces quien aprende puede notar la diferencia. Un estudiante que acepta una salida defectuosa puede tener un problema de criterio o un problema de sensibilidad, y los dos exigen enseñanzas distintas.

El requisito previo es incómodo. La instrucción en verificación solo es educativa donde la sensibilidad puede superar cero, lo que exige conocimiento de dominio suficiente para distinguir una salida correcta de una incorrecta. En la misma auditoría, los novatos a quienes se pidió explicar código generado por un [[llm]] tuvieron éxito en aproximadamente un tercio de las tareas, así que juzgar la retroalimentación o el código de la IA contra el razonamiento propio es una comprobación real solo donde ese razonamiento tiene sustancia. Si sus estudiantes todavía no pueden hacer el razonamiento de dominio sin ayuda, más advertencias no compran nada. Enseñe el contenido y adjunte la comprobación a él.

Una advertencia más corresponde al diseño: las intervenciones que reducen la aceptación inapropiada también deben comprobarse en busca del rechazo no intencionado de una ayuda correcta. Deje espacio para que un estudiante acepte una buena salida por una razón declarada.

## Califique la comprobación sin convertirla en vigilancia

Gousopoulos extrae la consecuencia de forma directa. Si la IA puede producir el artefacto, el artefacto no puede ser la evaluación, así que la evaluación se traslada a la especificación, al razonamiento de validación y a la interpretación. Su constructo de autoría de modelos tiene cuatro facetas (especificación, modelo conceptual, verificación e interpretación) en cuatro niveles ordenados, de delegado a autorizado. El nivel de autoría exige una especificación verificable antes del primer prompt, el rechazo de la salida con criterios de dominio y una razón declarada, y una interpretación que vaya más allá del propio informe del artefacto sobre sí mismo.

La rúbrica se apoya en materiales que una tarea de construcción ya genera, así que el mismo instrumento es a la vez una [[formative-assessment|evaluación formativa]] y una medida de investigación. Eso responde a la preocupación por el trabajo inútil: usted puntúa un subproducto de una tarea que ya planteó. Dos límites van junto a ello. Ningún estudio entre los 14 casos prioritarios de Wei y Shang midió el éxito de la verificación y la decisión de dependencia siguiente de forma conjunta, y pocos dieron seguimiento al desempeño inmediato con retención diferida o [[transfer-of-learning|transferencia]], así que la rúbrica descansa en un mapa analítico y no en una secuencia causal validada.

Tres decisiones evitan que esto se convierta en vigilancia. Califique la comprobación contra la calidad adjudicada y no contra el esfuerzo, o creará un incentivo para escenificar la comprobación. Declare la procedencia, como exige Venetsanos: los estudiantes necesitan saber qué partes de la retroalimentación que reciben fueron verificadas por una máquina, cuáles se juzgaron de forma evaluativa y que el juicio humano tiene primacía, porque no pueden sopesar una retroalimentación que no saben situar. Y mantenga la aplicación de la norma fuera de las herramientas de detección. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] sostienen que la [[ai-detection|detección de IA]] no debería usarse en educación en absoluto: sus estimaciones son probabilísticas y no pueden verificarse de forma independiente porque el origen real de un texto es desconocido, sus puntuaciones no alcanzan el estándar de equilibrio de probabilidades que exigen las investigaciones de integridad, y la dicotomía humano frente a IA carece de sentido para trabajos creados con IA en lugar de por IA. Su conclusión es que la detección "no salvaguarda la integridad académica; la socava". Los regímenes de vigilancia fomentan la sospecha y erosionan la [[trust|confianza]] de los estudiantes. Mantenga separados los dos sentidos de detección. Detectar texto generado por IA no tiene aquí ningún papel probatorio defendible; enseñar a los estudiantes a detectar errores en la salida de la IA es todo el ejercicio.

La separación es arquitectónica, y vale la pena contársela a los estudiantes. [[vetting-dual-llm-safety-education|Li, Zhang y Botelho (2026)]] comprueban la salida con un segundo modelo en lugar de incrustar la comprobación en el generador. Un estudiante que ve por qué puede ver por qué "la herramienta dijo que estaba bien" no es un argumento de verificación.

## Si está diseñando el curso en lugar de impartirlo

Tres hallazgos anteriores corresponden a la construcción del curso, donde un docente que trabaja solo no llegará a ellos.

El primero es un diagnóstico. Aplique una tarea con errores sembrados: veinte ítems, ocho con un error de nivel de dominio. Le dice si los estudiantes pueden discriminar algo, antes de que dedique un semestre a enseñar un criterio que no pueden usar. Una clase que no detecta los errores sembrados necesita repasar el contenido, diga lo que diga el programa sobre el uso crítico.

El segundo es la ubicación de la advertencia. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings y Park (2026)]] mostraron un mensaje genérico de advertencia previa justo antes de dos tareas a 100 estudiantes con base en Estados Unidos, 40 nacionales y 60 internacionales de inglés como lengua extranjera. Los estudiantes inoculados fueron significativamente más propensos a verificar la tarea de resumen de fuentes académicas (M = 0,34 frente a 0,18), mientras que las intenciones de verificación autoinformadas no se movieron. El efecto también dependía de la tarea: apareció en la tarea de resumen de fuentes pero no de forma uniforme en un cuestionario de matemáticas sobre exponenciación y multiplicación de números grandes. Ponga la advertencia en el punto de uso, por tipo de tarea, en lugar de una vez en el programa o en el módulo de orientación.

El tercero es la programación. Un programa que deja la verificación sin programar dice que es opcional, y la presión de tiempo es una razón documentada por la que los estudiantes omiten las comprobaciones. La verificación que vive dentro de la tarea, con un artefacto calificado adjunto, ocurre. La que vive en un párrafo de política, no.

## Si usted es el estudiante que lee esto

Cuatro movimientos cubren la mayor parte de lo que la investigación le pide.

Escriba su expectativa antes de escribir el prompt. Una frase sobre cuál debería ser la respuesta, y después compare la salida con ella.

Abra la fuente. Lea la lista de autores, el medio y el año contra el registro, porque el campo de autoría es donde más fallan las referencias generadas.

Para todo lo interpretativo, escriba la razón con sus propias palabras. Una razón fabricada es tan visible como una cita fabricada.

Desconfíe de la sensación de que la prosa se lee bien. A los novatos a quienes se pidió explicar código generado por un LLM les fue bien en aproximadamente un tercio de las tareas, y un estudio de campo sobre conversaciones de estudiantes con ChatGPT en cuestionarios encontró que seguir una guía correcta producía aun así una respuesta incorrecta. Lo que usted puede comprobar es más estrecho que lo que puede leer.

## En qué se equivocan los docentes sobre esto

**"Ya les dije que comprobaran sus fuentes."** Una advertencia pide una disposición. Los estudiantes cuidadosos la tienen, los apurados no, y no hay nada en la frase sobre lo que un estudiante pueda actuar a las 11 de la noche con una salida en pantalla que se lee perfectamente bien.

**"Una línea de rúbrica sobre comprobar las fuentes lo cubre."** Esa línea se sitúa en el inicio y no dice nada sobre la calidad del proceso ni sobre el éxito. Un estudiante que hizo una búsqueda y se rindió puntúa igual que uno que resolvió la pregunta, así que la rúbrica premia el gesto.

**"Si leen con cuidado, detectarán los errores."** La fluidez se lleva el juicio. La literatura auditada muestra a los novatos en torno a un tercio de éxito al explicar código generado, y el estudio de campo registró una respuesta incorrecta que llegó a través de una guía correcta.

**"Los estudiantes que dicen que van a verificar, lo hacen."** En el estudio de Vu, Cummings y Park, las intenciones autoinformadas no se movieron mientras que la conducta efectiva sí (M = 0,34 frente a 0,18). Califique la conducta, que fue lo que se movió.

**"Los estudiantes que omiten la comprobación son los que no se preocupan."** [[trust-calibration-chatbots-design-problem-2026|Jaidka y Cai (2026)]] cruzan la capacidad de verificar con la motivación para verificar, y los perfiles necesitan remedios distintos. El estudiante con alta capacidad y baja motivación es propenso a una confianza excesiva complaciente. El de baja capacidad y baja motivación es el más expuesto. Dos estudiantes que fallan la misma comprobación pueden necesitar enseñanzas opuestas, y el [[prior-knowledge|conocimiento previo]] decide cuál de los dos tiene delante.

**"Más advertencias arreglarán a los estudiantes que no saben distinguir."** Las advertencias mueven el criterio. No elevan la sensibilidad, y la sensibilidad es lo que separa a un estudiante que puede detectar el defecto de uno que no.

**"Un detector respalda la política."** Con la evidencia anterior, la puntuación de un detector no cumple el estándar que exige un caso de integridad, la división humano frente a IA no se sostiene para trabajos hechos con IA, y el régimen le cuesta la [[trust|confianza]] que necesita para que los estudiantes revelen algo.

## Lo que le van a responder

**"Pueden hacerlo solo por la nota."** En parte es cierto, así que califique materiales que la IA no puede producir en nombre del estudiante. Una especificación escrita antes del primer prompt, una predicción registrada antes de que se ejecute el artefacto, una lista de fuentes comprobada contra el registro, una razón de dominio declarada para el rechazo: cada una exige que el estudiante sostenga una posición que el generador no puede aportar. Una razón fabricada es tan visible como una cita fabricada. Cuando un estudiante no tiene conocimiento de dominio contra el que comprobar, la verificación es teatro y ninguna rúbrica lo rescata, lo que es un argumento para enseñar primero el contenido.

**"No hay tiempo en el programa."** La advertencia previa es un mensaje antes de la tarea. La tarea con errores sembrados reutiliza un cuestionario que usted ya aplica. La rúbrica se apoya en materiales que la tarea ya genera, así que cuesta tiempo de corrección sobre evidencia que de otro modo no tendría. La alternativa cuesta más: entregas sin verificar, referencias fabricadas y las conversaciones sobre integridad que vienen después.

**"La herramienta suele tener razón."** Entonces la comprobación es barata y las excepciones son el punto. Los campos de autoría fallan más a menudo que cualquier otra parte de una referencia generada, 17 de los 30 ítems fabricados emparejaban un título real con autoría, medio o año incorrectos, y 17 aparecieron en las actas de un solo año de un simposio. La precisión en las partes que uno detecta por casualidad no dice nada sobre las partes que no detecta.

**"Mis estudiantes no saben lo suficiente para juzgar la salida."** Ese es el umbral de sensibilidad, y es real. Gousopoulos predice que la instrucción en verificación fracasa por debajo de un piso de conocimiento de dominio, y señala que algunos dominios aportan un criterio externo (la física, la química, la ecología y la epidemiología entre ellos), mientras que la historia, la literatura y la [[ethics|ética]] en gran medida no. Enseñe el dominio y adjunte la comprobación a él, o espere que la comprobación se convierta en un ritual.

**"Esto es vigilancia."** Lo es, si califica el esfuerzo o vigila cómo trabajan los estudiantes. Califique el artefacto contra la clave, declare qué retroalimentación se comprobó con una máquina y cuál la juzgó una persona, y deje los detectores fuera.

## Qué hacer esta semana

**1.** Escriba las dos descripciones para su próxima tarea: una salida correcta y una incorrecta verosímil. Esa es la clave contra la que se resuelve la comprobación.

**2.** Añada la línea de predicción. Una frase, escrita antes de abrir la herramienta, comparada después con criterios de dominio.

**3.** Sustituya "comprueba tus fuentes" por "abre el registro y confirma los autores, el medio y el año".

**4.** Introduzca ocho errores sembrados en un cuestionario que ya aplica, y vea qué estudiantes los encuentran.

**5.** Califique un artefacto de verificación contra la clave y dígale al estudiante qué parte de la comprobación falló: el estándar, el proceso o la decisión.

## Adónde ir después

[[incorporating-ai-literacy]] cubre cómo construir la comprensión que esta página pone a trabajar, y [[ai-literacy-evidence]] cubre cuánto vale ese trabajo de alfabetización. [[reducing-over-reliance]] aborda el lado del diseño para los estudiantes que se apoyan en la herramienta, [[study-with-ai]] es el compañero orientado al estudiante, y [[asynchronous-online-courses-ai]] cubre la versión de este problema en la que no hay clase presencial en la que programar una comprobación. Sobre la retroalimentación que los estudiantes comprueban, véase [[ai-feedback-quality]] y [[hallucination-risk]].
