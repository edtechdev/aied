---
title: "Bilgi Teknolojileri Eğitimi"
created: "2026-10-14T21:32:00-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
ethics: [equity-in-ai-education]
pedagogy: [professional-training]
discipline: [information technology, cs education]
audience: [administrators, curriculum designers, instructional designers, instructors, learners, policymakers]
level: [higher ed, adult learning]
confidence: high
institutions: [governance]
translation_of: concepts/information-technology
source_updated: "2026-10-29T05:15:49-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Bilgi Teknolojileri Eğitimi** — bilişim eğitiminin, hesaplamayı kendi başına bir disiplin olarak incelemekten ziyade, örgütlerin fiilen işlettiği sosyo-teknik sistemleri seçmeye, konuşlandırmaya, güvenliğini sağlamaya, yönetmeye ve denetlemeye hazırlayan dalı. En yakın komşusu ve sınır karışıklığının kaynağı [[cs-education]]’dır: bilgisayar bilimi eğitimi algoritmalar, programlama ve resmî temeller üzerinde odaklanırken, bilgi teknolojileri eğitimi uygulamalı yapılandırma, siber güvenlik, veri ve bilgi yönetimi ile bu sistemlerin örgütsel [[governance]]’i üzerinde odaklanır. [[generative-ai|Üretici YZ]], alana iki kez ulaşır — öğrencilerin değerlendirmeyi, güvenliğini sağlamayı ve düzenlemeyi öğrenmesi gereken bir nesne olarak ve onlara özel ders veren, sorularını sınıflandıran ve hazırlandıkları [[professional-training|profesyonel]] yolları sessizce yeniden yazan bir araç olarak.

## Dikkate Alınması Gereken Sorular

- YZ, tarihsel olarak BT uzmanlığını üreten yapı-hatasız çalıştır-hata ayıkla döngülerini sıkıştırırsa, bir müfredat hangi temel yetkinlikleri bilerek korumalı ve hangileri araca devredilebilir?
- Öğrenciler kurumlarının kurallarını bilir ve yine de kendi kullanımlarının uyumlu olup olmadığını söyleyemez. Bu bir iletişim hatası mıdır, yoksa kural tabanlı bir araç, kişisel hesaplarda özel olarak gerçekleşen bir uygulama için yanlış bir kaldıraç mıdır?
- BT eğitimi, bilgisayar bilimi, işletme ve mesleki eğitim arasında yer alır. YZ yönetişim yetkinliği kime ait olmalıdır — bir kursa, bir müfredat dizisine mi, yoksa program düzeyinde bir kazanıma mı?
- Bir transformer sınıflandırıcı üst düzey öğrenen sorularını yaklaşık %79 isabetle ayırıyorsa, BT programları soru sorma üzerine biçimlendirici geri bildirimi hiç otomatikleştirmeli midir?
- Öğrencilerin GenAI hakkındaki zihinsel modellerinin çoğu bildirimsel ve yüzeyseldir. Bu, [[ai-misuse-learning-harm|kötüye kullanımı]] mı öngörür, yoksa yalnızca öğrencilerin fiilen doğru verdiği kararları açıklayamamasını mı?

## Giriş

Bilgi teknolojileri eğitimi, bilişimin uygulamalı kanadıdır. İnsanları örgütler içinde sistemleri çalıştırmaya eğitir — ağlar, veri tabanları, güvenlik operasyonları, sağlık bilgi yönetimi, e-devlet hizmetleri — ve mezunları genellikle yalnızca akademi tarafından değil, meslekî kuruluşlar ve işverenler tarafından değerlendirilir. [[cs-education]]’e göre ayırt edici özellik, analiz birimidir. BS eğitimi nesneleri olarak programı ve algoritmayı alır; BT eğitimi konuşlandırılmış sistemi ve ona dair uygulayıcının yargısını alır. BS, YZ kod üretiminin programlama becerisini aşındırıp aşındırmadığını tartışırken; BT, YZ sorun gidermenin tanı becerisini aşındırıp aşındırmadığını, YZ ile hazırlanan politika belgelerinin kimseyi bağlayıp bağlamadığını ve mezunların yönettikleri veri sistemlerini denetleyip denetleyemeyeceğini tartışır.

Komşu disiplinler farklı biçimlerde örtüşür. [[stem-education]] üst kategori olup aletlerini paylaşır, ancak BT eğitimi daha sık, mezunları düzenlemeli işyerlerine giren profesyonel bir yüksek lisans veya uygulamalı bir lisans derecesidir. [[business-education]], bilgi sistemleri ve e-devlet programları aracılığıyla komşudur; bu programlar sıklıkla BT müfredatlarıyla kurs ve öğrenci paylaşır. [[vocational-education]] diğer meslekî komşudur: her iki alan da uygulama için eğitir, ancak mesleki programlar tanımlı alanlarda teknisyen düzeyinde yetkinliği hedeflerken, BT eğitimi soyut sistem muhakemesi varsayar ve yönetişim belgelerini yazan insanları yalnızca onlara uyanları değil üretir. [[higher-ed]] alan değil düzeyi adlandırır ve alan, meşru sayılabilecek müfredadı biçimlendiren bir akreditasyon ve uyum yüzeyi taşır — sağlık bilişimi akreditasyonu, öğrencilerin işlediği veriler için HIPAA ve FERPA yükümlülükleri.

