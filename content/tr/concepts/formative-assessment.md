---
title: Biçimlendirici Değerlendirme
created: "2026-10-14T21:50:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, human-in-the-loop-ai, learning-analytics, llm, personalized-learning]
assessment: [ai-feedback-quality, assessment, automated-assessment, feedback, formative-assessment]
connected_faqs: [ai-feedback-at-scale]
connected_resources: [snorkl, ai-infused-assignment-playbook]
confidence: high
reviewed_by: [editor]
translation_of: concepts/formative-assessment
source_updated: "2026-10-04T05:46:16-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Biçimlendirici değerlendirme** — [[summative-assessment|toplayıcı]] değerlendirmenin aksine, süregelen öğretimi ve öğrenmeyi bilgilendirmek üzere tasarlanmış değerlendirme. Eğitimde YZ açısından biçimlendirici değerlendirme hem YZ tarafından dönüştürülür hem ona temel teşkil eder: YZ sistemleri biçimlendirici maddeleri ve geri bildirimi ölçekte üretebilir, doğrulayabilir ve uyarlayabilir; oysa biçimlendirici geri bildirim, [[intelligent-tutoring|YZ özel öğretmenlerinin]] ve [[adaptive-learning|uyarlanabilir sistemlerin]] öğrenmeyi desteklediği temel mekanizmalardan biridir. Bilgi tabanının [[research-methods-aied|araştırmaları]], YZ tarafından üretilen biçimlendirici maddeleri, YZ tarafından üretilen geri bildirimi ve bu sistemlerin tasarımı ile değerlendirilmesini inceler.

## Dikkate Alınması Gereken Sorular

- Biçimlendirici değerlendirme döngüyü kapatmak içindir — *öğrenme sürerken* öğrencilerin bilmediklerini ortaya çıkarmak ve üzerine hareket edebilecekleri geri bildirim vermek. Bu, toplayıcı değerlendirmeden temelde nasıl farklıdır ve uygulamada ikisi ne zaman karışabilir?
- YZ, doğrulanabilir boyutlarda etkileyici doğrulukla çoktan seçmeli sorular üretebilir ama öğretimsel yargı boyutlarında en zayıfıdır. Bir makine doğru cevaplarda iyi ama [[pedagogy|pedagojik]] yargıda daha zayıfsa, ne yapmasına güvenilmeli — ve insanlar ne yapmaya devam etmeli?
- YZ tarafından üretilen geri bildirim yalnızca öğrenciler onu gerçekten hayata geçirdiğinde yardımcı olur — “hayata geçirilmiş geri bildirim” koşulu, yani öğrencilerin önerileri seçtiği, değerlendirdiği ve uyguladığı durum, yalnızca geri bildirimin verilmesini geride bıraktı. Hayata geçirme geri bildirimin kendisinden daha önemliyse, bu, biçimlendirici geri bildirimin nasıl tasarlanması gerektiği açısından ne anlama geliyor?
- Geri bildirim bilgi aktarımı olarak değil [[ethics|etik]], ilişkisel bir uygulama olarak tanımlanır. Biçimlendirici değerlendirme “YZ artığı” olarak seri üretildiğinde ne kaybedilir — ve insan yorum bankaları ile ilişkisel özen neyi koruyabilir?

## Giriş

Biçimlendirici değerlendirme, [[ai-education|Eğitimde yapay zeka]] açısından merkezidir; çünkü [[assessment]] ile [[feedback|öğrenme geri bildiriminin]] birleştiği noktada yer alır. Amacı döngüyü kapatmaktır: öğrencilerin bildiklerini ve bilmediklerini ortaya çıkarmak ve iyileştirmek üzere üzerine hareket edebilecekleri geri bildirim sağlamak. YZ bunu ölçekte mümkün kılar — madde üretir, yanıtları puanlar ve bireyselleştirilmiş geri bildirim sunar — ama bilgi tabanının araştırmaları niteliğin madde türlerine göre belirgin biçimde değiştiğini ve geri bildirimin yalnızca öğrenciler onu gerçekten hayata geçirdiğinde yardımcı olduğunu gösterir.

## YZ tarafından üretilen biçimlendirici maddeler

YZ sistemleri, güvenilirliği türe göre değişen biçimlendirici değerlendirme maddelerini çeşitli biçimlerde üretir:

- **Çoktan seçmeli sorular:** [[code-gen]], kod anlama için çoktan seçmeli soruların yedi pedagojik boyutta doğrulandığında [[agentic-ai|aracı YZ]] tarafından güvenilir biçimde üretilebileceğini gösterir — başarı oranları kavram uyumu için **%98,6’ya**, geri bildirim niteliği için **%79,9’a** ulaşır — bu da YZ’nin doğrulanabilir boyutlarda en güçlü, öğretimsel yargı boyutlarında en zayıf olduğunu düşündürür. Bu, daha geniş anlamda [[automated-question-generation|otomatik soru üretimi]] ile bağlantılıdır.

- **Kolay üretilmiş bir madde havuzu biçimlendirici sinyal vermez.** On haftalık bir uygulamada, YZ tarafından üretilen alıştırma maddelerinin yaklaşık %70’ini her öğrenci doğru yanıtladı (p = 1.0); dolayısıyla her 15–20 dakikada bir yapılan düşük riskli sınavlar iyi karşılanıyordu ama öğretimi uyarlamak için neredeyse hiç ayırt edici bilgi taşımıyordu ([[student-llm-use-ai-question-difficulty-data-science-2026|An ve Wang (2026)]]).

