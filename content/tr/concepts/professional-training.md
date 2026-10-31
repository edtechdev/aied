---
connected_resources: [master-instructional-design]
title: İş Yeri Öğrenmesi
created: "2026-10-14T21:32:00-04:00"
type: concept
foundations: [ai-literacy, educational-development]
technology: [generative-ai, llm, simulation]
pedagogy: [lifelong-learning]
audience: [instructors, administrators, learners]
level: [adult learning, higher ed]
confidence: high
translation_of: concepts/professional-training
source_updated: "2026-10-28T16:44:25-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **İş yeri öğrenmesi** — iş gücü gelişimi, kurumsal öğrenme ve mesleki beceri edinimi için YZ’nin kullanımı. Mesleki eğitim, [[ai-education|AI in education]]’yi resmi okulun ötesine, iş yeri ve [[lifelong-learning|lifelong learning]] bağlamlarına taşır.

## Düşünülmesi Gerekenler

- İşte, bir sınıfta değil öğrendiğiniz bir beceri düşünün. O iş yeri öğrenmesini etkili kılan neydi ve bir YZ koçu bunu nasıl yineleyebilir veya geliştirebilirdi?
- Sayfanın [[career-development-and-readiness|Workforce Readiness]] Düzeyi çerçevesi, en yüksek yetkinlik aşamalarının "endüstri içi deneyim tarafından değil derslerle sınırlandığını" öne sürüyor. Bu, insanları nasıl eğitmemiz gerektiği — ve YZ [[simulation]] sınırları — için ne anlama gelir?
- Sanal hastalar ve eğitim benzetimcileri profesyonellerin güvenle pratik yapmasını sağlar. Bir benzetimci, ne kadar gerçekçi olursa olsun, hangi tür muhakeme ve kişiler arası becerileri yakalamakta zorlanabilir?
- 'Çifli Tren Sorunu', hızla değişen YZ becerileri ile politika ve [[curriculum-design|curriculum]] daha yavaş tempo arasındaki gerilimdir. Bugün öğrenenler için önceliklendirilecek kalıcı yetkinlikleri seçebilseydiniz, bunlar ne olurdu?
- Yetişkin öğrenenler, sıklıkla ekranlar aracılığıyla iş ile çalışmayı dengelemek zorundadır. YZ destekli mesleki eğitim bu dengeyi — özellikle veri, güven ve zaman çevresinde — nasıl hem olanaklı hem karmaşık kılabilir?

## Giriş

### Mesleki eğitimde YZ

- **Benzetim ve pratik:** [[adaptive-virtual-patient-psychotherapy-training|Virtual patient training]] ve [[astra-atco-training-simulator|ATCO training simulators]], YZ destekli mesleki pratik ortamları yaratır. [[teacher-education|teacher education]], YZ rol yapma benzetimi bunu uygulamaya dayalı öğretmeye taşır: [[zhuang-zhang-chatgpt-math-teacher-education-2026|Student GPT]], öğretmen adaylarının öğrenci hatalarını teşhis ve düzeltmeyi pratik yapabilmesi için bir [[misconceptions|misconception]] taşıyan ortaokul matematik öğrencisini benzetledi; TeachLivE gibi pahalı platformlara uygun maliyetli bir tamamlayıcı olarak uygulamaya dayalı [[teacher-role|teacher]] öğrenmesinin "uygulama yaklaşımlarına" uygun biçimde.

- **Gönüllü, yalnızca metin tabanlı bir prova hiçbir şeyi değiştirmedi.** İlk standart hasta derslerinden önce bir GPT-4o hastası sunulan 201 birinci sınıf tıp öğrencisinden 49’u onu kullanmış; heyecan, hazırlık, öz yeterlilik ve öz algılanan yetkinlik 84 kişilik kontrolden farklılaşmamıştır. Gerekçe veren 19 kullanmayan öğrenciden 6’sı teknik veya oturum açma sorunlarını belirtmiştir ([[jongkind-genai-patient-medical-communication-2026|Jongkind ve ark. (2026)]]).

