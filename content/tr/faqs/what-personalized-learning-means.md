---
title: "Kişiselleştirilmiş Öğrenme Gerçekte Ne Anlama Gelir ve Ne Zaman Yardımcı Olur?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [designing-ai-into-learning, checking-whether-educational-ai-works, reducing-over-reliance, does-ai-help-students-learn]
weight: 82
foundations: [agency, learner-identity]
pedagogy: [self-regulated-learning, metacognition, scaffolding, student-engagement]
technology: [generative-ai, adaptive-learning, intelligent-tutoring, learning-analytics]
assessment: [formative-assessment, assessment-validity]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, longitudinal study]
audience: [instructors, instructional designers, administrators, educational technology developers]
level: [higher ed, secondary]
source_updated: "2026-10-30T13:20:00-04:00"
translation_of: faqs/what-personalized-learning-means
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Platform her öğrenci için kişiselleştirilmiş bir deneyim vaat ediyor. Alıştırma sorularını yeniden sıralayabilir, bir açıklamayı öğrencinin futbola olan ilgisi etrafında yeniden yazabilir, geçen haftanın konuşmasını hatırlayabilir ya da öğrencinin sırada ne çalışacağını seçebilir. Dördü de kişiselleştirme diye adlandırılıyor ve bunlardan yalnızca biri buna benzer bir biçimde test edildi.

Bir meslektaşınıza vereceğiniz kısa yanıt: kişiselleştirme, öğrenme deneyiminin bir parçasında bir değişikliği adlandırır ve değeri üç şeye bağlıdır: neyin uyarlandığı, uyarlamayı hangi kanıtın yönlendirdiği ve değişikliğin amaçladığınız öğrenmeyi iyileştirip iyileştirmediği. Tanıdık bir örnek ya da duyarlı bir konuşma, hiçbir şey öğretmeden kişisel hissettirebilir. Etkili bir uyarlama görünmez olabilir. Bu bilgi tabanındaki en net deneysel sonuç dardır: on Taipei lisesinde beş aylık bir Python sertifika kursunda, uyarlanabilir problem sıralamasına rastgele atanan öğrenciler, yüz yüze ve yardımsız bir final sınavında sabit bir sıralamaya ve aynı sohbet robotu erişimine sahip öğrencilerden yaklaşık 0,150 standart sapma daha yüksek puan aldı ([[chung-personalized-ai-tutors-llm-reinforcement-learning-2026|Chung ve ark., 2026]]). Bu, belirtilen koşullar altında sıralamayı destekler. Kişiselleştirilmiş diye satılan her şeyi doğrulamaz.

## Kısa özet

**1.** Hangi parçanın uyarlandığını adlandırın: sunum, ilgi bağlamı, zorluk ve destek, sıra ve tempo ya da hedefler ve seçim.

**2.** Uyarlamayı hangi kanıtın tetiklediğini ve yanlış bir öğrenen modelinin nasıl düzeltildiğini sorun.

**3.** Uyarlamanın varış noktasını koruyup korumadığını yoksa sessizce düşürüp düşürmediğini kontrol edin.

**4.** Hiç destek olmamasıyla değil, inandırıcı bir alternatifle karşılaştırın.

**5.** Deneyimden memnuniyeti değil bağımsız performansı ölçün.

**6.** Öz düzenlemeyi izleyin. Algılanan kişiselleştirme daha güçlü değil, daha zayıf öz düzenlemeyle ilişkilendirilmiştir.

## Kişiselleştirilmiş öğrenme denen beş şey

Sunum değişiklikleri en az tartışmalı olanlardır: daha kısa metin, daha yalın sözcük dağarcığı, farklı bir biçim ya da ortam. Doğruladığınız şey, anlam korunurken erişimin ve anlamanın iyileştiğidir.

İlgi ve bağlam uyarlamaları örnekleri, analojileri ya da mesleki ortamları öğrencinin etrafında yeniden yazarlar. Tanıdıklık tek başına fazla bir şey ortaya koymaz, bu yüzden bağlamın doğru ve kavram için gerçekten yararlı olup olmadığını sorun.

Zorluk ve destek uyarlamaları güçlüğü, ipuçlarını, çözümlü örnekleri ya da geri bildirimi değiştirir. Yerlerini, destek gösterilmiş ihtiyacı izlediğinde ve değerli çabayı yerinde bıraktığında kazanırlar.

