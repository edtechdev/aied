---
title: Otomatik Kompozisyon Puanlama
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [generative-ai, llm, prompt-engineering]
assessment: [assessment, automated-assessment]
discipline: [writing education]
level: [higher ed, k 12]
confidence: high
reviewed_by: [editor]
translation_of: concepts/automated-essay-scoring
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

> **Otomatik Kompozisyon Puanlama (AES)** — yazılı kompozisyonları değerlendirmek ve puanlamak için yapay zekânın kullanılması; geleneksel istatistiksel yaklaşımlardan ince ayarlı dil modellerine ve giderek daha erişilebilir hale gelen [[llm]] tabanlı istek metni stratejilerine kadar uzanır. Bu bilgi tabanındaki AES [[research-methods-aied|araştırmaları]] puanlama doğruluğunu, adillik ve yanlılığı, psikometrik geçerliliği ve eğitimciler için pratik [[accessibility]] erişilebilirliği kapsar.

## Düşünülmesi Gerekenler

- Otomatik Kompozisyon Puanlama, geleneksel istatistiksel modellerden LLM tabanlı istek metni kullanımına geçti. Bu sayfadaki temel bir gerilim, doğruluk ile erişilebilirlik arasındadır — ince ayarlı modeller iyi puanlar ancak çoğu eğitimci için pratik değildir. Kendi bağlamınızda hangisine öncelik verirdiniz ve neden?
- Önemli bir bulgu, istek metnine örnek kompozisyonlar eklemenin LLM–insan uyumunu insan–insan güvenilirliğine yaklaştırmasıdır — ve daha ucuz bir model daha pahalı bir modelle eşleşebilir. Bu durum, AES kalitesinin ne kadarının modelden, ne kadarının nasıl istek metniyle yönlendirilmesinden kaynaklandığına dair ne gösteriyor?
- Sayfa, YZ puanlamanın dilsel olarak çeşitli geçmişlerden gelen öğrencileri sistematik biçimde düşük değerlendirebileceği konusunda uyarıyor. Okumaya başlamadan önce, bir YZ’nin ana dili olmayan bir konuşmacının kompozisyonuna daha düşük puan verdiğini görseniz, bunu bir "yanlılık sorunu" mu yoksa yalnızca "puan" mı olarak düşünürdünüz? Tepkinizi ne değiştirirdi?
- Öz başvurulu bir yaklaşım, L2 yazarlarını yazılarını ana dili konuşan normlarına değil kendi önceki çalışmalarına kıyasla değerlendirir. Karşılaştırma taban çizgisinin seçimi, bir puanın anlamını nasıl değiştirir — ve hangi öğrencileri daha adil biçimde ele alabilir?
- AES, notlandırma yerine geri bildirim için kullanıldığında biçimlendirici değerlendirmeyle kesişir. Bir makinenin bir kompozisyon üzerindeki geri bildirimi, gelişmekte olan bir yazar için ne zaman gerçekten yararlı olur ve insan bir editörün vereceği [[qualitative-research|nitel]] geri bildirim türlerini ne zaman yozlaştırabilir?

## Giriş

Otomatik Kompozisyon Puanlama, eğitim teknolojisinde ilk istatistiksel modellerden, büyük önceden puanlanmış veri kümeleri olmadan kompozisyonları bütüncül biçimde değerlendirebilen modern LLM tabanlı yaklaşımlara kadar uzun bir geçmişe sahiptir. AES araştırmalarındaki temel gerilim, doğruluk ile erişilebilirlik arasındadır — ince ayarlı modeller güçlü sonuçlar elde ederken, kaynak yoğun ve çoğu eğitimci için pratik değildir.

- **[[zhang-races-consistent-essay-scoring-llms-2026|Zhang vd.]]** RACES, LLM kompozisyon puanlamasını hem doğru hem tutarlı kılmak için ödül hizalaması kullanarak temel bir AES geçerlilik kaygısını ele alır.

