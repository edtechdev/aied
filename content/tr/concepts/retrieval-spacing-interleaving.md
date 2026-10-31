---
title: "Hatırlatma (Retrieval), Aralıklı Tekrar (Spacing) ve Karıştırma (Interleaving)"
created: "2026-10-14T21:30:00-04:00"
type: concept
pedagogy: [desirable-difficulties, metacognition, self-regulated-learning, mastery-learning, prior-knowledge, transfer-of-learning]
foundations: [cognitive-offloading]
technology: [generative-ai, llm]
assessment: [formative-assessment, assessment]
level: [higher ed, k 12]
audience: [instructors, learners, instructional designers]
page_kind: [synthesis]
confidence: high
translation_of: concepts/retrieval-spacing-interleaving
source_updated: "2026-10-25T22:20:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Hatırlatma (retrieval), aralıklı tekrar (spacing) ve karıştırma (interleaving)** — çalışmayı zahmetli hale getiren ve sonuç olarak öğrenileni kalıcı kılan üç somut çalışma tekniği. Hatırlatma uygulaması (retrieval practice), öğrenciden bir cevabı tanımasını değil, hafızasından üretmesini ister; aralıklı tekrar (spacing), bu uygulamayı tek bir oturumda toplu yapmak yerine zaman içinde dağıtır; karıştırma (interleaving), problem türlerini türlerine göre bloklar hâlinde toplamak yerine birbirine karıştırır. Bu üçünü birleştiren ortak bir imza vardır: her biri çalışma *sırasındaki* performansı düşürürken, çalışma *sonrasındaki* öğrenmenin kalıcılığını yükseltir — işte [[transfer-of-learning|performans–öğrenme açığı]] uygulamalî karşılığı budur. Bunlar [[cognitive-psychology]] iş atlarıdır ve [[ai-education|YZ destekli öğrenme]]de talepte karşılık veren bir [[llm|LLM]], istenildiği anda cevap vererek hatırlatma işlemini ortadan kaldırdığı, programı düzleştirdiği ve karışımı düzgünleştirdiği için, bunlar [[generative-ai|üretici YZ]]nin en kolay aşındırdığı somut davranışlardır. Bu sayfa *teknikler* sayfasıdır. Bunların arkasındaki ilke — daha zahmetli çalışmanın neden daha kalıcı öğrenme ürettiğine dair Bjork’un çaba–öğrenme ödünleşimi — [[desirable-difficulties]] sayfasında ele alınmıştır; bu sayfa ise her tekniğin ne olduğunu, derlemin çalışmalarının neyi ölçtüğünü ve YZ’nin bunları nasıl uyguladığını ya da zayıflattığını ele almaktadır.

## Düşünülmesi Gerekenler

- Hiç bir bölümü, tanıdık gelene kadar tekrar tekrar okudunuz, sonra bir hafta sonra açıklayamadınız mı? O tekrar okuma size aslında ne verdi?
- Hatırlatma uygulaması, kontrol etmeden *önce* hafızadan cevap vermek demektir. Bir YZ asistanı bir tuş uzağınızdayken, bu hatırlatmanın gerçekleşebilmesi için çalışma rutininizde neyin doğru olması gerekirdi?
- Aralıklı tekrar sistemleri, incelemeyi bir öğrencinin seçmeyeceği aralıklarda planlar. Yanlış hissedilen bir program bir avantaj mıdır yoksa bir kusur mu?
- Karıştırma, problem türlerini birbirine karıştırır ve bloklamadan daha dağınık hissedilir. Derlem karıştırmaya ilişkin neredeyse hiç doğrudan YZ kanıtı sunmuyorsa, onu benimsemede ne kadar güven duymalısınız — ve kararınızı neye dayandırırdınız?
- [[adaptive-pretesting-retention|Akgun ve Toker (2026)]], bir YZ ile serbestçe sohbet eden öğrencilerin, en iyi ön testten sonra bile en kötü performansı gösterdiğini buldu. Serbest sohbet koşulunda, yapılandırılmış koşulun sahip olduğu ama onun eksik olduğu şey neydi?
- [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]], daha derin LLM sorusunun görev kalitesini artırdığını ancak hatırlamayı artırmadığını buldu. Bu, akıcılığı öğrenmenin kanıtı olarak kullanmak konusunda size ne söylüyor?

