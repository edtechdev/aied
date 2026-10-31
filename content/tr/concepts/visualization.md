---
connected_resources: [drawsplat]
title: Görselleştirme
type: concept
technology: [ai-technologies, learning-analytics, multimodal, visualization]
confidence: medium
created: "2026-10-14T21:34:00-04:00"
translation_of: concepts/visualization
source_updated: "2026-10-26T07:30:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Görselleştirme** — bilgiyi öğrenme ve analiz için kavranabilir kılmak amacıyla veri görselleştirmelerinin, infografiklerin, gösterge panolarının, grafiklerin, diyagramların ve diğer grafik gösterimlerinin kullanımı. Eğitim boyunca görselleştirme giderek artan ölçüde hem YZ tarafından üretilmektedir (metinden görsele, [[multimodal]] slayt ve grafik analizi) hem de öğrenenlerin, öğretmenlerin ve analitik sistemlerinin paylaşılan veriler üzerinde akıl yürüttüğü arayüz olarak kullanılmaktadır.

## Ele Alınması Gereken Sorular

- Bir grafik veya gösterge paneli veriyi açık hale getirebilir — ancak bir görselleştirmeyi yalnızca *görmek*, onu anlamakla aynı şey midir? Sayfanın [[research-methods-aied|araştırması]], bir görselleştirmeyle nasıl etkileşime girdiğinizin grafiğin kendisinden daha önemli olduğunu öne sürmektedir. Baktığınız ama gerçekten öğrenmediğiniz bir gösterge panelini veya grafiği hatırlayın. Sadece görüntüden ne eksikti?
- Geleneksel öğrenme gösterge panelleri 'veriyi göster, kavrayış um' modelini izler. Buradaki bulgu, ölçütleri görmeden *önce* verileri hakkında soruları yanıtlayan öğrenenlerin, grafikleri pasif biçimde izleyenlere göre daha iyi yansıtma ve kalibrasyon yaptığıdır. Önce tahmin etmeye zorlanmak, gerçek verileri görme yoluyla elde ettiklerinizi neden değiştirebilir?
- YZ artık uzmanlaşmış içeriğin doğru görselleştirmelerini üretebilir — bir çalışma, metinden görsele bir modeli nükleer kavramlar üzerinde ince ayar yaparak alan doğruluğunu %12'den %78'e yükseltti. Ancak sayfa ayrıca hiçbir modelin tekdüze biçimde yetkin olmadığını buluyor. YZ üretilmiş bir görsele nerede güvenir, nerede bir insan uzmanına karşı kontrol ettirmeye ısrar ederdiniz?
- Bir çalışmanın katılımcıları YZ üretilmiş veri çizgi romanlarını daha çekici ve daha kavranabilir buldu; yine de çoğu ayrıca dezenformasyon riskini ve bilgi aşırı yüklenmesini işaret etti. İkna edici bir YZ görselinin çekiciliğini, yanıltma potansiyeline karşı nasıl tartarsınız — ve ona güvenmeden ya da onu kullanmadan önce ne doğrulardınız?
- Sayfa, bir modelin *güveninin* onun *güvenilirliği* olmadığı konusunda uyarıyor: sistemler temel yapıları doğru anlarken önem derecesi yargılarında keskin biçimde ayrışabilir. Slaytları, denemeleri veya verileri değerlendirmek için bir YZ aracına dayansaydınız, güveninin ciddi bir hatayı nerede gizlediğini nasıl keşfederdiniz?
- Bir çalışma, öğrencilerin bakışlarının çoğunu ayrıntılı görsel iskelelerin varlığına rağmen koda ayırdığını buldu — görsel yardımlar herkes için dikkati yakalamadı. Güzel bir diyagramın veya gösterge panelinin tüm öğrenenleri otomatik olarak katılıma yönlendireceğini varsaymak konusunda bu ne söylüyor? İnsanların bir aracı gerçekten nasıl kullandığını görsellerin dışında başka ne şekillendirir?

## Giriş

Görselleştirme, öğrenmeyi ve öğrenme verisini anlaşılır kılmak için — gösterge panoları, grafikler, diyagramlar, infografikler ve çok kipli gösterimler biçimindeki — grafik gösterimin kullanımıdır. Onun en kökleşmiş eğitimsel rolü, [[learning-analytics|öğrenme analitiği]] gösterge panelidir; burada baskın *veriyi göster ve kavrayış um* modeli, etkileşimli tasarımlara yol açmıştır: kanıt, öğrenenlerin bir gösterimle nasıl etkileşime girdiğinin onu görmelerinden daha önemli olduğunu ve öz tetikleyici istek metinleri ile [[pedagogical-agent|pedagogik aracıların]] pasif ölçütlerden daha iyi kalibrasyon sağladığını göstermektedir. Aynı soru — görüntü düşünmeyi mi tetikliyor, onun yerine mi geçiyor? — görselleştirmeyi [[desirable-difficulties]] ve [[metacognition]] ile bağlar.

