---
title: Psicología del desarrollo
created: "2026-11-12T22:30:00-05:00"
updated: "2026-11-12T22:30:00-05:00"
type: concept
research_method: [literature review]
confidence: high
methods: [research-methods-aied]
contributors: [editor]
translation_of: concepts/developmental-psychology
source_updated: "2026-11-12T18:55:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Psicología del desarrollo** — el estudio de cómo cambian con la edad las capacidades cognitivas, lingüísticas, sociales, emocionales y motivacionales, y de las restricciones que esos cambios imponen a lo que quien aprende puede hacer y al apoyo que necesita. En la [[ai-education|educación con IA]] aporta la pregunta que subyace a toda afirmación sobre la edad: no «¿funciona esta herramienta?», sino «¿funciona para una mente en esta etapa, haciendo esta cosa concreta?». La base de conocimiento la usa para explicar por qué la misma herramienta de [[generative-ai|IA generativa]] es una ayuda de estudio razonable para una persona de 20 años y un riesgo evolutivo para una de 7, y para señalar dónde descansan esas afirmaciones en hipótesis y no en resultados medidos.

## Preguntas para reflexionar

- Dos personas que aprenden usan el mismo chatbot para la misma tarea. ¿Qué haría comprobar a la psicología del desarrollo antes de llamar apropiada a la interacción: solo la edad, o algo más específico?
- «Adecuado a la edad» se usa constantemente en las orientaciones sobre IA. ¿Qué evidencia haría falta para aceptar esa etiqueta, y en qué suele descansar en su lugar?
- La función ejecutiva, la [[metacognition|metacognición]] y la [[self-regulated-learning|autorregulación]] se desarrollan de forma desigual. Si una herramienta regula por quien aprende, ¿qué capacidad se apoya y cuál se desplaza?
- Casi todos los estudios que aquí se recogen miden a quien aprende una sola vez. ¿Qué puede decir una medición única sobre el desarrollo, y qué no puede decir?
- El juego es un medio de desarrollo, no una pausa del aprendizaje. Cuando un juguete de IA asume la narrativa, ¿qué sigue practicando el niño?
- La adolescencia se presenta a la vez como ventana de riesgo y como oportunidad de diseño. ¿Cuál de las dos respalda la evidencia?

## Introducción

La psicología del desarrollo está debajo de varias páginas de este corpus sin ser ninguna de ellas. La [[cognitive-psychology|psicología cognitiva]] explica los mecanismos —memoria de trabajo, carga, sesgo, recuperación— pero no dice nada sobre cómo cambian esos mecanismos con la edad. [[early-childhood-elementary-ai-education]] es una página de nivel: cubre la educación infantil y primaria como contextos, y su nota de alcance dice explícitamente que sus preocupaciones son específicas del desarrollo sin ofrecer la explicación evolutiva. [[parents-and-families]] cubre el hogar como contexto. Lo que ninguna hace es tratar el desarrollo mismo como marco explicativo: la razón por la que un diseño que sirve a una franja de edad falla en otra, y la razón por la que las afirmaciones sobre efectos a largo plazo en una mente en desarrollo son tan difíciles de sostener.

Ese marco importa más en la educación con IA que en la mayoría de los campos, porque las herramientas de IA suelen evaluarse con adultos y después desplegarse hacia abajo. Un chatbot probado con estudiantes de grado llega a un niño de 12 años mediante una licencia escolar; una aplicación de generación de cuentos diseñada para primeros lectores llega a las aulas; los juguetes de IA entran en el juego antes de que nadie haya preguntado qué le hacen al juego. Las revisiones del corpus llegan una y otra vez a la misma conclusión desde direcciones distintas: la evidencia evolutiva es escasa, los mecanismos son plausibles y las orientaciones se escriben por delante de la investigación.

## Etapas y capacidades como restricciones de diseño

El uso más concreto de la psicología del desarrollo en el corpus es como restricción del diseño, no como etiqueta sobre quien aprende. CLARA, un sistema construido en la Universidad de Auckland, se niega a predecir directamente la edad de un niño. Descompone un cuento en demandas cognitivas, lingüísticas y socioemocionales mediante una taxonomía evolutiva de 122 etiquetas, y después agrega las etiquetas activadas en una estimación de la etapa evolutiva. La decisión de diseño es el argumento: lo que hace adecuado a un texto no es un número, sino las demandas concretas que impone a capacidades concretas.

