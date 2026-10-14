---
title: Özel Eğitim
created: "2026-10-14T23:05:00-04:00"
connected_resources: [teacherserver]
type: concept
foundations: [ai-education]
ethics: [equity-in-ai-education, inclusive-learning, neurodiversity]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education, k 12, higher ed]
confidence: high
reviewed_by: [editor]
translation_of: concepts/special-education
source_updated: "2026-09-30T08:39:04-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Özel Eğitim** — bilişsel, fiziksel, duyusal ve nörogelişimsel farklılıklar kapsamında engelli öğrenenler için öğretimin tasarımı ve sunumu. Bu bilgi tabanındaki [[ai-education|Eğitimde YZ]] [[research-methods-aied|araştırmaları]], YZ araçlarının [[personalized-learning|kişiselleştirme]], [[scaffolding|uyarlamalı iskeleleme]] ve erişilebilir arayüzler yoluyla çeşitli öğrenen ihtiyaçlarını nasıl destekleyebileceğini inceler — engelli öğrenenleri göz ardı eden veya marjinalleştiren [[ai-technologies|YZ sistemlerinin]] risklerini de ele alır.

> ⚠️ **Özel Eğitim öncelikle bir [[k-12]] terimidir.** ABD’deki Engelli Bireyler Eğitim Yasası’na (IDEA) ve ilkokul ile ortaokul düzeyindeki özel eğitim hizmetlerini düzenleyen Bireyselleştirilmiş Eğitim Programları’na (IEP) dayalı hak temelli sisteme kök salmıştır. [[higher-ed|Yükseköğretimde]] — ve giderek K-12’de de — daha yaygın çerçeveleme, “özel eğitim” yerine tüm öğrenenlere yarayan proaktif bir tasarım çerçevesi olan **[[universal-design-for-learning|Evrensel Öğrenme Tasarımı]]** ile birlikte [[accessibility]] ve [[assistive-technology]]dir. K-12 odaklı bir özel eğitim makalesi ile bir üniversite UDL yazısı örtüşen ama ayrı bağlamlara ilişkindir; bilgi tabanı ikisini de tutar; çünkü araştırma literatürü her ikisini de kapsar. Bir kaynak yükseköğretimi ve engelli öğrencileri ele aldığında, genellikle özel eğitime değil [[universal-design-for-learning]], [[accessibility]] veya [[inclusive-learning]] bağlanması daha uygundur.

## Dikkate Alınması Gereken Sorular

- Sayfa, ‘özel eğitim’in öncelikle IDEA ve IEP’lere dayalı K-12, hak temelli bir terim olduğunu; yükseköğretimin ise daha sık Evrensel Öğrenme Tasarımı ve erişilebilirlikten söz ettiğini vurgular. Bu bağlamların neden farklı olduğunu düşünüyorsunuz ve bu fark neyi ortaya koyuyor?
- YZ’nin kişiselleştirme vaadi, çeşitli ihtiyaçlara sahip öğrenenler için özel olarak uygun görünüyor. Ancak bir sistem ‘bireysel bilişsel profillere’ uyum sağlayabiliyorsa, bir engellilik modeli fazla kaba olduğunda ya da hiç mevcut olmadığında neyin yanlış gidebileceğini düşünüyorsunuz?
- Araştırmalar, belirli engellilik profilleri için tasarlanmış YZ araçları (ör. dizleksi veya Sağır ve İşitme Engelli öğrenenler) içeriyor. Dar profillere göre tasarım yapmaya karşılık baştan itibaren tüm öğrenenler için evrensel tasarım yapmayı seçmenin hangi riskleri olduğunu görüyorsunuz?
- ‘Ortalama’ öğrenci için inşa edilmiş YZ sistemleri, istemeden bile engelli öğrenenleri nasıl göz ardı edebilir veya marjinalleştirebilir — ve bunu önlemek kimin sorumluluğundadır?
- Bir YZ aracının engelli bir öğrenciyi yalnızca barındırmak değil gerçekten dâhil etmesi ne anlama gelirdi — ve pratikte farkı nasıl anlardınız?

