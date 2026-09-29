---
title: "Transferencia del aprendizaje"
created: "2026-09-28T20:20:21-04:00"
updated: "2026-09-28T20:20:21-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [desirable-difficulties, metacognition, scaffolding, transfer-of-learning]
technology: [intelligent-tutoring]
level: [k 12]
confidence: high
translation_of: concepts/transfer-of-learning
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

> **La transferencia del aprendizaje** — el grado en que los conocimientos o las habilidades adquiridos en un contexto (por ejemplo, la práctica con una herramienta de IA) persisten y se aplican en un contexto distinto (por ejemplo, el desempeño independiente sin la herramienta). En la [[ai-education|IA en la educación]], la transferencia es la gran pregunta abierta: si las ganancias de rendimiento que el estudiantado muestra *con* herramientas de IA se traducen en un aprendizaje duradero que pueda demostrar *sin* ellas.

## Preguntas para reflexionar

- Aquí hay un patrón llamativo que documenta la página: el estudiantado suele mostrar ganancias inmediatas en tareas asistidas por IA, pero esas ganancias pueden desvanecerse —o incluso invertirse— cuando se retira la IA. Antes de leer las explicaciones, ¿por qué cree que una herramienta que claramente ayuda en el momento podría acabar dejando al estudiantado peor sin ella?
- Recuerde algo que aprendió a hacer con un tutor, una calculadora o un asistente y que después tuvo que hacer solo. ¿Se transfirió la habilidad o se sintió dependiente de la ayuda? ¿Qué diferenciaba a las experiencias que se transfirieron bien de las que no?
- Una intuición común es que «practicar es practicar»: que hacer una tarea con ayuda construye la misma habilidad que hacerla solo. ¿Dónde puede engañar esa intuición, sobre todo cuando la ayuda es una IA que completa el razonamiento por usted en lugar de guiarlo?
- La página distingue entre los «efectos con» una tecnología y los «efectos de» ella: rendir mejor mientras se usa la herramienta frente a volverse más capaz sin ella. Si usted es docente, diseñador o estudiante, ¿cuál de los dos es su objetivo real y cómo sabría que lo ha alcanzado?
- La evidencia sugiere que importa cuánto trabajo cognitivo delega: delegar tareas superficiales como la gramática perjudica menos la transferencia que delegar el razonamiento profundo y la estructura. Piense en la última vez que usó IA en una tarea. ¿Qué «capa» delegó y qué predice esa elección sobre lo que retendría?
- La página propone condiciones que podrían favorecer la transferencia positiva: [[pedagogy|barreras pedagógicas]] de [[guardrails|seguridad]], retirada progresiva del apoyo, calibración a la preparación de quien aprende. Si usted diseñara (o fuera usuario de) una herramienta de aprendizaje con IA, ¿qué exigiría para que las ganancias mientras se usa se conviertan en capacidad duradera sin ella?

## Introducción

La transferencia del aprendizaje es una preocupación fundacional en la [[research-methods-aied|investigación]] educativa, y las herramientas de IA la han vuelto urgente. El patrón empírico definitorio documentado en los estudios sobre IA en la educación es una **paradoja de la transferencia**: el estudiantado que usa IA suele mostrar ganancias inmediatas y medibles en las tareas donde la IA está disponible, pero esas ganancias a menudo no persisten —o incluso se invierten— cuando se retira la IA y el estudiantado debe demostrar su comprensión de forma independiente. Este patrón implica a la [[cognitive-offloading|dependencia excesiva]], a la teoría de la carga cognitiva y a la [[metacognition|metacognición]] como mecanismos en juego, y conecta directamente con los debates sobre el diseño de la [[intelligent-tutoring|tutoría con IA]].

### La paradoja de la transferencia

El estudiantado que usa IA suele mostrar **ganancias inmediatas y medibles** en las tareas donde la IA está disponible. Sin embargo, cuando se retira la IA:

- Los efectos se vuelven **mixtos o negativos**
- Las ganancias a menudo **no se transfieren** a entornos no evaluados
- El estudiantado puede volverse **dependiente de la herramienta** a costa del razonamiento independiente

La base de evidencia, sintetizada en la revisión [[stanford-evidence-base-ai-k12-2026|Stanford Evidence Base on AI in K-12]], es consistente en todos los dominios:

| Estudio | Contexto | Efecto inmediato | Efecto de transferencia | Mecanismo |
|---|---|---|---|---|
| Bastani et al. (2025) | Matemáticas de secundaria | Mejores calificaciones en la práctica | **~17% peor** en exámenes finales sin material | El chatbot de propósito general hizo el trabajo |
| Chen et al. (2025) | Deberes de programación | Mejores notas en los deberes | **Ninguna mejora** en exámenes sin asistencia | El tutor con [[llm|LLM]] resolvía los problemas por el estudiantado |
| Lehmann et al. (2025) | Programación | Más temas cubiertos | **Perjudicó la comprensión**; amplió las brechas | IA de propósito general para estudiantes con pocos conocimientos previos |
| Stadler et al. (2024) | Investigación académica | Tareas completadas más rápido | **Razonamiento de menor calidad** frente a la búsqueda | Menor [[student-engagement|implicación]] cognitiva |
| Kosmyna et al. (2025) | Escritura de ensayos | Mayor calidad del ensayo | **El 83% no recordó** sus propias citas | Autoría externalizada |

