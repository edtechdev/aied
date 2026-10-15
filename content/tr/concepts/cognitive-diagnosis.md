---
title: Bilişsel Tanılama
created: "2026-10-14T21:38:00-04:00"
type: concept
technology: [intelligent-tutoring, knowledge-tracing, learning-analytics, student-modeling]
assessment: [assessment, educational-measurement, psychometrically-aware-ai]
confidence: high
reviewed_by: [editor]
translation_of: concepts/cognitive-diagnosis
source_updated: "2026-10-15T10:00:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Bilişsel tanılama** — bir öğrenenin gizli bilgi durumunun, yani sahip olduğu veya edinemediği özel kavramların, becerilerin ve yanlış kanıların, yanıtlarından veya davranışından çıkarımsal olarak belirlenmesi. Bilişsel tanılama, [[knowledge-tracing]]nin değerlendirme tarafındaki karşılığıdır ve yalnızca öğrencinin bir sonraki performansını tahmin etmekten ziyade *neyi* bildiğini karakterize etmeye odaklanır.

## Düşünülmesi Gereken Sorular

- Bilişsel tanılama, yalnızca bir sonraki puanını tahmin etmek yerine, bir öğrenenin gizli bilgi durumunu — sahip olduğu veya edinemediği özel kavramları, becerileri ve yanlış kanıları — yanıtlarından çıkarımsal olarak belirler. Okumadan önce: “bir öğrencinin notunu tahmin etmek” ile “gerçekte neyi anlamadığını tanılamak” arasında nasıl bir fark beklerdiniz?
- Temel fikirlerden biri “doğru cevap tuzağı”dır — doğru bir cevabın kusurlu muhakemeyi gizlediği durum. Hiç bir öğrencinin bir konuyu anladığına, doğru cevap verdiği için emin oldunuz, sonra altında bir yanlış kanı keşfettiniz mi? Bir puanın fark edemediği yerde bir tanılama bunu nasıl ortaya çıkarabilir?
- Sayfa, bilişsel tanılamayı (bir öğrenenin o an taşıdığı bilginin statik, ince ayarlı bir fotoğrafı) bilgi izlemeden (zaman içinde ustalığın geçici dinamiği) ayırır. Bir akıllı ders sisteminin neden ikisine birden ihtiyacı vardır — neyin yanlış olduğunu bilmek ve sırada neyi öğreteceğini bilmek için?
- Buradaki bir tasarım ilkesi, tanılamayı geri bildirimden ayırmaktır: LLM ders sistemleri doğru adımları onaylar ama geçerli muhakemeyi aşırı reddeder ve hataları aşırı doğrular; doğru tanılama güvenilir biçimde uygulanabilir bir geri bildirim üretmez. Neyin yanlış olduğunu bilmek neden hâlâ yardımcı bir sonraki adım üretmekte başarısız olabilir?
- LLM çağı tanılaması, çoktan seçmeli işlerden açık uçlu, el yazısı ve konuşma temelli çalışmalara uzanır. Bir YZ, tam olarak anlayamadığı bir çalışmadan bir yanlış kanı teşhis ederse ne ters gidebilir — ve tanılamanın kendisinin güvenilir olduğunu nasıl doğrulardınız?

## Giriş

Bilgi izleme tipik olarak zaman içinde tek bir ölçekli ustalık değeri tahmin ederken, bilişsel tanılama daha ayrıntılı bir profil üretir: hangi bilgi bileşenlerinin öğrenildiği, hangilerinin kırılgan olduğu ve hangi yanlış kanıların mevcut olduğu. Bu profil, [[personalized-learning]], [[intelligent-tutoring]] ve [[adaptive-learning]] için temel oluşturur.

### Bilişsel tanılama nasıl çalışır

