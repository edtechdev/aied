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
translation_of: faqs/developing-ai-tutor
source_updated: "2026-10-28T11:21:07-04:00"
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

YZ eğitmeninizin pilot uygulamasına üç hafta kaldı. Sohbet çalışıyor, model bir türevi temiz biçimde açıklıyor ve iç demo alkış aldı. Sonra öğretme merkezinden biri, şartnamenizde karşılığı olmayan soruyu soruyor: bir dönem bu şeyle geçtikten sonra, öğrenciler o odada yokken bir problemi çözebilecek mi? Elinizde olan bir özellik listesidir. Elinizde olmayan ise, öğrenenin sonunda tek başına ne yapabildiğini söyleyen tek bir cümledir.

Bir eğitmen, bir [[conversational-ai|sohbet robotunun]] etrafına sarılmış bir politika bütünüdür ve öğrenmenin gerçekleşip gerçekleşmeyeceğine bu politika karar verir. Öğrenenin yapması gereken bilişsel işi adlandırın, sistemi bu işi zorunlu kılacak biçimde kurun (yardımdan önce bir deneme, giderek solan bir ipucu merdiveni, modelin taklit edemeyeceği bir kontrol) ve değerlendirmeyi eğitmen kapalıyken yapın. Model kalitesi sohbetin ne kadar iyi hissettirdiğini belirler. Politika ise öğrencinin haziranda ne yapabildiğini belirler.

## Kısa özet

**1.** Hedefi, desteksiz performansa dair bir iddia olarak yazın ve her özelliği ondan türetin. Bir özellik o cümleye bağlanamıyorsa, o bir demo özelliğidir.

**2.** Öğrenen modelini kaydedebildiğiniz kanıtlardan kurun ve her tanıyı olgu değil, güven değeri taşıyan bir hipotez olarak saklayın.

**3.** Yardım merdivenini kodda sabitleyin, basamakları adlandırın ve arayüzün her basamak inişi karşılığında öğrenenden bir bedel almasını sağlayın.

**4.** İçeriği kendi materyallerinize dayandırın; aritmetik, cebir ve kod denetimini halüsinasyon göremeyecek deterministik araçlara bırakın.

**5.** Öğretim hatalarını bütün konuşmalar üzerinde test edin: cevabın sızması, yaltaklanma, yanlış anlamanın pekiştirilmesi, öğretimsel sürüklenme.

**6.** Geri çekme aşaması ve gecikmeli test ile ölçün, memnuniyet puanıyla değil.

## Hedefi desteksiz performansa dair bir iddia olarak yazın

Üç liste, kimse bir model seçmeden önce yazılır:

- Öğrenenlerin sonrasında bilmesi ya da yapabilmesi gerekenler.
- Kendilerinin yerine getirmesi gereken bilişsel iş.
- Eğitmenin onlar için yapabilecekleri.

[[intelligent-tutoring|Akıllı özel ders]] literatürü, etkililiğin tek başına model kapasitesine değil [[pedagogy|pedagojik]] tasarıma bağlı olduğunu ortaya koyar ve bu hata kazara kolayca inşa edilir. "Problemi bitirmek" için optimize edilmiş bir eğitmen, "problemi çözmeyi öğrenmek" için optimize edilmiş bir eğitmeni baltalar; üstelik yazdığınız her işlevsel testi geçer, çünkü ikisi de doğru nihai cevabı üretir. Fark, öğrencinin soru ile cevap arasında ne yaptığında yaşar.

İkinci liste, geliştirme ekiplerinin somutlaştığı yerdir. "Türev ustalığı" gibi bir etiketi alın ve doğru türevi üretmek anlamına gelmesine izin vermeyin. Onu şu parçalara ayırın: bir türevin ne zaman uygun olduğunu tanıma, onu anlık değişim oranı olarak yorumlama, kuralı seçme, prosedürü yürütme, seçimin neden doğru olduğunu açıklama, makullüğünü kontrol etme ve onu tanıdık olmayan bir probleme uygulama. Bunların her biri kaydedilecek ayrı bir şeydir ve her biri eksik olduğunda farklı bir yanıt gerektirir. Bu ayrıştırma aynı zamanda [[correct-answer-trap-misconceptions|doğru cevap tuzağına]] karşı savunmadır: öğrenen hatalı bir akıl yürütmeyle doğru cevaba ulaşır ve analitiğiniz bir başarı kaydeder. [[correct-answer-trap-ai-tutor|Doğru Cevap Tuzağını Yakalamak]] ve [[zhang-tutormoments-2026|Yardımın Yararsız Olduğu Anlar]] bu hatanın üretimdeki versiyonlarını anlatır.

## Öğrenen modelini konuşmadan önce kurun

Öğrenen modeli iki tür durum tutar: kavram bazında tahminler (limit: gelişiyor, kuvvet kuralı: ustalaşıldı, çarpım kuralı: gelişiyor, zincir kuralı: gösterilmedi) ve her birinin arkasındaki kanıt ve güvenle birlikte yanlış anlama hipotezleri. Bunları ayrı tutun. Kavram tahmini, zorluk seçimini yürüten şeydir. Hipotez ise sıradaki soruyu yürüten şeydir.

