---
title: "YZ Ölçekte Daha İyi Geri Bildirim Vermeme Nasıl Yardım Edebilir?"
created: "2026-10-14T22:30:00-04:00"
connected_faqs: [writing-instruction-ai-best-practices, checking-whether-educational-ai-works, ai-save-instructor-time]
weight: 70
type: faq
technology: [human-in-the-loop-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, feedback-literacy, formative-assessment]
methods: [mixed-methods-research, meta-analysis-systematic-review]
research_method: [experiment]
audience: [instructors, assessment designers, assessment professionals]
level: [higher ed, secondary]
translation_of: faqs/ai-feedback-at-scale
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

# YZ Ölçekte Daha İyi Geri Bildirim Vermeme Nasıl Yardım Edebilir?

Altıncı hafta. Elinizde bir yığın taslak, inandığınız bir rubrik ve yorumlarınızın üçte birinin gözden geçirilip unutulacağına dair büyüyen bir kuşku var. Bir meslektaşı, bir aletin artık her taslağı bir saat içinde yorumladığını söylüyor. Bunun gerçek bir yükseltme mi yoksa kimsenin okumadığı metni daha hızlı üretmenin bir yolu mu olduğunu bilmek istiyorsunuz.

**Özet:** YZ geri bildirimi, dar bir bant içinde—dil düzeyinde düzeltme ölçeğinde dil işi ve rubrik yönlendirmeli ilk geçiş yorumları—kapsam, zamanlaması ve tutarlılığı için benimsenmeye değerdir ve yalnızca yorumların çevresinde ne olacağını tasarladığınızda benimsenmeye değerdir. Erişim kolay kısımdır. [[genai-feedback-design-multisite-experiment|1.176 birinci sınıf lisans öğrencisiyle küme randomizasyonlu bir deneyde]], yansıtıcı ve karma tasarımlar, gecikmeli, YZ’siz [[transfer-of-learning|aktarım]] konusunda doğrudan YZ eleştirisini geçti; [[farrokhnia-genai-feedback-student-revisions-2026|70 öğrenciyle randomize bir makale deneyinde]], daha yüksek kaliteli YZ geri bildirimi deneyimli bir öğretmeninkinden daha iyi revizyonlar üretmedi. Kanıtlar boyunca, öğrencilerin bir yorumla ne yaptığı, yorumun ne kadar hızlı geldiğinden daha önemlidir ve [[feedback-literacy|geri bildirim okuryazarlığı]]—YZ erişimi değil—kazanan öğrencileri kopyalayanlardan ayırır.

## Her şeyi belirleyen ayrım: hacim kalite değildir, teslim edilen okunan değildir

Bu sayfadaki işin çoğunu iki ayrım yapar.

**Daha fazla geri bildirim, daha iyi geri bildirim değildir.** YZ her hafta her taslak üzerine yorum üretebilir; miktar neredeyse bedavasız. Kalite değildir. [[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson ve Yan (2025)]], sürecin menteşesini istek metni kalitesi yapar: muğlak istek metinleri jenerik, işe yaramaz çıktı verir ve üretilen yorumlar uydurulmuş, yanlı ya da örtüşen olabilir; bu da [[evaluative-judgment|değerlendirici yargıyı]] okura geri yıkar. Kalibrasyon daha keskindir: [[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia ve ark. (2026)]]’de, YZ geri bildirim kalitesi öğrencinin ilk taslağının gücüyle anlamlı biçimde ilişkiliydi, öğretmen geri bildirim kalitesi ise değildi—öğretmen daha tutarlı kalibre etti. Hacim ölçeklenir. Kalibrasyon ölçeklenmez.

