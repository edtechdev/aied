---
title: "¿Cómo pueden los agentes de IA apoyar a estudiantes y docentes?"
created: "2026-09-22T18:34:19-04:00"
updated: "2026-10-28T13:43:49-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
audience: [instructors, learners, administrators]
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
source_updated: "2026-10-28T11:29:19-04:00"
translation_of: faqs/ai-agents-support-students-instructors
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-22"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Un proveedor hace una demostración de cuarenta minutos. El agente lee el programa, redacta el cuestionario de la semana siguiente, señala a tres estudiantes que no han abierto la lectura y se ofrece a escribirles. Su vicerrector quiere una decisión sobre la licencia para final de mes.

Un [[agentic-ai|agente]] planifica, llama a herramientas, mantiene el contexto, divide el trabajo en subtareas y se adapta a lo largo de los turnos, lo que es más de lo que hace un [[conversational-ai|chatbot]]. Los roles que eso abre del lado del estudiante y del lado del docente son reales. La evidencia no muestra que más autonomía produzca más aprendizaje: en el único estudio comparativo directo que hay aquí, un agente y un chatbot empataron. Ponga la autonomía donde una persona revise el resultado, deje la planificación en manos del estudiante y puntúe la calidad docente con su propia rúbrica.

## La versión breve

**1.** Nombre la tarea antes del producto.

**2.** Empiece por el lado del docente, donde un profesor ya inspecciona el trabajo.

**3.** Trate la autonomía añadida como un coste hasta que la evidencia diga lo contrario.

**4.** Deje la planificación y el juicio en manos del estudiante, porque son lo que la tarea existe para construir.

**5.** Puntúe al agente con su rúbrica y programe una comprobación sin ayuda antes de que termine el piloto.

## Elija la tarea antes de elegir el agente

[[agentic-workflows-education|Flujos de trabajo agénticos en educación]] nombra cuatro capacidades recurrentes: reflexión, planificación, uso de herramientas y colaboración multiagente. Cada una añade un coste junto a la posibilidad, en [[explainable-ai|interpretabilidad]], coordinación, [[trust-calibration|confianza]], latencia y supervisión.

Los roles del lado del estudiante van de la tutoría [[adaptive-learning|adaptativa]] y la planificación del estudio a la retroalimentación [[formative-assessment|formativa]], la [[problem-solving|resolución de problemas]] guiada y la generación de práctica, y de ahí a las recomendaciones de prerrequisitos y a la [[prompt-engineering|formulación de prompts]] [[metacognition|metacognitiva]] reflexiva. Los roles del lado del docente cubren el desarrollo de materiales, la [[automated-question-generation|generación y validación de preguntas]], el triaje de la retroalimentación, la [[learning-analytics|analítica]] del curso, el diseño instruccional, la recuperación de recursos y la orquestación de subagentes especializados.

Dos de ellos son más seguros al principio, porque ambos producen un artefacto que una persona lee antes que los estudiantes: un generador de preguntas emparejado con un validador, y la redacción de borradores que un docente edita.

## Empiece donde una persona ya revisa el trabajo

[[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]], el primer [[rct|ensayo controlado aleatorizado]] de un sistema humano-IA en tutoría en vivo, dio a tutores noveles orientación en tiempo real extraída del razonamiento de tutores experimentados, con 900 tutores y alrededor de 1.800 estudiantes. Los estudiantes de los tutores con acceso tenían 4 puntos porcentuales más de probabilidad de dominar los temas, y la cifra subía a 9 puntos entre los tutores peor valorados, cuyos estudiantes alcanzaron a los de los tutores mejor valorados del grupo de control. Costó unos 20 dólares por tutor al año, y el análisis de más de 550.000 mensajes de tutoría mostró que los tutores pasaban de dar respuestas a formular preguntas guía. Eso es la IA aumentando al [[teacher-role|docente]].

El agente no enseñó al estudiante. Alimentó a una persona en mitad de la conversación, y la persona decidió qué decir. Una persona en el bucle y un resultado cercano al trabajo son lo que hace que el hallazgo sea trasladable a otro curso.

## No dé por hecho que más autonomía compra más aprendizaje

[[ilieva-agentic-genai-higher-education-2026|Un estudio de 130 estudiantes en un curso de comercio electrónico]] encontró que tanto los chatbots de [[generative-ai|IA generativa]] como los agentes se valoraron por encima del [[online-teaching-and-learning|e-learning]] tradicional en aprendizaje y [[personalized-learning|personalización]], sin diferencias significativas entre el chatbot y el agente. Más autonomía, ningún valor añadido en esas medidas.

El marco de ese estudio trata a los agentes como socios de aprendizaje acotados y supervisados por personas, con objetivos, puntos de control y decisiones finales en manos humanas. [[beyond-agent-label-agentic-ai-governance-2026|Más allá de la etiqueta de agente]] lo convierte en una regla de [[governance|gobernanza]]: la autonomía no debería exceder la madurez de la evidencia ni la fuerza del control humano responsable, y la evidencia es más sólida en resultados a nivel de artefacto y más débil en [[learning-gains|aprendizaje]] duradero y en [[equity-in-ai-education|equidad]].

