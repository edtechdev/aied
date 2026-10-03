---
title: Código abierto
created: "2026-09-28T20:16:26-04:00"
updated: "2026-10-03T02:57:43-04:00"
connected_faqs: [making-ai-better-at-supporting-learning]
type: concept
foundations: [agentic-ai, ai-education, curriculum-design]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, edtech-platform, open-source]
assessment: [automated-assessment]
ethics: [privacy]
audience: [software developers, instructors, administrators, researchers]
discipline: [stem education, writing education]
confidence: medium
connected_resources: [claw-ed, education-agent-skills, lesson-md, liascript, onmicro-ai, vibes-diy]
methods: [benchmark]
translation_of: concepts/open-source
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Código abierto** — el uso de *modelos, código, datos y contenido* con licencias abiertas en la [[ai-education|IA en la educación]]. La apertura es el principal contrapeso de la base de conocimiento frente al cautiverio de proveedor y a la [[privacy|exposición de datos]]: los modelos de pesos abiertos pueden ejecutarse en hardware del campus para cumplir con FERPA, el RGPD y las obligaciones del Reglamento de IA de la UE, los corpus con licencias abiertas pueden indexarse y ajustarse sin permiso del editor, y la publicación de puntos de referencia y conjuntos de datos abiertos hace replicable la [[research-methods-aied|investigación]]. Las cargas son igual de reales: infraestructura y garantía de [[pedagogical-safety|seguridad]], mantenimiento que sobrevive a la subvención, y una calidad que la apertura no garantiza por sí sola.

## Preguntas para reflexionar

- «Código abierto» se entiende a menudo como «gratis y fácil». ¿Cuál de las cuatro capas siguientes —modelos, código, datos o contenido— le cuesta más de adoptar a su institución, y por qué?
- Los pesos abiertos hacen posible el despliegue local, pero alguien tiene que alojar, parchear y evaluar el sistema. ¿Quién debería asumir ese trabajo cuando termina el proyecto inicial, y quién lo paga?
- Un estudio de esta base encontró que un modelo abierto de 32B superaba a un sistema propietario mucho mayor en conocimiento pedagógico, mientras que otro encontró que todos los modelos abiertos probados quedaban por debajo de la línea base humana en alfabetización de visualización científica. ¿Cómo decide qué punto de referencia es el adecuado para su decisión?
- Un único corpus con licencia abierta es lo que permite a un centro ejecutar un asistente local sobre sus propios materiales de curso. ¿Qué obligaciones conlleva eso: hacia los autores originales, hacia el estudiantado cuyos datos se indexan y hacia la propia licencia?
- Si la [[generative-ai|IA generativa]] puede producir un curso en menos de media hora por un par de dólares, ¿cuál es la razón que queda para los recursos educativos abiertos: el coste, la libertad de licencia, la garantía de calidad o algo distinto?
- ¿Deberían las instituciones tratar la adopción de código abierto como una decisión de compras, una decisión de infraestructura o una decisión pedagógica? ¿Qué se rompe si se trata como solo una de ellas?

## Introducción

En términos generales, «abierto» en la educación con IA significa que cuatro tipos de artefactos están disponibles para su inspección, reutilización y modificación: **pesos de modelo**, **código fuente**, **datos e instrumentos de evaluación** y **contenido educativo**. Los artículos de la base de conocimiento se agrupan de forma desigual entre estas capas, y el panorama resultante es más útil que el eslogan: la apertura compra cosas concretas —control local, auditabilidad, replicabilidad y claridad legal— y cuesta cosas concretas: infraestructura, experiencia, mantenimiento y una carga de garantía de calidad que se traslada del proveedor a la institución.

### Modelos abiertos y pesos abiertos

