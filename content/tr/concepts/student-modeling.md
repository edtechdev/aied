---
title: "Öğrenen Modellemesi ve Uyarlanabilir Öğretim"
created: "2026-10-14T22:00:00-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, simulating-students, student-modeling]
confidence: high
translation_of: concepts/student-modeling
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

> **Öğrenen modellemesi ve uyarlanabilir öğretim** — YZ'nin öğrenenleri nasıl temsil ettiğinin (ne bildikleri, ne hissettikleri ve neye ihtiyaç duydukları) ve bu temsilleri [[teacher-role|teaching]] uyarlamak için nasıl kullandığının çatısıdır. Aile, *modelleme* katmanından — **öğrenci modellemesi**, [[knowledge-tracing]], [[cognitive-diagnosis]] ve [[simulating-students|simulating students]] — ve bu modelleri tüketen *uyarlanabilir sistemlere* — [[intelligent-tutoring]], [[adaptive-learning]] ve [[personalized-learning]] — kadar uzanır. Ortak soru şudur: *bir sistem bir öğrenenin ne bildiğini nasıl bilir ve sırada neyi öğretmelidir?*

## Dikkate Alınması Gereken Sorular

- Bu sayfanın ortaya koyduğu çatı sorusu şudur: bir sistem bir öğrenenin ne bildiğini nasıl bilir ve sırada neyi öğretmelidir? Okumaya başlamadan önce, 'bir öğrenenin ne bildiğini' bir makinede nasıl temsil etmeye başlardınız?
- Öğrenen modellemesi bilgi izlemeyi (bilgiyi zaman içinde izleme), bilişsel teşhisi (hangi becerilerin öğrenildiğini haritalama) ve öğrenci simülasyonunu (sentetik öğrenenler) kapsar. Her yaklaşımın hangi yönde güçlü olduğunu — ve her birinin neyi yanlış yapma riski taşıdığını — düşünüyorsunuz?
- Her uyarlanabilir YZ, öğrenene dair bir modele bağlıdır. Bir model, ona beslenen kanıtlar kadar iyiyse, YZ sistemlerinin bir öğrenci hakkında gerçekte hangi kanıtlara sahip olduğunu ve onlara ilişkin hangi önemli şeylerin görünmez kaldığını düşünüyorsunuz?
- Bir model, bir öğrencinin neyi doğru ve neyi yanlış yaptığını ama nedenini ya da nasıl hissettiğini yakalayamayabilir. Bir öğrenen modeli, uyarlanabilir bir sistemi zarar verme yolunda nasıl yanıltabilir?
- Uyarlanabilir bir öğretmen tasarlıyor olsaydınız, sizin hakkınızdaki modelinin neleri içermesini isterdiniz — ve neleri varsaymasını açıkça yasaklamak isterdiniz?

## Giriş

Öğrenen modellemesi, öğrenenlerin hesaplamalı temsilidir; uyarlanabilir öğretim ise sistemlerin bu temsille yaptığıdır. Eğitimdeki her uyarlanabilir YZ — en hafifi bile olsa — öğrenene dair bir modele bağlıdır ve her öğrenen modeli, bir öğretim kararını beslemek için var olur. Bu sayfa, bu işlem hattının çatısıdır: modelleme yöntemleri, modeller üzerinde hareket eden sistemler ve bunların birbiriyle ilişkisi.

## Modelleme katmanı

Bu kavramlar, "bu öğrenen ne biliyor, ne hissediyor ve neye ihtiyaç duyuyor?" sorusuna yanıt verir — ailenin temsil tarafı.

