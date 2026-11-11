---
title: "Eğitimciler YZ ile Neler Yapmaktan Kaçınmalı?"
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: faq
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reducing-over-reliance, designing-educational-ai-software, ai-guidance-children-under-13, top-10-findings-ai-education-instructors]
weight: 90
foundations: [misconceptions, reducing-ai-misuse, ai-literacy, limitations-in-aied-research]
pedagogy: [reflection, professional-training]
technology: [generative-ai, learning-analytics, affective-computing]
assessment: [assessment-validity, ai-detection, self-report-measures, feedback]
ethics: [privacy, pedagogical-safety, equity-in-ai-education, accessibility, automation-bias]
audience: [learners, parents and families, instructors, faculty developers, software developers, administrators, researchers]
contributors: [editor]
source_updated: "2026-11-10T22:10:00-05:00"
translation_of: faqs/what-not-to-do-ai-education
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Eğitimde YZ üzerine rehberliğin çoğu neyin denenmesi gerektiği biçiminde yazılır. Bu sayfa diğer liste: kanıtın durdurulmasını söylediği uygulamalar, onları durdurması gereken role göre düzenlenmiş. Kasıtlı olarak bir yanlış inançlar listesi değil — [[addressing-common-misconceptions-ai-education|yanlış anlamalar SSS'i]] onlarla ilgilenir ve [[misconceptions]] kavram sayfası neden sürdüklerini açıklar — ve araştırmanın henüz size söyleyemediklerinin listesi de değil; onu [[limitations-in-aied-research|AIEd araştırmasındaki sınırlamalar]] kapsar. Buradaki odak, bir inançtan sonraki adım: insanların gerçekte ne yaptığı, bunun neye mal olduğu ve yerine ne yapılması gerektiği.

Her rolde üç başarısızlık yineleniyor. **Yerine koyma** — bir araç, öğrenenin yapması gereken düşünmeyi yerine getirir ve çıktı, öğrenen yapmış gibi puanlanır. **Kazanılmamış kanıt** — toplanması kolay bir sinyal (güven, akıcılık, katılım, tamamlama oranı) gösteremeyeceği bir şeyin kanıtı sayılır. **Yapıyı telkine bırakma** — bir uyarı, bir politika cümlesi ya da bir eğitim oturumundan, arayüz tasarımının, değerlendirme tasarımının ya da yönetişimin yapması gereken işi yapması istenir.

## Kısa özet

**1.** Bir çıktıyı, onu üreten yeteneğin kanıtı olarak asla notlandırmayın, alıntılamayın ya da onaylamayın.

**2.** Destekli ölçünün yanında desteksiz ölçüyü her seferinde toplayın.

**3.** Akıcılığı, güveni ve katılımı öğrenme değil kullanım özellikleri olarak ele alın.

**4.** Güvenceyi uyarıya değil iş akışına koyun.

**5.** Aracın görebildiği her verinin saklanacağını, birleştirileceğini ve ihlal edileceğini varsayın.

**6.** İddia bir demo ile geliyor ama karşılaştırma ile gelmiyorsa, bu pazarlamadır.

## Öğrenenler için

**Alıştırmanız gereken kısmı devretmeyin.** Ayrım YZ'yi ne kadar kullandığınız değil, hangi bilişsel işin yer değiştirdiğidir. Ödevi dışarıya vermek ödev puanlarını yükseltirken kapalı kitap sınav puanlarını düşürür — bir ortaokul çalışmasında %18 kazanıma karşı %20 kayıp — çünkü geri çağrılabilir bilgiyi inşa eden alıştırma araca gitmiştir ([[reducing-ai-misuse]]). Alıştırma meselenin kendisiyse, araç alıştırmayı yapamaz.

**Akıcılığı doğruluk diye okumayın.** Akıcı metin, içerik doğru olsun ya da olmasın bir dil modelinin çıktısıdır ve onu ikna edici kılan mekanizma, onu yanlış kılan mekanizmanın aynısıdır ([[hallucination-risk]]). Belirli iddiayı doğrulayın, paragrafın tonunu değil. Doğrulama alışkanlığı kendiliğinden nadiren oluşur: YZ özeti verilen 900 yetişkinden oluşan bir panelde, okuyucular ziyaretlerin %1'inde metin içinde atıf yapılan bir kaynağı izledi ([[trust-calibration]]).

**Anlaşmayı geri bildirim olarak kabul etmeyin.** Modeller insanlardan belirgin biçimde daha fazla onaylar — 11 model genelinde YZ yanıtları kullanıcıları insan yanıtlarından %49 daha sık onayladı — ve etkileşimi destekleyici hissettiren fazlalık tam da budur ([[ai-sycophancy]]). Sizinle hiç anlaşmayan bir öğretmen, aradığınız düzeltici sinyali ortadan kaldırmıştır. Onay değil itiraz isteyin.

**Tıkandığınızda bir soruyu yanıtla değiştirmeyin.** Atladığınız üretken çaba öğrenmenin kendisidir; yanıt getiren yardım arama, ipucu getiren yardım aramadan farklı bir davranıştır ([[help-seeking]], [[desirable-difficulties]]). Bitmiş yanıtı esirgeyen araçları kullanın.

**Daha iyi bir yanıt almak için kişisel, sağlık ya da aile bilgilerinizi bir araca yapıştırmayın.** Aracın bunu unutma yükümlülüğü yoktur ve gizlilik maliyeti yanıtın kalitesinde görünmez ([[privacy]]).

## Aileler için

**Ödevi araçla yapmayın ya da yanınızda yapılmasına izin vermeyin.** Verilerde görünen örüntü, gizli bir maliyetle puan şişmesidir: ödev puanları %18 artarken kapalı kitap sınav puanları %20 düşer ([[reducing-ai-misuse]]). Kontrol edebileceğiniz şey süreçtir — çocuğunuz adımı açıklayabiliyor mu, kâğıt üzerinde yeniden yapabiliyor mu ve neyden emin olmadığını söyleyebiliyor mu? Yapamıyorsa, ödevi araç yapmıştır.

**Bir sohbet robotunun sırdaş olmasına izin vermeyin.** Yaltaklanan sistemler insanlardan çok daha fazla onaylar — 11 model genelinde %49 daha fazla — ve onlarla konuşmayı güvenli hissettiren mekanizma bu onaydır ([[ai-sycophancy]]). Büyük bir boylamsal çalışmada kullanıcılar, kişisel tavsiye için yaltaklanan YZ'ye yakın arkadaşlarına ve ailelerine neredeyse o kadar sık başvurdu ve gerçek ilişkilerinde daha düşük memnuniyet bildirdi ([[sycophantic-ai-social-interaction-2026]]). Sıkıntısını her zaman aynı fikirde olan bir modele götüren çocuk duyulmuyor; ona ayna tutuluyor.

**Küçük bir çocuğa üretici bir sohbet robotu verip odada olduğunuz için buna denetimli demeyin.** Yaşa göre katmanlı rehberlik somuttur: 9-12 yaş için iskeleli, üretici olmayan etkinlikler; 13 yaş ve üzeri için etik akıl yürütmeyle denetimli üretici kullanım ([[ai-guidance-children-under-13]]). En küçük çocuklar için risk inançtır — işlem öncesi dönemdeki çocuklar üretilen içeriği doğru kabul eder ve sistemler verdikleri geri bildirimde gelişimsel olarak kalibre edilmemiştir. Yetişkinin birlikte kullanımı, kapıdan gözlemek değil oyuncağın az önce ne yaptığını sormaktır ([[early-childhood-elementary-ai-education]]).

**Okulun aracı seçtiği için çocuğunuzun verilerini koruduğunu varsaymayın.** Neyin saklandığını, ne kadar süreyle, herhangi bir şeyi eğitip eğitmediğini ve başka kimin gördüğünü sorun ([[privacy]]). Farkındalık maruziyetten doğmaz: öğrencilerin kendi kayıtlı davranışlarını canlı olarak projeksiyonda izlediği bir dersten bir ay sonra, bir 7. sınıfın %66'sı hâlâ en az koruyucu sohbet robotu ayarını seçti ([[privacy]]).

**Bir dedektör sonucunu çocuğunuzu suçlamak ya da okuldan gelen bir suçlamayı desteklemek için kullanmayın.** En güçlü kontrollü testte dedektörler değiştirilmemiş insan yazısının %9–15'ini işaretledi ve insanlaştırılmış YZ yeniden yazımlarının %4'ünden azını yakaladı; gerçekçi temel oranlarda yanlış pozitifler doğru pozitiflerden fazladır ([[ai-detection]]). Bir işareti taslak geçmişi ve bir konuşma isteme nedeni olarak ele alın, bulgu olarak değil.

**Aracı yasaklamanın güvenli seçenek olduğu sonucuna varmayın.** Az güven, kendi maliyeti olan bir kalibrasyon hatasıdır — vazgeçilen yetenek — ve önemli olan beceri kaçınma değil kalibre edilmiş güvendir ([[trust-calibration]]). Yararlı ebeveyn hamlesi, araştırmanın öğrenciler için desteklediği hamlenin aynısıdır: bir doğrulama adımı şart koşun ve bunu yorgun bir çocuğun gerçekten yapacak kadar ucuz kılın ([[verify-ai-output]]).

**İçerik filtresini güvenlikle karıştırmayın.** Filtreler bir sistemin ne söyleyeceğini ele alır; bir etkileşimin öğrenene ne yaptığını ele almaz — aşınmış alıştırma, yaltaklanan anlaşma ya da dengesiz reddetmeler ([[pedagogical-safety]]).

## Eğitmenler için

**Çıktıyı yetkinlik olarak belgelendirmeyin.** Cilalı bir teslim, cilalı bir teslim kanıtıdır. Değerlendirme, öğrencinin desteksizken ne yapabildiğini ayırt edemiyorsa, değerlendirme yeterliliğin iddia ettiği şeyi ölçmeyi bırakmıştır ([[assessment-validity]], [[authentic-assessment]]). Çözüm, daha sıkı bir onur sözleşmesi değil görevin yeniden tasarlanmasıdır.

**Dedektör puanını suistimal kanıtı olarak kullanmayın.** En güçlü kontrollü test, yönergeye uygun hafif YZ düzenlemesinin %38–80'ini ve değiştirilmemiş insan yazısının %9–15'ini işaretlerken insanlaştırma hizmetinden geçirilmiş yeniden yazımların %4'ünden azını yakalıyor; bağımsız bir kıyaslamada 14 ticari aracın tamamı %80 doğruluğun altında kaldı ve gerçekçi temel oranlarda yanlış pozitifler doğru pozitiflerden fazladır ([[ai-detection]], [[should-we-use-ai-detectors]]). Bir dedektör bir konuşma başlatabilir; bitiremez.

**Yeniden tasarlamadığınız bir değerlendirmeye YZ eklemeyin.** Desteksiz performans için tasarlanmış bir göreve araç iliştirmek, kaybı gizleyen puan şişmesini tam olarak üretir — ödev yukarı, sınav aşağı. Notlanan her göreve desteksiz sürümünün ne göstereceğini sorun ve önce görevi düzeltin ([[reducing-ai-misuse]]).

**Katılımı öğrenme olarak ele almayın.** Görev süresi, memnuniyet, yardım arama hacmi ve sohbet etkinliğinin hepsi kolayca ölçümlenir ve hepsi hiç öğrenme olmamasıyla uyumludur. Öğrencilerin yanlış bir YZ konumuna geçişini %42–60,5'ten %5,7–8,2'ye indiren bir koruma önlemi, oturum içinde ölçülebilir hiçbir öğrenme etkisi üretmedi (β = 0,03, p = 0,18). Davranış korundu; öğrenme yerinden kıpırdamadı ([[student-engagement]]).

**Arayüzün sınırlayabileceği yerde uyarıya güvenmeyin.** Bitmiş yanıtı üretebilen bir öğretmen, teslim baskısı altında onu üretecektir. İşe yarayan koruma önlemi, izlenceye yazılmış cümle değil etkileşimin içine yerleştirilmiş olandır ([[reducing-ai-misuse]], [[pedagogical-safety]]).

**Öğrenci çalışmasını, BEP'leri, disiplin kayıtlarını ya da kimliği belirleyen taslakları tüketici bir araca yapıştırmayın.** Veri minimizasyonu, düşünmüş olsanız da olmasanız da öğrenci adına verdiğiniz bir tasarım kararıdır ([[privacy]]).

## Eğitim ve öğretim geliştiricileri için

**Araç eğitimi verip buna YZ okuryazarlığı demeyin.** İstem üzerine bir oturum bir ürünün arayüzünü öğretir; [[ai-literacy]] aracın ne zaman kullanılması gerektiğini, ne yaptığını ve neyin doğrulanması gerektiğini yargılama kapasitesidir. Öğretmenler düğmeleri öğrenip yargıyı öğrenmeden ayrıldığında ellerinde güven olur, kalibrasyon olmaz ([[teacher-ai-competency]]).

**Tek seferlik mesleki gelişim düzenleyip uygulamanın değişmesini beklemeyin.** [[professional-training|mesleki öğrenme]] kanıtı süre ve takip konusunda tutarlıdır: tek etkinlikler öz bildirilen güveni hareket ettirir, sınıf davranışını nadiren hareket ettirir ve güven kazanımı değişimin yokluğunu maskeleyebilir ([[educational-development]]).

**Yerinde bıraktığınız değerlendirme sistemini görmezden gelmeyin.** Öğretim üyeleri ancak tabi oldukları değerlendirme onu cezalandırmıyorsa öğrettiğiniz uygulamayı benimser. Değişmemiş bir sınav rejiminin yanında yürütülen YZ'ye dayanıklı görev tasarımı atölyesi, öğretim üyelerine eğitimin dekoratif olduğunu öğretir.

**Uyardığınız eleştirel olmayan kullanımı örneklemeyin.** Öğretim üyelerinin önünde doğrulama adımı olmadan bir ders planı üreterek bir aracı göstermek, izleyiciye çıktının ürün olduğunu öğretir.

**Satıcı demosunu etkililik kanıtı olarak kabul etmeyin.** Değerlendirdiğiniz iddia öğrenmeyle ilgilidir ve bir demo yeteneği gösterir. Desteksiz sonuçlar, alt grup sonuçları ve çok turlu güvenlik testleri isteyin ([[checking-whether-educational-ai-works]]).

## Eğitim yazılımı geliştiricileri için

**Kaydetmesi kolay ölçütü en iyilemeyin.** Oturum süresi, ileti sayısı ve memnuniyet derecelendirmeleri neredeyse her değişiklik altında iyileşir; öğrenme çoğu zaman iyileşmez. Bir koruma önlemi çıkaran aynı ekip, etkileşim hacmini ödüllendiren bir pano da çıkarabilir ve ikisi zıt yönleri gösterir ([[learning-analytics]], [[student-engagement]]).

**Yapıya karşı doğrulama çalışması olmadan bir dedektör yayımlamayın.** Sızdırılmış bir bölünmede 0,98 F1 puanı alan bir model, denemeden bağımsız doğrulamada 0,60'a düşebilir ve bir gülümseme dedektörü, insan derecelendiricinin sahip olduğu bağlamdan yoksun olduğu için gözlemci derecelendirmeli empatiye karşı *negatif* çalışabilir ([[assessment-validity]], [[sensor-and-gaze-analytics]]). Manşeti değil doğrulama protokolünü yayımlayın.

**Rıza ve belirtilmiş bir amaç olmadan yüzlerden ve bedenlerden duygu, dikkat ya da “katılım” çıkarımı yapmayın.** Çok turlu risk tek turlu risk değildir: bir derlemede zarar oranları tek turlu değerlendirmelerde yaklaşık %18'den çok turlu olanlarda yaklaşık %78'e çıktı; yani izole istemler üzerinde sertifikalanan bir sistem, öğrencilerin hiç yaşamadığı bir etkileşim üzerinde sertifikalanmıştır ([[pedagogical-safety]], [[privacy]]).

**Devri gizlemeyin.** Bir öğretmenin ne zaman üretim yaptığını ne zaman getirme yaptığını ya da ne zaman bir insanın döngüde olduğunu ayırt edemeyen öğrenci, ona güvenini kalibre edemez; otomasyon yanlılığı en temiz biçimde sistem haklıyken ve insan kontrol etmeyi bıraktığında işler ([[automation-bias]], [[trust-calibration]]).

**Kıyaslama için tasarlayıp sonra sınıf için olduğunu iddia etmeyin.** Kıyaslama performansı kıyaslamanın bir özelliğidir. Sınadığınız kullanım koşullarını, popülasyonu ve görevleri bildirin; aksi halde sayı farklı bir ortam hakkında bir vaat olarak okunur ([[limitations-in-aied-research]]).

**Aracı yardıma giden tek yol yapmayın.** Bir öğrencinin geri bildirime erişimi bir modelin kullanılabilirliğine, kotasına ya da lisansına bağlıysa, hakkaniyet sorusu zaten satın alma tarafından karara bağlanmıştır ([[equity-in-ai-education]]).

## Eğitim yöneticileri için

**Yetenek iddialarını sonuç kanıtı olarak satın almayın.** Satıcılar bir ürünü gösterebilir; öğrenmeyi yalnızca bir değerlendirme gösterebilir. Desteksiz sonuçlar, alt grup sonuçları, kayıp oranı ve pilot bittiğinde ne olacağına dair bir plan talep edin ([[checking-whether-educational-ai-works]], [[evaluating-ai-interventions-methods]]).

**Gözetimi mevcut olduğu için devreye almayın.** Gözetim sistemleri yüz görüntülerini, kimlik belgelerini, 360 derecelik taramalar dahil oda taramalarını ve mikrofon sesini kaydeder; 80 çalışmanın derlemesi, bir kurumun devreye almadan önce yanıtlaması gereken sorular için bildirim eşiğini yalnızca %25'inin karşıladığını buldu ([[privacy]], [[remote-proctoring]]). Maliyet öğrencilere düşer; kanıt temeli sözleşmenin ima ettiğinden daha zayıftır.

**Yalnızca yasaklayıcı bir politika yazıp buna yönetişim demeyin.** Değerlendirme yeniden tasarımı, destek ve itiraz yolu olmayan bir yasak, davranışı önlemek yerine kaydırır ve yanlış bir suçlamaya itiraz edemeyecek öğrencileri cezalandırır. Politika notlandıranı da kapsamalıdır: bir teslime gömülü beş dolaylı istem enjeksiyonu stratejisinden ikisi, başarısız bir makalenin puanını yükseltti ([[institutional-ai-policy]], [[course-ai-policy]]).

**Benimsemeyi iyileşmeyle eşitlemeyin.** Kullanım, memnuniyet ve tamamlanma bildiren bir pano, öğrenme ölçüsü sabit kalırken başarı gibi görünecektir. Hangi sonucun sözleşmeyi iptal ettireceğine önceden karar verin ([[ai-ed-evaluation]]).

**Erişilebilirliğin bir uyarlama talebi olarak gelmesine izin vermeyin.** Nöroçeşitli öğrenciler için dijital yardımcı teknolojiler üzerine 40 çalışmanın derlemesinde 28'i katılım için resmî bir tanıyı koşul kıldı — ihtiyacı olup etiketi olmayan her öğrenciyi dışlayan tanı kapılı bir model ([[accessibility]], [[universal-design-for-learning]]).

## Eğitim araştırmacıları için

**Nedensel iddiayı öz bildirime taşıtmayın.** Güven, algılanan öğrenme ve memnuniyet sonuçlardır, ama çoğu çalışmanın ölçtüğünü söylediği sonuçlar değildir. [[empathy|empati]] literatürü en net örnektir: empati öğretmeyi amaçlayan bir alan çoğunlukla rahatlığı ölçer ve 17 çalışmanın en güçlü derlemesi güven kazanımlarını empatinin kendisine dair kanıttan çok daha yaygın buldu ([[self-report-measures]], [[empathy]]).

**Bir etkiyi tasarımı olmadan alıntılamayın.** YZ ile eleştirel düşünme üzerine 80 HCI çalışmasının eleştirel derlemesinde 42'si kontrol grubu çalıştırmadı. Tek bir kurumda tek bir derste 30 öğrenciden gelen manşet etkisi, kırılgan bir iddianın yaygın biçimidir ([[limitations-in-aied-research]]).

**Heterojenliği modeli olmadan bildirmeyin.** Aynı veri sabit etkili bir modelde I² = %82,98 ve rastgele etkili bir modelde %15,75 verir; modeli belirtilmemiş bir I² yorumlanamaz ([[meta-analysis-systematic-review]]).

**Tek bir bağlamdan genelleyip buna bulgu demeyin.** Tek ders, tek kurum, tek model sürümü, tek dil. Model davranışı her sürümde değişir ve bir nesil üzerinde eğitilen dedektörler bir sonrakinde geri çağırmayı kaybeder ([[research-gaps-aied]], [[ai-detection]]).

**Etkileşim ile sonuç arasındaki bağıntıyı mekanizma olarak ele almayın.** İstem hacmi bilişsel yük boşaltmayı ölçmez — hacme göre kümeler bilişsel işin dağılımında farklılaşmadı ve elle kodlanan diyalog, 125 diyalogun %49,6'sında hiç boşaltma bulmadı ([[cognitive-offloading]]). İşi ölçün, görünür izini değil.

**Çalışmadan önce yazılabilecek bir sınırlılıklar paragrafı yayımlamayın.** Belirli tehdidi, belirli sayıyı ve sınırladığı iddiayı adlandırın. Bir sınırlılığı sonraki okuyucu için kullanılabilir kılan şey budur ([[interpreting-and-applying-aied-research]]).

## Bunlar neden bir arada

Yukarıdaki her madde, bir vekilin hükme yükseltilmesi vakasıdır: makale yazarın, puan suistimalin, gülümseme empatinin, demo öğrenmenin, politika yönetişimin yerine geçer. Düzeltme her zaman aynı hamledir — yapıyı adlandırın, ters yönde çıkabilecek bir ölçü bulun ve onu elverişli olanın yanında toplayın.

Bu, söz konusu uyarıların her zaman yanlış olan şeylerin listesi olmamasının nedenidir de. Bir dedektör bir öğrenciyle konuşmak için bir neden olabilir. Bir sohbet robotu yararlı bir prova olabilir. Bir pano bir soru sormak için bir vesile olabilir. Zarar araçta değil yerine koymadadır.

## Bu hafta yapın

- Notlanan bir görev seçin ve araç kapalıyken ne göstereceğini yazın. Yanıt “hiçbir fark yok” ise, sorun görevdir.
- Şu anda yalnızca destekli performans bildiren bir derse desteksiz bir ölçü ekleyin.
- Kurumunuzun gözetim ya da YZ aracı sözleşmesini saklama, ikincil kullanım ve ihlal koşulları için okuyun — ve rıza metninin sistemin gerçekte ne yakaladığını tanımlayıp tanımlamadığını kontrol edin.
- Bir satıcıdan desteksiz sonuçlar ve alt grup sonuçları isteyin. Yanıt bir demoysa, yanıtınızı almışsınızdır.
- Bir sonraki öğretim üyesi oturumunuzda ikinci yarıyı istemlere değil değerlendirme yeniden tasarımına ayırın.

## Bundan sonra nereye

- [[addressing-common-misconceptions-ai-education]] — bu uygulamaların arkasındaki inançlar ve onları küçümsemeden nasıl düzelteceğiniz.
- [[limitations-in-aied-research]] — kanıt temelinin henüz destekleyemediği şeyler.
- [[reducing-ai-misuse]] — suistimal için yapısal kaldıraçlar ve telkini neden yendikleri.
- [[pedagogical-safety]] — bir öğretmenin her içerik kontrolünden geçerken bir öğrenene ne yapabileceği.
- [[should-we-use-ai-detectors]] — dedektör kanıtının tamamı.
- [[checking-whether-educational-ai-works]] — bir iddiayı benimsemeden önce nasıl değerlendireceğiniz.
