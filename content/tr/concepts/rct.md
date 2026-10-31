---
title: RCT
created: "2026-10-14T21:40:00-04:00"
type: concept
foundations: [ai-education]
technology: [generative-ai]
research_method: [experiment]
level: [higher ed]
confidence: high
methods: [research-methods-aied]
translation_of: concepts/rct
source_updated: "2026-10-26T09:10:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Randomize kontrollü deney (RCT)** — katılımcıların bir müdahalenin bir çıktı üzerindeki nedensel etkisini tahmin etmek için bir deney (treatment) ya da kontrol koşuluna rastgele atandığı bir araştırma tasarımıdır. [[ai-education|Eğitimde YZ]] bağlamında RCT’ler, bir YZ aracının ya da [[pedagogy|pedagojik]] yaklaşımın [[learning-gains|öğrenme kazanımları]], bağlılık değişimleri ya da diğer çıktılarda bir değişime *neden olup olmadığını* belirlemede altın standarttır; yalnızca bunlarla ilişkili olup olmadığını değil.

## Dikkate Alınması Gereken Sorular

- Bir okul size "YZ aracını kullanan öğrenciler daha yüksek puan aldı" diyorsa, fark büyük olsa bile bu neden aracın kazancı yarattığını kanıtlamaya yetmeyebilir?
- Randomizasyon, bilinen *ve bilinmeyen* karıştırıcıları gruplar arasında dengeler. Okumadan önce, ne kadar iyi eşleştirilmiş görünürlerse görünsünler, iki bütün sınıfı karşılaştırmaktan rastgele atama neyi başarır?
- Sayfa RCT’yi altın standart olarak adlandırır ama gerçek maliyetleri de listeler: yapay ortamlar, deneyleri eskitleyen hızlı değişen YZ, yetersiz güçte küçük örneklemler ve yardımcı araçları geri tutmada [[ethics|etik]] kısıtlamalar. Bu ödünleşimlerden hangisinin eğitim araştırması manşetlerinde en sık göz ardı edildiğini düşünüyorsunuz?
- 1.174 katılımcıyla bir RCT, [[generative-ai|üretici YZ]]nin eğitime dayalı bir verimlilik boşluğunun yaklaşık üçte üçünü kapattığını buldu. Ama iyi yürütülen bir RCT hâlâ yapay bir ortamda dar bir görev üzerinde yürütülebilir. Nedensel iddiaya güvenmeden önce *çıktı ölçümü* hakkında neyi kontrol etmelisiniz?
- Etik sorunu doğrudan düşünün: bir [[intelligent-tutoring|YZ özel ders asistanının]] öğrencilerin öğrenmesine yardım ettiğine dair gerçekten makul nedeniniz olsaydı, bir sömestr boyunca onu sınıfın yarısından rastgele esirgemek savunulabilir mi? Yine de nedeni izole eden, etik açıdan sağlam bir çalışmayı nasıl tasarlardınız?

## Giriş

Randomizasyon, bir RCT’yi diğer tasarımlardan ayıran şeydir: öğrenenleri koşullara rastgele atayarak bir RCT, bilinen ve bilinmeyen karıştırıcıları gruplar arasında dengeler, böylece çıktılarda gözlemlenen her fark yüksek iç geçerlilikle müdahaleye atfedilebilir.

### RCT’ler araştırmada nasıl görünür

