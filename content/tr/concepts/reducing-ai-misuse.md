---
title: YZ Kötüye Kullanımını Azaltma
created: "2026-10-14T21:05:00-04:00"
connected_faqs: [reduce-ai-cheating, should-we-use-ai-detectors, designing-ai-into-learning, addressing-common-misconceptions-ai-education, course-ai-policy, reducing-over-reliance]
type: concept
foundations: [academic-integrity, ai-literacy]
pedagogy: [metacognition, motivation, scaffolding, self-regulated-learning]
technology: [generative-ai, prompt-engineering]
assessment: [assessment]
confidence: high
translation_of: concepts/reducing-ai-misuse
source_updated: "2026-10-28T15:48:01-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **YZ kötüye kullanımını azaltma** — öğrencilerin [[generative-ai|üretken YZ]]’yi kendi [[cognitive-offloading|bilişsel işleri]] yerine koymalarını önleyen ve onları bunun yerine [[ethics|etik]], verimli kullanıma yönlendiren tasarım, [[pedagogy|pedagojik]] ve [[educational-policy-ai|politika]] kolları. Etkili yaklaşımlar etkiye göre sıralanmıştır, popülerliğe göre değil; en güçlü kanıtlar **yapısal kolları** — araç [[guardrails]] ve değerlendirme yeniden tasarımı — öne çıkarmaktadır. Bunlar, öğrencinin motivasyonundan bağımsız olarak ortamı değiştirerek kötüye kullanımı zorlaştırır ve dayanıklı kapasite ile [[framing-ai-use-for-students|öğrenci katılımı]] inşasına dayanan **eğitici kolların** üzerindedir.

## Üzerinde Düşünülmesi Gereken Sorular

- Ödevlerini YZ’ye devreden öğrenciler, ödev puanları *artarken* [[summative-assessment|kitapsız sınav]] puanlarının *düştüğünü* görebilirler. Okumaya başlamadan önce: performans ile öğrenme neden bu kadar keskin şekilde ayrışır — ve bu fark, YZ ile "başarı"nın aslında ne anlama geldiği konusunda ne önerir?
- Sayfa müdahaleleri nedensel kanıt ve erişime göre sıralar ve *yapısal* kolları (araç güvenlik önlemleri, değerlendirme yeniden tasarımı) *eğitici* olanların ([[teacher-role|iyi uygulamayı öğretme]]) üzerine koyar — tam olarak yapısal kolların öğrencinin motivasyonundan bağımsız olarak işe yaraması nedeniyle. Ortamı değiştirmenin zihinleri değiştirmeyi yendiğini kabul ediyor musunuz? Her birine güvenmenin riski nedir?
- Güvenlik önlemleriyle korunan bir "ipucu veren, cevap vermeyen" öğretmen, korumasız birinin yol açtığı öğrenme kaybını tamamen ortadan kaldırmıştır; oysa ikisi de faydalı görünüyordu. Şimdiye kadar gördüğünüz, cevapları fazla kolay veren bir öğrenme aracı düşünün. İskele kuran bir ipucu ile yerine geçen bir cevap arasındaki çizgi nerede — ve okumaya başlamadan önce bunu ifade edebilir misiniz?
- En güçlü çözüm değerlendirme yeniden tasarımını içerir: yardım almadan sınavlar, sözlü savunmalar, sürece dair ürünler, yüzeysel akıcılık yerine akıl yürütmenin ödüllendirilmesi. Bu şekilde notlandırılan bir kursu alırsanız nasıl hissederdiniz ve bu hissize, bu kolun neden hem etkili hem de popüler olmadığına dair size bir şey söylüyor mu?
- Öğrencileri kullanımlarını bilişsel aşamalara (planlama karşısında içerik üretimi) eşlemeye zorlayan YZ beyan çerçeveleri vurguyu denetimden profesyonel uygulamaya kaydırır. Bu tür bir yansıtmanın gerçekten daha iyi muhakeme inşa ettiğini mi düşünüyorsunuz, yoksa öğrencilere kötüye kullanımı daha akıllıca betimlemeyi mi öğretiyor?
- Okumadan önce bir hedef belirleyin: kendi kursunuzda ya da iş akışınızda YZ kötüye kullanımını zorlaştıracak bir somut değişiklik ve verimli kullanımı kolaylaştıracak bir değişiklik belirleyin. Bunların her biri sayfanın hangi kademesine ait olurdu?

