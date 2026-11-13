---
title: Infraestructura institucional de IA
created: "2026-11-12T22:30:00-05:00"
updated: "2026-11-12T22:30:00-05:00"
type: concept
connected_resources: [mindrouter, amplify-genai]
technology: [llm, generative-ai, open-source, edtech-platform]
ethics: [privacy]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed, k 12]
discipline: [information technology]
confidence: high
contributors: [editor]
translation_of: concepts/institutional-ai-infrastructure
source_updated: "2026-11-12T14:50:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Infraestructura institucional de IA** — la capa de cómputo, servicio, enrutamiento y control que una institución opera para que los modelos puedan usarse en la docencia, la investigación y la administración bajo sus propias reglas. Abarca las GPU y los clústeres que alojan los pesos, los servidores de inferencia que responden a las peticiones, la [[llm|pasarela]] que las mide y enruta, las fichas de modelo y los registros de auditoría que hacen inspeccionable el arreglo, las canalizaciones de datos que conectan los registros del estudiantado con los modelos, y el personal que mantiene todo funcionando. No es el mismo objeto que una [[edtech-platform|plataforma educativa]] (el contenedor que ve quien aprende) ni que la [[governance|gobernanza]] (la política que restringe a ambas).

## Preguntas para reflexionar

- ¿Dónde se ejecuta realmente el modelo en su institución, y alguien puede nombrar a la persona que respondería a eso sin consultarlo?
- ¿En cuál de las seis formas de adopción que siguen está ya, y en cuál creía estar?
- Si el noventa por ciento del uso viniera del diez por ciento de los usuarios, ¿le serviría mejor al presupuesto una licencia por puesto o una pasarela medida, y sabe qué forma tiene su uso?
- Un documento de política dice que las peticiones no deben salir de la jurisdicción. ¿Qué hay en su pila tecnológica que lo imponga, en lugar de pedir a la gente que lo recuerde?
- ¿Quién responde cuando una recomendación de articulación de cursos es errónea, y su infraestructura registra lo suficiente para responder a eso más adelante?
- Para una escuela primaria, ¿qué cambia cuando el modelo es pequeño y se ejecuta en el edificio en lugar de ser de escala frontera y remoto?

## Introducción

Las instituciones pasaron los primeros años de la [[generative-ai|IA generativa]] comprando acceso: una licencia de [[conversational-ai|chatbot]] aquí, un asistente de escritura allá, cada uno con sus propios términos y su propia ruta de datos. El resultado es una cartera que nadie puede describir en una frase, y un conjunto de preguntas —adónde fue ese prompt, quién aprobó este modelo, cuánto gastamos— que ninguna oficina puede responder por sí sola.

Tratar la IA como infraestructura es la respuesta. Significa una capa de servicio compartida, una pasarela que aplica las reglas de la institución a cada petición y telemetría suficiente para ver coste, carga y fallo. La afirmación de la literatura no es que esto sea más barato. Es que convierte a la institución en la parte que decide, lo cual es un tipo de afirmación distinto y más difícil de contrastar.

Los artículos aquí reunidos también amplían lo que cuenta como infraestructura. Dos se ocupan de la inferencia para el chat y la docencia, uno de la oficina de registro y uno de los registros de evaluación. Una vez que la articulación de cursos, el [[learning-analytics|análisis de la carga de trabajo]] y la acumulación de evidencia dependen de embeddings y llamadas a modelos, la trastienda forma parte de la pila tanto como el bastidor de GPU. Ese es el argumento que esta página sostiene ahora: la infraestructura está allí donde una institución ha delegado silenciosamente una decisión en un modelo.

## Qué está eligiendo en realidad

El campo describe seis formas, no dos. Difieren en quién posee los datos, quién puede cambiar el modelo y quién absorbe el fallo.

**Herramientas externalizadas gratuitas.** El personal o el estudiantado usan el servicio de un proveedor sin coste. [[intelligent-tutoring|AI Tutor]] Pro, de Contact North en Canadá, es el caso más claro: gratuito, anónimo, sin cuenta obligatoria, con modos para el debate, la [[self-assessment|autocomprobación]] y la construcción de guías de estudio. Playlab se sitúa en la misma franja, permitiendo a los educadores construir aplicaciones basadas en su propio [[curriculum-design|currículo]] mientras el proveedor aloja los modelos. El coste no es cero, sino diferido: sin pista de auditoría institucional, sin control de cuotas y con términos que pueden cambiar sin aviso. Es un lugar defendible para pilotar y un mal lugar para instalarse.

