---
connected_resources: [process-feedback]
title: YZ Tespiti
created: "2026-10-14T21:35:00-04:00"
type: concept
foundations: [academic-integrity, ai-literacy, cognitive-offloading]
technology: [generative-ai, llm]
assessment: [ai-detection, assessment, assessment-validity, process-oriented-assessment]
ethics: [equity-in-ai-education]
audience: [learners]
level: [higher ed]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education, should-we-use-ai-detectors, reduce-ai-cheating, ai-guidance-children-under-13]
institutions: [educational-policy-ai]
translation_of: concepts/ai-detection
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **YZ tespiti** — akademik çalışmalarda YZ tarafından üretilmiş içerikleri tanımlamak için kullanılan [[ai-technologies|technologies]] ve yöntemler ile öğrencilerin büyük dil modellerini (LLM) kendi çalışmaları olmayan işler üretmek için kullanma riskine kurumların nasıl yanıt vermesi gerektiğine dair daha geniş soru. Sınıflandırıcı tabanlı yaklaşımlardan gizli istek metni ve olabilirlik tekniklerine, filigrana ve üslup analizine kadar uzanır — ve giderek artan biçimde, tespitin sınırları ve tespiti denetlemek yerine değerlendirmeyi yeniden tasarlamanın değeri tartışmalarına.

## Düşünülmesi Gerekenler

- Bir YZ dedektörü bir öğrencinin denemesini YZ tarafından üretilmiş olarak işaretlerse, işaretin doğru olduğundan ne kadar emin olurdunuz — ve ona göre hareket etmeden önce hangi kanıtı görmek isterdiniz?
- Bir argümana göre YZ tespiti yalnızca güvenilir değil, kavramsal olarak da sağlam değildir: ikili bir “insan / YZ” ayrımı, öğrenci çalışmalarının genellikle YZ *tarafından* değil YZ *ile* üretildiği gerçeğini göz ardı eder. Çalışma melezse, “YZ tespit etmek” ne anlama gelir?
- Tespit araçları, öğrencileri haksız yere cezalandıran yanlış pozitifler üreterek ana dili İngilizce olmayan yazarlara karşı önyargılı olabilir. [[legal-issues-and-risks|false accusation]] riskini gerçek yanlış kullanımı yakalamanın değerine karşı nasıl tartarsınız?
- Tespit, bütünlüğü korumak yerine güveni aşındıran bir şüphe iklimi yaratarak bütünlüğü baltalayabilir. İzlenmek, sizin ya da bir öğrencinin bir değerlendirmede davranışlarını nasıl değiştirir?
- Araştırmalar, tespitin sınırlı ve duruma özgü bir araç olması gerektiğini, ilk başvurulan bir strateji değil, ve değerlendirme tasarımının YZ’nin rolünü tanıması gerektiğini öne sürüyor. Öğrencinin gerçekten ne öğrendiğini doğrulamaya yardımcı olabilecek tespit alternatifleri neler olabilir?
- YZ dedektörleri gerçek gönderilerde bağımsız olarak doğrulanamaz — işaretlenen bir metnin gerçekten YZ tarafından üretilip üretilmediğine dair bir gerçek referans yoktur. Bir bütünlük soruşturmasında doğrulanamayan bir olasılığa göre hareket etmekten ne kadar rahatsızsınız?

## Giriş

YZ tespiti, [[academic-integrity]], [[generative-ai]], [[llm|large language models]] ve [[assessment]] kesişiminde yer alır. Kurumların öğrencilerin denemeler, kodlar ve kısa cevaplar yazmak için LLM’leri kullandığını fark etmesiyle ortaya çıkmıştır. Alanın iki iç içe geçmiş ısı vardır: **teknik tespit** (YZ tarafından üretilen içerik ne kadar güvenilir biçimde tanımlanabilir?) ve **kurumsal yanıt** (sınırları ve adalet kaygıları göz önüne alındığında tespit neye yol açmalıdır?).

## Tespit yaklaşımları

Bilgi tabanının araştırması başlıca teknik aileleri gösterir:

