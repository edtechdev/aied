---
title: "YZ ile Üretilen Test ve Sınav Sorularının Gerçekten İyi Olup Olmadığını Nasıl Kontrol Ederim?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [ai-grading-fairness-reliability, redesign-assessment-ai-era, checking-whether-educational-ai-works, does-ai-help-students-learn]
weight: 78
technology: [generative-ai, llm]
assessment: [automated-question-generation, assessment-validity, educational-measurement, formative-assessment, summative-assessment]
methods: [quantitative-research, research-methods-aied]
research_method: [experiment, case study]
audience: [instructors, assessment designers, instructional designers]
level: [higher ed, secondary]
source_updated: "2026-10-30T12:05:00-04:00"
translation_of: faqs/check-ai-generated-question-quality
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Ders notlarınızdan yirmi soru istiyorsunuz. Yanıt anahtarları, açıklamalar, zorluk etiketleri ve Bloom taksonomisi kategorileriyle birlikte, bitmiş görünen biçimlendirilmiş bir belge olarak geri geliyorlar. Adınız birazdan onun üzerine gidecek.

Bir meslektaşınıza vereceğiniz kısa yanıt: üretilen sorular adaylardır, bir değerlendirme değil. Her birini kendiniz çözün, maddenin öğrenciden gerçekte ne yapmasını istediğini kontrol edin ve saymaya başlamadan önce öğrencilerin ona nasıl yanıt verdiğini öğrenin. Bu bilgi tabanındaki en büyük iki çalışmada ilginç sinyal, üretimin işe yaraması değil, nerede başarısız olduğudur. Derse özgü bir iş akışı içinde yinelemeli üretim, 71 üniversite sınıfında kullanılabilir çoktan seçmeli sınavlar üretti ([[assessing-quality-ai-generated-exams-field-2025|Isley ve ark., 2025]]). 311 dağıtılmış sorunun veri bilimi denetiminde, modelin zorluk etiketleri yanlarında ürettiği Bloom düzeylerini neredeyse kusursuz izledi (Spearman ρ = 0,90), öğrencilerin gerçekte ne puan aldığını ise ρ = 0,06 ile izledi ([[student-llm-use-ai-question-difficulty-data-science-2026|An ve Wang, 2026]]). Etiket, istemin bir tanımıydı; maddenin ölçümü değil.

## Kısa özet

**1.** Hiçbir şey üretmeden önce hedeflediğiniz çıktıyı ve yeterli bir yanıtın sağlayacağı kanıtı yazın.

**2.** Setin hangi çıktıları ve ne sıklıkla örneklediğini görebilmeniz için bir plan şeması kurun.

**3.** Anahtara güvenmeden önce her maddeyi kendiniz çözün ve açıklamayı kontrol edilmesi gereken bir iddia olarak okuyun.

**4.** Bir öğrencinin yanıtlamak için ne yapması gerektiğini sorun. "Çözümle" diyen ama hatırlama gerektiren bir soru, bir hatırlama sorusudur.

**5.** Zorluk etiketlerini psikometri değil, istem üst verisi olarak ele alın.

**6.** Maddeleri pilot uygulamaya tabi tutun ve nasıl işlediklerini inceleyin, sonra zayıf olanları revize edin.

## Kanıtını istediğiniz öğrenmeyle başlayın

Üretim o kadar ucuz ki çıktı biçimi sessizce şartname haline geliyor. Notlarınız düzgün çoktan seçmeli maddeler üretiyorsa, izlence ne iddia ederse etsin, öğrencilerin makul ifadeler arasında seçim yapıp yapamadığını ölçmeye başlarsınız.

Önce çıktıyı, sonra yeterli bir yanıtın sağlayacağı kanıtı, sonra öğrencilerin getirmesi beklenen bilgiyi belirtin. Ders materyallerini, beklediğiniz kavram yanılgılarını, izin verilen araçları ve yanıt biçimini dahil edin. Öğrencilerin kanıtı yorumlamasını istiyorsanız, madde yorum gerektirmek zorundadır; bir tanım sorusuna kelimeyi eklemek bunu yapmaz. Uzun bir senaryo bile oyunu ele veren tek bir tanıdık ifadeyle yanıtlanabilir kalabilir.

