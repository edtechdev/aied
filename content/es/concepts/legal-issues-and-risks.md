---
title: "Cuestiones y riesgos legales"
created: "2026-09-28T21:12:00-04:00"
updated: "2026-09-28T21:12:00-04:00"
type: concept
foundations: [academic-integrity, reducing-ai-misuse]
assessment: [ai-detection, assessment-validity, remote-proctoring]
institutions: [educational-policy-ai, governance, regulation]
ethics: [accessibility, ai-use-disclosure, equity-in-ai-education, hallucination-risk, privacy]
pedagogy: [professional-training]
discipline: [legal education]
level: [higher ed]
audience: [administrators, policymakers, institutions, researchers]
page_kind: [synthesis]
confidence: medium
translation_of: concepts/legal-issues-and-risks
source_updated: "2026-09-24T10:07:27-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Cuestiones y riesgos legales** — la exposición en la que incurren las instituciones, el personal y el estudiantado cuando la [[generative-ai|IA generativa]] se gobierna mal en educación: un estudiante acusado injustamente de hacer trampas a partir de la puntuación de un detector, un sistema de supervisión que observa y registra más de lo que exige la evaluación, una regla demasiado amplia que penaliza una herramienta de asistencia, o una política tan vaga que no puede aplicarse de forma coherente. El riesgo no es una única cuestión jurídica, sino varias que llegan juntas: probatoria (si la acusación puede sustentarse en pruebas), contractual y procedimental (si la institución siguió sus propias reglas y dio al estudiante una audiencia justa), de igualdad (si la regla carga sobre el estudiantado con discapacidad o no nativo) y de protección de datos (qué recogió la vigilancia y dónde se almacenó). Es distinto de la [[academic-integrity|integridad académica]], que es el marco de conducta que se aplica: esta página trata de lo que ocurre cuando esa aplicación se impugna.

## Preguntas para reflexionar

- Las herramientas de detección no pueden identificar de forma fiable la autoría. Si el instrumento no puede establecer el hecho en cuestión, ¿en qué se apoya realmente un caso de mala conducta?
- Los datos de supervisión y de detección de IA se generan a escala y se conservan indefinidamente. ¿Quién asume la exposición legal por esos datos, la institución o su proveedor?
- Cuando una política prohíbe «el uso de IA» sin distinguir la [[wright-transcription-not-generation-2026|transcripción de la generación]], ¿la regla protege la integridad o penaliza un ajuste por discapacidad?

## Introducción

La evidencia de la base de conocimiento sobre este tema es procedimental y no jurídica. Documenta lo que las instituciones consideran prueba, cómo funcionan los procedimientos de acusación, cuán poco fiables son los instrumentos y qué recoge la vigilancia; todavía no documenta resultados de litigios. Esa laguna debería declararse con claridad en lugar de rellenarse con afirmaciones seguras: los casos que resolverían estas cuestiones en su mayoría no se publican, se han resuelto por acuerdo o siguen en procesos internos de las instituciones.

Lo que sí respalda la literatura es una descripción de los modos de fallo que generan exposición legal. El patrón recurrente es que son los propios instrumentos y procedimientos de la institución, y no un acusador malicioso, lo que la pone en riesgo: una puntuación probabilística tratada como hallazgo, una regla más clara en su intención que en su alcance, un sistema que recogió datos que nadie pidió y una audiencia que dio por supuesto que la prueba técnica no necesitaba escrutinio.

## Dónde se concentra el riesgo

### Acusación injusta y prueba defectuosa

[[munoz-misconduct-allegation-evidence-2026|Munoz et al. (2026)]] analizaron expedientes reales de acusaciones de mala conducta con IA generativa y clasificaron la evidencia que usaban las instituciones en categorías: rastros de conducta registrados por el sistema, disponibles solo en evaluaciones vigiladas o supervisadas; evidencia de proceso, como borradores, reuniones de supervisión y presentaciones allí donde existen esas prácticas; y evidencia generada por la propia investigación. De ahí se siguen dos consecuencias para la exposición legal. Primera, en las entregas no supervisadas la categoría registrada por el sistema está vacía, lo que empuja los casos hacia categorías más débiles. Segunda, dejan constancia de que los principios de justicia natural exigen que se informe al estudiante de la acusación y se le dé oportunidad de responder antes de cualquier determinación, obligaciones codificadas en los estándares regulatorios australianos (Department of Education, 2021; TEQSA, 2025) y también en políticas de integridad académica bien consideradas. La oportunidad de respuesta suele ser una reunión de investigación o una entrevista ante un panel, y todo lo que diga el estudiante pasa a formar parte del registro probatorio, lo que significa que los fallos procedimentales, y no solo los probatorios, son donde un caso se vuelve vulnerable.

