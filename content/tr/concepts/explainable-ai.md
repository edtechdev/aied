---
title: Açıklanabilir YZ
created: "2026-10-14T22:25:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [metacognition]
technology: [human-in-the-loop-ai, intelligent-tutoring, learning-analytics, student-modeling]
assessment: [automated-assessment]
ethics: [bias-mitigation, trust-calibration, pedagogical-safety]
audience: [learners, researchers, instructional designers, instructors]
confidence: high
translation_of: concepts/explainable-ai
source_updated: "2026-09-30T14:23:52-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Eğitimde Açıklanabilir YZ (XAI)**, bir YZ sisteminin kararlarını eğitim paydaşlarına — [[learners]], öğretmenlere, [[administrator|yöneticilere]], [[parents-and-families|ebeveynlere]], araştırmacılara ve [[stakeholders|politika yapıcılara]] — anlaşılır kılmanın tasarımı ve incelenmesidir. Alanın ısrarla vurguladığı temel ayrım şudur: **konu**nun açıklanması (bir olgunun neden doğru olduğu), bir **YZ sisteminin kararının** açıklanması (bu öğrenene neden bu etkinlik atandığı, bu yanıt neden yanlış işaretlendiği, bir risk tahminini hangi kanıtların desteklediği) ile aynı şey değildir. Eğitim, kendine özgü açıklanabilirlik ihtiyaçları getirir — gürültülü öğrenme verileri, doğrudan [[metacognition]] ve [[self-regulated-learning]] destekleyebilen açıklamalar ve temelde farklı açıklama türlerine gereksinim duyan paydaşlar. Belirleyici tasarım sorusu, salt açıklama varlığı değil, **açıklama niteliğidir**: teknik olarak mevcut olan ama okunamaz, yanıltıcı veya hedef kitleyle uyumsuz bir açıklama, hiç açıklama olmamasından daha fazla zarar verebilir.

## Dikkate Alınması Gereken Sorular

- Bir [[intelligent-tutoring|YZ özel dersçisi]] size bir ipucunun neden verildiğini söylediğinde, bu *konuyu* mu açıklıyor yoksa *sistemin kararını* mi? Eğitim YZ’sini kullanımınızda her birinden üçer örnek adlandırabilir misiniz?
- Eğitimde kimin açıklamaya ihtiyacı vardır — ve öğrenenler, öğretmenler ve politika yapıcılar *aynı* türden mi ihtiyaç duyar? Her biri bir açıklamayı ne için kullanırdı?
- Bir YZ, bir öğrenciyi okulu bırakma riski taşıyor olarak işaretliyor. Buna göre hareket etmek için bir [[teacher-role|öğretmenin]] ne bilmesi gerekir, öğrencinin ne bilmesi gerekir? Aynı açıklama her ikisi için de uygun mudur?
- Sayfa, açıklama *niteliğinin* açıklama *varlığından* daha önemli olduğunu savunuyor. Teknik olarak mevcut bir açıklamayı başarısız kılan nedir — bir açıklamanın orada olduğunu ama işe yaramadığını ya da daha kötüsü yanıltıcı olduğunu gördüğünüz bir zamanı düşünebilir misiniz?
- [[trust-calibration|Güven]] ve açıklama bağlantılıdır ama özdeş değildir. Özgüven dolu, akıcı bir açıklama neden kusurlu bir sistemde *yanlış* güven yaratabilir — ve bunun olup olmadığını nasıl tespit ederdiniz?

## Giriş

Açıklanabilir [[ai-education|eğitimde YZ]], sınıflardaki YZ sistemlerinin kara kutu olmaması gerektiğine ilişkin artan beklentiyi adlandırır. Eğitimde YZ, sonuçları olan kararları etkilediğinden — notlar, risk işaretleri, [[recommender-systems-and-learning-paths|öğrenme yolları]], kaynak önerileri — paydaşlar giderek daha fazla, sistemin *ne* sonuca vardığını değil *neden* vardığını bilmeyi talep etmektedir. Eğitim bunu iki ayrı soruya dönüştürür: öğrenilen konunun açıklanması ve YZ sisteminin kendi karar alma sürecinin açıklanması. Bunları birbirine karıştırmak, pratik sonuçları olan bir kategori hatasıdır: bir [[physics-education|fizik]] yanıtını kusursuz biçimde açıklayan bir YZ, öğrenciye ve öğretmene *sistemin* neden onları riskli olarak sıraladığı, belirli bir etkinliği neden önerdiği veya bir yanıtı neden yanlış işaretlediği konusunda hiçbir içgörü vermeyebilir.

