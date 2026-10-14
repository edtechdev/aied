---
title: Fizik Eğitimi
created: "2026-10-14T21:34:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [socratic-method]
technology: [generative-ai, intelligent-tutoring]
discipline: [physics education, stem education]
audience: [learners, instructors]
level: [higher ed]
confidence: high
reviewed_by: [editor]
translation_of: concepts/physics-education
source_updated: "2026-10-06T18:35:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Fizik eğitimi** — öğrencilerin fizikleri nasıl öğrendiğini ve onu daha etkili nasıl öğrettiğini inceleyen alan; Sokratik [[intelligent-tutoring|YZ özel ders uygulamalarını]], [[computational-thinking|hesaplamalı düşünme]] değerlendirmesini, öğrenci [[trust]] ve YZ benimseme kalıplarını, otomatik puanlamanın geçerliliğini ve öğretmen hazırlığını kapsar. Bu bilgi tabanındaki fizik eğitimi makaleleri, alana özgülükleriyle dikkat çeker: YZ araçlarının, fiziksel muhakebenin özgün bilişsel talepleriyle — görsel-uzamsal düşünme, matematiksel modelleme, soyut sistemler düşüncesi ve çok adımlı [[problem-solving]] — nasıl etkileştiğini araştırırlar.

## Dikkate Alınması Gereken Sorular

- Fizik problemleri sıklıkla görsel-uzamsal düşünme, matematiksel modelleme ve çok adımlı muhakere gerektirir. Bunlar neden tam olarak mevcut YZ özel ders uygulamalarının zorlandığı bilişsel talepler olabilir?
- Öğrenciler büyük bir güven–fayda makası bildiriyor — ders çalışmalarında %91’i YZ kullanıyor, ancak yalnızca %41’i ona güveniyor. Tam olarak güvenmediğiniz bir aracı kulladığınız oldu mu? Bu makası ne yarattı?
- YZ puanlaması, dil açısından zayıf öğrencilerin fizik açıklamalarını sistematik biçimde düşük puanladı. Bu, bir YZ’nin bir açıklamayı nasıl puanladığına dair ne söyler — doğru bir sayısal yanıta kıyasla?
- Bir çalışma, Sokratik bir YZ sohbet robotunun canlı bir fizik kursunda soru özgünlüğünü belirgin biçimde artırdığını, ancak öğrencilerin aynı zamanda sık sık stratejik denetimi özel ders uygulamasına “devrettiğini” buldu. Stratejik denetimi devretmek ne zaman öğrenmeye yardımcı olur, ne zaman zarar verir?
- Fizik neden [[ai-education|eğitimde YZ]] için bir “sınav alanı” olabilir — sorunlarını YZ’nin muhakere ve değerlendirmeyi nasıl etkilediğini incelemek için ideal kılan ne?
- Bir YZ’nin fizik problem setinizi puanlamasına veya sizinle birlikte bir kuvvet diyagramını çözmesine güvenir miydiniz? Evet demeniz için YZ’nin — ve kursunuzun — hakkında neyin doğru olması gerekirdi?

## Giriş

Fizik eğitimi [[research-methods-aied|araştırması]], fizik problemleri iyi yapılandırılmış ama bilişsel açıdan zorlu olduğu için — YZ araçlarının öğrenmeyi, muhakereyi ve değerlendirmeyi nasıl etkilediğini incelemek için ideal hale getirdiği için — eğitimde YZ için bir sınav alanı olmuştur. Bu bilgi tabanındaki 26 makale, öğrenci soru kalitesini artıran Sokratik [[conversational-ai|sohbet robotlarından]], dil açısından çeşitli öğrencileri cezalandıran sistematik puanlama önyargılarına kadar YZ’nin hem vaadini hem sınırlarını boğuşan bir alanın portresini birlikte çizer.

### Temel araştırma temaları