## Giriş

Özel eğitim, YZ’nin kişiselleştirme ve uyarlama kapasitesinin özellikle umut vaat ettiği bir alandır. Herkese uyan tek kalıp öğretimin aksine, [[intelligent-tutoring|YZ özel öğretmenleri]] kuramsal olarak bireysel bilişsel profillere, iletişim ihtiyaçlarına ve öğrenme hızlarına uyum sağlayabilir. Bu bilgi tabanındaki makaleler belirli engellilik profilleri için YZ’yi, nöroçeşitli öğrenen tecrübelerini ve YZ ile engellilik üzerine eleştirel bakış açılarını kapsar.

**Engelliğe özgü YZ özel öğretimi**, YZ’yi belirli öğrenen ihtiyaçlarına uyarlar. **[[special-r1-rl-special-education|Special-R1]]**, [[reinforcement-learning|pekiştirmeli öğrenmeyi]] beş engellilik profilinde bilişsel ve iletişimsel çeşitliliği modelleyecek biçimde genişletir; kişilik farkında istek metinleri ve düşünme ödülleri kullanarak her öğrenen için özel öğretmen yanıtlarını şekillendirir. **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]**, dizlektik öğrenenlerin YZ araçlarını nasıl deneyimlediğini incelemiş; hem okuryazarlık desteğinde YZ’nin değerini hem süregelen erişilebilirlik engellerini ortaya çıkarmıştır. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen ve ark.]]**, [[accessibility|Sağır ve İşitme Engelli öğrenenler]] için [[llm]] güçlü bir soru üretim sistemi tasarlamış; metin temelli YZ istek metinleri ile işaret temelli ana diller arasındaki uyuşmazlığı aşmak üzere Görsel ve Duygusal soru stratejileri getirmiş ve soruları hedef toplulukla yinelemeli biçimde iyileştirmiştir. **[[embodied-string-learning-blindness-low-vision-musicians]]**, kör ve az gören müzisyenlerle görsel olmayan öğrenme stratejileri geliştirmiş; engellilik odaklı [[embodied-learning|bedensel]] tasarımı merkeze almıştır. Bunlar [[inclusive-learning]] ve [[neurodiversity]] ile bağlantılıdır.

**Nöroçeşitli öğrenen tecrübeleri**, otistik ve DEHB’li öğrencileri merkeze alır. **[[neurodivergent-computing-students|Zastudil ve ark.]]**, nöroçeşitli bilişim öğrencilerinin yapılandırılmış ödevlere, küçük ve tutarlı ekiplere ve açık rol tanımlarına ihtiyaç duyduğunu bulmuştur — [[collaborative-learning]] araçlarının ele alması gereken tasarım gereksinimleri. **[[adhd-video-segmentation-computing-education]]**, YZ ile segmentlere ayrılmış videoların DEHB performans boşluğunu ortadan kaldırdığını göstermiştir. Her ikisi de [[learning-design]] ve [[universal-design-for-learning]] ile bağlantılıdır.

**Eleştirel bakış açıları**, YZ’nin engelli öğrenenleri nasıl marjinalleştirebileceğini inceler. **[[genai-minoritized-knowledges-disability|Tali-Otmani]]**, YZ sistemlerinin Batı merkezli eğitim verisi nedeniyle engellilik merkezli bilgiyi etkin biçimde marjinalleştirdiğini savunur — epistemik adalet konusundaki [[equity-in-ai-education]] kaygılarına bağlanır.

