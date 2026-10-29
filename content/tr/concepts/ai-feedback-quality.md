---
title: YZ Geri Bildirim Kalitesi
created: "2026-10-14T21:50:00-04:00"
connected_faqs: [ai-save-instructor-time, ai-feedback-at-scale, checking-whether-educational-ai-works]
type: concept
foundations: [ai-literacy]
technology: [generative-ai]
assessment: [ai-feedback-quality, automated-assessment, feedback, formative-assessment]
confidence: high
translation_of: concepts/ai-feedback-quality
source_updated: "2026-10-28T01:06:31-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **YZ geri bildirim kalitesi** — YZ sistemlerinin öğrenenler için ürettiği geri bildirimin doğruluğu, yararlılığı, zamanlaması ve [[pedagogy|pedagogical]] değeri. YZ tarafından üretilen geri bildirim eğitimde her yerde görülür hale geldikçe, geri bildirimi etkili kılan şeyi — ve ne zaman yetersiz kaldığını — anlamak, YZ’nin öğrenmeyi baltalamak yerine desteklemesini sağlamak açısından hayati önemdedir.

## Düşünülmesi Gerekenler

- Geri bildirimi “iyi” kılan nedir — yalnızca doğruluk mu, yoksa zamanında, özgül, harekete geçirici ve hâlihazırda bildiklerinize kalibre olmak da mı? Bunlardan hangisinin eksikliğini ilk fark ederdiniz?
- Araştırmalar, öğrencilerin YZ tarafından üretilen geri bildirimi bir öğretmeninkiyle karşılaştırılabilir biçimde deneyimlediğini buluyor — ancak kabul edilebilirlik [[learning-gains|learning effectiveness]] garanti etmez. İyi hissedilen geri bildirim neden yine de gelişmenize yardımcı olmaktan geri kalabilir?
- Yüksek kaliteli YZ geri bildirimi bile “geri bildirim okuryazar” bir alıcı olmadan etkisizdir — çalışmalar, düşük geri bildirim okuryazarlığının YZ geri bildirimini en aza indirebileceğini hatta olumsuzlaştırabileceğini gösteriyor. Bu okuryazarlığı oluşturmak kimin sorumluluğundadır?
- Geri bildirim kalitesi ile revizyon derinliği bağlantılıdır: öğrencilerin YZ geri bildirimiyle nasıl etkileşime girdiğini iskelemek, onları yüzeysel düzeltmeler yerine argüman düzeyinde iyileştirmeye kaydırır. Geri bildirimi alma biçiminiz onunla ne yaptığınızı nasıl değiştirir?
- Dalkavuk geri bildirim desteği hemfikiriyetle karıştırır — cevabınızı doğrulayan, sınamayan bir YZ, geri bildirimin düzeltici işlevini baltalar. Geri bildirim sizi ne zaman avutmaktan çok sınamalıdır?
- Güven kalibrasyonu önemlidir: ne zaman belirsiz olduğunu bilen bir sistem, kendinden emin biçimde yanılan birinden daha iyi geri bildirim verir. Bir araç belirsizliğini size nasıl bildirmeli ve o sinyali nasıl kullanırdınız?

## Giriş

YZ geri bildirim kalitesi yalnızca doğrulukla ilgili değildir. Etkili geri bildirim zamanında, özgül, harekete geçirici ve öğrenenin o anki anlayışına kalibre olmalıdır. Bu bilgi tabanındaki araştırmalar, YZ geri bildirim kalitesini birden fazla boyutta inceler: doğruluk (geri bildirim doğru mu?), yararlılık (öğrencinin gelişmesine yardım ediyor mu?) ve pedagojik uyum (yalnızca görev tamamlamayı değil, öğrenmeyi mi teşvik ediyor?).

### YZ geri bildirim kalitesi araştırmada nasıl görünüyor

