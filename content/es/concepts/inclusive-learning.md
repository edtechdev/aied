---
connected_resources: [mglearn]
title: Aprendizaje inclusivo
created: "2026-09-28T19:11:56-04:00"
updated: "2026-10-02T21:16:54-04:00"
type: concept
foundations: [ai-education, learning-design]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity, universal-design-for-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, higher ed]
confidence: high
translation_of: concepts/inclusive-learning
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Traducción automática de la página en inglés, todavía sin revisar por una persona hablante nativa."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: translation
    date: "2026-09-28"
    agent: hermes-agent
---

*Esta es una traducción automática de la página en inglés y todavía no ha sido revisada por una persona hablante nativa.*

> **Aprendizaje inclusivo** — el diseño y la impartición de experiencias educativas que atienden necesidades diversas de quienes aprenden, abarcando diferencias físicas, cognitivas, sensoriales y situacionales. En la IA en educación, la [[research-methods-aied|investigación]] sobre aprendizaje inclusivo examina tanto cómo las herramientas de IA pueden eliminar barreras para el estudiantado con discapacidad y neurodivergente como cómo los [[ai-technologies|sistemas de IA]] deben diseñarse para evitar crear nuevas brechas de accesibilidad.

## Preguntas para reflexionar

- Una herramienta accesible no garantiza una enseñanza inclusiva, y la tecnología de asistencia no garantiza una agencia significativa. ¿Cuál es la diferencia entre eliminar una barrera de formato y diseñar la educación para que todo el mundo pueda participar de forma significativa?
- La página distingue entre aprendizaje inclusivo, accesibilidad, tecnología de asistencia, educación especial y diseño universal. ¿Dónde se sitúa la IA en su propio contexto, y qué pregunta intenta responder en realidad?
- Un estudio encontró que los vídeos segmentados por IA con pausas fijas eliminaban la brecha de rendimiento entre estudiantes con y sin TDAH. ¿Cómo podría el diseño pensado para las necesidades de un grupo mejorar el aprendizaje de todos?
- Se dice que los sistemas de IA corren el riesgo de crear nuevas brechas de accesibilidad a la vez que eliminan las antiguas. ¿A qué tipo de persona podría excluir silenciosamente una herramienta de IA basada en texto, visual y siempre conectada?
- La investigación sobre evaluación inclusiva expone una tensión entre las medidas antitrampas y la atención a quienes aprenden con necesidades de procesamiento visual. Cuando la seguridad y la accesibilidad entran en conflicto, ¿cómo debería decidirse el equilibrio, y quién debería decidirlo?
- Varias herramientas invierten el supuesto de que la [[edtech-platform|tecnología educativa]] debe ser visual, por ejemplo, compañeros que priman la voz para quienes aprenden con discapacidad visual. ¿Qué supuestos sobre la persona «típica» que aprende podrían estar haciendo sus propias herramientas o materiales?

## Introducción

El aprendizaje inclusivo es el compromiso de diseño de que la educación debe construirse para que todo el mundo pueda participar de forma significativa, en lugar de adaptarse a posteriori para quienes tienen dificultades. Aquí funciona como paraguas sobre conceptos adyacentes pero distintos: la [[accessibility|accesibilidad]] (¿puede todo el mundo percibir y operar el formato?), la [[assistive-technology|tecnología de asistencia]] (¿qué herramientas salvan la [[digital-divide|brecha de acceso]] de una persona?), el [[universal-design-for-learning|diseño universal para el aprendizaje]] (¿cómo debería el diseño anticipar la variabilidad?), y aborda la [[neurodiversity|neurodiversidad]] y la [[special-education|educación especial]] como contextos de diseño y no como excepciones. La IA entra a la vez como promesa (personalización, adaptación, traducción) y como nueva fuente de exclusión (coste, datos, cobertura lingüística y los supuestos incorporados en los modelos).

## Cómo encajan los conceptos relacionados

El aprendizaje inclusivo es el concepto **paraguas**; las páginas siguientes se sitúan dentro de él y cada una responde a una pregunta distinta. Se solapan, pero no son intercambiables: saber a cuál pertenece una afirmación mantiene precisa la base de conocimiento:

| Concepto | Pregunta central que responde | Foco típico |
|---|---|---|
| **Aprendizaje inclusivo** *(esta página)* | ¿Cómo diseñamos la educación para que todo el mundo pueda participar de forma significativa? | El diseño amplio de la enseñanza ante la variabilidad de quienes aprenden |
| **[[accessibility]]** · accesibilidad | ¿Puede todo el mundo percibir y operar el *formato o medio*? | Subtítulos, texto alternativo, transcripciones, contraste, compatibilidad con teclado y lectores de pantalla, WCAG |
| **[[assistive-technology]]** · tecnología de asistencia | ¿Qué herramientas o equipos salvan la brecha de acceso de una persona? | Lectores de pantalla, TTS/STT, braille o táctil, subtitulado, adaptaciones con IA |
| **[[special-education]]** · educación especial | ¿Cómo impartimos enseñanza a quienes tienen discapacidades diagnosticadas? | PEI, adaptaciones individualizadas, tutoría específica por discapacidad — **es principalmente un término de [[k-12]] (IDEA/derecho a servicios)** |
| **[[universal-design-for-learning]]** · diseño universal para el aprendizaje | ¿Cómo incorporamos flexibilidad de forma proactiva desde el principio? | Múltiples medios de [[student-engagement]] (implicación), representación y acción y expresión |

En la práctica: el **DUA** es la filosofía de diseño que *previene* barreras; la **accesibilidad** es la propiedad que elimina barreras de *formato*; la **tecnología de asistencia** es la capa de *herramientas* que usan las personas; la **educación especial** es el ámbito *didáctico* para las discapacidades diagnosticadas, y es principalmente un término de **K-12**, mientras que en la **[[higher-ed|educación superior]]** (y cada vez más también en K-12) el encuadre más común es el [[universal-design-for-learning|diseño universal para el aprendizaje]]. El **aprendizaje inclusivo** es el paraguas que los mantiene unidos en torno al objetivo compartido de una participación equitativa. Una herramienta accesible no garantiza una enseñanza inclusiva, y la tecnología de asistencia no garantiza una agencia significativa, y por eso el paraguas debe abarcarlos todos.

El aprendizaje inclusivo se sitúa en la intersección de la [[equity-in-ai-education|equidad en la educación con IA]], el [[learning-design|diseño del aprendizaje]] y la [[special-education|educación especial]], y se apoya en la capa concreta de herramientas de la [[assistive-technology|tecnología de asistencia]] y en la propiedad de diseño de la [[accessibility|accesibilidad]]. A diferencia de las adaptaciones estrechas que reajustan el acceso sobre sistemas existentes, la perspectiva del aprendizaje inclusivo —fundamentada en el [[universal-design-for-learning|diseño universal para el aprendizaje]]— sostiene que los entornos deben diseñarse desde el principio para toda la gama de la diversidad humana. Los artículos de esta base de conocimiento exploran cómo la IA puede hacerlo posible mediante la transformación automatizada de contenidos, interfaces de evaluación adaptativas y herramientas diseñadas tomando como punto de partida la experiencia vivida de las [[neurodiversity|personas neurodivergentes]].

### Temas de investigación clave

**La accesibilidad de contenidos impulsada por IA** demuestra cómo los flujos automatizados pueden reducir barreras. **[[adhd-video-segmentation-computing-education|Pimenova et al.]]** mostraron que los [[video-education|vídeos didácticos]] segmentados por IA con pausas fijas eliminaban la brecha de rendimiento entre estudiantes con y sin TDAH, una evidencia sólida del diseño universal para el aprendizaje mediante la transformación automatizada de contenidos. El estudio conecta con la investigación sobre [[neurodivergent-computing-students|estudiantado de informática neurodivergente]] y con cómo las estructuras de [[collaborative-learning|aprendizaje colaborativo]] afectan a la comodidad de las personas neurodivergentes. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen et al.]]** diseñaron un sistema de generación de preguntas impulsado por [[llm|LLM]] para quienes aprenden sordos y con hipoacusia, introduciendo estrategias de preguntas visuales y emocionales que apuntan a los momentos de dificultad visual o emocional del vídeo, a la vez que revelaban el desajuste persistente entre los prompts de IA basados en texto y las lenguas de signos como primeras lenguas de quienes son sordos o tienen hipoacusia, lo que subraya la necesidad de un diseño de IA sensible a la lengua y la cultura. **[[text-simplification-its|MuTSE]]** aborda una barrera complementaria —el nivel de lectura— evaluando la simplificación de texto con LLM para la [[intelligent-tutoring|tutoría inteligente]] y ajustando la complejidad del contenido al nivel actual de cada persona mediante un marco de evaluación [[human-in-the-loop-ai|con humanos en el bucle]] en lugar de confiar en métricas lingüísticas que pasan por alto la calidad [[pedagogy|pedagógica]].
Los vídeos con muchas ecuaciones pueden hacerse accesibles en lugar de transcribirse a mano: un flujo de trabajo de Gemini más LuaLaTeX convirtió 16 vídeos didácticos de física en PDF que superaron la validación PDF/UA-2 e ISO 32005, y solo un vídeo necesitó un segundo intento ([[gemini-lualatex-physics-video-transcription-2026|Looney y Duston (2026)]]).

**Accesibilidad sensorial: estudiantes ciegos, con baja visión y sordos.** Varios artículos invierten el supuesto de que la tecnología educativa debe ser visual. **[[kutti-ai-voice-first-learning-companion|Kutti AI]]** convierte la conversación hablada en la modalidad primaria y suficiente para niños con discapacidad visual —detección de dificultades en tiempo real, correspondencia de respuestas [[multilingual-learning|multilingüe]] y reconocimiento automático de voz en el dispositivo que funciona sin conexión— eliminando tanto la dependencia visual como el requisito de conectividad. **[[tactile-statistical-graphs-accessibility|Obiuwevwi et al.]]** construyeron un flujo reutilizable que genera gráficos estadísticos táctiles impresos en 3D para estudiantes ciegos o con baja visión en menos de 250ms, con extracción opcional de gráficos a partir de imágenes mediante LLM. **[[pepper-robot-sign-language-lis-2025|Bolla et al.]]** exploraron si el robot social Pepper puede producir lengua de signos italiana inteligible, codiseñando 52 signos con un estudiante sordo y una intérprete experta, y amplían así la [[educational-robotics|robótica educativa]] hacia la accesibilidad comunicativa para quienes son sordos, a la vez que destacan el reto de reproducir los componentes no manuales (expresión facial, postura) cruciales para el significado. **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif et al. (2026)]]** llevan esta línea de trabajo a la educación superior y encuentran, en un estudio de caso [[qualitative-research|cualitativo]] con 21 universitarios con discapacidad visual en Palestina, que la IA generativa ajusta el ritmo, el contenido y la presentación a perfiles individuales y convierte textos académicos complejos entre modalidades, con estudiantes que ven en la IA generativa un complemento y no un sustituto del profesorado, preservando la conexión humana y habilitando la participación.

**El diseño de evaluaciones inclusivas** lidia con la tensión entre seguridad y accesibilidad. **[[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]]** propone un marco teórico de distracción visual adaptativa que resiste el copiado mediante capturas de pantalla y a la vez atiende a quienes aprenden con necesidades de procesamiento visual, y modela explícitamente el equilibrio entre las medidas antitrampas y los principios del aprendizaje inclusivo. Esto conecta con preocupaciones más amplias de [[academic-integrity|integridad académica]] y de [[assessment|evaluación]].

**Las experiencias de quienes aprenden con neurodivergencia** ponen en el centro las voces del estudiantado con discapacidad y neurodivergente. **[[neurodivergent-computing-students|Zastudil et al.]]** encontraron que el estudiantado de informática neurodivergente necesita tareas estructuradas, equipos pequeños y estables y definiciones explícitas de roles, preferencias que la [[intelligent-tutoring|tutoría con IA]] y las herramientas de colaboración deben atender. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** analizó las discusiones de foro de quienes aprenden con dislexia y reveló que, aunque valoran la IA para el apoyo a la alfabetización, se enfrentan a barreras de accesibilidad importantes por la calidad inconsistente de la salida y la falta de adaptaciones equitativas. Ambos conectan con la [[special-education|educación especial]] y la [[student-experience|experiencia del estudiantado]].

**La [[cognitive-offloading|dependencia cognitiva]] y el equilibrio entre acceso y desarrollo.** [[seung-basham-cognitive-offloading-swld-2026|Seung y Basham (2026)]] muestran que, para el estudiantado con dificultades de aprendizaje, la misma IA generativa que rebaja las barreras de acceso a la lectura y la escritura (nivelación de textos, resúmenes, apoyo a la redacción) puede, si no se vigila, sustituir la práctica de comprensión, planificación y monitorización que estas personas necesitan más, una tensión de equidad central para el aprendizaje inclusivo. El diseño inclusivo debe considerar por tanto no solo si una herramienta es *accesible*, sino si preserva la oportunidad de desarrollar precisamente las habilidades que el acceso pretende habilitar.

**La IA para la dislexia: detección, apoyo y [[personalized-learning|aprendizaje personalizado]].** Una [[meta-analysis-systematic-review|revisión sistemática]] interdisciplinar de 2026 (Dabaghi, D'Urso y Sciarrone, guiada por PRISMA, 2018–2024, n=72) encuentra que la IA apoya a estudiantes con dislexia en detección, apoyo asistencial y aprendizaje personalizado, pero con estas líneas evolucionando en paralelo y no de forma integrada, impulsadas más por la oportunidad tecnológica que por una teoría educativa consolidada. Las herramientas de ayuda a la educación basadas en aprendizaje automático abarcan cinco áreas (aplicaciones específicas, implicación, personalización, recomendación y apoyo genérico), pero hacen hincapié en el rendimiento técnico y la precisión de clasificación mientras pasan por alto la validez ecológica y el despliegue práctico en el aula. La investigación sobre detección (EEG, seguimiento ocular, modelos de aprendizaje automático) muestra potencial diagnóstico para la intervención temprana, pero a menudo exige equipos especializados y entornos controlados, lo que limita su escalabilidad y accesibilidad en contextos escolares típicos. Entre los retos abiertos están la validación experimental limitada, la escalabilidad, las preocupaciones de [[ethics|ética]] y privacidad con datos sensibles del estudiantado, el limitado apoyo y formación al [[teacher-role|profesorado]] y las barreras lingüísticas y culturales (la mayor parte de la investigación se dirige a poblaciones anglófonas), lo que subraya que el aprendizaje inclusivo debe combinar la capacidad técnica con un despliegue validado, escalable y éticamente fundamentado.

**La crítica de la IA centrada en la discapacidad** examina cómo los sistemas de IA pueden marginar en lugar de incluir. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]** sostiene que los sistemas de [[generative-ai|IA generativa]] en la educación superior marginan activamente las formas de conocer centradas en la discapacidad debido a datos de entrenamiento anglófonos y centrados en Occidente, lo que conecta con las preocupaciones de la [[equity-in-ai-education|equidad en la educación con IA]] sobre la justicia epistémica.

