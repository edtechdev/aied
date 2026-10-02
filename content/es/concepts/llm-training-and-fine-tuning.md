---
title: Entrenamiento y ajuste fino de LLM
created: "2026-09-28T20:10:35-04:00"
updated: "2026-10-02T09:09:37-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm]
audience: [learners]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
translation_of: concepts/llm-training-and-fine-tuning
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

> La optimización especializada en un dominio puede transformar un modelo de tamaño medio de [[open-source|código abierto]] (Qwen3-32B) en un experto de dominio [[pedagogy|pedagógico]] que supera a sistemas propietarios mucho mayores, pero solo cuando el entrenamiento recompensa *guiar* en lugar de *responder*.([[singh-eduqwen-pedagogical-rl-2026]]) La teoría clásica del diseño instruccional (ADDIE, Dick y Carey) combinada con el razonamiento ReAct moderno alcanza el mejor rendimiento en el diseño instruccional automatizado.([[jeon-isd-agent-bench-2026]])

## Preguntas para reflexionar

- Los [[conversational-ai|chatbots]] de propósito general están optimizados para dar respuestas rápidas y correctas. ¿Por qué eso es lo *contrario* de lo que necesita un tutor, y qué sugiere ese «desajuste de incentivos» sobre la IA lista para usar como herramienta de [[teacher-role|enseñanza]]?
- Un punto de referencia encontró que 97 modelos puntuaban entre el 28% y el 89% en conocimiento pedagógico, lo que significa que no se aprende automáticamente en el preentrenamiento. ¿Le sorprende, y qué implica eso para confiar en un [[llm]] de propósito general para enseñar?
- El entrenamiento de EduQwen recompensa explícitamente «guiar» por encima de «responder». Antes de leer los métodos, ¿se le ocurre cómo le indicaría a una IA que prefiera guiar, y cómo mediría si de hecho lo hizo?
- La página muestra que la teoría clásica del diseño (ADDIE) combinada con un razonamiento flexible superó tanto a la teoría pura como a la técnica pura. ¿Por qué «estructura más flexibilidad» podría superar a cualquiera de las dos por separado cuando una IA diseña la enseñanza?
- Entrenar pedagogía en un modelo cuesta tiempo, datos y cómputo. En su contexto, ¿qué le convencería de que la inversión vale la pena frente a simplemente pedirle a un modelo de propósito general que «actúe como un tutor»?

## Introducción

Los LLM de propósito general están optimizados para ser útiles: quienes los usan quieren respuestas rápidas y correctas. La tutoría requiere lo contrario: el objetivo **no es dar la respuesta, sino ayudar al estudiante a llegar a ella por sí mismo**. Esto crea un desajuste de incentivos fundamental.

## Enfoque 1: una canalización RL-SFT-RL para el razonamiento pedagógico (EduQwen)

Singh et al. (2026) desarrollaron una canalización de tres etapas que transforma Qwen3-32B en EduQwen, alcanzando un **96,52%** en el punto de referencia CDPK y superando a Gemini-3 Pro (90,55%).

### Etapa 1: RL inicial (EduQwen 32B-RL1)
- **Algoritmo:** DAPO (Decoupled Advantage Policy Optimization) con recorte asimétrico
- **[[reinforcement-learning|Modelo de recompensa]]:** prioriza las respuestas que *guían* sobre las respuestas directas
- **Aprendizaje por currículo:** dificultad progresiva; la minería de negativos duros excluye las preguntas que el modelo base ya resuelve perfectamente
- **Despliegues ampliados:** de 5→8 pasos para capturar decisiones pedagógicas de varios pasos
- **Resultado:** 94,13% (ya SOTA)

### Etapa 2: SFT sintético (EduQwen 32B-SFT)
- El modelo RL1 genera 40.000 respuestas sintéticas
- La selección basada en gradientes conserva solo los ejemplos difíciles
- Muestreo ponderado por dificultad: preguntas fáciles → un ejemplo; preguntas difíciles → todos, con mayor peso
- **Resultado:** 96,20%

### Etapa 3: RL final (EduQwen 32B-SFT-RL2)
- Segunda ronda de DAPO, reutilizando el conjunto original de negativos duros
- El modelo ahora resuelve problemas que al principio le resultaban difíciles
- **Resultado:** 96,52% (SOTA definitivo)

