---
title: "Toplayıcı Değerlendirme"
created: "2026-10-14T22:10:00-04:00"
type: concept
foundations: [academic-integrity]
assessment: [assessment, authentic-assessment, summative-assessment, educational-measurement]
level: [higher ed, k 12]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
translation_of: concepts/summative-assessment
source_updated: "2026-10-26T08:45:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Toplayıcı değerlendirme** — bir ünitenin, kursun veya programın sonunda bir öğrenenin ne öğrendiğini değerlendirmek ve sertifikalamak için kullanılan değerlendirme; öğretim sırasında öğrenmeyi destekleyen [[formative-assessment|formative assessment]] aksine. Toplayıcı değerlendirme tipik olarak not veren, ilerlemeyi kapılayan ve yeterliliği sertifikalayan yüksek getirili sınavlar biçimini alır — yazılı, sözlü, gözetimli veya kitapsız. YZ çağında toplayıcı değerlendirme, [[academic-integrity]] ve geçerlilik üzerine merkezi bir savaş alanına dönüştü: [[generative-ai|generative AI]], gözetimsiz veya evde yapılan görevlerde performansı şişirebilir; bu da toplayıcı biçimin seçimini — ve YZ ikamesine nasıl direndiğini — belirleyici bir tasarım kararı haline getirir.

## Dikkate Alınması Gereken Sorular

- Toplayıcı değerlendirme bir kursun sonunda öğrencinin ne öğrendiğini sertifikalarken, biçimlendirici değerlendirme süreç içinde öğrenmeyi destekler. Bu ikisi arasındaki çizginin nerede bulanıklaştığını gördünüz ve farklı işlevler görmelerinin neden önemli olabileceğini düşünüyorsunuz?
- Sayfa, üretici YZ'yı toplayıcı değerlendirmeyi aynı anda iki yönde yeniden şekillendiren olarak çerçeveliyor: YZ sınavları puanlar ve öğrenciler sınav temelli ölçümden kaçmak için YZ kullanır. Bu iki baskıdan hangisini geçerliliğe yönelik daha büyük tehdit olarak görüyorsunuz ve neden?
- YZ yanıtları üretebildiğinden gözetimsiz veya evde yapılan görevler geçerliliğini yitirirse, bu, değerlendirmelerin nasıl tasarlanması gerektiği konusunda ne ima eder — ve süreçte neyin feda edilebileceğini düşünüyorsunuz?
- Sayfada atıfta bulunulan [[research-methods-aied|Research]], LLM'lerin denemeleri insanlarla aynı biçimde puanlamadığını buluyor. Otomatik puanlama hızlı ve tutarlıysa ama farklı puanlarsa, bu bir [[bias-mitigation|fairness]] sorunu mu, bir fırsat mı, yoksa ikisi de mi?
- Arkasındaki iş YZ tarafından üretilmiş olabilirken, yüksek getirili bir sonucun (not, sertifika, kabul) ne anlama geldiğini düşünüyorsunuz? Gerçekten güvenebileceğiniz bir değerlendirmeyi nasıl tasarlardınız?

## Giriş

Toplayıcı değerlendirme, biçimlendirici değerlendirmeden temelde farklı bir işlev görür: sonraki adımlara rehberlik etmek yerine başarıyı ölçer ve sertifikalar. Ünite sonu testleri, final sınavları, standart ve yüksek getirili testler (örn. giriş sınavları), sözlü savunmalar ve kümülatif performans değerlendirmelerini içerir. Toplayıcı sonuçlar gerçek sonuçlar taşıdığından (notlar, ilerleme, sertifikalar, üniversite kabulü), YZ çağında özel baskılarla karşılaşırlar — hem otomatik puanlamanın *hedefleri* hem de öğrencilerin üretici YZ kullanarak oynamaya çalışabileceği *korumasız* ölçütler olarak.

## YZ çağında oyun: geçerlilik ve dürüstlük

Bilgi tabanının araştırması, üretici YZ'nin toplayıcı değerlendirme manzarasını iki yönde temelden nasıl yeniden şekillendirdiğini belgeler: YZ sınavları ölçekte **puanlamak** için kullanılır ve YZ öğrenciler tarafından kendi öğrenmelerinin sınav temelli ölçümünden **kaçmak** için kullanılabilir.