## Bir Öğrenme Arayüzü Olarak Görselleştirme

Görselleştirmenin eğitimdeki en kökleşmiş rolü öğrenme analitiği gösterge panelidir. Geleneksel Öğrenme Analitiği Gösterge Panelleri (LAD), "veriyi göster → kavrayış um" modeli üzerine çalışır ve öğrenenlerin pasif biçimde izlediği grafiklerde davranışsal ölçütleri sunar. [[interactive-learning-dashboards-engagement]] üzerine yapılan araştırma bu paradigmayı sarsar: bir gösterge paneli, bir [[llm]] destekli [[pedagogical-agent|pedagogik aracı]] ve etkileşimli bir Öğrenme Yargısı öz değerlendirmesi eklediğinde, öğrenenlerin ölçütleri görmeden önce verileri hakkında soruları yanıtladığı "ortaya çıkarma" koşulu, pasif bir gösterge paneline göre de "söyleyen" bir araca göre de daha fazla yansıtma ve daha doğru ustalık kalibrasyonu üretmiştir. Ders şudur: öğrenenlerin görselleştirmelerle nasıl etkileşime girdiği, onları yalnızca görmelerinden daha önemlidir. Bu durum, görsel geri bildirimin basit bilgi gösteriminden çok [[metacognition|üstbilişsel]] yargı kalibrasyonunu desteklediği [[learning-analytics]] ve [[self-regulated-learning]] ile bağlantılıdır.

[[teacher-role|Öğretmen]] odaklı gösterge panelleri ayrı bir tasarım dersi seti ekler. [[mejia-domenzain-ml-findings-teachers-blended-2026|Mejia-Domenzain ve ark. (2026)]], öğretmenlerin daha karmaşık tasarımlar (örn. ısı haritaları) daha ayrıntılı kavrayışlar sağladığında bile sistematik biçimde daha basit, daha geleneksel görselleştirmeleri (çubuk grafikler, pasta grafikler, gösterge açıklamaları) tercih ettiklerini buldu — görsel tercih her zaman bilgililikle örtüşmedi; bu da pasta grafiklerin karşılaştırmalı okunabilirliği tartışmalarına yankı yapıyor. Görselleştirme okuryazarlığı (VL) tasarım tercihlerini yönlendirmedi, ancak daha yüksek VL'ye sahip öğretmenler daha derin, daha ayrıntılı yorumlar üretti (örn. daha fazlası zaman serisi verilerindeki eğilimleri tanımladı); bu durum VL'nin, öğretmenlerin analitik tasarımları nasıl okuduğunu ölçmede bir [[research-methods-aied|karıştırıcı]] olduğunu doğruluyor. Grup karşılaştırması için öğretmenler birlikte yerleştirmeyi yan yana koymaya belirgin biçimde tercih etti ve açık fark kodlamasına tercih ederek tam bilgi gösteren grafikleri (örn. "izlemeyen öğrenciler" grubunu içeren) yeğledi; ancak daha genç öğretmenler fark grafiklerini daha yüksek sıraladı. Bu bulgular, gösterge paneli tasarımının öğretmenlerin açıkça belirtilen tercihlerini, daha karmaşık kodlamaların sunduğu yorum derinliğiyle dengelemek zorunda olduğunu savunuyor.

Gösterge panelleri ayrıca, insan ve YZ akıl yürütmesi arasında köprü kuran paylaşılan gösterimler olarak işlev görür. CLARA sistemi, gösterge paneli kullanıcıları ile [[agentic-ai|YZ aracıları]] arasında ortak zemin olarak — kavram haritaları ve yedi boyutlu işbirliği değerlendirmeleri biçindeki — LLM üretilmiş eserleri kullanır ve her iki tarafın da aynı görünür, sorgulanabilir materyal üzerinde akıl yürütebilmesi için bunları ayrı vektör koleksiyonlarına indeksler. Benzer biçimde, Expert Cognition Dashboard analitiği "kavrayış zekâsı" olarak yeniden çerçeveler ve ham öğrenen davranışlarını bireysel, sınıf ve YZ İkizi uzman düzeylerinde yorumlanabilir kavrayış yapılarına dönüştürür. Bu sistemler görselleştirmeyi bir çıktı olarak değil, [[ai-technologies]]-yerli eğitimin içinde gömülü bir akıl yürütme altyapısı olarak konumlandırır.

## YZ Üretilmiş ve Çok Kipli Görsel İçerik

