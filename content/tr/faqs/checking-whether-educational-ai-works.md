---
title: "Bir Eğitim YZ'sinin Doğru Çalışıp Çalışmadığını Yalnızca İyi Puan Aldığını Değil Nasıl Anlarız?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: faqs/checking-whether-educational-ai-works
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Bir satıcının değerlendirme raporu geliyor ve en üstte tek bir sayı var: insan notlayıcılarla anlaşma, 0,84. Ya da pilot uygulamanız cuma bitiyor ve kanıtınız bir memnuniyet anketi ile modelin sürüm notlarından kopyalanmış bir kıyaslama satırından oluşuyor. Toplantıda biri sistemin işleyip işlemediğini soruyor ve elinizde yanıta benzeyen bir rakam var.

Kısa yanıt: en sık gördüğünüz puanlar benzerliği ölçer ve benzerlik, “bu öğretir” ya da hatta “bu geri bildirim okunabilir” iddiasından daha zayıf bir iddiadır. Her sayının neyi kanıtlamasına izin verildiğine karar verin, sisteminizin ürettiği her çıktıyı puanlayın ve doğruluğu bir eşik, bir kişi ve bir tasarrufla birlikte bir kurala dönüştürün. Kimsenin üzerinde işlem yapamadığı bir sayı kanıt değildir.

## Kısa özet

**1.** Neyi önemsediğinizi adlandıran tek bir cümle yazın, sonra o şeyi okuyan bir ölçü seçin. Sözcük örtüşmesi akıl yürütmenin doğru olup olmadığını söylemez.

**2.** Her çıktıyı ayrı ayrı değerlendirin. Güçlü bir notlandırma puanı, yanındaki geri bildirim modülü hakkında hiçbir şey söylemez.

**3.** Bir insana yaklaşık elli çıktı puanlatın ve bu puanları otomatik denetleyicinizinkiyle karşılaştırın. İkisinin ayrıştığı yerde test edilen şey denetleyicidir.

**4.** “Doğruluk 0,84” ifadesini bir kuralla değiştirin: bu güvenin altında yanıtı bir insan okur. Eşiği, kazandırdığı iş payını ve anlaşmanın neye dönüştüğünü bildirin.

**5.** Güvenliği tüm konuşmalar boyunca test edin ve simüle bir öğrencinin eğitmeniniz hakkında söylediklerine güvenmeden önce o öğrenciyi denetleyin.

## Sayının neyi kanıtlamasına izin verildiğine karar verin

Bu literatüre iki sayı ailesi hâkimdir. İkisi de çıktınızın başka bir şeye ne kadar yakın benzediğini ölçer; bu, doğruluktan daha zayıf bir iddiadır.

**Benzerlik puanları** (ROUGE ve BLEU), sisteminizin yanıtının sözcüklerini bir referans yanıtın sözcükleriyle karşılaştırır. Beklenen metne yakın bir şey yazan bir model, akıl yürütmesi yanlış olduğunda ya da bir öğrenci doğru yanıta hiçbir şey öğretmeyen bir yoldan ulaşabildiğinde bile yüksek puan alır.

**Anlaşma puanları** (QWK, karesel ağırlıklı kappa), modelin notlarının bir insanınkine ne kadar yakın hizalandığını ölçer. Bir model, neden yanlış olduğu konusunda hatalıyken son notta notlayıcıyla eşleşebilir; öğrencinin öğrendiği kısım ise o nedendir.

Bir öğrenci yanlış bir yoldan, doğruya benzeyen bir yanlış yanıta ulaşabilir ve hiçbir benzerlik puanı bunu fark etmez. Önemsediğiniz şey akıl yürütmeyse, ölçünün onu okuması gerekir: bir insanın uyguladığı bir rubrik ya da o belirli adım için yazılmış bir kontrol.

Linear Control Systems ders asistanı bunu doğru biçimde bildiriyor. En iyi yapılandırması referans yanıtlara karşı **0,4093** benzerlik puanına ulaştı ve iyileşme sıfırın üzerinde güvenilir biçimde ölçüldü; yazarlar sayıların sözcükleri ve biçimi ölçtüğünü açıkça belirtiyor ([[lora-finetuned-control-systems-course-qa-2026]]). Puan etkileyici değil ve makale yine de yararlı, çünkü puanın neyi kapsadığını söylüyor.

