---
title: Üretici YZ
created: "2026-10-14T22:20:00-04:00"
type: concept
foundations: [ai-literacy, cognitive-offloading]
technology: [intelligent-tutoring, llm, prompt-engineering, rag]
ethics: [hallucination-risk]
confidence: high
translation_of: concepts/generative-ai
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

> **Üretici YZ** — metin, kod, görüntü ve diğer içerikleri üretebilen, en belirgin biçimde GPT-4 ve Claude gibi büyük dil modelleri olarak ortaya çıkan YZ sistemleri. Üretici YZ, [[ai-education|Eğitimde yapay zeka]] [[research-methods-aied|araştırmaları]]nın mevcut dalgasını yürüten teknolojidir.

## Dikkate Alınması Gereken Sorular

- Üretici YZ, talep üzerine akıcı ve kendinden emin görünen içerik üretir. Akıcılık doğruluk anlamına mı gelir ve kendinden emin görünen ama yanlış bir çıktıyı nerede gördünüz — onu yakalamayı ne zorlaştırdı?
- Önceki kural tabanlı veya erişim tabanlı sistemlerin aksine, üretici modeller depolanmış yanıtları erişmek yerine yeni içerik yaratır. Bu kayma riskleri — uydurma, aşırı bağımlılık, akademik dürüstlük — bir arama motoruna kıyasla nasıl değiştirir?
- 80’den fazla makaleyle üretici YZ, bu bilgi tabanının en büyük dizisidir; özel öğretmenlik, değerlendirme, içerik üretimi ve güvenliği kapsar. Hangi uygulamanın öğrenme açısından en umut verici, hangisinin en tehlikeli olduğunu düşünüyorsunuz — ve neden?
- Sokratik bir özel öğretmen oturumu üretebilen aynı teknoloji, kopyalamayı teşvik eden bir “doğru cevap tuzağı” da üretebilir. Hangi tasarım tercihleri, öğrenmeyi iskeleyen üretici YZ’yi öğrenmenin önünü kesen üretici YZ’den ayırabilir?

## Giriş

### Üretici YZ’yi eğitim açısından farklı kılan şey

Önceki kural tabanlı veya erişim tabanlı sistemlerin aksine, üretici YZ talep üzerine akıcı, bağlama uygun içerik üretir. Bu, benzeri görülmemiş olanakların yanında yeni riskler de yaratır:

- **İçerik üretimi:** [[llm|LLM]]’ler öğretim materyalleri, örnekler ve açıklamalar üretebilir. [[book-level-synthetic-textbook-organization|Sentetik ders kitapları]], [[courseblueprint-adaptive-video-generation|uyarlanabilir videolar]] ve [[ai-generated-instructional-videos-computing-ed|öğretim videoları]] eğitim içeriği üretiminin yelpazesini gösterir.
- **Platforma ve dile bağımlı ders planı taslakları.** YZ tarafından üretilen fen ders planlarının uzman [[ai-ed-evaluation|değerlendirmesi]], içerik niteliğinin ne tek biçimli ne de tarafsız olduğunu gösterir. [[karaismailoglu-ai-lesson-plans-science-experts-2026|Karaismailoglu, Surmeli ve Yildirim (2026)]], on bir [[science-education]] uzmanından ChatGPT-4’ü ve eğitime odaklı bir aracı (Teacher’s Buddy) altıncı sınıf Mühendislik Tasarımı Temelli Öğrenme evrelerine karşı puanlatır; eğitime odaklı platform sekiz nitelik ölçütünün tümünde genel amaçlı olanı geride bıraktı, oysa 11 uzmandan 7’si planları yine de yalnızca “düzeltmeyle uygulanabilir” buldu. Her iki platform da Mersin, Türkiye için yerelleştirme istendiğinde bile Türkçe istek metinlerinden İngilizce istek metinlerinden pedagojik açıdan daha zengin çıktı üretti — istek metni dilinin öğretim niteliğini şekillendirdiği bir [[digital-divide|dijital eşitlik]] kaygısı.
- **Özel öğretmenlik ve diyalog:** [[intelligent-tutoring|YZ özel öğretmen sistemleri]] konuşmaya dayalı öğretim için üretici YZ kullanır. [[socratic-method|Sokratik diyalog]] ve [[golrang-propact-pair-programming-2026|işbirlikçi özel öğretmenlik]], üretici yetenekleri [[pedagogy|pedagojik]] etkileşim için kullanır.
- **Simüle edilmiş hastalar ve vaka tutarlılığı.** MeduAI-SP platformundan 4.815 öğrenci-YZ iletisinden oluşan çok uzmanlı anotasyonlu bir derlemde ([[ai-standardized-patient-scaffolding-medical-2026|Yang ve ark., 2026)]]), LLM tarafından üretilen standart hasta yanıtlarının yalnızca yaklaşık %0,68’inde açık bir bağlılık sorunu bulundu ve kademeli açıklama, hasta iletilerinin yaklaşık %99,3’ünde klinik olarak uygun bulundu. Bu, üretici YZ simüle hastalarının yapılandırılmış YAML betimlemesi altında (qwen-max) vaka tutarlılığını ve sorguya bağlı, zamanından önce olmayan açıklamayı sürdürebileceğini destekler; bu da onları yalnızca inandırıcılık gösterimleri için değil, sonuç araştırması için yeterince kararlı bir ortam haline getirir — sistem öğrenme sırasında teşhisleri ve [[summative-assessment|toplayıcı]] notları bilinçli biçimde geri tuttu.
- **Değerlendirme:** [[automated-essay-scoring|Kompozisyon puanlama]], [[automated-assessment|otomatik puanlama]] ve [[formative-assessment]], giderek artan biçimde üretici modellere dayanır. [[benchmark|Kıyaslamalar]] açık uçlu iş için bu kaymayı doğrular: [[pecuchova-automated-grading-open-ended-genai-2026|Pecuchova, Benko ve Drlik (2025)]], bağlama duyarlı GenAI modellerinin (GPTo1 insan puanlayıcılarla neredeyse kusursuz uyuma ulaştı) açık uçlu öğrenci yanıtlarını puanlamada önceki cümle gömme yaklaşımlarını keskin biçimde geride bıraktığını buldu; bu yaklaşımlar katı başvuru eşleştirmesine dayanıyordu ve geçerli ama farklı ifade edilmiş yanıtları yanlış sınıflandırıyordu. [[olvet-genai-scoring-open-ended-medical-2026|Olvet ve ark. (2026)]] bunu klinik dönem öncesi [[medical-education|tıp]] eğitimine taşır; oralarda GPT-4’ün açık uçlu soruları puanlaması, fakülteyle önemli ile neredeyse kusursuz puanlayıcılar arası uyuma ulaştı (ağırlıklı kappa 0,94’e kadar) — ama yalnızca insanlar rubriği üç tur boyunca yinelemeli biçimde iyileştirdikten ve tutarsızlıkları hakemlik etmek için döngüde kaldıktan sonra — oysa en sentetik, bütüncül rubrikli soru orta düzeyde takıldı (κw = 0,54). Bu, üretici değerlendirme güvenilirliğinin ham model kadar insan kaynaklı rubrik mühendisliği ve hata örüntüsü analiziyle şekillendiğinin kanıtıdır. Yine de aynı akıcılık madde türleri arasında genelleşmez: [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat ve ark. (2026)]], ChatGPT-5’in nesnel eczacılık sınav maddelerinde insan fakülteyle eşleştiğini (CCC 0,935–1,000) ama kısa cevapta (≈0) veya kompozisyonda (0,341–0,854) eşleşmediğini buldu ve yapılandırılmış bir rubrik boşluğu güvenilir biçimde kapatmadı.
- **Riskler:** [[hallucination-risk|Uydurma]], [[cognitive-offloading|Aşırı Bağımlılık]], [[cognitive-offloading]] ve [[academic-integrity]] kaygıları özellikle üretici YZ’nin akıcılığından ve [[accessibility]]’sinden kaynaklanır.

