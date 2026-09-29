---
title: Educación en física
created: "2026-09-28T20:10:55-04:00"
updated: "2026-09-28T21:41:14-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [socratic-method]
technology: [generative-ai, intelligent-tutoring]
discipline: [physics education, stem education]
audience: [learners, instructors]
level: [higher ed]
confidence: high
translation_of: concepts/physics-education
source_updated: "2026-09-22T09:52:55-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Educación en física**: el estudio de cómo el estudiantado aprende física y de cómo enseñarla con más eficacia, abarcando la [[intelligent-tutoring|tutoría con IA]] socrática, la evaluación del [[computational-thinking|pensamiento computacional]], la [[trust|confianza]] del estudiantado y los patrones de adopción de la IA, la validez de la calificación automatizada y la formación del profesorado. Los artículos sobre educación en física de esta base de conocimiento destacan por su especificidad disciplinar: exploran cómo interactúan las herramientas de IA con las exigencias cognitivas propias del razonamiento físico —el pensamiento visual-espacial, el modelado matemático, el pensamiento sistémico abstracto y la [[problem-solving|resolución de problemas]] de varios pasos.

## Preguntas para reflexionar

- Los problemas de física a menudo exigen pensamiento visual-espacial, modelado matemático y razonamiento de varios pasos. ¿Por qué podrían ser precisamente estas las exigencias cognitivas con las que luchan los tutores de IA actuales?
- El estudiantado declara una gran brecha entre confianza y utilidad: el 91% usa la IA para el trabajo de curso, pero solo el 41% confía en ella. ¿Ha usado alguna vez una herramienta en la que no confiaba del todo? ¿Qué originaba esa brecha?
- La calificación con IA subestimó de forma sistemática las explicaciones de física del estudiantado con menor competencia lingüística. ¿Qué sugiere eso sobre cómo califica una IA una explicación frente a una respuesta numérica correcta?
- Un estudio encontró que un chatbot socrático con IA mejoró drásticamente la especificidad de las preguntas en un curso de física en vivo, pero el estudiantado también «cedía el control estratégico» al tutor con frecuencia. ¿Cuándo ayuda al aprendizaje entregar el control estratégico y cuándo lo perjudica?
- ¿Por qué puede ser la física un «banco de pruebas» para la [[ai-education|IA en la educación]]? ¿Qué hace que sus problemas sean ideales para estudiar cómo afecta la IA al razonamiento y a la evaluación?
- ¿Confiaría en una IA para calificar su conjunto de problemas de física o para razonar con usted sobre un diagrama de fuerzas? ¿Qué tendría que cumplir la IA —y su curso— para que dijera que sí?

## Introducción

La [[research-methods-aied|investigación]] sobre educación en física se ha convertido en un banco de pruebas para la IA en la educación porque los problemas de física están bien estructurados y a la vez son cognitivamente exigentes, lo que los hace ideales para estudiar cómo afectan las herramientas de IA al aprendizaje, al razonamiento y a la evaluación. Los 26 artículos de esta base de conocimiento dibujan en conjunto el panorama de un campo que lidia tanto con la promesa como con los límites de la IA: desde [[conversational-ai|chatbots]] socráticos que mejoran la calidad de las preguntas del estudiantado hasta sesgos sistemáticos de calificación que penalizan a quienes aprenden con diversidad lingüística.

### Temas clave de investigación

**La tutoría socrática con IA en física** es el tema más desarrollado, con tres artículos que despliegan diálogo socrático impulsado por [[llm|LLM]] en cursos reales de física. **[[hashmi-socratic-physics-chatbot-2025|Hashmi et al.]]** demostraron que la interacción socrática sostenida con un chatbot de IA mejora drásticamente la especificidad de las preguntas en mecánica introductoria, con 150 estudiantes de carreras STEM en un curso en vivo. **[[socratic-ai-physics-tutor-taxonomy-2026|Hashmi y Rebello]]** construyeron una taxonomía ascendente de 357 categorías de discurso estudiantil a partir del mismo despliegue, revelando que los turnos metaprocedimentales —en los que el estudiantado cede el control estratégico al tutor— dominan las interacciones. Ambos contribuyen a la investigación más amplia sobre el [[socratic-method|método socrático]] y conectan con los marcos de [[intelligent-tutoring|tutoría con IA]] y [[intelligent-tutoring|tutoría inteligente]].

