---
title: "Öğrencilere YZ Çıktısını Nasıl Doğrulamayı Öğretebilirim?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
translation_of: faqs/verify-ai-output
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

# Öğrencilere YZ Çıktısını Nasıl Doğrulamayı Öğretebilirim?

Onları uyardınız. Sohbet robotu bir arama motoru değil, kaynakları kontrol et, sorumlu kullan — ve teslim edilen işlere aynı uydurma atıflar ve kendinden emin yanlış yanıtlar gelmeye devam ediyor. Uyarılar başarısız oluyor, çünkü bir eğilim istiyorlar. Dikkatli öğrencilerde bu var, acele edenlerde yok ve ekranda ekranı gayet iyi okuyan bir çıktıyla saat 23.00’te bir öğrencinin üzerinde hareket edebileceği hiçbir şey yok.

Burada toplanan araştırma, bu çerçevelemenin öğretmek ya da notlamak için fazla kaba olduğunu söylüyor. Kontrol etmek, analitik olarak birbirinden ayrı eylemler bütünüdür ve geniş “sorumlu kullanım” etiketi, bir kontrolü denemiş olan öğrenci ile çıktının doğru olup olmadığına karar vermiş olan öğrenci arasındaki farkı gizler. Özet: doğrulama, ona bir özellik gibi davramayı bırakıp bir dizi gibi davrmaya başladığınız anda öğretilebilir hale gelir — kontrolden önce sabitlenmiş bir standart, kayıt üreten bir kontrol ve öğrencinin alan gerekçeleriyle savunmak zorunda olduğu bir karar. Bu, bu hafta çözebileceğiniz bir tasarım problemidir — ve ödevin hâlihazırda ürettiği yapıtlarla çözebileceğiniz bir notlama problemidir.

Bu sayfa, doğrulamanın kendi mekaniğini ele alır. Öğrencilerin bu sistemlerin nasıl çalıştığı hakkında ne anlaması gerektiği ve bu anlayışın nasıl tanımlandığı, sıralandığı ve değerlendirildiği için bkz. [[incorporating-ai-literacy]] ve [[ai-literacy-evidence]]. Bir öğrenci [[llm|large language models]] hakkında çok şey bilebilir ve hiçbir şey doğrulayamayabilir.

## Doğrulama, bir öğrenciden gerçekte ne ister

[[verification-quality-reliance-calibration-genai-2026|Wei and Shang (2026)]], “eleştirel YZ kullanımı”nın genellikle tek bir şeye indirdiği yediliyi ayırır: epistemik değerlendirme, doğrulama başlatma, süreç kalitesi, doğrulama başarısı, güvenme kararları, anlık görev performansı ve bağımsız öğrenme. Ders programı rubriğiniz “kaynaklar kontrol edildi” der, ki bu ikinci adımda durur ve kontrolün yetkin olup olmadığı (süreç kalitesi) ya da bir şeyi değiştirip değiştirmediği (başarı, sonra güvenme kararı) hakkında hiçbir şey söylemez. Başlatma, başarı değildir: güçlü bir süreç sonuçsuz bitebilir, zayıf biri doğru yanıta ulaşabilir ve bir arama yapıp kafası karışık kalmış bir öğrenci, soruyu çözmüş biriyle aynı puanı alır.

İkinci ayrım [[trust]] ile güvenme arasındadır. Aynı derleme, [[trust-calibration|reliance calibration]], YZ çıktısının gerçek kalitesi göz önüne alındığında bir güvenme kararinin uygun olup olmadığına ilişkin bir yargı olarak tanımlar — çıktıya bağlı bir sınıflandırma, bir zaman çizelgesinde bir aşama değil ve bir güven ölçeğinde bir puan değil. Denetlenen bir çalışma, sahte ChatGPT bilgisinin katılımcıların bildirdiği güvenini değiştirdiğini buldu, ancak sonradan belirli bir öneriyi kabul ya da ret edip etmediklerini hiç kaydetmedi. Bir başka çalışma, 78 çeviri öğrencisi üzerinde ChatGPT [[feedback]] ilişkin kabul ve ret kararlarını kaydetti, ancak bağımsız uzman değerlendirmesi olmadan bir kabul uygun, bir ret gerekçelendirilemez denilemez. Çıktı kalitesi hakkında temel gerçeklik olmadan güvenme hiç sınıflandırılamaz — bu da her doğrulama görevinin neye ihtiyaç duyduğunu söyler: savunulabilir bir yanıt anahtarına.

