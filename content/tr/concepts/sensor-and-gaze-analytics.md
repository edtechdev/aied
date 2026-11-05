---
title: Sensör ve Bakış Analitiği
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [ai-education, limitations-in-aied-research]
pedagogy: [student-engagement, self-regulated-learning, embodied-learning]
technology: [affective-computing, learning-analytics, multimodal, student-modeling, machine-learning]
assessment: [assessment-validity, educational-measurement, remote-proctoring, automated-assessment]
methods: [ai-ed-evaluation]
ethics: [privacy, bias-mitigation, neurodiversity, equity-in-ai-education]
level: [higher ed, k 12]
confidence: medium
translation_of: concepts/sensor-and-gaze-analytics
source_updated: "2026-11-04T16:09:41-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sensör ve Bakış Analitiği** — dikkat, katılım, bilişsel yük ve duygudurum gibi öğrenen durumlarını çıkarsamak için göz izleme, elektroensefalografi, elektrodermal aktivite, kalp atış hızı değişkenliği ve kameradan türetilen duruşun kullanımı. [[ai-education|Eğitimde YZ]]’de bu sinyaller, testlerin ve öz bildirimlerin sağlayamadığı sürekli ve sözel olmayan bir öğrenme görünümü vaat eder. Aynı zamanda alanın en zor çıkarım sorununun merkezinde dururlar: bir sensör bir bedeni kaydeder, bir zihni değil; bir öğrenenin ne düşündüğü ya da hissettiğine dair her iddia bu kaydın üzerine eklenen bir yorumdur ([[kim-ai-embodied-learning-review-2026|Kim ve Han, 2026]]).

## Düşünülmesi Gerekenler

- Bir web kamerası, gözlerinizin bir ders boyunca video oynatıcının içinde kaldığını gösterebilir. Bu, dikkat verdiğiniz anlamına gelir mi?
- Bir öğretim aracı bilişsel yükünüzü gerçek zamanlı tahmin edebilseydi, size sormadan bu tahmine göre hareket etmeli miydi?
- Bir öğrencinin bakışı tik, görme engeli ya da kültürel bir norm nedeniyle ekrandan ayrılabilir. “Düşük dikkat” bayrağı o öğrenci için ne anlama gelir?
- Bir üniversitenin ders iyileştirmesi için beyin ve kalp verisi toplamasına izin verilmeli mi ve gerçek rıza neyi gerektirirdi?
- “%75 katılım doğruluğu” rakamı kesin görünüyor. Sensör gerçekte katılımın hangi katmanına ulaştı ve hangisini kaçırdı?
- Gözetim artık duruşu ve baş hareketini okuyor. Suistimali tespit etmek ile bir bedeni yargılamak arasındaki çizgi nerede?

## Giriş

Sensör ve bakış analitiği, bir öğrenenin fiziksel ölçümlerini eğitsel çıkarımlara dönüştüren bir yöntem ailesini betimler. Ölçümler arasında gözlerin nerede ve ne kadar süre durduğu, kafa derisinin elektriksel etkinliği, ter bezi tepkileri, kalp atış hızındaki atıştan atışa değişkenlik ve baş ile gövdenin konumu ve hareketi bulunur. Çıkarımlar arasında dikkat, katılım, bilişsel yük, kafa karışıklığı, stres ve değerlendirme ortamlarında şüphe yer alır.

Cazibe açıktır. [[self-report-measures|Öz bildirimler]] geriye dönüktür ve kabadır; testler ise öğrenmeyi yalnızca birkaç anda örnekler. Sensörler sürekli çalışır ve öğrenene neredeyse hiç bilinçli çaba yüklemez. Bu bileşim algılamayı [[learning-analytics|öğrenme analitiğinin]] ve [[student-modeling|öğrenen modellemesinin]] merkezine yerleştirmiş ve algılamanın teknik olarak etkileyici, yorumun ise ince olduğu geniş bir literatür üretmiştir.

YZ’yi [[embodied-learning|vücut bulmuş öğrenmeyle]] eşleştiren 23 çalışmanın bir [[meta-analysis-systematic-review|sistematik incelemesi]] bu dengesizliği somutlaştırır. Analiz ve değerlendirme kodlanan YZ rollerinin %40,0’ını, tanıma ve tespit %22,5’ini oluştururken geri bildirim ve koçluk %15,0’ında kaldı. Algılama rolleri rol etiketlerinin %62,5’ini, katılımcı niteliğindeki roller ise %35,0’ini oluşturdu ([[kim-ai-embodied-learning-review-2026|Kim ve Han, 2026]]). Alan, öğrenenleri izlemede sonra ne olacağını değiştirmekten daha iyidir.