Bir değerlendirme plan şeması, çıktıları maddelerle karşılaştıran bir tablodur ve değeri, boşlukları öğrencilerden önce açığa çıkarmasıdır. Dengeyi de görünür kılar: en kolay materyalden ürettiğiniz her madde, en çok önemsediğiniz çıktıya ayırmadığınız bir maddedir.

## Her maddeyi altı boyutta inceleyin

Anahtarla başlayın. Yetkili ders içeriğine karşı savunulabilir mi ve açıklama bağımsız olarak kontrol ettiğinizde ayakta kalıyor mu? Anahtar ve açıklama çoğu zaman aynı kusurlu adımdan gelir, yani birini kontrol etmek diğerini kontrol etmez.

Sonra maddeyi yanıtlamanın, öğrenciden okuma ile seçme arasında gerçekte ne yapmasını gerektirdiğini sorun. Üretilen maddelerin en sık başarısız olduğu ve etiketin en güvenilmez olduğu yer burasıdır.

Ardından hizalanmayı kontrol edin: yanıtlamak, amaçlanan çıktı için mi yoksa komşu ve değerlendirmesi daha kolay bir şey için mi kanıt sağlıyor?

İfadeyi bir öğrencinin okuyacağı gibi okuyun. Gereken bilgi var mı ve yapınızla ilgisi olmayan belirsizlik giderilmiş mi?

Seçeneklere ve notlandırma kurallarına birlikte bakın. Çeldiriciler makul ve hem birbirlerinden hem de anahtardan ayrı mı; anahtar, ölçütünüzün puan vereceği meşru alternatif yanıtları tanıyor mu?

Son olarak, maddenin kimi dışladığını sorun. Okuma yükü, kültürel bağlam, görseller ve biçimlendirme, çıktıyla ilgisiz talepler yükleyebilir. Çok dilli ya da engelli bir öğrenci için hızlı okumayı ödüllendiren bir madde, amaçlamadığınız bir şeyi ölçüyordur ve bu, [[differential-effects-across-learner-groups|alt grup performansında]] ortaya çıkar.

İkinci bir model sorunları fark etmenize yardımcı olabilir; iki model arasındaki uzlaşma ise doğruluğun bağımsız doğrulanması değildir. Aynı eğitim verisini ve arıza kiplerini paylaşırlar. Maddeyi çözün, sonra sayılacak olanlara yetkin birinin bakmasını sağlayın.

## Zorluk etiketinin karar vermesine izin vermeyin

[[automated-question-generation|Soru üretimi]] literatürü, etiketlerin başarısızlığı konusunda üretimin başarısından daha yararlıdır. [[student-llm-use-ai-question-difficulty-data-science-2026|An ve Wang (2026)]], veri bilimi derslerinde yazılmış 378 soruyu inceledi; bunlardan 311'i 54 öğrenciye 7.888 yanıtla dağıtıldı. Modelin kolay, orta ve zor etiketleri kendi birlikte ürettiği Bloom düzeyleriyle ρ = 0,90, ampirik madde zorluğuyla ise ρ = 0,06 düzeyinde ilişkiliydi. Dağıtılan maddelerin kabaca %70'i her öğrenci tarafından doğru yanıtlandı, bu da ilke olarak bile bir zorluk etiketinin izleyebileceği neredeyse hiç varyasyon bırakmadı.

Bundan iki ders çıkıyor. Birincisi, zorluk bir madde ile bir nüfus arasındaki etkileşimin özelliğidir, yani madde uygulanmadan önce üretilen hiçbir etikete ölçülmüş değer olarak güvenilemez. İkincisi, herkesin doğru yanıtladığı bir madde bankası kolay bir değerlendirme değil, işe yaramaz bir değerlendirmedir: kimin neyi bildiğine dair neredeyse hiç bilgi taşımaz.

