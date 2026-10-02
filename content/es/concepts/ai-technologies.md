---
title: Tecnologías
created: "2026-09-28T20:12:29-04:00"
updated: "2026-09-28T20:12:29-04:00"
type: concept
foundations: [agentic-ai]
technology: [ai-technologies, educational-nlp, educational-robotics, generative-ai, knowledge-graph, llm, multimodal, prompt-engineering, rag, reinforcement-learning, simulation]
confidence: high
translation_of: concepts/ai-technologies
source_updated: "2026-09-22T03:05:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Tecnologías** — los modelos, las arquitecturas y los métodos que impulsan los sistemas de IA educativa, y el concepto paraguas que cubre el tratamiento de la capa técnica en esta base de conocimiento. Donde [[pedagogy|pedagogía]] y [[learning-theories|teorías del aprendizaje]] se ocupan de *cómo ocurren la enseñanza y el aprendizaje*, y la [[ai-ed-evaluation|evaluación de la IA educativa]] se ocupa de *si la IA funciona*, esta página ancla la vertiente *técnica*: los sistemas de IA ([[llm|grandes modelos de lenguaje]], [[generative-ai|IA generativa]], [[multimodal|modelos multimodales]], [[educational-robotics|robots]]) y las técnicas empleadas para construirlos, controlarlos y desplegarlos ([[prompt-engineering|ingeniería de prompts]], [[rag|generación aumentada por recuperación]], [[reinforcement-learning|aprendizaje por refuerzo]], [[educational-nlp|PLN educativa]], [[knowledge-graph|grafos de conocimiento]], [[agentic-ai|orquestación agéntica]]).

## Preguntas para reflexionar

- Puede ser una docente excelente sin saber construir un LLM, pero esta página sostiene que sus decisiones técnicas siguen moldeando lo que la IA puede y no puede hacer en su aula. ¿De qué manera la tecnología subyacente de una herramienta de IA podría cambiar en silencio cómo aprende su estudiantado, aunque nunca vea el código?
- Un supuesto habitual es que el modelo lo es todo, pero técnicas como la generación aumentada por recuperación (RAG) y la ingeniería de prompts existen precisamente para controlar y fundamentar la salida de un LLM. Antes de seguir leyendo: cuando le pide a una IA que «sea más precisa» o que «use esta fuente», ¿qué cree que ocurre en realidad por debajo?
- La RAG se describe como una técnica central para reducir las alucinaciones y mejorar la seguridad. ¿Por qué cree que recuperar conocimiento relevante para «fundamentar» la respuesta de una IA importaría más en educación que, por ejemplo, en un chat informal, y qué podría salir mal si esa fundamentación falla?
- La página afirma que las decisiones técnicas encarnan supuestos pedagógicos: un tutor construido con prompts socráticos razona con quien aprende, mientras que un modelo que genera respuestas puede limitarse a entregar soluciones. ¿Recuerda alguna herramienta de IA que pareciera «asumir» una filosofía de enseñanza concreta? ¿Coincidía con cómo quería enseñar o aprender?
- Más allá de la precisión bruta, esta página sugiere que los sistemas de IA deberían evaluarse por su fiabilidad, su pedagogía y su equidad. ¿Qué métrica de titular sospecha que la mayoría de la gente (incluido mucho profesorado) usa por defecto para juzgar si una herramienta de IA «funciona», y por qué esa métrica podría ocultar más de lo que revela?
- Se describe la IA agéntica como un desplazamiento de la IA «de herramienta que responde a prompts a colaboradora proactiva». ¿Cómo podría un sistema que inicia y orquesta flujos de trabajo de varios pasos por su cuenta cambiar aquello de lo que usted, como docente o como persona que aprende, es responsable? ¿Y quién le rinde cuentas?

## Introducción

