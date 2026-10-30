---
title: AIEd Değerlendirmesi
created: "2026-10-14T21:40:00-04:00"
type: concept
foundations: [agentic-ai, teacher-role]
technology: [generative-ai, human-in-the-loop-ai, llm]
assessment: [assessment, assessment-validity, educational-measurement, formative-assessment]
audience: [researchers, instructors, administrators]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, research-gaps-aied, does-ai-help-students-learn, evaluating-ai-interventions-methods, reporting-interpreting-aied-research]
confidence: high
methods: [benchmark]
translation_of: concepts/ai-ed-evaluation
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **AIEd değerlendirmesi** — [[ai-education|AI education]] araçlarının ([[llm]] tabanlı öğretmenler, [[automated-assessment|automated graders]], geri bildirim sistemleri, ajanlar) gerçekten işe yarıp yaramadığını değerlendirmek için kullanılan yöntemler, kıyaslamalar ve ölçütler bütünü — yalnızca göze çarpan doğrulukta değil, güvenilirlikte, [[pedagogy|pedagogical]] kalitede, geçerlilikte ve gerçek öğrenme etkisinde. Bilgi tabanının araştırmalarında tekrarlayan bir tema, değerlendirmenin alana özgü, güvenilirlikle uyumlu ve tek bir toplu doğruluk sayısı yerine insan yargısı ve eğitimsel sonuçlara dayandırılması gerektiğidir.

## Düşünülmesi Gerekenler

- Bir YZ öğretmen aracının “işe yarayıp yaramadığına” nasıl karar verirdiniz? Göze çarpan bir doğruluk sayısının ötesinde, sizi gerçekten öğrenmeyi iyileştirdiğine ikna edecek hangi kanıt olurdu?
- Temel bir bulgu, güvenilirliğin geçerliliği garanti etmediğidir: bir sistem son derece tutarlı olup iyi öğretmenliğin ne olduğuna ilişkin yargısında yanılabilir. Kararlı, tekrarlanabilir bir YZ neden hâlâ yanlış olabilir?
- Değerlendirme alana özgü olmalıdır — bir ders için işe yarayan bir kıyaslama başka bir ders için yanıltıcı olabilir. Bir YZ aracı için parlak bir kıyaslama sonucu gördüğünüzde, bağlamla ilgili neyi kontrol etmek isterdiniz?
- Sistemlerin yargılandığı “gerçek referans” genellikle tartışmalıdır — doğru bir cevabın veya notun ne olduğu uzmanlar ve disiplinler arasında değişir. Bu belirsizlik, herhangi bir değerlendirmeye güvenmeyi nasıl karmaşıklaştırır?
- Araştırmalar, metin tabanlı LLM değerlendiricilerinin açıkça sözlü olarak ifade edilen davranışları ayrıcaltıkladığını ve zımni bağlamı az ağırlıklandırdığını — bir “açık ipucu önyargısı” olarak — gösteriyor. Bir makine, yalnızca göze çarpanı aradığı için hangi tür iyi öğretmenliği sistematik olarak gözden kaçırabilir?
- Modern değerlendirme ayrıca çevresel ve altyapısal maliyeti — enerji, donanım — çıktı kalitesinin ötesinde tartar. Bir YZ aracının değerini yargılarken [[sustainability]] etken olmalı mıdır?

## Giriş

AIEd değerlendirmesi birkaç farklı değerlendirme nesnesini kapsar. **Çıktıyı** değerlendirebilir (YZ’nin cevabı, notu veya geri bildirimi doğru ve güvenilir mi?), **süreci** (araç geçerli, savunulabilir bir değerlendirmeyi ve öğrenmeyi destekliyor mu?) ve **ajanı** (bir YZ öğretmeni veya ajanı etkin biçimde öğretiyor ve uygun biçimde davranıyor mu?). Her biri farklı yöntemler gerektirir ve farklı geçerlilik soruları ortaya çıkarır.

Alanın on yıllık kavisi kendi başına bir çerçevedir: [[xiong-ai-educational-measurement-review-2026|Xiong and Li (2026)]], 313 makale üzerinde üç dönemi — Biçimlendirici (2015–2018), Genişleme (2019–2022) ve Üretken (2023–günümüz) — izler ve yapıların ve geçerlilik argümanlarının [[human-ai-collaboration|human–AI collaboration]] için yeniden yazılması gerektiğini savunur, zira [[item-response-theory|IRT]] ve Klasik Test Kuramı modelleri desteksiz insan performansı üzerine kurulmuştur.

### AIEd değerlendirmesinin araştırmada görünümü

