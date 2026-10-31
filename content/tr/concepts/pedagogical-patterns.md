---
title: Pedagojik Kalıplar
created: "2026-10-14T08:10:00-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [pedagogy, scaffolding]
assessment: [formative-assessment, peer-assessment, ai-feedback-quality]
audience: [instructors, instructional designers, faculty developers]
level: [higher ed, k 12]
confidence: high
connected_faqs: [designing-ai-into-learning]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-30"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: revision
    date: "2026-10-01"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: concepts/pedagogical-patterns
source_updated: "2026-10-26T12:05:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Pedagojik Kalıplar** — bu bilgi tabanındaki araştırmaların sınadığı etkinlik *sıralı dizileri*; dikkat, [[generative-ai|generative AI]]nın dizinin neresine girdiğine ve [[human-in-the-loop-ai|human judgment]]nın nerede kalması gerektiğinedir. [[pedagogy]] yaklaşımları kataloglar ([[active-learning|active learning]], [[problem-based-learning|problem-based learning]], [[collaborative-learning|collaborative learning]]) ve [[learning-design]] bir kursun nasıl tasarlandığını anlatırken; bu sayfa öğrencilerin ve öğretmenlerin gerçekte ne *yaptığını*, hangi sırayla yaptığını ve denenmişse ne olduğunu kataloglar. PAIRR — taslak, akran değerlendirmesi, YZ değerlendirmesi, yansıtma, revizyon — belgelenmiş en iyi örnektir ve ardındaki kalıp disiplinler boyunca yinelenir: önce çaba, sonra yapay zeka, kritik noktada insan yargısı.

## Dikkate Alınması Gereken Sorular

- Bir kalıp bir *dizi*dir, bir araç değil. Verdiğiniz bir ödevi alın ve bir öğrencinin attığı adımların sırasını yazın. Bu sıranın neresinde yapay zeka yardımcı olur, neresinde öğrencinin yapması gereken işi yapar?
- Buradaki bazı kalıplar yapay zekaya bilerek *zayıf* bir rol verir — yanıt yerine ipucu, düzeltme yerine soru. Bilerek daha az yardımcı bir özel ders öğretmeni neden daha iyi öğrenme üretir ve bu, kurumunuzun satın aldığı YZ araçları hakkında ne anlama gelir?
- Bu sayfadaki en iyi kanıtlanmış kalıp (bir yapay zekaya [[learning-by-teaching|learning by teaching]]) öğrencilerden açıklama yapmalarını ister ve açıklama ile soru niteliğini iyileştirir ama *nesnel hatırlamayı* iyileştirmez. Benimsenseniz değerlendirmenizde neyi değiştirirdiniz?
- [[ai-feedback-quality|AI feedback]] öğretmen geri bildiriminden daha nitelikli olduğunda öğrenciler daha fazla revizyon yapmamıştır. Bu, geri bildirim üretmek ile öğrencilerin onu kullanmasını sağlamak arasındaki fark hakkında ne söyler?
- Bağlamlar yanıtı değiştirir: bazı kalıplar çevrimiçi ve eşzamansız denenmiş, bazıları yüz yüze laboratuvarla. Bunların hangilerini kendi ortamınızda yeni araç olmadan yürütebilir, hangileri elinizde olmayan bir altyapı gerektirir?
- Neredeyse her kalıp yargı noktasında bir insanı korur — notlandırma, doğrulama ya da yorumlama. Bu bir tasarım tercihi mi, kanıta dayalı bir zorunluluk mu, yoksa şimdiye kadar sınananların bir sınırlılığı mı?

## Giriş

Pedagoji *nasıl öğretmeliyiz* sorusuna yanıt verir; bu sayfa daha dar ve daha işlemsel bir soruya yanıt verir: **hamleler hangi sırayla gerçekleşmeli ve yapay zeka bu sıranın neresine ait?** Ayrım önemlidir, çünkü aynı araç dizinin içindeki konumuna bağlı olarak zıt sonuçlar üretir. Bir öğrenci problemi denemeden önce konumlandırılan üretici yapay zeka asistanı, sonraki desteksiz performansı güvenilir biçimde düşürür; bir denemeden sonra, yanıt yerine ipucuyla konumlandırıldığında aynı sınıftan bir sistem bu zararı kaldırır.

Aşağıdaki her kalıp bir kanıt durumuyla birlikte sunulur, çünkü bilgi tabanının kapsamı düzgün değildir ve fark, neyi benimseyeceğine karar veren herkes için önemlidir:

- **Sınanmış** — en az bir makale denetimli ya da karşılaştırmalı bir sınama bildirir.
- **Karma** — sınanmış, ancak denetimsiz, çelişkili sonuçlarla ya da sınanan değişken başka bir şeyle dolaşık halde.
- **Tasarım önerileri** — fikir yalnızca bir öneri ya da çerçeve olarak geçer, hiçbir sınama bildirilmemiştir. Bunlar sayfanın sonunda ayrı olarak toplanır, *Tasarım önerileri (henüz sınanmamış)* başlığı altında ve kanıt değildir.

Kalıplar bir derste üstlendikleri işleve göre gruplandırılmıştır: yardımdan önce çabayı yerleştirme, YZ geri bildirimini insan geri bildirimiyle eşleme, çıktı yerine anlayışı doğrulama, öğreneni öğretmen yapma, işbirliğini yapılandırma ve belirli bir [[misconceptions|misconception]] ile yüzleşme. Bağlamlar (çevrimiçi, yüz yüze, harmanlanmış) ve disiplinler her biriyle birlikte bildirilir ve sonunda özetlenir.

## Yardımdan önce çabayı yerleştiren kalıplar

Bu kalıplar yapısal bir iddiayı paylaşır: öğrenen, yapay zeka katkıda bulunmadan önce bir denemeyi üstlenmelidir. Bu, bilgi tabanındaki en tutarlı biçimde desteklenen tasarım kuralıdır.

### Yapay zeka yanıtlamadan önce geri çağırın ya da deneyin

**Kanıt: sınanmış.** Dizi şudur: bellekten deneme, öğretim ya da örnek alma, aralıklı oturumlarda alıştırma, bir denemeyi üstlendikten sonra yapay zekaya danışma, yanlış kanıyı sorgulayan yanıta bağlı geri bildirim alma ve yanıt yeterli katılımı gösterdiğinde ilerleme.

