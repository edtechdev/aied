---
connected_resources: [drawsplat]
title: Çok Kipli YZ
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [ai-education, ai-literacy]
technology: [generative-ai, intelligent-tutoring, llm, multimodal]
assessment: [assessment, educational-measurement]
discipline: [stem education]
level: [higher ed]
confidence: high
reviewed_by: [editor]
translation_of: concepts/multimodal
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Çok kipli YZ** — birden fazla kipte içerik işleyen, anlayan ya da üreten [[ai-technologies|YZ sistemleri]]: metin, görüntü, ses, video ve yapılandırılmış veri — ve bu sistemlerin ortaya çıkardığı eğitimsel sorular. [[ai-education|Eğitimde Yapay Zeka]] bağlamında çok kipli YZ üç ayrı rolde görünür: öğrenenlerin oluşturup etkileşime girdiği *öğrenme içeriği* olarak ([[multimodal-learning-genai|çok kipli öğrenme]]), diyagramları ve grafikleri yorumlamak zorunda olan öğretim sistemlerinin *yetkinlik sınırı* olarak ([[syal-multimodal-dialogue-stem-2026|çok kipli öğretim]]) ve anlayışı değerlendirmek için kullanılan *değerlendirme sinyali* olarak ([[multimodal-item-parameter-estimation-2026|çok kipli ölçüm]]).

## Dikkate Alınması Gereken Sorular

- Sözcüklerle açıklamakta hiç zorlandığınız bir grafik, kuvvet diyagramı ya da şema düşünün. Bu deneyim, görüntü açısından zengin problemlerde yardım etmeye çalışan yalnızca metin tabanlı bir [[intelligent-tutoring|YZ eğitmeni]]nin sınırları hakkında ne düşündürüyor?
- Bir [[physics-education|fizik]] eğitmeni metin tabanlı problemlere ~%96 zamanında yanıt veriyor ama anlamı diyagramlara gömmüş problemlerde ~%74’e düşüyor. Okumadan önce, bu 'çok kipli girişimin' nedenini ne olduğunu düşünüyorsunuz — ve modeli yeniden eğitmeyi gerektirmeyen bir çözüm düşünebiliyor musunuz?
- Muhtemelen YZ araçlarıyla hem metin hem görüntü ürettiniz. '[[prompt-engineering|görüntü için istek istemenin]]' metin için istek istemekten farklı olduğunu buldunuz mu? Öğrencilerin soyut bir fikri kesin bir görsel istek metnine çevirmek için hangi becerilere ihtiyacı olabilir?
- Çok kipli YZ kompozisyon puanlayabilir, sesli anlatımla geri bildirim üretebilir ve hatta sınav maddesi istatistiklerini görüntü ve metin maddelerinden yeniden kurabilir. Metin tekliğinden çok kipli değerlendirme sinyaline geçiş, [[bias-mitigation|adillik]] ve geçerlilik için neyi sinyalliyor (ya da riske atıyor)?
- YZ desteğinin, derin [[stem-education|STEM]] anlayışını inşa eden tam da diyagram ağırlıklı problemlerde daha az güvenilir olması gerçeği, öğrenenler arasında nasıl bir [[equity-in-ai-education|eşitlik]] boşluğu yaratabilir? En çok kim etkilenir?
- Çok kipli sistemler metni sese ya da görselleri kapsayıcı öğrenmeyi destekleyecek şekilde çevirebilir, ama aynı zamanda sınıfta ayrıntılı algılamayı da mümkün kılar. Yararlı çok kipli erişim ile gözetim arasındaki çizgi nerede?

## Giriş

