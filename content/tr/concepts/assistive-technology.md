---
title: Yardımcı Teknoloji
created: "2026-10-14T21:30:00-04:00"
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning]
connected_faqs: [ai-disabled-neurodivergent-learners]
level: [special education]
confidence: high
reviewed_by: [editor]
translation_of: concepts/assistive-technology
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

> **Yardımcı Teknoloji** — engelli bireylerin algılamasına, çalıştırmasına, iletişim kurmasına, öğrenme ve günlük yaşama katılmasına yardımcı olan cihazlar, yazılımlar ve hizmetler. [[ai-education|Eğitimde yapay zeka]] bağlamında yardımcı teknoloji; ekran okuyucuları, konuşmadan metne ve metinden konuşmaya dönüştürme, altyazı olanağı, braille ve dokunsal çıktılar, işaret dili araçları ile içeriği ve etkileşimi bireysel ihtiyaçlara uyarlayan, giderek daha yaygın hale gelen YZ destekli düzenlemeleri kapsar.

## Düşünülmesi Gerekenler

- Yardımcı teknoloji, erişilebilirliğin araç katmanıdır — bireylerin erişim boşluklarını kapatmak için kullandığı somut cihazlar ve yazılımlar. Okumaya başlamadan önce erişilebilirlik ve yardımcı teknolojiyi aynı şey olarak mı düşünüyordunuz? İkisini ayrı kavramlar olarak ele almak, öğrenme ortamlarını tasarlama biçiminizi nasıl değiştirebilir?
- [[research-methods-aied|Araştırmalar]], YZ tabanlı müdahalelerin engelli öğrencilerin [[learning-gains|öğrenme çıktıları]] üzerinde orta düzeyde olumlu bir etki yarattığını (g = 0,588) bulmaktadır. Ancak sayfa, erişim araçlarının tek başına kapsayıcı öğretimi ya da öğrenen özerkliğini garanti etmediği konusunda uyarıyor. Bir öğrenciye erişim imkânı sağlamak ile onu gerçekten kapsamak arasındaki fark nedir?
- Sayfa, ABD’nin YZ politika belgelerinin özgün öğrenme güçlüğü olan öğrencilere yönelik yardımcı teknoloji ve düzenlemeleri büyük ölçüde ele almadığını belirtmektedir. Düzenlemelerin neden bu kadar kolay bir şekilde YZ politikanın boşluklarından düştüğünü düşünüyorsunuz — ve bu durumda kim kaybeder?
- [[generative-ai|Üretken YZ]], otomatik altyazı oluşturabilir, metni basitleştirebilir ve dokunsal alternatifler üretebilir; böylece uyarlama maliyetini düşürür. Ancak sayfa, YZ tarafından üretilen alternatiflerin kalitesini [[pedagogy|pedagojik]] doğruluk açısından değerlendirmeniz konusunda sizi uyarır. Erişilebilir kılınması amaçlanan içeriği yanlış temsil eden bir "basitleştirilmiş" ya da "dokunsal" sürüm ne gibi sorunlara yol açabilir?
- YZ, yardımcı araçları ses öncelikli öğrenme arkadaşlarından dokunsal grafiklere ve işaret dili araçlarına kadar genişletiyor. Bir eğitimci veya tasarımcı olarak, ilk olarak hangi öğrencinin hangi özgün engelini YZ ile ele almak istersiniz — ve bir araç seçmeden önce o öğrenci hakkında ne bilmeniz gerekir?

## Giriş

Yardımcı teknoloji, [[accessibility]]’in somut *araç katmanı*dır. Erişilebilirlik, bir ortamın tasarım niteliğiyken (herkes erişebilir mi?), yardımcı teknoloji bireylerin erişim boşluklarını kapatmak için kullandığı özgün ekipman ve yazılımdır. [[special-education]] ve [[inclusive-learning]] için temeldir — özgün öğrenme güçlüğü, görme veya işitme engelli ve motor zorlukları olan öğrenciler, [[curriculum-design|müfredata]] erişmek için yardımcı araçlara dayanır. ABD’de, [[educational-policy-ai|Yardımcı Teknoloji Yasası (2004)]] ve Individuals with Disabilities Education Improvement Act (IDEA, 2004), engelli öğrencilere bu araçların sağlanması için hukuki dayanak oluşturur.