[[ai-coaching-rl-skill-development|Wang et al. (2026)]] bir koçluk politikası dersi ekler: öğrenenin tahmini yetkinliğine karşı azalan yardım, benzetimci tur süresini %27,9 (p = 0,005) ve tur başına hataları 3,52 azalttı; oysa sabit bir takvim üzerindeki kural temelli azaltma, tur süresinde güvenilir bir değişiklik üretmedi.
- **Yaşam boyu öğrenme bütünleşmesi:** [[lifelong-learning]] ve [[adult-learning]] [[research-methods-aied|research]] mesleki eğitimi süregelen eğitime bağlar.
- **Kamu sektörü:** [[ai-adoption-training-public-sector|Public sector AI adoption]], devlet bağlamlarında eğitimi inceler.
- **İş gücü hazırbulunuşu çerçeveleri:** [[workforce-readiness-smart-manufacturing-wrl-2026|Smith et al.]], Teknoloji Hazırbulunuş Düzeyi ölçeğini dokuz yetkinlik aşamasına uyarlayan ve dört sütun üzerinden puanlanan bir İş Gücü Hazırbulunuş Düzeyi (WRL) çerçevesi önerir (dijital/[[ai-literacy|AI literacy]], siber-fiziksel akıcılık, [[human-ai-collaboration|human-machine collaboration]], veri temelli karar alma), bir "ince sütun yok" kuralı altında. Akıllı imalat projelerinden gelen kanıtlar, en yüksek hazırbulunuş aşamalarının derslerden çok endüstri içi deneyimle sınırlandığını gösterir — mesleki YZ eğitiminde iş bütünleşmeli öğrenmeyi zorunlu işaret eder.
- **Öğretmen ve işveren öncelikleri ayrışır.** 500 ABD’li öğretmene ilişkin bir anket ile bir işveren paneli, 26 YZ becerisinden yalnızca biri üzerinde — YZ ile güçlenen iş için gerçekçi beklentiler belirlemek — ve 26’sından yalnızca üçünün yarıdan fazla öğretmen tarafından öğretildiği konusunda uzlaştı ([[ithaka-sr-ai-skills-college-graduates-2026|Fried (2026)]]).
- **[[discipline-specific-aied|Domain-specific]] HP kanıtı incedir.** [[li-language-educators-genai-review-2026|systematic review of language educators]] (Li ve ark. 2026), 23 çalışmadan yalnızca üçünün yapılandırılmış [[educational-development|professional development]] bildirdiğini; ancak bunu yapanların bilgi, güven ve kimlikte kazanımlara yakınsadığını buldu — yapılandırılmış, disipline özgü eğitimin (teknik beceriyi pratik bilgelikle eşleştiren) hem kıt hem etkili olduğunun kanıtı; ve HP’nin farkındalık yaratma ve etikten uygulamalı araç ustalığına ve YZ ile geliştirilmiş derslerin ortak tasarımına doğru ilerlemeli olduğunun.
- **Öğretmen eğitimcilerinin mesleki gelişimi model oluşturma olarak:** [[adaptive-ai-model-teacher-educators-2025|Eyal (2025)]], 22 yükseköğretim öğretmen eğitimcisinin Uyarlanabilir Yapay-Zeka-Okuryazarlığı Modelini ortak tasarladığı, yıllık 180 saatlik bir kurs işletti; sabit yetkinlik merdivenlerini üç birbiriyle ilişkili eksenle (bağlam uyumu, mesleki ihtiyaçlar, dinamik gelişim) ve 20 maddelik yansıtıcı bir öz değerlendirme anketiyle değiştirdi. Tasarım öncülü, YZ okuryazarlığının durumsal olduğudur: kaynak kısıtlı bir ortamdaki öğretmen adayı, bir alan öğretmeni ve bir okul müdürü farklı yetkinlikler gerektirir; dolayısıyla mesleki gelişim standart bir rubrik yerine role özgü muhakemeyi hedeflemelidir.
- **Eğitimin hedeflemesi gereken:** alanın ölçüm temeli, tarif ettiği teknolojinin gerisindedir. 33 öğretmen YZ okuryazarlığı aracının sistematik derlemesinde, [[assessing-teachers-ai-literacy-measurement-tools-2026|Zainal, Mohd Matore and Maat (2026)]]; 29’unun (%87,9) genel YZ kavramlarını hedeflediğini, yalnızca dördünün (%12,1) — hepsi 2025’te yayınlanmış — üretken YZ’yi ele aldığını buldu. Araçlar eğitimin inşa etmesi amaçlananı izliyorsa, bu dağılım öğretmede üretken YZ yetkinliğini en az ölçülen ve en acil mesleki gelişim hedefi olarak işaretler.
- **İş gücü öngörüsü:** [[ai-engineering-computing-workforce-grey-literature-2026|Fletcher et al.]], YZ ve mühendislik/bilişim iş gücüne dair ABD gri literatürünü inceler; "Çifli Tren Sorunu"nu (acil politika karşısında hızlı değişim) çerçeveler ve otomatikleşen bir ekonomide insan merkezli işi sürdürmek için [[higher-ed|higher education]] kalıcı YZ yetkinliklerini, [[ethics]] ile [[governance]]’ı ve yükselen rollere uygun beceri temelli kimlik belgelerini (örneğin [[prompt-engineering]], YZ denetimi, [[educational-policy-ai|AI policy]]) önceliklendirmesini önerir.
- **Beceri sürdürücü tasarımlar verim ölçütleri altında kaybeder.** [[skill-sustaining-reliance-reflective-ai-engagement-2026|de Jong (2026)]], yansıtıcı etkileşimin mesleki işte YZ benimsemesini yönlendiren daha hızlı kararlar ve daha yüksek verim sözüyle çeliştiğini savunur: kontrollü bir çalışma sürtünmeyi absorbe edebilir, performansı hız veya miktarla ölçen bir ortam edemez; ve rakiplerin aynı desteği sürtünme olmadan sunduğu yerlerde beceri sürdürücü tasarımlar rekabet dezavantajına dönüşür — makalenin, sorunun etkileşim tasarımından çok kurumsal politika veya devlete ait olabileceğini söylediği bir durum.
- **İş yeri yetkinliği için sözlü değerlendirme.** Bir TVET tasarım çalışması, metin ağırlıklı değerlendirme ile mesleki niteliklerin belgelendirdiği sözlü, durumsal yetkinlikler arasındaki uzun süreli uyuşmazlığı ele alır ve etkileşimli sözlü değerlendirmeyi desteklemek için bir [[llm]] kullanır. Dört kohort boyunca ses formatı, 33 öğrencinin 21’i tarafından gerçekçi bulundu ve yazılı bir [[eportfolio|portfolio]] göre avantajı konusunda hiç karşıt yanıt yoktu; sistem tamamen çevrimdışı tek bir dizüstü bilgisayarda en fazla 12 eşzamanlı öğrenci için çalıştı, kayıtları 90 gün sonra sildi ve puanlamayı değerlendiricilere bıraktı ([[ai-supported-oral-assessment-tvet-2026]]). Bu, YZ’nin değerlendirilebilir yetkinlik yelpazesini mevcut yazılı formatları yalnızca otomatikleştirmek yerine genişlettiğinin somut bir örneğidir. Bununla birlikte kohortlar Düzey 3 otomotiv ve mühendislik sınıflarıydı, dolayısıyla kanıtlar bu sayfanın kapsadığı iş yeri beceri yükseltmesinden çok [[vocational-education|initial vocational provision]].