**Fizikte Sokratik YZ özel ders uygulaması** en gelişmiş temadır; gerçek fizik derslerinde [[llm]] güçlü Sokratik diyalog yürüten üç makale vardır. **[[hashmi-socratic-physics-chatbot-2025|Hashmi ve ark.]]**, canlı bir derse devam eden 150 STEM öğrencisiyle, bir YZ sohbet robotuyla sürdürülen Sokratik etkileşimin giriş düzeyi mekanikte soru özgünlüğünü belirgin biçimde iyileştirdiğini gösterdi. **[[socratic-ai-physics-tutor-taxonomy-2026|Hashmi & Rebello]]**, aynı uygulamadan 357 öğrenci söylem kategorisinden oluşan aşağıdan-yukarı bir taksonomi kurdu ve meta-yordamsal dönüşlerin — öğrencilerin stratejik denetimi özel ders uygulamasına devrettiği noktaların — öğrenci etkileşimlerinde baskın olduğunu ortaya çıkardı. Her iki çalışma da daha geniş [[socratic-method]] araştırmasına katkı sağlar ve [[intelligent-tutoring|YZ Özel Ders Uygulamaları]] ve [[intelligent-tutoring]] çerçevelerine bağlanır.

**Öğrenci YZ benimsemesi ve güveni**, fizik öğrencilerinin YZ araçlarını gerçekte nasıl kullandığını inceler. **[[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]]** 50 puanlık bir güven–fayda makası buldu: ders çalışmalarında %91’i YZ kullanıyor, ancak yalnızca %41’i ona güveniyor; öğrenciler kendi başlarına, görsel-uzamsal muhakere ve devrelerdeki YZ başarısızlık biçimlerini tanımlıyor. **[[becker-chatgpt-typology-physics-2026|Becker ve ark.]]**, 1.189 anket yanıtından — %70 “Pragmatik Kullanıcılar” ve %30 “Şüpheci Kullanmayanlar” biçiminde — iki profilli bir tipoloji geliştirdi ve her iki grubun da hesaplamalı risk–fayda değiş-tokuşları yaptığını gösterdi. Bu çalışmalar [[ai-literacy]] ve [[trust-calibration]] araştırmalarını ilerletir ve herkese-uygun-tek-beden [[educational-policy-ai|YZ politikalarına]] meydan okur.

**Epistemolojik inançlar sohbet robotu davranışı tercihini izler.** Büyük kapsamlı, hesap temelli bir derste, öğrencilerin %52’si rehberli sorgulamayla başlayan ve yalnızca sorulduğunda yanıt veren bir sohbet robotunu tercih etti ve EBAPS toplamında daha yüksek puan aldı (p = 0,029) — ancak bu farklar Bonferroni düzeltmesini atlatmadı, ilişkiyi öneri niteliğinde, kesin sonuç değil bıraktı ([[physics-chatbot-epistemological-beliefs-2026|Sirnoorkar ve Mamidpalliwar (2026)]]).

