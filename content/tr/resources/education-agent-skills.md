---
title: "Education Agent Skills"
created: "2026-10-14T22:30:00-04:00"
type: resource
summary: "Pedagoji, öğrenme bilimi, müfredat ve değerlendirmeyi kapsayan, kanıta dayalı 165 ajan becerisinden oluşan bir kütüphane; Claude, Codex ve Hermes için paketlenmiştir."
url: https://github.com/GarethManning/education-agent-skills
author: "Gareth Manning"
author_url: https://www.garethmanning.com/
resource_type: [agent skill, collection of tools]
access: [free]
license: "CC BY-SA 4.0"
last_verified: "2026-09-23"
foundations: [learning-design, ai-literacy]
pedagogy: [active-learning, online-teaching-and-learning]
technology: [open-source]
audience: [instructors, administrators, instructional designers]
level: [k 12, higher ed]
confidence: high
connected_resources: [claw-ed]
contributors: [editor]
translation_of: resources/education-agent-skills
source_updated: "2026-09-23T21:05:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-23"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
reviewed_by: [editor]
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Education Agent Skills**, öğretmenler, okul liderleri ve eğitim araçları geliştiren kişiler için 165 ajan becerisinden oluşan bir kütüphanedir. Beceriler; pedagoji, öğrenme bilimi, [[curriculum-design|müfredat]], değerlendirme ve yeniden üretimi kapsayan yirmi alanda gruplanmıştır ve her biri bir belge olarak okunmak yerine bir [[agentic-ai|ajan]] tarafından yüklenebilecek biçimde yazılmıştır.

## Neler yapılabilir

Beceriler Claude Code, Codex ve Hermes’e bir eklenti olarak ya da klasörlerin kopyalanmasıyla kurulur; böylece aynı kütüphane çeşitli ajan arayüzlerinde çalışır. Barındırılan bir MCP sunucusu, becerileri yerel olarak kuramayan ajanlar için koleksiyonu araç olarak sunar ve depo hem bir kayıt defteri (registry) hem de önceden derlenmiş bir paket (bundle) içerir; böylece sunucu dağıtım anında tek tek dosyaları okumadan koleksiyona hizmet edebilir.

Projenin ayırt edici iddiası kanıta dayanmasıdır: beceriler üzerinde durdukları kanıta atıfta bulunur ve deponun kendi geçmişi, bu disiplinin iddia edilmekten çok dayatılarak uygulandığını gösterir; aralarında, desteklenmeyen bir atfı kaldıran ve alıntılanan bir çalışmadaki test edilmiş bir korumanın açıklamasını düzelten birleştirilmiş bir düzeltme de vardır.

## Notlar ve uyarılar

Eğitim becerileri, belgeleri ve müfredat materyalleri CC BY-SA 4.0 ile lisanslıdır; dolayısıyla yeniden kullanım ve uyarlama açıktır, türev çalışmalar ise aynı lisansı taşımalıdır. Dağıtım yapacaksanız iki işletim ayrıntısı önemlidir. Barındırılan MCP uç noktası herkese açık değil, jeton (token) gerektirir; ve sunucu SKILL.md dosyaları yerine kaydedilmiş bir anlık görüntü sunduğundan, paketi yeniden derleyip kaydetmeden eklediğiniz bir beceri, yeniden dağıtımdan sonra bile canlı sunucuda görünmez. Kütüphane, eğitimci ve müfredat tasarımcısı Gareth Manning tarafından geliştirilmiştir ve lisans koşulları özellikle eğitim içeriği için geçerlidir.

## Bağlı kavramlar

[[learning-design]], [[ai-literacy]], [[active-learning]], [[online-teaching-and-learning]], [[open-source]]
