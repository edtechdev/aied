---
connected_resources: [playlab]
title: "Eğitim Teknolojisi Geliştiricileri"
created: "2026-10-14T21:50:00-04:00"
type: concept
foundations: [educational-development, learning-design]
technology: [learning-analytics, edtech-platform, open-source]
audience: [instructional designers, software developers, learning analytics designers, institutions, educational technology developers]
page_kind: [evaluation]
confidence: high
methods: [design-based-research]
translation_of: concepts/educational-technology-developers
source_updated: "2026-10-26T06:20:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Eğitim Teknolojisi Geliştiricileri** — eğitim teknolojisi inşa eden kişiler ve kuruluşlar: ürün tasarımcıları, yazılım geliştiriciler, öğrenme mühendisleri, öğrenme analitiği tasarımcıları ve bunların çalıştığı eğitim teknolojisi şirketleri, üniversite laboratuvarları ve [[open-source]] projeler. Eğitimde YZ bağlamında bu, bir model yeteneğini bir öğretmenin veya öğrenenin fiilen kullanabileceği bir şeye dönüştüren roldür ve sonraki hiçbir aşamanın geri alamayacağı kararları taşır: bir tasarım iddiasının dayandığı kanıt, bir [[learning-analytics|analytics]] hattının veya bir [[intelligent-tutoring|tutoring]] sisteminin kurumun kendi lisanslı materyaline ne ölçüde dayandırılması, öğretmenlerin ve öğrenenlerin tasarıma dâhil edilip edilmemesi, varsayılan ayarlara hangi [[learning-design|instructional design]] varsayımlarının gömüldüğü ve finansman durduktan sonra ürüne ne olduğu. Bilgi tabanının sistem raporları ve uygulamaya alma çalışmaları boyunca tekrarlayan ders şudur: bağlayıcı kısıt genellikle model değil, uygulama bağlamıdır.

## Dikkate Alınması Gereken Sorular

- "YZ öğrenmeyi geliştirir" iddiasını taşıyan meta analizler, [[oneill-presumed-effective-meta-analysis-2026]] denetiminin bulduğu gibi geçersiz bir yönteme dayanıyorsa, bir ürün yol haritası fiilen hangi kanıta dayanabilir?
- Bir algoritmanın açıklamaları, öznitelik önem düzeylerini ortaya koymaktan daha fazla tasarım çabasına mal olsa bile öğretmenin müfredat dilinde mi yazılmalıdır — ve bu çabanın bedelini kim öder?
- Bir araç öğrencilerle birlikte tasarlandığında kimin kararı belirleyicidir: ölçülen öğrenme kazanımları mı, yoksa aracın sürdürülmesini isteyen %96'lık kesim mi?
- Yerinde (on-premise), açık lisanslı dağıtım teknik bir tercih mi yoksa yönetişimle ilgili bir tercih midir — ve şeffaflık gereksinimleri satın alma koşulu haline mi gelmelidir?
- Bir hibit sona erdiğinde bir geliştirici kuruma ne borçludur: sürdürülen bir ürün mü, çatallanabilir bir depo mu, yoksa sistemin hiçbir zaman doğrulanmış bir müdahale olmadığını söyleyen dürüst bir açıklama mı?

## Giriş

Geliştirici, platformun bir alt düzeyinde yer alır. [[edtech-platform]] sayfası, bir okula veya üniversiteye yerleştikten sonra hâline gelen konuşlanmış sistemi ve onun sahibi olduğu paydaş durumunu tanımlar; bu sayfa ise o sistemin ne yapacağına karar veren kişilerle ilgilidir. Ayrım önemlidir, çünkü platform düzeyindeki bulgular — düşük benimsenme, eşitlik sorunları, tedarik sürtünmesi — genellikle öğrenenlerle hiç karşılaşmamış biri tarafından daha önce yapılmış tasarım tercihlerinin sonuçlarıdır.