[[ai-education|La IA en la educación]] funciona sobre una pila técnica concreta, y entenderla importa al [[teacher-role|profesorado]] y al personal investigador incluso cuando no construyen sistemas por sí mismos, porque las decisiones técnicas moldean lo que la IA puede y no puede hacer en el aula, los riesgos que conlleva y cómo evaluarla. Esta página organiza la cobertura de conceptos técnicos de la base de conocimiento: los sistemas de IA, las técnicas que los adaptan y controlan, y cómo se conecta la capa técnica con la pedagogía, la evaluación y la medición.

## Sistemas de IA en la educación

- **Grandes modelos de lenguaje (LLM).** La columna vertebral computacional de la mayor parte de la [[ai-education|IAED]] moderna: los [[llm|LLM]] generan texto similar al humano para tutoría, evaluación y generación de contenido, y son la tecnología más citada de la base de conocimiento. El [[llm-training-and-fine-tuning|entrenamiento pedagógico]] adapta los LLM generales al uso educativo.
- **IA generativa.** La categoría más amplia de sistemas que producen texto, código, imágenes y otros contenidos: la [[generative-ai|IA generativa]] (impulsada principalmente por LLM) es la tecnología detrás de la ola actual de investigación en [[ai-education|IAED]]. Véanse también los [[multimodal|modelos multimodales]] (texto, imagen, audio) y la [[simulation|simulación]].
- **Robots y sistemas corporeizados.** La [[educational-robotics|robótica educativa]] añade una presencia corporeizada y a menudo social: kits programables para el pensamiento computacional y robots humanoides o sociales para tutoría, narración y juego de roles. La robótica es una vertiente técnica distinta que se solapa con la [[agentic-ai|IA agéntica]] y el diseño con [[human-in-the-loop-ai|human-in-the-loop]].
- **Sistemas basados en conocimiento.** Los [[knowledge-graph|grafos de conocimiento]] y la [[educational-nlp|PLN educativa]] representan y procesan conocimiento de dominio, cada vez más combinados con LLM para una tutoría fundamentada y explicable.

## Técnicas y métodos

- **Ingeniería de prompts.** La [[prompt-engineering|ingeniería de prompts]] es la forma en que el profesorado y el personal desarrollador dan forma a la salida de los LLM: el mecanismo principal mediante el cual se ponen en acto la delegación cognitiva y el control en las interacciones con LLM.
- **Generación aumentada por recuperación (RAG).** La [[rag|RAG]] fundamenta la salida del LLM en conocimiento recuperado, lo que reduce las alucinaciones y mejora la precisión: una técnica central para un despliegue educativo [[pedagogical-safety|seguro]].
- **Aprendizaje por refuerzo.** El [[reinforcement-learning|aprendizaje por refuerzo]] entrena agentes para optimizar su comportamiento a lo largo del tiempo; se usa en [[adaptive-learning|sistemas adaptativos]] y en el [[game-based-learning|aprendizaje basado en juegos]].
- **Orquestación agéntica.** Los sistemas de [[agentic-ai|IA agéntica]] planifican y ejecutan flujos de trabajo de varios pasos, a menudo orquestando varios agentes especializados (véanse los [[agentic-ai|sistemas multiagente]]), y están reconfigurando la IA de herramienta que responde a prompts en colaboradora proactiva.
- **Entrenamiento y adaptación de modelos.** El [[llm-training-and-fine-tuning|entrenamiento y ajuste fino de LLM para la pedagogía]], la [[educational-llm-alignment|alineación educativa]] y la [[cstutorbench-slm-tutors|adaptación de modelos de lenguaje pequeños]] hacen que los modelos generales sean específicos para la educación.

## Cómo se conecta la capa técnica con el campo

La vertiente técnica es inseparable de los demás temas de la base de conocimiento:

- **Pedagogía:** las decisiones técnicas encarnan supuestos pedagógicos: un [[intelligent-tutoring|tutor]] construido con [[socratic-method|prompts socráticos]] razona con quien aprende, mientras que un modelo que genera respuestas puede limitarse a ofrecerlas directamente (véanse las [[pedagogy|pedagogías y estrategias de enseñanza]]).
- **Evaluación y medición:** la [[ai-ed-evaluation|evaluación de la IA educativa]] y los [[benchmark|puntos de referencia]] determinan si los sistemas de IA funcionan de verdad; la [[assessment|evaluación]] y la [[automated-assessment|evaluación automatizada]] usan la pila técnica para calificar y generar.
- **Uso responsable:** las técnicas son centrales para [[reducing-ai-misuse|reducir el mal uso de la IA]]: la fundamentación mediante [[rag|RAG]], las barreras de seguridad, el [[scaffolding|andamiaje]] de la [[prompt-engineering|ingeniería de prompts]] y la [[human-in-the-loop-ai|supervisión humana]] determinan si la IA apoya o socava el aprendizaje ([[cognitive-offloading|delegación cognitiva]], [[hallucination-risk|riesgo de alucinación]]).

## Implicaciones para la IA en la educación

- **La alfabetización técnica sostiene el uso crítico:** entender los modelos y las técnicas subyacentes ayuda al profesorado y a quienes aprenden a usar bien la IA y a evaluarla críticamente (véase [[ai-literacy|alfabetización en IA]]).
- **Elija la tecnología por su intención pedagógica:** el sistema de IA y la técnica deben seguir a la [[pedagogy|estrategia de enseñanza]], y no al revés.
- **Evalúe la capa técnica:** la [[ai-ed-evaluation|evaluación de la IA educativa]] y la investigación con [[benchmark|puntos de referencia]] valoran los sistemas de IA por su fiabilidad, su pedagogía y su [[equity-in-ai-education|equidad]], no solo por su precisión de titular.
- **Los robots y los agentes forman parte de la pila:** los sistemas [[educational-robotics|corporeizados]] y [[agentic-ai|agénticos]] amplían el repertorio técnico más allá del texto, y traen consigo sus propias consideraciones de diseño y seguridad.

## Conceptos conectados

- [[llm]]
- [[generative-ai]]
- [[multimodal]]
- [[reinforcement-learning]]
- [[educational-nlp]]
- [[knowledge-graph]]
- [[simulation]]
- [[educational-robotics]]
- [[agentic-ai]]
- [[prompt-engineering]]
- [[vibe-coding]]
- [[rag]]
- [[llm-training-and-fine-tuning]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[pedagogy]]
- [[learning-theories]]
- [[ai-literacy]]
- [[adaptive-learning]]
- [[personalized-learning]]

## Artículos conectados

- [[typology-generative-ai-tools-education-2026]] — Tipología de herramientas de IA generativa para la educación
- [[agentic-ai-education-scoping-review]] — Revisión de alcance de la IA agéntica en la educación
- [[genai-meta-analysis-programming-learning]] — Metaanálisis del efecto de la IA generativa en la productividad y el aprendizaje de la programación
- [[cstutorbench-slm-tutors]] — Puntos de referencia de tutoría con modelos de lenguaje pequeños
- [[educational-llm-alignment]] — Alinear los LLM para la educación
- [[eduguard-safe-rag-llm-tutor]] — Poner barreras de seguridad a los tutores LLM basados en RAG
- [[hazra-safetutors-pedagogical-safety-2026]] — Seguridad y daños de los tutores de IA
- [[elbench-education-llm-benchmark-2026]] — Punto de referencia de LLM educativos
- [[knowledge-based-design-generative-social-robots-2026]] — Diseño basado en conocimiento para robots sociales generativos
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — El robot social generativo Teachy Mini
- [[white-wu-robotics-ai-education-2026]] — Robótica e IA en la educación
- [[benzion-ai-physics-simulations-virtual-lab]] — Simulaciones de física generadas por LLM para el aula
- [[teo-ai-adoption-tertiary-meta-analysis-2026]] — Factores en la adopción de herramientas de IA