Olumlu durum, satıcı iddialarından daha dar ve tam olarak bilinmeye değer. [[assessing-quality-ai-generated-exams-field-2025|Isley ve ark. (2025)]], her dersin eğitmen tarafından sağlanan kendi materyallerine koşullu olarak her maddeyi üreten, yargılayan ve revize eden bir döngü kullanarak 71 üniversite sınıfı ve kabaca 1.200 öğrenci için on soruluk çoktan seçmeli sınavlar üretti, sonra maddeleri insan yazımı sınavlarla karşılaştırdı. Bu, içinde bir gözden geçiren bulunan, ders başına çalıştırılan bir iş akışıdır; genel içerik üzerine tek bir istem değil. Destek, bu koşullar altındaki iş akışı içindir ve aynı modelin düzenlenmemiş notların yapıştırılmasından ürettiği şeye uzanmaz.

## Üret, incele, pilot uygula, revize et döngüsü çalıştırın

Bir plan şemasına karşı üretin ve amaçlanan çıktıyı, anahtarı, kısa bir çözümü ve her çeldiricinin yakalamayı amaçladığı kavram yanılgısını isteyin. Ek açıklamalar tasarımı incelenebilir kılar. Tasarımın sağlam olduğunun kanıtı değildirler.

Biriktirmeden önce onarın. Desteklenmeyen iddiaları, yinelenen maddeleri, kökteki istemsiz ipuçlarını, birden çok savunulabilir anahtarı ve yapıyla ilgisiz karmaşıklığı silin ve neyi değiştirdiğinizi not edin, çünkü onarım örüntüsü istemin hangi kısmını düzeltmeniz gerektiğini söyler.

Pilotun orantılı olduğu yerde pilot uygulayın. Düşük riskli alıştırma ya da değerlendirme içinde yönetilen bir pilot, size yanıt verisi verir. Öğrencilere belirsiz ya da yanlış bir soruyu nasıl bildireceklerini söyleyin ve bu bildirimleri okuyun, çünkü en bilgilendirici hata sinyaliniz onlardır.

Sonra maddelerin nasıl işlediğini inceleyin: doğru yanıtlayanların oranı, hangi çeldiricilerin yanıt çektiği ve maddedeki başarının değerlendirmenin geri kalanındaki performansla birlikte gidip gitmediği. Güçlü öğrencilerin başarısız olduğu, zayıf öğrencilerin başarılı olduğu bir madde zor bir soru değil, bir kusurdur. Küçük bir sınıfta bu istatistikler istikrarsızdır, bu yüzden bir yüzdeyi hüküm saymak yerine onları içerik incelemesi ve öğrenci açıklamalarıyla birleştirin.

Revize edin ve kaydı tutun: onaylanmış sürüm, hizmet ettiği çıktı, anahtar, gerekçe, inceleme notları ve uygulama geçmişi. Büyük ya da yüksek riskli bankalarda değerlendirme uzmanlarının ve düzgün psikometrik yöntemlerin yeri burasıdır; [[educational-measurement|ölçme]] uzmanlığının yerini dikkatli bir okuma alamaz.

## Bu bir derste nasıl görünür

Giriş düzeyi bir sosyoloji dersinde çıktı, yapısal bir açıklamayı bireysel bir açıklamadan ayırmak olabilir. Zayıf bir madde öğrencilerden "yapısal"ı tanımlamasını ister, bu da sözcük tanımayı ölçer. Daha güçlü bir aday, bir aile ve bir istihdam kararı hakkında kısa bir senaryo verir, sonra hangi açıklamanın yapısal bir kısıtı en iyi tanımladığını sorar; çeldiriciler makul ama farklı yorumları temsil eder.

Eğitmen senaryonun anahtarı gerçekten desteklediğini, iki seçeneğin aynı fikri ifade etmediğini ve yanıtlamanın dersin hiç tanıtmadığı terminolojiye bağlı olmadığını kontrol eder. Tek satırlık bir izleme sorusu, "hangi ayrıntı seçiminizi destekliyor?", seçilen seçeneğin gizlediği akıl yürütmeyi ortaya çıkarır. Bu uyarlama bir madde biçimi olarak test edilmemiştir ve değeri daha dardır: yukarıdaki inceleme soruları bir madde uygulanmadan önce yanıtlanabilir ve kötü bir anahtar öğrenciler görmeden onarılabilir.

