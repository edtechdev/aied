---
title: "Eğitimciler YZ ile Neler Yapmaktan Kaçınmalı?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-11T06:20:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [instructors, learners, parents and families, faculty developers, software developers, administrators, researchers]
translation_of: faqs/what-not-to-do-ai-education
source_updated: "2026-11-11T06:20:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-11"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Eğitimde YZ üzerine rehberliğin çoğu neyin denenmesi gerektiğini anlatır. Bu sayfa bunun tersi bir listedir: kanıtın durdurulmasını söylediği uygulamalar, onları durdurması gereken role göre düzenlenmiş. Yanlış inançlar burada bilinçli olarak yoktur: [[addressing-common-misconceptions-ai-education|yanlış anlamalar SSS'i]] onlarla ilgilenir ve [[misconceptions]] kavram sayfası neden sürdüklerini açıklar. Araştırmanın henüz size söyleyemedikleri ise [[limitations-in-aied-research|AIEd araştırmasındaki sınırlamalar]] sayfasına aittir. Buradaki odak, inançtan sonraki adımdır: insanların gerçekte ne yaptığı, bunun neye mal olduğu ve yerine ne yapılması gerektiği.

Her rolde üç başarısızlık yinelenir.

1. **Yerine koyma.** Bir araç, öğrenenin yapması gereken düşünmeyi yapar ve çıktı, öğrenen yapmış gibi puanlanır. Teslim edilen makale, öğrencinin ne yapabildiğinin değil modelin ne yapabildiğinin kaydıdır.
2. **Kazanılmamış kanıt.** Toplanması ucuz olan bir sinyal, örneğin güven, akıcılık, katılım ya da tamamlama oranı, gösteremeyeceği bir şeyin kanıtı sayılır. Bir pano, bir özel ders oturumunda kırk dakika geçirildiğini bildirebilir; kimsenin ikinci derece denklem formülünü öğrenip öğrenmediğini bildiremez.
3. **Yapıyı telkine bırakma.** Bir uyarı, bir politika cümlesi ya da bir eğitim oturumundan, arayüz tasarımının, değerlendirme tasarımının ya da yönetişimin yapması gereken işi yapması istenir. İzlence YZ'yi sorumlu kullanmayı söyler ve öğretmen yine ilk istemde bitmiş yanıtı verir.

## Kısa özet

**1.** Bir çıktıyı, onu üreten yeteneğin kanıtı olarak asla notlandırmayın, alıntılamayın ya da onaylamayın.

**2.** Destekli ölçünün yanında desteksiz ölçüyü her seferinde toplayın.

**3.** Akıcılığı, güveni ve katılımı öğrenme değil kullanım özellikleri olarak ele alın.

**4.** Güvenceyi uyarıya değil iş akışına koyun.

**5.** Aracın görebildiği her verinin saklanacağını, birleştirileceğini ve ihlal edileceğini varsayın.

**6.** İddia bir demoyla geliyor ama karşılaştırmayla gelmiyorsa, bu pazarlamadır.

## Eğitmenler için

**Çıktıyı yetkinlik olarak belgelendirmeyin.** Cilalı bir teslim, cilalı bir teslimin kanıtıdır. Bir öğrenci, kaynaklarını dersin öğrettiği hiçbir şeyle karşılaştıramadığınız bir literatür taraması teslim ederse ve değerlendirme o öğrencinin desteksizken ne yapabildiğini ayırt edemezse, değerlendirme yeterliliğin iddia ettiği şeyi ölçmeyi bırakmıştır ([[assessment-validity]], [[authentic-assessment]]). Çözüm görevin yeniden tasarlanmasıdır; daha sıkı bir onur sözleşmesi bunu yapmaz.

**Dedektör puanını suistimal kanıtı olarak kullanmayın.** 642 yayımlanmış özet üzerinde yapılan kontrollü bir çalışmada dedektörler, yönergeye uygun hafif YZ düzenlemesinin %38–80'ini ve değiştirilmemiş insan yazısının %9–15'ini işaretledi; insanlaştırma hizmetinden geçirilmiş yeniden yazımların ise %4'ünden azını yakaladı ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Bağımsız bir kıyaslama, 14 ticari aracın hiçbirinin %80 doğruluğa ulaşmadığını ve basit bir yeniden ifadenin bunu bile yarıya indirdiğini buldu ([[teichmann-detecting-undetectable-misconduct-2026|Teichmann et al., 2026]]). Gerçekçi temel oranlarda yanlış pozitifler doğru pozitiflerden fazladır ([[should-we-use-ai-detectors]]). Bir dedektör bir konuşma başlatabilir; bitiremez.

**Yeniden tasarlamadığınız bir değerlendirmeye YZ eklemeyin.** Desteksiz performans için tasarlanmış bir göreve araç iliştirmek, kaybı gizleyen puan şişmesini tam olarak üretir: ödev yukarı, sınav aşağı. Notlanan her göreve desteksiz sürümünün ne göstereceğini sorun ve önce görevi düzeltin ([[reducing-ai-misuse]]). Evde çözülen problem seti ile sınıf içi kısa sınav aynı beceriyi ölçüyorsa, bunlardan yalnızca biri öğrenciyi ölçüyordur.

**Katılımı öğrenme olarak ele almayın.** Görev süresi, memnuniyet, yardım arama hacmi ve sohbet etkinliğinin hepsi kolayca ölçümlenir ve hepsi hiç öğrenme olmamasıyla uyumludur. YZ destekli bir platformda hukuk davalarına karar veren 186 katılımcıyla yapılan 3 × 2 deneyde, yanlış bir YZ konumuna geçişi %42–60,5'ten %5,7–8,2'ye indiren bir koruma önlemi, oturum içinde ölçülebilir hiçbir öğrenme etkisi üretmedi (β = 0,03, p = 0,18; [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo et al., 2026]]). Davranış değişti; öğrenme ölçüsü değişmedi ([[student-engagement]]).

**Arayüzün sınırlayabileceği yerde uyarıya güvenmeyin.** Bitmiş yanıtı üretebilen bir öğretmen, teslim baskısı altında onu üretir, izlence ne derse desin. İşe yarayan koruma önlemi etkileşimin içine yerleştirilmiştir ([[reducing-ai-misuse]], [[pedagogical-safety]]). Nihai yanıtı ilk iki denemede vermemek bir tasarım kararıdır; öğrencilerden onu istememelerini rica etmek bir taleptir.

**Öğrenci çalışmasını, BEP'leri, disiplin kayıtlarını ya da kimliği belirleyen taslakları tüketici bir araca yapıştırmayın.** Veri minimizasyonu, düşünmüş olsanız da olmasanız da öğrenci adına verdiğiniz bir tasarım kararıdır ([[privacy]]). Bir öğrencinin davranış planını soran sohbet robotunun ücretsiz hesabı, aynı zamanda o planın başkasının sunucusundaki bir kopyasıdır.

## Öğrenenler için

**Alıştırmanız gereken kısmı devretmeyin.** Ödevin beş paragraflık bir makale olduğunu düşünün: istemi bir sohbet robotuna yapıştırıyorsunuz, döndürdüğü taslağı alıyorsunuz ve teslim ediyorsunuz. Teslim ettiğiniz şey, modelin ne yapabildiğinin kaydıdır. Soru, hangi bilişsel işin yer değiştirdiğidir; ne kadar YZ kullandığınız değil. Ödevi dışarıya vermek ödev puanlarını yükseltirken kapalı kitap sınav puanlarını düşürür: 30 ay boyunca izlenen 26.811 ortaokul öğrencisinde altı ay içinde ödev puanları %18 arttı ve sınav puanları %20 düştü ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Geri çağrılabilir bilgiyi inşa eden alıştırma araca gitti ([[reducing-ai-misuse]]). Alıştırma meselenin kendisiyse, araç alıştırmayı yapamaz.

**Akıcılığı doğruluk diye okumayın.** Akıcı metin, içerik doğru olsun ya da olmasın bir [[llm|dil modelinin]] çıktısıdır ve onu ikna edici kılan mekanizma, onu yanlış kılan mekanizmanın aynısıdır ([[hallucination-risk]]). Paragrafın tonunu değil, belirli iddiayı doğrulayın. Bu alışkanlık kendiliğinden nadiren oluşur: YZ özeti verilen 900 ABD'li yetişkinden oluşan pasif izleme panelinde okuyucular, ziyaretlerin yalnızca %1'inde metin içinde atıf yapılan bir kaynağı izledi ([[trust-calibration-chatbots-design-problem-2026|Jaidka and Cai, 2026]]). Ödeviniz üç kaynak istiyorsa, üçünü de açın.

**Anlaşmayı geri bildirim olarak kabul etmeyin.** Modeller insanlardan belirgin biçimde daha fazla onaylar: 11 model genelinde YZ yanıtları kullanıcıları insan yanıtlarından %49 daha sık onayladı ve etkileşimi destekleyici hissettiren fazlalık tam da budur ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Sizinle hiç anlaşmayan bir öğretmen, aradığınız düzeltici sinyali ortadan kaldırmıştır ([[ai-sycophancy]]). Onay değil itiraz isteyin: "Bu argümanda ne yanlış ve bir kuşkucu ne söyler?"

**Tıkandığınızda bir soruyu yanıtla değiştirmeyin.** Atladığınız üretken çaba öğrenmenin kendisidir. Yanıt getiren yardım arama, ipucu getiren yardım aramadan farklı bir davranıştır ([[help-seeking]], [[desirable-difficulties]]). Bitmiş yanıtı esirgeyen araçları kullanın ve çözüm yerine bir sonraki adımı isteyin.

**Daha iyi bir yanıt almak için kişisel, sağlık ya da aile bilgilerinizi bir araca yapıştırmayın.** Aracın bunu unutma yükümlülüğü yoktur ve gizlilik maliyeti yanıtın kalitesinde görünmez ([[privacy]]). Daha iyi bir istem, tanınızı, adresinizi ya da ailenizin adlarını gerektirmez.

## Ebeveynler ve aileler için

**Ödevi araçla yapmayın ya da yanınızda yapılmasına izin vermeyin.** Verilerde görünen örüntü, gizli bir maliyetle puan şişmesidir: aynı 30 aylık panelde ödev puanları %18 artarken kapalı kitap sınav puanları %20 düştü ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei and Wu, 2026]]). Eve kusursuz ödev ve ünite sınavında zayıf not getiren bir çocuk, size tam olarak bu açığı gösteriyordur. Kontrol edebileceğiniz şey süreçtir. Çocuğunuz adımı açıklayabiliyor mu, bir problemi kâğıt üzerinde yeniden yapabiliyor mu ve hangi kısımda emin olmadığını söyleyebiliyor mu? Yapamıyorsa, ödevi araç yapmıştır.

