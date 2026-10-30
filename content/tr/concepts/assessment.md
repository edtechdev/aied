---
connected_resources: [idstack, lesson-md, master-instructional-design]
title: "Değerlendirme"
created: "2026-10-14T06:55:12-04:00"
connected_faqs: [redesign-assessment-ai-era, reduce-ai-cheating, course-ai-policy, group-work-ai, asynchronous-online-courses-ai]
type: concept
foundations: [academic-integrity]
technology: [generative-ai, learning-analytics]
assessment: [assessment, assessment-validity, automated-assessment, educational-measurement, formative-assessment, process-oriented-assessment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/assessment
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

> **Değerlendirme** — öğrenenlerin ne bildiğine ve ne yapabildiğine dair kanıt toplama ve yorumlama süreci ve öğrenmeyi değerlendirmek için kullanılan yöntemler. [[ai-education]], değerlendirmeyi temelden yeniden şekillendirmiştir: [[automated-assessment|otomatik not verme ve puanlamayı]] güçlendirir, değerlendirme maddeleri üretir ve uyarlar ve öğrenciler YZ kullanabildiğinde değerlendirmelerin gerçekte ne ölçtüğüne dair derin sorular ortaya koyar. Değerlendirme, bilgi tabanının [[formative-assessment]], [[automated-assessment|otomatik not verme]], [[assessment-validity|geçerlilik]] ve [[educational-measurement]] kapsamasını düzenleyen şemsiye kavramdır.

## Düşünülmesi Gerekenler

- Değerlendirme burada öğrenenlerin ne bildiğine ve ne yapabildiğine dair kanıt toplama ve yorumlama olarak tanımlanır. Okumadan önce, “bir değerlendirme şu durumda geçerlidir…” cümlesini nasıl tamolardınız — ve her öğrenci işini üretmek için gizlice YZ kullanabilseydi o yanıtta ne değişirdi?
- Sayfa, bir öğrencinin GenAI’yi nasıl kullandığının (değerlendirici bütünleştirme karşı eleştirel olmayan kısayol benimseme) performansı öngördüğünü, ne sıklıkta kullandığının ise hiçbir şey öngörmediğini iddia eder. Bu, YZ’yi kullanımını sınırlayarak düzenlemeye dair yaygın bir içgüdü hakkında ne öne sürüyor?
- Bir öğrenen, alet olmadan yeniden üretemeyeceği profesyonel standartta işler sunabilir — performans ile altta yatan yetenek arasındaki çıkarımı keserek. Öğrencinin yardımsız gerçekten yapamadığı iş için verilmiş bir “yetkinlik” ile karşılaştınız mı? Bu ne ortaya çıkardı?
- Sayfanın sunduğu yapıcı soru “öğrencilerin YZ kullanmasını nasıl engelleriz?” değil, “onları gelecekteki işlerini yansıtan bağlamlarda YZ’yi düşünceli biçimde kullanmaya nasıl teşvik ederiz?”’dir. Amaç bu olsaydı kendi alanınızdaki değerlendirme neye benzerdi?
- DRIVE çerçevesi, bir öğrencinin GenAI ile [[student-engagement|angajmanının]] kalitesini — yalnızca ürünü — istek metinlerini stratejik biçimde yönlendirip yönlendirmediklerine ve kendi fikirlerini bütünleştirip bütünleştirmediklerine bakarak değerlendirmeyi önerir. Derin, yansıtan bir [[student-ai-interaction|YZ etkileşimini]] yüzeysel tüketimden ayırt etmek için neye bakardınız?
- YZ aracılı değerlendirme, kaygıyı azaltan ve profesyonel olarak ilgili görülen [[oral-assessment|sözlü sınavlar]], portfolyolar ve konuşma biçimleri çeşitlenmektedir. Kendi deneyiminizden hangi değerlendirme biçiminin en “YZ dirençli” olduğunu düşünüyorsunuz — ve direnç, eğitimsel değerle aynı şey midir?

## Giriş

Değerlendirme, eğitimde YZ için iki nedenle merkezîdir. Birincisi, YZ’nin kendisi öğrencileri değerlendirmek için kullanılır — kompozisyonları, kodu, kısa cevapları ve sınavları ölçekte notlar. İkincisi, sınıftaki YZ, öğrenciler [[generative-ai]] kullanarak iş üretebileceğinden, değerlendirmelerin geçerli biçimde ne ölçebileceğini değiştirir. Alan bu nedenle değerlendirmeyi otomasyonlaştıran *araçları* ve YZ’nin ortaya çıkardığı *geçerlilik ve dürüstlük* sorularını birlikte kapsar.

## Değerlendirmede YZ nasıl kullanılır

- **Otomatik değerlendirme:** [[automated-assessment|YZ temelli değerlendirme]], [[automated-assessment|otomatik not verme]], [[automated-essay-scoring]] ve [[automated-question-generation]] yoluyla çok kipli değerlendirmeleri kapsar — çoktan seçmeli, kısa cevap, kompozisyon, kod ve performansa dayalı değerlendirme.
- **Biçimlendirici değerlendirme:** [[formative-assessment|YZ sistemleri]], biçimlendirici değerlendirme maddelerini ölçekte üretir, doğrular ve uyarlar; yalnızca [[summative-assessment|toplu]] değerlendirmeden çok süregelen öğretimi besler.
- **Öğrenme analitiği ve ölçme:** [[learning-analytics]] ve [[educational-measurement]], değerlendirme verilerini öğrenme süreçlerine bağlar; performansı yorumlamak için [[item-response-theory]], [[knowledge-tracing]] ve [[student-modeling]] kullanır. [[razavi-powers-item-difficulty-llm-2026|Razavi ve Powers (2026)]], LLM temelli madde zorluğu tahminini bir ölçme girdisi olarak gösterir: Rasch IRT modeli altında kalibre edilen 5.170 K-5 matematik ve okuma maddesi boyunca GPT-4o’nun sıfır atışlı derecelendirmeleri gerçek zorluklarla orta-kuvvetli ilintide olmuştur (r = 0,83 matematik, r = 0,81 okuma) ama sınıf düzeyine göre değişmiştir; oysa öznitelik temelli bir yaklaşım (LLM çıkarılan öznitelikleri ağaç temelli modellere) r = 0,87’ye varan ilintilere ulaşmıştır. Çalışma, test profesyonelleri için pratik bir yedi adımlı iş akışı sunarken K-5 matematik ve okumanın ötesindeki genellenebilirliğin belirsiz olduğuna dikkat çeker.
- **Geri bildirim döngüleri:** YZ değerlendirmesi giderek daha fazla, değerlendirmeden öğrenmeye döngüyü kapatan [[feedback|geri bildirim döngülerine]] beslenir.
- **E-portfolyo değerlendirmesi:** [[eportfolio|e-portfolyolar]], süreç temelli, YZ dirençli bir değerlendirme biçimi olarak öğrenci işlerini ve yansıtmaları zaman içinde bir araya getirir. Üretken YZ, portfolyo *sürecine* — geri bildirim üretmeye, [[scaffolding]] yansıtmayı ve (uygun rubrik tasarımıyla) değerlendirmeyi desteklemeye — yardımcı olabilir; oysa portfolyonun akıl yürütme izleri ve taslaklar üzerine verdiği önem YZ uydurmasına direnir. [[ni-lam-multiliteracies-ai-portfolio-2026|YZ destekli portfolyo değerlendirmesi]] ve [[sutama-chatgpt-eportfolio-speaking-2026|EFL konuşma için ChatGPT + e-portfolyo]], YZ’nin hem portfolyo deneyimini hem öğrenen [[feedback-literacy]]’sini geliştirebileceğini göstermektedir.
- **Açık uçlu not verme güvenilirliği modele bağlıdır:** [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko ve Drlik (2025)]], on bir GenAI ve cümle gömme modelini 1.885 açık uçlu yazılım mühendisliği yanıtı üzerinde iki uzman puanlayıcıya karşı kıyaslamıştır: yalnızca GPTo1 neredeyse kusursuz bir uyuma ulaşmıştır (Fleiss’ Kappa 0,82), oysa referans temelli modeller doğru ama farklı ifade edilmiş cevapları cezalandırmıştır. GPTo1, denetimsiz dağıtılabilir bulunan tek model olduğundan ama tescilli API maliyetleri taşıdığından, yazarlar ileri düzey modelleri hesaplı seçeneklerle veya [[human-in-the-loop-ai|insan denetimiyle]] eşleyen hibrit stratejileri önermektedir. 42 ampirik çalışmayı (2023–2025) kapsayan PRISMA rehberli bir [[meta-analysis-systematic-review|sistematik derleme]], bu koşullu güvenilirlik tablosunu tüm not verme alanında teyit eder: LLM’ler kapalı uçlu ve kısa cevap görevlerinde insan puanlayıcılarla eşleşir ama karmaşık, açık uçlu veya öznel işleri tam olarak yerine geçemez ve tek biçimli bir not verme önyargısı ortaya çıkmamıştır — modeller bazen daha müsamahakâr, bazen daha katı olmuş ve sıklıkla aşırı puanlardan kaçınmıştır ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). Yinelemeli rubrik iyileştirme, yüksek getirili [[medical-education|tıbbi]] ortamlarda LLM açık uçlu puanlamasını insana yakın güvenilirliğe doğru itebilir: [[olvet-genai-scoring-open-ended-medical-2026|Olvet ve ark. (2026)]], öğretim elemanları analitik ve bütüncül rubrikleri hata örüntüsü analiziyle tekrar tekrar gözden geçirdikten sonra GPT-4’ün dört ön tıp sorusunun üçünde öğretim elemanı puanlayıcılarla önemli-neredeyse kusursuz uyuma ulaştığını (ağırlıklı kappa 0,94’e kadar), oysa artakalan bütüncül rubrik maddesinin yalnızca orta düzeyde uyumda kaldığını (κw = 0,54) bulmuştur — bu hem insan-razı-döngüde rubrik mühendisliğinin kazancını hem sentetik, bütüncül görevlerdeki sınırlarını göstermektedir.
- **YZ destekli sözlü ve performans değerlendirmesi.** Bir [[vocational-education|TVET]] tasarım çalışması, değerlendirmeyi metin ağırlıklı biçimlerden bir LLM tarafından desteklenen etkileşimli [[oral-assessment]] yönüne taşır: dört kohort boyunca 33 öğrenenin 21’i ses görevini gerçekçi bulmuş ve hiçbiri gerçek zamanlı konuşmanın yetkinliği yazılı bir portfolyodan daha iyi yansıttığına katılmamıştır; oysa özdeş sorular için kelime sayıları kohortlar arasında beş ila sekiz kat değişmiş ve dokuz öğrenci iki ila on üç kelimeyle yanıt vermiş ve hepsi doğru bululmuştur. Sistem, Mistral 7B ve faster-whisper ile 12 eş zamanlı öğrenene kadar hizmet veren tek bir dizüstü bilgisayarda çevrimdışı çalışmış, kayıtları 90 gün sonra silmiş ve puanlama yargılarını değerlendiricilerde bırakmıştır — iş yeri yönünde yeterlikler için [[human-in-the-loop-ai]] değerlendirme tasarımı örneği. ([[ai-supported-oral-assessment-tvet-2026]])

