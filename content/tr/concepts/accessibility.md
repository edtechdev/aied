---
connected_resources: [drawsplat, fpds-apps-and-resources, id-toolbox, idstack]
title: Erişilebilirlik
created: "2026-10-14T22:20:00-04:00"
connected_faqs: [designing-educational-ai-software, equity-ethics-pedagogical-safety-research, ai-disabled-neurodivergent-learners]
type: concept
foundations: [learning-design]
ethics: [accessibility, assistive-technology, equity-in-ai-education, inclusive-learning, universal-design-for-learning]
level: [special education]
confidence: high
reviewed_by: [editor]
translation_of: concepts/accessibility
source_updated: "2026-10-15T10:00:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Erişilebilirlik** — eğitim teknolojisi, içeriği ve arayüzlerinin, engelli ve çeşitli ihtiyaçlara sahip kişilerce algılanabilir, kullanılabilir ve anlaşılabilir olacak biçimde tasarlanması. [[ai-education|Eğitimde YZ]] bağlamında erişilebilirlik, öğrenmenin *ortamına* ilişkin somut, uygulamaya dönük engelleri kapsar: video altyazıları, alternatif metin, yazıya çevirilmiş kayıtlar, ekran okuyucu ve klavye uyumluluğu, renk kontrastı, metin sadeleştirme, dokunsal çıktı, işaret dili desteği ve yardımcı [[ai-technologies|teknolojiler]] ile uyumluluk.

## Düşünülmesi Gerekenler

- Dijital bir öğrenme aracı tasarladığınızda veya seçtiğinizde son kez, [[pedagogy]]’ini düşünmeden önce altyazılarının, alternatif metninin, klavye gezinmesinin ve renk kontrastının işleyip işlemediğini kontrol ettiniz mi? Bu sıralamanın neden önemli olabileceğini düşünüyorsunuz?
- Doğru altyazılı bir video “erişilebilir”dir; tartışmayı bir Sağır öğrencinin iletişim ihtiyaçları çevresinde yapılandıran bir kurs ise “o öğrenciyi destekler”. Teknik bir engeli kaldırmak ile bir öğrenciye anlamlı biçimde hizmet etmek arasına çizgiyi nereden çekerdiniz?
- [[research-methods-aied|Araştırma]], sabit duraklamalarla YZ segmentasyonlu [[video-education|öğretim videolarının]] [[neurodiversity|DEHB]] ve DEHB olmayan [[learners]] arasındaki performans boşluğunu ortadan kaldırdığını göstermektedir. İçinde yer aldığınız bir sınıfta, “tek bir öğrenci için tasarlanmış” ve sonunda herkese yarayan bir düzeltmeyi hatırlıyor musunuz?
- Bazıları erişilebilirliğin gerekli ama yeterli olmadığını savunur — erişilebilir bir araç kendiliğinden kapsayıcı veya engelli adil bir araç değildir. Bir aracı kullanabilmek ile ondan anlamlı biçimde yararlanmak arasındaki fark nedir?
- Birçok YZ aracı büyük ölçüde İngilizce, Batı merkezli verilerle eğitilir. Bu, ana dili işaret dili olan veya bilme biçimleri ana akımdan farklı olan öğrencilere ne ölçüde hizmet etmelerini sınırlayabilir?
- YZ erişilebilirliği ölçekte otomatikleştirebilir — altyazı üretme, metin sadeleştirme, dokunsal çıktı yaratma. Otomatikleştirilmiş erişilebilirliğe güvenmeden önce elle neyi doğrulamak isterdiniz ve neden?

## Giriş

Erişilebilirlik, bu bilgi tabanındaki üç komşu kavramdan farklıdır ama onlarla yakından ilişkilidir. **[[inclusive-learning]]**, tüm öğrenen çeşitliliği (fiziksel, bilişsel, duyusal, durumsal) için eğitim tasarlamanın daha geniş şemsiyesidir. **[[special-education]]**, bireysel uyarlamalar dâhil teşhis konmuş engelli öğrenenler için öğretim alanıdır. **[[universal-design-for-learning]]**, önleyici tasarım çerçevesidir ([[student-engagement|katılımın]], temsilin, eylem/ifadenin çoklu yolları). **Erişilebilirlik**, bu takımyıldızın içinde *teknik ve usul katmanı* olarak yer alır: pedagojiyi yeniden tasarlamak yerine biçimi algılama ve kullanma engellerini kaldırır. İkisi bir spektrum üzerinde ayrılabilir — erişilebilirlik “herkes bu içeriğe ve araca erişebilir mi?” diye sorarken, engelli öğrencileri desteklemek “öğretim, uyarlamalar ve engelliye özgü destek dâhil her öğrenciye anlamlı biçimde hizmet ediyor mu?” diye sorar. İkisi de önemlidir ve YZ her ikisiyle de kesişir.

