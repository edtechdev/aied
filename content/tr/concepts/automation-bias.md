---
title: Otomasyon Önyargısı
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [cognitive-offloading, human-ai-collaboration, ai-literacy]
pedagogy: [metacognition]
ethics: [trust-calibration, automation-bias]
audience: [instructors, learners, administrators, software developers]
confidence: high
connected_faqs: [reducing-over-reliance, verify-ai-output]
translation_of: concepts/automation-bias
source_updated: "2026-11-04T18:49:36-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sentez:** Otomasyon önyargısı, sistem doğru olsa bile YZ destekli bir kararı yanlış yapan insan başarısızlığıdır. İnsanlar, kendileri aynı sonuca varmış olsalardı sorgulayacakları otomatik bir öneriyi kabul eder ve onunla çelişecek kanıtı aramayı bırakırlar. Eğitimde belirleyici yargılar hâlihazırda birkaç noktada otomatikleşmiştir — puanlar, hazırbulunuşluk işaretleri, gözetim kararları, zemin gerçeği etiketleri, ipuçları — dolayısıyla önyargı, çıktıyı onaylayan kişiye yapışır. Külliyat bunu bir kişilik özelliğinden çok bir iş akışı özelliği olarak ele alır: doğrulamanın isteğe bağlı olduğu, çıktının akıcı olduğu ve denetleyicinin kuşku duymanın bedelini ödediği yerlerde ortaya çıkar.

## Düşünülmesi Gerekenler

- Bir öğretmen bir algoritmayı geçersiz kıldığında, bu geçersiz kılma genellikle denetimin kendisidir. Öğretmen algoritmanın kendisinden daha iyi bilgilendirildiğine inandığında bu denetime ne olur?
- İki tür başarısızlık mümkündür: yanlış bir öneriyi kabul etmek ve doğru bir öneriyi reddetmek. Kurumunuzun süreci hangisini yakalar ve hangisini ödüllendirir?
- Bir gösterge paneli bir öğrenciyi risk altında olarak işaretlerse, onunla aynı fikirde olmamak için neyi bilmeniz gerekir — ve bu bilgi nereden gelirdi?
- [[trust-calibration|Güven araştırması]], kendinden kuşku duyan insanların makinelere en çok yaslandığını öngörür. Külliyatın öğrenciler arasında bunun tersini bulması ne anlama gelir?
- Bir YZ [[feedback]] yazdığında, notu belirlediğinde ya da müdahaleyi taslaklaştırdığında kimin yargısı yerinden edilir — ve [[human-in-the-loop-ai|döngüdeki insanın]] gerçekten müdahale fırsatı var mı, yoksa yalnızca biçimsel bir fırsat mı?

## Giriş

Öğrenciler ve [[teacher-role|öğretmenler]] hâlihazırda yargı üreten sistemlerin yanında çalışıyor: kompozisyon puanlayıcıları, katılım [[visualization|gösterge panelleri]], gözetim dedektörleri, etiket üreten açıklama modelleri, öğretim ipuçları. Bu çıktıların her biri, kabul edip etmeyeceğine karar vermesi gereken bir kişiye ulaşır ve otomasyon önyargısı o kişinin denetleme konusundaki öngörülebilir başarısızlığını adlandırır. Bu sayfa sorunun insan tarafını ele alır. Bir modelin içindeki önyargı — çarpık eğitim verisi, gruplar arasında eşit olmayan hata oranları — [[bias-mitigation]] sayfasında belgelenmiştir. Buradaki soru, model konuştuktan sonra ne olduğudur.

Kavram eğitim için önemlidir çünkü döngüdeki insanlar nadiren uzmandır. Bir öğrenci hakkındaki algoritmik bir öneriye güvenip güvenmeyeceğine karar veren bir öğretmen, odada otuz öğrenci daha olan ve hiçbir denetim izi bulunmayan bir alan uzmanıdır. Bir kompozisyonu değerlendirmeden önce kendisine makine puanı gösterilen bir puanlayıcıdan, görünür bir geçmişi olmayan bir sayıyla aynı fikirde olmaması istenmektedir. Otomasyon önyargısı bu konumları zorlaştıran şeydir ve “bir insan çıktıyı gözden geçirir” güvencesinin kulağa geldiğinden neden daha zayıf olduğunun da yanıtıdır.

## Önyargının ne olduğu ve ne olmadığı

