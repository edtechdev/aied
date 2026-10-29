---
title: Matematik Eğitimi
created: "2026-10-14T22:35:00-04:00"
type: concept
pedagogy: [scaffolding]
technology: [generative-ai, intelligent-tutoring]
discipline: [math education, stem education]
audience: [learners, instructors]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/math-education
source_updated: "2026-10-05T11:00:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Matematik Eğitimi** — öğrencilerin matematiği nasıl öğrendiğinin ve YZ’nin matematik öğretimini nasıl destekleyebileceğinin incelenmesi; kapsamına duygusal öğretmenlik, elle yazılmış çalışmalardan bilişsel tanı koyma, [[desirable-difficulties|verimli mücadele]] değerlendirmesi, yardım arama davranışı, görsel üretimde öğretmen-YZ işbirliği ve [[student-ai-interaction|öğrenci-YZ etkileşimi]] yörüngeleri girer. Matematik eğitimi, bu bilgi tabanında 32 makaleye saşan, topluca YZ’nin ilkokul kesirlerinden yükseköğretime kadar matematik öğrenmesini nasıl destekleyebileceğini — ve bazen nasıl baltalayabileceğini — inceleyen en etkin [[discipline-specific-aied|alana özgü]] [[research-methods-aied|araştırma]] alanıdır.

## Dikkate Alınması Gereken Sorular

- Matematik problemlerinin net doğru yanıtları vardır ama zengin akıl yürütme gerektirir; bu yüzden matematik YZ öğretmenliği için gözde bir sınama alanıdır. Bir matematik probleminde takıldığınızda asıl öğrenmenize yardımcı olan yardım hangisidir — bir yanıt, bir ipucu mu, bir soru mu — ve YZ’nin öntanımlı olarak hangisine yöneleceği muhtemeldir?
- Araştırma, YZ öğretmenlerinin genellikle öntanımlı olarak aşırı yardımcı olduğunu, öğrenciler hazır olduğunda bile nadiren titizlik istediğini buluyor. Bir öğretmen tasarlıyorsanız, anlayışı geliştiren "verimli mücadeleyi" korumak için yardımı ne zaman geri tutacağınıza nasıl karar verirsiniz?
- Sayfa, çok erken ipucu isteyen veya ipuçlarını yüzeyselce gözden geçiren öğrencilerin daha az öğrendiğini gösterir. Gerçek bir çabadan ziyade sabırsızlıktan bir ipucuna sarıldığınız oldu mu? Bu, YZ desteğinin öğrenmeyi nasıl desteklemek yerine baltalayabileceği konusunda neyi ortaya koyuyor?
- YZ bilişsel tanı sistemleri bazen kanıt halüsinasyonu görür ve hataları aşırı yükler; hatta güçlü modeller bile öğrencilerin gerçek elle yazılmış çalışmalarını okurken yetersiz kalır. Çalışmanızdan neyin yanlış gittiğini teşhis eden bir öğretmene ne kadar güvener olurdunuz?
- LLM’ler, matematiksel olarak eşdeğer problem biçimleri arasında yanıtlarını değiştirir — aynı problem farklı sunulduğunda sonuç değişir. Bu, matematik anlayışını puanlamak veya teşhis etmek için YZ kullanımı hakkında ne söyler?

## Giriş

Matematik eğitimi, net doğru yanıtlara sahip problemlerin zengin akıl yürütme gerektirmesi nedeniyle — bu da onları öğretmenlik etkililiğini, değerlendirme geçerliliğini ve YZ araçlarının öğrenci bilişi ve duygusuyla nasıl etkileşime girdiğini incelemek için ideal kılar — [[ai-education|eğitimde YZ]] araştırmasının öncelikli bir alanı haline gelmiştir. Bu bilgi tabanındaki makaleler, YZ matematik öğretmenlerinin vaadini ve kalıcı zorlukları ortaya koyar: verimli mücadeleyi baltalayan aşırı iskeleleme, bilişsel tanıda halüsinasyon ve YZ yardımını gerçek öğrenmeyle dengelemede zorluk.

### Temel araştırma temaları

