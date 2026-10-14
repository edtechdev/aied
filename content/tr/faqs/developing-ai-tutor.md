---
title: "Etkili Bir YZ Eğitmeni Geliştirmeye Yönelik En İyi Uygulamalar Nelerdir?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, designing-educational-ai-software]
weight: 74
type: faq
foundations: [learner-identity]
pedagogy: [scaffolding]
technology: [intelligent-tutoring]
assessment: [feedback]
discipline: [math education, writing education]
methods: [ai-ed-evaluation]
ethics: [pedagogical-safety]
reviewed_by: [editor]
translation_of: faqs/developing-ai-tutor
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

Etkili bir YZ eğitmeni, **bir öğrenme sistemi olarak, cevap üreten bir [[conversational-ai|sohbet robotu]] olarak değil tasarlanmalıdır.** Bilgi tabanı boyunca en güçlü tema, [[pedagogy|pedagojik]] yapının — tanılama, iskeleleme, geri bildirim, öğrenen özerkliği ve değerlendirme — temel model kadar önemli olduğudur. Aşağıdaki iki uygulamalı örnek (bir kalkülüs eğitmeni ve bir yazma koçu), aynı çekirdek mimarinin disiplinin öğrenenden ne istediğine göre nasıl şekillendirilmesi gerektiğini göstermektedir.

## 1. Açık öğrenme hedefleriyle başlayın ve öğrencinin işini tanımlayın

Bir model seçmeden önce şunları belirtin:

- Öğrenenlerin sonrasında ne bilmesi veya ne yapabilmesi gerektiğini.
- Kendi başlarına gerçekleştirmeleri gereken bilişsel işi.
- Eğitmenin hangi konularda yardımcı olabileceğini.

"Problemi bitirmek" için optimize edilmiş bir eğitmen, "problemi çözmeyi öğrenmek" için optimize edilmiş bir eğitmeni kolayca baltalayabilir. [[intelligent-tutoring]] kavramı, etkinliğin yalnızca model yeteneğinden çok pedagojik tasarıma bağlı olduğunu vurgular.

## 2. Reçete yazmadan önce tanılayın

Gösterilen bilgi, [[misconceptions]], son denemeler, yardım arama davranışı ve uygun olduğunda özgüven gibi kanıtlara dayanan bir öğrenen modeli sürdürün. Zorluğu ve desteği yalnızca öğrenenin son istek metnine tepki vermek yerine bu kanıtlardan uyarlayın. Bir [[llm]]’in tanılamayı tek başına yapmasına izin vermede dikkatli olun: [[benchmark|kıyas ölçütleme]], YZ eğitmenlerin açıkça doğru akıl yürütmeyi tanıyabildiğini, ama bazen geçerli alternatifleri reddederek veya hatalı akıl yürütmeyi kabul ederek bulunduğunu gösterdi. Önemli sonuçlar doğuran alanlar için faydalı bir mimari, **yapılandırılmış tanılama + esnek YZ diyaloğudur**. Bkz. [[yasir-llm-tutoring-agents-2026|Confirming Correct, Missing the Rest]].

## 3. Çözümü hemen vermek yerine ipucu merdiveni kullanın

Faydalı bir eğitim dizisi şöyledir: bir deneme isteyin, öğrenenin akıl yürütmesini sorgulayın, küçük bir ipucu verin, daha güçlü bir kavramsal ipucu verin, kısmi bir adımı gösterin, çözülmüş bir çözümü yalnızca gerekli olduğunda sunun, ardından öğrenenin fikri bağımsız olarak açıklamasını veya uygulamasını isteyin. Destek, **yetkinlik arttıkça azalmalıdır**. Bu, [[scaffolding]] kavramının merkezindedir. Önemli bir saha deneyi, korumasız bir GPT arayüzünün destekli matematik performansını artırırken sonraki desteksiz sınav performansını düşürdüğünü; ipucu veren bir eğitmenin ise bu öğrenme cezasını büyük ölçüde ortadan kaldırdığını buldu — bkz. [[generative-ai-guardrails-harm-learning|Generative AI without guardrails can harm learning]].