- **Tanılayıcı modeller:** doğru ve yanlış yanıt kalıplarından gizli beceri durumlarını çıkarımsal olarak belirleyen psikometrik modeller (genellikle [[item-response-theory]] ve [[educational-measurement]] altında), bazen maddeleri birden fazla bilgi bileşenine eşleyen bilişsel tanılama modelleri aracılığıyla çalışır.
- **Otomatik model araması:** tek bir tanılayıcı model her öğrenene uymadığından, [[machine-learning|AutoML]] güdümlü yaklaşımlar (örneğin kişiselleştirilmiş sinirsel bilişsel mimari arama), heterojen öğrenen profilleri için tanılayıcı modeller üretir — statik [[summative-assessment|sınav]] sonuçlarına ve basit istatistiksel göstergelere bel bağlamak yerine, öğrenme süreçlerinin dinamik analizini ve öğrenen başına bilişsel tanılamayı mümkün kılmak için [[multimodal|çok kipli]] eğitim verilerini bütünleştirir ([[personalized-neural-cognitive-architecture-search-2026]]).
- **Yanıt verileri:** tanılama, değerlendirmelere, ipuçlarına, [[help-seeking]] ve görev üzerinde geçirilen süreye ilişkin yanıtlardan yararlanır — ham puanlardan daha zengin sinyaller.
- **LLM temelli tanılama:** daha yeni yaklaşımlar, açık uçlu veya el yazısı çalışmalardan tanılama yapmak ve bir hatanın arkasındaki özel [[misconceptions]] belirlemek için [[llm|büyük dil modellerini]] kullanır (örneğin doğru bir cevabın kusurlu muhakemeyi gizlediği “doğru cevap tuzağı”). İki 2026 sonucu, bu tanılamanın ne kadar ileri gittiğini sınırlar. [[omniedu-open-educational-foundation-models-2026|OmniEdu (Liang ve ark., 2026)]], tanılayıcı muhakemeyi açık bir 4B/9B/27B ailesinde dört yetenekten biri olarak denetlemli eğitmiştir ve bilgi durumu tanılaması ölçülen en zayıf yeteneği olarak kalmıştır — 27B’de %54,04 ve 9B’de %53,55, üç katı parametre bile açığı kapatamamıştır — oysa [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He ve ark., 2026)]]nin LLM puanlayıcısı, birleştirilmiş yanıtlarda gerçek ustalıkla r = 0,68, ancak en zayıf yetenek katmanında yalnızca r ≈ 0,15 korelasyon göstermiştir (karışık ≈ 0,48, güçlü 0,41); dolayısıyla tanılama güvenilirliği, modelin kadar öğrenenin yetenek düzeyini de izler.
- **Yanlışları bir yanıtta bir kez değil, kohort ölçeğinde teşhis etmek.** [[llm-common-modeling-mistakes-formalisms-2026|Killich ve ark. (2026)]], olağan yönü tersine çevirir: tek bir öğrenenin hatasını teşhis etmek yerine, bir [[llm]], tüm bir eğitim veri kümesinde yanlış biçimlendirmeleri doğru olanlara eşleyen aday hata düzeltme dönüşümleri önerir ve her aday saklanmadan önce algoritmik olarak doğrulanır. Doğru ve yanlış önermesel mantık biçimlendirmelerinin 6.106 çifti üzerinde iş akışı, 5.156 çifti (yani %84,44’ünü) açıklayan 248 dönüşüm kümesi keşfetmiştir; bu, önceki en iyi yaklaşımın elle seçilmiş hatalarına karşılık gelen 4.370 çiftten (%71,57) iyidir ve literatürde bir alan uzmanının elle tanımladığı hataları yeniden bulmuştur. Kümeleme, adayları tek dönüşümlü, eşdeğer dönüşümlü ve hiyerarşik gruplara sıralar ve ortaya çıkan korelasyon grafiği eğitmenler için görselleştirilebilir; aynı iş hattı, yalnızca tek bir “ya da yerine ve” dönüşümünün bile kendi 334 çiftlik kümesinin %98,80’ini kapsadığı modal mantık ve düzenli ifadelere aktarılmıştır. Bu, bir tanılayıcı modelin uydurulabilmesi için gereken yanlış kanı envanterine giden bir yoldur.
- **Darboğaz hata benzetimi değil, doğru çözümün kurtarılmasıdır.** Modeller, dikkat dağıtıcı izlerin %95,2’sinde bir çözüm üretmiş ve özel bir Eedi yanlış kanısını 0,92 doğrulukla benzetmiştir; yine de doğru cevabın sağlanması, insan dikkat dağıtıcılarıyla eşleşmeyi yalnızca artırmıştır (0,52 → 0,56) — hata, çözümün kurtarılmasında, yani akışın yukarısında yatmaktadır ([[llm-distractor-generation-student-reasoning-2026|Zengaffinen ve ark. (2026)]]).
- **OBE müfredatlarında sonuç düzeyinde tanılama:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh ve ark. (2026)]], Sonuç Temelli Eğitimde (OBE) bir öğrencinin hangi kurs sonuçlarına ulaştığını, sonuçları bilgi kavramları olarak ele alarak teşhis eder; kurs ve program sonuçları arasında uzman onaylı OBE benzeşim eşlemeleri yoluyla kavram ilişkilerini sağlarlar (örtük olarak öğrenilen dikkat veya grafik ilişkilerine açık bir alternatif) ve bir sonucun ulaşılmasının diğerlerini nasıl etkilediğini tahmin etmek için hafıza destekli bir modül kullanırlar — canlı mühendislik programı verileri üzerinde DKT, DKVMN, EKT ve SimpleKT temel çizgilerini (%89,81 AUC) geride bırakır.
- **Başka bir amaç için kurulmuş araçlardan teşhis etmek.** [[mechanics-cognitive-diagnostic-physics-2026|Le ve ark. (2026)]], bir BT modelinin tanılama için hiç yazılmamış maddelerden hedef düzeyinde bilgi çıkarabileceğini göstermektedir. Giriş düzeyi mekanikte FCI, FMCE ve EMCS maddelerini 14 ince ayarlı öğrenme hedefine eşleyip 807 kursun 24.394 sonrası-test yanıtı üzerinde DINA uyarlayan çalışmada, üç araçtan ikisinde iyi uyum (FCI RMSEA² = 0,033; EMCS = 0,022) ve 22 hedef–değerlendirme kombinasyonunun 19’unda düşük riskli gelişimsel değerlendirme kıyasınına eşit veya üzerinde sınıflandırma doğruluğu bulunmuştur. Bağlayıcı kısıt, madde kalitesi değil nitelik yapısıydı: uzman kodlaması model incelemesinden neredeyse sağlam çıktı — DINA, 754 madde–hedef kodlamasından yalnızca %14’ünde düzeltme önerdi ve kodlayıcılar bunlardan 20’sini (yani %2,7’sini) benimsedi — yine de model, *kavramsal olarak iç içe* geçmiş üç enerji hedefini ayırt edemedi (Potansiyel Enerji 0,675, Enerjiyi Koruma 0,705, Kinetik Enerji 0,745), çünkü bunların her ikisi maddelerinin yaklaşık %70’ini paylaşıyordu (Jaccard örtüşmesi 0,67–0,73) ve bu da DINA’nın birleşimsel bağımsızlık varsayımını ihlal ediyordu; oysa aynı araçtaki momentum hedefleri 0,820–0,917’ye ulaştı. Daha ince nitelikler daha kötü değil, daha iyi uydu: 14 hedefli yapı, aynı ekibin daha önceki dört geniş beceri yapısına göre üç aracın tümünde model uyumunu iyileştirdi. Ustalığın ne kadar ince ayrılabileceğini sınırlayan şey, kodlama hatası değil madde örtüşmesidir.
- **Kişiselleştirilmiş öğrenme yolları için Bayesian DINA:** [[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng ve Huang (2026)]], kişiselleştirilmiş öğrenme yolları üretmek için Bayesian DINA modelini (EdNet veri kümesi üzerinde eğitilmiş, N=5.000) bilgi uzayı kuramı ve en kısa telafi yolu algoritmasıyla bütünleştirir ve [[cognitive-offloading|bilişsel yükün]] aracı rolünü Gizli Markov Model durum geçişleri yoluyla ampirik olarak sınar (120 öğrencide doğrulanmıştır) — hem geleneksel DINA modellerinin seyreklik kaynaklı yakınsama sorununa hem de kişiselleştirilmiş yol etkililiğinin ardındaki sınanmamış psikolojik mekanizmayı ele alır.
- **Kimlik yerleştirmeleri yerine dile dayalı tanılama.** [[process-grounded-language-cognitive-diagnosis-2026|Liu ve ark. (2026)]], ayrık öğrenci, alıştırma ve kavram tanımlayıcılarını LLM’lerle kurulmuş kavram şemaları ve sürece dayalı kanıtlarla değiştirir, her öğrencinin sonradan durumunu yanıt kayıtlarından kalibre eder. Üç [[math-education|matematik]] [[online-teaching-and-learning|platform]] veri kümesinde çerçeve, XES3G5M üzerinde %83,51 ACC / %85,37 AUC ve MOOC üzerinde %87,16 ACC’ye ulaşır; kazanç, klasik bilişsel tanılama modellerinin bozulduğu yerde tam olarak yoğunlaşır: yeni kavramlar (KCD’ye göre +4,60 ACC) ve eksik Q-matrisi girdileri (+4,52). Yapılandırılmış kanıtların çıkarılması MOOC doğruluğunu %87,16’dan %78,95’e düşürür; dolayısıyla iyileşme, model ölçeğinden değil dilden türeyen yapıdan gelir. ([[process-grounded-language-cognitive-diagnosis-2026]])

