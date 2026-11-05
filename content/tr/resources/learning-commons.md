---
title: "Learning Commons"
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: resource
summary: "Mark Zuckerberg ve Priscilla Chan'ın eğitim girişiminden açık YZ altyapısı: standartlar, müfredatlar ve öğrenme bilimi verileri üzerine bir bilgi grafiği, LLM çıktısını değerlendirmeye yönelik değerlendiriciler ve öğretmen iş akışları için modelden bağımsız ajan becerileri."
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
source_updated: "2026-11-04T18:11:18-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Learning Commons**, Mark Zuckerberg ve Priscilla Chan'ın eğitim girişimidir; 2025'te Chan Zuckerberg Initiative'in öğrenme bilimi çalışmalarını eğitim teknolojisi ürünlerinin gerçekte üzerine inşa edildiği altyapıya taşımak için başlatıldı. Savı pedagojik değil altyapısaldır: araştırma var, akademik standartlar var ve yüksek kaliteli müfredatlar var, ama bunlar ayrı sistemlerde durur, dolayısıyla geliştiriciler erişmesi en kolay olanın üzerine inşa eder. Kuruluş GitHub'da üç açık araç yayımlar — bir Bilgi Grafiği, bir Değerlendirici kümesi ve [[agentic-ai|Agent Skills]] — ve müfredatları bir [[edtech-platform|öğrenme yönetim sistemine]] yüklemek için Curriculum Sync ekleyen bir platform işletir.

## Bu kaynakla neler yapılabilir

**Bilgi Grafiği**, akademik standartları, müfredatları ve öğrenme bilimi araştırmalarını tek bir ortak şema altında varlıklar ve ilişkiler olarak modeller; böylece bir araç, kendi veri hattını kurmadan üretilen içeriği bir standarda hizalayabilir. **Değerlendiriciler**, [[llm|LLM çıktısının]] niteliklerini öğrenme bilimi merceğinden ölçer — metin karmaşıklığı, [[feedback]], akademik standartlara hizalama ve dayanıklı beceriler — ve üretilen içeriği puanlamak ya da aday modelleri karşılaştırmak için npm ve PyPI'da yayımlanan Python ve TypeScript SDK'larıyla birlikte gelir. **Agent Skills**, yaygın öğretmen iş akışlarına yönelik talimatları, başvuru kaynaklarını ve koruma kurallarını açık ve modelden bağımsız bir biçimde paketler: anlamayı kontrol etme, katmanlı ders farklılaştırma, standartlarla hizalı ders planları ve derse hazırlık. Pratikte grafiği, diğer ikisini inandırıcı kılan şeydir: iddia içerik hizalamasıdır ve grafik, bunun karşısında denetlendiği referanstır.

## Kimler için

[[curriculum-design|müfredat]] ve değerlendirme ürünlerine YZ özellikleri katan geliştiriciler ve bu ürünlerin hizalandığı verileri sağlayan müfredat veya standart ekipleri. Eğitmenler ajan becerilerini kendi başlarına kullanabilir, ama deponun kendi çerçevelemesi, araç yayımlayanlar için altyapıdır.

## Notlar ve uyarılar

[[open-source|kaynağın]] açık olması verileri açık yapmaz. Bilgi Grafiği kodu MIT'dir; her veri kümesi ise kendi erişim etiketini taşır — Open, Open + Gated veya Gated — ve Gated içerik, deponun atıf yaptığı açık lisanslar kapsamında açıkça yer almaz, bu yüzden yeniden kullanım haklarını varsaymadan önce veri kümesi kataloğunu kontrol edin. Değerlendirici kodu MIT, istem içeriği CC BY 4.0'dır, ama kullandığı etiketlenmiş CLEAR ve PERSUADE 2.0 korpusları CC BY-NC-SA 4.0'dır. Platform ve arkasındaki veri kümeleri bir hesap gerektirir. 2026-11-04 itibarıyla okunduğu haliyle depo etkinliği: Bilgi Grafiği için 167 yıldız, Değerlendiriciler için 88, Agent Skills için 41. Girişim CZI tarafından finanse edilir ve sorunu çerçevelemesi fon sağlayanın kendisine aittir.

## Bağlı kavramlar

- [[curriculum-design]] — grafik, üretilen içeriği standartlara ve müfredatlara hizalamak için vardır
- [[open-source]] — MIT ve Apache-2.0 kodu, veri kümesi başına veri lisanslamasıyla
- [[educational-nlp]] — değerlendiriciler, LLM çıktısı üzerinde bir metin ölçüm katmanıdır
- [[agentic-ai]] — bir iş akışını modelin yürütmesi için paketleyen beceriler
- [[edtech-platform]] — Curriculum Sync, müfredatları bir öğrenme yönetim sistemine yükler
- [[llm]] — değerlendirmenin hedefi ve becerilerin tüketicisi