Kendi alıştırma sorularını üreten öğrenciler için aynı kural kendi düzeylerinde geçerlidir: maddeyi deneyin, açıklamayı ders kaynaklarına karşı kontrol edin ve çözülemeyen durumları konuyu bilen birine getirin. Öğrencileri üretilen anahtarları eleştirmeden kabul etmeye alıştıran [[study-with-ai|çalışma pratiği]], yanlış alışkanlığı öğretir.

## Size geri dönecek olanlar

**"Bir yanıt ve bir açıklama verdi."** İkisi de aynı hatayı yineleyebilir ve açıklama tam da akıcı olduğu için güven üretir. Akıl yürütmeyi kendi kendini yeniden ifade etmesine karşı değil, materyallerinize karşı doğrulayın.

**"Bunlar yalnızca alıştırma soruları."** Yanlış anahtarlar düzeltilmediğinde alıştırma kavram yanılgılarını öğretir ve öğrenciler hatayı doğru yanıt kadar kolay çalışır. Riskin düşmesi, ne kadar incelemenin orantılı olduğunu değiştirir. Doğruluğun önemli olup olmadığını değiştirmez.

**"Öğrenciler testi sevdi."** Hoşlanma, deneyim hakkında bir kanıttır. Herkesin rahatça bitirdiği kolay bir test iyi hissettirir ve az şey ölçer; veri bilimi denetimi de maddelerin popülerliğine kullanılabilir hiçbir zorluk sinyalinin eşlik etmediğini buldu.

**"Ölçüt ya da Bloom etiketleri, çıktıları karşıladığını gösteriyor."** Aynı üretim adımının sağladığı Bloom etiketleri, mevcut en az bağımsız kanıttır. Etiketlere karşı ρ = 0,90, öğrenci performansına karşı ρ = 0,06, ölçüldüğünde tam olarak bunun göründüğü şeydir.

## Bu hafta ne yapmalı

**1.** Bir çıktı seçin ve yeterli bir yanıtın sağlayacağı kanıtı yazın. Sonra ona karşı beş madde üretin; anahtarı, çözümü ve her çeldiricinin arkasındaki amaçlanan kavram yanılgısını isteyin.

**2.** Beşini de anahtarlara bakmadan çözün ve sizinle modelin anlaşamadığı maddeleri kaydedin.

**3.** Bir meslektaşınızdan en güçlü iki adayı hizalanma ve belirsizlik açısından incelemesini isteyin; ikinizin de savunamadığı her şeyi silin.

**4.** Hayatta kalanları, öğrencilere hangi ayrıntının seçimlerini desteklediğini soran kısa bir izleme sorusuyla pilot uygulamaya tabi tutun.

**5.** Neyi ve neden değiştirdiğinizi kaydedin, böylece sonraki parti aynı istemden değil daha iyi bir istemden başlasın.

## Bundan sonra nereye gidilir

[[automated-question-generation|Otomatik soru üretimi]], üretim yöntemleri ve ölçülen kaliteleri için kavram sayfasıdır; [[educational-measurement|Eğitsel ölçme]] ise madde analizini, güvenirliği ve bir pilotun ancak işaret ettiği psikometriyi kapsar. İkisi de tüm döngünün hizmet ettiği standart olan [[assessment-validity|değerlendirme geçerliliği]] altında durur.

Aynı sorunun yargı tarafı [[ai-grading-fairness-reliability|YZ notlandırma]] sayfasına aittir, çünkü kötü notlandırılmış iyi bir madde, iyi notlandırılmış kötü bir maddeden daha iyi değildir. Öğrenciler YZ kullanabildiğinde bir notun neyi temsil etmesi gerektiğine dair daha geniş soru için [[redesign-assessment-ai-era|YZ çağında değerlendirmeyi yeniden tasarlama]] sayfasına bakın.