Uyarlanabilir aralıklı geri çağırma koşulu en yüksek sınav sonrası puanları üretmiştir (M = 78,19) ve harmanlanmış bir istatistik kursunda 89 öğrenci arasında öğrenen yönelimli YZ çalışmasını anlamlı biçimde geride bırakmıştır (M = 67,28, d = 0,92, p = ,003); sabit aralıklama ise istatistiksel olarak uyarlanabilir koşuldan ayırt edilemezdi ([[adaptive-pretesting-retention|Akgun & Toker, 2026]]). Karşıtlık durumu kesindir: 120 öğrencili bir [[rct|randomized trial]], sınırsız ChatGPT ile çalışan grup 45 gün sonraki sürpriz testte daha azını korumuştur — \%57,5 doğru, geleneksel öğrenenlerde \%68,5’e karşılık, t(83) = −3,19, p = ,002, d = 0,68 — ve yaklaşık \%45 daha az çalışmıştır; dezavantaj, çalışma süresi değişkeniyle kontrol edildiğinde de sürmüştür ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui, 2025]]). Çevrimiçi bir MBA’da önceden kaydedilmiş bir rastgele saha deneyi, kazanımların maruz kalınan dakikalarından çok *tamamlanan haftaları* izlediğini bulmuştur (her ek tamamlanmış özel ders haftası için +2,00 puan, p = ,018); bu, toplam süreden çok [[retrieval-spacing-interleaving|spaced practice]]nın önemli olduğu şeklinde okunur ([[ai-tutor-modality-randomized-field-experiment-2026|Yang et al., 2026]]).

### Verimli başarısızlık: öğretimden önce deneme

**Kanıt: karma ve itibarından zayıf.** Öğrenciler, hiç öğretilmediği bir kavramı hedef alan bir problemi denemeye çalışır; özel ders öğretmeni çözümü gizler ve birden fazla deneme çıkarır; yardım yalnızca kesinlikle gerekli olduğunda gelir ve sonrasında karşılaştırma ile doğrudan öğretimle pekiştirme olur.

Sarmalı bir özel ders öğretmeniyle bütün diziyi sınayan tek saha çalışması Singapur’dan 17 lise öğrencisi kullanmıştır: yönlendirilmiş koşul daha yüksek bir verimli başarısızlık puanı elde etmiş, bu problem tutarlılığında anlamlı olmuş (p = ,046) ve öğrenciler oturum başına ortalama 2,6 gösterim üretmiştir (p = ,05), ancak **hiçbir öğrenme çıktısı ölçülmemiştir** ([[puech-pedagogical-steering-llm-productive-failure-2025|Puech et al., 2025]]). En güçlü destek dolaylıdır ve 26 öğrencili rastgele atamalı bir deney-içinde özneli bir denemden gelir; burada anında yanıt veren [[scaffolding]], model soyutlamada akran, asistan öğretmen ve özel ders öğretmeni rollerinden anlamlı biçimde *daha kötü* performans göstermiştir (β = −0,692, p = ,015; β = −1,039, p < ,001; β = −0,769, p = ,005), her ne kadar öğrenciler buyurucu nitelikteki özel ders öğretmenini *tercih etmiş olsalar da* — tercih yetkinliğe aykırıdır ([[preferred-scaffolding-ai-mathematical-modeling|Zhu et al., 2026]]).

### Hata analizi ve hatalı örnekler

**Kanıt: karma.** Öğrenciler bir eserdeki hatayı teşhis eder — ilişkisel bütünlüğü ihlal eden bir YZ üretimi diyagram, bir birleştirmeyi düşüren bir sorgu, bir [[llm]] kod parçacığı — düzeltmeyi kendilerine verilmek yerine çıkarım yapmaya zorlayan ipuçları alır, onu onarır ve çıktının hangi bölümlerinin güvenilmez olduğunu yansıtır.

Çevrimiçi bir veri tabanı kursunda 13 öğrencinin çalışması öncesi–sonrası, bilinçli yapay zeka hatası durumları üzerine kurulu haftalık eleştiri–iyileştirme döngüleriyle 7 üzerinden 4,25’ten 6,83’e yükselmiştir (t(12) ≈ 5,10, p < ,001, d = 1,49); ancak denetim grubu olmadığı için kazanım, [[curriculum-design|curriculum]] ya da öğretmenden ayrılamaz ([[pedagogy-ai-mistakes|Hosseini, 2026]]). 72 bilgisayar eğitimi çalışmasının bir [[meta-analysis-systematic-review|systematic review]], hata analizinin *ayrı bir yetkinlik* olduğunu bildirir: öğrenciler LLM üretimi kodu düzeltmede geleneksel programlama sınav görevlerinden anlamlı biçimde daha kötü performans göstermiştir ([[kumar-genai-computing-education-systematic-review-2026|Kumar et al., 2026]]). Bilgi tabanındaki hiçbir makale, hatalı örnek öğretiminin kendisine ilişkin denetimli bir sınama bildirmemiştir.

### Öz açıklamalı çözümlenmiş örnekler

**Kanıt: karma — iki yarı birbirinden ayrılıyor.** Eksik gerekçeleri tamamlanmak üzere ya da bulunacak hatalarla bir çözümlenmiş örnek sunulur; öğrenci onu tamamlar ya da onarır, akıl yürütmesini açıklar ve sonraki problemi denemeye çalışır.

Kılavuzlu ve hatalı örneklerin uyarlanabilir biçimde atanması, 113 öğrencili bir sınıf çalışmasında rastgele problem türü atamasını geride bırakmıştır (sınav sonrası M = 72,3 ve 72,5’e karşılık denetimde 65,7, A = ,58, p = ,005 ve p = ,002) ve [[knowledge-tracing]] varyantı düşük [[prior-knowledge]] öğrencilerde başarı boşluğunu \%77,1 daraltmıştır (β = 9,4, p = ,001) ([[adaptive-scaffolding-cognitive-engagement-its|Dey Tithi et al., 2026]]). Ancak öz açıklama adımının ayrıntılı YZ geri bildirimine *eklenmesi*, 302 katılımcıyla önceden kaydedilmiş bir denemde her ölçütte kaybetmiştir: geri bildirim süresini ikiye katlamış (4,1’e karşı 2,1 dk, p < ,001), tamamlanan problem sayısını \%40 düşürmüş (2,0’a karşı 3,4, p < ,001), bölüm başına kazanım üretmemiş (OR = 1,03, p = ,486) ve oturum sonu ustalığını düşürmüştür (\%65’e karşı \%79, d = ,41, p < ,001) ([[structured-reflection-ai-explanatory-feedback-2026|Asher et al., 2025]]).

## YZ geri bildirimini insan geri bildirimiyle eşleyen kalıplar

YZ geri bildirimi üzerine bilgi tabanının en çok tekrarlanan bulgusu, onun yalnız bırakıldığından *insan geri bildirimiyle birleştirildiğinde* daha iyi işlediğidir — ve niteliğinin, öğrencilerin onu kullanıp kullanmadığını belirleyen şey olmadığıdır.

### PAIRR: yansıtmalı akran ve YZ değerlendirmesi

