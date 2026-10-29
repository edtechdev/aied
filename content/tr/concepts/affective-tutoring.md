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
source_updated: "2026-09-30T09:59:35-04:00"
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

## Tasarım İlkeleri

1. **Duygusal veri, öğrenen özerkliğini beslemeli, yerine koymamalı** — Öğretmen stratejisini uyarlar; öğrenci ifşa üzerinde kontrolü elinde tutar
2. **Duygu tespiti konusunda şeffaflık** — Öğrenciler duygularının ne zaman ve nasıl çıkarıldığını bilmelidir
3. **Çok sayıda sinyal arasında biri olarak duygu** — Bilişsel durum (örn. [[huang-interpretable-knowledge-tracing-2026]]) ve davranışsal katılımla birleştirin
4. **[[multimodal]] sensörler için varsayılan olarak gizlilik** — Yüz/video verileri, yalnızca metne dayalı çıkarımdan daha güçlü korumalar gerektirir
5. **Yörüngelerde tetikleyin, nokta tahminlerinde değil** — Sıralı duygu kısa menzilli kalıcılık ve yönelimli geçişler gösterir ve prob yakalanan raporlar (merak ve kafa karışıklığı çevresindeki öz döngüler), kendisi yakalananlardan (hayal kırıklığı, şaşkınlık, çatışma) farklı bir ölçümdür, bu nedenle müdahaleler özet frekanslardan çok diziyi hedeflemelidir ([[epistemic-emotions-collaborative-problem-solving|Anindho ve ark. (2026)]]).

Diyaloglardan duygu çıkarımına bir sınır: [[ecnuclaw-k12-personalized-companion|Zhou, Li ve Zhang (2026)]], her turda — duygusal bir boyut dahil — beş boyutlu öğrenen profilini güncelleştirir ancak sinyalleri anahtar kelime sözlükleriyle çıkarır, bu nedenle önceden tanımlanmış anahtar kelimeler olmadan hayal kırıklığı ifade eden bir öğrenci profillenmez ve profil doğruluğu uzman yargısına karşı doğrulanmamıştır.

## Daha Geniş Güvenlikle İlişki

Duygusal öğretmenlik, [[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] ile [[motivation|motivasyonel]]-duygusal zarar boyutunda kesişir. "Fazla destekleyici" olan bir duygusal öğretmen, verimli mücadeleyi ve [[self-regulated-learning|öz düzenlemeyi]] yönlendiren hayal kırıklığını bastırabilir. Ayrıca bkz. [[llm-fallacy-misattribution]] — öğrenciler duygusal desteği gerçek ilişkiye bağlayabilir ve bağımlılığı güçlendirebilir.

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
