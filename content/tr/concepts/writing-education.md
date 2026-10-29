---
connected_resources: [clarity, writing-rhetoric-studies-in-the-loop]
title: Yazma
created: "2026-10-14T21:40:00-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
pedagogy: [metacognition]
assessment: [ai-feedback-quality, automated-essay-scoring, peer-assessment]
discipline: [language learning, writing education]
level: [higher ed]
connected_faqs: [writing-instruction-ai-best-practices, developing-ai-tutor]
confidence: high
translation_of: concepts/writing-education
source_updated: "2026-10-06T02:05:50-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Yazma** — yazma öğretiminde, [[assessment]] değerlendirmesinde, [[feedback]] geri bildiriminde YZ araçlarının kullanımı ve [[generative-ai|üretici YZ]]'nin yazma sürecinin kendisini nasıl yeniden şekillendirdiğinin incelenmesi. Yazma eğitimi, YZ'nin en çok etkilediği alanlardan biridir, çünkü LLM'ler yazma öğretiminin tam merkezinde durduğu etkinliklerde — metin üretimi, revizyon ve değerlendirme — üstün başarı gösterir. Bu alandaki [[research-methods-aied|araştırma]], [[automated-assessment|otomatik puanlamadan]] YZ geri bildirim kalitesine, yazma süreci desteğinden ikinci dil yazmaya, akademik dürüstlükten ve YZ'nin yazmanın ve yazar olmanın anlamını nasıl değiştirdiğine ilişkin daha derin soruya kadar uzanır.

## Ele Alınması Gereken Sorular

- Sayfanın merkezi iddiası, yazmanın yalnızca bir çıktı değil, bilişsel, sosyal ve retorik bir süreç olduğu — ve YZ'nin, yazmayı bir öğrenme etkinliği yapan zihinsel işin ta kendisini yerinden edebileceğidir. Yazarken, bitmiş bir YZ üretimi paragrafın silip attığı, düşüncenizde ne olur?
- Yaygın bir çerçeveleme "YZ'nin bir araç olarak ele alınması" veya karşı kutupta "yazarlığa yönelik bir tehdit olarak YZ"dir. Sayfa üçüncü bir görüş sunar: failliğin dağıldığı insan-YZ iç içeliği olarak yazma. Bu çerçevelemelerden hangisi YZ ile veya YZ'siz yazma deneyiminize uyuyor — ve her çerçeveleme nasıl öğretmeniz gerektiği konusunda ne ima ediyor?
- Araştırma, yazmanın *daha derin* katmanlarını — akıl yürütmeyi ve argümantif mantığı — devretmenin, dilbilgisi gibi yüzeysel katmanları devretmekten bağımsız yazmanıza daha fazla zarar verdiğini buldu. YZ destekli son yazınızı düşünün. Hangi katmanı gerçekte devrettiniz ve bu, şu anda kendi başınıza neler yapabileceğiniz konusunda ne öngörüyor?
- Sayfa, YZ yazma geri bildiriminin dile nötr olmadığı konusunda uyarıyor: geri bildirimi bir öğrencinin ırkı, dili veya engeliyle kişiselleştirmek onu kalıpla uyumlu biçimlerde değiştirebilir — aşırı övmek veya eleştiriyi esirgemek gibi. "Kişiselleştirilmiş" YZ geri bildirimi aldıysanız veya verdinizse, bir aracın bazı öğrenenlere karşı eleştirisini yumuşattığını nasıl tespit ederdiniz?
- Buradaki tasarım rehberliği "yazıyı yazmak değil, koçluk etmek" — YZ'nin soru sormaları ve taslakları eleştirmesini sağlamak, ancak öğrencinin önce düz metni üretmesini şart koşmak. YZ müdahale etmeden önce öğrenenin taslak çıkarmasına izin vermek, taslağı yazan bir aracın yapamayacağı biçimlerde mülkiyeti ve yargıyı neden koruyabilir?
- Bir bulgu: öğrenciler sık sık YZ kullanımını rasyonalize etmek için "sorun değil, çünkü..." derler ve konuyu intihal polisliğinden etik ve YZ okuryazarlığına kaydırır. Bir yazma kursu tasarlıyor olsaydınız, tespit veya cezaya bel bağlamak yerine YZ konusunda dürüstlüğü ve [[ethics|etik]] yargıyı nasıl kursun içine inşa ederdiniz?

## Giriş

Yazma yalnızca bir çıktı değil, bilişsel, sosyal ve retorik bir süreçtir. YZ'nin yazma eğitimi üzerindeki etkisinin bu kadar önemli ve tartışmalı olmasının nedeni budur: YZ, öğrencilerin taslak çıkarmalarına, revize etmelerine ve başka türlü alamayacakları geri bildirim almalarına yardımcı olan bir [[scaffolding|iskele]] olabilir; ancak yazmayı bir öğrenme etkinliği yapan [[cognitive-offloading|bilişsel işi]] — ve insan okuyucu kitlesini — yerinden de edebilir. Bilgi tabanının araştırması, yazmada YZ'yi istikrarlı biçimde yazmanın sosyal ve bilişsel süreçlerinin yerine geçen bir şey değil, *insan merkezli bir tamamlayıcı* olarak çerçeveliyor. Odağın özellikle **İngilizce** olduğu yerlerde — [[english-education|Akademik Amaçlar için İngilizce (EAP)]] ve İngilizce dil [[teacher-role|öğretimi]] (EFL/ESL/L2) — İngilizce'ye özgü ve akademik kayıt araştırmalarını genel yazma ve genel dil öğreniminden ayıran ayrı [[english-education]] kavram sayfasına bakın.

