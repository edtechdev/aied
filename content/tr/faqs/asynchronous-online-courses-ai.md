---
title: "YZ İşi Yapabildiğinde Eşzamanlı Olmayan Çevrimiçi Kursları Nasıl Tasarlamalı ve Yürütmeliyiz?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [reducing-over-reliance, course-ai-policy, verify-ai-output, group-work-ai]
weight: 68
type: faq
foundations: [academic-integrity, cognitive-offloading, learning-design]
pedagogy: [community-of-inquiry, online-teaching-and-learning, self-regulated-learning, student-engagement]
technology: [generative-ai]
assessment: [assessment]
methods: [meta-analysis-systematic-review, rct, mixed-methods-research, design-based-research]
ethics: [guardrails]
audience: [instructors, instructional designers]
level: [higher ed, adult learning]
translation_of: faqs/asynchronous-online-courses-ai
source_updated: "2026-10-28T11:34:12-04:00"
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

Dönem açılıyor ve belirli bir saatte hiçbir şey olmuyor. Birinci haftanın okumasını, tartışma istemini, ilk vakayı paylaşıyorsunuz ve ne geleceğini görmek için bekliyorsunuz. Gelen şey akıcı, konuyla ilgili ve onu teslim eden öğrenci hakkında size hiçbir şey söylemiyor. İçine girilecek bir derslik yok, salı günü 10.15'te okuyacak bir yüz yok ve öğrenci hâlâ karşınızdayken sorabileceğiniz bir takip sorusu yok.

Bir meslektaşınıza vereceğiniz yanıt: eş zamansız bir derste bir sınıfın bedava sağladığı her şey kasten inşa edilmek zorundadır. Notu bitmiş dosyaya değil sürece verin, öğrencinin araçsız ve yardımsız ürettiği bir ölçümü elinizde tutun, dağıttığınız YZ'yi sınırlandırın ve dersin içinde tutun, takvimi de bir tasarım kararı olarak ele alın. Her ödev için şunu sorun: bir model ürünü öğrenci yerine üretseydi öğrencinin hâlâ yapması gereken ne kalırdı?

## Kısa özet

**1.** Süreci notlandırın. Bir karar günlüğü, aşamalı bir taslak ya da bir paragraf öz açıklama, nihai teslimin sakladığı akıl yürütmeyi gösterir.

**2.** Yeterlilik belgeleyen her değerlendirmede araçsız bir ölçüm tutun. Aşağıdaki nüfus verisindeki kalıcılık farkı, gözetim devreye girdiğinde kapanıyor.

**3.** Üretim yükünü haklı çıkardığı yerlerde [[asynchronous-oral-assessment-2026|eş zamansız sözlü değerlendirme]] kullanın: tam zamanında istemler, öğrencinin revize edemediği kısa kayıtlar, rubriğin içine gömülmesi, otomatik oluşturulan dökümler.

**4.** Sağladığınız herhangi bir YZ'yi yanıtlamak yerine ipucu verecek biçimde yapılandırın ve genel bir şeye dışarıdan bağlantı vermek yerine dersin içine gömün.

**5.** Büyük teslim tarihlerini aralayın ve her birinden önce 7-8 günlük bir pencere açın. Etkileşim verisinin size verdiği uyarı süresi bu kadar.

**6.** Bir tartışmadaki hareketi notlandırın: bağlanılmış bir konum, bir itiraz, belgelenmiş bir yeniden düşünme.

## Ödevinizin neyin kanıtı olduğuna karar verin

Eş zamansız bir ders yapısal bir nedenle açık veriyor. Öğrenme kanıtı teslimin kendisidir ve teslimler artık üretmesi ucuz.

Gösterimler öğrenciyi tamamen denklemden çıkarıyor. Canlı bir lisans psikoloji dersinde özerk ajanlar öğrenme yönetim sistemine giriş yaptı, ders materyallerini okudu ve gözetimsiz değerlendirilen işi hiçbir öğrenci devrede olmadan tamamladı. İki sınav yaklaşık **12 dakikada** ve **5 dakikanın altında** bitti, ikisi de **10/10** aldı. Bir tartışma gönderisinde ajan akranlarının gönderilerini taradı ve onlara yanıt vermek için inandırıcı, birinci tekil şahıs bir yaşam öyküsü uydurdu. Yazarların daha geniş kaydı, **yedi ajan aracı** kullanarak Canvas, Moodle ve Brightspace genelinde en az **15 belgelenmiş ajan çalıştırmasını** kapsıyor. Çerçevelemeleri izlenceniz için önemli: bu, bir [[assessment-validity|değerlendirme geçerliliği]] problemidir ve [[academic-integrity|dürüstlük]] probleminden önce gelir, çünkü ajanın tamamlaması, teslim edilen işin öğrenmesi değerlendirilen kişiden geldiği varsayımını ortadan kaldırır ([[ai-agents-complete-lms-assessment-validity-2026|Hadjisolomou ve El-Haddad, 2026]]).

