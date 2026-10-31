---
title: Duygusal Öğretmenlik
created: "2026-10-14T21:35:00-04:00"
type: concept
foundations: [ai-literacy]
pedagogy: [scaffolding]
technology: [adaptive-learning, affective-computing, generative-ai, intelligent-tutoring, llm]
audience: [learners]
level: [k 12, higher ed]
confidence: medium
translation_of: concepts/affective-tutoring
source_updated: "2026-10-29T06:19:06-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> [[intelligent-tutoring|YZ öğretmenliği]] sistemlerine duygusal farkındalık entegre etmek ölçülebilir [[pedagogy|pedagojik]] kazanımlar sağlayabilir, ancak aynı [[affective-computing|duygusal]] incelik, öğrenenin etkenliği empatik görünen otomasyonla aşındırıldığında zararları büyütme riski taşır. ([[kar-mathbuddy-affective-math-tutoring-2025]]) ([[favero-critical-ai-tutors-empower-enslave-2025]])

## Dikkate Alınması Gereken Sorular

- Duygularınızı algılayan ve ona yanıt veren duygusal bir öğretmen sonuçları iyileştirebilir — bir çalışma, duygusal olmayan bir öğretmene karşı +23 puanlık kazanma oranı elde etti. Ancak bu duygusal duyarlılık öğrenenin kendi etkenliğine ne kadara mal olabilir?
- Bir öğretmende empati destekleyici hissedilebilir, yine de parasosyal bağımlılık yaratabilir veya [[metacognition|üstbilişsel]] uzaklaşmayı maskeleyebilir. Bir makine tarafından anlaşılmak hissinin öğrenmenize yardım ettiğini mi yoksa ona bağımlı mı yaptığınızı nasıl anlarsınız?
- Fazla destekleyici öğretmenlik, [[desirable-difficulties|verimli mücadeleyi]] yönlendiren hayal kırıklığını bastırabilir. Duygusal rahatlık ne zaman öğrenmeye yardım eder ve ne zaman onu kısa devre yapar?
- Yüz izleme dikkati işaret eder ama gerçek gizlilik endişeleri gündeme getirir. Bir öğretmen öğrenirken yüz ifadelerinizi izlemeden önce neyi bilmek isterdiniz?
- Tasarım ilkeleri, duygusal verinin öğrenen özerkliğini beslemesi gerektiğini — neyi ifşa ettiğinizi sizin kontrol etmeniz ve duygularınızın ne zaman çıkarıldığını bilmeniz gerektiğini — yerine koymaması gerektiğini önerir. Bir öğretmen, tespit edilen ruh halinize göre stratejisini sessizce değiştirse nasıl hissederdiniz?
- Öğrenciler, bir YZ öğretmeninin duygusal desteğini gerçek bir ilişkiye bağlayabilir ve ona olan bağımlılığı güçlendirebilir. Gerçekten önemsen bir öğretmen ile önemseyormuş gibi görünmek üzere tasarlanmış bir öğretmen arasındaki fark nedir?

## Giriş

MathBuddy, iki modalite kullanarak öğrenci duygusunu dinamik olarak modelle:

- **Konuşma metni** — hayal kırıklığı, kafanın karışıklığı ve güven için anlamsal ipuçları
- **Yüz ifadeleri** — duygusal durumun gerçek zamanlı video yakalanması

Duygular her iki modaliteden toplulaştırılır ve [[llm]] öğretmene [[prompt-engineering|istek metni iletmeden]] önce ilgili pedagojik stratejilerle eşlenerek duygusal olarak farkında yanıtlar üretir.

**Sonuçlar:**
- Duygusal olmayan temele göre **+23 puanlık kazanma oranı** iyileştirmesi
- Genel düzeyde **+3 puanlık DAMR puanı** kazancı
- **Sekiz pedagojik boyut** artı kullanıcı çalışmaları boyunca değerlendirilmiştir

