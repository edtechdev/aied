---
title: Psikometrik Bilinçli YZ
created: "2026-10-14T21:32:00-04:00"
type: concept
technology: [llm]
assessment: [assessment-validity, automated-assessment, educational-measurement, item-response-theory]
confidence: medium
translation_of: concepts/psychometrically-aware-ai
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Psikometrik bilinçli YZ** — ölçüm kuramıyla uyumlu YZ değerlendirme sistemleri — [[llm-psychometric-calibration-cdp]], [[llm-item-difficulty-prediction]], [[automated-assessment|Confidence Aware AI Assessment]] ve [[item-response-theory]] çalışmalarında ortaya konan gelişmiş yaklaşımıdır: kalibre edilmiş, belirsizliğin farkında olan YZ değerlendirme, ham model güvenini psikometrik kanıtın yerine koymak yerine güvenilirliği ve geçerliliği korur.

## Dikkate Alınması Gereken Sorular

- Bir YZ bir öğrencinin cevabını puanlar ve kendinden emin görünen bir puan bildirir. Bu sayıya hangi gerekçeyle güvenirsiniz — ve modelin herhangi bir ölçüm standardına göre kalibre edilmediğini öğrendiğinizde cevabınız değişir mi?
- Sayfa, ham model güvenini psikometrik kanıtın yerine koymaya karşı uyarıyor. Bir zamanlar inandığınız ve sonradan yanlış çıkan kendinden emin bir YZ çıktısını düşünün. Onun güvenini kazanılmamış yapan neydi ve bunun yerine "belirsizliğin farkında" bir çıktı nasıl görünürdü?
- [[research-methods-aied|Araştırma]], aynı değerlendirme aracında insanlarla YZ (LLM) yanıt yapılarının ayrıştığını — yani modelin iyi puan almasına rağmen sınavın amaçladığından farklı bir şeyi ölçebileceğini — ortaya koydu. Bir YZ puanlayıcısı kullanan [[teacher-role|öğretmen]] olsanız, testin makine için sizin öğrencilerinizden farklı bir şey "ifade ettiğini" nasıl fark ederdiniz?
- Madde güçlüğü tahmini, bir sorunun ne kadar zor olduğunu ölçmek için YZ (LLM) kullanır. Okumadan önce şunu düşünün: "bu soru ne kadar zor?" sorunun kendisiyle ilgili bir gerçek mi, yoksa onu yanıtlayan kişilerle (ya da modellerle) mi ilgilidir — ve bu belirsizlik sınavları kalibre etmek için YZ kullanımı için ne anlama gelir?
- Kalibrasyon, güvenilirlik ve geçerlilik, kesin anlamlara sahip ölçüm kavramlarıdır. Bunların hangilerini kendi değerlendirme uygulamanızda gerçekten düşündünüz ve hangi noktalarda hiç kontrol edilmemiş bir YZ çıktısına güveniyor olabilirsiniz?
- Bir [[administrator]] ya da geliştirici için: değerlendirdiğiniz bir YZ değerlendirme aracı yalnızca ham doğruluğu bildiriyorsa, gerçek öğrencilerle kurmadan önce sağlayıcısına şimdi hangi özel soruları sorardınız?

## Giriş

YZ sistemleri giderek daha fazla yanıt puanladıkça, güçlüğü tahmin ettikçe ve [[feedback]] sundukça, temel bir risk, ölçüm ilkelerine göre doğrulanmamış, kendinden emin görünen çıktılar bildirmeleridir. Psikometrik bilinçli YZ bu durumu, YZ [[assessment]] çalışmalarını köklü psikometriye dayandırarak ele alır — çıktıları kalibre eder, belirsizliği nicelleştirir ve ham doğruluğa ya da [[self-report-measures|kendi bildirilen]] güvene güvenmek yerine [[assessment-validity]] ve [[educational-measurement]] standartlarını korur.

### Psikometrik bilinçli YZ araştırmada nasıl görünür

