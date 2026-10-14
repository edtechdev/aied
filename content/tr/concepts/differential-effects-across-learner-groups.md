---
title: Öğrenen Grupları Arasındaki Farklı Etkiler
created: "2026-10-14T22:50:00-04:00"
type: concept
ethics: [equity-in-ai-education, inclusive-learning, digital-divide, accessibility, neurodiversity, multilingual-learning, bias-mitigation, culturally-relevant-pedagogy]
technology: [personalized-learning]
methods: [meta-analysis-systematic-review, mixed-methods-research]
assessment: [assessment-validity]
research_method: [quasi-experiment, survey]
audience: [instructors, instructional designers, administrators, researchers, learners]
page_kind: [evaluation, synthesis]
confidence: medium
connected_faqs: [equity-ethics-pedagogical-safety-research, research-gaps-aied]
reviewed_by: [editor]
translation_of: concepts/differential-effects-across-learner-groups
source_updated: "2026-10-11T09:05:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Öğrenen grupları arasındaki farklı etkiler** — [[ai-education|Eğitimde yapay zeka]] araştırmalarının, YZ’nin *kullanımının* ve *etkilerinin* öğrenen türlerine göre nasıl değiştiği konusunda buldukları: [[special-education|engelli öğrenciler]] ve [[neurodiversity|nöroçeşitli öğrenciler]], ikinci dil ve [[multilingual-learning|çok dilli öğrenenler]], kız ve erkek öğrenciler, azınlıkta kalmış öğrenciler, düşük gelirli geçmişten gelen öğrenciler, kırsal kesimden gelen öğrenciler, ailelerinde ilk üniversite mezunu olan öğrenciler, uluslararası öğrenciler ve [[adult-learning|yetişkin öğrenenler]]. Akılda tutulmaya değer örüntü aynı anda iki yönde eşit değildir: bazı başlıklar gerçek kanıtlara sahiptir (engellilik, dil) diğerleri ise neredeyse boştur (ailelerinde ilk üniversite mezunu olanlar, uluslararası öğrenciler, mülteciler), hatta güçlü başlıklar bile nadiren bir *grubun* farklı olduğunu ortaya koyar — bir aracın o grubun bir örneğine yardım ettiğini ya da zarar verdiğini ortaya koyarlar ki bu farklı bir iddiadır. Bu sayfa neyin var olduğunu, ne gösterdiğini ve bir grup ortalamasının neden bir öğrenci hakkında öngörü olmadığının yöntemsel nedenlerini haritalar.

## Düşünülmesi Gerekenler

- Aracınız çoğunlukla sınıfınızdaki öğrenciler için işe yarıyor ve beş kişilik bir alt grup zorlanıyor. Bu büyüklükte bir alt grup farkı, bu türden bir çalışmada hiç saptanabilir mi olurdu — ve bu kanıta dayanarak aracı tüm sınıf için değiştirmek ister miydiniz?
- Engelli öğrencilere ilişkin araştırmalar, engellilik kategorisine göre değişen etkiler bildirmektedir. İki kategori aynı [[meta-analysis-systematic-review|meta-analizde]] çok farklı etki büyüklüklerinde yer alıyorsa, bu, bir tasarım kararında “engellilik”i tek bir grup olarak ele almanın ne anlama geldiğini söyler?
- Bazı çalışmalar etkileri cinsiyete göre farklılık göstermeyen YZ araçları bulurken, diğer çalışlar [[ai-feedback-quality|YZ geri bildirimi]] ve YZ destekli yazmanın kişilikler ya da istek metinleri bunları taşıdığında cinsiyet kalıp yargılarını *yeniden ürettiğini* gösterir. İkisi birden nasıl doğru olabilir?
- Adalet çalışmalarının çoğu gerçek öğrenciler yerine benzetilmiş öğrenci kişiliklerini sınar, çünkü çoğu dağıtımda model çıkarım anında gerçek demografik nitelikleri kullanılamaz. Bir karşıolgusal kişilik denetimi ne ortaya koyabilir ve ne ortaya koyamaz?
- Bu sayfadaki başlıkları gözden geçirdiğinizde, aracınızın doğrulamasındaki çalışmalarda hangi öğrenen grupları gerçekten temsil edilmektedir — ve var olmayan bir grup için ne yapardınız?
- Herkesin çıktılarını yükselten ama bir boşluğu kapatan (en çok geride kalmış öğrencilere yardım eden) bir müdahale, ortalamayı yükselten bir müdahaleden farklı bir eşitlik hikâyesine sahiptir. Bir pilotu değerlendirdiğinizde boşluğu mu ölçüyorsunuz, ortalamayı mı?

## Giriş

“YZ, *bu tür* bir öğrenci için işe yarıyor mu?” sorusunun içinde iki soru gizlidir. Birincisi etkilerle ilgilidir: bir aracın farklı gruplar için farklı çıktılar üretip üretmediği. İkincisi kullanımla ilgilidir: farklı grupların aynı aracı farklı biçimde benimsemesi, erişmesi ya da onunla etkileşime girmesi; bu, hiçbir farklı etki olmadan çıktıları şekillendirebilir. Bu sayfa ikisini de grup grup kapsar ve literatürün nerede durduğunu açıkça belirtir.

Komşularının tekrarı olmak kasıtlı biçimde değildir. [[equity-in-ai-education|Eğitimde YZ’de Eşitlik]] normatif ve yapısal çerçeveyi taşır — erişim, temsil ve çıktı eşitliği ve eğitimde YZ’nin *ne yapması gerektiğine* dair sav. [[inclusive-learning|Kapsayıcı Öğrenme]], [[universal-design-for-learning|Evrensel Öğrenme Tasarımı]] dâhil tasarım çerçevesini taşır. [[digital-divide|Dijital Uçurum]] erişim ve beceri katmanlarını kapsar. [[neurodiversity]], [[special-education|Özel Eğitim]], [[accessibility]] ve [[multilingual-learning|Çok Dilli Öğrenme]] tek gruplara derinlemesine iner. Bu sayfada kalan, gruplar arası kanıt haritası ve değerlendirme sorusudur: bu etkiler nasıl tahmin edilir, hangi gruplar hiç incelenir ve bir grup düzeyindeki bulgu size ne yapma yetkisi verir.

## Grup farklılıkları nasıl raporlanır ve bunların çoğu neden yapamaz

**Tek gruplu bir çalışma, farklı etki çalışması değildir.** Bu alandaki literatürün çoğu, karşılaştırma grubu olmaksızın bir grubu ölçer. [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang ve ark. (2024)]], engelli öğrenciler için YZ’ye ilişkin 29 (yarı-)deneysel çalışmayı birleştirmiş ve orta düzeyde olumlu bir etki bulmuştur (Hedges’in g = 0,588, %95 GA [0,349, 0,826]) — nörotipik bir karşılaştırma grubu olmadan. Bu size bir müdahalenin yardım ettiğini söyler, bu gruba farklı biçimde yardım ettiğini değil.

**Alt grup analizleri genellikle soruyu yanıtlamak için fazla küçüktür.** [[ai-tutoring-micro-rct-gcse-science-2026|GCSE fen mikro-RCT’si]] olağanüstü biçimde açıktır: uygulama–durum etkileşimi 0,57 puan olmuştur (%95 GA −2,25 ila 3,39), tabakalandırılmış tahminler bir grup için g = 0,28 (%95 GA −0,04 ila 0,59), diğer grup için g = 0,35 (%95 GA 0,18 ila 0,52) olarak verilmiştir. Sıfırı kapsayan bir alt grup aralığı, sınıf genelinde bir kuralın değil, yerel bir pilotun sorusudur.

**Demografik nitelikler genellikle benzetilir.** Gerçek öğrenen demografik verileri nadiren model girdilerine bağlanır, bu nedenle denetimler yerine kişilikler sağlar. [[demographic-signals-llm-student-assessment-2026|Rooein, Benedetto ve Hovy (2026)]], model varsayılanı, açık kişilik ve örtük geçmiş koşulları altında üç eğitim görevi boyunca altı talimata göre ayarlanmış model çalıştırmış — 192.480 çıkarım çağrısı — ve hem açık kişiliklerin hem *örtük* konuşma geçmişlerinin model davranışını değiştirdiğini bulmuştur. Ayrımları saklanmaya değerdir: öğrenen farklılıklarının farkında olmak istenebilir (bir öğrenenin ana diline göre geri bildirimi ayarlamak), aynı duyarlılık ise özdeş çalışmanın yargısını kaydırdığında bir zarardır.