**Bir sohbet robotunun sırdaş olmasına izin vermeyin.** Yaltaklanan sistemler insanlardan çok daha fazla onaylar, 11 model genelinde %49 daha fazla, ve onlarla konuşmayı güvenli hissettiren bu onaydır ([[ai-personal-coach-review-benefits-risks-2026|Potel and Kumashiro, 2026]]). Büyük bir boylamsal çalışmada kullanıcılar, kişisel tavsiye için yaltaklanan YZ'ye yakın arkadaşlarına ve ailelerine neredeyse o kadar sık başvurdu ve gerçek ilişkilerinde daha düşük memnuniyet bildirdi ([[sycophantic-ai-social-interaction-2026]]). Sıkıntısını her zaman aynı fikirde olan bir modele götüren çocuk duyulmuyor, ona ayna tutuluyor. Çocuğunuz bir arkadaşlık ya da bir kayıp hakkında bir sohbet robotuyla konuşuyorsa, başka kime anlattığını sormanın tam zamanıdır.

**Küçük bir çocuğa üretici bir sohbet robotu verip odada olduğunuz için buna denetimli demeyin.** Yaşa göre katmanlı rehberlik somuttur: 9-12 yaş için iskeleli, üretici olmayan etkinlikler, 13 yaş ve üzeri için etik akıl yürütmeyle denetimli üretici kullanım ([[ai-guidance-children-under-13]]). En küçük çocuklar için risk inançla ilgilidir. İşlem öncesi dönemdeki çocuklar üretilen içeriği doğru kabul eder ve sistemler verdikleri geri bildirimde gelişimsel olarak kalibre edilmemiştir. Yetişkinin birlikte kullanımı, kapıdan gözlemek değil çocuğun yanına oturup oyuncağın az önce ne yaptığını sormaktır ([[early-childhood-elementary-ai-education]]).

