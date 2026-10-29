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
contributors: [editor]
translation_of: faqs/making-simulated-students-behave-like-learners
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
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
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Perşembe günü bir demo var. İçindeki simüle öğrenci bir kesir problemini kaçırıyor, bir ipucu alıyor ve sonra doğru yanıtı doğru açıklamayla üretiyor. Odadaki biri zorlanan bir öğrenenin neden bunu yapacağını soruyor ve sizin bir yanıtınız yok.

Bir sonraki demodan önce şu kadarı netleşmeli: bir modele öğrenci rolü vermek, öğrenenin sesini üretir. Davranışı üreten şey, simülatörün ne bildiğine dair bir kısıt, turlardaki yapı ve gerçek öğrenenlerin kayıtlarına karşı doğrulamadır. Öğrenenleri simüle eden çalışmaların yalnızca %3'ü simülatörünü kullanımdan sonra doğruluyor, dolayısıyla bunu sizin için kimse kontrol etmeyecek.

## Kısa özet

**1.** Hangi öğrenenleri simüle etmediğinizi yazın ve o cümleyi kullanıcılarınızın okuyacağı yere koyun.

**2.** Düzyazıyı değil inanç durumunu test edin. Bir düzeltmeden sonra simülatörün ne söylediğini sorun.

**3.** Bilgiyi bilinçli olarak kısıtlayın: epistemik durumu belirtin ya da bilgiyi çıkarın.

**4.** Etkileşimi tur tur senaryolaştırın. Daha iyi bir persona istemi kaymayı düzeltmez.

**5.** Davranışsal sadakati ve rehberlik yanıtlılığını gerçek öğrenen kayıtlarına karşı ayrı ayrı puanlayın.

## Simülatörün hangi soruyu yanıtladığına karar verin

"Simüle öğrenci" başlığı altında üç iş çökertiliyor ve bunlar farklı düzenekler gerektiriyor. Bir öğretmeni ya da özel ders veren kişiyi prova etmek, baskı altında inandırıcı davranan bir ortak gerektirir. Bir YZ'nin farklı öğrenen profillerine nasıl davrandığını denetlemek, önemsediğiniz profillerin kapsanmasını gerektirir. Bir ders için sonuç öngörmek, tek bir inandırıcı birey değil öğrenen dağılımı gerektirir. Birinci iş için kurulmuş bir simülatör üçüncüsünde sizi hayal kırıklığına uğratacaktır ve aşağıdaki kanıt bunları sürekli ayırıyor.

## Kapsamadığınız öğrenenleri adlandırın

Bir simülatöre güvenmek üzere olan herkes için en yararlı bulgu kapsamla ilgilidir. LLM öğrencilerine özel ders veren on iki öğretmen aşırı karmaşık dil, eksik duygu, doğal olmayan dikkatlilik ve açıklanmayan bilgi sıçramaları bildirdi ve simülasyonlar gerçek öğrenci davranışının dört bölgesinden yalnızca birini temsil ediyordu ([[llm-student-simulation-teacher-insights|Martynova ve ark., 2026]]). Kapsadıkları bölge, simüle edilmesi en kolay olanıydı.

Bu önemli, çünkü neredeyse kimse kontrol etmiyor. Öğrenenleri simüle eden çalışmaların yalnızca %3'ü simülatörünü kullanımdan sonra doğruluyor. Bir tane kurup doğrulamayı atlarsanız, ezici çoğunluğun içindesiniz ve o istatistiğin alıntılanabilir kalmasının nedeni de sizsiniz.

## Simülatörün bildiklerini kısıtlayın

Yetenekli bir model kısmi bilen biri gibi yapmakta kolayca zorlanır. Araştırma buna **yeterlik paradoksu** diyor: kısmen bilgili öğrenenleri taklit etmesi istenen geniş yetenekli modeller gerçekçi olmayan hata örüntüleri ve öğrenme dinamikleri üretiyor.

