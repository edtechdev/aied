---
title: Kurumsal YZ Altyapısı
created: "2026-11-12T07:36:15-05:00"
updated: "2026-11-21T17:00:00-05:00"
type: concept
connected_resources: [mindrouter, amplify-genai, canvas-mcp]
technology: [llm, generative-ai, open-source, edtech-platform]
ethics: [privacy]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed, k 12]
discipline: [information technology]
confidence: high
translation_of: concepts/institutional-ai-infrastructure
source_updated: "2026-11-21T15:40:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [open-source, rag, privacy, governance, edtech-platform, llm, digital-divide, assessment, shadow-ai, critiques-of-ai-in-education]
connected_articles: [huijts-suilen-institutional-ai-sovereignty-gateway-2025, rodenbeck-purdue-on-prem-genai-inference-2025, rahaman-soa-on-prem-ai-gateway-2026, sheneman-mindrouter-institutional-ai-sovereignty-2026, guadalupe-academic-chatbot-local-llm-2026, zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026, pardos-borchers-institutional-workflows-oecd-2026, mcnamara-aimcai-continuous-assessment-infrastructure-2026, on-premises-rag-tutoring-business-education-2026, lata-ferpa-compliant-local-llm-autograder, making-ai-work-for-students-ofs-2026, watson-generative-ai-meaning-mediating-infrastructure-2026]
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Kurumsal YZ altyapısı** — bir kurumun, modellerin öğretim, araştırma ve yönetim boyunca kendi kurallarıyla kullanılabilmesi için işlettiği hesaplama, sunma, yönlendirme ve denetim katmanı. Ağırlıkları taşıyan GPU ve kümelerden, istekleri yanıtlayan çıkarım sunucularından, bunları ölçen ve yönlendiren [[llm|ağ geçidine]], bu düzeni incelenebilir kılan model kartlarından ve denetim kayıtlarından, öğrenci kayıtlarını modellere bağlayan veri hatlarından ve bunların tümünü çalıştıran personelden oluşur. [[edtech-platform|Bir eğitim teknolojisi platformuyla]] (öğrenciye bakan kapsayıcı) ya da [[governance|yönetişimle]] (ikisini de kısıtlayan politika) aynı nesne değildir.

## Düşünülmesi Gereken Sorular

- Model kurumunuzda gerçekte nerede çalışıyor ve bunu kontrol etmeden yanıtlayabilecek kişiyi adıyla söyleyebilir misiniz?
- Aşağıdaki altı biçimin hangilerinde olduğunuzdasınız ve hangisinde olduğunuzu sanıyordunuz?
- Kullanımın %90'ı kullanıcıların %10'undan gelseydi, kullanıcı başına lisans mı yoksa ölçülen bir ağ geçidi mi bütçenize daha uygun olurdu ve kullanımınızın hangi biçimde olduğunu biliyor musunuz?
- Bir politika belgesi isteklerin bulunduğu yargı bölgesinden çıkmaması gerektiğini söylüyor. Yığınınızda bunu insanlara hatırlatmakla değil, zorunlu kılan nedir?
- Bir ders denkliği önerisi yanlış olduğunda kim sorumludur ve altyapınız bunu daha sonra yanıtlamak için yeterince şey kaydediyor mu?
- İlkokul için model, önde gelen ölçekte ve uzakta olmak yerine küçük ve binanın içinde çalıştığında ne değişir?

## Giriş

Kurumlar [[generative-ai|üretken yapay zekanın]] ilk yıllarını erişim satın alarak geçirdi: burada bir [[conversational-ai|sohbet robotu]] lisansı, orada bir yazma asistanı; her biri kendi koşullarına ve kendi veri yoluna sahip. Sonuç, tek cümleyle tarif edilemeyen bir portföy ve tek bir ofisin yanıtlayamayacağı bir dizi sorudur (o istem nereye gitti, bu modeli kim onayladı, ne harcadık). Bu katmanın yalnızca araç sunmakla kalmayıp anlamı aracılık ettiği yönündeki sav, [[critiques-of-ai-in-education|Eğitimde YZ Eleştirileri]] başlığı altında geliştirilmiştir.