**Okulun aracı seçtiği için çocuğunuzun verilerini koruduğunu varsaymayın.** Neyin saklandığını, ne kadar süreyle, herhangi bir şeyi eğitip eğitmediğini ve başka kimin gördüğünü sorun ([[privacy]]). Farkındalık maruziyetten doğmaz: öğrencilerin kendi kayıtlı davranışlarını canlı olarak projeksiyonda izlediği bir dersten bir ay sonra, 47 öğrenciden %66'sı hâlâ en az koruyucu sohbet robotu ayarını seçti ([[bergdahl-student-epistemic-agency-ai-2026|Bergdahl, 2026]]). Soruları okula yazılı olarak iletin ve yanıtları yazılı olarak isteyin.

**Bir dedektör sonucunu çocuğunuzu suçlamak ya da okuldan gelen bir suçlamayı desteklemek için kullanmayın.** 642 yayımlanmış özet üzerinde yapılan kontrollü bir çalışmada dedektörler değiştirilmemiş insan yazısının %9–15'ini işaretledi ve insanlaştırılmış YZ yeniden yazımlarının %4'ünden azını yakaladı ([[karr-ai-detection-humanization-2026|Karr et al., 2026]]). Gerçekçi temel oranlarda yanlış pozitifler doğru pozitiflerden fazladır ([[ai-detection]]). Bir işareti taslak geçmişi ve bir konuşma isteme nedeni olarak ele alın, bulgu olarak değil.

