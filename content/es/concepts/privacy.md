---
connected_resources: [drawsplat]
title: Privacidad
created: "2026-09-28T19:11:03-04:00"
updated: "2026-10-02T21:24:48-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13, institutional-ai-policy]
type: concept
technology: [learning-analytics, personalized-learning]
ethics: [equity-in-ai-education, ethics]
level: [k 12]
confidence: high
institutions: [educational-policy-ai, governance, regulation]
translation_of: concepts/privacy
source_updated: "2026-10-01T20:35:10-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Privacidad** — la protección de los datos, la identidad y la [[agency|autonomía]] del estudiantado en entornos de aprendizaje aumentados con IA. Las preocupaciones por la privacidad se intensifican a medida que los sistemas de IA recopilan datos conductuales cada vez más granulares para la [[personalized-learning|personalización]], la [[learning-analytics|analítica]] y la [[student-modeling|instrucción adaptativa]]. Es una restricción ética y regulatoria central de la [[ai-education|IA en la educación]]: casi toda herramienta de IA que personaliza, predice o evalúa depende de datos de quien aprende, lo que convierte la minimización de datos, el consentimiento, la transparencia y la seguridad en requisitos de diseño fundamentales y no en consideraciones posteriores.

## Preguntas para reflexionar

- ¿Qué datos del estudiantado le resultaría incómodo que se recopilaran sobre usted, aunque mejoraran su aprendizaje? ¿Dónde se convierte la personalización en vigilancia?
- Mucho estudiantado no tiene «ninguna opción significativa» más que usar una plataforma obligatoria, lo que convierte el consentimiento en algo nominal. ¿Ha consentido alguna vez algo sin entender de verdad qué se recopilaba y por qué? ¿Qué exigiría en realidad un consentimiento informado?
- Los mismos datos de quien aprende que impulsan el aprendizaje adaptativo y personalizado también crean riesgo de mal uso y de daño. ¿Puede nombrar un beneficio de la personalización por el que estaría dispuesto a ceder algo de privacidad, y la línea que no cruzaría?
- La página advierte de que las salvaguardas de privacidad pueden «limitarse por defecto a proteger solo a parte del estudiantado». ¿Qué estudiantes podrían quedar más expuestos y cómo se conecta la privacidad con la equidad y la [[bias-mitigation|justicia]]?
- La monitorización constante con IA, incluso con buenas intenciones, puede moldear la conducta y la ansiedad. ¿Cuándo ha cambiado su comportamiento el sentirse observado y qué sugiere eso sobre la sensorización con IA en el aula?
- En el caso de la infancia, la privacidad va más allá de la protección de datos y llega a la seguridad. ¿Por qué podrían las herramientas de seguridad de propósito general no detectar riesgos educativos de menores y quién debería participar en el circuito de supervisión?

## Introducción

La privacidad es la condición previa para una IA digna de confianza en la educación. Como los sistemas de IA mejoran con datos —la [[personalized-learning|personalización]] exige perfiles detallados de quien aprende, la [[learning-analytics|analítica del aprendizaje]] exige registros granulares de interacción y los [[llm-training-and-fine-tuning|modelos de tutoría ajustados]] exigen transcripciones auténticas de las interacciones entre estudiantado y tutor—, los mismos datos que hacen posible una educación adaptativa y escalable también crean riesgo de vigilancia, mal uso y daño. La base de conocimiento trata la privacidad como algo inseparable de la [[ethics|ética]] (el marco normativo), la [[regulation|regulación]] (los requisitos legales), la [[governance|gobernanza]] (la responsabilidad institucional) y la [[equity-in-ai-education|equidad]] (quién queda protegido y quién expuesto). Sus artículos sobre privacidad se agrupan en torno a cuatro problemas recurrentes: la recopilación a escala, el consentimiento y la transparencia, la seguridad y el anonimato, y las protecciones específicas que se deben a la infancia.

## Los retos centrales de la privacidad