**YZ matematik öğretmenliği ve iskeleleme**, YZ öğretmenlerinin matematik öğrenmesini nasıl desteklediğini veya baltaladığını inceleyen dört makaleyle en büyük kümedir. **[[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]**, duygusal farkındalık eklemenin — metin ve yüz ifadelerinden öğrenci duygularını tespit etmek — matematik öğretmenliğinde +23 puanlık galibiyet oranı avantajı ürettiğini göstererek [[affective-computing]] ve [[affective-tutoring]] ile bağlantı kurar. **[[zhang-tutormoments-2026|TutorMoments]]**, 2-7. sınıflar matematik öğretmenliğinden 462 öğretmen açıklamalı dökümü değerlendirir ve sınır modellerin öntanımlı olarak aşırı yardımcılığa yöneldiğini, öğrenciler hazır olduğunda bile nadiren titizlik istediğini bulur — YZ yardımseverliği ile [[scaffolding]] ilkeleri arasındaki hizalamayı doğrudan sorgular. **[[lak2026-hint-button-unproductive-use|An ve ark.]]**, *Decimal Point* ITS’inde üç dönem boyunca 999 öğrenciyi inceleyerek, erken ipucu isteklerinin ve yüzeysel ipucu okumanın [[prior-knowledge|önceki bilgi]] kontrol edildikten sonra bile tutarlı biçimde azalmış [[learning-gains|öğrenme kazanımlarını]] öngördüğünü buldu — [[help-seeking]] ve [[learning-analytics]] ile bağlantılı bir bulgu.

**Sosyo-duygusal destek, başarıdan ziyade verimlilik satın alabilir.** Yedinci sınıf cebir öğretmenine bir LLM farkındalık katmanı eklenmesi, kollar arasında öğrenmeyi ve durum matematik kaygısını değiştirmedi (kesintilerden sonra 252 öğrencinin 42’si analiz edildi), ancak farkındalık koşulundaki öğrenciler benzer öğrenmeye daha az zaman ve daha az istenen ipucuyla ulaştı ([[mindful-llm-math-tutoring-2026|Rief ve ark., 2026]]).

**[[cognitive-diagnosis|Bilişsel tanı]] ve değerlendirme**, YZ’nin matematiksel düşünceyi değerlendirme yeteneğini inceler. [[razavi-powers-item-difficulty-llm-2026|Razavi ve Powers (2026)]], hem matematik hem okumayı kapsayan büyük ölçekli bir madde güçlüğü çalışması ekler: Rasch IRT modeli altında kalibre edilmiş 5.170 K-5 maddesi üzerinde, GPT-4o’nun sıfır-atış güçlük derecelendirmeleri gerçek güçlüklerle orta-düzeyden güçlüye korele oldu (r = 0,83 matematik, r = 0,81 okuma) ancak sınıflar arasında düzensizdi; buna karşılık öznitelik tabanlı bir yaklaşım (LLM ile çıkarılan özniteliklerin ağaç tabanlı modellere aktarılması) r = 0,87’ye varan korelasyonlara ulaştı, en iyi yordayıcılar sınıf düzeyi ve kelime sayısı oldu. Çalışma, sınama uzmanları için pratik bir yedi adımlı iş akışı sunar ve K-5 matematik ve okuma ötesinde genellenebilirliğin belirsiz olduğunu hatırlatır. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]**, elle yazılmış matematik çalışmalardan 3.036 öğretmen açıklamalı tanı yargısı üzerinde 18 LLM’yi kıyasladı ve tüm modellerin ciddi biçimde yetersiz kaldığını (F1 < 0,5) buldu; sistematik aşırı yükleme ve kanıt halüsinasyonu görüldü — bu da [[knowledge-tracing]], [[hallucination-risk]] ve [[multimodal]] değerlendirme zorluklarına bağlanır. **[[representation-robustness-llm-math-problem-solving|Nath ve ark.]]**, [[llm]] matematik [[problem-solving]]’in yüzey temsiline yüksek derecede duyarlı olduğunu — modellerin eşdeğer problem biçimleri arasında doğruluğu değiştirdiğini — göstererek YZ tabanlı matematik puanlamada [[assessment-validity]] kaygıları gündeme getirdi.

**[[automated-scoring-economics-math-items-nigeria-2026|Olaoye, Owolabi ve Olaoye (2026)]]**, matematiksel yanıtları değerlendirmeye yönelik tezat bir yol gösterir: Genişletilmiş Kompozisyon Notlama Otomasyon Yazılımları, üst düzey ortaöğretim Ekonomi sınavında genişletilmiş yanıtlı matematik maddelerini, puanlanmış kâğıtlar üzerinde eğitim almadan, WAEC işaret şemasına karşı anlamsal benzerlikle puanlar ve 12 insan sınav görevlisiyle ortalama önlemlerde 0,863 sınıf-içi korelasyonla (Pearson katsayıları 0,604’ten 0,864’e) hemfikir oldu. Uzlaşı, notların en düşük olduğu yerde duruyor — yazılım 20 üzerinden ortalama 5,94 alırken puanlayıcılar 5,97 aldı, her sınav görevlisi 1.008 kâğıdın yalnızca 84’ünü işaretledi ve yazarlar düşük notları adayların bilgisayar tabanlı yanıtlamaya yabancılığına bağlar.