- **Çıktı güvenilirliği ve gerçek referans:** [[ground-truth-reliability-aied|Modernizing ground truth]], AIEd değerlendirmesindeki güvenilirlik sorunlarının sıklıkla sistemlerin yargılandığı referans verinin — “gerçek referans” etiketlerinin — kendisine dayandığını savunur ve güvenilirlik ve geçerliliği artırmaya yönelik dört kaymayı önerir. [[calibrating-trustworthiness-llm-education-2026|Calibrating trustworthiness]], bir YZ aracına duyulan güvenin gösterilmiş, yorumlanabilir kanıta dayanması için paydaşlarla birlikte değerlendirme ölçümlerini ve görselleştirmelerini ortak tasarlar.
- **Otomatik not verme ve puanlama:** [[cong-confidence-asag-2026|LLM short-answer grading]], [[cong-confidence-asag-2026|confidence-aware ASAG]], [[cotal-formative-assessment-scoring-2026|CoTAL human-in-the-loop prompt engineering]] ve [[llm-cognitive-diagnosis-handwritten-math|cognitive-diagnosis of handwritten math]], LLM’lerin not verebilip teşhis koyabildiğini, ancak güvenilirliğin ham model büyüklüğünden çok [[human-in-the-loop-ai|human oversight]], alana özgü temellendirmeye ve güven kalibrasyonuna bağlı olduğunu gösterir.
- **İçerik değil, pedagojik bilgi için bir kıyaslama.** [[cdpk-pedagogy-benchmark-llms|Lelièvre et al. (2025)]], 97 modeli Şilili öğretmen sınavı maddeleri üzerinde puanlar (CDPK %28–89); birçoğu tahmini ~%50’lik insan tabanının üzerindedir, ancak statik çoktan seçmeli maddeler ders planlamasını veya adım adım iskelelemeyi test edemez.
- **Üretilen maddelerin psikometrik bir kıyaslamaya karşı doğrulanması.** [[assessing-quality-ai-generated-exams-field-2025|Isley et al. (2025)]], 71 sınıf için kursa özgü sınavlar üretmiş ve 20 tanesini daha insan yazımı AP Statistics maddelerine karşı kıyaslamış; 1.686 öğrenci üzerinde ön test çapalarıyla Bayesyen hiyerarşik 2PL [[item-response-theory|IRT]] modeli uydurmuş; YZ maddeleri daha kolay ama daha ayırt edici çıkmıştır (ā = 1,3 / 1,2’ye karşı).
- **Pedagojik kalite ve uyum:** [[machines-misread-pedagogical-quality|Why machines misread pedagogical quality]], öğretmenin iyi olmasını oluşturan şeyi yargılarken insan–makine uyumsuzluğunu belgeler ve [[tutoring-effectiveness-index|the Tutoring Effectiveness Index]], öğretmen kalitesini öğretmen davranışından öngörür. [[responsible-assessment-ai-era-stanford-2026|Responsible assessment in the AI era]] ve [[authentic-products-authenticated-processes-2026|authenticated processes]], değerlendirmenin doğru cevapların ötesine geçerek YZ öğrenmenin “ürünlerini” üretebildiğinde değerlendirmenin özgün, geçerli ve savunulabilir kalıp kalmadığını incelemesi gerektiğini savunur.
- **Üretim izleme ve hakim kalibrasyonu:** [[llm-judge-evaluation-educational-ai-2026|Rohlfs et al. (2026)]], LLM-hakim değerlendirmesi ürün ölçeğinde çalıştığında ne olacağını, her ay milyonlarca öğretmen ve öğrenci mesajına hizmet eden bir K-12 paketinden yararlanarak bildirir. Program olgunlaştıkça, yanlış pozitifler değerlendiricilerin işaretlerini domine etmeye başlamış ve analist dikkatini ürün değişikliği gerektiren arızalardan uzaklaştırmıştır. Üç değişiklik — tekrarlanan hakim çalıştırmalarından oluşan oy birliğiyle başarısız panelleri, değerlendirici başına hakim model seçimleri ve yumuşatılmış rubrikler — doğrulanmış yanlış pozitifleri %99 azaltmış ve 21 konuşlu değerlendirici boyunca işaret başına kesinliği %0,6’dan %49’a yükseltmiş; olağanüstü arıza kümesi yakalama oranını %100’de tutmuştur. Değerlendirme uygulaması için ders şudur: bir işaretin harekete geçirilip geçirilmeyeceğine göze çarpan doğruluğu değil, değerlendiricinin çalışma noktası karar verir.
- **Bir geçerlilik protokolü olarak hakim çeşitliliği.** Öğretim tasarımı ajanları için bir kıyaslama, hakimlerini tek bir model sağlayıcı yerine farklı sağlayıcılardan çekmiş ve 1.017 puanlanmış senaryo boyunca yüksek hakemler arası güvenilirlik bildirmiştir ([[jeon-isd-agent-bench-2026|Jeon et al. (2026)]]).

