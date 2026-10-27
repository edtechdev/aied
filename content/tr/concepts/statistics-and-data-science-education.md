---
title: İstatistik ve Veri Bilimi Eğitimi
created: "2026-10-27T03:55:12-04:00"
updated: "2026-10-27T03:55:12-04:00"
type: concept
foundations: [ai-education]
pedagogy: [inquiry-based-learning, situated-learning, scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, simulation]
assessment: [assessment-validity]
discipline: [statistics and data science education]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/statistics-and-data-science-education
source_updated: "2026-10-26T14:15:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-26"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **İstatistik ve veri bilimi eğitimi** — öğrencilere veri hakkında akıl yürütmeyi öğretmek: bir soruyu çerçevelemek, bir çalışma planlamak, veriyi toplamak ve incelemek, çözümlemek ve kanıtın neyi destekleyip neyi desteklemeyeceğini iletmek. [[ai-education|Eğitimde YZ]] içinde, [[math-education]] alanının doğru ve yanlış yanıtı olan akıl yürütme odağını paylaşır; ancak ayırt edici pedagojisi **materyale** dayanır: veri kümesi, grafik, kod. Bu nedenle buradaki belirgin YZ sorusu nadiren “model bir kavramı açıklayabilir mi”, daha sıklıkla “dersin üzerinde yürüdüğü yapıtı üretebilir ya da iskeleyebilir mi” sorusudur — yapısı bilinebilen bir sentetik veri kümesi, kör bir öğrencinin okuyabileceği dokunsal bir grafik, belirtilen güçlüğü dürüst olan bir alıştırma sorusu, yanıtı saklayan bir R eğitmeni. Yapıt artık üretilebildiğine göre disiplinin merkezi riski, üretilmiş yapıtların kimsenin doğrulamadığı iddialar taşımasıdır.

## Düşünülmesi Gerekenler

- Bir istatistik dersi üretilmiş bir veri kümesi kullandığında öğrenci, verinin nereden geldiğine dair ne öğrenir — ve yanıtın “hiçbir yerden” olması önemli midir?
- Bir LLM alıştırma sorularını Kolay, Orta ve Zor olarak etiketlemiştir. Etiketleri, yanlarında kendi uydurduğu Bloom düzeyleriyle neredeyse kusursuz biçimde örtüşmüş ve öğrencilerin gerçekte nasıl performans gösterdiğiyle esasen hiç ilişkili olmamıştır. Bir güçlük etiketini güvenilir kılacak şey ne olurdu?
- İstatistik çoğu zaman öğrencilerin otantik veri problemleriyle ilk kez karşılaştığı derstir. Veriyi ve çözümleme iskelesini YZ sağlıyorsa bu karşılaşmadan geriye hangi kısım kalır?
- İstatistik eğitimi matematik eğitiminin bir dalı mıdır, yoksa kendi pedagojileri olan ayrı bir disiplin midir? Yanıtınız, onun için YZ’nin ne için inşa edilmesi gerektiğini değiştiriyor mu?

## Giriş

İstatistik ve veri bilimi eğitimi, araştırma döngüsünü öğretilebilir bir nesne olarak ele alır — Guidelines for Assessment and Instruction in Statistics Education (GAISE) önerileri ile Problem, Plan, Data, Analysis, Conclusion (PPDAC) çerçevesi alanın iki standart haritasıdır. Pedagojileri [[math-education|matematik eğitiminden]] YZ tasarımı açısından önem taşıyan bir biçimde ayrılır: matematik öğretimi belirlenmiş bir yanıta doğru akıl yürütmeyi değerlendirirken istatistik öğretimi bir **araştırma** boyunca akıl yürütmeyi değerlendirir; burada veri, tasarım ve çıkarımın sınırları içeriğin kendisidir. Bilgi tabanı bu sayfayı bu nedenle ayrı tutar. İstatistik müfredatta matematiğin yanında yer alır ve ondan yararlanır; ancak bir türetmeyi denetlemek için inşa edilmiş bir araç, ilişkilerini öğrencinin keşfetmesi gereken bir veri kümesi üretmek için inşa edilmiş bir araçtan farklı bir soruyu yanıtlar.

Buradaki makaleler, disiplinin yapıt merkezliliğinden doğan ortak bir örüntüyü paylaşır. YZ, dersin kavramlarını açıklayan bir öğe olarak değil, dersin materyalinin üreticisi ya da iskelesi olarak görünür: R için amaca özel inşa edilmiş bir eğitmen, dokunsal grafikler üreten bir işlem hattı, sentetik veri kümesi üreteci, otomatik üretilmiş alıştırma sorularının denetimi. Bu biçim, kanıt sorusunu çoğu disiplindekinden daha keskin kılar; çünkü yapıt üretilmiş olduğunda içine gömülü her iddia — bir güçlük düzeyi, bir katsayı işareti, bir dağılım — öğretim elemanı dışında bir şey tarafından kararlaştırılmıştır.

