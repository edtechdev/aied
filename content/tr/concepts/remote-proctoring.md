---
title: Uzaktan Gözetimli Sınav
created: "2026-10-14T21:33:00-04:00"
type: concept
foundations: [academic-integrity]
pedagogy: [online-teaching-and-learning]
assessment: [process-oriented-assessment, remote-proctoring, summative-assessment]
ethics: [equity-in-ai-education, privacy]
level: [higher ed]
confidence: high
translation_of: concepts/remote-proctoring
source_updated: "2026-10-03T01:40:50-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Uzaktan gözetimli sınav** — öğrencilerin sınavları denetimli bir fiziksel mekânın dışında yapması hâlinde sınavların izlenmesi; web kamerası veya kontrol merkezi üzerinden bakan bir insan gözetmenden, kimliği doğrulamak ve şüpheli davranışları işaretlemek için makine/derin öğrenme kullanan tam otomatik YZ temelli gözetim sistemlerine (AIPS) kadar uzanan bir yelpazede. [[online-teaching-and-learning|Çevrim içi ve uzaktan öğrenmede]], yüzyüze gözetimin çoğu zaman uygulanamaz olduğu ortamlarda, [[summative-assessment]] geçerliliğini ve [[academic-integrity|akademik dürüstlüğü]] korumanın birincil aracıdır — ancak [[privacy]], akademik gözetim, eşitlik, adillik ve [[trust]] aşınmasına ilişkin ciddi kaygılar doğurur; bu maliyetler, korumak için var olan öğrenme ortamına zarar verebilir.

## Üzerinde Düşünülmesi Gereken Sorular

- Okumaya başlamadan önce: "çevrim içi sınavlarda akademik dürüstlük" deyince aklınıza gelen ilk içgüdü, onu nasıl koruyacağınız — ve bu içgüdü hile yapanları tespit etmek mi yoksa güven inşa etmek mi üzerine? Sayfa, bunların iki çok farklı felsefeyi yansıttığını savunuyor.
- Uzaktan gözetimli sınav, web kamerası üzerinden bakan bir insandan, göz hareketlerini, baş duruşunu ve yüz ifadelerini analiz eden YZ sistemlerine kadar uzanır. Bir YZ sistemi "şüpheli davranış" işaretlediğinde aslında ne *gözlemler* ve ekrandan uzaklaşmanın hile olduğuna ne kadar güveniyorsunuz?
- Sayfa, izlemenin ters etki yapabileceğini uyarır: izlenmek [[anxiety-and-stress|sınav kaygısını]] arttırır ve stres altındaki öğrenciler hileye *daha yatkın* olabilir. Zaman baskısının veya gözetlemin kendi performansınızı etkilediği bir anı hatırlayabiliyor musunuz? Bu deneyim, gözetimli sınava ilişkin gerekçeyi zayıflatıyor mu?
- Otomatik gözetimli sınav, öğrencilerin yaşam alanını, yüzünü ve sesini kaydeder; çoğu zaman gerçek bir seçim olmadan onay vermekten başka çare yoktur. Makul sınav gözetimi ile öğrencileri namusları kanıtlanana kadar suçlu sayan gözetim arasındaki çizgi nerede — ve onu kim çizmeli?
- Araştırmalar, gözetimli sınavın zararsız davranışları şüpheli olarak işaretleyebileceğini, asılsız suçlamalara yol açtığını ve model doğruluğunun demografik gruplar ve ortamlar arasında değiştiğini göstermektedir. Bir [[administrator]] iseniz, geri kazandığı dürüstlüğü, aşındırabildiği eşitlik ve güvene karşı nasıl tartarsınız?
- Sayfa, gözetimli sınavı bir çözüm değil bir araç olarak çerçeveler — sözlü sınav ve [[process-oriented-assessment|süreç temelli değerlendirme]] gibi alternatifler vardır. Okumaya başlamadan önce: uzak bağlamda yüksek riskli değerlendirme için hangi yaklaşımı savunurdunuz ve fikrinizi değiştirecek kanıt ne olurdu?

## Giriş