## Geçerlilik ve ölçme zorlukları

YZ temel [[assessment-validity|geçerlilik]] soruları ortaya koyar: YZ ile not verilen değerlendirmeler öğrenen öğrenmesini mi yoksa [[prompt-engineering|YZ istek metni yazımı becerisini]] mi ölçer? Öğrencilerin YZ kullanımı geleneksel değerlendirmeleri geçersiz kılar mı? Temel zorluklar şunlardır:

- **Yapı geçerliliği:** [[competency-based-education-genai-production-2026|Yetkinlik temelli eğitim araştırmaları]], üretken YZ’nin performans ile altta yatan yetenek arasındaki çıkarımı kestiğini gösterir — bir öğrenen, alet olmadan yeniden üretemeyeceği profesyonel standartta işler sunabilir. Bu, hangi yetkinliklerin değerlendirildiğini yeniden kavramsallaştırmayı gerekçelendirir.
- **Ortak yazarlık ve dürüstlük:** [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ortak yazarlık dürüstlüğü]], öğrencilerin anlamadıkları YZ tarafından üretilmiş içerik sunduklarında ihlal edilen geçerlilik kanıtının yeni bir kaynağını önerir ve bir yanıt olarak konuşma biçimli “YZ Viva”larını araştırır.
- **Psikometrik kalite:** [[psychometrically-aware-ai]] ve [[automated-assessment|güven duyarlı değerlendirme]], YZ puanlamasını güvenilir, tarafsız ve yorumlanabilir kılmak için çalışır.
- **YZ değerlendiricilerinin değerlendirilmesi:** [[ai-ed-evaluation]], otomatik değerlendiricilerin gerçekten çalışıp çalışmadığını — güvenilirlik, [[pedagogy]] ve [[equity-in-ai-education]] açısından — yalnızca başlıca doğruluk yerine belirlemek için yöntemler ve [[benchmark|kıyas ölçütleri]] sunar.
- **YZ ve akran not vermenin kaliteye bağlı güvenilirliği (2026):** Aynı [[higher-ed|lisans]] [[group-work|grup projelerinin]] ChatGPT, akran ve [[teacher-role|öğretmen]] not vermesini karşılaştıran [[usher-faraon-who-grades-best-2026|Usher ve Faraon (2026)]], öğretmenle not verme uyumunun *öğrenci işinin kalitesine bağlı* olduğunu göstermiştir: ChatGPT düşük kaliteli teslimleri en çok şişirmiş ve öğretmenle yüksek kaliteli işlerde daha iyi uyum sağlamış, oysa akranlar zayıf işlerde en iyi uyumu bulmuş ve güçlü projelere düşük not vermiştir. Bulgu, “güvenilir karşı güvenilir değil” ikili çerçevelemesine meydan okumakta ve alternatif değerlendiricilerin göreve ve performans düzeyine eşlendiği koşullu güvenilirlik modellerine işaret etmektedir.
- **İnsan not verme değer yüklüdür (2026):** [[luo-dawson-value-judgments-grading-2026|Luo ve Dawson (2026)]], GenAI destekli işin insan not vermesinin bile nötr, ölçüt temelli bir eylem olmadığını göstermiştir. 33 üniversite öğretmeniyle yapılan senaryo temelli görüşmelerde, not verme kararlarının kişi yönelimli (dürüstlük, çalışkanlık), kapasite yönelimli (bağımsızlık, GenAI becerisi, disiplin ustalığı), ilişki yönelimli (güven) ve adalet yönelimli (adillik, hayırseverlik) değerlerle yönlendirildiği ortaya çıkmıştır — ödevin ötesine, öğrenci hakkındaki öğretmen varsayımına kadar uzanmaktadır. Çalışma, değerlendirme sorusunu “GenAI kullanımı kopya çekmek midir?”den “öğretmenlerin değer yargıları notları nasıl şekillendirir ve bu değerler değerlendirilen sonuçlara ilişkin mi?”e yeniden çerçeveler — [[assessment-validity|geçerliliği]] ve GenAI kullanımının notları nasıl etkileyeceğine dair “iki yönlü [[explainable-ai|şeffaflığı]]” öne çıkarır.

