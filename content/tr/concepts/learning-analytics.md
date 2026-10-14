---
title: Öğrenme Analitiği
created: "2026-10-14T21:30:00-04:00"
type: concept
pedagogy: [student-engagement]
technology: [knowledge-tracing, student-modeling, edtech-platform]
assessment: [feedback, formative-assessment]
ethics: [privacy]
page_kind: [evaluation]
confidence: high
connected_faqs: [asynchronous-online-courses-ai]
methods: [ai-ed-evaluation]
reviewed_by: [editor]
translation_of: concepts/learning-analytics
source_updated: "2026-10-13T11:05:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Öğrenme analitiği** — öğrenenler ve onların bağlamları hakkında verilerin ölçümü, toplanması, çözümlenmesi ve raporlanması; amacı öğrenmeyi anlamak ve en iyi duruma getirmektir. YZ, öğrenme analitiğini betimleyici panolardan öngörücü ve yöneltici sistemlere dönüştürmüştür.

## Dikkate Alınması Gereken Sorular

- Çoğu insan, daha fazla öğrenme verisi toplamanın eğitimi otomatik olarak iyileştirdiğini varsayar. Sayfa, analitiğin ancak bir müdahaleye geri besleme olarak yöneldiğinde anlam kazandığını, aksi halde yalnızca betimlediğini ya da işaretlediğini ama öğrenmeyi değiştirmediğini savunuyor. Hiçbir işleme yol açmayan veri toplamanın nerede gerçekleştiğine tanık oldunuz?
- Bir panonun size bir öğrencinin \"risk altında\" olduğunu söylediğini düşünün — bu bir tahmindir. Bunu, bir öğretmenin ya da kurumun gerçekten uygulayabileceği ölçüde eyleme dönüştürülebilir yönlendirmeden ayıran nedir? Sayfa, tek başına tahminin yeterli olmadığını öne sürüyor.
- Sayfa, YZ’nin öğrenme analitiğini olanı betimlemekten olacak şeyi tahmin etmeye ve bundan sonra ne yapılacağını önermeye taşıdığını belirtiyor. Bu üç kuşaktan hangilerini deneyimlediniz, diğerlerinde neyin eksik olduğunu düşündünüz?
- Bir çalışmada üç farklı YZ modeli, aynı öğrenci verisi için keskin biçimde farklı destek planları üretti ve analitik göstergeler ile önerilen yardım arasındaki bağlantılar çoğunlukla zayıftı. Bu durum, bir YZ’nin tavsiyesini olduğu gibi kabul etmek konusunda ne öneriyor?
- Öğrenme analitiği bir gizlilik gerilimi içindedir: veri ne kadar ayrıntılıysa o kadar açığa çıkarıcıdır — ve müdahale o kadar güçlüdür. Sizin ya da öğrencileriniz hakkında nelerin toplandığına dair sınırı nerede çekerdiniz ve bunu kimin belirlemesi gerekir?

## Giriş

### YZ ile güçlendirilmiş analitik