**La adopción y la confianza del estudiantado en la IA** explora cómo usa realmente el estudiantado de física las herramientas de IA. **[[fouad-bentley-trust-utility-gap-physics-2026|Fouad y Bentley]]** encontraron una brecha de 50 puntos entre confianza y utilidad: el 91% usa la IA para el trabajo de curso, pero solo el 41% confía en ella, y el estudiantado identificó espontáneamente modos de fallo de la IA en el razonamiento visual-espacial y en los circuitos. **[[becker-chatgpt-typology-physics-2026|Becker et al.]]** desarrollaron una tipología de dos perfiles —70% «usuarios pragmáticos» y 30% «no usuarios escépticos»— a partir de 1.189 respuestas de encuesta, mostrando que ambos grupos hacen concesiones calculadas entre riesgo y utilidad. Estos estudios hacen avanzar la investigación sobre [[ai-literacy|alfabetización en IA]] y [[trust-calibration|calibración de la confianza]], y cuestionan las [[educational-policy-ai|políticas de IA]] uniformes para todos.

**Cambio de percepción sin cambio de conducta** es lo que [[physics-students-llm-perceptions-instruction-2026|O'Brien et al. (2026)]] añaden a este panorama. Una lección reflexiva sobre cómo funcionan los LLM, impartida en un curso obligatorio de primer año para estudiantes de física, elevó notablemente el escepticismo —el acuerdo con que los LLM pueden dejar al estudiantado con una falsa sensación de confianza subió del 58% al 88%, y la creencia de que un LLM supera al estudiante medio de física bajó del 54% al 32%—, mientras que la comodidad (71% de acuerdo) y la presión de los plazos (65%) siguieron siendo los motivos dominantes de uso. Los límites de la lección son tan informativos como su efecto: la enseñanza de [[ai-literacy|alfabetización en IA]] cambió lo que el estudiantado decía sobre estas herramientas y no las presiones que le llevan a recurrir a una, y por eso una intervención de este tipo acompaña al diseño de problemas y políticas en lugar de sustituirlo.

**La evaluación y el pensamiento computacional** examina cómo puede la IA evaluar el aprendizaje de la física. **[[llm-computational-thinking-physics-2026|Savage et al.]]** utilizaron LLM para evaluar el crecimiento del [[computational-thinking|pensamiento computacional]] en física introductoria y encontraron que los LLM pueden escalar la evaluación del PC pero tienen dificultades con constructos complejos como el pensamiento sistémico. **[[ai-scoring-language-bias-physics|Feser y Tschisgale]]** demostraron que la calificación con IA subestima de forma sistemática las explicaciones de física del estudiantado con menor competencia lingüística, un hallazgo que conecta con la [[assessment-validity|validez de la evaluación]], la [[bias-mitigation|mitigación de sesgos]] y la [[equity-in-ai-education|equidad en la educación con IA]].

**Infraestructura psicométrica para la evaluación diagnóstica.** [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] invierten la pregunta habitual sobre la IA en física: en lugar de preguntar si un modelo puede resolver o calificar física, preguntan si las propias [[assessment|evaluaciones]] basadas en la investigación del campo pueden diseñarse para diagnosticarla. Mapearon los ítems del FCI, el FMCE y el EMCS sobre 14 objetivos de aprendizaje finamente definidos y ajustaron un modelo de diagnóstico cognitivo DINA a 24.394 respuestas de postest de 807 cursos en 79 instituciones a través de la plataforma LASSO, construyendo el [[cognitive-diagnosis|Diagnóstico Cognitivo de Mecánica]], presentado como el primer test adaptativo informatizado de diagnóstico cognitivo en física. El FCI y el EMCS ajustaron bien (RMSEA² = 0,033 y 0,022), mientras que el FMCE ajustó solo de forma marginal (0,065), y los autores atribuyen ese desajuste al diseño del instrumento y no al modelado: 42 de los 43 ítems puntuados del FMCE comparten enunciados de escenario en conjuntos encadenados, lo que crea la dependencia local entre ítems que prohíbe el supuesto de independencia condicional del DINA (el FCI agrupa 13 de 30 ítems; el EMCS ninguno). La precisión de clasificación alcanzó el umbral [[formative-assessment|formativo]] de bajo impacto en 19 de 22 combinaciones de objetivo y evaluación; los tres fallos fueron objetivos de energía del EMCS cuyos ítems se solapan en torno al 70 por ciento, de modo que no puede separarse el dominio de uno del de los otros. La importancia para la enseñanza de la física es que los instrumentos que los cursos ya administran pueden reutilizarse para ofrecer retroalimentación procesable a nivel de objetivo *durante* la instrucción en lugar de una puntuación retrospectiva de postest, siempre que las afirmaciones diagnósticas se planteen con la resolución que el banco de ítems puede sostener realmente.

**Evaluación comparativa de la IA multimodal en problemas auténticos de física.** [[omniphys-multimodal-physics-benchmark-2026|Chen et al. (2026)]] presentan **OmniPhys**, un [[benchmark|punto de referencia]] [[multimodal]] a gran escala (15.246 preguntas, 19.850 imágenes) que abarca desde la secundaria hasta el nivel universitario en física, a partir de corpus educativos chinos. De forma inusual, evalúa no solo la comprensión de la *entrada* multimodal sino también la generación de *salida* multimodal: si los modelos pueden sintetizar diagramas de física estructurados, un componente central de la resolución auténtica de problemas. Las extensas evaluaciones revelan lagunas críticas en los LLM multimodales actuales, especialmente en razonamiento complejo y generación visual.

**Marcos de diseño instruccional para la enseñanza aumentada con IA.** **[[airis-cognitively-activated-ai-physics-2026|Kuhn et al.]]** proponen el marco **AIRIS** (Activar–Indagar–Reflexionar con Apoyo Inteligente), una estructura de tres fases para un uso cognitivamente activado de la IA en física: el estudiantado predice y esboza los resultados esperados antes de la IA (Activar), delega en la IA los pasos computacionales y de representación mientras compara críticamente la salida con sus propias predicciones (Indagar) e interpreta, comprueba la coherencia entre representaciones y reflexiona después sobre lo que aportó la IA (Reflexionar). Fundamentado en el [[self-regulated-learning|aprendizaje autorregulado]], la teoría de la [[cognitive-offloading|carga cognitiva]], las representaciones externas múltiples y la [[human-ai-collaboration|colaboración humano-IA]], enmarca el reto central como un problema de [[learning-design|diseño instruccional]] y no de trampas o de elección de herramienta, y reclama experimentos de «condición de retirada» que comprueben si el aprendizaje sobrevive a la retirada del apoyo de la IA.

**Vídeo generativo como datos experimentales sintéticos.** [[genai-video-engineering-physics-workflow-2026|Alvarado-Cruz et al. (2026)]] generan escenarios de vídeo con PixVerse, Grok Imagine y Pippit para tres regímenes de fuerza resistiva —fricción constante, arrastre lineal y arrastre cuadrático—, extraen la cinemática con la herramienta de [[open-source|código abierto]] Tracker y ajustan los modelos analíticos por mínimos cuadrados no lineales. Los datos sintéticos coincidieron con las ecuaciones clásicas del movimiento y recuperaron parámetros físicamente significativos, y el hallazgo práctico recurrente es que la especificidad del prompt determina la coherencia física: descripciones más detalladas produjeron dinámicas más coherentes. El flujo de trabajo refleja la práctica experimental desde la construcción del modelo hasta la validación [[quantitative-research|cuantitativa]], y reencuadra la [[prompt-engineering|formulación de prompts]] como una etapa del diseño experimental y no como una comodidad. Lo que todavía no demuestra es aprendizaje: aquí la validación es la coincidencia entre el movimiento generado y los modelos de los autores, no el juicio de medición del estudiantado, así que el enfoque hereda la pregunta de [[assessment-validity|validez]] que debe responder cualquier dato generado que se use como evidencia.

**Desempeño asistido frente a conocimiento no asistido en un curso rediseñado.** Un rediseño de 2026 del curso introductorio de física nuclear y de partículas de la Universidad del Ruhr en Bochum (Mikhasenko et al.) permitió la [[generative-ai|IA generativa]] en diez hojas de deberes deliberadamente resistentes a la IA y con forma de investigación, diseñadas para que un [[prompt-engineering|prompting]] ingenuo no bastara. La [[student-engagement|implicación]] y la ambición fueron altas —24 de 42 estudiantes obtuvieron crédito en las diez hojas, y una deducción llenó más de dos metros de pizarra—, pero un examen escrito de 90 minutos sin ayuda fue una «advertencia seria»: una media de 20,6/80, con solo dos de 27 examinandos alcanzando 40. Los autores concluyen que el desempeño asistido y el conocimiento recuperable de forma independiente son logros distintos que no puede suponerse que se entrenen o demuestren mutuamente, y que los cursos de física deben reservar parte de la práctica para el trabajo sin ayuda, lo que refuerza la evidencia más amplia de la base de conocimiento sobre la [[transfer-of-learning|transferencia]].

**El diseño del rol del agente como variable instruccional.** [[wang-teacher-student-centered-agents-physics-2026|Wang et al. (2026)]] mantienen constantes el modelo (DeepSeek R1), la plataforma y la temperatura, y varían solo el rol especificado en el prompt: un agente centrado en el docente que responde de forma autoritativa desde una fuente de conocimiento acotada a un manual, frente a un agente centrado en el estudiante configurado como docente empático con conocimiento de la comprensión del estudiantado, programado para diagnosticar la causa de las [[misconceptions|ideas erróneas]], nombrar el concepto relevante y transferir a un fenómeno análogo. En 59 egresados de secundaria que resolvieron dos ítems conceptuales, el agente centrado en el estudiante produjo puntuaciones de postest más altas (9,67 frente a 7,93; r = 0,38), menor carga cognitiva extrínseca y mayor carga germánica, una experiencia de flujo más intensa (d = 0,92) y una percepción de empatía más alta (r = 0,53): evidencia de que el encuadre del rol, y no solo la exactitud de la respuesta, es lo que hace que un agente de física sea instruccionalmente eficaz ([[pedagogical-agent|agente pedagógico]], [[prompt-engineering|ingeniería de prompts]]).
- **Las puntuaciones de los puntos de referencia subestiman lo que los modelos ya pueden hacer en física.** La recalificación de seis puntos de referencia de física muy usados con especialistas del dominio encontró que la mayor parte del déficit notificado era un artefacto de ítems defectuosos y calificadores automáticos restrictivos: de 250 rechazos auditados, 143 (57,20%) eran defectos del punto de referencia y 95 (38,00%) errores del calificador, con solo 12 (4,80%) errores genuinos del modelo. Corregidos, la media@4 de HLE-Physics subió del 47,28% al 78,66% y la de CritPt del 32,29% al 87,50%. Para la enseñanza de la física esto corta en ambos sentidos: significa que el estudiantado ya puede obtener soluciones textuales de nivel experto para muchos problemas canónicos, así que la evaluación del razonamiento físico debe avanzar hacia ítems que resistan la contaminación de los puntos de referencia y hacia evidencia del proceso en lugar de respuestas finales. ([[frontier-models-physics-benchmark-audit-2026]])

### Conexiones con conceptos relacionados

La educación en física se sitúa dentro del dominio más amplio de la [[stem-education|educación STEM]], pero tiene conexiones distintivas: con el [[socratic-method|método socrático]], por la fuerte tradición del diálogo socrático en la resolución de problemas de física; con el [[computational-thinking|pensamiento computacional]], por el papel creciente de la computación en la física; con la [[assessment-validity|validez de la evaluación]], por los retos de calificar explicaciones de física; y con la [[professional-training|formación profesional]], por la preparación basada en la [[simulation|simulación]]. Los conceptos de [[student-experience|experiencia del estudiantado]] y [[ai-literacy|alfabetización en IA]] son esenciales para entender cómo navega el estudiantado de física las herramientas de IA, mientras que la [[educational-measurement|medición educativa]] y la [[automated-assessment|calificación automatizada]] conectan con la dimensión de la evaluación.

## Implicaciones para el profesorado de física

- **Diseñar para la confianza del estudiantado, no solo para la adopción.** [[fouad-bentley-trust-utility-gap-physics-2026|Fouad y Bentley]] documentan una brecha de 50 puntos entre confianza y utilidad (91% de uso, 41% de confianza), con el estudiantado identificando fallos de la IA en el razonamiento visual-espacial y en los circuitos: cree oportunidades para exponer y discutir estos límites en lugar de dar por supuesta la aceptación.
- **Usar la IA socrática para profundizar la calidad de las preguntas, pero vigilar la cesión estratégica.** [[hashmi-socratic-physics-chatbot-2025|Los chatbots socráticos]] mejoran la especificidad de las preguntas, pero [[socratic-ai-physics-tutor-taxonomy-2026|la investigación taxonómica]] encuentra que dominan los turnos metaprocedimentales: el estudiantado entrega el control estratégico al tutor. Intervenga para que siga siendo quien decide.
- **Estructurar el uso de la IA cognitivamente, no solo permitirlo.** [[airis-cognitively-activated-ai-physics-2026|AIRIS]] (Activar–Indagar–Reflexionar) muestra el valor de que el estudiantado prediga o esboce antes de la IA, delegue los pasos computacionales mientras compara críticamente la salida y reflexione después: trate la integración de la IA como un problema de diseño instruccional y compruebe si el aprendizaje sobrevive a su retirada.
- **Protegerse frente al sesgo de calificación.** [[ai-scoring-language-bias-physics|La calificación con IA]] subestima de forma sistemática las explicaciones del estudiantado con menor competencia lingüística; use una calificación sensible al lenguaje o moderada por personas en la evaluación conceptual.
- **Usar aulas simuladas para la formación del profesorado.** [[multiagent-classroom-dual-process-physics-teachers-2026|Las aulas simuladas multiagente]] ofrecen a quienes se forman como docentes una práctica poco frecuente de responder al razonamiento auténtico del estudiantado: un complemento de bajo coste a la microenseñanza en vivo.
- **Reservar práctica y evaluación sin ayuda.** El rediseño de Bochum ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al. 2026]]) muestra que unos deberes con forma de investigación y con IA permitida, completados con una alta implicación, pueden dejar al estudiantado muy atrás en un examen sin ayuda (media 20,6/80): trate el desempeño asistido y el conocimiento recuperable de forma independiente como cosas distintas, e incorpore al curso una práctica deliberada sin ayuda y un examen escrito.