**Davranış değişimi olmadan algı değişimi**, [[physics-students-llm-perceptions-instruction-2026|O'Brien ve ark. (2026)]]’nın bu tabloya eklediği şeydir. Fizik bölümü öğrencileri için zorunlu bir dönem dersinde verilen, YZ modellerinin nasıl çalıştığına dair düşündürücü bir ders, şüpheciliği keskin biçimde artırdı — YZ’nin öğrencilerde yanlış bir güven duygusu bırakabileceği yönündeki anlaşma %58’den %88’e yükseldi ve bir YZ’nin ortalama bir fizik öğrencisinden daha iyi performans gösterdiği inancı %54’ten %32’ye düştü — rahatlık (%71 anlaşma) ve teslim tarihi baskısı (%65) baskın kullanım nedenleri olarak kaldı. Dersin sınırları, etkisi kadar bilgilendiricidir: [[ai-literacy]] eğitimi, öğrencilerin bu araçlar hakkında söylediklerini değiştirdi, onları bir araca uzanmaya iten baskıları değil; bu nedenle bu tür bir müdahale, problem ve politika tasarımının yerine değil, yanında yer almalıdır.

Problem ortaya koyma, öğrenciyi problemin yazarına dönüştürür: 49 fizik öğrencisinin %76’sı, istek metni mühendisliği eğitiminden sonra üretici YZ etkileşimlerinde olumlu bir değişim algıladı; acemiler en çok kazanç sağlayanlar oldu ve yaklaşık %68’i tekniği öz çalışma yöntemi olarak olumlu buldu ([[genai-assisted-problem-posing-physics-2026|Dawson & Rebello (2026)]]).

**Değerlendirme ve hesaplamalı düşünme**, YZ’nin fizik öğrenmesini nasıl değerlendirebileceğini inceler. **[[llm-computational-thinking-physics-2026|Savage ve ark.]]**, YZ’yi giriş düzeyi fizikte [[computational-thinking|hesaplamalı düşünme]] gelişimini değerlendirmek için kullandı ve YZ’nin hesaplamalı düşünme değerlendirmesini ölçekleyebildiğini, ancak Sistemler Düşüncesi gibi karmaşık kavramlarla zorlandığını buldu. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]**, YZ puanlamasının dil açısından zayıf öğrencilerin fizik açıklamalarını sistematik biçimde düşük değerlendirdiğini gösterdi — bu bulgu [[assessment-validity]], [[bias-mitigation]] ve [[equity-in-ai-education]] ile bağlantılıdır.

**Teşhis değerlendirmesi için psikometrik altyapı.** [[mechanics-cognitive-diagnostic-physics-2026|Le ve ark. (2026)]], olağan “YZ-fizik” sorusunu ters çevirir: bir modelin fizik çözüp puanlayıp puanlayamayacağını değil, alanın kendi araştırma temelli [[assessment|değerlendirmelerinin]] fizik teşhisi yapmaya zorlanıp zorlanamayacağını sorar. FCI, FMCE ve EMCS maddelerini 14 ince taneli öğrenme hedefine eşleyip, LASSO platformu üzerinden 79 kurumdaki 807 dersteki 24.394 son-test yanıtına bir DINA bilişsel teşhis modeli uydurarak Mekanik [[cognitive-diagnosis|Bilişsel Teşhisini]] kurdular — fizikte ilk bilişsel teşhis bilgisayarlaştırılmış uyarlamalı testi olarak bildirilir. FCI ve EMCS iyi uydu (RMSEA² = 0,033 ve 0,022), FMCE ise yalnızca sınırda uydu (0,065); yazarlar bu uyumsuzluğu modellemeden değil, enstrüman tasarımından izler: puanlanan 43 FMCE maddesinin 42’si, zincirlenmiş kümeler halinde aynı senaryo köklerini paylaşır ve DINA’nın yasakladığı koşullu bağımsızlık varsayımını ihlal eden yerel madde bağımlılığı yaratır (FCI 30 maddeden 13’ünü bloklar; EMCS hiçbirini). Sınıflandırma doğruluğu, 22 hedef–değerlendirme kombinasyonundan 19’unda düşük riskli [[formative-assessment|biçimlendirici]] ölçüt karşılandı; üç başarısızlık, maddeleri kabaca %70 çakışan EMCS enerji hedefleriydi, böylece biriyle diğerinin ustalığı ayrılamaz. Fizik öğretimi açısından anlam, derslerin zaten uyguladığı enstrümanların, geriye dönük bir son-test puanı yerine öğretim *sırasında* eyleme dönüştürülebilir, hedef düzeyinde geri bildirim sunmak üzere yeniden amaçlandırılabileceğidir — yeter ki teşhis iddiaları, madde bankasının gerçekten destekleyebileceği çözünürlükte sunulsun.

**Özgün fizik problemlerinde çok kipli YZ’nin kıyaslaması.** [[omniphys-multimodal-physics-benchmark-2026|Chen ve ark. (2026)]], Çin eğitim metinlerinden ortaokul düzeyinden üniversite düzeyine uzanan fizikten oluşan geniş kapsamlı bir [[multimodal]] [[benchmark]] olan **OmniPhys**’i tanıtır (15.246 soru, 19.850 görsel). Olağandışı olarak, yalnızca çok kipli *girdi* anlamasını değil, çok kipli *çıktı* üretimini — modellerin özgün problem çözmenin temel bir bileşeni olan yapılandırılmış fizik diyagramlarını sentezleyip sentezleyemediğini — değerlendirir. Kapsamlı değerlendirmeler, özellikle karmaşık muhakere ve görsel üretimde mevcut çok kipli YZ modellerinde kritik boşluklar ortaya koyar.

**YZ destekli öğretim için öğretim tasarımı çerçeveleri.** **[[airis-cognitively-activated-ai-physics-2026|Kuhn ve ark.]]** fizikte bilişsel açıdan etkinleştirilmiş YZ kullanımı için üç aşamalı bir yapı olan **AIRIS** çerçevesini (Activate–Inquire–Reflect with Intelligent Support — Etkinleştir–Sorgula–Yansıt) önerir: öğrenciler YZ’den önce beklenen sonuçları tahmin edip taslak çizer (Etkinleştir), hesaplama ve gösterim adımlarını YZ’ye devrederken çıktıyı kendi tahminleriyle eleştirel biçimde karşılaştırır (Sorgula) ve ardından yorumlar, gösterimler arası tutarlılığı denetler ve YZ’nin katkısını üzerine yansıtır (Yansıt). [[self-regulated-learning]], [[cognitive-offloading|Bilişsel Yük]] Kuramı, çoklu dış gösterimler ve [[human-ai-collaboration]] üzerine kurulu olan çerçeve, merkezi sorunu kopya çekmek veya araç seçimi değil, [[learning-design|öğretim tasarımı]] olarak çerçeveler ve YZ desteği kaldırıldığında öğrenmenin ayakta kalıp kalmadığını sınayan “geri çekme koşulu” deneyleri çağrısında bulunur.
- **YZ çözümlerini bir rubrikle eleştirmeyi öğretin.** YZ çözümünü MAPS rehberliğiyle yansıtma yoluyla eleştiren 24 giriş düzeyi fizik laboratuvar grubu, atlanan sayısal türevsel integral, tanımsız gösterim ve nitel-yerine-nicel çizimi tespit etti; yalnızca ilgili bir problemi çözen gruplar ise cilalanmış çıktıyı kabul etti veya kendi yanlış kanılarından reddetti ([[probing-ai-generated-physics-solutions-2026|Borse ve ark. (2026)]]).

**Sentetik deneysel veri olarak üretici video.** [[genai-video-engineering-physics-workflow-2026|Alvarado-Cruz ve ark. (2026)]], sabit sürtünme, doğrusal sürükleme ve karesel sürükleme olmak üzere üç dirençli kuvvet rejimi için PixVerse, Grok Imagine ve Pippit ile video senaryoları üretir, kinematiği [[open-source]] Tracker aracıyla çıkarır ve analitik modelleri doğrusal-olmayan en küçük karelerle uydurur. Sentetik veri, klasik hareket denklemleriyle uyumlu oldu ve fiziksel olarak anlamlı parametreleri geri kazandırdı; yinelenen pratik bulgu ise istek metni özgünlüğünün fiziksel tutarlılığı yönettiğidir: daha ayrıntılı açıklamalar daha tutarlı dinamikler üretti. İş akışı, model kurulumundan [[quantitative-research|nicel]] doğrulamaya deneysel uygulamayı yansıtır ve [[prompt-engineering|istek metni formülasyonunu]] bir kolaylık yerine deneysel tasarımın bir aşaması olarak yeniden çerçeveler. Henüz gösteremediği şey öğrenmedir: buradaki doğrulama, üretilen hareket ile yazarların modelleri arasındaki uyumdur, öğrencilerin ölçüm yargısı değil; bu nedenle yaklaşım, kanıt olarak kullanılan her üretilmiş verinin yanıtlaması gereken [[assessment-validity|geçerlilik]] sorusunu devralır.

**PhET’in kapsamadığı konular için özel simülasyonlar.** YZ tarafından üretilen HTML/JavaScript modelleri, öğretim elemanlarının en yakın yayımlanmış simülasyon yerine bir kursun ihtiyaç duyduğu simülasyonu üretmesini sağlar — teknik ve fiziksel doğrulamaya tabi olmak üzere; bir pilot uygulamada 26 çiftte 53 öğrenci, programlama geçmişi gerekmeden serbest düşüş modellerini kurdular ve geliştirdiler ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion ve ark., 2025]]).

