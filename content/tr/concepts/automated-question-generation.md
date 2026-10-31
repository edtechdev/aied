---
title: Otomatik Soru Üretimi
created: "2026-10-14T21:40:00-04:00"
type: concept
connected_resources: [teacherserver]
technology: [adaptive-learning, educational-nlp, generative-ai, llm, personalized-learning]
assessment: [assessment, automated-assessment, automated-question-generation, educational-measurement, formative-assessment]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/automated-question-generation
source_updated: "2026-10-25T21:20:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Otomatik soru üretimi (AQG)** — özellikle NLP ve [[llm|büyük dil modelleri (LLM’ler)]] olmak üzere yapay zekânın, kaynak materyalden veya öğrenme hedeflerinden [[assessment|eğitim değerlendirme]] maddelerini (çoktan seçmeli, kısa cevaplı, boşluk doldurma, kodlama ve performans soruları) otomatik olarak üretmek için kullanılması. AQG, ölçekte değerlendirmeyi mümkün kılar — [[formative-assessment|biçimlendirici]] sınavlar, uyarlamalı alıştırmalar ve pratik maddeleri üretir — ancak kalite madde türlerine göre büyük ölçüde değişir ve uydurma ya da kötü kalibre edilmiş sorulardan kaçınmak için doğrulama gerektirir. [[automated-assessment]]’ın temel bir bileşenidir ve [[adaptive-learning]] ile [[personalized-learning]]’in önemli bir olanak sağlayıcısıdır.

## Düşünülmesi Gerekenler

- Otomatik soru üretimi, kaynak materyalden ölçekte değerlendirme maddeleri üretir — ancak bu sayfa, kalitenin madde türlerine göre büyük ölçüde değiştiği konusunda uyarıyor. Okumaya başlamadan önce, YZ’nin en güvenilir biçimde ürettiğini hangi madde türünü tahmin ederdiniz: çoktan seçmeli, kısa cevaplı mı yoksa kod mu — ve neden?
- Merkezi zorluk kalite kontrolüdür: LLM’ler gerçekte yanlış sorular üretebilir. Bir işlem hattı, üret-sonra doğrula-geliştir döngüsü ekleyerek uydurma oranını %62 azalttı. YZ’nin kendi sorularını doğrulamasını istemenin, neden yalnızca kendi çıktısını onaylamak yerine soruları anlamlı biçimde iyileştireceğini düşünüyorsunuz?
- [[research-methods-aied|Araştırmalar]], üretilen soruların açıkça üst düzey çıktılar için tasarlanmadığı sürece daha düşük düzeyli düşünmeye (hatırlama) yöneldiğini göstermektedir. Pratik maddeleri oluşturmak için YZ kullansaydınız, bunların gerçek anlayışı mı yoksa yalnızca ezberi mi eğittiğini nasıl anlardınız?
- Zorluk kalibrasyonu önemlidir: YZ zorluk tahminleri öğrenci performansıyla güçlü biçimde ilişkilidir, ancak sayfa yüksek riskli yanlış kullanıma karşı uyarıyor. YZ’nin "doğru zorlukta" bulduğu bir soru, hangi durumda belirli bir öğrenciye sorulması yine de yanlış olurdu?
- [[accessibility]] duyarlı üretim, İşitme Engelli ve Ağır İşitme Engelli öğrenenler için uyarlanmış sorular oluşturur ve hedef toplulukla işbirliği içinde iyileştirilir. Bu örnek, soru üretiminin neden tamamen teknik ya da yalnızca içerikle sınırlı bir sorun olarak ele alınamayacağına dair ne gösteriyor?

## Giriş

Otomatik soru üretimi önemlidir, çünkü değerlendirme maddelerini elle oluşturmak maliyetlidir ve YZ bunları hızlı ve ölçekte üretebilir. Ancak bilgi tabanının araştırmaları, üretilen maddelerin doğruluk, alaka düzeyi ve zorluk açısından doğrulanması gerektiğini; farklı madde türlerinin (çoktan seçmeli, kısa cevaplı, kod) güvenilir biçimde üretilebilirliğinin değiştiğini göstermektedir. AQG bu nedenle [[generative-ai|üretken YZ]], [[educational-nlp|eğitsel NLP]] ve [[educational-measurement]]’ın kesişiminde yer alır.

## Soru üretimine yaklaşımlar

