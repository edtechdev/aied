---
title: Pedagojik Ajan
created: "2026-10-14T08:02:00-04:00"
connected_faqs: [ai-agents-support-students-instructors]
type: concept
pedagogy: [scaffolding, student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, llm, personalized-learning]
discipline: [stem education]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/pedagogical-agent
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sentez**: [[pedagogy|Pedagojik]] ajanlar, öğrenen [[student-engagement|katılımını]], düşünmeyi ve üstdüşünceyi desteklemek için pedagojik stratejiler (çıkarma, söyleme, iskeleleme) kullanan, öğrenme ortamlarına gömülü yapay zeka destekli konuşma arayüzleridir. Tasarımlar, öğrenen durumlarına uyum sağlayan basit bilgi sağlayıcılardan etkileşimli diyalog ortaklarına kadar değişir.

## Dikkate Alınması Gereken Sorular

- Bir sohbet botunun ya da özel ders öğretmeninin size sizi daha akıllı kılmadan kusursuz bir yanıt verdiği bir anı düşünün. Bir yapay zekanın yalnızca "çözmek" yerine "öğretmesini" ne sağlar — ve bir kıyaslama puanı bu farkı neden yakalayamayabilir?
- Sayfa, özel ders kıyaslamalarında "çözme" puanları ile "pedagoji" puanlarının modeller arasında yalnızca zayıf biçimde ilişkili olduğunu bulur. Bu, bir YZ özel ders öğretmenini soruları yanıtlama becerisine göre değerlendirmek konusunda size ne söylemelidir?
- Bazı tasarımlar yapay zekaya ayrı roller verir — Öğretmen, Sınıf Arkadaşı, Akıl Hocası — ve hatta bir ebeveyni merkezde tutar (ParaTutor’daki gibi). Tecrübenize göre, bir ajanı net bir rolle donatmak onunla [[learners]]in etkileşim biçimini değiştirir mi?
- Gerçek öğrenciler, ajanın hedefleri öğrenenin kendi hedefleriyle çatıştığında bir sohbet botunun pedagojik çerçevesini sıklıkla "atlar". Bir öğrenen iyi bir iskelelemeyi neden akılcı biçimde yok sayabilir ve bu, "inşa edersek kullanırlar" varsayımı için ne anlama gelir?
- Size şeyler anlatan bir yapay zekadan mı, size sorular soran birinden mi yoksa bir grup tartışmasını yönlendirenden mi öğrenmeyi tercih ederdiniz? Tercihiniz, bir "pedagojik ajanın" ne olması gerektiğine ilişkin düşüncenizi nasıl şekillendirir?
- Basit bir bilgi sağlayıcıdan, bütün bir kursu orkestre eden uzmanlaşmış ajanlardan oluşan bir filoya — konuşmaya dayalı YZ özel dersinin değerini (ve riskini) nerede görüyorsunuz?

## Giriş

Pedagojik ajan, bilişsel ve [[metacognition|üstdüşünümsel]] süreçleri desteklemek için öğrenenleri diyalog, sorular ya da istek metinleri yoluyla sürece çeken bir öğrenme sistemi içindeki etkileşimli yapay zeka bileşenidir. Pasif [[visualization|gösterge panolarından]] ya da durağan geri bildirimden farklı olarak pedagojik ajanlar, kanıta dayalı özel ders stratejileri kullanır — örneğin [[feedback]] vermeden önce öğrenenin kendi [[assessment|değerlendirmelerini]] çıkarma ya da Sokratik diyalog yoluyla [[scaffolding]] ile [[problem-solving]] destekleme. Çatı kavram artık tek bir konuşmaya dayalı [[intelligent-tutoring|zeki özel ders öğretmeninden]], ders veren, akıl hocası olan, işbirliğini kolaylaştıran ve hatta kurs üretimini orkestre eden, hepsi on yıllara dayanan zeki özel ders sistemleri [[research-methods-aied|araştırmasına]] dayanan rol uzmanlığına sahip [[agentic-ai|ajan]] filolarına kadar her şeyi kapsar.

## Pedagojik ajanların bilgi tabanında nasıl çalışıldığı

