---
title: "YZ Ajanları Öğrencileri ve Öğretim Elemanlarını Nasıl Destekleyebilir?"
created: "2026-10-14T21:45:00-04:00"
connected_faqs: [developing-ai-tutor, training-ai-tutors-to-guide-rather-than-answer]
weight: 66
foundations: [agentic-ai, ai-literacy, cognitive-offloading]
technology: [human-in-the-loop-ai, intelligent-tutoring, pedagogical-agent]
translation_of: faqs/ai-agents-support-students-instructors
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

# YZ Ajanları Öğrencileri ve Öğretim Elemanlarını Nasıl Destekleyebilir?

**YZ ajanları, tek turlu soru yanıtlamanın ötesine geçebilir**: bir dizi etkileşim boyunca plan yaparak, araç kullanarak, ilgili bağlamı hatırlayarak, alt görevleri koordine ederek ve desteği uyarlayarak. Öğrenciler için olası roller şunlardır: uyarlanabilir özel ders, çalışma planlaması, [[formative-assessment|biçimlendirici]] geri bildirim, yönlendirmeli [[problem-solving|problem çözme]], alıştırma üretimi, simülasyon, ön koşul önerileri ve yansıtıcı ya da üstbilişsel [[prompt-engineering|istek metni]] yazımı. Öğretim elemanları için ajanlar; materyal geliştirme, [[automated-question-generation|soru üretimi]] ve doğrulaması, geri bildirim önceliklendirmesi, kurs [[learning-analytics|analitiği]], öğretim tasarımı iş akışları, kaynak erişimi ve özelleşmiş ajanların orkestrasyonuna yardım edebilir.

## Yineleyici ajan yetenekleri

[[agentic-workflows-education|Eğitimde Ajan İş Akışları]] makalesi dört yineleyici ajan yeteneği tanımlar: **yansıtma, planlama, araç kullanımı ve çok ajanlı iş birliği**. Her biri olanaklar eklerken aynı zamanda [[explainable-ai|yorumlanabilirlik]], koordinasyon, güven, gecikme ve gözetim zorluklarını da beraberinde getirir.

## YZ ajanlarının iyi yapabildikleri (olumlu çıkarımlar)

- **Sürdürülebilir, uyarlanabilir destek.** Tek turlu [[conversational-ai|sohbet robotlarının]] aksine ajanlar, bir öğrenenin ne bildiğini hatırlayarak, zorluğu uyarlayarak ve çok adımlı [[scaffolding]] dizisini oluşturarak öğrenme konuşmasını birçok tur boyunca sürdürebilir. Bu, ölçekte [[adaptive-learning|uyarlanabilir]] ve [[personalized-learning|kişiselleştirilmiş]] öğrenmeyi destekler.
- **Öğretim elemanlarının yükünü hafifletmek.** Ajanlar materyal taslakları hazırlayabilir, soru üretebilir ve doğrulayabilir (örneğin bir üretici + doğrulayıcı eşleşmesi), geri bildirimleri önceliklendirebilir ve özelleşmiş alt ajanları orkestre edebilir; öğretmenleri daha yüksek değerli etkileşim için serbest bırakır.
- **Zengin etkileşim ve [[desirable-difficulties|verimli sürtünme]].** Çok ajanlı sınıflar ve simüle edilmiş akranlar—akran benzeri söylem, yapıcı anlaşmazlık, rol yapma—biçiminde çeşitli dinamikler yaratır ve bu dinamikler [[collaborative-learning|işbirlikçi öğrenmeyi]] ve [[socratic-method|Sokratik tarzda sorgulamayı]] destekler. Anlamak yerine meydan okumacılığı seçen ajanlar, öğrenenleri daha derin yeniden değerlendirmeye yönlendirebilir (araştırmada yapıcı çatışma ajanları tasarım sonuçlarını iyileştirmiştir).
- **Düşük riskli alıştırma ve simülasyon.** Ajan tabanlı [[simulation|simülasyonlar]] ([[simulating-students|simüle edilmiş öğrenciler]], [[medical-education|klinik]] senaryolar), öğrenenlerin gerçek dünya uygulamasından önce güvenli, tekrarlanabilir ortamlarda pratik yapmalarına olanak tanır.

## Temel riskler ve uyarılar (olumsuz çıkarımlar)

- **Aşırı otomasyon öğrenmeyi içi boşaltabilir.** Bir ajan ne kadar çok otomasyon uygularsa, öğrenen o kadar az bilişsel iş yapar. Proaktif ajanlar, öğrencileri pasif tüketiciler olarak bırakabilir; dayanıklı öğrenmeyi oluşturan çabayı gerektiren süreçleri zayıflatabilir ve [[cognitive-offloading|aşırı güven]] riskini artırabilir.
- **Azalan üstbilişsel katılım.** Ajanlar planlama ve izlemeyi üstlenirse, öğrenenler eğitimin inşa etmeyi hedeflediği [[metacognition]] ve [[self-regulated-learning|öz düzenlemeyi]] geliştirmeyebilir. Ajanlar bu süreçleri yerine getmeli, onların yerini almamalıdır.
- **Yerinde olmayan güven ve doğrulama boşlukları.** Özerk ajanlar olası görünen ancak doğrulanmamış çıktı üretebilir; öğrenenler ve öğretmenler ona [[trust-calibration|aşırı güvenebilir]]. Ajanlar [[agency|özerkliği]] arttıkça güçlü doğrulama ve [[ai-literacy]] daha önemli hale gelir.
- **Opaklık ve hesap verebilirlik.** Çok ajanlı sistemler [[human-in-the-loop-ai|insan gözetimini]] karmaşıklaştırır—bir hatadan hangi ajan sorumludur ve insan nerede müdahale eder? Koordinasyon hataları ve kişilik kayması, güvenilirliği ve [[pedagogical-safety]]ı zayıflatabilir.
- **[[equity-in-ai-education|Eşitlik]] ve yanlılık.** Ajanlar, eğitim verisi yanlılığını ölçekte yeniden üretebilir ve yetenekli ajan sistemlerine eşitsiz erişim eşitsizliği derinleştirebilir.