- **Sıfır örnekleme olabilirlik / gizli istek metni yöntemleri:** [[detecting-llm-generated-text-latent-prompt|EchoPrompt]], makine tarafından üretilen metne özgü gizli istek metni bağımlılığından yararlanan, eğitim gerektirmeyen bir sıfır örnekleme dedektörüdür. Genel bir yardımcı yanıt ön ekini geri yükleyerek ve talimatla ince ayarlanmış ile temel modeller arasındaki olabilirlik kazanımı farklarını ölçerek, eğitim olmadan en son teknoloji düzeyinde tespit başarır; alan kayması ve parafraz saldırılarına karşı dayanıklı kalır. Bu, üretim mekanizmasını görmezden gelen tamamen olasılık tabanlı istatistiksel dedektörlerle tezat oluşturur.
- **LLM öz tespiti:** [[llm-detecting-llm-generated-content-education|Leinonen & Denny (2026)]], LLM’lerin programlama, yansıtıcı yazım ve kısa cevap görevlerinde kendi ürettikleri içeriği güvenilir biçimde tespit edip edemeyeceğini sınar. Tespit **son derece göreve bağımlıdır**: programlama ve uzun yansıtıcı yanıtlar için güvenilir, ancak kısa cevaplar için zayıftır; burada LLM’ler kendi çıktılarını özgün öğrenci çalışmasından daha *insansı* bulurlar. Küçük istek metni çeşitlemeleri doğruluğu keskin biçimde düşürür.
- **Sınıflandırıcı tabanlı ve filigran yaklaşımları:** istatistiksel sınıflandırıcılar ve filigranlar ticari araçlarda yaygın olarak kullanılır; ancak LLM çıktıları daha gelişmiş hale geldikçe güvenilirlikleri tartışmalıdır.
- **Düzyazı kökeni değil, fikir kökeni:** [[idealens-detecting-ai-ideas-2026|IdeaLens]], bir sınıflandırıya düzyazı yerine söylem rolleri ve parafrazlanmış içerikten oluşan bir taslak sunar; böylece sınıflandırıcı, bir belgenin kimin fikirlerini taşıdığını öngörür. YZ tarafından yazılmış metnin arkasındaki insan planı ayrıntılılaştıkça YZ işaretleme oranı %94,9’dan %6,8’e düşmüş, Pangram 4 yaklaşık %92’de kalmış ve YZ ile rötuşlanmış insan belgelerinin %94,7’sini insan yapımı olarak etiketlemiştir. Yazarlar, öngörülerinin istatistiksel tahminler olduğunu ve YZ kullanımının kesin kanıtı olarak tek başına kullanılmaması gerektiğini belirtir.

## Tespitin sınırları ve riskleri

Araştırmalar tutarlı biçimde tespitin tek başına güvenilmemesine karşı uyarır:

- **Geçerlilik ve adalet açıkları:** tespit araçları ana dili İngilizce olmayan yazarlara karşı önyargılı olabilir, öğrencileri haksız yere cezalandıran yanlış pozitifler üretebilir; bu kaygı [[bias-mitigation]] ve [[equity-in-ai-education]] ile bağlantılıdır.
- **Dikkate değer hata oranları ve güven erozyonu:** güvenilmez tespit, öğrenci [[trust]] ve değerlendirme sürecinin bütünlüğünü baltalar.
- **Göreve bağımlılık:** öz tespit çalışmasının da gösterdiği gibi doğruluk görev türüne göre keskin biçimde değişir; dolayısıyla hiçbir tek dedektör tüm değerlendirmelerde güvenilir değildir.
- **Doğrulanmış bir dedektör bile tarihsel bir tabana dayanır:** Altı yıllık bir CS2 çalışması, dedektörünü LLM öncesi bir tabana karşı doğrulamıştır: LLM’ler halka açılmadan önce H puanları sıfıra yakındı ve 2026’ya kadar ortalaması 11,9’a yükseldi ([[argus-academic-integrity-genai-2026|Racovan et al. (2026)]]).
- **Nicelendirilmiş bütünlük çıkmazı.** [[karr-ai-detection-humanization-2026|A controlled study of 642 published abstracts (Karr et al. 2026)]], [[educational-policy-ai|policy]] açığının yalnızca kavramsal değil, ölçülmüş olduğunu gösterir: kılavuza uygun hafif YZ rötuşu %38–80 oranında işaretlenir, değiştirilmemiş güncel özgün metinler %9–15 (STEM dışı STEM’den çok daha yüksek), insansılaştırıcı destekli YZ metni ise vakaların %96’sından fazlasında tespitten kaçar. Dedektörler yüzey üslubuna (uzun belirteç ve akademik kelime yoğunluğu) bağlı kaldığından, yazarlık niyetine değil, dürüst YZ yardımı yaptırıma uğrarken kasıtlı insansılaştırma kaçışı paçayı kurtarır — yazarlar dedektör puanlarının tek başına asla ispat unsuru olmaması gerektiğini savunur.

