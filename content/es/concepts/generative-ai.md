---
title: IA generativa
created: "2026-09-25T03:07:36-04:00"
updated: "2026-09-25T03:07:36-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading]
technology: [intelligent-tutoring, llm, prompt-engineering, rag]
ethics: [hallucination-risk]
confidence: high
translation_of: concepts/generative-ai
source_updated: "2026-09-24T10:07:27-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-25"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **La IA generativa**: sistemas de IA capaces de producir texto, código, imágenes y otros contenidos, de manera más destacada los grandes modelos de lenguaje como GPT-4 y Claude. La IA generativa es la tecnología que impulsa la actual oleada de [[research-methods-aied|investigación]] sobre la [[ai-education|IA en la educación]].

## Preguntas para reflexionar

- La IA generativa produce contenido fluido y de tono seguro bajo demanda. ¿La fluidez equivale a la corrección? ¿Dónde ha visto un resultado de tono seguro pero erróneo y qué hizo que fuera difícil detectarlo?
- A diferencia de los sistemas anteriores basados en reglas o en recuperación, los modelos generativos crean contenido nuevo en lugar de recuperar respuestas almacenadas. ¿Cómo cambia ese giro los riesgos (la alucinación, la dependencia excesiva, la integridad académica) respecto a un motor de búsqueda?
- Con más de 80 artículos, la IA generativa es la línea más amplia de esta base de conocimiento, y abarca la tutoría, la evaluación, la generación de contenido y la seguridad. ¿Qué aplicación le parece la más prometedora para el aprendizaje y cuál la más peligrosa, y por qué?
- La misma tecnología que puede generar un tutorial socrático también puede producir una «trampa de la respuesta correcta» que fomenta la copia. ¿Qué decisiones de diseño podrían separar una IA generativa que ofrece andamiaje al aprendizaje de otra que lo cortocircuita?

## Introducción

### Qué hace diferente a la IA generativa para la educación

A diferencia de los sistemas anteriores basados en reglas o en recuperación, la IA generativa produce contenido fluido y adecuado al contexto bajo demanda. Esto crea tanto oportunidades sin precedentes como riesgos nuevos:

- **Generación de contenido:** los [[llm|LLM]] pueden crear materiales didácticos, ejemplos y explicaciones. Los [[book-level-synthetic-textbook-organization|libros de texto sintéticos]], los [[courseblueprint-adaptive-video-generation|vídeos adaptativos]] y los [[ai-generated-instructional-videos-computing-ed|vídeos didácticos]] muestran el alcance de la generación de contenido educativo.
- **Borradores de planificación de clases que dependen de la plataforma y del idioma.** La [[ai-ed-evaluation|evaluación de la IA]] por parte de especialistas de planes de clase de ciencias generados muestra que la calidad del contenido no es uniforme ni neutral. [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli y Yildirim (2026)]] pidieron a once especialistas de [[science-education]] que puntuaran ChatGPT-4 y una herramienta centrada en la educación (Teacher's Buddy) frente a las etapas de aprendizaje basado en el diseño de ingeniería de sexto grado: la plataforma centrada en la educación superó a la de propósito general en los ocho criterios de calidad, pero 7 de los 11 especialistas siguieron calificando los planes solo como «aplicables con correcciones». Ambas plataformas generaron resultados pedagógicamente más ricos a partir de prompts en inglés que en turco, incluso cuando se les pidió localizarlos para Mersin (Turquía), una preocupación de [[digital-divide|equidad digital]] en la que el idioma del prompt da forma a la calidad didáctica.
- **Tutoría y diálogo:** los [[intelligent-tutoring|sistemas de tutoría con IA]] usan la IA generativa para la instrucción conversacional. El [[socratic-method|diálogo socrático]] y la [[golrang-propact-pair-programming-2026|tutoría colaborativa]] aprovechan las capacidades generativas para la interacción [[pedagogy|pedagógica]].
- **Pacientes simulados y coherencia del caso.** Un corpus anotado por varios expertos con 4.815 mensajes entre estudiantado e IA de la plataforma MeduAI-SP ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]) encontró que solo alrededor del 0,68% de las respuestas de pacientes estandarizados generadas por LLM contenían problemas claros de fidelidad, y que la divulgación progresiva se valoró como clínicamente apropiada en aproximadamente el 99,3% de los mensajes de los pacientes. Esto respalda la afirmación de que los pacientes simulados con IA generativa pueden mantener la coherencia del caso y una divulgación dependiente de la indagación y no prematura bajo un guion YAML estructurado (qwen-max), lo que los convierte en un entorno lo bastante estable para la investigación de resultados y no solo para demostraciones de verosimilitud, mientras el sistema retenía deliberadamente los diagnósticos y las puntuaciones [[summative-assessment|sumativas]] durante el aprendizaje.
- **Evaluación:** la [[automated-essay-scoring|corrección automática de ensayos]], la [[automated-assessment|calificación automatizada]] y la [[formative-assessment|evaluación formativa]] dependen cada vez más de modelos generativos. Los [[benchmark|puntos de referencia]] corroboran este giro para el trabajo abierto: [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko y Drlik (2025)]] encontraron que los modelos de IA generativa sensibles al contexto (GPTo1 alcanzó una concordancia casi perfecta con quienes calificaban) superaron con claridad a los enfoques anteriores de incrustaciones de frases al calificar respuestas abiertas del estudiantado, que dependían de una coincidencia rígida con la referencia y clasificaban mal respuestas válidas pero formuladas de otro modo. [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] lo extienden a la educación [[medical-education|médica]] previa a las prácticas clínicas, donde la puntuación de preguntas abiertas por GPT-4 alcanzó una concordancia interevaluador de sustancial a casi perfecta con el profesorado (kappa ponderada de hasta 0,94), pero solo después de que las personas refinaran la rúbrica de forma iterativa a lo largo de tres rondas y permanecieran en el bucle para arbitrar las discrepancias, mientras que la pregunta más sintética, con rúbrica holística, se quedó en una concordancia moderada (κw = 0,54). Es evidencia de que la fiabilidad de la evaluación generativa está determinada tanto por la ingeniería humana de rúbricas y el análisis de patrones de error como por el modelo en bruto. Sin embargo, esa misma fluidez no se generaliza entre tipos de ítem: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] encontraron que ChatGPT-5 igualaba al profesorado en ítems objetivos de exámenes de farmacia (CCC 0,935-1,000) pero no en ítems de respuesta corta (≈0) ni de ensayo (0,341-0,854), y una rúbrica estructurada no cerró la brecha de forma fiable.
- **Riesgos:** la [[hallucination-risk|alucinación]], la [[cognitive-offloading|dependencia excesiva]], la [[cognitive-offloading]] y las preocupaciones sobre la [[academic-integrity]] surgen específicamente de la fluidez y la [[accessibility]] de la IA generativa.
- **Generación de entornos de aprendizaje:** los modelos generativos especializados ahora convierten un resumen de curso directamente en artefactos de aprendizaje terminados. [[cogevol-learning-environment-generation-2026|CogEvol (Tu et al. 2026)]], una familia de modelos entrenados para generar en una sola pasada diapositivas estructuradas y páginas HTML interactivas autocontenidas, completa una diapositiva en una mediana de 17 segundos y una página interactiva en 59, en lugar de un [[agentic-ai|agente]] con [[scaffolding]] de varios turnos que tardaba minutos. La fiabilidad se garantiza mediante una canalización de producción que convierte los fallos reales en 53.687 muestras SFT verificadas, además de una recompensa híbrida de reglas más VLM para el aprendizaje por refuerzo con GRPO. Esto sitúa la IA generativa como un motor de autoría de contenido, con implicaciones para los flujos de producción del [[teacher-role|profesorado]] y del [[curriculum-design|diseño curricular]], y para evaluar si los entornos de aprendizaje generados por IA son funcional y pedagógicamente sólidos y no solo visualmente pulidos.

### La cobertura de la IA generativa en la base de conocimiento

Con más de 80 artículos, la IA generativa es la línea tecnológica más amplia de la base de conocimiento. La investigación abarca estudios de eficacia ([[genai-meta-analysis-programming-learning|metaanálisis]]), preocupaciones de seguridad ([[hazra-safetutors-pedagogical-safety-2026|daños de los tutores]], [[eduguard-safe-rag-llm-tutor|barreras de seguridad]]) y principios de diseño ([[instructional-guidance-genai-learning|orientación didáctica]]).

