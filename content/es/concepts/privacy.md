---
connected_resources: [drawsplat]
title: Privacidad
created: "2026-09-28T19:11:03-04:00"
updated: "2026-10-28T13:36:06-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13, institutional-ai-policy]
type: concept
technology: [learning-analytics, personalized-learning]
ethics: [equity-in-ai-education, ethics]
level: [k 12]
confidence: high
institutions: [educational-policy-ai, governance, regulation]
translation_of: concepts/privacy
source_updated: "2026-10-28T09:45:00-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Privacidad**: la protección de los datos, la identidad y la [[agency|autonomía]] del estudiantado en entornos de aprendizaje aumentados por IA. Las preocupaciones por la privacidad se intensifican a medida que los sistemas de IA recopilan datos conductuales cada vez más granulares para la [[personalized-learning|personalización]], la [[learning-analytics|analítica]] y la [[student-modeling|instrucción adaptativa]]. Es una restricción ética y regulatoria central de la [[ai-education|IA en la educación]]: casi todas las herramientas de IA que personalizan, predicen o evalúan dependen de datos de aprendices, lo que convierte la minimización de datos, el consentimiento, la transparencia y la seguridad en requisitos de diseño fundacionales y no en algo que se añade después.

## Preguntas para considerar

- ¿Con qué datos suyos se sentiría incómodo si se recopilaran, aunque mejoraran su aprendizaje? ¿Dónde deja la personalización de ser personalización para convertirse en vigilancia?
- Muchos estudiantes no tienen 'ninguna opción significativa' más que usar una plataforma obligatoria, lo que hace que el consentimiento sea nominal. ¿Ha dado alguna vez su consentimiento a algo sin entender realmente qué se recopilaba y por qué? ¿Qué exigiría en realidad un consentimiento informado?
- Los mismos datos de aprendices que impulsan el aprendizaje adaptativo y personalizado también crean riesgo de uso indebido y de daño. ¿Puede nombrar un beneficio de la personalización por el que estaría dispuesto a ceder algo de privacidad, y la línea que no cruzaría?
- La página advierte de que las salvaguardas de privacidad pueden 'acabar protegiendo solo a algunos aprendices'. ¿Qué estudiantes podrían estar más expuestos y cómo se conecta la privacidad con la equidad y la [[bias-mitigation|justicia]]?
- La vigilancia constante de la IA, incluso con buenas intenciones, puede moldear el comportamiento y la ansiedad. ¿Cuándo ha cambiado su comportamiento el sentirse observado, y qué sugiere eso sobre la sensorización con IA en el aula?
- Para la infancia, la privacidad va más allá de la protección de datos y entra en la seguridad. ¿Por qué podrían fallar las herramientas de seguridad de uso general a la hora de detectar riesgos relacionados con la educación de menores, y quién debería participar en el circuito?

## Introducción

La privacidad es la condición previa para una IA fiable en la educación. Dado que los sistemas de IA mejoran con datos (la [[personalized-learning|personalización]] requiere perfiles detallados de aprendices, la [[learning-analytics|analítica del aprendizaje]] requiere registros granulares de interacción y los [[llm-training-and-fine-tuning|modelos de tutoría ajustados fino]] requieren transcripciones auténticas entre aprendiz y tutor), los mismos datos que hacen posible una educación adaptativa y escalable también crean riesgo de vigilancia, uso indebido y daño. La base de conocimiento trata la privacidad como inseparable de la [[ethics|ética]] (el marco normativo), la [[regulation|regulación]] (los requisitos legales), la [[governance|gobernanza]] (la responsabilidad institucional) y la [[equity-in-ai-education|equidad]] (quién queda protegido y quién expuesto). Sus artículos sobre privacidad se agrupan en torno a cuatro problemas recurrentes: la recopilación a escala, el consentimiento y la transparencia, la seguridad y el anonimato, y las protecciones distintas que se deben a la infancia.

## Los retos centrales de la privacidad