- **Çıktı niteliğinin ötesinde bir öğrenme güvenliği sorunu.** [[ssail-safe-sound-ai-learning-2026|Rahimi (2026)]], üretici YZ’nin öğrenenin işinin niteliğini yükseltirken yapmaları gereken bilişsel işi de üstlenebileceğini savunur; dolayısıyla güvenliğin doğruluk, önyargı veya gizlilikten çok insan gelişimi yörüngesi üzerinden yargılanması gerektiğini — yetkinlikleri koruyan Öğrenme Güvenliği ile gelişimlerini destekleyen Öğrenme Sağlamlığı olarak — belirtir.
- **Etkililik iddiaları performansı ölçer, öğrenmeyi değil.** Alanın en büyük tahmini — ChatGPT ve benzeri araçlar için *g* = 0,7 bildiren 69 çalışmanın bir [[meta-analysis-systematic-review|meta-analizi]] — gecikmiş ve desteksiz kalıcılıktan çok anında görev başarısını havuzlar; dolayısıyla üretici YZ’nin [[learning-gains|öğrenme]] ürettiğinin kanıtı değildir ([[genai-performance-vs-learning|Yan ve ark., 2025]]).
- **Öğrenme ortamı üretimi:** Özelleşmiş üretici modeller artık bir ders özetini doğrudan tamamlanmış öğrenme ürünlerine dönüştürür. Yapılandırılmış slaytlar ve kendi kendine yeten etkileşimli HTML sayfalarının tek geçişte üretimi için eğitilmiş bir model ailesi olan [[cogevol-learning-environment-generation-2026|CogEvol (Tu ve ark. 2026)]], bir slaydı medyan 17 saniyede ve etkileşimli bir sayfayı 59 saniyede tamamlar — dakikalar süren çok turlu [[agentic-ai|aracı]] [[scaffolding]] yerini alır. Güvenilirlik, gerçek hataları 53.687 doğrulanmış SFT örneğine ve GRPO tabanlı pekiştirmeli öğrenme için kural artı VVM hibrit bir ödüle dönüştüren bir üretim hattıyla güvence altına alınır. Bu, üretici YZ’yi [[teacher-role|öğretmen]] ve [[curriculum-design|müfredat]] üretim iş akışları için çıkarımları olan bir içerik yazım motoru olarak konumlandırır ve YZ tarafından üretilen öğrenme ortamlarının yalnızca görsel olarak cilalı değil, işlevsel ve pedagojik olarak sağlam olup olmadığını değerlendirmek için.

Eğitimci araç kullanımının bir sayımı, ilginin üretimde toplandığını gösterir: görüntü, ses, video ve sunum araçları, dokuz ülkeden 211 eğitimcinin aday gösterdiği 50 aracın yaklaşık yarısını oluşturdu, oysa özel öğretmenlik ve sohbet robotu araçları öğretime yönelik en küçük grubu oluşturdu ([[typology-generative-ai-tools-education-2026|Bower, Torrington ve Lai (2026)]]).

### Bilgi tabanının üretici YZ kapsamı

80’den fazla makaleyle üretici YZ, bilgi tabanının en büyük teknoloji dizisidir. Araştırmalar etkililik çalışmalarını ([[genai-meta-analysis-programming-learning|meta-analizler]]), güvenlik kaygılarını ([[hazra-safetutors-pedagogical-safety-2026|özel öğretmen zararları]], [[eduguard-safe-rag-llm-tutor|koruyucu çerçeveleme]]) ve tasarım ilkelerini ([[instructional-guidance-genai-learning|öğretimsel rehberlik]]) kapsar.

53 çalışma üzerinde havuzlandığında, GenAI destekli eğitim başarıda (g = 0,40), üst düzey düşünmede (g = 0,72), güdülenmede (g = 0,81) ve yazımda (g = 0,76) GenAI kullanmayan yaklaşımları geride bıraktı; oysa oyun destekli GenAI anlamlı bir yarar katmadı (g = 0,24) ([[genai-educational-outcomes-meta-analysis|Dong (2026)]]).

Ayrı bir 42 çalışmalık yalnızca güdülenme meta-analizi havuzlanmış etkiyi daha düşük bulur (g = 0,764) ve [−0,689, 2,217] aralığına yayılan %95 öngörü aralığı bildirir; dolayısıyla güdüleyici avantaj yeni bir ortam için güvenilir biçimde olumlu değildir ([[genai-learning-motivation-meta-analysis-2026|Fang ve ark. (2026)]]).

