---
title: LLM Eğitimi ve İnce Ayar
created: "2026-10-14T23:00:00-04:00"
type: concept
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, checking-whether-educational-ai-works]
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [generative-ai, llm, intelligent-tutoring, adaptive-learning, reinforcement-learning, open-source, educational-nlp]
audience: [educational technology developers, software developers, instructional designers, researchers]
level: [higher ed, k 12]
confidence: high
methods: [benchmark]
ethics: [pedagogical-safety]
reviewed_by: [editor]
translation_of: concepts/llm-training-and-fine-tuning
source_updated: "2026-10-02T08:08:45-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **LLM Eğitimi ve İnce Ayar** — eğitim YZ modellerinin nasıl yapıldığı: ön eğitimden son eğitime ve uyarlamaya uzanan hat, her aşamanın maliyeti ve kanıtların bunun neyi satın aldığına dair söyledikleri. Örgütleyici problem bir **teşvik uyuşmazlığıdır**: genel amaçlı modeller yanıt vermek üzere iyileştirilir, öğretim ise yanıtı geri tutmayı gerektirir. Son eğitim ve ince ayar bu davranışı değiştiren iki kaldıraçtır ve bilgi tabanının en net sonucu, bunların *üçüncü* bir seçenek olduğudur, ilki değil — getiri ve istek metni kararından önce gelirler; buradaki bir çalışma, sade istek metni yazımının kazandığı bir görevde denetimli ince ayarın başarısız olduğunu buldu ([[wraft-automated-writing-evaluation-argumentative-2026|WrAFT]]). Ne inşa edileceğine karar veren eğitim yazılım geliştiricileri ve öğretim uygulayıcıları için yazılmıştır.

## Dikkate Alınması Gereken Sorular

- Genel bir modelin çok hazır yanıt verdiği bir öğretmenlik göreviniz varsa ilk hamleniz daha iyi bir istek metni mi, kendi materyalleriniz üzerinde getiri mi, yoksa eğitim mi? Hangisinin yardımcı olduğunu söylemek için neyi ölçmeniz gerekir?
- İnce ayar veri ister. Projenizin eğitim örnekleri nereden gelir, onların sahibi kimdir ve kullanılabilmeleri için hangi gizlilik incelemesine ihtiyaç duyarlar?
- Buradaki bir çalışma, bir modeli değerlendirme verisi üzerinde ince ayarlamanın *biçimlendirme ve benzerliği* iyileştirdiğini, ayrı bir ince ayarın ise geri bildirim üretmede tümüyle başarısız olduğunu buldu. Bu, eğitim yöntemini görevle eşleştirme konusunda ne öneriyor?
- Pekiştirmeli öğrenmeyle son eğitim, bir modele yanıt vermek yerine rehberlik etmeyi öğretebilir. "İyi rehberlik eder" ifadesini yakalamak için nasıl bir ödül yazardınız ve bir model bunu nasırelgeçirirdi?
- Bilgi tabanı, model ve istek metni seçiminin bir LLM ile öğrenci öğrenme kazanımları arasındaki boşluğun yalnızca yaklaşık yüzde 15’ini açıkladığını bildiriyor. Bu doğruysa, inşa-karşı-satın alma kararınızı nasıl değiştirmeli?
- Doğru olan bir ince ayarlı model uzun bir konuşma boyunca yine de güvensiz olabilir. Birine denetimsiz biçimde öğrencilerle konuşturmadan önce neyi sınardınız?

## Giriş

Eğitim YZ geliştirme, iki yönden aynı duvara çarpar. Genel amaçlı dil modelleri, yardımseverlik insan tercihi üzerinde sonradan eğitilir; bu pratikte hızlı ve eksiksiz yanıt vermek anlamına gelir. Öğretmenlik bunun tersini gerektirir, çünkü pedagojik amaç bir öğrencinin yanıta kendisinin ulaşmasına yardım etmektir, onu eline tutuşturmak değil. Aynı zamanda genel bir model müfredatınız, rubriğiniz veya kurumunuzun sesi hakkında hiçbir şey bilmez ve ne kadar istek metni mühendisliği yapılırsa yapılsın bunları güvenilir biçimde kuramaz.

Bu sayfa, bir modele gönderdiğiniz metni değil modelin kendisini değiştiren teknikleri kapsar. Bunlar bir **artan bağlılık merdiveni** üzerinde dururlar: istek metni, ardından getiri, ardından parametre-verimli uyarlama, ardından tam ince ayar, ardından tercih veya ödül sinyalleriyle son eğitim. Her basamak, bir öncekinden daha fazla veri, daha fazla hesaplama ve daha fazla değerlendirme disiplini gerektirir ve belirli bir ölçüm tırmanışı gerekçelendirmedikçe her biri altındaki basamaktan daha kötü bir ilk seçimdir. Araştırma literatürünün çoğu yalnızca bu merdivenin tepesini bildirir; bu da bir geliştiricinin, getirinin yeterli olacağı yerde eğitime uzanmasını kolaylaştırır.

Sayfa, bir yapıcının gerçekten karşılaştığı kararlar çevresinde örgütlenmiştir: hangi kaldıracı çekmek (bu bölüm ve bir sonraki), uyarlamanın pratikte neyi satın aldığı ve neye mal olduğu, son eğitimin uyarlamanın şekillendiremediği neyi şekillendirebileceği ve bu sistemlerin nasıl başarısız olduğu. Terminoloji standart anlamıyla kullanılır: **ön eğitim** genel bir derlem üzerinde sıfırdan yapılan aşamadır, **son eğitim** davranışı şekillendiren ondan sonraki her şeydir (denetimli ince ayar, tercih iyileştirmesi, pekiştirmeli öğrenme) ve **ince ayar** hem son eğitimin denetimli aşamasını hem de parametre-verimli yöntemler dâhil olmak üzere sonraki görev veya alan uyarlama çalışmalarını kapsar.

## Eğitim hattı, aşama aşama

Erişilebilirliği çok farklı olan üç aşama. Bir makalenin hangisini anlattığını bilmek, bu literatürün çoğu yanlış okumasını önler.