Ustalık temelli bir alıştırma platformunda 6.000’den fazla ortaokul öğrencisiyle yürütülen daha büyük bir randomize saha deneyi, aynı imzayı daha ayrıntılı buldu: YZ desteği atanan öğrenciler daha yavaş ilerledi ve daha az soru denedi, ama daha doğru yanıtladı ve — en belirgin mekanizma — hatalardan sonraki ilk denemelerindeki doğruluğu artırdı, doğru bir yanıta dönmek için daha az denemeye ihtiyaç duydu. Bu bir **üretken yavaşlamadır**, cevap kapmaca değildir ve bir ipucu merdiveninin üretmesi beklenen davranıştır. Aynı çalışma, vekil ölçütler konusunda bir uyarı da sunuyor: üst üste üç doğru yanıt istemek, platform tanımlı ustalığı keskin biçimde artırdı ama bir hafta sonra yapılan gecikmeli testte tespit edilebilir kazanımlar üretmedi; en güçlü gecikmeli test kanıtı ise yalnızca YZ’nin ustalık iş akışının içinde yer aldığı durumda ortaya çıktı (katsayı 0.085), tek başına erişim olarak değil. Bkz. [[making-ai-tutoring-productive-mastery-math-2026|Making AI Tutoring Productive]].

## 4. Geri bildirimi özgü, anında, uygulanabilir ve akıl yürütmeyle bağlantılı yapın

Yalnızca "Doğru", "Yanlış" veya "Aferin" diyen geri bildirimlerden kaçının. Bunun yerine eğitmen, söz konusu akıl yürütme adımını belirlemeli, neyin yeniden değerlendirilmesi gerektiğini açıklamalı, öğrenene sonra yapacağı somut bir iş vermeli ve uygun olduğunda geri bildirimi açığa çıkarmadan önce tahmin etmesini veya açıklamasını istemelidir. Bilgi tabanı, [[feedback]]’i eksiksiz bir **sunum–kullanım döngüsü** olarak ele alır: geri bildirim yalnızca öğrenciler onu anladığında ve üzerine hareket ettiğinde öğrenmeyi destekler.

## 5. LLM’in hafızasına güvenmek yerine olgusal içeriği dayandırın

Öğretmenin onayladığı ders kitapları, kurs notları, çözülmüş örnekler, politikalar ve [[curriculum-design|müfredat]] kaynakları gibi güvenilir materyallere karşı getirme destekli üretim kullanın ve faydalı olduğunda atıfları veya kaynağı görünür kılın. Biçimsel olarak doğrulanabilir yanıtların olduğu alanlarda hesap makineleri, sembolik matematik sistemleri, kod çalıştırma, bilgi grafikleri, kural tabanlı doğrulayıcılar ve [[discipline-specific-aied|alana özgü]] çözücüler gibi deterministik araçlar ekleyin. RAG, [[hallucination-risk|uydurma riskini]] azaltabilir, ancak ortadan kaldırmaz — bkz. [[rag|Retrieval-Augmented Generation]].

## 6. Üstbiliş ve öğrenen özerkliği için tasarlayın

Düzenli olarak öğrenenden üretmesini, seçmesini, gerekçelendirmesini, değerlendirmesini veya düşünmesini isteyin. Faydalı bir tasarım ilkesi, **önce öğrenen → sonra YZ → tekrar öğrenen**’dir. Uzun vadeli hedef, öğrenenlerin eğitmenin sorgulama ve [[problem-solving]] stratejilerini içselleştirmesi, eğitimene bağımlı hale gelmeleri yerine olmalıdır. Bkz. [[agency|öğrenen özerkliği]] ve [[scaffolding]].

## 7. Pedagojik güvenliği sıradan sohbet robotu güvenliğinden farklı ele alın