Literatür iki hatayı ayırır. **İhmal**, otomatik sistemin harekete geçmesi gerektiğinde hiçbir şey yapmadığını ya da yakalaması gereken bir durumu kaçırdığını fark etmemektir.

**Komisyon** ise sistemin yanlış ürettiği bir eylemi ya da yargıyı kabul etmektir. Eğitimdeki versiyonu tanıdık olanıdır: iyi puanlanıp yeniden okunmayan kompozisyon, işaretlenip görüşülmeyen öğrenci, denetlenmeden izlenen ipucu.

Üç komşu kavram onunla karıştırılmaya açıktır ve külliyat bunları ayırır:

- [[trust-calibration|Güven kalibrasyonu]], bir kişinin sisteme yaslanmasının sistemin gerçek güvenilirliğine göre durumudur. Otomasyon önyargısı, yanlış kalibrasyonun yol açtığı özel hatadır ve ikisi farklı biçimlerde ölçülür.
- [[cognitive-offloading|Bilişsel yükü dışarı aktarma]], zihinsel işi bir araca devretmektir. Dışarı aktarma sağlam olabilir; otomasyon önyargısı, devretmenin gözden geçirmeden kaçtığında ne olduğudur.
- Model tarafındaki önyargı sistemin bir özelliğidir. Otomasyon önyargısı etkileşimin bir özelliğidir ve model tamamen doğru olsa bile geçerliliğini korur.

Bunu canlı kılan uyumsuzluk, otomasyon önyargısının makinede hiçbir hata gerektirmemesidir. [[geoscience-field-learning-genai-2026|Üretici YZ’nin jeobilim incelemesi]] saha öğreniminde üç mekanizmayı sabitleme, doğrulama önyargısı ve otomasyon önyargısı üzerine kurar — dikkatin önceden yapılandırılması, yorumlayıcı sabitleme ve otorite aktarımı — ve hiçbirinin çıktının yanlış olmasını gerektirmediğini açıkça belirtir.

## Eğitim kararları neden riske açık

Riskin büyük kısmını beş alan taşır ve her birinin onay veren farklı bir kişisi vardır:

1. **Puanlama ve geri bildirim.** [[automated-assessment|Otomatik puanlayıcılar]] ve yazma analizörleri, bir insanın çalışmayı yeniden okumadan kabul edebileceği bir sayı ya da yorum üretir.
2. **Analitik ve erken uyarı.** [[learning-analytics|Analitik gösterge panelleri]] tıklama akışı ve teslim verilerinden katılımı ve riski çıkarır, sonra bu çıkarımı bir bayrak olarak sunar. [[recommender-systems-and-learning-paths|Öneri sistemleri]] daha ileri gider ve öğrencinin sırada ne yapması gerektiğini sıralar.
3. **Gözetim ve suistimal tespiti.** [[remote-proctoring|Gözetim sistemleri]] ve [[ai-detection|tespit araçları]], çoğu zaman zaman baskısı altında bir insanın karara bağladığı bir şüphe üretir.
4. **Zemin gerçeğinin kendisi.** Modeller, araştırmanın sonradan gerçek olarak ele aldığı etiketleri açıkladığında önyargı [[educational-measurement|ölçme]] aygıtına girer.
5. **Öğrenene dönük destek.** [[intelligent-tutoring|İpuçları]], açıklamalar ve taslaklar, öğrencileri materyalin kendi kurgularını yapmak yerine hazır bir anlatımını kabul etmeye davet eder.

## Külliyatın gösterdikleri

### Puanlara ve önerilere boyun eğen öğretmenler

Mekanizmanın en açık ifadesi öğretmene dönük çalışmada bulunur. [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026|Hoppe vd. (2026)]], performansı ve tamamlama süresini gören ama [[motivation|motivasyon]], öğrenme geçmişi ve sınıf dinamikleri ona görünmez kalan tanılama sistemlerini betimler ve otomasyon önyargısının öğretmenleri bu ince dilim üzerine kurulu önerilere boyun eğmeye itebileceği uyarısında bulunur. Önerdikleri çözüm daha iyi bir puan değil, farklı bir tutumdur: açıklamanın zayıf olduğu yerde öğretmenler, öğrencilerin YZ kullanırken nasıl davrandığına dair kendi gözlemlerine daha çok yaslanmalıdır.

