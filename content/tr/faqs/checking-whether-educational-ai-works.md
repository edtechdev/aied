---
title: "Bir Eğitim YZ'sinin Doğru Çalışıp Çalışmadığını Yalnızca İyi Puan Aldığını Değil Nasıl Anlarız?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [making-ai-better-at-supporting-learning, training-ai-tutors-to-guide-rather-than-answer, reporting-interpreting-aied-research, evaluating-ai-interventions-methods]
weight: 73
type: faq
foundations: [ai-education]
pedagogy: [scaffolding]
technology: [llm-training-and-fine-tuning, llm, intelligent-tutoring, simulating-students, human-in-the-loop-ai]
assessment: [assessment-validity, educational-measurement, automated-assessment, ai-feedback-quality]
audience: [educational technology developers, software developers, researchers]
level: [higher ed, k 12]
discipline: [writing education, math education]
confidence: high
methods: [benchmark, ai-ed-evaluation]
ethics: [pedagogical-safety, trust-calibration]
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
translation_of: faqs/checking-whether-educational-ai-works
source_updated: "2026-10-22T09:11:45-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Bir eğitim YZ'si, çalışmıyorken çalışıyor gibi görünebilir. En sık gördüğünüz puanlar — modelin yanıtının doğru bir yanıta ne kadar benzediği veya verdiği notların bir insanınkilerle ne kadar örtüştüğü — gerçekten önemsediğiniz şey bozukken güçlü görünebilir.

Bu bilgi tabanındaki bir projede, aynı sistem kompozisyon notlandırma için iyi bir uyum puanı kazanmış ve aynı dağıtımda cümle ortasında kesilmiş ve okunamaz geri bildirim üretmiştir. Notlandırma işe yarıyordu. Geri bildirim yaramıyordu. Manşet sayı bunu söylemiyordu.

Bu sayfa aradaki farkı anlamakla ilgilidir ve hiçbir ölçüm geçmişi varsaymaz.

## Alışılmış puanların aslında ne ölçtüğü

Bu literatürde iki tür sayı baskındır ve ikisi de **doğruluktan ziyade benzerliği** ölçer.

- **Benzerlik puanları** (ROUGE ve BLEU olarak görürsünüz) modelin yanıtının ifadesini bir referans yanıtın ifadesiyle karşılaştırır. Beklenen metne yakın bir şey yazan bir model iyi puan alır — akıl yürütmesi yanlış olsa bile ve bir öğrenci hiçbir şey öğretmeyen bir yol üzerinden doğru yanıta ulaşsa bile.
- **Uyum puanları** (QWK veya quadratic weighted kappa olarak görürsünüz) modelin notlarının bir insanın notlarıyla ne kadar hizalandığını ölçer. Bir model nihai notta notlandırıcıyla hemfikir olurken öğrencinin öğrendiği kısım olan *nedeni* konusunda yanlış olabilir.

Bir öğrenci, doğru gibi görünen yanlış bir yol üzerinden yanlış bir yanıta ulaşabilir ve hiçbir benzerlik puanı bunu fark etmez. Önemsediğiniz şey akıl yürütme ise, akıl yürütmeyi okuyan bir şeye ihtiyacınız vardır — bir insan tarafından uygulanan bir rubrik veya o belirli adım için yazılmış bir denetim.

Linear Control Systems kurs asistanı, bunu dürüst biçimde raporlayan bir ekibin iyi bir örneğidir. En iyi yapılandırması referans yanıtlara karşı **0.4093** benzerlik puanına ulaşmış, iyileştme güvenilir biçimde sıfırın üzerinde ölçülmüştür ve yazarlar sayılarının ifadeyi ve biçimi ölçtüğünü açıkça belirtmiştir ([[lora-finetuned-control-systems-course-qa-2026]]).

## Bir sistem bir testten geçip bir sonrakinden geçemeyebilir

Bu, bilgi tabanındaki en faydalı derstir çünkü insanları tuzağa düşüren budur.

WrAFT projesinde, ince ayarlı bir model 360 ayrılmış TOEFL kompozisyonunda insan notlandırıcılarla **0.84** uyum puanına ulaşmıştır. Bu *notlandırma* için güçlü bir sonuçtur. Aynı projenin *geri bildirim yazmayı* öğrendiği modeli ise kesilmiş ve ayrıştırılamaz çıktı üretmiştir — oysa basitçe farklı bir modelden istek metniyle yanıt alınması öğretmenlerin tercih ettiği geri bildirimi üretmiştir ([[wraft-automated-writing-evaluation-argumentative-2026]]).

Dolayısıyla sisteminizin ürettiği her çıktıyı tek tek değerlendirin. Notlandırma modülündeki iyi bir puan, yanındaki geri bildirim modülü hakkında size hiçbir şey söylemez.

## Otomatik denetleyicinizin insanlarla uyumlu olup olmadığını kontrol edin

Pek çok ekip artık birincisini denetlemek için ikinci bir YZ kullanmaktadır. Bu makuldür, ancak ikinci YZ otomatik olarak doğru değildir.

Sınırda olan bir modelden bir [[intelligent-tutoring|akıllı özel ders sistemi]] için ipuçları yazmasını isteyen bir çalışma, bunların yaklaşık **%35**'inin fazla genel, hatalı olduğunu veya yanıtı ele verdiğini bulmuştur — ve modelin kendi otomatik kalite denetimleri, hangilerinin kötü olduğuna dair insan yargısıyla çelişmiştir ([[reddig-maclellan-personalized-feedback-llm-2026]]).

Pratik sürümü: yaklaşık elli çıktıdan bir örneklem alın, bir insanın bunları derecelendirmesini sağlayın ve bunu otomatik denetleyicinizin derecelendirmeleriyle karşılaştırın. İkisi çelişiyorsa, otomatik sayınız kanıt değildir.

## Bir puanı hareket edebileceğiniz bir kurala dönüştürün

Bir korelasyon, modelin genellikle doğru olduğunu söyler. Doğru olmadığı durumlarda ne yapacağınızı söylemez. Güven yönlendirme sonucu buradaki en net şablondur ve kopyalaması yeterince basittir.

Güvenin güvenilir bir uyarı işareti olduğu ortaya çıkmıştır: model emin olmadığında, yanlış olma olasılığı daha yüksekti (**β = −0.602, p < .001**). Dolayısıyla ekip, en az güven duyulan yanıtların **%20**'sini bir insana göndermiştir. Tek başına bu kural, insan notlarıyla uyumu **0.78'den 0.82'ye** yükseltmiş ve elle notlandırma işini yaklaşık **%80** azaltmıştır ([[know-when-to-trust-ai-scoring-reliability-2026]]).

Raporun ne içerdiğine dikkat edin: bir eşik, bir insan ve bir tasarruf. "Uyum 0.84" bunların hiçbirini içermez; hareket edilmesini zor kılan şey budur.

## Yapabildiğinizde şeyin kendisini ölçün

En temiz çözüm, modeli ölçmeyi amaçladığınız büyüklük üzerinde eğitmektir. İnce ayarlı bir model, sınav sorularının istatistiksel özelliklerini — her sorunun ne kadar zor olduğunu ve güçlü ile zayıf öğrencileri ne kadar iyi ayırdığını betimleyen sayıları — yeniden üretmek üzere eğitilmiş ve bu örüntüleri söylenilmek yerine öğrenmiştir ([[multimodal-item-parameter-estimation-2026]]). Hedef, değerlendirmenin kendisinin bir özelliği olduğundan, değerlendirme ifade hakkında değil, bu özellik hakkında olabilir.

Uç noktayla birlikte ilerlemeyi de raporlayın. SWIM'in yazma simülatörü her aşamanın puanını yan yana yayımlamıştır — rubrik temelli istek metniyle yönlendirme **0,577**, ince ayar **0,474 ± 0,023**, pekiştirmeli öğrenme **0,618 ± 0,005** ([[swim-student-writing-simulation-2026]]) — bu, bir okuyucunun eğitimin bir şey yapıp yapmadığını görüp göremediğini sağlayan şeydir. Tek bir nihai sayı bunu onlara söyleyemez.

## Güvenliği tek bir yanıt yerine tüm bir konuşma üzerinden sınayın

Çoğu güvenlik sınaması tek bir değişimi denetler. Özel ders desteğinde önemli olan zararlar birikir. SafeTutors, özel olarak öğretim için kurulmuş modellerin bile uzun bir konuşma boyunca bozulduğunu ve saklamaları gereken yanıtları ifşa edebildiğini bulmuştur ([[hazra-safetutors-pedagogical-safety-2026]]).