- **Otomatik kompozisyon puanlaması:** çok aracılı çerçeveler (örneğin MASS), [[automated-essay-scoring|kompozisyon puanlama]] için tek başına duran [[llm|LLM]]’lere göre tutarlılığı artırır; oysa çok aracılı puanlama kararlarının [[explainable-ai|yorumlanabilirliği]] açık bir zorluk olarak kalmaya devam eder.

- **Biçimlendirici puanlama hatları:** [[cotal-formative-assessment-scoring-2026|CoTAL]], Akıl Yürütme Zinciri istek metinlerini [[active-learning|etkin öğrenme]] ve Kanıt Merkezli Tasarımla birleştirerek insan-döngüde [[prompt-engineering|istek metni mühendisliğiyle]] genellenebilir biçimlendirici değerlendirme puanlaması üretir.

- **Yüksek sıklıklı, [[automated-assessment|otomatik puanlanan değerlendirmeler]]:** [[automated-formative-assessments-a-level-sciences|A-level fen bilimlerinde otomatik biçimlendirici değerlendirmeler]], yüksek sıklıklı ve otomatik puanlanan biçimlendirici değerlendirmenin [[learning-gains|öğrenme çıktıları]] üzerindeki etkisini inceler. [[science-education|Fen eğitiminde]] kısa cevap otomatik puanlamasına ilişkin bir kapsam tarama incelemesi (2017–2024 başı), bu biçimlendirici kısa cevap kullanım alanının gerçek çekişi olan bir alan olduğunu doğrular: BERT ailesi modeller 2021’e kadar otomatik puanlamada hâkimiyet kurdu, ardından ~2022’den itibaren daha büyük [[llm|LLM]]’lere istek metni sunuldu; alan açısından zenginleştirilmiş, rubrik duyarlı ve akıl yürütme zincirine dayalı modeller en iyi performansı gösterdi — oysa incelemenin kapsamlı değerlendirme çağrıları ve çözülmemiş [[bias-mitigation|adalet]] ile yorumlanabilirlik boşlukları, bu tür sistemlerin aracısız [[summative-assessment|toplayıcı]] veya yüksek riskli kullanıma genişletilmesine karşı uyarıyor ([[auto-marking-short-answer-science-2026]]).

## YZ tarafından üretilen geri bildirim

Bilgi tabanının geniş bir araştırma kümesi YZ tarafından üretilen biçimlendirici geri bildirimi inceler:

- **Hayata geçirme sorunu:** [[ai-feedback-enactment-workflow-2026|YZ Tarafından Üretilen Geri Bildirimi Önemli Kılmak]] (13.037 öğrenci; 51.296 kaynak), geri bildirim değerinin öğrencilerin onu *hayata geçirip geçirmediğine* bağlı olduğunu gösterir — öğrencilerin YZ geri bildirim önerilerini seçtiği, değerlendirdiği ve uyguladığı **Hayata Geçirilmiş Geri Bildirim** koşulu, yalnızca yönlendirilmiş geri bildirimi geride bıraktı.

- **Rubrik ölçütleri taşıdığında YZ geri bildirimi uzman öğretmenlerle eşleşebilir.** Kaynağına kör ve 47 üniversite proje grubunda randomize biçimde, birlikte kurulmuş 0–30 rubriği ve örnek çalışma verilen bir LLM, uzman geri bildirimine göre aşağı olmayan *ve* ona eşdeğerdi (+0,23, %90 CI [−0,46, 0,91]) — kalibre olan model değil rubrikti ([[ai-generated-feedback-higher-ed|Grion ve ark. (2026)]]).

- **Geri bildirim bilgi aktarımı değildir:** [[care-full-feedback-genai|Geri bildirimin özenli ustalığı]], geri bildirimin bilgi iletiminden çok etik, ilişkisel bir uygulama olduğunu savunur — geri bildirim yalnızca öğrenciler onu anlamlandırıp üzerine hareket ettiğinde geri bildirim olur — ve seri üretilmiş “YZ artığını” insan yorum bankası kısayollarıyla karşıtlıklar.

- **Sıralı geri bildirim ters teyebilir:** [[sequenced-ai-feedback-learning|Sıralı YZ geri bildirimi]] (özerkliği teşvik etmek üzere tasarlanan teşvik → ipucu → doğru cevap dizisi), [[student-engagement|katılımı]] ve olumlu algıları artırmasına rağmen bir randomize deneyde (N=199) gerçekte öğrenmeye **zarar verdi** — geri bildirim tasarımına ilişkin bir uyarı.

- **Öğrenen merkezli araçlar:** [[learner-centered-feedback-ai|PolyFeed]], ML öneri modellerini [[teacher-role|öğretmen]] uygulamasıyla birleştirerek öğretmenlerin YZ geri bildirim önerilerini nasıl benimsediğini ve uyarladığını gösterir; [[ai-internal-feedback-evaluative-judgments|YZ destekli içsel geri bildirim]] lisans öğrencilerinin [[evaluative-judgment|değerlendirici yargıyı]] geliştirmesine yardımcı olur.

