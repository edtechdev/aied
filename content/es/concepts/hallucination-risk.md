---
title: Riesgo de alucinación
created: "2026-09-28T20:16:26-04:00"
updated: "2026-10-26T22:02:40-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/hallucination-risk
source_updated: "2026-10-26T07:30:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa.*

> **Riesgo de alucinación** — el peligro de que los sistemas de IA generen contenido verosímil pero factualmente incorrecto o fabricado en contextos educativos, donde tales errores pueden inducir a error a los [[learners]], socavar la [[trust]] y producir evaluaciones inválidas. La alucinación tiene consecuencias especialmente graves en educación porque el estudiantado puede carecer del conocimiento de dominio necesario para detectar los errores de la IA, y el profesorado puede fiarse de diagnósticos o retroalimentaciones generados por IA que parecen autorizados pero carecen de fundamento.

## Preguntas para reflexionar

- El estudiantado a menudo carece del conocimiento de dominio para detectar un error de la IA, y el profesorado puede fiarse de diagnósticos de IA que suenan autorizados. ¿Cómo hace esta asimetría de conocimiento entre la IA y quien aprende que la alucinación sea especialmente peligrosa en educación?
- Un estudio halló que una IA que diagnosticaba matemáticas manuscritas del estudiantado podía fabricar citas de evidencia que no existían, a la vez que afirmaba confianza. Cuando una IA suena segura y cita «evidencia», ¿qué debería hacerle parar y verificar?
- Si un [[intelligent-tutoring|tutor de IA]] valida en exceso soluciones incorrectas y rechaza en exceso razonamientos válidos pero subóptimos, ¿cuál sería el efecto a largo plazo en el estudiantado y el profesorado que confían en él?
- La página propone la revisión humana en el bucle, la calibración de la confianza atenta a la evidencia y el anclaje en fuentes verificadas como mitigaciones. ¿Cuál de ellas parece más viable en su propio contexto, y qué podría seguir sin detectar?
- ¿Cómo podría interactuar la alucinación con la dependencia excesiva: por qué un error de la IA es más peligroso cuando quienes la usan confían en la salida sin sentido crítico que cuando son escépticos?
- Si diseñara una herramienta de [[ai-feedback-quality|retroalimentación con IA]] para su estudiantado, ¿qué salvaguardas concretas exigiría para protegerlo frente a salidas verosímiles pero erróneas, y cómo sabría que están funcionando?

## Introducción

La alucinación en la IA educativa adopta varias formas documentadas en los artículos de esta base de conocimientos: evidencia fabricada en la [[assessment|evaluación del estudiantado]], sobrediagnosis segura del conocimiento de quien aprende, y explicaciones verosímiles pero incorrectas que el estudiantado acepta como verdaderas. El riesgo se amplifica en educación porque la asimetría de conocimiento entre la IA y quien aprende sitúa a este último en mala posición para verificar las salidas de la IA. Un escenario adicional son las lecturas de curso generadas por IA que sustituyen a un manual: en un curso de posgrado que reemplazó así su texto comercial, solo alrededor del 0,80% de las 4.487 páginas registradas llevaba una cita en el texto de estilo APA y las cadenas de DOI eran prácticamente inexistentes, de modo que la mayoría de las afirmaciones no podían auditarse desde dentro del propio artefacto ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]). Esa brecha de trazabilidad es distinta de una respuesta incorrecta, porque el texto se lee como autorizado a la vez que ofrece medios internos limitados de confirmación.

Una revisión de 125 estudios pone una horquilla sobre la prevalencia y la brecha de detección: tasas de alucinación del 10–40%, con estudiantes de medicina detectando errores de la IA solo entre el 44 y el 55% de las veces ([[genai-higher-education-systematic-review-2026|Rathnayake (2026)]]).

La **alucinación en la evaluación** es especialmente dañina. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]** halló que los LLM fabrican citas de evidencia no presentes en la escritura a mano del estudiantado al diagnosticar habilidades cognitivas, con un 58,5% de los diagnósticos incorrectos acompañados de afirmaciones falsas de confianza evidencial. **[[llm-fallacy-misattribution]]** documentó la sobre-atribución sistemática de evidencia en el razonamiento de los [[llm]] — los modelos afirman respaldo evidencial donde no existe ninguno. Ambos conectan con las preocupaciones de [[ai-ed-evaluation]] y [[knowledge-tracing]] en torno a [[assessment-validity]]. [[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]] añaden dos modos de fallo visibles cuando la salida de la IA se califica en lugar de inspeccionarse: detalles concretos fabricados que sobreviven a la corrección — un artículo revisado por pares que no existe, completo con un DOI irresoluble, y un tamaño de muestra comunicado como 378 cuando la fuente decía 329 — y la autocontradicción dentro de una única respuesta, donde el modelo razona hasta la opción correcta y luego informa de otra distinta en su resumen final. Dado que las listas de referencias se califican actualmente por su formato y no por su exactitud, esta clase de error alcanza una nota de aprobado a la vez que induce a error al estudiante que usa la misma herramienta para repasar.