Bir eğitim eğitmeni için güvenlik testi, toksisite ve jailbreak direncinden daha fazlasını içermelidir. Cevap sızıntısı, yanlış kanı pekiştirme, aşırı uzlaşma veya [[ai-sycophancy|yalaka davranış]], uygun olmayan zorluk, [[cognitive-offloading|bilişsel yük boşaltma]], önyargılı davranış, öğrenen özerkliğinin kaybı, öğretim sapması ve hatalı açıklamalara aşırı güven açısından test edin. Bir eğitmen **nazik ama doğru** olmalıdır; öğrenen bir yanlış kanıda ısrar ettiğinde bile, ve testler genişletilmiş konuşmaları içermelidir çünkü pedagojik başarısızlıklar birden çok etkileşimde birikebilir. Bkz. [[pedagogical-safety]] ve [[hazra-safetutors-pedagogical-safety-2026|AI Tutor Safety and Pedagogical Harms]].

## 8. Gizliliği, erişilebilirliği ve eşitliği mimariye yerleştirin

Yalnızca pedagojik olarak gerekli olan öğrenen verilerini toplayın. Kalıcı bellek veya [[student-modeling|öğrenen modellemesi]] kullanıldığında amacını şeffaf kılın, öğrenenlere uygun denetim imkânı tanıyın, hassas bilgileri koruyun, saklama politikaları tanımlayın ve önemli sonuçlar doğuran durumlar için eğitmen veya [[human-in-the-loop-ai|insan denetimi]] sağlayın. Eğitmen davranışını dil geçmişleri, yetenek düzeyleri, kültürel bağlamlar, [[accessibility]] ihtiyaçları ve [[prior-knowledge|önceki bilgi]] ile YZ deneyiminin farklı düzeyleri açısından denetleyin. Sofistike [[prompt-engineering|istek metni yazımını]] iyi bir öğretimin ön koşulu yapmayın — eğitmenin kendisi öğrenenlerin üretken sorular formüle etmesine yardımcı olmalıdır.

## 9. Sohbet robotu kalitesini değil, öğrenmeyi ölçün

Yanıt doğruluğu, konuşma uzunluğu, öğrenci tercihi, memnuniyet, görev tamamlama ve [[student-engagement|katılım]] gibi ölçütler tek başına yetersizdir. Bunun yerine desteksiz performansı, gecikmeli hatırlamayı, yeni problemlere aktarımı, yanlış kanı düzeltmesini, öğrenen bağımsızlığını, geri bildirim kullanımını ve [[differential-effects-across-learner-groups|öğrenen grupları arasındaki farklı etkileri]] değerlendirin. Kritik soru, eğitmen kaldırıldıktan sonra öğrenenlerin başarılı performans gösterip gösteremeyeceğidir. Bkz. [[ai-ed-evaluation]] ve [[ai-tutor-behavioral-evaluation|The Missing Evaluation Axis]].

İki son çalışma, bu kuralı [[self-report-measures|öz bildirim]] ve kısa ufuklara karşı keskinleştiriyor. 38 acemi programlama öğrencisiyle yapılan bir pilot çalışma, [[generative-ai|üretken yapay zeka]] kullanımı ile *algılanan* öğrenme arasında güçlü bir ilişki buldu (rs=0.802, p<0.001), oysa eğitmen desteği olmadan özerk ilerlemenin göstergeleri en düşük puanı aldı — yazarların yetkinlik yanılsaması ve epistemik borç ürettiğini uyardığı boşluk, aynı zamanda memnuniyet ölçütlerinin ödüllendirdiği boşluk. Bkz. [[genai-cognitive-tutor-programming-2026|Generative AI as an Informal Cognitive Tutor]].

Daha temel olarak, çoğu değerlendirme desteğin bittiği anda durur. [[cognitive-washout-ai-skill-decay-2026|Cognitive washout dynamics]], ölçülmeyen geri çekilme sonrası aralığı adlandırır ve dört olası sonucu biçimselleştirir — elastik toparlanma, kısmi plato, gizli iskele ve aşırı toparlanma — toparlanma süresi sabiti, toparlanma bütünlüğü ve yeniden öğrenme çabasını özgün çabayla karşılaştıran bir histerezis indeksini içeren bir yıkanma eğrisi modeliyle. Tersine çevrilebilirlik şiddeti belirlediğinden, çerçeve planlanmış desteksiz alıştırmanın toparlanma eğrisine göre dozlanması gerektiğini, ahlaki olarak tartışılmasından ziyade, savunuyor. Bir eğitmen değerlendirme planı bu nedenle yalnızca anında bir son test değil, bir geri çekilme aşaması da içermelidir. Bkz. [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|the randomized evidence that brief assistance depresses later unassisted performance]].