Los pesos abiertos importan sobre todo allí donde los datos del estudiantado no pueden salir del campus. [[lata-ferpa-compliant-local-llm-autograder|LaTA]] es un corrector automático local de [[llm|LLM]] que se integra sin fricción y cumple FERPA, para trabajos de [[stem-education|STEM]] de cursos superiores, construido sobre rúbricas y soluciones de referencia escritas por el profesorado, con coste marginal cero por entrega. [[programming-its|SCRIPT]], un sistema de [[intelligent-tutoring|tutoría]] en Python de la Universidad de Bielefeld, **evita deliberadamente las API comerciales de LLM** y autoaloja un modelo Llama-70B de pesos abiertos para cumplir con el RGPD y el Reglamento de IA de la UE (que clasifica algunos usos de la IA en educación como de alto riesgo), separando los registros de IP del sistema de tutoría, usando nombres de usuario seudónimos y registrando pulsaciones de teclas solo con consentimiento explícito, una elección a la que los autores también atribuyen un menor impacto ambiental y una mejor reproducibilidad.

La calidad ya no es el precio automático de la apertura. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] aplica [[reinforcement-learning|aprendizaje por refuerzo]] (DAPO) y ajuste fino supervisado a una familia de modelos abiertos, extrayendo 440 negativos difíciles, generando 40.000 respuestas sintéticas reducidas a 1.050 ejemplos ordenados por dificultad, y alcanza el **96,52%** en el punto de referencia de pedagogía, por encima del 90,55% de Gemini-3 Pro, con 32B de parámetros densos. [[aiawe-automated-writing-evaluation|AiAWE]] llega a conclusiones similares para la [[automated-assessment|evaluación automatizada de la escritura]]: un Gemma-3-27B-it de pesos abiertos adaptado con LoRA supera a LLaMA-3.3-70B y a una línea base de GPT-3.5 ajustada en 480 ensayos TOEFL y se ejecuta en un servidor de gama de consumo, con el llamativo hallazgo subsidiario de que el número de parámetros *no* es un predictor fiable del rendimiento posterior bajo adaptación LoRA. La contraevidencia merece el mismo espacio: [[mllm-scientific-visualization-literacy|un punto de referencia de seis MLLM]] (tres cerrados, tres abiertos) encontró que todos los modelos de código abierto quedaban por debajo de la línea base humana en alfabetización de [[visualization|visualización]] científica, mientras que Gemini superaba la media humana en varios subconjuntos. La apertura eleva el techo del control, no el de la capacidad.

OmniEdu publica todo el flujo de trabajo, no solo los pesos: una supervisión equilibrada por capacidades sobre una mezcla de 69.999 ejemplos elevó todas las escalas de una familia abierta K–12 de 4B/9B/27B —el modelo ajustado de 4B ganó 55 puntos de tasa de victoria de andamiaje en MathTutorBench frente a su base— mientras que el diagnóstico del estado de conocimiento siguió siendo su capacidad más débil, con un 54,04% ([[omniedu-open-educational-foundation-models-2026|Liang et al., 2026]]).

### Herramientas, tutores e infraestructura de investigación abiertos

El caso más claro a favor del código abierto es la replicación. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] —el primer sistema de tutoría adaptativa totalmente abierto construido sobre principios de ITS— combina un **código con licencia MIT** con una **biblioteca de contenido Creative Commons (CC BY)** procedente de los manuales de álgebra de OpenStax, además de [[knowledge-tracing|traza de conocimiento]], pruebas A/B y soporte LTI; su objetivo de diseño explícito es que una persona investigadora pueda ejecutar un experimento y luego publicar todo el marco, el contenido y la plataforma de extremo a extremo como un enlace a un repositorio. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] defiende lo mismo en la capa de método, sustituyendo las estimaciones puntuales por maximización de la expectativa por inferencia bayesiana completa (HMC, inferencia variacional, Pathfinder, optimización) en un paquete abierto de Python que expone la incertidumbre de la que dependen las comparaciones A/B de intervenciones adaptativas. [[deeptutor|DeepTutor]] publica un marco completo de tutoría [[agentic-ai|agéntica]] con una memoria de estudiante en forma de bosque de trazas —Apache 2,0, y para finales de 2026 un espacio de trabajo de aprendizaje completo y no solo los flujos que evalúa su artículo— y el generador de aulas OpenMAIC de [[mooc-to-maic|MAIC]] se distribuye bajo MIT junto con el estudio que lo evalúa, de modo que un curso puede generarse, autoalojarse e inspeccionarse en lugar de solo leerse; [[vismatic-secure-sandbox-cs-education|VISMATIC]] publica su sandbox en contenedores para la monitorización orientada a procesos, de modo que otras instituciones puedan adoptar el modelo de integridad y no la versión del proveedor. El código abierto también conlleva la carga de transparencia: los scripts de los prompts de tutoría afectiva de [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]] se publican para su inspección y para más trabajo de [[llm-training-and-fine-tuning|entrenamiento pedagógico]]. La infraestructura abierta fija el punto de referencia de lo que deberían hacer los agentes educativos: la [[agentic-ai-education-scoping-review|revisión de alcance de 474 estudios sobre IA agéntica]] de la base de conocimiento usa un proyecto de agentes de código abierto en rápido crecimiento como su punto de referencia del «paradigma de agente de frontera» y encuentra que los sistemas educativos siguen careciendo de orquestación de herramientas gobernada, memoria persistente, planificación de horizonte largo y acción auditable.