**Adalet düzeltmeleri genellemeyebilir.** [[student-attention-estimation-fairness-2026|Fragkiadakis ve ark. (2026)]], öğrenci dikkat tahmininde cinsiyet ve yaşa yönelik hata boşluklarını [[assessment-validity|doğrulama]] verileri üzerinde azaltmış, ancak kazanımlar tutulan konulara ya da yinelenen konu düzeyi bölmeleri tutarlı biçimde aktarılmamıştır.

**Grup etiketleri içlerindeki çeşitliliği gizler.** Aynı engellilik meta-analizinde, özgün öğrenme güçlüğü olan, zihinsel ve gelişimsel engelli olan ya da işitme engelli olan öğrenciler daha büyük bir etki göstermiştir (g = 0,952), otizm spektrum bozukluğu olan öğrencilere göre (g = 0,368) — yazarların 41 bağımsız örneğe ait 239 etki büyüklüğü üzerinden istatistiksel olarak anlamlı olmadığını bildirdiği bir fark. “Engellilik” tek bir grup değildir ve “L2 öğrenen” de öyle değildir.

## Engellilik ve nöroçeşitlilik

Bu, bilgi tabanındaki en derin başlıktır ve raporlamanın en güçlü olduğu başlıktır.

- **Etkiler gerçektir ama çıktılara göre eşit olmayan biçimde dağıtılmıştır.** [[zhang-ai-students-disabilities-meta-analysis-2024|Zhang ve ark. (2024)]] çalışmasında, [[learning-gains|akademik performans]] en büyük etkiyi göstermiştir (k = 80, g = 0,929), günlük yaşam ve diğer becerileri (g = 0,766) ve sosyal-duygusal becerileri (k = 144, g = 0,382) geride bırakmıştır. Yayın yanlılığı mevcuttu (Egger testi β = 2,837, p < .001); kırpıp doldurma birleştirilmiş tahmini g = 0,2694’e indirmiş, bu da istatistiksel olarak anlamlı kalmıştır. Manşet etkiyi ve yanlılık-ayarlı olanı birlikte okuyun.
- **Alan [[generative-ai|üretken YZ]] çevresinde yeniden örgütlenmiştir.** [[assistive-tech-neurodivergent-higher-ed-review-2026|Nöroçeşitli öğrencilere yönelik dijital yardımcı teknolojilerin kapsam derlemesi]], 40 ampirik çalışmayı dâhil etmek üzere 766 kaydı taramış; bunların 15’i üretken YZ, 11’i sürükleyici biçimler kullanmıştır. Başlık olgun değil, küçük ve yenidir.
- **Bazı YZ destekleri farklılaştırmak yerine eşitler.** [[adhd-video-segmentation-computing-education|Pimenova, Begel ve çalışma arkadaşları]], katılımcı içi bir çalışmada [[video-education|öğretim videolarını]] sabit duraklamalarla tek talimatlık bölümlere ayırmışlardır (17 DEHB, 10 DEHB olmayan); herkes gelişmiş ve DEHB’li katılımcıların hataları ile tereddütleri DEHB olmayan akranlarıyla eşit düzeye inmiştir. Bu, otomatik içerik dönüştürme yoluyla [[universal-design-for-learning|Evrensel Öğrenme Tasarımı]] için mevcut en güçlü kanıt biçimidir: gruba yönelik bir yamadan ziyade boşluğu kapatan genel bir değişiklik.
- **Nöroçeşitli öğrencilerin ihtiyaç duyduğunu söyledikleri şey genellikle sıradandır.** [[neurodivergent-computing-students|24 nöroçeşitli bilgisayar bilimi öğrencisi ve 20 nörotipik akran üzerine bir anket]], dört görüşmeyle birlikte, net yapıdan yoksun ya da belirsiz beklentiler taşıyan ödevler konusunda belirgin bir rahatsızlık bulmuştur — sağlaması hiçbir şeye mal olmayan bir uyarlama.
- **Tasarım tercihleri epistemik olarak da dışlayabilir.** [[genai-minoritized-knowledges-disability|Tali-Otmani (2026)]], İngilizce, Batı merkezli eğitim verilerinin hegemonik olmayan bilme biçimlerini marjinalleştirdiğini ve engelli öğrenenlerin durumunu bu eleştirinin merkezine koyduğunu savunur.