La interfaz de usuario generativa es la capacidad más reciente de esta línea: modelos que emiten un artefacto interactivo funcional (controles deslizantes, simulaciones manipulables) en lugar de prosa. [[generative-ui-education-learning-interactives-2026|Kovshov et al. (2026)]], un equipo de Google Research, informan de que la interfaz generativa disponible comercialmente todavía no es lo bastante precisa desde el punto de vista pedagógico para constructos complejos, pero que descomponer un objetivo de aprendizaje en metas progresivas por niveles y envolver la generación en bucles de crítica y automejora produce materiales interactivos que el profesorado experto considera aceptables. El suyo es un diseño de orquestación: el profesorado declara los objetivos, los aprueba y elige entre simulaciones candidatas, de modo que la restricción vinculante para el [[simulation|material de aprendizaje interactivo]] a medida se desplaza de la producción a la especificación, y las [[guardrails|barreras de seguridad pedagógicas]] quedan integradas en la canalización de generación en lugar de dejarse después a la vigilancia del profesorado.

Más allá de estas líneas centrales, trabajos recientes amplían la base de evidencia a contextos [[governance|institucionales]], interactivos y de dominio. Qin (2026) documenta cómo la Universidad de Lingnan institucionalizó la alfabetización en IA generativa para todo el estudiantado de grado como parte de una transformación digital de las artes liberales. Chang y Li (2026) muestran que las conversaciones entre estudiantado e IA codifican una [[student-engagement|implicación]] cognitiva asociada a la disciplina, con un ~62% de prompts que reflejan demanda cognitiva de orden superior. Neto y sus colegas (2026) [[meta-analysis-systematic-review|revisan sistemáticamente]] la IA generativa en la educación sanitaria basada en escenarios, y encuentran que el [[prompt-engineering|diseño de prompts]] funciona como especificación didáctica, pero rara vez se alinea con marcos didácticos (34,8%) o se comunica con detalle reproducible (34,8%). La IA generativa también impulsa simulaciones de juego de rol de estudiantes para la [[teacher-education|formación del profesorado]] basada en la práctica: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang y Zhang (2025)]] crearon *Student GPT*, un chatbot personalizado de ChatGPT que simulaba a un estudiante de [[k-12|secundaria]] con [[misconceptions|ideas erróneas]] habituales sobre el razonamiento con razones, lo que daba al futuro profesorado de matemáticas una práctica asequible y específica del contenido para diagnosticar el pensamiento del estudiantado. Es evidencia de que el diseño de prompts (un prompt fundamentado en la literatura provocaba de forma fiable los errores conceptuales objetivo, 0,98 frente a 0,40) puede orientar un modelo generativo disponible comercialmente hacia una persona pedagógica útil.

Una [[li-language-educators-genai-review-2026|revisión sistemática sobre docentes de idiomas]] (Li et al. 2026) encuentra que el profesorado valora más la IA generativa para el trabajo preparatorio de contenido (planificación de clases, creación de materiales y apoyo a la escritura) y muestra reticencia ante su uso en el aula en directo, con preocupaciones centradas en la [[academic-integrity|integridad académica]] (el plagio y la [[assessment-validity|validez de la evaluación]]), el desplazamiento profesional y el tecnoestrés; la adopción está determinada por factores de identidad profesional, pedagógicos, técnicos, institucionales y de integridad, y las lagunas de competencia se corresponden con la episteme, la techne y la phronesis.

