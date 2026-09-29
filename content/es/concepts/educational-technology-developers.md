---
connected_resources: [playlab]
title: "Desarrolladores de tecnología educativa"
created: "2026-09-28T20:12:29-04:00"
updated: "2026-09-28T20:12:29-04:00"
type: concept
foundations: [educational-development, learning-design]
technology: [learning-analytics, edtech-platform, open-source]
audience: [instructional designers, software developers, learning analytics designers, institutions, educational technology developers]
page_kind: [evaluation]
confidence: high
methods: [design-based-research]
translation_of: concepts/educational-technology-developers
source_updated: "2026-09-17T15:20:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Desarrolladores de tecnología educativa** — las personas y las organizaciones que construyen tecnología educativa: diseñadores de producto, desarrolladores de software, ingenieros de aprendizaje, diseñadores de analítica del aprendizaje y las empresas de tecnología educativa, los laboratorios universitarios y los proyectos de [[open-source|código abierto]] en los que trabajan. En la IA en la educación, este es el rol que convierte la capacidad de un modelo en algo que una docente o una persona que aprende puede usar de verdad, y conlleva decisiones que ninguna etapa posterior puede deshacer: en qué evidencia se apoya una afirmación de diseño, hasta qué punto una canalización de [[learning-analytics|analítica]] o un sistema de [[intelligent-tutoring|tutoría]] se fundamenta en el material con licencia de la propia institución, si se incluye a docentes y estudiantes en el diseño, qué supuestos de [[learning-design|diseño instruccional]] quedan incrustados en los valores por defecto y qué ocurre con el producto cuando se acaba la financiación. A lo largo de los informes de sistemas y los estudios de despliegue de esta base de conocimiento, la lección recurrente es que el contexto de despliegue, y no el modelo, suele ser la restricción vinculante.

## Preguntas para reflexionar

- Si los metaanálisis que afirman que «la IA mejora el aprendizaje» se apoyan en una metodología inválida, como encontró la auditoría de [[oneill-presumed-effective-meta-analysis-2026]], ¿sobre qué evidencia puede construir realmente una hoja de ruta de producto?
- ¿Deberían escribirse las explicaciones de un algoritmo en el lenguaje curricular del profesorado aunque eso cueste más esfuerzo de diseño que exponer la importancia de las variables? ¿Y quién paga ese esfuerzo?
- Cuando una herramienta se codiseña con el estudiantado, ¿qué veredicto decide: las ganancias de aprendizaje medidas o el 96% que dijo que quería conservarla?
- ¿Es el despliegue local y con licencia abierta una decisión técnica o una decisión de gobernanza? ¿Y deberían los requisitos de transparencia convertirse en condición de compra?
- ¿Qué debe un desarrollador a una institución cuando termina la subvención: un producto mantenido, un repositorio que se pueda bifurcar o una declaración sincera de que el sistema nunca fue una intervención validada?

## Introducción

El desarrollador se sitúa un nivel por debajo de la plataforma. [[edtech-platform|La plataforma de tecnología educativa]] describe el sistema desplegado y el grupo de interés en que se convierte una vez que está en un centro o una universidad; esta página trata de las personas que deciden qué hace ese sistema. La distinción importa porque los hallazgos a nivel de plataforma —baja adopción, sesgo de equidad, fricción en las compras— son normalmente consecuencias de decisiones de diseño tomadas antes, por alguien que nunca conoció a quienes aprenden.

El rol también es distinto del de sus vecinos. [[learning-design|El diseño del aprendizaje]] y el [[curriculum-design|diseño curricular]] diseñan un curso para una cohorte conocida; un desarrollador de tecnología diseña un producto que usarán muchos cursos, impartidos por personas a las que nunca ha conocido, y por eso los valores por defecto, la configurabilidad y la documentación tienen peso pedagógico. [[educational-development|El desarrollo educativo]] apoya al personal docente de una institución desde dentro de ella; los desarrolladores están fuera o al lado, y proveen las herramientas que luego se pide a ese personal que adopte. Y [[design-based-research|la investigación basada en el diseño]] es el estándar de evidencia que cada vez más se pide a estos desarrolladores que cumplan: iterativo, contextual y reportado con sus propias limitaciones.

### Quién construye la IA educativa