Tanıyı bir [[llm|büyük dil modelinin]] tek başına yapmasına izin verme konusunda dikkatli olun. [[benchmark|Kıyaslama]] çalışması, LLM eğitmenlerinin açıkça doğru akıl yürütmeyi tanıyabildiğini, ama bazen geçerli alternatifleri reddettiğini ya da hatalı akıl yürütmeyi kabul ettiğini buldu. İyi durumu yakalayıp belirsiz olanı yanlış okuyan bir model, tam da yardıma ihtiyacı olan öğrencilerde başarısız olur. Sonuçları ağır olan alanlarda ayakta kalan mimari **yapılandırılmış tanı artı esnek LLM diyalogu**dur; [[yasir-llm-tutoring-agents-2026|Doğruyu Onaylayıp Gerisini Kaçırmak]] çalışmasının anlattığı düzen budur: kendi dedektörünüz öğrencinin muhtemelen ne yaptığını saptar, model de konuşmayı bu bulgunun etrafında yazar.

Tanıya, modelin atlayamayacağı açık bir sıra verin: sapta, doğrula, yanıtla. Model bir [[misconceptions|yanlış anlamayı]] hipotez olarak önerebilir, ancak eğitmen ona yanıt vermeden önce bunu öğrencinin gerçek çalışmasına ya da hedefli bir soruya karşı doğrulamak zorundadır. Bu adım olmadan sistem kanıt uydurur ve sonra öğrenciye yapmadığı bir hata için ders verir; bu hem yararsız hem de biraz aşağılayıcıdır.

Kaydetmeye değer kanıtlar, kabaca yararlılık sırasıyla: ara adımlarıyla birlikte son denemeler, kavram bazında gösterilmiş bilgi, yardım arama davranışı (bu kendisi de güven hakkında bir sinyaldir) ve topladığınız yerlerde öz bildirilen güven. Zorluğu ve yardımı bu kayıttan uyarlayın ve öğrenenin son promptunu bunun yalnızca bir girdisi olarak görün. Tek bir prompt, öğrencinin ne bildiğine dair kötü bir tahmincidir; ona tepki veren bir eğitmen savrulur.

## Yardım merdivenini sabitleyin, sonra arayüzden bedelini alın

Basamakları bir prompt yazmadan önce yazın, çünkü merdiven adlandırılmış durumları olan bir ürün kararıdır ve bir ton ayarı bunu ifade edemez. İşleyebilir bir sıra:

1. Bağımsız deneme.
2. Öğrencinin ne denediğine dair üstbilişsel soru.
3. Kavramsal ipucu.
4. İlgili kuralı belirleme.
5. Problemin bir bölümünü kurma.
6. Ara adımı çözülmüş biçimde gösterme.
7. Çözümün tamamını çözülmüş biçimde gösterme.
8. Öğrencinin çözümü açıklaması.
9. Öğrencinin benzer bir problemi desteksiz çözmesi.

Yetkinlik arttıkça destek solar; [[scaffolding|iskele]] kavramının merkezindeki mekanizma budur. Çözülmüş bir çözümü görmek ustalığı göstermez, dolayısıyla yedinci basamağa ulaşan her oturum, tamamlanmış sayılmadan önce size dokuzuncu basamağı borçludur.

Merdiveni kurmanın nedensel kanıtı, korumasız bir GPT arayüzünün destekli matematik performansını artırıp sonraki desteksiz sınav performansını düşürdüğü bir saha deneyinden gelir. İpucu veren bir eğitmen bu öğrenme cezasını büyük ölçüde ortadan kaldırdı ([[generative-ai-guardrails-harm-learning|Korumasız üretken YZ öğrenmeye zarar verebilir]]). Kısıt mimaridir. Aynı model, farklı bir yardım davranışı verildiğinde, önemli olan ölçütte zıt sonuçlar üretti.

Ustalık temelli bir alıştırma platformunda 6.000'den fazla ortaokul öğrencisiyle yapılan daha büyük bir randomize saha deneyi, merdivenin kayıtlarda nasıl göründüğünü gösterir. YZ desteğine atanan öğrenciler daha yavaş ilerledi ve daha az soru denedi, buna karşılık daha doğru yanıtladı. En net mekanizma, bir hatadan sonraki denemenin doğruluğuydu: doğru bir cevaba dönmek için daha az deneme gerekti. Bu desen verimli bir yavaşlamadır ve bir ipucu merdiveninin bırakması gereken izdir ([[making-ai-tutoring-productive-mastery-math-2026|YZ Özel Dersini Verimli Kılmak]]).

Aynı çalışma, kendi panolarınıza dair bir uyarı da sağlıyor. Üst üste üç doğru cevap istemek, platform tanımlı ustalığı keskin biçimde yükseltti ama bir hafta sonraki gecikmeli testte saptanabilir bir kazanç üretmedi. Gecikmeli teste dair en güçlü kanıt yalnızca YZ'nin ustalık iş akışının içinde oturduğu yerde ortaya çıktı (katsayı 0,085), tek başına erişilebilir olduğu yerde değil. Başarı ölçütünüz bir seri sayacıysa, seriyi optimize eden bir sistem sevk edersiniz.

Arayüz sürtünmesi de aynı tasarım geçişine aittir. Görünür bir düğmenin arkasındaki sınırsız ipuçları, merdivenin tamamını bir kısayola dönüştürür; yüzeysel okumayla birlikte erken ipucu istemek daha düşük [[learning-gains|öğrenme kazanımı]] ile ilişkilidir. `[Hint][Hint][Hint][Show Answer]` yerine "neyi denedin?" ve "hangi kısım seni tıkıyor?" (bir kural seçmek, denklemi kurmak, cebiri yapmak, kavramı anlamak) sorularını koymak tek bir ekrana mal olur ve öğrenciyi gerçekten ihtiyaç duyduğu basamağa yönlendirir. Ayrıca hangi basamağı alışkanlıkla atladıklarını size söyleyen kayıt verisini de verir.

