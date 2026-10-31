---
title: Öğreterek Öğrenme
created: "2026-10-14T21:41:00-04:00"
type: concept
pedagogy: [active-learning, learning-by-teaching, scaffolding, self-regulated-learning]
technology: [generative-ai, intelligent-tutoring]
assessment: [feedback]
discipline: [cs education]
confidence: high
translation_of: concepts/learning-by-teaching
source_updated: "2026-10-25T22:50:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Öğreterek öğrenme (LbT)** — öğrencilerin, materyali bir akrana, öğretilen kişiye ya da araca açıklayarak anlayışlarını derinleştirdiği; korunmuş etkisi (protégé effect) üzerine kurulu öğretim çerçevesi. LbT ve akran mentorluğu alanındaki on yıllık çalışmalar, kavramları açıklamanın, yanlış anlamaları öngörmenin ve soruları yanıtlamanın anlayışı pekiştirdiğini ve aktarımı desteklediğini göstermektedir. YZ çağında **öğretilebilir aracılar** — ve giderek artan biçimde **acemi öğrenen olarak yapılandırılmış LLM’ler** — LbT’yi ölçekli hale getirerek öğrencileri açıklamak, düzeltmek ve boşlukları doldurmak zorunda olan eğitmen konumuna yerleştirir.

## Dikkate Alınması Gereken Sorular

- Bir şeyi ancak başka birine açıkladıktan sonra gerçekten anladığınız bir zamanı hatırlayın. Zihinsel olarak ne oluyordu — ve öğretmenin, yalnızca çalışmaktan daha derin bir anlama üretmesini neye bağlıyorsunuz?
- Yaygın bir görüş, öğretmenin uzmanların işi olduğu ve acemilerin sunacak bir şeyi olmadığıdır. Oysa “öğreterek öğrenme” bunun tersi öncüle dayanır: öğretmeye hazırlanmak, bilgiyi düzenlemeye ve kendi boşluklarınızı bulmaya zorlar. Bu durum, öğretmekten kimlerin yararlandığı sorusunu nasıl yeniden çerçeveler?
- Sayfa, “öğretilebilir aracılar”ı tanımlar — öğrenmenin bir parçası olarak öğrencilerin öğrettiği yazılımlar. Bir LLM ile bir sohbet robotunu, soru soran ve hata yapan hataya açık bir acemi olarak yapılandırabilirsiniz. Gerçekten yalnızca sohbet etmek yerine öğrenmeyi iyileştirmesi için böyle bir acemiye ne tasarlamanız gerekir?
- Zorluklardan biri “hatayı mühendislikle inşa etmek”tir: YZ modelleri uzman, akıcı yanıtlar vermek üzere eğitilir; bu, öğreterek öğrenme paradigmasının istediği mücadele eden acemiye tam tersidir. Hata yapmaya eğilimli bir aracı, doğru olan bir aracıdan neden öğrenme için daha etkili olabilir?
- ChatGPT temelli bir öğretilebilir araç öğrenmeyi iyileştirdi, ancak doğru kod üretme eğilimi hata düzeltme alıştırmasını sınırladı. Her zaman doğru cevabı veren bir araç, hataları tespit ve düzeltmeyi pratik etmesi gereken öğrenciyi nasıl gerçekte eksik bırakabilir?
- Kendi sınıfınız için bir öğreterek öğrenme etkinliği tasarlayacak olsanız, öğretme görevini bir cevabı kopyala-yapıştır yapmak yerine gerçek çaba göstermeye itecek kadar *sonuç doğurucu* kılan şey ne olurdu?

## Giriş

Öğreterek öğrenme, genellikle korunmuş etkisine dayandırılan bir bulgudur: öğretmeye hazırlanmak — ve gerçekten başka bir kişiye ya da öğretilebilir bir araca açıklamak — yalnızca çalışmaktan daha derin bir işleme yol açar. Öğretmenin talepleri öğrenenleri bilgiyi düzenlemeye, [[misconceptions|yanlış anlamaları]] öngörmeye ve açıklamalar üretmeye zorlar; bu da kendi anlayışlarındaki boşlukları gün yüzüne çıkarır ve [[metacognition]]’u güçlendirir. YZ bu fikre iki yönden girer: [[intelligent-tutoring|mentorluk sistemleri]] ve öğretilebilir aracılar öğrenci rolünü oynayabilirken, büyüyen bir literatür öğrenci yerine makine açıklamayı sağladığında öğrenmeye ne olduğunu soruyor ([[generative-ai]], [[cs-education]]).