## Giriş

Kavram, YZ kötüye kullanımının kalıcı öğrenmeyi fiilen zarara uğrattığına dair kanıt üzerine kuruludur — [[ai-misuse-learning-harm]] içinde belgelenmiş performans–öğrenme açığı — ve bunu yaparken anlık performansı şişirir. Müdahaleler bu zararın mekanizmalarını hedef alır: cevap kopyalama, [[cognitive-offloading]], motivasyon erozyonu ve öğrenmenin yer değiştirmesi. Bunlar birbirini dışlamaz; sağlam bir yaklaşım yapısal bir tabanı eğitici kapasite inşasıyla birleştirir.

### Yapısal kolların neden en çok önem taşıdığı

Müdahaleler **nedensel kanıt × yapısal erişim × ölçeklenebilirlik × [[sustainability]]** ile sıralanabilir. Bu temelde iki *yapısal* kol en üstte yer alır, çünkü öğrenciler doğru davranışı seçse de seçmese de işe yararlar — ortamı kısıtlarlar, içsel motivasyona bağımlı kalmazlar. *Eğitici* kollar zorunludur, ancak yalnızca öğrenciler katıldığında etkilidir; bu nedenle kavramsal vaatlerine rağmen ikinci kademe olarak ele alınırlar. [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher ve Calderon (2025)]] yapısal argümanı bir basamak yukarı taşır; öğrenci davranışı yerine yönetişimi bağlayıcı kısıt olarak ele alır ve akademik yöneticilerin değerlendirmenin özgün olup olmadığını, öğrencilerin değerlendiren öğretmenler tarafından bireysel olarak tanınıp tanınmadığını ve dürüstlüğün oryantasyona dâhil edilip edilmediğini görebilmesi için 130 maddelik bir dürüstlük gösterge çerçevesi önerir. Reformları yönetişim mimarilerini, insanları ve [[ai-technologies|teknolojileri ve kaynakları]] hedef alır ve öğrenciler bunları bulmadan önce değerlendirme açıklarını ortaya çıkarmak amacıyla siber güvenlikten [[guardrails|red teaming]] yöntemini ödünç almayı önerir — yapısal tabanın, hem bilgiye hem de onu sürdürme iradesine ihtiyaç duyan kurumlar tarafından korunduğuna dair bir hatırlatma.
Sorumlu kullanım literatürü, bu sıralamanın varsaydığı zinciri kendisi nadiren sınar. 31 çalışmadan derlenen 122 yaklaşım kaydının 51’i hem uygulanmış hem değerlendirilmiş, çoğunlukla öz bildirim yoluyla; yalnızca dört çalışma bir sınır tanımlamış, bu sınır etrafında bir müdahale tasarlamış ve öğrencilerin kararlarının bu sınırla uyumlu olup olmadığını sınamıştır ([[tie-responsible-genai-use-academic-writing-review-2026|Tie, Gil Ortega ve Zhao (2026)]]).

### 1. Kademe — Öğrenme zararını azaltmak için doğrudan kanıtlanmış

**Korumalı YZ aracı tasarımı ("ipucu veren, cevap vermeyen" [[scaffolding]]).** Bilgi tabanındaki en güçlü nedensel bulguda, saha [[rct]] çalışması korumasız bir ChatGPT tarzı öğretmenin destekli pratik performansını **+48%** arttırdığını, yardım almadan sınav puanlarını ise **−17%** düşürdüğünü gösterdi; buna karşılık korumalı bir öğretmen (cevap yerine ipuçları, ayrıca öğretmenlerin yazdığı problem bilgileri) zararı tamamen ortadan kaldırdı. Bu, hasarın ardındaki cevap kopyalama "koltuk değneği" davranışını mekanik olarak önler. Faaliyetler arasında ipucu veren-cevap vermeyen öğretmenlik, istek metinlerini doğru çözümler ve yaygın [[misconceptions]] ile donatmak ve YZ çıktısı ortaya çıkmadan önce öğrenciden bir deneme istemek yer alır.

**Cevabı esirgemek oturum içinde korur ama beceriyi inşa etmez.** [[tuo-armada-multi-agent-debate-overreliance-2026|Tuo ve ark. (2026)]], [[agentic-ai|çok aracılı]] bir tartışmada toplu konumu esirgemiş ve yanlış YZ konumuna geçişi %42-%60,5’ten %5,7-%8,2’ye düşürmüş, ancak oturum içinde hiçbir öğrenme etkisi bulmamıştır (β = 0,03, p = 0,18); koruma korkuluğu yerinde olduğu sürece tutmuş ve yardımsız yargıyı hareketsiz bırakmıştır.