Uzaktan gözetimli sınav bir yelpazede var olur. **Çevrim içi gözetim** tipik olarak bir insan gözetmenin öğrenciyi web kamerası veya bir kontrol merkezinden izlemesini içerir. **Otomatik/YZ temelli gözetim (AIPS)**, insanı görsel ipuçlarını — göz hareketlerini, baş duruşunu, yüz ifadelerini ve beden dilini — gerçek zamanlı olarak analiz eden [[machine-learning]] ve derin öğrenme sistemleriyle (CNN’ler, RNN’ler, LSTM’ler) değiştirir veya güçlendirir. Yaygın platformlar arasında ProctorU ve Kryterion yer alır. AIPS tipik olarak dört işlevi birleştirir: (1) kimlik doğrulama (örneğin kamera ile yüz doğrulama), (2) gezinme kısıtlamaları, (3) sınavın uzaktan yetkilendirilmesi/denetimi ve (4) kaydedilen oturumlardan rapor üretimi.

## Avantajlar ve fırsatlar

- **Çevrim içi değerlendirmede geçerliliği ve dürüstlüğü geri kazanır.** Uzaktan gözetimli sınav gerçek bir geçerlilik sorununa yanıt verir. [[online-teaching-and-learning|Çevrim içi değerlendirmede]], [[generative-ai|üretken YZ]], gözetimsiz işleri öğrenmenin bir ölçüsü olarak güvenilmez kılar: yardım almadan, denetimli, kitapsız ölçümler öğrencilerin gerçekten bildiğinin en güçlü işaretidir (bkz. [[summative-assessment]], [[generative-ai-reduced-study-time-math|gözetimli kalıcılık kanıtı]]). Herhangi bir gözetim biçimi olmadan çevrim içi sınavlar, bağımsız performans yerine YZ destekli performansı yakalayarak notları şişirebilir.
- **Ölçeklenebilirlik ve maliyet.** Otomatik gözetimli sınav, ayrı fiziksel mekân ve insan gözetmene duyulan ihtiyacı azaltarak izlemeyi ölçekte uygulanabilir hale getirir — geleneksel gözetimli sınavın lojistik ve mali açıdan pratik olmadığı MOOC’ler ve büyük çevrim içi programlar için bir avantaj.
- **Erişilebilirlik ve ulaşım.** Gözetimli sınav, uzak bölgelerdeki öğrencilerin sınavlara her yerden girmesine olanak tanır; sertifikasyon coğrafi ve zamanlama engellerini kaldırır.
- **Tespit yeteneği.** Gelişmiş ML/DL sistemleri, hileyi elle gözlemden daha güvenilir biçimde tespit edebilir (göz hareketleri, baş duruşu, yüz ifadeleri) ve aralıklı değil sürekli izleyebilir.

## Dezavantajlar, riskler ve zararlar