## Giriş

Hatırlatma uygulaması, aralıklı tekrar ve karıştırma genellikle birlikte öğretilir ve birlikte anılır, çünkü ayrı ayrı keşfedilmiş olsalar da benzer davranırlar: her biri çalışmanın *nasıl göründüğünü*, ne kadarının kalacağı uğruna feda eder. Bilgi tabanında bunlar [[desirable-difficulties]] ilkesinin örnekleri olarak görünürler; ancak aynı zamanda bağımsız olarak da uygulanabilirler — bir değerlendirici aralıkları planlayabilir, bir özel öğretmen cevabı saklayabilir, bir [[curriculum-design|müfredat]] madde türlerini karıştırabilir, temeldeki teoriye başvurmadan. Uygulamalî karakterleri, bunların [[cognitive-psychology]] ile YZ tasarımı arasındaki doğal köprü olmalarının nedenidir ve aşağıdaki çalışmaların bir yerine iki sonuç ölçütü rapor etme eğiliminde olmalarının nedenidir: çalışma sırasındaki performans ve bir gecikmeden sonraki kalıcılık.

## Test Etkisi: Hatırlatma Uygulaması, Tekrar Okumayı Geçer

Hatırlatma uygulaması — materyali tekrar okumak yerine onu hatırlamayı denemek — hafızayı ek çalışmadan daha fazla güçlendirir ve derlem bu bulguyu yeniden tartışılacak bir konu olarak değil, üzerine inşa edilecek kadar yerleşik olarak ele alır. Öğrenmeyi öğrenmeye ilişkin [[meta-analysis-systematic-review|kapsam derlemesi]], hatırlatma uygulamasını üç katmanlı çerçevesinin (bilişsel ve [[metacognition|üst bilişsel]] becerilerin boyutları, [[self-regulated-learning|öz düzenleme]] süreçleri, hatırlatma uygulaması gibi Araçlar) **Araçlar** katmanına yerleştirir; onu, [[cognitive-offloading|üretici YZ aşırı güvenine]] karşı denge kurmak ve [[agency|öğrenen etkililiğini]] korumak için tasarlanmış, öğrenmeyi öğrenmenin somut ve öğretilebilir bir bileşeni olarak konumlandırır.

Derlemdeki en bilgilendirici test bir ayrışmadır. [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]], bir nöroekonomi örnek görevinde 22 lisansüstü öğrencinin istek metni bazında [[llm]] etkileşimlerini kaydetti ve *derinliği* (açıklama arayan "neden/nasıl/açıkla" istek metinlerinin oranı) hacim ve tempodan ayırdı. Derinlik, bağımsız olarak puanlanan görev kalitesini doğrudan yordadı (β = 6,27, p = ,006) ancak görev sonrası anında hatırlamayla sıfır ilişki gösterdi (β = −0,014, p = ,728); hatırlama kazanımlarını ise temel bilgi düzeyi belirledi. Yazarın verdiği okuma, açıklama geliştirmenin anlamayı, hatırlatmanın ise pekiştirmeyi yönlendirdiği ve YZ destekli çalışmada açık hatırlatma talepleri olmadan öğrencilerin çok azını hatırlamaya ihtiyaç duymadan yüksek akıcılık yaşayabilecekleridir. Bu, bir yokluk olarak ifade edilen bir hatırlatma bulgusudur: mekanizma devreye girmemiş olduğundan kalıcılık sonucu değişmemiştir.

Hatırlatma uygulaması evrensel bir kaldıraç değildir ve derlem bunu açıkça söyler. [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger ve Carvalho (2025)]], 95 katılımcıyla bilgi içeriğini (birebir gerçekler ile genellenebilir beceriler, geometri-alan materyalleri) çalışma programıyla çaprazlayan 2×2'lik bir deney yürüttü. Bir içerik–uygulama etkileşimi buldular (β = 0,41, p = ,038, d = 0,38): saf uygulama testi **gerçekler** için daha yüksek öğrenme kazanımları üretirken, örnek tümleşik uygulama **beceriler** için daha yüksek kazanımlar üretti. Yazarlar ayrıca hatırlatma uygulaması kazanımlarının sık sık tanıdık olmayan problemlere yayılmadığını belirtir. Böylece hatırlatma uygulaması, hedefin belirli bir içerik için hafıza olduğu yerlerde en güçlüdür ve hedefin genellenebilir bir beceri olduğu yerlerde çözümlü örneklerle eşleştirilmesi gerekir — YZ tasarım sonucu olarak da [[intelligent-tutoring]]'in öğrenilen bilgi bileşenine göre örnek-uygulama oranını uyarlaması gerektiğinin nedenididir.

Aynı mantık, kopya kağıdı çalışmasında da işler: [[student-cheat-sheets-make-or-take|Chen, Sakhnini ve Istead]], bir kopya kağıdı *hazırlamayı* lojistik değil, etkin ve üretici bir çalışma stratejisi olarak (seçim, yoğunlaştırma, örgütleme) ele alır ve YZ çağı riskini, bu yapının hazırlanmasının dışa devredilmesi ve onu oluşturmanın sağladığı üst bilişsel provasının kaybedilmesi olarak çerçeveler.

## Aralıklı Tekrar ve Dağıtılmış Çalışma

Aralıklılık etkisi — aynı toplam çalışmanın, tek bir oturumda toplu yapıldığında değil oturumlara dağıtıldığında daha kalıcı öğrenme üretmesi — bu üç teknikten algoritmik olarak en çok kullanılanıdır ve derlemin uygulamalî sistemleri bunun çevresinde kurulmuştur.

[[memdora-ai-spaced-repetition|Memdora]], aralıklılığı bir mühendislik problemi olarak ele alan en açık örnektir. Planlamayı Ebbinghaus unutma eğrisine dayandırır, inceleme yapılmadığında yeni öğrenilen materyalin kabaca **%70'inin 24 saat içinde unutulduğu** rakamini gösterir ve güncel en gelişmiş aralıklı tekrar algoritması olarak tanımlanan **FSRS-6**'yı tümleştirir. Argümanı, planlamanın tek başına yeterli olmadığıdır: mevcut araçlar, kart etkileşimini yazarların yetersiz bir model olarak nitelendirdiği, hatırlatma uygulamasına ilişkin bilişsel bilim kanıtlarından yararlanamayan tek ikili bir hareket olan "çevir ve kendi kendine puanla"ya indirger. Memdora’nın katkısı bu nedenle Dil, Ezbere ve Sınav kategorileri boyunca, her biri hakemli dergilerde yayınlanmış kanıtlarla eşlenen **17 bilişsel temelli etkileşim türünden oluşan bir sınıflandırmasıdır**; ayrıca gerçek bilişsel katılımı telafi eden, uygulamada geçirilen zamana göre değil, çaba temelli bir ödül sistemi, kartları okuma anında oluşturan birleşik bir üretim hattı ve tek tek kart düzeyinde [[learning-gains|öğrenme çıktılarını]] raporlayan bir sınıf katmanıdır.