- **Anlayışın değerlendirilebilir hale geldiği yer toplantıdır.** Üretken bir araç analizi taslaklaştırdığında, cilalı bir araştırma güncellemesi artık stajyerin işi anlayıp anlamadığını göstermez; bu nedenle [[prunuske-cognitive-windows-research-meetings-2026|Prunuske ve Adams-Phillips (2026)]], bir özetin dışarıda bıraktığını yüzeye çıkaran istemlerle araştırma toplantıları için üç tanısal pencere önerir: üstbilişsel kalibrasyon, kavramsal açıklama ve işbirlikçi anlam oluşturma.

- **Ulusal bağlam değil, kurumsal koşullar hazırbulunuşu boşluklarını açıklar.** Çinli (n = 340) ve Kazak (n = 228) öğretim geliştirme merkezi kadrosundan 568 üniversite öğretim elemanının karşılaştırmalı bir anketi ([[faculty-development-centers-genai-training-optimization-2026|Bi, Araily, Lyu & Xiu, 2026]]), temel düzeyde Kazak kadrosunun yedi [[generative-ai|GenAI]] hazırbulunuş boyutunun tümünde önde olduğunu; en büyük boşlukların disiplinler arası aktarım, istek metni tasarımı ve YZ destekli değerlendirmede olduğunu buldu. Hiyerarşik regresyon ulusal açıklamayı çökertti: önceki GenAI kullanımı ve son zamanlardaki eğitim modele girdiğinde ülke farkı keskin biçimde düştü ve anlamlı olmaktan çıktı — %80’lik bir azalma —; ardından kurumsal destek, deneme için algılanan izin, [[multilingual-learning|multilingual]] kaynak erişimi, politika açıklığı ve risk duyarlılığı eklendiğinde. Maruziyet düzensiz dağılmıştı (Kazak kadronun belirgin bir çoğunluğu son altı ayda YZ eğitimi almıştı, Çinli kadronun yaklaşık dörtte biri karşısında) ve Çinli kadro hem daha yüksek politika açıklığı hem daha yüksek risk duyarlılığı bildirdi. Yapılandırılmış istek-görev eğitimi, geleneksel GenAI aşinalaştırmasını son test istek metni tasarımında geniş bir farkla geride bıraktı. Bu kanıta göre kadro hazırbulunuşu, içinde bulunduğu ulusal sistemden çok, bir merkezin sunduğu ve izin verdiği şeyle — hizmet ve izinle — üretilir.

