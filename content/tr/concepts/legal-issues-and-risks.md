---
title: "Hukukî Sorunlar ve Riskler"
created: "2026-10-14T21:40:00-04:00"
type: concept
foundations: [academic-integrity, reducing-ai-misuse]
assessment: [ai-detection, assessment-validity, remote-proctoring]
institutions: [educational-policy-ai, governance, regulation]
ethics: [accessibility, ai-use-disclosure, equity-in-ai-education, hallucination-risk, privacy]
pedagogy: [professional-training]
discipline: [legal education]
level: [higher ed]
audience: [administrators, policymakers, institutions, researchers]
page_kind: [synthesis]
confidence: medium
translation_of: concepts/legal-issues-and-risks
source_updated: "2026-10-28T18:24:42-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Hukukî Sorunlar ve Riskler** — eğitimde [[generative-ai|üreten YZ]] kötü yönetildiğinde kurumların, personele karşı sorumlu kişilerin ve öğrencilerin üstlendiği maruziyettir: bir algılayıcı puanına dayanarak hile yapmakla haksız suçlanan bir öğrenci, değerlendirmenin gerektirdiğinden fazlasını izleyen ve kaydeden bir gözetim sistemi, yardımcı bir aracı cezalandıran aşırı geniş bir kural ya da tutarlı biçimde uygulanamayacak kadar belirsiz bir politika. Risk tek bir hukuk sorusu değil, birlikte gelen birkaç sorudur — delil ile ilgili (suçlamanın hiç delillendirilip delillendirilemeyeceği), sözleşmesel ve usule ilişkin (kurumun kendi kurallarına uyup uymadığı ve öğrenciye adil bir duruşma hakkı tanıyıp tanımadığı), eşitlik temelli (kuralın engelli veya ana dili başka olan öğrencilere yük getirip getirmediği) ve veri koruma temelli (gözetimin ne topladığı ve nerede saklandığı). Uygulanmakta olan davranış çerçevesi olan [[academic-integrity]]’den farklıdır: bu sayfa, o uygulama itiraza maruz kaldığında ne olduğu ile ilgilidir.

## Dikkate Alınması Gereken Sorular

- Algılama araçları yazarlığı güvenilir biçimde belirleyemez. Ölçüm aracı söz konusu olguyu kuramıyorsa, bir usulsüzlük davası aslında neye dayanmaktadır?
- Gözetim ve YZ algılama verileri kitlesel ölçekte üretilir ve süresiz olarak saklanır. Bu verilerin hukukî maruziyetini kim taşır, kurum mu yoksa tedarikçisi mi?
- Bir politika, [[wright-transcription-not-generation-2026|üretmeden ayrı olarak yazıya dökme işlemini]] ayırt etmeden "YZ kullanımı"nı yasakladığında, kural dürüstlüğü mü korumaktadır, yoksa bir engellilik uyumunu mu cezalandırmaktadır?

## Giriş

Bilgi tabanının bu konudaki kanıtı hukuksal değil usule dayalıdır. Kurumların neyi delil saydığını, suçlama usullerinin nasıl işlediğini, araçların ne kadar güvenilmez olduğunu ve gözetimin ne topladığını belgeler; dava sonuçlarını henüz belgelemez. Bu boşluk, iddialı ifadelerle doldurmak yerine açıkça belirtilmelidir: bu soruları çözecek davaların çoğu kamuya yansımamış, sulh olmuş veya hâlâ iç kurumsal süreçlerdedir.

Edebiyatın desteklediği şey, hukukî maruziyet yaratan başarısızlık biçimlerinin bir tanımıdır. Tekrarlayan örüntü şudur: kurumu riske atan şey kötü niyetli bir suçlayıcı değil, onun kendi araçları ve usulleridir — bir bulgu gibi ele alınan olasılıksal bir puan, niyetinden daha net olmayan bir kural, kimsenin istemediği verileri toplayan bir sistem ve teknik kanıtın incelenmeye ihtiyacı olmadığını varsayan bir duruşma.

## Riskin yoğunlaştığı yerler

### Haksız suçlama ve kusurlu delil

