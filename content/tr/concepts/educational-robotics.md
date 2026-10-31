---
title: Eğitimde Robotlar
created: "2026-10-14T21:40:00-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [embodied-learning]
technology: [educational-robotics]
connected_faqs: [ai-guidance-children-under-13]
discipline: [stem education, cs education]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/educational-robotics
source_updated: "2026-10-26T10:00:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Eğitimde robotlar (eğitsel robotik)** — [[teacher-role|öğretme]] ve öğrenme araçları olarak fiziksel veya benzetimli (simüle edilmiş) robotların kullanımı. Eğitsel robotik geniş bir yelpazeyi kapsamaktadır: hesaplamalı düşünme ve programlamayı öğreten programlanabilir kitlerden, özel ders veren, hikâye anlatan, işaret dili gösteren veya sosyal becerilerin provasını yapan sosyal destekleyici ve insansı robotlara kadar. Eğitsel robotik; [[problem-solving|problem çözme]], [[critical-thinking|eleştirel düşünme]], [[creativity]] ve STEAM katılımını desteklemesi ve soyut hesaplama kavramlarını vüut bulmuş etkileşim yoluyla somut kılması nedeniyle değer görmektedir. Bilgi tabanının robotik derlemi; [[curriculum-design|müfredat]] ile bütünleşmiş programlamayı, BBÜ destekli konuşma tabanlı özel ders araçlarını, sosyal destekleyici [[storytelling-in-education|hikâye anlatımı]] robotlarını ve sosyal-duygusal öğrenme için rol oyunlarını kapsamaktadır. Bu alan, burada birleştirilen iki yakından ilişkili alan üzerine kuruludur: **sosyal robotlar** (sosyal etkileşim ve ilişki kurmak üzere tasarlanmış robotlar) ve **insan–robot etkileşimi (HRI)** (insanların robotları nasıl algıladığını, güvendiğini ve onlarla nasıl öğrendiğini inceleyen alan).

## Dikkate Alınması Gereken Sorular

- Sınıftaki bir robot, ekrandaki bir chatbot'in sağlayamadığı vüut bulmuş bir [[community-of-inquiry|sosyal varlık]] katmaktadır. Bir robotun fiziksel bedeninin ve sosyal ipuçlarının, öğrencilerin nasıl öğrendiği, güvendiği ve katıldığı konusunda sizce neyi değiştirdiğini düşünüyorsunuz — ve dikkati nelerden uzaklaştırabilir?
- Sosyal robotlar, öğretmek, hikâye anlatmak veya sosyal becerilerin provasını yapmak için insan benzeri konuşma, hareketler ve kişilik kullanır. İnsana benzeyen ve insan gibi davranan bir robot öğrenme için doğal olarak daha mı iyidir, yoksa o sosyal varlık, yalnızca yazılım olan araçlarda görülmeyen riskleri (yanlış bilgilendirme, aşırı bel bağlama, gizlilik) mi getirir?
- BBÜ artık sosyal robotların akıcı biçimde konuşmasını sağlamaktadır. Bir robot bir özel ders öğretmeni gibi konuşabiliyorsa, hâlâ fiziksel gömülmesine bağlı olan nedir — ve “beden” eklemek öğrenme için gerçekten nerede önemli, nerede yalnızca bir yenilik?
- Bir nesneyi fiziksel olarak değiştirerek ya da eylemlerinizin görünür bir sonuç ürettiğini izleyerek öğrendiğiniz bir anı düşünün. Fiziksel bir robotu programlamak, soyut fikirleri (program mantığı gibi) ekranda kod yazmaktan daha etkili biçimde temellendirebilir mi?

## Giriş

Eğitsel robotik, [[ai-education|Eğitimde YZ]]'nin ayrı ancak yakından ilişkili bir uygulamasıdır. Yalnızca yazılım olan [[intelligent-tutoring|akıllı özel ders]] sistemlerinden veya [[llm]] chatbot'lerinden farklı olarak, robotlar **vüut bulmuş** ve çoğunlukla **sosyal** bir varlık katmaktadır — öğrenenlerin görebildiği, değiştirebildiği ve giderek artan biçimde konuşabildiği fiziksel bir ajan. Bu gömülme, onların [[pedagogy|pedagojik]] değerinin merkezindedir: soyut program mantığını gözlemlenebilir davranışta temellendirir ve bedensiz sistemlerin sağlayamayacağı ilişki kurma ile duygusal katılımı destekleyebilir.