- **Puanlayıcı olarak YZ.** Toplayıcı değerlendirme, sınavların, denemelerin ve kısa yanıtların [[automated-assessment|automated scoring]] giderek artan biçimde dayanır. [[llms-do-not-grade-essays-like-humans-2026|Research on LLM essay grading]], [[llm|LLM]]'lerin denemeleri insanlarla aynı biçimde puanlamadığını bulur ve yüksek getirili otomatik puanlama için geçerlilik ve adillik soruları ortaya çıkarır. [[llm-automated-assessment-student-self-explanations|LLMs assessing student self-explanations]] ve [[cong-confidence-asag-2026|automatic short-answer grading]], toplayıcı bağlamlarda LLM puanlamasının güvenilirliğini araştırır; [[psyscore-essay-scoring-zpd-feedback|psychometrically-aware frameworks]] ise otomatik puanlamayı güvenilir ve uyarlanabilir tutmayı hedefler. 296 öğrencinin katıldığı elde yazılmış bir genel kimya sınavı, seçici gözetimin neden gerekli olduğunu gösterir: çok kipli bir LLM'nin asistan notlandırmasıyla toplam puan uyumu yüksekti (R² = 0,91) ancak madde düzeyinde güvenilirlik biçime göre keskin biçimde değişiyordu ve yanlış pozitiflerin (YZ'nin gerçekten yanlış yanıtları kredilendirmesi) tespit edilmeden kalma eğilimi vardı, çünkü öğrenciler nadiren itiraz eder — böylece "her şeyi puanlayan" tek tip bir YZ puanlayıcı, yüksek getirili kullanımda güven temelli insana erteleme olmadan savunulamaz ([[cvengros-grading-handwritten-chemistry-ai-2026]]).
- **Sonuç uyumu, kaba madde puanlamasından sağ çıkabilir.** Yönetilmiş resmî notlara karşı, 10.364 elde yazılmış Fizik Olimpiyatı ve üniversite sayfasını puanlayan çok kipli bir LLM, r = 0,93–0,96 ile korele oldu ve aynı beş öğrencili uluslararası takımı yeniden ortaya çıkardı; ancak tam soru parçası uyumu %70'e ulaştı — bir puanlayıcı, bilgilendirdiği kararlarla yargılanır ([[ai-grading-handwritten-physics-2026|Pathak et al. (2026)]]).
- **Kaçış aracı olarak YZ.** Üretici YZ yazılı sorulara yanıt üretebildiğinden, gözetimsiz ve evde yapılan toplayıcı görevler geçerliliklerini yitirir: [[generative-ai-reduced-study-time-math|proctored, unassisted measures are essential]], çünkü gözetimsiz performans YZ tarafından şişirilir ve [[generative-ai-guardrails-harm-learning|guardrailed (hint-not-answer) tools]], korumasız YZ'nin yol açtığı sınav cezasını ortadan kaldırabilir. [[chirikov-ai-grade-inflation-2026|Chirikov's (2026)]] 500.000'den fazla not üzerindeki yarı-deneysel çalışması mekanizmayı somutlaştırır: ChatGPT'nin yayınlanmasından sonra, YZ maruziyeti daha fazla olan kurslarda A notlarının payı 13 puan arttı ve etki **ödev ağırlıklı kurslarda** yoğunlaştı (üçlü farklar tahmininde ek 16 puan) — gözetimsiz ödevlerin, gerçek [[learning-gains|learning gains]] değil, YZ'nin toplayıcı sonuçları şişirdiği yer olduğunun doğrudan kanıtı.
- **YZ üretimi sınavlar.** [[assessing-quality-ai-generated-exams-field-2025|A large-scale field study]] ve [[ai-vs-human-assessment-efl-tpck-2026|EFL assessment research]], YZ'nin yüksek kaliteli sınav ve değerlendirme görevleri *üretip üretemeyeceğini* inceler — YZ'nin toplayıcı tasarım amaçlı yeni ortaya çıkan bir kullanımı.
- **Öğrenciler YZ tarafından yazılmış maddeleri güvenilir biçimde ayırt edemez.** Kredili bir Aile Hekimliği sınavında [[vogt-ai-mcq-recognition-medical-assessment-2026|Vogt vd. (2026)]], 30 YZ üretimi ile 30 lisans sınavı çoktan seçmeli maddesi arasında kaynak atfında anlamlı bir fark bulmadı, ortalama doğru tanıma %68,6 ile %77,5 arasındaydı ve üretilen maddelerin %18,2'si [[human-in-the-loop-ai|insan gözden geçirmesinde]] elendi.

## YZ'ye dirençli toplayıcı biçimler

Bilgi tabanındaki temel tema şudur: **toplayıcı biçim, YZ direncini belirler** — bir görev canlı, yüz yüze ve bireysel olarak araştırılmış performans ne kadar gerektirirse, öğrencilerin kendi öğrenmelerinin yerine YZ ikame etmeleri o kadar zorlaşır.

- **Sözlü sınavlar ve değerlendirmeler.** [[fenton-oral-exams-ai-authentic-assessment-2025|Fenton (2025)]], sözlü sınavın düşük teknolojili, doğal olarak YZ'ye dirençli bir toplayıcı biçim olduğunu savunur: gerçek zamanlı, etkileşimli diyaloğu anlamayı, [[critical-thinking|critical thinking]] ve akıl yürütmeyi test eder, ezberden değil; öğrencilerin YZ kullanarak yanıt üretmesini ve ezberlemesini engeller ve mesleki uygulamayı yansıtır. [[socratic-tests-conversational-assessment|Socratic tests]] ve [[code-review-genai-cs1|code-review interviews]] bunu dinamik, konuşmaya dayalı ve görüşme temelli toplayıcı değerlendirmeye uzatır.
- **Kitapsız, gözetimli, yardımsız ölçütler.** [[generative-ai-reduced-study-time-math|Evidence]] ve [[stromberg-generative-ai-learning-penalty-secondary-2026|large-scale field data]], öğrenciler YZ kullandığında şişirilmiş ödev veya ev işi değil, gözetimli kitapsız sınavların gerçek öğrenmenin güvenilir sinyali olduğunu gösterir. [[responsible-assessment-ai-era-stanford-2026|Responsible assessment]] çerçeveleri, bu yardımsız ölçütleri geçerlilik odaklı bir yeniden tasarım içinde gömer. Sınavlar çevrimiçi kaldığında, [[remote-proctoring|remote proctoring]] bu rolü üstlenir ve otomatik gözetimin kurpusun iki incelemesi, tespit kazançlarının yanı sıra gizlilik ve [[bias-mitigation|fairness]] kaygıları bulur ([[automated-online-exam-proctoring-decade-review-2026]], [[academic-dishonesty-automated-proctoring-ai-2026]]).

- **Korumasız bir görevi onaylayan bir ikizle eşleştirin.** [[roe-assessment-twins-2026|Roe, Perkins & Giray (2026)]], YZ'ye karşı korumasız bir görevi öğrenme değeri için korur ama aynı sonuçları değerlendiren ikinci bir görevle eşler; notu onaylayıcı bir eşik veya ağırlıklandırma aracılığıyla karşılıklı bağımlı kılar, böylece ikiz sonucu sertifikalar.

## Yüksek getirili ve standart toplayıcı değerlendirme

Yüksek getirili toplayıcı değerlendirme — giriş sınavları, standart testler ve sertifikasyon — olağanüstü sonuçlar taşır ve YZ çağı kaygısının odağıdır. [[stromberg-generative-ai-learning-penalty-secondary-2026|The generative AI learning penalty study]], lise (Zhongkao) ve üniversite (Gaokao) giriş sınavlarındaki sonuçları ölçerek, uzun süreli YZ kullanımından sonra giriş sınavı puanlarının %18–24 düştüğünü buldu. [[brcic-effortless-trap-productive-struggle-2026|The Effortless Trap]] ve [[genai-performance-vs-learning|performance-vs-learning research]], YZ destekli görevlerdeki kazanımların yardımsız yüksek getirili ölçütlere aktarılmadığını konusunda uyarır.

## YZ çağında toplayıcı ve biçimlendirici

