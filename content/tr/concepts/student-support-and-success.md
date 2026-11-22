---
title: "Öğrenci Desteği ve Başarısı"
created: "2026-10-14T22:05:00-04:00"
updated: "2026-11-21T17:00:00-05:00"
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
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-21"
    agent: hermes-agent
translation_of: concepts/student-support-and-success
source_updated: "2026-11-19T10:16:37-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
connected_concepts: [higher-ed, student-experience, learning-gains, learning-analytics, student-modeling, knowledge-tracing, recommender-systems-and-learning-paths, help-seeking, well-being, career-development-and-readiness, administrator, stakeholders, change-management, governance, educational-policy-ai, equity-in-ai-education, privacy, human-in-the-loop-ai, rct]
connected_articles: [cefa-ai-learner-support-review-2026, mata-sustaining-ai-enabled-student-support-2026, chatbot-outreach-course-performance-2026, lopez-pernas-llm-appropriate-student-support-2026, sc2r-counterfactual-recourse-educational-2026, fairness-theatre-early-warning-systems-2026, at-risk-students-ml-prediction, predicting-attrition-competitive-programming, villegas-ch-federated-explainable-learning-analytics-2026, precision-education-student-digital-twins-2026, learning-analytics-to-educational-interventions-2026, course-specific-rag-help-seeking-higher-ed-2026, virtual-tutoring-computer-assisted-learning-takeup-2026, najem-behavioral-clustering-adaptive-learning-recommendation-2026, trace-course-grade-prediction-2026, zhang-ml-student-progress-programming-2026, ai-higher-ed-service-delivery-systematic-review-2026, sposato-ai-educational-leadership-taxonomy-2025, students-at-stake-ai-deployment-risks-2026, ai-campus-wellbeing-tools, shastry-gray-empathy-offloading-2026, coursegraph-cs-course-comparison-2026, credentials-carry-evidence-ai-agents-2026, akcapinar-ai-cheating-risk-lms-prediction-2026, rienties-institutional-ai-assistant-co-design-2026, gupta-ai-virtual-assistant-adoption-engineering-2026, ai-conversational-interfaces-information-seeking-2026]
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Öğrenci Desteği ve Başarısı** — öğrencilerin okulda kalmasına, ilerlemesine ve mezun olmasına yardım etmenin kurumsal yanı işidir: **danışmanlık, idari yardım, ulaşım çalışmaları, yönlendirme ve kıt destek kapasitesinin dağılımı**. Kurumsal destek, bir kursun *içinde* ne olduğundan çok, kurumların öğrencilere *yaptığı* şeydir. [[higher-ed|Yükseköğretim]], sektör için daha geniş çatıdır ve [[student-experience]] YZ'nin öğrencinin kendi deneyimine nasıl yansıdığını kapsar; [[learning-gains]] ise öğrenmenin gerçekleşip gerçekleşmediğini ölçer. Ayırt edici bulgu şudur: YZ desteği güvenilir biçimde **görev tamamlamayı** harekete geçirir — öğrencinin denetiminde olan, tarihli ve ikili bir eylem, kurumun da gözlemleyebildiği — ama **devam, kredi ve mezuniyet** neredeyse dokunulmadan kalır. Bu sonuçları birbirinden ayırmak, asıl meseledir.

## Dikkate Alınması Gereken Sorular

- Hangi sonucu harekete geçirmeye çalışıyorsunuz? Kayıt hatırlatması ve bir kalıcılık programı, farklı kanıtlara sahip farklı müdahalelerdir; buradaki araştırma, birinin diğerini satın almadığını düşündürter.
- Bir model bir öğrenciyi riskli olarak işaretlerse, sonra ne olur? Kim harekete geçer, hangi kapasiteyle ve önerinin yalnızca doğru değil uygulanabilir kılacak şey nedir?
- Destek kapasitesi sınırlıdır. YZ onu sıraladığında veya dağıttığında, bir insan danışmanının zaten fark edeceği öğrencilere ne olur?
- Otomatik bir mesaj, yönlendirme veya risk puanı yanlış olduğunda kim sorumludur? Sonucu öğrenci görür; sistemi kurum sahiplenir.
- Destek veriniz seyahat ediyor mu? Ofisler arası paylaşım, hedeflemenin olanaklı kılmasının yanı sıra hedeflemenin sessizce durmasının en yaygın nedenidir.