[[adaptive-pretesting-retention|Akgun ve Toker (2026)]], derlemin aralıklılığın nasıl *yapılandırıldığına** dair en güçlü deneysel kanıtını sağlar. Uygulamalî istatistik dersinde 87 lisans öğrencisinin katıldığı üç kollu bir randomize çalışmada, üç grup da yedi hafta boyunca sayı ve zamanlaması aynı aralıklı oturumlarda çalıştı; yalnızca etkileşim yapısı farklıydı. Uyarlanabilir aralıklı hatırlatma (G1) en yüksek test sonrası puanına (M = 78,19) ve gözlemlenen en yüksek çalışma çabasına (M = 0,85) ulaştı; sabit aralıklı hatırlatma (G2) onu izledi (M = 74,55, çaba 0,74); dayatılan hatırlatma olmadan öğrenci yönlendirmeli YZ çalışması her ikisinde de sonuncu oldu (M = 67,28, çaba 0,49). Çok değişkenli etki anlamlıydı (Wilks' Λ = ,664, kısmi η² = ,185), kalıcılıkta G1, G3'ün d = 0,92 (p = ,003) önüne geçti. Pedagojik olarak önemli olan ayrıntı, G1'in aracısının *saklayacak* biçimde yapılandırılmış olmasıdır: [[misconceptions]] için yanıta bağlı sorgulamalar, yüzeysel cevaplardan sonra açıklama talepleri, yalnızca yeterli kavramsal katılımda ilerleme ve doğrudan çözümlerin izin verilen çıktılarından açıkça çıkarılması. Yazarların kendi okumaları, ön testin bağımsız bir müdahale değil, önceden yüklenen bir katalizör olduğu ve yararlarının açık uçlu YZ erişiminden sağ çıkmadığıdır.

Bir randomize saha deneyi, etkili doz olarak toplu zamana karşı dağıtımı rapor eder: haftalık ustalık, katılan dakikalardan ziyade tamamlanan özel ders haftalarını izledi ve her ek tamamlanmış hafta 55 üzerinden 2,00 puan ekledi (p = ,018) ([[ai-tutor-modality-randomized-field-experiment-2026|Yang, Van Alstyne ve Dellarocas (2026)]]).

Derlemin iki bulgusu daha, aralıklılığın neyi doğru yaptığını ve neleri henüz doğru yapmadığını netleştirir. [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan ve Carvalho (2025)]], altı oturumluk bir biriktirmeli yeniden öğrenme veri kümesine [[knowledge-tracing]] modelleri uydurdu ve BKT, BKT-with-Forgetting ve Additive Factors Model’in, geriye dönük olarak uydurulduğunda öğrenme eğilimlerini yansıttığını (AUC 0,74–0,79) buldu; ancak dağıtılmış bir eğitmenin gerektireceği türden zamana dayalı çapraz doğrulama altında, gelecek performansı sırasıyla kabaca %58, %51 ve %47 fazla tahmin ettiler ve **aralıklılık etkisini yakalayamadı** — bazen aralıklılık koşulları arasındaki sıralamayı ters tahmin ettiler. Başka bir deyişle, [[adaptive-learning|uyarlanabilir sistemler]] tarafından yapılan planlama kararları, aralıklılığın bağlı olduğu etkinin ta kendisini temsil etmeyen modellere dayanıyor olabilir. Ve [[nie-personavlm-long-term-personalization-2026|LLM öğrenci modellemesi ve uzun süreli bellek]] tasarım boşluğunu doğrudan adlandırır: çoğu özel ders sisteminin uzunlamasına belleği yoktur ve bu tür belleğin aralıklı tekrar ve unutma eğrileriyle nasıl etkileşime girmesi gerektiği açık bir soru olmaya devam etmektedir.

### Derlemin henüz göstermedikleri

Hiçbir uygulamalî sistem kendi kalıcılık kanıtını üretmemiştir: Memdora makalesi, geleneksel aralıklı tekrar araçlarına göre artırılmış kalıcılık rapor eder, ancak bu iddianın arkasında gecikmeli aralıklı bir sonuç çalışması tanımlamaz; ve kanıta dayalı hatırlatma ile aralıklı uygulamayı engelleyen içerik üretme maliyetini kaldırmak için otomatik olarak kartlar üreten, planlamayı dereceli SM-2 ve FSRS algoritmaları yerine ikili bir "biliyorum / hâlâ öğreniyorum" puanlamasına basitleştiren iki dilli ders yardımcısı, **hiçbir öğrenme çıktısı çalışmasının yürütülmediğini**, yalnızca önceden kaydedilmiş bir protokolün var olduğunu açıkça belirtir. Planlama makinesi, üretmesi amaçlanan öğrenmeden daha iyi kanıtlanmıştır.

## Karıştırma

Karıştırma — bir çalışma oturumunda problem veya madde türlerini türlerine göre bloklamak yerine birbirine karıştırmak — bu derlemde üçünden en zayıf kanıtlananıdır ve bu, olduğundan fazla büyütülmek yerine açıkça ifade edilmelidir. Karıştırma, [[desirable-difficulties]] sayfasında yalnızca zahmetli koşulların bir listesindeki bir örnek olarak görünür ve bilgi tabanındaki hiçbir çalışma, karıştırma uygulamasını bloklamalı bir kontrol grubuna karşı test etmez.

Derlemin içerdiği şey, komşu ve dikkatlice ayrılması gereken bir konudur. [[simulating-learner-task-selection|Öğrenen görev seçimini benzetme]], **Karıştırma** ve **Bloklama**yı, güçlü hedefleme, zayıf hedefleme ve sonuç temelli kurallarla birlikte, [[mastery-learning]] [[simulation]] sekiz aday öğrenen stratejisinden ikisi olarak modeller. Oradaki bulgu, hafızadan çok seçim mimarisiyle ilgilidir: bazı öğrenen stratejileri, aşırı çalışma yoluyla ilerlemeyi sistematik olarak geciktirir ve görev seçimi kısıtları, uyumsuz stratejileri düzeltirken Karıştırma, Bloklama, Güçlü Hedefleme ve Zayıf Hedefleme’yi sabit aşırı çalışma düzeylerinde bırakmıştır. Bu, karıştırmanın bir sistemin barındırabileceği veya kısıtlayabileceği bir *seçilebilir davranış* olduğuna dair kanıttır — karıştırmanın kalıcılığı artırdığına dair kanıt değildir. Derlemdeki kalan anıntılar, sözün ilgisiz anlamlarıdır ([[knowloop-confusion-to-consolidation-2026]] içinde ara devrelerle karıştırılmış aracı aşamaları; bir geometri [[benchmark]] karıştırılmış görsel-metinsel çözüm yörüngeleri) ve bunlar karıştırma kanıtı olarak sayılmamalıdır.

Karıştırma’nın buradaki yerinin dayanağı bu nedenle, diğer iki teknikle aynı teorik aile ve [[cognitive-psychology]] literatüründeki konumudur, bu bilgi tabanındaki bir çalışma değil. Onu açık yuva olarak ele alın.

## YZ Bu Teknikleri Nasıl Uygular ve Zayıflatır

**Uygulama.** YZ’nin en savunulabilir katkısı, bu tekniklerin sıkıcı olan, pedagojik olarak ilgi çekici olmayan kısımlarıdır: planlama ve üretim. Uyarlanabilir planlama, Memdora’da FSRS-6 ile ve zaman içinde ustalığı tahmin eden bilgi izleme mimarilerinde uygulanır; uyarlanabilir *ön test*, önceki oturum performansı sinyallerini okuyarak zayıf alanlarda kavramsal derinliği yükseltirken güçlü alanlarda zorluğu koruyan Akgun ve Toker’ın yanıta bağlı aracısıyla uygulanır; otomatik kart ve ön test üretimi, kart içeriği hazırlamanın zaten aralıklı uygulamayı engelleyen maliyet olduğu iki dilli ders yardımcısında uygulanır. [[nie-personavlm-long-term-personalization-2026|Uzunlamasına öğrenci belleği]], bunların herhangi birinin dönemler boyunca sürmesini sağlayacak mimaridir ve [[agentic-ai-pedagogical-best-practice-2026|Woollaston ve arkadaşları (2026)]], bunu bilinçli biçimde yapmak için tasarım sözlüğünü sağlar: kasıtlı sürtünme, dinamik [[scaffolding]], [[human-in-the-loop-ai|insan-denetime tabi]] gözetim ve azami değil, göz önünde bulundurulmuş YZ kullanımı.

