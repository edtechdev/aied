---
title: "RAID Benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "RAID üzerinde puanlanan AI metni dedektörlerinin herkese açık liderlik tablosu; RAID, modellere, alanlara, kod çözme ayarlarına ve çekişmeli saldırılara karşı sağlamlığı test etmek için inşa edilmiş bir benchmark'tır."
url: https://raid-bench.xyz/leaderboard
author: "Liam Dugan and the RAID team (University of Pennsylvania)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [ai-detection]
foundations: [academic-integrity]
audience: [researchers, administrators, instructors]
level: [higher ed]
translation_of: resources/raid-benchmark-leaderboard
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

RAID, [[ai-detection|AI metni tespiti]] hakkındaki çoğu ciddi iddianın arkasındaki benchmark'tır ve liderlik tablosu, bir dedektörün yayımlanmış doğruluğunun model, alan, kod çözme ayarı veya kasıtlı saldırı değişikliğinden sağ çıkıp çıkmadığını kontrol edilecek yerdir. Girdiler test kümesi üzerinde puanlanır ve deponun gönderim sürecini izleyen herkes tarafından gönderilebilir.

## Bu kaynakla neler yapılabilir

Alana göre filtreleyin — özetler, kitaplar, haberler, şiir, tarifler, Reddit, incelemeler, wiki — kod çözme stratejisine göre (greedy veya örnekleme), tekrar cezasına göre ve çekişmeli saldırıya göre; buna boşluk, homoglyph, eş anlamlı değiştirme, yeniden ifade, sıfır genişlikli boşluklar ve artikel silme dahildir. Ardından bir dedektörü metrikler arasında karşılaştırın: AUROC, %5 yanlış pozitif oranında TPR ve %1'de TPR.

Asıl mesele bu filtre kümesidir. Toplamda 1.000'e yakın puan alan bir dedektör, metin yeniden ifade edildiğinde veya kaynak model değiştiğinde düşebilir ve liderlik tablosu, bir kurum [[academic-integrity|suistimal]] davasını buna dayandırmadan önce düşüşü görmenizi sağlar. %1 yanlış pozitif sütunu eğitimde en çok önem taşıyandır, çünkü kurumsal ölçekte %1'lik bir hata oranı, haksız yere suçlanan yüzlerce öğrenci demektir.

## Kimler için

Tespit yöntemlerini değerlendiren araştırmacılar, bir dedektöre atıfta bulunabilecek politika yazan yöneticiler ve bir müfredatta öyle demeden önce "bu tespit edilebilir mi?" sorusuna somut bir yanıt isteyen öğretim elemanları.

## Notlar ve uyarılar

Benchmark, makine tarafından üretilen metnin tespitini ölçer, suistimali değil: planlamak, taslak çıkarmak veya gözden geçirmek için AI kullanan bir öğrenci, dedektörlerin yakalamak için inşa edilmediği metin üretir ve [[language-learning|ikinci bir dilde yazan]] bir öğrenci, bir liderlik tablosunun gösteremeyeceği bilinen bir yanlış pozitif riskidir. RAID, akademik bir ekip tarafından sürdürülen bir araştırma eseridir; kapsam, test kümesindeki üretici modelleri izler, dolayısıyla benchmark yenilenene kadar yeni modeller yeterince temsil edilmeyebilir. Liderlik tablosu dedektörleri sıralar, satıcılarının veri işleme uygulamalarını değil; yüksek bir AUROC, öğrenci çalışmalarını o hizmete göndermenin sizin yargı bölgenizde yasal veya etik olup olmadığı hakkında hiçbir şey söylemez.

## Bağlı kavramlar

- [[ai-detection]] — benchmark'ın değerlendirdiği yöntem ailesi
- [[academic-integrity]] — dedektör puanlarının kullanıldığı politika bağlamı
- [[benchmark]] — bu aracın ait olduğu daha geniş araç sınıfı