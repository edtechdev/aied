---
title: "Kendi Alanımızda Öğrenmeyi Desteklemede Yapay Zekayı Nasıl Daha İyi Yapabiliriz?"
created: "2026-10-14T10:36:01-04:00"
connected_faqs: [training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works, developing-ai-tutor, designing-educational-ai-software]
weight: 74
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, rag, prompt-engineering, open-source, machine-learning]
assessment: [automated-assessment]
audience: [educational technology developers, software developers, instructional designers]
level: [higher ed, k 12]
discipline: [writing education]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
contributors: [editor]
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-28T11:21:19-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Bilette "modeli ders materyallerimizle ince ayarla eğitin" yazıyor. Bütçe onaylandı, gelecek ay için bir GPU ayrıldı ve bir lisansüstü öğrenciden veri kümesi oluşturması istendi. Görüşmede kimse aynı sorularda düz bir istem metninin ne puan aldığını ya da bir anahtar kelime aramasının ne puan aldığını sormadı.

Önce bu iki soruyu sorun. Bu bilgi tabanında genel bir model ile derse yetkin bir model arasındaki fark çoğunlukla bir dayandırma ve istem metni problemidir ve bu sıralamanın kanıtı alışılmadık biçimde doğrudandır: bir ders asistanı çalışması birinci dereceden kararın model değil erişim olduğunu bulmuş ve dayandırma olmayan genel bir model düz bir TF-IDF temel çizgisinin *altında* puan almıştır.

Eğitim gerçektir ve bazen gereklidir. Denenecek üçüncü ya da dördüncü şeydir ve aşağıdaki iş, çeyreğin hesaplama gücünü harcamadan önce hangi basamağa gerçekten ihtiyacınız olduğunu bulmanız için sıralanmıştır.

## Kısa özet

**1.** Hiçbir şeyi değiştirmeden önce düz bir istem metninin ve önemsiz bir sözcüksel yöntemin ne puan aldığını kaydedin. Sizi dürüst tutan o ikinci sayıdır.

**2.** Kendi materyallerinize dayalı erişimi modelin önüne koyun. Burada maliyete göre bildirilen en büyük tek kazançtır ve geri alınabilir.

**3.** İstem metnini rubriğinize göre mühendisleyin ve iyileşme durana kadar yineleyin. Düzlük, eğitimin bir şey katabileceğinin işaretidir.

**4.** Hedef istikrarlı ve dar olduğunda ağırlıkları [[llm-training-and-fine-tuning|LoRA]] ile uyarlayın: bir biçim, bir rubrik, bir okuma düzeyi, bir alan sözlüğü.

**5.** Problem içerik değil davranış olduğunda eğitim sonrası uygulayın ve ödülü, oynanmasını beklediğiniz bir kıyas ölçütüne göre yazın.

**6.** Eğitim kümesini adım düzeyinde kurun. Yalnızca yanıt içeren veri bir yanlış kanıyı öğretmez.

## Gerçekten geçebileceğiniz bir temel çizgi edinin

Bir şeyi değiştirmeden önce düz bir istem metninin ne döndürdüğünü kaydedin. Sonra önemsiz bir yöntemin ne döndürdüğünü kaydedin.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Ders bilgi tabanı asistanı]] çalışması tek başına bunun için okunmaya değer. Erişimi olmayan yerel bir LLM **%52,3** doğruluğa ulaşmıştır. Onlarca yıllık sözcüksel bir yöntem olan TF-IDF temel çizgisi **%55,4**'e ulaşmıştır. Model klasik yöntemden daha kötüydü.

Bu adımı atlarsanız ince ayarınızın yardımcı olup olmadığını söyleyemezsiniz. Daha kötüsü, bir anahtar kelime aramasının geçtiği bir sistemi yayına alabilir ve bunu ancak bir öğretim asistanı söylediğinde öğrenirsiniz. Bir öğleden sonrada alınmış bir tablodaki iki sayı, bütçenin kalanını korur.

## Modeli kendi materyallerinize dayandırın

Ders materyalleri üzerine hiç ince ayar yapmadan [[rag|erişimle güçlendirilmiş üretim]] eklemek aynı sistemi %52,3'ten **%66,6**'ye çıkarmıştır. Bu kazanç bir dizinden geldi ve bir eğitim koşusunun sahip olmadığı bir özellikle birlikte gelir: belgeleriniz değiştiğinde yeniden dizinlersiniz.

İki sonuç daha aynı yönü gösteriyor. YZ'yi [[writing-education|yazma eğitimi]] için özelleştirme üzerine 23 ampirik çalışmanın PRISMA derlemesi **istem metni mühendisliğini baskın (N = 13), ince ayarın (N = 7) önünde** bulmuştur ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Bir bilgi tabanının güncel kalması gerektiğinde erişim, bir eğitim işini yeniden çalıştırmadan güncel kalan tek koldur.

Erişimin pedagojik bir biçimi de vardır. Bir modeli kendi çözümlü örneklerinize ve rubriklerinize dayandırmak, onun tasarladığınız [[scaffolding|iskele]]nin içinde kalmasını, sizin belirlediğiniz düzeyde yanıtlamasını ve genel tavsiyelere kaymamasını sağlar. Bu kayma hazır özel ders sistemleri hakkındaki en yaygın şikâyettir ve ağırlık probleminden daha sık bir erişim problemidir.

## İstem metnini rubriğinize göre yazın ve düzlüğü kollayın

İstem metni işi, GPU'yu beklerken yaptığınız bir hazırlık değildir. İki sonuç tek başına ne başardığını gösteriyor:

- **Rubrik güdümlü istem metni, yinelemeli olarak birlikte iyileştirildiğinde, öğrenci tasarım işlerinde LLM-insan uyumunu %54,75'ten %81,25'e çıkarmıştır** (Cronbach Alfa 0,393'ten 0,798'e), hiç ince ayar olmadan ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Literatüre dayalı özel bir istem metni, hedef matematik [[misconceptions|yanlış kanılarını]] **0,98** varlık düzeyinde ortaya çıkarmış; geniş bir istem metni ise **0,40** düzeyinde kalmıştır ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Pratik sinyal **düzlüktür**. Madde üretimi çalışmasında yinelemeli istem metni iyileştirmesi iyileşmeyi durdurmuş, ardından GPT-4.1'in *optimize edilmiş istem metni üzerinde* ince ayarı kalan kazancı eklemiştir ([[gpt-item-generation-l2-listening-2026]]). Gerçek bir istem metni işinden sonra gelen düzlük, eğitimin bir şey katabilecek yer bıraktığının kanıtıdır. Düzlüğe ulaşmadan eğitime uzanmak tahmin etmektir ve tahmin bir aya mal olur.

Madde üretimi sonucunun sıralama hakkında ne ima ettiğine dikkat edin. İnce ayar optimize edilmiş istem metni üzerine kurulduğu için ekip sonunda eğittiğinde istem metni işi boşa gitmedi. Ucuz basamak aynı zamanda pahalı olanın şartnamesidir.

## Hedef istikrarlı ve dar olduğunda ağırlıkları uyarlayın

Uyarlama, modelin bir özelliği güvenilir biçimde tutmasını gerektiğinde işe yarar: bir okuma düzeyi, bir çıktı biçimi, modelin sahip olmadığı bir alan. Yinelenen sonuç, **hedeflemenin boyutu yendiğidir**.

