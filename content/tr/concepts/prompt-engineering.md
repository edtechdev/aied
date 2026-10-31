---
title: İstek Metni Mühendisliği
created: "2026-10-14T21:58:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer]
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [generative-ai, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
connected_resources: [edugems, matt-pocock-skills, pedagogical-promptbook, writing-rhetoric-studies-in-the-loop]
translation_of: concepts/prompt-engineering
source_updated: "2026-10-30T10:50:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **İstek metni mühendisliği** — istenen çıktıları elde etmek üzere büyük dil modellerine verilen girdileri tasarlama ve iyileştirme uygulaması. Eğitimde istek metni mühendisliği ikili roller üstlenir: bir öğrenen becerisi olarak (öğrenciler etkili biçimde istek metni yazmayı öğrenmelidir) ve bir sistem tasarım kaldıracı olarak (geliştiriciler, [[intelligent-tutoring|YZ öğretmenliği]] davranışını şekillendiren istek metinleri hazırlar).

## Düşünülmesi Gerekenler

- Bir YZ aracına yakın zamanda büyük olasılıkla bir istek metni yazdınız. Şimdi şunu düşünün: onu ifade ettiğiniz biçim nötr değildir — nasıl planladığınızı, düşündüğünüzü ve çabanızı nasıl dağıttığınızı ortaya çıkarabilir. Kendi istek metni yazma alışkanlıklarınız sorunlara nasıl yaklaştığınız hakkında ne söyleyebilir?
- Bir çalışma, istekleri becerikli biçimde ifade eden kullanıcıların, aynı niyeti daha az mahir ifade edenlere kıyasla sistematik olarak daha iyi çıktı aldığını buldu. 'İstek metni ayrıcalığı’nın gerçek olduğunu kabul ederseniz, YZ’ye adil erişim en iyi herkese daha iyi istek metni yazmayı [[teacher-role|öğretmek]] mi yoksa bu beceriyi talep etmeyen sistemi yeniden tasarlamak mı düzeltir — ve her birinin ödünleşimleri nelerdir?
- İstek metni yazmak ezberlenecek bir 'hile' mi, gerçek bir entelektüel beceri mi? [[research-methods-aied|Araştırmanın]] bir çizgisi onu bir disiplin içinde (gazetecilik, hukuk, [[medical-education|tıp]]) mesleki muhakeme olarak ele alır; diğeri onu YZ okuryazarlığının bir çekirdeği olarak görür. Hangi görüş, iyi istek metinlerini kötülerinden ayıran şeyle ilgili kendi deneyiminizle örtüşür?
- İyi tasarlanmış istek metinleri öğrenci düşüncesini iskeleyebilir, kötü kullanılanlar bilişsel dış kaynak kullanımını teşvik edebilir. Bir YZ cevabının sizin yerinize düşündüğü bir anı hatırlayabiliyor musunuz? Bunu ne yaptı — istek metni mi yoksa niyetiniz mi — ve tersini yapacak biçimde tasarlanabilir miydi?
- İstek metni yazmak hem bir öğrenen becerisi hem bir sistem tasarım kaldıracıdır: bazı öğretmenler artık kullanıcı için istek metinlerini otomatik olarak yönlendirir ve seçer. İstek metni kullanıcıdan sisteme geçtikçe öğrenciler neyi kaybeder — ve neyi kazanır?
- Okumadan önce küçük bir hedef belirleyin: istek metni mühendisliğini öğrendikten sonra kendi işinizde istek metinleri yazma biçiminizi nasıl değiştireceğinize karar verin ve işe yaradığını bilmek için hangi sonucu kontrol edeceğinizi belirleyin.

## Giriş

İstek metni mühendisliği, eğitimde etkili [[generative-ai]] kullanımı için merkezidir. Geleneksel programlama arayüzlerinin aksine, LLM’ler doğal dile yanıt verir — ancak bu yanıtların kalitesi, doğruluğu ve [[pedagogy|pedagojik]] değeri büyük ölçüde istek metni tasarımına bağlıdır. Bu bilgi tabanındaki araştırma, istek metni yazmanın nötr bir eylem olmadığını ortaya koyar: öğrencilerin nasıl düşündüğünü, planladığını ve bilişsel çabayı nasıl dağıttığını yansıtır. [[miles-prompt-literacy-human-centered-genai-framework-2026|Miles, Haber-Curran ve Arar (2026)]], terimin kapsadığını; performans için girdilerin teknik optimizasyonu olan istek metni mühendisliğini, amacı netleştirmenin, çıktıyı eleştirel okumanın ve belirtilen gerekçelerle düzeltmenin retorik, etik ve yansıtıcı işi olan istek metni okuryazarlığından ayırarak keskinleştirir. Onların İstek Metni Okuryazarlığı Döngüsü (Amacı Netleştir, İstek Metni Oluştur, Çıktıyla Etkileşime Gir, İstek Metnini İyileştir, Yansıt) ve örnek bir süreç rubriği ayrımı öğretilebilir kılar; yalnızca çıktıları optimize eden öğretimin LLM kullanımının etik ve epistemolojik boyutlarına dokunmadığını savunurlar.

### İstek metni mühendisliği araştırmada nasıl görünür

- **Bilişsel iz olarak istek metni yazma:** [[misiejuk-cognitive-offloading-prompting-2026|Misiejuk ve ark.]], istek metni örüntülerinin [[cognitive-offloading|bilişsel dış kaynak kullanımını]] açığa çıkardığını gösterir — yüksek kaliteli iş, bağlam açısından zengin, nazik ve öğretici istek metinleri kullanır; düşük kaliteli iş, alan temeli olmadan tepkisel itiraz gösterir


- **Belirsiz istek metinleri diyalogda iz bırakır.** Düşük kaliteli grubun imzası, belirsiz istek metinlerine ve YZ’nin yanlış okumalarına kadar izlenen kendini yineleyen bir açıklama döngüsüydü (IC→IC, Z = 3,25) ve çalışmanın en büyük hayal kırıklığı farkını taşıyordu (2,12’ye karşı 3,82); gerçek günlük kayıtları üzerinde istek metni hata ayıklaması, tam olarak bunu gerçekleşirken hedefler ([[fang-human-ai-collaboration-patterns-instructional-design-2026|Fang ve ark. (2026)]]).

- **Derinlik ürünü iyileştirir, kalıcılığı değil.** 22 lisansüstü öğrencide, açıklama arayan ("neden/nasıl/açıkla") istek metinlerinin payı, temel bilgi ve istek metni hacminin ötesinde bağımsız puanlanmış görev kalitesini öngördü (β = 6,27), ancak anlık hatırlamayla sıfır ilişki gösterdi ([[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]).

- **İstek metni bilişi disiplini izler, öğrenciyi değil.** [[student-ai-conversations-cognitive-engagement-2026|Chang ve Li (2026)]], 116 kurstan gelen 60.087 istek metnini sınıflandırdı ve Bloom düzeyi profillerinin disipline göre farklılaştığını buldu — STEM’de Uygula ağırlıklı (%20,8), sosyal bilimlerde Yaratma ağırlıklı (%33,8) — kurs düzeyi varyansın öğrenci düzeyi varyansı aştığı bir dağılımla.
- **Okuryazarlık olarak istek metni yazma:** [[tracing-genai-literacy-interaction-patterns|Tracing GenAI literacy]] ve [[aaai2026-prompting-literacy-k12|K-12 istek metni okuryazarlığı]] araştırmaları, istek metni yazmayı temel bir [[ai-literacy]] bileşeni olarak çerçeveler
- **Acemilerin varsayılanı deneme yanılma ve modeli suçlamaktır.** Bir metin dilbilim seminerinde, on genAI acemisi istek metinlerini deneme yanılma ile iyileştirdi, bağlam içi örneklere nadiren başvurdu ve zayıf çıktıları ezici çoğunlukla LLM’ye değil kendi istek metni formülasyonuna bağlamadı ([[llms-text-linguistics-teaching-2026|Brocca & Garassino (2026)]]).


- **Öğretmen istek metnini modeled öğrenciler onu aynen yeniden kullanır.** On iki ortaokul STEAM grubundan gelen 310 kayıtlı istek metni arasında, öğretmenin talimatının aynen kopyalanması %47,1 ile en sık öğrenci duruşu oldu; kendiliğinden sorgulamayı %28,7 geride bıraktı ([[middle-school-genai-steam-interactions-2026|Zhao & Li (2026)]]).

- **Düzenleyici bir döngü, bir istek metni formülünü yener.** 42 lisans öğrencisiyle yarı deneysel bir pilotta, IDEA döngüsünü (Niyet, Çözümleme, İfade, Uyarlama) öğretilen öğrenciler, Rol–Görev–Bağlam–Biçim isteme yöntemi öğretilen akranlarından beş görev kategorisinin tümünde daha yüksek kaliteli istek metinler ve çıktılar üretti (+11,77 ile +29,19 puan arası düzeltilmiş istek metni kazanımları) ([[idea-framework-metacognitive-genai-2026|Wang ve ark., 2026]]).
- **Sistem tasarımı olarak istek metni yazma:** [[cotal-formative-assessment-scoring-2026|CoTAL]], [[formative-assessment|biçimlendirici değerlendirme]] puanlaması için [[human-in-the-loop-ai|döngüde insan]] istek metni mühendisliği kullanır; [[choi-anchor-aes-prompting-2025|çıpa temelli isteme]] yöntemi [[automated-essay-scoring|otomatik ödev puanlamayı]] iyileştirir

- **İstek metni yazmak giriş becerisidir, disiplin değil.** Gorsky (2026), yazılım profesyonelleri için [[ai-literacy]] onlara istek metni yazmak yerine [[agentic-ai|ajanları]] yönetme yeteneği olarak çerçeveler; çerçeveleme, belirtme, bağlam mühendisliği, doğrulama, çok ajanlı orkestrasyon ve denetlenebilirliği bir müfredatın değerlendirmesi gereken beceriler olarak adlandırır ([[ase-26-agentic-software-engineering-curriculum|Gorsky (2026)]]).
- **Uyarlanabilir istek metni yönlendirme:** [[learning-to-prompt-adaptive-tutoring|Learning to Prompt]], istek metni seçimini öğretim sisteminin kendisinin bir parçası olarak ele alır — 14 pedagojik özellik üzerinde alan duyarlu istek metni yönlendirmesi; stokastik bir yönlendirici her konuşma için en iyi istek metnini seçer. Bu, istek metni yazmayı bir öğrenen becerisinden uyarlanabilir bir sistem tasarım kaldıracına kaydırır ve [[student-engagement|bağlılık]] ile verimliliği artırır (gerçek dünya A/B testinde %28,1’e karşı %19,6 alıştırma dönüşümü).
- **İstek metni biçimleri:** [[voice-text-prompt-problems-computing-education|Ses ve metin girdisi araştırması]], istek metni biçiminin [[learning-gains|öğrenme sonuçlarını]] etkileyip etkilemediğini inceler

- **Metnin ötesinde istek metni — bilimsel görselleştirme.** İstek metni yazmak moleküler ve fiziko-kimya figürlerini hızla üretebilir, ancak yerel olarak ikna edici bir görselleştirme yine de hatalı olabilir veya gösterim önyargısı taşıyabilir; dolayısıyla öğrenciler YZ üretimi görselleştirmeleri onlara güvenmek yerine kimyasal ilkeler karşısında sorgulamalıdır ([[unesco-ai-guidelines-chemical-education-2026|Li ve ark. (2026)]]).
- **İskeleli istek metni yazma:** [[guided-llm-scaffolding-independent-learning|Guided LLM scaffolding]] ve [[scaffolding-critical-engagement-genai-minority-students|critical engagement scaffolding]], yapılandırılmış istek metni yazmayı bir öğrenme müdahalesi olarak öğretir

- **Azalan destekli koç istek metni yazma:** ARPG+'da, gerçek zamanlı bir koç istek metni kalitesini altı boyutta teşhis etti ve yetkinlik arttıkça desteği azalttı; nihai istek metni kalitesini sabit şablonlara karşı 5,95 ve yardım almadan 4,52 iken 7,82’ye yükseltti ([[ye-arpg-real-time-coaching-llm-prompting-2026|Ye ve ark. (2026)]]).
- **Görev ayrıştırmanın bir en iyi noktası vardır:** öğretmen eğitimi dersleri üretirken üç bölüme ayırmak en yüksek puanlı dersleri üretti (ortalama 14,67), tek geçiş en düşük puanı aldı (10,67) ve beş bölüm üçün altına düştü — orta düzey ayrıştırma her iki ucu da geride bırakır ([[lin-llm-interactive-lesson-generation|Lin ve ark. (2025)]]).
- **İstek metni ayrıcalığı ve eşitlik:** [[prompt-privilege-equitable-ai-access-2026|Jin ve ark.]], istek metni uzmanlığının düzensiz dağıldığını gösterir — istekleri becerikli biçimde ifade eden kullanıcılar, aynı niyeti daha az mahir ifade edenlere kıyasla sistematik olarak daha iyi çıktı alır. Onların Prompt Equity Transformer’ı istek metni optimizasyonunu kullanıcıdan YZ sistemine kaydırır ve [[equity-in-ai-education|eşit]] çıktının acemilerden talep edilmek yerine modele mühendislikle yerleştirilmesi gerektiğini savunur.
- **İstek metni iyileştirmesi plato yapar; bundan sonrasında ince ayar devralır.** Yinelemeli istek metni tasarımı, L2 dinleme [[assessment]] azalan madde kalitesi kazanımları verdi; ancak optimize edilmiş istek metni üzerinde GPT-4.1’in ince ayarı — istek metni sabit tutularak — bağlamsal olarak daha temelli ve dengeli maddeler üretti; bir sonraki kaldıracın istek metni ustalığı değil model uyarlaması olduğunu ayırt etti ([[gpt-item-generation-l2-listening-2026|Aryadoust & Wong, 2026]]).

- **[[situated-learning|Durumsal]] mesleki muhakeme olarak istek metni yazma.** Okuryazarlığın ve sistem tasarımının ötesinde, istek metni yazmak bir *disipliner uygulama* olarak çerçevelenebilir. Gazetecilik için [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026|Dierickx ve ark. taksonomisi]], görev tanımını ve istek metni yazmayı bir alanın epistemik ve etik normları içinde kullanılan mesleki muhakemenin bir biçimi olarak ele alır — gazetecilik işini açık görevlere dönüştürmek (haber toplama → anlam çıkarma → düzenleme → yayın/dağıtım) varsayımları, öncelikleri ve [[ethics|etik değerlendirmeleri]] görünür kılar ve istek metni yazmayı eleştirel YZ okuryazarlığı için pedagojik bir araca dönüştürür. Mantığı diğer bilgi yoğun mesleklere (hukuk, tıp, kamusal politika) aktarılır.
- **Öğretim belirtimi olarak istek metni tasarımı.** Neto ve arkadaşları (2026), sağlık eğitiminde GenAI’ye dair [[meta-analysis-systematic-review|sistematik derlemelerinde]] istek metni tasarımının, uzman yazarlığında örtük olan bilişsel hedefleri ve kalite ölçütlerini kodlayan bir öğretim belirtimi biçimi olarak işlev gördüğünü bulur — ancak çalışmaların yalnızca %34,8’i üretilen içeriği öğretim çerçeveleriyle hizaladı ve yalnızca %34,8’i yeniden üretmeye yetecek ayrıntıda istek metni bildirdi. Looi, Liu ve Sun (2026), ayrıca istek metni mimarisinin prosedürel alanlarda [[llm]] öğretmen davranışını kısıtlamak üzere pedagojik kuralları (doğruluk kapıları, spoil önleyici sınırlar, veda kapıları) nasıl gömdüğünü gösterir.
- **Rubrik temelli ve rol duyarlı isteme.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar ve ark. (2026)]], rubriği insan pedagojik niyeti ile makine çıkarımı arasında anlamsal bir arayüz olarak ele alan rubrik temelli isteme yönteminin, öğrenci tasarım işi üzerinde LLM–insan uzlaşısını %54,75’ten %81,25’e yükselttiğini gösterdi (Cronbach’ın Alfa’sı 0,393 → 0,798). LLM’ler için mühendislik yapılan rubrikler hassasiyet ile esnekliği dengelemek zorundadır: fazla muğlak serbest yoruma davet eder, fazla katı modeli örüntü eşleştirmeye indirger. Rol duyarlı isteme — aynı yapıtı öğretmen, akran değerlendirici ve hibe değerlendirici istek metinleri altında değerlendirmek — nitelikçe ayrı, epistemik olarak farklı geri bildirim üretti; bu da istek metni tasarımının yalnızca doğruluğu değil çıktının değerlendirici duruşunu şekillendirdiğini gösterir.
- **İstek metni iskelelemesi modeli öğretmenden uzaklaştırabilir.** [[llm-feedback-focus-adaptivity-student-writing-2026|Almousa ve ark. (2026)]], yedi modelden paragraf düzeyinde yazma geri bildirimini üç istek metni stratejisi altında üretti ve kategori adları veya çözümlü örnekler eklemenin çoğunda öğretmen dağılımından uzaklaşmayı artırdığını; yalnızca Mistral-7B’yi iyileştirdiğini buldu (0,2695’ten 0,2398’e). Sıfır atışlı temel en yakın kaldı; dolayısıyla odak türü talimatları, varsayılmaktan çok test edilecek bir şeydir.
- **Değerlendirme için bağlam duyarlı isteme.** Önceden eğitilmiş dil modellerin bağlam duyarlı isteme yöntemi, [[collaborative-learning|işbirlikçi problem çözme]] becerilerinin süreç verisinden kodlanmasını otomatikleştirir; davranış kodları arasındaki bağımlılıkları modelleyerek bilişsel ve sosyal yetileri birleştirir. Bu, yapılandırılmış CPS çözümlemesini ölçekte ve gerçek zamanlı olarak olanaklı kılar ve manuel kodlama şemalarının emek yoğunluğunu aşar.
- **Öğretmen planlaması için rol temelli şablonlar ve kalite rubrikleri.** [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo ve Tahir (2025)]], bir Rol (R) – Talimatlar (I) – Son Hedef (E) şablonunu (RISEN’den uyarlanmış) "dört nokta ve bir çizgi" optimizasyon rubriğiyle eşleyen; standart, uygulamalı, ilgi çekici ve eksiksiz, artı bir uzantı boyutu olan çocukların STEAM sanatları [[curriculum-design|ders planlaması]] için deneysel olarak bir istek metni çerçevesi geliştirir. Rubriği istek metinleri eleştirmek ve iyileştirmek için uygulamak, üretilen planları uygulayıcı sanat öğretmenleri için kabul edilebilir tutarken (4/5 üzeri ortalama puanlar) yinelenen boşlukları ortaya çıkardı ([[personalized-learning|kişiselleştirme]], [[pedagogical-safety|çocuk güvenliği]] kısıtları, kültürel önyargı) — düz tek atışlı isteme yönteminin ele almadığı boşluklar — bu da istek metni şablonlarının artı açık değerlendirme ölçütlerinin sınıf üretimi için kalite denetimi iskelesi olarak işlev gördüğünü gösterir.

