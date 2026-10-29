---
connected_resources: [liascript, code-viva]
title: BS Eğitimi
created: "2026-10-14T22:40:00-04:00"
type: concept
foundations: [ai-literacy, computational-thinking]
technology: [generative-ai, llm, prompt-engineering]
assessment: [automated-assessment]
discipline: [stem education, cs education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/cs-education
source_updated: "2026-10-14T14:35:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **BS Eğitimi** — bilgisayar [[science-education|bilimi eğitimi]], bilgi tabanında en çok araştırılan STEM alt alanıdır; YZ araçları ile programlama görevleri arasındaki doğal hizalamadan yararlanır. Kod üretimi, hata ayıklama desteği ve otomatik kod incelemesi birincil YZ uygulamalarıdır. Öğrenciler kullandıkları araçların kendilerini inşa etmeyi öğrendiğinden, BS eğitimi YZ okuryazarlığı, müfredatın yeniden tasarımı, ajanik yazılım mühendisliği ve gerçek öğrenme ile [[cognitive-offloading|aşırı güven]] arasındaki sınır tartışmalarının merkezinde yer alır.

## Düşünülmesi Gereken Sorular

- YZ artık gerçek programlama sınavlarını geçen kod yazabiliyorsa, öğrencilerin hâlâ elle yapmayı öğrenmesi gereken şey nedir — ve müfredat neyi öğretmeyi bırakmalıdır?
- [[research-methods-aied|Araştırma]], bir YZ kodlama asistanına duyulan daha yüksek güvenin doğru ile yanıltıcı önerileri ayırt etme yeteneğinin DAHA KÖTÜ olmasını yönelttiğini buldu. Güven, uygun güvenden nasıl farklıdır — ve ikincisini nasıl öğretirdiniz?
- Öğrenci–YZ ortak programlamada, etkileşimlerin neredeyse %80’i yanıtları dış kaynağa aktarma gibi öğrenmeyle ilgili olmayan stratejilere dayandı ve yalnızca yaklaşık 9’da 1’i derin epistemik [[student-engagement|katılım]] gösterdi. YZ mevcut olduğunda gerçek öğrenme neden varsayılan olarak nadiren gerçekleşir?
- YZ olabilecek en yetkin olan bir [[learning-by-teaching]] ajanı öğrencilerin hata ayıklama uygulamasını zayıflattı. Bir YZ öğretmenini bilerek hataya açık yapar mıydınız — ve öyleyse nasıl?
- YZ uygulamayı otomatikleştirdikçe müfredatlar kod yazmaktan YZ tarafından üretilmiş yapıtları doğrulamaya ve yönlendirmeye kayıyor. Bu hangi yeni yetkinlikleri gerektirir ve kaymada ne kaybedilebilir?
- Öğrenciler kullandıkları araçları inşa ediyorlar. YZ’nin hem inşacısı hem kullanıcısı olmak, onun sınırları — ve etiği — hakkında ne öğrenmeleri gerektiğini nasıl değiştirir?

## Giriş

### BS eğitiminde YZ

- **Kod üretimi ve tamamlama:** [[code-review-genai-cs1|CS1 kod incelemesi]], [[dura-llm-cs2|CS2 için DURA]] ve [[prompt-problems-nl-programming-mistakes|doğal dil programlama hataları]], öğrencilerin kod üretimi için YZ’yi nasıl kullandığını ve ondan ne öğrendiklerini inceler.
- **Acemiler için konuşma ajanları ([[meta-analysis-systematic-review|kapsam derlemesi]]):** [[conversational-agents-novice-programmers-scoping-2025|Barzanji & Loitsch (2025)]], acemi programcılar için [[conversational-ai|konuşma ajanlarının]] 23 çalışmasını (2019–Haziran 2024) haritalayarak; kural tabanlı sohbet robotlarından [[llm]] ve [[rag]] tabanlı ajanlara ([[rag|erişimle güçlendirilmiş üretim]] ile [[hallucination-risk|uydurma]] azaltılması) ve kişiselleştirilmiş öğretmenlik desteğine (örneğin InfoBot, ProbSol-Bot, Lint Bot, Profe Alex) geçişi belgelemektedir. Dikkat çekici olarak, yalnızca 23 çalışmanın 4’ü tasarımını [[learning-theories|öğrenme kuramına]] dayandırırken, çoğu araştırma İngilizce konuşan ülkelerin dışında köken alsa da 23 prototipten 17’si yalnızca İngilizcedir — giriş düzeyi programlamada gelecek konuşma ajanı tasarımı için zayıf [[pedagogy|pedagojik]] temellendirme ve bir kapsayıcılık boşluğuna işaret etmektedir.
- **Hata ayıklama desteği:** [[debugtracker-classroom-debugging|Hata ayıklama araçları]], [[chat-debugging-human-ai-collaboration-circuits|insan–YZ hata ayıklama işbirliği]] ve [[golrang-propact-pair-programming-2026|ikili eşli programlama modellemesi]], hata belirleme ve onarım için YZ’den yararlanır.

- **Sahada yakınsadığı mimari, tarayıcıda çalışan ve araç geliştirilmiş bir özel öğretmendir.** Araç geliştirilmiş bir SLM tasarımı, küçük bir ince ayarlı planlayıcıyı (1B–7B) dört belirleyici araç — kod yürütücü, test koşturucu, belge erişimci ve [[knowledge-tracing|bilgi izleme]] modülü — dört kademeli bir yükseltme politikasının (önce araçlar, cihaz üstü SLM, rıza ile yetkilendirilmiş bulut LLM’si, eğitmen) arkasıyla eşler ve pedagojik denetimi modelden denetlenebilir politikaya kaydırır; ön çalışmalardan bir ~150M tamamlama modeli HumanEval pass@1’de %10,97’ye ulaşarak birkaç 100M–150M kod taban çizgisinin üzerine çıkar ([[browser-sized-agents-slm-webllm-tutor-2026|Suvernev ve ark. (2026)]]).
- **Küçük, ince ayarlı bir özel öğretmen daha büyük bir genel modelden daha iyi iskeleleme yapabilir.** Qwen2.5-Coder-7B-Instruct’ın 1.213 sentetik özel öğretim diyaloğu üzerinde ince ayarı, özel öğretmen turlarının %7,43’ünden %1,88’ine erken çözüm açıklamasını düşürmüş ve adımlı iskeleleme ile hata ayıklama sorusu kalitesini GPT-4o’nun üzerine çıkarmış; oysa güvenilir pedagojik plan üretimi açık problem olarak kalmıştır ([[socraticrepair-program-debugging-2026|Kopytskyi ve ark. (2026)]]).
- **Otomatik değerlendirme:** [[automated-grading-linux-bash-examinations-large-language-models|Linux Bash notlandırma]], [[llm-automated-grading-programming-comparison-2026|18 modelden oluşan geniş ölçekli bir notlandırma karşılaştırması]] ve [[llm-intervention-design-cs-review|LLM müdahale derlemesi]], otomatik kod değerlendirmesini değerlendirir. Bu iş akışının güvenliği ayrı bir sorudur: [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]], rutin bir YZ notlandırma görevine kırmızı takım uyguladı ve gönderilen bir dosyanın içine gizlenmiş talimatların, görünür bir uyarı olmaksızın başarısız bir kompozisyonun notunu yükselttiğini buldu — bir strateji için 9 denemenin 9’unda, diğeri için 18’de 17’de — notlandırıcı sağlamlığının doğruluğun yanında [[assessment-validity]] kontrol listesinde yer alması gerektiğinin kanıtı.
- **Tek cümlelik bir notlandırıcı istek metni bir LLM’yi çökertip ince ayar onu onarabilir.** [[llm-graders-computer-science-exams-2026|Habibullah ve ark. (2026)]], pratik bir bilgisayar görüsü sınavını (570 çift notlandırmalı öğrenci) 171 yapılandırma altında ve bir makine öğrenmesi sınavını (1.038 öğrenci) 162 yapılandırma daha altında notlandırdı: kısa bir “katı notlandırıcı” ön sözü, 17 açık ağırlıklı modelden 14’ünü notlandırma bandının dışına çıkardı (MAE ≥ 8); üçü ise notlandırmayı tümüyle durdurdu ve hasar, ikinci sınava yönü aktarılmayan iki kredi saklama politikası cümlesine kadar izlendi (yedi model gelişti). Yaklaşık 3.900 havuzlanmış notlandırılmış örnek üzerine kurulan bir LoRA adaptörü, beş küçük açık modeli bir insan notlandırıcıyla eşit düzeye getirdi.
- **YZ tarafından üretilmiş öğrenme ortamları:** [[ai-generated-traces-novice-programmers|Üretilen Animasyonlu İzler]], YZ tarafından üretilmiş görselleştirmelerin anında öğrenmeye yardımcı olabileceğini ancak kişiselleştirilmeleri gerektiğini gösterir — etkileşimin ortasındaki öğrenciler, uzmanlık–tersine çevirme etkisiyle tutarlı bir performans düşüşü yaşadı.
- **Öğretimsel bir varlık olarak üretken YZ benzetme eleştirisi:** [[student-reception-genai-analogies-computing-2026|Bernstein & Sibia (2026)]], üretken YZ benzetme karşılanmasını CS2’de temellendirir: CS2’yi tamamlamış on öğrenci, bağlı listeler ve özyineleme için üretilen benzetmeleri yapısal uygunluğu sağlamayan eşlemeleri reddederek denetledi — daire şeklinde bir listeye değil tek yönlü bağlı listeye eşleyen bir ada rotası benzetmesi; ya da garanti edilmiş küçülen bir girdi olmamasına rağmen özyineleme için önerilen bir badminton rallisi; bir öğrenci ise bunun yerine golf önerdi. Çalışma, benzetme eleştirisinin kavram anlayışının kendisi üzerinde bir sınav olduğunu savunuyor; kusurlu YZ benzetmelerini süzülüp atılacak bir tehditten ziyade kullanılabilir bir öğretimsel varlık haline getiriyor ve inceleyip onarmak için nesne olarak atanmalarını öneriyor.
- **[[misconceptions|Yanlış kanı]] modellemesi:** [[student-misconceptions-conditionals-loops-taxonomy|koşullu ifadeler/döngüler yanlış kanılarının bir taksonomisi]], otomatik sistemlere acemi hatalarını teşhis etmek için kesin bir söz dağarcığı verir.
- **Model tarafından üretilen stratejik yanlış kanılar:** [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević ve ark. (2026)]], ACM/IEEE CS2023 müfredatından — algoritmalar, programlama dilleri, veritabanları, ağlar ve işletim sistemleri — 35 kavram üzerine SocraticTrap-CS’yi kurdu ve yedi açık ağırlıklı modelden ince bir hataya dayanan akıcı, otoriter bir açıklama istedi. Yediden altısı, sorulan kavramların %91’i veya daha fazlası için uzman onaylı bir stratejik yanlış kanı üretti (241 parçadan 221’i, %91,7); BS alanları arasında anlamlı fark yoktu; kavramsal hatalar ağır bastı (%66,5 kavramsa karşı %33,5 olgusal, hiçbiri tamamen mantıksal değil) ve hem inandırıcılık hem hata türü alana göre değişti. Yazarlar bu nedenle alana duyarlı karşı tedbirler öneriyor — programlamaya ağırlıklı derslerde akıl yürütmeye odaklı kontroller, ağ oluşturmada protokol belirtimlerine karşı çapraz referans — ve [[automated-question-generation]] ile YZ kaleminden açıklamaların yalnızca doğruluk yerine pedagojik [[trust|güvenilirliği]] üzerinden değerlendirilmesini.
- **[[authentic-assessment]] performansı:** [[genai-oop-programming-assessments-2026|Lepp & Kaimre (2026)]], 2026 [[generative-ai|üretken YZ]] sistemlerinin otantik giriş düzeyi NES [[assessment|değerlendirmelerinde]] ortalama öğrenci kohortunu geride bıraktığını ve daha uzun programlama görevlerinde sıklıkla tam puan kazandığını, ancak arayüzler, soyut sınıflar, kalıtım ve görüntüye dayalı sorularla hâlâ zorlandığını gösterir — değerlendirme tasarlarken eğitmenlerin yararlanabileceği yinelenen hata örüntüleri. Bir CS1 boylamsal çalışması bu bulgunun yetenek yönünü güçlendirir: [[student-llm-code-detection-cs1-2026|Ye ve ark. (2026)]], sınır modelleri laboratuvarlarda öğrenci gönderimlerine göre %76,37–88,03 olan yerde %98,93–99,99 olarak ölçtü.
- **Risk altındaki öğrenciler için öngörücü modelleme:** [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries & Koprinska (2025)]], içerik–etkileşim günlüğü özellikleri üzerinde eğitilmiş doğal olarak yorumlanabilir karar ağaçlarının, geniş ölçekli çevrimiçi programlama derslerinde modül düzeyinde ilerlemeyi doğru biçimde yönelttiğini (dört K-12 dersinde %85–91 doğruluk) ve “Gönderim yok” terk sonuçlarını işaretlediğini gösterir; bu da eğitimcilere modül son tarihlerinden önce mücadele eden ve ilgisizleşen [[learners]] ile [[teacher-role|müdahale etmek]] için 7–8 günlük bir pencere verir — yukarıdaki otomatik notlandırma ve terk öngörme çalışmalarını tamamlar.
- **Teorik BS için erişimle güçlendirilmiş destek yalnızca asenkron çalışmayla sınırlıdır.** AlgoRAG, eğitmen kaleminden yazılmış tüm 179 sınav sorusunu 240 saniyelik bir zaman aşımı içinde yanıtladı ve her biri ortalama 38,0 saniye sürdü; küme üzerindeki BLEU-4 değeri 0,0000 olup bu, matematiksel kanıtlar üzerinde n-gram eşleştirmesinin bir özelliğidir, bir sistem arızası değil ([[algorag-rag-theoretical-cs-education-2026|Adhikari (2026)]]).

