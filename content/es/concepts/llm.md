---
title: Grandes modelos de lenguaje (LLM)
created: "2026-09-25T03:07:36-04:00"
updated: "2026-09-25T03:07:36-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
translation_of: concepts/llm
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

> **Los grandes modelos de lenguaje (LLM)**: modelos de [[machine-learning|red neuronal]] entrenados con vastos corpus de texto que generan texto similar al humano e impulsan la mayoría de las aplicaciones modernas de [[ai-education|IA en la educación]]. Los LLM son la columna vertebral computacional de la tutoría con IA generativa, la evaluación y la generación de contenido en la educación.

## Preguntas para reflexionar

- ¿Qué cree usted que «sabe» un [[conversational-ai|chatbot]] de IA cuando le responde? La página enmarca los LLM como generadores de texto probable en lugar de recuperadores de hechos verificados: ¿cómo cambia esa distinción cuánto confiaría usted en las explicaciones de un modelo?
- Los LLM se describen como el motor que hay detrás de la mayoría de las herramientas modernas de IA educativa: la tutoría, la calificación, la generación de contenido e incluso el diagnóstico de lo que sabe el estudiantado. De esos usos, ¿cuál le parece el más y el menos adecuado para un generador de texto probabilístico, y por qué?
- La página informa de que tres LLM distintos produjeron planes de apoyo marcadamente divergentes para una misma entrada de analítica del aprendizaje, cada uno con supuestos demográficos diferentes. Si los modelos no son intercambiables como asesores, ¿qué significa eso para una institución que adopta uno?
- Como la salida de un LLM es sensible a los prompts y a la configuración, dos personas pueden obtener resultados muy distintos del mismo modelo. ¿Cómo debería influir esto en cómo usted, como quien aprende o como quien diseña, formula sus peticiones, y en cuánto confía en una única salida?
- Una limitación clave es la alucinación, es decir, contenido verosímil pero sin fundamento. En un contexto de tutoría o de calificación, ¿qué haría falta para que usted confiara en que el modelo no estaba inventando algo, y qué salvaguardas exigiría antes de dejar que evalúe a un estudiante real?

## Introducción

### Los LLM como motor de la AIED

Los LLM son el concepto más referenciado de la base de conocimiento (más de 60 artículos), porque sustentan casi todas las aplicaciones de IA educativa:

- **Tutoría:** los [[intelligent-tutoring|tutores con IA]] usan LLM para el diálogo, la explicación y la orientación en la [[problem-solving|resolución de problemas]]. El [[pedagogical-llm-training|entrenamiento pedagógico]] adapta los LLM generales al uso educativo.
- **Evaluación:** los [[automated-assessment|sistemas de calificación]], la [[automated-essay-scoring|corrección automática de ensayos]] y la [[llm-item-difficulty-prediction|predicción de la dificultad de los ítems]] aprovechan las capacidades de los LLM. [[razavi-powers-item-difficulty-llm-2026|Razavi y Powers (2026)]] muestran que GPT-4o puede estimar la dificultad de ítems de matemáticas y lectura de K-5 (N = 5170) calibrados con el modelo IRT de Rasch: las valoraciones de cero disparos correlacionaron de forma moderada a fuerte con las dificultades reales (r = 0.83 en matemáticas, r = 0.81 en lectura), pero variaron según el curso; en cambio, una estrategia basada en características, en la que el LLM extrae características cognitivas y lingüísticas para modelos de árbol, alcanzó correlaciones de hasta r = 0.87, lo que es evidencia de que la extracción estructurada de características puede superar a un único juicio holístico del LLM. En el conjunto de la literatura sobre calificación, una [[meta-analysis-systematic-review|revisión sistemática]] guiada por PRISMA de 42 estudios empíricos (2023–2025) concluye que los LLM igualan a los evaluadores humanos en tareas cortas y bien estructuradas con rúbricas detalladas, pero no pueden sustituir del todo el juicio humano en trabajos complejos, abiertos o subjetivos, y que la versión del modelo es un determinante dominante de la calidad de la calificación ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). La fiabilidad también varía mucho según el tipo de ítem: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat et al. (2026)]] encontraron que ChatGPT-5 coincidía estrechamente con el profesorado en ítems objetivos de exámenes de farmacia (CCC 0.935–1.000), pero no era fiable en ítems de respuesta corta (CCC ≈0) ni de ensayo (0.341–0.854), y que proporcionar una rúbrica no mejoraba de forma consistente el acuerdo.
- **LLM de razonamiento [[multimodal|multimodales]] como calificadores:** cuando un LLM multimodal y con capacidad de razonamiento (GPT-o4-mini) calificó página a página un examen manuscrito de [[chemistry-education|química]] general de 296 estudiantes comparándolo con imágenes de rúbricas, las puntuaciones totales de una sola pasada fueron muy reproducibles (ICC(A,1) = 0.967; promediar cinco pasadas llegó a 0.993) y coincidieron con fuerza con los totales del profesorado auxiliar (R² = 0.91), pero la fiabilidad a nivel de ítem dependía mucho del formato: las respuestas de texto y de ecuaciones químicas se calificaban bien, mientras que el dibujo y la representación gráfica salían peor que el azar (las cuadrículas de fondo distraen la visión de la IA). Esto muestra que la [[trust|fiabilidad]] de un calificador LLM es función del formato de respuesta y de la tarea, y no solo de la capacidad bruta del modelo, y que para usos de alto riesgo se necesita la [[human-in-the-loop-ai|derivación selectiva a una persona]] mediante filtros de confianza ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Contenido:** la creación de contenido con [[generative-ai|IA generativa]] se apoya en los LLM. La [[automated-question-generation|generación de preguntas]] y la [[ai-generated-instructional-videos-computing-ed|generación de vídeos]] están impulsadas por LLM.
- **Seguridad:** la [[pedagogical-safety|seguridad pedagógica]], el [[hallucination-risk|riesgo de alucinación]] y la [[research-methods-aied|investigación]] de [[hazra-safetutors-pedagogical-safety-2026|Hazra et al. (2026)]] examinan los riesgos específicos de los LLM.
- **Diagnóstico:** el [[knowledge-tracing|seguimiento del conocimiento]] y el [[cognitive-diagnosis|diagnóstico cognitivo]] incorporan cada vez más los LLM para un [[student-modeling|modelado del estudiantado]] más rico. La fundamentación importa enormemente para el diagnóstico de errores: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora y MacLellan (2025)]] mostraron que suministrar a GPT-4 la estructura de la interfaz del tutor junto con estimaciones bayesianas de habilidades del [[knowledge-tracing|seguimiento del conocimiento]] elevó la identificación de errores lógicos del 40% al 81% en factorización (diagnóstico de errores global de ~87.8%), mientras que los problemas de varios pasos y las respuestas con varios errores siguieron siendo casos débiles y persistieron diagnósticos alucinados de «[[misconceptions|concepción]]» común, lo que es evidencia de que el valor diagnóstico de un LLM es tanto función del contexto estructurado y de las señales del [[student-modeling|modelo de quien aprende]] que recibe como del propio modelo.
- **Cambio de modelo de evaluación (2017–2024):** la revisión de alcance de Morley et al. sobre la corrección automática de preguntas de respuesta corta de [[science-education|ciencias]] traza el paso del campo desde el ajuste fino de modelos [[educational-nlp|BERT]] más pequeños (dominante hasta 2021) hacia el prompting de LLM más grandes (GPT-1/2/3.5/4) a partir de aproximadamente 2022, adoptado mediante la [[prompt-engineering|ingeniería de prompts]] en lugar del ajuste fino, con modelos aumentados con dominio, prompting consciente de la rúbrica y cadena de pensamiento elevando la precisión. Sin embargo, los modelos GPT rara vez se compararon con BERT en corpus estándar, pocos correctores automáticos podían explicar sus calificaciones y el [[bias-mitigation|sesgo]] se examinó pocas veces, cautelas que se aplican a la evaluación con LLM en general ([[auto-marking-short-answer-science-2026]]).

### Investigación específica de modelos

La base de conocimiento cubre tanto los LLM de propósito general (GPT-4, Claude) como las adaptaciones específicas para la educación. Los [[cstutorbench-slm-tutors|puntos de referencia de modelos de lenguaje pequeños]] comparan el rendimiento de los SLM en la tutoría. La investigación sobre la [[educational-llm-alignment|alineación educativa]] aborda cómo hacer que los LLM sean pedagógicamente apropiados. Un estudio de aula con tres familias de frontera, el de [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash y Connell Pensky (2025)]], encontró que ChatGPT, Gemini o Claude podían actuar como compañeros de crítica colaborativa en la escritura argumentativa: a lo largo de un semestre de ensayos iterativos, el estudiantado mejoró en calidad de la argumentación, en [[prompt-engineering|ingeniería de prompts]] y en la respuesta a la [[ai-feedback-quality|retroalimentación de la IA]] en aproximadamente una desviación estándar completa en cada caso (todo p < .001) y se implicó a fondo (el 87.8% rebatía las afirmaciones del LLM), lo que sitúa a los LLM de propósito general como socios viables de [[collaborative-learning|aprendizaje colaborativo]] y no como meros generadores de respuestas.