## Dürüstlük ve tespit tartışması

Değerlendirmede YZ, [[academic-integrity|dürüstlük]] konuşmasını yoğunlaştırmıştır. Bir çizgi [[ai-detection|YZ tarafından üretilmiş metni tespit etmeye]] odaklanırken, büyüyen bir [[research-methods-aied|araştırma]] gövdesi, tespitin sınırlı, durumsal bir araç olduğunu — ilk başvurulan bir strateji olmadığını — savunur. [[beyond-detection-authentic-assessment-ai-2025|Beyond Detection]] ve [[responsible-assessment-ai-era-stanford-2026|Responsible Assessment]], özgünlüğün zorla var edilemeyeceğini; yeniden tasarlanması gerektiğini, YZ’yi beyan edilmiş bir iş ortağı olarak konumlandırmanın ve gözetim yerine [[authentic-assessment|özgün]], [[process-oriented-assessment|süreç temelli]] değerlendirmeyi önceliklemenin gerektiğini savunur. **[[walton-bearman-assessment-judgment-2025|Walton ve ark. (2025)]]**, bunu GenAI ile değerlendirmede yollarını **öğrencilerin gerçekte nasıl yargıladıklarına** dair kanıtlara temellendirir: 26 öğrenciyle yapılan geri kaydırma görüşmeleri, YZ bilgisini eleştirel biçimde değerlendirmekten ve YZ’nin sınırları yoluyla öğrenmekten, fikirleri eleştirel olmadan benimsemeye ve YZ katkılarını kendi çalışmaları olarak yanlış yargılamaya uzanan altı yargı olayından oluşan bir yelpaze ortaya çıkarmıştır. **[[stamatoulis-genai-use-patterns-2026|Stamatoulis ve ark. (2026)]]**, buna bir [[quantitative-research|nicel]] karşılık ekler: 157 öğrenci boyunca, GenAI’nin *nasıl* kullanıldığı (anlamayı desteklemek için değerlendirici bütünleştirme karşı düşük doğrulama kısayol benimseme) performansı öngörmüş, oysa basit kullanım **sıklığı ne** performansı ne akademik [[self-efficacy]]’i öngörmemiştir. Bu çalışmalar birlikte değerlendirme sorusunu öğrencilerin YZ kullanıp kullanmadığından *kullanımı nasıl yargılayıp örüntülediğine* yeniden çerçeveler.
 [[bassett-ai-detectors-education-2026|Bassett ve ark. (2026)]] daha ileri giderek tespitin hiç kullanılmaması gerektiğini savunur: olasılıksal çıktısı bağımsız olarak doğrulanamaz, çünkü gerçek dünya metni kökeni bilinmemektedir ve dedektör puanları — tek başına veya dilbilimsel işaretçiler, stil karşılaştırmaları, bir LLM’in iddiası veya öğrenci sessizliğiyle birlikte — dürüstlük soruşturmalarının gerektirdiği olasılık dengesi standardını karşılamamaktadır.