## Giriş

Öğrenci desteği, ilişkinin kurumsal tarafında yer alır. İşi danışmanlık, ulaşım çalışmaları, yönlendirme ve sınırlı insan ile mali kapasitenin dağılımıdır; kanıt tabanı ise idari kayıtlar, kayıt olayları, kazanılan krediler ve öğrencinin dönüp dönmediğidir. [[generative-ai|Üretici YZ]], öğretime girdiğinden sonra bu alana girdi ve buradaki literatürün çoğu **üretici olmayan** sistemlerle — kısa mesaj [[conversational-ai|sohbet robotları]], erken uyarı modelleri, birleşik risk tahmini — ilgilidir; üretici araçlar ise danışman, asistan ve bilgi tabanı yanıtlayıcı olarak gelmektedir.

Anahtar ayrım, **bir dürtünün neler yapabileceği** ile **bir yörünge için nelerin gerektiği** arasındadır. Destek teknolojileri tarihli, ikili bir kararda üstündür: şu tarihe kadar kayıt olun, bu form doldurulsun, Erken Başlangıç'a katılınsın. Birikimli sonuçlar — devam, kredi, mezuniyet — ile çok daha zorlanırlar; bunları öğretim, mali durum, istihdam, aile koşulları ve önceki hazırlık şekillendirir. Bu konudaki en güçlü kanıt, kaydı keskin biçimde harekete geçiren ama mezuniyeti hiç etkilemeyen dört yıllık bir rastgele değerlendirmeden gelir.

## Destek işlevleri

Araştırma beş işlevde kümelenir ve küme sınırları önemlidir, çünkü farklı kanıtlar taşırlar.

YZ destekli öğrenen desteği üzerine 61 çalışmalık bir inceleme, alanın [[adaptive-learning|uyarlanabilir sistemler]] ve [[personalized-learning|kişiselleştirme]] (41 kullanım) ile profilleme ve tahmin (30) üzerinde yoğunlaştığını, sohbet robotları ve önericilerin kabul ile rutin sorguları üstlendiğini bulmuştur. Boşlukları da bulmuştur: hiçbir müdahale öğrenen geçiş aşamasını ele almamış ve yalnızca iki çalışma bir öğrenci alt grubunu adlandırmıştır; bu yüzden çoğu sistemdeki jenerik öğrenen istatistiksel bir ortalamaydı ([[cefa-ai-learner-support-review-2026|Cefa ve ark., 2026]]).

**Ulaşım ve iletişim.** Kurumlar öğrencilere ölçekte mesaj gönderir ve en güçlü değerlendirmeler bunun bir şeyi değiştirip değiştirmediğini test eder. California State University, Northridge'daki üretici olmayan bir kısa mesaj sohbet robotu olan CSUNny'nin dört yıllık rastgele çalışması, iki lisans kohortunu (N = 8.708) sekiz dönem boyunca izledi ([[mata-sustaining-ai-enabled-student-support-2026|Mata, Russell & Page, 2026]]). 31 Temmuz 2018'de gönderilen kayıt hatırlatması, muamele gören öğrencilerin 16 Ağustos'a kadar kaydolma olasılığını 34 puan artırdı ve 15 Eylül'e kadar yalnızca 2 puan artırdı; Erken Başlangıç hatırlatmaları 7 Haziran'a kadar 11 puan, 22 Haziran'a kadar 20 puan daha fazla kayıt üretti. Hâlihazırda kabul vardı: yıllık kayıt dışı kalma oranları hiçbir zaman %4'ü aşmadı. Georgia State Üniversitesi'nde önceden kaydedilmiş çok dönemli bir deneme, iki büyük asenkron kurstaki öğrencileri (N = 1.568 ve N = 915) haftada iki-üç özelleştirilmiş mesajla dürtüp, A veya B alma olasılığını kontrollerin %61'ine karşı dört puan artırdı ve her kursta DFW oranlarını yaklaşık üç puan kaydırdı ([[chatbot-outreach-course-performance-2026|Meyer ve ark., 2026]]).

