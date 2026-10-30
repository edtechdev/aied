---
title: Brecha digital
created: "2026-09-28T21:03:34-04:00"
updated: "2026-10-28T13:28:08-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13]
type: concept
foundations: [ai-education, ai-literacy]
ethics: [accessibility, equity-in-ai-education]
confidence: high
translation_of: concepts/digital-divide
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
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-10-04"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Brecha digital**: la distribución desigual del acceso a las [[ai-technologies|tecnologías]] digitales (y cada vez más a las de IA), de las habilidades para usarlas y de los beneficios que se obtienen de ellas entre individuos, comunidades y naciones. En la educación con IA, la brecha digital es una preocupación central de equidad: la [[generative-ai|IA generativa]] está remodelando rápidamente el aprendizaje, y la distancia entre quienes pueden usarla de forma eficaz y crítica y quienes no puede profundizar las desigualdades educativas existentes.

## Preguntas para reflexionar

- La brecha digital suele describirse en tres niveles: acceso, habilidades y quién se beneficia realmente. ¿En qué nivel cree que piensa la mayoría de la gente cuando habla de "cerrar la brecha digital", y por qué podría ser incompleto?
- Dar a cada estudiante un dispositivo y acceso a internet no significa automáticamente que pueda usar la IA de forma eficaz o crítica. ¿Qué separa tener acceso de poder beneficiarse?
- La IA añade nuevas capas a la desigualdad: el sesgo algorítmico puede perjudicar de forma desproporcionada a [[learners|estudiantes]] marginados, y la propia alfabetización en IA determina si la tecnología amplía o reduce las brechas. ¿En qué se diferencia esto de las brechas de tecnologías anteriores?
- La brecha también se extiende a QUÉ comunidades, lenguas y perspectivas están representadas en los sistemas de IA y son atendidas por ellos. ¿Cómo es la representación misma una forma de acceso, o de exclusión?
- Si cerrar la brecha es "una cuestión de justicia y participación", ¿quién tiene la responsabilidad: las plataformas, las escuelas, los gobiernos o todos ellos, y cómo sería realmente una distribución justa de los beneficios de la IA?

## Introducción

La brecha digital se entiende comúnmente como algo que opera en **tres niveles** (van Deursen y van Dijk, 2014): la brecha de *primer nivel* se refiere al acceso a tecnologías e infraestructura (conectividad, dispositivos, entornos de apoyo); la de *segundo nivel*, a las habilidades y competencias (la capacidad desigual de usar las herramientas de forma eficaz y significativa); y la de *tercer nivel*, a los resultados y beneficios (quién se beneficia realmente del uso de la tecnología, con una IA que puede exacerbar las disparidades sociales, culturales y económicas). [[framing-ai-use-for-students|Enmarcar la alfabetización en IA]] con esta lente deja claro que la equidad exige más que cerrar la brecha de dispositivos e infraestructura: exige construir las habilidades para usar la IA de forma eficaz y crítica, de modo que sus beneficios se distribuyan de manera justa en lugar de reforzar las desigualdades existentes.

El giro hacia la inferencia en el borde añade una dimensión de hardware a la brecha de primer nivel. Cuando la tutoría se ejecuta en el navegador en lugar de en la nube ([[browser-sized-agents-slm-webllm-tutor-2026|tutores SLM residentes en el navegador]] mediante WebLLM), la barrera del costo de suscripción desaparece, pero la sustituye una barrera de capacidad: en un portátil de consumo, el mismo sistema tardaba unos 180 segundos por ensayo frente a 10-58 segundos con una API remota, y los dispositivos de gama Chromebook no pueden ejecutar siquiera un modelo de 8B. Los estudiantes con hardware moderno obtienen una generación rápida y fluida, mientras que los que tienen dispositivos más antiguos se enfrentan a la latencia o al agotamiento de la memoria, así que lo local y barato no equivale por defecto a lo equitativo.

### Cómo aparece la brecha digital en la investigación

