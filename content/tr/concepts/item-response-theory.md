---
title: Madde Tepki Kuramı
created: "2026-10-14T21:44:00-04:00"
type: concept
technology: [knowledge-tracing, student-modeling]
assessment: [assessment-validity, educational-measurement, psychometrically-aware-ai]
confidence: medium
translation_of: concepts/item-response-theory
source_updated: "2026-10-26T07:30:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Madde tepki kuramı (MTK)** — bir öğrenenin yeteneği ile her maddeyi doğru yanıtlama olasılığı arasındaki ilişkiyi modelleyerek, gizil yetenekleri madde yanıtlarından tahmin eden psikometrik model ailesi. MTK, madde güçlüğünü ve ayırt ediciliğini modelleyerek ölçüm isabetini ve uyarlanabilir testi mümkün kılar. YZ çağında, MTK, [[llm-item-difficulty-prediction]] ve [[llm-psychometric-calibration-cdp]]’de [[llm|LLM]]’lerle buluşur: YZ madde güçlüğünü tahmin eder ve kalibre eder, ölçüm isabetini potansiyel olarak iyileştirir ve [[adaptive-learning]]’i besler.

## Dikkate Alınması Gereken Sorular

- Madde tepki kuramı, ham test puanını ölçüt olarak ele almak yerine yetenek ve madde güçlüğünü yanıt örüntülerinden birlikte tahmin edilmiş olarak ele alır. Aynı sayıda doğru yapan iki öğrenci yetenekte fiilen nasıl farklı olabilir?
- MTK, öğrenenleri ortak bir ölçekte karşılaştırmanıza ve kişi başına isabeti tahmin etmenize izin verir. Bir maddenin güçlüğünü ve ayırt ediciliğini bilmek, bir öğrencinin onu doğru yapıp yapmadığını bilmekten neden daha önemli olabilir?
- Bir çalışma, çoktan seçmeli testlerde insan ile YZ tarafından üretilen yanıtları ayırt etmek için MTK kişi-uygunluk istatistiklerini kullandı — YZ yanıtlarını 'sapkın' olarak işaretleyerek. Öğrenmeyi değerlendiren aynı ölçüm makinesi akademik dürüstlüğü nasıl denetleyebilir?
- [[research-methods-aied|Araştırmacılar]], YZ tarafından üretilen sınav sorularının uzman tarafından yazılanlarla güçlük ve ayırt edicilikte eşleştiğini doğrulamak için MTK’yi kullanır. Bir YZ iyi 'görünen' bir madde yazarsa, uydurulmuş MTK parametrelerine karşı ampirik kalibrasyon neden hâlâ gereklidir?
- YZ madde güçlüğünü tahmin edip kalibre ettikçe, bir modelin güçlük tahmini gerçek öğrenci yanıt verisine karşı doğrulanmazsa neyin yanlış gidebileceği vardır?
- MTK, uyarlanabilir teste ve bilgi izlemeye bağlanır — sonraki ne sorulacağını seçmek için yanıtlarınızı kullanmak. Yeteneğinizi her yanıttan tahmin etmek, bir testin yalnızca daha uzun değil daha kısa ve daha isabetli olmasını nasıl mümkün kılar?

## Giriş

MTK, yeteneği (θ) ve madde parametrelerini (güçlük, ayırt edicilik, bazen tahmin) ham puanı ölçüt olarak ele almak yerine yanıt örüntülerinden birlikte tahmin edilmiş olarak ele alır. Bu, öğrenenleri ortak bir ölçekte karşılaştırmayı, maddeleri uyarlanabilir biçimde seçmeyi ve isabeti küresel olarak değil kişi başına tahmin etmeyi mümkün kılar.

### MTK araştırmada nasıl karşımıza çıkıyor