- **Öngörücü analitik:** Öğrenen etkileşim verileri üzerinde [[reinforcement-learning|makine öğrenmesi]], sonuçları tahmin eder — [[at-risk-students-ml-prediction|risk altındaki öğrencilerin belirlenmesi]]nden [[knowledge-tracing|bilgi durumu kestirimine]] kadar.
- **Doğrulama, tahmin kadar önemlidir.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan ve Carvalho (2025)]], öngörücü bilgi durumu modellerinin (BKT, BKT-with-Forgetting, AFM) tam bir oturum geçmişine geriye dönük olarak uydurulduğunda doğru göründüğünü, ancak **zamana dayalı çapraz doğrulama** altında — sonraki oturumu öncekilerden tahmin etmek, analitiğin fiilen nasıl konuşlandırıldığı — öğrenen performansını olduğundan yüksek değerlendirdiğini, tekrarlama/unutma dinamiğini gözden kaçırdığını ve alıştırma koşullarını yanlış sıralayabileceğini gösterir. Analitik için uyarı şudur: geriye dönük uyum, boylamsal verilerdeki zayıf ileriye dönük öngörü geçerliliğini maskeleyebilir, bu nedenle gösterge ve pano modelleri walk-forward yöntemiyle doğrulanmalıdır.
- **Tahminin arkasındaki madde–nitelik eşlemesini doğrulayın.** Maddeleri niteliklere bağlayan Q-matrisi bir veri değil, bir varsayımdır: 918 analitik düşünme maddesinin 14’ünde reddedilen girdiler, düzeltildikten sonra asılsız bir bilgi durumu örüntüsünü %14,2’den %3,8’e düşürdü — dolayısıyla ustalık analitiği yalnızca öngörücü uyumunu değil, Q-matrisini de denetlemelidir ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).
- **[[curriculum-design|Öğretim programına]] bağlı öngörücü analitik:** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh ve ark. (2026)]], Outcome-Based Education (Kazanım Odaklı Eğitim) içinde bilgi durumlarını, kurs kazanımlarını doğrudan LMS etkileşim ve erişim verilerinden izleyerek kestirir; kavram bağlantılarını yapılandırmak için OBE benzerlik eşlemelerini (kurs–program kazanımı ilişkileri) ve kazanımlar arası etkiyi modellemek için bellek destekli bir ağ kullanır — canlı üniversite mühendislik verisi üzerinde %89,81 AUC’ye ulaşarak DKT, DKVMN, EKT ve SimpleKT’yi geride bırakırken genel amaçlı ASSISTments verisi üzerinde yalnızca rekabetçi (üstün değil) kalır.
- **Eyleme dönüştürülebilir pencereyle yorumlanabilir ilerleme tahmini:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]], geniş ölçekli çevrimiçi [[cs-education|programlama]] kurslarında öğrenci ilerlemesini modül düzeyinde, içerik etkileşimi günlük kaydı özniteliklerinden tahmin eder; siyah kutu doğruluğuna (85–91%) eşdeğer performans gösteren camdan kutu karar ağaçları kullanarak modül teslim tarihlerinden 7–8 gün önce \"No submission\" (gönderim yok) türünden terk etme sonuçlarını işaretler — çıplak bir risk işareti yerine [[teacher-role|müdahale]] için açık, gerçek zamanlı bir pencere ve ilgisiz-at riskte, ilgisiz-ama-başarılı, angajeeli yüksek performans profillerinden oluşan keşifsel bir tipoloji sunar.
- **Kurumlar arasında birleşik, açıklanabilir risk modellemesi (2026).** [[villegas-ch-federated-explainable-learning-analytics-2026|Villegas-Ch ve ark. (2026)]], risk modellemesini tek kurum tahmininin ötesine taşıyarak birleşik öğrenme yoluyla simüle edilmiş kurumlar arasında çok görevli (performans + terk etme) bir model eğitir; böylece ham öğrenci verileri hiçbir zaman kurumundan çıkmaz. Kontrollü heterojenlik altında (etiket çarpıklığı, sınıf dengesizliği, zamansal kayma, yapısal eksiklik) model sıralama doğruluğunu (OULAD AUC 0,918) ve yapısal olarak kararlı öznitelik önem sıralamalarını korur, ancak olasılıksal kalibrasyon kayar — sıralama performansını olasılık güvenilirliğinden ayırır. Erken uyarı sistemleri için bu durum, eşik temelli müdahalelerin kuruma özgü kalibrasyon gerektirebileceğine dair bir uyarıdır ve analitiği ayrım, kalibrasyon, dayanıklılık ve açıklanabilirlik boyutlarının tümünde birlikte değerlendirmesinin savunusudur.
- **Gizliliği koruyan analitik için ön koşul: sentetik veri doğrulaması.** Dört yıllık çalışma alışkanlığı kohortunun (on sekiz haftada 117-120 öğrenen) sentetik sürümleri üzerinde yapılan yapısal bir denetim, bölümleme tanımlayıcılarının dört kohortun ikisinde yakından örtüştüğünü, haftadan haftaya değişkenliğin ise istisnasız olarak 2,6 ile 4,9 kat daha düşük seyrettiğini buldu (değişim katsayısı gerçek kohortların 0,399-0,539’una karşılık 0,086-0,152) ve sentetik ön verilerde elde edilen bulguların yalnızca %36’sı yirmi beş doğrulama talebi üzerinden gerçek verilerde teyit edilebildi ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]]).
- **Angajman analitiği:** [[student-engagement|Angajman ölçümü]] ve [[engagement-intensity-learner-modeling|yoğunluk modellemesi]], öğrencilerin YZ sistemleriyle nasıl etkileşime girdiğini nicelleştirir.
- **Geri bildirim analitiği:** [[teaching-feedback-classification-benchmark|Geri bildirim sınıflandırması]] ve [[ai-feedback-quality|kalite değerlendirmesi]], öğrencilerin aldığı geri bildirimi çözümler.
- **Ağ analizi:** [[misiejuk-cognitive-offloading-prompting-2026|Birlikte Görünüm Ağ Analizi]] ve [[epistemic-emotions-collaborative-problem-solving|epistemik ağ analizi]], etkileşim örüntülerini ortaya çıkarır.
- **Gizlilik gerilimleri:** Analitik giderek daha ayrıntılı ve YZ kaynaklı hale geldikçe [[privacy]] kaygıları artar.
- **Öğrenci verileri için bir yönetişim inceleme çerçevesi.** LEAGUE, FERPA ve GDPR uyumunu taban kabul eden ve modellerin kaymasıyla birlikte planlı yeniden değerlendirme öneren Lawfulness (Hukuka uygunluk), Equity (Eşitlik), Agency (Etkinlik/Alan), Governance (Yönetişim), Utility (Fayda) ve Ethics by Design (Tasarımla Etik) olmak üzere altı sütun öne sürer ([[league-ethical-governance-student-data-2026|Varadaraju & Vijayakumar (2026)]]).

