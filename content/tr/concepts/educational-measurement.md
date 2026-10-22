---
title: Eğitimde Ölçme
created: "2026-10-14T08:10:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [educational-nlp, knowledge-tracing, learning-analytics]
assessment: [assessment-validity, item-response-theory, psychometrically-aware-ai]
connected_faqs: [ai-literacy-evidence, evaluating-ai-interventions-methods]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/educational-measurement
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Eğitimde ölçme** — öğrenmeyi ve onun yapılarını (construct) nicelendirmeye ve doğrulamaya yönelik psikometri kuramı ve yöntemleri — bilgi tabanının [[item-response-theory]], [[knowledge-tracing]] ve [[assessment-validity]] sayfaları boyunca geçer. [[llm]] çağı, klasik psikometriyi YZ kaynaklı yeni yanıt akımlarıyla — otomatik puanlama, YZ ile öngörülen zorluk ve [[multimodal]] izler — uzlaştırmayı öngürmektedir; güvenilirlik ve geçerliliği korumak için bunlar yerleşik ölçme ilkelerine karşı doğrulanmalıdır.

## Üzerinde Düşünülebilecek Sorular

- Bir LLM, bir sınav maddesinin kolay olduğunu öngörüyor, ancak ampirik sınav verisi öğrencilerin onu zor bulduğunu söylüyor. Hangisine [[trust]] duyarsınız ve makinenin tahminine güvenmeniz için sizi ne ikna ederdi?
- Eğitimde ölçme, öğrenmeye ilişkin gözlemleri savunulabilir [[quantitative-research|nicel]] iddialara dönüştürmektir. Bir YZ bir deneme yazısını puanladığında veya bir yanıta puan verdiğinde, bir “puan” kendiliğinden bir ölçüm müdür — yoksa önce bir şey doğrulanmalı mıdır? Nedir o?
- Bazı [[research-methods-aied|araştırmalar]], değerlendirme araçlarının insanlar için olduğu şeyi LLM’ler için ölçmeyebileceğini — gizil yapının (latent structure) ayrıştığını — önermektedir. Yapılar gerçekten de insanlar ile YZ arasında farklıysa, bu durum YZ üretimi notlara veya zorluk derecelendirmelerine ilişkin ne ima eder?
- YZ benzeri görülmemiş bir ölçekte puanlama, madde üretme ve zorluk öngörme yapabilir. “Daha fazla ölçüm”, “daha iyi ölçüm”le aynı şey midir? Bir puanı güvenilir ve geçerli kılan nedir ve bu standartlar ölçüm üretici bir model tarafından yapıldığında korunabilir mi?
- Kıyaslamalar ve YZ üretimi puanlar artık her yerdedir. Bir YZ temelli değerlendirmeyi, yalnızca bir sayı değil de bir öğrenenin fiili anlayışına dair kanıt olarak görmeniz için neyi görmeniz gerekirdi?

## Giriş

Eğitimde ölçme, öğrenmeye ilişkin gözlemleri — yanıtları, davranışları, puanları — savunulabilir nicel iddialara dönüştürme disiplinidir. Yapı (construct) tanımı, madde/test tasarımı, ölçekleme, güvenilirlik ve geçerliliği kapsar. [[ai-education|Eğitimde YZ]] bağlamında ölçme soruları her yerdedir: bir [[benchmark|kıyaslama puanı]] düşündüğümüz şeyi mi ölçüyor? YZ üretimi bir not güvenilir ve geçerli mi? YZ ile öngörülen madde zorlukları, ampirik olarak tahmin edilenlerle uyuşuyor mu?

## Ölçmenin araştırmalarda nasıl göründüğü

- **YZ’nin alanı on yıl boyunca yeniden şekillendirmesi:** [[xiong-ai-educational-measurement-review-2026|Xiong ve Li (2026)]], YZ’nin etkisini üç çağ boyunca ([[formative-assessment|Biçimlendirici]] 2015–2018, Genişleme 2019–2022, Üretici 2023–günümüz) bir Verimlilik–Güçlendirme–Dönüşüm çerçevesi aracılığıyla haritalamaktadır; kapsam puanlamada ve [[automated-question-generation|madde üretiminde]] YZ, psikometrik modelleme, değerlendirme yeniliği ve süreç verisi ile [[bias-mitigation|adalet]]/etik/eşitliği içerir. Yazarlar, ölçme kuramını YZ yöntemleriyle bütünleştiren yeni bir paradigmanın ve insan–[[student-ai-interaction|YZ etkileşimi]] bağlamında yapıları yeniden kavramsallaştırmanın savunuculuğunu yapar — [[assessment-latent-structure-human-llm-2026|gizil yapı karşılaştırmasının]] ampirik olarak soruşturduğu aynı sınır.

- **YZ ile öngörülen zorluk ve kalibrasyon:** [[llm-difficulty-calibration-programming-exams-2026|LLM zorluk kalibrasyonu]] ve [[llm-item-difficulty-prediction|madde zorluk öngörüsü]], madde zorluğunu tahmin etmek için LLM’leri kullanır; bunlar psikometrik tahminlere karşı doğrulanmalıdır (bkz. [[item-response-theory]]). [[razavi-powers-item-difficulty-llm-2026|Razavi ve Powers (2026)]], bu öncülü K-5 düzeyinde geniş ölçekli bir test eklemektedir: Rasch IRT modeliyle kalibre edilmiş 5.170 matematik ve okuma maddesi genelinde, GPT-4o’nun sıfır-örnek zorluk derecelendirmeleri gerçek zorluklarla orta düzeyden güçlü düzeye korelasyon göstermiştir (matematikte r = 0,83, okumada r = 0,81), ancak sınıf düzeylerine göre düzensizdir ve K ile 1. sınıflarda sınıf ortalaması kukla değişkeninden daha iyi değildir. Özellik temelli bir yaklaşım — ağaç tabanlı modellere beslenen LLM kaynaklı bilişsel ve dilsel özellikler — r = 0,87’ye varan korelasyonlara ulaşmış; sınıf düzeyi ve kelime sayısı en üst sıradaki öngörücüler olmuştur. Çalışma, ölçme girdisi olarak YZ ile öngörülen zorluğun hem vaadini hem sınırlarını göstermekte ve test uzmanlarına pratik yedi adımlı bir iş akışı sunmaktadır.

