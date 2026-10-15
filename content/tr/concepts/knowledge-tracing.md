---
title: Bilgi İzleme
created: "2026-10-14T21:45:00-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Bilgi izleme** — alıştırmalardaki performansı izleyerek ve gelecekteki yeterliliği öngörerek öğrenenlerin zaman içinde ne bildiğini modellemek. Bilgi tabanının en zengin modelleme dizisi olup, öğrenci bilgisinin gelişimi sırasında izlenmesine yönelik Bayes, derin öğrenme ve [[llm|LLM ile güçlendirilmiş]] yaklaşımları kapsar.

## Değerlendirilmesi Gereken Sorular

- Bilgi izleme, alıştırmalardaki performansınızdan zaman içinde ne bildiğinizi modelleyerek bilginin ne zaman kazanıldığını ve ne zaman zayıfladığını izler. Cevaplarınız, bir şeyi gerçekten “biliyor” olmanız ile yalnızca bu sefer doğru yapmış olmanız arasındaki fark hakkında ne ortaya çıkarabilir?
- Sayfa, “yeterlilik doğruluk değildir” konusunda uyarır — gizli bir koşul ihlal edildiğinde bir öğrenci yeterli görünebilir ama bir beceriyi sistematik biçimde yanlış uygulayabilir. Birinin (ya da sizin) bir şeyi anlamış gibi göründüğünü ama aslında anlamadığını ne zaman gözlemlediniz?
- Bilgi izleme, sırada ne öğretileceğine karar veren uyarlanabilir sistemleri besliyorsa, model doğru cevapları gerçek yeterlilikle karıştırıp bir öğrenciyi çok erkende ileri taşıdığında ne yanlış gider?
- Bilgi izleme birçok biçimde gelir — Bayes, sinir ağı, hipergrafik, diyalog temelli, LLM ile güçlendirilmiş. Açıklayabileceğiniz şeffaf bir model ile güçlü ama opak bir model arasında nasıl ödünleşimler beklemelisiniz?
- Sayfa bilgi izlemeyi simüle edilmiş öğrencilere bağlar — izlemenin normalde gerçek verilerden çıkardığı bilgi durumlarını üretir. Öğrenenleri simüle etmek, bir özel ders asistanı gerçek öğrencilerle karşılaşmadan önce nasıl sınanmasına yardımcı olabilir?
- Bilgi zaman içinde zayıfladığına göre, uyarlanabilir bir sistem, bir öğrencinin unuttuktan sonra geçmişteki “yeterliliğiyle” ne yapmalıdır? Bilginin kalıcı olduğunu varsaymak yerine unutma için nasıl tasarım yapardınız?

## Giriş

Bilgi izleme, ham alıştırma yanıtlarını bir öğrencinin neyi öğrendiği ve neyi öğrenmeye hâlâ ihtiyaç duyduğuna dair tahminlere dönüştürür. Basit doğruluk izlemesinin aksine, bilgi izleme öğrenmenin zamansal dinamiğini modelleme yapar — bilginin ne zaman kazanıldığını, ne zaman zayıfladığını ve kavramların birbirleriyle nasıl ilişkili olduğunu.

### Bilgi tabanında yer alan yaklaşımlar

- **Bayes yaklaşımları:** [[stanbkt-bayesian-knowledge-tracing]] BKT uygulamalarını standartlaştırır; [[mbp-kt-meta-behavioral-knowledge-tracing]] ise üst-davranışsal sinyalleri dâhil eder
- **LLM gözlem fonksiyonu ile yumuşak kanıt BKT:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He ve ark., 2026)]] BKT yapısını korur ama standart BKT’nin girdisi olan ikili doğru/yanlış gözlemini sürekli bir gözlemle değiştirir: bir [[llm]] puanlayıcı derecelendirilmiş yeterlilik kanıtı artı bir güven ağırlığı üretir, bunlar güvenle küçültülmüş bir posteriora harmanlanır ve açıkça yanlış bir cevabın tahmini yükseltemeyeceği şekilde kapılanır; bu da güncellemeyi standart BKT’nin katı bir indirgemesi olmaktan çok onu genelleştiren bir varyant haline getirir. Bu gözlem fonksiyonunun güvenilir olup olmadığı öğrenene bağlıdır: ortalama kanıt yetenek kademelerini temiz biçimde ayırdı (0,25 zayıf / 0,67 karışık / 0,77 güçlü) oysa kademe içinde gerçek yeterlilikle korelasyon yalnızca r ≈ 0,15 / 0,48 / 0,41 kadardı; bu da izlenen durumu öğrenen hakkında kalibre edilmiş bir ölçümden çok bir ajanın inancı olarak bırakır.
- **Sinir ağı ve hibrit modeller:** [[neural-symbolic-knowledge-tracing]] simgesel akıl yürütmeyi [[machine-learning|sinir ağlarıyla]] birleştirir; [[explainable-probabilistic-kt]] yorumlanabilir olasılıksal modelleri ileriye taşır
- **Hipergrafik bellek ağları:** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] bellek temelli izlemeyi (DKVMN) zamansal hipergrafik akıl yürütmesiyle güçlendirerek çok becerili sorularda birlikte görülen kavramlar arasındaki dinamik yüksek mertebeli etkileşimleri modeller
- **Diyalog temelli BT:** [[huang-interpretable-knowledge-tracing-2026]] bilgi izlemeyi konuşma tabanlı özel derse uyarlar
- **LLM ile güçlendirilmiş:** [[xie-hillm-cd-2026|HiLLM-CD]] otomatik kavram ağacı oluşturma ve hiyerarşik yeterlilik çıkarımı için LLM’lerden yararlanır
- **Anlamsal, öneri odaklı BT:** [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec (Ozyurt, Almaci, Feuerriegel ve Sachan, 2025)]] mimariden çok *girdiyi* temellendirir: bir LLM her soruyu Matematik İçin Ortak Çekirdek Standartlarına uygun çözüm adımları ve bilgi kavramlarıyla etiketler, karşıt öğrenme soru, çözüm adımı ve kavram yerleştirmelerini hizalar (“bir çubuk grafiği yorumlama” ve “bir çubuk grafiğinden bilgi okuma” gibi kavram varyantlarının ön kümelenmesiyle yanlış negatifler ayıklanır) ve bir KC-kalibrasyon kaybı, izleyicinin o kavramdaki her soru üzerinde modeli çalıştırarak çıkarmak yerine doğrudan kavram düzeyinde bir bilgi durumu öngörmesini sağlar. Kalibre edilmiş izleyici, alıştırma önerisi için pekiştirmeli öğrenme ortamı olarak hizmet eder; burada model temelli bir değer tahmini eleştiriyi izleyicinin kendisinden başlatır. 2.048 sınama öğrencisi üzerinde ortalanan XES3G5M’deki dört görevde RL olmayan taban çizgileri marjinal ya da negatif bilgi kazanımları verdi, değer temelli sürekli yöntemler politika temelli olanları yendi ve model temelli değer tahmini bunları tutarlı biçimde iyileştirdi — en keskin biçimde her adımda hedefin değiştiği en zayıf kavram görevinde. Bildirilen kazanımlar öğrenme çıktıları değil, azami bilgi iyileşmesinin yüzdesidir; işlem hattı ayrıca izleyicinin kalitesini devraldığı üretilen çözüm adımlarına bağlıdır.
- **Çıktı temelli bilgi izleme (OKT):** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh ve ark. (2026)]], Sonuç Temelli Eğitim sistemlerinde öğrenci bilgisini izler; bunu **kurs çıktılarını bilgi kavramlarının kendisi olarak** ele alarak ve kurs ile program çıktıları arasındaki uzman doğrulamalı OBE “yakınlık eşlemelerini” dikkat ya da grafik kaynaklı kavram ilişkilerinin yerine koyarak yapar. Bir Bellek Güçlendirilmiş Sinir Ağı (MANN), her bir çıktının kazanımının diğerlerini nasıl etkilediğini modeller; alana uyarlanmış BERT ince ayarı çıktı yerleştirmelerini zenginleştirir (LSTM’yi geçen bir GRU omurgasıyla). Canlı [[engineering-education|mühendislik]] programı LMS verisi üzerinde (2.416 öğrenci, 966 çıktı) OKT %89,81 AUC’ye ulaştı — DKT, DKVMN, EKT ve SimpleKT’yi geride bıraktı — oysa ASSISTments’ta yalnızca rekabetçi sonuçlar verdi; bu da avantajın OBE’ye özgü [[curriculum-design|müfredat]] yapısına bağlı olduğunu doğrular.

- **Tek bir yenilik ölçeği, bir dizi modelinin satın aldığının çoğunu yakalar.** 8.996 Fin öğrencisinden gelen 1.927.265 matematik yanıtı üzerinde, yalnızca madde kimliği AUC .8362’ye ulaşmış; madde zorluğuna göreli tek bir yenilik ölçütü eklemek bunu .8669’a yükseltmiş ve sorgu koşullu bir transformer’ın .8690 kazançının %93,5’ini geri kazanmış; oysa geçmişin 128 boyutlu bir özeti yalnızca .8687’ye ulaşmıştır ([[knowledge-tracing-compression-math-2026|Lahtinen ve McMullen (2026)]]).

