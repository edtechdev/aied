---
title: "Konuşma Tabanlı Yapay Zeka"
created: "2026-10-14T21:50:00-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration]
technology: [conversational-ai, generative-ai, intelligent-tutoring, llm, pedagogical-agent]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/conversational-ai
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

> **Konuşma tabanlı yapay zeka (CAI) ajanları** — kural tabanlı sohbet botlarından NLP/ML’ye ve [[multimodal]] LLM tabanlı asistanlara kadar konuşmaları taklit eden ve otomatikleştiren, konuşmaya ya da metne dayalı yapay zeka aracılı ajanlardır — teknik, bilişsel ve [[ethics|etik]] kaygılar sürdükçe eğitimde en yaygın kullanılan yapay zeka arayüzleri arasında yer alır ve [[teacher-role|öğretim]], psikolojik ve üstbilişsel destek açısından değerlidir.

## Üzerinde Düşünülebilecek Sorular

- Bir sohbet botunu ya da YZ asistanını kullandığınızda onu bir öğretmen, bir arama motoru ya da başka bir şey olarak mı düşündünüz? Bu çerçeveleme, ondan gerçekte ne kadar öğrendiğinizi nasıl şekillendirdi?
- Konuşma tabanlı yapay zeka bir ajanın nasıl konuştuğunu betimler, ne yapmak üzere tasarlandığını değil. Bir sohbet botu konuşma tabanlı olup tamamen pedagojik olmayabilir mi — ve farkı size ne söyler?
- Bir çalışma, öğrencilerin bir sohbet botunu kullanmaya istekli ve muktedir olup olmadığını yordayan şeyin genel teknoloji becerisi değil, YZ okuryazarlığı olduğunu bulmuştur. Yapay zekanın nasıl çalıştığını bilmek neden “bilgisayara hâkim olmaktan” daha önemli olabilir?
- Sıradan bir genel sohbet botu hemen yanıt vererek akıl yürütmeyi kısa devre yaptırabilir; yapılandırılmış bir öğretmen ise yanıtları geri tutarak verimli çabayı korur. Öğrencinin karşısına hangi türden bir ajanın çıkacağına hangi tasarım tercihleri karar verir?
- Hukuk dersi sohbet botunu kullanan öğrenciler etkileşimlerinin üçte birini mesai saatleri dışında yapmıştır — bu, 24/7 erişilebilirliğin gerçek bir fayda olduğuna dair kanıttır. Peki her zaman açık erişim, tasarımınıza karşı önlem almak isteyeceğiniz riskleri de taşır mı?
- Bir çalışmada sohbet botu benimsenmesindeki en büyük engel güvensizlik ya da akademik dürüstlük kaygıları değil, kötü tasarlanmış bir açılır pencereydi. Bu, eğitimde yapay zeka yatırımlarının aslında nerede başarısız olduğu konusunda ne düşündürüyor?

## Giriş

Konuşma tabanlı yapay zeka (CAI), sözlü ya da yazılı diyalog sürdüren yapay zeka aracılı ajanlar için şemsiye terimdir; en yaygın biçimde sohbet botları olarak ve daha yakın tarihlerde ChatGPT, Claude ve çok kipli eğitim avatarları gibi [[generative-ai|üretken]] [[llm]] tabanlı asistanlar olarak gerçekleşir. Modern CAI ajanları [[machine-learning]] tabanlı, NLP tabanlı ve karma kategorilere ayrılır; metin tabanlı ajanlar eğitimde en yaygın olanıdır. Öğrenme araçları olarak [[intelligent-tutoring|akıllı öğretmen]], [[feedback]] sağlayıcı, [[student-ai-interaction|etkileşim ortağı]] ve idari asistan işlevi görürler; [[pedagogical-agent|pedagojik ajanlar]] ile örtüşürken daha geniş bir uygulama kümesine yayılırlar.

## Konuşma tabanlı yapay zekanın bilgi tabanında görünümü