- **Üretilmiş zorluk etiketleri zorluğu ölçmediğinde.** Konuşlandırılmış 311 LLM üretimi sorunun bir yapı geçerlilik denetiminde, üretilmiş zorluk etiketinin kendi ile birlikte üretilmiş Bloom düzeyiyle ρ=0,90, ampirik zorlukla (Klasik Test Kuramı 1−p indeksi) ise yalnızca ρ=0,06 korelasyon gösterdiği; seçenek uzunluğu ise ters yönde işlediği (ρ=−0,18) bulunmuştur — yukarıdaki iyimser okumaları sınırlayan bir “etiket = yüzey biçimi” sonucu ([[student-llm-use-ai-question-difficulty-data-science-2026|An ve Wang (2026)]]).

- **Taksonomik bir etiket, madde davranışını öngörmez.** 265 matematik maddesi üzerinde, hedeflenen Bloom düzeyi zorluktaki varyansın %5’inden azını açıklamış (ε² = .043) ve ayırt edicilikten hiçbirini açıklamamıştır (Kruskal–Wallis H = 0,54, p = .77); oysa bir [[llm|LLM]] sınıflandırması uzman kodlayıcılarla yalnızca orta düzeyde uyum göstermiş (Cohen’s κ = .22) ve maddeleri uygulama/analiz bandına doğru çekmiştir ([[bloom-taxonomy-llm-item-classification-2026|Altaweel ve Moussa (2026)]]).

- **Üretilen maddeleri ifadeye değil, çözüm yoluna göre yargılayın.** Her maddenin doğrulanmış akıl yürütme ağacını kodlamak, performansı konsept değerlendirmesinde %7,5, zorluk tahmininde %6,3 ve yeterlilik değerlendirmesinde %19,5 yükseltmiş; buralarda sıfır-örnek temel çizgi, şablonu izleyen bir maddeyi “Akıl Yürütme”, geometri temelli bir maddeyi ise “Bilme” olarak yanlış etiketlemiştir ([[proiqa-math-item-quality-assessment-2026|Tong ve ark. (2026)]]).

- **[[assessment]] alanında psikometrik farkındalık:** [[psychometrically-aware-ai|psikometrik olarak farkında YZ]], YZ temelli değerlendirmenin ölçme kuramıyla uyumlu olması standardıdır — kalibre, belirsizlik farkında ve geçerliliği koruyan (bkz. [[automated-assessment|Güven Farkında YZ Değerlendirmesi]]).

- **Ustalık etiketleri gözlenen değil, inşa edilen yapılardır.** Teşhis için zemin gerçekliğinin gerektiği yerlerde, [[personalized-neural-cognitive-architecture-search-2026|Jia ve Dong (2026)]]], bunu davranış izlerini doğrudan dönüştürmek yerine bir geçerlilik denetim süreciyle inşa etmiştir — müfredat konsept grafikleri, öğretmenler tarafından gözden geçirilmiş bilgi noktası eşlemeleri ve yakınsak değerlendirme kanıtı — ve teşhisleri, IRT’ye karşı Cohen kappa 0,78 ile eğitim psikologlarıyla eşleşmiştir (IRT için 0,65).

- **Otomatik puanlama ve geçerlilik:** [[ai-scoring-language-bias-physics|YZ puanlama ve dil önyargısı]] ile [[multimodal-item-parameter-estimation-2026|çok kipli madde parametre tahmini]], otomatik puanlamanın ve çok kipli verinin ölçme kalitesini nasıl etkilediğini incelemektedir.

- **Geçerlilik çerçeveleri:** [[assessment-validity]] ve [[educational-nlp]], LLM temelli ölçmeyi doğrulamak için standartları ve araçları sağlar.

- **Gizil yapı karşılaştırması:** [[assessment-latent-structure-human-llm-2026|Strugatski ve ark. (2026)]], değerlendirme araçlarının insanlar ve LLM’ler için *aynı faktör yapısını* gösterip göstermediğini sınayarak eğitimde ölçmeyi LLM ortamına genişletir. EFA, faktör uyumu ve yeniden örnekleme kullanarak, LLM–insan gizil yapılarının [[chemistry-education|kimya]] ve nicel akıl yürütme araçlarında sistematik biçimde ayrıştığını göstermektedir; bu, ölçülen yapıların popülasyonlar arasında farklı olduğunu ima eder — insan geçerlilik kanıtının YZ’ye aktarıldığının varsayılmasından önce gerekli bir kontroldür.

- **Ölçülebilir hataya sahip bir değerlendirici olarak YZ:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros ve Kortemeyer]], YZ tarafından verilen puanları genellenebilirlik kuramı ve Kane’nin argümana dayalı geçerliliği altında çoklu hata kaynağına (maddeler, çalıştırmalar, görevler) sahip yanıltılabilir gözlemler olarak ele alır. 296 öğrencinin el yazısı genel kimya sınavına ilişkin güvenilirlik çözümlemesi, beş YZ çalıştırması boyunca *toplam* puanlarda yüksek kararlılık göstermiştir (ICC(A,1) = 0,967, Kendall’in W değeri = 0,959, 60 puan üzerinden 5,33 olan %95 tekrarlanabilirlik katsayısı), madde düzeyinde kararlılık daha düşüktür (ICC(A,1) = 0,836) — sistemsiz hatalar toplandığında kısmen birbirini götürür (toplam puan uyumunu R² = 0,91’e çıkaran bir Spearman–Brown toplulaştırma etkisi); küçük bir pozitif kesişim noktası ile 1’den küçük eğim ise bir “çekingen puanlayıcı” puan sıkıştırma önyargısı ortaya koymuştur. Bu durum, çalıştırma ortalaması alma ve toplulaştırmayı ölçme tasarımı kararları olarak çerçeveler ve otomatik ölçüler güvenilmeden önce bir geçerlilik sigortası olarak [[item-response-theory|IRT]] riskine kalibre edilmiş güven süzgeçlerini gerekçelendirir.

- **Model sürümü bir ölçme koşuludur.** [[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]]], dört LLM genelinde model içi yanıt benzerliğinin (0,715–0,795) tutarlı biçimde modeller arası benzerliği (0,443–0,604) aştığını bulmuştur; böylece bir konuşlandırma için kurulan bir puanlama argümanı, kendiliğinden ardılına aktarılmaz.