**Danışmanlık ve akademik planlama.** Ders ve not tahmini, planlama girdisini sağlar — bir model bir öğrencinin hangi dersleri alacağını ve hangi notları alacağını birlikte tahmin eder ([[trace-course-grade-prediction-2026|Savala, 2026]]), bir diğeri büyük çevrimiçi programlama kurslarında modül düzeyinde ilerlemeyi doğal olarak yorumlanabilir bir karar ağacıyla tahmin eder ([[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska, 2026]]). Aktarma kredisi kendi başına bir danışmanlık sorunudur: CourseGraph, ders içeriğini bilgi grafikleri olarak modelleyerek mobil öğrenciler için dış ders denkliklerini değerlendirir ([[coursegraph-cs-course-comparison-2026|Nijdam ve ark., 2026]]). Kurum düzeyinde, yükseköğretimde YZ ve hizmet sunumu üzerine 155 çalışmanın bir derlemesinde, öğrenme analitiğinin 46 çalışma (%29,7) ile en yaygın uygulama olduğunu; sohbet robotları ve sanal asistanların 31 (%20,0) ve öngörücü analitiğin 29 (%18,7) ile önünde olduğunu buldu ([[ai-higher-ed-service-delivery-systematic-review-2026|Nyamboga, 2026]]).

**Yönlendirme ve destek dağılımı.** Tahmin bir plan değildir ve aradaki boşluk, alanın en keskin eleştirisinin durduğu yerdir. SC2R bunu **eyleme dönüştürülebilirlik açığı** olarak biçimselleştirir: bir risk puanı, yalnızca önerileri anlamsal olarak uygulanabilir ve makinece denetlenebilir olduğunda — yalnızca model geçerli değil, zamanlama, bütçe, değiştirilemezlik ve erişilebilirlik kısıtlarına tabi olduğunda — karar desteğine dönüşür ([[sc2r-counterfactual-recourse-educational-2026|Le, Abel & Laforge, 2026]]). Modellerin desteği iyi dağıtıp dağıtamayacağı ampirik olarak tartışmalıdır: 4.500 sentetik öğrenci senaryosu için destek planları önermeleri istendiğinde, üç LLM öğrenci ihtiyacına sınırlı duyarlılık ve modeller arasında keskin tutarsızlık gösterdi ([[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas ve ark., 2026]]).

**Akademik destek erişimi.** Derse özgü erişim sistemleri, bir insana sorması en olası olmayan öğrencileri hedefler. Tek bir programlama modülünün onaylanmış materyallerinden oluşturulan Beacon, yüksek alaka değerlendirmeleri (%89) çekti ve çoğu öğrenci tarafından öğrenmelerini desteklediği yerine değiştirdiği bulundu (%66,7); 15 öğrenci ve 4 akademisyenin katıldığı küçük bir değerlendirmede ([[course-specific-rag-help-seeking-higher-ed-2026|Zhou ve ark., 2026]]). Özel ders alımı kendi sorunudur: güçlük çeken öğrenciler için sanal özel ders katmanının iki yıllık [[rct|rastgele denemesi]], alımı öğrenmeden ayrı test etmek zorunda kaldı; çünkü desteğe ihtiyacı olan öğrencilere ulaşmak, onu sağlamakla aynı şey değildir ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Fryer ve ark., 2026]]).