### Puntos de referencia, conjuntos de datos y transparencia de método abiertos

Varias contribuciones de esta base son *infraestructura de evaluación* abierta más que sistemas. [[cdpk-pedagogy-benchmark-llms|El punto de referencia de pedagogía]] (CDPK + SEND, construido a partir de ítems reales de exámenes docentes chilenos) abarca 97 modelos: el modelo abierto DeepSeek R1 alcanzó el 86,65% frente a un top-10 de modelos de razonamiento mayoritariamente cerrados, y la frontera de coste y precisión pasó de ~50% a ~82% con \\$0,10/M tokens de entrada entre abril de 2024 y junio de 2025, con el abierto Qwen-3 8B a 3,5¢ casi igualando al mejor modelo cerrado de abril de 2024 con un coste más de 400 veces menor. El rendimiento cae bruscamente por debajo de unos 8B parámetros, una restricción práctica de tamaño para los despliegues de campus. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]] publica un conjunto de datos, un esquema y un prototipo para la evaluación basada en trazas de la tutoría multiagente socialmente inteligente (540 participantes, 360 sesiones, 1.440 episodios de tarea). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]] muestra el argumento cultural a favor de los datos abiertos: 24.795 pares de instrucción y respuesta en siete idiomas y 41 técnicas pedagógicas extraídas de fuentes védicas y clásicas, alineadas con el [[curriculum-design|currículo]] de la CBSE, que permitieron a un modelo compacto de 7B acercarse a un modelo de referencia de propósito general mucho mayor (puntuación mediana del juez 6,39 frente a 6,54) con una fracción del coste de despliegue. Los [[benchmark|puntos de referencia]] escritos por el propio estudiantado son otra vía hacia la apertura: [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]] cura 80 tareas académicas de horizonte largo a partir de 230 candidatas enviadas por estudiantes (que abarcan más de 25 dominios profesionales, 16 de ellas con requisitos de GPU CUDA, ejecutadas en sandboxes Docker aislados) y extiende un ecosistema abierto de agentes hacia la evaluación de nivel académico. [[aied-carbon-footprint-reporting|Eimler et al. (2026)]] sostienen que la apertura es también una obligación [[sustainability|ambiental]]: al revisar todos los artículos de AIED 2025 encontraron un patrón de «adopción de LLM sin divulgación» y respondieron con una metodología de medición de código abierto —herramientas de software más una fórmula que estima el gasto computacional incluso cuando se desconocen los recuentos de parámetros.