[[munoz-misconduct-allegation-evidence-2026|Munoz ve ark. (2026)]], gerçek üreten YZ usulsüzlük suçlaması dosyalarını incelemiş ve kurumların kullandığı delilleri kategorilere ayırmıştır: yalnızca gözetimli veya denetimli değerlendirmede erişilebilen sistem tarafından kaydedilmiş davranış izleri; bu uygulamaların var olduğu yerlerde taslaklar, denetim toplantıları ve sunumlar gibi süreç kanıtları; ve soruşturmanın kendisi tarafından üretilen deliller. Hukukî maruziyet açısından bundan iki sonuç çıkar. Birincisi, gözetimsiz teslimlerde sistem kaydı kategorisi boştur, bu da davaları daha zayıf kategorilere iterek zorlar. İkincisi, doğal adalet ilkelerinin, herhangi bir karar verilmeden önce öğrencinin suçlamadan haberdar edilmesine ve yanıt verme fırsatı verilmesine ihtiyaç duyduğunu kaydederler; bu yükümlülükler Avustralya düzenleyici standartlarında (Department of Education, 2021; TEQSA, 2025) ve saygın akademik dürüstlük politikalarında da kodlanmıştır. Yanıt verme fırsatı tipik olarak bir soruşturma toplantısı veya heyet görüşmesidir ve öğrencinin söyledikleri delil dosyasının bir parçası haline gelir — bu da bir davanın savunmasız hale geldiği noktanın yalnızca delil kusurları değil, usul kusurları olduğu anlamına gelir.

Altta yatan asıl sorun delil sorunudur. Algılayıcı çıktısı en sık başvurulan ve taşıyabileceği yükü taşıyamayan delildir. [[hadra-ai-detector-accuracy-efl-2026|Hadra ve ark. (2026)]], Turnitin ve Originality’yi 192 metinden oluşan dengelenmiş bir derlemde sınamış ve genel doğruluğu sırasıyla 0,69 ve 0,61 bulmuştur; her ikisi de — gerçek bir suçlamada en olası görülecek biçim olan — insan-YZ karma yazılarında kötü performans gösterir; doğruluk metnin uzunluğuna göre, bilimsel yazımda ve yazarın bir EFL öğrencisi olduğu durumlarda insan yazımını YZ olarak yanlış sınıflandırma eğiliminin sınırda olduğu noktalarda daha da düşer. [[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer ve ark. (2026)]] aynı sonuca farklı bir derlem ve araç kümesinden ulaşır; [[bassett-ai-detectors-education-2026|Bassett ve ark.]] ise hiçbir eşiğin sorunu çözmediği yapısal noktasını ortaya koyar: YZ kullanımını yakalamak üzere ayarlanmış bir algılayıcı insan çalışmalarını işaretler, insan çalışmalarından kaçınmak üzere ayarlanmış bir algılayıcı ise YZ kullanımını gözden kaçırır; dolayısıyla tek bir puan hangi hatanın yapılacağına ilişkin bir tercihtir. [[karr-ai-detection-humanization-2026|Karr’ın derlemesi]] algılamanın neden başarısız olduğuna yazı insanlaştırma tarafından aynı noktaya ulaşır; [[teichmann-detecting-undetectable-misconduct-2026|Teichmann ve ark. (2026)]] ise usul çerçevesinin kendisinin artık yeniden değerlendirilmeye ihtiyaç duyduğunu savunur, çünkü tespit edilemez usulsüzlük dönemi, usulsüzlüğün teslim edilen eser tarafından delillendirilebileceği varsayımını çökertir.

### Gizlilik ve gözetim