Yeniden kullanılabilir dört öğeli bir istek metni — araçlar, ekran, el denetimleri, eniyileme — kodsuz bir öğretmenin, tutup-açma hareketlerinin fiziği yönettiği tarayıcı tabanlı bir AR simülasyonu üretmesini sağlar; 29 öğrencili bir pilot uygulamada hareket, 29 öğrencinin tümüne dalga boyunu “hissetme” kapasitesi kazandırdı (ortalama 4,52) ve %86’sı daha yüksek katılım bildirdi ([[genai-ar-physics-simulation-prompt-2026|Levy ve ark. (2026)]]).

**Bir istek metninden üretilen YZ enstrümantasyonu.** Bir YZ asistanın doğal dille verilen isteğiyle üretilen, hiçbir elle kodlama gerektirmeyen bir dönme laboratuvarı, düzgün ve ivmeli dairesel hareketi bağımsız Tracker video analizine %1’den fazla sapmayla ölçtü ve öğretim elemanlarının önceden derlenmiş bir sensör uygulamasına uyum sağlamak yerine arayüzü kendi pedagojik değişkenleri etrafında kurmasını sağladı ([[ai-generated-smartphone-circular-motion-lab-2026|Suñer ve ark. (2026)]]).

**Yeniden tasarlanmış bir derste yardımlı performans ve yardımsız bilgi.** Ruhr Üniversitesi Bochum’daki (Mikhasenko ve ark.) giriş düzeyi nükleer ve parçacık fiziği kursunun 2026 tasarımında, saf [[prompt-engineering|istek metni yazımının]] yetmeyeceği biçimde tasarlanmış, kasten YZ’ye dirençli on araştırma biçimli ödev sayfasında [[generative-ai|üretici YZ]] kullanımına izin verildi. [[student-engagement|Katılım]] ve hedef yüksekliği yüksekti — 42 öğrenciden 24’ü on sayfanın tümünden kredi kazandı ve bir türetme iki metreden uzun bir tahtayı doldurdu — ancak yardımsız 90 dakikalık yazılı sınav “ciddi bir uyarı”ydı: 80 üzerinden 20,6 ortalamasıyla, 27 sınan giren yalnızca ikisi 40’a ulaştı. Yazarlar, yardımlı performans ile bağımsız olarak geri çağrılabilir bilginin, birbirini eğittiği veya gösterdiği varsayılamayacak ayrı kazanımlar olduğu ve fizik derslerinin yardımsız çalışmaya bir miktar pratik ayırması gerektiği sonucuna varıyor — bilgi tabanının daha geniş [[transfer-of-learning|aktarım]] kanıtını güçlendirerek.

