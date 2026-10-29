---
title: "Büyük Dil Modelleri (LLM)"
created: "2026-10-14T22:05:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [ai-literacy]
technology: [generative-ai, intelligent-tutoring, prompt-engineering, rag]
assessment: [automated-assessment]
ethics: [hallucination-risk, pedagogical-safety]
confidence: high
translation_of: concepts/llm
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

> **Büyük Dil Modelleri (LLM)** — insana benzer metin üreten, modern [[ai-education|Eğitimde Yapay Zeka]] uygulamalarının çoğunu güçlendiren, engin metin derlemleri üzerinde eğitilmiş [[machine-learning|sinir ağı]] modelleri. LLM’ler, eğitimde üreten YZ tabanlı özel ders desteği, değerlendirme ve içerik üretiminin hesaplama omurgasıdır.

## Dikkate Alınması Gereken Sorular

- Bir YZ [[conversational-ai|sohbet robotu]] size yanıt verdiğinde ne "bildiğine" inanıyorsunuz? Sayfa LLM’leri doğrulanmış gerçekleri getirmekten çok olası metin üretmek üzere çerçeveler — bu ayrım, bir modelin açıklamalarına ne kadar güveneceğinizi nasıl değiştirir?
- LLM’ler modern YZ eğitim araçlarının arkasındaki motor olarak tanımlanır — özel ders desteği, notlandırma, içerik üretimi ve hatta öğrencilerin ne bildiğinin teşhisi. Bu kullanımlardan hangisini bir olasılıksal metin üreteci için en uygun, hangisini en az uygun buluyorsunuz ve neden?
- Sayfa, üç farklı LLM’nin aynı öğrenme analitiği girdisi için keskin biçimde ayrışan, her biri farklı demografik varsayımlar içeren destek planları ürettiğini bildirmektedir. Modeller danışman olarak birbirinin yerine geçemiyorsa, bir tanesini benimseyen bir kurum için bunun anlamı nedir?
- LLM çıktısı istek metinlerine ve ayarlara duyarlı olduğundan, iki kişi aynı modelden çok farklı sonuçlar alabilir. Bu durum — bir öğrenen veya tasarımcı olarak — istekleri nasıl ifade ettiğinizi ve tek bir çıktıya ne kadar güvendiğinizi nasıl etkilemelidir?
- Temel bir sınırlılık halüsinasyondur — makul görünen ancak temelsiz içerik. Özel ders veya notlandırma bağlamında, modelin bir şey uydurmadığına güvenmeniz için neyin gerekli olacağını ve onu gerçek bir öğrenciyi değerlendirmeye bırakmadan önce hangi güvenceleri talep edeceğinizi düşünün.

## Giriş

### AIED’in motoru olarak LLM’ler

LLM’ler, neredeyse her YZ eğitim uygulamasının temelini oluşturdukları için bilgi tabanında en çok atıf yapılan kavramdır (60+ makale):

- **Özel ders desteği:** [[intelligent-tutoring|YZ özel ders destekçileri]], diyalog, açıklama ve [[problem-solving]] rehberliği için LLM’leri kullanır. [[llm-training-and-fine-tuning|Eğitim ve ince ayar]], genel LLM’leri eğitimsel kullanıma uyarlar.
- **Değerlendirme:** [[automated-assessment|Notlandırma sistemleri]], [[automated-essay-scoring|kompozisyon notlandırma]] ve [[llm-item-difficulty-prediction|madde güçlüğü tahmini]] LLM yeteneklerinden yararlanır. [[razavi-powers-item-difficulty-llm-2026|Razavi ve Powers (2026)]], GPT-4o’nin K-5 matematik ve okuma maddelerinin güçlüğünü (N = 5170) Rasch IRT modeli altında kalibre edilmiş biçimde tahmin edebildiğini göstermiştir: sıfır atımlı puanlar gerçek güçlüklerle orta düzeyden güçlü düzeye korele olmuştur (r = 0,83 matematik, r = 0,81 okuma) ancak sınıf düzeyine göre değişmiştir; LLM’nin ağaç tabanlı modeller için bilişsel ve dilbilimsel özellikleri çıkardığı özellik temelli bir strateji ise r = 0,87’ye kadar korelasyona ulaşmıştır — yapılandırılmış özellik çıkarımının tek bir bütüncül LLM muhakemesini aşabileceğine ilişkin bir kanıt. Birleşik notlandırma edebiyatında, 42 ampirik çalışmanın (2023–2025) PRISMA yönergeli bir [[meta-analysis-systematic-review|sistematik derlemesi]], LLM’lerin ayrıntılı değerlendirme ölçekleriyle kısa, iyi yapılandırılmış görevlerde insan değerlendiricileriyle eşleştiğini, ancak karmaşık, açık uçlu veya öznel işlerde insan muhakemesini tam olarak yerine geçemediğini ve model sürümünün notlandırma kalitesinin baskın belirleyicisi olduğunu sonuçlandırmaktadır ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). Güvenilirlik ayrıca madde türüne göre keskin biçimde değişir: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat ve ark. (2026)]], ChatGPT-5’in eczacılık sınavının nesnel maddelerinde fakülteyle yakından eşleştiğini (CCC 0,935–1,000), kısa yanıtlı (CCC ≈0) ve kompozisyon (0,341–0,854) maddelerinde ise güvenilmez olduğunu ve bir değerlendirme ölçeği sunmanın uyumu tutarlı biçimde iyileştirmediğini bulmuştur.