En yeni ampirik değerlendirmeler, bu hata oranını soyut olmaktan çıkarıp somutlaştırır. [[hadra-ai-detector-accuracy-efl-2026|Hadra, Cambridge and Mesbah (2026)]], gerçek EFL ders çalışması, profesyonel yazım, YZ çıktısı ve 50/50 melezlerinden oluşan dengeli 192 metinlik bir korpus üzerinde Turnitin ve Originality’yi çalıştırmıştır: makro doğruluk yalnızca 0,69 ve 0,61’e ulaşmış, her ikisi de 0,55’lik makro F1’in altında kalmış ve melez metinlerde fiilen işe yaramaz olmuştur (Originality’nin duyarlılığı 0,02); metinler uzadıkça ve bilimsel yazımda doğruluk belirgin biçimde düşmüş, yasal EFL öğrenci çalışmasının yanlış sınıflandırılmasına yönelik sınırda anlamlı bir eğilim daha görülmüştür. [[van-vlasselaer-ai-detector-reliability-2026|Van Vlasselaer, Van Droogenbroeck and Spruyt (2026)]], dört ticari aracı 160 yüksek lisans tezinin gerçek referansla kontrollü bir korpusuna karşı sınamıştır: bunlardan üçü (Turnitin, GPTZero, Copyleaks) tamamen YZ tarafından üretilmiş tezlerde neredeyse tamamen başarısız olurken, yalnızca Pangram ikna edici performans göstermiştir — ve 1.163 gerçekten sunulmuş teze uygulandığında bunların %45,5’ini işaretlemiştir; yazarların ısrarla belirttiği gibi bu bir yaygınlık oranı değildir, çünkü canlı gönderilerde gerçek referans yoktur. Her iki çalışma da aynı prosedürel sonuca varır: bir dedektör puanı daha yakından incelemeye yol açabilir, ama bir bulgu değildir. Kalibrasyon sorusu ters yönde de geçerlidir: GPTZero’nun yüksek güvenli etiketi 2020–2022 arasında başvuru sahibi düzeyinde %0,7, %0,5 ve %1,4’lük yanlış pozitif oranları taşıdığından, [[ai-written-admissions-essays-penalized-2026|Isley, Gaebler and Goel (2026)]] işaretlerini bir ABD kamu politikası yüksek lisans programında altı kabul döngisi boyunca muhafazakâr bir yaygınlık serisi olarak okumuştur — en az bir işaretlenmiş deneme sunan başvuru sahiplerinin payı, imzalı bir yasağa karşın 2023’te %21,8’den 2024’te %45,1’e ve 2025’te %56,1’e yükselmiş; uluslararası başvuru sahiplerinde %69,3’e karşılık yerli başvuru sahiplerinde %38,6’ya ulaşmıştır. İnsan okuyucular yine daha zayıf bir araç olmuştur: 50 insan ile 50 YZ denemesini ayırt eden beş kabul görevlisi AUC 0,70’e (95% CI [0,65, 0,75]) ulaşmıştır; şansın üzerinde ama ticari dedektörlerin oldukça altındadır.

İnsan parçalarının ChatGPT’den önce geldiğinin kanıtlandığı bir Kazakça korpus üzerinde, İngilizceyle eğitilmiş beş dedektör insan parçalarının %81,4’üne ve yayımlanmış öğrenci makalelerinin %79,6’sını işaretlemiş; %1 yanlış pozitif oranına yeniden kalibre edildiğinde ise makine metninin en fazla %1,3’ini yakalayabilmiştir ([[kazakh-ai-text-detectors-2026|Ozaman (2026)]]).

İyi performans gösteren yorumlanabilir bir dedektör bile hatalarını belge düzeyinde tutar. [[detecting-gpt-assisted-writing-stylometric-2026|Kumar, Siddiqui and Fuchsberger (2026)]], dokuz yorumlanabilir stilometrik özellik — tür-belirteç oranı, hapax oranı, kelime entropisi, durdurma sözcüğü dışı oranı, sözcük türü oranları ve cümle uzunluğu değişkenliği — üzerinde pencere düzeyinde sınıflandırıcılar eğitmiş; 90 katılımcı aynı istek metinlerini önce bağımsız olarak, sonra GPT çıktısını parafrazlayarak yazmış ve bir katılımcıdan gelen her pencere tek bir kıvrımda tutulmuş, test 18 görülmemiş yazara karşı yapılmıştır. Random Forest, 36 ayrılmış belgede ROC-AUC 0,870 ve F1 0,842 elde etmiş olmasına rağmen, bağımsız olarak yazılmış 18 belgenin 4’ünü GPT destekli olarak işaretlemiştir; bu %22,2’lik bir yanlış pozitif oranıdır (95% CI 9,0–45,2); [[explainable-ai|SHAP]] atıfı en yüksek ağırlığı hapax oranına vermiştir. Yazarlar modeli, otomatik bir suç tarama ekranı değil, bağlamsal incelemeyi tetiklemesi gereken bir karar desteği olarak çerçeveler ve ulaştığı doğruluk, hatalarının ağırlığını azaltmaz — her yanlış pozitif, GPT yardımıyla suçlanan bağımsız olarak yazılmış bir belgedir; bu bir ayarlama sorunu değil, bir geçerlilik sorunudur.