## Her çıktıyı ayrı ayrı puanlayın

WrAFT projesinde ince ayarlanmış bir model, 360 ayrılmış TOEFL denemesinde insan notlayıcılarla **0,84** anlaşma puanına ulaştı. Bu, notlandırma için güçlü bir sonuçtur. Aynı projenin geri bildirim yazmak üzere eğitilmiş modeli, kesilmiş ve ayrıştırılamaz çıktı üretti; farklı bir modeli yalnızca istemleyerek ise öğretmenlerin tercih ettiği geri bildirim elde edildi ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Bilgi tabanı aynı başarısızlığı ikinci bir biçimde taşıyor: notlandırma modülü iyi puan alan, geri bildirimi ise cümle ortasında kesilmiş ve okunamaz gelen bir uygulama. Manşet sayısında bunu söyleyen hiçbir şey yoktu.

Öyleyse sisteminizin ürettiği çıktıları listeleyin, sonra her birine kendi ölçüsünü ve kendi geçme koşulunu verin. Notlandırma, geri bildirim metni, ipucu seçimi ve güvenlik redleri farklı biçimlerde başarısız olur ve modül düzeyindeki bir puan kendi modülünün ötesini göremez.

## Modelin emin olmadığı yere bir insan koyun

Bir korelasyon size modelin genellikle doğru olduğunu söyler. Doğru olmadığı durumlarda ne yapacağınızı söylemez. Güvene dayalı yönlendirme sonucu, bilgi tabanındaki en temiz şablondur ve kopyalanacak kadar kısadır.

Güven güvenilir bir uyarı işareti çıktı: model emin olmadığında yanılma olasılığı daha yüksekti (**β = -0,602, p < ,001**). Ekip, en az güvenilen yanıtların **%20**’sini bir insana gönderdi. Bu tek kural, insan notlarıyla anlaşmayı **0,78**’den **0,82**’ye çıkardı ve elle notlandırma işini kabaca **%80** azalttı ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Raporun içerdiği şeye bakın: bir eşik, bir kişi ve bir tasarruf. “Anlaşma 0,84” bunların hiçbirini içermez; üzerinde işlem yapılmasının zor ve tartışılmasının kolay olmasının nedeni budur.

## Otomatik denetleyicinizi bir insana karşı sınayın

Birçok ekip artık ilkini yargılamak için ikinci bir model kullanıyor. Düzenleme makul ve ikinci model otomatik olarak doğru değil.

Bir [[intelligent-tutoring|akıllı eğitmenlik sistemi]] için öncü bir modele ipucu yazdıran bir çalışma, bunların kabaca **%35**’inin fazla genel, yanlış ya da yanıtı ele veren ipuçları olduğunu ve modelin kendi otomatik kalite kontrollerinin hangilerinin kötü olduğu konusunda insan yargısıyla ayrıştığını buldu ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Pratik sürümü: yaklaşık elli çıktıdan bir örnek alın, bir insana puanlatın ve bunu denetleyicinizin puanlarıyla karşılaştırın. İkisinin ayrıştığı yerde denetleyici hakkında bir şey öğrenmiş olursunuz. Örneği ve ayrışma tablosunu saklayın, çünkü “nereden biliyorsunuz” diye soran bir hakeme yanıt veren ürün de odur.

## Görev izin verdiğinde niceliğin kendisini ölçün

En temiz çözüm, modeli ölçmeyi amaçladığınız niceliğin kendisi üzerinde eğitmektir. İnce ayarlanmış bir model, test sorularının istatistiksel özelliklerini yeniden üretmek üzere eğitildi: her maddenin ne kadar zor olduğunu ve güçlü öğrencileri zayıflardan ne kadar iyi ayırdığını. Bu örüntüleri kendisine söylenerek değil, öğrenerek edindi ([[multimodal-item-parameter-estimation-2026]]). Hedef değerlendirmenin kendi özelliği olduğu için değerlendirme, sözcükler hakkında değil o özellik hakkında olabildi.