**Teslim edilen geri bildirim, uygulanan geri bildirim değildir.** Bu daha pahalı karışıklıktır. Farrokhnia ve ark., Farsça argümantif makale yazan 70 öğrenciyi üç gruba randomize etti. Düşünce zinciri istek metni, hem sıfır atımlı (zero-shot) istek metninden (M = 11,25, p = ,01) hem de deneyimli bir insan öğretmenden (M = 11,20, p = ,008) anlamlı biçimde daha yüksek puanlı geri bildirim üretti (M = 12,90). Düşünce zinciri grubu yine de makalelerini, benzer kazanımlar elde eden öğretmen geri bildirim grubundan anlamlı biçimde daha fazla revize etmedi. Daha iyi puanlı yorumlar, aynı revizyon. Ölçütünüz modelin yazdığının kalitesiyse, bu bir kazanç olarak okunur; ölçütünüz makalede neyin değiştiğiyse, okunmaz.

Geri bildirimi kimin uyguladığı öğrenene bağlıdır. [[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths ve Lodge (2026)]]’de, 32 psikoloji öğrencisi ChatGPT’ye sınırsız erişimle ekran kaydı alınan 25 dakikalık bir makale görevi yaptı, sonra kaydı video uyarmalı bir görüşmede izledi. Geri bildirim okuryazarlığı, makale notunun tek anlamlı olumlu yordayıcısıydı (β = 0,46, p = ,017); [[feedback-futures-genai|Zhan, Wood, Carless ve Yan (2026)]]’ın özel sayı editoryalinde, YZ kullanım sıklığı, [[trust|kaynağın güvenilirliği]] ve [[prior-knowledge|önceki bilgi]] performansı yormadı. Öğrencilerin üçte birinden azı YZ çıktısını başka bir internet kaynağıyla karşılaştırdı; yarısından fazlası [[academic-integrity|akademik dürüstlük]] ya da makaleyi kendi kelimeleriyle yazma arzusu nedeniyle kasıtlı YZ kaçınması ifade etti; ve çoğu görev düzeyinde geri bildirim istedi, bu da diğer görevlere zayıf biçimde aktarılır.

Benimseme aynı zamanda düzensiz dağılmıştır. [[tubino-adachi-ai-automated-feedback-literacy|Tubino ve Adachi (2022)]] tarafından bildirilen üniversite çapındaki Deakin pilotunda, YZ aracı isteğe bağlıydı ve erişimi olan neredeyse 4.000 öğrenciye rağmen kullanım lisans öğrencilerinin yaklaşık %13’ü ve lisansüstü öğrencilerin %12’si düzeyinde ortalalandı. Proaktif, yüksek başarılı öğrenciler onu daha fazla kullandı. “Aracı mevcut kılmak” size aldığı şey budur ve bu sayfanın geri kısmının erişimden çok tasarım hakkında olmasının nedenidir.

## YZ’nin gerçekten iyi olduğu yer ve durduğu yer

**İyi: dar bir bant içinde kapsam ve tutarlılık.** Tubino ve Adachi, 29 birim ve neredeyse 4.000 öğrenci üzerinden FeedbackFruits’ın YZ otomatik geri bildirim aracıyla 2021’deki Deakin pilotunu bildirir. Mikro düzeyde metin özellikleri üzerinde çalışır—cümle uzunluğu, noktalama, dil bilgisi, metin yapısı—düzeltme aşamasını destekler: öğretim elemanı parametreleri belirler, öğrenci aracı bağımsız olarak kullanır ve zamanında, uygulanabilir geri bildirim alır. Ölçeklenen iş bölümüdür, model değil.

**Kötü: genellik, doğruluk ve kalibrasyon.** İşte burada başarısız olur (Zhan ve ark., 2025) ve çözüm bir istek metni, bir rubrik ya da bir insandır—daha büyük bir model değil. [[learner-centered-feedback-ai|Aldino ve ark. (2026)]], 21 yükseköğretim öğretmeninden öğretim elemanı tarafındaki başarısızlık biçimlerini ekler: tutarsız ton (n = 7), potansiyel yanlış bilgi (n = 5) ve güven sorunları (n = 5); revizyon çabası içerik eklemek yerine abartılı övgü ve jenerik önerileri silmekle geçer.