El problema probatorio subyace a todo lo anterior. La salida del detector es la prueba a la que se recurre con más frecuencia y la que menos peso puede soportar. [[hadra-ai-detector-accuracy-efl-2026|Hadra et al. (2026)]] probaron Turnitin y Originality con un corpus equilibrado de 192 textos y encontraron una exactitud global de 0,69 y 0,61 respectivamente, con ambos rindiendo mal en la escritura híbrida humano–IA —la forma más probable en una acusación real— y con la exactitud cayendo aún más con la longitud del texto y en la escritura científica, además de una tendencia limítrofe a clasificar erróneamente como IA el trabajo escrito por humanos cuando quien escribía era estudiante de inglés como lengua extranjera. [[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer et al. (2026)]] llegan a la misma conclusión desde otro corpus y otro conjunto de herramientas, y [[bassett-ai-detectors-education-2026|Bassett et al.]] plantean el argumento estructural de que ningún umbral resuelve el problema: un detector ajustado para atrapar el uso de IA señalará trabajo humano, y uno ajustado para no dañar el trabajo humano dejará pasar el uso de IA, de modo que cualquier puntuación única es una decisión sobre qué error cometer. [[karr-ai-detection-humanization-2026|La revisión de Karr]] sobre por qué fracasa la detección llega al mismo punto desde el lado de la humanización de la escritura, y [[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al. (2026)]] sostienen que el propio marco procedimental necesita ahora una reevaluación, porque la era de la mala conducta indetectable rompe el supuesto de que esta puede probarse a partir del artefacto entregado.

### Privacidad y vigilancia

[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana et al. (2026)]] mapean la [[remote-proctoring|supervisión remota]] en la evaluación de enfermería y sitúan la privacidad y la vigilancia entre sus principales preocupaciones, junto al impacto emocional en el estudiantado y los efectos sobre la [[equity-in-ai-education|equidad]]. [[automated-online-exam-proctoring-decade-review-2026]] y [[academic-dishonesty-automated-proctoring-ai-2026]] documentan las mismas [[ai-technologies|tecnologías]] en una ventana temporal más larga, y las cuestiones de protección de datos que plantean son ordinarias pero con consecuencias jurídicas: qué se captura (vídeo, audio, pulsaciones de teclas, mirada, escaneos de la habitación), cuánto tiempo se conserva, dónde se almacena, quién puede acceder a ello, si el proveedor lo procesa posteriormente y si el estudiantado consintió en ello como condición para la evaluación. Las instituciones que operan en entornos de datos regulados asumen obligaciones legales mucho antes de que aparezca cualquier litigio, y el trabajo de la base de conocimiento sobre sistemas de IA locales y alojados por proveedores, atento a FERPA y al RGPD, muestra cómo las mismas preguntas se aplican a las herramientas de enseñanza y no solo a la supervisión.

### Accesibilidad y discapacidad

[[wright-transcription-not-generation-2026|Wright (2026)]] sostiene que las prohibiciones generales del «uso de IA» son demasiado inclusivas porque no distinguen la transcripción de voz a texto y el OCR de la redacción generativa, y que el estudiantado con afecciones que afectan al control motor fino, a la legibilidad de la escritura a mano o a la precisión al teclear ha dependido históricamente precisamente de esas herramientas, incluidos productos autónomos de voz a texto como Dragon NaturallySpeaking, varios de los cuales se han discontinuado o degradado, con la transcripción impulsada por IA cubriendo ese hueco funcional. Wright señala que la intersección entre discapacidad, tecnología de asistencia y política de mala conducta con IA está poco explorada y que la escala de este desplazamiento no se ha medido empíricamente. La exposición tiene una forma sencilla: una regla que elimina el medio principal de una persona para producir trabajo legible es una regla que puede necesitar un proceso de ajuste para sobrevivir. [[shin-ai-policies-sld-2026]] documenta el mismo vacío desde el lado de la política para estudiantes con dificultades específicas de aprendizaje, y el trabajo de la base de conocimiento sobre [[assistive-technology|tecnología de asistencia]] y [[neurodiversity|neurodiversidad]] aporta los términos del contexto.

