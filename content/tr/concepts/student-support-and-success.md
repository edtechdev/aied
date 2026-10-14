---
title: "Öğrenci Desteği ve Başarısı"
created: "2026-10-14T22:05:00-04:00"
type: concept
foundations: [ai-education, human-ai-collaboration]
pedagogy: [help-seeking, student-experience, student-engagement]
technology: [learning-analytics, conversational-ai, machine-learning, student-modeling, recommender-systems-and-learning-paths, generative-ai]
assessment: [learning-gains]
methods: [rct, quantitative-research]
institutions: [change-management, educational-policy-ai, governance]
ethics: [equity-in-ai-education, privacy]
audience: [administrators, institutions, researchers, instructors]
level: [higher ed, undergraduate]
confidence: high
connected_faqs: [ai-agents-support-students-instructors, institutional-ai-policy]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-01"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: concepts/student-support-and-success
source_updated: "2026-10-03T01:40:50-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Öğrenci Desteği ve Başarısı** — öğrencilerin okulda kalmasına, ilerlemesine ve mezun olmasına yardım etmenin kurumsal yanı işidir: **danışmanlık, idari yardım, ulaşım çalışmaları, yönlendirme ve kıt destek kapasitesinin dağılımı**. Bu sayfa, bir kursun *içinde* ne olduğundan çok kurumların öğrenciler *için* ne yaptığına ayrılmıştır. [[higher-ed|Yükseköğretim]], sektör için daha geniş çatıdır ve [[student-experience]] YZ'nin öğrencinin kendi deneyimine nasıl yansıdığını kapsar; [[learning-gains]] ise öğrenmenin gerçekleşip gerçekleşmediğini ölçer. Bu bilgi tabanındaki ayırt edici bulgu şudur: YZ desteği güvenilir biçimde **görev tamamlamayı** harekete geçirir — öğrencinin denetiminde olan, tarihli ve ikili bir eylem, kurumun da gözlemleyebildiği — ama **devam, kredi ve mezuniyet** neredeyse dokunulmadan kalır. Bu sonuçları birbirinden ayırmak, bu sayfanın amacıdır.

## Dikkate Alınması Gereken Sorular

- Hangi sonucu harekete geçirmeye çalışıyorsunuz? Kayıt hatırlatması ve bir kalıcılık programı, farklı kanıtlara sahip farklı müdahalelerdir; buradaki araştırma, birinin diğerini satın almadığını düşündürter.
- Bir model bir öğrenciyi riskli olarak işaretlerse, sonra ne olur? Kim harekete geçer, hangi kapasiteyle ve önerinin yalnızca doğru değil uygulanabilir kılacak şey nedir?
- Destek kapasitesi sınırlıdır. YZ onu sıraladığında veya dağıttığında, bir insan danışmanının zaten fark edeceği öğrencilere ne olur?
- Otomatik bir mesaj, yönlendirme veya risk puanı yanlış olduğunda kim sorumludur? Sonucu öğrenci görür; sistemi kurum sahiplenir.
- Destek veriniz seyahat ediyor mu? Ofisler arası paylaşım, hedeflemenin olanaklı kılmasının yanı sıra hedeflemenin sessizce durmasının en yaygın nedenidir.

## Giriş

Öğrenci desteği, ilişkinin kurumsal tarafında yer alır. İşi danışmanlık, ulaşım çalışmaları, yönlendirme ve sınırlı insan ile mali kapasitenin dağılımıdır; kanıt tabanı ise idari kayıtlar, kayıt olayları, kazanılan krediler ve öğrencinin dönüp dönmediğidir. Üretici YZ, öğretime girdiğinden sonra bu alana girdi ve buradaki literatürün çoğu **üretici olmayan** sistemlerle — kısa mesaj sohbet robotları, erken uyarı modelleri, birleşik risk tahmini — ilgilidir; üretici araçlar ise danışman, asistan ve bilgi tabanı yanıtlayıcı olarak gelmektedir.

