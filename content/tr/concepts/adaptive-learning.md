---
title: Uyarlanabilir Öğrenme
created: "2026-10-14T22:48:00-04:00"
type: concept
pedagogy: [scaffolding]
technology: [cognitive-diagnosis, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
confidence: high
translation_of: concepts/adaptive-learning
source_updated: "2026-10-28T19:24:33-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Uyarlanabilir öğrenme** — bireysel öğrenen özelliklerine ve performansına göre içerik, hız ve öğretim stratejilerini ayarlayan YZ kaynaklı eğitim sistemleri. Uyarlanabilir öğrenme, [[ai-education|eğitimde YZ]] [[research-methods-aied|araştırmasının]] çoğunun işletimsel hedefidir: [[student-modeling|öğrenci modellerini]] kullanarak öğretimi kişiselleştirmek.

## Düşünülmesi Gerekenler

- “Uyarlanabilir”, “kişiselleştirilmiş”, “bireyselleştirilmiş” ve “özelleştirilmiş” öğrenme sıklıkla birbirinin yerine kullanılır — ama araştırmalar bunların aynı şey olmadığını göstermektedir. Her sözcüğün ne anlama geldiğini varsayıyorsunuz ve bu varsayımlar nerede yanlış olabilir?
- Uyarlanabilir bir sistem, bildiklerinize ilişkin bir modele dayanarak içerik ve zorluğu ayarlar. Bu model öğrenmeniz hakkında yüzeysel veya güvenilmez sinyallere dayanırsa neyin ters gidebileceğini düşünüyorsunuz?
- Temel bulgulardan biri, ustalığı doğru yanıtlardan çıkaran sistemlerin alıştırmayı çok erken kesebilmesi — bir eylemden kaçınmayı öğrenmeden önce. “Doğru” olmanın sizi gerçek bir duruma hazırlıksız bıraktığı bir beceri düşünebilir misiniz?
- Aşırı uyarlama, öğrencilerin derinlemesine öğrenmesi için gereken üretken mücadeleyi ortadan kaldırabilir. YZ mücadele ettiğiniz anda işleri kolaylaştırmaya devam ederse öğrenen tam olarak neyi kaybeder?
- Meta-analiz, uyarlama mekanizmasının — belirli araç kuşağından değil — [[learning-gains|öğrenme kazanımlarını]] ittiğini göstermektedir. “Nasıl”ın “hangi araç”tan daha önemli olduğu ortadaysa, uyarlanabilir yazılım seçerken neyi aramalısınız?
- LLM temelli öğretmenler artık yalnızca zorluğu değil dili ve açıklama biçimini de uyarlayabilir. Bir şeyin açıklanma biçimini kişiselleştirmek ne zaman öğrenmeye yarar ve ne zaman öğrenenin kendi etkenliğini sessizce aşındırabilir?

## Giriş

### Temel mekanizmalar

- **Ölç-model-uyarla döngüsü:** [[knowledge-tracing]] öğrencinin ne bildiğini tahmin eder, [[student-modeling]] öğrenciyi temsil eder ve sistem buna göre zorluğu, içeriği ve [[feedback]]’i uyarlar.
- **Ölçekte kişiselleştirme:** [[personalized-learning]] sistemleri, her öğrenciye özgü öğrenme yolları sunmak için uyarlanabilir algoritmalar kullanır. [[deeptutor]] ve [[ai-powered-personalized-learning-elementary-fractions-2026|ilkokul kesir öğretmenleri]] uyarlanabilir kişiselleştirmeyi uygulamada gösterir.
- **İçerik sıralama:** [[adaptive-pretesting-retention|Uyarlanabilir ön sınav]] ve [[adapt-adaptive-lesson-plan-transformer|ders planı dönüştürücüleri]] sunulan içeriğin sırasını ve türünü optimize eder.
- **ITS tümleşmesi:** [[intelligent-tutoring|Akıllı öğretim sistemleri]] kanonik uyarlanabilir öğrenme platformudur; teşhis ile uyarlamayı birleştirir.
- **AutoML kaynaklı profilleme ve teşhis:** Geleneksel eğitim modelleri çok kaynaklı, heterojen öğrenme davranışı verisini işlemekte zorlanır; bu da öğrenci profillemesini ve teşhis modeli gelişimini sınırlar. Otomatik [[machine-learning|makine öğrenmesi]] ile yönlendirilen kişiselleştirilmiş bir sinirsel bilişsel mimari arama çerçevesi, [[multimodal|çok yöntemli]] heterojen eğitim verisini heterojen yöntemlerle tümleştirir, heterojen öğrenci profillerine uyarlanmış teşhis modelleri üretir ve öğrenme süreçlerinin dinamik analizini statik analize tercih eder.

### Etkililik kanıtı

Bilgi tabanı karışık kanıt belgeler: uyarlanabilir sistemler, uyarlama güvenilir [[student-modeling|öğrenci modellerine]] dayandığında sonuçları iyileştirir; ama kötü kalibre edilmiş uyarlama öğrenmeye zarar verebilir. [[personalized-learning|Kişiselleştirme araştırması]], etkili uyarlamayı yüzeysel özelleştirmeden ayırır. [[khalifeh-redefining-personalized-learning-ai-2026|Sistematik derlemeler]], “uyarlanabilir”, “kişiselleştirilmiş”, “bireyselleştirilmiş” ve “özelleştirilmiş” öğrenmenin tutarsız biçimde kullanıldığını bulur — dolayısıyla etki büyüklükleri uyarlamanın nasıl işletimselleştirildiğine ağır biçimde bağlıdır ve alan bütünleşik bir çerçeve çağrısında bulunur.

959 kaydı 22 yükseköğretim müdahalesine indiren bir PRISMA 2020 derlemesi, uyarlanabilir yolları ve öneri sistemlerini önde gelen YZ uygulamaları arasında sayar; ama çalışmaların çoğu mevcut uygulamayı iyileştirmiş, dönüştürmemiştir ([[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh ve ark. (2026)]]).

**Uyarlamayı iten pedagojik temellendirme, teknik yetenek değil.** 127 akıllı öğretim çalışmasının 15 yıllık derlemesi, sistemlerin çoğunun teknolojinin ne yapabileceği çevresinde kurulduğunu, belirtilmiş bir pedagojik ilke çevresinde kurulmadığını bulur ve ortalama ITS kazancını insan özel dersinin yüzde 98’ine karşı yaklaşık %20 olarak konumlandırır ([[zerkouk-comprehensive-review-its-2025|Zerkouk ve ark. (2025)]]).

İki yıllık bir ilçe RCT’sinde bağlayıcı kısıt uyarlama mekanizması değil benimsemeydi: kaydı tek adıma indirmek, ilk oturum benimsemesini yalnızca tasarım değişiklikleriyle yaklaşık %45’ten %83’e çıkarmış ve niyet-ile-tedavi kazanımları benimseme arttıkça yükselmiştir ([[virtual-tutoring-computer-assisted-learning-takeup-2026|Oreopoulos ve ark. (2026)]]).

44 çalışmanın PRISMA uyumlu bir derlemesi, katılım literatürünün davranışsal katılıma yattığını ve etken katılımda en ince olduğunu bulur; ALEKS ve W-Pal boylamsal çalışmalarında aracın yeniliği solduğunda zaman içinde azalan katılım biçiminde bir yenilik etkisi bildirir ([[simon-student-engagement-adaptive-learning-2026|Simon, Zeng ve Fryer (2026)]]).

### YZ çağı: LLM temelli uyarlama ve riskleri

[[generative-ai|Üretken yapay zeka]], uyarlanabilir sistemlerin yapabileceklerini genişletti — konuşmalı [[agentic-ai|etken]] öğretmenler, [[rag]] temelli içerik ve [[llm]] kaynaklı [[intelligent-tutoring|özel ders]] yalnızca problem zorluğunu değil dili ve açıklama biçimini de uyarlar (ör. [[learnmate2-llm-adaptive-learning|LearnMate-2]], [[deeptutor]], [[chudziak-ai-math-tutoring-platform|çok etkenli uyarlanabilir özel ders]]). Bununla birlikte LLM temelli uyarlama yeni riskler getirir: güvenilir [[student-modeling|öğrenci modelleri]] olmadan uyarlama yüzeysel sinyallere dayanabilir; aşırı uyarlama öğrencilerin ihtiyaç duyduğu üretken mücadeleyi azaltabilir ([[desirable-difficulties]], [[cognitive-offloading]] sayfalarına bakın); kişiselleştirme ile öğrenci [[agency]]’sini koruma arasındaki denge açık bir tasarım sorusudur ([[agentic-ai|etken YZ]] sayfasına bakın). Uyarlamanın öğrenci kaynaklı bir çeşidi hiçbir [[student-modeling|öğrenci modeli]] olmadan çalışır: Sidorkin’in (2026) yüksek lisans kursunda okumalar, yalnızca öğrenciler onları yeniden çerçevelemek, derinleştirmek, sadeleştirmek veya yerelleştirmek için takip soruları sorduğunda ayarlanmıştır ve anlama yönelimli istekler güvenilir biçimde daha yoğun iskeleleme üretmiştir (temel metinden 3,4 kata 8,7 kata daha fazla tanımsal işaretleyici); bu nedenle her okuma için en az üç takip sorusu isteğe bağlamak materyali bir etkileşime dönüştürmüştür. Aynı zamanda uyarlama yükünü öğrenciye taşır: burada uyarlama yalnızca öğrenci ne isteyeceğini biliyorsa gerçekleşir.

### Kişiselleştirilmiş öğrenme ve akıllı öğretimle ilişkisi

Uyarlanabilir öğrenme sıklıkla [[personalized-learning|kişiselleştirilmiş öğrenme]] ile karıştırılır ama ikisi farklıdır. **Uyarlanabilir öğrenme** *mekanizmadır* — bir öğrenci modeline dayalı içerik, hız ve zorluğun gerçek zamanlı ayarı. **Kişiselleştirilmiş öğrenme**, bütün öğrenme deneyimini bir bireye uydarmanın *daha geniş hedefidir*; gerçek zamanlı uyarlama bunun bir uygulamasıdır. Uyarlanabilir sistemler kişiselleştirmeye giden kanonik *araçlardır*. [[intelligent-tutoring|Akıllı öğretim]] klasik *platformdur*: ITS teşhis (öğrenci modelleme, bilgi izleme) ile uyarlamayı birleştirir ve LLM temelli öğretmenler konuşmaya dayalı biçimde uyarlar. [[personalized-learning|Kişiselleştirilmiş öğrenme]] ile birlikte uyarlanabilir öğrenme, [[student-modeling|öğrenci modelleme ve uyarlanabilir öğretim]] ailesinin uygulama tarafı bir üyesidir — [[student-modeling|öğrenci modelleme]], [[knowledge-tracing]] ve [[cognitive-diagnosis]] ürettiği öğrenci temsillerini tüketir.

### Araştırma kanıtı

- **Uyarlanabilir + YZ araçlarına ilişkin [[meta-analysis-systematic-review|meta-analitik]] kanıt.** [[burneo-can-edtech-close-learning-gaps-2026|Dünya Bankası meta-analizi]], 14 [[rct|RCT]]’yi birleştirerek uyarlanabilir bilgisayar destekli öğrenme, akıllı öğretim ve üretken YZ’yi ortak bir ölçekte toplar; iki teknoloji kuşağı arasında anlamlı fark olmaksızın ortalama öğrenme kazancını yaklaşık 0,125 standart sapma olarak tahmin eder — kazanımları itenin uyarlama mekanizması, belirli araç kuşağı olmadığının kanıtı.
- **Dinamik alanlarda karşılaştırılan uyarlanabilir algoritmalar.** [[graph-its-adaptive-algorithms-2026|Grafik temelli ITS araştırması]], dinamik müfredatlar için grafik temelli bir bilgi temsili çerçevesinde çoklu uyarlanabilir öğrenme algoritmasını (Bayesyen bilgi yayılımı ve sezgitsel bulanık mantık dâhil) karşılaştırır.
- **Bir uyarlama mekanizması olarak RL, ampirik olarak eşlenmiş.** [[riedmann-reinforcement-learning-education-review-2026|Riedmann, Schaper ve Lugrin (2025)]], 89 eğitimde RL çalışmasını sentezler ve uyarlamanın içerikle ilgili (öğretim sıralama/içerik planlama, n = 53) ve rehberlikle ilgili (ipuçları, [[feedback]], etkinlik seçimi, n = 36) mekanizmalara ayrıldığını bulur — RL’nin istatistiksel olarak anlamlı üstünlüğünü içerik planlamadan çok rehberlikle ilgili uyarlamada daha sık gösterir. Uyarlanabilir öğrenme için modelsiz RL önerir ve incelenen çalışmalarda klasik RL’nin Derin RL’yi geride bıraktığını uyarır.
- **Doğruluk temelli uyarlama alıştırmayı çok erken kesebilir.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren ve Stamper (2026)]], ustalığı doğruluktan çıkaran uyarlanabilir sistemlerin, öğrenenler öğrenilen eylemden kaçınılması gereken bağlamlarla karşılaşmadan alıştırmayı sonlandırma riski taşıdığını — aldatıcı aşırı genellemeyi tespit edilmemiş olarak bıraktığını — bulmuştur. Ustalık kesme kuralları devreye girmeden önce “eyleme geçme” dedektör görevleri eklenmesini önerirler; böylece uyarlama koşullu anlayışı (bir eylemden ne zaman kaçınılacağını bilmek), yalnızca doğruluğu değil, sınar.