**Aracı yasaklamanın güvenli seçenek olduğu sonucuna varmayın.** Az güven, kendi maliyeti olan bir kalibrasyon hatasıdır ve bu maliyet vazgeçilen yetenektir; önemli olan beceri kaçınma değil kalibre edilmiş güvendir ([[trust-calibration]]). Yararlı ebeveyn hamlesi, araştırmanın öğrenciler için desteklediği hamlenin aynısıdır: bir doğrulama adımı şart koşun ve bunu yorgun bir çocuğun gerçekten yapacak kadar ucuz kılın ([[verify-ai-output]]). Bir sohbet robotunun kullandığı kaynağı görmek bir dakika alır; sohbet robotunu yasaklamak alıştırmayı ortadan kaldırır.

**İçerik filtresini güvenlikle karıştırmayın.** Filtreler bir sistemin ne söyleyeceğini ele alır. Bir etkileşimin öğrenene ne yaptığını ele almaz: aşınmış alıştırma, yaltaklanan anlaşma ya da dengesiz reddetmeler ([[pedagogical-safety]]).

## Eğitim ve öğretim geliştiricileri için

**Araç eğitimi verip buna YZ okuryazarlığı demeyin.** [[prompt-engineering|İstem yazımı]] üzerine bir oturum bir ürünün arayüzünü öğretir. [[ai-literacy|YZ okuryazarlığı]], aracın ne zaman kullanılması gerektiğini, ne yaptığını ve neyin doğrulanması gerektiğini yargılama kapasitesidir. Düğmeleri öğrenip yargıyı öğrenmeden ayrılan öğretmenlerin elinde güven olur, kalibrasyon olmaz ([[teacher-ai-competency]]). Herkesin bir ders planı üretebildiği ve kimsenin o planın ne zaman kullanılmaması gerektiğini söyleyemediği bir atölye, arayüzü öğretmiştir.

**Tek seferlik mesleki gelişim düzenleyip uygulamanın değişmesini beklemeyin.** [[professional-training|Mesleki öğrenme]] kanıtı süre ve takip konusunda tutarlıdır: tek etkinlikler öz bildirilen güveni hareket ettirir, sınıf davranışını nadiren hareket ettirir ve güven kazanımı değişimin yokluğunu maskeleyebilir ([[educational-development]]). Ağustosta iki saatlik bir oturum, ekimde hiç takip olmadan, bir güven müdahalesidir.