YZ’de çok kiplilik, yalnızca metin yerine farklı temsil biçimleri üzerinde çalışma kapasitesini ifade eder. Modern [[generative-ai]] ve [[llm]] sistemleri giderek artan ölçüde metne ek olarak görüntü, ses ve video kabul eder ve üretir, eğitim için yeni olanaklar ve yeni riskler açıyor. Anlamın kipler arasında — yalnızca sözcüklerde değil — yapıldığını ileri süren sosyal göstergebilimsel teoriye dayanarak, çok kipli YZ, [[teacher-role|öğretimin]], öğrenmenin ve değerlendirmenin nasıl tasarlandığını ve değerlendirildiğini değiştirir.([[multimodal-learning-genai]])

## Eğitimde çok kipli YZ’nin üç yüzü

### 1. Çok kipli öğrenme ve içerik üretimi

Çok kipli YZ, öğrenenlerin metin, görüntü, ses ve video üzerinde içerik üretmesini ve etkileşime girmesini sağlar. Üretken YZ ile çok kipli öğrenmeye dair bir eğitimci rehberi bu araçları "siber-sosyal" bir ortak olarak konumlandırır: insan anlam yapımını tamamlar — ama yerini alamaz.([[multimodal-learning-genai]])

- **Çok kipli bağlamlarda [[ai-literacy|YZ okuryazarlığı]]** katmanlıdır: çok kipli platformların temel farkındalığı, çıktıların orta düzey eş-yaratımı ve [[critical-thinking|eleştirel değerlendirmesi]] ile çok kipli etkinlik ve değerlendirmelerin ileri düzey tasarımı.([[multimodal-learning-genai]])
- **Çok kipli istek isteme** kendisi zorlayıcı bir bilgilsel uygulamadır. Görüntü kadar metin için de istek isteyen öğrenciler, "istek metni okuryazarlığının metin için istek istemek ile görüntü için istek istemek arasında farklı olduğunu" keşfeder — soyut anlamı makine tarafından okunabilir çok kipli istek metinlerine çevirmek, kesin bir görsel sözcük dağarcığı gerektirir ve sistem sınırlarını ve önyargısını açığa çıkarır.([[multimodal-prompting-ai-literacy]])
- **Çok kipli değerlendirme**, metin, görüntü, ses ve videoyu birleştiren eserden kompozisyonlara kayar; eğitimciler YZ’yi öğrenenin kendi üretiminin yerini almak yerine üretimi ve geri bildirimi [[scaffolding|iskelemek]] için kullanır.([[multimodal-learning-genai]])
- **Eleştirel düşünme iskelesi olarak öğrenen çok kipli besteleme bir ödünleşim taşır.** [[lu-ai-multimodal-writing-critical-thinking-2026|Lu ve ark. (2027)]], üst ilkokul öğrencilerinin yazılı anlatıları YZ üretimi görüntülere ve kısa videolara dönüştürmesinin yorumlama, analiz, değerlendirme ve açıklamada sürdürülebilir kazanımları desteklediğini ama çıkarımı desteklemediğini gösterir — görseller öykü anlamını açık hale getirdiğinden, öğrencilerin yalnızca metinden örtük anlam çıkarma ihtiyacının azaldığını bildirdi; akran iş birliği, çok kipli araç değil, çıkarım fırsatlarını geri getirdi. Çok kipli YZ’nin anlam yapımı ortağı olarak değeri böylece boyuta özgüdür ve dışsallaştırmanın kısa devre yaptığı çıkarımsal ve [[self-regulated-learning|öz-düzenleyici]] işi kasten yeniden tanıtan [[learning-design|öğretim tasarımına]] bağlıdır.
- **Eleştirel YZ okuryazarlığı olarak öğrenen çok kipli [[writing-education|bestesi]].** [[burriss-multimodal-composition-critical-ai-literacy-2026|Burriss ve ark. (2026)]], 22 on birinci sınıf öğrencisinin kendi seçtikleri YZ [[ethics]] konuları üzerine 90 saniyeden 3 dakikaya kadar video kamu hizmet duyurularını — okul düzenlemeli dizüstü bilgisayarlar ve elektronik "geçiş belgeleri" üzerinden gözetim, [[privacy|bilgilendirilmiş onay]] ve cezalandırıcı algoritmik suçlama — hareketli görüntü, ses, metin ve öğrencilerin kendi bedenleri arasında besteleyerek gerçekleştirilen [[ai-literacy|eleştirel YZ okuryazarlığı]] olarak analiz eder. Yedi filmin tamamında zarar, araçtan tek başına değil insan–makine dolaşımından doğar biçiminde betimlendi (insanlaştırılmış bir "YZ takipçisi", yedide üçünde bir insan aktör tarafından canlandırıldı) ve birim sonu yanıtlarının 18’inden 15’i, bestelemenin YZ etiği anlayışlarını değiştirdiğini söyledi. Yazarlar, çok kipli ürünlerin eleştirel yetkinliği hem *gösterdiğini* hem *ilettiğini* savunur — üretken eserler, yansımalar ve yurttaş söylemi, yalnızca metin okuryazarlığının yapısal olarak kaçırdığı [[assessment]] kanıtı olarak hizmet edebilir.

