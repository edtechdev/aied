---
title: AIEd Araştırmasını Yorumlamak ve Uygulamak
created: "2026-10-14T21:40:00-04:00"
type: concept
foundations: [limitations-in-aied-research]
research_method: [literature review]
methods: [ai-ed-evaluation, benchmark, research-methods-aied, meta-analysis-systematic-review, quantitative-research]
assessment: [assessment-validity, educational-measurement, self-report-measures, learning-gains]
ethics: [ai-use-disclosure]
audience: [instructors, administrators, instructional designers, software developers, researchers]
page_kind: [evaluation, framework]
confidence: high
connected_faqs: [reporting-interpreting-aied-research, research-gaps-aied, how-can-ai-assist-with-educational-research]
translation_of: concepts/interpreting-and-applying-aied-research
source_updated: "2026-10-25T16:25:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **AIEd araştırmasını yorumlamak ve uygulamak** — bir eğitimde-yapay-zeka bulgusunun üzerine hareket etmeye değer olup olmadığına nasıl karar verileceği; ister öğretin, ister bir program yönetin, ister bir kurs tasarlayın, ister yazılım geliştirin. Bu sayfayı kullanmak için istatistik bilmeniz gerekmez. Fiilen bir soru olan uygulayıcının sorusuyla başlar — *bunu yapmalı mıyım?* — onu yanıtlayan az sayıdaki şeyi işler ve teknik ayrıntıyı isteyen veya ihtiyaç duyan herkes için sonraki bir bölümde tutar. Kısa versiyon: neyle karşılaştırıldığını, neyin ölçüldüğünü, kimin incelendiğini ve aracın çalışıldığı hâliyle hâlâ var olup olmadığını bildiğinizde bir bulgu üzerine hareket etmeye değerdir. Eğitimcilere, yöneticilere ve geliştiricilere ulaşan iddiaların çoğu bu dörtlüsünden birinde başarısız olur.

## Dikkate Alınması Gereken Sorular

- Bir satıcı, bir haber hikâyesi veya bir meslektaş, bir YZ aracının öğrenmeyi iyileştirdiğini söylüyor. Onu kendi kursunuzda denemeden önce görmek isteyeceğiniz tek şey ne olurdu — ve onu nerede arayacağınızı bilir miydiniz?
- Bu bilgi tabanındaki her makale sayfası artık bir **Bunun uygulama için anlamı** bölümüne ve çoğu bir **Sınırlılıklar** bölümüne sahip. İkisini birlikte okuyarak, her biri diğerinin söylemediği neyi söyler?
- Öğrenciler bir YZ aracıyla pratik yapar ve pratik işlerinde daha iyi sonuç alır, sonra [[summative-assessment|kitapsız sınavda]] daha kötü sonuç alır. Bu sayılardan hangisi kursunuzun önemsediği öğrenme kazanımıdır — ve mevcut değerlendirmeleriniz farkı yakalar mıydı?
- Bir çalışma büyük bir iyileşme vaat ediyor, ancak tek bir kurumdaki tek bir kursta 30 öğrenciyi izlemiş ve çalışılan aracın sürümü artık kimsenin kullanmadığı sürüm. Bu iki olgudan hangisi sizi daha fazla endişelendirir ve neden?
- Birçok YZ aracı, öğrencilerin öğrendiği miktarı artırmadan onları ne kadar kullandıklarını artırır. Etkileşimi artıran bir araç ile yardımsız performansı artıran bir araç arasında seçim yapmak gerekse, bunu ne çözerdi?
- Satıcının kendi etkililik sayılarına dayanarak bir aracı onaylamanız veya satın almanız isteniyor. Bu sayıların nasıl üretildiğine dair neyin açıklanmasını isterdiniz?

## Giriş

Bu sayfa, bir şeye karar vermek zorunda olanlar içindir: bir ödevi değiştirip değiştirmeyeceğini düşünen bir öğretmen, bir pilot tartışan bir [[administrator]], bir kurs inşa eden bir öğrenme tasarımcısı, bir özelliğin ne yapması gerektiğine karar veren bir yazılım geliştiricisi ya da bir bulguyu bunlardan herhangi birine açıklayan bir araştırmacı.

