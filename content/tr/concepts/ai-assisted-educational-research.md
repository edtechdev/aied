---
title: YZ Destekli Eğitim Araştırması
created: "2026-10-14T21:50:00-04:00"
type: concept
foundations: [ai-literacy, human-ai-collaboration, academic-integrity]
technology: [generative-ai, llm, human-in-the-loop-ai, simulating-students, simulation]
methods: [research-methods-aied, meta-analysis-systematic-review, qualitative-research, quantitative-research, ai-ed-evaluation, benchmark, mixed-methods-research]
assessment: [educational-measurement, learning-gains]
ethics: [ai-use-disclosure, hallucination-risk, trust]
audience: [researchers, instructors, faculty developers]
level: [higher ed]
page_kind: [synthesis]
connected_faqs: [making-simulated-students-behave-like-learners, how-can-ai-assist-with-educational-research]
confidence: medium
contributors: [editor]
translation_of: concepts/ai-assisted-educational-research
source_updated: "2026-10-26T11:15:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-05"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent


---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sentez:** YZ destekli eğitim araştırması, alanın kendi bilimsel çalışmasının bir aracı olarak YZ kullanımıdır — edebiyatı arama ve getirme, derlemeler için kayıtları tarama, nitel verileri kodlama, verileri analiz etme, el yazmalarını taslaklamak ve düzenlemek ve bu araçların üretilen bilgiye ne yaptığını soran yansıma. YZ *hakkında* araştırmadan ayrıdır: YZ'nin öğrenenlere yardım edip etmediğini incelemek için kullanılan tasarımlar [[research-methods-aied]]'ya, YZ sistemlerinin değerlendirmesi [[ai-ed-evaluation]]'e ve tek bir AIED çalışmasının okunması [[interpreting-and-applying-aied-research]]'e aittir. Bu sayfa, araştırmacının kendi iş akışını ve uygulayıcı-araştırmacının sorgulamasını — öğretme ve öğrenmenin bilimini ve sınıf araştırmasını — ve otomasyonun herhangi birine girdiğinde epistemik ödünleri kapsar. Kanıtı ince ve yenidir: bir çerçeve önerisi, bir derleme ekibinin yansıtıcı hesabı, küçük bir odak grup çalışması, iki bibliyometrik çalışma, bir atölye raporu ve tek araştırmacılı vaka çalışmaları. Yerleşik uygulamadan çok bir seyahat yönünü tanımlar ve uygulayıcı-araştırma kolu hepsinin en incisidir.

## Dikkate Alınması Gereken Sorular

- Burada araştırmacı sayılan kim: fonlu akademisyen, lisansüstü öğrenci, kendi sınıfını inceleyen öğretim görevlisi mi? Kanıt bunların hangisini gerçekten tarif ediyor?
- Bir YZ taraması derlemenizden bir çalışmayı çıkardı. O karardan kim hesap verir — satıcı, araç, protokol mü, yoksa siz mi?
- Bir model okumadığınız kaynakları özetlediğinde, bilimsel işin hangi parçasını yapmayı bıraktınız?
- Simüle bir öğrenci, bir öğretmeni birçok profil boyunca test edebilir. Gerçek öğrenciler hakkındaki hükmüne inanmadan önce neyi denetlerdiniz?
- Uygulayıcı sorgulaması genellikle yerel ve küçüktür. Kanıtı fonlu bir deneyin eşiğini karşılamalı mı, yoksa ortamın kendisi önemli olduğu için farklı mı tartılmalı?
- YZ bir makalenin taslağını çıkarmaya yardım ettiyse, okurlara ne söylenmeli ve bu ifşa nerede yaşamalı?

## Giriş

YZ destekli eğitim araştırması, alanın YZ araçlarını kendi işine çevirmesidir. Çalışmanın nesnesi, bir YZ öğretmeni kullanan bir öğrenen değil, arama, tarama, çıkarma, kodlama, analiz veya yazma için bir model kullanan bir araştırmacıdır. Değişen, araştırmacının iş akışı ve daha sessizce, çıktısının kanıt olarak sayılmasının ölçütleridir.

Bu sayfa kasıtlı olarak eğitimde YZ *hakkında* araştırma hakkında değildir. Bir YZ öğretmeninin öğrenmeyi iyileştirip iyileştirmediği soruları [[research-methods-aied]] tarafından, YZ sistemlerinin değerlendirmesi [[ai-ed-evaluation]] tarafından ve tek bir çalışmanın temkinli okunması [[interpreting-and-applying-aied-research]] ve [[limitations-in-aied-research]] tarafından ele alınır. İki edebiyat sıklıkla birbirine karıştırılır ve ikincinin araçlama iddiaları sıklıkla birinciyi desteklemek için ödünç alınır.