### 2. Çok kipli öğretim ve yetkinlik sınırı

YZ tabanlı eğitmenlerin anlamı grafiklere, kuvvet diyagramlarına, şemalara ya da tablolara gömmüş problemleri çözmesi gerektiğinde, doğrulukları keskin şekilde bozulur — **Çok Kipli Girişim Etkisi**.([[syal-multimodal-dialogue-stem-2026]])

- OpenStax fizik problemlerinde, yalnızca metin doğruluğu ~%96’dan görüntü açısından zengin problemlerde **~%74’e** düşer, model aileleri arasında tutarlı olarak.([[syal-multimodal-dialogue-stem-2026]])
- **Görsel İşleme Hataları** — grafiklerden ya da diyagramlardan bilgi çıkarmada başarısızlıklar — hata taksonomisinde baskındır ve en düzeltilebilir başarısızlık biçimidir.
- Basit bir yapılandırılmış diyalog müdahalesi (modelden gördüğünü tanımlamasını, fiziki vermeden yalnızca *gözlemlenebilir* hatalı okumaları düzeltmesini, sonra yeniden istek istemesini) doğruluğu **~%95**e geri getirir, sıfır yeniden eğitimle.([[syal-multimodal-dialogue-stem-2026]])
- Bu bir **eşitlik kaygısıdır**: görüntü açısından zengin problemler üzerinde çalışan öğrenciler — STEM’de derin kavramsal anlayışı inşa eden tam da problemler — şu anda yalnızca metin alıştırmaları üzerinde çalışanlardan daha az güvenilir YZ desteği alır.
- **Bir görsel yardım kurmak, birini okumaktan daha zordur.** GeoVAD-Bench’te, uzman bir yardımcı diyagram sağlamak doğruluğu yükseltti (+3,3 ila +7,0 puan), ama modellerin kendi yardımcı çizgilerini kurmasına izin vermek boşluğu 10,0 ila 13,5 puan genişletti — iki model hiç görsel akıl yürütme olmadan kinden daha kötü puan aldı ([[geovad-bench-visual-chain-of-thought-geometry-2026|Dong ve ark., 2026]]).
- **Sınır bir düzey değil bir profildir — ve sanatsal imgeler, modellerin iyi ele aldığı bölgenin dışında yer alır.** [[muse-vlm-artistic-image-benchmark-2026|MUSE (Zhu ve ark., 2026)]], 30 açık ve tescilli VLM’yi 1,174 sipariş edilen sanat eseri üzerinde 12 görevde değerlendirir ve boyutlar arasındaki yetkinlik yayılımı herhangi bir toplu puanın düşündürdüğünden daha geniştir: sahne sınıflandırma neredeyse olgundur (30 modelden 23’ü 75,0 üzerinde, medyan 81,0), oysa duygu tespiti en fazla 39,5’te durur ve modellerden kanıtlarını *ifade etmelerini* gerektiren açık uçlu görevler anlamsal benzerlikte 50,90 (görsel ipucu belirleme) ve 49,18 (duygu nedeni çıkarımı) puan alır. Bileşimsel ve bakış açısına bağlı akıl yürütme en çok başarısız olur — yer gerçeğinin belirli bir yan ya da dikey ilişki belirtmediği yerlerde, modellerin %90,0’ı ve %73,3’ü yine de bir tane iddia eder, yalnızca %43,3’ü kızı derinlikte doğru yerleştirir ve hiçbir model tek bir maddenin üç boyutunun tamamını çözmez. Başarısızlıklar ayrıca çağlayan biçimde ilerler: yanlış temellendirilmiş bir karakter, yakındaki görsel anlambilimden (kelebekler, kuşlar) kurulmuş akıcı bir gerekçeyle haklı çıkarılır — bu, açıklama yetkin okunduğundan öğretimde en tehlikeli sonuçtur. Görüntü tabanlı [[language-learning|dil öğrenimi]] için bu, kursun gerçekten kullandığı imgeler üzerinde genel bir çok kipli puanı ithal etmek yerine boyut düzeyinde doğrulama ve aşağıda tanımlanan temellendirme denetim noktasını — görüleni ve nerede olduğunu tanımlamayı, ondan akıl yürütmeden önce — [[situated-learning|bağlamsal]] sanatsal içeriğe uzatmayı savunur ([[muse-vlm-artistic-image-benchmark-2026]]).

