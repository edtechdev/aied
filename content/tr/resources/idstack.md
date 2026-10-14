---
title: "idstack"
created: "2026-10-14T22:35:00-04:00"
type: resource
summary: "Bir kursu öğretim tasarımı kanıt tabanına göre denetleyen, her öneriyi kanıt katmanıyla etiketleyen on bir Claude Code becerisinden oluşan açık kaynak bir küme."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
contributors: [editor]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
reviewed_by: [editor]
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**idstack**, kanıta dayalı [[learning-design|öğretim tasarımı]] için on bir beceriden oluşan açık kaynak bir koleksiyondur; bir yan panel Chrome eklentisi eşlik eden bir Claude Code eklentisi olarak dağıtılır. Beceriler bir kurs taslaklamak yerine onu denetler: hedefleri gözden geçirilmiş Bloom taksonomisine göre sınıflandırır, hedefler, etkinlikler ve değerlendirmeler arasındaki yapıcı hizalamayı kontrol eder, bilişsel yük sorunlarını işaretler ve erişilebilirliği WCAG 2.1 AA ile Universal Design for Learning’e göre inceler. Her öneri bir kanıt katmanı taşır; meta-analizler ve randomize denemeler için T1’den uzman görüşü için T5’e kadar. Proje, atıflarının on bir araştırma alanındaki 108 hakemli çalışmaya dayandığını belirtir; bu sayı projenin kendi iddiasıdır ve kaynakçası bir gözden geçirenin kontrol edebilmesi için Markdown olarak yayımlanmıştır.

Kurslar bir Canvas API bağlantısı, bir IMS Common Cartridge dosyası, bir SCORM paketi, bir yazım aracından PDF dışa aktarımı veya yapıştırılmış belgelerle girer. Paylaşılan bir proje bildirimi kursu oturumlar arasında hatırlar ve bir işlem hattı becerisi, tamamlanmış işi atlayarak tasarım aşamalarını zincirler. İncelemeler sekiz Quality Matters standardına ve Community of Inquiry çerçevesine karşı rapor verir; öğretim, sosyal ve bilişsel varlık bulunuşunu ayırır ve ardından önerileri önem derecesine göre sıralar.

## Benimsemeden önce bilinmesi gerekenler

Eklenti kurulum için Claude Code ve bir bash kabuğu gerektirir; PowerShell ve cmd kurulum betiğini çalıştıramaz ve puan eğilimleri için Python 3 önerilir. Kurs verisi okuyucunun kendi makinesindeki proje klasöründe kalır ve yalnızca kullanıcının çağırdığı bir entegrasyonla — örneğin bir Canvas API çağrısıyla — dışarı çıkar. Chrome eklentisinin canlı çıkarımı okuyucunun kendi ücretsiz Google AI Studio API anahtarını gerektirir; ancak bir simülasyon modu bunu anahtar olmadan gösterir. Proje kendini 3.5.1.0 sürümünde beta olarak etiketler ve küçük sürümler arasında kırıcı değişiklikler konusunda uyarır; ayrıca adlı bir yazar yerine savvides GitHub hesabı altında yayımlanır.

## Bağlı kavramlar

[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