İşte bu nedenle [[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai (2026)]], hatalı kalibrasyonu bir öğrenci eksikliği değil, bir tasarım problemi olarak ele alır. Tipolojileri doğrulama yeteneğini doğrulama güdüsüyle kesiştirir ve profiller farklı çözümler gerektirir: yüksek yetenekli, düşük güdülü kullanıcı kayıtsız aşırı güvene yatkındır, düşük yetenekli, düşük güdülü kullanıcı ise en açıkta olanıdır — bu yüzden aynı kontrolü geçemeyen iki öğrenci zıt çarelere ihtiyaç duyabilir.

## Nasıl öğretilir

Wei ve Shang’ın sentezi, Web of Science Core aramalarından 493 tekilleştirilmiş kayda dayandı ve 14 öncelikli ampirik çalışmayı doğrulama, güvenme ve sonuç sütunlarına yerleştirdi. Yapıcı çıktısı, görevleri üzerine kurulacak dizidir. Önce çıktı kalitesine karar verin, doğrulamanın başlatılıp başlatılmadığını yakalayın, süreç kalitesini kodlayın, başarılı olup olmadığına puan verin, kabul–revize–ret kararını kaydedin ve o kararı kararlaştırılmış kaliteye karşı değerlendirin. Buraya ait bir uyarı daha vardır: uygunsuz kabulü azaltan müdahaleler, doğru yardımın istenmeyen şekilde reddine karşı da kontrol edilmek zorundadır; bu yüzden bir öğrencinin belirtilmiş bir gerekçeyle iyi çıktıyı kabul etmesi için yer bırakın.

**Çıktıdan önce öngörün, sonra karşılaştırın.** [[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]], inşa görevleri için bir ölçüm programını *çalıştırmadan önce öngör* üzerine kurar: öğrenen ne olması gerektiğini belirtir, sonra yapıtın davranışına, çalışıp çalışmadığına değil alan gerekçeleriyle karşı o öngörüye göre yargılanır. 24 çalışmanın denetimi, farklı görev yapıları altında aynı aracın zıt sonuçlar ürettiğini buldu: geleneksel bir ChatGPT düzenlemesi başarıda, [[self-efficacy]] ve akışta anlamlı biçimde daha düşük sonlandı, doğrulama gereklilikleri ve hata yansıtma modülleri eklenen bir koşul ise daha güçlü [[critical-thinking|higher-order thinking]] gösterdi. Öngörü çıktıdan önce geldiği için akıl yürütme kayıtta olur — ve kayıt, notladığınız şeydir.

**Kayda karşı, adlandırılmış bir hedefle kaynak kontrolü isteyin.** [[citation-errors-hallucinations-computing-education-2026|Denny et al. (2026)]], 2021’den bu yana yayımlanan 5.225 bilgisayar eğitimi makalesinden 113.588 atfı izledi ve 828 şüpheli kaydı elle doğruladı; 14 makalede 30 tanesinde doğrulanabilir biçimde uydurma bibliyografik bilgi buldu, tümü 2025 ve 2026’dan. On üçü tamamen uydurmaydı; diğer 17’si gerçek bir başlığı uydurma ya da hatalı yazarlık, mekân ya da yıl ile birleştirdi. SIGCSE Technical Symposium’da sayı, 2025 bildirilerindeki 3’ten 2026’da 17’ye, yani 2026 bildiri makalelerinin **%2,3**’üne yükseldi. Yazar alanları, üretilen bir atfın herhangi bir parçasından daha sık başarısız olur; bu yüzden “kaynağı aç ve yazar listesini oku”, hatalı olma olasılığı en yüksek alanı hedefler. Öğrencilerden “kaynakların gerçek olduğundan emin ol” demeyin; yazarları, mekânı ve yılı kaydın kendisine karşı doğrulamalarını isteyin. Makale, atıf yapılan her eserin doğrulanmasını ve her denetleyicinin [[human-in-the-loop-ai|human-in-the-loop]] kalmasını ister — atıf doğrulama gereksiniminin prova ettiği uygulama budur.