- **Sınırlandırılmadıkça sıfır sonucu eşdeğerlik kanıtı değildir.** StudentBench, havuzlanmış YZ özel dersinin uzman insan özel dersiyle eşleşip eşleşmediğini, bir fark sınaması yerine havuzlanmış standart sapmanın ±0,25’ine karşı iki taraflı sınamalarla test etmiş; düzeltilmiş farkın −0,58 yüzde puan (90% GA [−2,18, 1,03]) olduğunu rapor etmiştir — güçsüz bir sıfır sonucunu bir eşdeğerlik iddiasına dönüştüren tercih budur ([[studentbench-ai-human-tutoring-gre-2026|Northcutt ve ark. (2026)]]).

- **Kalibrasyon, yeni verilerle ölçeklenir, tüm tarihle değil:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury ve ark. (2026)]]], YZ madde üretiminin işletimsel sonucuyla yüzleşir — geleneksel olanlardan daha büyük, daha seyrek ve daha sık güncellenen bankalar; burada her güncellemede birikmiş tüm yanıt verisini yeniden uydurmak maliyetlidir ve kullanılabilir belleği aşabilir. Yazarların *uzlaşma kalibrasyonu*, bağımsız olarak kalibre edilmiş çeyrek dönemleri, her dönemin ardıl çekimlerini (posterior draws) çekim başına sağlam bir Haebara bağlantısıyla ortak bir metriğe eşleyerek birleştirir (böylece bağlantı belirsizliği sabit bir dönüşüm olarak değil, yayılarak ele alınır), ardından her dönemin *tahmini, hiyerarşik* önselinin çıkarıldığı ve bir uzlaşma önselinin yeniden kurulduğu Gauss ardılları çarpımı olarak toplulaştırır. Dört dönem boyunca işletimsel Duolingo İngilizce Testi verisinde, topluluk havuzlanmış tek çalıştırma kıyaslamasına ardıl ortalamalarda eşleşmiştir (zorluk için r = ,998, log-ayırt edicilik için ,991) ve standart sapmalarda (r = ,970 ve ,920), maruziyet üçtebirlikleri boyunca uzlaşma/havuzlanmış SD oranında 0,91–0,98 arası bir artık alt dağılım farkıyla — en seyrek madde üçtebirinde yoğunlaşmış; burada önselin fazla sayılması en çok acıtır. Ölçme dersi iki katlıdır: tahmini bir önsel, paralel Bayes hesaplamasının standart alt önsel araçlarıyla ele alınamaz; ve ardıl *dağılım farkı* — uyarlanabilir seçim ve puanlamanın tükettiği belirsizlik — düzeltmenin ardıl ortalaması kadar hedefidir.

- **İki yayımlanmış sayıdan bir sistemin dağılım farkını belirlemek:** [[el-salvador-ai-tutoring-selection-claim-2026|Restrepo Morales ve ark. (2026)]]], bir [[learning-gains|başarı]] dağılımının standart sapmasının yalnızca yayımlanmış özet istatistiklerden — ortalama ile sabit bir yeterlilik kesim puanında veya üzerinde olan öğrenci oranından — kurtarılabileceğini göstermektedir; çünkü bir dağılım varsayımı altında σ = (c − μ) / z(1 − p). PISA 2025 El Salvador’a uygulandığında ([[math-education|matematik]] ortalaması 346, seviye 2 kesimi olan 420,07’de veya üzerinde %12,28), çıkarılan σ 63,8’dir (okuma 76,8, fen 63,8) — ölçeğin tabanına sıkıştırılmış bir dağılım için beklendiği gibi, 100 olan uluslararası kıyaslamanın belirgin biçimde altındadır; üç tahmin bağımsız ikili sayı çiftlerinden elde edilmiş ve birbiriyle yaklaşık 13 puan fark içindedir — hafif bir iç tutarlılık kontrolü. Seviye 2’deki oran her PISA sistemi için rapor edilmekte ve SDG 4.1.1 göstergesini beslemektedir; bu nedenle belirleme mikro veri gerektirmez ve aynı makale, standartlaştırılmış etki büyüklüklerinin kendi örneklem dağılım farkına bölündüğünde çalışmalar arasında meşru biçimde karşılaştırılamayacağı argümanı üzerine, bir matematik boşluğunu üç biçimde rapor ederek etki büyüklüklerindeki payda sorununu gösterir — 129 puan, 1,29 uluslararası standart sapma veya Salvadoran dağılımının kendi 2,02 standart sapması.

## Bilgi tabanındaki ölçme araçları

Eğitimde ölçmenin merkezi bir işlevi, **araçların** — yapıları işlevsel kılan somut ölçeklerin, testlerin ve kodlama şemalarının — geliştirilmesi, doğrulanması ve kullanılmasıdır. Bilgi tabanının makaleleri, eğitimde YZ yapıları için geniş bir araç yelpazesini belgelemektedir; bunlar neyi ölçtüklerine ve ölçme yaklaşımlarına göre sınıflandırılabilir.

### YZ / üretici YZ okuryazarlığı araçları

YZ okuryazarlığı, bilgi tabanında en zengin araç kapsamına sahip yapıdır. İki geniş aile vardır: **performans temelli testler** (nesnel, öz bildirim önyargısına daha az açık) ve **öz bildirim ölçekleri** (öznel, algılanan yeterliliği yakalar). Bu ikinci ailenin ödünleşimleri [[self-report-measures]] sayfasının konusudur: öz bildirim tutumları ve algıları ucuz biçimde ulaşır, ancak yeterlilik veya davranış hakkında bir iddia taşıyamaz ve bilgi tabanı, paralel öz bildirim ile performans ölçümleri karşılaştırıldığında %40’lık bir fazla tahmin boşluğunu belgelemektedir.

- **Performans temelli (nesnel) ölçümler.** Amiral gemisi, 25 kavramlık bir plan üzerine kurulu 20 maddelik çoktan seçmeli bir araç olan [[jin-glat-genai-literacy-assessment|GLAT (Generative AI Literacy Assessment Test — Üretici YZ Okuryazarlığı Değerlendirme Testi)]]’tir; dört boyutta (Bil ve Anla, Kullan ve Uygula, Değerlendir ve Yarat, [[ethics]]) yer alır ve 355 öğrenciyle CTT + 2PL IRT ile doğrulanmıştır (RMSEA = 0,03, CFI = 0,97, α = 0,80, ω = 0,81). Kritik biçimde, GLAT puanları, öz bildirim puanlarının başarısız olduğu yerlerde YZ destekli görev performansını öngörmüştür — YZ okuryazarlığı için **performans temelli ölçümün öz bildirimden üstün olduğunun** kanıtı. [[ai-literacy-assessment-misalignment]] sayfasındaki ilgili çalışma, öz bildirim ile performans temelli YZ okuryazarlığı arasındaki boşluğu nicelleştirmektedir (öğretmenler yaklaşık %40 fazla tahmin etmektedir) ve [[tracing-genai-literacy-interaction-patterns]], bildirilen kullanıma dayanmak yerine fiili öğrenci–YZ etkileşim kalıplarını izler.