## Matematik eğitiminden neden ayrı bir sayfa

[[math-education]], bilgi tabanının en büyük disiplin kolunu taşır ve akıl yürütme, problem çözme, duyuşsal öğretim ve bilişsel tanılamayı kapsar. İstatistik ve veri bilimi eğitimi önkoşul becerilerde onunla örtüşür ve [[stem-education]] şemsiyesini paylaşır; ancak ayırt edici pedagojisi **araştırmadır** ve karakteristik başarısızlık kipi doğruluk değil geçerlilik başarısızlığıdır. Yanlış örneklemden doğru ortalamayı hesaplayan öğrenci aritmetiği doğru, istatistiği yanlış yapmıştır ve bu alanın öğrettiği değerlendirme çerçeveleri — geçerlilik, örnekleme, bir sonucun kapsamı — tam olarak bunu yakalamak için kurulmuştur.

İkisini tek sayfa olarak ele almak, kanıtın sürekli geri döndüğü ayrımı gizlerdi. Derlemin veri bilimi çalışmaları **üretilmiş materyal ve onun kalibrasyonu** hakkındadır: bir R eğitmeninin benimsenme eğrisi, üst verisi öğrenci performansıyla örtüşmeyen alıştırma soruları, ilişkileri gözlemlenmek yerine iddia edilen veri kümeleri, tasarım parametreleri algı araştırmasından türetilen grafikler. Bunların hiçbiri bir matematik eğitimi problemi değildir.

Sınır kenarlarda temiz değildir. İstatistiksel programlama çoğu kurumda [[cs-education]] içinde yer alır ve buradaki birkaç makale oraya kaydedilmiştir; istatistiksel grafikler üzerine erişilebilirlik çalışması [[special-education]] ve [[accessibility|erişilebilir]] tasarımla örtüşür; sorumlu veri bilimi [[cs-education]] ve [[ethics]] ile örtüşür. Sayfa bu küme için bir yuvadır, kümenin kapalı olduğu iddiası değildir.

## Üretilmiş yapıtlar ve geçerlilik sorunu

Bu koldaki en keskin kanıt, üç veri bilimi dersinde LLM tarafından üretilmiş hatırlama alıştırmalarının yapı geçerliliği denetimidir. 10 haftalık bir çalışma boyunca modelin Kolay, Orta ve Zor etiketleri, soruların yanında ürettiği Bloom düzeyleriyle neredeyse kusursuz biçimde örtüşmüş ve öğrencilerin gerçekte nasıl performans gösterdiğiyle esasen ilişkisiz kalmıştır. Etiketler güçlüğü değil soru biçimlendirmesini betimlemiştir; bu da [[assessment-validity|geçerliliği]] asıl kaygı haline getirir: üretilmiş madde üst verisi, bir öğretim elemanı ona güvenmeden önce öğrenci yanıt verisine göre kalibre edilmelidir ve onu *tutarlı* gösteren korelasyonel yapı, aynı adımda aynı model tarafından üretilir. Aynı çalışma, öğrencilerin hata ayıklama ve kavram soruları için [[llm|LLM’leri]] yoğun biçimde kullandığını ve yüksek memnuniyet bildirdiğini, buna karşılık algıladıkları derin öğrenme faydasının dönem boyunca azaldığını bulmuştur — memnuniyet ile öğrenme aynı sınıfta birbirinden ayrılmaktadır.

İkinci kol verinin kendisine ne olduğunu sorar. Sentetik veri üretimi [[personalized-learning|kişiselleştirmeye]] bir yol olarak sunulur: bir veri kümesini öğrencinin ilgi alanlarına, öğrenme hedefine ve beceri düzeyine uydurmak, gerçek veri kümelerinin nadiren karşıladığı üç yönlü bir kısıttır. Bundan doğan tasarım, dil modeli ajanlarının açık bir veri üretme mekanizması belirlemesini — değişkenler, yönlü döngüsüz bir grafik (DAG), dağılımlar, katsayılı formüller — ve bir programın bunu yürütmesini öngörür; böylece süreç opak bir üreteç yerine incelenebilir ve yeniden üretilebilir olur. Sınırı yazarların kendisi belirtir: sentetik veri dünya hakkında sonuçları destekleyemez ve veri toplama, ölçme ile çalışma tasarımını öğretemez; dolayısıyla yaklaşım gerçek veriyi tamamlar, onun yerini almaz. Bu sınır istatistik eğitimi için rastlantısal değildir. PPDAC’nin birinci ve ikinci sıraya koyduğu döngü parçasıdır.

