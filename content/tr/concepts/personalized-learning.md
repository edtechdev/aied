---
title: Kişiselleştirilmiş Öğrenme
created: "2026-10-14T21:30:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, personalized-learning]
audience: [learners]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/personalized-learning
source_updated: "2026-10-28T19:13:23-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Kişiselleştirilmiş öğrenme** — eğitim deneyimlerinin, önceki bilgiler, öğrenme hızı, tercihler ve [[affective-computing|duygusal]] durumlar dâhil olmak üzere bireysel [[student-modeling|öğrenen profillerine]] uyarlanması. YZ, kişiselleştirmeyi ölçekte mümkün kılar; ancak *sistem kişiselleştirmesi* ile *öğrenen tarafından algılanan kişiselleştirme* arasındaki makas, çözülmeyi bekleyen bir ölçüm sorunu olmaya devam etmektedir. [[adaptive-learning|Uyarlamalı öğrenme]] ve [[intelligent-tutoring|akıllı öğretmenlik (intelligent tutoring)]] ile birlikte, öğretimi uyarlamak için öğrenen modellerini kullanan [[student-modeling|öğrenen modelleme ve uyarlamalı öğretim]] ailesinin uygulama tarafı üyelerinden biridir.

## Dikkate Alınması Gereken Sorular

- “Kişiselleştirilmiş öğrenme” dendiğinde aklınıza bir öğrenenin hızına göre uyarlanmış içerik mi, yoksa onun seçtiği hedeflere göre uyarlanmış içerik mi geliyor? Sayfa bunların derin şekilde farklı olduğunu söylüyor (çeşitli yollarla ulaşılan tek tip sonuçlar vs. farklı sonuçlar). Hangisini daha çok değerli buluyorsunuz ve neden?
- Sayfa kişiselleştirilmiş öğrenmeyi (amaç) uyarlamalı öğrenmeden (bir mekanizma) ayırıyor. Gerçek zamanlı uyarlama içermeyen bir kişiselleştirme örneği düşünebilir misiniz — bu yine de kişiselleştirme sayılır mı?
- Bir sistem, öğrenen hiç tanınmış hissetmeden uyarlama yapabilir. “Kişiselleştirilmiş” hissettirilmeden kişiselleştirildiğinizi ne zaman yaşadınız? Aradaki fark nedir?
- Sayfa, aşırı kişiselleştirmenin öğrenenleri düşük beklentili yollarda bırakabileceğini işaret ediyor. İyi niyetli bir YZ uyarlaması, bir öğrenenin tavanını nasıl kazara aşağı çekebilir?
- Kişiselleştirme ayrıntılı öğrenen verisi gerektirir; gizlilik ise veri minimizasyonunu. “Uyarlama için yeterli veri” ile “öğrenenin ifşa olacağı kadar çok veri” arasındaki çizgiyi nerede çekiyorsunuz?
- Bir YZ’nin öğrenmenizi gerçekten kişiselleştirebilmesi için oturumlar arasında sizin hakkınızda neyi hatırlaması gerekir — ve bu şeyleri hatırlamasının riskleri nelerdir?

## Giriş

Eğitim deneyimlerinin, [[prior-knowledge|önceki bilgiler]], öğrenme hızı, tercihler ve duygusal durumlar dâhil olmak üzere bireysel öğrenen profillerine uyarlanması. YZ, kişiselleştirmeyi ölçekte mümkün kılar; ancak *sistem kişiselleştirmesi* ile *öğrenen tarafından algılanan kişiselleştirme* arasındaki makas, çözülmeyi bekleyen bir ölçüm sorunu olmaya devam etmektedir.

- **[[mishra-control-vs-agency-history-2025|Mishra ve ark.]]** kökleri tarihe uzanan iki kişiselleştirme biçimini ayırır — çeşitli yollarla ulaşılan tek tip sonuçlar (Skinner’ın [[teacher-role|öğretim]] makinelerinden Khan Academy tarzı ustalık temelli özel derslere kadar) vs. öğrenenin seçtiği çeşitli sonuçlar — ve bunların alanın kontrol-karar-özerklik gerilimine nasıl karşılık geldiğini gösterir.