- **Yorumlanabilir puanlama artı zaman bütçeli yönlendirme.** [[mars-momentum-aware-adaptive-rating-assessment-2026|Sahu ve ark. (2026)]], birkaç açık öğrenen skalerini (puanlama duyarlılığı, yanıt kalitesi ve momentum) tutar ve soruları bir zaman bütçesi altında yönlendirir; sabit Elo’ya karşı puanlama güncelleme oynaklığını yaklaşık yarıya indirirken kestirimde sinirsel bilgi izlemenin gerisinde kalır (AUC 0,7532, GKT’nin 0,8658’ine karşı).
- **Ustalık dizisi kalıcı öğrenme değildir.** 6.000 öğrencili bir ortaokul saha deneyinde, YZ destekli üç doğru üst üste ustalık kuralı platform tanımlı erişimi yaklaşık 28,7 yüzde puanı yükseltmiş ama bir hafta sonra yapılan gecikmeli sınavı iyileştirmemiştir; dolayısıyla ustalık ölçütleri gecikmeli öğrenmeye karşı doğrulanmalıdır, onun yerine geçmemelidir ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos ve ark. (2026)]]).
- **Yalnızca zorluğu değil bilişsel katılımın *türünü* uyarlayın.** [[adaptive-scaffolding-cognitive-engagement-its|Tithi ve ark. (2026)]], 113 öğrencili bir mantık öğretmeninde rehberli (etkin) veya hatalı (yapılandırıcı) örnek çalışmalar atayan BKT ve derin-RL politikalarının rastgele atamayı geride bıraktığını bulmuştur (sınav sonrası 72,3 ve 72,5’e karşı 65,7); BKT düşük ön bilgili öğrencilere en iyi şekilde hizmet ederken DRL yüksek ön bilgililere hizmet etmiştir.
- **Daha fazla geri bildirim daha iyi geri bildirim değildir.** Sekiz haftalık uyarlanabilir bir stokastik kursunda (194 öğrenci), buyurucu, bilgilendirici ve dönüştürücü geri bildirim farklı biçimde benimsenmiş ve dönüştürücü geri bildirim daha iyi düzenlemeyle değil bilişsel aşırı yüklenmeyle ilişkili çıkmıştır — uyarlama geri bildirim yoğunluğunu en üst düzeye çıkarmak yerine öğrencinin evresi ve ihtiyacına uymalıdır ([[mejeh-fromm-srl-adaptive-learning-feedback-2026|Mejeh ve Fromm (2026)]]).
- **Uyarlama hedefi olarak katılım profilleri.** [[an-goel-self-directed-modeling-2026|An, Hammock ve Goel (2025)]], VERA’da 822 model kuran 315 çevrim içi öğrenciyi izlemiş ve katılımlarını Gözlem, İnşa ve Keşif profillerine sınıflandırmıştır; öğrenenlerin inşaya odaklı davranıştan daha bütüncül, hipoteze dayalı Keşfe doğru ilerlediğini, Gözlemin ise evreler arasında sürdüğünü bulmuşlardır. Uyarlanabilir ve kişiselleştirilmiş tasarımın bu profilleri tanıması ve geri bildirimi (ör. benzer modeller önermek veya daha derin kavramsal anlayışı desteklemek) yüzeysel gözlemcileri daha bütünleştirici, tam döngülü modellemeye doğru yönlendirmek için hedeflemesi gerektiğini savunurlar.
- **Okunan ama yazılmayan hafıza uyarlama değildir.** CoLearn’in donmuş hafızalı kontrolü, öğrenci profilini okumaya devam ederken sabit öğeler sunmuştur ve gerçekten zayıf bir beceriye yönelik öğelerin payı 0,72’den 0,57’ye düşmüş, nihai ustalık hatası uyarlanabilir koşulun üzerine çıkmıştır ([[colearn-agentic-tutor-co-learning-loop-2026|He ve ark. (2026)]]).
- **Kazanç daha akıllı bir öğretmenden değil sıralamadan geldi.** [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung ve ark. (2026)]], LLM rehberli pekiştirmeli öğrenmeyle kişiselleştirilmiş bir öğretmen eğitmiş ve on [[k-12|lise]]nin bulunduğu Taipei’de beş aylık bir Python kursunda 770 öğrenciyi uyarlanabilir ile sabit kolaydan-zora problem dizileri arasında rastgele atamıştır. Uyarlanabilir sıralama, yüz yüze ve yardımsız [[summative-assessment|final sınavı]] puanını 0,156 standart sapma (kontrollerle 0,156’ya karşı 0,150) yükseltmiştir — aracılık analizi etkiyi neredeyse tamamen katılıma atfetmiştir (görev üzerinde geçen süre yoluyla 0,185 standart sapma, denemeler yoluyla 0,149), daha kolay veya daha zor materyale değil; kazanımlar yeni başlayanlar ve alt kademe okullar için en büyük olmuştur. Uyarlanabilir kaldıraç alıştırmanın sırasıydı, sohbetin kalitesi değil.
- **Ustalık kararlarını kural temelli tutun ve makine öğrenmesini izlemeye hapsedin.** Altıncı sınıfın 30 öğrencisi için sekiz haftalık uyarlanabilir bir STEM programı, yolları kural temelli ustalıkla yönetirken performansı makine öğrenmesiyle izlemiş ve uyarlamayı denetlenebilir tutmuştur; ama ön sınav olmadan ve koşul başına tek sınıfla kazançları yerelde doğrulanacak bir pilot şablonudur ([[bin-bakheet-adaptive-ai-stem-deep-learning-2026|Bin Bakheet ve ark., 2026]]).
- **Zayıf ortalamayı değil darboğaz özniteliğini uyarlayın.** Bilgi durumlarının geçiş modellemesi, analitik düşünmeyi kazanılması en zor ve kaybedilmesi en kolay olarak sıralamıştır — en düşük ileri geçiş olasılığı 0,31 ve en yüksek geri 0,22–0,23 — işaretlenen özniteliğin yeniden alıştırılmasını genel ustalıktan daha keskin bir uyarlama hedefi yapmıştır ([[bayesian-cognitive-diagnosis-personalized-learning-paths|Feng ve Huang, 2026)]]).
- **Toplu puanlardan değil süreç dizilerinden uyarlama.** [[adaptive-ai-scaffold-collaborative-problem-solving-2026|Wong, Bulathwela ve Cukurova (2026)]], üçlülerdeki 65 öğrencinin diyalog dönüşlerinin *sırasını* madencilik yaparak iskeleleme kuralları türetmiş; uyarlanabilir öğrenmeyi toplanmış davranışsal veya performans ölçülerinden bireysel süreç dizilerine taşımıştır; azami iskeleleme görev üzerinde davranışı yükseltmiş ama betimlemesini de artırmış ve tasarım sınanmamıştır.

