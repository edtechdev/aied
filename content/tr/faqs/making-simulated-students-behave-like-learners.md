---
title: "Bir Simüle Öğrenciyi Gerçek Bir Öğrenen Gibi Davrandırmayı Nasıl Başarırız?"
created: "2026-10-14T10:36:01-04:00"
weight: 71
type: faq
connected_faqs: [checking-whether-educational-ai-works, addressing-common-misconceptions-ai-education, making-ai-better-at-supporting-learning]
foundations: [ai-education, agentic-ai]
pedagogy: [scaffolding, misconceptions]
technology: [simulating-students, student-modeling, knowledge-tracing, llm, generative-ai]
audience: [educational technology developers, software developers, researchers, instructors]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety, trust-calibration]
reviewed_by: [editor]
contributors: [editor]
translation_of: faqs/making-simulated-students-behave-like-learners
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Bir simüle öğrenciyi inandırıcı kılmak kolaydır, gerçekçi kılmak zordur. Genel bir modelden güçlükle karşılaşan bir öğrenciyi canlandırmasını isterseniz akıcı, makul bir kafa karışıklığı üretir — bilmemeyin doğru söz varlığı, doğu kayıtta. Sonra ona düzeltildikten sonra bu öğrencinin ne söyleyeceğini sorun; sessizce doğru cevabı bulur.

Bu boşluk bütün problemdir ve daha iyi bir kişilik (persona) istek metni yazma meselesi değildir. Bu sayfa, bir simülatör kuran ya da prova yapmak veya sınamak için bir simülatör kullanan herkes için, bir simüle öğrenciyi gerçekten bir öğrenen gibi davrandıran şeylerin ne olduğunu ele almaktadır.

## Kısa özet

Modeller yardımcı ve doğru olacak biçimde eğitilir. Öğrenenler ikisi de değildir. Dolayısıyla iş, **simülatörün ne bildiğini** ve **bu bilginin nasıl değiştiğini** kısıtlamak, ardından bir öğrenen gibi *duymak* yerine bir öğrenen gibi davrandığını doğrulamaktır. Yalnızca istek metniyle oraya varılmaz; aşağıdaki kanıtlar oldukça tutarlı biçimde, istek metnin eğitimin ya da yapının kaldırdığı bir tavan oluşturduğunu göstermektedir.

## Ne simüle etmediğinizi bilerek başlayın

Bir simülatöre güvenmek üzere olan herkes için en yararlı bulgu kapsama ilişkindir. LLM öğrencilerine özel ders veren on iki öğretmen, aşırı karmaşık dil, eksik duygu, doğal olmayan dikkatlilik ve açıklanamayan bilgi sıçramaları bildirmiş; simülasyonlar gerçek öğrenci davranışının dört kadranından yalnızca **birini** temsil etmiştir ([[llm-student-simulation-teacher-insights|Martynova ve ark., 2026]]). Simülasyonun kapsadığı kadran, taklit edilmesi en kolay olan kadrandı.

Bu, neredeyse kimsenin kontrol etmemesi nedeniyle önemlidir: öğrenen simüle eden çalışmaların yalnızca **%3**’ü simülatörünü kullanımdan sonra doğrulamaktadır. Bir simülatör kurup onu doğrulamazsanız ezici çoğunluktasınızdır ve bu istatistiğin aktarılmaya değer olmasının nedeni sizsinizdir.

## Yetkinlik paradoksu: simülatörünüz çok fazla şey biliyor

Belirleyici güçlük, yetkin bir modelin kısmi bilen biri gibi davranmasının kolay olmamasıdır. Araştırmalar buna **yetkinlik paradoksu** demektedir: kısmi bilgili öğrenenleri taklit etmeye çağrılan geniş anlamda yetkin modeller, gerçekçi olmayan hata örüntüleri ve öğrenme dinamiği üretmektedir.