- **Öğretmenlerin ne bildiğini değil, ne yaptığını ölçmek.** 486 öğretmenle yürütülen bir doğrulama, öğretmenlerin üretici YZ’nin eğitsel kullanımları için altı boyutlu bir araç üretmiştir — yönetim, materyal oluşturma, değerlendirme, güçlendirme, çeşitlilik ve motivasyon — kullanımın çok boyutlu olduğunu doğrulamış; ancak öz bildirimler sınıf uygulaması hakkında bir iddia taşıyamaz ([[questionnaire-teachers-genai-uses-validation-2026|Pérez-Montesdeoca ve ark. (2026)]]).

- **Öz bildirim ölçekleri.** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL]], YZ okuryazarlığını üç alanda (YZ Kavramları; Uygulama ve Teknik Beceriler; YZ Dijital Vatandaşlık) ve dört iskeleli düzeyde işlevsel kılar; [[ai-literacy-heptagon-2026|YZ Okuryazarlığı Yedigeni]], yedi boyutu (teknik, uygulama, [[critical-thinking|eleştirel düşünme]], etik, sosyal etki, bütünleştirme, hukuki/[[regulation|düzenleyici]]) Bloom’a uyumlu dört yeterlilik düzeyiyle yapılandırır. [[genai-skill-bypass-literacy]], öğrenciler ile personel için ıraksak YZ okuryazarlığı yollarını haritalar ve [[panciroli-ai-literacy-episodes-situated-learning]], okuryazarlık değerlendirmesini [[situated-learning|durumsal öğrenme]] olaylarında temellendirir. Daha genç öğrenenler için araç geliştirme de ilerlemektedir: [[ai-literacy-self-assessment-questionnaire-primary-2025|Thianwan ve Srikoon (2025)]]’in YZ Okuryazarlığı Öz Değerlendirme Anketi (AIL-SAQ), 4 ila 6. sınıflardaki öğrenciler için 15 maddelik bir öz bildirim ölçeğidir; YZ’yi Öğrenmek, YZ’nin Nasıl Çalıştığını Öğrenmek ve YZ ile Yaşam İçin Öğrenmek eksenlerinde düzenlenmiştir; 335 öğrenciyle açımlayıcı faktör çözümlemesi ve 579 öğrenci daha ile doğrulayıcı faktör çözümlemesiyle doğrulanmış, genel Cronbach alfası ,934’tür.

- **[[discipline-specific-aied|Alana özgü]] YZ okuryazarlığı.** [[teacher-education-ai-literacy-sdt-2026]], bir [[self-determination-theory]] çerçevesi içinde [[teacher-role|öğretmen]] YZ okuryazarlığı ölçümleri geliştirir (382 öğretmen, faktör doğrulamalı); [[conceptualizing-preservice-teachers-ai-readiness-2026]], zekâ temelli [[tpack]] aracılığıyla öğretmen adaylarının [[teacher-ai-competency|YZ hazır bulunuşluğunu]] ölçer; [[ai-literacy-career-adaptability-business-2026]], [[business-education|işletme eğitiminde]] öğrenci YZ hazır bulunuşluğunu ve [[career-development-and-readiness|kariyer uyum yeteneğini]] değerlendirir; [[llm-critical-thinking-teamwork-review]] ise LLM destekli eleştirel düşünme ve ekip çalışması sonuçlarına yönelik araçları gözden geçirir. Eğitimci ölçümüne doğru uzanan biçimde, Öğretmenlerin YZ Okuryazarlığı Ölçeği (TAILS), YZ okuryazarlığını özellikle [[teacher-education|dil öğretmenliği eğitimi]] içinde ölçmek üzere ED-AI çerçevesinin altı boyutunu işlevsel kılar (faktör çözümlemesiyle doğrulanmış); öğrencileri veya genel kullanıcıları hedefleyen değerlendirmelerdeki bir boşluğu doldurmaktadır.

### Tutum, kabul ve motivasyon araçları

- **Teknoloji kabulü.** TAM/UTAUT’a dayalı araçlar, algılanan yararlılığı, kullanım kolaylığını ve YZ’yi kullanma davranışsal niyetini ölçer. [[technology-acceptance-model]] sayfasına ve onun [[acceptance-ai-english-tools-2026]] (YZ destekli İngilizce öğrenme araçları, disiplin/yeterlilik grupları arasında psikometrik doğrulama) ile [[tian-genai-learning-adoption-pathways-2026|üretici YZ benimseme yolları]] uygulamalarına bakın.

- **Öz yeterlilik ve motivasyon.** [[self-efficacy]] araçları ve motivasyon ölçekleri (örneğin [[agency|özerklik]]/yeterlilik/ilişkililik üzerine kurulu SDT temelli ölçümler; [[teacher-education-ai-literacy-sdt-2026]]), YZ kullanımının motivasyonel öncüllerini ve sonuçlarını yakalar. Bunlar [[student-engagement]] ve [[prior-knowledge]] ölçümüne bağlanır.

- **Proje temelli öğrenme algıları.** Zhu ve Kong (2026), YZ okuryazarlığı kurslarında [[problem-solving|problem çözme]] için YZ kullanırken öğrencilerin proje temelli öğrenmeye (PBL) ilişkin algılarını ölçen, bağlama dayalı bir YZ [[project-based-learning|proje temelli öğrenme]] ölçeği (AI-PBLS) geliştirir ve doğrular (1.027 [[k-12|lise]] ve üniversite öğrencisi üzerinde EFA ve CFA, 446’sı tam; 446 tamamlayan), ve SEM uygulamaları güçlendirmenin ve etik farkındalığın PBL’den doyuma ilişkisi nasıl aracılık ettiğini gösterir — YZ uygulamalarında algılanan PBL deneyimini değerlendirmek için sağlam bir araç.

### Değerlendirme kalitesi ve geçerlilik araçları