25 çalışmayı kapsayan bir PRISMA derlemesi, tespit tartışmasının atladığı bir risk etkeni ekler: ana dili İngilizce olmayan konuşmacılar, İngilizce yazmakta zorlandıklarında dürüstlüğü ihlal etme eğilimi göstermiştir; bu nedenle dürüstlük beklentileri, yalnızca uygulamadan çok somut akademik yazma desteğiyle eşleştirilmelidir ([[ssaho-ai-academic-integrity-review-2025|Balalle ve Pannilage (2025)]]).

## YZ çağında değerlendirme yeniden tasarımı

Bilgi tabanının değerlendirme literatüründeki yapıcı soru, “öğrencilerin YZ kullanmasını nasıl engelleriz?” değil, “onları gelecekteki işlerini yansıtan bağlamlarda YZ’yi düşünceli biçimde kullanmaya nasıl teşvik ederiz?”’dir. Bu, değerlendirmeyi şunun etrafında yeniden çerçeveler:

- **YZ kullanımını görünür ve değerlendirilmiş kılan özgün ve süreç temelli görevler.** [[authentic-assessment]] — değerli, gerçekçi görevlerde öğrenci performansını incelemek — YZ’nin meydan okumasına önde gelen yanıttır: bir [[llm]]’in inandırıcı biçimde simüle edebileceği her görev geçerliliğini yitirir; bu nedenle özgünlük, gerçek zamanlı [[collaborative-learning|işbirliği]], dijital ve sosyal katkı ve bireysel anlam oluşturma etrafında yeniden tasarlanmalıdır. Bu, [[zhan-boud-du-authentic-assessment-scoping-review-2025|özgün değerlendirme için tasarım çerçeveleri]], [[authentic-products-authenticated-processes-2026|özgün ürünler ve doğrulanmış süreçler]] ve [[tool-invariant-framework-agentic-ai|sürecin araç değişmez değerlendirmesi]] ile bağlantılıdır.
- **Geçerlilik kanıtına dayalı sorumlu değerlendirme tasarımı** ([[responsible-assessment-ai-era-stanford-2026]])
- **Değerlendirme hedeflerinden türetilen görev düzeyinde YZ izinleri:** [[mccorkle-aligned-genai-course-policy-2025|McCorkle (2025)]], bir [[educational-policy-ai|YZ politikasından]] önce gelen değerlendirme tasarımı işini gösterir — bir projedeki her görevi envanterlemek, neyin değerlendirildiğini ve hangi hedefe karşı olduğunu belirtmek ve bu temelde görev başına YZ’ye izin vermek veya yasaklamak (beyin fırtınası ve görüntü kürasyonuna izin verilir; öğrenme hedefleri oluşturma ve slayt tasarımına izin verilmez). Aynı hizalama alıştırması, değerlendirmenin desteklediği çıkarım üzerinde bir kontrol olarak iki kat işlev görür; çünkü öğretmene bir notun gerekçelendirmesi amaçlanan performansı adlandırmaya zorlar ([[assessment-validity]]).
- **Dilsel kipin ötesine geçen değerlendirme:** Jiang ve ark. (2026), ikinci dil öğretmenleri için çok kipli değerlendirme okuryazarlığını, dilsel, görsel, işitsel, jestsel ve mekânsal kiplerde yanıt çeken görevler için bilgi, değer ve yetkinlik olarak tanımlar. 30 Hong Kong İngilizce öğretmeniyle yürütülen bir yıllık program, değerlendirme stratejileri bilgisini 5 üzerinden 3,13’ten 4,15’e (kısmi η² = 0,571) ve öğrencileri desteklemede yetkinliği 3,05’ten 3,98’e (0,482) yükseltmişken üç değer alt alanının tümü düz kalmıştır. Öğretmenlerin kendi deneyimi çerçeveye iki boyut eklemiştir: uygulamayı rekabet eden müfredat önceliklerine karşı sürdürmek ve GenAI’yi eleştirel biçimde seferber etmek ([[multimodal-assessment-literacy-l2-teachers-genai-2026|Jiang ve ark. (2026)]]).
- **Ortak yazarlık ve beyan**, değerlendirme sözleşmesinin bir parçası olarak
- **Bir yetkinlik olarak üretim** — öğrenenlerin araçları yönlendirme ve profesyonel standartta iş üretme yeteneğini değerlendirmek ([[competency-based-education-genai-production-2026]])
- **Yalnızca ürünü değil, etkileşim sürecini değerlendirmek** — [[assessing-student-drive-framework-2025|DRIVE çerçevesi]] (Directive Reasoning Interaction + Visible Expertise / Yönergeli Akıl Yürütme Etkileşimi + Görünür Uzmanlık), bir öğrencinin *GenAI ile angajmanının* kalitesini değerlendirilen yapı olarak ele alır. Öğrencilerin istek metinlerini stratejik biçimde yönlendirip yönlendirmediklerine (DRI) ve alışveriş yoluyla kendi disiplin fikirlerini bütünleştirip geliştirip geliştirmediklerine (VE) bakarak yüzeysel tüketimi derin, yansıtan etkileşimden ayırır; sürece odaklı ölçütleri [[self-directed-learning]] kuramlarına ve [[icap-framework|ICAP]] hiyerarşisi çizgisinde bilişsel angajmana temellendirir. Bu, DRIVE’ı *YZ aracılı özgün değerlendirme* örneği yapar — bir tespit aracı değil, öğrenenlerin GenAI ile nasıl ortaklık kurduğunu değerlendiren bir rubrik.