[[harerimana-remote-proctoring-nursing-scoping-2026|Harerimana ve ark. (2026)]], hemşirelik değerlendirmesinde [[remote-proctoring|uzaktan gözetim]] uygulamasını haritalandırır ve öğrenciler üzerindeki duygusal etki ve [[equity-in-ai-education|eşitlik]] etkilerinin yanı sıra gizlilik ve gözetimi başlıca kaygıları arasında ortaya çıkarır. [[automated-online-exam-proctoring-decade-review-2026]] ve [[academic-dishonesty-automated-proctoring-ai-2026]] aynı [[ai-technologies|teknolojileri]] daha uzun bir zaman aralığında belgeler; ortaya çıkardıkları veri koruma soruları hukukî sonuçları olan sıradan sorulardır: ne kaydedilir (video, ses, tuş vuruşları, bakış yönü, oda taramaları), ne kadar süre saklanır, nerede depolanır, kim erişebilir, tedarikçi bunu ileriye doğru işleyip işlemez ve öğrenciler bunu bir değerlendirme koşulu olarak kabul edip etmedi. Düzenlenmiş veri ortamlarında faaliyet gösteren kurumlar herhangi bir dava açılmadan çok önce yasal yükümlülükler taşır ve bilgi tabanının yerel ve tedarikçi barındırmalı YZ sistemleri üzerine FERPA ve GDPR duyarlılığıyla yürüttüğü çalışmalar, aynı soruların yalnızca gözetime değil öğretim araçlarına nasıl uygulandığını gösterir.

### Erişilebilirlik ve engellilik

[[wright-transcription-not-generation-2026|Wright (2026)]], ücretsiz "YZ kullanımı" yasaklarının aşırı kapsamlı olduğunu, çünkü konuşmadan metne dökme ve OCR ile üreten taslak hazırlamayı ayırt etmediğini savunur; ince motor kontrolünü, el yazısının okunabilirliğini veya yazma doğruluğunu etkileyen durumları olan öğrencilerin tarihsel olarak tam olarak bu araçlara güvendiğini — Dragon NaturallySpeaking gibi bağımsız ses-metin ürünleri dahil, bazıları üretimi durdurulmuş veya köreltilmiş, YZ destekli yazıya dökme ise işlevsel boşluğu doldurmuş ürünler; engellilik, yardımcı teknoloji ve YZ usulsüzlük politikasının kesişiminin yeterince incelenmediğini ve bu yer değiştirmenin ölçeğinin ampirik olarak ölçülmediğini not eder. Maruziyet biçimsel olarak açıktır: bir öğrencinin okunabilir çalışma üretmenin temel aracını ortadan kaldıran bir kural, ayakta kalabilmek için bir uyum sürecine ihtiyaç duyabilecek bir kuraldır. [[shin-ai-policies-sld-2026]] özgün öğrenme güçlüğü olan öğrenciler için aynı boşluğu politika tarafından belgeler ve bilgi tabanının [[assistive-technology]] ve [[neurodiversity]] üzerine çalışmaları çevreleyen terimleri sağlar.

### Dil eşitliği ve destek–ikame sınırı

[[li-genai-assessment-language-equity-2026|Li (2026)]], İngilizceyi ek dil olarak kullanan öğrenciler için savunmanın eşitlik temelli biçimini sunar. Tek bir arayüz artık hem izin verilen düzenlemeyi hem yasaklanan taslak hazırlamayı yerine getirdiğinden, [[generative-ai|üreten YZ]]’yi tek bir yetkisiz yardım kategorisi olarak ele alan bir kural, meşru dil desteğine en çok ihtiyaç duyan öğrencilere daha yüksek uyum yükleri bindirir, şüpheyi yüzeysel akıcılığı değişen yazarlar üzerinde yoğunlaştırır ve zayıf kanıt üzerinde seçici uygulamayı mümkün kılar — itibarsal, akademik ve bazen vize veya malî sonuçlar taşıyan suçlamalar eşliğinde. Çözüm, araç adına değil işleve ve değerlendirme yapısına göre tanımlanmış bir sınırdır; hiç fikir, kaynak veya analitik yapı katmayan yüzeysel müdahaleleri, entelektüel çalışmayı yaratan veya maddî olarak yeniden şekillendiren ikameden ayırır ve rutin çeviri ve düzenlemenin, ana dilleri tek olan akranlarının taşıdıklarından aşan uyum maliyetleri çekmemesi için kalibre edilmiş bir [[ai-use-disclosure|açıklama]] ile eşlik eder. Hukukî yapı dolaylı ayrımcılık akıl yürütmesidir — yüzeysel olarak tarafsız bir kuralın ürettiği topluluk kaynaklı yükü belirlemek, ardından meşru bir amacın orantılı ve pratikte işler yollarla izlenip izlenmediğini sormak; bu, karar vericinin uygulanan kuralı, güvenilen kanıtı ve sonucun neden orantılı olduğunu açıklayabilmesine ilişkin idare hukuku beklentisiyle güçlenir, ki bir kararı temyize tabi ve süreci meşru kılan da budur. [[ai-detection|Algılama]], bir ön sınıflandırma sinyaline indirgenir; taslak geçmişleri, aşamalı teslimler ve kısa bir yapı uyumlu görüşme kanıt olarak tercih edilir; dolayısıyla maruziyet iki yönde işler: bir ayrımcılık veya temyiz itirazına ve cilalanmış dil veya ana dili başka biri ifade tarzı gibi vekil göstergelere dayanan bir bulgunun kırılganlığına.

