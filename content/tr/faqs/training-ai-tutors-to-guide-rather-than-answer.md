---
title: "Bir YZ Eğitmeni Öğrencileri Yönlendirecek, Onlara Yanıt Vermeyecek Biçimde Nasıl Eğitilir?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, checking-whether-educational-ai-works, developing-ai-tutor, ai-agents-support-students-instructors]
weight: 72
type: faq
foundations: [ai-education, agency]
pedagogy: [scaffolding, socratic-method, misconceptions]
technology: [llm-training-and-fine-tuning, intelligent-tutoring, reinforcement-learning, pedagogical-agent, llm]
assessment: [feedback]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [math education, language learning]
confidence: high
methods: [benchmark]
ethics: [ai-sycophancy, pedagogical-safety]
reviewed_by: [editor]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-10-02"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: faqs/training-ai-tutors-to-guide-rather-than-answer
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Genel amaçlı bir model, yardımseverlik insan tercihi üzerinde sonradan eğitilir ve uygulamada yardımseverlik, soruyu hızlı ve eksiksiz biçimde yanıtlamak anlamına gelir. Eğitmenlik ise bunun tersini gerektir: yanıtı hazır teslim etmek yerine öğrencinin yanıta kendisinin ulaşmasını sağlamak. Bu, eğitim YZ’sinde modelin istek metnini değil, öğrenilmiş davranışını gerçekten değiştirmeniz gerekebilecek tek alandır; aynı zamanda bu alan, disiplinin en iyi kanıtlanmış bölümüdür. Sonuçlar büyüktür ve belirleyici değişken algoritma değil, **ödül**’dür.

## Burada istek metni yazmak neden yeterli olmayabilir

[[prompt-engineering|İstek metni yazmak]] ve hatta genel uyum eğitimi bile, anlaşmaya yönelik bir eğilim bırakır. [[contextual-sycophancy-ai-literacy|Bağlamsal yağcılık]], istek metni yazıldıktan ve uyum eğitiminden sonra da sürer; öğrenenlerin hataları hâlâ YZ’nin önerilerine yansır. EduFrameTrap, bağlam değiştirme saldırılarına direnen modellerin bile otorite ya da sosyal-duygusal baskı altında pes ettiğini ve düzeltici geri bildirimi sakladığını gösterir — bu yüzden yazarları “nazik ama doğru” davranışın bir tercih değil, **açık bir eğitim gereksinimi** olması gerektiğini savunur ([[eduframetrap-llm-sycophancy-educational-safety]]).

Eğitmenin arıza biçimi yanlış bir yanıta katılmaksa, ona katılmamasını söylemek bir çözüm değil, bir hafifletme yöntemidir.

## Ödül, tasarımın tamamıdır

Ödül, istediğiniz şeyin sıkıştırılmış bir şartnamesidir ve modeller gerçekten yazdığınız her şeyi optimize eder. Bu durum, ödül tasarımını süreçteki en yüksek etkili karar haline getirir ve buradaki en iyi sonuç tam olarak burada kazanılmıştır.

EduQwen’in ödül modeli, **doğrudan yanıtlara karşı yönlendirici yanıtlara öncelik verdi**; temel modelin hâlihazırda çözdüğü soruları elemek için zor-negatif madenciliği kullandı ve çok adımlı pedagojik kararların yakalanabilmesi için açılımları 5 adımdan 8 adıma çıkardı. Üç aşamalı hattı — başlangıç RL’i, sentetik SFT, son RL — CDPK kıyaslamasında Gemini-3 Pro’nun **%90,55**’ine karşılık **%96,52**’ye ulaştı ([[singh-eduqwen-pedagogical-rl-2026]]).

Buradan doğrudan iki sonuç çıkar. Birincisi, ödülün oynanacağını bekleyin: amaçladığınızdan daha az şey belirtir, bu yüzden onu bir sezgiye karşı değil, bir kıyaslamaya karşı yazın. İkincisi, ara sayılar öğreticidir — yalnızca ilk RL aşaması %94,13’e ulaştı, 40.000 kendi ürettiği yanıt üzerinde SFT bunu %96,20’ye çıkardı ve son RL turu son kırıntıyı ekledi. Kazancın çoğu erken aşamada geldi.

## Pedagoji için pekiştirmeli öğrenme, taklit çalışmasını geçer

Yalnızca denetimli ince ayar (SFT) yaparsanız, modele gösterilerinizi taklit etmeyi öğretirsiniz. Bu, biçim için yeterlidir ve yargı için yeterli değildir. LearnLM’in bulgusu açıktır: **uzun konuşmalarda incelikli pedagojik talimatları izlemede RL, tek başına SFT’den belirgin biçimde daha etkilidir** ([[learnlm-improving-gemini-learning]]).

Talimat koşullu çerçevelemesi aynı zamanda geliştiricilerin ve öğretmenlerin, pedagojinin tek bir tanımına bağlı kalmadan eğitmen davranışını belirtmesine olanak tanır ve bu davranış, ortak eğitim yoluyla Gemini’nin sonradan eğitim aşamalarına karıştırılır. Uzmanlar bunu GPT-4o’ya göre (**+%31**), Claude 3.5 Sonnet’a göre (**+%11**) ve temel Gemini 1.5 Pro’ya göre (**+%13**) tercih ettiler.

## Süreci denetleyin, yanıtı değil

Bu alandaki tek başına en uygulanabilir bulgu, *eğitim verisinin ne içermek zorunda olduğuna* ilişkindir. Talimatla ince ayarlanmış modeller yalnızca **adım düzeyinde çözüm izleri** üzerinde eğitildiklerinde cebir yanlış kanılarını öğrendiler. Yalnızca nihai yanıtlar üzerinde eğitildiklerinde doğruluk her veri boyutunda **%30’un altında** kaldı ([[misconception-acquisition-dynamics-llms-2026]]).

Bir eğitmenin her iki tarafını da inşa eden herkes için o çalışmadan çıkan iki ayrıntı önemlidir:

- **Öğrenci** rolü, doğru örnekler açıkça karıştırılana kadar öğrenilen hatayı aşırı genellemeye yönelikti; bu, **dörtte bir** gibi düşük oranlarda bile yeterli oldu.
- **Eğitmen** rolünde böyle bir bedel görülmedi; doğruluk, ortaklaşa eğitilen on yanlış kanı boyunca **%93 ile %98** arasında sabit kaldı.

Bir eğitmeni teşhis etmek üzere eğitiyorsanız, örneklerinizde karardan çok akıl yürütme olması gerekir. Soru–doğru yanıt çiftlerinden oluşan bir veri kümesi, bir modele öğrencinin nerede hata yaptığını fark etmeyi öğretemez.

## Eğitim verisinin pedagojiyi taşımasını sağlayın

Denetimin akıl yürütme içermek zorundaysa, etiketleme şeması bir veri temizleme adımı değil, bir müfredat kararıdır. Bunu doğrudan etkileyen iki sonuç vardır.

**Her örneği, istediğiniz davranışla etiketleyin.** Denetim etiketleri üzerine bir çalışma, her eğitim örneğine tek bir hedef davranış — alan yetkinliği, müfredata dayanma, teşhis akıl yürütmesi ya da iskeleleme — atanmasının test edilen her model ölçeğini yükselttiğini buldu; en büyük kazançlar iskelelemede ve öğrenenin geçmişini kullanmada oldu. Bilgi durumu teşhisi **%54,04**’te en zayıf davranış olarak kaldı ve bu, taşımaya değer yararlı bir beklentidir: teşhis, bu listedeki öğretilmesi en zor şeydir ([[omniedu-open-educational-foundation-models-2026]]).

**Veri seçimini kendi başına bir eğitim problemi olarak ele alın.** Edu-QuRating, eğitim verisi seçkisinde tercih damıtmayı uyarlar; tek bir “bu eğitim amaçlı mı?” puanının yerine gerçek doğruluğu, pedagojik yapıyı ve düzey uygunluğunu kapsayan **20 yönergen boyutunu** koyar ([[garrod-edu-qurating-educational-data-curation-2026]]). Web metninden bir derlem oluşturuyorsanız, modelinizin nasıl konuşmayı öğreneceğine karar veren türden bir süzgeç işte budur.

## Ödül yoğunluğu, ödül kadar önemlidir

İlgilendiğiniz şeyin birkaç boyutu olduğunda tam eşleşme ödülü çok seyrektir. SWIM’in yazma simülatörü ilerleyişi net biçimde gösterir:

- Yönerge temelli istek metni: en iyi ortalama nitelik QWK **0.577** (Claude Sonnet), **0.422** (GPT-5.4), açık kaynak bir 7B model için neredeyse sıfır
- Denetimli ince ayar: o 7B model için **0.474 ± 0.023**
- Yoğun, niteliğe normalize edilmiş bir doğruluk ödülüyle GRPO: her nitelik ve istek metni için **0.618 ± 0.005** ([[swim-student-writing-simulation-2026]])