- **Kişiselleştirme, materyali bulmak yerine üretmekle de karşılanabilir.** DagFlow-AI, bir öğrenenin belirttiği ilgiye, ders öğrenme hedeflerine ve amaçlanan beceri düzeyine uygun sentetik istatistik veri kümeleri üretir; yazarlar bunun gerçek veri kümelerinin nadiren karşıladığı üç yönlü bir eşleşme olduğunu savunmaktadır ([[arthur-dagflow-agentic-synthetic-data-statistics-2026|Arthur ve ark., 2026]]). Sınır tasarıma gömülüdür: sentetik veri veri toplamayı, ölçmeyi veya çalışma tasarımını öğretemez, dolayısıyla araç gerçek verinin yerine değil, onu tamamlayıcı niteliktedir.

## YZ Kaynaklı Kişiselleştirme için Mimari Yaklaşımlar

### Boyuna Bellek (PersonaVLM → Eğitim)

Nie ve ark. (2026), etkileşimler boyunca kimlik tutarlılığını koruyan uzun süreli bir [[multimodal]] bellek mimarisi (PersonaVLM) geliştirmiştir. Eğitime taşındığında bu mimari, bir öğrenenin [[misconceptions]], tercih ettiği açıklamaları ve oturumlar arası ilerleme geçmişini hatırlayan özel ders sistemlerini mümkün kılar — durum bilgisiz (stateless) [[conversational-ai|sohbet robotu]] özel ders uygulamalarındaki kritik bir eksiği gidererek.

### Yerlilikçi (Agent-Native) Kişiselleştirme Altyapısı (DeepTutor)

Zhao ve ark. (2026), kişiselleştirmeyi tepkisel araçlara sonradan eklemek yerine [[zhao-deeptutor-agentic-personalized-tutoring-2026|DeepTutor]] özelliklerinin her birini ortak bir kişiselleştirme altyapısını paylaşacak şekilde tasarlamıştır. Bu mimari, kipli çeşitlilik arası tutarlılığı sağlar: aynı öğrenen profili [[problem-solving|problem çözme]], [[automated-question-generation|soru üretimi]] ve işbirlikçi yazma süreçlerini yönlendirir.

### Çok Ajanlı Sosyal Kişiselleştirme (MAIC)

Yu ve ark. (2024), yalnızca içeriği değil *sosyal bağlamı* da kişiselleştirir. Sınıf arkadaşı tipleri (Sınıfın Şakacısı, Derin Düşünür, Not Alan, Meraklı Zihin) bireysel öğrenen ihtiyaçlarına uygun çeşitli akran öğrenmesi dinamikleri yaratır.

### Öğrenen Portreleri için AutoML

Kişiselleştirme, eğitim kalitesini artırmanın merkezi bir hedefidir; ancak çok kaynaklı heterojen öğrenme davranışı verilerini işlemek zor olmaya devam etmektedir. Otomasyonla yönetilen [[machine-learning|makine öğrenmesi]] ile sürülen kişiselleştirilmiş bir sinirsel-bilişsel mimari arama çerçevesi, öğrenen portreleri oluşturur ve heterojen öğrenen profilleri için teşhis modelleri üretir; statik sınav sonuçlarının ötesine geçmek için çok kipli verileri bütünleştirir.

Statik bir bilgi tabanı kişiselleştiremez: ontolojiler yavaş evrimler ve belirsizliği zayıf ele alır; bu nedenle mimari, gösterimi bilgi türüne uyarlar — bildirimsel olanı ontolojilere, yordamsal olanı kurallara, belirsiz olanı bulanık veya olasılıksal ontolojilere, örtük olanı analitik ve makine öğrenmesine — ve tek bir devasa modele göre küçük eşlemeli ontolojiler sistemini tercih eder ([[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova, 2026]]).

## Uyarlamalı öğrenme ve akıllı öğretmenlik ile ilişkisi

Kişiselleştirilmiş öğrenme sıklıkla [[adaptive-learning|uyarlamalı öğrenme]] ile karıştırılır, ancak ikisi aynı şey değildir. **Uyarlamalı öğrenme** *mekanizmaya* işaret eder — bir sistemin, bir öğrenen modeline dayanarak içeriği, hızı ve zorluğu gerçek zamanlı olarak ayarlaması. **Kişiselleştirilmiş öğrenme** ise *daha geniş kapsamlı bir amaçtır* — tüm öğrenme deneyiminin (içerik, yollar, hız, tercihler, hedefler) bireye uyarlanması; gerçek zamanlı uyarlama bunun yalnızca bir uygulama biçimidir. Uyarlamalı sistemler kişiselleştirmeye giden bir *araçtır*, ancak kişiselleştirme aynı zamanda statik öğrenen profilleri, seçim temelli yollar veya gerçek zamanlı uyarlama yapmayan insan özel öğretmeni uyarlaması yoluyla da sağlanabilir.