### YZ, yazma eğitiminde araştırmada nasıl görünür

- **Otomatik deneme puanlaması:** [[automated-essay-scoring]] sistemleri, [[choi-anchor-aes-prompting-2025|çıpa temelli AES]] ve [[aiawe-automated-writing-evaluation|AIAWE]] gibi, öğrenci yazılarını ölçekte değerlendirir ve [[assessment-validity|yapı geçerliliği]] ile yazmanın ölçülebilir özelliklere indirgenmesi sorularını gündeme getirir. İspanyolca kısa argümantif yazmalarda (yaklaşık 150–200 sözcük), YZ puanlama uyumu rubrik boyutuna göre keskin biçimde değişir ([[human-in-the-loop-ai-scoring-national-assessment-2026|Curi ve ark., 2026]]): yapı ve kayıt odaklı maddeler — giriş, sonuç, kayıt, isimsel uyum, özne–yüklem uyumu — 2025 baskısında insan değerlendiricileriyle orta düzeyde şans düzeltmeli uyuma ulaşırken, mikro düzeydeki dilbilgisel maddeler (söz dağarcığı, sözdizimi, noktalama, bağlaçlar, argümantasyon) adil ile zayıf aralığında kaldı. Bu durum, LLM desteğinin en savunulabilir olduğu yerin makro düzeydeki söylem özellikleri olduğunu ve düşük düzeydeki dil kurallarının deterministik araçları veya [[human-in-the-loop-ai|insan gözden geçirmesini]] koruması gerektiğini öne sürüyor.

- **Daha büyük modeller değil, daha fazla örnek puanlayın.** 3–6. sınıf evrensel tarama çalışmasında, LLM karşılaştırmalı yargı puanları araştırmacı rubrikleriyle yakınsadı (r = ,59–,73) ve üç tarama dalgasını ortalaması ölçüt geçerliliğini yükseltti (ELA ölçeği için β = ,68–,74, yeterlilik için AUC = ,82–,86); oysa daha büyük model kapasitesi veya maliyet pek az şey kattı ([[llm-comparative-judgment-writing-screening-2026|Mercer ve Reed (2026)]]).

Uyum, puanlayanın değil derlemin bir özelliğidir: [[automated-scoring-marketing-posts-agreement-2026|Li (2026)]], 60 öğrenci pazarlama gönderisini deterministik kurallarla, bir [[llm|LLM]] ile ve eşit ağırlıklı bir melezle puanladı — LLM, ICC(2,1) = ,435 ile önde gitti; melezdeki ,266 ise kuralların olumsuz yanlılığını korudu — ve 15 düşük kaliteli çıpa eklemek LLM'yi ,846'ya yükseltti.
- **Yazma geri bildirimi:** [[ai-feedback-quality|YZ geri bildirim kalitesi]] araştırması ([[genai-teacher-feedback-comparison|üretici YZ ile öğretmen geri bildiriminin karşılaştırılması]], [[care-full-feedback-genai|özenli geri bildirim]], [[repeated-ai-writing-feedback-semester|yinelenen YZ geri bildirimi]]), YZ geri bildiriminin yazmayı iyileştirip iyileştirmediğini ve insan geri bildirimiyle nasıl karşılaştırıldığını inceler. PAIRR modeli ([[pairr-ai-peer-review-2025|Akran ve YZ Değerlendirmesi + Yansıtma]]), YZ'yi [[peer-assessment]] ile birleştirir ve YZ geri bildiriminin insan merkezli bir süreçte en yararlı olduğunu bulur. 61 Çinli L2 yazarıyla yapılan 8 haftalık bir yarı deneysel tasarım ([[teacher-vs-ai-peer-feedback-l2-writing-2026|Tang ve ark., 2026]]), bu insan merkezli iddiaya somut bir biçim verir: öğretmen geri bildirimi çok daha fazla madde sunar (ilk görevde 185'e karşı 316) ve örgütlenme ile argümantasyona yeniden öncelik verir; ancak revizyon sonrası avantajı, ikinci bir görev yapısal değişim talep ettiğinde 4,06'dan 2,73 puana geriler; oysa [[peer-assessment|YZ destekli akran geri bildirimi]] daha dar ve daha istikrarlı bir odak korur ve hafifçe öne geçer (3,89 puan; ikinci görevde revizyon ortalaması denetimin 88,35'ine karşı 89,82 — anlamlılığa ulaşmayan küçük bir fark). Hiçbir koşul sözdizim karmaşıklığını hareket ettirmedi; bu nedenle yazarlar melez bir "YZ-Akran-Öğretmen" işbölümü savunur: YZ hata işaretleme ve içerik rehberliği için, akranlar revizyon pazarlığı için, öğretmenler karmaşık sözdizimi ve argümantasyon için.
- **YZ geri bildirimi, yazma aşamalarına öğretmenlerin yaptığı gibi uyum sağlamaz.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa ve ark., 2026)]], öğretmenin taslak aşamaları arasında beş geri bildirim odak türünde anlamlı biçimde değiştiğini buldu — Övgü'nün başlangıçtaki %26,9'dan son taslaklardaki %84,9'a yükseldiğini — oysa en yakın model üç türde, en küçüğü hiçbir türde kımıldamadı ve hiçbir model, öğretmenin yüksek ve düşük performanslı öğrencileri ayırt etmesini yeniden üretmedi.