Kapsam edebiyat aramadan tarama, kodlama, analiz ve yazmaya uzanır ve bir alanın ürettiği bilgiye otomasyonun ne yaptığını soran epistemolojik yansımayı içerir. Ayrıca uygulayıcı araştırmasını da içerir: öğretme ve öğrenmenin bilimi ve sınıf sorgulaması, bir öğretmenin kendi uygulamasını incelediği yer. O kol, bu sayfanın en zayıf parçasıdır ve aşağıdaki bölümler bunu düzeltmek yerine öyle söyler.

## YZ araştırma iş akışına nasıl girer

Kullanım hesapları, etki için kanıttan daha tutarlıdır. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai ve Chan (2026)]], bir kurumda yedi odak grubunda 28 lisansüstü araştırma öğrencisine görüşmeye gitti ve 28'in 27'sinin araştırmalarının bir yerinde üreten YZ kullandığını buldu: fikir oluşturma, edebiyat derlemesi, açıklama, veri işleme, programlama, akademik yazma, düzenleme ve çeviri.

Katılımcıları kredülü değil kalibreydi. Araçları algılanan risk ve entelektüel taleplere göre görevlere eşlediler, YZ'yı düşük riskli prosedürel işte daha yoğun kullandılar ve bilimsel katkının merkezi olduğu yerlerde temkinli kaldılar. Ayrıca baştan sona insan gözetimini sürdürdüler, modeli "yanıltıcı" veya "tamamen yanlış" olabilen bir asistan olarak ele alarak.

Politika bulgusu pratik olanıdır. Mevcut kurumsal rehberlik öğretmeyi, öğrenmeyi ve değerlendirmeyi ele aldı ve katılımcılar bunu soyut ve araştırma uygulamasıyla uyumsuz olarak deneyimlediler. Yazarlar, kural kitabından çok gelişimsel bir iskele olarak dört boyutlu bir YZ okuryazarlığı çerçevesine temellendirilmiş araştırmacıya yönelik yönergeler önerir.

Çalışma tek bir kurumu, 28 kişilik kendi kendini seçen bir grubu ve kendi bildirilen hesapları kapsar; öğrenciler bütünlük nedenleriyle kullanımı eksik bildirmiş olabilir. Yetenekli bir grubun bu araçları nasıl kullandığını tarif eder, kullanımın ne ürettiğini değil.

## Edebiyat arama ve getirme

Bir atölye raporu, bir gündemi ölçmek yerine eşler. Üreten YZ ve Akademik Arama üzerine CHIIR 2026 Atölyesi, insan bilgi etkileşimi ve getirme alanındaki araştırmacıları bir araya getirdi ve raporu, belge getirme için kurulan sistemlerin artık özetleme, önerme, sentezleme ve konuşma yaptığını tarif eder — sistemin kaynakları bulurken yorumun kullanıcıda kaldığı varsayımını rahatsız ederek.

Bir şimşek konuşması, modellerin bilim insanlarını nasıl yeniden inşa ettiğini test etti. 10 disiplin ve 8 küresel bölgede 1.596 tohum yazara ilişkin OpenAlex ve Google Scholar temel gerçeğine karşı, çok atıf alan araştırmacıların yeniden inşa edilme oranı daha az atıf alan akranlarının yaklaşık iki katıydı; DeepSeek R1, Llama 4 Scout ve Mixtral 8×7B test edildi.

Bir kütüphaneci bir "güven boşluğu" bildirdi: öğrenciler genellikle üreten aramaya aşırı güvendi, fakülte ise ona güvenmedi ve tek oturumlu atölyeler kalıcı okuryazarlık için yetersiz bulundu. Katılımcıların en çok döndüğü tasarım ipliği "sürtünme" idi — kullanıcıları öğrenmenin geldiği eleştirel, bazen rahatsız edici işle meşgul tutmak.

Rapor tek bir, kendi kendini seçen olayı kapsar ve çoğunlukla görüşleri, tasarım ilkelerini ve araştırma sorularını kaydeder. Rakamları atölyeden çok bireysel konuşmalara aittir ve içinde hiçbir şey YZ akademik aramanın öğrenmeyi iyileştirdiğini veya zarar verdiğini göstermez.