## Yaygın yanlış anlamalar

- **“Uyarlanabilir, kişiselleştirilmiş ve bireyselleştirilmiş aynı şeydir.”** [[khalifeh-redefining-personalized-learning-ai-2026|Sistematik derlemeler]] bu dört terimin **literatürde tutarsız biçimde** kullanıldığını bulur; bu da bildirilen etki büyüklüklerinin uyarlamanın kendisine değil, büyük ölçüde uyarlamanın nasıl işletimselleştirildiğine bağlı olduğu anlamına gelir. Sözcükleri farklı kullanan çalışmaları birleştiren bir meta-analiz farklı müdahaleleri birleştirmektedir ve ortalama hiçbirini betimlemez.
- **“Sistemde ulaşılan ustalık, öğrenilen ustalıktır.”** **6.000 öğrencili bir ortaokul saha deneyinde**, YZ destekli üst üste üç doğru ustalık kuralı **platform tanımlı erişimi yaklaşık 28,7 yüzde puanı yükseltmiş, ancak** bir aktarım ölçüsünü iyileştirmemiştir. Kural, platformun kendi ölçütünü en iyilemiştir. Bu, ustalık sinyalinin öğrenmenin bir modeli olduğunun, öğrenmenin kendisi olmadığının en açık göstergesidir.
- **“Doğruluk temelli uyarlama ne zaman duracağını bilir.”** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren ve Stamper (2026)]], ustalığı doğruluktan çıkaran sistemlerin **alıştırmayı çok erken sonlandırma** riski taşıdığını bulmuştur: sistem doğru bir diziyi anlama olarak okur ve öğrenenin hâlâ ihtiyaç duyduğu alıştırmayı geri çeker. Başarıyla duran uyarlama, kalıcılığı üreten denemeleri tam olarak eksiltebilir.
- **“Darboğaz, uyarlamanın ne kadar iyi olduğudur.”** **İki yıllık bir ilçe RCT’sinde** bağlayıcı kısıt **benimsemeydi**: kaydı tek adıma indirmek, yalnızca tasarım değişiklikleriyle ilk oturum benimsemesini yaklaşık **%45’ten %83’e** çıkarmış ve niyet-ile-tedavi kazanımları buna koşut olarak büyümüştür. En akıllı uyarlama, ona hiç ulaşmayan kimseye hizmet etmez.
- **“Katılım bir kez kurulduğunda sürer.”** **44 çalışmanın** PRISMA uyumlu bir derlemesi, katılım literatürünün davranışsal katılıma yattığını ve etken katılımda en ince olduğunu bulmuş ve bir **yenilik etkisi** bildirmiştir: ALEX ve benzeri sistemlerin boylamsal çalışmalarında katılım zaman içinde azalmaktadır. Erken katılım, tasarımın kararlı bir özelliği değildir.