### Recursos educativos abiertos y contenido abierto

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen et al. (2026)]] es el único artículo de la base de conocimiento en el que **los recursos educativos abiertos son el objeto central** y no una referencia de pasada. Construyen un asistente local de base de conocimiento con IA para la [[cs-education|enseñanza de la informática]] a partir de 82 documentos de REA en hardware de gama de consumo (una RTX 3060 con 12 GB de VRAM), combinando extracción estructurada, [[rag|generación aumentada por recuperación]] y ajuste fino con cuantización consciente de NF4 de 4 bits. El ajuste fino aportó valor real más allá de la recuperación (Qwen-7B 69,8%, +3,2 pp, p = 0,031; DeepSeek-MoE 78,6%, +12,0 pp, p < 0,001, incluido un 82,3% en razonamiento de múltiples saltos); el ajuste consciente de la cuantización mantuvo la brecha de precisión en 4 bits en 1,7 y 1,2 pp mientras recortaba la VRAM un ~38% y la energía a 1,8 mWh por consulta (un 43,8% por debajo de la línea base); y la [[hallucination-risk|alucinación]] inflada por la cuantización se recuperó en parte con el ajuste fino (DeepSeek-MoE 10,4% → 8,1%), medida mediante un procedimiento NLI de dos etapas contra los fragmentos de REA recuperados. El punto analítico es generalizable: un corpus con licencia abierta puede indexarse, adaptarse y servirse sin permisos del editor, y anclar un asistente en REA recuperados ofrece un rastro de procedencia comprobable, que es exactamente lo que un corpus de manual propietario no puede ofrecer.

La apertura del contenido y la apertura de los modelos también son complementarias en otros lugares. OATutor cura manuales de OpenStax con licencia CC BY en un sistema cuyo código tiene licencia MIT, así que los términos de licencia del código y del contenido deben mantenerse compatibles por diseño. [[egai-power-systems-education|Una biblioteca abierta de módulos ejecutables para la IA en sistemas de energía]] rebaja la barrera de entrada con cuadernos de Jupyter que se ejecutan en local o en Colab, impartidos a través de un curso en línea del IEEE. Y un currículo de [[engineering-education|ingeniería mecánica]] basado en proyectos publica su programa, sus datos y su código en repositorios de acceso abierto para que otras instituciones puedan adoptarlo ([[mechanical-engineering-ai-curriculum-2026]]). Junto a los REA, la impartición abierta de *cursos* es donde la economía está cambiando más rápido: MAIC informa de una caída de la producción de MOOC desde unos \\$25.000 y 60 horas por curso hasta menos de \\$2 y 30 minutos con generación multiagente impulsada por LLM. Si la producción de contenido se vuelve casi gratuita, el argumento de los REA se desplaza del coste de producción hacia la libertad de licencia, la verificabilidad y la garantía de calidad, que es una propuesta distinta de aquella sobre la que se construyó la defensa de los REA.

### Beneficios y cargas

- **Beneficios.** Soberanía de los datos y cumplimiento normativo ([[privacy|privacidad]], [[regulation|regulación]]) mediante el alojamiento local; control de costes, ya que la inferencia local no tiene tarifa por consulta y los modelos abiertos se acercan a la calidad propietaria por una fracción del precio ([[singh-eduqwen-pedagogical-rl-2026]]); reproducibilidad, porque el marco, los prompts, el contenido y los datos pueden publicarse con el artículo ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]); auditabilidad y revisión de seguridad bajo la [[governance|gobernanza institucional]]; y la capacidad de ajustar para una [[pedagogy|pedagogía]] concreta o para la base de conocimiento de una comunidad concreta ([[iks-instruct-dataset-indian-knowledge]]).
- **Cargas.** El alojamiento local exige hardware y experiencia que muchas instituciones no tienen; la calidad y la [[pedagogical-safety|seguridad]] no están garantizadas de fábrica —los modelos abiertos pueden quedar por debajo de las líneas base humanas en alfabetizaciones concretas ([[mllm-scientific-visualization-literacy]]) y la cuantización eleva las tasas de alucinación si no se mitiga ([[shen-sustainable-ai-knowledge-base-cs-education-2026]])—; alguien debe mantener el sistema tras su publicación ([[programming-its]] documenta un pequeño equipo de doctorandos, exposición de seguridad en trabajo en curso y una carga de cumplimiento sustancial); y una licencia abierta es un permiso, no un producto que funcione: el mantenimiento que mantiene utilizable un sistema publicado recae en [[educational-technology-developers|quienes desarrollan tecnología educativa]] que lo construyeron, y su financiación e incentivos deciden si una institución hereda un repositorio bifurcable, un producto mantenido o ninguna de las dos cosas cuando termina la subvención.