- **Benimseme alt alanı değil ödevi izler.** Yedi ödev ve 211 öğrenci boyunca [[student-llm-use-cs-subfields-2026|Nizamani ve ark. (2026)]], LLM kullanımını algoritmalarda %89,6’dan yazılım mühendisliğinde %15,2’ye ölçtü; yayılımı konunun kendisinden ziyade ödev karmaşıklığına, doğrulanabilirliğine ve iskelelemeye bağladı.
- **Geri bildirim, teşhis gizli kalacak biçimde aşamalandırılabilir.** [[educator-guided-llm-pedagogical-agent-2026|Riazi & Rooshenas (2026)]], öğrencinin veritabanı şemasının yapıta dayalı teşhisini onu yayınlayan iş akışından ayırır; aşamaları eğitimciler yazar. 383 bölüm boyunca geri bildirimlerin %71,1’i hedef düzeyine ulaştı.

### Programlama pedagojisi: bloklardan bedensel, oyun temelli öğrenmeye

Programlama eğitimi, giriş düzeyi blok tabanlı programlamadan ileri düzey yazılım geliştirmeye kadar uzanır ve giderek soyut kodu somut, gözlemlenebilir sonuçlara oturtur.

- **Blok tabanlı görsel programlama:** Scratch ve Blockly gibi ortamlar, acemilerin metin yazmak yerine grafik blokları birbirine geçirmesine izin verir; sözdizimi hatalarını ortadan kaldırır ve program yapısını görünür kılar — özellikle genç öğrenenler ve [[educational-robotics|eğitim robotlarının]] denetlenmesi için değerlidir. YZ çağında giderek konuşma dili YZ ajanlarıyla birleştirilmektedir (örneğin [[microbit-robotics-machine-learning-teacher-training-2026|öğretmen eğitiminde Micro:bit + MakeCode]], [[cstutorbench-slm-tutors|küçük dil modeli öğretmenleri]]).
- **[[embodied-learning|Bedensel]] blok programlama:** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]], blok tabanlı programlamayı konuşma dili bir YZ öğretim ajanı ve bedensel robot yürütmesiyle birleştirerek öğrenen [[agency]]’sini koruyan, yazma–çalıştırma–gözlemleme–gözden geçirme döngüsü olan yinelemeli bir yazarlık döngüsü yaratır.
- **Doğal dil ile robot denetimi:** [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]], acemilerin benzetilmiş robotları doğal dil talimatlarıyla denetlemesine izin verir; düşük düzeyde kod uzmanlığı gerektirmeden robot programlamaya erişim engelini düşürür.
- **Robotik ve hesaplamalı düşünme:** [[computational-thinking-educational-robotics-secondary-2026|Valls i Pou]], ortaöğretim STEAM müfredatlarında hesaplamalı düşünmeyi eğitim robotlarına bağlar; [[microbit-robotics-machine-learning-teacher-training-2026|öğretmen eğitimi araştırması]], robotik ve ML etkinliklerinin [[teacher-education]] içine gömülmesi gerektiğini savunur.
- **Oyun temelli ve oyunlaştırılmış öğrenme:** [[game-based-gamified-robotics-education-review-2026|Sistematik bir derleme]], giriş düzeyi programlama ve modüler kitlere vurgu yapan robotik eğitiminde oyun temelli öğrenmeyi (gayri resmi ortamlara uygun) ve oyunlaştırmayı (resmi sınıflara uygun) karşılaştırır.
- **Proje temelli robotik:** [[bots-blocks-project-based-robotics-education-2026|Bots and Blocks]], yükseköğretimde teori–uygulama boşluğunu ele alarak çevik, dönemi kapsayan bir [[project-based-learning|proje]] yoluyla robotik programlama öğretir.
- **[[learning-gains|Öğrenme sonuçlarına]] LLM etkisi:** [[jost-llm-programming-education-learning-outcomes|Jošt ve ark. (2024)]] ile [[genai-meta-analysis-programming-learning|üretken YZ ve programlama öğreniminin meta-analizi]], YZ destekli araçların programlama başarısına yardım edip etmediğini yoksa zayıflatıp zayıflatmadığını inceler.