## 10. Öğretmenleri veya alan uzmanlarını kalite güvencesi döngüsünde tutun

Dağıtımdan önce eğitimcilerin gerçekçi öğrenen profillerini, yaygın yanlış kanıları, uç durumları, saldırgan istek metinlerini, belirsiz yanıtları ve uzun eğitim konuşmalarını test etmesini sağlayın. Pedagojik başarısızlıkları kaydedin ve bunları sistem istek metinlerini, eğitim politikalarını, bilgi kaynaklarını, [[guardrails]]’ı, öğrenen modeli kurallarını ve model seçimini gözden geçirmek için kullanın. Akıcı bir eğitim yanıtı yine de pedagojik olarak uygunsuz veya hatalı olabileceğinden, insan denetimi önemini korur.

[[teacher-intervention-k12-ai-based-instruction-2026|Lee’nin 29 K-12 çalışmasının sistematik derlemesi]], bu denetimin gerçekte nelerden oluştuğunu ve nerede çöktüğünü gösteriyor. [[teacher-role|Öğretmen]] müdahalesi; izleme, yargılama, müdahale ve orkestrasyondan oluşan yinelenen dört aşamalı bir döngüdür; YZ uyarıları, [[visualization|gösterge panoları]] ve otomatik puanlar "otomatik olarak pedagojik harekete yol açmaz"; ve önde gelen öğretmen stratejisi *pedagojik çeviridir* — sohbet robotu geri bildirimini olduğu gibi geçirmek yerine seçmek, gözden geçirmek, tamamlamak, özetlemek veya silmek. Bunu iki tasarım uyarısı izler. Daha fazla YZ bilgisi daha iyi değildir: sürekli tanı yayan sistemler öğretmenleri aşırı yükledi ve dikkati kendi gözlemlerinden uzaklaştırdı; bu nedenle harekete geçmeye değer olana öncelik verin ve onu yorumlanabilir kılın, önerileri öğretmenlerin kabul edebileceği, değiştirebileceği, erteleyebileceği veya reddedebileceği bir biçimde sunun. Daha fazla öğretmen desteği de daha iyi değildir: öğrencilerin bağımsız çalışabilmesi için müdahaleyi ertelemek de kendisi bir uzmanlıktır ve yapısal koşullar — verileri incelemeye ayırılan zaman, sınıf mevcudu, yardıma ihtiyaç duyan gruplara fiziksel olarak ulaşabilme — müdahalenin bir parçasıdır, arka plan lojistiği değil.

## Faydalı bir YZ eğitmeni mimarisi

Güçlü bir üretim mimarisi şöyle temsil edilebilir: öğrenme hedefi → öğrenen kanıtı/öğrenen modeli → pedagojik politika → dayandırılmış ve doğrulanmış içerik → konuşma üretimi → öğrenen yanıtı → güncellenmiş öğrenen modeli (döngüye dönerek). Güvenlik, gizlilik, erişilebilirlik, öğretmen denetimi ve değerlendirme tüm döngüyü çevrelemelidir.

## En önemli başarı ölçütü

En önemli geliştirme ölçütü "YZ problemi çözdü mü?" değil, **"YZ ile etkileşimden sonra öğrenen benzer bir problemi bağımsız olarak çözebilir mi?"**’dir. Bu ilkeye ilişkin kanıtlar matematik ve programlama gibi yapılandırılmış öğrenme alanlarında en güçlüdür; daha açık uçlu alanlara genelleme daha az kesindir ve bu da alana özgü değerlendirmeyi zorunlu kılar.

Bir eğitmenin tek başına durmak yerine bir kurs dizisinin içinde nerede yer aldığını [[designing-ai-into-learning]] başlığında; bir eğitmenin karşılaması gereken yazılım düzeyindeki tasarım kurallarını [[designing-educational-ai-software]] başlığında; ortaya çıkan müdahaleyi nasıl değerlendireceğinizi [[evaluating-ai-interventions-methods]] başlığında bulabilirsiniz.