- Uzman tasarımı bir çocuk okuma izlencesiyle ince ayar yapılmış üç **8B** model, zorlukla ilgili ölçütlerde sıfır atışlı GPT-4o ve Llama 3.3 70B'yi geride bırakmış, güvenlik sorunları ihmal edilebilir düzeyde kalmıştır. Yazarlar bunu **ölçeğe karşı denetlenebilirlik** olarak çerçeveliyor ([[llm-children-reading-story-generation]]).
- Hint Bilgi Sistemlerine dayandırılmış **24.795 örneklik** bir talimat veri kümesi, beş yargıçlı harici bir panelde **6,39** puan alan bir **7B** ince ayar üretmiş ve güçlü bir genel referans modelin **0,15** yakınına, dağıtım maliyetinin çok küçük bir bölümüyle yerleşmiştir. Aynı temel model ince ayar olmadan **alana özgü boyutlarda sıfıra yakın** puan almıştır ([[iks-instruct-dataset-indian-knowledge]]). Genel olarak yetkin olmakla burada yetkin olmak arasındaki fark, alan uyarlamasının tüm gerekçesidir.
- Yaklaşık **3.900** birleştirilmiş notlanmış örnek üzerinde eğitilmiş tek bir [[llm-training-and-fine-tuning|LoRA]] bağdaştırıcısı, beş küçük açık modeli (4B ile 30B arası) iki bilgisayar bilimi sınavında insan notlandırıcıyla eşit ya da daha iyi düzeye getirmiştir ([[llm-graders-computer-science-exams-2026]]). Tek bağdaştırıcı, tek veri kümesi, birkaç temel model: küçük bir ekibin yürütebileceği dağıtımın biçimi budur.

Başlıktaki *istikrarlı* sözcüğü yükü taşıyor. Biçim, rubrik, okuma düzeyi ve alan sözlüğü istikrarlı hedeflerdir. Yargı yüklü düzyazının böyle bir hedefi yoktur ve uyarlamanın başarısız olduğu yer burasıdır; sonraki iki bölüm bunu gösteriyor.

## Yanıtlar problem olduğunda davranışı değiştirin

Uyarlama bir modele *neyi üreteceğini* öğretir. Eğitim sonrası ona *nasıl davranacağını* öğretir. Özel ders için bu ayrım problemin tamamıdır: genel modeller yardımseverlik konusundaki insan tercihi üzerine eğitim sonrası eğitilir, bu da hemen yanıtlamak demektir; öğretmek ise yanıtı esirgemeyi gerektirir.

Bu derlemdeki en güçlü eğitim sonuçları burada yaşıyor. EduQwen'in ödül modeli **doğrudan yanıtlar yerine yönlendiren yanıtları** açıkça önceliklendirmiş ve üç aşamalı hattı CDPK kıyas ölçütünde **%96,52**'ye ulaşarak Gemini-3 Pro'nun **%90,55**'ini aşmıştır ([[singh-eduqwen-pedagogical-rl-2026]]). SWIM'in yazma simülatörü rubrik temelli istem metninden (en iyi QWK **0,577**) gözetimli ince ayara (**0,474 ± 0,023**) ve oradan pekiştirmeli öğrenmeye (**0,618 ± 0,005**) her özellikte ve her istem metninde ilerlemiştir ([[swim-student-writing-simulation-2026]]).

SWIM sayılarını dikkatli okuyun, çünkü ortadaki adım geriye gitti. Gösterimler üzerinde gözetimli ince ayar, simülatörü başladığı istem metninden daha kötü hâle getirmiş ve yalnızca ödül sinyali kaybı telafi edip temel çizgiyi geçmiştir. Planınız gözetimli ince ayarda duruyorsa plan bir dolambaç olabilir.

## Adım düzeyinde gözetim yapın

Buradaki bir bulguyu kaçırmak kolay, yok saymak pahalıdır: **gözetim kalitesi gözetim miktarını yener**. Talimatla ince ayar yapılmış modeller cebir yanlış kanılarını yalnızca **adım düzeyinde çözüm izleriyle** eğitildiklerinde öğrenmiştir. Yalnızca nihai yanıtlar üzerinde eğitildiklerinde doğruluk **her veri boyutunda %30'un altında** kalmıştır ([[misconception-acquisition-dynamics-llms-2026]]).