## Konunun açıklanması ile sistem kararının açıklanması karşılaştırması

Alanın temel katkısı — [[xai-education-framework|XAI-ED çerçevesi]] (Khosravi ve ark., 2022) — eğitimin genel amaçlı XAI’nin ötesinde *kendine özgü* açıklanabilirlik ihtiyaçlarına sahip olduğunu savunur. Bunların başında iki açıklama hedefi arasındaki ayrım gelir:

- **Konu açıklamaları** *içeriği* açıklar: neden bir ipucu bir [[misconceptions|yanlış kanıyı]] ele aldığını, neden bir yanıtın yanlış olduğunu, bir fizik sonucunun ilkelerden nasıl izlendiğini. Bunlar, [[scaffolding]], [[feedback]] ve [[metacognition]] destekleyen [[pedagogy|pedagojik]] açıklamalardır.
- **Sistem kararı açıklamaları** *modeli* açıklar: bu öğrenene neden bu etkinliğin atandığını, sistemin neden bu öğrencinin risk altında olduğunu öngördüğünü, bir bilgi izleme veya [[learning-analytics]] tahminini hangi kanıtların desteklediğini. Bunlar, [[trust-calibration]], [[bias-mitigation]] ve hesap verebilirliği destekleyen şeffaflık açıklamalarıdır.

Ayrım, bunların farklı paydaşlara ve farklı amaçlara hizmet etmesi nedeniyle önemlidir. “Bu neden yanlış işaretlendi?” sorusuna yanıt veren bir öğrenci, çoğunlukla *konu* açıklamasına ihtiyaç duyar; bir risk işaretine göre hareket edip etmeyeceğine karar veren bir öğretmen veya önyargıyı denetleyen bir politika yapıcı ise *sistem kararı* açıklamasına ihtiyaç duyar. Her ikisine hizmet eden tek bir açıklama tasarlamak nadiren mümkündür — bu nedenle çok paydaşlı tasarım, XAI-ED’nin temel bir temasıdır.

## Kimin açıklamaya ihtiyacı vardır: çok paydaşlı tasarım

