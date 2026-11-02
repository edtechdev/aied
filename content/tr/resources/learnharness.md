---
title: "LearnHarness"
created: "2026-11-02T15:30:00-05:00"
updated: "2026-11-02T15:30:00-05:00"
type: resource
summary: "Yapay zeka ajanlarının öğrenenin hâlihazırda ne anladığını ölçtüğü, hedefe giden bir bağımlılık haritası planladığı, her seferinde tek bir akıl yürütme adımı öğrettiği ve alıştırmayı uyarladığı ücretsiz, açık kaynaklı (AGPL-3.0) bir masaüstü uygulaması; sonraki oturumların sıfırdan başlamak yerine okuduğu, önermeler ve akıl yürütme zincirlerinden oluşan kalıcı bir bilgi grafiğiyle."
url: https://learnharness.ai
source_code: https://github.com/amosblomqvist/learnharness
author: "Amos Blomqvist"
author_url: https://github.com/amosblomqvist
resource_type: [software, ai tutor]
access: [free]
license: "AGPL-3.0"
last_verified: "2026-11-02"
foundations: [agentic-ai]
pedagogy: [mastery-learning, scaffolding, productive-failure]
technology: [generative-ai, intelligent-tutoring, llm]
audience: [learners, instructors, educational technology developers]
confidence: high
connected_resources: [deeptutor]
translation_of: resources/learnharness
source_updated: "2026-11-02T07:40:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-02"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**LearnHarness**, bir dersi konu listesi etrafında değil, [[prior-knowledge|öğrenenin hâlihazırda ne anladığı]] etrafında düzenleyen, [[agentic-ai|ajan destekli]] öğrenme için bir masaüstü uygulamasıdır. Proje dört hamleyi tarif eder: **ölçmek**, hedefin bağlı olduğu fikirleri yoklayarak anlayışın nerede bittiğini bulmak; **planlamak**, hedefe giden bir bağımlılık haritası çıkarıp bunu bir ders haritası olarak göstermek; **öğretmek**, tahmin–açıklama–kontrol ritmiyle her seferinde tek bir akıl yürütme adımı üzerinde çalışmak, böylece kafa karışıklıkları üzerlerine bir şey inşa edilmeden önce giderilir; ve **alıştırmak**, öğrenenin kendi güçlüklerine yönelen bir problem akışı.

## Bu kaynakla neler yapılabilir

Ayırt edici girdi düşünme alanıdır: öğrenenler yalnızca yanıt vermek yerine akıl yürütmelerini ve belirsizliklerini yazar ya da dikte eder; proje bunu, ajanın doğru/yanlış kaydı yerine akıl yürütmeyi resmetmesi olarak ele alır. Uygulama ayrıca arka planda soruları araştırabilir, görsel açıklamalar üretebilir ve etkileşimli gösterimler kurabilir.

Biriken şey, kaynak oturumlarına geri bağlanan ve sonraki öğretim ile alıştırma ajanları tarafından bağlam olarak okunan, önermeler ve akıl yürütme zincirlerinden oluşan bir [[knowledge-graph|bilgi grafiğidir]]; notlar içe aktarılabilir. Proje, grafiğin fikirleri ve bağlantıları sakladığını, yetenek derecelendirmelerini saklamadığını söyler.

## Kimler için

Zor materyaller üzerinde çalışan bağımsız öğrenenler ile istemleri ve durumu incelenebilir olduğunda ajan yerel bir [[intelligent-tutoring|yapay zeka özel ders aracının]] neye benzediğini görmek isteyen eğitmenler veya geliştiriciler. Uygulama TypeScript ile yazılmıştır, kaynaktan çalıştırılır ve testlerinin model çağrısı içermeyen, belirlenimci testler olduğu belgelenmiştir.

## Notlar ve uyarılar

Ücretsiz olan yazılımı kapsar, çıkarımı değil: öğrenenler sağlayıcı anahtarlarını, bir aboneliği, yerel bir Claude Code CLI'yi veya OpenAI uyumlu herhangi bir uç noktayı getirir ve sağlayıcıya aracı olmadan ödeme yapar; canlı bir ölçer yalnızca bilinen API maliyetlerini tahmin eder. Kayıtlar, sohbetler ve anahtarlar makinede düz dosyalar olarak kalır, ancak proje yerel depolamanın çevrimdışı işleme anlamına gelmediği konusunda uyarır; çünkü model istekleri, isteğe bağlı dikte ve web araştırması dış hizmetlere ulaşır. Windows x64 yükleyicisi imzasızdır, bu yüzden Windows uyarı verir. Bildirilmiş bir etkililik çalışması yoktur, dolayısıyla sav ölçülmüş sonuçlara değil açıklanan gerekçeye dayanır; depo 2 Kasım 2026'da kontrol edildiğinde yaklaşık 4.800 yıldıza sahipti.

## Bağlı kavramlar

- [[agentic-ai]]
- [[intelligent-tutoring]]
- [[mastery-learning]]
- [[scaffolding]]