Aracın öğrenmeye ne yaptığına dair nedensel kanıt da aynı ölçüde doğrudan. Yaklaşık 1.000 lise matematik öğrencisiyle yapılan randomize bir denemede korumasız YZ desteği alıştırma performansını **%48** artırdı ve yardımsız, kitap kapalı sınav puanlarını **%17** düşürdü. Erişimi olmayan öğrenciler erişimi olanları geçti. Yanıt yerine ipucu veren, [[guardrails|koruma kurallarıyla]] sınırlandırılmış bir eğitmen zararı ortadan kaldırdı. Sonucu kısıtlama belirledi.

Nüfus verileri de aynı yönde. **3,2 milyon ALEKS etkileşimi** genelinde, ChatGPT'nin kamuya açılmasından sonra YZ'ye açık problemlerde çalışma süresi **%26,9** düştü ve gözetimli kalıcılık maddelerini doğru yanıtlama olasılığında **%25** bir azalma görüldü. Gözetim devreye girdiğinde etki kayboldu. Ders tasarımı için işe yarayan kısım bu kayboluştur, çünkü kısayolun platform dışında olduğunu ve zararın sizin belirlediğiniz koşullarda yaşadığını gösterir.

Tasarıma karşı çalışılması gereken daha sessiz bir başarısızlık var. [[metacognitively-discordant-completion-genai-2026|Üst bilişsel olarak çelişkili tamamlama]], doğru ve eksiksiz bir iş teslim ederken içten içe anlamanın hiç gelmediğini bilme durumunu adlandırır. Bir sınıfta bunu öğrencinin tereddüdünde yakalayabilirsiniz. Eş zamansız bir derste teslim tek kanaldır ve doğru bir teslim başarı olarak okunur. [[assessment|Değerlendirme]] tasarımı ilk kaldıracınızdır.

## Kanıtı sürece koyun

Bitmiş ürün hiçbir şeyi kanıtlamıyorsa, kanıt işin nasıl yapıldığından ya da öğrencinin devredemediği bir koşuldan gelmek zorundadır.

**Süreci açan ürünler** en ucuz değişimdir ve ölçekte işler: zorunlu bir ara karar günlüğüyle aşamalı teslimler, her yanıta eklenmiş bir paragraflık öz açıklama, bir kaynağın notlanması, geri bildirimden sonra revize edilmiş bir plan. Bunlar [[cognitive-offloading|akıl yürütmeyi]] kalıntısı yerine yakalar ve öğretim elemanına tarama maliyeti görece düşüktür.

**Eş zamansız sözlü değerlendirme**, yeterliliğin belgelenmesi gereken yerlerde en çok ağırlık taşır. [[asynchronous-oral-assessment-2026|Pentland, Lowenthal ve Krier (2026)]], istemleri tam zamanında sunan, öğrencilerin geri dönemedikleri kısa ve süreyle sınırlı web kamerası yanıtları kaydettiği ve dökümler otomatik oluşurken gömülü rubriklere göre notlandırma yapan web tabanlı değerlendirmeleri inceledi. İki çalışma genelinde, bir orta düzey muhasebe pilotu ve bir veri analitiği dersi, öğrenciler yüz yüze çoktan seçmeli sınavlardan daha yüksek puan aldı. Fark ikinci çalışmada anlamlı, ilkinde olumlu ama anlamlı olmayan bir eğilimdi; biçimler arası orta düzeydeki korelasyonlar yakınsak [[assessment-validity|geçerliliği]] destekledi. Öğrenciler farklı biçimde hazırlandıklarını, daha fazla [[active-learning|aktif]] çalışma stratejisi kullandıklarını ve biçimi mesleki açıdan anlamlı bulduklarını bildirdi. Ortak saati olmayan bir ders için bu, yapısal olarak en yakın eşdeğerdir: düşünme, öğrencinin seçtiği bir zaman ve yerde, kohort büyüklüğüyle artmayan bir yönetim maliyetiyle canlı olarak gerçekleşir.

**Bir araçsız ölçüm**, notu bilgi belgeleyen her derste bulunmalıdır. ALEKS sonucu gerekçedir: gözetim devreye girdiğinde kalıcılık farkı kayboldu. Öğrencilere bu koşulun neden var olduğunu söyleyin. Bu gerekçe [[course-ai-policy|dersinizin YZ politikasına]] aittir.

## Aracın sıralamada nerede durduğuna karar verin