## Her sinyal gerçekte neyi ölçer

**Bakış ve fiksasyon.** Göz izleyiciler gözün nereye baktığını, ne kadar süre orada kaldığını, ne zaman sıçradığını ve ne kadar geniş dağıldığını bildirir. WebGazer gibi ekran tabanlı sistemler bakışı bir web kamerasından tahmin ederken gözlükler gözü doğrudan izler. TutorLoop bakışı iki niceliğe dönüştürür: içerik alanı içindeki bakış noktalarının yüzdesi olarak dikkat ve dağılmış bakışın bilişsel yükü izlediği gerekçesiyle bakış entropisi olarak iş yükü ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Çocuklar için bakış bilgili bir yardımcı olan Ollie ise bir resimde ilgi alanları tanımlar ve çocuk bunlardan birine baktığında anlatımı tetikler ([[gaze-informed-ai-children|Wu vd., 2026]]).

**Elektroensefalografi.** EEG, kafa derisi boyunca gerilim dalgalanmalarını yüksek zamansal çözünürlükte kaydeder. Bu ailede kortikal etkinliğe doğrudan ulaşan tek sinyaldir; değerlendirme araştırmasını çekmesinin nedeni budur. Pratik eğitim sistemleri kuru elektrotlar ve az sayıda kanal kullanır: E3Sense 125 Hz’de dört kuru EEG kanalı almış ve iki ön kanalı analiz etmiştir ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan vd., 2026]]). Araştırma düzeyindeki düzenekler tersini yapar: Kosmyna vd. (2025), öğrencilerin bir [[llm|LLM]] ile, bir arama motoruyla ya da hiçbir araç olmadan yazmasını karşılaştırmak için 32 kanallı EEG kullanmış ve en zayıf sinirsel bağlantılılığı LLM grubunda bulmuştur ([[your-brain-on-chatgpt-cognitive-debt-essay-writing|Kosmyna vd., 2025]]). Bu çalışma aynı zamanda tek kanallı kanıt konusundaki en açık uyarıdır; çünkü merkezi iddiası, 54 katılımcıdan yalnızca 18’inin katıldığı isteğe bağlı bir çapraz geçiş oturumuna dayanır.

**Elektrodermal aktivite.** EDA, sempatik uyarılmanın bir göstergesi olan ter bezi iletkenliğini ölçer. Strese, çabaya ve duygusal yoğunluğa yanıt verir ve bunlar arasında ayrım yapamaz. Aynı yapı bilekliklerde ve bir göz izleyici çerçevesiyle birkaç santimetre aralıkla sabitlenmiş alın elektrotlarında görünür ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan vd., 2026]]).

**Kalp atış hızı ve kalp atış hızı değişkenliği.** Kalp atış hızı uyarılmayı izler ve atışlar arasındaki değişkenlik otonomik toparlanmayı gösterir. Oura yüzüğü takan 458 öğrenciyle bir yıl süren bir çalışmada duygusal tükenme dili, daha düşük uyku verimliliği ve daha düşük kalp atış hızı değişkenliğiyle birlikte gitti ([[affective-text-wearable-student-health|Duygusal Metin ve Giyilebilir Algılama, 2026]]). İki ölçüm de bir nedeni tanımlamaz.

**Kamera tabanlı duruş ve hareket.** Bir gözetim sistemi kare başına on yedi vücut işaret noktası çıkarabilir ve duruş sapması, baş hareketi eğilimi ve üst gövde hareketi türetebilir ([[arif-automated-online-proctoring-yolov11-2026|Arif vd., 2026]]). Bu, hareketi ölçer. Onu şüpheli davranış olarak adlandırmak ayrı ve desteklenmeyen bir adımdır.

Bu sinyaller örnekleme hızı, gürültü ve ölçümleme yükü açısından farklılaşır. E3Sense on iki EEG, altı göz ve üç EDA penceresini 166 boyutlu ortak bir 120 saniyelik gösterimde hizaladı ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan vd., 2026]]). EduGage aynı anda yedi cihaz türü çalıştırdı ve kullanılabilir sinyalin çoğunu hafif bileşimlerin taşıdığı sonucuna vardı ([[engagement-assessment-video|Leng vd., 2026]]).

## Sinyaller ne için kullanılır

**[[video-education|Video öğreniminde]] katılım tespiti.** E3Sense 30 üniversite öğrencisinden video başına beş bölümü değerlendirmesini istedi ve 450 değerlendirme elde etti. Birleşik bir model, ayrılmış katılımcılarda %63,0’lık mod temeline karşı %75,0 tek düzey içi dengeli doğruluğa ulaştı ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan vd., 2026]]). EduGage 16 katılımcı ve 715 sonda penceresi boyunca 0,81 MAE ve %83,75 tek düzey içi doğruluk bildirdi ([[engagement-assessment-video|Leng vd., 2026]]). İkisi de tahmini yaklaşık olarak ele alır.

**Sınıflarda dikkat tahmini.** Bir [[multimodal|çok kipli transformer]], 57 denekli doğal bir veri kümesi olan DIPSER üzerinde yüz görüntülerini giyilebilir sinyallerle birleştirdi ve 0,283 MAE’ye ulaştı. Yalnızca görsel bir temele üstünlüğü ölçülüydü ve yazarlar yüz özelliklerinin birincil bilgi kaynağı olduğu sonucuna varır ([[student-attention-estimation-fairness-2026|Fragkiadakis vd., 2026]]).

**Bilişsel yük ve geri bildirim zamanlaması.** TutorLoop, bakıştan türetilen dikkat ve iş yükünü bir pekiştirmeli öğrenme ajanıyla dört [[feedback|geri bildirim türü]] arasında seçim yapmak için kullandı. 187 katılımcı boyunca tam sistem temellere göre daha az sıklıkla müdahale etti ama yine de dikkati iyileştirdi ve iş yükünü düşürdü ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**Gözetim ve dürüstlük.** Duruş tabanlı gözetim, kendi etiketlenmiş senaryo kümesinde tavana yakın performans bildirir: %99,56 doğruluk ve 0,9957 AUC ([[arif-automated-online-proctoring-yolov11-2026|Arif vd., 2026]]). Giyilebilir YZ aynı sorunu öbür yönden değiştirir. Akıllı gözlükler, gözetimin dayandığı bakış düşüşünü ve duruş kaymasını ortadan kaldırır; Corbin ve arkadaşları bu duruma ikili şeffaflık der ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin vd., 2026]]).

**Duygudurum ve [[well-being|iyilik hâli]].** Sınavlar sırasında toplanan fizyolojik sinyaller not kategorilerini öngördü; rastgele orman 30 yineleme boyunca ortalama 0,96’ya ulaştı ([[physiological-signals-exam-outcomes-ml|Yamazaki ve Rimal, 2026]]). En güçlü yordayıcılar elektrodermal aktivite, ivmeölçer hareketi ve cilt sıcaklığıydı. Bu, uyarılma ve harekettir; kavrayış değil.

**Değerlendirme araştırması.** EEG, aşinalığın ve zihinsel temsilin doğrudan ölçüsü olarak test edilmiştir. İki çizgi de umut vericidir ve ikisi de keşifsel kalır; sonraki bölüm bunu ele alır.

## Çıkarım boşluğu

Yukarıdaki her kullanım bir zincire dayanır: fizyolojik ya da davranışsal bir olay, ondan hesaplanan bir özellik, etiketler üzerine eğitilmiş bir model ve zihinsel bir duruma dair bir iddia. Her halka sızdırır.

Etiket çoğu zaman en zayıf halkadır. E3Sense öğrenenlerin kendi bölüm değerlendirmelerini öngördü ve bu değerlendirmelerin %63’ü iki katılımlı düzeyde toplandı. Bir model, durumu değil dağılımı öğrenerek iyi puan alabilir. Araştırmacılar öğrenenlerin kendi katılım tanımlarını eklediğinde doğruluk %64,6’dan %71,5’e çıktı; bu da etiketlerin ve sinyallerin kısmen farklı şeyleri ölçtüğünü düşündürür ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan vd., 2026]]).

[[assessment-validity|Doğrulama]] modeli şişirebilir. EEG tabanlı aşinalık tahmini için on beş modelin kıyaslaması, katmanlı çapraz doğrulama altında 0,9853 F1’e ulaştı. Zamansal yapıya saygı duyan denemeden bağımsız Group K-Fold, zirveyi %25 şans düzeyine karşı 0,6038 F1’e düşürdü ([[eeg-familiarity-automated-assessment-2026|Nanayakkara ve Halloluwa, 2026]]). İlk sayı sızıntıyı betimler; ikincisi öğrenmeyi.

Sinirsel bir bağıntı bir puan değildir. EEG’den yeniden oluşturulan görüntüler, 55 katılımcı-video gözleminde test performansıyla R² = 0,79 düzeyinde ilişkiliydi. Doğru yanıtlanan maddeler yanlış olanlara göre daha yüksek anlamsal benzerlik de gösterdi. Ancak bir katılımcı yüksek kaliteli yeniden oluşturmalar üretti ve yanlış yanıtladı; dolayısıyla yeniden oluşturma kalitesi doğruluk olarak okunamaz ([[seeing-cognitive-representations-eeg-reconstruction|Su vd., 2026]]).

Dikkat öğrenme değildir. TutorLoop’ta dikkat öğrenmeyle r = 0,017 düzeyinde ilişkiliydi, iş yükü ise r = -0,168 ile olumsuz yönde ilişkiliydi ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Dikkat sinyalini en üst düzeye çıkaran bir sistem, gürültüye yakın bir şeyi optimize etmiş olurdu.

Fizyolojik bir profil bir tanı değildir. Sınav stresi modelleri uyarılma ve harekete dayanarak bir not kategorisi öngörür; yazarlar ise çıktının yüksek riskli bir karara değil kişisel koşulların ve ruh sağlığı bağlamının yanına ait olduğunda ısrar eder ([[physiological-signals-exam-outcomes-ml|Yamazaki ve Rimal, 2026]]).

Son olarak, toplama bütünleştirme değildir. Kim ve Han, çok kipli çalışmaların çoğunun akışları paralel topladığını, yalnızca birinin yüz duygudurumunu, bakışı ve yüz tespitini sonradan hizaladığını ve hiçbirinin girdilerini öğrenen sistemi kullanırken canlı olarak birleştirmediğini buldu ([[kim-ai-embodied-learning-review-2026|Kim ve Han, 2026]]). Eşzamanlanmış kanallardan oluşan bir sayfa, yalnızca bir kayıtken öğrenenin modeli gibi görünebilir.

## Öğrenenleri algılamanın etiği

**Rıza kurumsal güçle zayıflar.** Derse katılması ya da sınava girmesi gereken bir öğrenci bir kamerayı ya da giyilebilir cihazı özgürce reddedemez. Demografik nitelikler gönüllü olarak bile verilmemiş olabilir: DIPSER’in cinsiyet, yaş ve etnik köken etiketleri katılımcılar tarafından sağlanmak yerine bilgisayarlı görü modelleriyle görüntülerden çıkarıldı ([[student-attention-estimation-fairness-2026|Fragkiadakis vd., 2026]]). Bir modelin insanlara adil davranıp davranmadığını test etmek için kim olduklarını çıkarsamak, kendi başına bir profilleme eylemidir.

**Biyometrik veri sıradan analitik verisi değildir.** EEG, EDA ve kalp atış hızı değişkenliği sağlığa komşudur ve birçok yargı alanında özel kategori veridir. Bir dersin ihtiyaç duyduğunun ötesinde uykuyu, stresi ve tıbbi durumları açığa çıkarabilirler. Çocuklar için bakış bilgili bir sistem, küçük bir pilot çalışmada bile bir ebeveynin [[privacy|gizlilik]] itirazını çekti ([[gaze-informed-ai-children|Wu vd., 2026]]).

**İşlev kayması normal yoldur.** İyilik hâli izleme risk işaretlemeye, risk işaretleme de notlandırma kanıtına dönüşür. Corbin ve arkadaşları bu kaymanın değerlendirme versiyonunu gösterir: fiziksel dışlama başarısız olduğunda denetim nesnelerden bedenlere kayar ve öğrenciler gözlüklerinin düzeltici, cihazlarının tedavi edici olduğunu kanıtlamak zorunda kalır ([[corbin-ai-glasses-wearable-ai-assessment-2026|Corbin vd., 2026]]).

**Adillik başarısızlıkları farklı bedenlerde kümelenir.** Yüz tabanlı dikkat tahmini cilt tonuna, gözlüğe ve aydınlatmaya bağlıdır. Bakış tabanlı dikkat, göz temasından kaçınan öğrenenleri, bazı otistik ve [[neurodiversity|nöroçeşitli]] öğrenciler de dahil olmak üzere cezalandırır. Duruş tabanlı gözetim tikleri, kendini uyarıcı hareketleri ve kültürel hareket normlarını işaretler. Gözetim çalışması, işaretlenen duruşun suistimale karşılık gelip gelmediğini ya da dedektörün [[special-education|engelli öğrencilere]] veya bakıştaki kültürel farklılıklara adil davranıp davranmadığını test etmez ([[arif-automated-online-proctoring-yolov11-2026|Arif vd., 2026]]). Burada düzenleme bir çözüm değil, hatayı bir kurala aklamanın yoludur.

**Adillik iddiaları denek düzeyinde kanıt gerektirir.** Cinsiyete yönelik bir düzenleyici, doğrulama MAE farkını 0,02’den 0,005’e düşürdü, sonra ayrılmış deneklerde hem farkı hem de en kötü grup hatasını artırdı ([[student-attention-estimation-fairness-2026|Fragkiadakis vd., 2026]]). Tek bir bölünmeyi adillik kanıtı olarak raporlamak, eşitlik maliyeti olan bir tasarım hatasıdır.

**Gizlilik tasarıma içkin olabilir.** TutorLoop WebGazer’ı istemci tarafında çalıştırdı, böylece ham bakış tarayıcıdan hiç çıkmadı ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]). Bu seçim, maliyetin bir kısmının doğuştan değil mimari olduğunu gösterir. Daha zor soru, çıkarımın hiç var olup olmaması gerektiğidir.

## Yaygın yanlış anlamalar

**“Göz izleme dikkatin nerede olduğunu söyler.”** Gözlerin nereye baktığını söyler. Bakış bir slaytta dururken öğrenen başka bir şey düşünüyor olabilir ve bakış ekrandan dikkatle ilgisiz nedenlerle ayrılabilir. TutorLoop’un dikkat ölçüsü öğrenmeyle r = 0,017 düzeyinde ilişkiliydi; bu neredeyse hiç ilişki olmadığı anlamına gelir ([[tutorloop-sensor-cognitive-feedback-2026|TutorLoop, 2026]]).

**“Fizyolojik bir sinyal zihinsel durumun doğrudan okumasıdır.”** EDA sempatik uyarılmayı, kalp atış hızı değişkenliği otonomik toparlanmayı gösterir. İkisi de stresi çabadan ve heyecandan ayırmaz. Sınav notlarını EDA, hareket ve cilt sıcaklığından öngören bir model, öğrencinin kavrayışını değil bedenin uyarılma imzasını öğrenmiştir ([[physiological-signals-exam-outcomes-ml|Yamazaki ve Rimal, 2026]]).

**“Yüksek sınıflandırma doğruluğu sistemin durumu tespit ettiği anlamına gelir.”** Doğruluk etiketlere, bölünmeye ve temel orana bağlıdır. EEG aşinalık tahmini, doğrulama deneme sınırlarına saygı duyduğunda 0,9853’ten 0,6038 F1’e düştü ([[eeg-familiarity-automated-assessment-2026|Nanayakkara ve Halloluwa, 2026]]). Gözetimin %99,56’sı canlı sınavları değil, özel olarak etiketlenmiş bir senaryo kümesini betimler ([[arif-automated-online-proctoring-yolov11-2026|Arif vd., 2026]]).

**“Katılım tek bir şeydir, dolayısıyla tek bir puan onu temsil edebilir.”** Yapının üç kolu vardır ve bir sensör çoğunlukla birincisine ulaşır. E3Sense, öğrenenlerin onu bilişsel, davranışsal ve duygusal göstergelerle farklı oranlarda tanımladığını ve bu tanımların tahmini değiştirdiğini buldu ([[e3sense-multimodal-learner-engagement-sensing-2026|Anupkrishnan vd., 2026]]). Tek bir sayı hangi katmanın ölçüldüğünü saklar.

**“Model doğrulama bölünmesinde adilse sınıfta da adildir.”** Cinsiyet grupları arasında doğrulama hatasını eşitleyen bir düzenleyici, ayrılmış kümedeki farkı daha da kötüleştirdi ([[student-attention-estimation-fairness-2026|Fragkiadakis vd., 2026]]). Adillik bir konuşlandırmanın özelliğidir, bir denetim noktasının değil.

