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
source_updated: "2026-10-28T11:43:14-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Taslağınızın özette manşet bir sayısı var ve bir hakem az önce kontrol grubunun gerçekte ne yaptığını sordu. Ya da siz hakemsiniz ve elinizde birleştirilmiş etkisi 0,67 olan, yöntem bölümü bir buçuk sayfaya yayılan bir meta-analiz var. Ya da bölümünüz personelin YZ çalışmalarını nasıl bildirmesi gerektiğine dair rehber yazıyor ve “standartları izleyin”den daha belirgin bir şey istiyor.

Bu vakaların çoğunu altı eksiklik belirler: hangi YZ sisteminin kullanıldığı, ne yapmak üzere yapılandırıldığı, hangi pedagojik rolü oynadığı, çıktısını insanların tasarlayıp tasarlamadığı ya da gözden geçirip geçirmediği, sonuç ölçüsünün gerçekte neyi yakaladığı ve yazarların yanlılık, maliyet ve sınırlılıklar konusunda ne yaptığı. Bunlar eksik olduğunda dürüst hüküm “değerlendirilemez”dir ve bu, “çürütüldü”den farklı bir hükümdür.

## Kısa özet

**1.** YZ’yi bir satıcı olarak değil bir müdahale olarak betimleyin. Model, sürüm, yapılandırma, istemler, rol ve çıktıyı kimin tasarladığı ya da gözden geçirdiği.

**2.** Pedagojik gerekçeyi ve etkin karşılaştırmayı adlandırın. Bir ürün adı yöntem değildir ve her zamanki öğretim adil bir kontrol değildir.

**3.** Ölçüyü iddiaya uydurun; sonucun geciktirilmiş ve desteksiz olup olmadığı dâhil.

**4.** Analizin gerçekte sahip olduğu belirsizliği bildirin: bağımlı etkiler, çalışmalar arası varyans, tahmin aralıkları, alt grup büyüklükleri, yayın yanlılığı.

**5.** Her otomatik yargıyı, adlandırılmış bir altın standart ve adlandırılmış bir karar vericiyle doğrulayın.

**6.** Karşı ağırlıkları bildirin: yönetişim, hesaplama maliyeti, kendi YZ kullanımınız, sıfır sonuçlar ve yalnızca kontrol ettiğiniz kaynaklar.

## YZ’yi birinin yeniden kurabileceği bir müdahale olarak tanımlayın

Bu, gönderimlerin çoğunun başarısız olduğu kontroldür. RAISE çerçevesi (*Reporting AI Studies in Education*, Allison 2026), on tematik alana yayılan 30 maddelik bir denetim listesidir ve teşhis iddiası belirgindir: gönderimler hangi modelin kullanıldığını, nasıl yapılandırıldığını, hangi rolü oynadığını ve insan aktörlerin çıktılarını tasarlayıp tasarlamadığını ya da gözden geçirip geçirmediğini rutin olarak atlar. Hakemlere sonra yanıtlanamaz dört soru kalır. YZ tam olarak ne yapıyordu? Gerekli miydi? Bu yinelenebilir mi? Öğrenme iddiaları inandırıcı mı?

RAISE eğitsel gerekçeden başlayıp API düzeyinde belirtime, öğrenen–YZ etkileşimine, erişilebilirliğe ve kültürel uyuma, katılımcılara ve ortama, insan katılımına, tasarıma, etiğe, şeffaflığa ve yinelenebilirliğe ve oradan sınırlılıklara uzanır. Eşlik eden Etik ve Risk Matrisi, öğrenen [[agency|özerkliğine]], [[equity-in-ai-education|eşitliğe]], veri [[governance|yönetişimine]] ve algoritmik şeffaflığa yönelik riskleri kapsar. [[tep-aied-model-reporting-2026|Hwang, Xie, Wah ve Gašević (2026)]] sadeleştirilmiş bir alternatif sunar. TEP-AIED Şeffaflık, Etik ve Pedagojiyi tek bir karşılıklı bağımlı yapıda birleştirir, yedi makale bölümüne eşlenmiş bir kılavuz tablosu sağlar ve yazarlardan “Transparency, Ethics, and Pedagogy Considerations” başlıklı bir Yöntem alt bölümü eklemelerini ister. Gerekçeleri pratiktir: RAISE kapsamlıdır ve rutin ampirik kullanım için fazla ayrıntılıdır. Açıklama [[ai-use-disclosure]] altında durur ve [[privacy|gizlilik]] ile [[ethics|etik]] iddialarını denetlenebilir kılan şey odur.