Rol, komşularından da farklıdır. [[learning-design]] ve [[curriculum-design]], bilinen bir öğrenci grubu için bir kurs tasarlar; bir teknoloji geliştirici ise hiç karşılaşmadığı kişiler tarafından öğretilecek birçok kursun kullanacağı bir ürün tasarlar — bu nedenle varsayılanlar, yapılandırılabilirlik ve belgelendirme pedagojik ağırlık taşır. [[educational-development]], bir kurumun öğretim personelini içeriden destekler; geliştiriciler dışında veya yanında yer alır ve o personelin daha sonra benimsemesi istenecek araçları sağlar. [[design-based-research]] ise bu geliştiricilerden giderek artan biçimde istenen kanıt standardıdır: yinelemeli, bağlama dayalı ve kendi sınırlılıklarıyla birlikte raporlanan.

### Eğitimde YZ'yi kim geliştirir

**Kamuya açık altyapı geliştiren araştırma laboratuvarları.** [[oatutor-open-source-adaptive-tutor-2023|OATutor]], UC Berkeley'de [[intelligent-tutoring|ITS]] ilkeleri üzerine kurulu ilk tamamen açık kaynaklı uyarlanabilir özel ders sistemi olarak geliştirilmiştir: Creative Commons bir cebir kütüphanesi, [[knowledge-tracing|Bayesian Knowledge Tracing]] ile ustalık tahmini, A/B test altyapısı ve LTI desteğine sahip MIT lisanslı bir kod tabanı. Varoluş nedeni bir tasarım kararıdır — tescilli platformlar [[adaptive-learning]] araştırmasını kapalı sistemlerle sınırlamıştı — ve içerik üretim yolu başka bir tasarım kararıdır: 16 içerik üreticisi, 2,27 saatlik eğitimden sonra altı ayda bir Üniversite Cebiri kursu üretmiştir.

**Model geliştiriciler.** [[learnlm-improving-gemini-learning]] çalışması, bir modeli öğrenme için geliştirmeyi [[prompt-engineering|pedagogical instruction following]] olarak yeniden çerçevelemektedir: davranış, [[pedagogy]]'nin tek bir sabit tanımı yerine sistem talimatları yoluyla uygulama başına belirlenir ve uzman değerlendiriciler bunu GPT-4o'ya göre %31, temel Gemini'ye göre %13 daha yüksek oranda tercih etmiştir. Pratik çıkarım, pedagojinin küresel olarak tanımlanamayacak kadar bağlama bağlı olmasıdır; kullanışlı yetenek, bir geliştiricinin yazdığı talimatlara uyma yetisidir ve bu, tek turlu [[benchmark|benchmarks]] yerine konuşma düzeyinde senaryolarla ölçülmelidir.

**Bilgi modeli mimarları.** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] çalışması, [[personalized-learning]] için statik bir ontolojiden daha fazlasının gerekli olduğunu savunmakta; klasik dört modelli ITS mimarisinin yerine eşlenmiş ontolojiler sistemi ile kurallar ve analitik önermekte ve her yeni yapının maliyetini düşürmeyi amaçlayan sekiz sınıftan oluşan bir yeniden kullanım çerçevesi sunmaktadır.

**Altyapı ve ölçüm mühendisleri.** [[a4l-analytics-pipeline]] çalışması, üç eğitim YZ asistanı üzerinde doğrulanmış, bir alanda oluşturulan yöntemlerin başka bir alana da uzandığı modüler, alan agnostik bir öğrenen etkileşim veri hattı tanımlamaktadır — tek bir kursa özel gösterge paneli yerine yeniden kullanılabilir bir [[learning-analytics]] altyapısı. [[stanbkt-bayesian-knowledge-tracing]] çalışması tamamlayıcı bir durumu göstermektedir: bir Bayesçi yeniden uyarlaması, yerleşik nokta tahmini aracıyla (AUC 0.711) *özdeş* tahmin üretmiş; yalnızca maliyette ve bir koşul karşılaştırmasını yorumlanabilir kılan güvenilirlik aralıklarında farklılık göstermiştir.

