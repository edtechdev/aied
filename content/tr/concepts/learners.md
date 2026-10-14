---
title: "Öğrenenler"
created: "2026-10-14T21:30:00-04:00"
type: concept
foundations: [agency, learner-identity, ai-literacy]
pedagogy: [self-regulated-learning, motivation, metacognition, student-engagement, help-seeking, prior-knowledge, desirable-difficulties]
technology: [student-modeling, knowledge-tracing, simulating-students, adaptive-learning, personalized-learning]
ethics: [equity-in-ai-education, inclusive-learning]
level: [higher ed, k 12, adult learning]
audience: [learners, instructors, researchers]
connected_faqs: [how-ai-impacts-students, does-ai-help-students-learn, reducing-over-reliance, study-with-ai]
confidence: high
reviewed_by: [editor]
translation_of: concepts/learners
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sentez:** Öğrenenler, [[ai-education|Eğitimde Yapay Zeka]]’nın birincil kitleleridir — YZ’nin artık çalışmasını, anlayışını ve benlik algısını şekillendirdiği [[k-12]], [[higher-ed]] ve [[adult-learning]] öğrencileri. Bu sayfa, bilgi tabanının öğrenen tarafı kapsamına ilişkin şemsiye sayfasıdır: öğrenenlerin ne deneyimlediği ([[student-experience]]), kim olmaya başladıkları ([[learner-identity]]), hâlâ neyi seçtikleri ([[agency]]), araçla fiilen nasıl etkileşime girdikleri ([[student-ai-interaction]]), çabaları ile [[self-regulated-learning|öz-düzenleme]] becerilerinin bunun altında ayakta kalıp kalmadığı ([[cognitive-offloading]]) ve YZ sistemlerinin onları nasıl modellemiş olduğu ([[student-modeling]]). Bu araştırma boyunca yinelenen bulgu, aynı aracın farklı öğrenenlere farklı şekilde yardım ettiği ve zarar verdiğidir — kazançlar, [[prior-knowledge|önceki bilgi]], [[ai-literacy|YZ okuryazarlığı]] ve doğrulama alışkanlıklarının zaten mevcut olduğu yerlerde yoğunlaşır; tersine dönüş ise YZ’nin, görevin geliştirmeyi amaçladığı düşünmenin yerine geçtiği yerlerde yoğunlaşır.

## Dikkate Alınması Gereken Sorular

- Kendi bağlamınızdaki hangi öğrenenlere yeni bir YZ aracı ilk anda ulaşır, hangileri dışarıda kalır — ve bunu düşünmenize neden olan şey nedir?
- Araştırmalar sıklıkla öğrencilerin YZ’nin kendilerine yardım ettiğine *inandığını*, YZ yardımı almadan yapılan ölçümlerin ise kazanım veya kayıp göstermediğini bildirir. Bir öğrenenin kendi anlatımı güvenilir bir kanıt değilse, öğrenmenin gerçekleştiğine dair hangi kanıtı kabul ederdiniz?
- Öğrenenler burada hem YZ kullanan kişiler hem de YZ modellerinin modellemiş olduğu nesneler olarak betimlenir ([[student-modeling|öğrenen modelleri]], [[knowledge-tracing|bilgi izleme]], [[simulating-students|simüle edilmiş öğrenciler]]). Bir öğrenenin modeli nerede öğretime bilgi kazandırmalı, nerede güvenilmeyi bırakmalıdır?
- [[self-regulated-learning|Öz-düzenleme]] ve [[prior-knowledge|önceki bilgi]], YZ desteğinin öğrenmeye mi yoksa ikameye mi dönüştüğünü belirler. Bu, giderilmesi gereken bir öğrenen eksikliği mi, çözülmesi gereken bir tasarım sorunu mu, yoksa düzeltilmesi gereken bir değerlendirme sorunu mudur?
- Bir öğrenci grubu bir YZ aracıyla kötü sonuç alıyorsa bunu en son duyan genellikle aracın tasarımcıları olur. Sizce kurumunuzda uygulamadan önce ve sonra öğrenenlerden ses duymanın yordamı gerçekte nasıl görünürdü?
- Başarıyla birlikte [[agency|öğrenci etkenliği]] ve [[learner-identity|kimlik]] de tehlikededir. Bunlardan hangisini ölçülebilir [[learning-gains|puan kazanımları]] uğruna elden çıkarmayı reddederdiniz — ve değerlendirme tasarımınız bu reti görünür kılar mıydı?

## Giriş

Öğrenenler bu bilgi tabanında birbirinden çok farklı iki biçimde görünür ve bu ikisini birbirine karıştırmak alandaki kafa karışıklığının çoğuna neden olur. Birincisinde öğrenenler **YZ kullanan kişilerdir**: soru sorarlar, yanıtları kabul eder veya reddederler, ayakta kalır veya tökezlerler; destek, suçluluk, kaygı ve bağımlılık deneyimlerini aktarırlar. İkincisinde öğrenenler, **YZ sistemlerinin modellemiş olduğu nesnelerdir**: [[knowledge-tracing|bilgi izleme]]de bir beceri tahmini, [[cognitive-diagnosis|bilişsel tanılamada]] gizli bir durum veya gerçek bir öğrencinin yerini tutan bir [[simulating-students|simüle edilmiş öğrenci]]. Birincisine ilişkin kanıtlar anketlerden, görüşmelerden, kayıt analizinden ve deneylerden gelir; ikincisine ilişkin kanıtlar ise ölçümün kendi makinesinden gelir — ve bir öğrenenin modeli bir öğrenci değil, bir iddiadır.

Bu sayfa her ikisi için de giriş noktasıdır. Bilgi tabanının kapsadığı öğrenen tarafı kavramlarını toplar, bunların nasıl ilişkili olduğunu açıklar ve arkalarındaki çalışmalara bağlantı verir. [[stakeholders]] aynı alanın diğer tarafını kapsar — [[teacher-role|öğretmenler]], [[administrator|yöneticiler]], tasarımcılar ve politika yapıcılar — ve iki sayfa birlikte okunmak üzere tasarlanmıştır.

## Öğrenen kim sayılır?

Bilgi tabanı öğrenenleri resmi eğitimin tüm yelpazesinde ele alır: [[k-12]] ilkokul/ortaokul/lise öğrencileri, [[higher-ed|üniversite öğrencileri]], [[vocational-education|mesleki]] ve [[professional-training|profesyonel]] öğrenciler ile [[adult-learning|yetişkin]] ve [[lifelong-learning|yaşam boyu]] öğrenenler; bunlar arasında [[special-education|engelli öğrenenler]], [[neurodiversity|nörodivrjan]] öğrenenler ve [[multilingual-learning|çok dilli]] öğrenenler de bulunur. İki ayrıma dikkat etmek gerekir. Birincisi, “öğrenenler” ve “öğrenciler” kullanışlı bir biçimde birbirinin yerine kullanılamaz: *öğrenci* kurumsal bir rolü, *öğrenen* ise bir etkinliği adlandırır ve bir kişi diğeri olmadan biri olabilir ([[professional-training|iş yeri eğitimindeki]] bir çalışan öğrenendir ama öğrenci değildir). İkincisi, öğrenenler homojen bir grup değildir ve araştırmaların sürekli yüzeye çıkardığı şey tam olarak bu heterojenliktir — [[prior-knowledge|önceki bilgi]], [[self-regulated-learning|öz-düzenleme]], dil, erişim ve engellilik durumu, bir YZ aracının yardımcı olup olmayacağını değiştirir.

## Öğrenenlerin deneyimledikleri

[[student-experience]], Eğitimde YZ’nin en çok araştırılan boyutlarından biridir ve onun merkezi dersi etkilerin tek tip değil karışık olduğudur. [[student-perceptions-ai-study-productivity-2026|Çalışma verimliliğine ilişkin anket çalışması]], öğrenenlerin gerçek verimlilik kazanımları bildirdiğini — \%92.3’ü YZ’nin anlayışlarını geliştirdiğini söyler — ve bunun yanında manşet sayıların sakladığı bir boşluk olduğunu bulur: yalnızca \%38.5’i YZ’nin toplam çalışma sürelerini azalttığını söyler ve yarısı bazen bağımsız öğrenmeyi denemek yerine YZ’ye bel bağladığını bildirir. [[uneven-impact-generative-ai-student-learning-2026|Bağımlılık örüntülerinin analizleri]] daha da ileri gider: farklı düzeylerde [[ai-literacy|YZ okuryazarlığı]] ve değerlendirme becerisine sahip öğrenciler araçla nitelikçe farklı ilişkiler içinde bulurlar, böylece aynı kurs politikası farklı öğrenciler için farklı sonuçlar üretir — kimileri için destek, kimileri için ikame. [[genai-student-experiences-uk-he-survey-2026|Öğrenciler en az çabanın çekiciliğini kendi sözleriyle betimler]]; [[academic-integrity]] ve [[misconceptions]] sayfaları bunu ahlaki bir sorundan çok bir tasarım ve politika sorunu olarak ele alır.

Duygusal taraf bilişsel anlatıyla yürür: [[anxiety-and-stress]] ve [[well-being]], geride kalmaya, usulsüzlükle suçlanmaya ve takip edilen derecenin değerine ilişkin kaygıyı belgeler. Öğrenenlerin YZ’ye dair zihinsel modelleri — YZ’nin ne olduğunu ve ne için olduğunu ne sandıkları — onu iyi kullanıp kullanmayacaklarının önündedir; bu nedenle [[misconceptions]] ve [[framing-ai-use-for-students]] öğrenen tarafı araştırmaların tamamında görülür.

Öğrenen anlatımları, öğrenen tarafı politikanın çoğunu çerçeveleyen dürüstlük anlatısını da karmaşıklaştırır. [[mulisa-students-genai-integrity-perspectives-2026|Etiyopya’daki bir üniversitedeki 27 lisans öğrencisiyle yapılan görüşmeler]], neredeyse evrensel GenAI kullanımını gerçekten bölünmüş bir [[ethics|etik]] okuma ile birlikte bulur: çoğunluk araçlara başarılarını yükselttiği kredisini verir, azınlık ders çalışmasında kullanımı usulsüzlük sayar ve neredeyse hepsi, YZ kullananların çalışkan bağımsız çalışanların üzerinde puan aldığı eşit olmayan bir saha olduğunu bildirir; bir tanesi etkiyi çalışkanlık duygusunu öldüren bir şey olarak niteler. Usulsüzlük prosedürünün öğrenci tarafı, edebiyatta kullanımın öğrenci tarafından daha incedir, ama [[munoz-misconduct-allegation-evidence-2026|1.162 GenAI iddiasının dosya analizi]], kurumsal yanıt geldiğinde öğrenenlerin karşılaştıklarını gösterir: en sık atıf yapılan kanıt en zayıf dereceli türdendir, bir davanın ilerleyip ilerlemeyeceğini yöneten asgari bir kanıt eşiği yoktur ve kanıtı zayıf olgular üzerinde yürüyen öğrenciler itirazlara yönlendirilir.

## Kimlik, etkenlik ve yazarlık

Öğrenen tarafı araştırmalar yalnızca sonuçlarla ilgili değildir. [[learner-identity]], bir öğrenenin bir disipline ve YZ’ye kıyasla kim olmaya başladığını sorar ve kanıtlar iki yönde işler: iyi tasarlanmış kullanım disipline aidiyeti iskeleye koyabilirken, dış kaynak kullanımı işin kendi işi olduğu hissini aşındırabilir. [[agency]], öğrenenin hâlâ neyi denetlediğini sorar. Bilgi tabanı ikisini de gerçekten tehlikede olan konular olarak, başarının yumuşak tamamlayıcıları olarak değil ele alır: YZ ile doğru çıktı üreten ve ardındaki akıl yürütmeyi artık tanımayan bir öğrenen, notun kaydetmediği bir şeyi kaybetmiştir. Yazarlık sorusu, öğrenenlerin kendilerinin en çok zorlandığı yerdir: [[mulisa-students-genai-integrity-perspectives-2026|GenAI ve dürüstlük üzerine görüşülen öğrenciler]], başka hiçbir yazar bulunmadığı gerekçesiyle özgünlük iddia ettiler — “Benim özgün fikrim değilse, öyleyse kimin?” — oysa diğerleri işin kendilerini temsil etmediği sonucuna vardı ve bir tanesi, YZ bir kişi olmadığı için olamayacağı bir ortak yazar olarak aracı tanıma noktasına doğru akıl yürüttü.

## YZ ile etkileşim: öğrenenler fiilen ne yapar?

[[student-ai-interaction]] sayfası, öğrenenlerin YZ’den ne istediğini, isteme metinlerinin ve diyaloglarının nasıl evrimleştiğini ve etkileşim kalitesinin neden erişimden daha iyi [[learning-gains|öğrenme sonuçlarını]] yordadığını toplar. [[student-llm-interaction-taxonomy-review-2026|33 çalışmadan çıkarılan 46 sınıflandırmanın hızlı kapsam taraması]], kanıt tabanını kavramsal olarak parçalı bulur — çalışmalar veri kaynağı, kategori şeması ve analiz birimi açısından farklılık gösterir, böylece “kaliteli etkileşim” aralarında henüz karşılaştırılabilir bir yapı değildir ve incelemenin çağrısı, var olduğuna dair bir iddiadan çok öğrenme odaklı [[llm]] kullanımının yakınsak bir sınıflandırmasıdır. [[student-ai-conversations-cognitive-engagement-2026|Sohbet içeriğinin çalışmaları]], öğrenenlerin kendilerini karakteristik biçimlerde disipline ettiğini bulur; başlıca iddiaları sorgulayıp sınamaktan ilk makul yanıtı kabul etmeye uzanan bir katılım yelpazesinde. [[help-seeking]] daha eski çerçeveyi sağlar: yardım istemek bir beceridir ve yanlış yardımcıya yanlış biçimde yardım istemek, YZ’nin ortadan kaldırmadığı bilinen bir hata kipidir.

## Çaba, öz-düzenleme ve performans–öğrenme uçurumu

Burası, öğrenen tarafı kanıtların en sonuç açısından belirleyici olduğu yerdir; çünkü öğrenenlerin *YZ ile yapabildiklerini* ondan yoksun *yapabildiklerinden* ayırır.

[[cognitive-offloading]] aşırı bel bağlama kanıtlarını toplar; [[genai-performance-vs-learning]], destekli performansın ve desteğiz yeteneğin ayrı ayrı ölçülmesi gerektiğine ilişkin merkezi yöntemsel noktayı ortaya koyar; [[layer-sensitive-cognitive-offloading-writing-2026|Yazmaya ilişkin katmana duyarlı çalışmalar]] yüzey, yapı, fikir ve akıl yürütme düzeyinde dış kaynak kullanımını ayırır ve en az sınırlandırılmış koşulda en yüksek desteklenen performansı, bunun yanında sekiz hafta sonraki en düşük bağımsız performansı bulur; [[shaw-nave-cognitive-surrender-2026|Shaw ve Nave’in bilişsel teslimiyet anlatımı]], devretmeyi stratejik olmaktan çok alışkanlık hâline getiren eğilimi adlandırır. [[metacognitively-discordant-completion-genai-2026|Üstbilişsel uyumsuzluk]] rahatsız edici orta durumu belgeler — anlamadıklarını fark eden ve yine de teslim eden öğrenenler — ve [[verification-quality-reliance-calibration-genai-2026|doğrulama araştırması]], “kontrol etmenin” kendisinin ikili bir alışkanlık değil, dereceli bir beceri olduğunu gösterir. Tasarım tarafında, [[desirable-difficulties|üretken zorluk]] ve [[reducing-ai-misuse]], görevin gerektirdiği çabayı geri kazanan müdahaleleri toplar.

## Öğrenenler modeller olarak