Los recursos organizados por franjas de edad plantean el mismo punto desde el lado curricular. La Guía de Aplicación del Aprendizaje de IA de Taiwán se construyó en dos ediciones: una para estudiantes de 9 a 12 años con actividades andamiadas, basadas en plataforma y no generativas, y una edición avanzada para 13 a 18 años con aplicaciones auténticas, razonamiento ético y uso supervisado de IA generativa. La estratificación es evolutiva en sustancia, no solo en dificultad: la edición más joven evita las herramientas generativas en lugar de simplificarlas.

El riesgo de todos esos esquemas es que las franjas se conviertan en proxies groseros. Una persona de cinco años y otra de quince difieren en mucho más que la distancia entre dos etiquetas de edad, y una sola franja puede contener niños cuyas capacidades divergen en años.

## La función ejecutiva como constructo operativo

Cuando el corpus se vuelve específico sobre el mecanismo, suele aterrizar en la función ejecutiva: los procesos que planifican, inhiben, cambian y mantienen información el tiempo suficiente para usarla. La pregunta evolutiva es cuál de ellos apoya una herramienta dada, y si el apoyo sobrevive a la herramienta. La separación que hacen Vasileiou y colaboradores entre compensación, andamiaje y desarrollo es la formulación más nítida de la distinción, y la explicación de Klarin sobre la dependencia adolescente nombra el modo de fallo: las capacidades que se desplazan todavía se están formando. El constructo, su medición y la evidencia sobre la dependencia tienen ahora su propia página, [[executive-function]].

## La adolescencia como caso distinto

La adolescencia recibe un tratamiento propio porque las capacidades en cuestión son sociales tanto como cognitivas. La encuesta de Hu y colaboradores con 2.023 adolescentes de Estados Unidos y Hong Kong los ordena por aquello de lo que hablan con los chatbots y no por cuánto: una orientación instrumental hacia la resolución de problemas y la información, una orientación de autorrevelación centrada en los sentimientos y las relaciones, y un tercer grupo que no informa de ninguna de las dos. La lectura evolutiva es que la misma tecnología se encuentra con un periodo en el que las relaciones entre iguales y el trabajo de identidad son las tareas centrales, así que una herramienta que ofrece autorrevelación ilimitada y sin juicio no es una ayuda de estudio neutra.

El artículo teórico de Fu y Zhao lo extiende a un constructo —la «conectividad con la inteligencia artificial»— definido como un vínculo percibido que es psicológicamente real pero éticamente asimétrico, porque la máquina puede simular reciprocidad sin ninguna capacidad de cuidado. No informa de datos, y lo dice; su valor es la advertencia de que una relación sentida no es evidencia de un beneficio evolutivo.

## El juego como medio de desarrollo

La literatura sobre juguetes de IA es donde la psicología del desarrollo hace más trabajo y tiene menos evidencia. La revisión de Xu, Girouard y Shi sostiene que los juguetes habilitados por IA redistribuyen la agencia en el juego: el control sobre la narrativa, el diálogo, la relación y la información pasa del niño solo a la interacción niño-juguete. La redistribución puede restringir el juego cuando el juguete lo organiza, o habilitarlo cuando el juguete responde como recurso para la imaginación y la indagación dirigidas por el niño. Si hace una cosa u otra es una cuestión de diseño y de interacción, y la revisión es explícita en que la evidencia evolutiva todavía no existe.

AI-Play, un marco de juego sin dispositivos para preescolar y jardín de infancia, toma la ruta opuesta: enseña conceptos de IA mediante el juego sin poner un dispositivo delante del niño, con el argumento de que la tarea evolutiva a esa edad es la representación y el juego simbólico, no la interacción con un sistema.

## Dónde la evidencia es escasa

Tres límites se repiten en el corpus.

El primero es el diseño. La mayoría de los estudios son encuestas transversales o experimentos pequeños, medidos una sola vez. Pueden mostrar que los grupos de edad difieren; no pueden mostrar que la IA cambió una trayectoria evolutiva. La revisión de alcance de Niu y colaboradores sobre IA generativa y pensamiento creativo infantil examinó 6.401 registros y retuvo 24 fuentes de evidencia —una base pequeña para una afirmación grande, y la revisión lo informa así—.

El segundo es la atribución. Una ganancia de aprendizaje medida con la herramienta presente puede ser desempeño asistido y no un cambio de capacidad, que es la misma distinción que separa el andamiaje del desarrollo.

