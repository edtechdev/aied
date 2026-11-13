---
title: "MindRouter"
created: "2026-11-12T20:15:00-05:00"
updated: "2026-11-13T14:15:00-05:00"
type: resource
summary: "Una pasarela de inferencia con licencia Apache-2.0 de la Universidad de Idaho que pone una única API compatible con OpenAI delante de un clúster universitario de nodos GPU con vLLM y Ollama, y añade planificación de reparto justo, cuotas de tokens por usuario, SSO, registro de auditoría y monitorización en vivo de GPU y energía."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
source_updated: "2026-11-13T00:25:09-05:00"
translation_of: resources/mindrouter
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

La mayoría de las conversaciones sobre IA en el campus empiezan por qué modelo comprar y se detienen antes de la pregunta más difícil: dónde se ejecuta, quién lo mide y quién puede ver los registros. MindRouter es una respuesta a esa segunda pregunta. Es una pasarela autoalojada que se sitúa delante de un clúster heterogéneo de servidores [[llm|LLM]] (nodos vLLM y Ollama en GPU que la institución posee) y expone una API que habla los dialectos de OpenAI, Anthropic y Ollama, traduciendo entre ellos para que el código cliente existente siga funcionando.

## Qué puede hacer con ella

Apunte una herramienta a la pasarela en lugar de a un endpoint de proveedor. Detrás, MindRouter se ocupa de las partes que necesita un despliegue compartido: planificación de reparto justo con deficit round robin ponderado, cuotas de tokens y peticiones por usuario, acceso basado en roles con SSO opcional mediante Azure AD/Entra, Google, cualquier proveedor OIDC o SAML 2.0, y registro de auditoría completo de instrucciones, respuestas y artefactos. Un agente sidecar de GPU informa de la utilización, la memoria, la temperatura y la potencia por nodo, de modo que la administración puede ver el costo energético por petición y drenar un backend con cuidado cuando toca mantenimiento. Cubre más que chat: embeddings, visión, generación de imágenes y vídeo, texto a voz y voz a texto, OCR de documentos. También distribuye servidores MCP y habilidades de agente para asistentes de programación.

El argumento para una universidad es el que el proyecto nombra: [[institutional-ai-infrastructure|soberanía institucional de la IA]]. Las instrucciones y los documentos se quedan en infraestructura que la institución opera en lugar de pasar por una nube de terceros, lo que es más fácil de defender ante un senado académico o una oficina de [[privacy|privacidad]] que un acuerdo de tratamiento de datos con un proveedor. Que ese argumento se sostenga depende de si la institución tiene las GPU, la energía y el personal. La pasarela hace que el alojamiento local sea manejable, no barato.

## Para quién es

Grupos de computación para la investigación y de TI central con capacidad de GPU existente, centros de enseñanza y aprendizaje que quieren un único lugar donde medir el uso del profesorado y del estudiantado, y administraciones que sopesan plataformas empresariales alojadas frente a ejecutar la inferencia por sí mismas. Es un despliegue de Docker Compose con configuración de SSO documentada y marca personalizable, y se mantiene en la Universidad de Idaho, donde el autor lo presentó en PEARC '26; el proyecto tenía 22 estrellas y 3 bifurcaciones en noviembre de 2026.

## Notas y advertencias

Gratis y de código abierto bajo Apache-2.0, pero el costo se desplaza en lugar de desaparecer: hardware, electricidad y el tiempo del personal para operar un clúster. El software es joven para los estándares de la infraestructura, con tres contribuyentes, una sola institución de origen y versiones numeradas en cientos de etiquetas, así que una universidad debería pilotarlo junto a un servicio existente y no como única vía hacia un modelo. En el repositorio no hay una evaluación publicada del comportamiento de la planificación y las cuotas bajo carga real de campus; el artículo de PEARC es el lugar donde buscar el relato de los propios autores.

## Conceptos conectados

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