**El control de acceso mediante un diagnóstico formal excluye al estudiantado al que una herramienta dice servir.** En la revisión de alcance de [[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al. (2026)]] sobre 40 estudios de tecnologías digitales de asistencia para estudiantado neurodivergente, 28 exigían un diagnóstico formal como condición de participación y solo tres abordaban el entorno en lugar del estudiantado.

**Herramientas accesibles en la práctica** muestra cómo la IA puede ampliar la participación. **[[suacode-african-students-motivations|SuaCode]]** demostró que los cursos de programación desde el teléfono móvil llegan a estudiantes de contextos africanos de bajos recursos donde menos del 1% tiene habilidades de programación. **[[embodied-string-learning-blindness-low-vision-musicians|Pimenova et al.]]** trabajaron con músicos ciegos y con baja visión para desarrollar estrategias de aprendizaje no visuales, poniendo en el centro un diseño [[embodied-learning|corporeizado]] liderado por las propias personas con discapacidad. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]** ofrece un compañero de pensamiento con IA sin coste, privado y multilingüe que conecta al profesorado con los principios del DUA. **[[special-r1-rl-special-education|Special-R1]]** amplía el [[reinforcement-learning|aprendizaje por refuerzo]] para modelar la diversidad cognitiva y comunicativa entre perfiles de discapacidad.

### Conexiones con conceptos relacionados

El aprendizaje inclusivo está profundamente conectado con la [[equity-in-ai-education|equidad en la educación con IA]]: la accesibilidad no es solo una cuestión técnica, sino una pregunta sobre quién puede participar en el aprendizaje. Conecta con la [[accessibility|accesibilidad]] como su capa concreta de acceso y con la [[assistive-technology|tecnología de asistencia]] como capa de herramientas, con el [[universal-design-for-learning|diseño universal para el aprendizaje]] como fundamento teórico, con la [[special-education|educación especial]] para los enfoques específicos por discapacidad, con el [[learning-design|diseño del aprendizaje]] para cómo se estructuran los cursos y las herramientas, y con la [[neurodiversity|neurodiversidad]] como la lente que reformula la diferencia como diversidad y no como déficit. El trabajo sobre robots de lengua de signos y herramientas táctiles vincula la accesibilidad con la [[educational-robotics|robótica educativa]] y el [[educational-nlp|procesamiento de lenguaje natural educativo]], mientras que la simplificación de textos la conecta con el [[sociocultural-learning|aprendizaje sociocultural]] y el [[adaptive-learning|aprendizaje adaptativo]]. Las conexiones con la [[ai-education|IA en la educación]] y la [[generative-ai|IA generativa]] destacan tanto la promesa (adaptación automatizada de contenidos) como el peligro (sistemas de IA que reproducen la exclusión).

## Implicaciones para el profesorado que diseña aprendizaje inclusivo

