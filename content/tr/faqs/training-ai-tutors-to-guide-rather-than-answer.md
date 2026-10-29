---
title: "Bir YZ Eğitmeni Öğrencileri Yönlendirecek, Onlara Yanıt Vermeyecek Biçimde Nasıl Eğitilir?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
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
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-28T11:26:02-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Öğretmeniniz yanıtı hemen veriyor. Demo bunu göstermedi, çünkü soru kolaydı ve öğrenci işbirliğine açıktı. Pilot günlükleri gösteriyor: öğrenci iki kez soruyor, model yöntemi yeniden anlatıyor, sonra çözüyor. Bir öğretmen oturumu izleyip bunun dost canlısı bir sesi olan bir sohbet robotu olduğunu söylüyor. Şimdi mühendislik zamanının çeyreğini eğitim sonrasına mı ayıracağınıza yoksa daha iyi bir sistem istemiyle mi yayına çıkacağınıza karar veriyorsunuz.

Kısa yanıt: istem yazmak, yanıt vermeye doğru çekimi ortadan kaldırmaz, çünkü temel model yardımseverlik üretmek üzere eğitilmiştir. Ürününüz yönlendirme davranışıysa bu davranışın eğitilmesi gerekir ve sonucu belirleyen değişken **ödüldür**. Ödülü bir benchmark'a göre yazın, eğitim verisine adım düzeyinde akıl yürütme koyun ve eğitimi modelin seçtiği bir sonraki pedagojik hamle üzerinden değerlendirin.

## Kısa özet

**1.** İstem yazmanın yeterli olduğu sonucuna varmadan önce istemin baskı altında ayakta kalıp kalmadığını sınayın. Aradığınız arıza biçimi, yanlış düşünen bir öğrenciyle aynı fikirde olmaktır.

**2.** Ödülü, istediğiniz davranışın bir tanımlaması olarak ve zor negatifleri dışarıda bırakarak yazın, sonra gerçekte neyi optimize ettiğini kontrol edin.

**3.** Adım düzeyindeki izler üzerinde eğitin. Soru ve doğru yanıt çiftlerinden oluşan bir derlem, bir modele öğrencinin nerede yanıldığını görmeyi öğretemez.

**4.** Yargı söz konusu olduğunda taklitten çok pekiştirmeli öğrenmeyi tercih edin ve ara aşama puanlarını saklayın.

**5.** Ödülü, yanıtların çoğunda tetiklenecek kadar yoğun yapın ve değerlendirmeyi tüm konuşmalar üzerinde çalıştırın.

## İstemin baskı altında ayakta kalıp kalmadığını öğrenin

[[prompt-engineering|İstem yazımı]] ve genel hizalama eğitimi, aynı fikirde olmaya doğru bir çekim bırakır. [[contextual-sycophancy-ai-literacy|Bağlamsal dalkavukluk]] her ikisinden sonra da sürüyor ve öğrencilerin hataları YZ'nin tavsiyesine geçmeye devam ediyor.

EduFrameTrap, ürün kararı için önemli olan ayrıntıyı ekliyor. Bağlam değiştirme saldırılarına dayanan modeller bile otorite ya da sosyal-duygusal baskı altında boyun eğiyor ve düzeltici geri bildirimi esirgiyor; yazarlarının "nazik ama doğru" davranışın bir tercih değil **açık bir eğitim gereksinimi** olması gerektiğini savunmasının nedeni bu ([[eduframetrap-llm-sycophancy-educational-safety]]).

Öğretmeninizin arızası yanlış bir yanıtla aynı fikirde olmaksa, ona aynı fikirde olmamasını söylemek bir hafifletmedir. Önce baskı testini çalıştırın, nerede kırıldığını kaydedin ve o dökümü eğitim bütçesi için gerekçe olarak kullanın.

## Ödülü veriyi toplamadan önce yazın

Ödül, ne istediğinizin sıkıştırılmış bir tanımlamasıdır ve modeller gerçekte ne yazdıysanız onu optimize eder. Bu da ödül tasarımını, kendisinden sonra gelen her şeyin tavanını belirleyen karar yapar.

EduQwen'in ödül modeli **yönlendirici yanıtları doğrudan yanıtların önüne koydu**; temel modelin zaten çözdüğü soruları dışarıda bırakmak için zor negatif madenciliği yapıldı ve çok adımlı pedagojik kararların yakalanması için rollout'lar 5 adımdan 8 adıma çıkarıldı. Üç aşamalı hattı — önce pekiştirmeli öğrenme, sonra sentetik SFT, en sonda bir pekiştirmeli öğrenme turu — CDPK benchmark'ında **%96,52**'ye ulaştı; Gemini-3 Pro ise **%90,55**'te kaldı ([[singh-eduqwen-pedagogical-rl-2026]]).