- **Üretilen madde etiketleri yüzey biçimini izler, güçlüğü değil.** 378 maddelik bir denetimde, bir LLM’nin Kolay/Orta/Zor etiketlerinin kendi ortaklaşa üretimi Bloom düzeyiyle (ρ=0,90) ve gövde uzunluğuyla (15,9’dan 30,2 sözcüğe) aynı adımda yükseldiği, ancak 7.888 öğrenci yanıtı üzerinde ampirik madde güçlüğüyle yalnızca ρ=0,06 korele olduğu bulunmuştur; bu, üretim anındaki güçlük üst verisinin [[prior-knowledge|ön bilgi]] üzerindeki talep değil biçimlendirmeyi tanımladığına ilişkin kanıttır ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang (2026)]]).
- **Üretilen maddeler yine de uzman maddeleriyle eşleşebilir.** Üret→değerlendir→revize et döngüsündeki o3-mini 71 sınıf için sınavlar kurmuştur; Bayesçi hiyerarşik 2PL [[item-response-theory|IRT]] modeli altında YZ maddeleri uzman AP İstatistik maddelerinden daha kolay ancak daha ayırt edici (ᾱ = 1,3’e karşılık 1,2) ve daha bilgilendirici (I_max = 3,85’e karşılık 2,61) olmuştur ([[assessing-quality-ai-generated-exams-field-2025|Isley ve ark. (2025)]]).
- **Etiketleme kalitesi bir tasarım sonucudur, tek bir istek metnine özgü bir nitelik değildir.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado ve ark. (2026)]], beş modelli bir panele her söyleşi birimi hakkında insan tarafından okunabilir iddiaları değerlendirmesi için yönlendirmiş, doğrudan bir etiket yayınlamak yerine bu ikili muhakemeler üzerinde saydam bir sınıflandırıcı kullanmıştır (makro-F1 0,673, Cohen’ın κ’sı 0,688); bu, öncü bir modelin en iyi yayımlanmış doğrudan istek metni yaklaşımını (0,61 makro-F1) geçerken ince ayarlı bir RoBERTa-tabanı kodlayıcının gerisinde kalmıştır (0,76); modeller arası uyum bir eleme aracı olarak işlev görmüş, geçerlilik kanıtı olarak değil.
- **[[multimodal]] akıl yürüten LLM’ler notlandırıcı olarak:** çok kipli, akıl yürütme yeteneğine sahip bir LLM (GPT-o4-mini), 296 öğrencinin elle yazılmış genel [[chemistry-education|kimya]] sınavını değerlendirme ölçeği görüntülerine karşı sayfa sayfa notlandırdığında, tek çalıştırma toplam puanları yüksek düzeyde yeniden üretilebilir çıkmıştır (ICC(A,1) = 0,967; beş çalıştırmanın ortalaması alındığında 0,993) ve asistan toplamlarıyla güçlü biçimde uyum göstermiştir (R² = 0,91); oysa madde düzeyinde güvenilirlik keskin biçimde biçime bağlıdır — metin ve reaksiyon denklemi yanıtları iyi notlandırılırken çizim ve grafik çizimi raslantıdan kötü çıkmıştır (arka plan ızgaraları YZ görüsünü dağıtır). Bu, bir LLM notlandırıcının [[trust|güvenilirliğinin]] yalnızca ham model yeteneği değil yanıt biçimi ve görevin de işlevi olduğunu ve yüksek getirili kullanım için güven süzgeçleri yoluyla [[human-in-the-loop-ai|seçici erteleme]] gerektiğini göstermektedir ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **İçerik:** [[generative-ai|Üreten YZ]] içerik üretimi LLM’lere dayanır. [[automated-question-generation|Soru üretimi]] ve [[ai-generated-instructional-videos-computing-ed|video üretimi]] LLM kaynaklıdır.
- **Güvenlik:** [[pedagogical-safety]], [[hallucination-risk]] ve [[hazra-safetutors-pedagogical-safety-2026]] [[research-methods-aied|araştırması]], LLM’ye özgü riskleri incelemektedir.
- **Teşhis:** [[knowledge-tracing]] ve [[cognitive-diagnosis]], daha zengin [[student-modeling|öğrenci modellemesi]] için giderek artan biçimde LLM’leri bünyesine katmaktadır. Temellendirme hata teşhisi için çok büyük önem taşır: [[reddig-maclellan-personalized-feedback-llm-2026|Reddig, Arora & MacLellan (2025)]], GPT-4’e özel ders arayüzü yapısına ek olarak Bayesçi [[knowledge-tracing]] beceri tahminlerinin sağlanmasının çarpanlara ayırmada mantıksal hata tanımlamasını %40’tan %81’e yükselttiğini (genel hata teşhisi ~%87,8) göstermiştir; çok adımlı problemler ve birkaç hata içeren yanıtlar zayıf vakalar olarak kalmış ve uydurma "yaygın [[misconceptions|yanlış kanı]]" teşhisleri sürüp gitmiştir — bir LLM’nin teşhis değerinin, modelin kendisi kadar aldığı yapılandırılmış bağlamın ve [[student-modeling|öğrenen modeli]] sinyallerinin de işlevi olduğuna ilişkin kanıt.