La generación de contenido también va más allá de las [[math-education|matemáticas]] y llega al codiseño de recursos de aprendizaje con el profesorado, por ejemplo, andamiajes de [[simulation]] codiseñados entre docentes e IA para el aprendizaje [[stem-education|STEM con drones]] que preservan la validez didáctica y la relevancia contextual. En la [[arts-design-and-media-education|educación artística]] STEAM infantil, [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo y Tahir (2025)]] cuantificaron experimentalmente las ventajas de los planes de clase asistidos por ChatGPT frente a los generados por el profesorado (mediana valorada por expertos: 20,5 frente a 17,6; p = .002; efecto grande), pero el mismo estudio documenta que un resultado fluido conlleva modos de fallo reales en la generación para el aula: planes idealizados o poco prácticos para la enseñanza diaria, restricciones de seguridad infantil que se pasan por alto (por ejemplo, sugerir cuchillos de tallar para [[early-childhood-elementary-ai-education|niños pequeños]]), sesgo cultural centrado en Occidente y generación de imágenes o recursos lógicamente defectuosos o irrelevantes. Su aportación es un marco de prompts (Rol-Instrucciones-Objetivo final, más una rúbrica de calidad de «cuatro puntos y una línea») que traslada la pregunta sobre la fiabilidad de si el modelo puede generar a cómo los prompts y los criterios de evaluación deben limitarlo para su uso pedagógico. Los usos orientados a la [[equity-in-ai-education|equidad]] siguen poco explorados; una iniciativa de espacio maker de IA generativa solo para chicas en Europa combinó dos herramientas de IA generativa con pedagogía feminista para abordar las desigualdades de género persistentes en la participación en informática, y analizó las imágenes generadas por las chicas con IA generativa y las reflexiones de las partes interesadas. Las aplicaciones de asistencia e inclusión son una línea en crecimiento: [[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]], un estudio de caso [[qualitative-research|cualitativo]] con 21 estudiantes universitarios con discapacidad visual en Palestina, encontraron que la IA generativa adapta el ritmo, el contenido y la presentación a perfiles de aprendizaje individuales, simplifica textos académicos complejos y convierte contenido entre modalidades, y el estudiantado la percibe como un complemento del profesorado y no como un sustituto.

- **La IA generativa como [[pedagogical-agent|agente pedagógico]] en la alfabetización mediática crítica en primaria.** Demir y Akar (2026) operacionalizan el modelo didáctico 5E con herramientas de IA generativa (ChatGPT para preguntas reflexivas y preguntas y respuestas, Grammarly y Canva AI para el refinamiento del contenido, Padlet para la [[peer-assessment|retroalimentación entre pares]]) integradas fase por fase y no como añadidos aislados, en un programa de alfabetización mediática crítica de 18 horas para estudiantado turco de cuarto grado alineado con los currículos turcos de Lengua y Ciencias Sociales. El grupo apoyado por IA mostró grandes mejoras en lectura de medios (+3,50), escritura (+1,67) y alfabetización mediática total (+5,17; todas p < .01), con tamaños del efecto entre grupos de *d* de Cohen = 1,12 (lectura), 1,18 (escritura) y 1,31 (alfabetización total), mientras que el grupo de control avanzó solo de forma modesta. El análisis cualitativo reveló seis ámbitos de crecimiento en alfabetización mediática crítica: autoprotección digital y [[privacy|privacidad de los datos]], uso intencionado y responsable de los medios, comunicación segura y conciencia de los límites, [[critical-thinking|evaluación crítica]] y conciencia de la desinformación, conciencia de los riesgos en línea, y [[ethics]]/ciudadanía digital de los medios, lo que ilustra cómo la IA generativa puede diseñarse dentro de un currículo como un agente pedagógico con andamiaje que cultiva la evaluación crítica en lugar de cortocircuitarla.

### La IA generativa en ámbitos especializados: apoyo a la dislexia

