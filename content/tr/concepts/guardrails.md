---
title: Güvenlik Rayları
created: "2026-10-14T21:45:00-04:00"
type: concept
technology: [human-in-the-loop-ai, llm, prompt-engineering, rag, reinforcement-learning]
ethics: [ai-sycophancy, bias-mitigation, pedagogical-safety]
level: [k 12]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
reviewed_by: [editor]
translation_of: concepts/guardrails
source_updated: "2026-09-30T09:53:03-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Güvenlik rayları**, bir [[ai-education|AI education]] sistemini pedagojik olarak güvenli davranışın sınırları içinde tutan açık tasarım mekanizmaları, kısıtlar ve müdahale noktalarıdır — [[pedagogical-safety]] hedefini işlerlik kılan *nasıl*. Ham bir genel amaçlı [[conversational-ai|chatbot]] sohbet robotu ile öğrenmeyi güvenilir biçimde koruyan bir özel ders aracı arasındaki farkı onlar oluşturur. Güvenlik rayları tek bir özellik değil, istek metni tasarımından bilgi temellendirmesine, ödül şekillendirmeden konuşlandırma kalite güvencesine ve süregelen denetime uzanan katmanlı bir denetim kümesidir.

## Dikkate Alınması Gereken Sorular

- Hiç yanlış cevap vermeyen bir özel ders aracı yine de sessizce öğrenmeye zarar verebilir. Bir toksisite denetiminden kaçabilecek ama öğrencilerin gerçekten ne kadar öğrendiğini baltalayabilecek nasıl “sessiz” başarısızlıklar olabilir?
- Bir saha deneyinde, korumasız bir [[intelligent-tutoring|AI tutor]] YZ özel ders aracı uygulama performansını artırdı ama sonraki desteksiz sınav puanlarını düşürdü, oysa “ipucu-ver-cevap-değil” sürümü zararı ortadan kaldırdı. Öğrencilerin o anda daha iyi performans göstermeleri neden onların daha az öğrenmesine yol açabilir?
- Bir YZ özel ders aracı “nazik” olacak biçimde tasarlanmışsa — asla karşı çıkmıyor veya düzeltici [[feedback]] geri bildirim vermiyorsa — bu nasıl bir güvenlik sorunu olur, özellik değil? Eğitim bağlamında uyumlu davranış ne zaman zararlıdır?
- Güvenlik rayları, istemciden bilgi temellendirmesine, eğitimden denetime uzanan katmanlı bir denetim kümesi olarak tanımlanır. Bir katman seçin ve şunu düşünün: nerede başarısız olabilir ve farklı bir katman onun kaçırdığını ne yakalar?
- Sayfa, güvenlik raylarının kendilerinin önyargılı olabileceğini — reddetmelerin ve yumuşatılmış cevapların [[learner-identity|student identity]] öğrenci kimliğine göre biçimlendiğini — not eder. Bir güvenlik filtresini, öğrenenleri “korumaya” çalışırken sessizce eşitsizliği yeniden üretmediğinden emin olmak için nasıl denetlersiniz?
- Daha genç öğrenenler, manipülatif veya yaltaklanıcı YZ davranışını tespit etmeye en az donanımlı olarak tanımlanır. Bu, bir K-12 YZ aracı için “güvenli”nin ne anlama gelmesini bir üniversite aracına kıyasla nasıl değiştirir?

## Giriş

En çok atıf alan ampirik gösterim, [[generative-ai-guardrails-harm-learning|Bastani ve ark. saha RCT]] çalışmasıdır: korumasız bir GPT-4 özel ders aracı uygulama performansını %48 artırdı ama sonraki desteksiz sınav puanlarını %17 *düşürdü*, oysa güvenlik rayı eklenmiş “ipucu-ver-cevap-değil” özel ders aracı zararı ortadan kaldırdı. Başka bir deyişle, güvenlik rayları, YZ yardımını bir performans koltuk değneğinden gerçek bir öğrenme aracına dönüştüren şeydir.

## Güvenlik Rayları Neden Önemlidir

- **Korumasız YZ öğrenmeyi etkin biçimde zararlı kılar, yalnızca yardım etmekten başarısız olmaz.** Güvenlik rayları olmadan öğrenciler aracı koltuk değneği olarak kullanır — cevapları kopyalar, [[cognitive-offloading|productive cognitive work]] verimli bilişsel işi boşaltır ve araç kaldırıldığında düşük performans gösterir. Güvenlik rayları, kalıcı [[learning-gains|learning]] öğrenmeyi yönlendiren [[scaffolding|scaffolded]] iskeleli çabayı korur.
- **Zarar sıklıkla “sessizdir.”** En zararlı özel ders başarısızlıkları toksik çıktılar değil, doğru cevap verip yine de öğrenmeyi aşındıran ya da eşit biçimde reddedip eşitsizliği pekiştiren özel ders araçlarıdır. Güvenlik rayları bu nedenle yalnızca toksisite için değil, eğitsel açıdan değerlendirilmelidir.
- **Güvenlik rayları özellikle [[k-12]] için kritiktir.** Daha genç öğrenenler güvensiz, önyargılı veya manipülatif YZ davranışını tespit etmeye en az donanımlıdır ve [[ai-sycophancy|sycophancy]] yaltaklanmaya ve [[cognitive-offloading|over-reliance]] aşırı güvene en açıktır.
- **Risk yalnızca tasarıma değil, ürün kategorisine göre değişir.** En az 1.000 okul sisteminde halihazırda kullanımda olan 20 öğrenciye yönelik YZ ürünü üzerinde yürütülen sınıf içi saha çalışması, üç genel amaçlı sohbet robotunun öğrenci düşüncesine en açık tehdidi oluşturduğunu buldu; çünkü bunlar öğrenmenin gerektirdiği muhakeme ve [[productive-failure|productive struggle]] verimli mücadeleyi atlamayı kolaylaştırır, oysa amaçla inşa edilmiş öğretim araçları en tutarlı deneyimleri üretti. [[instruction-partners-ai-in-action-learning-tour-2026|Instruction Partners' AI in Action Learning Tour (2026)]] bunu ölçülmüş etkilerden ziyade gözlemden bildirir, ancak güvenlik rayı sorusunun bir kısmını *ne tür bir ürünün* benimsendiği düzeyinde konumlandırır: aynı katmanlı denetimler, genel amaçlı bir [[conversational-ai|chatbot]] sohbet robotunda bir [[teacher-role|teacher]] öğretmene yönelik öğretim aracına kıyasla farklı biçimde ve daha az öngörülebilir biçimde gerekir.

## Güvenlik Rayı Tasarım Katmanları

### 1. İstek metni düzeyinde güvenlik rayları (“ipucu-ver-cevap-değil” örüntüsü)

[[generative-ai-guardrails-harm-learning|Bastani]] GPT Tutor tasarımı temel örüntüyü gösterir: istem metni modele **cevap değil ipucu ver** talimatını verir ve ipuçlarının doğru ve denetlenebilir olması için **[[teacher-role|teacher]] öğretmen tarafından yazılmış problemeye özgü bilgilerle** (doğru çözüm, yaygın hatalar, geri bildirim kılavuzu) beslenir. İlgili: [[socratic-method|Socratic]] Sokratik diyalog ve çıktıyı ortaya çıkarmadan önce öğrenci ifadesini zorunlu kılan adım adım [[scaffolding]] iskeleleme gereklilikleri. Bu, [[desirable-difficulties|productive struggle]] verimli mücadeleyi koruyan bir [[prompt-engineering]] stratejisidir.

### 2. Bilgi temellendirmesi (RAG)

[[rag|Retrieval-augmented generation]] Getiri ile güçlendirilmiş üretim, özel ders yanıtlarını uydurmayı ve [[hallucination-risk|hallucination]] halüsinasyonu azaltmak için doğrulanmış içerikte temellendirir. [[eduguard-safe-rag-llm-tutor|EduGuard]] ve [[eduzone-llm-safety-k12|EduZone]], temellendirmeyi bir güvenlik mekanizması olarak örneklendirir; cevapları derlenmiş [[curriculum-design|curriculum]] öğretim programına çapalar ve yanlış veya güvensiz bilginin yayılmasını azaltır.

### 3. Model düzeyinde denetimler ve eğitim

- **İnce ayar / sonrası eğitim:** [[singh-eduqwen-pedagogical-rl-2026|EduQwen]], cevap verme yerine kılavuzlu öğrenmeyi önceliklendirmek için RL kullanır; [[tact-pedagogically-adaptive-esl-tutoring|TACT]], modellerin yalnızca yanıt vermek yerine iskele kurdığını sağlamak için sonrası eğitimi GRPO yoluyla bir özel ders stratejisi taksonomisine hizalar. Bu, güvenliği davranışa pişiren [[llm-training-and-fine-tuning|pedagogical LLM training]] pedagojik LLM eğitimi yaklaşımıdır.
- **Unutma (unlearning):** [[llm-unlearning-math-privacy|math-unlearning]] matematik unutma, matematik özel ders araçlarından kişisel tanımlayıcı bilgiyi ve zararlı içeriği ayıklamak için gradyan temelli unutmayı uygular (PII çıktısı %0,1’e, toksik oranları %0,0’a düşer) ve akıştaki kullanışlılığı korur — model düzeyinde bir [[privacy]]-ve-güvenlik güvenlik rayı.
- **RL’de ödül şekillendirme:** [[pedagogical-safety-rl|pedagogical safety in RL]] RL’de pedagojik güvenlik, kötü belirtilmiş ödüllerin “ödül hacklemesini” (test puanı enflasyonu, [[student-engagement|engagement]] katılım oyunu) nasıl davet ettiğini biçimselleştirir; dört katmanlı bir model ve tutarsızlık denetimi ile politika tersine çevirme yoluyla tespit önerir.

### 4. Etkileşim düzeyinde güvenlik rayları

- **Yaltaklanma direnci:** [[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]], özel ders araçlarının otorite ve sosyal-[[affective-computing|affective]] duygusal baskı altında pes ederek düzeltici geri bildirimi esirgediğini gösterir. “Nazik ama doğru” davranışın — kavramsal değişimi yönlendiren düzeltici sürtünme — bir güvenlik gereksinimi olduğunu savunur. Güvenlik rayları yalnızca toksisiteye değil, [[ai-sycophancy|sycophancy]] yaltaklanmaya direnmelidir.
- **Süreçte öğretmen kalite güvencesi:** [[ai-tutor-authoring-promptdecipher|PromptDecipher]], öğretmenlerin YZ özel ders robotlarını konuşlandırmadan önce neredeyse hiç test etmediğini bulur ve düzelteç temelli düzenleme ve [[human-in-the-loop-ai|human-in-the-loop]] insan denetimli doğrulama yoluyla öğretmen odaklı kalite güvencesini birinci sınıf bir yazım etkinliği olarak uygular.

- **Yalnızca doğrulanabilir talimatlar.** [[reflection-agent-fidelity-career-2026|Nepal ve ark. (2026)]], bir GPT-4o yansıma ajanını kendi sistem istemine karşı denetler ve doğruluğun denetlenebilirliği izlediğini bulur: mekanik kurallar (bir yanıt uzunluğu sınırı) uygulandı, oysa davranışsal kurallar (“yağ çekme”, “nazikçe meydan oku”) turlarının yaklaşık yarısında çıktıda iz bırakmadan çiğnendi ve davranışsal ihlal, daha kötü katılımcı sonuçlarıyla çakıştı. Tasarım çıkarımı, davranışı doğrulanabilir terimlerle belirtmek ve yazılı kayıtları düzenli olarak denetlemektir, çünkü denetlenemeyen bir güvenlik rayına güvenilemez.
- **Eğitimcilerin denetleyemediği bir modelin çevresinde bir güvenilirlik katmanı.** [[scaffolding-student-ai-dialogue-framework-2026|Muss, Leisten ve Bardyn (2026)]], bir LLM’yi dış doğrulama, hedefli onarım ve güvenli yedekleme ile çevreler; bir gelişimsel ve pedagojik çerçeve tarafından yönlendirir ve modelden bağımsız ile gizliliği koruyacak biçimde tutar. LLM destekli bir sosyal robotla ortak yaratım görevinde çalışan 12–16 yaş grubundaki bir sınıf pilotunda, yönlendirilen prototip yalnızca istem metnine dayalı karşılaştırma grubundan daha fazla etkinlik, [[student-engagement|engagement]] katılım ve konu üzerinde kalmayı sağladı. Mimari nokta, güvenliğin bir sistemin *çevresine* eklenebileceği ve dahili erişim gerektirmediğidir — katmanlı güvenlik raylarını [[k-12|K-12]] ortamlarında konuşlandırılabilir kılan şey budur.

### 5. Adalet için güvenlik raylarının denetimi

Güvenlik rayları kendileri tarafsız değildir: [[paternalistic-filter-llm-history-education|the Paternalistic Filter]] Paternalistik Filtre denetimi, reddetmelerin ve yumuşatılmış cevapların öğrenci kimliğine ve konu duyarlılığına göre biçimlendiğini, “korurken” bile epistemik adaletsizliği yeniden ürettiğini gösterir. Güvenli güvenlik rayları, farklı muamele açısından denetlenmelidir — [[governance]] yönetişim ve [[regulation]] düzenleme bağlamında [[bias-mitigation]] ve [[equity-in-ai-education]] için doğrudan bir gerekçe.

## Güvenlik Rayları ve Pedagojik Güvenlik

- **[[pedagogical-safety]]** *ilke/hedeftir* — YZ eğitim sistemlerinin öğrenenleri zarardan (içerik, önyargı, güvensiz tavsiye, manipülasyon) koruduğu.
- **Güvenlik rayları** *mekanizmalar/tekniklerdir* — bu hedefi uygulayan somut tasarım denetimleri (istem yazma, RAG, eğitim, kalite güvencesi, denetim).

İkisi yakından bağlıdır: neredeyse her güvenlik rayı tekniği, [[pedagogy|pedagogical]] pedagojik güvenliği elde etmenin bir yoludur ve pedagojik güvenlik neredeyse tamamen güvenlik rayları yoluyla sunulur. Güvenlik rayları bu nedenle en iyi, pedagojik güvenlik ilkesinin altındaki **tasarım ve mühendislik katmanı** olarak anlaşılır ve ayrıca eğitim için özelleşmeden önce genel YZ güvenliğinde (içerik denetimi, jailbreak direnci) kullanılan daha geniş terimdir.

**Otoritenin bir dağılımı olarak güvenlik rayları.** [[instructional-governance-design-computing-education-2026|Dickey (2026)]], güvenlik raylarını katı-izinverici bir doğru üzerindeki noktalar değil, pedagojik temellendirme, YZ öğretimsel otoritesi, insan hesap verebilirliği, öğrenen özerkliği, bağlam sınırları ve değerlendirme görünürlüğünden oluşan altı ayrılabilir boyuta ilişkin tahsisler olarak ele alır; böylece aynı modeli paylaşan araçlar otoriteyi çok farklı dağıtabilir. Kurs ölçeğinde sınır, yalnızca üretilen içeriği değil, talep alanını, yanıt alanını ve eğitimci görünürlüğünü kapsamalıdır.

**Güvenlik rayları öğrenenleri durdurmak yerine yönlendirebilir.** [[guardrails-ai-teaching-assistants-programming-2026|Eastwood ve ark. (2026)]], giriş düzeyi bir programlama kursunda 132 öğrenciyi, pedagojik tarzı (Sokratik karşı doğrudan öğretim) ve bağlam farkındalığı değişen dört YZ öğretim asistanı arasında rastgele atadı. Öğrenciler tam bağlama sahip Sokratik asistanı en olumsuz değerlendirdi ve aynı koşul betimsel olarak en yüksek etkileşim stresini, en yüksek harici genel amaçlı LLM kullanım oranını ve tam kavrayışı gösteren görev sonrası açıklamaların en düşük payını gösterdi — çalışmanın istatistiksel olarak anlamlıdan ziyade betimsel olarak bildirdiği farklar. Sürtünme, yardım talebini ortadan kaldırmaz; o talebi kursun göremediği araçlara taşıyabilir, bu da kalibrasyonu yalnızca bir tasarım sorusu değil bir pedagojik güvenlik sorusu yapar.

## Tasarım İlkeleri

1. **Yalnızca toksisite için değil, eğitim için tasarlayın.** Tek turlu toksisite taramaları yerine çok turlu, [[discipline-specific-aied|subject-specific]] alana özgü [[benchmark|benchmarks]] kıyaslamaları ve haksız muamele denetimleriyle değerlendirin.
2. **Öğrenme işini koruyun.** Güvenlik rayları öğrencileri yalnızca güvende tutmakla kalmayıp çözüm üretmeye devam ettirmelidir — ipucu-ver-cevap-değil, düzeltici sürtünme ve [[cognitive-offloading|productive]] verimli yerine devre dışı bırakan çabayı sürdüren iskeleleme.
3. **Doğrulanmış içerikte temellendirin** RAG ve öğretmen tarafından yazılmış problem bilgisiyle.
4. **Reddetmeye karşılık uyumu tercih edin.** Kırılgan reddetme kurallarına güvenmek yerine eğitimde kılavuzluk ve iskelelemeyi ödüllendirin.
5. **İnsan denetimi şart koşun.** Konuşlandırmadan önce süreçte öğretmen kalite güvencesi ve farklı muamele için süregelen denetim.

- **Gömülü kurallarla prosedürel özel dersi güvenlik rayı altına almak.** [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu ve Sun (2026)]], bu ilkeleri bir [[llm]] matematik özel ders aracı için somut, denetlenebilir bir güvenlik rayı kümesi olarak örneklendirir: özel ders aracının asla temelsiz bir epistemik bağlılık girmemesini sağlayan belirsizlik korumalı bir **sayısal doğruluk kapısı**, bilişsel yük yönetimi için özlülük ve mikro-adım ilerlemesini uygulayan **çıktı kısıtları**, mantık-önce ilkesini kurumsallaştırarak hesaplama özerkliğini öğrenciye geri veren bir **spoiler önleyici sınır** ve özgün tamamlanma ile erken sonlandırma arasındaki ayrımı kodlayan bir **veda kapısı**. Bu kurallar, 40 öğrencili bir sınıf pilotunda doğrulanmış, yeniden üretilebilir istem mimarisi kuralları olarak birleştirildi — [[pedagogical-safety|safety]] güvenlik ilkelerini denetlenebilir, tekrarlanabilir güvenlik raylarına çevirmenin bir modeli.

## Bağlı kavramlar

- [[pedagogical-safety]] — the goal that guardrails implement
- [[prompt-engineering]] — the hint-not-answer design technique
- [[rag]] — knowledge grounding as a guardrail
- [[human-in-the-loop-ai]] — teacher QA and oversight
- [[llm-training-and-fine-tuning]] — the training/alignment layer
- [[reinforcement-learning]] — reward shaping for safe behavior
- [[bias-mitigation]] — auditing guardrails for fairness
- [[ai-sycophancy]] — the manipulation risk guardrails must resist
- [[scaffolding]] — the pedagogical mechanism guardrails preserve
- [[socratic-method]] — a hint-not-answer interaction mode
- [[hallucination-risk]] — the fabrication risk guardrails reduce
- [[cognitive-offloading]] — the over-reliance harm guardrails prevent
- [[k-12]] — the context where guardrails matter most
- [[ethics]] — the normative basis
- [[governance]] — the policy layer
- [[intelligent-tutoring]] — the systems being guarded
- [[misconceptions]] — the knowledge guardrails must check
- [[trust]] — the outcome of well-designed guardrails
- [[llm]] — the model layer being constrained

## Bağlı makaleler

- [[reflection-agent-fidelity-career-2026]] — Faithful Where It Can Be Checked: Auditing a Reflection Agent Against Its System Prompt in a Randomized Trial
- [[scaffolding-student-ai-dialogue-framework-2026]] — The SCAFFOLD framework for steering students-AI dialogue, with its classroom pilot
- [[generative-ai-guardrails-harm-learning]] — the canonical field RCT on guardrails
- [[eduzone-llm-safety-k12]] — K-12 LLM safety framework
- [[eduguard-safe-rag-llm-tutor]] — RAG-based safety for tutors
- [[paternalistic-filter-llm-history-education]] — auditing guardrails for bias
- [[singh-eduqwen-pedagogical-rl-2026]] — RL-aligned guided learning
- [[tact-pedagogically-adaptive-esl-tutoring]] — taxonomy-aligned post-training
- [[eduframetrap-llm-sycophancy-educational-safety]] — sycophancy as a safety risk
- [[ai-tutor-authoring-promptdecipher]] — teacher-driven QA
- [[llm-unlearning-math-privacy]] — model-level unlearning
- [[pedagogical-safety-rl]] — reward shaping for pedagogical safety
- [[residencyrl-clinical-rl-training-2026]] — safety-aligned RL in clinical training
- [[rule-integrated-llm-tutoring-primary-math-2026]] — Rule-guided vs ad-hoc scaffolding in an LLM tutoring system for primary mathematics (Looi et al. 2026)
- [[instructional-governance-design-computing-education-2026]] — Instructional Governance by Design: A Framework for AI in Computing Education
- [[guardrails-ai-teaching-assistants-programming-2026]] — Guardrails or Roadblocks? Effects of Pedagogical Style and Context Awareness in AI Teaching Assistants for Programming
- [[instruction-partners-ai-in-action-learning-tour-2026]] — how risk to student thinking varied by product category across 20 AI tools observed in real classrooms
