---
title: Bilgi Grafiği
created: "2026-10-14T21:40:00-04:00"
type: concept
foundations: [ai-education, curriculum-design]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, student-modeling]
confidence: high
reviewed_by: [editor]
translation_of: concepts/knowledge-graph
source_updated: "2026-10-09T09:25:11-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Bilgi grafiği** — [[ai-education|Eğitimde yapay zeka]] sistemlerinde alan bilgisini, öğrenci anlayışını ve öğrenme bağımlılıklarını modellemek için kullanılan, kavramları ve bunların ilişkilerini yapılandırılmış biçimde temsil eden bir yapı. Bilgi grafikleri, YZ sistemlerinin öğrencilerin ne bildiği, sırada neyi öğrenmesi gerektiği ve kavramların birbirleriyle nasıl ilişkili olduğu konusunda akıl yürütmesini olanaklı kılar.

## Değerlendirilmesi Gereken Sorular

- Bir bilgi grafiği yalnızca kavramları değil, onların ilişkilerini de — ön koşulları, benzerlikleri, hiyerarşiyi — yakalar. Kavramların nasıl ilişkili olduğunu bilmek, neden uyarlanabilir bir sistem için düz bir beceri listesinden daha yararlı olabilir?
- Sizin alanınızdaki ön koşul ilişkileri nasıldır? Öğrencilerin, grafiğin ortaya çıkaracağı temel bir kavramı kaçırdıkları için düzenli olarak zorlandığı bir konu düşünebilir misiniz?
- Sayfa, bilgi grafiklerinin bilgi boşluklarını — öğrenenlerin temel kavramları kaçırdığı noktaları — tespit etmek için kullanılmasını tanımlar. Bu boşluğun yüzeye çıkarılması, bir YZ özel ders asistanının bundan sonra ne öğretmeye karar verdiğini nasıl değiştirebilir?
- Bilgi grafikleri elle oluşturulabilir ya da LLM’ler tarafından eğitim metinlerinden otomatik biçimde kurulabilir. Bir YZ’nin, özel ders asistanının üzerinde akıl yürüteceği kavram yapısını inşa etmesine izin vermenin riskleri nelerdir?
- Bilgi grafikleri, YZ ajanlarının üzerinde akıl yürüttüğü alan yapısını sağlıyorsa, grafiğin kendisi bir hata ya da yanlı bir ilişki içerdiğinde güvene ve doğruluğa ne olur?
- Bir bilgi grafiği, ince ayarlı tanı ve kişiselleştirilmiş yolları olanaklı kılan yapısal iskelet olarak tanımlanır. Kendi [[teacher-role|öğretim]] veya tasarımınızda, dersinizin bilgi grafiğinin neyi yakalaması gerekir — ve neyi dışarıda bırakır?

## Giriş

Bilgi grafikleri, birçok akıllı eğitim sisteminin yapısal iskeletini oluşturur. Düz beceri veya kavram listelerinin aksine, bilgi grafikleri [[adaptive-learning]], [[knowledge-tracing]] ve [[student-modeling]] için hayati olan ön koşul ilişkilerini, benzerlikleri ve hiyerarşik düzeni yakalar.

## Bilgi grafikleri AIED’de nasıl kullanılır

Bilgi grafikleri, bilgi tabanının AIED [[research-methods-aied|araştırması]] boyunca yinelenen bir yapısal mekanizmadır ve birkaç ayrı rol üstlenir:

- **[[knowledge-tracing]] modelleri**, ilgili beceriler arasında öğrenci yeterlilik tahminlerini yaymak için kavram grafiklerini kullanarak veri seyrek olduğunda tahmin doğruluğunu artırır.
- **[[student-modeling]] sistemleri**, öğrenenlerin ne bildiğini anlamsal olarak anlamlı bir biçimde temsil etmek, böylece ince ayarlı tanıyı olanaklı kılmak için bilgi grafiklerinden yararlanır.
- **[[adaptive-learning]] platformları**, içeriği sıralamak ve [[personalized-learning|kişiselleştirilmiş öğrenme]] yolları önermek için ön koşul grafiklerini kullanır.
- **Graf üzerindeki algoritma seçimi sonuçları değiştirir.** G4L’de, Bayes bilgi yayılımı ile Evolving Knowledge Space Graph üzerinden yeterliliği yaymak ölçülen bilgide +%24 artış üretti (0,717 → 0,887), Knowledge Space Theory için +%5 ve Weighted Distance Dependent Induction için +%1’e karşılık ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes ve Kovács, 2026]]).
- **[[cognitive-diagnosis]] çerçeveleri**, [[xie-hillm-cd-2026|HiLLM-CD]] gibi, eğitim metinlerinden LLM’ler kullanarak kavram ağaçları oluşturarak elle etiketlemeyi ortadan kaldırır.
- **Bilgi grafiğiyle güçlendirilmiş özel ders:** [[quantum-education-its|ITAS]], çok ajanlı bir özel ders sistemini yürütmek için kuantum kavramlarından oluşan bir bilgi grafiğini (açık ön koşul ilişkileriyle birlikte) kullanır ve sezgisel olmayan materyal için sonraki konuları seçmek üzere grafiği dolaşır.
- **Müfredat ve kurs modellemesi:** [[coursegraph-cs-course-comparison-2026|CourseGraph]], kurumlar arasındaki bilgisayar bilimi kurs yapılarını grafik temsilleri kullanarak karşılaştırır; [[learnity-graphs-lifelong-learning-framework-2026|Learnity grafikleri]] [[lifelong-learning|ömür boyu öğrenme]] yollarını modeller.
- **Ön koşul ilişkisi öğrenimi:** [[proprl-prerequisite-relation-learning|ProPrL]], kavramlar arasındaki ön koşul ilişkilerini öğrenerek bilgi grafiklerinin kodladığı kenarları biçimselleştirir.
- **Bilgi boşluğu tespiti:** [[knowledge-gap-detection-ai-tas|Bilgi boşluğu tespiti]], öğrenenlerin temel kavramları kaçırdığı noktaları belirlemek için YZ öğretim asistanlarında grafik temelli akıl yürütmeyi kullanır.
- **[[multimodal]] ve açıklanabilir akıl yürütme:** [[multimodal-knowledge-graph-educational-reasoning|çok kipli bilgi grafikleri]] grafik yapısını içerik kipleri boyunca genişletir; [[fair-explainable-edu-recommendations|adil ve açıklanabilir öneriler]] bilgi grafiği yerleştirmelerini sıralı modellemeyle birleştirir (hibrit bir HKG-GRU çerçevesi).
- **Kaynak önerisi için öğretimsel olarak yapılandırılmış grafikler:** [[hybrid-cf-kg-recommendation-multimodal-teaching-2026|Liu, Sun ve Song (2026)]], her bir öğretim kaynağı varlığını dört öğretimsel boyuta ayırır (öğretim bağlamı, bilişsel düzey, teknolojik özellik, kültürel uyarlanabilirlik), bu boyutlar üzerinde kullanıcıya bağlı anlamsal benzerlik hesaplar ve bunu yetenek ve ilerleme duyarlı bir katsayıyla işbirlikçi süzme ile birleştirir — kaynakları tüketim kalemi olarak ele almak yerine pedagojik yapıyı doğrudan öneri sinyaline kodlar.
- **Ontoloji temelli bilgi tabanları:** [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026|Ivanova (2026)]], tanım mantığına dayanan katmanlı, hibrit bir bilgi tabanı mimarisi önerir; klasik ITS tek-ontoloji modellerinin yerine **eşlenmiş ontoloji sistemlerini** koyar — yordamsal (kural tabanlı), olasılıksal/bulanık ve ML ile çıkarılan örtük bilgiyi ekler — ayrıca eğitim ontolojilerini tanımlamak, keşfetmek ve yeniden kullanmak için bir üst veri çerçevesi sunar.
- **[[scaffolding|İskeleleme]] ve yazma:** [[veriforge-narrative-drafting-scaffolding-2026|Veriforge]] ve [[visual-query-tracer-declarative-logic-learning|görsel sorgu izleme]], grafik temelli yapıyı anlatı taslağı oluşturma ve bildirim temelli mantık öğrenimine uygular.
- **Elle derlenmiş edebi grafikler ve bir denetimin ortaya çıkardıkları:** [[incipit-axiom-grounded-scaffolding-literary-creation-2026|Incipit]] edebi öncülleri grafikler — 1.455 aksiyom kaydı, 149 esere 1.464 eşleme ve 472 tipli ilişki — aday formülasyonları [[llm|dil modelleri]] önerir, bunları insan derleyicileri seçer ve temellendirir. Yeniden hesaplanan denetimi, yapısı kadar öğreticidir: her uç nokta çözümlenir ve yinelenen ya da kendine bağlantı kalmaz, buna karşın 1.455 aksiyomun 1.448’i tam olarak bir esere eşlenir (yani eserler arası yeniden kullanım seyrektir), bağlam taksonomisi iki bağlam tipini birbirinden ayıramaz ve hiçbir kaynak dökümü kalmaz; bu da anlık görüntünün kendi işlem hattını yeniden kurmasını olanaksız kılar. Yapısal geçerlilik yorumlayıcı nitelik değildir; kaynak dökümü olmayan derlenmiş bir grafik ne denetlenebilir ne de yenilenebilir.

