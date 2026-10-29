---
title: Sanal ve Artırılmış Gerçeklik
created: "2026-10-14T21:32:00-04:00"
type: concept
pedagogy: [embodied-learning, professional-training]
technology: [generative-ai, multimodal, simulation]
ethics: [accessibility]
confidence: high
discipline: [medical education, stem education]
translation_of: concepts/virtual-and-augmented-reality
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sanal ve Artırılmış Gerçeklik (VR/AR)** — öğrenme ortamlarının deneyimlendiği görüntüleme ve etkileşim katmanı: VR'de tamamen sentetik uzaylar; AR ve karma gerçeklikte fiziksel dünya üzerine bindirilmiş dijital içerik. YZ bu katmana iki yönden girer. Onu *üretir*, çünkü [[generative-ai|üretici YZ]] artık doğal bir dille yazılmış bir betimlemeyi, uzman bir geliştirici gerektirmeyen çalışan, tarayıcı tabanlı bir AR veya VR öğrenme aracına dönüştürür. Ve onun içinde *yaşar*: [[agentic-ai|aracılar]], [[pedagogical-agent|pedagogik aracılar]] ve [[rag|getirilmiş bilgi]], sürükleyici ortamın içinde bir öğrenene eller serbest rehberlik eder. Modalitenin ekran üzerine kattığı şey varlık hissi ve [[embodied-learning|bedensellik]]tir; maliyeti ise gerçekçilik, donanım ve orada bulunmaya ilişkin bedenin dayanma sınırıdır.

## Ele Alınması Gereken Sorular

- Modellenen ile gösterildiği yüzey arasındaki çizgi nerede düşüyor? Masaüstü bir hasta simülatörünü, öğrencilerin ziyaret edemediği bir yere yapılan VR bir saha gezisiyle karşılaştırın. Hangi farklılıkların öğrenmeyi değiştireceğini, hangilerinin yalnızca yenilik etkisine yol açacağını beklerdiniz?
- Bir pilot çalışma, öğrencilerin dalga boyunu ve genliği bir kaydırıcıdan çok bir el hareketiyle daha güçlü *hissetmiş* olduğunu bildirdi — ancak ölçtüğü şey algıydı, başarı değildi ve çalışma 29 öğrenci ve karşılaştırma grubu olmadan yürütülmüştür. Bildirilen bu "hissetme", bir aracı benimseme kararına ne ölçüde katkı sağlamalıdır?
- Üretici YZ, programlama geçmişi olmayan bir eğitmenin bir öğleden sonra çalışan bir AR simülasyonu kurmasına izin veriyorsa, [[physics-education|fiziği]] doğrulamak, gerçekçiliği değerlendirmek ve aracın bir kursa girip girmeyeceğine karar vermek konusunda hangi yeni sorumluluklar ortaya çıkar?
- YZ destekli hemşirelik simülasyonuna ilişkin bir derlemede, YZ yapılandırılmış iletişimde insan oyuncularla eşit düzeydeydi ancak dokunsal ve duygusal olarak karmaşık senaryolarda değildi. Öğrenenlerin bazı bölümleri YZ ile, diğerlerini insanlarla prova etmesini nasıl sıralarsınız?
- Bir sınıf içi VR çalışması minimal hareket hastalığı bildirdi; öte yandan engelli öğrenciler üzerine yapılan akıllı VR konulu meta-analitik tahmin istatistiksel olarak anlamlı değildi. Bir programın gözlük almaya yatırım yapmadan önce hangi ölçümleri isterdiniz?

## Giriş

Sanal ve artırılmış gerçeklik bir **modalite**dir, model değil: öğrenme ortamının öğrene ulaştığı katmanın kendisidir. Bu durum onu, öncelikle modellenen şey olan [[simulation]]'dan farklı bir eksen yapar. İkisi sık sık birbirine karıştırılır, çünkü sürükleyici ortamlar simülasyonların yaygın taşıyıcılarıdır; ancak ikisi birbirinden bağımsız olarak değişir — masaüstü bir hasta simülatörü VR olmadan simülasyondur ve gerçek bir alet üzerindeki bir AR kaplaması, simülasyon olmadan VR'dir. Eksenleri ayırı tutmanın nedeni tasarımdır: uygulamayı risksiz hale getirme kararı ile onu bedenselleştirme kararı birbirinden farklıdır; ikisi farklı maliyetler, farklı başarısızlık biçimleri ve farklı kanıtlar taşır. VR/AR, bir simülasyonun **taşıma katmanıdır** ve [[game-based-learning|oyun temelli öğrenmenin]] yakın bir akrabasıdır; öğrenmenin [[embodied-learning|bedensel]] ve [[situated-learning|durumsal]] açıklamalarını işlerselleştirir ve [[experiential-learning|deneyimsel]] ile [[active-learning]] uygulamasının içinde yer alır.

YZ bu modaliteyi şimdi iki ucundan şekillendirir. İçeriği *üretir*, çünkü [[generative-ai|üretici YZ]] yapılandırılmış bir doğal dil istek metnini çalıştırılabilir bir AR veya VR eserine dönüştürerek üretimi eskiden sınırlayan uzman programlama becerisini ortadan kaldırır. Ve ortamın içinde *yaşar*: [[agentic-ai|aracılar]], [[pedagogical-agent|pedagogik aracılar]] ve [[rag|getirilmiş alan bilgisi]], içinde rehberlik sağlar — eller serbest, gerçek zamanlı, öğrenenin gözlük taktığında danışamayacağı kaynaklara dayalı.

## Modalitenin Kattığı Şey

VR/AR lehine olan gerekçe, bilgi aktarımından çok varlık hissi ve [[embodied-learning|bedensellik]] üzerine kuruludur. Paylaşılan bir sanal uzay ayrıca birlikte bulunmayı coğrafyadan ayırabilir: gerçek zamanlı bir senkronizasyon katmanı üzerine kurulu bir VR sınıfı, konumdan bağımsız olarak öğretmenleri ve öğrencileri aynı odada ve aynı 3D fen materyallerini işleyerek bulundurdu ve en fazla yirmi katılımcıyı hedef aldı. Meta Quest 3 üzerinde 10 öğrenciyle yapılan bir saatlik oturumda, Sistem Kullanılabilirlik Ölçeğinde iyi bir [[usability-research|kullanılabilirlik]] ve minimal [[simulation]] hastalığı bildirildi; çalışmanın kendi zayıflığı ise arayüz tutarlılığıydı — ve tasarımcıları, katılımcılar katıldıkça kare hızının düştüğü önceki eşler arası mimarileri bilerek kaçındı; bu da varlık hissinin mühendislikle sınırlı olduğunun bir hatırlatıcısıdır. Yüzeyin tek başına ne getirdiği konusunda daha kontrollü karşılaştırmalar aybaşı bir tablo çiziyor: mühendislik mekaniğinde yapılan 24 katılımcılı bir çalışma, karma gerçeklik uygulamalarının ve fiziksel araç kitlerinin sınıf öğretimine göre [[student-engagement|katılımı]] artırdığını, ancak karmaşık görselleştirmelerin her koşulda öğrenenler için zor kaldığını buldu. Güvenilir etki katılımdır; anlayış değil.

## Üretici YZ Üretim Katmanı Olarak

Kimin sürükleyici bir araç kurabileceğini tanımlayan bariyer büyük ölçüde ortadan kalktı. Dört öğeli bir istek metni yapısı — **araçlar, görüntüleme, el kontrolleri, iyileştirme** — kullanarak, kodlama geçmişi olmayan bir [[teacher-role|öğretmen]] veya öğrenci, bir kameradan başka bir şey gerektirmeyen tek bir HTML dosyası olarak çalışan, tarayıcı tabanlı, elle kontrollü bir AR fizik simülasyonu üretebilir ve ardından neyin ters gittiğini düz bir dille betimleyerek onu iyileştirebilir. Hareket dokunmatik ekranlardan tanıdıktır: iki parmakla sıkıştırma ve açma, bir resmi büyütmek yerine fiziksel bir büyüklüğü ayarlar; böylece parmakları dikey açmak genliği yükseltir, yatay açmak dalga boyunu uzatır ve lambayı tayfın kırmızı ucuna kaydırır. Aynı yapı genelleşir: parmak ucunun etrafındaki Coulomb alanı odaya yayıldı, iki el zıt yükler olarak işlendi ve manyetik kuvvet için sağ el kuralı, öğrenenin kendi eli üzerine çizildi — kasıtlı olarak **aynalanmadan** işlendi, çünkü aynalama öğretilen kuralın tam tersine çevirecekti.

Pilot çalışma hem cesaret verici hem de ön nitelikte. Giriş düzeyi bir radyasyon fiziği kursundaki 29 ikinci yılı öğrencisiyle (tıbbi görüntüleme öğrencileri), 29'un tamamı hareketin dalga boyunun ne olduğunu "hissetmelerine" yardımcı olduğunu kabul etti (ortalama 4,52), genlik kontrolü en yüksek puanı aldı (4,59), %93'ü havadaki dalgayı kontrol etmeyi doğal buldu ve %86'sı normal öğrenmeye göre daha katılımlı ve odaklı hissettiğini bildirdi. Kanıt ise yalnızca algıya ilişkin, tek sınıflık ve karşılaştırma grubu olmadan toplanmıştır — bu nedenle dürüst okuma şudur: [[prompt-engineering]] üretim bariyerini ortadan kaldırmıştır ve bu durum bedenselliğe ilişkin temel soruyu *test edilebilir* kılar; soruyu yanıtlamış olduğunu göstermez.

## Sürükleyici Ortamın İçindeki YZ

İkinci yön, YZ'nin üretmeyi bırakıp gözlüğün içinde öğretmeye başladığı yerdir ve [[rag|getirme dayanağı]]nın yapısal hale geldiği yer orasıdır. Yüksek doz oranlı braki terapi için bir aracısal sürükleyici eğitim platformu, tedavi odasının bir dijital ikizini kurdu — anatomik olarak kesin hasta modelleri, kateterler, yükleyiciler, aplikatörler — böylece eğiticiler bir aplikatörün risk altındaki organlara göre uzamsal yönelimini, bir koruma odası, canlı bir radyoaktif kaynak veya fiziksel bir pelvik muayenenin gizlilik riskleri olmadan görebildi. [[medical-education|klinik]] kılavuzlara dayalı bilgiye sahip bir yardımcı, üç kademeli bir ses arayüzü (kulaklık mikrofonu → arka uç çevirisi ve niyet analizi → uzamsallaştırılmış konuşma) yoluyla eller serbest rehberlik sağladı ve bu da karmaşık manevralar sırasında kontrolcü bağımlılığını ortadan kaldırdı. Teknik olarak işe yaradı: 50 Monte Carlo çalıştırmasında uçtan uca 3–5 saniyelik gecikme, 52 uzman tarafından kaleme alınmış soru-cevap çifti üzerinde 0,93 üzerinde bağlam hatırlama ve 0,87 cevap alaka düzeyi; tıbbi bir gömme modeli ise cevap bütünlüğünü iyileştirdi.

Onun boşlukları, bu kalıbın güncel sınırını tanımlar. Değerlendirme, nesnel ölçütler ve tek bir alan uzmanı kullanıcısıydı, öğrenenler değildi; otomatik [[assessment]] veya [[adaptive-learning|uyarlanabilir geri bildirim]] yoktu; ve yardımcı ona verilen belgelerin ötesine geçemez, bu nedenle kuruma özgü protokoller ve nadir senaryolar yetkinliğinin dışında kalıyordu. Başka bir deyişle, sürükleyici ortamların içindeki öğretim zekası hâlâ çoğunlukla ölçüm değil, **rehberliktir** — ve aynı platform mimarisi, [[llm|model çıkarımı]] yerel bir GPU arka ucuna devredildiğinde, eller serbest rehberliği kullanılabilir olacak kadar hızlı kılan şeydir.