**Yalnızca uyarıyı değil, ayrımı öğretin.** Gousopoulos doğrulamayı iki bağımsız parametreli bir sinyal algılama problemi olarak resmileştirir: duyarlılık, doğru çıktıyı kusurlu çıktıdan ayırt etme yeteneği ve ölçüt, öğrenenin red için eşiği belirlediği yer. Aşırı güvenme buna göre ayrışır — uyarılar, kontrol listeleri ve halüsinasyon istek metinleri ölçütü değiştirir, bir öğrencinin ne zaman reddettiğini değiştirirken; alan öğretimi, çözümlü karşılaştırmalar ve tohumlanmış hata alıştırması duyarlılığı yükseltir, çünkü öğrenen artık anlayabilir. Ön koşul şudur: doğrulama öğretimi yalnızca duyarlılığın sıfırı aşabilmesi mümkünse eğitici olur; bu, doğru ile yanlış çıktıyı ayırt etmek için yeterli alan bilgisi gerektirir. Aynı denetimde, üretilen [[llm]] kodunu açıklamaları istenen acemiler görevlerin yaklaşık üçte birinde başarılı oldu; bu yüzden YZ geri bildirimini ya da kodu kendi akıl yürütmenize göre yargılamak, yalnızca o akıl yürütmenin özü olduğu yerde gerçek bir kontroldür. Öğrencileriniz alan düşünmesini henüz yardımsız yapamıyorsa, daha fazla uyarı size hiçbir şey kazandırmaz; önce içeriği öğretin ve kontrolü ona bağlayın.

**Görevin hemen öncesinde önceden uyarın.** [[chatgpt-inoculation-training-verification-2026|Vu, Cummings and Park (2026)]], ABD’deki 100 öğrenciye, 40 yerel ve 60 uluslararası EFL’ye, iki görevin hemen öncesinde genel bir aşılama (önceden uyarma) mesajı gösterdi. Aşılanan öğrenciler akademik kaynak özeti görevini doğrulama olasılığı anlamlı biçimde daha yüksekti (M = 0,34’e karşı 0,18), öz bildirime dayalı doğrulama niyetleri ise değişmedi. İki ders: kullanım noktasındaki kısa bir uyarı, yerine getirilen davranışı değiştirir ve etki göreve bağımlıydı — kaynak özeti görevi için görülürken, üs alma ve büyük sayı çarpımı üzerine bir matematik testinde tekdüze biçimde görülmedi.

**Düzeltmenin bedelini hissettirin.** Derlemenin denetlediği bir hata düzeltme paradigminde, düzeltme sırasındaki çaba öğrenme için önemliydi; basit yanıt değiştirme aynı faydayı sağlaması pek olası değildir. Bir öğrenciden bir adımı yeniden üretmesini, bir paragrafı yeniden yazmasını ya da bir çıktının neden yanlış olduğuna dair alan gerekçesini belirtmesini istemek, bir kontrolü işe dönüştürür. [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]], mekanik biçimde kontrol edilebilecek şey için çıtayı belirler: belgelenmiş ölçütler, yorumsal yargı olmadan yerleşik bilgiye karşı karşılaştırma ve tek bir doğru yanıt ya da önceden belirtilmiş kabul edilebilir alternatifler. Yorumlayıcı her şey bu çıtayı geçemez; bu yüzden mekanik katmanı — tarihler, formüller, atıflar, hesaplamalar — yargı katmanından ayırın; yargı katmanında kontrolün aracı öğrencinin kendi okumasıdır.

## Polis uygulamadan nasıl değerlendirilir

