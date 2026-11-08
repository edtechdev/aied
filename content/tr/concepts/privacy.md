---
connected_resources: [drawsplat]
title: Gizlilik
created: "2026-10-14T21:38:00-04:00"
connected_faqs: [equity-ethics-pedagogical-safety-research, ai-guidance-children-under-13, institutional-ai-policy]
type: concept
technology: [learning-analytics, personalized-learning]
ethics: [equity-in-ai-education, ethics]
level: [k 12]
confidence: high
institutions: [educational-policy-ai, governance, regulation]
translation_of: concepts/privacy
source_updated: "2026-11-08T13:09:43-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Gizlilik** — YZ destekli öğrenme ortamlarında öğrenci verisinin, kimliğinin ve [[agency|özerkliğinin]] korunması. YZ sistemleri [[personalized-learning|kişiselleştirme]], [[learning-analytics|analitik]] ve [[adaptive-learning|uyarlamalı öğretim]] için giderek daha ayrıntılı davranışsal veri topladıkça, gizlilik kaygıları şiddetlenir. Bu, [[ai-education|eğitimde YZ]] üzerindeki temel bir etik ve düzenleyici kısıttır: kişiselleştiren, öngören veya değerlendiren hemen hemen her YZ aracı öğrenen verisine bağlıdır; bu da veri minimizasyonunu, rızayı, şeffaflığı ve güvenliği sonradan düşünülen ayrıntılar değil, temel tasarım gereksinimleri haline getirir.

## Dikkate Alınması Gereken Sorular

- Hangi öğrenci verisinin sizin hakkınızda toplanmasından rahatsız olurdunuz — öğrenmenizi iyileştirse bile? Kişiselleştirme nerede gözetime dönüşür?
- Birçok öğrencinin, zorunlu kılınmış bir platformu kullanmaktan başka “anlamlı bir seçeneği” yoktur; bu da rızayı biçimsel kılar. Toplananın ne olduğunu ve nedenini gerçekten anlamadan bir şeye rıza gösterdiğiniz oldu mu? Bilgilendirilmiş rıza aslında neyi gerektirirdi?
- Uyarlamalı, kişiselleştirilmiş öğrenmeyi güçlendiren aynı öğrenen verisi, kötüye kullanım ve zarar riski de yaratır. Bir miktar gizlilikle değiş-tokuşa razı olacağınız bir kişiselleştirme faydası — ve aşmayacağınız çizgi — adlandırabilir misiniz?
- Sayfa, gizlilik önlemlerinin “yalnızca bazı öğrencileri koruyacak biçimde varsayılan olabileceğini” uyarıyor. Hangi öğrenciler en çok ifşa olabilir ve gizlilik, eşitlik ile [[bias-mitigation|adalet]] ile nasıl bağlantılıdır?
- Sürekli YZ gözetimi — iyi niyetli olsa bile — davranışı ve [[anxiety-and-stress|kaygı]]yı şekillendirebilir. İzleniyor olmanın davranışınızı ne zaman değiştirdi ve bu, sınıftaki YZ algılaması hakkında ne öneriyor?
- Çocuklar için gizlilik, veri korumasının ötesine geçerek güvenliğe uzanır. Genel amaçlı güvenlik araçları neden reşit olmayanlardan kaynaklanan eğitimle ilgili riskleri yakalayamayabilir ve kim sürece dâhil olmalıdır?

## Giriş

Gizlilik, eğitimde güvenilir YZ’nin ön koşuludur. YZ sistemleri veriyle iyileşir — [[personalized-learning|kişiselleştirme]] ayrıntılı öğrenen profilleri, [[learning-analytics|öğrenme analitiği]] ayrıntılı etkileşim günlükleri ve [[llm-training-and-fine-tuning|ince ayarlanmış özel ders modelleri]] özgün öğrenen–özel öğretmen dökümleri gerektirir — bu nedenle uyarlamalı, ölçeklenebilir eğitimi mümkün kılan aynı veri, gözetim, kötüye kullanım ve zarar riski de yaratır. Bilgi tabanı gizliliği [[ethics]] (normatif çerçeve), [[regulation]] (yasal gereksinimler), [[governance]] (kurumsal sorumluluk) ve [[equity-in-ai-education|eşitlik]] (kim korunur, kim ifşa olur) ile ayrılmaz biçimde ele alır. Gizlilik makaleleri dört yinelenen sorun çevresinde kümellenir: ölçekte toplama, rıza ve şeffaflık, güvenlik ve anonimleştirme ve çocuklara özgü korumalar.