Sıra ve tempo uyarlamaları bir sonraki görevi ve alıştırmanın ne kadar süreceğini seçer. Aşağıdaki kanıtlarda deneysel desteğe sahip tek biçim budur ve yine de seçimi haklı çıkaracak kadar iyi bir öğrenen modeline bağlıdır.

Hedef ve seçim uyarlamaları öğrencilerin bir proje, bir yol ya da bir uygulama seçmesine izin verir. Seçimler değerli bir hedefe hizmet ettiğinde ve ilerlemeye yine izin verdiğinde yardımcı olurlar.

[[adaptive-learning|Uyarlanabilir öğrenme]], üçüncü ve dördüncü için bir mekanizmadır: sistem, öğrenen hakkındaki bilgiye yanıt olarak öğretimi değiştirir. Kişiselleştirme aynı zamanda eğitmen yargısı, sabit seçenekler ve öğrenci seçimi yoluyla da gerçekleşir. [[personalized-learning|İki kavramı]] ayrı tutmak önemlidir, çünkü uyarlanabilir sıralama kanıtı, okumanın ilgi temelli yeniden yazımlarına aktarılmaz.

## Kanıtların gösterdiği

**Belirli bir uyarlama yardımsız performansı iyileştirdi.** Chung ve ark. Python için korumalı bir sohbet robotunu bir sonraki alıştırma problemini seçen pekiştirmeli öğrenme algoritmasıyla birleştiren bir platform kurdu ve on liseyle beş aylık bir sertifika kursunda kullandı. Öğrenciler uyarlanabilir sıralama ile sabit sıralama arasında rastgele atandı ve iki grup da aynı sohbet robotu erişimine sahipti; sıralamanın farkı sahiplenmesini sağlayan tasarım budur. 0,150 standart sapmalık avantaj yüz yüze ve yardımsız bir final sınavında ortaya çıktı. İki şey akılda tutmaya değer: karşılaştırma sıralamayı erişimden yalıtıyor ve çıktı katılım değil yardımsız performans. Çalışmanın göstermediği şey, kişiselleştirilmiş açıklamaların, yeniden yazılmış materyallerin ya da hatırlanan tercihlerin yardımcı olduğudur. Müdahale bunlar değildi.

**Algılanan kişiselleştirme daha zayıf öz düzenlemeyle birlikte gidebilir.** [[personalization-paradox-adaptive-learning-emotions-2026|Li, Lin ve Qiu (2026)]], 486 Çinli lisans öğrencisini üç anket dalgası boyunca izledi ve uyarlanabilir ortamlarını daha kişiselleştirilmiş algılayan öğrencilerin daha zayıf [[self-regulated-learning|öz düzenlemeli öğrenme]] bildirdiğini buldu. İlişkinin büyük kısmını akademik duygular taşıdı; azalan keyif ile birlikte artan kaygı ve can sıkıntısı, toplam etkinin yarısından fazlasını açıkladı. Tasarım gözlemseldir ve öz bildirime dayanır, bu yüzden düşüşe kişiselleştirmenin neden olduğunu ortaya koyamaz. Yine de bir pilotun izlemesi gereken çıktıyı belirler, çünkü her belirsizliği hızla yanıtlayan bir sistem, dersin kurmayı amaçladığı planlamayı ve yargıyı ortadan kaldırabilir.

**İlgi ve anlayış ayrı kontrollerdir.** [[personalized-learning]] sentezi, Bernstein ve Sibia'nın ilgi temelli bilgi işlem analojileri üzerine küçük, nitel bir ön baskı olan *Flawed but Memorable* çalışmasını ele alıyor. Öğrenci tepkileri çeşitlilik gösterdi ve analojinin kaynak alanına aşinalık, analojinin nerede çöktüğünü fark etmelerine yardımcı oldu. Pratik okuma, öğrenenlerin nelerden hoşlandığı kadar neleri zaten bildiklerini de sormak ve bildirilen akılda kalıcılığı bir öğrenme sonucu değil bir deneyim ölçüsü olarak ele almaktır.

## Uyarlamaya güvenmeden önce tanıyı kontrol edin

Uyarlanabilir bir sistem ancak öğrenen hakkındaki tahmini iyiyse makul bir sonraki görevi seçebilir ve bu tahmin güvenirliği eşit olmayan sinyallere dayanır. Doğru bir yanıt tahmin edilmiş, kopyalanmış ya da yardımla ulaşılmış olabilir. Yavaş bir yanıt, zorluk değil bir kesinti ya da bir erişilebilirlik ihtiyacı anlamına gelebilir. Belirtilen ilgiler önkoşul bilgisi hakkında hiçbir şey söylemez ve öz değerlendirmeler dengesiz kalibre edilir; bu, aynı kanıt tabanının sürekli bulduğu [[metacognition|üstbilişsel]] sorundur.

Her sinyali yanılabilir bir kanıt olarak ele alın ve yanlış bir profili düzeltmenin bir yolunu tutun. Öğrencilere bir görevin neden seçildiğini görme ve tanının yanlış olduğunu söyleme yolu verin. Öğrencinin itiraz edemediği görünmez bir öğrenen modeli, ne kadar iyi tahmin ederse etsin bir tasarım kusurudur.

Bu sistemleri kuran herkes için çalıştırılacak iki ayrı değerlendirme vardır: öğrenen tahmini ilgili yetkinliği yansıtıyor mu ve ona göre hareket etmek sonuçları iyileştiriyor mu? Bir sonraki yanıtı doğru tahmin eden bir model ilk testi geçmiştir ve ikincisini ne hak etmiş ne de ele almıştır.

## Zorluğu, seçimi ve geri dönüş yolunu koruyun

**Varış noktasını düşürmeden desteği uyarlayın.** Yönergeleri netleştirmek ya da çözümlü bir örnek eklemek, öğrencinin zorlu bir çıktıya ulaşmasına yardımcı olur. Zorlanan bir öğrenciyi kalıcı olarak daha kolay materyale yönlendirmek o çıktıyı engeller. Geri dönüş yolunu görünür kılın ve kaç öğrencinin o yolda olduğunu kontrol edin, çünkü uyarlanabilir sistemlerin insanları sessizce kaybettiği yer telafi eğitimidir.

**Öğrenenlerin öneriyi incelemesine ve etkilemesine izin verin.** Bir görevin neden önerildiğini açıklayın, profilin düzeltilmesine izin verin ve isteyen öğrenci için genel disipliner açıklamaya makul bir yol tutun.

İlerlemeye bağımsız kontroller yerleştirin. Bir platform içindeki başarı serisi bir ilerleme kuralıdır, kalıcı öğrenmenin kanıtı değil. Yetkinliğin desteğin kaldırılmasına dayanıp dayanmadığını görmek için gecikmeli ya da çeşitlendirilmiş bir görev kullanın; [[reducing-over-reliance|aşırı bağımlılığın]] döndüğü ayrım da budur.

Orantılı bilgi toplayın. İlgi temelli bir örnek nadiren ayrıntılı bir kişisel geçmiş gerektirir. Ustalık kararları için beceri hakkında kanıt toplayın ve kalıcılığı ve erişimi tanımlayın. Daha fazla kişisel veri otomatik olarak daha iyi öğretim üretmez ve bir yükümlülük doğurur.

## Bu bir derste nasıl görünür

Giriş düzeyi bir matematik dersinde kısa bir tanı, bir önkoşul kavram yanılgısını bir aritmetik hatasından ayırabilir. Kavram yanılgısı olan öğrenci hedefli bir açıklama ve çözümlü bir örnek alır. Diğeri uygulamaya geçer. Sonra ikisi de karşılaştırılabilir bir bağımsız görevi tamamlar; değişmiş bir bağlamda bir uygulama dahil.

Öğrenciler matematiksel hedef sabit ve görünür kalırken tanıdık uygulama bağlamları arasında seçim yapabilir. Eğitmen iki yolun da anlayışı iyileştirip iyileştirmediğini, öğrencilerin akıl yürütmelerini açıklayıp açıklayamadığını ve birinin telafi eğitiminde sıkışıp kalıp kalmadığını kontrol eder. Bunu pilot uygulanacak bir tasarım olarak ele alın; hiçbir platform bu yapılandırmada doğrulanmadı.