**Yalnızca sırayı değil, kursların eşzamanlılığını modelleyin.** TRACE, bir dönemdeki her kursa aynı konumsal kodlamayı verir ve kurslarla notları birlikte tahmin etmek not tahmin hatasını 0,1339 MAE’ye düşürür — yalnızca not temelli bir transformatöre kıyasla %46,4 azalma — on yıllık kurumsal veri üzerinde ([[trace-course-grade-prediction-2026|Savala (2026)]]).

### Öğrenme analitiği döngüsü

Öğrenme analitiği, geleneksel olarak öğrenen etkinliğinin veri üretmesiyle başlayan, bu verinin ölçülere ve göstergelere dönüştürüldüğü ve bunların ardından **müdahalelere** çevrildiği — müdahalenin de öğrenen etkinliğine geri besleme sağlayarak döngüyü kapattığı bir döngü olarak çerçevelenir. Analitiği sıradan bir izleme ya da tahminden ayıran adım müdahale adımıdır: bu olmadan analitik betimler ve işaretler, ancak öğrenmeyi asla değiştirmez. Bu döngü, YZ araçlarının (panolar, geri bildirim üreticileri, yöneltici öneri sistemleri) hattın neresinde durduğunu ve hangi adımı otomatikleştirdiğini anlamanın yapılandırıcı çerçevesidir.

Öğrenene dönük bir pano yalnızca erişimi kadardır: Hong Kong’ta 9. sınıf yazma çalışmasında bir istek metni sınıflandırıcı 0,757 makro F1’e ulaştı, 46 öğrencinin yaklaşık üçte biri üç GenAI-kullanım panosunu açtı ve kopyalama ile öğrenme yönelimli istek metni kullanımındaki grup farkları güvenilir değildi ([[learning-analytics-genai-secondary-writing-2026|Fong ve ark. (2026)]]).

Nitel verilerin frekans kodlaması bir giriş noktasıdır, hüküm değil: on katılımcılı bir çalışmada bazı öğretim elemanları frekans kodlamalarını verimli bir başlangıç olarak okurken diğerleri bunların nadir ancak kritik yanıtları gizlediğine dair uyarıda bulundu; bu nedenle tasarım her toplu görünümü öğrenci metninin birebir kaydına bağlı tutar ([[wordstream-glass-learning-analytics|Nguyen ve ark. (2026)]]).

### Betimlemeden müdahaleye

Öğrenme analitiği, bilgi tabanında üç kuşak boyunca evrimleşmiştir: betimleyici (ne oldu?), öngörücü (ne olacak?) ve yöneltici (ne yapmalıyız?). YZ, doğrudan [[feedback|öğretimsel müdahaleleri]] tetikleyen analitiklerden oluşan yöneltici katmanı mümkün kılar. Temel bir sınır **eyleme dönüştürülebilirlik boşluğudur**: [[sc2r-counterfactual-recourse-educational-2026|SC2R (Le, Abel & Laforge 2026)]], tek başına tahminin karar desteği için yetersiz olduğunu ve karşıolgusal çarenin yalnızca öneriler anlamsal olarak uygulanabilir ve makine tarafından denetlenebilir olduğunda — yani zamanlama, bütçe, değişmezlik ve erişilebilirlik üzerinden SHACL doğrulamasıyla sınırlandığında, yalnızca model geçerli olduğunda değil — işlevsel anlam kazandığını gösterir. Bu durum alanı, [[human-in-the-loop-ai|insan gözetimi]] korunarak risk puanlarının ötesinde kurumların gerçekten uygulayabileceği önerilere taşır.

Yöneltici katmanın doğrudan ampirik bir sınavı [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas ve ark. (2026)]]’den gelir; onlar üç LLM’den 4.500 [[simulating-students|sentetik öğrenci]] vinyeti için destek planları önermesini istedi.

Analitiğin sınıfa nasıl ulaştığına dair tamamlayıcı, öğretmen merkezli bir sınav [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain ve ark. (2026)]]’den gelir; onlar iki karma bağlamda öğretmenlere makine öğrenmesinden türetilen [[self-regulated-learning]] profillerini iletmek üzere bir öğrenme analitiği panosu (DashED) tasarladı. 100 öğretmen üzerine yapılan çalışmaları, analitiğin *sunumu*nun kendisinin eyleme geçişte bir engel olduğunu gösterir: öğretmenler, daha karmaşık tasarımların (örn. ısı haritaları) daha zengin içgörüler sağladığı durumlarda bile sistematik biçimde daha basit, daha geleneksel grafikleri (sütun grafikleri, dilim grafikleri) tercih etti ve daha yüksek [[visualization|görselleştirme okuryazarlığı]], daha derin ve ayrıntılı yorumlamayı öngördü (örn. zaman serisi verilerindeki eğilimleri daha fazla öğretmenin tanımlaması). Grup karşılaştırmasında öğretmenler üst üste bindirmeyi yan yana koymaya, açık fark kodlamasını ise tam bilgi içeren grafiklere yeğledi. Öğretmenlerin önerdiği eylemler, gösterdiği içerik ve [[teacher-role]] düzeyleri tarafından değil, grafik türü tarafından şekillendi — üniversite öğretmenleri haftalık testleri ve kurs düzeyinde uyarlamayı, mesleki eğitim öğretmenleri ise doğrudan bireyselleştirilmiş mentorluğu önerdi; bu, yöneltici adımın temel alınan model kadar analitiğin nasıl görselleştirilip bağlamlandırıldığına da bağlı olduğunu vurgular. Bulguları uyarıcıdır: LA göstergeleri ile önerilen destek arasındaki korelasyonlar çoğunlukla zayıftı, aynı öğrenci için çapraz model önerileri keskin biçimde ayrıştı ve destek sıklıkla en çok ihtiyacı olana bakılmaksızın dağıtıldı. Yazarlar, mevcut LLM’lerin **henüz ölçekli öğrenci desteği için yöneltici modeller olarak güvenilir olmadığını** sonuçlandırarak, yöneltici adımın hazır otomasyon yerine doğrulama, ince ayar ve insan gözetimi gerektirdiğini pekiştirir.

Puanın ardından gelen adım — desteğin kime gittiği ve ihtiyaç duyulana dağıtılıp dağıtılmadığı — bu sayfanın yöneltici katmanının beslendiği ulaşım, yönlendirme ve dağıtım kanıtlarını taşıyan [[student-support-and-success|öğrenci desteği ve başarısı]]na aittir.

Aynı öngörücü katmana bir dürüstlük sonucu girer. [[akcapinar-ai-cheating-risk-lms-prediction-2026|Akçapınar (2026)]], YZ destekli kopya çekme riskini [[video-education|Moodle ve video oynatıcı]] izlerinin ilk sekiz haftasından tahmin eder; lojistik regresyonla 0,763 AUC’ye ulaşır ve sinyalin sinav sırasında değil sınavdan önce geldiği için kullanılabilir olduğunu savunur.
Analitiğin kendisinin *yorumlanması*nı hedef alan tamamlayıcı bir hat ise [[factria-responsible-institutional-analytics-2026|Marques ve ark. (2026)]]’nin FACTRIA çerçevesidir; bir göstergeyi etkileyen yanlılık unsurlarını — hat, kurumsal, kurs ve demografik — düzenler ve yansıtıcı istek metni kullanan bir sohbet robotu, 11 paydaşın her vaka için değerlendirdiği alt unsurları 1,41’den 3,45’e çıkardı (d = 2,15), onları doğrudan okumalardan koşullu okumalara kaydırdı.

### Yöntemler ve ağ analizi