En keskin boşluk yargı noktasındadır. [[human-in-the-loop-ai-scoring-national-assessment-2026|Ulusal değerlendirme puanlama çalışması (2026)]] puanlayıcılara makine puanlarını inceletir ve yazarları test edilmemiş mekanizmayı doğrudan adlandırır: değerlendirmeden önce YZ puanı gösterilen puanlayıcıların bu puanlara sabitlenip sabitlenmediği ya da onlara boyun eğip eğmediği ölçülmemiştir ve bir sonraki adım olarak körleştirilmiş ile körleştirilmemiş puanlayıcı deneylerini önerirler. Dolayısıyla o tasarımdaki döngüdeki-insan iddiası bir bulgu değil bir varsayımdır — ve bu, tasarımın iyi versiyonudur.

### Analitik gösterge panelleri ve döngüdeki insan iddiası

[[in-the-loop-educational-ai-learning-sciences-2026|Döngüdeki eğitim YZ’sine ilişkin öğrenme bilimleri incelemesi (2026)]] örüntüye genel biçimini verir: gösterge panelleri katılımı tıklamalardan çıkarır, otomatik [[writing-education|yazma geri bildirimi]] yüzeysel özellikleri argümanın önüne geçirir ve erken uyarı trafik ışıkları yörüngeleri önceden yorumlar. Otomasyon önyargısı her birini katmanlar ve inceleme, [[trust]]’ı istikrarlı bir tutum olarak değil şeffaflık, algılanan yetkinlik ve anlamlı bir geçersiz kılma hakkıyla biçimlenen sosyoteknik bir sonuç olarak ele alır.

Külliyattaki iki tasarım bunu ciddiye alır. [[factria-responsible-institutional-analytics-2026|FACTRIA (2026)]], öneri yapmayı reddederek bir insanı döngüde tutar: dört gerçek analitik vakasını okuyan on bir [[stakeholders|paydaşla]] yapılan ve Cohen k = 0.76 ile kodlanan sesli düşünme çalışmasında [[conversational-ai|sohbet botu]] yorumlamayı desteklemiş ve karar vermeyi açıkça reddetmiştir; yazarları da otomasyon önyargısını ve eleştirel olmayan kabulü artık riskler olarak işaretler. [[ludia-udl-ai-thought-partner-2026|LUDIA (2026)]] her çıktıyı bir eğitimciden geçirir, sonra güvencenin göründüğünden zayıf olduğunu kabul eder; çünkü zayıf bir öneriyi kabul etmeye en yatkın eğitimci, LUDIA’nın [[universal-design-for-learning|evrensel öğrenme tasarımını]] anladığına güvenen kişidir.

Bunları birbirine bağlayan kavramsal nokta [[extended-minds-coupling-flexibility-2026|genişletilmiş zihinlerin eşleşme-esneklik açıklamasından (2026)]] gelir: yalnızca biçimsel bir kabul ya da ret fırsatı, otomasyon önyargısı onu bozuyorsa insanı yargının üretiminin içine yerleştirmez. Gözetim, müdahale için özsel bir fırsat gerektirir ve kimsenin basmadığı bir ret düğmesi gözetim değildir.

### Zemin gerçeği ve LLM açıklamaları

Kavram araştırma hattına açıklama yoluyla ulaşır. [[ground-truth-reliability-aied|Zemin gerçeğinin güvenilirlik analizi (2026)]] LLM’leri açıklayıcı olarak kullanmanın risklerini sıralar: çıktıya doğrulama olmadan aşırı güvenmek, bir modelin kendi çıktısını değerlendirdiği döngüsel doğrulama ve etiketlerin yanıltıcı biçimde tutarlı kalırken yanlışa kaydığı sessiz bozulma. Burada otomasyon önyargısı, sonraki her ölçümün kendisine göre puanlandığı referans standardını kirletir.

### Öğrenenler ve epistemik otorite

Öğrenciler için mekanizma, düşünmenin kime atfedildiğiyle ilgilidir. [[polished-artifacts-fragile-engagement-2026|Cilalı ürünlerin CSCL analizi (2026)]] sosyal-bilişsel kolunu otomasyon önyargısına dayandırır — YZ’ye durumun haklı gösterdiğinden daha büyük epistemik yetkinlik atfetmek — ve bunu cilalı dış ürünlerin bir kapanmaya yol açtığı ikinci bir kolla eşler. [[page-cognitive-partnership-cycle-human-ai-2026|Bilişsel ortaklık döngüsü (2026)]] otomasyon önyargısını, yinelemenin düşünmenin yerini almasına izin veren dört başarısızlık biçimi arasında sayar; yanında [[cognitive-offloading|dışarı aktarma]], anlama yanılsaması ve özyinelemeli hata büyütmesi vardır. [[eight-mode-ai-engagement-typology-2026|Etkileşim tipolojisi (2026)]] bunu sekiz biçimden biri olarak ele alır: modele literatürün ne dediğini sormak, karakteristik riski yanıtı kabul etmek olan bir Kâhin hamlesidir.