- **Recopilación de datos a escala.** La [[learning-analytics|analítica del aprendizaje]] y las [[edtech-platform|plataformas educativas]] recopilan datos de clics, de escritura, de pulsaciones y de interacción. La pregunta central que examina la [[research-methods-aied|investigación]] sobre privacidad es si esta recopilación es proporcionada al beneficio educativo, y la [[learning-analytics-to-educational-interventions-2026|investigación sobre analítica fiable]] trata la privacidad y la gobernanza de datos como un requisito previo y no como un añadido: el cumplimiento ético, la seguridad de los datos y los algoritmos transparentes son lo que hace que el cambio educativo basado en datos tenga sentido en absoluto.
- **Consentimiento y transparencia.** Los estudiantes y las [[parents-and-families|familias]] rara vez entienden qué datos recopila una herramienta de IA, cómo se usan o dónde se almacenan. Este desequilibrio de poder entre las instituciones y [[learners|quienes aprenden]] es un tema recurrente: los estudiantes pueden no tener ninguna opción significativa más que usar una plataforma obligatoria, lo que hace que el "consentimiento" sea nominal y no informado. La base de conocimiento vincula esto con la [[trust-calibration|confianza]] y la [[ai-use-disclosure|revelación del uso de IA]]: tanto el uso que hacen los aprendices de la IA como el uso que hacen las instituciones de los datos de los aprendices dependen de la transparencia sobre qué se recopila y por qué.
- **La delegación como mecanismo de privacidad, no solo como revelación.** [[agentic-literacy-debt|Nama (2026)]] sostiene que los agentes autónomos heredan permisos entre sesiones y rara vez los revocan, de modo que cada delegación opaca habitúa a las personas a conceder acceso sin escrutinio, lo que convierte el consentimiento informado sobre *cuándo actúa un agente y no una persona* en parte del diseño de la privacidad.
- **La autonomía amplía la superficie de datos.** Un sistema agéntico de cumplimentación de formularios mantiene una base de conocimiento personal multimodal a través de servicios institucionales, evaluada sobre 1.301 campos únicos extraídos de los sitios de reclutamiento de 44 empresas, y sus autores señalan la gestión del conocimiento con preservación de la privacidad, el control de acceso y la confirmación humana como requisitos de despliegue no resueltos ([[large-language-models-teaching-learning-higher-ed|Li et al. (2026)]]).
- **Seguridad, anonimato y procedencia de los datos.** Incluso los datos legítimos pueden causar daño si se filtran o se manejan mal. Las técnicas de preservación de la privacidad aparecen por toda la base de conocimiento: [[teachlm-post-training-llms-education|TeachLM]] demuestra un proceso riguroso de consentimiento por sesión, eliminación de datos personales en servidores internos y confidencialidad de nivel empresarial para ajustar modelos de tutoría con datos auténticos, lo que muestra que los datos de aprendices obtenidos éticamente son posibles y son un requisito previo para una tutoría de alta calidad. [[ai-lms-middle-school-longitudinal|Las arquitecturas federadas y de IA en el borde]] mantienen los datos en local y reducen la recopilación central. La inferencia residente en el navegador lleva esto más lejos: un tutor WebLLM se ejecuta como un sitio estático con los pesos en caché en IndexedDB, de modo que el código, los prompts y las transcripciones de los estudiantes nunca salen del dispositivo y no se necesitan claves de API ni facturación por llamada, aunque el coste en [[equity-in-ai-education|equidad]] es una nueva brecha de capacidades de hardware, ya que una generación rápida y fluida depende de una GPU del lado del cliente con capacidad suficiente ([[browser-sized-agents-slm-webllm-tutor-2026|Suvernev et al. (2026)]]). Las herramientas de [[ai-detection|detección]] añaden un caso paralelo de manejo de datos: [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] advierten de que los proveedores de detectores almacenan el trabajo de los estudiantes en servidores de terceros, a veces en el extranjero y bajo estándares de privacidad más débiles, junto con el riesgo de filtraciones y la posible explotación comercial de la escritura estudiantil.
- **Vigilancia y la tensión entre vigilancia y privacidad.** La monitorización constante por IA, incluso cuando está bien intencionada, puede resultar invasiva. La investigación sobre la [[ai-fatigue-academic-contexts|fatiga por IA]], la [[remote-proctoring|supervisión remota de exámenes]] y la [[cognitive-offloading|dependencia excesiva]] conecta la privacidad con el [[well-being|bienestar]] del estudiantado: cuando la IA observa y rastrea de forma continua, moldea el comportamiento y la ansiedad, y no solo los flujos de datos. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana et al. (2026)]] catalogaron lo que los sistemas de [[remote-proctoring|supervisión]] capturan realmente (imágenes faciales, documentos de identidad, escaneos de la sala incluidos barridos de 360 grados, audio del micrófono, reconocimiento facial, grabaciones de pantalla, eventos de bloqueo del equipo y seguimiento de pulsaciones y del ratón, con la vigilancia móvil añadiendo GPS y comprobaciones por selfi) y encontraron que la privacidad y la rendición de cuentas algorítmica estaban en gran medida ausentes de los seis estudios que cumplieron sus criterios de inclusión, y que se suplían con trabajo adyacente: el 83% de los encuestados en una encuesta citada expresó temores de vigilancia, el 58% incomodidad y el 72% preocupaciones por la privacidad de los datos, mientras que los contratos transfronterizos con proveedores dejaban instrumentos como el RGPD y la POPIA de Sudáfrica con un control limitado. La exposición legal que se deriva de conservar y tratar esos datos (quién es el responsable, cuánto tiempo se conservan, quién puede acceder a ellos y si el consentimiento fue realmente voluntario) se traza en [[legal-issues-and-risks]].
- **La decodificación de EEG expone la atención.** La decodificación neuronal extiende el problema de la privacidad más allá de los registros conductuales: [[seeing-cognitive-representations-eeg-reconstruction|Su et al. (2026)]] reconstruyeron lo que los aprendices estaban viendo a partir de su EEG durante la instrucción en vídeo, lo que hace que las representaciones decodificadas sean inusualmente reveladoras y deja sin resolver la gobernanza de los neurodatos sensibles.
- **El equilibrio entre personalización y privacidad.** El [[personalized-learning|aprendizaje personalizado]] requiere datos detallados de los aprendices para funcionar, lo que crea una tensión estructural con la privacidad. La base de conocimiento explora enfoques que equilibran la personalización con la minimización de datos: datos suficientes para adaptarse, pero no tantos como para que el aprendiz quede completamente expuesto. Esta es la forma práctica de la pregunta "¿cuánto es proporcionado?".
- **La custodia de datos como valor ético central.** [[agarwal-ethical-values-norms-aied-2026|Agarwal et al. (2026)]], una [[meta-analysis-systematic-review|revisión sistemática]] de 25 artículos, identifica la custodia de datos (las definiciones que usan datos o información) como uno de los seis valores éticos principales para la [[ai-education|IA en la educación]], junto con la no discriminación, la supervisión humana, la buena voluntad, la explicabilidad y la idoneidad educativa. La revisión encuentra que los valores están estrechamente acoplados y pueden entrar en conflicto (por ejemplo, explicabilidad frente a exactitud y privacidad, y no discriminación frente a custodia de datos), lo que produce dilemas éticos, y que ninguna norma sobre custodia de datos se dirige directamente a las personas usuarias finales, lo que deja a los aprendices en gran medida pasivos en la literatura ética.
- **La privacidad se aplaza en lugar de decidirse.** Doce entrevistas con profesionales del sector edtech y una auditoría de las políticas de privacidad de 48 plataformas muestran que la privacidad se reconoce como importante y luego se pospone a lo largo del ciclo de vida del producto, con la responsabilidad delegada en proveedores de nube, documentos de política y escuelas situadas más abajo, un patrón que la débil retroalimentación sobre privacidad mantiene invisible, ya que el silencio parece prueba de seguridad ([[edtech-privacy-deferral-2026|Nair y Greenstadt, 2026]]).
- **La base de evidencia sobre supervisión es escasa en ética.** Una revisión de 80 estudios encontró que el 35% no revelaba su conjunto de datos, el 40% evaluaba un único modelo, el 30% no podía reproducirse y solo el 25% abordaba cuestiones éticas; los falsos positivos, es decir, señalar como sospechoso un comportamiento normal, siguen siendo un riesgo de fiabilidad central ([[automated-online-exam-proctoring-decade-review-2026|Malhotra y Chhabra (2026)]]).
- **Las interfaces de chat filtran la conversación misma.** Al auditar 42 plataformas de chat con IA, [[bekos-contextual-leakage-ai-chat-platforms-2026|Bekos et al. (2026)]] encontraron 21 que enviaban los títulos de las conversaciones a rastreadores de terceros, y las siete plataformas educativas promediaban unas 367 solicitudes de rastreadores cada una, con cinco filtrando contexto.