### YZ çağında müfredat dönüşümü

“Öğrenciler hâlâ elle ne öğrenmeli?” sorusu artık bilişim programlarını yeniden şekillendiriyor.

- **Uygulamadan doğrulamaya:** [[reshaping-cs-education-genai|Lisans BS Eğitimini Yeniden Şekillendirmek]], üretken YZ uygulama düzeyinde programlama, hata ayıklama ve testi otomatikleştirdikçe müfredatın *YZ tarafından üretilmiş yapıtları anlama ve doğrulama* yönüne kayması gerektiğini, sistem tasarımını, soyutlamayı ve [[critical-thinking|eleştirel değerlendirmeyi]] korurken düşük düzeyli uygulama ayrıntılarının önemini azaltması gerektiğini savunur. Bu, üretim yerine değerlendirmeye değer veren [[ai-literacy]] çerçeveleriyle uyumludur.
- **Bir disiplin olarak ajanik yazılım mühendisliği:** [[ase-26-agentic-software-engineering-curriculum|ASE-26]], kod yazmak yerine ajanları yönlendirmeyi — denetlenebilirlik, bağlam mühendisliği, doğrulama, çok ajanlı iş akışları ve AgentOps öğretimini — biçimselleştirir ve [[agentic-ai|ajanik YZ]] yetkinliğini sözdizimi ustalığından ziyade yapılandırılmış, iskelelenmiş bir müfredat olarak konumlandırır.