- **Bir açıklamayı, iddia ettiği atıfa karşı denetleyin, akıcılığa karşı değil.** [[distilling-self-explaining-lm-learning-analytics-2026|Pan et al. (2026)]], bir modelin anlatımlarını aritmetik kapama, alıntılanan kovaryatlar, karar bağlılığı ve güvensiz tedavi oranına bağlar, zira akıcı metin, sinyali kesin olsun ya da gürültülü olsun eşit biçimde iyi biçimlenmiştir — anlatımların %98,8’i geçerken olumsuz kuyruk kırpılmıştır.
- **İstek metni duyarlılığı, bir LLM not vericinin birinci dereceden bir özelliğidir.** [[llm-graders-computer-science-exams-2026|Habibullah et al. (2026)]], 570 öğrencinin [[cs-education|computer-vision]] sınavını 171 yapılandırma üzerinden ve 1.038 öğrencinin makine öğrenimi sınavını 162 yapılandırma üzerinden notlamıştır: kısa bir “katı not verici” ön açıklaması, 17 açık ağırlıklı modelden 14’ünü notlandırma bandının dışına itmiş, tekrar deney ise güvenliği yeniden üretmiş ama yönünü değil, nötr istek metinleriyle aşırı not veren yedi modeli iyileştirmiştir. Tek bir istek metninin doğruluğu, kullanılabilir bir not vericinin kanıtı değildir ve işaretli önyargı ortalama mutlak hata değerinin yanında yer almalıdır; havuzlanmış çift notlu örnekler üzerinde LoRA ince ayarı beş küçük modeli insan düzeyine getirmiş ve kişilik duyarlılığını neredeyse silmiştir.
- **Derecelendirilebilir kanıt bir tasarım değişkenidir, görevin bir özelliği değildir.** [[durable-skills-measurement-ai-teammates-2026|Globerson et al. (2026)]], bir Yönetici LLM’nin rubriği elinde tutmasına ve konuşmayı değerlendirilen beceriye doğru yönlendirmesine izin vermiş; bu, proje yönetimi için derecelendirilebilir kanıtı %92,4’e, çatışma çözümü için %85’e yükseltmiş, katılımcılara beceriye dikkat etmelerini söylemek ise hiçbir şeyi değiştirmemiştir.

### AIEd değerlendirmesi neden zordur

AIEd değerlendirmesi birkaç nedenle zordur. Birincisi, **güvenilirlik yeterli değildir** — bir sistem bir rubrikle hemfikir olup pedagojiyi yanlış yargılayabilir; bunu [[machines-misread-pedagogical-quality|human–machine alignment research]] gösterir. İkincisi, **gerçek referans tartışmalıdır** — “doğru” bir cevabın, notun veya öğretme hamlesinin ne olduğu, disiplinler ve uzmanlar arasında değişen kendi başına bir yargıdır; buna [[ground-truth-reliability-aied|ground-truth modernization]] dayanak olur. Üçüncüsü, **eğitimsel geçerlilik çok boyutludur** — [[assessment-validity]], [[formative-assessment]] ve [[authentic-assessment]], tek bir doğruluk ölçüsünün yakalayamayacağı farklı ölçütler getirir. Son olarak, **hedef sürekli hareket eder** — ajan YZ ve [[multimodal]] modeller, metin modeli kıyaslamalarının yeniden kullanımı yerine değerlendirme çerçeveleri ([[agentic-ai]], [[tool-invariant-framework-agentic-ai|tool-invariant assessment]]) talep eder. Değerlendirme bulguları ayrıca tüm AIED araştırmalarını etkileyen aynı kesişen sınırlamalara tabidir — YZ geliştikçe yaşlanırlar, yeniden üretilebilirlik ve FAIR uygulamalarına bağlıdırlar ve tescilli sistemlere dayanabilirler — dolayısıyla değerlendirme sonuçları [[limitations-in-aied-research]] içindeki uyarılarla okunmalıdır. Yeni bir boyut daha **kaynak sürdürülebilirliğidir**: yerinde dağıtımlar giderek artan biçimde, doğruluğun yanında enerji tüketimini ve donanım gereksinimlerini (örneğin VRAM, sorgu başına mWh) bildirir — bkz. [[shen-sustainable-ai-knowledge-base-cs-education-2026|sustainable on-premise knowledge-base assistants]] — böylece eksiksiz bir değerlendirme, yalnızca çıktı kalitesi değil çevresel ve altyapısal maliyeti de tartar.

