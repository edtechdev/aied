---
title: Bloom Taksonomisi
created: "2026-11-21T04:00:00-05:00"
updated: "2026-11-21T17:00:00-05:00"
type: concept
research_method: [literature review]
foundations: [theories-and-frameworks, learning-design, curriculum-design, critical-thinking]
pedagogy: [learning-theories, metacognition, icap-framework, mastery-learning, scaffolding, inquiry-based-learning]
assessment: [assessment, automated-question-generation, automated-assessment, educational-measurement, formative-assessment, assessment-validity]
technology: [generative-ai, llm, machine-learning, educational-nlp]
methods: [quantitative-research, qualitative-research]
connected_concepts: [learning-theories, critical-thinking, metacognition, icap-framework, tpack, mastery-learning, scaffolding, inquiry-based-learning, automated-question-generation, automated-assessment, educational-measurement, assessment-validity, formative-assessment, generative-ai, llm, machine-learning, cognitive-offloading, higher-ed, k-12, curriculum-design]
connected_articles: [austin-bloom-taxonomy-generative-ai-2026, bloom-classifier-ai-assisted-questions-2026, bloom-taxonomy-llm-item-classification-2026, cross-dataset-bloom-question-classification, bloom-aligned-educational-control-llms, llm-educational-question-cognitive-depth, stewart-tag-question-categorization-competency-2026, luo-ibl-patterns-llm-bloom-2026, student-llm-use-ai-question-difficulty-data-science-2026, student-cognitive-offloading-ai-higher-ed-2026]
confidence: high
translation_of: concepts/bloom-taxonomy
source_updated: "2026-11-21T04:00:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-21"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sentez:** Bloom Taksonomisi, [[ai-education|eğitimde yapay zekada]] iki farklı iş yapar ve bunların karıştırılması alandaki tartışmaların çoğundan sorumludur. Bir **sınıflandırma aracı** olarak maddelerin ve makine çıktısının bilişsel düzeyini kodlar ve artan bir çalışma kitlesi bu kodların kırılgan olduğunu gösteriyor: insan seçkisinde hazırlanmış madde bankalarında eğitilen sınıflandırıcılar YZ üretimi sorularda çöküyor, amaçlanan düzeyler bir maddenin ampirik zorluğunun neredeyse hiçbirini açıklamıyor ve YZ–ölçüt uyumu en iyi ihtimalle orta düzeyde. Bir **tasarım ve sıralama çerçevesi** olarak ise bilişsel talebi dizler ve burada [[generative-ai|üretken yapay zeka]] bir emeklilik değil bir revizyonu doğurmuştur — önce ürün odaklı yeniden dönüş, ters diziler ve yardımın bir iskele mi yoksa bir kısayol mu olduğunu ölçen çerçeveler. Taksonomi; basamakları öğrenmeyi öngören bir merdivenden çok, etiketlerinin doğrulanması gereken ortak bir sözlük olarak ele alındığında daha iyi sonuç verir.

## Düşünülmesi Gerekenler

- Bir soruyu “çözümleme” ya da “değerlendirme” olarak etiketlediğinizde, ona yanıt veren bir öğrencinin gerçekte o bilişsel işi yaptığına dair hangi kanıta sahipsiniz?
- Bir sınıflandırıcının bir maddenin Bloom düzeyini etiketleyebilmesi, o maddenin ne kadar zor olduğu hakkında bir şey söyler mi, yoksa yalnızca nasıl yazıldığı hakkında mı?
- Bir öğrenci YZ ile üretilmiş akıcı bir kompozisyon teslim ediyor. Ürün hangi Bloom düzeyini kanıtlıyor, süreç hangisini?
- “Üst düzey düşünme” her zaman hedef midir, yoksa temel akıcılık bazen önce alt basamakları mı gerektirir?
- Görevin ortaya çıkarması için tasarlandığı düzeye karşı YZ çıktısını kim denetler — öğrenci, öğretim elemanı mı yoksa sistem mi?

## Giriş