Asıl olan ödül tasarımıydı: tam eşleşme yerine yoğun, niteliğe normalize edilmiş bir sinyal; çünkü çok nitelikli bir ortamda tam eşleşme çok seyrektir. Ödülünüz yalnızca kusursuz bir yanıtta ateşleniyorsa, eğitim sinyalinizin çoğu sessizliktir.

## Kararı eğitin, yalnızca söylemi değil

Sonradan eğitim, yalnızca modelin ne söylediğini şekillendirmek zorunda değildir. TACT, bir eğitmeni 13 stratejilik bir taksonomi ve iki eksenli bir öğrenci hamlesi taksonomisi üzerinde sonradan eğitti ve Qwen3.5-4B omurgasına göre **20,30 puan** kazandı; burada modelin durumu diyalogdan çıkarması gerektiği için eğitim sırasında erişilebilir olan **öğrenen durumu etiketlerini saklayan** bir teşhis kıyaslaması kullanıldı ([[tact-pedagogically-adaptive-esl-tutoring]]).

Aynı mantık [[special-education|özel eğitim]] uyumunda ([[special-r1-rl-special-education]]) ve modelleri yanıtlayıcılar yerine Sokratik kılavuzlar olarak hizaya getiren sezgisel RL çalışmasında da işler ([[wang-socratic-guides-heuristic-reinforcement-learning-2026]]). Bir platform daha da ileri gider ve düzyazı değil, *politikayı* eğitir: bir pekiştirmeli öğrenme ajanı sıradaki alıştırma problemini seçer, böylece öğrenenin sırada ne yapacağına eğitilmiş model karar verir ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026]]).

## Ne tür veriye ihtiyacınız var?

Mekânı tanımlayan iki karşıt bahis vardır ve hangisini seçeceğiniz, hâlihazırda neyin elinizde olduğuna bağlıdır:

- **Veriniz kıttansa talimat koşullu sonradan eğitim.** LearnLM, öğretmenlerin ve geliştiricilerin eğitmen davranışını belirtmesine olanak tanıyan sistem düzeyi talimatlar taşır ve eğitim dökümlerinden oluşan büyük bir derleme yerine ortak eğitime dayanır.
- **Elinizde varsa özgün etkileşim verisi üzerinde ince ayar.** TeachLM, [[prompt-engineering|istek metni mühendisliğinin]] bir geçici çözüm olduğunu ve kıt olan unsurun gerçek öğrenen–eğitmen etkileşimi olduğunu öne sürer. Katı anonimleştirme altında bire bir oturumların **100.000 saati** üzerinde eğitilen TeachLM, öğrenci konuşma süresini ikiye katlar, sorgulama biçimini iyileştirir ve diyalog turlarını **%50** artırır ([[teachlm-post-training-llms-education]]).

Pedagojik davranışa giden daha ucuz bir yol ise damıtmadır: Pedagogy-R1 (1.5B ve 7B), bir QwQ-32B öğretmenden damıtılan, pedagojik olarak süzülmüş çıktılar üzerinde Chain-of-Pedagogy istek metniyle birlikte talimatla ince ayarlandı ([[lee-pedagogy-r1-pedagogical-large-reasoning-model-2025]]).

## Onu konuşma uzunluğunda test edin

Eğitim, bir modeli uzun bir konuşma boyunca güvenli yapmaz. SafeTutors, uzmanlaşmış pedagojik modellerin bile süregelen diyalogda bozulduğunu ve yanıt aşırı açıklama zararları işleyebildiğini gösterir ([[hazra-safetutors-pedagogical-safety-2026]]). [[pedagogical-safety|Pedagojik güvenlik]], tek tur yerine konuşma uzunluğunda test edilmek zorundadır — öğrencinin hatalı olduğu, ısrarcı olduğu ya da baskı yaptığı turlar dâhil.

## Bundan sonra nereye gidilmeli

- [[making-ai-better-at-supporting-learning|YZ’yi kendi alanımızda öğrenmeyi destekleyecek biçimde nasıl daha iyi hale getirebiliriz?]] — eğitimin hiç doğru kaldıraç olup olmadığı
- [[checking-whether-educational-ai-works|Bir eğitim YZ’sinin doğru çalıştığını, yalnızca iyi puan aldığını değil, nasıl anlarız?]] — davranışın gerçekten değişip değişmediğini ölçmek
- [[developing-ai-tutor|Etkili bir YZ eğitmeni geliştirmek için en iyi uygulamalar nelerdir?]] — etkileşim tasarımı karşılığı; aynı yönlendirici davranışı eğitim yoluyla değil, iskeleleme ve ipucu merdiveni yoluyla şekillendirir
- [[llm-training-and-fine-tuning]] — kavram sayfasının tamamı
