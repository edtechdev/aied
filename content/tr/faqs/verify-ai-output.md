---
title: "Öğrencilere YZ Çıktısını Nasıl Doğrulamayı Öğretebilirim?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [incorporating-ai-literacy, study-with-ai, reducing-over-reliance, asynchronous-online-courses-ai]
weight: 65
type: faq
foundations: [academic-integrity, ai-literacy, cognitive-offloading, critical-thinking]
ethics: [hallucination-risk, trust-calibration]
research_method: [experiment, literature review, survey]
audience: [instructors, instructional designers, learners]
level: [higher ed, secondary]
translation_of: faqs/verify-ai-output
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

Notların teslim edilmesine bir hafta kaldı ve iki ödev, var olmayan kaynaklara atıf yapıyor. İki öğrenci de kontrol ettiklerini söylüyor. Biri bağlantıyı açmış. Diğeri paragrafı okumuş ve kulağa doğru geldiğine karar vermiş. Bu sınıfa sohbet robotunun verdiği şeyleri doğrulamalarını zaten söylediniz ve söylemek davranışı üretmedi.

Doğrulama, bir ödeve yerleştirebileceğiniz bir sıralamadır. Görev başlamadan önce neyin doğru sayılacağına karar verin, öğrencinin bir beklentiyi yazılı olarak taahhüt etmesini sağlayın, onları düzyazıya ilişkin izlenimlerine değil kayda gönderin ve ürettikleri kaydı notlandırın. "Kaynakları kontrol etti" diyen bir rubrik satırı bunların hiçbirini ölçmez.

## Kısa özet

**1.** Önce cevap anahtarını yazın. Bir kontrolün karşılaştıracağı bir şey olmalı ve çoğu doğrulama ödevi doğrunun ne demek olduğunu hiç tanımlamaz.

**2.** Çıktı ortaya çıkmadan önce bir tahmin isteyin; böylece öğrencinin akıl yürütmesi, araç onu geçersiz kılmadan önce kâğıt üzerinde var olur.

**3.** Her kontrolün hedefini adlandırın: yazar listesi, yayın yeri, yıl, belirli sayı, belirli adım. "Doğru olduğundan emin ol" bir kontrol değildir.

**4.** Makinenin yapabileceği kontrolü yalnızca bir okurun verebileceği yargıdan ayırın ve öğrencilere hangisini yaptıklarını öğretin.

**5.** Kaydı çabaya göre değil anahtara göre notlandırın; böylece kontrol tiyatrosu hiçbir şey kazandırmaz.

**6.** Kontrolü görevin içine planlayın. Zaman baskısı, öğrencilerin kontrolü atlamasının belgelenmiş bir nedenidir.

## Herhangi bir şey kontrol edilmeden önce doğrunun ne olduğuna karar verin

[[verification-quality-reliance-calibration-genai-2026|Wei ve Shang (2026)]], 493 tekil kaydı gözden geçirip 14 öncelikli ampirik çalışmayı haritalandırarak "eleştirel YZ kullanımının" tek bir şeye indirgediği yedi şeyi ayırıyor: epistemik değerlendirme, doğrulamayı başlatma, süreç kalitesi, doğrulama başarısı, güvenme kararları, anlık görev performansı ve bağımsız öğrenme. Sizin rubriğiniz "kaynakları kontrol etti" diyor; bu ikinci adımda durur ve kontrolün yetkin olup olmadığını ya da öğrencinin yanıtını değiştirip değiştirmediğini size söylemez. Başlatma başarı değildir. Güçlü bir süreç sonuçsuz kalabilir, zayıf bir süreç doğru yanıta ulaşabilir ve arama yapıp kafası karışmış olarak kalan bir öğrenci, soruyu çözen öğrenciyle aynı puanı alır.

