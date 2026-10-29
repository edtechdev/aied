---
title: "Açık Eğitim"
created: "2026-10-28T20:30:00-04:00"
updated: "2026-10-28T21:15:00-04:00"
type: concept
technology: [open-source, generative-ai]
pedagogy: [active-learning, collaborative-learning]
foundations: [curriculum-design]
institutions: [educational-policy-ai, governance]
ethics: [equity-in-ai-education]
audience: [instructors, administrators, policymakers, curriculum designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [okstate-ai-oer-case-studies-doers-2026]
translation_of: concepts/open-education
source_updated: "2026-10-28T21:15:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-28"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Açık eğitim** — açık lisanslı içerikle öğretme hareketi ve pratiği; ayrıca öğrenciyi bu içeriğin tüketicisi değil üreticisi sayan pedagoji. İki artefaktı vardır: açık eğitim kaynağı ve açık pedagojik ödev. Yeniden kullanımı hukuka uygun kılan şey lisansıdır; savı ise hem maliyeti düşürdüğü hem de yazarlık alanını genişlettiğidir. Üretici YZ artık üçüne birden baskı yapıyor: içerik üretmenin maliyetini sıfıra indiriyor, yeniden harmanlanmış bir kaynağın yazarının kim olduğunu bulanıklaştırıyor ve kurumlara, finanse etmeleri istenen müştereklerin ucuz bir alternatifini sunuyor.

## Dikkate Alınması Gereken Sorular

- Bir model bir ders ünitesini dakikalar içinde taslak hâline getirebiliyorsa, açık içeriğin beraberinde taşıdığı lisansı, atıf zincirini ve gözden geçirme sürecini hâlâ ne gerekçelendirir?
- Bir kaynak lisans açısından açık, pratikte kapalı olabilir: dosya indirilebilir, ama etrafındaki ders öğrencilerin sahip olmadığı bir laboratuvarı, bir dili ya da bir bağlantıyı varsayar. Benimsemeyi bildirdiğinizde hangi açıklığı ölçüyorsunuz?
- Açık pedagoji öğrencilerden çalışmalarını yayımlamalarını ister. Bir öğrencinin üretici bir araçla ürettiği şeyin sahibi kim, yayımlanmasına kim rıza gösterir ve sonuç yanlış olduğunda bedeli kim taşır?
- Öğretmenin YZ okuryazarlığı açık öğretim uygulamasını yordar, ancak kurumsal destek arttıkça ilişki zayıflar. Bu tersine dönüş, desteğin yalnızca yardımcı olduğu varsayımı üzerine kurulu eğitim programları için ne anlama gelir?
- YZ tarafından üretilen metin telif hakkına konu değilse, makine tarafından yazılmış bir ders kitabı otomatik olarak açık mıdır ve bu, OER’nin kamu finansmanı savını ne yapar?

## Giriş

Açık eğitim açık kaynak değildir ve bu karışıklık her ikisine de pahalıya mal olur. Açık kaynak, **bir geliştiricinin yayımladığı ve lisansladığı artefaktlarla** ilgilidir; başta kod, model ağırlıkları ve veri kümeleri olmak üzere, böylece bir sistem lisanslanabilir, denetlenebilir, değiştirilebilir ve yeniden konuşlandırılabilir. Açık eğitim ise **bir öğretmenin ne ödev verdiği ve bir öğrencinin ne ürettiğiyle** ilgilidir ve lisanslaması, ikinci bir kurumun izin istemeden bir kaynağı ikame edebilmesi, çevirebilmesi, yeniden harmanlayabilmesi ya da düzeltebilmesi için vardır. İkisi ortak bir hukuki düzeneği (eğitimde Creative Commons, kodda izin verici yazılım lisansları), ortak bir üretim modelini (gönüllü ve hibe destekli topluluklar) ve artık ortak bir karşıtı paylaşır: artefaktı neredeyse bedava üretme kapasitesi her ikisinin de ekonomik gerekçesini sarsan üretici YZ.

Ayrıştıkları yer önemli olan yerdir. Açık kaynak bir sürüm, sistemin yeniden kurulup kurulamadığına ve incelenebilirliğine göre değerlendirilir. Açık bir kaynak ise farklı öğrencileri, farklı bir dili ve farklı bir bütçesi olan bir öğretmenin onu gerçekten kullanıp kullanamayacağına göre değerlendirilir; bu teknik değil pedagojik bir iddiadır ve açık eğitimin lisanslama savının yanında her zaman bir uygulama savı taşımasının nedeni de budur. [[deimann-rethinking-openness-ai-2026|Deimann ve Lukács (2026)]] bu noktanın en keskin hâlini ortaya koyar: yirmi beş yıllık açıklık savunuculuğunun ardından eğitimin ortasındaki kurumsal rejim olduğu gibi kaldı, çünkü hareket bildirilere ve niş projelere odaklandı.

Bu bilgi tabanındaki YZ dönemi literatürü bu nedenle aynı anda üç şeyle ilgilidir: kaynak, uygulama ve üretim neredeyse bedavayken bunlardan birinin ayakta kalıp kalamayacağı. Kaynak açısından sorular şunlardır: onu kim üretiyor, kim lisanslıyor ve YZ tarafından yazılmış bir kaynak açık sayılır mı? Uygulama açısından ise açık pedagojinin öğrencilerden ne istediği ve onlara ölçülebilir bir şey öğretip öğretmediğidir.

### Açıklığın gerçekte kapsadıkları

Açık eğitim kaynağı, yeniden kullanıma, revizyona, yeniden harmanlamaya ve yeniden dağıtıma izin veren bir lisans altında yayımlanmış içeriktir. Alandaki her şey bu iznin ve atıf yükümlülüğünün türevidir. [[gonzalez-miy-active-learning-mentoring-ai-oer-2026|González Miy (2026)]] bu yükümlülüğün küçük bir projede nasıl göründüğünü gösterir: iki hafta çevrim içi çalışan on bir katılımcı altı sayfalık bir site, bir sohbet botu, bir kılavuz ve beş video eğitim üretmiş ve bunları CC BY-NC-SA altında yayımlamıştır; ortaya çıkan paket şeffaflıkta yüksek puan alırken lisanslama, yinelenebilirlik, uyarlanabilirlik ve erişilebilirlikte yalnızca orta düzeyde kalmıştır. Addan açık, kullanımda kısmen açık.

Lisanslama literatürü ayrıntılıdır, çünkü başarısızlıklar ayrıntılıdır. [[ryu-developing-ai-literacy-oer-2026|Ryu (2026)]] on altı çekirdek makale, on yedi makalelik bir genişletme ve otuz altı hedefli referanstan oluşan amaçlı bir derlemden açık lisanslı YZ okuryazarlığı materyalini incelemek üzere yedi ilkeli bir rubrik kurar. [[atenas-oer-digital-public-goods-2026|Atenas, Farrow, Caldwell, Costello ve Havemann (2026)]] yönetişim biriminin kaynaktan onu barındıran altyapıya kayması gerektiğini savunur; çünkü bakımı yapılan bir platform olmadan tek tek dosyalardan oluşan bir müşterek, müşterek değil bir parçalanma sorunudur.

### Üretim çöküşü ve dijital kamusal mallara dönüş

Ders üretimi, değişimin hâlihazırda ölçülebildiği yerdir: [[mooc-to-maic|MAIC]], MOOC üretiminin LLM güdümlü çok ajanlı üretimle ders başına kabaca \$25,000 ve 60 saatten \$2’nin altına ve 30 dakikaya çöktüğünü bildirir. Üretim maliyeti sıfıra yaklaşırsa OER’nin para tasarrufu sağladığı savı gücünü yitirir; geriye lisanslama özgürlüğü, doğrulanabilirlik ve kalite güvencesi kalır.

[[tlili-double-edged-sword-oer-generative-ai-2026|Tlili, Farrow, Bozkurt, Amiel, Wiley ve Downes (2026)]] bu değişimi beş çerçeve soru etrafında düzenler ve rahatsız edici bir hukuki okumaya varır. Amerika Birleşik Devletleri Telif Hakkı Bürosu yalnızca istek metinlerini yazarlık için yetersiz saydığından, tamamen YZ tarafından üretilmiş bir kaynak kamu malı hâline gelebilir ve katı bir okumayla varsayılan olarak açık sayılabilir. Karşıt başarısızlık için kullandıkları terim openwashing’tir: bir artefaktın açık diye sunulurken eğitim verisinin, iş hattının ya da lisansının açık olmaması. Yazarlık sorunu, lisans sorunundan önce bir hukuk sorunudur ve [[legal-issues-and-risks|hukuki ve telif boyutu]] mülkiyetten olduğu kadar suiistimalden de geçer.

Bu literatürdeki politika yanıtı yeniden sınıflandırmadır. Atenas ve arkadaşları OER’yi dijital kamusal mallar olarak ele almayı önerir; bu, çareyi daha fazla içerik üretmekten kamu tarafından yönetilen, ticari olmayan altyapı kurmaya taşır. Bu altyapıyı ROAM-X ilkeleri ve FAIR veri standartlarıyla ölçer, hâlihazırda iki milyardan fazla açık lisanslı eser ve 303 İnternet Evrenselliği Göstergesi barındıran bir görünüm betimlerler. Bu, yirmi yılını içerik üretimine harcamış bir hareket için savunulabilir bir yön değişikliğidir.

Açıklığın kurumsal gerekçesi özerklik üzerinden de kurulur. [[panda-editorial-digital-transformation-open-education-2026|Panda (2026)]] bir başyazıda açık ve esnek öğrenmedeki dijital dönüşümün teknoloji benimsemesi değil pedagojik dönüşüm olduğunu ve bir teknolojinin ancak yerel bağlamda uygun bir pedagojiyle hizalandığında inandırıcılık kazandığını savunur. [[rodes-paragarino-oer-generative-ai-framework-2026|Rodés-Paragarino ve Atenas (2026)]] bunu, belge analizi, uzman doğrulaması ve Aralık 2025’te Bilbao’da 81 katılımcıyla yapılan katılımcı bir çalıştayla kurulmuş, OER ile üretici YZ’nin sorumlu bütünleşmesine dair yedi sütunlu bir çerçeveye dönüştürür.

### Açık pedagoji ve uygulama dönüşü

Açık pedagoji öğrenciyi tüketiciden katkı sunana taşır: bir ödev yayımlanan, lisanslanan ve yeniden kullanılabilen bir şey üretir. [[clinton-lisell-open-pedagogy-ai-tools-2026|Clinton-Lisell (2026)]] fikrin alandaki en temiz sınamasını sunar. Çocuk gelişimine giriş dersinin iki şubesi aynı ders kitabını güncellemiş, bunlardan biri üretici YZ araçlarıyla çalışmıştır. 113 ödev genelinde her iki şubedeki öğrenciler bilgi okuryazarlığı becerilerinin arttığını bildirmiş ve artış iki şube arasında istatistiksel olarak ayırt edilemez olmuştur: F(1, 84) = 47.30, p < 0.001 ve kısmi η2 = 0.36 düzeyindeki bir zaman etkisine karşılık F(1, 84) = 0.04, p = 0.85 düzeyinde bir zaman × şube etkileşimi. YZ şubesi daha fazla iş tamamlamış ve 180 üzerinden 173,86’ya karşı 174,73 ile biraz daha düşük puan almıştır.

Uygulamanın kendi olgunluk literatürü vardır. [[duan-open-educational-practices-evolution-2026|Duan (2026)]] PRISMA 2020 uyarınca 540 kaydı eleyerek açık eğitim uygulamasının on dört modeline indirmiş, bunları üç boyutta karşılaştırmış ve üretici YZ’nin yerleşik modellerin yerini almak yerine onların altında durduğu sonucuna varmıştır; makale bu savı TPACK’e göre konumlandırır. [[ahmadfard-interactive-oer-review-2026|Ahmadfard (2026)]] 1970’ten bu yana uzanan yapılandırılmış bir derlemede etkileşimsellik konusunda benzer bir sonuca varır: etkileşimli özellikler gösterilmiş bir etkiden çok bir tasarım savıdır ve bildirdiği en güçlü etki büyüklükleri OER içinde ölçülmek yerine daha eski fizik eğitimi çalışmalarından ödünç alınmıştır.

İki çalışma daha, uygulama katmanının ne kadar hızlı bir yönetişim katmanına dönüştüğünü gösterir. [[patino-ai-international-cooperation-open-education-2026|Patiño, Martínez-Pérez, Ramírez-Montoya ve Miranda (2026)]] UNESCO ile ICDE’nin 13 ülkeden 10 ekipte 110 katılımcıyla yürüttüğü bir ikamet programını belgeler; ancak anket tabanları yanıt oranı verilmeyen 54 kurumdan gelen 72 yanıttır ve bu, BM 2030 Gündemi’ni hedefleyen bir yol haritası için zayıf bir dayanaktır. [[guo-teachers-ai-literacy-open-education-practices-2026|Guo, Lu ve Gao (2026)]] ise 30 Çin ilinde 512 öğretmene YZ okuryazarlığının açık öğretim uygulamasına dönüşüp dönüşmediğini sormuş ve yenilikçi davranış üzerinden dolaylı bir yol bulmuştur: düşük kurumsal destekte 0.218 olan bu yol, yüksek destekte anlamsız 0.042’ye düşmektedir.

### Eşitlik, sürdürülebilirlik ve Küresel Güney

Açık içeriğin eşitlik savı en eskisidir: fiyatı olmayan bir kaynağın fiyatı yükseltilemez. Aynı zamanda ileri sürülmesi en kolay, sınanması en seyrek olanıdır. YZ dönemi versiyonları daha dikkatlidir. Atenas ve arkadaşları OER’yi marjinalleştirilmiş topluluklar ve veri toplamaya anlamlı katılım için bir kaldıraç olarak çerçevelerken, üretilmiş kaynaklara aşırı bağımlılığın insan yaratıcılığını ve muhakemesini değersizleştirme riski taşıdığı uyarısını yapar. Tlili ve arkadaşları üretimin bu kaldıracı bozduğu mekanizmaları adlandırır: çeviri hatası, eğitim verisi yanlılığı ve üretilmiş içeriğin bir sonraki modeli eğiten derlemlere geri döndüğü bir halüsinasyon döngüsü.

Sürdürülebilirlik iki kez girer: finansman ve enerji olarak. Dijital kamusal mallar savı özünde bir sürdürülebilirlik savıdır: hibe destekli dosyalardan oluşan parçalanmış bir müşterek, hibelerini aşamaz; oysa kamu tarafından yönetilen bir altyapı aşabilir. Çevresel sav, daha geniş açıklık literatüründe ve bu bilgi tabanının [[sustainability|sürdürülebilirlik]] kavramında görünür; orada model çıkarım maliyetinin bildirilmesi sonradan akla gelen bir şey değil, açık uygulamanın yükümlülüğü sayılır.

[[global-south|Küresel Güney]] boyutu, kanıtın en çok inceldiği yerdir. Bu gruptaki Batı dışı vakalar gerçektir ama azdır: bir Latin Amerika işbirliği ikamet programı, Çinli açık üniversite öğretmenleri ve altyapının katılımın önkoşulu olarak çerçevelenmesi. Açıklığın kapasiteyi otomatik olarak yeniden dağıttığı iddiaları bu çalışmalarca desteklenmemektedir ve birkaçı bunu açıkça söyler.

### Yazma ve öneri sistemlerinin argümanla kesiştiği yer

Bu gruptaki iki makale politika değil üretim sistemleriyle ilgilidir. [[peng-personalized-recommendation-oer-2026|Peng (2026)]] OER için hibrit bir derin önerici geliştirir ve 2,400 etkileşim kaydı üzerinde yüzde 93,6 doğruluk, yüzde 92,5 kesinlik, yüzde 91,0 duyarlılık ve 90,2 F1 puanı bildirir. Kendi karşılaştırma tablosu, eşit duyarlılıkla 90,8 F1 düzeyinde bir BERT4Rec temel çizgisi gösterir; veri kümesi bölümü ise kullanıcı sayısını, öğe sayısını ve seyrekliliği yer tutucu olarak bırakır. Modelleme iddiası ölçülüdür; kalıp tanıdıktır: güçlü bir temel çizgiye göre ilerleme, başlıktan küçüktür.

İkincisi, üretici bir sistemin açık, içeriğinin ise kapalı olabileceğini hatırlatır. OATutor, MIT lisanslı bir kod tabanını CC BY lisanslı OpenStax cebir metinleriyle eşleştirir; bu da kodun ve içeriğin lisanslarının tasarımla uyumlu tutulması gerektiği anlamına gelir. Bu tek teknik yükümlülük, açık kaynak ile açık eğitim ilişkisinin en açık pratik biçimidir: farklı nesneler, aynı hukuki düzenek ve her ikisini bir araya getirenin üzerine düşen bir uyumluluk kısıtı.

## Yaygın yanlış anlamalar

**“Açık eğitim ile açık kaynak aynı açıklıktır.”** Ortak bir lisanslama düzeneğini ve ortak bir üretim modelini paylaşırlar, ama birbirlerinin yerine geçmezler. Açık kaynak, kurulabilir ve incelenebilir bir sisteme dair bir iddiadır; açık eğitim ise kullanılabilir ve uyarlanabilir bir öğretim kaynağına dair bir iddiadır. Bir okul kapalı bir ders kitabı üzerinde tamamen açık kaynak yazılımla çalışabilir ve birçoğu çalışır.

**“Açık olmak öğrenci için ücretsiz olmak demektir ve bütün fayda budur.”** Maliyet, ölçülebilir olan yarıdır. Diğer yarı izindir: revize edilebilen bir kaynak, ikinci bir kurumun düzeltebildiği, çevirebildiği ve yerelleştirebildiği kaynaktır. Bu gruptaki çalışmalar tamamlama ve memnuniyeti uyarlamadan çok daha sık bildirir; bu yüzden uyarlama savı büyük ölçüde sınanmamış olarak kalır.

**“YZ içeriği o kadar ucuzlatır ki OER gereksizleşir.”** Tersi okuma da mümkündür ve daha iyi desteklenir. Üretim neredeyse bedavaysa kıt mallar lisans, atıf zinciri, gözden geçirme süreci ve bakımı yapılan platform olur. Bu literatürün üretim yerine yönetişim ve altyapıda birleşmesinin nedeni budur.

**“Açık bir ödeve YZ araçları eklemek öğrenmeyi iyileştirir.”** Buradaki tek yarı deneysel sınama, iki kolda da algılanan beceri artışı bulmuş, aralarında saptanabilir bir fark görmemiştir; bunun yanında YZ kolunda tamamlama daha yüksek, puanlar ise biraz daha düşüktür. YZ öğrencilerin ne ürettiğini değiştirdi, öğrendiklerini bildirdikleri şeyi değiştirmedi.

## Bağlı kavramlar

- [[open-source]]
- [[legal-issues-and-risks]]
- [[regulation]]
- [[generative-ai]]
- [[educational-policy-ai]]
- [[governance]]
- [[equity-in-ai-education]]
- [[curriculum-design]]
- [[active-learning]]
- [[collaborative-learning]]
- [[authentic-assessment]]
- [[sustainability]]
- [[global-south]]
- [[ai-literacy]]
- [[digital-divide]]
- [[accessibility]]
- [[change-management]]

## Bağlı makaleler

- [[tlili-double-edged-sword-oer-generative-ai-2026]] — Üretici YZ üretime girdiğinde OER için beş çerçeve (Tlili ve diğerleri, 2026)
- [[atenas-oer-digital-public-goods-2026]] — OER’nin dijital kamusal mal olarak ele alınması ve yönetilen altyapı savı (Atenas ve diğerleri, 2026)
- [[deimann-rethinking-openness-ai-2026]] — Yirmi beş yıllık açıklığın kurumsal ortayı neden olduğu gibi bıraktığı (Deimann ve Lukács, 2026)
- [[clinton-lisell-open-pedagogy-ai-tools-2026]] — İki ders şubesinde YZ araçlarıyla ve araçsız açık pedagoji (Clinton-Lisell, 2026)
- [[duan-open-educational-practices-evolution-2026]] — Açık eğitim uygulamasının on dört modeli ve YZ’nin bunlar içindeki yeri (Duan, 2026)
- [[guo-teachers-ai-literacy-open-education-practices-2026]] — 30 Çin ilinde öğretmen YZ okuryazarlığı ve açık öğretim uygulaması (Guo ve diğerleri, 2026)
- [[rodes-paragarino-oer-generative-ai-framework-2026]] — OER ile YZ’nin sorumlu bütünleşmesi için yedi sütunlu bir çerçeve (Rodés-Paragarino ve Atenas, 2026)
- [[gonzalez-miy-active-learning-mentoring-ai-oer-2026]] — Sanal bir laboratuvarda mentorluk ve YZ-OER üretimi (González Miy, 2026)
- [[ryu-developing-ai-literacy-oer-2026]] — YZ okuryazarlığı OER’sini incelemek için yedi ilkeli rubrik (Ryu, 2026)
- [[ahmadfard-interactive-oer-review-2026]] — OER’de etkileşimsellik: bulgu değil tasarım savı (Ahmadfard, 2026)
- [[patino-ai-international-cooperation-open-education-2026]] — Açık eğitimde uluslararası işbirliği: araçsal bir vaka (Patiño ve diğerleri, 2026)
- [[peng-personalized-recommendation-oer-2026]] — OER için, iddia edilenden güçlü bir temel çizgi karşısında hibrit önerici (Peng, 2026)
- [[panda-editorial-digital-transformation-open-education-2026]] — Açık öğrenmede dijital dönüşümün pedagojik dönüşüm olması (Panda, 2026)