## Ayakta kalan bir dağıtım deseni

Kanıtlar diğerlerinden daha çok tek bir şekli destekler: YZ taslak hazırlar, öğrenci önce değerlendirir ve bir insan karar verir.

**Neyi otomatikleştirmeli.** Mikro düzeyde dil işi ve rubrik yönlendirmeli ilk geçiş teşhisleri. Modele bir rubrik verin ve adım adım akıl yürütmesini sağlayın—Farrokhnia ve arkadaşlarının kalite kazancı, modeli bir argümantasyon rubriğine karşı adım adım değerlendirmeye yürüten düşünce zinciri bir istek metninden geldi, çıplak bir talimattan değil. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen ve Yan (2026)]] de benzer biçimde YZ gruplarına önceden eğitilmiş rubrikler ve istek metni kılavuzlarıyla ChatGPT-4o verdiler; çıktının belirtilen ölçütlere karşı kontrol edilebilir olmasını sağlayan şey buydu. Rubrike atıflı üretim otomatikleştirilebilir; yargı otomatikleştirilemez.

**Neyi insan tutmalı.** Nihai mesaj, ton ve kayda geçen her şey. [[becerra-aicofe-feedback-2026|Becerra, Palma ve Cobos (2026)]], rubrik puanları ve nitel gözlemler üzerinden bağımsız taslak yorumlar üretmek için bağımsız olarak ince ayarlanmış üç modeli (GPT-4.1-mini, Gemini 2,5 Flash, Llama 3,1) çalıştıran AICoFE’yi tanımlar; sonra öğretim elemanın hangi modelin neye katkıda bulunduğunu gösteren bir göstergeyle cümleleri ya da paragrafları seçerek nihai mesajı oluşturur. YZ bir taslak üreticidir, nihai teslim eden değildir. Aldino ve ark. aynı “yardım et ama doğrula” desenini bulur: makine öğrenimi bileşeni en sık **Öğrenme Hedefinin Karşılanması**nı eksik olarak işaretledi (21 öğretmenden 20’si onu atlamıştı; 16’sı kabul etti) ve **Öğrenci–Öğretmen İlişkisi** (14’ü atlamıştı; 12’si kabul etti); öğretmenler her öneriye mesleki yargıyla karar verdi.

**Nasıl sıralanmalı.** Kaynakları yan yana yığmayın; onları aşamalara ayırın. [[genai-feedback-design-multisite-experiment|Ateş’in (2026)]] deneyinde, yansıtıcı koşul YZ eleştirisinden önce öz değerlendirme gerektirdi ve karma koşul öz değerlendirme → akran geri bildirimi → YZ eleştirisi sırasını çalıştırdı. Tubino ve Adachi, aynı nedenle üç taslak aşaması için şablonlar önerir. YZ’yi birinin yerine kullanmak yerine akran geri bildirimiyle birleştirin: Gu ve ark., bir dönem boyunca üç öz değerlendirme döngüsünden iki paralel İngilizce sınıfını (Çin’de N = 118 birinci sınıf lisans öğrencisi; YZ n = 56, akran n = 62) geçirdi ve YZ iskelelemesi, geri bildirim okuryazarlığını insan akran değerlendirmesine göre hafif ama anlamlı biçimde iyileştirdi (ANCOVA p = 0,049, ηp² = 0,03). YZ öğrencileri istek metinlerini yinelemeli biçimde rafine etti ve yanlış çıktıyı doğruladı ya da sorguladı; oysa akran grup öğrencileri kaynakları sosyal kolaylığa göre seçti ve değerlendirici yargıları arkadaşlık yanlılığından bozuldu. Akran değerlendirmesi, izleyici farkındalığı için ayrı bir değer korudu; dolayısıyla yazarlar anonim akran geri bildirimiyle çok aşamalı tasarımlar önerir.