### Belirsiz kurallar, tutarsız uygulama

[[gutowski-hurley-genai-policy-legal-education-2025|Gutowski ve Hurley (2025)]], netliği savunulabilir uygulamanın ön koşulu olarak, bir nezaket olarak değil ele alır ve hukuk fakültesi politikalarının kapsamlı [[governance]] yönetişimden hiç politika belirtmemesine kadar uzandığını, çoğunun yorumlama ve uygulamayı tek tek öğretim elemanlarına bıraktığını bildirir. [[qian-governing-genai-higher-ed-policy-2026|Qian (2026)]], ABD üniversitelerinde aynı çeşitliliği bunun kadar farklı olan destek ekosistemleriyle birlikte bulur; [[crompton-governing-genai-higher-ed-delphi-2026]] ise uzman görüş birliğinin yönetişimin parçalı olduğu yönünde olduğunu bildirir. Kimsenin tam olarak ifade edemediği bir kural altında disiplin cezası alan bir öğrenci, önce usul ve adalet üzerine bir ihtilafla karşı karşıyadır; [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] çözümün bunları çıkarsayan gözetim yerine muhakeme ve sorumluluğu görünür kılan bir [[assessment|değerlendirme tasarımı]] olduğunu savunur. [[watson-rainie-ai-challenge-faculty-survey-2026|Watson ve Rainie’nin (2026)]] 1.057 ABD’li öğretim üyesini kapsayan anketi aynı tutarsızlığı ters yönden gösterir: katılımcıların %87’si kendi düzeyde ödev kurallarını yazarken yalnızca %48’i kurumlarının yazılı yönergeleri, %35’i bölümlerinin olduğunu söylemiştir; böylece tek bir kurumun içindeki öğrenciler bireysel olarak kaleme alınmış politikaların bir yamalı dokusuyla karşılaşır. Bu belgelerin altındaki yapısal yanıt incedir — vakaların %55’inde bir çalışma grubu veya gözetim grubu, ancak genel eğitim çıktısı olarak [[ai-literacy|YZ okuryazarlığı]] yalnızca %13’ünde benimsenmiştir — ve bu hukukî olarak önemlidir, çünkü kurumun hiç benimsemediği bir kuralı uygulamayı savunmak zordur.

[[coates-governing-academic-integrity-indicators-2025|Coates, Croucher ve Calderon (2025)]], zayıflığı daha üst akışta, öğrenci davranışında veya araç kalitesinde değil yönetişimde konumlandırır. Tasarım ve geliştirmeden analiz, raporlama, değerlendirme ve iyileştirmeye uzanan sekiz boyut altında 130 maddeden oluşan akademik dürüstlük gösterge çerçeveleri, yönetim kurulları ve komiteler için yönetişim soruları olarak yazılmıştır: kurumun en üst konseyi değerlendirme süreçleri ve sonuçları hakkında güncelleme alıyor mu, temel performans göstergeleri değerlendirme kalitesini kapsıyor mu, oryantasyon ve uyum programları akademik dürüstlüğü içeriyor mu ve sözleşmeyle hile yapma vakalarını bildirmek için basit bir yol var mı. Reform programları yönetişim mimarilerini, yönetişim rollerini üstlenen kişileri ve değerlendirmeyi destekleyen teknolojileri ile kaynakları hedef alır; bu tür gelişimin [[regulation]] düzenlemeden, [[benchmark|kıyaslamadan]] ve kurumlar arası rekabetten gelen dış imkânlar olmadan verim vermeyeceğini savunurlar. Hukukî maruziyet açısından çıkarım, savunulabilir bir duruşun kendi uygulamasını bilmeye ve belgelemeye dayandığıdır — bir karar itiraza uğradığında kurumun ihtiyaç duyduğu bilginin aynısı.

### Otomatik notlandırıcıya saldırmak

Farklı bir maruziyet araçların içinde yer alır. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]], kurumsal bir [[automated-assessment|YZ notlandırma aracının]] (Microsoft Copilot, GPT-5.2) altı temel çalıştırmada da başarısız olarak notlandırdığı sentetik bir kompozisyonun dosyalarına beş dolaylı istek metni enjeksiyonu gizlemiştir. İki strateji, kullanıcıya görünür hiçbir uyarı vermeden notu yükseltmiştir; bildirilen saldırı başarı oranları %100 (9 iterasyondan 9’u) ve %94 (18’den 17’si) olup, talimat manipülasyonunu, rol yapmayı ve gizlemeyi birleştirmiştir; araç en basit saldırıyı engelledikten sonra bir sohbeti sessizce devre dışı bırakmış ve bir iterasyonda gömülü talimatları asla izlemeyeceğini duyurduktan sonra sonraki altı çalıştırmanın her birinde notu yükseltmiştir. Gizli bir talimat aracılığıyla elde edilen bir not hiçbir [[assessment-validity|geçerlilik]] iddiası taşımaz ve aynı teknik, çıktıda kalıcı iz bırakmadan bir teslimi düşürmek için kullanılabilir — bu, itiraza uğrayan otomatik bir kararın temyiz kaydının boş olabileceği ve bir usulsüzlük (ya da liyakat) bulgusunun eserden hiç delillendirilemeyeceği anlamına gelir. Humble’ın sektör düzeyinde talepleri nettir: açık [[educational-policy-ai|YZ politikası]], [[educational-development|mesleki gelişim]] ve saldırı yüzeyinin varsayılmak yerine ölçülmesini sağlayan standart, alan bağımsız dayanıklılık testleri; yüksek getirili işler için ise sınırlandırılmış YZ kullanımı ve [[human-in-the-loop-ai|insan denetimi]] ayrılmıştır.

### Kampüs kapısının ötesine

Meslekî programlar için maruziyet mezuniyetle bitmez. Gutowski ve Hurley, çalışan avukatları bağlayan mesleki davranış kurallarının — teknolojik yeterlilik görevi, gizlilik, bu araçları kullananların denetimi, mahkeme karşısında samimiyet — YZ kullanımına şimdiden bağlı olduğunu ve [[hallucination-risk|uydurma yetki]] alanının, uydurma davalar sunan uygulayıcılar için yaptırımlar doğurduğunu kaydeder. Aynı devir mantığı, lisans, kayıt veya yasal bir görevin mezunu takip ettiği her yerde geçerlidir; bu nedenle [[legal-education|Hukuk Eğitimi]] ile [[medical-education|sağlık meslekleri]] disiplin sayfaları bu sayfanın yanında yer alır.


### Sahiplik ve kamu malı sorusu

Telif hakkı bu alandaki diğer hukuki sorudur ve usulsüzlükten ters yönde işler. [[tlili-double-edged-sword-oer-generative-ai-2026|Tlili, Farrow, Bozkurt, Amiel, Wiley ve Downes (2026)]], Amerika Birleşik Devletleri Telif Hakkı Bürosu’nun tutumunu, istek metinlerini tek başına yazarlık için yetersiz saymak olarak okur. Bu okuma geçerliyse, tamamen makine tarafından üretilmiş bir eser onu istekleyen kişiye ait değildir; bu iki bakımdan önemlidir: bir usulsüzlük davasında bir öğrenciye atfedilecek yazılı bir metin yoktur ve o eseri yayımlayan bir kurum onun üzerinde hak iddia edemez. O zaman sahipliğin yerine getireceği işi lisanslar yapar; açık lisanslama ile akademik dürüstlüğün tek bir sorunun iki yüzü olmasının nedeni budur.

