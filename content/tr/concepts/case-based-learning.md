---
title: Vaka Temelli Öğrenme
created: "2026-11-08T12:44:33-05:00"
updated: "2026-11-08T12:44:33-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
pedagogy: [problem-based-learning, productive-failure]
technology: [generative-ai, simulation, intelligent-tutoring]
audience: [instructors, learners, researchers]
level: [higher ed]
confidence: high
contributors: [editor]
translation_of: concepts/case-based-learning
source_updated: "2026-11-08T12:23:59-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sentez**: Vaka temelli öğrenme belirli vakalar üzerinden öğretir: bir hasta başvurusu, bir hukuki uyuşmazlık, bir iş kararı, bir sınıf olayı ya da bir çift karşıt örnek. Vaka bağlamı, olguları ve belirsizliği sağlar; öğretim elemanı ise onu öğrenmeye dönüştüren soruları ve tartışmayı tasarlar. Bu yaklaşım, vaka yönteminin ve Sokratik sorgulamanın sınıfı uzun süredir düzenlediği hukuk ve işletme eğitiminde ve klinik vakalarla simüle hastaların kontrollü pratik sağladığı sağlık meslekleri eğitiminde yerleşik bir pedagojidir. Öğrenme mekanizması [[problem-based-learning]] ve [[productive-failure]] ile örtüşür, ama aynı şey değildir: vakalar genellikle tasarlanmış bir problem alanı olan sınırlı anlatılardır; problem temelli öğrenme ise öğrencilerin araştırdığı kötü yapılandırılmış bir problemle başlar. Yeni YZ kanıtı umut verici ama dardır. Beş vakalı bir perioperatif uygulanabilirlik çalışması, temellendirilmiş bir LLM’in eğitim alanlarının sorularının %99,3’ünü (543/547) uygun biçimde yanıtladığını ve uydurulmuş içerik üretmediğini buldu. Bir hemşirelik uygulanabilirlik çalışması, ChatGPT’nin vaka oluşturma süresini 106 dakikadan 71 dakikaya indirdiğini ve tartışma kalitesinde ölçülebilir bir değişiklik olmadığını buldu. Altı randomize denemenin meta analizi, YZ destekli problem ve vaka temelli öğrenmenin bilgiyi ve memnuniyeti iyileştirdiğini buldu, ama yalnızca iki deneme vaka temelli öğrenmeyi test etti ve derleme biçimleri hiçbir zaman ayrı ayrı analiz etmedi. Derlem hâlâ vaka kalitesini, tartışma kolaylaştırmasını ve öğrenme çıktılarını aynı tasarımda yalıtan bir çalışmadan yoksundur.

## Dikkate Alınması Gereken Sorular

- Bir vakayı vaka yapan, onu uzun bir sözel problemden veya sonuna bir sınav eklenmiş bir hikâyeden ayıran nedir?
- Vaka temelli öğrenme problem temelli öğrenmeden nasıl ayrılır ve bu fark YZ’nin nasıl kullanılması gerektiği açısından neden önemlidir?
- Bir vaka tartışmasının hangi bölümleri önceden planlanmalı, hangileri öğretim elemanının canlı yargısına bırakılmalıdır?
- YZ bir vaka ürettiğinde öğrenciler görmeden önce nelerin kontrol edilmesi gerekir? Öğrenciler bir vakayı YZ özel öğretmeniyle tartıştığında nelerin korunması gerekir?
- Vakalar hukuk ve işletme eğitiminde neden bu kadar yaygındır ve bu disiplinler vakalar özetlerle veya simülasyonlarla değiştirilse neyi kaybederdi?
- Hangi kanıt, öğrencilerin vakadan keyif aldığını veya tartışmayı yüksek puanladığını değil, vaka temelli öğretimin işe yaradığını gösterirdi?

## Giriş

Vaka, sınırları çizilmiş bir tekildir. Öğrenenlere aktörleri, olguları, kısıtları olan ve genellikle varılacak bir karar ya da tanı içeren bir durum verir. Vaka kendi dersini taşımaz. Ders, öğretim elemanının sorduğu sorulardan, öğrencilerin yaptığı karşılaştırmalardan ve tartışmada dışsallaştırdıkları akıl yürütmeden gelir. Bu yüzden vaka temelli öğretim yalnızca bir okuma türü değil, bir tasarım pratiğidir.

Terim bir teknikler ailesini kapsar. **Vaka temelli öğrenme** genellikle bilgiyi uygulamak ve klinik ya da mesleki akıl yürütme geliştirmek için kullanılan yapılandırılmış vakaları ifade eder. **Vaka yöntemi**, temyiz kararları veya yönetsel durumlar üzerinden, çoğunlukla Sokratik sorgulamayla öğretme geleneğidir. **Vaka çalışmaları** öğretim vakaları anlamına gelebilir, ama aynı ifade bir araştırma tasarımını da adlandırır; bir okul üzerine vaka çalışması vaka temelli bir ders değildir. **Karşıt vakalar**, öğrenenlerden öğretim elemanının fark etmelerini istediği bir özellikte farklılaşan iki ya da daha çok örneği karşılaştırmalarını isteyerek algıyı keskinleştirir. **Vaka tartışması**, yazılı bir vakayı kolektif akıl yürütmeye dönüştüren kolaylaştırma katmanıdır.

Bu teknikler [[problem-based-learning]], [[inquiry-based-learning]], [[simulation]] ve [[productive-failure]] ile örtüşür ve sınırlar pratikte her zaman temiz değildir. Bu sayfanın koruduğu ayrım işlevseldir: vaka temelli bir tasarım, öğretim amacıyla seçilmiş veya yazılmış bir vakayla başlar ve öğretim elemanı onu belirli bir akıl yürütme biçimini görünür kılmak için kullanır.

## Neyin vaka temelli öğrenme sayıldığı

İlk ayrım problem temelli öğrenmeden (PBL) gelir. PBL kötü yapılandırılmış bir problemle başlar ve öğrencilerden neyi öğrenmeleri gerektiğini belirlemelerini, bunu araştırmalarını ve bir çözümle dönmelerini ister. Problem bir vaka olabilir, ama tanımlayıcı özellik öğrenci yönelimli sorgulamadır. Vaka temelli öğrenme daha sık olarak hazırlanmış bir vakayla ve tanımlanmış bir öğrenme hedefleri kümesiyle başlar; öğretim elemanı analizi yönetebilir, roller atayabilir veya vakayı bir kararı örneklemek için kullanabilir. PBL ve vaka temelli öğrenme kolaylaştırmayı ve bağlamı paylaşır, ama kontrolü farklı dağıtır. Bu YZ açısından önemlidir: vaka üreten bir YZ, vaka temelli bir tasarımı desteklerken öğrencilere açık bir problem boyunca özel öğretmenlik yapan bir YZ PBL’ye daha yakındır.

İkinci ayrım araştırma amaçlı vaka çalışmasından gelir. Niteliksel bir vaka çalışması, sınırları çizilmiş bir sistemi inceleme yöntemidir. Öğretim vakası ise tasarlanmış bir eserdir. Aynı sözcük her ikisinde de görünür ve derlemde vaka çalışmasını araştırma yöntemi olarak kullanıp vakalarla öğretim yapmayan çok sayıda makale vardır. Bir kavram sayfası öğretim anlamını ayrı tutmalıdır, yoksa kanıt sayısı şişer.

Üçüncü ayrım vaka biçimleri arasındadır. Tam bir anlatı vakası sayfalarca sürebilir ve ciddi hazırlık gerektirebilir. Kısa bir vinyet tek bir derse ya da bir değerlendirmeye sığabilir. Karşıt vakalar kümesi, hedef bir özellikte farklılaşan örnekleri bilerek eşleştirir. Simüle vaka, öğrenene yanıt veren standart bir hasta, bir sohbet robotu veya sanal bir ortamla etkileşimli olabilir. Biçim bilişsel işi değiştirir: uzun vakalar sentez ve önceliklendirme talep eder, vinyetler tanımayı test eder, karşıt vakalar ayırt etmeyi destekler ve simülasyonlar gerçek zamanlı karar vermeyi ekler.

## Vakalar neden işe yarar

Vakalar soyut bilgiden durumsal yargıya bir köprüdür. Öğrenenlere kavramların sonuçları olduğu bir bağlam verir ve önceki bilgiyi görünür kılar: öğrenciler vakanın neye imkân tanıdığını, neyi belirsiz bıraktığını ve hangi ilkelerin geçerli olduğunu fark etmek zorundadır. Mesleki eğitimde mesele tam budur. Hukuk eğitimi, öğrencilere otoriteyi okumayı, kararların özünü ayırt etmeyi ve içtihattan akıl yürütmeyi öğretmek için vakaları ve Sokratik diyaloğu kullanır. İşletme eğitimi, çoğunlukla tek doğru yanıtı olmayan bir kararla, belirsizlik altında analiz pratiği yapmak için vakaları kullanır. Sağlık meslekleri eğitimi, gerçek hastalar risk altına girmeden önce tanı, yönetim ve iletişimi prova etmek için klinik vakaları kullanır.

Mekanizma yalnızca “gerçek dünya örnekleri” değildir. Bir vaka gerçekçi olup yine de çok az şey öğretebilir; eğer tartışma öğrencilerden hiçbir zaman ayırt etmelerini, gerekçelendirmelerini veya karşılaştırma yapmalarını istemiyorsa. Daha güçlü tasarımlar vakaları açıklamadan önce bir problem alanı yaratmak için kullanır; bu da [[productive-failure]] ile bağlantıdır: öğrenciler bir vakayı dener, mevcut modellerinin sınırlarıyla karşılaşır ve sonra bu boşluğu ele alan öğretim alır. Karşıt vakalar bunu daha da keskinleştirir. İki vaka önemli bir özellikte farklılaştığında öğrenenler yüzeydeki hikâyeyi değil özelliği görebilir. 78 etnik azınlık hazırlık öğrencisi için üç haftalık bir üretici YZ dersi üzerine mevcut çalışma, öğrencileri verimli kopyalamadan eleştirel ortak yaratıma taşımak için karşıt vakalarla öğretmen modellemesini kullandı ([[scaffolding-critical-engagement-genai-minority-students]]). Bu bir vaka karşılaştırma tasarımıdır, hukuk veya işletmede vaka temelli öğrenmenin testi değildir, ama mekanizmayı gerçek bir sınıfta gösterir.

Vakalar ayrıca toplumsal bir boyut taşır. Bir vaka tartışması akıl yürütmeyi kamusal kılar: öğrenciler yorumlar önerir, alternatifleri duyar ve revize eder. Ders kitabının yapamadığı işi öğretim elemanının soruları yapar. Bu yüzden bir vakayı özet veya ders anlatımıyla değiştirmek içeriği korurken öğrenmeyi kaybedebilir. Bu yüzden bir YZ’nin vakayı öğrenci adına yanıtlaması, yanıtları doğru olsa bile tartışmayı kısa devre yaptırabilir.

## YZ neyi değiştirir

Yeni kanıt üç kullanım etrafında kümelenir: vaka üretmek, vaka sunmak ve kanıtı sentezlemek.

**Vaka üretmek.** [[higashitsuji-chatgpt-case-creation-nursing-2025|Higashitsuji, Otsuka ve Watanabe (2025)]] sekiz hemşirelik öğretim elemanının elle ve ChatGPT destekli vaka oluşturmasını karşılaştırdı. Medyan oluşturma süresi 106,0 dakikadan 71,0 dakikaya düştü; bu istatistiksel olarak anlamlı bir farktı, algılanan yük ve tartışma kalitesi ise anlamlı bir değişiklik göstermedi. Çalışma dokuz öğrencili ve körlenmiş, randomize olmayan çaprazlamalı bir uygulanabilirlik denemesidir; dolayısıyla eşdeğerliği değil, makul bir zaman tasarrufunu destekler. Önemli tasarım sorusu bir modelin vaka üretip üretemeyeceği değildir. Üretilen vakanın öğretim elemanının amaçladığı klinik akıl yürütmeyi koruyup korumadığı ve öğrenciler kullanmadan önce birinin onu kontrol edip etmediğidir.

**Vaka sunmak.** [[trewren-ai-perioperative-case-based-learning-2026|Trewren ve çalışma arkadaşları (2026)]] beş perioperatif vaka oluşturdu, bunları özel bir LLM platformuna yükledi ve dört anestezi asistanının vakaları hasta değerlendirmesi olarak sorgulamasını sağladı. 547 soru-cevap çifti boyunca %99,3’ü (543/547) uygun bulundu ve hiçbiri uydurulmuş değildi; dört başarısızlık, vakanın içerdiği bilgiyi bildirmeyi reddetmekti. Bu, temellendirilmiş bir modelin bir vakayı sorgulama altında bir arada tutabildiğine dair kanıttır. Asistanların geleneksel bir vaka tartışmasından daha fazla öğrendiğine dair kanıt değildir ve çalışma ikisini karşılaştırmamıştır.

**Kanıtı sentezlemek.** [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025|Wei ve çalışma arkadaşları (2025)]] tıp ve diş hekimliği eğitiminde YZ destekli PBL ve vaka temelli öğrenmenin altı randomize kontrollü denemesini gözden geçirdi. Dört deneme bilgi meta analizine girdi ve düşük heterojenlikle %46 iyileşme bildirdi; üçü 0,7’lik bir havuzlanmış memnuniyet puanı üretti. Klinik akıl yürütme havuzlanamadı; çünkü denemeler farklı araçlar kullandı. Altı denemenin yalnızca ikisi vaka temelli öğrenmeyi test etti ve derleme PBL ile vaka temelli öğrenmeyi ayrı ayrı analiz etmedi. Sonuç, YZ destekli vaka ve problem tasarımları için cesaret vericidir, ama kazanımı hangi vaka özelliklerinin ürettiğini söylemez.

Çevredeki derlemeler temiz bir vaka temelli öğrenme tahmini eklemeden bağlam ekler. [[hardie-genai-nursing-scoping-review-2026|Hardie ve çalışma arkadaşları (2026)]] 103 çalışmalık bir hemşirelik derlemesinde vaka temelli öğrenmeyi dört adlandırılmış kategoriden biri olarak değil, simülasyon temasının içinde buldu. [[lorteau-sarro-ai-legal-education-2025|Lorteau ve Sarro (2025)]] YZ’yi Sokratik öğretime ve etkileşimli hukuk simülasyonlarına bir tamamlayıcı olarak betimler, ama 82 eserlik derlemeleri vaka yöntemini bir müdahale olarak analiz etmez. [[csaszar-ai-management-education-2026|Csaszar ve çalışma arkadaşları (2026)]] vaka temelli öğretimi açıkça tartışmaz; tek vaka göndermeleri ilinekseldir ve bazı vaka çalışmalarının işletme simülasyonlarıyla değiştirildiğini not ederler. Dolayısıyla işletme ve hukuk eğitimi vakalar için kurumsal gerekçeyi sağlar, sonuç kanıtını değil. Komşu vaka benzeri tasarımlar arasında [[ai-standardized-patient-scaffolding-medical-2026|LLM ile iskelelenmiş standart hastalar]] ve vaka temelli öğrenmeyi uygulama kategorileri arasında sayan [[genai-medical-education-transformation-review-2026|tıp eğitimi derlemesi]] yer alır.

## YZ ile vaka tasarlamak ve kolaylaştırmak

- **Vakayı bir karar veya ayırt etme etrafında yazın.** Sonuç doğuran bir seçimi olmayan vaka bir okumaya dönüşür. Öğrencilerin neyi fark etmesi, kararlaştırması veya gerekçelendirmesi gerektiğini belirtin, sonra olguları ve belirsizlikleri bu hedef etrafında kurun.
- **Üretilen vakaları amaçlanan akıl yürütmeye göre kontrol edin.** YZ, yapısal olarak yanlış ama akıcı klinik veya hukuki ayrıntı üretebilir. Vaka öğrencilere ulaşmadan önce bir konu uzmanına olguları, atlananları ve akıl yürütme yolunu inceletin.
- **Vakanın belirsizliğini koruyun.** Her gerilimi çözen üretilmiş bir vaka, yargıyı değil tanımayı öğretir. Tartışmayı gerekli kılan eksik bilgiyi ve yarışan yorumları koruyun.
- **Hedef ayırt etme olduğunda karşıt vakalar kullanın.** Öğrencilerin fark etmesi gereken özellikte farklılaşan vakaları eşleştirin ve onlardan her birini yalnızca sınıflandırmalarını değil, aradaki farkı açıklamalarını isteyin.
- **Tartışmayı yanıt dağıtımından koruyun.** Vaka çalışması sırasında bir YZ özel öğretmeni varsa, onu sorular, ipuçları veya rol yapmayla sınırlayın. Tanıyı veya hukuki sonucu sağlayan bir YZ, vakanın yaratmak için var olduğu bilişsel işi ortadan kaldırır.
- **Vakanın hatırlanmasını değil, akıl yürütmeyi değerlendirin.** Bir gerekçe, bir ayırıcı tanı, bir karşılaştırma veya bir karar notu isteyin. Vaka olguları hakkında bir sınav geçilebilirken alttaki akıl yürütme yok olabilir.
- **Öğretim elemanının kolaylaştırmasını tasarımın parçası olarak ele alın.** Soruların sırası, açıklamanın zamanı ve yanlış bir dönüşün ele alınışı süs değildir. Vakanın verimli bir başarısızlığa mı yoksa kafa karıştırıcı bir başarısızlığa mı dönüşeceğini bunlar belirler.

## Sınırlar ve kanıt boşlukları

Kanıt belirli bir biçimde zayıftır. Perioperatif çalışma vaka temelli öğretimin öğrenmeyi iyileştirip iyileştirmediğini değil, temellendirilmiş bir modelin beş vaka hakkındaki soruları yanıtlayıp yanıtlayamadığını test eder. Hemşirelik çalışması vaka oluşturma süresini ve tartışma kalitesini dokuz öğrenciyle test eder. Meta analiz altı denemeyi havuzlar, bunlardan yalnızca ikisi vaka temelli öğrenmeyi test etmiştir ve bilgi sonucu PBL ile vaka temelli öğrenmeyi karıştırır. Hukuk ve işletme derlemeleri kullanımları ve kurumsal bağlamları betimler; vaka yönteminin etkilerini yalıtmaz. Karşıt vakalar çalışması, vaka biçimlerinin kontrollü bir karşılaştırması değil, bir ders değerlendirmesidir.

Kavramsal bir risk de vardır. Bir vaka, anlayış ürettiği için değil, canlı olduğu için akılda kalabilir. Bir tartışma, öğrenciler akıl yürüttüğü için değil, konuştuğu için verimli hissettirebilir. Alan, vakayı kolaylaştırmadan, biçimi konu alanından ve anlık katılımı gecikmeli aktarımdan ayıran tasarımlara ihtiyaç duyar. O zamana kadar dürüst iddia, vakaların makul YZ desteğine sahip, iyi yerleşmiş bir mesleki pedagoji olduğudur; YZ destekli vakaların kanıtlanmış bir öğrenme avantajı olduğu değil.

## Yaygın yanlış anlamalar

- **“Vaka temelli öğrenme, hikâyesi olan problem temelli öğrenmedir.”** PBL, kötü yapılandırılmış bir problemden yola çıkan öğrenci yönelimli sorgulamadır. Vaka temelli öğrenme genellikle hazırlanmış bir vakayla ve daha tanımlı bir öğretim hedefiyle başlar.
- **“Gerçekçi bir vaka kendi kendine öğretir.”** Gerçekçilik bağlam sağlar. Öğrenmeyi sorular, karşılaştırmalar ve gerekçelendirme görevleri sağlar.
- **“YZ tarafından üretilen vakalar kullanıma hazırdır.”** Üretilen vakalar akıcı, makul ve yanlış olabilir. Uzman incelemesine ve davet ettikleri akıl yürütmenin kontrolüne ihtiyaç duyarlar.
- **“Öğrenciler tartışmadan keyif alıyorsa vaka işe yaramıştır.”** Katılım aktarım değildir. Sonuç, öğrencilerin önceden tamamlayamadığı bir görevde ölçülmelidir.

## Bağlı kavramlar

- [[problem-based-learning]]
- [[productive-failure]]
- [[inquiry-based-learning]]
- [[pedagogical-patterns]]
- [[simulation]]
- [[professional-training]]
- [[legal-education]]
- [[business-education]]
- [[medical-education]]
- [[nursing-education]]
- [[critical-thinking]]
- [[ai-literacy]]
- [[hallucination-risk]]
- [[human-in-the-loop-ai]]
- [[assessment]]
- [[higher-ed]]

## Bağlı makaleler

- [[trewren-ai-perioperative-case-based-learning-2026]] — Temellendirilmiş bir LLM beş perioperatif vakayı içerik uydurmadan bir arada tuttu
- [[higashitsuji-chatgpt-case-creation-nursing-2025]] — ChatGPT hemşirelik vaka oluşturma süresini ölçülen bir kalite farkı olmadan kısalttı
- [[wei-ai-pbl-cbl-medical-dental-meta-analysis-2025]] — YZ destekli PBL/CBL üzerine altı RKÇ; yalnızca ikisi CBL’yi test etti
- [[scaffolding-critical-engagement-genai-minority-students]] — Bir üretici YZ dersinde karşıt vakalarla öğretmen modellemesi
- [[ai-standardized-patient-scaffolding-medical-2026]] — Sanal ve simüle hastaların yanında vaka temelli öğrenme
- [[genai-medical-education-transformation-review-2026]] — Derlemenin uygulama kategorileri arasında vaka temelli öğrenme ve klinik akıl yürütme
- [[hardie-genai-nursing-scoping-review-2026]] — Bir hemşirelik derlemesinin simülasyon teması içinde vaka temelli öğrenme
- [[lorteau-sarro-ai-legal-education-2025]] — YZ, Sokratik öğretimi ve hukuk simülasyonlarını tamamlar
- [[csaszar-ai-management-education-2026]] — İşletme eğitiminin vaka çalışmaları ve simülasyonları, vaka yöntemi analizi olmadan