## Dil: ikinci dil, çok dilli ve İngilizce öğrenenler

Makale sayısına göre bu en büyük başlıktır ve araç etkileri ile araç zararları olarak temiz biçimde ayrılır.

- **Araç etkileri umut verici ve gürültülüdür.** [[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang ve Zou (2026)]], robot destekli [[language-learning|dil öğrenimi]]ne ilişkin 11 çalışmayı (17 etki büyüklüğü, N = 595) meta-analiz etmiş ve genel olarak olumlu bir etki bulmuştur (g = 0,83, %95 GA [0,46, 1,21]) yüksek heterojenlikle (I² = %84,4); sınanan altı denetleyiciden yalnızca robot–öğrenen etkileşim türü anlamlıdır. Bu büyüklükte bir kanıt tabanı, bir satın alma kararı değil, geçici bir [[benchmark]] destekler.
- **Herhangi bir araç kullanılmadan önce altyapının kendisi eşitsizdir.** [[structural-silence-underrepresented-language-ai-2026|Roy ve Roy (2026)]], Bengali dilini örnek olarak alarak derlem boşluğunu belgeler: dünya nüfusunun neredeyse %4’ünü oluşturmasına rağmen, küresel web içeriğinin %0,5’inin altında karşılık İngilizce için yaklaşık %49,5.
- **Öğretim dili, 294 yükseköğretim öğrencisi boyunca çıktıları değiştirir.** Aynı derleme, yabancı dil içeriğin ana dilde öğretime göre daha düşük çıktılar verdiğini ve iki dilli [[cs-education|programlama]] öğretiminin yalnızca İngilizce öğretimi geçtiğini bildirmektedir.
- **Dedektörler ikinci dil yazarlarını cezalandırır.** [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge ve Mesbah (2026)]], Turnitin ve Originality’yi 192 metne karşı sınamıştır: bir dedektör 48 profesyonel metnin 48’ini doğru sınıflandırmış ama 48 EFL öğrenci metninin dördünü yanlış sınıflandırmıştır (%91,6). Asimetri asıl noktadır — hata, yazısı çoktan incelenen grubun üzerine düşer.

## Cinsiyet

Buradaki cinsiyet araştırması, araçların öğrencilere farklı davranıp davranmadığı ile öğrenenlerin kalıp yargı yüklü araçlara maruz kalıp kalmadığı olarak ayrılır.

- **Kasıtlı biçimde cinsiyet nötr bir tasarım cinsiyet farkı göstermemiştir.** [[ada-female-coded-chatbot-gender-stereotypes-2026|195 dokuzuncu sınıf öğrencisiyle bir yarı-deneysel çalışma]], Ada Lovelace’a dayalı kadın kodlu bir [[conversational-ai|sohbet robotu]] olan ADA’yı sınamıştır: durumsal ilgi her iki cinsiyette de artmış, duygusal yanıtta, bilişsel yükte ya da akademik performansta cinsiyet farkı görülmemiştir. Bir rol modeli kişiliği, kalıp yargı tehdidini tetiklemeden inşa edilebilir.
- **Ama istek metni içeriği yanlılığı öğrenci çalışmalarına aktarır.** [[gender-bias-transfer-llm-writing|123 katılımcıyla kontrollü bir çalışma]], öğrencilerden yalnızca cinsiyetleri farklı eşleştirilmiş profillere kariyer planı makaleleri yazmalarını istemiş; YZ yok, nötr YZ ve cinsiyet yanlısı YZ koşulları altında; yanlı koşul, cinsiyete göre ayrışmış dili öğrenci yazmalarına aktarmış ve kadın [[agency]]’yi asimetrik biçimde baskılamıştır. Araştırmıcılar önce etkiyi 1.600 üretilmiş makale üzerinde doğrulamışlardır.
- **Alan ve çerçeveleme araç kadar önemlidir.** [[all-girls-genai-makerspace-gender-equity-2026|Kız öğrencilere özel üretken YZ üretici alanı örneği incelemesi]], kızların tek cinsiyetli ortamı daha güvenli ve daha rahat olarak değerlendirdiğini bulmuş ve iktidar ilişkilerine dokunmayan yüzeysel uyarlama olan “kızlaştırmaya” karşı uyarır.
- **Model duyarlılığı sabit değil, bir model niteliğidir.** [[edufair-bench-pedagogical-fairness-llm-tutors-2026|EduFair-Bench]]’te 7B’den 70B’e beş ders yardımcısı dokuz demografik düzeyde denetlenmiştir: Qwen2.5-7B, 12 alan-boyut hücresinin 7’sinde |r| ≥ 0,10 yanlılık eşiğini aşarken LLaMA-3.1-8B bunu bir kez aşmıştır. Pedagojiye özgü eğitim bazı yanlılıkları azaltmış, bazılarını artırmıştır.
- **Tek eksenli bir düzeltme bir grubu daha kötü durumda bırakabilir:** “Bilinmeyen Cinsiyet” kategorisine indirgenen cinsiyet çeşitli öğrenciler, her adalet yöntemi altında en düşük gerçek pozitif oranlarına sahip olmuş ve hiçbir tek eksenli yöntem onların muamelesini iyileştirmemiştir — bir ders yardımcısı yerine öngörücü bir erken uyarı modelinin içinde, yukarıda belirtilen grup etiketi çeşitliliği ([[fairness-theatre-early-warning-systems-2026|McConvey ve ark. (2026)]]).

## Irk, etnik köken ve azınlıkta kalmış öğrenciler

Bu başlık makale sayısı olarak küçük, mekanizma olarak güçlüdür; çünkü kanıt, YZ’nin bir demografik niteliğe sahip olduktan sonra onunla *ne yaptığı* ile ilgilidir.

- **[[personalized-learning|Kişiselleştirme]] bir yanlılık vektörüdür.** [[marked-pedagogies-linguistic-bias-writing-feedback|İşaretli Pedagojiler]], [[llm]] yazma geri bildirimi araçlarının, geri bildirim bir öğrencinin ırkı, dili, engelliliği, başarısı ya da [[motivation|motivasyonu]] ile kişiselleştirildiğinde — özdeş makaleler üzerinde — kalıpla uyumlu övgüye ve geri tutulan eleştiriye doğru kaydığını gösterir.
- **Demografik ipucu örtük olabilir.** Yukarıdaki karşıolgusal denetim, açık kişilikler kadar konuşma geçmişlerinin de puanlama ve geri bildirim davranışını değiştirdiğini bulmuştur — aynı [[demographic-signals-llm-student-assessment-2026|192.480 çıkarım çağrısı]] sonucu ve *beyan edilmiş* demografik verilere ilişkin bir açıklama kuralının neden yetersiz olduğunun bir gerekçesi.
- **Göç ve dil boşlukları baskın çıkabilir.** EduFair-Bench’te 70B model, en küçük pedagoji boşluklarını en büyük dil ve göç boşluklarıyla eşleştirmiştir; dolayısıyla pedagojik olarak güçlü görünen bir ders yardımcısı, öğrencinin göründüğü kişiye en duyarlı olan olabilir.
- **Epistemik dışlama, salt hata değil:** bkz. yukarıdaki [[genai-minoritized-knowledges-disability|azınlıkta kalmış bilgilerin marjinalleştirilmesi]].

## Sosyoekonomik durum, coğrafya ve yaş

