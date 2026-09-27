---
title: "DeepTutor"
created: "2026-09-27T03:01:09-04:00"
updated: "2026-09-27T03:01:09-04:00"
type: resource
summary: "La publicación de código abierto del marco de tutoría agéntica DeepTutor: un único espacio de trabajo para la tutoría, la generación de preguntas, la práctica de dominio, la investigación y la visualización, con una memoria de quien aprende inspeccionable."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
source_updated: "2026-09-20T17:30:00-04:00"
translation_of: resources/deeptutor
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**DeepTutor** es la implementación de código abierto del marco de tutoría evaluado en [[deeptutor|el estudio de DeepTutor]], y ha crecido mucho más allá del alcance de aquel artículo hasta convertirse en un espacio de trabajo general de aprendizaje nativo de agentes. La tutoría, la resolución de problemas, la generación de cuestionarios, la práctica de dominio, la investigación y la visualización comparten un mismo entorno de ejecución de capacidades y un mismo contexto de sesión, de modo que el perfil de quien aprende que se va construyendo al resolver problemas condiciona las explicaciones y los elementos de práctica que vienen después.

## Qué puede hacer con ella

Diez modos (Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading e Immersive Watching) se ejecutan sobre el mismo entorno de ejecución y se apoyan en bases de conocimiento, libros, borradores, cuadernos, bancos de preguntas y personas reutilizables. La recuperación es deliberadamente multimotor: bibliotecas RAG versionadas sobre LlamaIndex, PageIndex, GraphRAG, LightRAG o un servidor LightRAG remoto, además de una base WeKnora autoalojada, una biblioteca de Tencent IMA o MarginNote, o un vault de Obsidian vinculado. La memoria es inspeccionable en lugar de opaca: los rastros L1, los resúmenes superficiales L2 y la síntesis L3 son visibles y editables, con un Memory Graph que enlaza cada resumen con la evidencia que lo respalda. Un binario `deeptutor` ofrece un REPL de terminal y emite NDJSON en flujo para cualquier agente que quiera utilizarlo como herramienta, y una comunidad EduHub distribuye habilidades instalables.

## Para quién es

Profesorado e investigadores de educación superior que quieren una versión desplegable del marco sobre el que informa el artículo, desarrolladores que construyen sobre un entorno de ejecución conectable, y estudiantes autodirigidos dispuestos a ejecutar su propia instancia. La documentación está en deeptutor.info.

## Notas

Con licencia Apache 2.0, en la versión 1.6.9 a fecha de septiembre de 2026 y con unas 40.000 estrellas en GitHub. La evaluación publicada que lo respalda (una mejora media del 10,8 % en las métricas personalizadas frente a bases de referencia sólidas y un razonamiento agéntico general un 29,4 % más fuerte en cinco modelos de base, sobre el benchmark TutorBench) se resume en [[deeptutor|la página del artículo]], cuyas limitaciones también se aplican aquí. Como en cualquier pila de IA de código abierto, usted aporta las claves de los proveedores de modelos, y un despliegue de escritorio o de servidor espera Python 3.11 y Node.

## Conceptos conectados
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]