**Konuşma ajanlarının tasarımı ve mimarisi.** Yinelenen bir tema, ajanların yalnızca hangi modellerle çalıştığı değil, nasıl yapılandırıldığıdır. [[conversational-ai-tutors-framework|Konuşmaya dayalı YZ özel ders öğretmeni çerçevesi]], kanıtlanmış ITS [[ai-technologies|teknolojilerinin]] — [[knowledge-tracing]], duygu durumu algılama, [[student-modeling|öğrenci modellemesi]] — üretici özel ders öğretmenlerini çapalaması gerektiğini savunur; tanısal omurgayı korurken esnek diyalogu [[generative-ai]] sağlar. Çok ajanlı tasarımlar bunu daha ileri taşır: [[mooc-to-maic|MAIC]], [[online-teaching-and-learning|MOOC]]’un "N öğrenciye tek video" yaklaşımını, Öğretmen, Asistan, Sınıf Arkadaşı ve Çözümleyici ajanlarından oluşan, ölçekte [[personalized-learning|kişiselleştirilmiş öğrenme]] sunan bir [[llm]] odalı sınıfla değiştirir; [[lecturaagents-multi-agent-teaching|LecturaAgents]] ise görünür [[teacher-role|öğretme]] eylemlerini (el yazısı, vurgulama) öğrenen profilleriyle hizalayan TASA algoritmasına sahip [[embodied-learning|gövdelemeli]] bir ProfessorAgent ekler. Ebeveyn–çocuk özel dersi bile, rol ayrımı sağlayan iskelelemenin ebeveyni merkezde tuttuğu ve sıradan bir sohbet botunun yerine geçmesine izin vermediği [[paratutor-parent-child-tutoring|ParaTutor]]’da iki ajanlı bir soruna dönüşür. Aynı rol temelli mantıga, Öğretim Elemanı, Tasarımcı, Asistan ve Program Başkanı ajanlarının ADDIE boyunca işbirliği yaparak kurs materyalleri ürettiği [[instructional-agents-multi-agent-course-gen|Instructional Agents]] tasarımında da rastlanır.

Rol temelli ajanların tamamlayıcı bir kullanımı, öğrenci öğrenmesinden çok [[teacher-education|öğretmen]] uygulamasını hedefler: [[educasim-cs1-instructional-practice|Mohne ve ark. (2026)]], gerçek kurs materyallerine dayalı belleğe sahip pedagojik öğrenci kişilikleri ve LLM-hakem konuşmacı kehanetini (oracle) birleştirir; böylece yeni başlayan öğretmenler küçük gruplu bir bölümü prova edebilir — her biri ortalama yaklaşık 16 dakika süren 254 isteğe bağlı oturum, oturum başına yaklaşık \$0,05–\$0,10 maliyetle.

**Öğretme karşısında çözme davranışı.** Merkezî bir ampirik bulgu, yanıt üretiminin öğrenme desteği olmadığıdır. [[measuring-llm-tutors-teach-vs-solve|LLM özel ders öğretmenlerinin öğretip çözmediğinin ölçülmesi]], özel ders kıyaslamalarında çözme ve pedagoji puanlarının yalnızca zayıf biçimde ilişkili olduğunu (sekiz modelde r = 0,421) gösterir ve kıyaslamaların yönlendirici sorular, kalibre edilmiş ipuçları, ifşa etmeyen iskeleleme gibi pedagoji odaklı ölçütleri ayrı ayrı bildirmesi gerektiğini savunur. Bu, [[stanford-evidence-base-ai-k12-2026|özel derse özgü ve genel yapay zeka kanıtı]] ile örtüşür: pedagojik olarak tasarlanmış, [[guardrails]] taşıyan özel ders öğretmenleri, sıradan genel amaçlı sohbet botlarının ürettiği sınav puanı düşüşlerini ve baskılanan muhakemeyi hafifletir; [[desirable-difficulties|arzu edilir zorlukları]] ve verimli çabayı kısaltmak yerine korur. Yine de kıyaslamalar, iskelelemeli özel ders öğretmenlerinin bile gerçek dünyada ne kadar iyi işlediğini olduğundan yüksek tahmin edebilir. [[rethinking-scaffolding-llm-tutors|LLM özel ders öğretmenlerinde iskelelemeyi yeniden düşünmek]] çalışması, gerçek öğrencilerin bir sohbet botunun pedagojik çerçevesini sık sık atladığını bulur; bu, ajanın hedefleriyle öğrenenin kendi hedefleri arasındaki uyumsuzluğa akılcı bir yanıttır — bu nedenle benimseme varsayılmamalı, değerlendirilmelidir.

