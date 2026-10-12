---
title: "معالجة اللغة الطبيعية التعليمية"
created: "2026-10-12T18:30:00-04:00"
type: concept
confidence: medium
technology: [educational-nlp, intelligent-tutoring, student-modeling, knowledge-tracing, adaptive-learning]
pedagogy: [scaffolding, socratic-method]
reviewed_by: [editor]
translation_of: concepts/educational-nlp
source_updated: "2026-10-09T09:25:11-04:00"
translation_note: "ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-12"
    agent: hermes-agent
---

*ترجمة آلية للصفحة الإنجليزية، لم يراجعها بعد متحدث أصلي.*

> **معالجة اللغة الطبيعية التعليمية** تُطبّق [[ai-technologies|تقنيات]] اللغة على التعلم: [[llm-item-difficulty-prediction]] و[[teaching-feedback-classification-benchmark]] و[[llm-sentiment-analysis-education-research]] و[[vocabulary-difficulty-prediction]] تُظهر النماذج اللغوية الكبيرة وهي تُقدّم تحليل لغة الطلاب على نطاق واسع ([[educational-measurement]]، educational-nlp).

## أسئلة يجب التفكر فيها

- عندما يحلل نموذج لغوي كبير آلاف المقالات أو منشورات المناقشات للطلاب بحثاً عن التأثر، ما الذي قد يُصيبه صحيحاً، وما الذي تشتبه في أنه يُخطئه بشأن لغة التعلم؟
- يمكن لمعالجة اللغة الطبيعية الآن أن تُقدّر صعوبة المفردات وبنود الاختبار، وأن تُصنّف [[teacher-role|التغذية الراجعة]] التعليمية على نطاق واسع. إذا تغذت تلك التنبؤات أنظمة تكيفية، فمن يتحقق من أن أحكام الآلة عن اللغة صحيحة فعلاً للمتعلّمين الذين يستخدمونها؟
- كيف يختلف تحليل لغة الطالب عن فهمها؟ أين قد يتبلد الخط بين الارتباط والبصيرة الحقيقية عندما تتوسع معالجة اللغة الطبيعية في تحليل التأثر والتغذية الراجعة؟
- يربط هذا المفهوم معالجة اللغة الطبيعية بالتدريس ونمذجة الطلاب والقياس. قبل القراءة، كم من «فهم طالب» تعتقد أنه يمكن التقاطه من لغته المكتوبة أو المنطوقة وحدها — وما الذي يُخلف؟

## مقدمة

### ما تفعله معالجة اللغة الطبيعية التعليمية

معالجة اللغة الطبيعية في التعليم تُطبّق مناهج حاسوبية على لغة التعليم والتعلم — مقالات الطلاب واستجاباتهم ومنشورات مناقشاتهم وتغذيتهم الراجعة والنص التعليمي. وسّعت [[llm|النماذج اللغوية الكبيرة]] ما يمكن تحليله آلياً بشكل هائل، مُتيحةً فهماً دقيقاً للغة الطلاب كان غير عملي على نطاق واسع سابقاً.

### التطبيقات الموثَّقة في قاعدة المعارف

- **تحليل لغة الطالب.** [[llm-sentiment-analysis-education-research]] يُطبّق تحليل التأثر القائم على النماذج اللغوية الكبيرة على البحث التعليمي، مستخلصاً إشارات وجدانية وتقييمية من نص الطلاب على نطاق واسع، مُغذياً [[learning-analytics]] و[[affective-computing]].
- **التنبؤ والقياس.** يستخدم [[llm-item-difficulty-prediction]] و[[vocabulary-difficulty-prediction]] نماذج اللغة لتقدير صعوبة البند والنص — مدخلات جوهرية لـ[[educational-measurement]] و[[adaptive-learning]] ونماذج [[item-response-theory]].
- **قابلية القراءة ومواءمة [[curriculum-design|المنهج]].** يدمج Bird (2026) تصنيف النص بالمُحوِّلات مع سمات اللغويات الحاسوبية ليصنّف الأدب الإنجليزي بحسب المرحلة الرئيسية في المملكة المتحدة، بليغ F1 = 0.996 — مكمّل قائم على البيانات لـ[[vocabulary-difficulty-prediction]] و[[llm-item-difficulty-prediction]] لـ[[educational-measurement]] ومواءمة مستوى القراءة.

- **التصنيف على مستوى الخطاب يُحدد ما تُخطئه السمات السطحية.** يصنّف نموذج BERT مُضبَّط على آخر أربع طبقات مُحوِّلات فقط أزواج الجمل المتجاورة كسببية أو تعارضية أو تقدمية أو غير متماسكة ويُصدر نقطة الانكسار كتشخيص، بليغ متوسط F1 لا يقل عن 0.891 على 28,736 زوج جمل ([[bert-discourse-english-teaching-2026|Wang et al., 2026]]).
- **نمذجة الدرس كاملاً تتفوق على تصنيف مستوى العبارة.** رفع تصحيح نصوص دروس كاملة بدل عبارات معزولة كشف سلاسل الاستدلال بمقدار 14.2 نقطة مئوية فوق خطوط أساس تمييزية على أحدث طراز، وأضافت إضافة هدف تبايني محيّد للّهجة خفضاً في السلبيات الكاذبة للإنجليزية العامية الأمريكية الأفريقية بمقدار 18.4 نقطة ([[nspa-neuro-symbolic-pedagogical-alignment-2026|Fang and Liu, 2026]]).
- **التغذية الراجعة والتصنيف.** يُوفر [[teaching-feedback-classification-benchmark]] [[benchmark]] لتصنيف التغذية الراجعة التعليمية، مُقدِّماً أبحاث [[feedback|حلقة التغذية الراجعة]] و[[llm-training-and-fine-tuning]].
- **توسيع معالجة اللغة الطبيعية على تعليقات التقييم دون الوصول إلى الاستخدام.** مراجعة نطاق بـPRISMA-ScR وخريطة دليل لـ421 دراسة تُطبّق معالجة اللغة الطبيعية على تقييم الطلاب المفتوح النهاية للتعليم (2015–2026) تجد أن تحليل التأثر ما زال المهمة السائدة (300/421، 71.3%) وعدم استمرارية في قابلية التنفيذ بمقدار 49.7 نقطة: أظهرت 258 دراسة (61.3%) مخرجاً قابلاً للاستخدام لكن 49 فقط (11.6%) وصلت إلى تقييم من مستخدم مقصود، مع مقياس إنصاف نظامي في 8 دراسات فقط (1.9%) وتحقق خارجي في 33 (7.8%) ([[nlp-student-evaluation-teaching-scoping-review-2026|Eicher & da Silva (2026)]]).
- **التفسيرات غير قابلة للتبادل مع الإسنادات.** [[shap-llm-rationales-teaching-quality-assessment|Bueno et al. (2026)]] وجدوا أن إسنادات SHAP حددت الجمل التي دفعت درجات المعيار المرجعي بموثوقية وانتقلت عبر عائلات النماذج، في حين مارست التبريرات المُولَّدة بالنماذج اللغوية الكبيرة تأثيراً محدوداً وغير متسق — مع أن نماذج PLM المُضبوطة تفوقت على النماذج اللغوية الكبيرة المُحفَّزة في الدقة.
- **تقويم الإجابة القصيرة في العلوم.** تُظهر [[meta-analysis-systematic-review|مراجعة النطاق]] لمورلي وزملائه للتصحيح الآلي القائم على المُحوِّلات لأسئلة العلوم قصيرة الإجابة (2017–أوائل 2024) أن نماذج عائلة BERT صارت الحصان العام السائد للمجال في [[automated-assessment|تصحيح النص الحر]] قبل أن تُعتمد [[llm|النماذج اللغوية الكبيرة]] الأكبر عبر [[prompt-engineering|التحفيز]]، وأن النماذج المعزَّزة بمعرفة المجال — تدريب مسبق إضافي، أو بيانات معايير مرجعية أو كتب مدرسية، أو تعلُّم فوقي — تفوقت باستمرار على غيرها ([[auto-marking-short-answer-science-2026]]).
- **الحساسية للسياق مقابل المطابقة المرجعية في تصحيح الاستجابة المفتوحة.** بمعايرة أحد عشر نموذج [[generative-ai|ذكاء اصطناعي توليدي]] ونموذج تضمين جمل على 1,885 جواباً مفتوحاً في هندسة البرمجيات، يُظهر [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]] أن [[llm|النماذج اللغوية الكبيرة]] الحساسة للسياق (GPTo1 الأفضل، اتفاق بشري شبه مثالي) تتفوق على النماذج المرجعية القائمة على تشابه جيب التمام (BERT، RoBERTa، T5، USE)، التي صنّفت خطأً بشكل منهجي الاستجابات الصحيحة المختلفة الصياغة. كشف تحليل NLI أن كثيراً من الأجوبة الصحيحة دلالياً وقعت في فئة *التناقض* نسبةً للأجوبة المرجعية — دليل على أن تصحيح معالجة اللغة الطبيعية التعليمية يجب أن يستوعب صياغات الطلاب القصيرة والمتنوعة وبكلماتهم بدل الموائمة المرجعية الجامدة. يتشحذ ذلك التباين بشأن معرفة المدرِّس: بتشفير استجابات 268 مدرس رياضيات أمريكياً في [[k-12|المرحلة المتوسطة]] المفتوحة النهاية، توقف كلٌّ من المُرمِّزات التقليدية (RoBERTa، Sentence-BERT) ونموذج GPT-4o أحادي التحفيز الساذج بدرجة أدنى بكثير من المشفّرين البشريين في معرفة المحتوى [[pedagogy|التربوي]] (PCK)، في حين بلغ تجهيز نموذج لغوي كبير ثلاثي الوكلاء الذي أضاف نقاط توضيح تكراراً إلى *دليل التشفير البشري* اتفاقاً جوهرياً في PCK واتفاقاً شبه بشري في بنود معرفة المحتوى الأكثر قابلية للمعالجة بكثير — والموثوقية آتية من صقل التعليمات مقابل الخلافات الحقيقية، لا من نموذج أكبر، مع بقاء بنود الاستدلال التعليمي الأكثر تعقيداً راغبةً في [[human-in-the-loop-ai|مراجعة الخبراء]] ([[llm-automated-coding-teacher-pck-2026|Copur-Gencturk et al., 2026]]).
- **تصنيف الأسئلة المولَّدة من المتعلّمين.** يُصنّف [[lee-learner-question-types-ai-education-2026|Lee, Atif & Kang (2026)]] 434 سؤالاً أصيلاً من متعلّمين من 11 طالباً في تقنية المعلومات عبر 12 مقرراً في ثلاثة أدوار تعليمية [[constructivist]] — ناقل معرفة، ومُيسِّر، ومتعلّم مشارك — ويعايرون أربعة مُحوِّلات على المهمة. تصدّر DeBERTa بدقة 86.36% (F1 86.52%) بدقة 96.67% في أسئلة ناقل المعرفة الواقعية، لكنه بدقة 78.79% فقط في استفسارات المُيسِّر؛ وبلغ BERT المُضبَّط أفضل استرجاع للمتعلّم المشارك (92.00%) بدقة أدنى. تعكس النتيجة نمط المجال المتكرر أن الدرجات الإجمالية القوية تُقنّع تمييزاً ضعيفاً في الفئات الأعلى رتبةً: التداخل المفاهيمي بين الأدوار، وقصد المتعلّم الملتبس، والصياغة التقنية الخاصة بالمجال المقروءة خطأً كعمق معرفي كلها تهزم السمات المعجمية السطحية، مُجادلةً لتضمينات واعية بالسياق وإشارات حوار متعدد الأدوار وسمات حساسة للقصد ([[cross-dataset-bloom-question-classification]]، [[llm-educational-question-cognitive-depth]]).
- **مُصنِّفات التصنيف تفقد معظم دقتها على المحتوى المولَّد.** مُصنِّف بمستوى بلوم يُصحّح macro-F1 = 0.88 على بنك بنود مُنتقى هبط إلى 0.48 و0.20 عبر مجموعتي أسئلة مولَّدتين بالذكاء الاصطناعي، مع تتبع الخسارة لغياب أفعال محفّزة صريحة لبلوم لا لحجم النموذج؛ ولم يصمد سوى [[llm|النماذج اللغوية الكبيرة]] (0.41 إلى 0.79) والمُصنِّفات المُعاد تدريبها على بنود مولَّدة (حتى 0.82) ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).
- **انتقاء البيانات على نطاق المجموعة لبيانات التدريب المسبق.** [[garrod-edu-qurating-educational-data-curation-2026|Garrod et al. (2026)]] يُحلون درجة «هل هذا تعليمي؟» واحدة بعشرين بعداً لمعيار مرجعي قابل للفحص — الدقة الواقعية، والبنية البيداغوجية، وملاءمة المستوى، ومعايير الثقافة الأساسية بينها — ويقطّرون تفضيلات GPT-4.1-mini المزدوجة إلى مُقيِّمين تعليميين قابلين لإعادة الاستخدام (Edu-QuRaters) يستعيدون تفضيلات القاضي المحجوزة بدقة متوسطة 0.917، ثم يوسمون كل 322.25 مليون صف من FineWeb-Edu-Fortified، حيث رفعت الخلائط المُرشَّحة دقة [[benchmark|المعايرة المرجعية]] المصبّية فوق خط الأساس FineWeb-Edu. إنه يضع دوراً لمعالجة اللغة الطبيعية التعليمية أبعد من تحليل اللغة التي يُنتجها المتعلّمون: فحص النص التعليمي الذي تُدرَّب عليه نماذج أخرى.
- **التشفير القابل للتدقيق بالفصل بين التأكيد والتأويل.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado et al. (2026)]] يُحلون التحفيز أحادي التسمية بمخطط من 221 تأكيداً مقروءاً للبشر - 74 مستخلصة من المجموعة، و48 مستخلصة من البناء، و100 فحص آلي لوجود الكلمات - يُخطط مُصنِّف شفاف لوسم البناء، بليغ macro-F1 = 0.673 وكابا كوهين 0.688 على مجموعة خطاب المدرِّسين TalkMoves مقابل حد أقصى منشور للتحفيز المباشر قدر macro-F1 = 0.61 و0.58 كابا، مع أنه متأخر عن مُصنِّف RoBERTa-base المُضبَّط عند 0.76. حافظ اشتراط ألفا كرينبندورف ≥ 0.5 على 33 فقط من 74 تأكيداً مستخلصاً من المجموعة، وسجّل خط أساس بالكلمات وحدها macro-F1 = 0.339، فالمكسب آتٍ من تأكيدات سلوكية متعلَّمة لا من تكرار الكلمات المفتاحية.
- **وسم المفاهيم على نطاق واسع.** [[srjudge-knowledge-concept-tagging-2026|Yang et al. (2026)]] يقسمون وسم مفاهيم المعرفة إلى خط أنابيب اختيار–استدلال–حكم — نموذج صغير يُدرج قائمة مختصرة من المفاهيم المرشحة، والنموذج اللغوي الكبير يستدل على القائمة المختصرة، ثم يحكم — رافعاً دقة الوسم على ثلاث معايير مرجعية بتقليص فضاء قرار النموذج.

### الارتباط بالتدريس والقياس

تُسنِد معالجة اللغة الطبيعية التعليمية كلاً من تحليل لغة المتعلّم ([[student-modeling]]، [[knowledge-tracing]]) وتوليد المحتوى التعليمي التكيفي ([[intelligent-tutoring]]، [[scaffolding]]). [[ai-generated-interactive-fiction-education-2026]] يُظهر توليد المحتوى المدفوع بمعالجة اللغة الطبيعية للتعلم، في حين يضع [[zerkouk-comprehensive-review-its-2025]] معالجة اللغة الطبيعية داخل مناظر [[intelligent-tutoring]] الأوسع. مع نمو التحليل القائم على النماذج اللغوية الكبيرة، تُهم أطر [[rct]] و[[research-methods-aied]] للتحقق من أن البصائر المستخلصة من معالجة اللغة الطبيعية تُحسّن التعلم حقاً.

انضغاط النماذج ينتمي إلى صندوق الأدوات نفسه: يقطر خط أنابيب من مرحلتين مُقدِّراً صندوقاً أسود مُلائماً وتأويله اللاحق إلى نموذج صغير مفتوح الوزن، فيُرجع نموذج «مُوجَّه» بـ2 مليار بارامتر تقديراً وتفسيراً باللغة الطبيعية دون اتصال على حاسوب محمول تجاري ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## المفاهيم المرتبطة

