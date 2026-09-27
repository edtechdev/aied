---
title: "Education Agent Skills"
created: "2026-09-27T02:34:31-04:00"
updated: "2026-09-27T02:34:31-04:00"
type: resource
summary: "Una biblioteca de 165 habilidades de agente fundamentadas en la evidencia que abarcan pedagogía, ciencia del aprendizaje, currículo y evaluación, empaquetadas para Claude, Codex y Hermes."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
translation_of: resources/education-agent-skills
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
source_updated: "2026-09-23T21:05:00-04:00"
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Education Agent Skills** es una biblioteca de 165 habilidades de agente para docentes, líderes escolares y personas que construyen herramientas educativas. Las habilidades se agrupan en veinte dominios que abarcan pedagogía, ciencia del aprendizaje, currículo, evaluación y regeneración, y cada una está escrita para que la cargue un agente, no para leerse como un documento.

## Qué puede hacer con ella

Las habilidades se instalan en Claude Code, Codex y Hermes, ya sea como complemento o copiando las carpetas, de modo que la misma biblioteca funciona en varias superficies de agente. Un servidor MCP alojado expone la colección como herramientas para agentes que no pueden instalar habilidades localmente, y el repositorio incluye tanto un registro como un paquete precompilado para que el servidor pueda servir la colección sin leer los archivos individuales en el despliegue.

La afirmación distintiva del proyecto es su fundamentación: las habilidades citan la evidencia en la que se apoyan, y el propio historial del repositorio muestra que esa disciplina se aplica en la práctica y no solo se declara, incluida una corrección ya fusionada que eliminó una atribución sin respaldo y corrigió la descripción de una salvaguarda probada en un estudio citado.

## Notas

Las habilidades educativas, la documentación y los materiales curriculares tienen licencia CC BY-SA 4.0, por lo que la reutilización y la adaptación son abiertas, mientras que las obras derivadas deben llevar la misma licencia. Dos detalles operativos importan si lo despliega. El punto de acceso MCP alojado exige tokens en lugar de estar abierto a cualquiera, y como el servidor sirve una instantánea confirmada en el repositorio y no los archivos SKILL.md, una habilidad que usted añada sin recompilar y confirmar el paquete no aparecerá en el servidor en producción ni siquiera después de un nuevo despliegue. La biblioteca la construye Gareth Manning, educador y diseñador curricular, y los términos de licencia se aplican específicamente al contenido educativo.

## Conceptos conectados
[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]]