**Öğrenciler için nasıl çerçevelenmeli.** Yargılanacak bir taslak görüş olarak, kopyalanacak bir yanıt olarak değil. Açıkça söyleyin: model yorumları uydurulmuş, yanlı ya da örtüşen olabilir ve revizyondan öğrenci sorumludur. Zhan ve arkadaşlarındaki iki IELTS yazarı uçları gösterir: muğlak bir istek metniyle düşük okuryazarlıklı bir öğrenci jenerik geri bildirim aldı, ona güvendi ya da fazla kopyaladı ve yüzeysel biçimde katıldı; yüksek okuryazarlıklı bir öğrenci ölçüte atıflı bir istek metni yazdı, takip etti, kaynakları çapraz kontrol etti ve revizyonları izledi. Fark öğretim ve alışkanlıktı, araç erişimi değil.

**Çıktı nasıl kontrol edilmeli.** Üretilen yorumları, yukarıda adlandırılan başarısızlık biçimleri—ton, yanlış bilgi, abartılı övgü, örtüşme—arayarak aynı taslaklar üzerine kendi okumanıza karşı örnekleyin. Deakin pilotunda, olumlu ortalama puanlar, öğrencilerin işaretlediği hatalarla bir arada yaşadı; dolayısıyla memnuniyet zayıf bir kalite sinyalidir; gülen yüz anketi doğruluk kanıtı değildir.

## Sayılarla birlikte başarısızlık biçimleri

**Etkiyi kullanılabilirlik değil, tasarım yönlendirir.** En güçlü tasarım kanıtı, çok merkezli, küme randomizasyonlu, boylamsal bir saha deneyidir: 4 üniversite ve 3 fen alanında 48 bölümdeki 1.176 birinci sınıf lisans öğrencisi, bölüm düzeyinde yalnızca akran, doğrudan YZ, yansıtıcı YZ ve karma koşullara randomize edildi. Karma, en yüksek argüman kalitesi kazanımlarını ve kavramsal öğrenme üzerindeki en net avantajı üretti. Yansıtıcı ve karma koşulların her ikisi de doğrudan YZ’den daha güçlü geri bildirim benimsemesi ve [[self-regulated-learning|öz düzenlemeli öğrenme]] üretti ve her ikisi onu gecikmeli, YZ’siz aktarımda geride bıraktı. Doğrudan YZ, akran geri bildirimine karşı anlık argüman kalitesini iyileştirdi—sahip olduğu avantaj budur—ama aktarım daha zayıftı. Eğitimsel değer bu nedenle YZ erişiminden çok, geri bildirim ortamının revizyon sırasında öğrencinin [[agency|öğrenci özerkliğini]], değerlendirici yargısını ve sahipliğini koruyup korumadığına bağlıdır: doğrudan eleştiri pasif benimsemeyi davet eder, yansıtıcı ve karma tasarımlar ise öğrenciyi onu yorumlamaya, ölçütlere karşı karşılaştırmaya, alaka düzeyini yargılamaya ve sonra revize etmeye zorlar. Diğer etki büyüklükleri bunu ılımlaştırır. Gu ve arkadaşlarının akran değerlendirmesine göre avantajı küçüktü ve onu gerçek ama tek başına dönüştürücü olmayan olarak okudular—destekleyici işi öğretmen iskelelemesi, istek metni kılavuzları ve çalışma sayfaları yaptı. Editoryalın çerçevesi şudur: YZ ile insan geri bildirimi yalnızca tamamlayıcılık—iki kaynağı yan yana bırakmak yerine sıralama, karşılaştırma, düzenleme ve yönetişim üzerinden—belirtildiğinde tamamlayıcıdır.

