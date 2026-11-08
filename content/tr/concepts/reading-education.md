---
title: Okuma Eğitimi
created: "2026-11-08T12:00:00-05:00"
updated: "2026-11-08T12:00:00-05:00"
type: concept
foundations: [ai-education]
pedagogy: [scaffolding, motivation, cognitive-psychology]
technology: [educational-nlp, generative-ai, llm]
assessment: [assessment, assessment-validity]
ethics: [neurodiversity, accessibility]
audience: [instructors, curriculum designers, researchers]
level: [primary education, k 12, higher ed]
connected_faqs: [ai-support-reading-comprehension]
confidence: medium
translation_of: concepts/reading-education
source_updated: "2026-11-06T01:55:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Okuma eğitimi** — okumanın öğretimi ve değerlendirilmesi: anlama, akıcılık, sözcük dağarcığı ve okuma motivasyonu ile metinlerin bir okur için doğru güçlükte tasarlanması. [[ai-education|Eğitimde YZ]] alanında literatür dört hat boyunca uzanır: okurları okurken destekleyen araçlar, okumayı değerlendiren araçlar, metni bir okurun düzeyine uyarlayan ya da üreten araçlar ve üçünün altındaki ölçüm sorusu — bir metni zor kılan nedir ve **okunabilirlik** bunu yakalıyor mu? Bu sayfa okumayı kendi başına bir alan olarak ele alır; [[language-learning|dil öğrenimi]] (başka bir dil edinme), [[english-education|İngilizce eğitimi]] (kendi okuma ve okunabilirlik hattını taşıyan EAP/EFL/ESL) ve [[writing-education|yazma eğitimi]] (metin oluşturma) alanlarından ayrıdır: konu, okurun metinle karşılaşmasıdır. Kanıt umut verici ama düzensizdir — birkaç pilot uygulama, bir avuç doğrulanmış araç ve az sayıda kontrollü karşılaştırma. Bilgi tabanında yalnızca küçük bir çalışma varsa bu sayfa bunu söyler.

## Dikkate Alınması Gereken Sorular

- Bir YZ aracı bir öğrencinin bir parçayı anlamasına yardım ettiğinde öğrenci ne öğrenmiştir — içeriği mi, bir okuma stratejisini mi, yoksa yanıtı araçtan nasıl isteyeceğini mi? Bunlardan hangisini değerlendirmek istersiniz?
- Okunabilirlik formülleri sözcükleri ve tümce uzunluklarını sayar. Bu, bir okurun bir metni deneyimlemesine dair neyi kaçırır ve bunun yerine neyi ölçerdiniz?
- YZ herhangi bir metni bir öğrencinin okuma düzeyine yeniden yazabiliyorsa, düzeyin kendisi önemini yitirir mi — yoksa öğrencinin eninde sonunda zor metinle karşılaşması yine gerekir mi?
- Okuma değerlendirmesi otomatik olarak üretildiğinde kim yararlanır: öğretmenin iş yükü mü, öğrencinin motivasyonu mu, yoksa puanın geçerliliği mi? Üçü birden iyileşebilir mi?
- Okuma güçlüğü aynı zamanda bir erişilebilirlik sorunudur. Zorlanan okurlar, çok dilli öğrenenler ve nöroçeşitli öğrenciler için araçlar genel amaçlı bir okuma asistanından nasıl farklılaşmalıdır?

## Giriş

Bilgi tabanında okuma eğitimi genç bir hattır. Çalışmaların çoğu küçük ve yenidir ve okurların değil metnin çevresinde kümelenir: bir parça üretmek, onu sadeleştirmek, puanlamak ya da güçlüğünü yargılamak. Hepsini birbirine bağlayan soru, bir makinenin bir metnin belirli bir okur için ne kadar zor olacağını söyleyip söyleyemeyeceği ve okumanın yapması gereken işi ortadan kaldırmadan bu yargıya göre eyleyip eyleyemeyeceğidir.

