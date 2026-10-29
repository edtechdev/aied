---
title: Açık Kaynak
created: "2026-10-14T22:00:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning]
foundations: [agentic-ai, ai-education, curriculum-design]
technology: [adaptive-learning, generative-ai, intelligent-tutoring, llm, edtech-platform, open-source]
assessment: [automated-assessment]
ethics: [privacy]
audience: [software developers, instructors, administrators, researchers]
discipline: [stem education, writing education]
confidence: medium
connected_resources: [claw-ed, education-agent-skills, lesson-md, liascript, onmicro-ai, vibes-diy]
methods: [benchmark]
translation_of: concepts/open-source
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

> **Açık Kaynak** — [[ai-education|eğitimde yapay zeka]]’da açık biçimde lisanslanmış *modellerin, kodun, verinin ve içeriğin* kullanımı. Açıklık, satıcıya bağımlı kalmanın ve [[privacy|veri maruziyetinin]] karşısında bilgi tabanının başlıca karşı ağırlığıdır: açık ağırlıklı modeller FERPA, GDPR ve AB YZ Yasası yükümlülüklerini karşılamak amacıyla yerleşke donanımında çalışabilir, açık biçimde lisanslanmış derlemler yayıncı izni olmadan dizinlenebilir ve ince ayarlanabilir ve açık kıyaslama ölçütü ile veri kümesi yayımları, [[research-methods-aied|araştırmayı]] yeniden üretilebilir kılar. Yükler de aynı ölçüde gerçektir: altyapı ve [[pedagogical-safety|güvenlik]] güvencesi, hibeyi aşan süren bakım ve açıklığın tek başına sağlamadığı kalite.

## Dikkate Alınması Gereken Sorular

- "Açık kaynak" sıklıkla "ücretsiz ve kolay" biçiminde duyulur. Aşağıdaki dört katmandan — modeller, kod, veri ya da içerik — hangisi kurumunuzun benimsemede en yüksek maliyetine yol açar ve neden?
- Açık ağırlıklar yerel dağıtımı olanaklı kılar; ancak birinin hâlâ sistemi barındırması, yamalaması ve değerlendirmesi gerekir. İlk proje sona erdikten sonra bu iş kimin sorumluluğunda olmalı ve maliyeti kim ödemeli?
- Buradaki bir çalışma, 32B’lik bir açık modelin pedagojik bilgi açısından çok daha büyük bir tescilli sistemden daha yüksek puan aldığını bulurken; başka bir çalışma bilimsel görselleştirme okuryazarlığında test edilen her açık modelin insan taban çizgisinin altında kaldığını bulmuştur. Kararınız için hangi kıyaslama ölçütünün doğru olduğuna nasıl karar verirsiniz?
- Bir okulun kendi ders materyalleri üzerinde yerinde (on-premise) bir yardımcı çalıştırmasını olanaklı kılan şey, tek bir açık lisanslı derlemdir. Bununla birlikte gelen yükümlülükler nelerdir — özgün yazarlara, verileri dizinlenen öğrencilere ve lisansın kendisine?
- Eğer [[generative-ai|üretici YZ]] bir kursu yarım saatten kısa sürede birkaç dolara üretebiliyorsa, açık eğitim kaynakları için kalan gerekçe nedir — maliyet, lisanslama özgürlüğü, kalite güvencesi ya da başka bir şey?
- Kurumlar açık kaynak benimsemesini bir tedarik kararı, bir altyapı kararı ya da bir pedagojik karar olarak mı ele almalıdır? Yalnızca bunlardan biri olarak ele alınırsa ne bozulur?

## Giriş

Gevşek biçimde ifade edildiğinde, YZ eğitiminde "açık"; dört türlü nesnenin inceleme, yeniden kullanım ve değişiklik için erişilebilir olduğu anlamına gelir: **model ağırlıkları**, **kaynak kodu**, **veri ve değerlendirme araçları** ve **eğitim içeriği**. Bilgi tabanının makaleleri bu katmanlar arasında eşit olmayan biçimde kümelenir ve ortaya çıkan tablo slogandan daha yararlıdır: açıklık belirli şeyler satın alır — yerel denetim, denetlenebilirlik, yeniden üretilebilirlik ve yasal açıklık — ve belirli şeylere mal olur — altyapı, uzmanlık, bakım ve satıcıdan kuruma geçen bir kalite güvencesi yükü.