Aynı derleme ikinci bir çizgi daha çiziyor: [[trust|güven]] ile güvenme arasında. [[trust-calibration|Güven kalibrasyonu]], çıktının gerçek kalitesi göz önüne alındığında bir güvenme kararının uygun olup olmadığını sorar; bu da yargıyı tek bir karara ve tek bir çıktıya bağlar. Denetlenmiş bir çalışma, yanlış ChatGPT bilgisinin katılımcıların bildirdiği güveni kaydırdığını, ancak daha sonra belirli bir öneriyi kabul edip etmediklerinin hiç kaydedilmediğini bulmuştur. Bir başkası 78 çeviri öğrencisi için ChatGPT [[feedback|geri bildirimi]] üzerine kabul ve ret kararlarını kaydetmiş, ancak bağımsız bir uzman değerlendirmesi olmadığı için bir kabul uygun, bir ret ise gerekçeli sayılamaz. Çıktı kalitesine ilişkin bir referans doğru yoksa güvenme hiç sınıflandırılamaz.

Tasarım sonucu budur ve düzeltilecek ilk şey de budur. Bir doğrulama görevi kurmadan önce iki kısa betimleme yazın: bu görev için doğru bir çıktı nasıl görünür ve makul ama yanlış bir çıktı nasıl görünür. Her birinden birer tane yeterlidir. Böylece öğrencilerin karşılaştıracağı bir ölçüt olur ve siz de kontrolü, öğrencinin dikkatli görünüp görünmediği dışında bir şeye göre notlandırabilirsiniz.

## Araç yanıtlamadan önce öğrencinin bir tutum almasını sağlayın

[[ai-writes-code-student-writes-model-2026|Gousopoulos (2026)]], *çalıştırmadan önce tahmin et* ilkesi etrafında bir ölçüm programı kurar: öğrenen ne olması gerektiğini belirtir, sonra ürünün davranışı bu tahmine göre alan temelinde yargılanır, çalışıp çalışmadığına göre değil. Akıl yürütme çıktıdan önce var olur; onu notlandırılabilir kılan budur.

24 çalışmayı kapsayan denetimi, aynı aracın farklı görev yapıları altında zıt sonuçlar ürettiğini bulmuştur. Alışılmış bir ChatGPT kurulumu başarı, [[self-efficacy|öz yeterlik]] ve akış açısından belirgin biçimde daha düşük sonuçlanmış; doğrulama gereklilikleri ve hata yansıtma modülleri eklenen bir koşul ise daha güçlü [[critical-thinking|üst düzey düşünme]] göstermiştir. Araç bu koşullarda sabitti. Değişen, görevin öğrenciden aracın çürütebileceği bir konumu tutmasını isteyip istememesiydi.

Pratikte bu, ödev yönergesinde tek satırdır: aracı açmadan önce ne söylemesini beklediğinizi ve nedenini yazın. Sonra karşılaştırın. İki öğrenci aynı paragrafı üretebilir ve yalnızca biri paragrafın tahmininden nerede ayrıldığını açıklayabilir.

## Öğrencileri izlenimlerine değil kayda gönderin

[[citation-errors-hallucinations-computing-education-2026|Denny ve ark. (2026)]], 2021'den bu yana yayımlanan 5.225 bilgisayar eğitimi makalesindeki 113.588 kaynağı izlemiş ve 828 kuşkulu kaydı elle doğrulamıştır. 14 makalede doğrulanabilir biçimde uydurulmuş bibliyografik bilgi içeren 30 kayıt bulmuşlardır; hepsi 2025 ve 2026'dandır. On üçü tamamen uydurmaydı. Diğer 17'si gerçek bir başlığı uydurulmuş ya da yanlış yazarlık, yayın yeri veya yılla birleştiriyordu. SIGCSE Technical Symposium'da sayı 2025 bildirilerindeki 3'ten 2026'da 17'ye, yani o yılki bildirilerin %2,3'üne çıkmıştır.

Yazar alanları, üretilmiş bir kaynağın diğer herhangi bir parçasından daha sık bozulur. Bu tek bulgu size neyi istemeniz gerektiğini söyler. "Kaynağı aç ve yazar listesini oku" en yanlış olma olasılığı yüksek alanı hedefler ve öğrencinin ya sahip olduğu ya da olmadığı bir olgu üretir. "Kaynakların gerçek olduğundan emin ol" ise bir güvence üretir. Öğrencilerden yazarları, yayın yerini ve yılı kaydın kendisine karşı doğrulamalarını isteyin. Makale, atıf yapılan her eserin doğrulanmasını ve her otomatik denetleyicinin [[human-in-the-loop-ai|insan döngüde]] kalmasını istiyor; bir atıf şartının prova ettiği alışkanlık tam olarak budur.