**Boru hattının iki ucunda da aşırı güven.** Öğrenciler geri bildirimi uygularken eleştirel olmayan biçimde aşırı güvenebilir ve öğretim elemanları önerilere aşırı boyun eğebilir. Öğretmen geri bildirimi ayrıca öğrenciler tarafından sık sık YZ geri bildiriminden daha olumsuz ya da daha riskli olarak algılanır; bu, olağan kalite varsayımını tersine çevirir. Geri bildirim okuryazarlığını bir varsayım değil, bir ön koşul olarak ele alın: Hawkins ve arkadaşlarındaki en güçlü yordayıcı, öğrenenin geri bildirim okuryazarlığıydı, YZ’yi ne sıklıkta kullandığı değil.

**Yer değiştiren ama küçülmeyen iş yükü.** [[ai-save-instructor-time|İş yükü sorusu]], en sık bir kenara bırakılan sorudur. YZ geri bildirim aracının kendilerine ne verdiği sorulduğunda, 21 öğretmen zaman kazandırmayı (n = 2) nadiren adlandırdı ve yansıtmayı (n = 14), dil ve yapının iyileştirilmesini (n = 11) ve eksik bileşenlerin belirlenmesini (n = 10) çok daha sık adlandırdı. Görünür kazanç bir taslak ve bir teşhis istemidir, bitmiş bir yorum değil. Yerine ortaya çıkan, inceleme, kalibrasyon ve doğrulama işidir. 21 öğretmenden 12’si daha fazla cümle düzeyinde revizyon yaptı; düzenleme (f = 32) ve çıkarma (f = 27) baskın, ekleme nadirdi (f = 8). Baskın desen tonu kalibre etmekti—övgüyü aşağı düzenlemek (f = 11), önerileri çıkarmak (f = 9), teşviki çıkarmak (f = 8)—özgünlüğü ve mesleki sesi korumak için ve revizyonlar ilişkisel boyutta, özellikle Öğrenci–Öğretmen İlişkisinde (f = 24) kümelendi. Öğretmenler insan düzenlemesi ihtiyacını (n = 9), tutarsız tonu (n = 7), yanlış bilgiyi (n = 5) ve güven sorunlarını (n = 5) adlandırdı; beş yıldan fazla deneyimli öğretim elemanları bunlardan daha fazlasını bildirdi, oysa daha az deneyimli öğretmenler iskelelemeyi değerli buldu—YZ önerilerine boyun eğen acemilerin daha az bağımsız yargı inşa edip etmediklerini izlemenin bir nedeni. Editoryalın kuralı: YZ, öğretmen emeğini ortadan kaldırmak yerine yeniden dağıtır ve kötü tasarlanmış araçlar onu artırabilir.

## Ciddiye alınan üç itiraz

**“YZ geri bildirimi kişisel değil.”** Sık sık doğrudur ve son sözü insanda tutmanın nedeni tam olarak budur. AICoFE, jenerik model nesrinin bir öğrencinin alması gereken şey olmadığı için vardır—öğretim elemanı nihai mesajı seçer, düzenler ve imzalar. Aldino ve arkadaşlarındaki 21 öğretmen, abartılı övgüyü silerek ve öğrenciyle ilişkilerine uymayan önerileri keserek aynı nedenle tonu yeniden yazdı. Kişiselleştirme bu tasarımda modelin işi değildir; sizin işinizdir ve model hazırlık işini yapmaktadır.

**“Öğrenciler zaten geri bildirimi okumaz.”** Umduğumuzdan daha az okurlar ve kanıtlar, çözümün tasarım olduğunu söyler, hacim değil. Deakin pilotunda benimseme lisans öğrencilerinin yaklaşık %13’ü ve lisansüstü öğrencilerin %12’si düzeyinde işledi. Farrokhnia ve arkadaşlarının daha yüksek puanlı YZ yorumları, öğretmen yorumlarından daha fazla revizyon üretmedi. İğneyi oynatan şey, katılımı zorunlu kılan sıralamaydı—önce öz değerlendirme, sonra akran geri bildirimi, sonra YZ eleştirisi—artı bir dönem boyunca ölçülebilir geri bildirim okuryazarlığı farklılıkları üreten üç revizyon döngüsü. Aynı gün içinde çoklu yeniden teslim, öğrencilerin hiç katılıp katılmadığının kullanılabilir bir izidir.