Altı ülkede 11 ampirik çalışmayı kapsayan bir 2026 PRISMA derlemesi, alan düzeyinde aynı sonuca ulaşır: YZ geri bildiriminden ve simülasyondan kaynaklanan kısa vadeli kazanımlar, sonraki sınavlara yansımadı veya bağımsız performansa aktarılmadı ([[ai-university-physics-education-review-2026|eğitimde YZ derlemesi — üniversite fizik eğitimi]]).

**Öğretim değişkeni olarak ajan rol tasarımı.** [[wang-teacher-student-centered-agents-physics-2026|Wang ve ark. (2026)]] modeli (DeepSeek R1), platformu ve sıcaklığı sabit tutup yalnızca istek metniyle belirtilen rolü değiştirir: sınırlı bir ders kitabı bilgi kaynağından yetkili biçimde yanıt veren, öğretmen merkezli bir ajan; öğrenenlerin anlayışına dair bilgiye sahip, empatik bir öğretmen olarak yapılandırılmış, [[misconceptions]] nedenini teşhis etmek, ilgili kavramı adlandırmak ve benzer bir olguya aktarmak üzere betimlenmiş, öğrenci merkezli bir ajan. İki kavramsal madde üzerinde çalışan 59 lise mezunu arasında, öğrenci merkezli ajan daha yüksek son-test puanları (9,67’ye karşı 7,93; r = 0,38), daha düşük yabancı ve daha yüksek yerinde bilişsel yük, daha güçlü akış deneyimi (d = 0,92) ve daha yüksek empati algısı (r = 0,53) üretti — rol çerçevelemenin, yalnızca yanıt doğruluğu değil, bir fizik ajanını öğretim açısından etkili kılan şey olduğuna dair kanıt ([[pedagogical-agent]], [[prompt-engineering]]).
- **Kıyaslama testi puanları, modellerin fizikte şimdiden yapabileceklerini küçümser.** Yaygın kullanılan altı fizik kıyaslama testini alan uzmanlarıyla yeniden puanlamak, bildirilen açığın çoğunun kusurlu maddelerden ve kısıtlayıcı otomatik puanlayıcılardan kaynaklanan bir yapaylık olduğunu ortaya koydu: denetlenen 250 reddin 143’ü (%57,20) kıyaslama testi kusuru, 95’i (%38,00) puanlayıcı hatası, yalnızca 12’si (%4,80) gerçek model hatasıydı. Düzeltildiğinde, HLE-Physics ortalama@4 %47,28’den %78,66’ya, CritPt ise %32,29’dan %87,50’ye yükseldi. Fizik öğretimi açısından bu iki yönlüdür: öğrencilerin birçok kanonik problemin uzman düzeyinde metinsel çözümlerini şimdiden elde edebilecekleri anlamına gelir; dolayısıyla fizik muhakere değerlendirmesi, kıyaslama kirliliğine direnen maddelere ve nihai yanıtlardan çok süreç kanıtına doğru ilerlemelidir. ([[frontier-models-physics-benchmark-audit-2026]])
- **YZ puanlaması, her parçayı eşleştirmeden yüksek riskli bir fizik sonucunu yeniden üretebilir.** Elle yazılmış 10.364 Olimpiyat ve üniversite sayfasını puanlayan çok kipli bir YZ, sınav görevlileriyle aynı beş öğrenciden oluşan Olimpiyat takımını buldu ve toplamlarla r = 0,93–0,96 korelasyon gösterdi, ancak soru parçası düzeyinde tam uyum %70’te kaldı — sınav görevlisi denetimli ikinci okuma, yerine kullanım değil ([[ai-grading-handwritten-physics-2026|Pathak ve ark. (2026)]]).