İkinci büyük akım YZ'nin görselleştirmeleri doğrudan üretmesine ilişkindir. [[nuclear-diffusion-text-to-image-learning-2026]], alana uyarlanmış metinden görsele modellerin uzmanlaşmış STEM kavramlarının doğru örneklemelerini üretebileceğini gösterir: Stable Diffusion'ı nükleer alan görüntüleri üzerinde ince ayar yapmak alan doğruluğunu %12'den %78'e yükselterek eğitmenlerin talep üzerine doğru reaktör bileşeni ve güvenlik sistemi görselleştirmeleri üretmesini olanaklı kıldı. Bu üretim kapasitesi güçlüdür ancak eşit dağılmamıştır. [[mllm-scientific-visualization-literacy]], altı çok kipli büyük dil modelini bilimsel görselleştirme okuryazarlığı konusunda 485 insan katılımcıyla [[benchmark|kıyaslar]] ve tekdüze bir yetkinlik bulmaz: kapalı kaynak Gemini birkaç alt kümede insan ortalamasını aşarken, tüm [[open-source]] modeller bu ortalamanın altında kaldı; özellik zayıflıklar ince taneli [[quantitative-research|nicel]] tahmin ve dokusal veya bütünleştirme temelli görselleştirmelerdedir. Bu nedenle YZ, insan görselleştirme okuryazarlığını desteklemelidir — onun yerine geçmemelidir; bu bulgunun doğrudan [[ai-literacy]] ve [[formative-assessment]] sonuçları vardır.

İstek metninden grafiğe üretim, YZ'nin yetkin bir görselleştirme üretip üretemediğinden farklı bir soru gündeme getirir: eseri eğitici kılan analitik ve kodlama işini öğrenen hâlâ gerçekleştiriyor mu? 2026'da bir çerçeve bunu süreç–çıktı ayrımı olarak adlandırır ve [[scaffolding]] ile ikame arasındaki failliğin sınırını saydamlık, davet ve sönümleme olarak önerir ([[genai-visualization-education-framework-2026|Purohit ve ark., 2026]]).

Etik ve güvenilirlik, YZ üretilmiş görsel içerikle ilgili coşkuyu ölçülü kılar. [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]], [[generative-ai|üretici YZ]] destekli veri çizgi romanlarının önceki görselleştirme okuryazarlığından bağımsız olarak geleneksel görselleştirmelere göre [[student-engagement|katılımı]] ve kavrayışı iyileştirdiğini buldu; yine de katılımcılar dezenformasyon riski ve [[academic-integrity|yazarlık]] atfına ilişkin kaygılar dile getirdi ve üçte ikisi aşırı yoğun yerleşimlerden kaynaklanan bilgi aşırı yüklenmesi gibi dezavantajları işaret etti. Karşıt olguya ilişkin CFES-P24 kıyası, bu incelemeyi [[cfes-p24-multimodal-slide-auditing-2026|slayt denetimine]] taşır ve çok kipli LLM'lerin [[learning-design]] yapılarını (işlemler, ilkeler, kanıt yerelleştirme) güvenilir biçimde tanıyabildiğini, ancak karşılaştırmalı yargı ve önem derecesi kalibrasyonunda keskin biçimde ayrıştığını gösterir — bileşik puanların hangi yeteneğin başarısız olduğunu gizlediğine ve güvenin güvenilirlik olmadığına ilişkin kanıt. Bu çalışmalar birlikte, YZ üretilmiş görseller için bütüncül puanlamalardan çok katmanlı bir [[ai-ed-evaluation|YZ değerlendirmesi]] savunuyor.

## Uygulamada Slayt, Çizgi Roman ve Çok Görünümlü Araçlar

Pratik sistemler bu ilkeleri ölçekle uygular. AISSA, LLM tabanlı rubrik puanlamasını öğrenme analitiği gösterge panelleriyle birleştirerek öğrenci sunum slaytları üzerinde otomatik, yinelemeli geri bildirim sunar ve her biri 1–3 dakika sürede 90 sunumu, değerlendirme başına sent düzeyinde maliyetle ve yüksek algılanan [[usability-research|kullanılabilirlik]] ile işler — öğrenciler ise geri bildirimi seçici biçimde uyguladı ve bazen görsel tasarımlarıyla çelişen önerileri göz ardı etti. [[cs-education|kodlama eğitiminde]], Flowcode, acemi yaratıcı kodlayıcıların buldukları örnekleri anlamalarına ve genişletmelerine yardımcı olmak için bir kod yapısı akış şemasını öğrenme odaklı bir sohbetle eşleştirir; burada görselleştirme ve [[desirable-difficulties|üretken sürtünme]], YZ kullanımını atlamaktan çok öğrenmeye doğru yönlendirir. Yine de görsel [[scaffolding|iskeleler]] evrensel olarak etkili değildir: [[code-anchor-multi-view-visualization]], öğrencilerin görsel iskelelerin varlığına rağmen bakış sürelerinin ~%47'sini koda ayırdığını buldu; buna faillik, gösterim uyumu ve metaforik görünümlerin algılanan meşruluğu yol açtı. Bu [[student-experience|öğrenen deneyimi]] bulguları, görselleştirme tasarımının yalnızca bilişsel imkânlara değil, [[affective-computing|duygusal]] ve sosyal etmenlere de dikkat etmesi gerektiğini uyarıyor.

