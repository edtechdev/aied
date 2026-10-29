---
title: "Eğitimde Yapay Zeka Araştırmalarını Bildirmenin ve Yorumlamanın En İyi Uygulamaları Nelerdir?"
created: "2026-10-14T10:36:01-04:00"
connected_faqs: [checking-whether-educational-ai-works, research-gaps-aied, evaluating-ai-interventions-methods]
weight: 65
type: faq
foundations: [limitations-in-aied-research, interpreting-and-applying-aied-research]
assessment: [assessment-validity]
ethics: [ai-use-disclosure]
research_method: [literature review]
audience: [researchers]
page_kind: [evaluation]
methods: [ai-ed-evaluation, benchmark, meta-analysis-systematic-review, research-methods-aied]
translation_of: faqs/reporting-interpreting-aied-research
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

# Eğitimde Yapay Zeka Araştırmalarını Bildirmenin ve Yorumlamanın En İyi Uygulamaları Nelerdir?

İddiası tasarımının önüne geçmiş bir eğitimde YZ çalışmasını yazıyorsunuz ya da bir çalışmayı gözden geçirip manşetteki sayının bir anlam ifade edip etmediğine karar veriyorsunuz. Her iki durumda da işin sonucunu aynı altı eksiklik belirler: hangi YZ sisteminin gerçekten kullanıldığı, ne yapması için yapılandırıldığı, hangi pedagojik rolü üstlendiği, çıktısının insanlar tarafından tasarlanıp gözden geçirilip geçirilmediği, sonuç ölçütünün gerçekte neyi yakaladığı ve yazarların yanlılık, maliyet ve sınırlılıklar konusunda ne yaptığı. Bunları atlayan bir yazar, değerlendirilemeyen bir çalışma sunar; bunları aramayan bir eleştirmen, tasarlanmış bir müdahaleyi yeniden paketlenmiş bir araç gösteriminden ayırt edemez. Bunlar eksik olduğunda dürüst hüküm "desteklenen" ya da "çürütülen" değil, "değerlendirilemez" olanıdır.

Riskler varsayımsal değildir. [[oneill-presumed-effective-meta-analysis-2026|O’Neill (2026)]], YZ’nin eğitimi iyileştirdiğini iddia eden hakemli 14 meta analizi denetlemiş ve bunların *hiçbirinin* ileri sürdüğü iddialar için geçerli bir temel sunmadığını bulmuştur. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš ve ark. (2026)]], 67 meta analizden 1.840 etki büyüklüğünü birleştirmiş ve yayın yanlılığı modellendiğinde ortalama etkinin yayımlanan ortancanın kabaca **üçte birine** düştüğünü bulmuştur (SMD = 0,196’ya karşılık 0,67). [[citation-errors-hallucinations-computing-education-2026|Denny ve ark. (2026)]], bilgi işlem eğitimine ilişkin 14 makalede **30 uydurma kaynağı** doğrulamış; tümü 2025 ya da 2026’da yayımlanmıştır — eleştirmenlerin bir kaynak listesindeki her girdiyi doğrulayamaması sayesinde tam olarak okura ulaşan bir kusur. Bildirim disiplini, alanın kanıt tabanının hiç kullanılabilir olup olmadığına karar verir. Bunun altındaki tasarım seçimleri için bkz. [[research-methods-aied|Eğitimde YZ’de Araştırma Yöntemleri]]; başarısızlık kiplerinin kataloğu için [[limitations-in-aied-research|AIEd Araştırmasındaki Sınırlılıklar]]. Okuyucu tarafı — bir makale var olduktan sonra uygulayıcının onunla ne yaptığı — için bkz. [[interpreting-and-applying-aied-research|AIEd Araştırmasını Yorumlama ve Uygulama]].

## Kısa özet

İddianızın gözden geçirmeden sağ çıkıp çıkmadığına altı hamle karar verir:

1. **YZ sistemini bir satıcı olarak değil bir müdahale olarak betimleyin.** Model, sürüm, yapılandırma, istek metinleri, rol ve çıktının insanlar tarafından tasarlanıp gözden geçirilip geçirilmediği.
2. **Pedagojik gerekçeyi ve etkin karşılaştırmayı belirtin.** Ürün adı bir yöntem değildir; olağan işleyiş adil bir kontrol değildir.
3. **Ölçütü iddiayla eşleştirin.** Aracın neyi yakaladığı, bu popülasyon için geçerliliği ve sonucun gecikmiş ve yardımsız olup olmadığı.
4. **Her otomatik yargıyı doğrulayın.** Altın standardı, kalibrasyon hedefini ve anlaşmazlığı kimin hakemlik ettiğini adlandırın.
5. **Analizin belirsizliğini bildirin, yalnızca nokta tahminini değil** — bağımlı etkiler, τ², tahmin aralıkları, alt grup boyutları, yayın yanlılığı değerlendirmesi.
6. **Karşıt güçleri bildirin**: etik ve yönetişim prosedürü, hesaplama ve çevresel maliyet, kendi YZ kullanımınız, boş sonuçlar ve yalnızca doğruladığınız atıflar.

## YZ sistemi hakkında ne söyleyeceğinize karar verin — ve birinin yeniden kurabileceği biçimde yazın

Gönderimlerin en çok başarısız olduğu kontrol budur. RAISE çerçevesi (*Eğitimde YZ Çalışmalarını Bildirme*, Allison 2026) on tematik alanda 30 maddelik bir kontrol listesidir ve teşhis iddiası retorikten çok özgüdür: gönderiler düzenli olarak hangi modelin kullanıldığını (GPT-4, Claude ya da özel bir algoritma), nasıl yapılandırıldığını (istek metinleri, ince ayar parametreleri), hangi rolü üstlendiğini (geri bildirim üreticisi, ortak yazar, özel ders hocası, değerlendirici) ve insan aktörlerin çıktılarını tasarlayıp gözden geçirip geçirmediğini atlar. Bu, eleştirmenleri yanıtlanamaz dört soruyla baş başa bırakır — "YZ tam olarak ne yapıyordu?", "Gerekli miydi?", "Bu yeniden üretilebilir mi?" ve "Öğrenme iddiaları inandırıcı mı?"

Liste, eğitimsel gerekçeden API düzeyinde belirtime, öğrenen–YZ etkileşimi, erişilebilirlik ve kültürel uygunluk, katılımcılar ve ortam, insan katılımı, tasarım, etik, şeffaflık ve yeniden üretilebilirlik üzerinden sınırlılıklara kadar uzanır. Eşlik eden **Etik ve Risk Matrisi**, öğrencinin [[agency]] etkinliğine, [[equity-in-ai-education|eşitliğe]], veri [[governance]] yönetişimine ve algoritmik şeffaflığa yönelik riskleri kapsar. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah ve Gašević (2026)]] sadeleştirilmiş bir alternatif olan TEP-AIED’yi sunar; bu yapı Şeffaflık, Etik ve Pedagojiyi birbirine bağımlı tek bir yapıda toplar, yedi makale bölümüne eşlenmiş bir kılavuz tablosu sağlar ve yazarlardan "Şeffaflık, Etik ve Pedagoji Değerlendirmeleri" başlıklı bir Yöntem alt bölümü eklemesini ister — çünkü onların deyişiyle RAISE kapsamlıdır ama rutin ampirik kullanım için fazla ayrıntılıdır. Açıklama [[ai-use-disclosure]] altına oturur ve [[privacy]] ile [[ethics]] iddialarını denetlenebilir kılan şey budur.

## Müdahalenizin bir yöntem mi yoksa bir ürün mü olduğuna karar verin

