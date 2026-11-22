---
title: Sosyal Bilimler Eğitimi
created: "2026-11-16T22:30:00-05:00"
updated: "2026-11-21T17:00:00-05:00"
type: concept
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai]
assessment: [assessment-validity]
level: [higher ed]
confidence: medium
audience: [instructors, curriculum designers, faculty developers]
connected_resources: [integrating-generative-ai-in-psychology-courses]
translation_of: concepts/social-sciences-education
source_updated: "2026-11-17T12:15:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: meituan/longcat-2.5:free
    role: translation
    date: "2026-11-21"
    agent: hermes-agent
connected_concepts: [discipline-specific-aied, humanities-education, stem-education, business-education, civic-and-political-education, environmental-education, assessment-validity, research-methods-aied]
connected_articles: [civic-education-ai-lesson-plans, nkalanga-digital-borders-civic-literacy-2026, csaszar-ai-management-education-2026, espino-ai-business-education-review-2026, drummond-genai-business-schools-framework-2026, mesny-innovative-assessment-grading-management-2026, automated-scoring-marketing-posts-agreement-2026, daniel-ai-sustainability-scoping-review-2026, aied-carbon-footprint-reporting, ai-assisted-inquiry-ssi-climate, hawkins-feedback-literacy-ai-essay-writing, critical-genai-use-predictors, student-genai-use-views-writing, wells-genai-research-assistant-sociology-2026, farazouli-navigating-uncertainty-teachers-genai-2026, richmond-nicholls-genai-psych-feedback-ai-literacies, ai-tutor-statistical-programming-adoption-2026, mental-health-literacy-students-llms-2026, reed-ai-literacy-ethical-judgment-scenarios-2026, adaptive-virtual-patient-psychotherapy-training, burke-ai-proliferation-college-students-replication-2026, baudin-ai-generated-mcq-psychology-exams-2025, akkurt-counselor-trainees-chatgpt-simulated-client-2025, armagan-bogatekin-ai-attitudes-psychology-trainees-2026, dixon-buchmann-llm-reliability-sociology-quiz-2026, malik-chatgpt-cognitive-tool-sociology-writing-2025, garcia-alonso-chatgpt-acceptance-social-science-students-2024]
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sosyal bilimler eğitimi** — insanları toplu olarak inceleyen disiplinlerin öğretimidir: politika ve medeniyet, ekonomi ve yönetim, sosyoloji, coğrafya ve çevre çalışmaları. YZ bu alanlara iki kez girer: öğrencilerin öğrendiği yöntemleri değiştiren bir araç olarak ve algoritmik sistemlerin artık disiplinlerin betimlediği kurumları yönettiği için bir inceleme nesnesi olarak. Küme, [[discipline-specific-aied|disiplinlerde YZ]] kapsamında [[humanities-education|beşeri bilimler eğitimi]] ve [[stem-education|STEM eğitimi]] yanında yer alır. Kapsam incedir ve düzensizdir: işletme ve yönetim en geniş literatüre sahiptir, sivil eğitim kaynaklarla birlikte ancak ölçülmüş öğrenmeden yoksundur ve çevre eğitimi YZ'nin bir öğretim aracı ile bir maliyet olarak ikisinin arasında bölünmüştür.

## Düşünülmesi Gerekenler

- Bir model literatür taramasını, anket aracını ve pazar analizini yazabiliyorken, ders aslında yöntemin hangi bölümünü değerlendiriyordur?
- Sivil dersleri yazması istenen bir model on den seferin dokuzunda hatırlama düzeyinde görevlere yöneliyorsa, bu onun eğitildiği standartlar hakkında neyi ortaya koyar?
- İşletme eğitiminin herhangi bir sosyal bilimden daha büyük YZ literatürü ve değerlendirmeye ilişkin en az uzlaşısı var. Strateji öğreten bir alan, neyin notlandırılacağını neden geç gözden geçirir?
- Çevre eğitimi aynı anda YZ'yi bir araç ve bir enerji maliyeti olarak öğretmek zorundadır. Tek bir ders, ikincisini bir etik kenar notuna çevirmeden her ikisini tutabilir mi?

## Giriş

Sosyal bilimler insanları toplu olarak inceler: kurumların gücü nasıl dağıttığını, pazarların malı nasıl tahsis ettiğini, kamuların görüş nasıl oluşturduğunu, toplumların araziyi ve enerjiyi nasıl kullandığını. Yöntemleri anket, model, karşılaştırma ve olgudur ve imzası olan değerlendirme, öğrencilerden doğrudan gözleyemedikleri sosyal bir dünya hakkında bir iddia ortaya koymalarını ister.

Bu nesne, kümeyi komşularından ayırt eden şeydir. Beşeri bilimler eğitimi metinleri ve eserleri yorumlar; sosyal bilimler popülasyonları ve mekanizmaları yorumlar ve fark, bir öğrenciden savunabileceği şeyde görünür. STEM eğitimi nicel yöntemi paylaşır ancak nesneyi paylaşmaz: bir fizik sonucu doğaya karşı denetlenebilir, seçim davranışıyla ilgili bir iddia ise yalnızca bir örnekleme karşı denetlenebilir.

Kümenin iç varyasyonu büyüktür ve literatür bunu izler. Yönetim ve işletme eğitiminin müfredat, değerlendirme ve benimseme üzerine on yıllık yayınlanmış çalışması vardır. Sivil ve politik eğitimin, YZ'nin demokratik yetkinliği baltalayabileceğini betimleyen kaynakları vardır ancak ölçülmüş tek bir sivil öğrenme sonucu yoktur. Çevre eğitimi, öğretilen teknolojinin kendisinin de bir çevresel belirleyici olması nedeniyle çift bir konu taşır. Bu ipliklerin her birinin kendi ele alınışı vardır — [[business-education|işletme eğitimi]], [[civic-and-political-education|sivil ve politik eğitim]], [[environmental-education|çevre eğitimi]] — ve bunların paylaştığı şey bu kümenin argümanıdır.

## YZ'nin kümedeki görünüşü

- **Medeniyette, müfredatın üreticisi olarak.** 53 medeniyet standardına karşı yazılmış 310 YZ üretimli ders planının analizinde, %90'ı alt düzey hedeflere yönelmiş ve %94'ü hiç çok kültürlü içerik taşımamıştır ([[civic-education-ai-lesson-plans]]). Başarısızlık gerçek hatada değil, varsayılan bir pedagojide: model, verilen standartların en yüzeysel okumasını üretmiştir.

- **Medeniyette, inceleme nesnesi olarak.** [[nkalanga-digital-borders-civic-literacy-2026|Nkalanga (2026)]], Güney Afrika'daki algoritmik sınır yönetimini bir medeniyet okuryazarlığı sorunu olarak okur ve otomatik devlet kararları hakkında vatandaşların anlaması gereken şeylerden doğan beş talepte sonuçlandırır.

- **Yönetimde, bir müfredat sorusu olarak.** [[csaszar-ai-management-education-2026|Csaszar vd. (2026)]], değer temelli bir strateji merceğiyle YZ'nin yönetim eğitiminin ne için olduğunu nasıl değiştirdiğini inceler ve teknolojinin hangi etkinliklerin yerini aldığını, hangilerini tamamladığını sorar. [[espino-ai-business-education-review-2026|Espino ve Espino (2026)]] bu sorunun önündeki on yıllık çalışmayı kapsarken, [[drummond-genai-business-schools-framework-2026|Drummond ve Dale (2026)]] okulların nasıl yanıt vermesi gerektiğine dair öğrenci bilgili bir çerçeve kurar.

- **Yönetimde, bir puanlama sorunu olarak.** [[mesny-innovative-assessment-grading-management-2026|Mesny (2026)]], değişimin alanını müfredat yerine değerlendirme tasarımı olarak görür. [[automated-scoring-marketing-posts-agreement-2026|Öğrenci pazarlama gönderilerinin otomatik puanlanması]] uzlaşıyı ve hatayı doğrudan ölçer; bu, [[assessment-validity|geçerlilik]] sorusunun kümedeki hâlidir: insan bir puanlayıcıyla uzlaşan bir puan, istenen öğrenmeyi ölçen bir puan olmak zorunda değildir.

