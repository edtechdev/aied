---
title: "YZ Ajanları Öğrencileri ve Öğretim Elemanlarını Nasıl Destekleyebilir?"
created: "2026-10-14T21:45:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-28T11:29:19-04:00"
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

Bir satıcı demosu kırk dakika sürüyor. Ajan izlenceyi okuyor, gelecek haftanın kısa sınavını taslaklıyor, okumayı açmamış üç öğrenciyi işaretliyor ve onlara e-posta göndermeyi öneriyor. Rektör yardımcınız ay sonuna kadar bir lisans kararı istiyor.

Bir [[agentic-ai|ajan]] planlar, araçları çağırır, bağlamı korur, işi alt görevlere böler ve turlar boyunca uyum sağlar; bu bir [[conversational-ai|sohbet robotunun]] yaptığından fazlasıdır. Bunun açtığı öğrenci tarafı ve öğretim elemanı tarafı roller gerçektir. Kanıtlar daha fazla özerkliğin daha fazla öğrenme ürettiğini göstermiyor: burada karşılaştırmalı tek çalışmada bir ajan ile bir sohbet robotu berabere kaldı. Özerkliği bir insanın çıktıyı kontrol ettiği yere koyun, planlamayı öğrenende tutun ve öğretim kalitesini kendi ölçütlerinize göre puanlayın.

## Kısa özet

**1.** Üründen önce işi adlandırın.

**2.** İşi zaten bir öğretmenin denetlediği öğretim elemanı tarafında başlayın.

**3.** Eklenen özerkliği, kanıt aksini söyleyene kadar bir maliyet olarak görün.

**4.** Planlamayı ve yargılamayı öğrenende tutun, çünkü ödevin var olma nedeni bunları kurmaktır.

**5.** Ajanı kendi ölçütlerinize göre puanlayın ve pilot bitmeden desteksiz bir kontrol planlayın.

## Ajanı seçmeden önce işi seçin

[[agentic-workflows-education|Eğitimde Ajanlı İş Akışları]] dört yinelenen yetenek adlandırır: yansıtma, planlama, araç kullanımı ve çok ajanlı işbirliği. Her biri, olanağın yanına bir maliyet ekler: [[explainable-ai|yorumlanabilirlik]], koordinasyon, [[trust-calibration|güven]], gecikme ve gözetim.

Öğrenci tarafı roller, [[adaptive-learning|uyarlanabilir]] özel ders ve çalışma planlamasından [[formative-assessment|biçimlendirici]] geri bildirime, yönlendirilmiş [[problem-solving|problem çözmeye]] ve alıştırma üretimine, önkoşul önerilerinden yansıtıcı [[metacognition|üstbilişsel]] [[prompt-engineering|prompt yazmaya]] kadar uzanır. Öğretim elemanı tarafı roller materyal geliştirmeyi, [[automated-question-generation|soru üretimi]] ve doğrulamasını, geri bildirim triyajını, ders [[learning-analytics|analitiğini]], öğretim tasarımını, kaynak erişimini ve uzmanlaşmış alt ajanların orkestrasyonunu kapsar.

Bunlardan ikisi erken aşamada daha güvenlidir, çünkü ikisi de öğrencilerden önce bir insanın okuduğu bir ürün üretir: bir doğrulayıcıyla eşleştirilmiş bir soru üreticisi ve bir öğretmenin düzenlediği taslak.

## İnsanın işi zaten kontrol ettiği yerden başlayın

Canlı özel derste insan-YZ sistemlerinin [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]] adlı ilk [[rct|randomize kontrollü denemesi]], 900 eğitmen ve yaklaşık 1.800 öğrenci genelinde, deneyimli eğitmenlerin akıl yürütmesinden çıkarılan gerçek zamanlı yönlendirmeyi acemi eğitmenlere verdi. Erişimi olan eğitmenlerin öğrencileri konuları ustalaşma olasılığı açısından 4 yüzde puanı daha yüksekti; bu, en düşük puanlı eğitmenler arasında 9 puana çıktı ve bu eğitmenlerin öğrencileri kontrol grubundaki daha iyi puanlı eğitmenlerin öğrencilerine yetişti. Eğitmen başına yıllık yaklaşık \$20'ye mal oldu ve 550.000'den fazla özel ders mesajının analizi, eğitmenlerin cevap vermekten yönlendirici sorular sormaya kaydığını gösterdi. Bu, [[teacher-role|öğretmeni]] güçlendiren YZ'dir.

