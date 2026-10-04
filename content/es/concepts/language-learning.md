---
connected_resources: [mglearn]
title: Aprendizaje de lenguas
created: "2026-09-28T20:12:29-04:00"
updated: "2026-10-04T17:14:09-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [equity-in-ai-education]
discipline: [language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/language-learning
source_updated: "2026-10-04T09:35:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-04"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Aprendizaje de lenguas** — el estudio de cómo la IA apoya la adquisición de una segunda lengua (L2), el desarrollo de la escritura y la diversidad lingüística en contextos educativos. La [[ai-education|IA en la educación]] y la [[research-methods-aied|investigación]] de esta base de conocimiento abarcan interlocutores de IA para el diálogo oral, la [[automated-essay-scoring|evaluación automatizada de la escritura]] para quienes aprenden L2, el apoyo a la lectura y las preocupaciones sobre el sesgo lingüístico en los sistemas de puntuación con IA.

## Preguntas para reflexionar

- La lengua es intrínsecamente interactiva, lo que la hace idónea para la [[conversational-ai|IA conversacional]], pero las capacidades lingüísticas de la IA también plantean riesgos de sesgo contra los patrones no nativos. ¿Dónde ha visto que se manifieste esta tensión entre oportunidad y riesgo?
- Un estudio encontró que la puntuación con IA subestima de forma sistemática al estudiantado lingüísticamente más débil, mientras que otro propuso comparar al estudiantado con su propio trabajo anterior en lugar de con normas de hablantes nativos. ¿Cómo cambia el «punto de referencia» de la evaluación que el [[ai-feedback-quality|feedback con IA]] ayude o penalice a quien aprende?
- Los interlocutores de IA pueden ampliar la práctica comunicativa a escala, pero la página advierte de que deben combinarse con la interacción humana para que la fluidez se transfiera a la conversación real. ¿Qué podría ganar practicando con una IA que no puede darle un interlocutor humano, y qué perdería?
- Se demostró que el apoyo del profesorado —y no solo la herramienta de IA— impulsa la implicación en el aprendizaje de lenguas asistido por IA a través de las metas de logro del estudiantado. ¿Cómo moldea el contexto social y [[pedagogy|pedagógico]] que quienes aprenden sigan implicándose con una herramienta de práctica con IA?
- Un [[meta-analysis-systematic-review|metaanálisis]] encontró ganancias pequeñas o moderadas y dependientes del nivel con las tecnologías emergentes, con las habilidades productivas (hablar, escribir) ganando más que las receptivas. ¿Por qué podrían beneficiarse más de las herramientas de IA la expresión oral y escrita que la comprensión auditiva y lectora?
- Si la IA privilegia el inglés estándar y puede penalizar los patrones lingüísticos no nativos o diversos, ¿cómo debería el profesorado de lenguas diseñar la evaluación y el feedback para que la IA apoye la diversidad lingüística en lugar de borrarla?

## Introducción

El aprendizaje de lenguas ha surgido como un dominio significativo de la IA en la educación porque la lengua es intrínsecamente interactiva —lo que la hace idónea para la IA conversacional— y porque las capacidades lingüísticas de la IA plantean tanto oportunidades ([[personalized-learning|práctica personalizada de la lengua]] a escala) como riesgos (sesgo sistemático contra patrones lingüísticos no nativos). Los artículos de esta base de conocimiento exploran ambos lados de esa ecuación. Cuando la lengua meta es **el inglés en concreto** —especialmente el [[english-education|inglés con fines académicos (EAP)]] y la [[teacher-role|enseñanza]] de inglés como lengua extranjera, como segunda lengua o como L2—, véase la página conceptual dedicada al [[english-education|inglés]], que distingue la investigación específica del inglés de la adquisición general de L2 y de la escritura general.

**La IA como tutor e interlocutor de lenguas** es el tema más desarrollado. **[[ai-interlocutor-l2-spoken-dialogue|¿Qué cambia cuando el interlocutor es una IA?]]** examina la fluidez interactiva y la incorporación lingüística cuando quienes aprenden L2 conversan con una IA frente a con humanos. **[[tact-pedagogically-adaptive-esl-tutoring|TACT]]** ofrece tutoría de inglés como segunda lengua pedagógicamente adaptativa. **[[llm-children-reading-story-generation|La generación de cuentos para la lectura infantil]]** explora cuentos generados por IA para el desarrollo lector de los niños. Todo ello se conecta con la [[intelligent-tutoring|tutoría inteligente]] y la [[generative-ai|IA generativa]]. **[[llm-agents-5e-esl-grammar-2026|Yang, Weng y Yang (2026)]]** diseñaron dos agentes basados en [[llm|LLM]]: una profesora de inglés con IA convencional y otra que usa el **marco 5E** (enganchar, explorar, explicar, elaborar, evaluar) para el aprendizaje de la gramática por indagación. En una comparación aleatorizada con **37 estudiantes de inglés como segunda lengua**, **el estudiantado de alto rendimiento respondió positivamente a la profesora de IA**, mientras que el de bajo rendimiento mostró actitudes mixtas, y las condiciones difirieron en motivación intrínseca, cambio cognitivo y rendimiento, lo que indica que el diseño de agentes LLM debe ajustarse al nivel de competencia de quien aprende.

En el caso de los tutores físicamente corporeizados, un metaanálisis de 11 estudios de aprendizaje de lenguas asistido por robots (RALL) (N = 595) encontró un efecto conjunto grande sobre el aprendizaje de L2 (g = 0,83) con alta heterogeneidad, y solo el formato de interacción lo moderó: los formatos grupales superaron a los individuales, mientras que la morfología del robot, la modalidad, la autonomía y el rol social no lo hicieron ([[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang y Zou (2026)]]).

**La IA en la evaluación de lenguas** está emergiendo a medida que los LLM apoyan la [[automated-question-generation|generación de ítems]] y la evaluación. **[[gpt-item-generation-l2-listening-2026|Aryadoust y Wong (2026)]]** compararon la [[prompt-engineering|ingeniería de prompts]] con el ajuste fino para la generación automática de ítems en la evaluación de la comprensión oral en L2: el refinamiento iterativo de los prompts mejoró la calidad de los ítems pero se estancó, mientras que **el ajuste fino de GPT-4.1 sobre el prompt optimizado** (manteniendo constante el diseño del prompt) produjo ganancias adicionales: una plantilla para saber cuándo quienes desarrollan evaluaciones deberían invertir en la adaptación del modelo en lugar de en la iteración de prompts.

Una comparación de 52 tareas de evaluación de inglés como lengua extranjera valoradas por 20 docentes experimentados no encontró diferencias de calidad significativas en conjunto entre los ítems generados por IA y los desarrollados por personas, pero sí una clara división del trabajo: la IA fue preferida para gramática y vocabulario (69%) y el desarrollo humano para lectura, escritura, comprensión auditiva y expresión oral (75–83%) ([[ai-vs-human-assessment-efl-tpck-2026|Nourashrafi, Alavinia y Darvishi (2026)]]).

**La evaluación automatizada de la escritura para quienes aprenden L2** valora la capacidad de la IA para evaluar escritura no nativa. **[[self-referential-l2-writing-llm-assessment|Bannò et al.]]** propusieron un enfoque autorreferencial que compara la escritura del estudiantado con su propio trabajo anterior en lugar de con normas de hablantes nativos. **[[ai-scoring-language-bias-physics|Feser y Tschisgale]]** encontraron que la puntuación con IA subestima de forma sistemática al estudiantado lingüísticamente débil, un hallazgo que conecta con las preocupaciones sobre la [[assessment-validity|validez de la evaluación]] y la [[bias-mitigation|mitigación del sesgo]]. **[[genai-linguistic-diversity-academic-writing|La diversidad lingüística en la escritura académica]]** explora cómo afecta la IA a la diversidad lingüística en contextos académicos.

 Un sistema a nivel de discurso va más allá y nombra el defecto en lugar de puntuar el texto: la clasificación de relaciones entre pares de oraciones localizó rupturas de coherencia —saltos lógicos, conectores ausentes, referencia ambigua— y la adopción, juzgada por docentes, de su retroalimentación generada osciló entre el 71,2% y el 88,4% ([[bert-discourse-english-teaching-2026|Wang et al., 2026]]).

**La [[accessibility|accesibilidad]] para quienes aprenden lenguas** conecta con el [[inclusive-learning|aprendizaje inclusivo]]: **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** analizó cómo usa la IA el estudiantado con dislexia para apoyar la alfabetización, y **[[ai-tools-arab-english-classrooms|las herramientas de IA en aulas árabe-inglés]]** exploraron contextos de aula árabe-inglés. Estos estudios conectan el aprendizaje de lenguas con la [[equity-in-ai-education|equidad en la IA educativa]] y la [[special-education|educación especial]].

**Los mecanismos motivacionales en el aprendizaje de lenguas asistido por IA** examinan por qué quienes aprenden se implican con la IA para practicar la lengua. **[[wang-goal-setting-ai-engagement-2026|Wang y Wang (2026)]]** usaron la teoría del establecimiento de metas con 758 estudiantes universitarios chinos de inglés para mostrar que **el apoyo del profesorado** aumenta la implicación en el aprendizaje asistido por IA a través de las metas de aproximación al dominio y de aproximación al rendimiento del estudiantado (no de las metas de evitación): evidencia de que el contexto pedagógico y social, y no solo la herramienta de IA, determina si el estudiantado sigue implicado en la práctica de lenguas asistida por IA. Esto conecta el aprendizaje de lenguas con la [[motivation|motivación]] y la [[student-engagement|implicación del estudiantado]].

[[chatgpt-english-language-learning-malaysia|Annamalai et al. (2026)]] añaden un caso cualitativo de autodeterminación: en entrevistas con 25 estudiantes universitarios malasios, ChatGPT apoyó la competencia y la autonomía, y su capacidad de respuesta conversacional produjo una sensación de ser escuchado —una «ecología motivacional mediada por IA» en la que la relación se satisface en parte mediante la herramienta, aunque las referencias inexactas exigían verificación y complemento humano.

La calidad del diseño, y no la frecuencia de uso, fue lo que sostuvo el efecto motivacional en un tutor creado por el profesorado: en 74 estudiantes universitarios que usaban un GPT de japonés acotado al curso, la frecuencia de uso fuera de clase no mostró correlación significativa con la autonomía, la competencia ni la relación, mientras que el estudiantado valoró muy bien al tutor para el aprendizaje autodirigido (M = 4,39) y citó la seguridad afectiva (60,8%) ([[instructor-designed-ai-tutors-foreign-language-sdt-2026|Lee y Kwon, 2026]]).

**La escritura apoyada por IA generativa en la etapa primaria.** [[genai-writing-program-primary-l2-motivation-engagement|Lu et al. (2026)]] llevaron a cabo un programa de escritura de opinión de nueve semanas con 301 estudiantes de quinto y sexto grado (grados 5 y 6) en el este de China, con ocho clases intactas asignadas aleatoriamente al programa o a la instrucción convencional. El programa elevó el yo ideal de escritura en L2 del estudiantado (diferencia de medias ajustada 0,20) y su capacidad de recuperación académica (0,17), y subió la implicación conductual y emocional, pero no movió la mentalidad de crecimiento, la implicación cognitiva o metacognitiva ni la organización puntuada por rúbrica: entre las dimensiones de la escritura, solo mejoró el uso de la lengua. Dos rasgos del diseño importan al profesorado de lenguas: se enseñó explícitamente a formular prompts, mediante un banco categorizado de prompts ligados a metas de escritura concretas, y el feedback de IA generativa se usó junto con la comparación con el feedback del profesorado y la revisión repetida. Las ganancias de autoría que el estudiantado declaró se apoyaban en esa estructura instruccional y no en la herramienta por sí sola, y los autores señalan el [[metacognition|autocontrol]] reducido y las estrategias orientadas a atajos como los riesgos permanentes.

## Implicaciones para el profesorado de lenguas

- **Las [[ai-technologies|tecnologías]] emergentes producen ganancias pequeñas o moderadas que dependen del nivel.** Un [[liu-emerging-tech-tefl-review-2026|metaanálisis de 33 estudios de TEFL]] (N = 3.181) encuentra un efecto global de g de Hedges = 0,38 que aumenta con el nivel educativo (primaria 0,29; secundaria 0,35; terciaria 0,44), con la realidad virtual y aumentada produciendo los efectos mayores y las habilidades productivas (hablar, escribir) ganando más que las receptivas, lo que respalda el uso de tecnologías emergentes, sobre todo en el nivel terciario, manteniendo expectativas realistas.
- **Una revisión sistemática cartografía dónde es escasa la educación lingüística con IA en primaria.** En 31 estudios (2013-2025), el trabajo en aulas de lenguas de primaria se concentró en la expresión oral, la alfabetización y el vocabulario, mientras que la gramática, la comprensión auditiva y la lengua de signos apenas se estudiaron, y la mayoría de los diseños carecía de especificidad por curso ([[ai-elementary-language-education-review-2026|Hamasha et al., 2026]]).
- **Use la IA para ampliar la práctica comunicativa, no para sustituirla.** Los [[ai-interlocutor-l2-spoken-dialogue|interlocutores de IA]] y los [[tact-pedagogically-adaptive-esl-tutoring|tutores adaptativos de inglés como segunda lengua]] amplían la práctica interactiva a escala: combínelos con interacción humana para que la fluidez y la incorporación se transfieran a la conversación real.
- **Vigile la salida de la IA en busca de errores pragmáticos, no solo gramaticales.** Docentes de cinco métodos de enseñanza de lenguas en línea nombraron la ceguera pragmática, en la que la salida de la IA es gramaticalmente correcta pero errónea en tono, formalidad o cultura ([[ai-ethics-tensions-online-pedagogy-2026|Baoyi y Khan (2026)]]).
- **Priorice la calidad del feedback sobre la cantidad en la expresión oral con apoyo de ASR.** [[asr-english-speaking-feedback-metacognition-2026|Chen et al. (2026)]] encuentran que la corrección precisa de errores y las tareas de reflexión estructurada mejoran la interiorización del [[feedback]] y el comportamiento reflexivo en la expresión oral en inglés universitario, mientras que el uso frecuente de ASR y la precisión del reconocimiento aumentan la motivación o la reflexión solo en parte: la precisión técnica por sí sola no impulsa una implicación cognitiva más profunda, y el nivel de competencia lingüística modera las ganancias (quienes aprenden con más nivel interiorizan el feedback de forma más eficaz). Esto aboga por un feedback pedagógicamente sólido (por ejemplo, explicaciones articulatorias en lugar de simples marcas de error), por una reflexión con andamiaje y por un apoyo diferenciado según el nivel.
- **Dé pistas antes que correcciones.** Una tarea de ChatGPT de «pista antes que corrección», en la que quienes aprenden infieren las correcciones a partir de indicaciones guiadas en lugar de recibir correcciones directas, redujo la carga cognitiva y apoyó la revisión personalizada, pero el beneficio se mantuvo sobre todo en quienes ya tenían suficientes conocimientos previos (58 estudiantes, MCER A1–B1) ([[lukesova-clue-before-correction-2026|Lukešová y Jennings (2026)]]).
- **Ofrezca retroalimentación de pronunciación que localice la diferencia que hay que cerrar.** Profy aprende la competencia a partir de habla en gran medida sin anotar y muestra *dónde* diverge quien aprende de las distribuciones de hablantes nativos; sus intervalos de confianza de inteligibilidad pre/post no se solaparon, a diferencia de una línea base de imitación elicitada, evidencia de que la práctica de imitación puede apoyarse sin evaluadores expertos ([[ai-guided-learning-audiovideo-2026|Kawamura (2026)]]).
- **Apoye la adaptación psicológica del estudiantado al estudio asistido por IA.** [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]] sigue a estudiantes de japonés durante un semestre y encuentra que se agrupan en perfiles de adaptación desadaptativa, moderada y positiva impulsados por el equilibrio entre tecnoestrés y resiliencia, con la mayoría desplazándose gradualmente hacia una adaptación positiva y declarando mayor [[self-efficacy|autoeficacia]] y menos agotamiento: una señal para diseñar prácticas de lenguas mediadas por IA que gestionen la tensión tecnológica, y no solo el acceso a la herramienta.
- **Esté atento al sesgo en la puntuación y el feedback contra quienes aprenden.** [[ai-scoring-language-bias-physics|La puntuación con IA]] puede penalizar patrones no nativos; [[genai-linguistic-diversity-academic-writing|la investigación sobre diversidad lingüística]] advierte de que la IA privilegia el inglés estándar: use evaluación autorreferencial o moderada por humanos.
- **Apoye todo el espectro de estudiantes.** Los [[dyslexlens-dyslexic-learners-ai|estudios sobre dislexia y accesibilidad]] y el diseño [[culturally-relevant-pedagogy|culturalmente receptivo]] ([[ai-tools-arab-english-classrooms|contextos árabe-inglés]]) muestran que la IA debe adaptarse a necesidades diversas de quienes aprenden, no darse por universal.
- **La infraestructura, y no solo la puntuación, excluye lenguas.** El bengalí representa menos del 0,5% del contenido web mundial frente a un déficit de tokens de entrenamiento de 67:1 entre el inglés y el bengalí y una brecha de conectividad entre el medio rural y el urbano (36,5% frente a 71,4% de penetración de internet), así que un diseño en la lengua nativa y primero sin conexión es un requisito previo para el acceso, y no una comodidad ([[structural-silence-underrepresented-language-ai-2026|Roy y Roy (2026)]]).
- **El profesorado valora la IA generativa para el trabajo preparatorio, no para el uso en directo en el aula.** Una [[li-language-educators-genai-review-2026|revisión sistemática PRISMA de 23 estudios]] (Li et al. 2026) encuentra que el profesorado de lenguas valora sobre todo la IA generativa para la preparación entre bastidores —[[curriculum-design|planificación de clases]], creación de materiales y apoyo a la escritura y al feedback—, pero sigue siendo reacio a una implementación directa y de cara al aula, lo que refleja una brecha entre teoría y práctica entre aprobar la IA en principio y usarla en directo. La adopción está moldeada por factores de identidad profesional, pedagógicos, técnicos, [[governance|institucionales]] y de [[academic-integrity|integridad académica]], y el profesorado se sitúa en un espectro que va de la no adopción a la integración completa; las actitudes tienden a evolucionar desde una inseguridad inicial hacia un uso confiado y selectivo con la exposición.
- **Prepare la [[ai-literacy|alfabetización en IA]] del profesorado de lenguas.** [[governing-unseen-ai-literacy-language-teachers-2026|Las revisiones sistemáticas]] encuentran que la alfabetización en IA del profesorado de lenguas es una carencia clave: invierta en [[educational-development|desarrollo profesional]] docente junto con la adopción de herramientas. A medida que la IA reconfigura la educación lingüística, la alfabetización en IA también es crucial para que el profesorado se implique críticamente con la tecnología: la Escala de Alfabetización en IA del Profesorado (TAILS) se desarrolló para la [[teacher-education|formación del profesorado]] de lenguas, operacionalizando el marco ED-AI de seis dimensiones (conocimiento, evaluación, colaboración, contextualización, [[agency|autonomía]], [[ethics|ética]]) y se validó con futuros docentes de inglés.