**Özel ders ve işbirliğindeki rol.** Ajanlar giderek daha çok yanıt veren olarak değil, kolaylaştırıcı ve aracı olarak konumlandırılır. [[niari-ai-pedagogical-mediator-collaborative-learning|Niari’nin pedagojik aracı çerçevesi]], yapay zekayı [[collaborative-learning|işbirlikçi öğrenme]] bağlamında etkileşimsel, epistemik ve düzenleyici bir aracı olarak yeniden düşünür; öğretmen ya da [[agency|öğrenen etkenliğini]] gerektirmeden katılımın ve paylaşılan [[regulation]] iskelelenmesini sağlar. Somut olarak, [[golrang-propact-pair-programming-2026|işbirlikçi YZ özel dersi (ProPACT)]], işbirliğinin kendisini öğretimin nesnesi olarak ele alır; ikili çözümlemeleri 30 saniyeye kadar önceden öngörerek [[metacognition]] korayan en az müdahaleli iskelelemeler sunar. [[embodied-inquiry-ai-facilitator-physics-2026|Kolaylaştırıcı olarak YZ ile gövdelemeli araştırma]], bir yapay zekanın kurulan bir modelin uygulanmasını kolaylaştırarak elle yapılan model kurmayı tamamlayabileceğini gösterir; [[robot-assisted-language-learning-meta-analysis-2026|robot destekli dil öğrenimi üst derlemesi]] ise sonuçların, robotik bir ajanın teknik gelişmişliğinden çok öğretimdeki konumlanmasına (grup temelli etkileşim) bağlı olduğunu bulur. Bir ajanın üstlendiği *rolün* yeterli olup olmadığı, yoksa *davranışını da uyarlaması* gerekip gerekmediği sorusunu [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]] gündeme getirir: bir [[k-12|ilkokul]] "kitap üzerine konuşma" çalışması, sabit kalıplı bir "öğrenci akran" arkadaşının daha uzun etkileşimleri sürdürdüğünü ancak öğrenci etkenliğini baskıladığını ve bir "[[affective-computing|duyuşsal]] tavan" ile karşılaştığını (zayıf duygusal/geleceğe yönelik düşünme) bulmuş; bunun sonucu olarak rol *etiketlemesi*, tek rollü monolitik bir tasarım yerine role-*uyumlu* etkileşim mantığıyla eşleştirilmelidir.

[[ethics-training-agents-group-ethics-discussion-2026|Etik Eğitimi Ajanları (Seo ve ark., 2026)]], bir pedagojik ajandan öğretmek yerine yönetimini (moderasyon) yapmasının istendiğinde ne olduğunu gösterir: sıra alışını (15 saniyelik el kaldırma pencereleriyle yığma), zaman yönetimini (9 dakika sonra bir evreyi özet aşamasına otomatik ilerletme) ve artımlı toplu özetlemeyi üstlenen bir LLM kolaylaştırıcısı, katılımcıların bilişsel yükünü azaltmış ve tartışmanın "yolunda" olduğu hissini vermiştir — bir katılımcı bunu, "sık sık dağınık hissedilebilen ya da fikirlerin ilerleyişini görmeyi zorlaştıran" ChatGPT ile olumlu biçimde karşılaştırmıştır. Aynı çalışma, kişilik temelli ajanların tavanını da ortaya koyar: üç ayrı [[ethics|etik]] yönelimli ajan, katkı, çeşitlilik ve etki boyutlarında insan akranlarının belirgin biçimde altında puanlanmıştır (Kruskal-Wallis p < ,001) ve katılımcılar, sonuç odaklı yerine süreç odaklı ("ajanın nasıl akıl yürüttüğü") çıktı talep etmiştir.