- **Güvene ve öğrenci–öğretmen ilişkisine zararlar.** Uzaktan gözetimli sınavın en sonuçları ağır maliyeti çoğu zaman ilişkiseldir. Sürekli gözetim, öğrencilerin namussuz sayıldığı mesajını verir; bu, [[trust]] aşındırabilir, öğrenci–öğretmen ilişkisini bozabilir ve akademik dürüstlüğü destekleyen ortak amaç duygusunu zedeler. Denetim olarak izleme, sorumlu kullanımı inşa eden güvene dayalı, eğitici dürüstlük yaklaşımını geri püskürtür.
- **Akademik gözetim.** Uzaktan gözetimli sınav, kurumsal izlemeyi öğrencinin özel ev ortamına uzatan bir akademik gözetim biçimidir. Sınavın ötesinde bu sistemler, öğrencinin yaşam alanını, yüzünü, sesini ve davranışını sürekli kaydeder — [[higher-ed|yükseköğretimde]] az sayıda örneği olan bir inceleme düzeyi. Eleştirmenler, öğrencilerin namusları kanıtlanana kadar suçlu sayıldığı bir gözetim kültürünü normalleştirdiğini, kurumlar ile öğrenenler arasındaki ilişkiyi yeniden şekillendirdiğini ve orantılılık sorusunu gündeme getirdiğini savunur: dürüstlük kazanımları, birkaç kişinin suçları için her öğrenciyi yaygın izlemeye tabi tutmayı haklı çıkarır mı? ([[privacy]]), [[trust]]
- **Gizlilik ve onay.** AIPS, yüz görüntülerine, ses örüntülerine, bakışa ve tuş vuruş dinamiklerine sürekli erişir; çoğu zaman kalıcı işitsel-görsel gözetim yoluyla. Veri işleme, GDPR ve Hindistan’ın PDP Tasarısı gibi çerçevelere uygun olmalı ve net onay ile güvenli biyometrik veri işleme gerektirir. Öğrenciler sınava girmek istediklerinde izlemeyi kabul etmekten başka çoğu zaman seçenekleri azdır; bu da onayın gerçekten gönüllü olup olmadığı sorusunu gündeme getirir. ([[privacy]])
- **Yanlış pozitifler, asılsız suçlamalar ve kaygı.** Sistemler zararsız davranışları (uzaklara bakmak, duruş ayarlamak) şüpheli olarak işaretleyebilir; bu, öğrenci güvenini aşındırır ve asılsız usulsüzlük suçlamaları üretir — özellikle gözetmenlerin veya sınava girenlerin yeterliğinden yoksun olduğu durumlarda.
- **Stres ve sınav kaygısı.** Gözetimli bir sınava girmek, önemli stres ve kaygı kaynağıdır. Sürekli gözetim, yanlış işaretlenme korkusu ve izlenme baskısı sınav kaygısını arttırabilir ve performansı bozabilir — ve kanıtlara göre stres altındaki öğrenciler sahtekâr davranışa *daha yatkın* olabilir; bu, izlemenin ters etki yapabileceği anlamına gelir. İzlenmek streslidir ve önlemeyi hedeflediği etik dışı davranışı bizzat doğurabilir.
- **Dürüstlük gerekçesi en büyük testten geçemedi.** 105 kurstaki 1.760 öğrenci üzerinden dört dalga boyunca, gözetimli sınav sınav kaygısını arttırdı (β = 0.60, p < 0.001) ancak hile cazibesini, algılanan zorluğu veya notları etkilemedi; böylece gözetim maliyeti caydırıcılıkla telafi edilmedi ([[conijn-fear-big-brother-proctored-exams-2022|Conijn ve ark. (2022)]]).
- **Eşitlik ve dijital uçurum.** Cihaz bağımlılığı, istikrarsız internet, aydınlatma ve donanım çeşitliliği, kırsal ve düşük bant genişliğine sahip öğrencileri orantısız biçimde dezavantajlı duruma düşürür; model doğruluğu demografik gruplar ve ortamlar arasında değişebilir ve haksız işaretleme riski doğurur. ([[digital-divide]]), [[equity-in-ai-education]] [[nursing-education|Hemşirelik]] değerlendirmesinde gözetimli sınava ilişkin bir kapsamlı inceleme, bunun bir uç durum olmadığını gösterir: dâhil edilen altı çalışmanın dördü internet bağlantısı sorunları bildirmiş, biri sınırlı veri paketlerinin yanı sıra elektrik kesintisi bildirmiş, cihaz uyumsuzluğu, tarayıcı uzantısı hataları ve başarısız çevre taramaları olağan olmuştur — bu nedenle altyapı eşitsizliği, yalnızca model yanlılığı değil, kimin hiç değerlendirilebileceğini belirler. ([[harerimana-remote-proctoring-nursing-scoping-2026]])
- **Tespit boşlukları ve yarış.** Kimlik taklidi (fotoğraf/video maskeleme), tarayıcı kullanımı ve kopyala-yapıştır güvenilir biçimde yakalanması zor olmaya devam etmektedir; tespit doğruluğu veri kümesi sınırlılıkları, tek model değerlendirmesi ve tekrarlanabilirlik boşluklarıyla sınırlıdır. Gözetimli sınav dürüstlüğü tam olarak çözmez ve yanlış bir güvenlik duygusu yaratabilir.
- **Yönetişim sorusu.** Gözetimin doğru yanıt olup olmadığı, [[authentic-assessment|değerlendirme yeniden tasarımına]] (sözlü, süreç temelli, [[eportfolio|portfolyo]]) karşı açık bir kurumsal karardır; uzaktan gözetimli sınav bir araçtır, eksiksiz bir çözüm değildir. ([[governance]]) Uygulama ters gittiğinde ortaya çıkan risk — puan ve olay kayıtlarına dayanan suçlamalar, yakalanan verilerin saklanması ve sonraki işlenmesi, engelli ya da anadili İngilizce olmayan öğrencilere eşit olmayan biçimde düşen kurallar — [[legal-issues-and-risks]] üzerinde haritalanmıştır.

## Kanıt tabanı