**“Bu öğrencilerin ödediği şey değil.”** O zaman YZ’nin sizden duydukları tek ses olmasına izin vermeyin. Aletin savunulabilir sürümü, öğrencilerin daha fazla geri bildirim anı alırken sizin saatlerinizi yargı yoğun bölümlere—son söz, kalibrasyon ve otoritenizi taşıyan yorumlar—harcadığınız olanıdır. Dikkatsiz dağıtım altında öğrencilerin kaybettiği sizin varlığınız değil, ölçütler, yorumlar ve sonuç arasındaki tutarlılıktır. Tamamlayıcılığı belirtin—sıralama, karşılaştırma, düzenleme, yönetişim—ve itiraz çözülür; iki kaynağı yan yana bırakın ve çözülmez.

## Bu hafta

**1.** Kendi son yorum setinizi dil düzeyinde düzeltmeler ile yargı düzeyinde kararlar olarak ayırın. Yalnızca birinci kategori otomasyon için bir adaydır.

**2.** Bir modele vereceğiniz, rubrike atıflı, adım adım istek metnini yazın ve onu zaten puanladığınız üç taslağa karşı test edin.

**3.** Çıktıyı kendi yorumlarınıza karşı örnekleyin ve modelin jenerik, yanlış ya da pohpohlayıcı olduğu yerleri kaydedin.

**4.** Bir ödevi öz değerlendirme → akran geri bildirimi → YZ eleştirisi olarak aşamalayın ve öğrencilere YZ’nin meydan okumaları beklenen bir taslak görüş olduğunu söyleyin.

**5.** İkinci bir kaynağa ya da ölçütlere karşı bir karşılaştırma isteyin—öğrencilerin üçte birinden azı bunu kendiliğinden yapar.

**6.** Ton ve çıkarma üzerine gerçekten harcayacağınız inceleme süresini bütçeleyin ve serbest bıraktığınızla karşılaştırın.

**7.** Uzman–acemi ayrımını izleyin. Deneyimli meslektaşlar aracın çıktısıyla ilgili sizden daha fazla sorun bildiriyorsa, bu kendi kalibrasyonunuz hakkında bilgidir.

**8.** Hangi sonucun sayılacağına karar verin ve onu ölçün: kullanım oranları, revizyon izleri ve gecikmeli desteksiz performans—memnuniyet puanları değil. Deakin pilotunun yaklaşık %13’ü ve %12’si yararlı bir tabandır ve AICoFE’nin küratörlük takibi öğretim elemanı tarafını modeller: nihai geri bildirimin ne kadarının modelden geldiğini ve ne kadarını değiştirdiğinizi kaydedin.

**Bu sayfanın yeri.** [[feedback]], bütün sistemin—sağlama, döngü, benimseme ve değerlendirme bağlamı—şemsiye kavramıdır ve [[ai-feedback-quality|YZ geri bildirim kalitesi]], üretilen yorumları doğru, yararlı, zamanında ve pedagojik açıdan sağlam yapan şeyi kapsar. Bu sayfa pratik orta noktadır: bu parçaların hangi kombinasyonları ölçekte daha iyi geri bildirim üretir. YZ devredeyken bir notun ne anlama geleceğine ilişkin sorular—yapı ikamesi, doğrulanmış süreç kanıtı, dürüstlük kuralları—[[redesign-assessment-ai-era|YZ çağında değerlendirmeyi yeniden tasarlamaya]] ve [[assessment-validity|değerlendirme geçerliliğine]] aittir, buraya değil.

Yazma öğretimi özel durumu için, YZ bağlamında [[writing-instruction-ai-best-practices|yazma öğretimine ilişkin en iyi uygulamalara]] bakın.