**Yerinde bıraktığınız değerlendirme sistemini görmezden gelmeyin.** Öğretim üyeleri ancak tabi oldukları değerlendirme onu cezalandırmıyorsa öğrettiğiniz uygulamayı benimser. Değişmemiş bir sınav rejiminin yanında yürütülen YZ'ye dayanıklı görev tasarımı atölyesi, öğretim üyelerine eğitimin dekoratif olduğunu öğretir.

**Uyardığınız eleştirel olmayan kullanımı örneklemeyin.** Öğretim üyelerinin önünde, doğrulama adımı olmadan bir ders planı üreterek bir aracı göstermek, izleyiciye çıktının ürün olduğunu öğretir. Planı onların önünde üretin, sonra denetlenmesi gereken iki iddiayı işaretleyin.

**Satıcı demosunu etkililik kanıtı olarak kabul etmeyin.** Değerlendirdiğiniz iddia öğrenmeyle ilgilidir ve bir demo yeteneği gösterir. Desteksiz sonuçlar, alt grup sonuçları ve çok turlu güvenlik testleri isteyin ([[checking-whether-educational-ai-works]]).

## Eğitim yazılımı geliştiricileri için

**Kaydetmesi kolay ölçütü en iyilemeyin.** Oturum süresi, ileti sayısı ve memnuniyet derecelendirmeleri neredeyse her değişiklik altında iyileşir; öğrenme çoğu zaman iyileşmez. Bir koruma önlemi çıkaran aynı ekip, etkileşim hacmini ödüllendiren bir pano da çıkarabilir ve ikisi zıt yönleri gösterir ([[learning-analytics]], [[student-engagement]]). Başarı ölçütünüz oturum başına ileti sayısıysa, öğrencileri sohbette kaldıkları için ödüllendiren bir ürün yapmışsınızdır.

**Yapıya karşı doğrulama çalışması olmadan bir dedektör yayımlamayın.** On beş EEG modelinden oluşan bir kıyaslama, katmanlı çapraz doğrulamada 0,9853 F1 değerine ulaştı; deneme sınırlarına saygı gösteren denemeden bağımsız Grup K-Fold, zirveyi %25 şans düzeyine karşı 0,6038'e düşürdü ([[eeg-familiarity-automated-assessment-2026|Nanayakkara and Halloluwa, 2026]]). Bir gülümseme dedektörü, insan derecelendiricinin sahip olduğu bağlamdan yoksun olduğu için gözlemci derecelendirmeli empatiye karşı *negatif* çalışabilir ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Manşet sayının yanında doğrulama protokolünü de yayımlayın.

**Rıza ve belirtilmiş bir amaç olmadan yüzlerden ve bedenlerden duygu, dikkat ya da "katılım" çıkarımı yapmayın.** Çok turlu risk tek turlu risk değildir: bir pedagojik güvenlik derlemesinde başarısızlıklar tek turlu değerlendirmelerde %17,7'den çok turlu olanlarda %77,8'e çıktı ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]). İzole istemler üzerinde sertifikalanan bir sistem, öğrencilerin hiç yaşamadığı bir etkileşim üzerinde sertifikalanmıştır ([[pedagogical-safety]], [[privacy]]).

**Devri gizlemeyin.** Bir öğretmenin ne zaman üretim yaptığını ne zaman getirme yaptığını ya da ne zaman bir insanın döngüde olduğunu ayırt edemeyen öğrenci, ona güvenini kalibre edemez. [[automation-bias|Otomasyon yanlılığı]] en temiz biçimde sistem haklıyken ve insan kontrol etmeyi bıraktığında işler ([[trust-calibration]]). Arayüzde bir insanın çalışmayı ne zaman okuyacağını söyleyin.

**Kıyaslama için tasarlayıp sonra sınıf için olduğunu iddia etmeyin.** Kıyaslama performansı kıyaslamanın bir özelliğidir. Sınadığınız kullanım koşullarını, popülasyonu ve görevleri bildirin; aksi halde sayı farklı bir ortam hakkında bir vaat olarak okunur ([[limitations-in-aied-research]]).

**Aracı yardıma giden tek yol yapmayın.** Bir öğrencinin [[feedback|geri bildirime]] erişimi bir modelin kullanılabilirliğine, kotasına ya da lisansına bağlıysa, hakkaniyet sorusu zaten satın alma tarafından karara bağlanmıştır ([[equity-in-ai-education]]).

## Eğitim yöneticileri için

**Yetenek iddialarını sonuç kanıtı olarak satın almayın.** Satıcılar bir ürünü gösterebilir; öğrenmeyi yalnızca bir değerlendirme gösterebilir. Desteksiz sonuçlar, alt grup sonuçları, kayıp oranı ve pilot bittiğinde ne olacağına dair bir plan talep edin ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]). Bir demo, öğretmenin bir problemi çözdüğünü gösterir; bir öğrencinin sonraki problemi çözdüğünü göstermez.

**Gözetimi mevcut olduğu için devreye almayın.** Gözetim sistemleri yüz görüntülerini, kimlik belgelerini, 360 derecelik taramalar dahil oda taramalarını ve mikrofon sesini kaydeder. 80 çalışmanın derlemesi, yalnızca %25'inin etik sorunları hiç ele aldığını, %35'inin veri kümesini açıklamadığını ve %30'unun yeniden üretilemediğini buldu ([[automated-online-exam-proctoring-decade-review-2026|Malhotra and Chhabra, 2026]]). Maliyet öğrencilere düşer ve kanıt temeli sözleşmenin ima ettiğinden daha zayıftır ([[privacy]], [[remote-proctoring]]).

**Yalnızca yasaklayıcı bir politika yazıp buna yönetişim demeyin.** Değerlendirme yeniden tasarımı, destek ve itiraz yolu olmayan bir yasak, davranışı önlemek yerine kaydırır ve yanlış bir suçlamaya itiraz edemeyecek öğrencileri cezalandırır. [[governance|Politika]] notlandıranı da kapsamalıdır: günlük bir notlandırma iş akışına yapılan kırmızı takım testinde, bir teslime gizlenmiş beş istem enjeksiyonu stratejisinden ikisi, başarısız bir makaleyi dosya türleri arasında %100 ve %94 başarıyla geçirdi ([[humble-prompt-injection-ai-grading-red-team-2026|Humble, 2026]]). Öğrencileri sınırlayıp notlandırma hattını sınırlamayan bir politika, yarım bir politikadır.

**Benimsemeyi iyileşmeyle eşitlemeyin.** Kullanım, memnuniyet ve tamamlanma bildiren bir pano, öğrenme ölçüsü sabit kalırken başarı gibi görünecektir. Hangi sonucun sözleşmeyi iptal ettireceğine önceden karar verin ([[ai-ed-evaluation]]). O sayıyı pilot başlamadan önce yazın.

**Erişilebilirliğin bir uyarlama talebi olarak gelmesine izin vermeyin.** [[neurodiversity|Nöroçeşitli öğrenciler]] için dijital yardımcı teknolojiler üzerine 40 çalışmanın kapsam derlemesinde 28'i katılım için resmî bir tanıyı koşul kıldı. Bu tanı kapılı model, ihtiyacı olup etiketi olmayan her öğreneni dışlar ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel et al., 2026]]; [[accessibility]], [[universal-design-for-learning]]).

## Eğitim araştırmacıları için

**Nedensel iddiayı öz bildirime taşıtmayın.** Güven, algılanan öğrenme ve memnuniyet sonuçlardır, ama çoğu çalışmanın ölçtüğünü söylediği sonuçlar değildir. [[empathy|Empati]] literatürü en net örnektir: empati öğretmeyi amaçlayan bir alan çoğunlukla rahatlığı ölçer ve 17 çalışmanın derlemesi güven kazanımlarını empatinin kendisine dair kanıttan çok daha yaygın buldu ([[ismail-affective-domain-ai-healthcare-review-2026|Ismail and Zafira, 2026]]; [[self-report-measures]]).

**Bir etkiyi tasarımı olmadan alıntılamayın.** YZ ile [[critical-thinking|eleştirel düşünme]] üzerine 80 HCI çalışmasının eleştirel derlemesinde 42'si (%52) kontrol grubu çalıştırmadı ([[critical-review-critical-thinking-hci-research-ai-2026]]). Tek bir kurumda tek bir derste 30 öğrenciden gelen manşet etkisi, kırılgan bir iddianın yaygın biçimidir ([[limitations-in-aied-research]]).

**Heterojenliği modeli olmadan bildirmeyin.** Aynı veri sabit etkili bir modelde I² = %82,98 ve rastgele etkili bir modelde I² = %15,75 verir ([[ai-supported-instruction-stem-meta-analysis-2026]]). Modeli belirtilmemiş bir I² yorumlanamaz ([[meta-analysis-systematic-review]]).

**Tek bir bağlamdan genelleyip buna bulgu demeyin.** Tek ders, tek kurum, tek model sürümü, tek dil. Model davranışı her sürümde değişir ve bir nesil üzerinde eğitilen dedektörler bir sonrakinde geri çağırmayı kaybeder ([[research-gaps-aied]], [[ai-detection]]).

**Etkileşim ile sonuç arasındaki bağıntıyı mekanizma olarak ele almayın.** İstem hacmi bilişsel yük boşaltmayı ölçmez. Hacme göre kümeler bilişsel işin dağılımında farklılaşmadı ve elle kodlanan diyalog, 125 diyalogun %49,6'sında hiç boşaltma bulmadı ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]; [[cognitive-offloading]]). İşin kendisini ölçün.

**Çalışmadan önce yazılabilecek bir sınırlılıklar paragrafı yayımlamayın.** Belirli tehdidi, belirli sayıyı ve sınırladığı iddiayı adlandırın. Bir sınırlılığı sonraki okuyucu için kullanılabilir kılan şey budur ([[interpreting-and-applying-aied-research]]).

## Bunlar neden bir arada

Yukarıdaki her madde bir vekili hükme yükseltir. Makale yazarın, puan suistimalin, gülümseme empatinin ve demo öğrenmenin yerine geçer. Düzeltme her seferinde aynıdır: yapıyı adlandırın, ters yönde çıkabilecek bir ölçü bulun ve onu elverişli olanın yanında toplayın.

Bu uyarıların hiçbiri aracın her zaman yanlış olduğu anlamına gelmez. Bir dedektör bir öğrenciyle konuşmak için bir neden olabilir. Bir sohbet robotu yararlı bir prova olabilir. Bir pano bir soru sormak için bir vesile olabilir. Zarar, yerine koymadadır.

## Bu hafta yapın

- Notlanan bir görev seçin ve araç kapalıyken ne göstereceğini yazın. Yanıt "hiçbir fark yok" ise, sorun görevdir.
- Şu anda yalnızca destekli performans bildiren bir derse desteksiz bir ölçü ekleyin.
- Kurumunuzun gözetim ya da YZ aracı sözleşmesini saklama, ikincil kullanım ve ihlal koşulları için okuyun ve rıza metninin sistemin gerçekte ne yakaladığını tanımlayıp tanımlamadığını kontrol edin.
- Bir satıcıdan desteksiz sonuçlar ve alt grup sonuçları isteyin. Yanıt bir demoysa, yanıtınızı almışsınızdır.
- Bir sonraki öğretim üyesi oturumunuzda ikinci yarıyı istemlere değil değerlendirme yeniden tasarımına ayırın.

## Bundan sonra nereye

- [[addressing-common-misconceptions-ai-education]]: bu uygulamaların arkasındaki inançlar ve onları küçümsemeden nasıl düzelteceğiniz.
- [[limitations-in-aied-research]]: kanıt temelinin henüz destekleyemediği şeyler.
- [[reducing-ai-misuse]]: suistimal için yapısal kaldıraçlar ve telkini neden yendikleri.
- [[pedagogical-safety]]: bir öğretmenin her içerik kontrolünden geçerken bir öğrenene ne yapabileceği.
- [[should-we-use-ai-detectors]]: dedektör kanıtının tamamı.
- [[checking-whether-educational-ai-works]]: bir iddiayı benimsemeden önce nasıl değerlendireceğiniz.