- **öğrenci modellemesi** — öğrenen özelliklerini (bilgi, beceriler, [[affective-computing|affective]] durumlar, [[student-engagement|engagement]], tercihler) hesaplamalı biçimde temsil etme uygulaması. Bu katman içindeki çatı terimdir ve bir öğreneni temsil etmenin tüm yollarını kapsar.
- **[[knowledge-tracing]]** — alıştırmalardaki performansı izleyerek ve gelecekteki ustalığı öngörerek bilişsel bilgiyi *zaman içinde* modelleme özel uygulaması. Öğrenmenin zamansal dinamiğini — bilginin ne zaman kazanıldığını, söndüğünü ve kavramların nasıl ilişkilendiğini — biçimselleştirir.
- **[[cognitive-diagnosis]]** — bir öğrenenin hangi belirli becerileri veya bilgi bileşenlerini öğrendiğine ilişkin ayrıntılı [[assessment]], hedefli telafi çalışmalarını destekleyen bir ustalık profili üretir.
- **[[simulating-students|simulating students]]** — gerçek bir öğreneni temsil etmek yerine, talep üzerine *sentetik* öğrenenler üretme; böylece [[pedagogy]] ve YZ sistemleri çevrimdışı test edilebilir veya eğitilebilir.
- **Öğrenen modelleri için nedensel bir biçimsellik.** [[causal-modeling-competency-assessment-2026|Mangili et al. (2026)]], gürültülü geçitli Bayes ağlarının yerine uzmanlardan elde edilen yapısal nedensel modeller kullanır; ipuçlarını açık içsel değişkenler haline getirir, böylece model bir öğrencinin kullandığı yardım olmadan ne yanıtlayacağını sorabilir — biraz daha az öngörücü, ancak ilişkisel modellerin ifade edemediği karşıolgusal çıkarımlara yetkin.

[[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]] çalışması, inançlı temsilin en karmaşık model ailesini gerektirmediğini gösterir: zengin telemetri yerine kurs içeriği–etkileşim özelliklerinden oluşturulan hafif, doğal olarak yorumlanabilir bir karar ağacı öğrenci modeli — büyük ölçekli çevrimiçi [[cs-education|programming]] kurslarında modül düzeyinde ilerlemeyi öngörür (%85–91 doğruluk) ve ilgisiz riskli, ilgisiz-ama-başarılı ile ilgili yüksek performanslı [[student-engagement|engagement]] profillerini ayırır; bu da ölçekte [[learning-analytics]] erken uyarısını destekler.

Öngörücü bir öğrenen modeli, iz verisi yerine kayıt yapısına dayanabilir: TRACE her dönemi derslerin sırasız bir sepeti olarak kodlar ve ders kümesi ile notları birlikte öngörerek not tahmin hatasını 0,1339 MAE'ye — yalnızca nota dayalı bir modelin %46,4 altına — düşürür; 5.326 öğrenci ve on yıl üzerinden ([[trace-course-grade-prediction-2026|Savala (2026)]]).

Öğrenci modelleri ayrıca tamamen davranışsal izlerden oluşturulabilir ve yine de uyarlamayı destekleyebilir. [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]], 315 çevrimiçi öğrenenin VERA'da 822 ekolojik model kurarken ürettiği tıklama akışlarından — herhangi bir demografik veya bağlamsal veri olmadan — Gözlem, İnşa ve Keşif olmak üzere üç katılım profili türetti ve bu profillerin model kalitesini öngördüğünü gösterdi (Keşif en karmaşık ve çeşitli modelleri üretirken, Gözlem kopyalanmış özgün olmayan modellerle yoğunlaşır). Bu tür katılım düzeyinde karakterizasyonlar, [[adaptive-learning|adaptive-instruction]] katmanının geri bildirimi hedeflemek için tüketebileceği kaba taneli öğrenci modelleridir.

Duygusal öğrenci modellemesi bir başka boyuttur: bir matematik öğretmeni, duyguyu konuşma metninden ve yüz ifadesinden çıkardı ve toplanan durumu öğretim stratejilerine eşledi, ancak çok kipli füzyon katılımcıların kendi etiketlemelerine karşı yalnızca %60 doğrulukla ulaştı; bu da duygu okumasını işlem hattının en zayıf halkası yapar ([[kar-mathbuddy-affective-math-tutoring-2025|Kar et al. (2025)]]).