22 yükseköğretim müdahalesini kapsayan bir PRISMA 2020 derlemesinde, kişiselleştirilmiş öğrenme desteği ve uyarlamalı yollar baskın YZ kullanım alanları arasındadır; ancak uygulamaların çoğu mevcut uygulamayı dönüştürmekten çok geliştirmiştir ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh ve ark. (2026)]]).

[[intelligent-tutoring|Akıllı öğretmenlik (intelligent tutoring)]] bunların arasında yer alır: ITS’ler, yapılandırılmış öğrenen modellemesi yoluyla kişiselleştirilmiş öğretim sunan kanonik *uyarlamalı* platformlardır; [[llm]] tabanlı özel ders uygulamaları ise sohbet biçiminde kişiselleştirir. Üçü de [[student-modeling|öğrenen modelleme ve uyarlamalı öğretim]] ailesinin uygulama tarafı üyeleridir — sırada ne öğretileceğine karar vermek için [[student-modeling|öğrenen modellemesi]], [[knowledge-tracing]] ve [[cognitive-diagnosis]] süreçlerinin ürettiği öğrenen gösterimlerini kullanırlar. Ayrım değerlendirme açısından önemlidir: bir sistemi “uyarlamalı”, “kişiselleştirilmiş” veya “bireyselleştirilmiş” olarak birbirinin yerine kullanan çalışmalar (aşağıya bakınız), iddia edilen faydanın gerçek zamanlı uyarlamadan, öğrenenin tercihinden mi yoksa içerik uyarlamasından mı geldiğini gizleyebilir.

## Ölçüm Sorunları

- **Sistem vs. algılanan kişiselleştirme** — Bir sistem, öğrenen tanınmış hissetmeden uyarlama yapabilir
- **Boyuna geçerlilik** — Profiller eskidiğinde veya aşırı uydurulduğunda kişiselleştirmenin faydası azalabilir
- **[[equity-in-ai-education|Eşitlik]] riskleri** — Aşırı kişiselleştirme, öğrenenleri düşük beklentili yollarda bırakabilir

- **Önyargı riskleri** — Öğrenen niteliklerine koşullanmak kalıp yargıları kodlayabilir: kompozisyonlar sabit tutulduğunda, ırk, dil veya engellilik işareti taşıyan öğrenenlere verilen geri bildirim daha övgü dolu ve daha az eleştirel hale geldi ([[marked-pedagogies-linguistic-bias-writing-feedback|Tan, Phalen & Demszky (2026)]]).

## Kişiselleştirme ve değerlendirme

Kişiselleştirme ile [[assessment]], YZ kaynaklı öğrenmede birbiriyle sıkı bağlıdır. Uyarlamalı kişiselleştirme, sırada neyin uyarlanacağına karar vermek için öğrenenin ne bildiğine dair süregelen [[formative-assessment|biçimlendirici]] ölçümlere ([[knowledge-tracing]], [[student-modeling]] ve [[cognitive-diagnosis]] yoluyla) bağlıdır — dolayısıyla [[assessment]] sinyalinin güvenilirliği doğrudan kişiselleştirmenin kalitesini sınırlar. Tersine, [[summative-assessment|özetleyici değerlendirme]] öğrenen başına kişiselleştirildiğinde, [[bias-mitigation|adillik]] ve karşılaştırılabilirlik kurmak daha zor hale gelir. Bilgi tabanının [[research-methods-aied|araştırması]], yüzeysel veya gürültülü sinyallere aşırı uyarlamaya karşı uyarır: öğrenciyi yanlış ölçen [[adaptive-learning|uyarlamalı]] sistemler, öğrenmeyi desteklemek yerine azaltacak biçimlerde kişiselleştirme yapabilir; öz değerlendirmesi güvenilir olmayan (“var olmayan bilişsel temel”) YZ’ye doğal olarak yetişmiş öğrencilerin modellemesi daha zordur.

## Kişiselleştirme, YZ çağında