**İdari yardım.** Liderlik ve yönetim, YZ'nin eğitim liderliğinde nereye indiğini eşleyen on alanlı bir taksonomiyle kendi uygulama alanı olarak çalışılır ([[sposato-ai-educational-leadership-taxonomy-2025|Sposato, 2025]]). Kurum tarafından işletilen hizmetler, danışmanlığın ötesine geçerek sağlığa uzanır: bütünleşik bir kampüs esenliği çerçevesi, geri bildirimin toplanma biçimini iyileştirme yoluyla önlemeyi, ruh sağlığı tespiti yoluyla müdahaleyle eşleştirir ([[ai-campus-wellbeing-tools|Tang, 2026]]). Sertifikasyon buna komşudur: bir ajan bir öğrencinin adına bir kursu tamamlayabildiğinde, "kazanıldı" diyen bir sertifika anlamını yitirir; bu da tamamlama kayıtlarını bir tasarım sorununa dönüştürür ([[credentials-carry-evidence-ai-agents-2026|Srivastava, 2026]]).

**Kurum içi bir asistan, kamuya açık sohbet robotuyla yetenekte değil erişilebilirlikte yarışır.** Açık Üniversite’de beş ortak tasarım çalışmasında (315 öğrenci, 20 personel), önerilen i-AIDA’nın en güçlü satış noktası 96 öğrencilik bir ankette %73’ünün onayladığı günün her saati erişimdi ve doğrudan kullanım talebi 18 öğrenciden 9’undan 18’den 16’sına taşıdı (d = ,81) ([[rienties-institutional-ai-assistant-co-design-2026|Rienties ve ark., 2026]]). Öğrenciler onu diğer üretken araçlara karşı 10 üzerinden 7,58 olarak derecelendirdi; yaklaşık %10–15’i ise [[usability-research|kullanılabilirlikten]] değil değerlerden itiraz ederek YZ destekli çalışmayı meşru öğrenmenin seyreltilmesi olarak nitelendirdi.

Bir YZ destek kanalının yerinden ettiği şey de aynı muhasebeyi hak eder. Dört çalışmada (N = 249, 494, 743 ve 737), YZ’nin duygusal destek sağlama kapasitesine inanç, bu desteği ona devretme isteğini yükseltmiş ve etki tamamen algılanan kapasite üzerinden yürümüştür (toplam etki c = 0,83; dolaylı etki ab = 0,73) ([[shastry-gray-empathy-offloading-2026|Shastry & Gray, 2026]]). Davranışsal bir ölçümde, devretmeyeceğini söyleyen katılımcılar daha az [[empathy|empati]] sözcüğü seçmiştir; bu yüzden öğrencileri bir YZ esenlik kanalına yönlendirmek, [[self-report-measures|öz bildirimin]] göstermediği biçimlerde insan desteğini eksiltebilir.

## Tahminden desteğe

Risk tahmini — erken uyarı sistemleri, okulu bırakma modelleri, riskli sınıflandırıcılar — **[[learning-analytics]]** alanıdır ve *öngörücü analitik* aynı şey olarak ele alınır. Modelleme çalışması önemlidir. Denetimli sınıflandırıcılar, akademik performans, demografik ve kayıt kayıtlarından okulu bırakmadan önce öğrencileri tanımlar ([[at-risk-students-ml-prediction|Gheisari & Salarian, 2026]]); çift katmanlı bir çerçeve, on üniversiteden psikografik anket verisiyle Codeforces davranış günlüklerini (n = 1.816) birleştirerek rekabetçi programlamada terki öngörür ([[predicting-attrition-competitive-programming|Alam ve ark., 2026]]); ve birleşik bir mimari, ham öğrenci verisi paylaşılmadan kurumlar arası performans ve okulu bırakmayı öngörerek OULAD üzerinde merkezileşmiş modele karşı 0,925 olana AUC = 0,918'e ulaşır ([[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch ve ark., 2026]]). Kesinlik-eğitimi vizyonu, bu mantığı öğrenci dijital ikizlerine ve "önleyici öğrenci başarısı"na uzatır ([[precision-education-student-digital-twins-2026|Han ve ark., 2026]]).