**[[student-engagement|Öğrenci etkileşimi]] ve YZ okuryazarlığı**, öğrencilerin YZ matematik araçlarıyla nasıl etkileşime girdiğini inceler. **[[epistemic-proactivity-math|Abdelghani ve ark.]]**, matematik öğrenmesinde öğrenci-YZ etkileşiminin zamansal yörüngelerini izleyerek, yüzeysel [[prompt-engineering|istek metni]] yazımından "epistemik proaktiviteye" — kavramsal anlayışın etkin, [[self-directed-learning|öz-yönelimli]] peşinde koşusuna — uzanan bir gelişimsel yol tanımladı. Bu, [[ai-literacy]], [[metacognition]] ve [[self-regulated-learning]] ile bağlantı kurar. **[[ai-powered-personalized-learning-elementary-fractions-2026|Holman]]**, YZ-uyarlamalı platformların matematik öğrenme güçlüğü yaşayan öğrencilerin kesir kavrayışını önemli ölçüde iyileştirdiğini buldu; bu da [[personalized-learning]] ve [[adaptive-learning]] ile bağlantılıdır.

**Öğretmen desteği**, matematik eğitimcileri için YZ araçlarını inceler. **Simüle edilmiş öğrenci rol yapma** ayrıca öğretmen pratiğine de hizmet eder: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang ve Zhang (2025)]], yaygın oran-akıl yürütme [[misconceptions]] taşıyan bir ortaokul öğrencisini canlandıran özel bir ChatGPT [[conversational-ai|sohbet robotu]] olan *Student GPT*’yi oluşturdu; bu, öğretmen adayı ortaokul matematik öğretmenlerine öğrenci düşüncesini teşhis etme ve doğru çözümlere yönlendirme konusunda düşük riskli pratik sağlar — öğrenci yanlış kanılarına ilişkin pedagojik içerik bilgisini geliştirmede TeachLivE gibi pahalı platformların tamamlayıcısı olarak [[generative-ai|üretken YZ]] destekli [[simulation]]’ı gösterir.

Bu alanın tek alan düzeyi sentezi, 922 kayıttan süzülmüş 42 çalışmanın 2021–2025 PRISMA derlemesidir (Cohen’s kappa = 0,88); bu, sayfanın kümelerinin aksi halde yoksun olduğu bir kategori ekler: öğretmene yönelik otomasyon — burada MATH41 farklı düzeylerdeki öğrenenler için matematik görevlerinin hızlı üretimini destekler ve melez model CognifyNet, eğitimcilerin gelişmekte olan güçlükleri erken tespit edebilmesi için öğrenci etkinlik örüntülerini analiz eder. Aynı derleme, alanın kör noktasını belirler — çalışma alanlarının yüzde 60’ı Eğitim, yüzde 28’i Bilgisayar Bilimi olmakla birlikte yalnızca bir çalışma Psikoloji’ye düşmüştür, bu da duygusal etkiyi, güveni ve etiği nispeten yeterince araştırılmamış bırakır — ve teknik yeteneğin gösterilmiş sınıf etkililiğiyle eşitlenmemesi gerektiğini ısrarla vurgular. ([[ai-mathematics-education-prisma-review-2026]])

**Yükseköğretim matematiği**, YZ’nin ileri matematik pratiği üzerindeki etkisini inceler. **[[genai-runaway-object-math-higher-ed|Bui ve ark.]]**, üniversite matematiğinde [[sociocultural-learning|sosyo-kültürel]] teoriyi [[generative-ai|üretken YZ]] uyguladı; YZ’yı, akademik pratiği [[governance|kurumsal]] ve pedagojik normların ötesinde dönüştüren bir "kontrolden çıkmış nesne" olarak analiz etti.