- **Revizyon ve diyalojik konumlanma:** Yazma geri bildirimi araştırmalarının çoğunun bir revizyonun metni iyileştirip iyileştirmediğini sorduğu yerde, [[zhao-ji-appraisal-human-ai-revisions-2026|Zhao ve Ji (2026)]] revize edilmiş metnin ne tür bir duruş aldığını sorar. Değerlendirme Kuramı ile 168 EFL argümantif denemesini kodlayarak — ilk taslaklar, [[peer-assessment|akran geri bildirimi]] sonrası revizyonlar ve aynı taslakların ChatGPT-4 revizyonları — üç koşulun ne kadar Etkileşim dili kullandıkları bakımından istatistiksel olarak ayırt edilemez olduğunu, ancak farklı biçimde yapılandırıldığını buldular: akran geri bildirimi revizyonları daha daralıcı hale gelirken (daha fazla Karşıtlık ve Onaylama, daha az Eğlendirme), YZ revizyonları ise daha güçlü karşı-iddialamayla süregelen çekinceselliği birleştiren daha dengeli bir Sözleşme/Genişletme karışımı korudu. Onların okumasına göre bir YZ revizyonu, model bir cevaptan çok öğrencilerin kendi revizyonlarına karşı karşılaştırdıkları bir tezat metin olarak en yararlıdır ve argümantasyon üzerine [[ai-feedback-quality|YZ geri bildirimi]] düz metni iyileştirirken yazarın diyalojik alanını sessiz sedasız kapatabilir — mevcut hiçbir rubriğin yakalamadığı bir boyut.
- **Yazma süreci desteği ve faillik:** [[agency-gap-ai-writing|Faillik boşluğu araştırması]] ve [[ai-writing-support-stage-ownership-2026|aşama mülkiyeti araştırması]], YZ'nin planlamadan revizyona yazma sürecini nasıl değiştirdiğini ve YZ farklı aşamalarda katıldığında öğrencilerin [[agency]] failliğinin nasıl etkilendiğini inceler.
- **Posthümanist bakış açıları:** [[posthumanist-ai-literacy-2025|YZ okuryazarlığına posthümanist bir yaklaşım]], yazmayı [[agency]] failliğin dağıldığı bir insan-YZ iç içeliği olarak yeniden çerçeveler; YZ'nin eleştirelsiz insanlaştırılmasını ve yalnızca bir araç olarak göz ardı edilmesini birlikte meydan okuyarak, YZ okuryazarlığına ilişkin ilişkisel, işlemsel olmayan bir görüş sunar.
- **L2 / [[multilingual-learning|çok dilli]] yazma:** [[self-referential-l2-writing-llm-assessment|L2 yazma değerlendirmesi]], [[genai-linguistic-diversity-academic-writing|dilsel çeşitlilik araştırması]] ve [[ai-writing-support-stage-ownership-2026|aşama mülkiyeti araştırması]], YZ'nin ikinci dil ve çok dilli yazarları nasıl desteklediğini (veya kısıtladığını), Standart Akademik İngilizce normlarının güçlendirilme riski dahil, ele alır. Bilgi tabanının en genç L2 örneği, Doğu Çin'deki 301 5. ve 6. sınıf öğrencisiyle dokuz haftalık üretici YZ destekli bir görüş yazma programından gelir ([[genai-writing-program-primary-l2-motivation-engagement|Lu ve ark., 2026]]); program ideal L2 yazma öz yeterliliğini ve akademik canlılığını yükseltirken rubrikle puanlanan dil kullanımını iyileştirdi, ancak örgütlenme ve toplam puanları değişmeden bıraktı — YZ desteği, yazma yeteneğinin bütünü olmaktan çok yazmanın belirli boyutlarını hareket ettirdi.
- **Kişiselleştirilmiş geri bildirimde yanlılık (İşaretli Pedagojiler):** [[marked-pedagogies-linguistic-bias-writing-feedback|Tan ve ark. (2026)]], [[llm]] yazma geri bildirim araçlarının dile nötr olmadığını gösterir: geri bildirimi bir öğrencinin ırkı, etnik kökeni, ELL belirtesi, öğrenme engeli, başarımı veya motivasyonuyla kişiselleştirmek, geri bildirimi sistematik biçimde kalıpla uyumlu yollara kaydırır — deneme özdeş olduğunda bile ırk, dil veya engelle işaretlenmiş öğrenciler için olumlu geri bildirim yanlılığı ve geri bildirim esirgeme yanlılığı (aşırı övgü kullanımı, daha az özsel eleştiri, sınırlı yetenek varsayımları) dahil. Bu durum, "[[personalized-learning|kişiselleştirme]]"nin kendisini, yazma geri bildirim araçlarının denetlemesi ve kontrol etmesi gereken bir yanlılık vektörü haline getirir.
- **Akademik dürüstlük:** Anket kanıtı polisliğe dayalı çerçevelemeyi doğrudan karmaşıklaştırır: 504 sosyoloji öğrencisi arasında ([[student-genai-use-views-writing|Kuznetsov ve ark., 2026]]), %65'i üretici YZ'yi kurs işlerinde kullanmıştı ancak yalnızca %3'ü ödev metni üretmek ve %2'si eksiksiz bir taslak çıkarmak için kullanmıştı; akademik bir suç korkusu ikinci en yaygın kaygıydı (%28) ve yaklaşık dörtte biri hiç rehberlik (%19) veya bulanık bulduğu rehberlik bildirdi. Bu kanıta göre yazma eğitimi sorunu yaygın metin üretimi değil, izin verilen kullanıma ilişkin belirsizliktir. [[nash-preservice-teachers-classroom-ai-policies-2026|Nash ve Burriss (2026)]], bu tür belirsizliğin sınıf düzeyinde nasıl üretildiğini gösterir. 27 [[teacher-education|öğretmen adayı]] İngilizce dil sanatları öğretmeninin kendi sınıf [[educational-policy-ai|YZ politikalarını]] kodlayarak, 27'nin 26'sının bazı [[generative-ai|üretici YZ]] kullanımlarına izin verdiğini ancak bunu ezici çoğunlukla öğretmenin belirttiği koşullarla sınırladığını, 27'nin 22'sinin fikir geliştirme ve beyin fırtınası için YZ'ye izin verirken cümle, paragraf veya ödev metinlerinin YZ ile üretimini yasakladığını buldular. Sınırlar nadiren uygulanabilir hale getirildi — bir katılımcı "düşüncenizi başlatmak" için YZ'ye izin verdi ve çizginin nerede çekilmesi gerektiğini söylemeden "sınırın burada çekilmesi gerektiğini" ilan etti — ve birçok politika aynı anda YZ metninin teslimini yasaklarken öğrencileri teslim ettikleri YZ metninden sorumlu tuttu; uyulmasını imkânsız kılan bir çelişki. 27 politikanın 22'si okuma konusuna ilişkin tamamen sessiz kaldı ve YZ destekli kavrayama işini hiçbir rehberliğe terk etti.
- **Politika beş merkezde ayrışır.** 20 lisans öğrencisiyle görüşen Kim ve meslektaşları, YZ politikasının beş ayrı merkezini — öğretim üyesi niyeti, resmi politika, öğrenci yorumu, öz politika ve uygulama — konumlandırır ve kuralların bir merkezde davranışı nadiren şekillendirdiğini açıklayan, çoğunlukla sonradan ve fırsatçı biçimde oluşan 23 rasyonalizasyonu kataloglar ([[student-rationalization-ai-writing|Kim ve ark., 2026]]).
- **Uyum, yok olan sorgulamayı maskeleyebilir (akademik silme).** 49 eğitimci anlatısından, [[academic-erasure-complexity-ai-writing-2026|Nwagboso ve Atuba (2026)]], her yüzeysel ölçütü karşılarken argümanın epistemik emeğini baypas eden akıcılık olarak *akademik silme*yi adlandırır ve onun itici gücünü, parlaklığı ödüllendiren rubriklerin YZ kullanımını bir suçtan çok rasyonel bir yanıt haline getirdiği değerlendirme kültüründe izler.

