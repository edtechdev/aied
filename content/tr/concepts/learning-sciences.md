---
title: "Öğrenme Bilimleri"
created: "2026-10-14T22:15:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [cognitive-psychology, learning-theories, pedagogy]
technology: [intelligent-tutoring, learning-analytics]
discipline: [learning sciences]
audience: [researchers, instructional designers, instructors, policymakers]
level: [k 12, higher ed, adult learning]
page_kind: [framework, synthesis]
confidence: high
methods: [research-methods-aied]
reviewed_by: [editor]
translation_of: concepts/learning-sciences
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

> **Öğrenme bilimleri** — insanların nasıl öğrendiğini ve öğrenmenin gerçekleştiği ortamların nasıl tasarlanacağını inceleyen disiplinler arası araştırma alanı; [[cognitive-psychology|bilişsel psikoloji]], [[learning-theories|öğrenme kuramı]], bilgisayar bilimi ve dilbilime dayanır ve tasarımlarını kuramın tek başına değil, ampirik kanıtla yargılar. Bu bilgi tabanında okul derslerinden biri değil, [[ai-education|Eğitimde YZ]]’nin çevresindeki araştırma alanıdır: YZ sistemlerinin işlevsel kıldığı mekanizmaları (bilgi bileşenleri, [[mastery-learning|ustalık eşikleri]], [[transfer-of-learning|transfer]]), bunların gömülü olduğu tasarım nesnelerini ([[learning-design|planlanmış kurs dizileri]], [[intelligent-tutoring|mentorlar]], [[feedback]] rejimleri) ve bunların yargılandığı ölçütleri ([[learning-gains]], [[assessment-validity]], [[equity-in-ai-education|eşitlik]]) sağlar. Onun yapılandırıcı sorusu bir aracın iyi performans gösterip göstermediği değil, bir öğrenenin değişip değişmediğidir.

## Dikkate Alınması Gereken Sorular

- Bir öğrenen her alıştırma maddesini geçer, ustalık eşiği de seti bitirir — sonra kuralı, eylemin gerçekleştirilmemesi gereken yerde yanlış uygular. Bu kimin hatasıdır: öğrenenin, modelin mi, yoksa durdurma kuralının mı?
- Dizi madenciliği, bir sınıfı gözlemlemeden 554 kursu örüntü olarak betimleyebilir. Alan, uygulanan etkinlik yerine tasarlanmış niyetleri inceleyerek ne kazanır, ne kaybeder?
- Bir LLM’nin geri bildirimindeki demografik duyarlılık, öğrenenin belirtilen eğitim düzeyini izlediğinde uyarlama gibi görünür ve duygu durumunu kaydırdığında yanlılık gibi görünür. İkisini ayırt edemeyen bir alan, değerlendirmek için açık uçlu modelleri kullanmaya devam etmeli mi?
- Öğrenme bilimlerinin nedensel tasarıma düşkünlüğü — randomize atama, karşıolgusal denetimler, öğrenenin çalıştırılabilir modelleri — Eğitimde YZ’de kanıt sayılanı daraltır mı?

## Giriş

Öğrenme bilimleri öğrenmeyi ve öğrenme ortamlarının tasarımını inceler ve konuları kadar yöntemleriyle tanımlanırlar: deneyler, sınıf denemeleri, öğrenci verisinin [[quantitative-research|nicel]] modellemesi, tasarım ve bağlamların [[qualitative-research|nitel]] analizi ile bir müdahaleyi kurduran ve onu kullanımda gözden geçiren tasarım temelli araştırma. Bu genişlik, bu sayfayı çerçeveleri, uygulamayı ve araçları sağlayan komşulardan ayırır; aşağıdaki bölüm her sınırı ve onun ötesinde alanın kurduğunu ortaya koyar.

Bu sayfa, bu yöntemlerin ürettiği özsel bilgiyi kapsar — öğrenenlerin bir üretken modelle ne yaptığı, hangi düzenlemelerin sonuçları değiştirdiği ve alanın kendi araçlarının nerede başarısız olduğu. [[discipline-specific-aied]] bunun ters kesiti alır ve ders materyalinin desteğin ne yapması gerektiğini değiştirdiğini savunur; öğrenme bilimleri kesişen görüşü alır ve sınadıkları mekanizmalar [[cognitive-psychology]] altında toplanır.

### Öğrenme bilimlerinde YZ nasıl görünür