Gousopoulos sonucu doğrudan çıkarır: YZ yapıtı üretebiliyorsa, yapıt değerlendirme olamaz; bu yüzden değerlendirme, şartnameye, doğrulama akıl yürütmesine ve yoruma taşınır. Model yazarlığı yapısının dört yüzü vardır — şartname, kavramsal model, doğrulama, yorum — devredilmişden yazılmışa dört sıralı düzeyde; yazılmış düzey, ilk istek metninden önce gelen doğrulanabilir bir şartname, belirtilmiş bir gerekçeyle alan gerekçeleriyle çıktının reddi ve yapıtın kendisi hakkındaki raporunun ötesinde bir yorum gerektirir. Rubrik, bir inşa görevinin hâlihazırda ürettiği materyallerden puanlandığı için aynı araç [[formative-assessment|formative assessment]] ve bir araştırma ölçütü olarak hizmet eder. Bu, meşguliyet kaygısına verilen yanıttır: bir ödev eklemiyorsunuz, bir yan ürünü notluyorsunuz.

Bunun gözetim haline gelmesini önleyen üç karar vardır. Birincisi, kontrolü çabaya karşı değil kararlaştırılmış kaliteye göre notlayın — aksi halde kontrol tiyatrosu yapma teşviki inşa edersiniz. İkincisi, Venetsanos’un gerektirdiği biçimde kaynağı belirtin: öğrenciler aldıkları geri bildirimin kaynağını, doğasını ve sınırlarını anlamak zorundadır — hangi bölümlerinin makine tarafından doğrulandığını, hangilerinin değerlendirici biçimde yargılandığını ve insan yargısının öncelikli olduğunu — çünkü öğrenciler yerini oturtamadıkları geri bildirimi tartamaz. Üçüncüsü, uygulamayı tespit araçlarından uzak tutun. [[bassett-ai-detectors-education-2026|Bassett et al. (2026)]], YZ tespitinin eğitimde hiç kullanılmaması gerektiğini savunur: tahminleri olasılıksaldır ve gerçek dünya metin kökeni bilinmediği için bağımsız olarak doğrulanamaz; puanları, dürüstlük soruşturmalarının gerektirdiği olasılık dengesi standardını karşılamaz; ve insan–YZ ikiliği, YZ *ile* değil YZ *tarafından* yaratılan iş için anlamsızdır. Sonuçları, tespitin “akademik dürüstlüğü korumadığı, onu baltaladığı” — gözetim rejimlerinin şüpheyi beslediği ve öğrenci [[trust]] aşındırdığıdır. Tespitin iki anlamını ayrı tutun: [[ai-detection|detecting AI-generated text]]nin burada savunulabilir bir kanıt rolü yoktur, öğrencilere YZ çıktısındaki hataları tespit etmeyi öğretmek ise alıştırmanın amacının kendisidir.

Ayrım mimarîdir ve öğrencilere anlatmaya değerdir: [[vetting-dual-llm-safety-education|Li, Zhang and Botelho (2026)]], çıktıyı üreticinin içine gömmek yerine ikinci bir modelle kontrol eder — nedenini gören bir öğrenci, “araç doğru dedi” ifadesinin neden bir doğrulama argümanı olmadığını da görebilir.

## Öğrenciler kontrolü neden atlar

**Kalibrasyon.** Jaidka ve Cai’nin tipolojisi, yüksek yetenekli düşük güdülü öğrenciyi kayıtsız aşırı güven riski altında, düşük yetenekli düşük güdülü öğrenciyi ise en açıkta olarak konumlandırır. Denetlenen literatür aynı ayrımı minyatürde gösterir: yaklaşık yarısında doğru olan öneriler sunan bir tasarımda, öğrencilerin ona verdiği ağırlık [[prior-knowledge|prior knowledge]] göre değişti. Kalibrasyon hataları öğüt vermeyle düzeltilmez: hatalı kalibre olan şey, öğrencinin kendi güven sinyalidir.

