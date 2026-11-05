---
title: YZ Avatarları ve Sentetik Eğitmenler
created: "2026-11-04T19:42:56-05:00"
updated: "2026-11-04T19:42:56-05:00"
type: concept
foundations: [human-ai-collaboration, teacher-role, academic-integrity]
pedagogy: [professional-training, experiential-learning, situated-learning, video-education]
technology: [generative-ai, llm, pedagogical-agent, simulation, simulating-students, virtual-and-augmented-reality, conversational-ai]
assessment: [automated-assessment, assessment-validity, feedback]
ethics: [trust, ai-use-disclosure, bias-mitigation, inclusive-learning]
discipline: [medical education]
level: [higher ed, teacher education]
audience: [instructors, instructional designers]
confidence: medium
translation_of: concepts/ai-avatars-and-synthetic-instructors
source_updated: "2026-11-04T17:45:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **YZ Avatarları ve Sentetik Eğitmenler** — ister kaydedilmiş bir ders anlatıcısı, ister konuşan bir öğretim aracı, bir [[pedagogical-agent|pedagojik ajan]], simüle edilmiş bir hasta ya da öğrenci, bir rol yapma ortağı ya da bir sınav sorucusu olsun, öğretim rolü üstlenen insan görünümlü [[generative-ai|YZ]] sistemleri. Kategori tek bir teknolojiyle değil, bir kişinin yerini alan bir yüz ve bir sesle tanımlanır. Bu yüzey bu sistemleri ilgi çekici kılan şeydir ve ayırt edici sorunlarının yoğunlaştığı yer de burasıdır: [[trust]] kimlik ipuçlarına yapışır, gerçekçilik etkililiği izlemez ve öğrenenler bir insanın simüle edildiğini bilmeyebilir.

## Düşünülmesi Gerekenler

- Bir [[video-education|ders videosu]], sonradan eğitmeninizin benzerliğinden sentezlendiğini öğrendiğiniz bir yüz tarafından sunulursa sizin için ne değişir — içerik mi, onu kimin öğrettiği duygusu mu, yoksa hiçbir şey mi?
- Akıcı, işbirlikçi ve dersi asla rayından çıkarmayan bir [[simulating-students|simüle edilmiş öğrenciyle]] konuşmak kolaydır. Bu prova sizi neye hazırladı ve sessizce neyi dışarıda bıraktı?
- Bir görüşmeden önce hastanın üretildiğinin size söylenmesini ister miydiniz? Bunu sonradan öğrenmek oturumdan aldığınızı nasıl değiştirirdi?
- Hangisi daha büyük dürüstlük riskidir: bir öğrenenin bir YZ sınav sorucusunu yanıltması mı, yoksa bir YZ sınav sorucusunun bir öğreneni yanlış okuması mı?
- [[collaborative-learning|Akran rol yapması]] ücretsiz, tanıdık ve sosyal açıdan zorlayıcıdır. Onun yerine avatarı seçmeniz için avatarın neyi eklemesi gerekirdi?

## Giriş

Bir YZ avatarı, bir model tarafından sürülen işlenmiş ya da canlandırılmış insan temsilidir; sentetik bir eğitmen ise bu temsilin öğretim rolüne yerleştirilmiş halidir. İkisi bir ajanla aynı şey değildir. [[theelen-classroom-simulations-four-layer-framework-2026|Theelen vd. (2026)]] temsili [[agency|faillikten]] ayırır: avatar katılımcının gördüğü şeydir, arkasındaki aktör ise bir akran, bir simülasyon uzmanı, bir senaryo, kural tabanlı bir sistem ya da bir [[llm|LLM]] olabilir. Dolayısıyla iki özdeş sanal öğrenci tamamen farklı karşılaşmalar sunabilir.

Bu sayfa role göre düzenlenmiştir: sentetik insan hangi rolü üstleniyor, bunun için hangi kanıt var ve yüzey öğrenenin sistemle ilişkisini ne yapıyor. Aşağıdaki literatür ders videosu, özel ders, klinik simülasyon, öğretmen provası, rol yapma ve değerlendirme alanlarına yayılır.

## Sentetik bir insanın üstlenebileceği altı rol

**Ekrandaki eğitmen.** Klonlanmış bir sunucu kaydedilmiş video sunar. Büyük bir çevrimiçi lisans dersinde [[personalized-ai-generated-videos-preference-2026|Tomlinson vd. (2026)]], her konunun alana uyarlanmış üç varyantını eğitmenden klonlanmış bir HeyGen avatarıyla işledi, yayından önce gözden geçirdi ve öğrenme yönetim sistemine aktardı.

