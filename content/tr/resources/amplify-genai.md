---
title: "Amplify GenAI"
created: "2026-11-12T19:20:00-05:00"
updated: "2026-11-12T19:20:00-05:00"
type: resource
summary: "Vanderbilt'in MIT lisanslı kurumsal üretici YZ platformu; bir kurumun kendi AWS hesabında kurulur: yerel belgeler üzerinde özel asistanlar, getirmeyle güçlendirilmiş yanıtlar, kuruluş genelinde paylaşım ve tek tek mesajlara kadar maliyet muhasebesi."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Amplify GenAI, ticari bir asistana kampüs çapında lisans vermenin tam tersi bir bahistir: kurum platformu kendisi, kendi Amazon Web Services hesabının içinde çalıştırır ve kullandığı kadarını öder. Vanderbilt onu kendi topluluğu için kurdu, üç depoda MIT lisansıyla yayımladı ve şimdi diğer kuruluşlara kişi başı kurumsal sözleşmelere bir alternatif olarak sunuyor — sav şu: pahalı kısım koltuk sayısı değil, modeller olmalı.

## Bu kaynakla neler yapılabilir

Kullanıcılar belge yükleyerek ya da veri kaynakları bağlayarak özel asistanlar kurar ve asistanlar yalnızca genel eğitimden değil, o malzeme üzerinde [[rag|getirmeyle güçlendirilmiş üretim]] ile yanıt verir. Asistanlar kuruluş genelinde paylaşılabilir, tek bir konuşmada zincirlenebilir ve istem şablonlarıyla donatılabilir; platform ayrıca PowerPoint ve Word dosyaları, diyagramlar ve görselleştirmeler üretir. Yöneticiler paylaşılan bir hizmetin ihtiyaç duyduğu şeyleri alır: mesaj düzeyine kadar maliyet muhasebesi, kullanıcı başına sınırlar, klasörler ve çalışma alanları ve SSO; hepsi kurumun denetlediği bir kurulumda.

Bir [[higher-ed|kolej]] için en çok önem taşıyan tasarım kararı muhasebe modelidir. Vanderbilt, 1.300 pilot kullanıcıyla kullanıcı başına maliyetinin AWS dahil ayda yaklaşık \$3 olduğunu ve bu kullanıcıların yarısının tokenlarda ayda \$1'den az tükettiğini bildiriyor — üniversitenin denetlenmiş bir kıyaslama değil, vaka çalışması olarak sunduğu rakamlar. Kullanım bazlı faturalama, kullanıcıların bir azınlığının işin çoğunu yaptığı bir kampüsü ödüllendirir; bu, YZ benimsemesinin olağan biçimidir ve finans ofisinin sorusunu ("bunun öğrenci başına maliyeti nedir?") sözleşmeden değil günlüklerden yanıtlanabilir kılar.

## Kimler için

AWS'te hâlihazırda iş yükü çalıştıran ve ticari bir kurumsal asistana topluluk tarafından desteklenen bir alternatif isteyen merkezi BT ve CIO ofisleri; ders malzemesine dayanan ama onu bir satıcının tüketici ürününe göndermeyen asistanlara ihtiyaç duyan öğretim üyeleri; ve insanların modellerle ne yaptığını görebilecekleri tek bir yer isteyen kurumlar. Kurumun kendi hesabına kurulduğu için veri ikametgâhı sorusu bir satıcının vaadiyle değil kurulumun kendisiyle yanıtlanır.

## Notlar ve uyarılar

Lisansı ücretsiz, çalıştırması değil: kurum AWS'ye ve model sağlayıcılarına öder. Model seçimi Amazon Bedrock (Anthropic, Mistral) ya da OpenAI ve Microsoft Azure üzerinden yürür ve kendi yerel modellerinizi çalıştırma uygulanmamıştır. Proje, bireysel kurulumları destekleyemeyeceğini açıkça belirtir ve kuruluşları ticari ortaklara yönlendirir — yani gerçekçi maliyet personel ya da bir yüklenici içerir. Üç depolu bir kurulumdur (ön uç, arka uç, altyapı) ve binlerce değil onlarca yıldızı vardır; yukarıdaki maliyet karşılaştırması da kontrollü bir çalışma değil Vanderbilt'in kendi deneyimidir. Çıkarımı sahip oldukları donanımda tutmayı yeğleyen kurumlar [MindRouter](/aied/resources/mindrouter/)'a bakmalı ve ikisini birlikte okumalı: Amplify satıcı modellerinin üzerinde bir uygulama katmanı, MindRouter ise kendi GPU'larınızın üzerinde bir ağ geçididir.

## Bağlı kavramlar

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
