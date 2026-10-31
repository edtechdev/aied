---
title: "YZ Öğrenme Deneyiminin İçine Nasıl Tasarınmalıdır?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [designing-educational-ai-software, developing-ai-tutor]
weight: 72
foundations: [learning-design, reducing-ai-misuse]
pedagogy: [active-learning, pedagogy, scaffolding]
translation_of: faqs/designing-ai-into-learning
source_updated: "2026-10-31T10:40:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-31"
    agent: hermes-agent
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

**Öğrenme hedefinden ve o hedefi üreten etkinlikten başlayın; aynı modelin iskele mi yoksa cevap makinesi mi olacağına model değil tasarım karar verir.**

Modül taslağında "YZ etkinliği" yazan bir satır var ve kimse bunun neyin yerini aldığını söyleyemiyor. Ya da bir öğretim elemanı, zaten iyi işleyen bir kursa sohbet robotu eklemek istedi ve sizin işiniz, kursu işler kılan kısmı bozmadan onu yerleştirmek.

Öğrenme hedefinden ve o hedefi üreten etkinlikten başlayın. Aynı model bir iskele, bir [[socratic-method|Sokratik]] ortak, bir taslak okuyucusu, bir [[simulation|simülasyon]] ya da bir cevap makinesi olabilir; hangisini elde ettiğiniz modelden çok tasarıma bağlıdır. İnşa ettiğiniz modu adlandırın, herhangi bir yardım görünmeden önce öğrenenin denemesini koyun ve kursta araç olmadan işleyen en az bir yol bırakın.

## Kısa özet

**1.** Öğrenenlerin sonunda araç olmadan neler yapabildiğine dair cümleyi yazın ve her YZ özelliğini bu cümleye karşı denetleyin.

**2.** Etkileşimi sıralayın: öğrenen dener, YZ destekler, öğrenen değerlendirir ya da düzeltir, öğrenen anladığını gösterir.

**3.** Modu ICAP merdiveninde adlandırın. Baypas ile iskele, aynı aracın farklı basamakları olabilir.

**4.** YZ'yi kurs dizisinin zaten belirli bir etkinlik öngördüğü yere yerleştirin, sona bir bonus olarak değil.

**5.** Bir kapasite oluşurken aracı esirgeyin, sonra öğrencinin taklit edemeyeceği bir denetim noktasında geri verin.

## Öğrenenin araç olmadan ne yaptığına karar verin

Bilgi tabanındaki [[pedagogy|Pedagojiler ve Öğretim Stratejileri]] kavramı testi verir: bu yapılandırma, amaçlanan öğrenmeyi üreten etkinliği koruyor mu? Bunu, kimse bir özellik seçmeden önce kâğıt üzerinde yanıtlayın.

[[finkelstein-principled-ai-education-2025|İlkeli YZ Eğitimi Çerçevesi]] genel kuralı koyar: teknoloji, eğitimin geliştirmeyi amaçladığı insan kapasitelerini yerinden etmek yerine onları güçlendirmelidir. Bir modül için teste çevrildiğinde bu, kapasiteyi adlandırmak, onu inşa eden etkinliği adlandırmak ve YZ'nin o etkinliğin içinde mi yoksa yanında mı durduğunu sormak demektir.

Bunu araç başına bir kez değil, görev başına uygulayın. Öğretmene dönük dört vakada otomasyon ve artırma bir arada görüldü: yerine geçme, sınırlı analitik alt görevlerin içinde kaldı; artırma ise öğretmenin çıktıyla ne yaptığında ortaya çıktı. Aynı aracın bir adımı otomatikleştirip başka bir adımı artırabilmesinin nedeni budur ([[horvers-hybrid-intelligence-automation-augmentation-2026|Horvers ve ark. (2026)]]).

## Yardımdan önce denemeyi koyun

Gerçek bir sınıfla temas ettikten sonra ayakta kalan varsayılan örüntü şudur: **öğrenen dener, YZ destekler, öğrenen değerlendirir ya da düzeltir, öğrenen anladığını gösterir.**

Pratikte bu, herhangi bir yardım görünmeden önce ilk tahmini ya da çözümü istemek ve anında tamamlama yerine soruları, ipuçlarını, örnekleri, karşı argümanları ve [[feedback|geri bildirimi]] yeğlemek demektir. [[productive-failure|Üretken başarısızlığı]] öğrenmeye hizmet ettiği yerde koruyun. Sonuç doğuran iddiaların doğrulanmasını isteyin, açıklamayı ve [[learning-by-teaching|geri anlatımı]] işin içine kurun ve yetkinlik arttıkça desteği azaltın. Öğrenenlerin tek başına neler yapabildiğini kalibre edebilmesi için YZ'siz çalışmalar bırakın.