**Akıcılık.** İyi okuyan çıktı doğru kabul edilir. Üretilen [[llm]] kodunu açıklamaları istenen acemiler görevlerin yaklaşık üçte birinde başarılı oldu ve öğrenci–ChatGPT test konuşmaları üzerine bir saha çalışması, doğru rehberliğe uymanın yine de yanlış bir yanıt ürettiğini buldu. Duyarlılık neredeyse sıfır olduğunda, kontrolü atlamak öğrencinin hissedebildiği bir şeye mal olmaz — hata, notlanana dek görünmezdir.

**Sosyal kanıt ve niyet.** Öğrenciler doğrulamayı niyet ettiklerini bildirir ve bu bildiri hiçbir değer taşımaz: Vu, Cummings ve Park’ın çalışmasında öz bildirime dayalı doğrulama niyetleri değişmezken yerine getirilen davranış değişti (M = 0,34’e karşı 0,18). Niyeti notlamayın. Norm temelli çağrılar güvenilir bir yedek değildir — mesaj temelli norm dürtüleri, Jaidka ve Cai’nin bildirdiği doğrudan bir turnuvada anlamlı bir etki göstermedi. Zaman baskısı, öğrencilerin kontrolleri atlamasının belgelenmiş bir nedenidir ve doğrulamayı planlamasız bırakan bir ders programı onun isteğe bağlı olduğunu söyler.

## Üç itiraz

**“Bunu sadece not için yapabilirler.”** Kısmen doğru — bu yüzden YZ’nin bir öğrencinin adına üretemediği materyalleri notlayın. İlk istek metninden önce yazılmış bir şartname, yapıtı çalıştırmadan önce kaydedilmiş bir öngörü, kayda karşı kontrol edilmiş bir kaynak listesi, ret için belirtilmiş bir alan gerekçesi: bunların her biri, üreticinin sağlayamayacağı bir konumda durmayı öğrenciden ister. Yazılmış düzeyde Gousopoulos, alan gerekçeleriyle *belirtilmiş bir gerekçeyle* çıktının reddini ister — uydurma bir gerekç, uydurma bir atıf kadar görünürdür. Artak risk duyarlılık eşiğiyle sınırlıdır: bir öğrencinin karşı kontrol edecek alan bilgisi olmadığı yerde doğrulama tiyatrodur ve hiçbir rubrik onu kurtarmaz. Bu, kontrolü terk etmek için değil, alanı önce öğretmek için bir argümandır.

**“Ders programında zaman yok.”** Önceden uyarma görevin hemen öncesinde tek bir mesajdır; tohumlanmış hata görevi yirmi maddedir, sekizi alan düzeyinde bir hata içerir ve öğrencilerin hiç ayırt edip edemediğini size söyler; rubrik, görevin hâlihazırda ürettiği materyaller üzerinde biner, bu yüzden yeni bir ödevden çok, aksi halde bulamayacağınız kanıt üzerinde notlama zamanına mal olur. Zaman alan şey alternatifidir: doğrulanmamış teslimler, uydurma atıflar ve peşinden gelen dürüstlük konuşmaları. Kısıt yine de gerçektir — zaman baskısı, öğrencilerin kontrolleri atlamasının belgelenmiş bir nedenidir; bu yüzden göreve planlanmayan doğrulama olmayacaktır.

**“Araç genellikle doğrudur.”** Öyleyse kontrol ucuzdur ve istisnalar asıl mesele olan şeydir. Atıflara ilişkin kayıt rahatlatıcı değildir: 14 makalede 30 doğrulanabilir biçimde uydurma madde, tümü 2025 ve 2026’dan; 17’si gerçek bir başlığı uydurma ya da hatalı yazarlık, mekân ya da yıl ile eşleştiriyor, 13’ü tamamen uydurma ve 2025 SIGCTE bildirilerindeki 3’ten 2026’daki 17’ye, yani 2026 bildiri makalelerinin **%2,3**’üne bir sıçrama. Tesadüfen fark ettiğiniz parçalardaki doğruluk, fark etmediğiniz parçalar hakkında hiçbir şey söylemez — yazar alanları, üretilen bir atfın herhangi bir parçasından daha sık başarısız olur. Ve rehberlik doğru olduğunda bile kabul edilmiş bir yanıt yanlış olabilir: öğrenci–ChatGPT test konuşmalarının saha çalışması tam olarak bunu kaydetti. Doğrulamayı öğretmenin nedeni aracın genellikle yanlış olması değil, öğrencinin hangi durumda olduğunu söyleyememesidir — kursunuzun var olmak için geliştirmek zorunda olduğu beceri tam olarak budur.

