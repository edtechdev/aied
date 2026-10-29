---
title: Bilişsel Psikoloji
created: "2026-10-14T21:34:00-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition]
technology: [generative-ai, intelligent-tutoring, knowledge-tracing]
confidence: high
translation_of: concepts/cognitive-psychology
source_updated: "2026-09-26T01:51:49-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Bilişsel psikoloji / bilişselcilik** — öğrenmeyi, yalnızca gözlemlenebilir davranış üzerinden değil, içsel zihinsel süreçler — dikkat, algı, hafıza, muhakeme ve üst biliş (metabiliş) — üzerinden açıklayan kuramlar ailesi. [[ai-education|Eğitimde YZ]] alanında, bilişselci varsayımlar alanın en kendine özgü katkılarının temelini oluşturur: öğrenenin bilgisini modelleyen [[intelligent-tutoring]]leri; bir öğrenenin ne bildiğini izleyen [[knowledge-tracing]] ve [[cognitive-diagnosis]]; hata tanılamasına dayalı [[feedback]] tasarımları; ve tüm [[student-modeling|öğrenen modelleme ve uyarlanabilir öğretim]] ailesi. Bilişselcilik, [[behaviorism]] (öğrenmenin davranışsal değişim olarak görüldüğü yaklaşım) ile [[constructivist|yapılandırmacılık]] (öğrenmenin etkin anlam yaratımı olarak görüldüğü yaklaşım) arasında orta zeminde duran bir duruştur ve erken dönem YZE (AIED)’yi canlandıran zihnin bilgisayar metaforuna en yakından bağlı olan teorik mercektir.

## Düşünülmesi Gereken Sorular

- “Öğrenme” denince aklınıza birinin *yaptığı* şeyde mi yoksa *bildiği ve hatırlayabildiği* şeyde mi bir değişim geliyor? Bu ayrım, bir YZ ders aracının gerçekten işe yarayıp yaramadığına ilişkin yargınızı nasıl değiştirebilir?
- YZ ders sistemi, zihni hafıza sınırları olan bir bilgi işleme sistemi olarak ele alan bir “bilgisayar metaforu” üzerine kuruludur. Bu metaforun nerede güçlü hissettirdiğini ve insanların nasıl öğrendiğine dair neyi gözden kaçırabileceğini düşünüyorsunuz?
- Bir YZ aracı bir görevi zahmetsiz gösteriyor: sonraki adımı açıklıyor, sürtünmeyi azaltıyor ve öğrenen aracı kullanırken harika performans sergiliyor. Bu, başarılı bir [[teacher-role|öğretim]] olarak sayılır mı? Öğrenenin bunu artık aracı kullanmadan yapıp yapamayacağını nasıl bilebilirdiniz?
- Bilişsel Yük Kuramı, içsel, dışsal ve faydalı yükü birbirinden ayırır. Bir YZ asistanı tasarlıyor olsaydınız, hangi yük türünü bilinçli olarak azaltmaya çalışır, hangisini kaldırmamaya özen gösterirdiniz?
- Bir öğrenen, hafızasını ve muhakemesini bir YZ’ye devredebileceğini biliyorsa, bu ne zaman akıllıca bir strateji ve ne zaman öğrenmeyi sessizce engelleyen bir kısayoldur? Farkı belirleyen nedir?
- Bilişselcilik, bilginin bileşenlere ayrılıp zaman içinde izlenebileceğini varsayar. Bir öğrenenin anlayışını izlenebilir bilgi bileşenleri kümesine indirgediğimizde neyi kaybedebiliriz?

## Giriş

Bilişsel psikoloji, öğrenmeyi gözlemlenebilir davranışta bir değişim olarak değil, içsel zihinsel temsillerde — hafızada tutulan kavramlar, şemalar ve yordamlarda — bir değişim olarak ele alan öğrenme kuramı geleneğidir. Bilgi işleme sözlüğü (dikkat, kodlama, geri çağırma, sınırlı çalışma belleği) hem öğrenme güçlüğüne ilişkin tanılayıcı dili hem de [[intelligent-tutoring]] ile [[knowledge-tracing]] arkasındaki mimariyi sağlamıştır: öğrenenin içsel durumunu çıkarıma dayalı olarak belirleyen ve buna uyum sağlayan sistemler. Bilişsel psikoloji, bu bilgi tabanı boyunca [[metacognition]], [[desirable-difficulties]] ve [[self-regulated-learning]] için başvuru çerçevesi olmaya devam etmektedir.