- **Bağımsız değişken olarak rol ve kısıt tasarımı.** [[wang-teacher-student-centered-agents-physics-2026|Wang ve ark. (2026)]], 0,3 sıcaklıkta aynı model ve platform üzerine kurulu iki ajanı karşılaştırır; tek farkları, istek metninin rolü, becerileri ve kısıtları nasıl belirttiğidir: sınırlı bir ders kitabı bilgi kaynağından yanıt veren uzman öğretmen ajanına karşı, [[misconceptions]] teşhis etmek ve kavramayı kontrol etmek için senaryolanmış empatik öğrenen merkezli bir ajan. Yalnızca rol farkı, öğrenme performansını, bilişsel yükü, akış deneyimini ve algılanan empatiyi kaydırdı; bu da rol belirtmenin ölçülebilir etkileri olan bir öğretim tasarımı kararı olduğunu, stilistik bir süs olmadığını gösterir ([[pedagogical-agent]]).

- **Değerlendirme tasarımı olarak istek metni yazma.** [[ecd-prompts-automated-essay-scoring-2026|Xiong ve ark. (2026)]], Kanıt Merkezli Tasarımın (Evidence-Centered Design) öğrenen, kanıt ve görev modellerini bir puanlama istek metninin parçalarına eşler ve beş ilke — kastlılık, izlenebilirlik, hesap verebilirlik, yineleme ve eşitlik — türetir; ECD ile kurulmuş istek metinleri anlatı makalelerini sıfır atımlı (zero-shot), birkaç atımlı (few-shot) ve düşünce zinciri tabanlılarından daha isabetli puanlamıştır.