İki alışkanlık farkı yaratır ve hiçbiri araştırma eğitimi gerektirmez.

**Önce sizin için yazılmış iki bölümü okuyun.** Buradaki her makale sayfası artık bir **Bunun uygulama için anlamı** bölümü taşır — genellikle o çalışmadan türetilmiş üç ila beş somut eylem — ve çoğu çalışmanın neyi destekleyemediğini belirten bir **Sınırlılıklar** bölümü taşır. Bunları çalışmanın bulgularından önce okuyun, sonra değil. Uygulama bölümü çalışmanın neye yaradığını söyler; sınırlılıklar bölümü nerede durduğunu söyler. Uygulama bölümü eksik veya belirsizse, o sayfayı kanıt olarak değil, tamamlanmamış olarak ele alın.

**İddiayı değerlendirin, iddianın özgüvenini değil.** [[ai-education|Eğitimde YZ]] hakkındaki iddialar genellikle *bir şey* hakkında isabetli ve önemsediğiniz şey hakkında yanıltıcıdır; çünkü bir çalışma ile sizin sınıfınız dört yönden farklıdır: neyle karşılaştırıldığı, ne ölçtüğü, kimin katıldığı ve aracın hangi sürümünün kullanıldığı. Bu sayfanın geri kalanı size kontrolleri sade dille verir, sonra isteyenler için her birinin ardındaki kanıtı.

İzleyenler de komşularının yerine geçen bir şey değildir. [[research-methods-aied|AI in Education’da Araştırma Yöntemleri]] tasarımların nasıl kurulduğunu, [[limitations-in-aied-research|AIEd Araştırmasındaki Sınırlılıklar]] literatürün tekrarlayan zayıflıklarını kataloglar, [[ai-ed-evaluation|AIED Değerlendirmesi]] sistemlerin ve çıktıların nasıl değerlendirildiğini, [[differential-effects-across-learner-groups|Öğrenen Grupları Arasındaki Farklı Etkiler]] bir bulgunun kimi içerdiğini ve kimi içirmediğini kapsar.

## Çoğu iddiayı çözen dört soru

Bunları bir şeye zaman, para veya bir dönem harcamadan önce sorun.

**1. Ne ile karşılaştırıldı ve bu karşılaştırma adil miydi?** "YZ kullanan öğrenciler, kullanmayanlardan daha iyi yaptı" yalnızca diğer öğrenciler gerçek bir şey yapıyorsa size bir şey anlatır. Karşılaştırma her zamanki gibiydiyse — ya da hiç yoktuysa — bulgu aracı ek zaman, ek dikkat ve yenilikle bir arada paketler. Bakılacak şey: inandırıcı bir alternatif elde eden bir **kontrol grubu** ve iki koşula rasgele atama.

**2. Tam olarak neyi ölçtüler?** Heyecan verici iddiaların çoğu burada sessizce başarısız olur. Test puanları, ödev kalitesi, [[motivation]], tutumlar ve [[student-engagement|etkileşim]] tek bir "başarı" sayısında havuzlanır, ya da aracın *yanında* performans ölçümü öğrenme olarak bildirilir. Aracın orada olmasına bağlı olan öğrenme, kalıcı olan öğrenmeyle aynı şey değildir. Bakılacak şey: ölçüm aletin neyi ölçtüğü, o topluluk için doğrulanıp doğrulanmadığı ve bir kazanımın odada YZ *olmadan* ölçülüp ölçülmediği.

**3. Kim incelendi, kaç kişi ve ne kadar süreyle?** Tek bir kurstaki otuz öğrenci bir sonuç değil, sinyaldir. Dört haftalık bir müdahale size bir yıl hakkında bir şey söyleyemez. Sizininkine benzemeyen öğrenciler üzerine yapılmış bir çalışma yine de yararlıdır — o bir tahmin değil, sizin ortamınız hakkında bir hipotezdir. Bakılacak şey: örneklem büyüklüğü, katılımcıların nasıl toplandığı, tek merkez olması, süre ve herhangi bir alt grubun analiz için yeterince büyük olup olmadığı.