- **YZ tahminli güçlük:** [[llm-item-difficulty-prediction|LLM madde-güçlüğü tahmini]], madde güçlüğünü tahmin etmek için dil modellerini kullanır; bu, ampirik olarak uydurulmuş MTK parametrelerine karşı doğrulanmalıdır.
- **Psikometrik kalibrasyon:** [[llm-psychometric-calibration-cdp|LLM psikometrik kalibrasyonu]], model tabanlı değerlendirmeyi MTK tabanlı ölçümle hizalar; böylece YZ tarafından üretilen yanıtlar ölçüm özelliklerini korur.
- **Bilgi izleme ve öğrenci modelleme:** MTK, [[knowledge-tracing]] ve [[student-modeling]] ile yakından ilişkilidir — zaman içinde öğrenen bilgisini izleyen modeller — gözlemlenebilir yanıtlardan gözlemlenemez öğrenen durumlarını tahmin etme hedefini paylaşır.

- **LLM logitlerinden okunan MTK büyüklükleri.** [[huang-interpretable-knowledge-tracing-2026|Huang ve ark. (2026)]], öğrenci yeteneği θ = z^GOOD − z^BAD ve özel öğretmen turu güçlüğü d = z^HARD − z^EASY değerlerini sonraki-token logitlerinden çıkarır ve bunları 1PL Rasch öngörücüsünde birleştirerek diyalog tabanlı bilgi izlemeyi yorumlanabilir kılar (QATD2k üzerinde %64,29 doğruluk, 65,25 AUC).
- **Sorularla aynı ölçekte diyalog alt görevleri.** [[unified-irt-framework-question-tutoring-dialogue-2026|Duan ve ark. (2026)]], eğitmenlerin diyalog ortasında sorduğu alt görevleri bağımsız sorulara dönüştürür ve bunları, güçlüğü soru metninden gelen tek bir ortak 1PL MTK ölçeğine yerleştirir; güçlük sıralaması için denetim olarak mücadeleden sonra iskele kurma ve titizliğe zorlama hamlelerini kullanır.