**Zayıflatma.** Başarısızlık biçimi somut ve tekrar tekrar belgelenmiştir. [[agentic-ai-pedagogical-best-practice-2026|Woollaston ve ark. (2026)]], altı [[pedagogy|pedagojik]] risklerinin birincisine önceden bilgi etkinleştirme adını verir: içerik önceden getirip sunan [[agentic-ai|aracılar]], **ön bilgiyi etkinleştiren hatırlatma uygulamasını atlar**, böylece öğrenci bir cevap almadan önce bildiklerini asla hatırlamaz veya tümleştirmez. [[prior-knowledge]], aynı atlama riskini [[generative-ai|üretici YZ]]'nin genel bir özelliği olarak belirtir ve tasarım karşı önlemini ekler — sağlamadan önce etkinleştirin. Akıcılık yanılsaması, öğrenci tarafındaki mekanizmadır: bir LLM talepte karşılık tam ve tutarlı açıklamalar sunar, böylece öğrenci içsel hatırlama ve yeniden yapılandırmaya daha az çaba ayırırken oturum *verimli hissedilir* — ki bu tam olarak [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]]'nin ölçtüğü ayrışmadır. Üç kollu ön test çalışması aynı noktayı deneysel olarak ortaya koyar: serbest YZ erişimi ve dayatılmış hatırlatma içermeyen kol, dönem sonu kalıcılıkta en kötü performansı gösterdi ve etkileşim hacmi kollar arasında anlamlı biçimde farklılık göstermedi, böylece açık öğrencilerin ne kadar katıldığından çok yapı tarafından üretilmiştir.

**Hatırlatma talebini koruma.** Derlem, küçük bir tasarım özellikleri kümesinde birleşir. Ön test aracısının politikası en somut olanıdır: doğrudan çözümleri yapılandırma yoluyla saklamak, yanlış kanıları sorgulamak, yüzeysel girişimlerden sonra açıklama talep etmek ve yalnızca yeterli kavramsal katılımda ilerlemek. Tsiligkiris, LLM kullanımından *sonra* kapalı araç çıktıları yoluyla hatırlatma taleplerini gömmeyi önerir — kısa cevaplı sorular, hafızadan çizilmiş kavram haritaları, model olmadan [[learning-by-teaching|öğreterek öğrenme]] açıklamaları — ve iskelelemeyi kontrolden ayırmak, böylece model açıklama ve [[feedback]] için kullanılabilir olurken farklı kontrol noktaları bağımsız hatırlama gerektirir. [[knowloop-confusion-to-consolidation-2026|KnowLoop]], dağıtılmış bir sistemde öğreterek öğrenme biçimini gösterir: bir Akran aracısı, öğrenenlerin ifade edemediği boşlukları ortaya çıkaran yansıtıcı öğreterek öğrenmeyi iskeleyeler ve katılımcılarından açıklama ile pekiştirme arasında katı aşamalar gibi değil akıcı biçimde gezinmelerini istemiştir. [[student-cheat-sheets-make-or-take|Chen, Sakhnini ve Istead]], değerlendirme tarafındaki karşılığını ekler — yapının ta kendisinden ziyade hazırlama sürecine değer vermek — [[learning-to-learn-in-the-age-of-generative-ai-a-scoping-review-and-conceptual-fr|Schorr ve arkadaşları (2026)]] ise bu araçları, aşırı güveni azaltan ve [[agency|öğrenen etkililiğini]] destekleyen öğrenilebilir beceriler olarak konumlandırır. Bunların hepsinin altında tek pazarlık dışı olan şey yatar: bir şey, öğrencinin modelin önceden vermediği bir cevabı üretmesini gerektirmelidir.

## Kanıtların Sınırları