- **Aracı olan YZ kullanımı değil, dijital okuryazarlıktır.** [[ai-divide-ses-personality-primary-education-2026|Wang ve çalışma arkadaşları (2026)]], Hollanda’daki 4.497 altıncı sınıf öğrencisine ilişkin anket ve ulusal kayıt verilerini modellemiş ve kişilik özellikleri ile akademik performans arasındaki bağlantının YZ kullanım yoğunluğundan ziyade dijital okuryazarlık üzerinden işlediğini, dijital okuryazarlıktaki farklılıkların sosyoekonomik durumdan çok kişilik tarafından yönlendirildiğini — ve sosyoekonomik durum avantajlarının YZ katılımından bağımsız olarak işlediğini — bulmuştur. Klasik yalnızca sosyoekonomik durum çerçevelemesi eksiktir.
- **Coğrafya bağlayıcı kısıt olabilir.** [[arc-hubs-k12-ai-robotics-rural-2026|ARC’nın anlatımı]], [[k-12]] robotik ve YZ eğitiminde kırsal FIRST LEGO League katılımının 2020 uzaktan sezonunda düştüğünü ve kentsel katılım kademeli olarak toparlanırken asla toparlanmadığını bildirir ve coğrafi olarak dağıtılan kısıtın kitler ya da [[curriculum-design|müfredat]] değil, sürdürülebilir yerel teknik mentorluk olduğunu belirler.
- **Yetişkin öğrenenler ayrı bir tasarım durumudur**, K-12 çalışmalarından ziyade [[adult-learning|Yetişkin Öğrenme]] ve bilgi tabanının andragoji çalışmaları tarafından kapsanır.
- **Erişim hâlâ diğer her şeyi belirler:** bkz. [[digital-divide|Dijital Uçurum]] ve [[access-not-enough-ai-tutoring-2026|YZ ders desteğine erişimin]], [[pedagogy|pedagojik]] bütünleştirme olmadan yeterli olmadığı bulgusu.

## Disipliner geçmiş

Disipliner geçmiş, bu sayfanın grup grup haritasının henüz taşımadığı bir farklılık eksenidir: aynı araç yararını öğrenci demografisi üzerinden değil, alanlar arasında eşit olmayan biçimde dağıtabilir.

- **Bir araç bir disiplini katılıma çekebilir, diğerini bağlılıktan çıkarabilir.** Karma disiplinli ekiplerde 130 lisans öğrencisiyle iki haftalık bir yarı-deneyde, [[generative-ai|ChatGPT]] STEM öğrencileri için fiziksel [[student-engagement|katılımı]] yükseltmiş, STEM dışı öğrenciler için düşürmüştür (Q = 9,87, p < .05) ve ChatGPT olmadan yazılan notlar disipliner fikirlerin çeşitliliği ve bütünleşimi açısından daha yüksek puan almıştır ([[caeai-chatgpt-interdisciplinary-stem-nonstem-2026|Zhu ve ark. (2026)]]).

## Kanıtın eksik olduğu yerler

Bu taramanın dürüst bulgusu, bazı grupların ne kadar ince olduğudur. Bunların her biri kanıt tabanındaki gerçek bir boşluktur, bu sayfadaki bir boşluk değil.