**Değerlendirme yeniden tasarımı (YZ’ye dirençli + yardım almadan ölçümler).** Kötüye kullanım zararı değerlendirmeye bağlı olduğundan — denetimli, kitapsız ve yardım almadan ölçümlerde ortaya çıkıp sıradan notlandırılmış ders çalışmalarını şişirdiğinden — başarı sayılan şeyi değiştirmek hem kötüye kullanımı caydırır hem de görünür kılar. Faaliyetler arasında sınıf içinde yardım almadan sınavlar ve sözlü savunmalar, sürece dair ürünler istemek (taslaklar, yansıtmalar, açıklamalı akıl yürütme), yüzeysel akıcılık yerine akıl yürütmeyi ödüllendirmek ve YZ’den uzak bölgeler belirlemek yer alır. [[ivory-psychology-assessment-integrity-2026|Ivory ve ark. (2026)]] süreç ürünü gerekliliğine somut bir araç verir: zorunlu sürüm geçmişleri ve tekrarlanabilir analiz belgeleri; böylece şüpheli bir teslim, işin nasıl geliştiğine dair bir zaman çizelgesi olarak incelenebilir ve öğrencinin üretmesi gereken uydurma malzeme miktarı, dışarıdan devretmenin kazandırdığından çok daha fazla olur. Geniş ölçekli saha kanıtı bunu pekiştirir: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei ve Wu (2026)]] ödevleri dışarıdan devretmenin ödev puanlarını %18 arttırırken kitapsız sınav puanlarını *%20 düşürdüğünü* buldu — yardım almadan, denetimli ölçümlerin ortaya çıkarmak için tasarlandığının tam da işareti; çalışma kitapsız yüzyüze değerlendirmeye daha ağırlık verilmesini önermektedir. [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025|Leaton Gray, Edsall ve Parapadakis (2025)]] aynı mantığa en açık durumsal suç önleme ifadesini verir; başarısızlığı öğrencilerden çok, bir modelin ikna edici biçimde yanıt verebildiği değerlendirmelere ait olduğunu savunur ve bir Avustralya işletme bitirme projesine uygulanan 25 önleme tekniği — öğrenci etkileşimlerinin izlenmesi, aşırı uzman işin kırmızı bayrak tespiti, rastgele takım yeniden atama, her hafta sınıf içi gözetimli testler, öğrencilerin yayımladığı ders materyalleri için kaldırma uyarıları — rapora göre bir yıl içinde usulsüzlük vakalarını 183’ten 27’ye düşürdüğünü bildirir. Önerileri araştırmacıdan çok motivasyonel bir yapıdadır: değerlendirmenin algılanan amacını yükseltmek, [[self-efficacy]] inşa etmek ve hileli çalışmanın algılanan sosyal maliyetini arttırmak; yazarlar üçünden yalnızca bir veya ikisiyle ilgilenmenin başarısız olacağı konusunda uyarır ve bu beş disipline özgü yeniden tasarımla desteklenir: süreli problem çözme sınavlarını öğrencinin kendi sürecine dair yazılı bir yansıtma eşliğinde açık kaynaklı [[problem-solving|problem çözmeye]], özetleyici yazıları [[collaborative-learning|işbirlikçi]] arşiv araştırma projelerine ve [[eportfolio|portfolyoları]] yinelemeli, hakem değerlendirmesine tabi tasarım süreçlerine dönüştürür.