## Temel araştırma temaları

**İstek metni tabanlı AES**, en erişilebilir yaklaşım olarak ortaya çıkmıştır. **[[choi-anchor-aes-prompting-2025|Choi vd. örnek çalışması]]**, istek metinlerine örnek kompozisyonların dahil edilmesinin LLM–insan uyumunu insan–insan güvenilirliğine yaklaştırdığını; GPT-4o mini’nin daha düşük maliyetle GPT-4o ile karşılaştırılabilir sonuçlar elde ettiğini göstermektedir. Bu, daha geniş [[prompt-engineering]] araştırmalarına bağlanır ve AES’yi [[teacher-role|öğretmen]] kullanımı için uygulanabilir kılar.

**Psikometrik ve nitelik düzeyli puanlama** bütüncül puanların ötesine geçer. **[[psyscore-essay-scoring-zpd-feedback|PsyScore]]**, [[sociocultural-learning|ZPD]] temelli geri bildirimle niteliğe uyarlanabilir puanlama için psikometrik olarak farkında bir çerçeve sunar. **[[icle-plus-plus-essay-scoring|ICLE++]]**, bütüncül kompozisyon puanlaması için ince taneli nitelikleri modelleyerek otomatik değerlendirmenin kesinliğini geliştirir.

- **Boyut düzeyli nitelik puanlaması, her boyutun arkasındaki veriyle sınırlıdır.** [[automated-essay-scoring-critical-thinking-physics-2026|Firdausi vd. (2026)]], Ennis’in FRISCO eleştirel düşünme çerçevesinin her boyutu için ayrı bir sınıflandırıcıyı 106 Endonezyalı on birinci sınıf fizik kompozisyonu üzerinde eğitti (83’ü eğitim, 23’ü test için; üç öğretmen değerlendiricisi her boyutta kappa 0,78–0,84 oranında anlaşmıştır). Uyum, muhakemeden ziyade ifade üzerinde yoğunlaştı: karesel ağırlıklı kappa, Berraklık için 0,763 ve Durum için 0,728’e ulaştı, ancak Odak için yalnızca 0,374, Gerekçe için 0,332 ve Çıkarım için 0,227 oldu. Sıralı sinyal, gözlenmek yerine üretildi — sentetik düzey-1 kompozisyonlar (şablon üretimi, özgün uzunluğun %20–40’ına düşürme, anahtar kelime çıkarımı) artı LLM parafrazı, Odak’ı 0,028 taban çizgisinin üzerine +0,346 kappa ile yükseltti — ve bir yapılandırma, sıfıra yakın veya negatif kappa ile 0,652 doğruluğa ulaştı; böylece doğruluk, sıralı AES’de kullanılabilir bir seçim ölçütü değildir.

**Yanlılık ve adillik** kritik bir kaygıdır. **[[ai-scoring-language-bias-physics|Feser & Tschisgale]]**, YZ puanlamanın dilsel olarak çeşitli geçmişlerden gelen öğrencileri sistematik biçimde düşük değerlendirdiğini bularak AES dağıtımında [[bias-mitigation]] ve [[equity-in-ai-education]] değerlendirmelerinin gerekliliğini ortaya koymaktadır.

**İnsan değerlendiricilerle anlaşmazlık sistematiktir, rastgele değil.** Kutudan çıktığı haliyle GPT ve Llama modelleri insan puanlarıyla yalnızca zayıf biçimde anlaştı (iki insan değerlendiricisi arasındaki 0,72’ye karşı QWK ≈ 0,17–0,28) ve kaliteye bağımlı bir yönde yanlılık gösterdi — kısa, gelişmemiş kompozisyonlar için daha yüksek, küçük yüzey hataları taşıyan uzun, güçlü olanlar için daha düşük ([[llms-do-not-grade-essays-like-humans-2026|Mathew vd. (2026)]]).

