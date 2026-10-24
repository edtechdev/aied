---
title: "OpenMAIC"
created: "2026-10-14T21:40:00-04:00"
type: resource
summary: "MAIC’in açık kaynak sürümü: bir konuyu veya belgeyi slaytlara, sınavlara, etkileşimli simülasyonlara ve proje tabanlı etkinliklere dönüştüren, YZ öğretmenleri ve sınıf arkadaşları tarafından sunulan çok ajanlı bir sınıf."
url: https://github.com/THU-MAIC/OpenMAIC
author: "Tsinghua University MAIC team"
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-20"
foundations: [agentic-ai, learning-design]
pedagogy: [project-based-learning, online-teaching-and-learning]
technology: [generative-ai, llm, multimodal, conversational-ai]
assessment: [automated-question-generation]
level: [higher ed, k 12]
audience: [instructors, curriculum designers, instructional designers, learners, educational technology developers]
confidence: high
connected_resources: [deeptutor, lesson-md]
reviewed_by: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: resources/openmaic
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**OpenMAIC**, [[intelligent-tutoring|the MAIC study]] adlı çalışmada tanımlanan MAIC çok ajanlı sınıfının açık kaynak sürümüdür: bir konuyu tarif edin veya kendi materyallerinizi ekleyin ve tam bir ders oluştursun — slaytlar, sınavlar, etkileşimli HTML simülasyonları ve proje tabanlı etkinlikler — ardından bunu konuşan, beyaz tahtaya çizen ve tartışmaya katılan YZ öğretmenleri ile YZ sınıf arkadaşları aracılığıyla sunar. Yalnızca okunabilecek değil, gerçekten işletilebilen bir sınıfın arkasındaki koddur.

## Bu kaynakla neler yapılabilir

Tek tıkla üretim, bir istek metninden veya yüklenen bir belgeden, sesden ya da videodan dakikalar içinde bir ders üretir. Çok ajanlı katman, öğrencinin katılabileceği veya çağrılabileceği sınıf tartışması, beyaz tahta çizimleri eşliğinde kişilikler arası yuvarlak masa tartışmaları ve öğretmenin slaytlarla veya diyagramlarla yanıt verdiği serbest biçimli soru-cevap ekler. Oturumlar slayt sunumlarını, sınavları, etkileşimli simülasyonları ve PBL’yi destekler ve düzenlenebilir `.pptx` veya etkileşimli `.html` olarak dışa aktarılır. 1.0.0 sürümü (Ağustos 2026) bir ajan çalışma tezgâhı ekledi: bütün kursları planlayan ve revize eden, sohbet öncelikli bir çalışma alanı; iptal edilebilen, sürdürülebilen veya yönlendirilebilen, sunucu destekli kalıcı oturumlar; slaytlar, sınavlar, etkileşimli öğeler, görüntüler, video ve sesleri kapsayan 24 yerleşik beceri. Bir `SKILL.md` paketi, bir ajan altyapısının bir mesajlaşma uygulamasından sınıflar oluşturmasına olanak tanır.

## Kimler için

Düzenlemeye devam edebilecekleri üretilmiş materyaller isteyen eğitmenler ve kurs ekipleri, çok ajanlı etkinliklerin prototiplerini geliştiren öğretim tasarımcıları ve barındırılan bir ürün yerine kendi sunucusunda barındırılabilir bir sınıfa ihtiyaç duyan geliştiriciler. Okullar bunu Vercel üzerinde veya Docker ile dağıtabilir ve proje open.maic.chat adresinde barındırılan bir demoyla birlikte gelir.

## Notlar

MIT lisanslıdır; İngilizce ve Çince kullanıcı kılavuzu ve Discord ile Feishu üzerinde etkin bir topluluğu vardır. Modele tarafsızdır: en az bir LLM sağlayıcı anahtarı sağlarsınız ve isteğe bağlı yerel bileşenler (yerel modeller için Lemonade, konuşma tanıma için FunASR) yığının daha fazlasını çevrimdışı çalıştırmanızı sağlar — bu nedenle "ücretsiz" ifadesi yazılımı tanımlar, çıkarım (inference) faturasını değil. Ardındaki makale *Journal of Computer Science and Technology* dergisinde yayımlandı (2026, DOI 10.1007/s11390-025-6000-0) ve depo Eylül 2026'ya kadar 38.000'den fazla yıldız topladı.

## Bağlı kavramlar

[[agentic-ai]], [[generative-ai]], [[llm]], [[open-source]], [[project-based-learning]], [[online-teaching-and-learning]], [[personalized-learning]], [[teacher-role]], [[intelligent-tutoring]], [[simulation]]