Buraya *ait* olan, puandan sonraki adımdır: **destek dağılımı**. İki bulgu onun sınırlarını belirler. Birincisi, sıralama-kalibrasyon ayrımı — birleşik risk modelleri dağılımsal kayma altında AUC'lerini korurken kalibrasyonları belirgin biçimde bozuldu; böylece öğrencileri hâlâ doğru sıralayan bir model, her birinin yardıma ihtiyaç duyma olasılığı konusunda yanlış olabilir. İkincisi, olanaklı kılan çalışma: öğrenme analitiğinden müdahaleye ilişkin uluslararası bir Delphi ve AHP/SNAP analizi, yedi olanaklı kılan etken belirledi ve **kurumsal stratejik yönelimi** en yükseğe (öncelik 0,2072) ve diğerleri üzerinde en etkili olana (PageRank 0,2430) yer vererek, tıkanıklığı kurumsal planlamada değil modellerde buldu ([[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić, 2026]]). 14.003 öğrenci kaydının altı profile davranışsal kümlenmesi, önerilen öğrenme nesnelerine eşlenmiş olarak bu sayfanın işaret ettiği tavsiye katmanıdır ([[najem-behavioral-clustering-adaptive-learning-recommendation-2026|Najem ve ark., 2026]]).

Bir bütünlük sonucu aynı boru hattına katılır. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]], dönemin başındaki LMS izlerinden YZ destekli kopya çekme riskini (AUC 0,763) öngörür ve buna yalnızca düşük riskli ulaşım çalışmalarıyla yanıt verilmesini önerir; eşik, suçlama yerine erişim için seçilir: 0,30'a düşürüldüğünde 23 yüksek riskli öğrenciden 21'i tanımlandı, %60 kesinlikle.

## Sonuç merdiveni: her ölçüt gerçekte ne anlama gelir

"Başarı" sözcüğü en az beş farklı ölçümü gizler ve YZ desteği bunları eşit biçimde harekete geçirmez. Onları ayırt etmek, en yararlı analitik hamledir.

- **Görev tamamlama**, öğrencinin denetlediği ve kurumun günler içinde gözlemlediği tek, tarihli ve ikili bir eylemdir — bir süreye kadar kaydolmak, bir form doldurmak, Erken Başlangıç'a katılmak. Dürtülerin işe yaradığı yer burasıdır ve etkiler büyük ve anında olabilir (CSUN kayıt hatırlatmasında 34 puan, sonra 2).
- **Krediler (kayıtlı ve kazanılan birimler)** birikimlidir ve ders erişilebilirliğine, sıralamaya ve öğrencinin göze alabileceği dönem sayısına bağlıdır. CSUN değerlendirmesinde, kayıtlı, kazanılan veya kümülatif olarak kazanılan birimler üzerinde anlamlı bir muamele etkisi görülmedi.
- **Devam** dönemler arası sürekliliktir — dönem sırasına göre kayıt — ve o da harekete geçmedi; 0,05 standart sapma veya daha büyük etkileri tespit etmeye gücü yeten N = 8,708'de.
- **Kalıcılık**, devamın ürettiği kurumsal orandır ve genellikle program veya kohort düzeyinde raporlanır. Kurs düzeyinde DFW oranları, bu literatürdeki en öncü göstergeye en yakın olandır ve mütevazı biçimde hareket etti (Georgia State denemesinin her kursunda −3 puan).
- **Mezuniyet** nihai, çok yıllı sonuçtur. CSUN çalışmasında dördüncü yılda kontrol grubunun mezuniyet ortalaması 0,190'du ve üzerindeki muamele etkisi istatistiksel olarak anlamlı değildi.

Yazarların bu kalıbın açıklaması merkezi iddiadır: bir hatırlatma, ayrık ve yakın vadeli bir karar üzerinde etki eder; devam ve GPA ise birikimlidir ve öğretim, mali durum, istihdam, aile koşulları ve önceki hazırlık tarafından şekillenir. Şu sonuca varırlar: bu tür bir araç aracılığıyla iletişim, **tek başına** bunları değiştirmek için yetersiz olabilir — ve sıfır sonuçlar güçsüz değil, kesindir. Erken kayıt, öğrenme sonuçlarının harekete geçmediği yerlerde bile personel ve yer planlaması için kurumsal değer taşır.