**Puestos en una instancia educativa comercial.** Un distrito o una universidad compra ChatGPT Edu, Microsoft 365 Copilot, Google Gemini for Education o un espacio comparable. La contratación es rápida, el SSO y una consola de administración vienen incluidos, y el proveedor posee la elección de modelo y la retención. La institución gana integración de identidad y pierde la capacidad de sortear a un proveedor.

**Una plataforma alojada en la institución.** [Amplify GenAI](/aied/resources/amplify-genai/) se despliega en la propia cuenta de AWS de la institución, de modo que los documentos y las conversaciones permanecen en infraestructura que la institución controla mientras el proveedor suministra la aplicación. El piloto de Vanderbilt informó de unos \$3 por usuario al mes con 1.300 usuarios, la mitad de ellos por debajo de \$1 en gasto de tokens. Esta forma compra control de datos sin comprar GPU.

**Una pasarela sobre proveedores mixtos.** Una única puerta de entrada delante de backends locales y comerciales, con cuotas, SSO, registro y enrutamiento regional adjuntos. Fontys la construyó en tres capas; [MindRouter](/aied/resources/mindrouter/) y SPIN implementan variantes. Es la forma que convierte un documento de política en una restricción aplicada, y la que necesita un ingeniero de plataforma y no un responsable de compras.

**Inferencia propia.** GPU, planificadores, servidores de modelos y las personas que los ejecutan. MindRouter en la Universidad de Idaho es el caso de referencia; SPIN en Georgia Tech es la misma apuesta hecha dentro de un centro de HPC. Es la única forma en la que la institución puede responder a una citación judicial, a un regulador o a un cambio de precio de un proveedor sin pedir permiso.

**IA dentro de herramientas que ya ejecuta.** Un tipo de pregunta de Moodle, el socio de IA de una plataforma de debate, una herramienta de retroalimentación de ensayos. El esfuerzo organizativo es pequeño y el cambio llega curso a curso, que es también su límite: nada en el centro aprende de ello.

Estas formas se anidan. Una pasarela puede situarse delante de una plataforma alojada; una plataforma alojada puede llamar a un modelo local; una herramienta gratuita puede ser el piloto que no justifica nada de lo anterior. La pregunta útil no es qué forma es mejor, sino qué decisión toma cada forma silenciosamente por usted.

## La capa de pasarela

Tres implementaciones describen ahora el mismo movimiento arquitectónico con una consistencia inusual.

[[huijts-suilen-institutional-ai-sovereignty-gateway-2025|Huijts y Suilen]], en Fontys ICT, separan un frontend al estilo de ChatGPT vinculado a la identidad institucional, un núcleo de enrutamiento que aplica presupuestos y restricciones regionales, y una capa de proveedores de modelos locales y comerciales. Seis meses y 300 usuarios después, un tope mensual de \$500 nunca se había superado, y cada sesión se abría con una ficha de modelo que nombraba capacidades, región de alojamiento, coste y alternativas.