Güvenlik denetimini tam konuşmalar üzerinden çalıştırın ve öğrencinin yanlış olduğu, üstelemeye devam ettiği veya modeli rolünden çıkarmaya çalıştığı turları dahil edin.

## Sahte öğrencilerle sınarsanız, önce sahte öğrencileri denetleyin

Gerçek öğrenci işe almak yerine simüle edilmiş öğrenci üretmek, değerlendirmeyi çok daha ucuz hale getirir. Ancak simüle edilmiş bir öğrenci bir ölçüm aracıdır ve herhangi bir aracın yanılabilidiği biçimlerde yanılabilir.

Bilgi tabanındaki en doğrudan sınav, simüle edilmiş ve istek metniyle yönlendirilmiş öğrencileri, dili, davranışı ve düşünmeyi kapsayan yedi ölçüt kullanarak, gerçek öğrenci–özel ders matematik konuşmalarının en büyük halka açık koleksiyonundan alınan **382 ayrılmış diyaloga** karşı kıyaslamıştır ([[simulated-students-tutoring-dialogues-2026]]). Diğer çalışmalar gerçekçiliği farklı açılardan zorlar: [[inside-llm-student-simulator-reasoning-2026|INSIDE]] modelleri hem *davranmayı* hem öğrenciler gibi *düşünmeyi* öğretir ve tarih farkında profiller, sabit bir kişilik yerine bir öğrencinin geçmişine göre simülasyonu koşullandırır ([[history-aware-student-simulation]]).

Sınama düzeneğiniz simüle edilmiş bir öğrenciyse, simülatörün özel ders desteğiniz hakkında söylediklerine güvenmeden önce onu denetleyin.

## Kendi projenizin dışındaki bir şeyle karşılaştırın

Kendi taban çizginiz yoksa, dış bir kıyaslama sayınızın iyi olup olmadığını söyler. CDPK pedagoji kıyaslamasında EduQwen, Gemini-3 Pro'nun **%90,55**'ine karşılık **%96,52**'ye ulaşmıştır ([[singh-eduqwen-pedagogical-rl-2026]]). Gerçek öğretmen mesleki gelişim sınavlarından oluşturulan ve **97 modeli** kapsayan Pedagogy Benchmark, **%28 ile %89** arasında değişen doğruluk bulmuştur ([[cdpk-pedagogy-benchmark-llms|Lelièvre et al., 2025]]).

Bu yayılım asıl mesele budur: öğretmeyle ilgili bir görevde modeller kötüden iyiye değişmiştir. Kıyaslama sonuçlarını bir hüküm olarak değil, içinde yer aldığınız bir aralık olarak okuyun.

## Yayımlamadan önce bir denetim listesi

**1.** Gerçekten neyi önemsediğinizi tek cümleyle yazın ve benzerlik yerine *onu* yakalayan bir ölçüt seçin.
**2.** Önce basit bir taban çizgisi dahil bir taban çizgisi alın. Temellendirmesiz kurs asistanı modeli düz bir anahtar sözcük aramasının altında puan almıştır.
**3.** Sisteminizin ürettiği her çıktıyı ayrı ayrı denetleyin.
**4.** Bir insanın bir örneği derecelendirmesini sağlayın ve otomatik denetleyicinizle karşılaştırın.
**5.** Doğruluğu bir kurala dönüştürün: bir eşik, bir insan ve bir tasarruf.
**6.** Güvenliği tüm konuşmalar üzerinden sınayın.
**7.** Herhangi bir simüle edilmiş öğrenciye güvenmeden önce onu denetleyin.
**8.** Başarısızlıkları saklayın. Kesilmiş geri bildirim ve yanıt açığa çıkaran ipuçları gürültü değil, bulgulardır.

## İlgili sorular

- [[making-ai-better-at-supporting-learning|How can we make AI better at supporting learning in our own subject?]]
- [[training-ai-tutors-to-guide-rather-than-answer|How do we train an AI tutor to guide students rather than answer them?]]
- [[evaluating-ai-interventions-methods|What measures and research methods can an instructor use to evaluate AI-related interventions?]] — bu sorunun öğretmen odaklı sürümü
- [[reporting-interpreting-aied-research|What are best practices for reporting and interpreting AI in education research?]] — araştırma odaklı sürüm
- [[llm-training-and-fine-tuning]] — tam kavram sayfası