## Çıkarımlar

Burada ele alınan çalışmalar boyunca görselleştirme, çift kullanımlı bir ortam olarak ortaya çıkar: YZ görselleştirmeleri giderek artan ölçüde üretir ve yorumlarken, gösterge panelleri ve etkileşimli görseller insan-YZ anlamlandırması için paylaşılan yüzey olarak hizmet eder. Üretken metinden görsele ve çok kipli analiz, görselleştirmenin erişimini uzmanlaşmış [[stem-education|STEM]] içeriğine ve [[ai-feedback-quality|otomatik geri bildirime]] taşır; ancak eşit dağılmamış model yetkinliği, önem derecesi kalibrasyon hataları ve dezenformasyon ile yazarlığa ilişkin [[ethics|etik]] kaygılar, dikkatli, katmanlı bir doğrulama talep eder. Tasarımcılar ve eğitmenler için en güçlü sonuç şudur: etkileşimlilik ve katılım — görsel veriler üzerinde öğrenen akıl yürütmesini ortaya çıkarmak, kullanıcıların bilişsel çabayı denetlemesine izin vermek ve YZ üretilmiş görselleri varış noktası değil paylaşılan altyapı olarak ele almak — grafiğin kendi doğruluğundan daha önemlidir.

## Yaygın yanlış anlamalar

- **"YZ özelleşmiş içeriği doğru biçimde oluşturamaz."** Doğru yöntemle oluşturabilir: bir metinden görüntüye modelinin nükleer kavramlar üzerinde ince ayarı **alan doğruluğunu %12'den %78'e yükseltti**. Boşluk üretici yetenek değil alan temellendirmesidir ve ele alınabilir.
- **"Daha iyi görselleştirmeler daha iyi sonuçlar üretir."** Öğretmenler **ısı haritaları gibi karmaşık tasarımlar daha ayrıntılı içgörüler ürettiğinde bile sistematik olarak daha basit ve daha geleneksel görselleştirmeleri (çubuk grafikler, pasta grafikler, lejantlar) tercih etti**. Daha bilgilendirici eser, kullanılan eser olmadı; bu nedenle benimseme, tasarım kalitesinden ayrı bir sorundur.
- **"Öğrenciler iskelelemenin olduğu yere bakar."** Bir çalışma, öğrencilerin **ayrıntılı görsel iskelelere rağmen bakışlarının çoğunu kod üzerinde geçirdiğini** buldu; yardımcılar dikkati hiç yakalamadı. Var olan ama fark edilmeyen görsel destek hiçbir şeyi değiştirmez.
- **"Katılım ve kavrayış birlikte hareket eder."** Katılımcılar YZ üretilmiş veri çizgi romanlarını **daha ilgi çekici ve daha anlaşılır** buldu, ancak çoğu aynı zamanda yanlış bilgi riskini ve bilgi aşırı yüklenmesini de işaretledi. Her iki tepki de aynı eserden geldi; bu nedenle olumlu karşılama doğrulanmış bir okuma değildir.

## Bağlı kavramlar

- [[learning-analytics]]
- [[multimodal]]
- [[generative-ai]]
- [[ai-technologies]]
- [[ai-literacy]]
- [[storytelling-in-education]]
- [[learning-design]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — uzamsal ve üç boyutlu gösterim

## Bağlı makaleler

- [[interactive-learning-dashboards-engagement]] — Öğrenme görselleştirmelerini pedagogik aracılar aracılığıyla katılım araçları olarak yeniden düşünmek
- [[mllm-scientific-visualization-literacy]] — Bilimsel görselleştirme okuryazarlığı için çok kipli LLM'leri kıyaslamak
- [[nuclear-diffusion-text-to-image-learning-2026]] — Nükleer kavram görselleştirmesi için alana uyarlanmış metinden görsele modeller
- [[data-comics-for-education-evaluating-effectiveness-benefits-ethics]] — YZ destekli veri çizgi romanlarının etkililiği, yararları ve etiği
- [[cfes-p24-multimodal-slide-auditing-2026]] — Çok kipli slayt denetimi için karşıt olgulu kıyas
- [[mejia-domenzain-ml-findings-teachers-blended-2026]] — MG bulgularını harmanlanmış sınıflardaki öğretmenler için erişilebilir kılmak
- [[genai-visualization-education-framework-2026]] — Anlam İnşa Etmek, Yalnızca Grafikler Değil: Görselleştirme Eğitiminde Üretici YZ Kullanımına İlişkin Bilişsel–Öğretimsel Bir Çerçeve