Bu literatürdeki bir öneri, çerçeve içinde yeniden tasarımın ötesine geçer. [[ai-agents-joyful-assessment-third-space-2026|El Khoury ve Ma (2026)]], suistimali önlemek veya YZ kullanımını tespit etmek etrafında düzenlenen reformın eğitsel hayal gücünü denetim ve uyuma daralttığını savunur ve yerine **neşeli değerlendirme** önerir: güvenli, duygusal olarak duyarlı, [[agency|öğrenci özerkliğini]] güçlendiren ve destekleyen değerlendirme; güvenliği yük taşıyan koşul olarak, çünkü onsuz duygusal uyum performansa dönüşür, güçlendirme baskıya dönüşür ve özerklik riske dönüşür. Onların çerçevelemesi tespit gündemini ters çevirir — dürüstlük, başlangıç noktasından çok öğrencilerin angajman girmek istediği değerlendirme tasarımının bir sonucu olur — ve öğretmenin kurduğu [[agentic-ai|YZ ajanlarını]] (özel GPT’ler, Gemler, Copilot Studio ajanları), öğrencilerin yargılanmadan önce alıştırma yaptığı düşük riskli bir prova alanı olarak konumlandırır; YZ’nin kanıtları düzenlediği, öğretmenin ise onu yorumladığı iddiasıyla.