- **Standartlarla hizalanmış bir [[benchmark]] doygunluğa ulaşabilir.** NGSS ile hizalanmış [[k-12|ortaokul]] ve lise fen setlerinde açık ağırlıklı modellerin çoğu %90’ın üzerinde puan aldı ve klasik madde ölçütlerini zayıf bıraktı: güçlük yüksek, ayırt edicilik düşük, %90 üzerindeki hücreler önemsiz; bu nedenle yazarlar zayıf maddeleri artık işlenebilir hale gelmiş bir alandan ayıramıyor ([[llm-benchmark-secondary-science-topics-2026|Schroeder ve ark. (2026)]]).
- **Bayesçi hiyerarşik saha doğrulaması:** [[assessing-quality-ai-generated-exams-field-2025|YZ Tarafından Üretilen Sınavları Değerlendirmek]], (1.686 öğrenciyi ortak bir θ ölçeğine yerleştirmek için ön-test çapa maddeleriyle) Bayesçi hiyerarşik bir 2PL MTK modeli kullanarak, YZ tarafından üretilen soruların uzman tarafından yazılmış standart sınav maddeleriyle güçlük ve ayırt edicilikte eşleştiğini gösterir — [[automated-question-generation]] için MTK’nin doğrulama omurgası olarak geniş ölçekli bir gösterimi.
- **Test bilgisi isabeti yerelleştirir.** 2PL modeliyle doğrulanmış 20 maddelik bir GenAI okuryazarlığı testinin (RMSEA = 0,03, CFI = 0,97) bilgi işlevi θ = −0,8’de zirve yapar; böylece ölçek boyunca tek düze olmaktan çok düşük-ilâ orta okuryazarlıklı öğrenenler için en isabetlidir ([[jin-glat-genai-literacy-assessment|Jin ve ark. (2025)]]).
- **İnsan yanıtlarını GenAI yanıtlarından kişi-uygunluk istatistikleriyle ayırmak:** [[irt-human-genai-mcq-responses|Strugatski ve Alexandron (2026)]], çoktan seçmeli değerlendirmelerde insan ile [[generative-ai]] yanıtlarını ayırt etmek için MTK içinde kişi-uygunluk istatistiklerini (PFS) uygular. PFS, GenAI yanıtlarını iki özgün bağlamda (bir [[chemistry-education|kimya]] testi ve bir ulusal sınav) 'sapkın' yanıtlayanlar olarak işaretler, farklı [[conversational-ai|sohbet robotu]]ların farklı yanıt örüntüleri ürettiğini ('zekâ’ların heterojen bir grubu) gösterir ve yeni GenAI sürümlerinin daha insansı hale geldiğini ortaya çıkarır — yüksek riskli testlerde MTK’yi [[academic-integrity|dürüstlük]] taraması için sağlam bir çerçeve olarak konumlandırır.
- **Aynı maddeler bir LLM için aynı gizil yapıyı ölçmeyebilir.** [[assessment-latent-structure-human-llm-2026|Strugatski, Zeinfeld ve Alexandron (2026)]], insan ve LLM faktör yapılarını iki enstrüman boyunca keşfedici faktör analizi ve uygunluk eşleştirmeyle karşılaştırdı; LLM–insan benzerliği güvenilir biçimde insan–insan temelinin altında kaldı; böylece insanlar üzerinde uydurulmuş MTK parametreleri otomatik olarak aktarılmaz.
- **Rasch MTK parametrelerine karşı LLM güçlük tahmini:** [[razavi-powers-item-difficulty-llm-2026|Razavi ve Powers (2026)]], GPT-4o’nun Rasch MTK modeli altında kalibre edilmiş K-5 matematik ve okuma değerlendirme maddelerinin (N = 5170) güçlüğünü tahmin edip edemediğini değerlendirir. Sıfır-atış doğrudan tahmin yaklaşımı, gerçek Rasch güçlükleriyle orta-kuvvetli ilişkilendi (r = 0,83 matematik, r = 0,81 okuma) ancak sınıflar boyunca düzensizdi ve K ile 1. sınıflar için sıklıkla sınıf-ortalamalı kukla regresörden daha iyi değildi, muhtemelen alt sınıf madde güçlüklerindeki aralık kısıtlamasından kaynaklı. Özellik tabanlı bir strateji — ağaç tabanlı modellere beslenen LLM-çıkarımlı bilişsel ve dilbilimsel özellikler — doğrudan tahmiği geride bıraktı (r = 0,87’ye kadar korelasyonlar), en iyi öngörücüler sınıf düzeyi ve sözcük sayısı olarak. Çalışma, LLM güçlük tahminlerinin ampirik olarak uydurulmuş MTK parametrelerine karşı doğrulanması gerektiğini ve bütüncü sıfır-atış yargısının yetersiz kaldığı yerde yapılandırılmış özellik çıkarımının tahmini keskinleştirebileceğinin altını çizer.
- **Tahmin etmek yerine güçlüğü açıklamak.** [[explaining-question-difficulty-natural-language-2026|Cui ve ark. (2026)]], GSM8K (1.319 soru), BBH-structured (1.396) ve WinoGrande (1.267) için LLM yanıt kayıtlarına 1PL Rasch modeli uydurdu; GSM8K ve WinoGrande için 5.000 model, BBH-structured için 3.811. Ardından bir LLM’den bir maddenin diğerinden neden daha zor olduğuna dair doğal dil hipotezleri önermesini istediler ve bunları ayırılmış sorularda L1-düzenlileştirilmiş regresyonla seçtiler. Görülmemiş sorularda tek başına kullanıldığında seçilen hipotezler GSM8K’da R² = 0,373, BBH-structured’da 0,580 ve WinoGrande’da 0,090’a ulaştı; karşılaştırılan yöntemlerin en iyisi GSM8K ve WinoGrande’da, ince ayarlı bir RoBERTa-base’in 0,646’ya ulaştığı BBH-structured’da ise ikinci en iyi. Ek özellik olarak GSM8K’da RoBERTa-base’e +0,11 (0,362’den 0,468’e) ve iki donmuş gömme modeline +0,19 ve +0,18 eklerler. Nedensel bir sonda, veri kümesi başına 50 test sorusunu bir hipoteze doğru veya hipotezden uzağa düzenler: güçlük-artışı düzenlemeleri GSM8K ve BBH-structured’da ortalama doğruluğu 15,27 ve 23,88 yüzde puanı düşürür, güçlük-azalışı düzenlemeleri ise onu 32,18 ve 28,52 yükseltir. Burada güçlük model yanıtlarından tahmin edilir, insan sınav girenlerinden değil; böylece bu bir LLM-değerlendirme ve psikometri sonucudur.
- **Yanıtlayıcıları simüle etmek, uyarana regresyonun kurtaramadığını kurtarabilir:** yetenek düzeyleri boyunca öğrencilerin seçenek seçim olasılıklarını yeniden üreten ince ayarlı çok kipelli bir LLM, ayırılmış güçlüğü r = 0,85’te yaklaşık olarak tahmin etti; MathBERT (0,68) ve MetaMath (0,75) regresyon temellerinin üzerinde, tahmin parametresi c’yi 0,48’de kurtardı, oysa ayırt edicilik a zayıf kaldı (0,31) ([[multimodal-item-parameter-estimation-2026|Ormerod & Kim, 2026]]).
- **MTK parametreleri için konuşlandırma öncesi bir elek olarak madde yazım kusurları:** [[item-writing-flaws-irt-difficulty-2026|Schmucker ve Moore (2026)]], Madde Yazım Kusuru (IWF) rubriklerinin — öğrenci verisi gerektirmeyen, alan-genel, metinsel bir değerlendirme — ampirik olarak tahmin edilen MTK güçlüğünü ve ayırt ediciliğini öngörüp öngörmediğini test eder. [[stem-education|STEM]]’de (fizik bilimleri, [[math-education|matematik]], yaşam/dünya bilimleri) **7.126 çoktan seçmeli soruda** otomatik, LLM-destekli kodlama kullanarak IWF rubriklerinin ampirik MTK parametreleri için öngörücü geçerlilik taşıdığını gösterdiler; kaynak-yoğun pilot testini tamamlayan veya kısmen onun yerine geçen ölçeklenebilir bir konuşlandırma öncesi elek sunarak.
- **Seçici YZ notlandırma için MTK tabanlı risk süzme:** [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros & Kortemeyer]], YZ ile notlandırılmış elle yazılmış kimya verisine iki parametreli lojistik bir MTK modeli uydurdu ve bir YZ yargısını kabul etmenin "riskini" YZ’nin normalleştirilmiş puanı ile kredinin MTK-beklenen olasılığı arasındaki mutlak sapma olarak tanımlar (Risk = |s−p|); yalnızca bu Bayesçi beklentinin seçilen bir toleransı içindeki maddeleri kabul etmek, "şaşırtıcı" YZ puanlarını [[human-in-the-loop-ai|insan incelemesine]] işaretler, MTK’yi saf bir puan toplama aracından [[automated-assessment]] için operasyonel bir kabul/erteleme mekanizmasına dönüştürür — insan notlandırmayla daha basit kısmi kredi eşiklerine benzer bir hizalamayı, ancak daha düşük insan iş yüküyle başaran biri; her ne kadar mantığı teknik olmayan kitleler için daha az şeffaf olsa da.
- **Teşhis modeli içinde bir kalibrasyon katmanı olarak MTK:** PLCD, egzersiz düzeyi yanıtlar üzerine MTK esinli bir tahmin-ve-kayma başı ekler; doğruluğu değil olasılık kalitesini iyileştirir — XES3G5M üzerinde beklenen kalibrasyon hatası 0,071’den 0,037’ye düşer — MTK’yi yalnızca bir puanlama modeli değil, yanıt gürültüsü için iç bir düzeltme yapar ([[process-grounded-language-cognitive-diagnosis-2026|Liu ve ark. (2026)]]).