### Equidad lingüística y el límite entre apoyo y sustitución

[[li-genai-assessment-language-equity-2026|Li (2026)]] aporta la versión del argumento basada en la igualdad para el estudiantado que usa el inglés como lengua adicional. Como una única interfaz realiza ahora tanto la edición permitida como la redacción prohibida, una regla que trata la [[generative-ai|IA generativa]] como una sola categoría de asistencia no autorizada impone cargas de cumplimiento mayores al estudiantado con más probabilidades de necesitar apoyo lingüístico legítimo, concentra la sospecha en quienes escriben con una fluidez superficial que ha cambiado y habilita una aplicación selectiva sobre pruebas débiles, con acusaciones que conllevan consecuencias reputacionales, académicas y a veces de visado o económicas. El remedio es un límite definido por la función y por el constructo de la evaluación y no por el nombre de la herramienta, que separe las intervenciones superficiales que no añaden ideas, fuentes ni estructura analítica de la sustitución que crea o reconfigura materialmente el trabajo intelectual, con una [[ai-use-disclosure|declaración]] calibrada para que la traducción y la edición rutinarias no atraigan costes de cumplimiento superiores a los que soportan sus pares monolingües. La estructura jurídica es el razonamiento de discriminación indirecta: identificar la carga desproporcionada que produce una regla formalmente neutral en un colectivo, y preguntar después si se persigue un fin legítimo por medios proporcionados y prácticamente viables, reforzado por la expectativa del derecho administrativo de que quien decide pueda enunciar la regla aplicada, la prueba en la que se basó y por qué el resultado fue proporcionado, que es lo que hace revisable una determinación y legítimo el proceso. La [[ai-detection|detección]] queda rebajada a señal de triaje, y se prefieren como prueba los historiales de borradores, las entregas por etapas y una breve conversación alineada con el constructo, de modo que la exposición corre en ambos sentidos: hacia una impugnación por discriminación o revisión, y hacia la fragilidad de un hallazgo que se apoya en indicios como un lenguaje pulido o una formulación no nativa.

### Reglas poco claras y aplicación incoherente

[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski y Hurley (2025)]] tratan la claridad como condición previa para una aplicación defendible y no como una cortesía, y reportan que las políticas de las facultades de Derecho van desde una [[governance|gobernanza]] integral hasta la ausencia de política declarada, y que la mayoría deja al profesorado individual interpretar y aplicar las reglas. [[qian-governing-genai-higher-ed-policy-2026|Qian (2026)]] encuentra la misma variación entre universidades estadounidenses junto con ecosistemas de apoyo que difieren igual de mucho, y [[crompton-governing-genai-higher-ed-delphi-2026]] reporta el consenso experto de que la gobernanza está fragmentada. Un estudiante sancionado bajo una regla que nadie puede enunciar con precisión es un conflicto sobre el procedimiento y la justicia antes que un conflicto sobre la IA, y [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] sostiene que el remedio es un [[assessment|diseño de la evaluación]] que haga visibles el juicio y la responsabilidad en lugar de una vigilancia que los infiera. La encuesta de [[watson-rainie-ai-challenge-faculty-survey-2026|Watson y Rainie (2026)]] a 1.057 docentes estadounidenses muestra la misma incoherencia desde la otra dirección: el 87% de quienes respondieron escribieron sus propias reglas a nivel de tarea, mientras que solo el 48% dijo que su institución tenía directrices escritas y el 35% que las tenía su departamento, así que el estudiantado de una misma institución se encuentra con un mosaico de políticas redactadas individualmente. La respuesta estructural que subyace a esos documentos es débil —un grupo de trabajo u órgano de supervisión en el 55% de los casos, pero la [[ai-literacy|alfabetización en IA]] adoptada como resultado de formación general solo en el 13%— y esto importa jurídicamente porque aplicar una regla que la institución nunca adoptó es difícil de defender.