El riesgo del lado del estudiante va en la misma dirección. Un agente que planifica y supervisa por un estudiante elimina la práctica que construye la [[self-regulated-learning|autorregulación]] e invita a la [[cognitive-offloading|descarga cognitiva]]. [[agentic-ai-pedagogical-best-practice-2026|La orientación sobre buenas prácticas]] pide fricción intencionada, [[scaffolding|andamiaje]] que se difumina y [[human-in-the-loop-ai|supervisión humana]]. [[desirable-difficulties|La fricción productiva]] tiene ejemplos que funcionan. Los agentes de conflicto constructivo que discuten con un diseño débil mejoraron los resultados de diseño en la investigación revisada. Los [[simulating-students|pares simulados]] apoyan el [[collaborative-learning|aprendizaje colaborativo]] y el sondeo [[socratic-method|socrático]], y las [[simulation|simulaciones]] [[medical-education|clínicas]] permiten a los estudiantes ensayar donde un error sale barato.

La prueba para cualquiera de ellos: después de la sesión, ¿qué puede hacer el estudiante que antes hacía el agente? Entregar el juicio le cuesta al estudiante la [[agency|práctica]] de usarlo.

## Contraste el agente con su propio juicio

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Ocho agentes docentes de IA desplegados en un currículo de medicina]] quedaron ordenados de forma distinta por las puntuaciones generadas por la plataforma y por una rúbrica de expertos independiente. El agente que la plataforma clasificaba en tercer lugar quedó último en calidad docente. Las puntuaciones de la plataforma indexan el rendimiento del estudiante, que se mueve por razones que nada tienen que ver con la enseñanza.

Pregunte qué cuenta un número del panel, quién escribió la rúbrica que hay detrás y cómo se vería una puntuación baja en el trabajo del estudiante. La [[pedagogical-safety|seguridad pedagógica]] pertenece a la misma revisión, ya que una cadena de [[pedagogical-agent|agentes]] hace difícil decir qué componente es responsable cuando una respuesta es errónea.

## Planifique el apagado

Los ensayos aleatorizados muestran que una asistencia breve de IA puede deprimir el rendimiento posterior sin ayuda, y el intervalo tras la retirada, el [[cognitive-washout-ai-skill-decay-2026|desvanecimiento cognitivo]], apenas se mide. La síntesis que sostiene esta página se apoya en una [[meta-analysis-systematic-review|revisión de alcance]] de 474 estudios y encuentra el trabajo concentrado en [[higher-ed|educación superior]], [[stem-education|STEM]], diseños a corto plazo y tutoría basada en texto, con solo una minoría fundamentada explícitamente en teoría educativa. Un piloto que termina cuando termina la licencia ha medido la ventana equivocada.

## En qué se equivocan los administradores

Un agente es un chatbot mejorado, así que la mejora debería notarse en los resultados. En la comparación de 130 estudiantes, ambas condiciones de IA superaron al e-learning y ninguna superó a la otra.

El panel clasifica la calidad docente. Clasifica el rendimiento del estudiante, y ocho agentes produjeron una clasificación que invirtió el tercer y el último puesto frente a una rúbrica de expertos.

La autonomía es la función que hay que comprar. La regla de proporcionalidad va en la dirección contraria, y la evidencia es más escasa donde la autonomía es mayor.

El acceso cierra la brecha de equidad. Un acceso desigual a sistemas agénticos capaces puede ampliarla, y un agente reproduce el sesgo de los datos de entrenamiento a escala.

## Lo que le van a responder

**"Los estudiantes van a dejar que lo haga todo."** Algunos lo harán, y la arquitectura decide con qué facilidad. Los agentes que planifican y redactan por el estudiante lo invitan. Los que exigen un intento y luego hacen una pregunta, no.

**"La evaluación del proveedor dice que funciona."** Pregunte qué cuenta el número. Si es el rendimiento del estudiante medido por la plataforma, mide a los estudiantes tanto como al agente.

**"Nadie puede decir qué agente es responsable en una cadena."** Es cierto en la mayoría de los despliegues actuales. Nombre un responsable para la cadena, registre qué componente produjo qué salida y mantenga un punto de control humano antes de que algo llegue al expediente de un estudiante.

## Qué hacer esta semana

**1.** Escriba la tarea y el resultado con el que la juzgará, una frase cada uno, antes de la próxima llamada con el proveedor.

**2.** Puntúe la salida de un agente con su rúbrica sobre diez trabajos reales de estudiantes y guarde las puntuaciones.

**3.** Añada al plan del piloto una tarea sin ayuda, con fecha y con un responsable.

## A dónde ir después

[[developing-ai-tutor]] cubre la construcción orientada al estudiante, del objetivo a la escalera de ayuda, y [[evaluating-ai-interventions-methods]] cubre si la cosa funcionó. [[intelligent-tutoring]] y [[ai-literacy]] aportan el vocabulario de diseño que esta página presupone.