**L2 ve öz başvurulu değerlendirme** ana dili olmayan yazma bağlamlarını araştırır. **[[self-referential-l2-writing-llm-assessment|Profil tabanlı L2 değerlendirmesi]]**, öğrenci yazılarını ana dili konuşan normlarına değil kendi önceki çalışmalarına kıyaslayan öz başvurulu bir yaklaşım kullanır.

**[[explainable-ai|Yorumlanabilirlik]] ve özellik ağırlıklandırma**, LLM’lerin fiilen nasıl puanladığının kara kutusunu açar. **[[llm-essay-scoring-feature-weighting-2026|Wang vd. (2026)]]**, üç LLM’yi (Qwen, GPT, Gemini) ana dili İngilizce olmayan kompozisyonlarda on altı metinsel özellik boyunca insan değerlendiricilerle karşılaştırdı; güçlü bir genel hiza buldu ancak belirgin bir ağırlıklandırma farkı tespit etti: LLM’ler dilbilgisi doğruluğunu, sözcüksel olgunluğu ve sözdizimsel karmaşıklığı öne çıkarırken, insan değerlendiriciler içerik bütünlüğünü ve görsel sunumu önceliklendirdi. Kritik biçimde, LLM’ler ağırlıklandırmalarını yeterlilik düzeyine göre kaydırdı — düşük yeterlilikli öğrenciler için dil hatalarına daha fazla ağırlık verip yüksek yeterlilikli öğrenciler için dilsel olgunluğu artan biçimde ödüllendirirken — insan değerlendiriciler daha istikrarlı bir çerçeve sürdürdü. **[[llm-essay-assessment-framework-reliability-2026|Liu, Ye ve Yan (2026)]]**, bunu 60 uzun kompozisyon üzerinde beş modeli değerlendiren bir çerçeveyle (GPT-4.1, Llama 4 Maverick, Gemini 2.5 Flash, Claude Sonnet 4, DeepSeek R1) genişletip nedensel keşif yöntemiyle farklı değerlendirici sezgileri ortaya koydu: modellerin çoğu sözcüksel kesinliği ve akıcılığı önceliklendirirken, bazıları sözdizimsel karmaşıklığı veya alanlar arası bütünleştirmeyi öne çıkardı ve bazıları tutarsızlık, puan sıkışması veya sistematik düşük değerlendirme gösterdi. Birlikte bu çalışmalar, AES geçerliliğinin yalnızca genel uyuma değil, modellerin özellikleri *nasıl* ağırlıklandırdığına ve bu ağırlıklandırmanın öğrenen alt gruplarında istikrarlı olup olmadığına bağlı olduğunu göstermektedir — bu da doğrudan [[assessment-validity]] ve [[bias-mitigation]] denetimini bilgilendirmektedir.

**Madde türü sınırları ve kompozisyon notlandırmanın sınırları.** Karışık biçimli bir üniversite sınavında, [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]], ChatGPT-5’in fakülte ile uyumunun nesnel maddelerde önemli ile neredeyse mükemmel arasında olduğunu (CCC 0,935–1,000), ancak açık uçlu yanıtlarda keskin biçimde düştüğünü buldu — kısa cevaplı için sıfıra yakın veya negatif, kompozisyon soruları için yalnızca 0,341–0,854 — ve yapılandırılmış bir rubriğin kompozisyon uyumunu tutarlı biçimde iyileştirmediğini gördü. Bu, AES geçerliliğini sınırlar: model akıcılığı iyi belirlenmiş maddelerde işe yarar, ancak kısmi kredi yanıtlarının bağlamsal yorumlamasının hâlâ [[human-in-the-loop-ai|insan yargısı]] lehine olduğu bütüncül kompozisyon puanlamasına taşınmaz.