**Kurumlar içindeki geliştiriciler.** [[moodle-ai-tutoring-deep-learning]] çalışması, BBÜ destekli özel dersi bağımsız bir araç olarak sunmak yerine mevcut bir LMS'e gömer; böylece, ITS literatürünün sistemlerin pratikte başarısız olmasının nedenlerinden biri olarak adlandırdığı benimsenme eşiğini düşürür. [[savvy-student-attention-video-learning]] çalışması, çok kipli dikkat sinyallerini öğretmenlerin bir videoyu yayımlamadan önce okuyabileceği bir arayüze dönüştürür. [[instructional-agents-multi-agent-course-gen|Instructional Agents]], ADDIE'nin ilk üç aşamasını role özgelleşmiş ajanlarla otomatikleştirir ve eleme çalışması bir tasarım dersidir: tek ajanlı temel çalışma en kötü puanı almış, Full Co-Pilot Autonomous'u 0,5–0,9 puanla geçmiş ve arka uçlar arasında kalite farkı olmadığından en ucuzu varsayılan olmuştur.

### Bir tasarım iddiası neye dayanabilir

**Kanıt tabanı göründüğünden daha zayıftır.** [[oneill-presumed-effective-meta-analysis-2026]] çalışması, YZ'nin eğitimi geliştirdiğini iddia eden 14 meta analizi denetlemiş ve hiçbirinin iddiasını gerekçelendirmediğini bulmuştur: ikisi dışında tümü müdahaleyi bir araç olarak tanımlamış, incelenen 59 temel çalışmanın %61'inin geçerlilik sorunları bulunmuş, heterojenlik rapor edilen her yerde yüksek olmuş, moderatör analizleri yetersiz güce sahip imiş ve yayın yanlılığı hiçbir zaman geçerli biçimde değerlendirilmemiştir. Geri çekilen bir meta analiz, örneklenen sonraki makalelerin %60'i tarafından hâlâ yetkili bir kaynak olarak alıntılanmıştır. Bir geliştirici için "YZ öğrenmeyi geliştirir" ifadesi, bir tasarım girdisi değil, ürün kategorisi iddiasıdır.

**Yalnızca doğruluğu değil, belirsizliği ve tam maliyeti raporla.** [[stanbkt-bayesian-knowledge-tracing|StanBKT]] için Bayesçi çıkarım, tahminde hiçbir şey kazandırmaz; hangi etkilerin güvenilir olduğunu söyleyebilme açısından ise her şeyi kazandırır. [[shen-sustainable-ai-knowledge-base-cs-education-2026]] çalışması, geri çağırma elemelerini, nicelemeye duyarlı ince ayarı, VRAM'ı, sorgu başına enerjiyi ve alıntılanan açık kaynaklara karşı ölçülen halüsinasyonu raporlar — yazarların sistemin doğrulanmış bir özel ders aracı olmadığına dair kendi uyarısıyla birlikte. İşte bu, bir uygulama iddiasını denetlenebilir kılan [[ai-ed-evaluation|evaluation]] disiplinidir.

### Öğretmenler ve öğrenenlerle birlikte tasarım

**Açıklamalar öğretmenin dilini konuşmalıdır.** [[xai-teachers-trust-edtech-recommendations-2026]] çalışması, bir makine öğrenimi öneri aracı üzerinde 41 kimya öğretmeniyle öznel içi bir deney yürütmüştür: anlaşılabilirlik, [[trust]] ve benimsenme olumlu yönde ilişkiliymiş ve müfredat dilinde verilen alan kaynaklı açıklamalar, öznitelik önem düzeyi açıklamalarına göre belirgin biçimde daha yüksek anlaşılabilirlik, öğrenilmiş [[trust-calibration|trust]] ve benimsenme üretmiştir. Güven aynı zamanda dinamikmiş — bazı öğretmenler bunu yalnızca sınıf deneyiminin çözeceğini söylemiştir — ve benimsenme, pedagojik uyum ile iş yükünün azalmasına bağlı imiş.

**İnanılırlık ipuçları doğruluğun kanıtı değildir.** Bir [[agentic-ai|çok ajanlı]] tartışmaya alıntı ve otorite sinyalleri eklemek, doğru bir yargıdan YZ'nin konumu lehine vazgeçmeyi %15,0'den %31,8'e çıkarmıştır; bu nedenle kaynak (provenance) kullanım noktasında denetlenebilir olmalıdır ([[tuo-armada-multi-agent-debate-overreliance-2026|Tuo vd., 2026]]).