Kaymanın bir yönü var ve en çok simüle edilmeye ihtiyaç duyan öğrenenleri işaret ediyor. NGSS ile uyumlu 49 fen dersinden alınan öğrenci fikirlerine karşı altı model fikirlerin çoğunu beklenen bilgi kapsamı içinde ve kabaca üçte ikisini hedef okuma düzeyinde ya da altında tuttu, sonra tam olarak öğrenenin en küçük olduğu yerde aştı. İlkokul ve ortaokul fikirleri hedef sınıfın bilgi kapsamını ve okuma düzeyini daha sık aştı ve derlem gerçek ders fikirlerine göre daha geniş akıl yürütmeye, daha teknik sözlüğe ve daha az belirsizlik işaretine ("belki", "görünüşe göre") yöneldi ([[llm-simulating-student-scientific-thinking-2026|Nguyen ve Cao, 2026]]).

O çalışmadan iki not. Model seçimi tek boyutlu değildir, çünkü ders fikirleriyle yakından eşleşen bir sistem onları yine de sınıf düzeyinin üstüne çıkarabilir. Ve onarım çoğu zaman öğretimseldir: açık bir sınıf düzeyi yeniden istemi çoğu modeli aralığa geri taşıdı.

## Durumu belirtin ya da bilgiyi elinden alın

Model çok fazla şey biliyorsa, içinde bulunması gereken durumu adlandırabilir ya da sahip olmaması gereken bilgiyi çıkarabilirsiniz.

**Epistemik bir duruma koşullayın.** Eğitimsiz bir çerçeve her öğrencinin bilişsel prototipini bir [[knowledge-graph|bilgi grafiğinden]] kuruyor ve ışın araması adaylarını buna karşı puanlıyor; simülasyon doğruluğunda %100 iyileşme bildiriyor ([[simulating-students-diverse-cognitive-levels-2025|Wu ve ark., 2025]]). Kalitesi öğrencinin bilişsel düzeyiyle birlikte yükseliyor, dolayısıyla daha zayıf öğrenenler daha zor vaka olarak kalıyor; bu da genellikle asıl meselenin onlar olması düşünülürse talihsiz. Statik bir persona yerine bilişsel dinamikleri modellemek daha ileri gidiyor: CogEvolution'ın ICAP tabanlı durum güncellemeleri statik ajanların 0,45'e ulaştığı yerde R²LC = 0,92'ye ulaştı ve ICAP modülü olmadan 0,58'e çöktü ([[cogevolution-student-cognitive-evolution-agent-2026|Zhang ve ark., 2026]]).

**Bilgiyi çıkarın.** Mistral-7B'de 16 hedefli bilgi bileşenini bastırmak, doğruluğu %10 unutma oranında yaklaşık 0,75'ten %40'ta 0,5'in altına düşürdü; temel model ise 0,85 civarında kaldı. Bastırılan bilginin gözetimli yeniden öğrenme ve koç rehberli diyalog yoluyla geri kazanılabilir olduğu görüldü ([[simulating-novice-students-machine-unlearning-2026|Song, Guo ve Lin, 2026]]). Bu, doğrudan bir acemi üretmeye en yakın şeydir ve simülatörün oturum sırasında öğrenmesini istiyorsanız geri kazanılabilirlik bir özelliğe dönüşür.

## Personayı değil turları senaryolaştırın

Persona kararlılığı, model seçimi değil etkileşim tasarımı sorunu çıkıyor. Beş LLM'i üç istem tasarımı ve dört DEHB yoğunluğu personasıyla çaprazlayan çalışmada, senaryolu göreve bağlı etkileşimler gözlemci tarafından puanlanan davranışsal kaymayı senaryosuz diyaloğa karşı %97'ye kadar ortadan kaldırdı. Açık persona talimatları olmadan temel öğrenci temsili yüksek DEHB belirtilerine kaydı ([[llm-educational-simulation-adhd|Gonnermann-Müller, Haase ve Leins, 2026]]).

Simülatörünüz kayıyorsa, modeli değiştirmeden ya da öğrencinin betimlemesini yeniden yazmadan önce tur tur ondan ne yapmasını istediğinize bakın.

## Bir değil iki şeyi puanlayın