**Kanıt: karma (yaygın biçimde uygulanmış, denetimli değil).** Öğrenciler yapay zeka ve geri bildirimlerin nasıl işlediğini okuyup yansıtır, taslak yazar, akran değerlendirmesi verir ve alır, aynı taslak üzerine ölçüt odaklı geri bildirim için yapay zekaya istek metni gönderir, ikisini eleştirel biçimde karşılaştırır, bir revizyon planı yazar, revize eder ve hangi geri bildirimin neyi değiştirdiğini yansıtır.

Bugüne kadarki üniversite öğrencilerinin YZ geri bildirimi kullanımına ilişkin en büyük çalışması, on yazma kursu ve üç yazma yoğun [[stem-education|STEM]] kursunda 654 öğrenciyi izlemiştir: \%58’i birleşik ChatGPT ve [[peer-assessment|peer feedback]] tercih etmiş, \%36’sı yalnızca akranı, yalnızca \%6’sı yalnızca YZ’yi tercih etmiştir; \%75’i ikisini benzer ve birbirini güçlendiren bulmuştur; YZ geri bildirimi \%31 tarafından "aşırı genel", akran geri bildirimi \%28 için daha özgül olarak değerlendirilmiştir; ve yalnızca \%5,3’ü YZ geri bildiriminde aşırı güven göstermiştir ([[pairr-ai-peer-review-2025|Sperber et al., 2025]]). Model ayrıca 34 öğrencinin katıldığı üst düzey bir işletme yazma kursunda yürütülmüş, kodlanan yansıtmaların yaklaşık dörtte biri YZ geri bildirimi hakkında kuşku ya da yanlışlık tespiti belirtmiştir ([[gift-ai-pairr-business-writing-2025|MacArthur et al., 2025]]). İkisi de algı verisi bildirir; ikisinin de denetim koşulu yoktur ve bu kalıbın *karma* değil *sınanmış* olmadığının nedenidir.

### Birleşik akran ve YZ geri bildirimi

**Kanıt: sınanmış.** Karşılaştırmalı kanıt PAIRR programının dışından gelir. 122 Çinli EFL öğrencisiyle yürütülen bir yarı deney, YZ artı akran birleşik geri bildiriminin yalnızca akran geri bildirimine karşılık davranışsal, duygusal ve bilişsel [[student-engagement|engagement]] yükselttiğini bulmuştur (tümünde p < ,001; kısmi η² = 0,28, 0,28, 0,32) ve yazmayı dört IELTS boyutunun tamamında iyileştirmiştir (F(1,119) = 42,68, p < ,001, kısmi η² = 0,26), en büyük fark görev başarısında (d = 1,41) — gecikmeli bir sınanma yoktur, dolayısıyla kalıcılık ölçülmemiştir ([[ai-peer-feedback-l2-writing-engagement-2026|Liu, 2026]]). 12 grupta 45 öğretmen adayıyla yürütülen rastgele atamalı bir çalışmada, GenAI destekli akran geri bildirimi sıradan akran geri bildirimini savunma (argumentation) üzerinde geride bırakmış, *istek metniyle iskelelenmiş* varyant ise karşı kanıt verisi sunma ve karşı görüşü ele alma gibi ileri düzey unsurlarda en iyi performansı göstermiştir ([[chang-genai-peer-feedback-collaborative-argumentation-2026|Chang et al., 2026]]).

### YZ eleştirisi, sonra revizyon

**Kanıt: sınanmış — önemli bir sıfır sonuçla.** Taslak, değerlendirme anahtarı odaklı geri bildirim için yapay zekaya istek metni gönderme, o geri bildirimi anahtara ve kaynaklara karşı eleştirel biçimde değerlendirme, bir revizyon planı yazma, revizyon ve yansıtma.

120 İngilizce bölümü öğrencisiyle denetimli 2 × 2 faktöriyel bir deneyde yazma niteliği kazanımı, hem süzme hem değerlendirme konusunda eğitim almış grupta en yüksek çıkmıştır (M = 7,92), diğer koşullarda 6,10, 4,56 ve 3,10’a karşılık; derin revizyon \%28’den \%48’e yükselmiş ve avantaj yeni bir konuda ve YZ desteği kaldırıldıktan sonra da sürmüştür ([[rethinking-ai-writing-feedback-literacy|Dai, 2026]]). Öğretici olan sıfır sonuç şudur: 70 öğrencili rastgele atamalı üç gruplu bir denemde, düşünce zinciri istek metniyle üretilen YZ geri bildirimi hem sıfır atımlı YZ geri bildiriminden (p = ,01) hem de öğretmen geri bildiriminden (p = ,008) anlamlı biçimde *daha yüksek nitelikteydi*; ancak bu nitelik avantajı **daha büyük revizyon kazanımlarına dönüşmemiştir** — öğretmen geri bildirimi karşılaştırılabilir iyileşme üretmiştir ([[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia et al., 2026]]).

### YZ çıktısının insan denetimli incelenmesi

**Kanıt: karma — inceleme adımı nadiren sınanan değişkendir.** Yapay zeka taslak çıktı üretir, otomatik doğrulayıcı ajanlar onu gerçekçilik, okunabilirlik ya da [[hallucination-risk|hallucination]] açısından denetler, başarısız denetimler iyileştirme için geri döner ve öğrencilere ulaşmadan önce bir öğretmen gözden geçirir, düzenler ve kabul ya da ret eder.

8 öğretmenle dört ajanlı bir döngü, 212 problemden 166’sının olduğu gibi kabul edildiğini üretmiş ve gerçekçilik denetimleri amaçlandığı gibi çalışmıştır (10 gerçekçilik problemi işaretlenmiş, 20 nicelik ya da birim düzenlemesi yapılmış, nihai bir problemde matematik hatası bulunmamıştır) — ancak zayıf nokta ilgi uyumuydu, öğrenciler 422 yanıttan 160’ında konuyu reddetmiştir ([[walkington-teachers-multi-agent-personalized-problem-generation-2026|Walkington et al., 2026]]). 30 öğretmen tarafından puanlanan öğretmen-döngüde bir geri bildirim aracı, dokuz maddede hiçbir zaman 5 üzerinden 4,1’in altına düşmemiş ve ödev başına ortalama süreyi 10–30 dakikadan 5 dakikanın altına indirmiştir; ancak yazarlar öğrenci değerlendirmesi yapılmadığını kabul eder, dolayısıyla hiçbir öğrenme iddiası desteklenmez ([[zhao-learnlens-feedback-educators-loop|Zhao et al., 2025]]). Bir kırmızı ekip deneyi riskleri somutlaştırır: 5 istek metni enjeksiyonundan 2’si, \%100’de (9/9) ve \%94’te (17/18) fark edilmeden bir notu değiştirmiş, [[automated-assessment|AI grading]] çıktısında öğretmeni tek gerçek denetim olarak bırakmıştır ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]).