Dört çalışma hattı görünür:

- **Okuru okurken desteklemek**, motivasyonel ve eşlik eden araçlar dahil.
- **Okumayı değerlendirmek**, üretilen parçalar, kısa sınavlar ve okuma çalışmalarına verilen YZ geri bildirimi yoluyla.
- **Metni uyarlamak ve üretmek**, hedef düzeyde, sadeleştirmeden farklılaştırılmış materyallere kadar.
- **Okunabilirliği ve metin güçlüğünü ölçmek**, diğer üçünün bağlı olduğu katman.

## Okurları Okurken Desteklemek

[[generative-ai|üretken YZ]] ile okumak tutarsız anlama sonuçları üretir — bir çalışmada kazanımlar, bir diğerinde [[transfer-of-learning|bilgi aktarımı]] yok — ve AIR aracı, varyansın okurların araca neden başvurduğu sorusunda yattığı hipotezi üzerine kuruldu. Brann, Etgar ve Sidi dört güdüyle — Görev odaklı, İyi hissetme, Çeviri ve Düşük çaba — 21 maddelik bir ölçek geliştirdi ve doğruladı ([[air-scale-motivations-ai-reading-2026|Brann ve ark., 2026]]). Kanıtları, keşif örnekleminde 425 ve doğrulayıcı örneklemde 414 İngiliz yükseköğretim öğrencisinden gelir; uyum indeksleri CFI .95 ve RMSEA .056'dır. Ayrım uygulama için önemlidir: aracı bir görevi bitirmek için kullanan okur, onu çabadan kaçınmak için kullanan okurdan farklı bir duruştadır ve yazarların yüzeysel işlemeye karşı dikkat edilmesi gereken güdü olarak işaretlediği Düşük çaba güdüsüdür.

Bu bir ölçüm sonucudur, bir sonuç çalışması değildir ve sayfa bu ayrımı korur. Bilgi tabanında henüz bulunmayan şey, kalıcı anlama kazanımları gösteren bir okuma eşlikçisinin kontrollü denemesidir.

## Okumayı Değerlendirmek

Okuma değerlendirmesi, YZ'nin en sık işgücü tasarrufu sağlayan aygıt olarak göründüğü yerdir. Almirabi'nin uygulayıcı vaka çalışması, YZ Aracılı Motivasyonel Okuma Değerlendirmesini 53 Arapça-L1 EFL lisans öğrencisiyle altı çoktan seçmeli kısa sınav etrafında kurdu; ders kitabı parçasından YZ üretimi parçalara, gözetimsiz çevrimiçi uygulamadan gözetimli kâğıda geçti ([[almirabi-ai-reading-assessment-motivation-2026|Almirabi, 2026]]). Puanlar ders kitabı sınavındaki %69,4'ten %76,5'lik bir döngü ortalamasına yükseldi; gözetimsiz sınavlar dışlandığında YZ toplamı ders kitabı sınavının 4,2 puan üzerindeydi. Yazar, parça kaynağının, uygulamanın, gözetimin ve sıranın yalıtılmadığını ve [[motivation|motivasyonun]] hiç ölçülmediğini açıkça belirtir; dolayısıyla veriler bir motivasyonel yararla tutarlıdır, onun kanıtı değildir.

İkinci bir çalışma ters yöne gider ve YZ geri bildirimini puanlama kolaylığı değil öğrenci merkezli bir süreç olarak ele alır. Shenzhen'de 200 yedinci sınıf öğrencisiyle iki aylık yarı deneysel bir çalışmada, Çince okumada ChatGPT destekli [[feedback|geri bildirim]], bir geri bildirim ölçüsünde 30,40 puanlık ve geri bildirim yöneliminde 17,95'lik kazanım üretti; geleneksel geri bildirim sınıfında ise düşüşler görüldü ([[chatgpt-feedback-orientation-chinese-reading-2026|Chen ve ark., 2026]]). İddia edilen mekanizma anlama değil [[feedback-literacy|geri bildirim okuryazarlığıdır]] ve [[assessment|değerlendirme]] sorusu — puanların koşullar arasında aynı anlama gelip gelmediği — açık bırakılmıştır.