Üretici arayüz bu dizideki en yeni yetenektir: düz metin yerine çalışan bir etkileşimli ürün — kaydırıcılar, elle işlenebilir simülasyonlar — yayan modeller. [[generative-ui-education-learning-interactives-2026|Kovshov ve ark. (2026)]] (bir Google Araştırma ekibi), raf özeni üretici arayüzün karmaşık yapılar için henüz pedagojik olarak yeterince kesin olmadığını, ama bir öğrenme hedefini kademeli seviyelenmiş hedeflere ayrıştırmanın ve üretimi eleştiri ile öz-iyileştirme döngülerine sarmanın, uzman öğretmenlerin kabul edilebilir bulduğu etkileşimli öğeler ürettiğini bildirir. Onlarınki bir orkestrasyon tasarımıdır: öğretmenler hedefleri belirtir, onaylar ve aday simülasyonlar arasından seçer; dolayısıyla özel [[simulation|etkileşimli öğrenme materyali]] üzerindeki bağlayıcı kısıt üretimden belirtime kayar ve [[guardrails|pedagojik koruyucu çerçeveleme]] sonradan öğretmen tetiktesine bırakılmak yerine üretim hattına gömülür.

Bu çekirdek dizilerin ötesinde, son çalışmalar kanıt tabanını [[governance|kurumsal]], etkileşimsel ve alan bağlamlarına genişletir. Qin (2026), Lingnan Üniversitesi’nin GenAI okuryazarlığını dijital özgür sanatlar dönüşümünün bir parçası olarak tüm lisans öğrencileri için kurumsallaştırmasını belgeler. Chang ve Li (2026), öğrenci-YZ konuşmalarının disiplinle ilişkili bilişsel [[student-engagement|etkileşimi]] kodladığını gösterir; istek metinlerinin ~%62’si üst düzey bilişsel talebi yansıtır. Neto ve meslektaşları (2026), senaryo temelli sağlık eğitiminde GenAI’yı [[meta-analysis-systematic-review|sistematik biçimde derler]]; [[prompt-engineering|istek metni tasarımının]] öğretimsel belirtim olarak işlev gördüğünü ama nadiren öğretimsel çerçevelerle (%34,8) uyumlandığını veya yeniden üretilebilir ayrıntıda raporlandığını (%34,8) bulur. GenAI ayrıca uygulamaya dayalı [[teacher-education|öğretmen eğitimi]] için öğrenenlerin rol yapma simülasyonlarını da güçlendirir: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Zhuang ve Zhang (2025)]], yaygın oran-akıl yürütme [[misconceptions]] taşıyan bir [[k-12|ortaokul]] öğrencisini simüle eden özel bir ChatGPT sohbet robotu olan *Student GPT*’yi kurdu; bu da öğretmen adaylarına öğrenci düşüncesini teşhis etmede hesaplanabilir, içeriğe özgü uygulama sağladı — bu, istek metni tasarımının (literatüre dayalı bir istek metni, hedef kavramsal hataları güvenilir biçimde ortaya çıkardı; 0,98’e karşılık 0,40) raf özeni bir üretici modeli yararlı bir pedagojik kişiliğe yönlendirebileceğinin kanıtıdır.

[[li-language-educators-genai-review-2026|Dil eğitimcilerinin sistematik bir derlemesi]] (Li ve ark. 2026), eğitimcilerin GenAI’yi en çok hazırlık içeriği işleri için değerli bulduğunu — ders planlama, materyal oluşturma ve yazma desteği — canlı sınıf kullanımında ise çekindiğini bulur; kaygılar [[academic-integrity|akademik dürüstlük]] (intihal ve [[assessment-validity|değerlendirme geçerliliği]]), mesleki yer değiştirme ve teknostres üzerinde toplanır; benimseme mesleki kimlik, pedagojik, teknik, kurumsal ve dürüstlük etkenleriyle şekillenir ve yetkinlik boşlukları episteme, techne ve phronesis’e eşlenir.

