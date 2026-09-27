---
title: "Skills for Real Engineers"
created: "2026-09-27T03:12:21-04:00"
updated: "2026-09-27T03:12:21-04:00"
type: resource
summary: "La colección de código abierto de Matt Pocock de habilidades de agente pequeñas y componibles, que incluye una habilidad de enseñanza de varias sesiones, una habilidad de cuestionamiento implacable y orientación sobre cómo escribir documentos que un agente pueda seguir."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
source_updated: "2026-09-24T05:57:40-04:00"
translation_of: resources/matt-pocock-skills
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Skills for Real Engineers** es el directorio de habilidades de agente que Matt Pocock ha publicado: archivos de instrucciones pequeños y componibles que se instalan en Claude Code, Codex u otro agente, y que están escritos para adaptarse en lugar de adoptarse enteros. La mayor parte de la colección sirve al trabajo de software, pero varias habilidades son instrumentos educativos concebidos para enseñar y preguntar, y no para el código.

El ejemplo más claro es `teach`, que se desarrolla a lo largo de varias sesiones y trata el directorio de trabajo como un espacio de enseñanza con estado, de modo que el avance de quien aprende y sus preguntas abiertas persisten entre conversaciones en lugar de reiniciarse cada vez. `grill-me` y su primitiva subyacente `grilling` entrevistan al usuario sin tregua sobre un plan hasta resolver cada rama, lo que es [[socratic-method|cuestionamiento socrático]] entendido como procedimiento reutilizable y no como un estado de ánimo conversacional. `wait-what` responde en el momento en que un mensaje no llega, reformulándolo en lenguaje llano con el contexto que faltaba, un gesto que cualquier docente reconoce al ver cómo una explicación no cala la primera vez. `writing-for-agents` aborda cómo escribir documentos que un [[prompt-engineering|agente]] pueda seguir, que hoy es la forma práctica de redactar instrucciones para material de curso creado con [[pedagogical-agent|IA]]. `to-questionnaire` convierte una decisión en un cuestionario para quien pueda responderla, `handoff` compacta una conversación en un documento desde el que otro agente puede continuar, y `wizard` genera un recorrido interactivo para pasos que solo puede ejecutar una persona.

## Qué saber antes de adoptarla

Todo es [[open-source|código abierto]] bajo licencia MIT y gratuito para tomarlo como punto de partida del [[ai-literacy|alfabetización en IA]] o del [[self-directed-learning|aprendizaje autodirigido]] local. La adopción es enorme y avanza deprisa: unas 269.000 estrellas y 22.000 bifurcaciones al consultarlo en septiembre de 2026, con el último commit ese mismo día. La advertencia está en el alcance. Las habilidades dan por supuesto el contexto de trabajo de un [[human-ai-collaboration|ingeniero]] y se organizan en los cajones de ingeniería, productividad, obsoletas y en curso, de modo que algunas entradas están explícitamente inacabadas o retiradas, y el README sirve además como formulario de suscripción a un boletín. Trate las habilidades de enseñanza y de cuestionamiento como la parte transferible, y cuente con reescribir cualquiera de ellas antes de ponerla delante de su estudiantado.

## Conceptos conectados
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]