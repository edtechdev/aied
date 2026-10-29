---
connected_resources: [mglearn]
title: Dil Öğrenimi
created: "2026-10-14T21:50:00-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
ethics: [equity-in-ai-education]
discipline: [language learning, writing education]
level: [higher ed, k 12]
confidence: high
translation_of: concepts/language-learning
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Dil Öğrenimi** — eğitim ortamlarında YZ’nin ikinci dil (L2) edinimini, yazma gelişimini ve dilsel çeşitliliği nasıl desteklediğinin incelenmesi. Bu bilgi tabanındaki [[ai-education|Eğitimde yapay zeka]] [[research-methods-aied|araştırması]]; sözlü diyalog için YZ muhatapleri, L2 öğrenenler için [[automated-essay-scoring|otomatik yazma değerlendirmesi]] ve YZ puanlama sistemlerindeki dil yanlılığına ilişkin kaygıları kapsar.

## Değerlendirilmesi Gereken Sorular

- Dil doğası gereği etkileşimlidir, bu da onu [[conversational-ai|konuşma tabanlı YZ]] için uygun kılar — ama YZ’nin dilsel yetenekleri ana dili dışı örüntülere karşı yanlılık riskleri de doğurur. Fırsat ile risk arasındaki bu gerilimin nerede işlediğini gördünüz?
- Bir çalışma, YZ puanlamasının dilsel olarak daha zayıf öğrencileri sistematik biçimde düşük değerlendirdiğini buldu; bir diğeri ise öğrencileri ana dili konuşan normlarına değil kendi önceki çalışmalarına göre karşılaştırmayı önerdi. Değerlendirme için “referans noktası”, [[ai-feedback-quality|YZ geri bildiriminin]] bir öğrenciye yardımcı olup olmadığını ya da onu cezalandırıp cezalandırmadığını nasıl değiştirir?
- YZ muhatapleri iletişimsel pratiği ölçekte genişletebilir, ancak sayfa bunların akıcılığın gerçek konuşmaya aktarılabilmesi için insan etkileşimiyle eşleştirilmesi gerektiğini vurgular. Bir YZ ile pratik yapmak, bir insan partnerin veremeyeceği neyi kazandırır — ve neyi kaybettirir?
- Öğretmen desteği — yalnızca YZ aracı değil — öğrencilerin başarı hedefleri üzerinden YZ destekli dil öğreniminde katılımı yürüttüğü gösterildi. Toplumsal ve [[pedagogy|pedagojik]] bağlam, öğrenenlerin bir YZ pratik aracıyla etkileşimini sürdürüp sürdürmediğini nasıl şekillendirir?
- Bir [[meta-analysis-systematic-review|meta-analiz]], gelişmekte olan teknolojilerden küçükten orta düzeye, düzeye bağlı kazanımlar buldu; üretken becerilerin (konuşma, yazma) alıcı olanlardan daha fazla kazanım sağladığını gösterdi. Konuşma ve yazma, dinleme ve okumadan neden daha fazla yararlanabilir?
- YZ standart İngilizce’yi ayrıcalıklı kılıyorsa ve ana dili dışı ya da çeşitli dil örüntülerini cezalandırabiliyorsa, dil öğretmenleri değerlendirmeyi ve geri bildirimi YZ’nin dilsel çeşitliliği destekleyecek biçimde nasıl tasarlamalı — onu silmek yerine?

## Giriş

Dil öğrenimi, dil doğası gereği etkileşimsel olduğu için — bu da onu konuşma tabanlı YZ için uygun kılar — ve YZ’nin dilsel yetenekleri hem fırsatlar (ölçekte [[personalized-learning|kişiselleştirilmiş dil pratiği]]) hem de riskler (ana dili dışı dil örüntülerine karşı sistematik yanlılık) doğurduğu için önemli bir Eğitimde YZ alanı olarak ortaya çıktı. Bu bilgi tabanındaki makaleler bu denklemin her iki yanını da inceler. Hedef dilin özellikle **İngilizce** olduğu durumlarda — özellikle [[english-education|Akademik Amaçlar için İngilizce (EAP)]] ve EFL/ESL/L2 İngilizce [[teacher-role|öğretimi]] — genel L2 ediniminden ve genel yazmadan İngilizce’ye özgü araştırmaları ayıran özel [[english-education]] kavram sayfasına bakın.

**Dil öğretmeni ve muhatapleri olarak YZ**, en gelişmiş temadır. **[[ai-interlocutor-l2-spoken-dialogue|Muhatapları Bir YZ Olduğunda Ne Değişir?]]**, L2 öğrenenleri YZ ile insanlara kıyasla konuştuğunda etkileşimsel akıcılığı ve dilsel benimsemeyi inceler. **[[tact-pedagogically-adaptive-esl-tutoring|TACT]]** pedagojik olarak uyarlanabilir ESL özel dersi sunar. **[[llm-children-reading-story-generation]]** çocukların okuma gelişimi için YZ üretimi hikâyeleri araştırır. Bunlar [[intelligent-tutoring]] ve [[generative-ai]] ile bağlantılıdır. **[[llm-agents-5e-esl-grammar-2026|Yang, Weng ve Yang (2026)]]**, [[llm]] tabanlı iki ajan tasarladı — geleneksel bir YZ İngilizce öğretmeni ve sorgulama temelli dilbilgisi öğrenimi için **5E çerçevesini** (bağlan, keşfet, açıkla, derinleştir, değerlendir) kullanan bir diğeri. **37 ESL öğrencisiyle** rastgele bir karşılaştırmada, **yüksek performans gösteren öğrenciler YZ öğretmene olumlu yanıt verdi**, düşük performans gösteren öğrenciler ise karışık tutumlar sergiledi; koşullar içsel motivasyon, bilişsel değişim ve performans açısından farklılaştı — bu da LLM ajanı tasarımının öğrenen yeterliliğine uydurulması gerektiğini gösterir.

Fiziksel olarak somutlaşmış özel ders asistanları için, 11 RALL çalışmasının meta-analizi (N = 595) L2 öğrenimi üzerinde yüksek heterojenlikle birlikte büyük bir toplanmış etki buldu (g = 0,83) ve bunu yalnızca etkileşim biçimi yönetti — grup temelli biçimler bire bir uygulamayı geçti, oysa robot morfolojisi, kiplilik, özerklik ve toplumsal rol geçmedi ([[robot-assisted-language-learning-meta-analysis-2026|Wang, Zhang ve Zou (2026)]]).

**Dil değerlendirmesinde YZ**, LLM’ler [[automated-question-generation|madde üretimini]] ve değerlendirmeyi destekledikçe önemli bir alan olarak ortaya çıkmaktadır. **[[gpt-item-generation-l2-listening-2026|Aryadoust ve Wong (2026)]]**, L2 dinleme değerlendirmesinde otomatik madde üretimi için [[prompt-engineering|istek metni mühendisliğini]] ince ayara karşı karşılaştırdı: yinelemeli istek metni iyileştirmesi madde niteliğini artırdı ama bir düzlemde durdu, buna karşın **GPT-4.1’in iyileştirilmiş istek metni üzerinde ince ayarı** (istek metni tasarımını sabit tutarak) daha fazla kazanım sağladı — değerlendirme geliştiricilerinin istek metni yinelemesi yerine ne zaman model uyarlamasına yatırım yapması gerektiğine dair bir örnek.

20 deneyimli öğretmen tarafından derecelendirilen 52 EFL değerlendirme görevinin bir karşılaştırması, YZ üretimi ile insan geliştirmeli maddeler arasında genel olarak anlamlı bir nitelik farkı bulmadı, ancak açık bir iş bölümü ortaya koydu: YZ dilbilgisi ve kelime bilgisi için tercih edildi (%69), okuma, yazma, dinleme ve konuşma için insan geliştirmeli maddeler tercih edildi (%75–83) ([[ai-vs-human-assessment-efl-tpck-2026|Nourashrafi, Alavinia ve Darvishi (2026)]]).

**L2 öğrenenler için otomatik yazma değerlendirmesi**, YZ’nin ana dili dışı yazmayı değerlendirme yeteneğini ele alır. **[[self-referential-l2-writing-llm-assessment|Bannò ve ark.]]** ana dili konuşan normları yerine öğrenci yazmasını kendi önceki çalışmasına karşılaştıran öz-referanslı bir yaklaşım önerdi. **[[ai-scoring-language-bias-physics|Feser ve Tschisgale]]**, YZ puanlamasının dilsel olarak zayıf öğrencileri sistematik biçimde düşük değerlendirdiğini buldu — [[assessment-validity]] ve [[bias-mitigation]] kaygılarıyla bağlantılı bir bulgu. **[[genai-linguistic-diversity-academic-writing]]**, YZ’nin akademik bağlamlarda dilsel çeşitliliği nasıl etkilediğini inceler.
 Söylem düzeyinde bir sistem, metni puanlamak yerine kusuru adlandırarak bir adım öteye gider: cümle çifti ilişki sınıflandırması tutarlılık kırılmalarını — mantıksal atlamalar, eksik bağlaçlar, belirsiz göndermeler — yerelleştirdi ve ürettiği geri bildirimin öğretmen tarafından benimsenmesi %71,2–%88,4 arasında oldu ([[bert-discourse-english-teaching-2026|Wang ve ark., 2026]]).

**Dil öğrenenleri için [[accessibility]]**, [[inclusive-learning]] ile bağlantılıdır: **[[dyslexlens-dyslexic-learners-ai|DysLexLens]]** dislektik öğrenenlerin okuryazarlık desteği için YZ’yi nasıl kullandığını analiz etti ve **[[ai-tools-arab-english-classrooms]]** Arapça–İngilizce sınıf bağlamlarında YZ araçlarını araştırdı. Bu çalışmalar dil öğrenimini [[equity-in-ai-education]] ve [[special-education]] ile bağlar.

**YZ destekli dil öğreniminde motivasyonel mekanizmalar**, öğrenenlerin neden dil pratiği için YZ’yle etkileşimde bulunduğunu inceler. **[[wang-goal-setting-ai-engagement-2026|Wang ve Wang (2026)]]**, hedef belirleme kuramını 758 Çinli üniversite İngilizce öğrencisiyle kullanarak **öğretmen desteğinin**, öğrencilerin yeterlilik yaklaşımı ve performans yaklaşımı hedefleri (kaçınma hedefleri değil) üzerinden YZ destekli öğrenmedeki katılımı artırdığını gösterdi — öğrenenlerin YZ destekli dil pratiğiyle etkileşimini sürdürüp sürdürmediğini yalnızca YZ aracı değil, pedagojik ve toplumsal bağlamın belirlediğine dair kanıt. Bu durum dil öğrenimini [[motivation]] ve [[student-engagement]] ile bağlar.

[[chatgpt-english-language-learning-malaysia|Annamalai ve ark. (2026)]] nitel bir öz-belirleme örneği ekler: 25 Malezyalı lisans öğrencisiyle yapılan görüşmelerde ChatGPT yetkinlik ve özerkliği destekledi ve konuşma tabanlı duyarlılığı dinlenmiş olma duygusu üretti — ilişkililik kısmen araçla karşılanan bir “YZ aracılı motivasyonel ekoloji”, oysa yanlış referanslar doğrulama ve insan tamamlayıcılık gerektirdi.

Tasarım niteliği, kullanım sıklığı değil, öğretmen tarafından oluşturulmuş bir özel ders asistanındaki motivasyonel etkiyi taşıdı: kursa özgü bir Japonca GPT kullanan 74 lisans öğrencisi üzerinde ders dışı kullanım sıklığı özerklik, yetkinlik veya ilişkililikle anlamlı korelasyon göstermedi, oysa öğrenenler özel ders asistanını öz-yönelimli öğrenme için yüksek puanladı (M = 4,39) ve duygusal güvenliğe atıfta bulundu (%60,8) ([[instructor-designed-ai-tutors-foreign-language-sdt-2026|Lee ve Kwon, 2026]]).

**İlk kademede GenAI destekli yazma.** [[genai-writing-program-primary-l2-motivation-engagement|Lu ve ark. (2026)]], Doğu Çin’deki 301 Grade 5 ve 6 öğrencisiyle dokuz haftalık bir görüş yazma programı yürüttü; program veya geleneksel öğretime sekiz bütün sınıf rastgele atandı. Program öğrenenlerin ideal L2 yazma benliğini (ayarlanmış ortalama fark 0,20) ve akademik sıçrayabilirliğini (0,17) artırdı, davranışsal ve duygusal katılımı yükseltti, ancak büyüme zihniyetini, bilişsel veya üst bilişsel katılımı ya da rubrikle puanlanan örgütlenmeyi değiştirmedi — yazma boyutları arasında yalnızca dil kullanımı iyileşti. Tasarımın iki özelliği dil öğretmenleri için önemlidir: istek metni yazma açıkça öğretildi, belirli yazma hedeflerine bağlı kategorize bir istek metni bankası aracılığıyla; GenAI geri bildirimi öğretmen geri bildirimiyle karşılaştırma ve yinelenen revizyonla birlikte kullanıldı. Öğrenenlerin bildirdiği yazarlık kazanımları, aracın kendisinden çok bu öğretim yapısına dayandı ve yazarlar azalan [[metacognition|öz izleme]] ile kısayola yönelik stratejileri süregelen riskler olarak adlandırır.

## Dil öğretmenleri için sonuçlar

- **Gelişmekte olan [[ai-technologies|teknolojiler]] küçükten orta düzeye, düzeye bağlı kazanımlar sağlar.** [[liu-emerging-tech-tefl-review-2026|33 TEFL çalışmasının meta-analizi]] (N = 3.181), eğitim düzeyiyle birlikte yükselen (ilkokul 0,29, ortaokul 0,35, yükseköğretim 0,44) Hedges’ g = 0,38 genel etkisi bulur; VR/AR en büyük etkileri üretir ve üretken beceriler (konuşma, yazma) alıcı becerilerden daha fazla kazanım sağlar — beklentileri gerçekçi tutarken özellikle yükseköğretim düzeyinde gelişmekte olan teknolojinin kullanımını destekler.
- **Bir sistematik derleme, ilkokul YZ dil eğitiminin seyrek olduğu yerleri haritalar.** 31 çalışma (2013–2025) üzerinde, ilkokul dil sınıflarındaki çalışmalar konuşma, okuryazarlık ve kelime bilgisinde toplanırken dilbilgisi, dinleme anlama ve işaret dili hemen hemen hiç incelenmedi; tasarımların çoğu sınıf düzeyine özgü belirlemeden yoksundu ([[ai-elementary-language-education-review-2026|Hamasha ve ark., 2026]]).
- **İletişimsel pratiği genişletmek için YZ kullanın, yerine geçmeyin.** [[ai-interlocutor-l2-spoken-dialogue|YZ muhatapleri]] ve [[tact-pedagogically-adaptive-esl-tutoring|uyarlanabilir ESL özel ders asistanları]] etkileşimsel pratiği ölçekte genişletir — akıcılık ve benimsemenin gerçek konuşmaya aktarılması için bunları insan etkileşimiyle eşleştirin.


- **YZ çıktısını dilbilgisel değil, edimsel hata açısından da izleyin.** Beş çevrimiçi dil öğretim yönteminde çalışan öğretmenler, YZ çıktısının dilbilgisel olarak doğru ama ton, resmiyet ya da kültür açısından yanlış olduğu edimsel körlüğe dikkat çekti ([[ai-ethics-tensions-online-pedagogy-2026|Baoyi ve Khan (2026)]]).
- **ASR destekli konuşmada nicelik yerine geri bildirim niteliğini önceleyin.** [[asr-english-speaking-feedback-metacognition-2026|Chen ve ark. (2026)]], doğru hata düzeltme ve yapılandırılmış yansıtma görevlerinin üniversite İngilizce konuşmasında [[feedback]] içselleştirmesini ve yansıtıcı davranışı iyileştirdiğini, oysa sık ASR kullanımı ve tanıma doğruluğunun motivasyonu ya da yansıtmayı yalnızca kısmi desteklediğini bulur — teknik hassasiyet tek başına daha derin bilişsel katılımı yürütmez ve dil yeterliliği kazanımları yönlendirir (daha güçlü öğrenenler geri bildirimi daha etkin biçimde içselleştirir). Bu durum pedagojik olarak sağlam geri bildirimi (basit hata işaretleri yerine örneğin artikülasyon açıklamaları), iskeleli yansıtmayı ve yeterliliğe göre farklılaştırılmış desteği savunur.

- **Düzeltmeden önce ipucu verin.** Öğrenenlerin doğrudan düzeltmeler almak yerine yönlendirilmiş ipuçlarından düzeltmeleri çıkardığı “düzeltmeden önce ipucu” ChatGPT görevi, bilişsel yükü azalttı ve kişiselleştirilmiş revizyonu destekledi — ama fayda başta yeterli bilgiye sahip olan öğrenenler için ağırlıklı olarak geçerli oldu (58 öğrenci, CEFR A1–B1) ([[lukesova-clue-before-correction-2026|Lukešová ve Jennings (2026)]]).
- **Telaffuz geri bildirimini, kapatılacak farkı yerelleştirecek biçimde sunun.** Profy, büyük ölçüde etiketlenmemiş konuşmadan yeterlilik öğrenir ve bir öğrenenin ana dili konuşan dağılımlarından nerede saptığını gösterir; öncesi/sonrası anlaşılabilirlik güven aralıkları, tersine—elde edilen taklit taban çizgisinin aksine çakışmadı — taklit pratiğinin uzman derecelendiriciler olmadan desteklenebileceğine dair kanıt ([[ai-guided-learning-audiovideo-2026|Kawamura (2026)]]).
- **Öğrenenlerin YZ destekli çalışmaya psikolojik uyumunu destekleyin.** [[wu-psychological-adaptation-ai-japanese-learning-2026|Wu (2026)]], Japonca öğrenenlerini bir dönem boyunca izler ve onların teknolojik stres ile dayanıklılık dengesiyle yönlendirilen uyumsuz, ılımlı ve olumlu uyum profillerine ayrıldığını bulur; öğrenenlerin çoğu kademeli biçimde olumlu uyuma doğru kayar ve daha yüksek [[self-efficacy]] ile daha düşük tükenmişlik bildirir — teknolojik gerginliği yöneten, yalnızca araç erişiminden ibaret olmayan YZ aracılı dil pratiği tasarlama sinyali.
- **Öğrenenlere karşı puanlama ve geri bildirim yanlılığına karşı uyanık olun.** [[ai-scoring-language-bias-physics|YZ puanlaması]] ana dili dışı örüntüleri cezalandırabilir; [[genai-linguistic-diversity-academic-writing|dilsel çeşitlilik araştırmaları]] YZ’nin standart İngilizce’yi ayrıcalıklı kıldığı konusunda uyarır — öz-referanslı ya da insan denetimli değerlendirme kullanın.
- **Öğrenenlerin tüm yelpazesini destekleyin.** [[dyslexlens-dyslexic-learners-ai|Disleksi ve erişilebilirlik çalışmaları]] ile [[culturally-relevant-pedagogy|kültürel olarak duyarlı]] tasarım ([[ai-tools-arab-english-classrooms|Arapça–İngilizce bağlamlar]]), YZ’nin çeşitli öğrenen ihtiyaçlarına uyarlanması, evrensel olduğunun varsayılmaması gerektiğini gösterir.

- **Altyapı, yalnızca puanlama değil, dilleri dışlar.** Bengalce, küresel web içeriğinin %0,5’in altında bir paya sahiptir; İngilizce’den Bengalce’ye eğitim belirteci açığı 67:1, kırsal–kentsel bağlantı boşluğu ise %36,5’e %71,4 internet erişimidir; bu nedenle yerel dille, çevrimdışı öncelikli tasarım erişim için bir kolaylık değil, ön koşuldur ([[structural-silence-underrepresented-language-ai-2026|Roy ve Roy (2026)]]).
- **Eğitimciler GenAI’yi hazırlık işi için değerli bulur, canlı sınıf kullanımı için değil.** [[li-language-educators-genai-review-2026|23 çalışmanın PRISMA sistematik derlemesi]] (Li ve ark. 2026), dil eğitimcilerinin GenAI’yi en çok perde arkası hazırlık için değerli bulduğunu — [[curriculum-design|ders planlama]], materyal oluşturma ve yazma desteği/geri bildirim — oysa doğrudan, sınıfa dönük uygulamaya karşı isteksiz kaldığını bulur; bu, YZ’yi ilke olarak onaylamak ile canlı kullanmak arasındaki kuram–uygulama boşluğunu yansıtır. Benimseme; mesleki kimlik, pedagojik, teknik, [[governance|kurumsal]] ve [[academic-integrity]] özellikleriyle şekillenir; eğitimciler benimsememekten kapsamlı entegrasyona uzanan bir yelpazede yer alır, tutumlar maruziyetle birlikte ilk güvensizlikten özgüvenli, seçici kullanıma doğru evrimleşme eğilimindedir.
- **Dil öğretmenlerinin [[ai-literacy|YZ okuryazarlığını]] hazırlayın.** [[governing-unseen-ai-literacy-language-teachers-2026|Sistematik derlemeler]], dil öğretmenleri arasında YZ okuryazarlığının kilit bir boşluk olduğunu bulur — araç benimsemenin yanında öğretmen [[educational-development|mesleki gelişimine]] yatırım yapın. YZ dil eğitimini yeniden şekillendirdikçe, YZ okuryazarlığı öğretmenlerin teknolojiyle eleştirel biçimde etkileşimde bulunması için de hayatîdir: Öğretmenlerin YZ Okuryazarlığı Ölçeği (TAILS), dil [[teacher-education|öğretmen eğitimi]] için geliştirildi ve altı boyutlu ED-AI çerçevesini (bilgi, değerlendirme, işbirliği, bağlamsallaştırma, [[agency|özerklik]], [[ethics]]) işlevsel kılarak hizmet öncesi İngilizce dil öğretmenleriyle doğrulandı.

- **Yüksek baskılı iki dilli bir görevde dört etkileşim profili.** [[student-ai-interaction-consecutive-interpreting-2026|Kuang, Li ve Weng (2026)]], 22 çevirmen adayıyla göz izleme, kalem kaydı ve ses kaydı kullanarak öğrencilerin dikkatini YZ çıktısı ile kendi not tutmaları arasında dört ayrı biçimde böldüğünü gösterdi — Yoşun Etkileşimliler, Hızlı Tarayıcılar, Gelenekselciler ve Sık Geçiş Yapanlar — ve aynı görevin anlama ile üretim aşamaları arasında aşama düzeyi gözlemlerin %58,3’ünün profil değiştirdiğini ortaya koydu. Yalnızca anlama aşaması örüntüleri ürün niteliğini öngördü ve YZ ağırlıklı en yüksek küme sunum akıcılığı ve hedef dil niteliğinde en düşük puanı aldı; bu durum öğrenenlere araçla çalışmanın tek bir yolunu reçete etmekten çok kendi stratejilerini betimlemeyi ve üzerinde yansıtmayı öğretme gereğini ortaya koyar.
- **Dört becerilik döngünün tamamını maliyet ve bağlantı çevresinde yönlendirin.** [[llmersion-local-first-language-learning-2026|Guo ve ark. (2026)]], LLMersion-1’i yayımlar; öğrenenin kendi belgesi üzerinde dinleme, okuma, konuşma ve yazmayı tüketici donanımında çalıştıran, yerel öncelikli bir prototip — 1B özel ders asistanı 808 MB’a kuantize olur ve tüm yerleşik yığın 4 GB’ın altında kalır — ve beş yıllık günlük pratiğin maliyetini yaklaşık \\$18 elektriğe karşılık bulut aboneliğinde \\$1,200 olarak fiyatlar. Hiçbir öğrenen çıktısı bildirilmez ve telaffuz geri bildirimi yalnızca parçalara ayrılmış biçimdedir.

## Bağlı kavramlar

- [[eportfolio]]
- [[writing-education]]
- [[ai-literacy]]
- [[equity-in-ai-education]]
- [[assessment-validity]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[special-education]]
- [[intelligent-tutoring]]
- [[generative-ai]]
- [[student-experience]]
- [[higher-ed]]
- [[k-12]]
- [[discipline-specific-aied]]
- [[english-education]]
- [[speech-and-voice-technologies]]

## Bağlı makaleler