## Disiplinin araçlarını iskeleleme

En açık olumlu sonuçlar belirli bir ders ve belirli bir dil için inşa edilmiş araçlarla ilgilidir. Barındırılan bir API çevresine sarılmış, yanıt vermek yerine yönlendirmek üzere sistem istemiyle ayarlanmış amaca özel bir YZ eğitmeni, psikoloji lisans öğrencileri için dönem boyu süren bir R programlama dersinde kullanılmıştır: öğrencilerin %76’sı ile %84’ü onu sınav açısından önemli haftalarda kullanmış, kendi bildirdiklerine göre çalışma aracı sürelerinin %53’ünü onunla, %8’ini denetlenmemiş [[generative-ai|üretken YZ]] araçlarıyla geçirmiş, haftalık içerik sınav için sayılmamaya başlayınca kullanım %50 ile %58’e düşmüş ve sözlü sınavdan önceki hafta %64’e yeniden yükselmiştir. Benimsemenin değerlendirme takvimini bu kadar yakından izlemesi, araç kullanımının yalnızca bir kalite göstergesi değil bir çalışma davranışı olgusu olduğunu hatırlatır.

İskele kalitesi erişimden bağımsız olarak önemlidir. Yönlendirilmiş [[llm]] erişimi ile kısıtsız erişimin deneysel karşılaştırması, akıl yürütme odaklı iskeleleme konusunda açık eğitimin — adım adım ipuçları, doğrulama — eleştirel olmayan bağımlılıktan daha iyi bağımsız performans ve daha iyi [[self-assessment]] kalibrasyonu ürettiğini bulmuştur; bu da eğitsel işi modelde değil yapılandırılmış etkileşimde konumlandırır. Erişilebilirlik kolu yapıt için benzer bir hamle yapar: yaklaşık 1.500 satırlık bir JavaScript işlem hattı, dokunsal tasarım parametrelerini plaka boyutlarından türetir, beş modüler grafik oluşturucu sunar ve tek geçişte Braille ve İngilizce etiketlemeyle 250 milisaniyenin altında baskıya hazır STL üretir; isteğe bağlı olarak, yazdırmadan önce zorunlu öğretmen incelemesiyle, yüklenen bir görüntüden grafik özelliklerini çıkarmak için çok kipli bir model kullanır. Her iki tasarımda da üretim bir insan denetimiyle eşleştirilir.

## Kanıtın henüz ortaya koymadığı şeyler

- **Üretilmiş veri kümeleri için öğrenme kazanımı kanıtı yok.** Sentetik veri tasarımı, öğrenci kullanıcısı olmayan ve gerçek bir veri kümesine ya da bir üreteci elle kuran öğretim elemanına karşı karşılaştırma içermeyen tek bir vaka çalışmasıyla gösterilmektedir.
- **Doğrulanmış güçlük veya kalite üst verisi yok.** Tek denetim, üretilmiş etiketlerin performansla ilişkisiz olduğunu bulmuştur; dolayısıyla alanda çalışan bir kalibrasyon yöntemi değil, başarısızlığın bir gösterimi vardır.
- **Benimseme öğrenme değildir.** R eğitmeni kanıtı, tek bir üniversitede tek bir dersten 49 ön test ve 34 son test yanıtlayıcısına dayanan kullanım, öz bildirim ve tahmindir.
- **İskelerin çoğu tek alanlı ve yinelenmemiştir**; sorumlu veri bilimi müfredat çerçevesi ise yazarlarınca kavramsal ve sınanmamış olarak tanımlanmaktadır.
- **Hiçbir çalışma gerçek veri pratiğine aktarımı sınamıyor**; oysa disiplinin gerçekte önemsediği sonuç budur: üretilmiş materyalle öğrenen bir öğrencinin gerçek veriyi araştırıp araştıramayacağı.

## Eğitimde YZ için çıkarımlar

1. **Üretilmiş madde üst verisini güvenmeden önce yanıt verisine göre kalibre edin**, çünkü tutarlı görünen etiketler soruları yazan modelin kendisi tarafından üretilebilir ve güçlük hakkında hiçbir bilgi taşımaz.
2. **Üretilmiş yapıtları incelenebilir tutun.** Bir mekanizmanın belirtilebildiği yerde — bir DAG, bir dağılım, bir formül — onu belirtmek hem pedagojik olarak hem de öğretim elemanının öğrencilerin ne bulacağını doğrulayabilmesi açısından kara kutudan örnekleme yapmaktan iyidir.
3. **Sentetik materyalin ölçme ve tasarımın yerini almasına izin vermeyin**, çünkü bunlar araştırma döngüsünün üretilmiş bir veri kümesinin öğretemediği ve GAISE ile PPDAC’nin başa koyduğu parçalarıdır.
4. **İnsan denetimini işlem hattına yerleştirin**, dokunsal grafik çalışmasının yazdırmadan önce zorunlu öğretmen incelemesiyle yaptığı gibi; üretimi sürecin sonu saymak yerine.
5. **Kullanımı bir çalışma davranışı işareti olarak okuyun.** Sınav takvimini izleyen benimseme teşviklere ilişkin kanıttır; bu nedenle disipline özgü bir aracı değerlendirmek, teşvik ortadan kalktıktan sonra ölçülen sonuçları gerektirir.