[[reducing-ai-misuse|YZ Kötüye Kullanımını Azaltma]] sentezi de aynı biçimi önerir: önce düşün, sonra YZ, sonra yansıt dizisi ve bilinçli değerlendirme denetim noktaları.

## Hangi mod için tasarladığınızı adlandırın

[[thermomix-genai-education-analogy-2026|Rummel, Nachtigall ve Panadero'nun mutfak makinesi analojisi]], soruyu öğrenenlerin [[generative-ai|üretken YZ]] kullanıp kullanmadığından, bu kullanımın neye dönüştüklerini nasıl şekillendirdiğine taşır. [[icap-framework|ICAP]] ve [[samr-model|SAMR]] üzerine yerleştirildiğinde bir merdiven verir. Bir ödevi hiç düzeltme ya da [[critical-thinking|eleştirel katılım]] olmadan tamamen dışsallaştırmak Pasif ikamedir ve [[cognitive-offloading|beceri kaybı ile aşırı güven]] riski taşır. [[prompt-engineering|İstemleri iyileştirmek]] ve çıktıları çapraz doğrulamak [[prior-knowledge|ön bilgi]] ve [[self-regulated-learning|öz düzenleme]] gerektirir; bu Etkin ya da Artırma düzeyidir. YZ'yi beyin fırtınası, taslak çıkarma ve özgün işi değerlendirme için kullanmak Yapıcı ya da Değiştirme düzeyidir. YZ'nin ortak inşa ve uyarlanabilir geri bildirim için gerçek bir diyalog ortağı olması Etkileşimli ya da Yeniden Tanımlama düzeyidir.

Çıkarım doğrudan: aynı araç bir basamakta baypas, bir sonrakinde [[scaffolding|iskeledir]]; bu yüzden tasarım belgesi amaçlanan modu adlandırmalıdır.

## Onu, dizinin bir etkinlik öngördüğü yere yerleştirin

[[learning-paths-patterns-learning-design-2026|Divjak, Svetec ve Horvat]], 554 kurstaki 29.064 öğretim ve öğrenme etkinliğinin planlanmış dizisini analiz etti ve görünür bir tasarım dilbilgisi buldu. Edinme türü etkinlikler en yaygın giriş noktası ve %20'nin üzeriyle en büyük tek türdür. Öğrenme türü amaçlanan Bloom düzeyini izler: Edinme 1. düzeyde yaklaşık %50'den 6. düzeyde yaklaşık %20'ye düşerken Üretim 5. ve 6. düzeylerde %20'nin üzerine çıkar. Verilerdeki en güçlü geçiş Değerlendirme'den Tartışma'ya geçiştir: 0,332.

YZ tasarımı için bundan iki ders çıkar. Aracı, dizinin bir etkinlik türü öngördüğü yere koyun. Ve geri bildirim [[collaborative-learning|işbirlikçi çalışma]], [[group-work|grup çalışması]] ve [[teacher-role|öğretmen]] varlığıyla kümelendiği için, akran ve eşzamanlı yapılar, YZ desteğinin yerine geçmesi gereken değil, bağlanması gereken yerlerdir.

## Neyi esirgeyeceğinize ve ne zaman geri vereceğinize karar verin

[[refrain-amplify-genai-curriculum-2026|Torres-Sahli ve arkadaşlarının "alıkoy, sonra çoğalt" çerçevesi]] bunu program düzeyine taşır. Bir kapasite oluşurken üretken aracı esirgeyin; öğrenci onu yönlendirebildiğinde, döndürdüğünü yargılayabildiğinde ve hesabını verebildiğinde geri verin; her menteşede taklit edilmesi zor bir denetim noktası bulunsun.

Aygıtlar, oluşum ile [[cognitive-offloading|yük boşaltma]] arasındaki bir ölçütle yönetilir: etkin çalışmayı destekledikleri yerde izin verilir, dikkati tükettikleri yerde dışarıda bırakılır. Bu, boşaltma kararlarını kurs düzeyi tasarımdan sonra değil önce gelen bir [[curriculum-design|müfredat]] ve [[governance|yönetişim]] sorusuna dönüştürür.

## Hizalamanın gerçek olduğunu denetleyin

[[mcinnes-salvaging-constructive-alignment-genai-2026|McInnes ve arkadaşlarının]] 14 yükseköğretim rehberi üzerindeki söylem analizi, üretken YZ'yi öğrenme çıktıları, rubrikler ve kurs ana hatları taslaklaştırmak için kullanmak gibi verimlilik çerçeveli tavsiyelerin, yapıcı yarıyı ihmal ederken hizalı görünen bir [[assessment|hizalama]] ürettiği uyarısını yapar. Çıktılar, etkinlikler ve değerlendirmeler birbirine bağımlı maddeler olarak değil ayrık maddeler olarak üretilir.

Çareleri yeniden sıralamadır. Eğitimciler, yapıcı hizalamayı, YZ çıktısının herhangi bir parçasını devretmeden önce onu yönlendirecek, sorgulayacak ve reddedecek kadar iyi anlamalıdır; çünkü inandırıcı bir yüzeyi kabul etmek, öğretim elemanlarının öğrencileri uyardığı değerlendirme hatasının aynısıdır. YZ'nin kullanıldığı yerlerde, genel internetle eğitilmiş varsayılanlar yerine yerel politikaya ve kalite standartlarına göre yapılandırılmış, kurumsal olarak sınırlandırılmış [[rag|geri getirimle desteklenmiş]] sistemleri savunurlar.

## Öğretim tasarımcılarının yanlış anladığı şeyler

YZ'yi eklemek müdahalenin kendisi sayılır. Öğrenmeyi değiştiren, öğrencinin gerçekleştirdiği etkinliktir; YZ bunun için kurulan düzenin yalnızca bir parçasıdır. İyi yerleştirilmiş bir ipucu ile iyi yerleştirilmiş bir cevap aynı model üzerinde çalışıp birbirine zıt öğrenme üretebilir.

İzni yazmak tasarım işinin kendisi sanılır. Bir izin, neye izin verildiğini belirler. Sırayı, modu ya da denetim noktasını belirlemez; etkinliğin ayakta kalıp kalmayacağına karar veren bu üçüdür.

Verimlilik, yeniden tasarımın hedefi sayılır. Bir modelle çıktı ve rubrik taslaklaştırmak hızlıdır ve 14 belgelik analiz, sonucun hizalı görünürken parçaların birbirini desteklemeyi bırakabildiğini buldu.

## Karşınıza çıkacak itirazlar

**"Öğrenciler nasılsa kullanacak, buna göre tasarlamak saflık."** Kullanacaklar; zaten modu belirtmenin ve onu öğretmenin gerekçesi de bu. Modu adlandıran bir modül, öğrenciye uyabileceği bir şey verir.

**"Koca bir kursu yeniden sıralamaya vaktimiz yok."** O zaman bir modülü ve bir değerlendirmeyi yeniden sıralayın. Alıkoy-sonra-çoğalt menteşesi tek bir denetim noktasıdır, önce düşün dizisi ise bir föydeki üç yönergedir.

**"YZ özelliğimizde zaten koruma bariyerleri var."** Koruma bariyerleri modelin ne söylediğini sınırlar. Öğrenenin önce deneyip denemediğini, desteğin azalıp azalmadığını ya da YZ'siz bir yolun bulunup bulunmadığını belirlemezler. Bunlar üründeki ayarlar değil, sizin kursunuzdaki tasarım kararlarıdır.

## Bu hafta ne yapmalı

**1.** Modül için yardımsız performans cümlesini yazın ve etkinlik listesinin üstüne koyun.

**2.** Ana hatlardaki her YZ etkinliğinin yanına amaçlanan ICAP modunu işaretleyin.

**3.** Bir YZ etkinliğini, öğrenen problemi önce deneyecek biçimde taşıyın.

**4.** Modülden geçen bir YZ'siz yol seçin ve öğrenciler için etiketleyin.

**5.** Aracın esirgendiği bir menteşeyi ve onu geri veren denetim noktasını adlandırın.

## Bundan sonra nereye gidilir

[[learning-design|Öğretim Tasarımı]], [[active-learning|Etkin Öğrenme]] ve [[scaffolding|iskele]] tasarım sözlüğünü taşır. Tasarlanmış bir etkinliğin öğrenmeyi koruyup korumadığını belirleyen etkileşim düzeyi varsayılanları için [[reduce-ai-cheating|YZ ile Aldatmayı Nasıl Azaltabilirim?]] ve [[redesign-assessment-ai-era|Değerlendirme YZ Çağında Nasıl Yeniden Tasarlanmalı?]] sayfalarına bakın. [[designing-educational-ai-software|Eğitim YZ Yazılımı Tasarlamak]] aynı ilkelerin yazılımın kendisini nasıl sınırladığını ele alır, [[developing-ai-tutor|Etkili Bir YZ Eğitmeni Geliştirmek]] ise bunları bir eğitmenin mimarisine çevirir.