## Temel gizlilik sorunları

- **Ölçekte veri toplama.** [[learning-analytics|Öğrenme analitiği]] ve [[edtech-platform|eğitim platformları]] tıklama akışı, yazma, tuş vuruşu ve etkileşim verisi toplar. Gizlilik [[research-methods-aied|araştırmasının]] incelediği temel soru, bu toplamanın eğitsel yararla orantılı olup olmadığıdır — ve [[learning-analytics-to-educational-interventions-2026|güvenilir öğrenme analitiği araştırması]] gizliliği ve veri yönetişimini bir eklenti değil, ön koşul sayar: etik uyum, veri güvenliği ve şeffaf algoritmalar, veriye dayalı eğitsel değişimi anlamlı kılan şeylerdir.

- **Rıza ve şeffaflık.** Öğrenciler ve [[parents-and-families|veliler]], bir YZ aracının hangi veriyi topladığını, nasıl kullandığını veya nerede sakladığını nadiren anlar. Kurumlarla [[learners|öğrenenler]] arasındaki bu güç dengesizliği yinelenen bir temadır — öğrencilerin zorunlu bir platformu kullanmaktan başka anlamlı bir seçeneği olmayabilir, bu da “rızayı” bilgilendirilmiş değil biçimsel kılar. Bilgi tabanı bunu [[trust-calibration|güven]] ve [[ai-use-disclosure|açıklama]] ile ilişkilendirir: hem öğrenenlerin YZ kullanımı hem de kurumların öğrenen verisini kullanması, neyin toplandığı ve neden toplandığı konusunda şeffaflığa bağlıdır.

- **Devretme yalnızca bir açıklama değil, bir gizlilik mekanizmasıdır.** [[agentic-literacy-debt|Nama (2026)]], [[agentic-ai|özerk ajanların]] izinleri oturumlar arasında devraldığını ve bunları nadiren geri aldığını savunur; bu yüzden her opak devretme, kullanıcıları erişim vermeye incelemeden alıştırır — bu da *bir kişi değil bir ajanın hareket ettiği zamanı* bilmeye ilişkin bilgilendirilmiş rızayı gizlilik tasarımının parçası kılar.

- **Özerklik veri yüzeyini genişletir.** Ajan tabanlı bir form doldurma sistemi, kurumsal hizmetler arasında bir [[multimodal|çok kipli]] kişisel bilgi tabanı sürdürür ve 44 şirketin işe alım sitesinden alınan 1.301 benzersiz alan üzerinde değerlendirilmiştir; yazarlar, gizliliği koruyan bilgi yönetimini, erişim denetimini ve insan onayını çözülmemiş konuşlandırma gereksinimleri olarak adlandırır ([[large-language-models-teaching-learning-higher-ed|Li ve ark. (2026)]]).