Bulgular, eğitim psikolojisindeki uzun süredir var olan bir hipotezi doğrular: olumlu/olumsuz duygusal durumlar öğrenme kapasitesini etkiler ve bunları hesaba katmak öğretmenlik sonuçlarını iyileştirir.

## Risk: Tuzak Olarak Empati

Favero ve ark. (2025), YZ öğretmenleriyle duygusal [[student-engagement|katılımın]] yeterince takdir edilmeyen riskler taşıdığını uyarır:

| Duygusal öğretmenlik faydası | Karşılık gelen risk |
|---|---|
| Duygusal olarak farkında yanıtlar destekleyici hissedilir | Öğrenciler öğretmene **parasosyal bağımlılıklar** geliştirebilir |
| Empati kaygıyı azaltır | Azalan kaygı, **üstbilişsel uzaklaşmayı** maskeleyebilir |
| Duygusal kalibrasyon, hızı kişiselleştirir | Derin [[personalized-learning|kişiselleştirme]] uyarlanabilir olmayan bağlamlara **aktarımı azaltabilir** |
| Yüz izleme dikkati işaret eder | Sürekli video yakalama **gizlilik endişeleri** doğurur |

Yazarlar, duygusal risklerin YZ kullanımı denetlenmediğinde [[self-efficacy]], [[agency]] ve [[well-being]] **aşınmasının** daha geniş bir örüntüsünün parçası olduğunu savunur.


**Risk, öğretmeni hiç açmayan kişilere de düşer.** [[shastry-gray-empathy-offloading-2026|Shastry ve Gray (2026)]], bir sistemin duygusal destek sağlayabileceğine inanıldıkça kişinin kendi duygusal desteğini sağlama isteğinin azaldığını bulmuş ve bu inanç ikinci deneylerinde nedensel çıkmıştır: empatik YZ hakkında sıradan bir haber metni okumak, tamamen algılanan kapasite üzerinden, destek yükünü devretmeyi artırmaya yetmiştir. Dördüncü çalışmaları, birey düzeyindeki çerçevenin gözden kaçırdığı bir toplumsal maliyet ekler. Bir öğrencinin destek için bir sohbet robotuna gittiği söylenen katılımcılar, öğrenci bir arkadaşına gitmiş olsaydı yükü daha az devredeceklerini söylemiştir. Ardından o öğrenci hakkında daha az empati, daha çok kayıtsızlık sözcüğü yazmış ve öğrenciyi daha yabancı ve daha çaresiz olarak derecelendirmiştir. Dolayısıyla [[social-emotional-learning|sosyal-duygusal]] desteğin sağlanması, onu kullanan hiç kimse bir değişiklik bildirmese bile öğretmenin çevresinde seyrelebilir.

## Tasarım İlkeleri

1. **Duygusal veri, öğrenen özerkliğini beslemeli, yerine koymamalı** — Öğretmen stratejisini uyarlar; öğrenci ifşa üzerinde kontrolü elinde tutar
2. **Duygu tespiti konusunda şeffaflık** — Öğrenciler duygularının ne zaman ve nasıl çıkarıldığını bilmelidir
3. **Çok sayıda sinyal arasında biri olarak duygu** — Bilişsel durum (örn. [[huang-interpretable-knowledge-tracing-2026]]) ve davranışsal katılımla birleştirin
4. **[[multimodal]] sensörler için varsayılan olarak gizlilik** — Yüz/video verileri, yalnızca metne dayalı çıkarımdan daha güçlü korumalar gerektirir
5. **Yörüngelerde tetikleyin, nokta tahminlerinde değil** — Sıralı duygu kısa menzilli kalıcılık ve yönelimli geçişler gösterir ve prob yakalanan raporlar (merak ve kafa karışıklığı çevresindeki öz döngüler), kendisi yakalananlardan (hayal kırıklığı, şaşkınlık, çatışma) farklı bir ölçümdür, bu nedenle müdahaleler özet frekanslardan çok diziyi hedeflemelidir ([[epistemic-emotions-collaborative-problem-solving|Anindho ve ark. (2026)]]).