**Konuşma ajanlarının nerede (ve nerede olmadığı) kullanıldığı — çatı derleme görünümü.** [[conversational-ai-agents-umbrella-review-2026|Konuşmaya dayalı YZ ajanlarının çatı derlemesi]] (Ganguly ve ark. 2025, 34 derleme), CAI kullanımını niceleştirir: öğretim ve öğrenme desteği (derlemelerin \%97,1’i), psikolojik ve [[motivation|motivasyonel]] destek (\%91,2) ile üstdüşüncesel ve kişisel gelişim (\%88,2) önde gelirken; idari destek (\%50), araştırma ve bilgi yönetimi (\%52,9) ile sağlık/tıbbi destek (\%41,2) geridedir. Derleme ayrıca [[conversational-ai|CAI]] araştırmasının uçtan uca tasarım rehberliğinden, CAI’ya özgü [[usability-research|kullanılabilirlik]] yöntemlerinden ve öğretmenin rolüne ilişkin somut sınıf orkestrasyon stratejilerinden yoksun olduğunu belirtir; bu da pedagojik ajan tasarımının HCI temelli, kanıta dayalı ve [[ai-literacy]] duyarlı olması gerektiğini pekiştirir ([[conversational-ai-agents-umbrella-review-2026]]).

**Rol yönelimi bir tasarım değişkenidir, üslup tercihi değil.** [[wang-teacher-student-centered-agents-physics-2026|Fizik ajanı karşılaştırması]] (Wang ve ark. 2026, 59 öğrenen), modeli, platformu ve sıcaklığı sabit tutarak yalnızca istek metniyle belirlenen rolü izole eder: sınırlı bir ders kitabı kaynağına dayanan ve öğretmenin bakış açısından yanıt veren öğretmen merkezli bir ajan ile, öğrencilerin anlayışına ilişkin bilgiyle yapılandırılmış ve yanlış kanıları teşhis etmek, kavramı adlandırmak ve benzer bir duruma [[transfer-of-learning|aktarma]] yapmak üzere betimlenmiş öğrenci merkezli bir ajan. Öğrenci merkezli rol, ölçülen her sonuçta kazanmıştır — sınav sonrası performans, daha düşük dışsal ve daha yüksek alıcı bilişsel yük, akış deneyimi ve algılanan empati — oysa öğretmen merkezli ajan doğruluk ve ders kitabına bağlılık açısından optimize edilmiş olanıdır. Bu, *rolü ve etkileşim düzenini*, [[prompt-engineering|istek metni]] ve model tercihiyle yan yana birinci sınıf bir tasarım parametresi yapar ve empatinin farklı eğitilmiş bir modelden değil, konuşma yapısından tasarlanabileceğini gösterir ([[affective-computing]]).

**Yazma amacı, hayata geçen pedagojiyi garanti etmez.** 27 ortaokul öğretmeni öğretmene dönük bir sohbet botu yazım aracını yapılandırdığında, 108 bot düzeyi ölçüt puanlamasının değerlendirmesi, üretilen yanıtların yanıt verebilirlikle (\%88,9) ve kişilikle (\%81,5) çok daha iyi uyum sağladığını, kurallarla (\%70,4) ya da belirtilen amaçla (\%59,3) uyum sağlamadığını göstermiştir; yazarlar bunu Norman’ın Yürütme Uçurumu ve Değerlendirme Uçurumu’nun pedagojik biçimleri üzerinden çerçeveler — yapılandırılabilir denetimler tek başına öğretmenin öğretim amacını botun davranışında görünür kılmamıştır ([[teachers-configure-educational-chatbots-2026|Riahi ve ark. (2026)]]).