[[coates-governing-academic-integrity-indicators-2025|Coates, Croucher y Calderon (2025)]] sitúan la debilidad más arriba, en la gobernanza y no en la conducta del estudiantado ni en la calidad de los instrumentos. Su marco de indicadores de integridad académica —130 ítems en ocho dimensiones que van del diseño y el desarrollo al análisis, la presentación de informes, la evaluación y la mejora— está redactado como preguntas de gobernanza para consejos y comités: si el órgano superior de la institución recibe actualizaciones sobre los procesos y resultados de evaluación, si los indicadores clave de rendimiento cubren la calidad de la evaluación, si la inducción y la orientación incluyen la integridad académica y si existe una vía sencilla para derivar casos de trampa por encargo. Su programa de reforma se dirige a las arquitecturas de gobernanza, a las personas que ocupan roles de gobernanza y a las tecnologías y recursos que sostienen la evaluación, y sostienen que ese desarrollo difícilmente rendirá sin una palanca externa procedente de la [[regulation|regulación]], la [[benchmark|evaluación comparativa]] y la competencia entre instituciones. Para la exposición legal, la implicación es que una posición defendible se apoya en conocer y documentar la propia práctica: la misma información que una institución necesita cuando se impugna una determinación.

### Atacar al corrector automático

Una exposición distinta habita dentro de los propios instrumentos. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] ocultó cinco inyecciones indirectas de prompts dentro de los archivos de un ensayo sintético que una [[automated-assessment|herramienta institucional de calificación con IA]] (Microsoft Copilot, GPT-5.2) había suspendido en las seis de seis ejecuciones de referencia. Dos estrategias elevaron la calificación sin ninguna advertencia visible para la persona usuaria, con tasas de éxito declaradas del 100% (9 de 9 iteraciones) y del 94% (17 de 18), combinando manipulación de instrucciones, juego de roles y ofuscación; la herramienta desactivó en silencio un chat tras bloquear el ataque más simple, y en una iteración anunció que nunca seguiría instrucciones incrustadas y luego elevó la calificación en cada una de las seis ejecuciones siguientes. Una calificación obtenida mediante una instrucción oculta no conlleva ninguna pretensión de [[assessment-validity|validez]], y la misma técnica podría usarse para degradar una entrega sin dejar rastro duradero en la salida, lo que significa que el expediente de apelación de una decisión automatizada impugnada puede estar vacío y que un hallazgo de mala conducta (o de mérito) no puede probarse en absoluto a partir del artefacto. Las peticiones sectoriales de Humble son claras: [[educational-policy-ai|política de IA]], [[educational-development|desarrollo profesional]] y pruebas de resiliencia estandarizadas y agnósticas al dominio para que la superficie de ataque se mida en lugar de suponerse, con uso restringido de la IA y [[human-in-the-loop-ai|revisión humana]] reservados para el trabajo de alto riesgo.

### Más allá de la puerta del campus

En los programas profesionales, la exposición no termina con la graduación. Gutowski y Hurley recogen que las reglas de conducta profesional que obligan a quienes ejercen la abogacía —el deber de competencia tecnológica, la confidencialidad, la supervisión de terceros que usan las herramientas, la franqueza ante el tribunal— ya se aplican al uso de IA, y que una autoridad [[hallucination-risk|alucinada]] ha producido sanciones para profesionales que presentaron casos fabricados. La misma lógica de transferencia se aplica allí donde una licencia, un registro o un deber legal acompaña a quien se gradúa, y por eso las páginas disciplinares de [[legal-education|educación jurídica]] y de las [[medical-education|profesiones sanitarias]] deben leerse junto a esta.

## Cuestiones abiertas

- ¿Cuál de estos riesgos ha producido realmente litigios o hallazgos regulatorios? La base de conocimiento tiene procedimientos, políticas y evaluaciones técnicas, pero ningún resultado de casos, y no debería leerse como si lo tuviera.
- ¿Sobrevive la salida del detector como prueba de algo una vez que una institución reconoce sus tasas de error en una audiencia, o ese reconocimiento convierte el caso en una disputa sobre la justicia procedimental?
- ¿Es el proveedor o la institución quien actúa como responsable de los datos cuando la supervisión y la detección funcionan a través de una plataforma de terceros, y cambia eso el asesoramiento a las instituciones?
- ¿Deberían las instituciones publicar los estándares de prueba que aplican a la mala conducta con IA, del modo en que los umbrales probatorios se publican en otros ámbitos, como forma de reducir tanto la acusación injusta como la exposición legal?

