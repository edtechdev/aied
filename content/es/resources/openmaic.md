---
title: "OpenMAIC"
created: "2026-09-27T03:00:56-04:00"
updated: "2026-09-27T03:00:56-04:00"
type: resource
summary: "La versión de código abierto de MAIC: un aula multiagente que convierte un tema o un documento en diapositivas, cuestionarios, simulaciones interactivas y actividades basadas en proyectos, impartidos por profesores y compañeros de clase de IA."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
translation_of: resources/openmaic
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
source_updated: "2026-09-20T17:30:00-04:00"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**OpenMAIC** es la versión de código abierto del aula multiagente MAIC descrita en [[mooc-to-maic|el estudio MAIC]]: describa un tema o adjunte sus propios materiales y genera una lección completa (diapositivas, cuestionarios, simulaciones HTML interactivas y actividades basadas en proyectos) que después imparte mediante profesores de IA y compañeros de clase de IA que hablan, dibujan en una pizarra y participan en el debate. Es el código que hay detrás de un aula que puede ejecutarse en lugar de solo leerse.

## Qué puede hacer con ella

La generación con un solo clic produce una lección en cuestión de minutos a partir de un prompt o de un documento, audio o vídeo subidos. La capa multiagente añade debate en el aula al que el estudiantado puede incorporarse o ser llamado, mesas redondas entre personajes con ilustraciones en la pizarra, y preguntas y respuestas de formato libre en las que el profesor responde con diapositivas o diagramas. Las sesiones admiten presentaciones de diapositivas, cuestionarios, simulaciones interactivas y aprendizaje basado en proyectos (PBL), y se exportan como `.pptx` editable o `.html` interactivo. La versión 1.0.0 (agosto de 2026) añadió un banco de trabajo de agentes: un espacio de trabajo centrado en el chat que planifica y revisa cursos completos, sesiones duraderas respaldadas por servidor que usted puede cancelar, reanudar o dirigir, y 24 habilidades integradas que abarcan diapositivas, cuestionarios, interactivos, imágenes, vídeo y voces. Un paquete `SKILL.md` permite que un entorno de agentes construya aulas desde una aplicación de mensajería.

## Para quién es

Profesorado y equipos de curso que quieren materiales generados que todavía puedan editar, diseñadores instruccionales que prototipan actividades multiagente, y desarrolladores que necesitan un aula autoalojable en lugar de un producto alojado. Los centros pueden desplegarlo en Vercel o con Docker, y el proyecto incluye una demostración alojada en open.maic.chat.

## Notas

Tiene licencia MIT, con una guía de usuario en inglés y chino y una comunidad activa en Discord y Feishu. Es neutral respecto al modelo: usted aporta al menos una clave de proveedor de LLM, y los componentes locales opcionales (Lemonade para modelos locales, FunASR para reconocimiento de voz) permiten ejecutar sin conexión una mayor parte de la pila, de modo que «gratis» describe el software, no la factura de inferencia. El artículo que lo respalda apareció en el *Journal of Computer Science and Technology* (2026, DOI 10.1007/s11390-025-6000-0), y el repositorio tenía más de 38.000 estrellas en septiembre de 2026.

## Conceptos conectados
[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]]
