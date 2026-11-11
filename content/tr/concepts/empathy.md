---
title: Empati
created: "2026-11-10T23:05:00-05:00"
updated: "2026-11-10T23:05:00-05:00"
type: concept
foundations: [ai-literacy]
pedagogy: [professional-training, experiential-learning, social-emotional-learning]
technology: [affective-computing, affective-tutoring, generative-ai, simulation, sensor-and-gaze-analytics]
ethics: [pedagogical-safety, privacy]
audience: [instructors, medical educators, curriculum designers, researchers]
level: [higher ed, k 12]
confidence: medium
contributors: [editor]
source_updated: "2026-11-10T21:10:00-05:00"
translation_of: concepts/empathy
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-10"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Sentez:** Empati eğitime aynı anda üç yönden girer: eğitimcilerin öğretmeye çalıştığı bir sonuç, ölçmeye çalıştıkları bir yapı ve YZ sistemlerinin giderek daha fazla sergilediği söylenen bir şey olarak. Kanıtlar her üçünde de dengesizdir. Empati öğretmek işe yarar — rol yapma, VR ve LLM diyaloğu ölçülebilir ön-son kazanımları üretir — ancak deneyim daha az bedenleştikçe etki küçülür ve karşılaştırma çalışmaları modaliteyi görev süresiyle karıştırır. Empatiyi ölçmek öğretmekten daha zordur: gözlemci derecelendirmeleri tutarlıdır, bilgisayarlı görü vekilleri fiziksel temas üzerinde anlaşır, göz temasında anlaşamaz ve gülümsemede ters döner. YZ, ölçekte empatik konuşma provası yapabilir, ancak en iyi kontrollü çalışma gözlenen performans kontrolü olmadan öz değerlendirilen yetkinliğin arttığını gösterir. En yeni kaygı ise ters yönde işler: YZ'nin empati sağlayabileceğine inanmak, insanları empatiyi kendilerinin sağlamasına daha az istekli kılar ([[shastry-gray-empathy-offloading-2026|Shastry ve Gray, 2026]]).

## Düşünülmesi Gerekenler

- Rol yapma, VR ve bir sohbet robotu empati puanlarını yükseltiyorsa, aradaki fark öğrenme mi yoksa göreve harcanan süre mi?
- Bir hemşirelik öğrencisi acı çeken bir hastaya gülümsüyor: gözlemciler uyumsuzluk okuyor, gülümseme dedektörü sıcaklık okuyor. Bir değerlendirme hangisine güvenmeli?
- YZ destekli empati eğitimi üzerine çalışmaların çoğu gözlenen davranışı değil güveni ölçer. Güven artıyor ama davranış artmıyorsa, eğitim başarısız mı oldu yoksa yalnızca sınanmadı mı?
- Bir sohbet robotu sıcak yanıt verdiğinde öğrenciler anlaşıldıklarını bildiriyor. Bu empati mi, empati performansı mı, yoksa hangisi olduğundan bağımsız olarak önemli olan bir şey mi?
- İnsanlar YZ'nin bunu yapabileceğine inandıklarında empatik sorumluluğu devrediyorsa, empatiyi kısmen YZ pratiğiyle öğreten bir müfredat için bu ne anlama gelir?
- Empatinin notlandırılabilir bir sonuç olup olmadığına kim karar vermeli — ve doğru ama sıcak olmayan öğrencilere ne olur?

## Giriş

Empati genellikle en az iki bileşene ayrılır: bilişsel bir bileşen, perspektif alma, ve duyuşsal bir bileşen, bir başkasının duygusunu paylaşma; bazı açıklamalar buna motivasyonel bir bileşen, yani yardım etme dürtüsünü ekler. Kişisel sıkıntı — bir başkasının acısı karşısında duyulan rahatsızlık — sıklıkla yanında ölçülür ve geri kalanından farklı davranır. Bu eğitim için önemlidir çünkü bileşenler farklı biçimlerde öğretilebilir ve farklı başarı dereceleriyle ölçülebilir.

YZ üç ayrı noktada devreye girer ve bunları birbirine karıştırmak literatürdeki kafa karışıklığının ana kaynağıdır.

1. **YZ, insan empatisi için bir öğretim yöntemi olarak.** Simülasyonlar, VR bedenleştirme, LLM ile üretilen personalarla rol yapma ve bir başkasının deneyimini canlı kılmak için kullanılan üretici görseller.
2. **YZ, bir ölçüm aracı olarak.** Kaydedilmiş simülasyonlarda beden dilini puanlayan bilgisayarlı görü ya da empatiyi YZ etkileşiminde ifade edilen bir eğilim olarak ele alan ölçekler.
3. **YZ, empatik bir aktör olarak.** Hasta, koç ya da arkadaş rolünü oynayan ve anlayışlı görünmek üzere tasarlanmış sohbet robotları; bu da empatinin gerçek mi, sahnelenmiş mi yoksa insan temasının yerine geçen bir şey mi olduğu sorusunu doğurur.