**Sürükleyici ve genişletilmiş gerçeklik ortamlarındaki ajanlar.** [[aclime-pedagogical-agents-extended-reality-2026|Ross ve Kaspar (2026)]], kavramı [[virtual-and-augmented-reality|genişletilmiş gerçekliğe]] (AR, artırılmış sanallık ve VR) ACLIME ile taşır; bu, CAMIL, CATLM-VR ve TICOL’den farklı olarak ajanı modelin içinde tutan kavramsal bir çerçevedir. Literatürden alınan iki etkileşim kipini adlandırır: rehberlik, teşvik, yansıtıcı sorgulama ve açıklamalar sunan *akıl hocası* ile bir iklim değişikliği gezisinde bir yerel rehber ya da kurumsal eğitimde bir müzakerede karşı taraf gibi bir senaryonun içinde tanımlı bir rolü işgal eden *rol yapma ortağı*. Ajanın bedeni (yalnızca kafadan tam bedene) ve davranışı tasarım yüzeyleri olarak ele alınır: görsel karşısında davranışsal gerçekçilik, esnek YZ denetimi karşısında sabit kural temelli betimleme, sentezlenmiş karşısında önceden kaydedilmiş konuşma ve bakış, jest ve proksemik gibi sözsüz kanallar. Sürükleyicilik ve bedene dayalı etkileşimliğin, [[community-of-inquiry|sosyal varlığın]] ardındaki sosyal ipuçlarını çoğalttığı savunulur — görsel değil, davranışsal gerçekçiliğin belirleyici yordayıcı olarak öne sürülür — öğrenenin kendi sanal bedeni ise bir [[embodied-learning|gövdelemecilik]] boyutu (bedene sahip olma, sanal kendi bedeni etkenliği, kendini konumlandırma) ve proteus etkisini ekler. Çerçevenin açık ödünleşimi bilişseldir: sürükleyicilik ve ajanın yalnızca var olması, ajanla olan sosyal etkileşim bilişsel yükü toplu çalışma belleği etkisi yoluyla düşürse de bilişsel yükü artırabilir; alışılmış tasarım değişkenlerine bir zaman katmanı (alışma, insan–ajan ilişkilerinin olgunlaşması, yenilik etkisinin azalması, siber hastalığının gelişmesi) eklenir. Durumu kasıtlı olarak geçicidir: sürükleyici ortamlarda pedagojik ajanları sınayan ampirik çalışma henüz neredeyse yoktur ve uzun vadeli [[learning-gains|öğrenme çıktıları]] ile öğrenen özellikleri modelin dışında kalır.

**Değerlendirme ve kıyaslamalar.** Bir pedagojik ajanı ölçmek, pedagojiyi sınamayı gerektirir, içeriği değil. [[teaching-monster-pck-benchmark-2026|The Teaching Monster Challenge]], ajanlardan belirli bir öğrenen kişiliğine uyarlanmış bir ders hazırlamalarını isteerek Pedagojik İçerik Bilgisini kıyaslar; sistemlerin içerikte güçlü ama onu uyarlamada zayıf olduğunu bulur ve LLM hakemlerinin güçlü sistemleri yanlış sıraladığını ortaya koyar. [[chen-teacharena-language-agents-realistic-teaching-2026|EduAgentBench]], ajanları profesyonel pedagojik yargı, [[situated-learning|bağlama gömülü]] çok turlu özel ders ve tuval tarzı iş akışı tamamlama boyutlarında değerlendirir; modellerin profesyonel öğretme standartlarının gerisinde kaldığını gösterir. [[ai-generated-interactive-fiction-education-2026|YZ tarafından üretilen etkileşimli kurgu]] bir tasarım değerlendirme boyutu ekler: tutarlılık ve sınav tümleşimi, üretim yeteneği değil, [[student-experience|öğrenci deneyimi]] için faydalılığı sınırlayan şeydir.
**Çok turlu bağlamda kişilik dayanıklılığını zorlu sınayın.** [[adversarial-stress-testing-role-playing-agents|Shouqi ve ark. (2026)]], otomatik bir Hakemle rol yapma ajanlarına karşı altı kademeli saldırı yürütmüştür; çok stratejili sınama, tek stratejili tabana göre dayanıklılığı 0,17–0,20 düşürmüş ve kritik hatalar 5–6. turdan sonra kümelenmiştir; bu nedenle kısa ya da tek turlu değerlendirmeler kişilik kararlılığını ve etik bağlılığı olduğundan yüksek tahmin eder.

## Pratik öneriler