### Yazma düşünmektir


Yazma bilişsel bir süreç olduğu için, yazmada YZ araştırması [[cognitive-offloading]] (YZ yazma desteği düşünmeyi baypas mı ediyor?), [[metacognition]] (YZ geri bildirimi [[self-assessment]] öz değerlendirmeyi iyileştiriyor mu?), [[self-regulated-learning]] (öğrenciler YZ geri bildirim kullanımlarını düzenliyor mu?) ve [[ai-literacy]] (öğrenciler YZ üretilmiş yazıyı eleştirel biçimde değerlendirebiliyor mu?) ile bağlantılıdır. [[critical-thinking-genai-scaffolding|Eleştirel düşünme iskelelemesi]] ve [[ai-feedback-critical-thinking-writing-2026|eleştirel düşünme için YZ geri bildirimi]] araştırması, yazmada YZ'nin [[pedagogy|pedagojik]] değerinin yansıtma ve yargıyı teşvik edip etmediğine bağlı olduğunu — cevap yerine geçmekten ziyade — gösterir.

Çinli EFL öğrenenleriyle yapılan iki dalgalı bir doğrulama çalışması (EFA N = 305; CFA N = 342), altı düzenleyici boyutu ayırır ve *çevresel düzenleme* boyutunu ekler — üretilen içeriği denetlemek, önerilen kaynakları süzmek ve bel bağlamayı sınırlamak — mevcut L2 yazma ölçeklerinin taşımadığı bir yön ([[genai-srl-l2-writing-scale-2026|Wang, Zhang ve Zhang (2026)]]).

