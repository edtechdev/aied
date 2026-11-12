---
title: "¿Qué opciones y problemas hay que considerar al adoptar herramientas de IA?"
created: "2026-11-12T20:15:00-05:00"
updated: "2026-11-12T20:15:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
source_updated: "2026-11-12T17:10:00-05:00"
translation_of: faqs/adopting-ai-options-and-issues
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

Una persona que dirige un departamento tiene tres presupuestos para una plataforma de [[intelligent-tutoring|tutoría con IA]] y una fecha límite el viernes. Un [[teacher-role|docente]] quiere usar una herramienta gratuita que ya utiliza la mitad del claustro. A una persona responsable de sistemas de información se le pregunta si la institución debería ejecutar su propio modelo y no sabe decir cuánto costaría.

Son la misma pregunta a tres alturas. Las opciones son menos de las que sugiere una lista de proveedores, y los problemas duran más que cualquier producto.

La elección debe corresponder a la decisión que tiene delante. Una persona decide qué introduce en una herramienta. Una institución decide quién puede usar qué modelo, con qué datos, a qué costo y quién responde cuando algo sale mal. La mayoría de las malas decisiones de adopción consisten en responder a la pregunta institucional con una herramienta individual.

## La versión breve

Cinco reglas cubren la mayor parte. Fije primero el límite de los datos, porque todo lo demás se puede renegociar y eso no. Elija la forma más pequeña que encaje: herramientas gratuitas o externalizadas para un piloto, una plataforma alojada cuando se necesita control de los datos sin GPU, una pasarela cuando se necesitan cuotas y enrutamiento, y una inferencia propia solo cuando las otras tres fallan. Compare los precios por puesto y por consumo con sus propias cifras, ya que la mayor parte del uso suele venir de unos pocos usuarios intensivos. Haga que la vía autorizada sea más rápida que la no aprobada, ya que EDUCAUSE encontró que el 94% del personal y el profesorado usa IA para su trabajo, el 54% conoce la política y el 56% usa herramientas que la institución no proporciona. Luego decida de antemano qué evidencia le haría detenerse, porque una adopción sin prueba de salida se vuelve permanente por defecto.

## En el nivel individual

Quien enseña o quien estudia toma una decisión sobre datos antes que una decisión sobre enseñanza. Los nombres del estudiantado, los detalles de los planes de educación individualizados, las notas disciplinarias y la investigación no publicada crean la responsabilidad, así que anonimice primero y compruebe si la herramienta sigue sirviendo. Después lea los términos: la retención, el entrenamiento con sus aportaciones y los subencargados suelen estar en un documento que nadie abre, y si la respuesta no aparece en cinco minutos, trátela como desconocida.

Sepa qué hace bien la herramienta. El texto generado es más fuerte al redactar, reestructurar y resumir, y más débil en aritmética, citas y cualquier cosa que requiera hechos actuales. Sepa también cuánto le cuesta. Un plan gratuito es gratuito porque el uso es el producto o porque el plan cambiará, y cualquiera de las dos razones basta para tener presente una salida.

Quedan dos preguntas. Quién más se ve afectado, ya que una herramienta que reconfigura un curso es una decisión para el estudiantado que lo cursa. Y si está permitida: lea la política una vez si existe, y si no existe, la evidencia sobre la [[shadow-ai|IA en la sombra]] sugiere que ya está creando política por defecto.

La heurística directa: use la herramienta autorizada cuando esté a su alcance y, cuando no lo esté, anote lo que hizo y por qué. Ese registro es lo que le protege si más tarde se cuestiona su criterio.

## En el nivel institucional

Una institución compra un servicio, un flujo de datos, una obligación de soporte y un compromiso político en una sola adquisición. El menú real lo forman seis formas, y la mayoría de las instituciones está en dos o tres sin saberlo.

El comienzo más fácil es una herramienta externalizada gratuita. AI Tutor Pro, de Contact North, no necesita cuenta, y Playlab permite a los educadores crear aplicaciones basadas en su propio [[curriculum-design|currículo]] mientras el proveedor aloja los modelos. Ambas sirven para un piloto y son malas como solución definitiva: sin rastro de auditoría, sin control de cuotas y con términos que pueden cambiar.