**Materyalin kendisi yalnızca açıklama değil, bir tasarım problemidir.** Bir istatistik veya veri bilimi dersi öğrencinin sorusuna uyan veri kümelerine ihtiyaç duyar ve bunları üretmek, YZ’nin bu kolun bazı çalışmalarına girdiği yerdir: [[arthur-dagflow-agentic-synthetic-data-statistics-2026|DagFlow-AI]], bağlama uygun sentetik veri kümeleri üreten ajanik bir işlem hattıdır ve ilgi alanı iklim ile sağlık olan bir öğrenciye, hedefler ve beceri düzeyi sabit tutularak verinin uydurulduğu işlenmiş bir vakayı içerir. Bu, [[situated-learning|durumlu öğrenmenin]] açıklamaya değil materyale uygulanmasıdır. Yazarlar sınır konusunda da açıktır: sentetik veri veri toplama, ölçme veya çalışma tasarımını öğretemez; dolayısıyla bu kolun ayırt edici pedagojisine bu yolla ancak kısmen ulaşılabilir.

## Yaygın yanlış anlamalar

- **“Memnuniyet ve algılanan fayda, bir veri bilimi YZ aracının işe yaradığını gösterir.”** Öğrenciler hata ayıklama ve kavram soruları için LLM’leri yoğun biçimde kullanmış ve **yüksek memnuniyet bildirmiş, buna karşılık algıladıkları derin öğrenme faydası dönem boyunca azalmıştır**. Memnuniyet korunurken öz değerlendirilen öğrenme yörüngesi düşmüştür; dolayısıyla iki rakamdan hiçbiri tek başına sonucu vermez.
- **“Kısıtsız bir model, yönlendirilmiş bir eğitmen kadar iyidir.”** Deneysel bir karşılaştırma, **akıl yürütme odaklı iskeleleme konusunda açık eğitimin — adım adım ipuçları, doğrulama — kısıtsız erişimden daha iyi bağımsız** performans ürettiğini bulmuştur. Etkiyi yönlendirme ve onu nasıl kullanacağına dair eğitim taşımıştır.
- **“Yanıt vermeyi engellemek yeterlidir.”** Barındırılan bir API çevresine sarılmış, sistem istemiyle **yanıt vermek yerine yönlendirmek** üzere ayarlanmış amaca özel bir eğitmen, psikoloji lisans öğrencileri için dönem boyu süren bir R dersinde kullanılmış ve **öğrencilerin %76’sı ile %84’ü onu sınav açısından önemli haftalarda kullanmıştır. Bu bir benimsemedir; korumanın öğrenme ürettiğinin kanıtı değildir:** İstem düzeyinde koruma birkaç kol arasından yalnızca biridir ve tek başına öğrenme üretmez.

## Bağlı kavramlar

- [[math-education]]
- [[cs-education]]
- [[stem-education]]
- [[discipline-specific-aied]]
- [[assessment-validity]]
- [[automated-question-generation]]
- [[personalized-learning]]
- [[inquiry-based-learning]]
- [[situated-learning]]
- [[intelligent-tutoring]]
- [[explainable-ai]]

## Bağlı makaleler

- [[arthur-dagflow-agentic-synthetic-data-statistics-2026]] — Kişiselleştirilmiş istatistik alıştırmaları için incelenebilir sentetik veri kümeleri üreten ajanik araç
- [[ai-tutor-statistical-programming-adoption-2026]] — Amaca özel R eğitmeni; benimseme sınav takvimini izledi
- [[student-llm-use-ai-question-difficulty-data-science-2026]] — LLM güçlük etiketleri öğrenci performansını değil Bloom düzeylerini izliyor
- [[tactile-statistical-graphs-accessibility]] — Öğretmen incelemesiyle dokunsal istatistiksel grafikler üreten açık kaynak işlem hattı
- [[guided-llm-scaffolding-independent-learning]] — Yönlendirilmiş iskeleleme bağımsız performansta kısıtsız erişimi yendi
- [[lund-socially-accountable-data-science-xai-2026]] — Sosyal hesap verebilirliği teknik veri bilimi müfredatına yerleştirmek