## Conceptos conectados

- [[academic-integrity]] — el marco de conducta cuya aplicación conlleva el riesgo
- [[ai-detection]] — el instrumento en el centro de los casos de acusación injusta
- [[remote-proctoring]] — la vigilancia en la evaluación y sus cuestiones de protección de datos
- [[assessment-validity]] — si la prueba puede establecer la afirmación que se deriva de ella
- [[privacy]] — recogida, conservación y tratamiento posterior de los datos del estudiantado
- [[regulation]] — obligaciones legales y regulatorias que las instituciones deben cumplir
- [[governance]] — diseño de políticas internas y coherencia de su aplicación
- [[educational-policy-ai]] — la política institucional de IA como fuente de exposición no intencionada
- [[ai-use-disclosure]] — las expectativas de declaración y sus límites inaplicables
- [[accessibility]] — ajuste razonable cuando una regla elimina una herramienta de asistencia
- [[assistive-technology]] — las herramientas en el centro del problema de inclusión excesiva
- [[neurodiversity]] — el estudiantado más expuesto a prohibiciones demasiado amplias
- [[equity-in-ai-education]] — la carga diferencial de la detección y la vigilancia
- [[student-experience]] — el coste humano que precede al jurídico
- [[hallucination-risk]] — la autoridad fabricada como responsabilidad profesional e institucional
- [[reducing-ai-misuse]] — la alternativa de prevención a la acusación

## Artículos conectados

- [[munoz-misconduct-allegation-evidence-2026]] — Qué contienen realmente los expedientes de acusaciones de mala conducta y el requisito de justicia natural
- [[hadra-ai-detector-accuracy-efl-2026]] — Exactitud de los detectores, fallo con texto híbrido y riesgo de clasificación errónea de estudiantes de inglés como lengua extranjera
- [[van-vlasselaer-ai-detector-reliability-2026]] — Fiabilidad de las herramientas de detección en un segundo corpus
- [[bassett-ai-detectors-education-2026]] — Por qué ningún umbral de detección puede ser correcto: el argumento de la disyuntiva de errores
- [[teichmann-detecting-undetectable-misconduct-2026]] — Los procedimientos de mala conducta reevaluados cuando la prueba se ha vuelto indetectable
- [[wright-transcription-not-generation-2026]] — Reglas sobre IA demasiado inclusivas, ajustes por discapacidad y adaptación razonable
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — La supervisión remota mapeada, con preocupaciones de privacidad y vigilancia
- [[automated-online-exam-proctoring-decade-review-2026]] — Una década de investigación sobre supervisión automatizada
- [[academic-dishonesty-automated-proctoring-ai-2026]] — Deshonestidad académica y supervisión en la era de la IA
- [[gutowski-hurley-genai-policy-legal-education-2025]] — La claridad de las políticas como condición previa para una aplicación defendible
- [[qian-governing-genai-higher-ed-policy-2026]] — Políticas y ecosistemas de apoyo en universidades estadounidenses innovadoras
- [[crompton-governing-genai-higher-ed-delphi-2026]] — Consenso experto sobre una gobernanza fragmentada
- [[sharma-judgment-visible-genai-assessment-2026]] — Integridad mediante un juicio visible en lugar de vigilancia
- [[shin-ai-policies-sld-2026]] — El vacío de políticas para estudiantes con dificultades específicas de aprendizaje
- [[li-genai-assessment-language-equity-2026]] — La equidad lingüística como problema de diseño de reglas: el límite entre apoyo y sustitución, la discriminación indirecta y la revisabilidad (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Estudiantes que atacan a los correctores de IA mediante inyección indirecta de prompts, con calificaciones modificadas sin ser detectadas (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Indicadores de gobernanza y programa de reforma para autenticar la evaluación (Coates, Croucher y Calderon 2025)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 1.057 docentes estadounidenses: las políticas individuales superan con creces a las institucionales y la respuesta estructural es débil (Watson y Rainie 2026)
- [[edtech-privacy-deferral-2026]] — «Ya lo arreglaremos más adelante»: educación, IA y el aplazamiento de la privacidad del estudiantado en la tecnología educativa