**Teşhis uyumunda sorun türü sınırları.** [[automated-scoring-learning-diagnosis-mechanism-2026|Yao ve Fan (2026)]], revizyondan önce özgün yazma sorunlarını etiketlemek için DeepSeek-R1 kullandı ve etiketlerini üç döngü boyunca öğretmen teşhisiyle karşılaştırdı (ortalama F1 = 0,768, SD = 0,037). Uyum, sözcük seçimi (F1 = 0,824) gibi yerel olarak ipuçlanan sorunlarda en yüksek, sorunun bir iddia–kanıt ilişkisine dayandığı noktalarda en düşüktü (kaynak kullanımı ve kanıt, 0,579); böylece teşhis rolünde uyum, yalnızca modele veya istek metnine değil, sorun türüne bağlıdır.

**Çarpık bir rubrik dağılımı, toplu puanlama ölçütlerini yanıltıcı kılabilir.** Bir rubrik boyutunun otomatik değerlendirmesi, sürekli bir puan yerine tek taraflı bir etiket dağılımına sahip bir sınıflandırma görevi olabilir: 1.954 Macar öğrenci kompozisyonunda yansıma düzeyinin 0-3 olarak işaretlenmesiyle kompozisyonların %68’i düzey 3’te, %1,8’i düzey 0’da yer aldı; en iyi yüzeysel yapılandırma (Qwen3 gömülü temsilleriyle SMOTEBoost), doğruluk, F1 ve ROC-AUC üzerinden ortalanarak en iyi ince ayarlı transformere karşı 0,6872’ye karşılık 0,7176 genel puanına ulaştı — ancak bir RidgeClassifier yapılandırması, yalnızca 0,5162 doğrulukla 0,7131 ROC-AUC puanı aldı ve sınıf dengeleme her ölçütü düşürdü (doğruluk, uygulanmadığındaki 0,6672’den uygulandığındaki 0,6408’e düştü); bu nedenle yazarlar model seçimini hangi ölçütün önemli olduğu sorusu olarak okurlar; transformatörlerin yerini kazanmalarını sağlayan, toplu uyumdan ziyade azınlık sınıfına duyarlılıktır ([[reflection-level-classification-hungarian-essays-2026|Csibi vd., 2026]]).

**Yüksek riskli dağıtım kanıtları.** Gerçek bir yüksek riskli dağıtımdan alan kanıtı ([[human-in-the-loop-ai-scoring-national-assessment-2026|Uruguay’nin *Acredita EB*’si, 2024–2025; Curi vd.]]) 15 maddelik analitik bir İspanyolca rubriği boyunca istek metni ile tasarlanmış GPT-5’in eğitimli insan değerlendiricileriyle %60–80 uyuma ulaştığını göstermektedir; çoğu madde için insanlar arası değerlendirici uyumunun yaklaşık beş puan altında ve hiçbir zaman 15 puanın altında değil, neredeyse tüm maddelerde çalıştırma çalıştırma tutarlılığı %90’ın üzerinde. Sözcük dağarcığı, sözdizimi ve yazım en zayıf boyutlardı; yazım maddesi, jeton düzeyinde yazımın modelin en az istikrarlı olduğu nokta olması nedeniyle belirleyici bir dilbilgisi denetleyicisine (LanguageTool, %68 doğruluk, %100 tutarlılık) devredilmek zorunda kaldı. Bir sınav baskısı için oluşturulan istek metinleri, yalnızca konuya özgü düzenlemelerle bir sonraki baskıya aktarıldı ve YZ, insanlardan sistematik biçimde daha katıydı — aşırı puanlamak yerine düşük puanlama. AES tasarımı için ders şudur: istek metni tabanlı puanlama, ulusal bir sınavda bile insan uyumuna yaklaşabilir; kalan zayıflığı ise bütüncül [[writing-education|yazma]] kalitesi düzeyinden ziyade düşük düzeyli dil kuralları düzeyinde yer alır.