## Açık Sorular

- Bu risklerden hangisi gerçekten dava açılmasına veya düzenleyici bulgulara yol açmıştır? Bilgi tabanında usuller, politikalar ve teknik değerlendirmeler vardır, ancak dava sonuçları yoktur ve sanki varmış gibi okunmamalıdır.
- Bir kurum bir duruşmada hata oranlarını kabul ettikten sonra algılayıcı çıktısı herhangi bir şeyin kanıtı olarak ayakta kalır mı, yoksa bu kabullenme davayı bir usul adaleti ihtilafına mı dönüştürür?
- Gözetim ve algılama üçüncü taraf bir platform üzerinden işlediğinde veri sorumlusu tedarikçi mi yoksa kurum mudur ve bu durum kurumlara verilecek öğüdü değiştirir mi?
- Kurumlar, YZ usulsüzlüğüne uyguladıkları delil standartlarını — delil eşiklerinin başka yerlerde yayımlandığı gibi — hem haksız suçlamayı hem de hukukî maruziyeti azaltmanın bir yolu olarak yayımlamalı mıdır?

## Yaygın yanlış anlamalar

**“YZ usulsüzlüğü tek bir hukuki sorudur.”** Yan yana gelen birkaç sorudur: **delil** (suçlamanın herhangi bir biçimde kanıtlanıp kanıtlanamayacağı), **sözleşmesel ve usule ilişkin** (kurumun kendi kurallarına uyup uymadığı ve adil bir duruşma verip vermediği) ve **eşitliklerle** ilgili olanlar. Delili ele alıp usulü ihmal eden bir yanıt, hiç düşünmediği bir boyutta hukuken maruz kalır ve kurumlar genellikle hangi konuda dava edilmişlerse ona hazırlanır.

**“Kurumlar tutarlı politikalar yazdı, dolayısıyla risk öğrencilerindir.”** Tutarsızlık ters yönde de işler. [[watson-rainie-ai-challenge-faculty-survey-2026|Watson ve Rainie’nin (2026)]] **1.057 ABD’li öğretim üyesiyle** anketi, **yanıtlayanların %87’sinin kendi ödev düzeyinde** rehberlik yazdığını buldu; böylece yürürlükteki kurallar tek bir kurum içinde değişir ve bir öğrenci aynı hafta bir öğretim üyesinin kuralına uyup bir diğerininkini ihlal edebilir. Açıklanmamış bir standart altında suçlanan öğrencinin, kurumun yarattığı bir usul sorunu vardır.

**“Algılama, bir usulün ihtiyaç duyduğu delili sağlar.”** Algılama bir puan sağlar. Delil sorusu, suçlamanın herhangi bir biçimde kanıtlanıp kanıtlanamayacağıdır ve [[ai-detection|algılama literatürü]], araçların ne bir disiplin sürecinin gerektirdiği güvenilirliği ne de yorumlanabilir kategoriyi ürettiğini gösterir. Usulü bir algılayıcı üzerine kurmak, onu en zayıf halka üzerine kurmaktır.

**“Riskler varsayımsaldır ve politika yetişir.”** Riskler şu anda eşitsiz biçimde dağıtılıyor ve bunları soğuran öğrenciler bir usule itiraz etme kapasitesi en düşük olanlardır. Bir kurumun soruşturma kapasitesi ile bir öğrencinin yanıt verme kapasitesi arasındaki asimetri, gelecekteki değil bugünkü bir zarardır.

## Bağlı kavramlar