**LLM öğretmenliği ve [[learning-design|öğretim tasarımı]]**, matematik eğitimi kanıt tabanını keskinleştiren iki 2026 çalışmasından oluşan yeni bir kümedir. [[rule-integrated-llm-tutoring-primary-math-2026|Looi, Liu ve Sun (2026)]], ilkokul matematik sözel problemleri için kural rehberli bir [[intelligent-tutoring|LLM öğretmenlik sistemi]] geliştirdi; üç katmanlı mimarisi (tanı → niyet seçimi → kısıtlı yanıt üretimi), 40 öğrencili beşinci sınıf sınıf pilotunda etkileşim tutarlılığını iyileştirdi ve erken yanıt vermeyi azalttı — prosedürel matematik alanlarının, aksi halde stokastik olan LLM iskelelemesinde [[guardrails|yapılandırılmış kural-korumalarına]] ihtiyaç duyduğunun kanıtı. [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao ve Wang (2026)]], matematik M.Ed. öğrencilerine akıllı sınıf modelini uyguladı ve müfredat-standartları, ders kitabı ve öğrenci-koşul boyutlarında öğretim hedefi tasarımında istatistiksel olarak anlamlı kazanımlar (p < ,05) buldu.

İstek metni tasarımı, kendisi ölçülebilir bir kaldıraçtır: MathDial kıyaslamasında pedagojik bilgilendirilmiş bir Sokratik "Öğretmen İstek Metni", hem GPT-4o hem GPT-4o-mini için taban istek metnine göre Success@N’i yükseltti ve Telling@N’i keskin biçimde düşürdü ([[chudziak-ai-math-tutoring-platform|Chudziak & Kostka (2025)]]).

**Matematiksel modelleme görevleri için [[generative-ai|üretken YZ]]**, üretim dalını rutin alıştırmaların ötesine taşır. ADDIE yaklaşımıyla geliştirilmiş bir YZ destekli platform, örnek bir konu olarak ortaokul matematiğinde doğrudan değişimi kullandı ve öğretmenlerin yüksek kaliteli modelleme görevleri tasarlamak için zamandan ve kaynaklardan yoksun oluşunu ele aldı: mevcut araçlar tipik olarak geleneksel sözel problemler veya rutin alıştırmalar üretir, oysa platform, yerleşik tasarım ilkelerine ve [[prompt-engineering|getiri-artırılmış üretime]] dayalı olarak matematiksel modelleme yetkinliklerini besleyen kaynaklar üretmeyi hedefledi.

- **Görsel düşünce zinciri: geometrideki [[agency|özerklik]] boşluğu.** GeoVAD-Bench, 600 yardımcı inşa problemi üzerinde (200 kolay, 200 orta, 200 zor) nihai yanıtlardan ziyade ara görsel yardımları teşhis eder ve tutarlı bir örüntü bulur: referans yardımcı şema sağlamak, doğruluğu mütevazı biçimde iyileştirirken (üç modelde +3,3, +3,0, +7,0 puan), doğru yanıta giderken modelin kendi yardımcı çizgisini kurmasına bırakmak boşluğu 10,0 ila 13,5 puan genişletir; iki model, hiç görsel akıl yürütme yapmadıklarında olduğundan daha kötü performans gösterir. Dört süreç-hatası kategorisi, atfedilen başarısızlıkların yüzde 93,1’ini ve yüzde 89,7’ini açıkladı. [[problem-solving]] öğretimi için bulgu şudur: şemasal iskeleleme, yanıt doğruluğundan ayrı olarak eğitilmeli ve değerlendirilmelidir. ([[geovad-bench-visual-chain-of-thought-geometry-2026]])

- **YZ’ye açık problemler çalışma zamanını ve belleklenmeyi kaybettirir.** 3,2 milyon ALEKS etkileşiminden oluşan on yıllık panel, ChatGPT’in piyasaya sürülmesinden sonra — YZ istek metinlerine aktarılabilirliği en yüksek olanlar — metin tabanlı sözel problemler üzerindeki çalışma zamanının yüzde 26,9 düştüğünü bulurken, gözetimli belleklenme maddeleri doğru yanıt olasılığında yüzde 25’lik bir düşüş gösterdi ([[generative-ai-reduced-study-time-math|Rismanchian ve ark., 2026]]).

- **Öğrenciler anında geri bildirime değer veriyor, ancak isteğe bağlı alıştırma platformları kullanılmıyor.** 157 öğrenciden, [[genai-practice-platform-maths-feedback-2026|Chen ve ark. (2026)]] 95’inin kaydolup yalnızca 34’ünün bir soruyu denediğini gördü; kullanıcılar etkileşimi en yüksek puanladı (yüzde 79 uzlaşı) halde yalnızca yüzde 42’si platformu mevcut problem defterine tercih etti.