- **Otomatik puanlama ve derecelendirme ölçeği araçları.** [[harmogen-ai-assessment-rubric-generation|HARMOGEN-R]], değerlendirme derecelendirme ölçekleri üretir; [[ai-assisted-instructor-supervised-grading-feedback]], YZ puanlama kalitesini Ayrıntılı [[feedback]] ölçütlerine karşı değerlendirir; [[ai-assessment-scale-reform]], YZ’nin geleneksel değerlendirme ölçeklerini nasıl altüst ettiğini ele alır.

- **Geçerliliği güçlendiren tasarımlar.** [[roe-assessment-twins-2026|Değerlendirme ikizleri]], aynı sonuçları değerlendiren daha az savunmasız bir eşdeğerle [[generative-ai|üretici YZ]]’ye açık bir görevi eşleştirir; Messick’in altı geçerlilik kanıtı dizisi boyunca tehditleri haritalar.

- **Sonuç uzayını yardıma göre bölümleme.** Bir ölçme programı, bir eserin alan düzeyinde içeriğinin kaynağının sistem değil öğrenen olduğu ölçüde nasıl belirlendiğini tanımlayan **model yazarlığını** dört yüzeyli, dört düzeyli bir yapı olarak tanımlar ve denetlenen 24 çalışmanın neredeyse tamamının performansı YZ mevcutken ölçtüğünü, hiçbirinin YZ geri çekildikten sonra ölçmediğini rapor eder ([[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]]).

- **Söylem ve katılım kodlaması.** [[icap-cognitive-engagement-llm-agents]], [[icap-framework|ICAP]] çerçevesini 7 puanlık bir bilişsel katılım kodlama şemasına genişletir; insan belgelemesini (κ = 0,906–0,998) LLM temelli etiketlemeyle (κ = 0,541–0,609) karşılaştırır — otomatik kodlamanın hâlâ eğitimli insanların gerisinde kaldığını gösteren bir ölçme aracı çalışması. Otomatik kodlama ayrıca [[prompt-engineering|bağlam duyarlı istek metni]] aracılığıyla ilerlemektedir; bu yaklaşım bağlamsal bağımlılıkları modelleyerek, süreç verisinden [[collaborative-learning|işbirlikçi problem çözme]] becerilerini güçlü temel çizgilerden üstün performansla kodlamak için bilişsel ve sosyal yetileri birleştirir — elle kodlamanın emek yoğunluğunu ele alarak büyük ölçekli, gerçek zamanlı değerlendirmeyi mümkün kılar.

- **Beceri çıkarımı.** [[principal-trait-analysis-human-ai-skills-2026]], insan–YZ işbirliğindeki “becerileri” başlıca nitelik çözümlemesiyle çıkarır — işbirliği yeterliliğinin veri güdümlü bir ölçümü.

### Ölçme yaklaşımı önemlidir

Bilgi tabanının kanıtı tekrar tekrar, bir yapının **nasıl** ölçüldüğünün sonuçları değiştirdiğini göstermektedir. Öz bildirimli YZ okuryazarlığı, performans temelli ölçümlerden keskin biçimde ayrışır ([[ai-literacy-assessment-misalignment]]); katılımın LLM belgelemesi, eğitimli insan kodlamasından ayrışır ([[icap-cognitive-engagement-llm-agents]]); ve gizil yapılar insanlar ile LLM’ler arasında farklıdır ([[assessment-latent-structure-human-llm-2026]]). Titiz araç doğrulaması — güvenilirlik, yapısal geçerlilik, dışsal/öngörücü geçerlilik — bu nedenle bir biçimsellik değil, güvenilir eğitimde YZ kanıtının temelidir ve [[assessment-validity]] ile [[psychometrically-aware-ai]] kavramlarına bağlanır. Yeni bir materyal düzeyinde çalışma, basit bir kabul iddiasının arkasında ne kadar doğrulama çalışmasının durduğunu göstermektedir: [[age-tiered-ai-literacy-guidebooks-2026|Wang, Chuang ve Wu (2026)]]], iki yaş kademeli YZ okuryazarlığı kılavuz kitabı için yarıya bölme tasarımı kullanmıştır (geliştirme örnekleminde EFA, ayrılmış yarıda CFA); KMO = ,820, açıklanan varyansın %67,3’ü, kabul edilebilir öğrenci uyumu (CFI = ,943, RMSEA = ,059, SRMR = ,059), ,84 ile ,90 arası bileşik güvenilirlik ve baskılar arası ölçüm değişmezliği rapor etmiş; ardından aracın zorlandığı yeri, ,950’ye varan HTMT değerleri ve birliği sınanması gereken kısıtlı bir oyunsuluk–niyet korelasyonu belgeleyerek göstermiştir. Farklı madde işlevine yönelik tamamlayıcı kontrolleri, bu sayfanın savunduğu dürüstlüğün modelidir: değişmezlik sürdü, ancak daha genç öğrenciler arasındaki düşük varyasyonlu yanıt kalıpları, bu katılımcılar çıkarıldığında bir grup farkının zayıfladığı anlamına geldi; ve makale bunu manşet sonucunun yerine, onun yanında rapor eder.

[[assessing-student-drive-framework-2025|Oliveira ve ark. (2025)]], yeni bir süreç ölçümü için doğrulama dizisini göstermektedir: öğrencilerin üretici YZ etkileşim günlüklerini 35 alt kategorilik bir taksonomiye karşı puanlamak yalnızca orta düzeyde değerlendirici arası uyuma ulaşmıştır (Cohen’ın κ değeri = 0,44), ancak deneme puanlarıyla r = 0,54 korelasyon göstermiştir; bu, yeni ölçüme yakınsak destek sağlamıştır.

- **Uyum katsayıları derlemin özellikleridir ve puanlar ortak ürünlerdir.** 60 pazarlama gönderisinin bir otomatik puanlama doğrulaması, bir LLM için ,435, kurallar-artı-LLM hibriti için ,266 ve deterministik kurallar için ,091 mutlak uyum ICC(2,1) değerleri rapor etmiştir; belirsizlik 2,000 yazar kümesi önyükleme örnekleminden tahmin edilmiş ve MAE 6,28–17,22 puan olmuştur; araştırmacı yazarlı çıpaların eklenmesi değerlendirici arası uyumu ,338’den ,902’ye yükseltmiş; bu, bu tahminlerin referans kümeye ne kadar güçlü biçimde bağlı olduğunu göstermektedir ([[automated-scoring-marketing-posts-agreement-2026]]). [[physics-education|Fizik]] kıyaslamalarının bir uzman yeniden puanlama denetimi, aynı noktayı araç düzeyinde tamamlar: denetlenen retlerin %95,20’si model hataları değil, kıyaslama veya puanlayıcı hatalarıdır; bu nedenle ölçülen bir puan, madde bankasının, derecelendirme ölçeğinin ve puanlayıcının ortak bir özelliği olarak rapor edilmelidir ([[frontier-models-physics-benchmark-audit-2026]]).