Los cinco estudios muestran un patrón de **transferencia negativa o nula** cuando la intervención es IA de propósito general.

### Mecanismos que socavan la transferencia

**Desplazamiento metacognitivo.** Que la IA complete el razonamiento reduce las oportunidades del estudiantado para monitorizar su propia comprensión y seleccionar estrategias. El estudiantado que usó IA era menos capaz de explicar sus respuestas cuando se le preguntaba. Esto conecta con la investigación sobre [[metacognition|metacognición]] y la automonitorización, y con [[vibe-compiler-metacognition-genai-agency-2026|la evidencia de que los cursos estructurados aumentan la competencia metacognitiva mientras que los asistentes LLM sin más no lo hacen]].

**Supresión de la carga pertinente.** La IA de propósito general reduce no solo la carga cognitiva extrínseca (distractora), sino también la carga *pertinente*: el esfuerzo mental productivo que codifica conocimiento duradero. Una práctica más fácil se siente mejor, pero almacena huellas más débiles. Véase la teoría de la carga cognitiva y la distinción entre [[stanford-evidence-base-ai-k12-2026|IA específica para la tutoría e IA de propósito general]].

**Dependencia excesiva / inversión de la experticia.** Las personas noveles a las que se dan respuestas no construyen esquemas. La IA de propósito general ofrece respuestas; una tutoría eficaz ofrece guía estructurada. Cuando se dan atajos de nivel experto a personas noveles, el aprendizaje se interrumpe: el principio de las [[desirable-difficulties|dificultades deseables]] a la inversa.

**Desempeño dependiente de la herramienta.** El estudiantado puede optimizar para las posibilidades concretas de la herramienta de IA ([[prompt-engineering|ingeniería de prompts]], dependencia de la estructura del código generado) en lugar de construir generalización de dominio, una forma de [[cognitive-offloading-speedup-illusion|delegación cognitiva]] que se siente productiva pero desplaza el aprendizaje duradero.

**Delegación sensible a la capa y transferencia.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] pone a prueba directamente la distinción de Salomon, Perkins y Globerson entre «efectos con» y «efectos de» la tecnología en la escritura asistida por [[generative-ai|IA generativa]]: un cuasiexperimento de ocho semanas encontró que la colaboración abierta con IA maximizaba el desempeño en la escritura con apoyo, pero produjo los resultados *más bajos* de transferencia cercana en condiciones independientes sin IA, mientras que un apoyo acotado con reflexión preservaba la competencia independiente. Las capas de delegación más profundas (razonamiento, estructura) predijeron peor transferencia que las capas superficiales (gramática). Es evidencia directa de aula de que las ganancias de rendimiento *con* apoyo no se transfieren al desempeño independiente *sin* apoyo, y de que la profundidad de la delegación, y no solo si se usa IA, da forma a la transferencia.

Un caso complementario, aunque confundido, procede de la [[physics-education|física]]: el rediseño del curso introductorio de física nuclear y de partículas de la Universidad del Ruhr en Bochum ([[ai-particle-physics-education-redesign-2026|Mikhasenko et al., 2026]]) hizo que el estudiantado completara con éxito problemas de investigación colaborativos y ricos en recursos con asistencia de IA, pero ese mismo estudiantado promedió 20,6/80 en un examen escrito convencional sin ayuda, y varios intentos serios no lograron completar cálculos estándar. Los autores lo leen como evidencia de que el desempeño asistido no se transfiere automáticamente al desempeño sin indicaciones, y su remedio es un diseño deliberado: hacer del examen escrito el único factor determinante de la nota, publicar los problemas de clase con antelación para que el tiempo de clase se convierta en discusión preparada, y añadir preparación de prerrequisitos, ejemplos resueltos y consolidación en torno al trabajo exploratorio en el que se permite la IA.

## Condiciones que favorecen la transferencia positiva

La evidencia limitada sugiere que la transferencia es posible cuando:

- **Hay barreras pedagógicas de seguridad** — pistas paso a paso, focalización en las [[misconceptions|ideas erróneas]], [[socratic-method|preguntas socráticas]] (la variante de tutoría de Bastani et al., 2025)
- **Se preservan las estrategias tradicionales** — tomar notas junto con el uso de IA mejoró la retención (Kreijkes et al., 2026)
- **La IA se usa para la práctica [[formative-assessment|formativa]] y no [[summative-assessment|sumativa]]** — andamiaje durante el aprendizaje y no durante la evaluación
- **El formato de práctica se ajusta al conocimiento que se va a transferir.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger y Carvalho (2025)]] encuentran que las ganancias de la práctica de recuperación a menudo no se transfieren a problemas desconocidos —refuerzan la memoria de un procedimiento sin habilitar su uso en contextos nuevos— y que una generalización duradera a aplicaciones novedosas exige emparejar la práctica con ejemplos resueltos que apoyen la inducción de la habilidad; la proporción óptima entre ejemplos y problemas depende, por tanto, de si el contenido es un dato literal o una habilidad generalizable.
- **La experticia de quien aprende está calibrada** — la herramienta adapta el apoyo a la preparación en lugar de recurrir por defecto a la asistencia completa