StudentSim iki özelliğin birlikte tutmasını gerektiriyor: **davranışsal sadakat**, yani simülatörün bir öğrencinin kendi yanıtlarıyla ne kadar iyi eşleştiği, ve **rehberlik yanıtlılığı**, yani özel ders verenin rehberliğinin götürdüğü yere doğru ne kadar güvenilir biçimde güncellendiği. Kıyaslaması kamuya açık öğrenen derlemlerini (satranç, ikinci dil İngilizce yazma, matematik) herhangi bir simülatörün uydurulup ayrılmış kayıtlarda puanlandığı öğrenci başına bir protokole dönüştürüyor. Alana özgü durum izleme yanıtlılıkta zayıf çıktı ve yalnızca isteme dayanan LLM rol yapma sadakatte zayıf çıktı ([[studentsim-llm-student-simulators|Yang ve ark., 2026]]). Bir simülatör bir testi geçip diğerinde kalabilir, dolayısıyla ikisini de bildirin.

Bir kavram kanıtı olarak, satranç öğretmeni bir [[reinforcement-learning|pekiştirmeli öğrenme]] döngüsünde ödül olarak kullanılan donmuş bir StudentSim, uzmanların sınır modeli simülatörü ödülüne karşı eğitilenlerden ya da hiç pekiştirmeli öğrenme olmadan eğitilenlerden daha doğru, daha iyi yönlendiren ve daha kişiselleştirilmiş olarak puanladığı öğretmenler üretti. İyi bir simülatör ölçüm olduğu kadar eğitim sinyali de olabilir.

Eylem düzeyindeki sadakatin kendi sınırı var. Öğrenci simülatörleri gözlemlenebilir eylemleri arkalarındaki örtük akıl yürütme olmadan yeniden üretiyor ve [[inside-llm-student-simulator-reasoning-2026|INSIDE]] modelleri her eylemden önce bir iç diyalog üretmek üzere ince ayarlıyor; üretilen akıl yürütme ile gerçek kod düzenlemeleri arasındaki en yüksek uyumu tanıdık problemlerde %51,8 ve görülmemiş problemlerde %57,9 ile yakalıyor, eylem sadakatini kaybetmeden (Niousha ve ark., 2026). Simüle öğrencinizin bir şeyi neden yaptığı sizin için önemliyse, eylemi eşleştirmek yeterli değildir.

## Gerçek öğrenenlere karşı doğrulayın ve başlangıç düzeyini bildirin

İki karşılaştırma doğrulamanın maliyetini gösteriyor.

