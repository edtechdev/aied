---
title: "conText"
created: "2026-11-12T20:15:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Un tutor gratuito de navegador que lee la foto de un cuaderno, un PDF o un texto y después acompaña al estudiante con preguntas socráticas en inglés o español mientras dibuja un grafo en vivo de las ideas que conecta al hablar."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
source_updated: "2026-11-12T18:05:00-05:00"
translation_of: resources/context-aideatext
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

conText es la demostración pequeña más limpia de una dirección de la que la [[intelligent-tutoring|tutoría con IA]] habla mucho y rara vez implementa: el modelo no responde a la pregunta del estudiante, plantea la siguiente, y las ideas del estudiante se dibujan como un grafo mientras habla. Suba la foto de una página de cuaderno, un PDF o un texto, y la herramienta primero dice lo que entendió y luego inicia un diálogo [[socratic-method|socrático]] hablado. Cada idea que el estudiante nombra aparece como un nodo en un [[knowledge-graph|grafo de conocimiento]] en vivo; las aristas aparecen a medida que la conversación las conecta, y el panel informa cuántas ideas quedan sin conectar.

## Qué puede hacer con ella

El bucle es deliberadamente corto. Entra material (hasta 10 MB, ocho páginas de PDF o 15,000 caracteres de texto), el tutor lo devuelve leído y la conversación es por voz: el sitio dice que el tutor no califica ni escribe por el estudiante. El grafo es el artefacto que hace que la sesión valga algo después: muestra qué ideas puso realmente el estudiante en relación y cuáles quedaron sueltas, algo mucho más específico que revisar que una transcripción de chat. La sesión se puede exportar como archivo XML del grafo y volver a subir otro día para continuar, y el botón de borrar la elimina de inmediato; si no, el servidor la descarta tras una hora.

Esa combinación —un tutor que retiene la respuesta y un registro visual del razonamiento— está de lleno en lo que intentan lograr el [[scaffolding|andamiaje]] y la reflexión [[metacognition|metacognitiva]], y da al docente algo concreto sobre lo que preguntar en lugar de un ensayo terminado o un número correcto. El planteamiento del propio sitio es que un resultado correcto ya no demuestra comprensión cuando la IA generativa puede producirlo, así que el proceso tiene que ser visible.

## Para quién es

Estudiantado que trabaja una lectura o una hoja de problemas y prefiere que le pregunten en lugar de recibir la respuesta, docentes que quieren una comprobación de bajo riesgo sobre si un estudiante conecta ideas, y formadores del profesorado que buscan un ejemplo concreto de evidencia del proceso. El profesorado dispone de una guía alineada con el currículo en inglés, español, portugués y francés; la herramienta funciona en inglés y español, y el vídeo de recorrido está en español.

## Notas y advertencias

No se publica precio ni cuenta para la herramienta dirigida al estudiantado, mientras que el despliegue institucional —nube, local o híbrido— se ofrece mediante una propuesta a medida y una reunión; trate «gratis» como el estado de la demostración pública en noviembre de 2026, no como una garantía. El texto y las imágenes van a un servicio alojado impulsado por Claude, y el propio sitio indica a quien lo usa que elimine nombres, importes, direcciones y nombres de empresas antes de subir nada, lo que traslada la carga de la desidentificación a quien sube el material y no a la plataforma. Las sesiones se autodestruyen tras una hora salvo que se exporten. La empresa detrás también comercializa una plataforma más amplia de evaluación mediante grafos de razonamiento para instituciones, y sus afirmaciones sobre distinguir grafos deductivos, inductivos, abductivos y analógicos provienen de cuatro textos de referencia: el sitio lo llama demostración, con la validación a escala aún pendiente.

## Conceptos conectados

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