**4. Araç hâlâ çalışılan araç mı?** YZ yeteneği yayından daha hızlı ilerler. 2025 tarihli bir bulgu, 2025 model kuşağını tarif eder — bazen özgül bir sürüm, bazen şimdi kimsenin kullanmadığı bir yapılandırma. Bu bulguyu yanlış yapmaz; onu eskitir ve iddianın miras alınmak yerine yeniden kontrol edilmesi gerektiği anlamına gelir. Bakılacak şey: model sürümü ve veri toplama penceresi.

## YZ iddiaları hakkında kanıtlar ne söylüyor

Bu sayfadan bir şey hatırlayacaksanız, manşet sayısının genellikle şişirilmiş olduğunu ve karşılaştırmanın genellikle zayıf olduğunu hatırlayın. Bu marjinal bir görüş değil — alanın kendi denetimlerinin bildirdiği şeydir. Birkaç iyi tasarlanmış çalışma gerçek kazanımlar göstermektedir; mesele, ispat yükünün iddiaya ait olmasıdır.

- **Ortalama etkinin yaklaşık üçte ikisi**, etkileyici sonuçların yayımlandığı ve etkileyici olmayanların yayımlanmadığı olgusu için düzeltme yaptığınızda kaybolur. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš ve ark. (2026)]], 67 derlemeden 1.840 etki büyüklüğünü havuzladı ve düzeltilmiş ortalamanın yayımlanmış medyanın yaklaşık üçte biri olduğunu buldu — SMD 0,196’ya karşılık 0,67.
- **Bir ürün adı, bir öğretim yöntemi değildir.** Öne çıkan bir meta-analizin ardındaki karşılaştırmaları denetleyerek, [[weidlich-chatgpt-effect-search-cause-2025|Weidlich ve ark. (2025)]], yalnızca **%21**’inin iyi tanımlı bir muamele, bir kontrol grubu ve geçerli bir öğrenme ölçümüne sahip olduğunu buldu — ve "ChatGPT kullanmak" için bildirilen avantaj, amaca özel olarak inşa edilmiş [[intelligent-tutoring|akıllı özel öğretim sistemleri]] için çıkan avantajdan daha büyük çıktı (g = 0,7’ye karşılık 0,66), bu bir zaferden çok bir uyarı işaretidir.
- **Araçla performans, alışılmış biçimde öğrenmeyle karıştırılır.** Bir [[k-12|K-12]] matematik çalışmasında, genel amaçlı bir [[conversational-ai|sohbet robotu]] ile pratik yapan öğrenciler daha iyi pratik notları aldı ve sonra YZ erişimi olmayan akranlarına göre kitapsız finalde **yaklaşık %17 daha kötü** puan aldı ([[stanford-evidence-base-ai-k12-2026|Stanford’ın K-12’de YZ için kanıt tabanı]]).
- **Alanın kendi derlemeleri denetimden geçemez.** Eğitimde YZ’nin iyileştirdiğini iddia eden **14 hakemli meta-analizin** denetimi olan [[oneill-presumed-effective-meta-analysis-2026|O’Neill’in (2026)]] çalışması, **hiçbirinin** ileri sürdüğü iddialar için geçerli bir temel sağlamadığını ve rasgele seçilen 46 temel çalışma arasında **%61**’inin geçerlilik kaygıları ortaya koyduğunu buldu. Sorun tek kötü bir makale değil; bir bildirim kültürüdür.
- **Öz-bildirimler herkesi pohpohlar.** İnsanlar kendi [[ai-literacy|YZ becerilerini]] performans ölçümlerinin gösterdiğinden yaklaşık **%40** daha yüksek puanlar; bu nedenle memnuniyet ve özgüven anketleri üzerine hareket edebileceğiniz en zayıf kanıttır ([[self-report-measures|Öz-Bildirim Ölçümleri]], [[educational-measurement|Eğitsel Ölçüm]]).
- **Sınıflarda hâlihazırda bulunan çoğu ürünün hiç bağımsız kanıtı yok.** [[instruction-partners-ai-in-action-learning-tour-2026|Instruction Partners’ın 2025–26 öğrenme turu]], 20 öğrenciye yönelik YZ ürününü profillendirdi ve tam profili olan 16 üründen yalnızca yedisinin ABD’de öğrenci grupları arasında öğrenci başarısını inceleyen bağımsız bir incelemeye sahip olduğunu buldu; ikisi yalnızca yurt dışında çalışılmış, dördünde çalışmalar sürmekte ve üçü yalnızca iç verilere dayanıyordu. Yazarlar, öncelikli grupları kapsayan bağımsız nedensel çalışmaların tüm öğrenciye yönelik ürünler için beklenti olması gerektiğini savunur — okulların hâlihazırda kullandığı araçlar için henüz norm değil.