### Ayrımın neden önemli olduğu

Doğru altyazılı ve uygun biçimde etiketlenmiş yazıya çevrilmiş kaydı olan bir video *erişilebilirdir*; tartışmayı bir Sağır öğrencinin iletişim tercihlerini içerecek biçimde yapılandıran bir kurs ise *o öğrenciyi destekler*. Örtüşürler — erişilebilir ortam kapsayıcı öğretimin ön koşuludur — ama farklı tasarım hamleleri gerektirir ve farklı kanıtlara dayanır. Erişilebilirlik standart ve hukuka (WCAG, ABD [[assistive-technology|Yardımcı Teknoloji Yasası]] ve IDEA) çıpalıyken, erişilebilir öğrenme ve özel eğitim pedagojiye ve [[student-experience|öğrenen deneyimine]] çıpalıdır.

### Temel araştırma temaları

**Biçim erişilebilirliği: altyazı, yazıya çevrilmiş kayıt ve metin.** Sabit duraklamalı **[[adhd-video-segmentation-computing-education|YZ segmentasyonlu öğretim videoları]]**, DEHB ve DEHB olmayan öğrenenler arasındaki performans boşluğunu ortadan kaldırmıştır — herkese yarayan bir katalizör olarak erişilebilirlik. **[[text-simplification-its|MuTSE]]**, içerik karmaşıklığını her öğrenenin okuma düzeyine uyduran [[llm]] temelli [[intelligent-tutoring|metin sadeleştirmeyi]] değerlendirir; bir [[human-in-the-loop-ai|insan döngüde]] erişilebilirlik katmanı. **[[llm-question-generation-deaf-hard-of-hearing-2026|Chen ve ark.]]**, Sağır ve İşitme Engelli öğrenenler için LLM [[automated-question-generation|soru üretimi]] kurar; metin temelli YZ istek metinleri ile işaret temelli ana diller arasındaki uyuşmazlıkla yüzleşir.

**Duyusal erişim: görsel olmayan ve dokunsal çıktı.** **[[kutti-ai-voice-first-learning-companion|Kutti AI]]**, görme engelli çocuklar için sözlü konuşmayı birincil yöntem yapar, görsel bağımlılığı kaldırır. **[[tactile-statistical-graphs-accessibility|Dokunsal 3B baskı grafikler]]**, görsel istatistiksel veriyi kör ve az gören öğrenciler için dokunulabilir çıktıya dönüştürür. **[[pepper-robot-sign-language-lis-2025|İşaret dili robotları]]**, [[educational-robotics]] alanını Sağır öğrenenler için iletişimsel erişilebilirliğe taşır.

**Film için yazılmış sesli betimleme, ders kayıtlarına aktarılmaz.** Slayt temelli dersler şemalara, denklemlere ve işaret ediş jestlerine atıfta bulunur ve duraklamaları yalnızca medyan 0,5 s sürer; bu nedenle [[ad4edu-lecture-audio-description-2026|Psychias ve Gao (2026)]], derse özgü bir kıyaslama ve kural tabanlı teşhis edilebilir bir metrik kurmuştur; makine hakemi sıralı çiftler üzerinde sonradan eğitirim uyumu eşit biçimde iyileştirmemiştir.

**Görme engelli öğrenenler için [[generative-ai|üretken yapay zeka]].** **[[khlaif-assistive-genai-visually-impaired-2026|Khlaif ve ark. (2026)]]** — üç Filistin üniversitesindeki 21 görme engelli [[higher-ed|lisans öğrencisine]] ilişkin [[qualitative-research|nitel]] bir vaka çalışması — GenAI’nin hızı, içeriği ve sunumu bireysel öğrenme profillerine uyarladığını ve karmaşık akademik metinleri sadeleştirirken içeriği yöntemler arasında (metin, ses, görsel) dönüştürdüğünü, önceden erişilemez olan materyalleri kullanılabilir kıldığını bulmuştur. Öğrenenler aciliyeti bir kolaylık değil temel bir erişilebilirlik gereksinimi olarak çerçevelemiş ve etkileşimlilik, kullanıcı dostuluk, karşılanabilirlik, çok yöntemlilik, tümleşme ve ölçeklenebilirlik olmak üzere altı birbirine bağlı teknolojik öznitelik, GenAI’nin bir [[global-south|düşük kaynaklı bağlamda]] gerçekten erişilebilir olup olmadığını belirlemiştir; [[usability-research|kullanılabilirlik]], karşılanabilirlik ve erişilebilirlik ayrı tasarım kaygılarından çok birbirini güçlendiren unsurlardır.