Eğitimsel gerekçe RAISE’in ilk alanıdır, çünkü YZ tarafsız bir araç değildir: değer, öğrenme problemi, kuramsal bir gerekçe ve hedeflerden sonuç ölçütlerine eşleme arasındaki hizalamaya bağlıdır. [[oneill-presumed-effective-meta-analysis-2026|O’Neill (2026)]], denetlenen meta analizlerin ikisi dışında tümünün müdahaleyi bir araç olarak — ChatGPT, GenAI, "YZ" — tanımladığını ve bir ürün adının bir [[pedagogy]] olmadığını bulmuştur; ChatGPT maruziyetini tek bir ortak müdahale olarak ele almak, "kâğıt"ın etkilerini meta analiz etmeye benzer. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich ve ark. (2025)]] aynı argümanı birincil çalışmalar için getirir: öne çıkan bir meta analizin arkasındaki karşılaştırmaların bir alt kümesini denetleyerek, yalnızca **%21**’inin iyi tanımlı bir müdahale, bir kontrol grubu ve geçerli bir öğrenme ölçütüne sahip olduğunu bulmuş; bildirilen etki büyüklüğü (g = 0,7) ise amaca özgü [[intelligent-tutoring|akıllı özel ders sistemlerinin]] (0,66) etki büyüklüğünü aşmış — "müdahale"nin adlandırılmış bir yöntemden çok heterojen bir sır sosu olduğunu gösteren bir uyarı işareti.

Sınama şudur: yetkin bir okuyucu müdahalenizi yalnızca yöntem bölümünden yeniden kurabilir ve aynı şeyi elde edebilir mi?

## Aracınızın neyi ölçtüğüne ve iddianızın dolayısıyla ne söyleyebileceğine karar verin

O’Neill’ın rastgele seçilmiş 46 birincil çalışmaya ilişkin kanıt denetiminde **28’inde (%61) geçerlilik kaygısı** bulunmuş; en sık görülen bağımlı değişken uyuşmazlığıdır (n = 15), ardından bağımsız değişken uyuşmazlığı (n = 11), deneysel tasarım sorunları (n = 7), veri çıkarma sorunları (n = 6), kontrol grubunun olmaması (n = 6) ve rastgele olmayan grup ataması (n = 6). Çok boyutlu sonuçlar, sanki birbirinin yerine kullanılabilirlermiş gibi rutin biçimde birleştirilmiştir — sınav puanları, ödev niteliği, [[motivation]], [[self-efficacy]], tutumlar ve [[student-engagement|etkileşim]], tek bir "akademik başarı" sayısında eritilmiştir.

Bunu önleyen iki bildirim alışkanlığı vardır. Aracın hangi yapıyı ölçtüğünü ve o popülasyon için doğrulanmış olduğunu belirtin: algı temelli ölçütlerin davranıştan nerede ayrıştığını görmek için bkz. [[self-report-measures]]; yapı geçerliliği için bkz. [[assessment-validity]]. Ardından, öğrenenin yardıma ilişkin inancına bağlı olmayan bir sonuç bildirin, çünkü yardım altındaki anlık görev performansı [[learning-gains|öğrenme kazancı]] değildir: [[verification-quality-reliance-calibration-genai-2026|493 kaydın ve 14 öncelikli çalışmanın 2026 mini derlemesi]], hiçbirinin doğrulama başarısını ve sonraki güven kararını çıktı niteliğinin bağımsız biçimde hakemlik edilen bir standardına karşı birlikte ölçmediğini ve az sayıda çalışmanın anlık performansın ötesine geçip gecikmiş hatırlama ya da aktarıma baktığını bulmuştur. [[does-ai-help-students-learn|Kalıcı öğrenmeye dair kanıtlar]] karma kalmaya devam etmekte ve [[cognitive-offloading|bilişsel dışlamlaştırma]], ikisini birbirinden ayıran en olası mekanizmadır.

## Otomatik yargılarınızın nasıl doğrulandığına karar verin

[[ai-ed-evaluation|AIED değerlendirmesi]], puanlamayı giderek daha çok modellere devretmektedir; bu, doğrulama prosedürünü sonucun bir parçası haline getirir, bir ekin değil. Khan Academy’nin [[intelligent-tutoring|YZ özel dersi]] ölçütlerine ilişkin anlatısı, bilişsel etkileşimin insan pedagoji uzmanlarına karşı F1 0,83’te kalibre edilmiş bir [[llm]] hakemi tarafından puanlandığını ve ölçüt hareketlerinin çevrimdışı değerlendirmeden çok beş ay içinde 40’tan fazla canlı deneyden geldiğini bildirir ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi ve ark. 2026]]). [[machines-misread-pedagogical-quality|Tseng ve ark. (2026)]], [[formative-assessment|ön test sorusu]] niteliğine ilişkin insan–makine anlaşmazlığının sistematik olduğunu, rastgele olmadığını ve rubriğin işletimselleştirilmesinin gerekçe öncelikli istek metninden daha önemli olduğunu göstermektedir.

İnsan kodlayıcılarla anlaşmak nitelik değildir ve bunu nitelikmiş gibi bildirmek eleştirmen hedefidir. [[agreement-not-quality-llm-coding-verification|Liu ve ark. (2026)]], bağımsız bir uzman hakemliğe kaynağı kör olacak biçimde 855 ikili kod kümesini değerlendirdirmiş; insan–LLM anlaşmasının (ortalama Jaccard 0,30) insan–insan anlaşmasının (0,52) oldukça altında kaldığını, kör doğrulayıcının ise insan ve makine kodlamasını ayırt edilemeyecek oranlarda tercih ettiğini bulmuştur (%51,5’e karşı %48,5, p = 0,537). Kalibrasyon hedefini, altın standardı ve bunu kimin hakemlik ettiğini bildirin.

## Karşılaştırmanın adil olup olmadığına ve iddianızın ne kadar yol aldığına karar verin

Adillik ve kapsam aynı biçimde başarısız olur: göründüğünden daha az anlam ifade eden büyük bir etki. Denetlenen 14 meta analizin 11’i hiçbir popülasyon sınırı belirlememiştir; "öğrenciler" çocuklardan tıp stajyerlerine kadar uzanmıştır. Tek bir kurs, kurum, disiplin ya da ülke genel bir iddiye izin vermez ve bir araç için elde edilen sonuçlar nadiren başka bir araca aktarılır. Yenilik etkileri, göreve ayrılan ek süre ve olağan öğretim alan bir etkin kontrol yerine alan karşılaştırma koşulu, büyük bir etkinin olağan açıklamalarıdır — bu yüzden kontrol grubunun gerçekte ne yaptığını, her kolun ne kadar zaman harcadığını ve aracın ne kadar yeni olduğunu bildirin. Popülasyon sınırını da belirtin, çünkü etkiler öğrenen grupları arasında farklılık gösterir ve belirtilmemiş bir sınır, tek bir birleştirilmiş sayının hepsinin yerine geçmesine izin veren şeydir (bkz. [[differential-effects-across-learner-groups|Öğrenen Grupları Arasındaki Farklı Etkiler]]). Aracı hareketli bir hedef olarak da ele alın: tescilli sistemler haber verilmeden değişir; bu yüzden bir bulgu bir model sürümüne bağlıdır ve bir sürümde heyecan yaratan [[benchmark]], sonrakinde ayakta kalmayabilir.

## Analizinizin neyi destekleyebileceğine karar verin — ve yalnızca manşetini değil belirsizliğini bildirin

Sentezler için yalnızca I²’yi değil bağımlı etki işlemeyi, çalışmalar arası varyansı, tahmin aralıklarını ve yayın yanlılığı değerlendirmesini bildirin. O’Neill, bildirildiği her yerde bildirilen heterojenliğin şiddetli olduğunu (13 meta analizde I² %77,2 ile %94,4 arasında, 12’si %80’in üzerinde) ve hiçbirinin çözümlenmediğini (on çalışmalık asgari alt grup boyutunu karşılayan hiçbir denetleyici analiz bulunmuyor), 12 meta analizin aynı çalışmadan gelen bağımlı etki büyüklüklerini bağımsız olarak ele aldığını — görünen kanıt olduğundan fazla göstererek — ve yalnızca dördünün çalışmalar arası varyansı (τ²), yalnızca ikisinin tahmin aralığı bildirdiğini, her ikisinin de sıfırı içerdiğini bulmuştur. Yayın yanlılığı hiçbir yerde geçerli biçimde değerlendirilmemiştir.

I² kesinliğe bağımlı olduğu için, bir heterojenlik sayısı modeliyle birlikte taşınmak zorundadır: [[limitations-in-aied-research|AIEd Araştırmasındaki Sınırlılıklar]], heterojenliğin sabit etkili model altında I² = %82,98, rastgele etkiler modeli altında ise %15,75 olduğu bir sentezi belgeler; bu yüzden yalnızca ilk sayı verilen bir okuyucu, metin havuzunun ne kadar tutarsız olduğunu söyleyemez. Yanında τ² ve bir tahmin aralığı bildirin; inceleme tarafındaki gelenekler için bkz. [[meta-analysis-systematic-review|meta analiz ve sistematik derleme]] ve manşete göre indirim yapın — Bartoş ve ark.’nın yanlılık düzeltmeli ortalaması SMD = 0,196 olup tahmin aralığı −1,521 ile +1,908 arasında uzanmaktadır; varsayımsal yeni bir çalışma için önemli zarardan önemli faydaya kadar bir yelpazeyi kapsar.

## Etik, maliyet, yönetişim ve kendi YZ kullanımınız hakkında ne açıklayacağınıza karar verin

AIED 2025 konferans bildirilerinin tümünün gözden geçirilmesi, bir "açıklama içermeyen LLM benimsemesi" örüntüsü bulmuştur: projelerin çoğu LLM kullanmış, ama bir avuçtan azı kaynak tüketimini ya da karbon ayak izini bildirmiştir. O makale, yerel ve bulut donanımı için ölçüm araçları içeren açık kaynaklı bir yöntem ile parametre sayıları açıklanmayan önde gelen modellerin hesaplama giderini tahmin etmek için bir formül sunmakta ve bu maliyetleri bildirmemenin kendisinin bir etik kaygı olduğunu savunmaktadır. Veri yönetişimi, rıza ve erişilebilirlik/kültürel uygunluk (RAISE maddeleri; [[universal-design-for-learning]], [[accessibility]]) ekleyin — bu yükümlülüklerin daha geniş ele alımı için bkz. [[equity-ethics-pedagogical-safety-research]].

Araştırma sürecindeki kendi YZ kullanımınızın da aynı açıklamayı gerektirdiğini unutmayın. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta ve Lin’in PRISMA-LLM analizi]], 888 inceleme otomasyonu makalesi üzerinde bu bildirimin ne kadar düzensiz olduğunu göstermektedir: 2023’ten bu yana **yazılım/ürün makalelerinin %38,0’ı hiç değerlendirme bildirmemiştir** (LLM makalelerinde %9,3’e karşılık), ortalama bildirim zenginliği LLM makalelerinde 6,3, yazılım/ürün makalelerinde 3,3 olmuş ve LLM kullanımının %84,1’i tescilli ya da barındırılan sistemlere dayanmış, yalnızca %4,9’u açık ağırlıklıdır. Çerçeveleri, uygulama açıklamasını beş açıklama katmanı üzerinden sonuçlara duyarlı değerlendirmeden ayırır — bir incelemede bir aracın ne yaptığını betimlemek için uygulanabilir bir şablondur. [[dai-chan-responsible-genai-research-ai-literacy-2026|Dai ve Chan (2026)]] yazar tarafı resmi ekler: 28 lisansüstü araştırmacının 27’si fikir oluşturma, literatür taraması, açıklama, veri işleme, programlama, [[writing-education|akademik yazma]], düzenleme ve çeviri boyunca GenAI kullanmış; kullanımı risklere ve disiplin normlarına göre ayarlamış; kurumsal politikaların ise araştırma uygulamasından çok öğretim ve değerlendirmeyi ele aldığını not etmiştir.

## Boş sonuçlarla ve atıflarla ne yapılacağına karar verin