- **İnsan geri bildirimiyle karşılaştırılabilirlik:** [[ai-generated-feedback-higher-ed|Studies in higher education]], YZ tarafından üretilen geri bildirimin kabul edilebilir ve destekleyici — öğretmen geri bildirimiyle karşılaştırılabilir — olarak deneyimlendiğini buluyor. Ancak kabul edilebilirlik öğrenme etkililiğini garanti etmez. PRISMA kılavuzeli 42 ampirik çalışmanın (2023–2025) bir [[meta-analysis-systematic-review|systematic review]] de [[llm]] notlama ve geri bildirim kalitesini göreve koşullu buluyor — ayrıntılı rubriklerle kısa, iyi yapılandırılmış cevaplarda insan değerlendiricileriyle örtüşürken karmaşık, açık uçlu veya [[multilingual-learning|multilingual]] çalışmalarda bozulur, geri bildirim bazen çok genel veya notla uyumsuz olur — ve notlama ile geri bildirim kalitesinin belirleyici unsurları olarak istek metni kalitesi, rubrik ayrıntısı, model sürümü ve değerlendirme dilini belirler ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).
- **LLM tarafından üretilen ders materyalleri insan yapımı olanlarla eşleşti — geri bildirim varken.** [[lin-rag-lesson-generation-tutor-training-2026|Lin et al. (2026)]], küratörlü araştırma kaynakları üzerinde [[rag|geri çağırma destekli]] bir boru hattıyla senaryo tabanlı öğretmen eğitim dersleri üretmiş ve bunları dikkatle elle yazılmış derslere karşı rastgele bir sekiz koşullu deneyde (N = 208) karşılaştırmıştır. İnsan yapımı ders daha yüksek son test performansı üretmiştir (0,793 / 0,730’e karşı), ancak yalnızca geri bildirim olmayan koşulda; anında açıklayıcı geri bildirimle kaynak farkı ortadan kalkmış ve geri bildirimin genel bir ana etkisi olmamıştır. İçerik üretimi için bulgu, insan-LLM boşluğunun bir iskeleleme boşluğu olduğunu öne sürer: üretilen materyaller, öğrenme ortamı dersin kendisinin sağlamadığı açıklayıcı geri bildirimi temin ettiğinde rekabetçidir.

Öğrenci algılı kalite, kabul edilebilirlikten daha karışıktır: 93 üniversite öğrencisinden 77’si YZ geri bildirimini anlaşılması kolay bulmuş, 68’i tekrarlayan ve 79’u kendi kendini çürüten bulmuştur; yalnızca 31’i karmaşık veya yaratıcı yazımı notladığını kabul etmiş ve notun %40’ının etkili olduğu nihai bir ödevde insan notlamasını %81,7 tercih etmiştir ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli et al. (2026)]]).
- **Geri bildirim mekanizması için havuzlanmış bir çapa.** 53 çalışmalık bir meta-analiz, GenAI geri bildiriminin çalışmadaki en büyük etkiyi ürettiğini bulmuştur (g = 1,27); kazanç için g = 0,40’a karşılık, anlamaya, zamanlamaya ve nesnelliğe atfedilir — ancak öğrenciler YZ geri bildirimine güvensemebilir ve duygusal yanıtı olmaması bilişsel yükü artırabilir ([[genai-educational-outcomes-meta-analysis|Dong (2026)]]).

Kontrollü bir karşılaştırma, geri bildirim bileşenini uyarlanabilir sistemden izole eder: aynı tanısal [[intelligent-tutoring|tutoring]] sistemiyle, otomatik gerçek zamanlı geri bildirim alan öğrenenler dört puanlık bir matematik değerlendirmesinde 1,90’dan 3,54’e yükselirken, onsuz 1,90’dan 2,85’e yükselmiştir (F(1, 76) = 9,24, p = .003, d = 0,73) ([[intelligent-tutoring-mathematics-education-review-2026|Ogunsakin et al. (2026)]]).

- **Destekleyici bir geri bildirim dizisi bile öğrenmeye zarar verebilir.** [[sequenced-ai-feedback-learning|Cao et al. (2026)]], teşvik → ipuçları → doğru cevap dizisinin algılanan teşvidi artırmasına rağmen son test puanlarını düşürdüğünü (B = −0,83, p = .02) bulmuş; sık yeniden gönderimler daha kötü performansı öngörmüştür (B = −0,33, p = .001); dolayısıyla etkileşim ve memnuniyet [[learning-gains|learning]] vekilleri değildir.

- **Geri bildirim sınıflandırma [[benchmark|benchmarks]]:** [[teaching-feedback-classification-benchmark|Cross-language feedback benchmarks]], geri bildirim kalitesi sınıflandırmasının diller ve eğitim bağlamları arasında aktarılıp aktarılmadığını değerlendirir; bu, [[ai-ed-evaluation]] ile bağlantılıdır.

- **İşbirlikçi geri bildirim sistemleri:** [[becerra-aicofe-feedback-2026|AICoFE]], YZ tabanlı işbirlikçi geri bildirimi [[higher-ed|higher education]] uygular ve konuşlandırır; hem sistem performansını hem öğrenci kabulünü değerlendirir.

- **Kişiselleştirme önyargı kodlayabilir.** Denemeyi sabit tutarak geri bildirimi bir öğrencinin ırkına, diline veya engeline koşullanmak, dört LLM’yi olumlu geri bildirim önyargısına (aşırı övgü) ve geri bildirim esirgeme önyargısına (daha az öznel eleştiri) kaydırmıştır — kişiselleştirilmiş geri bildirimin ayrımcı hale geldiği mekanizma budur ([[marked-pedagogies-linguistic-bias-writing-feedback|Tan, Phalen & Demszky (2026)]]).