YZ'yi altyapı olarak ele almak buna verilen yanıttır. Bu, paylaşılan bir sunum katmanı, kurumun kurallarını her isteğe uygulayan bir ağ geçidi ve maliyeti, yükü ve arızayı görmeyi mümkün kılan yeterli telemetri demektir. Literatürdeki iddia bunun daha ucuz olduğu değildir. İddia, bunun kurumu kararı veren taraf haline getirmesidir; bu farklı bir türde bir iddia ve test edilmesi daha zor bir iddiadır.

Burada toplanan makaleler altyapı olarak sayılan şeyin kapsamını da genişletir. İki tanesi sohbet ve öğretim için çıkarıma, biri sicil müdürlüğüne, biri de değerlendirme kayıtlarına ilişkindir. Ders denkliği, iş yükü [[learning-analytics|analitiği]] ve kanıt birikimi gömülü vektörlerle ve model çağrılarına bağımlı hale geldiğinde, arka ofis GPU rafları kadar yığının bir parçasıdır. Sav, altyapının kurumun bir kararı sessizce bir modele devrettiği her yer olduğudur.

## Gerçekte neyi seçiyorsunuz

Alan iki değil altı biçim tanımlar. Bunlar veriyi kimin tuttuğu, modeli kimin değiştirebildiği ve arızayı kimin üstlendiği açısından ayrılır.

**Ücretsiz dış kaynaklı araçlar.** Personel veya öğrenciler bir satıcının hizmetini ücretsiz kullanır. Kanada'daki Contact North'un [[intelligent-tutoring|Akıllı Özel Öğretim]] Pro'su en net örnektir: ücretsiz, anonim, hesap gerektirmez ve tartışma, [[self-assessment|öz değerlendirme]] ile çalışma kılavuzu oluşturma modlarına sahiptir. Playlab aynı bantta yer alır; eğitimcilerin kendi [[curriculum-design|müfredatlarına]] dayalı uygulamalar kurmasına olanak tanırken modelleri satıcı barındırır. Maliyet sıfır değil, ertelenmiştir: kurumsal bir denetim izi yoktur, kota denetimi yoktur ve koşullar haber verilmeden değişebilir. Denemek için savunulabilir bir yerdir, yerleşmek için kötü bir yerdir.

**Ticari eğitim kiracısında koltuk.** Bir ilçe veya üniversite ChatGPT Edu, Microsoft 365 Copilot, Google Gemini for Education veya benzer bir kiracıyı satın alır. Tedarik hızlıdır, SSO ve bir yönetici konsolu dahildir; model seçimine ve saklamaya satıcı sahiptir. Kurum kimlik bütünleşimi kazanır ve bir sağlayıcının etrafından yönlendirme yeteneğini yitirir.

**Barındırdığınız bir platform.** [Amplify GenAI](/aied/resources/amplify-genai/) kurumun kendi AWS hesabına kurulur; böylece belgeler ve konuşmalar kurumun denetlediği altyapıda kalırken satıcı uygulamayı sağlar. Vanderbilt'ın pilotu, 1,300 kullanıcıda kullanıcı başına ayda yaklaşık \$3 bildirmiştir; bunların yarısının belirteç harcaması \$1'in altındadır. Bu biçim GPU satın almadan veri denetimi satın alır.

**Karışık sağlayıcılar üzerinde bir ağ geçidi.** Yerel ve ticari arka uçların önünde tek bir ön kapı; buna kotalar, SSO, kayıt tutma ve bölgesel yönlendirme eklenmiştir. Fontys bunu üç katman olarak inşa etti; [MindRouter](/aied/resources/mindrouter/) ve SPIN varyantlar uygular. Bu, bir politika belgesini zorlanan bir kısıtlamaya dönüştüren biçimdir ve bir tedarik memuru yerine bir platform mühendisi gerektiren biçimdir.

**Kendi çıkarımınız.** GPU'lar, zamanlayıcılar, model sunucuları ve onları çalıştıran insanlar. Idaho Üniversitesi'ndeki MindRouter başvuru örneğidir; Georgia Tech'teki SPIN aynı bahsi bir HPC merkezinin içinde yapmıştır. Kurumun bir mahkeme celbini, bir düzenleyiciyi veya bir satıcının fiyat değişikliğini izin istemeden yanıtlayabildiği tek biçim budur.