## Makinenin yapabileceği kontrolü yalnızca okurun verebileceği yargıdan ayırın

[[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]], mekanik olarak nelerin kontrol edilebileceğine dair savunulabilir bir eşik koyuyor: belgelenmiş ölçütler, yorumlayıcı yargı olmadan yerleşik bilgiyle karşılaştırma ve tek bir doğru yanıt ya da önceden belirlenmiş kabul edilebilir alternatifler. Tarihler, formüller, atıflar ve hesaplamalar bu eşiği geçer. Yorumlayıcı olan her şey geçemez ve orada kontrolün aracı öğrencinin kendi okumasıdır.

Gousopoulos aynı ayrımı iki bağımsız parametreli bir sinyal algılama problemi olarak formüle ediyor. Duyarlılık, doğru çıktıyı kusurlu çıktıdan ayırt etme yeteneğidir; ölçüt ise öğrenenin reddetme eşiğini nereye koyduğudur. Aşırı güven bu çizgi boyunca bölünür. Uyarılar, kontrol listeleri ve halüsinasyon hatırlatmaları ölçütü kaydırır, yani öğrencinin ne zaman reddedeceğini değiştirir. Alan öğretimi, çözümlü karşılaştırmalar ve tohumlanmış hata pratiği duyarlılığı yükseltir, çünkü öğrenen artık ayırt edebilir. Kusurlu çıktıyı kabul eden bir öğrencinin sorunu ölçütte ya da duyarlılıkta olabilir ve ikisi farklı öğretim gerektirir.

Ön koşul rahatsız edicidir. Doğrulama öğretimi ancak duyarlılığın sıfırı aşabildiği yerde eğitici olur; bu da doğru çıktıyı yanlıştan ayırmaya yetecek alan bilgisi gerektirir. Aynı denetimde, [[llm|LLM]] tarafından üretilen kodu açıklamaları istenen acemiler görevlerin yaklaşık üçte birinde başarılı olmuştur; bu yüzden YZ geri bildirimini ya da kodu kişinin kendi akıl yürütmesine karşı yargılamak, ancak o akıl yürütmenin bir ağırlığı varsa gerçek bir kontroldür. Öğrencileriniz alan düşünmesini henüz desteksiz yapamıyorsa daha fazla uyarı hiçbir şey satın almaz. İçeriği öğretin ve kontrolü ona bağlayın.

Tasarıma bir uyarı daha gerekir: uygunsuz kabulü azaltan müdahaleler, doğru desteğin istenmeyen biçimde reddedilmesi açısından da kontrol edilmelidir. Bir öğrencinin gerekçesini belirterek iyi çıktıyı kabul etmesine yer bırakın.

## Kontrolü gözetim aracına dönüştürmeden notlandırın

Gousopoulos sonucu doğrudan çıkarıyor. YZ ürünü üretebiliyorsa ürün değerlendirme olamaz; bu yüzden değerlendirme şartnameye, doğrulama akıl yürütmesine ve yoruma taşınır. Onun model yazarlığı kavramının dört boyutu vardır — şartname, kavramsal model, doğrulama ve yorum — ve devredilenden yazarlığa doğru dört sıralı düzeyde. Yazarlık düzeyi, ilk istem metninden önce doğrulanabilir bir şartname, çıktının alan temelinde gerekçesi belirtilerek reddedilmesi ve ürünün kendine dair raporunun ötesine geçen bir yorum gerektirir.

Rubrik, bir inşa görevinin zaten ürettiği malzemelere dayandığı için aynı araç hem bir [[formative-assessment|biçimlendirici değerlendirme]] hem de bir araştırma ölçüsüdür. Bu, angarya kaygısını yanıtlar: zaten verdiğiniz bir ödevin yan ürününü puanlıyorsunuz. Yanında iki sınır durur. Wei ve Shang'ın 14 öncelikli vakası arasında hiçbir çalışma doğrulama başarısını ve ardından gelen güvenme kararını birlikte ölçmemiş, pek azı anlık performansı gecikmeli hatırlama ya da [[transfer-of-learning|transfer]] ile izlemiştir; bu yüzden rubrik doğrulanmış nedensel bir sıraya değil analitik bir haritaya dayanır.