Yapısal kolların bir denetim kolu vardır ve kanıt tabanı, erişiminin ima ettiğinden daha zayıftır. [[munoz-misconduct-allegation-evidence-2026|Munoz ve ark. (2026)]] 1.162 üretken YZ usulsüzlük vakasını kodladı ve suçlamanın yapıldığı noktada en sık atıf yapılan kanıtın — [[ai-detection|dedektör]] çıktısı, benzerlik raporları, YZ’ye özgü içerik örüntüleri — en zayıf ispat değerine sahip olduğunu, buna karşılık itirafların, gözlemlenen sınav davranışının ve bağımsız olarak doğrulanan uydurma kaynakların en güçlüsü olduğunu buldu; kurumsal prosedürler bir asgari ispat eşiği belirlemediğinden kanıt niteliği, vaka sonuçlarıyla güvenilir bir ilişki taşımadı ve zayıf kanıtlara dayanan davaları olan öğrenciler öncelikle itiraza başvurabildi. [[wright-transcription-not-generation-2026|Wright (2026)]] aynı hassasiyetin ikinci bir maliyetini gösterir: "üretken YZ" etrafında değil, işlev etrafında yazılan yasaklar, öğrencinin önceden yazdığı işin yalnızca biçimini dönüştüren araçları yakalar; böylece yalnızca yazıya dökme kullanımı usulsüzlük olarak yaptırıma tabi tutulabilir — bu aşırı kapsama, engelli ve [[equity-in-ai-education|eşitlik]] açısından dezavantajlı [[learners]] üzerinde en ağır düşer ve [[assessment-validity|geçerlilik]] için hiçbir şey yapmaz. [[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana, Mtshali ve Mchunu (2026)]] en yaygın benimsenen dürüstlük kontrolü olan [[remote-proctoring|uzaktan gözetimli sınav]]ın caydırıcılık gerekçesinin, azalmış usulsüzlük üzerine değil, öğrencilerin hissettikleri üzerine kurulu olduğunu ekler; kaygı, konsantrasyon kaybı ve altyapı kaynaklı dışlanma getirir ve bunların daha düşük kötüye kullanımla karşılandığı gösterilmemiştir. [[li-genai-assessment-language-equity-2026|Li (2026)]] kural tasarımı boyutunu ekler: aynı arayüz hem izin verilen dil düzenlemesini hem yasaklanan esaslı metin yazımını yerine getirdiğinden, farklılaştırılmamış GenAI kuralları İngilizce’yi ek dil olarak kullanan öğrenciler üzerinde kohorta göre çarpık uyum yükleri getirir; bu nedenle daha savunulabilir önleme, değerlendirme yapısına dayalı, kalibreli aşamalı açıklamayı, eşik/kanıt/yaptırım kararlarında oranlılığı ve tespitin yapamadığı işi üstlenen tasarım kollarını — aşamalı teslimler, kısa ve yapıya uygun sözlü doğrulama, eleştiri temelli sorular — içeren amaç temelli bir destek–yer değiştirme sınırıdır. Önleme notu değerlendirenin kendisini de kapsamalıdır: [[humble-prompt-injection-ai-grading-red-team-2026|Humble’ın (2026)]] red-team değerlendirmesi, teslim dosyasına gömülü beş dolaylı istek metni enjeksiyon strategisinden ikisinin başarısız bir yazıyı tespit edilmeden geçer nota çıkardığını, bildirilen başarı oranlarının %100 ve %94 olduğunu buldu; bu nedenle YZ araçlarının öğrenci işini notlandırdığı her yerde [[human-in-the-loop-ai|insan incelemesi]], talimatların teslim edilen içerikten daha net ayrılması ve dayanıklılık testleri, isteğe bağlı bir kademe değil yapısal tabanın içinde yer almalıdır.

### 2. Kademe — Güçlü çerçeve desteği, yüksek potansiyel

**İskeleli kullanım dizileri: önce düşün, ikinci sırada YZ, üçüncüsünde yansıt.** [[critical-thinking]]’i yer değiştirmeden LLM’leri bütünleştirmeye yönelik sekiz tasarım ilkesi: bilişsel sürtünmeyi korumak, YZ’yi bir otorite değil geçici bir düşünce ortağı olarak konumlandırmak, değerlendirme denetim noktaları gömmek, [[metacognition|üstbilişsel]] günlük tutma ve istek metni kayıtları istemek ve YZ aracılı dönemleri YZ’den uzak dönemlerle dengelemek. İlişkisel kanıt (YZ’den önce bağımsız çalışmak daha güçlü çıktılar üretir) güçlüdür; bu, 1. kademenin pedagojik olarak eksiksiz sürümüdür.

**[[ai-literacy|YZ okuryazarlığı]] ve [[prompt-engineering|istek metni yazma]] okuryazarlığı — kasti pratik ve anında [[feedback]].** Senaryo temelli istek metni pratiği kullanan bir [[k-12]] modülü, bir [[llm]] otomatik notlandırıcı ile gerçek istek metni yazma becerilerini geliştirdi ve öğrenmede YZ kullanımına dair güveni **+10,4%** arttırdı; katılımcıların %87’si YZ’yi sorumlu biçimde kullanmayı öğrendiklerini bildirdi. Gösterilmiş beceri kazanımları; açık soru bunların [[learning-gains|öğrenme kazanımları]]na dönüşüp dönüşmediğidir. Aynı zamanda önceki YZ erişimindeki [[equity-in-ai-education|eşitlik]] açığını ele alır.

**Yapılandırılmış YZ kullanım beyan çerçeveleri.** Jenerik "YZ kullandım" onay kutularının yerine, kullanımı bilişsel aşamalara (yapısal planlama karşısında içerik üretimi) eşleyen [[discipline-specific-aied|alana özgü]] beyanlar, öğrenme süreci üzerine yansıtma zorlar ve kabul edilebilir yardım ile usulsüzlük arasındaki sınırı netleştirir; vurguyu denetimden profesyonel uygulamaya kaydırır.

Dürüstlük, bir ceza kuralından çok öğretilmesi gereken bir uygulama olarak ele alındığında eğitici kollar yine farklı görünür. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] tespit ve doğrulamaya dayalı dürüstlük rejimlerinin GenAI ile güçlendirilmiş işle uyumsuz olduğunu savunur ve dürüstlüğü, [[evaluative-judgment|değerlendirici muhakeme]] — seçenekleri tartma, akademik seçimleri gerekçelendirme ve belirsizlik altında sorumluluk alma yetisi — yoluyla hayata geçen pedagojik bir uygulama olarak yeniden çerçeveler; bu, açıklamalı karar izleri, belgelenmiş doğrulama, sözlü savunma ve taslaktan taslağa sürüm geçmişleri gibi ürünlerle görünür kılınır ve tespit, birincil altyapıdan ziyade tek bir tamamlayıcı katmana indirgenir. [[mulisa-students-genai-integrity-perspectives-2026|Mulisa ve Mezgebu (2026)]] aynı açılımı öğrenciler tarafından bulur: Etiyopya’daki bir [[higher-ed|üniversitede]] 27 görüşme boyunca kullanım neredeyse evrenseldi, katılımcıların çoğu GenAI’yi başarılarını yükselttiği için övdü ve en keskin şikâyet tersi yönde koştu — çalışkan bağımsız çalışanların üzerinde puan alan YZ kullanıcıları, katılımcıların bunu motive edici bulmadığını belirtti. Yazarlar, öğrencilerin inançlarının etik kullanımı kurumsal kurallardan daha güçlü biçimde öngördüğü sonucuna varır; bu nedenle farkındalık, net politika ve değerlendirme yeniden tasarımı birlikte gelmek zorundadır — bu, sayfanın eğitici kademesinin bir koşul olarak ifadesidir: kapasite inşası davranışı yalnızca yapısal bir tabanla birlikte [[framing-ai-use-for-students|öğrenci katılımı]] yoluyla değiştirir. [[ji-student-voices-academic-integrity-scoping-2026|Ji’nin (2026)]] öğrenci sözlerine dair 38 çalışmanın [[meta-analysis-systematic-review|kapsamlı incelemesi]] aynı sonucun alan düzeyindeki sürümünü sunar: incelenen çalışmalar, geriye dönük tespitten proaktif etik akıl yürütmeye, tek seferlik [[ai-literacy|okuryazarlık]] oturumları yerine [[curriculum-design|müfredatta]] YZ etiği ve YZ-intihal öğretimine ve liderler, öğretim elemanları ve öğrencilerin birlikte oluşturduğu ayrıntılı kılavuzlara yakınsar; çünkü net olmayan rehberlik, temkinli olmak yerine zımni izin olarak okunur. Ji’nin kendi okuması şudur: sahiplik ve ahlaki akıl yürütme, cezalandırma korkusundan daha fazla motive eder ve öğrenciler GenAI’nin ne pasif alıcılarıdır ne de ahlaki kısıtı olmayan suçlular; gri bir bölgede çalışan ahlaki öznelerdir — bu kademenin öncülsü, bir bulgu olarak ifade edilmiştir.

### 3. Kademe — Umut verici, doğrudan nedensel kanıt daha düşük