- **Otomatik not verme geri bildirimi:** [[automated-assessment|Automated Grading]] ve [[formative-assessment]] araştırmaları, YZ tarafından notlanan [[assessment|assessments]], insan notlama kalitesiyle eşleşen veya onu aşan geri bildirim sağlayıp sağlamadığını inceler.

- **Deneme puanlama geri bildirimi:** [[cong-confidence-asag-2026|Confidence-aware ASAG]] ve [[choi-anchor-aes-prompting-2025|anchor-based AES]], güven kalibrasyonunun ve [[prompt-engineering|prompting]] tasarımının yazma değerlendirmesinde geri bildirim kalitesini nasıl etkilediğini araştırır.
- **Kanıtla sınırlı, riske uyarlanabilir geri bildirim:** [[risk-adaptive-genai-feedback-programming-2026|Wang (2026)]], geri bildirim araştırmasının genellikle birlikte değerlendirdiği üç işlevi ayırır — hangi başarısız durumun süreceğini öngörmek, sınırlı destek kapasitesinin ne zaman harcanacağına karar vermek ve iddiaları kaydedilmiş kanıtın içinde tutan geri bildirim üretmek. 215 öğrenciden gelen 2.993 başarısız gönderim durumu üzerinde, kalibre edilmiş bir risk modeli uygun test durumlarının %17,8’ini seçmiş ve gözlenen süregelen arızaların %25,2’sini yakalamış; standartlaştırılmış tek bir onarım geçişinden sonra üretilen 544 mesajdan 519’u tüm gerekli bileşenleri taşımıştır. Zamanlama ve temellendirme bu nedenle, dil bilgisel kalite ve erişilebilirlikle birlikte bir geri bildirim sisteminin yargılanmak zorunda olduğu boyutlar olarak katılır.

- **İhtiyari geri bildirim sağlama:** [[ai-assistance-discretionary-feedback|Research on AI-assisted feedback in higher education]], YZ’nin öğretmenlerin sağladığı geri bildirimin miktarını ve kalitesini artırıp artırmadığını inceler.
- **İlişkisel katman devre bırakmaya direnir:** bir YZ geri bildirim aracı kullanan 21 yükseköğretim öğretmeni arasında 12’si modelin metnini yeniden yazmış, revizyonlar ton ve teşvik üzerinde kümelenmiş (Öğrenci–Öğretmen İlişkisi f = 24); daha deneyimli öğretmenler düzenleme yükünü, güveni ve yanlış bilgi riskini işaret ederken acemiler araca uymuştur ([[learner-centered-feedback-ai|Aldino et al. (2026)]]).

- **YZ’nin avantajını doğuştan üstünlük değil, güvenilir sağlama yönlendirir:** [[gpt4-feedback-student-activation-2026|Geschwind et al. (2026)]]’ın bir dönem süren alan deneyi, GPT-4 geri bildiriminin [[peer-assessment|peer feedback]] geçtiğini bulmuştur, çünkü *tutarlı* biçimde sunulmuştur — YZ geri bildirimi alanların neredeyse tamamı (398’den 369’u) metinsel ve sayısal geri bildirim almışken akran geri bildirimi alan öğrencilerin üçte ikisinden azı hiç almamış, akran geri bildiriminin çoğu hedefli olmayan övgü olmuştur. Yüksek kaliteli metinsel akran geri bildirimi alındığında akran sonuçları YZ ile eşleşmiştir — bu, YZ avantajının güvenilirlik, marjinal kalite olmadığını gösterir. Öğrenciler ayrıca akran geri bildirimini algılanan geçerlilik ve duygu boyutunda hafifçe daha yüksek notlamış (hafif [[trust|algorithm aversion]]), yine de YZ’den daha çok harekete geçip daha çok öğrenmiştir; bu da algılanan kalite ile davranışsal sonuçların ayrışabileceğini gösterir.
- **Kalite eşitliği turlar boyunca sona erebilir.** Paylaşılan bir rubrik üzerinde, akran grup geri bildirimi birinci turda ChatGPT-4o ile beş boyutta eşleşmiş; ancak ikinci turda model yapıcılık, doğruluk ve somutluk boyutlarında öne geçmiştir — bunu rubriye uyumlu istek metni ve pratiğe, sabit bir model özelliğine değil atfederler ([[peer-group-vs-ai-feedback-2026|Li et al. (2026)]]).
- **Avantaj, düzeltici geri bildirim değil, çözümlenmiş bir örnekten gelebilir.** Kapak mektuplarını YZ ile pratik etmek, sonraki desteksiz bir görevde deneyimli insan editörlerinden gelen geri bildirimi geçmiştir (d = .20); yalnızca bir YZ tarafından revize edilmiş mektup görüntülemek aracı pratikle eşleşmiştir; dolayısıyla kazanç örneği izlemiştir ([[coach-not-crutch-ai-writing|Lira et al. (2025)]]).