## Tarama ve sistematik derleme otomasyonu

Sistematik derlemeler, otomasyonun en ileri gittiği ve sınırlarının göründüğü yerdir. [[scaffolding-systematic-reviews-2026|Wang ve ark. (2026)]], disiplinler arası bir ekibin derlemesi üzerine yansıtır ve otomasyonun prosedürel yükü ağırlıklı olarak özet taramasında azalttığını bildirir — ASReview, SWIFT-Review, Covidence, AIScreenR ve MetaMate gibi araçlarla — oysa veri çıkarma, uzlaştırma ve sentez insan değerlendiricilerde kaldı. Mentorluk ve akran tartışması, nezaket olmaktan çok metodolojik altyapı olarak işlev gördü.

Sonuçları bir devretmeden çok bir iş bölümüdür: prosedürel yükü otomasyona atayın, her çıktıyı doğrulayın ve yorumlayıcı kararları insan olarak tutun. Hesap, karşılaştırma koşulu olmayan bir ekibin yansımasıdır, bu nedenle stratejileri test edilmekten çok tarif edilir.

[[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta ve Lin (2026)]], 14.726 not kalemi taşıyan 888 derleme-otomasyonu makalesinde raporlama problemini nicelendirir. 2023'ten bu yana, yazılım ve ürün makalelerinin %38,0'i hiç değerlendirme bildirmedi, YZ makalelerinde bu oran %9,3. Boşluk tabakalaşmadan geçer: tarama ve seçimde yazılım makaleleri %39,3'ü hiç bildirmeyerek ortalama 3,2 esaslı değerlendirme kalemi gösterirken, YZ makaleleri ortalama 7,3 kalem ve %3,8 değerlendirme-yok oranı gösterdi.

Olumlu değerlendirme, devretmeye uygunluğu ima etmedi. Yalnızca olumlu değerlendirmeye sahip 118 YZ makalesi arasında, %52'si iş akışının rolü için gerekli eşiğin altında düştüğüne dair en az bir endişe bildirmeye devam etti. Model erişimi ezici biçimde tescilliydi: YZ kullanımının %84,1'i tescilli veya barındırılan sistemlere dayandı, %11,0 karma, yalnızca %4,9 açık ağırlıktı.

Bu örüntülerden yazarlar, beş uygulama düzeyi risk düzeyinden çok ifşa kademesi olan üç katmanlı PRISMA-LLM çerçevesini türetir. Test için sunulan bir öneridir, PRISMA Yürütme Kurulu tarafından onaylanmış resmi bir uzantı değildir. Makale düzeyinde sessizlik, doğrulamanın yokluğunun kanıtı değildir — ürün raporunda, protokolde veya bir depoda yaşıyor olabilir, diye uyarırlar.

## Nitel kodlama ve analiz

Nitel analiz, yorumun ürün olduğu aşamadır; bu devretmeyi savunmayı zorlaştırır. [[qualitative-research|Nitel Araştırma]] sayfası, YZ destekli kodlamaya ilişkin korpus kanıtını toplar; bunlar arasında insan–model anlaşmasının kodlama kalitesiyle aynı şey olmadığını ve hataların zamansal analiz yoluyla birikebileceğini gösteren çalışmalar vardır. O edebiyat modeli, çıktılarının insan yargısına karşı doğrulanmasını gerektiren bir ölçekleme yardımı olarak ele alır.

[[ai-methodologies-science-education-research-2026|Martin ve ark. (2026)]] rol değişimini doğrudan tarif eder. Otomatik kodlama modelleri uygulandıkça, araştırmacı öğrenci verilerini kodlamaktan modelin çıktılarını doğrulamaya kayar; denetimsiz modeller akıl yürütmeyi kümelediğinde, algoritma başlangıç keşif analizini gerçekleştirir. Araştırmacıların nitel, nicel ve kuramsal uzmanlığın yanında giderek daha fazla veri bilimi becerisine ihtiyacı olduğunu savunurlar.

Çerçeveleri ayrıca burada önemli olan denetimi sağlar: açıklanabilir YZ, otomatik kodlamanın anlamsal anlayışı mı yoksa yalnızca anahtar kelimeleri mi izlediğini ortaya çıkarabilir. İnsan etiketleriyle anlaşan bir kodlama hattı, yine de yanlış şeyi okuyor olabilir.