- **La alfabetización en IA como mecanismo de equidad:** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|El marco SAIL]] se diseñó explícitamente para abordar las brechas de segundo y tercer nivel, ofreciendo una vía escalonada y agnóstica a la edad hacia una alfabetización en IA equitativa en todas las etapas educativas, fundamentada en el argumento de que la alfabetización en IA es inseparable de la equidad y la participación.

- **Política e infraestructura:** [[oecd-digital-education-outlook-2026|OECD Digital Education Outlook 2026]] sitúa la brecha digital dentro de la [[educational-policy-ai|política educativa]] nacional, examinando cómo varía el acceso a las tecnologías digitales y de IA y qué pueden hacer los sistemas para cerrar las brechas.

- **Uso responsable y alfabetización en [[prompt-engineering|prompts]]:** [[aaai2026-prompting-literacy-k12|La investigación sobre alfabetización en prompts en K-12]] aborda la brecha de segundo nivel al [[teacher-role|enseñar]] a los estudiantes las habilidades para usar [[conversational-ai|chatbots]] de IA de forma responsable, reconociendo que el acceso por sí solo no confiere la capacidad de [[ai-literacy|usar bien la IA]].
- **La habilidad de formular es su propia brecha de segundo nivel.** En MedQA, la precisión aumentó con la sofisticación del prompt (82,4% con una redacción de baja alfabetización frente a 83,4% con una formulación experta), y un Prompt Equity Transformer que reescribía las peticiones con una redacción equivalente y más clara cerró la brecha, trasladando la carga de un prompting eficaz del estudiante al sistema ([[prompt-privilege-equitable-ai-access-2026|Jin et al. (2026)]]).

- **Representación y silencio estructural:** [[structural-silence-underrepresented-language-ai-2026|La investigación sobre lenguas subrepresentadas]] destaca cómo la brecha digital se extiende a *qué* comunidades, lenguas y perspectivas están representadas en los sistemas de IA y son atendidas por ellos, una dimensión cultural y epistémica de la desigualdad.

- **El cambio de código es su propia exclusión.** La mayoría de las herramientas de IA para clases magistrales presuponen audio monolingüe en inglés e internet fiable, lo que excluye a las aulas que mezclan el inglés con una lengua del hogar; los datos UDISE+ de la India situaban el acceso a internet en las escuelas cerca del 54%, con una brecha urbano-rural de 24 puntos, y un compañero bilingüe responde con transcripción en el dispositivo y almacenamiento local primero ([[bilingual-llm-lecture-companion-srl-2026|Malhotra, 2026]]).

### La IA profundiza las brechas (y puede cerrarlas)

La IA añade nuevas capas a las implicaciones de equidad de la tecnología. El sesgo algorítmico puede afectar de forma desproporcionada a estudiantes de comunidades marginadas, y la [[ai-literacy|alfabetización en IA]], es decir, la capacidad de comprender, evaluar críticamente y mitigar los sesgos y riesgos de la IA, es en sí misma un factor clave de si la IA amplía o reduce las brechas. La [[research-methods-aied|investigación]] muestra que los educadores con mayor alfabetización en IA son más eficaces a la hora de identificar y mitigar resultados sesgados. La brecha digital en la era de la IA no es, por tanto, solo un problema de provisión técnica, sino una cuestión de justicia y participación: quién puede acceder a la IA, quién puede usarla críticamente y quién se beneficia.


Una línea prolongada de la literatura rastrea cómo el concepto mismo pasó del acceso a la **equidad digital**, hoy definida en cuatro dimensiones (alfabetización digital, asequibilidad, contenido sensible al grupo y disponibilidad de infraestructura), y lee la IA de consumo como una nueva ola de la brecha que favorece a los usuarios ya capaces de auditar la salida de las máquinas ([[mechanical-compliance-human-flourishing-ai-literacy-2026|Rose (2026)]]).