- **Kaynak etiketi / geri bildirim kalitesi:** [[perceptions-teacher-vs-ai-feedback-bias-2026|Mertens et al. (2026)]], içeriği sabit tutarak geri bildirimin *kaynağını* kalitesinden ayırır — 401 öğretmen, tamamı GPT-4-turbo ile üretilmiş ancak rastgele öğretmen veya [[generative-ai|ChatGPT]] yapımı olarak etiketlenmiş geri bildirim mesajlarını notlamış; yalnızca etiket, güvenilirliği (b = 0,21), yararlılığı (b = 0,47) ve adaleti (b = 0,48, hepsi p < .001) kaydırmış; öğretmen etiketli mesajı %73 tercih etmiş, t(400) = 15,55, d = 0,78. Sağlayıcı odaklı maddeler en uzağa gitmiş — algılanan çaba (b = 1,34) ve güvenme isteği (b = 1,45) — ve ChatGPT’in nasıl çalıştığına dair yazılı bir açıklama hiçbir şeyi değiştirmemiştir (etkileşim ps ≥ .399); bu, değerlendiricideki [[trust]], [[learner-identity|professional identity]] ve [[bias-mitigation|ingroup bias]] işaret eder, geri bildirimin kendisindeki bir eksikliğe değil. Algılanan kalite bu nedenle, içerik özdeş olduğunda bile kökene bağlı olarak indirilebilir; bu, gerçekten iyi bir aracın kullanım noktasında takılabileceği anlamına gelir.

- **Kaynak etiketi / geri bildirim kalitesi, öğrenci tarafında:** [[nazaretsky-feedback-source-bias-2025|Nazaretsky et al. (2025)]], öğrenci tarafı karşılığını çalıştırmış; altı dersteki 472 EPFL öğrencisi, kaynağı kör biçimde kendi ödevlerindeki geri bildirimi ve yeniden açıklandıktan sonra notlamış; çoğu iki çeşidi ayırt edememiştir (472’den 287’si doğru tahmin etti). Notlar daha sonra zıt yönlerde hareket etmiş — Özgünlük için belirgin biçimde (p < .01) — insan sağlayıcılar YZ’den daha güvenilir notlanmış (μ = 3,28, σ = 0,77 / μ = 2,25, σ = 0,85, Cohen’in d’si = 0,57). Yanlış atıf çoğunlukla tek yönde işlemiş: düşük notlu insan geri bildiriminin 219 örneğinden 205’i YZ olarak okunmuş; dolayısıyla algılanan kalite ile algılanan kimlik birbirini her iki yönde de yeniden şekillendirir, etiketin yalnızca özdeş metni indirmesi değil.

- **Alıcı tarafındaki sınır olarak geri bildirim okuryazarlığı:** [[liu-deris-ai-feedback-literacy-uptake|Liu & Deris (2025)]], öğrencilerin YZ geri bildirimini gerçekte benimsemesini öngören bir **YZ Geri Bildirim Okuryazarlığı (AIFL) ölçeği** (16 madde, Tutumlar/Uygulamalar faktörleri) doğrular ve [[mendoza-ai-feedback-feedback-literacy-srl|Mendoza et al. (2026)]], [[feedback-literacy|feedback literacy]] YZ geri bildiriminin [[self-regulated-learning]] iyileştirip iyileştirmediğini düzenleyici ettiğini gösterir — yüksek okuryazarlık fayda, düşük okuryazarlık en aza indiren veya olumsuzlaştıran etkiler verir. Geri bildirim kalitesi ile geri bildirim okuryazarlığı tek bir sistemin iki yüzüdür: yüksek kaliteli YZ geri bildirimi bile okuryazar bir alıcı olmadan etkisizdir.