Ağ yöntemleri öğrenme analitiğinin özünü oluşturur: [[network-analysis|geçiş ağı analizi (TNA)]], öğrenen eylemlerinin zamansal dizilerini modeller (örn. [[conversational-ai|sohbet robotu]] ile iskelelenen yazmadaki düzeltme ve sohbet döngüleri) ve [[network-analysis|epistemik ağ analizi (ENA)]], kodların/yapıların etkinlik boyunca birlikte nasıl göründüğünü eşler — birlikte öğrenmenin yalnızca ürünü değil *süreci*ni ve öğrenen-[[student-ai-interaction|YZ etkileşimi]]ni ortaya çıkarır.([[penny-transition-network-analysis-efl-writing-2026]])([[tracing-genai-literacy-interaction-patterns]])

- **Kendi kendine yönlendirilen davranışın dizi + Markov zinciri analizi.** [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]], VERA’da 822 ekolojik model kuran 315 çevrimiçi öğrenenin tıklama akışları üzerinde etkinlik dizisi analizi, hiyerarşik kümeleme ve Markov zinciri modellerini birleştirdi; dokuz ince taneli, geçişe dayalı davranış kümesini üç geniş örüntüye (Gözlem, Kurulum, Keşif) indirdi. Çalışmaları, dizi analizini Markov zinciri modellemesiyle birleştirmenin demografik ya da bağlamsal verinin tümüyle yokluğunda bile yapılandırılmamış, [[self-directed-learning|kendi kendine yönlendirilen]] görevlerde anlamlı davranış ortaya çıkarabileceğini gösterir.
- **LA ve GenAI öğrenme tasarımını farklı şekillerde şekillendirir (2026).** [[claassen-learning-analytics-genai-learning-design-2026|Claassen ve ark. (2026)]], öğrenme analitiğinin ve [[generative-ai]]’nin [[learning-design]] karar vermeyi nasıl bilgilendirdiğini karşılaştırmak için 11 öğretim elemanı odak grubunda ENA kullandı. LA görüşmeleri bağlamsal bilgi, kurs düzeyinde tasarım ve yaratıcı [[problem-solving]] üzerinde yoğunlaştı (angajmanı teşhis etme ve desteği hedeflemede LA), GenAI görüşmeleri ise [[assessment|değerlendirme tasarımı]] ve öğrencinin [[self-determination-theory|özbelirlemesi]] için tasarım üzerinde yoğunlaştı (fikir üretme ve değerlendirme geliştirmede GenAI). Bağlam ve [[creativity]] ikisinde de merkeziydi — analitiğin tasarımı yalnızca [[pedagogy|pedagojik]] bağlam ve öğretim elemanı özerkliği çerçevesinde bilgilendirdiğini hatırlatan bir bulgu.
- **Davranışsal izler bilişsel durumun ölçüsü değildir — özellikle özel gereksinimli öğrenenler için.** [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026|Vasileiou ve ark. (2026)]], etkileşim izlerinin (görevde geçen süre, tekrarlanan hatalar, yardım arama, düzensiz ilerleme) öğretmenlere bir öğrencinin nerede desteğe ihtiyaç duyduğunu bulmalarında yardımcı olabileceğini, ancak içsel durumların saydam ölçüleri olmadığını uyarır: yavaş yanıt verme dikkatli düşünceyi, dil işlemeyi, dikkat dağılmayı, erişilemez bir tasarımı ya da teknik bir güçlüğü yansıtabilir. \"Algoritmalar davranışsal verilerden tek başına bir yönetici işlev eksikliği ya da tanısal durum çıkarmamalıdır\" — analitik, mesleki değerlendirme ve öğrenenle diyalog içinde bir bilgi kaynağı olarak savunulabilir.
- **Tasarım analitiği: izleri değil, planlanmış etkinlik dizilerini madencilik (2026).** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec ve Horvat (2026)]], açık bir öğrenme tasarımı aracında planlanan 554 kurstaki 29.064 öğretim ve öğrenme etkinliğinin *tasarlanmış* dizisine Markov zincirleri ve sıralı örüntü madenciliği uyguladı. Geçiş matrisi Değerlendirmeden Tartışmaya (0,332) yönünde zirve yaptı, öz geçişler Alıştırmada (0,317) ve Kazanımda (0,292) baskındı ve en güçlü ardışık kural Kazanım-Değerlendirme-Alıştırma-Alıştırma oldu (güven 0,743, yük 1,449), en sık dört adımlı yol ise Kazanım, Alıştırma, Alıştırma, Değerlendirme (120 tekrar) biçimindeydi. Tartışma ve Değerlendirme en erişilebilir türler, Üretim ise en uzak ve seyrek türdü. Çalışma, öğrenme analitiğinin LMS izleriyle başlamak zorunda olmadığının hatırlatmasıdır: tasarım anı verileri, herhangi bir öğrenci gelmeden önce bir kursun pedagojik dilbilgisini ortaya çıkarabilir; ancak yazarlar, tersyüz edilmiş, sorgu temelli ya da [[project-based-learning|proje temelli]] tasarımlara benzerliğin niyetin kanıtı olmadığını vurgular.
- **Kendini açıklayan damıtılmış LLM’ler (2026):** İki aşamalı bir hat, siyah kutu bir öğrenme analitiği kestiricisini ve onun sonradan yorumunu, hem birey düzeyinde bir kestirim hem de doğal dilde bir açıklama döndüren küçük, açık ağırlıklı bir [[llm]] içine damıtır. Öncelikle sadakat denetimi olarak adlandırılan bir süreç, anlatıların betimledikleri atıflarla örtüşüp örtüşmediğini değerlendirir; [[simulation]] kehanet veren bir mentorla neredeyse kayıpsız kurtarma (r > ,90) göstererek analitik için daha saydam, konuşlandırılabilir bir yol sunar ([[distilling-self-explaining-lm-learning-analytics-2026]]).
- **LA temelli eğitim müdahalelerinin olanak sağlayıcıları (2026).** [[learning-analytics-to-educational-interventions-2026|Svetec, Divjak & Kadoić (2026)]], güvenilir LA temelli eğitim müdahalelerinin yedi olanak sağlayıcısını Delphi + AHP + SNAP yoluyla belirler ve önceliklendirir: [[governance|kurumsal]] stratejik yönelim, pedagojik ve diğer [[research-methods-aied|araştırma]] temelleri, mevcut kaynaklar, pedagojik destek, etik ve veri yönetişimi, paydaş katılımı ve kalite güvencesi. Kurumsal stratejik yönelim en yüksek sırada (ve diğer olanak sağlayıcılar üzerinde en etkili) yer aldı, mevcut kaynaklar ikinci oldu. [[trust|Güvenilirlik]] (etik uyum, saydam/taraflı olmayan algoritmalar, pedagojik geçerlilik), LA temelli müdahalelerin anlamlı olmadığı ön koşul olarak çerçevelenir.
- **LLM etkileşim derinliği görev kalitesini öngörür, ancak hatırlamayı öngörmez (2026).** [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]], dönüş düzeyinde LLM konuşma telemetrisini (Derinlik/Hacim/Hız) [[learning-gains|öğrenme sonuçları]]na bağlar: açıklama arayıcılık \"derinliği\", bağımsız olarak derecelendirilmiş görev kalitesini (β = 6,27) öngördü ancak anında hatırlamayı öngörmedi — bu, LA’da [[llm]] etkileşiminin nasıl ölçülüp değerlendirildiğine ilişkin sonuçları olan, pekiştirme kaynaklı kavrayış ile hatırlama kaynaklı pekiştirme arasında bir ayrışmadır.
- **Ortak bir etkileşim birimi eksik.** 33 çalışmadan çıkan 46 kategorizasyon arasında ortak bir üst nitelik yoktur — benzer etiketler farklı olguları adlandırır — bu nedenle derleme, diyaloğu beceri kazanımıyla ilişkilendirmek için birim olarak *etkileşim bölümü*nü, yani hedefe yönelik sınırlandırılmış bir değişimi önerir ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen & Weidlich (2026)]]).
- **Öğrenme analitiği için işbirlikçi söylemi benzetim.** [[llm-agents-collaborative-problem-solving-simulation-2026|Fang (2026)]], ince ayarlanmış katılımcıya özgü LLM aracıları kullanarak işbirlikçi problem çözme diyaloglarını yeniden üretir; Epistemik Ağ Analizi ile doğrulanır (ENA uzaklığı 0,17, permütasyon p = 0,65). Yaklaşım, öğrenme analitiği araştırmacılarına etkileşim dinamiklerini, sıra alışverişini ve tematik kod yörüngelerini incelemek için yeni insan verisi toplamadan özgün işbirlikçi söylem üretmenin ölçeklenebilir bir yolunu sunar.
- **Açık, yeniden üretilebilir veri ve izlere hazır analitik.** [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]], işbirlikçi programlamada etkileşimi ve katılım dengesini çözümlemek üzere izlere hazır bir şemaya (N=540; 360 oturum; 1.440 bölüm) sahip sentetik bir [[benchmark]] yayımlar. Günlük kaydı ve iz verileri, bu literatürde [[self-report-measures|öz bildirime]] doğal bir karşı ağırlıktır: aynı yapı sıklıkla iki kez ölçülür, bir kez sorarak bir kez gözlemleyerek ve ikisi her zaman örtüşmez. Ayrıca, SHAP analizi içeren keşifsel bir ML çerçevesi, üniversite öğrencileri arasında ChatGPT kullanım niyetiyle en çok ilişkili öğrenmeye ilişkin yapıları belirleyerek [[explainable-ai|yorumlanabilirliği]] öncelikledi ([[determinants-chatgpt-use-higher-education-2026]]).
- **Yeniden kullanılabilir analitik altyapısı, yalnızca kurum içinde doğrulanmış (2026).** [[a4l-analytics-pipeline|Bai ve ark. (2026)]], üç Georgia Tech YZ asistanına ilişkin yayımlanmış bulguları kod yerine yapılandırma değerlerini değiştirerek yeniden üretti; ancak bu iddia mevcut tek kurumlu veri kümelerinin yeniden çözümlenmesine dayanıyor ve tek yetenek genişletmesi içeriden gelenlerce yapıldı.