**La personalidad, y no solo el nivel socioeconómico, configura la brecha de la era de la IA.** [[ai-divide-ses-personality-primary-education-2026|Wang et al. (2026)]] analizaron datos de encuesta y de registros nacionales de **4.497 estudiantes de sexto grado** en los Países Bajos, separando dos vías mediadoras, el uso de IA y la alfabetización digital, que vinculan el origen y la personalidad del estudiante con el [[learning-gains|rendimiento académico]]. Su hallazgo principal reformula la brecha clásica: **la alfabetización digital, y no la intensidad de uso de la IA, media** el vínculo entre personalidad y rendimiento, y surge una nueva brecha de habilidades digitales impulsada más por los **rasgos de personalidad que por el nivel socioeconómico**. Las ventajas del nivel socioeconómico en el rendimiento operaban con independencia del [[student-engagement|compromiso]] con la IA. Esto complica el marco de acceso y nivel socioeconómico de la brecha digital, y apunta a la formación de habilidades y al apoyo disposicional como palancas relevantes para la equidad junto al acceso a dispositivos y herramientas.

**La brecha tiene una capa metacognitiva.** Dado que aprovechar la IA de forma productiva requiere conocimiento previo y autorregulación, los estudiantes que ya los poseen se benefician más, mientras que quienes más necesitan la práctica delegan el aprendizaje mismo: una "brecha de equidad metacognitiva" que puede ampliar las diferencias de rendimiento incluso con igualdad de acceso ([[lodge-loble-cognitive-offloading-2026|Lodge y Loble (2026)]]).


La instrucción escolar estructurada sobre IA es un catalizador psicológico pero no un igualador cognitivo: en 752 estudiantes de secundaria básica de Hong Kong, un currículo de un año redujo las brechas de confianza y motivación, pero dejó intactas las diferencias objetivas de alfabetización en IA entre estudiantes con alta y baja agencia ([[school-ai-education-readiness-gaps-agency-2026|Liang et al. (2026)]]).
**La brecha también opera en el plano institucional.** [[adeniranye-ai-integration-nigerian-higher-education-2026|Adeniranye et al. (2026)]] muestran que, en el sistema de educación superior de Nigeria, la capacidad de integración de la IA se concentra en instituciones más antiguas de la región suroeste y se acumula mediante vínculos de red que se refuerzan mutuamente (colaboraciones internacionales × alianzas con la industria, r = 0,74), lo que significa que los "desfavorecidos" institucionales (típicamente universidades estatales más nuevas) se enfrentan a barreras estructurales para entrar en las mismas redes que les ayudarían a alcanzar a los demás. La desigualdad digital se reproduce así no solo entre estudiantes individuales, sino entre las estructuras [[governance|institucionales]] que determinan quién puede participar en una economía del conocimiento transformada por la IA.

**La brecha también tiene una geografía, y la mentoría es su mecanismo.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson et al. (2026)]] documentan una asimetría de recuperación en la participación en FIRST LEGO League en Indiana: tanto la participación urbana como la rural cayeron en la temporada remota de 2020, pero solo se recuperó la urbana, y la rural se mantuvo cerca de su nivel posterior a 2020 hasta 2025-2026. El mecanismo que nombran es el acceso a mentoría técnica, es decir, personas con conocimiento suficiente de programación y [[educational-robotics|robótica]] para iniciar y sostener un equipo, que las escuelas rurales pueden no tener incluso cuando estudiantes y docentes están interesados, lo que la convierte en una condición previa de la vía de la robótica y la IA más que en un rasgo suyo. Su respuesta consiste en diseñar la propagación de esa mentoría: los centros universitarios primarios forman a estudiantes de grado e imparten talleres, los programas escolares maduros se convierten en centros secundarios que hacen mentoría a escuelas cercanas, y una simulación de Markov espacial de las 1.925 escuelas públicas de Indiana proyecta 992 programas tras 40 años con supuestos moderados frente a 161 sin ARC, incluidos 341 programas rurales frente a 60. Leído junto al resultado sobre redes institucionales anterior, el patrón es que las brechas persisten a través de la *estructura de quién puede aportar experiencia y dónde*, y que aportarla deliberadamente, en lugar de suponer la proximidad a una universidad, es la palanca de política.