- **Kalibrasyon ve güven:** [[automated-assessment|Confidence-aware assessment]] ve [[llm-psychometric-calibration-cdp|LLM psychometric calibration]] çalışmaları, YZ’nin aşırı güvenli nokta tahminleri yerine anlamlı, belirsizliğin farkında puanlar bildirmesini sağlar.
- **Model güveni tek başına yeterli değildir.** SciEntsBank üzerinde, sözel olarak ifade edilen, gizli (latent) ve tutarlılığa dayalı güvenin her biri doğru ile yanlış kısa cevapları ayırt edemedi; en iyi kalibrasyon, gömülü yanıtların küme içi entropisi olan veri kaynaklı aleatorik belirsizliğin — bir Random Forest artı Platt ölçeklemesi yoluyla — eklenmesiyle geldi ve bu, seçici otomatik puanlama ile insan incelemesini mümkün kıldı ([[cong-confidence-asag-2026|Cong ve ark. (2026)]]).
- **Güven etiketleri önceliklendirmeyi işaret eder, kabulü değil.** Yüksek riskli el yazısı fizik puanlamasında, YZ güven etiketleri yüksek güvenli bölümlerde çok daha düşük puan hatası izledi; yine de bazı yüksek güvenli, etiketsiz bölümler resmi işaretlerden farklı çıktı, dolayısıyla bu etiketler otomatik kabulü yetkilendirmekten ziyade sınav görevlisinin incelemesine öncelik vermek için yararlıdır ([[ai-grading-handwritten-physics-2026|Pathak ve ark. (2026)]]).
- **Güçlük tahmini:** [[llm-item-difficulty-prediction|Item-difficulty prediction]], YZ (LLM) tabanlı tahminlerin psikometrik modellere karşı doğrulanması gerektiğini gösterir (bkz. [[item-response-theory]]). [[razavi-powers-item-difficulty-llm-2026|Razavi ve Powers (2026)]] bunun büyük ölçekli bir örneğini sunar: Rasch IRT modeli altında kalibre edilmiş 5.170 K-5 matematik ve okuma maddesi üzerinde, GPT-4o’nun sıfır atış (zero-shot) güçlük derecelendirmeleri gerçek güçlüklerle orta düzeyden güçlü düzeye korelasyon gösterdi (matematikte r = 0,83, okumada r = 0,81) ama sınıf seviyeleri arasında eşit değildi; özellik tabanlı bir yaklaşım (YZ ile çıkarılan özelliklerin ağaç tabanlı modellere aktarılması) ise r = 0,87'ye varan korelasyonlara ulaştı. Çalışmanın yorumlanabilir [[explainable-ai|özellik önemi]] bulgusu (en güçlü yordayıcılar sınıf seviyesi ve kelime sayısı) ve pratik yedi adımlı iş akışı, psikometrik bilinçli YZ’nin nasıl işletilebilir hale getirilebileceğini gösterir — öte yandan alt sınıf aralığı kısıtlılığı ve genellenebilirlikle ilgili çekinceleri, YZ tahminlerinin uydurulmuş psikometrik parametrelere karşı doğrulanma gereğini vurgular.
- **Bir eğrinin kurtarılması her parametrenin kurtarılması anlamına gelmez.** [[simulating-students|simülasyonlu bir yanıtlayıcı]] olarak ince ayarlanmış çok kipli bir model, dışarıda tutulan madde güçlüğünü r = 0,85 ile tahmin etti ve tahmin (guessing) parametresini 0,48 olarak kurtardı, ancak ayırt edicilik (discrimination) zayıftı: 0,31 — dolayısıyla bir yöntemin hangi parametreyi kurtardığı, bulgunun kendisidir ([[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026]]).
- **Ölçüm geçerliliği:** Kavram, [[assessment-validity]] ve [[educational-measurement]] ile, geçerli ve güvenilir YZ değerlendirmesinin ne olduğunu tanımlayan çerçevelerle bağlantılıdır.
- **Gizli yapı (latent-structure) geçerliliği:** [[assessment-latent-structure-human-llm-2026|Strugatski ve ark. (2026)]], psikometrik bilinçli bir duruşun ayrıca bir değerlendirmenin YZ’de insanlardakiyle *aynı gizli yapıyı* ölçtüğünü doğrulaması gerektiğini gösterir. YZ ile insan yanıtlarının faktör yapıları aynı araçlarda ayrıştığı için, iyi puan alan modeller bile sınavın öne sürdüğü yapıyı ölçmüyor olabilir — bu, insanlardan alınan geçerlilik kanıtını ödünç alan her YZ değerlendirmesi için bir çekincedir.
- **Bir etiket, adlandırdığından fazlasını ya da azını ölçebilir.** 12 YZ okuryazarlığı aracının 55 yapısını ve 272 maddesini gömmek (embedding), jangle çiftlerini (aynı etiket, farklı ölçüm) ve jingle çiftlerini (farklı etiketler, neredeyse özdeş ifadeler) ortaya çıkardı ve yapı ayrımlarının madde ifadelerine taşındığını gösteren r = 0,49'luk bir güvenilirlik kurtarmasıyla veri toplamadan önce bir kontrol sağladı ([[ai-literacy-measurement-conceptual-landscape-llm-2026|He ve ark. (2026)]]).
- **Gizli yetenek hatları ve standart belirleme:** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi ve ark. (2026)]], ulusal bir sınavda psikometrik bilinçli puanlamanın somut bir şablonunu sunar: rubrik madde puanları asla doğrudan toplanmaz, bunun yerine gizli yetenek tahminleri Bookmark standart belirleme yöntemiyle Proficient / Close to Proficiency / Insufficient kademelerine bölünen bir [[item-response-theory|IRT]] modeline beslenir; geçmek için en az iki Proficient bölüm ve kalan bölümün en az Close to Proficiency olması gerekir. Yazarlar bu hattı otomatik biçimde yeniden ürettiler (alt kesim için en az 7 rubrik maddesini, üst kesim için en az 10'unu doğru yanıtlama olasılığı olarak %67), böylece YZ ile insan madde puanlarının ham uyuşmaya göre değil, özdeş karar kriterlerine karşı karşılaştırılmasına izin verdi.

### Bağlantılar

Psikometrik bilinçli YZ, [[educational-measurement]], [[assessment-validity]], [[item-response-theory]] ve [[automated-assessment|Confidence Aware AI Assessment]] kesişiminde yer alır. [[ai-ed-evaluation]] için (YZ değerlendirmesinin güvenilir olup olmadığı) merkezi öneme sahiptir ve [[llm]] tabanlı [[automated-assessment]] ile [[automated-assessment|Automated Grading]] çalışmalarına bağlanır. Geçerlilik vurgusu aynı zamanda [[ai-education|AIED]] araştırmalarının [[limitations-in-aied-research|ölçüm sınırlılıkları]] sorusunu da ele alır.

## Bağlı kavramlar

- [[educational-measurement]]
- [[assessment-validity]]
- [[item-response-theory]]
- [[automated-assessment]]
- [[ai-ed-evaluation]]
- [[llm]]
- [[limitations-in-aied-research]]
- [[ai-education]]

## Bağlı makaleler

- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — A Human-in-the-Loop Framework for AI-Assisted Scoring in Large-Scale Writing Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski ve ark. 2026)
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[cong-confidence-asag-2026]] — Confidence-aware automatic short-answer grading
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[competency-based-education-genai-production-2026]] — Competency-based education with GenAI
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[ai-literacy-measurement-conceptual-landscape-llm-2026]] — Comparing AI literacy instruments: jangle and jingle pairs across 55 constructs
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Student Use of LLMs and the Limits of AI-Generated Question Difficulty in Data Science Courses
