---
connected_resources: [drawsplat]
title: Privacidad
created: "2026-09-28T19:11:03-04:00"
updated: "2026-11-07T13:00:00-05:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13, institutional-ai-policy]
type: concept
technology: [learning-analytics, personalized-learning]
ethics: [equity-in-ai-education, ethics]
level: [k 12]
confidence: high
institutions: [educational-policy-ai, governance, regulation]
translation_of: concepts/privacy
source_updated: "2026-11-05T21:30:00-05:00"
translation_note: "Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-07"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
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

> **Privacidad**: la protección de los datos, la identidad y la [[agency|autonomía]] del estudiantado en entornos de aprendizaje aumentados por IA. Las preocupaciones por la privacidad se intensifican a medida que los sistemas de IA recopilan datos conductuales cada vez más granulares para la [[personalized-learning|personalización]], la [[learning-analytics|analítica]] y la [[adaptive-learning|instrucción adaptativa]]. Es una restricción ética y regulatoria central de la [[ai-education|IA en la educación]]: casi todas las herramientas de IA que personalizan, predicen o evalúan dependen de datos de aprendices, lo que convierte la minimización de datos, el consentimiento, la transparencia y la seguridad en requisitos de diseño fundacionales y no en algo que se añade después.

## Preguntas para considerar

- ¿Con qué datos suyos se sentiría incómodo si se recopilaran, aunque mejoraran su aprendizaje? ¿Dónde deja la personalización de ser personalización para convertirse en vigilancia?
- Muchos estudiantes no tienen 'ninguna opción significativa' más que usar una plataforma obligatoria, lo que hace que el consentimiento sea nominal. ¿Ha dado alguna vez su consentimiento a algo sin entender realmente qué se recopilaba y por qué? ¿Qué exigiría en realidad un consentimiento informado?
- Los mismos datos de aprendices que impulsan el aprendizaje adaptativo y personalizado también crean riesgo de uso indebido y de daño. ¿Puede nombrar un beneficio de la personalización por el que estaría dispuesto a ceder algo de privacidad, y la línea que no cruzaría?
- La página advierte de que las salvaguardas de privacidad pueden 'acabar protegiendo solo a algunos aprendices'. ¿Qué estudiantes podrían estar más expuestos y cómo se conecta la privacidad con la equidad y la [[bias-mitigation|justicia]]?
- La vigilancia constante de la IA, incluso con buenas intenciones, puede moldear el comportamiento y la [[anxiety-and-stress|ansiedad]]. ¿Cuándo ha cambiado su comportamiento el sentirse observado, y qué sugiere eso sobre la sensorización con IA en el aula?
- Para la infancia, la privacidad va más allá de la protección de datos y entra en la seguridad. ¿Por qué podrían fallar las herramientas de seguridad de uso general a la hora de detectar riesgos relacionados con la educación de menores, y quién debería participar en el circuito?

## Introducción

La privacidad es la condición previa para una IA fiable en la educación. Dado que los sistemas de IA mejoran con datos (la [[personalized-learning|personalización]] requiere perfiles detallados de aprendices, la [[learning-analytics|analítica del aprendizaje]] requiere registros granulares de interacción y los [[llm-training-and-fine-tuning|modelos de tutoría ajustados fino]] requieren transcripciones auténticas entre aprendiz y tutor), los mismos datos que hacen posible una educación adaptativa y escalable también crean riesgo de vigilancia, uso indebido y daño. La base de conocimiento trata la privacidad como inseparable de la [[ethics|ética]] (el marco normativo), la [[regulation|regulación]] (los requisitos legales), la [[governance|gobernanza]] (la responsabilidad institucional) y la [[equity-in-ai-education|equidad]] (quién queda protegido y quién expuesto). Sus artículos sobre privacidad se agrupan en torno a cuatro problemas recurrentes: la recopilación a escala, el consentimiento y la transparencia, la seguridad y el anonimato, y las protecciones distintas que se deben a la infancia.

## Los retos centrales de la privacidad

- **La desidentificación depende de una calidad de detección medible.** [[ji-de-identification-personally-identifiable-information-2025|Ji et al. (2025)]] evalúan cinco configuraciones de detección de información personal identificable (PII) sobre texto estudiantil. GPT-4o-mini ajustado finamente alcanzó una exhaustividad de 0,9589 por 0,92 dólares por millón de tokens, alrededor de una sexta parte de los 4,90 dólares por millón de tokens de Azure AI Language. Un verificador de dos etapas elevó la precisión a 0,8893 donde los falsos positivos corromperían la utilidad del corpus, y el modo de fallo de baja precisión es semánticamente disruptivo: sustituye «Newton» por «David» en un pasaje de matemáticas o marca a Jesús, María y José en un relato cuya pista es Nazaret.
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
- **La conciencia de las prácticas de datos no se sigue de verlas.** [[bergdahl-student-epistemic-agency-ai-2026|Bergdahl (2026)]] encontró que el **66% de 47 estudiantes de 7.º año** elegía la opción menos protectora en [[conversational-ai|chatbots]] que leían su escritura, y que el **47%** descartaba la influencia algorítmica como "solo diversión", medido **un mes después** de una lección en la que la clase vio su propio comportamiento registrado proyectado en directo, reaccionó diciendo que era "inquietante" y varios se quedaron durante el recreo para seguir usando la plataforma. La enseñanza sobre privacidad que hace visible el mecanismo sin hacer concreto el coste deja la postura intacta. El autor señala que las puntuaciones bajas aquí pueden ser **más fiables que las altas**, ya que para estos ítems no existe una respuesta socialmente esperada, mientras que la responsabilidad y la gobernanza invitan a la respuesta que suena correcta.

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