## Veri analizi ve epistemik ödünler

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen ve Graulich (2026)]], alanın bilgi üretiminin kendisine baskı yapar ve makaleleri bu sayfanın omurgasıdır. Hasok Chang'in (2004) epistemik yineleme hesabına — epistemik amaçlara doğru birbiri üzerine bina edilen ardışık bilgi aşamaları — temellendirerek, termometrenin yaklaşık 150 yıllık gelişimiyle bir paralel çizerler ve alanın şimdi benzer bir yinelemenin içinde olabileceğini savunurlar.

Merkezi endişeleri teknikten çok epistemiktir. Chang'in nomik-ölçüm problemi, bir niceliğin ölçülmesinin onu gözlemlenebilir bir şeyle ilişkilendiren bir yasayı gerektirdiğini, oysa o yasanın niceliği zaten bilmeden ampirik olarak test edilemeyeceğini belirtir. Araştırmacıdan çok eğitim verisi ve optimizasyondan çıkan YZ kaynaklı ölçüm fonksiyonları, kesin ve öngörücü görünürken opak kalabileceklerinden bunu çözmekten çok yoğunlaştırabilir.

Çerçevenin yedi evresi vardır: problem çerçeveleme; aletleme ve ölçüm; deney ve kanıta dayalı çıkarım; karşılaştırmalar ve çoğaltma; normlar ve uzlaşı inşa etme; uygulama ve sonuçları; ve sürekli iyileştirme. Yazarlar bunları yinelenebilecek, çakışabilecek veya yok olabilecek analitik boyutlar olarak sunar, doğrulanmış bir dizi olarak değil.

Karşılaştırılabilirlik, en keskin eşitlik avantajına sahip evredir. Regnault ilkesi, bir aletin aynı koşullar altında aynı okumayı vermesini ve bir tür aletlerin anlaşmasını gerektirir — ama karşılaştırılabilirlik öğrenci popülasyonları boyunca uzanmalıdır ve makine öğrenmesi, öğrencilerin daha zayıf olanları ifade ettikleri çeşitli biçimlerden çok kanonik fikirleri daha iyi kodlama eğilimindedir.

Ayrıca bir hesapverebilirlik problemi adlandırırlar. Araştırmacılar, eğitim verilerini, ince ayarını ve hedeflerini bilmedikleri önceden eğitilmiş modelleri kullanır; bu, epistemik bağımlılığa bir katman ekler; bu sistemler sosyoteknik ağlardan çıktığı için sorumluluk tahsisi zorlaşır — bir "çok-el problemi".

Gerekli dürüstlük, makalenin veri bildirmediği ve hiçbir öğrenme etkisi kurmadığıdır. YZ metodolojilerinin araştırmayı iyileştirdiğini veya daha geçerli sonuçlar verdiğini göstermez; o karşılaştırma gelecek iş olarak ortaya konur ve yazarlar hipotezlerinin "tamamen yanlış çıkabileceğine" izin verir.

## Araştırma yazımı, atıf ve bütünlük

Yazım, YZ yardımının en görünür olduğu ve arızalarının en sonuçlu olduğu yerdir, çünkü bir atıf bir hesapverebilirlik iddiasıdır. [[citation-errors-hallucinations-computing-education-2026|Denny ve ark. (2026)]], tüm ACM Dijital Kütüphanesi'ni — 723.930 yayın ve 15.872.533 atıf — denetledi ve 2021'den itibaren yayımlanmış 5.225 hesaplama eğitimi makalesinden 113.588 atfı izledi.

828 şüpheli kaydı elle doğruladılar ve 14 makalede, hepsi 2025 ve 2026'dan, doğrulanabilir biçimde uydurma bibliyografik bilgi içeren 30 atıf buldular. SIGCSE Teknik Sempozyumu'nda sayı, 2025 bildirilerinde 3'ten 2026'da 17'ye yükseldi ve 2026 bildiri makalelerinin %2,3'ünde göründü. 30'dan 17'si, gerçek bir başlığı uydurma veya yanlış yazarlarla eşleyen melezlerdi.

Sayıları kasıtlı bir alt sınırdır ve problemi yazılımla çözülmüş olmaktan çok paylaşılan bir sorun olarak sunarlar. Yazarlar her atıf yapılan eseri doğrulamalıdır, özellikle yazımda üreten YZ kullanıldığında; değerlendiriciler her atfı denetleyemez, bu nedenle yerler hedefli denetimler benimser; yayımcılar üst veriyi iyileştirmelidir. Otomatik tespit, temel gerçek olarak ele aldığı üst verinin kusurlarını miras alır.