- **Sürekli evrilen havuzlar için böl-ve-fethet kalibrasyonu:** [[bayesian-consensus-irt-item-banks-2026|Jewsbury ve ark. (2026)]], MTK yeniden kalibrasyonunu bir uyum problemi olarak değil, bir ölçekleme problemi olarak ele alır. YZ tabanlı madde üretimi ve özellik tabanlı parametre tahmini bir havuzu daha büyük, daha seyrek ve sürekli güncellenir hale getirdiğinde, tam yanıt geçmişini her güncellemede yeniden uydurmak giderek artan biçimde pahalılaşır; onların *mutabakat kalibrasyonu* bunun yerine her dönemi bir kez kalibre eder ve yeni bir dönemi hâlihazırda hesaplanmış önceki sonrası dağılımlarla birleştirir. İki özellik onu mevcut MTK böl-ve-fethet çalışmalarından ayırır: dönemler gizil bir metrik paylaşmaz, böylece her biri gürçül bir Haebara ölçütüyle bir başvuru metriğine bağlanır *her sonrası dağılım çekimi için ayrı olarak* çözülür (bağlama hatasını bağlanmış sonrası dağılımlara taşıyarak), ve her dönem tahmini bir öncül katkıda bulunan kendi hiyerarşik uyumudur, böylece sonrası dağılımların naif çarpımının bu öncülü bölmesi ve bir mutabakat öncülünü geri getirmesi gerekir — öncüller sabitlendiğinde Bayesçi komite makinesi kuralına indirger. Duolingo English Test’in dört üç aylık dönemi üzerinde havuzlanmış bir kıyaslamaya karşı, sonrası ortalamalar r = .998 (güçlük) ve .991 (log-ayırt edicilik) ile anlaştı, sonrası SD’leri r = .970 ve .920 ile kaldı; en düşük dönem başına maruziyet üçlüsünde en büyük olan hafif az-dağılım bıraktı (SD oranı 0,91–0,98). Bu, YZ tarafından üretilen madde havuzlarının yarattığı sunum koşulları için yeniden mühendisliklemiş MTK kalibrasyonudur.
- **MTK’nin enstrüman doğrulamasını ne kadar nadiren çapaladığı:** öğretmen YZ okuryazarlığı enstrümanlarının bir değerlendirmesi, MTK’nin kullanımını değil yokluğunu nicelemektedir. [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore ve Maat (2026)]], 33 enstrümanı COSMIN ve Terwee ve ark.’dan (2007) uyarlanmış bir karar matrisine karşı notladı; yapısal geçerlilik güçlüydü, 24’ü (%72,7) CFA, PLS-SEM veya MTK modellemesiyle A derecesindeydi, ancak hiçbiri MTK veya Rasch’ı birincil kanıt olarak kullanmadı ve yalnızca beş enstrüman (%15,2) ölçüm değişmezliği veya madde işlevi farklılığı kanıtı bildirdi. Yazarlar, doğrulanmış yeteneği bildirilen özgüvenden ayırmak için MTK ve performans görevlerini öz-değerlendirmenin yanında savunur.
- **İlişkisel MTK’ye nedensel bir alternatif.** [[causal-modeling-competency-assessment-2026|Mangili ve ark. (2026)]], MTK’nin ve Bayesçi ağ öğrenen modellerinin müdahaleleri veya karşı-olgu durumlarını ifade edemediğini savunur ve bunun yerine uzmanlardan yapısal denklemler elde eder; 109 öğrencili uyarlanabilir bir test pilinde elde edilen model biraz daha az öngörücüydü (−287’ye karşılık −277 test log-olabilirlikği) ancak yardım hakkında karşı-olgu sorgularını destekledi.