## Eğitimde Yapay Zeka açısından çıkarımlar

- **Değerlendirme ve öğrenme ayrılamaz:** iyi bir YZ değerlendirmesi, öğrenmeyi değerlendirdiği kadar ([[feedback|biçimlendirici geri bildirim]]) desteklemelidir.
- **Geçerlilik yeniden kavramsallaştırılmalıdır:** YZ öğrenci işi üretebildiğinde, değerlendirmeler yalnızca çıktıları değil, süreçleri, yargıları ve özgün üretimi ölçmelidir.
- **Otomasyon titiz biçimde değerlendirilmelidir:** otomatik değerlendiriciler, yalnızca doğruluk iddiaları değil, psikometrik ve [[bias-mitigation|adillik]] değerlendirmesi gerektirir.
- **Dürüstlük tespitten tasarıma kayar:** değerlendirmede YZ’ye en sağlam yanıt, YZ kullanımının beklendiği, beyan edildiği ve sorgulandığı görevler tasarlamaktır.
- **Yenilikçi uygulamalar birçok soruna birden çözüm olabilir.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais ve Galy (2026)]], beş birbirini güçlendiren uygulamadan oluşan bir setin — [[authentic-assessment]], öz ve [[peer-assessment]], yeniden değerlendirme, [[mastery-learning|standart temelli not verme]] ve not vermeme (ungrading) — “öğrenme için değerlendirme” paradigmayla hizalanarak, geleneksel, topla ağırlıklı, norm referanslı not vermenin zararlarına (yüzeysel öğrenme, aşındırılmış [[motivation|içsel motivasyon]], stres ve kaygı, eşitsizlik ve zedelenmiş [[academic-integrity|dürüstlük]]) üretken YZ çağında karşı koyabileceğini savunur. Benimsemenin alanlar arasında düzensiz olduğunu bulurlar — öz ve akran değerlendirmesi baskınken not verme odaklı yenilikler marjinal kalmaktadır — ve eğitimcileri artan deneysellik ve [[governance|kurumsal]] destekle değerlendirme ve not verme yeniliğiyle daha etkin ve karşılıklı biçimde angajmana girmeye çağırır.