[[cross-subject-validity-delayed-start|Gutterman et al. (2026)]], matematik alıştırması sırasında kaydedilen gecikmeli başlama sinyalinin İngilizce sonuçlarını öngördüğünü buldu; kronik geciktirenlerde (13 dakikadan fazla) [[prior-knowledge|prior knowledge]] ve göreve ayrılan zaman denetlendikten sonra bile daha düşük kazanımlar görüldü (ELA β = -,11 SS) — böylece davranışsal öğrenci modelleri, ders başına yeniden eğitim olmadan dallar arasında aktarılabilir; ancak eşik noktaları yeniden türetilmelidir.

## Uyarlanabilir öğretim katmanı

Bu kavramlar, "sırada ne öğretilmeli?" sorusuna yanıt verir — öğrenen modellerini tüketen uygulama tarafı.

- **[[intelligent-tutoring]]** — öğrenci modellerini ve ustalık tahminlerini kullanarak problem seçen ve adım düzeyinde rehberlik sunan sistemler; öğrenen modellemesinin klasik uygulaması.
- **[[adaptive-learning]]** — öğrenen modeline yanıt olarak içerik, hız veya zorluğu ayarlayan sistemler.
- **[[personalized-learning]]** — öğretimin, içeriğin ve öğrenme yollarının bireysel öğrenen özelliklerine ve tercihlerine uyarlanmasının daha geniş hali.

## Üyeler birbiriyle nasıl ilişkilidir

Kavramlar rakip değil bir işlem hattı oluşturur: **öğrenci modellemesi** çatı temsildir; [[knowledge-tracing]] ve [[cognitive-diagnosis]] onu dolduran belirli modelleme yöntemleridir; [[simulating-students|simulation]] gerçek öğrenenleri temsil etmek yerine *üretir*; ve [[intelligent-tutoring]], [[adaptive-learning]] ile [[personalized-learning]], öğretimi uyarlamak için bu modelleri tüketen sistemlerdir.

**Öğrenci modellemesi ile öğrenci simülasyonu arasındaki fark**, akılda tutulması gereken temel ayrımdır. Öğrenci modellemesi **gerçek bir öğreneni temsil etmekle** ilgilidir — uyarlanabilir bir sistemin o birey üzerinde hareket edebilmesi için modeli *gerçek bir öğrencinin verilerinden* inşa etmek. Buna karşılık öğrenci simülasyonu, pedagoji ve YZ'nin çevrimdışı değerlendirilebilmesi veya eğitilebilmesi için gerçek öğrenenlerin yerine geçecek **sentetik bir öğrenen** talep üzerine üretir. İkisi birbirinin yerine kullanılamayacak kadar yakın ilişkilidir: simüle edilmiş öğrenenler tipik olarak bir öğrenci modelini *gömme* taşır (epistemik bir durum, [[misconceptions|misconception]] kümesi veya katılım profili) ve [[knowledge-tracing]] ile [[cognitive-diagnosis]]'ın biçimselleştirdiği aynı yapıları kullanır. Amaçları ayrışır — öğrenci modellemesi, gerçek bir kişi hakkındaki kararları besleyerek canlı uyarlamaya hizmet ederken, [[simulation]] hiçbir gerçek birey üzerinde hareket etmek yerine sistemleri test etmek (ve giderek YZ'yi denetlemek, örn. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas et al. (2026)]]) için öğrenenler uydurur.

**Bilgi izleme ile öğrenci modellemesi** diğer yaygın karışıklıktır. Bilgi izleme özellikle bilişsel bilgiyi zaman içinde modelleme yapar; öğrenci modellemesi, bir öğrenenin tüm yönlerini (duygusal durum, katılım, tercihler) kapsayan daha geniş uygulamadır. Bilgi izleme, bilişsel-zamansal boyuta odaklanmış öğrenci modellemesinin bir *türüdür*. Bilgi izleme yapıları ayrıca [[simulating-students|simulated students]] besler — bir simüle öğrenenin bilişsel durumu genellikle bilgi izleme modellerinin kullandığı aynı ustalık/sönme dinamiğiyle biçimselleştirilir; böylece simülasyon, izleme yöntemlerinin normalde gerçek yanıt verisinden *çıkardığı* bilgi durumlarını *üretmenin* bir yoludur.

**İzlemeyi [[curriculum-design|curriculum]] bağlamak modeli güçlendirir.** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]], bir öğrenen modelinin, izleme açık müfredat yapısına bağlandığında tamamen veriden öğrenilmesine kıyasla daha inançlı hale geldiğini gösterir: Sonuç Temelli Bilgi İzleme (OKT), Sonuç Temelli Eğitim'deki kurs sonuçlarını izlenecek bilgi kavramları olarak ele alır, kavram ilişkilerini kurs ve program sonuçları arasında uzman-doğrulanmış OBE "yakınlık eşlemeleri" (örtük dikkat veya grafik mesaj aktarımına açık bir alternatif) aracılığıyla sağlar ve bir sonucun elde edilişinin diğerlerini nasıl etkilediğini modellemek için bellek destekli bir modül kullanır. Canlı mühendislik programı verisi üzerinde DKT, DKVMN, EKT ve SimpleKT taban çizgilerini geçti (%89,81 AUC); bu, modelleme katmanının öğrenenleri daha inançlı temsil etmek için müfredatın kendi yapısını kullanabileceğini gösterir.

