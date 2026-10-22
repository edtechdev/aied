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
reviewed_by: [editor]
contributors: [editor]
translation_of: faqs/making-ai-better-at-supporting-learning
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
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

Genel amaçlı bir model bir öğrencinin sorusunu onun adına memnuniyetle yanıtlar; müfredatınızı, rubriğinizi ya da öğrencilerinizin gerçekten yaptığı hatalar hakkında hiçbir şey bilmez. Bu boşluğu kapatmak genellikle bir eğitim (training) problemi olarak çerçevelenir. Bu bilgi tabanında bu çoğunlukla bir **temellendirme ve istek metni** problemidir ve bu sıralamayı destekleyen kanıtlar olağandışı biçimde doğrudandır: bir ders asistanı çalışmasında birinci derecede kararın model değil erişim (retrieval) olduğu, temellendirme içermeyen genel bir modelin ise düz bir TF-IDF taban çizgisinin *altında* kaldığı bulunmuştur.

Eğitim (training) gerçektir ve bazen gereklidir, ama denenmesi gereken ilk şey değil üçüncü ya da dördüncü şeydir. Aşağıda, boşa harcanan hesaplama gücünden kaçınan sırayla merdiven yer almaktadır.

## Kısa özet

Maliyet ve bağlılık açısından artan sırada beş kaldıraç vardır: **istek metni (prompting)**, kendi materyalleriniz üzerinde **erişim (retrieval)**, **parametre-verimli uyarlama** ([[llm-training-and-fine-tuning|LoRA]] ve benzerleri), **tam ince ayar (full fine-tuning)** ve tercih ya da ödül sinyalleriyle **eğitim sonrası süreç (post-training)**. Her basamak bir altındakinden daha fazla veri, daha fazla hesaplama gücü ve daha fazla değerlendirme disiplini gerektirir; bir ölçüm tırmanışı haklı çıkarmadıkça her biri daha kötü bir ilk seçimdir.

Araştırma literatürü çoğunlukla bu merdivenin tepesini rapor ettiği için, temellendirmenin yeterli olacağı durumlarda eğitime uzanmak kolaydır.

## Adım 1: Gerçekten geçebileceğiniz bir taban çizgisi elde edin

Bir şeyi değiştirmeden önce, düz bir istek metninden ne elde ettiğinizi kaydedin. Sonra sıradan bir yöntemin ne elde ettiğini kaydedin; sizi dürüst tutan sayı odur.

[[shen-sustainable-ai-knowledge-base-cs-education-2026|Ders bilgi tabanı asistanı]] çalışması tek başına bunun için okunmaya değerdir. Hiçbir erişim içermeyen yerel bir LLM **%52,3** doğruluk elde etti. Onlarca yıllık sözlüksel bir yöntem olan TF-IDF taban çizgisi **%55,4** elde etti. Model klasik yöntemden daha kötüydü.

Bu adımı atlarsanız ince ayarınızın işe yarayıp yaramadığını söyleyemez ve bir anahtar kelime aramasının geçebileceği bir şeyi yayına sunmuş olabilirsiniz.

## Adım 2: Modeli kendi materyallerinizle temellendirin

Ders materyalleri üzerinde hiç ince ayar yapılmaksızın [[rag|erişimle güçlendirilmiş üretim (retrieval-augmented generation)]] eklenmesi, aynı sistemi %52,3’ten **%66,6**’ya yükseltti. Bu, maliyetine göre bu bilgi tabanında rapor edilen en büyük tek kazanımdır ve geri alınabilirdir: belgeleriniz değiştiğinde yeniden eğitmek yerine yeniden indekslersiniz.

İki başka sonuç da aynı yönü göstermektedir. [[writing-education|Yazma eğitimi]] için YZ’yi özelleştirmeye ilişkin 23 ampirik çalışmanın PRISMA gözden geçirmesi, **istek metni mühendisliğinin baskın olduğunu (N = 13), ince ayarın önüne geçtiğini (N = 7)** bulmuştur ([[customizing-ai-writing-pedagogy-systematic-review-2026]]). Bir bilgi tabanının güncel kalması gerektiği yerlerde ise erişim, bir eğitim işini yeniden çalıştırmadan güncel kalan tek kaldıraçtır.