İki makale dengeleyicinin bir kural değil bir eğilim olduğunu savunur. [[assessing-student-drive-framework-2025|Drive çerçevesi (2025)]], otomasyon önyargısına ve dışarı aktarmanın ardından gelen beceri körelmesine karşı bilişsel bir güvence olarak etkin [[agency|insan failliğini]] önerir. [[sun-llm-nursing-education-professional-identity-2026|Hemşirelik incelemesi (2026)]], 47 ülkeden 489 çalışmayı Benner’ın beceri edinimi, bilişsel yük kuramı, otomasyon önyargısı ve Wenger’ın kimlik oluşumu üzerinden okuyarak, aynı aracın yetkinliğe dışsal işi mi yoksa yetkinliğin kurucu işini mi yerinden ettiğine bağlı olarak yardım ettiği ya da zarar verdiği sonucuna varır.

### Önyargının ölçülmek yerine risk olarak anıldığı durumlar

Külliyatın büyük bir bölümü otomasyon önyargısını test etmeden bir tehdit modelinde sıralar ve bu ayrım kavramın ne kadar ağırlık taşıyabileceği açısından önemlidir. [[ahmadfard-interactive-oer-review-2026|Etkileşimli OER incelemesi (2026)]] bunu, öğrenen ve öğretmen failliğini aşındıran yinelenen riskler arasında sayar; ölçmez, listeler. [[alshahrani-health-sciences-ai-use-2026|Sağlık bilimleri anketi (2026)]], 310 öğrencinin [[ethics|etik]] kaygılarını otomasyon önyargısını açıkça kapsayan bir [[professional-training|mesleki eğitim]] gerekçesi olarak okur. [[ai-literacy-legal-translation-2026|Hukuk çevirisi çalışması (2026)]], sonradan düzenleme ve doğrulamanın notlandırılan beceriler olarak öğretilmesini ister ve yanlış çevirilerin kolayca gözden kaçmasına yol açan otomasyon önyargısı ile kalite yanılsaması baskılarını adlandırır. [[morales-cevallos-ai-forensic-science-education-2026|Adli bilimler incelemesi (2026)]] otomasyon önyargısını kapsadığı çalışmalarda belgelenmiş bulur ve bildirilen başarısızlıklardan kurulu vaka temelli alıştırmalar önerir. [[rana-genai-design-thinking-2025|Tasarım odaklı düşünme çalışması (2025)]] bunu bir tasarım gereğine dönüştürür: insan yargısını merkezde tutan, hem dışarı aktarmaya hem otomasyon önyargısına karşı koyan [[scaffolding|iskeleler]].

## Kanıtın zayıf, karışık ya da tersine döndüğü yerler

**Başarısız olan bir öngörü.** Otomasyon önyargısı literatürü, kendi yargısından kuşku duyan insanların makinelere en çok yaslandığını öngörür; dolayısıyla düşük [[self-efficacy|öz yeterlilik]] yüksek aşırı güven üretmelidir. [[kim-overtrust-ai-literacy-2026|Aşırı güven çalışması (2026)]] bunun tersi işareti buldu: kendine güvenen öğrenciler [[generative-ai|üretici YZ]]’yi daha erken benimsedi, olumlu deneyimler biriktirdi ve araca daha çok güvendi. Tasarım kesitseldir ve hiçbir sıralama kuramaz; yazarlar bunu birden fazla kez söyler, dolayısıyla bulgu mekanizmayı çürütmez — ama sınıf versiyonunun laboratuvar versiyonunun öngördüğü yönde işlemeyebileceğini gösterir.

**Belirleyici deney eksik.** Külliyatta hiç kimse, makine puanlarıyla sabitlemeyi yalıtacak körleştirilmiş–körleştirilmemiş puanlama karşılaştırmasını yapmamıştır; bu yüzden puanlamadaki döngüdeki-insan güvencesi akla yatkınlığa dayanır. Aynısı gösterge panelleri için geçerlidir: çalışmalar öğretmenlere ne gösterildiğini betimler, onun yüzünden neyi farklı yaptıklarını nadiren.