Bloom Taksonomisi, öğrenme görevlerinin bilişsel talebini betimlemek için en yaygın kullanılan sözlüktür ve eğitimde YZ'de nadiren tarafsızdır. Bir değerlendirme bankasının kodlama şeması, bir [[scaffolding|iskele]]nin ulaşmayı amaçladığı hedef, bir [[llm|büyük dil modelinin]] üretebildiği şeyin ölçütü ve [[generative-ai|üretken yapay zekanın]] bozduğu iddia edilen miras alınan yapı olarak görünür. 1956 taksonomisi eğitsel hedefleri Hatırlama'dan Değerlendirme'ye doğru sıraladı; 2001 Anderson ve Krathwohl revizyonu onları artık genellikle kastedilen altı düzeye yeniden adlandırıp yeniden sıraladı — Hatırlama, Anlama, Uygulama, Çözümleme, Değerlendirme, Oluşturma. Aşina piramit sonradan yapılmış görsel bir kısaltmadır, her iki sürümün de parçası değildir.

Yapının bu alandaki yararlılığı, *ortak bir sözlük* olmasından gelir. Riski ise bir *ölçüm* olarak ele alınmasından doğar. Bir düzey etiketi, bir görevin ortaya çıkarması amaçlanan bilişsel işlemi betimler; öğrenenin gerçekleştirdiği işlemi, maddenin zorluğunu ya da sonucun niteliğini betimlemez. YZ çağı literatürünün büyük bölümü, bir Bloom etiketinin bu üç şeyden hangisini taşıyabileceği üzerine bir tartışmadır.

## İki iş: sınıflandırma aracı ve tasarım çerçevesi

İlk iş araçsaldır. Araştırmacılar ve sistemler taksonomiyi, maddeleri ve çıktıları ölçekte kodlamak için kullanır: düzeyine göre etiketlenmiş bir değerlendirme bankası, bir modelin sorularının görünüşte talep ettiği düzeye göre sıralanması ve bir öğrencinin devrettiği işin devredilen bilişsel işleme göre sınıflandırılması. Sınan en sert iş budur ve sonuçlar ayıltıcıdır.

İkinci iş mimariseldir. Taksonomi, öğrenenlerden istenen şeyi dizler ve dolayısıyla [[curriculum-design|müfredatı]], görev dizilerini ve rubrikleri biçimlendirir. Burada soru etiketlerin doğru olup olmadığı değil, sıralamanın doğru olup olmadığı — ve bir makine sıralamanın en üstündeki ürünü üretebiliyorken bunun hâlâ geçerli olup olmadığı. İki iş farklı biçimde başarısız olur: bir sınıflandırma aracı etiketleri gerçek maddelerle temas ettiklerinde ayakta kalmadığında başarısız olur; bir tasarım çerçevesi dizisi artık öğrenmenin nasıl gerçekleştiğini betimlemediğinde başarısız olur.

## Eğitimde YZ'de Bloom bir sınıflandırma aracı olarak

Otomatik Bloom sınıflandırma, genelleme sorunu devrede olan yerleşik bir alt alandır. İnsan yazımı, küratörlüğü yapılmış madde bankalarında eğitilen modeller dağılım içinde iyi performans gösterir, başka yerde ise kötü. Kendi bankasında makro-F1 0,88 alan bir sınıflandırıcı, iki YZ üretimi soru kümesinde 0,48 ve 0,20'ye düştü. Yazarlar kaybı model boyutundan çok üretilen metindeki açık Bloom tetikleyici fiillerinin neredeyse yokluğuna bağlar: üretilen maddeler çok daha fazla sözcükle (18,2'ye karşı 9,3) ortaya çıkmış ve tetikleyici fiillerinin yalnızca medyan %10,5'ini küratörlü derlemle paylaşmıştır ([[bloom-classifier-ai-assisted-questions-2026|Castanares et al., 2026]]). Veri setleri arası çalışmalar aynı hikâyeyi anlatır: gözetimli makine öğrenmesi ve derin öğrenme modelleri görünmeyen veri setlerinde belirgin biçimde bozulurken, bağlam içi örnekler ve derse özgü eylem fiilleri verilen [[llm|LLM'ler]] ayakta kaldı ([[cross-dataset-bloom-question-classification|Cross-dataset Bloom classification, 2026]]).