## Çıktı yerine anlayışı doğrulayan kalıplar

Yapay zeka yetkin bir eser üretebildiğinden, bu kalıplar değerlendirmeyi eserin tek başına sağlayamayacağı kanıtlara taşır.

### Sözlü ve viva doğrulaması

**Kanıt: biçim olarak sınanmış, ancak sonuçlar öğrenmeden çok puanlara ve duyuşsal yanıtlara ilişkindir.** YZ’nin izin verildiği bir kodlama ödevi teslim edilir, ardından 48 saat içinde zorunlu 15 dakikalık bir sözlü kod incelemesi gelir; öğrenci programı açıklar ve tümleştirme testlerini canlı yürütür; inceleme \%70, değerlendirme anahtarı \%30 olarak notlandırılır.

96 öğrenciyle üç dönem süren yarı deney, yeni politikalara rağmen sınav performansında istatistiksel olarak anlamlı bir değişim bulmamıştır (bir sınavda ~\%2 iyileşme), yapıştırılan karakterin toplama oranı ise \%61,0’dan \%68,1’e yükselmiştir (p < 0,0001); öğrencilerin \%90’ı incelemelerin kodlarını daha iyi anlamalarını sağladığını, \%65’i aşırı bağımlılığı önlemeye yardım ettiğini söylemiştir ([[code-review-genai-cs1|Fowles et al., 2026]]). Eşzamansız kaydedilmiş sözlü yanıtlar, yüz yüze çoktan seçmelilere göre anlamlı biçimde daha yüksek puanlar üretmiştir (ara sınav Md = 92,5’e karşı 70, p < ,001; final Md = 94,2’ye karşı 86,4, p = ,002) ve yalnızca orta düzeyde çapraz biçim korelasyonları göstermiştir (τ = ,44 ve ,25) — yazarlar bunların *biçim puanı farkları olduğunu, öğrenme kazanımı kanıtı olmadığını* uyarır; kopya çekme davranışı ölçülmemiştir ([[asynchronous-oral-assessment-2026|Pentland et al., 2026]]). Yön tek yönlü olarak olumlu değildir: öğrenciler sohbet temelli bir vivada daha sakindi (M = 6,50’ye karşı 5,86, p = ,028) ama yüz yüze vivayı kendi işlerini anlamak açısından anlamlı biçimde daha iyi puanladı (p = ,004) ([[aivaluate-anxiety-assessment-2026|Yusuf et al., 2026]]).

### Kademeli kontrol noktaları ve süreç kanıtı

**Kanıt: karma — mekanizmanın kendisine ilişkin denetimli bir sınama yoktur.** Ders çalışması kademeli modüller olarak yürür; her biri, çıktıyı *ve* yaklaşımı doğrulayan bir kontrol noktasıyla biter — sabit kodlamayla elde edilen doğru bir sonuç reddedilir — ve öğrenciyi atlanan adımlara döndüren bir ilerleme öncesi denetim vardır.

Kendi hızında ilerleyen bir kuantum bilgisi kursunda 5 lisansüstü öğrencinin durum çalışması 75 etkileşim kaydetmiş ve çift yönlü çıktı-ve-yaklaşım kontrol noktasının amaçlandığı gibi işlediğini doğrulamıştır, denetim grubu yoktur ([[quantum-education-its|Elhaimeur & Chrisochoides, 2026]]). Dur-durma kontrol noktaları kullanan 27 katılımcılı bir pilot çalışma, ölçülen bütün on beceri alanında anlamlı [[self-efficacy]] kazanımları bildirmiştir (p < 0,001); öznel-içinde ön-son tasarımda kazanımlar alıştırma etkilerinden ayrılamaz ([[agentic-education-coding|Naboulsi, 2026]]). 248 [[engineering-education|biomedical engineering]] öğrencisiyle üç yıllık bir yarı deney, kilometre taşları ve değerlendirme anahtarlarıyla dört modüllü problem temelli öğrenmenin eklenmesinden sonra daha yüksek A oranları bulmuştur (\%66,4’e karşı \%39,1, Δ = +27,3 puan, p = 0,042), salgından etkilenen yıl çıkarıldıktan sonra da sürmüştür; ancak karşılaştırma tarihseldir ve rastgele atanmamıştır ([[pbl-biomedical-engineering-genai-2026|Nnamdi et al., 2026]]).

## Öğreneni öğretmen yapan kalıplar

### Bir YZ öğrencisine öğreterek öğrenmek

**Kanıt: sınanmış ve bu sayfadaki en iyi kanıtlanmış kalıp.** Öğrenci içeriği çalışır, sonra hedef açıklamayı asla ifşa etmeyen bir acemi duruşu tutması için istek metniyle yönlendirilmiş bir yapay zekaya açıklar; yapay zeka açıklamalar, örnekler ve doğrulama akıl yürütmesi ister, alt düzeyden üst düzeye sıralanır ve açıklama yeterli olana kadar ısrar eder.

68 öğretmen adayıyla yarı deneyde, bir GAI acemi öğrenene açıklama yapmanın ters yüz edilmiş sınıfı tanımlamada daha yüksek puan aldığı (M = 4,18’e karşı 3,29, p < 0,001, r = 0,474) ve etkinliklerinde daha yüksek puan aldığı (M = 4,91’e karşı 3,06, p < 0,001, r = 0,642), daha fazla ve daha yüksek nitelikte soru ürettiği (her ikisinde de p < 0,001) — ancak nesnel sorularda **grup farkı göstermediği** (M = 23,18’e karşı 21,57, p = 0,416) bulunmuştur ([[wang-genai-novice-learner-learning-by-teaching-2026|Wang et al., 2026]]). 41 öğrencili rastgele atamalı bir laboratuvar deneyi, daha yüksek bilgi testi puanları (düzeltilmiş 11,86’ya karşı 10,53, F = 35,54, η² = 0,74) ve daha açık, daha okunabilir kod bulmuş, ancak **kod doğruluğunda fark** bulmamıştır ([[chatgpt-teachable-agent-programming-lbt-2024|Chen et al., 2024]]). 546 öğrenciye 11 hafta boyunca yayılan bir uygulama, her ek derin öğrenme eyleminin beklenen sınav denemelerinde \%2,7 azalma ile ilişkili olduğunu bulmuştur (IRR 0,973, p < ,001); karşılaştırma, görev süresi ve dönem sonunda \%30–35’e çıkan dış kaynak içerik yeniden kullanımıyla dolaşıktır ([[explique-teachable-agent-algorithms-546-students-2026|Wang et al., 2026]]). Tutarlı şekil: açıklama ve üretici işte kazanımlar, nesnel hatırlamada değil.

## İşbirliğini yapılandıran kalıplar

