---
title: Çürütme Metni
created: "2026-10-14T21:12:00-04:00"
type: concept
pedagogy: [cognitive-psychology, learning-theories, metacognition, misconceptions, scaffolding]
technology: [generative-ai]
discipline: [science education]
confidence: high
connected_faqs: [addressing-common-misconceptions-ai-education]
translation_of: concepts/refutation-text
source_updated: "2026-09-30T16:25:27-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Çürütme metni** — yaygın bir yanlış kanıyı açıkça ortaya koyan, doğrudan çürüten ve ardından bilimsel olarak doğru kavramı sunan bir metinle gerçekleştirilen yanlış kanı düzeltme tekniği. Fen eğitiminin [[misconceptions|kavramsal değişim]] alanındaki literatürden doğan çürütme metinleri, sıradan öğretime direnen, sezgiyle uyumlu istikrarlı yanlış kanıları yerinden oynatmak için kanıtlanmış, düşük teknolojili bir müdahaledir. Eğitimde YZ’de çürütme metinleri giderek iki yolla kullanılmaktadır: YZ temelli müdahalelerde (kişiselleştirilmiş diyalog, LLM tarafından üretilen içerik) bir **karşılaştırma koşulu** olarak ve **YZ tarafından üretilen içerik** olarak — inançları düzeltmek ya da işbirlikçi tartışmayı beslemek için [[generative-ai|üretken YZ]] ile üretilen kavramsal değişim metinleri ve yanlış kanı metinleri.

## Üzerinde Düşünülmesi Gereken Sorular

- Bir öğrencinin hatalı fikrini, doğru cevabı sunarak "düzelttiğiniz" oldu mu, yalnızca yanlış kanının sonradan yeniden su yüzüne çıktığını görerek? Sayfa, yanlış kanıların bilgi eksikliği değil, sıradan öğretime direnen fiilen taşınan inançlar olduğunu savunuyor. Bu, düzeltmenizin neden başarısız olduğuna dair neyi yeniden çerçeveliyor?
- Bir çürütme metni yanlış kanıyı açıkça belirtir, onu çürütür ve doğru kavramı sunar — yalnızca doğruyu ortaya koyan standart bir anlatı metninin aksine. Yanlış fikri yüksek sesle adlandırmak, neden onu değiştirmeye yardım eder — üstelik doğru fikri öğretmenin görünüşe göre yeterli olmadığı bir durumda?
- Kişiselleştirilmiş YZ diyalogunun statik çürütme metnini geçip geçmediğine dair araştırma sonuçları karışıktır: bir çalışmada etkileşimli diyalog daha büyük ve daha hızlı inanç değişimi üretti; bir başkasında ise iyi hazırlanmış metinler, istek metniyle yönlendirilen bir YZ sohbetini geride bıraktı. Bu çelişkili sonuçları ne açıklayabilir ve bu, "etkileşimlilik her zaman daha iyidir" fikrine ilişkin size ne söyler?
- YZ artık uzman kalitesindeki etkili çürütme metinleri üretebilir ve hatta yapılandırılmış akran tartışmasını beslemek için yanlış kanılar üretebilir. Kasıtlı olarak YZ tarafından üretilen yanlış fikirlerden öğretme fikri size riskli mi yoksa verimli mi geliyor — ve hangi koşullarda bunu denemeyi seçerdiniz?
- Çürütme etkileri başarılı öğrenciler arasında yoğunlaşmış görünmekte ve epistemoloji ile üstbiliş tarafından yönlendirilmektedir. Teknik en çok güçlü olanlara yardım ediyorsa, bu, onu karma bir sınıfta kullanan bir eğitmen için ne tür yükümlülükler doğurur?
- Daha fazla okumadan önce, öğrettiğiniz bir konuda şu anda taşıdığınız bir yanlış kanı adlandırın ve açık "yanlış" iddiayı ile onun çürütmesini kendinizin yazdığını hayal edin. Bu alıştırma, iyi bir çürütme yazmanın ne kadar zor olduğuna dair size ne ortaya koydu?

