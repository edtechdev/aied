---
title: "Moodle AI Metin Soru Türü"
created: "2026-11-12T19:20:00-05:00"
updated: "2026-11-12T19:20:00-05:00"
type: resource
summary: "Serbest metin yanıtları, soru başına bir isteme ve isteğe bağlı bir puanlama şemasına göre büyük bir dil modeliyle notlandıran açık kaynaklı Moodle soru türü (GPL v3); OpenAI, Azure ya da kendi barındırılan bir Ollama modeli kullanır ve YZ'nin geri bildirimini insan bir notlandırıcıya gösterir."
url: https://github.com/marcusgreen/moodle-qtype_aitext
source_code: https://github.com/marcusgreen/moodle-qtype_aitext
author: "Marcus Green"
resource_type: [software]
access: [free]
license: "GPL v3 or later"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
assessment: [automated-essay-scoring, ai-feedback-quality, formative-assessment]
foundations: [academic-integrity]
audience: [instructors, educational technology developers, administrators]
level: [higher ed, k 12]
translation_of: resources/moodle-qtype-aitext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Çoğu YZ sınav entegrasyonu her yanıtı sabit bir notlandırma çağrısına gönderir. Bu Moodle soru türü tam tersini yapar: değerlendirme ölçütlerini öğretim elemanı yazar. Her soru, modele yanıtı nasıl değerlendireceğini söyleyen bir **istem** ve puanların nasıl verileceğini açıklayan isteğe bağlı bir **puanlama şeması** taşır; böylece "geçmiş zamanda bir cümle yazın" maddesi hatasız için on puan, bozuk dilbilgisi için sıfır ve her yazım hatası için bir puan eksiltme belirtebilir. Model bir puan ve [[feedback|geri bildirim]] döndürür ve bir öğretim elemanı elle notlandırırken bu geri bildirimi yanıtın yanında görebilir.

## Bu kaynakla neler yapılabilir

Herhangi bir Moodle sınavına bir AIText sorusu ekleyin, istemi ve puanlama şemasını yazın ve istemleri önizleme denemeleri arasında dönmek yerine düzenleme formundaki bir AJAX **istem test edicisiyle** sınayın. Notlandırma, soru türüyle birlikte kurulması gereken iki yardımcı soru davranışı (anında ve ertelenmiş) üzerinden yürür; bu, YZ notlandırmasını Moodle'ın çekirdek davranışlarından ayrı tutar; eski `interactivecountback` davranışını kullanan mevcut denemeler yükseltmede taşınır. Model erişilemezse notlandırma hata vermek yerine bozulur, böylece bir deneme kaybedilmez. Soru yerel bir sınav türü olduğu için sonuçlar herhangi bir madde gibi karne defterine düşer — bir ders ekibinin [[automated-assessment|otomatik notlandırmayı]] demo değil pilot olarak ele alabilmesi için ihtiyaç duyduğu şey budur.

Tasarım ayrıca değerlendirme ölçütlerini [[ai-feedback-quality|geri bildirim kalitesinin]] kararlaştırıldığı yere koyar: bir satıcının varsayılanına değil, öğretim elemanının yazdığı isteme. Bu, aracın dürüst kullanımıdır — inceleyip revize edebileceğiniz ölçütler — gerçi bu aynı zamanda kalite tavanının ölçütler olduğu anlamına da gelir ve belirsiz bir istem belirsiz notlandırma üretir. Kurumlar ona [[formative-assessment|biçimlendirici değerlendirmenin]] dayandığı düşük riskli, sık kontrollerde başvurur; oralarda bir insan aksi hâlde bir gecede kırk kısa yanıt okurdu.

## Kimler için

Siteyi hâlihazırda çalıştıran Moodle yöneticileri ve geliştiricileri, ayrı bir platform ya da ticari lisans olmadan YZ notlandırması isteyen öğretim elemanları ve incelemek için denetlenebilir bir notlandırma hattına ihtiyaç duyan araştırmacılar. Moodle 4.5 ya da sonrasını ve bir modele API erişimi gerektirir — ya Moodle'ın YZ alt sistemi üzerinden OpenAI ya da Azure, ya da Local AI Manager üzerinden kendi barındırdığınız bir Ollama örneği; bu, öğrenci metnini yerel altyapıda tutar. Eklenti Marcus Green tarafından sürdürülmektedir, Moodle eklenti pazarındadır ve bu sayfa doğrulandığında 33 yıldızı ve 36 çatalı vardı.

## Notlar ve uyarılar

GPL v3 ya da sonrası altında açık kaynak, ama ücretsiz, çalıştırması ücretsiz demek değildir: model API'sinin parasını biri öder ve notlandırmanın kalitesi model seçimine ve istem tasarımına bağlıdır. Uzak bir sağlayıcı kullanıldığında serbest metin yanıtlar Moodle sunucusundan ayrılır, bu yüzden neyin gönderilebileceğini kurumun veri anlaşması belirler; öğrenci çalışmasını dışarı gönderemeyen siteler için kendi barındırılan Ollama yolu vardır. Depo yayımlanmış bir doğruluk ya da uyum çalışması belirtmiyor, bu yüzden eklenti LLM notlandırmasının insan notlandırmasına eşdeğer olduğu varsayımıyla benimsenmemelidir — herhangi bir not ağırlık taşımadan önce [[assessment-validity|geçerlilik]] insan puanlarına karşı yerelde kurulmalıdır. Yardımcı davranışlar katı bir bağımlılıktır: soru türünü tek başına kurmak soruları notlandırılamaz bırakır.

## Bağlı kavramlar

- [[automated-essay-scoring]]
- [[ai-feedback-quality]]
- [[formative-assessment]]
- [[assessment-validity]]
- [[open-source]]
- [[academic-integrity]]