- **Fizik kıyaslama testleri müfredata dayalı ve İngilizce dışı olabilir.** [[physicsmate-bengali-secondary-physics-benchmark-2026|Jahin ve ark. (2026)]], ulusal 9–10. sınıf fizik ders kitabından ve 1.760 düğümlü bir bilgi grafiğinden 1.834 Bengalce soru kurdular; tek bir sabit ince ayar yöntemi 0,6B, 1,7B ve 4B parametrelerde sırasıyla 5,5, 15,0 ve 23,3 puan kazandırdı.

### İlgili kavramlarla bağlantıları

Fizik eğitimi daha geniş [[stem-education]] alanı içinde yer alır, ama özgün bağlantıları vardır: fizik problem çözmede güçlü Sokratik diyalog geleneği üzerinden [[socratic-method]]; fizikte hesaplamanın artan rolü üzerinden [[computational-thinking]]; fizik açıklamalarını puanlamanın zorlukları üzerinden [[assessment-validity]]; ve [[simulation]] temelli hazırlık üzerinden [[professional-training]]. [[student-experience]] ve [[ai-literacy]] kavramları, fizik öğrencilerinin YZ araçlarında nasıl yol aldığını anlamak için elzemdir; [[educational-measurement]] ve [[automated-assessment|Otomatik Puanlama]] ise değerlendirme boyutuna bağlanır.