YZ yazımının ölçek etkileri ikinci bir bibliyometrik çalışmada görülür. [[ai-assisted-writing-research-teams|Wang ve ark. (2026)]], 2020'den bu yana PLoS ve Nature portföy dergilerinden 147.074 yayını analiz etti ve YZ destekli yazımı daha küçük, gençlere meyilli ekiplerle ilişkilendirdi. Hiç YZ yardımından tam YZ yardımına aşırı kaymada, ekip büyüklüğü PLoS'ta %22,1 ve Nature'da %45,5 daha küçüktü (Poisson β = −0,250 ve −0,607, her ikisi de p < 0,01).

Etki açıkça zarar görmedi. YZ destekli PLoS makalelerinin yaklaşık %7,34'ü ve Nature olanların %7,40'ı FWCI'nin en iyi %5'ine ulaştı, insan yazımlı her iki karşılaştırma grubunun üzerinde ve eşleştirilmiş karşılaştırmalar en iyi %5 FWCI olasılığının %3,0 ve %2,7 daha yüksek olduğunu gösterdi (her ikisi de p < 0,01). Veriler gözlemseldir, bu nedenle yazarlar güçlü nedensel iddialardan kaçınır.

## Araştırma ortamında kalıcı aracılar

Tek istek metinlerinin ötesinde, kalıcı aracılar araştırma çalışma alanının kendisine gömülmektedir. [[persistent-ai-agents-academic-research|Alzahrani (2026)]], kalıcı hafıza, yerel dosyalar, dış araçlar, zamanlanmış rutinler ve devredilmiş rollere sahip bir aracının bir hekim-bilim insanının çalışma alanında çalışmasına ilişkin 115 günlük, tek araştırmacılı bir vaka çalışması bildirir.

Tanımlayıcı sonuçlar büyüktür. Kurtarılabilir ana aracı telemetrisi, 96 aktif gün boyunca 75.671 tekilleştirilmiş kayıt tuttu, aktif gün kesri 0,835; çalışma alanı 502 hafızayla ilgili dosya, 17 yapılandırılmış aracı dizini ve 57 beceri dosyası tuttu. Katı bir 25 günlük Mayıs alt kümesi, 627 model tarafından tamamlanan olay ve 73.950.305 kaydedilmiş token tuttu; bunların %82,9'u önbellek okumalarıydı, yaklaşık US\\$1,961 gözlemlelenmiş sistem harcamasıyla.

Çalışmanın ana katkısı, kalıcı bir aracının desteklemesi amaçlanan çıktıların — yönetişim ve eser başına maliyet gibi — bölümlü kıyaslamalar tarafından görünmez olması nedeniyle kurulmuş bir ölçüm çerçevesidir — PARE-M. Onun merkezi olumsuz bulgusu, toplu etkileşim hacminin insan girdisinin azaldığını göstermediğidir: hafıza ve prosedürler biriktikçe, devredilen işin kapsamı genişledi, bu nedenle en güçlü örüntü kanıtlanmış iş gücü ikamesinden çok kapasite genişlemesidir.

Sınırlamalar, tek başına gözlemlenen bir vakanın davet ettiği sınırlamalardır. Bir araştırmacı kullanıcı, tasarımcı, veri kaynağı, analist ve yararlanıcıydı; denetim grubu, temel dönem ve yönetişim olayları için bağımsız kodlayıcı yoktu.

## Araştırma ve değerlendirme araçları olarak simüle öğrenenler

[[simulating-students|Öğrencileri simüle etmek]], bilgi tabanının teknik ve olgu üzerine sayfasıdır: bilgi durumu ve hataları bir insanın yerine geçmeye yeterince sadık olan sentetik bir öğrenenin nasıl inşa edileceği. Bu sayfa aynı aygıtı araştırma ve değerlendirmenin bir aracı olarak ele alır — bir müdahale, bir alet, bir kıyaslama veya bir öğretmen, gerçek öğrenenlerin sağlayamayacağı bir ölçekte veya koşullarda test edilmek zorunda olduğunda sentetik bir öğrenenin *ne için* olduğu.