- **Önce mekanizma, sonra model.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren ve Stamper (2026)]], Riichi Mahjong için [[intelligent-tutoring]] sistemleriyle on bir deney (N = 192) yürüttü ve aşırı genelleştirilmiş bir üretim derleyen öğrenenlerin — uygulama kısıtı olmadan eylem — bunu ilk “eyleme geçme” maddesinde %61,5–%100 oranında yanlış uyguladığını gösterdi; [[knowledge-tracing|Bayesçi bilgi izleme]] altında beklenen hata %12 idi. %95 ustalık eşiğiyle sistem, öğrenenlerin eylemin gerçekleştirilmemesini gerektiren bir vaka ile karşılaşmasından önce pratiği durdurdu; bu nedenle kusur saptanamadı. Eksik kısıtı adlandıran [[feedback]] ile kısa “eyleme geçme” pratiği, yanlış uygulamayı %0,0–%23,1’e düşürdü (Cohen’in h’si 1,70–2,44) ve on üç K-12 *Decimal Point* veri kümesinin ikincil bir analizi, aynı yapıyı tam sayı yanlılığında buldu (karşılaştırma hatalarının %84–%88’i).
- **En uygun değer içeriğe bağlıdır.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger ve Carvalho (2025)]], örnek–problem oranını bir içerik–uygulama etkileşimi olarak ele alır: geometri-alan materyali üzerinde 95 katılımcıyla 2×2 deneyde, yalnızca pratik eğitimi kelimesi kelimesine olgular için daha büyük [[learning-gains|öğrenme kazanımları]] üretirken örnek bütünleşmeli eğitim genelleştirilebilir beceriler için daha büyük kazanımlar üretti (β = 0,41, p = ,038, d = 0,38). Bir benzetilmiş öğrenen (Apprentice Learner), çaprazlamayı yalnızca ACT-R tarzı bir [[cognitive-psychology|bellek-ve-unutma mekanizması]] verildiğinde yeniden üretti. Daha fazla pratik tekdüze biçimde daha iyi değildir: belleğe yönelik içerik geri çağırmayı, çıkarıma yönelik beceriler bütünleşmeli örnekleri hak eder.
- **Çözümlenebilir bir nesne olarak tasarım.** [[learning-paths-patterns-learning-design-2026|Divjak, Svetec ve Horvat (2026)]], [[learning-analytics]]’i [[learning-design]]’ın kendisine çevirdi; ücretsiz bir kurs tasarımı aracında planlanan 554 kurstaki 29.064 etkinliği kodladı. Kazanım en yaygın öğrenme türü ve en yaygın giriş noktasıydı; en güçlü Markov geçişi Değerlendirme → Tartışma (0,332) ve en yüksek güvenli kural Kazanım → Değerlendirme → Alıştırma → Alıştırma (0,743, yük 1,45) idi. Öğrenme türü amaçlanan sonuç düzeyini izledi; Kazanım, Bloom düzey 1’de etkinliklerin yaklaşık %50’sinden düzey 6’da yaklaşık %20’sine düştü. Yazarlar bunların uygulama öncesi tasarımlar olduğunu vurgular: tersyüz edilmiş, [[inquiry-based-learning|sorgu temelli]] ya da [[project-based-learning|proje temelli]] dizilere benzerlik niyetin kanıtı değildir.
- **Değerlendiren modelleri denetlemek.** [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto ve Hovy (2026)]], altı [[llm|LLM]]’yi [[automated-essay-scoring|kompozisyon puanlama]], [[formative-assessment|biçimlendirici geri bildirim]] ve soru yanıtlama boyunca denetledi; yalnızca demografik bağlamı değiştirirken görev girdisini sabit tuttu (192.480 çağrı). Puanlama açık kişilikler altında kararlıydı, ancak Llama-70B örtük konuşma geçmişi altında kendi puanlarını 1,57 puan şişirdi (p < 0,001) ve yüksek öğrenim daha az okunabilir ve daha olumlu yanıtlar çekti — yaklaşık dört standart sapmalık bir duygu durumu boşluğu. Okunabilirlik etkileri küçülürken uzunluk etkileri büyüdü ve bazı katsayılar koşullar arasında işaret değiştirdi. Yazarlar bunu bir konuşlandırma hükmü değil, bir denetim aracı olarak sunar ve demografik ile konuya ilişkin sinyalin dolaşımını [[assessment-validity|geçerlilik]] ve [[equity-in-ai-education|eşitlik]] tehdidi olarak okurlar.
- **Yetkinliği ölçmek ve sınırları.** [[competent-generative-ai-use-measures-review-2026|Verí (2026)]], yetkin [[generative-ai]] kullanımına yönelik araçları dört alanda düzenler — bilgi ve kullanım, epistemik gözetim, güven kalibrasyonu ve araç kullanan aracılar üzerinde denetim — ve bunları tek bir yeterlilik sürekliliğine indirgemeyi reddeder. Öz puanlı ile gösterilmiş [[ai-literacy|YZ okuryazarlığı]] arasındaki üç aynı örneklemli korelasyon r = ,055 olarak havuzlandı (%95 GA [-0,047, 0,156], bildirilen N = 2.765); yazar bunu, [[self-report-measures|öz puanları]]nı performans puanlarıyla değiştirilebilir olarak ele almayı reddetmeye yeter, ancak bir eşik belirlemeye yeterli olmadığını okur. Hiçbir doğrulanmış araç, araç kullanan aracıların yarattığı kararların tamamını kapsamadı; önerilen katmanlı batarya bir tasarım hipotezidir.
- **Öğrenenin kendi yük boşaltmasına ilişkin öz bildirim.** [[pause-ai-cognitive-offloading-self-reflection-2026|Alam (2026)]], [[cognitive-offloading]] literatürünü PAUSE’a çevirir; her LLM çağı maddesi bir kaynağa bağlı, bileşik olmayan, depolaması ve üretimde modeli olmayan, yalnızca tarayıcıda çalışan dört alanlı bir öz denetimi. Bantları betimleyicidir, normlanmış değildir ve bir okuma, değerlendirme, kabul ya da işe alım kararlarını gerekçelendirmemelidir. Belirtilen sınırları önemlidir: yük boşaltmanın öz bildirimi, ilgilendiği yetkinliğe karşı savunmasızdır, YZ’yi kasıtlı biçimde bir [[scaffolding|iskele]] olarak kullanan bir katılımcı çeşitli maddelerde yük boşaltma olarak okunur ve YZ ile ilişkili yük boşaltmanın genel teknoloji bağımlılığından farklı olup olmadığı açık kalır.
- **İnsan uzmanlığının nerede durduğu.** [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Wang ve ark. (2024)]], en açık iş bölümünü bildirir: yaklaşık 900 acemi K-12 mentoru ve kabaca 1.800 öğrenciyle iki aylık bir [[rct|randomize kontrollü deney]]de, deneyimli mentorların akıl yürütmesinden çekilen gerçek zamanlı öneriler konu ustalığını 4 yüzdelik puan yükseltti (%62’den %66’ya, p < 0,01) ve daha düşük puanlı mentorlar için 9 puan, mentor başına yıl yaklaşık \\$20 maliyetle, mentorluğu yönlendirici sorulara doğru kaydırdı. Kazanımlar yakındı — yıl sonu testleri kımıldamadı. [[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert ve ark. (2026)]], öğretmenlerin aynı konuma tasarımla vardığını bulur: sohbet robotu prototipleştiren altı ortaokul öğretmeni, sınırlandırılmış bir uzman belirtti, yetki sınırları (öğrenme ve güvenlik sorumluluğu devredilemez) ve uzmanlık sınırları (model, bireysel öğrencilere dair onların bilgisinden yoksundur) tuttu ve içerik sunumunu, pratiği ve düzeltici [[feedback]]’i devrederken hedef belirlemeyi ve [[summative-assessment|toplu değerlendirme]]yi ayırdı.
- **Alan düzeyinde yetenek.** [[sutedjo-faculty-genai-tpack-21-2026|Sutedjo, Chowdhury ve Liu (2026)]], üretken YZ için uyarlanmış bir [[tpack|TPACK]] aracıyla 127 öğretim kadrosu üyesini anket etti: belirgin biçimde daha düşük teknoloji bütünleşmeli bilginin yanında güçlü içerik ve pedagojik içerik bilgisi (M = 4,70–5,15), bütüncül TPACK en düşükte 2,55, içerik bilgisi hiçbir teknoloji bütünleşmeli alanla ilişkisiz ve üç bütünleşmeli alan o kadar yüksek ilişkili (r = ,81–,91) ki tek bir etken olarak işlev görebilirler. [[perrotta-zero-shot-governance-2026|Perrotta (2026)]], yönetişim katmanını kod tabanı ticari modeller üzerinde bir sistem istek metni artı bir erişim hattı olan, durdurulmuş bir Birleşik Krallık sivil hizmet prototipi üzerinden okur; temel modellerin genelliğinin hem hızlı yeniden amaçlamayla [[educational-policy-ai|politika]] araçlarına dönüşmeyi mümkün kıldığını hem de aykırı çıktıyı kalıcı biçimde yalnızca hafifletilebilir bir risk haline getirdiğini savunur — döngünün içinde oturmaktan çok üzerinden bakan gözetim.
- **Eşleşmeyen boşluk haralandı:** [[malik-bashir-reconceptualizing-learning-sciences-hybrid-intelligence-2026|Malik ve Bashir (2026)]], 32 çalışmayı (PRISMA 2020, tematik analiz) dört temaya sentezledi: alan içinde epistemolojik parçalanma, kuram–teknoloji çelişkileri (hesaplamalı sistemler tahmin ve ölçülebilir davranış üzerinde çalışırken eğitim kuramları bağlam ve sosyal etkileşimi vurgular), analitik yoluyla öğrenmenin veriye dönüştürülmesi ve ortaya çıkan bir paradigma olarak hibrit zekâ. Hibrit Zekâ Çerçeveleri doğrulanmış bir model değil, kavramsal bir sentezdir — yazarlar onun ampirik sınamayı beklediğini belirtir — ancak dört temalı harita, bu alanın sürekli çarptığı kuramdan hesaplamaya çeviri sorunu için yararlı bir denetim merceğidir.

