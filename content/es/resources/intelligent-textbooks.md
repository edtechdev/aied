---
title: "Construcción de libros de texto inteligentes"
created: "2026-10-10T11:10:00-04:00"
updated: "2026-10-10T12:03:00-04:00"
type: resource
summary: "La guía de código abierto de Dan McCreary para construir libros de texto inteligentes —libros de texto en línea con búsqueda, navegación, glosarios, cuestionarios, grafos de conceptos y simulaciones integradas— usando MkDocs Material y IA generativa, con una biblioteca complementaria de MicroSims interactivas generadas por IA."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
source_updated: "2026-10-10T11:10:00-04:00"
translation_of: resources/intelligent-textbooks
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-10"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

El sitio **Intelligent Textbooks** es la guía paso a paso de Dan McCreary para construir *libros de texto inteligentes* —libros de texto en línea que van más allá de los PDF estáticos al añadir búsqueda, navegación por el sitio, un glosario de términos, un índice, gestión de cuestionarios, fórmulas renderizadas, previsualizaciones para redes sociales, comprobación de enlaces y un **grafo de conceptos** fácil de visualizar que muestra todos los conceptos de un curso y sus dependencias—. La guía sostiene que muchos cursos actuales pueden beneficiarse de libros de texto en línea de alta calidad con estas funcionalidades, y muestra cómo construirlos usando el sistema de compilación [MkDocs](http://mkdocs.com/) combinado con el tema Material y la IA generativa para crear y mantener el contenido.

El movimiento que lo define es que el libro de texto *se escribe en Markdown y lo genera la IA*, un caso concreto del patrón [[vibe-coding|autoría asistida por IA]] aplicado al [[curriculum-design|contenido del curso]]: en lugar de mantener a mano un sitio grande, se describe el curso y se deja que la IA generativa produzca y mantenga las páginas, mientras la cadena de herramientas se ocupa de la navegación, la búsqueda y el grafo de conceptos. Una biblioteca complementaria de [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) afirma automatizar más del 90 % de las tareas necesarias para construir un libro de texto de nivel 2 a partir de la descripción de un curso.

## Un recurso complementario: MicroSims

El complemento natural de esta guía es la biblioteca **MicroSims** de McCreary en <https://dmccreary.github.io/microsims/> (código fuente: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), que aporta las simulaciones interactivas que un libro de texto inteligente integra. Una *MicroSim* (microsimulación) es una simulación interactiva sencilla generada con IA para ayudar al profesorado a explicar un concepto, y puede integrarse en un libro de texto inteligente o en cualquier sitio que acepte un `iframe`. Las MicroSims se distinguen por tres razones: **generación asistida por IA** (patrones de diseño estandarizados convierten una descripción en lenguaje natural de una simulación en un recurso compartible), **integración universal** (un único elemento HTML `iframe` permite insertarla en cualquier página) y **código transparente y modificable** (nada de caja negra —un clic abre la simulación en un editor web, y una licencia Creative Commons permite a la mayoría del profesorado usarlas sin pagar licencias—). El término lo acuñó Valerie Lockhart en 2023, después de comprobar que profesorado y estudiantes podían construir simulaciones con la biblioteca JavaScript p5.js con poca o ninguna formación.

El proyecto publica también un JSON Schema para los metadatos de las MicroSims, de modo que las herramientas de IA puedan generar descriptores en los que se pueda buscar, y tiene en su hoja de ruta un registro facetado de MicroSims. Un artículo de investigación que describe el marco —*MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support*— está en arXiv ([2511.19864](https://arxiv.org/abs/2511.19864)). Entre las simulaciones de ejemplo se cuentan Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula y un gráfico de rendimiento del mercado de valores, todas ejecutándose en directo en el sitio.

## Para quién es

Para profesorado y diseñadores instruccionales que quieran construir o mantener el libro de texto de un curso, especialmente en educación superior y formación profesional, además de quienes se dedican al desarrollo del profesorado y cualquiera que use IA generativa para crear contenido educativo. Encaja con educadores que se sienten cómodos con un flujo de trabajo de Markdown y Git (o dispuestos a aprenderlo) y que quieren que la IA se encargue de la fontanería del sitio —búsqueda, navegación, grafo de conceptos— para poder centrarse en la pedagogía.

## Notas y advertencias

Es una guía de un profesional y su cadena de herramientas, no un estudio revisado por pares: presenta un flujo de trabajo y su propia justificación educativa («los libros de texto inteligentes guían a los estudiantes por los conceptos en su búsqueda del conocimiento») en lugar de evidencias de resultados de aprendizaje. El artículo de investigación sobre MicroSims es lo más cercano a un respaldo empírico, y está autopublicado en arXiv. Ambos proyectos son de código abierto (el repositorio intelligent-textbooks declara licencia MIT y 38 estrellas; MicroSims declara licencia Creative Commons y 13 estrellas) y se mantienen de forma activa. Los grafos de conceptos y la estructura que parte del glosario son realmente útiles para la descubribilidad, pero la guía presupone un flujo de autoría bastante técnico —MkDocs, Git y herramientas de IA generativa—, lo que puede ser una barrera para parte del profesorado. En el momento de la ingesta el registro de MicroSims sigue estando únicamente en la hoja de ruta, así que encontrar una simulación concreta ya existente depende de la búsqueda y la navegación propias del sitio.

## Conceptos conectados

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