**Güvenilirlik geçerliliği garanti etmez.** [[melo-llm-classroom-observation-teach-2026|Validation of LLM-based classroom observation]], bir modelin tekrarlanan değerlendirmelerde son derece kararlı olup yine de uzman yargısıyla uyumsuz kalabileceğini, tersine uzmanlarla iyi uyumlanan modellerin sıklıkla daha değişken olduğunu gösterir — güvenilirlik ve doğruluk birbirinden kopar, dolayısıyla tek geçişli bir doğruluk değeri güvenilirliği olduğundan fazla gösterebilir. Aynı çalışma bir **açık ipucu önyargısı** belgeler: metin tabanlı LLM değerlendiriciler, açıkça sözlü olarak ifade edilen davranışları ayrıcaltıklar ve zımni veya bağlamsal kanıtı az ağırlıklandırır (örneğin, bir rubriğin yokluğa toleranslı ölçütlerde yüksek not vermesine izin verdiği durumlarda süregelen öğrenci [[self-regulated-learning|self-regulation]]), rastgele değil sistematik bir anlaşmazlık üretir. Bu, ölçüm güvenilirliğinin geçerli yoruma — onun yerine geçen bir vekil değil — ön koşul olduğunu ve değerlendirmenin uzman çapalı doğruluğun yanında tekrarlı ölçüm kararlılık kontrolleri içermesi gerektiğini vurgular.

Doğrulanmış bir uzun ufuk söylem modeli bile bağımsız sonuç ölçütlerini yalnızca zayıf biçimde izler: NSPA’nın Öğrenci Akıl Yürütme ve Öğretmen Benimseme puanları, öğretmen etkililiğinin katma değer modelleriyle ρ = 0,10 düzeyinde korele olmuştur; dolayısıyla otomatik yapıların değerlendirmeyi bilgilendirmesinden önce dış sonuç doğrulamasına ihtiyacı vardır ([[nspa-neuro-symbolic-pedagogical-alignment-2026|Fang and Liu, 2026]]).

Benzetilmiş öğrenenlerin değerlendirmesi aynı standarda tabidir: bir benzetirici yalnızca davranışı *epistemik* olarak sadık olduğunda geçerlidir, yalnızca akıcı değil; dolayısıyla belirtilen davranışsal hedefine ve çevresine karşı, jenerik insansılığa karşı değil puanlanmalıdır — ve otomatik hakimler uzman insan tercihleriyle zamanın yaklaşık %65’inde örtüşür ([[valid-student-simulation-llm-2026|Yuan et al. (2026)]]).

**Toplu doğruluk, kime kötü hizmet edildiğini gizler.** [[drawedumath-vlm-struggling-students-2026|Evaluations of vision-language models on DrawEduMath]], toplam doğruluğun sistematik bir zayıflığı gizlediğini gösterir: modeller, en çok pedagojik yardıma ihtiyaç duyan öğrenci çalışmalarında (hatalı, zorlanan öğrenci çalışmaları) tam olarak geride kalır; dolayısıyla yeteneği olduğundan fazla göstermekten ve başarı boşluklarını genişletmekten kaçınmak için değerlendirmenin öğrenci yeterliliğine ve hata durumuna göre ayrıştırılması gerekir.

**İkili doğruluk, önemli olan arızaları gizler.** 10.836 benzetilmiş çift üzerinde üç yönlü bir adım teşhis kıyaslamasında, yedi LLM öğretmeni en uygun adımları neredeyse kusursuz sınıflamış (F1 %94–99), ancak geçerli alternatifleri F1 %0–76 ve yanlış adımları %4–55 düzeyinde sınıflamıştır — aşırı reddetme ve aşırı doğrulama — ve doğru teşhis bile harekete geçirilebilir geri bildirim üretmemiştir ([[yasir-llm-tutoring-agents-2026|Yasir et al. (2026)]]).