- **Bir derleme, kendi derlemindeki bildirim eğriliğini ölçebilir.** 155 yükseköğretim çalışmasının sistematik bir derlemesi, 117’sinin (%75,5) başarılı uygulama bildirdiğini, 124’ünün (%80,0) yalnızca kısa vadeli etkiyi kapsadığını ve yalnızca 23’ünün (%14,8) [[ethics|etik]], eşitlik veya yönetişim başarısızlıklarına değindiğini bulmuştur; yukarıdaki kontrollerin betimlediği dengesizlik, derlemenin kendi kanıt tabanında ölçülmüştür ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga (2026)]]).

## Bir bulguyu karara dönüştürmek

En çok boşa harcanan çabayı kurtaran dizi, sırayla:

1. **Kazanımınızı önce yazın.** "YZ’yi daha fazla kullan" değil, "öğrenciler araç olmadan X yapabilir". Kazanımınız yardımsız performans ise, yardımlı performansı ölçen bir çalışma doğrudan kanıt değil, komşu kanıttır.
2. **Karşılaştırmayı ve ölçümü bulun** — çalışmada veya makale sayfasının uygulama bölümünde. Herhangi biri eksikse, iddiayı bir bulgu değil, bir demo olarak ele alın.
3. **Sınırlılıklar bölümünü uyarı cümleleri değil, talimat olarak okuyun.** "Tek kurs, öz-bildirimli kazanımlar, dört hafta" size hangi varsayımlarınızı çalışmanın kapsamadığını tam olarak söyler.
4. **Sürümü ve tarihi kontrol edin.** Çalışma iki yıl önceki bir model kuşağını kullandıysa, varsaymak yerine yeniden test planlayın.
5. **Etkinleştirici koşulları adlandırın.** Maliyet, lisanslar, personel zamanı, veri kuralları ve öğrencilerin fiilen işe yarayan kademe için ödeme yapıp yapmaması gerekip gerekmediği. Çalışmalar bunları nadiren taşır ve bir müdahalenin bir dönem atlatıp atlatmayacağına onlar karar verir. [[chick-faculty-development-ethical-ai-2026|On katılımcılı bir öğretim-gelişimi çalışmasında]], herkes YZ’yi kullanmaya devam edeceğini söyledi, oysa aynı insanlar araç erişimi için kişisel abonelikler ve planladıkları yeniden tasarımlar için zaman desteği olmadığını tarif etti.
6. **Küçük pilot yapın ve desteksiz koşulu ölçün.** Araç olmadan yapılan bir değerlendirmeyle kısa bir ön-test/son-test, bir memnuniyet anketini geride bırakır. Küçük ve dürüst, büyük ve retorikten iyidir. Bunun kurs tasarımında nereye oturduğunu görmek için bkz. [[learning-design|Öğrenme Tasarımı]].
7. **Bir gözden geçirme tarihi günlüğe kaydedin ve iddiayı düşürmeye hazır olun.** Bir çalışmanın öncülü artık var olmayan bir yetenek olduğunda, dürüst hamle iddiayı süresiz biçimde atıflamak yerine onu emekliye ayırmaktır — bu bilgi tabanının kendi sayfalarına uyguladığı aynı disiplindir.

## Araştırmada karşılaşacağınız kelimeler

Sade çeviriler, böylece bir çalışmayı veya satıcı sayfasını yöntem geçmişi olmadan gözden geçirebilirsiniz.