- **Cuatro perfiles de interacción en una tarea bilingüe de alta presión.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li y Weng (2026)]] usaron seguimiento ocular, registro con lápiz y grabación de voz con 22 estudiantes de interpretación para mostrar que el estudiantado reparte la atención entre la salida de la IA y sus propias notas de cuatro formas distintas —implicados intensivos, escáneres rápidos, tradicionalistas y cambiadores frecuentes— y que el 58,3% de las observaciones a nivel de etapa cambiaron de perfil entre las etapas de comprensión y de producción de una misma tarea. Solo los patrones de la etapa de comprensión predijeron la calidad del producto, y el grupo más dependiente de la IA obtuvo la peor puntuación en fluidez de la entrega y calidad de la lengua meta, lo que aboga por enseñar al estudiantado a describir y reflexionar sobre su propia estrategia en lugar de prescribir una única forma de trabajar con la herramienta.
- **Ordene el bucle completo de las cuatro destrezas en torno al coste y la conectividad.** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]] publican LLMersion-1, un prototipo local primero que trabaja la comprensión auditiva, la lectura, la expresión oral y la escritura sobre el propio documento de quien aprende en hardware de consumo: un tutor de 1B se cuantiza a 808 MB y toda la pila residente se mantiene por debajo de 4 GB, y calcula cinco años de práctica diaria en unos \$18 de electricidad, frente a \$1.200 de una suscripción en la nube. No se informan resultados de aprendizaje y la retroalimentación de pronunciación es solo segmental.