---

## Örnek 1: Kalkülüs YZ Eğitmeni Tasarlamak

Üniversitenin ilk dönemi bir kalkülüs eğitmeni düşünün. Hedefi, doğru biçimde tamamlanan problemleri en üst düzeye çıkarmak değil, öğrencilerin **eğitmen kaldırıldıktan sonra bağımsız olarak** çözüp açıklayabileceklerini artırmak olmalıdır. Matematik eğitimi aşırı iskeleleme, erken ipucu kullanımı ve öğrenci akıl yürütmesinin hatalı tanılanmasına özellikle açıktır. Bkz. [[math-education]], [[zhang-tutormoments-2026|When Help is Unhelpful]], [[correct-answer-trap-ai-tutor|Catching the Correct Answer Trap]] ve [[scaffolding]].

**Öğrenme hedefleri.** Eğitmen bir kavram haritası sürdürebilir (fonksiyonlar ve grafikler → değişim hızları → limitler → limit olarak türev → türev kuralları → uygulamalar → ters türevler → belirli integraller → temel teorem). Her kavram için çeşitli ustalık türlerini ayırt etmelidir. Örneğin "türev ustalığı" yalnızca doğru türevi üretmek anlamına gelmemelidir; türevin ne zaman uygun olduğunu tanımayı, onu anlık değişim hızı olarak yorumlamayı, doğru kuralı seçmeyi, prosedürü uygulamayı, neden uygun olduğunu açıklamayı, makulluğunu kontrol etmeyi ve tanıdık olmayan bir problemde kullanmayı içerebilir. Bu, öğrenenin hatalı akıl yürütme yoluyla doğru yanıta ulaştığı [[correct-answer-trap-misconceptions|doğru yanıt tuzağı]]nı önlemeye yardımcı olur.

**Sistem mimarisi.** Pratik bir altı katmanlı tasarım: kurs materyalleri + eğitmen politikaları → getirme/RAG katmanı → (problem motoru → öğrenen modeli) ve (sembolik doğrulayıcı → tanılama motoru) → pedagojik politika → konuşma LLM → öğrenci → güncellenmiş öğrenen modeli.

1. **Kurs temellendirme katmanı:** öğretmenin onayladığı materyallerden (ders kitabı bölümleri, ders notları, çözülmüş örnekler, terminoloji, onaylı yöntemler, gösterim, ödev kuralları) getirir; böylece eğitmen matematiksel olarak geçerli ama kurs için uygun olmayan teknikleri asla sunmaz.
2. **Matematiksel doğrulama katmanı:** cebirsel eşdeğerliği, türevleri, integralleri, denklem çözümlerini, kritik noktaları ve sayısal yaklaşımları doğrulamak için bir bilgisayar cebiri sistemi kullanır — LLM açıklama ve diyaloğu üstlenir, deterministik sistem ise matematiksel kontrolü üstlenir.
3. **Öğrenen modeli katmanı:** kavram bazında tahmileri (örn. limit: gelişmekte, kuvvet kuralı: ustalaşıldı, çarpım kuralı: gelişmekte, zincir kuralı: gösterilmedi) yanı sıra kanıt ve güvenle birlikte yanlış kanı hipotezlerini sürdürür. YZ bir yanlış kanıyı kesin gerçek değil, bir **hipotez** olarak ele almalıdır, çünkü LLM’ler kanıt uydurabilir veya yanlış kanıları hatalı çıkarımda bulunabilir — **algıla → doğrula → yanıtla** süreci gerekir.

**Bir eğitim etkileşimi.** $f(x)=(x^2+1)\\sin x$ ifadesinin türevini almak için geleneksel bir sohbet robotu cevabı hemen açıklayabilir. Öğrenmeye yönelik bir eğitmen bunun yerine içsel olarak akıl yürütür: öğrenci her iki bileşenin türevini almış ama türevlerini çarpmış gibi görünüyor (olası bir çarpım-kuralı-olarak-$f'g'$ yanlış kanısı), bu yüzden önce tanısal bir soru sorar ("iki fonksiyon çarpıldığında hangi kuralı kullanırsın?"), sonra öğrencinin çarpım kuralını sembolik olarak yazmasını sağlar, ardından $u$ ve $v$’yi kurar ve nihai ifadeyi yalnızca öğrenci onu yeniden oluşturduktan sonra doğrular.