Ürün güvenilmez bir kanıt haline geldiğinde, işin sırası değerlendirme tasarımının bir parçası olur.

[[brcic-effortless-trap-productive-struggle-2026|Brcic ve Frljic (2026)]] yerleştirmeyi argümanın merkezine koyuyor: izin ver ya da yasakla sahte bir seçimdir ve önemli olan tasarım sorusu **aracın nerede durduğudur**. Topladıkları nedensel kanıt, sonucun yalnızca yerleştirmeyle tersine döndüğünü gösteriyor. Lise öğrencilerini yardımsız bir sınavda yaklaşık **%17 daha kötü** bırakan aynı korumasız yardımcı, yanıt vermeyi reddedecek biçimde yeniden kurulduğunda hiç zarar vermedi ve iyi tasarlanmış bir [[intelligent-tutoring|özel ders sistemi]] öğrenmeyi kabaca **iki katına** çıkardı. Aracı yerleştirmek için sundukları altı hamleli çerçeve (hazırla, yokla, işaret et, bağla, güçlendir, test et) kullanılabilir bir menüdür. Teşhislerini koruyun: *YZ'nin işe girmesi görevi zahmetsiz hissettiriyorsa, yanlış yerdedir.* Kötü yerleştirme, yardımsız görevde çöken bir öğrenme yanılsaması bırakır; [[metacognitively-discordant-completion-genai-2026|üst bilişsel olarak çelişkili tamamlamanın]] betimlediği durum budur.

Bir ödeve yazıldığında bu, kâğıda basabileceğiniz bir sıra verir:

**Düşün, bağlan, YZ kullan, eleştir, revize et, açıkla.**

Öğrenciler entelektüel işi dener ve bir ilk yorum, tahmin, plan ya da karara bağlanır. Sonra model devreye girer: geri bildirim, alternatifler, karşı argümanlar ya da eleştiri için. Ardından öğrenciler üretileni yargılar, revize eder ve neyin neden değiştiğini açıklar. Geri kalanı değerlendirilebilir kılan şey bağlanma adımıdır. Bağlanmamış öğrencinin revize edecek bir şeyi yoktur ve bir modelin sıfırdan yazdığı bir ürünün hiç revizyon geçmişi yoktur.

Kaçınılması gereken aşırı düzeltme: her istemi toplamak ve her tuş vuruşunu belgelemek, kanıt olmadan iş yükü üretir. Gerçekten okuyacağınız karar noktalarını isteyin: hangi kanıt seçildi, hangi alternatif reddedildi, eleştiriden sonra ne değişti.

## Savunamadığınız görevi bir ikizle eşleştirin

Buradaki yapısal seçenek, pedagojik olarak sağlam bir görev ile savunulabilir bir görev arasında seçim yapmayı bırakmaktır. [[roe-assessment-twins-2026|Roe, Perkins ve Giray (2026)]] **değerlendirme ikizleri** öneriyor: YZ'ye açık görevi, örneğin evde yazılan bir deneme ya da analizi, *aynı* kazanımları değerlendiren, çapraz doğrulamaya izin verecek kadar yakın zamanlanmış ve birbirine bağımlı biçimde notlandırılan ikinci, daha az açık bir görevle eşleştirmek. Eşleştirmeleri Messick'in altı geçerlilik kanıtı şeridi boyunca uzanıyor ve tasarım süreçleri üç adım: açıkları belirle, kazanımları hizala ve ikizi seç, sonra ikisini birbirine bağlayan notlandırmayı geliştir. Evde yapılan analiz genişletilmiş inceleme için değerini korur. İkiz kısa bir vaka varyasyonu, kilit bir kararın açıklaması ya da kısa bir sözlü veya çok ortamlı savunma olabilir.

Yol arkadaşı soru sahipliktir. [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|Ebrahimzadeh, Shibani ve Buckingham Shum]], üretken YZ ile ortak yazarlığın çeşitli geçerlilik kanıtı biçimlerini zayıflattığını savunuyor ve **ortak yazarlık dürüstlüğünü** başlı başına bir geçerlilik kanıtı kaynağı olarak öneriyor; bu, öğrenci anlamadığı YZ üretimi içeriği teslim ettiğinde ihlal edilir. Sahipliği ölçekte kontrol etmek için bir **YZ Vivası** üzerinde çalışma bildiriyorlar: kontrol edilebilir tür ve karmaşıklıkta kavrayış soruları soran, uzman eğitimciler ve değerlendirme uzmanlarınca derinlemesine doğrulanmış, karma bir sözlü sınav yürüten konuşma ajanı. Bunu her şeyi gözetim altına almaya karşı tartın. Kişinin kendi akıl yürütmesinin sözlü savunması, salon izlemenin ölçeklenemediği yerde ölçeklenir ve kavrayış hakkında kanıt üretir.