- **LLM’leri değerlendirmek için insan araçlarını yeniden kullanmak, bir gizli yapı kontrolü gerektirir.** [[assessment-latent-structure-human-llm-2026|Strugatski et al. (2026)]], insanlar ve altı çok kipli LLM için ayrı ayrı açıklayıcı faktör analizi uydurmuştur: LLM–insan örtüşmesi her iki araçta da insan–insan tabanının altında kalmış ve paralel analiz farklı faktör sayıları tuturmuştur (insanlar için beş, LLM’ler için dört).
- **Ortak değerlendirme, tek bir puanın gizlediği ödünleşimleri ortaya çıkarır.** [[elbench-education-llm-benchmark-2026|Jiang et al. (2026)]], eğitime dönük dokuz modeli tek bir protokol altında yetenek, güvenlik, temel eğitim ve üst düzey kültürleme üzerinden puanlar: ilk altısı genel olarak istatistiksel olarak birbirinden ayırt edilemez olmasına rağmen Güvenlik’te 19,5 puan fark gösterir ve Güvenlik, Temel Eğitimle güçlü biçimde ters koreledir (r = −0,83).
- **Sınıf çarpıklığı bir değerlendirme ölçüsünü yanıltıcı kılabilir.** [[reflection-level-classification-hungarian-essays-2026|Csibi and colleagues (2026)]], %68’i tek bir düzeyde yer alan 1.954 Macar öğretmen eğitimi denemesinde yansıma düzeyini sınıflamıştır: tek bir yüzeysel yapılandırma yalnızca 0,5162 doğrulukta ROC-AUC 0,7131’e ulaşmış ve sınıf dengeleme her ölçütü düşürmüştür (olmadan 0,6672 doğruluk, varken 0,6408). Yüzeysel modeller en iyi toplu puanları almış, transformerlar ise azınlık düzeylerini daha iyi ele almıştır; dolayısıyla bildirilen değer, bir kararın gerçekten bağlı olduğu performansı izlemelidir.
- **Kıyaslama ve not verici hataları model arızasıyla karıştırılır.** Yaygın olarak kullanılan altı [[physics-education|physics]] kıyaslamasının uzman yeniden notlaması, 250 reddedilmiş maddeyi denetlemiş ve 143’ünü (%57,20) kıyaslama kusurlarına, 95’ini (%38,00) not verici hatalarına atfetmiş; yalnızca 12’si (%4,80) gerçek model hatası olarak kalmış, dolayısıyla ölçülen boşluğun %95,20’si modele atfedilemez niteliktedir. Maddelerin onarılması, HLE-Physics mean@4’ü %47,28’den %78,66’ya ve CritPt mean@5’i %32,29’dan düzeltilmiş %87,50’ye taşımış, görünürdeki sınır modeli zayıflığını neredeyse doyuma dönüştürmüştür. Denetim, bildirilen bir puanın model, madde bankası ve not vericinin ortak bir özelliği olduğunu ve bir kıyaslamadan çıkarılan her yetenek iddiasından önce uzman hakemliğinin gelmesi gerektiğini savunur. ([[frontier-models-physics-benchmark-audit-2026]])

Değerlendirilen sistemlerin hızı, ek bir kısıttır. [[ai-tutoring-micro-rct-gcse-science-2026|Harrison et al. (2026)]], zamansal sorunu doğrudan tanımlar: büyük ölçekli bir deney tasarlanıp, uygulanıp, çözümlenip yayınlandığında, incelenen teknoloji önemli ölçüde değişmiş olabilir; bu, güçlü kanıtın en çok gerektiği anda uygulamayı zayıf gözlemsel veya kullanım verilerine doğru iter. Onların yanıtı daha zayıf tasarımları kabul etmek değil, döngüyü kısaltmaktır — nedensel karşıtlığı koruyan ve platform geliştikçe tekrarlanan uygulayıcı yönetimli mikro-rastgele deneyler.

- **Veri sadakati, çıktı kalitesinden ayrı bir değerlendirme problemidir.** Her değişkenin özet istatistiklerini yeniden üreten sentetik eğitim kohortları, verinin yapısını yine de yanlış belirtebilir: öğrenenler üzerinde haftalık bir yakınlık grafiği, sentetik sürümlerde gerçek kohortlardan 2,6 ila 4,9 kat daha az değişmiştir; dolayısıyla bir sadakat puanı, gerçek veri üzerinde hangi analizlerin ayakta kalacağını öngörmez ([[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake, 2026]]).

- **Dağılım içi doğruluk, konuşlandırılabilirlik değildir.** Küratörlü madde bankasında makro F1 0,88 puan alan bir Bloom düzeyi sınıflandırıcısı, YZ tarafından üretilmiş iki soru kümesinde 0,48 ve 0,20’ye düşmüştür; bu kayıp, model büyüklüğünden çok açık Bloom tetikleyici fiillerinin neredeyse yokluğunu izlemiştir; eğitimsiz [[llm|LLMs]] dağılım dışında en dayanıklı seçenek olmuştur (0,79 ve 0,41–0,51) ve etiketlenmiş dağılım dışı veri üzerinde yeniden eğitim en büyük kazanımları geri kazanmıştır (0,82’ye kadar); dolayısıyla aktarım, dağılım içi uyumun yanında raporda yer almalıdır ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]).

- **Bir YZ zorluk ölçeği bir değerlendirme yardımıdır, bir not değil.** YZ zorluk tahminleri, soru düzeyinde geçme oranını güçlü biçimde izlemiş (79 soru üzerinde rho = −0,871), ancak 106 soruluk bir CS101 örneğinde −0,552’ye zayıflamış ve sınav düzeyinde sıfıra yaklaşmıştır; dolayısıyla bu tür ölçekler madde incelemesine aittir, öğrenci değerlendirmesine değil ([[llm-difficulty-calibration-programming-exams-2026|Yan et al. (2026)]]).

### İlgili kavramlarla bağlantılar

