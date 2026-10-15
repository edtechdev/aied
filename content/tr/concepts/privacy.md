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
reviewed_by: [editor]
translation_of: concepts/privacy
source_updated: "2026-10-14T14:35:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Gizlilik** — YZ destekli öğrenme ortamlarında öğrenci verisinin, kimliğinin ve [[agency|özerkliğinin]] korunması. YZ sistemleri [[personalized-learning|kişiselleştirme]], [[learning-analytics|analitik]] ve [[student-modeling|uyarlamalı öğretim]] için giderek daha ayrıntılı davranışsal veri topladıkça, gizlilik kaygıları şiddetlenir. Bu, [[ai-education|eğitimde YZ]] üzerindeki temel bir etik ve düzenleyici kısıttır: kişiselleştiren, öngören veya değerlendiren hemen hemen her YZ aracı öğrenen verisine bağlıdır; bu da veri minimizasyonunu, rızayı, şeffaflığı ve güvenliği sonradan düşünülen ayrıntılar değil, temel tasarım gereksinimleri haline getirir.

## Dikkate Alınması Gereken Sorular

- Hangi öğrenci verisinin sizin hakkınızda toplanmasından rahatsız olurdunuz — öğrenmenizi iyileştirse bile? Kişiselleştirme nerede gözetime dönüşür?
- Birçok öğrencinin, zorunlu kılınmış bir platformu kullanmaktan başka “anlamlı bir seçeneği” yoktur; bu da rızayı biçimsel kılar. Toplananın ne olduğunu ve nedenini gerçekten anlamadan bir şeye rıza gösterdiğiniz oldu mu? Bilgilendirilmiş rıza aslında neyi gerektirirdi?
- Uyarlamalı, kişiselleştirilmiş öğrenmeyi güçlendiren aynı öğrenen verisi, kötüye kullanım ve zarar riski de yaratır. Bir miktar gizlilikle değiş-tokuşa razı olacağınız bir kişiselleştirme faydası — ve aşmayacağınız çizgi — adlandırabilir misiniz?
- Sayfa, gizlilik önlemlerinin “yalnızca bazı öğrencileri koruyacak biçimde varsayılan olabileceğini” uyarıyor. Hangi öğrenciler en çok ifşa olabilir ve gizlilik, eşitlik ile [[bias-mitigation|adalet]] ile nasıl bağlantılıdır?
- Sürekli YZ gözetimi — iyi niyetli olsa bile — davranışı ve kaygıyı şekillendirebilir. İzleniyor olmanın davranışınızı ne zaman değiştirdi ve bu, sınıftaki YZ algılaması hakkında ne öneriyor?
- Çocuklar için gizlilik, veri korumasının ötesine geçerek güvenliğe uzanır. Genel amaçlı güvenlik araçları neden reşit olmayanlardan kaynaklanan eğitimle ilgili riskleri yakalayamayabilir ve kim sürece dâhil olmalıdır?

## Giriş

Gizlilik, eğitimde güvenilir YZ’nin ön koşuludur. YZ sistemleri veriyle iyileşir — [[personalized-learning|kişiselleştirme]] ayrıntılı öğrenen profilleri, [[learning-analytics|öğrenme analitiği]] ayrıntılı etkileşim günlükleri ve [[llm-training-and-fine-tuning|ince ayarlanmış özel ders modelleri]] özgün öğrenen–özel öğretmen dökümleri gerektirir — bu nedenle uyarlamalı, ölçeklenebilir eğitimi mümkün kılan aynı veri, gözetim, kötüye kullanım ve zarar riski de yaratır. Bilgi tabanı gizliliği [[ethics]] (normatif çerçeve), [[regulation]] (yasal gereksinimler), [[governance]] (kurumsal sorumluluk) ve [[equity-in-ai-education|eşitlik]] (kim korunur, kim ifşa olur) ile ayrılmaz biçimde ele alır. Gizlilik makaleleri dört yinelenen sorun çevresinde kümellenir: ölçekte toplama, rıza ve şeffaflık, güvenlik ve anonimleştirme ve çocuklara özgü korumalar.

## Temel gizlilik sorunları

- **Ölçekte veri toplama.** [[learning-analytics]] ve [[edtech-platform|eğitim platformları]] tıklama akışı, yazma, tuş vuruşu ve etkileşim verisi toplar. Gizlilik [[research-methods-aied|araştırmasının]] incelediği merkezi soru, bu toplamanın eğitim faydasıyla orantılı olup olmadığıdır — ve [[learning-analytics-to-educational-interventions-2026|güvenilir öğrenme analitiği araştırması]] gizliliği ve veri yönetişimini bir ek değil, ön koşul olarak ele alır: etik uyum, veri güvenliği ve şeffaf algoritmalar, veriye dayalı eğitim değişimini hiç anlamlı kılan şeylerdir.
- **Rıza ve şeffaflık.** Öğrenciler ve [[parents-and-families|aileler]] bir YZ aracının hangi veriyi topladığını, nasıl kullanıldığını veya nerede saklandığını nadiren anlar. Kurumlar ile [[learners]] arasındaki bu güç dengesizliği yinelenen bir temadır — öğrencilerin zorunlu kılınmış bir platformu kullanmaktan başka anlamlı bir seçeneği olmayabilir, bu da “rızayı” bilgilendirilmiş değil, biçimsel kılar. Bilgi tabanı bunu [[trust-calibration|güven]] ve [[ai-use-disclosure|açıklama]] ile bağlar: hem öğrenenlerin YZ kullanımı hem de kurumların öğrenen verisi kullanımı, neyin ve neden toplandığına dair şeffaflığa bağlıdır.
- **Delegasyon, yalnızca açıklama değil bir gizlilik mekanizması olarak.** [[agentic-literacy-debt|Nama (2026)]], özerk ajanların izinleri oturumlar arası devraldığını ve bunları nadiren iade ettiğini, her opak delegasyonun kullanıcıları sorgulamadan erişim vermeye alıştırdığını savunur — böylece *bir insandan çok bir ajan hareket ettiğinde* bilgilendirilmiş rıza, gizlilik tasarımının bir parçası haline gelir.
- **Güvenlik, anonimleştirme ve veri kaynaklama.** Meşru veri bile ihlal edilirse veya kötü ele alınırsa zarar verebilir. Gizliliği koruyan teknikler bilgi tabanında görülür — [[teachlm-post-training-llms-education|TeachLM]], otantik veri üzerinde eğitim sonrası özel ders modelleri için oturum başına rıza, iç sunucularda kişisel bilgi kaldırma ve kurumsal düzeyde gizlilikten oluşan titiz bir hattı göstererek, etik kaynaklı öğrenen verisinin hem mümkün hem de yüksek kaliteli özel ders için ön koşul olduğunu kanıtlar. [[ai-lms-middle-school-longitudinal|Federe ve uç YZ mimarileri]] veriyi yerel tutarak merkezî toplamayı azaltır. Tarayıcıda çalışan çıkarım bunu en uzağa taşır: bir WebLLM özel öğretmeni, ağırlıkları IndexedDB’de önbelleğe alan statik bir site olarak çalışır; böylece öğrenci kodu, istek metinleri ve dökümler cihazdan hiç çıkmaz ve API anahtarı ya da çağrı başına fatura gerekmez — ancak [[equity-in-ai-education|eşitlik]] maliyeti, hızlı ve kesintisiz üretimin yetkin bir istemci tarafı GPU’suna bağlı olması nedeniyle yeni bir donanım yetkinliği uçurumudur ([[browser-sized-agents-slm-webllm-tutor-2026|Suvernev ve ark. (2026)]]). [[ai-detection|Tespit]] araçları paralel bir veri ele alma vakası ekler: [[bassett-ai-detectors-education-2026|Bassett ve ark. (2026)]] tespitçi sağlayıcıların öğrenci çalışmalarını bazen daha zayıf gizlilik standartlarına sahip yurt dışındaki üçüncü taraf sunucularda depoladığını, ihlal riski ve öğrenci yazmalarının potansiyel ticari istismarıyla birlikte işaret eder.
- **Gözetim ve gözetim–gizlilik gerginliği.** Sürekli YZ gözetimi — iyi niyetli olsa bile — işleyici hissettirebilir. [[ai-fatigue-academic-contexts|YZ yorgunluğu]], [[remote-proctoring|uzaktan gözetim]] ve [[cognitive-offloading|aşırı bağımlılık]] üzerine araştırmalar gizliliği öğrenci [[well-being]] bağlar: YZ sürekli izlediğinde ve takip ettiğinde, yalnızca veri akışlarını değil, davranışı ve kaygıyı da şekillendirir. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana ve ark. (2026)]], [[remote-proctoring|gözetim]] sistemlerinin gerçekte ne yakaladığını — yüz görüntüleri, kimlik belgeleri, 360 derece taramaları dâhil oda taramaları, mikrofon sesi, yüz tanıma, ekran kayıtları, kilitleme olayları ve tuş vuruşu ile fare takibi; mobil gözetim ise bunlara GPS ve selfie denetimleri ekler — derlemiş ve kapsama ölçütlerini karşılayan altı çalışmada gizlilik ve algoritmik hesap verebilirliğin büyük ölçüde bulunmadığını, bunun yerine bitişik çalışmalardan sağlandığını bulmuştur: alıntılanan bir ankette katılımcıların %83’ü gözetim korkusu, %58’i rahatsızlık ve %72’si veri gizliliği kaygısı bildirdi; sınır ötesi sağlayıcı sözleşmeleri ise GDPR ve Güney Afrika’nın POPIA’sı gibi araçlara sınırlı denetim bıraktı. Bu veriyi saklamak ve işlemekten doğan yasal maruziyet — veri sorumlusu kimdir, ne kadar saklanır, kim erişebilir, rıza gerçekten gönüllü müydü — [[legal-issues-and-risks]] üzerinde eşlemeleştirilmiştir.
- **Kişiselleştirme–gizlilik değiş-tokuşu.** [[personalized-learning]] işlev görebilmesi için ayrıntılı öğrenen verisi gerektirir ve bu, gizlilikle yapısal bir gerginlik yaratır. Bilgi tabanı, kişiselleştirmeyi veri minimizasyonuyla dengeleyen yaklaşımları inceler — uyarlamak için yeterli, öğrenenin tamamen ifşa olmayacağı kadar az veri. Bu, “ne kadarı orantılıdır?” sorusunun pratik biçimidir.
- **Temel bir etik değer olarak veri yönetimliği (data stewardship).** 25 makalenin bir [[meta-analysis-systematic-review|sistematik derlemesi]] olan [[agarwal-ethical-values-norms-aied-2026|Agarwal ve ark. (2026)]], ayrımcılık yapmama, insan gözetimi, iyi niyet, açıklanabilirlik ve eğitimsel yeterlilikle birlikte [[ai-education|eğitimde YZ]] için altı temel etik değerden biri olarak veri yönetimliğini (veri/bilgi kullanan tanımlar) belirler. Derleme, değerlerin sıkı biçimde bağlı olduğunu ve çatışabileceğini bulur — örneğin açıklanabilirlik vs. doğruluk/gizlilik ve ayrımcılık yapmama vs. veri yönetimliği — etik ikilemler üretir; ve veri yönetimliğine dair hiçbir normun son kullanıcılara doğrudan hitap etmediğini, öğrenenleri etik literatürde büyük ölçüde pasif bıraktığını ortaya koyar.
- **Gizlilik ertelenir, karara bağlanmaz.** Eğitim teknolojisi profesyonelleriyle on iki görüşme ve 48 platform gizlilik politikasının denetimi, gizliliğin önemli olarak tanındığını ve ardından ürün yaşam döngüsü boyunca ertelendiğini; sorumluluğun bulut sağlayıcılarına, politika belgelerine ve akış aşağısındaki okullara devredildiğini gösterir — zayıf gizlilik geri bildiriminin görünmez tuttuğu bir örüntü; çünkü sessizlik güvenliğin kanıtı gibi görünür ([[edtech-privacy-deferral-2026|Nair & Greenstadt, 2026]]).

- **Gözetim kanıt tabanı etik açısından zayıftır.** 80 çalışmanın derlemesinde %35’i veri kümesini açıklamamış, %40’ı tek bir modeli değerlendirmiş, %30’u yeniden üretilemez ve yalnızca %25’i etik konulara değinmiştir; yanlış pozitifler — normal davranışı işaretlemek — temel bir güvenilirlik riski olmaya devam eder ([[automated-online-exam-proctoring-decade-review-2026|Malhotra & Chhabra (2026)]]).

## Çocuk güvenliği ve K-12 korumaları

[[k-12]] ortamları, öğrenenler reşit olmadığı için daha güçlü gizlilik önlemleri gerektirir. Bu, gizliliği veri korumasının ötesine taşıyarak [[pedagogical-safety]] uzanır: çocukların kullandığı araçlar yalnızca verilerini korumamalı, aynı zamanda onları zarardan korumalıdır. [[child-safety-genai|Çocuk güvenliği araştırması]], genel amaçlı güvenlik sınıflandırıcılarının çocuklardan gelen eğitimle ilgili güvensiz istek metinlerini sıklıkla tespit edemediğini ve okulların standart model önlemlerinin daha genç kullanıcıları koruduğunu varsayamayacağını — çocuğa özgü değerlendirme, olaya dayalı sınama ve [[human-in-the-loop-ai|insan gözetimi]] gerektiğini — uyarır. Bu çerçeveleme, gizliliği [[equity-in-ai-education|eşitlik]] ile bağlar: varsayılan güvenlik ve gizlilik uygulamalarıyla kimin korunduğu, bir sistemin kimin güvenliğini ve özerkliğini pazarlık dışı saydığını yansıtır.

## Pratikte gizlilik

- **Gizliliği bir politika sonrası düşüncesi değil, tasarım gereksinimi olarak ele alın.** [[teachlm-post-training-llms-education|TeachLM]] örneği, rıza, anonimleştirme ve güvenli veri ele almanın veri hattının kendisine inşa edilebileceğini gösterir — [[intelligent-tutoring|YZ özel ders uygulamalarını]] etkili kılan özgün verinin etik kaynaklandırılması için bir model.
- **Veri minimizasyonu için tasarlayın.** Etkileşim verisini varsayılan olarak biriktirmek yerine yalnızca uyarlamanın gerektirdiğini toplayan yaklaşımları (uç/federe YZ, cihaz üzerinde işleme) yeğleyin. [[privacy-preserving-multi-llm-federated-cognitive-diagnosis-2026|Boyapati ve ark. (2026)]], bunun [[cognitive-diagnosis]] için somut bir feder biçimini gösterir: birden çok ticari [[llm]] API’si, bir araya getirmeden önce her modelin tahminine yerel olarak ε-yerel diferansiyel gizlilik gürültüsü ekleyerek teşhisde işbirliği yapar, böylece hiçbir sağlayıcı ham öğrenci verisini görmez — hassas öğrenen yörüngelerini merkezîleştirmeden [[intelligent-tutoring|YZ özel ders uygulamasını]] işlevsel kıtan, gizliliği koruyan bir mimari. Feder öğrenme ayrıca **veri paylaşımı olmadan kurumlar arası analitik** olanağı verir: [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch ve ark. (2026)]], feder araya getirme yoluyla kurumlar arasında çok görevli bir akademik risk modeli eğitir; ham öğrenen verisi yerel kalır ve yalnızca model parametreleri paylaşılır — veri egemenliğini korurken kurumlar arası örüntüleri yakalayan, merkezî [[learning-analytics]] işbirlikçi, gizliliği koruyan bir alternatif.
- **Açık ve bilgilendirilmiş rızayı güvence altına alın.** Öğrenen verisinin YZ geliştirmesini veya iyileştirmesini finanse ettiği yerlerde, kurumlar toplama, saklama ve kullanım konusunda şeffaf olmalı ve öğrencilerin zorunlu platformlar yerine gerçek seçenekleri olmalıdır.
- **Kimin korunduğunu denetleyin.** Gizlilik önlemleri yalnızca bazı öğrencileri koruyacak biçimde varsayılan olmamalıdır; [[equity-in-ai-education|eşitlik]], aynı özenin yaş, dil, engellilik ve sosyoekonomik hatlar boyunca geçerli olmasını gerektirir.

## Bağlantılar

Gizlilik, [[learning-analytics]] (veri toplayıcı), [[personalized-learning]] (veri tüketicisi), [[k-12]] (güçlendirilmiş korumalar), [[ethics]] (normatif çerçeve), [[regulation]] (yasal gereksinimler), [[governance]] (kurumsal sorumluluk), [[equity-in-ai-education]] (kim korunur), [[pedagogical-safety]] (çocuk koruma) ve [[educational-policy-ai]] bağlanır. Eğitimde her sorumlu YZ konuşlandırmasının karşılaması gereken temel kısıtlardan biridir — bilgi tabanının çerçevelemesinde güvenilir YZ’nin güvenilir veriyle başlamasının gerekçesi.

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