- **Diseñe primero para la modalidad excluida, no al final.** Construir desde el principio para usuarios ciegos o con baja visión ([[kutti-ai-voice-first-learning-companion|Kutti AI]], [[tactile-statistical-graphs-accessibility|gráficos táctiles]]) produce herramientas que también funcionan sin conexión y en contextos de bajos recursos: la accesibilidad como catalizador, no como adaptación posterior.
- **Codiseñe con la comunidad destinataria.** [[pepper-robot-sign-language-lis-2025|Los robots de lengua de signos]] y la [[llm-question-generation-deaf-hard-of-hearing-2026|generación de preguntas para personas sordas o con hipoacusia]] muestran que la participación de la comunidad saca a la luz barreras (por ejemplo, las lenguas de signos como primeras lenguas) que el personal de diseño no puede anticipar: involucre a quienes aprenden y a las comunidades en el diseño.
- **Evalúe la calidad pedagógica, no solo las métricas lingüísticas.** [[text-simplification-its|MuTSE]] muestra que la variabilidad de la salida de los LLM exige una evaluación con humanos en el bucle para que la simplificación ayude en lugar de simplificar en exceso.
- **Use la IA para cerrar brechas de rendimiento.** [[adhd-video-segmentation-computing-education|Los vídeos segmentados por IA]] eliminaron la brecha de rendimiento por TDAH: despliegue IA adaptativa donde la evidencia muestra que iguala los resultados.
- **Trate explícitamente el equilibrio entre seguridad y accesibilidad.** [[behaviorally-adaptive-visual-diversion-assessment-2026|BAVD]] modela cómo las medidas antitrampas pueden excluir sin querer a quienes aprenden con necesidades de procesamiento visual: pondere la integridad frente al acceso.
- **El acceso puede depender de la formulación, no solo del formato.** Manteniendo fija la tarea subyacente, la exactitud del modelo subió del 82,4% con una redacción de baja alfabetización al 83,4% con una formulación experta, de modo que exigir al estudiantado que formule mejores prompts añade una nueva exclusión; un reescritor del lado del sistema que normaliza las peticiones eliminó la brecha significativa sin alterar el contenido ([[prompt-privilege-equitable-ai-access-2026|Jin et al. (2026)]]).
- **Vigile que la IA no reproduzca la exclusión.** [[genai-minoritized-knowledges-disability|La crítica centrada en la discapacidad]] advierte de que los datos de entrenamiento anglófonos y centrados en Occidente marginan las formas de conocer de las personas con discapacidad: audite las herramientas de IA en términos de justicia epistémica junto con la [[equity-in-ai-education|equidad en la educación con IA]].

## Conceptos conectados

- [[differential-effects-across-learner-groups]]
- [[equity-in-ai-education]]
- [[accessibility]] — la capa concreta de acceso (subtítulos, texto alternativo, compatibilidad con tecnología de asistencia)
- [[assistive-technology]] — la capa de herramientas que el estudiantado usa para acceder al contenido
- [[special-education]]
- [[learning-design]]
- [[universal-design-for-learning]]
- [[neurodiversity]]
- [[student-experience]]
- [[ai-literacy]]
- [[higher-ed]]
- [[k-12]]
- [[cs-education]]
- [[assessment]]
- [[academic-integrity]]
- [[privacy]]
- [[generative-ai]]
- [[ai-education]]
- [[educational-robotics]]
- [[educational-nlp]]
- [[sociocultural-learning]]
- [[adaptive-learning]]
- [[speech-and-voice-technologies]]

## Artículos conectados

- [[prompt-privilege-equitable-ai-access-2026]] — Privilegio de prompt: medir y mitigar las disparidades de accesibilidad en el acceso a los LLM
- [[adhd-video-segmentation-computing-education]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Generación de preguntas con LLM para quienes aprenden sordos y con hipoacusia
- [[text-simplification-its]] — Simplificación de textos para la tutoría inteligente
- [[kutti-ai-voice-first-learning-companion]] — Kutti AI: compañero que prima la voz para niños con discapacidad visual
- [[tactile-statistical-graphs-accessibility]] — Gráficos estadísticos táctiles impresos en 3D
- [[pepper-robot-sign-language-lis-2025]] — El robot Pepper como apoyo a la comunicación en lengua de signos
- [[behaviorally-adaptive-visual-diversion-assessment-2026]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[neurodivergent-computing-students]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[suacode-african-students-motivations]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[special-r1-rl-special-education]]
- [[gemini-lualatex-physics-video-transcription-2026]] — Transcripción de vídeos de física con matemáticas accesibles mediante Gemini + LuaLaTeX
- [[khlaif-assistive-genai-visually-impaired-2026]] — IA generativa de asistencia para quienes aprenden con discapacidad visual
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — IA generativa, realidad virtual y más allá: revisión de alcance de las tecnologías digitales de asistencia para estudiantado neurodivergente en la educación superior