### Bağlantılar

MTK, [[educational-measurement]] ve [[assessment-validity]]’nin temelidir; [[adaptive-learning]]’i (uyarlanabilir madde seçimi) ve [[student-modeling]]’i destekler ve [[psychometrically-aware-ai]]’ye (ölçüm kuramıyla hizalı YZ değerlendirmesi) ve [[knowledge-tracing]]’ye bağlanır. Programlama değerlendirmesi için [[llm-difficulty-calibration-programming-exams-2026|LLM güçlük kalibrasyonunda]] yer alır.

## Yaygın yanlış anlamalar

- **“MTK geleneksel test uygulaması gerektirir.”** Yetenek ve güçlük **sonraki-token logitlerinden** kurtarılabilir: **öğrenci yeteneği θ = z^GOOD − z^BAD** ve **öğretmen turu güçlüğü d = z^HARD − z^EASY** değerlerinin çıkarılıp 1PL Rasch öngörücüsünde birleştirilmesi, diyalog tabanlı bilgi izlemeyi MTK terimleriyle yorumlanabilir kılar. Psikometrik çerçeve yalnızca madde yanıtlarına değil, etkileşim verilerine de uygulanır.
- **“Çoğu modelin geçtiği bir kıyaslama iyi bir kıyaslamadır.”** Standartlarla hizalanmış bir kıyaslama **doygunluğa** ulaşabilir: NGSS ile hizalanmış ortaokul ve lise fen setlerinde **açık ağırlıklı modellerin çoğu %90’ın üzerinde puan aldı** ve klasik madde ölçütlerini zayıf bıraktı. Doygunluk, modellerin mükemmel olduğu anlamına gelmez; maddelerin artık ayırt edici olmadığı anlamına gelir.
- **“Madde güçlüğü maddenin içkin bir özelliğidir.”** Veri kümesi başına **50 test sorusunu** bir hipoteze doğru ya da ondan uzağa düzenleyen nedensel bir sonda, **güçlük-artışı düzenlemelerin ortalama doğruluğu GSM8K ve BBH-structured’da 15,27 ve 23,88 yüzde puanı düşürdüğünü** buldu. Güçlük, madde ile model arasındaki bir ilişkidir ve madde değiştiğinde o da değişir.
- **“MTK yalnızca öğrenenleri puanlamak içindir.”** [[assessing-quality-ai-generated-exams-field-2025|YZ Tarafından Üretilen Sınavları Değerlendirmek]], **1.686 öğrenciyi yerleştirmek için ön-test çapa maddeleriyle Bayesçi hiyerarşik bir 2PL modeli** kullanır; bu, öğrenci için puanlama değil, değerlendirmenin kendisi için kalite güvencesidir.