## Conceptos conectados

- [[stem-education]]
- [[socratic-method]]
- [[intelligent-tutoring]]
- [[computational-thinking]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[student-experience]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[educational-measurement]]
- [[learning-analytics]]
- [[professional-training]]
- [[simulation]]
- [[generative-ai]]
- [[higher-ed]]
- [[discipline-specific-aied]]
- [[chemistry-education]] — La educación química y la IA: laboratorios, evaluación formativa, límites de los LLM, filosofía de la experimentación
- [[biology-education]] — La educación en biología y la IA: asistentes docentes de laboratorio, alfabetización en IA en biología, pensamiento crítico, herramientas especializadas

## Artículos conectados

- [[genai-video-engineering-physics-workflow-2026]] — De los prompts a las leyes físicas: un flujo de trabajo con IA generativa para la educación en física de ingeniería
- [[wang-teacher-student-centered-agents-physics-2026]] — Agentes de física diseñados por prompt centrados en el docente frente a centrados en el estudiante (Wang et al. 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[benzion-ai-physics-simulations-virtual-lab]] — Uso de la IA para generar rápidamente simulaciones de física y laboratorios virtuales (Ben-Zion et al. 2025)
- [[hashmi-socratic-physics-chatbot-2025]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]
- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[becker-chatgpt-typology-physics-2026]]
- [[llm-computational-thinking-physics-2026]]
- [[ai-scoring-language-bias-physics]]
- [[multiagent-classroom-dual-process-physics-teachers-2026]]
- [[physics-chatbot-epistemological-beliefs-2026]]
- [[ai-generated-smartphone-circular-motion-lab-2026]]
- [[genai-ar-physics-simulation-prompt-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[probing-ai-generated-physics-solutions-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: un marco para la aumentación con IA cognitivamente activada en física
- [[ai-grading-handwritten-physics-2026]] — Calificación con IA de evaluaciones de física manuscritas (Olimpiada)
- [[gemini-lualatex-physics-video-transcription-2026]] — Transcripción de vídeos de física con matemáticas accesibles mediante Gemini+LuaLaTeX
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT resuelve deberes de Qiskit; diseño calificable automáticamente
- [[ai-particle-physics-education-redesign-2026]] — La IA en la educación en física de partículas: problemas de investigación y habilidades fundamentales
- [[mechanics-cognitive-diagnostic-physics-2026]] — Diagnóstico Cognitivo de Mecánica: convertir el FCI, el FMCE y el EMCS en un diagnóstico cognitivo de 14 objetivos (Le et al. 2026)
- [[physics-students-llm-perceptions-instruction-2026]] — Escepticismo frente a comodidad: percepciones y uso de los grandes modelos de lenguaje por parte del estudiantado de física antes y después de la instrucción
- [[context-prompts-physics-assignments-2026]] — Tareas de física impulsadas por inteligencia artificial mediante prompts de contexto
- [[ai-assisted-physics-lab-report-assessment-2026]] — Evaluación asistida por IA de informes de laboratorio de física experimental: potencial, limitaciones y apoyo a la práctica docente