- **Rubrik kılavuzlu istek metni ve rol duyarlı geri bildirim:** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar ve ark. (2026)]], performans tanımlayıcılarını netleştiren ve öğrenmenin örtük göstergelerini açıkça kabul eden yinelemeli rubrik ortak iyileştirmesinin, öğrenci tasarım işi üzerinde LLM–insan uyumunu %54,75’ten %81,25’e çıkardığını gösterdi (Cronbach Alfa’sı 0,393’ten 0,798’e yükseldi); kazanımların en büyüğü bilişsel açıdan en zorlayıcı olan Yineleme ve Yansıma kategorisinde oldu. Aynı modelin öğretim elemanı, akran değerlendirici ve hibe değerlendirici rollerinde istek metniyle yönlendirilmesi farklı değerlendirici geri bildirim üretirken, revizyon sonrası LLM’ler performans eşiklerini uygulamada bazı insan puanlayıcılardan daha tutarlıydı — bu da rubrik kılavuzlu LLM’leri, insan-döngüde gözetimin esasa ilişkin kalmasıyla biçimlendirici geri bildirim ortamlarında kalibrasyon ve ortak tasarım ortağı olarak konumlandırıyor.

- **Uyum oranları bir yönü gizler: bir model orta kategoriye doğru yalpalanabilir.** Bir konuşmaya dayalı değerlendirme içinde diyalog dönüşlerini etiketleyen bir LLM değerlendiricisi, 155 olayın %52,2’sinde insan kodlamayla eşleşti ama puanlayıcılardan daha sık yalpalanan PARTIAL_CORRECT etiketini kullandı (%41,3’e karşılık %53,5) ve puanlayıcıların hiçbirini işaretlemediği %5,4’lük bir dönüş grubunu IRRELEVANT olarak işaretledi ([[llm-multi-agent-conversation-assessment-2025|Hou ve ark., 2025]]).

- **YZ geri bildirimi katılımı sürdürür ve ölçekte kazanım yaratır:** [[gpt4-feedback-student-activation-2026|Geschwind ve ark. (2026)]]’nin lisans ders çalışmalarında bir dönem süren alan deneyi, bireysel GPT-4 biçimlendirici geri bildiriminin (Hattie ve Timperley’in üç boyutunun tamamını kapsayan biçimde — Feed-Back, Feed-Up, Feed-Forward) sekiz açık uçlu görev boyunca en yüksek katılımı sürdürdüğünü, öğrenci yanıtlarını uzattığını ve en güçlü içerik öğrenme kazanımlarını ürettiğini buldu — bu etki, nitelikli metinsel akran geri bildirimi gerçekten alındığında akran sonuçlarının YZ’ninkilerle eşleşmesi nedeniyle güvenilir, tutarlı YZ sunumundan kaynaklanıyor.

- **Geri bildirim gelecekleri:** [[feedback-futures-genai|Geri Bildirim Gelecekleri]] bir özel sayıyı sentezler ve sorunun [[generative-ai|GenAI]]’nın geri bildirim üretip üretemeyeceği değil, öğrenmeyi destekleyen geri bildirimin nasıl tasarlanacağı olduğunu savunur; alanda yinelenen gerilimleri damıtır.

- **Biçimlendirici geri bildirimin çoğu anlıktır, sürdürülebilir değildir.** 37 özgün değerlendirme çalışmasının kapsam tarama incelemesinde, 23’ü anında iyileştirme için biçimlendirici geri bildirim kullanırken yalnızca dördü, öğrencilerin gelecek bağlamlara aktardığı sürdürülebilir geri bildirimi kullandı — mevcut YZ geri bildirim araçlarının yeniden ürettiği tepkisel örüntü ([[zhan-boud-du-authentic-assessment-scoping-review-2025|Zhan, Boud ve Du (2025)]]).

- **Açık uçlu nicel problemler için teşhis öncelikli geri bildirim:** [[yin-arthur-ai-teaching-assistant-engineering-econ-2026|Arthur (Yin ve ark. 2026)]], Mühendislik Ekonomisi Hesaplanmış Formül Soruları üzerinde gerçek zamanlı, kişiselleştirilmiş biçimlendirici geri bildirim sunar; bu alanda daha önce elle yazılmış, yapılandırılmamış çözümler YZ desteğini engelliyordu. Soru başına bir [[machine-learning|XGBoost]] omurgası, öğrencilerin gönderdiği sayısal cevaplardan olası rubrikle etiketlenmiş hataları teşhis eder (ortalama kesinlik 0,81, duyarlılık 0,79) ve diyaloga dayalı bir düzen yalnızca tahmin güveni düşük olduğunda ara adımları ister — bir soru bankası web arayüzü içinde geri bildirim doğruluğunu toplama verimliliğiyle dengeleme.

- **LLM biçimlendirici geri bildiriminin ölçeği ve sınırları (sistematik kanıt):** PRISMA kılavuzlu bir [[meta-analysis-systematic-review|sistematik derleme]] (2023–2025 yıllarına ait 42 ampirik çalışma), LLM’lerin öğretmen iş yükünü azaltabileceğini ve özellikle büyük ya da [[higher-ed|yükseköğretim]] kohortlarında hızlı, kişiselleştirilmiş geri bildirimi ölçekte sunabileceğini, ama geri bildirimin bazen fazla jenerik olduğunu veya atanan nota uyumsuz kaldığını ve güvenilirliğin uzun, [[multilingual-learning|çok dilli]] veya nüanslı görevlerde düştüğünü buluyor; bu da biçimlendirici YZ geri bildiriminin eğitimci gözetimi altında en iyi biçimde kullanıldığını pekiştiriyor ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]).

