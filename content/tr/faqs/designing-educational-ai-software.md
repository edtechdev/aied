---
title: "Etkili Eğitim Yapay Zeka Yazılımı Tasarlamaya Yönelik En İyi Uygulamalar ve İpuçları Nelerdir?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-28T11:39:29-04:00"
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

Ekibinizin çalışan bir prototip eğitmeni var ve üç hafta sonra bir bölge okulunda demo yapacaksınız. Ya da bir ortak okul, ders okuma aracının üzerine bir sohbet arayüzü koymanızı istedi ve birileri bunun iki haftalık bir iş olduğunu söylüyor. Ya da bir satın alma incelemecisi güvenlik bölümünü tek satırlık bir notla geri gönderdi: tam olarak neyi test ettiniz?

Yanıt, çoğu ürün şartnamesinin varsaydığından daha dar. Eğitim YZ'si, insan denetimi altında sınırları belirlenmiş bir uzman olarak çalışır: tanımlı bir alanla sınırlanmış yetenek, model belleği yerine öğretim elemanının onayladığı içeriğe dayanma, onu kullanan öğretmenler ve öğrenenlerle birlikte tasarlanma ve süregelen çok turlu etkileşim üzerinden değerlendirilme. Çoğu ekibin atladığı madde bu sonuncusudur. Aşağıdaki benchmarkta test edilen her modelde pedagojik zarar ortaya çıktı ve başarısızlık oranları tek turlu etkileşimlerde %17,7 iken çok turlu konuşmalarda %77,8'e yükseldi.

## Kısa özet

**1.** Sistemin neye, öğretmenin neye karar verdiğini yazın. Bu sınır mimari haline gelir.

**2.** Tek istemleri genel bir güvenlik ölçütüne karşı değil, çok turlu ve disiplin duyarlı etkileşimi gerçek müfredata karşı değerlendirin.

**3.** Yanıtları onaylanmış içeriğe dayandırın ve doğrulayan bileşeni konuşan bileşenden ayrı tutun.

**4.** Sistem onu notluyor olsa bile her öğrenci teslimini güvenilmeyen girdi olarak ele alın.

**5.** Deneme kapısını, yükseltme yolunu ve öğretmen geçersiz kılmasını pilot öncesinde kurun.

**6.** Erişilebilirliği ve ayrıştırılmış hakkaniyet testini yapılacaklar listesine değil şartnameye koyun.

## Sistemin ne olmasına izin verildiğine karar verin

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert ve arkadaşlarının katılımcı tasarım çalışması]], altı ortaöğretim öğretmeniyle yürütülerek eğitim YZ'sinin özerk bir ajan olması gerektiği varsayımını düzeltiyor. Sınıf içi [[conversational-ai|sohbet robotlarını]] kâğıt üzerinde prototiplemeleri istendiğinde her öğretmen, iki boyutta sınırları belirlenmiş bir uzman tanımladı. Yetki sınırları öğretmenleri kontrolün içinde tuttu, çünkü öğrenci öğrenmesi ve güvenliğine ilişkin sorumluluk devredilemez. Uzmanlık sınırları ise YZ'nin tek tek öğrenciler, sınıf dinamikleri ve kurumsal normlar hakkındaki bağlamsal bilgi eksikliğini yansıtıyordu.

Çizdikleri mimari, dört bileşenden (içerik kapsamını belirleme, içerik sunumu, öğrenciye uyarlama, [[teacher-role|öğretmen]] gözetimi) ve üç koruyucu katmandan oluşuyordu: kapsamı kısıtlayan alan sınırları, güvenli [[personalized-learning|kişiselleştirmeyi]] mümkün kılan içerik filtreleme ve belirsiz durumlar için öğretmen geçersiz kılması. Devir seçiciydi. Gagné'nin dokuz öğretim olayına yerleştirildiğinde öğretmenler içerik sunma, alıştırma problemleri sağlama ve [[formative-assessment|biçimlendirici]] [[feedback|geri bildirim]] verme konusunda YZ'yi benimsedi; hedef belirleme ya da [[summative-assessment|summative]] [[assessment|değerlendirme]] yürütme konusunda ise reddetti.

Aynı şartnameye iki varsayılan girmelidir: sistemi açık öğrenme hedefleriyle hizalamak ve onu kim yazıyor olursa olsun onunla aynı fikirde olmaya değil, nazik ama doğru yanıtlara doğru ayarlamak. Yanlış bir yanıtı pohpohlayan bir eğitmen, öğrenciye o yanıtın doğru olduğunu öğretmiş olur.