- **YZ analizinden önce kültürel olarak gömülü görevler gelebilir.** [[culturally-embedded-ai-diagnostic-assessment-2026|Anggara ve ark. (2026)]], Endonezya’daki 178 ortaokul öğrencisinden YZ yanıt analizinden önce kültürel olarak bağlamsallaştırılmış açık uçlu görevler tamamlamasını istemiştir; YZ tanıları uzman değerlendirmesiyle uyum içinde çıkmıştır (ICC = 0,81), kültürel gömme ise simgesel matematik performansı (β = 0,42) ve etkileşim (β = 0,37) ile ilişkili görülmüştür.

## Neden önemlidir

Doğru tanılama, öğretimi küresel bir “yetenek” puanı yerine gerçek açıklara yönlendirir — bir öğrencinin neden *yanlış* yaptığını açıklayan [[automated-assessment]] ve özel [[student-modeling|bilgi durumlarını]] telafi eden [[feedback|Geri Bildirim Döngüsü]] sistemlerini mümkün kılar. Kötü tanılama bunun tersini üretir: yanlış kavramlara yönelik öğretim. Bu nedenle [[psychometrically-aware-ai]], tahmin doğruluğunun yanında tanılayıcı geçerliliği vurgular.

### Bilgi izleme ve akıllı ders sistemleriyle ilişkisi