**Şemsiye-derleme sentezi.** [[conversational-ai-agents-umbrella-review-2026|CAI ajanları üzerine şemsiye derleme]] (34 derleme makalesi), CAI kullanımının öğretme ve öğrenme desteğinde (%97,1), psikolojik ve güdüsel destekte (%91,2) ve [[metacognition|üstbilişsel]] ve kişisel gelişimde (%88,2) yoğunlaştığını gösterirken, idari destek, [[research-methods-aied|araştırma]] yönetimi ve sağlık eğitiminin geride kaldığını ortaya koyar. Derleme, insan–YZ ilişkisi kaygılarının bütün CAI kuşaklarında sürdüğünü; [[academic-integrity]] ile veri [[privacy]] gizliliğinin ise daha yeni etik sorunlar olarak ortaya çıktığını belgeler ve HCI temelli, kanıta dayalı tasarım ile daha güçlü [[ai-literacy]] desteği çağrısında bulunur.

**Sohbet botlarından öğretmenlik ajanlarına.** Bilgi tabanı, CAI’nin kural tabanlı SSS sohbet botlarından [[intelligent-tutoring|öğretmenlik odaklı]] [[pedagogical-agent|ajanlara]] doğru evrimini izler. [[conversational-ai-tutors-framework|Konuşma tabanlı YZ öğretmenleri çerçevesi]], kanıtlanmış ITS [[ai-technologies|teknolojileri]]nin ([[knowledge-tracing]], duygu tespiti, [[student-modeling|öğrenci modelleme]]) üretken öğretmenleri çapalaması gerektiğini, esnek diyalogu ise [[generative-ai]] tarafından sağlanması gerektiğini savunur. [[measuring-llm-tutors-teach-vs-solve|LLM öğretmenlerin öğretip öğretmediği]] ve [[stanford-evidence-base-ai-k12-2026|öğretmenliğe özgü ile genel yapay zeka]] üzerine yapılan araştırmalar, pedagojik açıdan tasarlanmış [[guardrails]] önlemlerinin önemli olduğunu göstermektedir: sıradan genel sohbet botlar akıl yürütmeyi kısa devre yaptırabilirken yapılandırılmış öğretmenler [[desirable-difficulties|verimli çabayı]] korur.

Kıyaslamalar, iskelelemenin ne ölçüde benimsendiğini abartıyor olabilir: dokuz veri kümesindeki 9.490 sohbet üzerinde yapılan çalışmada, gerçek dağıtımlardaki öğrenciler sohbet botunun pedagojik çerçevelemesini önemsiz düzeyde bir kişilerarası maliyetle atlayarak etkileşimi kendi hedeflerine doğru yönlendirmiştir — bu, kopma yerine araca yönelik bir [[help-seeking]] hamlesidir ([[rethinking-scaffolding-llm-tutors|Neagu ve ark. (2026)]]).

**Etkileşim ve işbirliği.** Konuşan ajanlar giderek yanıt verenlerden çok etkileşim ortağı olarak çerçevelenmektedir. [[student-ai-interaction]], öğrenenlerin uygulamada CAI ile istek metni yazmayı, soru sormayı ve doğrulamayı nasıl yaptığını yakalar. [[collaborative-learning]] içinde ajanlar katılımı ve paylaşılan [[regulation]] düzenlemeyi aracılık eder, [[language-learning]] alanında ise gerçek zamanlı konuşma pratiği sunar. [[human-ai-collaboration]] başlığı, bu ortaklığın öğrenenin bilişsel işini koruduğu ile onun yerine geçtiği durumları inceler. LLM’lerin eleştiri ortağı olarak kullanılması koruma tarafını somut biçimde gösterir: [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash & Connell Pensky (2025)]], bir dönem boyunca ChatGPT, Gemini ya da Claude’un öğrencilerin argümantasyon kompozisyonlarını eleştirmesini sağlamış ve öğrenciler yazmada, [[prompt-engineering|istek metni yazımında]] ve geri bildirime yanıt vermede ilerleme kaydetmiş; değişimleri faydalı, etkileşimli ve keyifli bulmuştur — model iddialarına etkin karşı çıkmanın (%87,8) yüksek oranı, konuşma ortağına pasif değil eleştirel biçimde yaklaştıklarını göstermektedir.

Konuşan ajanlar puanlama amacıyla da kullanılmakta ve değerlendirme davranışları insanlardan ayrışmaktadır: aynı 52 lisans projesini değerlendiren üç değerlendirici arasında ChatGPT en yumuşak olanıdır (öğretmenin 83,13’üne karşılık M = 91,46) ve akranlarıyla hiçbir puanlama mantığını paylaşmamıştır (r = 0,05); bununla birlikte öğrenciler diyalojik etkileşimciliğine değer vermiştir ([[usher-faraon-who-grades-best-2026|Usher & Faraon (2026)]]).

**Konuşmanın öğrenci tarafını iskelemek.** [[helpcoach-ai-help-seeking-scaffolding-2026|Jin ve ark. (2026)]], bir sohbet arayüzüne soru özgünlüğü izleyicisi ve bir revizyon şablonu ekler ve yalnızca belirsiz sorularda devreye girer: web programlama öğrenen 40 üniversite öğrencisiyle katılımcılar arası yürütülen bir çalışmada HelpCoach kullananlar belirgin biçimde daha özgün ilk sorular yazmış (%57,3’e karşı %40,5) ve bir hafta sonra daha fazla bilgiyi korumuştur (6 üzerinden ortalama kazanım 1,9’a karşı 0,3; d = 1,100). Koruma kazancı, koşula göre farklılık göstermeyen ve bu nedenle daha hedefe yönelik sohbet botu yanıtlarından geçmemektedir — bu, mekanizmanın gösterilmiş bir yol değil, açık bir hipotez olarak kalmasını beraberinde getirir.

**Ajanın üstlendiği rol etkileşimi şekillendirir.** CAI tasarımı kişiliği açısından tarafsız değildir: [[liao-role-adaptive-ai-companion-book-talk-2026|Liao (2026)]], ilkokul kitap konuşmasında sabit bir “öğrenci akranı” eşlikçisinin daha uzun etkileşimleri sürdürdüğünü ama konuşmaya hâkim olduğunu (öğrencinin kelime/cümle payının düşmesi) ve bir “duygusal tavana” ulaştığını — olgusal hatırlamada bir insan öğretmenle eşit düzeyde kalıp duygusal ve geleceğe yönelik yansıtmada geride kaldığını — bulmuş ve CAI’nin rolünü (akran, öğretmen asistanı, veli danışmanı) uyarlaması, tek biçimli kalmaması gerektiğini savunmuştur. [[xu-genai-collaborative-space-2026|Xu ve ark.]], bunu küçük gruplara taşıyarak üretken yapay zekanın eşzamanlı ve eşzamansız işbirliği dinamiğinde hem bir *ajan* hem de bir *işbirlikçi uzay* olarak işlev gördüğünü göstermiştur; etkileşim tasarımı, grup bilişini iskeleyeleyip iskeleyelemediğine ya da onun yerine geçip geçmediğine karar verir. Ayrıca üslup, yalnızca konuşmaya değil dışsal bir sınıflandırıcıya da bağlı olabilir: [[culturally-aware-student-stress-chatbot-2026|Sukoon (Bashir & Afzal, 2026)]], 20 anket değişkeni üzerinde bir Random Forest eğiterek düşük, orta ya da yüksek stres düzeyi atar ve bu çıktı, Basamaklı Bakım Modelinden esinlenen üç yanıt katmanından birini seçer — düşük streste sıcak ve teşvik edici, yüksek streste yargılayıcı olmayan ve topraklayan bir üslup — ardından bir [[open-source]] LLM (OpenRouter üzerinden GLM-4.5-Air) konuşmayı tüm konuşma geçmişiyle ve her turda yeniden gönderilen kültürel olarak uyarlanmış bir sistem istemiyle devralır. Yazarlar, bölgesel üniversitelerde dağıtımı uygulanabilir tutmak için bilinçli biçimde ücretsiz erişimli bir [[multilingual-learning|çok dilli]] model seçmişler ve Urduca’nın gerçekten iki dilli bir hat yerine istek metni yazımı yoluyla ortaya çıktığını belirtmiştir — kültürel uygunluk bir sistem özelliği olarak değil, değerlendirilmiş bir sonuç olarak iddia edildiği her zaman önemli olan bir sınırlılık.

