---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Bir programlama dersinde her öğrenci için sözlü kod savunmasının yazılı ve süreli bir sürümünü çalıştıran ücretsiz bir tarayıcı aracı; puanları alıntılanmış kanıtlarla birlikte önerir, onay eğitmene kalır."
url: https://code-viva.netlify.app/
author: "Code Viva"
author_url: https://code-viva.netlify.app/
resource_type: [software]
access: [free]
last_verified: "2026-10-24"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
updated: "2026-10-31T11:14:02-04:00"
translation_of: resources/code-viva
source_updated: "2026-10-24T08:37:08-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-31"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Code Viva**, bir programlama dersindeki her öğrenci için [[oral-assessment|sözlü sınavın]] yazılı ve süreli bir sürümünü, her biri yaklaşık on beş ila yirmi dakika sürecek biçimde ve sınıfta bir eğitmen olmadan yürütür. Öğrencinin teslim ettiği kodu ve commit geçmişini okur, o öğrencinin kendi fonksiyonları, adları ve commit'leri hakkında dört ila altı soru yazar ve her öğrenciye yanıtlayacağı kişisel bir bağlantı verir.

## Neler yapılabilir

Teslimler bir Gradescope dışa aktarımından, bir Canvas indirme zip dosyasından, her öğrenciye bir klasör içeren bir zip dosyasından veya okuma belirteciyle GitHub Classroom'dan gelir. Eğitmen oturum süresini, soru sayısını ve son tarihi belirler, ek süreyi 1,25x ila 3x olarak işaretler ve bağlantıları göndermeden önce üretilen soruları okur, düzenler ya da değiştirir. Sorular özyinelemenin temel durumlarını, sınır korumalarını, veri yapısı seçimlerini, opak değişken adlarını, ölçek ve izleme, ödev tanımındaki cümleleri ve tek bir toplu ya da gece geç saatte atılmış commit gibi commit kalıplarını kapsar. Yanıtlar bir yanıt kodu olarak döner; inceleme ekranı her dökümü, dayandığı cümlelerle birlikte önerilen 0 ila 3 arası bir puanın yanında gösterir ve bir konuşmanın ne kadar gerekli olduğuna göre sıralanmış bir işaretleme kuyruğu sunar. Sonuçlar CSV'ye aktarılır ve on bir demo kurs, okurun bütün döngüyü uydurma veriler üzerinde denemesini sağlar.

## Kimler için

Bir öğrencinin kendi kodunu açıklayabildiğine dair kanıt isteyen ve bütün öğrencilerle değil kısa bir listeyle konuşmayı tercih eden programlama dersi eğitmenleri; commit soruları bunu bir [[process-oriented-assessment]] biçimi haline getirir.

## Notlar ve uyarılar

Her şey tarayıcıda çalışır: kurs, JSON dışa aktarımı olan yerel depolamada durur; sorular bir bağlantının tarayıcıların sunuculara göndermediği bölümünde taşınır ve yanıtlar yalnızca öğrencilerin göndermeyi seçtiği kodlar olarak döner, böylece hiçbir öğrenci verisi üçüncü bir tarafa ulaşmaz. Soru üreticisi model güdümlü değil, kural tabanlıdır. Aracın kendi ifadesine göre kod okuyucusu sezgiseldir, bu nedenle olağandışı biçimlendirme ya da makrolar bir fonksiyonu gizleyebilir ve bir puan, kodu anlamak yerine sözcük dağarcığını bilmeyi ödüllendirebilir; bu yüzden puanlar eğitmenin onayladığı önerilerdir ve araç riskin düşük tutulmasını önerir. Hiçbir lisans ve hiçbir kaynak deposu yayımlanmamıştır; bağlantılar soruları taşıdığı için birkaç kilobayta ulaşırlar, bu da bir öğrenme yönetimi sistemindeki mesaj kutusunda satır atlayacak kadar uzundur.

## Bağlı kavramlar

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
