---
title: "LESSON.md"
created: "2026-09-20T13:49:11-04:00"
type: resource
summary: "Blok tabanlı eLearning dersleri için açık, düz metin bir biçim; ayrıca bu biçimde ders, değerlendirme ve tüm kurs paketleri yazan bir ajan becerisi."
url: https://lesson.md/
author: "Dan Bashaw (LXD Integral)"
author_url: https://lxdintegral.com/
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source, multimodal]
resource_type: [open format or specification, agent skill]
access: [free]
last_verified: "2026-09-20"
level: [higher ed]
audience: [instructional designers, curriculum designers, software developers, educational technology developers]
confidence: high
connected_resources: [id-toolbox, liascript]
reviewed_by: [editor]
translation_of: resources/lesson-md
source_updated: "2026-09-20T13:49:11-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**LESSON.md**, blok tabanlı eLearning içeriği için açık bir biçimdir: YAML ön bilgisi ile metin, görsel ve bilgi denetimleri için `:::` yönergeleri içeren, bir insan tarafından okunabilen ve herhangi bir araç tarafından ayrıştırılabilen bir Markdown dosyası. Var olma nedeni, kurs içeriğinin genellikle tek bir yazım aracının içine kilitli kalması ve [[llm|büyük dil modelleri]]nin yalnızca gerçekten okuyabildikleri derslere yardımcı olabilmesidir.

## Onunla neler yapılabilir

Dersi herhangi bir metin düzenleyicide yazın ve biçimi destekleyen herhangi bir araca, kopyala-yapıştır ve yeniden biçimlendirme yapmadan aktarın. Etkileşimli parçalar — deneme sınırları ve cevap düzeyinde geri bildirim içeren çoktan seçmeli bilgi denetimleri — bir grafik arayüz yerine basit özellikler olarak ifade edilir. Kursun puanlı [[assessment]] bölümü, bir paket kök dizinindeki eşlikçi `ASSESSMENT.md` dosyasından oluşur. Proje ayrıca, biçimi Claude, Codex veya başka bir [[agentic-ai|ajan]]a öğreten bir `lesson-md` becerisi gönderiyor; böylece bir kursun sade dille tanımlanması dersleri, değerlendirmeleri ve eksiksiz bir paketi geri döndürüyor.

## Kimler için

İçeriğinin bir araç değişikliğinden sağ çıkmasını isteyen öğretim tasarımcıları ve kurs oluşturucuları, kullanıcılarının çoktan anladığı bir içe ve dışa aktarma biçimi isteyen eLearning satıcıları ve okunabilir bir biçim üzerine YZ destekli yazım kuran herkes. Katkıda bulunanlar arasında LXD Integral'den Dan Bashaw var ve biçimin v1.8'e kadar uzanan herkese açık bir değişiklik günlüğü bulunuyor.

## Bağlı kavramlar
[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[multimodal]], [[educational-technology-developers]]