- **Geri bildirim kalitesi revizyon derinliğini yönlendirir:** [[rethinking-ai-writing-feedback-literacy|Feedback literacy scripts]] ve [[feedback-literacy-scripts-eap-writing|second-rater mechanisms]], öğrencilerin YZ geri bildirimiyle nasıl etkileşime girdiğini [[scaffolding]], revizyonu yüzeysel düzeltmeler yerine argüman düzeyinde iyileştirmeye kaydırdığını gösterir — daha derin revizyonu teşvik eden geri bildirim daha yüksek kalitelidir. Öğrencilerin yorumlarla *ne yaptığı* ayrıca türlerine değil, yalnızca sayılarına değil de bağlıdır. Sekiz haftalık bir L2 yazma karşılaştırmasında, öğretmenin daha geniş, kendini ayarlayan hata düzeltmesi daha büyük ilk görev kazancını sağlamış; ancak ikinci görevde çalışma yapısal atılımlar talep ettiğinde yaklaşık üçte bir düşmüştür; oysa [[peer-assessment|AI-assisted peer feedback]]nin daha dar ama daha kararlı odağı iyileşmesini korumuş ve öğretmen sınıfının ikinci görev revizyon ortalamasını geçmiştir — yazarların istatistiksel olarak anlamlı bulmadığı bir gruplar arası boşluk. Yazarlar, otoriter ve hataya ağırlıklı düzeltmeyi pasif, hatadan kaçınma odaklı revizyonu teşvik eden bir şey olarak okurlar ve iki kipi [[scaffolding|heterogeneous scaffolds]] olarak, ikame olarak değil ele alırlar ([[teacher-vs-ai-peer-feedback-l2-writing-2026|Tang, Li & Luo, 2026]]); hiçbir kip sözdizimsel karmaşıklığı hareket ettirmedi, dolayısıyla geri bildirim kalitesi ayrıca üzerinde işlem yapabildiği beceri katmanıyla sınırlıdır.

- **Bir geri bildirim hatası olarak dalkavukluk:** [[ai-sycophancy|Sycophantic]] geri bildirim desteği hemfikiriyetle karıştırır — bir öğrencinin cevabını doğrulayan, sınamayan bir YZ, geri bildirimin düzeltici işlevini baltalar ve olumlu hissettirse bile kaliteyi düşürür. [[eduframetrap-llm-sycophancy-educational-safety|EduFrameTrap]], [[intelligent-tutoring|tutors]] sosyal baskı altında düzeltici geri bildirimi esirgediğini gösterir ve [[contextual-sycophancy-ai-literacy|contextual sycophancy]], hataları sonraki tavsiyelere taşır; etkili geri bildirim bazen öğrenciyi sınamalıdır.

- **Teşhis doğruluğu geri bildirim kalitesini yalnızca kısmen belirler — ve LLM [[self-assessment|self-evaluation]] [[human-in-the-loop-ai|human judgment]]yla uyumsuzlaşır:** [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]], GPT-4’ün bir College Algebra öğretmeninde zamanın yaklaşık %66’sında hataya yönelik ipuçları ürettiğini bulmuştur; ancak yaklaşık %35’i çok genel, hatalı veya cevabı ele vermiştir; teşhis yanlış olduğunda bile model sıklıkla ilgili, genel ama doğru geri bildirimle toparlanmış; neredeyse tüm hatalı geri bildirim yanlış teşhizi izlemiştir. Benzetilmiş öğrenci otomatik kalite kontrolleri her iki testte ipuçlarının yalnızca %21,4’ünü geçirmiş, hedefli geri bildirimi zamanın yaklaşık %70’inde reddetmiş ve yalnızca cevabı ele veren ipuçlarını tercih etmiştir — bu, otomatik [[ai-ed-evaluation|evaluation]] yardımcılığa dair insan yargılarından keskin biçimde ayrışabileceğinin ve bunlara karşı kalibre edilmesi gerektiğinin çarpıcı bir gösterimidir.

- **Kararlı çıktı geçerli geri bildirim değildir:** 12 TEACH çerçevesi sınıf videosu üzerinde güvenilirlik ve doğruluk ayrılmıştır — sekiz LLM uç noktasından en kararlı olanı sertifikalı uzmanlara karşı en zayıflar arasında yer almıştır (tam anlaşma 0,31) ve her model sözlü ipuçlarını zımni pedagojik kanıta tercih etmiş, yönergelerin olmadığı yerlerde düşük puan vermiştir ([[melo-llm-classroom-observation-teach-2026|Melo et al., 2026]]).

- **YZ öğretim yorumlarının dil bilimsel ve algısal kalitesi:** [[wang-chatgpt-comments-video-learning-scaffolding-2026|Wang, Du and Jin (2026)]], ChatGPT tarafından üretilen video içi iskeleleme yorumlarını öğretmen yorumlarına karşı sözcük türü kompozisyonu, 3-gram çeşitliliği, Zipf yasası uyumu, okunabilirlik, konu başılığı ilgililiği (TF-IDF ve BERTScore) ve öğrenci derecelendirmeleri üzerinden değerlendirir. Üretilen yorumlar *daha* karmaşık ve sıfatlarla zengin ancak *daha* az çeşitli ve daha az okunabilirdir; konu hizalama boyutunda (bilgi desteği için 0,747’ye karşı 0,607 BERTScore) ve algılanan zamanlama ve yardımcılık boyutunda insan yorumlarının gerisinde kalmıştır — bu, YZ geri bildirim kalitesinin dil bilgisel [[accessibility]] ve [[affective-computing|affective]] uyuma göre yargılanması gerektiğinin kanıtıdır, yalnızca ilgiliğe göre değil. Analitik bataryaları, YZ tarafından üretilen öğretim içeriğini denetlemek için yeniden kullanılabilir bir [[learning-analytics]] boru hattı olarak sunulur.