**Kurumsal ölçekte birlikte tasarım.** Open University'deki [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|AIDA]], 18 ay boyunca 498 öğrenci ve 20 personelle yürütülen altı tasarım temelli çalışmayla geliştirilmiştir. Başlangıçta yaklaşık %20'si kuşkuluymuş; uygulamalı kullanımdan sonra %96'sı aracın sürdürülmesini istemiş ve keşif amaçlı bir RKT iki kat daha uzun kullanım süresi bulmuş, ancak öğrenme süreci verilerinde anlamlı farklılık görmemiştir. İmkân veren etkenler örgütselmiş — üst düzey destek, birimler arası iş birliği, veriyle bilgilenen yineleme — sistem düşüncesi kapasitesinde ise boşluklar bulunmuştur.

### Tedarik, açıklık ve finansman durduktan sonra

[[shen-sustainable-ai-knowledge-base-cs-education-2026]] çalışması, bir tedarik kararının ihtiyaç duyduğu girdileri sağlamaktadır: 12 GB VRAM'lık bir donanım tabanı, 7B sınıfı bir model için bir doğruluk tavanı, sorgu başına enerji ve bir tercih sıralaması — önce geri çağırma (olmadan model %52,3 ile bir TF-IDF taban çizgisinin altında kalmış), sonra ince ayar, sonra nicelemeye duyarlı sıkıştırma; açık lisanslama, bir derlemi yerinde sunmanın ön koşuludur. [[reclaiming-epistemic-agency-co-agency-2026]] çalışması aynı kararı yönetişim olarak çerçevelemektedir: şeffaflık gereksinimleri, satın almayı epistemolojik bir yönetişime dönüştürür; itiraz edilebilirlik ve kaynak (provenance) koşullar haline gelir ve kapasitesi en az olan bölgeler en yüksek çıtayla karşı karşıya kalır. [[credential-cognitive-stewardship-ai-assessment]] çalışması, denetlenen 30 politika paketinden yalnızca %29'unda satıcı yönetişiminin yer aldığını eklemektedir; bu paketler, hangi öğrenme kanıtının kaldığını belirtmekten çok daha kolay biçimde YZ'nin ne yapabileceğini belirtmiştir. [[genai-mindtool-generative-learning]] çalışması tasarım sorusunu ortaya koyar — ürün, aracın *yanında* öğrenmeyi mi teşvik eder yoksa bilişsel işi mi devreder — ve [[vocabulary-difficulty-prediction]] çalışması bu değiş tokuşu küçük ölçekte gösterir: en yüksek puanı alan kara kutu modeli (r > 0,91), yorumlanabilir olandan (r > 0,77) daha az açıklanabilirmiş.

## Yaygın yanlış anlamalar

- **“Meta-analizler ürün iddiasını destekliyor.”** Desteklemiyorlar ve nedeni derece meselesi değil, özgül bir nedendir. YZ’nin eğitimi iyileştirdiğini iddia eden **14 meta-analizin** denetimi, **hiçbirinin iddialarını gerekçelendirmediğini** buldu (ikisi dışında tümü yöntem açısından başarısız oldu) ve **geri çekilmiş bir meta-analiz, örneklenen sonraki makalelerin %60’ı tarafından hâlâ otoriter sayılarak atıflandı**. Geri çekilme düzeltmeden daha hızlı yayıldı; bu, bir yol haritasının atıf yapma olasılığı yüksek olan literatürünün, alanın çoktan geri çektiği iddiaları içerdiği anlamına gelir.
- **“Atıf ve kaynak bilgisi eklemek bir sistemi daha güvenilir kılar.”** [[agentic-ai|Çok ajanlı]] bir tartışma ortamında, YZ’nin konumuna atıf ve otorite sinyalleri eklemek **doğru yargıdan vazgeçmeyi %15,0’dan %31,8’e çıkardı**. Kaynak bilgisi nötr bilgi değildi: yanlış yanıtı daha ikna edici kıldı. Güvenilirlik ipuçlarının doğruluğun kanıtı olması gerekir, bir iddianın çevresindeki süsleme değil.
- **“Kullanıcılarla birlikte tasarım, tasarımı doğrular.”** Birlikte tasarım, etkililikten farklı bir soruyu yanıtlar. Bir araç öğrencilerle birlikte tasarlandığında ve **%96’sı korunmasını istediğini söylediğinde**, bu kabul edilebilirliğe ilişkin bir bulgudur. Öğrenmenin iyileşip iyileşmediği ayrı bir ölçümdür ve ikisi, hiçbiri yanlış olmaksızın zıt yönleri gösterebilir.
- **“Ajanlar bir sonraki yetenek katmanıdır.”** [[instructional-agents-multi-agent-course-gen|Instructional Agents]] ablasyonu yararlı karşı örnektir: tek ajanlı temel yapılandırma **en kötü** puanı aldı ve Full Co-Pilot yapılandırması **Otonom** yapılandırmayı geçti. Daha fazla özerklik daha iyi tasarım değildi; yardımcı pilot düzenlemesi öyleydi. Mimari seçimler, yeteneğin artmasıyla iyileşecekleri varsayılmak yerine değerlendirilmelidir.