Tanımsal ve prosedürel sorunlar, istatistiksel olanların yanında yer alır. [[wright-transcription-not-generation-2026|Wright (2026)]], “YZ kullanımı”na ilişkin kapsayıcı yasakların işlevden çok platform kimliğine göre tasarlandığını, dolayısıyla yasaklamayı amaçladıkları üretken taslak yazımının yanında üretken olmayan biçim dönüşümlerini — konuşmadan metne transkripsiyon, OCR, düz metinden LATEX’e — de yakaladığını savunur; dedektörler düşük şaşkınlıklı yazımı makine yazarlığı olarak okuduğundan, ortaya çıkan yanlış pozitifler en çok engelli ve [[equity-in-ai-education|equity]] riskine maruz kalmış öğrencilerin üzerine düşer. [[sharma-judgment-visible-genai-assessment-2026|Sharma (2026)]] aynı sonucun tasarım yanlı versiyonuna ulaşır ve tespiti en fazla bütünlük altyapısının tamamlayıcı bir katmanı olarak konumlandırır, zira bu, kararların nasıl alındığını değil, YZ’nin kullanılıp kullanılmadığını sorar.

Tespit araştırması ayrıca, doğruluk sorularından daha uzun ömürlü bir geçerlilik argümanı taşır. [[weidlich-inference-at-risk-assessment-validity-2026|Weidlich (2026)]], dedektör çıktısını koşullu ve olasılıksal bir sinyal olarak ele alır; bu sinyal daha ileri bir soruşturmayı tetikleyebilir, ancak tek başına suç veya yeterlilik tesis edemez; bu durum, tespit merkezli yönetişimi [[assessment-validity|assessment validity]] korumak için yetersiz bir temel haline getirir. Sınıflandırma performansı, araçlar, görev türleri, disiplinler, model sürümleri ve insan–YZ rötuş uygulamaları arasında sistematik biçimde değişir; kalıplaşmış STEM yazımı algoritmik önyargıya özellikle açıktır. Tespit yoluyla değerlendirme güvenliğini geri kazanma girişimleri, oluş yabancı varyansın ortaya çıkması riski taşır; bu da adaleti ve puanların yorumlanmasını tehdit eder.

## YZ dedektörlerini neden kullanmamalı (ya da kullanmaya çalışmamalı)

[[bassett-ai-detectors-education-2026|Bassett et al. (2026)]], üretken YZ tespitinin eğitimde **hiç kullanılmaması** gerektiğini, “dikkatli ol” ikna düzeyinin ötesine geçerek “bu kavramsal olarak sağlam değil” düzeyine çıkarak savunur. Argümanları, YZ dedektörlerine güvenmeye karşı sebepleri bir araya getirir:

1. **Doğrulanamayan olasılıksal tahminler.** YZ dedektörleri, dil belirteçlerine (şaşkınlık, patlamalılık) dayanarak bir metnin YZ tarafından üretilmiş olma olasılığını çıktılar. Diğer olasılıksal araçların (spam süzgeçleri, tıbbi tanılar) aksine, sonuçları **bağımsız olarak doğrulanamaz**: gerçek dünya koşullarında, işaretlenen bir metnin gerçekten YZ tarafından üretilip üretilmediğine dair bir gerçek referans yoktur; dolayısıyla doğrulama döngüsel akıl yürütmeye indirgenir. Sinyal tespit ölçümleri (yanlış pozitif/negatif oranları) yalnızca kontrollü testlerde geçerlidir, gerçek gönderilerde değil.
2. **Şüpheli eğitim ve test verileri.** Dedektörler, üretken YZ öncesi insan yazımı üzerinde eğitilir ve doğrulanır (örneğin Turnitin, 700.000 adet 2019 öncesi makale üzerinde test edilmiştir). Bu tür metinlerin, öğrencilerin artık YZ tarafından şekillendirilerek ürettiği çağdaş öğrenci yazımını yansıttığı varsayımı doğrulanmamıştır ve performans modele, istek metnine ve platforma göre değişir.
3. **Karşılıklı dışlayan dil belirteçleri kusurlu bir varsayımdır.** Bir insanın, YZ’ye atfedilen dil özellikleriyle (ya da bir YZ’nin insana atfedilenlerle) yazamayacağına dair ilkelli bir neden yoktur; dolayısıyla belirteç temelinin kendisi zayıftır.
4. **Yanlış ikicilik.** Metni insan veya YZ yapımı olarak sınıflandırmak, öğrenci çalışmalarının sıklıkla YZ *ile* değil YZ *tarafından* üretildiği — melez bir süreklilik — gerçeğini göz ardı eder. İkili ayrım yalnızca yetersiz değil, anlamsızdır; bu da tespiti baştan kavramsal olarak kusurlu kılar.
5. **Prosedürel adaletsizlik ve kanıt yetersizliği.** Akademik bütünlük soruşturmaları olasılıklar dengesi standardını karşılamalıdır; YZ dedektör puanları — tek başına veya dil belirteçleri, üslup karşılaştırmaları, LLM beyanları ya da öğrencinin susmasıyla birleştirildiğinde — bu standarda ulaşmaz. Soruşturmaya tabi öğrenciler ayrıca susma hakkına sahiptir; tespit odaklı süreçler bu hakkı aşındırır.
6. **Güvenlik ve gizlilik riskleri.** Dedektörler öğrenci çalışmalarını sunucularda (bazen [[privacy]] korumaları daha zayıf olan yurt dışında) saklar; bu, veri ihlali, kötüye kullanım ve ticari istismar riskleri doğurur.
7. **Tespit bütünlüğü baltalamakta, korumamaktadır.** Dedektörlere ve gözetime duyulan güven, şüphe iklimi yaratarak öğrenci [[trust]] ve değerlendirmenin kendi bütünlüğünü aşındırır.

Bassett ve ark., YZ tespitinin gözetim ve ceza yoluyla çözülemeyecek bir soruna yönelik işlevsiz bir çözüm olduğu sonucuna varır: odak, [[assessment|assessment design]] — YZ’nin öğrenmedeki rolünü ve denetimsiz değerlendirmelerin güvenliğinin sağlanamayacağı gerçeğini tanıyan bir tasarıma — kaymalıdır. Bu, bilgi tabanının [[beyond-detection-authentic-assessment-ai-2025|beyond-detection]] duruşmasını, tespit araçlarını emekliye ayırmaya yönelik doğrudan ve kanıta dayalı bir argümanla birleştirir.

16 türü kapsayan 40 psikoloji değerlendirmesinden 36’sı (%90), geçme notuna yetecek kadar yeterli görülen ChatGPT çıktısı üretmiştir; dört başarısızlık, fiziksel hazır bulunmayı, görsel bir yapıtı veya öğrencinin kendi veri kümesini gerektiren görevlerdi — bu, YZ işinin başarı sayılıp sayılmayacağına tespit değil, geçme sınırının karar verdiğini gösterir ([[ivory-psychology-assessment-integrity-2026|Ivory et al. (2026)]]).

### Dedektör önyargısı ve silahlanma yarışının mekanizması

Tespit yalnızca kusurlu değil; hataları kalıplıdır. [[teichmann-detecting-undetectable-misconduct-2026|Teichmann (2026)]], bir dedektör puanını kanıt olarak görmeye karşı birikmiş davayı bir araya getirir: en kapsamlı erken [[benchmark]] hiçbir araç %80 doğruluğa ulaşmamıştır; basit parafraz ya da “insansılaştırma” bunu kabaca yarıya indirir; gerçekçi temel oranlarda yanlış pozitifler doğruları aşar; ana dili İngilizce olmayan konuşmacılar sistematik biçimde yanlış sınıflandırılır, çünkü dedektörlerin sinyal olarak gördüğü özellikler yetkin ikinci dil yazımını da tanımlar. İnsan yargısı boşluğu doldurmaz — uzman ve acemi değerlendiricilerin tümü YZ’yi öğrenci düzyazısından ayırt edemez ve hatalı olduklarında emindir; hata asimetrisi, dikkatsiz ama dürüst olanların yakalanıp kasıtlı aldatıcıların kaçması anlamına gelir; dedektörler ayrıca opaktır (eşik yok, eğitim verisi yok, bağımsıztan çoğaltma yok) ve dolayısıyla bir duruşmada yanıtlanamaz veya çapraz sorgulanamaz.