Bu sayfayı düzenleyen ayrım, **bir dürtünün neler yapabileceği** ile **bir yörünge için nelerin gerektiği** arasındadır. Destek teknolojileri tarihli, ikili bir kararda üstündür: şu tarihe kadar kayıt olun, bu form doldurulsun, Erken Başlangıç'a katılınsın. Birikimli sonuçlar — devam, kredi, mezuniyet — ile çok daha zorlanırlar; bunları öğretim, mali durum, istihdam, aile koşulları ve önceki hazırlık şekillendirir. Bu konudaki bilgi tabanının en güçlü kanıtı, kaydı keskin biçimde harekete geçiren ama mezuniyeti hiç etkilemeyen dört yıllık bir rastgele değerlendirmeden gelir.

## Destek işlevleri

Araştırma beş işlevde kümelenir ve küme sınırları önemlidir, çünkü farklı kanıtlar taşırlar.

**Ulaşım ve iletişim.** Kurumlar öğrencilere ölçekte mesaj gönderir ve en güçlü değerlendirmeler bunun bir şeyi değiştirip değiştirmediğini test eder. California State University, Northridge'daki üretici olmayan bir kısa mesaj sohbet robotu olan CSUNny'nin dört yıllık rastgele çalışması, iki lisans kohortunu (N = 8.708) sekiz dönem boyunca izledi ([[mata-sustaining-ai-enabled-student-support-2026|Mata, Russell & Page, 2026]]). 31 Temmuz 2018'de gönderilen kayıt hatırlatması, muamele gören öğrencilerin 16 Ağustos'a kadar kaydolma olasılığını 34 puan artırdı ve 15 Eylül'e kadar yalnızca 2 puan artırdı; Erken Başlangıç hatırlatmaları 7 Haziran'a kadar 11 puan, 22 Haziran'a kadar 20 puan daha fazla kayıt üretti. Hâlihazırda kabul vardı: yıllık kayıt dışı kalma oranları hiçbir zaman %4'ü aşmadı. Georgia State Üniversitesi'nde önceden kaydedilmiş çok dönemli bir deneme, iki büyük asenkron kurstaki öğrencileri (N = 1.568 ve N = 915) haftada iki-üç özelleştirilmiş mesajla dürtüp, A veya B alma olasılığını kontrollerin %61'ine karşı dört puan artırdı ve her kursta DFW oranlarını yaklaşık üç puan kaydırdı ([[chatbot-outreach-course-performance-2026|Meyer ve ark., 2026]]).

**Danışmanlık ve akademik planlama.** Ders ve not tahmini, planlama girdisini sağlar — bir model bir öğrencinin hangi dersleri alacağını ve hangi notları alacağını birlikte tahmin eder ([[trace-course-grade-prediction-2026|Savala, 2026]]), bir diğeri büyük çevrimiçi programlama kurslarında modül düzeyinde ilerlemeyi doğal olarak yorumlanabilir bir karar ağacıyla tahmin eder ([[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska, 2026]]). Aktarma kredisi kendi başına bir danışmanlık sorunudur: CourseGraph, ders içeriğini bilgi grafikleri olarak modelleyerek mobil öğrenciler için dış ders denkliklerini değerlendirir ([[coursegraph-cs-course-comparison-2026|Nijdam ve ark., 2026]]). Kurum düzeyinde, yükseköğretimde YZ ve hizmet sunumu üzerine 155 çalışmanın bir derlemesinde, öğrenme analitiğinin 46 çalışma (%29,7) ile en yaygın uygulama olduğunu; sohbet robotları ve sanal asistanların 31 (%20,0) ve öngörücü analitiğin 29 (%18,7) ile önünde olduğunu buldu ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga, 2026]]).

**Yönlendirme ve destek dağılımı.** Tahmin bir plan değildir ve aradaki boşluk, alanın en keskin eleştirisinin durduğu yerdir. SC2R bunu **eyleme dönüştürülebilirlik açığı** olarak biçimselleştirir: bir risk puanı, yalnızca önerileri anlamsal olarak uygulanabilir ve makinece denetlenebilir olduğunda — yalnızca model geçerli değil, zamanlama, bütçe, değiştirilemezlik ve erişilebilirlik kısıtlarına tabi olduğunda — karar desteğine dönüşür ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge, 2026]]). Modellerin desteği iyi dağıtıp dağıtamayacağı ampirik olarak tartışmalıdır: 4.500 sentetik öğrenci senaryosu için destek planları önermeleri istendiğinde, üç LLM öğrenci ihtiyacına sınırlı duyarlılık ve modeller arasında keskin tutarsızlık gösterdi ([[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas ve ark., 2026]]).