**Laboratorios de investigación que construyen infraestructura pública.** [[oatutor-open-source-adaptive-tutor-2023|OATutor]] se construyó en UC Berkeley como el primer sistema de tutoría adaptativa totalmente de código abierto basado en los principios de los [[intelligent-tutoring|ITS]]: una base de código con licencia MIT y una biblioteca de álgebra de Creative Commons, estimación del dominio mediante [[knowledge-tracing|seguimiento bayesiano del conocimiento]], infraestructura de pruebas A/B y soporte LTI. Su razón de existir es una decisión de diseño —las plataformas propietarias habían confinado la investigación en [[adaptive-learning|aprendizaje adaptativo]] a sistemas cerrados— y su vía de autoría es otra: 16 creadores produjeron un curso de álgebra universitaria en seis meses tras 2,27 horas de formación.

**Constructores de modelos.** [[learnlm-improving-gemini-learning|LearnLM]] reformula la mejora de un modelo para el aprendizaje como [[prompt-engineering|seguimiento de instrucciones pedagógicas]]: el comportamiento se fija por aplicación mediante instrucciones de sistema, y no con una única definición fija de [[pedagogy|pedagogía]], y las personas revisoras expertas lo prefirieron en un +31% frente a GPT-4o y un +13% frente a Gemini base. El punto práctico es que la pedagogía depende demasiado del contexto para definirse globalmente; la capacidad útil es la adherencia a las instrucciones que escribe un desarrollador, medida con escenarios a nivel de conversación y no con [[benchmark|puntos de referencia]] de un solo turno.

**Arquitectos de modelos de conocimiento.** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Un modelo de conocimiento híbrido por capas]] sostiene que el [[personalized-learning|aprendizaje personalizado]] necesita más que una ontología estática, y propone sistemas de ontologías mapeadas junto con reglas y analítica en lugar de la clásica arquitectura de cuatro modelos de los ITS, además de un marco de reutilización de ocho clases de metadatos que pretende reducir el coste de cada nueva construcción.

**Ingenieros de infraestructura y medición.** [[a4l-analytics-pipeline|El trabajo sobre la canalización de analítica]] propone una canalización modular y agnóstica al dominio para datos de interacción de quienes aprenden, validada en tres asistentes de IA educativa, donde métodos construidos para un dominio se extendieron a otro: infraestructura de [[learning-analytics|analítica del aprendizaje]] reutilizable en lugar de un panel de un solo curso. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] muestra el caso complementario: una reimplementación bayesiana produjo una predicción *idéntica* a la de la herramienta de estimación puntual establecida (AUC 0,711), y solo difería en coste y en intervalos creíbles que hacen interpretable la comparación de condiciones.

**Constructores dentro de las instituciones.** [[moodle-ai-tutoring-deep-learning|La tutoría con IA en Moodle]] incorpora tutoría con LLM en un LMS existente en lugar de distribuir una herramienta independiente, lo que rebaja el umbral de adopción que la literatura sobre ITS señala como motivo de fracaso de los sistemas en la práctica. [[savvy-student-attention-video-learning|SAVVY]] convierte señales de atención multimodal en una interfaz que el profesorado puede leer antes de publicar un vídeo. [[instructional-agents-multi-agent-course-gen|Los agentes instruccionales]] automatizan las tres primeras fases de ADDIE con agentes especializados por rol, y su ablación es una lección de diseño: la línea base de un solo agente obtuvo la peor puntuación, el copiloto completo superó al autónomo en 0,5–0,9 puntos, y la ausencia de diferencias de calidad entre backends hizo que el más barato fuera el valor por defecto.

### En qué puede apoyarse una afirmación de diseño

**La base de evidencia es más débil de lo que parece.** [[oneill-presumed-effective-meta-analysis-2026|Una auditoría de 14 metaanálisis]] que afirmaban que la IA mejora la educación encontró que ninguno justificaba sus afirmaciones: todos menos dos definían el tratamiento como una herramienta y no como una intervención pedagógica, el 61% de 59 estudios primarios examinados tenía problemas de validez, la heterogeneidad era alta dondequiera que se informara, los análisis de moderadores carecían de potencia y el sesgo de publicación nunca se evaluó de forma válida. Un metaanálisis retractado seguía citándose como autoridad por el 60% de los artículos posteriores muestreados. Para un desarrollador, «la IA mejora el aprendizaje» es una afirmación de categoría de producto, no un insumo de diseño.