Üç karar bunun gözetime dönüşmesini engeller. Kontrolü çabaya değil, karara bağlanmış kaliteye göre notlandırın; yoksa kontrol yapma teşviki inşa edersiniz. Venetsanos'un istediği gibi kaynağı belirtin: öğrenciler aldıkları geri bildirimin hangi kısımlarının makine tarafından doğrulandığını, hangilerinin yorumlayıcı olarak yargılandığını ve insan yargısının öncelikli olduğunu bilmelidir, çünkü yerleştiremedikleri geri bildirimi tartamazlar. Ve yaptırımı tespit araçlarından uzak tutun. [[bassett-ai-detectors-education-2026|Bassett ve ark. (2026)]], [[ai-detection|YZ tespitinin]] eğitimde hiç kullanılmaması gerektiğini savunuyor: tahminleri olasılıksaldır ve gerçek dünyadaki metin kökeni bilinmediği için bağımsız olarak doğrulanamaz, puanları dürüstlük soruşturmalarının gerektirdiği olasılıklar dengesi standardını karşılamaz ve insan-YZ ikiliği, YZ tarafından değil YZ ile üretilmiş işler için anlamsızdır. Sonuçları şudur: tespit "akademik dürüstlüğü korumaz; onu zayıflatır." Gözetim rejimleri kuşkuyu besler ve öğrencilerin [[trust|güvenini]] aşındırır. Tespitin iki anlamını ayrı tutun. YZ üretimi metni tespit etmenin burada savunulabilir bir kanıtsal rolü yoktur; öğrencilere YZ çıktısındaki hataları tespit etmeyi öğretmek ise alıştırmanın tamamıdır.

Ayrım mimaridir ve öğrencilere anlatmaya değer. [[vetting-dual-llm-safety-education|Li, Zhang ve Botelho (2026)]], kontrolü üreticinin içine gömmek yerine çıktıyı ikinci bir modelle denetler. Bunun nedenini gören bir öğrenci, "araç doğru olduğunu söyledi"nin neden bir doğrulama argümanı olmadığını da görür.

## Dersi öğretmek yerine tasarlıyorsanız

Yukarıdaki üç bulgu dersin kurulumuna aittir; tek başına çalışan bir eğitmenin bunlara ulaşması zor olur.

Birincisi bir tanı aracıdır. Tohumlanmış hata görevi uygulayın: yirmi madde, sekizi alan düzeyinde bir hatayla. Bir dönem boyunca kullanamayacakları bir ölçütü öğretmeye başlamadan önce öğrencilerin hiç ayırt edip edemediğini size söyler. Tohumlanmış hataları kaçıran bir sınıf, izlence eleştirel kullanım hakkında ne derse desin içerik tekrarına ihtiyaç duyar.

İkincisi uyarının yerleştirilmesidir. [[chatgpt-inoculation-training-verification-2026|Vu, Cummings ve Park (2026)]], iki görevden hemen önce ABD'de yaşayan 100 öğrenciye — 40'ı yerli, 60'ı yabancı dil olarak İngilizce öğrenen — genel bir ön uyarı mesajı göstermiştir. Aşılanmış öğrenciler akademik kaynak özeti görevini doğrulama bakımından belirgin biçimde daha olası yapmıştır (M = 0,34'e karşı 0,18), ancak kendi bildirdikleri doğrulama niyetleri değişmemiştir. Etki ayrıca göreve bağlıydı: kaynak özeti görevinde ortaya çıktı, üslü sayılar ve büyük sayı çarpımı üzerine bir matematik testinde ise aynı biçimde görünmedi. Uyarıyı izlenceye ya da oryantasyon modülüne bir kez değil, kullanım noktasına ve her görev türüne göre koyun.

Üçüncüsü planlamadır. Doğrulamayı planlamayan bir izlence onun isteğe bağlı olduğunu söyler ve zaman baskısı, öğrencilerin kontrolleri atlamasının belgelenmiş bir nedenidir. Görevin içinde yaşayan ve işaretlenmiş bir ürünü olan doğrulama gerçekleşir. Politika paragrafında yaşayan doğrulama gerçekleşmez.

## Bunu okuyan öğrenciyseniz