**El acceso y la jerarquía epistémica son problemas distintos.** [[beyond-the-algorithm-academic-developers-digital-mediators-2026|Sithole (2026)]] traza la distinción con nitidez a partir de entrevistas con [[educational-development|desarrolladores académicos]] de dos instituciones históricamente desfavorecidas de Sudáfrica: la desigualdad digital es distributiva (dispositivos, conectividad, presupuestos, alfabetización digital) y en principio se puede responder con redistribución, mientras que la **colonialidad algorítmica** es epistémica y persiste incluso en condiciones de acceso pleno, porque es inherente a lo que los sistemas codifican y a cuyo conocimiento centran. Los participantes del estudio experimentan ambas a la vez, descritas como "se nos pide construir un futuro digital sobre cimientos analógicos": los cimientos nombran el registro material de la brecha, y el futuro importado llega precargado con los supuestos epistémicos de los contextos que lo diseñaron. La implicación práctica para el trabajo de equidad es que cerrar una brecha de acceso no desestabiliza por sí mismo la jerarquía: los dos fenómenos operan en registros distintos y exigen respuestas distintas.

**Un diseño puede rodear la brecha de dispositivos en lugar de esperar a que se cierre.** [[rodrigues-aied-unplugged-numeracy-2026|Rodrigues et al. (2026)]] comprueban si los estudiantes que nunca tocan un ordenador pueden recibir aun así apoyo al estilo de la tutoría inteligente, con un paradigma que llaman "AIED sin conexión" y en el que el docente es el intermediario entre quien aprende y el sistema: los estudiantes siguen trabajando con papel y lápiz, el docente fotografía sus soluciones con un teléfono inteligente y el sistema devuelve listas personalizadas de ejercicios, puntuación automatizada y retroalimentación específica para cada error. Su cuasiexperimento por conglomerados en 19 clases de escuelas públicas brasileñas es, según su propio planteamiento, la primera evaluación cuasiexperimental de un sistema así en aulas auténticas en lugar de en un prototipo, y la aplicación se ejecutaba en los propios teléfonos de los docentes con la conectividad intermitente típica de esas escuelas. El diseño es, por tanto, una estrategia de equidad distinta de las anteriores: en lugar de cerrar la brecha de primer nivel de dispositivos y ancho de banda antes de que la tutoría con IA pueda llegar a alguien, o de elevar las habilidades de segundo nivel como precio de entrada, llega a estudiantes con los que la IA nunca interactúa directamente. Sin embargo, el mismo estudio muestra que la vía no está libre de la brecha que esquiva. La ventaja de aprendizaje frente a la práctica habitual se debía a la formación docente y no a la tecnología (las condiciones de formación y de sistema completo no diferían en ganancias), y el efecto indirecto positivo del sistema sobre el aprendizaje operaba a través de un *menor esfuerzo docente*, con una carga de trabajo más pesada asociada a menores ganancias. Rodear la brecha de acceso no disuelve, pues, el problema de equidad: reubica la restricción vinculante en la capacidad y el tiempo del profesorado.
- **La restricción de hardware puede estar disolviéndose, no cerrándose la brecha de acceso.** [[llmersion-local-first-language-learning-2026|Guo et al. (2026)]] sostienen que la restricción vinculante para el aprendizaje de lenguas [[equity-in-ai-education|equitativo]] es ahora el software y no el hardware: la pila completa de síntesis, reconocimiento y traducción cabe en menos de 4 GB, las mediciones comunitarias sitúan un modelo de 3B en 4-9 tokens por segundo en un ordenador de placa única de \$80, y cinco años de práctica diaria cuestan unos \$18 de electricidad frente a \$1.200 de una suscripción en la nube y \$2.600 de tutoría semanal.

- **La compresión de modelos es otra vía hacia el hardware limitado.** Un tutor adaptativo de pidgin nigeriano ajustado fino sobre un corpus de 416.343 entradas mantuvo la estructura semántica y la coherencia en 8 bits, mientras que las versiones de 4 y 5 bits redujeron la latencia de inferencia con solo una degradación mínima de la calidad instruccional, y los hablantes nativos comprobaron la aceptabilidad cultural en lugar de limitarse a las métricas ([[multilingual-adaptive-learning-nigeria-2026|Nwogo et al., 2026]]).