**Informe de la incertidumbre y del coste completo, no solo de la precisión.** Para [[stanbkt-bayesian-knowledge-tracing|StanBKT]], la inferencia bayesiana no aporta nada en predicción y todo en poder decir qué efectos eran creíbles. [[shen-sustainable-ai-knowledge-base-cs-education-2026|El informe de Shen et al.]] aporta ablaciones de recuperación, ajuste fino consciente de la cuantización, VRAM, energía por consulta y alucinaciones medidas contra recursos abiertos recuperados, con la propia advertencia de los autores de que el sistema no es un tutor validado. Esa es la disciplina de [[ai-ed-evaluation|evaluación]] que hace comprobable una afirmación de despliegue.

### Codiseño con docentes y estudiantes

**Las explicaciones deben hablar el lenguaje del profesorado.** [[xai-teachers-trust-edtech-recommendations-2026|Un experimento intrasujeto]] con 41 docentes de química sobre una herramienta de recomendación de aprendizaje automático mostró que la comprensibilidad, la [[trust|confianza]] y la aceptación correlacionaban positivamente, y que las explicaciones basadas en el dominio y formuladas en lenguaje curricular produjeron una comprensibilidad, una [[trust-calibration|calibración de la confianza]] y una aceptación significativamente mayores que las explicaciones basadas en la importancia de las variables. La confianza también era dinámica —varios docentes dijeron que solo la experiencia en el aula la resolvería— y la aceptación dependía de la alineación pedagógica y de la reducción de la carga de trabajo.

**Codiseño a escala institucional.** [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]] en la Open University se construyó mediante seis estudios basados en el diseño a lo largo de 18 meses con 498 estudiantes y 20 miembros del personal. Alrededor del 20% era escéptico al principio; tras el uso práctico, el 96% quería conservarlo, y un ECA exploratorio encontró el doble de tiempo de uso pero ninguna diferencia significativa en los datos del proceso de aprendizaje. Los factores facilitadores fueron organizativos —patrocinio de la dirección, colaboración entre unidades, iteración informada por datos—, con carencias en la capacidad de pensamiento sistémico.

### Compra, apertura y después de que se acabe la financiación

[[shen-sustainable-ai-knowledge-base-cs-education-2026|El informe de Shen et al.]] aporta los insumos que necesita una decisión de compra: un mínimo de hardware de 12 GB de VRAM, un techo de precisión para un modelo de la clase de 7B, energía por consulta y un orden de decisiones —primero la recuperación (sin ella el modelo puntuó un 52,3%, por debajo de una línea base TF-IDF), después el ajuste fino y después la compresión consciente de la cuantización—; la licencia abierta es la precondición para servir un corpus localmente. [[reclaiming-epistemic-agency-co-agency-2026|La reivindicación de la agencia epistémica]] enmarca la misma decisión como gobernanza: los requisitos de transparencia convierten la compra en gobernanza epistemológica, la contestabilidad y la procedencia se vuelven condiciones, y los distritos con menos capacidad se enfrentan al listón más alto. [[credential-cognitive-stewardship-ai-assessment|La custodia cognitiva]] añade que la gobernanza de proveedores apareció solo en el 29% de 30 paquetes de política auditados, que especificaban lo que la IA puede hacer mucho más fácilmente que qué evidencia de aprendizaje quedaba. [[genai-mindtool-generative-learning|GenAI MindTool]] plantea la pregunta de diseño —¿fomenta el producto el aprendizaje *con* la herramienta o delega el trabajo cognitivo?— y [[vocabulary-difficulty-prediction|la predicción de la dificultad del vocabulario]] muestra el intercambio en miniatura: el modelo de caja negra con mejor puntuación (r > 0,91) era menos explicable que el interpretable (r > 0,77).

## Conceptos conectados

- [[edtech-platform]]
- [[learning-design]]
- [[curriculum-design]]
- [[design-based-research]]
- [[educational-development]]
- [[open-source]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[teacher-ai-competency]]
- [[technology-acceptance-model]]
- [[universal-design-for-learning]]
- [[assessment-validity]]
- [[ai-ed-evaluation]]
- [[governance]]
- [[educational-policy-ai]]
- [[sustainability]]
- [[privacy]]

## Artículos conectados

- [[oatutor-open-source-adaptive-tutor-2023]]
- [[moodle-ai-tutoring-deep-learning]]
- [[learnlm-improving-gemini-learning]]
- [[savvy-student-attention-video-learning]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[oneill-presumed-effective-meta-analysis-2026]]
- [[a4l-analytics-pipeline]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[instructional-agents-multi-agent-course-gen]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]]
- [[credential-cognitive-stewardship-ai-assessment]]
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[genai-mindtool-generative-learning]]
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]]
- [[vocabulary-difficulty-prediction]]
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]]