- [[academic-integrity]] — riski taşıyan uygulamanın dayandığı davranış çerçevesi
- [[ai-detection]] — haksız suçlama davalarının merkezindeki araç
- [[remote-proctoring]] — değerlendirmede gözetim ve onun veri koruma soruları
- [[assessment-validity]] — kanıtın kendisinden yapılan iddiayı kuramayıp kuramadığı
- [[privacy]] — öğrenci verilerinin toplanması, saklanması ve ileriye doğru işlenmesi
- [[regulation]] — kurumların yerine getirmesi gereken yasal ve düzenleyici yükümlülükler
- [[governance]] — iç politika tasarımı ve uygulamanın tutarlılığı
- [[educational-policy-ai]] — istenmeyen maruziyetin kaynağı olarak kurumsal YZ politikası
- [[ai-use-disclosure]] — açıklama beklentileri ve uygulanamaz sınırları
- [[accessibility]] — bir kural yardımcı bir aracı ortadan kaldırdığında makul uyum
- [[assistive-technology]] — aşırı kapsama sorununun merkezindeki araçlar
- [[neurodiversity]] — aşırı geniş yasaklara en çok maruz kalan öğrenciler
- [[equity-in-ai-education]] — algılama ve gözetimin farklı yük getirmesi
- [[student-experience]] — hukukî olanı önceleyen insanî maliyet
- [[hallucination-risk]] — mesleki ve kurumsal sorumluluk olarak uydurma yetki alanı
- [[reducing-ai-misuse]] — suçlamaya alternelin önleme yolu

## Bağlı makaleler

- [[munoz-misconduct-allegation-evidence-2026]] — Usulsüzlük suçlaması dosyalarının gerçekte ne içerdiği ve doğal adalet gerekliliği
- [[hadra-ai-detector-accuracy-efl-2026]] — Algılayıcı doğruluğu, karma metinde başarısızlık ve EFL yanlış sınıflandırma riski
- [[van-vlasselaer-ai-detector-reliability-2026]] — Algılama araçlarının ikinci bir derlemdeki güvenilirliği
- [[bassett-ai-detectors-education-2026]] — Hiçbir algılama eşiğinin neden doğru olamayacağı: hata ödünleşimi savunması
- [[teichmann-detecting-undetectable-misconduct-2026]] — Kanıt tespit edilemez hale geldiğinde yeniden değerlendirilen usulsüzlük usulleri
- [[wright-transcription-not-generation-2026]] — Aşırı kapsamlı YZ kuralları, engellilik uyumu ve makul ayarlama
- [[harerimana-remote-proctoring-nursing-scoping-2026]] — Gizlilik ve gözetim kaygılarıyla haritalandırılmış uzaktan gözetim
- [[automated-online-exam-proctoring-decade-review-2026]] — On yıllık otomatik gözetim araştırması
- [[academic-dishonesty-automated-proctoring-ai-2026]] — YZ çağında akademik sahtekârlık ve gözetim
- [[gutowski-hurley-genai-policy-legal-education-2025]] — Savunulabilir uygulamanın ön koşulu olarak politika netliği
- [[qian-governing-genai-higher-ed-policy-2026]] — Yenilikçi ABD üniversitelerinde politika ve destek ekosistemleri
- [[crompton-governing-genai-higher-ed-delphi-2026]] — Parçalı yönetişim üzerine uzman görüş birliği
- [[sharma-judgment-visible-genai-assessment-2026]] — Gözetim yerine görünür muhakeme yoluyla dürüstlük
- [[shin-ai-policies-sld-2026]] — Özgün öğrenme güçlüğü olan öğrenciler için politika boşluğu
- [[li-genai-assessment-language-equity-2026]] — Kural tasarımı sorunu olarak dil eşitliği: destek–ikame sınırı, dolaylı ayrımcılık ve temyize tabi olma (Li 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Öğrencilerin dolaylı istek metni enjeksiyonuyla YZ notlandırıcılara saldırması, tespit edilmeden değiştirilen notlar (Humble 2026)
- [[coates-governing-academic-integrity-indicators-2025]] — Değerlendirmeyi doğrulamak için yönetişim göstergeleri ve reform programı (Coates, Croucher & Calderon 2025)
- [[watson-rainie-ai-challenge-faculty-survey-2026]] — 1.057 ABD’li öğretim üyesi: bireysel politikalar kurumsal olanları çok geride bırakıyor, yapısal yanıt ince (Watson & Rainie 2026)