İlk ikisi öğrenenlerle, üçüncüsü sistemlerle ilgilidir. Bunları karıştıran bir sayfa, üç farklı anlama gelen “YZ empatiyi geliştirir” gibi iddialar üretir.

## Empati öğretilebilir mi?

En doğrudan karşılaştırma, tasarımda alışılmadık derecede temiz, uygulamada ise alışılmadık derecede karışıktır. [[zwolinski-teaching-empathy-real-virtual-ai-2026|Zwoliński ve ark. (2026)]] bir erişilebilirlik dersindeki 64 yüksek lisans öğrencisini rastgele üç koşula atadı: tekerlekli sandalyeler, yaşlandırma kıyafetleri ve gebelik simülatörleriyle gerçek dünyada rol yapma; aynı ekipmanla bir VR laboratuvarı; ya da ChatGPT-4.0 ile persona oluşturma diyaloğu. Üç grup da Davis Kişilerarası Tepkisellik Ölçeği'nde anlamlı biçimde iyileşti. Rol yapma %13,2, VR %11,6, YZ koşulu %8,8 kazandı. Gruplar arasında yalnızca Kişisel Sıkıntı anlamlı biçimde farklılaştı.

Sıralama sezgisel, yorumu değil. Üç koşu yaklaşık 125, 87 ve 42 dakika sürdü, yani çalışma modaliteyi ve dozajı birlikte karşılaştırıyor. 42 dakikalık bir LLM diyaloğunun iki saatlik bedenleştirilmiş bir alıştırmadan daha küçük bir kazanç ürettiğini söylemek adildir; bedenleştirmenin dakika başına üç kat değerli olduğunu söylemek adil değildir. Yazarlar bu karıştırıcı etken konusunda açıktır ve öğrencilerin kendi önerisi — VR'ın yinelenebilirliğini, gerçek dünyanın duyusal zenginliğini ve LLM'nin uyarlanabilirliğini birleştirmek — kanıtın makul bir okumasıdır.

Sağlık meslekleri literatürü ölçek ekler ama nedensel netlik eklemez. [[ismail-affective-domain-ai-healthcare-review-2026|Ismail ve Zafira (2026)]] duyuşsal alan gelişimi için YZ üzerine 17 çalışmayı gözden geçirdi ve müdahalelerin iletişim eğitimi, sanal hastalar, yansıtıcı geri bildirim, kötü haber verme simülasyonu ve OSCE tarzı değerlendirmede yoğunlaştığını buldu. Çoğu, güven, öz yeterlik, yansıtıcı katılım ya da algılanan iletişim becerisinde kazanım bildirdi. Empatinin kendisi, duygusal tepkisellik, ilişkisel özgünlük ve sözel olmayan iletişim için kanıt sınırlı kaldı. Temel bulgu şu: empati öğretmeyi amaçlayan bir alan çoğunlukla rahatlığı ölçüyor.

Dördüncü bir araştırma hattı belirsizliği açık hale getirir: giyilebilir uyarılma sensörleri ve YZ üretimi görseller bir başkasının koşullarını canlı kılabilir, ancak cilt iletkenliğindeki bir artış empatinin değil uyarılmanın kanıtıdır ve bu hattaki çalışmalar sıklıkla orada durur ([[lim-ai-wearables-environmental-empathy-2024|Lim ve ark., 2024]]).

## Empati ölçülebilir mi?

Gözlemci derecelendirmeleri bir referans standardına en yakın şeydir ve makul davranır. [[nissan-nursing-empathy-computer-vision-2026|Nissan ve ark. (2026)]] çalışmasında iki öğretim üyesi, kaydedilmiş bir simülasyonda 37 hemşirelik öğrencisini 12 maddelik bir envanter (α = 0,91) ve altı jestlik bir ölçekle (α = 0,93) derecelendirdi; jest puanları envanterle 0,41 ile 0,63 arasında ilişkiliydi.

Algoritmalar daha ilginç bir hikâye anlattı. Fiziksel temas algılama, dört gözlemci ölçüsüyle 0,46 ile 0,54 arasında uyuştu. Göz teması ve ısı haritası algılama, gözlemci yargılarıyla anlamlı bir ilişki göstermedi. Gülümseme dedektörü ise üç gözlemci ölçüsüyle ve toplam empatiyle r = −0,322 düzeyinde *negatif* ilişkiliydi, çünkü gözlemciler bir öğrencinin acı çeken bir hastaya gülümsemesini izliyor ve bunu gerginlik ya da uyumsuzluk olarak okuyordu. Sinyal gerçekti; yorum tersti. Bu, [[sensor-and-gaze-analytics|sensör ve göz izleme analitiği]] sayfasında belgelenen aynı çıkarım boşluğudur; üstelik burada söz konusu olan klinik bir nottur.