Eksik kalan bu ölçüme ilişkin bugüne kadarki en net girişim klinik bir ortam yerine mesleki bir tasarım stüdyosundan geliyor. 12 haftalık bir iç mimarlık kursunda, dijital insan olarak işlenen bir LLM destekli yardımcıyla donatılmış bir VR ortamı (kulaklıklar ve bir 3B modelleme aracı), geleneksel [[project-based-learning|proje temelli]] öğretimle karşılaştırıldı; yardımcıya her aşama için ayrı bir rol verildi — kaynak önerisi ve görev ayrıştırma, bilgi haritalarıyla kademeli sorgulama, simüle edilmiş tasarım etkileri ve kusur tespiti, ardından öğretmen için söylem günlüğü tutma ([[ai-ive-pbl-vocational-design-creativity-2026|Jin ve ark., 2026]]). 63 geçerli yanıt üzerinde sürükleyici-artı-aracı koşulu, belirgin şekilde daha yüksek tasarım yeteneği (η²p = .138) ve yaratıcılık yeteneği (η²p = .111), bilişsel (d = 0,90) ve davranışsal (d = 0,75) [[student-engagement|katılım]], motivasyon (d = 0,74) ve memnuniyet (d = 0,69) üretti — bildirilen [[cognitive-offloading|bilişsel yük]] daha yüksek değil, daha *düşük* oldu (d = −0,52); yazarlar bunu yardımcının arama ve disiplinler arası bütünleştirme çabasını azaltmasına bağlıyor. Soruyu çözümlemeden önce iki sınır bu sonucu silikleştiriyor: fikir özgünlüğü ve [[affective-computing|duygusal]] katılım değişmedi ve her sonuç [[self-report-measures|öz bildirime]] dayalı; ne eser değerlendirmesi ne de kulaklık günlükleri var.

Karşılaştırılabilir bir tasarım eğitimi uygulamasıyla yapılan tezat öğreticidir. Bir [[generative-ai|üretici YZ]] artı çok kullanıcılı XR hattı kullanan mimarlık stüdyosu, bunu kullanan ekiplerde tasarım [[self-efficacy]] öz yeterlilik güveninde *düşüş* ve gizli panel değerlendirmelerinde hiçbir avantaj bulamadı. İkisi arasındaki fark donanımdan çok orkestrasyondadır: mesleki çalışma, aşama yapısını, yardımcının her aşamadaki rolünü ve değerlendirme rubriğini müdahaleden önce sabitledi ve üretken yeteneği fikir özgünlüğünden ayrı ölçtü.

Aynı kalıbın eğitmen odaklı versiyonu daha genç ve daha kırılgandır. [[luminote-llm-vr-stage-lighting-education-2026|Liang ve ark. (2026)]], bir sahne ışıklandırma eğitmeninin, uzamsal çıpada bir lazer işaretçiyle niyetini bir VR sahnesine söylemesine izin verdi ve bir [[llm]]'nin bunu, eğitmen tarafından gözden geçirilebilir uzamsal ek açıklamalara, çalıştırılabilir ışıklandırma gösterilerine ve talep üzerine jargon açıklamalarına dönüştürmesini sağladı. 55 istek metni ve 531 üretilmiş eylem üzerinde, yardım en güçlü olduğu yer etkileyici, belirtilmemiş hedeflerdi (245 görsel efekt eyleminin 212'si uygulandı, %86,5) ve en zayıf olduğu yer ise fikstür düzeyindeki taleplerdi; burada reddedilen 28 eylemin 26'sı, modelin yanlış fikstüre çözdüğü "sol ışık" gibi yön bildiren referanslara dayandı — bağlayıcı kısıt, çalıştırılabilirlik değil, sahnenin uzamsal referans çerçevesinde dayanak bulmaktı. Eğitmenler önerileri bir cevap olarak değil, bir [[human-in-the-loop-ai|kontrollü iyileştirme süreci]] olarak kullandı: reddedilen veya değiştirilen 147 eylemin 127'si (86,4%) yeni bir istek metniyle izlendi ve yalnızca biri elle ayarlamayla. Çalışmanın en uyarıcı sonucu temsildir — uzman akıl yürütmesini dışa vuran ek açıklamaların, acemilerin anladığıyla güvenilir biçimde örtüşmediği görüldü; dolayısıyla sürükleyici YZ öğretimi, yukarıdaki öğretim durumlarının dayanak sorununu ve ikinci bir sorunu da taşır: eğitmen yetkinliği ile öğrenen kavrayışı aynı hedef değildir.