- **Güvenlik, anonimleştirme ve veri kaynaklandırma.** Meşru veri bile ihlal edilirse ya da kötü ele alınırsa zarar verebilir. Gizliliği koruyan teknikler bilgi tabanının genelinde görünür — [[teachlm-post-training-llms-education|TeachLM]], özgün veriyle eğitim sonrası özel ders modelleri için oturum başına rıza, iç sunucularda PII kaldırma ve kurumsal düzeyde gizlilikten oluşan titiz bir veri hattı gösterir; bu da etik olarak kaynaklandırılmış öğrenen verisinin hem mümkün hem de yüksek kaliteli özel dersin ön koşulu olduğunu gösterir. [[ai-lms-middle-school-longitudinal|Feder ve uç YZ mimarileri]] veriyi yerelde tutarak merkezî toplamayı azaltır. Tarayıcıda yerleşik çıkarım bunu en ileriye taşır: bir WebLLM özel ders uygulaması, ağırlıkları IndexedDB’de önbelleğe alınmış statik bir site olarak çalışır; böylece öğrenci kodu, istemleri ve dökümleri cihazdan hiç ayrılmaz ve API anahtarı ya da çağrı başına faturalama gerekmez — ancak [[equity-in-ai-education|eşitlik]] maliyeti yeni bir donanım yeteneği uçurumudur, çünkü hızlı ve kesintisiz üretim yetenekli bir istemci tarafı GPU’ya bağlıdır ([[browser-sized-agents-slm-webllm-tutor-2026|Suvernev ve ark. (2026)]]). [[ai-detection|Tespit]] araçları paralel bir veri işleme vakası ekler: [[bassett-ai-detectors-education-2026|Bassett ve ark. (2026)]], dedektör satıcılarının öğrenci çalışmalarını üçüncü taraf sunucularda, bazen daha zayıf gizlilik standartları altında denizaşırı ülkelerde sakladığını, bunun yanı sıra ihlal riskini ve öğrenci yazılarının olası ticari sömürüsünü işaret eder.

- **Anonimleştirme, ölçülebilir tespit kalitesine bağlıdır.** [[ji-de-identification-personally-identifiable-information-2025|Ji ve ark. (2025)]], öğrenci metinleri üzerinde beş kişisel olarak tanımlanabilir bilgi (PII) tespit yapılandırmasını kıyaslar. İnce ayarlı GPT-4o-mini, 1 milyon belirteç başına \$0,92 karşılığında 0,9589 geri çağırma düzeyine ulaşmıştır; bu, Azure AI Language’in 1 milyon belirteç başına \$4,90 maliyetinin yaklaşık altıda biridir. İki aşamalı bir doğrulayıcı, yanlış pozitiflerin derlem yararlılığını bozacağı yerde kesinliği 0,8893’e çıkarmıştır ve düşük kesinlik hatası anlamsal olarak yıkıcıdır: bir matematik pasajında “Newton”u “David” ile değiştirmek ya da ipucu Nasıra olan bir hikâyede İsa Mesih, Meryem ve Yusuf’u işaretlemek gibi.

- **Gözetim ve gözetim–gizlilik gerilimi.** Sürekli YZ gözetimi — iyi niyetli olsa bile — müdahaleci hissettirebilir. [[ai-fatigue-academic-contexts|YZ yorgunluğu]], [[remote-proctoring|uzaktan gözetim]] ve [[cognitive-offloading|aşırı bağımlılık]] üzerine araştırma, gizliliği öğrenci [[well-being|iyi oluşuyla]] ilişkilendirir: YZ sürekli izleyip kaydettiğinde yalnızca veri akışlarını değil, davranışı ve kaygıyı da şekillendirir. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana ve ark. (2026)]], [[remote-proctoring|gözetim]] sistemlerinin gerçekte ne yakaladığını katalogladı — yüz görüntüleri, kimlik belgeleri, 360 derece taramalar dâhil oda taramaları, mikrofon sesi, yüz tanıma, ekran kayıtları, kilitlenme olayları ve tuş vuruşu ile fare izleme; mobil gözetmenlik GPS ve selfie kontrolleri ekliyor — ve gizlilik ile algoritmik hesapverebilirliğin, dâhil etme ölçütlerini karşılayan altı çalışmada büyük ölçüde yok olduğunu, bunun yerine komşu çalışmalardan sağlandığını buldu: atıf verilen bir ankette yanıtlayanların %83’ü gözetim korkusu, %58’i rahatsızlık ve %72’si veri gizliliği kaygısı dile getirdi; sınır ötesi satıcı sözleşmeleri ise GDPR ve Güney Afrika’nın POPIA’sı gibi araçların sınırlı kontrol sunmasına yol açtı. Bu veriyi saklamak ve işlemekten doğan hukuki maruziyet — denetleyicinin kim olduğu, ne kadar süre saklandığı, kimin erişebileceği, rızanın gerçekten gönüllü olup olmadığı — [[legal-issues-and-risks]] sayfasında haritalanır.

