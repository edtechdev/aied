---
title: "Claw-ED"
created: "2026-10-14T21:55:00-04:00"
type: resource
summary: "Kendi müfredatınızı düzenlenebilir ders taslaklarına, öğrenci materyallerine ve slaytlara dönüştüren, sizin seçtiğiniz modeli kullanan yerel öncelikli bir YZ öğretim asistanı."
url: https://sirhanmacx.github.io/Claw-ED
source_code: https://github.com/SirhanMacx/Claw-ED
author: "SirhanMacx (MacxLabs)"
author_url: https://macxlabs.app/
resource_type: [software, collection of tools]
access: [free]
license: "MIT (original code; third-party components keep their own terms)"
last_verified: "2026-09-23"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning]
technology: [open-source]
audience: [instructors]
level: [k 12]
confidence: high
connected_resources: [education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: resources/claw-ed
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Claw-ED**, kendi müfredat materyallerinizden ders taslakları hazırlayan yerel öncelikli bir öğretim asistanıdır. Bir öğretmen kaynaklarını içe aktarır, bir ders ister ve öğrenciye yönelik materyallerle slaytlara ek olarak düzenlenebilir taslaklar alır; bunlar tek bir sabit satıcının modeliyle değil, öğretmenin seçtiği modelle üretilir.

## Bu kaynakla neler yapılabilir

İş akışı içe aktarmadan taslağa, incelemeye ve dışa aktarmaya uzanır ve taslaklar bitmiş dağıtım materyalleri değil, bir öğretmenin düzenlediği başlangıç noktaları olarak ele alınır. Ders işleri kuyruğa alınır ve sürdürülebilir, böylece başarısız olan uzun bir üretim işi baştan başlatılmak yerine kaldığı yerden devam ettirilebilir ve üretilen çıktılar indirilebilir. Araçlarını ayrıca bir MCP sunucusu aracılığıyla bir [[agentic-ai|ajan]]a da açar ve Google Drive’a bağlanabilir, böylece bir okul bunu var olan depolama ve programlamasına bağlayabilir.

Proje bilerek modele bağımsızdır. Yerel Ollama modellerini, bütçeli OpenRouter yollarını ve barındırılan seçenekleri yan yana belgeler ve model kılavuzu tarihlidir; bu da önerilerin kalite konusunda öğretmen puanlı yargılar değil, katalog temelli başlangıç noktaları olduğunu açıkça ortaya koyar.

## Notlar ve uyarılar

Yazılım özgürdür ve özgün kodu için MIT lisansı altında [[open-source|açık kaynaklıdır]], ancak üçüncü taraf bileşenler kendi koşullarını korur ve barındırılan bir model kullanılıyorsa yazılımı çalıştırmak kendi model çıkarımınız için ödeme yapmak anlamına gelir. Proje kendisini öğretmen tarafından incelenmiş bir beta olarak tanımlar ve README’sinde CI’sini geçirmenin canlı modellerde öğretme niteliğini doğrulamadığını açıkça söyler; bu, bu alanda yeşil bir test paketini doğru okumanın yoludur: yazılımı doğrular, [[pedagogy]] değil. MacxLabs tarafından sürdürülür ve öğretmen tarafından incelenmiş örnek dersleri katkı olarak kabul eder.

## Bağlı kavramlar
[[learning-design]], [[online-teaching-and-learning]], [[open-source]], [[teacher-ai-competency]]