Eğitim örnekleriniz soru ve doğru yanıt çiftleriyse yanlış şeyi eğitiyorsunuz ve örnek eklemek bunu onarmaz. İhtiyacınız olan ara iştir: yanlış dönüş, öğrencinin yolunu kaybettiği adım, düzeltme. Bunu toplamak pedagojik bir kısıtı olan bir veri mühendisliği problemidir ve genellikle cevap anahtarlarını kazımak yerine oturumları kaydetmek anlamına gelir.

## Uyarlamanın sessizce başarısız olduğu yerler

Bu, coşkunun atladığı kısımdır.

**Yargı yüklü metin.** WrAFT'ta denemeleri *notlandırma* için başarıyla ince ayar yapan (QWK 0,84) aynı proje, *geri bildirim* için ince ayar yaptığında kesilmiş ve ayrıştırılamaz çıktı üretmiş; Claude 3.7'yi doğrudan istemlemek ise öğretmenlerin en iyi değerlendirdiği geri bildirimi üretmiştir ([[wraft-automated-writing-evaluation-argumentative-2026]]). İnce ayar modele bir puana ulaşmayı öğretti ve modelin öğrendiği tek şey notlandırmaydı.

**Modeller arası transfer.** Ölçek, LoRA uyarlaması altında sonraki performansın güvenilir bir yordayıcısı değildir ve **aynı hiperparametreler mimariler arasında nitelik olarak farklı davranış üretmiştir** ([[aiawe-automated-writing-evaluation]]). Bir modelde işleyen bir tarif, tarif değildir.

**Parametre sayısından çok mimari.** 1.000 başlıklı nükleer mühendislik görüntüsüyle üç açık metinden görüntüye modelini ince ayar yapmak Stable Diffusion XL'i belirgin biçimde iyileştirmiş, SD-v3.5-Medium için sınırlı kazanç sağlamış ve **Flux.1 için hiç ölçülebilir iyileşme üretmemiştir** ([[nuclear-diffusion-text-to-image-learning-2026]]).

**Problem doğrulamaydı.** Eğitilmemiş öncü bir GPT-4, özel ders geri bildirimi yazarken yaklaşık **%35** oranında fazla genel, hatalı ya da yanıtı ele veren ipucu üretmiş ve kendi otomatik kalite denetimleri insan yargısıyla çelişmiştir ([[reddig-maclellan-personalized-feedback-llm-2026]]). Bu bir filtreleme problemidir ve bir LoRA onu çözmez.

Dördünün ortak örüntüsü şu: uyarlama bir modeli belirleyip puanlayabildiğiniz bir hedefe güvenilir biçimde yaklaştırır. Hiç yargı katmaz ve denetimi olmayan bir hat kötü çıktıyı yine yayına verir.

## Uyarlamanın bütçesini dürüstçe yapın

Uyarlama basamağı için eşik çoğu ekibin sandığından düşüktür: **birkaç yüz ile birkaç bin örnek ve tek bir GPU**. LoRA az sayıda eklenen parametre eğitir ve temel ağırlıkları donmuş bırakır; böylece birkaç model tek bir bağdaştırıcıdan sunulabilir.

Rank, en üst düzeye çıkarılacak bir düğme değil bir ödünleşimdir. Milyon bağdaştırıcı parametresi başına kazanç, rank yükseldikçe tekdüze biçimde düşmüş ve ders düzeyinde hizalama bedava bir yükseltme değil bir ölçek ve rank kararı olmuştur ([[lora-finetuned-control-systems-course-qa-2026]]).

Hangi katmanları uyarladığınız da gerçek bir seçimdir. BERT tabanlı bir söylem çözümleyicisinin **yalnızca son dört Transformer katmanını** güncellemek, hem yalnızca en üst katmanı uyarlamayı hem de tam derinlikte ince ayarı geçmiştir ([[bert-discourse-english-teaching-2026]]). Üç yapılandırma, üç farklı sonuç ve en ucuz olan kazandı.