[[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]] bunu, üretici YZ destekli akademik yazmada [[cognitive-offloading|bilişsel yük devri]]nin **katmana duyarlı** bir açıklamasıyla keskinleştirir: *daha derin* katmanları (akıl yürütme, argümantif mantık) devretmek, yüzeysel katmanları (dilbilgisi, söz dağarcığı) devretmekten daha güçlü bir olumsuz ilişki taşır ve bağımsız YZ'siz yazma kalitesi ile [[critical-thinking|yüksek mertebeli düşünme]] üzerinde daha ağır baskı yapar. Açık YZ işbirliği en iyi desteklenen ürünü verirken en kötü bağımsız sonuçları üretti; yansıtmayla sınırlı destek ise yetkinliği korudu — bu da üretici YZ yazma desteğinin tekdüze biçimde zararlı olmadığının, ancak etkisinin öğrencilerin hangi bilişsel katmanı devrettiğine bağlı olduğunun kanıtıdır.
- **YZ çıktısını önceki katılıma bağlamak, çabayı yeniden yazara taşır.** 398 katılımcıyla, [[engage-to-unlock-productive-friction-genai-2026|Su ve ark., 2026)]], yazarların açık bir sohbet robotuyla 23,26 dakikaya karşı 28,02 dakika bestelediklerini; ardından paragrafları daha hızlı değerlendirdiklerini (17,41'e karşı 22,21 dakika) eşit doğrulukta ve ek görev süresi olmadan buldu. Chen maliyeti devredilen *hangi katmanda* bulurken; bu tasarım modelin hiç konuşup konuşamayacağını *ne zaman* belirler.

[[lu-ai-multimodal-writing-critical-thinking-2026|Lu ve ark. (2027)]], bu düşünmeyi daha genç yazarlar tarafından *çok kipli* besteye taşır. 60 [[k-12|5. sınıf]] öğrencisinin anlatılarını YZ üretilmiş görüntüler ve kısa videolar olarak dışa vurması, yorumlama, analiz, değerlendirme ve açıklamada süregelen [[self-report-measures|öz bildirimli]] kazanımlar üretti — çok kipli yeniden simgeleniminin çalıştırdığı yönler — ancak **çıkarımda hiçbir kazanım olmadı**. Anlamı görsel olarak açık kılmak, metinden örtük anlamı çıkarma talebini düşürdü; tam olarak Chen'in betimlediği yük devretme mekanizması; anlam çıkarma fırsatlarını yalnızca yapılandırılmış akran tartışması geri getirdi. Çalışma, [[multimodal|çok kipli YZ]] bestesinin genç yazarların açıklık ve tutarlılık üzerine yansıtmasına yardımcı olurken, yalnızca metne dayalı yazmanın koruduğu çıkarımsal işi potansiyel olarak sıyırabileceğini uyarıyor — YZ [[visualization|görsellerini]] akran [[peer-assessment|geri bildirimiyle]] eşleştiren yazma eğitmenleri için bir tasarım değerlendirme ölçütü.

Boyuta özgü bir örüntü bu literatürde yinelenir ve yararlı bir tanı aracıdır. İlkokul düzeyindeki L2 yazma programında duygusal ve davranışsal [[student-engagement|katılım]] yükselirken bilişsel ve üstbilişsel katılım yükselmedi ve yazarlar, yazma sırasında azalmış öz izlemeyi üretici YZ desteğinin açık bir riski olarak adlandırır ([[genai-writing-program-primary-l2-motivation-engagement|Lu ve ark., 2026]]). Bu nedenle keyif ve görev içi etkinlik, daha derin işlemenin gerçekleştiğinin kanıtı değildir — yük devretme araştırmasının, öğrencinin bilişsel işin hangi katmanını devrettiğini sorduğunda çizdiği aynı ayrım.

Bir 2026 [[meta-analysis-systematic-review|meta-analizi]] ([[genai-writing-performance-meta-analysis-2026|Teng, 2026)]]) 31 çalışmadan çıkarılan 11 çalışma düzeyi etki, teşhisi ters yönden güçlendirir. Üretici YZ destekli yazma öğretimi için büyük bir ortalama avantaj (g = 0,80) bildirir; ancak heterojenlik, yeni bir uygulamanın hiçbir yarar göstermemesinin makul görülebileceği kadar yüksektir ve tek sağlam moderatör, pedagojik özelliklerden ziyade yanlılık riski sınıflandırmasıydı — varyansın çoğunu öğrenme tasarımı değil, çalışma kalitesi açıkladı. Aynı sentez, üretici YZ'nin düşük mertebeli özelliklerde (dilbilgisi, sözcüksel çeşitlilik, cümle akıcılığı) istikrarlı biçimde daha güçlü olduğunu, oysa argümantasyon ve tutarlılık üzerindeki yüksek mertebeli etkilerin tutarsız kaldığını bulur; bu da tam olarak bu sayfanın merkezi tasarım sorunu olarak ele aldığı katman boşluğudur.

### YZ yazma desteği tasarlamak: bestelemez, koçluk eder