## Fizik öğretim elemanları için çıkarımlar

- **Yalnızca benimsemeyi değil, öğrenci güvenini de tasarlayın.** [[fouad-bentley-trust-utility-gap-physics-2026|Fouad & Bentley]] 50 puanlık bir güven–fayda makasını belgeler (%91 kullanım, %41 güven); öğrenciler YZ’nin görsel-uzamsal muhakere ve devrelerdeki başarısızlıklarını tanımlar — kabulü varsaymak yerine bu sınırları açığa çıkarma ve tartışma fırsatları yaratın.
- **Soru kalitesini derinleştirmek için Sokratik YZ’yi kullanın, ancak stratejik devretmeye dikkat edin.** [[hashmi-socratic-physics-chatbot-2025|Sokratik sohbet robotları]] soru özgünlüğünü artırır; ancak [[socratic-ai-physics-tutor-taxonomy-2026|taksonomi araştırması]] meta-yordamsal dönüşlerin baskın olduğunu bulur — öğrenciler stratejik denetimi özel ders uygulamasına devreder. Öğrencileri karar vericiler olarak tutmak için müdahale edin.
- **YZ kullanımını yalnızca izinle değil, bilişsel olarak yapılandırın.** [[airis-cognitively-activated-ai-physics-2026|AIRIS]] (Etkinleştir–Sorgula–Yansıt), öğrencilerin YZ’den önce tahmin/taslak çıkarma, hesaplama adımlarını çıktıyı eleştirel biçimde karşılaştırarak devretme ve sonrasında yansıtma değerini gösterir — YZ bütünleştirmesini bir öğretim tasarımı sorunu olarak ele alın ve öğrenmenin YZ kaldırıldığında ayakta kalıp kalmadığını sınayın. 95 lisans öğrencisiyle bir randomize çalışmada, mekanik problemleri üzerinde öz-düzenlemeli öğrenmeye uyumlu 45 dakikalık bir eğitim, öğrencilerin sonradan bir modelle elektromanyetizm maddelerini düzelttiklerinde doğruluğu yükseltti: hatalı yanıtlarının %69,3’ü doğru hale geldi, eğitimsiz kontrol grubunda bu oran %41,3’tü (d = 0,81) ([[structured-genai-training-physics-problem-solving-rct-2026|Huang ve ark. (2026)]]).
- **Puanlama önyargısına karşı korunun.** [[ai-scoring-language-bias-physics|YZ puanlaması]] dil açısından zayıf öğrencilerin açıklamalarını sistematik biçimde düşük değerlendirir; kavramsal değerlendirmeye yönelik dil duyarlı veya insan denetimli puanlama kullanın.
- **Öğretmen hazırlığı için simüle edilmiş sınıflar kullanın.** [[multiagent-classroom-dual-process-physics-teachers-2026|Simüle edilmiş çok ajanlı sınıflar]] aday öğretmenlere, özgün öğrenci muhakere yanıtlarını yanıtlama konusunda nadir pratik fırsatları sunar — canlı mikro öğretimin düşük maliyetli bir tamamlayıcısıdır.
- **Yardımsız pratik ve değerlendirme ayırın.** Bochum tasarımı ([[ai-particle-physics-education-redesign-2026|Mikhasenko ve ark. 2026]]), YZ’ye izin verilen, araştırma biçimli ödevlerin yüksek katılımla tamamlanmasının, öğrencileri yardımsız bir sınavda (ortalama 20,6/80) çok geride bırakabileceğini gösterir — yardımlı performans ile bağımsız olarak geri çağrılabilir bilgiyi ayrı kazanımlar olarak ele alın ve kursa kasten yardımsız pratik ile yazılı sınav yerleştirin.