- **Etki büyüklüğü** — farkın ne kadar büyük olduğu, 0’ın hiçlik olduğu bir ölçekte. Küçük değerleri "bir dürtme" olarak, "bir dönüşüm" olarak değil ele alın.
- **İstatistiksel olarak anlamlı** — *bu örneklemde* saf şansa bağlı olma olasılığı düşük. Etkinin büyük olup olmadığı veya sizin sınıfınızda olup olmayacağı hakkında hiçbir şey söylemez.
- **Güven aralığı** — verinin elemeyi reddettiği sonuçlar aralığı. Aralık sıfırı içeriyorsa, bulgu manşet ne kadar ilginçse olsun hiçbir şey olmayabilir.
- **[[meta-analysis-systematic-review|Meta-analiz]]** — birçok çalışmayı havuzlayan bir çalışma. Güçlüdür ve yalnızca havuzladığı kadar iyidir; derlemelerin neden denetlendiğinin nedeni budur.
- **Yayım yanlılığı** — ilginç sonuçlar yayımlanır ve sıkıcı olanlar yayımlanmaz; böylece literatürün ortalaması gerçeklikten daha pembe görünür.
- **Öz-bildirim** — insanların kendilerini tarif etmesi. Tutumlar için yararlı, yetkinlik veya davranış için zayıf.
- **Kontrol grubu** — karşılaştırma koşulu. Aranacak tek en önemli şey.
- **Ön-test/son-test** — karşılaştırma grubu olmadan önce ve sonra ölçüm. Düşündürücü, hiçbir zaman kesin değil.
- **Alt grup analizi** — örneklemin bir dilimi için sonuçlar. Genellikle yetersiz güce sahip; bir hipotez olarak ele alın.
- **Tekrarlama** — başkasının aynı sonucu elde etmesi. Nadir ve mevcut en güçlü kanıt.
- **[[benchmark|Kıyaslama]]** — sistemleri puanlamak için sabit görev kümesi. Puanlar hedef hareket ettiğinde değişir; tarihi kontrol edin.

## Neden olursa olsun yavaşlaması gerektiğinde

- **İddia satıcıdan, satıcının metrikleri üzerinden geliyor.** Bu yine de bilgilendirici olabilir — bir [[intelligent-tutoring|YZ destekli özel öğretim]] sağlayıcısı, beş ayda 40’ı aşkın deneyden gelen iyileşmelerle insan uzmanlara karşı kalibre edilmiş F1 0,83’lük bir etkileşim metriği bildirir ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi ve ark., 2026]]) — ancak yapı, değerlendiriciler ve metrik satıcının tercihleridir. Karşılaştırma grubunu ve yardımsız kazanımı isteyin.
- **Otomatik puanlama çözülmüş gibi ele alınıyor.** İnsan değerlendiricilerle yüksek anlaşma güvenilirliktir, kalite değil. Bir puanlama çalışmasında, insan değerlendiriciler çok değerlendiricili mutabakatla yaklaşık r = 0,88 anlaşma içindeydi; böylece r = 0,85 civarındaki otomatik puanlar zaten görevin kendi ölçüm tavanındaydı ([[know-when-to-trust-ai-scoring-reliability-2026|YZ Puanlamaya Ne Zaman Güvenilmeli]]).
- **Kaynakça listesi ağır iş çıkarıyor.** 14 [[cs-education|bilişim-eğitimi]] makalesinde doğrulanabilir biçimde uydurma kaynakça bilgisi içeren otuz kaynak girişi doğrulandı, hepsi 2025 ve 2026’dan ([[citation-errors-hallucinations-computing-education-2026|Denny ve ark., 2026]]). Bir iddia bir atfa dayanıyorsa, atfı kontrol edin.
- **Politikanızın dayandığı davranışı hiç kimse ölçmedi.** 493 tekilleştirilmiş kayıt ve 14 öncelikli çalışma boyunca, hiçbir çalışma doğrulamanın *başarılı olup olmadığını* ve öğrenenin bununla sonra ne yaptığını, çıktı kalitesinin bağımsız bir standardına karşı ölçmedi ([[verification-quality-reliance-calibration-genai-2026|doğrulama ve güvenme kalibrasyonu]]). Kurs politikaları tam olarak o davranışa bağlıdır.