**Özel ders veren ya da pedagojik ajan.** [[elevate-genai-virtual-tutors|ELEVATE]], tamamen yerel donanımda çalışan ve kişilik, ses, tutum ile tempoyu denetleyen öğretmene dönük bir katmanı olan 3B avatar öğretim aracı kurar. [[aclime-pedagogical-agents-extended-reality-2026|ACLIME]] aynı rolü sürükleyici ortamlarda betimler: yönlendiren, soru soran ve açıklayan bir ajan.

**Simüle edilmiş hasta ya da danışan.** [[sophie-clinical-communication-ai-assessment-2026|SOPHIE 2.0]], konuşan bir avatar hastayla 24 tarayıcı tabanlı klinik senaryo sunar. [[ai-psychotherapy-training-avatars|Riachi vd. (2026)]] örüntüyü Kabul ve Kararlılık Terapisine uygular ve kursiyerlerin bağlılığını tur tur puanlar.

**Simüle edilmiş öğrenci.** [[hauk-student-avatars-dialogue-teacher-education-2026|Hauk vd. (2026)]], 21 [[teacher-education|hizmet öncesi öğretmene]] göçmenler hakkında küçültücü bir söz söyleyen alt ortaokul öğrencisi “Marco” ile on dakikalık bir sesli görüşme verdi.

**Rol yapma ortağı.** [[remind-robot-mediated-roleplay-antibullying-2026|REMind]], çocukların seyirci müdahalesini prova etmek için robotik bir avatarı kukla gibi yönetmesini sağlar. ACLIME buna ikinci etkileşim kipi der: [[situated-learning|durumsal]] diyalog için tanımlı bir rolü elinde tutan ajan.

**Değerlendirme muhatabı.** SOPHIE yargıcı, tutanakları bir iletişim değerlendirme ölçütüne göre puanlar. [[voice-based-ai-feedback-interviews-higher-ed-2026|Tamme vd. (2026)]], [[self-report-measures|yazılı anket]] uygulamak yerine öğrencilerle ders hakkında görüşen bir ses ajanı önerir.

## Kanıtın rol rol destekledikleri

Kanıt, sentetik insanın *uygulamada bir ortak* olduğu yerde en güçlü, *öğrenmenin yerine geçen bir araç* olduğu yerde en zayıftır.

Kaydedilmiş öğretimde ölçülen sonuç başarı değil tercihtir. İki sunum ve 493 yanıtlayan boyunca YZ tarafından üretilen kişiselleştirilmiş videolar, kişiselleştirilmemiş insan kaydı videolarını geride bıraktı (ortalama sıra 2,26’ya karşı 2,69, p < .001). En üst sıradaki koşul, insan kaydı kişiselleştirilmiş video, hiç var olmadı; dolayısıyla bu sıralama deneyimi hayal gücüyle karıştırır. Yazarlar nesnel öğrenme sonuçlarını henüz yayımlanmamış olarak bildirir.([[personalized-ai-generated-videos-preference-2026]])

Özel ders için kanıt, mühendislik olanaklılığıdır. ELEVATE, konuşmayı akıtarak tüketici donanımında ilk sese yaklaşık beş ila altı saniyede ulaştı ve bu, algılanan gecikmenin çoğunu maskeledi. Kontrollü bir kullanıcı çalışması yürütülmedi; dolayısıyla öğrenme ve [[help-seeking|yardım arama]] üzerindeki etkiler açık kaldı.([[elevate-genai-virtual-tutors]])

Klinik iletişim için kanıt en gelişmiş olanıdır ve yine de [[transfer-of-learning|transferin]] gerisinde durur. SOPHIE’nin yargıcı, yalnızca tutanakları okuyarak, insan puanlayıcıların uzlaşısına karşı Pearson 0,759 ve ICC(A,1) 0,746’ya ulaştı — tek tek insanların yayılımının dışında değil, içinde. 59 klinisyen ve öğrenciyle yapılan uzaktan bir çalışmada %92’si sistemi ilgi çekici buldu ve %83’ü klinik açıdan ilgili yargıladı. Puanlar iki karşılaşma arasında yükseldi, ancak kontrol kolu olmadığı için bu yükselme eğitime atfedilemez.([[sophie-clinical-communication-ai-assessment-2026]])