## Okunabilirlik: Bir Metni Zor Kılan Nedir

Okunabilirlik bu alandaki en eski ölçümdür ve YZ'nin en çok sarstığı ölçüm. Flesch–Kincaid ya da Lexile puanı güçlüğü yüzey özelliklerinden, başlıca sözcük ve tümce uzunluğundan tahmin eder. CLARA, aynı puana sahip iki öykünün farklı bilişsel, dilsel ve sosyal-duygusal iş talep edebileceği itirazı üzerine kuruldu: 122 etiketli gelişimsel taksonomisi, yayıncı yaş referanslarına karşı 0,904 örtüşme doğruluğuna ve körlemesine eğitimci sıralamalarıyla 0,81 uyuşmaya ulaştı; FKGL formülü için bu değer 0,603'tü ([[clara-developmental-appropriateness-children-stories-2026|Yin ve ark., 2026]]). [[assessment-validity|Geçerlilik]] sorunu tam da meseledir — bir formül güvenilir olabilir ve yine de yanlış şeyi ölçebilir.

İki çalışma daha açığı genişletir. Bird, İngiliz edebiyatını bir Birleşik Krallık Key Stage'ine yerleştirmek için dönüştürücü sınıflandırmayı hesaplamalı dilbilim özellikleriyle birleştirir, F1 0,996'ya ulaşır ve sonucu öğretmenler için bir araç olarak paketler ([[bird-multimodal-educational-literature-2026|Bird, 2026]]). Clark ve ark. tamamen yüzeyin altına iner; işlemleme maliyeti bilinen yapıları — düşük sıklıklı n-gramlar, uzun bağımlılıklar, yığılmış adlar, addan türetilmiş fiiller, cansız özneler, indirgenmiş nesne ilgi cümlecikleri — ölçer ve son modellerin bunları, anlamı koruyan kendi açımlamalarına ve insan temel çizgilerine kıyasla aşırı kullandığını bulur ([[clark-ai-generated-language-readability-2026|Clark ve ark., 2026]]). Bu kanıta göre okunabilirlik, yalnızca metnin uzunluk istatistiklerinin değil, metnin işlemleme taleplerinin ve onu kimin ürettiğinin bir özelliğidir.

Pratik sonuç, sınıf düzeyi puanının herhangi bir metin için zayıf bir güvence olduğu ve özellikle YZ tarafından yazılmış metinler için çok daha zayıf bir güvence olduğudur.

Hedef kitle algısı artık doğrudan ölçülebilir. [[thome-perceived-text-complexity-student-profiles-2025|Thome ve ark., 2025]], kariyer rehberliği çalışma kılavuzlarından ve Wikipedia'dan cümleleri derecelendiren 193 Alman lise öğrencisinden 3.954 etiketlik bir veri kümesi topladı ve okurların formülle anlaşmadığını buldu: korpusun düşük Flesch-Reading-Ease puanlarına karşın etiketlerin %72,8'i çok kolay ya da kolaydı. Profil temelli bir modelin SHAP analizi bu algıyı yönlendiren okur özelliklerini gösterdi — evde konuşulan dil en etkili kişisel özellikti (0,09), cinsiyetin (0,08) ve kişinin kendi tahmin ettiği Almanca becerisinin (0,07) önündeydi — yani sınıf düzeyi puanı yalnızca metnin işlemleme taleplerini değil, kimin okuma deneyiminin ölçüldüğünü de kaçırır.

## Metni Uyarlamak ve Üretmek

En büyük çalışma kümesi bir okur için metin üretir ya da metni yeniden yazar. Üç yaklaşım neyi denetlediklerinde farklılaşır:

- **Düzey denetimli üretim.** Üç 8B modelin, uzman tasarımı bir çocuk okuma müfredatı ve GPT-4o ile Llama 3.3 70B'den alınan öykülerle ince ayarı, güçlükle ilgili ölçütlerde her iki daha büyük sıfır atışlı modeli de geride bıraktı ve güvenlik sorunları ihmal edilebilir düzeydeydi ([[llm-children-reading-story-generation|Li ve ark., 2026]]).
- **Farklılaştırılmış materyaller.** [[english-education|EAP]] okuma materyalleri için rol istemli bir GenAI iş akışı, sonuçları başlıca yeterliliğe özgü destek katmanları — kısa açıklamalar, tümce çözümlemesi, retorik ipuçları, eleştirel istemler — ekleyerek iyileştirdi, parça düzeyinde karmaşıklığı değiştirerek değil; en büyük etki yüksek yeterlilikteki öğrenenlerdeydi (d = 1.40) ([[genai-differentiated-eap-reading-materials-2026|Gao, 2026]]).
- **Uyarlanmış ders okumaları.** Bir lisansüstü ders, ders kitabını ilgiye ve anlama düzeyine göre uyarlanmış isteğe bağlı okumalarla değiştirdi; 24 öğrenci bunları yararlı buldu ve %75'i daha fazla öğrendiklerini kabul etti; eser analizi ise eksik izlenebilirlik ve tutarsız atıf buldu ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]).

Sadeleştirme dördüncü varyanttır ve darboğazı üretim değil değerlendirmedir. MuTSE, istem başına model üretim hattını katmanlı bir anlamsal hizalama motoruyla eşleştirir; böylece sadeleştirmeler tek bir okunabilirlik sayısı yerine pedagojik olarak anlamlı ölçütlerde karşılaştırılıp puanlanabilir ([[text-simplification-its|Roscan ve ark., 2026]]).

## Okurlar, Arayüzler ve Erişim

Okuma aynı zamanda bir erişim sorunudur. AIRRI, ödev materyalini ekran görüntüsünden LLM'e giden hatları bozmak için pertürbe edilmiş görüntüler olarak işler ve yazarları okunabilirlik maliyetini dürüstçe bildirir: şerit örtüleri görüşülen dört tasarım ve tipografi uzmanının hepsi tarafından okunabilir bulundu, oysa çıkarım hatası %100'e ulaştı ([[airri-machine-resistant-reading-interface-2026|Airri ve ark., 2026]]). Makine tarafından okunabilirlik ile insan tarafından okunabilirlik arasındaki takas, erişilebilirlik bedeli olan bir tasarım kararıdır.

Disleksili öğrenenler için 2018'den 2024'e 72 çalışmanın PRISMA rehberli incelemesi, YZ'nin saptama, [[assistive-technology|yardımcı destek]] ve [[personalized-learning|kişiselleştirilmiş öğrenme]] için kullanıldığını, ancak kanıt tabanının parçalı ve deneysel doğrulamanın az olduğunu bulur; üretken YZ minimal düzeyde temsil edilmektedir ([[dabaghi-ai-dyslexia-education-review-2026|Dabaghi ve ark., 2026]]). Okuma güçlüğü, [[neurodiversity|nöroçeşitliliğin]] ve [[accessibility|erişilebilirliğin]] genel okuma gündemiyle buluştuğu yerdir ve sayfa bunları ayrı bir konu olarak ele almaz.

## Kanıtların Gösterdiği ve Göstermediği

Hat ölçüm açısından zengin, sonuç açısından yoksuldur. Doğrulanmış araçlar (AIR), doğrulanmış güçlük modelleri (CLARA, Bird) ve giderek büyüyen bir üretim ile sadeleştirme araçları kümesi vardır. Bir okuma müdahalesini anlama kazanımlarına bağlayan çok az kontrollü çalışma vardır ve değerlendirme çalışmalarının birkaçı parça kaynağını uygulamayla ya da gözetimle karıştırır. Örneklem büyüklükleri küçüktür: okuma değerlendirmesi vakasında 53 öğrenci, uyarlanmış okumalar çalışmasında 24, en büyük yarı deneyde 200 yedinci sınıf öğrencisi. Bilgi tabanı yerleşik bir etkiyi değil bir tasarım uzayını belgeliyor olarak okunmalıdır.

