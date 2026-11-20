---
title: "GradeBench"
created: "2026-11-17T06:39:43-05:00"
updated: "2026-11-17T13:05:00-05:00"
type: resource
summary: "Öncü modellerin, gerçek el yazısı üniversite STEM yanıtlarını öğretim elemanının seçtiği rubrik maddelerine göre puanladığı herkese açık bir liderlik tablosu."
url: https://gradebench.com/
author: "Yoonseok Yang, Hayoung Lim, Minjune Kim (Pensive)"
resource_type: [dataset or benchmark]
access: [free]
last_verified: "2026-11-17"
assessment: [automated-assessment]
technology: [generative-ai]
audience: [instructors, assessment professionals, researchers]
level: [higher ed]
translation_of: resources/gradebench
source_updated: "2026-11-17T13:05:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

GradeBench, [[automated-assessment|otomatik değerlendirme]] hakkında dar ama yararlı bir soru sorar: bir öğrencinin el yazısı yanıtı, öğretim elemanının rubriği, bir referans çözüm ve öğretim elemanının fiilen seçtiği rubrik maddeleri verildiğinde, öncü bir model aynı maddeleri seçer mi? Altın etiketler, sınavlardan ve kısa sınavlardan gerçek öğretim elemanı ve asistan (TA) rubrik seçimleridir; yeniden puanlanmış model çıktıları değildir.

## Bu kaynakla neler yapılabilir

Herhangi bir puanlama satıcısının doğruluk iddiasına güvenmeden önce liderlik tablosunu okuyun ve liderlik tablosuna güvenmeden önce görev yapısını okuyun. [[benchmark]], ondan fazla kurumda 45 [[higher-ed|üniversite]] dersine yayılmış 125 sorudan alınan 464 görevi içerir; bir profesörün veya asistanın satır satır incelediği serbest yanıtlı sınav ve kısa sınav maddeleriyle sınırlıdır ve kısmi puana ağırlık verir — tam puan ve sıfır puan görevlerinin her biri %5 ile sınırlandırılmıştır, çünkü modeller bunları kolay bulur.

Mevcut liderlik tablosu, insan uyumunun çok altında bir üst sınıra ulaşır: en iyi model %57.3 tam rubrik eşleşmesine ulaşır ve site, doğruluğu 1,000 yanıt başına maliyete karşı çizer; burada 0.8 puan geride olan bir model yaklaşık yedide biri kadar maliyetlidir. Bu maliyet ekseni, pratikte yararlı olan kısımdır, çünkü puanlama bir hacim işidir.

Bağımsız olarak geliştirilmiş ikinci bir araç için, Learning Design Alliance'ın [AI Grading Benchmark](https://github.com/Learning-Design-Alliance/ai-grading-benchmark) çalışmasına bakın; bu, barındırılan bir liderlik tablosu yerine açık bir depo olarak paketlenmiştir ve [[porcaro-ai-grading-benchmark-2026|Porcaro'nun çalışması]] içinde özetlenmiştir.

## Kimler için

Bir puanlama aracının notları gözden geçirilmeden yayımlamasına izin verip vermeyeceğine karar veren öğretim elemanları, satın alma gereksinimleri yazan değerlendirme uzmanları ve bir kompozisyon puanlama korelasyonu yerine rubrik düzeyinde bir hedefe ihtiyaç duyan araştırmacılar.

## Notlar ve uyarılar

GradeBench, ticari bir AI puanlama platformu olan Pensive tarafından yayımlanır; dolayısıyla benchmark ile ürün aynı sahibe aittir. Görev yapısı belgelenmiştir ve savunulabilir, ancak çerçevelemeyi satıcınınki olarak kabul edin. En az dört maddeli rubriklere sahip STEM sınavlarını kapsar; bu da kompozisyonları, kısa yanıtları ve tartışma gönderilerini dışarıda bırakır — [[humanities-education|beşeri bilimler]] puanlamasının çoğunun gerçekleştiği biçimleri. Tam rubrik eşleşmesi katı bir metriktir: iki puanlayıcı bir maddede anlaşmazlığa düşebilir ve öğrenci hakkında ikisi de haklı olabilir. Puanlar, Kasım 2026'da mevcut olan model sürümlerini tanımlar ve değişecektir.

## Bağlı kavramlar

- [[automated-assessment]] — benchmark'ın ölçtüğü uygulama
- [[assessment-validity]] — bir liderlik tablosu puanının vekil göstergesi olduğu ölçüt
- [[benchmark]] — bu aracın ait olduğu daha geniş araç sınıfı