## Korunmuş Etkisi

Öğreterek öğrenme, öğretmeye hazırlanmanın ve gerçekten başka birine açıklamanın yalnızca çalışmaktan daha derin bir işleme yol açtığı bulgusuna dayanır. Öğretmenin talepleri — fikirleri dile getirmek, yanlış anlamaları öngörmek ve soruları yanıtlamak — öğrenenleri bilgiyi düzenlemeye, kendi anlayışlarındaki boşlukları belirlemeye ve akılda tutmayı ile aktarımı destekleyen açıklamalar üretmeye zorlar. Yararlar en çok [[collaborative-learning]] bağlamlarında ve öğretilebilir aracıları destekleyen iyi yapılandırılmış alanlarda (örn. Betty’s Brain) görülür. Korunmuş etkisi mekanizmayı adlandırır: öğrenciler bir şeyi öğretmekten sorumlu hissettiklerinde daha fazla çaba gösterir ve daha derin yansıtır; bu nedenle açıklama ve [[metacognition]] yoluyla [[misconceptions]]’ı netleştirir ve boşlukları doldurur.

## Öğretilebilir Araçlar: Kural Temelliden Konuşmaya Dayalıya

**Öğretilebilir aracılar**, öğreterek öğrenmenin işlevsel hale getirildiği yazılım sistemleridir — öğrenci, öğrenmenin bir parçası olarak bir sistemi öğretir. Geleneksel öğretilebilir aracılar kural temelli ya da erişim temelliydi ve yalnızca sınırlı komutlara yanıt verebiliyordu; temel sınırlılıkları doğal dilde diyaloga girememesiydi. [[llm|Büyük dil modelleri]] bunu değiştirir: [[prompt-engineering|istek metni]] yoluyla esnek biçimde roller üstlenebilirler — soru soran ya da hata yapan bir “öğretilen” rolü dahil — ve açık uçlu diyaloga girebilirler; böylece LbT daha önce mümkün olmayan, daha az yapılandırılmış alanlarda (yazma, kelime bilgisi) etkinleşir.

Bilgi tabanının kanıt tabanı bu dönüşümü **konuşmaya dayalı, LLM temelli öğretilebilir aracılara** bağlar:

- **Öğretilebilir araç olarak ChatGPT** ([[chatgpt-teachable-agent-programming-lbt-2024|Chen ve ark.]]), programlamada LbT’yi destekler; bilgi kazanımlarını, programlama yeteneğini ve [[self-regulated-learning|öz düzenlemeli öğrenmeyi]] iyileştirir — ancak doğru kod üretme eğilimi hata düzeltme alıştırmasını sınırlar.
- **Ölçekte Explique** ([[explique-teachable-agent-algorithms-546-students-2026|Wang ve ark.]]), 11 haftalık bir dönemde 546 öğrenciye bir YZ öğretilebilir aracı (Algorithm Apprentice) konuşlandırdı; açıklama yönelimli diyalogun daha az hatalı test gönderimini öngördüğünü, dış içerik yeniden kullanımının ise daha fazlasını öngördüğünü buldu.
- **Kelime bilgisi öğretimi** ([[teaching-ai-vocabulary-lbt-llms-2026|Uchida ve ark.]]), dinamik sorular üretmek için bir LLM’yi öğrenci olarak kullandı; 3 ve 7. günlerde akılda tutmayı iyileştirdi.

## Hatayı Mühendislikle İnşa Etmek: Acemi Öğrenen Olarak LLM’ler

LLM temelli öğretilebilir aracılar için temel bir tasarım zorluğu, LLM’lerin varsayılan olarak uzman düzeyinde, akıcı yanıtlar üretmek üzere eğitilmiş olmasıdır — LbT paradigmasının istediği hataya açık acemiye tam tersi. Bir LLM’yi iyi bir acemiye dönüştürmek **hatayı mühendislikle inşa etmeyi** gerektirir:

- **Üretilen hatalar özgün gibi geçebilir.** Kör bir etiketleme çalışmasında, uzmanlar 196 Java gönderisinden 164’ünü (%83,7) LLM tarafından üretilmiş olarak insan yazımı olarak yanlış sınıflandırdı; bu nedenle bir araci yalnızca doğru kod değil, hata ayıklanacak gerçekçi hatalar da sağlayabilir ([[simulating-students-java-programming-errors-llms|Keramati ve ark. (2026)]]).

- **[[prompting-teachability-novice-personas-lbt-2026|Öğretilebilirlik için istek metni]]** (Miller & Bosch), hata üretimini açıkça zorlayan kısıt temelli istek metinlerinin (örn. “yanlış cevapla” ya da “2–3 tanesini yanlış yap”) kişilik, yanlış kanı ya da belirsizlik temelli istek metinlerinden çok daha güvenilir biçimde acemiye özgü davranış ortaya çıkardığını buldu.
- **[[socrates-students-instructors-llms-lbt-2025|Mühendislikle oluşturulmuş bilgi boşlukları]]** (Yang ve ark.), LLM’nin yalnızca öğrencinin sahip olduğu bilgi olmadan çözemeyeceği problemler tasarlar; öğretmeyi bir zorunluluk haline getirir ve LLM’yi mentor olarak kullanmanın pasif aşırı güvenine karşı durur.
- **Explique’in çırak kısıtları** (Wang ve ark.), aracıya (a) acemi kalmayı, (b) öğrencinin açıklaması doğru olana kadar açıklama istemeyi sürdürmeyi ve (c) hedef açıklamayı asla ifşa etmemeyi — ve rolleri tersine çevirmeye çalışan öğrencilere karşı *direnmeyi* buyurur.
- **Hataya açıklığa giden bir yol olarak ağırlık düzeyinde unutma.** Makine unutması, Mistral-7B’de 16 hedefli bilgi bileşenini baskılar; doğruluğu %10 unutma oranında yaklaşık 0,75’ten %40’ta 0,5’in altına düşürürken temel model 0,85 civarında kaldı. Baskılanan bilgi, denetimli yeniden öğrenme ve koç eşliğindeki diyalog yoluyla geri döndü; bu nedenle aracının bilgi düzeyi bir iddia değil, ayarlanabilir bir kadrandır ([[simulating-novice-students-machine-unlearning-2026|Song, Guo & Lin, 2026]]).

## Sorgulama, Öz Düzenleme ve Etkin Öğrenme

Bilgi tabanında yinelenen iki olanak daha vardır:

- **Sorular bilgi boşluklarını belirler.** LbT sistemleri boşlukları ortaya çıkarmak ve kavrayışı pekiştirmek için öğrenenlerin ürettiği soruları kullanır ve [[teaching-ai-vocabulary-lbt-llms-2026|LLM tarafından üretilen sorular]], katı şablon temelli üreticilerin yerini alır.
- **Geri öğretme, açıklamanın kaçırdığını gün yüzüne çıkarır.** 22 katılımcılı bir ders sonrası inceleme sisteminde, bir Peer aracının yansıtıcı geri öğretmesi, öğrenenlerin anladıklarını sandıkları ile dile getirebildikleri arasındaki boşlukları tutarlı biçimde ortaya çıkardı; derse dayalı açıklama tek başına bunları gün yüzüne çıkarmamıştı ([[knowloop-confusion-to-consolidation-2026|Fang & Reidsma (2026)]]).
- **LbT [[scaffolding|iskeleler]] öz-[[regulation]]’i.** Bir [[conversational-ai|konuşmaya dayalı aracı]] öğretmek, [[self-efficacy]] ve öz düzenlemeli öğrenme stratejilerinin benimsenmesini besler ve LbT’yi [[desirable-difficulties]]’a bağlar — açıklama ve düzeltmenin çaba gerektiren eyleminin kendisi, YZ’nin sürtünmeyi gidermesinin aksi halde silip atacağı verimli bir mücadeledir.
- **Mentor öğrenmesini öngören şey önceki bilgi değil, bilgi inşasıdır.** 23 ortaokul mentoru boyunca, yanıtları yalnızca tekrarlamak yerine bilgi inşa edenlerin payı kavramsal son test puanlarını öngördü (β = ,138, p < 0,05), oysa önceki test puanları bunları kimin ürettiğini öngörmedi; bilgi inşa eden düşük önceki bilgiye sahip mentorlar, yüksek önceki bilgiye sahip akranlarıyla aynı düzeyde tamamladı ([[knowledge-building-tutor-learning-2026|Ameen ve ark., 2026]]).

## YZ Eğitiminde Neden Önemli

Öğreterek öğrenme, baskın LLM-mentor örüntüsüne karşı yapıcı, [[active-learning]] karşı noktasıdır. Bir mentorun cevapları verdiği (ve [[cognitive-offloading|aşırı güven]] riski taşıdığı) yerde, bir LbT düzeni öğrenciyi öğretmen yapar ve açıklamayı, boşluk tespitini ve bilgi inşasını zorunlu kılar. Bu durum LbT’yi, [[generative-ai|üretken YZ]]’yi bir desteğe dayalı çıraktan derin öğrenmenin aracına dönüştürmenin temel bir stratejisi olarak konumlandırır ve [[desirable-difficulties]], [[active-learning]] ile [[constructivist]] [[pedagogy]]’e bağlanır.

## Öğreterek Öğrenmeyi Uygulamaya Geçirmek

### Bir YZ aracisi için tasarım örüntüleri

Yukarıdaki [[research-methods-aied|araştırma]], varsayılan uzman bir LLM’yi verimli bir aracıye dönüştürmeye yönelik birkaç yeniden kullanılabilir örüntüde birleşir:

- **Kısıt temelli acemi istek metinleri (en güvenilir).** Modelden “kafası karışık bir öğrenciymiş gibi davranmasını” istemek yerine hatayı ve bir öğretme döngüsünü açıkça zorlayın, örn.: *“Ben [kavram] üzerine öğrenen bir acemi öğrenciyim. Bana bunu öğretmemi söyle. Açıklayıcı sorular sor ve konuşmamız boyunca kasıtlı olarak 2–3 şeyi yanlış yap. Doğru cevabı asla kendin söyleme — benim açıklamamı bekle, sonra anlamlı olup olmadığımı bana söyle.”*
- **Ters öğretme koruması.** Öğrenci rolleri çevirmeye çalıştığında aracının cevabı geri açıklamayı *reddetmesi* gerektiğini belirten bir kural ekleyin: *“Problemi çözmemi ya da kavramı açıklamamı istersen, bana benim öğretmen olduğumu hatırlat ve bunun yerine benim açıklamamı iste.”* Explique, LbT etkileşimini koruyan şeyin bu direniş olduğunu gösterir.
- **Mühendislikle oluşturulmuş bilgi boşlukları.** Görevi, modelin yalnızca öğrencinin sahip olduğu bilgi olmadan cevaplayamayacağı biçimde yapılandırın — öğrencinin bilgisi gerçekten gerekli hale gelir, isteğe bağlı değil. Bu durum etkileşimi isteğe bağlı bir sohbetten zorunlu bir öğretmeye dönüştürür.
- **Dış bir başarı ölçütü.** Öğretmeye gerçek bir sonuç verin — yalnızca öğrenci başarılı biçimde öğrettikten sonra açılan bir eşikçi test (Explique) ya da öğrencinin aracının çıktısını geçirmek zorunda olduğu bir kod değerlendirme platformu (Chen). Gerçek çabayı sürdüren ve tüm egzersizin bir onay kutusuna dönüşmesini önleyen şey hesap verebilirliktir.

### Öğretim elemanları için ipuçları

- **Öğretme görevini sonuç doğurucu kılın, meşguliyet değil.** [[student-engagement|Angajman]] için en güçlü kanıt, önemli olan etkinliklerden gelir — Explique, derecelendirilmiş bir testi öğretme egzersizinin arkasına kapı olarak koydu; Chen, aracının çıktısını bir değerlendirme platformunu geçmeye bağladı. Öğretme tamamen isteğe bağlı olduğunda öğrenciler akıl süzgecinden geçirerek zor kısmı atlayacaktır.
- **Öğrencilere yalnızca bir sohbet penceresi değil, bir öğretme protokolü verin.** Etkileşimi bir yapıyla iskeleyin — “kavramı açıkla → somut bir örnek ver → aracının sorularını yanıtla → anlamayı denetle” — böylece açık uçlu diyalog, amaçsız bir konuşma yerine bilinçli bir öğretme dizisi olur.
- **İçerik dökümünü doğrudan ele alın.** Explique, dış içeriğin doğrudan kopyala-yapıştırının dönem sonunda etkileşimlerin %15’inin altından %30–35’ine yükseldiğini buldu. Öğrencilere yapıştırmanın amacı nasıl boşa çıkardığını anlatın ve bir hesap verebilirlik adımı düşünün (örn. “aracının yanlış anlamasını kendi sözcüklerinizle açıklayın”).
- **LbT’yi hata ayıklama pratiğiyle eşleyin.** YZ doğru kod yazdığı için öğrenciler hata düzeltme pratiğini kaybedebilir. Kasıtlı olarak aracıdan bir şeyi *yanlış uygulamasını* isteyin ya da öğretme oturumunu bir hata bulma göreviyle sürdürün, böylece hata ayıklama döngüde kalır.
- **Çaba eğimini izleyin.** Yeniliğin sönmesini bekleyin; bir dönem boyunca bilişsel çabayı sürdürmek için hedef kavramları çeşitlendirmeyi, zorluk eklemeyi ya da [[teacher-role|öğretme rolünü]] hangi öğrencilerin alacağini döndürmeyi planlayın.

### Geliştiriciler için ipuçları

- **Yalnızca kişiliğe değil, katı kısıtlara öncelik verin.** “Belirsizlik” ya da “bir öğrenci kişiliği” için istek metni yazmak güvenilir değildir; hataları ve bir açıklama döngüsünü açıkça zorlayın. (Bkz. [[prompting-teachability-novice-personas-lbt-2026]].)
- **Bir tamamlanma ölçütü oluşturun.** *Öğrencinin ne zaman yeterince açıkladığını* tanımlayın (Explique, kavramın öğrenme hedeflerine bağlı bir LLM araç işlevi kullandı) böylece etkileşim bir süre sınırında ya da sabit bir dönüş sayısında değil, anlayışla sona erer.
- **Diyaloğu kaydedin ve kodlayın.** Explique, etkileşimleri Ayrıntılı / Asgari / Dış İçerik Kullanımı olarak sınıflandırmak için dakika başına sözcük tespitini ve LLM anlamsal kodlamasını kullandı — bu sinyal, dolanımı ve azalan angajmanı sorun haline gelmeden tespit etmenin yoludur.
- **Öğretim elemanlarına bir pano verin.** Öğretme etkileşimlerindeki tamamlanma oranları ve [[qualitative-research|nitel]] örüntüler, çaba düştüğünde bir insanın müdahale etmesini sağlar (Explique’in öğretim elemanları tam olarak bunu izledi).

### Çıkarımlar ve açık sorular

- **LbT, YZ aşırı güvenine karşı ölçeklenebilir bir panzehir** — mentor/öğrenci rolünü tersyüz eder ve öğreneni bilişsel olarak etkin tutar; bu durum YZ giderek daha akıcı ve daha “yardımsever” hale geldikçe daha da önem kazanır.
- **Hataya açıklık bir kusur değil, bir özelliktir.** *Fazla* doğru olan bir araci, LbT’yi işleyen kılan hata düzeltme ve boşluk tespitini ortadan kaldırır; verimli mücadeleye karşı değil, onun için tasarım yapın.
- **Açık sorular kalmaktadır:** Yenilik tamamen söndüğünde LbT etkileşimleri bir dönemin ötesinde nasıl sürdürülür? LbT, bilgisayar bilimi dışındaki, daha az yapılandırılmış alanlara aynı ölçekte aktarılabilir mi? Otomatik diyalog kodlaması, öğretim elemanları için pratik, gerçek zamanlı bir angajman izleyicisi haline gelebilir mi? Ve öğretme rolünü *her* öğrenci için, motive olmuş birkaçı için değil, nasıl anlamlı tutarız?