Comprar puestos en un inquilino comercial, ya sea [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot o Google Gemini for Education, aporta una adquisición rápida, SSO y una consola de administración, y deja la elección del modelo y la retención en manos del proveedor.

Una plataforma que usted aloja mantiene los datos más cerca. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) se despliega en su propia cuenta de AWS, y el piloto de Vanderbilt informó de unos \$3 por usuario al mes con 1,300 usuarios, la mitad de ellos por debajo de \$1 en tokens. Eso compra control de los datos sin GPU.

Una pasarela sobre proveedores mixtos pone una sola puerta de entrada delante de varios. Aporta cuotas, SSO, registro y enrutamiento regional; Fontys gestionó una para 300 usuarios con un límite mensual de \$500 que nunca se superó, y [MindRouter](/aied/resources/mindrouter/) añade planificación ponderada por rol y medición de energía.

La inferencia propia es la forma más cara y la más independiente. Los dos servicios de Purdue superaron los 1000 usuarios con 10+ modelos [[open-source]] por unos \$100,000 en hardware, antes de contar el personal. Responde a un regulador sin pedir permiso a un proveedor.

La última forma es la IA dentro de herramientas que ya utiliza: un tipo de pregunta de Moodle, el socio de IA de una plataforma de discusión, una herramienta de retroalimentación de ensayos. Poco esfuerzo y cambio curso a curso, con poco aprendizaje en el centro.

## Los problemas que no desaparecen

[[privacy|La protección de datos]] va primero. Lo que importa es qué registro existe ahora que antes no existía, dónde vive y quién puede recuperarlo. Una herramienta que recibe una lista de clase ha creado un registro institucional, diga lo que diga el contrato.

La identidad y el acceso vienen después. Todo lo que se usa a escala necesita SSO, acceso basado en roles y baja de usuarios, y una herramienta que no puede desaprovisionar a una persona que se marcha deja una cuenta activa con sus datos dentro.

Los costos dependen de cómo se cuenta el precio. El precio por puesto premia el número de personas y el precio por consumo premia el uso. Como una pequeña parte de los usuarios suele generar la mayoría de los tokens, el precio por puesto parece barato hasta que los usuarios intensivos se van a otra parte.

La medición suele ser la pieza que falta. EDUCAUSE encontró que el 92% tiene una estrategia de IA relacionada con el trabajo y el 13% mide el retorno de la inversión. Si no puede decir qué sustituyó la herramienta, no puede defender la renovación.

[[equity-in-ai-education|La equidad]] y la accesibilidad pertenecen a la contratación, no a una corrección posterior. Una herramienta que exige una conexión rápida, un plan de pago o dominio del inglés reparte su beneficio de forma desigual.

[[academic-integrity|La integridad académica]] cambia lo que mide la evaluación. Cuando una herramienta puede completar la tarea, lo que hay que revisar es la tarea.

El personal y la dependencia del proveedor importan tanto como el precio. Todas las formas anteriores excepto la gratuita necesitan a alguien responsable, y el fallo habitual es comprar la cuarta o la quinta forma y asignarla a quien ya estaba ocupado. Pregunte qué ocurre en la renovación, en un cambio de precio y en la retirada de un modelo; las formas de pasarela existen para que la respuesta sea un cambio de enrutamiento y no una migración.

## Cómo se ve un buen primer año

Elija dos o tres medidas antes de que se lance nada: quién lo usó, para qué, cuánto costó por usuario activo y qué cambió en el trabajo. Un piloto que no puede producir esas cifras es una demostración con presupuesto.

Compruebe las condiciones de contorno al mismo tiempo. Si la herramienta tocó expedientes del estudiantado, ¿coincidió el flujo de datos con lo que declaró a la oficina de privacidad? Si el uso quedó sin medir, ¿fue porque la herramienta no podía informar o porque nadie preguntó?

Mantenga corta la vía autorizada. Las cifras de EDUCAUSE sugieren que las personas sortean la gobernanza porque la ruta aprobada tarda más que la tarea. Una pasarela con una ficha de modelo y acceso el mismo día es un instrumento de gobernanza tanto como una comodidad de TI.

## Errores comunes

Comprar una plataforma antes de nombrar el problema produce estadísticas de uso y poco más. Tratar lo gratuito como estrategia funciona en un piloto y fracasa como infraestructura. Un modelo local cambia a quién se puede citar judicialmente; no decide si se conservan las instrucciones. Medir la satisfacción en lugar del efecto convierte «al profesorado le gustó» en un hallazgo que no es. Y una política publicada sin una vía practicable describe preferencias, no reglas.