**Akademik destek erişimi.** Derse özgü erişim sistemleri, bir insana sorması en olası olmayan öğrencileri hedefler. Tek bir programlama modülünün onaylanmış materyallerinden oluşturulan Beacon, yüksek alaka değerlendirmeleri (%89) çekti ve çoğu öğrenci tarafından öğrenmelerini desteklediği yerine değiştirdiği bulundu (%66,7); 15 öğrenci ve 4 akademisyenin katıldığı küçük bir değerlendirmede ([[course-specific-rag-help-seeking-higher-ed-2026|Zhou ve ark., 2026]]). Özel ders alımı kendi sorunudur: güçlük çeken öğrenciler için sanal özel ders katmanının iki yıllık rastgele denemesi, alımı öğrenmeden ayrı test etmek zorunda kaldı; çünkü desteğe ihtiyacı olan öğrencilere ulaşmak, onu sağlamakla aynı şey değildir ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Fryer ve ark., 2026]]).

**İdari yardım.** Liderlik ve yönetim, YZ'nin eğitim liderliğinde nereye indiğini eşleyen on alanlı bir taksonomiyle kendi uygulama alanı olarak çalışılır ([[sposato-ai-educational-leadership-taxonomy-2025|Sposato, 2025]]). Kurum tarafından işletilen hizmetler, danışmanlığın ötesine geçerek sağlığa uzanır: bütünleşik bir kampüs esenliği çerçevesi, geri bildirimin toplanma biçimini iyileştirme yoluyla önlemeyi, ruh sağlığı tespiti yoluyla müdahaleyle eşleştirir ([[ai-campus-wellbeing-tools|Tang, 2026]]). Sertifikasyon buna komşudur: bir ajan bir öğrencinin adına bir kursu tamamlayabildiğinde, "kazanıldı" diyen bir sertifika anlamını yitirir; bu da tamamlama kayıtlarını bir tasarım sorununa dönüştürür ([[credentials-carry-evidence-ai-agents-2026|Srivastava, 2026]]).

## Tahminden desteğe

Risk tahmini — erken uyarı sistemleri, okulu bırakma modelleri, riskli sınıflandırıcılar — bu bilgi tabanında **[[learning-analytics]]** alanıdır ve bu sayfa *öngörücü analitiği* aynı şey olarak ele alır. Modelleme çalışması önemlidir: denetimli sınıflandırıcılar, akademik performans, demografik ve kayıt kayıtlarından okulu bırakmadan önce öğrencileri tanımlar ([[at-risk-students-ml-prediction|Gheisari & Salarian, 2026]]); çift katmanlı bir çerçeve, on üniversiteden psikografik anket verisiyle Codeforces davranış günlüklerini (n = 1.816) birleştirerek rekabetçi programlamada terki öngörür ([[predicting-attrition-competitive-programming|Alam ve ark., 2026]]); ve birleşik bir mimari, ham öğrenci verisi paylaşılmadan kurumlar arası performans ve okulu bırakmayı öngörerek OULAD üzerinde merkezileşmiş modele karşı 0,925 olana AUC = 0,918'e ulaşır ([[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch ve ark., 2026]]). Kesinlik-eğitimi vizyonu, bu mantığı öğrenci dijital ikizlerine ve "önleyici öğrenci başarısı"na uzatır ([[precision-education-student-digital-twins-2026|Han ve ark., 2026]]).

Buraya *ait* olan, puandan sonraki adımdır: **destek dağılımı**. İki bulgu onun sınırlarını belirler. Birincisi, sıralama-kalibrasyon ayrımı — birleşik risk modelleri dağılımsal kayma altında AUC'lerini korurken kalibrasyonları belirgin biçimde bozuldu; böylece öğrencileri hâlâ doğru sıralayan bir model, her birinin yardıma ihtiyaç duyma olasılığı konusunda yanlış olabilir. İkincisi, olanaklı kılan çalışma: öğrenme analitiğinden müdahaleye ilişkin uluslararası bir Delphi ve AHP/SNAP analizi, yedi olanaklı kılan etken belirledi ve **kurumsal stratejik yönelimi** en yükseğe (öncelik 0,2072) ve diğerleri üzerinde en etkili olana (PageRank 0,2430) yer vererek, tıkanıklığı kurumsal planlamada değil modellerde buldu ([[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić, 2026]]). 14.003 öğrenci kaydının altı profile davranışsal kümlenmesi, önerilen öğrenme nesnelerine eşlenmiş olarak bu sayfanın işaret ettiği tavsiye katmanıdır ([[najem-behavioral-clustering-adaptive-learning-recommendation-2026|Najem ve ark., 2026]]).