Yazmanın tek bir doğru cevabı olmadığı için, YZ yazma araçları cevabı doğrulanabilir öğretmenlerden farklı bir tasarım gerektirir. Bilgi tabanının tasarım rehberliği ([[developing-ai-tutor|Bir YZ Öğretmeni Tasarlamak]] SSS'sindeki işlenmiş **YZ yazma koçu** örneğine bakın), bitmiş metin üretmekten çok yazarlığı ve [[evaluative-judgment|değerlendirici yargıyı]] korumayı merkeze alır:

- **Yalnızca deneme puanlarını değil, yazma yeteneklerini izleyin.** Bir yazma koçunun [[student-modeling|öğrenen modeli]], argümanı (tez özgüllüğü, iddia–kanıt uyumu, karşı argüman), örgütlenmeyi, kanıt bütünleşimini, revizyonu ve üslubu izleyebilir — böylece geri bildirim, denemeler boyunca kalıcı olan yetenekleri hedefler.
- **Geri bildirimi ödeve dayandırın.** Geri bildirimin belirli ödeve atıfta bulunması, jenerik beklentiler uydurmaktansa, gerçek istek metnini, rubriği, kurs okumalarını, atıf ve tür kurallarını ile YZ kullanım politikasını getirin.
- **Yazma aşamalarını farklı eleyin.** Planlamada YZ katılımı, algılanan mülkiyeti taslak çıkarmaya kıyasla daha az azaltır ve YZ üretilmiş taslak çıkarma en büyük mülkiyet düşüşünü üretir. Böylece bir koç, planlamada soru sorabilir ve taslakları eleştirebilirken, taslak çıkarma aşamasında öğrenenin önce düz metni üretmesini şart koşabilir.
- **Geri bildirimi önceliklendirilmiş ve yansıtıcı yapın.** Her tur korunacak bir güçlü yön, yüksek etkili bir sorun, yazarın yargısını gerektiren bir soru ve somut bir revizyon hedefi sunabilir — ve koç, öğrenenlerden bir öneriyle hemfikir olup olmadıklarını değerlendirmelerini istemelidir; itaattan çok [[feedback-literacy|değerlendirici yargı]] geliştirmelidir.
- **Yazarlık sesini koruyun ve tek tipleşmeye karşı koruyun.** Koç, hataları, açıklık sorunlarını, retorik tercihleri ve üslup tercihlerini ayırt etmelidir — ve son ikisini otomatik olarak "düzeltmemelidir"; özellikle [[multilingual-learning|çok dilli]] yazarlar ve standart dışı retorik üsluplar için.

Uygulamada bu tasarım rehberliğine ne ölçüde uyulduğunu iki yeni sentez nitelemiştir. 23 deneysel özelleştirme çalışmasının bir derlemesi ([[customizing-ai-writing-pedagogy-systematic-review-2026|Luo, 2026)]]) hedeflerin yazma süreçlerine ve yüksek mertebeli becerilere doğru kaydığını bulsa da, baskın teknik yolun çıktı kalitesini iyileştirmeyi hedefleyen [[prompt-engineering|istek metni mühendisliği]] (23 çalışmanın 13'ü) olarak kaldığını görür; [[learning-theories|öğrenme kuramı]] arayüzle sınırlı kaldığı için sistem "büyük ölçüde kuram agnostik" biçimde davranır — aynı çalışmaların bildirdiği [[cognitive-offloading|aşırı bel bağlamayı]] ve yüzeysel revizyonu açıklamaya yardımcı olan bir uyumsuzluk. Onun yeniden çerçevelemesi, özelleştirmeyi bir ifade tarzı değil, mimari olarak ele almaktır: aşamaları sıraya koymak, cevapları esirgemek ve revizyon döngüleri inşa etmek. 53 Suudi EFL lisans öğrencisiyle 11 hafta boyunca test edilen yapılandırılmış beş parçalı bir iş akışı ([[human-ai-collaboration-academic-writing-2026|Alshehri ve ark., 2026)]]), alternatifi uygulamada gösterir — öğrenciler sorunları çerçeveler ve istek metinleri tasarlar, taslak çıkarır, revize eder, iddia ve atıfları akademik veri tabanlarına karşı doğrular ve neyi neden kabul veya reddettiklerini günlüğe kaydederek kendi bel bağlamalarını düzenler. Yazma yeterliliği ve dijital [[critical-thinking|eleştirel düşünme]] o koşulda birlikte yükseldi (sınama sonrası 15,23'e karşı 11,91 ve 89,84'e karşı 56,18), oysa YZ'siz denetim neredeyse hiç kımıldamadı; ancak tek merkezli ve kısmen [[self-report-measures|öz bildirimli]] sonuç, yerleşik bir etki değil, ön nitelikte bir üst sınırdır.

Bu "besteler değil, koçluk eder" duruşu, bilgi tabanının üst sınırlı "[[coach-not-crutch-ai-writing|koltuk değneği yerine koç]]" sınırının yazma alanındaki ifadesidir: öğrenmeyi üreten bilişsel etkinliği (planlama, taslak çıkarma, değerlendirme, revizyon) tanımlayın ve onu öğrenenden almadan YZ'yi onu destekleyecek biçimde tasarlayın.

### Bağlantılar

Yazma eğitimi, [[automated-essay-scoring]], [[ai-feedback-quality]], [[academic-integrity]], [[cognitive-offloading]], [[ai-literacy]], [[language-learning]], [[formative-assessment]], [[peer-assessment]], [[metacognition]], [[self-regulated-learning]] ve [[higher-ed]] ile bağlantılıdır. YZ'nin yeteneklerinin ve risklerinin her ikisinin de son derece görünür olduğu bir alandır; bu da onu, YZ'nin pedagojiyi, [[assessment]] değerlendirmeyi ve yazarlığın ile [[agency]] failliğin ta kendisini nasıl dönüştürdüğünü incelemek için zengin bir yer haline getirir.

## Yazma eğitmenleri için çıkarımlar

- **YZ'yi yazma sürecinin yerine geçen bir şey değil, tamamlayıcı olarak çerçeveleyin.** Bilgi tabanının araştırması, yazmayı bir öğrenme etkinliği yapan bilişsel işi ve insan okuyucu kitlesini korurken YZ'yi tutarlı biçimde taslak çıkarma, revizyon ve geri bildirim için bir iskele olarak ele alır — [[coach-not-crutch-ai-writing|koltuk değneği yerine koçluk]].
- **YZ geri bildirimini insan merkezli bir süreç içinde kullanın.** [[pairr-ai-peer-review-2025|PAIRR]], YZ geri bildiriminin akran değerlendirmesi ve yansıtma ile birleştirildiğinde en yararlı olduğunu bulur; öğretmeni ve akran okuyucu kitlesini merkezde tutan geri bildirim döngüleri tasarlayın.
- **Otomatik geri bildirimi yanlılığa karşı denetleyin.** [[marked-pedagogies-linguistic-bias-writing-feedback|İşaretli Pedagojiler]], LLM geri bildiriminin öğrenci öznitelikleriyle kişiselleştirildiğinde kalıpla uyumlu biçimlerde kaydığını gösterir — olumlu/esirgeme yanlılığını izleyin ve kişiselleştirmenin bir yanlılık vektörü olabileceğini açıkça belirtin.
- **Yazmanın bilişsel işini koruyun.** Planlamayı, revizyonu ve öz değerlendirmeyi baypas eden [[cognitive-offloading|aşırı bel bağlamayı]] izleyin; öğrenci failliğini korumak için YZ'yi seçilen aşamalarda kullanın ([[ai-writing-support-stage-ownership-2026|aşama temelli mülkiyet]]).

- **Güçlendirmeye yönelik tasarlayın, zorlamaya değil.** 327 Çinli EFL lisans öğrencisi üzerine yapılan bir PLS-SEM çalışması ([[empowerment-ai-assisted-deep-revision-efl-writing-2026|Li ve Zhang, 2026)]] yazma eğitmenlerinin gerçekte elinde tuttuğu iki kolu test etti ve yalnızca birinin işe yaradığını buldu. YZ [[prompt-engineering|istek metni]] okuryazarlığı, algılanan yetkinliği, psikolojik güvenliği ve [[motivation|içsel motivasyonu]] güçlü biçimde öngördü ve üç psikolojik ihtiyacın tamamı, onun derin revizyon katılımıyla olan bağlantısını kısmen aracılık etti; derin revizyonun en güçlü tek itici gücü içsel motivasyondu. Dışsal zorlamaların hiç doğrudan etkisi olmadı. Pratik karşılığı şudur: derin revizyon şart koşmak onu üretmez — zorlayıcı şart, revizyonun hiç gerçekleşmesi için gerekli olabilir, ancak derinlik öğrencilerin istek metni kapasitesini ve onu izleyen içsel motivasyon ile psikolojik güvenliği inşa etmekten gelir.
- **Akademik dürüstlüğü yapıcı biçimde ele alın.** YZ kullanımını polislemekten, öğrencilerin istemeden yanlış işlemeden YZ kullanmasına izin veren [[ai-literacy]] ve etik kullanım çerçevelemesi inşa etmeye doğru kayın.
- **Tespit, yazma için bir dürüstlük stratejisi değildir.** [[bassett-ai-detectors-education-2026|Bassett ve ark., 2026)]], tespit aracı puanlarının dürüstlük davalarının gerekli gördüğü olasılık dengesi standardını karşılayamayacağını ve insan-mi-YZ ayrımının, YZ *tarafından* değil YZ *ile* yaratılan işi yanlış okuduğunu savunur; kurumların bütçeyi tespit ve gözetimden [[authentic-assessment|değerlendirme tasarımına]] ve [[ai-literacy]]'ye kaydırmasını önerir.