## Giriş

### Kavram

Çürütme metinleri, yanlış kanıların bilgide salt boşluklar değil, düzeltmeye direnen, fiilen taşınan, makul ve kendi kendini güçlendiren inançlar olduğu fikri üzerine kuruludur — kavramsal değişim araştırması için merkezî bir iddia. Bir çürütme metni, yanlış kanıyı açık hale getirerek, onu yanlış olarak adlandırarak ve nedenini açıklayarak, ardından öğrencinin bütünleştirebileceği biçimde doğru kavramı sunarak iş görür. Bu, yalnızca doğru bilgiyi sunan ve yanlış kanının kendiliğinden yer değiştireceğini varsayan standart bir anlatı metninden farklıdır.

Eğitimde YZ’de merkezî bulgu, düzeltmenin *biçimi* ile *etkileşimliliğinin* önemli olduğudur. Yakınsayan kanıtlar ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett ve Tangen 2026]]), statik ders kitabı tarzı çürütmenin inançları güvenilir biçimde düzelttiğini, ancak **kişiselleştirilmiş, etkileşimli YZ diyalogunun**, öğrencinin özgül yanlış kanısını hedef alarak ve onu motivasyonel olarak dahil ederek daha büyük ve daha hızlı inanç azalması üretebileceğini göstermektedir. Ancak bu avantaj bağlama ve tasarıma bağlı olabilir: [[akdogan-heat-temperature-conceptual-change-thesis-2025|fen eğitiminde (Akdoğan 2025)]], iyi yapılandırılmış kavramsal değişim metinleri (uzman *ya da* YZ tarafından üretilmiş), istek metniyle yönlendirilen etkileşimli bir ChatGPT diyalogunu geride bıraktı — bu, diyalogun tasarımının (kişiselleştirilmiş karşısında jenerik) ve alanın hangi biçimin kazandığını şekillendirdiğini düşündürmektedir.

### Çürütme metninin eğitimde YZ için neden önemli olduğu

- **Düzelten olarak YZ.** Konuşkan YZ öğretmenleri *kişiselleştirilmiş* çürütme sunabilir — önceden yazılmış metinlerin yapamayacağı biçimde, çürütmeyi anında öğrencinin özgül yanlış kanısına uyarlar. Bu, statik çürütmeye kıyasla daha güçlü anlık inanç değişimi ve daha yüksek katılım/güven üretir ([[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026|Corbett ve Tangen 2026]]), ancak etkilerin sürmesi için aralıklı pekiştirme gerekebilir.
- **Çürütme içeriğinin üreticisi olarak YZ.** [[generative-ai|Üretken YZ]], uzman yazımı kalitesine eşdeğer etkili kavramsal değişim metinleri üretebilir ([[akdogan-heat-temperature-conceptual-change-thesis-2025|Akdoğan 2025]]) ve bağlama özgü yanlış kanı metinlerinin büyük sayıda örneğini düşük maliyetle üretebilir — aksi halde eğitmen deneyimine bağlı olacak yanlış kanı temelli öğrenmeyi ölçeklendirerek ([[llms-misconception-collaborative-learning-healthcare-2026|Cheah ve ark. 2026]]).
- **Öğrenme kaynağı olarak YZ tarafından üretilen yanlış kanılar.** YZ tarafından üretilen yanlış kanıları zararlı olarak görmek yerine, onlarla işbirlikçi bir tartışma — çürütme yoluyla işbirliğinin bir biçimi — kavramsal değişimi ve eleştirel düşünceyi destekleyebilir ([[llms-misconception-collaborative-learning-healthcare-2026|Cheah ve ark. 2026]]).
- **Yanlış kanı eğitimini tamamlamak.** Çürütme metinleri, öğrencilerin YZ’nin kendisine ilişkin yanlış inançlarının temelindeki kavramsal yanlış kanıları düzeltmek için önerilen bir stratejidir (bkz. [[misconceptions]] ve [[critical-genai-use-predictors]]).

### Çürütme metni karşısında ilgili teknikler