Bir bütünlük sonucu aynı boru hattına katılır. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]], dönemin başındaki LMS izlerinden YZ destekli kopya çekme riskini (AUC 0,763) öngörür ve buna yalnızca düşük riskli ulaşım çalışmalarıyla yanıt verilmesini önerir; eşik, suçlama yerine erişim için seçilir: 0,30'a düşürüldüğünde 23 yüksek riskli öğrenciden 21'i tanımlandı, %60 kesinlikle.

## Sonuç merdiveni: her ölçüt gerçekte ne anlama gelir

"Başarı" sözcüğü en az beş farklı ölçümü gizler ve YZ desteği bunları eşit biçimde harekete geçirmez. Onları ayırt etmek, bu sayfanın yapabileceği en yararlı şeydir.

- **Görev tamamlama**, öğrencinin denetlediği ve kurumun günler içinde gözlemlediği tek, tarihli ve ikili bir eylemdir — bir süreye kadar kaydolmak, bir form doldurmak, Erken Başlangıç'a katılmak. Dürtülerin işe yaradığı yer burasıdır ve etkiler büyük ve anında olabilir (CSUN kayıt hatırlatmasında 34 puan, sonra 2).
- **Krediler (kayıtlı ve kazanılan birimler)** birikimlidir ve ders erişilebilirliğine, sıralamaya ve öğrencinin göze alabileceği dönem sayısına bağlıdır. CSUN değerlendirmesinde, kayıtlı, kazanılan veya kümülatif olarak kazanılan birimler üzerinde anlamlı bir muamele etkisi görülmedi.
- **Devam** dönemler arası sürekliliktir — dönem sırasına göre kayıt — ve o da harekete geçmedi; 0,05 standart sapma veya daha büyük etkileri tespit etmeye gücü yeten N = 8,708'de.
- **Kalıcılık**, devamın ürettiği kurumsal orandır ve genellikle program veya kohort düzeyinde raporlanır. Kurs düzeyinde DFW oranları, bu literatürdeki en öncü göstergeye en yakın olandır ve mütevazı biçimde hareket etti (Georgia State denemesinin her kursunda −3 puan).
- **Mezuniyet** nihai, çok yıllı sonuçtur. CSUN çalışmasında dördüncü yılda kontrol grubunun mezuniyet ortalaması 0,190'du ve üzerindeki muamele etkisi istatistiksel olarak anlamlı değildi.

Yazarların bu kalıbın açıklaması sayfanın merkezi iddiasıdır: bir hatırlatma, ayrık ve yakın vadeli bir karar üzerinde etki eder; devam ve GPA ise birikimlidir ve öğretim, mali durum, istihdam, aile koşulları ve önceki hazırlık tarafından şekillenir. Şu sonuca varırlar: bu tür bir araç aracılığıyla iletişim, **tek başına** bunları değiştirmek için yetersiz olabilir — ve sıfır sonuçlar güçsüz değil, kesindir. Erken kayıt, öğrenme sonuçlarının harekete geçmediği yerlerde bile personel ve yer planlaması için kurumsal değer taşır.

## Eşitlik ve bir puana dayanarak hareket etmenin riskleri