**Tespit, destek ve kişiselleştirilmiş öğrenme boyunca dizleksi için YZ.** 2026 yılında yayımlanan disiplinler arası bir [[meta-analysis-systematic-review|sistematik derleme]] (Dabaghi, D’Urso ve Sciarrone; PRISMA rehberli, 2018–2024, n=72), YZ’nin dizleksisi olan öğrencileri eğitimde nasıl desteklediğini haritalandırmış; YZ’nin tespit, yardımcı destek ve kişiselleştirilmiş öğrenme için kullanıldığını — ancak bu kolların bütünleşmeden çok paralel olarak evrimleştiğini, pekiştirilmiş eğitim kuramından çok teknolojik fırsatla yönlendirildiğini bulmuştur. ML temelli yardım-eğitim araçları beş alana yayılır (özgün uygulamalar, katılım, kişiselleştirme, öneri, jenerik destek) ama teknik performansı ve sınıflandırma doğruluğunu vurgularken ekolojik geçerliliği ve pratik sınıf içi uygulamayı gözden kaçırır. Tespit araştırması (EEG, göz takibi, ML modelleri) erken müdahaleyi önceliklendirir ve tanısal umut vaat eder, ancak sıklıkla özel ekipman ve kontrollü ortamlar gerektirir; bu, tipik okul ortamlarında ölçeklenebilirliği ve erişilebilirliği sınırlar. Açık zorluklar arasında sınırlı deneysel doğrulama, ölçeklenebilirlik, hassas öğrenci verileriyle ilgili [[ethics]]/mahremiyet kaygıları, sınırlı öğretmen desteği ve eğitimi ve dil/kültürel engeller (araştırmanın çoğu İngilizce konuşan toplulukları hedefler) yer alır.

**Öğrenme güçlüğü olan öğrenciler (SWLD) için bilişsel yük aktarımı.** [[seung-basham-cognitive-offloading-swld-2026|Seung & Basham (2026)]], öğrenme güçlüğü olan öğrenciler için YZ konulu bir *Learning Disability Quarterly* özel serisinde yer alan kavramsal bir inceleme; SWLD’ler için [[generative-ai|GenAI]] kullanımını [[cognitive-offloading]] merceği yoluyla yeniden çerçeveler. Aktarım kararlarının SWLD’lerin bilişsel ve [[motivation|güdüsel]] profilleriyle (yürütücü işlev ve çalışma belleği zorlukları, yüksek bilişsel yük, çabadan kaçınan performans hedefleri, daha düşük akademik öz yeterlik ve GenAI’ye yönelik aşırı beklentiler) ve öğretim tasarımıyla nasıl etkileştiğine bağlı olarak GenAI’nin **telafi edici bir yardım ya da bir kısayol** olabileceğini savunurlar. Okuma ve yazma için GenAI erişimi iskeleyebilir (metin düzeylendirme, özetleme, [[multimodal]] çıktılar, planlama, taslak yazma, revizyon geri bildirimi) ve üst düzey [[student-engagement|katılımı]] korurken — ancak aşırı aktarım, bu öğrenenler için hâlihazırda kırılgan olan anlama, planlama ve izleme süreçlerini atlamak riskini taşır; “[[metacognition|üstbilişsel]] tembellik” besler ve okuryazarlık güçlüklerini alanlar arasında derinleştirir. Makale **öğretimsel [[guardrails]]** temel dengeleyici etken olarak konumlandırır ve stratejik aktarımı [[teacher-role|öğretmeyi]], araç güvenini kalibre etmek için [[ai-literacy]] inşa etmeyi, [[self-efficacy]] geliştirmek için ustalık deneyimlerini sıralamayı ve görevleri ile değerlendirmeyi, beceri gelişimini ikameden önce alan IEP hedefleriyle hizalamayı önerir. Bu, bilgi tabanının özel eğitim kapsamını aktarımın eşitlik boyutuna taşır: korunmadığı takdirde erişim engellerini düşüren aynı araç, SWLD’lerin en çok ihtiyaç duyduğu uygulamanın yerine geçebilir.
**YZ tarafından üretilen müdahale içeriği, yalnızca inceleme değil üretim öncesi denetimler gerektirir.** [[adapted-stories-social-story-intervention-2026|Enkhjargal ve ark. (2026)]], uygulayıcıların ortak tasarlanmış Sosyal Hikâye aracını oldukça kullanışlı bulduklarını (SUS 86,8) ama görsellerini jenerik olarak Batı merkezli, davranış izleyicisini ise hedefe bağlı klinik muhakemeye uymayan bulduklarını — bunları üretimden önce koyacakları kısıtlar olarak nitelendirdiklerini — bulmuştur.