Bilgi tabanının araştırmaları birkaç yaklaşımı örneklendirmektedir:

- **Üret-sonra doğrula işlem hatları:** [[generate-then-validate-question-gen|Generate-Then-Validate]] (Üret-Sonra Doğrula), doğrudan üretime kıyasla LLM uydurmasını %62 azaltan bir üretim → doğrulama → iyileştirme döngüsü sunar; [[stem-education|STEM]] veri kümelerinde %89 doğruluk ve alaka düzeyinde %23’lük bir iyileşme elde eder. Doğrulama adımı geçersiz veya düşük kaliteli maddeleri süzer ve başarısız olan maddeler düzeltici istek metinleriyle yeniden üretimi tetikler.
- **Bilgi izleme tabanlı üretim:** [[kt4eqg-personalized-question-generation|KT4EQG]], [[knowledge-tracing|bilgi izleme]] rehberliğinde kişiselleştirilmiş alıştırma soruları üretir; maddeleri her öğrenenin bilgi durumuna göre uyarlar, jenerik sorular üretmek yerine.
- **Yanlış kanı bağlı çeldiriciler teşhis etiketleri olarak:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He vd., 2026)]], her çeldiriciyi tek bir madenden çıkarılmış yanlış kaniye bağlar ve yalnızca bir seçeneği doğru olarak işaretler; böylece bir madde, teşhis hedefleri yerleşik biçimde üretilir ve hiçbir [[llm]] çağrısı olmadan belirleyici biçimde notlandırılabilir — yazarların canlı dağıtımında tur başına yaklaşık 7,6 saniye ve yaklaşık \$0,005; LLM ile notlandırılan bir kısa cevaplı tur için yaklaşık 32 saniye ve \$0,015 karşılığında. Bu bağ, arkasındaki yanlış kanı etiketleri kadar iyi olabilir, çünkü madenden çıkarılan [[misconceptions]], hedef yanlış kanılarla yalnızca F1 ≈ 0,56 oranında eşleşmiş ve madde seçimleri zamanın %0,72’sinde gerçekten zayıf bir beceriyi hedeflemiştir.
- **Bilişsel derinlik duyarlı üretim:** [[llm-educational-question-cognitive-depth|LLM tarafından üretilen soruların bilişsel derinliğinin değerlendirilmesi]], üretilen maddelerin [[critical-thinking|üst düzey düşünmeyi]] (yaratma, değerlendirme) mi yoksa yalnızca ezberi mi hedeflediğini inceleyerek Bloom’un taksonomisi ve [[educational-measurement]] ile bağlantı kurar.
- **Yinelenen değerlendirme için hataya gömülü vaka problemleri:** [[automated-constructive-assessment-hdr-llm-2026|Takahashi vd. (2026)]], öğrencilerin bulup açıklaması gereken kasıtlı olarak gömülü hatalar taşıyan kısa vakalar biçiminde yeni hiyerarşik teşhis muhakemesi (HDR) problemleri üretti; GPT-4o tarafından kaleme alınan maddelerin insan kaleme alınanlarla iç tutarlılıkta (her ikisi için de Cronbach’ın α = 0,78) ve zorlukta eşleştiğini, Fisher’ın kesin testlerinin 100 katılımcı arasında puan dağılımında anlamlı bir fark bulamadığını gördü. Bu biçim, bir [[critical-thinking|üst düzey düşünme]] talebini kısıtlı bir yanıtla eşleştirir; böylece cevaplar yakınsar ve notlandırma yeniden üretilebilir hale gelir. Üretken motivasyon madde yeniden kullanımıdır: bir vakayı yeniden kullanmak belleği ve cevap yeniden kullanımını davet ederken, yapısal olarak eşdeğer ancak bağlamsal olarak farklı üretilmiş vakalar yeniden ölçümde madde yanlılığını baskılar.
- **[[pedagogy|Pedagojik]] işlem hatları:** [[slidesqaqa-pedagogical-question-generation|Slayt destesi soru-cevap üretimi]], kurs materyallerinden pedagojik olarak sağlam soru üretimi için çok aşamalı bir işlem hattı kullanır.
- **Erişilebilirlik duyarlı üretim:** [[llm-question-generation-deaf-hard-of-hearing-2026|Chen vd.]], [[inclusive-learning|İşitme Engelli ve Ağır İşitme Engelli öğrenenler]] için LLM destekli bir soru üretim sistemi tasarlar; videoda görsel veya duygusal zorluk anlarını hedefleyen Görsel ve Duygusal soru stratejileri sunar ve dilsel erişilebilirliği güvence altına almak için soruları hedef toplulukla yinelemeli biçimde iyileştirir.
- **RAG tabanlı, insan-devriginde sistemler:** [[code-gen|CODE-GEN]], [[automated-assessment|çoktan seçmeli değerlendirmeler]] üretmek için [[rag|geri getirme destekli üretim]]’i [[human-in-the-loop-ai|insan-devriginde]] incelemeyle birleştirir.
- **[[benchmark|Kıyaslamalar]] ve değerlendirme:** [[nsmq-riddles-science-math-benchmark|NSMQ Riddles]], soru üretimi ve muhakeme sistemlerini değerlendirmek için bilimsel/matematiksel bilmecelerden oluşan bir kıyaslama sunar.