- **YZ başarıyı yükseltirken cinsiyet boşluğunu genişletebilir.** 115 Nijeryalı üst düzey ortaöğretim öğrencisiyle yapılan altı haftalık yarı-deneysel bir çalışmada, ChatGPT geri bildirimi geleneksel öğretime göre ikinci dereceden denklem başarısını yükseltti (29,18’e karşı 24,06), ancak erkek öğrenciler kadın öğrencileri geride bıraktı (30,95’e karşı 25,16) — öz yeterlilikte cinsiyet farkı olmamasına rağmen; YZ matematik desteği için bir eşitlik uyarısı ([[ai-generated-responses-achievement-self-efficacy-2026|Oladayo & Diri, 2026]]).

### İlgili kavramlarla bağlantılar

Matematik eğitimi, matematiğin güçlü bilişsel öğretmen ve ITS araştırma geleneği yoluyla [[intelligent-tutoring]] ve [[intelligent-tutoring|YZ Öğretmenliği]] ile, verimli mücadele ve ipucu kullanımı literatürü yoluyla [[scaffolding]] ile, matematik kaygısı ve duygu-farkında öğretmenlik yoluyla [[affective-computing]] ile, bilişsel tanı ve değerlendirme araştırması yoluyla [[knowledge-tracing]] ve [[assessment-validity]] ile ve matematik öğretiminde öğretmen-YZ işbirliği yoluyla [[teacher-role]] ile ayırt edici bağlantılara sahip olan daha geniş [[stem-education]] alanı içinde yer alır. [[k-12]] bağlantısı özellikle güçlüdür — matematik makalelerinin çoğu K-12 bağlamı içerir — [[higher-ed]] bağlantıları ise öğretmen hazırlığında ve ileri matematik pratiğinde ortaya çıkar.

## Matematik öğretmenleri için çıkarımlar

- **YZ öğretmenliğini bir yardım arama kaldıracı olarak görün, yetenek düzeltmesi olarak değil.** [[lak2026-hint-button-unproductive-use|İpucu kullanımı araştırması]], erken ipucu isteklerinin ve yüzeysel ipucu okumanın daha düşük kazanımları öngördüğünü gösterir — dolayısıyla öğrencilerin YZ yardımını *ne zaman ve nasıl* aradığı, ham öğretmen yeteneğinden daha fazla önem taşır. Öğrencileri sormadan önce denemeye teşvik edin ve yardımı isteğe göre değil ihtiyaç anında sunun.
- **Verimli mücadeleyi koruyun.** [[zhang-tutormoments-2026|TutorMoments]], modellerin öntanımlı olarak aşırı yardımcı olduğunu, nadiren titizlik istediğini bulur; YZ desteğini çözmek yerine iskelemek üzere yapılandırın ve akıl yürütmeyi aşındıran yanıt-değişimini izleyin.
- **YZ tanı çıktısını kesin doğru olarak ele almayın.** [[llm-cognitive-diagnosis-handwritten-math|MathCog]], LLM’lerin matematik düşüncesini teşhis etmede yetersiz kaldığını (F1 < 0,5) gösterir; aşırı yükleme ve halüsinasyonlu kanıtla birlikte. YZ tanısını, öğrencinin gerçek çalışmasına karşı doğrulanacak bir öneri olarak kullanın.
- **YZ puanlamada yüzey-biyçim kırılganlığına dikkat edin.** [[representation-robustness-llm-math-problem-solving|Temsil duyarlılığı]], eşdeğer problemlerin YZ yanıtlarını değiştirebileceği anlamına gelir — YZ tabanlı matematik değerlendirmesi için bir geçerlilik riski; yüksek riskli puanlamada [[human-in-the-loop-ai|insan incelemesini]] tercih edin.
- **YZ’yi kişiselleştirilmiş alıştırma eşiğini düşürmek için kullanın.** [[ai-powered-personalized-learning-elementary-fractions-2026|Uyarlamalı platformlar]], matematik öğrenme güçlüğü yaşayan öğrencilerin kesir kavrayışını iyileştirdi; farklılaştırılmış desteğe ihtiyacı olan öğrenenler için YZ-uyarlamalı araçları seçici biçimde konuşlandırın.
- **Öğretmeni YZ tarafından üretilen öğretim materyallerinin kontrolünde tutun.** [[teacher-control-ai-generation-math-visuals|Öğretmenin YZ görselleri üzerindeki kontrolü]], YZ verimliliğini pedagojik doğrulukla dengeleyen bir çerçeveyi destekler.

