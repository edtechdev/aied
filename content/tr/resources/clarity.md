---
title: "Clarity"
created: "2026-10-14T21:50:00-04:00"
type: resource
summary: "Daha net yazma için on sekiz kuralı metinler için taslak, yeniden yazma ve inceleme kipleri haline getiren açık kaynaklı bir Ajan Yeteneği ve özel tarayıcı düzenleyicisi."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
contributors: [editor]
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
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Clarity**, bir Ajan Yeteneğini bir tarayıcı düzenleyicisiyle eşleştirir; ikisi de “okuyanını hak eden” yazma üzerine kurulu on sekiz kuralın çevresinde kurulmuştur. Yetenek, `npx skills add addyosmani/clarity` komutuyla Claude Code ve Codex gibi kodlama ajanlarına kurulur ve ardından üç kipte çalışır: inceleme kipi bir taslağı eleştirir ve dosyaya dokunmaz, yeniden yazma kipi taslağı yerinde düzenler, söyleşi kipi ise önce yazara sorular sorar ve yanıtlardan birlikte yazar. Yazarın aldığı [[feedback|geri bildirim]], tarzdan önce öze yöneliktir. Kurallar yazının kimin için olduğunu ve onun halihazırda ne bildiğini sorar, konu yerine iddia ve soyutlama yerine ayrıntı ister ve gereksiz sözcükleri kelime dağarcığı sorunu değil, yazının ne için olduğunu bilmeme sorunu olarak ele alır.

Tarayıcı düzenleyicisi sayfanın içinde yerel olarak çalışır ve taslağı yüklemeyi bir yana bırakır. Makine yazımı metnin belirtilerini, okunabilirliği ve özdeki boşlukları bildirir; bu da onu, bir okuyucuya ulaşmadan önce bir [[generative-ai|üretken yapay zeka]] çıktısının ürettiği metni incelemek için kullanışlı kılar. Proje amacın, [[ai-literacy|YZ tespitini]] geçecek biçimde tasarlanmış metin değil, gözle görülür biçimde yazarın kendisine ait kalan yazı olduğunu açıkça belirtir; YZ destekli [[writing-education|yazma]] üzerine politika belirlerken eğitmenlerin tanıyacağı bir ayrımdır.

## Benimsemeden önce bilinmesi gerekenler

Depo bir değerlendirme protokolü, `samples/` içinde öncesi-sonrası örnekleri ve yeteneğin arkasındaki başvuru dosyalarını yayımlar; böylece bir inceleyici, kuralların nasıl davrandığını güven duyarak kabul etmek yerine inceleyebilir; buradaki sayfa hiçbir ölçülmüş sonucu yeniden ifade etmemektedir. Yazar Addy Osmani’dir, lisans MIT’tir ve çalışma herhangi bir kurumun ürünü değil, bağımsızdır. Genç ve aktiftir: Ağustos 2026’da oluşturulmuş, 54 commit, en yenisi Eylül’de 0.2.1 sürümü olan üç yayım ve Eylül 2026’da kontrol edildiğinde yaklaşık 250 yıldız vardır. Üç katkıcı değişiklik göndermiştir. Yetenek yönergeleri okuyucunun halihazırda çalıştırdığı bir ajana yüklenir, dolayısıyla olağan [[prompt-engineering|istek metni mühendisliği]] uyarıları geçerlidir: eleştirinin niteliği, kendisine verilen taslağa bağlıdır.

## Bağlı kavramlar
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