## El punto de referencia de pedagogía: evaluar el conocimiento pedagógico

Lelièvre et al. (2025) presentaron **The Pedagogy Benchmark**, que mide el conocimiento pedagógico entre dominios (CDPK) y el conocimiento sobre [[special-education|necesidades educativas especiales]] y discapacidad (SEND) a partir de exámenes reales de [[educational-development|desarrollo profesional]] docente. En **97 modelos**, la precisión osciló entre el **28% y el 89%**, lo que revela que el conocimiento pedagógico no se adquiere automáticamente en el preentrenamiento general.

**Conexión con EduQwen:** el EduQwen de Singh et al. alcanzó un **96,52% en CDPK**, lo que demuestra que la optimización dirigida con RL+SFT puede cerrar la brecha de conocimiento pedagógico que documentan Lelièvre et al. El punto de referencia sirve a la vez como diagnóstico (muestra que la mayoría de los modelos falla en pedagogía) y como objetivo de entrenamiento (muestra que la optimización funciona).

Las tablas de clasificación en vivo siguen las fronteras de Pareto entre coste y precisión: [rebrand.ly/pedagogy](https://rebrand.ly/pedagogy)

## Enfoque 2: agentes de diseño instruccional fundamentados en la teoría (ISD-Agent-Bench)

Jeon et al. (2026) crearon un punto de referencia para agentes LLM que automatizan el [[learning-design|diseño de sistemas instruccionales]] (ISD), y probaron si la teoría pedagógica clásica mejora el rendimiento del agente.

| Arquitectura | Rendimiento | Por qué |
|-------------|-------------|-----|
| **Híbrida: teoría + ReAct** | **Mejor** | Los marcos clásicos ADDIE/Dick y Carey aportan estructura; ReAct permite un razonamiento flexible de varios pasos |
| Solo teoría | Moderado | Estructurado pero inflexible |
| Solo técnica (ReAct puro) | Peor | Flexible pero sin fundamento pedagógico |

**Idea clave:** la calidad teórica correlaciona fuertemente con el rendimiento en el punto de referencia. Los agentes basados en la teoría destacan en el **diseño centrado en problemas** y en la **alineación entre objetivos y evaluación**.

### Diseño del punto de referencia
- **25.795 escenarios** de Context Matrix (51 variables × 5 categorías × 33 subpasos de ISD)
- **Protocolo de múltiples jueces** entre distintos proveedores de LLM para mitigar el sesgo del LLM como juez
- Se alcanzó una alta fiabilidad entre jueces

## Enfoque 3: seguimiento de instrucciones pedagógicas (LearnLM) y postentrenamiento con datos auténticos (TeachLM)

Dos estrategias complementarias de postentrenamiento para incorporar la pedagogía a los modelos fundacionales:

- **Seguimiento de instrucciones pedagógicas (LearnLM).** [[learnlm-improving-gemini-learning|LearnLM de Google]] reformula el entrenamiento de modelos educativos como *seguimiento de instrucciones pedagógicas*: los ejemplos de entrenamiento y evaluación llevan instrucciones a nivel de sistema que describen el comportamiento pedagógico deseado, lo que permite a desarrolladores y docentes especificar el comportamiento del tutor sin comprometerse con una única definición de pedagogía. Mezclado directamente en el postentrenamiento de Gemini (etapas de SFT + modelo de recompensa + RLHF) mediante coentrenamiento, LearnLM fue preferido por personas expertas frente a GPT-4o (+31%), Claude 3.5 Sonnet (+11%) y Gemini 1.5 Pro base (+13%) en evaluaciones multiturno guiadas por escenarios. Hallazgo clave: **el RL es sustancialmente más eficaz que el SFT solo** para seguir instrucciones pedagógicas matizadas en conversaciones largas.

- **Postentrenamiento con datos auténticos (TeachLM).** [[teachlm-post-training-llms-education|TeachLM]] sostiene que la [[prompt-engineering|ingeniería de prompts]] es un paliativo y que el ingrediente escaso son los datos *auténticos* de interacción entre quien aprende y el tutor. Entrenado con 100.000 horas de sesiones individuales de Polygence (rigurosamente anonimizadas), construye un **[[student-modeling|modelo de estudiante]] auténtico** ajustado que permite una evaluación sintética multiturno, y el modelo docente duplica el tiempo de habla del estudiante, mejora el estilo de preguntar y aumenta los turnos de diálogo un 50%.

**Síntesis:** LearnLM muestra que el seguimiento de instrucciones más RLHF es una vía viable cuando los datos de entrenamiento son escasos; TeachLM muestra que cuando *sí* hay datos auténticos de interacción longitudinal, el postentrenamiento con ellos supera directamente tanto el prompting como los datos solo sintéticos. Juntos enmarcan el espacio de diseño del entrenamiento pedagógico como una elección entre un postentrenamiento escalable condicionado por instrucciones y un ajuste fino basado en datos de interacciones de tutoría reales.

## El prompting guiado por rúbricas como alternativa ligera

No toda configuración pedagógica requiere reentrenamiento. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] mostraron que el prompting guiado por rúbricas —tratar la rúbrica como una interfaz semántica entre la intención pedagógica humana y la inferencia de la máquina— puede empujar a un LLM de propósito general hacia un [[evaluative-judgment|juicio evaluativo]] semejante al humano sin ajuste fino: el refitado iterativo de la rúbrica elevó la concordancia entre LLM y personas del 54,75% al 81,25% en trabajos de diseño de estudiantes (alfa de Cronbach 0,393 → 0,798), y el prompting consciente del rol (docente, revisor entre pares, revisor de subvenciones) produjo retroalimentación evaluativa distinta. Esto complementa los enfoques basados en entrenamiento anteriores: donde TeachLM sostiene que la ingeniería de prompts es un paliativo y que el postentrenamiento con datos auténticos es el ingrediente escaso, Yaşar et al. demuestran que una rúbrica bien diseñada puede ser en sí misma una palanca potente y de bajo coste para alinear la evaluación de los LLM con la intención pedagógica, aunque la supervisión [[human-in-the-loop-ai|con intervención humana]] sigue siendo esencial, ya que los modelos aún pueden malinterpretar matices, alucinar justificaciones o mezclar roles. Otra alternativa ligera es la personalización por juego de roles a nivel de prompt sin reentrenamiento: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang y Zhang (2025)]] usaron la función de GPT personalizado de OpenAI para simular a un estudiante de secundaria básica que sostiene una idea errónea, y encontraron que un prompt refinado y fundamentado en la literatura (que especificaba tres [[misconceptions|ideas erróneas]] sobre el razonamiento con razones) provocaba los errores conceptuales buscados con mucha más fiabilidad que un prompt amplio de álgebra (presencia de 0,98 frente a 0,40), evidencia de que un diseño cuidadoso del prompt puede orientar sustancialmente un modelo listo para usar hacia una persona pedagógica deseada, aun cuando el agente simulado conservaba limitaciones de autenticidad (tono de docente, confusión de roles).

