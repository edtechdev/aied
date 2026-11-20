---
title: "Fab AI benchmark leaderboard"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Düşük ve orta gelirli ülkeleri hedefleyen eğitim benchmark'ları için bir model liderlik tablosu; pedagoji, temel okuryazarlık, SEND, görsel matematik ve çok dilli performansı kapsar ve fiyat ile açık ağırlık sütunları içerir."
url: https://www.fab-ai.org/benchmarks
author: "Fab AI"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
technology: [generative-ai]
level: [primary education, secondary]
audience: [policymakers, researchers, educational technology developers]
translation_of: resources/fab-ai-benchmark-leaderboard
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

Fab AI, modelleri, benchmark'ın kendileri için inşa edildiği [[global-south|düşük ve orta gelirli ülkelerde]] bütçelerin, bant genişliğinin ve dil kapsamının kısıtlı olduğu yerlerde önemli olan eğitim görevlerinde değerlendirir ve sonuçları bir makale yerine sıralanabilir bir liderlik tablosu olarak yayımlar. Ana tablo, bir pedagoji benchmark'ını SEND, görsel matematik ve görsel akıl yürütmeyle birlikte puanlar; çok dilli pedagoji, temel okuryazarlık ve sesli okuma değerlendirmesi için ayrı sekmeler vardır.

## Bu kaynakla neler yapılabilir

Yaklaşık 300 modeli, şu anda düşük doksanlardan %21'e kadar uzanan pedagoji puanlarında karşılaştırın; ardından bir eğitim bakanlığının gerçekte tartması gerekenlere göre sıralayın: milyon token başına fiyat, parametre sayısı, açık ağırlıklar ve yayımlanma tarihi. Alttaki yayılım, yararlı olan kısımdır. 2B altı açık modeller pedagoji benchmark'ında %21 ile %43 arasında yer alırken öncü modeller düşük doksanlarda yer alır; bu da "bunu ucuz donanımda çevrimdışı çalıştırabilir miyiz" sorusunu bir tahmin yerine sayısallaştırılmış bir takasa dönüştürür.

[[multilingual-learning|Çok dilli]] pedagoji sekmesi, sayfayı yer imlerine eklemenin nedenidir. Çoğu eğitim benchmark'ı yalnızca İngilizcedir ve bir modelin pedagojisinin çeviriden sağ çıkıp çıkmadığı sorusu, tam da çok dilli bir sistemdeki bakanlığın yanıtlanması gereken sorudur. Veriler CSV olarak indirilebilir, böylece karşılaştırmalar yerel olarak yeniden çalıştırılabilir.

## Kimler için

Ulusal sistemler için model seçen politika yapıcılar ve satın alma ekipleri, AI destekli eğitimde [[digital-divide|erişim açığını]] inceleyen araştırmacılar ve İngilizce bir sınav olmayan bir pedagoji hedefine ihtiyaç duyan geliştiriciler.

## Notlar ve uyarılar

Bir liderlik tablosu, modelleri benchmark'ın kendi görevlerinde ölçer: yüksek bir pedagoji puanı, o maddeler hakkında kanıttır, bir sınıf hakkında değil. Fiyat sütunu, girdi ve çıktı token fiyatlarını 3:1 oranında harmanlar; bu bir modelleme tercihidir ve herhangi bir belirli dağıtımın maliyeti değildir. Dillerin ve yerel olarak barındırılan modellerin kapsamı yeni modeller ortaya çıktıkça değişir ve küçük modellerin düşük uç puanları kısmen yetenek kadar görev biçimini de yansıtır. Fab AI'nın çerçevelemesi açıkça düşük ve orta gelirli ülkeler hakkındadır; dolayısıyla benchmark'ın madde kümesi bu bağlamı yansıtır ve genel bir eğitim sıralaması olarak okunmamalıdır. Yayımlanma tarihlerini kontrol edin: birkaç girdi mevcut model neslinden öncedir.

## Bağlı kavramlar

- [[benchmark]] — bu aracın ait olduğu daha geniş araç sınıfı
- [[digital-divide]] — fiyat ve açık ağırlık sütunlarının görünür kılmak için var olduğu kısıt
- [[equity-in-ai-education]] — liderlik tablosunun bilgi verdiği politika sorusu