Bir destek kanalı, bu merdivenin hiçbir basamağını harekete geçirmeden kurumsal iş yükünü harekete geçirebilir. 800'den fazla öğrenciye sahip bir birinci sınıf mühendislik tasarım dersinde, öğrenci başına yardım formusu soruları 1,16'dan 0,5'e düştü, bu %57'lik bir azalmadır; oysa sorun türü dağılımı %29 ödev, %33 not, %27 yazılım ve %11 diğer olarak kaldı ([[gupta-ai-virtual-assistant-adoption-engineering-2026|Gupta ve ark., 2026]]). Yazarlar, bunun bir başarı sonucu değil, iş yükü sonucu olduğunu açıkça belirtir; bu, bir destek iş vakasının genellikle atladığı muhasebedir.

## Eşitlik ve bir puana dayanarak hareket etmenin riskleri

Destek sistemleri öğrenciler üzerinde hareket eder, bu da hata kiplerini bir özel ders hocasının hatalarından farklı kılar. 168.550 öğrenci kaydından oluşturulmuş, satıcı denetimli bir erken uyarı sisteminin çoğaltılmış bir sürümü üzerinde altı sonradan adillik müdahalesinin bir gerilim testi, müdahalelerin vaat ettikleri adilliği sağlamadığını buldu ([[fairness-theatre-early-warning-systems-2026|McConvey ve ark., 2026]]). Bir öğrenci savunusu incelemesi, risk yüzeyini kabul, kayıt ve mali yardım ile **öğrenci başarısı hizmetleri** çevresinde düzenler — kurumsal YZ'nin en doğrudan öğrencilere yansıdığı alanlar ([[students-at-stake-ai-deployment-risks-2026|Student Defense, 2026]]). Gizlilik ve eşitlik burada rastlantısal değil yapısaldır: birleşik öğrenme, kurumlar arası öğrenci kaydı paylaşımının kabul edilemez olmasından dolayı var olur ve CSUN programındaki [[human-in-the-loop-ai|insan döngüsü]] bileşeni, yazarların e-postayı ve telefonu yok sayan öğrencilere ulaşan şey olduğunu savunduğu unsurdur. Yöneticiler sohbet robotunun yanıtlayamadıklarını yanıtlar, sonra yanıtı sohbet robotunun beslendiği malzemeye ekler.

## Kurumsal koşullar

Bu literatürde kalıcılık teknik değil örgütsel bir özelliktir. CSUN programı dört yıl ayakta kaldı; çünkü kanal merkezi olarak sahiplenildi, Lisans Öncesi Çalışmalar Ofisi ve Kayıt İşleri Ofisi'nin ortak gözetiminde yürütüldü ve tutarlı bir ses için tek bir iletişim uzmanı tarafından yazıldı. Hedeflemesi eşit biçimde örgütsel bir nedenden dolayı zayıfladı: öğrenci verisi merkezileştirilmediğinden, bir mali yardım hatırlatması bir ofisin başvurmamışları belirlemesini, diğerinin alt kümeyi aktarmasını gerektirdi; bu sürtünme, hedefli kampanyaların AY2018-19'da tüm kampanyaların %36'sından AY2022-23'e kadar %6'sına düşmesi için yeterince yükümlüydü. İşin nerede durduğu, verinin kimin sahibi olduğu ve birimler arası koordinasyonun sürdürülebilir olup olmadığı, bir destek sisteminin gerçekte neler yapabileceğine karar verir — bu nedenle iş, yalnızca dağıtıma değil, [[change-management]], [[governance]] ve [[educational-policy-ai]] unsurlarına bağlıdır.

## İlgili kavramlarla bağlantılar