Araştırmanın sizden istediğinin çoğunu dört hamle karşılar.

İstem metnini yazmadan önce beklentinizi yazın. Yanıtın ne olması gerektiğine dair bir cümle, sonra çıktıyı onunla karşılaştırın.

Kaynağı açın. Yazar listesini, yayın yerini ve yılı kayda karşı okuyun, çünkü üretilmiş kaynakların en sık bozulduğu yer yazar alanıdır.

Yorumlayıcı olan her şey için gerekçeyi kendi kelimelerinizle yazın. Uydurulmuş bir gerekçe, uydurulmuş bir atıf kadar görünürdür.

Düzyazının akıcı okunduğu duygusuna güvenmeyin. LLM tarafından üretilen kodu açıklamaları istenen acemiler görevlerin yaklaşık üçte birinde başarılı olmuştur ve öğrenci-ChatGPT test sohbetleri üzerine bir saha çalışması, doğru yönlendirmeyi izlemenin bile yanlış yanıt ürettiğini bulmuştur. Kontrol edebildiğiniz şey, okuyabildiğinizden dardır.

## Eğitmenlerin bu konuda yanlış yaptığı şeyler

**"Onlara kaynaklarını kontrol etmelerini zaten söyledim."** Bir uyarı bir eğilim ister. Dikkatli öğrencilerde vardır, acele edenlerde yoktur ve o cümlede, gece 11'de ekranda kusursuz okunan bir çıktıyla oturan öğrencinin yapabileceği hiçbir şey yoktur.

**"Kaynakları kontrol etmekle ilgili bir rubrik satırı bunu kapsar."** O satır başlatmada durur ve süreç kalitesi ya da başarı hakkında hiçbir şey söylemez. Tek bir arama yapıp vazgeçen öğrenci, soruyu çözen öğrenciyle aynı puanı alır; yani rubrik jesti ödüllendirir.

**"Dikkatli okurlarsa hataları yakalarlar."** Akıcılık yargıyı taşır. Denetlenmiş literatür, acemilerin üretilmiş kodu açıklamada yaklaşık üçte bir başarıda olduğunu gösteriyor ve saha çalışması doğru yönlendirme yoluyla gelen yanlış bir yanıt kaydetmiştir.

**"Doğrulayacaklarını söyleyen öğrenciler doğrular."** Vu, Cummings ve Park'ın çalışmasında kendi bildirdikleri niyetler değişmemiş, buna karşılık eyleme dökülen davranış değişmiştir (M = 0,34'e karşı 0,18). Değişen davranışı notlandırın.

**"Kontrolü atlayan öğrenciler umursamayanlardır."** [[trust-calibration-chatbots-design-problem-2026|Jaidka ve Cai (2026)]], doğrulama yeteneğini doğrulama motivasyonuyla çaprazlıyor ve profiller farklı çözümler gerektiriyor. Yüksek yetenekli, düşük motivasyonlu öğrenci rehavete dayalı aşırı güvene yatkındır. Düşük yetenekli, düşük motivasyonlu öğrenci en açıkta olandır. Aynı kontrolde başarısız olan iki öğrenci zıt öğretim gerektirebilir ve hangisine baktığınızı [[prior-knowledge|ön bilgi]] belirler.

**"Daha fazla uyarı ayırt edemeyen öğrencileri düzeltir."** Uyarılar ölçütü kaydırır. Duyarlılığı yükseltmezler ve kusuru fark edebilen öğrenciyi edemeyenden ayıran şey duyarlılıktır.

**"Bir dedektör politikayı destekler."** Yukarıdaki kanıtlara göre bir dedektör puanı dürüstlük vakasının gerektirdiği standardı karşılamaz, insan-YZ ayrımı YZ ile üretilmiş işler için geçerli değildir ve bu rejim, öğrencilerin herhangi bir şeyi açıklaması için ihtiyaç duyduğunuz [[trust|güveni]] size kaybettirir.

## Size geri dönecek itirazlar