## Yaygın yanlış anlamalar

- **“Bir okunabilirlik puanı size bir metnin uygun olup olmadığını söyler.”** Bir puan yüzey özelliklerini ölçer; CLARA'nın FKGL ile karşılaştırması ve Clark ve ark.'nın işlemleme özellikleri, güçlüğün ne kadarını dışarıda bıraktığını birlikte gösterir.
- **“YZ üretimi metin daha kolaydır çünkü bir düzey için üretilmiştir.”** Kanıt model çıktısı için ters yöne gider: öncü modeller anlama maliyetiyle ilişkilendirilen yapıları aşırı kullanır.
- **“YZ ile okumak tek bir davranıştır.”** AIR ölçeği dört ayrı güdü bulur ve bunlar farklı kullanım türlerini yordar.
- **“YZ metni yeniden yazabiliyorsa okuma düzeyi artık önemli değildir.”** Farklılaştırma, bir parçanın yapısal karmaşıklığını düşürmekten farklı bir müdahale olarak, parçanın çevresindeki desteği parçanın kendisinden daha çok değiştirir.

## Bağlı kavramlar

- [[ai-education]] — bu alanın altında durduğu şemsiye
- [[language-learning]] — L2 okuma örtüşür, ama oradaki nesne edinimdir
- [[writing-education]] — okuryazarlığın oluşturma tarafı
- [[english-education]] — EAP/EFL/ESL okuma ve okunabilirlik
- [[educational-nlp]] — okunabilirliğin bağlı olduğu metin ölçüm katmanı
- [[assessment]] — okuma değerlendirmesi ve puan geçerliliği
- [[motivation]] — okurların YZ'yi neden kullandığı ve bunun işlemeye ne yaptığı
- [[scaffolding]] — farklılaştırılmış okuma materyallerindeki destek katmanları
- [[neurodiversity]] — disleksi ve okuma güçlüğü
- [[accessibility]] — insan tarafından okunabilir metne karşı makine tarafından okunabilir metin
- [[generative-ai]] — üretilen ve uyarlanan metinlerin arkasındaki teknoloji

## Bağlı makaleler

- [[air-scale-motivations-ai-reading-2026]] — GenAI ile okumanın güdülerine dair doğrulanmış bir ölçek
- [[almirabi-ai-reading-assessment-motivation-2026]] — bir EFL sınıfında YZ aracılı okuma değerlendirmesi
- [[genai-differentiated-eap-reading-materials-2026]] — farklılaştırılmış EAP okuma materyalleri
- [[llm-children-reading-story-generation]] — düzey denetimli çocuk okuma öyküleri
- [[text-simplification-its]] — özel ders için metin sadeleştirmesinin değerlendirilmesi
- [[clara-developmental-appropriateness-children-stories-2026]] — okunabilirlik formüllerinin ötesinde gelişimsel güçlük
- [[bird-multimodal-educational-literature-2026]] — edebiyatı Key Stage'e göre sınıflandırma
- [[clark-ai-generated-language-readability-2026]] — YZ üretimi dilin neden daha zor okunduğu
- [[sidorkin-ai-generated-course-readings-2026]] — uyarlanmış YZ üretimi ders okumaları
- [[airri-machine-resistant-reading-interface-2026]] — makineye dirençli okuma arayüzleri ve okunabilirlik maliyetleri
- [[chatgpt-feedback-orientation-chinese-reading-2026]] — ortaöğretim okumasında ChatGPT geri bildirimi
- [[dabaghi-ai-dyslexia-education-review-2026]] — disleksili öğrenenler için YZ
