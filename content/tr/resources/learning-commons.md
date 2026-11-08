---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-08T04:49:27-05:00"
type: resource
summary: "Eğitim ürünleri için açık YZ altyapısı: standartlar ve müfredatlar üzerine bir bilgi grafiği, LLM çıktısını puanlamaya yönelik değerlendiriciler, öğretmen iş akışları için modelden bağımsız ajan becerileri ve müfredatları bir öğrenme yönetim sistemine yükleyen Curriculum Sync."
url: https://learningcommons.org/
source_code: https://github.com/learning-commons-org
author: "Learning Commons"
author_url: https://learningcommons.org/about-us/
resource_type: [collection of tools, dataset or benchmark]
access: [free with account]
license: "Code MIT (Knowledge Graph, Evaluators) and Apache-2.0 (Agent Skills); educational datasets licensed per publisher and per dataset"
last_verified: "2026-11-04"
foundations: [curriculum-design]
technology: [open-source]
audience: [software developers, educational technology developers, curriculum designers]
level: [k 12]
confidence: high
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
translation_of: resources/learning-commons
source_updated: "2026-11-05T02:05:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Learning Commons**, gerçek müfredat içeriğinin üzerine YZ özellikleri kurmak için üç açık araç yayımlar — akademik standartlar, müfredatlar ve öğrenme bilimi araştırmalarından oluşan bir **[[knowledge-graph|Bilgi Grafiği]]**, üretilen metinleri yargılamak için bir **Değerlendiriciler** kitaplığı ve yaygın öğretmen iş akışları için modelden bağımsız **[[agentic-ai|Agent Skills]]** — ve müfredatları bir [[edtech-platform|öğrenme yönetim sistemine]] yüklemek için Curriculum Sync ekleyen bir platform işletir.

## Bu kaynakla neler yapılabilir

**Üretilen içeriği bir standarda hizalayın.** Bilgi Grafiği, standartları, [[curriculum-design|müfredatları]] ve araştırmayı tek bir ortak şema altında varlıklar ve ilişkiler olarak modeller. Bir ürün, bir öğenin hedeflemesi gereken standardı arayabilir, önkoşul ilişkilerinde gezinebilir veya bir öğretmen yardımcısının içeriğini öğretmesi gereken müfredata dayandırabilir; bunun için kendi veri hattını kurup sürdürmesi gerekmez.

**Üretilen çıktıyı öğrenciler görmeden puanlayın.** **Değerlendiriciler**, [[llm|LLM çıktısının]] niteliklerini ölçer — metin karmaşıklığı, [[feedback]], standartlara hizalama ve dayanıklı beceriler — ve npm ile PyPI'da Python ve TypeScript SDK'ları olarak yayımlanır. Pratikte bir istem ya da model değiştiğinde regresyon kontrolü, aday modeller arasında karşılaştırma ya da üretilen öğeler ve açıklamalar üzerinde filtre olarak çalışırlar.

**Bir öğretmen iş akışını paketleyin.** **Agent Skills**, talimatları, başvuru kaynaklarını ve koruma kurallarını açık ve modelden bağımsız bir biçimde paketler: anlamayı kontrol etme, katmanlı ders farklılaştırma, standartlarla hizalı ders planı ve derse hazırlık. Bir ajan çerçevesine bırakılabilir ya da güvenilir bir sınıf iş akışının ne kadar yapıya ihtiyaç duyduğuna dair işlenmiş şablonlar olarak okunabilir.

**Bir müfredatı öğrenme yönetim sistemine taşıyın.** Curriculum Sync, bir standartlar haritasını bir dersin LMS'te gerçekten kullanabileceği bir şeye dönüştüren platform adımıdır.

## Kimler için

Müfredat ve [[assessment|değerlendirme]] ürünlerine YZ özellikleri katan geliştiriciler ve bu ürünlerin hizalandığı verileri sağlayan müfredat veya standart ekipleri. [[teacher-role|Eğitmenler]] ajan becerilerini kendi başlarına kullanabilir, ama deponun kendi çerçevelemesi, araç yayımlayanlar için altyapıdır.

## Notlar ve uyarılar

[[open-source|kaynağın]] açık olması verileri açık yapmaz. Bilgi Grafiği ve Değerlendirici kodu MIT, Agent Skills Apache-2.0'dır; her veri kümesi kendi erişim etiketini taşır — Open, Open + Gated veya Gated — ve Gated içerik, deponun atıf yaptığı açık lisanslar kapsamında açıkça yer almaz, bu yüzden yeniden kullanım haklarını varsaymadan önce veri kümesi kataloğunu kontrol edin. Değerlendirici istem içeriği CC BY 4.0'dır, ama kullandığı etiketlenmiş CLEAR ve PERSUADE 2.0 korpusları CC BY-NC-SA 4.0'dır. Platform ve arkasındaki veri kümeleri bir hesap gerektirir.

## Bağlı kavramlar

- [[curriculum-design]] — grafik, üretilen içeriği standartlara ve müfredatlara hizalamak için vardır
- [[open-source]] — MIT ve Apache-2.0 kodu, veri kümesi başına veri lisanslamasıyla
- [[educational-nlp]] — değerlendiriciler, LLM çıktısı üzerinde bir metin ölçüm katmanıdır
- [[agentic-ai]] — bir iş akışını modelin yürütmesi için paketleyen beceriler
- [[edtech-platform]] — Curriculum Sync, müfredatları bir öğrenme yönetim sistemine yükler
- [[llm]] — değerlendirmenin hedefi ve becerilerin tüketicisi
