---
title: Simülasyon
created: "2026-10-14T23:00:00-04:00"
type: concept
pedagogy: [active-learning, experiential-learning]
technology: [adaptive-learning, pedagogical-agent, reinforcement-learning]
confidence: high
connected_resources: [openmaic]
translation_of: concepts/simulation
source_updated: "2026-10-28T15:48:01-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Simülasyon** — güvenli, yinelenebilir ve çoğu zaman başka türlü erişilemez olan bağlamlarda uygulama ve geri bildirim yoluyla öğrenmeyi desteklemek üzere modellenmiş ortamların, ajanların veya senaryoların kullanımı. Simülasyonlar öğrenenlerin gerçek dünya maliyeti olmaksızın hareket etmelerini, hata yapmalarını ve sonuçları görmelerini sağlar ve giderek daha fazla YZ ve ajan temelli modellemeyle güçlendirilmektedir.

## Üzerinde düşünülmesi gereken sorular

- Güvenli, düşük riskli bir ortamda yaparak bir şey öğrendiğiniz bir anı hatırlayın — bir laboratuvar, bir alıştırma provası, bir uçuş veya oyun simülatörü. O uygulamayı etkili kılan ne oldu ve simülasyon çok gerçekçi ya da yeterince gerçekçi olmasaydı ne kaybedilebilirdi?
- Sayfa, simülasyonların öğrenenlerin ‘gerçek dünya maliyeti olmaksızın’ hata yapmasını ve sonuçları görmesini sağladığını savunuyor. Bir hatanın maliyeti neredeyse sıfıra indiğinde ne kazanılır ve ne kaybedilebilir sizce?
- Bir YZ uygulama için hasta, öğrenci veya konuşma eşi simüle edebiliyorsa, değerli prova ile gerçek insan etkileşimine aktarılamayan uygulama arasına çizgiyi nerede çekerdiniz?
- Bir öğrenenin bir simülasyonun sınırları — onun [[trust|güvenilirliği]] — konusundaki farkındalığı, gerçekliği ne kadar sadakatle modellemesi kadar neden önemli olabilir?
- Birine öğrenmeye yardım eden aynı simülasyon teknolojisi onu aynı zamanda nasıl yanıltabilir ve bu iki sonucu ayırt etmek için neyi bilmeniz gerekir?

## Giriş

Simülasyon, [[experiential-learning|deneyimsel]] ve [[active-learning]] [[pedagogy|pedagojilerinin]] çekirdeğinde yer alır. Beceri ve yargıyı inşa eden kasıtlı uygulamayı, [[productive-failure|verimli başarısızlığı]] ve [[feedback|geri bildirim döngülerini]] sağlar. YZ simülasyonu iki yönde dönüştürmüştür: daha gerçekçi ve uyarlamalı simüle ortamları güçlendirir ve uygulamayı ölçeklenebilir kılan [[simulating-students|simüle öğrenenler]], hastalar veya muhatap üretir. Davranışsal kanıtlar, öğrenenlerin bir simülasyonla *nasıl* angaje olduğunun tek düze değil sistematik biçimde değiştiğini gösterir: VERA’da ekolojik modeller kuran çevrimiçi öğrencileri izleyen [[an-goel-self-directed-modeling-2026|An, Hammock & Goel (2025)]], [[student-engagement|katılımı]] Gözlem (az model kurulumuyla sık çalıştırma ve parametre ayarı), Yapılandırma (az simülasyonla ellerle kurulum) ve Keşif (tam kur–parametrele–simüle et döngüleri) olarak sınıflamıştır; Keşfedenler en karmaşık ve çeşitli modelleri üretirken, gözlem ağırlıklı öğrenenler çoğunlukla mevcut olanları kopyalamıştır — bu, öğrenenleri tam döngü etkinliğine doğru iten simülasyon ortamları tasarlamanın lehinde bir argümandır.

### YZ ve simülasyon

- **YZ destekli ortamlar:** uyarlamalı simülasyonlar, zorluğu ve senaryoları öğrenenin durumuna göre ayarlar; [[adaptive-learning]] ve [[reinforcement-learning]] temelli koçlukla bağlantılıdır.

- **İstek metniyle üretilen simülasyonlar özgün bir laboratuvarı erişilebilir kılar.** Öğretmenler, bir dersin ihtiyaç duyduğu konunun tarayıcıda çalışan modellerini yeniden kullanılabilir bir istek metni şablonundan üretebilir (kaydırıcılar, animasyon, zamana bağılı grafikler); her birini teknik olarak ve ardından bilinen analitik çözüme karşılık iki kez doğrular, yayımlanmış en yakın simülasyonu kabul etmek yerine ([[benzion-ai-physics-simulations-virtual-lab|Ben-Zion ve ark., 2025]]).

- **İnsan karşı tarafın otomasyonu.** [[astra-atco-training-simulator|Chew ve ark. (2026)]], hava trafik kontrolü simülasyonlarında görev alan uzman insan rol oyuncularının yerini özerk [[llm|LLM]] sim-pilotlarıyla değiştirir; bir eğitim kapasitesi tıkanıklığını giderir; ince ayarlı konuşma hattı, Singapur aksanlı havacılık konuşmasında sözcük hata oranını %107,80’den %23,45’e düşürmüştür, ancak tüm değerlendirmeler hiçbir öğrenci kohortu çalıştırması olmadan bileşen düzeyindedir.
- **Eğitim eşi olarak karşıt simülatörler.** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin ve ark., 2026)]], bir politika ajanını 57.000 vakalık bir senaryo hattında karşıt biçimde davranacak biçimde kurulmuş LLM hasta simülatörleriyle eşleştirir; onlara karşı eğitim, gözden kaçırılan kırmızı bayrak oranlarını yaklaşık üçte bir düşürmüş ve körleştirilmiş klinisyenler, yan yana karşılaştırmaların %87,6’sında eğitilmiş aracı tercih etmiştir.
- **Eksik vaka durumlarını açıkça kodlayın.** Çok ajanlı bir standart hasta sistemi, niyet tanıma, vaka temelli yanıt üretimi ve oturum sonrası değerlendirmeyi ayrı tutar ve dört tür eksik bilgiyi ayırt eder — klinik olarak olumsuz, hastada bilinmeyen, henüz değerlendirilmemiş ve vakada bulunmayan — çünkü bunları “normal”e indirgemek desteklenmeyen klinik olgular enjekte eder ([[medeasy-ai-standardized-patients|Gao ve ark. (2026)]]).
- **Simüle ajanlar:** YZ hastaları (tıp eğitimi için), öğrencileri ([[teacher-role|öğretmen]] uygulaması için) veya konuşma eşlerini simüle ederek yüksek riskli kişiler arası uygulamayı erişilebilir ve yinelenebilir kılar. [[teacher-education|Öğretmen eğitiminde]] [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang ve Zhang (2025)]], yaygın oran akıl yürütmesi [[misconceptions]] taşıyan bir [[k-12|ortaokul]] öğrencisini canlandıran özel bir ChatGPT [[conversational-ai|sohbet robotu]] olan *Student GPT*’yi kurmuştur; öğretmen adaylarına öğrenci düşüncesini teşhis etmede hesaplanabilir, içeriğe özgü uygulama sunmuştur — [[math-education|matematik]] — ve simüle öğrencinin rol yapma güçlü yönlerini (açıklık, alaka düzeyi, hata tutarlılığı) ile özgünlük zayıf yönlerini (öğretmene özgü ton, rol kafa karışıklığı) sistematik biçimde değerlendirmek için bir [[affective-computing|Duygusal]], İletişimsel, Teknik (ACT) kodlama çerçevesi kullanmıştır.
- **Karşıolgusal tarihi birinci sınıf bir özellik yapın.** SupplyNet’in bağlama duyarlı çok ajanlı [[llm|LLM]] ajanları, betiklenmiş olan yerine öğrenen kararlarından doğan tedarik zinciri dinamikleri üretir; dallanan zaman çizelgesi öğrenenlerin ceza almadan önceki seçimlere dönmesini sağlar — 14 katılımcıdan 13’ü kararları performansa bağlamada onu yüksek derecelendirmiş, buna karşılık taban çizgisinde 3 kişi bunu yapmıştır ([[supplynet-visual-exploratory-learning|Li ve ark. (2026)]]).
- **Yerleşik dinamikler, isteklenmiş bir kişilik değil.** [[adaptive-virtual-patient-psychotherapy-training|Chen ve ark. (2026)]], bir sanal hastanın ifşa dinamiklerini neredeyse 2.000 saatlik gerçek psikoterapi deşifre metninden parametreleştirmiş, ardından her turda düzeyi güncellemiştir; 20 klinisyenle 1.033 tur üzerinde ifşa, terapistin empatisi ve keşfiyle yükselmiş, buna karşın aynı LLM üzerindeki yalnızca istek metniyle çalışan taban çizgisi düz kalmıştır.
- **Rol yapma öğreneni role koyar.** Simüle ajanlar karşı tarafı sağladığı yerlerde rol yapma bunun yerine öğrenene o rolü verir. [[remind-robot-mediated-roleplay-antibullying-2026|Sanoubari ve arkadaşları (2026)]], 9–10 yaşında 18 çocuğa sosyal robotlar tarafından canlandırılan bir zorbalık sahnesi izletmiş, her karakterin konumunu hakkında akıl yürütmelerini sağlamış, ardından robotik bir avatarı kuklacı gibi kullanarak savunma provası yaptırmış ve savunmaya ilişkin algılanan [[self-efficacy]]te kazanımlar artı bir zorbanın karşısına çıkmayı gerçekten durdurup durdurmayacağına ilişkin daha iyi kalibre edilmiş inançlar bildirmiştir. Onların çerçevesi olan robot aracılı uygulamalı drama, Forum Tiyatrosu rolünde bir insan kolaylaştırıcı tutar ve otomasyonu anlatı denetimiyle sınırlar; bu, rol yapmanın zorlu kısmının makinelerden çok yansıtma olduğuna dair yararlı bir hatırlatmadır. [[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga ve Johnson (2025)]], rol yapmayı simülasyonla birlikte YZ destekli çevrimiçi öğrenmenin yararlandığı stratejiler arasına yerleştirir.

- **Simüle öğrenenler:** öğrenci davranışı modelleri, [[research-methods-aied|araştırmacıların]] ve tasarımcıların canlı konuşlandırmadan önce özel ders sistemlerini ve [[curriculum-design|müfredatı]] test etmelerini, [[student-modeling]] ve [[knowledge-tracing]] temellendirmesini sağlar.
- **Güven ve sadakat:** bir simülasyonun değeri, gerçek bağlamı ne kadar sadakatle modellemesine — ve öğrenenin sınırlarına ilişkin farkındalığına — bağlıdır; [[trust-calibration]] ile bağlantılıdır.

- **İnsan benzerliği etkileşimin bir özelliğidir, modelin değil.** Her iki arka uç aynı avatarın ardında sunulduğunda, metin temelli insan benzerliği avantajı ortadan kalkmıştır: katılımcılar ticari modeli doğal bulmuştur (%54 / %22) oysa iletişim performansı özdeşti; ses, gecikme ve sıra alışverişi, aynı diyalog kalitesinin nasıl algılandığını yeniden şekillendirmiştir ([[sophie-clinical-communication-ai-assessment-2026|Hasan ve ark. (2026)]]).
- **Simülasyon temelli öğrenmede [[generative-ai|üretken YZ]].** [[genai-scenario-based-healthcare-education-2026|Neto ve arkadaşları (2026)]], sağlık eğitiminde senaryo, vaka, problem ve simülasyon temelli öğrenmede üretken YZ’yi [[meta-analysis-systematic-review|sistematik biçimde derlemişlerdir]]; üst düzey bilişsel beceriler için olumlu sonuçlar, başka yerlerde ise tutarsız sonuçlar bulmuşlardır; karma [[human-ai-collaboration|insan–YZ işbirliği]] tamamen otomatikleştirilmiş yaklaşımlardan daha iyi performans göstermiştir. [[conversational-agents-business-simulation-gaming-2026|Wenzel, Geiger ve Liening (2026)]], işletme simülasyon oyunlarında uyarlamalı destek için YZ konuşma ajanları geliştirir; simülasyon temelli öğrenmede sınırlı [[formative-assessment|biçimlendirici]] geri bildirim ve yapılandırılmış yansıtmanın yaygın boşluğunu giderir.
- **“Özgünlük boşluğu”, YZ simülasyonunun yerine geçebileceğini sınırlar.** [[medical-education|Klinik]] simülasyonda [[jiang-ai-powered-simulation-nursing-education-2026|Jiang ve ark. (2026)]]’nın YZ destekli hemşirelik simülasyonunun (19 çalışma, N=1.253) [[mixed-methods-research|karma yöntemli]] sistematik derlemesi, YZ’nin bilişsel bilgi ve duygusal sonuçlar için etkili olduğunu, karmaşık psikomotor beceriler için tutarsız olduğunu bulmaktadır. Bir **özgünlük boşluğu** olarak adlandırdıkları kavram — duygusal yankılanma, sözsüz ipucu tanıma ve dokunsal/fizik muayene boyutlarında öğrenenin algıladığı bir eksiklik — YZ simülasyonunun neden en iyi yüksek biçimde yapılandırılmış hedefler (temel iletişim, öykü alma) için olduğunu ve gelişmiş psikomotor ile duygusal açıdan karmaşık senaryoları insan standart hastalara ve klinik yerlere devretmesi gerektiği bir **kademeli simülasyon sürekliliği** içinde yer alması gerektiğini açıklar. Teknik dengesizlik (örneğin konuşma tanıma gecikmeleri) aynı zamanda [[cognitive-offloading|bilişsel yük]] ve kaygı ekleyebilir, dolayısıyla sadakat ve kararlılık bizzat tasarım kaldıraçlarıdır. Bu, karma insan–YZ yaklaşımlarının tamamen otomatikleştirilmiş olanları geçtiğini bulan [[genai-scenario-based-healthcare-education-2026|Neto ve arkadaşlarının]] bulgusunu paralelleştirir.
- **Öğretmen–YZ birlikte tasarlanan simülasyonlar.** Hem kavramsal öğrenmeyi hem yetkinlik gelişimini destekleyen etkileşimli simülasyonlar uygulamalı alanlarda seyrektir ve üretken YZ çıktısı çoğu zaman pedagojik geçerlilikten yoksundur. [[stem-education|Drone temelli STEM eğitiminde]], aksi halde özdeş olan uygulamalı bir müfredata gömülü öğretmen–YZ birlikte tasarlanan simülasyonlar, 30 ortaokul öğrencisi üzerinde ön test–son test tasarımlı yarı deneysel bir düzende değerlendirilmiş; simülasyon destekli öğretimin üstün [[learning-gains|öğrenme sonuçları]] verip vermediği incelenmiştir ([[simulation-assisted-drone-learning-stem-2026]]). Ayrıca ASTRA gibi [[agentic-ai|çok ajanlı]] özel ders [[benchmark|kıyaslama]]ları, [[cs-education|giriş düzeyi programlamada]] katılım açısından dengelenmiş işbirliğini incelemek için simüle sosyal olarak akıllı ajanlar kullanır ([[astra-multi-agent-tutoring-benchmark-2026]]).

- **Simülasyonda öğrenen denetimi verilmez, eyleme dönüştürülür.** Bir sürülen simülasyonda yürütülen 2 × 2 deneyinde ([[learner-agency-ai-simulation-2026|Su, Nair ve Nagashima 2026]]) bazı öğrencilere parametre kaydırıcıları, bazılarına isteğe bağlı bir konuşma aracısı, bazılarına ikisi birden verilmiştir; her koşul iyileşmiştir, ancak ön bilgi denetlendiğinde hiçbir olanak güvenilir bir fark üretmemiştir (p = ,849 ve p = ,108). [[learning-gains|Kazanımları]] öngören şey, öğrenenlerin parametreleri nerede ve ne kadar süreyle değiştirdiği olmuştur: kavramsal açıdan en karmaşık derste süregelen kaydırıcı kullanımı kazanımlarla pozitif ilişkiliyken, aynı davranış daha kolay derste negatif ilişkiliydi. Simülasyon kuranlar için çıkarım şudur: denetimler sunmak müdahale değildir — öğrenenlerin neyi değiştireceklerine karar vermelerine ve neyin değiştiğini kaydetmelerine yardım etmek müdahaledir.

- **Açık bir mekanizma, öğrenilmiş bir üreticinin olmadığı biçimde denetlenebilirdir.** DagFlow-AI, sentetik veriyi bir yönlü çevrimsiz grafik artı değişken başına dağılımlar ve formüllerden kurar; böylece veri üretme süreci, bir öğretim görevlisinin okuyup düzeltebileceği bir belgedir ([[arthur-dagflow-agentic-synthetic-data-statistics-2026|Arthur ve ark., 2026]]). Bu, bir tohum veri kümesine ihtiyaç duyan ve opak bir süreç veren GAN ve VAE sentezine bilinçli bir karşıtlık oluşturur. Ödünleşim, kararlı bir simülasyona ulaşmanın birkaç yineleme almasıdır.
- **Sanal ortam ile YZ katmanı ayrılabilir kazanımlardır.** Üç haftalık bir 9. sınıf Ohm yasası ünitesinde düzeltilmiş başarı, YZ destekli sanal laboratuvarla 30 üzerinden 23,45, YZ’siz aynı laboratuvarla 20,51 ve fiziksel laboratuvarla 16,57 idi ([[li-ahmad-ai-virtual-lab-flipped-physics-2026|Li ve Ahmad (2026)]]). Sağlam sınıflar her birine farklı bir öğretmenle atandı, bu nedenle bu üç sınıf düzenlemesini betimler, tek başına ajanı değil.
- **Dijital ikiz, donanım faturası olan bir simülasyondur ve fatura kimin katılabileceğini şekillendirir.** [[engineering-education|Mühendislik]] ve STEM yükseköğretiminde dijital ikizlere ilişkin 11 çalışmanın bir [[meta-analysis-systematic-review|sistematik derlemesi]], her uygulamanın gerçek zamanlı eşzamanlamalı çalışan bir prototip sunduğunu, ancak yalnızca üçünün istatistiksel açıdan anlamlı [[learning-gains|öğrenme kazanımları]] bildirdiğini bulmuştur. Fiziksel düzenekler beş çalışmada eşzamanlı erişimi 1–3 öğrenciyle sınırlamış ve azalmış toplumsal etkileşim altı çalışmada en sık belirtilen pedagojik zorluk olmuştur ([[caee-digital-twins-stem-education-systematic-review-2026|Pelayo-González ve ark. (2026)]]).

- **Ajan temelli simülasyon, bir üstbiliş kuramını sınanabilir bir sistem olarak modelleyebilir.** Beş düzeyli AMERT modelini bir NetLogo benzetimiyle birleştiren ajan temelli, dijital ikiz esinli bir çerçeve, araştırmacıların öğrenen arketiplerini ve görev koşullarını değiştirip üstbilişsel yörüngeleri gözlemlemesini sağladı; ancak yazarlar çıktının gerçek öğrenenlere dair kanıt değil hipotez üretimi olduğunu vurgular ([[agent-based-digital-twin-metacognition-2026|Guo, 2026]]). Simülasyon, başka türlü gözlemlenmesi zor bir kuram için sanal bir laboratuvara dönüşür.

### Bağlantılar

Simülasyon [[active-learning]], [[adaptive-learning]] ve [[pedagogical-agent]] ile bağlantılıdır. Deneyimsel ve [[constructivist]] öğrenmenin bir mekanizmasıdır ve uyarlamalı, gerçekçi uygulama ortamları üretme yeteneğiyle YZ tarafından güçlendirilir.

## Yaygın yanlış anlamalar

- **“Simülasyon daha ucuzdur ve dolayısıyla ikinci en iyidir.”** Özerk [[llm|LLM]] sim-pilotları, **hava trafik kontrolü simülasyonlarında görev alan uzman insan rol oyuncularının yerini alarak bir eğitim kapasitesi darboğazını ortadan kaldırır**; kısıt sadakat değil, personeldi. İnsan rol oyuncularının kıt olduğu yerlerde LLM simülasyonu bir ikame değil, mevcut tek seçenektir.
- **“Simülatörler ortalama vakalar gibi davranmalıdır.”** [[residencyrl-clinical-rl-training-2026|ResidencyRL (Liévin ve ark., 2026)]], bir politika ajanını **karşıt davranacak biçimde kurulmuş LLM hasta simülatörleriyle** eşleştirir. İşbirlikçi olacak biçimde tasarlanmış bir simülatör, öğrenenin pratiğini klinikten daha kolay kılar; bu da eğitimin ihtiyaç duyduğunun tam tersidir.
- **“Betiklenmiş senaryolar belirsizlik altında karar vermeyi öğretir.”** SupplyNet’in bağlama duyarlı çok ajanlı ajanları, **betiklenmiş** diziler yerine öğrenen kararlarından **doğan dinamikler** üretir. Betiklenmiş senaryolar bilinen bir yolu prova eder; doğaçlama olanlar kararı prova eder.

## Bağlı kavramlar
- [[active-learning]]
- [[adaptive-learning]]
- [[pedagogical-agent]]
- [[reinforcement-learning]]
- [[student-modeling]]
- [[constructivist]]
- [[trust-calibration]]
- [[professional-training]]
- [[chemistry-education]] — Kimya eğitimi ve YZ: laboratuvarlar, biçimlendirici değerlendirme, LLM sınırları, deney felsefesi
- [[biology-education]] — Biyoloji eğitimi ve YZ: laboratuvar öğretim yardımcıları, biyolojide YZ okuryazarlığı, eleştirel düşünme, özelleşmiş araçlar
- [[ai-technologies]] — Çatı: YZ teknolojileri ve teknikleri (modeller, LLM eğitimi, robotik, RAG, etmen)
- [[virtual-and-augmented-reality]] — modalite değil model — sürükleyici ortamlar çoğunlukla bir simülasyonu sunar

## Bağlı makaleler
- [[learner-agency-ai-simulation-2026]] — Karmaşık sistem simülasyonunda parametre denetimi ve isteğe bağlı bir YZ ajanı: kazanımlar erişimi değil eyleme dönüşümü izledi
- [[benzion-ai-physics-simulations-virtual-lab]]
- [[adaptive-virtual-patient-psychotherapy-training]] — Psikoterapi Eğitimi için Uyarlamalı Sanal Hastalar
- [[ai-enabled-serious-games]] — YZ Destekli Ciddi Oyunlar
- [[anvil-ai-educational-animations]] — ANVIL: Analogies and Videos for Lecturers
- [[astra-atco-training-simulator]] — ASTRA: ATCO Training Simulator
- [[supplynet-visual-exploratory-learning]] — SupplyNet: Visual Exploratory Learning
- [[medeasy-ai-standardized-patients]] — MedEASY: AI Standardized Patients
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Sıradan müdahaleci eğitimi için robot aracılı rol yapma oyunu (uygulamalı drama)
- [[residencyrl-clinical-rl-training-2026]]
- [[genai-scenario-based-healthcare-education-2026]] — Senaryo temelli sağlık eğitiminde üretken YZ’nin sistematik derlemesi (Neto ve ark. 2026)
- [[conversational-agents-business-simulation-gaming-2026]] — İşletme simülasyon oyunlarında YZ konuşma ajanları için CAIS-GBL çerçevesi (Wenzel ve ark. 2026)
- [[llm-agents-collaborative-problem-solving-simulation-2026]] — İşbirlikçi problem çözme diyaloglarını yeniden üreten ince ayarlı katılımcıya özgü LLM ajanları (Fang 2026)
- [[astra-multi-agent-tutoring-benchmark-2026]] — Çok ajanlı özel ders ve katılım açısından dengelenmiş işbirliği için ASTRA sentetik kıyaslaması
- [[simulation-assisted-drone-learning-stem-2026]] — Öğretmen–YZ birlikte tasarlanan iskelelemeyle simülasyon destekli drone öğrenimi
- [[an-goel-self-directed-modeling-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[jiang-ai-powered-simulation-nursing-education-2026]] — Hemşirelikte YZ destekli simülasyon: karma yöntemli sistematik derleme (özgünlük boşluğu, kademeli süreklilik)
- [[sophie-clinical-communication-ai-assessment-2026]] — Ölçeklenebilir YZ temelli klinik iletişim eğitimi ve otomatik değerlendirme
- [[caee-digital-twins-stem-education-systematic-review-2026]] — STEM eğitiminde dijital ikizler: prototiplerin tümü çalıştı, öğrenme kazanımları çoğunlukla çalışmadı

- [[li-ahmad-ai-virtual-lab-flipped-physics-2026]] — AI-supported virtual laboratory for flipped physics learning: effects on middle school students' achievement, motivation, and cognitive load