En un piloto de diseño de evaluación, [[authentic-assessments-generative-ai-pilot-2026|Paula et al. (2026)]] hallaron referencias fabricadas y estimaciones de tiempo poco realistas que sobrevivían a repetidos prompts y exigían una revisión académica sustancial: alucinación en una herramienta de borradores orientada al docente más que en el trabajo del estudiantado.

Las **[[misconceptions]] estratégicas** son un pariente más sutil de la alucinación manifiesta. [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević et al. (2026)]] pidieron a siete modelos de pesos abiertos que produjeran una «[[socratic-method|socrática]] trampa» para 35 conceptos nucleares de informática — una explicación fluida y autorizada que descansa sobre un error sutil y específico del dominio — y tres expertos del dominio confirmaron 221 de 241 segmentos solicitados (91,7%) como ideas erróneas estratégicas, sin diferencias significativas entre los dominios de informática. Los errores eran predominantemente conceptuales más que factuales (66,5% frente a 33,5%) y ninguno era puramente lógico, y fueron valorados como de moderada a altamente persuasivos (M = 3,71 en una escala de cinco puntos), con la identidad del modelo explicando el 43% de la varianza. Dado que afirmaciones individuales pueden ser correctas mientras que la relación entre ellas es errónea, la verificación de hechos resulta insuficiente; los autores sostienen que los [[ai-literacy|estudiantes]] necesitan verificación conceptual y validación de modelos mentales. También advierten de que la tasa mide la capacidad bajo un [[prompt-engineering|prompting]] adversarial más que la prevalencia de tales errores en el uso ordinario, y de que no se puso a prueba a ningún estudiante, de modo que no se midió ningún engaño ni resultado de aprendizaje.

**Evidencia manipulada más que fabricada.** Un modo de fallo emparentado en la [[automated-assessment|corrección automatizada]] es la salida alterada desde fuera. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]] sometió a red teaming un flujo de trabajo rutinario de corrección con IA y halló que instrucciones ocultas dentro del archivo entregado subían la nota de un ensayo suspendido sin ninguna advertencia visible en 9 de 9 iteraciones para una estrategia y en 17 de 18 para otra. Dos detalles inciden sobre la [[trust-calibration|confianza]]: una inyección detectada se bloqueaba desactivando silenciosamente el chat y nunca se informaba de ello a la persona usuaria, y en una ejecución en la que la herramienta anunció que seguiría únicamente las instrucciones oficiales de la tarea, seis repeticiones del mismo archivo seguían subiendo la nota. Una nota obtenida así no conlleva ninguna pretensión de [[assessment-validity|validez]], y como la manipulación no deja rastro duradero, el [[human-in-the-loop-ai|docente]] sigue siendo la única comprobación real frente a una salida diseñada para no ser visible.

Las defensas frente a tal manipulación conllevan su propia contrapartida: una canalización de guardarraíles de varias capas dejó exitoso el 46,34% de las inyecciones y Prompt Guard el 38,48%, mientras que NeMo Guardrails bloqueó todos los ataques pero marcó el 16,22% de las consultas benignas del estudiantado — una tasa de falsos positivos que es en sí misma un daño pedagógico en un tutor ([[prompt-injection-defenses-educational-llm-tutors|Maiorano (2026)]]).

La **alucinación en la tutoría** afecta al aprendizaje de forma directa. **[[yasir-llm-tutoring-agents-2026]]** halló que los LLM validaban en exceso soluciones incorrectas a la vez que rechazaban en exceso razonamientos válidos pero subóptimos — fallos sistémicos que inducirían a error tanto al estudiantado como al profesorado. **[[eduframetrap-llm-sycophancy-educational-safety]]** y **[[eduguard-safe-rag-llm-tutor]]** abordan mecanismos de seguridad para LLM educativos. Estos riesgos conectan con la [[pedagogical-safety]] y los requisitos de [[human-in-the-loop-ai]].