Bu alanda YZ’yi ayırt edici yapan, aynı teknolojinin hem müfredad içeriği hem de pedagoji olmasıdır. Toplanan kanıtlar tek bir rahatsız edici temada birleşir: BT eğitiminin güncel YZ gündemi, dürüstlük ve araç benimsemeyle domine olunurken, alanın kendi işyerlerinin talep ettiği yönetişim, güvenlik ve veri etiği yetkinlikleri ağırlıklı olarak öğrencilerin fiilen aldığı belgelerin dışında görünür.

### YZ, Bilgi Teknolojileri Eğitiminde nasıl karşımıza çıkıyor

- **Oyunlaştırılmış siber güvenlik eğitimi.** Li ve meslektaşları, geleneksel video eğitiminin düşük katılımı ve sınırlı etkinliğinden yola çıkarak, şifre güvenliğinden metin ve telefon dolandırıcılığını tanımaya kadar uzanan, sınav tabanlı, anlatı tabanlı ve [[simulation]] tabanlı tasarımları TikTok Mini-Games gibi etkileşimli biçimlerle birleştiren çeşitli kısa, mobil uyumlu oyunlar inşa etmiştir ([[ai-gamification-security-education-2026]]). 59 üniversite öğrencisi (9 teknik uzman, 50 genel kullanıcı) üzerine yürüttükleri iki kademeli değerlendirme, gösterilmiş öğrenme kazanımlarından ziyade katılımı ve siber güvenliğe dikkati artırma potansiyelini bildirmektedir.
- **Öz-düzenlemeli öğrenmede iskeleleme veya kısayol olarak GenAI.** Avustralya’daki 267 lisansüstü BT öğrencisi üzerine yürütülen karma yöntemli bir çalışma, [[agency]] öğrencide kaldığı sürece hedefleri netleştiren, fikir üreten, eleştirip uyarladıkları [[feedback]] alan öğrenenler biçiminde iskelelenmiş [[cognitive-offloading]]’i, çıktıların asgari doğrulamayla kabul edildiği ve kontrolün araca kaydığı ikameci dış kaynak aktarımından ayırır ([[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]]). Özgüven yönelimi şekillendirdi: özgüvenli öğrenciler hedef belirlemede ve izlemede özerklik kullanırken, daha az özgüvenli akranlar GenAI’yi kısayol veya [[academic-integrity|yolsuzluk]] olarak okudu. Kohort, homojen bir biçimde YZ okuryazarı değil, farklılaşmıştı; yazarlar, öğrencilerin YZ çıktılarını gerekçelendirmesini veya uyarlamasını açık bir [[learning-design]] hamlesi olarak zorunlu kılmayı önermektedir.
- **Profesyonel uygulamada sıkıştırılmış uzmanlık yolları.** BT profesyonelleriyle yürütülen on dört yarı-yapılandırılmış görüşme, GenAI’nin sorun giderme, betik yazma ve sistem doğrulamada hem akran-öğretmen benzeri bir eğitmen hem de merdiveni kısaltan bir araç olarak işlev gördüğünü bulmuştur ([[genai-expertise-pathways-sysadmin]]). Tanıdık olmayan alanlarda hızlandırılmış performans, tarihsel olarak uzmanlığı inşa eden yapı-hatasız çalıştır-hata ayıkla döngülerine maruziyeti azaltır; YZ destekli hız ayrıca ekip ve öz-beklentileri sıfırlar, iki hızlı bir kültür ve verimlilik suçluluğu üretir. Çalışma, sınıf içi [[metacognition|üstbilişsel]] maliyet ve beceri erimesi kaygılarını [[professional-training]] ve iş yeri öğrenmesine taşır.

### Değerlendirme ve BT’de YZ kullanımının öğrenen tarafı

- **Teşhis sinyalleri olarak öğrenen soruları.** Lee, Atif ve Kang, 12 BT kursundan 434 özgün öğrenci sorgusunu üretici yapılandırmacı öğretim rollerine — bilgi aktarıcı, kolaylaştırıcı ve ortak öğrenen — sınıflandırdı; [[human-in-the-loop-ai|insan denetimli]] incelemeyle (Fleiss' kappa 0,60’dan 0,83’e yükselerek) mutabakat etiketlemesine ulaştı ve derlemi 582 dengeli soruya çıkardı ([[lee-learner-question-types-ai-education-2026]]). DeBERTa, olgusal sorularda %86,36 doğruluk ve %96,67 isabetle önde gitti, ancak kolaylaştırıcı isabeti %78,79’a düştü ve ince ayarlanmış BERT, ortak öğrenen maddelerinde yalnızca %74,19 isabetle %92,00 geri çağırma elde etti. Hatalar, roller arasındaki kavramsal benzerlikten, belirsiz öğrenen niyetinden ve bilişsel derinlik olarak yanlış okunan alan ifade biçiminden kaynaklandı; yazarlar, çoğaltmanın sözcüksel kısayollar getirmiş olabileceği konusunda uyarıyor ve 11 öğrenciden oluşan, yalnızca BT’yi kapsayan derlemin henüz diğer alanlara genellenemeyeceğini belirtiyor.
- **Geniş ama yüzeysel zihinsel modeller.** Zorunlu bir teknoloji etiği kursundaki 86 lisans öğrencisinden çizilen kullanılabilir 64 kavram haritasından beş zihinsel model kategorisi ortaya çıktı: teknik-süreç tabanlı, eğitim-aracı tabanlı, geçiş dönemi, sonuç-farkında ve bütünleşik ([[student-mental-models-genai]]). Her harita bildirimsel bilgi gösterdi, 25’i prosedürel, 17’si koşullu ve yalnızca 9’u üçünü birden bütünleştirdi. Teknik ve sosyal-düzenleyici kümeler birbirinden uzak durdu; yazarlar bunu [[ai-literacy]] ve [[ethics|etik]] farkındalığının ayrı geliştiği biçiminde okurlar; dürüstlük merkezli yönergelerin, savlarına göre, öğrencilerin aracı kavramsallaştırma biçiminin yalnızca bir boyutunu ele aldığını söylerler.
- **Kurallar biliniyor, uyum belirsiz.** İşletme Bilgi Sistemleri ve E-Devlet programlarındaki 151 lisans öğrencisi üzerine yürütülen bir anket, öğrencilerin çoğunun GenAI’yi aktif olarak kullandığını, ancak yarısından fazlasının kullanımının kurumsal düzenlemeye uygun olup olmadığından emin olmadığını, [[regulation|düzenleyici]] farkındalık ile fiili davranış arasında yalnızca zayıf ila orta düzeyde ilişki bulunduğunu ve güvenilirliğin ağırlıklı olarak kurumsal araçlar yerine özel olarak erişilen araçlarda olduğunu göstermiştir ([[student-regulatory-awareness-genai]]). Kuralları bilmek, öğrencilerin ne yaptığını güçlü biçimde öngörmedi.

### Kurumsal politika ve yönetişim boşluğu

- **Yönerge, politika değil.** Akredite tüm 48 sağlık bilişimi ve sağlık bilgi yönetimi yüksek lisans programının çevre taraması, 40’ında (%83) en az bir kamuya açık YZ belgesi olduğunu, ancak en sık görülen eserin resmî politika (7, %18) değil danışma niteliğinde yönerge (21, %53) olduğunu buldu ([[institutional-ai-policy-health-informatics-2026]]). Akademik dürüstlük sözcük dağarcını domine etti (n = 139), alıntılamayı (n = 59) ve [[assessment]]’i (n = 50) geride bıraktı; oysa HIPAA (n = 5), FERPA (n = 11), eşit erişim (n = 2) ve açıklama yükümlülükleri (n = 1) neredeyse hiç yoktu ve elektronik sağlık kayıtlarına hiç değinilmedi. Latent Dirichlet Allocation, dürüstlük, öğrenci GenAI kullanımı, üniversite araştırma araçları ve ChatGPT etkileşimi etrafında dört tema üretti. Yalnızca kamuya açık belgeler analiz edildiğinden, yazarlar gizlilik ve eşitlik dilinin yokluğunu kurumsal uygulama hakkında değil, yayımlanmış yönergeler hakkında bir bulgu olarak ele alıyor.
- **Eşitlik kör noktası.** Kapsama (n = 9), erişilebilirlik (n = 9), uyumlar (n = 4) ve eşit erişim (n = 2), bazı programlar ders çalışmalarında YZ kullanımı zorunlu kılsa bile, [[equity-in-ai-education]]’in ele alındığına dair herhangi bir iddiayı destekleyemeyecek oranlarda görünür. Profesyonel [[governance]] yetkinliğinin ince işlenmesiyle birlikte, bu, paketin açık bıraktığı en net tasarım görevidir: dürüstlük kurallarını, bu mezunların uygulamaktan sorumlu olacağı erişim, gizlilik ve veri yönetişimi hükümlerine bağlamak.

## Yaygın yanlış anlamalar

**“Bilgi teknolojileri eğitimi, daha fazla satıcı aracı içeren bilgisayar bilimi eğitimidir.”** Sınır, çalışma nesnesidir. Bilgisayar bilimi eğitimi algoritmalar, programlama ve biçimsel temeller üzerine odaklanır; BT eğitimi uygulamalı yapılandırma, siber güvenlik, veri ve bilgi yönetimi ile sosyo-teknik sistemlerin örgütsel yönetişimi üzerine odaklanır. Bu ayrım, bir YZ öğreticisinin neye iyi olması gerektiğini değiştirir: bir BT öğrenenine bir hesaplamaya ilişkin kanıt değil, konuşlandırılmış bir sistemin arıza biçimleri hakkında yargı gerekir.

**“Soru türlerini belirleyecek kadar doğru olan bir sınıflandırıcı, biçimlendirici geri bildirimi otomatikleştirecek kadar da doğrudur.”** Toplam doğruluk, önemli olan sınıf başına hatayı gizler. Bu sayfanın atıf yaptığı karşılaştırmada DeBERTa **olgu sorularında %86,36 doğruluk ve %96,67 kesinlik** ile öndeydi, ancak kolaylaştırıcı kesinliği **%78,79**’a düştü; ince ayarlanmış bir BERT, **birlikte öğrenen öğelerde %74,19 kesinlikle %92,00 geri çağırma**ya ulaştı. Otomasyon bunların kabaca dörtte birini yanlış müdahaleye yönlendirir ve hatalar kolay olanlarda değil, pedagojik açıdan ilginç kategorilerde yoğunlaşır.

**“Çoğu programın bir YZ belgesi olması, YZ yönetişiminin yerinde olduğu anlamına gelir.”** Tüm **48 akredite** sağlık bilişimi ve sağlık bilgi yönetimi yüksek lisans programının çevresel taramasında, **40’ında (%83)** en az bir kamuya açık YZ belgesi vardı; ancak bulgu politika değil, rehberlik olarak adlandırılmıştır. Yayımlanmış bir öneri seti bir yönetişim mekanizması değildir: ne sorumluluk atar ne de bir sistem başarısız olduğunda ne olacağını belirtir.

**“YZ destekli bir kararı açıklayamayan öğrenciler YZ’yi kötüye kullanıyordur.”** Alternatif açıklama, doğru verilmiş bir kararı dile getiremedikleridir. BT işi, gerekçesi örtük olan yetkin uygulamalarla doludur ve dilsiz yetkinliği suistimal saymak, bir öğretim hedefini disiplin sorunu olarak yanlış teşhis eder: açıklama alıştırmasına ihtiyaç vardır, politikaya değil.

## Uygulama için çıkarımlar

**Öğretim elemanları için**

- Herhangi bir geri bildirim yönlendirmesini otomatikleştirmeden önce manşet doğruluğu değil sınıf başına kesinliği raporlayın. Kaç öğrencinin yanlış yardım alacağını belirleyen rakam kolaylaştırıcı kesinliğidir.
- Açıklamayı başlı başına bir çıktı olarak öğretin, böylece dilsiz yetkinlik suistimalden ayırt edilebilsin.
- Kurumsal politikayı okurken rehberliği yönetişimden ayırın ve hattaki bir araç hata yaptığında kimin hesap vereceğini sorun.

**Geliştiriciler için**

- Karışıklık matrislerini öğrenen kategorisine göre yayımlayın; olgu sorularında güçlü, birlikte öğrenen katkılarında zayıf bir model işbirlikli durumları sistematik olarak kaçıracaktır.
- Bir yönlendirme sınıflandırıcısını kolaylaştırıcının yerine geçen bir araç olarak konumlandırmayın. %74-79 kesinlikte bu bir triyaj yardımcısıdır.

**Program tasarımcıları için**

- Sektörün eksik olan yönetişim belgesini oluşturun: adlandırılmış sorumluluk, gözden geçirme sıklığı ve bir olay yolu. Bir YZ rehberlik belgesi akreditasyon sorusunu karşılar, hesap verebilirlik sorusunu değil.

## Bağlı kavramlar

- [[cs-education]]
- [[stem-education]]
- [[business-education]]
- [[vocational-education]]
- [[higher-ed]]
- [[professional-training]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[governance]]
- [[cognitive-offloading]]
- [[equity-in-ai-education]]

## Bağlı makaleler

- [[ai-gamification-security-education-2026]]
- [[atif-dickson-deane-scaffold-shortcut-genai-srl-2026]]
- [[genai-expertise-pathways-sysadmin]]
- [[institutional-ai-policy-health-informatics-2026]]
- [[lee-learner-question-types-ai-education-2026]]
- [[student-mental-models-genai]]
- [[student-regulatory-awareness-genai]]
