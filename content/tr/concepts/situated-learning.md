---
title: Bağlamsal Öğrenme
created: "2026-10-14T21:58:00-04:00"
type: concept
foundations: [ai-education, learning-design]
pedagogy: [constructivist, experiential-learning, learning-theories, situated-learning, sociocultural-learning]
confidence: high
translation_of: concepts/situated-learning
source_updated: "2026-10-30T10:20:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Bağlamsal Öğrenme** — öğrenmenin yalıtılmış, bağlamdan soyutlanmış bir eylem değil, özgün etkinliklere, bağlamlara ve kültürlere katılım yoluyla gerçekleştiğini ileri süren; köklerini Lave ve Wenger’ın (1991) 1990’ların başındaki çalışmalarına dayandıran kuram. Bilgi, öğrenenler ve akranları [[collaborative-learning|uygulama toplulukları]] içinde birlikte inşa edilir ve acemiler meşru çevresel katılım yoluyla öğrenir — bir topluluğun çevresinden merkezine doğru ilerledikçe uzman üyelerinin kültürünü, dilini ve uygulamalarını benimser. Vurgu, gerçek dünya durumlarında yaparak öğrenme üzerindedir; burada [[assessment]] görevin kendisinden doğar, ondan ayrı değildir.

## Dikkate Alınması Gereken Sorular

- Gerçekten iyi bildiğiniz bir şeyi — bir beceriyi, bir zanaatı, bir el sanatını — düşünün. Bunu çoğunlukla soyut öğretimden mi yoksa o işi yapan gerçek bir topluluğa katılmaktan mı öğrendiniz? Bu, bilginin aslında nerede yaşadığı konusunda ne ima eder?
- Lave ve Wenger, acemilerin “meşru çevresel katılım” yoluyla öğrendiğini anlatır — bir uygulama topluluğunun kenarından başlayıp içe doğru ilerleyerek. Böyle bir yeni geleni nerede gözlemlediniz (ya da kendiniz öyle biri oldunuz) ve çevreden merkeze geçmesini ne sağladı?
- Bilgi özgün bağlamlara “yerleşik” ise bu, öğrenmeyi bilerek gerçek dünya durumlarından ayıran geleneksel sınıf — ve bağlamdan soyutlanmış içerik sunmak üzere tasarlanmış YZ araçları — için ne anlama gelir?
- Sayfa, bağlamsal öğrenmeyi YZ için bir tasarım merceği olarak ele alıyor. Uyarlanabilir bir sistem ya da benzetim, öğrenmeyi özgün uygulamada nasıl temellendirebilir, onu bağlamından çekip çıkarmak yerine?
- [[research-methods-aied|Araştırma]], YZ kaynaklı öğrenmenin gerçek bağlamlara yerleştirilmesinin önündeki engeller olarak neleri gösteriyor ve bunlardan hangilerini kendi kurumunuzda gördünüz?

## Giriş

Bağlamsal öğrenme, bilgi tabanının [[learning-theories]] akışı içindeki etkinlik ve bağlam kuramlarından biridir. Vygotskycu temaları sosyal inşayı üzerine alır, ancak “yapma” ile “öğrenme”nin sıkı bütünleşmesine ve uygulama topluluklarının önemine güçlü bir vurgu ekler. Bir eğitim duruşu olarak, kendi gerçekliğine ilişkin becerilerin edinilmesi ve bilginin özümsenmesi için kilit bir öğe olarak öğrencinin [[sociocultural-learning|sitososyokültürel]] bağlamını öne çıkararak geleneksel, standartlaştırılmış okulla yüzleşir.

Eğitimde YZ literatüründe bağlamsal öğrenme, [[ai-education|eğitimde YZ]] için bir tasarım merceği sağladığı için önemlidir: [[adaptive-learning|uyarlanabilir sistemler]], özgün senaryolarda [[intelligent-tutoring|YZ mentorluğu]] ve [[virtual-and-augmented-reality|sürükleyici]] [[simulation|benzetimler]], YZ kaynaklı eğitimi gerçek dünya bağlamlarına temellendirebilir; karşılığında bağlamsal öğrenme, YZ’ye özgün uygulamada ve karmaşıklıkta anlamlı bir çapa sunar. İkisi yaygın biçimde birbirini tamamlayıcı olarak ele alınır ve insan rehberliği [[ethics|etik]] temellendirme için gerekli olmaya devam eder.

- **Materyalin kendisini bağlamsallaştırmak da bir bağlamsal öğrenme hamlesidir.** DagFlow-AI, öğrencinin kendi belirttiği ilgi alanı etrafında kurulmuş bir istatistik veri kümesi üretir (bir vaka çalışması, bir öğrencinin iklim değişikliği ve sağlık kaygısını kullanmıştır) ve öğrenme hedefleri ile beceri düzeyini sabit tutar ([[arthur-dagflow-agentic-synthetic-data-statistics-2026|Arthur ve ark., 2026]]). *Veriyi* öğrenene uyarlamak, açıklamayı uyarlamak yerine, uygulama bağlamını bağlamsallaştırılması gereken şey olarak ele alır. Yazarlar sınırı kabul eder: sentetik veri, veri toplama, ölçme veya çalışma tasarımını öğretemez; bu nedenle bağlam öğrenen için gerçektir, dünya için değil.

### YZ için bir tasarım merceği olarak bağlamsal öğrenme

Bilgi tabanının araştırması, bağlamsal öğrenmeyi yalnızca soyut bir kuram olarak değil, eğitimde YZ için somut bir tasarım ve değerlendirme çerçevesi olarak ele alır:

- **Fırsatlar ve engeller.** Üç on yıla yayılan 60 makaleden oluşan bir PRISMA [[meta-analysis-systematic-review|sistematik derlemesi]], YZ’nin bağlamsal öğrenmeyi güçlendirebileceğini buluyor — öğrencilerin değişen ihtiyaçlarına göre uyarlanmış sistemler, özgün senaryolara yerleştirilmiş YZ mentorluğu, idari görevlerin otomasyonu ve veri kaynaklı öğretmen desteği yoluyla — oysa başlıca engeller geleneksel okulun tek yönlü pasif öğrenmesi, önceden tanımlanmış sonuçlara aşırı vurgu ve öğretmenlerin sınırlı bağlamsal bilgisidir. İnsan rehberliği etik temellendirme için gerekli olmaya devam eder. ([[vargas-situated-learning-ai-review-2024]])
- **YZ, eğitimi gerçekliğe bağlayan bir katalizör olarak.** YZ, eğitimi gerçeklikle ve özgün bağlamlarla bağlayarak, gerçek dünya senaryolarına temellendirilmiş öğrenmeyi mümkün kılarak bağlamsal öğrenme için bir *katalizör* görevi görebilir. ([[vargas-ai-catalyst-situated-learning-2026]])
- **Özgün araştırmada aracı yapıtlar.** [[science-education|Fen öğrenimi]]’nde YZ araçları (sanal laboratuvarlar, benzetimler, YZ mentorluğu), okul, gerçek dünya ve disiplinler arası bağlamlar arasında dijital uygulama topluluklarını ve sınır geçişini mümkün kılarak bağlamsal öğrenmeyi genişleten “aracı yapıtlar” işlevi görür — öğrencileri “bilgi öğrenenlerinden” “bilim uygulayıcılarına” dönüştürür. ([[li-ai-science-situated-learning-teachers-2025]])
- **Bağlamsal [[curriculum-design|öğretim programı]] araçları.** [[ai-literacy|YZ okuryazarlığı]], *Episodes of Situated Learning* (Bağlamsal Öğrenme Bölümleri) aracılığıyla geliştirilebilir — soyut öğretim yerine gerçek dünya [[problem-solving]] üzerinden YZ yetkinlikleri kuran etkin [[teacher-role|öğretim]] araçları (önceden kestirme, üretme, yansıtma). ([[panciroli-ai-literacy-episodes-situated-learning]])
- **[[design-based-research|Tasarım temelli]] öğrenmede bağlamsal değerlendirme.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar ve ark. (2026)]], çalışmalarını bağlamsal öğrenme kuramına ve yinelemeli tasarım [[pedagogy]]’sine dayandırdı ve öğretmen, akran değerlendiricisi ve hibe değerlendiricisi rolleri üzerinden 80 öğrenci tasarım afişini değerlendirdi. Role duyarlı [[prompt-engineering|istek metniyle yönlendirme]], nitelikçe farklı değerlendirici geri bildirimler üretti — öğretmenler cesaretlendirici ve sürece yönelik, akranlar destekleyici ve konuşma dilinde, hibe değerlendiricileri resmî ve sonuç odaklı — bu farklılıklar yalnızca biçemsel değil epistemikti ve tasarım uygulamasının farklı yönlerini öne çıkardı. Bu durum, bağlamsal ve role özgü değerlendirmenin, anlamsal olarak kesin bir rubrikle iskelelenmiş olduğunda bir [[llm|LLM]] tarafından nasıl taklit edilebileceğini ve tasarım temelli öğrenmede değerlendirmenin, özgün görevten ve onun rollerinden onlardan ayrılmadan nasıl doğduğunu göstermektedir.
- **Bağlamsal YZ etiği.** YZ hakkında etik muhakemenin kendisi de, soyut ilkelerden çok kültürel-tarihsel ve ekolojik bağlama temellendirilmiş olarak *bağlamsal* biçimde ele alınması en iyisidir. ([[raffaghelli-situated-ai-ethics-2026]])

Bağlamsal öğrenme, [[embodied-learning]] (ikisi de bilişin bağlam ve eyleme temellendirilmesini vurgular), [[distributed-cognition]] (insanlar, araçlar ve bağlamlar arasında dağıtılmış öğrenme), [[experiential-learning]] ve [[constructivist]] kuramıyla yakından bağlantılıdır. Eğitimde YZ’de bağlamdan soyutlanmış, bedenden uzaklaştırılmış öğrenme eleştirisini topraklar: öğrencileri özgün uygulamada tutan YZ tasarımı, kalıcı öğrenmenin gerektirdiği bağlamsallığı korur.


- **Senaryolar ve yeniden kullanılabilir varlıklar altyapı olarak.** [[ai-cosmos-agentic-infrastructure-situated-learning-2026|AI Cosmos (2026)]], bağlamsal öğrenmeyi bir senaryo olarak işlevselleştirir: hedef, role özelleşmiş etmenler, sorgulanabilir bilgi ve durum tutan bir çalışma tezgâhı; ayrıca süreç kayıtlarını ve deneyim izlerini kökenleriyle birlikte saklayan, böylece sonraki senaryoların önceki uygulamayı getirebildiği bir varlık belleği. Önceden kaydedilmiş iki üç kollu randomize deneme, hukuki akıl yürütmede sade bir asistana karşı 7,0 puanlık bir öğrenme kazanımı avantajı (d = 0,56) ve rekabetçi programlamada ölçüt ustalığına ulaşan daha büyük bir pay (%45'e karşı %68) buldu; aynı modeli öğretmen gibi davranmaya yönlendirmek ise saptanabilir bir yarar üretmedi. Bu, durumun ve çalışma alanının öğrenmenin konuşmaya dayalı açıklamadan daha fazlasını taşıdığı iddiasının ender bir sınamasıdır.

## Yaygın yanlış anlamalar

- **"Bağlamsal öğrenme, soyut bir derse gerçekçi bir senaryo eklemek demektir."** Kuramın iddiası bağlam giydirmekten daha güçlüdür: öğrenme, bir uygulama topluluğuna katılımla kurulur ve öğrenilen, o katılımın mümkün kıldığı şeydir. İşyeri çerçevesi eklenmiş çözümlü bir örnek yine örneği öğretir, uygulamayı değil.
- **"Özgünlük, görevin bir özelliğidir."** Özgünlük, etkinlik ile gerçek bir topluluğun meşru işi arasındaki ilişkidir. Bir görev ayrıntılı olabilir ve yine de okul biçimli kalabilir: bir öğretmen tarafından, bir not için değerlendirilir ve temsil ettiğini iddia ettiği dünyada hiçbir sonuç doğurmaz.
- **"Görevden doğan değerlendirme, değerlendirmenin olmaması demektir."** Ölçütün sınıfın değil topluluğun olduğu anlamına gelir: işin, o işi yapanlar için kabul edilebilir olup olmadığı. Bu, rubrikten farklı ve genellikle daha katı bir standarttır.
- **"Çıraklık fiziksel bir ortam gerektirir."** Mekanizma meşru çevresel katılımdır: bir uygulamanın kenarından merkezine, gerçek sorumlulukla ilerlemek. Çevrimiçi ve benzetimli ortamlar bunu destekleyebilir veya çevreyi simüle edip katılımı hiç tanımayabilir; fark, öğrenenin katkısının fiilen kullanılıp kullanılmadığıdır.

## Bağlı kavramlar

- [[learner-identity]] — disiplinsel, mesleki, yaratıcı ve akademik öğrenen kimliklerinin evrimi
- [[learning-theories]]
- [[constructivist]]
- [[experiential-learning]]
- [[embodied-learning]]
- [[distributed-cognition]]
- [[collaborative-learning]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[teacher-role]]
- [[learning-design]]
- [[ai-education]]
- [[virtual-and-augmented-reality]] — özgün bağlama giden bir yol olarak sürükleyici ortamlar

## Bağlı makaleler

- [[ai-cosmos-agentic-infrastructure-situated-learning-2026]] — Senaryolar ve köken taşıyan yeniden kullanılabilir varlıklar, iki denemede sade bir asistanı geride bıraktı

- [[vargas-situated-learning-ai-review-2024]] — eğitimde bağlamsal öğrenme ve YZ’nin PRISMA sistematik derlemesi (bu sayfanın birincil kaynağı)
- [[genai-educational-outcomes-meta-analysis]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[raffaghelli-situated-ai-ethics-2026]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[panciroli-ai-literacy-episodes-situated-learning]]
- [[yasar-llms-iterative-pedagogical-design-2026]] — yinelemeli pedagojik tasarımın aracıları olarak LLM’ler