[[simulating-students|Simüle edilmiş öğrenciler]] için kanıt sonuçlardan çok etkileşim kalitesiyle ilgilidir. Hauk’un katılımcıları diyaloğu açıkça işlevsel (M = 5,37) ve yalnızca orta düzeyde otantik (M = 3,71) olarak değerlendirdi; tutanaklar bu ayrımı %87,1’e karşı %37,4 kapsama ile yeniden üretti. Zorluk işini metninin %51,1’iyle avatar taşıdı, öğretmenler ise ayrıntılandırdı ve gerekçelendirdi. Tek programda yirmi bir gönüllü, tek oturum, canlı rol yapmayla hiçbir karşılaştırma yok.([[hauk-student-avatars-dialogue-teacher-education-2026]])

Rol yapma için REMind, çocukların savunmaya ilişkin algılanan [[self-efficacy|öz yeterliliğinde]] önemli bir ön-son kazancı ve zorbanın durdurulup durdurulmayacağına dair daha iyi kalibre edilmiş inançlar bildirir. Bu, oyun testi bağlamında dokuz ila on yaşlarında 18 çocuktur; sürdürülebilir davranış değişikliğinden çok umut vaat ettiğini destekler.([[remind-robot-mediated-roleplay-antibullying-2026]])

Değerlendirme için en açık sonuç SOPHIE yargıcı, en zayıfı ise sesli görüşmecidir. Tamme’nin önerisi teknik bir pilot ve henüz resmi olarak analiz edilmemiş veriler bildirir; sesin neyi ortaya çıkardığına dair her iddia bir hipotez olarak kalır.([[voice-based-ai-feedback-interviews-higher-ed-2026]])

## Güven yüzden geçer

Bir yüz, [[pedagogy|pedagojik içerik]] için nötr bir kap değildir. Toplam 396 katılımcıyla iki deneyde [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning|Anthis ve Kyriakidou-Zacharoudiou (2026)]], avatar kimlik ipuçlarının hem değerlendirmeyi hem de eyleme dönük benimsemeyi biçimlendirdiğini buldu. Beyaz avatarlar ve STEM bağlamlarında Asyalı erkek avatarlar daha inandırıcı ve yetkin olarak değerlendirildi. Daha yaşlı Siyahi kadın avatarlar her ölçütte birikimli cezalarla karşılaştı. Katılımcılar, ırksal iç gruplarına ya da uzmanlık stereotiplerine uyan avatarlardan yönlendirmeyi daha kolay benimsedi.

İki ayrıntı bunu bir tasarım sorunu yapar. Alan etkiyi düzenledi: STEM ve prosedürel görevler önyargıyı büyüttü, yansıtıcı ve kişilerarası görevler ise zayıflattı. Ve önyargı yalnızca beyan edilen tutumlar üzerinde değil davranış üzerinde işledi; bu da öz bildirimli [[trust-calibration|güvenin]] bunu kaçıracağı anlamına gelir. Yazarlar stilize ya da daha az insanbiçimci avatarları, görevler arasında çeşitli avatarları döndürmeyi ve memnuniyet yerine benimsemeyi değerlendirmeyi önerir.([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]])

Otorite beden yoluyla da gelir. ELEVATE’in tasarımcıları, beden ve sesin bir öğretim aracının otoritesini büyüttüğü uyarısında bulunur. Avatarın belirsizlik göstermesini ve notlara ya da ders kitaplarına karşı doğrulamaya davet etmesini önerirler.([[elevate-genai-virtual-tutors]]) SOPHIE bir karmaşıklık ekler: aynı avatarın arkasında, daha önce daha insani yargılanan bir model bu avantajı kaybetti ve iletişim performansı arka uçlar arasında özdeşti (0,437’ye karşı 0,438). İnsanilik modele değil etkileşime aitti — sese, gecikmeye, söz sırasına.([[sophie-clinical-communication-ai-assessment-2026]])

Karşı kanıt, bir istem insan çerçevesini sağlasa bile öğrencilere bu çerçeveyi askıya almanın öğretilebildiğidir. [[stillman-dear-gemini-pairr-critical-ai-literacies-2026|Stillman vd. (2026)]], 654 yazma öğrencisine sohbet botunun bir öğretim aracı, bir işbirlikçi ya da başka bir şey gibi gelip gelmediğini sordu ve yalnızca yaklaşık yarısı (%51,7) insanbiçimci seçeneklerden birini seçti. Öğrenciler onu bir araç ya da bir program olarak adlandırdı, bir robota ya da bilgisayara benzetti ya da veri karşılığında metin dağıtan bir geri bildirim otomatı gibi metaforlar üretti. Yazarlar insan çerçevesinin bu reddini okuryazarlık sonucu olarak ele alır; bu da etkiyi arayüze değil öğretime tarihlendirir.