Pratik tasarım çıkarımı, çok kipli öğretimde bir **görsel temellendirme denetim noktasıdır**: çözüm denemeden önce sistemin gördüğünü tanımladığı, öğrenciye ya da bir insan gözetmenine algısal hataları düzeltme şansı veren bilinçli bir adım.([[syal-multimodal-dialogue-stem-2026]])

[[ai-assisted-physics-lab-report-assessment-2026|Abreu ve ark. (2026)]] önsel bir kısıt ekler: bir denklem, grafik ya da birim bir raporda görünebilir ama işlenen belgeden asla geri getirilmeyebilir, öyleyse öğretmenle bir anlaşmazlık, akıl yürütme değil çıkarma başarısızlığı olabilir — bu da teslim biçimini değerlendirme tasarımının bir parçası kılar.

### 3. Çok kipli değerlendirme ve ölçüm

Çok kipli YZ hem değerlendirmenin *içeriğini* hem de onu puanlamak için kullanılan *sinyali* genişletir.

- **Çok kipli geri bildirim sistemleri**, yapılandırılmış metni, slayt referanslarını ve akan sesli anlatımı bütünleştirir. Bir çalışmada, [[ai-feedback-quality|YZ çok kipli geri bildirimi]], öğrenme için eğitimci geri bildirimiyle eşleşti ama öğrenci algılarında onu *anlamlı ölçüde geride bıraktı*.([[multimodal-ai-feedback-learning]])
- **Çok kipli madde yanıt tahmini**, ince ayarlı çok kipli YZ’leri kullanarak madde karakteristik eğrilerini (IRT / 3PL) doğrudan görüntü ve metin maddelerindeki tahmin edilen seçenek olasılıklarından yeniden kurar, çok kipli YZ’yi [[educational-measurement]] ve [[item-response-theory]] bağlar.([[multimodal-item-parameter-estimation-2026]])
- **Eğitimsel görsel-dil modeli değerlendirmesi** ve [[mllm-scientific-visualization-literacy|çok kipli YZ okuryazarlığı]], alanın değerlendirme araç setini çok kipli akıl yürütme ve [[visualization]] uzatır.([[drawedumath-vlm-struggling-students-2026]])([[mllm-scientific-visualization-literacy]])
- **El yazımı [[chemistry-education|kimya]]nın çok kipli puanlaması, biçime bağlı bir yetkinlik sınırını açığa çıkarır:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]], 296 öğrencinin el yazımı genel kimya finalini çok kipli, akıl yürütmeli bir YZ ile rubrik görüntülerine karşı sayfa sayfa puanladı, metinsel yanıtları ve kimyasal reaksiyon denklemlerini güvenilir şekilde puanladı (normelenmiş F1 en yüksek) ama çizim ve grafik çizmeyi *rastgeleden kötü* puanladı — arka plan ızgaraları YZ görüşünü görsel olarak dağıtır ve bilimsel diyagramlar/kiyasal yapılar yorumlanması zor kalır — bu, çok kipli YZ’nin görüşünün temsil ağırlıklı işe dayanıklı olmadığını pekiştirir ve grafiksel maddelerin [[human-in-the-loop-ai|insan feragati]] ile en iyi devreye alındığını gösterir ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Yapı tanıma ve karşılaştırmalı yargı ayrılabilir becerilerdir.** [[cfes-p24-multimodal-slide-auditing-2026|Ma ve ark. (2026)]], altı multimedya öğrenme ilkesini tersine çevrilebilir slayt düzenlemeleri artı görsel eşdeğerlik sahte kontrolleri olarak ifade eder ve her iki modelin de her işlemi, ilkeyi ve onarımı kurtardığını (8/8) bulurken şiddet kalibrasyonunun tamamen başarısız olduğunu (0/8) görür — bileşik bir puan hangi katmanın başarısız olduğunu gizlerdi.