- **Ailelerinde ilk üniversite mezunu olan öğrenciler:** bir çalışma bir etki değil, kullanım farkı bildirir. [[student-ai-inquiry-types-cs2-2026|Bir CS2 sorgulama çalışmasında]], süregelen-nesil öğrenciler YZ’yi etkin bir [[problem-solving]] ortağı olarak ele almış, ailelerinde ilk üniversite mezunu olan öğrenciler ise doğrulayıcı, geçerlilik yönelimli bir rol üstlenmiş ve genel olarak daha az soru sormuştur.
- **Ailelerinde ilk üniversite mezunu olan öğrenciler: ilk etki tahmini ve yanlış yönde işliyor.** Ders bütünleşmeli bir [[intelligent-tutoring|YZ ders yardımcısına]] ilişkin [[rct|rastgele atamalı deney]] olan [[liu-course-integrated-ai-tutoring-rct-2026|Liu ve ark. (2026)]] çalışması, yukarıdaki kaydın yoksun olduğu şeyi sağlar — bir kullanım örüntüsü değil, ölçülmüş bir fark. Tam örneklemde ders yardımcısı erişiminin final notları üzerindeki etki, ailelerinde ilk üniversite mezunu olan öğrenciler için 2,87 puan (0,28 SS) daha negatif olmuştur; bu onlar için −5,10 puan (−0,50 SS), akranları için −2,23 puan (−0,22 SS) anlamına gelir; fark tam eşleşmeli örneklemde daha büyüktür (−3,89 puan, −0,35 SS) ve ailelerinde ilk üniversite mezunu olan öğrenciler ayrıca daha fazla ödev puanı ve platform sayfa görüntülemesi kaybetmiştir. Çalışma hiçbir mekanizma bildirmemekte ve hassasiyeti çıktıya göre değişmektedir, ancak yön, boşluğu daraltma hikâyesinin tersidir: akademik desteğe önceden en az erişime sahip olan öğrenciler, ölçülmüş en büyük maliyeti taşımıştır.
- **Uluslararası öğrenciler:** [[international-students-conversational-ai-adaptation|kültürler arası uyum desteği]] üzerine bir [[mixed-methods-research|karma yöntemli]] çalışma (anket n = 60, görüşme n = 14).
- **Uluslararası öğrenciler: bir etki tahmini değil, ölçülmüş bir katılım örüntüsü.** Yedi İngiliz [[business-education|işletme okulundaki]] 270 azınlık etnik kökenli uluslararası öğrenci boyunca, bildirilen [[generative-ai]] kullanımı dört [[student-engagement|katılım]] başlığının tamamıyla olumlu biçimde ilişkili çıkmıştır — en güçlüsu etken katılım (β = 0,429) — kolaylaştırıcı koşullar (β = 0,369) ise kullanım niyetinin en güçlü öngörücüsüdür ([[bjet-genai-engagement-minority-ethnic-students-2026|Adekoya ve ark. (2026)]]).
- **Üstün yetenekli ve yüksek başarılı öğrenciler:** bu derlemde bir grup olarak etkin biçimde incelenmemiştir.
- **Mülteci, göçmen ve yerinden edilmiş öğrenenler:** çalışma yok.
- **Cinsiyet yukarıdaki çalışmaların çoğunda hâlâ ikili olarak analiz edilmektedir** ve engellilik kategorileri çalışmalar arasında değişmektedir, dolayısıyla “aynı” grubun çalışmalar arası karşılaştırması sınırlara sahiptir.

## Bu kanıtı bir grup etiketine aşırı uydurmadan kullanmak

- **Grup ortalamalarını bir topluluk hakkında hipotezler olarak ele alın, asla bir kişi hakkında öngörü olarak değil.** Yukarıdaki her farklılık iddiası dağılımsal bir ifadedir.
- **Bir aracın iddia ettiği kapsayıcılığına güvenmeden önce öğrenenlerinizin doğrulama örneğinde olup olmadığını sorun**; nöroçeşitlilik ve dil başlıklarının ikisi de geliştirmede temsilin istisna olduğunu göstermektedir.
- **Kanıtın izin verdiği yerde eşitleyici tasarımları yeğleyin.** DEHB video bölümleme sonucu — herkes gelişir, boşluk kapanır — gruba yönelik bir ekten daha iyi uyan bir genel sınıf hedefidir.
- **Demografik nitelikleri tüketen kişiselleştirmeye dikkatli olun.** [[marked-pedagogies-linguistic-bias-writing-feedback|İşaretli pedagojiler]] bulgusu doğrudan bu mekanizma ile ilgilidir ve öğrenenleri profilleyen [[well-being|esenlik]] görüşmelerine, [[affective-computing|duygusal ders yardımcılarına]] ve [[recommender-systems-and-learning-paths|öneri sistemlerine]] uygulanır.
- **Önemsediğiniz grup üzerinde, araç olmadan ölçülmüş bir çıktıyla yerel olarak sınayın.** Değerlendirme alışkanlıkları için [[interpreting-and-applying-aied-research|AIEd Araştırmasının Yorumlanması ve Uygulanması]] bölümüne, yerel bir sınamayı savunulabilir kılan tasarımlar için [[research-methods-aied|Eğitimde YZ’de Araştırma Yöntemleri]] bölümüne bakın.

## Bağlı kavramlar

- [[equity-in-ai-education]]
- [[inclusive-learning]]
- [[digital-divide]]
- [[neurodiversity]]
- [[accessibility]]
- [[special-education]]
- [[multilingual-learning]]
- [[language-learning]]
- [[bias-mitigation]]
- [[culturally-relevant-pedagogy]]
- [[universal-design-for-learning]]
- [[assistive-technology]]
- [[global-south]]
- [[personalized-learning]]
- [[learners]]
- [[learner-identity]]
- [[interpreting-and-applying-aied-research]]