## Conceptos conectados

- [[eportfolio]]
- [[writing-education]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[special-education]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[speech-and-voice-technologies]]

## Artículos conectados

- [[student-ai-interaction-consecutive-interpreting-2026]] — La interacción estudiante-IA en la interpretación consecutiva asistida por ordenador
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — Perfiles y transiciones de la adaptación psicológica en el aprendizaje del japonés asistido por IA
- [[llm-agents-5e-esl-grammar-2026]] — Agentes LLM con el marco 5E para la adquisición de gramática en inglés como segunda lengua (Yang, Weng y Yang 2026)
- [[gpt-item-generation-l2-listening-2026]] — Prompts frente a ajuste fino de GPT para la generación de ítems de comprensión oral en L2 (Aryadoust y Wong 2026)
- [[bert-discourse-english-teaching-2026]] — Clasificación del discurso con BERT para la enseñanza del inglés
- [[alharbi-ethical-genai-eap-2026]]
- [[sutama-chatgpt-eportfolio-speaking-2026]]
- [[ni-lam-multiliteracies-ai-portfolio-2026]]
- [[llms-text-linguistics-teaching-2026]] — Los LLM en la enseñanza de la lingüística del texto
- [[ai-vs-human-assessment-efl-tpck-2026]] — Tareas de evaluación generadas por IA frente a desarrolladas por humanos en inglés como lengua extranjera
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Gobernar lo invisible: la alfabetización en IA del profesorado de lenguas
- [[ai-guided-learning-audiovideo-2026]]
- [[ai-interlocutor-l2-spoken-dialogue]]
- [[robot-assisted-language-learning-meta-analysis-2026]] — Metaanálisis del aprendizaje de lenguas asistido por robots corporeizados y mejorados con IA
- [[self-referential-l2-writing-llm-assessment]]
- [[ai-scoring-language-bias-physics]]
- [[genai-linguistic-diversity-academic-writing]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[ai-tools-arab-english-classrooms]]
- [[structural-silence-underrepresented-language-ai-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Tutores de IA diseñados por el profesorado en la enseñanza universitaria de lenguas extranjeras: un estudio de métodos mixtos sobre la motivación de quienes aprenden y la experiencia reflexiva de aprendizaje basada en la teoría de la autodeterminación
- [[lukesova-clue-before-correction-2026]] — Pista antes de la corrección: ChatGPT para el aprendizaje autónomo de lenguas
- [[chatgpt-english-language-learning-malaysia]] — Experiencias del estudiantado con ChatGPT en el aprendizaje del inglés
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Características de quienes aprenden × interacciones con el formato de diálogo de TTS
- [[liu-emerging-tech-tefl-review-2026]] — Metaanálisis de tecnologías emergentes para el inglés como lengua extranjera
- [[wang-goal-setting-ai-engagement-2026]] — Teoría del establecimiento de metas: apoyo del profesorado, metas de logro e implicación en el aprendizaje del inglés asistido por IA (758 estudiantes chinos)
- [[li-language-educators-genai-review-2026]] — Prácticas y desarrollo del profesorado de lenguas con IA generativa
- [[asr-english-speaking-feedback-metacognition-2026]] — La tecnología ASR en la expresión oral en inglés universitario: interiorización del feedback y estrategias metacognitivas
- [[genai-writing-program-primary-l2-motivation-engagement]] — Un programa de escritura apoyado por IA generativa para quienes aprenden L2 en primaria (Lu et al. 2026)

- [[llmersion-local-first-language-learning-2026]] — LLMersion: un marco de agente de IA local primero para el aprendizaje de lenguas en casa a bajo coste orientado a la equidad educativa

- [[ai-ethics-tensions-online-pedagogy-2026]] — Ceguera pragmática: la salida lingüística de la IA puede ser gramaticalmente correcta pero culturalmente errónea
