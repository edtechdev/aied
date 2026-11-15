---
title: "Öğretim Elemanlarının Bilmesi Gereken Eğitimde Yapay Zeka Araştırmasından En Önemli 10 Bulgu Nedir?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [addressing-common-misconceptions-ai-education, does-ai-help-students-learn, reduce-ai-cheating, faculty-ai-competencies]
weight: 100
foundations: [ai-education, ai-literacy, cognitive-offloading, teacher-role]
assessment: [assessment]
research_method: [literature review]
audience: [instructors, faculty developers, educational technology developers, administrators, researchers]
updated: "2026-11-14T18:10:00-05:00"
translation_of: faqs/top-10-findings-ai-education-instructors
source_updated: "2026-11-14T18:10:00-05:00"
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
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Bu on çalışma, eğitimcilerin verdiği kararları doğrudan ilgilendiriyor: neyin verileceği, nasıl değerlendirileceği, hangi araçların satın alınacağı, nasıl geliştirileceği ve öğrenmenin gerçekleşip gerçekleşmediğinin nasıl anlaşılacağı. Her madde çalışmayı, sonucunu ve değiştirdiği uygulamayı veriyor.

## On çalışma

**1. Düz sohbet robotuna erişim sınav puanlarını %17 düşürdü ([[generative-ai-guardrails-harm-learning|Bastani et al., 2025]]).**

Türkiye'de yaklaşık 50 sınıfta yaklaşık 1.000 lise öğrencisi aynı içerikle üç matematik oturumu tamamladı. Bir grubun alıştırma sırasında düz bir GPT-4 sohbet penceresi vardı. Bir grupta aynı model üzerine kurulmuş, öğretmenin yazdığı [[guardrails|koruma kuralları]] olan bir özel ders aracı vardı: cevapların yerine ipuçları, doğru çözüm ve yaygın hatalar istemin içine gömülüydü. Kontrol grubunda YZ yoktu. Her oturum, araç ortadan kalkmış halde benzer problemler üzerine bir [[summative-assessment|kitap kapalı sınavı]] ile sona erdi.

Düz sohbet grubu alıştırma sırasında kontrolden %48 yüksek, sınavda ise kontrolden %17 düşük puan aldı. YZ'ye hiç dokunmayan öğrenciler onlardan daha iyi performans gösterdi. Korumalı grup alıştırmada %127 kazandı ve sınavda başa baş geldi. Zarar kayboldu ve yerine hiçbir öğrenme avantajı gelmedi. Sohbet kayıtları bu ayrımı açıklıyor: korumasız grup cevap istedi ve durdu, korumalı grup ise problemleri denedi, ipucu istedi ve ilk oturum içinde gelişti.

Eğitimciler için "YZ'ye izin var" bir politika değildir. Aracın bir ipucu kanalına mı yoksa cevap makinesine mi dönüşeceğine arayüz karar verir ve genel bir sohbet robotu varsayılan olarak ikincisine yönelir. Alıştırma sırasında açık bırakılan bir sohbet penceresi, ona en çok yaslanan öğrencilere en pahalıya mal olur.

Yöneticiler aynı sonucu, daha güçlü bir modelin pedagojiyi düzelttiği yönündeki satın alma iddiasının karşısına koyabilir. Model iki kolda da aynıydı.

İlgili: [[training-ai-tutors-to-guide-rather-than-answer|Bir özel ders aracını cevap vermek yerine yönlendirmek için eğitmek]]

**2. Kursun kendi pedagojisi üzerine kurulmuş bir özel ders aracı, aktif öğrenme sınıfını daha kısa sürede geçti ([[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin et al., 2025]]).**

Physical Sciences 2, Harvard'ın yaşam bilimleri bölümü öğrencileri için giriş fizik dersidir. 2023 güzünde, çapraz geçişli bir denemede 194 öğrenci iki dersi iki kez işledi: bir kez kursun [[active-learning|aktif öğrenme]] sınıfında, bir kez de kurs için geliştirilmiş bir özel ders aracıyla, her sürümün öncesinde ve sonrasında ön test ve son testlerle.