**Ön eğitim**, genel bir metin derleminden temel modeli inşa eder. Modelin geniş yeteneğini üreten aşamadır ve esasen her eğitim projesinin erişemeyeceği bir yerde olup; maliyet milyonlarca dolar ile ölçülür ve veri web ölçekli bir taramadır. Bu bilgi tabanındaki hiçbir şey bunu yapmaz. Uygulayıcılara ilişkinliği eyleme dönüştürülebilir değil tanı koyucudur — ön eğitim verisi, bir modelin davranışı üzerindeki baskın kaldıraçtır ve çekemediğiniz tek kaldıraçtır. Bu asimetri, alanın kalan tekniklerinin tümünün zaten eğitilmiş bir model üzerinde işletilmesinin nedenidir.

**Son eğitim**, temel model üzerinde davranışı şekillendirir. Denetimli ince ayar (SFT), modele gösterimleri taklit etmeyi öğretir; tercih iyileştirmesi ve pekiştirmeli öğrenme ise onu, bir ödül modelinin veya bir dizi insan yargısının daha yüksek puanladığı çıktılara doğru iter. Bu, bir modelin yanıt vermek yerine rehberlik etmeyi öğrenilebildiği aşamadır ve en çarpıcı eğitim sonuçlarının bulunduğu yerdir. Aynı zamanda ödül tasarımına en duyarlı aşamadır, çünkü ödül, istediğiniz şeyin sıkıştırılmış bir belirtimidir ve modeller gerçekten yazdığınız her şeyi iyileştirir.

**Uyarlama**, mevcut bir modeli görevinize veya alanınıza uydurur; genellikle çok daha az veri ve hesaplama ile. LoRA’nın yaygın biçim olduğu parametre-verimli ince ayar (PEFT), az sayıda eklenen parametreyi eğitir ve temel ağırlıkları dondurulmuş bırakır. Tam ince ayar her şeyi günceller. Damıtma ve unutma bunların yanında yer alır. Aşağıdaki bölümler her birini sırayla ele alır. Çoğu eğitim geliştiricisi için bu pratik aşamadır — birkaç yüzden birkaç bin örnek ve tek bir GPU’nun konuşlandırılabilir bir model üretebileceği yer.

## İstek metni, getiri mi, yoksa eğitim mi? Önce gelen karar

Bu soru üzerine bilgi tabanındaki en güçlü tek sonuç, bir eğitim çalışması değil bir getiri çalışmasıdır. Bir kurs bilgi tabanı asistanı inşa eden Shen ve ark. (2026), yerel modelleri üç yapılandırmada değerlendirdi ve **getirinin, model değil, birinci mertebe tasarım kararı olduğunu** buldu: getirisi olmayan yerel LLM’leri yalnızca **yüzde 52,3** doğruluğa ulaştı; **yüzde 55,4**’lük bir TF-IDF taban çizgisinin *altında*; buna karşılık hiç ince ayar yapılmadan [[rag|getiri-artırılmış üretim]] eklenmesi onu **yüzde 66,6**’ya yükseltti ([[shen-sustainable-ai-knowledge-base-cs-education-2026]]). Ayrıca sınadıkları ince ayar yapılandırmaları, getiri ablasyonları, niceleme ve sorgu başına enerji ile birlikte rapor edilir; bu, karşılaştırmayı olağandışı biçimde dürüst kılar: temellendirilmemiş bir temel model, on yıllık süregelen sözlük tabanlı bir yöntemden daha kötü olabilir ve en ucuz çözüm eğitim değildir.

Alanın gerçekte inşa ettikleri benzer bir sıralamayı yansıtır. [[writing-education|Yazma öğretimi]] için YZ’yi özelleştirmeye ilişkin 23 ampirik çalışmanın (2020–2025) PRISMA rehberli bir derlemesi, **ince ayardan (N = 7) ve melez mimarilerden (N = 3) önce istek metni mühendisliğinin baskın olduğunu (N = 13)** buldu ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Derlemenin daha keskin bulgusu, bir teknik sıralamasından ziyade yapısal bir uyuşmazlıktır: belirtilen pedagojik hedefler yazma süreçlerine, [[feedback-literacy|geri bildirim okuryazarlığı]]na ve yüksek mertebeli akademik becerilere doğru kaymışken, baskın uygulamalar hâlâ istek metni tasarımı veya ince ayar yoluyla ürün odaklı hedefleri sürdürür.

İstek metni ile eğitim doğrudan karşılaştırıldığında sonuç göreve bağlıdır; kararın varsayılmak yerine ölçülmesi gerektiğinin nedeni tam olarak budur:

- **Hedef, kararlı bir çıktı biçimi veya denetlenen bir özellik olduğunda eğitim kazanır.** L2 dinleme değerlendirmesi için otomatik madde üretiminde yinelemeli istek metni rafinasyonu bir plato yaptı; ardından GPT-4.1’i *iyileştirilmiş istek metni üzerinde* ince ayarlamak, üretimi yalnızca istek metnine göre ileri taşıdı — kalan kazanımın itici gücünün model uyarlaması olduğunu, istek metni tasarımı olmadığını izole ederek ([[gpt-item-generation-l2-listening-2026]]).
- **Hedef yargı yüklü bir metin olduğunda istek metni kazanır.** *Puanlama* için başarıyla ince ayar yapan aynı sistem, *geri bildirim*de başarısız oldu: WrAFT’ta, ince ayarlı bir GPT-4o modülü 360 ayırılmış TOEFL kompozisyonunda QWK 0,84 ve RMSE 0,44’e ulaştı, ancak geri bildirim üretimi için denetimli ince ayar kesilmiş ve ayrıştırılamaz çıktı üretti; oysa Claude 3.7’yi doğrudan istemek, öğretmenlerin en iyi bulduğu geri bildirimi üretti ([[wraft-automated-writing-evaluation-argumentative-2026]]). İnce ayar modele bir puana ulaşmayı öğretti; yazmayı öğretmedi.
- **Hedef bir persona veya rubrik olduğunda istek metni düzeyinde şekillendirme, eğitimin yerini alabilir.** Rubrik rehberli istek metni, yinelemeli olarak birlikte rafine edilerek, hiç ince ayar yapılmadan öğrenci tasarım çalışmaları üzerinde LLM–insan uzlaşısını **yüzde 54,75’ten yüzde 81,25’e** yükseltti (Cronbach Alfa 0,393 → 0,798) ([[yasar-llms-iterative-pedagogical-design-2026]]), ve literatüre dayalı özel bir GPT istek metni, geniş bir istek metnine göre **0,40**’a karşı **0,98** bulunuşlukta hedef matematiksel yanlış kanıları ortaya çıkardı ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).
- **Bunların tümünde bir tavan vardır.** Hardy ve Kim (2026), model ve istek metni seçiminin birlikte LLM’ler ile öğrenci öğrenme kazanımları arasındaki uyuşmazlığın yalnızca yaklaşık **yüzde 15**’ini açıkladığını tahmin eder; kalanı modeller arasında paylaşılır ve kıyaslama-ağırlıklama ile oy birliğiyle oylama topluluklarının hizalamayı *kötüleştirdiğini** buldular ([[educational-llm-alignment]]). Ön eğitim verisi baskın kaldıraçsa ve çekemediğiniz tek kaldıraçsa, bu tekniklerin hiçbirinin neyi başarabileceğine ilişkin beklentiler buna göre kalibre edilmelidir.