Çürütme metinleri, analojiler, tutarsız olaylar ve etkileşimli diyalogla birlikte kavramsal değişim araç setinin bir üyesidir. Avantajları **ölçeklenebilir, düşük maliyetli ve gösterilebilir biçimde etkili** olmalarıdır; sınırlılıkları ise statik metinlerin öğrene adapte olamamasıdır. YZ diyalogu uyum boşluğunu giderir, ancak tasarıma bağımlılık (kişiselleştirme, istek metni kalitesi) ve bazı çalışmalarda iyi hazırlanmış metne karşı hiçbir avantaj olmaması getirir. Çürütme metni ile YZ diyalogu arasındaki ilişki bu nedenle tamamlayıcıdır: metin ölçekte güvenilir bir taban düzeltme sunar; kişiselleştirilmiş YZ diyalogu ise iyi tasarlandığında daha güçlü, daha hızlı ve daha motive edici bir düzeltme sunar.

### Temel araştırma temaları

- Kişiselleştirilmiş YZ diyalogunun statik çürütme metnini geçip geçmediği ve hangi koşullarda geçtiği.
- YZ tarafından üretilen çürütme/kavramsal değişim metninin uzman yazımı kalitesine eşdeğer olup olmadığı.
- İşbirlikçi, yanlış kanı temelli öğrenme için yanlış kanı üretmek amacıyla YZ kullanımı.
- Öğrenen özelliklerinin (başarı, epistemoloji, üstbiliş) çürütme etkililiğini yönlendirmedeki rolü.
- Etkileşimli çürütmenin başlangıçtaki avantajlarını sürdürmek için aralıklı pekiştirme.

### Pratik çıkarımlar

Eğitmenler için çürütme metinleri, inatçı yanlış kanıları düzeltmenin güvenilir ve düşük eşikli bir yolu olmaya devam etmektedir. YZ’yi bütünleştirenler için kanıtlar şunu önermektedir: (1) YZ’yi ölçekte etkili çürütme/kavramsal değişim içeriği *üretmek* için kullanın; (2) mümkün olduğunda çürütmeyi, daha güçlü anlık katılım ve inanç değişimi için kişiselleştirilmiş YZ diyalogu yoluyla sunun; (3) YZ tarafından üretilen yanlış kanıların, onlarla yüzleşmek için yapılandırılmış tartışma kullanıldığında pedagojik olarak yararlı olmasını bekleyin; ve (4) öğrenen için tasarlayın — çürütme etkileri başarılı öğrencilerde yoğunlaşabilir ve epistemoloji ile üstbiliş tarafından yönlendirilebilir, bu nedenle iskeleleme ve izleme önemlidir.

## Bağlı kavramlar

- [[pedagogical-patterns]] — Çürütme dizileri, doğrudan çelişen iki sonuç dâhil
- [[misconceptions]]
- [[scaffolding]]
- [[metacognition]]
- [[generative-ai]]
- [[stem-education]]
- [[physics-education]]
- [[medical-education]]
- [[collaborative-learning]]
- [[intelligent-tutoring]]

## Bağlı makaleler

- [[ai-tutors-vs-tenacious-myths-personalized-dialogue-2026]] — İnanç düzeltmede kişiselleştirilmiş YZ diyalogu karşısında ders kitabı çürütmesi
- [[akdogan-heat-temperature-conceptual-change-thesis-2025]] — Uzman/YZ kavramsal değişim metni karşısında etkileşimli YZ diyalogu
- [[llms-misconception-collaborative-learning-healthcare-2026]] — İşbirlikçi öğrenme için LLM tarafından üretilen yanlış kanılar
- [[chatgpt-inoculation-training-verification-2026]] — Komşu bir çürütme tarzı müdahale olarak aşılama eğitimi
- [[critical-genai-use-predictors]] — Kavramsal yanlış kanıları hedeflemek için çürütme metinlerini önermekte
- [[ai-learning-companions-framework]] — YZ arkadaşları ve yanlış kanı düzeltme
