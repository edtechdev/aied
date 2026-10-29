---
title: "DeepTutor"
created: "2026-10-14T22:00:00-04:00"
type: resource
summary: "DeepTutor ajan temelli özel ders çerçevesinin açık kaynaklı sürümü: özel ders, soru üretimi, ustalık çalışması, araştırma ve görselleştirme için tek bir çalışma alanı, incelenebilir öğrenen belleğiyle."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**DeepTutor**, [[intelligent-tutoring|DeepTutor çalışmasında]] değerlendirilen özel ders çerçevesinin açık kaynaklı uygulamasıdır ve o makalenin kapsamının çok ötesine geçerek genel bir ajana özgü öğrenme çalışma alanına dönüşmüştür. Özel ders, problem çözme, sınav üretimi, ustalık çalışması, araştırma ve görselleştirme tek bir yetenek çalışma zamanını ve tek bir oturum bağlamını paylaşır; böylece problem çözerken kurulan öğrenen profili, sonra gelen açıklamaları ve çalışma maddelerini şekillendirir.

## Bu kaynakla neler yapılabilir

On kip — Sohbet, Soru Sor, Sınav, Araştır, Görselleştir, Çöz, Kurs Çalışması, Ustalık Yolu, Sürükleyici Okuma ve Sürükleyici İzleme — aynı çalışma zamanı üzerinde çalışır ve yeniden kullanılabilir bilgi tabanlarına, kitaplara, taslaklara, defterlere, soru havuzlarına ve personalara başvurur. Erişim bilerek çok motorludur: LlamaIndex, PageIndex, GraphRAG, LightRAG üzerine kurulu sürümlü RAG kütüphaneleri veya uzak bir LightRAG sunucusu, ayrıca kendi sunucunuzda barındırılan bir WeKnora tabanı, bir Tencent IMA veya MarginNote kütüphanesi ya da bağlı bir Obsidian kasası. Bellek opak değil, incelenebilirdir: L1 izleri, L2 yüzey özetleri ve L3 sentezi görünür ve düzenlenebilir, bir Bellek Grafiği ise her özeti onun arkasındaki kanıta bağlar. Bir `deeptutor` ikili programı terminal REPL’i verir ve onu bir araç olarak kullanmak isteyen her ajan için NDJSON akışı sağlar; bir EduHub topluluğu ise kurulabilir yetenekler dağıtır.

## Kimler için

Makalenin raporladığı çerçevenin dağıtılabilir bir sürümünü isteyen yükseköğretim öğretim elemanları ve araştırmacıları, takılabilir bir çalışma zamanı üzerine kuran geliştiriciler ve kendi örneğini çalıştırmaya istekli öz yönelimli öğrenenler. Belgeler deeptutor.info adresindedir.

## Notlar

Apache 2.0 ile lisanslıdır ve Eylül 2026 itibarıyla 1.6.9 sürümünde, yaklaşık 40.000 GitHub yıldızı vardır. Arkasındaki yayımlanmış değerlendirme — güçlü temeller üzerinde kişiselleştirilmiş ölçütlerde ortalama %10,8 iyileşme ve beş omurga modelinde genel ajan akıl yürütmesinde %29,4 daha güçlü, TutorBench kıyaslamasında — [[deeptutor|makale sayfasında]] özetlenir ve onun sınırlılıkları burada da geçerlidir. Herhangi bir açık kaynaklı YZ yığınında olduğu gibi, model sağlayıcı anahtarlarını siz sağlarsınız ve bir masaüstü veya sunucu dağıtımı Python 3.11 ile Node bekler.

## Bağlı kavramlar
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