Jeton düzeyinde güven, olasılık ağırlıklı puanlama ve toplulaştırmanın (ensembling) her biri, ıraksak düşünme puanlamasında uyumu iyileştirdi — yığılan teknikler r = 0,846’ya ulaştı (RMSE = 0,4848) ve yalnızca yanıtların en az güvenilen %20’sinin insan incelemesine yönlendirilmesi, elle yapılan çabayı yaklaşık %80 azalttı ([[know-when-to-trust-ai-scoring-reliability-2026|Organisciak & Acar (2026)]]).

**İnsan [[benchmark]]’u ve bunun lisanslayabileceği ile lisanslayamadığı.** [[opraise-automated-marking-ai-assessment-2026|OpRaise çalışması]], LLM notlandırmanın rutin kullanıma hazır olup olmadığına dair bu bilgi tabanındaki en güçlü testtir ve yanıtı modele değil kıyaslamaya bağlıdır. Çalışma, üç öncü sistemi (Claude Opus 4.6, GPT-5.4, Gemini 3 Flash) — her biri rubrik özgüllüğünü, kalibrasyonu ve puanlama stratejisini çaprazlayan 27 istek metni yapılandırması altında — üç Birleşik Krallık [[higher-ed|üniversitesinden]] 125 öğrenciye ait 761 özgün Psikoloji kompozisyonunun moderasyonlu notlarına karşı karşılaştırdı. İnsan notları, akademik yargının toplumsal olarak kabul edilen standart olması nedeniyle temel doğruluk olarak benimsendi; yazarlar, insan değerlendiricilerin birbirleriyle yalnızca orta düzeyde anlaştığını belirtir — bu durum, YZ–insan uyumundan makul biçimde ne kadar güçlü olması istenebileceğini sınırlar. Bu kıyaslamaya karşılık, Birleşik Krallık derece bandındaki uyum **kuruma göre yüzde 35 ile 65** arasında değişti (Cambridge’de yüzde 63, Nottingham’da yüzde 53, Manchester Metropolitan’da yüzde 35) ve bunlar arasında aktarılmadı; bu nedenle raporun merkezi önerisi, her kurumun kendi [[assessment]] materyalleri üzerinde yerel doğrulamadır. Bu korpusun ötesine geçen iki bulgu vardır. Birincisi, güvenilirlik ve uyum ayrışır: her model neredeyse özdeş biçimde yeniden notladı (ICC 1,00, 1,00, 0,97) ve modeller insanlardan daha yakın biçimde birbiriyle anlaştı (üç model ICC 0,91), ancak üçü de başvuruların yalnızca **yüzde 56**’sında derece bandında anlaştı — öz tutarlılık geçerlilik değildir. İkincisi, YZ notları ölçeğin ortasına doğru sıkıştı (0,47–0,82 arası bir sıkışma puanı, YZ ile insanın ortalama olarak anlaştığı geçiş noktası üst 50’lerden düşük 60’lara kadar), YZ’yi tam olarak First’leri Upper Second’lardan ve geçenleri kalanlardan ayıran not sınırlarında en az doğru kıldı. Sözcük dağarcığı, bağlaçlar, cümle karmaşıklığı ve metin uzunluğu, YZ notlarını küçük ancak anlamlı etkilerle öngördü; insan notlarıyla ilişkileriyse genel olarak ihmal edilebilir düzeydeydi — bu, [[ai-scoring-language-bias-physics|dilsel yanlılık]] kaygısının doğrudan bir gösterimi ve test edilen hiçbir istek metni stratejisinin ortadan kaldırmadığı bir kaygıdır.

**AES bir yargıç olmaktan çok bir eğitim sinyali olarak.** Puanlama modelleri genellikle değerlendirici olarak çalışılır, ancak SWIM birini ödül işlevi olarak kullanır: [[swim-student-writing-simulation-2026|Do, Kontak ve Sachan (2026)]], çok nitelikli bir AES doğrulayıcısını dondurur ve bunu üretilen öğrenci kompozisyonlarına karşı puanlar; tahmin edilen nitelik profilini GRPO için kompozisyon başına yoğun bir ödüle (hedef profilden ortalama nitelik normalize edilmiş uzaklık) dönüştürür — bilerek Quadratic Weighted Kappa ölçütünün kendisini değil, çünkü QWK hedef-tahmin çiftlerinden oluşan bir topluluk üzerinde tanımlıdır ve örnek başına bir sinyal değildir; oysa kesin eşleşme ödülleri çok nitelikli ortamda çok seyrektir. Kazanımlar, politikanın hiç eğitilmediği bir DeBERTa puanlayıcıya ve yalnızca değerlendirme amaçlı bir doğrulayıcıya karşı yeniden kontrol edildi (SFT için 0,598’e karşı 0,479 ve 0,647’ye karşı 0,501); bu, gerçek yeterlilik kontrolünü ödül modeline uyumdan ayıran kontroldür. AES araştırmaları için bu, ikinci bir geçerlilik talebidir: eğitim hedefi olarak kullanılan bir puanlayıcı optimize edilmekte olduğundan, kendi nitelik ağırlıklandırması ve dil yanlılıkları üreteçnin öğrendiği her şeye yayılır — bu sayfanın başka yerlerinde belgelenmiş olan, aynı özellik ağırlıklandırma asimetrileri (dilbilgisi doğruluğu, sözcüksel olgunluk ve sözdizimsel karmaşıklık, modellerce insan değerlendiricilerden daha fazla ağırlıklandırılır), artık yalnızca notları değil eğitimi de şekillendirmektedir.

**Puanlama ve geri bildirim farklı yöntemler ister, bu nedenle bir sistem bunları ayırmalıdır.** [[wraft-automated-writing-evaluation-argumentative-2026|Labib vd. (2026)]], tek bir TOEFL argümantif kompozisyon sistemini tek bir modelin üç işi birden yapması yerine üç modül olarak inşa etti — puanlama, dilbilgisi ve mekanikler üzerine yüzeysel düzeyde geri bildirim, örgütlenme, tutarlılık ve argümantasyon üzerine derin düzeyde geri bildirim — ve bir modülü kazananın diğerinde kaybettiğini buldu: tescilli bir kümenin 480 kıyaslamalı kompozisyonundan 120’si üzerinde GPT-4o’nun denetimli ince ayarı, kalan 360’ta test edildiğinde 0-5 ölçeğinde 0,84 karesel ağırlıklı kappa ve 0,44 RMSE’ye ulaştı, Wang ve Gayed (2024) taban çizgisinin (QWK 0,78, RMSE 0,57) önündeydi; ancak aynı ince ayar, geri bildirim modülleri için kullanılamaz çıktı üretti, orada öğretmen onaylı yorumları üreten Claude 3.7’nin doğrudan istek metniyle kullanımı oldu.

### İlgili kavramlarla bağlantılar

AES, [[automated-assessment]], [[writing-education]] ve [[generative-ai]]’nin kesişiminde yer alır. Notlandırma yerine geri bildirim için kullanıldığında [[formative-assessment]]’a, yinelemeli yazma süreçlerine entegre edildiğinde [[feedback|Feedback Loop]]’a (geri bildirim döngüsüne), eğitimciler AES araçlarını anladığında ve kalibre ettiğinde [[ai-literacy]]’ye bağlanır. [[assessment-validity]] ve [[educational-measurement]] kavramları, AES puanlarının anlamlı ve adil olmasını güvence altına almak için esastır.