Öğrenci desteği, öğrenciye dönük karşılık olarak [[student-experience]] ile bağlantılıdır — kurumun tarafından değil öğrencinin tarafından görülen aynı teknolojiler — ve desteğe ihtiyaç duyan öğrencilerin onu gerçekten elde ettiği mekanizma için [[help-seeking]] ile; ulaşım çalışmaları ve derse özgü asistanların ikisi de sorma maliyetini düşürme girişimidir. [[learning-analytics]], dağılımı besleyen tahmini, [[student-modeling]] ile [[knowledge-tracing]] altındaki modelleri ve [[recommender-systems-and-learning-paths]] tavsiye katmanını sahiplenir. Kampüs ruh sağlığı ve önleme sistemleri aracılığıyla [[well-being]] ile, tamamlamayı izleyen sonuç olarak [[career-development-and-readiness]] ile, puana dayanarak hareket etmenin riskleri aracılığıyla [[equity-in-ai-education]] ve [[privacy]] ile ve bunların hiçbirinin sürdürülüp sürdürülmeyeceğine karar veren roller ve süreçler olarak [[administrator]], [[stakeholders]] ve [[change-management]] ile bağlantılıdır. [[learning-gains]] komşu ölçüm düğümüdür: sonuçları öğretimsel değil idaridir ve ikisi birlikte harekete geçmez.

## Yaygın yanlış anlamalar

**“Hangi öğrencilerin zorlanacağını öngörmek, müdahalenin kendisidir.”** Öngörü, desteğin girdisidir; destek değildir. Kanıt bunları bilerek ayırır. Bir puanla sonlanan erken uyarı panosu, yardım eklemeden ölçüm eklemiş olur.

**“Kalıcılığı artıran bir elde tutma programı, YZ’nin işe yaradığını kanıtlar.”** Programın işe yaradığını kanıtlar ve YZ katmanı, tetiklediği erişimden ayrı olarak değerlendirilmelidir. California State University, Northridge’de üretken olmayan bir metin mesajı sohbet robotu olan CSUNny’nin dört yıllık rastgele bir çalışması, **iki lisans kohortu (N = 8.708)** üzerinden **sekiz dönem** boyunca ve **yıllık çıkma oranları hiç %4’ü aşmadan** izlemiştir; bu, *mesajlaşmaya* ilişkin güçlü bir alıcılık sonucudur ve üretken ya da öngörücü bir sistemin aynı sonucu vereceğinin kanıtı değildir.

**“Sonuç merdiveni çöker: etkileşim, elde tutmadır.”** Her basamak farklı bir şeyi ölçer (kaydolma, yanıt verme, devam etme, tamamlama) ve bir program alt basamakları hareket ettirirken üst basamakları düz bırakabilir. Yanıt veren payı başarı olarak raporlamak, tam olarak bu yerine koymayı işler.

**“Bir eşitlik kaygısı, veriyi kullanmayı bırakmak için bir nedendir.”** Puanlara göre dikkatle hareket etmek için bir nedendir. Bir yordayıcıya göre hareket etmek hem destek hem de kuşku dağıtabilir ve risk, modelin en olumsuz sınıflandırdığı öğrencilerde yoğunlaşır; bu da çareyi ölçümü terk etmek değil, kullanımın yönetişimi yapar.

## Kurum bilgisi için sohbet robotları ile web siteleri

Öğrenci hizmetleri giderek daha fazla soruları konuşmaya dayalı bir asistan aracılığıyla yanıtlıyor ve 2026'da yapılan rastgele bir deney bu takası doğrudan sınadı: 18–25 yaş arası 299 yetişkin, program PDF'lerine dayanan bir GPT-4o asistanı ya da bir üniversite web sitesi aracılığıyla beş parça program bilgisini aradı. Sohbet robotu daha hızlıydı (312 sn karşı 505 sn) ve daha doğruydu (%95,6 karşı %78,5; OR = 7,84) ve davranışsal niyet dışındaki tüm algısal ölçütlerde daha iyi bulundu; davranışsal niyette fark yoktu.([[ai-conversational-interfaces-information-seeking-2026|Goebert ve ark., 2026]])

İstisna, operasyonel olarak önemli olandır: bir ders değişikliği için kime başvurulacağını soran soruda web sitesi kazandı, %96,5 karşı %85,2. Belirli bir kişi ya da ofisle bağlantılı bilgi, gezinilebilir bir sitenin hâlâ üretilmiş bir yanıttan daha iyi olduğu yerdir; bu nedenle asistan, sitenin yerine geçen bir şeyden ziyade sitenin üzerine eklenen bir katman olarak konuşlandırılmalıdır.