Öğrenenin etkenliği için tasarlayın, modelin rahatlığı için değil. Çözme ile öğretme birbirinden ayrıldığı için, sıradan yanıt üretiminden çok özel derse özgü koruyucu tedbirleri — [[scaffolding]], ipuçları, [[socratic-method|Sokratik sorgulama]], [[misconceptions|yanlış kanı]] hedefleme — tercih edin. Desteği tek bir sıradan arayüz üzerinden değil, kullanıcı rolüne göre dağıtın (ebeveyn karşısında çocuk, akran karşısında akran) ve işbirliğini iskeleleme için geçerli bir hedef olarak ele alın. Öğrencilerin iskelelemeyi benimseyeceğini varsaymayın; benimsemeyi gerçek bağlamlarda değerlendirin. Yazım sürecine [[human-in-the-loop-ai|insan denetimi]] yerleştirin — [[ai-tutor-authoring-promptdecipher|PromptDecipher]]’ın bot yanıtlarının öğretmen kalite denetimini birinci sınıf bir etkinlik haline getirmesi gibi — ve niteliğin korunduğu yerlerde daha ucuz altyapı seçin. Öğretme ve çözme puanlarını ayrı ayrı bildirin ve üretimin faydalılık anlamına geldiğini varsaymak yerine üretilen içeriği kullanıcılarla doğrulayın.

Öğrenen tercihi, iskeleleme niteliğinin zayıf bir göstergesidir: YZ destekli matematiksel modellemede öğrenciler, Akran ve Öğretmen Asistanı rolleriyle en iyi performansı göstermişken, daha buyurucu nitelikteki Özel Ders Öğretmeni ve Üstün Öğrenci rollerini faydalılık ve öz yeterlilik açısından en yüksek puanlamıştır ([[preferred-scaffolding-ai-mathematical-modeling|Zhu, Yang ve Yang (2026)]]).
 Bilgisayar destekli işbirlikçi öğrenmede yapay zeka ajanlarının incelendiği 46 çalışmanın bir derlemesi, bilişsel iskelelemeyi, sosyal kolaylaştırmayı ve öğretimsel orkestrasyonu ayırır; bilişsel kazanımlar tutarlı görünürken davranışsal, sosyal ve duygusal çıktılar bağlama bağlıdır — bu nedenle ajanın işlevi, üretmesi amaçlanan sonuç için seçilmelidir ([[ba-ai-agents-cscl-review-2026|Ba ve ark. (2026)]]).

## İlgili kavramlarla bağlantılar

Pedagojik ajanlar (tanısal omurgaları olan [[knowledge-tracing]] ve öğrenci modellemesine sahip) [[intelligent-tutoring]] ile (aktarım motorları olan) [[generative-ai]]/[[llm]] arasındaki kesişimde yer alır. [[scaffolding]] ve [[feedback]] işlerlik kılar, [[metacognition]] ve [[self-regulated-learning]] hedefler ve giderek daha çok [[collaborative-learning]] hedefler. Güvenlik kaygıları, [[pedagogical-safety]], yazım niteliği ve ajanların öğrenmeyi desteklemek yerine onu [[cognitive-offloading|boşaltma]] riski çevresinde yinelenir. Tüm bu süreç, yalnızca çözmeyi değil öğretmeyi de ölçmesi gereken [[ai-ed-evaluation]] ve [[benchmark|kıyaslamalar]] yoluyla değerlendirilir.

Belirleyici olarak, pedagojik ajanlar ne kadar akıcı yanıt verdiklerine göre değil, [[learning-gains|öğrenme kazanımları]]na göre yargılanır. Bilgi tabanının kanıtı şudur: ajanlar, koruyucu tedbirlerle donatılmış özel derse özgü koçlar olarak tasarlandığında kalıcı kazanımlar üretir — [[stanford-evidence-base-ai-k12-2026|özel derse özgü yapay zeka, genel amaçlı sohbet botlarını tutarlı biçimde geride bırakır]] — ve öğrenenin çabasının yerine geçtiğinde öğrenmeye zarar verebilir ([[generative-ai-guardrails-harm-learning|koruyucu tedbir RCT’si]], [[jost-llm-programming-education-learning-outcomes|LLM bağımlılığı ve notlar]]). Bir ajanın [[learning-gains]] ölçmek bu nedenle, araç içi performans değil, desteksiz ve aktarılabilir sonuç ölçütleri gerektirir.

Daha iyi geri bildirim, daha iyi öğrenme anlamına gelmez: bir ajanı bilgi tabanları ve bir iş akışıyla özelleştirmek, geri bildirim doğruluğunu ve özgüllüğünü artırmış, ancak öz düzenleyici davranışları, öğrenme deneyimlerini ve sonuçları değişmemiş bırakmıştır; kazanım avantajı yalnızca buyurucu geri bildirim altında ortaya çıkmıştır ([[agent-type-feedback-style-self-directed-learning-2026|Han ve ark. (2026)]]).