## İnce ayarın neyi satın aldığı: ölçek üzerinde denetlenebilirlik

Genel bir model, ihtiyacınız olan bir özelliği tutacak biçimde yapılamadığında, mütevazı bir veri kümesi üzerinde ince ayar genellikle yapabilir — ve yinelenen sonuç, *hedeflemenin büyüklüğü yendiğidir*. Uzman tasarımı bir çocuk okuma müfredatı üzerinde ince ayarlanmış üç 8B model, güçlükle ilgili ölçütlerde sıfır-atış GPT-4o ve Llama 3.3 70B’yi geride bıraktı; ihmal edilebilir güvenlik sorunlarıyla. Yazarlar bunu **ölçek üzerinde denetlenebilirlik** olarak çerçeveler, çünkü kompakt bir model, genel bir modelin istenemeyeceği biçimde belirli bir okuma düzeyine ve hata örüntüsüne göre ayarlanabilir ([[llm-children-reading-story-generation]]).

Örüntü çok farklı görevlerde yinelenir:

- **Müfredat temellendirmesi.** Hint Bilgi Sistemleri’nde temellendirilmiş, 24.795 örneklik çok dilli bir yönerge veri kümesi, beş hâkimli bir dış panelde **6,39** puan alan bir 7B ince ayarı üretti (1.201 katmanlı madde üzerinde medyan). Bu, konuşlandırma maliyetinin bir kesriyle güçlü bir genel referans modelinin **0,15** yakınındadır — bu arada aynı temel model ince ayar olmadan **IKS’ye özgü boyutlarda sıfıra yakın** puan aldı ([[iks-instruct-dataset-indian-knowledge]]). "Genel olarak yetkin" ile "burada yetkin" arasındaki bu boşluk, alan uyarlamasının tüm gerekçesidir. Yazarların bildirdiği karşı-sezgisel ayrıntıya da dikkat edin: kalite, veri küratörlüğüyle tek düze biçimde *yükselmedi**.
- **Değerlendirme güvenilirliği, ucuz.** Yaklaşık **3.900** havuzlanmış puanlı örnek üzerinde eğitilmiş tek bir LoRA bağdaştırıcısı, beş küçük açık modeli (4B–30B) iki bilgisayar bilimi sınavında insan puanlayıcıyla eşitliğe veya üstüne taşıdı ve persona duyarlılığını neredeyse sildi (sürüklenme ≤ 0,32 MAE) ([[llm-graders-computer-science-exams-2026]]). Tek bağdaştırıcı, tek veri kümesi, birkaç temel model — bu, pratik bir konuşlandırmanın biçimidir.
- **Seçici otomasyon.** Güven, puanlama hatasının güvenilir bir yordayıcısıydı (β = −0,602, p < ,001). Yanıtların en az güvenilen **yüzde 20**’sini insan incelemesine yönlendirmek, ince ayarlı bir GPT-3.5 modelini r = 0,781’den **r = 0,822**’ye taşıdı (RMSE 0,5990 → 0,5544) ve elle puanlama işini yaklaşık **yüzde 80** kesti ([[know-when-to-trust-ai-scoring-reliability-2026]]). Burada ince ayar insanın yerini almaz; insanın dikkatini karşılanabilir kılar.
- **Aksi halde elle puanlayacağınız yapıtları ölçmek.** İnce ayarlı Macar transformer’ları (hubert-base-cc, PULI-BERT-Large), [[teacher-education|öğretmen eğitiminde]] yansıtıcı yazmayı puanlamak için TF-IDF öznitelikleri ve Qwen3 gömmelerine karşı kıyaslandı ([[reflection-level-classification-hungarian-essays-2026]]), ve ince ayarlı bir çok kipli model (Qwen3.5 tabanlı), çoktan seçmeli maddeler için madde karakteristik eğrilerini yeniden inşa ettiğini gösterildi — 3PL ve MCM eğrilerinde kodlanan yanıt örüntülerini söylenmek yerine öğrenerek ([[multimodal-item-parameter-estimation-2026]]).

## Pratikte parametre-verimli uyarlama

LoRA ve akrabaları, çoğu eğitim ekibinin gerçekten çalışacağı yerdir ve literatür, davranışları hakkında olağandışı biçimde özgül rehber içerir.