El tercero es el tiempo. El desarrollo se despliega a lo largo de años, y las herramientas cambian más rápido que eso. Las orientaciones por edad de Compass Collaborative lo hacen explícito: llaman a sus entradas hipótesis construidas por razonamiento abductivo a partir de la ciencia del desarrollo establecida más la investigación temprana sobre IA, y dicen que la evidencia asentada puede tardar una década.

## El problema de medición detrás de «adecuado a la edad»

Los documentos de política y de contratación usan «adecuado a la edad» como si fuera una propiedad de un producto. En este corpus es una relación entre una herramienta, una capacidad y una tarea. El enfoque taxonómico de CLARA es un intento de hacer operativa esa relación; las franjas de la guía son otro. Ninguno resuelve la pregunta más difícil de quién decide la suficiencia, y las revisiones que examinan recursos organizados por edad evalúan la recepción —831 participantes en el estudio de Wang, Chuang y Wu— y no el resultado evolutivo.

## Concepciones erróneas

- **«Adecuado a la edad significa una única etiqueta de edad.»** CLARA estima una etapa a partir de las demandas que un texto impone a capacidades concretas, y las dos ediciones de la guía difieren en qué herramientas permiten, no solo en el nivel de lectura.
- **«La psicología del desarrollo solo trata de la primera infancia.»** La adolescencia y la edad adulta también son periodos evolutivos; las literaturas sobre dependencia y autorrevelación tratan de adolescentes precisamente porque esas capacidades todavía se están formando.
- **«Si dos grupos de edad difieren, el desarrollo lo explica.»** Las diferencias de edad transversales confunden cohorte, currículo, acceso a dispositivos y contexto. Solo los diseños que siguen a las mismas personas pueden separar el cambio de la diferencia.
- **«Una herramienta que apoya el desempeño está desarrollando la capacidad.»** La compensación, el andamiaje y el desarrollo son funciones distintas; solo de la última cabe esperar que persista una vez retirada la herramienta.
- **«Los juguetes de IA son materiales de juego neutros.»** El argumento de la redistribución de la agencia dice lo contrario: la capacidad de respuesta del juguete determina quién está imaginando.

## Conceptos conectados

- [[cognitive-psychology]]
- [[early-childhood-elementary-ai-education]]
- [[parents-and-families]]
- [[metacognition]]
- [[executive-function]]
- [[self-regulated-learning]]
- [[scaffolding]]
- [[cognitive-offloading]]
- [[well-being]]
- [[creativity]]
- [[ai-literacy]]
- [[longitudinal-research]]
- [[research-methods-aied]]

## Artículos conectados

- [[ai-toys-child-development-2026]] — Los juguetes habilitados por IA redistribuyen la agencia en el juego (Xu, Girouard y Shi)
- [[clara-developmental-appropriateness-children-stories-2026]] — Puntuación de adecuación evolutiva a partir de una taxonomía de 122 etiquetas
- [[niu-genai-children-creative-thinking-cognitive-development-review-2026]] — Revisión de alcance sobre IA generativa y pensamiento creativo infantil
- [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026]] — Compensación, andamiaje y desarrollo como tres funciones de la herramienta
- [[genai-reliance-executive-functioning-2026]] — La dependencia de la IA generativa en la adolescencia como preferencia frente al esfuerzo
- [[horowitz-kraus-children-chatgpt-cognitive-control-2026]] — Niños y adultos conversando con ChatGPT en el escáner
- [[adolescent-chatbot-self-disclosure-help-seeking-2026]] — Qué revelan los adolescentes a los chatbots, no cuánto los usan
- [[ai-connectedness-adolescent-mental-health-2026]] — La conectividad con la IA como vínculo éticamente asimétrico (teoría)
- [[ai-play-framework-early-childhood-2026]] — Alfabetización en IA basada en el juego y sin dispositivos para preescolar y jardín de infancia
- [[age-tiered-ai-literacy-guidebooks-2026]] — Dos ediciones de una guía de alfabetización en IA organizadas por edad
- [[preservice-early-childhood-genai-magnetism-2026]] — Futuros docentes de educación infantil diseñando con IA generativa
- [[pergantis-chatbots-executive-functions-systematic-review-2025]] — Entrenamiento con chatbots para las funciones ejecutivas, diez estudios
- [[sharma-chatgpt-dependency-executive-dysfunction-stress-2026]] — Dependencia, estrés y disfunción ejecutiva en estudiantes universitarios