## Özel eğitim öğretim elemanları için çıkarımlar

- **YZ’yi hedef öğrenenler ve toplulukla ortak tasarlayın.** [[llm-question-generation-deaf-hard-of-hearing-2026|Sağır/İşitme Engelli öğrenenler için soru üretimi]], metin temelli istek metinleri ile işaret temelli ana diller arasındaki boşluğu kapatmak için YZ’yi toplulukla yinelemeli biçimde iyileştirmenin değerini göstermektedir — YZ’nin kendilerine uyduğunu varsaymak yerine öğrenenleri ve topluluklarını tasarıma dâhil edin.
- **YZ’yi jenerik erişilebilirliğe değil belirli engellilik profillerine uydurun.** [[special-r1-rl-special-education|Special-R1]], bilişsel ve iletişimsel çeşitliliği engellilik profilleri boyunca modellemesinde; [[dyslexlens-dyslexic-learners-ai|DysLexLens]], dizlektik öğrenenlerin karşılaştığı hem okuryazarlık değerini hem süregelen erişilebilirlik engellerini belgelemektedir — her öğrenenin profiline uygun araçlar seçin ve karşılanmayan engellere karşı tetikte olun.
- **Nöroçeşitli öğrenenler için işbirliğini yapılandırın.** [[neurodivergent-computing-students|Nöroçeşitli bilişim öğrencileri]] yapılandırılmış ödevlere, küçük tutarlı ekiplere ve açık rollere ihtiyaç duyar — bu tasarım gereksinimlerini YZ aracılı herhangi bir işbirlikçi etkinliğe uygulayın.
- **Performans boşluklarını kapatmak için YZ’yi kullanın (genişletmeyin).** [[adhd-video-segmentation-computing-education|YZ ile segmentlere ayrılmış videolar]] DEHB performans boşluğunu ortadan kaldırmıştır — kanıtların sonuçları eşitlemek için gerektiği yerde uyarlamalı YZ konuşlandırın, yalnızca otomasyon sağladığı yerde değil.
- **Engellilik odaklı bedensel tasarımı merkeze alın.** [[embodied-string-learning-blindness-low-vision-musicians|Kör/az gören müzisyenler]] araştırması, görsel olmayan ve engellilik odaklı stratejilerin varsayılan görsel arayüzleri geride bıraktığını göstermektedir — YZ’yi engelli öğrenenlerin uzmanlığıyla birlikte inşa edin ve uyarlayın.
- **Epistemik marjinalleşmeye karşı koruma sağlayın.** [[genai-minoritized-knowledges-disability|Eleştirel bakış açıları]], Batı merkezli eğitim verisinin engellilik merkezli bilgiyi marjinalleştirebileceği konusunda uyarır — [[equity-in-ai-education]] yanında YZ içeriğini ve araçlarını epistemik adalet açısından denetleyin.

## Bağlı kavramlar

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]]
- [[equity-in-ai-education]]
- [[neurodiversity]]
- [[universal-design-for-learning]]
- [[learning-design]]
- [[student-experience]]
- [[ai-literacy]]
- [[k-12]]
- [[higher-ed]]
- [[cs-education]]
- [[generative-ai]]
- [[discipline-specific-aied]]

## Bağlı makaleler
- [[seung-basham-cognitive-offloading-swld-2026]] — GenAI cognitive offloading for students with learning disabilities
- [[special-r1-rl-special-education]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — LLM-powered question generation for Deaf and Hard of Hearing learners
- [[neurodivergent-computing-students]]
- [[adhd-video-segmentation-computing-education]]
- [[genai-minoritized-knowledges-disability]]
- [[embodied-string-learning-blindness-low-vision-musicians]]
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Generative AI, virtual reality, and beyond: A scoping review of digital assistive technologies for neurodivergent students in higher education
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories
