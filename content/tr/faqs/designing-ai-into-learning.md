---
title: "YZ Öğrenme Deneyiminin İçine Nasıl Tasarınmalıdır?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
reviewed_by: [editor]
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

# YZ Öğrenme Deneyiminin İçine Nasıl Tasarınmalıdır?

**Öğrenme hedefi ve öğrenme süreciyle başlayın — YZ özelliğiyle değil.** Bilgi tabanının [[pedagogy|Pedagogies and Teaching Strategies]] kavramı, aynı YZ'nin öğretim tasarımına bağlı olarak bir iskele, [[socratic-method|Socratic]] bir muhatap, bir geri bildirim ortağı, bir [[simulation]] veya bir yanıt üreteci olarak işlev görebileceğini vurgular. Önemli olan, yapılandırmanın amaçlanan öğrenmeyi üreten etkinliği koruyup korumadığıdır.

## Güçlü bir varsayılan örüntü

Güçlü bir varsayılan örüntü şudur: **öğrenen dener → YZ destekler → öğrenen değerlendirir veya gözden geçirir → öğrenen anlamayı gösterir.** Daha somut olarak:

- Öğrenmeye hizmet ettiği yerlerde [[productive-failure|productive failure]] koruyun.
- YZ yardımı görüntülenmeden önce bir ilk tahmin veya çözüm isteyin.
- Anında tamamlamaya tercih olarak soruları, ipuçlarını, örnekleri, karşı argümanları ve geri bildirimi yeğleyin.
- Sonuçları önemli iddiaların doğrulanmasını gerektirin.
- Açıklama ve [[learning-by-teaching|teach-back]] fırsatlarını içer.
- Yetkinlik arttıkça desteği kademeli olarak azaltın.
- Öğrenenlerin neyi bağımsız yapabildiklerini kalibre etmeleri için bazı YZ'siz fırsatları koruyun.

[[reducing-ai-misuse|Reducing AI Misuse]] sentezi, özellikle önce düşün/YZ sonra/yansıt dizilerini ve bilinçli değerlendirme denetim noktalarını önermektedir.

## YZ rolünü bilişsel etkileşim düzeyine uyarlayın

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall and Panadero's kitchen-machine analogy]], tasarım sorusunu öğrenenlerin [[generative-ai|generative AI]] kullanıp kullanmadığından *bu kullanımın ne olduklarını nasıl şekillendirdiğine* çevirir. Akıllı bir mutfak aletinin dört kullanımını [[icap-framework|ICAP]] ve [[samr-model|SAMR]] çerçeveleri yoluyla öğrenme durumlarına eşlemek, bir tasarım merdiveni verir: bir ödevi gözden geçirme veya [[critical-thinking|critical engagement]] olmadan tamamen dış kaynaklı yaptırmak Pasif ikame etme olup [[cognitive-offloading|skill loss and over-reliance]] riski taşır; [[prompt-engineering|refining prompts]] ve çıktıları çapraz doğrulamak [[prior-knowledge|prior knowledge]] ve [[self-regulated-learning|self-regulation]] gerektirir (Etkin/Arttırma); beyin fırtınası, taslak ve özgün işi değerlendirmek için YZ kullanmak Yapıcı/Değişiklik'tir; ve eş kurulum ile uyarlanabilir [[feedback]] için gerçek bir diyalog ortağı olan YZ Etkileşimli/Yeniden tanımlama'dır. Tasarım çıkarımı doğrudandır: aynı araç bir basamakta bir baypas, diğerinde bir iskeledir; dolayısıyla genel erişim tanımak yerine amaçlanan modu belirtin.

## Tasarımı sıralayın, aracı yalnızca izin vermeyin

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec and Horvat]], 554 kurstaki 29.064 öğretim ve öğrenme etkinliğinin planlı sırasını analiz etmiş ve görünür bir tasarım dilbilgisi bulmuştur: Kazanma (Acquisition) türü etkinlikler en yaygın giriş noktası ve en büyük tek türdür (%20'nin üzerinde); öğrenme türü amaçlanan Bloom düzeyini izler (Kazanma, 1. düzeyde ~%50'den 6. düzeyde ~%20'ye düşer, Üretme 5–6. düzeylerde %20'nin üzerine çıkar); ve en güçlü geçiş Değerlendirme → Tartışma'dır (0,332). YZ tasarımı için iki ders: YZ, sıranın belirli bir etkinlik türünü amaçladığı yere aittir, sona çivilenmiş olarak değil; ve geri bildirim [[collaborative-learning|collaboration]], [[group-work|group work]] ve [[teacher-role|teacher]] varlığıyla kümelenmiş olduğundan, akran ve eşzamanlı yapılar, YZ desteğinin yerine geçmek yerine takılması gereken [[feedback]] anlarını yaratır.

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli and colleagues' "refrain, then amplify" framework]] bunu program düzeyine taşır: bir kapasite oluşurken üretken aracı alıkoyun, sonra öğrenci onu yönetebildiğinde, döndürdüğünü yargılayabildiğinde ve onun hesabını verebildiğinde geri getirin, her menteşede sahte yapılması zor bir denetim noktasıyla. Aygıtlar, oluşan ile [[cognitive-offloading|offloading]] arasındaki bir ölçütle yönetilir — etkileşimli işi destekledikleri yerde izin verilir, dikkati tükettikleri yerde hariç tutulur. Bu, dış kaynaklı yaptırma kararlarını kurs düzeyi tasarımı öncesinde gelen, onu izleyen değil, bir [[curriculum-design|curriculum]] ve [[governance]] sorusuna dönüştürür.

## Yapıcı hizalama önce gelir

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes and colleagues' discourse analysis]] — 14 yükseköğretim rehberliği üzerinde — verimlilik çerçevelenmiş tavsiyenin, üretken YZ'yi sonuçları, rubrikleri ve kurs ana hatlarını taslak haline getirmek için kullanmanın, "yapıcı" yarısını ihmal ederek *hizalı görünen* bir hizalama ürettiğini uyarır: sonuçlar, etkinlikler ve [[assessment]], birbirine bağımlı olmaktan ziyade ayrık maddeler olarak üretilir. Onların çaresi yasak değil, yeniden sıralamadır: eğitimciler, yapıcı hizalamayı herhangi bir kısmını devretmeden önce YZ çıktısını yönlendirmek, sorgulamak ve reddetmeye yetecek kadar iyi anlamalıdır, çünkü makullik üzerine kurulu yüzeysel kabul alışkanlığı, öğretmenlerin öğrencilere karşı uyardıkları aynı değerlendirici hatadır. YZ'nin kullanıldığı yerlerde, genel internetle eğitilmiş varsayılanlar yerine yerel politika ve kalite standartları çevresinde yapılandırılmış, kurumsal olarak sınırlandırılmış [[rag|retrieval-augmented]] sistemleri savunurlar.

## Daha geniş ilke

[[finkelstein-principled-ai-education-2025|the Principled AI Education Framework]]'ndeki daha geniş ilke, teknolojinin eğitimin geliştirmeyi amaçladığı insan yetilerini yerinden etmek yerine onları arttırması gerektiğidir. Ayrıca bkz. [[learning-design|Instructional Design]], [[active-learning|Active Learning]] ve [[scaffolding]].

Tasarlanmış bir etkileşimin öğrenmeyi koruyup korumadığını belirleyen pedagojik varsayılanlar için bkz. [[reduce-ai-cheating]] ve [[redesign-assessment-ai-era]]; aynı ilkelerin yazılımın kendisini nasıl kısıtladığı için bkz. [[designing-educational-ai-software]], bunların bir özel ders desteği mimarisine çevirisi için bkz. [[developing-ai-tutor]].