Bu endişenin hipotetik olmadığına dair en güçlü kanıt, 486 Çinli lisans öğrencisi üzerinde yürütülen ve öğrencilerin YZ-uyarlamalı ortamlarını ne kadar kişiselleştirilmiş algıladıklarını, kendi [[self-regulated-learning|öz-düzenlemeli öğrenmelerini]] ne kadar düşürdüğünü ortaya koyan bir çalışmadan gelir: “kişiselleştirme paradoksu” ([[personalization-paradox-adaptive-learning-emotions-2026|Li, Lin & Qiu (2026)]]). Etkiyi en çok akademik duygulardaki kaymalar taşıdı: uyarlamalı ortamla karşılaşmak, daha az keyif ve daha çok kaygı ile sıkıntıyı öngördü; bu duygusal değişimler birlikte, kişiselleştirme ile azalan öz-düzenleme arasındaki ilişkinin yaklaşık yarısını açıkladı. [[ai-literacy|YZ okuryazarlığı]] hasarı tamponladı ve yüksek okuryazarlıkta olumsuz duygusal ilişkiyi anlamlı olmama düzeyine zayıflattı. Kişiselleştirme, öyle görünüyor ki, uyarlamalı uyum satın alırken öğrenenin kendi [[regulation|düzenleyici]] etkinliğine bir maliyet yüklemekte; çalışma, bu maliyetin ödendiği kanalın yalnızca bilişsel yük değil, aynı zamanda duygusal deneyim olduğunu göstermektedir.

Bir yolun ardındaki teşhis doğrulandığında, kişiselleştirme daha çok şey kapsayarak değil, yükü azaltarak karşılığını verir: en kısa yol üzerinden düzeltme ortalama 3,82 adımda tamamlandı ve çalışma süresini %22,0 kısalttı (73,8 yerine 57,6 dakika), bilişsel yük ise test sonrası etkinin %53,7’sini taşıdı ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng & Huang, 2026]]).

Aracın kanıtı küçük ölçekte kendisi de olumsuz olabilir: beş günlük ilkokul kesir denemesinde (son n = 22), olağan uygulama grubunun anlama kazanımları YZ-uyarlamalı Mathbot grubundan anlamlı biçimde daha yüksek oldu; yazarlar sınıf düzeyiyle ilgili karışıkları, tahmin etme ve lisanslama maliyetini sınırlılık olarak işaret ediyor — bir “uyarlamalı” etiketi hiçbir etki taşımaz ([[ai-powered-personalized-learning-elementary-fractions-2026|Holman (2024)]]).

Pekiştirmeli öğrenme, kişiselleştirmenin ayrı bir mekanizmasıdır; [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper & Lugrin (2025)]] onun ampirik sicilini eşlemeleştirir: eğitimde 89 çalışmayı kapsayan [[meta-analysis-systematic-review|PRISMA]] derlemeleri, YZ kişiselleştirmesinin [[higher-ed]] ve [[math-education]] alanlarında yoğunlaştığını; uyarlamanın çoğunlukla içerik planlaması (n = 53) ya da ipucu ve geri bildirim gibi rehberlikle ilgili kişiselleştirme (n = 36) olarak uygulandığını ortaya koyar. Araştırmacılar, YZ politikalarının uyarlamalı olmayan karşılaştırma gruplarına karşı en sık rehberlikle ilgili uyarlamada ve [[affective-computing|duygusal]] değişkenlerde (test edilen çalışmaların %63’ünde) üstünlük sağladığını; öğrenme kazancının — özellikle normalleştirilmiş öğrenme kazancının — en etkili ödül kaynağı olduğunu bildirir; bu, ödül sinyallerini gerçek öğrenmeye yönelik değil, [[student-engagement|etkileşim]]e yönelik kişiselleştirecek biçimde tasarlamaya yönelik pratik bir rehberdir.

[[ai-coaching-rl-skill-development|Wang ve ark. (2026)]] ödül hedefinin kendisinin bir kişiselleştirme tercihi olduğunu gösterir: öğrenenin bağımsız yetkinliği üzerine eğitilmiş bir YZ koçu, kural temelli sönümlemenin güvenilir bir değişiklik üretmediği yerlerde tur süresini %27,9 kısalttı (p = 0,005); yazarlar, görev performansı için eniyileyen kodlama ajanlarının insanın ne öğrendiği konusunda hiçbir teşvik taşımadığını savunur.