**Rütbe, azami hale getirmek için çevrilecek bir kadran değil, bir ödünleşimdir.** Lu ve ark. (2026), Doğrusal Kontrol Sistemleri dersinden 360 sistem–kullanıcı–asistan diyaloğu oluşturdu, yanıtları Çözüm–Yöntem–Öğretim-Noktaları biçiminde yeniden yapılandırdı ve Qwen2.5-3B ve 7B’ye 4, 8 ve 16 rütbelerinde LoRA uyguladı. Yapılandırılmış çıktı kapsamı tabanda sıfıra yakından yaklaşık **1,00**’e yükseldi ve en iyi yapılandırma (7B, r = 16) ROUGE-L **0,4093**’e ulaştı; kazanım için önyükleme güven aralıklarının tümü sıfırın üzerindeydi. Ancak **milyon bağdaştırıcı parametresi başına kazanım, rütbe yükseldikçe tek düze biçimde düştü**; dolayısıyla kurs düzeyi hizalama, bedava bir yükseltme değil bir ölçek-ve-rütbe ödünleşimidir ([[lora-finetuned-control-systems-course-qa-2026]]). Ölçütleri benzerlik ve biçimlendirmeyi ölçer, türetim doğruluğunu değil; bu, bu değerlendirme ailesinin tamamı için standart uyarıdır.

**Ölçek başarıyı öngörmez ve özdeş ayarlar mimariler arasında farklı davranır.** LoRA-uyarlanmış bir Gemma-3-27B-it üzerine inşa edilmiş açık kaynaklı otomatik yazma değerlendirme sistemi AiAWE, RMSE 0,474, QWK 0,828 ve 360 değerlendirme kompozisyonunun **yüzde 90,56**’sında insan puanına ±0,5 uzlaşıya ulaştı; LLaMA-3.3-70B ve ince ayarlı bir GPT-3.5 taban çizgisini geride bıraktı — tüketici düzeyinde bir sunucuda çalışırken. Puandan çok daha fazla önemi olan üç geniş bulgu var: model ölçeği LoRA uyarlaması altında aşağı akış performansının güvenilir bir yordayıcısı *değildi**, **özdeş LoRA hiperparametreleri mimariler arasında nitelikle farklı uyarlama davranışları üretti** ve iyi ayarlanmış orta büyüklükte bir açık model, tescilli sistemlerle rekabetçi olabilir ([[aiawe-automated-writing-evaluation]]).

**Hangi katmanların uyarlanacağı gerçek bir karardır.** İngilizce öğretimi için bir söylem analizi sisteminde, budanmış bir BERT’yi **yalnızca son dört Transformer katmanını** güncelleyerek ince ayarlamak her iki alternatifi de yendi: yalnızca en üst katmanı uyarlamak daha düşük bir tavana ulaştı ve tam 12 katmanlı ince ayar aşırı uydurdu ve salındı ([[bert-discourse-english-teaching-2026]]).

**Temel mimari, parametre sayısından daha fazla önemli olabilir.** 1,000 başlıklanmış nükleer mühendislik görüntüsü üzerinde üç açık metinden-görüntü modelinin ince ayarı, Stable Diffusion XL’i önemli ölçüde iyileştirdi, SD-v3.5-Medium için sınırlı kazanımlar sağladı ve akış-eşleştirme Flux.1 modeli için **hiçbir ölçülebilir iyileşme üretmedi** ([[nuclear-diffusion-text-to-image-learning-2026]]). Bir ince ayar reçetesi mimariler arasında taşınabilir değildir; bu, AiAWE’nin ters yönden bildirdiği dersin aynısıdır.

İki komşu teknik uyarlama aşamasını tamamlar. **Damıtma**, büyük veya siyah kutu bir sistemi küçük, konuşlandırılabilir birine sıkıştırır. İki aşamalı bir hat, uydurulmuş bir siyah kutu MK tahmincisini ve sonradan yorumlamasını küçük bir açık ağırlıklı LLM’ye damıttı; 2B parametreli bir "öğrenci" kahinin etki yüzeyinin neredeyse kayıpsız kurtarılmasını sağladı (r > ,90). Bu sonuç, her anlatıyı iddia ettiği atfı denetleyen bir sadakat-önce değerlendirmesi altında rapor edilir ([[distilling-self-explaining-lm-learning-analytics-2026]]). **Unutma**, eğitimden sonra hedeflenmiş içeriği kaldırır: gradyan tabanlı unutma, kişisel bilgi ve zararlı içeriği ayıklamak için üç modele uygulandı; iki kaldırma sırasında (önce kişisel bilgi ve önce zararlı içerik) sınandı ([[llm-unlearning-math-privacy]]) — bir modelin taşılmaması gereken bir şeyi ezberlediği durumlarda ilgili araç.

## Son eğitim: yalnızca biçimi değil davranışı şekillendirmek

Uyarlama modele *ne üreteceğini* öğretir; son eğitim ona *nasıl davranacağını* öğretir. Pedagojik sonuçların en çarpıcı olduğu yer burasıdır ve ödül veya tercih sinyalinin tasarımının her şeye karar verdiği yer.

**Hattın sonucu.** Singh ve ark. (2026), Qwen3-32B’yi üç aşama — ilk PÖ, sentetik SFT, son PÖ — yoluyla EduQwen’e dönüştürdü; CDPK kıyaslamasında **yüzde 96,52**’ye ulaşarak Gemini-3 Pro’nun **yüzde 90,55**’ini geride bıraktı. Ara sonuçlar öğretici olan kısımdır: ilk PÖ aşaması tek başına yüzde 94,13’e ulaştı, 40.000 kendi üretilmiş yanıt üzerinde SFT onu yüzde 96,20’ye taşıdı ve son PÖ turu son kırıntıyı ekledi. Ödül modeli **doğrudan yanıtlara göre rehber yanıtları önceliklendirdi**, olumsuz-sert madenciliği temel modelin çoktan çözdüğü soruları dışladı ve çok adımlı pedagojik kararları yakalamak için açılımlar 5’ten 8 adıma genişletildi ([[singh-eduqwen-pedagogical-rl-2026]]). Buna karşılık — **97 modelden** gerçek öğretmen mesleki gelişim sınavlarından çekilen Pedagoji Kıyaslaması — **yüzde 28 ile yüzde 89** arasında değişen doğruluk buldu; pedagojik bilginin genel ön eğitim sırasında tesadüfen kazanılmadığının kanıtı ([[cdpk-pedagogy-benchmark-llms|Lelièvre ve ark., 2025]]).

**Söyleyişi değil kararı eğitmek.** TACT, bir öğretmeni 13 stratejili bir taksonomi artı iki eksenli bir öğrenci-hamle taksonomisi üzerinde son eğiterek Qwen3.5-4B omurgasına göre **20,30 puan** kazandırdı; eğitim sırasında erişilebilen olan öğrenen durumu etiketlerini geri tutan, böylece modelin durumu diyalogdan çıkararak saptaması gerektiren bir tanı kıyaslamasıyla ([[tact-pedagogically-adaptive-esl-tutoring]]). Aynı mantık [[special-education|özel eğitim]] hizalaması için Special-R1’de de görünür ([[special-r1-rl-special-education]]) ve modelleri yanıtlayıcılar yerine Sokratik rehberler olarak hizalayan sezgisel-PÖ çalışmalarında ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Son eğitim yalnızca modelin ne söylediğini şekillendirmek zorunda değildir: bir platform, korumalı bir öğretmenlik sohbet robotunu, sonraki alıştırma problemini seçen bir pekiştirmeli öğrenme etmeniyle eşleştirir; böylece eğitilmiş politika, öğrenenin sırada ne yapacağına karar verir ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

**Damıtılmış akıl yürütme modelleri.** Pedagojik davranışa giden daha ucuz bir yol, küçük bir modele daha büyüğünü taklit ettirmektir: Pedagogy-R1 (1,5B ve 7B), bir QwQ-32B öğretmenden damıtılan pedagojik olarak süzülmüş çıktılar üzerinde yönerge-ayarlı oldu; Pedagoji-Zinciri istek metniyle eşleştirildi ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

**Yönerge-koşullu son eğitim ve otantik veri karşı karşıya.** LearnLM, eğitim modeli eğitimini *pedagojik yönerge izleme* olarak çerçeveler; geliştiricilerin ve öğretmenlerin pedagojinin tek bir tanımına bağlı kalmadan öğretmen davranışını belirtmesini sağlayan sistem düzeyi yönergeler taşır. Gemini’nin son eğitim aşamalarına ortak eğitimle karıştırılır ve uzmanlar onu GPT-4o’ya göre (**+yüzde 31**), Claude 3.5 Sonnet’e göre (**+yüzde 11**) ve temel Gemini 1.5 Pro’ya göre (**+yüzde 13**) tercih etti. Temel bulgu, **PÖ’nün yalnızca SFT’ten önemli ölçüde daha etkili olduğudur**; uzun konuşmalarda incelikli pedagojik yönergeleri izlemede ([[learnlm-improving-gemini-learning]]). TeachLM ters bahse gider: [[prompt-engineering|istek metni mühendisliğinin]] bir geçici çözüm olduğu ve kıt malzemenin *otantik* öğrenen–öğretmen etkileşim verisi olduğu. Titik anonimleştirme altında **100.000 saat** birebir oturum üzerinde eğitilen model, öğrenci konuşma süresini ikiye katlar, sorgulama tarzını iyileştirir ve diyalog turlarını **yüzde 50** artırır ([[teachlm-post-training-llms-education]]). Birlikte tasarım alanını tanımlarlar: veriniz kıtsa yönerge-koşullu son eğitim, elinizde varsa gerçek öğretmenlik etkileşimleri üzerinde ince ayar.

**Gözetim kalitesi gözetim miktarını yener.** Bir yazma simülatörü için SWIM’in ilerleyişi en temiz gösterimdir. Rubrik-temelli istek metni sınırlı yeterlilik denetimi verdi (Claude Sonnet için en iyi ortalama özellik QWK 0,577, GPT-5.4 için 0,422, açık 7B model için sıfıra yakın); denetimli ince ayar o 7B modelini **0,474 ± 0,023**’e yükseltti. Otomatik-kompozisyon-puanlaması-türetili bir ödüle karşı GRPO onu her özellik ve istek metni boyunca **0,618 ± 0,005**’e daha ileri taşıdı; ödül, tam eşleşme ödüllerinin çok özellikli ortamda çok seyrek olması nedeniyle yoğun bir özellik-normalize doğruluk olarak tasarlandı ([[swim-student-writing-simulation-2026]]). Yanlış kanı modelleme çalışması, gözetimin *ne* içermesi gerektiğine dair daha keskin bir sonuca ulaşır: yönerge-ayarlı modeller yalnızca **adım düzeyi çözüm izleri** üzerinde eğitildiğinde cebir yanlış kanılarını öğrendi; yalnızca nihai yanıtlar üzerinde eğitildiğinde doğruluk her veri boyutunda **yüzde 30**’un altında kaldı. Öğrenci rolü, doğru örnekler açıkça karıştırılana kadar — **dörtte bir** gibi düşük oranlarda bile — öğrenilen hatayı aşırı genelleştirdi; öğretmen rolü ise böyle bir maliyet göstermedi, on birlikte eğitilmiş yanlış kanı boyunca doğru doğruluğu **yüzde 93 ile yüzde 98** arasında tuttu ([[misconception-acquisition-dynamics-llms-2026]]).

Eğitim verisi kendisi modellerin küratörlük yapabileceği bir şeydir: Edu-QuRating, tercih damıtmasını eğitim verisi küratörlüğüne uyarlar; tek bir "bu eğitim mi?" puanını, olgusal doğruluğu, pedagojik yapıyı ve düzey uygunluğunu kapsayan 20 rubrik boyutuyla değiştirir ([[garrod-edu-qurating-educational-data-curation-2026]]).

**Teori bir eğitim iskelesi olabilir.** [[learning-design|Öğretim sistemleri tasarımını]] otomatikleştiren etmenler için, klasik ADDIE ile Dick & Carey çerçevelerinin melezi, ReAct tarzı akıl yürütmeyle hem saf teoriyi (yapılandırılmış ama esnek olmayan) hem de yalnızca-teknik etmenleri (esnek ama temelsiz) geride bıraktı; 51 değişkenli bir bağlam matrisinden çekilmiş **25,795** senaryo üzerinde, LLM-hâkim yanlılığını azaltmak için çok hâkimli bir protokolle ([[jeon-isd-agent-bench-2026]]). Gözetim *etiketlerine* ilişkin bir çalışma, her eğitim örneğine tek bir hedef davranış atamanın — konu yetkinliği, müfredat temellendirmesi, tanısal akıl yürütme veya iskeleleme — sınanan her model ölçeğini yükselttiğini buldu; en büyük kazanımlar iskelelemede ve bir öğrenenin geçmişini kullanmada, bilgi-durumu teşhisi ise **yüzde 54,04** ile en zayıf olarak kaldı ([[omniedu-open-educational-foundation-models-2026]]).

## Yalnızca öğretmeni değil öğrenen tarafını eğitmek

Aynı makine giderek artan biçimde öğrencileri simüle etmeye yönlendirilir; bu da bir öğretmeni değerlendirmenin ekonomisini değiştirir: öğrenen işe almak yerine onları üretirsiniz.

Uyarı, simüle edilmiş öğrencilerin herhangi bir başka araç gibi doğrulanması gerektiğidir. Gerçek öğrenci–öğretmen matematik diyaloglarının en büyük kamu derlemesinden çekilmiş **382 ayırılmış diyalog** üzerinde ince ayarlı ve istek metinli modelleri kıyaslamak — dilbilimsel, davranışsal ve bilişsel yönleri kapsayan yedi ölçüt boyunca — simüle edilmiş öğrencilerin öğrenciler gibi davranıp davranmadığına ilişkin alanın en doğrudan sınavasını üretti ([[simulated-students-tutoring-dialogues-2026]]). İki ek yaklaşım sadakati zorlar: INSIDE, LLM’leri öğrencilerin hem *davranması* hem de *düşünmesi* için ince ayarlar; bilişsel, duygusal ve eylem boyutlarında Bloom’un Taksonomisi’nde temellendirilmiş iç diyalog üretir ve eşli düşünce-izleri ile eylemler üzerinde eğitim yapar ([[inside-llm-student-simulator-reasoning-2026]]), ve geçmiş-farkında profiller, simülasyonu statik bir persona yerine bir öğrencinin önceki yörüngesine koşullandırır ([[history-aware-student-simulation]]). Bir geliştirici için pratik ders, bir simülatörün ölçüm aracı olduğu ve bunun ima ettiği her geçerlilik sorusunu miras aldığıdır.

## Neler ters gider

**Övüggenlik bir eğitim hedefidir, kullanılabilirlik ayarı değil.** Öğretmenlik düzeltici sürtünme gerektirir ve modeller buna direnir. EduFrameTrap, bağlam-değiştirme saldırılarına dayanan modellerin otorite veya sosyal-duygusal baskı altında hâlâ pes ettiğini ve düzeltici geri bildirimi geri tuttuğunu gösterir; bu yüzden yazarları "kibar ama doğru" davranışın tercihten ziyade açık bir eğitim gereksinimi olması gerektiğini savunur ([[eduframetrap-llm-sycophancy-educational-safety]]). Yanıtlamaya göre rehberliği ödüllendiren eğitim — EduQwen’in DAPO ödül modelinin yaptığı gibi — ona karşı yapısal bir kaldıraçtır, ancak [[contextual-sycophancy-ai-literacy|bağlamsal övüggenlik]] istek metniden ve hizalamadan sonra da sürer; öğrenenlerin hataları hâlâ YZ öğüdüne sızar ([[contextual-sycophancy-ai-literacy]]).

**Eğitim bir modeli uzun bir konuşma boyunca güvenli yapmaz.** SafeTutors, uzmanlaşmış pedagojik modellerin bile süregelen diyalogda bozulduğunu ve yanıt aşırı-açıklama zararları işleyebileceğini gösterir ([[hazra-safetutors-pedagogical-safety-2026]]); dolayısıyla [[pedagogical-safety|pedagojik güvenlik]], tek turda değil konuşma uzunluğunda sınanmalıdır.

**Doğrulama eğitimin yerini alabilir — veya onun yerine gerekli olabilir.** Eğitimsiz bir sınır GPT-4, bir akıllı öğretim sistemi için geri bildirim yazarken yaklaşık **yüzde 35** aşırı genel, hatalı veya yanıt açığa çıkaran ipucu üretti ve kendi otomatik kalite kontrolleri insan yargısıyla uyuşmadı; yazarlar, LLM’lerin öğretimin içsel bir modelinden yoksun olduğunu ve denetimsiz öğrenenle yüz yüze kullanımdan önce sağlam doğrulama veya alana özgü eğitimin gerekli olduğu sonucuna varıyor ([[reddig-maclellan-personalized-feedback-llm-2026]]). Pratik çıkarım iki yöne de işler: bazen doğru yanıt bir eğitim koşusu yerine bir doğrulama katmanıdır ve bazen doğrulama, bir eğitim koşusunun başarısız olduğunu söyleyen şeydir.

**Değerlendirmeniz yanlış şeyi ölçüyor olabilir.** Bu, buradaki ince ayar literatüründeki en yaygın tuzağı. ROUGE-L ve QWK benzerlik ve sıralamayı ölçer, türetimsel doğruluğu değil ([[lora-finetuned-control-systems-course-qa-2026]]); bir ince ayar mükemmel QWK’ya ulaşırken aynı sistemin geri bildirimi ayrıştırılamaz olabilir ([[wraft-automated-writing-evaluation-argumentative-2026]]); ve bir model öğrencileri doğru sıralarken her birinin yardıma ihtiyacı olma olasılığı konusunda yanılış olabilir. Hedef bir yapıt olduğunda, ince ayar, yapıtı ölçen bir araçla eşleştirilmelidir — güven-yönlendirme sonucu iyi bir şablondur, çünkü bir doğruluk sayısını döngüde-insan bulunan bir işletme politikasına dönüştürür ([[know-when-to-trust-ai-scoring-reliability-2026]]).

## Eğitim geliştiricileri için pratik bir dizi

Yukarıdaki kanıttan damıtılmış, hesaplama israfını önleyen sırayla:

1. **Yenebileceğiniz bir taban çizgisi oluşturun, önemsiz bir tane dâhil.** Kurs asistanı çalışmasının getirisiz modeli TF-IDF’in altında puan aldı. Eğitimi düşünmeden önce yalnızca-istek metni doğruluğunuzu kaydedin.
2. **Parametrelerden önce getiri ekleyin.** Modeli kendi materyallerinizde temellendirmek, burada bildirilen en ucuz büyük kazançtır (yüzde 52,3 → yüzde 66,6) ve geri döndürülebilirdir.
3. **İstek metnini tasarlayın ve yinelemeli olarak yeniden tasarlayın.** Rubrik rehberli rafinasyon, hiç eğitim yapılmadan uzlaşıyı yüzde 54,75’ten yüzde 81,25’e taşıdı ve madde üretimi yalnızca istek metni rafinasyonu platoya çıktıktan sonra iyileşti — o plato, eğitimin bir şey ekleyebileceğinin sinyalinizdir.
4. **Hedef kararlı bir biçim, denetlenen bir özellik veya temel modelin yoksun olduğu bir alan olduğunda ince ayarlayın.** Birkaç bin örnek üzerinde LoRA, küçük açık modelleri insan puanlayıcı eşitliğine koyabilir ve bir yönerge veri kümesi, bir 7B modeli alana özgü boyutlarda çok daha büyük bir referansın 0,15 yakınına taşıyabilir.
5. **Rütbe ve katmanları bilerek seçin ve mimariye özgü davranış bekleyin.** Bağdaştırıcı parametresi başına kazanım rütbe yükseldikçe düştü, dört katmanlı uyarlama hem daha sığ hem tam derinlikli ince ayarı yendi ve bir model ailesi önemli ölçüde iyileşirken diğeri hiç kımıldamadı.
6. **Modelin *nasıl* öğrettiğini değiştirmeniz gerektiğinde son eğitimi kullanın.** Yanıtlamaya göre rehberliği ödüllendirin ve ödülün elgeçirileceğini bekleyin — onu bir sezgiye karşı değil bir kıyaslamaya karşı yazın.
7. **Adım düzeyinde gözetleyin.** Yalnızca nihai yanıtla eğitim, her veri boyutunda yüzde 30’un altında yanlış kanı doğruluğu üretti.
8. **Güvenin düşük olduğu yerde bir insanı döngüde tutun.** Yanıtların en az güvenilen beşte birini yönlendirmek, uzlaşıyı iyileştirirken elle yapılan işin yaklaşık yüzde 80’ini kaldırdı.
9. **Güvenliği tüm konuşmalar üzerinde sınayın.** Uzmanlaşmış modellerin bozulduğu yer uzun diyaloglardır.
10. **Beklentileri kalibre edin.** Model ve istek metni seçimi, öğrenme kazanımlarıyla uyuşmazlığın yalnızca yaklaşık yüzde 15’ini açıklar; eğitimden istediğiniz şeylerin bir kısmı eğitimden temin edilemez.

## Açık Sorular

1. Pedagojik son eğitim konular arasında genelleşir, yoksa alana özgü ayar her zaman gerekli midir?
2. PÖ–SFT–PÖ hattı, dönemler arasında kişiselleştirme için boylamsal bellekle birleştirilebilir mi?
3. Adım düzeyinde pedagojik akıl yürütmeyi hâlâ öğreten en küçük gözetim kümesi nedir ve kurumlar arasında öğrenci verisi paylaşılmadan paylaşılabilir mi?
4. İnce ayarlı eğitim modellerinin değerlendirmesi, benzerlik ölçütleri mükemmelken modelin kullanılamaz olabildiği göz önünde bulundurularak nasıl standartlaştırılmalıdır?

## İlgili kavramlarla bağlantılar

Bu sayfa, [[llm]] sayfasının — büyük dil modellerinin ne olduğunu ve nasıl davrandığını kapsayan — *bir model nasıl yapılır* eşlikçisidir. [[ai-technologies]] altında eğitim-ve-uyarlama düğümü olarak, [[rag]] (genellikle önce gelen getiri alternatifi), [[prompt-engineering]] (en ucuz kaldıraç) ve [[reinforcement-learning]] (son eğitimin PÖ yarısı) yanında yer alır. Çıktıları [[intelligent-tutoring]] ve [[adaptive-learning]]’i besler; en yaygın eğitim uygulamaları [[automated-assessment]], [[automated-essay-scoring]] ve [[ai-feedback-quality]]; en yakın kavramsal akrabaları ise [[educational-nlp]], [[simulating-students]], [[open-source]] ve [[student-modeling]]’dır. Yarattığı riskler [[pedagogical-safety]], [[ai-sycophancy]], [[hallucination-risk]] ve [[privacy]] tarafından taşınır.

## Bağlı Kavramlar

- [[llm]] — bu modellerin ne olduğu; bu sayfa onların nasıl yapıldığıdır
- [[ai-technologies]] — şemsiye: YZ teknolojileri ve teknikleri
- [[rag]] — getiri, eğitimden önceki adım
- [[prompt-engineering]] — en ucuz kaldıraç ve yenenecek taban çizgisi
- [[reinforcement-learning]] — son eğitimin PÖ aşaması
- [[intelligent-tutoring]] — ana uygulama alanı
- [[adaptive-learning]] — modelleri uyarlamaktan farklı olarak öğrenenlere uyarlama
- [[automated-assessment]] — ince ayarlı puanlama modellerinin indiği yer
- [[automated-essay-scoring]] — puanlama kanıtlarının çoğunun geldiği görev
- [[ai-feedback-quality]] — ince ayarın neyi düzelttiği ve düzeltmediği
- [[educational-nlp]] — komşu yöntem ailesi
- [[simulating-students]] — aynı makinenin öğrenen tarafı uygulaması
- [[student-modeling]] — simülasyonun altındaki modelleme katmanı
- [[open-source]] — yerel ince ayarı mümkün kılan şey açık ağırlıklardır
- [[benchmark]] — bu sistemlerin nasıl değerlendirildiği ve bunun sınırları
- [[assessment-validity]] — iyi bir ölçütün neden hâlâ kötü bir araç anlamına gelebileceği
- [[pedagogical-safety]] — eğitimin garanti etmediği şey
- [[ai-sycophancy]] — son eğitimin hedefleyebileceği bir davranış
- [[hallucination-risk]] — ince ayarın iyileştiremediği başarısızlık kipi
- [[privacy]] — eğitim verisi ve unutma üzerindeki kısıt
- [[human-in-the-loop-ai]] — otomasyonu karşılanabilir kılan geri çekilme yolu
- [[metacognition]] — son eğitim için pedagojik bir hedef
- [[scaffolding]] — ödül işlevlerinin kodlamaya çalıştığı davranış
- [[ai-education]] — bu çalışmanın hizmet ettiği alan