- **Kısa eğitim yargıları kaydırır, niyetleri değil.** 100 Alman öğretmene ilişkin üç saatlik bir ön-son pilot çalışması ([[mesenhoeller-teachers-ai-differentiation-acceptance-2026|Mesenhöller and Böhme, 2026]]), farklılaştırma için YZ konusunda kısa bir uygulama yönelik oturumdan sonra algılanan yararlılığın (d = ,32) ve algılanan kullanım kolaylığının (d = ,25) anlamlı biçimde arttığını; davranışsal niyetin ise zaten yüksek bir temel düzeyden (M = 3,07) hareket etmediğini buldu. Yazarlar boşluğu, kabulün bir oturumun sağlayamayacağı koşullara — zaman, altyapı ve açık kurumsal kurallar gibi — bağlı olduğunun işareti olarak okurlar. Kısa formatlar yürütmeye değerdir, ancak olumlu yargıyı kullanıma dönüştüren, onları bu koşullarla eşleştirmektir.
- **Başlangıç eğitimi için tek seferlik atölyeler değil, süregelen izleme.** İlkokul matematiğinde ilk öğretmen eğitiminde YZ’e ilişkin 11 çalışmanın sistematik derlemesi ([[pinto-ai-initial-teacher-training-mathematics-review-2026|Pinto et al., 2026]]), dokuz müdahalenin tek bir oturum veya mevcut kurslara gömülü birkaç oturum olduğunu; tutumların genellikle sonradan bir kez örneklendiğini; ve etiğin yalnızca üç çalışmada yer aldığını buldu. Yazarlar, YZ yetkinliğinin hazırlık aşamasından staja ve mesleğin ilk yıllarına uzanan tüm eğitim dizisi boyunca, bu ilerlemeyi izleyen bir izleme ile gelişmesi gerektiğini savunur.
- **Olumlu algıları demografik özellikler değil, maruziyet ve tekrar izler.** 302 Türk ilkokul matematik öğretmeninin karma yöntem çalışmasında ([[cigerci-primary-teachers-perceptions-ai-mathematics-2026|Ciğerci and Uygun, 2026]]), önceki YZ eğitimi (t = 3,661) ve YZ kullanım sıklığı (F = 41,280) olumlu görüşlerle en tutarlı biçimde ilişkili değişkenlerken, isteklilik (M = 3,98) ve tutumlar (M = 3,82) kişisel deneyimin (M = 3,00) oldukça üzerindeydi. Yazarlar önceki eğitimi okulların harekete geçebileceği en açık kaldıraç olarak ele alır; bu da tek bir giriş yerine yinelenen, süregelen kullanımı işaret eder.
- **Rol rotasyonu yükü taşıyan yapı olarak.** Kazakistan’daki 62 öğretmen adayı eğitim psikoloğunun tasarım temelli bir çalışmasında ([[kenzhebayeva-ai-role-rotation-pedagogical-model-2026|Kenzhebayeva et al., 2026]]), öğrenciler sekiz hafta boyunca dört mesleki konumdan döngüsel olarak geçirildi ve üretken YZ ön fikirler sağladı. Yazarlar, değerin araçta değil rotasyonda yattığını savunur; çünkü her rol aynı vakayı farklı çerçeveledi ve sonraki döngülerde kuramsal gerekçelendirme talebi arttı. Ön-son yetkinlik ölçüsü toplamadıkları için, ölçülen kazanımlar yerine bağlılığı rapor ederler.