## Temel fikirler

- **Öğrenme, içsel zihinsel temsillerde bir değişimdir.** Bilişselcilik, öğrenmenin bellekte bilgi edinimini, depolanmasını ve yeniden düzenlenmesini — kavramlar, şemalar ve yordamlar — yalnızca gözlemlenebilir yanıtta bir değişimden farklı olarak içerdiğini savunur. Önemli olan öğrenenin *bildiği ve hatırlayabildiği* şeydir, yaptığı şey değil.
- **Bilgi işleme (bilgisayar) metaforu.** Zihin, kapasiteleri ve darboğazları olan bir bilgi işleme sistemi olarak ele alınır — gizli yeteneğin [[item-response-theory|ölçümü]], çalışma belleği sınırları, kodlama ve geri çağırma — bu da tam olarak YZ ders sistemini (öğrenen bilişini modelleyen ve ona uyum sağlayan bir bilgisayar programı) doğal bir uyum haline getiren modeldir.
- **Dikkat ve hafıza sınırlıdır.** Çalışma belleğinin kapasitesi sınırlıdır; kalıcı öğrenme, tekrar, detaylandırma ve [[retrieval-spacing-interleaving|geri çağırma pratiği]] yoluyla uzun süreli belleğe kodlanmayı gerektirir. Bu durum bilişselciliği, [[research-methods-aied|YZ-eğitim araştırmaları]] ile, [[cognitive-offloading]] (hafıza/işlemeyi dış araçlara devretme) üzerine çalışmalarla ve YZ’nin geri çağırmayı ile pratiği atladığı durumlarda ortaya çıkan “performans–öğrenme uyumsuzluğu” ile bağlantılı kılar.
- **Üst biliş, bilişi düzenler.** [[metacognition]] — kendi düşüncesini izleme ve denetleme — belirgin biçimde bilişselci bir yapıdır ve öğrenenlerin YZ’ye ne zaman güveneceğine ilişkin kalibrasyonlarının neden öğrenme için önemli olduğunu açıklar (bkz. [[cognitive-offloading]] ve [[self-regulated-learning]]).
- **Bilgi ayrıştırılabilir ve izlenebilirdir.** Bilişselci YZE, öğrenenin bilgisinin bileşenler olarak temsil edilip zaman içinde izlenebileceğini varsayar — bu, [[knowledge-tracing]], [[cognitive-diagnosis]] ve [[item-response-theory]]nın temelidir.

## Bilişselcilik ve eğitimde YZ

### YZE’nin bilişselci soyağacı

Bilişselcilik, eğitimde YZ’nin var olmasından sorumlu olan muhtemelen en etkili kuramdır. Erken dönem bilişsel ders sistemleri (örneğin Anderson’ın ACT-R temelli sistemleri), öğrenmenin üretim kuralları olarak modellenebileceği ve bir sistemin öğrenenin hangi kuralları öğrendiğini izleyebileceği varsayımını [[embodied-learning|somutlaştırmıştır]]. Bu, alanı hâlâ tanımlayan kurumsal mimariyi üretmiştir: bir alan modeli, öğrenenin bilgi durumunu izleyen bir [[student-modeling|öğrenen modeli]] ve öğretime uyum sağlayan bir [[pedagogy|pedagojik]] model — hepsi bilişselci kökenlidir. Modern [[knowledge-tracing]] (Bayesian, derin öğrenme ve IRT temelli) ve [[cognitive-diagnosis]] bu geleneği sürdürmektedir. Aynı varsayım, bilgi tabanında [[student-modeling|Öğrenen Modelleme ve Uyarlanabilir Öğretim]] çatısı altında gruplandırılan [[intelligent-tutoring]], [[adaptive-learning]] ve [[personalized-learning]]yi de beslemektedir.