La intervención más ligera de esta familia no es el prompting sino la adaptación eficiente en parámetros. [[lora-finetuned-control-systems-course-qa-2026|Lu et al. (2026)]] construyeron 360 diálogos sistema–usuario–asistente a partir de un curso de Sistemas de Control Lineales, reestructuraron las respuestas en un formato Solución–Método–Puntos de Enseñanza y aplicaron LoRA a Qwen2.5-3B y 7B en rangos 4, 8 y 16. La cobertura de salida estructurada pasó de casi cero en la base a aproximadamente 1,00, y la mejor configuración (7B, r = 16) alcanzó un ROUGE-L de 0,4093 con intervalos de confianza bootstrap para la ganancia enteramente por encima de cero, pero la ganancia por millón de parámetros del adaptador cayó monótonamente a medida que subía el rango, así que la alineación a nivel de curso es una disyuntiva entre escala y rango y no una mejora gratuita. Las métricas miden similitud y formato, no precisión de derivación.

## Enfoque 4: entrenar roles de simulador, no solo tutores

La misma maquinaria de postentrenamiento se dirige ahora al lado del aprendiente en la interacción, y los resultados dicen que el presupuesto de supervisión importa más que el prompt. [[misconception-acquisition-dynamics-llms-2026|Liu et al. (2026)]] ajustaron con instrucciones tres modelos pequeños para *adquirir* ideas erróneas de álgebra en dos roles —un Modelo de Estudiante Novato con Ideas Erróneas que sostiene una sola idea errónea, y un Modelo de Tutor Experto con Ideas Erróneas que sostiene diez— y midieron tanto la precisión de las ideas erróneas como la de resolución correcta. El rol de estudiante mostró una disyuntiva que ningún prompt podía arreglar: el error aprendido se sobregeneralizaba más allá de sus tipos de problema aplicables hasta que se mezclaron explícitamente ejemplos correctos en los datos de entrenamiento, en proporciones tan bajas como un ejemplo correcto por cada cuatro de ideas erróneas. El rol de tutor no mostró ese coste, con una precisión correcta estable o en aumento del 93% al 98% cuando se entrenaron conjuntamente diez ideas erróneas, aunque las muestras a escala de aula fueron insuficientes y las ideas erróneas poco frecuentes requerirían datos de varias instituciones. De forma más concluyente, ninguno de los dos roles adquirió nada cuando se entrenó solo con respuestas finales —la precisión de las ideas erróneas se mantuvo por debajo del 30% en todos los tamaños de datos—, así que los rastros de solución paso a paso, y no más ejemplos, son el requisito limitante. [[swim-student-writing-simulation-2026|SWIM (Do, Kontak y Sachan, 2026)]] llega a la conclusión espejo para un simulador de escritura: el prompting fundamentado en rúbricas dio un control limitado de la competencia (mejor QWK medio por rasgo de 0,577 para Claude Sonnet, 0,422 para GPT-5.4, y casi cero al pedírselo a un modelo abierto de 7B), el ajuste fino supervisado elevó un modelo de 7B a 0,474 ± 0,023, y el GRPO contra una recompensa derivada de la puntuación automática de ensayos lo elevó aún más a 0,618 ± 0,005 en todos los rasgos y prompts, con la recompensa diseñada como una precisión densa normalizada por rasgo porque las recompensas de coincidencia exacta son demasiado dispersas en el entorno de múltiples rasgos.