## Doğrulama ve kalite

AQG’de merkezi zorluk **kalite kontrolüdür**:

- **Çözüm sürecini değerlendirin, madde gövdesini değil:** [[proiqa-math-item-quality-assessment-2026|ProIQA]], madde kalitesi incelemesinin bir uzmanın yaptığını — çözümü simüle etmeyi — izlemesi gerektiğini savunur; her madde için LLM tarafından üretilen bir muhakeme ağacı oluşturur, bunu matematiksel doğruluk açısından %90,38–97,80 aralığında doğrular, ardından yalnızca madde gövdesine dayalı bir görünümün yanı sıra bağımlılık yapısını bir graf [[machine-learning|sinir ağı]] ile kodlar. İkinci en iyi yönteme kıyasla ortalama kazanımları, kavram değerlendirmesinde %7,5, zorluk tahmininde %6,3 ve yetkinlik değerlendirmesinde %19,5 olarak bildirir; hata analizi, izlenmeye değer bir başarısızlık kipini adlandırır: mantıksal olarak doğru ancak yapısal olarak yüzeysel bir muhakeme ağacı, zor bir madde kolay görünmesine yol açar.

- **Uydurma riski:** LLM’ler gerçekte yanlış sorular üretebilir. [[generate-then-validate-question-gen|Generate-Then-Validate]], ayrı bir doğrulama aşamasının bunu keskin biçimde azalttığını göstermekte ve [[hallucination-risk|uydurma riski]] genel olarak tanınan bir kaygıdır.
- **Zorluk kalibrasyonu:** üretilen sorular uygun zorlukta kalibre edilmelidir. [[llm-difficulty-calibration-programming-exams-2026|Zorluk kalibrasyonu araştırması]], YZ zorluk tahminlerinin öğrenci performansıyla güçlü biçimde ilişkili olduğunu (örneğin rho ≈ −0,87) ve daha iyi madde seçimini mümkün kıldığını göstermekte; yüksek riskli [[ai-misuse-learning-harm|yanlış kullanıma]] karşı uyarıda bulunmaktadır. [[razavi-powers-item-difficulty-llm-2026|Razavi ve Powers (2026)]], bunu K-5 matematik ve okuma maddelerine (N = 5170) Rasch IRT modeli altında kalibre edilmiş biçimde genişletir: GPT-4o’nun sıfır atımlı zorluk derecelendirmeleri gerçek zorluklarla orta-düzeyde ila güçlü biçimde ilişkiliydi (matematikte r = 0,83, okumada r = 0,81) ancak sınıf düzeyine göre değişti; LLM ile çıkarılan bilişsel ve dilsel özelliklerin ağaç tabanlı modellere beslendiği özellik tabanlı bir yaklaşım ise r = 0,87’ye varan korelasyonlara ulaştı. Çalışmanın yapılandırılmış özellik çıkarımı (örneğin sözdizimi karmaşıklığı, [[cognitive-offloading|bilişsel yük]], çeldirici kurnazlığı) ve pratik yedi adımlı iş akışı, üretilen maddelerin kalibrasyonu için bir şablon sunarken; erken sınıf aralığı kısıtlama bulgusu ve genellenebilirlik kaygıları yüksek riskli kullanıma karşı uyarı niteliğindedir.