**Akıllı öğretmenliğin uyarlanabilir/kişiselleştirilmiş öğrenmeden farkı** uygulama tarafındadır: akıllı öğretmenlik problem seçen, adım rehberliği sunan sistemdir; uyarlanabilir öğrenme içerik ve hızı ayarlar; kişiselleştirilmiş öğrenme, tüm öğrenme deneyiminin en geniş uyarlamasıdır. Üçü de modelleme katmanının "tüketicileridir".

## Ortak geçerlilik sorunu

Ailenin tamamında belirleyici geçerlilik sorunu aynıdır: öğrenen temsili, sistemin varsayılan kabulleri yerine öğrenenin **gerçek durumunu sadakatle yansıtmalıdır**. **Öğrenci modellemesi** ve [[knowledge-tracing]] için bu, modelin bir öğrenenin gerçekten ne bildiğini yakalaması ([[ai-ed-evaluation|evaluation]] ve [[assessment-validity|measurement validity]]) gerektiği anlamına gelir. [[simulating-students|simulation]] için bu, sentetik öğrenenin modelin tam yetkinliği veya [[ai-sycophancy|sycophantic]] onayı yerine gerçekçi kusurlar sergilemesi gerektiği anlamına gelir. Hatalı modelleri tüketen uyarlanabilir sistemler bu hatayı miras alır ve yayar.

Oyun oynanışından öğrenen durumu çıkaran modeller 0,848–0,913 AUC'ye ulaştı, ancak incelenen 55 çalışmadan yalnızca ikisi bunları demografik önyargı açısından denetledi ve yalnızca biri öğrenen yeteneğine göre farklı sonuçları inceledi ([[ai-game-based-learning-systematic-review-2026|Kaşarcı and Yurt (2026)]]).

Bazı hedeflenen sinyaller diyalogdan hiç çıkarılamayabilir: Öğrenme Bağlamı çerçevesinin pilotu yanlış kanıları %91,4 ve kaygıyı %100 oranında yakalarken vicdanlılığı yalnızca %68,6 ve dil yeterliliğini %60 oranında yakaladı; bu nedenle bağlamdan haberdar bir model, diyalogun ortaya çıkarmasını beklemek yerine yüzeye çıkması yavaş özellikleri yakalamalıdır ([[learning-context-framework-context-aware-ai-education-2026|Liu et al. (2026)]]).

[[edumirror-educational-social-dynamics|Lin et al. (2026)]], bu tür sentetik öğrenenlerin doğrulanma biçimindeki döngüselliği ortaya çıkarır: EduMirror ajanları sonradan psikometrik anketler uygular ve ajanın iç değer temsiliyle olan uyumu psikolojik geçerlilik olarak okur; ancak Surveyor zaten bu değer sisteminde kodlanmış boyutları ölçtüğünden, bu kontrol bağımsız bir doğrulama yerine bir tutarlılık kontrolüdür.

**Doğruluk her zaman inançlı bir sinyal değildir.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, and Stamper (2026)]], ustalığı doğru eylemlerden çıkaran bir öğrenen modelinin bir öğrenenin gerçek durumunu yanlış temsil edebileceğini gösterir: *aldatıcı aşırı genelleme* sergileyen öğrenenler öğrenilmiş görünür, ancak kritik bir uygulama kısıtını atlar; böylece uyarlanabilir sistemler alıştırmayı erken bırakabilir. Öğrenen modelleri koşullu anlayışı — öğrenenin bir eylemi ne zaman geri tutacağını bilip bilmediğini de içerecek biçimde — yalnızca eylem doğruluğunu değerlendirmelidir.

Gizli yanlış kanılar aynı hatayı ters yönden gösterir: [[correct-answer-trap-misconceptions|Imran and Bulathwela (2026)]], ince ayarlı bir sınıflandırıcının hatalı akıl yürütmeyle ulaşılan doğru yanıtların %57,4'ünü yakaladığını ve %1,6 yaygınlıkta bile %83,6 doğruluklu bir akıl yürütme modelinin her tespit başına 8 yanlış alarm bıraktığını buldu — böylece doğruluk temelli ustalık sinyalleri hem eksiktir hem de onarımı pahalıdır.

**Bir modelin nasıl doğrulandığı da doğrudan bir geçerlilik sorusudur.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, and Carvalho (2025)]], popüler öğrenen modellerinin (BKT, BKT-with-Forgetting, AFM) yalnızca tam çok oturumlu bir veri kümesine geriye dönük uyduğunda insan öğrenmesini yakalıyor gibi göründüğünü gösterir; zaman temelli (yürüyen ileri) çapraz doğrulamada — gelecek bir oturumu öncekilerden öngörerek, bu modellerin gerçekte dağıtıldığı biçimde — performansı aşırı tahmin ederler, [[retrieval-spacing-interleaving|spacing effect]] kaçırır ve alıştırma koşullarını yanlış sıralarlar. Unutmayla güçlendirilmiş ve unutmasız modeller oturumlar boyunca yaklaşık eşit performans gösterdiğinden, yazarlar unutmanın genellikle gerçekten temsil edilmekten ziyade öğrenen parametrelerine sindirildiği sonucuna varır. Aile için ders şudur: inançlı bir öğrenen temsili, kullanıldığı biçimde doğrulanmalıdır — ve anlık performansı uzun süreli hatırlamayla karıştırmak, doğru görünen ama öğrenenleri yanlış temsil eden modeller üretir.

## LLM çağında modelleme