Erişimin pedagojik bir biçimi de vardır. Modeli kendi çözümlü örnekleriniz ve rubriklerinizle temellendirmek, onun tasarladığınız [[scaffolding|iskele]] içinde kalmasını, jenerik tavsiyelere sürüklenmek yerine sağlayan şeydir.

## Adım 3: İstek metnini bir rubriğe karşı tasarlayın

İstek metni çalışması, eğitimi beklerken yapılan geçici bir hazırlık değildir. Buradaki iki sonuç, onun tek başına ne elde ettiğini göstermektedir:

- **Yinelemeli biçimde birlikte iyileştirilen rubrik esinli istek metni, öğrenci tasarım çalışmalarında LLM–insan uyumunu %54,75’ten %81,25’e yükseltmiştir** (Cronbach Alfa 0,393 → 0,798), hiç ince ayar yapılmadan ([[yasar-llms-iterative-pedagogical-design-2026]]).
- Literatüre dayalı özel bir istek metni, hedeflenen matematiksel [[misconceptions]]’ın varlığını **0,98** düzeyinde ortaya çıkarmıştır; geniş kapsamlı bir istek metni için bu değer **0,40** olmuştur ([[zhuang-zhang-chatgpt-math-teacher-education-2026]]).

Pratik sinyal **düzlük (plateau)**’tır. Madde üretimi çalışmasında yinelemeli istek metni iyileştirmesi ilerlemeyi durdurmuş, ardından *iyileştirilmiş istek metni üzerinde* GPT-4.1’in ince ayarı kalan kazanımı sağlamıştır ([[gpt-item-generation-l2-listening-2026]]). Gerçek istek metni çalışmasından sonra gelen bir düzlük, eğitimin bir şeyler katabileceğine dair kanıtınızdır. Böyle bir düzlüğe ulaşmadan eğitime uzanmak tahmin etmektir.

## Adım 4: Hedef kararlı ve özgü olduğunda modeli uyarlayın

Modelin bir özelliği güvenilir biçimde sürdürmesini istediğinizde uyarlama karşılığını verir: bir okuma düzeyi, bir çıktı biçimi, sahip olmadığı bir alan. Tekrarlayan sonuç, **hedeflemenin boyutu yendiğidir**.

- Uzmanların tasarladığı bir çocuk okuma müfredatı üzerinde ince ayar yapılan üç **8B** model, güçlük ölçütlerinde sıfır atımlı GPT-4o ve Llama 3.3 70B’yi geride bırakmış, ihmal edilebilir güvenlik sorunları yaşanmıştır. Yazarlar bunu **ölçek üzerinde denetim yetkisi (controllability over scale)** olarak çerçevelemektedir ([[llm-children-reading-story-generation]]).
- Hint Bilgi Sistemleri’ne (Indian Knowledge Systems) dayalı **24.795 örnekli** bir yönerge veri kümesi, beş hakemli bir dış panelde **6,39** puan alan bir **7B** ince ayar üretmiştir; bu puan güçlü bir genel referans modeline **0,15** mesafededir ve dağıtım maliyetinin yalnızca bir kesrini gerektirir — oysa aynı taban model ince ayar olmaksızın alana özgü boyutlarda **sıfıra yakın** puan almıştır ([[iks-instruct-dataset-indian-knowledge]]). "Genel olarak yetkin" ile "burada yetkin" arasındaki bu boşluk, alan uyarlamasının tüm gerekçesidir.
- Yaklaşık **3.900** birleştirilmiş notlandırılmış örnek üzerinde eğitilmiş tek bir [[llm-training-and-fine-tuning|LoRA]] bağdaştırıcısı, beş küçük açık modeli (4B–30B) iki bilgisayar bilimi sınavında insan bir notlandırıcıyla eşit ya da daha iyi düzeye getirmiştir ([[llm-graders-computer-science-exams-2026]]). Bir bağdaştırıcı, bir veri kümesi, birkaç taban model: küçük bir ekibin gerçekten çalıştırabileceği dağıtımın şekli budur.