Öğrenciler özel ders aracıyla daha çok öğrendi. Son test medyanı 4,5'e karşı 3,5 oldu, [[learning-gains|öğrenme kazanımları]] medyanı sınıfın iki katından fazlaydı ve etkinin kantil tahminleri 0,73 ile 1,3 standart sapma arasında değişti. Araçla medyan 49 dakika geçirdiler, sınıfta ise yaklaşık 60 dakika; %83'ü açıklamalarını öğretim elemanlarınınki kadar iyi ya da daha iyi buldu. Katılım ve motivasyon puanları yükseldi. Keyif ve gelişim zihniyeti farklılaşmadı.

Sonuç tasarıma dayanıyor. Araç sınıfla aynı hamleleri yaptı: çözülmüş örnekler, kademeli ipuçları, kendi kendine açıklama istemleri, fiziğin nasıl öğrenildiğine dair araştırmayı izleyen bir sıralama. Karşılaştırma aktif öğrenmeye karşıydı, derse karşı değil, bu yüzden "her şey bir dersten iyidir" şeklindeki yaygın itiraz burada geçerli değil.

Öğretim elemanı geliştiricileri için burada mevcut en güçlü argüman var: özel ders aracının tasarımı bir müfredat işidir, satın alma işi değil. Ürün ekipleri için çıta somut: aynı öğretim hamlelerini kullanarak, daha kısa sürede aktif öğrenme sınıfıyla başabaş gelmek.

İlgili: [[developing-ai-tutor|YZ özel ders aracı geliştirmede en iyi uygulamalar]]

**3. YZ özel ders, uzman insan öğretmenlerle eşleşti ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).**

StudentBench, GRE'ye hazırlanan 2.383 yetişkinle yapılan 2.469 özel ders oturumunu, 12 model üzerine kurulmuş 13 YZ öğretmeni, canlı insan öğretmenler ve bir video kontrolü kullanarak bir araya getirdi. Sonuç, Nicel ve Sözel maddelerde öğrenme kazanımıydı.

Birleştirilmiş YZ özel ders, uzman insan özel dersine istatistiksel olarak eşdeğerdi, bir standart sapmanın dörtte biri içinde, ve ikisi de kontrolü yaklaşık altı yüzde puanı geçti: Nicel'de 6,86 ve Sözel'de 5,47, yani bölüm başına kabaca bir buçuk ila iki ek doğru cevap. YZ öğretmenleri ders planlamada ve alıştırma problemi oluşturmada daha zayıf değerlendirildi; insan öğretmenler bunu daha iyi yaptı.

Yöneticiler için, iyi tanımlanmış test hazırlığında kadrolama aritmetiği değişiyor. Lisanslı bir özel ders aracı, bir standart sapmanın dörtte biri düzeyinde insan öğretmenle eşleştiğinde karar maliyet ve kapsama hakkındadır ve etkililik soru olmaktan çıkar. Araştırmacılar sınırı not edecek: denklik üstünlük değildir ve standart bir test, bir makinenin eşleşmesi için en kolay sonuçtur.

Öğretim elemanı geliştiricileri, insan öğretmenlerin nerede avantajını koruduğuna bakabilir: öğrencinin sırada neye ihtiyacı olduğunu teşhis etmek ve bundan doğan sıralamayı kurmak.

İlgili: [[intelligent-tutoring|Akıllı özel ders]]

**4. Not yazmak, sohbet robotuna sormayı üç gün sonra geçti ([[kreijkes-llm-note-taking-reading-comprehension-2026|Kreijkes et al., 2026]]).**

Kreijkes ve meslektaşları İngiltere'de yedi ortaokulda önceden kayıtlı bir deney yürüttü. 405 onuncu sınıf öğrencisi bir tarih metni üzerinde üç koşuldan ikisini işledi: metin hakkında soruları yanıtlayabilen bir sohbet robotu, not alma ya da ikisi birden. Üç gün sonra birebir hatırlama, anlama ve [[retrieval-spacing-interleaving|serbest hatırlama]] üzerine kitap kapalı testlere girdiler.

