---
title: "Primer"
created: "2026-11-13T18:05:00-05:00"
updated: "2026-11-13T18:05:00-05:00"
type: resource
summary: "Wharton Generative AI Labs'ın, bir eğitimciyle yapılan yapılandırılmış görüşmeyi kendi mentor, alıştırma ve geri bildirim ajanlarına sahip çalıştırılabilir, uyarlanabilir bir öğrenme simülasyonuna dönüştüren açık kaynaklı yazarlık sistemi."
url: https://gail.wharton.upenn.edu/primer/
source_code: https://github.com/wharton-generative-ai-labs/primer
author: "Wharton Generative AI Labs, University of Pennsylvania"
author_url: https://gail.wharton.upenn.edu/
resource_type: [software]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [learning-design, agentic-ai]
pedagogy: [scaffolding]
technology: [generative-ai, simulation]
audience: [instructors, instructional designers, faculty developers, researchers, software developers]
level: [higher ed]
translation_of: resources/primer
source_updated: "2026-11-13T17:40:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-13"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Primer, bir dersi programlamak yerine bir YZ'ye anlatarak eğitsel bir [[simulation]] kurmaya yarayan [[open-source|açık kaynaklı bir sistemdir]]. Simülasyonun ne öğreteceğini eğitimcinin yargısı belirler: bir görüşme, eğitmenin ders ve öğrenciler hakkında bildiklerini ortaya çıkarır; bir tasarım belgesi bu bilgiyi gözden geçirilebilir kılar; ve eğitimci onaylamadan hiçbir şey inşa edilmez.

## Bu kaynakla neler yapılabilir

Görüşme her seferinde tek soru sorar: ders, öğrencilerin düzeyi ve ön bilgisi, yaygın kavram yanılgıları, eğitmenin yaklaşımı ve başarının nasıl değerlendirileceği. Eğitimciler konuşabilir veya yazabilir; izlence, ders planı ya da değerlendirme ölçütü yükleyebilir. Geri gelen şey, hedefleri, senaryo akışını, karakterleri, riskleri ve uyarlama mantığını kapsayan bir tasarım belgesidir; eğitimci bunu bir ders planını düzelttiği gibi düzeltir ve onaylar. Ardından beş ajan onu inşa eder: Intake, Design, Casting Director, Image Generation ve Experience Builder; sonuncusu sonucu tek bir öğrenci ya da bütün bir sınıf için bir araya getirir.

Çalışma anında öğrencinin karşısına üç ajan çıkar. Bir mentor ön bilgiyi harekete geçirir ve kavram yanılgılarını ortaya çıkarır. Bir alıştırma ajanı, rol yapma karşıtı ya da öğrencinin bir kavramı açıklayıp sorgulandığında açıklamayı revize ettiği bir teachback öğrencisi rolünü oynar. Bir geri bildirim ajanı transkriptten yola çıkarak belirli anları ve öğrenmenin senaryonun ötesine nasıl taşındığını tartışır. Her ajanın dünya içinde bir karakteri ve hedefleri izleyip kanıt toplayan bir öğretim katmanı vardır; eğitimci bireysel ve toplu raporlar alır.

## Kimler için

Eğitmenler, öğretim tasarımcıları ve fakülte geliştirme uzmanları, bir dersi kod yazmak istemeden ayrıntılı biçimde tanımlayabilir. Eğitimcinin döngü içinde olduğu yazarlık ya da [[agentic-ai|çok ajanlı iş akışları]] üzerine çalışan araştırmacılar inceleyebilecekleri çalışan bir sistem bulur; geliştiriciler de onu genişletebilir, çünkü istemler, şablonlar, kontrol listeleri, orkestrasyon desenleri ve TypeScript kodu açık kaynaktır.

## Notlar ve uyarılar

Yazarlar Primer'ı denenmiş bir sınıf ürünü değil deneysel bir prototip olarak adlandırıyor. Sınıflarda bir öğrenme müdahalesi olarak değerlendirilmedi ve hiç kimse onu FERPA, COPPA, eyalet öğrenci mahremiyeti hukuku veya bölge politikası açısından incelemedi; dolayısıyla onu öğrencilerle kullanan kurum bu incelemenin sahibidir. Yazılım MIT lisanslı ve ücretsizdir, ancak bir simülasyon çalıştırmak para maliyeti olan model erişimi gerektirir. Modelden bağımsız olduğu ve yerel ya da açık ağırlıklı modellerde çalıştığı için mahremiyet kurallarının daha sıkı olduğu yerlerde kurulabilir. Mimari ve istemler üzerine bir teknik rapor proje sayfasından bağlantılıdır. Depoda Kasım 2026'da kontrol edildiğinde 98 yıldız ve 16 çatal vardı.

## Bağlı kavramlar

- [[simulation]]
- [[open-source]]
- [[agentic-ai]]
- [[learning-design]]
- [[scaffolding]]
- [[teacher-role]]