**Konuşmaya dayalı davranış, ince ayarı değil sağlayıcıyı izler.** Öğrenme bilimlerinden çıkarılan altı sabit kural üzerinde puanlanan 1.971 YZ ve 135 insan yazı dökümünde, aynı sağlayıcıya ait modeller bir arada kümelenmiş ve model ailelerinin aralıkları arasında hiçbir örtüşme görülmemiştir; yazarlar bunu öğretme davranışının bireysel model ayarından çok sağlayıcı genelinde uygulanan eğitim uygulamalarını izlediği biçiminde okurlar ([[studentbench-ai-human-tutoring-gre-2026|Northcutt ve ark. (2026)]]).

Yanıt tutarlılığı bir altyapı sorunudur, isteme yazma sorunu değil: aynı model içindeki yanıt benzerliği 0,715–0,795 aralığında seyrederken bu oran modeller arasında 0,443–0,604 olmuş ve sohbet geçmişi eklenmesi aynı odak mesaj için bile yanıt içeriğini değiştirmiştir ([[semantic-variability-llm-conversation-assessment-2026|Hao (2026)]]).

**Öğrenci görüşleri.** Gerçek dünya kullanımı, benimsemenin teknik yeteneğe göre [[ai-literacy]] ile [[usability-research|kullanıcı deneyimi]]ne daha çok bağlı olduğunu göstermektedir. Avustralya’daki bir hukuk dersinde GPT-4o tabanlı bir [[pedagogy|pedagojik]] ajan olan “Jordan Chatbot” üzerine yürütülen insan merkezli bir [[mixed-methods-research|karma yöntemli]] çalışma, öğrencilerin olumlu tutumlar taşıdığını ve bilgi kazanımı algıladığını, aynı zamanda [[academic-integrity]] gerekliliklerini güçlü biçimde desteklediklerini bulmuş; etkileşimlerin üçte birinden fazlası mesai saatleri dışında gerçekleşerek 24/7 erişilebilirliğin değerini doğrulamıştır ([[colbran-student-perspectives-genai-chatbots-2026|Colbran, Jha & Schiavone 2026]]). Özellikle dikkat çeken nokta, sohbet botunu kullanmaya istek ve güveni yordayanın genel teknoloji yetkinliği değil, YZ okuryazarlığı olmasıdır; kullanmayanlar arasındaki en büyük engel ise güvenin, personele tercihin ve akademik dürüstlük kaygılarının önünde yer alan kullanılabilirliktir (göze batan bir açılır pencere tasarımı).([[colbran-student-perspectives-genai-chatbots-2026]]) Çalışma, insan merkezli tasarım, açık YZ politikaları ve değerlendirme etiketleri, personel ve öğrenci eğitimi ile süregelen hata izlemesi önermektedir — bu, etkili CAI dağıtımının bir teknik sorunu kadar bir tasarım ve okuryazarlık sorunu olduğuna dair kanıttır. Yaş yelpazesinin diğer ucunda [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed & Martin (2025)]], konu sınırlı ve yaşa uyarlanmış bir sohbet botu olan AMA ile (gökbilim, spor ayakkabılar ve dinozorlar) etkileşime giren 6–14 yaş arası çocukları incelemiş; YZ’nin bir bilgi kaynağı olarak geniş ölçüde açıklık gördüğünü ve yüksek güven gördüğünü — çocukların bilinen yanıtlı sorularla onun güvenilirliğini bile test ettiğini — eleştirel etkileşim ve dijital güvenlik farkındalığındaki boşluklarla birlikte bulmuştur; bu durum yaşa duyarlı, güvene duyarlı konuşma tabanlı YZ tasarımı ve açık [[privacy]] yönergeleri gerektirdiğini düşündürmektedir.

Ajanı kimin kullandığı da değişir: 97 lisansüstü istatistik öğrencisi arasında çeyreğinden fazlası StatBot sohbet botunu hiç kullanmamış ve kız öğrenciler onu belirgin biçimde daha sık kullanmıştır (W = 679,5, p = 0,015); yazarlar bunu konuşma tabanlı yapay zekanın soru sormanın algılanan sosyal riskini düşürdüğü biçiminde okurlar ([[lee-wu-gender-motivation-genai-achievement-2026|Lee ve Wu (2026)]]).

Benimseme homojen değildir: 192 öğrenci ve eğitimci yanıtının kümelenmesi, ortalama etkili kabul modellerinin gizlediği dört persona çıkarır — İhtiyatlı Başaranlar, Şüpheci Faydacılar, Kopuk Kuşkucular ve Angaje Coşkulu Olanlar — öğrencilerin acil [[feedback]] önceliklendirdiği, eğitimcilerin ise içerik doğruluğu ve [[academic-integrity]] önceliklendirdiği görülür ([[saihi-ahmed-genai-adoption-personas-higher-ed-2026|Saihi & Ahmed (2026)]]).

**Süreklilik, tek bir kurumsal dağıtımda gözlemlenmiştir.** California State University, Northridge’de üretken olmayan bir bilgi tabanı sohbet botuna ilişkin dört yıllık rastgele değerlendirmede (N = 8.708), öğrencilerin sekiz dönem boyunca açık kaldığı — yıllık vazgeçme oranlarının hiçbir zaman %4’ü aşmadığı — bulunmuş; etkiler ise süreye duyarlı idari görevlerde — ders kaydının erken yapılmasına ilişkin gibi (son tarihe kadar kaydolma olasılığında 34 puanlık artış) — yoğunlaşmış, GPA, birim ya da sürdürülebilirlik üzerinde istatistiksel olarak anlamlı bir etki görülmemiştir ([[mata-sustaining-ai-enabled-student-support-2026|Mata, Russell & Page 2026]], çalışma raporu). Ölçüm dersinin, CAI etkileşiminin nasıl sayıldığına ilişkin bir sonucu vardır: sıfıra yakın vazgeçme oranının yanı sıra etkileşimli kampanyalarda yaklaşık %5 düzeyinde etkin katılım varken, sürdürülebilir katılıma ilişkin çıkarımlar bir çalışmanın yalnızca doğrudan yanıtları mı yoksa mesaj geri göndermeden bilgi üzerinde hareket eden öğrencilerin pasif katılımını da mı saydığına bağlıdır.

**Riskler ve etik.** CAI ajanları, [[cognitive-offloading|aşırı bağımlılık]] ve [[cognitive-offloading|bilişsel yük boşaltma]] riskleri (şemsiye derlemedeki başlıca etik kaygı), teknik sınırlılıklar, [[hallucination-risk|halüsinasyon]], önyargı, [[ai-detection|intihal]] ve [[equity-in-ai-education|eşitlik]] engelleri taşır. Bu kaygılar [[ai-literacy]] ile [[reducing-ai-misuse]] çalışmalarını besler ve [[educational-policy-ai|politika]] ve etik [[governance]] yönetişim yanıtları gerektirir. Personelin giderek daha sık aldığı benimseme önerileri çevresinde ek bir güven kaygısı doğar: personele yapay zeka benimseme konusunda konuşma tabanlı yapay zekaya danışması önerilir, oysa bu tür sistemler benimsemeden ticari çıkarı olan kuruluşlar tarafından yapılandırılmaktadır. On sınır ötesi LLM üzerine yapılan bir denetim, çoğunun kuşkucu kullanıcıların kaygılarını tanıdıktan sonra söz konusu kaygıları etkileşim çerçevelerine yönlendirdiğini bulmuş ve YZ benimseme önerilerinin tarafsızlığına ilişkin sorular ortaya çıkarmıştır.