## Bağlı makaleler

- [[zhang-ai-students-disabilities-meta-analysis-2024]] — Engelli öğrenciler için YZ’ye ilişkin 29 çalışma: g = 0,588 ve yanlılık ayarlamasından sonra g = 0,269
- [[caeai-chatgpt-interdisciplinary-stem-nonstem-2026]] — ChatGPT disiplinler arası öğrenmede STEM ve STEM dışı öğrencilere eşit olmayan biçimde yarar sağladı
- [[bjet-genai-engagement-minority-ethnic-students-2026]] — Azınlık etnik kökenli uluslararası öğrencilerde GenAI kullanımı ve dört başlıklı katılım
- [[assistive-tech-neurodivergent-higher-ed-review-2026]] — 40 çalışmaya 766 kayıt, bunların 15’i üretken YZ
- [[adhd-video-segmentation-computing-education]] — DEHB’li katılımcıları eşit düzeye getiren genel bir tasarım değişikliği
- [[neurodivergent-computing-students]] — Yapı, belirsizlik ve işbirliği üzerine 24 nöroçeşitli öğrenci
- [[genai-minoritized-knowledges-disability]] — YZ’de epistemik marjinalleştirme, engellilik örnek olarak
- [[robot-assisted-language-learning-meta-analysis-2026]] — Küçük bir L2 kanıt tabanında I² = %84,4 ile g = 0,83
- [[structural-silence-underrepresented-language-ai-2026]] — İngilizcenin %49,5’ine karşılık Bengalinin web içeriğinin %0,5’inin altında
- [[hadra-ai-detector-accuracy-efl-2026]] — Dedektörler profesyonel metinleri kusursuz puanlarken EFL yazmayı yanlış sınıflandırıyor
- [[ada-female-coded-chatbot-gender-stereotypes-2026]] — Cinsiyet farkı olmaksızın kadın kodlu rol modellerin 195 öğrenciyle sınaması
- [[gender-bias-transfer-llm-writing]] — Öğrenci makalelerine aktarılan cinsiyet yanlılıklı istek metinleri
- [[all-girls-genai-makerspace-gender-equity-2026]] — Tek cinsiyetli alan değerli bulundu, kızlaştırmaya karşı bir uyarıyla
- [[edufair-bench-pedagogical-fairness-llm-tutors-2026]] — Modele, alana ve davranış boyutuna göre değişen ders yardımcısı adaleti
- [[marked-pedagogies-linguistic-bias-writing-feedback]] — Özdeş makalelerde kalıpla uyumlu geri bildirim
- [[demographic-signals-llm-student-assessment-2026]] — 192.480 çağrı: hem açık kişilikler hem örtük geçmişler modelleri değiştiriyor
- [[student-attention-estimation-fairness-2026]] — Genellemeyen adalet düzenlemesi
- [[ai-divide-ses-personality-primary-education-2026]] — 4.497 öğrenci: boşluğu aracılık eden YZ kullanımı değil dijital okuryazarlık
- [[arc-hubs-k12-ai-robotics-rural-2026]] — Asla toparlanmayan kırsal katılım ve kısıt olarak mentorluk
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Güven aralığı sıfırı geçen bir alt grup etkileşimi
- [[student-ai-inquiry-types-cs2-2026]] — Derlemin tek ailelerinde ilk üniversite mezunu olan öğrenci kullanım bulgusu
- [[international-students-conversational-ai-adaptation]] — Derlemin tek uluslararası öğrenci çalışması
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Ailelerinde ilk üniversite mezunu olan öğrencilere ilişkin derlemin ilk etki tahmini: ders yardımcısı erişimi onlara akranlarına göre 0,22 olan final notunun 0,50 SS’ini kaybettirdi (Liu ve ark. 2026)
- [[fairness-theatre-early-warning-systems-2026]] — Adalet Tiyatrosu: Satıcı Kontrollü Erken Uyarı Sistemlerinde Sonradan Uygulanan Adalet Müdahalelerinin Değerlendirilmesi