Destek sistemleri öğrenciler üzerinde hareket eder, bu da hata kiplerini bir özel ders hocasının hatalarından farklı kılar. 168.550 öğrenci kaydından oluşturulmuş, satıcı denetimli bir erken uyarı sisteminin çoğaltılmış bir sürümü üzerinde altı sonradan adillik müdahalesinin bir gerilim testi, müdahalelerin vaat ettikleri adilliği sağlamadığını buldu ([[fairness-theatre-early-warning-systems-2026|McConvey ve ark., 2026]]). Bir öğrenci savunusu incelemesi, risk yüzeyini kabul, kayıt ve mali yardım ile **öğrenci başarısı hizmetleri** çevresinde düzenler — kurumsal YZ'nin en doğrudan öğrencilere yansıdığı alanlar ([[students-at-stake-ai-deployment-risks-2026|Student Defense, 2026]]). Gizlilik ve eşitlik burada rastlantısal değil yapısaldır: birleşik öğrenme, kurumlar arası öğrenci kaydı paylaşımının kabul edilemez olmasından dolayı var olur ve CSUN programındaki insan döngüsü bileşeni — sohbet robotunun yanıtlayamadıklarını yöneticilerin yanıtlaması, sonra yanıtı bilgi tabanına geri katması — yazarların e-postayı ve telefonu yok sayan öğrencilere ulaşan şey olduğunu savunduğu unsurdur.

## Kurumsal koşullar

Bu literatürde kalıcılık teknik değil örgütsel bir özelliktir. CSUN programı dört yıl ayakta kaldı; çünkü kanal merkezi olarak sahiplenildi, Lisans Öncesi Çalışmalar Ofisi ve Kayıt İşleri Ofisi'nin ortak gözetiminde yürütüldü ve tutarlı bir ses için tek bir iletişim uzmanı tarafından yazıldı. Hedeflemesi eşit biçimde örgütsel bir nedenden dolayı zayıfladı: öğrenci verisi merkezileştirilmediğinden, bir mali yardım hatırlatması bir ofisin başvurmamışları belirlemesini, diğerinin alt kümeyi aktarmasını gerektirdi; bu sürtünme, hedefli kampanyaların AY2018-19'da tüm kampanyaların %36'sından AY2022-23'e kadar %6'sına düşmesi için yeterince yükümlüydü. İşin nerede durduğu, verinin kimin sahibi olduğu ve birimler arası koordinasyonun sürdürülebilir olup olmadığı, bir destek sisteminin gerçekte neler yapabileceğine karar verir — bu sayfanın [[change-management]], [[governance]] ve [[educational-policy-ai]]'i, dağıtımı bir BT kararı olarak ele almak yerine yönler olarak taşımasının nedeni budur.

## İlgili kavramlarla bağlantılar

Öğrenci desteği, öğrenciye dönük karşılık olarak [[student-experience]] ile bağlantılıdır — kurumun tarafından değil öğrencinin tarafından görülen aynı teknolojiler — ve desteğe ihtiyaç duyan öğrencilerin onu gerçekten elde ettiği mekanizma için [[help-seeking]] ile; ulaşım çalışmaları ve derse özgü asistanların ikisi de sorma maliyetini düşürme girişimidir. [[learning-analytics]], dağılımı besleyen tahmini, [[student-modeling]] ile [[knowledge-tracing]] altındaki modelleri ve [[recommender-systems-and-learning-paths]] tavsiye katmanını sahiplenir. Kampüs ruh sağlığı ve önleme sistemleri aracılığıyla [[well-being]] ile, tamamlamayı izleyen sonuç olarak [[career-development-and-readiness]] ile, puana dayanarak hareket etmenin riskleri aracılığıyla [[equity-in-ai-education]] ve [[privacy]] ile ve bunların hiçbirinin sürdürülüp sürdürülmeyeceğine karar veren roller ve süreçler olarak [[administrator]], [[stakeholders]] ve [[change-management]] ile bağlantılıdır. [[learning-gains]] komşu ölçüm düğümüdür: bu sayfanın sonuçları öğretimsel değil idaridir ve ikisi birlikte harekete geçmez.

## Bağlı kavramlar