### Açık modeller ve açık ağırlıklar

Açık ağırlıklar, en çok öğrenci verisinin yerleşkeden çıkamayacağı yerde önemlidir. [[lata-ferpa-compliant-local-llm-autograder|LaTA]], öğretmenler tarafından yazılmış derecelendirme ölçekleri ve referans çözümler üzerine kurulu, teslim başına sıfır marjinal maliyetli, üst düzey [[stem-education|STEM]] dersleri için tak-çalıştır türünden bir FERPA uyumlu yerel-[[llm]] otomatik notlandırıcısıdır. Bielefeld Üniversitesi’ndeki bir Python [[intelligent-tutoring|öğretmen sistemi]] olan [[programming-its|SCRIPT]], bilerek **ticari LLM API’lerinden kaçınır** ve GDPR ile AB YZ Yasası’nı (eğitimde YZ kullanımının bir kısmını yüksek riskli sınıflandıran) karşılamak amacıyla açık ağırlıklı bir Llama-70B modelini kendisi barındırır; IP kayıtlarını öğretmen sisteminden ayırır, takma ad kullanıcı adları kullanır ve tuş vuruşlarını yalnızca açık rıza ile kaydeder — yazarların daha düşük çevresel etki ve daha iyi yeniden üretilebilirlikle de ödüllendirdiği bir seçim.

Kalite artık açıklığın otomatik bedeli değildir. [[singh-eduqwen-pedagogical-rl-2026|EduQwen]], bir açık model ailesine [[reinforcement-learning|pekiştirmeli öğrenme]] (DAPO) ve denetimli ince ayar uygular; 440 zor olumsuz örnek çıkarır, 40.000 sentetik yanıt üretip bunları zorluk sırasına göre 1.050 örneğe indirger ve pedagoji kıyaslama ölçütünde — Gemini-3 Pro’nun %90,55’inin üzerinde — **%96,52**’ye ulaşır; bu da 32B yoğun parametrede olur. [[aiawe-automated-writing-evaluation|AiAWE]] [[automated-assessment|otomatik yazma değerlendirmesi]] için benzer sonuçlara ulaşır: LoRA ile uyarlanmış açık ağırlıklı bir Gemma-3-27B-it, 480 TOEFL kompozisyonu üzerinde LLaMA-3.3-70B’i ve ince ayarlanmış bir GPT-3.5 taban çizgisini geride bırakır ve tüketici düzeyinde bir sunucuda çalışır; parametre sayısının LoRA uyarlaması altında aşağı yönlü performansın *güvenilir bir yordayıcısı olmadığı* dikkat çekici yan bulgusuyla. Karşı kanıt da eşit yer hak eder: altı MLLM’yi (üç kapalı, üç açık) inceleyen [[mllm-scientific-visualization-literacy|bir kıyaslama ölçütü]], bilimsel [[visualization]] okuryazarlığında her açık kaynak modelin insan taban çizgisinin altında kaldığını, buna karşın Gemini’nin birkaç alt kümede insan ortalamasını aştığını bulmuştur. Açıklık, denetimin tavanını yükseltir, yeteneğinkini değil.

OmniEdu yalnızca ağırlıkları değil, tüm hattı yayımlar: 69.999 örnekli bir karışım üzerinde yetenek dengesine dayalı denetim, açık bir 4B/9B/27B K–12 ailesinin her ölçeğini yükseltmiştir — ayarlanmış 4B model, tabanına kıyasla MathTutorBench iskeleleme kazanma oranında 55 puan kazanmıştır — buna karşın bilgi durumu teşhisi en zayıf yeteneği olarak kalmıştır, yüzde 54,04’te ([[omniedu-open-educational-foundation-models-2026|Liang ve diğerleri, 2026]]).

### Açık araçlar, öğretmenler ve araştırma altyapısı

Açık kodun en açık vakası yeniden üretilebilirliktir. [[oatutor-open-source-adaptive-tutor-2023|OATutor]] — ITS ilkeleri üzerine kurulu ilk tamamen açık uyarlanabilir öğretmen sistemi — OpenStax cebir ders kitaplarından alınmış **Creative Commons (CC BY) içerik kütüphanesi** ile bir **MIT lisanslı kod tabanını**, artı [[knowledge-tracing|bilgi izleme]], A/B testi ve LTI desteğini eşleştirir; onun açık tasarım hedefi, bir araştırmacının bir deney yürütebilmesi ve ardından tüm uçtan uca çerçeveyi, içeriği ve platformu bir depo bağlantısı olarak yayımlayabilmesidir. [[stanbkt-bayesian-knowledge-tracing|StanBKT]] aynı savı yöntem katmanında sunar; beklenti-ençoklama nokta tahminlerinin yerine tam Bayesyen çıkarımı (HMC, varyasyonel çıkarım, Pathfinder, optimizasyon) koyar ve uyarlanabilir müdahalelerin A/B karşılaştırmalarının bağlı olduğu belirsizliği açığa çıkaran açık bir Python paketinde sunar. [[deeptutor]], iz-ormanı öğrenen belleciyle eksiksiz bir [[agentic-ai|ajan temelli]] öğretmen çerçevesi yayımlar — Apache 2.0 ve 2026 sonuna kadar, makalesinin kıyasladığı hatların ötesinde tam bir öğrenme çalışma alanı — ve [[mooc-to-maic|MAIC]]’nin sınıf üreteci OpenMAIC, onu değerlendiren çalışmayla birlikte MIT altında dağıtılır; böylece bir kurs yalnızca okunmakla kalmaz, üretilip kendi barındırılarak incelenebilir; [[vismatic-secure-sandbox-cs-education|VISMATIC]], sürece yönelik izleme için kapsayıcılı korumalı alanını yayımlar; böylece diğer kurumlar bütünlük modelini satıcının versiyonu yerine benimseyebilir. Açık kod aynı zamanda şeffaflık yükünü de taşır: [[kar-mathbuddy-affective-math-tutoring-2025|MathBuddy]]’nin duygu farkında öğretmenlik istek metinlerine ilişkin betikleri, inceleme ve ileri [[llm-training-and-fine-tuning|pedagojik eğitim]] çalışmaları için yayımlanır. Açık altyapı, eğitim ajanlarının ne yapması gerektiğine ilişkin referans noktasını belirler: bilgi tabanının [[agentic-ai-education-scoping-review|474 ajan temelli YZ çalışmasının kapsam derlemesi]], hızla büyüyen bir açık kaynak ajan projesini "öncül ajan paradigması" kıyaslama ölçütü olarak kullanır ve eğitim sistemlerinin hâlâ yönetilen araç orkestrasyonundan, sürekli bellekten, uzun ufuklu planlamadan ve denetlenebilir eylemden yoksun olduğunu bulur.

### Açık kıyaslama ölçütleri, veri kümeleri ve yöntem şeffaflığı

Buradaki birkaç katkı, sistemlerden çok açık *değerlendirme altyapısıdır*. [[cdpk-pedagogy-benchmark-llms|Pedagoji Kıyaslama Ölçütü]] (CDPK + SEND, gerçek Şili öğretmen sınav maddelerinden kurulmuş) 97 modeli kapsar: açık ağırlıklı DeepSeek R1, çoğunlukla kapalı akıl yürütme modellerinden oluşan ilk 10’a karşı %86,65’e ulaşmıştır ve maliyet–doğruluk ön sınırı, Nisan 2024 ile Haziran 2025 arasında giriş belirteci başına \\$0.10/M fiyatta ~%50’den ~%82’ye yükselmiştir — 3,5¢’lik açık Qwen-3 8B, 400 katından fazla düşük maliyetle Nisan 2024’ün en iyi kapalı modeline neredeyse eşit olmuştur. Performans, kabaca 8B parametrenin altında keskin biçimde düşer; bu da yerleşke dağıtımları için pratik bir boyutlandırma kısıtıdır. [[astra-multi-agent-tutoring-benchmark-2026|ASTRA]], sosyal olarak zeki çok ajanlı öğretmenliğin iz temelli değerlendirmesi için bir veri kümesi, şema ve prototip yayımlar (540 katılımcı, 360 oturum, 1.440 görev bölümü). [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]], açık verinin kültürel vakanı gösterir: Veda ve klasik kaynaklardan çekilmiş, CBSE [[curriculum-design|müfredatı]] ile hizalanmış, yedi dilde ve 41 pedagojik teknikte 24.795 istek–yanıt çifti; bunlar kompakt bir 7B modelin çok daha büyük genel amaçlı bir referans modele yaklaşmasını olanaklı kılmıştır (ortanca hâkim puanı 6,39’a karşı 6,54), dağıtım maliyetinin küçük bir bölümünde. Öğrenci yazarlı [[benchmark|kıyaslama ölçütleri]] açıklığa giden başka bir yoldur: [[yu-academiclaw-student-challenges-ai-agents-2026|AcademiClaw]], 230 öğrenci gönderimi adayı arasından (25’ten fazla mesleki alanı kapsayan, 16’sı CUDA GPU gerektiren, yalıtılmış Docker korumalı alanlarında çalıştırılan) 80 uzun ufuklu akademik görev derler ve açık bir ajan ekosistemini akademik düzeyde değerlendirmeye taşır. [[aied-carbon-footprint-reporting|Eimler ve diğerleri (2026)]], açıklığın aynı zamanda bir [[sustainability|çevresel]] yükümlülük olduğunu savunur: tüm AIED 2025 makalelerini inceleyerek bir "açıklama yapılmadan LLM benimsemesi" örüntüsü bulmuş ve parametre sayıları bilinmediğinde bile hesaplama giderini tahmin eden yazılım araçları artı bir formülden oluşan açık kaynaklı bir ölçüm yöntemiyle yanıt vermişlerdir.

### Açık eğitim kaynakları ve açık içerik

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Shen ve diğerleri (2026)]], **açık eğitim kaynaklarının geçişte bir atıftan çok merkezi nesne** olduğu bilgi tabanının tek makalesidir. Tüketici düzeyinde donanımda (12 GB VRAM’lı bir RTX 3060) 82 OER belgesinden, [[cs-education|bilgisayar bilimi eğitimi]] için yerinde bir YZ bilgi tabanı yardımcısı kurarlar; yapılandırılmış çıkarımı, [[rag|getiri ile güçlendirilmiş üretimi]] ve NF4 4-bit nicemleme farkında ince ayarı birleştirir. İnce ayar, getiri ötesinde gerçek bir değer eklemiştir (Qwen-7B %69,8, +3,2 pp, p = 0,031; DeepSeek-MoE %78,6, +12,0 pp, p < 0,001, çok atlamalı akıl yürütmede %82,3 dâhil); nicemleme farkında ayar, 4-bit doğruluk boşluğunu 1,7 ve 1,2 pp’de tutarken VRAM’i ~%38 azaltmış ve enerjiyi sorgu başına 1,8 mWh’a indirmiştir (taban çizgisinin %43,8 altında); ve nicemlemenin yükselttiği [[hallucination-risk|halüsinasyon]], ince ayarla kısmen geri alınmıştır (DeepSeek-MoE %10,4 → %8,1), getirilen OER parçalarına karşı iki aşamalı bir NLI yordamıyla ölçülmüştür. Analitik nokta genellenebilir: açık biçimde lisanslanmış bir derlem, yayıncı izni olmadan dizinlenebilir, uyarlanabilir ve sunulabilir; ve bir yardımcıyı getirilen OER’e dayandırmak, denetlenebilir bir kaynak izi verir — tescilli bir ders kitabı derleminin tam olarak sunamayacağı şey budur.

İçeriğin ve modellerin açıklığı başka yerlerde de birbirini tamamlar. OATutor, CC BY OpenStax ders kitaplarını kodu MIT lisanslı bir sistemde derler; böylece kodun ve içeriğin lisans koşulları tasarımla uyumlu tutulmak zorundadır. [[egai-power-systems-education|Güç sistemleri YZ için açık, çalıştırılabilir bir modül kütüphanesi]], yerelde ya da Colab’da çalışan Jupyter not defterleriyle giriş engelini düşürür ve bir IEEE çevrim içi kursu yoluyla sunulur. Proje temelli bir [[engineering-education|makine mühendisliği]] müfredatı, diğer kurumların benimseyebilmesi amacıyla ders programını, verisini ve kodunu açık erişimli depolarda yayımlar ([[mechanical-engineering-ai-curriculum-2026]]). OER’nin komşusunda, açık *kurs* sunumu ekonominin en hızlla değiştiği yerdir: MAIC, MOOC üretiminin LLM güdümlü çok ajanlı üretimle kurs başına kabaca \\$25.000 ve 60 saatten \\$2’nin altına ve 30 dakikaya çöktüğünü bildirir. İçerik üretimi neredeyse ücretsiz hale gelirse, OER savı üretim maliyetinden lisanslama özgürlüğüne, doğrulanabilirliğe ve kalite güvencesine kayar — bu da OER savunuculuğunun kurulduğu önermeden farklı bir önermedir.

### Faydalar ve yükler

- **Faydalar.** Yerel barındırma yoluyla veri egemenliği ve düzenleyici uyum ([[privacy]], [[regulation]]); maliyet denetimi; çünkü yerel çıkarımın sorgu başına ücreti yoktur ve açık modeller tescilli kaliteye fiyatın küçük bir bölümünde yaklaşır ([[singh-eduqwen-pedagogical-rl-2026]]); yeniden üretilebilirlik; çünkü çerçeve, istek metinleri, içerik ve veri makaleyle birlikte gönderilebilir ([[oatutor-open-source-adaptive-tutor-2023]], [[astra-multi-agent-tutoring-benchmark-2026]]); [[governance|kurumsal yönetişim]] altında denetlenebilirlik ve güvenlik incelemesi; ve belirli bir [[pedagogy]] ya da belirli bir topluluğun bilgi tabanı için ince ayar yapabilme ([[iks-instruct-dataset-indian-knowledge]]).
- **Yükler.** Yerel barındırma, birçok kurumun sahip olmadığı donanım ve uzmanlık gerektirir; kalite ve [[pedagogical-safety|güvenlik]] kutudan çıktığı hâlde garanti edilmez — açık modeller belirli okuryazarlıklarda insan taban çizgisinin gerisinde kalabilir ([[mllm-scientific-visualization-literacy]]) ve nicemleme, hafifletilmedikçe halüsinasyon oranlarını yükseltir ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]); birinin sistemi yayımdan sonra sürdürmesi gerekir ([[programming-its]], küçük bir doktora öğrencisi ekibini, devam eden güvenlik maruziyetini ve önemli bir uyum yükünü belgeler); ve açık bir lisans bir izindir, çalışan bir ürün değildir — yayımlanmış bir sistemi kullanılabilir kılan bakım, onu kuran [[educational-technology-developers]]’a düşer ve hibeyle bitince bir kurumun ne miras aldığı — çatallanabilir bir depo, sürdürülen bir ürün ya da hiçbiri — onların finansmanı ve teşvikleriyle belirlenir.

### Açıklığı uygulamaya geçirmek

- **Öğretmenler ve kurumlar için:** bir sistemi benimsemeden önce kodun yanı sıra *içeriğin* lisansını da denetleyin — CC BY ders kitapları üzerine kurulu MIT kodu yeniden kullanılabilir; ancak izin verici bir lisans, öğretmen yollarının, madde havuzlarının ya da çevirilerin var olduğunu garanti etmez. Öğrenci verisi hukuken yerleşkeden çıkamadığında açık modelleri yeğleyin ([[lata-ferpa-compliant-local-llm-autograder]], [[programming-its]]), ancak genel liderlik tablolarına güvenmek yerine modeli *sizin* göreviniz üzerinde kıyaslayın ([[cdpk-pedagogy-benchmark-llms]]). Pilot çalışmadan sonra sistemi çalıştırıp değerlendirecek birine bütçe ayırın.
- **Geliştiriciler ve araştırmacılar için:** her şeyi yayımlayın — OATutor’un uçtan uca yayımı (kod, içerik, deney düzeneği), bu literatürün sürekli ödüllendirdiği yeniden üretilebilirlik standardıdır. Ağırlıkların yanında istek metinleri ve çıkarım şemalarını yayımlayın ([[programming-its]], [[kar-mathbuddy-affective-math-tutoring-2025]]). Hesaplama ve karbonu raporlayın ([[aied-carbon-footprint-reporting]]). Yardımcıları açık lisanslı derlemlere dayandırın; böylece kaynak denetlenebilir ve uyarlama hukuka uygundur ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Hem doğruluk hem enerji önemliyse sade nicemleme yerine nicemleme farkında ince ayar kullanın ve kod ile içerik lisanslarını uyumlu tutun.