### Betimlenmiş roller, tek paylaşılan YZ

**Kanıt: sınanmış, ancak sıradan sınıflar yerine denetimli ya da denetimsiz ortamlarda.** İki öğrenen bir yapay zekayı paylaşır ve döndürme kurallarıyla açık roller alır; yapay zeka gerektiğinde bir rol üstlenmek üzere yapılandırılır ve çıktısı bütün gruba gider. Eşli programlama varyantında paylaşılan YZ, ikilinin ortak dikkatini ve çabasını modeller, bir çözümlemeyi 30 saniyeye kadar önceden öngörür ve iskeleleri hiçbir şey yapmamadan buyurucu bir ipucuna kadar kademeler halinde yükseltir.

26 ikiliyle öznel-içinde bir denemde geri bildirim koşulu daha yüksek hata ayıklama başarısı elde etmiştir (t[49,96] = −13,51, p < ,0001) ve daha hızlı bitirmiştir (t[44,70] = 4,39, p < ,0001); ancak çift göz izleme ve pupillometri donanımı gerektirmiş ve denetimsiz eşli işe aktarımı sınamamıştır ([[golrang-propact-pair-programming-2026|Golrang et al., 2026]]). 16 grupta 58 lisansüstü öğrenciyle yarı deneyde rol tasarımı, zihin haritası içerik puanlarını 1–5 SOLO ölçeğinde 3,65’ten 4,59’a yükseltmiş, düğüm ve dal sayıları sabit kalmıştır — ancak denetim grubu olmadığı için alıştırma etkileri dışlanamaz ([[cheng-symbiotic-role-design-human-genai-collaboration-2026|Cheng et al., 2026]]).

### YZ destekli tartışma

**Kanıt: karma — tek doğrudan uygulama bir durum tanımıdır.** Öğrenciler bir senaryoyu bağımsız biçimde analiz eder ve yönlendirilmiş soruları yanıtlar, aynı sorular üzerine standart bir istek metniyle ChatGPT’ye istek gönderir, YZ yanıtlarını kendi yanıtlarına karşı doğruluk açısından değerlendirir, yanıtlarını iyileştirir ve bütün sınıf tartışmasıyla kapatır.

Ekonomi etkinliği bir YZ hatasını bilerek kullanır — şarkının betimlediği davranış için doğru yanıt esnek olmadığı hâlde ChatGPT onu "tamamen esnek" talep olarak adlandırır — ve YZ çıktısının doğrulanmasını tartışmanın kendisine dönüştürür ([[beck-genai-literacy-economics-hands-on|Beck & Brodersen, 2025]]). Ölçülmüş bir sonuç değil, öğretmen izlenimleri bildirir. 67 öğretmen eğitimi öğrencisiyle sınanmış bir işbirlikçi tartışma dizisinde, deney grubu bir ders kontrolünü geride bırakmıştır (M = 51,45’e karşı 43,89, p = 0,001, g = 0,839) ve eş düzenlenme yükselmiştir (p = 0,043, g = 0,512) — ancak yapay zeka tekniği *tasarlamak* için kullanılmıştır, tartışmayı aracılık etmek için değil ([[ccct-cooperative-learning-technique|Tutal, 2026]]).

## Belirli bir yanlış kanı ile yüzleşen kalıplar

### Çürütme ve kavramsal değişim

**Kanıt: sınanmış — doğrudan çelişkili sonuçlarla.** Öğrenenin belirli inancını çıkarın, onunla yüzleşen bir [[refutation-text|refutation text]] ya da kişiselleştirilmiş bir YZ diyalogu sunun, karşı kanıt ve doğru açıklama ile yüzleşin, doğru kavramı yeniden ifade edin ve ardından bir gecikmeden sonra yeniden test edin.

375 yetişkinle önceden kaydedilmiş bir deneyde kişiselleştirilmiş yanlış kanı YZ diyalogu, hem ders kitabı tarzı çürütmeden hem de tarafsız YZ diyalogundan anlamlı biçimde daha büyük anlık inanç azalmaları üretmiş; bu 10 gün boyunca sürmüş ama 2 aya kalmış ders kitabı çürütmesiyle yakınsamıştır ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett & Tangen, 2026]]). 413 onuncu sınıf öğrencisiyle Solomon dört gruplu yarı deneyde *tersi* bulunmuştur: uzman yazımı ve YZ üretimi kavramsal değişim metinlerinin ikisi de etkileşimli ChatGPT diyalogundan anlamlı biçimde daha etkili olmuş; bu diyalog denetime göre anlamlı bir avantaj göstermemiş ve kazanımlar neredeyse tamamen yüksek başarılı öğrencilerle sınırlı kalmıştır ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdogan, 2025]]). İkinci makale çelişkiyi açıkça belirtir ve bunu [[prompt-engineering|prompt design]] ve alana bağlar. Çürütme metnin kendisi her iki çalışmada da denetimi geride bırakmıştır.

## Bağlamlar ve disiplinler

Kalıp, bağlamın ne gerektirdiğini belirler ve bazı kalıplar yalnızca tek bir ortamda sınanmıştır:

- **Çevrimiçi ve eşzamansız.** Geri çağırma ve aralıklama, Sokratik varyantlar, öz açıklamalı çözümlenmiş örnekler, istek metniyle iskelelenmiş kullanım, eşzamansız [[oral-assessment|oral assessment]] ve öğreterek öğrenme uygulamaları. Eşzamansız ortamlar *sıralamayı* yük taşıyan hale getirir, çünkü sistem öğrencinin önce deneyip denemediğini göremez.
- **Yüz yüze ve harmanlanmış.** [[productive-failure|Productive failure]], hata analizi, ters yüz edilmiş varyantlar, sözlü kod incelemesi, betimlenmiş işbirliği ve kavramsal değişim çalışmaları. Sınıf süresi genellikle değiştirilmekten çok yeniden tahsis edilir — sözlü inceleme kalıbında, sınıf süresinin görüşmeleri barındırabilmesi için dersler videoya taşınmıştır.
- **Sınanmış kanıtta temsil edilen disiplinler.** [[writing-education|Writing]] ve [[language-learning|language learning]] (PAIRR, birleşik akran ve YZ geri bildirimi, YZ eleştirisi sonra revizyon), [[math-education|mathematics]] (geri çağırma ve aralıklama, verimli başarısızlık, çözümlenmiş örnekler, hata analizi), [[cs-education|computer science]] (Sokratik asistanlar, hata analizi, sözlü kod incelemesi, öğreterek öğrenme, betimlenmiş eşli iş), [[medical-education|medicine]] (klinik görüşmelerde Sokratik iskeleleme), [[teacher-education|teacher education]] (betimlenmiş savunma, öğreterek öğrenme), [[business-education|business]] (ters yüz edilmiş MBA özel dersi) ve kavramsal değişim ile sözlü değerlendirme çalışmaları için [[physics-education|physics]], [[science-education|science]] ve [[vocational-education|vocational]] ortamlar.