### Poner la apertura en práctica

- **Para el profesorado y las instituciones:** compruebe la licencia del *contenido* además de la del código antes de adoptar un sistema: código MIT sobre manuales CC BY es reutilizable, pero una licencia permisiva no garantiza que existan rutas de tutoría, bancos de ítems o traducciones. Prefiera modelos abiertos cuando los datos del estudiantado no puedan salir legalmente del campus ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), pero evalúe el modelo en *su* tarea en lugar de confiar en las tablas de clasificación generales ([[cdpk-pedagogy-benchmark-llms]]). Presupueste a alguien que ejecute y evalúe el sistema después del piloto.
- **Para quienes desarrollan e investigan:** publique todo —la entrega de extremo a extremo de OATutor (código, contenido, arnés de experimentos) es el estándar de replicabilidad que esta literatura sigue premiando. Publique los prompts y los esquemas de extracción junto con los pesos ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). Informe del cómputo y del carbono ([[aied-carbon-footprint-reporting]]). Ancle los asistentes en corpus con licencias abiertas para que la procedencia sea comprobable y la adaptación legal ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Use ajuste fino consciente de la cuantización en lugar de cuantización simple si importan tanto la precisión como la energía, y mantenga compatibles las licencias del código y del contenido.

## Conceptos conectados

- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[adaptive-learning]]
- [[edtech-platform]]
- [[privacy]]
- [[regulation]]
- [[governance]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[benchmark]]
- [[knowledge-tracing]]
- [[rag]]
- [[pedagogical-safety]]
- [[sustainability]]
- [[research-methods-aied]]
- [[writing-education]]
- [[academic-integrity]]
- [[educational-technology-developers]]

## Artículos conectados
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Asistente local de base de conocimiento sobre REA en hardware de gama de consumo (Shen et al. 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — Tutor adaptativo con licencia MIT y una biblioteca de contenido CC BY de OpenStax (Pardos et al. 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — Modelo pedagógico abierto de 32B que supera a sistemas propietarios mucho mayores (Singh et al. 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — Corrector automático local con LLM que cumple FERPA y se integra sin fricción
- [[programming-its]] — LLM de pesos abiertos autoalojado para cumplir el RGPD y el Reglamento de IA de la UE en un ITS en Python
- [[aiawe-automated-writing-evaluation]] — Modelo de pesos abiertos adaptado con LoRA para la evaluación automatizada de la escritura
- [[stanbkt-bayesian-knowledge-tracing]] — Paquete abierto de Python para la traza de conocimiento bayesiana completa
- [[deeptutor]] — Marco de tutoría agéntica totalmente de código abierto con memoria del estudiante
- [[vismatic-secure-sandbox-cs-education]] — Sandbox abierto en contenedores para la evaluación orientada a procesos
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Tutor afectivo de matemáticas con base de código abierta
- [[cdpk-pedagogy-benchmark-llms]] — Punto de referencia abierto de pedagogía con 97 modelos y la frontera de coste y precisión
- [[astra-multi-agent-tutoring-benchmark-2026]] — Conjunto de datos y prototipo abiertos para la evaluación de tutoría multiagente basada en trazas
- [[mllm-scientific-visualization-literacy]] — Modelos abiertos por debajo de la línea base humana en alfabetización de visualización
- [[iks-instruct-dataset-indian-knowledge]] — Conjunto de datos multilingüe abierto para instrucción culturalmente anclada
- [[aied-carbon-footprint-reporting]] — Método de código abierto para informar del coste ambiental de los LLM
- [[egai-power-systems-education]] — Biblioteca abierta de módulos ejecutables para la IA en ingeniería
- [[mechanical-engineering-ai-curriculum-2026]] — Currículo, datos y código disponibles públicamente
- [[mooc-to-maic]] — Generación de cursos impulsada por LLM y la economía cambiante de la producción de cursos
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: modelos fundacionales abiertos para el aprendizaje y la enseñanza
