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
source_updated: "2026-10-28T11:29:19-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Altıncı hafta. Elinizde bir yığın taslak, inandığınız bir değerlendirme ölçütü ve yorumlarınızın üçte birinin göz gezdirilip unutulduğuna dair büyüyen bir kuşku var. Bir meslektaşınız artık bir aracın her taslağa bir saat içinde yorum yazdığından söz ediyor. Bölüm toplantısı bir yanıt bekliyor: bu bir yükseltme mi, yoksa kimsenin okumadığı metni daha hızlı üretmenin bir yolu mu?

Bir meslektaşınıza vereceğiniz kısa yanıt: YZ geri bildirimi yerini kapsama, zamanındalık ve tutarlılıkta, dar bir bant içinde kazanır. Kopya düzenleme ölçeğindeki dil çalışması ve değerlendirme ölçütü yönlendirmeli ilk tur yorumlar otomatikleştirilmeye değer. Erişim, işin ucuz kısmıdır. 1.176 birinci sınıf lisans öğrencisiyle yapılan küme randomize bir deneyde yansıtıcı ve hibrit tasarımlar, gecikmeli ve YZ'siz [[transfer-of-learning|aktarım]] üzerinde doğrudan YZ eleştirisini yendi. 70 öğrenciyle yapılan randomize bir deneme çalışmasında, daha yüksek puan alan YZ geri bildirimi, deneyimli bir öğretmeninkinden daha iyi düzeltmeler üretmedi. Sonucu belirleyen, öğrencinin bir yorumla ne yaptığıdır ve [[feedback-literacy|geri bildirim okuryazarlığı]], kazanç sağlayan öğrencileri kopyalayanlardan ayırır.

## Kısa özet

**1.** Herhangi bir pilot çalışmadan önce neyin başarı sayılacağına karar verin: düzeltme kalitesi ve gecikmeli desteksiz performans, yorumların akıcılığı değil.

**2.** Kendi yorumlarınızı dil düzeyindeki düzeltmeler ve yargı düzeyindeki kararlar olarak ayırın. Yalnızca ilk kategori otomatikleştirme adayıdır.

**3.** Kaynakları sıralayın. Önce öz değerlendirme, ikinci olarak akran geri bildirimi, üçüncü olarak YZ eleştirisi. Yan yana konan iki kaynak edilgen bir alım üretir.

**4.** Değerlendirme ölçütünüzü modele verin ve adım adım akıl yürütmesini sağlayın. Çıplak bir talimat genel geçer çıktı üretir.

**5.** Son mesajı, tonu ve kayıt haline gelen her şeyi insanda tutun.

**6.** Silmeye ve kalibrasyona harcayacağınız saatleri bütçeleyin ve bunları boşa çıkardığınız saatlerle karşılaştırın.

## Herhangi bir pilot çalışmadan önce neyin başarı sayılacağına karar verin

Cazip ölçüt, modelin yazdığının kalitesidir. Aynı zamanda yanıltan ölçüt de odur.

[[farrokhnia-genai-feedback-student-revisions-2026|Farrokhnia ve ark. (2026)]], Farsça argümantatif deneme yazan 70 öğrenciyi üç gruba rastgele atadı. Düşünce zinciri istemi, sıfır atışlı istemden (M = 11,25, p = 0,01) ve deneyimli bir insan öğretmenden (M = 11,20, p = 0,008) anlamlı biçimde daha yüksek puanlanan geri bildirim üretti (M = 12,90). Düşünce zinciri grubu, denemelerini öğretmen geri bildirimi alan gruptan anlamlı biçimde daha fazla düzeltmedi; o grup da benzer kazanımlar elde etti. Daha iyi yorumlar, aynı düzeltmeler. Başarı ölçütünüz yorum kalitesiyse, bu çalışma bir zafer gibi okunur. Ölçüt denemede neyin değiştiğiyse, zafer gibi okunmaz.