- **Hızla değişen teknolojiye bir yanıt olarak mikro-RCT’ler:** [[ai-tutoring-micro-rct-gcse-science-2026|Harrison ve ark. (2026)]], geleneksel büyük ölçekli deneylerin, bir çalışma süresince önemli biçimde değişen özel ders [[edtech-platform|platformlarının]] hızına ayak uyduramayacağını ileri sürer ve nedensel tahmini tekrarlanabilir kılmak için İngiliz ortaokullarında [[teacher-role|öğretmen]] yönetimindeki mikro-randomize kontrollü deneyler kullanır (929 öğrenciden 644'ü sonrası testini tamamladı, g = 0,33). Ödünleşimler kendi tasarımlarında belirtilir: %30,7 kayıp (attrition), bağımsız olarak standartlaştırılmış yerine [[curriculum-design|müfredat]] uyumlu çıktılar ve yalnızca dört haftalık izleme.
- **Nedensel etkililik iddiaları:** AIED’deki RCT’ler, bir YZ özel ders asistanının, aracının ya da pedagojik müdahalenin çıktıları iyileştirip iyileştirmediğini sınar. [[generative-ai-education-productivity-gaps|Üretici YZ üzerine randomize bir deney]] 1.174 katılımcıyla, üretici YZ’nin eğitime dayalı verimlilik boşluklarını önemli ölçüde daralttığını, başlangıç performans farkının yaklaşık üçte üçünü kapattığını buldu — YZ’nin etkisine ilişkin net bir nedensel tahmin.
- **Altın standarda karşılaştırma:** [[research-methods-aied|Araştırma yöntemleri]] sayfası, RCT’leri iç geçerlilik için en güçlü tasarım olarak konumlandırırken ödünleşimlerini de not eder — maliyet, yapay koşullar, hızla değişen YZ, küçük yetersiz güçlü örneklemler ve muhtemelen yardımcı araçları geri tutmada etik sınırlar.

- **Farklılık değil, eşdeğerlik için tasarlanmış bir deney.** [[studentbench-ai-human-tutoring-gre-2026|Northcutt ve ark. (2026)]], 2.383 yetişkini YZ özel ders desteğine, canlı insan özel ders desteğine ya da video kontrolüne randomize etti; yayınlanmış test kirliliğini dışarıda tutmak için eski ETS ve Kaplan test geliştiricileriyle yeni GRE maddeleri yazdı, iki formu karşı dengeledi ve eşdeğerliği ±0,25 SS’ye karşı iki tek taraflı testle sınadı — farklılığa göre değil; "anlamlı bir fark yok" ifadesini yorumlanabilir bir sonuç haline getiren tasarım tercihleri.
- **Grup randomizasyonu, düşük benimseme ve bunun ardından niyet-ile-değerlendirme (intent-to-treat) tahmininin anlamı.** [[liu-course-integrated-ai-tutoring-rct-2026|Liu ve ark. (2026)]], 13 blok boyunca 2.379 lisans öğrencisini, öğrenciler yerine *öğretim üyelerini* atayarak randomize etti, böylece bir bölümdeki her öğrenci o öğretim üyesinin koşulunu devraldı — çok bölümlü bir uygulama deneyini uygulanabilir kılan, ve çalışmanın belgelediği çıkarım sorunlarını yaratan tasarım. Deney grubundaki bölümlerdeki öğrencilerin yalnızca yaklaşık %15'i aracı hiç kullandı, bu yüzden bildirilen etkiler onu *kullanmayı* değil, erişimi *sunmayı* tahmin eder; yazarlar müdahaleyi, tanıtımının indüklediği daha geniş YZ kullanımı olarak okur ve bireysel oturumları ayrı bir soru olarak ele alır. Müdahale öğretim üyesi düzeyinde atandığı için, çıkarım 34 kümeye dayanır — küme-robust standart hataların duyarlılığı abarttığı bir durum — bu yüzden makale bunların yanında randomizasyon çıkarımını da bildirir ve sonuçlarının sağlam olduğunu bulur. İki manşet etki — tam eşleşme örneğindeki final notlarında 0,37 SS’lik düşüş ve her iki örneklemde kaydedilen platform katılımında 0,90 SS’lik düşüş — deney ve kontrol grubundaki sınıf arkadaşları arasında kirlenme olmadan, aynı aracın öğrenci başına randomizasyonunun izole edemeyeceği bölüm düzeyi sonuçlardır.
- **Benimseme bir deneyin sınayabileceğini sınırlar ve bağlılık desteği doz değildir.** [[access-not-enough-ai-tutoring-2026|Robinson ve ark. (2026)]], kontrol grubundaki öğrencilerin yalnızca %60,7'si ile %53,3'ünün platformu hiç kullandığı iki okuma platformu RCT’si yürüttü; bir bağlılık özel ders asistanı okunan hikayeleri %71–80 arttırdı ama hiçbir başarı kazancı üretmedi, bu da haftada ulaşılan 2–5 dakutaya uygundu.
- **Boşları kanıta dönüştüren ölçek.** [[mata-sustaining-ai-enabled-student-support-2026|Mata ve ark. (2026)]], sekiz dönem boyunca 8.708 öğrenciyi 0,05 SS’lik etkileri tespit etme gücüyle izledi ve tarihli ikili görevlerde büyük, anında bir hareket buldu — tek bir hatırlatmadan sonra 16 Ağustos’a kadar 34 yüzde puanlık kayıt artışı — oysa akademik performans, devamlılık ve mezuniyet tespit edilebilir bir etki göstermedi. Ölçek tasarım dersidir: bu N’de akademik boşlar, tespit başarısızlıkları değil, kesin sonuçlardır; bu, bir iletişim aracının ele alabildiği şeyi değiştirdiği ve birikimli öğrenme çıktılarını değiştirmediği sonucunu olanaklı kılan şeydir.
- **Bir boş ortalama, birbirini dengeleyen heterojenliği maskeleyebilir.** Okul-bölüm düzeyinde 24 Türk okulundaki 538 öğretmeni randomize eden, ön kayıtlı bir RCT, ortalamanın altındaki öğretmenlerde başarının 0,129 SS düştüğünü, ortalamanın üstündekilerde 0,054 yükseldiğini ve motivasyonun 0,111 SS düştüğünü buldu; tavan etkili sıkıştırılmış bir sınav (kontrol grubu ortalaması 89,2/100) gücü sınırladı.([[genai-can-harm-teaching-rct-2026|Sungu, Lira & Duckworth (2026)]]).
- **Soruyu ve tespit edilebilir etkiyi sabitleyen ön kayıt.** [[chatbot-outreach-course-performance-2026|Meyer ve ark. (2026)]], her iki kurs denemesini de Registry of Efficacy and Effectiveness Studies’e kaydettirdi; niyet-ile-değerlendirme tahmini ve yaklaşık 0,157'lik bir minimum tespit edilebilir etki büyüklüğüne önceden bağlandı ve onay veren öğrencileri her dönem, ekleme/bırakma döneminde ikinci bir dalga ile randomize etti, böylece geç kaydolanlar varsayılan analiz örneklemi yerine tasarımın içine girdi. İki kurs boyunca 2.483 öğrenciyi birleştiren çalışmada etki, A/B eşiğinde (dört yüzde puanı) yer alırken, birleştirilmiş sayısal not değişimi çoklu karşılaştırma düzeltmesini atlatamadı — kayıtlı birincil çıktının, birkaç ilişkili sonuçtan hangisine inanılacağını disipline ettiğinin bir hatırlatması.
- **Bütün bölümler içinde, ön müdahale temel çizgisiyle randomizasyon.** [[thoeni-ai-chatbots-higher-education-expectations-evidence-2026|Thoeni & Fryer (2026)]], ekleme/bırakma döneminden sonra üç bütün pazarlama bölümü içinde 454 lisans öğrencisini randomize etti ve dört çıktının tamamını T1'de, hiçbir öğrencinin sohbet robotu erişiminden önce ölçtü, böylece dönem boyu karşılaştırma varsayılan bir temel çizgi yerine ölçülmüş bir temel çizgiye dayanır. Düz sonuç (hiçbir grup × zaman etkileşimi anlamlılığa ulaşmadı; bildirilen en büyük etki ilgi üzerinde d = 0,050 idi), benimsemeyle birlikte raporlanır — haftada bir atanmış kullanıma karşılık haftada 0,89 giriş — bu da zayıf kullanılan bir müdahale hakkındaki boşun, araç hakkındaki bir boş olarak okunmasını önler.
- **Özne içi çapraz geçiş ve en iyi uygulamada konulmuş bir kontrol.** [[kestin-ai-tutoring-outperforms-active-learning-rct-2025|Kestin ve ark. (2025)]], 194 Harvard yaşam bilimleri öğrencisinin her birine iki fizik dersi çalıştırdı — biri sınıf içi bir [[active-learning]] oturumunda, biri kursun kendi YZ özel ders asistanıyla, her birinin çevresinde öncesi ve sonrası testleriyle karşı dengelenmiş sırada — böylece her öğrenci kendi kontrolü olur ve *sunum kipleri* karşılaştırması, kimin hangi koşula atandığıyla karışmaz. Tasarımın ikinci seçimi de en az kadar önemlidir: karşılaştırıcı bir ders yerine araştırma temelli etkin öğrenmeydi, dolayısıyla avantaj (ortanca sonrası test 4,5'e karşı 3,5) güncel en iyi uygulamaya karşı ölçülmüştür ve "YZ öğretmeyi yener" biçiminde okunamaz.

- **Oturumun sonunda değil, bir gecikmeden sonra ölçülen bir sonuç.** 120 [[higher-ed|lisans öğrencisini]] aynı konuların YZ destekli ya da geleneksel çalışmasına randomize edip kalıcılığı 45 gün sonra test eden çalışmada YZ destekli grup %68,5’e karşı %57,5 puan almış, yaklaşık 11 yüzde puanlık bir fark ([[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025|Barcaui (2025)]]).
- **Gönüllü bir okul aracı %7’lik bir dozda bile iş yükünü hareket ettirebilir.** [[roy-aila-lesson-planning-teacher-choices-2026|Roy ve ark. (2026)]], 108 İngiliz ilkokulundaki 464 öğretmeni okul düzeyinde randomize etmiştir. Hazırlık süresi, araç derslerin %7’sini kapsamasına ve kullanım on hafta boyunca düşmesine rağmen karşılaştırma grubunun 0,76’sı çıkmıştır (95% CI 0,64 ile 0,89); bu nedenle tahmin, aracı sunmanın iş yükü için ne yaptığını sınırlar, tam benimsemenin ne yapacağını değil.

### Güçlü yönler ve sınırlılıklar

- **Güçlü yönler:** en güçlü nedensel çıkarım; temiz çıktı ölçümü; etki büyüklüğü tahmini; randomizasyon yoluyla karıştırıcıları dengeleme.
- **Sınırlılıklar:** pahalı ve yavaş; yapay ortamlar ekolojik geçerliliği düşürebilir; YZ araçları deneylerin yürütülebileceğinden hızlı değişir; küçük örneklemler sıklıkla anlamlı etkileri tespit etmekte yetersiz güçtedir; muhtemelen faydalı YZ’nin bir kontrol grubundan esirgenmesinde etik kısıtlamalar. Bu sınırlardan ikisi, atama kümelendiğinde biçim değiştirir: etkili örneklem, öğrenci sayısı değil *küme* sayısı haline gelir, dolayısıyla bir deney baş sayısına göre büyük ama bu ölçüye göre ince olabilir — Liu ve ark.'nın 2.379 öğrencisi 34 öğretim üyesi düzeyi kümesine dayanır — ve benimseme gönüllü ve düşük olduğunda, niyet-ile-değerlendirme tahmini, aracı kullanmanın değil, sunmanın çıktıları değiştirip değiştirmediğini yanıtlar.

Eğitimde YZ’de deneysel tasarımın daha ayrıntılı işlenişi — bir RCT’nin ne zaman yarı deneysel, anket ya da hesaplamalı tasarımlara göre uygun olduğu dahil — için [[research-methods-aied]] sayfasına bakın.

## Yaygın yanlış anlamalar

- **“Randomizasyon, aracın ne yaptığına dair geçerli bir tahmini garanti eder.”** Randomizasyon karıştırıcıları dengeler; kimsenin müdahaleyi kullanmasını sağlamaz. Düşük benimsemeli grup randomizasyonlu bir deney **aracı sunmanın** etkisini tahmin eder ve niyet-ile-değerlendirme ile tedavi-görenler-üzerinde farklı soruları yanıtlar.
- **“Büyük bir deney her zaman daha iyi tasarımdır.”** Bazıları geleneksel büyük ölçekli denemelerin **çalışma sırasında maddi olarak değişen özel ders platformlarıyla** başa çıkamayacağını savunur ve bunun yerine sistem evrilirken geçerliliğini koruyan öğretmen yönetimindeki tasarımları kullanır. Hareketli bir hedefin deneyi iyi güçlendirilmiş olabilir ve yine de artık var olmayan bir sistemi ölçebilir.
- **“RCT’ler ile gözlemsel kanıt birbirinin yerine geçebilir.”** **1.174 katılımcılı** bir RCT, GenAI’nin **eğitime dayalı üretkenlik uçurumunun yaklaşık dörtte üçünü kapattığını** bulmuştur; belirli bir dönem için kesin bir nedensel iddia. Gözlem mekanizmayı ve benimsemeyi açıklar; o tahmini taşıyamaz ve RCT nedeni açıklayamaz.

## Bağlı kavramlar

- [[research-methods-aied]]
- [[ai-ed-evaluation]]
- [[educational-measurement]]
- [[generative-ai]]
- [[higher-ed]]
- [[ai-education]]
- [[student-support-and-success]] — the design behind the strongest student-support evidence

## Bağlı makaleler

- [[generative-ai-education-productivity-gaps]] — Does generative AI narrow education-based productivity gaps? Evidence from a randomized experiment
- [[genai-can-harm-teaching-rct-2026]] — Generative AI can harm teaching: an RCT
- [[access-not-enough-ai-tutoring-2026]] — Access is not enough: human support improves engagement with AI tutoring
- [[ai-tutoring-micro-rct-gcse-science-2026]] — Evaluating AI Tutoring at the Speed of Innovation: Practitioner-Led Micro-Randomized Trials of an AI Tutoring Platform in GCSE Science
- [[studentbench-ai-human-tutoring-gre-2026]] — StudentBench: AI and human tutoring yield equivalent GRE learning gains
- [[liu-course-integrated-ai-tutoring-rct-2026]] — Group randomization by instructor: a 0.37 SD fall in final grades and a 0.90 SD fall in platform participation, with 15% uptake and inference on 34 clusters (Liu et al. 2026)

- [[roy-aila-lesson-planning-teacher-choices-2026]] — Ders planlama süresi 108 ilkokulda karşılaştırma grubunun 0,76’sına düştü, %7’lik bir araç kullanım dozunda
- [[barcaui-chatgpt-cognitive-crutch-knowledge-retention-2025]] — Oturumun sonunda değil, bir gecikmeden sonra ölçülen bir sonuç