- **Küçük örneklemler ve tek bağlamlar.** Ön test çalışmasının analitik örneklemi, tek bir uygulamalî istatistik dersinde 89 lisans öğrencisinden oluşur, kollar başına 27–34 öğrenci vardır; LLM etkileşim çalışması n = 22 ile tek gruplu bir tasarıma sahiptir ve nedensel bir iddiayı desteklemez; öğreterek öğrenme çalışması 22 katılımcıya sahiptir. Ön test yazarları, genellenebilirlik için alanlar ve görev türleri boyunca tekrarlanma gerektiğini belirtir.
- **Kısa veya hiç olmayan kalıcılık aralıkları.** Etkileşim derinliği çalışması yalnızca anında hatırlamayı test etti, gecikmeli bir ölçüm yoktur, böylece sıfır bulgusu özellikle kısa dönem kalıcılık için bir sıfır bulgusudur. Memdora’nın kalıcılık avantajı ve [[llm-interaction-depth-task-quality-recall-2026|LLM derinliği ayrışması]] da, aralıklılık literatürünün gerektireceği haftalar boyunca izlenmez; ön test çalışmasının yedi haftalık penceresi derlemin en uzunudur.
- **[[self-report-measures|Öz bildirim]] ve vekil ölçümleri.** Ön test çalışmasındaki çalışma çabası, konuşma kayıtlarına karşı bir derecelendirme anahtarına göre iki puanlayıcı tarafından puanlanan davranışsal bir göstergedir; yazarların açıkça belirttiği gibi bu, içsel [[motivation|motivasyonel]] durumun bir ölçüsü değildir. LLM derinliği ölçüsü, açıklama aramanın yüzeysel biçimini yakalayan, kalite yerine anahtar kelime temelli bir vekildir.
- **Ölçümleme ve modelleme sınırları.** Derlemdeki [[knowledge-tracing]] modelleri, tam olarak aralıklılık kararlarının gerektiği yerde başarısız olur ve yazarlar geçmiş başarıları, dağıtım gerçekçisi doğrulama yerine geriye dönük tüm veri kümesi uydurmasına bağlar. İki dilli yardımcının kart kalitesi, temel gerçekliğe karşı doğrulanmamıştır, otomatik olgu kontrolü katmanı yoktur ve hiç sonuç çalışması yürütmemiştir.
- **Karıştırma burada neredeyse hiç doğrudan kanıt içermez.** Yukarıda belirtildiği gibi, derlem bloklamalı-karıştırmalı hiçbir karşılaştırma içermez, yalnızca Karıştırma’nın birkaç strateji arasından biri olduğu bir benzetim vardır.
- **Konu olunan kitleler ve içerik.** Kanıt tabanı, [[higher-ed|yükseköğretimde]], STEM ve istatistik materyalinde ve geometri ile çoklu regresyon içeriğinden gerçek-beceri ayrımlarında yoğunlaşır; [[k-12|K-12]] ortamlarına, [[humanities-education|beşeri bilimlere]] ve yazmaya ve Batı dışı sınıflara genelleme, bu çalışmalarla kurulmamıştır.

## Yaygın yanlış anlamalar

**“Daha iyi YZ sorgulaması daha iyi hatırlama üretir.”** Daha iyi iş üretir. [[llm-interaction-depth-task-quality-recall-2026|Tsiligkiris (2026)]], daha derin LLM sorgulamasının bağımsız olarak puanlanan görev kalitesini iyileştirdiğini (**β = 6,27, p = ,006**) ama **anlık son-test hatırlamasıyla boş bir ilişki (β = −0,014, p = ,728)** gösterdiğini, hatırlama kazanımlarının ise bunun yerine başlangıç bilgisi tarafından sürüklendiğini buldu. Eserin niteliği ile belleğin dayanıklılığı farklı sonuçlardır ve daha iyi diyalog birincisini hareket ettirip ikincisini yerinden oynatmaz.

**“Tek bir en iyi uygulama biçimi vardır.”** Biçim, neyin öğrenildiğine bağlıdır. Bir içerik–uygulama etkileşimi (**β = 0,41, p = ,038, d = 0,38**) **saf pratik testinin olgular için daha yüksek kazanımlar** ürettiğini, **örnek bütünleşmeli pratiğin ise beceriler için daha yüksek kazanımlar** ürettiğini gösterir. Her şey için geri çağırma pratiği ya da her şey için çözümlü örnekler reçete etmek, materyalin yarısını yanlış ele alır.

**“Geri çağırma pratiği test demektir ve her test sayılır.”** Mekanizma, bir yanıtı tanımak değil bellekten üretmektir; çoktan seçmeli bir tanıma görevinin aynı etkinliğin daha zayıf bir sürümü olmasının nedeni budur. Sonsuz tanıma maddesi üreten bir YZ, doğru adı ve yanlış mekanizmayı taşıyan etkinlik üretmiştir.

**“YZ bu teknikleri sadakatle uygulayabilir, çünkü iyi belirtilmişlerdir.”** Onları sessizce de bozabilir. Aralık, sistemin talep üzerine sağlamaya en yetenekli olduğu materyali geri tutmasını gerektirir; geri çağırma ise yanıt vermemesini. Dolayısıyla tekniğin etkililiği, uysal bir asistanın dayatmak için hiçbir teşviki olmayan kısıtlamalara bağlıdır.