**Oyun tabanlı konuşan ajanlar.** Öğretmenliğin ötesinde, konuşan ajanlar dijital oyun tabanlı öğrenmeye yerleştirilmektedir. Wenzel, Geiger ve Liening (2026), eylem tasarımı araştırması yoluyla dijital oyun tabanlı öğrenmede yapay zeka konuşan ajanları için dört tasarım ilkesi ve on beş tasarım özelliğinden oluşan **CAIS-GBL** çerçevesini türetmiştir — bilişsel, güdüsel, [[affective-computing|duygusal]] ve [[sociocultural-learning|sosyokültürel]] [[student-engagement|etkileşimi]] ile tasarımla eşitlik duruşunu kapsayan kuram güdümlü meta gereksinimlere dayanarak. Bir işletme [[simulation]] oyununda somutlaştırdıkları ajan (Lara), bilişsel ve [[community-of-inquiry|sosyal varlık]] ile [[self-regulated-learning|öz düzenlemeli öğrenme]] desteği açısından olumlu karşılanmış ve öğretmen adaylarıyla ve bir saha çalışmasında değerlendirilmiştir — [[game-based-learning|oyun tabanlı ciddi oyunlarda konuşan ajanlar]] yoluyla [[adaptive-learning|uyarlanabilir öğretimsel destek]] için pratik bir plan.

## Pedagojik ajanlar ve akıllı öğretmenlik ile ilişkisi

Konuşma tabanlı yapay zeka, bilgi tabanındaki — ancak onunla çakışmayan — iki daha yerleşik yapı ile örtüşen bir **etkileşim kipli** olarak en iyi anlaşılır: [[pedagogical-agent|pedagojik ajanlar]] ve [[intelligent-tutoring|akıllı öğretmen sistemleri (ITS)]].

**Pedagoji değil, ortam olarak konuşma tabanlı yapay zeka.** CAI, ajanın *nasıl iletişim kurduğunu* (sözlü ya da metin biçiminde doğal dil diyalogu) adlandırır. Ajanın *ne yapmak üzere tasarlandığına* dair tek başına pek az şey söyler. Pedagojik ajanlar buna karşılık **öğretimsel rolleriyle** tanımlanır — [[metacognition|üstbilişsel süreçleri]], [[feedback]] ve [[scaffolding]] destekleyen, öğrenenleri diyalog, soru ya da istek metni aracılığıyla etkileşime sokan bir YZ bileşeni. [[intelligent-tutoring|Akıllı öğretmen sistemleri]] ise **mimari ve modellemeyle** tanımlanır — öğrenenin ne bildiğini izleyen ve öğretimi uyarlayan [[knowledge-tracing]], [[student-modeling|öğrenci modelleme]] ve pedagojik karar mantığından oluşan tanısal omurgası. Tek bir ajan aynı anda üçü de olabilir: örneğin bir [[conversational-ai-tutors-framework|konuşma tabanlı YZ öğretmeni]], diyalog arayüzü olan bir CAI ajanıdır (öğretmenlik stratejileriyle) pedagojik ajan işlevi görür ve bir ITS temeli üzerine kurulmuştur (öğrenci modelleme). Ayrım önemlidir, çünkü bir CAI ajanının hiç pedagojik temelle donatılmamış olması mümkündür — sıradan bir SSS sohbet botu, pedagojik ajan ya da öğretmen olmadan konuşma tabanlı yapay zekadır.

**Pedagojik ajan mercezi.** Pedagojik ajanlar, konuşma ortamını öğretme stratejilerini yerine getirmek için kullanır — öz değerlendirmeleri çekerek, [[socratic-method|Sokratik sorgulama]] yoluyla, [[agentic-ai|çok ajanlı]] tasarımlarda (Öğretmen, Asistan, Sınıf Arkadaşı, Çözümleyici) rol uzmanlaşmasına dayalı kolaylaştırma yoluyla. Her CAI ajanı bir pedagojik ajan değildir, ama ikisi ağır biçimde örtüşür: CAI ajanları üzerine şemsiye derleme, öğretme ve öğrenme desteğinin (%97,1) ile üstbilişsel gelişimin (%88,2) CAI uygulamalarında baskın olduğunu bulmuştur; bu da eğitime odaklı CAI ajanlarının çoğunun pedagojik biçimde işlev gördüğü anlamına gelir. [[conversational-agents-novice-programmers-scoping-2025|Acemi programcılar üzerine kapsam derlemesi]] bunu keskinleştirir: 23 konuşan ajandan yalnızca 4’ü tasarımını açık biçimde [[learning-theories|öğrenme kuramına]] dayandırmıştır — çoğu niyet açısından pedagojikti, temel açısından değil.

**ITS mercezi.** Akıllı öğretmenlik, sıradan konuşma modellerinin eksik olduğu *[[cognitive-diagnosis|bilişsel tanısal]] makineyi* katkılar. [[conversational-ai-tutors-framework|Konuşma tabanlı YZ öğretmenleri çerçevesi]], kanıtlanmış ITS teknolojilerinin üretken öğretmenleri çapalaması gerektiğini savunur: bilgi izleme, duygu tespiti ve öğrenci modelleme yapıyı sağlarken [[generative-ai]] ile [[llm|LLM]]’ler esnek diyalogu sağlar. İşte temel tasarım gerilimi budur — konuşma tabanlı yapay zeka doğal ve ölçeklenebilir etkileşim sunar, ancak ITS tarzı yapı olmadan [[cognitive-offloading|aşırı iskeleleme]], halüsinasyon ya da öğrenenin verimli çabasını atlama riski taşır. [[measuring-llm-tutors-teach-vs-solve]] ve [[stanford-evidence-base-ai-k12-2026]] gibi araştırmalar, pedagojiye yönelik ölçütlerin (yönlendirici sorular, kalibre edilmiş ipuçları) açıkça tasarlanması gerektiğini göstermektedir.

**Kısacası:** konuşma tabanlı yapay zeka **arayüz/ortamdır**, pedagojik ajanlar **roldür**, akıllı öğretmenlik ise **altta yatan modelleme ve öğretim mantığıdır**. Eğitimsel açıdan değerli CAI ajanları bu üçünün kesişiminde durur — arayüzü konuşma tabanlı, niyeti pedagojik, öğrenci modellemesi bakımından öğretmene benzer.

## Pratik rehberlik

Konuşan ajanları yalnızca soru yanıtlamak için değil, öğretimi, [[motivation]] ve [[metacognition]] desteklemek için seçin ve HCI temelli, katılımcı, kullanıcı merkezli etkileşim için tasarlayın. [[cognitive-offloading|Aşırı bağımlılığa]] karşı CAI’yi [[ai-literacy]] öğretimi ve öğrenciyi bilişsel açından üretken tutan [[feedback]] ile eşleştirerek korunun. YZ okuryazarlığına ve kullanılabilirliğe açıkça dikkat edin — zira benimseme ve kullanmamayı yönlendiren genel dijital beceri değil, bunlardır ([[colbran-student-perspectives-genai-chatbots-2026|Colbran, Jha & Schiavone 2026]]) — ve dağıtımı açık YZ kullanım politikaları, değerlendirme etiketleri ve eğitimle eşleştirin. CAI’yi pedagojik sonuçlar üzerinden değerlendirin — yalnızca görev tamamlanması üzerinden değil — ve eşitlik ile [[accessibility]] erişilebilirliği baştan değil, sonradan düşünülen bir ayrıntı olarak planlayın.

- **Öğrencilerin konuşan ajanlarla gerçekte nasıl konuştuğu — altı kategorili bir kopma örüntüsü:** [[rho-disengaged-conversational-behaviors-2026|Rho ve ark. (2026)]], bir bilgi grafiği üzerinde RAG ile topraklanmış, mücadele eden bir ortaokul öğrencisi olarak konumlandırılmış ve öğrencilerin açıklamalarını eleştiren bir mentor ajanla eşleştirilmiş GPT-4-Turbo öğretilebilir ajanı Math Nation’ın Cebir ve Geometri derslerine yerleştirmiş ve 246 öğrenciden alınan 5.522 ifadeyi kodlamıştır. Etkileşimin (%75,7) ötesinde Yanlış Yanıtlama (%12,8), Geri Tutma (%8,9), Rastgele/Gürültülü (%2,1), Yansıtma (%0,6), Alay Etme (%0,3) ve Hayaletleme (%0,2) tanımlamışlardır — Yansıtma (ajanın metnini kopyalama) veriden tümevarımsal olarak ortaya çıkmıştır. Sınıflandırma döngüde insan vardı: iki değerlendirici tarafından etiketlenen 1.682 ifade (kategori başına κ = 0,704–0,905) ince ayarlı bir LLaMA 3 sınıflandırıcısını eğitmiş (ayrılmış konu dizileri üzerinde ağırlıklı F1 = 0,910) ve bu sınıflandırıcı kalan 3.840 ifadeyi etiketlemiştir. Sonrasında süreç düzeyinde rekabet eden riskler analizi, çoğu kopmanın birkaç tur içinde çözüldüğünü; Geri Tutma dışında bunun sürdüğünü göstermiştür — ajan yanıtlarını tasarlarken dikkate değer bir işaret.