- **Öğrenenler**, kendi öğrenmelerini ve öz-düzenlemelerini destekleyen açıklamalara ihtiyaç duyarlar — bir ipucunun neden verildiği, yanıtlarının neden yanlış işaretlendiği, bu kaynağın neden önerildiği ([[self-regulated-learning]] destekler). [[student-perspectives-ai-writing-grading-2026|Öğrenci bakış açısı kanıtı]], öğrenenlerin YZ *geri bildirimini* kabul etmek (revizyon için yararlı) ile *not verme yetkisini* devretmek (insan öğretmene saklı) arasında keskin bir çizgi çektiklerini göstermektedir — YZ’nin dahliğine ilişkin şeffaflık tarafından etkinleştirilen, kalibre edilmiş ve işleve uygun bir duruş. [[ko-hughes-vsd-student-centered-its-2026|Topluluk kolejli öğrencilerle yapılan değere duyarlı tasarım çalışması]] noktayı keskinleştirir: öğrenciler, ham model güveni veya teknik şeffaflık yerine *işbirlikçi, insanileştirilmiş* açıklamaları (örneğin “YZ burada belirsiz olabilir, bunu birlikte kontrol edelim”) tercih etmişlerdir; çünkü şeffaflığın tek başına, doğrudan öğrenmelerini desteklemediği sürece pek az değeri vardır. Çalışma, açıklama tasarımını özellik önem düzeyi çıktısı yerine öğrenene yönelik anlamlamaya doğru iten bir şeffaflık-yorumlanabilirlik gerginliği ortaya çıkarmıştır.
- **Öğretmenler**, müdahaleyi bilgilendiren açıklamalara ihtiyaç duyarlar — hangi öğrencilerin risk altında olduğu ve *neden*, hangi kanıta dayanarak. [[xai-teachers-trust-edtech-recommendations-2026|Öğretmenlerle yapılan açıklanabilirlik çalışmaları]], [[discipline-specific-aied|alana özgü]], [[curriculum-design|müfredat]] dili açıklamaların jenerik özellik önem düzeyi açıklamalarına göre kabulü ve kalibre edilmiş güveni daha etkin biçimde inşa ettiğini göstermekte; ancak öğretmenler tam bağımlılıktan önce gerçek sınıf deneyimi yaşamak istemektedir — açıklama tek başına [[trust-calibration|kalibrasyon]] kazandırmaz.
- **Geliştiriciler ve araştırmacılar**, model davranışında hata ayıklamak ve [[bias-mitigation|önyargıyı]] tespit etmek için açıklamalara ihtiyaç duyarlar — tahminleri yönlendiren özellikleri görünür kılarlar.
- **Yöneticiler ve politika yapıcılar**, hesap verebilirlik, [[privacy]] ve [[regulation]] uyumu (örneğin açıklama hakkı) ve YZ kaynaklı kararların adil ve [[equity-in-ai-education|eşitlikçi]] olup olmadığını denetlemek için açıklamalara ihtiyaç duyarlar.

## Yaklaşımlar ve biçimler

XAI-ED çerçevesi, başlıca açıklama kiplerini kataloglar: **görsel** (ısı haritaları, karar ağaçları), **metinsel** (doğal dil gerekçelendirmeleri), **örneğe dayalı** (karşıolgusal, en yakın komşular), **özellik önem düzeyi** sıralamaları, **kural çıkarımı** ve **model basitleştirme**. Ayrıca yaklaşımları model sınıflarına eşler:

- **Beyaz kutu** modeller (karar ağaçları, doğrusal modeller, kural temelli) doğası gereği yorumlanabilirdir.
- **Kara kutu** modeller ([[machine-learning|sinir ağları]], topluluklar) sonradan açıklama yöntemleri gerektirir.
- **Cam kutu** yaklaşımlar, doğruluğu şeffaflıkla dengelemeye çalışır.

Somut AIED kanıt tabanı bunların tamamını kapsar. **Yorumlanabilir [[knowledge-tracing|bilgi izleme]]**, öğrenen bilgisi modellerini doğrudan incelenebilir kılar ([[huang-interpretable-knowledge-tracing-2026]], [[explainable-probabilistic-kt]], [[neural-symbolic-knowledge-tracing]]). **Kendini açıklayan vekiller**, kara kutu bir modeli [[learning-analytics]] için küçük, yorumlanabilir bir [[llm|dil modeline]] damıtır ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Karşıolgusal açıklamalar** — “farklı bir sonuç için neyin değişmesi gerekirdi” — eğitim karar desteğini ve başvuru hakkını destekler ([[sc2r-counterfactual-recourse-educational-2026]]). **Federasyonlu ve açıklanabilir öğrenme analitiği**, açıklama niteliğinin (kalibrasyonun bozulduğu) sıralama kararlılığı korunduğunda bile kayabileceğini göstererek açıklamaların sabit bir özellik değil, ölçülmesi gereken bir sistem çıktısı olduğunu vurgular ([[villegas-ch-federated-explainable-learning-analytics-2026]]). Ve **yorumlanabilir [[affective-computing|duygusal]] ITS**, açıklamaları [[affective-tutoring|duygu farkında]] özel derslerde gösterir ([[multimodal-affective-its-presentation]]).

## Açıklama niteliği, varlık değil

Kanıtlar boyunca yinelenen bir ders: **bir açıklamaya sahip olmak yeterli değildir**; açıklama hedef kitlesine uygun, doğru ve risklere göre kalibre edilmiş olmalıdır. XAI-ED çerçevesi tuzakları açıkça adlandırır:

- **Açıklama aşırı yüklenmesi** — çok fazla bilgi kullanıcıyı bunaltır ve faydayı ortadan kaldırır.
- **Yanıltıcı açıklamalar** — sonradan üretilen açıklamalar modelin fiili akıl yürütmesini yansıtmayabilir ve yanlış güven verir.
- **Doğrulama yanlılığı** — kullanıcılar, mevcut inançlarını doğrulayan açıklamalara seçici biçimde dikkat eder.
- **Aşırı güven** — akıcı açıklamalar, kusurlu sistemlerde yanlış güven yaratarak [[cognitive-offloading|aşırı bağımlılığı]] besler ([[trust-calibration]] tersi).
- **Sistemi atlatma** — öğrenciler, gerçek öğrenmeyi aşmak için açıklamaları istismar edebilir.

Açıklama niteliğinin ayrıca bir eşitlik boyutu vardır: teknik olarak mevcut ama belirli bir paydaş için okunamaz olan — veya bir tahmindeki [[bias-mitigation|önyargıyı]] gizleyen — bir açıklama amacını yerine getiremez. Bu nedenle tasarım sorusu *nitelik ve uyum*dur ve bu nedenle insan merkezli, paydaşa özgü açıklama tasarımı, açıklamaların teknik olarak üretilmesinden ayrılamaz. Etkin XAI, yalnızca teknik bir nesne değil, alıcının bilişsel ihtiyaçları için tasarlanmış bir iletişim eylemidir.

Açıklama her zaman eşitleyici değildir. 250 yedinci sınıf öğrencisiyle yapılan 2 × 2 vinet deneyinde, bir matematik puanı için yazılı bir gerekçe her iki koşulda da kabulü ve algılanan adaleti yükseltmiş ama [[teacher-role|öğretmen]] kaynaklı ve YZ kaynaklı kararlar arasındaki boşluğu kapatmak yerine genişletmiştir ([[decision-making-agent-student-decision-acceptance-2026|Zhang ve ark. (2026)]]).

Konuyu daha da keskinleştiren iki uyarı vardır ve ikisi de wiki’nin konu üzerine yeni katkısını merkezî kılar. Birincisi, açıklama makinesi kendisi tarafsız değildir: LIME ve SHAP gibi sonradan yöntemler, modelin fiili davranışına sadık olmayabilir, bu nedenle teknik olarak mevcut bir açıklama bilgilendirmek yerine yanıltabilir ([[lund-socially-accountable-data-science-xai-2026|Lund ve ark. 2026]], Chuan ve ark. 2024’e dayanarak). İkincisi, **açıklama hesap verebilirlik değildir**. Hangi özelliklerin bir tahmini yönlendirdiğine ilişkin bir hesap, bu özelliklerin kullanılmasının uygun olup olmadığını, eğitim verisinin temsilci olup olmadığını veya sistem tasarımının sağlam bir yargıyı yansıtıp yansıtmadığını göstermez; açıklamalar, bir kararı üreten yapısal koşullara dokunmadan şeffaflık görünümü yaratabilir (Mittelstadt ve ark. 2019). Eğitim için bunun anlamı, sürekli sorulması gereken sorunun bir açıklamanın üretilip üretilmediği değil, onu alan kişinin — bir öğrencinin, bir öğretmenin, bir danışmanın — onu anlayıp anlamadığı, ona göre hareket edip edemediği veya ardındaki karara itiraz edip edemediğidir. Aynı okunabilirlik başarısızlığı, [[automated-assessment|otomatik değerlendirmenin]] güvenlik tarafında da görülür: [[humble-prompt-injection-ai-grading-red-team-2026|Humble’ın (2026) bir YZ notlandırma aracı üzerine yaptığı kırmızı takım çalışması]], aracın bir istek metni enjeksiyonunu engelledikten sonra sohbeti sessizce devre dışı bıraktığını ve — yerleştirilmiş talimatları asla izlemeyeceğini duyurduktan sonra — aynı dosya üzerinde altı ek koşuda bunları izlediğini bulmuş; bu da kullanıcıya güvenini dayandırabileceği güvenilir bir sinyal bırakmamıştır.