## Kontrol edilebilir kısımları denetleyiciye verin

Üretimi eğitmen onaylı materyale dayandırın: ders kitabı bölümleri, ders notları, çözülmüş örnekler, terminoloji, onaylı yöntemler, gösterim, ödev kuralları, politikalar ve [[curriculum-design|müfredat]] kaynakları. Bu derlem üzerinde geri getirme destekli üretim [[hallucination-risk|halüsinasyon riskini]] azaltır ama ortadan kaldırmaz; [[rag]] bunu ayrıntılı olarak ortaya koyar. Öğrencinin bir iddiayı kontrol edebileceği yerlerde arayüzde kaynak veya köken bilgisini görünür kılın, çünkü dayandırmanın sonradan denetlenebilir olmasını sağlayan şey bu atıftır.

Dayandırma ayrıca doğruluk metriklerinin kaçırdığı bir işi de yapar. Bir dersin onaylı yöntemleri vardır ve dersin kullanmadığı matematiksel olarak geçerli bir tekniği sunan bir eğitmen, öğrenciye puan kaybettirecek bir şey öğretmiş olur. Ders katmanından geri getirme, eğitmenin yöntem kümesinin içinde kalmasını sağlayan şeydir.

Resmî olarak kontrol edilebilir cevapları olan alanlarda deterministik araçlar ekleyin: hesap makineleri, sembolik matematik sistemleri, kod yürütme, bilgi grafikleri, kural tabanlı doğrulayıcılar ve [[discipline-specific-aied|alana özgü]] çözücüler. Önemli olan iş bölümüdür. Açıklamayı ve diyalogu LLM yürütür. Cebirsel denkliği, türevleri, integralleri, denklem çözümlerini, kritik noktaları ve sayısal yaklaşımları sembolik motor doğrular. Doğrulayıcının yakaladığı hatalı bir ara adım bir öğretim anına dönüşür. Hiçbir şeyin yakalamadığı hatalı bir ara adım ise öğrencinin sınava taşıdığı bir yanlış anlamaya dönüşür.

## Öğrenenin geri bildirim üzerine eyleme geçmesini zorunlu kılın

"Doğru", "Yanlış" ya da "Aferin" diyen geri bildirim, öğretimin arayüzünü giymiş bir puanlama olayıdır. Bilgi tabanı [[feedback|geri bildirimi]] bir sunum-kullanım döngüsü olarak ele alır: geri bildirim, öğrenciler onu anlayıp üzerine eyleme geçtiğinde öğrenmeyi destekler ve sistemlerin genellikle atladığı yarı ikinci yarıdır. Eğitmeni, söz konusu akıl yürütme adımını adlandıracak, neyin yeniden düşünülmesi gerektiğini söyleyecek, tek bir somut sonraki eylem verecek ve geri bildirim açığa çıkmadan önce öğrenenden tahmin etmesini ya da açıklamasını isteyecek biçimde kurun.

Bunu taşıyan sıra şudur: önce öğrenen, sonra YZ, sonra yine öğrenen. Öğrenci üretir, seçer, gerekçelendirir, değerlendirir ya da yansıtır; eğitmen yanıtlar; öğrenci yanıtla bir şey yapar. Tur yapısını bunun isteğe bağlı olmayacağı biçimde tasarlayın. Modelin tek bir soruya üç paragraf üretebildiği bir sistem, öğrenciye sormayı ve okumayı öğretir.

Uzun vadeli hedef içselleştirmedir. Öğrenenler sonunda eğitmenin sorgulama ve [[problem-solving|problem çözme]] stratejilerini kendileri yürütmelidir; [[agency|özerklik]] argümanı budur ve merdivenin neden eğitmenin sessiz kaldığı bir en üst basamağı olduğunun nedenidir.

## Kırkıncı turda ne olacağına göre tasarlayın

Pedagojik güvenlik, sıradan sohbet robotu güvenliğinden ayrı bir test paketidir ve çoğu ekip yalnızca ikincisiyle sevk eder. Toksisite ve jailbreak direnci, eğitmenin iki kez soran bir öğrenciye cevabı verip vermeyeceği, öğrenci kendinden emin konuştuğu için hatalı bir yöntemi onaylayıp onaylamayacağı, uzun bir oturumda dersin yöntem kümesinden çıkıp çıkmayacağı ya da öğreneni [[cognitive-offloading|bilişsel yük boşaltmaya]] itip itmeyeceği hakkında hiçbir şey söylemez. İlk geçen [[ai-sycophancy|yaltaklanmadır]], çünkü anlaşmak nezaket gibi okunur ve tercih veriniz onu ödüllendirir.

Cevap sızması, yanlış anlamanın pekiştirilmesi, aşırı anlaşma, uygunsuz zorluk, yük boşaltma, önyargılı muamele, öğrenen özerkliğinin kaybı, öğretimsel sürüklenme ve hatalı açıklamalarda aşırı özgüven için test edin. Testleri tek turlar üzerinde değil, uzun konuşmalar üzerinde çalıştırın, çünkü pedagojik hatalar birikir: ilk on tur örnek niteliğinde olabilir ve on birinci tur oturumu bozabilir. Bir eğitmen aynı anda hem nazik hem doğru olmalıdır; öğrenen bir yanlış anlamada ısrar ettiğinde de. [[pedagogical-safety|Pedagojik güvenlik]] ve [[hazra-safetutors-pedagogical-safety-2026|YZ Eğitmen Güvenliği ve Pedagojik Zararlar]] hata taksonomisini ortaya koyar.

