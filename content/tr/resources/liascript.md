---
title: "LiaScript"
created: "2026-09-23T20:15:00-04:00"
type: resource
summary: "Düz bir metin dosyasını tarayıcıda kısa sınavlar ve çalıştırılabilir kod içeren etkileşimli bir kursa dönüştüren açık bir Markdown lehçesi, ayrıca onunla kurs oluşturmaya yarayan çok ajanlı bir asistan."
url: https://liascript.github.io/
source_code: https://github.com/LiaScript/LiaScript
author: "André Dietrich and contributors"
resource_type: [open format or specification, software, collection of tools]
access: [free]
license: "BSD-3-Clause"
last_verified: "2026-09-24"
foundations: [learning-design]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source]
audience: [instructors, learners, software developers]
level: [higher ed, k 12]
confidence: high
connected_resources: [lesson-md]
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
reviewed_by: [editor]
translation_of: resources/liascript
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**LiaScript**, genişletilmiş bir Markdown lehçesi ve onun için bir yorumlayıcıdır. Tek bir düz metin dosyası etkileşimli bir kursa dönüşür: aynı belge bir anlatı olarak okunabilir, slaytlar olarak oynatılabilir veya bir kurs olarak adım adım işlenebilir — hepsi tarayıcıda. Bir tane yazmak veya okumak için hiçbir şeyin kurulması gerekmez.

## Onunla neler yapılabilir

Kısa sınavlar, çoktan seçmeli, matris soruları, metin girişi, açılır listeler ve boşluk doldurma metinleri dahil olmak üzere bir öğretmenin beklediği biçimlerde gelir ve doğrudan Markdown'ta yazılır. Kod blokları, [[cs-education|programlama]] eğitimleri için düzenlenebilir ve çalıştırılabilir hale getirilebilir; bir makro sistemi JavaScript kitaplıklarını yeniden kullanılabilir bloklara sarar, böylece etkileşimli diyagramlar her yazardan kod gerektirmez. Kurs, yazarın metni çoktan bulundurduğu her yerde barındırılır, kilitlenilecek bir hizmet yoktur ve her şey istemci tarafında çalışır; böylece yüklenmiş bir kurs çevrimdışı da işler. LiaScript Exporter, bir kursu Moodle, ILIAS ve diğer [[edtech-platform|öğrenme yönetim sistemleri]] için SCORM olarak paketler.

## Kurs oluşturmaya yarayan öğretim ajanı

Proje ayrıca LiaScript kursları yazmak için, Boost Software License 1.0 altında lisanslı bir **[öğretim ajanı](https://github.com/LiaScript/teaching-agent)** yayınlıyor. Öğretme, görsel tasarım, öğrenen gözden geçirme ve yayınlama için dört ajan, kurs durumunu tutan tek bir proje dosyası etrafında çalışır; önce tanım iş akışıyla: hedefler, kitle ve didaktik, herhangi bir materyal yazılmadan önce belirlenir ve ardından doğrulama kapıları gelir. Bir taslak, [[cognitive-offloading|bilişsel yük]] ve varsayılan ön bilgiyi denetlemek için adlandırılmış bir öğrenen personasından gözden geçirilebilir. Ajan düzenleyiciden bağımsızdır: tek bir şartnameden Claude Code, Copilot, Codex, Cursor veya bir web sohbeti için yapılandırmalar üretir ve depo, AB NIS2 Direktifi üzerine altı birimlik bir kurs ile bunun nasıl üretildiğini anlatan bir belge tutarak işlenmiş bir örnek olarak da işlev görür.

## Notlar ve uyarılar

LiaScript ücretsizdir, ücretli katman ve hesap zorunluluğu yoktur ve BSD-3-Clause altında açık geliştirilir; böylece kurumlar kendi sunucularında barındırabilir ve değiştirebilir. Live Classroom özelliği, gerçek zamanlı eşzamanlamanın tamamen yerel görselleştirme yerine paylaşılan bir hizmet kullandığından, geniş ölçekte güvenmeden önce bir bakışa değer. Öğretim ajanı genç ve az benimsenmiştir; desteklenen bir ürün yerine çalışan bir prototip olarak ele alın.

## Bağlı kavramlar

[[learning-design]], [[open-source]], [[online-teaching-and-learning]], [[active-learning]], [[cs-education]], [[edtech-platform]]