- [[student-ai-interaction-consecutive-interpreting-2026]] — Bilgisayar Destekli Ardışık Çevirmenlikte Öğrenci–YZ Etkileşimi
- [[wu-psychological-adaptation-ai-japanese-learning-2026]] — YZ Destekli Japonca Dil Öğreniminde Psikolojik Uyumun Profilleri ve Geçişleri
- [[llm-agents-5e-esl-grammar-2026]] — ESL dilbilgisi edinimi için 5E çerçevesiyle LLM ajanları (Yang, Weng ve Yang 2026)
- [[gpt-item-generation-l2-listening-2026]] — L2 dinleme madde üretimi için GPT’yi istek metniyle mi ince ayarla mı kullanmak (Aryadoust ve Wong 2026)
- [[bert-discourse-english-teaching-2026]] — İngilizce öğretimi için BERT söylem sınıflandırması
- [[alharbi-ethical-genai-eap-2026]]
- [[sutama-chatgpt-eportfolio-speaking-2026]]
- [[ni-lam-multiliteracies-ai-portfolio-2026]]
- [[llms-text-linguistics-teaching-2026]] — Metin dilbilgisi öğretiminde LLM’ler
- [[ai-vs-human-assessment-efl-tpck-2026]] — EFL’de YZ üretimi ve insan geliştirmeli değerlendirme görevleri
- [[governing-unseen-ai-literacy-language-teachers-2026]] — Görülmeyeni yönetmek: dil öğretmenleri arasında YZ okuryazarlığı
- [[ai-guided-learning-audiovideo-2026]]
- [[ai-interlocutor-l2-spoken-dialogue]]
- [[robot-assisted-language-learning-meta-analysis-2026]] — YZ ile güçlendirilmiş somut robot destekli dil öğreniminin meta-analizi
- [[self-referential-l2-writing-llm-assessment]]
- [[ai-scoring-language-bias-physics]]
- [[genai-linguistic-diversity-academic-writing]]
- [[dyslexlens-dyslexic-learners-ai]]
- [[tact-pedagogically-adaptive-esl-tutoring]]
- [[ai-tools-arab-english-classrooms]]
- [[structural-silence-underrepresented-language-ai-2026]]
- [[instructor-designed-ai-tutors-foreign-language-sdt-2026]] — Üniversite Yabancı Dil Eğitiminde Öğretmen Tarafından Tasarlanan YZ Özel Ders Asistanları: Öz-Belirleme Kuramına Dayalı Öğrenen Motivasyonu ve Yansıtıcı Öğrenme Deneyiminin Karma Yöntemli İncelemesi
- [[lukesova-clue-before-correction-2026]] — Düzeltmeden Önce İpucu: Özerk Dil Öğrenimi için ChatGPT
- [[chatgpt-english-language-learning-malaysia]] — İngilizce dil öğreniminde öğrencilerin ChatGPT deneyimleri
- [[tts-dialogue-lessons-learner-characteristics-2026]] — Öğrenen özellikleri × TTS diyalog biçimi etkileşimleri
- [[liu-emerging-tech-tefl-review-2026]] — EFL için gelişmekte olan teknolojinin meta-analizi
- [[wang-goal-setting-ai-engagement-2026]] — Hedef belirleme kuramı: öğretmen desteği, başarı hedefleri ve YZ destekli İngilizce öğreniminde katılım (758 Çinli öğrenci)
- [[li-language-educators-genai-review-2026]] — Dil eğitimcilerinin GenAI ile uygulamaları ve gelişimi
- [[asr-english-speaking-feedback-metacognition-2026]] — Üniversite İngilizce konuşmasında ASR teknolojisi: geri bildirim içselleştirmesi ve üst bilişsel stratejiler
- [[genai-writing-program-primary-l2-motivation-engagement]] — İlk kademe L2 öğrenenler için GenAI destekli bir yazma programı (Lu ve ark. 2026)

- [[llmersion-local-first-language-learning-2026]] — LLMersion: Eğitim Eşitliğine Yönelik Düşük Maliyetli Ev Dil Öğrenimi için Yerel Öncelikli Bir YZ Ajan Çerçevesi

- [[ai-ethics-tensions-online-pedagogy-2026]] — Edimsel körlük: YZ dil çıktısı dilbilgisel olarak doğru ama kültürel olarak yanlış olabilir
