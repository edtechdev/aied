---
title: "Bibliotecas públicas de IA"
created: "2026-11-05T02:58:35-05:00"
type: resource
summary: "Un piloto nacional de 2025–2026 que instala una estación de trabajo compartida de IA pública en bibliotecas públicas de Estados Unidos —chat, generación de imágenes, música y vídeo, un IDE de código y una guía educativa— con una cuenta privada para cada usuario."
url: https://libraries.publicai.co/
source_code: https://github.com/forpublicai/libraries-kiosk
author: "Public AI"
author_url: https://libraries.publicai.co/
resource_type: [software, collection of tools]
access: [freemium]
license: "GPL-3.0 (kiosk site); MIT (inference utility)"
last_verified: "2026-11-05"
foundations: [ai-literacy]
technology: [llm, generative-ai]
ethics: [digital-divide, equity-in-ai-education]
level: [adult learning]
audience: [librarians, administrators, learners]
confidence: high
translation_of: resources/public-ai-libraries
source_updated: "2026-11-05T07:06:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-05"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

**Bibliotecas públicas de IA** es un piloto nacional de 2025–2026 que instala una estación de trabajo de IA compartida, llamada kiosco, en [[libraries|bibliotecas públicas]] de Estados Unidos. Es una asociación de la Library of Congress, Metagov y Public Knowledge, a la que se sumaron las bibliotecas estatales de Utah y Nueva Jersey; ocho bibliotecas de cinco estados tenían un kiosco en funcionamiento cuando se leyó por última vez la página del programa. La premisa es el aprovisionamiento y no la formación: la [[digital-divide|biblioteca suministra el acceso]] que los usuarios individuales no pueden comprar, en un lugar atendido por personal donde alguien puede ayudar.

## Qué puede hacer con ella

Cada kiosco es una estación de trabajo alojada en la nube que se ejecuta en un ordenador que la biblioteca ya posee. Ofrece un asistente de chat para investigación, aprendizaje y preguntas generales; generación de imágenes, música y vídeo; un IDE en línea para programación y pequeños proyectos de aplicaciones; y un área educativa con una guía de aprendizaje interactiva y material validado por la biblioteca. Cada usuario recibe una cuenta separada, de modo que el trabajo y el historial son privados incluso en una máquina compartida: el programa afirma que no almacena las conversaciones ni el contenido generado por los usuarios en su propia plataforma.

## Para quién es

Para bibliotecas públicas que quieren alojar un kiosco (el programa acepta solicitudes de sedes piloto), y para el personal que apoya a los usuarios que lo utilizan. Los casos de uso publicados son solicitudes de empleo, planes de negocio, trabajos de curso y proyectos creativos. El código también merece leerse para cualquiera que construya servicios de IA de interés público: el sitio del programa y el front-end del kiosco están bajo GPL-3.0 en [libraries-kiosk](https://github.com/forpublicai/libraries-kiosk), y el servicio de chat es la utilidad de inferencia [[open-source|de código abierto]] Public AI Inference Utility (MIT) en [chat.publicai.co](https://github.com/forpublicai/chat.publicai.co), un despliegue de Open WebUI que cualquiera puede usar con una cuenta gratuita.

## Notas y salvedades

- Las bibliotecas participantes aportan **\$1.000 por despliegue de kiosco al año**; el piloto en sí se limita a las sedes que se presentaron.
- La declaración de privacidad es una afirmación del programa, no un hallazgo auditado; una biblioteca debería confirmar los términos de retención y de seguridad infantil en su propio acuerdo de tratamiento de datos.
- La segunda y la tercera fase de la hoja de ruta, que permiten a las bibliotecas ingerir archivos locales y gobernar los sistemas resultantes, están planificadas y no desplegadas.

## Conceptos conectados

- [[libraries]]
- [[digital-divide]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[open-source]]
- [[lifelong-learning]]
- [[llm]]