Bernstein ve Sibia (2026), ilgi kişiselleştirmesi ile uzmanlık kişiselleştirmesi arasında keskin bir ayrım yapar: ilgiyle eşleştirilen üretici YZ benzetmeleri daha ilgi çekici ve akılda kalıcı olarak bildirilmiş, ancak her zaman daha çok güvenilir bululmamış; bazı öğrenciler, benzetme kendi belirttikleri ilgiyle eşleşse bile öz yeterlilik ve bütünlük nedeniyle genel teknik açıklamayı tercih etmiş ([[student-reception-genai-analogies-computing-2026]]). Onların tasarım önerisi, kaynak alan yapısı üzerinden kişiselleştirmek ve öğrencilere yalnızca neyi ilgilendirdiğini değil, ne bildiklerini de sormak; çünkü kaynak alana dair aşinalık, öğrenenin benzetmeyi incelemesini sağlayan şeydir — ve öğrenenlere bir benzetme menüsü, tercihli katılım ya da genel ve kişiselleştirilmiş sürümleri birlikte sunma yoluyla kişiselleştirme üzerinde denetim imkânı vermektir. Sidorkin (2026), bireysel açıklamalar yerine ders materyallerinin düzeyinde bir başka eşleşmeyi belgelemektedir: yüksek lisans bir eğitim liderliği kursu için talep üzerine üretilen haftalık okumalar, bir yandan ilgiye (sektör, mesleki rol, yerel örnekler) diğer yandan anlama düzeyine (hız, tanımlar, derinlik) göre birlikte uyarlandı; elde edilen kayıtlar ortak bir belkemiği paylaştı (0,50–0,61 TF-IDF kosinüs benzerliği) ve bunu birey başına tam bir yeniden yazımdan çok, ayarlanabilir düğmelere sahip bir şablon olarak okur. Aynı derlem, uyarlamanın yapısal olduğunu ancak yoğunluk açısından düzensiz kaldığını gösterir: yapıt düzeyindeki uyarlama belirteçleri 10.000 kelimede ortalama 52,24 olup kayıtlar arasında 38,74 ile 74,29 arasında değişti; anlamaya yönelik istek metinleri ise karşılaştırma metnine kıyasla tanımsal [[scaffolding]]’i 3,4 kata 8,7 kata kadar daha fazla üretti.

Kişiselleştirmenin üçüncü ekseni *hedeftir* ve YZ planlayıcılarının en kötü başa çıktığı girdi budur. [[personapath-personalized-learning-paths-2026|Liu ve ark. (2026)]] 2.000 sentetik öğrenen kimliğini, 347 ders kitabından ve 4.092 kavramdan oluşan bir ön koşul grafiğiyle eşleştirdi ve on YZ modelinden, bir öğrenenin belirtilen hedef birime ulaşması için adım adım hangi bilgiyi çalışması gerektiğini planlamalarını istedi. Modeller yapısal olarak sağlam müfredatlar üretti — DeepSeek-V3.1, ön koşul ve halüsinasyon geçerliliğinde %90,9’a ulaştı — ancak bunları öğrenene uyarlamada başarısız oldu: uyarlanabilirlik en fazla %44,7’de zirve yaparken, DeepSeek-V3.1’in Temel Eğitim’deki nihai geçiş oranı %29,5, Yükseköğretim’de %14,6 oldu; kimlikten ustalık alanını çıkarmak, geçerliliği neredeyse değiştirmeden uyarlanabilirliği 26,1 yüzde puana kadar düşürdü. Tüm yolu tek geçişte üretmek, etkileşimli üretmek yerine, geçerliliği 30,8 puana kadar artırırken uyarlanabilirliği 28,8 düşürdü. “Kişiselleştirilmiş” iddiası, bir öğrenenin durumuna yanıt verme iddiasıdır ve durum değişkeni, bu planlayıcıların en kolay vazgeçebileceği parçadır — yukarıdaki ölçüm kaygısının bir hesaplama karşılığı.

Dördüncü eksen, bireysel öğrenen yerine *hedef kitle*dir: [[bespoke-industry-personalized-lecture-videos-2026|Bespoke]], mevcut bir dersi adı belirtilmiş bir meslek grubu için (sağlık, finans veya enerji) yeniden üretir; uzman değerlendiricileri sektörel çerçevelenmiş sürümleri kişiselleştirme derinliğinde 0,32 puan daha yüksek puanlarken (3,97’ye karşı 3,65), kitle ayarı geride kaldı (3,52). Birey yerine bir kohorta uyarlamak, kişiselleştirmenin daha ucuz ve daha ele alınabilir bir biçimidir; ancak onu ölçen rubrik, değerlendirilen uyumu değerlendirdi, öğrenen çıktılarını değil.