**Üstbilişsel ve özdeğerlendirme müdahaleleri.** Yansıtıcı günlükler, istek metni kayıtları ve kalibrasyon eğitimi, YZ tarafından üretilen akıcılığın maskelediği öz bilişsel sınırlarını yerinde bulamayan "YZ’yi ana dil olarak konuşan" öğrencilerin "eksik bilişsel taban çizgisini" yeniden inşa eder. Kavramsal olarak merkezîdir, ancak henüz nedensel olarak test edilmemiştir.

**Motivasyon yeniden tasarımı.** YZ’nin erişilebilirliği [[motivation|özerk motivasyonu]] aşındırdığından ("çaba göstermeye değer mi?"), görevleri YZ’nin karşılayamadığı hedefler ve [[agency|öğrenen özerkliği]] çevresinde yeniden yapılandırmak, doğrudan zararı birleştiren kalıcılık erozyonunu doğrudan hedef alır.

**Eleştirel YZ okuryazarlığı.** Güç–bilgi çerçevesiyle öğrenenlere YZ [[governance|yönetişimini]] tüketmek yerine sorgulamayı, meydan okumayı ve ona katılmayı öğreten bir yaklaşım. Uzun vadeli, eşitlik odaklı ve hedefleri bakımından yapısaldır, ancak öğrenme etkileri büyük ölçüde test edilmemiştir.

**Eleştirisiz kabulü önlemek için [[ai-sycophancy|yağcılığı]] tanımak.** [[ai-sycophancy|Yağcı]] YZ kullanıcıyı onaylar, meydan okumadığı için doğrudan bir kötüye kullanım vektörüdür: yanlış düşünceleri için onaylayıcı bir mutabakat alan öğrenciler, YZ’yi kendi [[cognitive-offloading|bilişsel işleri]] yerine kullanmaya teşvik edilir. [[contextual-sycophancy-ai-literacy|Bağlamsal yağcılık]], YZ okuryazarlığı ve istek metni eğitiminin hata döngüsünü azalttığını ancak ortadan kaldırmadığını gösterir; bu nedenle kötüye kullanım önlemi, eğitici tanıma eğitimini sistem düzeyinde düzeltici sürtünme tasarımıyla eşleştirmek zorundadır (bkz. 1. kademedeki güvenlik önlemleri).

- **[[desirable-difficulties|Verimli sürtünme]] ve pedagojik işlev.** Sidney hızlı incelemesi, GenAI’nin öğrenmeyi, öğrencilerin öğrenmek için gereken bilişsel/üstbilişsel sürtünmeyi atlatmasına izin verdiğinde öğrenmeyi zedelediğini ve amacıyla tasarlanmış araçların *verimli sürtünme* getirdiğini (cevapları saklama, açıklama isteme) savunur. Dört pedagojik işlevi — GenAI ile *öğrenmek*, *birlikte*, *hakkında* ya da *şekillendirerek* — ayırır; her biri özerkliğe ve değerlendirmeye farklı talepler getirir. ([[young-people-learning-generative-ai-rapid-review-2026]])

## Yaygın yanlış anlamalar

**“Öğrencilere riskleri öğretmek kötüye kullanıma karşı ana kaldıraçtır.”** Öğrencinin işbirliğine bağlı olan kaldıraç budur ve bu yüzden burada yapısal olanların altında sıralanır. Güvenlik korkulukları ve değerlendirme yeniden tasarımı, öğrenci doğru davranışı seçsin ya da seçmesin işe yarar; eğitici yaklaşımlar ise yalnızca katılımla işler. Ayrım ahlaki değil mekaniktir: değişmiş bir ortam davranışı doğrudan kısıtlar, değişmiş bir inanç ise teslim tarihinden önceki geceyi atlatmak zorundadır.

**“Bir korkuluk oturum sırasında tutuyorsa öğrenme güvence altındadır.”** Tutmak ile öğretmek ayrı sonuçlardır ve bilgi tabanında temiz bir çifte sonuç vardır. [[agentic-ai|Çok aracılı]] bir tartışmada toplu konumu esirgemek, öğrencilerin yanlış YZ konumuna geçişini %42-%60,5’ten %5,7-%8,2’ye düşürmüş, büyük bir koruyucu etki yaratmış, yine de **oturum içinde hiçbir öğrenme etkisi** üretmemiştir (β = 0,03, p = 0,18). Korkuluk korkuluk olarak işini yapmış ve öğretime dönüşmemiştir. Kötüye kullanımı önlemek için tasarlamak, öğrenme için tasarlamakla aynı şey değildir.