- **Un laboratorio simulado puede reproducir la factura de equipamiento que pretendía evitar.** Una [[meta-analysis-systematic-review|revisión sistemática]] de 11 estudios de gemelos digitales en educación superior STEM encontró costos de hardware de \$2000-\$15.000 por nodo de estación de trabajo funcional en cuatro estudios, con entidades físicas que limitaban el acceso a 1-3 estudiantes simultáneos en cinco, y ningún estudio incluido produjo un análisis de retorno de la inversión ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-Gonzalez et al. (2026)]]). La revisión compara ese costo de entrada con bancos de caracterización física que cuestan desde \$30.000 hasta más de \$150.000.

- **Esta brecha puede ser más superficial que la de internet.** Al emparejar el uso de IA generativa de 2025 de cada país con el año de internet con un uso global comparable, la brecha educativa era menor en 13 de los 16 países que pudieron emparejarse, de 35 ([[watanabe-genai-education-gap-europe-2026|Watanabe (2026)]]).

### Conexiones con conceptos relacionados

La brecha digital es una preocupación central de la investigación sobre [[equity-in-ai-education|equidad en la educación con IA]], estrechamente ligada a la [[ai-literacy|alfabetización en IA]] (que se plantea como un mecanismo central para abordar las barreras estructurales) y a la [[ethics|ética]] y la [[bias-mitigation|mitigación de sesgos]] (dado que el sesgo algorítmico afecta de forma desproporcionada a los grupos marginados). Se conecta con la [[ai-education|educación con IA]] y la [[higher-ed|educación superior]] como los entornos donde se manifiestan las brechas de acceso y capacidad, y se relaciona con la [[student-experience|experiencia del estudiante]] en la medida en que configura quién puede participar de forma significativa en un aprendizaje moldeado por la IA.

## Concepciones erróneas comunes

- **"El acceso a la herramienta es la brecha."** El acceso es la primera capa y la literatura ya la ha superado. **La habilidad de formular es su propia brecha de segundo nivel**: en MedQA, la precisión subió con la sofisticación del prompt de **82,4% con una redacción de baja alfabetización a 83,4% con una formulación experta**, lo que significa que dos estudiantes con acceso idéntico obtienen distinta calidad del mismo modelo porque uno sabe cómo preguntar. Una capa de reescritura de prompts redujo la brecha: la brecha está en la interfaz y en la fluidez del usuario, no solo en la suscripción.
- **"Si se ejecuta en un navegador, está disponible."** La mayoría de las herramientas de IA para clases magistrales presuponen **audio monolingüe en inglés e internet fiable**, lo que excluye justamente a las aulas que mezclan el inglés con una lengua del hogar. Los datos UDISE+ de la India situaban el acceso a internet en las escuelas muy por debajo del nivel que exige ese supuesto. Una herramienta construida sobre una infraestructura supuesta excluye en silencio los entornos con mayor necesidad.
- **"La alfabetización digital y el uso de IA son la misma variable mediadora."** Un estudio con **4.497 estudiantes de sexto grado** en los Países Bajos separó **dos vías mediadoras distintas**, el uso de IA y la alfabetización digital, que vinculan el origen y la personalidad con las ganancias de aprendizaje. No son intercambiables, y las intervenciones que elevan una no elevan automáticamente la otra.
- **"Las simulaciones eliminan la barrera del costo."** Una revisión sistemática de **11 estudios de gemelos digitales** en educación superior STEM encontró costos de hardware de **\$2.000-\$15.000** por instalación. Un laboratorio simulado puede reproducir la factura de equipamiento que pretendía evitar, así que el argumento del costo para la provisión virtual hay que comprobarlo en lugar de darlo por supuesto.

## Qué significa esto para la práctica

**Para el profesorado**

- Enseñe el prompting como una alfabetización, no como un truco opcional. Una diferencia de precisión de 1 punto entre una redacción de baja alfabetización y una formulación experta es pequeña por sí sola, pero el mismo mecanismo se acumula en cada tarea que intenta un estudiante.
- Compruebe los supuestos de lengua y conectividad de cualquier herramienta antes de asignarla. El audio monolingüe en inglés excluye a las aulas bilingües con independencia del acceso a dispositivos.
- Distinga qué vía está abordando realmente. Elevar el uso de IA y elevar la alfabetización digital son intervenciones distintas con resultados distintos.

