---
title: التشخيص المعرفي
created: "2026-10-12T18:50:00-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
reviewed_by: [editor]
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-10-15T10:00:00-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

> **التشخيص المعرفي** — استنباط حالة المعرفة الكامنة للمتعلّم — المفاهيم والمهارات والمفاهيم الخاطئة المحدّدة التي يملكها أو يفتقدها — من استجاباته أو سلوكه. وهو النظير على جانب التقويم لـ[[knowledge-tracing]]، متمركز على توصيف *ما* يعرفه طالب لا التنبّؤ بأدائه التالي فحسب.

## أسئلة للتأمّل

- يستنبط التشخيص المعرفي حالة المعرفة الكامنة للمتعلّم — المفاهيم والمهارات والمفاهيم الخاطئة المحدّدة التي يملكها أو يفتقدها — من استجاباته، بدل التنبّب بدرجته التالية فحسب. قبل القراءة، ما الفرق الذي كنت ستتوقّعه بين «التنبّؤ بدرجة طالب» و«تشخيص ما لا يفهمه فعلًا»؟
- فكرة محورية هي «مصيدة الجواب الصحيح» — حيث يُخفي جواب صحيح استدلالًا معيوبًا. هل وثقت يومًا أن طالبًا فهم شيئًا لأنه أصابه، لتكتشف مفهومًا خاطئًا تحته؟ وكيف يمكن للتشخيص أن يُظهر ذلك حيث لم تقدر الدرجة؟
- تميّز الصفحة بين التشخيص المعرفي (لقطة ساكنة دقيقة لما يحمله متعلّم حاليًا) وتتبّع المعرفة (الديناميات الزمانية للإتقان على الزمن). فلماذا سيحتاج مدرّس ذكي إلى الاثنين — ليعرف ما الخطأ وليعرف ما يعلّمه تاليًا؟
- مبدأ تصميمي هنا هو فصل التشخيص عن التغذية الراجعة: فمدرّسو النماذج اللغوية الكبيرة يؤكّدون الخطوات الصحيحة لكنهم يرفضون الاستدلال الصحيح بفرط ويُصدّقون الأخطاء بفرط، والتشخيص الدقيق لا يُنتج تغذية راجعة قابلة للتنفيذ بثقة. فلماذا قد يفشل معرفة ما الخطأ في إنتاج خطوة تالية مفيدة؟
- يمتدّ تشخيص عصر النماذج اللغوية الكبيرة من الاختيار من متعدّد إلى العمل المفتوح والمكتوب بخطّ اليد والمحادثي. فما قد يسوء إذا شخّص ذكاء اصطناعي مفهومًا خاطئًا من عمل لا يستطيع فهمه كاملًا — وكيف ستتحقّق من أن التشخيص ذاته موثوق؟

## مقدّمة

بينما يُقدّر تتبّع المعرفة إتقانًا عدديًا على الزمن عادةً، يُنتج التشخيص المعرفي ملفًّا أدقّ: أيّ مكوّنات المعرفة متقنة، وأيّها هشّة، وأيّ مفاهيم خاطئة حاضرة. وهذا الملفّ هو الركيزة لـ[[personalized-learning]] و[[intelligent-tutoring]] و[[adaptive-learning]].

### كيف يعمل التشخيص المعرفي

- **النماذج التشخيصية:** تستنبط النماذج القياسية (كثيرًا تحت [[item-response-theory]] و[[educational-measurement]]) حالات المهارة الكامنة من أنماط الاستجابات الصحيحة والخاطئة، وأحيانًا عبر نماذج تشخيص معرفي تخطّط المواد إلى مكوّنات معرفية متعدّدة.
- **البحث الآلي في النماذج:** لأنه لا نموذج تشخيصي واحد يناسب كل متعلّم، تُولّد المداخل المدفوعة بـ[[machine-learning|AutoML]] (كبحث البنية المعرفية العصبية المخصّصة) نماذجًا تشخيصية لملفّات متعلّمين غير متجانسة — مُدمجةً بيانات تعليمية [[multimodal|متعدّدة الوسائط]] لإتاحة تحليل ديناميكي لعمليات التعلّم وتشخيص معرفي لكل متعلّم، بدل الاعتماد على نتائج [[summative-assessment|الامتحان]] الساكنة والمؤشّرات الإحصائية البسيطة ([[personalized-neural-cognitive-architecture-search-2026]]).
- **بيانات الاستجابة:** يسقي التشخيص من استجابات التقويمات والتلميحات و[[help-seeking]] وزمن المهمّة — إشارات أغنى من الدرجات الخام.
- **التشخيص القائم على النماذج اللغوية الكبيرة:** تستخدم المداخل الأحدث [[llm|النماذج اللغوية الكبيرة]] لتشخيص العمل المفتوح أو المكتوب بخطّ اليد، ولتحديد [[misconceptions|المفاهيم الخاطئة]] المحدّدة وراء خطأ (كـ«مصيدة الجواب الصحيح» حيث يُخفي جواب صحيح استدلالًا معيوبًا). ونتيجتان لعام 2026 تحدّان مدى وصول ذلك التشخيص. فقد أشرف [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang et al., 2026)]] على الاستدلال التشخيصي بوصفه إحدى أربع قدرات في عائلة مفتوجة 4B/9B/27B، وبقي تشخيص حالة المعرفة أضعف قدراته المقيسة — 54.04% عند 27B و53.55% عند 9B، بما يكفي قربًا أن ثلاثة أضعاف المُعاملات لم تُغلق الفجوة — بينما ارتبط مُصحّح [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] اللغوي الكبير بالإتقان الحقيقي عند r = 0.68 عبر الأجوبة المجمّعة لكن فقط r ≈ 0.15 داخل أضعف طبقة قدرة (r ≈ 0.48 مختلطة، 0.41 قوية)، فموثوقية التشخيص تتابع مستوى قدرة المتعلّم بقدر ما تتابع مستوى النموذج.
- **تشخيص الأخطاء الشائعة على مستوى الدفعة، لا استجابة واحدة في كل مرّة.** يُعكس [[llm-common-modeling-mistakes-formalisms-2026|Killich et al. (2026)]] الاتجاه المعتاد: فبدل تشخيص خطأ متعلّم واحد، يقترح [[llm]] تحويلاتٍ مرشّحةً لتصحيح الخلل تخطّط الصياغات الخاطئة على الصحيحة عبر مجموعة بيانات تعليمية كاملة، وكل مرشّح يُتحقّق منه خوارزميًا قبل الاحتفاظ به. وعلى 6,106 زوجًا من الصياغات المنطقية القضوية الصحيحة والخاطئة، اكتشف سير العمل 248 عنقودًا من التحويلات يشرح 5,156 زوجًا (84.44%)، مقابل 4,370 (71.57%) للأخطاء المُختارة يدويًا لأحدث حالة فنّ سابقة، واستعاد الأخطاء التي حدّدها خبير مجالي يدويًا في الأدبيات. ويُرتّب التجميع المرشّحين في مجموعات تحويل أحادي وتحويل مكافئ ومجموعات هرمية، ويمكن تصوير رسم الارتباط الناتج للمدرّبين؛ ونقل المسار ذاته إلى المنطق الشكلي والتعابير النمطية، حيث غطّى تحويل واحد لاستبدال العطف بالفصل وحده 98.80% من عنقوده ذي الـ 334 زوجًا. وهو طريق إلى جرد المفاهيم الخاطئة الذي يحتاجه نموذج تشخيصي قبل أن يُطابَق.
- **استعادة الحل الصحيح، لا محاكاة الخطأ، هي عنق الزجاجة.** بنت النماذج حلًّا في 95.2% من آثار المُشتِّتات وحاكت مفهومًا خاطئًا معيّنًا من Eedi بدقّة 0.92، ومع ذلك فإن تزويد الجواب الصحيح ما زال يرفع التطابق مع مُشتِّتات البشر (0.52 ← 0.56) — فالفشل أقرب إلى المنبع، في استعادة الحل ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen et al. (2026)]]).
- **التشخيص على مستوى النتائج في مناهج التعليم القائم على النواتج:** يشخّص [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] نواتج المقرّر التي حقّقها متعلّم في التعليم القائم على النواتج بمعاملة النواتج كمفاهيم المعرفة، مُزوّدًا علاقات المفاهيم بتخطيطات تقارب التحاقق منها الخبراء بين نواتج المقرّر ونواتج البرنامج (بديل صريح عن الانتباه أو علاقات الرسم البياني المتعلَّمة ضمنيًا)، ومستخدمًا وحدةً معزّزة بالذاكرة لتقدير كيف يؤثّر تحقيق نتيجة واحدة في الأخرى — مُتجاوزًا معايير DKT وDKVMN وEKT وSimpleKT (89.81% AUC) على بيانات برامج هندسة حيّة.
- **التشخيص من أدوات بُنيت لشيء آخر.** يُظهر [[mechanics-cognitive-diagnostic-physics-2026|Le et al. (2026)]] أن نموذج تشخيص معرفي (CD) يمكنه استخراج معلومة على مستوى الهدف من مواد لم تُكتب للتشخيص أبدًا. بتخطيط مواد FCI وFMCE وEMCS على 14 هدفًا تعلّميًا دقيقًا في ميكانيكا المقدّمة وملاءمة DINA على 24,394 استجابة اختبار لاحق من 807 مقرّرات، وجدوا ملاءمةً جيّدة لاثنين من الأدوات الثلاثة (FCI RMSEA² = 0.033؛ EMCS = 0.022) ودقّة تصنيف عند أو فوق معيار التكوينية منخفضة المخاطر لـ 19 من 22 تركيبة هدف–تقويم. وبنية السمة، لا جودة المادة، كانت القيد المُلزِم: فقد نجا ترميز الخبراء من فحص النموذج شبه سليمًا — فقد اقترح DINA مراجعة 14% فقط من 754 ترميز مادة–هدف وتبنّى المرمّزون 20 منها (2.7%) — لكن النموذج لم يستطع فصل ثلاثة أهداف طاقة *متداخلة مفهوميًا* (الطاقة الكامنة 0.675، حفظ الطاقة 0.705، الطاقة الحركية 0.745) لأن أيًّا منها تشارك نحو 70% من موادّه مع الأخرى (تقاطع Jaccard 0.67–0.73)، مُخلًّا بافتراض استقلال DINA الوصلي، بينما بلغت أهداف كمية الحركة على الأداة ذاتها 0.820–0.917. وملاءمت السمات الأدقّ أفضل لا أسوأ: فقد حسّنت بنية الـ 14 هدفًا ملاءمة النموذج على بنية المهارات الأربع الواسعة الأقدم للفريق ذاته على الأدوات الثلاثة كلّها. فتغطية المواد، لا خطأ الترميز، هي ما يحدّ مدى الدقّة التي يمكن بها فصل الإتقان.
- **DINA البايزية لمسارات تعلّم مخصّصة:** يُدمج [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng and Huang (2026)]] نموذج DINA بايزيًا (مدرَّبًا على مجموعة بيانات EdNet، N=5,000) بنظرية فضاء المعرفة وخوارزمية أقصر مسار معالجة لتوليد مسارات تعلّم مخصّصة، ويختبران تجريبيًا دور الوساطة في [[cognitive-offloading|الحمل المعرفي]] عبر تحوّلات حالة نموذج ماركوف الخفي (متحقَّق منه على 120 طالبًا) — معالجين مشكلة تقارب DINA التقليدية المدفوعة بالندرة والآلية النفسية غير المُختبرة خلف فعّالية المسار المخصّص.
- **التشخيص المرتبط باللغة مكان تضمينات المُعرّفات.** يستبدل [[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]] مُعرّفات الطالب والتمرين والمفهوم المتقطّعة بمخططات مفاهيم مبنيّة بنموذج لغوي كبير وأدلّةً مرتكزةً على العملية، مُعايِرًا حالة كل طالب الخلفية من سجلّات الاستجابة. فعبر ثلاث مجموعات بيانات لمنصّات [[math-education|الرياضيات]] [[online-teaching-and-learning|]]، يبلغ الإطار 83.51% ACC / 85.37% AUC على XES3G5M و87.16% ACC على MOOC، مع تركّز المكسب حيث تتدهور نماذج التشخيص المعرفي الكلاسيكية تمامًا: المفاهيم الجديدة (+4.60 ACC على KCD) ومدخلات مصفوفة Q المفقودة (+4.52). وإسقاط الأدلّة المنظّمة يُسقط دقّة MOOC من 87.16% إلى 78.95%، فالتحسّن يأتي من البنية المستنبطة من اللغة لا من حجم النموذج. ([[process-grounded-language-cognitive-diagnosis-2026]])
- **المهام المدمجة ثقافيًا يمكن أن تسبق التحليل بالذكاء الاصطناعي.** طلب [[culturally-embedded-ai-diagnostic-assessment-2026|Anggara et al. (2026)]] من 178 طالبًا في المرحلة الإعدادية في إندونيسيا إنجاز مهام مفتوحة مُسيَقة ثقافيًا قبل تحليل الاستجابات بالذكاء الاصطناعي؛ فتوافقت تشخيصات الذكاء الاصطناعي مع تقييم الخبراء (ICC = 0.81)، بينما ارتبط الدمج الثقافي بالأداء الرياضي الرمزي (β = 0.42) والمشاركة (β = 0.37).

## لماذا يهمّ

يترك التشخيص الدقيق التعليم يستهدف الفجوات الفعلية بدل درجة «القدرة» الكلّية — ما يُتيح [[automated-assessment]] يشرح *لماذا* أخطأ طالب وأنظمة [[feedback|حلقة التغذية الراجعة]] تعالج حالات [[student-modeling|معرفة]] محدّدة. ويُنتج التشخيص الرديء العكس: تعليمًا موجّهًا إلى المفاهيم الخاطئة. ولهذا يُشددّ [[psychometrically-aware-ai]] على الصلاحية التشخيصية جنبًا إلى جنب مع دقّة التنبّؤ.

### العلاقة بتتبّع المعرفة والتدريس الذكي

يقيم التشخيص المعرفي في قلب بنية [[intelligent-tutoring]] وهو النظير على جانب التقويم لـ[[knowledge-tracing]]:

- **التشخيص مقابل التتبّع — وجهان زمنيان متكاملان.** يتابع [[knowledge-tracing|تتبّع المعرفة]] *الديناميات الزمانية* للإتقان — مُقدّرًا كيف تتطوّر حالة معرفية عدديّة عبر التمارين ومتنبّئًا بالاستجابة التالية. ويُنتج التشخيص المعرفي *اللقطة الساكنة الدقيقة* لأيّ مكوّنات معرفة أو مهارات أو مفاهيم خاطئة يحملها متعلّم حاليًا. ويحتاج المدرّس إلى الاثنين: تتبّع المعرفة لتسلسل ما يُعلَّم تاليًا، والتشخيص المعرفي ليعرف *ما* هو الخطأ فعلًا. فالنماذج التشخيصية القائمة على [[item-response-theory|IRT]] و[[educational-measurement|القياس]]، ونماذج التشخيص المعرفي التي تخطّط المواد إلى مكوّنات متعدّدة، تُجسّد الجانب التشخيصي.

- **تشخيص عصر النماذج اللغوية الكبيرة.** تمتدّ [[llm|النماذج اللغوية الكبيرة]] التشخيص من استجابات الاختيار من متعدّد إلى العمل المفتوح والمكتوب بخطّ اليد والمحادثي، محدّدةً [[misconceptions|المفاهيم الخاطئة]] المحدّدة وراء خطأ (كـ«مصيدة الجواب الصحيح» حيث يُخفي جواب صحيح استدلالًا معيوبًا). ويستخدم [[xie-hillm-cd-2026|HiLLM-CD]] النماذج اللغوية الكبيرة لبناء شجرة المفاهيم الآلي واستنباط الكفاءة الهرمية، رابطًا التشخيص بالتتبّع. ويدفع [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati et al. (2026)]] هذا أبعد بتوزيع التشخيص عبر واجهات برمجية تجارية متعدّدة لنماذج لغوية كبيرة بخصوصية تفاضلية محلية ε، مُظهرين أن التشخيص الدقيق الحافظ للخصوصية مُمكن دون أن ترى أي نموذج بيانات طالب خام.
- **فصل التشخيص عن التغذية الراجعة مبدأ تصميمي.** يؤكّد مدرّسو النماذج اللغوية الكبيرة الخطوات الصحيحة بثقة لكنهم يرفضون الاستدلال الصحيح بفرط ويُصدّقون الأخطاء بفرط — والتشخيص الدقيق لا يُنتج [[feedback|تغذية راجعة]] قابلة للتنفيذ بثقة. لذا يجب أن يفصل تصميم أنظمة التدريس الذكي مكوّنًا تشخيصيًا عن مكوّن التغذية الراجعة/[[scaffolding]] ([[yasir-llm-tutoring-agents-2026]]).

## الارتباطات

يرتبط التشخيص المعرفي بـ[[knowledge-tracing]] و[[student-modeling]] و[[educational-measurement]] و[[assessment]]. وتُغذّى رؤاه [[intelligent-tutoring]] و[[adaptive-learning]]، ويربطه عمل عصر النماذج اللغوية الكبيرة بتحديد المفاهيم الخاطئة في [[intelligent-tutoring|التدريس الذكي]].

## المفاهيم المرتبطة

- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[student-modeling]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[assessment]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[automated-assessment]]
- [[learning-analytics]]

## المقالات المرتبطة

- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking LLMs for Diagnosing Cognitive Skills from Handwritten Math
- [[correct-answer-trap-misconceptions]] — The Correct Answer Trap
- [[llm-misconception-difficulty-easy-trap]] — The Easy Trap: Why LLMs Underestimate Misconception-Driven Difficulty
- [[llm-student-misconception-identification]] — LLM identification of student misconceptions
- [[student-math-competence-clustering]] — Clustering for Modeling Student Mathematical Competence
- [[moon-cognitive-agent-compilation-problem-solver-modeling-2026]] — Cognitive Agent Compilation for Explicit Problem Solver Modeling
- [[educlaw-bench-pedagogical-llm-agents-2026]] — EduClaw-Bench: diagnosing from simulated learners
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM concept trees + hierarchical proficiency inference
- [[yasir-llm-tutoring-agents-2026]] — Separating diagnosis from feedback in LLM tutors
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[personalized-neural-cognitive-architecture-search-2026]] — AutoML personalized neural cognitive architecture search for learner profiles
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Privacy-preserving heterogeneous multi-LLM federated diagnosis
- [[llm-common-modeling-mistakes-formalisms-2026]] — Mining common modeling mistakes at scale with LLM-generated, algorithmically validated bug-fixing transformations (Killich et al. 2026)
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: DINA-based diagnosis of 14 learning objectives from existing physics concept inventories (Le et al. 2026)
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — LLM knowledge-concept annotation and calibrated concept-level knowledge states
- [[llm-distractor-generation-student-reasoning-2026]] — misconception-based distractors as a diagnostic item-design task
- [[misconception-acquisition-dynamics-llms-2026]] — where the error enters the solution is the diagnostic bottleneck
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: An Agentic Tutor that Learns its Learner in a Human-AI Co-Learning Loop
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Open Foundation Models for Learning and Teaching
- [[culturally-embedded-ai-diagnostic-assessment-2026]] — إعادة التفكير في التقويم التشخيصي عبر ذكاء اصطناعي مدمج ثقافيًا من أجل تعلّم ذي معنى