## Uygulama için çıkarımlar

**Geliştiriciler ve tasarımcılar için**

- Bir tasarım iddiasını, atıf yaptığınız bir etki büyüklüğüne değil, okuduğunuz bir çalışmaya dayandırın. Yöntem açısından başarısız olan 14 denetlenmiş meta-analiz ve hâlâ dolaşımda olan geri çekilmiş bir çalışma varken atıf sayısı bir geçerlilik sinyali değildir.
- Özerkliği bir yükseltme olarak sunmak yerine bir değişken olarak sınayın. Ablasyonu çalıştırın: tek ajan, yardımcı pilot, otonom. Instructional Agents sonucu yardımcı pilot yapılandırmasının kazandığını gösterdi; dolayısıyla varsayılan, en yetenekli görünen değil en iyi ölçülen olmalıdır.
- Kendi değerlendirme planınızda kabul edilebilirliği etkililikten ayırın. Yüksek bir koruma isteği sayısı gerçek bir bulgudur ve öğrenmenin kanıtı değildir; bir raporda ikisini birbirine karıştırmak, zayıf bir ürünün güçlü görünmesinin yoludur.
- Güvenilirlik ipuçlarını ölçülmüş etkisi olan bir manipülasyon olarak ele alın. Atıf eklemek doğru bir yanıttan vazgeçmeyi %15,0’dan %31,8’e taşıdı; dolayısıyla kaynak bilgisini öne çıkarmak kullanıcı yargısını değiştirir. Bunun bilgilendirdiğini varsaymak yerine bunun için tasarım yapın.

**Bir aracı değerlendiren öğretim elemanları için**

- Aracın, kullanmayı amaçladığınız görev üzerinde nasıl değerlendirildiğini ve değerlendirmenin yardımcı pilot mu yoksa otonom mu olduğunu sorun. İkisi birbirinin yerine geçmez.
- Değerlendirmenin ne zaman yapıldığını sorun. Belirtilmemiş bir model sürümüne bağlı yetenek iddiaları hızla eskır ve çalıştırmayacağınız bir sistemi tanımlar.

## Bağlı kavramlar

- [[edtech-platform]]
- [[learning-design]]
- [[curriculum-design]]
- [[design-based-research]]
- [[educational-development]]
- [[open-source]]
- [[learning-analytics]]
- [[intelligent-tutoring]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[teacher-ai-competency]]
- [[technology-acceptance-model]]
- [[universal-design-for-learning]]
- [[assessment-validity]]
- [[ai-ed-evaluation]]
- [[governance]]
- [[educational-policy-ai]]
- [[sustainability]]
- [[privacy]]

## Bağlı makaleler

- [[oatutor-open-source-adaptive-tutor-2023]]
- [[moodle-ai-tutoring-deep-learning]]
- [[learnlm-improving-gemini-learning]]
- [[savvy-student-attention-video-learning]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[oneill-presumed-effective-meta-analysis-2026]]
- [[a4l-analytics-pipeline]]
- [[stanbkt-bayesian-knowledge-tracing]]
- [[instructional-agents-multi-agent-course-gen]]
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]]
- [[credential-cognitive-stewardship-ai-assessment]]
- [[reclaiming-epistemic-agency-co-agency-2026]]
- [[genai-mindtool-generative-learning]]
- [[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of]]
- [[vocabulary-difficulty-prediction]]
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]]
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — İnanılırlık ipuçları hatalı YZ tavsiyesine uymayı artırdı; kaynağı kullanım noktasında doğrulayın