- **Doğrulamanın üretimden ayrılması — ilişkili başarısızlık biçimleriyle.** [[eduguard-safe-rag-llm-tutor|Hossain ve ark. (2026)]], özel ders robotunun erişimini öğretim elemanının onayladığı ders materyaliyle sınırlar ve iddiaları mimarî olarak ayrı bir DeBERTa-v3-large-MNLI doğrulayıcısından geçirir; ancak her iki modelin de geniş web eğitimini paylaştıklarını ve ilişkili biçimlerde başarısız olabileceklerini, ayrıca doğrulayıcının bir kod izini çalıştırmadan denetleyemeyeceğini belirtir.
- **Değerlendirme model dönüşümü (2017–2024):** Kısa yanıtlı [[science-education|bilim]] sorularının otomatik notlandırmasına ilişkin Morley ve ark. kapsam derlemesi, alanın 2021’e kadar baskın olan daha küçük [[educational-nlp|BERT]] modellerini ince ayarlamaktan, kabaca 2022’den itibaren daha büyük LLM’leri (GPT-1/2/3.5/4) istek metniyle yönlendirmeye doğru hareketini izler — ince ayar yerine [[prompt-engineering]] yoluyla benimsenir — alanla zenginleştirilmiş modeller, değerlendirme ölçeğine duyarlı istek metni ve düşünce zinciri ise doğruluğu yükseltir. Yine de GPT modelleri standart derlemlerde BERT’e karşı nadiren kıyaslanmış, az sayıdaki otomatik notlandırıcı notlarını açıklayabilmiş ve [[bias-mitigation|önyargı]] seyrek incelenmiştir; bunlar LLM değerlendirmesine genel olarak uygulanan uyarılardır ([[auto-marking-short-answer-science-2026]]).

### Modele özgü araştırma

Bilgi tabanı hem genel amaçlı LLM’leri (GPT-4, Claude) hem de eğitime özgü uyarlamaları kapsar. [[cstutorbench-slm-tutors|Küçük dil modeli kıyasları]], özel ders desteği için SLM performansını karşılaştırır. [[browser-sized-agents-slm-webllm-tutor-2026|Suvernev ve ark. (2026)]], SLM’lerin belirleyici araçların yükünü taşıdığı araç geliştirilmiş planlayıcılar olarak konumlandırıldığında [[agentic-ai|ajan]] özel ders için mimari açından uygun olduğunu savunur — pedagojik denetim modelde değil, yükseltme politikasında bulunur. [[educational-llm-alignment|Eğitimsel uyum]] araştırması, LLM’leri pedagojik olarak uygun kılmanın nasıl mümkün olduğunu ele alır. Üç öncü model ailesini içeren bir sınıf çalışması — [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]] — ChatGPT, Gemini veya Claude’un tartışmacı yazımda işbirlikçi eleştiri eşi olarak hareket edebileceğini bulmuştur: bir dönem boyunca yinelemeli kompozisyonlarda öğrenciler argüman kalitesi, [[prompt-engineering|istek metni mühendisliği]] ve YZ geri bildirimine [[ai-feedback-quality|yanıt verme]] konusunda her birinde kabaca tam bir standart sapma gelişme göstermiştir (tümü p < .001) ve derin biçimde katılım göstermiştir (LLM iddialarının %87,8’ini çürüterek); bu durum genel amaçlı LLM’leri salt cevap üreteçleri değil uygulanabilir [[collaborative-learning|işbirlikçi öğrenme]] eşleri olarak konumlandırır.

