---
title: Oyun Temelli Öğrenme
created: "2026-10-14T22:10:00-04:00"
type: concept
pedagogy: [active-learning, game-based-learning, motivation, student-engagement]
technology: [educational-robotics]
confidence: high
translation_of: concepts/game-based-learning
source_updated: "2026-10-30T06:18:00-04:00"
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


- **Öğrenciler oyuncu olmaktan çok oyun tasarımcısı olarak:** [[karampa-students-game-designers-ai-literacy-2026|Karampa ve ark. (2026)]], 8-12 yaş aralığındaki 22 ilkokul öğrencisine yanlış bilgi hakkında artırılmış bir kaçış kutu oyunu tasarlattı ve [[project-based-learning|proje temelli öğrenmeyi]] [[design-thinking|tasarım odaklı düşünme]] ile Room2Educ8 kaçış odası çerçevesi üzerine yığdı. 20 maddelik DigComp 3.0 anketinde bileşik [[ai-literacy|YZ okuryazarlığı]], 5 puanlık ölçekte 3,684'ten 4,309'a yükseldi, t(21) = −21.086, p < .001 ve beş yeterlilik alanının tümü iyileşti. Sınıf, YZ istek metinleriyle 11 öneri üretti ve bunları tek bir inşa edilebilir oyunda birleştirdi. Öz bildirim, tek sınıf ve kontrol grubu yok.

### Oyunlaştırma

**Oyunlaştırma**, oyun tasarımı öğelerinin (puan, nişan, düzey, liderlik tabloları, zorluklar, ilerleme çubukları) oyun olmayan bağlamlara kullanıcıları güdülemek ve etkileşime geçirmek için uygulanmasıdır. Öğrenmenin bir oyun *aracılığıyla* gerçekleştiği oyun temelli öğrenmenin aksine, oyunlaştırma oyun mekaniklerini var olan bir öğrenme etkinliğinin üzerine yerleştirir, onu tam bir oyuna dönüştürmeden. Eğitimde güdülenmeyi, [[student-engagement]] ve ısrarı artırmak için kullanılır ve resmî sınıf ortamlarında yaygın biçimde uygulanır.

Oyunlaştırma güdülenme kuramına dayanır; özellikle [[self-determination-theory]] (özerklik, yetkinlik ve ilişkililiği destekler) ve davranış değişimi çerçevelerine. Robotik gibi uygulamalı alanlarda [[project-based-learning]] ile özel bir sinerji göstermiştir. Bilgi tabanının araştırmalarında:

- **Robotik eğitimi:** karşılaştırmalı derleme, oyunlaştırmanın robotik eğitiminde resmî sınıflara hâkim olduğunu (p < .001) ve [[project-based-learning|proje temelli öğrenmeyi]] güçlü biçimde desteklediğini (p = .009), oyun temelli öğrenmenin ise gayriresmî ortamlarda daha yaygın olduğunu buldu.
- **Etkileşim ve güdülenme:** oyunlaştırma, YZ, [[cs-education|programlama]] ve [[stem-education|STEM]] öğrenme bağlamlarında öğrenen etkileşimini ve güdülenmesini artırmak için bilgi tabanı boyunca kullanılır. [[genai-motivation-engagement-2026|Üretici YZ, güdülenme ve etkileşim]] araştırmaları, oyunsu öğelerin YZ ile nasıl birleşerek öğrenen ilgisini sürdürdüğünü inceler. İki 2026 çalışması bunu, oyunlaştırılmış ve YZ destekli koşulları geleneksel öğretimle karşılaştırarak genişletir: [[nasa-tlx-workload-gamified-ai-2026|bir NASA-TLX çalışması]] geleneksel, oyunlaştırılmış ve YZ destekli öğrenme koşullarında algılanan iş yükünü ölçtü ve [[arcs-motivational-ergonomics-gamified-ai-2026|bir ARCS çalışması]], [[professional-training|iş yeri eğitimi]] için çıkarımları olan oyunlaştırılmış ve YZ destekli öğrenmede güdüleyici “ergonomiyi” inceledi. Birlikte, oyunsu ve YZ destekli tasarımların güdüleyici yararının, [[motivation|algılanan çabayı]], iş yükünü ve dikkati nasıl şekillendirdiklerine (örneğin ARCS dikkat/alaka boyutları) bağlı olduğunu, yalnızca oyunlaştırmaya değil, netleştirir.

GBL ve oyunlaştırma birlikte [[educational-robotics]], [[student-engagement]], [[motivation]], [[self-determination-theory]], [[active-learning]], [[simulation]], [[project-based-learning]] ve [[computational-thinking]] ile bağlantı kurar.

## Yaygın yanlış anlamalar

**“YZ destekli oyun temelli öğrenmenin sağlam bir kanıt tabanı vardır.”** İddianın arkasındaki sentez hem geniş hem incedir. **55 çalışmalık bir sistematik derleme** bilgi, içsel güdülenme ve duygusal etkileşim üzerinde olumlu etkiler bulur, ancak yalnızca **4 çalışma (%7) derlemenin Yüksek nitelik eşiğini karşıladı**. Çalışmaların %93'ünün derlemenin kendi nitelik çubuğunun altında kaldığı bir korpustan çekilen birleşik olumlu etki, tasarım için temel alınacak bir bulgu değil, arkasına bir literatür eklenmiş bir hipotezdir.

