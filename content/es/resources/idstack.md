---
title: "idstack"
created: "2026-09-27T03:11:55-04:00"
updated: "2026-09-27T03:11:55-04:00"
type: resource
summary: "Un conjunto de código abierto de once habilidades para Claude Code que auditan un curso contra la base de evidencias del diseño instruccional y etiquetan cada recomendación con su nivel de evidencia."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
source_updated: "2026-09-24T05:08:48-04:00"
translation_of: resources/idstack
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-27"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**idstack** es una colección de código abierto de once habilidades para el [[learning-design|diseño instruccional]] basado en la evidencia, distribuida como un complemento de Claude Code con una extensión complementaria de panel lateral para Chrome. En lugar de redactar un curso, las habilidades auditan uno: clasifican los objetivos según la taxonomía de Bloom revisada, comprueban la alineación constructiva entre objetivos, actividades y evaluaciones, señalan problemas de carga cognitiva y revisan la accesibilidad según WCAG 2.1 AA y el Diseño Universal para el Aprendizaje. Cada recomendación incluye un nivel de evidencia, desde T1 para metaanálisis y ensayos aleatorizados hasta T5 para la opinión de personas expertas. El proyecto afirma que sus citas se basan en 108 estudios revisados por pares de once ámbitos de investigación; ese recuento es una afirmación del propio proyecto, y su bibliografía se publica en Markdown para que quien revise pueda comprobarla.

Los cursos entran a través de una conexión con la API de Canvas, un archivo IMS Common Cartridge, un paquete SCORM, una exportación a PDF desde una herramienta de autoría o documentos pegados. Un manifiesto de proyecto compartido recuerda el curso entre sesiones, y una habilidad de canalización encadena las etapas de diseño mientras omite el trabajo ya completado. Las revisiones se presentan según los ocho estándares de Quality Matters y el marco de la Comunidad de Indagación, que separa la presencia docente, social y cognitiva, y después clasifican las recomendaciones por gravedad.

## Qué saber antes de adoptarla

El complemento requiere Claude Code y un shell de bash para instalarse; PowerShell y cmd no pueden ejecutar el script de configuración, y se recomienda Python 3 para las tendencias de puntuación. Los datos del curso permanecen en la carpeta del proyecto en la propia máquina de quien lo usa, y solo salen de ella mediante una integración que usted invoque, como una llamada a la API de Canvas. La inferencia en vivo de la extensión de Chrome necesita la propia clave gratuita de Google AI Studio de quien la usa, aunque un modo de simulación la demuestra sin ella. El proyecto se etiqueta a sí mismo como beta en la versión 3.5.1.0 y advierte de cambios incompatibles entre versiones menores, y se publica bajo la cuenta de GitHub savvides en lugar de por una persona autora con nombre.

## Conceptos conectados
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