**Kavramsal iddialar ölçümlerden fazla.** [[haiml-human-centered-ai-metacognitive-model-2026|HAIML modeli (2026)]] çerçevesini otomasyon önyargısı araştırması üzerine kurar ve onun testini değil bir öğretim çerçevesi sunar. Bilişsel ortaklık döngüsü altı önerme ve bir araştırma gündemi sunar. İkisi de tasarım için yararlıdır ve ikisi de olgunun eğitimdeki büyüklüğünün kanıtı değildir.

**En güçlü kısım, bedeller argümanı.** Denemeler mekanizmayı kurumsal sonuçlara bağlar: [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026|Muñiz ve Castro Samayoa (2026)]] otomasyon önyargısını eleştirel yurttaşlık pratiğini aşındıran üç mekanizmadan biri olarak adlandırır ve [[academic-erasure-complexity-ai-writing-2026|YZ kullanımının kurumsal denetimine ilişkin analiz (2026)]] bunu [[educational-policy-ai|YZ politikasını]] uygulamanın duygusal emeğine bağlar. [[llm-fallacy-misattribution|LLM yanılgısının analizi]] en temiz yakın ayrımı sağlar: otomasyon önyargısı bir karar sırasında bir sisteme aşırı yaslanmakla ilgilidir, oysa onun konusu kullanıcının bir çıktının kendi yetkinliği olduğu algısıdır.

## Uygulama için çıkarımlar

- **Denetimi ucuz ve kör kılın.** İnsan yargısını makineninki gösterilmeden önce kaydedin ya da bir puanlama gelene kadar puanı saklayın. Körleştirme, külliyatın sürekli önerdiği ve test etmediği müdahaledir.
- **Sistemin ne görebildiğini açıklayın.** Yalnızca tamamlama süresi üzerine kurulu bir öneri bunu söylemelidir; öğretmenler ince bir girdinin ince olduğunu bilirse onu iskonto edebilir.
- **Ret düğmesini gözetim saymayın.** Bir kişinin ona basması için neyin doğru olması gerektiğini ve sürecin neyi ödüllendirdiğini sorun.
- **Doğrulamayı notlandırılan bir beceri olarak öğretin.** Sonradan düzenleme, yeniden hesaplama ve kaynak denetimi bir politika paragrafına değil [[curriculum-design|müfredata]] aittir.
- **Kurucu işi koruyun.** Hemşirelik kanıtı, savunmaya değer sınırın “YZ’siz görevler” değil uzmanlığın oluştuğu görevler olduğunu düşündürür.

## Yaygın yanlış anlamalar

- **“Yalnızca YZ yanlış olduğunda önemlidir.”** En temiz biçimde YZ doğruyken ve insan denetlemeyi bıraktığında işler; saha çalışmasındaki mekanizmalar yanlış bir çıktı gerektirmez.
- **“Düşük güven ya da yüksek güvenle aynı şeydir.”** Kalibrasyon bir durumdur; otomasyon önyargısı yanlış kalibre edilmiş bir iş akışının izin verdiği hatadır. Az güven kendi başarısızlığını üretir — iyi önerileri reddetmek.
- **“Döngüdeki bir insan bunu düzeltir.”** Döngü ancak müdahale fırsatı kadar iyidir ve puanlama çalışmaları sabitlemeyi ölçmemiştir.
- **“Bu bir öğrenci sorunudur.”** Külliyatın betimlediği her tasarımda onay verenler öğretmenler, puanlayıcılar, açıklayıcılar ve yöneticilerdir.
- **“Daha iyi eğitimin ortadan kaldırdığı bir karakter kusurudur.”** Eğitim yardımcı olur, ama aynı kişi doğrulamanın ucuz olup olmamasına, çıktının akıcı olup olmamasına ve aynı fikirde olmamanın bir bedeli bulunup bulunmamasına göre farklı davranır.

## Bağlı kavramlar