**“Güdülenme ve bilgi üzerindeki olumlu etkiler birbirini pekiştirir.”** Ayrı ayrı ölçülürler ve daha geniş literatürde ayrı ayrı zamanlanırlar: [[student-engagement|etkileşim ve başarı]] farklı zaman çizelgelerinde ilerler, bu nedenle içsel güdülenmeyi artıran bir oyun tek bir sonucu göstermiş olur. Güdülenme sonucunu bilgi sonucunu destekleyen bir kanıt olarak ele almak, iki parçalı bir bulguyu tasarımın desteklediğinden daha güçlü bir bulguya şişirir.

**“Bir oyun öğrencileri etkileşime geçiriyorsa öğrenme eğlenceden gelir.”** Eğlence, oyunun katlanılabilir kıldığı tekrarın sunum mekanizmasıdır, öğrenmenin mekanizması değil. Verimli alıştırma eklemeden etkileşim ekleyen bir oyun, zaten hiç kıt olmayan parçayı eklemiş olur.

## Uygulama için çıkarımlar

**Eğitmenler için**

- Oyunun öğrencilere neyi tekrarlattığını sorun, öğrencilerin ondan hoşlanıp hoşlanmadığını değil. Doğru işlemin tekrarı mekanizmadır; hoşlanma, tekrarı katlanılabilir kılan şeydir.
- Güdülenme ve bilgi sonuçlarını ayrı iddialar olarak ele alın ve içsel güdülenmedeki bir artışın öğrenme kanıtı olarak raporlanmasına izin vermeyin.
- Olumlu bir sentezin gücüyle bir başlığı benimsemeden önce niteliği derlemenin kendi çubuğuna göre denetleyin: çalışmaların yalnızca %7'si bu çubuğu karşıladı.

**Geliştiriciler için**

- Öğrenme çıktılarını etkileşim ve duygudan ayrı olarak ölçün ve her ikisini de yayımlayın.
- Önce verimli alıştırmayı, sonra oyun katmanını kurun; zayıf alıştırmanın üzerine konan bir oyun katmanı, hiç kıt olmayan parçayı otomatikleştirmiştir.

**Araştırmacılar için**

- Alanın hacmini değil tasarım niteliğini yükseltin; %7'lik yüksek nitelik oranı, ne sonuç çıkarılabileceği üzerindeki bağlayıcı kısıttır.

- **Bir simülasyonda konuşmaya dayalı geri bildirim, dışsal yükü düşürmeden ilgili yükü artırır.** **234 öğrencinin** yer aldığı beş haftalık bir iş simülasyonu oyununda, GPT-4o tabanlı bir geri bildirim sohbet robotunun düzenli kullanıcıları, erişimi olup etkileşime girmeyen kullanıcılara (β = −.468, p < .001) ve statik geri bildirim kontrolüne (β = −.253, p = .028) kıyasla **anlamlı biçimde daha yüksek ilgili bilişsel yük** bildirdi; oysa **dışsal yük her iki spesifikasyonda da etki göstermedi** (F(1, 219) = 0.499, p = .481). Her iki yük de **beş hafta boyunca azaldı** (dışsal β = −.388, p < .001); bu, etkileşim yerine bilişsel yük üzerinde ölçülen bir yenilik etkisidir ([[wenzel-conversational-ai-feedback-cognitive-load-game-2026|Wenzel, Geiger ve Liening, 2026]]). Tasarım noktası, geri bildirimin kişiselleştirme, işaretleme, bölümleme ve ileriye dönük yapıyı 19 somut gösterge üzerinden taşımasıdır; tek başına sohbet robotu yüzeyi müdahale değildir.

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


- [[karampa-students-game-designers-ai-literacy-2026]] — İlkokul öğrencileri bir kaçış kutu oyunu tasarlıyor; YZ okuryazarlığı tek bir e-ders laboratuvarında yükseliyor

- [[ai-game-based-learning-systematic-review-2026]] — 55 YZ destekli oyun temelli öğrenme çalışmasının sistematik derlemesi: olumlu sonuçlar, ince bir kanıt tabanı
- [[game-based-gamified-robotics-education-review-2026]] — Oyun Temelli ve Oyunlaştırılmış Robotik Eğitimi
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[white-wu-robotics-ai-education-2026]] — Eğitimde Robotik ve YZ
- [[genai-motivation-engagement-2026]] — Üretici YZ, Güdülenme ve Etkileşim
- [[nasa-tlx-workload-gamified-ai-2026]] — Oyunlaştırılmış/YZ koşullarında NASA-TLX iş yükü
- [[arcs-motivational-ergonomics-gamified-ai-2026]] — ARCS güdülenmesi ve YZ destekli oyunlaştırma