Denny ve ark., 14 makalede 30 uydurma kaynak doğrulamış; doğrulanan sayı bir teknik sempozyumda 2025’te 3’ten 2026’da 17’ye (o yılın bildiri metinlerinin %2,3’ü) yükselmiştir — ve LLM destekli taslak hazırlama, makul görünen uydurma bir atıfın üretimini ucuzlatmaktadır. Bu denetimi atıflarken karşıt güçleri önemlidir: işaretlenen kaynakların çoğu zararsızdı — 229’u PDF’nin doğru olduğu ACM üst veri uyuşmazlığı, 188’i geçerli bibliyografik varyanttı — bu yüzden uydurma sayısı kasıtlı bir alt sınırdır ve zararsız çoğunluk yuvarlama hatası değildir. Kişisel olarak doğrulayamadığınız her girdiyi doğrulayın.

Boş ve olumsuz bulguları bildirmek aynı madalyonun diğer yüzüdür. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoş ve ark. (2026)]], bastırılmış boş sonuçlara dair güçlü kanıt (her Egger testi p < ,0001) ve aşırı heterojenlik (τ = 0,869) bulmuş; tutarlı kazanımlar gösteren bir sonuç, alan, düzey ya da YZ rolü alt grubu yoktur. Ayrıca Ocak 2023’ten önce ve sonra yayımlanan çalışmalar arasında fark bulamamışlardır; bu, modern üretken araçların özellikle kazanım ürettiği iddiasını zayıflatmaktadır.

## Alanın belgelenmiş zayıflıkları, kendi sayılarıyla

Bir iddinin tartılması gereken taban oranlar:

- **Geçerlilik:** gözden geçirilen 46 birincil çalışmanın 28’inde (%61) geçerlilik kaygısı; denetlenen karşılaştırmaların yalnızca %21’inde iyi tanımlı bir müdahale, kontrol grubu ve geçerli ölçüt.
- **Çözümlenmemiş heterojenlik:** 13 meta analizde I² %77,2 ile %94,4 arasında, 12’si %80’in üzerinde, on çalışmalık asgari alt gruba ulaşan hiçbir denetleyici analiz yok, 12’sinde bağımlı etkiler bağımsız olarak ele alınmış, τ² veren yalnızca dört sentez, tahmin aralığı veren yalnızca ikisi.
- **Yayın yanlılığı:** denetlenen 14 meta analizin hiçbirinde değerlendirilmemiş; daha büyük havuzdaki her Egger testi anlamlı (p < ,0001), τ = 0,869.
- **Kaynaklar:** 14 makalede 30 uydurma, bir 2026 sempozyumunda 17 — o yılın bildiri metinlerinin %2,3’ü.

## Duyacağınız itirazlar

**"Eleştirmenler yeniliği ister, yöntem ayrıntısını değil."** Dergiler ters yönde hareket ediyor: RAISE ve TEP-AIED editörlere şart koşulacak bir yapı sunuyor ve TEP-AIED’nin Yöntem alt bölümü düşük sürtünmeli bir giriş noktası. Yöntem ayrıntısı, değerlendirilemez bir makaleyi atıf yapılabilir bir makaleye dönüştüren şeydir.

**"Yerimiz yok."** Beş açıklama katmanı risk düzeyleri değil bildirim düzeyleridir; bu yüzden boru hattının değerlendirme derinliği bir iki cümle olabilir. Sürüm, istek metinleri ve rol kısa bir paragrafa sığar; maliyet ve yönetişim bir sınırlılık cümlesine sığar.

**"Herkes bunu bu şekilde bildiriyor."** Bu bir savunma değil bulgudur — geçerlilik kaygısı taşıyan gözden geçirilen birincil çalışmaların %61’i, %80’in üzerinde heterojenliğe sahip 13 meta analizin 12’si, hiç değerlendirme içermeyen yazılım/ürün makalelerinin %38,0’ı. Norm kusurdur.

**"Aracımız tescilli, bu yüzden modeli bildiremeyiz."** Sürümü, erişim tarihini, yapılandırmayı, sağladığınız istek metinlerini, rolü ve sınırlandırmaları bildirin. Satıcı söylemezse, bu kısıt iddiye bir sınır olarak sınırlılıklar bölümüne aittir.