Sapmanın bir yönü vardır ve en çok simüle edilmeye ihtiyaç duyan öğrenenlere yöneliktir. **49 NGSS uyumlu fen dersi**nden çıkarılan öğrenci fikirlerine karşı altı model, fikirlerin çoğunu beklenen bilgi kapsamı içinde ve yaklaşık üçte ikisini hedef okuma düzeyinde ya da altında tutmuş; ancak öğrencinin en küçük olduğu yerleri aşmıştır. İlkokul ve ortaokul fikirleri, hedef sınıfın bilgi kapsamını ve okuma düzeyini daha sık aşmış; bütün olarak metin havuzu daha geniş kapsamlı akıl yürütmeye, daha teknik söz varlığına ve gerçek ders fikirlerinden **daha az belirsizlik göstergesine** ("belki", "sanki") yönelmiştir ([[llm-simulating-student-scientific-thinking-2026|Nguyen ve Cao, 2026]]).

O çalışmadan iki pratik not. Model seçimi tek boyutlu değildir — ders fikirlerine yakın uyan bir sistem onları yine de sınıf düzeyinin üzerine yerleştirebilir. Düzeltme ise genellikle mimariden çok eğitseldir: açık bir sınıf düzeyi istek metniyle yeniden isteme, çoğu modeli aralığın içine geri döndürmüştür.

## Yüzeysel gerçekçilik yanlış hedeftir

Bir öğrenci gibi *duyan* bir simülatör, bir öğrencinin inançlarını taşımayabilir ve olağan kalite kontrolleri aradaki farkı ayırt edemez.

Başarısızlık nicel olarak ölçülmüştür. **4B’den 120B’ye parametreye sahip yedi modelde**, simülatörler hangi geri bildirimi alırsa alsınlar neredeyse tek düze oranlarda doğru cevaba geçmiştir — dolayısıyla çıktı benzerliği, onun arkasındaki inanç durumu hakkında hiçbir şey söylemez. **Seçici Geçiş Puanı**’na (Selective Flip Score) karşı eğitim, bağlılığı (faithfulness) en fazla **+0,56** yükseltmiştir ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar & Sachan, 2026]]). Bir simülatörün bir yanlış kanıyı taşımasını istiyorsanız bu özellik için eğitmelisiniz; onu metinden okuyamazsınız.

Ters hata da olur; bu nedenle "insana benziyor mu?" her iki yönde de zayıf bir sınayıdır. Kör bir çalışmada uzman etiketleyiciler, LLM tarafından üretilen Java gönderimlerinin **196 tanesinin 164’ünü (%83,7)** insan yazımı olarak yanlış sınıflandırmış; hatalar işlevsel olarak özgün hatalardan ayırt edilemez durumdaydı. Gerçek hatalarla uyum, problem zorluğu arttıkça düşmüştür ([[simulating-students-java-programming-errors-llms|Keramati ve ark., 2026]]).

## İstek metni, eğitimin kaldırdığı bir tavan oluşturur

SWIM, üç yaklaşımın en net karşılaştırmasıdır; çünkü üretilen her kompozisyonu izlenimci biçimde değerlendirmek yerine hedef nitelik profiline göre puanlamaktadır:

- **Rubrik temelli istek metni**: güçlü tescilli modellerde bile sınırlı denetim — en iyi ortalama nitelik QWK **0,577** (Claude Sonnet), **0,422** (GPT-5.4), açık bir 7B modelde neredeyse sıfır.
- Gerçek puan-kompozisyon çiftleri üzerinde **denetimli ince ayar**: o 7B model için **0,474 ± 0,023**.
- Otomatik kompozisyon puanlamadan türetilen ödülle **GRPO**: **0,618 ± 0,005**; kazanımlar, politikanın hiç eğitim görmediği iki bağımsız puanlayıcıda da sürmüştür ([[swim-student-writing-simulation-2026]]).