- **Recopilación de datos a escala.** La [[learning-analytics|analítica del aprendizaje]] y las [[edtech-platform|plataformas educativas]] recopilan datos de clics, escritura, pulsaciones e interacción. La pregunta central que examina la [[research-methods-aied|investigación]] sobre privacidad es si esa recopilación es proporcionada al beneficio educativo, y la [[learning-analytics-to-educational-interventions-2026|investigación sobre analítica del aprendizaje digna de confianza]] trata la privacidad y la gobernanza de datos como un requisito previo y no como un añadido: el cumplimiento ético, la seguridad de los datos y los algoritmos transparentes son lo que hace que el cambio educativo basado en datos tenga sentido en absoluto.
- **Consentimiento y transparencia.** El estudiantado y las [[parents-and-families|familias]] rara vez entienden qué datos recopila una herramienta de IA, cómo se usan o dónde se almacenan. Este desequilibrio de poder entre las instituciones y quienes [[learners|aprenden]] es un tema recurrente: el estudiantado puede no tener una opción significativa más que usar una plataforma obligatoria, lo que hace que el «consentimiento» sea nominal y no informado. La base de conocimiento conecta esto con la [[trust-calibration|calibración de la confianza]] y la [[ai-use-disclosure|declaración de uso de IA]]: tanto el uso que hace el estudiantado de la IA como el uso que hacen las instituciones de sus datos dependen de la transparencia sobre qué se recopila y por qué.
- **La delegación como mecanismo de privacidad, no solo como declaración.** [[agentic-literacy-debt|Nama (2026)]] sostiene que los agentes autónomos heredan permisos entre sesiones y rara vez los revocan, de modo que cada delegación opaca habitúa a las personas usuarias a conceder acceso sin escrutinio, lo que convierte el consentimiento informado sobre *cuándo actúa un agente en lugar de una persona* en parte del diseño de la privacidad.
- **Seguridad, anonimización y procedencia de los datos.** Incluso los datos legítimos pueden causar daño si se filtran o se gestionan mal. En la base de conocimiento aparecen técnicas de preservación de la privacidad: [[teachlm-post-training-llms-education|TeachLM]] demuestra una canalización rigurosa de consentimiento por sesión, eliminación de datos personales en servidores internos y confidencialidad de nivel empresarial para modelos de tutoría entrenados con datos auténticos, lo que muestra que los datos del estudiantado obtenidos éticamente son posibles y además un requisito previo para una tutoría de alta calidad. Las [[ai-lms-middle-school-longitudinal|arquitecturas federadas y de IA en el borde]] mantienen los datos en local y reducen la recopilación central. Las herramientas de [[ai-detection|detección]] añaden un caso paralelo de tratamiento de datos: [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]] señalan que los proveedores de detectores almacenan los trabajos del estudiantado en servidores de terceros, a veces en el extranjero y bajo estándares de privacidad más débiles, además del riesgo de filtraciones y de explotación comercial de la escritura del estudiantado.
- **La vigilancia y la tensión entre vigilancia y privacidad.** La monitorización constante con IA, incluso cuando está bien intencionada, puede resultar invasiva. La investigación sobre la [[ai-fatigue-academic-contexts|fatiga por IA]], la [[remote-proctoring|supervisión remota de exámenes]] y la [[cognitive-offloading|dependencia excesiva]] conecta la privacidad con el [[well-being|bienestar]] del estudiantado: cuando la IA observa y rastrea de forma continua, moldea la conducta y la ansiedad, y no solo los flujos de datos. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana et al. (2026)]] catalogaron lo que los sistemas de [[remote-proctoring|supervisión remota]] capturan realmente —imágenes faciales, documentos de identidad, escaneos de la habitación incluidos barridos de 360 grados, audio del micrófono, reconocimiento facial, grabaciones de pantalla, eventos de bloqueo y seguimiento de pulsaciones y del ratón, con la vigilancia móvil añadiendo GPS y comprobaciones con selfis— y encontraron que la privacidad y la rendición de cuentas algorítmica estaban en gran medida ausentes de los seis estudios que cumplieron sus criterios de inclusión, y que se suplían desde trabajos adyacentes: el 83% de las personas encuestadas en una encuesta citada expresó temores de vigilancia, el 58% incomodidad y el 72% preocupaciones de privacidad de datos, mientras que los contratos transfronterizos con proveedores dejaban a instrumentos como el RGPD y la POPIA sudafricana con un control limitado. La exposición legal que se deriva de conservar y tratar esos datos —quién es el responsable, cuánto tiempo se conservan, quién puede acceder a ellos y si el consentimiento fue realmente voluntario— se traza en [[legal-issues-and-risks|cuestiones y riesgos legales]].
- **La disyuntiva entre personalización y privacidad.** El [[personalized-learning|aprendizaje personalizado]] necesita datos detallados de quien aprende para funcionar, lo que crea una tensión estructural con la privacidad. La base de conocimiento explora enfoques que equilibran la personalización con la minimización de datos: suficientes datos para adaptar, no tantos como para dejar a quien aprende totalmente expuesto. Esta es la forma práctica de la pregunta «¿cuánto es proporcionado?».
- **La custodia de los datos como valor ético central.** [[agarwal-ethical-values-norms-aied-2026|Agarwal et al. (2026)]], una [[meta-analysis-systematic-review|revisión sistemática]] de 25 artículos, identifican la custodia de los datos (definiciones que usan datos o información) como uno de los seis valores éticos principales para la [[ai-education|IA en la educación]], junto con la no discriminación, la supervisión humana, la buena voluntad, la explicabilidad y la idoneidad educativa. La revisión encuentra que los valores están estrechamente acoplados y pueden entrar en conflicto —por ejemplo, la explicabilidad frente a la precisión o la privacidad, y la no discriminación frente a la custodia de datos—, lo que genera dilemas éticos, y que ninguna norma sobre custodia de datos se dirige directamente a las personas usuarias finales, lo que deja a quien aprende en un papel en gran medida pasivo en la literatura ética.
- **La privacidad se aplaza en lugar de decidirse.** Doce entrevistas con profesionales de la tecnología educativa y una auditoría de 48 políticas de privacidad de plataformas muestran que la privacidad se reconoce como importante y luego se pospone a lo largo del ciclo de vida del producto, con la responsabilidad delegada en proveedores de nube, documentos de política y centros educativos situados más abajo: un patrón que una retroalimentación débil sobre privacidad mantiene invisible, porque el silencio parece una prueba de seguridad ([[edtech-privacy-deferral-2026|Nair y Greenstadt, 2026]]).