Başlıktaki *kararlı* sözcüğüne dikkat edin. Biçim, rubrik, okuma düzeyi ve alan söz varlığı kararlı hedeflerdir. Yargı yüklü düz metin kararlı değildir ve uyarlamanın başarısız olduğu yer burasıdır.

## Adım 5: Ürettiği şeyi değil davrandığı biçimi değiştirin

Uyarlama modele *ne üreteceğini* öğretir. Eğitim sonrası süreç ona *nasıl davranacağını* öğretir ve özel ders için bu ayrım bütün problemdir: genel modeller yardımseverlik konusunda insan tercihiyle eğitilmiştir, yani hemen yanıt verirler; oysa öğretmenin cevabı geri tutması gerekir.

En güçlü eğitim sonuçlarının bulunduğu yer burasıdır. EduQwen’in ödül modeli açıkça **doğrudan yanıtlara karşı yönlendirici yanıtları** önceliklendirmiş, üç aşamalı boru hattı ise CDPK kıyaslamasında Gemini-3 Pro’nun **%90,55**’ine karşılık **%96,52** elde etmiştir ([[singh-eduqwen-pedagogical-rl-2026]]). SWIM’in yazma simülatörü, her nitelik ve istek metni için rubrik esinli istek metninden (en iyi QWK **0,577**) denetimli ince ayara (**0,474 ± 0,023**), oradan pekiştirmeli öğrenmeye (**0,618 ± 0,005**) geçmiştir ([[swim-student-writing-simulation-2026]]).

Bu alandaki bir bulgu gözden kaçırması kolay, göz ardı etmesi pahalıdır: **denetimin niteliği, denetimin niceliğini yener**. Yönerge-ince ayarlı modeller cebir yanlış kanılarını yalnızca **adım düzeyinde çözüm izleri** üzerinde eğitildiklerinde öğrenmiştir; yalnızca son yanıtlarla eğitilenlerde doğruluk her veri boyutunda **%30’un altında** kalmıştır ([[misconception-acquisition-dynamics-llms-2026]]). Eğitim örnekleriniz soru-doğru yanıt çiftleriyse, yanlış şeyi eğitiyorsunuz.

## Model uyarlamasının işe yaramadığı durumlar

Heyecanın genellikle atladığı kısım budur.

- **Yargı yüklü metin.** WrAFT’te *puanlama* için başarılı biçimde ince ayar yapılan aynı proje, *geri bildirim* için ince ayar yapıldığında kesilen ve çözümlenemeyen çıktı üretmiş; oysa Claude 3.7’yi doğrudan yönlendirmek öğretmenlerin en iyi bulduğu geri bildirimi vermiştir ([[wraft-automated-writing-evaluation-argumentative-2026]]). İnce ayar modele bir puana vurmayı öğretti; yazmayı öğretmedi.
- **Ölçek**, LoRA uyarlaması altında aşaş akım performansının güvenilir bir öngörücüsü değildir ve **aynı hiperparametreler mimariler arasında nitel olarak farklı davranışlar üretmiştir** ([[aiawe-automated-writing-evaluation]]). Bir modelde işe yarayan bir tarif, tarif değildir.
- **Mimari, parametre sayısından daha önemli olabilir.** Üç açık metinden-görüntüye modelin 1.000 altyazılı nükleer mühendislik görüntüsü üzerinde ince ayarı Stable Diffusion XL’yi önemli ölçüde iyileştirmiş, SD-v3.5-Medium için sınırlı kazanımlar sağlamış ve Flux.1 için **hiçbir ölçülebilir iyileşme** üretmemiştir ([[nuclear-diffusion-text-to-image-learning-2026]]).
- **Bazen yanıt, eğitim yerine doğrulamadır.** Eğitim sonrası süreçten geçmemiş önde gelen bir GPT-4, özel ders geri bildirimi yazarken yaklaşık **%35** oranında aşırı genel, hatalı ya da cevabı açığa çıkaran ipuçları üretmiş ve kendi otomatik kalite kontrolleri insan yargısıyla çelişmiştir ([[reddig-maclellan-personalized-feedback-llm-2026]]).

## Pratikte ne gerekir