**Çalıştığınız araçların içindeki YZ.** Bir Moodle soru tipi, bir tartışma platformunun YZ ortağı, bir kompozisyon geri bildirim aracı. Örgütsel yük küçüktür ve değişim ders ders gelir; bu aynı zamanda sınırıdır: merkezdeki hiçbir şey bununla öğrenmez.

Bu biçimler iç içe geçer. Bir ağ geçidi barındırılan bir platformun önünü alabilir; barındırılan bir platform yerel bir modeli çağırabilir; ücretsiz bir araç yukarıdakilerden hiçbirini haklı çıkaran pilot olabilir. Yararlı soru hangi biçimin en iyi olduğu değil, her biçimin sizin için sessizce hangi kararı verdiğidir.

**Sektörün gerçek varsayılanı bir satıcı kiracısında koltuktur.** Her kurum bu seçimi bilerek yapmaz. 127 kurumu inceleyen [[making-ai-work-for-students-ofs-2026|OfS ve Advance HE (2026)]], çoğunun araçları mevcut Microsoft 365 lisanslaması üzerinden sağladığını; en yaygın olarak Copilot Chat'i, kapalı ortamı kurum verilerini uyumluluk zarfı içinde tuttuğu için değerli bulduğunu bulmuştur. Lisansı olmayan kurumlardaki personel daha güçlü ücretsiz araçlara yönelmiş; bazen bunları öğrenci verilerini de içerecek biçimde kullanmış ve katılımcılar bugünkü ücretsiz veya ucuz katmanın yarının bütçesiz fiyat artışı olduğunu işaretlemişlerdir.

## Ağ geçidi katmanı

Üç uygulama aynı mimari hamleyi olağanüstü tutarlılıkla tanımlar.

Fontys ICT'deki [[huijts-suilen-institutional-ai-sovereignty-gateway-2025|Huijts ve Suilen]] kurumsal kimliğe bağlı bir ChatGPT tarzı ön uç, bütçeleri ve bölgesel kısıtlamaları uygulayan bir yönlendirme çekirdeği ve yerel ile ticari modellerden oluşan bir sağlayıcı katmanını birbirinden ayırır. Altı ay ve 300 kullanıcı sonunda aylık \$500'lik sınır hiç aşılmamıştır ve her oturum yetenekleri, barındırma bölgesini, maliyeti ve alternatifleri adıyla bildiren bir model kartıyla açılmıştır.

[[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] aynı fikri zamanlamaya taşır. İstekler role göre ağırlıklıdır ([[administrator|yönetici]] 10, öğretim üyesi 5, personel 2, öğrenci 1) ve Ağırlıklı Eksiklik Yuvarlak Robin (Weighted Deficit Round Robin) yöntemiyle işlenir; arka uç seçimi gecikme, yük ve yönetici tercihi için yumuşak puanlar ekler. Ağ geçidi denetim kaydını tutar ve belirteçlerin yanı sıra enerjiyi de ölçer.

[[rahaman-soa-on-prem-ai-gateway-2026|Georgia Tech'teki SPIN]] bu ayrımı API sınırında açık kılar: yalnızca CPU'lu sanal makinede LiteLLM ve PostgreSQL, Slurm içindeki GPU düğümlerinde vLLM ve Triton; arka uç ana bilgisayarı, bağlantı noktası ve anahtar istek anında veritabanından çözülür. Bir modeli değiştirmek, istemcilere görünmez bir veritabanı güncellemesi haline gelir.

Farklar öğreticidir. Fontys çok sağlayıcılı bir portföyü yönetir, MindRouter kıt paylaşılan kapasiteyi yönetir, SPIN ise işleri sonlandırmak üzere tasarlanmış bir toplu zamanlayıcıda çıkarımı yönetir. Üçü de tek bir iddiada yakınsar: API yüzeyi sözleşmedir ve arkasındaki model değiştirilebilirdir.

## Sunum bir kıyaslamadan çok bir politikanın konusudur

[[rodenbeck-purdue-on-prem-genai-inference-2025|Purdue'nin iki hizmeti]], yaklaşık \$100,000 donanımla 10'dan fazla [[open-source|açık kaynak]] modelde 1000'den fazla kullanıcıya ulaşmış ve aylık aktiflik yaklaşık %40'tır. Önemli olan karar, ekibin vLLM'in 4-5 kat çıkarım avantajına rağmen vLLM yerine Ollama'yı tutmasıdır; çünkü denemek isteyen bir topluluk için çok sayıda modeli desteklemek ham hızdan daha önemliydi.

SPIN'in yük denemesi tabloya diğer yarımı ekler. Saniyede 1000 eşzamanlı isteğe karşı taklit edilmiş bir motora karşı, 8 vCPU'lu bir ağ geçidi sanal makinesi ideal toplam oranın %76'sına, 8 işçili çıplak metale ise %98'e ulaşmıştır. Vekil katmanı ucuzdur, ta ki ucuz olmayana kadar; eşik gizemli değil, ölçülebilirdir.

Hiçbir sonuç kurala genellenmez. Bunlar çıkarım, model genişliği ile işletim basitliğinin birbirine karşı değiş tokuş edildiğini ve bu değiş tokuşun bir satıcının varsayılanından miras alınmak yerine bilerek yapılması gerektiğini kurar.

## Kenar argümanı değiştirir

[[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar ve Iqbal]] okul ölçeğinde bir alternatifi betimler: giriş düzeyinde bir GPU'ya sahip yenilenmiş bir masaüstü veya mini PC; sunucu başına gösterge niteliğindeki birkaç yüz ila birkaç bin Avustralya doları karşılığında 1B ile 13B parametre arasında bir model barındırır. Ekonomik gerekçeleri, sınıflar boyunca birikimli bulut API maliyetlerini karşılayamayacak 400 öğrencili bir okuldur. Dürüstlükleri ise kapsamlı bir ömür döngüsü maliyet karşılaştırmasının var olmadığını itiraf etmesidir; bu yüzden tasarruf bir bulgu değil, bir hipoteztir.

Ders ölçeğinde [[on-premises-rag-tutoring-business-education-2026|CourseChat]] aynı mantığı farklı bir kısıt altında gösterir: sınıf gecikmesi kapısını geçemeyen daha büyük adayların yerine tutulan 8B'lik bir üretim modeli. [[guadalupe-academic-chatbot-local-llm-2026|Guadalupe, Topón ve Iza]] 5 saniyelik medyan hedefini 3,57 saniyede karşılamış ama p95'te 6,47 saniyeyle kaçırmış ve uçtan uca sürenin yaklaşık %96'sını üretime bağlamışlardır.

Yerel çalıştırmak gizlilik sorusunu sözleşmeselden fiziksele çevirir ve onu yanıtlamaz. İstem kaydının tam olduğu yerel bir kurulum yine de bir saklama sistemidir; değişen şey, onu teslim etmeye kimin zorlanabileceğidir.

## Arka ofis de altyapıdır

[[pardos-borchers-institutional-workflows-oecd-2026|Pardos ve Borchers]], [[ai-education|eğitimde YZ'nin]] sonuç olası yerinin sohbet penceresi değil sicil müdürlüğü, danışmanlık ofisi ve müfredat komitesi olduğunu savunur. Örnekleri konuşmalar değil gömülü vektörlerdir: kayıt geçmişlerinden öğrenilen ders vektörleri, iki kurumun vektör uzayları arasında makine çevirisi ve açık kaynakları bir standarda eşleyen etiketleme hatları.

Sayılar somuttur. Gömülü vektör tabanlı aktarım tahmini 65 mevcut denkliği doğrulamıştır ve şimdi 59 kurum ve dört [[higher-ed|yükseköğretim]] sistemiyle pilot uygulanmaktadır. Kredi saatleri algılanan iş yükündeki varyansın yalnızca %6'sını açıklarken, LMS etkinlik özellikleri %36'sını açıklamıştır. İş birlikçi YZ etiketleme süreyi yaklaşık %50 kısaltmış ancak doğruluğu %35 azaltmıştır.

Yaygınlaşma bulgusu, altyapı planlayıcılarının akılda tutması gereken bulgudur. 2×2'lik bir deneyde, düşük güven düzeyindeki aykırı önerileri gizlemek yönetici kabulünü ve üretkenliği artırmış; kullanıcılardan önerileri işaretlemelerini istemek ise aykırılar gösterilmediği sürece kabulü düşürmüştür. Daha doğru bir önerici, çıktısının nasıl sunulduğu yüzünden yine başarısız olabilir; bu da arayüz tasarımını bir son rötuştan çok altyapının bir parçası yapar.

## Değerlendirme bir tesisat sorunudur

[[mcnamara-aimcai-continuous-assessment-infrastructure-2026|AIM-CAI]], öğrenmeyi yorumlamak için gerekli kanıtın zaten var olduğunu ancak birbirini okuyamayan sistemler arasında parçalanmış olduğunu savunur. Çerçevesinin altı işlevsel katmanı, bir anlık görüntünün destekleyebileceğini sınırlayan üç çıkarımsal sınırı ve denetlenebilirlik, belirsizlik tahmini ve insan üzerine yazma dahil yedi yönetişim gereksinimi vardır. Bu bir çerçevedir, bir kurulum değil ve yazarlar bunu söyler.

[[lata-ferpa-compliant-local-llm-autograder|LaTA]] daha dar örneği sağlar: öğrenci çalışmalarının bir satıcıya gönderilmesi yerine kurumda yürütülmesi yönündeki [[privacy|FERPA]] sorununu ortadan kaldıran yerel bir akıl yürütme modeli. Birlikte, değerlendirme altyapısının bir öğrenme platformunun özelliği değil, kendi veri modeli ve kendi arıza biçimleriyle ayrı bir sorun olduğunu öne sürerler.

## Maliyet, gecikme ve görünürlük sorunu

Uygulamalar arasında yinelenen tema, maliyetin ve gecikmenin yalnızca birinin onları ölçümlemesiyle görünür hale gelmesidir. Purdue'nin \$100,000'lık donanım rakamı, belirtilmemiş bir personel maliyetine sahip bir sermaye rakamıdır. SPIN'in ağ geçidi kıyaslaması vekil yükünü sınırlar ve uçtan uca gecikme hakkında hiçbir şey söylemez. [[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter'ın]] enerji muhasebesi, gözlemlenen 14,1 kW tepe ve 22,1 kW teorik maksimum karşısında yaklaşık 9,4 kW normal çekim bildirmekte; 17 günlük bir pencerede 872,997,430 belirteç ise makalenin oranlarıyla ticari muadillere karşı yıllık \$82,843 ila \$251,806 tasarruf anlamına gelmektedir.

İlçe ölçeğinde barındırılan platformlar aynı türden bir aritmetik bildirmektedir: PSD401 AI Studio, belirteç başına maliyeti ticari alternatiflerden %67 ila %90 daha düşük iddia etmektedir. Bu rakamların hiçbiri aynı payda olmadan kurumlar arasında karşılaştırılabilir değildir. Karşılaştırılabilir olan, ölçme uygulamasının kendisidir.

## Egemenliğin bir eşitlik boyutu vardır

Bir ağ geçidi kurumun dilini kötü işleyen yerel bir modele yönlendirebilir ve ortaya çıkan sessizlik tarafsız değildir. Altyapı savıyla [[digital-divide|dijital uçurum]] savı burada buluşur: kümeleri ve personeli olan kurumlar yetenek kazanır; olmayanlar ise satıcının sunduğunu, satıcının koyduğu herhangi bir fiyatla karşılamak zorunda kalır. Ücretsiz katmanlar gerçekten yararlı ve gerçekten kırılganıdır; bu da onları kalıcı bir strateji olarak ele almayı hangi kurumların hizmet gördüğüne dair bir karar haline getirir.

**Altyapı aynı zamanda anlamı aracılık eder.** [[watson-generative-ai-meaning-mediating-infrastructure-2026|Watson, Morgner ve Brezovec (2026)]], üretken YZ'yi istemleri, rubrikleri, geri bildirimleri ve türleri iletişimsel olarak akla yatkın biçimlere yeniden biçimlendiren anlam-aracılık eden altyapı olarak ele alır; bu yüzden tedarik ve denetim, bir sistemin hangi iletişimsel üslupları tanıdığını, hangi yardımı normalleştirdiğini ve tempo ile çıktının rötuşuna ilişkin beklentilerin desteğinden daha hızlı sürüklenip sürüklenmediğini sormalıdır.

## Uygulama için çıkarımlar

Kıdemli yöneticiler, her birimin gerçekte hangi biçimde olduğunu adıyla koyarak başlayabilir. Altı biçim veriyi kimin tuttuğu ve arızanın kime düştüğü açısından ayrılır ve çoğu kurum aynı anda birkaçında yer alır: personel için bir kiracı, bir bölümde ücretsiz bir araç, başka bir yerde barındırılan bir platform. Kullanımda olanların, verinin gittiği yerin ve modeli değiştirebilenin tek sayfalık bir envanteri, bunlardan yalnızca birini tarif eden bir strateji belgesinden daha yararlıdır.

BT ve kütüphane liderliği, politikayı zorunlu kılan yer olarak ağ geçidini kullanabilir. Fontys, MindRouter ve SPIN aynı sözleşmede yakınsar: tek bir API yüzeyi, kullanıcı başına kotalar, kimlik bütünleşimi, bölgesel yönlendirme ve istek gönderilmeden önce gösterilen bir model kartı. Bir PDF'te yaşayan bir kural ile bir yönlendiricide yaşayan bir kural farklı nesnelerdir ve yalnızca ikincisi yeni bir model belirdiğinde geçerliliğini korur.

Maliye ve tedarik personeli, tedarikçi seçmeden önce maliyeti ölçümleyebilir. Kullanıcı başına lisanslama, barındırılan platformlar ve ölçülen ağ geçitleri farklı kullanım biçimlerini ödüllendirir ve hangisinin daha ucuz olduğunu bilmenin tek yolu belirteçleri, aktif kullanıcıları ve tepe yükü ölçmektir. Purdue'nin hizmeti yaklaşık \$100,000 donanımla yaklaşık 1000 kullanıcıya ulaşmıştır; barındırılan bir pilot ise kullanıcı başına ayda yaklaşık \$3 bildirmektedir. Bu rakamlar aynı payda olmadan karşılaştırılamaz.

Öğretim ve öğrenme merkezleri, ücretsiz katmanlardaki pilotları pilot olarak ele alabilir. Ücretsiz araçlar birçok eğitimcinin hiçbir şeyi denemesinin nedenidir ve bunların yanında denetim izi, kota ve değişebilen koşullar yoktur. Başarılı olan bir pilot, kurumun yönetebileceği bir biçime geçmelidir.

Veri merkezi olmayan okul liderleri yine de yerel bir model çalıştırabilir. Giriş düzeyinde bir GPU'ya sahip yenilenmiş bir masaüstü, bir bina için küçük bir model barındırır ve gizlilik kazancı sözleşmesel değil fizikseldir. Yine de bir saklama sistemidir; bu yüzden kayıt tutma ve erişim tasarım kararları olmaya devam eder.

Bölüm başları sohbet penceresinin ötesine bakabilir. Denklik, iş yükü analitiği, etiketleme ve değerlendirme kayıtları, kurumların halihazırda kararları bir modele devrettiği yerlerdir ve bu sistemler bir sohbet robotuyla aynı yönetişime ihtiyaç duyar, genellikle daha az incelemeyle.

## Yaygın yanlış anlamalar

**"Yerinde çalıştırmak daha ucazdır."** Lisans ücreti kaybolur; donanım, güç, soğutma ve personel belirir. Purdue'nin hizmeti, onu çalıştıracak kimse maaş almadan önce yaklaşık \$100,000 donanım maliyeti olmuştur ve personel kısmı aşağı ölçeklenemeyen kısımdır.

**"Bir ağ geçidi sadece bir vekildir."** Vekil iletmeye yarar. Ağ geçidi hangi modelin, hangi bölgenin, hangi bütçenin, hangi kullanıcının, neyin kayda alınacağını ve kullanıcının göndermeye basmadan önce ne söylendiğine karar verir.

**"Yerel olmak özel olmak demektir."** Yerlilik verinin kime verilmesinin istenebileceğini değiştirir, saklanıp saklanmadığını değil. Denetim kaydı tutma, istem saklama ve yönetici erişimi tasarım seçimleridir ve tam kayıt tutan yerel bir kurulum yine de bir gözetim yüzeyidir.

**"GPU satın almak stratejidir."** Zamanlama, kota ve destek olmadan kapasite bir kuyruğa dönüşür. Başarılı örnekler donanım kadar yönetişimi ve işletimi anlatır.

**"YZ sorunu sohbet robotudur."** Bu literatürde anlatılan kurumsal değerin çoğu, hiçbir öğrencinin sohbet penceresi açmadığı denklik, iş yükü analitiği, etiketleme ve değerlendirme kayıtlarında yer alır.