## Seguridad infantil y protecciones en K-12

Los entornos de [[k-12|educación K-12]] exigen salvaguardas de privacidad más estrictas porque quienes aprenden son menores. Esto extiende la privacidad más allá de la protección de datos y la adentra en la [[pedagogical-safety|seguridad pedagógica]]: las herramientas que usan los niños no solo deben proteger sus datos, sino también protegerlos de daños. La [[child-safety-genai|investigación sobre seguridad infantil]] muestra que los clasificadores de seguridad de uso general a menudo no detectan prompts inseguros relacionados con la educación procedentes de niños, y advierte de que las escuelas no pueden dar por hecho que las salvaguardas estándar de los modelos protegen a los usuarios más jóvenes: necesitan evaluación específica para la infancia, pruebas basadas en incidentes y [[human-in-the-loop-ai|supervisión humana]]. Este planteamiento conecta la privacidad con la [[equity-in-ai-education|equidad]]: a quién protegen por defecto las prácticas de seguridad y privacidad refleja a quién considera un sistema que su seguridad y su autonomía no son negociables.

## La privacidad en la práctica

- **Trate la privacidad como un requisito de diseño, no como un añadido de política.** El ejemplo de [[teachlm-post-training-llms-education|TeachLM]] muestra que el consentimiento, el anonimato y el manejo seguro de los datos pueden integrarse en la propia canalización de datos: un modelo para obtener éticamente los datos auténticos que hacen eficaces a los [[intelligent-tutoring|tutores de IA]].
- **Diseñe para la minimización de datos.** Prefiera los enfoques que recopilan solo lo que la adaptación requiere (IA en el borde o federada, procesamiento en el dispositivo) en lugar de acumular datos de interacción por defecto. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] demuestran una forma federada concreta de esto para el [[cognitive-diagnosis|diagnóstico cognitivo]]: varias API comerciales de [[llm]] colaboran en el diagnóstico mientras añaden localmente ruido de privacidad diferencial local ε a la predicción de cada modelo antes de la agregación, de modo que ningún proveedor ve datos brutos de estudiantes, una arquitectura que preserva la privacidad y mantiene funcional la [[intelligent-tutoring|tutoría con IA]] sin centralizar trayectorias sensibles de los aprendices. El aprendizaje federado también permite una **analítica interinstitucional sin compartir datos**: [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]] entrenan un modelo multitarea de riesgo académico entre instituciones mediante agregación federada, de modo que los datos brutos de los aprendices permanecen en local y solo se comparten los parámetros del modelo, una alternativa colaborativa y respetuosa con la privacidad a la [[learning-analytics|analítica del aprendizaje]] centralizada que mantiene la soberanía de los datos y a la vez capta patrones interinstitucionales.
- **Obtenga un consentimiento explícito e informado.** Cuando los datos de los aprendices financian el desarrollo o la mejora de la IA, las instituciones deberían ser transparentes sobre la recopilación, el almacenamiento y el uso, y los estudiantes deberían tener opciones reales y no plataformas obligatorias.
- **Audite a quién se protege.** Las salvaguardas de privacidad no deberían acabar protegiendo solo a algunos aprendices; la [[equity-in-ai-education|equidad]] exige que el mismo cuidado se aplique a través de la edad, la lengua, la discapacidad y las líneas socioeconómicas.