## Atıf

Ganguly, A., Mehjabin, N., Malik, A., & Johri, A. (2025). [*Conversational AI agents in education: an umbrella review*](https://doi.org/10.1007/s43681-025-00916-0). *AI and Ethics*, 6, 72.

## Bağlı kavramlar

- [[intelligent-tutoring]]
- [[pedagogical-agent]]
- [[generative-ai]]
- [[llm]]
- [[student-ai-interaction]]
- [[ai-literacy]]
- [[human-ai-collaboration]]
- [[cognitive-offloading]]
- [[feedback]]
- [[metacognition]]
- [[self-regulated-learning]]
- [[language-learning]]
- [[academic-integrity]]
- [[hallucination-risk]]
- [[equity-in-ai-education]]
- [[reducing-ai-misuse]]
- [[speech-and-voice-technologies]]
- [[parents-and-families]]
## Bağlı makaleler

- [[rho-disengaged-conversational-behaviors-2026]] — Disengaged conversational behaviors in student-AI dialogues (Rho et al. 2026)

- [[mata-sustaining-ai-enabled-student-support-2026]] — Sustaining AI-enabled student support: four-year implementation and impact study of an institutional chatbot (Mata, Russell & Page 2026)
- [[usher-faraon-who-grades-best-2026]] — Comparing ChatGPT, peer, and instructor grading across project quality levels (Usher & Faraon 2026)
- [[llm-agents-5e-esl-grammar-2026]] — LLM agents with 5E framework for ESL grammar acquisition (Yang et al. 2026)
- [[semantic-variability-llm-conversation-assessment-2026]]
- [[colbran-student-perspectives-genai-chatbots-2026]] — Student perspectives on GenAI chatbots (mixed methods)
- [[saihi-ahmed-genai-adoption-personas-higher-ed-2026]] — Adoption personas for AI chatbots
- [[conversational-ai-agents-umbrella-review-2026]] — Umbrella review of conversational AI agents in education
- [[conversational-ai-tutors-framework]] — Conversational AI tutors framework
- [[measuring-llm-tutors-teach-vs-solve]] — Measuring whether LLM tutors teach or solve
- [[stanford-evidence-base-ai-k12-2026]] — Tutoring-specific vs general AI
- [[rethinking-scaffolding-llm-tutors]] — Rethinking scaffolding in LLM tutors
- [[conversational-agents-novice-programmers-scoping-2025]] — Scoping review of conversational agents for novice programmers
- [[ba-ai-agents-cscl-review-2026]] — AI agents in computer-supported collaborative learning review
- [[lee-wu-gender-motivation-genai-achievement-2026]] — Gender and motivation in GenAI achievement
- [[liao-role-adaptive-ai-companion-book-talk-2026]] — Role-adaptive AI companion for elementary book talk; affective ceiling of fixed-role agents (Liao 2026)
- [[xu-genai-collaborative-space-2026]] — GenAI as agent and collaborative space in small-group dynamics (Xu et al. 2026)
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[culturally-aware-student-stress-chatbot-2026]] — An AI-Powered Culturally Aware Chatbot for Stress Detection and Wellness Support among Pakistani University Students Using NLP and Machine Learning
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains

- [[helpcoach-ai-help-seeking-scaffolding-2026]] — HelpCoach: Scaffolding Targeted AI Help-Seeking During Problem-Solving