**Engelli öğrenciler için politika ve uyarlamalar.** **[[shin-ai-policies-sld-2026|Shin ve ark.]]**, ABD YZ politika belgelerini inceleyerek özgün öğrenme güçlüğü olan öğrencilere ilişkin rehberlikte bir boşluk ortaya koyar; [[assistive-technology|Yardımcı Teknoloji]] Yasası ve IDEA’ya dayalı uyarlamalar ve [[educational-policy-ai|politika]] önerileri sunar. **[[zhang-ai-students-disabilities-meta-analysis-2024|Zhang ve ark.]]**, engelli öğrenciler için YZ temelli müdahalelerin 29 çalışmasını meta-analiz eder; [[learning-gains|öğrenme çıktıları]] üzerinde orta düzeyde olumlu bir etki bulur (g = 0,588) — ve YZ’nin erişilebilirliği sağlamaktan öte davranması gerektiğini, [[agency|etken]] katılımı olanaklı kılması gerektiğini savunur.

**Makine direnci, okunabilirlik maliyeti doğurur.** Şerit örtüleri çıkarımı en çok bozmuş (+%35,9 karakter hatası, +%38,3 kelime hatası); yine de dört tipografi ve tasarım uzmanı dikey şeritleri okunabilir bulmuş, çapraz şeritler harf biçimlerini bozup okunamaz addedilmiş ve aşırı opaklık varyasyonu yalnızca insan okunabilirliğini de zarlandıran yoğunluklarda fayda sağlamıştır ([[airri-machine-resistant-reading-interface-2026|Salaun ve ark. (2026)]]).

**Aşırı kapsamlı YZ yasakları ve yardımcı yazıya çevirme.** **[[wright-transcription-not-generation-2026|Wright (2026)]]**, “YZ kullanımı”na ilişkin kapsansız yasakların konuşmadan metne çevirme ile OCR’ı üretken taslaktan ayırt edemediği için aşırı kapsamlı olduğunu savunur: tanıma teknolojileri, öğrencinin önceden yazdığı içeriğin biçimini dönüştürür, yeni içerik üretmez; oysa platform kimliği çevresinde yazılmış bir politika ikisini birden yakalar. İnce motor kontrolünü, el yazısı okunabilirliğini veya yazma doğruluğunu etkileyen durumları olan öğrenciler — otizm spektrumu durumları, dispraksi, serebral palsi ve tekrarlayan zorlanma yaralanmaları dâhil — bağımsız ses-metin ve OCR’a bel bağlamışlardır ve bildiriler, çeşitli bağımsız ses-metin ürünlerinin kaldırıldığını veya zayıflatıldığını göstermektedir; işlevsel boşluğu YZ destekli yazıya çevirme doldurmaktadır. Bu ikameyi suç davranışı olarak ele almak, Birleşik Krallık Eşitlik Yasası 2010’daki makul ayarlama yükümlülüğü, öngörülü Kamu Sektörü Eşitlik Yükümlülüğü, ABD Engelliler Yasası ve Avustralya Engelli Ayrımcılığı Yasası 1992 kapsamında adalet kaygıları doğurur; ancak makale bu nitelemenin bir mahkemede sınandığını iddia etmemektedir. Engellilik, yardımcı teknoloji ve YZ suç politikası kesişiminin yeterince incelenmediğini, bu yer değiştirmenin ölçeğinin ölçülmediğini ve aynı belirsizliğin farklı yanlış pozitif riski ürettiğini not eder; çünkü dedektörler, İngilizce ana dili olmayan yazarların düşük şaşkınlıklı metnini makine yazımı olarak okur. Bu aşırı kapsamanın yarattığı hukuki maruziyet [[legal-issues-and-risks]] sayfasında eşlenmiştir.