### Temel araştırma temaları

**YZ yardımcı teknolojiyi genişletiyor.** Üretken YZ ve LLM’ler yardımcı araçları dönüştürüyor — [[text-simplification-its|LLM tabanlı metin basitleştirme]], [[intelligent-tutoring]]’te okuma düzeyini uyarlıyor; [[kutti-ai-voice-first-learning-companion|ses öncelikli YZ]], görme engelli ve az gören öğrenciler için görsel bağımlılığı ortadan kaldırıyor; [[tactile-statistical-graphs-accessibility|YZ tarafından üretilen dokunsal grafikler]] görsel verileri dokunulabilir çıktıya dönüştürüyor. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang vd.]]**, YZ tabanlı müdahalelerin (robotlar, yazılımlar, akıllı sanal gerçeklik) engelli öğrencilerin öğrenme çıktıları üzerinde orta düzeyde olumlu bir etki yarattığını (g = 0,588) buluyor. **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif vd. (2026)]]**, Filistin’deki 21 görme engelli lisans öğrencisine ilişkin [[qualitative-research|nitel]] bir vaka çalışması ekliyor; çalışma, Üretken YZ’nin hızı, içeriği ve sunumu uyarlayan, karmaşık metinleri basitleştiren ve içeriği modaliteler arasında dönüştüren bir yardımcı katman işlevi gördüğünü göstermektedir — öğrenenler bunu tutarlı bir biçimde öğretmenlerin yerini alan değil, onları tamamlayan bir unsur olarak görmektedir.

**Politika ve sağlama.** **[[shin-ai-policies-sld-2026|Shin vd.]]**, ABD’nin YZ politika belgelerinin özgün öğrenme güçlüğü olan öğrencilere yönelik yardımcı teknoloji ve düzenlemeleri büyük ölçüde ele almadığını belgelemekte; Yardımcı Teknoloji Yasası ve IDEA’ya dayalı politika rehberliği çağrısında bulunmaktadır.

**YZ’nin disleksi alanında tespit, destek ve [[personalized-learning|kişiselleştirilmiş öğrenme]] boyunca kullanımı.** 2026 yılında yayımlanan disiplinler arası bir [[meta-analysis-systematic-review|sistematik derleme]] (Dabaghi, D’Urso & Sciarrone, PRISMA rehberli, 2018–2024, n=72), disleksi olan öğrencilere YZ desteğini haritalandırarak YZ’nin tespit, yardımcı destek ve kişiselleştirilmiş öğrenme için kullanıldığını; ancak bu eğilimlerin bütünleşmiş değil, teknolojik olanaktan ziyade yönlendirilerek paralel olarak evrildiğini bulmaktadır. Makine öğrenimi tabanlı yardım-eğitim araçları beş alana (özgün uygulamalar, [[student-engagement|etkileşim]], kişiselleştirme, öneri, genel destek) ayrılmaktadır; ancak ekolojik geçerlilik ve sınıf içi pratik uygulamayı göz ardı ederken teknik performans ve sınıflandırma doğruluğunu öne çıkarmaktadır. Tespit araştırmaları (EEG, göz takibi, makine öğrenimi modelleri) erken müdahale için teşhis vaadi sunmakta; ancak çoğu zaman özgün ekipman ve kontrollü ortamlar gerektirerek tipik okul ortamlarında ölçeklenebilirliği ve erişilebilirliği sınırlamaktadır. Açık zorluklar arasında sınırlı deneysel doğrulama, ölçeklenebilirlik, hassas öğrenci verileriyle ilgili [[ethics]]/gizlilik kaygıları, sınırlı [[teacher-role|öğretmen]] desteği ve eğitimi ile dilsel/kültürel engeller (araştırmaların çoğu İngilizce konuşan toplulukları hedef almaktadır) yer alır — bu, yardımcı araçların erişim boşluklarını gerçekten kapatabilmesi için doğrulanmış, ölçeklenebilir ve etik temellere dayanması gerektiğini hatırlatmaktadır.