AIEd değerlendirmesi, bilgi tabanının yöntemlerinin ve risklerinin merkezinde yer alır. [[assessment-validity]], [[educational-measurement]] ve [[benchmark]] kavramlarını [[assessment]] ve [[automated-assessment]] içinde işlevsel kılar. İnsan gözetimi çağrısı [[human-in-the-loop-ai]] ve [[teacher-role]] ile bağlanır; güvenilirlik odaklanması ise [[hallucination-risk]], [[automated-assessment|Confidence Aware AI Assessment]] ve [[trust-calibration]] ile bağlanır. Performansı değerlendirmek ile öğrenmeyi değerlendirmek arasındaki ayrım [[genai-performance-vs-learning|performance vs. learning]] ve [[student-modeling]] ile bağlantılıdır; ve pedagojik ajanların değerlendirmesi [[intelligent-tutoring]], [[llm-training-and-fine-tuning]] ve [[pedagogical-safety]] ile bağlanır.

### Öğrenme kazanımlarının değerlendirilmesi

AIEd değerlendirmesinin merkezi bir nesnesi, bir YZ aracının ürettiği bilgi veya beceride ölçülebilir iyileşme olan **öğrenme kazancıdır** (bkz. [[learning-gains]]). Kazançları titiz biçimde değerlendirmek, [[genai-performance-vs-learning|performance and learning diverge]] için doğru sonuç ölçüsünü seçmeyi gerektirir: YZ, anlık, YZ destekli görev performansını şişirirken kalıcı, desteksiz öğrenmeyi değişmeden veya azalmış bırakabilir (bkz. [[generative-ai-reduced-study-time-math]], [[stromberg-generative-ai-learning-penalty-secondary-2026]]). Etkin kazanç değerlendirmesi bu nedenle:

- **Desteksiz, YZ’ye dirençli sonuç ölçütleri kullanır.** [[generative-ai-guardrails-harm-learning|Guardrail evidence]] ve [[summative-assessment|summative-assessment research]], gerçek [[learning-gains|learning gains]] ortaya çıkaranın YZ destekli ödev veya ev ödevi değil, gözetimli, kitapsız, desteksiz ölçümler olduğunu gösterir.
- **Desteklenen performansı kalıcı öğrenmeden ayırır.** [[genai-meta-analysis-programming-learning|Meta-analysis]], YZ’nin önemli bir öğrenme kazancı olmadan (g ≈ 0) büyük üretkenlik kazançları üretebileceğini gösterir; dolayısıyla değerlendirmeler her ikisini de bildirmelidir.
- **Teknoloji nesli önemli olmayabilir ve maliyet verileri eksiktir.** [[burneo-can-edtech-close-learning-gaps-2026|Burneo et al. (2026)]], 14 rastgele deneyi ortalama 0,125 standart sapma öğrenme kazancına havuzlar; üretken YZ’nin önceki uyarlanabilir yazılıma göre hiçbir avantajı yoktur (0,022 standart sapma, SE 0,075) ve karşılaştırılabilir öğrenci başına maliyet yalnızca iki veya üç çalışmada bildirilmiştir.
- **Ön test/son test ölçülerini geçerlilik kontrolleriyle eileştirir.** [[assessment-validity]] ve [[educational-measurement]] kazanç ölçümünü temellendirir; [[genai-educational-outcomes-meta-analysis|meta-analytic review]], alanın kazanç kanıtını tesis etmek için çalışmalar arasında etki büyüklüklerini havuzlar.
- **Öğrenene ve bağlama göre ayrıştırır.** [[learning-gains]] nüfusa, alana ve YZ yapılandırmasına göre değiştiğinden, değerlendirme tek bir toplu değer yerine farklı öğrenci alt grupları için kazançları bildirmelidir (örneğin [[drawedumath-vlm-struggling-students-2026|VLM evaluations]] hata durumu için ortaya çıkardığı gibi ön yeterliliğe göre) ve kazanç bulgularını daha geniş kanıt temelinde konumlandırmak için [[meta-analysis-systematic-review]] ile bağlamalıdır.