## Bağlı kavramlar

- [[learning-gains]]
- [[pedagogical-safety]]
- [[agentic-ai]]
- [[ai-education]]
- [[intelligent-tutoring]]
- [[scaffolding]]
- [[metacognition]]
- [[feedback]]
- [[collaborative-learning]]
- [[llm]]
- [[generative-ai]]
- [[student-experience]]
- [[knowledge-tracing]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[cognitive-offloading]]
- [[benchmark]]
- [[ai-ed-evaluation]]
- [[socratic-method]]
- [[teacher-role]]

## Bağlı makaleler

- [[wang-teacher-student-centered-agents-physics-2026]] — Öğrenci merkezli ajan rolü, performans, yük, akış ve empati boyutlarında öğretmen merkezli rolü geride bırakır (Wang ve ark. 2026)
- [[aclime-pedagogical-agents-extended-reality-2026]] — ACLIME: AR/VR ortamındaki pedagojik ajanlar için kavramsal çerçeve — akıl hocası karşısında rol yapma ortağı, gerçekçilik, varlık, bilişsel yük (Ross ve Kaspar 2026)
- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[ai-generated-interactive-fiction-education-2026]]
- [[embodied-inquiry-ai-facilitator-physics-2026]]
- [[niari-ai-pedagogical-mediator-collaborative-learning]]
- [[adversarial-stress-testing-role-playing-agents]]
- [[teaching-monster-pck-benchmark-2026]]
- [[structrag-diagram-reasoning-ai-tutoring]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[mooc-to-maic]]
- [[rethinking-scaffolding-llm-tutors]]
- [[lecturaagents-multi-agent-teaching]]
- [[robot-assisted-language-learning-meta-analysis-2026]]
- [[measuring-llm-tutors-teach-vs-solve]]
- [[golrang-propact-pair-programming-2026]]
- [[conversational-ai-tutors-framework]]
- [[instructional-agents-multi-agent-course-gen]]
- [[stanford-evidence-base-ai-k12-2026]]
- [[paratutor-parent-child-tutoring]]
- [[agents-that-teach-incidental-learning]]
- [[ai-tutor-authoring-promptdecipher]]
- [[educasim-cs1-instructional-practice]] — EducaSim: öğretim uygulaması için üretici öğrenci ajanları
- [[conversational-ai-agents-umbrella-review-2026]] — Eğitimde konuşmaya dayalı YZ ajanlarının çatı derlemesi
- [[conversational-agents-novice-programmers-scoping-2025]] — Yeni başlayan programcılar için konuşma ajanlarının kapsam taraması
- [[ba-ai-agents-cscl-review-2026]] — Bilgisayar destekli işbirlikçi öğrenmede yapay zeka ajanları derlemesi
- [[kim-ai-productive-failure-adult-2026]] — Verimli Başarısızlığa Dayalı Öğrenmeyi Destekleyen Yapay Zeka Sistemlerinin Tasarlanması
- [[preferred-scaffolding-ai-mathematical-modeling]] — YZ destekli matematiksel modellemede tercih edilen iskeleleme
- [[llm-adaptive-programming-error-explanations-2026]] — Programlama hatalarının LLM uyarlamalı açıklamaları
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — İlkokul kitap üzerine konuşma için role uyumlu YZ arkadaşı; sabit rollü ajanların duyuşsal tavanı (Liao 2026)
- [[ethics-training-agents-group-ethics-discussion-2026]] — Etik Eğitimi Ajanları: Rol Yapma ve Tartışma ile Etik Yansıtma ve Keşfi Destekleyen Grup Temelli Etik Eğitiminin Kolaylaştırılması
- [[teachers-configure-educational-chatbots-2026]] — İstemek Anlamına Geldiğinde Öğretir mi? Öğretmenlerin Eğitim Amaçlı YZ Sohbet Botlarını Nasıl Yapılandırdığı
- [[agent-type-feedback-style-self-directed-learning-2026]] — Özelleştirilmiş ajan geri bildirim niteliğini artırdı ama öz düzenlemeyi ya da sonuçları artırmadı; kazanım avantajı yalnızca buyurucu geri bildirim altında