## Bağlı kavramlar
- [[student-modeling]]
- [[learning-analytics]]
- [[multimodal]]
- [[affective-computing]]
- [[student-engagement]]
- [[self-regulated-learning]]
- [[embodied-learning]]
- [[educational-measurement]]
- [[automated-assessment]]
- [[assessment-validity]]
- [[remote-proctoring]]
- [[academic-integrity]]
- [[privacy]]
- [[bias-mitigation]]
- [[neurodiversity]]
- [[equity-in-ai-education]]
- [[accessibility]]
- [[machine-learning]]
- [[cognitive-psychology]]
- [[intelligent-tutoring]]

## Bağlı makaleler
- [[gaze-informed-ai-children]] — Bakışla tetiklenen LLM anlatımı çocukları anlatılan bölgede 6,48 sn yerine 1,67 sn tuttu, ancak çalışma kavrayışı değil dikkati ölçtü (Wu vd., 2026)
- [[e3sense-multimodal-learner-engagement-sensing-2026]] — Başa takılan EEG, göz izleme ve alın EDA’sı, %63,0 temele karşı %75,0 tek düzey içi doğrulukla öz değerlendirmeli katılımı öngördü (Anupkrishnan vd., 2026)
- [[engagement-assessment-video]] — EduGage yedi giyilebilir ve kamera akışını bölüm düzeyinde katılım tahminlerinde birleştirdi (MAE 0,81) ve daha hafif ölçümlemeyi savunuyor (Leng vd., 2026)
- [[student-attention-estimation-fairness-2026]] — Çok kipli bir dikkat modeli 0,283 MAE’ye ulaştı ve doğrulamadaki adillik kazanımları ayrılmış deneklerde tersine döndü (Fragkiadakis vd., 2026)
- [[corbin-ai-glasses-wearable-ai-assessment-2026]] — Giyilebilir YZ ikili şeffaftır; fiziksel dışlama başarısız olur ve uygulama öğrencilerin bedenlerini yargılamaya kayar (Corbin vd., 2026)
- [[eeg-familiarity-automated-assessment-2026]] — EEG aşinalık tahmini için on beş model, denemeden bağımsız doğrulama altında 0,9853’ten 0,6038 F1’e düştü (Nanayakkara ve Halloluwa, 2026)
- [[seeing-cognitive-representations-eeg-reconstruction]] — EEG ile yeniden oluşturulan görüntüler test performansını R² = 0,79 ile izledi; yüksek yeniden oluşturma kalitesine sahip bir katılımcı yanlış yanıtladı (Su vd., 2026)
- [[physiological-signals-exam-outcomes-ml]] — Rastgele orman sınav not kategorilerini EDA, hareket ve cilt sıcaklığından öngördü; bu sinyaller kavrayışı değil uyarılmayı gösterir (Yamazaki ve Rimal, 2026)
- [[affective-text-wearable-student-health]] — Oura takan 458 öğrencide uykuyu ve kalp atış hızı değişkenliğini izleyen, endişe konusu değil duygusal tondu (2026)
- [[tutorloop-sensor-cognitive-feedback-2026]] — Web kamerası bakışı 187 öğrenen için pekiştirmeli öğrenme geri bildirimini yönlendirdi; dikkat öğrenmeyle r = 0,017, iş yükü ise olumsuz yönde ilişkiliydi (2026)
- [[arif-automated-online-proctoring-yolov11-2026]] — YOLOv11 duruş özellikleri özel etiketlenmiş bir kümede şüpheli davranışı %99,56 ile işaretledi; suistimali ve adilliği test etmeden (Arif vd., 2026)
- [[your-brain-on-chatgpt-cognitive-debt-essay-writing]] — EEG bağlantılılığı 54 katılımcı boyunca dış yazma desteğiyle azaldı ve yaslanmayı birikmiş bilişsel borç olarak çerçeveledi (Kosmyna vd., 2025)
- [[kim-ai-embodied-learning-review-2026]] — 23 çalışma boyunca algılama rolleri etiketlerin %62,5’inde baskındı ve incelenen hiçbir sistem çok kipli akışları canlı birleştirmedi (Kim ve Han, 2026)