Uyarlama basamağı için eşik, çoğu ekibin sandığından düşüktür: **birkaç yüzden birkaç bine örnek ve tek bir GPU**. LoRA az sayıda ek parametre eğitir ve taban ağırlıklarını donmuş bırakır; böylece birkaç model tek bir bağdaştırıcıdan sunulabilir.

Rank, çıkarılacak bir düğme olmaktan çok bir ödünleşimdir: milyon bağdaştırıcı parametresi başına kazanç, rank yükseldikçe tek düze azalmış; ders düzeyinde hizalama bir ölçek-rank kararı olup bedelsiz bir yükseltme olmamıştır ([[lora-finetuned-control-systems-course-qa-2026]]). Hangi katmanları uyarladığınız da gerçek bir seçimdir: BERT tabanlı bir söylem çözümleyicinin **yalnızca son dört Transformer katmanını** güncellemesi, yalnızca en üst katmanı uyarlamayı ve tam derinlikte ince ayarı geçmiştir ([[bert-discourse-english-teaching-2026]]).

Hafife alınması kolay olan maliyet, hesaplama gücü değil değerlendirmedir. Bakınız: [[checking-whether-educational-ai-works|Bir eğitim YZ’sinin yalnızca iyi puan almakla kalmayıp doğru biçimde çalışıp çalışmadığını nasıl anlarız?]]

## Beklentilerinizi ayarlayın

Model ve istek metni seçimi birlikte, LLM’ler ile öğrenci öğrenme kazanımları arasındaki uyumsuzluğun yalnızca yaklaşık **%15**’ini açıklamaktadır; o çalışmada kıyaslama ağırlıklandırma ve oy birliğiyle oylama toplulukları hizalamayı *daha kötü* yapmıştır ([[educational-llm-alignment]]). Modelin nasıl davrandığı üzerindeki baskın kaldıraç ön eğitim verileridir ve çekemediğiniz tek kaldıraç odur.

Bu, yukarıdaki çalışmalara karşı bir argüman değildir; bir ince ayarın bir tasarım problemini düzelteceğini beklemeye karşı bir argümandır. Soru, özel dersinizin çok kolay yanıt vermesi ise eğitim bunu ele alabilir. Soru, öğrenenlerinizin onunla etkileşime girmemesi ise eğitim bunu çözmeyecektir.

## Kısa bir karar sırası

**1.** Yalnızca istek metni içeren bir taban çizgisi kaydedin, sıradan bir tanesini de ekleyin.
**2.** Kendi materyalleriniz üzerinde erişim ekleyin.
**3.** İstek metnini rubriğinize karşı yinelemeli biçimde tasarlayın ve düzlüğü izleyin.
**4.** Hedef kararlı bir biçim, rubrik, düzey ya da alan olduğunda modeli LoRA ile uyarlayın.
**5.** Yalnızca *nasıl* davrandığını değiştirmeniz gerektiğinde eğitim sonrası süreç uygulayın ve ödülü bir kıyaslamaya karşı yazın, çünkü ona oyun oynanacaktır.
**6.** Denetimi yanıt düzeyinde değil adım düzeyinde yapın.
**7.** Güvenin düşük olduğu yerlerde döngüde bir insan tutun.
**8.** Güvenliği tek turlar yerine bütün konuşmalar boyunca sınayın.

## İlgili sorular

- [[training-ai-tutors-to-guide-rather-than-answer|YZ özel dersini öğrencilere yanıt vermek yerine yönlendirecek biçimde nasıl eğitiriz?]] — eğitim sonrası yarısı ayrıntılı
- [[checking-whether-educational-ai-works|Bir eğitim YZ’sinin yalnızca iyi puan almakla kalmayıp doğru biçimde çalışıp çalışmadığını nasıl anlarız?]] — bunların hiçbiri işe yaradı mı nasıl anlaşılır
- [[developing-ai-tutor|Etkili bir YZ özel dersi geliştirmenin en iyi uygulamaları nelerdir?]] — aynı hedefin etkileşim tasarımı tarafı
- [[designing-educational-ai-software|Etkili eğitim YZ yazılımı tasarlamaya ilişkin en iyi uygulamalar ve ipuçları nelerdir?]]
- [[llm-training-and-fine-tuning]] — eksiksiz kavram sayfası
