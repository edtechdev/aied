---
title: "Vibe-Coding Center"
created: "2026-11-13T08:43:40-05:00"
type: resource
summary: "Bir eğitimcinin, bir YZ kodlama asistanıyla statik bir eğitim sitesi kurması için saha kılavuzu: tasarım, güvenlik ve öğrenci gizliliği için üç Markdown yönerge dosyası, okunabilir kılavuzlar ve indirilebilir bir paket."
url: https://mguhlin.github.io/vcc/
source_code: https://github.com/mguhlin/vcc
author: "Miguel Guhlin"
resource_type: [ebook or guide, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-13"
foundations: [ai-literacy, learning-design, design-thinking]
technology: [generative-ai, open-source, vibe-coding]
ethics: [accessibility, privacy]
audience: [instructors, instructional designers, faculty developers]
level: [k 12, higher ed]
connected_resources: [vibes-diy, fpds-apps-and-resources]
translation_of: resources/vibe-coding-center
source_updated: "2026-11-13T12:45:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-16"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**The Vibe-Coding Center**, Miguel Guhlin'in ücretsiz saha kılavuzudur: bir öğretmenin bir YZ kodlama asistanıyla küçük, statik bir eğitim sitesini — bir çıkış bileti, bir sınav, bir sınıf portfolyosu — [[vibe-coding|vibe coding]] ile üretmesi ve bunu yaparken açıkta bir API anahtarı ya da öğrenci verisi yayımlamaması için.

## Bu kaynakla neler yapılabilir

Rehberliği üç yönerge dosyası taşır: `WEB_DESIGN.md`, `EDU_COMPLIANCE.md` ve `securevcc.md`. Bunları bir proje kök dizinine indirin, proje özeti şablonunu doldurun, sonra asistandan üçünü de okuyup uygulamasını isteyin; kılavuz, dosyaların orada bulunmasının etkinleşme demek olmadığını açıkça söyler, bu yüzden dosyaların istekte adlarıyla belirtilmesi gerekir. Okunabilir kılavuzlar her birini açıklar; bunlardan biri "Paylaşmadan Önce Üç Temel Kontrol" turudur: daha az öğrenci verisi topla, açıkta kalan bir API anahtarını denetle ve bir aracın tasarımını öğrenme görevine uyarla. Tam paket sitenin kendisini, istem paketini, yayın öncesi incelemeyi ve yeniden derleme betiklerini ekler; indirme için bir SHA-256 bildirimi de vardır.

Eşlik eden [EduSynth Hub örnekleri](https://mguhlin.github.io/funquiz/examples.html) sayfası sonuçları ekran görüntüleri olarak değil çalışan statik araçlar olarak gösterir: seçilen bir SOLO Taksonomisi düzeyinde soru yazan bir çıkış bileti üreticisi, GitHub Pages üzerinde tek bir HTML dosyası olan bir öğrenci portfolyosu ve aranabilir bir mesleki gelişim kaynak kütüphanesi; hepsi istemci tarafında, LMS girişi olmadan çalışır.

## Kimler için

İstedikleri aracı tarif edebilen ve asistanın ürettiğini denetlemeye istekli K-12 ve yükseköğretim öğretmenleri ile [[learning-design|öğretim tasarımcıları]]. Herkes öğrenciye dönük bir araç yayımlamadan önce tek bir ortak kontrol listesi isteyen bir bölüme de uyar; [[ai-literacy|YZ okuryazarlığını]] eleştiri yoluyla değil inşa ederek öğreten öğretim elemanlarına da.

## Notlar ve uyarılar

Merkez bir uyumluluk ürünü değil bir rehberliktir: site kendi WCAG 2.2 AA hedefi için bir uygunluk iddiasında bulunmaz, "bu dosyaları kullanmak sitemi uyumlu yapar mı?" sorusuna hayır diye yanıt verir ve bir mühendislik incelemesinin okul yetkilendirmesinin ya da hukuki incelemenin yerini tutmadığını söyler. Güvenlik rafı axe-core, Gitleaks, ZAP ve Playwright'ı işaret eder; bunlar paketlenmiş yazılım değil referanslardır ve müdahaleci olanlar tek kullanımlık ya da açıkça yetkilendirilmiş bir hedef için düşünülmüştür. Okumak için hesap gerekmez. HTML sayfalarını yeniden derlemek Python ve `markdown-it-py` gerektirir; bu bir derleme bağımlılığıdır, ziyaretçi bağımlılığı değil. Depo MIT lisanslıdır, üçüncü taraf görselleri ve bağlantılı projeler ise kendi koşullarını korur; bunlar `CREDITS.md` içinde belgelenmiştir.

## Bağlı kavramlar

[[vibe-coding]], [[ai-literacy]], [[accessibility]], [[learning-design]], [[design-thinking]], [[generative-ai]], [[privacy]]