- **Adillik kazanımları varlığına doğrulanabilir.** Çok kipli bir dikkat tahmincisi yalnızca görsel temel çizgiyi mütevazı ölçüde yendi ve cinsiyete yönelik MAE-boşluğu düzenleyicisi doğrulama boşluğunu 0,02’den 0,005’e kesti ama elde tutulan deneklerde boşluğu ve en kötü grup hatasını artırdı — öyleyse devreye almadan önce alt grup farkında, yinelenen denek düzeyinde doğrulama gereklidir ([[student-attention-estimation-fairness-2026|Fragkiadakis ve ark. (2026)]]).
- **Çok kipli puanlama, madde düzeyinde puanlama geri kaldığı yerlerde bile bir seçim sonucunu yeniden üretebilir.** 10.364 el yazımı Olimpiyat ve üniversite sayfasını puanlayan bir YZ, sınav görevlisi toplamlarıyla r = 0,93–0,96 ile eşleşti ve aynı beş öğrenciyi Olimpiyat takımına yerleştirdi, oysa parça uyumu %70’e ulaştı: ikinci okuyucu kanıtı, kayıtlı bir puanlayıcı değil ([[ai-grading-handwritten-physics-2026|Pathak ve ark. (2026)]]).
- **Diyagram üretimi çözülmüş değil bir yetkinlik sınırıdır.** Çok kipli çıktıyı puanlayan 15.246 soruluk bir fizik kıyaslamasında, yapılandırılmış fizik diyagramlarını sentezlemek ya da düzenlemek yanıtlamaktan daha zor oldu ve öncül modeller katı ustalığın %70’inin altında kaldı — görsel *üretimin* görsel *anlamanın* gerisinde kaldığına dair kanıt ([[omniphys-multimodal-physics-benchmark-2026|Chen ve ark., 2026]]).

## Dil ve erişilebilir öğrenme için çok kipli YZ