Bitiş noktası kadar ilerlemeyi de bildirin. SWIM’in yazma simülatörü her aşamanın puanını yan yana yayımladı: rubriğe dayalı istemleme **0,577**, ince ayar **0,474 ± 0,023**, pekiştirmeli öğrenme **0,618 ± 0,005** ([[swim-student-writing-simulation-2026]]). Bir okur o tablodan eğitimin bir şey yapıp yapmadığını görebilir. Tek bir nihai sayı bunu söyleyemez ve ince ayarlı modelin istemden daha kötü performans gösterdiği bir aşamayı gizler.

## Projenizin dışındaki bir şeyle karşılaştırın

Önce bir temel çizgi edinin; ucuz olanı da dâhil. Ders asistanının dayanaksız modeli düz bir anahtar sözcük aramasının altında puan aldı; bu, yol haritasını değiştiren ve bulunması bir gün süren türden bir sonuçtur.

Sonra dışarıdan bir kıyaslama, sayınızın hiç iyi olup olmadığını söyler. CDPK pedagoji kıyaslamasında EduQwen **%96,52**’ye ulaşırken Gemini-3 Pro **%90,55**’te kaldı ([[singh-eduqwen-pedagogical-rl-2026]]). Gerçek öğretmen mesleki gelişim sınavlarından kurulan ve **97 modeli** kapsayan Pedagoji Kıyaslaması ise doğruluğun **%28** ile **%89** arasında değiştiğini buldu ([[cdpk-pedagogy-benchmark-llms|Lelièvre ve arkadaşları, 2025]]).

Öğretmekle ilgili bir görevde modeller zayıftan iyiye uzandı; yani bir kıyaslama sonucu sisteminizi geniş bir aralığın içinde bir yere yerleştirir.

## Güvenliği tüm bir konuşma boyunca test edin

Güvenlik testlerinin çoğu tek bir alışverişi kontrol eder. Eğitmenlikte önem taşıyan zararlar birikerek oluşur. SafeTutors, özellikle öğretmek için kurulmuş modellerin bile uzun bir konuşma boyunca bozulduğunu ve saklamaları gereken yanıtları açığa çıkarabildiğini buldu ([[hazra-safetutors-pedagogical-safety-2026]]).

Kontrolü tam konuşmalar boyunca yürütün ve test turlarını kasten yazın: yanılan öğrenci, ısrar eden öğrenci, modeli rolünden vazgeçirmeye çalışan öğrenci. On tur dayanıp on birincide çözülen bir eğitmen, önem taşıyan testte başarısız olur ve yanıt başına bir test takımı onu temiz olarak puanlar.

## Simüle öğrenciye güvenmeden önce onu denetleyin

Gerçek öğrencileri bulmak yerine simüle öğrenciler üretmek değerlendirmeyi çok daha ucuz kılar. Simüle bir öğrenci aynı zamanda bir ölçüm aracıdır ve araçların yanılabildiği biçimlerde yanılabilir: fazla işbirlikçi, fazla akıcı, bir ipucunu kabul etmeye fazla istekli.

Bilgi tabanındaki en doğrudan test, simüle ve istemlenmiş öğrencileri, gerçek öğrenci–eğitmen matematik diyaloglarının en büyük kamusal koleksiyonundan alınan **382 ayrılmış diyaloga** karşı, dil, davranış ve düşünmeyi kapsayan yedi ölçüyle kıyasladı ([[simulated-students-tutoring-dialogues-2026]]). Başka çalışmalar gerçekçiliği farklı açılardan zorluyor: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] modelleri hem öğrenci gibi davranmaya hem de öğrenci gibi düşünmeye eğitiyor ve geçmişe duyarlı profiller simülasyonu sabit bir kişilik yerine öğrencinin geçmişine koşullandırıyor ([[history-aware-student-simulation]]).

Test düzeneğiniz simüle bir öğrenciyse, eğitmeninizi notlandırmasına izin vermeden önce simülatörü gerçek dökümlerle doğrulayın.

## Değerlendirme ekiplerinin yanlış yaptığı şeyler

Yüksek bir anlaşma puanı, sistemin doğru olduğu anlamına gelir. Sistemin, karşılaştırdığınız notlayıcı gibi, karşılaştırdığınız denemelerde notlandırdığı anlamına gelir. WrAFT’ın 0,84’ü, ayrıştırılamayan bir geri bildirimle birlikte geldi.