## Síntesis: qué hace que funcione el entrenamiento pedagógico

| Principio | EduQwen | ISD-Agent-Bench |
|-----------|---------|-----------------|
| **Recompensar y guiar, no responder** | El modelo de recompensa DAPO penaliza las soluciones directas | Los pasos de ISD exigidos por la teoría requieren alineación entre objetivos y evaluación |
| **Currículo por dificultad** | Minería de negativos duros + despliegues progresivos | Context Matrix varía sistemáticamente la complejidad |
| **Razonamiento de varios pasos** | Despliegues ampliados (5→8 pasos) | Cadenas de razonamiento estilo ReAct |
| **Validar con teoría** | El punto de referencia CDPK mide el conocimiento pedagógico | Los marcos ADDIE/Dick y Carey fundamentan las decisiones de diseño |
| **Refinamiento iterativo** | Canalización RL → SFT → RL | La evaluación con múltiples jueces reduce el sesgo |

## Relación con la seguridad y el diseño

Entrenar para la pedagogía no es solo cuestión de precisión: es una **intervención de seguridad**:
- Un modelo que recompensa «guiar» por encima de «responder» es menos probable que incurra en los [[hazra-safetutors-pedagogical-safety-2026|daños de la divulgación excesiva de respuestas]]
- Los agentes fundamentados en la teoría (ISD-Agent-Bench) se alinean con principios pedagógicos que previenen la [[metacognition|supresión metacognitiva]]
- Sin embargo, entrenar con [[benchmark|puntos de referencia]] pedagógicos no garantiza la seguridad multiturno; SafeTutors muestra que incluso los modelos especializados se degradan en un diálogo sostenido
- **La fundamentación y la validación pueden sustituir al entrenamiento o complementarlo.** [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora y MacLellan (2025)]] encontraron que un GPT-4 de frontera *sin entrenar* producía pistas un ~35% demasiado generales, incorrectas o que revelaban la respuesta al redactar retroalimentación para un sistema de tutoría inteligente, y que sus propias comprobaciones automáticas de calidad no se alineaban con el juicio humano, lo que llevó a los autores a concluir que los LLM carecen de un modelo interno de la instrucción y que se requiere una validación sólida o un entrenamiento específico de dominio antes de usarlos sin supervisión con aprendientes, lo que respalda la idea de que la fundamentación y el control de calidad son en sí mismos intervenciones pedagógicas junto al diseño de recompensas.