**Tasarım gereği açıklanabilir**, sonradan sadakatin önüne geçmenin bir yanıtıdır. [[li-explainable-trustworthy-llm-teacher-assessment-2025|Li, Yang ve Fang (2025)]], bir açıklama çözücüsünü [[assessment]]yi karara bağlayan aynı birleştirilmiş gösterim ve tahmin edilen puanla parametreler; böylece [[formative-assessment|biçimlendirici]] sorgulamada düşük bir puan, yetersiz derinlemesine soru sayısını adlandıran bir gerekçe verir ve buna müfredat standartlarına ve alana özgü rubrik hamlelerine çift mercekli dikkat eşlik eder. Rubriğe dikkat hizalaması, GPT-4 sıfır atımlık koşulun %41,7’sine ve BERT’in %32,1’ine karşılık %78,0’a ulaşır ve sadakat, rubrik açısından kritik bölümlerin karşıolgusal silinmesiyle birlikte rubrik temelli bir kontrol listesi üzerindeki insan puanlarıyla sorgulanır; bu da 0,78’lik bir açıklama güvenilirlik puanı verir — BERT-base’e göre 0,31’lik bir artış. Denetim ayrıca mimari iddianın zayıfladığı yeri gösterir: duygusal ipuçlarında model, uzmanın %15,2’sine karşı dikkat ağırlığının %28,4’ünü ayırır (hizalama 0,53); burada bir başarısızlık vakası “sinirli” belirtecine %28 ayırır ve yazarlar bunu pedagojiden çok duyguya aşırı uyum olarak okuyup iyileştirme alanı olarak adlandırır. Açıklamaları karar yoluna gömmek, onları sonradan üretilen gerekçelerden daha sadık kılar; doğru kılmaz.

## Açıklanabilirliği hesap verebilirlik uygulaması olarak öğretmek

Açıklama niteliği XAI’nin yararlı olup olmadığına karar veriyorsa, açıklama üretmek bir yetkinlik olarak gösterilmek yerine mesleki bir alışkanlık olarak öğretilmelidir. [[lund-socially-accountable-data-science-xai-2026|Lund ve meslektaşları (2026)]], bunu dört sütun boyunca yapmayı önermektedir — **yanıt verebilirlik** (etkilenenlere gerekçe sunma yükümlülüğü), **sorumluluk** (yaşam döngüsü boyunca öngörülen zarar, olaydan sonra savunulandan farklı), **yaptırım** (ders içinde sonuçlar) ve **düşünsel duruş** (kişinin kendi varsayımlarının belgelenmiş olarak incelenmesi) — her biri kendi ödevleri ve kendi sınıf maliyetiyle.

Açıklanabilirlik için özellikle önemli olan ödevler, açıklamayı not defterinin dışına çıkaranlardır: doğruluk ölçütleriyle yan yana ağırlıklandırılan, notlandırılmış model kartları ve öğrencilerin yorumlanabilirlik araçlarını kendi modellerine uygulayıp sonuçları paylaşılan teknik geçmişi olmayan bir kitleye sundukları yapılandırılmış açıklama denetimleri. Yaptırım, etik komşusu derslerde en sık eksik olan ve geri kalanı simgesel olmaktan çok daha fazlası yapan sütundur — sorumlu belgeleme ödüllendiren rubrikler, [[ethics|etik]] gerekçelerle revizyon için geri verilebilen projeler ve yalnızca teknik olanlardan ziyade hesap verebilirlik ölçütlerine karşı yürütülen [[peer-assessment|akran değerlendirmesi]]. Makale, araçların maliyet açısından keskin biçimde farklılaştığını açıkça kabul eder: model kartları ve duruş ifadeleri yeni yazılım gerektirmez ve yalnızca yüzeysel uyum riski taşır; akran panelleri ve paydaş etkileşimi ise koordinasyon ve kurumsal destek gerektirir, bu nedenle ya hep ya hiç bağlılığı yerine aşamalı benimseme önerir. Bunların bir programda nereye oturduğunu görmek için bkz. [[curriculum-design]].