En net kullanım, bir öğretmeni zaman içinde değerlendirmektir. [[educlaw-bench-pedagogical-llm-agents-2026|Lee ve ark. (2026)]], bir aracı öğretmeni, hakimiyeti — gerçek öğrenci verileri üzerinde eğitilmiş bir bilgi izleme modelinden — yanıtlarını yönlendiren simüle bir öğrenenle 30 günlük bir ilişkiye yerleştirir. 10 aracı bağdaştırıcısı değerlendirerek, her bağdaştırıcı 5–10 gün içinde ideal öğrenme referansının çok altında bir plato yaptı; tek oturumlu değerlendirmenin ulaşamayacağı bir sonuç. Gözlemlenen prob doğruluğuna karşı bir kalibrasyon denetimi köşegeni sarar (1,19 milyon deneme üzerinden ECE 0,049, Brier 0,033).

Sadakat ön koşuldur ve ölçülebilirdir. [[beagle-grounded-learner-emulation-2026|Wang ve ark. (2026)]], gerçek öğrenci izlerinden davranışsal ıraksamayı en iyi temele karşı 0,53'e DKL = 0,31 olarak bildirir ve 71 değerlendiricili bir Turing testinde izleri gerçek öğrenci verilerinden istatistiksel olarak ayırt edilemezdi (%52,8 doğruluk, d′ = 0,15). Kaçınılması gereken arıza yetkinlik önyargısıdır: istek metniyle çalıştırılan modeller, acemilerin yerine geçmek için görevi fazla iyi çözer.

İnanç durumu, sahte olması kolay olan parçadır. [[llm-student-simulation-misconception-faithfulness|Do, Sonkar ve Sachan (2026)]], 4B'den 120B parametreye yedi modelde, simülatörlerin hedefli, hizasız ve jenerik geri bildirim altında atanmış bir yanlış kanıyı neredeyse tekdüze oranlarda terk edip içsel bilgiden yeniden çözdüğünü gösterdi. Bunu bir Seçici Çevirme Puanı ile nicelendirirler ve eğitim yoluyla sadakati +0,56'ya kadar yükseltirler; asıl nokta şudur: bir kişiliğe istek metni vermek bir öğrenen inşa etmez.

Simüle öğrenenler ayrıca değerlendirme araçlarının kendisi için kontrollü bir test yatağı olarak hizmet eder. [[llm-judged-helpfulness-pedagogy-signal|Fan ve ark. (2026)]], üç öğretmen tabanının her birini önceden kaydedilmiş bir protokol altında bir sabit zayıf simüle öğrenenle eşledi ve genel amaçlı yararlılık kriterlerinin çok az pedagojik sinyal taşıdığını buldu; yedi politika, yargılanan yararlılığın 0,25 puanlık bandı içinde yargılanan pedagojinin 2,3 puanlık aralığına yayıldı. Yanıt açığa çıkaran turlar, her tabanda öğrencinin daha az bağımsız çalışmasıyla izlendi.

Teminat sayfada yer almalıdır. Bir simülatörün hükmü, simülatör kadar iyidir ve kapsamı en kolay öğrenenlere doğru eğilimlidir.

## Uygulayıcı araştırması: Öğretme ve öğrenme bilimi ve sınıf sorgulaması

Bu, korpusun en az belgelediği koldur. Öğretme ve öğrenmenin bilimi ve sınıf araştırması uygulayıcı sorgulamalarıdır — kendi kursunu inceleyen, genellikle küçük ölçekte, sıklıkla öz çalışma olarak bir öğretmen — ve burada toplanan sayfalar bu kipte YZ kullanımının araştırılmış bir hesabını sağlamaz.

En yakın kanıt, yerinde olmaktan çok komşudur. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai ve Chan (2026)]]'deki lisansüstü öğrenciler araştırmacı olmayı öğreniyorlardı, kendi öğretimlerini incelemiyorlardı. [[scaffolding-systematic-reviews-2026|Wang ve ark. (2026)]]'deki ekip yerel bir proje değil, resmi bir disiplinler arası derleme yürüttü. Bibliyometrik çalışmalar disiplinleri ve yayımcıları tarif eder, sınıfları değil.

Dürüst ifade bu nedenle bir bulgudan çok bir boşluktur. YZ destekli uygulayıcı sorgulaması makul biçimde yaygındır ve bu korpusta neredeyse belgelenmemiştir; derleme otomasyonu ve bibliyometrik kanıtı, bir öğretim görevlisinin kendi öğretimini incelemek için YZ'yi nasıl kullanması gerektiğini çözmüş gibi sunan bir sayfa aşırıya kaçardı.