## Bir araç inşa ediyorsanız veya satın alıyorsanız

Aynı kontroller tasarım gereksinimlerine döner ve bilgi tabanının değerlendirme sayfaları ayrıntıyı taşır ([[ai-ed-evaluation|AIED Değerlendirmesi]], [[automated-assessment|Otomatik Değerlendirme]]).

- **Karşılaştırmayı özellik şartnamesinin parçası yapın.** Bir öğrenenin aksi hâlde ne yapacağına karar verin ve aracınızın onu neden geçtiğini söyleyebilin — hiçliği neden geçtiğini değil.
- **Desteksiz koşulu ölçün.** Kazanımınız öğrenmeyse, araç olmadan tamamlanan bir görev dahil edin; yalnızca yardımlı performans sizi alıcılarınızı yanılttığı kadar yanıltacaktır.
- **Otomatik yargılarınızın nasıl doğrulandığını bildirin** — altın standardı, kalibrasyon hedefi, anlaşmazlıkları kimin hakemliği — ve bunu kalite değil, güvenilirlik olarak bildirin.
- **Herhangi bir etkililik iddiasında sürümü ve tarihi adlandırın**, çünkü bir sonraki sürümünüz onu geçersiz kılar.
- **Karşı ağırlıkları gösterin:** öğrenci başına maliyet, [[accessibility]], veri işleme ve ücretsiz kademedeki öğrenenlere ne olduğu. Bkz. [[ai-use-disclosure|YZ Kullanımı Açıklaması]], [[privacy]] ve [[governance]].

## Kanıtı isteyenler için

Yukarıdaki kontroller halk bilgeliği değil; bu literatürdeki belgelenmiş başarısızlıklardan gelir. Bu bölüm, bir makaleyi inceleyen, bir kararı savunan veya bir aracın doğru değerlendirilmesi gerektiğini savunan herkes için ayrıntıyı tutar.

**Geçerlilik başarısızlıklarının yalnızca bir varlığı değil, bir dağılımı vardır.** [[oneill-presumed-effective-meta-analysis-2026|O’Neill’in (2026)]] 46 denetlenmiş çalışmasında, bağımlı değişken uyuşmazlığı en yaygın sorundu (n = 15) — ölçüm iddianın savunduğunu yakalamadı — ardından bağımsız değişken uyuşmazlığı (n = 11), deneysel tasarım sorunları (n = 7), veri çıkarımı sorunları (n = 6), kontrol grubunun yokluğu (n = 6) ve rastgele olmayan grup ataması (n = 6) geldi. 14 meta-analizden on ikisi, aynı temel çalışmadan çekilen birden çok etki büyüklüğünü bağımsız olarak ele aldı; bu, görünür kanıt tabanını şişirir.

**Alt grup iddiaları, onları yapan çalışmalarda genellikle çözülemezdir.** [[ai-tutoring-micro-rct-gcse-science-2026|GCSE bilim mikro-RCT’si]], taban tabanlı **0,57 puanlık (95% GA −2,25 ila 3,39)** bir muamele-durum etkileşimi bildirir; bir grup için tabakalandırılmış tahminlerle **g = 0,28 (95% GA −0,04 ila 0,59)**, diğeri için **g = 0,35 (95% GA 0,18 ila 0,52)**. Sıfırı geçen bir aralık bir [[equity-in-ai-education|eşitlik]] bulgusu değildir; yerel bir pilot için bir sorudur.

**Bir sentez kendi protokolünü tatmin edebilir ve yine de ağırlıksız kaliteyi havuzlayabilir.** [[ai-supported-instruction-stem-meta-analysis-2026|Doğan ve ark. (2026)]], hiçbir resmî kalite değerlendirme aracı kullanmadıklarını, kapsama ölçütlerini ciddiyet eşiği olarak ele aldıklarını açıkça belirtir; böylece yarı-deneysel bir çalışma ile rasgele bir çalışma eşit katkıda bulunur — ve heterojenlikleri **sabit etkili model altında I² = %82,98 ancak rastgele etkiler modeli altında %15,75** olarak okunur; modeli olmadan alıntılanan bir heterojenlik sayısının derlemin ne kadar tutarsız olduğunu size neden söyleyemeyeceğinin nedeni budur.