[[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] lleva la misma idea a la planificación. Las peticiones se ponderan por rol —[[administrator|administración]] 10, profesorado 5, personal 2, estudiantado 1— mediante Weighted Deficit Round Robin, y la selección del backend añade puntuaciones blandas por latencia, carga y preferencia del administrador. La pasarela guarda el registro de auditoría y mide energía además de tokens.

[[rahaman-soa-on-prem-ai-gateway-2026|SPIN en Georgia Tech]] hace explícita la separación en la frontera de la API: LiteLLM y PostgreSQL en una máquina virtual solo de CPU, vLLM y Triton en nodos de GPU dentro de Slurm, con el host, el puerto y la clave del backend resueltos desde la base de datos en el momento de la petición. Sustituir un modelo se convierte en una actualización de la base de datos invisible para los clientes.

Las diferencias son instructivas. Fontys gobierna una cartera de múltiples proveedores, MindRouter gobierna capacidad compartida escasa y SPIN gobierna la inferencia en un planificador por lotes diseñado para terminar trabajos. Las tres convergen en una afirmación: la superficie de la API es el contrato, y el modelo que hay detrás es reemplazable.

## El servicio es una política, no un benchmark

[[rodenbeck-purdue-on-prem-genai-inference-2025|Los dos servicios de Purdue]] superaron los 1000 usuarios con más de 10 modelos de [[open-source|código abierto]] por unos \$100.000 en hardware, con alrededor del 40% activo mensualmente. La decisión que importa es que el equipo mantuvo Ollama en lugar de vLLM pese a la ventaja de rendimiento de 4-5x de vLLM, porque apoyar muchos modelos importaba más que la velocidad bruta para una comunidad que quiere probar cosas.

La prueba de carga de SPIN da la otra mitad del cuadro. Frente a un motor simulado a 1000 peticiones concurrentes por segundo, una máquina virtual de pasarela de 8 vCPU alcanzó el 76% de la tasa agregada ideal, mientras que el metal desnudo con 8 trabajadores alcanzó el 98%. La capa de proxy es barata hasta que deja de serlo, y el umbral es medible en lugar de misterioso.

Ninguno de los dos resultados se generaliza en una regla. Establecen que el rendimiento, la amplitud de modelos y la simplicidad operativa se compensan entre sí, y que la compensación debe hacerse deliberadamente en lugar de heredarse de los valores por defecto de un proveedor.

## El borde cambia el argumento

[[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar e Iqbal]] describen una alternativa a escala escolar: un escritorio o mini PC reacondicionado con una GPU de gama básica, que aloja un modelo de entre 1B y 13B parámetros, a un coste indicativo de varios cientos a varios miles de dólares australianos por servidor. Su caso económico es una escuela de 400 estudiantes que no puede absorber los costes acumulativos de las API en la nube a través de las aulas. Su honestidad es la admisión de que no existe una comparación integral del coste del ciclo de vida, así que el ahorro es una hipótesis y no un hallazgo.

A escala de curso, [[on-premises-rag-tutoring-business-education-2026|CourseChat]] muestra la misma lógica bajo una restricción distinta: un modelo de producción de 8B mantenido frente a candidatos mayores que no superaron un umbral de latencia para el aula. [[guadalupe-academic-chatbot-local-llm-2026|Guadalupe, Topón e Iza]] cumplieron un objetivo de mediana de 5 segundos con 3,57 s pero lo incumplieron en p95 con 6,47 s, y atribuyeron aproximadamente el 96% del tiempo de extremo a extremo a la generación.

Ejecutar en local cambia la pregunta sobre la privacidad de contractual a física, y no la responde. Un despliegue local con registro completo de prompts sigue siendo un sistema de retención; lo que cambia es a quién se puede obligar a entregarlo.

## La trastienda también es infraestructura

[[pardos-borchers-institutional-workflows-oecd-2026|Pardos y Borchers]] sostienen que el lugar consecuente de la [[ai-education|educación con IA]] no es la ventana de chat, sino la oficina de registro, la de tutoría académica y el comité de currículo. Sus ejemplos son embeddings y no conversaciones: vectores de cursos aprendidos de historiales de matrícula, traducción automática entre los espacios vectoriales de dos instituciones y canalizaciones de etiquetado que asignan recursos abiertos a un estándar.

Las cifras son concretas. La predicción de transferencia basada en embeddings validó 65 articulaciones existentes y ahora se pilota con 59 instituciones y cuatro sistemas de [[higher-ed|educación superior]]. Las horas de crédito explicaron solo el 6% de la varianza en la carga de trabajo percibida, mientras que las características de actividad del LMS explicaron el 36%. El etiquetado colaborativo con IA redujo el tiempo en alrededor del 50% pero redujo la exactitud en un 35%.

El hallazgo sobre la adopción es el que deberían retener quienes planifican infraestructura. En un experimento 2×2, ocultar las recomendaciones atípicas de baja confianza elevó la aceptación y la productividad de la administración, mientras que pedir a las personas usuarias que marcaran las recomendaciones bajó la aceptación a menos que se mostraran los valores atípicos. Un recomendador más preciso puede fracasar por cómo se presenta su salida, lo que convierte el diseño de la interfaz en parte de la infraestructura y no en un acabado.

## La evaluación como problema de fontanería

[[mcnamara-aimcai-continuous-assessment-infrastructure-2026|AIM-CAI]] sostiene que la evidencia necesaria para interpretar el aprendizaje ya existe pero está fragmentada entre sistemas que no pueden leerse entre sí. Su marco tiene seis capas funcionales, tres fronteras inferenciales que limitan lo que una instantánea puede sostener y siete requisitos de gobernanza, incluidos la auditabilidad, la estimación de la incertidumbre y la anulación humana. Es un marco y no un despliegue, y la página lo dice.

[[lata-ferpa-compliant-local-llm-autograder|LaTA]] aporta el caso más estrecho: un modelo de razonamiento local que elimina la cuestión de [[privacy|FERPA]] sobre enviar trabajos de estudiantes a un proveedor en lugar de gestionarla. Juntos sugieren que la infraestructura de evaluación no es una función de una plataforma de aprendizaje, sino un problema separado con su propio modelo de datos y sus propios modos de fallo.

## Coste, latencia y el problema de la visibilidad

El tema recurrente en las implementaciones es que el coste y la latencia solo se vuelven visibles cuando alguien los instrumenta. La cifra de \$100.000 en hardware de Purdue es una cifra de capital con un coste de personal no declarado. El benchmark de la pasarela de SPIN acota la sobrecarga del proxy y no dice nada sobre la latencia de extremo a extremo. La contabilidad energética de [[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] informa de unos 9,4 kW de consumo normal frente a un pico observado de 14,1 kW y un máximo teórico de 22,1 kW, y 872.997.430 tokens en una ventana de 17 días implican entre \$82.843 y \$251.806 de ahorro anual frente a equivalentes comerciales a los precios del artículo.

Las plataformas alojadas a escala de distrito informan del mismo tipo de aritmética: PSD401 AI Studio afirma un coste por token entre un 67 y un 90% menor que las alternativas comerciales. Ninguna de estas cifras es comparable entre instituciones sin el mismo denominador. Lo que es comparable es la práctica de medir siquiera.

## La soberanía tiene una dimensión de equidad

Una pasarela puede enrutar hacia un modelo local que trata mal el idioma de la institución, y el silencio resultante no es neutro. El argumento de la infraestructura y el de la [[digital-divide|brecha digital]] se encuentran aquí: las instituciones con clústeres y personal ganan capacidad, y las que no los tienen absorben lo que el proveedor ofrezca al precio que el proveedor fije. Las versiones gratuitas son genuinamente útiles y genuinamente frágiles, lo que hace que tratarlas como una estrategia permanente sea una decisión sobre qué instituciones reciben servicio.

## Concepciones erróneas

**«Lo local es más barato.»** La cuota de licencia desaparece y aparecen el hardware, la energía, la refrigeración y el personal. El servicio de Purdue costó unos \$100.000 en hardware antes de que nadie cobrara por ejecutarlo, y el personal es la parte que no se reduce.

**«Una pasarela es solo un proxy.»** Un proxy reenvía. Una pasarela decide qué modelo, qué región, qué presupuesto, qué usuario, qué se registra y qué se le dice a la persona usuaria antes de que pulse enviar.

**«Local significa privado.»** La localidad cambia a quién se puede citar judicialmente para obtener los datos, no si se retienen. El registro de auditoría, el almacenamiento de prompts y el acceso de administración son decisiones de diseño, y un despliegue local con registro completo sigue siendo una superficie de vigilancia.

**«Comprar GPU es la estrategia.»** La capacidad sin planificación, cuotas y soporte se convierte en una cola. Los casos exitosos describen gobernanza y operaciones al menos tanto como hardware.

**«El problema de la IA es el chatbot.»** La mayor parte del valor institucional descrito en esta literatura está en la articulación, el análisis de la carga de trabajo, el etiquetado y los registros de evaluación, donde ningún estudiante abre una ventana de chat.

## Conceptos conectados

- [[open-source]]
- [[rag]]
- [[privacy]]
- [[governance]]
- [[edtech-platform]]
- [[llm]]
- [[digital-divide]]
- [[assessment]]
- [[shadow-ai]]

## Artículos conectados

- [[huijts-suilen-institutional-ai-sovereignty-gateway-2025]] — Fontys ICT: una pasarela gobernada con 300 usuarios, fichas de modelo y un tope mensual de \$500
- [[rodenbeck-purdue-on-prem-genai-inference-2025]] — Purdue: dos servicios de inferencia en el campus, más de 1000 usuarios, más de 10 modelos, Ollama frente a vLLM
- [[rahaman-soa-on-prem-ai-gateway-2026]] — SPIN: control y servicio separados en la frontera de la API, con una capa de proxy probada bajo carga
- [[sheneman-mindrouter-institutional-ai-sovereignty-2026]] — MindRouter: planificación de reparto justo, cuotas y contabilidad energética en una pasarela de código abierto
- [[guadalupe-academic-chatbot-local-llm-2026]] — ESPOL: recuperación híbrida con un modelo local, que cumple el objetivo de latencia mediana e incumple el p95
- [[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026]] — un argumento a favor de los SLM a escala escolar desde la educación primaria
- [[pardos-borchers-institutional-workflows-oecd-2026]] — el capítulo de la OCDE sobre articulación, análisis de la carga de trabajo y producción de evaluaciones
- [[mcnamara-aimcai-continuous-assessment-infrastructure-2026]] — AIM-CAI: seis capas para conectar la evidencia del aprendizaje
- [[on-premises-rag-tutoring-business-education-2026]] — CourseChat: un modelo de 8B mantenido frente a candidatos mayores que no superaron un umbral de latencia
- [[lata-ferpa-compliant-local-llm-autograder]] — LaTA: un modelo de razonamiento local que elimina la cuestión de FERPA en lugar de gestionarla