**Dizleksi için YZ: tespit, destek ve [[personalized-learning|kişiselleştirilmiş öğrenme]].** 2026 disiplinler arası bir [[meta-analysis-systematic-review|sistematik derleme]] (Dabaghi, D’Urso ve Sciarrone; PRISMA rehberli, 2018–2024, n=72), YZ’nin dizleksi olan öğrencileri tespit, yardımcı destek ve kişiselleştirilmiş öğrenme alanlarında desteklediğini — ancak bu kolların bütünleşmeden çok paralel olarak evrimleştiğini, pekiştirilmiş eğitim kuramından çok teknolojik fırsatla yönlendiğini bulmaktadır. Makine öğrenmesi temelli yardım-eğitim araçları beş alana yayılır (özgün uygulamalar, katılım, kişiselleştirme, öneri, jenerik destek) ama teknik performansı ve sınıflandırma doğruluğunu vurgularken ekolojik geçerliliği ve pratik sınıf içi uygulamayı gözden kaçırır. Tespit araştırması (EEG, göz takibi, ML modelleri) erken müdahale için tanısal umut vaat eder ama sıklıkla özel ekipman ve kontrollü ortamlar gerektirir; bu, tipik okul ortamlarında ölçeklenebilirliği ve erişilebilirliği sınırlar. Açık zorluklar arasında sınırlı deneysel doğrulama, ölçeklenebilirlik, hassas öğrenci verileriyle ilgili [[ethics]]/[[privacy]] kaygıları, sınırlı [[teacher-role|öğretmen]] desteği ve eğitimi ve dil/kültürel engeller (araştırmanın çoğu İngilizce konuşan toplulukları hedefler) yer alır — erişilebilirliğin yalnızca teknik olarak gösterilmekten çok doğrulanmış, ölçeklenebilir ve etik temelli olması gerektiğini pekiştirir.

**Yalnızca erişilebilirliğin sınırları.** **[[genai-minoritized-knowledges-disability|Eleştirel çalışmalar]]**, Anglofon, Batı merkezli verilerle eğitilmiş YZ’nin engellilik merkezli bilme biçimini marjinalleştirebileceğini uyarır. Erişilebilir biçimler kapsayıcı veya adil öğretimi garanti etmez — erişilebilirliğin gerekli ama yeterli olmadığını ve [[equity-in-ai-education]] ile bağlantı kurması gerektiğini pekiştirir.

**Uyarlama odaklı, tanıya bağlı araçlar baskın.** Nöroçeşitli öğrenciler için dijital yardımcı teknolojilere ilişkin 40 çalışmanın kapsam derlemesi, 28’inin katılım koşulu olarak resmi bir teşhis istediğini ve yalnızca üçünün öğrenci yerine nörotipik akranlarla çalıştığını; bilişsel aşırı yüklenme, yorgunluk, dikkat dağılması ve üretken YZ’ye aşırı güven olmak üzere tersine dönme etkileri bildirdiğini bulmuştur.([[assistive-tech-neurodivergent-higher-ed-review-2026|Rempel ve ark. (2026)]])

## Uygulama için çıkarımlar

- **Biçim engeline öncelik verin.** Altyazı, yazıya çevrilmiş kayıt, alternatif metin, kontrast ve klavye kullanılabilirliği kapı bekçisi katmandır — onlara ihtiyacı olan öğrenenler için bunlar olmadan başka hiçbir şey önemli değildir.
- **Erişilebilirliği ölçekte otomatikleştirmek için YZ kullanın.** YZ altyazı üretebilir, metin sadeleştirebilir, dokunsal/ses alternatifleri yaratabilir ve sunumu uyarlayabilir — ama çıktı kalitesini insan döngüdeki denetimlerle değerlendirin.
- **Erişilebilirliği gerekli ama yeterli olmayan bir şey olarak ele alın.** Erişilebilir bir araç kendiliğinden kapsayıcı veya engelli adil bir araç değildir; erişilebilirliği [[inclusive-learning]] tasarımı ve [[special-education]] desteğiyle eşleyin.
- **Uyarlamaları hukuka ve politikaya dayandırın.** YZ araçları tasarlarken veya tedarik ederken standartlara (WCAG) ve mevzuata (Yardımcı Teknoloji Yasası, IDEA) atıfta bulunun.
- **Kurum düzeyinde YZ yaygınlaştırma, YZ erişilebilirlik politikasının önüne geçiyor.** [[chan-ai-institutionalization-index-global-universities-2026|Chan (2026)]], Times Higher Education 2026 sıralamasındaki tüm 100 üniversiteyi kodlamış ve bağımsız bir YZ erişilebilirlik politikası yayımlayan hiçbir üniversite bulmazken, %93’ünün YZ destekli kampüs hizmeti (kayıt, barınma, BT için sohbet robotları) yayımladığını bulmuştur. Yazarın hayırlı okuması, erişilebilirlik yükümlülüklerinin genel engelli hizmetleri politikalarının içinde yer aldığıdır; ama ölçüldüğü biçimiyle, YZ araçlarına ilişkin gereklilikler kurumsal kamusal kayıtta hiçbir yerde görünmemektedir. Öğretim ve yönetimdeki YZ araçlarının engelli öğrenciler için erişilebilir olması gerektiğini belirten kısa bir kurumsal ifade, ölçülen alanın tamamının önünde olurdu.