- **La transferencia como criterio que separa el aprendizaje de la asistencia.** [[yan-agentivism-learning-theory-ai-2026|Yan y Gašević (2026)]] construyen su teoría del aprendizaje humano-IA en torno a la transferencia con apoyo reducido: el desempeño asistido cuenta como aprendizaje solo si la capacidad persiste una vez retirado el apoyo, lo que convierte la transferencia en la prueba y no en uno más entre varios resultados. Su propuesta es direccional: exigir la comprobación de fuentes o la justificación durante el trabajo apoyado por IA debería mejorar el desempeño diferido, mientras que la delegación repetida y sin fricción, sin reconstrucción, debería debilitar la calibración que las personas que aprenden tienen de su propia competencia.

Esto se alinea con la investigación sobre [[intelligent-tutoring|tutoría con IA]] que muestra que las herramientas específicas para la tutoría con barreras pedagógicas de seguridad superan a los [[conversational-ai|chatbots]] de propósito general, y con los principios del [[scaffolding|andamiaje]] sobre la retirada progresiva del apoyo a medida que crece la competencia.

### Preguntas sin respuesta

1. **Escala temporal:** ¿mejora la transferencia a lo largo de semanas o meses de uso, o se profundiza la dependencia?
2. **Diferencias de dominio:** ¿es mejor la transferencia en dominios bien estructurados (matemáticas) que en dominios poco estructurados (escritura)?
3. **Diferencias individuales:** ¿sufre menos pérdida de transferencia el estudiantado con [[prior-knowledge|conocimientos previos]] elevados que las personas noveles?
4. **Remediación de habilidades:** ¿pueden las sesiones explícitas de práctica «sin IA» revertir la dependencia de la herramienta?

### Conexiones con conceptos relacionados

La transferencia del aprendizaje conecta con la [[metacognition|metacognición]] (automonitorización de la comprensión), la teoría de la carga cognitiva (carga pertinente frente a extrínseca), las [[desirable-difficulties|dificultades deseables]] (esfuerzo productivo), el [[scaffolding|andamiaje]] (retirada progresiva del apoyo), la [[cognitive-offloading|dependencia excesiva]] (dependencia de la herramienta) y el [[sociocultural-learning|aprendizaje sociocultural]] (la IA de propósito general opera fuera de la ZDP al completar el trabajo por el estudiantado). Es el puente entre el desempeño asistido y el aprendizaje genuino: la distinción que representa [[stanford-evidence-base-ai-k12-2026|la base de evidencia de Stanford sobre IA en K-12]] y la pregunta central para la eficacia de la [[intelligent-tutoring|tutoría con IA]].

## Conceptos conectados

- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[self-regulated-learning]]
- [[learning-theories]]
- [[productive-failure]] — Fracaso productivo
## Artículos conectados
- [[yan-agentivism-learning-theory-ai-2026]] — Una teoría de rango medio del aprendizaje para la interacción humano-IA, con cuatro mecanismos y seis proposiciones contrastables (Yan y Gašević 2026)

- [[layer-sensitive-cognitive-offloading-writing-2026]] — Delegación cognitiva sensible a la capa en la escritura asistida por IA generativa (Chen 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Sobregeneralización engañosa: el dominio adaptativo puede detener la práctica antes de que quien aprende sepa cuándo abstenerse de actuar (An, McLaren y Stamper 2026)
- [[critical-thinking-paradox-genai-learning-2026]] — La paradoja del pensamiento crítico en el aprendizaje integrado con IA generativa
- [[stanford-evidence-base-ai-k12-2026]]
- [[educational-llm-alignment]]
- [[cognitive-offloading-speedup-illusion]]
- [[vibe-compiler-metacognition-genai-agency-2026]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — La distinción entre desempeño y aprendizaje y la transferencia duradera
- [[kim-ai-productive-failure-adult-2026]] — Diseñar sistemas de IA que apoyen el aprendizaje basado en el fracaso productivo
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Dirección pedagógica de los LLM para el fracaso productivo
- [[rachatasumrit-example-problem-ratio-2026]]
- [[ai-particle-physics-education-redesign-2026]] — La IA en la educación en física de partículas: problemas de investigación y habilidades fundacionales
- [[shi-genai-experiential-learning-management-education-2026]] — sostiene que las simulaciones de aula protegidas pueden formar hábitos de decisión que fallan fuera de ellas
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluación de modelos preentrenados para la valoración pedagógica de preguntas educativas novedosas asistidas por IA