- 80 hakemli çalışmayı (2014–2024) kapsayan on yıllık bir [[meta-analysis-systematic-review|sistematik inceleme]], gelişmiş ML/DL gözetimli sınavının hileyi geleneksel yöntemlerden daha güvenilir biçimde tespit ettiğini, ancak veri kümesi boşluklarıyla (%35’i verileri tam olarak açıklamadı), tek model değerlendirmesiyle (%40), tekrarlanabilirlik sorunlarıyla (%30), seyrek etik raporlamayla (yalnızca %25) ve tutarsız ölçütlerle (%20) sınırlı olduğunu bulmaktadır. Yanlış pozitifler/negatifler — normal davranışı şüpheli olarak işaretlemek veya ince hileyi gözden kaçırmak — güvenilirliği ve güveni zedeler. ([[automated-online-exam-proctoring-decade-review-2026]])
- Bir eşlikçi inceleme, YZ’nin karşılaması gereken hile yöntemlerini (fotoğraf/video yoluyla kimlik taklidi, tarayıcı/cihaz kullanımı, kopyala-yapıştır) ve pratik engelleri belgeler: sınava girenlerin kaygısı, asılsız suçlamalara yol açan yeterlilik boşlukları ve herkesin göze alabileceği veya erişebileceği olmadığı altyapı (web kamerası, mikrofon, internet). Hile itiraf eden üniversite öğrencilerinin ~%37,8’inin ve lise öğrencilerinin ~%41,8’inin bulunduğunu bildirir — izlemenin gerekçesi. ([[academic-dishonesty-automated-proctoring-ai-2026]])
- **Öğretim elemanları, ders dışında yapılan sınavlarda gözetimden yarar görmezler.** [[biology-degree-integrity-genai-cheating-2026|Chan ve ark. (2026)]], çekirdek zorunlu derslerinin 38 ders programının tamamını kodladıktan sonra bir [[biology-education|biyoloji]] bölümündeki 56 öğretim elemanını (%47 yanıt oranı) anket etmiş ve onlardan kullandıkları her notlandırma kategorisini akademik namussuzluğa karşı savunmasızlık bakımından derecelendirmelerini istemiştir (0 = en düşük, 4 = en yüksek savunmasızlık). Ders dışında gözetimli ve gözetimsiz sınavlar *bire bir* ortanca 3 (orta düzeyde savunmasız) olarak derecelendirilmişken, yüzyüze gözetimli sınavlar yalnızca en düşük savunmasız olarak derecelendirilen kategori olmuş (ortanca 0) ve diğer tüm kategorilerden anlamlı biçimde daha az savunmasız bulunmuştur (p_adj < ,01). Ders dışı sınavlar için kilit tarayıcılar mevcut olduğundan, sonuç, araçların maruziyeti azaltmadığına ilişkin bir algıdır — çevrim içi gözetimli sınavın yalnızca eşitsiz biçimde etkili olduğuna dair yukarıdaki inceleme kanıtıyla ve takası çelişkili kılan belgelenmiş kaygı, gizlilik ve asılsız suçlama maliyetleriyle tutarlıdır. Bahisler, aynı çalışmanın puan dağılımında görünür durumdadır: ders dışı sınavlar, onları kullanan yüzyüze derslerde notun ortanca %54,2’sini ve her dönemde onlara bel bağlayan çevrim içi derslerde %59,2’sini taşımıştır.
- [[nursing-education|Hemşirelik]] [[assessment|öğrenci değerlendirmesinde]] uzaktan gözetimli sınava ilişkin bir kapsamlı inceleme, tek bir uygulama yerine bir yöntem yelpazesini haritalar — canlı insan gözetimi (ProctorU), web kamerası, mikrofon ve davranış işaretleme ile YZ tarayıcı uzantısı gözetimi (Honorlock), web kamerası artı kilit tarayıcı izleme (Respondus Monitor), kurumsal olarak konuşlandırılmış bir mobil gözetim uygulaması ve merkezî gözetim altında sabit test merkezi masaüstleri — ve çeşitliliğin ortak bir standartten çok altyapı ve kurumsal kapasitedeki uyuşmazlıkları yansıttığını savunur. Dâhil etme ölçütlerini yalnızca altı çalışma karşılamıştır (ABD, Birleşik Krallık, Güney Afrika ve Mısır’dan 1.567 hemşirelik öğrencisi) ve hiçbiri 2021’den önce yayımlanmamıştır. İncelemenin ortaya koyduğu şu ki gözetim, caydırıcılık *algıları* ve öğretim elemanları üzerinde ağır bir inceleme yükü üretir: web kamerası izlemesinin ve kilit tarayıcıların hileyi caydırdığına ilişkin %98–100 uzlaş, tek bir yüksek lisans hemşirelik pratik programından alınan [[self-report-measures|özbildirim]]dir; yüksek riskli YZ uyarıları %5’i geçmeden nadirdi, ancak sık küçük uyarılar, zaman alıcı inceleme gerektiren yanlış pozitifler üretti ve Güney Afrikalı öğretim elemanları etkin izleme altında devam eden namussuzluk bildirdi. Tek karşılaştırmalı performans çalışması tersi yönde işaret eder — yüzyüze gözetimli bir kohort, HESI Exit Exam ve NCLEX hazırbulunuşlukta ProctorU kohortunu anlamlı biçimde geride bıraktı — ve inceleme, gözetim ile daha dürüst öğrenme arasındaki bağlantıyı çözümlenmiş bir fayda değil açık bir soru olarak ele alır. ([[harerimana-remote-proctoring-nursing-scoping-2026]])
- **Gözetimli, yüzyüze yapılan bir sınav hâlâ %44,2 oranında yüksek riskli öğrenci üretti.** Bir Türkiye kamu üniversitesindeki [[cs-education|Programlamaya Giriş]] dersinde, kopyalama, odak kaybı ve sağ tıklama olaylarını kaydeden sınav kayıtlarından 52 birinci sınıf öğrencinin 23’ü yüksek riskli olarak etiketlendi; oysa sınav gözetim altında ve bir bilgisayar laboratuvarında yapılmıştı; aynı çalışma, riski sınav içi davranıştan çok dönem başındaki LMS izlerinden tahmin eder. ([[akcapinar-ai-cheating-risk-lms-prediction-2026]])