Kanıtlar, yapılan işin hacminden çıkarılabileceğinden daha zayıftır: eğitimde YZ ve robotiğe ilişkin bir derleme, ampirik çalışmaların çoğunun 13 yaşın altındaki öğrenenleri dört hafta veya daha kısa süreyle içerdiğini, erken yatırım yapan birkaç ülkede yoğunlaştığını, en çok incelenen sonucun [[learning-gains|öğrenme performansı]] olduğunu ve etiğin, eşitliğin ve politikanın yaygınlaştırmanın gerisinde kaldığını bulmaktadır ([[white-wu-robotics-ai-education-2026|White ve Wu (2026)]]).

### Sosyal robotlar ve insan–robot etkileşimi

Eğitimde robotiğin sosyal tarafını iki akım şekillendirmektedir.

**Sosyal robotlar**, insanlarla sosyal etkileşim yoluyla bağ kurmak üzere tasarlanmış robotlardır; iletişim kurmak, öğretmek, yardımcı olmak veya eşlik etmek için konuşma, hareket, yüz ifadesi ve kişilik gibi insan benzeri ipuçları kullanırlar. Eğitimde sosyal robotlar (iCub, Pepper, Reachy gibi insansı robotlar ve arkadaş robotları), özel ders, hikâye anlatımı, rol oyunu, dil desteği ve çalışma arkadaşlığı için kullanılır. Sosyal varlıkları, yazılım tabanlı [[agentic-ai|YZ ajanlarından]] ayıran temel özelliktir ve ilişki kurma ile duygusal katılımı mümkün kılar. [[llm|Büyük dil modelleri]]ndeki gelişmeler, sosyal robotların söyleyebileceklerini ve yapabileceklerini büyük ölçüde genişletmiş; akıcı, uyarlanabilir konuşma tabanlı özel ders eğitimini mümkün kılmıştır — ancak aynı zamanda yanlış bilgilendirme, [[cognitive-offloading|aşırı bel bağlama]] ve [[privacy]] ihlali gibi riskleri de beraberinde getirmiştir; bu durum, bilgi temelli tasarım yaklaşımlarını gerekçeli kılmaktadır.

**İnsan–robot etkileşimi (HRI)**, insanların ve robotların nasıl etkileşime girdiğini inceleyen disiplinler arası bir alandır; algılamayı, iletişimi, iş birliğini ve bu etkileşimin sosyal, bilişsel ve [[ethics|etik]] dinamiklerini kapsar. Eğitimde HRI, öğrenenlerin robotları nasıl algıladığının, güvendiğinin ve onlarla nasıl öğrendiğinin temelini oluşturur — ister bir robotu programlamak, ister bir özel ders robotuyla konuşmak, ister sosyal senaryoların provasını yapmak olsun. HRI [[research-methods-aied|araştırması]], robotun görünüşünün, davranışının, görev bağlamının ve gömülmesinin [[usability-research|kullanıcı deneyimini]], güveni, özerkliği ve öğrenmeyi nasıl şekillendirdiğini inceler. Eğitimde HRI'nin temel kaygıları arasında insan [[agency]] korumak, [[trust]] inşa etmek, [[self-efficacy]] desteklemek ve robotlarla etkileşimin özerkliği ve sosyal öğrenmeyi zayıflatmak yerine desteklemesini sağlamak yer alır. Bu alan robotiği [[human-ai-collaboration]] ve [[social-emotional-learning]] ile bağdaştırır.

### Eğitimde robotlar nasıl kullanılır

[[teaching-with-robots-five-types-perspective-2026|Christ ve ark. (2026)]], bir teknoloji listesi yerine bir rol tipolojisi eklemektedir: atölyeden çıkan beş sınıf robotu türü, donanıma göre değil *pedagojik işlev ve soyutlama düzeyine* göre farklılaşır. A türü, genel sosyal örüntülerin etkileşimsiz bir gösterimini işletir (tıpkı basmakalıp bir duygu tiyatrosu ve ardından yükselme veya yanlış anlama gibi dinamiklerin tartışılması); b türü, katılımcı fiziksel tiyatroyu, [[embodied-learning|vüut bulmuş öğrenmeyi]], sınır farkındalığını ve duygusal düzenlemeyi destekleyen dokunmaya tepki veren etkileşimli bir robottur; c türü, empati gösteren ve tek bir öğrenciyle etkileşimleri hatırlayan, kendini açıklama için korumalı bir birebir ortam yaratan konuşan dil ortağıdır; d türü, bir kukla gibi ek serbestlik derecelerine sahip olan ve sosyal hiyerarşiyi düzleştirmeyi amaçlayan gizli bir uzman tarafından dışarıdan yönlendirilir; e türü ise, okulda yakın zamanda gözlenen eylemleri yeniden oynatarak öğrencilerin duruma bağlı davranış üzerine düşünmesini sağlayan etkileşimsiz bir robottur — a türüyle olan karşıtlık tam olarak, genelleştirilmiş soyutlamanın aksine bağlama özgü olmasıdır. Tipoloji, tek bir ulusal ruh sağlığı programına dayanan ve doğrulanmamış bir tasarım uzayı olduğunu açıkça belirtmekte; dolayısıyla bu bir robot rollerini tasarlama ve değerlendirme menüsüdür, herhangi birinin işe yaradığına dair kanıt değildir.

- **Hesaplamalı düşünme ve programlama:** Programlanabilir robotlar (örneğin LEGO, blok tabanlı platformlar), öğrenenlerin kodu gerçek sonuçlara bağlamasına yardımcı olur. [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]], hesaplamalı düşünmeyi ortaöğretim STEAM müfredatlarına bağlar ve [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]], blok programlamayı bir [[conversational-ai|konuşma tabanlı YZ]] ajanı ve vüut bulmuş robot geri bildirimiyle birleştirir. [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]], yeni başlayanların benzetimli robotları doğal dille denetlemesini sağlar.

- **Özel ders ve bilgi aktarımı:** [[knowledge-based-design-generative-social-robots-2026|Bilgi temelli tasarım araştırması]] ve [[teachy-mini-generative-social-robot-higher-ed-2026|Teachy Mini]], yükseköğretim öğrencilerine özel ders veren BBÜ destekli üretken sosyal robotlar geliştirir ve yanlış bilgilendirme ile [[cognitive-offloading|aşırı bel bağlama]] gibi riskleri ele alır. [[task-context-trust-educational-hri-2026|Güvene ilişkin araştırmalar]], bir robotun ne yaptığının (görev bağlamı), görünüşünden daha çok öğrenen güvenini şekillendirdiğini ve güvenin öğretim görevlerinde en yüksek düzeyde olduğunu göstermektedir.

- **Hikâye anlatımı ve katılım:** [[motibo-digital-storytelling-robots-motivation-2026|MotiBo]] ve [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]], motivasyonu ve katılımı artırmak için hikâye anlatımında etkileşimli, BBÜ destekli sosyal robotlar kullanır; [[icub-humanoid-storytelling-llm-hri-2025|iCub anlatı HRI çalışması]] ise insanlar ile insansı robotlar arasındaki birlikte üreten hikâye anlatımını incelemektedir.

- **Sosyal-duygusal öğrenme ve [[inclusive-learning|kapsayıcılık]]:** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]], zorbalığa karşı seyirci müdahalesinin provasını yapmak için robot aracılı rol oyunu kullanır ve [[pepper-robot-sign-language-lis-2025|Pepper robotuyla yapılan çalışma]], işitme engelli öğrenenleri desteklemek için robot işaret dili iletişimini araştırır. [[pepper-social-robot-formal-education-scoping-review-2026|Bir kapsam taraması]], Pepper'in resmî eğitimdeki kullanımını haritalandırmaktadır.

- **Özerklik ve etki:** [[human-autonomy-agency-hri-review-2025|Bir sistematik derleme]], HRI'nin insan özerkliğini ve etki hissini nasıl etkilediğini derlemekte ve tasarım çerçevelerini [[regulation|düzenleyici]] taleplerle (AB YZ Yasası, IEEE Ethically Aligned Design) köprüler. [[social-robot-study-companions|Çalışma arkadaşı olarak sosyal robotlar]] ve [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|yaratıcı yazmada robot–BBÜ bütünleşmesi]], robot rollerini daha ayrıntılı biçimde incelemektedir.

- **Proje temelli ve oyun temelli yaklaşımlar:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]], proje temelli bir robotik kursu sunmakta ve [[game-based-gamified-robotics-education-review-2026|bir sistematik derleme]], robotik eğitiminde oyun temelli öğrenme ve oyunlaştırmayı karşılaştırmaktadır.

- **Tam bir robotik iş akışında pekiştirmeli öğrenme ve benzetimden gerçeğe geçiş.** [[teaching-rl-humanoid-robotics-high-school-2026|Dong, Cao ve Wang (2026)]], uçtan uca bir robotik araştırma iş akışını — montaj, elektriksel kontroller, benzetim temelli politika eğitimi ve fiziksel devreye alma — tek bir açık kaynaklı insansı robot üzerine kurulu (parça maliyetinin 6.000 ABD dolarının altında olduğu bildirilen bir ToddlerBot), sekiz üç saatlik oturumluk bir [[k-12|lise]] kursuna dönüştürmüştür. Çiftler bir robotu paylaşır ve donanıma devreye almadan önce [[simulation]] içinde bir [[reinforcement-learning|yürüme politikası]] eğitir; güvenlik aşamaları (yürümeden önce geçilmesi gereken bir ayakta durma testi), bağımlılık sırasını görünür kılar. Paylaşılan bir yapıt ekibi bireyselden çok ödüllendirdiğinden, çerçeve robot performansını bireysel anlayıştan ayırır: öğrenciler rollerini değiştirir, her kontrol noktasında ayrı bir tahmin ve açıklama sunar ve destekli adım atma açıkça kavramsal ustalığın kanıtı olarak değerlendirilmez — yazarların, bir robot kilometre taşını geçirmenin onu anlamak olmadığına dair uyarısı budur.

- **Kit sorunu değil, ekosistem sorunu olarak yarışma robotiği.** [[arc-hubs-k12-ai-robotics-rural-2026|Jacobson ve ark. (2026)]], K–12 robotiği üzerindeki bağlayıcı kısıtı müfredatta veya donanımdan çok sürdürülebilir yerel teknik mentorlukta bulmakta ve bunun coğrafi olarak dağıldığını göstermektedir: Indiana'da FIRST LEGO League katılımı 2020 uzaktan eğitim sezonunda çökmüş, kentsel katılım kademeli olarak toparlanmış, kırsal katılım toparlanmamış ve 2025–2026 boyunca 2020 sonrası düzeyinin yakınında kalmıştır. ARC çerçevesi, mentorluğu tasarlanan nesne haline getirir — kolejler, lisans öğrencilerini yakındaki takımlar için atölye mentorü olarak hazırlayan kredi veren bir kurs işletir ve olgunlaşmış okul programları, deneyimli öğrencilerinin diğer okullara akran mentorü olduğu ikincil merkezlere dönüşür; böylece erişim, kendi kendini güçlendiren bir döngüyle herhangi bir üniversitenin hizmet bölgesinin ötesine yayılır. Tek üniversiteli bir deneme, üç kırsal FLL takımı oluşturmuş ve lisans öğrencilerinin topluluk bağlantısını beş puanlık ölçekte 1,86'dan 4,00'a yükseltmiştir (ölçülen değişimler arasında en büyüğü; teknik kavramları öğretme konusundaki güvenin +1,29'unun önünde), ayrıca Indiana'nın 1.925 devlet okulu üzerine yürütülen uzamsal açık bir Markov benzetimi, ılımlı varsayımlar altında 40 yıl sonra 992 okul programı öngörürken ARC olmadan bu sayı 161 olmuştur. Kanıtlar uygulanabilirlik düzeyindedir — yedi mentor ve dört ebeveyn, geriye dönük öz bildirimler, kontrol grubu yok — ancak çerçevelenme herhangi bir robotik programına taşınabilecek biçimdedir: ölçeklenen veya ölçeklenemeyen şey robot değil, mentorluk kapasitesi ve merkez coğrafyasıdır ([[arc-hubs-k12-ai-robotics-rural-2026]]).

- **Çocuk gelişimi ve küçük yaştaki öğrenenler:** [[ai-toys-child-development-2026|YZ destekli oyuncaklar ve çocuk gelişimi]], odağı erken çocukluk dönemindeki ticari YZ oyuncaklarına çevirerek YZ destekli oyuncakların çocuk gelişimini ve oyunu nasıl etkilediğini incelemektedir. Bu çalışma, eğitsel robotiği sınıf robotlarının ötesine, çocukların evde karşılaştığı tüketici oyuncaklarına taşımakta ve en küçük yaştaki öğrenenler için oyunda [[pedagogical-agent|ajanlar]], [[trust-calibration|güven kalibrasyonu]], [[agency]] ve [[well-being]] konularında sorular ortaya çıkarmaktadır — tasarım yönergelerinin okul çağı robotik müfredatlarına göre daha zayıf olduğu bir alan.
- **Okul öncesi dönemde somut kodlama ve sosyal robotlarda [[ai-literacy|YZ okuryazarlığı]].** Lee (2026), okul öncesi ve anaokulu için hazırlanan Play With AI (PL-AI) müfredatında bağlantısız oyunu, somut kodlamayı (Bee-Bot, Ozobot) ve sosyal bir YZ robotuyla yönlendirilmiş diyaloğu bütünleştirmektedir. [[design-based-research|Tasarım temelli araştırma]], bu vüut bulmuş, somut robotik etkinliklerin çocukların YZ kavramlarına ilişkin ortaya çıkan akıl yürütmesini nasıl desteklediğini belgelemekte; dört tasarım ilkesi — vüut bulmuş oyun, somut kodlama, yönlendirilmiş diyalog ve öğretmen katılımlı tasarım — [[early-childhood-elementary-ai-education|erken çocukluk]] robotiği ve YZ eğitimi için gelişimsel olarak uygun bir model sunmaktadır.

- **Küçük yaştaki öğrenenler için iki paradigma: kodlama robotları ve üretken sosyal robotlar.** [[creative-project-approach-ai-early-childhood-2025|Yang, Li ve Lee (2025)]], erken çocukluk robotiğini, her biri ayrı bir teorik temele dayanan iki [[pedagogy|pedagojik]] paradigmanın eşleşmesi olarak çerçevelemektedir. **Kodlama robotları** (Bee-Bot, KIBO, Matatalab), Papert'in LOGO'sundan türemiş olup [[constructivist|yapısalcılığı]] somutlaştırır — çocuklar yaparak öğrenir ve somut programlama yoluyla [[computational-thinking|hesaplamalı düşünme]] geliştirir. [[generative-ai|Üretken YZ]] ile çalışan **üretken sosyal robotlar**, [[sociocultural-learning|sosyal yapılandırmacılığa]] dayanır; çocuğun Yakınsal Gelişim Alanı içinde öğrenmeyi [[scaffolding|iskeleleyen]] ve sosyal-duygusal gelişimi destekleyen konuşkan akranlar veya özel ders öğretmenleri gibi davranır. İki robot türünü de Proje Yaklaşımına entegre etmeye yönelik beş adımlı **Yaratıcı Proje Yaklaşımı**, öğretmenleri çocuk–robot etkileşimini yönlendiren, otomasyonu [[creativity]] dengeleyen ve çocuğun [[agency]] koruyan kolaylaştırıcılar olarak konumlandırır.

- **Anaokulu hesaplamalı düşünme robotiğinin fiilen ne yaptığı.** 53 çalışmayı içeren bir sistematik derleme, en sık kullanılan stratejilerin problem temelli öğrenme, hikâye anlatımı ve iskeleleme olduğunu bulmuştur; çalışmaların çoğu hiçbir hesaplamalı düşünme çerçevesi adlandırmamakta ve TechCheck-K gibi doğrulanmış bir araç yerine duruma özel değerlendirme araçları kullanmaktadır ([[tsingidou-ct-robotics-kindergarten-2026|Tsingidou ve Sapounidis (2026)]]).

- **Konuşma değil, LLM planlaması.** [[vlm-task-planning-humanoid-robot-autism-education-2026|Kudláčková (2026)]], otizm spektrumundaki öğrenenlerle kullanılan görsel olarak yapılandırılmış etkinlikler olan Shoebox Tasks fotoğraflarını bir görsel-dil modeliyle PDDL problemine dönüştürür ve bir Nao insansı robotu bu planı yürütür ya da gösterir; plan doğruluğu altı görev boyunca puanlanır, herhangi bir öğrenen sonucu üzerinden değil.

### Gömülme ve pedagoji

Belirleyici bir tema, robotların gerçek öğrenme hedeflerini desteklediğinde — yalıtılmış teknik alıştırmalar olarak değil — etkili olduğudur. Dizüstü ChatGPT ile eşleştirilen bir masa üstü robotik projektör, yardım mevcutken düşük kaldı (6,7'ye karşı 7,3/10, p = .41) ancak geri çekildikten sonra puanını korudu (7,0'a karşı 4,4/10, p = .003); bu, kısa vadeli aktarım puanında %60 daha yüksek bir değerdir — yazarların genel bir ikameden ziyade uzamsal bir arada bulunmaya bağladıkları göreve bağlı bir kazanç ([[aifred-desk-robotic-ai-guidance-2026|Orlando ve ark. (2026)]]). Bir robotun değeri pedagojik bağlama bağlıdır: hesaplamalı düşünme öğretmek ([[computational-thinking]]), [[stem-education|STEAM]]'i desteklemek, [[cs-education|programlama]] becerileri kazandırmak, öğrenenleri motive etmek ([[motivation]], [[student-engagement|katılım]]) veya [[social-emotional-learning]] ve [[equity-in-ai-education|kapsayıcılığı]] desteklemek. Robotik ayrıca [[project-based-learning]], [[game-based-learning]] ve [[experiential-learning]] ile bağlantılıdır. Temel tasarım ölçütleri arasında öğrenenin [[agency]] korumak, [[trust]] inşa etmek, [[self-efficacy]] desteklemek ve öğrenmeyi [[embodied-learning|vüut bulmuş etkileşimde]] temellendirmek yer alır. [[language-learning]], [[robot-assisted-language-learning-meta-analysis-2026|meta-analitik kanıtlar]], vüut bulmuş robot destekli dil öğreniminin etkililiğine işaret etmektedir.

- **YZ destekli robotik öğrenmeye götüren yollar.** Robotik+YZ müfredatındaki lise öğrencileri üzerine yürütülen [[educational-robotics-pathways-2026|bir nitel araştırma]], gerçek dünya uygulaması, tasarım ve oyunbaz yaratıcı ifade yoluyla öğrenme bulmuştur (yapısalcı, epistemolojik-çoğulcu bakış açısı).

## Yaygın yanlış anlamalar

- **“Robotlar robot oldukları için hesaplamalı düşünme öğretir.”** **53 çalışmayı** içeren bir sistematik derleme, **problem temelli öğrenme, hikâye anlatımı ve iskelelemeyi** en sık kullanılan stratejiler olarak bulmuştur: sonucu pedagoji taşımıştır ve çalışmaların fiilen yaptığı şey budur.
- **“Fiziksel robotlar ekran tabanlı alternatifleri her açıdan yener.”** Kazanımlar **göreve bağlıydı**: [[aifred-desk-robotic-ai-guidance-2026|Orlando ve ark., 2026]] için **%60 daha yüksek** kısa vadeli aktarım puanı (4,4/10, p = ,003) ve yazarlar bunu **genel bir yerine geçmeye değil mekânsal eş-konumlanmaya** bağlar. İddia, belirli görevlerde eş-konumlanma hakkındadır, genel olarak fiziksellik hakkında değil.
- **“Anaokulunda hesaplamalı düşünme anlamlı olmak için çok erken.”** Derlenen kanıt anaokulu robotiğini doğrudan kapsar; bu, yaş aralığının uygun olmadığı varsayılmak yerine incelendiği anlamına gelir.