- **[[physics-education|Fizik]] videolarının matematik erişilebilir yazıya çevrilmesi (2026):** Gemini (ses + saniyede 1 kare video örnekleme) ve LuaLaTeX kullanan bir YZ iş akışı, öğretim fizik videolarını erişilebilirlik doğrulamasını rutin biçimde geçen PDF/UA-2 ve ISO 32005 matematik erişilebilir PDF’lere derler — denklem ağırlıklı video içeriğini kör ve az gören öğrenciler için ekran okunabilir kılmada pratik ve ücretsiz bir yol ([[gemini-lualatex-physics-video-transcription-2026]]).

## Bağlı kavramlar

- [[differential-effects-across-learner-groups]]
- [[inclusive-learning]] — öğrenen çeşitliliği boyunca eğitim tasarlamanın daha geniş şemsiyesi
- [[special-education]] — teşhis konmuş engelli öğrenenler için öğretim alanı
- [[universal-design-for-learning]] — önleyici tasarım çerçevesi
- [[equity-in-ai-education]]
- [[educational-policy-ai]]
- [[neurodiversity]]
- [[assistive-technology]]
- [[learning-design]]
- [[generative-ai]]
- [[educational-robotics]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[agency]]
- [[virtual-and-augmented-reality]] — başlıklar, hareket hastalığı ve cihaz erişimi kimin kullanabileceğini belirler
- [[speech-and-voice-technologies]]
- [[legal-issues-and-risks]] — aşırı geniş kurallar, kusurlu kanıt ve makul ayarlama için şemsiye sayfa
- [[arts-design-and-media-education]]

## Bağlı makaleler

- [[chan-ai-institutionalization-index-global-universities-2026]] — Chan (2026): 100 seçkin üniversiteden %0’ı YZ erişilebilirlik politikası yayımlarken %93’ü YZ kampüs hizmeti yayımlıyor
- [[shin-ai-policies-sld-2026]] — Özgün öğrenme güçlüğü olan öğrenciler için YZ politikaları ve uyarlamalar
- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Engelli öğrenciler için YZ müdahalelerinin meta-analizi
- [[adhd-video-segmentation-computing-education]] — Sabit duraklamalı YZ segmentasyonlu videolar
- [[text-simplification-its]] — Akıllı öğretim için LLM temelli metin sadeleştirme
- [[llm-question-generation-deaf-hard-of-hearing-2026]] — Sağır/İşitme Engelli öğrenenler için LLM soru üretimi
- [[kutti-ai-voice-first-learning-companion]] — Görme engelli çocuklar için ses öncelikli yol arkadaşı
- [[tactile-statistical-graphs-accessibility]] — Dokunsal 3B baskı istatistiksel grafikler
- [[pepper-robot-sign-language-lis-2025]] — İşaret dilini destekleyen Pepper robotu
- [[genai-minoritized-knowledges-disability]] — YZ ve engellilik merkezli bilgi üzerine eleştirel bakış
- [[gemini-lualatex-physics-video-transcription-2026]] — Gemini+LuaLaTeX matematik erişilebilir fizik videosu yazıya çevirme
- [[khlaif-assistive-genai-visually-impaired-2026]] — Görme engelli öğrenenler için yardımcı GenAI
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — Üretken YZ, sanal gerçeklik ve ötesi: yükseköğretimde nöroçeşitli öğrenciler için dijital yardımcı teknolojilere dair bir kapsam derlemesi
- [[wright-transcription-not-generation-2026]] — Yazıya çevirme üretme değildir: aşırı kapsamlı YZ yasakları ve yakaladıkları yardımcı araçlar
- [[ad4edu-lecture-audio-description-2026]] — AD4EDU: Erişilebilirlik standartları, metrikler ve öğrenen tercihleri boyunca üniversite ders kaydı sesli betimlemesini kıyaslama
- [[airri-machine-resistant-reading-interface-2026]] — AIRRI: İnsanlar için okunabilir, makineler için dirençli bir okuma arayüzüne doğru