**“Kötüye kullanımı tespit edip cezalandırmak bir önleme stratejisidir.”** Önleme, notlandırıcının kendisini de kapsamak zorundadır. [[humble-prompt-injection-ai-grading-red-team-2026|Humble’ın (2026)]] kırmızı ekip değerlendirmesi, bir teslim dosyasına gömülen beş dolaylı istek metni enjeksiyonu stratejisinden ikisinin başarısız bir kompozisyonun notunu yükselttiğini bulmuştur. Öğrenci kötüye kullanımını tespit ederken incelenmemiş teslim içeriğine güvenen bir iş hattı yalnızca tek taraftan savunulmuştur.

**“Kötüye kullanım bir öğrenci motivasyonu sorunudur.”** [[coates-governing-academic-integrity-indicators-2025|Coates, Croucher ve Calderon (2025)]], bağlayıcı kısıtı bir basamak yukarı taşır; değiştirilecek şey olarak öğrenci davranışı yerine yönetişimi ele alır ve 130 maddelik bir dürüstlük gösterge çerçevesi önerir. Öğrenme zararı da ölçekte ölçülebilir: [[stromberg-generative-ai-learning-penalty-secondary-2026|Strömberg, Lei ve Wu (2026)]], ödev dışarıdan devretmenin ödev puanlarını %18 artırırken kitapsız sınav puanlarını *%20 düşürdüğünü* bulmuştur; bu, tam olarak bu sayfanın konusu olan boşlukta görünen bir tasarım başarısızlığıdır.

## Role göre uygulama rehberi

**Eğitmenler ve ders ekipleri için**

- Politika metniyle değil değerlendirmeyle başlayın. Her notlandırılan görev için, yardımsız sürümünün belgelendirmeyi amaçladığınız şeyi gösterip göstermeyeceğini sorun ve önce görevi düzeltin; öğrenci rızası gerektirmeyen kaldıraç budur.
- YZ öğretmeni mevcut olduğunda ipucu veren-cevap vermeyen araçları benimseyin; korumalı ile korumasız öğretmenlik üzerine saha RCT’si bu alandaki en güçlü nedensel kanıttır.
- Öğrenci kötüye kullanımını tek tehdit olarak ele almadan önce, kendi notlandırma iş hattınızın teslim edilen dosyalardaki enjekte talimatlara direndiğini sınayın.
- YZ izinli performans ile yardımsız performansı iki ayrı ölçüm olarak ele alın; yukarıdaki %18/%20 ayrışması, ikisini birden toplamadıkça görünmezdir.

**Geliştiriciler için**

- Kısıtlamayı bir uyarıya değil arayüze yerleştirin. Bitiş cevabını üretebilen bir öğretmen, teslim baskısı altında bitiş cevabını üretecektir.
- Korkuluğa uyumdan öğrenme çıkarsamayın. Tartışma sonucu, davranış tutarken öğrenme ölçümlerinin sabit kaldığını gösterir; bu nedenle sonuçları etkileşimlerden ayrı olarak ölçün.
- Kötüye kullanım sinyallerini eğitmenlere hüküm olarak değil tanı olarak sunun; kanıttaki yönetişim çerçevelemesi bireysel öğrenci davranışının üzerinde durur.

**Yöneticiler ve politika yapıcılar için**

- Bağlayıcı kısıtı kanıtın koyduğu yere koyun. Göstergeler ve yönetişim yapıları ortamı ele alır; öğrencilere öğüt vermek ise kurumsal tasarımı değiştirmeye en az muktedir kişiyi ele alır.

## Bağlı kavramlar

- [[ai-misuse-learning-harm]]
- [[cognitive-offloading]]
- [[academic-integrity]]
- [[assessment]]
- [[ai-literacy]]
- [[scaffolding]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[motivation]]
- [[prompt-engineering]]
- [[ai-sycophancy]]
- [[trust-calibration]]
- [[framing-ai-use-for-students]]
- [[cognitive-surrender]]

## Bağlı makaleler