- **Daha iyi istek metinleri, çıktı kalitesini yükseltmeden yinelemeyi azalttı.** Bir ders hazırlama deneyinden önce YZ eğitimi alan öğretmenler daha uzun ve ayrıntılı istek metinleri yazdı ve daha az inceltme gerektirdi; eğitim almayan öğretmenler daha kısa istek metinleri kullandı ve daha çok sonraki yinelemeye ihtiyaç duydu, ancak ortaya çıkan materyallerin kör uzman puanlamaları eşitti ([[appel-genai-teacher-lesson-preparation-experiment-2026|Appel ve ark., 2026]]). Burada istek metni ustalığı daha güçlü bir ilk taslak değil, daha az düzeltme turu satın aldı.

- **Öğrenciler zorluğu sözdizimi değil niyet hizalaması olarak adlandırıyor.** 234 Çinli üniversite öğrencisiyle yapılan ankette [[lei-fan-genai-prompting-strategies-2026|Fan ve Liu (2026)]], kötü bir çıktıdan sonra inceltmenin en çok onaylanan yetenek olduğunu (%72,2), çıktı kısıtları belirlemenin ise en az onaylanan yetenek olduğunu (%66,2, %22,2 kararsız) buldu. Strateji tercihleri bir araştırma ödevi ile yaratıcı bir brifing arasında neredeyse hiç değişmedi: dört eşleştirilmiş çiftten yalnızca çıktı biçimi belirtimi düzeltmeden sonra farklılaştı (0,26 puan, dz = 0,233, BH düzeltmeli p = ,002). Sabit bir rol-görev-biçim şablonu, genel stratejiler arasında en zayıf desteği topladı: %59,4. Açık soruyu yanıtlayan %12,8’in yorumlarının %40,0’ında istek metni-niyet hizalaması göründü ve daha fazla ayrıntı eklemek tıkanmış bir alışverişi güvenilir biçimde düzeltmedi. Tümü tek bir ankete dayanan öz bildirimdir.

### Daha geniş kavramlarla bağlantılar

İstek metni mühendisliği [[scaffolding]] ile bağlantılıdır — iyi tasarlanmış istek metinleri öğrenci düşüncesini atlatmak yerine iskeleyebilir. Etkili istek metni yazmanın hem YZ’nin yeteneklerini hem kişinin kendi öğrenme hedeflerini anlamayı gerektirmesi nedeniyle [[metacognition]] ve [[ai-literacy]] ile kesişir. [[cognitive-offloading]] araştırması, istek metni kalitesini YZ kullanımının öğrenmeyi destekleyip desteklemediğine doğrudan bağlar.

- **Yazma becerisi istek metni yazmayı yönlendirir ve ikisi de [[vibe-coding]] başarısını öngörür.** Önceden kayıtlı bir CHI 2026 çalışmasında (N=100), [[vibe-coding-writing-cs-achievement-2026|Thorgeirsson, Weidmann & Su]] yazılı iletişim yeterliliğinin arayüz odaklı vibe-coding performansını öngördüğünü buldu (r = ,29); insan puanlamalı istek metni kalitesi bağı *aracılık* ederek — açık, yapılandırılmış düz yazının daha iyi doğal dil programlama istek metinlerine dönüştüğüne dair yanıt süreci kanıtı. Hem yazma becerisi hem [[cs-education|BT başarısı]] bağımsız öngörücülerdi ve BT başarısı (r = ,39) yaklaşık iki kat tekil varyans taşıdı; dolayısıyla yalnızca istek metni yazmayı iyileştirmek, LLM yerli geliştirmede programlama temellerinin tamamen yerini alması pek olası değildir.
- **İstek metni stratejisi performansı öngörür.** [[isaza-chatgpt-engineering-prompting-2026|128 mühendislik öğrencisinin deneysel bir çalışması]], YZ Sorgu Verimliliği’nin (açık, iyi yapılandırılmış istek metinleri) ve YZ Kaynaklı [[problem-solving]]’in (YZ çıktısının akıl yürütmeye stratejik bütünleştirilmesi) akademik başarının en güçlü öngörücüleri olduğunu buldu — GPA kontrol edildikten sonra bile — bu da istek metni yazmanın, öğrencilerin YZ ile ne kadar etkili öğrendiğini şekillendiren öğretilebilir bir beceri olduğunu gösterir.
- **İstek metni kalitesi kadar istemiş stili de sonuçları izler.** 1.540 öğretim oturumundan türetilen nitelikler, kavramsal sorgulamayı sınav performansına bağlarken görev devretme davranışları olumsuz yönde ilişkiliydi — ancak aynı nitelikler sonraki dönemde yinelenemedi; dolayısıyla bunlar istikrarlı beceriler değil davranışsal örüntülerdir ([[principal-trait-analysis-human-ai-skills-2026|McNichols, Du ve Lan (2026)]]).
- **Kullanılabilir bir taksonomi ve gerçekten kazanç sağlayan istek metni kategorileri.** [[teacher-ai-literacy-prompt-feedback-quality-2026|Jacobsen ve ark. (2026)]], teknik stratejileri 3K modeline çevirir (*Kontext, Kernauftrag, Klarheit* — bağlam, çekirdek görev, açıklık): on bir uygulama yönelik kategori, her biri iyi/ortalama/yetersiz rubriğiyle ve her biri öğretmen adaylarının öğrenme hedefleri için üretilen geri bildirim üzerinde deneysel bir varyasyon olarak test edilir. Disipline özgü teknik dil belirleyici kategoriydi — alan terminolojisini günlük dil özetlemeleriyle değiştirmek üç model genelinde geri bildirim kalitesini anlamlı biçimde düşürdü (β = −0,412) — oysa somut örnekler eklemek ve düşünce zinciri talimatını kaldırmak birinci çalışmada temelden anlamlı bir fark üretmedi; örnekler, çözümleme en iyi performans gösteren model-istek metni kombinasyonlarıyla yeniden çalıştırıldığında yardımcı oldu (β = 0,52). İstek metni kalitesi ve model seçimi birlikte puanlanan geri bildirim kalitesindeki varyansın %42,8’ini açıkladı; bu, makalenin istek metni mühendisliğinin ölçülebilir ve öğretilebilir bir yetkinlik olduğuna dair dayanağıdır — ve kategorilerinin etki büyüklüğünde birbirinin yerine kullanılamayacağına.