## Öğrenme bilimleri komşularıyla nasıl ilişkilidir

[[design-based-research|Tasarım temelli araştırma]], bu alanın ödünç almak yerine geliştirdiği yöntemdir: bir müdahale, kuramsal gerekçesi onunla birlikte gözden geçirilerek çalışan bir sınıfın içinde kurulur ve revize edilir; böylece tek bir çalışma hem bir yapıt hem bir tasarım ilkesi verir. Bunu, bağlamı sabit tutarak bir nedeni yalıtan laboratuvar deneyinden ayıran budur ve alanın bulgularının etki büyüklükleri olarak değil, tasarım bilgisi olarak gelişinin nedeni budur. [[research-methods-aied]] ters kesiti alır: o sayfa bütün repertuvarı — deneyler, anketler, nitel çalışmalar, kıyaslama ölçütleri, derlemeler, uzlaşı yöntemleri — her birinin destekleyebildiği iddianın geçerliliği için tartılarak bir araç seçimi olarak tarar. Bu sayfa aynı derlemi özsel taraftan okur, repertuvarın öğrenme hakkında ne kurduğunu sorar ve bir yöntemi, tasarım iddiasının öğrenenlerle temasa ayakta kalıp kalmadığına göre yargılar.

[[learning-theories]], aday çerçeveleri — davranışçılık, bilişselcilik, yapılandırmacılık, sosyokültürel açıklamalar, motivasyon ve öz düzenleme — YZ’yi okumak için mercekler olarak toplar. Öğrenme bilimleri bu sözlüğü paylaşır ama bu duruşu paylaşmaz: burada bir kuram, bir tasarımın ya örneklemesi ya da çürütmesi gereken mekanizma hakkında bir iddiadır ve alanın saygınlığı bir çerçevenin tutarlılığından çok ampirik ve tasarım çalışmasına dayanır. Bir çerçevenin ne iddia ettiğini açmak için uygun olan sayfa kuram sayfasıdır; bir çerçevenin hangi kanıtı biriktirdiği için uygun olan sayfa budur.

