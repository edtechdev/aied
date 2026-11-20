---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Una aplicación web para crear tareas de IA paso a paso en las que el docente define el rol del modelo y las puertas sobre el uso del estudiante, y la identidad del estudiante se mantiene fuera del contexto del modelo."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Un constructor de tareas con IA integrada, creado por Joseph Slade en Oregon State University y operado por AI Education Labs, Inc. La premisa es que la alternativa a un chatbot sin reglas no es la prohibición sino la estructura: el docente define los pasos que recorre el estudiante, decide qué rol juega el modelo en cada paso y establece hasta qué punto el estudiante puede apoyarse en él. La tarea se publica después como un enlace de acceso en lugar de distribuirse como un documento de prompts.

## Qué puede hacer con ella

- **Defina el rol del modelo por tarea.** El constructor ofrece ajustes predefinidos de tutor, interrogador socrático, proveedor de retroalimentación y asistente de investigación, además de un prompt personalizado, para que el asistente se comporte como exige la tarea.
- **Ponga puertas entre los pasos.** Un paso puede exigir que el estudiante explique su razonamiento antes de avanzar, y la ayuda de IA puede limitarse por paso — la interfaz muestra un contador de usos restantes en lugar de acceso ilimitado.
- **Elija la superficie de trabajo.** Los estudiantes escriben en una página de documento con comentarios al margen, con diseños de chat y de cuaderno disponibles cuando encajan mejor en la tarea que una página.
- **Publique y observe el razonamiento, no solo el resultado.** Un enlace de acceso inscribe a los estudiantes, el progreso se guarda a medida que avanzan, y el docente puede leer la transcripción de cada estudiante y exportarla como CSV o Markdown.
- **Redacte un borrador con IA y luego refínelo.** La configuración puede partir de unas pocas preguntas, de una tarea existente subida o de una anterior, con un asistente del lado del docente que completa un primer borrador.

Los ejemplos publicados sugieren el alcance previsto: una tarea de física sobre evidencia y testimonio, un ejercicio de biología que diagnostica el error de razonamiento en la explicación de un pasante de IA, y una tarea de psicología que comprueba si una noticia describe el diseño de un estudio.

## Para quién es

Docentes de educación superior que quieren que el [[learning-design|diseño del aprendizaje]] sostenga la política de IA — es decir, que prefieren restringir cómo puede usarse un modelo dentro de una tarea a vigilar si se usó. Las puertas y los ajustes de rol son una expresión en tiempo de diseño de las [[guardrails|salvaguardas]], y la aplicación está orientada al trabajo de curso y no al despliegue institucional de chat.

## Notas y advertencias

- **Fase piloto.** Los términos indican que el servicio se ofrece actualmente sin cargo para pilotos y que pueden introducirse planes de pago con previo aviso, y que las funciones pueden cambiar o retirarse. No hay página pública de precios; solo se accede a los precios después de iniciar sesión.
- **La afirmación de privacidad es arquitectónica y conviene leerla con atención.** Cada estudiante recibe un identificador de sesión aleatorio por tarea, la correspondencia entre la cuenta del estudiante y la sesión permanece en el servidor de Repertoire, y el modelo recibe la sesión anónima, el contexto de la tarea y el texto del estudiante. La advertencia está en la propia política: el texto que un estudiante escribe y que lo identifica se envía como cualquier otro texto, y el docente del curso puede leer las transcripciones.
- **Inferencia de terceros.** Las respuestas se generan a través de la API Claude de Anthropic con la API de OpenAI como respaldo, bajo términos comerciales que, según la política, excluyen el entrenamiento con entradas y salidas de la API desde septiembre de 2026. Una institución debería confirmarlo a través de su propio acuerdo y no mediante una página web.
- **No es un calificador.** La política y los términos describen ambos los juicios del asistente, como «objetivo alcanzado», como ayudas para el docente; las calificaciones y las decisiones académicas quedan en manos del docente y de la institución, y las decisiones sobre la [[ai-use-disclosure|divulgación del uso de IA]] a los estudiantes se dejan al docente.
- **Alojado en EE. UU.** Los datos residen en Google Cloud Firestore con alojamiento de Vercel, y la política aborda las obligaciones FERPA cuando el servicio maneja registros educativos; a los usuarios fuera de Estados Unidos se les informa de que sus datos se procesan allí.