- **YZ aracılı değerlendirme çeşitlenmektedir.** [[aivaluate-anxiety-assessment-2026|AIvaluate]], LLM ile güçlendirilmiş bir [[conversational-ai|konuşma ajanının]] performansa dayalı değerlendirmeler sırasında öğrenci kaygısını azalttığını göstermektedir; [[asynchronous-oral-assessment-2026|Pentland (2026)]], eş zamansız sözlü değerlendirmelerin daha yüksek angajman sunduğunu ve profesyonel olarak ilgili algılandığını bulmaktadır; [[graph-its-adaptive-algorithms-2026|grafik temelli ITS]], değerlendirmeyi beslemek için uyarlanabilir bilgi durumu izleme kullanmaktadır.

## Bağlı kavramlar
- [[learners]] — Öğrenenler: öğrenen tarafı kavramların şemsiyesi
- [[pedagogical-partnerships]] — Pedagojik Ortaklıklar
- [[formative-assessment]] — Biçimlendirici değerlendirme: ölçekte YZ tarafından üretilen, doğrulanan, uyarlanan maddeler
- [[automated-assessment]] — Değerlendirme kipleri boyunca otomatik not verme ve puanlama
- [[authentic-assessment]] — Süreç temelli, YZ dirençli özgün görevler
- [[assessment-validity]] — Üretken YZ altında değerlendirmelerin geçerliliği
- [[educational-measurement]] — YZ değerlendirmesini besleyen ölçme kuramı
- [[automated-essay-scoring]] — Otomatik kompozisyon puanlama
- [[automated-question-generation]] — Otomatik soru üretimi
- [[oral-assessment]] — Sözlü değerlendirme: YZ yerine geçmesine direnen canlı ve kayıtlı biçimler
- [[summative-assessment]] — Toplu değerlendirme: YZ dirençli biçimler (sözlü, gözetimli, kapalı kitap sınavları)
- [[item-response-theory]] — YZ çağı değerlendirme yanıtlarını yorumlamak için IRT
- [[psychometrically-aware-ai]] — Psikometrik olarak duyarlı YZ puanlaması
- [[learning-analytics]] — Değerlendirme verilerini öğrenmeye bağlayan analitik
- [[feedback]] — Değerlendirme-öğrenme döngüsünü kapatan geri bildirim döngüleri
- [[feedback-literacy]] — Öğrenen geri bildirim okuryazarlığı
- [[academic-integrity]] — Dürüstlük ve YZ tespiti tartışması
- [[ai-detection]] — YZ tarafından üretilmiş metni tespit etmek
- [[ai-ed-evaluation]] — Otomatik değerlendiricileri değerlendirmek için yöntemler ve kıyas ölçütleri
- [[eportfolio]] — Süreç temelli e-portfolyo değerlendirmesi
- [[speech-and-voice-technologies]]
- [[peer-assessment]]