Alan aynı zamanda yalnızca ödünç alınan çerçeveleri sınamakla kalmaz, kuram da kurar: [[theory-development-aied]], öğrenenlerin, öğretmenlerin ve YZ sistemlerinin nasıl etkileşime girdiğini açıklayan kavramsal çalışmayı kapsar ve alanın kendi yapılarının ölçülmeden önce tartıldığı yer orasıdır. Tasarımlarından üretmesi genellikle istenen şey [[transfer-of-learning|transfer]]dir — mentor, ders ya da görevin ötesinde ayakta kalan bilgi ve beceri — bu nedenle bir araç içinde ölçülen kazanım, onsuz ölçülen bir kazanımdan daha zayıf bir iddia sayılır. Ve tasarlanmış bir ortam bileşik bir müdahale olduğundan, bir sonucu tek bir bileşene atfetmek alanın yerleşik ölçüm sorunudur: [[educational-measurement]], atfı tartışılabilir kılan psikometrik aygıtı sağlar; bu nedenle ölçüm soruları burada sonradan değil, erken gelir.

[[cognitive-psychology]], alanın en yoğun biçimde yararlandığı mekanizma düzeyinde disiplindir; sınırlandırılmış çalışma belleği, kodlama ve geri çağırma, ayrıştırılabilir bilgi bileşenleri ve öğrenen modellemenin tanılama dilini sağlar. Öğrenme bilimleri bu mekanizmaları onlara indirgemeden kullanır: analiz birimi, belleğin laboratuvar açıklamasının taşımadığı sosyal, motivasyonel ve bağlamsal değişkenleri taşıyan tasarlanmış bir ortamdır ve testleri yalıtılmış bilişsel etkiler üzerinde değil, bütün müdahaleler üzerinde yürütülür.