Kötü giden bir pilot çalışmayı pohpohlayan iki sinyal daha var, bunları önceden sabitleyin. Biri öğrenci memnuniyetidir. [[tubino-adachi-ai-automated-feedback-literacy|Tubino ve Adachi'nin (2022)]] bildirdiği üniversite genelindeki Deakin pilotunda olumlu ortalama puanlar, öğrencilerin işaret ettiği hatalarla birlikte var oldu; yani gülen yüzlü bir anket doğruluk kanıtı değildir. Diğeri kullanımdır. Deakin aracı isteğe bağlıydı ve neredeyse 4.000 öğrencinin erişimi olmasına karşın kullanım lisans öğrencilerinin yaklaşık %13'ü ve lisansüstü öğrencilerin %12'si düzeyinde kaldı. Proaktif ve yüksek başarılı öğrenciler onu daha çok kullandı. Bir aracı erişime açmanın getirisi budur.

Ayakta kalan çıktı ölçüsü, düzeltme kalitesi artı YZ olmadan gecikmeli performanstır. Aynı gün içindeki çok sayıda yeniden teslim, öğrencinin hiç ilgilenip ilgilenmediğine dair kullanılabilir bir izdir. Bir şeyin öğrenildiğinin kanıtı değildir.

## Otomatikleştirmeden önce yorumlarınızı ayırın

Son yorum setinizi alın ve ikiye bölün: cümlelere yapılan düzeltmeler ve düşünmeye dair kararlar. Bu ayrım neyi otomatikleştireceğinizi söyler ve satıcıların ima ettiğinden dardır.

Deakin pilotu 2021'de FeedbackFruits'ün YZ otomatik geri bildirim aracıyla 29 birimde ve neredeyse 4.000 öğrenciyle yürütüldü. Araç mikro düzeydeki metin özellikleri üzerinde çalışır: cümle uzunluğu, noktalama, dilbilgisi, metin yapısı. Bu, eğitmenin parametreleri belirlediği, öğrencinin aracı bağımsız kullandığı ve geri bildirimin eyleme dönüştürülebilecek kadar erken geldiği kopya düzenleme aşamasını destekler. Ölçeklenen şey model değil, iş bölümüdür.

Yargı düzeyindeki yorumlar, arıza kiplerinin bulunduğu yerdir. [[learner-centered-feedback-ai|Aldino ve ark. (2026)]] 21 yükseköğretim öğretmeninden eğitmen tarafındaki sorunları topladı: tutarsız ton (n = 7), olası yanlış bilgi (n = 5) ve güven sorunları (n = 5). Düzeltme emekleri içerik eklemeye değil, abartılı övgüleri ve genel geçer önerileri silmeye gitti. O liste sizin inceleme işinizdir ve saatler oraya gider.

## Kaynakları üst üste yığmak yerine sıralayın

En güçlü tasarım kanıtı, çok merkezli, küme randomize ve boylamsal bir alan deneyinden geliyor: 4 üniversitede ve 3 [[stem-education|fen]] alanında 48 şubedeki 1.176 birinci sınıf lisans öğrencisi, şube düzeyinde yalnızca akran, doğrudan GenAI, yansıtıcı GenAI ve hibrit koşullara rastgele atandı ([[genai-feedback-design-multisite-experiment|Ateş, 2026]]).

Yansıtıcı koşul, YZ eleştirisinden önce öz değerlendirme gerektiriyordu. Hibrit koşul ise önce öz değerlendirmeyi, sonra akran geri bildirimini, sonra GenAI eleştirisini uyguladı. Hibrit, en yüksek argüman kalitesi kazanımlarını ve kavramsal öğrenmede en açık avantajı üretti. Yansıtıcı ve hibrit tasarımların ikisi de doğrudan GenAI'den daha güçlü geri bildirim alımı ve daha fazla [[self-regulated-learning|öz düzenlemeli öğrenme]] üretti ve ikisi de gecikmeli ve YZ'siz aktarımda onu yendi. Doğrudan GenAI, anlık argüman kalitesini akran geri bildiriminin üzerine çıkardı; sahip olduğu avantaj budur ve bunu daha zayıf aktarımla yaptı.

Mekanizma, sıralamanın araçtan neden daha önemli olduğunu açıklar. Doğrudan eleştiri edilgen alımı davet eder: öğrenci bir hüküm okur ve uygular. Yansıtıcı ve hibrit tasarımlar öğrenciyi yorumu yorumlamaya, ölçütlerle karşılaştırmaya, ilgisini yargılamaya ve ancak ondan sonra düzeltmeye zorlar. Eğitsel değer, YZ erişimine değil, geri bildirim ortamının düzeltme sırasında [[agency|öğrenci özerkliğini]] ve [[evaluative-judgment|değerlendirme yargısını]] koruyup korumadığına bağlıdır.

Akran geri bildirimi sıralamada kendi yerini kazanır. [[scaffolding-srl-feedback-genai-human-peers|Gu, Chen ve Yan (2026)]], iki paralel İngilizce sınıfını (N = 118, Çin'de birinci sınıf lisans öğrencileri; GenAI n = 56, akran n = 62) bir dönem boyunca üç öz değerlendirme döngüsünden geçirdi. GenAI iskelesi, geri bildirim okuryazarlığını insan akran incelemesine göre hafif ama anlamlı biçimde iyileştirdi (ANCOVA p = 0,049, ηp² = 0,03). GenAI öğrencileri istemleri yinelemeli olarak inceltti ve yanlış çıktıyı doğruladı ya da ona meydan okudu. Akran grubundaki öğrenciler kaynakları toplumsal kolaylığa göre seçti ve değerlendirme yargıları arkadaşlık yanlılığı tarafından çarpıtıldı. Akran incelemesi, hedef kitle farkındalığı için ayrı bir değer korudu; yazarların bir yerine koyma değil, anonim akran geri bildirimi içeren çok aşamalı tasarımlar önermesinin nedeni budur.

Gu ve arkadaşlarının avantajı küçüktü ve yazarlar bunu gerçek ama tek başına dönüştürücü olmayan bir şey olarak okudu. Destekleyici işi öğretmen iskelesi, istem kılavuzları ve çalışma kâğıtları yaptı.

## Modele bir değerlendirme ölçütü verin, sonra adımlarını göstermesini sağlayın

Değerlendirme ölçütüne dayalı üretim, otomatikleştirilebilir kısımdır.

Farrokhnia ve arkadaşlarının kalite kazanımı, modele bir argümantasyon ölçütüne göre adım adım değerlendirme yaptıran bir düşünce zinciri isteminden geldi, geri bildirim vermeye dair çıplak bir talimattan değil. Gu ve ark. GenAI grubuna önceden eğitilmiş ölçütler ve istem kılavuzlarıyla birlikte ChatGPT-4o verdi; çıktıyı belirtilen ölçütlere göre denetlenebilir kılan buydu. Her iki durumda da ölçütlerinizin sisteme girdiği yer istemdir ve modelin bunları uygulayıp uygulamadığını görmenizi sağlayan şey akıl yürütme izidir.

[[zhan-boud-dawson-genai-feedback-engagement|Zhan, Boud, Dawson ve Yan (2025)]], istem kalitesini tüm sürecin menteşesi yapar. Belirsiz istemler genel geçer ve işe yaramaz çıktı verir; üretilen yorumlar halüsinasyonlu, yanlı olabilir ya da üst üste binebilir, bu da değerlendirme yargısını okura geri iter. Kalibrasyon daha da keskindir. Farrokhnia ve arkadaşlarında GenAI geri bildiriminin kalitesi, öğrencinin ilk taslağının gücüyle anlamlı biçimde ilişkiliydi; öğretmen geri bildiriminin kalitesi ise değildi. Öğretmen daha tutarlı kalibre etti. Hacim ölçeklenir. Kalibrasyon ölçeklenmez.

## Son sözü ve kaydı insanda tutun

[[becerra-aicofe-feedback-2026|Becerra, Palma ve Cobos (2026)]], bağımsız taslak yorumları üretmek için ölçüt puanları ve nitel gözlemler üzerinde üç ayrı ince ayarlı modeli (GPT-4.1-mini, Gemini 2.5 Flash, Llama 3.1) çalıştıran AICoFE'yi betimliyor. Eğitmen daha sonra hangi modelin neyi katkıladığını gösteren bir açıklamayla cümleleri veya paragrafları seçerek son mesajı oluşturuyor. Taslağı model yazar. Eğitmen teslim eder ve teslim edilen şey, taslağı okuyan tek bir kişi tarafından imzalanır.

Aldino ve ark. sıradan uygulamada aynı yardım-sonra-doğrula örüntüsünü buluyor. Makine öğrenmesi bileşeni en sık "Öğrenme Hedefini Karşılama"yı eksik olarak işaretledi (21 öğretmenin 20'si bunu atlamıştı; 16'sı işareti kabul etti) ve "Öğrenci-Öğretmen İlişkisi"ni işaretledi (14'ü atlamıştı; 12'si kabul etti). Öğretmenler her öneriye mesleki yargıyla karar verdi; onları döngüye sokmanın anlamı budur.

Aldino ve arkadaşlarının 21 öğretmeninden 12'si ayrıca cümle düzeyinde düzeltmeler yaptı ve baskın örüntü tonu kalibre etmekti: övgüyü aşağı çekmek (f = 11), önerileri kaldırmak (f = 9), teşviki kaldırmak (f = 8). Düzeltmeler ilişkisel boyutta, özellikle Öğrenci-Öğretmen İlişkisi'nde yoğunlaştı (f = 24). Özgünlüğü ve mesleki sesi koruyorlardı ve o iş otomatikleşmez.

## Öğrencilere yorumu okumayı öğretin

Geri bildirim okuryazarlığı bir ön koşuldur ve eşit dağılmamıştır.

[[hawkins-feedback-literacy-ai-essay-writing|Hawkins, Taylor-Griffiths ve Lodge (2026)]], 32 psikoloji öğrencisine ChatGPT'ye sınırsız erişimle ekran kaydı alınan 25 dakikalık bir deneme görevi yaptırdı, sonra kaydı video uyarımlı bir görüşmede yeniden izletti. Deneme notunun tek anlamlı olumlu öngörücüsü geri bildirim okuryazarlığıydı (β = 0,46, p = 0,017). GenAI kullanım sıklığı, [[trust|kaynağın güvenilirliği]] ve [[prior-knowledge|önceki bilgi]] performansı öngörmedi; [[feedback-futures-genai|Zhan, Wood, Carless ve Yan (2026)]] da özel sayı başyazılarında bu noktayı yapıyor. Öğrencilerin üçte birinden azı YZ çıktısını başka bir internet kaynağıyla karşılaştırdı. Yarısı [[academic-integrity|akademik dürüstlük]] için ya da denemeyi kendi sözcükleriyle istedikleri için bilinçli YZ kaçınması bildirdi. Çoğu görev düzeyinde geri bildirim istedi ve bu, başka görevlere zayıf aktarılır.

Aşırı uçlar, Zhan ve arkadaşlarının betimlediği IELTS yazarları çiftinde görünür. Düşük okuryazarlıklı bir öğrenci belirsiz bir istem yazdı, genel geçer geri bildirim aldı, ona güvendi ya da fazla kopyaladı ve yüzeysel biçimde ilgilendi. Yüksek okuryazarlıklı bir öğrenci ölçütlere gönderme yapan bir istem yazdı, takip etti, kaynakları çapraz kontrol etti ve düzeltmeleri izledi. Fark, araç erişimi değil öğretim ve alışkanlıktı.

Öğrencilere model yorumlarının halüsinasyonlu, yanlı veya üst üste binen olabileceğini ve düzeltmenin öğrenciye ait olduğunu doğrudan söyleyin. Çıktıyı kopyalanacak bir yanıt değil, yargılanacak bir taslak görüş olarak çerçeveleyin. Sonra karşılaştırmayı isteyin, çünkü öğrencilerin üçte birinden azı bunu kendiliğinden yapar.

## Eğitmenler bu konuda neyi yanlış yapıyor

Daha çok yorum daha çok geri bildirim demektir. Yorum üretmek ucuz, özümsemek pahalıdır ve kısıt döngünün öğrenci tarafında durur. Farrokhnia ve arkadaşlarının daha yüksek puanlanan YZ yorumları, öğretmen yorumlarından daha fazla düzeltme üretmedi.

Daha iyi bir model genel geçer çıktıyı düzeltir. Deakin aracının arızaları kapsam arızalarıydı: cümle düzeyindeki özellikler, dar bir kopya düzenleme bandı. Zhan ve ark. çözümü istemde, ölçütte veya insanda konumlandırıyor, daha büyük bir modelde değil. IELTS yazarları çifti bunun gösterimidir; aynı araç, farklı alışkanlıklar, farklı sonuçlar.

Aracı erişime açmak müdahaledir. Araç isteğe bağlıyken kullanım lisans öğrencilerinin yaklaşık %13'ü ve lisansüstü öğrencilerin %12'si düzeyinde kaldı. Tasarım sorusunun geri kalanı, diğer %87 için ne olduğudur.

Zaman tasarrufu otomatiktir. YZ geri bildirim aracının onlara ne verdiği sorulan 21 öğretmen, zaman tasarrufunu ancak seyrek olarak saydı (n = 2). Yansıtmayı (n = 14), iyileşmiş dil ve yapıyı (n = 11) ve eksik bileşenlerin belirlenmesini (n = 10) çok daha sık saydılar. Düzeltme emeklerine düzenleme (f = 32) ve kaldırma (f = 27) egemen oldu, ekleme seyrekti (f = 8). Ortaya çıkan şey bir taslak ve tanısal bir istemdir. Ortaya çıkan şey aynı zamanda inceleme, kalibrasyon ve doğrulama işidir. [[ai-save-instructor-time|İş yükü sorusu]], en sık üzerine vaat verilen sorudur ve GenAI öğretmen emeğini ortadan kaldırmak yerine yeniden dağıtır.

Memnuniyet puanları yorumların doğru olduğunu söyler. Deakin pilotunda olumlu ortalama puanlar, öğrencilerin işaret ettiği hatalarla birlikte var oldu. Çıktıyı aynı taslaklara dair kendi okumanızla karşılaştırarak örnekleyin ve modelin genel geçer, yanlış veya pohpohlayıcı olduğu yerleri kaydedin.

## Size geri dönecek olanlar

**"YZ geri bildirimi kişisel değil."** Çoğu zaman doğru ve son sözü insanda tutmanın nedeni de bu. AICoFE, bir öğrencinin alması gerekenin genel geçer model metni olmaması yüzünden var: eğitmen son mesajı seçer, düzenler ve imzalar. Aldino ve arkadaşlarındaki 21 öğretmen de aynı nedenle tonu yeniden yazdı. Bu tasarımda kişiselleştirme sizin işiniz ve model hazırlık işini yapıyor.

**"Öğrencilerim geri bildirimi zaten okumaz."** Umduğumuzdan az okuyorlar ve kanıt, çözümün hacim değil tasarım olduğunu söylüyor. Deakin pilotunda alım yaklaşık %13 ve %12 düzeyindeydi. Farrokhnia ve arkadaşlarının daha yüksek puanlanan yorumları ek düzeltme üretmedi. İğneyi hareket ettiren şey, ilgiyi zorunlu kılan sıralamaydı: öz değerlendirme, sonra akran geri bildirimi, sonra YZ eleştirisi; bir de bir dönem boyunca ölçülebilir geri bildirim okuryazarlığı farkları üreten üç düzeltme döngüsü.

**"Öğrenciler bunun için para ödemiyor."** O zaman YZ'nin sizden duydukları tek ses olmasını engelleyin. Savunulabilir sürüm, öğrencilere daha çok geri bildirim anı verirken sizin saatlerinizi yargı yoğun kısımlara harcamanızdır: son söz, kalibrasyon, otoritenizi taşıyan yorumlar. Dikkatsiz uygulamada öğrencilerin kaybettiği şey, ölçütler, yorumlar ve sonuç arasındaki tutarlılıktır. Tamamlayıcılığı sıralama, karşılaştırma, düzenleme ve yönetişim yoluyla belirtin, itiraz gücünü yitirir. İki kaynağı yan yana bırakın, yitirmez.

**"Modelin yazdığı her şeyi inceleyecek zamanım yok."** O zaman her şeyi incelemeyin. Hataların yakalanmasının ucuz olduğu bandı, cümle düzeyindeki dil çalışmasını otomatikleştirin ve yargı düzeyindeki çıktıyı zaten notlandırdığınız taslaklara karşı örnekleyin. Aldino sayıları neye bakacağınızı söylüyor: ton, yanlış bilgi, abartılı övgü, üst üste binme.

## Bu hafta ne yapmalı

**1.** Kendi son yorum setinizi dil düzeyindeki düzeltmeler ve yargı düzeyindeki kararlar olarak ayırın ve her yığını sayın.

**2.** Bir modele vereceğiniz ölçüt temelli ve adım adım istemi yazın ve zaten notlandırdığınız üç taslak üzerinde test edin.

**3.** Çıktıyı kendi yorumlarınızla karşılaştırarak örnekleyin ve modelin genel geçer, yanlış veya pohpohlayıcı olduğu yerleri kaydedin.

**4.** Bir ödevi öz değerlendirme, sonra akran geri bildirimi, sonra YZ eleştirisi olarak aşamalandırın ve öğrencilere YZ'nin meydan okumaları beklenen bir taslak görüş olduğunu söyleyin.

**5.** İkinci bir kaynağa ya da ölçütlere karşı bir karşılaştırma isteyin, çünkü öğrencilerin üçte birinden azı bunu kendiliğinden yapar.

**6.** Son geri bildirimin ne kadarının modelden geldiğini ve ne kadarını değiştirdiğinizi kaydedin. AICoFE'nin derleme izlemesi bu kayıt için modeldir.

**7.** Uzman-acemi ayrımını izleyin. Beş yıldan fazla deneyimi olan eğitmenler, aracın çıktısıyla ilgili olarak daha az deneyimli meslektaşlarından daha çok sorun bildirdi; daha az deneyimli meslektaşları ise iskeleyi değerli buldu. Deneyimli meslektaşlarınız sizden daha çok arıza görüyorsa, bu kendi kalibrasyonunuz hakkında bilgidir.

## Bundan sonra nereye gidilir

[[feedback]] tüm sistem için şemsiye kavramdır: sunum, döngü, alım ve değerlendirme bağlamı. [[ai-feedback-quality|YZ geri bildirim kalitesi]] üretilen yorumları doğru, yararlı, zamanında ve pedagojik olarak sağlam kılan şeyi kapsar; bu sayfa ise pratik orta kısımdır: bu parçaların hangi bileşimlerinin ölçekte daha iyi geri bildirim ürettiği.

YZ devreye girdikten sonra bir notun ne anlama gelmesi gerektiğine dair sorular, yapı ikamesi, kimliği doğrulanmış süreç kanıtı ve dürüstlük kuralları dahil, buraya değil [[redesign-assessment-ai-era|YZ çağında değerlendirmeyi yeniden tasarlama]] ve [[assessment-validity|Değerlendirme Geçerliliği]] sayfalarına aittir. Yazma öğretiminin özel durumu için [[writing-instruction-ai-best-practices|YZ bağlamında yazma öğretimi için en iyi uygulamalar]] sayfasına bakın.