### La reducción de la adulación como objetivo de entrenamiento

Como la tutoría requiere fricción correctiva —cuestionar una afirmación incorrecta del estudiante en lugar de reafirmarla—, reducir la [[ai-sycophancy|adulación]] es un objetivo central del entrenamiento pedagógico de LLM. [[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]] muestra que los modelos que resisten ataques de cambio de contexto igual se rinden ante la presión de la autoridad o la presión social [[affective-computing|afectiva]], y retienen la retroalimentación correctiva; sus autores sostienen que el comportamiento «amable pero correcto» debería ser un requisito explícito de entrenamiento y no una preferencia de [[usability-research|usabilidad]]. El entrenamiento que recompensa guiar por encima de responder (como en el modelo de recompensa DAPO de EduQwen) es una palanca estructural contra la respuesta aduladora. Sin embargo, la [[contextual-sycophancy-ai-literacy|adulación contextual]] persiste incluso después del prompting o del entrenamiento de alineación —los errores de quienes aprenden siguen propagándose al consejo de la IA—, así que la mitigación de la adulación en tutores entrenados debe combinar diseño de recompensas, alineación frente a puntos de referencia de adulación y salvaguardas a nivel de sistema, en lugar de depender de una sola etapa.

## Preguntas abiertas

1. ¿El entrenamiento pedagógico con RL generaliza entre asignaturas, o siempre se necesita un ajuste [[discipline-specific-aied|específico de la materia]] (como sugiere SafeTutors)?
2. ¿Puede combinarse la canalización RL-SFT-RL con memoria longitudinal (véase [[nie-personavlm-long-term-personalization-2026]]) para una tutoría personalizada?
3. ¿Mejoraría la teoría de los agentes ISD la conversación general de tutoría, o se limita al [[curriculum-design|diseño curricular]] de nivel macro?

## Conceptos conectados

- [[intelligent-tutoring]]
- [[scaffolding]]
- [[adaptive-learning]]
- [[metacognition]]
- [[affective-tutoring]]
- [[human-in-the-loop-ai]]
- [[personalized-learning]]
- [[student-modeling]]
- [[self-regulated-learning]]
- [[pedagogical-safety]]
- [[formative-assessment]]
- [[llm]]
- [[authentic-assessment]]
- [[ai-sycophancy]]
- [[ai-feedback-quality]]
- [[bias-mitigation]]
- [[ai-technologies]] — Paraguas: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, agentes)

## Artículos conectados

- [[zerkouk-comprehensive-review-its-2025]]
- [[civic-education-ai-lesson-plans]]
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]]
- [[contextual-sycophancy-ai-literacy]]
- [[educational-llm-alignment]]
- [[eduguard-safe-rag-llm-tutor]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[llm-tts-dialogue-lesson-generation]]
- [[multimodal-learning-genai]]
- [[neural-symbolic-knowledge-tracing]]
- [[nsmq-riddles-science-math-benchmark]]
- [[singh-eduqwen-pedagogical-rl-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]] — La adulación es un riesgo de seguridad educativa: por qué los tutores LLM necesitan puntos de referencia de adulación
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[learnlm-improving-gemini-learning]] — LearnLM: mejorar Gemini para el aprendizaje
- [[teachlm-post-training-llms-education]] — TeachLM: postentrenamiento de LLM para la educación con datos de aprendizaje auténticos
- [[yasar-llms-iterative-pedagogical-design-2026]] — Los LLM como agentes de diseño pedagógico iterativo
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[lora-finetuned-control-systems-course-qa-2026]] — Modelos ajustados con LoRA para preguntas y respuestas de un curso de sistemas de control: una evaluación multidimensional de la escala del modelo y los efectos del rango
- [[misconception-acquisition-dynamics-llms-2026]] — Composición de datos, mezcla de ejemplos correctos y supervisión paso a paso para modelos conscientes de las ideas erróneas
- [[swim-student-writing-simulation-2026]] — El entrenamiento supervisado y basado en recompensas superó al prompting con rúbricas para el control de la competencia
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: modelos fundacionales abiertos para el aprendizaje y la enseñanza
