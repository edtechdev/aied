---
title: "MindRouter"
created: "2026-11-12T19:20:00-05:00"
updated: "2026-11-12T19:20:00-05:00"
type: resource
summary: "Idaho Üniversitesi'nin Apache-2.0 lisanslı çıkarım ağ geçidi; kampüsün vLLM ve Ollama GPU düğümlerinden oluşan kümesini tek bir OpenAI uyumlu API'nin arkasına alır ve adil paylaşımlı zamanlama, kullanıcı başına token kotaları, SSO, denetim günlüğü ile canlı GPU ve enerji izleme ekler."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
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

Kampüsteki YZ tartışmalarının çoğu hangi modelin alınacağıyla başlar ve daha zor soruya gelmeden durur: nerede çalıştığı, kimin ölçtüğü ve günlükleri kimin görebildiği. MindRouter bu ikinci soruya bir yanıttır. Kurumun sahip olduğu GPU'lardaki vLLM ve Ollama düğümlerinden oluşan heterojen bir [[llm|LLM]] sunucu kümesinin önünde duran, kendi barındırılan bir ağ geçididir ve OpenAI, Anthropic ve Ollama lehçelerini konuşan tek bir API sunar; aralarında çeviri yaparak mevcut istemci kodunun çalışmaya devam etmesini sağlar.

## Bu kaynakla neler yapılabilir

Bir aracı satıcı uç noktası yerine ağ geçidine yönlendirin. Arkasında MindRouter paylaşılan bir kurulumun ihtiyaç duyduğu parçaları üstlenir: ağırlıklı açık eksiltmeli tur bazlı (weighted deficit round robin) adil paylaşımlı zamanlama, kullanıcı başına token ve istek kotaları, Azure AD/Entra, Google, herhangi bir OIDC sağlayıcısı ya da SAML 2.0 üzerinden isteğe bağlı SSO ile role dayalı erişim ve istemlerin, yanıtların ve eserlerin tam denetim günlüğü. Bir GPU yardımcı ajanı düğüm başına kullanım, bellek, sıcaklık ve güç bildirir; böylece bir yönetici istek başına enerji maliyetini görebilir ve bakım zamanı geldiğinde bir arka ucu nazikçe boşaltabilir. Sohbetin ötesini kapsar — gömme, görü, görüntü ve video üretimi, metinden sese ve sesten metne, belge OCR — ve kodlama asistanları için MCP sunucuları ve ajan becerileri sunar.

Bir kolejin bunu önemsemesinin nedeni projenin adlandırdığı şeydir: [[institutional-ai-infrastructure|kurumsal YZ egemenliği]]. İstemler ve belgeler bir üçüncü taraf buluttan geçmek yerine kurumun işlettiği altyapıda kalır; bu, bir öğretim üyeleri senatosuna ya da bir [[privacy|gizlilik]] ofisine satıcıyla yapılan bir veri işleme anlaşmasından savunması daha kolay bir şeydir. Bu savın geçerli olup olmaması kurumun GPU'lara, güce ve personele sahip olup olmamasına bağlıdır — ağ geçidi yerel barındırmayı yönetilebilir kılar, ucuz değil.

## Kimler için

Var olan GPU kapasitesine sahip araştırma bilişimi ve merkezi BT grupları, öğretim üyelerinin ve öğrencilerin kullanımını tek bir yerden ölçmek isteyen öğretme ve öğrenme merkezleri ve barındırılan kurumsal platformları kendi çıkarımlarını çalıştırmakla tartan yöneticiler. Belgelenmiş SSO yapılandırması ve özel markalamayla bir Docker Compose kurulumudur ve yazarın PEARC '26'da sunduğu Idaho Üniversitesi'nde sürdürülmektedir; projenin Kasım 2026 itibarıyla 22 yıldızı ve 3 çatalı var.

## Notlar ve uyarılar

Apache-2.0 altında ücretsiz ve açık kaynak, ama maliyet kaybolmaz, yer değiştirir: donanım, elektrik ve bir kümeyi çalıştıracak personel zamanı. Yazılım altyapı standartlarına göre genç — üç katkıda bulunan, tek bir kaynak kurum ve yüzlerce etiketle numaralanan sürümler — bu yüzden bir kolej onu tek model yolu olarak değil var olan bir hizmetin yanında pilot olarak çalıştırmalı. Zamanlama ve kota davranışının gerçek kampüs yükü altında yayımlanmış değerlendirmesi depoda yok; yazarların kendi anlatımı için bakılacak yer PEARC bildirisi.

## Bağlı kavramlar

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