### Bağlantılar

Öğrenme analitiği [[knowledge-tracing]] (çekirdek analitik), [[formative-assessment]] (analitik kaynaklı değerlendirme), [[student-modeling]] (analitiğin doldurduğu öğrenen temsili), [[privacy]] ([[ethics|etik]] kısıt) ve [[edtech-platform]] (analitiğin konuşlandırıldığı yer) ile bağlantılıdır. Yöneltici analitik giderek artan biçimde [[simulating-students|benzetilmiş öğrenenler]] üzerinde değerlendirildiğinden — kontrollü testlerde sentetik öğrenci kohortları gerçek kohortların yerini aldığından — öğrenme analitiği aynı zamanda öğrenci benzetimiyle de bağlantılıdır.

- **Panoların neyi görünür kıldığı, öğretmenlerin ne yaptığına karar verir.** [[ai-supported-lecturer-decision-making-2026|Köroğlu ve ark. (2026)]], 27 ampirik çalışmayı (2016–2025) gözden geçirip YZ destekli öğretim elemanı karar vermesinin sekiz karar türü boyunca sosyoteknik bir taksonomisi oluşturdu: öğretimsel, öğretim programı, değerlendirme, geri bildirim, öğrenme ortamı, duygusal, idari ve etik. Öğrenme Analitiği Panoları en sık bildirilen sistemdi ve kodlama, davranışsal metin ve günlük kaydı verisinin bilgilendirebildiği öğretimsel, geri bildirim ve değerlendirme kararlarında desteğin yoğunlaştığını, duygusal, etik, öğretim programı ve öğrenme ortamı kararlarının ise nadiren desteklendiğini gösterdi. Yazarlar bunu bir yetenek sınırından çok bir dikkat etkisi olarak okurlar: sistemler davranışsal öğrenci verilerini görünür ve eyleme dönüştürülebilir kıldığı için motivasyon, [[metacognition]], duygu ve ortam kaygıları, verinin öğretim elemanlarını değerlendirmeye davet ettiği şeyin dışında kaldı.