## Yaygın yanlış anlamalar

- **“İstek metni kalitesi bir öğrenci özelliğidir.”** **İstek metni bilişi öğrenciyi değil disiplini izler**: [[student-ai-conversations-cognitive-engagement-2026|Chang ve Li (2026)]], **116 kurstan 60.087 istek metnini** sınıflandırdı ve disiplinin istek metni inceliğini öngördüğünü buldu. Öğrencilere daha iyi istek metni yazmayı öğretmek, ders içeriğinde yatan bir varyasyonu ele alır.
- **“Öğrenciler kendi istek metni pratiklerini geliştirir.”** Öğretmen istek metnini modellediğinde **öğrenciler onu aynen yeniden kullandı**: **on iki ortaokul STEAM grubundan 310 kayıtlı istek metni** arasında öğretmenin talimatının birebir kopyalanması yaygındı. Modelleme yeniden üretim üretir; bu nedenle aktarılabilir bir beceri değil, bir sistem tasarımı kaldıracıdır.
- **“İstek metni yazma önce öğrenen becerisi, sonra sistem özelliğidir.”** Bu, istek metni yazmayı **uyarlanabilir bir sistem tasarımı kaldıracına** kaydırır ve **angajman ile verimlilik üzerinde ölçülmüş etkiler** taşır (**%28,1’e karşı %19,6 alıştırma dönüşümü**). Arayüzün istek metni olanakları, davranışı istek metni öğretiminden daha fazla hareket ettirdi.