### Bilişsel yük ve öğretimin tasarımı

Bilişsel Yük Kuramı (BYK), [[learning-design|öğretim tasarımında]] en yaygın uygulanan bilişselci çerçevedir: içsel yükü (görev karmaşıklığı), dışsal yükü (sunum sürtünmesi) ve faydalı yükü (şema oluşturma çabası) birbirinden ayırır. İyi tasarlanmış bir YZ, dışsal yükü azaltırken faydalı işlemeyi korumalıdır; kötü entegre edilmiş YZ üçünü birden azaltır ve öğrenmeyi boş bırakarak yalnızca tamamlanmış görevler bırakır. BYK’nın çalışma belleği çerçevesi, [[cognitive-offloading]] tartışmalarında da merkezidir — YZ’nin zararlı dışsal yükü azaltıp azaltmadığı, yoksa öğrenmeyi üreten faydalı işlemeyi kısa devre yaptırıp yaptırmadığı sorusu.

Mayer’ın Multimedya Öğrenmesinin Bilişsel Kuramı (CTML), aynı çalışma belleği varsayımlarını materyallerin kendisine uygular ve önermeleri olağanüstü biçimde somuttur: öğrenciler, yalnızca sözcüklerden ziyade sözcükler ve görüntüler birlikte sunulduğunda; ilgisiz materyal çıkarıldığında; ders, tek bir kesintisiz bütün olarak değil bölümlere ayrılıp kullanıcı hızında ilerlediğinde; karşılıklı sözcükler ve görüntüler birbirine yakın ve aynı anda göründüğünde; ve anlatım, resmi veya makine tarafından üretilmiş bir dilden ziyade konuşma dilinde ve samimi bir insan sesiyle yapıldığında daha iyi sonuç alır.

### Bilişselcilik ve davranışçılık ile yapılandırmacılık karşısında

- **[[behaviorism]] karşısında:** Davranışçılık, öğrenmeyi pekiştirme ve tekrar yoluyla gözlemlenebilir davranışsal değişim olarak açıklar; bilişselcilik, içsel temsiller ve izlenebilir zihinsel durumlar üzerinde ısrar eder. YZ uygulamaları sık sık “isimde yapılandırmacı, uygulamada davranışçı” bir uyumsuzluk gösterir; ancak bilişselci tasarımlar (öğrenen modelleme, bilgi izleme), saf davranışçı tekrar-ve-geri bildirimden farklıdır, çünkü bunlar *öğrenenin çıkarımsal bilgisini temsil eder ve ona uyum sağlar*, yalnızca yanıtları pekiştirmekle yetinmez.
- **[[constructivist|Yapılandırmacılık]] karşısında:** Yapılandırmacılık, [[learners]] deneyim yoluyla etkin biçimde anlam inşa ettiğini savunur; bilişselcilik ise (genellikle önceden yapılandırılmış) bilgi ve becerinin doğru kodlanmasını vurgular. YZE’nin bilişselci soyağacı (yapılandırılmış alanlar, açık bilgi bileşenleri) bazen yapılandırmacılar tarafından aşırı davranışçı veya aşırı aktarımcı olarak eleştirilir; bilişselcilik ise, bilgiyi temsil etmenin ve izlemenin, gerçekten uyarlanabilir öğretimi mümkün kılan şey olduğunu savunarak karşı çıkar.
- **[[learning-sciences|Öğrenme bilimleri]] karşısında:** Bilişselcilik, bu alanın tasarımda kullandığı mekanizmaları — çalışma belleği, kodlama, geri çağırma, ayrıştırılabilir bilgi bileşenleri — sağlar; ancak kendisi tasarıma yönelik değildir. Öğrenmenin nasıl gerçekleştiğini açıklar; öğrenme bilimleri ise bunun gerçekleştiği ortamların nasıl inşa edileceğini sorar ve bu tasarımları ampirik sınamaya tabi tutar.

### YZ çağı gerilimi: bilişselciliğin sınırı baskı altında