**Kademeli yardım politikası.** Destek bir düzey merdiveniyle uyarlanabilir: bağımsız deneme → [[metacognition|üstbilişsel]] soru → kavramsal ipucu → ilgili kuralı belirleme → problemin bir kısmını kurma → çözülmüş ara adım → çözülmüş çözüm → öğrenci açıklar → öğrenci bir aktarım problemini bağımsız olarak çözer. Çözülmüş bir çözümü görmek ustalığı göstermez; bu nedenle kapsamlı yardımdan sonra eğitmen, öğrenenin benzer bir problemi yardımsız denemesini sağlamalıdır.

**Verimsiz ipucu kullanımını önlemek.** Arayüz sınırsız ipucunu sürtünmesiz bir kısayol haline getirmemelidir, çünkü erken ipucu talepleri ve yüzeysel ipucu okuma daha düşük [[learning-gains|öğrenme kazanımları]] ile ilişkilidir. `[Hint][Hint][Hint][Show Answer]` yerine sistem "ne denedin?" ve "seni hangi bölüm engelliyor?" (bir kural seçmek, denklemi kurmak, cebir yapmak, kavramı anlamak, başka bir şey) diye sorabilir ve hedefli yardım sunabilir.

**Kavramsal kalkülüsü desteklemek.** Eğitmen, sembolik prosedürleri birden çok gösterimle (formül, grafik, tablo, sözel yorum, fiziksel değişim hızı bağlamı) bağlantılandırarak prosedürel akıcılığı kavramsal anlayıştan ayırt etmelidir.

**Öğretmen gösterge panosu.** Sistem, opak YZ yargıları yerine toplanmış kanıtları görünür kılmalıdır — örn. "çarpım kuralı — %62 gösterilmiş ustalık; yaygın kalıplar: %18 bir terimi atlıyor, %11 türevleri çarpıyor" — bireysel tanılar ise kanıtla desteklenen hipotezler olarak sunulur.

**Değerlendirme planı.** Eğitmeni kullanırken performansı, onsuz benzer problemlerde performansı, gecikmeli hatırlamayı, tanıdık olmayan problemlere aktarımı, kavramsal [[explainable-ai|açıklama kalitesini]], yanlış kanı düzeltmesini, uygun ve erken [[help-seeking|yardım arama]] davranışını, cevap sızıntısını, tanısal yanlış pozitif/negatif oranlarını ve [[differential-effects-across-learner-groups|farklı sonuçları]] ölçün. Ana karşılaştırma, **eğitmenle** performans ile sonrasında **ondan yoksun** performans arasındadır — destekliyken %60’tan %95’e çıkan ama bağımsızken %60’ta kalan bir öğrenci etkili eğitim almamıştır.

---

## Örnek 2: YZ Yazma Koçu Tasarlamak

Bir YZ yazma koçu farklı bir tasarım gerektirir, çünkü yazmanın nesel olarak tek bir doğru yanıtı yoktur. Amaç, öğrenenin kendi yazısını planlama, taslak oluşturma, değerlendirme ve gözden geçirme konusunda daha iyi hale gelmesine yardımcı olmaktır. Bilgi tabanı yazmayı **bilişsel, sosyal ve retorik bir süreç** olarak çerçeveler; bu, bir YZ yazma sisteminin öğrenmeyi destekleyebileceği, ama ödevin geliştirilmesi amaçlanan düşünmeyi tam olarak ortadan kaldırabileceği anlamına gelir. Bkz. [[writing-education]], [[ai-writing-support-stage-ownership-2026|From Planning to Revision]], [[coach-not-crutch-ai-writing|Coach not Crutch]] ve [[feedback]].