- **Uyarlanabilirlik ayrı bir bileşendir, süs değildir:** [[ai-feedback-adaptivity-children-plans-2026|Sukjaitham, Schaaf, Brod ve Breitwieser (2026)]], çoğu LLM-geri bildirim çalışmasının varsaydığı doğrudan nedensel sınamayı sunuyor; GPT-4’ün yanıta bağlı geri bildirimini, yapı, ton, uzunluk ve [[motivation|güdüleyici]] ifadeleme açısından eşleştirilmiş uzman yazımı jenerik rehberliğe karşı deniyorlar (beş boyutlu nitelik rubriğiyle doğrulandı, κ = 0,76–1,00). Ön kayıtlı özneler içi bir deneyde, 155 Alman beşinci ve altıncı sınıf öğrencisi (M = 12,08 yaş) altı eğer-o zaman planını revize etti: plan niteliği uyarlanabilir geri bildirim altında jenerik rehberliğe göre **2 → 5** iken **2 → 3** olarak yükseldi (kişi içi V = 10.440, p < .001, r = .86; koşul × zaman etkileşim tahmini = 1,68, SE = 0,14, p < .001, ön destek farkı yok). Çocuklar uyarlanabilir geri bildirimi hem daha yararlı (r = .67) hem daha güdüleyici (r = .74) buldu ve deneme düzeyinde algılar revizyon kazanımlarının büyüklüğünü öngördü — bu da [[technology-acceptance-model|algılanan yararlılığı]] yolun bir parçası yapıyor, duygusal bir yan ürün değil. Denetim grubunun kendisi iyi tasarlandığından, çalışma iyi olmayan-tümleşik rehberliğin ötesinde katma değeri gösteriyor, geri bildirim ile hiçlik arasındaki farkı değil: jenerik rehberlik gerçek ama sınırlı bir yedektir ve kendi medyanında yataylaşır. Planlama, açık nitelik ölçütleriyle [[self-regulated-learning|öz-düzenlemeli öğrenmenin]] çekirdek bir stratejisi olarak sınama olayı olarak hizmet etti; bu da [[scaffolding]] ile statik desteği ayıran nitelik olan tümleşikliği, tek cümlelik bir yanıtta doğrudan ölçülebilir kılar. Yazarlar uyarlanabilirliği dar biçimde, geri bildirim içeriğinin öğrenenin somut yanıtına yanıta bağlı uyarlanması olarak tanımlar ve onu konuşmaya dayalı etkileşimlik, ton ve kararlı nitelik [[adaptive-learning|uyarlanabilir öğrenmeden]] ayırır.

- **Algılanan yararlılık eyleme dönüştürülebilirliği izler:** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça ve ark. (2026)]], 144 programlama öğrencisinden 893 LLM tarafından üretilen geri bildirim örneğini beş boyutta ve 237 birleştirilmiş raporu altı boyutta puanlatırken alanı, görevi ve aracı sabit tutup eğitim düzeyini değiştirdi. Puanlar tümüyle olumluydu; bireysel yanıtlar için öğrenci düzeyinde ortalamalar 4,24 ile 4,43, raporlar için 4,11 ile 4,38 arasındaydı; oysa eyleme dönüştürülebilirlik ve yararlılık en düşük puanları alırken, eyleme dönüştürülebilirlik ve algılanan doğruluk, algılanan yararlılıktaki varyansın %76’sını açıklayan bir modelde en büyük göreli ağırlıkları taşıdı (%32,6 ve %29,0) ve güdülenme ile kişiselleştirme, kullanım niyetini açıklayan %53’lük rapor düzeyinde bir modelde önde geldi. Eyleme dönüştürülebilirlik, [[feedback]] araştırmalarının en zor sağlanan boyut olarak gördüğü boyut olduğundan, örüntü geri bildirime uygulanmış [[technology-acceptance-model|teknoloji kabulü]] olarak okunur: yararlılık, geri bildirimin ne kadar cilalı duyulduğunu değil öğrenenin eyleme geçip geçemeyeceğini izler.

- **Çevrimdışı uyum canlı performansı olduğundan yüksek gösterir:** [[ai-assisted-instructor-supervised-grading-feedback|Cruz ve ark. (2026)]]’nin GPT-4o geri bildirim hattı, 362 gönderinin %83’ünde öğretim elemanının notunu 0,5 puan içinde tekrarladı, oysa şans düzeltmeli uyum yalnızca orta düzeydeydi (ICC(2,1) = 0,49) ve geçmişteki kodlamalardaki r = 0,92’den canlı, öğretim elemanı gözetimli kullanımda 0,57’ye düştü.

