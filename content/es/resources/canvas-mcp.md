---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Un servidor MCP de código abierto que permite a Claude, Cursor, Codex y otros agentes leer y actuar dentro de Canvas LMS: herramientas para estudiantes, docentes y diseñadores de aprendizaje, con las acciones de escritura restringidas y anonimización opcional de los datos del estudiantado."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
connected_concepts: [agentic-ai, institutional-ai-infrastructure]
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Canvas MCP** es un servidor de Model Context Protocol de código abierto de Vishal Sachdev que conecta un cliente de IA con una instancia de Canvas LMS: el agente puede enumerar el trabajo próximo de un estudiante, leer las tareas y entregas de un curso, enviar mensajes a una clase o auditar la accesibilidad de un curso, todo mediante herramientas que expone el servidor y no mediante la extracción improvisada de datos de la pantalla.

## Qué puede hacer con él

El servidor incluye tres familias de herramientas. Las herramientas para estudiantes responden a «qué vence esta semana», «he entregado todo», «cuántos intentos de cuestionario me quedan» contra los propios endpoints `self` de Canvas. Las herramientas para docentes permiten listar y crear tareas, leer entregas, calificar en bloque, enviar conversaciones y obtener analíticas de tareas. Las herramientas para diseñadores de aprendizaje cubren controles de calidad de cursos y escaneos de accesibilidad WCAG. Hay hasta 128 herramientas disponibles en total, aunque el perfil predeterminado registra menos y las herramientas condicionadas por funciones opcionales elevan la cifra. Además de las herramientas, ocho habilidades de agente empaquetan recetas de varios pasos —un plan semanal, una revisión matinal de la salud del curso, un árbol de decisión para calificar en bloque, un flujo de revisión por pares, una auditoría del curso antes del semestre— instalables en más de 40 agentes mediante `skills.sh`.

## Para quién es

Profesorado que quiere que un agente se encargue de la lectura y la mensajería rutinarias en torno a un curso, y [[institutional-ai-infrastructure|equipos institucionales]] que evalúan a qué puede llegar realmente un agente conectado al LMS. Los diseñadores de aprendizaje obtienen aquí lo más cercano a una revisión de curso automatizada. El proyecto es un ejemplo trabajado de [[agentic-ai|herramientas agénticas]] al nivel del LMS de una institución y no de un chatbot genérico.

## Notas y advertencias

La instalación es local: Python 3.11 o posterior, un token y una URL de la API de Canvas, y un cliente MCP, con una extensión de doble clic para Claude Desktop. El servidor alojado público se ha retirado, así que un despliegue compartido implica el autohospedaje detrás de la autenticación de la propia institución. Las herramientas de escritura están restringidas: los servidores HTTP son de solo lectura a menos que se permitan explícitamente las herramientas de escritura, las eliminaciones exigen tokens de confirmación y la ejecución de código se realiza en un entorno aislado que falla de forma segura. Los controles de privacidad son opcionales: la anonimización de respuestas, el enmascaramiento de correos y el filtrado de PII deben habilitarse, y el README es cuidadoso al señalar que pueden apoyar las obligaciones de FERPA sin establecer cumplimiento, ya que este depende del despliegue y del proveedor de IA. No hay telemetría en el servidor, pero Canvas y el cliente elegido mantienen sus propios registros. El proyecto tiene licencia MIT, se desarrolla activamente y sus propias guías son la autoridad sobre los nombres actuales de las herramientas y la configuración.