## Kanıtların Gösterdiği

VR/AR lehine en güçlü kanıt karşılaştırmalı ve [[discipline-specific-aied|disipline özgülüdür]]. Yabancı dil olarak [[english-education|İngilizce]] öğretiminde yeni ortaya çıkan [[ai-technologies|teknolojileri]] inceleyen 33 deneysel ve yarı deneysel çalışmanın (N = 3.181) bir [[meta-analysis-systematic-review|meta-analizi]], küçükten orta düzeyde bir genel etki (g = 0,38) ve bunun içinde **en büyük etkilerin VR/AR'da** olduğunu buldu; kazanımlar eğitim düzeyiyle arttı ve alıcı becerilere göre üretken becerileri (konuşma, yazma) öne çıkardı.

Karşıt kanıt da aynı ölçüde bilgilendiricidir. [[special-education|engelli öğrencilere]] yönelik YZ temelli müdahalelerin ilk meta-analizinde — 29 çalışma, 239 etki büyüklüğü, orta düzeyde genel etki g = 0,588 — akıllı VR sistemleri g = 0,528 üretirken **istatistiksel olarak anlamlı değildi**; bilgisayar yazılımları 0,959, robotlar ise 0,509'a ulaştı. Yayın yanlılığı vardı ve trim-and-fill genel tahmini g = 0,269'a düşürdü. Örüntü, sürükleyiciliğin başarısız olduğu değil; etkilerinin küçük, heterojen ve belirli müdahalenin nasıl tasarlandığıyla ve karşılaştırıldığıyla hassas olduğudur.

Bilgi tabanındaki en net olumsuz sonuç bir stüdyo uygulamasından gelir, modalitelerin karşılaştırılmasından değil: 27 öğrencili bir mimarlık tasarım stüdyosunda, üretici YZ artı çok kullanıcılı XR hattı kullanan ekipler, normal kurs işleyişiyle çalışan ekiplere göre tasarım [[self-efficacy]] öz yeterlilik güveninde (β = −1,675) ve sonuç beklentisinde (β = −2,088) daha fazla düşüş yaşadı; sunumlarının uzman panel değerlendirmelerinde anlamlı bir fark yoktu ([[genai-xr-architectural-design-education-2026|Xiao ve ark., 2026]]). Yazarlar bunu, gerçek sürtünmeyle birlikte aşamaya bağlı birbirini tamamlama olarak açıklıyor — belirsiz fikirleri dışa vurmak için üretici YZ, uzamsal ve ölçek değerlendirmesi için XR — buna ek olarak kontrol, boyutsal gerçekçilik, paylaşılan dikkat ve hareket konforu sorunlarının yanı sıra; bu da sürükleyici araçların yetenek kadar etkileşim maliyeti de eklediğinin bir hatırlatıcısıdır.

## Gerçekçilik, Varlık ve Özgünlük Boşluğu