Taşınabilecek şey bir sonuçtan çok bir eğilimdir: YZ'nin rolünü yöntemlerde adlandırmak, yorumlayıcı kararları insan olarak tutmak ve neyin doğrulanıp doğrulanmadığını bildirmek.

## Kanıtın henüz kurmadığı şeyler

- **Başabaş karşılaştırma yok.** Martin ve ark., YZ destekli ile geleneksel yöntemler arasındaki karşılaştırmayı gelecek iş olarak ortaya koyar. Hiçbir çapa makale, bir YZ metodolojisinin daha geçerli sonuçlar verdiğini göstermez.
- **Her yerde ince tasarımlar.** Çapalar bir çerçeve önerisi, bir ekibin yansıtıcı hesabı, bir atölye raporu, bir odak grup çalışması ve gözlemsel bibliyometridir. Hiçbiri YZ destekli bir yöntemin kontrollü bir deneyi değildir.
- **Uygulamanın değil, bir raporlama denetimi.** PRISMA-LLM makale düzeyinde sessizliği okur; makalesinde değerlendirmesi olmayan bir iş akışı başka yerlerde doğrulanmış olabilir.
- **Uygulayıcı araştırması yetersiz temsil edilir.** Buradaki sayfaların yalnızca birkaçı Öğretme ve Öğrenme Bilimi veya sınıf araştırmasından söz eder, bu nedenle korpus kendi uygulamalarını inceleyen öğretmenler hakkında iddiaları temellendiremez.
- **Hareketli bir hedef.** Araçlar yayımdan daha hızlı iyileşir, bu nedenle 2025 iş akışı hakkında bir bulgu, o biçimde artık var olmayabilecek bir sistem neslini tarif eder.

## Atıf