Süreç düzeyinde ölçümleme, betimleyici katmanın bir alt basamağıdır. [[pulla-parsons-problem-tool-2026|Prol ve ark. (2026)]], bir [[open-source]] Parsons problemi platformunu her blok yerleştirme, kaldırma ve gönderimi kronolojik bir iz olarak kaydedecek şekilde genişletti, her gönderimi blok başına doğruluk renklendirmesi ve bir deneme geçmişiyle eşleştirdi ve isteğe bağlı olarak izleri öğretim elemanı incelemesi için tekrarlayan zorluk örüntülerini etiketleyen bir [[llm]] hattından geçirdi. Üst düzey Java yazılım tasarımı kursundaki 68 öğrenci ve giriş seviyesi Python kursundaki 36 öğrenci üzerinde analiz, doğruluk ve deneme sayılarının ortaya çıkaramadığı aynı üç zorluğu gün yüzüne çıkardı: yanlış istisna türünü seçmek, `return`’u `throw` ile değiştirmek ve hatalı kontrol akışı sıralaması — çünkü bunlar dizilimin *doğru olup olmadığına* değil, *sürecin ne olduğuna* yanıt verir. YZ, öğrenciyi puanlayan biri olarak değil [[teacher-role|öğretim elemanı]] için bir yorumlayıcı olarak işlev görür ve çıktısı bir sınıfın zorluklarına dair incelenebilir bir hipotez olarak çerçevelenir, bir not olarak değil.