- **Uyum, hata ve melez bir puanlayıcının eklediği değer.** Küçük bir açık uçlu pazarlama yazısı korpusunda LLM, insan değerlendiricilerle mutlak uyumda hem belirleyici kuralları hem eşit ağırlıklı melezi geride bıraktı (ICC(2,1) 0,435’e karşı 0,266 ve 0,091); melez, yalnızca LLM’den anlamlı biçimde daha kötüydü; puan dağılımı ve tek bir neredeyse boş yanıt, bu tür tahminlerin korpus kompozisyonundan ne kadar güçlü biçimde etkilendiğini gösterdi ([[automated-scoring-marketing-posts-agreement-2026]]).

Açık sistemler de bu resmin parçasıdır: AiAWE, LoRA ile uyarlanmış Gemma-3-27B-it ile argümantif kompozisyonları puanlar; 360 değerlendirme kompozisyonunun %90,56’sında insan puanının ±0,5 bandında QWK 0,828 ve uyuma ulaşır — ve LoRA uyarlaması altında model ölçeğinin aşağı akış performansını güvenilir biçimde öngörmediğini bildirir ([[aiawe-automated-writing-evaluation]]).

## Bağlı kavramlar

- [[bias-mitigation]]
- [[equity-in-ai-education]]
- [[automated-assessment]]
- [[language-learning]]
- [[educational-measurement]]
- [[k-12]]
- [[prompt-engineering]]
- [[writing-education]]
- [[ai-literacy]]
- [[assessment-validity]]

## Bağlı makaleler

- [[reflection-level-classification-hungarian-essays-2026]] — Macar Öğrenci Kompozisyonlarında Otomatik Yansıma Düzeyi Sınıflandırması
- [[wraft-automated-writing-evaluation-argumentative-2026]] — WrAFT: Argümantif Kompozisyonlar için Modülerleştirilmiş Otomatik Yazma Değerlendirme Sistemi
- [[automated-essay-scoring-critical-thinking-physics-2026]] — Otomatik Kompozisyon Puanlama Yoluyla Eğitimde Yenilik: Lise Fizik Kompozisyonlarında Eleştirel Düşünmenin Değerlendirilmesi için Çok Boyutlu Bir Çerçeve
- [[opraise-automated-marking-ai-assessment-2026]] — OpRaise raporu: Üç Birleşik Krallık üniversitesinde 761 üniversite kompozisyonunun YZ ile notlandırılması
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — Ölçekli Yazma Değerlendirmesinde YZ Destekli Puanlama için İnsan-Devriginde Bir Çerçeve
- [[zhang-races-consistent-essay-scoring-llms-2026]] — RACES: LLM’lerle ödül hizalamalı tutarlı kompozisyon puanlaması
- [[ai-scoring-language-bias-physics]]
- [[choi-anchor-aes-prompting-2025]]
- [[icle-plus-plus-essay-scoring]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM’ler kompozisyonları insanlar gibi notlandırmaz (Mathew vd. 2026)
- [[psyscore-essay-scoring-zpd-feedback]]
- [[self-referential-l2-writing-llm-assessment]]
- [[aiawe-automated-writing-evaluation]]
- [[automated-scoring-learning-diagnosis-mechanism-2026]] — Otomatik puanlamadan öğrenme teşhisine: İngilizce yazmada YZ destekli biçimlendirici değerlendirmenin mekanizma çalışması
- [[llm-essay-scoring-feature-weighting-2026]] — LLM tabanlı kompozisyon puanlamasında özellik ağırlıklandırma kalıpları (Wang vd. 2026)
- [[llm-essay-assessment-framework-reliability-2026]] — Kompozisyon değerlendirmesinde LLM’lerin değerlendirilmesi için çerçeve (Liu, Ye & Yan 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[know-when-to-trust-ai-scoring-reliability-2026]] — Ne Zaman Güvenilir Bilinir: öz güven, ağırlıklı olasılık puanlaması ve toplulaştırma LLM puanlama uyumunu iyileştirir
- [[swim-student-writing-simulation-2026]] — bir yazı üreteci için yoğun eğitim ödülü olarak kullanılan dondurulmuş bir AES doğrulayıcısı
