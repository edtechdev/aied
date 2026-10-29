---
title: Ağ Analizi
created: "2026-10-14T21:40:00-04:00"
type: concept
technology: [knowledge-graph, learning-analytics]
confidence: high
methods: [network-analysis, research-methods-aied]
translation_of: concepts/network-analysis
source_updated: "2026-10-04T10:50:04-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Ağ analizi** — varlıkları (insanlar, kavramlar, eylemler veya kodlar) ilişkileri ya da geçişleri temsil eden **kenarlar** (edges) üzerinden birbirine bağlanmış **düğümler** (nodes) olarak modelleyen, ardından ortaya çıkan ağın yapısını ve dinamiğini; frekans sayımlarına ya da ikili karşılaştırmalara görünmez olan örüntüleri ortaya çıkarmak için inceleyen [[research-methods-aied|araştırma yöntemleri]] ailesi. Eğitimde yapay zeka araştırmalarında ağ analizi; öğrenenler ile YZ araçları arasındaki etkileşim örüntülerini haritalamak, bilginin veya söylem öğelerinin nasıl birlikte ortaya çıktığını modellemek ve davranışların zamansal dizilerini izlemek için kullanılır. Ayrıt edilebilir varyantları içerir — **Epistemik Ağ Analizi** (ENA, kodların/oluşumların birlikte ortaya çıkışını modelleme), **Sosyal Ağ Analizi** (SNA, insanlar arasındaki ilişkileri modelleme) ve **Geçiş Ağı Analizi** (TNA, durumların zamansal dizilerini modelleme) — bunlardan her biri "öğrenmeyi bağlantı olarak" anlamlandırmayı farklı biçimde işlevsel kılar. ([[tracing-genai-literacy-interaction-patterns]]) ([[penny-transition-network-analysis-efl-writing-2026]]) ([[misiejuk-cognitive-offloading-prompting-2026]])

## Dikkate Alınması Gereken Sorular

- Eğitimde "ağ analizi" ifadesini duyduğunuzda aklınıza hangi imgeler geliyor — öğrencilerin arkadaşlık haritaları, fikirler arasındaki bağlantılar ya da başka bir şey? Bunlar, şeylerin ne sıklıkla ortaya çıktığını saymaktan nasıl farklı?
- Diyelim ki öğrencilerin bir YZ yazma aracının geri bildirimini gerçekten kullanıp kullanmadığını yoksa yalnızca cevapları mı aldığını öğrenmek istiyorsunuz. Bir eylem dizisinin — örneğin bir düzeltme döngüsü ile bir sohbet döngüsü — ortaya çıkaracağı hikâyeyi, "kaç kez tıkladılar" biçiminde bir ölçüt neden ıskalayabilir?
- Sayfa, Epistemik, Sosyal ve Geçiş ağı analizlerini birbirinden ayırıyor. Ayrıntıları bilmeden, (a) insanların nasıl işbirliği yaptığını, (b) öğrenen akıl yürütmesinde hangi fikirlerin birlikte ortaya çıktığını ve (c) öğrenenlerin zaman içinde durumlar arasında nasıl geçiş yaptığını incelemek için hangi varyantı seçeceğinizi tahmin edebilir misiniz?
- Bir araştırmacı, yüksek ve düşük okuryazarlık düzeyine sahip öğrenenlerin aynı YZ aracını kullandığını fakat çok farklı akıl yürütme ağ yapıları ürettiğini buluyor. Bu durum, YZ araçlarını tek bir ortalama puanla değerlendirmek konusunda size ne söylüyor?
- "Yoğunluk" ve "merkezilik" gibi ağ ölçütleri, etkileşimin rastgele mi yoksa merkezler (hublar) çevresinde mi örgütlendiğini tanımlar. Tek bir öğrenen merkezinde örgütlenmiş bir ağ, iyi bir işbirliğinin göstergesi olarak ne zaman görülebilir — ve ne zaman bir sorunun göstergesi olarak?

## Giriş

Ağ analizi yöntemleri temel bir öncülü paylaşır: anlamı taşıyan, yalnızca bağlantıların varlığı ya da sıklığı değil, bağlantıların yapısıdır. "X ne kadar görüldü?" sorusunu sormak yerine "öğeler nasıl bağlanıyor ve bu bağlantı [[metacognition|bilincin]], [[collaborative-learning|işbirliğinin]] ya da öğrenme süreçlerinin ne ortaya çıkardığı?" sorusunu sorarlar. Bu özellikle eğitimde yapay zeka alanında değerlidir; çünkü burada araştırmacılar giderek daha fazla biçimde öğrenen–[[student-ai-interaction|YZ etkileşimi]]nin *sürecini* (öğrenenlerin [[feedback]], diyalog ve düzeltme içinde nasıl ilerlediğini), yalnızca ürününü (nihai puanlar, hata oranları) anlamak isterler.

## Bilgi tabanının derleminde kullanılan varyantlar

- **Epistemik Ağ Analizi (ENA)** — bilgi tabanındaki en yaygın varyant (~24 makalede ele alınmıştır). ENA, söylem ya da etkinlik bölümleri içinde kodların veya oluşumların birlikte ortaya çıkışını modelleyerek; belirli bir bağlamda hangi fikirlerin, becerilerin ya da epistemik eylemlerin birbiriyle bağlantılı olma eğiliminde olduğunu gösteren ağlar üretir. Farklı grupların (örn. yüksek ve düşük okuryazarlık düzeyine sahip öğrenenler, insan ve YZ işbirlikçileri) bilincini nasıl yapılandırdığını karşılaştırmak için kullanılır. ([[tracing-genai-literacy-interaction-patterns]]) ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **Sosyal Ağ Analizi (SNA)** — işbirliği yapılarını, etkiyi, merkeziliği ve topluluğu ortaya çıkarmak için insanlar (öğrenenler, öğretmenler, ajanlar) arasındaki ilişkileri modeller. [[collaborative-learning|işbirlikçi]] ve akran öğrenmesini incelemek için yararlıdır. ([[misiejuk-cognitive-offloading-prompting-2026]])
- **Geçiş Ağı Analizi (TNA)** — ayrık durumların zamansal dizilerini (örn. bir öğretim oturumundaki öğrenen eylemleri) yönlü bir ağ olarak modelleyerek durumlar arasında geçiş olasılığını nicelleştirir. TNA, öğrenen–YZ etkileşimindeki davranışsal döngüleri, yolları ve benimseme dinamiklerini ortaya çıkarmak için kullanılır. ([[penny-transition-network-analysis-efl-writing-2026]])

Bunlar, olguları (bir ontoloji/üçlü depo) temsil etmek ve üzerinde akıl yürütmek için bir veri yapısı olan, süreç ya da ilişki yapısını incelemeye yönelik analitik bir yöntem olmayan bir **[[knowledge-graph]]**’den farklıdır.

## Eğitimde yapay zeka araştırmalarında ağ analizi

Ağ yöntemleri, toplulaştırma ölçütlerinin yanıtlayamadığı soruları yanıtlamak için bilgi tabanının kanıt tabanı boyunca kullanılır:

- **Öğrenen–YZ etkileşiminin "kara kutusunu" açın.** TNA, *süreci* — YZ araçlarını kullanırken öğrenenlerin izlediği davranışsal döngüleri ve yolları (örn. [[conversational-ai|sohbet robotu]] ile iskelelenen [[writing-education|yazma]] etkinliğinde "düzeltme döngüsü" ile "sohbet döngüsü" karşılaştırması) — yalnızca nihai çıktı değil, ortaya çıkarır. ([[penny-transition-network-analysis-efl-writing-2026]])
- **Gruplar arasında bilişsel yapılandırmayı karşılaştırın.** ENA, farklı grupların oluşumları nasıl farklı bağladığını gösterir — örn. insan–YZ işbirliğinde [[metacognition]] devrinin insan akıl yürütmesiyle nasıl birlikte ortaya çıktığını ortaya koyarak farklı işbirliği kiplerini belirir. ([[hao-human-ai-collaborative-problem-solving-cognition]])
- **YZ okuryazarlığı ve etkileşim imzalarını izleyin.** Etkileşim kayıtları üzerinde ENA, [[llm|LLM]] kullanımının belirgin örüntülerini (yinelemeli stratejik iyileştirme ile doğrusal komutlar) tanımlayarak öğrenen [[ai-literacy|yeterliliğini]] ve gelişimini ayırt eder. ([[tracing-genai-literacy-interaction-patterns]])
- **Söylemi ve çerçevelemeyi analiz edin.** ENA, [[qualitative-research|nitel]] ve [[multimodal]] verilere (örn. eğitimde ChatGPT’nin YouTube çerçeveleri) uygulanarak kamusal ya da disiplinsel söylemin yapısını ortaya çıkarır. ([[youtube-frames-chatgpt-education]])
- **Öz bildirim ve ürün ölçütlerini tamamlayın.** Ağ yöntemleri gözlemlenen davranışsal veri kullandığından, öğrenenlerin iddia ettikleri ile gerçekte yaptıkları arasındaki tutarsızlıkları açığa çıkarabilir — bilgi tabanının geri bildirim benimseme literatüründe yinelenen bir bulgu.

- **Graf yapısı, betimleyici bir özet değil, doğrulama büyüklüğü olarak.** [[synthetic-educational-data-structural-fidelity-2026|Inoue & Yasutake (2026)]], sentetik kohortların gerçekleri yeniden üretip üretmediğini sınamak için öğrenenler üzerinde sabit bir Öklid eşiğinde haftalık bir yakınlık grafinin bağlı bileşen sayısını — β0 — izler ve bunu tercih eder; çünkü yalnızca grafın belirlediği bir büyüklüktür, modülerlik en üst düzeye çıkarmadan farklı olarak hiçbir optimizasyona ya da rastgele tohumlamaya gerek duymaz ve bileşenin yedide birinden üçte birine kadar bölümünde tek başına kalan öğrenenler için de tanımlı kalır.

## Yöntemsel değerlendirmeler

- **Kodlama temeldir.** Tüm ağ varyantları, ham verilerin (söylemler, olaylar, ilişkiler) ayrık düğümlere/kodlara güvenilir biçimde kodlanmasına dayanır; LLM tabanlı otomatik kodlama giderek daha yaygın kullanılmaktadır ancak insan doğrulaması gerektirir (örn. TNA çalışmalarında Fleiss’ κ değerinin 0.70–0.71 olması). ([[penny-transition-network-analysis-efl-writing-2026]])
- **Kodlayıcı uzlaşısını bir kerelik istatistik değil, süregelen bir kontrol olarak ele almak.** [[preservice-teachers-noticing-ai-simulations-2026|Galiç ve diğerleri (2026)]], 304 gözlem (noticing) ifadesini Krippendorff’un α = .803 değeriyle kodlamış ve çalışma boyunca uzlaşımı izlemiş; havuzlanmış κ değeri .85 yeniden kalibrasyon eşiğinin altına indiğinde (18. ve 27. vakalarda) tartışmalı ifadeleri yeniden kodlamış ve 36–51. vakalardan itibaren başka bir yeniden kalibrasyona gerek kalmamıştır. Asıl mesele bu dizidir: güvenilirlik yalnızca sonunda ölçülseydi, erken dönem geçiş modelleri kodlayıcı kayması üzerine kurulmuş kalırdı; çünkü o haftalık geçiş örüntüleri çalışmanın bulgusuydu.
- **Ağ düzeyi ölçütler yapıyı özetler.** Yoğunluk, karşılıklılık, merkezileşme ve giriş/çıkış gücü; etkileşimin rastgele mi yoksa "çekimsel" merkezler çevresinde mi örgütlendiğini ve değişimin ne ölçüde karşılıklı olduğunu tanımlar.
- **Grup farklılıkları için istatistiksel karşılaştırma gerekir.** Gözlenen ağ farklılıklarının (örn. yeterliliğe göre) şansa bağlı olmadığını göstermek için ki-kare testleri ya da permütasyon testi kullanılır. [[caeai-response-length-ai-ethics-education-2026|Shao ve diğerleri (2026)]], sıfır hipotezin metne uygun biçimde kurulması gerektiğini gösterir. Yirmi karma disiplinli [[higher-ed|lisansüstü öğrenci]] ile bir vaka tartışmasında, üç terimli paylaşılan terim oranı yüzde 5,2’den yüzde 8,0’a yükselirken içerik belirteçleri okuma sonrası düzeylerinin kabaca 0,65 katına düşmüştür. Tüm çantayı kapsayan bir permütasyon testi bu artışı anlamlı bulurdu; onların uzunluk koşullu belirteç permütasyon testi bulmadı (Q6 p = .62, Q7 p = .15).
- **Ağını okumadan önce ölçütü doğrulayın.** [[alatoai-ai-learning-environments-self-regulation-2026|Alatoai ve Alshahri (2026)]], dört boyutu keşifsel graf analiziyle modellemeden önce 45 maddelik AI-STEM-MLCS ölçütünü tam ölçek geliştirme yolunu izleyerek oluşturdu — uzman içerik geçerlilik oranları, keşifsel ve ardından doğrulayıcı faktör analizi (CFI = 0.983, RMSEA = 0.019), 0.888–0.905 arası McDonald ω değerleri ve 0.751–0.900 arası iki haftalık test-tekrar test ICC değerleri. Doğrulanmamış ölçek puanlarından oluşan düğümlere sahip bir ağdan yapı türetmek, bu sıralamanın koruduğu şeydir; yazarlar yapının aktarılabilirliğinin sınırı olarak Suudi Arabistan’a özgü doğrulamayı adlandırır.
- **Dikkatle yorumlayın.** Düğüm ayrıntı düzeyi (örn. kaba bir "sohbet" düğümü) niyeti gizleyebilir; otomatik sınıflandırma belirli bir belirsizlik taşır; ve enine kesit ağ yapısı nedensellik kuramaz.
- **Toplulaştırmanın gizlediğini ortaya çıkaran ağlar.** [[genai-social-annotation-epistemic-network-analysis-2026|Pan ve diğerleri (2026)]], GenAI ile not düşen sınıfın kontrol sınıfını hem puan hem katılım olarak geçtiğini buldu, ardından deneysel sınıfı ortanca performansa göre bölerek kazancın paylaşılmadığını gösterdi: yüksek başarılı gruplar, açıklamalarına ilişkin geri bildirim isteklerinin yüzde 60,7’sini başlatırken düşük başarılı gruplar bunun yüzde 34,0’ında kaldı ve öz gönderimli bir döngü içinde kaldılar (grupların ayrışması ENA X ekseninde anlamlı, U = 25.00, p = 0.01). Tasarım dersi şudur: tek bir grup düzeyi etkisi, iki farklı etkileşim yapısını özetleyebilir — ve iki grup da bozulmamış sınıflardı; dolayısıyla bu karşılaştırma örüntüyü belirler, ona nedensel bir açıklama atfetmez.

## Eğitimde yapay zeka araştırmalarına yansımaları

1. **Ürün temelli ölçütler yerine süreç yöntemlerini tercih edin.** YZ araçlarının öğrenmeyi destekleyip desteklemediğini değerlendirmek için, yalnızca nihai puanlara güvenmek yerine öğrenenlerin gerçekte nasıl katıldığını (benimseme, diyalog, düzeltme) dizi/ağ yöntemleriyle modelleyin.
2. **Bilişsel yapılandırmayı karşılaştırmak için ENA kullanın.** Farklı öğrenenlerin ya da kiplerin (insan ile YZ) akıl yürütmelerini nasıl yapılandırdığını sorarken, ENA birlikte ortaya çıkış ağlarının doğrudan ve görsel bir karşılaştırmasını sunar — öğrenenlerin fikirleri nasıl bağladığına ilişkin [[student-modeling|öğrenen modellemesi]] için iyi uyum sağlayan bir teknik.
3. **Otomatik kodlamayı doğrulayın.** Büyük kayıt veri kümeleriyle, [[llm|LLM]] tabanlı sınıflandırma güçlüdür; ancak ağ yapısını yorumlamadan önce insan kodlamasına karşı sınanmalıdır (değerlendiriciler arası uzlaşımı raporlayın).
4. **Farklılaşmaya göre tasarlayın.** Ağ analizi sıklıkla, *aynı* YZ aracının öğrenen alt gruplarında farklı etkileşim örüntüleri ürettiğini ortaya çıkarır — herkese uyan tek bir değerlendirme yerine uyarlanabilir tasarıma yönelik bilgi sağlar.

## Simüle Edilmiş İşbirlikçi Diyaloğun ENA ile Doğrulanması

- **Simüle diyalog için doğrulama aracı olarak ENA.** Fang (2026), ince ayarlanmış LLM ajanlarının gerçek işbirlikçi [[problem-solving]] diyalogunun yapısını yeniden üretip üretmediğini değerlendirmek için Epistemik Ağ Analizini uygular. Simüle edilmiş komşuluk vektörlerini ampirik ağla karşılaştırarak 0,17’lik bir ENA mesafesi bildirir — bu değer sıfır dağılımının 95. yüzdelik eşiği içindedir ve permütasyon p değeri 0,65’tir; bu da ENA’nın, söylem üreten [[simulation|simülasyonların]] doğruluğu üzerine [[quantitative-research|nicel]] bir kontrol olarak gücünü, eğitim araştırmalarında ENA/SNA/TNA’nın diğer uygulamalarıyla birlikte göstermektedir.

## Bağlı kavramlar

- [[learning-analytics]]
- [[knowledge-graph]]
- [[meta-analysis-systematic-review]]
- [[student-modeling]]
- [[student-engagement]]
- [[collaborative-learning]]
- [[metacognition]]
- [[ai-literacy]]
- [[scaffolding]]
- [[feedback]]

## Bağlı makaleler
- [[caeai-response-length-ai-ethics-education-2026]] — Katılımcı–morfem ağlarında paylaşılan terim istatistiklerini belirleyen, sözcüksel hizalanma değil yanıt uzunluğudur (Shao ve diğerleri 2026)

- [[penny-transition-network-analysis-efl-writing-2026]] — İskelelenen EFL yazma etkinliğinde öğrenen–sohbet robotu etkileşimlerinin TNA’sı
- [[tracing-genai-literacy-interaction-patterns]] — GenAI okuryazarlığı etkileşim örüntülerinin ENA’sı
- [[hao-human-ai-collaborative-problem-solving-cognition]] — İnsan-YZ işbirlikçi problem çözmenin ENA’sı
- [[misiejuk-cognitive-offloading-prompting-2026]] — Bilişsel yük aktarımı ve istek metni oluşturma (SNA/ağ yöntemleri)
- [[youtube-frames-chatgpt-education]] — Eğitimde ChatGPT’nin YouTube çerçevelerinin ENA’sı
- [[agency-gap-ai-writing]] — YZ destekli yazmada etkinlik (ajans) boşluğu (ENA)
- [[synthetic-educational-data-structural-fidelity-2026]] — Doğruluk Ölçütlerinin Gözden Kaçırdığı: Sentetik Eğitim Verisi Üzerine Yapısal Bir İnceleme