Kişiselleştirme, bir insan sunucunun önüne geçebilir: geniş çapta bir çevrimiçi kursa katılan öğrenciler (493 katılımcı) YZ tarafından üretilmiş kişiselleştirilmiş videoları, kişiselleştirilmemiş insan kayıtlı videoların üzerinde sıraladı (ortalama sıra 2,26’ya karşı 2,69) ve %88,4’ü bir kişiselleştirilmiş videoyu birinci sıraya yerleştirdi; insan kayıtlı videolar için bu oran %73,8 idi ([[personalized-ai-generated-videos-preference-2026|Tomlinson ve ark. (2026)]]).

## İstek metniyle koşullandırılmış mikro kişiselleştirme

[[prompt-engineering-personalization-ai-teaching-assistant-2026|Basu, Kakar & Goel (2026)]] sistem ile algılanan kişiselleştirme arasındaki makasın yanıt düzeyinde ele alınabileceğini gösterir. Jill Watson [[llm]]/[[rag]] özel ders uygulaması için çerçeveleri, öğrenenin seçtiği tercihleri (soyutlama, ayrıntı düzeyi, algı, işleme, anlama) sistemin çıkardığı bilişsel talep ([[cognitive-diagnosis|Bloom’un Taksonomisi]]) ile birleştirerek, her etkileşimde uyarlanan 96 mikro profil üretir — [[prompt-engineering|yapılandırılmış istek metni koşullandırması]] sayesinde — yeniden eğitim gerekmez, [[discipline-specific-aied|alana özgü]] yazım gerekmez. Bu, [[adaptive-learning|uyarlanabilirlik]] (öğrenen güdümlü tercih seçimi) ile uyumculuk (sistem güdümlü bilişsel değerlendirme) arasında bir melez yapıdır ve içeriğin *nasıl* sunulduğunun kişiselleştirmesinin hem ölçeklenebilir hem de öğrenenler tarafından hissedilir olabileceğini göstermektedir.

## Terminolojik belirsizlik

“Kişiselleştirilmiş öğrenme”nin geniş, gevşek tanımlı bir şemsiye terim olması yinelenen bir sorundur. Sistematik derlemeler ([[khalifeh-redefining-personalized-learning-ai-2026|Khalifeh ve ark., 2026]]), [[adaptive-learning|uyarlamalı öğrenme]], bireyselleştirilmiş öğretim, özelleştirilmiş öğrenme ve kişiselleştirilmiş öğrenmenin birbirinin yerine kullanıldığını, evrensel olarak kabul görmüş bir tanım bulunmadığını ortaya koyar — bu, araştırma sentezini ve kanıta dayalı uygulamayı karmaşıklaştıran kavramsal bir belirsizlik kaynağıdır. Alan, giderek daha fazla, “kişiselleştirilmiş” sözcüğünün muğlak bir etiket yerine kesin ve kanıta dayalı bir iddiayı belirtmesi için bütünleşik bir çerçeve ve tanım çağrısında bulunmaktadır (bu nokta, bilgi tabanının [[limitations-in-aied-research|zayıf kavram kullanımına ilişkin eleştirisi]] ile bir kez daha pekişmektedir).

## Yaygın yanlış anlamalar

**“Kişiselleştirilmiş öğrenme ile uyarlamalı öğrenme aynı şeydir.”** Uyarlamalı sistemler kişiselleştirmeye giden bir *araçtır*, onun tanımı değildir. Kişiselleştirme aynı ölçüde statik öğrenen profilleri, seçim temelli yollar veya gerçek zamanlı uyarlama yapmayan insan özel öğretmeni uyarlaması yoluyla da sağlanabilir. İkisini eşanlamlı saymak, zengin öğrenen seçimi sunan ancak uyarlamalı motoru bulunmayan bir okulu kişiselleştirilmemiş gibi gösterir ve sıkı biçimde uyarlamalı bir alıştırmayı olduğundan daha öğrenen merkezli kılar.

**“Kişiselleştirme daha fazla konu kapsayarak karşılığını verir.”** Bir yolun ardındaki teşhis gerçekten doğrulandığında, kişiselleştirme *kapsamdan çok yükü azaltarak* karşılığını verir: en kısa yol üzerinden düzeltme ortalama 3,82 adımda tamamlandı ve çalışma süresini %22,0 kısalttı (73,8 yerine 57,6 dakika), etkiyi ise bilişsel yük taşıdı. Fayda, saat başına daha fazla içerik değil, daha az gereksiz adımdır.