- **[[sensor-and-gaze-analytics|EEG]] çözümlemesi dikkati açığa çıkarır.** Sinirsel çözümleme gizlilik sorununu davranışsal günlüklerin ötesine taşır: [[seeing-cognitive-representations-eeg-reconstruction|Su ve ark. (2026)]], öğrenenlerin video öğretimi sırasında neye baktığını EEG verilerinden yeniden oluşturdu; bu, çözümlenen temsilleri olağandışı biçimde açığa çıkarıcı kılar ve hassas nöroverinin yönetişimini belirsiz bırakır.

- **Kişiselleştirme–gizlilik değiş-tokuşu.** [[personalized-learning|Kişiselleştirme]], işlev görmek için ayrıntılı öğrenen verisi gerektirir ve gizlilikle yapısal bir gerilim yaratır. Bilgi tabanı, kişiselleştirmeyi veri minimizasyonuyla dengeleyen yaklaşımları inceler — uyarlamaya yetecek, ama öğreneni tümüyle ifşa etmeye yetmeyecek kadar veri. Bu, “ne kadarı orantılıdır?” sorusunun pratik biçimidir.

- **Temel bir etik değer olarak veri emanetçiliği.** [[agarwal-ethical-values-norms-aied-2026|Agarwal ve ark. (2026)]], 25 makaleyi kapsayan [[meta-analysis-systematic-review|sistematik derlemede]] veri emanetçiliğini (veri/bilgi kullanan tanımlar) [[ai-education|eğitimde YZ]] için altı temel etik değerden biri olarak belirler; diğerleri ayrımcılık yapmama, insan gözetimi, iyi niyet, açıklanabilirlik ve eğitime uygunluktur. Derleme, değerlerin sıkı biçimde bağlı olduğunu ve çatışabildiğini — örn. açıklanabilirlik ile doğruluk/gizlilik, ayrımcılık yapmama ile veri emanetçiliği — ve bunun etik ikilemler ürettiğini, veri emanetçiliğine ilişkin hiçbir normun son kullanıcılara doğrudan hitap etmediğini, bunun da öğrenenleri etik literatürde büyük ölçüde edilgen bıraktığını bulur.

- **Gizlilik karara bağlanmak yerine ertelenir.** Edtech profesyonelleriyle yapılan on iki görüşme ve 48 platform gizlilik politikasının denetimi, gizliliğin önemli görülüp ürün yaşam döngüsü boyunca ertelendiğini, sorumluluğun bulut sağlayıcılarına, politika belgelerine ve tedarik zincirinin altındaki okullara devredildiğini gösterir — zayıf gizlilik geri bildiriminin görünmez kıldığı bir örüntü, çünkü sessizlik güvenliğin kanıtı gibi görünür ([[edtech-privacy-deferral-2026|Nair ve Greenstadt, 2026]]).

- **Gözetim kanıt tabanı etik açısından zayıftır.** 80 çalışmanın derlemesinde %35’i veri kümesini açıklamamış, %40’ı tek bir modeli değerlendirmiş, %30’u yeniden üretilemez ve yalnızca %25’i etik konulara değinmiştir; yanlış pozitifler — normal davranışı işaretlemek — temel bir güvenilirlik riski olmaya devam eder ([[automated-online-exam-proctoring-decade-review-2026|Malhotra & Chhabra (2026)]]).

- **Sohbet arayüzleri konuşmanın kendisini sızdırır.** 42 YZ sohbet platformunu denetleyen [[bekos-contextual-leakage-ai-chat-platforms-2026|Bekos ve ark. (2026)]], 21’inin konuşma başlıklarını üçüncü taraf izleyicilere gönderdiğini ve yedi eğitim platformunun her birinde ortalama yaklaşık 367 izleyici isteği bulunduğunu, beşinin bağlam sızdırdığını bulmuştur.

## Çocuk güvenliği ve K-12 korumaları