## Varlık, gerçekçilik ve tekinsizlik

Gerçekçilik bir merdiven değildir. [[aclime-pedagogical-agents-extended-reality-2026|ACLIME]], davranışsal gerçekçiliği [[community-of-inquiry|sosyal varlığın]] belirleyici yordayıcısı olarak ele alır ve daha yüksek görsel sadakatin, neredeyse insan bir ajanın ani reddi tetiklediği tekinsiz vadi riskini taşıdığı uyarısında bulunur. Ödünleşimin bedelini de hesaplar: sürükleyicilik ve ajan gerçekçiliği dışsal bilişsel yükü artırırken etkileşim, ortak çalışma belleği yoluyla içsel yükü düşürebilir. Öne çıkardığı uyarı açıktır — VR başlık kullanıcılarının kabaca %42’si siber rahatsızlık bildirir ve art etkiler yaklaşık on dakikadan birkaç saate kadar sürer.([[aclime-pedagogical-agents-extended-reality-2026]])

Uygulama çalışmaları çoğunlukla bu iddianın ölçülü versiyonunu destekler. Hauk’un yazarları orta düzeyde otantikliği işlev için uygun sadakat olarak okur. İkili, yalnızca sesli bir prova acemiler için rutinleri istikrara kavuşturur; akran dinamikleri ve sözel olmayan ipuçları sonradan eklenebilir.([[hauk-student-avatars-dialogue-teacher-education-2026]]) SOPHIE’de katılımcıların %47’si bir YZ hastaya karşı gerçek empati hissetmeyi hâlâ zor buldu, oysa %66’sı bir YZ hastayla konuşmayı bir insanla konuşmaktan daha az stresli buldu.([[sophie-clinical-communication-ai-assessment-2026]])

Öğrenenler tek tip biçimde daha fazla gerçekçilik istemez. [[trikonet-trivalence-co-creativity-2026|TriKoNet]]’in keşifsel çalışmasında öğrenciler fotogerçekçi temsili oybirliğiyle reddetti. Sağlanan bir kişiliği benimsemek yerine modüler bir tasarım uzayı kullanarak kendi rol kavramlarını yazdılar.([[trikonet-trivalence-co-creativity-2026]]) ELEVATE, bedenlenmenin bazı öğrenenler için bir engel olduğunu belirtir — duyusal hassasiyeti olanlar ya da insanbiçimci ajanlardan rahatsız olanlar gibi — ve avatar yapılandırmasını bir tercih değil gereklilik haline getirir.([[elevate-genai-virtual-tutors]])

## Rıza, açıklama ve deepfake riski

Bu anlatılar boyunca açıklama, ölçülen bir değişken olarak değil bir tasarım kararı olarak görünür. Hauk’un senaryosu nefret söyleminin kıyısında duruyordu ve güvenceleri usule ilişkindi. Tasarım oryantasyon, moderasyon yönergeleri, sürekli eğitmen izlemesi, hemen durdurma seçeneği, yapılandırılmış geri bildirim oturumu ve takma adlandırılmış toplu analiz içeriyordu.([[hauk-student-avatars-dialogue-teacher-education-2026]]) Theelen’in çerçevesi, öğrenenlerin ve öğretmen eğitimcilerinin bir [[simulation|simülasyonun]] hangi parçalarının insanlar, senaryolar ya da YZ tarafından denetlendiğini bilmesini ister ve bu şeffaflığı savunulabilir uyarlamanın koşulu sayar.([[theelen-classroom-simulations-four-layer-framework-2026]])

Daha zor soru, bir insanı simüle etmenin kendisinin küçük bir aldatma olup olmadığıdır. Zorlanan bir hastanın gerçek olduğuna inanan bir öğrenen, açıklanmış bir simülasyonun çekmeyeceği bir özeni yatırabilir ve sonra kendisine söylendiğinde yanıltılmış hissedebilir. Hauk’un orta düzey otantiklik değerlendirmeleri, katılımcıların avatarın doğası konusunda kandırılmadığını düşündürür; SOPHIE’nin %47’lik empati bulgusu bazılarının bilmesine rağmen bağlandığını düşündürür. İki çalışma da açıklamayı doğrudan test etmez.