Una línea de trabajo complementaria reformula los LLM, de calificadores estáticos a emuladores del razonamiento [[pedagogy|pedagógico]]. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar et al. (2026)]] mostraron que GPT-4, con el andamiaje de una rúbrica semánticamente precisa y refinada de forma iterativa y conjunta, podía aproximarse al [[evaluative-judgment|juicio evaluativo]] humano en el [[design-based-research|aprendizaje basado en el diseño]]: el acuerdo inicial entre los LLM y las personas era pobre (alfa de Cronbach = 0.393; Kappa de -0.06 a 0.18), pero el refinamiento iterativo de la rúbrica elevó el acuerdo medio del 54.75% al 81.25% (alfa final = 0.798, Kappa 0.40–0.55), y el agrupamiento de K-medias de las matrices de puntuaciones humanas y del LLM mostró centroides muy correlacionados (r = 0.89). El estudio sitúa la rúbrica como interfaz mediadora entre la intención pedagógica humana y la inferencia de la máquina, lo que es evidencia de que los LLM listos para usar tampoco son intercambiables como evaluadores, y de que su comportamiento evaluador es un resultado de diseño que modelan la rúbrica y los prompts que reciben. La capacidad bruta del modelo también diferencia la calificación: al [[benchmark|evaluar comparativamente]] once modelos de IA generativa y de incrustación de frases con 1.885 [[automated-assessment|respuestas]] abiertas, [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko y Drlik (2025)]] encontraron que solo GPTo1 alcanzó un acuerdo casi perfecto con evaluadores humanos expertos (Kappa de Fleiss 0.82), con Claude3 y PaLM2 algo por detrás, mientras que los modelos alineados con referencias como BERT quedaron muy lejos, lo que muestra que la sensibilidad al contexto de los modelos de frontera importa para una evaluación abierta fiable. Las diferencias entre modelos también importan para usos posteriores de alto riesgo. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]] mostraron que tres LLM produjeron prescripciones de apoyo al estudiantado marcadamente divergentes para una misma entrada de [[learning-analytics|analítica del aprendizaje]], y cada uno imponía supuestos demográficos previos distintos a los perfiles de estudiantado que generaba, lo que es evidencia de que los LLM listos para usar no son intercambiables como asesores prescriptivos. De forma similar, [[olvet-genai-scoring-open-ended-medical-2026|Olvet et al. (2026)]] encontraron que la puntuación de GPT-4 de preguntas abiertas de [[medical-education|medicina]] previas al internado solo llegó a un acuerdo interevaluador de sustancial a casi perfecto con el profesorado (kappa ponderado de hasta 0.94) tras tres rondas de refinamiento iterativo de la rúbrica, y cayó a moderado (κw = 0.54) en un ítem de rúbrica holística, lo que refuerza que el diseño de la rúbrica, y no solo la capacidad bruta, es la palanca decisiva para la fiabilidad de la calificación con LLM. El comportamiento específico de cada modelo también se manifiesta en cómo responden los LLM a las personas usuarias escépticas: una auditoría algorítmica consultó a diez LLM de frontera 500 veces cada uno con una persona simulada escéptica de la IA del entorno rural de Montana [[k-12]] para comprobar si los [[ai-technologies|sistemas de IA]] consultados por usuarios escépticos están predispuestos a fomentar la adopción. Ocho de cada diez reconocieron las preocupaciones de la persona usuaria y luego reorientaron hacia marcos de [[student-engagement|implicación]] con la IA; las puntuaciones compuestas abarcaron de 3.85 (Claude Sonnet) a 7.52 (Gemini 3.1 Pro Preview), y un panel evaluador de IA entre familias superó un kappa de Cohen >= 0.70. El patrón fue un resultado de diseño dependiente del modelo. La capacidad del modelo también depende de cómo se combinen los modelos: Bird (2026) ajustó ocho transformadores de última generación (BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer) para clasificar literatura inglesa por etapa clave del Reino Unido, y encontró que el mejor transformador unimodal (BERT) solo alcanzó un F1 de 0.75, mientras que fusionar un ELECTRA ajustado con una red neuronal de lingüística computacional elevó el F1 a 0.996, lo que muestra que la clasificación de texto con un transformador por sí sola es limitada y que la fusión con características complementarias es donde están las ganancias.

## Conceptos conectados

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[pedagogical-llm-training]]
- [[learning-by-teaching]]
- [[ai-technologies]] — Marco: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, agentes)

## Artículos conectados
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Neuro-symbolic pedagogical alignment (NSPA)
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[elbench-education-llm-benchmark-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[learnlm-improving-gemini-learning]] — LearnLM: pedagogical instruction following
- [[teachlm-post-training-llms-education]] — TeachLM: post-training with authentic learning data
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[frontier-ai-redirect-skeptical-rural-staff-2026]] — Algorithmic audit: how frontier LLMs redirect skeptical rural K-12 staff
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Open Questions Towards Skill-Sustaining Reliance in Reflective AI Engagement