**Öğrenme hedefleri.** Koçun öğrenen modeli argümanı (tez özgüllüğü, iddia-kanıt hizalaması, karşı argüman), organizasyonu (paragraf odağı, mantıksal ilerleme, geçişler), kanıtı (kaynak ilgililiği, kanıt bütünleştirmesi, yorumlama), gözden geçirmeyi (küresel ve cümle düzeyinde gözden geçirme, geri bildirim değerlendirmesi) ve üslubu (cümle açıklığı, dilbilgisi, yazarlık sesi) izleyebilir — yazma **yeterliliklerini**, yalnızca bir makale puanını değil.

**Koçu ödeve dayandırın.** Ödev talimatlarını, eğitmen rubriğini, kurs okumalarını, atıf gerekliliklerini, tür kurallarını, eğitmen örneklerini ve YZ kullanım politikasını getirin; böylece geri bildirim jenerik beklentiler uydurmak yerine gerçek ödeve atıfta bulunabilir ("eğitmeninizin rubriği, her önemli iddiayı en az iki kurs okumasından kanıtla bağlamanızı istiyor").

**Yazma aşamalarını farklı ele alın.** Farklı aşamalardaki YZ katılımı algılanan sahipliği farklı biçimde etkiler — planlama desteği sahipliği taslak desteğinden daha az azaltır ve YZ tarafından üretilen taslak en büyük sahiplik düşüşünü yaratır. Bu nedenle bir koç aşama başına farklı izinler verebilir: planlamada soru sorabilir, görüşleri karşılaştırabilir, varsayımlara meydan okuyabilir ve ana hatları eleştirebilir ama tüm argümanı üretmekten kaçınabilir; taslakta öğrenen önce düz yazı üretir (koç geliştirmeye yardımcı olur, devralmaz); gözden geçirmede koç belirsiz iddiaları belirleyebilir, eksik kanıtlara işaret edebilir, kanıtın bir iddiayı destekleyip desteklemediğini kontrol edebilir, organizasyonel sorunları tespit edebilir ve taslağı rubriğe karşılaştırabilir — **yeniden yazmadan önce tanılama**; düzenlemede (gözden geçirmeden sonra) dilbilgisi, noktalama, özlülük ve atıf biçimlendirmesine destek olabilir.

**Örnek etkileşim.** [[online-teaching-and-learning|çevrimiçi kurslar]]ın zorunlu tutulmasına ilişkin bir makale için jenerik bir sistem, öğrencinin paragrafını cilalanmış düz yazıya yeniden yazarak entelektüel işi yapabilir. Bir yazma koçu bunun yerine neyin işe yaradığını söyler, asıl sorunu adlandırır (paragraf gerekçeler veriyor ama bunların neden üniversite genelinde bir zorunluluğu gerekçelendirdiğini açıklamıyor), bir gözden geçirme sorusu yöneltir ve öğrenciden bir cümleyi kendi sözcükleriyle tamamlamasını ister — argüman kurulumunu öğrenene bırakarak.

**Geri bildirim önceliklendirilmelidir.** Her geri bildirim turu korunacak bir güçlü yan, yüksek etkili bir sorun, yazar yargısı gerektiren bir soru ve somut bir gözden geçirme hedefi içerebilir — öğrenciyi düzinelerce yorumla bunalmak yerine.

**Öğrencinin [[ai-feedback-quality|YZ geri bildirimini]] değerlendirmesini sağlayın.** [[feedback-literacy|Feedback literacy]] (geri bildirim okuryazarlığı) kendisi bir öğrenme hedefidir; koç düzenli aralıklarla öğrenenin bir öneriyi ve nedenini kabul edip etmediğini sormalı ve öğrenenin YZ geri bildirimini reddetmesine izin vermelidir — itaati değil, **[[evaluative-judgment|değerlendirici yargıyı]]** geliştirerek.

**Yazarlık sesini koruyun.** Koç hataları, açıklık sorunlarını, retorik seçimleri ve üslup tercihlerini ayırt etmeli ve ikincisini otomatik olarak "düzeltmemelidir" — aksi halde yazıyı modelin tercih ettiği üsluba doğru homojenleştirme riski taşır, özellikle [[multilingual-learning|çok dilli]] yazarlar ve standart dışı retorik üsluplar için.