**Para administradores y desarrolladores**

- No dé por hecho que distribuir dispositivos cierra la brecha. Las brechas medibles están en la habilidad de formular, en la lengua de la interfaz y en la conectividad, y ninguna de ellas se arregla con hardware.
- Publique la infraestructura que presupone una herramienta. Un requisito enunciado con claridad permite que un entorno con pocos recursos juzgue si le encaja antes de invertir.
- Calcule el despliegue completo, no la licencia del software. La evidencia sobre gemelos digitales muestra que la factura de hardware puede sobrevivir a la virtualización.

## Conceptos conectados

- [[differential-effects-across-learner-groups]]
- [[remote-proctoring]]
- [[equity-in-ai-education]]
- [[ai-literacy]]
- [[ethics]]
- [[bias-mitigation]]
- [[ai-education]]
- [[higher-ed]]
- [[student-experience]]
- [[parents-and-families]]

## Artículos conectados
- [[watanabe-genai-education-gap-europe-2026]] — ¿Es la brecha educativa en el uso de IA generativa menor que la que tuvo internet? (Watanabe 2026)
- [[adeniranye-ai-integration-nigerian-higher-education-2026]] — Estructuras institucionales, desigualdad digital e integración de la IA en la educación superior nigeriana
- [[ai-divide-ses-personality-primary-education-2026]] — Nivel socioeconómico, personalidad y brechas de IA en educación primaria (Wang et al. 2026)
- [[rodrigues-aied-unplugged-numeracy-2026]] — AIED sin conexión: la tutoría con el docente como intermediario llega a estudiantes sin dispositivo (Rodrigues et al. 2026)
- [[school-ai-education-readiness-gaps-agency-2026]] — La educación escolar en IA reduce las brechas psicológicas pero no las cognitivas de preparación
- [[prompt-privilege-equitable-ai-access-2026]] — Prompt Privilege: medir y mitigar las disparidades de accesibilidad en el acceso a los LLM
- [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl]] — El marco de alfabetización en IA escalonada (SAIL)
- [[oecd-digital-education-outlook-2026]] — OECD Digital Education Outlook 2026
- [[aaai2026-prompting-literacy-k12]] — Enseñar el uso responsable de los chatbots de IA a estudiantes de K-12
- [[structural-silence-underrepresented-language-ai-2026]] — Silencio estructural y lenguas subrepresentadas
- [[sec-ai-literacy-narrative-review-2026]] — Competencia socioemocional en la alfabetización en IA
- [[bilingual-llm-lecture-companion-srl-2026]]
- [[multilingual-adaptive-learning-nigeria-2026]] — Plataforma de aprendizaje adaptativo con IA para contextos multilingües de bajos recursos
- [[ai-science-chemistry-education-systematic-review-2025]] — Revisión sistemática de la IA en la educación científica y química
- [[unesco-ai-guidelines-chemical-education-2026]] — Directrices de IA de la UNESCO traducidas a la educación química; deriva epistémica
- [[lodge-loble-cognitive-offloading-2026]] — IA, descarga cognitiva e implicaciones para la educación (Lodge y Loble 2026)
- [[mechanical-compliance-human-flourishing-ai-literacy-2026]] — Alfabetización en IA desde el humanismo socialista y uso legítimo
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: el acceso rural a la robótica sigue la geografía de la mentoría, no el acceso a dispositivos (Jacobson et al. 2026)
- [[beyond-the-algorithm-academic-developers-digital-mediators-2026]] — La desigualdad digital como problema distributivo frente a la colonialidad algorítmica como problema epistémico, en instituciones sudafricanas históricamente desfavorecidas

- [[llmersion-local-first-language-learning-2026]] — LLMersion: un marco de agentes de IA local-first para el aprendizaje de lenguas en el hogar a bajo costo, hacia la equidad educativa
- [[caee-digital-twins-stem-education-systematic-review-2026]] — Los laboratorios de gemelos digitales conllevan una factura de equipamiento que limita el acceso simultáneo