- [[trust-calibration]] — otomasyon önyargısının başarısızlığını adlandırdığı yaslanma durumu
- [[bias-mitigation]] — sistem tarafındaki karşılığı: modelin içindeki önyargı
- [[cognitive-offloading]] — zihinsel işin devri; denetlenmeyen kabul bunun bir sonucudur
- [[human-in-the-loop-ai]] — gücünü bu başarısızlığın belirlediği güvence
- [[explainable-ai]] — külliyatın önerdiği ve nadiren test ettiği şeffaflık müdahalesi
- [[learning-analytics]] — ihmal hatalarının yoğunlaştığı gösterge panelleri ve erken uyarılar
- [[recommender-systems-and-learning-paths]] — sırada ne yapılacağını sıralamak; öğrenci bunu yalnızca izleyebilir
- [[automated-assessment]] — insanın yeniden okumadan kabul edebileceği puan
- [[scaffolding]] — kabulden daha ucuz kalan denetimler
- [[self-efficacy]] — standart öngörünün dayandığı özellik
- [[ai-detection]] — zaman baskısı altında insanların yargıladığı tespit
- [[remote-proctoring]] — bir modelin ürettiği ve bir kişinin karara bağladığı şüphe
- [[ai-literacy]] — notlandırılan bir beceri olarak doğrulamanın yaşayacağı yer

## Bağlı makaleler

- [[hoppe-teachers-diagnostic-skills-ai-formative-assessment-2026]] — ince veri üzerine kurulu önerilere boyun eğmemeleri için uyarılan öğretmenler
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — puanlayıcıların YZ puanlarıyla sabitlenmesini test edilmemiş risk olarak adlandırır ve körleştirme önerir
- [[in-the-loop-educational-ai-learning-sciences-2026]] — genel örüntü olarak gösterge panelleri, yüzeysel özellik geri bildirimi ve trafik ışıkları
- [[factria-responsible-institutional-analytics-2026]] — on bir paydaş, dört vaka, öneri yapmayı reddeden bir sohbet botu
- [[ludia-udl-ai-thought-partner-2026]] — aracın alan bilgisine güvenmekle zayıflayan eğitimci güvencesi
- [[extended-minds-coupling-flexibility-2026]] — otomasyon önyargısı onu bozuyorsa biçimsel bir ret hakkı gözetim değildir
- [[ground-truth-reliability-aied]] — LLM açıklaması, döngüsel doğrulama ve sessiz etiket kayması
- [[polished-artifacts-fragile-engagement-2026]] — azalan epistemik çabanın sosyal-bilişsel kolu olarak otomasyon önyargısı
- [[page-cognitive-partnership-cycle-human-ai-2026]] — özyinelemeli insan-YZ işinde dört başarısızlık biçiminden biri
- [[eight-mode-ai-engagement-typology-2026]] — Kâhin biçimi ve karakteristik riski
- [[assessing-student-drive-framework-2025]] — otomasyon önyargısına karşı güvence olarak etkin insan failliği
- [[sun-llm-nursing-education-professional-identity-2026]] — YZ’nin dışsal mı kurucu mu işi yerinden ettiğine dair 489 çalışma
- [[geoscience-field-learning-genai-2026]] — kanıta bağlı saha çalışmasında sabitleme, doğrulama ve otomasyon önyargısı
- [[ahmadfard-interactive-oer-review-2026]] — öğrenen ve öğretmen failliğini aşındıran riskler arasında sayılan otomasyon önyargısı
- [[alshahrani-health-sciences-ai-use-2026]] — açık eğitim gerekçesi olarak okunan 310 öğrencinin etik kaygıları
- [[ai-literacy-legal-translation-2026]] — kalite yanılsaması baskılarına karşı notlandırılan beceri olarak öğretilen sonradan düzenleme
- [[morales-cevallos-ai-forensic-science-education-2026]] — incelenen adli YZ çalışmalarında belgelenen otomasyon önyargısı
- [[rana-genai-design-thinking-2025]] — insan yargısını merkezde tutan iskeleler
- [[kim-overtrust-ai-literacy-2026]] — tersine dönen öngörü: kendine güvenen öğrenciler araca daha çok güvendi
- [[haiml-human-centered-ai-metacognitive-model-2026]] — otomasyon önyargısı araştırması üzerine kurulu bir çerçeve, onun testi değil
- [[muniz-samayoa-genai-erosion-critical-democratic-citizenship-2026]] — eleştirel yurttaşlığı aşındıran üç mekanizmadan biri
- [[academic-erasure-complexity-ai-writing-2026]] — YZ kullanımını denetlemenin duygusal emeği içinde otomasyon önyargısı
- [[llm-fallacy-misattribution]] — en yakın ayrım: bir sisteme aşırı yaslanmak ile algılanan kişisel yetkinlik