[[ai-use-disclosure|Açıklamanın]] bir üretim tarafı da vardır. Tomlinson’un hattı eğitmenin benzerliğini ve sesini klonladı. Öğrencilerin bir bölümü üretken YZ’ye ilkesel itirazlar yöneltti — çevresel maliyet, emek, otomasyon, dürüstlük — ki daha iyi görüntüleme bunlara yanıt vermez.([[personalized-ai-generated-videos-preference-2026]]) Bir eğitmenin klonlanmaya rızası, bir öğrencinin klon tarafından öğretilmeye rızasından ayrı bir sorudur ve buradaki hiçbir çalışma ikisini de ölçmez.

Deepfake okuryazarlığı aynı yeteneğin öbür yüzüdür. 199 öğrenciden oluşan bir Avustralya ortaöğretim örnekleminde erkeklerin deepfake içeriği üretmiş ya da paylaşmış olma olasılığı belirgin biçimde daha yüksekti (%23,2’ye karşı %10,0). Yazarlar açıkça onları hedefleyen güvenlik eğitimini savunur.([[gender-differences-ai-literacy-deepfake]]) Bir kurum inandırıcı bir eğitmen, inandırıcı bir hasta ya da inandırıcı bir öğrenci üretebildiğinde, kimin konuştuğunun doğrulanması bir okuryazarlık sorunu olduğu kadar bir [[academic-integrity]] sorunu haline gelir. ELEVATE’in yazarlarının isteğe bağlı özel ders erişilebilir olduğunda önerdiği sözlü savunmalar ve süreç kanıtı da aynı temel sorunu ele alır.([[elevate-genai-virtual-tutors]])

## Kanıtın dürüst durumu

Buradaki neredeyse her çalışma küçük ve kısadır. Hauk’ta 21 gönüllü ve tek oturum var. SOPHIE’de 59 tamamlayıcı ve hiç kontrol kolu yok. Psikoterapi değerlendirmesinde her biri yaklaşık 90 dakika süren iki psikolog var. PBL pilotunda 26 öğrenci ve tek vaka var. ACLIME ve Theelen kavramsal çerçevelerdir, TriKoNet’in temeli ise tek oturumlardaki sekiz gruptur.([[genai-simulate-patient-history-pbl-2026]])([[ai-psychotherapy-training-avatars]])([[aclime-pedagogical-agents-extended-reality-2026]])([[theelen-classroom-simulations-four-layer-framework-2026]])([[trikonet-trivalence-co-creativity-2026]])

Büyük örneklemler tutumlar ve tercihlerle ilgilidir — avatar kimliği üzerine 396 katılımcı, video tercihi üzerine 493 yanıtlayan — ve ikisi de kolayda ya da tek ders popülasyonudur. Bu kümedeki hiçbir çalışma, sentetik bir eğitmenin insan bir eğitmenden daha iyi öğrenme ürettiğini göstermez. Savunulabilir iddia daha dardır: bu sistemler bir uygulama karşılaşmasını yaklaşık olarak yeniden üretebilir, tek bir alanda insan puanlayıcılara karşı kabul edilebilir uyumla puanlanabilir ve öğrenenlerin öğretimin kaynağını nasıl değerlendirdiğini değiştirebilir.

Bu darlık önemlidir. Theelen’in yazarları bunu doğrudan söyler: akıcılık ve bir varlık duygusu [[assessment-validity|geçerlilik kanıtı]] değildir.([[theelen-classroom-simulations-four-layer-framework-2026]]) Bir öğretmen gibi kulağa gelmek, odadaki en kolay eşiği aşmaktır.

## Yaygın yanlış anlamalar

**“Daha gerçekçi bir avatar daha iyi öğretir.”** Gerçekçilik ve etkililik, ikisinin de ölçüldüğü her yerde birbirinden ayrıldı. SOPHIE’nin iki arka ucu aynı avatarın arkasında özdeş iletişim puanları üretti ve TriKoNet’in öğrencileri fotogerçekçi kişilikleri tümüyle reddetti.

**“Avatar inandırıcıysa öğrenenler ona bir insan gibi davranır.”** Tıp öğrencileri üretken YZ ile üretilmiş bir hastayla aranabilir bir soru tabanı gibi, çoğunlukla kapalı uçlu sorgularla görüştü, üstelik deneyimi yüksek puanlarken.([[genai-simulate-patient-history-pbl-2026]]) Kanaat ve etkileşim biçimi ayrı sonuçlardır.