Bağlam koşullu kıyaslamalar gereklidir: [[zhang-tutormoments-2026|Zhang et al. (2026)]], önceki öğretmenlik kıyaslamalarının (MathTutorBench, MRBench, LearnLM) yardım ikileminin tek tarafını ödüllendirdiğini veya yetersiz tanımlanmış rehberlik verdiğini savunur. TutorMoments bunun yerine öğretmenlerin tanımladığı pedagojik karar noktalarını yeniden oynatır ve bir öğretmenin yardımının belirli öğrenme anına uygun olup olmadığını — [[scaffolding]] / titizlik — değerlendirir.
- **Seçtiğiniz ölçüt sonuçlarınızı tersine çevirebilir.** [[zhang-platform-scores-miss-ai-teaching-agents-2026|Zhang et al. (2026)]], YZ öğretme ajanlarını [[medical-education|medical education]] değerlendirirken, bir [[edtech-platform|educational platform]] açıklanmayan toplu puanlarının, şeffaf ve uzman doğrulamalı sekiz boyutlu öğretme kalitesi rubriğine (tıbbi bilgi doğruluğu, pedagojik rehberlik, bilgi kapsamı, rol yapma kalitesi, uyarlanabilir zorluk, tıbbi güvenlik, etkileşim, geri bildirim) neredeyse zıt düzende ajanları sıraladığını bulmuştur. Platform puanları öğrenci performansını endeksler; rubrik ajanın öğretme davranışını endeksler — yanlış ölçüt seçmek, hangi ajanların benimseneceğine veya iyileştirileceğine karar verir. Ayrıca LLM değerlendirici hoşgörüsünün modele göre değiştiğini bulmuşlardır (bazıları ayırt edemeyecek kadar hoşgörülü); dolayısıyla otomatik puanlamanın insan kalibrasyonuna ihtiyacı vardır ve en çok bilişsel süreç boyutlarında güvenilirdir.
- **Bir hata oranı, yakalaması gereken arızayı gizleyebilir.** [[ai-mediated-input-medical-english-asr-2026|Stanchev (2026)]], bir tıbbi İngilizce parçanın tek bir metinden konuşmaya dönüştürme kaydını dört [[speech-and-voice-technologies|ASR]] hizmetine göndermiştir: iki ücretsiz hizmet referansın %87,96 ve %88,34’ünü döndürmüş, iki ücretli hizmet ise %32,76 ve %55,35 ön izleme döndürmüş ve böylece %73,21 ve %48,77 kelime hatası oranı puan almıştır. Yüksek hata oranları, yanlış duyulmuş belirteçlerden değil, hiç döndürülmemiş belirteçlerden gelmiştir; dolayısıyla yalnızca hata oranına göre sıralamak, bir dışa aktarma kısıtlamasını bir transkripsiyon hatası olarak ele almıştır. Otomatik bir ölçüt, öğrenenin gördüğü yapıtın yerine geçtiği her an kapsam hata oranının yanında yer almalıdır.
- **Değerlendirme paketlerini ölçülmüş öğrenmeye çapalayın, vekillere değil.** Öğretme yeteneği kıyaslamaları, konuşmaysal pedagoji rubrikleri ve öğretmen gecikmesi, onların yerine geçen vekiller olarak değil, gerçek öğrenme kazanımlarına karşı doğrulanmalıdır; gecikme ayrıca bir değerlendirme eksenidir, çünkü öğrencilerin hiç etkileşime girip girmeyeceğini şekillendirir ([[studentbench-ai-human-tutoring-gre-2026|Northcutt et al., 2026]]).
- **Uzman yargısı değerlendirmelerinin kendi güvenilirlik hesaplamasına ihtiyacı vardır.** [[bespoke-industry-personalized-lecture-videos-2026|Puech et al. (2026)]], 25 alan eşleşmiş uzmanın 92 üretilmiş [[video-education|lecture videos]] “standart bir MOOC dersinin kalitesine” çapalanmış bir rubriğe karşı değerlendirmesini sağlamış; %87’sini çıta düzeyinde veya üzerinde bulmuştur (5 üzerinden ortalama 3,42). Her video yalnızca bir değerlendirici tarafından bir kez derecelendirilmiştir (k = 1); dolayısıyla tasarım, paneli değerlendiriciler arası anlaşma istatistiği pahasına korpus üzerine yayar; rastgele kesişimli bir model, artık varyansın yaklaşık %35’ini değerlendiriciye atfetmiştir (ICC = 0,35) ve makale, tek bir kesinlik değeri yerine değerlendirici kümelenmeli aralıkları bildirir. Uzman yargısına dayalı bir değerlendirme, yayınladığı güvenilirlik analizi kadar güçlüdür.

## Bağlı kavramlar

- [[interpreting-and-applying-aied-research]]
- [[ai-assisted-educational-research]] — AI-Assisted Educational Research
- [[assessment-validity]] — Validity of interpretation in AI-ed evaluation
- [[educational-measurement]] — Measurement theory for assessing learning
- [[psychometrically-aware-ai]] — Applying psychometrics to AI-based assessment
- [[benchmark]] — Standardized benchmarks for evaluating AI systems
- [[automated-assessment]] — AI-based grading and scoring systems
- [[learning-analytics]] — Data-driven analysis of learning behavior
- [[research-methods-aied]] — Research methods for AI in education
- [[learning-gains]] — Measuring learning gains from AI tools
- [[formative-assessment]] — Ongoing assessment to guide instruction
- [[summative-assessment]] — Summative assessment: AI-resistant formats (oral, proctored, closed-book exams)
- [[authentic-assessment]] — Assessment of real-world, transferable performance
- [[human-in-the-loop-ai]] — Human oversight of AI evaluation
- [[trust-calibration]] — Calibrating trust in AI systems
- [[hallucination-risk]] — Risk of fabricated content in AI outputs
- [[intelligent-tutoring]] — Evaluating AI tutoring systems
- [[agentic-ai]] — Evaluating autonomous AI agent behavior

