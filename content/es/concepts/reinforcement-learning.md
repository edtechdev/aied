---
title: Aprendizaje por refuerzo
created: "2026-09-28T18:23:55-04:00"
updated: "2026-10-02T09:09:37-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer]
type: concept
pedagogy: [active-learning, scaffolding]
technology: [adaptive-learning, intelligent-tutoring, llm, personalized-learning]
ethics: [pedagogical-safety]
level: [special education, k 12, higher ed]
confidence: medium
translation_of: concepts/reinforcement-learning
source_updated: "2026-09-03T15:00:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Aprendizaje por refuerzo**: entrena tutores y agentes de IA mediante señales de recompensa: [[special-r1-rl-special-education]], [[singh-eduqwen-pedagogical-rl-2026]], [[pedagogical-safety-rl]] y [[ai-coaching-rl-skill-development]] alinean el aprendizaje por refuerzo con objetivos pedagógicos, incluidos la seguridad y la transferencia de habilidades ([[intelligent-tutoring]], [[agentic-ai]]).

## Preguntas para reflexionar

- Un tutor de aprendizaje por refuerzo «aprende» qué hacer maximizando una señal de recompensa. Antes de leer, ¿qué podría estar mal en una IA que optimiza una recompensa, en concreto si la recompensa es algo como «el estudiante hace clic en continuar» o «respuesta correcta ahora»?
- La página señala que el diseño de la recompensa codifica valores educativos. Si tuviera que especificar la recompensa que debería maximizar un tutor de IA, ¿qué incluiría, y qué ignoraría o recompensaría incorrectamente su recompensa sin querer?
- El aprendizaje por refuerzo entrena agentes para tomar secuencias de decisiones de horizonte largo (qué pista dar, cuándo subir la dificultad, cómo marcar el ritmo) en lugar de respuestas únicas. ¿En qué se diferencia eso de la corrección momento a momento que uno recompensaría ingenuamente, y por qué importa esa diferencia para el aprendizaje?
- Las restricciones de seguridad pueden integrarse en el aprendizaje por refuerzo para que la optimización de la recompensa no vaya a costa del bienestar de quien aprende. Piense en un comportamiento «servicial» que podría exhibir un tutor que optimiza una recompensa y que en realidad sería pedagógicamente dañino (por ejemplo, regalar las respuestas para inflar la finalización). ¿Dónde pondría su línea de seguridad?
- La optimización de la recompensa puede preservar o destruir el esfuerzo productivo, según el diseño. Según su experiencia, ¿es lo mismo «el estudiante completa la tarea» que «el estudiante aprende»? ¿Dónde ha visto una IA optimizada para lo primero que socava lo segundo?

## Introducción

### Cómo funciona el aprendizaje por refuerzo en la AIED

El aprendizaje por refuerzo (RL) entrena a un agente recompensando el comportamiento deseado: el agente aprende una política que maximiza la recompensa acumulada mediante ensayo y error. En la IA en la educación, el RL se usa para entrenar agentes de tutoría y compañeros de aprendizaje que deben tomar secuencias de decisiones (qué pista dar, cuándo subir la dificultad, cómo marcar el ritmo de la práctica) en lugar de respuestas únicas. Esto hace que el RL encaje bien con el [[adaptive-learning|aprendizaje adaptativo]] y la [[intelligent-tutoring|tutoría inteligente]], donde importan las decisiones pedagógicas de horizonte largo.

### Aplicaciones documentadas en la base de conocimiento