İstek metni ayrıca gerçekçi bir popülasyon yerine **idealize** bir popülasyon üretmiştir: ortalama normalleştirilmiş genel puan **0,74**, gerçek öğrenciler için **0,58**; ortalama uzunluk **304 kelime**, gerçek öğrenciler için **167**. Eğitilmiş modeller, herhangi bir uzunluk denetimi olmaksızın insan puan ve uzunluk dağılımlarını yeniden üretmiştir.

Bir şey zor kalmıştır ve gerçekçilik vaat etmeden önce bilinmesi gerekir: özgün **düşük yeterlilikli** biçim. Eğitilmiş modeller sözdizimini yeniden üretmiş ama çok az yazım ve dilbilgisi hatası yazmış; istek metni ise zayıflığı çoğunlukla yüzeysel bozulmayla — yetkin bir metnin üzerine serpilen yazım hatalarıyla — taklit etmiştir.

## Simülatörün bildiğini kısıtlamanın iki yolu

Model çok fazla şey biliyorsa, bulunması gereken durumu belirtebilir ya da bilgiyi elinden alabilirsiniz.

**Kişilikten çok bir bilgi durumuna koşullandırın.** Eğitimsiz bir çerçeve, her öğrencinin bilişsel prototipini bir [[knowledge-graph]] üzerinden oluşturur ve ışın arama adaylarını buna göre puanlar, simülasyon doğruluğunda **%100’lük bir iyileşme** bildirir ([[simulating-students-diverse-cognitive-levels-2025|Wu ve ark., 2025]]). Kalitesi **öğrencinin bilişsel düzeyiyle yükselir** ve taşınması gereken bulgu budur: daha zayıf öğrenenler zor durum olmaya devam eder; genellikle asıl konu onlar olduğu için bu talihsizdir. Durağan bir kişilikten çok bilişsel dinamiği modellemek daha ileri gider — CogEvolution’ın ICAP tabanlı durum güncellemeleri, durağan ajanların **0,45** olduğu yerde R²LC = **0,92**’ye ulaşmış, ICAP modülü olmadan ise **0,58**’e düşmüştür ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang ve ark., 2026]]).

**Ya da bilgiyi elinden alın.** Mistral-7B’de 16 hedefli bilgi bileşenini baskılamak, doğruluğu %10 unutma oranında yaklaşık **0,75**’ten %40’ta **0,5’in altına** düşürmüş; taban model ise yaklaşık **0,85** civarında kalmıştır — baskılanan bilginin denetimli yeniden öğrenme ve koç eşliğindeki diyalog yoluyla geri kazanılabildiği görülmüştür ([[simulating-novice-students-machine-unlearning-2026|Song, Guo & Lin, 2026]]). Bu, bir acemiyi doğrudan üretmeye en yakın şeydir ve simülatörün bir oturum sırasında öğrenmesini istiyorsanız geri kazanılabilirlik bir avantajdır.

## Etkileşimi betikli yapın, kişiliği değil

Kişilik kararlılığı, model seçiminden çok bir etkileşim tasarımı problemi olarak ortaya çıkmaktadır. Beş LLM’yi üç istek metni tasarımı ve dört DEHB yoğunluk kişiliğiyle çaprazladığında, **betikli, göreve bağlı etkileşimler gözlemci değerlendirmeli davranış sapmasını ortadan kaldırmıştır** — betiksiz diyaloga göre **%97’ye kadar daha az**. Açık kişilik yönergeleri olmadan, taban öğrenci temsili yüksek DEHB belirtilerine doğru yönelmiştir ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase & Leins, 2026]]).

Pratik okuma: simülatörünüz saparsa çözüm, hangi modeli seçtiğinizde ya da öğrenciyi nasıl betimlediğinizde değil, tur tur ona ne yaptırdığınızda olabilir.

## İki eksende değil bir eksende sınayın

"Bu simülatör iyi mi?" sorusunun en net biçimselleştirmesi StudentSim’den gelir; bu iki şeyin **birlikte** sağlanmasını şart koşar:

- **Davranışsal bağlılık** — simülatörün bir öğrencinin kendi yanıtlarına ne kadar uyduğu.
- **Yönlendirmeye duyarlılık** — özel ders hocasının yönlendirmesinin götürdüğü yöne ne kadar güvenilir biçimde güncellendiği.

Kıyaslaması, halka açık öğrenen metin havuzlarını (satranç, ikinci dil olarak İngilizce yazma, matematik) herhangi bir simülatörün değerlendirildiği ve tutulan kayıtlar üzerinde puanlandığı, öğrenci başına bir protokole dönüştürür. Sonuç yararlı bir teşhistir: alana özgü durum izleme **duyarlılıkta zayıftı**; yalnızca istek metniyle yapılan LLM rol canlandırması ise **bağlılıkta zayıftı** ([[studentsim-llm-student-simulators|Yang ve ark., 2026]]). Bir simülatör bir testi geçip diğerinde başarısız olabilir; bu yüzden ikisini de bildirin.

Kavram kanıtı olarak, bir satranç özel dersi [[reinforcement-learning]] döngüsünde ödül olarak kullanılan donmuş bir StudentSim, uzmanların önde gelen bir LLM simülatörü ödülüne ya da hiç PÖ’ye (RL) karşı eğitilmişlerden daha doğru, daha iyi yönlendirilmiş ve daha kişiselleştirilmiş bulduğu özel dersler üretmiştir. İyi bir simülatör yalnızca bir ölçüm aracı değildir — eğitim sinyali de olabilir.

## Gerçek öğrenenlere karşı doğrulayın, sezginize karşı değil

İki kıyaslama, doğrulamanın ne kadara mal olduğunu ve ne kazandırdığını göstermektedir.

Gerçek öğrenci–özel ders matematik diyaloglarının en büyük halka açık havuzundan **382 tutulan diyalog** üzerinde **dokuz simülasyon yöntemi**ni **yedi referans tabanlı metriğe** karşı kıyaslandığında, istek metni yöntemi ince ayarın gerisinde kalmıştır: diyalog eylemlerinde (**0,4998**’e karşı **0,6840**), ROUGE-L’de (**0,1648**’e karşı **0,3212**) ve kosinüs benzerliğinde (**0,5460**’ya karşı **0,7390**). Ancak sınanan en iyi yöntem olan 8B model üzerinde tercih iyileştirmesi, denetimli ince ayarı yalnızca **az farkla** geçmiş ve **hatalarda daha kötü** olmuş; üç özel ders hocasıyla yapılan insan değerlendirmesi bu sıralamayı doğrulamıştır ([[simulated-students-tutoring-dialogues-2026|Scarlatos ve ark., 2026]]). Ders şu: bu merdivenin tepesi ortasından çok uzakta değildir; bu yüzden simülatörünüzle bir taban çizgisi arasındaki boşluğun büyük olması, küçük olmasından daha bilgilendiricidir.

Öğrenci simülatörleri ayrıca, arkasındaki gizli akıl yürütme olmadan gözlemlenebilir eylemleri yeniden üretmektedir. [[inside-llm-student-simulator-reasoning-2026|INSIDE]], her eylemden önce içsel bir diyalog üretmek üzere modelleri ince ayarlar ve gerçek kod düzenlemeleriyle üretilen akıl yürütme arasındaki en yüksek uyuma ulaşır — tanıdık problemlerde **%51,8**, görülmemiş olanlarda **%57,9** — eylem bağlılığından ödün vermeden (Niousha ve ark., 2026). Simüle öğrencinizin bir şeyi *neden* yaptığı sizi ilgilendiriyorsa, eylem düzeyinde bağlılık yeterli değildir.

## Bazen bir açıklama simülasyondan iyi olur

Bir kohort kurmadan önce bilinmesi gereken bir sonuç: öğrenciler katılmadan *önce* bir çevrimiçi öğrenme deneyimini değerlendirmek — terk etmeyi ve tamamlamayı öngörmek, tasarım geri bildirimi vermek — için dersi baştan sonra geçen ve deneyimin zengin bir açıklamasını üreten tek bir **"açıklayan"** web ajanı, öğrenci popülasyonunu doğrudan simüle etmekten daha iyi performans göstermiştir.