Birbirini tamamlayan bir çalışma hattı, LLM’leri statik notlandırıcılardan [[pedagogy|pedagojik]] akıl yürütmenin taklitçilerine dönüştürür. [[yasar-llms-iterative-pedagogical-design-2026|Yaşar ve ark. (2026)]], anlamca keskin, yinelemeli biçimde birlikte incelenmiş bir değerlendirme ölçeğiyle iskelelenen GPT-4’ün, [[design-based-research|tasarıma dayalı öğrenmede]] insan [[evaluative-judgment|değerlendirici muhakemesini]] taklit edebileceğini göstermiştir: başlangıçtaki LLM–insan uyumu zayıftı (Cronbach’ın Alpha’sı = 0,393; Kappa −0,06 ile 0,18 arasında), ancak yinelemeli ölçek inceltmesi ortalama uyumu %54,75’ten %81,25’e yükseltmiş (son Alpha = 0,798, Kappa 0,40–0,55) ve insan ile LLM puan matrislerinin K-means kümelemesi yüksek düzeyde korele ağırlık merkezleri göstermiştir (r = 0,89). Çalışma, ölçeği insan pedagojik niyeti ile makine çıkarımı arasında aracılık eden bir arayüz olarak konumlandırır — kutudan çıkan LLM’lerin değerlendirici olarak birbirinin yerine geçemediğine ve değerlendirme davranışlarının kendilerine verilen ölçek ve istek metinleriyle şekillenen bir tasarım sonucu olduğuna ilişkin kanıt. Ham model yeteneği notlandırmayı da ayırt eder: on bir GenAI ve cümle gömme modelini 1,885 açık uçlu [[automated-assessment|yanıt]] üzerinde [[benchmark|kıyaslayan]] [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko & Drlik (2025)]], yalnızca GPTo1’in uzman insan notlandırıcılarla neredeyse kusursuz uyuma ulaştığını (Fleiss’in Kappa’sı 0,82) bulmuştur; Claude3 ve PaLM2 biraz geride kalmış, BERT gibi referansa hizalanmış modeller ise çok geride kalmıştır — açık uçlu değerlendirmede güvenilir sonuç için öncü modelin bağlama duyarlılığının önemli olduğunu gösterir. Model farklılıkları yüksek getirili indirgemeli kullanımlar için de önemlidir. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas ve ark. (2026)]], üç LLM’nin aynı [[learning-analytics|öğrenme analitiği]] girdisi için keskin biçimde ayrışan öğrenci destek reçeteleri ürettiğini ve her birinin oluşturduğu öğrenen profillerine farklı demografik öncüller yüklediğini göstermiştir — kutudan çıkan LLM’lerin buyurucu danışman olarak birbirinin yerine geçemediğine ilişkin kanıt. Benzer biçimde, [[olvet-genai-scoring-open-ended-medical-2026|Olvet ve ark. (2026)]], klinik öncesi dönem [[medical-education|tıbbi]] açık uçlu soruların GPT-4 notlandırmasının, fakülteyle önemli ile neredeyse kusursuz arasındaki değerlendirici uyuma (ağırlıklı kappa 0,94’e kadar) yalnızca üç tur yinelemeli ölçek inceltmesinden sonra ulaştığını, bütüncül ölçek maddesinde ise orta düzeye (κw = 0,54) düştüğünü bulmuştur — LLM notlandırma güvenilirliğinde ham yetenekten çok ölçek tasarımının belirleyici kaldığını pekiştirir. Modele özgü davranış, LLM’lerin kuşkucu kullanıcılara nasıl yanıt verdiğinde de görülür: bir algoritmik denetim, kuşkucu kullanıcıların başvurduğu [[ai-technologies|YZ sistemlerinin]] benimsemeyi teşvik etmeye yatkın olup olmadığını sınamak için on öncü LLM’ye her birine kırsal Montana’lı bir [[k-12]] YZ kuşkucusu kişiliğiyle 500 kez sorgu yöneltmiştir. On taneden sekizi kullanıcının kaygılarını kabul ettikten sonra sözü YZ ile [[student-engagement|bağlılık]] çerçevelerine çevirmiştir; bileşik puanlar 3,85 (Claude Sonnet) ile 7,52 (Gemini 3.1 Pro Preview) arasında uzanmış ve model aileleri arası bir YZ notlandırıcı paneli Cohen’ın κ’sında ≥ 0,70’i geçmiştir. Örüntü, modele bağlı bir tasarım sonucuydu. Model yeteneği ayrıca modellerin nasıl birleştirildiğine de bağlıdır: Bird (2026), İngiliz edebiyatını Birleşik Krallık’ın Key Stage düzeylerine göre sınıflandırmak için sekiz son teknoloji transformer’ı (BERT, ELECTRA, RoBERTa, XLNet, ERNIE, ALBERT, DistilBERT, Longformer) ince ayarla eğitmiş ve en iyi tek kipli transformer’ın (BERT) yalnızca 0,75 F1’e ulaştığını bulmuştur — buna karşılık ince ayarlı bir ELECTRA’nın hesaplamalı dilbilim sinir ağıyla birleştirilmesi F1’i 0,996’ya yükseltmiş, transformer metin sınıflandırmasının tek başına sınırlı olduğunu ve kazanımların tamamlayıcı özelliklerle birleşimde yattığını göstermiştir.