- [[higher-ed]] — bu sayfanın altında yer aldığı sektör çatısı
- [[student-experience]] — YZ'nin öğrencinin kendi deneyimine nasıl yansıdığı
- [[learning-gains]] — öğrenmenin gerçekleşip gerçekleşmediği, bu sayfanın ölçmediği öğretimsel sonuç
- [[learning-analytics]] — tahmin, erken uyarı ve öngörücü analitik
- [[student-modeling]] — risk tahmininin altındaki modelleme katmanı
- [[knowledge-tracing]] — ayrıntılı beceri ve ustalık tahmini
- [[recommender-systems-and-learning-paths]] — dersler, kaynaklar ve yollar önermek
- [[help-seeking]] — öğrencilerin destek istemeye nasıl geldiği
- [[well-being]] — kampüs ruh sağlığı, önleme ve müdahale
- [[career-development-and-readiness]] — tamamlamadan sonraki sonuç
- [[administrator]] — destek sistemlerini sahiplenen ve işleten rol
- [[stakeholders]] — kurumsal YZ kararlarında söz sahibi olanlar
- [[change-management]] — pilot sonrasında programı sürdürmek
- [[governance]] — kurumsal YZ için politika ve gözetim
- [[educational-policy-ai]] — kurumsal dağıtım için politika bağlamı
- [[equity-in-ai-education]] — sistemin kime ulaştığı ve kimi kaçırdığı
- [[privacy]] — öğrenci kayıtları, veri paylaşımı ve birleşik yaklaşımlar
- [[human-in-the-loop-ai]] — otomatik bir destek akışı içinde insan yargısı
- [[rct]] — buradaki en güçlü kanıtın arkasındaki tasarım

## Bağlı makaleler

- [[mata-sustaining-ai-enabled-student-support-2026]] — bir üniversite destek sohbet robotunun dört yıllık rastgele değerlendirmesi: görev tamamlama harekete geçti, mezuniyet ve GPA geçmedi
- [[chatbot-outreach-course-performance-2026]] — önceden kaydedilmiş çok dönemli ulaşım denemesi: daha yüksek A/B oranları, mütevazı DFW kaymaları, bir demografik istisna
- [[lopez-pernas-llm-appropriate-student-support-2026]] — 4.500 sentetik senaryo: destek önerilerinde öğrenci ihtiyacına sınırlı duyarlılık ve modeller arası tutarsızlık
- [[sc2r-counterfactual-recourse-educational-2026]] — eyleme dönüştürülebilirlik açığı: kaynak yönlendirme uygulanabilir ve denetlenebilir olmalı, yalnızca model geçerli değil
- [[fairness-theatre-early-warning-systems-2026]] — 168.550 kayıttan oluşturulmuş satıcı bir erken uyarı sistemi üzerinde altı sonradan adillik müdahalesi
- [[at-risk-students-ml-prediction]] — okulu bırakmadan önce öğrencileri tanımlayan denetimli sınıflandırıcılar
- [[predicting-attrition-competitive-programming]] — terki öngören davranış günlükleri artı psikografik anket
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — ham öğrenci verisi paylaşılmadan kurumlar arası birleşik risk modellemesi
- [[precision-education-student-digital-twins-2026]] — bir vizyon olarak dijital ikizler ve "önleyici öğrenci başarısı"
- [[learning-analytics-to-educational-interventions-2026]] — analitikten müdahaleye döngüyü kapatmak için yedi olanaklı kılan etken
- [[course-specific-rag-help-seeking-higher-ed-2026]] — yardım isteme maliyetini düşürmeyi hedefleyen derse özgü bir asistan
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — özel ders alımı öğrenmeden ayrı test edildi
- [[najem-behavioral-clustering-adaptive-learning-recommendation-2026]] — önerilen öğrenme nesnelerine eşlenen altı davranış profili
- [[trace-course-grade-prediction-2026]] — planlama için dersler ve notların birlikte tahmini
- [[zhang-ml-student-progress-programming-2026]] — yorumlanabilir modül düzeyinde ilerleme tahmini
- [[ai-higher-ed-service-delivery-systematic-review-2026]] — yükseköğretimde YZ, liderlik ve hizmet sunumuna dair 155 çalışma
- [[sposato-ai-educational-leadership-taxonomy-2025]] — eğitim liderliğinde YZ'nin on alanlı taksonomisi
- [[students-at-stake-ai-deployment-risks-2026]] — öğrenci tarafı risk yüzeyi: kabul ve yardım, öğrenci başarısı hizmetleri ve öğretim
- [[ai-campus-wellbeing-tools]] — önleme ve müdahale arasında uzanan kampüs esenliği desteği
- [[coursegraph-cs-course-comparison-2026]] — aktarma kredisi ve mobilite için ders denkliği
- [[credentials-carry-evidence-ai-agents-2026]] — bir ajan işi yapabildiğinde tamamlama kaydının ne anlama geldiği
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — YZ destekli kopya çekme riskini erken öngörmek ve düşük riskli ulaşım çalışmaları için eşik ödünleşimi