- [[ivory-psychology-assessment-integrity-2026]] — Kötüye kullanımı caydırıcı olarak sürüm denetimi kanıt izleri ve tekrarlanabilir analiz belgeleri (Ivory ve ark. 2026)
- [[tuo-armada-multi-agent-debate-overreliance-2026]] — Bir öneriyi esirgemek, koruduğu yargıyı inşa etmeden aşırı güveni büyük ölçüde önledi
- [[generative-ai-guardrails-harm-learning]] — Koruma Olmadan GenAI Öğrenmeye Zarar Verebilir
- [[genai-performance-vs-learning]] — Performans Kazanımlarını Öğrenmeden Ayırt Etmek
- [[ai-assessment-scale-reform]] — YZ Değerlendirme Ölçeği ve Değerlendirme Reformu
- [[critical-thinking-genai-scaffolding]] — Üretken YZ ile Eleştirel Düşüncenin İskelelenmesi
- [[aaai2026-prompting-literacy-k12]] — Öğrenmek için YZ Kullanmayı Öğrenmek (K-12 YZ Okuryazarlığı Modülü)
- [[genai-declaration-frameworks-higher-education]] — Şeffaflığı Yapılandırmak: GenAI Beyan Çerçeveleri
- [[absent-cognitive-baseline-2026]] — Eksik Bilişsel Taban Çizgisi
- [[ai-literacy-power-knowledge]] — YZ Okuryazarlığı: Güç–Bilgi Üzerine Bir Alıştırma
- [[contextual-sycophancy-ai-literacy]] — Bağlamsal Yağcılığın Gizli Maliyeti: bir YZ okuryazarlığı müdahalesi
- [[sycophantic-ai-social-interaction-2026]] — Yağcı YZ, insan etkileşimini zamanla daha zahmetli ve daha az tatmin edici hissettirir
- [[ssaho-ai-academic-integrity-review-2025]] — Tespit polisliği yerine kültür inşası ve değerlendirme yeniden tasarımı
- [[young-people-learning-generative-ai-rapid-review-2026]] — Bilişsel teslim, verimli sürtünme ve üstbilişsel eşitsizlik
- [[fenton-oral-exams-ai-authentic-assessment-2025]] — Özgün, YZ’ye dirençli değerlendirme olarak sözlü sınavları yeniden düşünmek
- [[stromberg-generative-ai-learning-penalty-secondary-2026]] — Üretken YZ öğrenme cezası: ödevi dışarıya devretmek öğrenmeye zarar verir
- [[ai-overreliance-complex-adaptive-system-2026]] — YZ aşırı güveni karmaşık uyarlanabilir bir sistem olarak modelleniyor
- [[burneo-can-edtech-close-learning-gaps-2026]] — Koruma kaldırıldı, sınav puanlarını iyileştirmeden zarar ortadan kalktı
- [[munoz-misconduct-allegation-evidence-2026]] — Usulsüzlük suçlaması dosyaları kanıt olarak aslında ne içeriyor
- [[wright-transcription-not-generation-2026]] — Aşırı kapsamlı YZ kuralları ve onların yakaladığı öğrenciler
- [[sharma-judgment-visible-genai-assessment-2026]] — Uyumdan ziyade değerlendirici muhakeme olarak dürüstlük
- [[mulisa-students-genai-integrity-perspectives-2026]] — Öğrencilere göre GenAI bir hile aracı mı, öğrenme ortağı mı
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Uzaktan gözetimli sınavın öğrencilere ve eşitliğe etkisi
- [[leaton-gray-ai-digital-cheating-ethical-pedagogies-2025]] — YZ kaynaklı hileye karşı durumsal suç önleme: 183’ten 27 vakaya, beş disipline özgü yeniden tasarım (Leaton Gray, Edsall ve Parapadakis 2025)
- [[ji-student-voices-academic-integrity-scoping-2026]] — Öğrenci sözlerinin 38 çalışmasının önerdiği şey: birlikte oluşturulmuş netlik ve eğitici akıl yürütme, tespitin önünde (Ji 2026)
- [[li-genai-assessment-language-equity-2026]] — EAL yazarları için dil desteğinin nerede bittiği ve yer değiştirmenin nerede başladığı (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — YZ notlandırmaya karşı bir kötüye kullanım vektörü olarak istek metni enjeksiyonu (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Dürüstlüğün üzerindeki bağlayıcı kısıt olarak yönetişim: 130 maddelik gösterge çerçevesi (Coates, Croucher ve Calderon 2025)

- [[tie-responsible-genai-use-academic-writing-review-2026]] — Akademik yazımda üretken YZ’nin sorumlu öğrenci kullanımı: sınırlar, eğitici yaklaşımlar ve kanıt boşlukları üzerine bir kapsam incelemesi