- **La base de evidencia sobre la supervisión de exámenes es escasa en ética.** Una revisión de 80 estudios encontró que el 35% no divulgaba su conjunto de datos, el 40% evaluaba un único modelo, el 30% no podía reproducirse y solo el 25% abordaba cuestiones éticas; los falsos positivos —señalar conductas normales— siguen siendo un riesgo de fiabilidad central ([[automated-online-exam-proctoring-decade-review-2026|Malhotra y Chhabra (2026)]]).

## Seguridad infantil y protecciones en K-12

Los entornos de [[k-12|K-12]] exigen salvaguardas de privacidad más estrictas porque quien aprende es menor de edad. Esto extiende la privacidad más allá de la protección de datos y la lleva a la [[pedagogical-safety|seguridad pedagógica]]: las herramientas que usan los niños y las niñas no solo deben proteger sus datos, sino también protegerlos de daños. La [[child-safety-genai|investigación sobre seguridad infantil]] muestra que los clasificadores de seguridad de propósito general a menudo no detectan las peticiones inseguras de menores relacionadas con la educación, y advierte de que los centros educativos no pueden dar por supuesto que las salvaguardas estándar de los modelos protegen a las personas usuarias más jóvenes: necesitan evaluación específica para la infancia, pruebas basadas en incidentes y [[human-in-the-loop-ai|supervisión humana]]. El encuadre conecta la privacidad con la [[equity-in-ai-education|equidad]]: quién queda protegido por las prácticas de seguridad y privacidad por defecto refleja la seguridad y la autonomía de quién trata un sistema como no negociables.

## La privacidad en la práctica