## LLM kaynaklı bilgi grafiği oluşturma

Son araştırmalar, eğitim içeriğinden bilgi grafiklerini otomatik biçimde oluşturmak için [[llm|LLM’lerin]] kullanılmasını inceler. [[xie-hillm-cd-2026|HiLLM-CD]] çerçevesi, alıştırma–kavram bağlantıları ve hiyerarşik kavram ağaçları üretmek için çok ajanlı LLM işlem hatları kullanarak uzman etiketlemesine duyulan bağımlılığı azaltır. Bu durum müfredat tasarımındaki ve otomatik içerik düzenlemesindeki daha geniş [[generative-ai]] uygulamalarıyla ve [[rag]] (getirimle güçlendirilmiş üretim) ile bağlantılıdır; burada grafik yapısı bilgi, düz benzerlik aramasına kıyasla getirim niteliğini iyileştirebilir.

## Diğer kavramlarla ilişki

Bilgi grafikleri [[learning-design]] (ne öğretileceğini tanımlamak), [[curriculum-design]] (bunu nasıl sıralayacağımız) ve [[learning-analytics]] (öğrenci etkileşim verisinden içgörü çıkarmak) ile bağlantılıdır. Eğitim alanlarının yapılandırılmış temsillerine gereksinim duyan [[intelligent-tutoring]] sistemleri için temeldirler. YZ ajanları eğitimde yaygınlaştıkça, bilgi grafikleri [[agentic-ai|ajan tabanlı sistemlerin]] üzerinde akıl yürüttüğü alan yapısını sağlar — [[quantum-education-its|ITAS]] ve bilgi boşluğu tespiti öğretim asistanlarında görülen bir örüntü.

## Bağlı kavramlar

- [[adaptive-learning]]
- [[knowledge-tracing]]
- [[intelligent-tutoring]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[learning-analytics]]
- [[curriculum-design]]
- [[learning-design]]
- [[generative-ai]]
- [[llm]]
- [[rag]]
- [[agentic-ai]]
- [[ai-technologies]] — Şemsiye: YZ teknolojileri ve teknikleri (modeller, LLM eğitimi, robotik, RAG, ajan tabanlı)
- [[recommender-systems-and-learning-paths]]

## Bağlı makaleler

- [[incipit-axiom-grounded-scaffolding-literary-creation-2026]] — Yapısal denetimi ve kaynak dökümü bulunmayan, derleyici tarafından oluşturulmuş 1.455 edebi aksiyomdan oluşan bir grafik (Liu ve Zhao 2026)
- [[ontology-layered-hybrid-knowledge-model-personalized-elearning-2026]] — Kişiselleştirilmiş e-öğrenme için ontoloji temelli katmanlı hibrit bilgi modeli
- [[learnity-graphs-lifelong-learning-framework-2026]] — Ömür boyu öğrenme için Learnity grafikleri
- [[veriforge-narrative-drafting-scaffolding-2026]] — Veriforge: anlatı taslağı oluşturma iskeleleri
- [[quantum-education-its]] — Kuantum eğitimi akıllı özel ders (ITAS)
- [[multimodal-knowledge-graph-educational-reasoning]] — Eğitimsel akıl yürütme için çok kipli bilgi grafikleri
- [[coursegraph-cs-course-comparison-2026]] — CourseGraph: bilgisayar bilimi kursu karşılaştırması
- [[proprl-prerequisite-relation-learning]] — ProPrL: ön koşul ilişkisi öğrenimi
- [[knowledge-gap-detection-ai-tas]] — YZ öğretim asistanlarında bilgi boşluğu tespiti
- [[visual-query-tracer-declarative-logic-learning]] — Bildirim temelli mantık öğrenimi için görsel sorgu izleyicisi
- [[fair-explainable-edu-recommendations]] — Adil ve açıklanabilir eğitim önerileri
- [[hybrid-cf-kg-recommendation-multimodal-teaching-2026]] — Çok kipli öğretim kaynakları için hibrit CF–KG alanlar arası öneri
- [[xie-hillm-cd-2026]] — HiLLM-CD: LLM kaynaklı bilişsel tanı
- [[graph-its-adaptive-algorithms-2026]] — Dinamik Alanlar için Grafik Temelli Akıllı Özel Ders (2026)
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Öğrenme Ortamı Üretimi