**“Tutarlı bir müfredat üretebilen bir model onu kişiselleştirebilir.”** Üretim ile uyarlama farklı yeteneklerdir ve aralarındaki açık büyüktür. Müfredat üreten modeller yapısal olarak sağlam çıktı üretti (DeepSeek-V3.1 ön koşul ve halüsinasyon geçerliliğinde %90,9'a ulaştı), uyarlanabilirlik ise en fazla %44,7'de kaldı ve Temel koşulda nihai geçiş oranı %29,5 oldu. Ön koşul geçerliliği kişiselleştirme değildir.

**“Materyali üretmek, gerçek içeriğin dayattığı kısıtı ortadan kaldırır.”** Üretim bir kısıtı gevşetir, diğerlerini gevşetemez. [[arthur-dagflow-agentic-synthetic-data-statistics-2026|DagFlow-AI]], bir öğrenenin belirttiği ilgiye, ders hedeflerine ve amaçlanan beceri düzeyine uygun sentetik istatistik veri kümeleri üretir (gerçek veri kümelerinin nadiren karşıladığı üç yönlü bir eşleşme); ancak yazarları sınırı açıkça belirtmektedir: sentetik veri veri toplamayı, ölçmeyi veya çalışma tasarımını öğretemez, dolayısıyla araç gerçek verinin yerine değil, onu tamamlayıcı niteliktedir.

**“Bu sistemleri doğrulayan şey bildirilen öğrenme kazançlarıdır.”** Burada derlenen pekiştirmeli öğrenme ve kişiselleştirme çalışmalarında politikalar, uyarlamalı olmayan temel çizgilere karşı en sık rehberlikle ilgili uyarlamada ve duygusal değişkenlerde (test edilen çalışmaların %63'ünde) üstünlük sağlarken, öğrenme kazancı, özellikle normalleştirilmiş öğrenme kazancı, *en az* bildirilen sonuçtu. Etkileşim ve duyguyu öğrenmeden çok daha fazla bildiren bir literatür, öğrenmenin baskın olduğunun kanıtı değildir.

## Uygulama için çıkarımlar

**Eğitmenler için**

- "Kişiselleştirilmiş" sözcüğüne inanmadan önce neyin uyarlandığını sorun: içerik mi, sıra mı, hız mı, duygu durumu mu yoksa sunum mu. Farklı uyarlamalar farklı kanıtlar taşır ve yalnızca bazılarına öğrenme çıktıları eşlik etmektedir.
- İçerik ekleyen sistemler yerine yolu kısaltan sistemleri tercih edin. Düzeltme çalışmasında ölçülen fayda, daha fazla kapsam değil, %22 daha az çalışma süresiydi.
- Üretilmiş bir veri kümesinin sağlayamayacağı bölümleri (veri toplama, ölçme, çalışma tasarımı) gerçek iş olarak koruyun ve kişiselleştirmenin bunların çevresindeki pratik üzerinde işlemesine izin verin.

**Geliştiriciler için**

- Yalnızca etkileşimi ve duyguyu değil, öğrenme çıktılarını da bildirin. Öğrenme kazancının en az bildirilen ölçü olduğu bulgusu, alanın şu anda ne sunduğunun betimlenmesidir, kopyalanacak bir şablon değildir.
- Kendi değerlendirmenizde üretim kalitesini uyarlama kalitesinden ayırın ve ideal olarak ikisini ayrı ayrı bildirin; çünkü güçlü ön koşul geçerliliği, %50'nin altında bir uyarlanabilirlikle bir arada bulunabilmektedir.
- Ödül hedefini başlı başına bir kişiselleştirme tercihi olarak ele alın: öğrenenin bağımsız yetkinliği üzerine eğitilmiş bir pekiştirmeli öğrenme koçu tur süresini %27,9 kısalttı (p = 0.005), oysa kural temelli sönümleme güvenilir bir değişiklik üretmedi.

**Araştırmacılar için**

- Ölçtüğünüz yapılarda kişiselleştirmeyi uyarlamayla karıştırmayı bırakın ve etkiyi hangi mekanizmanın ürettiğini açıkça belirtin.
- Normalleştirilmiş öğrenme kazancını birincil sonuç olarak bildirin; literatürdeki seyrekliği, devralınacak bir gelenek değil, kapatılacak bir açıktır.

## Bağlı kavramlar

- [[adaptive-learning]] — Öğrenene gerçek zamanlı olarak içerik, hız ve zorluk uyarlayan sistemler
- [[intelligent-tutoring]] — Öğreneni modelleyen ve bireyselleştirilmiş öğretim sunan özel ders sistemleri
- [[student-modeling]] — Uyarlamayı yönlendiren öğrenen bilgisi, becerileri ve durumlarının gösterimi
- [[knowledge-tracing]] — Zaman içindeki performanstan bilgi bileşenlerinin ustalığının çıkarımı
- [[cognitive-diagnosis]] — Yanıtlardan öğrenenin gizli bilgi ve niteliklerinin teşhisi
- [[scaffolding]] — Bireysel öğrenen ihtiyaçlarına göre ayarlanan destek ve sönümleme
- [[student-experience]] — Öğrenenin kişiselleştirmeyi yaşayışı
- [[learning-analytics]] — Uyarlamayı besleyen, veri güdümlü ölçümüyle öğrenme analitiği
- [[formative-assessment]] — Sırada neyin uyarlanacağını işaret eden süregelen değerlendirme
- [[summative-assessment]] — Nihai değerlendirme; karşılaştırılabilirliğini kişiselleştirme zorlaştırır
- [[generative-ai]] — YZ tabanlı sohbet türü kişiselleştirme
- [[edtech-platform]] — Kişiselleştirilmiş öğrenmeyi ölçekte sunan platformlar
- [[higher-ed]] — Kişiselleştirme için yükseköğretim bağlamı
- [[online-teaching-and-learning]] — Çevrimiçi Öğretim ve Öğrenme
- [[recommender-systems-and-learning-paths]]

## Bağlı makaleler

- [[bespoke-industry-personalized-lecture-videos-2026]] — Tohum metninden sektöre özgü ders videosu yeniden üretimi: kitle düzeyinde uyarlama, alan uzmanları tarafından değerlendirildi (Puech ve ark. 2026)
- [[prompt-engineering-personalization-ai-teaching-assistant-2026]] — Bir YZ öğretmen asistanının istek metni mühendisliğiyle mikro kişiselleştirilmesi (Basu, Kakar & Goel 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — AI Tutoring is Not a Monolith: What We Actually Know (Stanford SCALE/NSSA brief)
- [[mishra-control-vs-agency-history-2025]] — İki kişiselleştirme biçimini ayırır (tek tip vs. çeşitli sonuçlar)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Kişiselleştirilmiş öğrenmeyi yeniden tanımlamak: sistematik derleme
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]] — Özel ders için aracı-yerlilikçi kişiselleştirme altyapısı
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Kişiselleştirilmiş e-öğrenme için ontoloji temelli katmanlı melez bilgi modeli
- [[ai-powered-personalized-learning-elementary-fractions-2026]] — İlkokul kesirleri için kişiselleştirilmiş uyarlamalı öğrenme
- [[ai-coaching-rl-skill-development]] — Beceri gelişimi için pekiştirmeli öğrenmeye dayalı koçluk
- [[personalized-ai-generated-videos-preference-2026]] — Öğrenciler kişiselleştirilmemiş insan kayıtlı videolara göre kişiselleştirilmiş YZ videolarını tercih eder (Tomlinson ve ark. 2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Kişiselleştirilmiş öğrenme yolları için Bayesçi bilişsel teşhis
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[instructor-ai-roles-chatgpt-formative-assessment-2026]] — ChatGPT destekli biçimlendirici değerlendirmede öğretim elemanı ve YZ rolleri
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Marked Pedagogies: kişiselleştirilmiş otomatik geri bildirimde önyargı
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Sistematik derleme: uyarlamalı yollar ve öneri sistemleri, yükseköğretimde önde gelen bir YZ bütünleştirme kullanım alanıdır
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[personalization-paradox-adaptive-learning-emotions-2026]] — Kişiselleştirme paradoksu: algılanan uyarlamalı kişiselleştirme, YZ okuryazarlığıyla tamponlanan akademik duygular aracılığıyla daha düşük öz-düzenlemeli öğrenmeyle ilişkilidir (Li, Lin & Qiu 2026)
- [[personapath-personalized-learning-paths-2026]] — PersonaPath: YZ planlayıcıları %90,9 geçerliliğe ulaşır, ancak belirtilen bir öğrenen hedefine yolları kişiselleştirirken hiçbir model %44,7 uyarlanabilirliği aşamaz (Liu ve ark. 2026)