Son gelişmeler, daha zengin modelleme için [[llm|LLMs]]'leri kullanır. [[xie-hillm-cd-2026|HiLLM-CD framework]] öğrencileri yeterlilik ağaçları olarak temsil eder; [[multimodal-knowledge-graph-educational-reasoning|multimodal approaches]] çeşitli veri kaynaklarından kanıta dayalı bilgi temsilleri inşa eder; [[inside-llm-student-simulator-reasoning-2026|LLMs now simulate students with reasoning]]. LLM'ler, eğitsel metinden otomatik model inşasını ve daha yüksek sadakatli [[simulating-students|student simulation]] olanaklı kılar, uzman etiketlemeye bağımlılığı azaltır — yukarıdaki sadakat kaygılarını keskinleştirirken. Öğrenen modeli sinyalleri ayrıca LLM akıl yürütmesini *temeller*: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]], GPT-4'e bir öğrencinin Bayesçi [[knowledge-tracing]] beceri tahminini öğretmen arayüzünün yapısıyla birlikte beslemenin hata teşhisini keskin biçimde iyileştirdiğini buldu (çarpanlara ayırmada mantıksal hata tanımlama %40'tan %81'e; genel olarak ~%87,8), çok adımlı problemler ve birkaç hata içeren yanıtlar en zayıf durumlar olarak kaldı — bu, biçimsel bir öğrenen modelini LLM'ye bağlamanın gerçek bir öğrenci hakkında sağlam çıkarımı güçlendirdiğini ama garanti etmediğini gösteren kanıttır. [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]], bu bağlamanın kalıcı bir sürümünün neye benzediğini gösterir: ustalık ve çıkarılan yanlış kanılar, oturum bazında günlükler yerine (öğrenen, konu) başına saklanır, böylece kanıt oturumlar arasında birikir; bellek, LLM tarafından notlandırılan bir gözlem fonksiyonu tarafından yazılır ve öğrenene ustalık çubukları ile her üretilen sorunun hangi zayıf beceriyi araştırmak için seçildiğini adlandıran bir etiket aracılığıyla incelenebilir kalır. Kontrolleri, yazma adımını açık hale getirir — bellek okunur ama artık güncellenmediğinde, gerçekten zayıf bir beceriyi hedefleyen öğelerin payı 0,72'den 0,57'ye düşer — ve bu sayfanın nitelemesini korur: saklanan ustalık, öğrenen hakkındaki ajanın inancıdır, bilgisinin bir ölçümü değildir.

Dil, temsil olarak ID gömmelerinin yerini alabilir: PLCD, LLM kaynaklı kavram şemaları ve alıştırma süreç grafiklerini önsel olarak inşa ederek XES3G5M üzerinde %83,51 doğruluğa ulaşır; en büyük kazanımlar soğuk başlangıçta — yeni kavramlar için KCD'ye göre 4,60 ACC puanı ve yeni alıştırmalar için 4,00 — görülür; geçmişi olmayan ID tabanlı modellerin yerinde ([[process-grounded-language-cognitive-diagnosis-2026|Liu et al. (2026)]]).

Simülatör kalitesi iki eksene ayrılır: paylaşılan davranış kalıplarını, öğrenci başına bir adaptör öncesinde eğiten havuzdan-uzmanlaşmaya boru hattı, satrançta davranışsal sadakati 0,51 ve rehberlik yanıt verebilirliğini 0,91 seviyesine ulaştırdı; sınırda bir rol yapma taban çizgisi için 0,23 ve 0,72 — bu, bir simülatörün hem bir öğrenciye uyması hem de yönlendirilebilir olması gerektiğini gösterir ([[studentsim-llm-student-simulators|Yang et al. (2026)]]).

Risk puanları doğru ama desteksiz olabilir: [[at-risk-students-ml-prediction|Gheisari and Salarian (2026)]], kayıt ve performans kayıtlarından ayrılmayı öngörmede %99 doğruluğa ulaştı, ancak tek bir kurumun 1.027 temizlenmiş kaydında, dış doğrulama olmadan, test edilmiş bir müdahale olmadan ve adillik denetimlerinin gelecek çalışma olarak adlandırıldığı durumda — puan, bir öğrenci hakkında bir hüküm değil, önceliklendirmeyi destekler.

Yalnızca riski öngören bir öğrenen modeli, karar desteği için yeterli değildir: kalibre edilmiş bir riskli modeli, ayrık eylemler üzerinde tamsayı programlama kaynak yönlendirmesiyle bağlamak — zamanlama, bütçe, değiştirilemezlik ve erişilebilirlik kısıtlarına karşı doğrulanarak — yalnızca optimizasyonun kabul ettiği uygulanamaz planlar yerine kompakt müdahale planları üretti ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge (2026)]]).