Una revisión sistemática interdisciplinar de 2026 (Dabaghi, D'Urso y Sciarrone, guiada por PRISMA, 2018-2024, n=72) encuentra que **la IA generativa está infrautilizada en el ámbito de apoyo a la dislexia**. La investigación sobre IA generativa (toda de 2024) se agrupa en [[conversational-ai|chatbots]] inteligentes, apoyo a la [[teacher-role|formación del profesorado]] y estudios exploratorios, y está superando rápidamente al [[machine-learning|aprendizaje automático]] clásico como herramienta de elección, pero la experimentación rigurosa y la validación en el mundo real siguen en gran medida ausentes. El análisis de tendencias futuras de la revisión apunta a materiales personalizados impulsados por IA generativa y retroalimentación adaptativa en tiempo real, modelos de diagnóstico [[multimodal|multimodales]] que integran seguimiento ocular, EEG y [[learning-analytics|analítica]] del comportamiento, [[intelligent-tutoring|sistemas de tutoría inteligente]] y agentes conversacionales impulsados por PLN, y herramientas de apoyo para el profesorado. Esto ilustra tanto la promesa de la IA generativa para la generación de contenido y el apoyo interactivo en un ámbito especializado y de alta necesidad como el riesgo de que su adopción vaya por delante de la base de evidencia.

## Conceptos conectados

- [[llm]] — la clase de modelos que sustenta la IA generativa
- [[prompt-engineering]] — cómo se modelan los resultados
- [[rag]] — fundamentación aumentada por recuperación
- [[ai-literacy]] — la competencia necesaria para usarla de forma eficaz
- [[ai-education]] — el campo más amplio
- [[intelligent-tutoring]] — sistemas de tutoría conversacional y generativa
- [[cognitive-offloading]] — el riesgo de dependencia excesiva que amplifica la IA generativa
- [[hallucination-risk]] — un riesgo central de fiabilidad del contenido generado
- [[academic-integrity]] — preocupaciones de integridad derivadas de la generación fluida
- [[automated-assessment]] — modelos generativos en la calificación y la retroalimentación
- [[ai-technologies]] — el paraguas de las técnicas y los modelos de IA
- [[higher-ed]] — un contexto de despliegue principal
- [[k-12]] — un contexto de despliegue principal

## Artículos conectados

- [[typology-generative-ai-tools-education-2026]] — Typology of Generative AI Tools for Education
- [[generative-ui-education-learning-interactives-2026]] — Harnessing Generative UI for Education: Tailored Learning Interactives
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL: A Design Framework for Safe and Sound AI for Learning
- [[generative-ai-k12-teaching-learning-systematic-review-2026]] — Systematic review of generative AI in K-12 teaching and learning (Marzano 2026)
- [[genai-higher-education-systematic-review-2026]] — Systematic review of GenAI in higher education
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education
- [[genai-educational-outcomes-meta-analysis]] — Meta-analysis of GenAI learning outcomes
- [[genai-meta-analysis-programming-learning]] — Meta-analysis of GenAI in programming learning
- [[zhao-genai-higher-order-thinking-meta-2026]] — GenAI and higher-order thinking meta-analysis
- [[genai-performance-vs-learning]] — Performance vs. learning with GenAI
- [[generative-ai-reduced-study-time-math]] — Cognitive surrender: study-time decline with GenAI
- [[metacognitively-discordant-completion-genai-2026]] — Metacognitive discordance in GenAI completion
- [[hazra-safetutors-pedagogical-safety-2026]] — Harms of AI tutoring agents
- [[eduguard-safe-rag-llm-tutor]] — Guardrailing a safe RAG LLM tutor
- [[substitution-to-scaffolding-ai-harm-cycle-2026]] — From substitution to scaffolding: breaking the harm cycle
- [[beyond-detection-authentic-assessment-ai-2025]] — Redesigning authentic assessment for an AI-mediated world
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Learning Environment Generation
- [[ai-digital-transformation-liberal-arts-lingnan-2026]] — Digital transformation of a liberal arts university toward a research-intensive model in the GenAI era (Qin 2026)
- [[student-ai-conversations-cognitive-engagement-2026]] — Discipline-associated Bloom-level cognitive engagement in student-AI conversations (Chang & Li 2026)
- [[demir-akar-ai-media-literacy-children-2026]] — AI-based critical media literacy program for children
- [[khlaif-assistive-genai-visually-impaired-2026]] — Assistive GenAI for visually impaired learners
- [[li-language-educators-genai-review-2026]] — Language educators' practices and development with GenAI
- [[dabaghi-ai-dyslexia-education-review-2026]] — AI to help people with dyslexia in education
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[genai-higher-ed-agency-responsibility-discourse-2026]] — Who Acts, Who Knows, Who Answers? A Corpus-Assisted Discourse Analysis of Agency, Epistemic Responsibility, and Accountability in Generative AI Higher Education Research
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions