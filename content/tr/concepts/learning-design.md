---
title: Öğrenme Tasarımı
created: "2026-10-14T21:52:00-04:00"
type: concept
foundations: [ai-literacy, curriculum-design, educational-development, learning-design, teacher-role]
pedagogy: [scaffolding]
technology: [generative-ai]
audience: [instructors, faculty developers]
level: [higher ed]
connected_faqs: [top-10-findings-ai-education-instructors, incorporating-ai-literacy, designing-ai-into-learning, designing-educational-ai-software, asynchronous-online-courses-ai]
confidence: high
connected_resources: [claw-ed, education-agent-skills, edugems, id-toolbox, idstack, lesson-md, liascript, master-instructional-design, onmicro-ai, pedagogical-promptbook, playlab, vibes-diy, intelligent-textbooks]
reviewed_by: [editor]
translation_of: concepts/learning-design
source_updated: "2026-10-03T02:57:43-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: revision
    date: "2026-09-22"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Öğrenme Tasarımı** (*öğretim tasarımı* olarak da bilinir) — öğrenme gereksinimlerinin analizi ile öğretim materyalleri ve etkinliklerinin tasarımı, geliştirilmesi, uygulanması ve değerlendirilmesi yoluyla etkili öğrenme deneyimleri yaratmanın sistematik süreci. YZ, içerik üretimini otomatikleştirerek, [[adaptive-learning|uyarlanabilir öğrenme]] yollarını mümkün kılarak, veri kaynaklı yinelemeyi destekleyerek ve öğretim tasarımcısının rolünü değiştirmekten çok güçlendirerek öğrenme tasarımını dönüştürmektedir.

## Dikkate Alınması Gereken Sorular

- Deneyimlediğiniz ya da tasarladığınız bir kursu ya da dersi düşünün. “Ne öğretileceği” (öğretim programı) nerede bitiyor, “nasıl öğretileceği” (öğrenme tasarımı) nerede başlıyor — ve ikisi nasıl etkileşti?
- Yaygın bir varsayım, daha iyi YZ akıcılığının otomatik olarak daha iyi eğitim içeriği ürettiğidir. Sayfa, bunu, öğrenme etkililiğini belirleyen şeyin YZ akıcılığı değil, açık pedagojik yapı olduğuna dair kanıtlarla karşılar. Öğretmeyi başaramayan etkileyici çıktıları nerede gördünüz?
- Bir YZ aracı tek bir istek metninden tam bir kurs üretebiliyorsa, hangi insan kararları daha az değil daha çok önem kazanır? Sayfa, YZ’nin öğretim tasarımcısının rolünü değiştirmekten çok güçlendirdiğini savunuyor — bu güçlendirilmiş rol nasıl görünürdü?
- ADDIE gibi bazı öğretim tasarımı modelleri katı, doğrusal adımlar olarak kullanılır. Oysa sayfa bunları yinelemeli, esnek planlama sezgisel kuralları olarak ele alır. Bir süreç fazla kelimesi kelimesine izlendiğinde iyi tasarım ne zaman zarar görebilir?
- Sayfa, pedagojik temelli istek metni yazmanın — örneğin öğrenme kuramına dayalı beş adımlı bir çerçevenin — üst düzey sonuçları belirgin biçimde iyileştirdiğini gösteriyor. Bir YZ mentoru kuruyor olsanız, öğretme stratejisini izlenebilir ve yeniden üretilebilir kalması için açık bir tasarım katmanına ne kodlardınız?

## Giriş

Öğrenme tasarımı, YZ yetenekleri ile etkili pedagoji arasında köprü kurar. [[curriculum-design]] program düzeyinde *ne* öğretileceğini eleştirirken, öğrenme tasarımı kurs ve ders düzeyinde *nasıl* öğretileceğini ele alır. Bu bilgi tabanındaki makaleler hem öğrenme tasarımcıları için bir araç olarak YZ’yi hem de etkili [[intelligent-tutoring|YZ mentorluğu]] sistemleri kurmak için öğrenme tasarımı ilkelerini inceler.

Bu tasarım işinin pratikte neleri içerdiği de kendisi ampirik bir sorudur. [[tang-chatbots-learning-design-2026|Tang ve ark. (2026)]], bir tasarım aracına gömülü sohbet robotuyla çalışan beş acemi öğrenme tasarımcısının 1.378 tasarımcı-sohbet robotu dönüşünü kodladı ve diyalogun içerik üretiminden çok amaçlanan öğrenme sonuçları ve pedagojik yaklaşım üzerinde kümelendiğini buldu. Tasarımcılar, öğretim programı bileşenlerini somut görevlere dönüştürürken hizalama denetimi olarak sonuçlara tekrar tekrar döndü ve yardımcının rolü aşamalar boyunca değişti: terimleri netleştirmekten görev tasarımını desteklemeye, bir teslim tarihinden önce doğrulama turu yürütmeye geçti. Bu kanıta göre tasarım desteği, materyal üretmekten çok tasarım niyetini tutarlı tutmakla ilgilidir.

Öğrenme analitiği ve üretken YZ, tasarımın farklı bölümlerini destekler: bir Avustralya üniversitesindeki 11 odak grubunda analitik söylemi en çok bağlam ve kurs düzeyinde problem çözmeyle birlikte göründü (0,32), oysa GenAI söylemi değerlendirme tasarımı (0,26) ve öğrencinin özbelirlemesi için tasarım (0,15) üzerinde yoğunlaştı ([[claassen-learning-analytics-genai-learning-design-2026|Claassen ve ark. (2026)]]).

### Temel araştırma temaları

**YZ destekli içerik üretimi**, en doğrudan dönüştürücü uygulamadır. **[[curriculum-as-code-instructional-design-2026|Curriculum as Code]]**, üretken YZ’yi LaTeX ve Python ile bütünleştirerek [[stem-education|STEM]] materyali üretimini otomatikleştiren altı aşamalı bir mimari sunar; 8 modül ve 28 proje bağlamında doğrulanmış ve öğrenci kalite puanları 8,5-9,9/10 olmuştur. **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]**, rol temelli aracıların (Öğretim Kadrosu, Öğretim Tasarımcısı, Kurs Koordinatörü) eksiksiz kurs materyalleri üretmek için işbirliği ettiği, ADDIE modeli çevresinde yapılandırılmış çok aracılı bir çerçeve kullanır. **[[courseblueprint-adaptive-video-generation|CourseBlueprint]]**, kurs derlemlerine dayalı uyarlanabilir [[pedagogy|pedagojik]] [[video-education|video üretimi]] için yapılandırılmış bir hat sunar ve eğitim içeriği üretiminde yalnızca YZ akıcılığı değil, açık pedagojik yapının gerekli olduğunu gösterir. [[generative-ai|Üretken YZ]] platformları, ürettikleri içerikte öğrenme tasarımı ilkelerini de somutlaştırabilir: [[ai-modeling-problem-generation-platform-2026|matematiksel modelleme problemleri üreten bir YZ destekli platform]], kurulmuş tasarım ilkelerini [[prompt-engineering|erişimle güçlendirilmiş üretim]] ile birleştirdi; geleneksel içerik üreticilerde bulunmayan, pedagojik temelli görevler ve öneriler üretmek üzere ADDIE yaklaşımıyla geliştirildi. Yine de bu tür YZ destekli içerik ve ders üretiminin getirisi, öğretmenin kendi uzmanlığıyla belirlenir: [[choi-teacher-ai-interaction-lesson-design-2026|Choi ve ark. (2026)]], deneyimli öğretmenlerin YZ üretimli ders fikirlerini öğrencilere ve bağlama göre eleştirel biçimde uyarladığını (yeniden istek metni yazarak ve çıktıyı derinleştirerek), acemilerin ise YZ önerilerini doğrudan kabul etme eğiliminde olduğunu buldu — dolayısıyla YZ içerik araçlarının pedagojik değeri aracın tek başına değil, öğretmenin deneyimi ve YZ yeterliliğine bağlıdır. [[wang-teacher-ai-co-design-review-2026|öğretmen–YZ öğrenme görevi ortak tasarımı]] (Wang, Liu & Islam 2026) üzerine sistematik bir derleme, örüntüyü 28 çalışma boyunca (2015–2025) ölçekli olarak doğrular: GenAI başlıca ders planlama, istek metni üretimi ve yaratıcı fikir üretimi için kullanılır ve baskın işbirliği kipi, daha bütüncül bir ortak tasarımcıdan çok yardımcı/içerik üreticisi olarak YZ’dir — verimlilik, duyarlılık, [[creativity]] ve [[equity-in-ai-education|eşitlik]] yinelenen olanak sağlayıcılar olarak öne çıkar. [[talebzadeh-ai-group-activity-roles-2026|Talebzadeh (2026)]], öğretmen uzmanlığı bulgusunu grup etkinliği tasarımı için keskinleştirir: deneyimli öğretmenler, YZ tanıdıklığı ne olursa olsun, acemilerden YZ tasarımlı işbirlikçi etkinliklerde daha zengin, daha bütünleştirici ve ZPY’ye daha iyi hizalanmış rol mimarileri üretir ve YZ çıktısını etkili [[collaborative-learning|ayrıştırılmış grup öğrenmesine]] dönüştüren kaldıraç olarak “pedagojik istek metni okuryazarlığı”nı çerçeveler.

Üretilen materyallerin yetersiz kaldığı yer öğretim programına uyumdur: yedi matematik öğretmeni, YZ üretimli verimli başarısızlık problemlerini genel kalitede insan yapımı olanlara yakın puanladı (25 üzerinden M = 17,19’a karşı 17,43) ancak öğretim programı hizalamasında daha düşük puanladı (M = 2,57’ye karşı 3,29); bu nedenle üretilen problemlerin uzunluk, okuma düzeyi ve görseller için düzenlenmesi gerekti ([[rhaimi-productivemath-2025|Rhaimi ve ark. (2025)]]).

**Pedagojik temelli YZ mentorluğu**, öğretim tasarımı ilkelerini YZ sistem tasarımına uygular. **[[didactical-teacher-assistant-dimensional-modeling|Brisson ve ark.]]**, mentorluk stratejisinin açık bir dış katmanda kodlandığı, didaktik olarak yönlendirilmiş bir [[llm]] öğretmen yardımcısı kurdu — içerik seçimini ve didaktik yapılandırmayı izlenebilir ve yeniden üretilebilir kılarak [[rethinking-scaffolding-llm-tutors]]’daki opaklık kaygılarını doğrudan ele alır. **[[instructional-guidance-genai-learning|Hou ve ark.]]**, üretken [[learning-theories|Öğrenme Kuramı]]’na dayalı beş adımlı bir [[prompt-engineering|istek metni]] çerçevesinin üst düzey bilişsel sonuçları belirgin biçimde iyileştirdiğini göstererek, öğrenme etkililiğini belirleyen şeyin YZ erişimi değil, öğretimsel yönlendirme olduğunu ortaya koyar. Her ikisi de [[scaffolding]] ve [[intelligent-tutoring]]’e bağlanır.

**Çerçeveler ve değerlendirme** yapılandırılmış yaklaşımlar sunar. **[[bridging-instructional-design-framework-math]]** ve **[[cotal-formative-assessment-scoring-2026|CoTAL]]**, [[human-in-the-loop-ai|insan döngüde]] tasarım ilkelerini gösterir. **[[genai-mindtool-generative-learning]]**, YZ’yi “zihin aracı” olarak konumlandırır — öğrenen düşüncesini değiştirmekten çok genişleten bir bilişsel ortak — ve öğretim tasarımı kuramını YZ bütünleşmesine doğrudan uygular. **[[ludia-udl-ai-thought-partner-2026|LUDIA]]**, eğitimciler için erişilebilir bir YZ düşünce ortağı yaratmak üzere Evrensel Öğrenme Tasarımı ilkelerini uygular ve öğretim tasarımını [[inclusive-learning]]’a bağlar. **[[airis-cognitively-activated-ai-physics-2026|AIRIS]]** (Activate–Inquire–Reflect, Etkinleştir–Sorgula–Yansıt), bilişsel olarak etkinleştirilmiş YZ kullanımı için bir görev yapılandırma çerçevesidir; YZ’nin katkısını, tahmin, yorumlama ve değerlendirmenin öğrenende kalacağı biçimde sınırlar — [[self-regulated-learning]], Bilişsel Yük Kuramı ve [[human-ai-collaboration]]’a dayanan sorgulama döngülerinin YZ’ye özgü bir uyarlaması. Bu tasarım çerçevelerini tamamlayan [[dohn-boundary-object-classifying-genai-learning-activities-2026|Dohn ve ark. (2026) taksonomisi]], bir tasarım yöntemi değil bir *sınıflandırma* sunar: alt kategori (Öğrenme Hedefi, İçerik, Temsil Biçimi, Epistemik [[student-engagement|Angajman]], Sosyal Tasarım, Yapıtlar) — tasarımcıların ve [[research-methods-aied|araştırmacılar]]ın, öğrenenlerin GenAI ile neden, ne, nasıl, neyle ve kiminle etkileşime girdiğini açık hale getirerek GenAI öğrenme etkinliklerini betimlemesine, karşılaştırmasına ve hayal etmesine olanak tanır; postdijital diyalog yoluyla bir sınır nesnesi olarak kurulmuştur. Akıllı sınıf çerçeveleri bunu [[teacher-education|öğretmen eğitimi]]ne genişletir: [[instructional-design-proficiency-masters-math-2026|Zhu, Liang, Mao ve Wang (2026)]], akıllı eğitim için üç boyutlu bir çerçeve önerir — öğrenme etkililiği, bilgi ve iletişim teknolojisi (ICT) ve sınıf organizasyonu — ve bunu ders öncesi, ders içi ve ders sonrası aşamalarda [[automated-assessment|otomatik puanlama]], kişiselleştirilmiş öneriler ve çok yönlü [[ai-feedback-quality|YZ geri bildirimi]] bütünleştiren bir [[math-education|matematik]] yüksek lisans kursunda somutlaştırır. Yarı deneysel bir çalışma, öğrencilerin kesin, mesleki temelli öğretim hedefleri formüle etme yeteneğinde belirgin kazanımlar gösterdi ve aktarılabilir bir **D-T-E Modeli** (Disiplinsel Talep–Teknolojik Güçlendirme–Değerlendirme Döngüsü) ortaya çıkardı — akıllı eğitim kavramlarını pratik öğretim tasarımı uygulamasına taşıyan [[educational-development|öğretmen eğitimcileri]] için [[discipline-specific-aied|disipline özgü]] yönlendirme.

**Erişim için tasarım.** Halani’nin yedi kaldıraçlı çerçevesi, her kurs ortamına öğrenci YZ ile yalnız kaldığında bunlardan hangilerinin hâlâ işlediğini sorar; notun neyi onayladığını değiştirmek ya da düşünme olmadan tamamlanamayacak görevler gibi yapısal hamleler, öğrencilere sürecin önemli olduğunu söylemekten daha uzağa erişir ([[halani-designing-for-reach-2026|Halani, 2026]]).

**Aracı düşünmeyi koruyacak biçimde kısıtlayın.** Dokuz haftalık bir argümantif yazma tasarımı, soru soran ve öğrenci metni üretmeyi reddeden öğretmen tarafından sınırlandırılmış sohbet robotlarını sıraladı ve dört lise öğrencisi pasif YZ tüketicisinden çıktılara karşı çıkan değerlendiricilere dönüştü — kazanımları izleyen şey sınırsız üretkenlik değil, stratejik kısıttı ([[making-ai-annoying-constrained-writing-2026|Konradt, Boote & Taub (2026)]]).

**Bir tasarım kaldıracı olarak rubrikle yönlendirilmiş istek metni.** [[yasar-llms-iterative-pedagogical-design-2026|Yaşar ve ark. (2026)]], rubriğin insan pedagojik niyeti ile makine çıkarımı arasında aracı bir arayüz işlevi gördüğünü gösterdi: değerlendirme ölçütlerini sabit araçlar yerine gözden geçirilebilir tasarım yapıtları olarak ele almak ve LLM ile yinelemeli biçimde ortak inceltmek, öğrenci tasarım işleri üzerinde LLM–insan uyuşmasını %54,75’ten %81,25’e çıkardı. LLM’ler için tasarlanan rubrikler kesinlikle esneklik arasında denge kurmalıdır — çok belirsiz olması serbest yoruma davetiyedir, çok katı olması modeli örüntü eşleştirmeye indirger — ve role duyarlı istek metni (öğretim elemanı, akran değerlendirici, hibe değerlendirici) farklı değerlendirici geri bildirimler üretti. Bu durum, rubrik mühendisliğini YZ değerlendirme davranışını şekillendirmenin somut bir öğrenme tasarımı uygulaması olarak konumlandırır; insan döngüde gözetimi esasa ilişkin olmaya devam eder.