**Güvenilirliğin bir kısmı modelin kendisinden kurtarılabilir.** [[know-when-to-trust-ai-scoring-reliability-2026|Organisciak ve Acar (2026)]]], Alternatif Kullanımlar Testine verilen 20.000’den fazla yanıtta LLM temelli puanlamanın üç ucuz yükseltmesini değerlendirir: modelin kendi belirteç düzeyi güvenini okumak, tek bir en iyi tahmin yerine en üst n tahmini üzerinde olasılık ağırlıklı ortalama almak ve modeller arasında toplulaştırma yapmak. Her biri insan puanlarıyla uyumu artırmıştır (en iyi yapılandırmada korelasyon r = 0,781’den 0,823’e yükselmiş ve RMSE 0,599’dan 0,498’e düşmüştür) ve tanılamaları, tek geçişli puanlamanın belirli bir başarısızlığını belirler: modelin ifade ettiği güven, doğruluğuyla olumsuz ilişkilidir (β = −0,602). Bu bir model sonucu değil, bir ölçme yaklaşımı sonucudur — aynı model farklı puanlandığında daha güvenilir bir araçtır — ve yukarıdaki derlem düzeyinde uyum kanıtının yanında yer alır.

2026 yılında 33 öğretmen YZ okuryazarlığı aracının bir değerlendirmesi, araç geliştirmenin nerede olgun nerede olgunlaşmadığını göstermektedir. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore ve Maat (2026)]]], araçları COSMIN ve Terwee ve ark. (2007) çalışmasından uyarlanmış bir karar matrisine göre derecelendirmiştir; iç tutarlılığın en güçlü alan (33’ün 28’i, %84,8 A düzeyinde) ve adilliğin en zayıf alan olduğunu, ölçüm değişmezliği veya farklı madde işlevi kanıtı rapor eden yalnızca beş aracın (%15,2) bulunduğunu tespit etmiştir. Yapısal geçerlilik güçlüydü; 24 araç (%72,7) CFA, PLS-SEM veya IRT modellemesi yoluyla A düzeyindeydi, oysa içerik geçerliliği başta nitel incelemeye dayandı; nicel uzman uyum istatistiklerinin yokluğu nedeniyle 21 araç (%63,6) B düzeyindeydi.

Otomatik madde seçimi, bir aracı yeniden şekillendirmeden kısaltabilir: birleştirilmiş iki dalga örneklemi (N = 305, 342) üzerinde karınca kolonisi optimizasyonu, tam ölçekle her boyutta r = 0,910–0,944 korelasyon gösteren 12 maddelik bir kısa form üretmiştir; ancak boyut başına iki madde daha dar bir içerik yelpazesini kapsar ([[genai-srl-l2-writing-scale-2026|Wang, Zhang ve Zhang (2026)]]).

## Sorunlar ve sınırlar: ölçmenin gözden kaçırabilecekleri ve yanlış yapabilecekleri

Eğitimde ölçme güçlüdür ancak yanıltılabilirdir. Onun başarısızlık kiplerini anlamak, eğitimde YZ kanıtını eleştirel biçimde okumanın önkoşuludur — ve görünürdeki bir öğrenme kazancının veya yapı iddiasının, gerçek bir etki yerine ölçmenin bir yapıtı olup olmadığını tanımanın.

- **Güvenilirlik sınırları.** Ölçme hiçbir zaman kusursuz biçimde güvenilir değildir; hata varyansı her zaman mevcuttur. Araçların iç tutarlılığı veya test–tekrar kararlılığı düşük olduğunda, gözlenen farklılıklar gürültü olabilir. YZ bağlamlarında yeni başarısızlık kipleri bunu büyütür: LLM üretimi yanıtlar, insan puanlamasından ayrışırken yüksek makine uyumuyla puanlanabilir ([[icap-cognitive-engagement-llm-agents]]); ve otomatik puanlama, sistematik biçimde yanlışken *içsel* olarak tutarlı olabilir — geçerlilik olmadan kesinlik. AIEd araştırmasının [[limitations-in-aied-research|ölçme sınırları]], güvenilir olmayan araçları çapraz kesen bir zayıflık olarak belgelemektedir.

- **Hata olarak kodlama belirsizliği iki başarısızlığı birbirine karıştırır.** 30 ifadeli bir ruh sağlığı bilgi testinde, doğruluk puanlaması *bilmiyorum* seçeneğini yanlış olarak saymıştır; ancak öğrencilerin %67,3’ü bir olguda bunu seçerken model yanıtlarının %60,6’sı olumlu biçimde yanlıştı — zorunlu doğru/yanlış biçimi belirsizliği yanlış bir inançtan ayıramaz ([[mental-health-literacy-students-llms-2026|Richter ve ark., 2026]]).

- **Değerlendirici uyumu, pratik tavanı belirler.** Uruguay’nın [[human-in-the-loop-ai-scoring-national-assessment-2026|*Acredita EB*]] sisteminde yürütülen geniş ölçekli bir doğrulama, YZ puanlamanın pratik tavanını insan değerlendirici uyumunun kendisinin belirlediğini bulmuştur: on uzmanın 50 metni bağımsız olarak puanladığı çalışmada, hiçbir derecelendirme ölçeği maddesi uzlaşıyla oy birliğine ulaşmamış; en ıraksak değerlendirici genellikle %80 uyumun altında kalırken en iyisi %90’ı aşmış; ve neredeyse tüm yanıtların karşıladığı çarpık maddelerde Cohen Kappa yalnızca hafif veya orta düzeyde kalmıştır. Yazarlar bu nedenle otomatik puanları, kendisi kusurlu bir referans standardına karşı yargılamaktadır — on değerlendirici, çoğu yanıt için tek bir işletimsel puan ve geleneksel %70 kabul edilebilirlik bölgesinde yer alan birkaç madde — tek değerlendiricili işletimsel etiketlere dayanan herhangi bir ölçme iddiası için bir ihtiyat uyarısı.