## Kanıtlar şu ana dek ne gösteriyor

Somut sonuçlar—ve uyarılar—birikmektedir. [[wang-tutor-copilot-human-ai-live-tutoring-rct-2024|Tutor CoPilot]]—canlı özel derslerde bir insan-YZ sisteminin ilk [[rct|randomize kontrollü denemesi]]—deneyimli özel ders öğretmenlerinin akıl yürütmesinden derlenen gerçek zamanlı, uzman benzeri rehberlik sağladı: **900 özel ders öğretmeni ve ~1.800 öğrenci** boyunca, erişimi olan öğretmenlerin öğrencileri konuları öğrenme olasılığı **yüzde 4 puan daha yüksekti** ve en düşük puanlı öğretmenlerde **yüzde 9 puan** değerine yükseldi; bu öğretmenlerin öğrencileri, kontrol grubundaki daha yüksek puanlı öğretmenlerin öğrencilerine yetişti. Her özel ders öğretmeni için yıllık yaklaşık **\$20’ye** mal oldu ve **550.000’den fazla özel ders mesajının** analizi, öğretmenlerin yanıtları hemen vermek yerine yönlendirici sorular sormaya doğru kaydığını gösterdi—bu, YZ’nin [[teacher-role|öğretmenin]] yerini almak yerine onu güçlendirdiğinin açık bir örneğidir.

Ancak “ajansal” olmak otomatik olarak daha iyi değildir. [[ilieva-agentic-genai-higher-education-2026|Bir e-ticaret kursunda 130 öğrenciyle yapılan bir çalışma]], hem [[generative-ai]] sohbet robotlarının hem de GAI ajanlarının geleneksel [[online-teaching-and-learning|e-öğrenmeden]] yüksek puan aldığını—hem öğrenme gelişimi hem de [[personalized-learning|kişiselleştirme]] açısından—buldu; yine de **sohbet robotu ile ajan koşulları arasında istatistiksel olarak anlamlı bir fark yoktu**, dolayısıyla eklenen özerklik eklenen öğrenme değerine dönüşmedi. Önerilen Ajan GAI Destekli Öğrenme Çerçevesi buna göre ajanları **sınırlı, insan gözetimli öğrenme ortakları** olarak ele alır; hedefler, kontrol noktaları ve nihai kararlar insanlar için ayrılmıştır.

İki uyarı daha önemlidir. Birincisi, **geri çekilme**: randomize denemeler, kısa süreli YZ yardımının bile sonraki desteksiz performansı düşürebileceğini gösterir ve geri çekilme sonrası aralık—[[cognitive-washout-ai-skill-decay-2026|bilişsel yıkanma]] olarak adlandırılır—neredeyse tamamen ölçülmemiştir, dolayısıyla ajan destekli [[learning-gains|öğrenme kazanımlarının]] kalıcılığı bilinmemektedir. İkincisi, **değerlendirme**: [[zhang-platform-scores-miss-ai-teaching-agents-2026|bir tıp müfredatında sekiz YZ öğretim ajanının dağıtılmasında]], platform tarafından üretilen puanlar ajanları bağımsız bir uzman rubriğinden farklı sıraladı (platformun üçüncü sıradaki ajanı öğretme kalitesinde sonuncu oldu), çünkü platform puanları [[pedagogical-agent|ajanın]] öğretme kalitesi yerine öğrenci performansını endeksler. [[governance]] incelemesi olan [[beyond-agent-label-agentic-ai-governance-2026|Beyond the Agent Label]], **özerkliğin kanıtların olgunluğunu ya da hesap verebilir insan kontrolünün gücünü aşmaması gerektiğini** belirten bir orantılılık kuralı ekler ve kanıtların eser düzeyinde sonuçlar için en güçlü, kalıcı öğrenme ve eşitlik için en zayıf olduğunu not eder. Bir tane nasıl oluşturulacağı için bkz. [[developing-ai-tutor]]; işe yarayıp yaramadığını nasıl değerlendireceğiniz için bkz. [[evaluating-ai-interventions-methods]].

## Kanıt tabanının durumu

Kanıt tabanı hâlâ ortaya çıkmaktadır. Bilgi tabanının [[agentic-ai|Eğitimde Ajan YZ]] sentezi, 474 çalışmanın bir [[meta-analysis-systematic-review|kapsam taramasına]] dayanır; ancak [[higher-ed|yükseköğretimde]], [[stem-education|STEM’de]], kısa vadeli tasarımarda ve metin tabanlı özel derste önemli bir yoğunlaşma olduğunu not eder; incelenen çalışmaların yalnızca azınlığı sistemlerini açıkça eğitim teorisine dayandırmıştır ve titiz uzun vadeli sınıf içi doğrulama sınırlı kalmaktadır.

Temel tasarım uyarısı bu nedenle daha fazla özerkliği daha iyi öğrenmeyle eşitlememektir. [[agentic-ai-pedagogical-best-practice-2026|Ajan YZ ve Pedagojik En İyi Uygulamalar]], ajan inisiyatifinin öğrenenin kendi planlamasını, izlemesini, yargısını ve çabasını ortadan kaldırmaması için kasıtlı sürtünme, dinamik iskeleleme ve insan gözetimi önermektedir. Ayrıca bkz. [[intelligent-tutoring|Akıllı Öğretim]] ve [[human-in-the-loop-ai|İnsan-Devrede YZ]].