[[k-12]] ortamları, öğrenenler reşit olmadığı için daha güçlü gizlilik önlemleri gerektirir. Bu, gizliliği veri korumasının ötesine taşıyarak [[pedagogical-safety]] uzanır: çocukların kullandığı araçlar yalnızca verilerini korumamalı, aynı zamanda onları zarardan korumalıdır. [[child-safety-genai|Çocuk güvenliği araştırması]], genel amaçlı güvenlik sınıflandırıcılarının çocuklardan gelen eğitimle ilgili güvensiz istek metinlerini sıklıkla tespit edemediğini ve okulların standart model önlemlerinin daha genç kullanıcıları koruduğunu varsayamayacağını — çocuğa özgü değerlendirme, olaya dayalı sınama ve [[human-in-the-loop-ai|insan gözetimi]] gerektiğini — uyarır. Bu çerçeveleme, gizliliği [[equity-in-ai-education|eşitlik]] ile bağlar: varsayılan güvenlik ve gizlilik uygulamalarıyla kimin korunduğu, bir sistemin kimin güvenliğini ve özerkliğini pazarlık dışı saydığını yansıtır.

## Pratikte gizlilik

- **Gizliliği bir politika sonrası düşüncesi değil, tasarım gereksinimi olarak ele alın.** [[teachlm-post-training-llms-education|TeachLM]] örneği, rıza, anonimleştirme ve güvenli veri ele almanın veri hattının kendisine inşa edilebileceğini gösterir — [[intelligent-tutoring|YZ özel ders uygulamalarını]] etkili kılan özgün verinin etik kaynaklandırılması için bir model.
- **Veri minimizasyonu için tasarlayın.** Etkileşim verisini varsayılan olarak biriktirmek yerine yalnızca uyarlamanın gerektirdiğini toplayan yaklaşımları (uç/federe YZ, cihaz üzerinde işleme) yeğleyin. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati ve ark. (2026)]], bunun [[cognitive-diagnosis]] için somut bir feder biçimini gösterir: birden çok ticari [[llm]] API’si, bir araya getirmeden önce her modelin tahminine yerel olarak ε-yerel diferansiyel gizlilik gürültüsü ekleyerek teşhisde işbirliği yapar, böylece hiçbir sağlayıcı ham öğrenci verisini görmez — hassas öğrenen yörüngelerini merkezîleştirmeden [[intelligent-tutoring|YZ özel ders uygulamasını]] işlevsel kıtan, gizliliği koruyan bir mimari. Feder öğrenme ayrıca **veri paylaşımı olmadan kurumlar arası analitik** olanağı verir: [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch ve ark. (2026)]], feder araya getirme yoluyla kurumlar arasında çok görevli bir akademik risk modeli eğitir; ham öğrenen verisi yerel kalır ve yalnızca model parametreleri paylaşılır — veri egemenliğini korurken kurumlar arası örüntüleri yakalayan, merkezî [[learning-analytics]] işbirlikçi, gizliliği koruyan bir alternatif.
- **Açık ve bilgilendirilmiş rızayı güvence altına alın.** Öğrenen verisinin YZ geliştirmesini veya iyileştirmesini finanse ettiği yerlerde, kurumlar toplama, saklama ve kullanım konusunda şeffaf olmalı ve öğrencilerin zorunlu platformlar yerine gerçek seçenekleri olmalıdır.
- **Kimin korunduğunu denetleyin.** Gizlilik önlemleri yalnızca bazı öğrencileri koruyacak biçimde varsayılan olmamalıdır; [[equity-in-ai-education|eşitlik]], aynı özenin yaş, dil, engellilik ve sosyoekonomik hatlar boyunca geçerli olmasını gerektirir.

## Bağlantılar

Gizlilik, [[learning-analytics]] (veri toplayıcı), [[personalized-learning]] (veri tüketicisi), [[k-12]] (güçlendirilmiş korumalar), [[ethics]] (normatif çerçeve), [[regulation]] (yasal gereksinimler), [[governance]] (kurumsal sorumluluk), [[equity-in-ai-education]] (kim korunur), [[pedagogical-safety]] (çocuk koruma) ve [[educational-policy-ai]] bağlanır. Eğitimde her sorumlu YZ konuşlandırmasının karşılaması gereken temel kısıtlardan biridir — bilgi tabanının çerçevelemesinde güvenilir YZ’nin güvenilir veriyle başlamasının gerekçesi.