## Bağlı kavramlar
- [[pedagogical-patterns]] — Yapılandırılmış kullanım dizileri içindeki iskeleleme katmanı
- [[vibe-coding]]
- [[guardrails]]
- [[scaffolding]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[metacognition]]
- [[curriculum-design]]
- [[cognitive-offloading]]
- [[writing-education]]
- [[k-12]]
- [[generative-ai]]
- [[learning-design]]
- [[cs-education]]
- [[higher-ed]]
- [[ai-technologies]] — Şemsiye: YZ teknolojileri ve teknikleri (modeller, LLM eğitimi, robotik, RAG, ajan tabanlı)

## Bağlı makaleler


- [[lei-fan-genai-prompting-strategies-2026]] — 234 öğrencinin zor bulduğu şey: istek metni sözdizimi değil niyet hizalaması
- [[fang-human-ai-collaboration-patterns-instructional-design-2026]] — Belirsiz istek metinleri, en büyük hayal kırıklığı farkını taşıyan kendini yineleyen açıklama döngüleri üretti
- [[wang-teacher-student-centered-agents-physics-2026]] — Fizik öğrenmesinde tasarım değişkeni olarak ajan rolü ve kısıt istek metinleri (Wang ve ark. 2026)
- [[gpt-item-generation-l2-listening-2026]] — GPT temelli L2 dinleme maddesi üretiminde istek metni yazma ve ince ayar (Aryadoust & Wong 2026)
- [[llm-interaction-depth-task-quality-recall-2026]] — Öğrencilerin sorduğu önemlidir: LLM etkileşim derinliği, görev kalitesi ve anlık hatırlama (Tsiligkiris 2026)
- [[ye-arpg-real-time-coaching-llm-prompting-2026]] — ARPG+: eğitimsel LLM istek metni yazma için gerçek zamanlı koçluk
- [[dierickx-taxonomy-llm-tasks-critical-ai-literacy-journalism-2026]] — Gazetecilikte eleştirel YZ okuryazarlığı için LLM görevlerinin görev temelli taksonomisi
- [[prompt-privilege-equitable-ai-access-2026]] — İstek Metni Ayrıcalığı: LLM erişimindeki erişilebilirlik uyuşmazlıklarını ölçmek ve hafifletmek
- [[principal-trait-analysis-human-ai-skills-2026]] — Temel Nitelik Analizi: insan-YZ işbirliğinin veri temelli nitelikleri
- [[llms-text-linguistics-teaching-2026]] — Metin dilbilimi öğretiminde LLM’ler
- [[idea-framework-metacognitive-genai-2026]] — Üstbilişsel olarak düzenlenmiş GenAI kullanımı için IDEA çerçevesi
- [[lin-llm-interactive-lesson-generation]] — Etkileşimli öğretmen eğitimi derslerinin LLM üretimi (Lin ve ark. 2025)
- [[aaai2026-prompting-literacy-k12]]
- [[ase-26-agentic-software-engineering-curriculum]]
- [[choi-anchor-aes-prompting-2025]]
- [[guided-llm-scaffolding-independent-learning]]
- [[learning-to-prompt-adaptive-tutoring]]
- [[misiejuk-cognitive-offloading-prompting-2026]]
- [[tracing-genai-literacy-interaction-patterns]]
- [[unesco-ai-guidelines-chemical-education-2026]] — Kimya eğitimine uyarlanan UNESCO YZ kılavuz ilkeleri; epistemik kayma
- [[isaza-chatgpt-engineering-prompting-2026]] — İstek metni davranışları mühendislik öğrencisi performansını öngörür
- [[student-ai-conversations-cognitive-engagement-2026]] — Öğrenci-YZ konuşmalarında disipline ilişkin Bloom düzeyi bilişsel bağlılık (Chang & Li 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — Yinelemeli pedagojik tasarım ajanları olarak LLM’ler
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[miles-prompt-literacy-human-centered-genai-framework-2026]] — İstek metni mühendisliği ve istek metni okuryazarlığı: beş adımlı bir İstek Metni Okuryazarlığı Döngüsüyle insan merkezli GenAI etkileşim çerçevesi (Miles, Haber-Curran & Arar 2026)
- [[teacher-ai-literacy-prompt-feedback-quality-2026]] — YZ geri bildirim kalitesinin öngörücüsü olarak istek metni mühendisliği ve model seçimi (Jacobsen ve ark. 2026)
- [[llm-feedback-focus-adaptivity-student-writing-2026]] — Öğrenci Yazmasındaki LLM Üretimi Geri Bildirimde Geri Bildirim Odağı ve Pedagojik Uyarlanabilirliğin Değerlendirilmesi

- [[middle-school-genai-steam-interactions-2026]] — Ortaokul STEAM grupları istek metinlerinin %47,1’inde öğretmenin talimatını aynen kopyaladı
- [[ecd-prompts-automated-essay-scoring-2026]] — Ölçmede istek metni mühendisliğini yönlendirmek için Kanıt Merkezli Tasarımın kullanımı: otomatik makale puanlamasıyla bir örnekleme