Notlar sohbet robotunu üç ölçümde de geçti: hatırlamada yaklaşık yarım standart sapma, anlamada onda dörde yakın. Not artı sohbet robotu, üçün ikisinde tek başına sohbet robotunu geçti ve serbest hatırlama için hiçbir şey yapmadı; notlar tek başına ise kombinasyondan daha güçlüydü. Birleşik koşulda öğrencilerin yaklaşık dörtte biri sohbet robotunun çıktısını notlarına kopyaladı. Öğrenciler yine de sohbet robotunu yazmaktan daha kolay, daha yardımcı ve daha keyifli buldu.

Eğitimciler burada bir okuma asistanının okumanın yerini alabileceğine dair doğrudan kanıta sahip. Ödevin amacı bir metni anlamaksa, [[writing-education|yazmak anlamanın kendisidir]] ve metin hakkındaki soruları yanıtlayan bir araç alıştırmayı ortadan kaldırır. Notları tutun. Sohbet robotuna izin veriyorsanız, sağlayamayacağı bir şey isteyin: bir karşılaştırma, metne bir itiraz ya da araç kapandıktan sonra yazılmış bir özet.

İlgili: [[ai-support-reading-comprehension|Okuduğunu anlama için YZ desteği]]

**5. Çalışma süresi %27 düştü ve hatırlama da onunla birlikte düştü ([[generative-ai-reduced-study-time-math|Rismanchian et al., 2026]]).**

ALEKS platformundan on yıllık bir panel, 3,2 milyon öğrenme etkileşimi ve 12,2 milyon yerleştirme değerlendirmesi yanıt süresini kapsayarak, öğrencilerin ChatGPT geldikten sonra ne yaptığını gösteriyor. Tasarım, aynı müfredat içinde sohbet robotuna yapıştırılabilen problem türlerini (metin tabanlı sözel problemler) platform içinde bir grafiği işlemeyi gerektiren türlerle karşılaştırıyor.

YZ'ye açık problemlerde geçirilen süre üniversite öğrencilerinde çeyrek başına %2,8, on bir çeyrekte %26,9 düştü. Lise öğrencileri %31,3, ortaokul %9,0 düştü ve beşinci sınıflar saptanabilir bir değişim göstermedi. Düşüş [[remote-proctoring|gözetim]] altında tamamen kayboldu; bu belirleyici testtir: araç kullanılamadığında öğrenciler eski süreyi harcadı. Gözetimli hatırlama maddeleri, doğru yanıt olasılığında %25 kümülatif bir düşüş gösterdi.

Yaş gradyanı ürün ekipleri için bir tasarım sinyalidir. Hareket eden değişken alıştırma süresidir ve en çok, görevin devredilmesi en kolay olan yerde hareket eder. Eğitimciler için görev üzerinde geçirilen süre ucuz bir erken uyarıdır: aynı problemleri çok daha hızlı bitiren bir kohort muhtemelen aynı şeyi öğrenmiyordur.