- **Kalitenin ölçülmüş yordayıcıları olarak istek metni tasarımı ve model seçimi:** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen et al. (2026)]], 153 hizmet öncesi öğretmenin ders planlama hedefleri için üretilen geri bildirim üzerinde hiyerarşik regresyonla YZ geri bildirim kalitesinin kaynaklarını ayrıştırır. Üç model altında dört sistematik olarak çeşitlendirilmiş istek metniyle üretilen 240 geri bildirim üzerinde, model tek başına dokuz kategorili kalite derecelendirmelerindeki varyansın %26,9’unu açıklamış; istek metni eklenince model %42,8’e yükselmiştir (ΔR² = %15,9); en güçlü model-istek metni bileşimleriyle tekrarlamada (345 geri bildirim) model %18,4’ü, istek metni ilave olarak %5,7’yi açıklamıştır. En büyük tek istek metni etkisi olumsuz olmuştur: alana özgü teknik terminolojiyi gündelik parafrazlerle değiştirmek geri bildirim kalitesini belirgin biçimde düşürmüştür (β = −0,412), oysa somut örnekler eklemek ve akıl yürütme zinciri talimatını kaldırmak ilk çalışmada anlamlı olmamıştır. Kalite bu nedenle “YZ’nin” sabit bir özelliği değildir — hangi modelin seçildiğine ve görevin nasıl ifade edildiğine bağlı olarak birlikte üretilir ve her ikisi de öğretilebilirdir.

Üslup, bedeli olan bir kalite boyutudur: aynı modelle, yönlendirici geri bildirim temel özellikleri önceliklendirme ve özgüllük üzerinde daha yüksek puan almış; Sokratik geri bildirim ise anlama izlemeyi yükseltmiş — yönlendirici geri bildirim daha yüksek bilişsel yük taşımıştır ([[agent-type-feedback-style-self-directed-learning-2026|Han et al. (2026)]]).

Geri bildirimin *üretiliş* biçimi de bu listeye aittir. Argüman düzenine sahip denemeler için modüler bir otomatik yazma değerlendirme sisteminde, 90 öğretmen etiketli deneme üzerinde denetimli ince ayar kullanılamaz geri bildirim üretmiştir — ince ayarlanmış GPT-4o, her çıkarımda 8.000 belirteçlik bağlam penceresini aşmış ve ince ayarlanmış LLaMA-3.3-70B ayrıştırılamayan JSON yaymıştır — oysa doğrudan Claude 3.7’ye istek metni vermek, öğretmenlerin %94,69’ini gerekli ve etkili bulduğu 40 deneme üzerinde 630 mikro yorum üretmiştir; yazarlar, deterministik olmayan bir üretme görevi için ince ayarın istek metni vererek çalışmayı geçebileceği sonucuna varmışlardır ([[wraft-automated-writing-evaluation-argumentative-2026|Labib et al., 2026]]).

### Kalite boyutları

YZ geri bildirim kalitesi, bilgi tabanında yakalanan birden fazla boyutu kapsar:
- **Doğruluk:** Geri bildirim hataları ve güçlü yanları doğru belirliyor mu? ([[automated-assessment|Automated Grading]], [[automated-essay-scoring]])
- **Kanıtın erişilebilirliği:** Sistem yargıladığı kanıta gerçekten erişebiliyor mu? [[ai-assisted-physics-lab-report-assessment-2026|Abreu, Stari and Martí (2026)]], bir gönderimde var olan kanıtı, işlemeden sonra erişilebilir kanıttan ayırır — bir denklem, grafik veya birim bir raporda yer alabilir, ancak hiç erişilmeyebilir; böylece o ölçüte ilişkin geri bildirim hiçbir şeye dayanmaz — bu, erişilebilirliği doğruluk veya kalibrasyondan farklı bir kalite boyutu yapar. Onların yanıtı, her puanın rapordan somut kanıt atfetmesini gerektirmektir; böylece metne geri izlenemeyen bir gözlem, desteklenmemiş olarak görünür hale gelir.
- **Yardımcılık:** Geri bildirim iyileştirmeye yönlendiriyor mu? ([[feedback|Feedback Loop]], [[becerra-aicofe-feedback-2026]])
- **Zamanlama:** Geri bildirim, öğrenenin üzerinde işlem yapabileceği anda sunuluyor mu? ([[formative-assessment]])
- **Nesnel bir ölçüye karşı doğrulanabilirlik:** Hedef makince ölçülebilir olduğunda, geri bildirim bir rubrik yerine fiziksel bir ölçüme karşı kontrol edilebilir. [[ai-feedback-violin-intonation-2026|Aksoy (2026)]], 2.208 nota düzeyinde sent cinsinden ses yüksekliği sapması çıkarmış ve bu tabloları modele vermiştir; böylece iddialarının ölçülebilir bir referansı olmuştur.
- **Önyargı:** Geri bildirim öğrenci nüfusları arasında adil mi? ([[bias-mitigation]], [[equity-in-ai-education]])