- [[intelligent-tutoring]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[socratic-method]]
- [[scaffolding]]
- [[adaptive-learning]]
- [[llm-training-and-fine-tuning]]
- [[metacognition]]
- [[rct]]
- [[learning-analytics]]
- [[educational-policy-ai]]
- [[ai-technologies]] — مظلة: تقنيات وتقنيات الذكاء الاصطناعي (النماذج، وتدريب النماذج اللغوية الكبيرة، والروبوتية، وRAG، والوكالية)

## المقالات المرتبطة
- [[lee-learner-question-types-ai-education-2026]] — Transformer classification of learner questions into constructivist roles (Lee, Atif & Kang 2026)
- [[bert-discourse-english-teaching-2026]] — Automatic discourse relation classification with BERT for English teaching
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — The StudyChat dataset of student–LLM dialogues in an AI course
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Neuro-symbolic pedagogical alignment (NSPA)
- [[ai-generated-interactive-fiction-education-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[shap-llm-rationales-teaching-quality-assessment]] — SHAP and LLM rationales for rubric-based teaching quality
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[auto-marking-short-answer-science-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[llm-automated-coding-teacher-pck-2026]] — Multi-agent LLM (GradeOpt) codes teachers' content and pedagogical content knowledge; classical encoders and naive prompting fall short on PCK
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[srjudge-knowledge-concept-tagging-2026]] — SRJudge: selective-reasoning pipeline for fine-grained knowledge concept tagging