## Sağladığınız YZ'nin ne yapmasına izin verildiğine karar verin

Önemli olan, gömülü ve sınırlandırılmış YZ ile bağlantısız bir sohbet robotu arasındaki farktır. İkisi farklı sonuç üretir.

[[new-systems-of-learning-for-distance-learning-institutions-a-six-study-review-of|Açık Üniversite'nin AIDA asistanı]] en iyi belgelenmiş gömülü vakadır: 50'den fazla ülkede 200.000'i aşkın öğrenene hizmet eden bir kurumda, 498 öğrenci ve 20 personelle 18 ay boyunca altı yinelemeli tasarım temelli çalışma. Keşif amaçlı randomize bir denemede AIDA kullanan öğrenciler kontrol grubuna göre **iki kat daha uzun** süre harcadı ve derslerinde daha fazla sayfa gezdi, **%96'sı** asistanın resmi çalışmalarında bulunmasını istedi. Aynı kurumun dışarıdan, bağlantısız bir sohbet robotuyla deneyimi ters yönde gitti.

[[lock-integrating-ai-online-learning-higher-ed-2025|Lock, Arteaga ve Johnson'ın (2025) derlemesi]], 32 ülkeye yayılmış 63 atıfla birlikte sosyal bir koşul ekliyor: ChatGPT'yi öğretmen özel dersiyle *birlikte* kullanan öğrenciler, yalnız başına kullananlara göre daha fazla [[learning-gains|öğrenme kazanımı]] algıladı. Bir asistan ya öğretim elemanını tamamlar ya da ilişkinin yerine geçer; bunlardan yalnızca biri bir ders tasarımıdır.

İki uyarı ağırlığı hak ediyor. KhanMigo'nun başarısızlığı teknik değildi. Öğrenenler sohbet robotuyla etkileşime girmedi ve kazanım kanıtı sınırlıydı; bu da [[governance|örgütsel hazırlığa]] ve öğretim uyumuna işaret eder. Öğretim elemanı tarafı da hazır değil: Güney Afrika öğretmen yetiştirme karşılaştırmasında, YZ bütünleşik fen öğretimi için öz bildirilen TPACK kampüs temelli bir üniversitede **%64,0** iken uzaktan bir üniversitede **%47,4** idi ve pedagojik bilgi her ikisinde en zayıf alandı ([[online-teaching-and-learning]]). Bir asistanı eş zamansız bir derse konuşlandırmak, çıktısını yargılamak zorunda olan insanları eğitmez.

## Tartışmadaki hareketi notlandırın

Tartışma forumları, eş zamansız bir dersin [[community-of-inquiry|topluluk]] kurduğu ya da sessizce bir teslim kutusuna dönüştüğü yerdir. Orada neyi otomatikleştireceğinizi iki bulgu şekillendirmeli.

Zor kısım zamanlama. [[llm-facilitation-timing-online-discussions|Tsirmpas ve arkadaşları]], kolaylaştırma veri kümelerini karşılaştırmak için PEFK derlemini kurdu, ardından uzman insan kolaylaştırıcılarla ve LLM yargıçlarıyla kolaylaştırma *zamanlaması* üzerine ilk anketi yürüttü. İnsanlar müdahale konusunda daha temkinliydi; LLM'ler aşırı istekliydi. İkisi de kolaylaştırmanın **gerekli olmadığına** karar verirken, gerekli olduğuna karar verdiklerinden daha emindi. Eğitilmiş sınıflandırıcı modeller LLM düzeneklerinden daha iyi performans gösterdi ve o zaman bile mevcut veri kümeleri performansı sınırladı. Pratik okuma: özerk moderasyonu kritik yoldan uzak tutun ve bir tartışmada YZ kullanıyorsanız onu varsayılan olarak sessiz kalacak biçimde yapılandırın.

Özetler, öğrencilerin katılmadan bir forumda gezinmesine yardımcı olur. Üç yinelemede 128 üniversite öğrencisiyle [[hao-peer-exposure-bridging-social-capital-ai-summaries-2026|Hao ve Cukurova (2026)]], YZ ile üretilen tartışma özetlerinin akran katkılarına maruziyeti genişlettiğini ve sosyal sermaye kuramının köprüleme dediği zayıf bağları, anlamlı gönderiler bulma çabasını azaltarak güçlendirdiğini buldu. Yine de görüntüleme etkinliğinin ders boyunca düşmesini engellemediler. Özetleme, gezinti amaçlı bir [[scaffolding|iskele]]dir.

Ayakta kalan yapı bir başlık değil bir dizidir: **konum, itiraz, yeniden düşünme.** Öğrenciler ders materyaline dayanan bir yoruma bağlanır, ardından başka bir bakış açısı, karşı örnek ya da eleştiriyle karşılaşır, sonra akıl yürütmelerinin hareket edip etmediğini ve nasıl ettiğini açıklar. Notlandırdığınız şey fikirler arasındaki harekettir. Teslim edilen bir gönderi artı iki yanıt, bir ajan akranın gönderilerini tarayıp sınıf arkadaşının yaşam öyküsünü taklit edebildiği anda bunu göstermeyi bıraktı.

Bir ajanın taklit ettiği şey yüzey davranışı olduğu için sizin kendi katkılarınız kıt kaynak haline gelir. Düzinelerce bireysel gönderiye mekanik yanıt vermek öğretim varlığının en zayıf biçimidir; tartışmanın bütünü üzerinden sentez yapmak en güçlüsüdür: *analizlerinizde üç varsayım tekrar tekrar beliriyor; birkaçınız bu kanıtı farklı okumuş; bu argüman şu karşı örneği sunana kadar ikna edici.* Bu, mesaj üretimi değil [[teacher-role|düzenleme]]dir.

Her ikisinin altındaki çerçeve sorusu hesap verebilirliktir. [[reconceptualizing-community-inquiry-generative-ai|Ba, Gašević, Lim ve Anderson (2026)]], üretken YZ'nin [[community-of-inquiry|topluluk]] varsayımını, yani varlık göstergelerinin hiç insanlara atfedilebileceği varsayımını sarstığını savunuyor. Üretken YZ'yi epistemik bir koşul, varlıkları ise sorgulama kalitesiyle ilişkisi insan hesap verebilirliğinin nerede durduğuna bağlı sosyoteknik kazanımlar olarak ele alıyorlar. Somut olarak, varlığın bir forum olduğu için doğduğunu varsaymak yerine her alışverişte kimin neyden sorumlu olduğuna karar verin ve bunu belirtin.

## Derslik olmadan dönemi hareket halinde tutun

Kendi hızında biçimler [[self-regulated-learning|öz düzenlemeyi]] varsayar ve onu nadiren öğretir. Hangi davranışların görevde kalmayla gerçekten ilişkili olduğuna dair kanıt alışılmadık ölçüde pratiktir.

530 üniversite öğrencisini birliktelik kuralı madenciliği ve kümeleme ile inceleyen [[decreasing-digital-distraction-college-online-learning-2026|Shi ve ark. (2026)]], öz düzenlemeli öğrenme davranışlarının, yani **hedef belirleme, ortamı yapılandırma ve zaman yönetiminin**, düşük dijital dikkat dağınıklığıyla en tutarlı biçimde birlikte ortaya çıktığını buldu; öğrenen-öğretim elemanı ve öğrenen-içerik [[student-engagement|katılımı]] ile teknik yeterlik de öyle. Akran yardımı arama ve öğrenen-öğrenen katılımına dayanma, düşük dikkat dağınıklığı profillerinde *daha az* sıklıkta göründü. Yeni bir grup etkinliği tasarlamadan önce ortamı ve programı yapılandırın.

Öz düzenleme aynı zamanda sabit bir özellik değildir. 75 birinci sınıf öğrencisiyle tam bir dönem boyunca [[song-genai-learning-partner-srl-over-time-2026|Song ve ark. (2026)]], onun hem istikrarlı bir yatkınlık hem de dalgalanan bir durum olarak işlediğini buldu. Bireysel temel çizgiler sabit kalırken üst bilişsel bilgi ve [[well-being|iyi oluş]] dönem boyunca sistemli biçimde düştü; bu, büyük değerlendirme teslim tarihleri gibi müfredat taleplerinden kaynaklandı. Teslim tarihlerini üst üste toplamak verimli bir yönetim seçimi olabilir ve aynı zamanda biçiminizin dayandığı düzenlemeye ölçülebilir bir vergidir.

Müdahale penceresi bilinebilir. [[zhang-ml-student-progress-programming-2026|Zhang, Jeffries ve Koprinska (2025)]], içerik-etkileşim günlükleri üzerinde yorumlanabilir makine öğrenmesinin modül düzeyinde ilerlemeyi öngördüğünü ve büyük ölçekli çevrimiçi programlama derslerinde bırakma sonuçlarını **modül teslim tarihlerinden 7-8 gün öncesine kadar** işaretleyebildiğini gösterdi. Bu, belirli bir öğrenciye belirli bir dürtme göndermek için yeterli uyarıdır ve başarısızlığı notlandırma anında keşfetmekten iyidir. [[adult-learning|Yetişkin]] ve uzaktan öğrenenler için AI-ALOE tasarım yönergeleri en çok önem taşıyan kısıtı ekliyor: mobil erişim, çevrimdışı çalışabilirlik ve gerçek eş zamansız erişilebilirlik; çünkü bu öğrenenler diğer yükümlülükler arasında zaman parçalarında çalışır.

## Üretimde neyi otomatikleştireceğinize karar verin

İki kullanımın arkasında makul kanıt var ve ikisi de öğretim elemanı iş yükünü hedefliyor.

**Üretim maliyeti.** [[mooc-to-maic|MAIC]], MOOC'un "N öğrenci için tek video" yayınını "tek öğrenci için N ajan" olarak yeniden çerçeveliyor; paylaşılan bir model temelinde uzmanlaşmış öğretmen, asistan, sınıf arkadaşı ve analizci ajanları kullanıyor. Yazarları, ders üretiminin MOOC başına yaklaşık **\$25.000 ve 60 saat**ten **\$2'nin altına ve 30 dakikaya** çöktüğünü, Tsinghua'da iki ders üzerinde **500'den fazla öğrenciden 100.000'den fazla öğrenme kaydıyla** pilotlandığını ve açık kaynak OpenMAIC olarak yayımlandığını bildiriyor. Kişiselleştirilmiş medya, varlık düzeyinde aynı fikirdir: büyük bir çevrimiçi derste [[personalized-ai-generated-videos-preference-2026|Tomlinson ve ark. (2026)]], öğrencilerin YZ ile üretilmiş kişiselleştirilmiş videoları kişiselleştirilmemiş insan kayıtlarına tercih ettiğini ve kişiselleştirme etkisinin insan sunucuya atfedilen değerden daha ağır bastığını buldu.

**Forum gezintisi.** Yukarıdaki özet iskelesi, öğretim elemanının okuma yükünü artırmadan iyi katkıları bulma maliyetini düşürdü.

Sizinle kalan üç görev: bir yazının öğrencinin kendi düşüncesi olup olmadığına karar vermek, bir tartışmanın müdahale gerektirip gerektirmediğini yargılamak ve zorluğu kalibre etmek. Üretilen materyal de kredi taşımadan önce pedagojik incelemeden geçmelidir. Ucuz üretim, sağlam tasarımdan ayrı bir sorudur.

## YZ'nin rolünü adlandırın ve öğrencinin hâlâ bir rolü olduğunu kontrol edin

"Öğrenciler YZ kullanabilir" tasarıma karşı çalışılamayacak kadar geniş bir şartnamedir. Etkinliği tasarlanabilir kılan şey rolü adlandırmaktır ve roller varlık açısından sonuç taşır: pazarlama eğitiminde üretken YZ üzerine bir çalışma **eğitmen, takım arkadaşı ve araç** ayrımı yapıyor, her birinin öğretim, sosyal ve bilişsel varlığı farklı etkilediğini gösteriyor ve veri mahremiyeti, intihal, bağımlılık ve değerlendirme adaleti gibi tanıdık etik açıkları listeliyor ([[genai-marketing-education-roles-2026|GenAI in Marketing Education]]). Aynı model bir ödevden önce Sokratik sorgulayıcı, bir ilk taslaktan sonra eleştirmen, bir vaka analizi sırasında simüle edilmiş paydaş, argümanı çürütülmesi gereken bir rakip, alıştırma sırasında ipucu veren bir eğitmen ya da asli akıl yürütme oluştuktan sonra getirilen bir editör olabilir. Bunlar farklı etkinliklerdir ve onları aynı kefeye koymak, "YZ'ye izin var"ın "hiçbir şey tasarlanmadı" anlamına gelmesinin yoludur.

[[scaffolding]] testi sağlar. Destek, öğrenenlerin henüz tek başına yapamadıklarını yapmalarına yardımcı olmalı ve yeterlik geliştikçe azalmalıdır. Tam çözümler sunmayı sürdüren bir model görevi yapıyor demektir. YZ destekli her etkinlik için şu cümleyi tereddütsüz tamamlayabilmelisiniz:

*Buradaki YZ'nin işi _____, öğrencinin işi ise ________.*

İkinci boşluk çok az düşünme içeriyorsa etkinliğin yeniden tasarlanması gerekir.

## Yazmadıkları bir yanıtı yargılamalarını isteyin

[[ai-literacy]] eleştirel değerlendirmeyi, [[metacognition|üst bilişsel]] yargıyı ve aracı ne zaman atlayacağını bilmeyi kapsar. Öz bildirilen güven, gösterilmiş yeterlilik için zayıf bir vekildir.

Her eş zamansız dersin hemen benimseyebileceği bir değişiklik: **bazen YZ çıktısını öğrencilere siz verin.** Birbiriyle yarışan iki yanıt uzatın ve hangisinin daha güçlü olduğunu ve nedenini sorun. En zayıf iddiayı, eksik varsayımı, doğrulanamaz kaynağı, akla yatkın ama yine de yanlış olan açıklamayı sorun. Fikirlerini neyin değiştireceğini sorun.

Bu şekilde çerçevelendiğinde notlandırılan yetenek, öğrencinin güvene değer bir yanıtı tanıyıp tanıyamamasıdır; bu, disiplinin gerektirdiğine daha yakındır ve devredilmesi çok daha zordur. [[verify-ai-output|Doğrulama pratikleri]] tekniğin yaşadığı yerdir. Burada önemli olan, değerlendirmeyi bir modül duyurusundaki tavsiye olarak bırakmak yerine notlandırılan görevin içine koymaktır.

## Öğretim tasarımcılarının eş zamansız derslerde yanlış yaptıkları

Teslim problemdir, yani düzeltilmesi gereken şey teslimdir. Aynı zamanda sahip olduğunuz tek kanaldır; bu yüzden yalnızca ürünü sıkılaştırmak az şey değiştirir. İkinci bir kanal ekleyin: bir süreç kaydı, kaydedilmiş bir açıklama, bir araçsız ölçüm.

Esneklik, hızı öğrencinin sahiplenmesi demektir. Biçim öz düzenlemeyi varsayar ve 75 öğrencili dönem çalışması teslim tarihleri kümelendikçe üst bilişsel bilginin ve iyi oluşun düştüğünü gösteriyor. Hız, onlar için verdiğiniz bir tasarım kararıdır.

Bir forum katılım demektir, bu yüzden gönderi sayarım. Yukarıdaki ajan gösterimi akranları tarayan ve bir yaşam öyküsü uyduran bir gönderi üretti; bir sayı onu iyi bir gönderiden ayıramaz. Hao ve Cukurova özetleri gezintiyi iyileştirdi ve görüntüleme etkinliği yine de düşmeye devam etti.

Bir asistan eklemek dersi YZ bütünleşik kılar. AIDA amaca yönelik inşa edildi, gömüldü ve altı çalışma boyunca yinelendi; aynı kurumdaki dışsal bir sohbet robotu ters yönde gitti ve KhanMigo'nun öğrenenleri basitçe etkileşime girmedi.

Süreç kanıtı her şeyi belgelemek demektir. Her istemi ve her tuş vuruşunu toplamak evrak üretir, başka pek bir şey değil. Notlandırmaya değer sürüm birkaç karar noktası ister: hangi kanıt seçildi, hangi alternatif reddedildi, eleştiriden sonra ne değişti.

## Size geri dönecek olanlar

**"Bunlar eş zamansız bir ders seçmiş yetişkinler. YZ'ye yazdırıyorlarsa bu onların kararıdır."** Seçim argümanı, ders hiçbir şeyi belgelemeseydi geçerli olurdu. Belgeliyor. ALEKS kanıtı, gözetimli bir kontrolden sağ çıkmayan bir yeterlilik görüntüsü üreten bir kısayol gösteriyor ve maliyet sonradan, bir sonraki derste, lisans sınavında ya da işte ortaya çıkıyor. Bir hakkaniyet boyutu var: bilişsel yükü boşaltmaya en yatkın öğrenenler çoğu zaman en az zamanı olanlardır, yani eş zamansız bir dersin hizmet etmek için var olduğu grup.

**"Yanıt tespit."** Tespit tartışmalıdır ve gözetim sonucu tasarımın denetimden üstün olduğunu gösteriyor: koşullar değiştiğinde zarar kayboldu. Tespitin ayrıca yanlış pozitif maliyetleri vardır ve öğretimi bir silahlanma yarışına çevirir. Görevi yeniden tasarlayın ve bir araçsız ölçüm tutun. Bkz. [[reduce-ai-cheating]] ve [[redesign-assessment-ai-era]].

**"Öğretim varlığı uzaktan imkânsızdır, dolayısıyla eş zamansız doğası gereği daha kötüdür."** Eş zamansız bir derste varlık tasarlanır. Yukarıdaki CoI yeniden çerçevelemesi, göstergelerinin üretken YZ çağında sosyoteknik kazanımlar olduğunu söylüyor ve AIDA denemesi hiç eşzamanlı toplantısı olmayan bir derste görev süresini iki katına çıkardı.

**"Gözetim bir gözetlemedir ve bunu dayatmayacağım."** Savunulabilir bir konumdur ve seçenekleri açık bırakır. Süreci açan ürünler, eş zamansız sözlü değerlendirme ve YZ Vivası, kimsenin odasını izlemeden akıl yürütmeyi yakalar. Gözetimli bir koşul kullanacaksanız izlenceye koyun, gerekçesini açıklayın ve yeterlilik belgeleyen değerlendirmelerle sınırlayın.

**"O zaman her şeyi eşzamanlı ve gözetimli yapalım."** Birçok öğrenci eş zamansız çalışmayı istihdam, bakım sorumlulukları, engellilik ya da coğrafya nedeniyle seçiyor. Tespitin kendi hakkaniyet maliyetleri de var: ana dili farklı yazarları işaretleyen araçlar, dürüst işi cezalandıran yanlış pozitifleri orantısız biçimde üretir ([[ai-detection]]). Orantılı alternatif, aksi halde esnek olan bir dersin içinde az sayıda doğrulama anıdır: kısa bir kayıtlı açıklama, kişiselleştirilmiş bir uygulama, öğretim elemanının seçtiği bir soruya yanıt, notlanmış bir karar izi, düşük riskli bireysel kontrol. Doğrulama, kanıtınızın geçerliliğini yükseltmeli ve biçimi sunmaya değer kılan esnekliği korumalıdır.

## Kanıtın çözüme bağlamadığı şeyler

[[ai-distance-education-systematic-review-2026|Uzaktan eğitimde YZ'nin sistematik derlemesi]] (56 makale, 2020-2025) kişiselleştirme (24 çalışma), değerlendirme ve geri bildirim (19), insan-YZ etkileşimi (17) ile yönetişim ve hakkaniyeti kapsıyor ve temelin kısa vadeli ve kesitsel olduğu, çok az boylamsal çalışma bulunduğu sonucuna varıyor. [[ai-student-engagement-online-learning-review-2025|Çevrimiçi öğrenmede YZ ve öğrenci katılımı derlemesi]] (24 çalışma) tek bir veritabanıyla sınırlı, yalnızca katılımı ele alıyor ve eşzamanlı bağlamları eş zamansız olanlarla karıştırıyor; bu yüzden sonuçları eş zamansıza özgü değil. Eş zamansız sözlü değerlendirme iki derste iki çalışmaya dayanıyor. MAIC bir pilot. Kolaylaştırma zamanlaması veri kümeleri, eğitilmiş sınıflandırıcılarla bile performansı sınırlıyor. Buradaki hiçbir çalışma bir eş zamansız kohortu, yeniden tasarlanan değerlendirmenin kalıcı öğrenme mi yoksa yalnızca onun daha iyi kanıtı mı ürettiğini gösterecek kadar uzun izlemiyor. Hepsi bir sonraki dersinizi değiştirmeye yetecek kadar güçlü ve bir politika iddiasını gerekçelendirmeye yetmeyecek kadar ince.

## Bu hafta ne yapmalı

**1.** En yüksek riskli değerlendirmenizi seçin ve öğrencinin araçsız tamamladığı bir koşul ekleyin. Neden var olduğunu onlara söyleyin.

**2.** YZ'nin artık uçtan uca tamamladığı ödevi alın ve süreç ürün olacak biçimde yeniden yazın: bir karar günlüğü, aşamalı bir taslak, bir öz açıklama, iki denemenin karşılaştırması.

**3.** Büyük bir değerlendirmeyi gömülü rubriklerle eş zamansız sözlü savunmaya dönüştürün ve görev başına YZ iznini öğrencilerin gerçekten okuyacağı yerde, izlencede belirleyin.

**4.** Büyük teslim tarihlerini aralayın ve etkileşim verisi sessizleşen öğrencilerle iletişim kurmak için teslim öncesi 7-8 günlük bir pencere ayırın.

**5.** En zayıf ödeviniz üzerinde üç soru çalıştırın. Bir YZ sistemi bu etkinliği öğrenci materyali anlamadan tamamlayabilir mi? Buradaki öğrenmeyi hangi bilişsel etkinliğin üretmesi gerekiyor? Öğrencinin o etkinliği gerçekten yaptığını hangi kanıt gösterecek? İlk yanıt evetse ve diğer ikisi yanıtlanması zorsa, problem öğrenme tasarımındadır ve politikanın hiçbir ifadesi bunu düzeltmez.

**Bundan sonra nereye:** ders düzeyindeki kurallar [[course-ai-policy]] sayfasına; değerlendirmenin yeniden inşası [[redesign-assessment-ai-era]] sayfasına; altındaki güven problemi [[reducing-over-reliance]] sayfasına; öğretim elemanı iş yükleri ve YZ'nin gerçekçi olarak neyi ortadan kaldırdığı [[ai-save-instructor-time]] sayfasına; YZ'yi bir öğrenme deneyimine gömmeye tasarım düzeyinden bakış [[designing-ai-into-learning]] sayfasına aittir.