İki ek nokta pratikteki riskleri keskinleştirir. Birincisi, temel istatistiksel sinyal, modeller insan düzyazısına doğru optimize edildikçe küçülür; dolayısıyla silahlanma yarışı bir kurumun kazanamayacağı türdendir. İkincisi, ampirik sınır durumu çarpıcıdır: gizli bir alan çalışmasında, beş psikoloji modülü üzerinde canlı bir çevrimiçi [[summative-assessment|examination]] sisteminden fark edilmeden geçen tamamen YZ tarafından üretilmiş gönderilerin oranı %94’tü ve YZ işi ortalama olarak gerçek öğrencilerden daha yüksek puan aldı. [[mohamed-temimi-assessment-imperfect-information-disclosure-2026|Mohamed and Temimi (2026)]], gözetlemenin hiç ne zaman işe yaradığını belirleyen sezgi aykırı sonucu ekler: duyarlılık, doğru pozitiflerin yanında yanlış pozitifleri de artırdığından, rasyonel caydırıcı ayrımcılıktır — gizli kullanımı işaretlemek ile yasal işi işaretlemek arasındaki uçurum. Fazladan duyarlılığın yeni doğru pozitiflerden çok yeni yanlış pozitifler ürettiği yerde, daha fazla gözetim gizlemeyi görece daha çekici kılar ve dürüst öğrencileri gizli kullanıcıları belirlemekten daha hızlı cezalandırır. Tasarım sonucu şudur: dedektörler, kurallar ve açıklama prosedürleri ayrı ayrı inşa edilmemelidir.

- **Beş araç, tek bir metin, birbiriyle uyuşmayan yanıtlar — ve onları kullanmayı bırakmış kurumlar.** [[angelier-ai-detection-pitfalls-inclusive-assessment-2026|Angelier (2026)]], tek bir insan yazımı metni aynı gün beş ticari dedektöre sunmuş ve “%0 insan” (Winston AI) ile “İnsan Tarafından Üretilmiş” (GPTZero’nun %42 YZ oranının yanında basılan kategorik etiketi) arasında uzanan sınıflandırmalar almıştır; Copyleaks %80,4 YZ, Originality.ai “%81 Muhtemelen YZ” ve beşinci araç %34 YZ / %66 insan — özdeş metinde üç çıktı YZ’ye, ikisi insana yatıyor; tescilli sistemler arasında çoğunluk oyunin kaynağı kanıtı olarak görülmesi için geçerli bir dayanak yoktur. Aynı makale kurumsal geri çekilmeyi belgeler: Vanderbilt, yaklaşık 75.000 makale üzerindeki %1’lik yanlış pozitif oranının aritmetiğini hesaplayarak Turnitin’in YZ dedektörünü Ağustos 2023’te devre dışı bırakmıştır; Curtin Üniversitesi 2025’te benzer bir devre dışı bırakma duyurmuştur; Waterloo Üniversitesi, insan yazımı çalışmaların %100 YZ tarafından üretilmiş olarak sınıflandırıldığı bir iç denetimin ardından Eylül 2025’te Turnitin’in YZ tespit işlevini kaldırmıştır; Cape Town Üniversitesi Ekim 2025’ten itibaren YZ puanını devre dışı bırakmıştır; Free State Üniversitesi Temmuz 2026’da izlemiştir; Witwatersrand Üniversitesi bu tür araçları hiç benimsemediğini bildirmiştir; ve New York’ta bir mahkeme, dedektör puanına dayanan bir suç bulgusunu hükümsüz kılmıştır. İki prosedürel bulgu durumu tamamlar: ağır biçimde bozulmuş bir PDF çıkarımı, temiz metin sonucuna beş yüzde puan yakın bir sınıflandırma döndürmüştür; ve arşivlenmiş bir dedektör çıktısı, bir arayüzün ne bildirdiğini tesis eder, ancak onu üreten tescilli model durumunu yeniden yaratamaz.
- **Dedektör çıktısı dosyadaki en zayıf kanıttır ve kanıt kalitesi davaları çözmez.** 1.162 üretken YZ suçlamasını kodlayan çalışmada, dedektör çıktısı en düşük ispat değeri notlarını almış ve 2025’e kadar madde sayısının %0,5’ine düşmüştür. Kanıt kalitesi, sonuçlarla hiçbir ilişki göstermemiştir, çünkü süreç hiçbir kanıt eşiği belirlememiştir ([[munoz-misconduct-allegation-evidence-2026|Munoz et al., 2026]]).
- **Öğrenciler, cevaplarını değil çalışmalarını tespitten kurtarmak için değiştirir.** Rapor, öğrencilerin yanlış bir suçlamadan kaçınmak için kendi cevaplarını körelttiğini ve pazarlanan dedektörler güvenilmez olduğunda öğretmenlerin — raporun AI-DAR dediği — gayri resmi yargıya geri döndüğünü belgeler ([[tench-ai-policy-isnt-a-playbook-2026|Tench, Weinstein & James, 2026]]).

## Tespitin ötesinde: değerlendirmeyi yeniden tasarlamak