**“Sentetik eğitmenler tek bir teknolojidir, dolayısıyla bulgular aktarılır.”** Tercihi en üst düzeye çıkaran klonlanmış bir ders anlatıcısı, gecikmeyi en üst düzeye çıkaran bir öğretim aracı ve klinik sadakati en üst düzeye çıkaran bir hasta, farklı başarısızlık biçimleri olan farklı yapıtlardır. Bir rolden gelen kanıt, bir başkası hakkında iddialara izin vermez.

**“Avatar görünümü kozmetiktir.”** Kimlik ipuçları inandırıcılık değerlendirmelerini ve yönlendirmenin gerçek benimsenmesini değiştirdi; cezalar daha yaşlı Siyahi kadın avatarlarda birikti.([[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]]) Yapılandırma pedagojik ve eşitlikçi bir karardır.

**“Simüle edilmiş hasta, maliyeti düşülmüş standart hastadır.”** Kursiyer psikologlar sanal hastalarını işbirlikçi ve terapide zaten ilerlemiş buldu; davranışsal katılığı yeterince temsil etmeyen “ideal” bir vaka.([[ai-psychotherapy-training-avatars]]) Maliyet düşer; vaka geçerliliği kendiliğinden gelmez.

## Bağlı kavramlar

- [[simulating-students]]
- [[pedagogical-agent]]
- [[simulation]]
- [[virtual-and-augmented-reality]]
- [[trust]]
- [[trust-calibration]]
- [[human-ai-collaboration]]
- [[ai-use-disclosure]]
- [[academic-integrity]]
- [[teacher-education]]
- [[teacher-role]]
- [[professional-training]]
- [[medical-education]]
- [[assessment-validity]]
- [[automated-assessment]]
- [[bias-mitigation]]
- [[inclusive-learning]]
- [[embodied-learning]]
- [[video-education]]
- [[generative-ai]]
- [[llm]]
- [[conversational-ai]]
- [[intelligent-tutoring]]
- [[self-efficacy]]

## Bağlı makaleler

- [[face-value-how-avatar-identity-shapes-epistemic-trust-in-ai-mediated-learning]] — Avatar kimlik ipuçları inandırıcılığı ve yönlendirme benimsemesini kaydırır (Anthis ve Kyriakidou-Zacharoudiou 2026)
- [[hauk-student-avatars-dialogue-teacher-education-2026]] — Uygulamaya dayalı öğretmen eğitimi diyalogunda öğrenci avatarları (Hauk vd. 2026)
- [[gender-differences-ai-literacy-deepfake]] — Bir YZ okuryazarlığı atölyesinde cinsiyete göre deepfake üretimi ve bildirimi
- [[elevate-genai-virtual-tutors]] — Öğretmen yönetişim katmanı olan yerel öncelikli 3B avatar öğretim araçları (ELEVATE)
- [[sophie-clinical-communication-ai-assessment-2026]] — Klinik iletişim için LLM yargıçlı avatar hastalar
- [[genai-simulate-patient-history-pbl-2026]] — Bir PBL anamnez dersinde üretken YZ hasta avatarı
- [[ai-psychotherapy-training-avatars]] — Psikoterapi eğitiminde ACT bağlılığı pratiği için hasta avatarları
- [[aclime-pedagogical-agents-extended-reality-2026]] — Genişletilmiş gerçeklikte pedagojik ajanlar: varlık, gerçekçilik ve yük (ACLIME)
- [[remind-robot-mediated-roleplay-antibullying-2026]] — Seyirci müdahalesi için kukla yönetimli avatarla robot aracılı rol yapma
- [[personalized-ai-generated-videos-preference-2026]] — Klonlanmış eğitmen videosu kişiselleştirmesi ve öğrenci tercihi
- [[theelen-classroom-simulations-four-layer-framework-2026]] — Sınıf simülasyonunda temsili faillikten ayıran dört katmanlı çerçeve
- [[voice-based-ai-feedback-interviews-higher-ed-2026]] — Ders geri bildirimi görüşmeleri için önerilen konuşma tabanlı ses ajanı
- [[trikonet-trivalence-co-creativity-2026]] — Sosyoteknik ağlarda ortak yaratıcı pedagojik avatarlar (TriKoNet)
- [[stillman-dear-gemini-pairr-critical-ai-literacies-2026]] — 654 öğrencinin yalnızca %51,7’si sunulan insanbiçimci rolleri seçti; biri ona geri bildirim otomatı dedi