**Gözden geçirme geçmişine dayalı bir öğrenen modeli.** Sistem yalnızca son makaleleri depolamak yerine öğrencinin gözden geçirmelerinden öğrenebilir (örn. makaleler boyunca düzelten, tekrarlayan bir "kanıt sunuldu ama yorumlanmadı" kalıbı), öğrenmenin kanıtlarına göre uyum sağlayarak.

**Öğretmen katılımı.** Eğitmen rubriği, ödev hedeflerini, izin verilen YZ yardımı biçimlerini, kaynak toplamayı, atıf beklentilerini, üretken taslak oluşturmaya izin verilip verilmediğini ve insan incelemesinin ne zaman gerekli olduğunu denetler. Bir öğretmen gösterge panosu, sınıf düzeyinde kalıpları (örn. %41’in iddia-kanıt bağlantısı konusunda desteğe ihtiyacı var) bir [[formative-assessment]] sinyali olarak gösterebilir.

**Yazma koçunu değerlendirmek.** YZ destekli ve sonrasında desteksiz yazmanın kalitesini, tanıdık olmayan yazılarda zayıflıkları belirleme yeteneğini, gözden geçirme kalitesini, geri bildirim kullanımını, gözden geçirmeleri açıklama yeteneğini, öğrenci sahipliğini, YZ düz yazısına bağımlılığı, sesin korunmasını, lehçeler/çok dilli yazarlar/gruplar arasındaki önyargıyı, eğitmen yargısıyla uyumu ve gecikmeli aktarımı ölçün. Aydınlatıcı bir deney; bağımsız yazan bir grubu, YZ’nin metin ürettiği/gözden geçirdiği bir grubu ve bir koç grubunu karşılaştırır — hepsi ardından YZ olmadan yeni bir makale tamamlar: YZ tarafından üretilen grup alıştırmada en iyi performansı gösteriyor ama YZ olmadan kötü performans gösteriyorsa, sistem öğrenmeyi değil performansı iyileştirmiştir.

---

## İki tasarımı karşılaştırmak

| Tasarım sorusu | Kalkülüs eğitmeni | Yazma koçu |
|---|---|---|
| Birincil öğrenme nesnesi | Matematiksel kavramlar ve problem çözme | Argümantasyon ve yazma süreci |
| Doğrulama | Sıklıkla nesel olarak doğrulanabilir | Genellikle bağlamsal yargı gerektirir |
| Deterministik araçlar | Sembolik matematik motoru / hesap makinesi | Dilbilgisi, atıf, rubrik kontrolleri |
| Ana YZ rolü | Akıl yürütmeyi tanılamak ve iskelemek | Gözden geçirmeyi tanılamak ve iskelemek |
| Başlıca risk | Çözümü peşin vermek | Metni öğrenen için yazmak |
| Önemli öğrenen eylemi | Çözmek ve açıklamak | Taslak oluşturmak, değerlendirmek ve gözden geçirmek |
| Öğrenen modeli | Kavramlar, prosedürler, yanlış kanılar | Argüman, kanıt, organizasyon, gözden geçirme |
| Ana koruma kuralı | Çözümden önce deneme | YZ yeniden yazmadan önce öğrenci düz yazısı |
| Aktarım testi | Yeni, YZ’siz kalkülüs problemleri | Yeni, YZ’siz yazma görevi |
| Başarı ölçütü | Bağımsız matematiksel akıl yürütme | Bağımsız yazma ve değerlendirici yargı |

İki sistem de aynı YZ [[ai-technologies|teknolojilerin]] çoğunu kullanır ama **disiplinler farklı türde düşünme gerektirdiğinden farklı pedagojik politikaları somutlaştırır**. Ortak ilke: **öğrenmeyi üreten bilişsel etkinliği belirleyin ve YZ’yi o etkinliği öğrenenden almadan destekleyecek biçimde tasarlayın** — kalkülüs için matematiksel akıl yürütmeyi, yazma için yazarlığı, retorik karar vermeyi, değerlendirmeyi ve gözden geçirmeyi koruyarak. Bu ilke herhangi bir özel modelden, istek metninden, ajan çerçevesinden veya kullanıcı arayüzünden daha temeldir.