Bir ayrıntı bugün ucuz, yarın pahalı: bu öğretmenler modelin akıl yürütmesinin açıklamalarından çok davranışsal şeffaflık, görünür sınırlar ve belirsizlik işaretleri istedi. Altısı da eksiksiz konuşma kaydı, gerçek zamanlı uyarılar ve geçersiz kılma yeteneği istedi ve bunu güvensizlik değil mesleki sorumluluk olarak çerçeveledi. Bunu ilk sprintte tasarlayın, çünkü görünmez hissettirmek üzere kurulmuş bir eğitmene sonradan kayıt eklemek baştan yazmaktır.

## Tek turda değil, konuşma içinde test edin

[[pedagogical-safety|Pedagojik Güvenlik]] sentezi, geleneksel güvenlik testinin eğitim için yetersiz olduğunu savunuyor. Bir sistem toksik içerikten kaçınıp yine de yanıtları aşırı açarak, [[misconceptions|yanlış kanıları]] pekiştirerek, yansıtmayı bastırarak, bağımlılığı teşvik ederek ya da öğretim hedeflerinden saparak zarar verebilir.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] [[benchmark]] bu tabloyu sayılara döküyor. Test edilen her modelde, 3,8B açık ağırlıklı modellerden GPT-5-mini'ye kadar, [[pedagogy|pedagojik]] zarar evrenseldi, ölçek güvenliği güvenilir biçimde iyileştirmedi ve başarısızlık oranları tek turlu etkileşimlerde %17,7 iken çok turlu konuşmalarda %77,8'e tırmandı. İhlal örüntüleri derse göre değişti. 11 boyutlu, 48 alt riskli taksonomisi bilişsel, epistemik, [[metacognition|üst bilişsel]], [[motivation|motivasyonel]]-duyuşsal, gelişimsel ve hakkaniyet ile öğretim hizası kategorilerini kapsıyor ve bir test paketi olduğu kadar bir tasarım kontrol listesi olarak da işliyor.

Tırmanma rakamını test planınız hakkında bir ifade olarak okuyun. Bin tek turlu sondayı geçen bir eğitmen, öğrenci itiraz ettiğinde ya da üçüncü kez sorduğunda beş konuşmanın dördünde başarısız olabilir. Çok turlu test düzeneğini demodan önce kurun.

## İçeriği dayandırın ve doğrulayıcıyı ayırın

İçeriğe dayandırma bir mimari karardır. [[eduguard-safe-rag-llm-tutor|EduGuard]], güvenli bir [[rag|erişimle güçlendirilmiş]] eğitmen olarak, [[cs-education|başlangıç düzeyi programlama]] alanında, öğretim elemanının onayladığı ders erişimini mimari olarak ayrı bir iddia doğrulayıcıyla, açık bir [[cognitive-offloading|aşırı güven]] denetimiyle ve yanlış kanılar, hata ayıklama, kod karışık sorgular ve yanıtı doğrudan isteyen saldırgan istemleri kapsayan, öğretim elemanının yazdığı 600 sorguluk bir benchmarkla birleştirir. GPT-4o-mini ve Llama [[socratic-method|Sokratik]] eğitmen temel çizgilerini geride bıraktı.

Aktarılabilir olan kısım ayrılıktır: doğrulayan bileşenler konuşmaz ve benchmark, nezaketi ölçmek için değil yanıtı çekip almak için yazılmış istemler içerir. [[hallucination-risk|Halüsinasyon riski]], onaylanmış erişimin sınırlaması gereken başarısızlık biçimini ele alır.

## Öğrenci çalışmasını güvenilmeyen girdi olarak ele alın

Çoğu tasarım önerisinin atladığı tehdit modeli, değerlendirilen ürünün içinde oturur. [[humble-prompt-injection-ai-grading-red-team-2026|Humble'ın (2026) saldırgan kırmızı takım değerlendirmesi]], öğrencilerin teslimlerindeki istem enjeksiyonuyla LLM tabanlı bir notlandırıcıyı manipüle edip edemeyeceğini test etti ve manipülasyon işe yaradı: notlandırıcıya talimat veren, çerçevesini değiştiren ya da rol yaptıran enjeksiyonlar, çalışmayı değiştirmeden puanı kaydırıyor.

Değerlendirme ölçütünü ve talimatları öğrencinin denetlediği bağlam penceresinin dışında tutun, talimat benzeri içeriği ayıklayın ya da işaretleyin, hiçbir teslimin kendi ölçütlerini belirlemesine izin vermeyin ve sonuç doğuran her notta insan kararını koruyun. Talimatlarını yargıladığı metinden okuyan bir notlandırıcı, ölçütü adaya vermiş demektir.

## İşi tamamlamak yerine iskeleleyin

Yanıt veren bir sistem, desteklemek için satın alındığı düşünmeyi sona erdirir. Bilete iki parça girer: öğrenci bir şey ortaya koymadan hiçbir çıktının görünmemesini sağlayan bir deneme kapısı ve varış yeri adıyla belirtilmiş bir [[human-in-the-loop-ai|insan yükseltme yolu]]; bir sınıf ürünü için bu, öğretmenin harekete geçebileceği bir biçimde öğretmen demektir. [[scaffolding]] ve [[socratic-method|Sokratik]] örüntü, bir ders planının elle yaptığının ürün halleridir; [[developing-ai-tutor]] tanılama, ipucu basamakları ve geri bildirimi ayrıntılı ele alır.

## Erişilebilirliği ve hakkaniyeti şartnameye koyun

Erişilebilirlik gereksinimleri bir sprint için yeterince somut: klavyeyle çalıştırılabilirlik, ekran okuyucu uyumluluğu, altyazılar ve dökümler, uygun karşıtlık, kullanılabilir metin alternatifleri ve yardımcı [[ai-technologies|teknolojilerle]] uyumluluk. YZ ile üretilen erişilebilirlik özellikleri yine de kalite kontrolünden geçmelidir. Bkz. [[accessibility]].

Hakkaniyet testi tüm hattı incelemeli ve toplam doğruluğa güvenmek yerine davranışı dil, engellilik, kültür ve diğer ilgili öğrenen özelliklerine göre ayrıştırmalıdır. Ortalamada iyi, tek bir grupta kötü puan alan bir sistem başarısızlığı o gruba teslim etmiştir. Bkz. [[bias-mitigation]] ve [[equity-in-ai-education|Hakkaniyet]].

## Onu kullanacak kişilerle birlikte tasarlayın

[[ko-hughes-vsd-student-centered-its-2026|Ko ve Hughes]], değere duyarlı tasarımı, öğrenme platformu tasarımının tarihsel olarak dışında bırakıldığı bir grupla, topluluk kolej öğrencileri ve öğretim elemanlarıyla bir [[intelligent-tutoring|akıllı özel ders sistemine]] uyguladı. Çözülecek değil yönetilecek değer gerilimleri buldular: şeffaflık ile yorumlanabilirlik, [[privacy|mahremiyet]] ile öğretim içgörüsü, ve [[agency|öğrenci özerkliği]] ile sistem yönlendirmeli [[scaffolding]] arasında. Öğrenciler ham model şeffaflığına kıyasla işbirlikçi, insancıllaştırılmış açıklamaları tercih etti ve prototip, [[explainable-ai]], insan döngüde ve mahremiyet denetimleri boyunca 16 değerle uyumlu özellik kodladı.

[[wang-teacher-ai-co-design-review-2026|Wang, Liu ve Islam'ın]] 28 ampirik çalışmayı kapsayan derlemesi, araç seçmek için bir söz dağarcığı ekliyor. [[generative-ai|Üretken YZ]] ağırlıklı olarak ders planlaması, istem üretimi ve yaratıcı fikir geliştirme için kullanılıyor; YZ ortak tasarımcı olmaktan çok daha sık biçimde asistan ya da içerik üreticisi olarak devrede ve öğretmenlerin hangi aracın hangi tasarım problemine uyduğunu yargılamak için kullanabileceği dört olanak var: verimlilik, yanıt verebilirlik, [[creativity|yaratıcılık]] ve [[equity-in-ai-education|hakkaniyet]].

Her iki çalışma da tasarımı bir duyuru çalışması değil, [[human-in-the-loop-ai|insan döngüde]] bir [[human-ai-collaboration|işbirliği]] ve [[usability-research|kullanılabilirlik araştırması]] olarak ele alıyor. İkisi de paydaşların hiçbir doğruluk benchmarkının yakalayamayacağı gereksinimler ortaya çıkardığını buldu; bu da o oturumların bedelini ödemenin pratik gerekçesidir: aksi halde pilotta karşılaşacağınız gereksinimler.

## Tasarım ekiplerinin yanlış yaptığı şeyler

Güvenlik, içerik moderasyonu demektir. Bir eğitim ürünündeki zarar çoğu zaman yanlış anda gelen yardımcı bir yanıt olarak gelir. SafeTutors test edilen her modelde pedagojik zarar ve bir konuşma boyunca %77,8'e çıkan başarısızlık buldu; bu, içerik filtrelerinin görmek üzere kurulmadığı bir kategoridir.

Daha büyük bir model pedagojiyi düzeltir. Ölçek, 3,8B açık ağırlıklı modellerden GPT-5-mini'ye uzanan aralıkta güvenliği güvenilir biçimde iyileştirmedi.

İyi bir erişim dizini içeriğin halledildiği anlamına gelir. EduGuard erişimi ayrı bir doğrulayıcıyla eşleştirir ve saldırgan doğrudan yanıt istemlerini test eder, çünkü dayandırılmış erişim aşırı açıklamaya giden bir yol bırakır.

Öğretmen yedek plandır. Tasarım çalışmasındaki altı öğretmenin hepsi kayıt, uyarı ve geçersiz kılmayı mesleki sorumluluğun bir koşulu olarak istedi. Bir destek talebi geçersiz kılma değildir.

Erişilebilirlik sonraki bir biletir. Ya şartnamededir ya da baştan yazmaya dönüşür; üretilen alternatif metinler ve altyazılar hâlâ insan kontrolü gerektirir.

## Size geri dönecek olanlar

**"Lansmandan önce bir değerlendirme düzeneği kuramayız."** Küçük bir tane kurun. İhtiyacınız olan ilk iddia, beş tur boyunca ne olduğudur. 40 gerçek müfredat sorusu alın, her birini ipucuna direnen bir öğrenciyle beş turluk bir konuşma olarak çalıştırın ve 11 boyuta göre puanlayın. Bu, savunulabilir bir güvenlik bölümüdür ve bir sprinte sığar.

**"Öğretmenler istemleri düzenlemek istiyor ve onların yazdıklarını garanti edemeyiz."** O zaman düzenledikleri yüzeyi daraltın. Sistem istemi sizin kalır; hedefler, onaylanmış içerik, ipucu basamakları ve yükseltme iletişimi onların olur. Sınırları belirlenmiş uzman mimarisi tam da yapılandırmanın test edebileceğiniz bir kapsam içinde kalması için vardır.

**"Benchmark puanlarımız yüksek."** Tek turlu yanıtlardaki doğruluk, bir konuşma boyunca davranışı öngörmez ve ikinci şeyi ölçen benchmark, test ettiği her modelde çok turlu ortamlarda %77,8 başarısızlık buldu. İki sayıyı da raporlayın, yoksa birincisi ikincisi gibi okunur.

**"Eksiksiz kayıt bir mahremiyet problemidir."** Öyledir; bu, kaydın yokluğu değil amaç sınırlaması gerektirir. Bir öğretmenin harekete geçmek için ihtiyaç duyduğunu kaydedin, gerisini asgaride tutun, erişimi kısıtlayın ve üründe neyin ne kadar süreyle saklandığını söyleyin.

## Bu hafta ne yapmalı

**1.** Yetki sınırını tek sayfaya yazın: sistem neye karar veriyor, öğretmen neye karar veriyor ve hangisini bir satın alma incelemesinde savunursunuz.

**2.** 11 boyutlu taksonomiyi bir test planına dönüştürün ve tek bir dersten 40 gerçek soru üzerinde çok turlu olarak çalıştırın.

**3.** Doğrulayıcıyı üreticiden tasarım belgesinde ayırın, ilk sürüm ikisini tek süreçte çalıştırsa bile.

**4.** Deneme kapısını, yükseltme hedefini ve öğretmen geçersiz kılmasını adlarıyla birlikte kuyruğa ekleyin.

**5.** Erişilebilirlik listesini ve bir ayrıştırma gereksinimini bu sürümün kabul ölçütlerine koyun.

## Bundan sonra nereye

[[developing-ai-tutor]] kurulumu, [[designing-ai-into-learning]] ise onu çevreleyen pedagojik varsayılanları ele alır. İşin konuşlandırıldıktan sonra çalışıp çalışmadığı için [[checking-whether-educational-ai-works]]; test planının arkasındaki güvenlik kavramları için [[pedagogical-safety]] ve [[hallucination-risk]]; satın alma bağlamı için [[legal-issues-and-risks]] sayfalarına bakın.