Ajan öğrenciye ders vermedi. Konuşmanın ortasında bir insanı besledi ve ne söyleyeceğine o insan karar verdi. Döngüdeki bir insan ve işin yakınındaki bir sonuç, sonucu başka bir derse taşınabilir kılan şeydir.

## Daha fazla özerkliğin daha fazla öğrenme satın aldığını varsaymayın

[[ilieva-agentic-genai-higher-education-2026|Bir e-ticaret dersinde 130 öğrenciyle yapılan çalışma]], hem [[generative-ai|üretken YZ]] sohbet robotlarının hem de ajanların geleneksel [[online-teaching-and-learning|e-öğrenmenin]] öğrenme ve [[personalized-learning|kişiselleştirme]] açısından üzerinde puan aldığını, sohbet robotu ile ajan arasında ise anlamlı bir fark olmadığını buldu. Eklenen özerklik, bu ölçütlerde eklenen değer yok.

O çalışmanın çerçevesi ajanları sınırlı, insan gözetiminde öğrenme ortakları olarak ele alır; hedefler, kontrol noktaları ve nihai kararlar insanlara bırakılır. [[beyond-agent-label-agentic-ai-governance-2026|Ajan Etiketinin Ötesinde]] bunu bir [[governance|yönetişim]] kuralı haline getirir: özerklik, kanıtın olgunluğunu ya da hesap verebilir insan kontrolünün gücünü aşmamalıdır; kanıt en güçlü olduğu yer ürün düzeyindeki sonuçlar, en zayıf olduğu yer ise kalıcı [[learning-gains|öğrenme]] ve [[equity-in-ai-education|hakkaniyettir]].

Öğrenen tarafındaki risk aynı yöne gider. Bir öğrenci için planlayan ve izleyen bir ajan, [[self-regulated-learning|öz düzenlemeyi]] kuran alıştırmayı ortadan kaldırır ve [[cognitive-offloading|yük boşaltmaya]] davet çıkarır. [[agentic-ai-pedagogical-best-practice-2026|En iyi uygulama rehberi]] kasıtlı sürtünme, solan [[scaffolding|iskele]] ve [[human-in-the-loop-ai|insan gözetimi]] ister. [[desirable-difficulties|Verimli sürtünmenin]] işleyen örnekleri var. Zayıf bir tasarımla tartışan yapıcı çatışma ajanları, incelenen araştırmada tasarım sonuçlarını iyileştirdi. [[simulating-students|Simüle edilmiş akranlar]] [[collaborative-learning|işbirlikli öğrenmeyi]] ve [[socratic-method|Sokratik]] sorgulamayı destekler ve [[medical-education|klinik]] [[simulation|simülasyonlar]], öğrenenlerin hatanın ucuz olduğu yerde prova yapmasını sağlar.

Herhangi biri için test şudur: oturumdan sonra, ajanın daha önce yaptığı neyi öğrenci yapabiliyor? Yargıyı devretmek, öğrenciye onu kullanma [[agency|pratiğini]] kaybettirir.

## Ajanı kendi yargınızla karşılaştırın

[[zhang-platform-scores-miss-ai-teaching-agents-2026|Bir tıp müfredatına yayılmış sekiz YZ öğretim ajanı]], platform tarafından üretilen puanlarla ve bağımsız bir uzman ölçütüyle farklı sıralandı. Platformun üçüncü sıradaki ajanı öğretim kalitesinde sonuncu oldu. Platform puanları öğrenci performansını endeksler; bu da öğretimle hiçbir ilgisi olmayan nedenlerle hareket eder.