### Akademik eğitimden farklı olan

Mesleki eğitim, uygulamalı becerilere, doğrudan iş yeri ilgililiğine ve yetişkin öğrenen özelliklerine odaklanması bakımından akademik eğitimden farklıdır. [[adult-learning]] kuramı ve [[adult-learning]] ilkeleri mesleki YZ eğitimi tasarımını besler. Diğer sınırı [[vocational-education|vocational education and training]]: VET, mesleği henüz elinde tutmayanları kabul eder ve bir zanaat veya teknik nitelikle kapanır; dolayısıyla başlangıç mesleki hazırlığı ve onu belgelendiren nitelik çerçevelerini taşır; mesleki eğitim ise var olan bir rolden yola çıkar — beceri yenileme, süregelen mesleki eğitim veya satıcı sertifikası — ve VET’nin verdiği yetkinliği varsayar.

**Uzmanlığın yenilenmesi bir eğitim meselesi olarak.** Cognitive Commons çerçevesi ([[cognitive-commons-ai-expertise-regeneration|Lovett 2026]], İKY’nin kurumsal beceri yenilemenin ötesine, meslek düzeyinde emanetçiliğe gitmesi gerektiğini savunur: YZ’ye maruz kalan sektörlerde giriş düzeyi gelişimsel konumların kaldırılması, yalnızca 5–20 yıl sonra görünen zaman gecikmeli bir etkiyle, tüm kurumların bağımlı olduğu paylaşılan uzmanlık havuzunu tüketebilir. Bu, mesleki eğitimi bireysel yetkinlik gelişiminden kolektif ortak varlık bakımına yeniden çerçeveler.
**YZ üretimini doğrulama ile eşleyin ve dış ölçütler arayın.** [[crewscaler-ai-upskilling-framework|Nguyen et al. (2026)]], beş aşamalı bir beceri yükseltme hattında taslak ile teslim arasına otomatik halüsinasyon kontrolleri ve bir KOB denetimi koyar ve çerçevenin en güçlü iddialarını, kendi tanımlı başarı ölçütleri yerine bir NASBA CPE akreditasyonuna ve bir satıcı sertifika sınavına dayandırır.

## Yaygın yanlış anlamalar

**“Ders işi mesleki yetkinlik üretir.”** Bu sayfadaki çerçeve, en yüksek yetkinlik aşamalarını ders işinin değil sektöre gömülü deneyimin arkasına koyar; bu da bir eğitim programının talep edebileceği şey üzerinde gerçek bir sınırdır. Bir kurs önkoşulları kurabilir; kapılı aşama işin kendisini gerektirir.

**“Desteği bir takvime göre azaltmak, kanıta göre azaltmakla eşdeğerdir.”** Değildir. Yardımı öğrenenin *tahmini yetkinliğine* göre azaltmak benzetimci tur süresini **%27,9 (p = 0,005)** ve hataları **tur başına 3,52** azaltmış, oysa sabit bir takvime dayalı kural temelli azaltma güvenilir bir değişim üretmemiştir. Aynı miktarda destek, farklı bir sinyalle serbest bırakıldığında farklı bir müdahaledir.

**“YZ okuryazarlığı eğitimi roller arasında genellenir.”** Çoğu araç rol özgü yetkinliği ölçmez: **33 öğretmen YZ okuryazarlığı aracının** sistematik derlemesinde **29’u (%87,9)** genel YZ kavramlarını hedeflerken yalnızca **4’ü (%12,1)** işin gerçekte gerektirdiği pedagojik veya mesleki kullanımı ele almıştır. Genel araçlar üzerine kurulu bir program bir vekili ölçmektedir.

**“Benzetimci, iş yeri eğitiminin yerine geçer.”** Prosedürü geliştirir ve sonucu ortadan kaldırır; bu değerlidir ve tam olarak aktarılamayan kısımdır: güvenlik açısından kritik işte müfredat, sonucun kendisidir.

## Bağlı kavramlar
- [[lifelong-learning]]
- [[adult-learning]]
- [[vocational-education]]
- [[educational-development]]
- [[ai-literacy]]
- [[simulation]]
- [[higher-ed]]
- [[generative-ai]]
- [[llm]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[virtual-and-augmented-reality]] — sürükleyici uygulamanın en köklü olduğu yer

## Bağlı makaleler
- [[ai-engineering-computing-workforce-grey-literature-2026]] — Mühendislik ve Bilişim İş Gücünün Geleceğinde YZ
- [[workforce-readiness-smart-manufacturing-wrl-2026]] — YZ çağında akıllı imalat için İş Gücü Hazırbulunuş Düzeyi çerçevesi
- [[crewscaler-ai-upskilling-framework]]
- [[ai-coaching-rl-skill-development]]
- [[adaptive-virtual-patient-psychotherapy-training]]
- [[astra-atco-training-simulator]]
- [[ai-adoption-training-public-sector]]
- [[ithaka-sr-ai-skills-college-graduates-2026]] — HiBob YZ Becerileri Çerçevesi, öğretmenler ve işverenlerle doğrulandı
- [[cognitive-commons-ai-expertise-regeneration]] — Bilişsel ortak varlığın trajedisi: YZ ve uzmanlığın yenilenmesi
- [[li-language-educators-genai-review-2026]] — GenAI ile dil eğitimcilerinin uygulamaları ve gelişimi
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]]
- [[faculty-development-centers-genai-training-optimization-2026]] — Ulusal bağlam değil, kurumsal koşulların kadro GenAI hazırbulunuşu boşluklarını açıkladığını gösteren karşılaştırmalı anket (Bi ve ark. 2026)
- [[adaptive-ai-model-teacher-educators-2025]] — Öğretmen eğitimcileri uyarlanabilir bir YZ okuryazarlığı modeli ve yansıtıcı bir anket ortak tasarlıyor (Eyal 2025)
- [[assessing-teachers-ai-literacy-measurement-tools-2026]] — Öğretmen YZ okuryazarlığı araçlarının üretken YZ’nin gerisinde kaldığını ve eğitim hedefini işaretlediğini gösteren derleme (Zainal ve ark. 2026)
- [[mesenhoeller-teachers-ai-differentiation-acceptance-2026]] — Üç saatlik HP, Alman öğretmenlerinin algılanan yararlılığını ve kullanım kolaylığını artırdı, ancak farklılaştırma için YZ kullanma niyetini artırmadı
- [[pinto-ai-initial-teacher-training-mathematics-review-2026]] — İlkokul matematiğinde ilk öğretmen eğitiminde YZ derlemesi: kısa araç odaklı eğitim yeterli değildir
- [[cigerci-primary-teachers-perceptions-ai-mathematics-2026]] — Önceki YZ eğitimini ve kullanım sıklığını Türk ilkokul öğretmenlerinin olumlu algılarına bağlayan anket
- [[kenzhebayeva-ai-role-rotation-pedagogical-model-2026]] — YZ destekli mesleki hazırlık için yapılandırıcı mekanizma olarak rol rotasyonu
- [[skill-sustaining-reliance-reflective-ai-engagement-2026]] — Yansıtıcı YZ Etkileşiminde Beceri Sürdürücü Bağımlılığa Doğru Açık Sorular

- [[prunuske-cognitive-windows-research-meetings-2026]] — Araştırma toplantılarını veri güncellemelerinden yapay zeka çağında bilişsel pencerelere taşımak
- [[jongkind-genai-patient-medical-communication-2026]] — Lisans tıp öğrencilerinin tıbbi iletişim eğitiminde üretken YZ hastası kullanımı: yarı deneysel bir çalışma