- **Geçerlilik — yanlış şeyi ölçmek.** Geçerlilik, bir aracın iddia ettiği yapıyı ölçüp ölçmediğini sorar. Yaygın başarısızlıklar arasında **yapının yetersiz temsili** (yalnızca teknik bilgiyi örnekleyen, etiği gözden kaçıran bir YZ okuryazarlığı testi) ve **yapıyla ilgisiz varyans** (okuma akıcılığını ödüllendiren, hedef beceri yerine, bir madde) yer alır. [[ai-scoring-language-bias-physics|YZ puanlama ve dil önyargısı]], dil, ifade ve üslup gibi yüzey özelliklerinin, amaçlanan yapıyla ilgisiz biçimlerde otomatik puanları nasıl yönlendirebileceğini göstermektedir. [[assessment-validity]], bu tehditlere karşı sigortadır.

- **Bir ölçek, amaçlanan yapıları ölçmeden amaçlanan sayıda faktör döndürebilir.** [[ai-empathy-scale-psychometric-evaluation-2026|Kang, Lee ve Kang (2026)]]], 42 maddelik bir YZ empati ölçeğinden altı faktör elde etmiş; ancak maddeler amaçlanan altı alt faktörü kurtaramamıştır — Prosocial Intention (Toplumsal Fayda Niyeti) hiçbir faktör oluşturmamıştır — bu nedenle yapı geçici olarak sunulmuştur.

- **Öz bildirim boşluğu.** Öz bildirim ölçümleri *algılanan* yeterliliği yakalar, fiili yeterliliği değil. Bilgi tabanı tekrar tekrar, öz bildirimli YZ okuryazarlığının performans temelli ölçümlerden keskin biçimde ayrıştığını ([[ai-literacy-assessment-misalignment]], öğretmenlerde yaklaşık %40 fazla tahmin) ve öz bildirim puanlarının, performans testlerinin başarılı olduğu yerlerde fiili YZ destekli performansı öngöremediğini göstermektedir ([[jin-glat-genai-literacy-assessment|GLAT]]). Öz bildirime dayanan ölçümler, yapıları sistematik biçimde olduğundan yüksek gösterebilir ve gerçek beceri boşluklarını gizleyebilir.

- **Havuzlanmış tahmin kırılgandır.** Yalnızca aynı örneklemdeki öznel–nesnel YZ okuryazarlığı korelasyonlarını havuzlayan bir 2026 yapılandırılmış derlemesi (N = 2.765), r = ,055 vermektedir (Hartung-Knapp %95 GA [−,047, ,156]); k = 3 düzeyinde, heterojenlik tahmincileri birbirinden ayrıştığı ve bir çalışmanın ağırlığın %77,2’sini taşıdığı durumda, bu bir yeterlilik kesim değeri belirleyemez ([[competent-generative-ai-use-measures-review-2026|Verí (2026)]]).

- **Popülasyonlar arasında aktarılmayan yapılar.** [[assessment-latent-structure-human-llm-2026|Strugatski ve ark.]], değerlendirme araçlarının insanlar ve LLM’ler için *farklı bir faktör yapısına* sahip olabileceğini göstermektedir — bu, aynı maddelerin popülasyonlar arasında aynı gizil yapıyı ölçmeyebileceği anlamına gelir. İnsanlar içinde bile, bir grup üzerinde doğrulanmış araçlar (örneğin Batılı, kaynaklı [[higher-ed]]) diğerlerine genellemeyebilir ([[global-south]]); bu, eğitimde YZ ölçülerinin genellenebilirliği açısından bir kaygıdır.

- **Ölçmenin gözden kaçırabilecekleri.** Eğitimde YZ öğrenmesinde en merkezi yer tutan bazı yapılar, iyi ölçülmesi en zor olanlardır — ve bu nedenle araçlar tarafından en kolay gözden kaçırılan veya çarpıtılanlardır:
  - **Süreç ve strateji.** Standart sonuç ölçümleri öğrenmenin *ürününü* yakalar, *sürecini* değil. Öğrencilerin YZ ile fiilen nasıl etkileşime girdiğini gözden kaçırabilir — [[cognitive-offloading|aşırı yüklenme]], yansız kabul veya eleştirel doğrulama. [[tracing-genai-literacy-interaction-patterns]], öz bildirim ve sonuç testlerinin bu dinamikleri gözden kaçırması nedeniyle özellikle etkileşim izlerini kullanır.
  - **Boylamsal ve kalıcı öğrenme.** Tek bir son test, YZ yardımından kaynaklanan şişirilmiş performansı gösterirken kalıcı, yardımsız bilginin aşınmasını gözden kaçırabilir ([[genai-performance-vs-learning|performans–öğrenme boşluğu]]). Tek bir zaman noktasında yapılan ölçüm, öğrenme hakkında etkin biçimde yanıltıcı olabilir.
  - **Eşitlik ve erişim.** Tek düzeyde cihaz/bağlantı erişimi varsayan veya ayrıcalıklı örneklemlerde normlanan araçlar, [[equity-in-ai-education|kaynağı kısıtlı]] [[learners]] olanaklarını gözden kaçırabilir veya sistematik biçimde düşük ölçebilir; erişim boşluklarını yetenek boşluklarına yanlış atfedebilir.
  - **[[affective-computing|Duygusal]] ve motivasyonel durumlar.** Katılım, motivasyon ve öz yeterlilik çoğu zaman öz bildirimle ölçülür; yukarıdaki öz bildirim boşluğunu miras alır; öğrenmeyi yönlendiren durumsal, anlık dinamikleri yakalayamayabilir.

- **Otomatik ölçüm güvenle yanlış olabilir.** Yüksek makine güveni ile opak puanlamanın birleşimi, YZ çağına özgü ayırt edici bir risktir: bir LLM puanlayıcısı veya belgeleyicisi, oldukça kendi kendine tutarlı ama sistematik biçimde önyargılı puanlar üretebilir ve titizlik görünümü (büyük N, yüksek LLM’ler arası uyum), geçersizliği maskeleyebilir. [[ai-ed-evaluation]] ve [[psychometrically-aware-ai]] çerçeveleri panzehir niteliğindedir — otomatik ölçüler güvenilmeden önce kalibrasyon, belirsizlik farkındalığı ve geçerlilik kanıtı gerektirir.

