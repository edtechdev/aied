---
title: Oyun Temelli Öğrenme
created: "2026-10-14T22:10:00-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
reviewed_by: [editor]
translation_of: concepts/game-based-learning
source_updated: "2026-09-30T12:53:22-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Oyun temelli öğrenme (GBL)** — öğrenmenin ortamı ve bağlamı olarak oyunların kendilerinin (dijital veya fiziksel) kullanılması; oyunun mekanikleri, zorlukları ve ilerleyişi eğitim içeriğini taşır. Öğrenenler oynayarak öğrenir. Benzer biçimde, **oyunlaştırma**, oyun tasarımı öğelerini (puan, nişan, düzey, liderlik tablosu) oyun olmayan öğrenme etkinliklerine uygular, onları tam bir oyuna dönüştürmeden. YZ ve [[educational-robotics|robotik]] eğitiminde, her iki yaklaşım da teknik içeriği çekici ve güdüleyici kılmak için kullanılır.

## Dikkate Alınması Gereken Sorular

- Oyun temelli öğrenme, öğrenmenin ortamı olarak oyunun kendisini kullanır — oynayarak öğrenirsiniz. Oyunlaştırma ise puan, nişan ve düzeyleri yalnızca oyun olmayan bir etkinliğin üzerine yerleştirir. Bu ikisinin gerçek öğrenme üzerindeki etkisinin, kısa vadeli etkileşime kıyasla ne kadar farklı olduğunu düşünüyorsunuz?
- Karşılaştırmalı bir derleme, oyun temelli öğrenmenin gayriresmî ortamlarda daha yaygın olduğunu, oyunlaştırmanın ise resmî sınıflara hâkim olduğunu ve proje temelli öğrenmeyi desteklediğini buldu. Her yaklaşımın neden farklı bir yuvayı bulduğunu düşünüyorsunuz — ve bu, her birinin nerede en iyi işlediği hakkında bize ne anlatıyor?
- Oyunlaştırma, öz-belirleme kuramına dayanır — [[agency|özerklik]], yetkinlik, ilişkililik. Güdülenme bu ihtiyaçları karşılamaksa, bir puan ve nişan sistemi neden algılanan çaba ve dikkatı nasıl şekillendirdiğine bağlı olarak başarılı veya başarısız olabilir?
- [[research-methods-aied|Araştırma]], oyunsu ve YZ destekli tasarımların güdüleyici yararının, oyunlaştırmadan çok algılanan iş yükünü ve dikkati nasıl şekillendirdiklerine bağlı olduğunu düşündürüyor. Bir oyunun veya nişanların öğrenmeyi gerçekten iyileştirmeden etkileşimi artırdığını — ya da tam tersini — ne zaman gördünüz?

## Giriş

GBL, [[motivation]], [[student-engagement]] ve [[active-learning]] kuramlarına dayanır: oyunlar içsel güdülenme, anında geri bildirim ve özgün problem bağlamları sağlar. [[simulation]], [[project-based-learning]] ve [[educational-robotics]] ile örtüşür. GBL, özellikle [[educational-robotics]], [[computational-thinking]] ve [[cs-education]] açısından ilgilidir; oralarda oyunlar soyut teknik kavramları somut ve eğlenceli hale getirebilir.

### GBL bilgi tabanının araştırmalarında nasıl görünüyor

- **Robotik eğitimi:** robotik eğitiminde oyun temelli öğrenme ve oyunlaştırmaya ilişkin [[game-based-gamified-robotics-education-review-2026|karşılaştırmalı sistematik bir derleme]], GBL’nin gayriresmî ortamlarda daha yaygın olduğunu bulurken, oyunlaştırmanın resmî sınıflara hâkim olduğunu ve [[project-based-learning|proje temelli öğrenmeyi]] desteklediğini buldu.
- **Robot aracılı oyunlar:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]], zorbalığa karşı müdahale için robot aracılı bir rol yapma oyunudur ve [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] güdülenmeyi artırmak için etkileşimli [[storytelling-in-education|dijital hikâye anlatımı]] kullanır.
- **Simülasyon oyunlarında YZ [[conversational-ai|konuşma aracıları]]:** Wenzel, Geiger ve Liening (2026), dijital oyun temelli öğrenmede YZ konuşma aracıları için dört tasarım ilkesi ve on beş tasarım özelliğinden oluşan CAIS-GBL çerçevesini, bilişsel, güdüleyici, [[affective-computing|duygusal]] ve [[sociocultural-learning|sosyokültürel]] etkileşimi kapsayan kuram kaynaklı meta-gereksinimlerden türetir; bunu bir [[equity-in-ai-education|tasarımla eşitlik]] duruşuyla birlikte yaparlar. İş planı simülasyon oyununda somutlaştırılmış aracıları (Lara), bilişsel ve [[community-of-inquiry|sosyal varlık]] ile [[self-regulated-learning]] desteği açısından olumlu karşılandı ve simülasyon oyunlarında sınırlı [[formative-assessment|biçimlendirici]] geri bildirim ile yapılandırılmış yansımanın yaygın boşluğunu giderdi.