**"Sırf not için yapabilirler."** Kısmen doğru, bu yüzden YZ'nin öğrenci adına üretemeyeceği malzemeleri notlandırın. İlk istem metninden önce yazılmış bir şartname, ürün çalışmadan önce kaydedilmiş bir tahmin, kayda karşı kontrol edilmiş bir kaynak listesi, ret için belirtilmiş alan gerekçesi: her biri öğrencinin, üreticinin sağlayamayacağı bir konumu tutmasını gerektirir. Uydurulmuş bir gerekçe, uydurulmuş bir atıf kadar görünürdür. Öğrencinin karşılaştıracak alan bilgisi yoksa doğrulama tiyatrodur ve hiçbir rubrik onu kurtarmaz; bu da önce içeriği öğretmek için bir argümandır.

**"İzlencede bunun için zaman yok."** Ön uyarı görevden önce tek bir mesajdır. Tohumlanmış hata görevi zaten verdiğiniz bir testi yeniden kullanır. Rubrik, görevin zaten ürettiği malzemelere biner; yani size, aksi halde sahip olmayacağınız kanıt üzerinde notlandırma zamanına mal olur. Alternatif daha pahalıdır: doğrulanmamış ödevler, uydurulmuş kaynaklar ve ardından gelen dürüstlük konuşmaları.

**"Araç genellikle doğrudur."** Öyleyse kontrol ucuzdur ve asıl mesele istisnalardır. Yazar alanları, üretilmiş bir kaynağın diğer herhangi bir parçasından daha sık bozulur; uydurulmuş 30 maddenin 17'si gerçek bir başlığı yanlış yazarlık, yayın yeri ya da yılla eşleştiriyordu ve 17'si tek bir yılın sempozyum bildirilerinde ortaya çıktı. Fark ettiğiniz parçalardaki doğruluk, fark etmedikleriniz hakkında hiçbir şey söylemez.

**"Öğrencilerim çıktıyı yargılayacak kadar bilmiyor."** Bu duyarlılık eşiğidir ve gerçektir. Gousopoulos, doğrulama öğretiminin bir alan bilgisi tabanının altında başarısız olacağını öngörüyor ve bazı alanların dışsal bir ölçüt sağladığını, aralarında fizik, kimya, ekoloji ve epidemiyolojinin bulunduğunu, tarih, edebiyat ve [[ethics|etik]] alanlarının ise büyük ölçüde sağlamadığını belirtiyor. Alanı öğretin ve kontrolü ona bağlayın, yoksa kontrolün bir ritüele dönüşmesini bekleyin.

**"Bu gözetimdir."** Çabayı notlandırırsanız ya da öğrencilerin nasıl çalıştığını izlerseniz öyledir. Ürünü anahtara göre notlandırın, hangi geri bildirimin makine tarafından kontrol edildiğini ve hangisinin bir insan tarafından yargılandığını belirtin ve dedektörleri işin dışında tutun.

## Bu hafta ne yapmalı

**1.** Bir sonraki ödeviniz için iki betimlemeyi yazın: doğru bir çıktı ve makul ama yanlış bir çıktı. Kontrolün karşılaştıracağı anahtar budur.

**2.** Tahmin satırını ekleyin. Tek cümle, araç açılmadan önce yazılmış, sonra alan temelinde karşılaştırılmış.

**3.** "Kaynaklarını kontrol et" yerine "kaydı aç ve yazarları, yayın yerini ve yılı doğrula" yazın.

**4.** Zaten verdiğiniz bir testin içine sekiz tohumlanmış hata koyun ve hangi öğrencilerin bunları bulduğuna bakın.

**5.** Bir doğrulama ürününü anahtara göre notlandırın ve öğrenciye kontrolün hangi kısmının başarısız olduğunu söyleyin: ölçüt mü, süreç mi, karar mı.

## Bundan sonra nereye bakmalı

[[incorporating-ai-literacy]], bu sayfanın işe koştuğu anlayışın nasıl kurulacağını; [[ai-literacy-evidence]] ise bu okuryazarlık işinin neye değdiğini ele alıyor. [[reducing-over-reliance]], araca yaslanan öğrenciler için tasarım tarafını; [[study-with-ai]] öğrenciye dönük eş sayfayı; [[asynchronous-online-courses-ai]] ise bu problemin, kontrolü planlayacak bir ders saati olmayan sürümünü ele alıyor. Öğrencilerin kontrol ettiği geri bildirim için [[ai-feedback-quality]] ve [[hallucination-risk]] sayfalarına bakın.