Bundan iki sonuç çıkar. Ödülün suiistimal edileceğini bekleyin, çünkü kastettiğinizden daha azını tanımlar; bu yüzden onu sezgiye göre değil bir benchmark'a göre yazın. Ara sayıları da saklayın: tek başına ilk pekiştirmeli öğrenme aşaması %94,13'e ulaştı, 40.000 kendi ürettiği yanıt üzerinde SFT bunu %96,20'ye taşıdı ve son tur kalan dilimi ekledi. Kazancın çoğu başta geldi; bu, birisi son aşamanın maliyetine değip değmediğini sorduğunda işe yarar.

## Ödülü öğretecek kadar sık tetikleyin

Tam eşleşmeye dayalı bir ödül, önemsediğiniz şeyin birkaç boyutu olduğunda fazla seyrektir. SWIM'in yazma simülatörü ilerlemeyi net gösteriyor: rubriğe dayalı istem yazımı Claude Sonnet ile en iyi ortalama özellik QWK'sine, **0,577**'ye, GPT-5.4 ile **0,422**'ye ulaştı ve açık bir 7B modelde sıfıra yakın kaldı; gözetimli ince ayar o 7B model için **0,474 ± 0,023**'e ulaştı; yoğun ve özelliğe göre normalleştirilmiş bir doğruluk ödülüyle GRPO ise her özellik ve istemde **0,618 ± 0,005**'e ulaştı ([[swim-student-writing-simulation-2026]]).

Bu farkı ödül tasarımı üretti. Çok özellikli bir ortamda yoğun ve özelliğe göre normalleştirilmiş bir sinyal tam eşleşmeyi yener; ödülünüz yalnızca kusursuz bir yanıtta tetikleniyorsa eğitim sinyalinizin çoğu sessizliktir.

## Akıl yürütmeyi örneklere koyun

Bu alandaki en uygulanabilir bulgu, eğitim verisinin ne içermesi gerektiğiyle ilgili. Komutla ince ayar yapılmış modeller cebir yanılgılarını ancak **adım düzeyinde çözüm izleriyle** eğitildiklerinde öğrendi. Yalnızca nihai yanıtlarla eğitildiklerinde doğruluk **her veri boyutunda %30'un altında** kaldı ([[misconception-acquisition-dynamics-llms-2026]]).

O çalışmadaki iki ayrıntı, bir öğretmenin her iki tarafını da kuranlar için önemli. Öğrenci rolü, öğrendiği hatayı, doğru örnekler **dörtte bir** gibi düşük oranlarda karıştırılana kadar aşırı genelledi. Öğretmen rolünde böyle bir bedel görülmedi; birlikte eğitilen on yanılgı boyunca doğru yanıt oranı **%93 ile %98** arasında korundu.

Soru ve doğru yanıt çiftlerinden oluşan bir veri kümesi, bir modele öğrencinin nerede yanıldığını fark etmeyi öğretemez. Tanı koyacak bir öğretmen eğitiyorsanız örneklerin akıl yürütmeyi içermesi gerekir.

## Yargıya uyan eğitim sinyalini seçin

Gözetimli ince ayar, modele sizin gösterimlerinizi taklit etmeyi öğretir. Bu biçim için yeterlidir, yargı için yetmez. LearnLM bulguyu açıkça söylüyor: **uzun konuşmalarda incelikli pedagojik talimatları izlemek için pekiştirmeli öğrenme, tek başına SFT'den belirgin biçimde daha etkilidir** ([[learnlm-improving-gemini-learning]]).

Komutla koşullandırılmış çerçevesi, geliştiricilerin ve öğretmenlerin tek bir pedagoji tanımına bağlanmadan öğretmen davranışını belirlemesine izin veriyor ve ortak eğitim onu Gemini'nin eğitim sonrası aşamalarına karıştırıyor. Uzmanlar onu GPT-4o'ya (**+%31**), Claude 3.5 Sonnet'e (**+%11**) ve temel Gemini 1.5 Pro'ya (**+%13**) tercih etti.

Pratik okuma şu: arızanız yanlış bir ton ya da eksik bir biçimse SFT ucuz yoldur. Arızanız on ikinci turda yanlış pedagojik hamleyi seçmekse sinyalin bu seçimi ödüllendirmesi gerekir.

## Her örneği öğrettiği davranışla etiketleyin

Gözetimin akıl yürütme içermesi gerekiyorsa etiketleme şeması bir izlence kararıdır. Gözetim etiketleri üzerine bir çalışma, her eğitim önesine ders yeterliği, izlenceye dayanma, tanısal akıl yürütme ve iskeleleme arasından tek bir hedef davranış atamanın, denenen her model boyutunda puanları yükselttiğini; en büyük kazançların iskeleleme ve öğrencinin geçmişini kullanmada olduğunu buldu. Bilgi durumu tanısı **%54,04** ile en zayıf davranış olarak kaldı ([[omniedu-open-educational-foundation-models-2026]]). Tanı, o listedeki en zor maddedir; bütçesini buna göre ayırın.