## Conexiones

La privacidad se conecta con la [[learning-analytics|analítica del aprendizaje]] (quien recopila los datos), el [[personalized-learning|aprendizaje personalizado]] (quien los consume), la [[k-12|educación K-12]] (protecciones reforzadas), la [[ethics|ética]] (el marco normativo), la [[regulation|regulación]] (los requisitos legales), la [[governance|gobernanza]] (la responsabilidad institucional), la [[equity-in-ai-education|equidad]] (quién queda protegido), la [[pedagogical-safety|seguridad pedagógica]] (la protección de la infancia) y la [[educational-policy-ai|política educativa]] (las respuestas políticas). Es una de las restricciones fundacionales que debe satisfacer cualquier despliegue responsable de IA en educación, la razón por la que la IA fiable, en el planteamiento de la base de conocimiento, empieza por datos fiables.

## Concepciones erróneas comunes

- **"La supervisión captura una porción de datos limitada y bien comprendida."** Un catálogo de lo que los sistemas de [[remote-proctoring|supervisión]] capturan realmente enumera **imágenes faciales, documentos de identidad, escaneos de la sala incluidos barridos de 360 grados, audio del micrófono y reconocimiento facial**, entre otros. El alcance es más amplio de lo que describen la mayoría de los procesos de consentimiento.
- **"La literatura sobre supervisión establece la ética de la supervisión."** Una revisión de **80 estudios** encontró que el **35% no revelaba su conjunto de datos, el 40% evaluaba un único modelo, el 30% no podía reproducirse y solo el 25%** cumplía el estándar de notificación. La base de evidencia es escasa justo en las preguntas que una institución necesita responder antes de desplegar.
- **"La privacidad es una casilla de cumplimiento y no una restricción de diseño."** Casi todas las herramientas de IA que personalizan, predicen o evalúan dependen de datos de aprendices, lo que convierte la minimización de datos en una decisión de diseño. Una herramienta que necesita los datos no tiene un ajuste de privacidad opcional; tiene una dependencia de datos que el diseño eligió.
- **La conciencia de las prácticas de datos no se sigue de verlas.** [[bergdahl-student-epistemic-agency-ai-2026|Bergdahl (2026)]] encontró que el **66% de 47 estudiantes de 7.º año** elegía la opción menos protectora en chatbots que leían su escritura, y que el **47%** descartaba la influencia algorítmica como "solo diversión", medido **un mes después** de una lección en la que la clase vio su propio comportamiento registrado proyectado en directo, reaccionó diciendo que era "inquietante" y varios se quedaron durante el recreo para seguir usando la plataforma. La enseñanza sobre privacidad que hace visible el mecanismo sin hacer concreto el coste deja la postura intacta. El autor señala que las puntuaciones bajas aquí pueden ser **más fiables que las altas**, ya que para estos ítems no existe una respuesta socialmente esperada, mientras que la responsabilidad y la gobernanza invitan a la respuesta que suena correcta.