- **Öğrenme sistemi duvarı: günlük kaydı verileri platformlar arasında genelleşmez.** MATHia, i-Ready ve IXL, bir \"deneme\" ya da bir \"ipucu\" olmak üzere en temel yapıları bile farklı tanımlar; bu nedenle modeller aralarında aktarılamaz. Sürüncemede olan bir yanıt problemi video tarafından ele alır: bir Gemini hattı, mentorluk ekran kayıtlarını yerel MATHia günlük kayıtlarıyla hizalanmış tek bir senaryo metnine damıtır ve bunu gerçeklik ölçütü olarak kullanır. Videonun hiçbir tek akışın toparlayamadığı şey: beyaz tahta iskelelemesi, dış araçlardaki sessiz hesap makinesi çalışması ve yerel günlük kayıtlarının \"boşta kalma\"ya indirdiği ekran dışı bağlam. Zamansal çıpalanma, saat sapması ve platform olaylarını diğer öğrenme süreçlerinden ayırmada açık zorluklar kalmaktadır. ([[thomas-breaking-learning-system-wall-2026]])

## Bağlı kavramlar

- [[explainable-ai]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[formative-assessment]]
- [[privacy]]
- [[edtech-platform]]
- [[student-engagement]]
- [[ai-ed-evaluation]]
- [[feedback]]
- [[higher-ed]]
- [[k-12]]
- [[llm]]
- [[simulating-students]]
- [[self-report-measures]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — tahminin beslendiği destek tarafı: yönlendirme, dağıtım ve bunların hareket ettirdiği ya da ettirmediği sonuçlar

## Bağlı makaleler
- [[factria-responsible-institutional-analytics-2026]] — Responsible Institutional Analytics: Interpreting Bias with AI Support

- [[ai-supported-lecturer-decision-making-2026]] — AI-Supported Lecturer Decision-Making in Higher Education
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Federated and explainable learning analytics for privacy-preserving academic risk modeling (Villegas-Ch et al. 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — What students ask matters: LLM interaction depth, task quality, and immediate recall (Tsiligkiris 2026)
- [[learning-analytics-to-educational-interventions-2026]] — From learning analytics to educational interventions: enablers of trustworthy LA-based interventions (Svetec, Divjak & Kadoić 2026)
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA and GenAI in learning design decision-making
- [[at-risk-students-ml-prediction]]
- [[engagement-intensity-learner-modeling]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[teaching-feedback-classification-benchmark]]
- [[wordstream-glass-learning-analytics]]
- [[trace-course-grade-prediction-2026]]
- [[student-llm-interaction-taxonomy-review-2026]]
- [[sc2r-counterfactual-recourse-educational-2026]] — From Student Risk Prediction to SC2R: Counterfactual Recourse
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Bayesian cognitive diagnosis for personalized learning paths
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — Fine-tuned participant-specific LLM agents reproducing collaborative problem solving dialogues (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — ASTRA synthetic benchmark for multi-agent tutoring and participation-balanced collaboration
- [[determinants-chatgpt-use-higher-education-2026]] — ML/SHAP determinants of future ChatGPT use in higher education
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — Making ML findings accessible to teachers in blended classrooms
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Outcome-based knowledge tracing with affinity mapping
- [[an-goel-self-directed-modeling-2026]]
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[zhang-ml-student-progress-programming-2026]]
- [[learning-paths-patterns-learning-design-2026]] — Markov chain and pattern mining of 29,064 planned activities in 554 courses, revealing a design grammar led by Acquisition and consolidating Practice
- [[pulla-parsons-problem-tool-2026]] — Pulla: process-level behavioral tracing and instructor-facing difficulty analysis in Parsons problems (Prol et al. 2026)
- [[a4l-analytics-pipeline]]
- [[league-ethical-governance-student-data-2026]]
- [[learning-analytics-genai-secondary-writing-2026]] — Using Learning Analytics to Support Secondary School Students' Writing with Generative AI
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[akcapinar-ai-cheating-risk-lms-prediction-2026]] — Akçapınar (2026) — Predicting AI-assisted cheating risk from early-semester LMS traces (AUC 0.763)
- [[thomas-breaking-learning-system-wall-2026]] — Towards breaking the learning system wall using multimodal tutoring transcriptions (Thomas et al. 2026)