- **Revizyona giden yolda kavrayış, eyleme dönüştürülebilirliği aşar:** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao ve Fan (2026)]], madde düzeyinde teşhisi önerilerden ayırdı ve öğrencilere bağımsız revizyondan önce yazılı bir yorum sayfası (yeniden ifade, etki açıklaması, belirsizlik belirleme, revizyon planı) verdi; bunu yapılandırılmış öğretmen incelemesi, yeniden değerlendirme ve yansıma izledi. İki bütün sınıfta üç yazım döngüsü boyunca (96 öğrenci; 288 döngü düzeyinde gözlem), geri bildirim kavrayışı revizyon niteliğiyle en güçlü ilişkiyi taşıdı (r = 0,501; eyleme dönüştürülebilirliğin 0,480 ve teşhis doğruluğunun 0,445 önünde) ve teşhis grubu 3,58’e karşılık 5,92 yazım puanı kazandı (Hedges’in g = 1,12); kaldıracı yalnızca eyleme dönüştürülebilirliğinde değil öğrencilerin teşhisi anlamasında buluyor.

## Müfredata dayalı ve eğitimci-döngüde tasarım

[[ai-learning-tools-engineering-education-needs|LearnLens]], YZ biçimlendirici değerlendirmesinde üç kalıcı sorunu ele alır: **hata duyarlı değerlendirme** (yüzey hataları yerine nüanslı akıl yürütme hatalarını yakalamak), **konuya bağlı bellek zincirleri** (gürültülü benzerlik tabanlı [[rag]] yerine yapılandırılmış, [[curriculum-design|müfredat]] temelli erişim kullanmak) ve **eğitimci-döngüde** tasarım (tam otomasyon değil, öğretmen özelleştirmesi ve gözetimi). Bu, [[human-in-the-loop-ai]] alanındaki daha geniş gerilimle bağlantılıdır: uzman doğrulamasıyla ölçeklenebilir otomasyon.

[[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe, Loibl ve Leuders (2026)]], bir aracın ham gözlemler yerine kendi iddialarını ürettiği durumda eğitimci-döngüde’nin ne anlama geldiğini netleştirir. Kavramsal analizleri, YZ tarafından üretilen teşhis çıkarımlarının nitelikleri farklı kanıt olduğunu savunur; çünkü bunlar zaten algoritmik yorumun ürünüdür, dolayısıyla öğretmenlerin yazarların **meta teşhis** adını verdiği bir başka katmana gereksinimi vardır: bir çıkarımı bilinçli biçimde kabul etmek, reddetmek veya değiştirmek ve onu kendi bağlamsal bilgileriyle bütünleştirmek. Bunun için DiaCoM çerçevesini belirlemek, YZ tarafından üretilen çıkarımları bir durum niteliği, kabul/ret/değiştirme kararını ise teşhis davranışı olarak ele alırken, öğretmenlerin gereksinim duyduğu kişi niteliklerini YZ sistemlerinin gerçekten nasıl çalıştığına dair bilgiyi içerecek biçimde genişletir. Mevcut sistemler çoğunlukla görev doğruluğu ve tamamlanma süresi gibi performans verilerine dayandığından, güdülenme durumları ve sınıf dinamiği büyük ölçüde yok kalır; bu nedenle makale sorumlu yansıtıcı ajan olarak öğretmeni korur, panoyu değil, ve algoritmik iddiaları yargılamayı mesleki gelişimin bir hedefi olarak çerçeveler.

YZ’nin rolünü başarı düzeyine uydurmak ilgili bir tasarım hamlesidir: matematik öğretmeni adayları, ChatGPT’yi düşük başarılılar için Hasta Özel Öğretmen, orta başarılılar için Kişisel Koç ve yüksek başarılılar için Entelektüel Maç Partneri olarak tanımladı, oysa öğretim elemanı zor içeriğin nihai açıklamasını elinde tuttu ([[instructor-ai-roles-chatgpt-formative-assessment-2026|Ratniyom ve ark., 2026]]).

## Tasarım ödünleşimleri

| Boyut | YZ Uygunluğu | İnsan Gereksinimi |
|-----------|----------------|-------------------|
| Olgusal doğruluk | Yüksek | Düşük |
| Kavram uyumu | Yüksek | Orta |
| Çeldirici niteliği | Düşük | Yüksek |
| Geri bildirim derinliği | Düşük | Yüksek |
| Rubrik tutarlılığı | Orta | Orta |

## Değerlendirme, geri bildirim ve öğrenme

Eğitimde YZ açısından biçimlendirici değerlendirme, öğrenme sürecinin kendisine bağlanır:

- **Geri bildirim döngüleri:** [[feedback|geri bildirim döngüleri]], biçimlendirici değerlendirmenin öğrenmeyi bilgilendirdiği mekanizmadır; YZ özel öğretmenleri ve uyarlanabilir sistemler bu döngüleri ölçekte kapatır.
- **Öz-düzenlemeli öğrenme:** biçimlendirici geri bildirim, öğrenciler ilerlemeyi izleyip uyarladığında [[self-regulated-learning|öz-düzenlemeli öğrenmeyi]] destekler; YZ geri bildirimi [[ai-internal-feedback-evaluative-judgments|değerlendirici yargıyı]] geliştirmeli, onun yerini almamalıdır.
- **Otomatik puanlama döngünün bazı evrelerine ulaşır, tümüne değil:** [[chen-automated-scoring-interpreting-self-regulated-learning-2026|Chen ve Liu (2026)]], 46 tercüme öğrencisinin haftalık yorumlamalarını; anında puan, yazı dökümü, işaretlenmiş hatalar ve bir başvuru yorumlaması döndüren bir otomatik puanlama sistemine gönderdiği, denetim grubunun ise yalnızca tüm sınıfa öğretmen geri bildirimi aldığı 14 haftalık yarı-deneysel bir çalışma yürüttü. Otomatik grup genel olarak daha çok gelişti (d = 1,03), ama kazanım, açığın ayrıştırılabilir olduğu, sinyalin güvenilir olduğu ve ölçeğin duyarlı olduğu yerde kaldı: dilsel doğruluk ve mantıksal tutarlılık yükseldi, oysa bilgi bağlılığı (insan puanlayıcılarla uyum r = 0,12) ve sunum akıcılığı kımıldamadı. [[self-regulated-learning|Öz-düzenlemeli öğrenme]] eşleşen bir biçimde düzensizdi; yürütme ve izleme puan kazanımlarıyla ilişkiliydi (r = 0,42), oysa planlama ve duygusal güdülenme ölçek orta noktasının civarında durdu ve birkaç öğrenci düşük puanlar sonrası nedenleri analiz etmek yerine etkileşimi erteleme eğilimi gösterdi. Sistem döngünün performans evresine ulaştı, onu izleyen planlamaya değil.
- **Otomatik teşhisten üretilen alıştırmaya:** [[zhu-adaptive-teaching-assistance-genai-big-data-2026|Zhu, Luo ve Li (2026)]], ses-puan hizalamasını, hata nicelemeyi ve Yakınsak Politika Optimizasyonu katmanını müzik eğitimi için tek bir kapalı döngüde birleştirir; ritim hata sinyallerini (%91,2 duyarlılık, %98,4 özgüllük) üretilen alıştırma parçalarını yönlendiren ödüllere dönüştürür ve 120 lisans müzik bölümü öğrencisiyle 12 haftalık yarı-deneysel çalışmada sistem grubunu lehine anlamlı bir Grup × Zaman etkileşimi bildirir (beta = 0,52). Yazarlar bunu teknik fizibilite olarak çerçeveler ve pratik okuma değerlendirmeden çok sınıflandırmadır: %89,7’lik kesinlik, işaretlenen yaklaşık on ritim hatasından birinin yanlış alarm olduğu anlamına gelir ve çalışmanın uzman değerlendiricileri müzikal ifadeye desteği en zayıf alan olarak puanladı; dolayısıyla otomatik döngüler teknik alıştırmalara uyarken ifade yargısı öğretmenlerde kalır.
- **İskeleleme:** [[scaffolding]] ile biçimlendirici değerlendirme birlikte çalışır — YZ tam zamanında ipuçları ve istek metinleri sunabilir, oysa sıralı geri bildirim araştırması aşırı yapılandırmaya karşı uyarır.

- **Rubrik niteliği, model seçiminden daha çok otomatik puanlama uyumunu hareket ettirir.** 1.200 Linux/bash sınav yanıtı üzerinde, [[automated-grading-linux-bash-examinations-large-language-models|Alonso-Carracedo ve ark. (2026)]] tam bir rubrik ile bir başvuru cevabı eklemenin her modeli yükselttiğini buldu (en iyi: Gemini 3.0 Pro, insan tavanının 0,949’una karşılık ICC(3,1) = 0,888), oysa uyum, sorunun bilişsel düzeyi arttıkça tek düze düştü.

- **YZ tarafından üretilen rubrikler insan puanlamasına yalnızca bir pay içinde eşleşti.** Dört YZ rubriği, 308 programlama yanıtı boyunca insan taban çizgisiyle ±5 puan içinde havuzlanmış eşdeğerliği karşıladı (korelasyonlar 0,948–0,973), ama beş rubrik–ödev hücresi bunu aştı ve GPT-4.1/4o yapılandırılmış rubriklerde serbest biçimliye göre (−0,66’ya karşılık −4,46) sistematik olarak daha sert puanladı ([[harmogen-ai-assessment-rubric-generation|Mendonça ve ark., 2026]]).
- **Geçerlilik ve nitelik:** YZ tarafından üretilen biçimlendirici maddelerin ve geri bildirimin [[ai-feedback-quality|niteliği]] ile [[assessment-validity|geçerliliği]] değerlendirilmelidir; [[ai-ed-evaluation]] yöntemleri sunar.

- **YZ puanlama bir geçerlilik tehdidi ekler.** Bir YZ puanlayıcı, bilimsel akıl yürütme yerine dil akıcılığı gibi yapıyla ilgili olmayan nitelikleri ödüllendirebileceğinden, ~100 liderin bir araya geldiği toplantıdan damıtılan bir Stanford/ETS beyaz kitabı, değerlendirmenin tek seferlik çıktıları onaylamak yerine sürekli, bağlam açısından zengin kanıt biriktirmesi gerektiğini savunur ([[responsible-assessment-ai-era-stanford-2026|McGee ve ark. (2026)]]).

- **Kırılgan görevi koru ve bir ikiz ekle.** [[roe-assessment-twins-2026|Roe, Perkins ve Giray (2026)]], evde yazılan kompozisyonların ve araştırma raporlarının önemli biçimlendirici değer taşıdığını ve öğrenme için korunması gerektiğini; güvenilir toplayıcı kanıt sağlayan aynı çıktıları değerlendiren ikinci bir görevle eşlenmesi gerektiğini savunur.