## Yaygın yanlış anlamalar

**“Her öğrenen işe yarar, çünkü yarar açıklamada yatar.”** Yarar, öğrenenin yanıtlarının bilgilendirici olmasına bağlıdır. Her şeyi zaten anlayan bir öğrenen, öğretenin tespit edebileceği bir boşluk bırakmaz; bu nedenle bir LLM’yi iyi bir öğrenen yapmak **hataya açıklığı mühendislikle inşa etmeyi** gerektirir: öğretmen-öğrencinin teşhis edip düzeltmesi gereken tasarlanmış hatalar ve kafa karışıklığı. Protégé etkisi öğrenenin bilgisizliğinden gelir, dolayısıyla yetkin bir öğrenen mekanizmayı ortadan kaldırır.

**“Üretilen hatalar yanlış oldukları için yeterince iyidir.”** Ancak makul oldukları sürece. Kör bir etiketleme çalışmasında uzmanlar **196 LLM üretimli Java gönderisinden 164’ünü (%83,7) özgün** öğrenci işi olarak yanlış sınıflandırdı; bu hem hataların gerçekçi olduğunun kanıtı hem de bir öğrenenin yanlış tanıyı öğretecek biçimde yanılabileceğine dair bir uyarıdır.

**“Bir LLM’den kafası karışmış gibi davranmasını istemek önemsiz bir istek metnidir.”** Bu bir tasarım sorunudur, çünkü hataya açıklık öğretilen kavrama ve öğrenen-öğretenin mevcut modeline göre kalibre edilmelidir. Rastgele hatalar hata ayıklama pratiği üretir; belirli, makul bir yanlış kanıyı yansıtan hatalar kavramsal yeniden yapılanma üretir ve pedagojik hedef yalnızca ikincisidir.

**“Öğreterek öğrenme, öğretilmekten daha yumuşak bir etkinliktir.”** Daha talepkardır. Öğretmeye hazırlanmak, bilginin düzenlenmesini ve kişinin kendi boşluklarının yerini bulmasını zorlar; bu nedenle yaklaşım, pasif alımın gizlediği yanlış anlamaları gün yüzüne çıkarır: güçlük, en aza indirilecek bir maliyet değil mekanizmanın kendisidir.

## Bağlı kavramlar

- [[pedagogical-patterns]] — Bir YZ aracisine açıklama yapmak: bilgi tabanında en iyi kanıtlanmış dizi
- [[generative-ai]]
- [[active-learning]]
- [[constructivist]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[cs-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[pedagogy]] — Şemsiye: YZ eğitiminde pedagojiler ve öğretme stratejileri

## Bağlı makaleler

- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT as a teachable agent in programming
- [[explique-teachable-agent-algorithms-546-students-2026]] — Explique: teachable agent for 546 students
- [[prompting-teachability-novice-personas-lbt-2026]] — Designing novice personas for teachability
- [[socrates-students-instructors-llms-lbt-2025]] — Students as instructors of LLMs (Socrates)
- [[teaching-ai-vocabulary-lbt-llms-2026]] — Vocabulary learning by teaching AI
- [[knowloop-confusion-to-consolidation-2026]] — Teach-back consolidation in a conversational review system
- [[simulating-novice-students-machine-unlearning-2026]] — machine unlearning to hold a tutee at a novice knowledge level, and relearning through teaching dialogue
- [[simulating-students-java-programming-errors-llms]] — Simulating student errors with LLMs
- [[knowledge-building-tutor-learning-2026]] — knowledge-building responses, not prior knowledge, predict tutor learning