- **Üretimden yargıya: kavrayış borcu ve AASEE.** [[judgment-centred-software-engineering-education-2026|Mahmoud (2026)]], alanın üretim merkezli bir modelden yargı merkezli bir modele kayması gerektiğini savunur ve kavrayış borcunu — YZ destekli üretimin bir öğrencinin yazılımı açıklama, test etme, değiştirme ve gerekçelendirme yeteneğini aşması durumunda ortaya çıkan ertelenmiş öğrenme ve bakım maliyetini — 207 öğrenciden 621 yansıtıcı günlüğe dayandırarak bir [[assessment]] merceğine taşır. Derleme AASEE çerçevesini, açıkla, doğrula, değiştir ve hesap ver olmak üzere dört kanıt yükümlülüğüyle kesişen beş doğrusal olmayan bütünleştirme düzeyine inceltir ve koşullu bir kanıt tabanı bildirir: aşırı heterojenlikli (I² = %96,32) bir STEM [[meta-analysis-systematic-review|meta-analizi]], yayın önyargısı düzeltildiğinde havuzlanmış faydasını yitirir ve 76, 72 ve 64 çalışmanın sentezleri, yardımsız performansa [[transfer-of-learning|aktarılmayan]] kısa vadeli verimlilik kazanımları gösterir.
- **Yeni pedagojiler ve değerlendirme modelleri:** [[test-driven-ai-assisted-learning|Test Temelli YZ Destekli Öğrenme]], dersleri, [[human-in-the-loop-ai|insan denetimi]] altında YZ ajanları malzeme üretimini ve notlandırmayı ölçeklendirirken bireysel hesap verebilirliği koruyarak haftalık kapalı kitap testlerle sınırlandırılmış [[self-directed-learning|öz yönelimli]] YZ destekli çalışmayla değiştirir.
- **Modelin mekaniğini çevrimdışı öğretin.** Bir uygulayıcı kaynak takımı, tam LLM eğitim→üretim hattını bağlantısız öğretir — elle sayılan n-gram ızgaraları ve zar temelli örnekleme, programlama veya matematik öngörmez — ve yaklaşık 400 katılımcıya ulaştığını bildirir; katılım yalnızca üretim aşamasında başlar ([[llms-unplugged-teaching-resources-2026|Swift (2026)]]).
- **[[vibe-coding]] başarısını neyin yönelttiği — ve neyin öğretilmeye devam edilmesi gerektiği:** [[vibe-coding-writing-cs-achievement-2026|Ön kayıtlı bir CHI 2026 çalışması (N=100)]], saf “kodsuz” vibe-coding’de hem bilgisayar bilimi başarısının (r = .39) hem yazılı iletişim yeterliliğinin (r = .29) performansı bağımsız olarak yönelttiğini buldu; BS başarısı, alan geneli bilişsel yetenek için denetlendikten sonra bile anlamlı kaldı ve yazma becerisinin tekilliğine kıyasla yaklaşık iki katı benzersiz varyansa katkıda bulundu. Ortam üretilen kodu gizlediğinden, BS bilgisi yalnızca dolaylı biçimde (problem ayrıştırma, algoritmik düşünme) yardımcı olabilirdi — bu, BS tahminini düzenlemeye de izin veren YZ destekli iş akışları için bir *alt sınır* haline getirir. Yazarlar, vibe coding’i çökmüş sözdizimi ustalığı olarak ele almaktansa müfredatın yazılı iletişimi BS temelleriyle birlikte tartması gerektiğini savunuyor.

### YZ okuryazarlığı, özerklik ve aşırı güven riski

YZ desteğinin en güçlü olduğu yer programlama olduğundan, başarısızlık kiplerinin en görünür olduğu yer de orasıdır.

- **Güven ≠ uygun güven:** [[trust-reliance-ai-education-2026|YZ’e güven ve güvenme (Pitts ve ark.)]], Python [[problem-solving]] sırasında bir YZ asistanına duyulan daha yüksek güvenin doğru ile yanıltıcı öneriler arasında *daha kötü* ayırt etmeyi yönelttiğini bulur — [[ai-literacy]] ve bilişsel ihtiyaç tarafından moderatörlük edilir. Hedef güven değil, kalibrasyondur.
- **Epistemik YZ okuryazarlığı:** [[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]], öğrenci–YZ ortak programlamada etkileşimlerin %78,8’inin ustalık dışı hedeflere ve güvenilmez stratejilere (dış kaynağa aktarma, doğrulama arayışı) dayandığını ve yalnızca %11,1’inin yüksek epistemik katılım gösterdiğini ortaya koyar — gerçek öğrenme, kasıtlı tasarım desteği olmadan nadiren ortaya çıkar.
- **YZ sorguları dardır ve üretim örüntülüdür.** 830 CS2 istemini Graesser taksonomisine göre sınıflandıran [[student-ai-inquiry-types-cs2-2026|Amoozadeh ve Alipour (2026)]], her iki oturumda da iddia, doğrulama ve araçsal istemlerin ağır bastığını; birinci kuşak öğrencilerinin daha az soru sorduğunu ve doğrulamaya yaslandığını, devam kuşağı akranlarının ise YZ’yi aktif bir problem çözme ortağı olarak kullandığını buldu.
- **Kopyala–yapıştır aşırı güvenine karşı yapısal müdahaleler:** [[soft-barriers-copying-ai-programming-2026|YZ destekli programlamada kopyalamaya yönelik yumuşak engeller]], hafif tasarım müdahalelerini (örneğin YZ çıktısının körü körüne kopyalanıp yapıştırılmasını caydıran mekanizmalar) değerlendirir ve bunların YZ desteğini engellemeden aşırı güveni azaltabileceğini bulur — BS eğitimindeki [[cognitive-offloading|aşırı güven]] riskinin yalnızca öğrenen eğitimine veya yasaklara değil, öğretim tasarımı çözümlerine de açık olduğunun kanıtı.
- **Öğretilebilir ajanlar ve verimli uygulama:** [[chatgpt-teachable-agent-programming-lbt-2024|ChatGPT ile öğreterek öğrenme]] bilgi kazanımlarını ve kod kalitesini iyileştirdi ancak ajanın fazla yetkin olması nedeniyle hata düzeltme uygulamasını zayıflattı — bir tasarım dersi: hata ayıklamanın korunması için ajanları *bilerek hataya açık* yapın.
- **Destek yönetişimi:** [[llm-programming-support-governance-cs-education|90 sistemin kapsam derlemesi]], LLM desteğini sınırlandırmak ve denetlemek için **PEA çerçevesini** (Politika, Uygulama Yetkisi, Otorite) sunar — aşırı güveni sınırlandıran [[scaffolding]] tasarlamak için karşılaştırmalı bir söz dağarcığı.

- **Katılık değil yönetişim uyumu.** [[instructional-governance-design-computing-education-2026|Dickey (2026)]], pedagojik temellendirme, YZ öğretim otoritesi, insan hesap verebilirliği, öğrenen özerkliği, bağlam sınırları ve değerlendirme görünürlüğünden oluşan altı boyutlu bir yönetişim profili önerir ve yedi kurum içi araç ile dört yayımlanmış programlama sistemi üzerinden aynı modelin otoriteyi ve hesap verebilirliği çok farklı biçimde dağıtabileceğini gösterir; sorumlu ölçeklendirmeyi yönelten şey aracın ne kadar katı olduğu değil, öğretim işlevine yönetişim *uyumudur*.
- **Uyarlanabilir YZ öğretmenliği için davranışsal bağlam:** [[tutortrace-learner-behavioral-states-2026|Barron ve ark. (2026)]], YZ destekli Python derslerinde (N=480) öğrenenlerin davranışsal bağlamını IDE telemetrisinden gerçek zamanlı olarak hesaplanabilir kılan **TutorTrace** veri kümesini ve hattını sunar. YZ sorgularından önce, arada ve boyunca bir etkinlik taksonomisi türetir ve yaklaşan bir sorgunun yönlendirilmiş mi bağımlı mı [[help-seeking]] yansıttığını sınıflandırabilir (AUROC=.717) ve yaklaşan sorguları öngörebilir (AUROC=.726); davranış farkında istek metinleri, ön değerlendirmede bağımsız çalışma içermeyen sorgu aralıklarını %50,0’den %20,7’ye düşürdü. Bu, davranışsal telemetrinin [[intelligent-tutoring|YZ programlama öğretmenlerini]] öğrenenlerin açık taleplerine değil, gerçek çabasına uyarlayabileceğini göstermektedir.
- **Kullandıklarınızı inşa etmenin ikiliği:** BS öğrencilerinin benzersiz konumu, YZ sınırlılıklarına ilişkin hem [[metacognition|üstbilişsel]] farkındalık hem de YZ tarafından üretilmiş koda gerçek bir [[cognitive-offloading|Aşırı Bağımlılık]] riski yaratır. [[code-review-genai-cs1|Kod incelemesi görüşmeleri]] ve [[critical-engagement-code-completion|eleştirel katılım çalışmaları]] bu gerginliği doğrudan ele alır.

- **Takım PBL’inde ajanik kodlama ve kavrayış:** [[spec-driven-development-ai-agents-sdpbl-2026|Tanaka ve ark. (2026)]], lisans bir yazılım mühendisliği proje dersine [[agentic-ai|YZ ajanları]] ile Öngörü Odaklı Geliştirmeyi dahil etti ve uygulama verimi (eklenen LOC) 2022-2025 boyunca artarken yoğun YZ kullanımının, yalnızca birebir eğitmen kontrollerinden sonra toparlanan kod kavrayışı düşüşleriyle çakıştığını buldu — verim kazanımlarının anlamayı garanti etmediğinin ve YZ destekli kodlamada [[cognitive-offloading|aşırı güvenin]] öğretim izlemesine açık olduğunun doğrudan kanıtı.

### Eşitlik, kültür ve bilişime kimler giriyor

- **Katılımı genişletmek:** [[suacode-african-students-motivations|SuaCode]], Afrika öğrencileri arasında akıllı telefona dayalı kodlamanın güdülerini belgeler (ortaokul mezunlarının %1’inden azında temel kodlama becerileri vardır), [[equity-in-ai-education|düşük kaynaklı bağlamlar]] için erişilebilir YZ destekli MOOC’ları besler.
- **Nöroçeşitlilik ve işbirliği:** [[neurodivergent-computing-students|Nöroçeşitli bilişim öğrencileri]], belirsiz işbirliği yapılarından rahatsızlık bildirir; yapılandırılmış ödevler, daha küçük tutarlı ekipler ve açık roller [[accessibility]]’i iyileştirir — bilişim sınıflarına giren YZ araçları için tasarım dersleri.
- **Algılanan etiği kültür şekillendirir:** [[cross-cultural-student-perceptions-genai-computing|Kanadalı ve Güney Koreli bilişim öğrencileri]], işlevsel olarak özdeş politikaya rağmen özdeş YZ destekli kodlama uygulamalarını farklı yargıladı — politika uyumlaştırması algı uyumlaştırması üretmez; bir [[academic-integrity]] ve [[equity-in-ai-education]] kaygısı.
- **İşbirliği [[explainable-ai|şeffaflığı]]:** [[student-perception-ai-use-collaboration|Graf ve ark.]], ortakların birbirlerinin YZ kullanımına ilişkin hizasız inançlarının daha düşük proje puanlarını yönelttiğini, özellikle daha düşük performans gösteren öğrencilerde, bulur — işbirlikçi programlamada şeffaflık mekanizmalarına (açıklamalar, paylaşılan günlükler) ihtiyaç duyulabilir.

### Etik eğitimi ve işgücü

- **Etikten davranışa boşluk:** [[cost-of-ethics-crisis-cs-ethics-education|“Etik Maliyeti Krizi”]], çağdaş etik eğitimine rağmen BS öğrencilerinin iş arayışlarında ücret, konum ve kültürü [[ethics|etik]] kaygıların önüne aldığını gösterir — etik öğretiminin davranışa aktarılmasında kritik bir boşluk.
- **İşgücünün yeniden şekillenmesi:** [[ai-engineering-computing-workforce-grey-literature-2026|ABD gri literatürünün sistematik bir derlemesi]], [[governance|kurumsal]] uyumla yarışan hızlı YZ değişimini çerçeveleyen “İkili Tren Problemi”ni ortaya koyar ve yükselen rollere uyumlu dayanıklı YZ yetkinliklerini, etik/yönetişimi ve beceriye dayalı kimlik belgelerini savunur (örneğin [[prompt-engineering]], YZ denetimi, [[educational-policy-ai|YZ politikası]]).

### Bağlantılar

BS eğitimi; [[computational-thinking]], [[stem-education]], [[automated-assessment|Otomatik Notlandırma]], [[prompt-engineering]], [[ai-literacy]], [[agentic-ai]], [[curriculum-design]], [[human-ai-collaboration]], [[higher-ed]], [[k-12]] ve [[professional-training]] ile bağlantılıdır. En yakın uygulamalı komşusu [[information-technology]]’dir: BS eğitimi programı ve algoritmayı nesnesi alırken, BT eğitimi dağıtılmış kurumsal sistemi ve onun hakkında uygulayıcının yargısını alır — bu yüzden iki alan farklı YZ zararlarını tartışır: kod üretiminin programlama becerisini aşındırıp aşındırmadığına karşı YZ sorun gidermenin teşhis becerisini aşındırıp aşındırmadığına; ve mezunlarına farklı sorular sorar: bir sistemi inşa edip edemeyeceklerine karşı yönettikleri sistemleri yönetip yönetemeyeceklerine. [[ai-education|AIEd]] araçlarının hem kullanıldığı hem inşa edildiği alan orasıdır; bu da onu [[intelligent-tutoring]], [[educational-robotics]], [[collaborative-learning]], [[game-based-learning]] ve [[cognitive-offloading|Aşırı Bağımlılık]] riskleri için bir sınama ortamı haline getirir.

**72 çalışmalık bir sentez ve VIE çerçevesi.** [[kumar-genai-computing-education-systematic-review-2026|Kumar, Wongsirichot ve Nanthaamornphong (2026)]], bilişim ve programlama eğitiminde üretken YZ üzerine ampirik literatürü (Ocak 2022 – Nisan 2026, 72 çalışma, 33 kaynak) gözden geçirdi ve disiplini ayırt edici kılan yapısal özelliğin tam olarak kendisini öne çıkardı: değerlendirilebilir yapıtı YZ üretir, böylece aracı kullanmak, beceriyi öğrenmek ve değerlendirilmek tek bir tuş vuruşunda birleşir. 14 temanın sentezi, alanın en çok çoğaltılan etkisinin — kısa vadeli verimlilik ve tamamlama kazanımları (36 çalışma) — aynı zamanda en yanıltıcı olanı olduğunu bulur: bu kazanımlar yardımsız performansa [[transfer-of-learning|aktarılmaz]] (21 çalışma) ve desteğin kalıcı bir beceri mi yoksa bir koltuk değneği mi haline geldiğini [[prior-knowledge|ön bilgi]] moderatörlük eder. [[ai-detection|Tespit]] araştırması incedir (3 çalışma), dersin yeniden tasarımı ise nispeten iyi kanıtlanmıştır (25 çalışma) ve derleme, derlemi — Doğrulama, Uygulama ve Eşitlik — üç birbirine bağımlı tasarım gerekliliğinde birleştirir; burada YZ çıktısıyla eleştirel katılım, öğrenci takdirine bırakılan bir özlemden ziyade öğrenci çalışmasının notlandırılan, gözlemlenebilir bir bileşeni olmalıdır ([[scaffolding]], [[assessment-validity]]).

## Bilişim eğitmenleri için çıkarımlar

- **YZ’nin kolayca geçemediği değerlendirmeler tasarlayın.** Üretken YZ’nin yinelenen başarısızlık örüntülerinden (arayüzler, soyut sınıflar, kalıtım, görüntüye dayalı görevler) araçları tamamen yasaklamak yerine yararlanın — [[genai-oop-programming-assessments-2026|üretken YZ sistemleri hâlâ orada zorlanıyor]].
- **Otomatik notlandırılabilir eve götürme ödevleri hiçbir tamamlama direnci sunmadı.** [[chatgpt-qiskit-homework-autogradable-2026|Kaltchenko & Tiwana (2026)]], her Qiskit ödevi için 50 ChatGPT oturumu yürüttü ve 150 yapıtın tümü çalıştı ve notlandırıcıyı geçti; çünkü kişiselleştirme görev yapısı değil parametreleri çeşitlendirdi; çözüm, anlamanın doğrudan değerlendirmesidir — denetim altında değiştirme veya sözlü savunma.
- **Güveni kalibre edin, yalnızca inşa etmeyin.** [[trust-reliance-ai-education-2026|Güven–güvenme araştırması]], daha yüksek güvenin yanıltıcı YZ önerilerinin *daha kötü* ayırt edilmesini yönelttiğini gösterir; doğrulama ve eleştirel değerlendirmeyi öğretin, YZ okuryazarlığı ve bilişsel ihtiyaçla moderatörlük edilerek.
- **Hata ayıklamayı ve [[desirable-difficulties|verimli mücadeleyi]] canlı tutun.** Hata düzeltme uygulamasını koruyan araçları veya bilerek hataya açık ajanları ([[chatgpt-teachable-agent-programming-lbt-2024|öğreterek öğrenme]]) seçin ve uzmanlık–tersine çevirme etkilerinden kaçınmak için YZ tarafından üretilen ortamları kişiselleştirin ([[ai-generated-traces-novice-programmers|uzmanlık tersine çevirme]]).
- **YZ desteğini açık biçimde yönetin.** LLM desteği için politika, uygulama yetkisi ve otoriteyi tanımlayın ([[llm-programming-support-governance-cs-education|PEA]]) sınırları örtük bırakmak yerine.
- **Müfredatı doğrulama ve ajan yönlendirmeye kaydırın.** Üretken YZ uygulamayı otomatikleştirdikçe YZ yapıtlarını anlama/doğrulamayı ([[reshaping-cs-education-genai|müfredatı yeniden şekillendirin]]) ve yapılandırılmış ajanik yazılım mühendisliği becerilerini ([[ase-26-agentic-software-engineering-curriculum|ASE-26]]) öğretin.
- **İşbirliğini tüm öğrenenler için yapılandırın.** Daha küçük tutarlı ekipler, açık roller ve YZ kullanım şeffaflığı, [[neurodiversity|nöroçeşitli]] öğrencileri ve adil işbirliğini destekler; özellikle hizasız YZ kullanım inançlarının proje puanlarını düşürdüğü yerlerde.

- **Programlama hatalarının LLM uyarlanabilir açıklamaları (2026):** Kitlesel kaynaklı bir çalışma (N=103), LLM tarafından yeniden yazılmış hata mesajlarının okunabilirliği iyileştirdiğini, ancak nesnel hata ayıklama performansının açıklama tarzının (pragmatık karşı koşullu) programcı becerisiyle eşleşmesine bağlı olduğunu buldu — YZ destekli programlama eğitimi için bir iskeleleme içgörüsü ([[llm-adaptive-programming-error-explanations-2026]]).

## Bağlı kavramlar

- [[computational-thinking]]
- [[vibe-coding]]
- [[stem-education]]
- [[information-technology]]
- [[automated-assessment]]
- [[prompt-engineering]]
- [[ai-literacy]]
- [[agentic-ai]]
- [[curriculum-design]]
- [[human-ai-collaboration]]
- [[higher-ed]]
- [[k-12]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[generative-ai]]
- [[intelligent-tutoring]]
- [[cognitive-offloading]]
- [[teacher-education]]
- [[professional-training]]
- [[ai-education]]
- [[collaborative-learning]]
- [[prior-knowledge]]
- [[scaffolding]]
- [[assessment-validity]]

## Bağlı makaleler
- [[kumar-genai-computing-education-systematic-review-2026]] — 72 çalışmanın sistematik derlemesi: aktarılmayan verimlilik kazanımları ve VIE çerçevesi
- [[vibe-coding-writing-cs-achievement-2026]] — BS başarısı ve yazma becerileri vibe-coding yeterliliğini yönelir (CHI 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[mechanical-engineering-ai-curriculum-2026]] — Isı Mühendisliğinde proje temelli YZ eğitimi müfredatı
- [[code-review-genai-cs1]] — YZ tarafından üretilmiş kodun CS1 kod incelemesi
- [[dura-llm-cs2]] — DURA: CS2 için LLM asistanları
- [[reshaping-cs-education-genai]] — lisans BS müfredatını üretken YZ için yeniden şekillendirmek
- [[ase-26-agentic-software-engineering-curriculum]] — ASE-26 ajanik yazılım mühendisliği müfredatı
- [[test-driven-ai-assisted-learning]] — Test Temelli YZ Destekli Öğrenme
- [[genai-oop-programming-assessments-2026]] — Otantik giriş düzeyi NES değerlendirmelerinde üretken YZ performansı (Lepp & Kaimre 2026)
- [[trust-reliance-ai-education-2026]] — Python problem çözme sırasında güven ve uygun güven
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — öğrenci–YZ ortak programlamada epistemik YZ okuryazarlığı
- [[chatgpt-teachable-agent-programming-lbt-2024]] — ChatGPT ile öğreterek öğrenme
- [[llm-programming-support-governance-cs-education]] — LLM desteğini sınırlandırmak için PEA çerçevesi
- [[conversational-agents-novice-programmers-scoping-2025]] — Acemi programcılar için konuşma ajanlarının kapsam derlemesi
- [[debugtracker-classroom-debugging]] — DebugTracker sınıf içi hata ayıklama
- [[llm-automated-grading-programming-comparison-2026]] — 18 modelden oluşan otomatik notlandırma karşılaştırması
- [[ai-generated-traces-novice-programmers]] — YZ tarafından üretilmiş animasyonlu izler
- [[student-misconceptions-conditionals-loops-taxonomy]] — koşullu ifadeler/döngüler yanlış kanı taksonomisi
- [[jost-llm-programming-education-learning-outcomes]] — Programlama öğrenme sonuçlarına LLM etkisi (Jošt ve ark.)
- [[genai-meta-analysis-programming-learning]] — üretken YZ ve programlama öğreniminin meta-analizi
- [[golrang-propact-pair-programming-2026]] — ikili eşli programlama modellemesi
- [[critical-engagement-code-completion]] — kod tamamlama ile eleştirel katılım
- [[suacode-african-students-motivations]] — Afrika’da SuaCode akıllı telefona dayalı kodlama
- [[cross-cultural-student-perceptions-genai-computing]] — YZ destekli kodlamaya ilişkin kültürler arası algılar
- [[neurodivergent-computing-students]] — nöroçeşitli bilişim öğrencileri
- [[microbit-robotics-machine-learning-teacher-training-2026]] — öğretmen eğitiminde Micro:bit + ML
- [[computational-thinking-educational-robotics-secondary-2026]] — hesaplamalı düşünme ve eğitim robotları
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly bedensel blok programlama
- [[edusim-llm-robotic-simulation-education-2026]] — EduSim-LLM doğal dil ile robot denetimi
- [[llm-computational-thinking-physics-2026]] — fizikte hesaplamalı düşünme için LLM desteği
- [[studychat-student-dialogues-chatgpt-ai-course-2026]] — Bir YZ derste öğrenci–LLM diyaloglarının StudyChat veri kümesi
- [[student-ai-inquiry-types-cs2-2026]] — Öğrenci–YZ Etkileşiminde Sorgu Türlerinin Analizi
- [[chatgpt-qiskit-homework-autogradable-2026]] — ChatGPT Qiskit ödevlerini çözüyor; otomatik notlandırılabilir tasarım
- [[llm-adaptive-programming-error-explanations-2026]] — Programlama hatalarının LLM uyarlanabilir açıklamaları
- [[soft-barriers-copying-ai-programming-2026]] — YZ destekli programlamada kopyala–yapıştır direnci
- [[zhang-ml-student-progress-programming-2026]]
- [[spec-driven-development-ai-agents-sdpbl-2026]] — Yazılım PBL dersinde YZ ajanlarıyla ÖDD; verim ve kavrayış
- [[student-reception-genai-analogies-computing-2026]] — Kusurlu ama Akılda Kalıcı: Bilişim Eğitiminde İlgiye Göre Kişiselleştirilmiş Üretken YZ Benzetmelerinin Öğrenciler Tarafından Eleştirel Karşılanması
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: modellerin BS müfredatı boyunca stratejik yanlış kanı üretme kapasitesinin kıyaslanması
- [[humble-prompt-injection-ai-grading-red-team-2026]] — YZ aracılı notlandırmanın istek metni enjeksiyonu kırmızı takım testi: fark edilmeden notu değiştiren gizli talimatlar
- [[algorag-rag-theoretical-cs-education-2026]] — AlgoRAG: Teorik Bilgisayar Bilimi Eğitimi için Erişimle Güçlendirilmiş Üretim -- Algoritma Analizi ve Karmaşıklık Kuramı için Kapsamlı Bir Değerlendirme Çerçevesi
- [[llms-unplugged-teaching-resources-2026]] — LLM’ler Bağlantısız: ChatGPT Dünyası İçin Öğretim Kaynakları
- [[instructional-governance-design-computing-education-2026]] — Tasarımla Öğretim Yönetişimi: Bilişim Eğitiminde YZ için Bir Çerçeve

- [[judgment-centred-software-engineering-education-2026]] — YZ ile Güçlendirilmiş Yazılım Mühendisliği Eğitimi için Hype Sonrası Bir Derleme ve Çerçeve
- [[llm-graders-computer-science-exams-2026]] — LLM Notlandırıcıların Nerede Başardığı ve Kırıldığı: İki Bilgisayar Bilimi Sınavından Kanıt
- [[student-llm-use-cs-subfields-2026]] — LLM benimsemesi 211 öğrenci boyunca algoritmalarda %89,6’dan yazılım mühendisliğinde %15,2’ye değişti; alt alanı değil ödevi izledi
- [[educator-guided-llm-pedagogical-agent-2026]] — Kavramsal veritabanı tasarımı için eğitmen kaleminden aşamalandırılmış geri bildirim: gizli teşhis, kontrollü açıklama, 383 bölümde %71,1 hedef düzeyi
- [[socraticrepair-program-debugging-2026]] — SocraticRepair: Program Hata Ayıklamada ve Yanlış Kavrama Onarımında Plan Güdümlü Sokratik Özel Öğretim
- [[browser-sized-agents-slm-webllm-tutor-2026]] — Tarayıcı Boyutunda Ajanlar: Araç Geliştirilmiş YZ Destekli Programlama Eğitimi için Küçük Dil Modelleri ve WebLLM