## Bağlı Kavramlar
- [[trust-calibration]]
- [[trust]]
- [[ai-literacy]]
- [[learning-analytics]]
- [[automated-assessment]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[bias-mitigation]]
- [[human-in-the-loop-ai]]
- [[pedagogical-safety]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[cognitive-offloading]]
- [[privacy]]
- [[regulation]]
- [[recommender-systems-and-learning-paths]]
## Bağlı Makaleler
- [[lund-socially-accountable-data-science-xai-2026]] — XAI’ı hesap verebilirlik uygulaması olarak öğretmek için dört sütunlu çerçeve (yanıt verebilirlik, sorumluluk, yaptırım, düşünsel duruş) (Lund ve ark. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Öğrenci merkezli ITS’nin değere duyarlı tasarımı (işbirlikçi ve ham açıklamalar karşılaştırması)
- [[xai-education-framework]] — XAI-ED: eğitimde açıklanabilir YZ için temel çerçeve (Khosravi ve ark. 2022)
- [[xai-teachers-trust-edtech-recommendations-2026]] — Alana özgü açıklamalar öğretmenlerin güvenini ve kabulünü inşa eder (Feldman-Maggor ve ark. 2025)
- [[student-perspectives-ai-writing-grading-2026]] — Şeffaf YZ destekli değerlendirmeye ilişkin öğrenci görüşleri (AlGhamdi 2026)
- [[huang-interpretable-knowledge-tracing-2026]] — Yorumlanabilir bilgi izleme
- [[explainable-probabilistic-kt]] — Olasılıksal gömmeler yoluyla açıklanabilir bilgi izleme
- [[neural-symbolic-knowledge-tracing]] — Sinir-sembolik bilgi izleme
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Kara kutu modelleri öğrenme analitiği için kendini açıklayan LM’lere damıtmak
- [[villegas-ch-federated-explainable-learning-analytics-2026]] — Gizliliği koruyan risk modellemesi için federasyonlu ve açıklanabilir öğrenme analitiği
- [[sc2r-counterfactual-recourse-educational-2026]] — Eğitim karar desteği için anlamsal olarak kısıtlı karşıolgusal başvuru
- [[fair-explainable-edu-recommendations]] — Adil ve açıklanabilir eğitim önerileri
- [[multimodal-affective-its-presentation]] — Çok kipli duygusal geri bildirim için yorumlanabilir kapalı çevrim ITS
- [[jacome-vasconez-chatgpt-adoption-xai-2026]] — Yükseköğretimde ChatGPT benimsemesinin açıklanması
- [[li-explainable-trustworthy-llm-teacher-assessment-2025]] — Tasarım gereği açıklanabilir LLM çerçevesi: otomatik öğretmen değerlendirmesi için çift mercekli dikkat ve puanla parametrelenmiş açıklamalar (Li ve ark. 2025)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — YZ aracılı notlandırmada istek metni enjeksiyonu; tespitin kullanıcıya hiç bildirilmediği yer (Humble 2026)
- [[bloom-classifier-ai-assisted-questions-2026]] — Yeni YZ destekli eğitimsel soruların pedagojik değerlendirmesi için önceden eğitilmiş modellerin değerlendirmesi

- [[decision-making-agent-student-decision-acceptance-2026]] — Öğretmen kaynaklı ve YZ kaynaklı not verme kararları karşılaştırması: yazılı bir gerekçe adalet boşluğunu genişletti
## Kaynak

Khosravi, H., Buckingham Shum, S., Chen, G., Conati, C., Tsai, Y.-S., Kay, J., Knight, S., Martinez-Maldonado, R., Sadiq, S., & Gašević, D. (2022). [*Explainable Artificial Intelligence in education*](https://doi.org/10.1016/j.caeai.2022.100074). *Computers and Education: Artificial Intelligence*, 100074.