Tek bir sayı ürünün tamamını temsil edebilir. Ekipler köşesinde “doğruluk 0,84” yazan ve geri bildirim modülü, ipucu politikası ya da red davranışı için alanı olmayan bir gösterge paneli yayına alıyor. Modül düzeyindeki puan, hesaplanması en kolay ve bildirilmesi en az bilgilendirici sayıdır.

Dışarıdan bir kıyaslama, aracın işleyip işlemediğini çözer. Pedagoji Kıyaslaması’nın %28 ile %89 arasındaki yayılımı, görev ailesinin zor ve dengesiz biçimde hizmet aldığını söyler. O aralıktaki konumunuz, modeliniz hakkında bir olgudur. Öğrencilerinizin sonradan ne yapabildiği başka bir olgudur.

Bir modelin bir modeli yargılaması, insan puanlarının ucuz bir yerine geçenidir. Ucuzdur. %35 rakamı ve hangi ipuçlarının kötü olduğu konusundaki ayrışma, hiç denetlenmemiş bir yargıcın neleri geçireceğini betimler.

Simüle öğrenciler değerlendirmeyi bedava kılar. Ucuz kılarlar ve maliyeti doğrulamaya taşırlar. 382 diyalogluk karşılaştırma, aracın kalibre edilmesi gerektiği için vardır.

## Karşınıza çıkacak tepkiler

**“Bunun için etiketleyicimiz yok.”** Elli puanlanmış çıktı başlamak için yeterlidir. Kimse boş değilse kendiniz puanlayın ve kâğıdı saklayın.

**“Kıyaslama puanımız Gemini’yi geçiyor.”** Geçiyor; CDPK’da, o kıyaslamanın kullandığı istemlerle. Yanına desteksiz ölçüyü koyun.

**“Otomatik yargıcımız insan değerlendiricilerimizle anlaşıyor.”** O zaman tek bir örneklemde tek bir korelasyonunuz var. Hangi çıktılarda ayrıştığını sorun ve onları okuyun, çünkü başarısızlık orada yaşıyor.

**“Yayına geçmeden tam bir değerlendirme yapamayız.”** Ucuz üçlüyü çalıştırın: ayrı ayrı puanlanmış bir çıktı, bir insan tarafından puanlanmış elli çıktı, konuşma uzunluğunda bir güvenlik geçişi. Pahalı maddeler pilotu izleyebilir.

**“Sistem yalnızca bir demo, dolayısıyla değerlendirme erken.”** Bir demo, sayınızın sözcükleri ölçtüğünü keşfetmek için en ucuz yerdir. Ona bir yol haritası bağlandığında aynı bulgu üzerinde işlem yapmak daha pahalıya gelir.

## Bu hafta yapılacaklar

**1.** Değerlendirmenizin desteklemesi gereken tek cümlelik iddiayı yazın. Değerlendirme belgesinin en üstüne koyun.

**2.** Sistemin ürettiği her çıktıyı listeleyin ve her birine bir satır, bir ölçü ve bir geçme koşulu verin.

**3.** Elli çıktı çekin, kendiniz puanlayın ve puanlarınızı denetleyicininkinin yanına koyun.

**4.** Güven dağılımını hesaplayın ve içinde bir sayı olan yönlendirme kuralını, artı eşiğin altında kalanları okuyacak kişinin adını yazın.

**5.** Öğrencinin yanıldığı, iki kez itiraz ettiği ve yanıtı istediği bir güvenlik konuşması yürütün.

## Sonraki adımlar

[[making-ai-better-at-supporting-learning|YZ’yi kendi konumumuzda öğrenmeyi desteklemede nasıl daha iyi hâle getirebiliriz?]] aynı sorunun tasarım tarafını kapsar. [[training-ai-tutors-to-guide-rather-than-answer]] bir eğitmenlik davranışına giden eğitim yolunu ele alır ve [[evaluating-ai-interventions-methods]] bu sorunun öğretim elemanına dönük sürümüdür; [[reporting-interpreting-aied-research]] ise araştırmaya dönük olanıdır. Yöntemler [[ai-ed-evaluation]] ve [[llm-training-and-fine-tuning]] altında durur.