[[pedagogy]] ve [[learning-design]] uygulamayı kapsar — hangi öğretme stratejisinin kullanılacağı ve hedeflerin, etkinliklerin ile değerlendirmenin bir kursa nasıl dizileneceği. İkisi de öğrenme bilimlerinin dışarıdan, betimleme ve değerlendirme nesneleri olarak inceledikleri şeydir; alan bir öğretmene sıradaki hangi taktiğe uzanacağını söylemez, taktiklerin ne yaptığının gösterildiğini bildirir. Öğrenme tasarımı daha yakın akrabadır, zira ikisi de uygulanabilir ve sınanabilir bir şey üretir; ancak tasarımcının çıktısı öğretilebilir bir kurs, alanın çıktısı ise genel olarak tasarımlar hakkında bilgidir.

Bulgular yalnızca öğretime ulaştıklarında önem kazanır ve bu yolculuk üç sayfa üzerinden geçer. [[educational-development]], onları taşıyan kurumsal uygulamadır — kadro geliştirme, standartlar, politika ve kimlik çalışması, doğrulanmış bir tasarımın sınıfa hiç ulaşıp ulaşmadığına karar verir; bu nedenle alanın kanıtı alışılmış olarak kurumların uyguladığının önünde gider. [[teacher-education]], bilginin bir öğretmen odaya girmeden önce inmek zorunda olduğu yerdir ve [[teacher-role]], ardından indiği yerdir — ne zaman müdahale edileceği, hangi aracın kullanılacağı ve bir öğrenenin ne zaman yalnız bırakılacağına ilişkin anda anda verilen yargıda. Üçü de öğrenme bilimi bulguları üretmez; üçü de o bulguların uygulamayı değiştirip değiştirmediğine karar verir.

## Bağlı kavramlar

- [[learning-theories]]
- [[cognitive-psychology]]
- [[pedagogy]]
- [[learning-design]]
- [[research-methods-aied]]
- [[theory-development-aied]]
- [[design-based-research]]
- [[teacher-education]]
- [[educational-development]]
- [[discipline-specific-aied]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[assessment-validity]]
- [[educational-measurement]]
- [[cognitive-offloading]]
- [[learning-gains]]
- [[transfer-of-learning]]
- [[teacher-role]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]

## Bağlı makaleler

- [[competent-generative-ai-use-measures-review-2026]] — Review and exploratory meta-analysis of measures for competent generative-AI use (Verí 2026)
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Correctness masking an incomplete rule: mastery stopping rules in adaptive learning (An, McLaren & Stamper 2026)
- [[demographic-signals-llm-student-assessment-2026]] — Counterfactual audit of demographic signals in LLM student assessment (Rooein, Benedetto & Hovy 2026)
- [[learning-paths-patterns-learning-design-2026]] — Markov chains and pattern mining over 29,064 activities in 554 courses (Divjak, Svetec & Horvat 2026)
- [[pause-ai-cognitive-offloading-self-reflection-2026]] — A privacy-preserving, non-diagnostic self-check for AI-associated offloading (Alam 2026)
- [[perrotta-zero-shot-governance-2026]] — Zero-shot governance: general-purpose AI in policy, read through the Redbox codebase (Perrotta 2026)
- [[rachatasumrit-example-problem-ratio-2026]] — Why the best example–problem ratio depends on content (Rachatasumrit, Koedinger & Carvalho 2025)
- [[reichert-human-centered-llm-chatbot-design-teachers-2026]] — Teachers design bounded-expert chatbots, with selective delegation of instruction (Reichert et al. 2026)
- [[sutedjo-faculty-genai-tpack-21-2026]] — Faculty GenAI TPACK: strong content knowledge, weak technology-integrated knowledge (Sutedjo, Chowdhury & Liu 2026)
- [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024]] — Tutor CoPilot: a randomized trial of human–AI live tutoring at scale (Wang et al. 2024)