## Bağlı kavramlar

- [[pedagogical-patterns]] — Aralıklı hatırlatma dizileri ve kodlama sırasında yardım etmenin kalıcılık maliyeti
- [[desirable-difficulties]] — bu üç tekniğin uygulamaya koyduğu ilke
- [[cognitive-psychology]] — hafıza, kodlama ve hatırlatma, üçünün de teorik yuvası
- [[prior-knowledge]] — hatırlatma uygulaması, öğrencinin sahip olduğunun etkinleştirilmesi olarak
- [[metacognition]] — akıcılığın öğrenmeyi yansıtıp yansıtmadığını yargılamak
- [[self-regulated-learning]] — bir YZ’nin sizin için planlayabileceği veya cevaplayabileceği şeyi istikrarlı biçimde çalışmak
- [[mastery-learning]] — ustalık eşiğinden sonraki kalıcılık ve onu sürdüren aralıklılık
- [[knowledge-tracing]] — planlama kararlarını doğru ya da yanlış yapan modeller
- [[cognitive-offloading]] — hatırlatmanın bir araca devredildiğinde ortaya çıkan başarısızlık biçimi
- [[transfer-of-learning]] — tekniklerin ele aldığı performans–öğrenme açığı
- [[formative-assessment]] — kapalı araç kontrol noktaları, hatırlatma olayları olarak
- [[productive-failure]] — yardım almadan önce denemek
- [[learners]] — akıcı değil kalıcı öğrenmenin neyin hesaba katıldığı

## Bağlı makaleler

- [[adaptive-pretesting-retention]] — Akgun & Toker: yedi hafta boyunca uyarlanabilir aralıklı hatırlatma, sabit hatırlatma ve öğrenci yönlendirmeli YZ
- [[memdora-ai-spaced-repetition]] — Memdora: FSRS-6 planlaması ve kanıta dayalı kart etkileşimlerinin sınıflandırması
- [[llm-interaction-depth-task-quality-recall-2026]] — Tsiligkiris: açıklama derinliği görev kalitesini ama anında hatırlamayı yordamıyor
- [[rachatasumrit-example-problem-ratio-2026]] — Gerçekler için hatırlatma uygulaması, beceriler için çözümlü örnekler; içerik–uygulama etkileşimi
- [[schuetze-knowledge-tracing-forgetting-2026]] — Bilgi izleme modelleri, zamana dayalı doğrulamada aralıklılık etkisini yakalayamıyor
- [[bilingual-llm-lecture-companion-srl-2026]] — Aralıklı uygulamanın içerik üretme maliyetini kaldıran otomatik kart üretimi
- [[student-cheat-sheets-make-or-take]] — Kopya kağıdı hazırlamayı üretici çalışma olarak görmek; hazırlamayı YZ ile dışa devretmek
- [[knowloop-confusion-to-consolidation-2026]] — Açıklamanın ortaya çıkarmadığı boşlukları gün yüzüne çıkaran öğreterek öğrenmeyle pekiştirme
- [[simulating-learner-task-selection]] — Görev seçimi kısıtları altında modellenen öğrenen stratejileri olarak Karıştırma ve Bloklama
- [[nie-personavlm-long-term-personalization-2026]] — Uzunlamasına öğrenci belleği ve aralıklı tekrar ile unutma eğrileriyle açık ilişkisi
- [[learning-to-learn-in-the-age-of-generative-ai-a-scoping-review-and-conceptual-fr]] — Öğrenmeyi öğrenme çerçevesinin Araçlar katmanında hatırlatma uygulaması
- [[agentic-ai-pedagogical-best-practice-2026]] — Önceden içerik getiren aracılar hatırlatma uygulamasını atlıyor; kasıtlı sürtünme durumu
- [[ai-tutor-modality-randomized-field-experiment-2026]] — YZ Özel Öğretmenler Konuştuğunda: Bir Randomize Saha Deneyinden Kanıtlar