Kısacası, eğitimde ölçme, örneklemediği şeyi (süreç, sürdürülebilirlik, erişim, duygu) **gözden kaçırabilir** ve kötü örneklediği şeyi (kendilik algısı, yüzey özellikleri, popülasyonlar arası yapılar) **yanlış yapabilir**. Eğitimde YZ bulgularını okumak bu nedenle, yalnızca *ne*nin ölçüldüğünü değil, *nasıl* ölçüldüğünü ve aracın neyi yakalamada başarısız olmuş olabileceğini sormayı gerektirir.

- **Denetlenebilir kodlama, tanımsal hatayı model hatasından ayırır.** EduBehaviors, bir yapıyı ayrı ayrı belgelenen gözlemlenebilir davranışlara ve açık bir toplulaştırma kuralına ayırır; böylece bir inceleyici hangi kanıtın bir etiketi ürettiğini görebilir ve yeni model çağrıları yapmadan kural değişikliğinden sonra etiketleri yeniden türetebilir; Teacher TalkMoves üzerinde makro-F1 0,673’e ulaşmış; bu, doğrudan [[llm|LLM]] istek metniyle rekabetçi bir değerdir ([[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado ve ark., 2026]]).

## Bağlantılar

Eğitimde ölçme, [[item-response-theory]], [[assessment-validity]], [[knowledge-tracing]] ve [[student-modeling]] için temeldir. [[learning-analytics]]’e (öğrenme verisinin ölçümü), [[educational-nlp]]’ye (dilin ölçümü) ve [[psychometrically-aware-ai]]’ye (ölçme kuramıyla uyumlu YZ) bağlanır. Geçerlilik ve güvenilirlik kaygıları, [[ai-ed-evaluation]]’i ve alanın [[limitations-in-aied-research|ölçme sınırlarını]] destekler. Ölçtüğü yapılar için [[ai-literacy]], [[technology-acceptance-model]], [[self-efficacy]], [[motivation]] ve [[student-engagement]] ile kesişir.

- **Destek müdahalelerinin nedensel modellemesi (2026):** yapısal nedensel modelleme protokolü, eğitim değerlendirmesini ilişkisel madde yanıt kuramı inanç güncellemesinin ötesine, güdümsel ve karşıt gerçekçi akıl yürütmeye (örneğin ipucu etkisi) taşır; yapısal denklemler tamamen mantıksal bilgi kullanılarak uzmanlardan elde edilir — zorunlu okul algoritmik beceri görevlerinde gösterilmiştir ([[causal-modeling-competency-assessment-2026]]).

## Bağlı kavramlar

- [[interpreting-and-applying-aied-research]]
- [[item-response-theory]]
- [[assessment-validity]]
- [[psychometrically-aware-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[educational-nlp]]
- [[learning-analytics]]
- [[ai-ed-evaluation]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[automated-assessment]]
- [[limitations-in-aied-research]]
- [[ai-literacy]]
- [[technology-acceptance-model]]
- [[self-efficacy]]
- [[benchmark]]
- [[self-report-measures]]
- [[motivation]]
- [[student-engagement]]

## Bağlı makaleler

- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[jin-glat-genai-literacy-assessment]] — GLAT: IRT-validated GenAI literacy test (Jin et al. 2025)
- [[icap-cognitive-engagement-llm-agents]] — Measuring cognitive engagement with an extended ICAP framework
- [[roe-assessment-twins-2026]] — Assessment twins for strengthening assessment validity under GenAI
- [[ai-literacy-heptagon-2026]] — The AI Literacy Heptagon
- [[ai-literacy-assessment-misalignment]] — Self-reported vs performance AI literacy misalignment
- [[teacher-education-ai-literacy-sdt-2026]] — Teacher AI literacy through self-determination theory
- [[acceptance-ai-english-tools-2026]] — AI acceptance measures for English learning tools
- [[llm-difficulty-calibration-programming-exams-2026]] — From evaluated models to evaluation aids
- [[llm-item-difficulty-prediction]] — Cognitive evaluation of LLM item-difficulty prediction
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[ai-scoring-language-bias-physics]] — AI scoring and language bias in physics
- [[ai-writes-code-student-writes-model-2026]] — Model authorship: theory & measurement for learning-by-construction with GenAI
- [[assessing-student-drive-framework-2025]] — DRIVE: assessing learning through GenAI interaction (DRI + Visible Expertise)
- [[xiong-ai-educational-measurement-review-2026]] — Decade thematic review of AI in educational measurement
- [[questionnaire-teachers-genai-uses-validation-2026]] — Questionnaire on teachers' uses of generative AI (Pérez-Montesdeoca et al. 2026)
- [[personalized-neural-cognitive-architecture-search-2026]] — AutoML personalized neural cognitive architecture search for learner profiles
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[age-tiered-ai-literacy-guidebooks-2026]] — Split-half EFA/CFA validation with invariance, HTMT and DIF checks, including an honest account of playfulness-intention construct overlap
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[competent-generative-ai-use-measures-review-2026]] — Beyond AI Literacy: A Structured Review and Exploratory Meta-Analysis of Measures for Competent Generative-AI Use
- [[bayesian-consensus-irt-item-banks-2026]] — Bayesian consensus calibration: divide-and-conquer recalibration of a continuously evolving IRT item bank (Jewsbury et al. 2026)
- [[el-salvador-ai-tutoring-selection-claim-2026]] — Bounding the learning claim of El Salvador's AI tutoring pilot (Restrepo Morales et al. 2026)
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Know When to Trust: model self-confidence, probabilistic scoring and ensembles as scoring reliability levers
- [[ai-literacy-self-assessment-questionnaire-primary-2025]] — A validated 15-item self-assessment questionnaire for upper-primary AI literacy (Thianwan & Srikoon 2025)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Systematic appraisal of 33 teacher AI literacy instruments across COSMIN-style quality domains (Zainal et al. 2026)
- [[mental-health-literacy-students-llms-2026]] — Mental Health Literacy Across Psychology Students and Large Language Models
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[ai-empathy-scale-psychometric-evaluation-2026]] — A 42-item AI empathy scale whose six factors did not recover the six intended subfactors
- [[genai-srl-l2-writing-scale-2026]] — A six-dimension GenAI-SRL scale for L2 writing; ant-colony-optimized 12-item short form tracks the full scale (r = 0.910–0.944) but narrows content coverage
- [[bloom-taxonomy-llm-item-classification-2026]] — Do Cognitive Classifications Predict Empirical Item Behaviour? Aligning Bloom's Taxonomy with the Psychometric Properties of National Centralized Mathematics Items across Grades 4–12