O karşılaştırmadaki simüle öğrenciler, gerçek öğrenenlerden çok daha az davranış aralığı sergilemiştir: beş test dersinde **100 ajan** arasında gerçek öğrencilerin izlediği yolların yalnızca yaklaşık **%4**’ünü yeniden üretmişler, hem de çok daha fazla hesaplama gücü harcayarak. Açıkla-sonra-öngör boru hattı, devasa bir küresel CS1 kursunda en iyi terk etme dağılımı öngörüsüne ulaşmış (ortalama JSD **0,060**, bütün taban çizgilerini geçerek) ([[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech, 2025]]).

Çizdiği sınır yararlıdır: öğrencilerin bir *dağılımını* simüle etmek, hedef sonuç öngörüsü ya da tasarım eleştirisi olduğunda gereksiz olabilir — hatta ters etki yapabilir. Simülasyon, gerçek öğrenen çeşitliliğini kapsamanın önemli olduğu durumlarda maliyetini karşılar; örneğin bir YZ’nin çeşitli profillere davranışını denetlerken ya da bir öğretmene karşı prova yapacak bir şey verirken.

## Bir simülatöre güvenmeden önce kontrol listesi

**1.** Kapsamınıza *dahil etmediğiniz* öğrenenleri yazın. Simülasyonlar en kolay kadranı yakalama eğilimindedir.
**2.** Düz metni değil inanç durumunu sınayın. Simülatöre düzeltildikten sonra ne söylediğini sorun; doğru cevaba geçen bir simülatör yanlış kanıyı taşımamaktadır.
**3.** Bağlılık önemliyse yalnızca istek metnine bel bağlamayın. İstek metni, eğitimin ya da yapının kaldırdığı bir tavan oluşturur.
**4.** Bilgiyi nasıl kısıtlayacağınıza karar verin — bilgi durumunu belirleyin ya da bilgiyi elinden alın — kişilik betimlemek yerine.
**5.** Yalnızca kişiliği değil etkileşimi betikleyin. Göreve bağlı turlar davranış sapmasını önemli ölçüde azaltır.
**6.** Bağlılığı ve yönlendirmeye duyarlılığı ayrı ayrı puanlayın. Bir simülatör birinde başarılı olup diğerinde başarısız olabilir.
**7.** Gerçek öğrenen verilerine karşı doğrulayın ve geçtiğiniz taban çizgisini bildirin. Buradaki en iyi yöntemler, kendilerinin altındakilerden yalnızca az farkla daha iyidir.
**8.** Bir popülasyon kurmadan önce tek bir açıklayan ajanın sorunuzu daha düşük maliyetle yanıtlayıp yanıtlamayacağını sınayın.
**9.** En zayıf öğrenenlerin en zor durum olacağını bekleyin ve simülatörünüz onlar hakkında sonuç çıkarmak için kullanılacaksa bunu söyleyin.

## İlgili sorular

- [[checking-whether-educational-ai-works|Bir eğitim YZ’sinin yalnızca iyi puan almakla kalmayıp doğru biçimde çalışıp çalışmadığını nasıl anlarız?]] — bir simülatöre karşı sınadığınız sistemleri değerlendirmek
- [[addressing-common-misconceptions-ai-education|Eğitimde yapay zekaya ilişkin yaygın yanlış kanıları nasıl ele alabiliriz?]] — simüle öğrencilerin araştırmada gerçek öğrenenlerin yerine geçip geçemeyeceği
- [[making-ai-better-at-supporting-learning|Kendi alanımızda öğrenmeyi desteklemede YZ’yi nasıl daha iyi hale getirebiliriz?]] — yukarıdaki ince ayar sonuçlarının ardındaki eğitim yöntemleri
- [[simulating-students]] — eksiksiz kavram sayfası