## Bağlı Kavramlar

- [[stem-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[affective-computing]]
- [[affective-tutoring]]
- [[k-12]]
- [[higher-ed]]
- [[ai-literacy]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[help-seeking]]
- [[learning-analytics]]
- [[knowledge-tracing]]
- [[assessment-validity]]
- [[multimodal]]
- [[hallucination-risk]]
- [[cognitive-offloading]]
- [[teacher-role]]
- [[educational-development]]
- [[generative-ai]]
- [[discipline-specific-aied]]
- [[teacher-education]]

## Bağlı Makaleler

- [[ai-mathematics-education-prisma-review-2026]] — Mathematics education’da yapay zeka: PRISMA tabanlı sistematik literatür derlemesi (2021-2025)
- [[automated-scoring-economics-math-items-nigeria-2026]] — Bağlamsal benzerlik modeli kullanarak ekonomide ortaokul sertifika sınavı matematik maddelerinin otomasyon yazılımıyla puanlanması
- [[mindful-llm-math-tutoring-2026]] — Problem Çözmeyi Aşmak: Matematik Öğrenmesinde Duygusal ve Yansıtıcı Destek için Büyük Dil Modelleri
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — CAL ile sanal öğretmenlik: benimseme ve öğrenme üzerine bir deney
- [[making-ai-tutoring-productive-mastery-math-2026]] — YZ öğretmenliğini verimli kılmak: ustalık temelli matematik pratiği
- [[chudziak-ai-math-tutoring-platform]] — YZ destekli matematik öğretmenlik platformu (Chudziak & Kostka 2025)
- [[kar-mathbuddy-affective-math-tutoring-2025]]
- [[zhang-tutormoments-2026]]
- [[lak2026-hint-button-unproductive-use]]
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[representation-robustness-llm-math-problem-solving]]
- [[epistemic-proactivity-math]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[teacher-control-ai-generation-math-visuals]]
- [[ai-tpack-preservice-math-teachers]]
- [[genai-runaway-object-math-higher-ed]]
- [[generative-ai-reduced-study-time-math]] — ALEKS ustalık platformu: metin tabanlı problemler YZ’ye en açık olanlar
- [[mujib-ai-ibl-creative-math-2026]] — YZ destekli SBD ve yaratıcı matematik performansı
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Verimli Başarısızlık için LLM’lerin Pedagojik Yönlendirilmesi
- [[rhaimi-productivemath-2025]] — ProductiveMath: Verimli Başarısızlık Problemi Tasarımını Desteklemek için YZ
- [[preferred-scaffolding-ai-mathematical-modeling]] — YZ destekli matematiksel modellemede tercih edilen iskeleleme
- [[instructional-design-proficiency-masters-math-2026]] — Matematikte M.Ed. öğretim tasarımı yeterliliğini iyileştiren akıllı sınıf modeli ve D-T-E döngüsü (Zhu ve ark. 2026)
- [[rule-integrated-llm-tutoring-primary-math-2026]] — İlkokul matematiği için bir LLM öğretmenlik sisteminde kural rehberli ve plansız iskeleleme karşılaştırması (Looi ve ark. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — Matematiksel modelleme problemleri üreten YZ destekli platform (ADDIE, RAG)
- [[razavi-powers-item-difficulty-llm-2026]] — LLM’ler ve ağaç tabanlı MK kullanarak madde güçlüğünü tahmin etmek
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[gpt4-handwritten-math-exam-grading-2026]] — Yarı-açık uçlu elle yazılmış üniversite matematik yanıtlarının GPT-4 ile puanlanması
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — K-12 matematik derlemleri üzerinde anlamsal bilgi-kavram açıklaması ve RL alıştırma sıralaması
- [[misconception-acquisition-dynamics-llms-2026]] — dil modellerinde cebir hatalı-kuralı eğitim dinamiği
- [[genai-practice-platform-maths-feedback-2026]] — 157 öğrencili bir matematik sınıfında isteğe bağlı üretken YZ alıştırma platformu: anında geri bildirime değer verildi, kullanım 34 etkin kullanıcıyla sınırlı kaldı
- [[ai-generated-responses-achievement-self-efficacy-2026]] — YZ Tarafından Üretilen Yanıtların Akademik Başarı Üzerindeki Etkisinin Değerlendirilmesi: Etik Bir Perspektif ve Öz Yeterlilik