- **Çevre çalışmalarında, çift bir konu olarak.** [[daniel-ai-sustainability-scoping-review-2026|Daniel (2026)]], sürdürülebilir YZ'den YZ'nin *için* sürdürülebilirliğini ayırır ve her ikisinden geçen Küresel Güney boşluğunu bulur. [[aied-carbon-footprint-reporting|AIED'de karbon ayak izi raporlaması]] 2025 açıklama uygulamalarını gözden geçirir ve ikinci yarı için açık kaynaklı bir yöntem sunarken, [[ai-assisted-inquiry-ssi-climate|YZ destekli iklim sorgulaması]] ilk yarı için sorgulamaya kıyasla d = 0,69 bildirir.

## Ölçüm boşluğu

Kümenin en zayıf kanıtı en siyasi sonuç olanıdır. Sivil eğitim, YZ'nin neyi zedelebileceğinin en net hesabını sunar — demokratik yetkinlik, paylaşılan olgusal zemin, kurumlar hakkında muhakeme yeteneği — ve bunu iyileştiren hiçbir müdahalenin kanıtı yoktur. İşletme eğitimi en çok çalışmayı sunar ve neyin notlandırılması gerektiğine dair en az uzlaşıyı. Çevre eğitimi sorgulama için etki büyüklükleri ve ayak izi için denetimler sunar, ancak bunları nadiren tek bir derste bir araya getirir.

Dürüst okuma şudur: bu küme, sınıflarında YZ'nin nasıl kullanıldığını, öğrencilerin ne öğrendiğinden daha iyi bilir. Bu boşluğu kapatmak için gereken [[research-methods-aied|araştırma yöntemleri]] sıradandır: önceden kaydedilmiş karşılaştırmalar, öz bildirim olmayan sonuç ölçütleri ve hem deneyin hem değerlendirmenin bir model tarafından yazıldığı itirazına dayanabilen tasarımlar.

## Kümenin ince olduğu yerler

**Psikoloji: çalışılmaktan çok örneklenmiştir.** Disiplin artık kendi sayfasına sahiptir, [[psychology-education|psikoloji eğitimi]], çünkü kümenin geri kalanının toplamından daha fazla ders düzeyinde kanıt taşımaktadır. Aşağıdakiler küme düzeyindeki özet ve bunun varolma nedenidir. Psikoloji kanıtının çoğu, psikoloji öğrencilerini elverişli katılımcılar olarak çeken çalışmalardan gelir, psikoloji müfredatını incelemekten ziyade. Dört istisna dersin kendisine bakar. [[richmond-nicholls-genai-psych-feedback-ai-literacies|Richmond ve Nicholls]], ikinci sınıf bir psikoloji "Medya Ödevi"nde akran değerlendirmesini ChatGPT ile değiştirmiştir; bu görev, yayınlanmış bir makaleyi bir medya bültenine ve videoya dönüştürür. [[ai-tutor-statistical-programming-adoption-2026|Préau ve arkadaşları]], Tübingen'deki psikoloji lisans öğrencileri için bir dönem boyunca süren bir R programlama dersinde "R-Tutor"u konuşlandırmıştır; önceden kaydedilmiş ve boylamsaldır.

İki tane daha, psikoloji öğrencilerinin ne bildiğini ve nasıl yargıladığını sınar. [[mental-health-literacy-students-llms-2026|Richter ve arkadaşları]], 30 ruh sağlığı beyanını 150 psikoloji öğrencisine ve her biri 80 koşu üzerinden dört LLM'ye sunmuştur. [[reed-ai-literacy-ethical-judgment-scenarios-2026|Reed ve arkadaşları]], 531 lisans öğrencisi arasında YZ okuryazarlığının uygulanan etik yargıyı yordayıp yordamadığını altı vaka oluğuyla sınamıştır.

Geri kalanı genel olarak öğrencilerle ilgilidir. [[cognitive-psychology|Bilişsel psikoloji]], [[developmental-psychology|gelişim psikolojisi]], [[motivation|motivasyon]] ve [[self-efficacy|öz yeterlilik]], bir psikoloji dersinin nasıl öğretildiğiyle değil, öğrenmenin nasıl işlediğiyle ilgilidir. Simüle edilmiş bir YZ destekli deneme görevinde, geri bildirim okuryazarlığı deneme notunun tek anlamlı yordayıcısı olmuştur (β = 0,46, p = 0,017; [[hawkins-feedback-literacy-ai-essay-writing]]).

[[critical-genai-use-predictors|Eleştirel GenAI kullanımı]], hem öz bildirimle hem nesnel sınavla ölçülen bilgiyle, epistemik yönelim ve entelektüel değerlerin yanında yordanmaktadır. Psikoloji aynı zamanda katılımcıların geldiği yerdir. Yakın zamandaki iki yıllık bir yenide en büyük tek branş psikolojidir; 991 öğrenciden 300'ü oluşturur, bu yüzden disiplin, anketlerin örneklerini sağlar ancak bu anketlerin konusu olmaz.

Üç psikoloji dersi daha artık kayıtlarda. [[baudin-ai-generated-mcq-psychology-exams-2025|Baudin]], ChatGPT-4'ü Deney Psikolojisi dersi için 80 soru yazmış ve bunları 120 öğrenciyle uzman incelemesi ve madde analizinden geçirmiştir: güvenilirlik korunmuş ancak maddelerin %73,75'i hatırlamayı sınamış ve yalnızca %8,75'i analiz ya da değerlendirmeye ulaşmıştır. [[akkurt-counselor-trainees-chatgpt-simulated-client-2025|Akkurt ve arkadaşları]], danışman adayları için bir müşteri olarak GPT-4o kullanmıştır; bu performans kaygısını düşürmüş ancak çok kolayca hemfikir olan, duygusal nüansı olmayan ve kültürel olarak nötr kalan bir müşteri üretmiştir. [[armagan-bogatekin-ai-attitudes-psychology-trainees-2026|Armagan-Bogatekin]], 286 psikoloji öğrencisi ve psikoterapi adayesini modellemiş ve her biri altı alanda üç ila dört sınıf bulmuştur; bu, eğitilecek ortadan bir aday olmadığı konusundaki şimdiye kadarki en güçlü kanıttır.

Sosyoloji üç çalışmadan beşe büyümüştür. [[dixon-buchmann-llm-reliability-sociology-quiz-2026|Dixon ve Buchmann]], 20 maddelik bir sosyoloji sınavını iki hafta boyunca her gün ChatGPT, DeepSeek ve Gemini'ye sunmuş ve 0,91'den 1,00'e dek birleşik kappa bulmuştur; anlaşmazlık, uygulama gerektiren iki madde etrafında toplanmıştır. [[malik-chatgpt-cognitive-tool-sociology-writing-2025|Malik]], 18 sosyoloji öğrencisiyle görüşmüş; öğrenciler ChatGPT'yi taslaklama ve kuram açıklamada bir düşünce yoldaşı olarak tarif etmiş, ancak seslerini kaybetme endişesi taşımıştır. [[garcia-alonso-chatgpt-acceptance-social-science-students-2024|García-Alonso ve arkadaşları]], 216 İspanyol sosyal bilim öğrencisine anket yapmış ve öğretim üyeleri eğitim alan öğrencilerin aracına olan güvenlerinin *daha düşük* bildirdiğini bulmuştur.

**Sosyoloji: üç çalışma.** [[student-genai-use-views-writing|Kuznetsov, Sheely ve Baker]] 504 sosyoloji öğrencisine anket yapmış ve 12 kişiyle daha görüşmüştür. Üçte ikisi YZ'yi seçici olarak kullanır; çoğunlukla takip soruları, okumaları özetleme ve pratik sorular için. %81'i bir tür rehberlik almıştır ve yalnızca %46'sı bunu çok net bulmuştur.

[[wells-genai-research-assistant-sociology-2026|Wells]] ders olgusunu bildirir: 3000 düzey bir araştırma yöntemleri dersindeki 24 öğrenci, on sekiz iskelelenmiş atölyeden altısında Copilot kullanmış ve teklifi yazmak için onu kullanmalarına izin verilmemiştir. [[farazouli-navigating-uncertainty-teachers-genai-2026|Farazouli ve arkadaşları]] bunu öğretme tarafından yaklaşmaktadır; 24 İsveçli öğretmen, sosyoloji, felsefe, hukuk ve eğitim dallarından, atölyelerde YZ üretimli çalışmaları değerlendirme üzerine akıl yürütür.

Klinik olgu gerçekten disiplindir ve buradaki en güçlü tasarıma sahiptir. Psikoterapi eğitimi için [[adaptive-virtual-patient-psychotherapy-training|uyarlanabilir bir sanal hasta]], 20 klinisyen ve adayla 1.033 sıra koşmuştur. Açıklama, terapist empatisi ve keşifle birlikte yükselmiştir. Temel veride keşif, empatinin yaklaşık 78 katı iş yaparken konuşlandırılan sistem bunu üç kat ağırlıkla taşımıştır; bu yüzden ona karşı prova yapan adaylar, simülatörün ödüllendirdiği şey için iyileştirme yapma riskini taşır.

Coğrafya literatüre yalnızca [[environmental-education|çevre eğitimi]] aracılığıyla ulaşır. Sosyoloji ya da psikoloji öğretiyorsanız, varolan çalışmalar bunlardır. Kanıtın biçimi kendisi bulgudur: sosyoloji için bir anket, bir ders olgusu ve bir öğretmen çalışması; psikoloji için dört ders çalışması.

## Sosyal bilim öğretim üyeleri için çıkarımlar

- **Ürünü değil, yöntemi görünür kılın.** Satılabilir şey bir raporsa, ders rapor yazmayı değerlendiriyor demektir; puanı araç tasarımına, örneklem kararlarına ya da nedensel bir iddianın savunulabilirliğine taşıyın.
- **Otomatik puanlamayı kavrama karşı denetleyin.** İnsan bir puanlayıcıyla uzlaşı bir güvenilirlik sonucudur, geçerlilik sonucu değil ve pazarlama gönderisi çalışması bu boşluğu bir sayfada gösterir.
- **Yalnızca aracı değil, kurumu öğretin.** Algoritmik yönetişim artık medeniyetin, hukukun ve kamu yönetiminin betimlediği şeyin parçasıdır ve sınır olgusu en net örnektir.
- **Maliyeti ve yararı tek bir çerçevede tutun.** Karbon yoğun bir araçla sunulan bir sürdürülebilirlik dersi her iki yarısını da hesaba katmak zorundadır ve ayak izi raporlaması bunun için bir yöntem verir.

## Yaygın yanlış anlamalar

**"Sosyal bilimler eğitiminde YZ esasen bir araştırma aracı sorusudur."** Bu kümede ölçülen en büyük etkiler araştırma pratiğinde değil, müfredat üretiminde ve puanlamadadır: medeniyet analizi ve pazarlama gönderisi puanlaması, ikisi de öğrencilere verilen şeyle ve nasıl yargılandıklarıyla ilgilidir.

**"Sivil eğitimin sorunu, öğrencilerin bir sohbet robotunun söylediğine inanacak olmalarıdır."** Belgelenmiş sorun bundan daha incedir: YZ üretimli sivil materyal hatırlama düzeyinde görevlere yöneliyor ve çok kültürlü içeriği tamamen düşürüyor; bu yüzden risk, bir öğrenci yanıltılmadan önce yargıyı öğretmeyi bırakan bir müfredattır.

**"Çevre eğitimi, YZ'nin ayak izini bir etik konusu olarak ele alabilir."** Ayak izi bir tasarım parametresidir: gecikme, model boyutu ve barındırma onu belirler ve raporlama literatürü onu yermeden ziyade ölçülebilir olarak ele alır.