Öz bildirim ölçekleri yelpazenin diğer ucunda durur. Üretici YZ Etkileşimi için YZ Empati Ölçeği, empatiyi YZ kullanımı sırasında ifade edilen bir insan eğilimi olarak ele alır ve yanıtlayıcılara kendi bilişsel, duyuşsal ve motivasyonel tepkilerini sorar; ön faktör yapısı amaçlanan altı boyutu yeniden üretmedi ([[ai-empathy-scale-psychometric-evaluation-2026|Kang ve ark., 2026]]). Bir eğilim anketi ile davranışsal gözlem birbirinin yerine geçmez ve hiçbiri, karşılaşmanın özenli hissettirip hissettirmediğine dair hasta derecelendirmelerinin yerini tutmaz.

## YZ empati provası yapabilir mi?

Evet, en azından prova kısmı için. [[muller-role-prompted-gpt-empathetic-communication-2026|Müller ve ark. (2026)]] 162 tıp öğrencisine dört senaryodan birinde — ortak karar alma, motivasyonel görüşme, bir CYBE konsültasyonu, kötü haber verme — rol istemli bir GPT-4o ile bir konuşma yaptırdı; ortalama 13 alışverişten sonra öz değerlendirilen iletişim yetkinliği 0–10 ölçeğinde 5,89'dan 6,83'e yükseldi (d = 0,58). Öğrenciler YZ geri bildirimini 10 üzerinden 7,92 faydalı buldu, ancak geri bildirim yeterliği kazanımı yordamadı (r = 0,08). Kontrol grubu yoktu.

Örüntü yineliyor: kısa, düşük riskli bir prova büyük bir öz yeterlik kazanımı üretiyor ve mekanizma modelin eleştirisinden çok provanın kendisi. Bu, aracı elden çıkarmak için bir neden değil. Standart hastalar pahalıdır, kıttır ve randevuyla çalışır; bir sohbet robotu bunların hiçbiri değildir ve kötü haber verme konuşmasını bir kez baştan sona konuşmuş bir öğrenci standart hasta oturumunu farklı kullanacaktır. Bu, kazanıma yetkinlik kanıtı demeyi bırakmak için bir nedendir.

Empatinin bir beceriden çok konuşmaya dair bir nitelik olduğu yerde kanıt algıyla ilgilidir. [[wang-teacher-student-centered-agents-physics-2026|Wang ve ark. (2026)]] modeli, platformu ve sıcaklığı sabit tutup istemdeki rolü ve konuşma hamlelerini değiştirdi ve algılanan empatide büyük bir fark üretti (21,27'ye karşı 18,24, r = 0,53). Öğrencilerin deneyimlediği anlamda empati senaryolaştırılabilir. Bunu senaryolaştırmanın eğitimsel açıdan iyi olup olmadığı ayrı bir sorudur.

## Yerine koyma sorunu

En yeni çalışma hattı, YZ empatisinin insan empatisine ne yaptığını soruyor. 249, 494, 743 ve 737 katılımcılı dört çalışmada [[shastry-gray-empathy-offloading-2026|Shastry ve Gray (2026)]], insanların YZ'nin duygusal destek sağlamada ne kadar yetkin olduğuna inanması arttıkça kendilerinin sağlamaya o kadar az istekli olduğunu buldu — empati boşaltma — eğilim empatisi ve önceki YZ kullanımı kontrol edilerek. Desteğin alıcısının kaynağı adlandırıldığında, katılımcılar YZ'ye arkadaşlara ya da terapistlere göre daha az boşaltma yapacaklarını söyledi, çünkü YZ'nin empatik kapasitesini daha düşük derecelendirdiler. Davranışsal bir ölçüde, boşaltma yapmayacağını söyleyen aynı katılımcılar daha az empati sözcüğü ve daha çok ilgisizlik sözcüğü seçti.

Eğitim için bu iki yöne keser. Empati pratiği yapmak üzere YZ kullanan bir müfredat beceriyi inşa ediyor olabilir; duygusal desteği sohbet robotlarına yönlendiren bir kampüs kültürü ise onu kullanma motivasyonunu aşındırıyor olabilir. İki etki birbiriyle uyumludur ve mevcut literatürde hiçbir şey bunları birlikte ölçmez.

## Bu, uygulama için ne anlama gelir

- **Üç soruyu ayırın.** Biri YZ'nin empatiyi geliştirdiğini iddia ettiğinde, insanları öğretmeyi mi, insanları ölçmeyi mi yoksa empatiyi simüle etmeyi mi kastettiğini sorun. Kanıt her biri için farklıdır.
- **Öz yeterliği empati sonucu olarak kabul etmeyin.** Güven ucuzdur ve neredeyse her provadan sonra artar; önemli olan ölçüler gözlem, standart hastalar ya da hasta derecelendirmeleridir.
- **Görüntü puanlarını ikinci okuyucu olarak ele alın.** Fiziksel temas algılama biçimlendirici geri bildirim için kullanılabilir; gülümseme ve göz teması algılama, bir modelin sahip olmadığı senaryo bağlamı olmadan kullanılamaz.
- **Yalnızca modaliteyi değil zamanı da bütçeleyin.** Karşılaştırma çalışmaları ikisini karıştırır ve sürenin dörtte birini alan daha ucuz bir yöntem yine de daha iyi seçim olabilir — yalnızca eşdeğer bir seçim değil.
- **Boşaltmaya dikkat edin.** YZ duygusal destek için varsayılan kanal haline gelirse, öğretmeye çalıştığınız empati sessizce dışarıya veriliyor olabilir.

## Yaygın yanlış anlamalar

- **“YZ empati öğretebilir.”** YZ provayı ve yansıtmayı destekleyebilir; en güçlü derleme empatinin bir sonuç olarak kanıtını sınırlı buluyor ve en iyi kontrollü eğitim çalışması öz değerlendirmeyi ölçüyor.
- **“Empati sıcak dildir.”** Algılanan empati yalnızca istem tasarımıyla üretilebilir; bu, anlamaya değil algıya dair bir kanıttır.
- **“Gülümseme sıcaklık demektir.”** Sıkıntı verici bir klinik karşılaşmada gözlemciler gülümsemeyi uyumsuzluk, bir yüz hareketi dedektörü ise olumlu duygu olarak okur. Eksik değişken bağlamdır.
- **“Öz bildirim ölçekleri empatiyi ölçer.”** Bir eğilimi ya da benlik kavramını ölçerler; bir karşılaşmadaki davranışı ölçmezler.
- **“Daha sürükleyici her zaman daha iyidir.”** Sürükleyici yöntemler daha büyük kazanımlar gösterir, ama birkaç kat maliyet ve süreyle, ve karşılaştırmalar maruziyeti eşitlemez.

## Bağlı kavramlar

- [[affective-tutoring]]
- [[affective-computing]]
- [[social-emotional-learning]]
- [[professional-training]]
- [[simulation]]
- [[medical-education]]
- [[nursing-education]]
- [[sensor-and-gaze-analytics]]
- [[assessment-validity]]
- [[self-report-measures]]
- [[human-ai-collaboration]]
- [[ai-sycophancy]]
- [[pedagogical-safety]]
- [[well-being]]
- [[arts-design-and-media-education]]

## Bağlı makaleler

- [[zwolinski-teaching-empathy-real-virtual-ai-2026]] — IRI'de rol yapma %13,2, VR %11,6, YZ diyaloğu %8,8; maruz kalma süresi karıştırılmış (Zwoliński ve ark., 2026)
- [[nissan-nursing-empathy-computer-vision-2026]] — Fiziksel temas algılama gözlemcilerle uyuştu; gülümseme algılama negatif çıktı (Nissan ve ark., 2026)
- [[muller-role-prompted-gpt-empathetic-communication-2026]] — 13 alışveriş sonrası öz değerlendirilen yetkinlik d = 0,58 arttı; kontrol grubu yok (Müller ve ark., 2026)
- [[ismail-affective-domain-ai-healthcare-review-2026]] — 17 çalışma; güven kazanımları yaygın, empati kanıtı sınırlı (Ismail ve Zafira, 2026)
- [[lim-ai-wearables-environmental-empathy-2024]] — Uyarılma hattı olarak EDA ve üretici görseller; empati ölçülmek yerine iddia edilmiş (Lim ve ark., 2024)
- [[shastry-gray-empathy-offloading-2026]] — YZ'nin empatik kapasitesine inanç, destek sağlama isteğinin azalmasını yordadı (Shastry ve Gray, 2026)
- [[ai-empathy-scale-psychometric-evaluation-2026]] — Faktör yapısı tasarımıyla eşleşmeyen 42 maddelik bir eğilim ölçeği (Kang ve ark., 2026)
- [[empathy-coaching-chatbot]] — Empatik dil, hissedilen anlayışı artırdı; bu da davranış değişikliğinden çok katılımı yordadı (Siyan ve ark., 2026)
- [[wang-teacher-student-centered-agents-physics-2026]] — İstemde belirtilen rol ve hamleler, algılanan empatide büyük bir fark üretti (Wang ve ark., 2026)
- [[akbaba-nursing-ai-experiences-tam-2026]] — Hemşirelik öğrencileri klinik stres sırasında YZ'yi duygusal destek olarak tanımladı (Akbaba ve ark., 2026)