## Veri mimarisini aynı tasarım belgesine koyun

Yalnızca pedagojik olarak gerekli öğrenen verisini toplayın ve her alanın neden var olduğunu söyleyebilin. Kalıcı bellek ya da bir [[student-modeling|öğrenen modeli]] tuttuğunuz yerlerde amacını öğrenen için görünür kılın, ona uygun kontrolü verin, hassas bilgileri koruyun, saklama süresini tanımlayın ve sonuçları ağır kararları bir eğitmene ya da başka bir [[human-in-the-loop-ai|insan]] kontrol noktasına yönlendirin. Öğrencinin hiç görmediği bir güven tahminini sessizce biriktiren bir öğrenen modeli hem bir veri koruma sorunu hem de pedagojik bir sorundur.

Davranışı dil geçmişleri, yetenek düzeyleri, kültürel bağlamlar, [[accessibility|erişilebilirlik]] ihtiyaçları ile [[prior-knowledge|ön bilgi]] ve YZ deneyimi düzeyleri arasında denetleyin. Aynı hedefte farklı performans, arkasında bir öğrenci olan bir hatadır ve toplam doğruluk sayınızda görünmez.

Bir erişilebilirlik kararı ayrı bir satırı hak ediyor: karmaşık [[prompt-engineering|prompt yazmayı]] iyi öğretimin önkoşulu yapmayın. Eğitmen yalnızca öğrenci dikkatli bir prompt yazdığında iyi öğretiyorsa, modellerle nasıl konuşulacağını zaten bilen öğrencilere avantaj sağlayan bir sistem kurmuş olursunuz. Eğitmen, öğrenenlerin verimli sorular formüle etmesine yardım etmelidir; bu da sahip olunmaya değer bir [[metacognition|üstbiliş]] becerisidir.

## Geri çekme aralığını ölçüme bağlayın

Oturum metrikleri size işin işe yarayıp yaramadığını söylemez. Yanıt doğruluğu, konuşma uzunluğu, öğrenci tercihi, memnuniyet, görev tamamlama ve [[student-engagement|katılım]], hiçbir şey öğretmeyen sistemlerde de yükselir, çünkü öğrenciler yardımı sever ve yardımı ölçmek kolaydır. Desteksiz performansı, gecikmeli kalıcılığı, yeni problemlere transferi, yanlış anlamanın düzeltilmesini, öğrenen bağımsızlığını, geri bildirim kullanımını ve [[differential-effects-across-learner-groups|öğrenen grupları arasındaki farklı etkileri]] değerlendirin. Yöntemler [[ai-ed-evaluation|YZ eğitimi değerlendirmesinde]] var ve [[ai-tutor-behavioral-evaluation|Eksik Değerlendirme Ekseninde]] asıl yapının davranış olduğu savunuluyor.

İki çalışma, [[self-report-measures|öz bildirime]] ve kısa ufuklara karşı kuralı keskinleştiriyor. 38 acemi programlama öğrencisiyle yapılan bir pilot, [[generative-ai|üretken YZ]] kullanımı ile *algılanan* öğrenme arasında güçlü bir ilişki buldu (rs=0,802, p<0,001), buna karşılık eğitmen desteği olmadan özerk ilerlemenin göstergeleri en düşük puanı aldı. Yazarlar bu boşluğu yeterlik yanılsaması ve epistemik borç olarak adlandırıyor ve bu tam olarak bir memnuniyet metriğinin ödüllendirdiği boşluktur ([[genai-cognitive-tutor-programming-2026|Informal Bir Bilişsel Eğitmen Olarak Üretken YZ]]).

Daha temelde, değerlendirmelerin çoğu yardımın bittiği anda durur. [[cognitive-washout-ai-skill-decay-2026|Bilişsel yıkanma dinamikleri]] ölçülmemiş yardım sonrası aralığı adlandırır ve dört sonucu biçimselleştirir: esnek geri sıçrama, kısmi plato, gizil iskele ve aşırı toparlanma. Yıkanma eğrisi bir toparlanma zaman sabiti, bir toparlanma bütünlüğü terimi ve yeniden öğrenme çabasını özgün çabayla karşılaştıran bir histerezis indeksi taşır. Tersine çevrilebilirlik ciddiyeti belirlediği için çerçeve, planlanmış desteksiz alıştırmanın ilke meselesi olarak tartışılmak yerine toparlanma eğrisine göre dozlanması gerektiğini savunur. Değerlendirme planınızın acil bir son test kadar bir geri çekme aşamasına da ihtiyacı var ve [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|kısa süreli yardımın sonraki desteksiz performansı düşürdüğüne dair randomize kanıt]], bu aşamayı erken planlamanızın nedenidir.

## Öğretmenlere düzenleyebilecekleri bir şey verin

Sevk etmeden önce eğitimcilerin gerçekçi öğrenen profillerini, yaygın yanlış anlamaları, uç durumları, düşmanca promptları, belirsiz yanıtları ve uzun özel ders konuşmalarını test etmesini sağlayın. Pedagojik hataları kaydedin ve bunları sistem promptlarına, öğretim politikalarına, bilgi kaynaklarına, [[guardrails|koruma kalkanlarına]], öğrenen modeli kurallarına ve model seçimine geri besleyin. Akıcı bir yanıt yine de pedagojik olarak yanlış olabilir ve bunu görebilecek tek gözden geçiren bir öğretmendir.