**Öğretim tasarımı için YZ aracıları**, alanı [[agentic-ai|etken YZ]]’ye taşır. **[[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]**, LLM temelli öğretim tasarımı aracılarını değerlendirmek için ilk standartlaşmış, kuram temelli kıyaslama ölçütüdür — 25.795 senaryoluk Bağlam Matrisi (ADDIE’den 51 bağlamsal değişken × 33 ISD alt adımı), klasik ISD çerçevelerine (ADDIE, Dick & Carey, Rapid Prototyping ISD) dayanan aracıların kuramdan yoksun aracıları geride bıraktığını göstererek öğretim tasarımının yapılandırılmış bir disiplin olduğunu, jenerik bir istek metni görevi olmadığını ampirik olarak doğrular. Araçlar tasarımların yalnızca *yapıcıları* değil, aynı zamanda *eleştirmenleri*dir: [[ai-web-agents-lesson-design-2025|Wang, Mitchell & Piech (2025)]], gerçek öğrenenler katılmadan *önce* bir öğrenme tasarımını değerlendirmek için çok adımlı bir çevrimiçi dersi bir öğrenci gibi dolaşan tek bir özerk web aracısı kullanır — öğrenci deneyimine dair betimlemesi, acemilerin nerede terk edeceğini öngörür ve eyleme dönüştürülebilir tasarım geri bildirimi sunar; genel bir CS1 kursunda her taban çizgisini ve hatta benzetilmiş bir öğrenci kohortunu geride bırakır. Bu durum, lansman öncesi etken değerlendirmeyi insan tasarım yinelemesine düşük maliyetli bir tamamlayıcı olarak çerçeveler. **[[wang-multi-agent-systems-learning-designers-2025]]** ve **[[instructional-agents-multi-agent-course-gen|Instructional Agents]]**, öğretim tasarımı modelleri çevresinde rol temelli aracıları orkestre eden çok aracılı çerçeveleri incelerken **[[ai-tpack-teacher-multi-agent-workflow|AI-TPACK]]**, öğretmenlerin ve aracıların teknolojik-pedagojik-içerik bilgisini birlikte nasıl uyguladığını inceler. Bu çalışma, öğretim tasarımını [[benchmark|kıyaslama ölçütü]], [[ai-ed-evaluation]] ve ölçekte [[curriculum-design|öğretim programı]] tasarımına bağlar.

### İlgili kavramlarla bağlantılar

Öğrenme tasarımı, [[ai-education|Eğitimde YZ]]’nin köprü disiplinidir — [[curriculum-design]] (ne öğretileceği) ile [[scaffolding]] (öğrenenleri nasıl destekleneceği), [[educational-development]] (eğitimciler nasıl hazırlanacak) ve [[generative-ai]] (araçların kendileri) arasında bağlantı kurar. YZ araçlarının öğrenme tasarımcılarının ve öğretmenlerin ne yaptığını yeniden şekillendirmesi nedeniyle [[teacher-role]] ile sıkı biçimde eşleşiktir ve etkili YZ bütünleşmesinin eğitimcilerin YZ yeteneklerini ve sınırlarını anlamasını gerektirmesi nedeniyle [[ai-literacy]] ile de öyledir. Tasarım işi nihai olarak bir *etkinlik sırası*na çözülür: [[pedagogical-patterns|pedagojik örüntüler]] denenmiş hamle sıralarını derler, böylece bir tasarımcı bir derste YZ’nin nereye ait olduğuna değil, yalnızca nelerin dahil edileceğine karar verebilir. [[learning-sciences|Öğrenme bilimleri]], bu ilkelerin arkasındaki araştırma alanıdır: bu sayfa öğrenme deneyimleri yaratmanın mesleki uygulamasını kapsarken, öğrenme bilimleri o uygulamayı ve tasarımlarını ampirik olarak inceler ve öğrenme tasarımının ardından işlevsel kıldığı bilişsel, motivasyonel ve sosyal ilkeleri üretir.

### Öğrenme tasarımı öğrenme kazanımlarını nasıl belirler

Öğrenme tasarımı, YZ’nin [[learning-gains|öğrenme kazanımları]] mı yoksa yalnızca YZ ile şişirilmiş bir performans mı ürettiğine karar veren kaldıraçtır. Bilgi tabanının kanıtı bu konuda tutarlıdır: **aynı YZ aracı, öğrenme deneyiminin çevresinde nasıl tasarlandığına bağlı olarak büyük kazanımlar ya da net zarar verir.** [[instructional-guidance-genai-learning|Hou ve ark.]], öğrenme kuramına dayalı beş adımlı bir istek metni çerçevesinin üst düzey bilişsel sonuçları belirgin biçimde iyileştirdiğini, yalnızca YZ erişiminin ise iyileştirmediğini gösterdi; [[genai-mindtool-generative-learning|zihin aracı]] ve [[airis-cognitively-activated-ai-physics-2026|AIRIS]] çerçeveleri, öğrencinin bilişsel çabasını (görev verimliliği yerine) kalıcı kazanımlar sağlayacak biçimde korur. [[learning-gains]]’i koruyan tasarım seçimleri — öğrenci denemesi gerektiren iskeleleme, yardımsız sonuç ölçüleriyle [[formative-assessment]] ve öğrenenin etken olarak kalmasını sağlayan pedagojik yapı — alanın (bkz. [[learning-gains]]) YZ’nin koçluk ettiğinde güçlü bir kazanım, yanıt verdiğinde bir zarar olduğu bulgusunu yansıtır. Tersine, kötü tasarlanmış YZ bütünleşmeli dersler, görünürdeki başarının hiçbir öğrenmeyi maskelemediği [[cognitive-offloading|performans-öğrenme boşluğuna]] düşer.

### Tasarımcılar ve geliştiriciler için pratik yönlendirme

Öğretim tasarımcıları, kurs geliştiricileri ve YZ destekli öğrenme deneyimleri kuran mühendisler için bilgi tabanının bulguları eyleme dönüştürülebilir uygulamaya çevrilir. Uygulamaların kendilerinden önce işaretlenmeye değer bir sınır: bu sayfanın betimlediği öğrenme tasarımı, bilinen bir kohort için bir kursun tasarımıdır; oysa tasarımcının asla tanışmayacağı kişilerce öğretilen, birçok kursun kullanacağı bir ürüne gömülen aynı ilkeler, varsayılanların, yapılandırılabilirliğin ve belgelendirmenin pedagojik ağırlık taşıdığı [[educational-technology-developers]] işidir:

**YZ üretimini yapılandırılmış bir öğretim modeline dayandırın.** YZ içeriği, arkasındaki pedagojik yapı kadar iyidir — kaliteyi belirleyen açık yapıdır, YZ akıcılığı değil. Tanınmış bir model (ADDIE, Dick & Carey, hızlı prototipleme) çevresinde tasarım yapın ve pedagojik kararları modelden çıkarmasını beklemek yerine açıkça kodlayın.([[courseblueprint-adaptive-video-generation]])([[jeon-isd-agent-bench-2026]])([[didactical-teacher-assistant-dimensional-modeling]])

**İlke düzeyinde bir çerçeveyi de benimseyin, yalnızca bir öğretim modeli değil.** Kurs düzeyinde bir model tek bir tasarımı yapılandırır; yayımlanmış bir çerçeve, birçok tasarımın tatmin etmesi gereken ölçütleri belirler. Tümüyle okumaya değer bir örnek, Digital Promise’un *Powerful Learning with Emerging Technology* adlı yayınıdır; bu çalışma yönlendirmesini üç ilke altında düzenler — Kanıta Dayalı, Öğrenen Merkezli, Beceri Geliştirme — her biri uygulamalara ve stratejilere genişletilir ve [[privacy]], [[explainable-ai|açıklanabilirlik]] ile adaleti isteğe bağlı eklerden çok belirli uygulamalara güvenlik yükümlülüğü olarak bağlar.([[powerful-learning-with-emerging-technology-2025]])
**YZ yapılandırmasını gelişkinliğe değil, göreve eşleyin.** [[pchl-he-framework-genai-content-creation-2026|Nalyvaiko (2026)]], dört katman ayırır — istek metni, bağlam, koşum ve doğrulanmış döngü — ve asgari yeterli katman ilkesini uygular: eklenecek orkestrasyon koordinasyon, doğrulama, gizlilik ve kavrayış maliyetleri getirdiğinden, doğrulanabilir bir sonuç için yeterli en az karmaşık yapılandırmayı kullanın.

**İçerik üretimi için rol temelli çok aracılı iş akışları kullanın.** Tek bir jenerik istek metni yerine, tanımlanmış bir hat boyunca işbirliği yapan farklı aracıları/rolleri (öğretim kadrosu, öğretim tasarımcısı, kurs koordinatörü) orkestre edin — bu, gerçek kurs ekiplerinin nasıl çalıştığını yansıtır ve tek bir istek metninden daha eksiksiz materyaller verir.([[instructional-agents-multi-agent-course-gen]])([[wang-multi-agent-systems-learning-designers-2025]])

**YZ erişiminin yanında öğretimsel yönlendirme sağlayın.** Öğrenenler YZ ile doğrudan mı yoksa YZ üretimli materyallerle mi etkileşime girsin, öğrenme kuramına dayalı yönlendirme (örn. üretken öğrenme ilkelerine dayalı adımsal bir istek metni [[scaffolding|iskelelemesi]]) üst düzey sonuçları güçlendirir; yalnızca erişim güçlendirmez. Öğrenme etkinliğini zihnin nasıl öğrendiği çevresinde tasarlayın ve YZ’yi düşünceyi değiştirmekten çok genişleten bilişsel bir “zihin aracı” olarak ele alın.([[instructional-guidance-genai-learning]])([[genai-mindtool-generative-learning]])

**Unutmayı modelleyin ve bozulmanın en ağır olduğu yerde incelemeyi planlayın.** G4L, bilgi bozulmasını geçen süre ve tekrarlamalarla yönlendirilen bir Ebbinghaus unutma eğrisiyle temsil eder ve en son puanlananı yeniden sunmak yerine bozulmaya en açık birimlere öncelik verir ([[graph-its-adaptive-algorithms-2026|Csépányi-Fürjes & Kovács, 2026]]).

Fowlin ve ark. (2026), YZ’nin nereden gireceğine karar vermek için eyleme dönüştürülebilir bir hamle ekler: bir etkinliği, bağımsız yapılması en iyi olanlarla YZ ile eşleştirilmesi en iyi olan bileşenlere ayırın ve bölüşümde eğitimcinin yargısını merkezde tutun ([[fowlin-operationalizing-learning-principles-ai|Fowlin ve ark. (2026)]]).

**İçeriği izlenebilir ve incelenebilir kılın.** Bir insan tasarımcının YZ çıktısını öğrenenlere ulaşmadan önce incelemesine ve düzeltmesine izin verin ve pedagojik gerekçenin (neden bu içerik, bu sırada) denetlenebilir olacağı biçimde YZ üretimini yapılandırın — hem kaliteyi hem de [[trust]] kaynaklı öğretimi baltalayan opaklık kaygılarını ele alın.([[bridging-instructional-design-framework-math]])([[cotal-formative-assessment-scoring-2026]])
- **YZ üretimli medyayı sentezden önce değil, senaryo aşamasında inceleyin.** PedaCo, eğitimci incelemesini senaryo üzerine koyar — pedagojik hataların düzeltilmesinin ucuz olduğu yer — hiçbir şey görselleştirilmeden önce; derecelendirilmiş öğretimsel geçerlilik 3,07’den 3,86’ya yükseldi, oysa otomatik sentez sonrası katman yalnızca beş boyuttan ikisini iyileştirdi ([[ai-video-dual-gatekeeping-2026|Kim, Baek ve Kwak (2026)]]).

**[[accessibility]]’ı baştan tasarlayın.** Çeşitli öğrenenlere hizmet etmeleri için YZ araçları ve YZ üretimli materyaller kurarken [[universal-design-for-learning|UDL]] ilkelerini uygulayın, erişilebilirliği sonradan eklemek yerine.([[ludia-udl-ai-thought-partner-2026]])

**Sunum ortamı için plan yapın.** [[online-teaching-and-learning|çevrimiçi öğretim ve öğrenme]] için öğretim tasarımı, yüz yüze tasarımın tarafsız bir çevirisi değildir — ortam, iskelelemenin, değerlendirmenin ve etkileşimin neyin uygulanabilir olduğunu değiştirir ve YZ, tasarımcıların planlaması gereken hem olanakları (ölçeklenebilir [[personalized-learning|kişiselleştirme]], kesintisiz destek) hem de riskleri ([[academic-integrity|dürüstlük]], [[cognitive-offloading|bilişsel yük boşaltma]]) çoğaltır. YZ’nin pedagojik sarmalayıcısını çevrimiçi bağlamlarda yüz yüze olduğu kadar bilinçli tasarlayın.

**Sezgileri değil, bir kıyaslama ölçütüne karşı değerlendirin.** Bir öğretim tasarımı aracısı kuruyorsanız, bunu standartlaşmış, kuram temelli bir kıyaslama ölçütüne karşı (örn. [[jeon-isd-agent-bench-2026|ISD-Agent-Bench]]) değerlendirin, böylece gerçek bir ISD çerçevesine dayanmanın jenerik bir LLM’ye kıyasla çıktıyı gerçekten iyileştirip iyileştirmediğini ölçebilirsiniz.([[jeon-isd-agent-bench-2026]])

- **YZ, öğretim tasarımı uygulamasını yeniden şekillendiriyor.** [[kibar-ilgaz-ai-instructional-design-review-2026|Kibar & Ilgaz (2026)]], 28 çalışmayı (2020-2025) [[meta-analysis-systematic-review|sistematik olarak]] gözden geçirir ve YZ’nin tasarımcılara içerik üretimi, şablonlar ve kişiselleştirme konusunda yardımcı olduğunu ve yalnızca bir araçtan çok bir iş arkadaşı/ortak çalışan/iş ortağı olarak kavramsallaştırıldığını bulur — ancak pedagojik hizalama ve uygulayıcı hazırlığı sorun olarak kalmaya devam eder.

## Bağlı kavramlar

- [[interpreting-and-applying-aied-research]]
- [[pedagogical-partnerships]] — Pedagogical Partnerships
- [[online-teaching-and-learning]] — Online Teaching and Learning
- [[curriculum-design]]
- [[scaffolding]]
- [[educational-development]]
- [[teacher-role]]
- [[ai-literacy]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[personalized-learning]]
- [[adaptive-learning]]
- [[formative-assessment]]
- [[higher-ed]]
- [[k-12]]
- [[agentic-ai]]
- [[inclusive-learning]]
- [[universal-design-for-learning]]
- [[learning-theories]]
- [[learning-sciences]]
- [[learning-gains]]
- [[behaviorism]]
- [[educational-technology-developers]]
- [[pedagogy]] — Umbrella: pedagogies and teaching strategies in AI education
- [[stakeholders]] — Umbrella: people and audiences in AI education (learners, teachers, designers, administrators, policymakers)

## Bağlı makaleler
- [[powerful-learning-with-emerging-technology-2025]] — Powerful Learning with Emerging Technology
- [[claassen-learning-analytics-genai-learning-design-2026]] — LA and GenAI in learning design decision-making
- [[tang-chatbots-learning-design-2026]] — Chatbot use in learning design: designers dwell on outcomes and pedagogy rather than content generation (Tang et al. 2026)
- [[choi-teacher-ai-interaction-lesson-design-2026]] — Teacher-AI interaction patterns in lesson design across experience and AI proficiency (Choi et al. 2026)
- [[long-ai-higher-ed-engagement-teaching-methods-2026]] — AI in higher ed: engagement + mediating role of teaching methods
- [[curriculum-as-code-instructional-design-2026]]
- [[dohn-boundary-object-classifying-genai-learning-activities-2026]] — Taxonomy (boundary object) for classifying GenAI learning activities
- [[instructional-agents-multi-agent-course-gen]]
- [[didactical-teacher-assistant-dimensional-modeling]]
- [[instructional-guidance-genai-learning]]
- [[courseblueprint-adaptive-video-generation]]
- [[bridging-instructional-design-framework-math]]
- [[cotal-formative-assessment-scoring-2026]]
- [[genai-mindtool-generative-learning]]
- [[ludia-udl-ai-thought-partner-2026]]
- [[pchl-he-framework-genai-content-creation-2026]]
- [[jeon-isd-agent-bench-2026]]
- [[ai-web-agents-lesson-design-2025]] — AI Web Agents: autonomous web agent evaluates lesson designs and predicts student dropout before students engage (Wang, Mitchell & Piech 2025)
- [[airis-cognitively-activated-ai-physics-2026]] — AIRIS: A Framework for Cognitively Activated AI Augmentation in Physics
- [[wang-multi-agent-systems-learning-designers-2025]]
- [[ai-tpack-teacher-multi-agent-workflow]]
- [[halani-designing-for-reach-2026]] — Designing for Reach: Seven Levers and the Student Alone with AI
- [[fowlin-operationalizing-learning-principles-ai]]
- [[ai-video-dual-gatekeeping-2026]] — When Saying No Makes Better Videos: Dual Gatekeeping for Pedagogically Grounded AI Content Creation
- [[rhaimi-productivemath-2025]] — ProductiveMath: AI to Support Productive Failure Problem Design
- [[kibar-ilgaz-ai-instructional-design-review-2026]] — AI and Instructional Design Practice: A Systematic Review (Kibar & Ilgaz 2026)
- [[graph-its-adaptive-algorithms-2026]] — Graph-Based Intelligent Tutoring for Dynamic Domains (2026)
- [[making-ai-annoying-constrained-writing-2026]] — Making AI annoying on purpose: constraint in AI-supported writing (Konradt, Boote & Taub 2026)
- [[instructional-design-proficiency-masters-math-2026]] — Smart-classroom model and D-T-E loop improving M.Ed. instructional design proficiency in mathematics (Zhu et al. 2026)
- [[ai-modeling-problem-generation-platform-2026]] — AI-powered platform generating mathematical modeling problems (ADDIE, RAG)
- [[wang-teacher-ai-co-design-review-2026]] — Teacher–AI co-design of learning tasks: trends and perspectives (Wang et al. 2026)
- [[talebzadeh-ai-group-activity-roles-2026]] — Architecture of roles in AI-designed differentiated group activities (Talebzadeh 2026)
- [[yasar-llms-iterative-pedagogical-design-2026]] — LLMs as agents of iterative pedagogical design