## Bağlı makaleler
- [[zhang-platform-scores-miss-ai-teaching-agents-2026]] — What platform scores miss: multidimensional evaluation of AI teaching agents
- [[assessment-latent-structure-human-llm-2026]] — Do assessment instruments measure the same thing for humans and LLMs? (Strugatski et al. 2026)
- [[assessing-quality-ai-generated-exams-field-2025]] — Assessing the quality of AI-generated exams: a large-scale field study
- [[nspa-neuro-symbolic-pedagogical-alignment-2026]] — Neuro-symbolic pedagogical alignment (NSPA)
- [[yasir-llm-tutoring-agents-2026]] — Three-way classification benchmark of LLM tutoring agents (Yasir et al. 2026)
- [[drawedumath-vlm-struggling-students-2026]] — Evaluating VLMs on DrawEduMath: error content hardest (Lucy et al. 2026)
- [[cdpk-pedagogy-benchmark-llms]] — Benchmarking LLM pedagogical knowledge (CDPK + SEND)
- [[melo-llm-classroom-observation-teach-2026]] — LLM classroom observation validation: reliability vs accuracy (Melo et al. 2026)
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — On-premise OER AI knowledge-base assistants: multi-dimensional evaluation
- [[ground-truth-reliability-aied]] — Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity
- [[calibrating-trustworthiness-llm-education-2026]] — Calibrating Trustworthiness: Co-Designing Metrics and Visualizations
- [[teachbench-llm-teaching-evaluation]] — TeachBench: Evaluating LLM Teaching Ability
- [[machines-misread-pedagogical-quality]] — Why Machines Misread Pedagogical Quality: Human-Machine Alignment
- [[cong-confidence-asag-2026]] — Automatic Short Answer Grading With LLMs
- [[cotal-formative-assessment-scoring-2026]] — CoTAL: Human-in-the-Loop Prompt Engineering for Formative Assessment
- [[llm-cognitive-diagnosis-handwritten-math]] — Benchmarking LLMs for Diagnosing Students' Cognitive Skills
- [[tutoring-effectiveness-index]] — The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality
- [[jeon-isd-agent-bench-2026]] — ISD Agent Benchmark
- [[tool-invariant-framework-agentic-ai]] — A Tool-Invariant Framework for Teaching and Assessing Computational Methods
- [[valid-student-simulation-llm-2026]] — Toward Valid Student Simulation With Large Language Models
- [[llm-difficulty-calibration-programming-exams-2026]] — From Evaluated Models to Evaluation Aids
- [[socratic-tests-conversational-assessment]] — The Theoretical Foundation of Socratic Tests
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible Assessment in the AI Era
- [[authentic-products-authenticated-processes-2026]] — From Authentic Products to Authenticated Processes
- [[genai-educational-outcomes-meta-analysis]] — Meta-analysis of generative AI educational outcomes
- [[zhang-tutormoments-2026]] — When Help is Unhelpful: evaluating AI tutors for productive struggle
- [[elbench-education-llm-benchmark-2026]] — ELBench: education LLM benchmark
- [[ai-grading-handwritten-physics-2026]] — AI grading of handwritten physics assessments (Olympiad)
- [[distilling-self-explaining-lm-learning-analytics-2026]] — Distilling self-explaining LM for learning analytics
- [[burneo-can-edtech-close-learning-gaps-2026]] — Meta-analytic evaluation of adaptive + AI EdTech
- [[xiong-ai-educational-measurement-review-2026]] — AI's role across scoring, psychometrics, assessment
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[proiqa-math-item-quality-assessment-2026]] — ProIQA: Process-Based Math Item Quality Assessment
- [[durable-skills-measurement-ai-teammates-2026]] — Toward Scalable Measurement of Durable Skills
- [[pivot-generative-video-tutors-stem-2026]] — From Content Generation to Learning Support: Pedagogy-Guided Generative Video Tutors for STEM Learning
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
- [[bloom-classifier-ai-assisted-questions-2026]] — Evaluation of pre-trained models for pedagogical assessment of novel AI-assisted educational questions
- [[llm-judge-evaluation-educational-ai-2026]] — When Evaluators Cry Wolf: Lessons from Production LLM-as-Judge Evaluation in Educational AI