## Risk: Gözetim olarak değerlendirme

Biçimlendirici değerlendirme sistemleri, öğrenme destek araçlarından davranış izleme altyapısına kayabilir. Uyarlanabilir özel öğretmenliği olanaklı kılan aynı veri akışları, [[governance]] zayıfsa cezalandırıcı izlemeyi de olanaklı kılar. Bu, [[privacy]] ve [[well-being|öğrenci esenliğiyle]] bağlantılıdır ve öğrenmeyi gözetlemek yerine destekleyen biçimlendirici sistemler lehinde delil sunar.

## Eğitimde YZ için çıkarımlar

- **Madde türünü YZ güvenilirliğine uydur:** YZ’yi doğrulanabilir boyutlar için kullanın (kavram uyumu, doğruluk) ve öğretimsel boyutlar için insan yargısını koruyun (çeldirici niteliği, geri bildirim derinliği).
- **Yalnızca sunum için değil, hayata geçirme için tasarla:** YZ geri bildirimi yalnızca öğrenciler onu seçip değerlendirdiğinde ve uyguladığında yardımcı olur — hayata geçirmeyi destekleyen iş akışları yapılandırın.
- **Geri bildirim tasarımı hacimden daha önemlidir:** sıralı veya aşırı yapılandırılmış geri bildirim ters teyebilir; öğrencinin anlam çıkarmasını ve özerkliğini destekleyen geri bildirimi önceliklendirin.
- **Eğitimcileri döngüde tutun:** müfredata dayalı, eğitimci-döngüde sistemler alaka düzeyini artırır ve gürültüyü azaltır.
- **Niteliği ve geçerliliği değerlendirin:** YZ tarafından üretilen maddeleri ve geri bildirimi üretim hızının yanında nitelik, geçerlilik ve [[equity-in-ai-education|eşitlik]] açısından değerlendirin.
- **Biçimlendirici değerlendirmeyi bir felsefe olarak ele alın, bir araç takımı değil.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais ve Galy (2026)]], daha geniş yükseköğretim literatürünü, biçimlendirici, süregelen ve bireyselleştirilmiş [[feedback]] geri bildirimini sade bir araç takımından çok kuşatan bir felsefe olarak konumlandıran bir “öğrenme için değerlendirme” paradigmasına sentezler; biçimlendirici ile [[summative-assessment|toplayıcı]] amaçları dengeler ve [[agency|öğrenci etkinliğini]], öz-düzenlemeyi ve [[metacognition|üstbilişsel]] beceriyi öne çıkarır. Bu felsefenin hayata geçirilebileceği birbirini güçlendiren beş uygulamayı belirlerler ([[authentic-assessment|özgün değerlendirme]], öz- ve [[peer-assessment]], yeniden değerlendirme, [[mastery-learning|standart temelli puanlama]], puanlamayı kaldırma), bunların yükseköğretim alanlarında hâlâ oldukça eşitsiz biçimde benimsendiğini not ederek.
- **Sürekli değerlendirme, biçimlendirici kaydın kendisini yeniden çerçeveler.** AIM-CAI başvuru mimarisi (bir uygulama değil, konum belirten bir çalışma), temel kanıt tabanı olarak bölümsel değerlendirmeyi altı katmanlı bir altyapıyla değiştirmeyi önerir: platformlar arasında kanıt üretimi, kaynak bağlamını koruyan serileştirme, YZ aracılı anlamsal çeviri, psikometrik yorumlama, boyunsal yetkinlik profilleri ve federasyon yönetişimi. Değişim tablosu değişikliği şöyle söyler: ödev başına geri bildirim, danışmanlığı ve yansırmayı destekleyen boyunsal geri bildirime dönüşür; notlar gelişen yetkinlik profillerine dönüşür; sertifikalar şeffaf gelişim kayıtlarına dönüşür. Yönetişim katmanı çalışmanın ısrar ettiği noktadır — yedi adlandırılmış gerilim (birlikte çalışabilirlik karşı yerel özerklik, gizlilik karşı yararlılık, öğrenen etkinliği karşı kestirimci otomasyon, gözetim karşı destek vb.) her biri risklere ve yanıtlara eşlenmiştir ve yönetişimsiz sürekli çıkarımın baskın kültürel normları ayrıcalıklı kıldığına dair uyarıyla birlikte. Yenilik iddiası bütünleştiricidir: bileşenler vardır; katkı mimari ve yönetişim haritasıdır. ([[mcnamara-aim-cai-continuous-assessment-2026]])

## Bağlı kavramlar

- [[pedagogical-patterns]] — YZ geri bildirimin bir bölümünü sağladığında biçimlendirici değerlendirmenin aldığı sıralı biçimler
- [[assessment]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[automated-question-generation]]
- [[assessment-validity]]
- [[feedback]]
- [[ai-feedback-quality]]
- [[feedback-literacy]]
- [[self-assessment]]
- [[learning-analytics]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[human-in-the-loop-ai]]
- [[intelligent-tutoring]]
- [[ai-ed-evaluation]]
- [[summative-assessment]] — Toplayıcı değerlendirme: YZ dirençli biçimler (sözlü, gözetimli, kapalı kitap sınavlar)

## Bağlı makaleler