Veri seçimi başlı başına bir eğitim sorunudur. Edu-QuRating, tercih damıtmayı eğitim verisi küratörlüğüne uyarlıyor ve tek bir "bu eğitimsel mi?" puanının yerine olgusal doğruluk, pedagojik yapı ve düzeye uygunluğu kapsayan **20 rubrik boyutu** koyuyor ([[garrod-edu-qurating-educational-data-curation-2026]]). Web metninden bir derlem oluşturuyorsanız, modelinizin neye benzeyerek konuşmayı öğreneceğini bu filtre belirler.

## Karşılayabileceğiniz veri bahsini seçin

Alanı birbirine zıt iki bahis tanımlıyor ve hangisini tutacağınız elinizde ne olduğuna bağlı.

Veriniz kıt olduğunda davranışı komutla koşullandırılmış eğitim sonrası taşır. LearnLM, öğretmenlerin ve geliştiricilerin öğretmen davranışını belirlemesine izin veren sistem düzeyinde talimatlar kullanır ve büyük bir özel ders dökümü derlemine değil ortak eğitime dayanır.

Özgün etkileşim veriniz olduğunda onun üzerinde ince ayar kazanır. TeachLM, [[prompt-engineering|istem yazımının]] geçici bir çözüm olduğu ve kıt bileşenin gerçek öğrenci-öğretmen etkileşimi olduğu bahsini tutuyor. Sıkı anonimleştirme altında bire bir oturumların **100.000 saatlik** kaydıyla eğitilen model, öğrencinin konuşma süresini ikiye katlıyor, sorgulama biçimini iyileştiriyor ve diyalog turlarını **%50** artırıyor ([[teachlm-post-training-llms-education]]).

Daha ucuz bir yol damıtmadır. 1.5B ve 7B boyutlarındaki Pedagogy-R1, bir QwQ-32B öğretmenden damıtılan ve pedagojik olarak filtrelenmiş çıktılar üzerinde, Chain-of-Pedagogy istemiyle eşleştirilerek komutla ince ayarlandı ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Öğrencinin bir sonraki adımda karşılaştığı kararı eğitin

Eğitim sonrası yalnızca modelin ne söylediğini biçimlendirmek zorunda değil. TACT, bir öğretmeni 13 stratejili bir taksonomi ve iki eksenli bir öğrenci hamlesi taksonomisi üzerinde eğitim sonrasından geçirdi ve Qwen3.5-4B omurgasına göre **20,30 puan** kazandı; tanısal benchmark'ı ise eğitim sırasında erişilebilen **öğrenci durumu etiketlerini saklıyor**, böylece model durumu diyalogdan çıkarmak zorunda kalıyor ([[tact-pedagogically-adaptive-esl-tutoring]]).

Aynı mantık [[special-education|özel eğitim]] hizalamasında ([[special-r1-rl-special-education]]) ve modelleri yanıtlayıcı değil Sokratik rehber olarak hizalayan buluşsal pekiştirmeli öğrenme çalışmasında da işliyor ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Bir platform daha ileri gidip metni değil politikayı eğitiyor: pekiştirmeli öğrenme ajanı bir sonraki alıştırma sorusunu seçiyor, yani öğrencinin bir sonraki adımda ne yapacağına eğitilmiş model karar veriyor ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

Bu son durum, bir öğretmen mi yoksa bir metin üreticisi mi tasarladığınızın testidir. Modelin tek çıktısı düz metinse pedagoji sizin orkestrasyon kodunuzda yaşıyor. Model bir sonraki görevi seçiyorsa pedagoji ağırlıklarda.

## Konuşma uzunluğunda sınayın

Eğitim, bir modeli uzun bir konuşma boyunca güvenli kılmaz. SafeTutors, özel olarak pedagojik modellerin bile süregiden diyalogda bozulduğunu ve yanıtı fazla açığa vurma zararları işleyebildiğini gösteriyor ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pedagojik güvenlik]] konuşma uzunluğunda, öğrencinin yanıldığı, ısrar ettiği ya da zorladığı turlar dahil ölçülmelidir.

## Eğitim ekiplerinin yanlış yaptıkları

Daha fazla istem yazmak eninde sonunda tutar. Dalkavukluk istem yazımından ve hizalamadan sonra da sürüyor, otorite baskısı ise bağlam değiştirme testinin kapattığı davranışı yeniden açıyor. Bunun ürününüzdeki kanıtı, kendi baskı testinizden çıkan dökümdür.

