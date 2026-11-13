---
title: "Vibe-Coding Center"
created: "2026-11-13T14:12:00-05:00"
updated: "2026-11-13T14:12:00-05:00"
type: resource
summary: "Una guía de campo para docentes que quieren construir un sitio educativo estático con un asistente de programación con IA: tres archivos Markdown de instrucciones para el diseño, la seguridad y la privacidad del estudiantado, con guías legibles y un paquete descargable."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Vibe-Coding Center** es la guía de campo gratuita de Miguel Guhlin para un docente que quiera [[vibe-coding|construir con vibe-coding]] un pequeño sitio educativo estático con un asistente de programación con IA —una tarjeta de salida, un cuestionario, un portafolio de clase— sin publicar junto a él una clave de API expuesta o datos del estudiantado.

## Qué puede hacer con él

Tres archivos de instrucciones concentran la orientación: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` y `securevcc.md`. Descárguelos en la raíz de un proyecto, complete la plantilla del resumen del proyecto y pida después al asistente que lea y aplique los tres; la guía insiste en que su presencia no equivale a activarlos, así que los archivos tienen que nombrarse en la petición. Guías legibles explican cada uno, incluido un recorrido «Tres comprobaciones esenciales antes de compartir»: recoger menos datos del estudiantado, inspeccionar una clave de API expuesta y ajustar el diseño de una herramienta a su tarea de aprendizaje. El paquete completo añade el sitio en sí, un paquete de indicaciones, una revisión de lanzamiento y scripts de reconstrucción, con un manifiesto SHA-256 para la descarga.

La página complementaria de [ejemplos de EduSynth Hub](https://mguhlin.github.io/funquiz/examples.html) muestra los resultados como herramientas estáticas que funcionan y no como capturas de pantalla: un generador de tarjetas de salida que escribe una pregunta en un nivel elegido de la taxonomía SOLO, un portafolio del estudiantado que es un único archivo HTML en GitHub Pages y una biblioteca de recursos de desarrollo profesional con búsqueda, todo ejecutándose en el cliente y sin inicio de sesión en un LMS.

## Para quién es

Docentes y [[learning-design|diseñadores instruccionales]] de K-12 y educación superior que saben describir la herramienta que quieren y están dispuestos a comprobar lo que produjo el asistente. También encaja en un departamento que quiere una lista de verificación compartida antes de que alguien publique una herramienta dirigida al estudiantado, y en el profesorado que enseña [[ai-literacy]] construyendo en lugar de criticando.

## Notas y advertencias

El centro ofrece orientación, no un producto de cumplimiento normativo: el sitio no declara conformidad con su propio objetivo WCAG 2.2 AA, responde «no» a la pregunta «¿usar estos archivos hace que mi sitio cumpla la norma?» y advierte de que una revisión de ingeniería no sustituye la autorización del centro ni la revisión jurídica. El estante de seguridad apunta a axe-core, Gitleaks, ZAP y Playwright; son referencias y no software incluido, y las herramientas invasivas están pensadas para un objetivo desechable o explícitamente autorizado. La lectura no requiere cuenta. Reconstruir las páginas HTML requiere Python y `markdown-it-py`, que es una dependencia de compilación y no de quien visita el sitio. El repositorio tiene licencia MIT, mientras que las ilustraciones de terceros y los proyectos enlazados conservan sus propios términos, documentados en `CREDITS.md`.

## Conceptos conectados

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