## Bağlı Makaleler

- [[singh-eduqwen-pedagogical-rl-2026]] — PÖ–SFT–PÖ hattı: CDPK’de yüzde 96,52, Gemini-3 Pro’yu geride bırakarak
- [[learnlm-improving-gemini-learning]] — Gemini’nin son eğitimi içinde pedagojik yönerge izleme
- [[teachlm-post-training-llms-education]] — 100.000 saat otantik öğretmenlik verisi üzerinde son eğitim
- [[tact-pedagogically-adaptive-esl-tutoring]] — pedagojik kararı hedefleyen taksonomi-hizalı son eğitim
- [[swim-student-writing-simulation-2026]] — rubrik istek metnine karşı SFT ve GRPO, ödül tasarımı ayrıntısıyla
- [[misconception-acquisition-dynamics-llms-2026]] — yanlış kanı eğitimi için bağlayıcı gereksinim olarak adım düzeyi izler
- [[jeon-isd-agent-bench-2026]] — 25.795 senaryo üzerinde teori-temelli öğretim tasarımı etmenleri
- [[wang-socratic-guides-heuristic-reinforcement-learning-2026]] — modelleri Sokratik rehberler olarak hizalamak için sezgisel PÖ
- [[special-r1-rl-special-education]] — özel eğitim hizalaması için pekiştirmeli öğrenme
- [[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]] — kişiselleştirme için LLM rehberli pekiştirmeli öğrenme
- [[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]] — pedagojik bir büyük akıl yürütme modeli
- [[omniedu-open-educational-foundation-models-2026]] — model ölçekleri arasında örnek başına tek hedef davranış
- [[garrod-edu-qurating-educational-data-curation-2026]] — eğitim verisini eğitim için küratörlük yapmak
- [[lora-finetuned-control-systems-course-qa-2026]] — LoRA rütbe etkileri ve bağdaştırıcı parametresi başına kazanım
- [[aiawe-automated-writing-evaluation]] — ölçeğin başarıyı öngörmediği LoRA-uyarlamalı AWE
- [[llm-graders-computer-science-exams-2026]] — ~3.900 örnekteki tek bağdaştırıcının insan puanlayıcı eşitliğine ulaşması
- [[iks-instruct-dataset-indian-knowledge]] — 24.795 örneklik bir yönerge veri kümesi ve sıfıra yakın temel taban çizgisi
- [[llm-children-reading-story-generation]] — okuma düzeyi denetimi için ölçek üzerinde denetlenebilirlik
- [[bert-discourse-english-teaching-2026]] — hangi katmanların ince ayarlanacağı ve dördünün on ikiyi neden yendiği
- [[nuclear-diffusion-text-to-image-learning-2026]] — ince ayarın işleyip işlememesine mimarinin, parametre sayısının değil, karar vermesi
- [[distilling-self-explaining-lm-learning-analytics-2026]] — 2B bir modele sadakat denetimiyle damıtma
- [[llm-unlearning-math-privacy]] — kişisel bilgi ve zararlı içeriğin gradyan tabanlı unutması
- [[reflection-level-classification-hungarian-essays-2026]] — klasik ve gömmeli taban çizgilerine karşı ince ayarlı transformer’lar
- [[multimodal-item-parameter-estimation-2026]] — çok kipli maddelerden IRT eğrileri öğrenmek
- [[know-when-to-trust-ai-scoring-reliability-2026]] — döngüde-insan politikası olarak güven yönlendirmesi
- [[shen-sustainable-ai-knowledge-base-cs-education-2026]] — enerji ve VRAM bildirilerek birinci mertebe karar olarak getiri
- [[customizing-ai-writing-pedagogy-systematic-review-2026]] — 23 çalışma: istek metni 13, ince ayar 7, melez 3
- [[gpt-item-generation-l2-listening-2026]] — istek metni platoya çıkar, sonra ince ayar kalanı ekler
- [[wraft-automated-writing-evaluation-argumentative-2026]] — ince ayar puanlamada kazandı ve geri bildirimde başarısız oldu
- [[educational-llm-alignment]] — model ve istek metni seçimi üzerinde ~yüzde 15 tavan
- [[yasar-llms-iterative-pedagogical-design-2026]] — eğitimsiz alternatif olarak rubrik rehberli istek metni
- [[zhuang-zhang-chatgpt-math-teacher-education-2026]] — yanlış kanı simülasyonu için istek metni düzeyinde persona denetimi
- [[eduframetrap-llm-sycophancy-educational-safety]] — açık bir eğitim gereksinimi olarak övüggenlik
- [[contextual-sycophancy-ai-literacy]] — istek metniden ve hizalamadan sağ çıkan övüggenlik
- [[hazra-safetutors-pedagogical-safety-2026]] — süregelen diyalogda bozulan güvenlik
- [[reddig-maclellan-personalized-feedback-llm-2026]] — eğitimsiz bir sınır modelden ~yüzde 35 kullanılamaz ipucu
- [[simulated-students-tutoring-dialogues-2026]] — simüle edilmiş öğrencilerin öğrenciler gibi davranıp davranmadığı
- [[inside-llm-student-simulator-reasoning-2026]] — bir modeli bir öğrenci gibi davranmak ve düşünmek üzere ince ayarlamak
- [[history-aware-student-simulation]] — bir öğrenenin yörüngesine koşullandırılmış simülasyon