- **YZ-GBL etkililiği:** YZ destekli oyun temelli öğrenmeye ilişkin 55 çalışmalık sistematik bir derleme, bilgi, içsel güdülenme ve duygusal etkileşim üzerinde olumlu etkiler bulur; ama yalnızca 4 çalışma (%7) Yüksek nitelik eşiğini karşıladı ve yalnızca 4’ü (%7) [[rct|RCT]] idi ([[ai-game-based-learning-systematic-review-2026|Kaşarcı ve Yurt, 2026]]). Etkililik, YZ mekanizmasının belirtilmiş bir [[learning-theories|öğrenme kuramı]] ile uyumlanmasına bağlıydı.

### Oyunlaştırma

**Oyunlaştırma**, oyun tasarımı öğelerinin (puan, nişan, düzey, liderlik tabloları, zorluklar, ilerleme çubukları) oyun olmayan bağlamlara kullanıcıları güdülemek ve etkileşime geçirmek için uygulanmasıdır. Öğrenmenin bir oyun *aracılığıyla* gerçekleştiği oyun temelli öğrenmenin aksine, oyunlaştırma oyun mekaniklerini var olan bir öğrenme etkinliğinin üzerine yerleştirir, onu tam bir oyuna dönüştürmeden. Eğitimde güdülenmeyi, [[student-engagement]] ve ısrarı artırmak için kullanılır ve resmî sınıf ortamlarında yaygın biçimde uygulanır.

Oyunlaştırma güdülenme kuramına dayanır; özellikle [[self-determination-theory]] (özerklik, yetkinlik ve ilişkililiği destekler) ve davranış değişimi çerçevelerine. Robotik gibi uygulamalı alanlarda [[project-based-learning]] ile özel bir sinerji göstermiştir. Bilgi tabanının araştırmalarında:

- **Robotik eğitimi:** karşılaştırmalı derleme, oyunlaştırmanın robotik eğitiminde resmî sınıflara hâkim olduğunu (p < .001) ve [[project-based-learning|proje temelli öğrenmeyi]] güçlü biçimde desteklediğini (p = .009), oyun temelli öğrenmenin ise gayriresmî ortamlarda daha yaygın olduğunu buldu.
- **Etkileşim ve güdülenme:** oyunlaştırma, YZ, [[cs-education|programlama]] ve [[stem-education|STEM]] öğrenme bağlamlarında öğrenen etkileşimini ve güdülenmesini artırmak için bilgi tabanı boyunca kullanılır. [[genai-motivation-engagement-2026|Üretici YZ, güdülenme ve etkileşim]] araştırmaları, oyunsu öğelerin YZ ile nasıl birleşerek öğrenen ilgisini sürdürdüğünü inceler. İki 2026 çalışması bunu, oyunlaştırılmış ve YZ destekli koşulları geleneksel öğretimle karşılaştırarak genişletir: [[nasa-tlx-workload-gamified-ai-2026|bir NASA-TLX çalışması]] geleneksel, oyunlaştırılmış ve YZ destekli öğrenme koşullarında algılanan iş yükünü ölçtü ve [[arcs-motivational-ergonomics-gamified-ai-2026|bir ARCS çalışması]], [[professional-training|iş yeri eğitimi]] için çıkarımları olan oyunlaştırılmış ve YZ destekli öğrenmede güdüleyici “ergonomiyi” inceledi. Birlikte, oyunsu ve YZ destekli tasarımların güdüleyici yararının, [[motivation|algılanan çabayı]], iş yükünü ve dikkati nasıl şekillendirdiklerine (örneğin ARCS dikkat/alaka boyutları) bağlı olduğunu, yalnızca oyunlaştırmaya değil, netleştirir.

GBL ve oyunlaştırma birlikte [[educational-robotics]], [[student-engagement]], [[motivation]], [[self-determination-theory]], [[active-learning]], [[simulation]], [[project-based-learning]] ve [[computational-thinking]] ile bağlantı kurar.

## Bağlı kavramlar

- [[educational-robotics]]
- [[student-engagement]]
- [[motivation]]
- [[self-determination-theory]]
- [[active-learning]]
- [[simulation]]
- [[project-based-learning]]
- [[computational-thinking]]
- [[cs-education]]
- [[pedagogy]] — Şemsiye: Eğitimde YZ bağlamında pedagojiler ve öğretim stratejileri
- [[virtual-and-augmented-reality]] — sürükleyici ve oyunlaştırılmış uygulama, tasarım ve kanıtlarda örtüşür

## Bağlı makaleler

- [[ai-game-based-learning-systematic-review-2026]] — 55 YZ destekli oyun temelli öğrenme çalışmasının sistematik derlemesi: olumlu sonuçlar, ince bir kanıt tabanı
- [[game-based-gamified-robotics-education-review-2026]] — Oyun Temelli ve Oyunlaştırılmış Robotik Eğitimi
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Eğitimde Robotik ve YZ
- [[genai-motivation-engagement-2026]] — Üretici YZ, Güdülenme ve Etkileşim
- [[nasa-tlx-workload-gamified-ai-2026]] — Oyunlaştırılmış/YZ koşullarında NASA-TLX iş yükü
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS güdülenmesi ve YZ destekli oyunlaştırma