Sürükleyici uygulama kişilerarası ve prosedürel beceri için kullanıldığında, sınırlayıcı etmen görsel gerçekçilik değil hissedilen özgünlüktür. YZ destekli hemşirelik simülasyonunun (19 çalışma, N = 1.253) bir [[mixed-methods-research|karma yöntemli]] derlemesi, YZ'nin bilişsel bilgi ve duygusal sonuçlar için etkili olduğunu ancak karmaşık psikomotor beceriler için tutarsız olduğunu buldu ve nedeni adlandırdı: duygusal rezonansı, sözsüz ipuçlarını tanımayı, dokunsal ve fiziksel [[summative-assessment|muayene]] boyutlarını kapsayan bir **özgünlük boşluğu**. Onun pratik önerisi, bir **kademeli simülasyon sürekliliğidir** — YZ, temel iletişim ve hikâye alma gibi yüksek düzeyde yapılandırılmış hedeflere iyi uyarken; ileri düzey psikomotor ve duygusal olarak karmaşık senaryolar insan standartlaştırılmış hastalarına ve klinik uygulamaya aittir. Teknik istikrarsızlık sorunu derinleştirir: konuşma tanıma gecikmeleri yabancı [[cognitive-offloading|bilişsel yük]] ve kaygı enjekte eder; bu da kararlılığı ve gecikmeyi uygulama ayrıntıları değil, tasarım kolları haline getirir.

Aynı mantık, varlık hissinin neden otomatik olarak iyi olmadığını açıklar. Hareket hastalığı, arayüz tutarsızlığı, donanım maliyeti ve eşit olmayan cihaz erişimi, bir sürükleyici ortamı kullanabilenler konusunda belirleyicidir; modalitenin [[equity-in-ai-education|eşitlik]] sorularının [[accessibility]] ve [[inclusive-learning]] ile bağlantılı olmasının, bunlardan ayrı durmasının nedeni budur.

## Bağlı kavramlar

- [[simulation]] — sürükleyici ortamların genellikle gösterdiği şey; modalite değil, model
- [[embodied-learning]] — modalitenin yararlanması beklenen mekanizma
- [[multimodal]] — öğrenme kanalları olarak jest, ses ve uzamsal girdi
- [[situated-learning]]
- [[experiential-learning]]
- [[game-based-learning]]
- [[professional-training]] — sürükleyici uygulamanın en kökleşmiş olduğu ortam
- [[generative-ai]] — yeni üretim katmanı
- [[prompt-engineering]] — programcı olmayanların sürükleyici araçları nasıl kurup iyileştirdiği
- [[agentic-ai]]
- [[pedagogical-agent]]
- [[rag]] — gözlüğün içinde dayanaklı rehberlik
- [[intelligent-tutoring]]
- [[visualization]]
- [[medical-education]]
- [[accessibility]]
- [[inclusive-learning]]
- [[trust-calibration]] — gerçekçilik ve öğrenenin onun sınırlarına ilişkin farkındalığı
- [[cognitive-offloading]] — yabancı yük olarak gecikme ve istikrarsızlık
- [[edtech-platform]] — senkronizasyon, gecikme ve çok yerleşkeli varlık
- [[arts-design-and-media-education]]

## Bağlı makaleler

- [[genai-ar-physics-simulation-prompt-2026]] — elle kontrollü AR fizik simülasyonları üreten dört öğeli istek metni; 29 öğrencili pilot, yalnızca algıya dayalı kanıt
- [[mixed-reality-engineering-learning]] — mühendislik mekaniğinde karma gerçeklik uygulamalarına karşı fiziksel araç kitleri ve sınıf ortamı; katılım artıyor, karmaşık görselleştirme hâlâ zor
- [[medgame-llm-medical-education-gamification]] — YZ ile oyunlaştırılmış tıbbi eğitim
- [[tech-enhanced-tabletop-cybersecurity-education]] — siber güvenlik eğitiminde artırılmış masaüstü senaryolar
- [[genai-xr-architectural-design-education-2026]] — İşbirlikçi Mimarlık Tasarımı Eğitiminde Üretici YZ ve Genişletilmiş Gerçeklik: Keşif Amaçlı Bir Stüdyo Çalışması
- [[ai-ive-pbl-vocational-design-creativity-2026]] — AI-IVE-PBL: LLM destekli bir öğretmen yardımcısıyla sürükleyici VR tasarım stüdyosu, geleneksel PBL'ye karşı değerlendirildi (Jin ve ark. 2026)
- [[luminote-llm-vr-stage-lighting-education-2026]] — LumiNote: VR sahne ışıklandırma eğitiminde LLM destekli çok kipli öğretim ve dayanağın nerede çöktüğü (Liang ve ark. 2026)