İlgili: [[reducing-over-reliance|YZ'ye aşırı bağımlılığı azaltmak]]

**6. Ev ödevi puanları %18 yükselirken kitap kapalı sınavlar %20 düştü ([[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg et al., 2026]]).**

Çin'de 7. ila 12. sınıflarda 26.811 öğrenci 30 ay boyunca izlendi ve üretken YZ kohortlara farklı zamanlarda alındı. Ev ödevi puanları %18 yükseldi ve tamamlama süresi %30 düştü, 64 dakikadan 45 dakikaya. Aylık kitap kapalı sınavlar altı ay içinde başlangıç ortalamasının %20'si kadar düştü ve yüksek riskli giriş sınavları yaklaşık iki yıl sonra %18 ila %24 düştü.

Zamanlama mekanizmayı gösteriyor. YZ kullanıcılarının yaklaşık %81'i ev ödevini YZ kullanmayan en hızlı öğrenciden daha hızlı bitirdi ve sonra sınavlarda kötü performans gösterdi. Ev ödevi süresini kullanmayanlarla karşılaştırılabilir tutan azınlık ise herkes kadar iyi öğrendi. Kayıplar en büyük sosyal bilimlerde, sonra STEM'de, sonra dillerdeydi ve yüksek başarılı öğrencilerde daha büyüktü.

Ev ödevi tamamlama, başarı için zayıf bir vekildir ve fark altı ay içinde, giriş sınavı sonuçları hareket etmeden çok önce ortaya çıkar. Eğitimciler daha erken harekete geçebilir: notlandırılmış kanıtı kitap kapalı tutun ve eve götürülen işi, tamamlama süresi görünür olan alıştırma olarak ele alın.

İlgili: [[checking-whether-educational-ai-works|Eğitimde YZ'nin işe yarayıp yaramadığını kontrol etmek]]

**7. Test edilen her özel ders aracı pedagojide başarısız oldu ve bir konuşma boyunca daha kötü başarısız oldu ([[hazra-safetutors-pedagogical-safety-2026|Hazra et al., 2026]]).**

SafeTutors, 3,8B'den 72B'ye açık ağırlıklı modeller ve GPT-5-mini dahil 11 özel ders aracını matematik, fizik ve kimyada, [[learning-theories|öğrenme biliminden]] alınan 11 boyut ve 48 alt riskten oluşan bir taksonomiye karşı test etti. Başarısızlık kategorileri pedagojik: aşırı cevap açıklama, yanlış anlamayı pekiştirme ve [[scaffolding|iskele]]yi terk etme. Bunların her biri o anda yardımcı görünür, çünkü öğrenci hızla doğru bir cevap alır.

Her model geniş pedagojik zarar gösterdi. Daha büyük modeller güvenilir biçimde daha güvenli değildi ve genel yardımcılık pedagojik güvenlikle yalnızca zayıf korelasyon gösterdi. Zarar oranları tek turlu alışverişlerde %17,7'den beş ila sekiz turlu konuşmalarda %77,8'e yükseldi.

Tek turlu değerlendirmeler güvenli bir özel ders aracının kanıtı değildir ve ürün ekipleri testlerini bunun etrafında tasarlamalıdır. Tek seferlik bir yardımcılık ve güvenlik kontrolünü geçen bir model, gerçek bir konuşmanın çoğunda başarısız olabilir. Özel ders aracı satın alan yöneticilerin üç yanıta ihtiyacı var: çözümleri saklıyor mu, yanlış anlamaları yokluyor mu ve bir oturum boyunca dayanıyor mu. Tek alışverişlik bir satıcı demosu bunların hiçbirini sağlamaz.

İlgili: [[pedagogical-safety|Pedagojik güvenlik]]

**8. İhlal vakaları, suçlamaların ima ettiğinden daha zayıf kanıtlara dayanıyor ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).**

Munoz ve meslektaşları bir Avustralya üniversitesinde üç yıl boyunca üretken YZ ile ilgili her ihlal vakasını kodladı: 1.855 kanıt öğesi taşıyan 1.162 vaka; her biri ilgililik, güvenilirlik ve çıkarım gücü açısından derecelendirildi.

Üretken YZ suçlamaları 2023'te ihlal vakalarının %11,9'undan 2025'te %36,9'a yükseldi, toplam vaka hacmi ise sabit kaldı. GenAI toplamının %5'i olan 58 vaka, hiçbir kanıt öğesi olmadan yalnızca iddiaya dayanıyordu. Dedektör çıktısı nadir ve zayıftı: Turnitin veya benzerlik raporları 73 öğede hiç çıkarım gücü taşımadı ve tek başına GPTZero çıktısı 69 öğede düşük güvenilirliğe sahipti. En güçlü kanıt suçlamadan değil soruşturmadan geldi; sözlü görüşme itirafları 410 öğede %97,2 güçlüydü. [[hallucination-risk|Uydurma kaynaklar]] en büyük yapısal kaymaydı: öğelerin %22,3'ü, 2023'te %10,4'ten 2025'te %30,0'a yükseldi.

Yöneticiler için ders usule ilişkindir. Bir dedektör puanı üzerine kurulmuş vaka bir itirazı atlatamaz ve görüşme yerine araçla başlayan bir soruşturma zayıf dosyalar üretir. Eğitimciler sürekli ortaya çıkan artefakt üzerinde harekete geçebilir: uydurma kaynaklar yaygındır ve bir kaynak kontrolü ucuzdur.

İlgili: [[should-we-use-ai-detectors|YZ dedektörlerini kullanmak]]

**9. Öğretmenlerin YZ okuryazarlıklarına duyduğu güven, ölçülen becerilerini neredeyse hiç izlemiyor ([[ai-literacy-assessment-misalignment|Zhang et al., 2026]]).**

288 K-12 öğretmeni, öz bildirime dayalı bir YZ okuryazarlığı anketini ve aynı çerçeve üzerine kurulmuş nesnel bir performans ölçümünü tamamladı: Kavram, Kullanım, Değerlendirme ve Etik. İkisi arasındaki korelasyonlar 0,07 ile 0,24 arasında değişti.

Gizli profil analizi altı grup buldu. 43 öğretmen kendini sürekli yüksek değerlendirirken nesnel ölçümde daha düşük puan aldı. 59'u bunun tersini gösterdi. Geri kalanı ortalamaya yakın kümelendi ya da YZ ile önceki deneyime göre ayrıldı.

Öğretim elemanı geliştiricileri için [[self-assessment|öz değerlendirme]] bir ihtiyaç analizi değildir. Öğretmenlere ne kadar emin olduklarını soran bir anket, emin olanları fazla fonlar ve sessizleri yetersiz hizmetle bırakır; bu gruplar yetkin olanlar ve zorlananlarla aynı değildir. Kısa performans görevleri onları ayırır. Araştırmacılar düşük korelasyonları bir ölçüm uyarısı olarak ele almalıdır: [[ai-literacy|YZ okuryazarlığı]] üzerine [[self-report-measures|öz bildirime]] dayanan her çalışma güveni ölçüyordur.

İlgili: [[faculty-development-ai|Uygulamayı değiştiren öğretim elemanı gelişimi]]

**10. YZ puanlama, daha kötü yazan öğrencileri cezalandırıyor ([[ai-scoring-language-bias-physics|Feser ve Tschisgale, 2026]]).**

116 ortaokul öğrencisinin fizik açıklamaları 9 makine öğrenmesi yaklaşımı ve 2 büyük dil modeli yaklaşımıyla puanlandı, sonra uzman insan puanlarıyla karşılaştırıldı. Uzmanlarla uyum %67,2 ile %78,4 arasında değişti; bu, hatalar ayrıştırılana kadar kabul edilebilir görünür.

Her yaklaşım, dilsel kalitesi düşük açıklamalar için kavramsal anlamayı olduğundan az tahmin etti. Yanlılık tek yöndeydi: daha güçlü yazma şişirilmedi. Örüntü, fizik öğretmenlerinin kendileri için bildirilenleri yansıtıyor; bu da güçlüğün, modeller kadar insanlar için de anlamayı düz yazıdan çıkarsamakta olduğunu düşündürüyor.

Değerlendirme personeli ve ürün ekipleri, yalnızca uzmanlarla genel uyumu değil, dil kalitesine göre eksik tahmin oranlarını da raporlamalıdır, çünkü ortalama zarar gören grubu gizler. [[multilingual-learning|Çok dilli öğrencileri]] puanlayan herkes, dil kalitesi düşük yanıtları [[human-in-the-loop-ai|insan incelemesine]] yönlendirmeli ya da düz yazıya bağlı olmayan görevler tasarlamalıdır.

İlgili: [[ai-grading-fairness-reliability|Adil ve güvenilir YZ notlandırma]]

## On çalışmanın ortak noktası

Çalışmaların üçü aynı anda iki şeyi ölçüyor: öğrencilerin araçla ne ürettiğini ve aracsız ne yapabildiğini. Bastani, Rismanchian ve Strömberg üçü de ikisinin ayrıştığını buluyor ve yalnızca desteksiz ölçüm öğrenme gibi davranıyor. Dördü modelden çok bir tasarım seçimine bağlı: Bastani'deki koruma kuralları, Kestin aracına gömülü pedagoji, Kreijkes'in görevde tuttuğu yazma ve SafeTutors'un test ettiği çok turlu ortam. Üçü aracın etrafındaki sistemi inceliyor: ihlal vakalarında kullanılan kanıt, öğretmen yeterliğinin ölçülme biçimi ve [[automated-assessment|otomatik puanlama]]daki dilsel varsayımlar. StudentBench standart bir testte denklik kuruyor; bir makinenin bir insanla en kolay eşleşebildiği tek sonuç bu. Bastani iki grupta görünüyor çünkü hem boşluğu hem tasarım düzeltmesini sağlıyor.

Geriye her kurs ya da ürün kararına taşınmaya değer üç soru kalıyor. Araç yokken öğrenci ne yapabilmelidir? Araç açıkken etkinlik ondan ne yapmasını istiyor? Bir ay sonra farkı hangi kanıt gösterirdi?

## Bu kanıtların zayıf olduğu yer

Bu çalışmalar bir bütün olarak [[limitations-in-aied-research|YZED araştırmasının sınırlamalarını]] paylaşıyor. En büyüklerinden ikisi Türkiye ve Çin'de, üçü ABD'de, biri İngiltere'de, biri Avustralya'da ve puanlama çalışması Almanya'da. Biri saha çalışması değil ticari modellerin kıyas ölçütü. Ortaokul matematiği baskın, ardından fizik ve bilgisayar geliyor. Çok az çalışma [[humanities-education|beşeri bilimlerde yazma]]yı geniş ölçekte, mesleki eğitimi ya da engelli öğrencileri inceliyor.

Öğrencileri benimsemeden sonra iki yıldan fazla izleyen yalnızca Çin paneli ve ALEKS paneli var ve Çinli yazarlar daha kısa çalışmaların uzun vadeli cezayı sistematik olarak olduğundan az tahmin ettiğini savunuyor. Bu sonuçların altısı hakem değerlendirmesini tamamlamamış ön baskı veya çalışma metni: StudentBench, Rismanchian, Strömberg, SafeTutors, Zhang ve Feser. Bastani, Kestin, Kreijkes ve Munoz çalışmaları hakemli dergilerde yayımlandı.

Sıfır ve olumsuz sonuçlar bu literatürde nadirdir, bu yüzden yayımlanmış kayıt YZ'nin ne sıklıkla yardımcı olduğunu muhtemelen abartıyor. Bu çalışmalar on karar için mevcut en iyi rehberdir ve hiçbiri bir soruyu kapatmıyor.

## Bundan sonra nereye

[[does-ai-help-students-learn|YZ öğrencilerin öğrenmesine yardımcı olur mu?]] bu iddiaların arkasındaki daha geniş kanıt incelemesidir. [[redesign-assessment-ai-era|YZ çağı için değerlendirme nasıl yeniden tasarlanmalı?]] değerlendirme yarısını daha ileri götürüyor. Dürüstlük vakaları için [[reduce-ai-cheating|YZ ile kopya çekmeyi nasıl azaltırım?]] süreç kanıtını ve politikayı kapsıyor. Mesleki gelişim bulguları için [[faculty-ai-competencies|Öğretim elemanlarının hangi YZ yeterliklerine ihtiyacı var?]] eşlik eden sayfa ve [[addressing-common-misconceptions-ai-education|Eğitimde YZ hakkındaki yaygın yanlış anlamaları nasıl ele alabiliriz?]] meslektaşlarınızdan muhtemelen duyacağınız itirazları ele alıyor.