Küçümsemesi kolay maliyet değerlendirmedir ve hesaplama faturasından büyüktür. Bkz. [[checking-whether-educational-ai-works|Bir eğitim YZ'sinin yalnızca iyi puan almakla kalmayıp doğru çalıştığını nasıl biliriz?]]

## Beklentilerinizi kalibre edin

Model ve istem metni seçimi birlikte, LLM'ler ile öğrenci öğrenme kazanımları arasındaki uyumsuzluğun yalnızca yaklaşık **%15**'ini açıklar ve o çalışmada kıyas ölçütü ağırlıklandırma ile oybirliğiyle oylama toplulukları hizalamayı *daha kötü* yapmıştır ([[educational-llm-alignment]]). Ön eğitim verisi bir modelin nasıl davrandığı üzerindeki baskın koldur ve çekemeyeceğiniz tek kol da odur.

Bunların hiçbiri yukarıdaki işe karşı bir argüman değildir. Bir ince ayarın tasarım problemini çözmesini beklemeye karşı bir argümandır. Sorun özel dersinizin fazla hevesli yanıt vermesi ise eğitim bunu ele alabilir. Sorun öğrenenlerinizin onunla etkileşime girmemesi ise eğitim ele almaz ve %15 rakamı paranın başka yerde daha iyi harcanacağını söyler.

## Ekiplerin yanlış yaptığı şeyler

İnce ayar, bir modele dersinizi öğretmenin yoludur. Kendi materyalleriniz üzerine erişim aynı sistemi hiç eğitim olmadan %52,3'ten %66,6'ye çıkardı ve rubriğe göre iyileştirilmiş bir istem metni uyumu %54,75'ten %81,25'e taşıdı. Eğitim, davranışı ve biçimi içerikten çok daha güvenilir öğretir.

Daha büyük bir temel model bütün bunlara olan ihtiyacı ortadan kaldırır. Çocuk okuma izlencesiyle ince ayar yapılmış bir 8B model zorluk ölçütlerinde sıfır atışlı GPT-4o ve Llama 3.3 70B'yi geçti ve bir 7B ince ayar güçlü bir genel referansın 0,15 yakınına, dağıtım maliyetinin küçük bir bölümüyle yerleşti. Boyut ve uyum farklı eksenlerdir ve yalnızca biri token başına satılır.

Daha fazla veri, yanlış kurulmuş bir eğitim kümesini düzeltir. Yanlış kanı çalışmasında yalnızca yanıt gözetimi doğruluğu her veri boyutunda %30'un altında bıraktı. Ölçek, modelin ihtiyaç duyduğu bilgiyi eksik bırakan bir hedefi onarmaz.

Bir modelde işleyen bir tarif sonrakinde de işler. Aynı hiperparametreler mimariler arasında nitelik olarak farklı davranış üretti ve aynı ince ayar yöntemi bir görüntü modelini belirgin biçimde iyileştirirken diğeri için ölçülebilir hiçbir şey yapmadı. Tarifi temel modelinizde yeniden çalıştırın, yoksa tahmin ediyorsunuz.

Gözetimli ince ayar, pekiştirmeli öğrenmeden önceki güvenli orta adımdır. SWIM'de gözetimli aşama, yerini aldığı istem metninin 0,577'sine karşı 0,474 puan aldı ve onu yalnızca ödül sinyali kurtardı. Orta adım size bir aya ve bir gerilemeye mal olabilir.

## Size geri dönecek itirazlar

**"Bütçe ince ayar için onaylandı, öyleyse ince ayar yapalım."** Önce temel çizgiye ve dizine bir hafta harcayın. Erişim sayıyı hareket ettirirse ince ayar, daha iyi bilgiyle verilecek sonraki bir karardır ve ya onun için daha güçlü bir gerekçeniz olur ya da GPU'yu iade etmek için iyi bir nedeniniz.

**"Bizim problemimiz öğrencilerin onu kullanmaması."** Eğitim modelin ne ürettiğini değiştirir. %15 rakamı, öğrenme kazanımlarıyla uyumsuzlukta model ve istem metni seçiminin ne kadarını açıkladığını anlatır ve etkileşim bunun dışında kalır. Hesaplama satın almadan önce öğrencilerin nerede ayrıldığını ölçün.

**"Öğrenci işlerini bir satıcı API'sine gönderemeyiz."** Buradaki en güçlü LoRA sonucu 4B ile 30B aralığındaki açık modellerden geldi ve tek bir bağdaştırıcı bunların birkaçına hizmet etti. Bu dağıtım biçimi tek GPU'su olan ve veri işleme anlaşması olmayan bir ekip için de mevcuttur.

**"İstem metni yazmak bir kısayol; gerçek iş eğitim demek."** 23 yazma eğitimi çalışmasının derlemesi istem metnini baskın yaklaşım, ince ayarı ise onun gerisinde buldu ve bu sayfada bildirilen en büyük kazanç bir dizinden geldi. Hem derleme hem ders asistanı çalışması bu basamakları ölçülen kazanca göre sıraladı.

**"İstem metnini denedik ve düzleşti, öyleyse eğitime ihtiyacımız var."** Doğru okuma budur ve tırmanmanın gerekçelendiği tek durum budur. Optimize edilmiş istem metnini madde üretimi ekibinin yaptığı gibi ince ayara taşıyın ve kazancın istem metni işinden küçük olmasını bekleyin.

**"Ders materyallerimiz tutarsız, öyleyse erişim çöp döndürür."** Öyle olur ve erişim, derlemin kalitesini devralır. Derlemi temizlemek, bir modeli bunun etrafından dolanacak biçimde eğitmekten daha ucuzdur ve %52,3'ten %66,6'ye kazanç seçilmiş bir küme değil sıradan ders materyalleri üzerinde ölçülmüştür.

## Bu hafta ne yapmalı

**1.** Dersinizden 50 gerçek soru üzerinde yalnızca istem metnine dayalı bir temel çizgi ve bir anahtar kelime temel çizgisi çalıştırın ve iki sayıyı da yazın.

**2.** Erişimi zaten sahip olduğunuz materyallere yöneltin ve aynı 50 soruyu yeniden çalıştırın; böylece kazanç kendi temel çizginize göre ölçülür.

**3.** Rubriği sistem istem metnine koyun ve bir hafta yineleyin. İki tur hiçbir şey katmadığında durun.

**4.** Eğitim kümenizi adım düzeyinde izler açısından denetleyin. Soru ve yanıt çiftlerinden oluşuyorsa veri kümesi hazır değildir.

**5.** Güvenilir biçimde tutulmasını istediğiniz tek özelliği yazın ve bunun davranış mı içerik mi olduğuna karar verin. Bu karar basamağı seçer.

## Bundan sonra nereye bakmalı

[[training-ai-tutors-to-guide-rather-than-answer|Bir YZ özel ders sistemini öğrencilere yanıt vermek yerine rehberlik etmeye nasıl eğitiriz?]] eğitim sonrası yarısını ayrıntılı olarak ele alıyor. [[checking-whether-educational-ai-works|Bir eğitim YZ'sinin doğru çalıştığını nasıl biliriz?]] bunlardan herhangi birinin işe yarayıp yaramadığını nasıl anlayacağınızı kapsıyor. [[developing-ai-tutor|Etkili bir YZ özel ders sistemi geliştirmenin en iyi yolları nelerdir?]] aynı hedefin etkileşim tasarımı tarafı, [[designing-educational-ai-software|Eğitim YZ'si yazılımı tasarlamanın en iyi yolları nelerdir?]] ise çevreleyen sistemi kapsıyor. Tam kavram sayfası [[llm-training-and-fine-tuning]].