## Kanıtın henüz desteklemedikleri

Açıkça belirtilir, çünkü bunlar sessizce düşürülmesi en olası bulgulardır:

- **Daha iyi YZ geri bildirimi daha fazla revizyon üretmez.** Daha yüksek nitelikli düşünce zinciri geri bildirimi, nitelikte öğretmen geri bildirimini geride bırakmış ve hiç revizyon avantajı üretmemiştir (Farrokhnia ve ark., 2026).
- **[[socratic-method|Socratic questioning]] otomatik olarak daha iyi değildir.** 132 öğrencili bir rastgele atamalı deneyde tam bağlamlı Sokratik asistanın, görev tamamlamayı destekleme açısından diğer bütün yapılandırmalardan anlamlı biçimde *daha kötü* puanlandığı bulunmuştur (ortalama sıra 48,63, μ = 3,53’e karşı 4,27, 4,16 ve 4,12; χ²(3) = 12,14, p = ,007), en fazla dış LLM kullanımına (\%23) ve en az tam kavrama yanıtına sahiptir (\%48’e karşı \%67) ([[guardrails-ai-teaching-assistants-programming-2026|Eastwood et al., 2026]]) — oysa bir tıp RCT’si, Sokratik bir özel ders öğretmeni içeren [[agentic-ai|multi-agent]] bir sistemin sınav ve iletişim puanlarında denetimini geride bıraktığını bulmuştur ([[ai-standardized-patient-scaffolding-medical-2026|Yang et al., 2026]]).
- **Öğrenciler daha az etkili rolü tercih eder.** Buyurucu özel ders tercih edilirken anında yanıt veren iskeleleme model soyutlamayı düşürmüştür (Zhu ve ark., 2026).
- **Doğrulama biçimleri, öğrenmeyi göstermeden puanları değiştirir.** Sözlü biçimler puanları yükseltmiş ve [[anxiety-and-stress|anxiety]] azaltmışken bir çalışma yüz yüzeyi anlamak için daha iyi bulmuş ve hiçbir çalışma kopya çekmeyi ölçmemiştir.
- **YZ çıktısının insan incelemesini izole eden denetimli bir sınama yoktur** ve kontrol noktası mekanizması hiçbir zaman değiştirilen değişken olarak sınanmamıştır.
- **Verimli başarısızlık ve hata analizi, öğrenme çıktıları yerine strateji bağlılığını ya da [[self-report-measures|self-report]] ölçen küçük, denetimsiz çalışmalara** (n = 17 ve n = 13) dayanır.

## Tasarım önerileri (henüz sınanmamış)

Aşağıdaki kalıplar, bilgi tabanı sorumlusu tarafından sağlanan bir akademik personel kılavuzundan gelir (*AI-Ready Course Design*, Eylül 2026). O kılavuz, örneklerinin açıkça **tasarım önerileri, sınanmış müdahaleler olmadığını** belirtir ve bu bilgi tabanındaki hiçbir makale onları sınamaz. Bunlar burada denenmeye ve değerlendirilmeye değer tasarım fikirleri olarak kaydedilir ve kanıt olarak okunmamalıdır.

- **Savunma + revizyon izi** (kompozisyon, beşeri bilimler). Yalnızca ödevden oluşan teslimi, ilk bir tez, iki açıklamalı kaynak pasajı, revize edilmiş bir ödev ve 150 sözcüklük bir karar notuyla değiştirin; ilk taslaktan sonra YZ eleştirisine izin verin. iddia–kanıt bağlantısını ve kaynaklara karşı gerekçelendirilmiş bir kabul ya da ret önerisini değerlendirin.
- **Veri + gerekçeli iddia** (fen, laboratuvar kursları). Parlak bir laboratuvar raporunu, ham gözlemler, bir grafik, bir belirsizlik notu ve sonuçları bir iddiaya bağlayan bir açıklamayla değiştirin; YZ sunulan bir yorumu eleştirebilir ve öğrenciler o eleştiriyi kendi verilerine karşı doğrular.
- **Deneme + hata analizi** (önce kalkülüs, kalkülüs). Yalnızca yanıttan oluşan ödevi, ilk bir deneme, hatalı bir çözümlenmiş çözümün analizi ve düzeltilmiş bir açıklamayla değiştirin; ipuçlarına yalnızca denemeden sonra izin verilir. Bu, yukarıdaki hata analizi kalıbının tasarım biçimidir ve o kalıbın zayıf kanıt tabanını devralır.
- **Konum + itiraz + yeniden değerlendirme** (psikoloji, sosyoloji). "Bir kez paylaş, iki kez yanıtla" biçimini, bir kurs kavramı kullanan olaya dayalı bir iddiayla değiştirin; bir akran karşı örnek sunar ve yazar kanıtla revize eder ya da savunur.
- **Proje + bağlantılı kontrol** (işletme, sağlık meslekleri). YZ’nin izin verildiği kurgusal bir kuruluş ya da hasta durumu için bir öneriyi, iki kilit kararın kısa bir açıklaması ve değişen bir kısıta yanıtla eşleyin; iki bileşen arasındaki notlandırma ilişkisini yayımlayın.
- **Plan + dene + uyarlama** (üniversitede başarı). Jenerik bir zaman yönetimi yansıtmasını, bir haftalık bir çalışma planı, onu denemenin kısa bir kaydı ve olanlara bağlı bir revizyonla değiştirin; YZ, öğrenci kısıtları belirledikten sonra programlama seçenekleri önerebilir.

Kılavuzun kendi uyarıları geçerlidir: kaydedilmiş video, yansıtmalar ve kayıtların kendileri de YZ destekli olabilir, dolayısıyla tamamen eşzamansız kurslarda bir kayıt bağımsız ustalığın doğrulanması olarak ele alınmamalıdır. Çerçevelerinden ikisi — değerlendme ikizleri ve hile caydırıcısı olarak eşzamansız sözlü değerlendirme — doğrulanmayı bekleyen çerçeveler olarak kalır; yukarıda atıflı eşzamansız sözlü değerlendirme çalışmaları biçim puanlarını ölçmüş ve hileyi hiç ölçmemiştir.

## Yaygın yanlış anlamalar