- **Etik ve şeffaflık:** İlk sıradaki 50 üniversiteden yalnızca 14’ü öğretmenlerin geri bildirim için YZ kullanımına ilişkin özgül rehberliğe sahipti ve öğrenciler açıklanmayan YZ geri bildirimini “samimiyetsiz” olarak tanımladı — şeffaflık ve rıza, geri bildirimin kabul edilip edilmediğini yalnızca doğru olup olmadığından bağımsız olarak şekillendirir ([[luo-eaton-ai-student-feedback-ethics-2026|Luo & Eaton (2026)]]).
- **Kalibrasyon:** Sistem ne zaman belirsiz olduğunu biliyor mu? ([[automated-assessment|Confidence Aware AI Assessment]])

- **Doğrulayıcı tarafından puanlanan yayım ölçütleri.** LearnLens, üretilen geri bildirimi bilimsel doğruluk, açıklık ve özgüllük üzerinden puanlar ve her ölçüt bir eşiği geçene kadar bir doğrulama-revizyon döngüsü yineler; model ailesi önyargısını önlemek için üreticiden *ayrı* bir temel model kullanır; puanlaması MSE üzerinde her temel çizginin %8–13 altında kalmıştır (3,190) ([[zhao-learnlens-feedback-educators-loop|Zhao et al. (2025)]]).
- **Öğrenenin kendi dilinde anlaşılabilirlik.** Geri bildirim yalnızca öğrenen işareti değil, açıklamayı izleyebildiğinde bir boşluğu kapatır. Ulusal teknik eğitim müfredatları üzerinde ince ayarlanmış yerelleşmiş bir model olan Kwara-STEM AI Tutor, öğrencileri cevapları ele vermek yerine yönlendirmiş ve karmaşık teknik terimleri Yoruba veya Nupe’ye çeviren bir “Açıkla” özelliği sunmuştur; böylece gerçek zamanlı düzeltme öğrenenin kendi dil bağlamında yere ulaşmıştır ([[real-time-ai-feedback-technical-skills-2026|Muritala, Ahmed & Olumorin, 2026]]). Kendi dilinde açıklama, eşzamanlı geri bildirimin yararlılığının bir koşuludur, dekoratif bir ek değil.
- **Kapsam uyum değildir.** Üç istek metni stratejisi altındaki altı LLM’nin her biri yedi geri bildirim odak türünün çoğunu üretmiş olmasına rağmen, bu türler üzerindeki dağılımları öğretmenlerinkinden sapmıştır (en iyi Jensen-Shannon sapması 0,134, en kötü 0,270); dolayısıyla kapsam genişliği ile dağılımsal uyum ayrı kalite sinyalleridir ([[llm-feedback-focus-adaptivity-student-writing-2026|Almousa et al., 2026]]).

### Daha geniş kavramlarla bağlantı

YZ geri bildirim kalitesi temelde [[formative-assessment]] ve [[feedback|Feedback Loop]] ile bağlanır — kaliteli geri bildirim, mevcut ile istenen performans arasındaki boşluğu kapatır. [[automated-assessment|Automated Grading]] (geri bildirimin dayandığı puanları üretir), [[ai-literacy]] (öğrenciler geri bildirim kalitesini eleştirel biçimde değerlendirmelidir) ve [[cognitive-offloading|Over-Reliance]] (YZ geri bildirimini eleştirel olmayan kabulü öğrenmenin yerini alabilir) ile kesişir. [[writing-education]] için, YZ’nin yazma değerlendirmesindeki artan rolü göz önüne alındığında geri bildirim kalitesi özellikle sonuçları olan bir şeydir.

## Bağlı kavramlar