- **Yalnızca anlık görüntüye dayalı izleme.** [[skill-acquisition-without-temporal-info|Nagai ve ark. (2026)]], öğrenenlerin beceri kümeleri arasındaki kapsama ilişkilerinden yalancı-zamansal bir sıra çıkarır; genişleyen beceri kümelerini öğrenme ilerleyişi olarak ele alır, böylece tek zaman noktalı anlık görüntüler izlenebilir kalır — ancak formülasyon becerilerin asla kaybolmadığını varsaydığından, gerileyen öğrenenlere yönelik uygulamalar önce açık bir unutma mekanizmasına gereksinim duyar.

### Diğer kavramlarla ilişki

Bilgi izleme, [[student-modeling]] ile yakından ilişkilidir — bilgi izleme özellikle zaman içinde bilişsel bilgiyi modellerken, öğrenci modellemesi bir öğrenenin tüm yönlerini ([[affective-computing|duygusal]] durum, [[student-engagement|katılım]], tercihler) temsil etmenin daha geniş uygulamasıdır. Bilgi izleme, sırada ne öğretileceğini bilmesi gereken [[adaptive-learning]] ve [[personalized-learning]] sistemlerine ve yeterlilik tahminlerini uygun soruları seçmek için kullanan [[intelligent-tutoring]] platformlarına beslenir. Gösterge paneli ve müdahale tasarımı için [[learning-analytics]] ile, ince ayarlı beceri [[assessment]] için [[cognitive-diagnosis]] ile bağlantılıdır. Bilgi izleme yapıları ayrıca [[simulating-students|simüle edilmiş öğrencileri]] de besler — bir simüle edilmiş öğrenenin bilişsel durumu çoğu zaman bilgi izlemenin modellediği aynı yeterlilik/zayıflama dinamiğiyle biçimselleştirilir; böylece [[simulation]], izleme yöntemlerinin normalde gerçek yanıt verisinden *çıkardığı* bilgi durumlarını *üretmenin* bir yoludur.

**Bir kapsam uyarısı: izleme alan yeterliliğini tahmin eder, üst düzey bilişi değil.** 127 akıllı özel ders çalışmasının 15 yıllık bir incelemesi, Bayes ve derin öğrenme temelli izlemenin bu dönemde geliştiğini ama üst düzey bilişsel süreçleri, üst bilişi ya da motivasyonu — uyarlanabilir bir sistemin hedeflemesine en çok gereksinim duyacağı durumları — hâlâ modelleyemediğini bulur ([[zerkouk-comprehensive-review-its-2025|Zerkouk ve ark. (2025)]]).

**Bir uyarı: yeterlilik doğruluk değildir.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren ve Stamper (2026)]], BKT’nin iki durumlu (öğrenilmiş/öğrenilmemiş) varsayımının *aldatıcı aşırı genelleme* ile ihlal edilebileceğini gösterir — öğrenenler yeterli görünebilir ama gizli bir uygulama kısıtı ihlal edildiğinde bir beceriyi sistematik biçimde yanlış uygulayabilir. Bu durum, yeterlilik tahminleri [[adaptive-learning|uyarlanabilir]] durdurma kurallarını yönlendirdiğinde yalnızca eylem doğruluğunu değil, koşullu anlayışı (bir eylemi *ne zaman geri tutacağını* bilmek) izlemeyi savunur.

**İlgili bir uyarı, izleme modellerinin *nasıl* doğrulandığı ile dağıtıldığıyla ilgilidir.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan ve Carvalho (2025)]], BKT, BKT-with-Forgetting ve Additive Factors Model’i çok oturumlu bir ardışık yeniden öğrenme veri kümesine uydurdu ve bunların tüm oturumlara geriye dönük uydurulduğunda öğrenme eğilimlerini yeniden ürettiğini buldu (kabul edilebilir AUC ≈ 0,74–0,79); ancak **zamana dayalı çapraz doğrulama** altında — bir oturumda eğitip sıradakini öngörmek, yani gerçekçi uygulama ortamı — üçü de gelecek performansını yaklaşık %47–58 abartıyor, [[desirable-difficulties|aralık etkisini]] yakalayamıyor ve hatta alıştırma koşulları arasında yanlış sıralamayı öngörebiliyor. İlginç biçimde, açık bir unutma mekanizmasına *sahip olmayan* modeller, oturumlar biriktikçe unutma ile güçlendirilmiş sürümler kadar iyi performans gösterdi; bu da unutmanın gerçekten modellenmekten çok diğer parametrelere (örneğin AFM’de öğrenci başına kesişimler) kısmen emildiğini düşündürüyor. Yazarlar bunu öğrenme–performans ayrımına bağlar: popüler modeller, anda yüksek performansı uzun vadeli kalıcılık olasılığının yüksekliğiyle birleştirir. Pratik sonuç, geriye dönük uyuma iyi görünen bir izleyicinin, yeterlilik tahminlerini tüketen uyarlanabilir sistemleri yanıltabileceği; bu da ileriye doğru yürüyen değerlendirmeyi ve kalıcılık aralığını, aralıklamayı ile oturumlar arası unutmayı hesaba katan modelleri savunur.

**İleri bir uyarı, güncellemeyi besleyen kanıt kuralıyla ilgilidir.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]], özdeş ASSISTments 2012–13 olay dizileri üzerinde dört güncelleme kuralını çalıştırdı; bunlar yalnızca yardımla tamamlanan satırların nasıl puanlandığında farklılaştı, 12.716 öğrenci ve 985.813 puanlanmış olaydan oluşan doğrulayıcı yarı üzerinde. İpucu alınan ya da yeniden denenmiş bir satırın başarısız ilk deneme olarak okunması, sonraki yardımsız performansı en iyi öngördü (toplanmış AUC 0,658); herhangi bir tamamlamaya kredi vermek en kötü öngörüyü verdi (0,604), yalnızca beceri zorluğunu bilen bir sabitten zar zor yüksekti (0,595). Aynı seçim yeterlilik sayımını da yönetir: tamamlamalara kredi vermek 113.428 öğrenci–beceri çiftinin %93,9’unu yeterli ilan etti, katı kural altında %72,8’e karşılık; hoşgörülü kuralın katı kuralın önünde ilan ettiği çiftler, iki kuralın hemfikir olduğu yerlerde %85,7’ye karşılık %70,9 yardımsız doğruluğa ulaştı ve bu da 0,744 temel oranın altındadır. Dolayısıyla izlenen bir durum kısmen yalnızca öğrenenin değil, puanlama uzlaşımının da bir fonksiyonudur; bir [[adaptive-learning|uyarlanabilir]] kapı tarafından tüketilen yeterlilik tahmini, onu üreten kuralı da taşımalıdır.

**Bir yetenek uyarısı: genel dil modelleri bilgiyi sıradan bir taban çizgisinin zar zor üzerinde izler.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden ve ark. (2026)]], FoundationalASSIST’i yayımladı; bu veri kümesi önceki izleme veri kümelerinin attığı tam soru metnini, öğrencilerin fiilen verdiği yanıtları ve çeldirici seçeneklerini geri getirir ve dört sınır ötesi [[llm|LLM]]’yi sıfır-atımlı izleyici olarak sınadı. En iyisi olan GPT-OSS-120B, her zaman doğru öngören bir kuralın zaten %51,3 puan aldığı duruma karşılık %56,2’ye ulaştı (AUC-ROC 0,559), daha uzun geçmişlerden iyileşme olmadan; Llama-3.3-70B ise bir öğrencinin doğru yanıtladığı hallerde %85,4 oranında haklı çıktı ama hata yaptığında yalnızca %12,6 — hazır bir modelin anlayıştan çok iyimserliği izlediğine dair kanıt; dolayısıyla bir izleyicinin görünür becerisi, görevin izin verdiği sıradan taban çizgisine karşı okunmalıdır.
- **Tek geçişli bir LLM, herhangi bir öğrenci kaydedilmeden önce bilgiyi izleyebilir.** Hedef platform verisi olmadan tek tipli soru olarak sorgulandığında Jev, 8 öğrenci üzerinde eğitilmiş 28 derin izleme modelinin en iyisinden (.689) yüksek ortalama .706 AUC’ye ulaştı ve denetimli izleme 64–128 öğrencide yetişene kadar önde kaldı ([[system-one-llm-knowledge-tracing-2026|Lee ve Park, 2026]]).

## Bağlı kavramlar

- [[learners]] — Öğrenenler: öğrenen tarafı kavramlar için şemsiye
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — destek kararlarını besleyen ince ayarlı yeterlilik tahmini

## Bağlı makaleler

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Aldatıcı aşırı genelleme: uyarlanabilir yeterlilik, öğrenenler bir eylemi ne zaman geri tutacaklarını bilmeden pratiği durdurabilir (An, McLaren ve Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Dinamik Alanlar için Grafik Temelli Akıllı Özel Ders (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Yakınlık eşlemesi ile çıktı temelli bilgi izleme
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — KC-kalibreli durumlarla anlamsal olarak temellendirilmiş izleme, öneri için bir RL ortamı olarak kullanılır
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: İnsan–YZ Ortak Öğrenme Döngüsünde Öğrenenisini Öğrenen Bir Ajan Tabanlı Özel Ders Asistanı
- [[crediting-assisted-work-inflates-mastery-2026]] — Yeterlilik iddiasını hangi kanıt kuralı belirler (Srivastava 2026)
- [[system-one-llm-knowledge-tracing-2026]] — Tek geçişli bir LLM, 8 öğrenci üzerinde eğitilmiş derin modelleri, maliyetin bir bölümüyle geçer (Lee ve Park 2026)
- [[knowledge-tracing-compression-math-2026]] — Matematik bilgi izlemede öğrenci geçmişini sıkıştırmak