Bilişsel tanılama, [[intelligent-tutoring]] mimarisinin kalbinde yer alır ve [[knowledge-tracing]]nin değerlendirme tarafındaki karşılığıdır:

- **Tanılama ve izleme karşısında — birbirini tamamlayan zamansal görüşler.** [[knowledge-tracing|Bilgi izleme]], ustalığın *zamansal dinamiğini* izler — bir ölçekli bilgi durumunun alıştırmalar boyunca nasıl evrildiğini tahmin eder ve bir sonraki yanıtı öngörür. Bilişsel tanılama, bir öğrenenin o an sahip olduğu bilgi bileşenlerinin, becerilerinin veya yanlış kanılarının *statik, ince ayarlı fotoğrafını* üretir. Bir ders sisteminin ikisine birden ihtiyacı vardır: bilgi izleme, sırada neyi öğreteceğini sıralamak için; bilişsel tanılama, gerçekte neyin *yanlış* olduğunu bilmek için. [[item-response-theory|IRT]] ve [[educational-measurement|ölçme]] temelli tanılayıcı modeller ile maddeleri birden fazla bileşene eşleyen bilişsel tanılama modelleri, tanılayıcı tarafı somutlaştırır.
- **LLM çağı tanılaması.** [[llm|LLM]]ler, tanılamayı çoktan seçmeli yanıtlardan açık uçlu, el yazısı ve konuşma temelli çalışmalara uzatır ve bir hatanın arkasındaki özel [[misconceptions]] belirler (örneğin doğru bir cevabın kusurlu muhakemeyi gizlediği “doğru cevap tuzağı”). [[xie-hillm-cd-2026|HiLLM-CD]], otomatik kavram ağacı oluşturma ve hiyerarşik yeterlilik çıkarımı için LLM’leri kullanarak tanılamayı ve izlemeyi köprüler. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati ve ark. (2026)]], bunu bir adım öteye taşıyarak tanılamayı birden fazla ticari LLM API’si arasında ε-yerel diferansiyel gizlilikle birleştirir ve hiçbir modelin ham öğrenci verisini görmeden doğru, gizliliği koruyan tanılamanın uygulanabilir olduğunu gösterir.
- **Tanılamayı geri bildirimden ayırmak bir tasarım ilkesidir.** LLM ders sistemleri doğru adımları güvenilir biçimde onaylar, ancak geçerli muhakemeyi aşırı reddeder ve hataları aşırı doğrular — doğru tanılama güvenilir biçimde uygulanabilir bir [[feedback]] üretmez. Bu nedenle akıllı ders sistemi tasarımı, bir tanılama bileşenini geri bildirim/[[scaffolding]] bileşeninden ayırmalıdır ([[yasir-llm-tutoring-agents-2026]]).

## Bağlantılar

Bilişsel tanılama, [[knowledge-tracing]], [[student-modeling]], [[educational-measurement]] ve [[assessment]] ile bağlantılıdır. Bulguları [[intelligent-tutoring]] ve [[adaptive-learning]]yi besler ve LLM çağı çalışmaları onu, [[intelligent-tutoring|YZ Ders Sistemi]] içinde yanlış kanı belirlemeyle ilişkilendirir.

## Bağlı kavramlar

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

## Bağlı makaleler

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
- [[culturally-embedded-ai-diagnostic-assessment-2026]] — Rethinking Diagnostic Assessment Through Culturally Embedded AI for Meaningful Learning