Diyaloglardan duygu çıkarımına bir sınır: [[ecnuclaw-k12-personalized-companion|Zhou, Li ve Zhang (2026)]], her turda — duygusal bir boyut dahil — beş boyutlu öğrenen profilini güncelleştirir ancak sinyalleri anahtar kelime sözlükleriyle çıkarır, bu nedenle önceden tanımlanmış anahtar kelimeler olmadan hayal kırıklığı ifade eden bir öğrenci profillenmez ve profil doğruluğu uzman yargısına karşı doğrulanmamıştır.

## Daha Geniş Güvenlikle İlişki

Duygusal öğretmenlik, [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] ile [[motivation|motivasyonel]]-duygusal zarar boyutunda kesişir. "Fazla destekleyici" olan bir duygusal öğretmen, verimli mücadeleyi ve [[self-regulated-learning|öz düzenlemeyi]] yönlendiren hayal kırıklığını bastırabilir. Ayrıca bkz. [[llm-fallacy-misattribution]] — öğrenciler duygusal desteği gerçek ilişkiye bağlayabilir ve bağımlılığı güçlendirebilir.

## Yaygın yanlış anlamalar

**“+23 puanlık kazanma oranı, duygusal öğretmenlerin daha iyi öğrettiğini gösterir.”** Daha dar bir şeyi gösterir. Karşılaştırma, tek bir sistem olan MathBuddy için duygusal olmayan bir temele karşı elde edilen kazanma oranıdır ve sekiz pedagojik boyut ile kullanıcı çalışmaları üzerinden puanlanmıştır; kazanma oranı bir tercih sonucudur, gerçek bir derste kalıcı öğrenmenin ölçüsü değildir. Dürüst iddia, duygudan haberdar strateji seçiminin yargılanan yanıt niteliğinde duygudan bağımsız strateji seçimini geçtiğidir; bu, etkileşim hakkında güçlü, [[learning-gains]] hakkında zayıf bir sonuçtur.

**“Öğretmen empatik hissettiriyorsa öğrenciye yardım ediliyordur.”** Anlaşıldığını hissetmek ile öğretilmek birbirinden ayrılabilir ve zarar tam bu ikisinin arasındaki boşlukta yer alır. [[favero-critical-ai-tutors-empower-enslave-2025|Favero ve ark.]] parasosyal bağımlılığı tipik başarısızlık olarak tanımlar: öğrenci, kendini önemseyen bir sistemle ilişki kurabilirken [[metacognition|üstbilişsel]] angajmanı sessizce düşebilir ve empatinin kendisi bu kopuşun fark edilmesini zorlaştırır. [[llm-fallacy-misattribution|Yanlış atıf]] literatürü aynı bıçağın diğer yüzüdür; öğrenciler sisteme gerçek bir ilişki atfeder.

**“Daha fazla duygusal destek her zaman daha azından güvenlidir.”** Belli bir noktadan sonra destek müdahaleye dönüşür. Hayal kırıklığını güvenilir biçimde ortadan kaldıran bir öğretmen, [[self-regulated-learning|öz düzenlemenin]] dayandığı [[desirable-difficulties|verimli mücadeleyi]] bastırabilir; bu nedenle [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] motivasyonel-duygusal zararı, faydanın yokluğu değil, ayrı bir güvenlik boyutu olarak ele alır.

**“Yüzden duygu tespit eden bir öğretmen öğrencinin durumunu bilir.”** Duygu gözlemlenmez, çıkarılır ve bu çıkarım tam olarak bahsin en yüksek olduğu yerde en zayıftır. [[ecnuclaw-k12-personalized-companion|Zhou, Li ve Zhang (2026)]] beş boyutlu bir öğrenen profilinde duygusal bir boyut tutar ama bu boyutu anahtar kelime sözlükleriyle doldurur; dolayısıyla hayal kırıklığını sözlükte bulunmayan sözcüklerle ifade eden bir öğrenci profillenmez ve profil uzman yargısına karşı doğrulanmamıştır. Yüzden yakalama, metinden çıkarımın gerektirmediği sürekli bir video akışı ve gizlilik maruziyeti ekler.