İçerik üretimi benzer biçimde [[math-education|matematiğin]] ötesine, öğretmenlerle öğrenme kaynaklarını ortak tasarlamaya uzanır — örneğin, [[stem-education|drone STEM]] öğrenmesi için öğretmen-YZ ortak tasarımı [[simulation]] iskeleleri pedagojik geçerliliği ve bağlamsal alaka düzeyini korur. Çocukların STEAM [[arts-design-and-media-education|sanat eğitiminde]], [[luo-tahir-chatgpt-steam-lesson-planning-2026|Luo ve Tahir (2025)]], ChatGPT destekli ders planlarının öğretmen tarafından yazılanlara göre kazanımlarını deneysel olarak nicelemiştir (uzman puanlı medyan 20,5’e karşılık 17,6, p = .002, büyük etki) — oysa aynı çalışma, akıcı çıktının sınıf üretimi için gerçek başarısızlık kipleri taşıdığını belgeler: günlük öğretim için idealleştirilmiş veya uygulanamaz planlar, gözden kaçan çocuk güvenliği kısıtları (örneğin [[early-childhood-elementary-ai-education|küçük çocuklara]] oyma bıçağı önermek), Batı merkezli kültürel önyargı ve mantıksal olarak kusurlu veya alaka dışı görüntü/kaynak üretimi. Katkı, güvenilirlik sorununu modelin üretip üretemeyeceğinden, pedagojik kullanım için istek metinlerin ve değerlendirme ölçütlerinin onu nasıl kısıtlaması gerektiğine kaydıran bir istek metni çerçevesidir (Rol–Talimatlar–Nihai Hedef artı “dört nokta ve bir çizgi” nitelik rubriği). [[equity-in-ai-education|Eşitlik]] odaklı kullanımlar yeterince incelenmiştir; Avrupa’da yalnızca kız öğrencilerden oluşan bir GenAI üretici atölyesi girişimi, bilişim katılımındaki kalıcı cinsiyet eşitsizliklerini gidermek için iki GenAI aracını feminist pedagojiyle birleştirdi ve kızların GenAI ile ürettiği görüntüleri ile paydaş yansırmalarını analiz etti. Yardımcı ve kapsayıcı uygulamalar büyüyen bir dizidir: [[khlaif-assistive-genai-visually-impaired-2026|Khlaif ve ark. (2026)]] — Filistin’de 21 görme engelli lisans öğrencisinin [[qualitative-research|nitel]] bir vaka çalışması — GenAI’nin hızı, içeriği ve sunumu bireysel öğrenme profillerine uydurduğunu, karmaşık akademik metinleri basitleştirdiğini ve içeriği biçimler arasında dönüştürdüğünü buldu; öğrenenler bunu öğretmenlerin yerini almadan çok onları tamamlayan bir şey olarak görüyor.

- **İlkokul kritik medya okuryazarlığında [[pedagogical-agent|pedagojik aracı]] olarak üretici YZ.** Demir ve Akar (2026), 5E öğretim modelini üretici YZ araçlarıyla (yansıtıcı sorular ve soru-cevap için ChatGPT, içerik iyileştirme için Grammarly ve Canva AI, [[peer-assessment|akran geri bildirimi]] için Padlet) aşamalar boyunca gömülü biçimde, ayrı eklemeler olarak değil, işletir; bu, dördüncü sınıf Türk öğrencilere yönelik, Türk Dili ve Sosyal Bilgiler müfredatlarına hizalı 18 saatlik bir kritik medya okuryazarlığı programında yapılır. YZ destekli grup medya okumada (+3,50), yazımda (+1,67) ve toplam medya okuryazarlığında (+5,17, tümünde p < .01) büyük kazanımlar gösterirken, gruplar arası etki büyüklükleri Cohen’un *d* = 1,12 (okuma), 1,18 (yazım) ve 1,31 (toplam okuryazarlık) idi; denetim grubu ise yalnızca mütevazı biçimde ilerledi. Nitel analiz, kritik medya okuryazarlığı gelişiminin altı alanını ortaya çıkardı — dijital öz-koruma ve [[privacy|veri gizliliği]], amaçlı ve sorumlu medya kullanımı, güvenli iletişim ve sınır farkındalığı, [[critical-thinking|kritik değerlendirme]] ve yanlış bilgi farkındalığı, çevrimiçi risk farkındalığı ve medya [[ethics]]/dijital vatandaşlık — üretici YZ’nin, öğrenmenin önünü kesmek yerine kritik değerlendirmeyi yetiştiren iskelelenmiş bir pedagojik aracı olarak bir müfredata nasıl tasarlanabileceğini gösteriyor.

### Üretici YZ özelleşmiş alanlarda: disleksi desteği