- **Üretilen zorluk etiketleri bir yapı geçerliliği hatası olabilir, kalibrasyon hatası değil.** 378 üretilen madde boyunca modelin Kolay/Orta/Zor etiketleri, kendisiyle birlikte üretilen Bloom düzeyini izledi (ρ=0,90) ve yüzey biçimi — ortalama madde uzunluğunun 15,9’dan 22,1’e ve 30,2 kelimeye yükselmesi — ancak 54 öğrenciden gelen 7.888 yanıtta deneysel madde zorluğuyla yalnızca ρ=0,06 oranında ilişkiliydi; bu durum, üretilen üst verinin birlikte üretilen etiketlere güvenmek yerine yanıt verilerine karşı kalibre edilmesi gerektiğini gösterir ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Ölçekli psikometrik alan doğrulaması:** [[assessing-quality-ai-generated-exams-field-2025|YZ Tarafından Üretilen Sınavların Değerlendirilmesi]], yinelemeli iyileştirmeli bir AQG işlem hattını (üret→yargıla→revize et, Self-Refine tarzı) 91 gerçek üniversite sınıfında (~1.686 öğrenci) doğrular. Bayes hiyerarşik 2PL [[item-response-theory|IRT]] analizi, YZ tarafından üretilen soruların uzman kaleme alınmış standart sınav maddeleriyle eşit performans gösterdiğini göstermektedir — biraz daha kolay (β̄ = −0,45’e karşı 0,35) ancak biraz daha ayırt edici (ᾱ = 1,3’e karşı 1,2), daha yüksek tepe sınav bilgisine sahip (güvenilirlik 0,79’a karşı 0,72) — bu da AQG’nin ölçekte kursa özel, psikometrik olarak sağlam değerlendirmeler üretebileceğini göstermektedir.

- Ortalama psikometrik eşitlik, madde düzeyindeki yetersizlikleri maskeleyebilir: 153 tıp eğitimi raporunu kapsayan bir derleme, YZ madde üretiminin bazen insan zorluk ve ayırt ediciliğiyle eşleştiğini; ancak bir fizyoloji karşılaştırmasında ChatGPT maddelerinden yalnızca 40’ta 9’unun tüm ideal ölçütleri karşıladığını, fakülte maddelerinde ise 40’ta 19’unun karşıladığını bulmuştur ([[genai-medical-education-transformation-review-2026|Zhao vd. (2026)]]).
- **Canlı bir sınavda tanınabilirlik ve incelemenin gerçekte neyi ortadan kaldırdığı:** [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt vd. (2026)]], 30 YZ üretimli ve 30 Ulusal Lisans Sınavı çoktan seçmeli sorusunu, 119 beşinci sınıf [[medical-education|tıp öğrencisi]] tarafından çözülen notlandırılmış tablete dayalı bir sınavda yerleştirdi; YZ maddeleri, ChatGPT-4o ve Gemini 1.5 Pro tarafından kursun kendi materyallerinden kaleme alındı, bunların %82’sini kabul eden ve %18,2’sini kullanılamaz olarak eliyen bir uzman panosu aracılığıyla geçirildi. Öğrencilerin kaynak atfı iki madde türü arasında farklılık göstermedi; madde zorluğu, çeldirici dağılımı ve algılanan müfredat uyumu istatistiksel olarak ayırt edilemez düzeydeydi — bu bir kalite sonucundan ziyade bir *tanıma* sonucudur ve yazarların iş akışının faydasını taslak hazırlamayı ortadan kaldırmak yerine eğitimci çabasını taslaktan incelemeye kaydırmak olarak tanımlamasının nedeni budur. Tek keşfedici fark ayakta kaldı: Gemini maddeleri lisans sınavı maddelerinden daha zordu (p = 0,028), ChatGPT maddeleri ise değildi (p = 0,984).
- **Göreve bağımlılık:** üretim güvenilirliği madde türüne göre değişir. [[cong-confidence-asag-2026|Kısa cevaplı notlandırma]] ve [[self-referential-l2-writing-llm-assessment|analitik yazma değerlendirmesi]], açık uçlu ve yazma maddelerinin yapılandırılmış maddelerden daha güçlü üretilip notlandırılmasının zor olduğunu göstermektedir.
- **Bilişsel kalite:** [[llm-educational-question-cognitive-depth|bilişsel derinlik değerlendirmesi]], üretilen maddelerin açıkça üst düzey çıktılar için tasarlanmadığı sürece daha düşük düzeyli düşünmeye yönelebileceğini göstermektedir.

- **Bilişsel düzeyin otomatik etiketlenmesi üretilen maddelere aktarılmaz.** Küratörlüğü yapılmış bir madde bankası üzerinde eğitilmiş bir Bloom taksonomisi sınıflandırıcısı, YZ tarafından üretilen sorularda çöktü — dağılım içinde makro F1 0,88’den dağılım dışında 0,48 ve 0,20’ye düştü — çünkü üretilen maddeler ortalama çok daha fazla kelime içeriyordu (9,3’e karşı 18,2) ve küratörlüğü yapılmış korpusla yalnızca ortalama %10,5 Bloom tetikleyici fiili paylaşıyordu; daha yakın bir kümede bu oran %35,1’di; etiketlenmiş dağılım dışı veri üzerinde yeniden eğitim yaklaşık N > 1.000 etiketli örnek eşiğinde tek en büyük kazançtı ([[bloom-classifier-ai-assisted-questions-2026|Castanares vd., 2026]]).

## Uyarlamalı ve kişiselleştirilmiş öğrenmedeki rolü

AQG, [[adaptive-learning|uyarlamalı]] ve [[personalized-learning|kişiselleştirilmiş]] öğrenmenin önemli bir olanak sağlayıcısıdır: uyarlamalı öğretmenlerin yararlandığı büyük madde havuzlarını üretir ve — [[knowledge-tracing|bilgi izleme]] veya [[student-modeling|öğrenci modellemesi]] ile birleştiğinde — bireysel öğrenenlerin bilgi durumlarına göre uyarlanmış maddeler üretebilir ([[kt4eqg-personalized-question-generation|KT4EQG]]). [[taklif-ai-interest-based-personalized-assignments|İlgi temelli kişiselleştirme]], AQG’nin soruları yalnızca zorluğa değil öğrenci ilgi alanlarına da uyarlayabileceğini göstermektedir.

## Eğitimde yapay zekâ için çıkarımlar

- **Üretin, sonra doğrulayın:** üretimi her zaman uydurmayı kontrol etmek ve alaka düzeyini güvence altına almak için bir doğrulama/iyileştirme aşamasıyla eşleştirin.
- **Madde türünü güvenilirliğe uyarlayın:** en güvenilir olduğu yapılandırılmış madde türlerinde (çoktan seçmeli, boşluk doldurma, kod) AQG kullanın ve açık uçlu ile yazma maddelerine dikkatli doğrulama uygulayın.
- **Bilişsel derinlik için tasarlayın:** istek metinleri ve işlem hatları, gerçek öğrenmeyi desteklemek için yalnızca hatırlamayı değil üst düzey düşünmeyi hedeflemelidir.
- **Zorluğu kalibre edin:** uygun biçimde zorlayıcı maddeleri seçmek için YZ zorluk tahminlerini kullanın; yüksek riskli kullanımdan önce güçlü doğrulama yapın.
- **Öğrenen modelleri aracılığıyla kişiselleştirin:** uyarlamalı, bireyselleştirilmiş maddeler üretmek için AQG’yi bilgi izleme ve ilgi modelleriyle birleştirin.

## Yaygın yanlış anlamalar

**“Üretilen sorular, üretilebildikleri ölçekte kullanılabilir.”** Kısıt hacim değil, kalibrasyondur. Kalite madde türleri arasında çarpıcı biçimde değişir ve uydurulmuş ya da kötü kalibre edilmiş maddelerden kaçınmak için doğrulama gerektirir; bu nedenle işleyen hatlar çabalarını üretime değil doğrulamaya harcar: bir hat, üret-sonra-doğrula-ve-incelt döngüsü ekleyerek uydurmayı **%62** azaltmıştır.

**“Bir inceltme döngüsü üretilen maddeleri güvenilir kılar.”** Onları daha az yanlış kılar. Uydurmadaki %62’lik azalma önemli bir artık bırakır ve hiçbir döngü, bir maddenin belirtilen güçlüğünün öğrencilerin fiilen yaptıklarıyla örtüşüp örtüşmediği gibi daha zor sorunu çözmez: güçlük etiketi kanıtının üretilen üst verinin başarısız olduğunu gösterdiği [[assessment-validity|geçerlilik]] sorusu. Doğrulama uydurulmuş içeriği azaltır; kalibrasyon öğrenci yanıt verisi gerektirir.

**“Soru üretimi pratiği doğal olarak kişiselleştirir.”** Arz üretir ve kişiselleştirme bir eşleştirme sorunudur. Daha çok madde üretmek, belirli bir öğrenenin sırada hangi maddeyi görmesi gerektiğini söylemez; uyarlamalı seçim sorusu kendi kanıtına sahip ayrı bir mekanizmadır.

**“Üretim, değerlendirmenin neleri ölçtüğünü değiştirmeden ölçekler.”** Ölçülen şeyin bileşimini değiştirir, çünkü iyi üretilen maddeler iyi değerlendiren maddelerin temsili bir örneği değildir. Üretilmesi kolay biçimler, üretilmesi zor olanları giderek dışarı iter ve bu da yapıyı sessizce yeniden şekillendirir.

## Bağlı kavramlar

- [[llm]]
- [[generative-ai]]
- [[educational-nlp]]
- [[automated-assessment]]
- [[automated-essay-scoring]]
- [[assessment]]
- [[formative-assessment]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[rag]]
- [[human-in-the-loop-ai]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[hallucination-risk]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[scaffolding]]
- [[intelligent-tutoring]]
- [[ai-education]]

## Bağlı makaleler

- [[genai-medical-education-transformation-review-2026]] — Madde üretiminde YZ’ye karşı fakülte madde kalitesine ilişkin 153 tıp eğitimi raporunun kapsam derlemesi

- [[assessing-quality-ai-generated-exams-field-2025]] — IRT aracılığıyla YZ tarafından üretilen sınav kalitesinin ölçekli alan doğrulaması
- [[generate-then-validate-question-gen]] — Generate-Then-Validate soru üretimi
- [[kt4eqg-personalized-question-generation]] — Bilgi izleme aracılığıyla kişiselleştirilmiş soru üretimi
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — İşitme Engelli ve Ağır İşitme Engelli öğrenenler için LLM destekli soru üretimi
- [[llm-educational-question-cognitive-depth]] — LLM tarafından üretilen soruların bilişsel derinliği
- [[slidesqaqa-pedagogical-question-generation]] — Slayt destesi soru-cevap pedagojik soru üretimi
- [[code-gen]] — CODE-GEN: RAG tabanlı insan-devriginde soru üretimi
- [[nsmq-riddles-science-math-benchmark]] — NSMQ Riddles kıyaslaması
- [[taklif-ai-interest-based-personalized-assignments]] — İlgi temelli kişiselleştirilmiş ödevler
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM tabanlı zorluk kalibrasyonu
- [[self-referential-l2-writing-llm-assessment]] — Öz başvurulu analitik yazma değerlendirmesi
- [[cross-dataset-bloom-question-classification]] — Çapraz veri kümesi Bloom soru sınıflandırması
- [[llm-chatbots-cs-multiple-choice]] — LLM sohbot robotları ve BS çoktan seçmeli maddeleri
- [[socratic-tests-conversational-assessment]] — Sokratik testler: konuşma tabanlı değerlendirme
- [[llm-turing-test-italian-legal-exams-2026]] — Hukuk sınavlarında LLM Turing testi
- [[razavi-powers-item-difficulty-llm-2026]] — LLM’ler ve ağaç tabanlı ML kullanarak madde zorluğunun tahmin edilmesi
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Süreç Tabanlı Matematik Maddesi Kalite Değerlendirmesi
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: İnsan-YZ Ortak Öğrenme Döngüsünde Öğrenenini Öğrenen Etken Bir Öğretmen
- [[automated-constructive-assessment-hdr-llm-2026]] — Büyük Dil Modelleriyle Yapıcı Değerlendirmenin Otomasyonu: Pratik Yetkinliğin Ölçeklenebilir ve Yinelenen Değerlendirmesine Doğru
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Veri Bilimi Kurslarında Öğrencilerin LLM Kullanımı ve YZ Tarafından Üretilen Soru Zorluğunun Sınırları
- [[bloom-classifier-ai-assisted-questions-2026]] — Yeni YZ destekli eğitim sorularının pedagojik değerlendirmesi için ön eğitimli modellerin değerlendirilmesi
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Öğrenciler notlandırılmış bir sınavda YZ tarafından üretilen çoktan seçmeli soruları lisans sınavı maddelerinden ayırt edemedi ve üretilen maddelerin %18,2’si incelemede elendi (Vogt vd. 2026)