[[teacher-intervention-k12-ai-based-instruction-2026|Lee'nin 29 K-12 çalışmasını kapsayan sistematik derlemesi]], bu gözetimin nelerden oluştuğunu ve nerede kırıldığını anlatır. [[teacher-role|Öğretmen]] müdahalesi, izleme, yargı, müdahale ve orkestrasyondan oluşan yinelemeli dört aşamalı bir döngüdür. YZ uyarıları, [[visualization|panolar]] ve otomatik puanlar "otomatik olarak pedagojik eyleme yol açmaz." Derlemenin bulduğu en güçlü öğretmen stratejisi pedagojik çeviridir: sohbet robotu geri bildirimini olduğu gibi aktarmak yerine seçmek, düzeltmek, tamamlamak, özetlemek ya da silmek.

Bundan iki tasarım uyarısı çıkar ve ikisi de alışılmış yol haritasıyla çelişir. Daha fazla YZ bilgisi daha iyi değildir: sürekli tanı yayan sistemler öğretmenleri aşırı yükledi ve dikkati kendi gözlemlerinden uzaklaştırdı. Üzerinde eyleme geçmeye değer olanı öne çıkarın, yorumlanabilir kılın ve önerileri bir öğretmenin kabul edebileceği, değiştirebileceği, erteleyebileceği ya da reddedebileceği bir biçimde sunun. Daha fazla öğretmen desteği de daha iyi değildir: öğrenciler bağımsız çalışabilsin diye müdahaleyi geciktirmek kendisi bir uzmanlıktır. Yapısal koşullar, yani veriyi gözden geçirecek zaman, sınıf mevcudu ve yardıma ihtiyaç duyan gruplara fiziksel olarak ulaşabilme, arka plan lojistiği değil müdahalenin parçasıdır. Boş dersi olmayan bir öğretmen için kurulmuş bir pano açılmaz.

## Birinci durum: doğrulamanın ucuz olduğu bir kalkülüs eğitmeni

Birinci sınıf üniversite kalkülüs eğitmeni, doğru tamamlanan problem sayısını en üst düzeye çıkarmayı değil, kaldırıldıktan sonra öğrencilerin bağımsız olarak çözebildiği ve açıklayabildiği şeyi yükseltmelidir. Matematik özel dersi aşırı iskele kurmaya, erken ipucu kullanımına ve öğrenci akıl yürütmesinin hatalı tanılanmasına özellikle açıktır ve üçü de bakarsanız kayıtlarınızda görünür ([[math-education|matematik eğitimi]]).

**Dayandırma ve doğrulama.** Altı katmanlı bir yapı: ders materyalleri ve eğitmen politikaları, ardından bir geri getirme katmanı, ardından sembolik bir doğrulayıcı ve tanı motoruyla birlikte bir problem motoru ve öğrenen modeli, ardından bir pedagojik politika katmanı, ardından konuşma üretimi, ardından öğrenci ve yeniden öğrenen modeline. Bu tasarımı yönetilebilir kılan şey doğrulayıcıdır. Bir ifadenin denk olup olmadığına, bir türevin doğru olup olmadığına, bir integralin hesaplanıp hesaplanmadığına, bir kritik noktanın bulunup bulunmadığına karar verir ve bunu modelin görüşünü sormadan yapar.

**Tek bir etkileşim.** $f(x)=(x^2+1)\sin x$ fonksiyonunun türevini almak için geleneksel bir sohbet robotu cevabı açıklar. Öğrenmeye yönelik bir eğitmen içsel olarak, öğrencinin iki bileşenin de türevini aldığını ama sonuçları çarptığını, yani çarpım kuralını $f'g'$ olarak uygulama gibi olası bir [[misconceptions|yanlış anlama]] olduğunu akıl yürütür ve önce tanısal bir soru sorar: iki fonksiyon çarpıldığında hangi kural uygulanır? Sonra öğrenci çarpım kuralını sembolik olarak yazar, $u$ ve $v$'yi kurar ve ancak bundan sonra eğitmen nihai ifadeyi doğrular. Özel dersin ne kadarının öğrenciye herhangi bir model metni ulaşmadan önce gerçekleştiğine dikkat edin.

**Çoklu temsiller.** Sembolik prosedürleri formüle, grafiğe, tabloya, sözel bir yoruma ve fiziksel bir değişim oranı bağlamına bağlayın. Prosedürel akıcılık ile kavramsal anlayış doğru bir cevap kâğıdında aynı görünür ve transfer probleminde ayrışır.

**Pano.** Opak yargıların yerine toplulaştırılmış kanıtı görünür kılın: "çarpım kuralı, %62 gösterilmiş ustalık; yaygın desenler, %18 bir terimi atlıyor, %11 türevleri çarpıyor." Bireysel tanılar, destekleyici kanıtlarıyla birlikte hipotez olarak gönderilir; onları bir öğretmen için gözden geçirilebilir kılan da budur (burada [[explainable-ai|açıklanabilirlik]] öğrenciden çok öğretmen için önemlidir).

**Değerlendirme planı.** Eğitmenle performans, onsuz benzer problemlerde performans, gecikmeli kalıcılık, tanıdık olmayan problemlere transfer, kavramsal açıklamanın kalitesi, yanlış anlamanın düzeltilmesi, erken [[help-seeking|yardım aramaya]] karşı uygun yardım arama, cevap sızması, tanısal yanlış pozitif ve yanlış negatif oranları ve farklı sonuçlar. Projeye karar veren karşılaştırma, destekli performansın sonraki desteksiz performansa oranıdır. Eğitmenle %60'tan %95'e çıkıp tek başına %60'ta kalan bir öğrenci özel ders almamıştır.

## İkinci durum: izni aşama belirler

Yazmanın tek bir doğru cevabı yoktur, dolayısıyla doğrulama bir yargıdır ve tasarım işi aşamalandırmaya kayar. Bilgi tabanı yazmayı bilişsel, toplumsal ve retorik bir süreç olarak çerçeveler; bu da bir YZ yazma sisteminin öğrenmeyi destekleyebileceği ve aynı zamanda ödevin geliştirmek için var olduğu düşünmeyi tam olarak ortadan kaldırabileceği anlamına gelir ([[writing-education|yazma eğitimi]], [[coach-not-crutch-ai-writing|Koltuk Değneği Değil Koç]]).

**Bir yetenek modeli.** Savunmayı (tez belirginliği, iddia-kanıt uyumu, karşı argüman), düzenlemeyi (paragraf odağı, mantıksal ilerleme, geçişler), kanıtı (kaynak ilgililiği, bütünleştirme, yorumlama), revizyonu (bütünsel ve cümle düzeyinde revizyon, geri bildirimin değerlendirilmesi) ve üslubu (açıklık, dilbilgisi, ses) izleyin. Her biri öğrenen modelinde ayrı bir sinyal olur; hedefli geri bildirimi olanaklı kılan da budur.

**Koçu ödeve dayandırın.** Yönergeleri, eğitmenin değerlendirme ölçütlerini, ders okumalarını, atıf koşullarını, tür kurallarını, eğitmenin örneklerini ve YZ kullanım politikasını geri getirin; böylece geri bildirim genel geçer beklentiler uydurmak yerine "eğitmeninizin değerlendirme ölçütü her ana iddiayı en az iki ders okumasından kanıta bağlamanızı istiyor" diyebilir. Genel geçer tavsiye, dayandırılmamış bir yazma aracının varsayılan hatasıdır ve öğrenciler bunu iki oturum içinde anlar.

**İzinleri aşama bazında belirleyin.** YZ'nin farklı aşamalardaki varlığı algılanan sahipliği farklı biçimde etkiler. Planlama desteği sahipliği taslak desteğinden daha az düşürür ve YZ tarafından üretilen taslak en büyük düşüşü yaratır ([[ai-writing-support-stage-ownership-2026|Planlamadan Revizyona]]). Bu bulgu doğrudan bir izin tablosuna dönüşür. Planlamada koç sorular sorar, konumları karşılaştırır, varsayımlara meydan okur ve taslakları eleştirir; savunmayı üretmez. Taslakta öğrenci metni önce üretir, koç devralmak yerine geliştirir. Revizyonda koç tanılar ve orada durur: belirsiz iddialar, eksik kanıt, iddiayı desteklemeyen kanıt, düzenleme sorunları, taslağın ölçütlere göre durumu. Düzenlemede, revizyondan sonra, dilbilgisi, noktalama, kısalık ve atıf biçimlendirmesiyle ilgilenir.

**Çözülmüş bir etkileşim.** [[online-teaching-and-learning|çevrim içi derslerin]] zorunlu olması üzerine bir deneme için genel bir sistem öğrencinin paragrafını cilalı bir metne dönüştürür ve entelektüel işi yapar. Bir koç neyin iyi çalıştığını söyler, ana sorunu adlandırır (paragraf gerekçeler veriyor ama bunların neden üniversite çapında bir zorunluluğu haklı çıkardığını hiç açıklamıyor), bir revizyon sorusu ortaya koyar ve öğrenciden bir cümleyi kendi sözcükleriyle tamamlamasını ister. Savunma ait olduğu yerde kalır.

**Önceliklendirilmiş geri bildirim.** Korunacak bir güçlü yön, yüksek etkili bir sorun, yazarın yargısını gerektiren bir soru, somut bir revizyon hedefi. Kırk yorum değil. Kırk yorum alan bir öğrenci onları uzunluklarına göre ayıklar ve bu ayıklamanın önemli olanla hiçbir ilgisi yoktur.

**Öğrenciye geri bildirimi yargılatın.** [[feedback-literacy|Geri bildirim okuryazarlığı]] başlı başına bir öğrenme hedefidir. Düzenli olarak öğrenenin bir öneriye katılıp katılmadığını ve nedenini sorun ve reddetmesine izin verin. Çıktı uyum değil [[evaluative-judgment|değerlendirici yargıdır]] ve kendinden emin biçimde yanılan bir koça karşı tek savunma da budur.

**Sesi koruyun.** Hataları, açıklık sorunlarını, retorik tercihleri ve üslup tercihlerini birbirinden ayırın ve son ikisine dokunmayın. Retorik tercihleri "düzelten" bir koç, yazmayı modelin tercih ettiği üsluba doğru tek tipleştirir ve en çok [[multilingual-learning|çok dilli]] yazarlara ve standart dışı retorik geleneklerine zarar verir ([[ai-feedback-quality|YZ geri bildirim kalitesi]] bu sorunun genel versiyonudur).

**Revizyonlardan öğrenin.** Yalnızca nihai denemeleri değil revizyon geçmişini saklayın. Üç deneme boyunca iyileşen, yinelenen bir "kanıt getirildi ama yorumlanmadı" deseni bir yazma sisteminin sahip olabileceği en yararlı sinyaldir ve bedavadır.

**Değerlendirme.** YZ destekli ve sonraki desteksiz yazmanın kalitesi, tanıdık olmayan bir metinde zayıflıkları bulma becerisi, revizyon kalitesi, geri bildirim kullanımı, revizyonları açıklayabilme, sahiplik, YZ metnine bağımlılık, sesin korunması, lehçeler ve çok dilli yazarlar arasında önyargı, eğitmen yargısıyla uyum ve gecikmeli transfer. Buna yanıt veren tasarımın üç kolu vardır: bağımsız yazma, metni YZ'nin üretmesi ve bir koç. Üç grup da sonra YZ olmadan yeni bir deneme yazar. YZ tarafından üretilen grup uygulamada kazanıp onsuz kaybediyorsa, sistem öğrenmeyi değil performansı iyileştirmiştir. Panodan gelen sınıf düzeyindeki desenler (%41'in iddia-kanıt bağlantısında desteğe ihtiyacı var) eğitmen için bir [[formative-assessment|biçimlendirici değerlendirme]] sinyalidir.

## İki tasarımı karşılaştırmak

| Tasarım sorusu | Kalkülüs eğitmeni | Yazma koçu |
|---|---|---|
| Birincil öğrenme nesnesi | Matematiksel kavramlar ve problem çözme | Argümantasyon ve yazma süreci |
| Doğrulama | Çoğu zaman nesnel olarak kontrol edilebilir | Genellikle bağlamsal yargı gerektirir |
| Deterministik araçlar | Sembolik matematik motoru, hesap makinesi | Dilbilgisi, atıf, ölçüt kontrolleri |
| Ana YZ rolü | Akıl yürütmeyi tanılamak ve iskele kurmak | Revizyonu tanılamak ve iskele kurmak |
| Başlıca risk | Çözümü ele vermek | Metni öğrenenin yerine yazmak |
| Önemli olan öğrenen eylemi | Çözmek ve açıklamak | Taslak yazmak, değerlendirmek ve revize etmek |
| Öğrenen modeli | Kavramlar, prosedürler, yanlış anlamalar | Savunma, kanıt, düzenleme, revizyon |
| Kilit koruma kalkanı | Çözümden önce deneme | YZ yeniden yazımından önce öğrenci metni |
| Transfer testi | YZ'siz yeni kalkülüs problemleri | YZ'siz yeni yazma görevi |
| Başarı ölçütü | Bağımsız matematiksel akıl yürütme | Bağımsız yazma ve değerlendirici yargı |

İki sistem de aynı [[ai-technologies|YZ teknolojileri]] kümesini kullanır ve farklı pedagojik politikaları somutlaştırır, çünkü disiplinler farklı türde düşünme gerektirir. Genellenebilir kural şudur: öğrenmeyi üreten bilişsel etkinliği belirleyin ve YZ'yi o etkinliği yerine getirmeden destekleyecek biçimde tasarlayın. Bu kural, herhangi bir modelden, prompttan, ajan çerçevesinden ya da arayüzden üstündür.

## Geliştirme ekiplerinin yanlış yaptıkları

Pedagoji sistem promptunda yaşar, dolayısıyla dikkatli bir prompt pedagojik bir tasarımdır. Bir prompt, aynı zamanda hangi kanıtı topladığınızı, arayüzün hangi basamağı sunduğunu, doğrulayıcının neyi kontrol ettiğini ve panonun ne gösterdiğini içeren bir politikanın tek katmanıdır. Hiçbir şey saklamayan bir öğrenen modelinin üzerine yazılmış iyi bir prompt, öğrenciye dair hiçbir hatırası olmayan akıcı bir eğitmen üretir ve merdiven her oturumda baştan başlar.

Daha iyi bir model tanıyı düzeltecektir. Yukarıdaki kıyaslama sonucu, LLM eğitmenlerinin doğru akıl yürütmeyi tanırken geçerli alternatifleri reddettiğini ve hatalıları kabul ettiğini buldu; bu, ölçeğin belirgin biçimde onarmadığı bir hata desenidir. Yapılandırılmış tanı, modelin yargısının denetleyemediğiniz kısım olması yüzünden vardır.

Memnuniyet ve tamamlama tasarımın işe yaradığını kanıtlar. Öğrencilerin yardım aldığını kanıtlar. 38 programlama öğrencisiyle yapılan pilot, algılanan öğrenmenin kullanımla güçlü biçimde ilişkili olduğunu, özerk ilerlemenin ise en düşük puanı aldığını buldu; ustalık çalışması ise seri koşulunun platform ustalığını yükseltip gecikmeli testte kazanç sağlamadığını gösterdi. Geri çekme ölçümünü pilota dahil edin, yoksa yanlış dersi verimli biçimde öğrenirsiniz.

Geri getirme cevapları güvenilir kılar. [[hallucination-risk|Halüsinasyon riskini]] azaltır ve hata yüzeyinin geri kalanını el değmeden bırakır: geri getirilen bir pasaj yanlış okunabilir, geçerli bir teknik ders için yanlış olabilir ve model kendi türettiği bir adımda hâlâ kendinden emin biçimde yanılıyor olabilir. Geri getirme bir tabandır.

Güvenlik paketini geçmek öğrenciler için güvenli olduğu anlamına gelir. Sıradan güvenlik testi toksisiteyi ve jailbreak'leri kapsar. Burada önemli olan pedagojik hatalar, yani cevap sızması, yaltaklanma ve sürüklenme, ona görünmez ve tek bir turda değil bir konuşma boyunca birikir.

Katılım hedeftir. Konuşma uzunluğu ve oturum sayısı ölçümlenmesi en ucuz metriklerdir, bu yüzden hedefe terfi ettirilirler. [[scaffolding|İskele]] argümanı, ideal oturumun öğrenci geliştikçe kısaldığını söyler, dolayısıyla katılımdaki bir artış da pekâlâ bir belirti olabilir.

## Size geri dönecek olanlar

**"Altı hafta içinde sevk ediyoruz ve bu çeyrek dönemlik bir iş."** Mimarinin çoğu ucuzdur. Bir deneme kapısı, yapılandırılmış bir merdiven, zaten elinizde olan notlar üzerinde geri getirme ve geri çekme alanı olan bir kayıt şeması birkaç günlük iştir. Pahalı kalemler (öğrenen modeli, doğrulayıcı, pano) tek bir ders için bir özellik bayrağının arkasında başlayabilir ve pilot, ucuz kısımlar yapılmışken daha bilgilendirici olur.

**"Öğrenciler bayılıyor ve tamamlama arttı."** İki olgu da soruları iyi yanıtlayıp hiçbir şey öğretmeyen bir sistemle tutarlıdır. 6.000 öğrencilik çalışma daha yavaş ilerleme ve daha az denenmiş soruyla birlikte daha iyi doğruluk buldu, yani tamamlamadaki bir düşüş de otomatik olarak kötü haber değildir. Desteksiz performansı katılım sayılarının yanında raporlayın ve ikisinin açıkça çelişmesine izin verin.

**"Randomize bir deney yürütemeyiz."** Randomize deney olmadan da öğrenci içi bir karşılaştırma yürütebilirsiniz: aynı hedef, ünite boyunca destekli, iki hafta sonra desteksiz test edilir ve destekli puan onun yanında raporlanır. Bu tasarım ürün sorusunu yanıtlar ve kontrol kolu gerektirmez. Size söyleyemeyeceği şey, eğitmeni hiç kullanmayan öğrenciler için karşı olgudur.

**"Model bir satıcı API'si, dolayısıyla yardım davranışı bizim elimizde değil."** Basamaklar sizin orkestrasyon katmanınızda yaşar ve koruma kalkanı deneyinin sonucu modelleri değiştirmekten değil, eğitmenin ne söylemesine izin verildiğini değiştirmekten geldi. Satıcının eğitim sonrası çalışmasının hızlı yanıtlamaya çekeceğini bekleyin, çünkü ayarlandığı şey yardımseverliktir, ve kısıtlamayı kendi kodunuza koyun.

**"Öğretmenler bir pano daha kullanmaz."** Sürekli tanı yayan bir panoyu kullanmazlar; K-12 derlemesi bunun dikkati kendi gözlemlerinden uzaklaştırdığını buldu. Onlara az sayıda yorumlanabilir sinyal, her öneriyi kabul etme ya da reddetme yolu ve hafta içinde bunlara bakacak zaman verin.

**"Kadromuzda disiplin uzmanı yok."** O zaman eğitmen genel geçer yöntem öğretir ve dersin gösterimi bir dönem içinde kayar. Tasarım aşamasında iki günlüğüne bir konu uzmanı, yanlış anlama listesini ve onaylı yöntem listesini yazmak için, projenin en ucuz kalemidir ve ekiplerin ilk kestiği kalemdir.

## Bu hafta yapılacaklar

**1.** Pilot için desteksiz performans cümlesini yazın ve özellik listesinin üstüne, şartnameye koyun.

**2.** Bir deneme kapısı ekleyin ve onu kaydedin. Öğrencinin ilk ipucundan önce deneyip denemediğini ve hangi basamağa ulaştığını kaydedin.

**3.** İpucu düğmesini tıkanma noktası sorusuyla değiştirin ve yanıtı bir kategori olarak kaydedin.

**4.** Üniteden iki hafta sonra bir desteksiz kontrol planlayın ve bir sahibiyle birlikte takvime koyun.

**5.** Yanlış anlama listesini ve onaylı yöntem listesini yazmak için bir branş öğretmeniyle iki gün ayırın.

## Nereye gidilecek

[[designing-educational-ai-software|Eğitimsel YZ yazılımı tasarlamak]], bir eğitmenin karşılaması gereken yazılım düzeyindeki kuralları kapsar; [[designing-ai-into-learning|YZ'yi öğrenmenin içine tasarlamak]] ise eğitmenin bir ders dizisinde nerede durduğunu. [[evaluating-ai-interventions-methods|YZ müdahalelerini değerlendirme yöntemleri]] ve [[checking-whether-educational-ai-works|eğitimsel YZ'nin işe yarayıp yaramadığını kontrol etmek]], işin işe yarayıp yaramadığıyla ilgilenir. Sorununuz modelin fazla kolay cevap vermesi ise, [[making-ai-better-at-supporting-learning|YZ'yi öğrenmeyi desteklemede daha iyi kılmak]] ve [[training-ai-tutors-to-guide-rather-than-answer|YZ eğitmenlerini cevap vermek yerine yönlendirmeye eğitmek]], aynı sorunun eğitim tarafını işler.