**Otomatik yargının [[assessment-validity|doğrulanması]] sonucun parçasıdır.** İnsan kodlayıcılarla anlaşma bir güvenilirlik ifadesidir ve yukarıdaki tavan onun kaliteyle aynı şey olmadığının nedenini gösterir ([[machines-misread-pedagogical-quality|makineler pedagojik kaliteyi yanlış okur]]).

**Araç eskiliği birinci sınıf bir sınırlılıktır.** YZ destekli değerlendirme üzerine bir derleme, kendi bulgularının belirli zamanlarda belirli model sürümlerini yansıttığını ve alan hareketliliğinin model yeteneklerine dair herhangi bir hesabı aylar içinde potansiyel olarak eskitebileceğini not eder ([[ai-assisted-assessment-instruction-higher-ed-2026|Yükseköğretimde YZ Destekli Değerlendirme ve Öğretim]]). Kapsam iddialarını kendi kuşağına indirgeyin: "[[generative-ai|üretici YZ]] X’i iyileştirdi" taşınabilir değilken, "bu görevde, bu [[scaffolding]] ile GPT-4 dönemi araçları" öyledir.

**Kıyaslama hedefleri hareket eder**; böylece bir sistemin bugün doyurduğu veya başarısız olduğu bir sonuç bir sonraki sürümle tersine dönebilir; doyurma ve kontaminasyon kontrolleri herhangi bir kıyaslama temelli iddianın yanında yer almalıdır.

**Bu literatürü kendi eleştirmenleriyle birlikte okumak burada normal uygulamadır.** Yazarlar ve hakemler için bildirim-tarafı kontrol listeleri [[reporting-interpreting-aied-research|YZ araştırmasını bildirme ve yorumlama SSS’indedir]] ve bu sayfadaki değerlendirme alışkanlıkları, bir iddia ampirik değil kuramsal olduğunda [[theory-development-aied|AI in Education’da Kuram Geliştirme]] ile eşlenir.

## Kısa bir kontrol listesi

1. Aracın içinde olup olmadığını da içerecek biçimde kazanımınızı tek cümlede belirtin.
2. Karşılaştırmayı bulun. İnandırıcı karşılaştırma yoksa karar yoktur.
3. Ölçümü iddianıza eşleyin ve yardımsız bir kazanımı tercih edin.
4. Sayıyı indirin: manşeti değil, yanlılık düzeltmeli etkiyi okuyun.
5. Model sürümünü ve çalışmanın tarihlerini kontrol edin.
6. Sınırlılıklar bölümünü hâlâ bilmedikleriniz için talimat olarak okuyun.
7. Maliyetini hesaplayın: lisanslar, kademeler, personel zamanı, veri kuralları.
8. Yardımsız bir ölçümle küçük pilot yapın, sonra karar verin.
9. Bir yıl sonrasına bir gözden geçirme tarihi günlüğe kaydedin ve iddiayı emekliye ayırmaya hazır olun.

## Yaygın yanlış anlamalar

**“Yayımlanmış bir meta-analiz, eğitimde YZ hakkında yerleşik kanıttır.”** Alanın sentezleri denetimden geçmemiştir. [[oneill-presumed-effective-meta-analysis-2026|O’Neill’in (2026)]] eğitimde YZ’nin iyileştirdiğini iddia eden **14 hakemli meta-analiz** üzerine denetimi, **hiçbirinin** bu sonuç için geçerli bir temel sağlamadığını bulmuştur. Havuzlanmış bir etki büyüklüğü, ancak havuzlanan çalışmalar kadar iyidir ve bu literatürde havuzlama rutin olarak sonucu YZ’ye atfedemeyecek tasarımları içermiştir. Bir meta-analitik sayıyı aktarmadan önce neyi topladığı sorulmalıdır.