Bilgi tabanındaki kilit tema, tespitin **sınırlı, duruma özgü bir araç — ilk başvurulan bir strateji değil — olması gerektiğidir**. [[beyond-detection-authentic-assessment-ai-2025|Kickbusch et al. (2025)]], gözetim ve tespitin **sorunu yanlış teşhis ettiğini** savunur: YZ aracılı bir dünyada özgünlük polis gücüyle var edilemez; yeniden tasarlanması gerekir. Özgünlüğü, YZ’nin beklendiği, beyan edildiği ve sorgulandığı yerde inşa edilmiş bir kavram olarak yeniden kavramsallaştırırlar ve YZ’yi bir hile uygulaması değil, bir işbirlikçi olarak konumlandıran, disiplinden bağımsız öğrenme için tasarım kalıpları sunarlar. Bu, tespiti [[authentic-assessment]], [[assessment-validity]], [[responsible-assessment-ai-era-stanford-2026|responsible assessment]] ve [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene|coauthorship integrity]] ile bağlantılar.

Yapıcı soru, “öğrencilerin YZ kullanmasını nasıl önleriz?” sorusundan “onları YZ’yi gelecekteki işlerini yansıtan bağlamlarda düşünceli, sorumlu ve etkin biçimde kullanmaya nasıl teşvik ederiz?” sorusuna kayar. Tespit bu nedenle [[ai-literacy]] (öğrencilere [[reducing-ai-misuse|use AI responsibly]] öğretmek), [[cognitive-offloading|Over-Reliance]] (YZ kullanımının ne zaman öğrenmeyi baltaladığını anlamak) ve gönderileri denetlemek yerine gerçek öğrenmeyi destekleme hedefiyle bağlantılıdır. Ayrıca [[student-rationalization-ai-writing|student rationalization of AI writing]] ve [[socially-fluent-ai-identity-detection]] içindeki kimlik tespiti sorunu gibi öğrenci tarafı olgularla da bağlantı kurar.

- **Tespit edilebilirlik, yalnızca dedektörün değil, ödev tasarımının da bir özelliğidir.** [[student-llm-code-detection-cs1-2026|Ye et al. (2026)]], üretilen kod üzerinde modeller arası %87,79–88,14’lük bir uzlaşma bulmasına rağmen, sıkı biçimde kısıtlı işlevlerde 1.000 dosya başına yalnızca 1–14 farklı soyut sözdizimi ağacı, 2021 öğrenci gönderilerinde ise 151–804 olduğunu tespit etmiştir.

## Eğitimde YZ için çıkarımlar

- **Tespit duruma özgüdür:** kurumlar tespit araçlarını hata oranlarının, adalet sınırlarının ve göreve bağımlılığının farkında olarak, otomatik ve tek başına bir kapı olarak değil, idreli biçimde kullanmalıdır.
- **Denetlemekten çok değerlendirme tasarımı önemlidir:** YZ kullanımının beklendiği ve beyan edildiği [[authentic-assessment|authentic]] ve [[process-oriented-assessment|process-based assessment]] yatırım yapmak, tek başına tespitten daha etkin biçimde bütünlüğü ele alır.
- **Adalet ve eşitlik:** ana dili İngilizce olmayan yazarları cezalandıran veya yanlış pozitif üreten tespit araçları, mevcut eşitsizlikleri büyütme riski taşır.
- **YZ okuryazarlığı tamamlayıcıdır:** öğrencilere uygun [[ai-misuse-learning-harm|harmful AI use]] kıyasla YZ kullanımını anlamalarında yardımcı olmak, gözetime güvenmekten daha verimlidir.

- **Tespit güvenilirliği konusunda uyarı.** YZ ve akademik bütünlük üzerine bir [[meta-analysis-systematic-review|systematic review]], intihal/YZ tespit araçlarının YZ tarafından üretilmiş işler için güvenilir olmadığını ve birden fazla değerlendirme yöntemi ve elle inceleme ile eşleştirilmesi gerektiğini, yani tespitin sınırlı ve duruma özgü bir araç olduğunu pekiştirir.([[ssaho-ai-academic-integrity-review-2025]])
- **Tespitin ötesinde: gözetim yerine diyalog.** Grand Canyon Üniversitesi’nin öğrenme doğrulama çerçevesine dair bir uygulayıcı anlatısı ([[best-response-student-ai-dialog-2026|Mandernach 2026]]), [[student-ai-interaction|student AI use]] en iyi yanıtın tespit değil, diyalog olduğunu savunur. Dedektörler güvenilmez olduğundan (ve ana dili İngilizce olmayan yazarlara karşı önyargılı olduğundan), GCU “öğrenci YZ kullandı mı?” sormayı bırakmış ve yerine öğrencilerden anlayışlarını kısa bir konuşmada göstermelerini istemiştir — bu, tespiti çıkmaz sokak olarak gören ve doğrulamayı iyi öğretme olarak ele alan [[authentic-assessment|assessment redesign]] bir uzantısıdır.
- **Güven aşılmıştır, öğretmenlik bedel ödemiştir.** 20 yükseköğretim profesyoneli üzerinde yapılan bir ankette, 15’i YZ tespit yazılımına ağır kurumsal güven duyduğunu, yalnızca 4’ü buna güven duyduğunu bildirmiş; katılımcılar, öğretim tasarımını ve öğrenci mentorluğunu dışlayan denetimden “pedagojik tükenmişlik” tanımlamıştır ([[evaluation-age-ai-output-evidence-2026|Chowdhury & Khan (2026)]]).
## Bağlı kavramlar