## Bağlı kavramlar

- [[intelligent-tutoring]]
- [[llm-training-and-fine-tuning]]
- [[adaptive-learning]]
- [[edtech-platform]]
- [[privacy]]
- [[regulation]]
- [[governance]]
- [[agentic-ai]]
- [[automated-assessment]]
- [[benchmark]]
- [[knowledge-tracing]]
- [[rag]]
- [[pedagogical-safety]]
- [[sustainability]]
- [[research-methods-aied]]
- [[writing-education]]
- [[academic-integrity]]
- [[educational-technology-developers]]

## Bağlı makaleler

- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — Tüketici donanımında yerinde OER YZ bilgi tabanı yardımcısı (Shen ve diğerleri 2026)
- [[oatutor-open-source-adaptive-tutor-2023]] — CC BY OpenStax içerik kütüphanesine sahip MIT lisanslı uyarlanabilir öğretmen (Pardos ve diğerleri 2023)
- [[singh-eduqwen-pedagogical-rl-2026]] — Çok daha büyük tescilli sistemleri geride bırakan açık 32B pedagojik model (Singh ve diğerleri 2026)
- [[lata-ferpa-compliant-local-llm-autograder]] — Tak-çalıştır türünden FERPA uyumlu yerel LLM otomatik notlandırıcısı
- [[programming-its]] — Bir Python ITS’inde GDPR/AB YZ Yasası uyumu için kendi barındırdığı açık ağırlıklı LLM
- [[aiawe-automated-writing-evaluation]] — Otomatik yazma değerlendirmesi için LoRA ile uyarlanmış açık ağırlıklı model
- [[stanbkt-bayesian-knowledge-tracing]] — Tam Bayesyen bilgi izleme için açık Python paketi
- [[deeptutor]] — Öğrenen belleçli tamamen açık kaynaklı ajan temelli öğretmen çerçevesi
- [[vismatic-secure-sandbox-cs-education]] — Sürece yönelik değerlendirme için açık kapsayıcılı korumalı alanı
- [[kar-mathbuddy-affective-math-tutoring-2025]] — Açık kod tabanlı duygu farkında matematik öğretmeni
- [[cdpk-pedagogy-benchmark-llms]] — 97 model boyunca açık pedagoji kıyaslama ölçütü ve maliyet–doğruluk ön sınırı
- [[astra-multi-agent-tutoring-benchmark-2026]] — İz temelli çok ajanlı öğretmenlik değerlendirmesi için açık veri kümesi ve prototip
- [[mllm-scientific-visualization-literacy]] — Görselleştirme okuryazarlığında insan taban çizgisinin altındaki açık modeller
- [[iks-instruct-dataset-indian-knowledge]] — Kültürel olarak temellendirilmiş öğretim için açık çok dilli veri kümesi
- [[aied-carbon-footprint-reporting]] — LLM çevresel maliyetini raporlamaya yönelik açık kaynaklı yöntem
- [[egai-power-systems-education]] — Mühendislik YZ için açık çalıştırılabilir modül kütüphanesi
- [[mechanical-engineering-ai-curriculum-2026]] — Kamuya açık müfredat, veri ve kod
- [[mooc-to-maic]] — LLM güdümlü kurs üretimi ve kurs üretimi ekonominin değişimi
- [[agentic-ai-education-scoping-review]]
- [[yu-academiclaw-student-challenges-ai-agents-2026]]
- [[omniedu-open-educational-foundation-models-2026]] — OmniEdu: Öğrenme ve Öğretim için Açık Temel Modeller