Bilgi tabanının değerlendirme literatürü, tutarlı biçimde [[assessment]] değerlendirmenin, [[formative-assessment|formative]] ve toplayıcı işlevleri birleştirdiğinde en etkili olduğunu vurgular — ancak YZ çağı ayrımı keskinleştirir. YZ, düşük getirili, gözetimsiz ve süreci gizli görevlerde performansı şişirdiğinden, öğrenmenin gerçekten gerçekleşip gerçekleşmediğine ilişkin **toplayıcı (özellikle gözetimli/kitapsız/yüz yüze) ölçütler çok önemli kontrol haline gelir**. Bu, özgün ve YZ'ye dirençli toplayıcı görevleri (sözlü sınavlar, kod incelemesi görüşmeleri, gözetimli sınavlar, süreç temelli [[eportfolio|portfolios]]) [[academic-integrity|integrity]] çapası olarak korurken, yolda öğrenmeyi desteklemek için biçimlendirici değerlendirmeyi kullanan bir değerlendirme yeniden tasarımını gerekçelendirir. Yapıcı tasarım yanıtı için [[authentic-assessment]] sayfasına bakın.

## Eğitimde YZ için çıkarımlar

- **Toplayıcı biçim bir geçerlilik ve dürüstlük kaldıracıdır:** YZ'ye dirençli toplayıcı biçimler (sözlü, gözetimli, kitapsız, yüz yüze), değerlendirilen performans ile gerçek öğrenme arasındaki bağlantıyı korur.
- **Gözetimli/yardımsız ölçütler güvenilir sinyaldir:** öğrenciler YZ kullandığında, yardımsız toplayıcı sınavlar — ödev değil — gerçek öğrenmeyi ortaya çıkarır.
- **Otomatik puanlama psikometrik incelemeye ihtiyaç duyar:** yüksek getirili sınavları puanlamak için LLM kullanmak, yalnızca doğruluk değil, güvenilirlik, adillik ve geçerlilik değerlendirmesi gerektirir.

- Puanlama hatası ayrıca nota bağımlıdır: 32 halk sağlığı sınavı gönderimi üzerinden, LLM'ler ölçeğin uçlarından kaçındı — hızlı kipte hiç E veya F görülmedi — en iyi model insan notuyla tam olarak %50,0'de ve ±1 not aralığında %90,6'da eşleşti ([[llm-grading-assistants-public-health-2026|Brevik et al. (2026)]]).
- **YZ ayrıca sınav üretebilir:** YZ destekli sınav ve görev üretimi, kendi başına kalite değerlendirmesi gerektiren yeni ortaya çıkan bir toplayıcı tasarım uygulamasıdır.
- **Yalnızca biçimi değil, puanlamanın amacını yeniden düşünün.** [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]], yüzeysel ve parçalı öğrenmeyi teşvik eden, öğrencilere az denetim veya şeffaflık veren, içsel [[motivation]] zedelenen, stresi ve [[well-being|anxiety]] besleyen ve gerçek dünya uygulamasından ziyade büyük ölçüde hatırlamayı değerlendirirken eşitsizlikleri sürdüren geleneksel toplayıcı, norm referanslı puanlamayı eleştirir; yeniden değerlendirmeyi, [[mastery-learning|standards-based grading]] ve puan vermemeyi, toplayıcı ağırlıklı uygulamayı yumuşatabilecek puanlama odaklı yenilikler olarak konumlandırır; bunların yönetim eğitiminde normatif engeller — eğriye göre puanlama, dışsallaşan sinyalleme (sıralamalar, stajlar, akreditasyon) ve öğrencilerin araçsal zihniyeti — nedeniyle marjinal kaldığını kabul eder ve kurumsal destekle kademeli denemeler önerir.

## Yaygın yanlış anlamalar

