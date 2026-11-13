---
title: "Amplify GenAI"
created: "2026-11-12T20:15:00-05:00"
updated: "2026-11-13T14:15:00-05:00"
type: resource
summary: "La plataforma de IA generativa empresarial de Vanderbilt, con licencia MIT, desplegada en la propia cuenta de AWS de la institución: asistentes personalizados sobre documentos locales, respuestas con recuperación aumentada, uso compartido en toda la organización y contabilidad de costos hasta el mensaje individual."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
source_updated: "2026-11-13T00:25:09-05:00"
translation_of: resources/amplify-genai
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Amplify GenAI es la apuesta contraria a una licencia para todo el campus de un asistente comercial: la institución ejecuta la plataforma por sí misma, dentro de su propia cuenta de Amazon Web Services, y paga por lo que usa. Vanderbilt la construyó para su propia comunidad, la publicó bajo MIT en tres repositorios y ahora la ofrece a otras organizaciones como alternativa a los contratos empresariales por puesto, con el argumento de que lo que debe ser caro son los modelos y no el número de puestos.

## Qué puede hacer con ella

Los usuarios crean asistentes personalizados cargando documentos o conectando fuentes de datos, y los asistentes responden con [[rag|generación aumentada por recuperación]] sobre ese material en lugar de basarse solo en el entrenamiento general. Los asistentes se pueden compartir en toda la organización, encadenar en una misma conversación y dotar de plantillas de instrucciones; la plataforma también produce archivos de PowerPoint y Word, diagramas y visualizaciones. La administración obtiene lo que un servicio compartido necesita: contabilidad de costos hasta el nivel de mensaje, límites por usuario, carpetas y espacios de trabajo, y SSO, todo en un despliegue que la institución controla.

La decisión de diseño que más importa para una [[higher-ed|universidad]] es el modelo de contabilidad. Vanderbilt informa de que, con 1,300 usuarios piloto, su costo por usuario fue de unos \$3 al mes incluida la AWS, y que la mitad de esos usuarios consumió menos de \$1 al mes en tokens. La universidad presenta esas cifras como un caso de estudio, no como un referente auditado. La facturación por uso premia a un campus donde una minoría de usuarios hace la mayor parte del trabajo, que es la forma normal de la adopción de la IA, y hace que la pregunta de la oficina financiera («¿cuánto cuesta esto por estudiante?») se pueda responder desde los registros y no desde un contrato.

## Para quién es

Las áreas centrales de TI y las oficinas del CIO que ya ejecutan cargas de trabajo en AWS y quieren una alternativa mantenida por la comunidad a un asistente empresarial comercial; el profesorado que necesita asistentes basados en el material del curso sin enviarlo al producto de consumo de un proveedor; y las instituciones que quieren un único lugar donde ver qué hace la gente con los modelos. Como se despliega en la propia cuenta de la institución, la cuestión de la residencia de datos la responde el despliegue y no la promesa de un proveedor.

## Notas y advertencias

Gratis de licenciar, no de ejecutar: la institución paga AWS y a los proveedores de modelos. La elección de modelo pasa por Amazon Bedrock (Anthropic, Mistral) o OpenAI y Microsoft Azure, y la ejecución de modelos locales propios no está implementada. El proyecto declara con claridad que no puede dar soporte a despliegues individuales y remite a las organizaciones a socios comerciales, así que el costo realista incluye personal o un contratista. Es un despliegue de tres repositorios (frontend, backend, infraestructura) con decenas de estrellas y no miles, y la comparación de costos anterior es la experiencia propia de Vanderbilt, no un estudio controlado. Las instituciones que prefieran mantener la inferencia en hardware propio deberían mirar [MindRouter](/aied/resources/mindrouter/) y leer los dos juntos: Amplify es una capa de aplicación sobre modelos de proveedores, MindRouter es una pasarela sobre sus propias GPU.

## Conceptos conectados

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