## Uygulama için çıkarımlar

**Eğitmenler ve tasarımcılar için**

- Ustalığı, platformun görebildiği şeyle değil, doğru olması gereken şeyle tanımlamak gerekir. Aktarımdan hiçbir iyileşme olmaksızın elde edilen 28,7 puanlık erişim kazancı, tasarımın karşısına alması gereken başarısızlık biçimidir: ölçüt üst üste üç doğruysa, elde edilecek olan üst üste üç doğrudur.
- Kalıcı olması gereken her şey için alıştırma, doğruluk sinyalinin ötesinde sürdürülmelidir. Bir öğrenenin işinin bittiğine uyarlanabilir bir sistemin karar vermesine güvenmek yerine [[desirable-difficulties|aralıklı ve harmanlanmış]] tekrar kullanılmalıdır.
- Algoritmayı ayarlamadan önce kayıt sürtünmesi kaldırılmalıdır. Tek bir adımın ortadan kaldırılmasından gelen %45’ten %83’e benimseme, bu literatürdeki pedagojik iyileştirmelerin çoğunu geride bırakmıştır.
- Katılım azalması planlanmalıdır. Boylamsal çalışmalar azalmayı belgelemektedir; sürekli gönüllü kullanıma dayanan bir tasarımın kullanılmaya devam etmesi için bir nedene ihtiyacı vardır.
- Bir sistemin hangi yapı üzerinde uyarlandığını söylediği denetlenmelidir. Davranışsal katılım en çok çalışılan ve öğrenme hakkında en az bilgi veren katılım türüdür; etken katılım kanıt tabanında en incedir.