## Conceptos conectados

- [[remote-proctoring]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[k-12]]
- [[ethics]]
- [[regulation]]
- [[equity-in-ai-education]]
- [[governance]]
- [[educational-policy-ai]]
- [[pedagogical-safety]]
- [[legal-issues-and-risks]]
- [[student-experience]]
- [[student-support-and-success]] — expedientes estudiantiles, intercambio de datos entre oficinas y modelado federado de riesgos

## Artículos conectados
- [[bekos-contextual-leakage-ai-chat-platforms-2026]] — Un penique por tus prompts: filtración de contexto en las plataformas de chat con IA (Bekos et al. 2026)
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Analítica del aprendizaje federada y explicable para modelar el riesgo académico preservando la privacidad (Villegas-Ch et al. 2026)
- [[learning-analytics-to-educational-interventions-2026]] — De la analítica del aprendizaje a las intervenciones educativas: condiciones que hacen fiables las intervenciones basadas en analítica (Svetec, Divjak y Kadoić 2026)
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[agentic-literacy-debt]] — Deuda de alfabetización agéntica: la brecha estructural de alfabetización en IA que crean los agentes autónomos (Nama 2026)
- [[ai-fatigue-academic-contexts]]
- [[ai-lms-middle-school-longitudinal]]
- [[child-safety-genai]]
- [[eduzone-llm-safety-k12]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[teachlm-post-training-llms-education]] — TeachLM: anonimato y consentimiento para datos de aprendizaje auténticos
- [[bassett-ai-detectors-education-2026]] — Cara gano yo, cruz pierdes tú: los detectores de IA en la educación (Bassett et al. 2026)
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Diagnóstico cognitivo federado con LLM que preserva la privacidad
- [[agarwal-ethical-values-norms-aied-2026]] — Valores y normas éticas para la IA en la educación
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Qué capturan los sistemas de supervisión y la ausencia de la literatura sobre privacidad en la base de evidencia
- [[edtech-privacy-deferral-2026]] — "Ya lo arreglaremos después": educación, IA y el aplazamiento de la privacidad estudiantil en el sector edtech