Okuma yoğun bir derste bir sözlük ya da isteğe bağlı bir açıklama erişimi iyileştirebilir. Disipliner okumanın kendisi hedefse, öğrencilerin yine de özgün metinlerle destekli alıştırmaya ihtiyacı vardır ve izlence uyarlamanın görevin hangi kısmına yardım ettiğini söylemelidir.

## Kişiselleştirmenin ne kattığını değerlendirin

Kişiselleştirilmiş sürümü inandırıcı bir şeyle karşılaştırın: iyi tasarlanmış ortak bir sıra, uyarlanabilir sıralaması olmayan aynı öğretmen ya da özenle seçilmiş bir örnek menüsü. Kişiselleştirilmiş kolunuz aynı zamanda daha fazla alıştırma, daha fazla geri bildirim ve daha fazla zaman ekliyorsa karşılaştırma kişiselleştirmeyi yalıtamaz ve dürüst rapor bunu söyler.

Mümkün olduğunda yardımsız performansı, kalıcılığı ya da aktarımı, zamanı ve çabayı, öğrenci özerkliğini ve kimin yararlandığını ölçün. Memnuniyeti ve algılanan uyumu manşet değil ek çıktılar olarak tutun. Hangi iyileşmenin geliştirme, izleme ve veri işleme maliyetlerini haklı çıkaracağına önceden karar verin, çünkü bu maliyetler etki görünsün görünmesin ödenir.

## Size geri dönecek olanlar

**"Öğrenciler onu tercih ediyor, yani işe yarıyor."** Tercih, deneyim hakkında bir kanıttır. Chung çalışması alternatifin modelidir: aynı araç, aynı erişim, sıralamada tek bir fark ve platform ortada yokken ölçülen bir çıktı.

**"Öğrenciyi hatırlıyor, yani kişiselleştirilmiş."** Bellek bir özelliktir. Sorular, hatırlanan bilginin doğru, ilgili, revize edilebilir olup olmadığı ve öğretim açısından daha iyi bir karar vermek için kullanılıp kullanılmadığıdır.

**"Her öğrenci tamamen farklı bir derse ihtiyaç duyar."** Genellikle yararlı varyasyon daha dardır: ortak hedefler içinde bir açıklama, bir sıra, bir ipucu ya da bir bağlam. Belirlediğiniz ihtiyacı ele alan en küçük uyarlamayı test edin.

**"Kişiselleştirme paradoksu, zaten zorlanan öğrencilerden ibaret."** Olabilir, çünkü tasarım ikisini ayıramaz. Pilotun öz düzenlemeyi doğrudan, birden fazla zaman noktasında ölçmesi ve ilişkinin pazarlamanın iddia ettiği yönde gittiğini varsaymaması bu yüzdendir.

## Bu hafta ne yapmalı

**1.** Bir öğrenme güçlüğü seçin ve onu ele almasını beklediğiniz uyarlamayı adlandırın.

**2.** Uyarlamayı tetikleyecek kanıtı ve kanıt yanlış olduğunda ne olacağını yazın.

**3.** İnandırıcı bir karşılaştırma ve bir yardımsız öğrenme kontrolü belirtin.

**4.** İki öğrenciye önerinin yararlı olup olmadığını ve onu nasıl yönlendireceklerini bilip bilmediklerini sorun.

**5.** Uyarlamanın ortadan kaldırıyor olabileceği bir şeyi not edin; verimli zorluk ya da öğrencinin vermesi gereken bir karar gibi.

## Bundan sonra nereye gidilir

[[personalized-learning]] tanımlar, pazarlama sözcük dağarcığı ve kanıt tabanı için kavram sayfasıdır; [[adaptive-learning]] ise mekanizmayı ve ölçümünü kapsar. [[intelligent-tutoring]] öğrenen modelinin öğretmen tasarımıyla buluştuğu yerdir.

Kişiselleştirmenin birkaç karardan biri olduğu bir etkinlik tasarlamak için [[designing-ai-into-learning|YZ'yi öğrenme deneyimine tasarlama]] sayfasına bakın. Sistemi ölçeklemeden önce işe yarayıp yaramadığını nasıl anlayacağınız için [[checking-whether-educational-ai-works|eğitsel bir YZ'nin işe yarayıp yaramadığını kontrol etme]] sayfasına bakın.