Çok kipli sistemler ayrıca erişimi ve [[personalized-learning|kişiselleştirmeyi]] genişletir. YZ rehberliğinde ses-[[video-education|video öğrenme]] araçları oynatma hızını uyarlar, çok kipli video özetleri üretir ve telaffuz alıştırmasını destekler.([[ai-guided-learning-audiovideo-2026]]) Çok kipli bilgi grafikleri, görüntüler ve metin arasında eğitimsel görevler için akıl yürütür,([[multimodal-knowledge-graph-educational-reasoning]]) ve çok kipli temsiller, bilgiyi kipler arasında çevirerek (örneğin metinden sese ya da görsele) [[inclusive-learning]] iyileştirir. Alan uygulamaları arasında el yazımı matematik puanlama ve teşhisi,([[llm-cognitive-diagnosis-handwritten-math]]) çok kipli sinyallerle [[affective-tutoring|duygu temelli öğretim]],([[multimodal-affective-its-presentation]])([[kar-mathbuddy-affective-math-tutoring-2025]]) uzmanlaşmış alanlarda metinden görüntüye öğrenme([[nuclear-diffusion-text-to-image-learning-2026]]) ve mahremiyet farkında çok kipli sınıf algılaması([[privacy-aware-classroom-incident-recognition-2026]]) yer alır. Bird (2026), çok kipliliğin metin içi bir biçimini gösterir: ince ayarlı bir ELECTRA transformer’ı hesaplamalı dilbilim özellik analiziyle kaynaştırarak İngiliz edebiyatını İngiltere Anahtar Aşamasına göre sınıflandırır; burada kaynaştırılmış model (F1 0,996) her tek kipli temel çizgiyi çok geride bıraktı — temsil biçimlerini birleştirmenin, hatta metin içinde bile, tek modelli yaklaşımları geride bırakabileceğine dair kanıt.

## Zorluklar ve tasarım çıkarımları

1. **Çok kipli boşluğu kapatın.** Çok kipli öğretim sistemleri, görüş yeteneklerinin dayanıklı olduğunu varsaymak yerine görsel temellendirme ve yapılandırılmış diyalog iskeleleri içermelidir.([[syal-multimodal-dialogue-stem-2026]])
2. **Çok kipli istek istemeyi öğretilebilir bir beceri olarak ele alın.** YZ okuryazarlığı müfredatları, kipe özgü istek istemeyi, kipler arası tutarlılığı ve çok kipli çıktıların eleştirel değerlendirmesini ele almalıdır.([[multimodal-prompting-ai-literacy]])
3. **İnsan anlam yapımını koruyun.** Çok kipli YZ, öğrenenin kipler arasında kendi anlam yapımını ve değerlendirmesini büyütmeli, yerini almamalıdır.([[multimodal-learning-genai]])
4. **Değerlendirmeyi çok kipli geçerliliğe uzatın.** [[assessment-validity|Değerlendirme geçerliliği]], önyargı ve güvenilirlik, YZ çok kipli eserleri puanladığında ya da ürettiğinde incelenmelidir.([[multimodal-item-parameter-estimation-2026]])([[ai-ed-evaluation]])
5. **Eşitlik ve mahremiyeti izleyin.** Görüntü açısından zengin problemlerde güvenilmez destek ve çok kipli algılamanın veri talepleri eşitlik ve mahremiyet çıkarımları taşır.([[syal-multimodal-dialogue-stem-2026]])([[privacy-aware-classroom-incident-recognition-2026]])
6. **Boru hattını içeriğe eşleyin.** Bir siber güvenlik laboratuvarı asistanının çok kipli YZ’si yoğun görsel slaytlara daha iyi hükmetti, oysa OCR-artı-YZ boru hattı metin merkezli slaytlarda karşılaştırılabilir öğretim değerini anlamlı ölçüde daha düşük hesaplama maliyetiyle sundu.([[genai-cybersecurity-ocr-multimodal-instruction-2025|Patel ve ark. (2025)]])