## Yaygın yanlış anlamalar

- **“Gözetim sınırlı ve iyi anlaşılmış bir veri dilimi yakalar.”** [[remote-proctoring|Gözetim]] sistemlerinin gerçekte ne yakaladığına dair bir katalog **yüz görüntülerini, kimlik belgelerini, 360 derece taramaları dâhil oda taramalarını, mikrofon sesini, yüz tanımayı** ve daha fazlasını listeler. Kapsam, çoğu rıza sürecinin betimlediğinden geniştir.
- **“Gözetim literatürü gözetimin etiğini ortaya koyar.”** **80 çalışmanın** derlemesi **%35’inin veri kümesini açıklamadığını, %40’ının tek bir modeli değerlendirdiğini, %30’unun yeniden üretilemediğini ve yalnızca %25’inin** raporlama eşiğini karşıladığını bulmuştur. Kanıt tabanı, bir kurumun konuşlandırmadan önce yanıtlaması gereken sorularda tam olarak zayıftır.
- **“Gizlilik bir uyum onay kutusudur, bir tasarım kısıtı değil.”** Kişiselleştiren, öngören veya değerlendiren neredeyse her YZ aracı öğrenen verisine bağlıdır; bu da veri minimizasyonunu bir tasarım kararı yapar. Veriyi gerektiren bir aracın isteğe bağlı bir gizlilik ayarı yoktur; tasarımın seçtiği bir veri bağımlılığı vardır.

- **Veri uygulamalarına ilişkin farkındalık, onları görmekten doğmaz.** [[bergdahl-student-epistemic-agency-ai-2026|Bergdahl (2026)]], yazılarını okuyan [[conversational-ai|sohbet robotları]]nda **47 yedinci sınıf öğrencisinin %66’sının** en az koruyucu seçeneği seçtiğini ve **%47’sinin** algoritmik etkiyi “sadece eğlence” diye reddettiğini bulmuştur; bu ölçüm, sınıfın kendi günlüğe kaydedilmiş davranışının canlı olarak yansıtıldığını izlediği, “korkutucu” diye tepki verdiği ve birkaçının teneffüste de platformu kullanmaya devam ettiği bir dersten **bir ay sonra** yapılmıştır. Mekanizmayı görünür kılıp maliyeti somutlaştırmayan gizlilik eğitimi, tutumu değiştirmeden bırakır. Yazar, buradaki düşük puanların yüksek olanlardan **daha güvenilir olabileceğini** not eder; çünkü bu maddelerde sosyal olarak beklenen bir yanıt yoktur, oysa sorumluluk ve yönetişim doğru gelen yanıtı davet eder.

## Bağlı kavramlar

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
- [[student-support-and-success]] — öğrenci kayıtları, birimler arası veri paylaşımı ve feder risk modellemesi

## Bağlı makaleler

- [[bekos-contextual-leakage-ai-chat-platforms-2026]] — İstemlerinize bir kuruş: YZ sohbet platformlarında bağlamsal sızıntı (Bekos ve ark. 2026)
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving academic risk modeling (Villegas-Ch ve ark. 2026)
- [[learning-analytics-to-educational-interventions-2026]] — From learning analytics to educational interventions: enablers of trustworthy LA-based interventions (Svetec, Divjak & Kadoić 2026)
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[agentic-literacy-debt]] — Agentic literacy debt: the structural AI-literacy gap from autonomous agents (Nama 2026)
- [[ai-fatigue-academic-contexts]]
- [[ai-lms-middle-school-longitudinal]]
- [[child-safety-genai]]
- [[eduzone-llm-safety-k12]]
- [[spritz-ai-disciplinary-mediation-student-teams-2026]]
- [[teachlm-post-training-llms-education]] — TeachLM: anonymization and consent for authentic learning data
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett ve ark. 2026)
- [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026]] — Privacy-preserving federated LLM cognitive diagnosis
- [[agarwal-ethical-values-norms-aied-2026]] — Ethical values and norms for AI in education
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — What proctoring systems capture, and the privacy literature's absence from the evidence base
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