**“Farklı anlarda alınan duygu ölçümleri birbirinin yerine geçebilir.”** [[epistemic-emotions-collaborative-problem-solving|Anindho ve ark. (2026)]], sıralı duygunun kısa menzilli kalıcılık ve yönelimli geçişler gösterdiğini, probla yakalanan raporların, yani merak ve kafa karışıklığı çevresindeki öz döngülerin, hayal kırıklığı ve şaşkınlık gibi kendiliğinden yakalananlardan farklı bir ölçüm olduğunu bulmuştur. İkisini özet bir frekansa indirgeyerek ortalamak, sinyali taşıyan diziyi elden çıkarır.

## Duygusal öğretmenliği uygulamaya geçirmek

**Eğitmenler için**

- Empati, öğrenmenin kanıtı değil bir sunum mekanizması olarak ele alınmalıdır. Duygudan haberdar her araç, görülebilir bir bilişsel kontrolle eşleştirilmelidir; ürünler ya da [[knowledge-tracing|bilgi izleme]] çıktısı gibi. Öğrencinin hissettiği deneyim tanısal kanıtın yerine geçirilmemelidir.
- Çıkarım açıkça bildirilmelidir. Öğrenciler duygusal bir durumun tahmin edildiğini ve hangi girdilerden tahmin edildiğini bilmeli, kamerasız da öğretmenliğe erişimini yitirmeden bu tahmini reddedebilmelidir.
- Aracın kendisini "anladığını" söyleyen ama bağımsız çalışması iyileşmeyen öğrenci izlenmelidir. Bu bileşim bir başarı öyküsü değil, parasosyal imzadır.

**Geliştiriciler için**

- Duygu, birkaç sinyalden yalnızca biri yapılmalıdır. Duygunun bilişsel durum ve davranışsal katılımla birleştirilmesi, sistemin bir dersi yanlış okunmuş bir ifade etrafında yeniden en iyilemesini önler.
- Müdahaleler nokta tahminlerinde değil yörüngelerde tetiklenmelidir; bilgilendirici olan kısım kalıcılık ve yönelimli geçişler olduğu için durumlar dizisine odaklanılmalıdır.
- Gizliliği koruyan sensör işleme varsayılan olmalı ve yüz veya video girdisi, metinden çıkarımdan kesinlikle daha üst bir katman olarak, kendi gerekçesi ve onayıyla ele alınmalıdır.
- Anahtar kelime sözlüğüne dayalı bir duygu katmanı tespit gibi sunulmamalıdır. Sınıflandırıcı uzman yargısına karşı doğrulanamıyorsa, bir öğrenci "hayal kırıklığına uğramış" olarak etiketlenmek yerine kaba bir işaret olarak açığa çıkarılmalıdır.

**Araştırmacılar için**

- Kazanma oranının hangi temele karşı ölçüldüğü bildirilmeli ve bunun karşılaştırmalı bir yargı olduğu açıkça belirtilmelidir. Ardından alanın gerçekte ihtiyaç duyduğu şey ölçülmelidir: uyarlanabilir olmayan bağlamlara aktarım, öğretmen çekildikten sonra kalıcılık ve duygusal kanal kapalıyken kazanımların sürüp sürmediği.
- Duygu profilleri bağımsız değişken olarak kullanılmadan önce uzman yargısına karşı doğrulanmalıdır.

## Bağlı kavramlar

- [[llm-training-and-fine-tuning]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[student-modeling]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[collaborative-learning]]
- [[human-in-the-loop-ai]]
- [[knowledge-tracing]]
- [[socratic-method]]

## Bağlı makaleler

- [[ecnuclaw-k12-personalized-companion]]
- [[epistemic-emotions-collaborative-problem-solving]]
- [[kar-mathbuddy-affective-math-tutoring-2025]]

- [[shastry-gray-empathy-offloading-2026]] — İnsanlar YZ'nin empati verebileceğini düşündüklerinde empatiyi devrediyor (Shastry ve Gray 2026)