PRISMA kılavuzlu, 2018–2024 yıllarını kapsayan, n=72’lik 2026 disiplinler arası sistematik bir derleme (Dabaghi, D’Urso ve Sciarrone), **üretici YZ’nin disleksi desteği alanında yeterince kullanılmadığını** bulur. GAI araştırmaları (tamamenı 2024’ten) akıllı [[conversational-ai|sohbet robotları]], [[teacher-role|öğretmen eğitimi]] desteği ve keşfedici çalışmalar çevresinde toplanır ve tercih edilen araç olarak klasik [[machine-learning|ML]]’yi hızla geride bırakır — oysa titiz deneysellik ve gerçek dünya doğrulaması büyük ölçüde yoktur. Derlemenin gelecek eğilimleri analizi, GAI destekli kişiselleştirilmiş materyallere ve gerçek zamanlı uyarlanabilir geri bildirime, göz izleme, EEG ve davranışsal [[learning-analytics|analitiğini]] bütünleştiren [[multimodal|çok kipli]] teşhis modellerine, NLP kaynaklı [[intelligent-tutoring|akıllı özel öğretmen sistemleri]]ne ve konuşma aracılarına ve eğitimciye yönelik destek araçlarına işaret eder. Bu, özelleşmiş ve yüksek ihtiyaçlı bir alanda içerik üretimi ve etkileşimli desteğe ilişkin üretici YZ’nin vaadini ve onun benimsemesinin kanıt tabanını aşma riskini birlikte gösterir.

## Bağlı kavramlar

- [[llm]] — üretici YZ’nin altında yatan model sınıfı
- [[prompt-engineering]] — çıktıların nasıl şekillendirildiği
- [[rag]] — erişimle güçlendirilmiş temelleme
- [[ai-literacy]] — onu etkin kullanmak için gereken yetkinlik
- [[ai-education]] — daha geniş alan
- [[intelligent-tutoring]] — konuşmaya dayalı ve üretici özel öğretmen sistemleri
- [[cognitive-offloading]] — üretici YZ’nin güçlendirdiği aşırı bağımlılık riski
- [[hallucination-risk]] — üretilen içeriğin çekirdek bir güvenilirlik riski
- [[academic-integrity]] — akıcı üretimden kaynaklanan dürüstlük kaygıları
- [[automated-assessment]] — puanlama ve geri bildirimde üretici modeller
- [[ai-technologies]] — YZ tekniklerinin ve modellerinin şemsiyyesi
- [[higher-ed]] — temel bir kullanım bağlamı
- [[k-12]] — temel bir kullanım bağlamı

## Bağlı makaleler

- [[genai-learning-motivation-meta-analysis-2026]] — Zarardan yarara uzanan öngörü aralığıyla GenAI’nın öğrenme güdülenmesi üzerindeki etkisine ilişkin meta-analiz
- [[typology-generative-ai-tools-education-2026]] — Eğitim için Üretici YZ Araçlarının Tiplemesi
- [[generative-ui-education-learning-interactives-2026]] — Üretici Arayüzü Eğitim için Kullanmak: Uyarlanmış Öğrenme Etkileşimli Öğeleri
- [[ai-standardized-patient-scaffolding-medical-2026]] — Klinik Görüşme Eğitimi için İskelelemeye Yönelik Çok Aracılı Büyük Dil Modeli Sisteminin Değerlendirilmesi
- [[ssail-safe-sound-ai-learning-2026]] — SSAIL: Öğrenme için Güvenli ve Sağlam YZ Tasarım Çerçevesi
- [[genai-educational-outcomes-meta-analysis]] — GenAI öğrenme çıktılarına ilişkin meta-analiz
- [[genai-meta-analysis-programming-learning]] — Programlama öğrenmesinde GenAI’ye ilişkin meta-analiz
- [[genai-performance-vs-learning]] — GenAI ile performansa karşı öğrenme
- [[hazra-safetutors-pedagogical-safety-2026]] — YZ özel öğretmen aracılarının zararları
- [[eduguard-safe-rag-llm-tutor]] — Güvenli bir RAG LLM özel öğretmenine koruyucu çerçeveleme
- [[cogevol-learning-environment-generation-2026]] — CogEvol: Öğrenme Ortamı Üretimi
- [[khlaif-assistive-genai-visually-impaired-2026]] — Görme engelli öğrenenler için yardımcı GenAI
- [[li-language-educators-genai-review-2026]] — Dil eğitimcilerinin GenAI ile uygulamaları ve gelişimi
- [[luo-tahir-chatgpt-steam-lesson-planning-2026]]
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[pecuchova-automated-grading-open-ended-genai-2026]]
- [[karaismailoglu-ai-lesson-plans-science-experts-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[bloom-classifier-ai-assisted-questions-2026]] — Yeni YZ destekli eğitim sorularının pedagojik değerlendirmesi için ön eğitimli modellerin değerlendirilmesi