- **“YZ tarafından sağlanan her alıştırma alıştırmadır.”** Uyarlanabilir aralıklı geri çağırma koşulu **en yüksek son test puanlarını (M = 78,19)** üretmiş ve **öğrenen yönetimindeki YZ çalışmasından (M = 67,28) anlamlı biçimde daha iyi performans göstermiştir**. Öğrenen yönetimindeki düzenleme yapılandırılmış bir düzenlemenin altında kalmıştır; yani özerklik otomatik olarak daha iyi tasarım değildir.
- **“Bir sohbet robotuyla çalışmak, onsuz çalışmaktan iyidir.”** **Karşıt vaka belirleyicidir**: **120 öğrenciyle** yürütülen bir [[rct|randomize denemede]], sınırsız ChatGPT ile çalışan grup **sürpriz bir testte daha az** akılda tutmuştur. Araç, sınanan düzenlemede kalıcılığa zarar vermiştir.
- **“Kalıbın kanıtı büyük ve havuzlanmış bir denemedir.”** **En güçlü destek dolaylıdır** ve **26 öğrenciyle yürütülen randomize bir özne içi deneyden** gelir; burada anında yanıtlayan [[scaffolding|iskeleleme]] anlamlı biçimde farklı performans göstermiştir. Kanıt kalıbı destekler ve ölçek açısından ince kalır; sayfa da bu şekilde okunmalıdır.

## Bağlı kavramlar

- [[pedagogy]] — bu sayfanın dizilere dönüştürdüğü öğretim yaklaşımlarının çatısı
- [[learning-design]] — kalıpların seçildiği, sıralandığı ve bir kursa gömüldüğü yer
- [[scaffolding]] — YZ yardımının nereye ait olduğunu yöneten destek-ve-azaltma ilkesi
- [[feedback]] — bu sayfanın geri bildirim kalıplarının örneklendirdiği sistem
- [[formative-assessment]] — bu kalıpların çoğunun hizmet ettiği değerlendirme amacı
- [[peer-assessment]] — PAIRR ve birleşik geri bildirim kalıplarının insan yarısı
- [[ai-feedback-quality]] — geri bildirim niteliğinin tek başına neden revizyonu belirlemediği
- [[evaluative-judgment]] — öğrencilerin YZ çıktısı üzerinde kullanmaları gereken değerlendirme
- [[feedback-literacy]] — eleştirel değerlendirme adımlarının inşa ettiği yetkinlik
- [[human-in-the-loop-ai]] — inceleme kalıplarının denetim yapısı
- [[oral-assessment]] — doğrulama kalıplarının altında yatan biçim
- [[process-oriented-assessment]] — kademeli kontrol noktalarının ardındaki mantık
- [[productive-failure]] — öğretimden önce denemenin ardındaki kavram
- [[retrieval-spacing-interleaving]] — aralıklı geri çağırma kalıpları için kanıt tabanı
- [[desirable-difficulties]] — çabaya dayalı dizilerin neden akıcı olanları geride bıraktığı
- [[misconceptions]] — kavramsal değişim kalıplarının hedeflediği şey
- [[refutation-text]] — yanlış kanı ile yüzleşmenin metin biçimi
- [[learning-by-teaching]] — YZ öğrencisi kalıbının ardındaki pedagoji
- [[socratic-method]] — sorgulama kalıbı ve çelişkili kanıtı
- [[collaborative-learning]] — betimlenmiş paylaşılan YZ işinin bağlamı
- [[cognitive-offloading]] — önce-çaba temelli her kalıbın önlemek için tasarlandığı risk
- [[metacognition]] — bu dizilerdeki yansıtma adımlarının tetiklemek için tasarlandığı şey
- [[prompt-engineering]] — yapılandırılmış kullanım kalıplarında iskeleleme katmanı
- [[transfer-of-learning]] — kalıpların nihai olarak yargılandığı sonuç
- [[assessment-validity]] — süreç kanıtının hiç önerilme nedeni
- [[academic-integrity]] — sözlü ve süreç doğrulamasının ardındaki itici güç
- [[ai-literacy]] — YZ çıktısını eleştirerek geliştirilen yetkinlik
- [[online-teaching-and-learning]] — sıralamayı yük taşıyan hale getiren bağlam
- [[higher-ed]] — bu kanıtların çoğunun üretildiği düzey
- [[k-12]] — verimli başarısızlık, kavramsal değişim ve sözlü değerlendirme çalışmalarının düzeyi

## Bağlı makaleler