## Bağlı kavramlar
- [[generative-ai]]
- [[llm]]
- [[knowledge-graph]]
- [[intelligent-tutoring]]
- [[ai-literacy]]
- [[prompt-engineering]]
- [[feedback]]
- [[assessment]]
- [[educational-measurement]]
- [[item-response-theory]]
- [[student-modeling]]
- [[socratic-method]]
- [[scaffolding]]
- [[ai-ed-evaluation]]
- [[benchmark]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[stem-education]]
- [[inclusive-learning]]
- [[ai-technologies]] — Şemsiye: YZ teknolojileri ve teknikleri (modeller, YZ eğitimi, robotik, RAG, etken)
- [[virtual-and-augmented-reality]] — jest, ses ve uzamsal girdi öğrenme kanalları olarak
- [[speech-and-voice-technologies]]
- [[arts-design-and-media-education]]
## Bağlı makaleler
- [[burriss-multimodal-composition-critical-ai-literacy-2026]] — Eleştirel YZ okuryazarlığı pedagojisi olarak YZ etiği üzerine video PSA bestesi (Burriss ve ark. 2026)
- [[student-attention-estimation-fairness-2026]] — Gerçek Zamanlı Öğrenci Dikkat Tahmini için Adillik Farkında Çok Kipli Transformer Modelleme
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[drawedumath-vlm-struggling-students-2026]] — El yazımı öğrenci matematik çalışmasında VLM performansı (DrawEduMath, Lucy ve ark. 2026)
- [[multimodal-learning-genai]] — Üretken YZ ile çok kipli öğrenmeye dair eğitimci rehberi (MMLD-AI modeli)
- [[syal-multimodal-dialogue-stem-2026]] — STEM’de Çok Kipli Girişim Etkisi ve yapılandırılmış diyalog toparlanması
- [[multimodal-ai-feedback-learning]] — Çok kipli YZ geri bildirimi öğrenmede eğitimcilerle eşleşir, algılarda aşar
- [[multimodal-prompting-ai-literacy]] — YZ okuryazarlığında bilgilsel iş olarak öğrencilerin çok kipli istek istemesi
- [[multimodal-item-parameter-estimation-2026]] — Çok kipli YZ’lerle IRT madde parametrelerinin tahmin edilmesi
- [[ai-guided-learning-audiovideo-2026]] — YZ rehberliğinde ses-video öğrenme desteği
- [[multimodal-knowledge-graph-educational-reasoning]] — Eğitimsel akıl yürütme için çok kipli bilgi grafikleri
- [[mllm-scientific-visualization-literacy]] — Bilimsel görselleştirme için çok kipli YZ okuryazarlığı
- [[multimodal-affective-its-presentation]] — Duygu temelli akıllı öğretimde çok kipli sinyaller
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Duygu temelli çok kipli matematik öğretimi
- [[llm-cognitive-diagnosis-handwritten-math]] — El yazımı matematiğin YZ bilişsel teşhisi
- [[nuclear-diffusion-text-to-image-learning-2026]] — Nükleer mühendislik eğitiminde metinden görüntüye öğrenme
- [[privacy-aware-classroom-incident-recognition-2026]] — Mahremiyet farkında çok kipli sınıf algılaması
- [[genai-cybersecurity-ocr-multimodal-instruction-2025]] — Siber güvenlik eğitiminde çok kipli OCR öğretimi
- [[cfes-p24-multimodal-slide-auditing-2026]] — CFES-P24: Slayt Denetimi için Çok Kipli YZ’lerin Kıyaslanması
- [[ai-grading-handwritten-physics-2026]] — El yazımı fizik değerlendirmelerinin YZ puanlaması (Olimpiyat)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — İlkokul yazımında çok kipli YZ besteleme ve eleştirel düşünme (Lu ve ark. 2027)
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[geovad-bench-visual-chain-of-thought-geometry-2026]] — Üretim ve Doğruluğun Ötesinde: Geometri Problem Çözümü için Görsel Düşünce Zincirinin Teşhisi ve Güçlendirilmesi
- [[muse-vlm-artistic-image-benchmark-2026]] — MUSE: 1.174 sanat eseri üzerinde 12 görev, VLM yeteneğini boyuta özgü bir profil olarak gösterir, duygusal yorumlama ve bakış açısına bağlı uzamsal akıl yürütmede en zayıf (Zhu ve ark. 2026)
- [[ai-assisted-physics-lab-report-assessment-2026]] — Deneysel Fizik Laboratuvar Raporlarının YZ Destekli Değerlendirmesi: Potansiyel, Sınırlar ve Öğretim Uygulamasına Destek