İnsanlarla uzlaşı da sınırlıdır. 62 farmakoterapi sorusuna uygulanan bir müfredat eşleme aracı, Bloom Taksonomisi'ndeki öğretim üyesi etiketleriyle %59,7 uzlaşıya ulaştı (Cohen'ın κ = 0,57) — sınanan dört yetkinlik çerçevesinin en güçlüsü ve yine de yalnızca orta düzeyde ([[stewart-tag-question-categorization-competency-2026|Stewart et al., 2026]]). 265 matematik maddesini sınıflandıran bir LLM, uzman kodlayıcılarla yalnızca orta düzeyde uzlaştı (κ = .22) ve maddeleri Uygula/Çözümle bandına doğru çekti ([[bloom-taxonomy-llm-item-classification-2026|Altaweel & Moussa, 2026]]).

## Bir düzey etiketinin neyi öngördüğü ve öngörmediği

En keskin bulgu, amaçlanan bir Bloom düzeyinin bir maddenin nasıl davrandığı hakkında neredeyse hiçbir şey söylememesidir. Merkezî sınavlardan alınan 265 dört seçenekli matematik maddesi üzerinde, amaçlanan düzey ampirik zorluktaki varyansın %5'inden azını (ε² = .043), ayırt edicilikteki varyansın hiçbirini açıklamamıştır; oysa bir LLM'in sınıflandırması uzmanlarla yalnızca orta düzeyde uzlaşmıştır ([[bloom-taxonomy-llm-item-classification-2026|Altaweel & Moussa, 2026]]). Örüntü üretim tarafında yinelenir: 10 haftalık bir veri bilimi sınıf çalışmasında üretilen zorluk etiketi, kendi birlikte üretilen Bloom düzeyiyle neredeyse kusursuz korele olmuş ancak ampirik zorlukla hiç korele olmamıştır ([[student-llm-use-ai-question-difficulty-data-science-2026|An & Wang, 2026]]). Etiketler, bir öğrencinin yapması gereken düşünceyi değil, modele istenen söylemi izler.

Bu yüzden taksonomi, [[educational-measurement|eğitimsel ölçme]] ve [[assessment-validity|geçerlilik]] kavramlarının içinde değil yanına aittir. Bir Bloom kodu, amaçlanan bilişsel talep hakkındaki bir iddiadır; bu iddianın tutup tutmadığı bir ölçme sorusudur ve kanıtlar genellikle tutmadığını söyler.

## Bloom bir tasarım ve sıralama çerçevesi olarak

Tasarım işi, YZ çağında daha sonuçsal argümanı üretmiştir. Austin, Gulya ve Kassorla, [[generative-ai|üretken yapay zekanın]], taksonominin [[assessment|değerlendirmede]] kullanımının dayandığı varsayımı — bitmiş bir ürünün onu üreten düşünceyi kanıtladığı — kopardığını ileri sürer ([[austin-bloom-taxonomy-generative-ai-2026|Austin et al., 2026]]). Onların okuması teknik olduğu kadar tarihseldir: piramit, niyette hiyerarşik ama hiçbir zaman o biçimde çizilmemiş bir taksonominin yanlış okunmasıdır ve ürünü kanıt gibi gösteren şey merdiven imgesidir. Yanıtları altı düzeyi korur, sıralamayı ya da giriş noktasını değiştirir. Ters Bloom, Oluşturma'dan başlar ve iner; dolayısıyla araca güven, öğrenenin karşılaştırmak için en azı olduğu yerdedir; UnBlooms bu hamleyi önce ürün odaklı yeniden dönüşe genelleştirir; orada değerlendirilebilir kanıt, öğrencinin makine üretimi bir taslağa uyguladığı sorgulama, uyarlanma ve yönlendirmedir.

Paralel bir hat, tasarım sorusunu doğrudan ölçer. [[llm|LLM'ler]] için Bloom ile uzlaşık bir çerçeve, “eğitsel kontrolü” bir görevin öğretim niyetini korurken bilişsel talebini daha üst düzeylere kaydırma becerisi olarak ele alır — yardımın iskele mi yoksa kısayol mu olduğuna dair bir ölçüt ([[bloom-aligned-educational-control-llms|Bloom-aligned educational control, 2026]]). Diğerleri düzeyleri analitik olarak kullanır: [[inquiry-based-learning|sorgu temelli]] bir veri bilimi yazım görevi boyunca LLM'lerle çalışan öğrencileri inceleyen keşfedici bir çalışma, bilişsel düzeyler boyunca dağılmış on dört etkileşim örüntüsü belirlemiştir ([[luo-ibl-patterns-llm-bloom-2026|Luo et al., 2026]]) ve altı modelin değerlendirmesi, sistemlerin olgusal geri çağırma maddelerini iyi, üst düzey maddeleri ise kötü ürettiğini bulmuştur ([[llm-educational-question-cognitive-depth|Wang et al., 2026]]).

## Tasarım ve araştırma için çıkarımlar

- **Etiketi doğrulayın, varsaymayın.** Bir Bloom düzeyini amaçlanan talep hakkındaki bir iddia olarak ele alın ve [[assessment-validity|geçerlilik]] argümanları için kullanmadan önce ampirik madde davranışına karşı denetleyin.
- **Sınıflandırıcı bozulmasını bekleyin.** Bir Bloom sınıflandırıcısı bir derleme göre uydurulur; bu nedenle dağılım içi uyumun yanında dağılım dışı performansı raporlayın ve istem metniyle çalışan [[llm|LLM'leri]] ya da etiketlenmiş hedef alan maddeleri üzerinde yeniden eğitimi tercih edin.
- **Yalnızca ürünü değil süreci değerlendirin.** Ürün makine üretimi olabiliyorsa, değerlendirilebilir kanıt öğrencinin uyguladığı sorgulamaya, uyarlanmaya ve yönlendirmeye kayar.
- **Sözlüğü koruyun, merdiveni bırakın.** Altı düzey, amaçlanan talep için yararlı ortak bir dil olmaya devam eder; alttan üste katı dizi, YZ'nin savunulamaz kıldığı parçadır.
- **Uygun olduğu yerde analitik bir mercek olarak kullanın.** Devredilen işi düzeye göre kodlamak, öğrenenlerin bir sisteme ne devrettiğini betimleyebilir — lisans öğrencilerinin en çok Oluşturma düzeyinde dışarı aktardığı gibi — ancak kodlar öğrenmeyi değil davranışı betimler ([[student-cognitive-offloading-ai-higher-ed-2026|Piatnitckaia et al., 2026]]).

## Yaygın yanlış anlamalar

**“Bir Bloom etiketi bir maddenin ne kadar zor olduğunu söyler.”** 265 matematik maddesi boyunca amaçlanan düzey, zorluktaki varyansın %5'inden azını açıklamıştır. Etiket, ampirik davranışı değil amaçlanan bilişsel talebi betimler.

**“Taksonomi bir piramittir ve öğrenme onu tırmanır.”** Piramit sonradan yapılmış görsel bir kısaltmadır; ne 1956 özgünü ne de 2001 revizyonu bu biçimde çizilmemiştir ve YZ çağı argümanı tam da şudur ki en üstteki bitmiş bir ürün artık tırmanışı kanıtlamamaktadır.

**“YZ artık bilişsel düzeyi güvenilir biçimde sınıflandırabilir.”** Dağılım içi sınıflandırıcı performansı madde kaynağındaki bir değişiklikte ayakta kalmaz ve gerçek soru bankaları üzerindeki YZ–ölçüt uyumu en iyi ihtimalle orta düzeydedir (en güçlü durumda κ = 0,57).

**“Üretken yapay zeka Bloom Taksonomisini geçersiz kılıyor.”** Onun tek bir *kullanımını* — ürünü sürecin kanıtı olarak okumayı — savunulamaz kılıyor. Amaçlanan talep için ortak bir sözlük olarak ve doğrulanacak bir nesne olarak, o hâlâ alanın ortak referans noktasıdır.