- [[pairr-ai-peer-review-2025]] — Akran ve YZ Değerlendirmesi + Yansıtma (PAIRR): amiral gemisi dizi, N = 654 (Sperber ve ark. 2025)
- [[gift-ai-pairr-business-writing-2025]] — Bir işletme yazma kursunda uygulanan PAIRR (MacArthur ve ark. 2025)
- [[ai-peer-feedback-l2-writing-engagement-2026]] — Birleşik YZ artı akran geri bildirimi katılımı ve dört IELTS boyutunun tamamını yükseltti (Liu 2026)
- [[chang-genai-peer-feedback-collaborative-argumentation-2026]] — İşbirlikçi savunmada istek metniyle iskelelenmiş GenAI akran geri bildirimi (Chang ve ark. 2026)
- [[rethinking-ai-writing-feedback-literacy|Dai (2026)]] — Öğrencilerin YZ geri bildirimini süzmeyi ve değerlendirmeyi öğretmeleri: FRAC ve APCA koşulları
- [[farrokhnia-genai-feedback-student-revisions-2026]] — Daha yüksek nitelikli YZ geri bildirimi daha büyük revizyon kazanımı üretmedi (Farrokhnia ve ark. 2026)
- [[guardrails-ai-teaching-assistants-programming-2026]] — Sokratik artı tam bağlam, diğer bütün asistan yapılandırmalarından daha kötü puanlandı (Eastwood ve ark. 2026)
- [[ai-standardized-patient-scaffolding-medical-2026]] — Klinik görüşme eğitiminde ihtiyaç tetiklemeli Sokratik iskeleleme, N = 100 (Yang ve ark. 2026)
- [[hashmi-socratic-physics-chatbot-2025]] — Giriş düzeyi mekanikte Sokratik sohbet botu: soru özgüllüğü \%10–15’ten \%100’e yükseldi (Hashmi ve ark. 2025)
- [[agent-type-feedback-style-self-directed-learning-2026]] — Sokratik karşısında buyurucu ajan geri bildirimi, sıra dengelenmemiş (Han ve ark. 2026)
- [[adaptive-pretesting-retention]] — Uyarlanabilir aralıklı geri çağırma, öğrenen yönelimli YZ çalışmasını geride bıraktı (Akgun ve Toker 2026)
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — Çalışma sırasında sınırsız ChatGPT 45 günlük korumayı düşürdü (Barcaui 2025)
- [[ai-tutor-modality-randomized-field-experiment-2026]] — Yapılandırılmış özel ders kazanımları dakikaları değil tamamlanan haftaları izledi (Yang ve ark. 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Örnekler karşısında alıştırma, bilgi türüne göre çaprazlanır (Rachatasumrit ve ark. 2025)
- [[adaptive-scaffolding-cognitive-engagement-its]] — Zeki bir mantık özel ders öğretmeninde uyarlanabilir kılavuzlu ve hatalı örnekler (Dey Tithi ve ark. 2026)
- [[structured-reflection-ai-explanatory-feedback-2026]] — YZ geri bildirimine öz açıklama eklemek her ölçütte kaybetti (Asher ve ark. 2025)
- [[generative-ai-guardrails-harm-learning]] — Koruyucu tedbirli özel ders, korumasız GPT’nin yol açtığı sınav zararını kaldırdı, ~1.000 öğrenci (Bastani ve ark. 2025)
- [[guided-llm-scaffolding-independent-learning]] — İstatistikte kılavuzlu karşısında sınırsız LLM kullanımı (Amanlou ve ark. 2026)
- [[preferred-scaffolding-ai-mathematical-modeling]] — Anında yanıt veren iskeleleme tercih edilirken model soyutlamayı düşürdü (Zhu ve ark. 2026)
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Verimli başarısızlık için çözümleri gizlemesi yönünde bir LLM özel ders öğretmenini yönlendirmek (Puech ve ark. 2025)
- [[pedagogy-ai-mistakes]] — Bilinçli yapay zeka hatası durumları üzerine kurulu haftalık eleştiri–iyileştirme döngüleri (Hosseini 2026)
- [[kumar-genai-computing-education-systematic-review-2026]] — Ayrı bir yetkinlik olarak hata analizi, 72 bilgisayar eğitimi çalışması üzerinden (Kumar ve ark. 2026)
- [[lukesova-clue-before-correction-2026]] — L2 revizyonunda doğrudan hata düzeltme yerine kılavuzlu ipuçları (Lukešová ve Jennings 2026)
- [[wang-genai-novice-learner-learning-by-teaching-2026]] — Bir YZ acemi öğrenene açıklama yapmak, N = 68 (Wang ve ark. 2026)
- [[chatgpt-teachable-agent-programming-lbt-2024]] — Programlama için bir ChatGPT ajanına öğretmenin rastgele atamalı sınaması (Chen ve ark. 2024)
- [[explique-teachable-agent-algorithms-546-students-2026]] — 11 hafta boyunca 546 öğrenciye yayılan öğreterek öğrenme (Wang ve ark. 2026)
- [[socrates-students-instructors-llms-lbt-2025]] — Bir LLM’nin yanıtlayamayacağı sorular tasarlayan öğrenciler (Yang ve ark. 2025)
- [[code-review-genai-cs1]] — CS1’de GenAI’ya bir yanıt olarak zorunlu sözlü kod incelemesi görüşmeleri (Fowles ve ark. 2026)
- [[asynchronous-oral-assessment-2026]] — Eşzamansız kaydedilmiş sözlü değerlendirme karşısında yüz yüze çoktan seçmeli (Pentland ve ark. 2026)
- [[aivaluate-anxiety-assessment-2026]] — Sohbet temelli viva kaygıyı azaltırken yüz yüze anlamak için daha iyi puanlandı (Yusuf ve ark. 2026)
- [[ai-supported-oral-assessment-tvet-2026]] — Mesleki atölyelerde öğretmen yargısı için değerlendirme anahtarı kanıtı sunan YZ (Adams 2026)
- [[quantum-education-its]] — Kendi hızında ilerleyen bir lisansüstü kursta çıktı-ve-yaklaşım kontrol noktaları (Elhaimeur ve Chrisochoides 2026)
- [[agentic-education-coding]] — Dur-durma kontrol noktaları ve bir ilerleme öncesi denetim, N = 27 (Naboulsi 2026)
- [[pbl-biomedical-engineering-genai-2026]] — Kilometre taşları ve değerlendirme anahtarlarıyla dört modüllü problem temelli öğrenme (Nnamdi ve ark. 2026)
- [[walkington-teachers-multi-agent-personalized-problem-generation-2026]] — Öğretmenlerle dört ajanlı bir inceleme döngüsü ve ilgi uyumunun başarısız olduğu yer (Walkington ve ark. 2026)
- [[zhao-learnlens-feedback-educators-loop]] — Doğrulayıcı puanlarıyla öğretmen-döngüde geri bildirim (Zhao ve ark. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Notları fark edilmeden değiştiren istek metni enjeksiyonları ve tek denetim olarak öğretmeni bırakması (Humble 2026)
- [[golrang-propact-pair-programming-2026]] — Eşli programlamada işbirliği çözümlemesini öngören paylaşılan bir YZ (Golrang ve ark. 2026)
- [[cheng-symbiotic-role-design-human-genai-collaboration-2026]] — Grup bilgi inşasında betimlenmiş öğrenen ve YZ rolleri (Cheng ve ark. 2026)
- [[paratutor-parent-child-tutoring]] — Ebeveyn–çocuk özel dersinde rol ayrımı sağlayan YZ desteği (Luo ve ark. 2026)
- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — Kişiselleştirilmiş YZ diyalogu ders kitabı çürütmesini anında geride bıraktı, iki ayda yakınsadı (Corbett ve Tangen 2026)
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Kavramsal değişim metinleri etkileşimli YZ diyalogunu geride bıraktı, ters sonuç (Akdogan 2025)
- [[ai-supported-inquiry-photosynthesis-respiration-2026]] — YZ destekli kılavuzlu araştırma ve kavramsal anlayış (Aydin 2026)
- [[ai-enhanced-flipped-classroom-three-year-2026]] — Geleneksel, ters yüz edilmiş ve YZ ile güçlendirilmiş ters yüz edilmişin üç kohort karşılaştırması (Liu ve ark. 2026)
- [[flipped-learning-genai-design-education-2026]] — Parametre kılavuzlu istek metni iskelelemeli ters yüz edilmiş stüdyo kursu (Qu ve ark. 2026)
- [[jing-genai-learning-outcomes-higher-ed-meta-analysis-2026]] — Öğretme modeli sonuçları dengeleyici: ters yüz edilmişte g = 1,96’ya karşı gelenekselde g = 0,46 (Jing ve ark. 2026)
- [[ai-tutor-statistical-programming-adoption-2026]] — Ters yüz edilmiş bir kursta haftalık ödev-özel ders kullanımı, aktarım görevi puanlarını öngördü (Préau ve ark. 2026)
- [[beck-genai-literacy-economics-hands-on]] — Bir YZ hatası üzerine kurulu beş adımlı YZ eleştirisi tartışması (Beck ve Brodersen 2025)
- [[ccct-cooperative-learning-technique]] — Atanmış roller ve galeri turuyla sınanmış bir işbirlikçi öğrenme dizisi (Tutal 2026)
- [[ai-assisted-seminar-learning-information-literacy-2026]] — YZ erişim öneri sistemiyle seminer ve akran tartışma modülü (Huang 2026)