**"Boşları bildirmek bize zarar verir."** Bastırılmış boşlar, SMD = 0,196 yanlılık düzeltmeli ortalamasının ardındaki belgelenmiş mekanizmadır; bunları yayımlamak, olumlu sonucunuzun okunabilir kalmasını sağlayan şeydir.

## Gönderim öncesi kontrol listesi

- **Bildirin:** modeli, sürümü, yapılandırmayı ve istek metinlerini ile YZ’nin tasarım içindeki rolünü. **Kontrol:** müdahaleyi yalnızca yöntem bölümünden yeniden kurabilir miydiniz?
- **Bildirin:** pedagojik gerekçeyi ve etkin karşılaştırma koşulunu. **Kontrol:** müdahale bir ürün adından çok adlandırılmış bir yöntem mi?
- **Bildirin:** her ölçütün neyi yakaladığını, bu popülasyon için geçerliliğini ve gecikmiş ya da yardımsız sonucu. **Kontrol:** manşet iddiası bağımlı değişkenle uyuşuyor mu?
- **Bildirin:** otomatik yargıları kimin hakemlik ettiğini, hangi altın standarda karşı, nasıl bir anlaşmayla. **Kontrol:** doğruluk ya da anlaşma nitelikmiş gibi mi kullanılıyor?
- **Bildirin:** bağımlı etki işlemeyi, τ²’yi, tahmin aralıklarını, denetleyici alt grup boyutlarını ve yayın yanlılığı değerlendirmesini. **Kontrol:** heterojenlik modeli ve kesinliğiyle birlikte mi alıntılanıyor?
- **Bildirin:** insan katılımını, veri yönetişimini, rızayı, erişilebilirlik ve kültürel uygunluğu, artı hesaplama ve çevresel maliyeti. **Kontrol:** etik iddiaları belirtilmiş ilkeler yerine betimlenmiş prosedürle mi destekleniyor?
- **Bildirin:** araştırma süreci içindeki YZ kullanımını, beş açıklama katmanının tümünde. **Kontrol:** gözden geçirme ya da analiz boru hattı hiç değerlendirildi mi?
- **Bildirin:** boş, olumsuz ve çürütücü sonuçları olumlu olanlarla birlikte. **Kontrol:** etki büyüklüğü olası yayın yanlılığı için indirimli mi?

## Standardı gerçekten yükseltecek olan şey

Bu literatürdeki çözümler bireyselden çok kurumsaldır. O’Neill, meta analizler için zorunlu veri şeffaflığı önerir — tam etki büyüklüğü tabloları, bağımlılık yapıları, τ² ve tahmin aralıkları — artı daha güçlü eleştirmen ve editoryal kapı bekçiliği ve işleyen bir ret praksi; bu başarısızlıkların izole hatalardan çok başarısız kapı bekçiliğinin ürünleri olduğu argümanıyla. PRISMA-LLM, beş açıklama katmanını risk düzeyleri değil bildirim düzeyleri olarak önerir; böylece bir inceleme boru hattının değerlendirme derinliği açıkça belirtilir. RAISE ve TEP-AIED dergilere gönderimlerde şart koşulacak bir yapı sunar. İlgili zemin için bkz. [[research-gaps-aied|araştırma literatüründeki önemli boşluklar]], [[limitations-in-aied-research|AIEd Araştırmasındaki Sınırlılıklar]] ve [[evaluating-ai-interventions-methods|YZ ilişkili müdahaleleri değerlendirmeye yönelik ölçütler ve yöntemler]]. Düşük maliyetli bir çözümün sorumlusu yazarlardır: bu bilgi tabanındaki her makale sayfası artık bir çalışmayı **Pratik için bu ne anlama geliyor** bölümüyle ve genellikle bir **Sınırlılıklar** bölümüyle eşleştirir; bu yüzden makaleyi her ikisinin de dürüst biçimde doldurulabileceği şekilde yazmak — uygulayıcının atabileceği eylem ve bunun üzerindeki kısıt — bir yazma alışkanlığı kadar bir bildirim alışkanlığıdır (bkz. [[interpreting-and-applying-aied-research|AIEd Araştırmasını Yorumlama ve Uygulama]]).