## Önerilen yönler

- **Hibrit insan–YZ gözetimi.** Otomatik işaretlemeyi [[human-in-the-loop-ai|insan incelemesiyle]] eşleştirerek yanlış pozitifleri azaltmak ve muhakemeyi bağlamsal tutmak.
- **Gizliliği koruyan mimari.** Kenar işleme, anonimleştirme ve cihaz üzerinde işleme, sürekli veri yakalamanın müdahale gücünü azaltır.
- **Eşitlik farkında yayılım.** Çeşitli, coğrafi olarak kapsayıcı veri kümeleri ve düşük kaynaklı ortamlar için hafif modeller; güvenilir cihaza/bağlantıya sahip olmayan öğrenciler için erişilebilir alternatifler.
- **Gözetlemeden önce eğitin.** Gözetimli sınavı, gerçekten gerektiren yüksek riskli durumlara saklayarak, kültür ve güven inşası yoluyla [[ai-literacy]] ve [[reducing-ai-misuse|sorumlu kullanımı]] teşvik etmeyi tercih edin.

## Bağlı kavramlar

- [[anxiety-and-stress]]
- [[academic-integrity]]
- [[summative-assessment]]
- [[assessment]]
- [[automated-assessment]]
- [[online-teaching-and-learning]]
- [[ai-misuse-learning-harm]]
- [[privacy]]
- [[equity-in-ai-education]]
- [[digital-divide]]
- [[student-experience]]
- [[trust]]
- [[governance]]
- [[legal-issues-and-risks]]
- [[higher-ed]]

## Bağlı makaleler

- [[automated-online-exam-proctoring-decade-review-2026]] — Otomatik çevrim içi sınav gözetiminin on yıllık sistematik incelemesi
- [[academic-dishonesty-automated-proctoring-ai-2026]] — Otomatik gözetimli sınavda akademik namussuzluğun kapsamlı incelemesi
- [[ssaho-ai-academic-integrity-review-2025]] — YZ ve akademik dürüstlük: sistematik inceleme
- [[conijn-fear-big-brother-proctored-exams-2022]] — Big Brother korkusu: gözetimli sınavın sınav kaygısına olumsuz yan etkileri
- [[biology-degree-integrity-genai-cheating-2026]] — Öğrenciler biyoloji diplomasına hile yoluyla ulaşabilir mi? Üretken YZ çağında biyoloji dersi notlarının akademik namussuzluğa karşı savunmasızlığının vaka incelemesi
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Gözetim altında: hemşirelik öğrenci değerlendirmesinde uzaktan gözetimli sınav uygulamalarının haritalanması
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — gözetimli, yüzyüze yapılan bir sınavda öğrencilerin %44,2’sinin yüksek riskli olarak etiketlenmesi, riskin dönem başındaki LMS izlerinden tahmin edilmesiyle