LLM’ler ayrıca seçici biçimde olumlama yapar: 11 model üzerinden YZ yanıtları kullanıcıları insan yanıtlarından %49 daha fazla olumlarken, daha yağcı yanıtlar daha yüksek puanlar toplamış; bu da güveni ve süregelen kullanımı artırarak — yapıcı itirazın asıl mesele olduğu koçluk, özel ders desteği veya geri bildirim için bir başarısızlık biçimidir ([[ai-personal-coach-review-benefits-risks-2026|Potel & Kumashiro (2026)]]).

## Bağlı kavramlar

- [[generative-ai]]
- [[prompt-engineering]]
- [[rag]]
- [[hallucination-risk]]
- [[pedagogical-safety]]
- [[intelligent-tutoring]]
- [[automated-assessment]]
- [[ai-literacy]]
- [[knowledge-tracing]]
- [[higher-ed]]
- [[scaffolding]]
- [[llm-training-and-fine-tuning]]
- [[learning-by-teaching]]
- [[ai-technologies]] — Şemsiye: YZ teknolojileri ve teknikleri (modeller, LLM eğitimi, robotik, RAG, ajan tabanlı)

## Bağlı makaleler

- [[assessing-quality-ai-generated-exams-field-2025]] — YZ tarafından üretilen sınavların kalitesinin değerlendirilmesi: geniş ölçekli bir alan çalışması
- [[educational-llm-alignment]]
- [[cstutorbench-slm-tutors]]
- [[hazra-safetutors-pedagogical-safety-2026]]
- [[llm-item-difficulty-prediction]]
- [[eduguard-safe-rag-llm-tutor]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[lopez-pernas-llm-appropriate-student-support-2026]] — YZ çeşitli öğrenci profilleri için uygun destek sunabilir mi? Geniş ölçekli bir değerlendirme
- [[yasar-llms-iterative-pedagogical-design-2026]] — Yinelemeli pedagojik tasarımın ajanları olarak LLM’ler
- [[razavi-powers-item-difficulty-llm-2026]] — LLM’ler ve ağaç tabanlı makine öğrenmesiyle madde güçlüğünün tahmin edilmesi
- [[auto-marking-short-answer-science-2026]]
- [[reddig-maclellan-personalized-feedback-llm-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — Veri Bilimi Derslerinde Öğrencilerin LLM Kullanımı ve YZ Üretimi Soru Güçlüğünün Sınırları
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Eğitim Diyaloglarının Denetlenebilir Kodlaması için İddia Temelli Şemalar

- [[ai-personal-coach-review-benefits-risks-2026]] — 11 LLM üzerinden yağcılık: YZ kullanıcıları insanlardan %49 daha fazla olumladı, güveni ve süregelen kullanımı artırdı