**“Daha büyük etki büyüklüğü, daha iyi müdahaleye aittir.”** Çoğu zaman tersi geçerlidir. Bu sayfanın belgelediği derleme bağlamında çalışmaların yalnızca **%21’i** iyi tanımlı bir muamele, bir kontrol grubu ve geçerli bir öğrenme ölçümüne sahipti ve “ChatGPT kullanmak” için bildirilen avantaj, amaca özel olarak inşa edilmiş [[intelligent-tutoring|akıllı özel öğretim sistemlerininkinden]] *daha büyük* çıktı. Zayıf belirtilmiş muameleler şişirilmiş etkiler üretme eğilimindedir, çünkü karşılaştırma daha belirsiz ve çıktı ölçümü daha gevşektir. Daha büyük bir sayı, müdahaleyi tercih etmek için değil tasarıma bakmak için bir nedendir.

**“Araç kullanılırken daha yüksek notlar, aracın daha fazla öğrettiğini gösterir.”** Bir [[k-12|K-12]] matematik çalışmasında, genel amaçlı bir [[conversational-ai|sohbet robotu]] ile pratik yapan öğrenciler daha iyi pratik notları almış ve ardından yardımsız değerlendirmede **yaklaşık %17 daha kötü** puan almıştır. Araç varken ölçülen pratik performansı şişirilmiş ölçüdür; çıktı olan ise yardımsız olandır ve yalnızca biri yükselmiştir.

**“Etki gerçekse uygulama ayrıntıları pek önemli değildir.”** Etki, ayrıntıların kendisidir. Tek bir kurumda tek bir derste 30 öğrenciyi, kimsenin artık kullanmadığı bir araç sürümünde izleyen bir çalışma, artık var olmayan bir yapılandırmaya ilişkin bir bulgu üretmiştir. Muamele belirtimi, sürüm ve ortam, iddianın çevresindeki bağlam değil iddianın parçasıdır.

## Bağlı kavramlar

- [[limitations-in-aied-research]]
- [[learning-design]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[learning-gains]]
- [[differential-effects-across-learner-groups]]
- [[research-methods-aied]]
- [[ai-assisted-educational-research]] — YZ Destekli Eğitimsel Araştırma
- [[meta-analysis-systematic-review]]
- [[quantitative-research]]
- [[benchmark]]
- [[rct]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[ai-use-disclosure]]
- [[theory-development-aied]]

## Bağlı makaleler

- [[ai-higher-ed-service-delivery-systematic-review-2026]] — Bir derleme, kendi derlemindeki bildirim eğriliğini ölçebilir

- [[oneill-presumed-effective-meta-analysis-2026]] — Presumed Effective: forensic audit of 14 AIED meta-analyses
- [[bartos-ai-learning-meta-meta-analysis-2026]] — Publication-bias-adjusted AI effects about one-third of reported size
- [[weidlich-chatgpt-effect-search-cause-2025]] — ChatGPT in Education: An Effect in Search of a Cause
- [[ai-supported-instruction-stem-meta-analysis-2026]] — Inclusion criteria used as the rigor threshold, and heterogeneity that changes with the model
- [[know-when-to-trust-ai-scoring-reliability-2026]] — When automated scoring reliability meets the task’s measurement ceiling
- [[verification-quality-reliance-calibration-genai-2026]] — What the verification and reliance literature does not measure
- [[citation-errors-hallucinations-computing-education-2026]] — Fabricated references that reached print in 2025–2026
- [[stanford-evidence-base-ai-k12-2026]] — Practice gains, exam losses: the assistance-removal problem in K-12 math
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Subgroup effects whose confidence intervals cross zero
- [[chick-faculty-development-ethical-ai-2026]] — Enabling conditions: policy signals, personal subscriptions, no time
- [[ai-tutoring-quality-k12-methodologies-2026]] — Vendor metrics with their calibration and experiment count disclosed
- [[ai-assisted-assessment-instruction-higher-ed-2026]] — Findings tied to model versions, and the field’s churn
- [[instruction-partners-ai-in-action-learning-tour-2026]] — Independent-evidence counts for 16 student-facing AI products already in use