Eğitsel gerekçe RAISE’de ilk sıradadır, çünkü YZ tarafsız bir araç değildir. Değer, öğrenme problemi ile kuramsal gerekçe arasındaki hizaya ve hedeflerden sonuç ölçülerine giden eşlemeye bağlıdır. [[oneill-presumed-effective-meta-analysis-2026|O’Neill (2026)]], denetlenen 14 meta-analizden ikisi dışında hepsinin müdahaleyi bir araç olarak tanımladığını buldu: ChatGPT ya da GenAI ya da genel olarak “YZ”. Bir ürün adı [[pedagogy|pedagoji]] değildir. ChatGPT’ye maruz kalmayı tek bir ortak müdahale saymak, “kâğıt”ın etkilerini meta-analize sokmaya benzer.

[[weidlich-chatgpt-effect-search-cause-2025|Weidlich ve arkadaşları (2025)]] birincil çalışmalar için aynı argümanı kurar. Öne çıkan bir meta-analizin arkasındaki karşılaştırmaların bir alt kümesini denetlediklerinde yalnızca %21’inin iyi tanımlanmış bir müdahalesi, bir kontrol grubu ve geçerli bir öğrenme ölçüsü olduğunu buldular. Bildirilen etki büyüklüğü (g = 0,7) ayrıca amaca özel [[intelligent-tutoring|akıllı eğitmenlik sistemlerininkini]] de (0,66) aşıyordu ve bu fark bir uyarı işaretidir: amaca özel eğitmenliği geçen bir müdahale, muhtemelen tek bir etiketin altında farklı şeylerden oluşan bir demettir.

Sınav tek bir sorudur: yetkin bir okur, yalnızca yöntem bölümünden müdahalenizi yeniden kurup aynı şeyi elde edebilir mi?

## Ölçümünüzün size hangi iddiayı kurmaya izin verdiğine karar verin

O’Neill’in rastgele seçilmiş 46 birincil çalışma üzerindeki kanıt denetiminde 28’i (%61) geçerlilik kaygıları ortaya koydu. En yaygın olanı bağımlı değişken uyuşmazlığıydı (n = 15); onu bağımsız değişken uyuşmazlığı (n = 11), deneysel tasarım sorunları (n = 7), veri çıkarma sorunları (n = 6), kontrol grubunun yokluğu (n = 6) ve rastgele olmayan grup ataması (n = 6) izledi. Çok boyutlu sonuçlar rutin olarak birbirinin yerine geçebilirmiş gibi birleştirildi; test puanları, ödev kalitesi, [[motivation|motivasyon]], [[self-efficacy|öz yeterlik]], tutumlar ve [[student-engagement|katılım]] tek bir “akademik başarı” sayısında eritildi.

İki bildirim alışkanlığı bunu önler. Ölçeğin hangi yapıyı ölçtüğünü ve o popülasyon için doğrulandığını belirtin; [[self-report-measures]] algıya dayalı ölçülerin davranıştan nerede ayrıldığını gösterir ve [[assessment-validity]] yapı geçerliliğini kapsar. Sonra öğrenenin yardıma ilişkin inancına bağlı olmayan bir sonuç bildirin. Yardım altındaki anlık görev performansı bir [[learning-gains|öğrenme kazancı]] değildir ve ikisini en inandırıcı biçimde ayıran mekanizma [[cognitive-offloading|bilişsel yük boşaltmadır]]. [[verification-quality-reliance-calibration-genai-2026|493 kayıt ve 14 öncelikli çalışma üzerine 2026 tarihli mini derleme]], hiçbirinin doğrulama başarısını ve ardından gelen güvenme kararını, bağımsız olarak karara bağlanmış bir çıktı kalitesi standardına karşı birlikte ölçmediğini ve çok azının anlık performansın ötesine, gecikmeli akılda tutmaya ya da [[transfer-of-learning|transfere]] baktığını buldu.

Tavanı tartışma bölümünde açıkça belirtin. Aracın açık olduğu bir sınavı ölçen bir çalışma, yardımlı performans hakkında bir iddiayı destekleyebilir. Öğrencilerin ne öğrendiği hakkında bir iddiayı destekleyemez ve o cümle tek satır tutar.

## Analizinizin gerçekte sahip olduğu belirsizliği bildirin

Sentezler için bağımlı etkilerin nasıl ele alındığını, çalışmalar arası varyansı, tahmin aralıklarını ve yayın yanlılığı değerlendirmesini bildirin. I² tek başına bu işi görmez. O’Neill, bildirilen heterojenliği verildiği her yerde ciddi buldu: 13 meta-analizde %77,2 ile %94,4 arasında, 12’si %80’in üzerinde; ve hiçbir zaman çözülmemişti: hiçbir düzenleyici analiz, on çalışmalık asgari alt grup büyüklüğünü karşılamadı. On iki meta-analiz aynı çalışmadan gelen bağımlı etki büyüklüklerini bağımsız saydı; bu da görünen kanıtı şişirir. Yalnızca dördü çalışmalar arası varyansı (τ²) ve yalnızca ikisi bir tahmin aralığını bildirdi; her iki aralık da sıfırı içeriyordu. Yayın yanlılığı setin hiçbir yerinde geçerli biçimde değerlendirilmedi.

Heterojenlik rakamları modelleriyle birlikte verilmelidir, çünkü I² kesinliğe bağlıdır. [[limitations-in-aied-research|AIEd Araştırmasında Sınırlılıklar]], sabit etki modeli altında I² = %82,98 ve rastgele etkiler altında %15,75 bulan bir sentezi belgeler. Yalnızca ilk sayıyı alan bir okur, derlemin ne kadar tutarsız olduğunu anlayamaz. τ² ve yanında bir tahmin aralığı bildirin; [[meta-analysis-systematic-review|derleme literatürünün]] istediği kural da budur.

Sonra kendi manşetinizi iskonto edin. [[bartos-ai-learning-meta-meta-analysis-2026|Bartoš ve arkadaşları (2026)]] 67 meta-analizden 1.840 etki büyüklüğünü birleştirdi ve yayın yanlılığı modellendiğinde ortalama etkinin yayımlanmış medyanın kabaca üçte birine düştüğünü buldu (SMD = 0,196, yayımlanmış medyana karşı 0,67); tahmin aralığı -1,521 ile +1,908 arasında. Bu aralık, varsayımsal yeni bir çalışma için ciddi zarardan ciddi faydaya uzanır. Makaledeki en yararlı sayı odur ve özetten en kolay düşürülecek olan da odur.

## İddianın ne kadar uzağa gittiğini söyleyin

Adalet ve kapsam aynı biçimde başarısız olur: göründüğünden azını ifade eden büyük bir etki. Denetlenen 14 meta-analizden 11’i hiçbir popülasyon sınırı koymadı; böylece “öğrenciler” çocuklardan tıp uzmanlığı öğrencilerine uzandı. Tek bir ders, kurum, disiplin ya da ülke genel bir iddiaya yetki vermez ve bir aracın sonuçları nadiren bir başkasına aktarılır.

Büyük etkilerin çoğunu üç açıklama karşılar ve her biri bildirilebilirdir. Bunlardan biri yeniliktir. Bir diğeri göreve ayrılan fazladan zamandır. Üçüncüsü, etkin bir kontrol yerine her zamanki öğretimi almış bir karşılaştırma koşuludur. Kontrolün gerçekte ne yaptığını, her kolun ne kadar zaman harcadığını ve aracın ne kadar yeni olduğunu bildirin. Popülasyon sınırını da belirtin, çünkü etkiler öğrenen grupları arasında farklılaşır ve sınırın belirtilmemesi, tek bir birleştirilmiş sayının hepsinin yerine geçmesine izin veren şeydir; [[differential-effects-across-learner-groups|Öğrenen Grupları Arasındaki Farklı Etkiler]] bu değişkenliği ortaya koyar.

Aracı hareket eden bir hedef olarak ele alın. Tescilli sistemler haber vermeden değişir; bu yüzden bir bulgu bir model sürümüne bağlıdır ve bir sürümde coşku uyandıran [[benchmark]] bir sonrakinde tutmayabilir. Sürüm ve erişim tarihi, yalnızca yinelenebilirlik için değil, bu nedenle yöntem bölümüne aittir.

## Otomatik yargıları doğrulayın

[[ai-ed-evaluation|AIED değerlendirmesi]] notlandırmayı giderek modellere devrediyor; bu da doğrulama prosedürünü bir ek değil, sonucun parçası hâline getiriyor. Khan Academy’nin [[intelligent-tutoring|YZ eğitmen]] ölçütlerine ilişkin açıklaması, bilişsel meşguliyetin insan pedagoji uzmanlarına karşı F1 0,83 ile kalibre edilmiş bir [[llm]] yargıcı tarafından puanlandığını ve ölçüt hareketlerinin çevrimdışı değerlendirmeden değil, beş ayda 40’tan fazla canlı deneyden geldiğini bildiriyor ([[ai-tutoring-quality-k12-methodologies-2026|Udeshi ve arkadaşları 2026]]). [[machines-misread-pedagogical-quality|Tseng ve arkadaşları (2026)]], [[formative-assessment|öntest sorusu]] kalitesi konusunda insan–makine anlaşmazlığının rastgele değil sistematik olduğunu ve rubriğin işler hâle getirilmesinin gerekçeyi öne alan istemlerden daha önemli olduğunu gösteriyor.

İnsan kodlayıcılarla anlaşma, kaliteden ayrı bir şeydir ve onu kaliteymiş gibi bildirmek bir hakem hedefidir. [[agreement-not-quality-llm-coding-verification|Liu ve arkadaşları (2026)]] 855 ikili kod setini kaynağa kör bir bağımsız uzman yargıcıya değerlendirtti. İnsan–LLM anlaşması ortalama Jaccard 0,30’da kalırken insan–insan anlaşması 0,52’ydi; buna karşın kör doğrulayıcı insan ve makine kodlamasını ayırt edilemez oranlarda tercih etti (%51,5’e karşı %48,5, p = 0,537). Kalibrasyon hedefini, altın standardı ve anlaşmazlığı kimin karara bağladığını bildirin. Bir okurun otomatik puanın ne kadar ağırlık taşıyabileceğine karar vermesini sağlayan üç madde bunlardır.

## Maliyetleri ve kendi kullanımınızı açıklayın

AIED 2025 konferans bildirilerinin tamamını kapsayan bir inceleme, açıklama olmadan LLM benimsenmesinden oluşan bir örüntü buldu: projelerin çoğu LLM kullandı ve birkaçından azı kaynak tüketimini ya da karbon ayak izini bildirdi. O makale, yerel ve bulut donanımı için ölçüm araçlarıyla birlikte açık kaynaklı bir yöntem ve parametre sayıları açıklanmayan öncü modellerin hesaplama maliyetini tahmin etmek için bir formül sunuyor. Argümanı, bu maliyetleri bildirmemenin kendi başına bir etik kaygı olduğudur. Veri yönetişimi, rıza, erişilebilirlik ve kültürel uyum aynı paragrafa aittir (RAISE maddeleri; [[universal-design-for-learning]], [[accessibility]]). Daha kapsamlı ele alış [[equity-ethics-pedagogical-safety-research]] sayfasındadır.

Araştırma sürecinde kendi YZ kullanımınız da aynı açıklamayı gerektirir. [[prisma-llm-ai-assisted-systematic-reviews-2026|Zabaleta ve Lin’in PRISMA-LLM analizi]], 888 derleme otomasyonu makalesi üzerinden bu bildirimin ne kadar düzensiz olduğunu gösteriyor. 2023’ten bu yana yazılım ve ürün makalelerinin %38,0’ı hiç değerlendirme bildirmedi; LLM makalelerinde bu oran %9,3. Ortalama bildirim zenginliği LLM makalelerinde 6,3, yazılım ve ürün makalelerinde 3,3’tü. LLM kullanımının %84,1’i tescilli ya da barındırılan sistemlere dayanıyordu; yalnızca %4,9’u açık ağırlıklıydı. Çerçeveleri, uygulama açıklamasını sonuç duyarlı değerlendirmeden beş açıklama katmanında ayırır; bu, bir aracın bir derleme içinde ne yaptığını betimlemek için kullanılabilir bir şablondur.

[[dai-chan-responsible-genai-research-ai-literacy-2026|Dai ve Chan (2026)]] yazar tarafındaki resmi ekler. 28 lisansüstü araştırmacıdan 27’si fikir üretme, literatür taraması, açıklama, veri işleme, programlama, [[writing-education|akademik yazma]], düzenleme ve çeviri boyunca GenAI kullandı. Kullanımlarını risk düzeyine ve disiplin normlarına göre kalibre ettiler. Kurumlarının politikaları araştırma pratiğini değil öğretimi ve değerlendirmeyi ele alıyordu; bu da bildirim kararını yazara bırakıyor.

## Sıfır sonuçları yayımlayın ve her kaynağı kontrol edin

[[citation-errors-hallucinations-computing-education-2026|Denny ve arkadaşları (2026)]] 14 makalede 30 uydurma kaynak doğruladı; bir teknik sempozyumdaki sayı 2025’te 3’ten 2026’da 17’ye, yani o yılın bildiri metinlerinin %2,3’üne çıktı. LLM destekli taslak yazım, akla yatkın uydurma bir atıfı üretmesi ucuz bir şey hâline getirir; kontrolün kabulden sonra değil gönderimden önce yapılması gerektiğinin nedeni budur.

O denetimdeki karşı ağırlıklar, onu alıntıladığınızda önemlidir. İşaretlenen kaynakların çoğu zararsızdı: 229’u PDF’in doğru olduğu ACM üst veri uyuşmazlığıydı ve 188’i geçerli bibliyografik varyanttı. Uydurma sayısı kasten bir alt sınırdır ve zararsız çoğunluk bir yuvarlama hatası değildir. Kişisel olarak kontrol edemediğiniz her kaydı doğrulayın.

Sıfır ve olumsuz bulguları bildirmek dürüst bir kanıt tabanının diğer yarısıdır. Bartoš ve arkadaşları bastırılmış sıfır sonuçların güçlü kanıtını (her Egger testi p < ,0001) ve aşırı heterojenliği (τ = 0,869) buldu; hiçbir sonuç, alan, düzey ya da YZ rolü alt grubu tutarlı kazanç göstermedi. Ayrıca Ocak 2023’ten önce ve sonra yayımlanan çalışmalar arasında hiçbir fark bulmadılar; bu, modern üretici araçların özellikle kazanç ürettiği iddiasını zayıflatır.

## Araştırmacıların bu konuda yanlış yaptığı şeyler

**“Etki büyüklüğü, yöntemin bir özelliğidir.”** Eğitimde YZ’nin bildirilecek bir etkisi yoktur. Denetlenen meta-analizlerin ikisi dışında hepsi müdahaleyi bir araç adı olarak tanımladı, denetlenen karşılaştırmaların yalnızca %21’inde tanımlı bir müdahale, bir kontrol ve geçerli bir ölçü vardı ve birleştirilmiş g = 0,7, amaca özel akıllı eğitmenliğin 0,66’sının üzerinde oturuyordu. Bir etki büyüklüğü bir tasarıma, bir popülasyona ve bir ölçüm anına aittir.

**“Birleştirilmiş ortalama, benim öğrencilerime olacak şeydir.”** Ortalama, çalışmalar kümesini betimler ve içindeki hiçbir şey tek bir sınıfı sabitlemez. Yanlılık düzeltmeli ortalama SMD = 0,196’dır ve tahmin aralığı -1,521 ile +1,908 arasında uzanır. Bildirilen heterojenlik 13 meta-analizin 12’sinde %80’in üzerindedir ve daha büyük havuzdaki hiçbir alt grup tutarlı kazanç göstermedi. Öğrenci düzeyinde bir değişim iki sayıdan da tanımlanamaz.

**“Sıfır sonuç, aracın işlemediği anlamına gelir.”** Sıfır sonuç, belirli bir kesinlikte belirli bir tasarıma ilişkin bir ifadedir ve tek bir çalışmada saptanabilir bir etkinin yokluğu o çalışmaya ilişkin bir olgudur. Yanlılık düzeltmeli SMD = 0,196, her Egger testinin anlamlı olduğu bir literatürden geldi; bu yüzden derlemin savunulabilir okuması küçük ve belirsiz bir ortalamadır. Daha büyük havuzdaki hiçbir sonuç, alan, düzey ya da YZ rolü alt grubu da tutarlı kazanç göstermedi. Bu literatürde belgelenen sorun bastırmadır.

**“Tek bir çalışma meseleyi çözer.”** Temel oranlar aksini söylüyor. Denetlenmiş birincil çalışmaların %61’inde geçerlilik kaygısı vardı, tek bir ders ya da kurum genel bir iddiaya yetki vermez ve tescilli bir sistem bir model sürümüne bağlı hareketli bir hedeftir. Tek bir çalışma, tasarımı yanına iliştirilmiş bir veri noktasıdır.

**“İnsan kodlayıcılarla yüksek anlaşma, modelin doğru şeyi puanladığı anlamına gelir.”** İnsan–LLM anlaşması 0,30’du; insan–insan için 0,52. Kör doğrulayıcı iki kod setini %51,5’e karşı %48,5 ile ayırt edemedi. Anlaşma, bir kodlayıcıyla tutarlılığı ölçer; kalite ise altın standart ve bir karar verici gerektiren ayrı bir sorudur.

## Duyacağınız itirazlar

**“Hakemler yenilik ister, yöntem ayrıntısı değil.”** Dergiler ters yöne gidiyor. RAISE ve TEP-AIED editörlere talep edebilecekleri bir yapı veriyor ve TEP-AIED’in Yöntem alt bölümü düşük sürtünmeli bir giriş noktası. Değerlendirilemez bir makaleyi atıf yapılabilir bir makaleye çeviren şey yöntem ayrıntısıdır.

**“Yerimiz yok.”** Beş açıklama katmanı risk düzeyleri değil bildirim düzeyleridir; yani değerlendirme derinliği bir iki cümle olabilir. Sürüm, istemler ve rol kısa bir paragrafa sığar. Maliyet ve yönetişim bir sınırlılık cümlesine sığar.

**“Herkes böyle bildiriyor.”** Sayılar normun sorun olduğunu söylüyor: denetlenmiş birincil çalışmaların %61’inde geçerlilik kaygısı, 13 meta-analizin 12’sinde %80 üzeri heterojenlik, yazılım ve ürün makalelerinin %38,0’ında hiç değerlendirme yok.

**“Aracımız tescilli, dolayısıyla modeli bildiremiyoruz.”** Sürümü, erişim tarihini, yapılandırmayı, sağladığınız istemleri, rolü ve koruma kurallarını bildirin. Satıcı söylemiyorsa bu kısıt, iddia üzerinde bir bağ olarak sınırlılıklara aittir.

**“Sıfır sonuçları bildirmek bize zarar verir.”** Bastırılmış sıfır sonuçlar, SMD = 0,196’lık yanlılık düzeltmeli ortalamanın arkasındaki belgelenmiş mekanizmadır. Onları yayımlamak, olumlu sonucunuzu okunabilir tutan şeydir.

## Bu hafta yapılacaklar

**1.** Özetinizi yöntem bölümünüze karşı okuyun ve yöntemin destekleyemediği her iddiayı silin. Ölçünün tavanına ilişkin tek bir cümle genellikle yeterlidir.

**2.** Belirtim paragrafını ekleyin: model, sürüm, erişim tarihi, yapılandırma, istemler, rol ve çıktıyı kimin tasarladığı ya da gözden geçirdiği.

**3.** τ²’yi, tahmin aralığını ve yayın yanlılığı değerlendirmesini ekten çıkarıp sonuçlara taşıyın ya da bunları hesaplamadığınızı açıkça söyleyin.

**4.** Popülasyon sınırını ve kontrol koşulunu, her kolun ne kadar zaman harcadığı dâhil, tasarım bildirimine yazın.

**5.** Kişisel olarak okumadığınız her kaynağı doğrulayın ve önce yazar alanını kontrol edin.

## Sonraki adımlar

[[research-methods-aied|Eğitimde YZ Araştırma Yöntemleri]] bu bildirim kararlarının altındaki tasarım seçimlerini kapsar ve [[limitations-in-aied-research|AIEd Araştırmasında Sınırlılıklar]], sayıları yanına iliştirilmiş başarısızlık biçimleri kataloğudur. [[interpreting-and-applying-aied-research|AIEd Araştırmasını Yorumlamak ve Uygulamak]] aynı sorunun okur tarafıdır, [[does-ai-help-students-learn|kalıcı öğrenmeye ilişkin kanıt]] bu ölçülerin çoğunun ulaşmaya çalıştığı şeydir, [[evaluating-ai-interventions-methods]] ölçüleri ve karşılaştırma tasarımlarını kapsar ve [[checking-whether-educational-ai-works]] sorunun daha kısa sürümüdür. Bu literatürün doldurmadığı boşluklar için [[research-gaps-aied]] sayfasına bakın.