- **RL alineado pedagógicamente.** [[singh-eduqwen-pedagogical-rl-2026|EduQwen]] usa una canalización RL-SFT-RL para entrenar un modelo que *guía* en lugar de responder, alineando la recompensa con objetivos pedagógicos; [[special-r1-rl-special-education]] aplica RL al diseño de tutores para la [[special-education|educación especial]].
- **Seguridad y transferencia de habilidades.** [[pedagogical-safety-rl]] integra restricciones de seguridad en la tutoría basada en RL para que la optimización de la recompensa no vaya a costa del bienestar de quien aprende; [[ai-coaching-rl-skill-development]] muestra un entrenamiento impulsado por RL que apoya el desarrollo y la transferencia genuinos de habilidades.
- **Simulación y práctica.** [[history-aware-student-simulation]] y [[q-learning-lab-rl-teaching]] usan RL y estudiantado simulado para entrenar y evaluar [[pedagogical-agent|agentes pedagógicos]], lo que conecta el RL con el [[student-modeling|modelado del estudiantado]] y la [[learning-analytics|analítica del aprendizaje]].

### Evidencia en el conjunto del campo

Una [[riedmann-reinforcement-learning-education-review-2026|revisión sistemática del RL en la educación con estándar PRISMA (Riedmann, Schaper y Lugrin, 2025)]] sintetizó 89 estudios (2000–2024) y encontró un crecimiento acusado después de 2016 en aplicaciones de [[adaptive-learning|aprendizaje adaptativo]] y [[intelligent-tutoring|tutoría]], concentradas en STEM (sobre todo en [[math-education|matemática]]). Informa de que el RL sin modelo dominó (n = 72), con Q-learning como algoritmo más común, pero que el RL clásico fue más consistentemente eficaz que el aprendizaje profundo por refuerzo (61 % frente a 36 % de los artículos que mostraban superioridad significativa); de que la adaptación se dividía en mecanismos de programación de contenidos (n = 53) y relacionados con la guía (n = 36), con el RL superando a las líneas base con más frecuencia en la guía; y de que la ganancia de aprendizaje —especialmente la ganancia de aprendizaje normalizada— fue la fuente de recompensa más eficaz. La revisión también advierte de que más de la mitad de los estudios (n = 54) omitieron las pruebas estadísticas, de modo que el crecimiento del campo ha superado su rigor metodológico.

### Conexión con la base de conocimiento

El RL sustenta buena parte del diseño moderno de [[agentic-ai|IA agéntica]] y de [[intelligent-tutoring|tutoría inteligente]], donde el agente debe optimizar el aprendizaje a largo plazo y no una única respuesta correcta. Se conecta con el [[llm-training-and-fine-tuning|entrenamiento pedagógico de LLM]] (el RL como método de entrenamiento), con el [[scaffolding|andamiaje]] (un diseño de la recompensa que preserve el esfuerzo productivo) y con el [[self-regulated-learning|aprendizaje autorregulado]] (agentes que ayudan a quien aprende a regular su propia estrategia). Como el diseño de la recompensa codifica valores educativos, la investigación sobre RL en la AIED está estrechamente ligada a la [[pedagogical-safety|seguridad pedagógica]] y a las consideraciones de equidad del comportamiento [[equity-in-ai-education|equitativo]] de los tutores.

## Conceptos conectados

- [[intelligent-tutoring]]
- [[student-experience]]
- [[stem-education]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[active-learning]]
- [[edtech-platform]]
- [[higher-ed]]
- [[learning-analytics]]
- [[open-source]]
- [[pedagogical-safety]]
- [[llm-training-and-fine-tuning]]
- [[ai-technologies]] — Marco general: tecnologías y técnicas de IA (modelos, entrenamiento de LLM, robótica, RAG, IA agéntica)

## Artículos conectados

- [[history-aware-student-simulation]]
- [[q-learning-lab-rl-teaching]]
- [[singh-eduqwen-pedagogical-rl-2026]]
- [[residencyrl-clinical-rl-training-2026]]
- [[learnlm-improving-gemini-learning]] — LearnLM: RLHF para el seguimiento de instrucciones pedagógicas
- [[adaptive-scaffolding-cognitive-engagement-its]] — Andamiaje ICAP adaptativo en un STI (BKT frente a DRL)
- [[riedmann-reinforcement-learning-education-review-2026]]