Kara kutu bir tahminci ayrıca küçük, kendini açıklayan bir modele damıtılabilir: iki aşamalı bir boru hattı, uydurulmuş bir tahminciyi ve onun sonradan yorumunu, bir tahminin yanında bir anlatı döndüren 2B parametreli bir "mentee"ye dönüştürür; akıcılık için değil, sadakat için denetlenir ([[distilling-self-explaining-lm-learning-analytics-2026]]).

## Diğer kavramlarla bağlantılar

Öğrenen modellemesi ve uyarlanabilir öğretim, [[learning-analytics]]'i ([[visualization|dashboards]] ve müdahaleler), [[formative-assessment]]'i (analitik temelli değerlendirme) ve [[feedback]]'i (sistemin öğrenene söyledikleri) besler. Eğitim için YZ'nin çekirdek bir dalı olarak [[ai-education]] ile bağlantılıdır.

## Bağlı kavramlar

- [[learners]] — Öğrenenler: öğrenen tarafı kavramların çatısı
- [[explainable-ai]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[formative-assessment]]
- [[k-12]]
- [[affective-tutoring]]
- [[llm]]
- [[higher-ed]]
- [[ai-education]]
- [[simulating-students]]
- [[cognitive-diagnosis]]
- [[feedback]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — risk tahmininin ve destek hedeflemenin altındaki modeller

## Bağlı makaleler

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Aldatıcı aşırı genelleme: uyarlanabilir ustalık, öğrenenler bir eylemi ne zaman geri tutacaklarını bilmeden alıştırmayı sonlandırabilir (An, McLaren & Stamper 2026)
- [[causal-modeling-competency-assessment-2026]] — Öğrenci Yeterlilik Değerlendirmesi için Destek Müdahalelerinin Nedensel Modellemesi
- [[turano-ai-tutoring-not-a-monolith-2026]] — YZ Öğretmenliği Tek Biçimli Değil: Gerçekten Ne Bildiğimiz (Stanford SCALE/NSSA brifingi)
- [[learning-context-framework-context-aware-ai-education-2026]]
- [[yasir-llm-tutoring-agents-2026]] — LLM öğretmenleri geçerli alternatifleri aşırı reddeder, yanlışı aşırı doğrular (Yasir ve ark. 2026)
- [[haiml-human-centered-ai-metacognitive-model-2026]]
- [[at-risk-students-ml-prediction]]
- [[correct-answer-trap-misconceptions]]
- [[cross-subject-validity-delayed-start]]
- [[edumirror-educational-social-dynamics]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[multimodal-knowledge-graph-educational-reasoning]]
- [[xie-hillm-cd-2026]]
- [[inside-llm-student-simulator-reasoning-2026]]
- [[trace-course-grade-prediction-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — Öğrenci Risk Tahmininden SC2R'ye: Karşıolgusal Kaynak Yönlendirme
- [[graph-its-adaptive-algorithms-2026]] — Dinamik Alanlar için Grafik Tabanlı Akıllı Öğretmenlik (2026)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Öğrenme analitiği için kendini açıklayan LM'nin damıtılması
- [[studentsim-llm-student-simulators]] — StudentSim: LLM tabanlı öğrenci simülatörlerinin eğitimi
- [[predicting-attrition-competitive-programming]] — Rekabetçi programlamada öğrenci terkini öngörmek
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Yakınlık eşlemeli sonuç temelli bilgi izleme
- [[an-goel-self-directed-modeling-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — ID Gömelerinin Ötesinde: Bilişsel Teşhis için Süreç Temelli Dil Modellemesi
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — kompakt öğrenen durumu ve bir tavsiye ortamı olarak kalibre edilmiş izleyici
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: İnsan-YZ Ortak Öğrenme Döngüsünde Öğrenenini Öğrenen Aracı Öğretmen

- [[ai-game-based-learning-systematic-review-2026]] — Sinsi değerlendirme 0,848–0,913 AUC'ye ulaştı, ancak 55 çalışma boyunca önyargı denetimleri neredeyse hiç yapılmadı