- [[pedagogical-patterns]] — Quality does not predict revision: the sequences that make AI feedback usable
- [[formative-assessment]]
- [[automated-assessment]]
- [[feedback]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[bias-mitigation]]
- [[automated-essay-scoring]]
- [[assessment-validity]]
- [[writing-education]]
- [[higher-ed]]
- [[teacher-role]]
- [[feedback-literacy]]
- [[ai-sycophancy]]
- [[trust-calibration]]

## Bağlı makaleler
- [[ai-feedback-violin-intonation-2026]] — AI feedback on intonation checked against 2,208 machine-measured pitch deviations (Aksoy 2026)
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT: a Modularized Automated Writing Evaluation System for Argumentative Essays
- [[wang-chatgpt-comments-video-learning-scaffolding-2026]] — Assessing ChatGPT in-video comments: linguistic, semantic, and perceptual quality (Wang, Du & Jin 2026)
- [[luo-eaton-ai-student-feedback-ethics-2026]]
- [[coach-not-crutch-ai-writing]] — AI writing feedback outperformed human editors on practice letters (Lira et al. 2025)
- [[zhao-learnlens-feedback-educators-loop]] — LearnLens: LLM feedback generation with educators in the loop (Zhao et al. 2025)
- [[melo-llm-classroom-observation-teach-2026]] — LLM classroom observation feedback reliability and limits (Melo et al. 2026)
- [[learner-centered-feedback-ai]] — Teachers' practices and perceptions of AI learner-centered feedback (PolyFeed)
- [[ai-generated-feedback-higher-ed]] — AI-Generated Feedback in Higher Education
- [[teaching-feedback-classification-benchmark]] — Teaching Feedback Classification Benchmark
- [[becerra-aicofe-feedback-2026]] — AICoFE: AI-Powered Collaborative Feedback
- [[cong-confidence-asag-2026]] — Confidence-Aware Short Answer Grading
- [[choi-anchor-aes-prompting-2025]] — Anchor-Based AES Prompting
- [[ai-assistance-discretionary-feedback]] — AI Assistance for Discretionary Feedback
- [[sequenced-ai-feedback-learning]] — Sequenced AI Feedback and Learning
- [[eduframetrap-llm-sycophancy-educational-safety]] — Sycophancy is an educational safety risk: Why LLM tutors need sycophancy benchmarks
- [[contextual-sycophancy-ai-literacy]] — The Hidden Cost of Contextual Sycophancy: an AI Literacy Intervention
- [[genai-educational-outcomes-meta-analysis]]
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: bias in automated writing feedback
- [[gpt4-feedback-student-activation-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — Prompt engineering and model selection as predictors of AI-feedback quality (Jacobsen et al. 2026)
- [[perceptions-teacher-vs-ai-feedback-bias-2026]] — Randomized source labels on identical GPT-4 feedback: teachers discount AI-attributed feedback (Mertens et al. 2026)
- [[peer-group-vs-ai-feedback-2026]] — Comparative analysis of peer group and AI-generated feedback in peer assessment: Insights into feedback quality and student perceptions in higher education
- [[ai-assisted-physics-lab-report-assessment-2026]] — AI-Assisted Assessment of Experimental Physics Laboratory Reports: Potential, Limitations, and Support for Teaching Practice
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Evaluating Feedback Focus and Pedagogical Adaptivity in LLM-Generated Feedback on Student Writing
- [[risk-adaptive-genai-feedback-programming-2026]] — A Risk-Adaptive and Evidence-Constrained Framework for Generative AI Feedback in Programming Education
- [[real-time-ai-feedback-technical-skills-2026]] — Own-language "Clarify" explanation and scaffolded nudges in a real-time tutor: what makes synchronous feedback usable (Muritala, Ahmed & Olumorin 2026)
- [[teacher-vs-ai-peer-feedback-l2-writing-2026]] — Teacher vs AI-assisted peer feedback: authoritative error correction decays, steady focus holds, and what students do with each (Tang, Li & Luo 2026)
- [[nazaretsky-feedback-source-bias-2025]] — Blind-then-disclosed source labels on identical feedback: students rate AI-labeled feedback lower and read low-rated human feedback as AI

- [[intelligent-tutoring-mathematics-education-review-2026]] — Narrative review of AI tutoring in mathematics: real-time feedback gains and implementation conditions
- [[agent-type-feedback-style-self-directed-learning-2026]] — Socratic versus directive feedback styles: comprehension monitoring against prioritization, and the cognitive-load cost
- [[when-students-prefer-ai-scoring-feedback-2026]] — Student-perceived AI feedback quality: understandable yet repetitive, trusted for mechanics not interpretation
- [[lin-rag-lesson-generation-tutor-training-2026]] — RAG-generated tutor-training lessons matched human-created ones when feedback was present; the human advantage appeared only without feedback