[[generative-ai|Üretken YZ]] bilişselciliği hem genişletir hem zorlar. Bilgi temsillerini daha güçlü hale getirerek ([[knowledge-tracing]] yoluyla izlenebilen ve [[student-modeling]] yoluyla uyarlanabilen bilgi motorları olarak LLM’ler) genişletir. Bilişin “nerede” olduğunu karmaşıklaştırarak zorlar: YZ muhakeme, hafıza ve hatta üst bilişe benzer işlevleri üstlendiğinde, öğrenmenin bireyin zihnindeki içsel işlem olduğuna dair bilişselci varsayım sarsılır — [[distributed-cognition]], [[ai-cognitive-partner-co-regulation-learning|ortak düzenleme]] ve insan-ötesi çerçeveler, bilişin insan ve yapay sistemler arasında dağılabileceğini savunur. Yine de bilişselci soru, alanın merkezi sorusu olmaya devam eder: *öğrenen bilgiyi içselleştirir mi, yoksa bilgiyi araç mı tutar?* Bu, bilişsel yükü dışarı aktarma ve performans–öğrenme uyumsuzluğu sorusunun en saf halidir.

## Tasarım ve araştırma için çıkarımlar

1. **Yalnızca performansa değil, içselleştirmeye yönelik tasarlayın.** Bilişselci YZE, öğrencinin bilgiyi *aracı kullanmadan* hatırlayıp uygulayıp uygulayamadığı üzerinden değerlendirilmelidir — destekli performans üzerinden değil. Bu, [[ai-misuse-learning-harm|performans–öğrenme uyumsuzluğu]] ve desteklenmemiş [[transfer-of-learning|aktarım]]ı ölçme gerekçesidir.
2. **Öğrenciyi temsil edin, yalnızca yanıt vermeyin.** Sistemin, akıcı ama körü körüne yanıt vermek yerine çıkarımsal bilgiye uyum sağlaması için YZ diyaloğuna yapılandırılmış [[student-modeling]] ve [[knowledge-tracing]] bağlayın.([[educlaw-bench-pedagogical-llm-agents-2026]])
3. **Çalışma belleği sınırlarına saygı gösterin.** YZ kullanıcı deneyimine Bilişsel Yük Kuramı’nı uygulayın: tüm bilişsel talebi en aza indirmek yerine, dışsal yükü (sürtünme, aşırı yüklenmiş arayüzler) azaltırken faydalı işlemeyi ([[desirable-difficulties|verimli mücadele]], geri çağırma pratiği) koruyun.
4. **Üst bilişi kalibre edin.** Öğrenenlerin ne zaman yük dışarı aktaracağını seçmesini [[metacognition]] yönettiğinden, kalibrasyon öğretimi (birinin yardımsız gerçekten neler yapabileceğini bilmek), aşırı güven karşısında bilişselci bir yanıttır (bkz. [[cognitive-offloading]]).

## Bağlı kavramlar

- [[behaviorism]]
- [[constructivist]]
- [[learning-theories]]
- [[metacognition]]
- [[cognitive-offloading]]
- [[knowledge-tracing]]
- [[cognitive-diagnosis]]
- [[student-modeling]]
- [[intelligent-tutoring]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[item-response-theory]]
- [[distributed-cognition]]
- [[icap-framework]]
- [[transfer-of-learning]]
- [[self-regulated-learning]]
- [[ai-education]]
- [[learning-sciences]]
- [[retrieval-spacing-interleaving]] — the retention findings this practice family rests on

## Bağlı makaleler

- [[cognitive-shift-ai-education]] — The cognitive shift in AI education
- [[cogtax-cognitive-taxonomy]] — A cognitive taxonomy for AI use
- [[educlaw-bench-pedagogical-llm-agents-2026]] — Pedagogical LLM agents grounded in knowledge tracing
- [[nie-personavlm-long-term-personalization-2026]] — LLM student modeling and memory
- [[ai-cognitive-partner-co-regulation-learning]] — AI as a cognitive partner in co-regulated learning
- [[ensemble-cognition-philosophy-ai-education]] — Ensemble Cognition: thinking as human–AI interaction