- [[academic-integrity]]
- [[llm]]
- [[generative-ai]]
- [[assessment]]
- [[assessment-validity]]
- [[authentic-assessment]]
- [[ai-literacy]]
- [[cognitive-offloading]]
- [[equity-in-ai-education]]
- [[bias-mitigation]]
- [[higher-ed]]
- [[ai-education]]
- [[legal-issues-and-risks]]

## Bağlı makaleler
- [[tench-ai-policy-isnt-a-playbook-2026]] — A nationally representative survey of US teachers and principals on AI policy coverage, agency, and five classroom plays (Tench, Weinstein & James 2026)
- [[evaluation-age-ai-output-evidence-2026]] — Evaluation in the Age of AI
- [[best-response-student-ai-dialog-2026]]
- [[detecting-llm-generated-text-latent-prompt]] — EchoPrompt: Latent Prompt Restoration Detector
- [[ivory-psychology-assessment-integrity-2026]] — Detection is the wrong lever: the pass boundary decided whether AI work was graded as achievement (Ivory et al. 2026)
- [[llm-detecting-llm-generated-content-education]] — Evaluating LLMs for Detecting LLM-Generated Content
- [[beyond-detection-authentic-assessment-ai-2025]] — Beyond Detection: Authentic Assessment
- [[responsible-assessment-ai-era-stanford-2026]] — Responsible Assessment in the AI Era
- [[coauthorship-integrity-reconceptualizing-assessment-validity-for-the-age-of-gene]] — Coauthorship Integrity and Assessment Validity
- [[student-rationalization-ai-writing]] — Student Rationalization of AI Writing
- [[socially-fluent-ai-identity-detection]] — Socially Fluent AI Identity Detection
- [[ssaho-ai-academic-integrity-review-2025]] — Review of AI-based plagiarism/AI-content detection reliability
- [[bassett-ai-detectors-education-2026]] — Heads we win, tails you lose: AI detectors in education (Bassett et al. 2026)
- [[teichmann-detecting-undetectable-misconduct-2026]] — Why detector output cannot ground a misconduct finding
- [[mohamed-temimi-assessment-imperfect-information-disclosure-2026]] — Discrimination rather than catch rate, and when monitoring backfires
- [[hadra-ai-detector-accuracy-efl-2026]] — Turnitin and Originality on 192 texts: both below a macro F1 of 0.55 and near-useless on hybrid writing
- [[van-vlasselaer-ai-detector-reliability-2026]] — Four detectors against 160 ground-truth papers; only Pangram performed, yet flagged 45.5% of live theses
- [[munoz-misconduct-allegation-evidence-2026]] — Detector output is the weakest-rated evidence type in 1,162 real misconduct case files
- [[wright-transcription-not-generation-2026]] — Blanket "AI use" rules conflate transcription with generation
- [[sharma-judgment-visible-genai-assessment-2026]] — Detection demoted to a supplementary layer behind visible judgment
- [[weidlich-inference-at-risk-assessment-validity-2026]] — Detection as a conditional signal, and why security responses add construct-irrelevant variance (Weidlich 2026)
- [[ai-written-admissions-essays-penalized-2026]] — AI-written admissions essays are widespread but penalized
- [[detecting-gpt-assisted-writing-stylometric-2026]] — Nine interpretable stylometric features: ROC-AUC 0.870 but four of 18 independently authored documents flagged (Kumar et al. 2026)
- [[angelier-ai-detection-pitfalls-inclusive-assessment-2026]] — One human manuscript, five detectors, classifications from "0% human" to "Human Generated", plus the documented institutional retreat from detection (Angelier 2026)
- [[argus-academic-integrity-genai-2026]] — Argus: Academic Integrity in the Era of Generative AI
- [[student-llm-code-detection-cs1-2026]] — LLM code converges on tightly constrained assignments (1-14 AST forms per 1,000 files) but not on free ones - detectability follows task design
- [[kazakh-ai-text-detectors-2026]] — Unchecked or Falsely Accused? Evaluating AI-Generated Text Detectors on Kazakh