**Geliştiriciler için**

- Adlandırılan her etki büyüklüğünün yanında “uyarlanabilir”in işletimsel tanımı bildirilmelidir, çünkü literatürün tanımları birbirinden ayrışır ve birleştirilmiş sayılar bu belirsizliği devralır.
- Kendi doğrulamada ustalık ölçütü öğrenme sonuçlarından ayrılmalıdır. Doğrulama ölçüsü uyarlamayı yürüten sinyalin kendisiyse, o ölçü bağımsız kanıt değildir.

## Bağlı kavramlar

- [[online-teaching-and-learning]] — Çevrim İçi Öğretme ve Öğrenme
- [[knowledge-tracing]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[student-modeling]]
- [[scaffolding]]
- [[cognitive-diagnosis]]
- [[llm]]
- [[learning-analytics]]
- [[higher-ed]]
- [[k-12]]
- [[formative-assessment]]
- [[behaviorism]]
- [[ai-technologies]] — Şemsiye: YZ teknolojileri ve teknikleri (modeller, LLM eğitimi, robotik, RAG, etken)
- [[recommender-systems-and-learning-paths]]

## Bağlı makaleler


- [[mars-momentum-aware-adaptive-rating-assessment-2026]] — MARS: Kişiselleştirilmiş değerlendirme için momentuma duyarlı uyarlanabilir bir puanlama sistemi

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Aldatıcı aşırı genelleme: uyarlanabilir ustalık, öğrenenler bir eylemden ne zaman kaçınılacağını bilmeden alıştırmayı kesebilir (An, McLaren ve Stamper 2026)
- [[turano-ai-tutoring-not-a-monolith-2026]] — YZ Özel Ders Tek Biçimli Değil: Aslında Neyi Bildiğimiz (Stanford SCALE/NSSA brifingi)
- [[adaptive-ai-scaffold-collaborative-problem-solving-2026]]
- [[mejeh-fromm-srl-adaptive-learning-feedback-2026]]
- [[simon-student-engagement-adaptive-learning-2026]] — Uyarlanabilir öğrenme platformlarında öğrenci katılımına dair sistematik derleme
- [[ai-enhanced-pbl-chatgpt-scaffolding-2026]]
- [[ai-student-engagement-online-learning-review-2025]]
- [[virtual-tutoring-computer-assisted-learning-takeup-2026]] — CAL ile sanal özel ders: benimseme ve öğrenmeyle ilgili bir deney
- [[making-ai-tutoring-productive-mastery-math-2026]] — YZ özel dersini üretken kılmak: ustalık temelli matematik alıştırması
- [[chudziak-ai-math-tutoring-platform]] — Uyarlanabilir/kişiselleştirilmiş çok etkenli matematik özel dersi (Chudziak ve Kostka 2025)
- [[khalifeh-redefining-personalized-learning-ai-2026]] — Kişiselleştirilmiş öğrenmeyi yeniden tanımlamak: sistematik derleme
- [[zhao-deeptutor-agentic-personalized-tutoring-2026]]
- [[ai-powered-personalized-learning-elementary-fractions-2026]]
- [[adaptive-pretesting-retention]]
- [[adapt-adaptive-lesson-plan-transformer]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[stanford-evidence-base-ai-k12-2026]] — Genel sohbet robotlarına karşı öğrenci hazırbulunuşuna kalibre edilmiş özel ders odaklı YZ
- [[context-based-ai-secondary-chemistry-2026]] — Ortaöğretim kimyasında bağlam temelli 7E + YZ öğretimi
- [[bin-bakheet-adaptive-ai-stem-deep-learning-2026]] — Derin öğrenme için uyarlanabilir YZ temelli STEM programı
- [[graph-its-adaptive-algorithms-2026]] — Dinamik Alanlar için Grafik Temelli Akıllı Öğretim (2026)
- [[bayesian-cognitive-diagnosis-personalized-learning-paths]] — Kişiselleştirilmiş öğrenme yolları için Bayesyen bilişsel teşhis
- [[adaptive-scaffolding-cognitive-engagement-its]] — Bir ITS’te uyarlanabilir ICAP iskelelemesi (BKT karşı DRL)
- [[burneo-can-edtech-close-learning-gaps-2026]] — 14 RCT boyunca uyarlanabilir + YZ destekli araçları birleştiren meta-analiz
- [[alsheikh-mapping-ai-integration-higher-education-2026]] — Sistematik derleme: yükseköğretimde önde gelen YZ tümleşme kullanım alanları arasında uyarlanabilir yollar
- [[an-goel-self-directed-modeling-2026]]
- [[riedmann-reinforcement-learning-education-review-2026]]
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — Uyarlanabilir problem sıralama sabit sıralamayı geride bırakıyor: yardımsız bir sınavda +0,156 standart sapma, zorluktan çok katılımı aracılık eden (Chung ve ark. 2026)
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: İnsan-YZ Birlikte Öğrenme Döngüsünde Öğrencisini Öğrenen Etken Bir Öğretmen