Las **estrategias de mitigación** incluyen diseños de [[human-in-the-loop-ai]] en los que la IA apoya en lugar de sustituir el juicio del [[teacher-role|docente]], arquitecturas atentas a la evidencia que calibran la confianza según la calidad evidencial (como defiende MathCog), y anclaje basado en [[rag]] que constriñe las salidas de los LLM a fuentes verificadas. El concepto de [[cognitive-offloading|dependencia excesiva]] está estrechamente relacionado — la alucinación es más peligrosa cuando quienes usan la IA confían en sus salidas sin sentido crítico. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]] añade un modo de fallo que la pila de mitigaciones no cubre del todo: afirmaciones institucionales excesivamente específicas, con aproximadamente un 1,03% de las páginas registradas emparejando un campus con nombre como «Sacramento State» con verbos de política asertivos sobre normas revisadas de permanencia, de tenencia y de promoción u órdenes ejecutivas de la CSU, ninguna de ellas verificable a partir del texto. La especificidad es lo que lo hace costoso, ya que un detalle local fabricado parece lo bastante exacto como para sobrevivir a la comprobación de verosimilitud de una persona lectora, y el remedio que el estudio propone es procedimental más que técnico: tratar la generación como producción de borradores bajo revisión docente, y después comisar las fuentes en un diseño aumentado con recuperación.

**La falta de fiabilidad etiquetada redujo la dependencia declarada en lugar de aumentarla.** Cuando 546 participantes leyeron el mismo diálogo de GAI etiquetado como portador de información fabricada o como verificado y exacto, la etiqueta de fabricación produjo menor [[trust]] y controlabilidad percibida, y mayor disonancia cognitiva y frustración junto a puntuaciones de dependencia *inferiores* (M = 2,935 frente a 3,254) ([[frontiers-gai-hallucination-dependence-2026|Liu et al. (2026)]]). El resultado matiza la lógica de dependencia excesiva de esta página: ver que una salida puede estar fabricada no es lo mismo que seguir apoyándose en ella.

**Las señales de credibilidad pueden amplificar la deferencia en lugar de atenuarla.** El movimiento opuesto aparece cuando una salida poco fiable se presenta disfrazada: añadir citas y señales de credibilidad a la interfaz de debate de ARMADA elevó un 112% la fracción de participantes que abandonaban un juicio inicial correcto en favor de una posición incorrecta de la IA (31,8% frente a 15,0%), y la comprobación manual encontró algunos casos citados mal atribuidos a referencias irrelevantes o ficticias ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]).

## Concepciones erróneas

- **«El estudiantado notará los errores.»** Una **revisión de 125 estudios** sitúa las tasas de alucinación en **10-40%**, y **el estudiantado de medicina —uno de los grupos de quienes aprenden más cuidadosamente seleccionados en la educación superior— detecta los errores de la IA solo entre el 44% y el 55% de las veces**. Tasas de detección muy por debajo de la fiabilidad del azar significan que la carga no puede recaer en quien lee.
- **«Los errores son evidentes cuando aparecen.»** Una IA que diagnosticaba matemáticas manuscritas podía **fabricar citas de evidencia que no estaban ahí mientras afirmaba confianza**. El fallo no era una respuesta verosímil pero equivocada; era un respaldo inventado presentado con certeza, que es el tipo más difícil de detectar porque se lee justo como la evidencia que una persona cuidadosa querría.
- **«Una salida sin citas es un problema de formato.»** En un curso de posgrado que sustituyó su manual comercial por lecturas generadas con IA, solo **alrededor del 0,80% de 4.487 páginas registradas llevaba una cita en el texto en estilo APA**. Eso es una ausencia de procedencia a nivel de corpus, no una omisión ocasional, y significa que la verificación no tiene punto de partida.
- **«La alucinación es un problema de generación del modelo que los modelos más nuevos resuelven.»** El rango de tasas abarca del 10 al 40% en 125 estudios, lo que es una propiedad de la tarea y del despliegue tanto como del modelo. Reducir la tasa es un progreso real y no cambia que quien lee tiene que poder comprobar.

## Conceptos conectados

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]

## Artículos conectados
- [[frontiers-gai-hallucination-dependence-2026]] — Etiquetar un diálogo de GAI como fabricado redujo la confianza y la dependencia a la vez
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Las señales de credibilidad aumentaron la deferencia hacia la salida de la IA, con algunos casos citados mal atribuidos o ficticios
- [[ivory-psychology-assessment-integrity-2026]] — Citas fabricadas y salidas autocontradictorias dentro de un trabajo de estudiantado aprobable (Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: explicaciones verosímiles que son erróneas en el plano conceptual (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Inyecciones de prompt ocultas suben las notas corregidas por IA sin ser detectadas, y los ataques detectados no se comunican (Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — Diseño de evaluaciones auténticas con IA generativa: un estudio piloto de Assessment Authentifire en educación superior