Martin, P. P., Rost, M., Koenen, J., & Graulich, N. (2026). [Amid an Epistemic Iteration: How AI Methodologies May Transform the Nature of Science Education Research](https://doi.org/10.1007/s11191-026-00789-7). *Science & Education*.

Wang, X., Dadashipour, F., Basori, Maeda, Y., & Richardson, J. C. (2026). [Scaffolding systematic reviews in learning design and technology through mentoring and AI integration](https://doi.org/10.1007/s11423-026-10629-8). *Educational Technology Research and Development*.

Dai, W., & Chan, C. K. Y. (2026). [Shaping responsible GenAI use in research through AI literacy-oriented guidelines: Insights from postgraduate students](https://doi.org/10.1186/s41239-026-00609-6). *International Journal of Educational Technology in Higher Education, 23*, 33.

Denny, P., Barbre, G., Blake, M., Hua, Y. C., Leinonen, J., Luxton-Reilly, A., Prather, J., & Reeves, B. N. (2026). [Testing Our Foundations: Citation Trends, Errors, and Emerging Hallucinations in the Computing Education Literature](https://arxiv.org/abs/2609.16574). arXiv preprint.

Zabaleta, M., & Lin, B. (2026). [PRISMA-LLM: An Empirical Reporting Framework for AI-Assisted Systematic Reviews](https://arxiv.org/abs/2609.11559). arXiv preprint.

Liu, Y., Arguello, J., Hoeber, O., et al. (2026). [Report on CHIIR 2026 Workshop on Generative AI and Academic Search (GAI&AS)](https://arxiv.org/abs/2606.08936). *ACM SIGIR Forum*.

Alzahrani, A. H. (2026). [Persistent AI Agents in Academic Research: A Single-Investigator Implementation Case Study](https://arxiv.org/abs/2605.26870). arXiv preprint.

Wang, H., Zhang, M., Bu, Y., Zhao, S. X., & Liu, M. (2026). [Smaller, Younger, and More Impactful: How AI-Assisted Writing Transforms Research Teams](https://arxiv.org/abs/2605.27404). arXiv preprint.

Lee, U., Lee, S., Jeong, Y., Lee, E., Shin, M., & Kwon, H. (2026). [EduClaw-Bench: A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners](https://arxiv.org/abs/2608.03206). arXiv preprint.

Wang, H. D., Cohn, C., Xu, Z., Guo, S., Biswas, G., & Ma, M. (2026). [BEAGLE: Behavior-Enforced Agent for Grounded Learner Emulation](https://arxiv.org/abs/2602.13280). arXiv preprint.

Do, H., Sonkar, S., & Sachan, M. (2026). [Simulating Students or Sycophantic Problem Solving? On Misconception Faithfulness of LLM Simulators](https://arxiv.org/abs/2605.12748). arXiv preprint.

Fan, S., Deng, B., Xu, M., Liu, J., & Zhang, H. (2026). [Rethinking LLM-Judged Helpfulness as a Pedagogy Signal: A Pre-Registered Audit Across Tutor Models](https://arxiv.org/abs/2607.28128). arXiv preprint.

## Yaygın yanlış anlamalar

- **“LLM ve yazılım makaleleri eşit iyi değerlendirilir.”** 2023’ten bu yana **yazılım ve ürün makalelerinin %38,0’ı hiçbir değerlendirme bildirmemiştir; LLM makalelerinde bu oran %9,3’tür**. Boşluk büyüktür ve daha yeni araçların daha az titizlikle sınandığı varsayımının tersine işler.

- **“Göreve göre katmanlaştırmak boşluğu giderir.”** **Boşluk katmanlaştırmadan sonra da sürer**: tarama ve seçmede yazılım makaleleri ortalama **3,2 esaslı değerlendirme maddesi** sunmuş ve **%39,3’ü hiç sunmamıştır**, LLM makaleleri ise daha fazla sunmuştur. Fark görevin değil, makale sınıfının sistematik bir özelliğidir.

- **“Olumlu bir değerlendirme, iş akışının amaçlanan çıtayı karşıladığı anlamına gelir.”** **Yalnızca olumlu değerlendirme bildiren 118 LLM makalesinin %52’si**, iş akışının rolünün gerektirdiği çıtanın altında kaldığına dair en az bir kaygıyı yine de bildirmiştir. Olumlu değerlendirmelerin yarısı kendi çürütmesini içermiştir.

## Bağlı kavramlar

- [[research-methods-aied]] — the umbrella for the designs used to study AI in education
- [[ai-ed-evaluation]]
- [[interpreting-and-applying-aied-research]]
- [[limitations-in-aied-research]]
- [[meta-analysis-systematic-review]]
- [[qualitative-research]]
- [[quantitative-research]]
- [[mixed-methods-research]]
- [[benchmark]]
- [[educational-measurement]]
- [[assessment-validity]]
- [[learning-gains]]
- [[simulating-students]]
- [[simulation]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[generative-ai]]
- [[llm]]
- [[human-in-the-loop-ai]]
- [[ai-literacy]]
- [[academic-integrity]]
- [[ai-use-disclosure]]
- [[hallucination-risk]]
- [[trust]]
- [[higher-ed]]
- [[educational-development]]

## Bağlı makaleler

- [[ai-methodologies-science-education-research-2026]] — a seven-phase reflective framework for how AI methodologies may transform science education research (Martin et al., 2026)
- [[scaffolding-systematic-reviews-2026]] — one interdisciplinary review team's account of mentoring and selective AI integration (Wang et al., 2026)
- [[dai-chan-responsible-genai-research-ai-literacy-2026]] — how 28 postgraduate students used GenAI across the research workflow, and the guidelines they suggest (Dai & Chan, 2026)
- [[citation-errors-hallucinations-computing-education-2026]] — a field-scale audit of fabricated references in the computing-education literature (Denny et al., 2026)
- [[prisma-llm-ai-assisted-systematic-reviews-2026]] — a reporting framework for AI-assisted systematic reviews, and the accountability gap it documents (Zabaleta & Lin, 2026)
- [[genai-academic-search-workshop]] — a CHIIR 2026 workshop report on generative AI and academic search (Liu, Arguello, Hoeber et al., 2026)
- [[persistent-ai-agents-academic-research]] — a single-investigator case study of a persistent agent in a research workspace (Alzahrani, 2026)
- [[ai-assisted-writing-research-teams]] — bibliometric evidence that AI-assisted writing accompanies smaller, younger research teams (Wang et al., 2026)
- [[educlaw-bench-pedagogical-llm-agents-2026]] — a 30-day benchmark that evaluates tutor agents against a simulated learner (Lee et al., 2026)
- [[beagle-grounded-learner-emulation-2026]] — a neuro-symbolic simulator that reproduces genuine novice struggle (Wang et al., 2026)
- [[llm-student-simulation-misconception-faithfulness]] — why simulators abandon a misconception under any feedback, and how training fixes it (Do, Sonkar & Sachan, 2026)
- [[llm-judged-helpfulness-pedagogy-signal]] — a pre-registered audit that uses a fixed simulated learner to test whether helpfulness measures pedagogy (Fan et al., 2026)