Dokuz simülasyon yöntemini, gerçek öğrenci-öğretmen matematik diyaloglarının en büyük kamuya açık derleminden 382 ayrılmış diyalog üzerinde yedi referans tabanlı ölçütle kıyaslamak, diyalog edimlerinde (0,4998'e karşı 0,6840), ROUGE-L'de (0,1648'e karşı 0,3212) ve kosinüs benzerliğinde (0,5460'a karşı 0,7390) istemin ince ayarın gerisinde kaldığını gösterdi. Test edilen en iyi yöntem, 8B'lik bir modelde tercih optimizasyonu, gözetimli ince ayarı yalnızca marjinal olarak geçti ve hatalarda daha kötüydü; üç öğretmenli bir insan değerlendirmesi bu sıralamayı yeniden üretti ([[simulated-students-tutoring-dialogues-2026|Scarlatos ve ark., 2026]]). Bu merdivenin tepesi ortaya yakın duruyor, dolayısıyla bildirdiğiniz başlangıç düzeyi kendi sayınızın ne kadar etkileyici göründüğüne karar veriyor.

SWIM, istem vermenin, ince ayarın ve pekiştirmeli öğrenmenin en net karşılaştırmasıdır, çünkü üretilen her denemeyi izlenimsel olarak yargılamak yerine hedef bir özellik profiline karşı puanlıyor. Rubriğe dayalı istem verme güçlü tescilli modellerde bile sınırlı kontrol verdi; en iyi ortalama özellik QWK değeri 0,577 (Claude Sonnet) ve 0,422 (GPT-5.4) oldu, açık bir 7B modelde ise sıfıra yakın. Gerçek puan-deneme çiftleriyle gözetimli ince ayar o 7B model için 0,474 ± 0,023'e ulaştı. Otomatik deneme puanlamasından türetilen bir ödülle GRPO 0,618 ± 0,005'e ulaştı ve kazanımlar politikanın hiç eğitilmediği iki bağımsız puanlayıcıda korundu ([[swim-student-writing-simulation-2026]]).

İstem verme ayrıca gerçekçi bir nüfus yerine idealize edilmiş bir nüfus üretti: ortalama normalleştirilmiş toplam puan gerçek öğrenciler için 0,58 iken 0,74 ve medyan uzunluk 167 sözcüğe karşı 304 sözcük. Eğitilen modeller insan puan ve uzunluk dağılımlarını hiçbir uzunluk gözetimi olmadan geri kazandı. Bir şey zor kaldı: otantik düşük yeterlik biçimi. Eğitilen modeller sözdizimini geri kazandı ama çok az yazım ve dilbilgisi hatası yazdı; istem verme ise zayıflığı yüzeysel bozulmayla, aksi halde yetkin düzyazıya serpiştirilmiş yazım hatalarıyla simüle etti.

Yüzeysel gerçekçilik iki yönde de zayıf bir testtir. Körlenmiş bir çalışmada uzman açımlayıcılar 196 LLM üretimi Java tesliminin 164'ünü (%83,7) insan yazımı olarak yanlış sınıflandırdı, çünkü hatalar işlevsel olarak otantik olanlardan ayırt edilemiyordu ve gerçek hatalarla uyum problem zorluğu arttıkça düştü ([[simulating-students-java-programming-errors-llms|Keramati ve ark., 2026]]). 4B'den 120B parametreye yedi modelde simülatörler aldıkları geri bildirim ne olursa olsun neredeyse tek biçimli oranlarda doğru yanıta döndü, yani çıktı benzerliği arkasındaki inanç durumu hakkında hiçbir şey söylemiyor. **Selective Flip Score**'a karşı eğitim sadakati +0,56'ya kadar yükseltti ([[llm-student-simulation-misconception-faithfulness|Do, Sonkar ve Sachan, 2026]]).

## Bir betimlemenin yeterli olup olmadığını kontrol edin

Bir kohort kurmadan önce daha ucuz seçeneği kontrol edin. Öğrenciler katılmadan önce çevrimiçi bir öğrenme deneyimini değerlendirmek, bırakmayı ve tamamlamayı öngörmek ve tasarım geri bildirimi vermek için dersi baştan sona geçen ve deneyimin zengin bir betimlemesini üreten tek bir "betimleyen" web ajanı, bir öğrenci nüfusunu doğrudan simüle etmeyi geride bıraktı.

O karşılaştırmadaki simüle öğrenciler gerçek öğrenenlerden çok daha az davranışsal aralık gösterdi: beş test dersinde 100 ajan boyunca gerçek öğrencilerin izlediği yolların yalnızca yaklaşık %4'ünü yeniden ürettiler, üstelik belirgin biçimde daha fazla hesaplama maliyetiyle. Betimle-sonra-öngör hattı, küresel ölçekli bir CS1 dersinde en iyi bırakma dağılımı öngörüsünü ortalama JSD 0,060 ile elde etti ([[ai-web-agents-lesson-design-2025|Wang, Mitchell ve Piech, 2025]]).

Çizdiği sınır pratiktir. Amaç sonuç öngörüsü ya da tasarım eleştirisi olduğunda bir öğrenci dağılımını simüle etmek gereksiz, hatta ters etkili olabilir. Simülasyon maliyetini, gerçek öğrenen çeşitliliğini kapsamak önemli olduğunda hak eder: bir YZ'nin çeşitli profillere davranışını denetlemek ya da bir öğretmene prova edecek bir şey vermek gibi.

## Geliştiricilerin bu konuda yanlış yaptığı şeyler

Yüzeysel gerçekçilik hedeftir. Makine yazımı kod için %83,7'lik yanlış sınıflandırma oranı ve yedi modelde neredeyse tek biçimli yanıt dönüşü, çıktıyı okuyan bir insan yargıcın iddia ettiğiniz özelliği göremediğini söylüyor. Bunun yerine bir düzeltmeye verilen yanıtı test edin.

Daha iyi bir persona istemi kaymayı düzeltir. Senaryolu göreve bağlı turlar, beş model ve üç istem tasarımında gözlemci tarafından puanlanan kaymayı %97'ye kadar kesti. İşi turların tasarımı yaptı.

Daha güçlü bir temel model yeterlik açığını kapatır. Güçlü bir tescilli model istem verme altında özellik QWK'de 0,422 puan alırken ince ayarlı bir 7B 0,474'e ulaştı ve aynı altı modelli karşılaştırma en kötü aşmayı en küçük sınıf düzeylerinde yaptı. Model seçimi bir sadakat eksenini diğerine karşı takas eder.

Doğrulama, bir meslektaşın bir transkripti okuyup kulağa doğru gelmiş demesidir. Java sonucu bu yargının ne kadar uzağa gittiğini gösteriyor. Doğrulama, gerçek öğrenenlerden ayrılmış kayıtlar ve adlandırabileceğiniz bir başlangıç düzeyi demektir.

Bir nüfusu simüle etmek kapsamlı seçenektir. 100 ajan boyunca simülasyonlar gerçek öğrencilerin izlediği yolların yaklaşık %4'ünü kapsadı, üstelik betimleyen ajandan belirgin biçimde daha yüksek hesaplama maliyetiyle.

## Size geri dönecek itirazlar

**"Öğretmenler simülatörümüzü bir öğrenciden ayırt edemedi."** Körlenmiş Java çalışmasında uzman açımlayıcılar makine teslimlerinin %83,7'sini insan olarak yanlış sınıflandırdı. Bu, açımlayıcıları ölçer ve inanç durumunu incelenmemiş bırakır.

**"İnce ayar ekibimizin kapsamı dışında."** Öyleyse iddianızı istem vermenin desteklediğiyle sınırlandırın ve bunu söyleyin. İstem verme test edilen en güçlü model için 0,577'lik bir tavan koydu ve açık bir 7B'de sıfıra yakındı, üstelik idealize edilmiş bir puan dağılımı üretti.

**"Gerçek öğrenen verisine erişimimiz yok."** StudentSim'in protokolü satranç, ikinci dil yazma ve matematikteki kamuya açık öğrenen derlemlerinden kuruluyor. Kamuya açık veri, kendi nüfusunuz hakkında iddia edebileceklerinizi sınırlar ve size bir başlangıç düzeyi verir; çoğu raporun atladığı şey budur.

**"GRPO gözetimli ince ayarı geçti, öyleyse pekiştirmeli öğrenmeyle eğitmeliyiz."** Geçti, 0,474'e karşı 0,618. Düşük yeterlik biçimi her iki durumda da zor kaldı, yazım ve dilbilgisi hataları çok azdı, ve ayrı bir kıyaslamada tercih optimizasyonu ince ayarı yalnızca marjinal olarak geçip hatalarda kaybetti. Kullanım durumunuzun hangi özelliğe bağlı olduğunu kontrol edin.

**"En zayıf öğrenenler kullanıcılarımızın küçük bir dilimi."** Bu sayfadaki her yöntem için en zor vakadırlar ve kapsam bulgusu simülasyonların en kolay bölgede kümelendiğini söylüyor. Simülatörünüz zorlanan öğrenciler hakkında sonuç çıkarmak için kullanılacaksa, bu boşluk yazıya geçirilmelidir.

## Bu hafta ne yapmalı

**1.** Kapsam cümlesini yazın: bu simülatörün temsil etmediği öğrenenler. README'ye ve demo notlarına koyun.

**2.** Test kümenize simülatörü düzelten ve yanlışta kalıp kalmadığını kontrol eden bir sonda ekleyin.

**3.** Tek bir akışta serbest biçimli persona sohbetini göreve bağlı turlarla değiştirin ve kaymayı karşılaştırın.

**4.** Mevcut bir simülatörü ayrılmış gerçek kayıtlara karşı hem sadakat hem yanıtlılıkta puanlayın ve iki sayıyı ayrı ayrı bildirin.

**5.** Bir kohort finanse etmeden önce gerçekten yanıtlanması gereken soru üzerinde betimleyen ajan kontrolünü çalıştırın.

## Bundan sonra nereye bakmalı

[[simulating-students]] tam kavram sayfasıdır. [[checking-whether-educational-ai-works]] bir simülatöre karşı test ettiğiniz sistemleri değerlendirmeyi kapsıyor ve [[making-ai-better-at-supporting-learning]] buradaki ince ayar sonuçlarının arkasındaki eğitim yöntemlerini kapsıyor. [[addressing-common-misconceptions-ai-education]] simüle öğrencilerin araştırmada gerçek öğrenenlerin yerini tutup tutamayacağını ele alıyor.