**Yardımcı araçların sınırları.** Yardımcı teknoloji erişimi mümkün kılar, ancak tek başına kapsayıcı öğretimi veya öğrenen [[agency]]’sini garanti etmez. **[[genai-minoritized-knowledges-disability|Eleştirel araştırmalar]]** ve engelli öğrenciler için [[agency|etken]] rollerin savunulması, erişimin anlamlı katılımla eşleşmesi gerektiğini hatırlatmaktadır.

Nörodivergent öğrenciler için dijital yardımcı [[ai-technologies|teknolojilerin]] 2026 yılında yapılan bir kapsam derlemesi, [[neurodiversity|nörodivergent]] öğrenciler için [[higher-ed|yükseköğretim]] ortamındaki on yıllık üretimi haritalandırmaktadır: beş veri tabanında 766 kayıt taranmış, 40 çalışma dahil edilmiş, bunların 15’inde YZ tabanlı araçlar, 11’inde [[virtual-and-augmented-reality|sanal gerçeklik]] bulunmuştur. Örgütleyici bulgusu, araçların hedeflediği şey ile engellerin bulunduğu yer arasındaki uyuşmazlıktır — 27 çalışma doğrudan öğrenmeyi desteklemiş, 13’ü okuma ve yazmayı, 12’si çalışma yönetimini ele almış; dikkat (n = 4) ve sosyal iletişim (n = 5) nispeten ihmal edilmiş, yalnızca 6 çalışma birden fazla engeli ele almıştır ([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel vd., 2026]]).

## Uygulama için çıkarımlar

- **Aracı öğrenciye ve göreve uygun hale getirin.** Ekran okuyucuları, altyazılar, konuşma ve dokunsal çıktıların her biri farklı engelleri ele alır — seçimi bireyin ihtiyaçlarına ve içerik biçimine göre yapın.
- **Yardımcı uyarlamaların maliyetini düşürmek için YZ’den yararlanın.** YZ otomatik altyazı oluşturabilir, metni basitleştirebilir ve alternatifler üretebilir; ancak çıktı kalitesini pedagojik doğruluk açısından değerlendirin.
- **Sağlamayı politikaya dayandırın.** YZ araçları tedarik ederken veya geliştirirken Yardımcı Teknoloji Yasası, IDEA ve WCAG’a başvurun.
- **Desteğin hangi işlevi gördüğünü belirtin — ve değerlendirmeyi bu işleve göre yapın.** [[vasileiou-ai-cognitive-scaffolding-executive-functioning-sen-2026|Vasileiou vd. (2026)]], telafi edilmesini (erişim ve katılımla değerlendirilir), iskelelemeyi (destekli kararlar) ve gelişimi (azaltma veya aktarımdan sonra strateji kullanımı) birbirinden ayırmaktadır. Bu sayfanın uyarısına yönelik bir kural daha eklemektedirler: erişilebilirlik desteği telafi değildir — bir aracın uyarlama, strateji öğretimi mi yoksa geçici pratik desteği mi olduğu "öğrenme planında belirtilmelidir".

## Bağlı kavramlar

- [[accessibility]] — yardımcı teknolojinin işlevselleştirdiği tasarım niteliği
- [[inclusive-learning]]
- [[special-education]]
- [[universal-design-for-learning]]
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[learning-design]]
- [[speech-and-voice-technologies]]

## Bağlı makaleler

- [[shin-ai-policies-sld-2026]] — Özgün öğrenme güçlüğü olan öğrenciler için YZ politikaları ve düzenlemeler
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Engelli öğrenciler için YZ müdahalelerinin meta-analizi
- [[kutti-ai-voice-first-learning-companion]] — Görme engelli çocuklar için ses öncelikli YZ
- [[tactile-statistical-graphs-accessibility]] — YZ tarafından üretilen dokunsal istatistik grafikleri
- [[text-simplification-its]] — Akıllı öğretim sistemleri için LLM tabanlı metin basitleştirme
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — İşitme engelli/ağır işitme engelli öğrenenler için LLM soru üretimi
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX ile matematik erişimli fizik video dökümü
- [[khlaif-assistive-genai-visually-impaired-2026]] — Görme engelli öğrenenler için yardımcı Üretken YZ
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Üretken YZ, sanal gerçeklik ve ötesi: Yükseköğretimde nörodivergent öğrenciler için dijital yardımcı teknolojilerin kapsam derlemesi