Bir pano sayısının neyi saydığını, arkasındaki ölçütü kimin yazdığını ve düşük bir puanın öğrenci işinde nasıl görüneceğini sorun. [[pedagogical-safety|Pedagojik güvenlik]] aynı incelemeye aittir, çünkü bir [[pedagogical-agent|ajan]] zinciri, bir yanıt yanlış olduğunda hangi bileşenin hesap verebilir olduğunu söylemeyi zorlaştırır.

## Kapanmaya hazırlanın

Randomize denemeler kısa süreli YZ yardımının sonraki desteksiz performansı düşürebildiğini gösteriyor ve geri çekilmeden sonraki aralık, yani [[cognitive-washout-ai-skill-decay-2026|bilişsel yıkanma]], neredeyse tamamen ölçülmemiş durumda. Bu sayfanın arkasındaki sentez, 474 çalışmalık bir [[meta-analysis-systematic-review|kapsam incelemesine]] dayanıyor ve işin [[higher-ed|yükseköğretimde]], [[stem-education|STEM'de]], kısa vadeli tasarımlarda ve metin tabanlı özel derste yoğunlaştığını, yalnızca küçük bir azınlığın eğitim kuramına açıkça dayandığını buluyor. Lisans bittiğinde biten bir pilot yanlış pencereyi ölçmüştür.

## Yöneticilerin bu konuda yanlış yaptıkları

Ajan yükseltilmiş bir sohbet robotudur, dolayısıyla yükseltme sonuçlarda görünmelidir. 130 öğrencilik karşılaştırmada iki YZ koşulu da e-öğrenmeyi geçti ve hiçbiri diğerini geçmedi.

Pano öğretim kalitesini sıralar. Öğrenci performansını sıralar ve sekiz ajan, uzman ölçütüne göre üçüncü ve son sıraları tersine çeviren bir sıralama üretti.

Özerklik satın alınacak özelliktir. Orantılılık kuralı ters yönde işler ve kanıt en çok özerkliğin en büyük olduğu yerde en zayıftır.

Erişim hakkaniyet açığını kapatır. Yetenekli ajanlı sistemlere eşit olmayan erişim onu genişletebilir ve bir ajan eğitim verisi önyargısını ölçekte yeniden üretir.

## Size geri dönecek olanlar

**"Öğrenciler sadece işi ona yaptırtacak."** Bazıları yaptırtacak ve mimari bunun ne kadar kolay olduğuna karar verir. Öğrenci için planlayan ve taslak yazan ajanlar bunu davet eder. Önce bir deneme isteyen, sonra soru soran ajanlar etmez.

**"Satıcının değerlendirmesi işe yaradığını söylüyor."** Sayının neyi saydığını sorun. Platform tarafından ölçülen öğrenci performansıysa, ajan kadar öğrencileri de ölçer.

**"Bir zincirde hangi ajanın hesap verebilir olduğunu kimse söyleyemez."** Mevcut uygulamaların çoğu için doğru. Zincir için bir sahip adlandırın, hangi bileşenin hangi çıktıyı ürettiğini kaydedin ve bir öğrenci kaydına ulaşmadan önce bir insan kontrol noktası tutun.

## Bu hafta yapılacaklar

**1.** Bir sonraki satıcı görüşmesinden önce işi ve onu yargılayacağınız sonucu, her biri tek cümleyle yazın.

**2.** Bir ajanın çıktısını gerçek on parça öğrenci işi üzerinde kendi ölçütlerinize göre puanlayın ve puanları saklayın.

**3.** Pilot planına tarihli ve sahibi belli desteksiz bir görev ekleyin.

## Nereye gidilecek

[[developing-ai-tutor|Etkili bir YZ eğitmeni geliştirmek]], öğrenciye dönük yapıyı hedeften yardım merdivenine kadar kapsar ve [[evaluating-ai-interventions-methods|YZ müdahalelerini değerlendirme yöntemleri]] işin işe yarayıp yaramadığını. [[intelligent-tutoring|Akıllı özel ders]] ve [[ai-literacy|YZ okuryazarlığı]] bu sayfanın varsaydığı tasarım sözlüğünü sağlar.