- **Trate la privacidad como un requisito de diseño y no como una consideración posterior de política.** El ejemplo de [[teachlm-post-training-llms-education|TeachLM]] muestra que el consentimiento, la anonimización y el tratamiento seguro de los datos pueden integrarse en la propia canalización de datos: un modelo para obtener éticamente los datos auténticos que hacen eficaces a los [[intelligent-tutoring|tutores de IA]].
- **Diseñe para la minimización de datos.** Prefiera enfoques que recopilen solo lo que la adaptación requiere (IA en el borde o federada, procesamiento en el dispositivo) en lugar de acumular datos de interacción por defecto. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] demuestran una forma federada concreta de esto para el [[cognitive-diagnosis|diagnóstico cognitivo]]: varias API comerciales de [[llm|LLM]] colaboran en el diagnóstico y añaden localmente ruido de privacidad diferencial ε-local a la predicción de cada modelo antes de la agregación, de modo que ningún proveedor ve datos brutos del estudiantado, una arquitectura que preserva la privacidad y mantiene funcional la [[intelligent-tutoring|tutoría con IA]] sin centralizar trayectorias sensibles de quien aprende. El aprendizaje federado también permite **analítica interinstitucional sin compartir datos**: [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch et al. (2026)]] entrenan un modelo multitarea de riesgo académico entre instituciones mediante agregación federada, de modo que los datos brutos de quien aprende permanecen en local y solo se comparten los parámetros del modelo, una alternativa colaborativa y preservadora de la privacidad a la [[learning-analytics|analítica del aprendizaje]] centralizada que mantiene la soberanía de los datos a la vez que captura patrones interinstitucionales.
- **Obtenga un consentimiento explícito e informado.** Cuando los datos de quien aprende financian el desarrollo o la mejora de la IA, las instituciones deben ser transparentes sobre la recopilación, el almacenamiento y el uso, y el estudiantado debe tener opciones reales, no plataformas obligatorias.
- **Audite a quién se protege.** Las salvaguardas de privacidad no deberían limitarse por defecto a proteger solo a parte del estudiantado; la [[equity-in-ai-education|equidad]] exige que el mismo cuidado se aplique en todas las líneas de edad, lengua, discapacidad y nivel socioeconómico.

## Conexiones

La privacidad se conecta con la [[learning-analytics|analítica del aprendizaje]] (la recopiladora de datos), el [[personalized-learning|aprendizaje personalizado]] (el consumidor de datos), [[k-12|K-12]] (protecciones reforzadas), la [[ethics|ética]] (el marco normativo), la [[regulation|regulación]] (los requisitos legales), la [[governance|gobernanza]] (la responsabilidad institucional), la [[equity-in-ai-education|equidad]] (quién queda protegido), la [[pedagogical-safety|seguridad pedagógica]] (la protección de la infancia) y la [[educational-policy-ai|política educativa sobre IA]] (las respuestas de política). Es una de las restricciones fundamentales que debe satisfacer cualquier despliegue responsable de IA en educación: la razón por la que la IA digna de confianza, en el encuadre de la base de conocimiento, empieza por datos dignos de confianza.

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
- [[student-support-and-success]] — Expedientes del estudiantado, intercambio de datos entre oficinas y modelado federado de riesgos

## Artículos conectados
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Analítica del aprendizaje federada y explicable para un modelado del riesgo académico que preserva la privacidad (Villegas-Ch et al. 2026)
- [[learning-analytics-to-educational-interventions-2026]] — De la analítica del aprendizaje a las intervenciones educativas: facilitadores de intervenciones basadas en analítica del aprendizaje digna de confianza (Svetec, Divjak y Kadoić 2026)
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[agentic-literacy-debt]] — Deuda de alfabetización agéntica: la brecha estructural de alfabetización en IA que crean los agentes autónomos (Nama 2026)
- [[ai-fatigue-academic-contexts]]
- [[ai-lms-middle-school-longitudinal]]
- [[child-safety-genai]]
- [[eduzone-llm-safety-k12]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[teachlm-post-training-llms-education]] — TeachLM: anonimización y consentimiento para datos de aprendizaje auténticos
- [[bassett-ai-detectors-education-2026]] — Cara gano yo, cruz pierdes tú: los detectores de IA en la educación (Bassett et al. 2026)
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Diagnóstico cognitivo federado con LLM que preserva la privacidad
- [[agarwal-ethical-values-norms-aied-2026]] — Valores y normas éticas para la IA en la educación
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Lo que capturan los sistemas de supervisión remota y la ausencia de la literatura sobre privacidad en la base de evidencia
- [[edtech-privacy-deferral-2026]] — «Ya lo arreglaremos más adelante»: educación, IA y el aplazamiento de la privacidad del estudiantado en la tecnología educativa