En uzun teknik soyolu olan öğrenen tarafı kavramlar, öğreneni sisteme temsil edenlerdir. [[student-modeling]] aileyi kapsar: zaman içinde beceri edinimini tahmin eden [[knowledge-tracing]], belirli yanlış kanıları yerleştiren [[cognitive-diagnosis]] ve bu tahminleri tüketen uyarlanabilir ile [[personalized-learning|kişiselleştirilmiş]] sistemler. [[simulating-students]] ve [[simulating-students-llm-review-2026|onun incelemesi]], [[simulation]]’ı gerçek öğrenenler ulaşılamadığında [[intelligent-tutoring|öğretmenleri]] sınamak ve veri üretmenin bir yolu olarak ele alır — açıkça geçici bir vekil, bir ikame değil. Bu edebiyatta iki uyarı yürür: model tahminleri, maddelerin ve arayüzlerin nasıl kurulduğuna duyarlı, davranıştan yapılan çıkarımlardır ve [[demographic-signals-llm-student-assessment-2026|demografik sinyallerin çalışmaları]], değerlendirme sistemlerinin yapının parçası olması hiç amaçlanmamış öğrenen kimliğinin vekillerini (dil, geçmiş) toplayabileceğini gösterir. [[self-report-measures]], araştırma tarafındaki ayna problemine ilişkindir: öğrenenlerin kendi öğrenmeleri hakkında söyledikleri, yapabildiklerinden sıklıkla ayrışır.

## Öğrenenler arasında eşitlik

Faydalar önceki avantajı izlediği için öğrenen tarafı çalışma [[equity-in-ai-education]] ile ayrılmaz bir bütündür. [[digital-divide]] ve ücretli model kademelerine erişim, en güçlü araçları kimin aldığını şekillendirir; [[bias-mitigation|adillik]] kaygıları, öğrenilmiş modellerin farklı gruplara davranışını yönetir; [[inclusive-learning]], [[accessibility]], [[special-education]] ve [[neurodiversity]], ihtiyaçlarını varsayılan tasarımın göz ardı ettiği öğrenenleri kapsar. Bu araştırmanın pratik dersi, “YZ öğrencilere yardım eder” ifadesinin bir bulgu olmadığıdır — bulgu her zaman *hangi* öğrenciler, *ne* koşullarda, *ne* önceki bilgi ve erişimle olduğudur. O riskin belirgin bir payını iki grup taşır. [[wright-transcription-not-generation-2026|Wright (2026)]], “[[generative-ai|üretken YZ]]”den çok işlev etrafında yazılan yasakların, bir öğrenenin zaten kaleme aldığı işin biçimini dönüştüren transkripsiyon araçlarını yakaladığını; böylece ortaya çıkan yanlış pozitiflerin, ses-metin ve OCR’ye bel bağlayan ve yapay zekâ destekli OCR’nin kullanımdan kaldırılmış yardımcı yazılımların yerini aldığı durumlar dâhil, engelli öğrenenlere en ağır düştüğünü savunur; [[harerimana-remote-proctoring-nursing-scoping-2026|uzaktan gözetim kapsam taraması]], değerlendirme koşullarına ilişkin paralel noktayı ortaya koyar ve kimin hiç değerlendirilebileceğine bağlantı, veri maliyeti ve cihaz arızasının karar verdiğini bulur — bu teknik değil bir eşitlik bulgusudur ve düşük ve orta gelirli ülkelerde yoğunlaşmıştır.

## Bu sayfanın yeri

Öğrenenin çevresindeki insanlar için [[stakeholders]], öğretmenlerin bu bulgularla ne yaptığı için [[pedagogy]] ve [[learning-design]] ile birlikte okuyun. [[assessment]], hangi öğrenen yetilerinin hiç görünür kılındığına karar verir; [[limitations-in-aied-research]], öğrenen tarafı kanıtların çoğunun neden kısa vadelik, öz-bildirimli ve uygunluk örneklemleriyle yürütüldüğünü açıklar; [[misconceptions]] ise öğrenenlerin kendileri için olağan giriş noktasıdır.

## Bağlı kavramlar

- [[differential-effects-across-learner-groups]]
- [[student-experience]] — Öğrenenlerin YZ’yi nasıl algıladığı, onunla nasıl etkileşime girdiği ve ondan nasıl etkilendiği
- [[learner-identity]] — Öğrenenlerin bir disipline ve YZ’ye kıyasla kim olmaya başladığı
- [[agency]] — Öğrenenlerin hâlâ denetlediği ve seçtiği
- [[student-ai-interaction]] — Öğrenenlerin YZ’den fiilen ne istediği ve diyalogların nasıl evrimleştiği
- [[cognitive-offloading]] — Aşırı bel bağlama ve YZ’nin düşüncenin yerine geçmesi
- [[self-regulated-learning]] — Kendi öğrenmesini planlama, izleme ve ayarlama
- [[help-seeking]] — İyi yardım istemek ve öğrenenlerin istemediği zaman ortaya çıkan hata kipleri
- [[metacognition]] — Neyi anladığını ve neyi anlamadığını bilmek
- [[motivation]] — Öğrenenlerin neden direndiği veya neden bıraktığı
- [[self-efficacy]] — Öğrenenlerin kendi yeteneklerine duyduğu güven
- [[student-engagement]] — Davranışsal, duygusal ve bilişsel katılım
- [[prior-knowledge]] — Desteğin öğrenmeye dönüşüp dönüşmeyeceğine karar veren arka plan bilgisi
- [[student-modeling]] — Öğreneni sistemin içinde temsil etmek
- [[knowledge-tracing]] — Beceri edinimini zaman içinde tahmin etmek
- [[simulating-students]] — Geçici vekil olarak YZ tarafından simüle edilmiş öğrenenler
- [[ai-literacy]] — Öğrenenlerin YZ’yi iyi kullanıp kullanmayacağına karar veren yetkinlik
- [[equity-in-ai-education]] — Kimin fayda gördüğü ve kimin dışarıda kaldığı
- [[well-being]] — YZ aracılı çalışmanın kaygı, stres ve duygusal maliyeti
- [[misconceptions]] — Öğrenenlerin YZ’ye getirdiği zihinsel modeller
- [[stakeholders]] — Aynı alanın diğer tarafı: öğretmenler, liderler, tasarımcılar
- [[assessment]] — Hangi öğrenen yetilerinin hiç görünür kılındığı

## Bağlı makaleler

- [[uneven-impact-generative-ai-student-learning-2026]] — Bağımlılık örüntüleri ve değerlendirme okuryazarlığı öğrenci sonuçlarını böler
- [[student-perceptions-ai-study-productivity-2026]] — Öğrenenler bağımlılık kaygılarıyla birlikte verimlilik kazanımları bildiriyor
- [[student-llm-interaction-taxonomy-review-2026]] — Öğrenci–YZ etkileşiminin sınıflandırması
- [[student-ai-conversations-cognitive-engagement-2026]] — Öğrenci–YZ sohbetinde disipline özgü örüntüler
- [[layer-sensitive-cognitive-offloading-writing-2026]] — Bağımsız yetkinlik olmadan destekli performans kazanımları
- [[genai-performance-vs-learning]] — Destekli performansın ve desteğiz öğrenmenin neden ayrı ölçülmesi gerektiği
- [[shaw-nave-cognitive-surrender-2026]] — Bir kaza değil, bir eğilim olarak bilişsel teslimiyet
- [[metacognitively-discordant-completion-genai-2026]] — Anlamadıklarını fark eden ve yine de teslim eden öğrenenler
- [[verification-quality-reliance-calibration-genai-2026]] — Doğrulama kalitesi ve bel bağlama kalibrasyonu
- [[simulating-students-llm-review-2026]] — Simüle edilmiş öğrenenler: mimari, mekanizmalar ve sınırlar
- [[stanbkt-bayesian-knowledge-tracing]] — Bayesçi bilgi izlemede parametre tahmini
- [[demographic-signals-llm-student-assessment-2026]] — YZ temelli değerlendirmede örtük ve açık demografik sinyaller
- [[ai-literacy-learning-engagement-psych-capital-2026]] — YZ okuryazarlığı, katılım ve psikolojik sermaye
- [[genai-student-experiences-uk-he-survey-2026]] — Öğrenciler en az çabanın çekiciliğini betimliyor
- [[mulisa-students-genai-integrity-perspectives-2026]] — GenAI’nin bir hile aracı mı yoksa bir öğrenme ortağı mı olduğuna ilişkin öğrenci görüşleri
- [[munoz-misconduct-allegation-evidence-2026]] — Usulsüzlük iddia dosyalarının kanıt olarak fiilen içerdikleri
- [[wright-transcription-not-generation-2026]] — Aşırı kapsamlı YZ kuralları ve onların yakaladığı öğrenciler
- [[sharma-judgment-visible-genai-assessment-2026]] — Uyumdan çok değerlendirici yargı olarak dürüstlük
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Uzaktan gözetimin öğrenciler için duygusal ve eşitlik maliyetleri