## Bilinmeyen ne kalıyor

- Kararlaştırılmış çıktı kalitesine göre yargılandığında, doğrulama başarısını ve onu izleyen güvenme kararını iyileştiren herhangi bir müdahale olup olmadığı: Wei ve Shang’ın 14 öncelikli vakasından hiçbiri ikisini birden ölçmedi ve pek azı anlık performansı gecikmeli kalıcılık ya da [[transfer-of-learning|transfer]] izledi.
- Bileşenlerin haritanın ima ettiği sırada ilişkili olup olmadığı. Yedi hedef, doğrulanmış bir nedensel model değil, analitik bir sıralamadır.
- Tasarım önermelerinin işe yarayıp yaramayacağı. Jaidka ve Cai’nin sekiz önermesi test edilmemiş öngörüdür ve mesaj temelli norm dürtüleri, bildirdikleri doğrudan bir turnuvada anlamlı bir etki göstermedi.
- Geri bildirime yerleştirilen kontrolün öz doğrulama alışkanlığı mı yoksa dışsal doğrulamaya bağımlılık mı geliştirdiği; bunu Venetsanos gündeme getirir ve açık bırakır.
- Doğrulama öğretiminin bir alan bilgisi eşiğinin altında işe yarıp yaramayacağı. Gousopoulos yaramayacağını öngörür ve bazı alanların dışsal bir ölçüt sağladığını — fizik, kimya, ekoloji, epidemiyoloji — tarih, edebiyat ve [[ethics]]’ın büyük ölçüde sağlamadığını not eder.

## Bu hafta ne yapılabilir

- **Standartı kontrolden önce sabitleyin.** Görev için kararlaştırılmış doğruluğun ne anlama geldiğine karar verin, böylece bir kontrolün çözmesi gereken bir şey olsun.
- **Önce öngörüyü isteyin.** Öğrencilerin ne olması gerektiğine yazılı olarak bağlanmasını sağlayın, sonra çıktıyı alan gerekçelerine göre karşılaştırın, akıcılığa göre değil.
- **Adlandırılmış bir hedefle atıf doğrulaması isteyin.** Yazar listeleri, üretilen bir atfın en güvenilmez parçasıdır; öğrencilerin kaydı açıp yazarları, mekânı ve yılı doğrulamasını sağlayın.
- **Duyarlılığı ve ölçütü ayrı ayrı teşhis edin.** Çıktıyı ayırt edemediği için kusurlu çıktıyı kabul eden bir öğrenciye alan alıştırması gerekir; ayırt edip yine kabul edene eşiğin kaydırılması gerekir.
- **Yalnızca yapıtı değil, kontrolü notlayın.** Şartnameleri, öngörü kayıtlarını, doğrulama kayıtlarını, kaynak kontrollerini ve ret için belirtilmiş gerekçeleri puanlayın.
- **Kaynağı belirtin.** Öğrencilere hangi geri bildirimin makine tarafından doğrulandığını ve hangisinin bir kişi tarafından yargılandığını söyleyin.
- **Uygulamayı dedektörlerden uzak tutun ve doğrulamayı planlayın.** Zaman baskısı, öğrencilerin kontrolleri atlamasının belgelenmiş bir nedenidir.
- **Tohumlanmış hata görevini çalıştırın.** Yirmi madde, sekizi alan düzeyinde bir hata, öğrencilerin hiç ayırt edip edemediğini söyler.
- **Uyarıyı kullanım noktasında söyleyin.** Ders programı başına bir kez değil, görev türü başına önceden uyarın.

Çevresindeki çalışma için bkz. [[incorporating-ai-literacy|how to incorporate AI literacy into a course]] ve [[ai-literacy-evidence|what the AI literacy evidence shows]] — bunun üzerine çalıştığı anlayışı inşa eden iki sayfa.