## Bağlı kavramlar
- [[early-childhood-elementary-ai-education]] — Erken çocukluk ve ilkokul düzeyinde YZ eğitimi
- [[computational-thinking]]
- [[cs-education]]
- [[stem-education]]
- [[embodied-learning]]
- [[human-ai-collaboration]]
- [[project-based-learning]]
- [[game-based-learning]]
- [[llm]]
- [[motivation]]
- [[student-engagement]]
- [[social-emotional-learning]]
- [[agency]]
- [[trust]]
- [[well-being]]
- [[ethics]]
- [[privacy]]
- [[language-learning]]
- [[k-12]]
- [[higher-ed]]
- [[ai-technologies]] — Şemsiye: YZ teknolojileri ve teknikleri (modeller, BBÜ eğitimi, robotik, RAG, ajan tabanlı)

## Bağlı makaleler


- [[aifred-desk-robotic-ai-guidance-2026]] — Masa üstü robotik projektör: eş-konumlanmış rehberlik, dizüstü ChatGPT’nin kaybettiği aktarımı korudu
- [[vlm-task-planning-humanoid-robot-autism-education-2026]] — Bir görsel-dil modeli bir Nao robotu için Shoebox Tasks planlar (Kudláčková 2026)

- [[pepper-social-robot-formal-education-scoping-review-2026]] — Scoping Review of the Pepper Robot in Formal Education
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[white-wu-robotics-ai-education-2026]] — Robotics and AI in Education
- [[computational-thinking-educational-robotics-secondary-2026]] — Computational Thinking and Educational Robotics
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM
- [[knowledge-based-design-generative-social-robots-2026]] — Knowledge-Based Design for Generative Social Robots
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — Teachy Mini
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[robobuddy-llm-social-robots-classroom-2025]] — RoboBuddy
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[task-context-trust-educational-hri-2026]] — Task Context and Trust in Educational HRI
- [[human-autonomy-agency-hri-review-2025]] — Human Autonomy and Agency in HRI
- [[icub-humanoid-storytelling-llm-hri-2025]] — iCub Narrative HRI
- [[pepper-robot-sign-language-lis-2025]] — Pepper and Sign Language
- [[social-robot-study-companions]] — Social Robots as Study Companions
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Robot-LLM Integration in Creative Writing
- [[game-based-gamified-robotics-education-review-2026]] — Game-Based and Gamified Robotics Education
- [[bots-blocks-project-based-robotics-education-2026]] — Bots and Blocks
- [[educational-robotics-pathways-2026]] — Pathways to Learning AI-Powered Educational Robotics (2026)
- [[tsingidou-ct-robotics-kindergarten-2026]] — Robot-mediated CT in kindergarten
- [[ai-toys-child-development-2026]] — AI-enabled toys and child development
- [[creative-project-approach-ai-early-childhood-2025]] — The Creative Project Approach: integrating coding and generative social robots into early-childhood projects (Yang, Li & Lee 2025)
- [[teaching-with-robots-five-types-perspective-2026]] — Five functionally distinct types of classroom robot, from scripted demonstration to one-to-one empathic dialogue (Christ et al. 2026)
- [[arc-hubs-k12-ai-robotics-rural-2026]] — ARC: a hubs-based framework that treats technical mentorship capacity and hub geography, not hardware, as the constraint on rural K–12 robotics programs (Jacobson et al. 2026)
- [[teaching-rl-humanoid-robotics-high-school-2026]] — Teaching Reinforcement Learning and Humanoid Robotics to High-School Students: An Expert-Validated Curriculum Design on a Low-Cost Open Platform