## Bağlı kavramlar

- [[educational-measurement]]
- [[assessment-validity]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[psychometrically-aware-ai]]
- [[adaptive-learning]]
- [[automated-assessment]]
- [[intelligent-tutoring]]

## Bağlı makaleler


- [[unified-irt-framework-question-tutoring-dialogue-2026]] — Sorular ve mentorluk diyalogları için birleşik bir yanıt çerçevesi
- [[explaining-question-difficulty-natural-language-2026]] — MTK ve nedensel düzenlemelerle LLM soru güçlüğünü doğal dilde açıklamak (Cui ve ark. 2026)
- [[llm-benchmark-secondary-science-topics-2026]] — Standartlarla hizalanmış bir kıyaslama doygunluğa ulaşabilir
- [[item-writing-flaws-irt-difficulty-2026]] — Impact of item-writing flaws on IRT difficulty and discrimination (Schmucker & Moore 2026)
- [[causal-modeling-competency-assessment-2026]] — Causal Modeling of Support Interventions for Student Competency Assessment
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Large-scale IRT field validation of AI-generated exams
- [[jin-glat-genai-literacy-assessment]] — GLAT uses IRT/2PL validation (Jin et al. 2025)
- [[llm-item-difficulty-prediction]] — LLM prediction of item difficulty
- [[llm-psychometric-calibration-cdp]] — Aligning LLM assessment with psychometric calibration
- [[llm-difficulty-calibration-programming-exams-2026]] — LLM difficulty calibration in programming exams
- [[multimodal-item-parameter-estimation-2026]] — Multimodal item-parameter estimation
- [[huang-interpretable-knowledge-tracing-2026]] — Interpretable knowledge tracing
- [[irt-human-genai-mcq-responses]] — Using IRT to separate human and GenAI MCQ responses
- [[razavi-powers-item-difficulty-llm-2026]] — Estimating item difficulty using LLMs and tree-based ML
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[process-grounded-language-cognitive-diagnosis-2026]] — Beyond ID Embeddings: Process-Grounded Language Modeling for Cognitive Diagnosis
- [[bayesian-consensus-irt-item-banks-2026]] — Bayesian consensus calibration of a continuously evolving IRT item bank (Jewsbury et al. 2026)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Field audit showing IRT/Rasch rarely used as primary validation evidence in teacher AI literacy instruments
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