## Bağlı kavramlar

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[academic-integrity]]
- [[cognitive-offloading]]
- [[ai-literacy]]
- [[language-learning]]
- [[higher-ed]]
- [[metacognition]]
- [[llm]]
- [[generative-ai]]
- [[formative-assessment]]
- [[peer-assessment]]
- [[self-regulated-learning]]
- [[student-experience]]
- [[feedback-literacy]]
- [[feedback]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[assessment]]
- [[agency]]

## Bağlı makaleler

- [[nash-preservice-teachers-classroom-ai-policies-2026]] — Öğretmen adaylarının sınıf YZ politikaları: gerilimler ve iç içelikler
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Geniş Ölçekli Yazma Değerlendirmesinde YZ Destekli Puanlamaya İlişkin İnsan-Döngüsü Bir Çerçeve
- [[llm-comparative-judgment-writing-screening-2026]] — Evrensel Yazma Taramasında Büyük Dil Modeli Karşılaştırmalı Yargısının Geçerliliği
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Üretici YZ destekli yazmada katmana duyarlı bilişsel yük devretme (Chen 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]]
- [[coach-not-crutch-ai-writing]] — YZ yazma araçları çabayı azaltsa da yazma becerisini iyileştirebilir (Lira ve ark. 2025)
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM'ler denemeleri insanlar gibi puanlamaz (Mathew ve ark. 2026)
- [[pairr-ai-peer-review-2025]] — Akran ve YZ Değerlendirmesi + Yansıtma (PAIRR)
- [[posthumanist-ai-literacy-2025]] — YZ Okuryazarlığına Posthümanist Bir Yaklaşım
- [[choi-anchor-aes-prompting-2025]] — Çıpa Temelli Otomatik Deneme Puanlaması
- [[aiawe-automated-writing-evaluation]] — AIAWE: Otomatik Yazma Değerlendirmesi
- [[agency-gap-ai-writing]] — YZ Destekli Yazmada Faillik Boşluğu
- [[ai-writing-support-stage-ownership-2026]] — Planlamadan Revizyona: Farklı Aşamalarda YZ Yazma Desteği
- [[genai-teacher-feedback-comparison]] — Üretici YZ ile Öğretmen Geri Bildiriminin Karşılaştırılması
- [[student-rationalization-ai-writing]] — "Sorun Değil, Çünkü...": Öğrenci Rasyonalizasyonunun Vahşi Batısı
- [[care-full-feedback-genai]] — Özenli Geri Bildirim Yaklaşımları
- [[self-referential-l2-writing-llm-assessment]] — Öz Yönelimli L2 Yazma Değerlendirmesi
- [[becerra-aicofe-feedback-2026]] — YZ Akran Geri Bildirim Sistemleri
- [[repeated-ai-writing-feedback-semester]] — Yinelenen YZ Geri Bildiriminin Öğrenci Değerlendirmesi
- [[veriforge-narrative-drafting-scaffolding-2026]] — VeriForge: Anlatı Taslağı İskelelemesi
- [[ai-feedback-critical-thinking-writing-2026]] — Eleştirel Düşünmeyi İyileştirmek için YZ Üretilmiş Geri Bildirim Kullanmak
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — İşaretli Pedagojiler: kişiselleştirilmiş otomatik yazma geri bildiriminde dilbilgisel yanlılıklar
- [[bassett-ai-detectors-education-2026]] — Tura yazarız, yazı siz kaybedersiniz: eğitimde YZ tespit araçları (Bassett ve ark. 2026)
- [[academic-erasure-complexity-ai-writing-2026]] — Akademik silme: YZ destekli yazma altında karmaşıklığın yok olması
- [[making-ai-annoying-constrained-writing-2026]] — YZ'yi bilerek can sıkıcı kılmak: YZ destekli yazmada kısıtlama (Konradt, Boote ve Taub 2026)
- [[lu-ai-multimodal-writing-critical-thinking-2026]] — İlkokul yazmasında çok kipli YZ bestesi ve eleştirel düşünme (Lu ve ark. 2027)
- [[student-genai-use-views-writing]] — Öğrencilerin yazma için üretici YZ kullanımı ve görüşleri (Kuznetsov, Sheely ve Baker 2026)
- [[genai-writing-program-primary-l2-motivation-engagement]] — İlkokul L2 motivasyonu, katılımı ve performansı için üretici YZ destekli bir yazma programı (Lu ve ark. 2026)
- [[automated-scoring-marketing-posts-agreement-2026]] — Öğrenci pazarlama gönderilerinin otomatik puanlanmasında uyum ve hata
- [[empowerment-ai-assisted-deep-revision-efl-writing-2026]] — Dışsal zorlamaların hiç doğrudan etkisi olmazken derin revizyonu istek metni okuryazarlığı ve içsel motivasyon yönlendirir (Li ve Zhang 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Öğrenci Yazmasındaki LLM Üretilmiş Geri Bildirimde Geri Bildirim Odağı ve Pedagojik Uyumluluğun Değerlendirilmesi
- [[teacher-vs-ai-peer-feedback-l2-writing-2026]] — 8 haftalık yarı deneysel bir tasarımda heterojen L2 iskeleleri olarak öğretmen geri bildirimi ve YZ destekli akran geri bildirimi (Tang ve ark., 2026)
- [[genai-writing-performance-meta-analysis-2026]] — Üretici YZ yazma performansının meta-analizi: büyük havuzlanmış etki, kırılgan büyüklük, pedagoji yerine yöntem (Teng 2026)
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — YZ yazma özelleştirmesinin sistematik derlemesi ve kuram–tasarım uyumsuzluğu (Luo 2026)
- [[human-ai-collaboration-academic-writing-2026]] — Akademik yazma ve dijital eleştirel düşünmede yapılandırılmış insan–YZ işbirliği (Alshehri ve ark. 2026)
- [[zhao-ji-appraisal-human-ai-revisions-2026]] — Aynı taslağın insan ve YZ revizyonları farklı diyalojik duruşlar alır: akran geri bildirimi diyalojik alanı kapatır, YZ revizyonu onu dengeli tutar (Zhao ve Ji 2026)
- [[engage-to-unlock-productive-friction-genai-2026]] — Engage-to-Unlock: YZ çıktısını önceki katılıma bağlamak, zaman veya doğruluk pahasına çıkmadan çabayı yazmaya yeniden dağıttı (N = 398)
- [[genai-srl-l2-writing-scale-2026]] — L2 yazma için ayrı bir boyut olarak çevresel düzenlemeyle (araç yönetimişi) altı boyutlu üretici YZ-ÖDA ölçeği