- [[llm-multi-agent-conversation-assessment-2025]] — Değerlendiricisinin orta kategoriye doğru yalpaladığı, konuşmaya dayalı değerlendirme için dört aracılı mimari (Hou ve ark. 2025)
- [[causal-modeling-competency-assessment-2026]] — Öğrenci Yetkinlik Değerlendirmesi için Destek Müdahalelerinin Nedensel Modellemesi
- [[nicola-richmond-programwide-assessment-genai-2025]] — GenAI çağında değerlendirmeyi yeniden tasarlamaya program genelinde yaklaşımlar
- [[ai-feedback-enactment-workflow-2026]] — YZ tarafından üretilen geri bildirimi önemli kılmak: sunumdan hayata geçirmeye
- [[care-full-feedback-genai]] — GenAI çağında geri bildirimin özenli ustalığı
- [[feedback-futures-genai]] — Geri bildirim gelecekleri: insan ve GenAI kapasitelerinin sınırlarının ötesinde
- [[sequenced-ai-feedback-learning]] — Sıralı YZ geri bildiriminin etkisi ve yolları
- [[learner-centered-feedback-ai]] — Geri bildirimi YZ ile öğrenen merkezli hale getirmek
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — Otomatik puanlamadan öğrenme teşhisine: İngilizce yazımında YZ destekli biçimlendirici değerlendirmenin bir mekanizma çalışması
- [[ai-internal-feedback-evaluative-judgments]] — YZ destekli içsel geri bildirimle değerlendirici yargı geliştirmek
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: insan-döngüde istek metniyle biçimlendirici değerlendirme puanlaması
- [[automated-formative-assessments-a-level-sciences]] — Yüksek sıklıklı otomatik biçimlendirici değerlendirme
- [[ai-generated-feedback-higher-ed]] — Yükseköğretimde YZ tarafından üretilen geri bildirim
- [[ai-learning-tools-engineering-education-needs]] — LearnLens: müfredata dayalı YZ geri bildirimi
- [[genai-teacher-feedback-comparison]] — GenAI ile öğretmen geri bildiriminin karşılaştırılması
- [[chatgpt-feedback-engagement-genai]] — ChatGPT geri bildirimi ve etkileşim
- [[code-gen]] — CODE-GEN: doğrulanmış çoktan seçmeli soru üretimi
- [[responsible-assessment-ai-era-stanford-2026]] — YZ çağında sorumlu değerlendirme
- [[zhan-boud-du-authentic-assessment-scoping-review-2025]] — Özgün değerlendirme için tasarım
- [[automated-grading-linux-bash-examinations-large-language-models]] — Linux/bash sınavlarının otomatik puanlanması
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — ChatGPT güçlendirmeli biçimlendirici değerlendirmede öğretim elemanı ve YZ rolleri
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Sözlü sınavları özgün, YZ dirençli değerlendirme olarak yeniden düşünmek
- [[roe-assessment-twins-2026]] — GenAI çağında değerlendirme geçerliliğini güçlendirmek için değerlendirme ikizleri (Roe, Perkins ve Giray 2026)
- [[harmogen-ai-assessment-rubric-generation]] — HARMOGEN-R: YZ değerlendirme rubriği üretimi
- [[ai-assisted-instructor-supervised-grading-feedback]] — YZ destekli, öğretim elemanı gözetimli puanlama ve geri bildirim
- [[adaptive-scaffolding-cognitive-engagement-its]] — Bir ITS’de uyarlanabilir ICAP iskelelemesi (BKT karşı DRL)
- [[yasar-llms-iterative-pedagogical-design-2026]] — Yinelemeli pedagojik tasarım aracıları olarak LLM’ler
- [[auto-marking-short-answer-science-2026]]
- [[gpt4-feedback-student-activation-2026]]
- [[yin-arthur-ai-teaching-assistant-engineering-econ-2026]]
- [[mesny-innovative-assessment-grading-management-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-feedback-adaptivity-children-plans-2026]] — Uyarlanabilirlik geri bildirimi etkili kılar: çocukların planlarına ilişkin YZ tarafından üretilen geri bildirimden kanıtlar
- [[chen-automated-scoring-interpreting-self-regulated-learning-2026]] — Otomatik puanlama, yorumlama performansı ve öz-düzenlemeli öğrenme (Chen ve Liu 2026)
- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — YZ destekli biçimlendirici değerlendirmede öğretmenlerin teşhis becerileri: teşhisten meta teşhise
- [[mendonca-llm-feedback-perceived-usefulness-programming-2026]] — Üç eğitim düzeyinde programlamada LLM tarafından üretilen geri bildirime ilişkin algılanan yararlılık ve kullanım niyeti
- [[zhu-adaptive-teaching-assistance-genai-big-data-2026]] — Müzik eğitiminde üretici YZ ile büyük veri analitiğini birleştiren uyarlanabilir öğretim desteği
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Veri Bilimi Derslerinde Öğrencilerin LLM Kullanımı ve YZ Tarafından Üretilen Soru Zorluğunun Sınırları
- [[mcnamara-aim-cai-continuous-assessment-2026]] — YZ Aracılı Sürekli Değerlendirme Altyapısı (AIM-CAI): Öğrenme Kanıtlarını Bağlamlar ve Zaman Arasında Bağlamak (McNamara ve Hasnine 2026)