## Bağlı makaleler
- [[multimodal-assessment-literacy-l2-teachers-genai-2026]] — Çok kipli değerlendirme okuryazarlığını tanımlayan ve neyin değişip neyin değişmediğini ölçen bir yıllık program
- [[ai-agents-joyful-assessment-third-space-2026]] — YZ ajanları, neşeli değerlendirme ve üçüncü uzay
- [[mccorkle-aligned-genai-course-policy-2025]] — Değerlendirilenden türetilen görev düzeyinde YZ izinleri (McCorkle 2025)
- [[usher-faraon-who-grades-best-2026]] — Proje kalite düzeyleri boyunca ChatGPT, akran ve öğretmen not vermesini karşılaştırmak (Usher ve Faraon 2026)
- [[responsible-assessment-ai-era-stanford-2026]] — YZ çağında sorumlu değerlendirme
- [[beyond-detection-authentic-assessment-ai-2025]] — Tespitin ötesinde: özgün değerlendirme
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Ortak yazarlık dürüstlüğü ve değerlendirme geçerliliği
- [[competency-based-education-genai-production-2026]] — Üretken YZ’den sonra yetkinlik temelli eğitim
- [[genai-assessment-governance]] — Değerlendirmede üretken YZ’nin kanıt merkezli yönetişimi
- [[ssaho-ai-academic-integrity-review-2025]] — YZ dürüstlük derlemesi: tespit değerlendirme yeniden tasarımıyla eşleştirilmelidir
- [[bassett-ai-detectors-education-2026]] — Yazı tura kazanırız, tura siz kaybedersiniz: eğitimde YZ dedektörleri (Bassett ve ark. 2026)
- [[aivaluate-anxiety-assessment-2026]] — AIvaluate: Öğrenci Kaygısının LLM ile Güçlendirilmiş Değerlendirmesi (2026)
- [[graph-its-adaptive-algorithms-2026]] — Dinamik Alanlar için Grafik Temelli Akıllı Özel Ders (2026)
- [[asynchronous-oral-assessment-2026]] — YZ Çağında Eş Zamansız Sözlü Değerlendirmeler (Pentland 2026)
- [[assessing-student-drive-framework-2025]] — DRIVE: GenAI etkileşimi yoluyla öğrenmeyi değerlendirmek (DRI + Görünür Uzmanlık)
- [[walton-bearman-assessment-judgment-2025]] — Değerlendirme görevlerinde GenAI ile öğrencilerin işinde yargı (26 öğrenci, geri kaydırma)
- [[stamatoulis-genai-use-patterns-2026]] — GenAI kullanım örüntüleri (değerlendirici bütünleştirme karşı düşük doğrulama benimseme) ve sonuçlar
- [[luo-dawson-value-judgments-grading-2026]] — GenAI destekli işi not vermede değer yargıları: dürüstlük, güven, geçerlilik ve iki yönlü şeffaflık (Luo ve Dawson 2026)
- [[razavi-powers-item-difficulty-llm-2026]] — LLM’ler ve ağaç temelli makine öğrenmesi kullanarak madde zorluğunu tahmin etmek
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[computing-assessment-genai-workshop-report-2026]] — YZ Ödevinizi Yapabilir. Şimdi Ne Olacak? Üretken yapay zeka çağında bilgisayar değerlendirmesi üzerine çevrimiçi bir atölye raporu