- **“Bir LLM resmi standartlara göre puanlayamaz.”** **Modere edilmiş resmi notlara** karşı, **10.364 el yazımı** Fizik Olimpiyatı ve üniversite sayfasını puanlayan çok kipli bir LLM güçlü biçimde korelasyon göstermiştir. Sonuç uzlaşısı, madde düzeyinde kesin olmayan puanlamayla birlikte ayakta kalabilir; bu da yararlı sorunun, madde düzeyinde kesinliğin fiilen nerede gerekli olduğu sorusu olduğu anlamına gelir.
- **“YZ kaynaklı not enflasyonu bir spekülasyondur.”** [[chirikov-ai-grade-inflation-2026|Chirikov'un (2026)]] **500.000'den fazla not** üzerindeki yarı-deneyi mekanizmayı somutlaştırır: ChatGPT'nin yayımlanmasından sonra **YZ'ye daha açık görevleri olan derslerde yüksek notların payı arttı**. Etki, görevlerin açık olduğu yerde yoğunlaşmıştır; bu, bir mekanizmanın öngöreceği örüntüdür.
- **“YZ kullanan öğrenciler kullanmayanlardan ayırt edilemez, dolayısıyla kaynak izleme umutsuzdur.”** YZ tarafından üretilen maddeler ile lisans sınavı maddeleri arasında **kaynak atfında anlamlı bir fark bulunmaması**, doğru tanımanın **%68,6-77,5** ve yanlış atfın **%18,2** olması, kaynak izlemenin gereksiz olduğuyla değil tanımanın başarısız olduğuyla ilgilidir. Dahası, doğrulanmış kaynak izleme gereksinimini yükseltir.

## Bağlı kavramlar

- [[remote-proctoring]]
- [[assessment]]
- [[formative-assessment]]
- [[authentic-assessment]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[academic-integrity]]
- [[ai-ed-evaluation]]
- [[higher-ed]]
- [[k-12]]

## Bağlı makaleler

- [[llm-grading-assistants-public-health-2026]] — LLM puanlayıcılar, yüksek getirili deneme değerlendirmesinde not ölçeğini sıkıştırır ve uçlardan kaçınır

- [[academic-dishonesty-automated-proctoring-ai-2026]]
- [[automated-online-exam-proctoring-decade-review-2026]]
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Sözlü sınavları özgün, YZ'ye dirençli toplayıcı değerlendirme olarak yeniden düşünmek
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Üretici YZ öğrenme cezası: gözetimli/kitapsız sınav kanıtı
- [[chirikov-ai-grade-inflation-2026]] — Not şişkinliğinin bir mekanizması olarak YZ görev yer değiştirme; ödev ağırlıklı kurslar (Chirikov 2026)
- [[generative-ai-reduced-study-time-math]] — Daha hızlı tamamlama, daha az öğrenme: gözetimli ölçütler esastır
- [[generative-ai-guardrails-harm-learning]] — Korkulukları olmayan üretici YZ öğrenmeye zarar verir
- [[assessing-quality-ai-generated-exams-field-2025]] — YZ üretimi sınavların kalitesini değerlendirmek
- [[llms-do-not-grade-essays-like-humans-2026]] — LLM'ler denemeleri insanlar gibi puanlamaz
- [[llm-automated-assessment-student-self-explanations]] — Öğrenci öz açıklamalarının otomatik değerlendirmesi için LLM'ler
- [[cong-confidence-asag-2026]] — Otomatik kısa yanıt puanlaması
- [[psyscore-essay-scoring-zpd-feedback]] — Psikometrik olarak bilinçli, niteliğe uyarlanmış deneme puanlaması
- [[socratic-tests-conversational-assessment]] — Sokratik testler: dinamik, konuşmaya dayalı, çok kipli değerlendirme
- [[code-review-genai-cs1]] — CS1'de kod incelemesi görüşmeleri
- [[responsible-assessment-ai-era-stanford-2026]] — YZ çağında sorumlu değerlendirme
- [[test-driven-ai-assisted-learning]] — Test güdümlü YZ destekli öğrenme
- [[genai-oop-programming-assessments-2026]] — Nesne yönelimli programlama değerlendirmelerinde YZ performansı
- [[brcic-effortless-trap-productive-struggle-2026]] — The Effortless Trap: üretken çaba ve öğrenmenin yanılsaması
- [[ai-vs-human-assessment-efl-tpck-2026]] — EFL'de YZ üretimi ve insan geliştirmeli değerlendirme görevleri
- [[roe-assessment-twins-2026]] — Üretici YZ çağında değerlendirme geçerliliğini güçlendiren değerlendirme ikizleri (Roe, Perkins & Giray 2026)
- [[ai-grading-handwritten-physics-2026]] — Elde yazılmış fizik değerlendirmelerinin YZ ile puanlanması (Olimpiyat)
- [[mesny-innovative-assessment-grading-management-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[vogt-ai-mcq-recognition-medical-assessment-2026]] — Öğrenciler YZ tarafından yazılmış maddeleri güvenilir biçimde ayırt edemez
