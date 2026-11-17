---
title: "Canvas MCP"
created: "2026-11-16T07:29:00-05:00"
type: resource
summary: "Claude, Cursor, Codex ve diğer ajanların Canvas LMS içinde okumasını ve işlem yapmasını sağlayan açık kaynaklı bir MCP sunucusu — öğrenci, eğitimci ve öğretim tasarımcısı araçları; yazma işlemleri kapılı ve öğrenci verileri için isteğe bağlı anonimleştirme var."
url: https://github.com/vishalsachdev/canvas-mcp
source_code: https://github.com/vishalsachdev/canvas-mcp
author: "Vishal Sachdev"
author_url: https://github.com/vishalsachdev
resource_type: [developer tool, agent skill]
access: [free]
license: "MIT"
last_verified: "2026-11-16"
foundations: [agentic-ai]
technology: [llm]
audience: [instructors, instructional designers, administrators, learners]
level: [higher ed]
connected_resources: []
translation_of: resources/canvas-mcp
source_updated: "2026-11-16T07:29:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Canvas MCP**, Vishal Sachdev'in açık kaynaklı bir Model Context Protocol sunucusudur ve bir YZ istemcisini bir Canvas LMS örneğine bağlar: ajan bir öğrencinin yaklaşan işlerini listeleyebilir, bir dersin ödevlerini ve teslimlerini okuyabilir, bir sınıfa mesaj gönderebilir ya da bir dersi erişilebilirlik açısından denetleyebilir; hepsi de doğaçlama ekran kazıma yerine sunucunun sunduğu araçlar üzerinden.

## Bu kaynakla neler yapılabilir

Sunucu üç araç ailesiyle gelir. Öğrenci araçları Canvas'ın kendi `self` uç noktalarına karşı "bu hafta ne teslim edilecek", "her şeyi teslim ettim mi", "kaç sınav denemem kaldı" sorularını yanıtlar. Eğitimci araçları ödevleri listeler ve oluşturur, teslimleri okur, toplu notlandırma yapar, konuşmalar gönderir ve ödev analitiği çeker. Öğretim tasarımcısı araçları ders kalitesi kontrollerini ve WCAG erişilebilirlik taramalarını kapsar. Toplamda 128'e kadar araç kullanılabilir; ancak varsayılan profil daha azını kaydeder ve özellik kapılı araçlar sayıyı artırır. Araçların üzerine sekiz ajan becerisi çok adımlı tarifler paketler — haftalık bir plan, sabah ders sağlığı kontrolü, toplu notlandırma karar ağacı, bir akran değerlendirmesi hattı, dönem öncesi ders denetimi — ve `skills.sh` üzerinden 40'ın üzerinde ajana kurulabilir.

## Kimler için

Bir dersin çevresindeki rutin okuma ve mesajlaşmayı bir ajanın üstlenmesini isteyen öğretim elemanları ve LMS'e bağlı bir ajanın gerçekte nelere erişebildiğini değerlendiren [[institutional-ai-infrastructure|kurumsal ekipler]]. Öğretim tasarımcıları burada otomatik bir ders incelemesine en yakın şeyi bulur. Proje, genel bir sohbet robotu değil, tek bir kurumun LMS'i düzeyinde [[agentic-ai|ajan tabanlı araçlaştırmanın]] işlenmiş bir örneğidir.

## Notlar ve uyarılar

Kurulum yereldir: Python 3.11 ya da daha yenisi, bir Canvas API tokenı ve URL'si ile bir MCP istemcisi gerekir; Claude Desktop için çift tıklanabilir bir eklenti de var. Genel barındırılan sunucu kullanımdan kaldırıldı, bu yüzden paylaşılan bir kurulum, kurumun kendi kimlik doğrulamasının arkasında kendi barındırmayı gerektirir. Yazma araçları kapılıdır — yazma araçları açıkça izin verilmedikçe HTTP sunucuları salt okunurdur, silme işlemleri onay tokenı gerektirir ve kod yürütme kapalı yönde başarısız olan bir korumalı alanda çalışır. Gizlilik kontrolleri isteğe bağlıdır: yanıt anonimleştirme, e-posta maskeleme ve PII filtreleme etkinleştirilmelidir ve README bunların FERPA yükümlülüklerini destekleyebileceğini ama uyumluluğu tesis etmediğini özenle belirtir; bu, kuruluma ve YZ sağlayıcısına bağlıdır. Sunucuda telemetri yoktur, ancak Canvas ve seçilen istemci kendi günlüklerini tutar. Proje MIT lisanslıdır, etkin olarak geliştirilmektedir ve güncel araç adları ile yapılandırma konusunda yetkili kaynak projenin kendi kılavuzlarıdır.

## Bağlı kavramlar

- [[agentic-ai]]
- [[institutional-ai-infrastructure]]