- **Kolaylaştırıcı bağlılığını doğrulayın; model kurma aşamasını YZ’siz tutun.** “Bize hangi kap daha ağırdı söylesenize” diye zorlanan amaç odaklı yapılandırılmış bir Gem, hiç kimsenin ölçmediği kütle değerleri uydurdu; bu nedenle dil temelli bir kolaylaştırıcının bağlılığı varsayılmak yerine denetlenmelidir ve YZ’siz kurma aşaması, ona ulaşamadığı elle yapılan çalışmayı korur ([[embodied-inquiry-ai-facilitator-physics-2026|Tufino & Damiani (2026)]]).

## Bağlı kavramlar

- [[stem-education]]
- [[socratic-method]]
- [[intelligent-tutoring]]
- [[computational-thinking]]
- [[ai-literacy]]
- [[trust-calibration]]
- [[student-experience]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[educational-measurement]]
- [[learning-analytics]]
- [[professional-training]]
- [[simulation]]
- [[generative-ai]]
- [[higher-ed]]
- [[discipline-specific-aied]]
- [[chemistry-education]] — Chemistry education and AI: labs, formative assessment, LLM limits, philosophy of experimentation
- [[biology-education]] — Biology education and AI: lab teaching assistants, AI literacy in biology, critical thinking, specialized tools

## Bağlı makaleler

- [[genai-video-engineering-physics-workflow-2026]] — From Prompts to Physical Laws: A Generative AI Workflow for Engineering Physics Education
- [[wang-teacher-student-centered-agents-physics-2026]] — Öğretmen merkezli vs. öğrenci merkezli, istek metniyle tasarlanmış fizik ajanları (Wang ve ark. 2026)
- [[omniphys-multimodal-physics-benchmark-2026]]
- [[benzion-ai-physics-simulations-virtual-lab]] — Using AI to rapidly generate physics simulations / virtual labs (Ben-Zion ve ark. 2025)
- [[hashmi-socratic-physics-chatbot-2025]]
- [[socratic-ai-physics-tutor-taxonomy-2026]]
- [[fouad-bentley-trust-utility-gap-physics-2026]]
- [[becker-chatgpt-typology-physics-2026]]
- [[llm-computational-thinking-physics-2026]]
- [[ai-scoring-language-bias-physics]]
- [[multiagent-classroom-dual-process-physics-teachers-2026]]
- [[physics-chatbot-epistemological-beliefs-2026]]
- [[ai-generated-smartphone-circular-motion-lab-2026]]
- [[genai-ar-physics-simulation-prompt-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[probing-ai-generated-physics-solutions-2026]]
- [[genai-assisted-problem-posing-physics-2026]]
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: A Framework for Cognitively Activated AI Augmentation in Physics
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[ai-particle-physics-education-redesign-2026]] — AI in Particle Physics Education: Research Problems and Foundational Skills
- [[mechanics-cognitive-diagnostic-physics-2026]] — Mechanics Cognitive Diagnostic: turning the FCI, FMCE and EMCS into a 14-objective cognitive diagnostic (Le ve ark. 2026)
- [[physics-students-llm-perceptions-instruction-2026]] — Skepticism vs. Convenience: Physics Students' Perceptions and Use of Large Language Models Before and After Instruction
- [[context-prompts-physics-assignments-2026]] — Artificial Intelligence Driven Physics Assignments using Context Prompts
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
- [[physicsmate-bengali-secondary-physics-benchmark-2026]] — PhysicsMate: 1,834 Bengali secondary-physics QA pairs mapped to a 1,760-node curriculum graph, with small-model adaptation gains
- [[ai-university-physics-education-review-2026]] — Artificial intelligence in university physics education: a systematic review of empirical studies
- [[structured-genai-training-physics-problem-solving-rct-2026]] — Structured GenAI training for physics problem revision: a randomized controlled trial (Huang ve ark. 2026)