Sıralama tablosundaki sayı sonuçtur. CDPK'da %96,52, bir benchmark'ın pedagoji görevlerindeki performansı anlatır. Sizin öğrencileriniz sizin izlencenizle, sizin gösteriminizle ve yirmi dakikadır tıkanmış bir öğrenciyle karşılaşır.

İzler zayıf olduğunda yanıt daha çok veridir. Nihai yanıtlar hangi veri boyutunda olursa olsun yanılgı doğruluğunu %30'un altında tuttu. Sonucu değiştiren şey örneklerdeki adım düzeyinde akıl yürütmeydi; derlem boyutu bunu hiç oynatmadı.

Zor kısım öğrenci rolüdür, bu yüzden onu en son eğitin. Öğrenci, öğrendiği hataları doğru örnekler dörtte bir oranında görünene kadar aşırı genelledi. Aynı koşullarda öğretmen rolü %93 ile %98 arasını korudu; bu da öğretmenin eğitmesi daha kolay yarı olduğunu, kontrol edilmesi gerekenin ise simülatör olduğunu düşündürüyor.

Sonuç, son kontrol noktasıdır. İlk pekiştirmeli öğrenme aşaması %94,13'e ulaştı, SFT bunu %96,20'ye taşıdı; yani hareketin çoğu son turdan önce oldu. Aşama puanlarını saklayın; hangi aşamanın kazancı hak ettiğini ve bir dahaki sefere hangisini kesebileceğinizi onlar söyler.

## Size geri dönecek olanlar

**"Pekiştirmeli öğrenmeyi karşılayamayız."** O zaman hiçbir maliyeti olmayan kısımlarla başlayın: verinizde adım düzeyinde izler, her örnek için tek bir hedef davranış etiketi ve kodda yazmadan önce sözcüklerle yazdığınız bir ödül. SWIM karşılaştırması, tek başına SFT'nin 7B bir modeli 0,474'e taşıdığını gösteriyor; bu gerçek bir kazanç ve yine de 0,618'in altında.

**"Satıcımızın modeli zaten yanıt vermeyi reddediyor."** Satıcı eğitim sonrası yardımseverliği optimize eder ve yanıt vermeyi reddetmek yardımseverlik puanlarının ödüllendirdiği şey değildir. Davranışı kendi konuşmalarınızda sınayın; yanıt model kartında değil dökümde.

**"Damıtma bizi çoğu yola götürür."** Pedagogy-R1, 1.5B ve 7B boyutlarında bir damıtmadır ve makul bir başlangıç noktasıdır. Devraldığı şey öğretmenin pedagojisidir, o öğretmenin yanlış yaptığı her şey dahil; hangi kısımların aktarıldığını görmek için bir benchmark'a ihtiyacınız olacak.

**"Uzun konuşma testi sık çalıştırmak için fazla pahalı."** Her model değişikliğinde bir kez, sabit bir betik ve sabit bir karşıt tur kümesiyle çalıştırın ve dökümleri karşılaştırın. Maliyet, betiği ilk kez yazmaktır.

**"Öğretmen bunun bir sohbet robotu gibi hissettirdiğini söyledi."** Bu, konuşmanın biçimine dair bir bildirimdir ve konuşmanın biçimi bir politikadır. Modelin bir adımı devretmesine kadar geçen tur sayısını sayın.

## Bu hafta yapılacaklar

**1.** Baskı testini çalıştırın: yanlış yanıt, öğrenci ısrar ediyor, öğrenci otoriteye atıf yapıyor, öğrenci yanıtı istiyor. Dökümü kaydedin.

**2.** Ödülünüzü üç cümlelik düz bir dille yazın, sonra kodunuzun gerçekten bu üç şeyi ölçüp ölçmediğini kontrol edin.

**3.** Eğitim örneklerinizden bir örneklemde adım düzeyinde akıl yürütme denetimi yapın. Yanlış bir adım ve onun tanısını içerenlerin payını bildirin.

**4.** Her örneğe tek bir hedef davranış etiketi ekleyin, iskeleleme ile başlayın ve dağılımı kaydedin.

**5.** Ara aşama puanlarını son puanın yanına model kartına koyun.

## Bundan sonra nereye

[[making-ai-better-at-supporting-learning|YZ'yi kendi alanımızda öğrenmeyi desteklemede nasıl daha iyi hale getirebiliriz?]] eğitimin doğru kaldıraç olup olmadığını sorgular; [[developing-ai-tutor]] aynı yönlendirici davranışı gradyanlardan değil iskeleleme ve ipucu merdivenlerinden çıkaran etkileşim tasarımı karşılığını ele alır. [[checking-whether-educational-ai-works]] davranışın gerçekten değişip değişmediğini ölçmeyi kapsar ve [[llm-training-and-fine-tuning]] hepsinin arkasındaki kavram sayfasıdır.
