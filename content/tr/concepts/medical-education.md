---
title: Tıp ve Sağlık Meslekleri Eğitimi
created: "2026-10-14T22:45:00-04:00"
type: concept
foundations: [teacher-role]
technology: [adaptive-learning, simulation]
assessment: [assessment]
discipline: [medical education]
audience: [learners, instructors]
level: [higher ed]
confidence: high
reviewed_by: [editor]
translation_of: concepts/medical-education
source_updated: "2026-09-30T11:35:26-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Tıp ve Sağlık Meslekleri Eğitimi (HPE)** — tıp, hemşirelik, eczacılık ve yardımcı sağlık meslekleri mensuplarının öğretimi ve eğitimi. YZ, klinik [[simulation]], [[reinforcement-learning|pekiştirmeli öğrenme]] simülatörleri, [[adaptive-learning|uyarlamalı öğrenme]] ve sağlık meslekleri bağlamlarında temel öğrenme ilkelerinin (deneyimsel, duruma gömülü ve dağıtık biliş) uygulanması yoluyla bu alanı dönüştürmektedir. HPE yüksek riskli, yetkinlik temelli ve klinik olarak gömülü olduğundan, beceri kazanımında, hasta güvenliğinde ve eğitimcinin yargısında YZ’nin rolüne ilişkin ayırt edici sorular ortaya çıkarır. HPE’de en yoğun biçimde çalışılan program olan hemşireliğin artık kendi sayfası var — [[nursing-education]] — bu sayfanın yalnızca taslak halinde taşıdığı yetkinlik sınırı, kimlik oluşumu ve işgücü kanıtları orada tam olarak geliştirilmiştir.

## Dikkate Alınması Gereken Sorular

- Tıpta, ölçeklenebilir pratik ve uyarlamalı geri bildirim gibi YZ yararları, doğrudan hasta sonuçları doğuran uygulamalı klinik becerinin aşınması gibi risklere karşı dengelenmelidir — YZ’nin ne yapması gerektiği ile bir stajyerin kendi başına ne pratik yapmak zorunda olduğu arasına çizgiyi nerede çizersiniz?
- Sayfa, YZ’nin eğitimcinin rehber rolünü değiştirmekten ziyade deneyimsel, duruma gömülü, dağıtık biliş gibi çağlar boyu süregelen öğrenme ilkelerini uygulamak için kullanılması gerektiğini savunuyor. YZ pratiği simüle edebilirken veya kişiselleştirebilirken, eğitimcinin yargısını vazgeçilmez kılan nedir?
- Pekiştirmeli öğrenme simülatörleri ve [[agentic-ai|etmen YZ]] artık uzmanlık eğitiminde klinik ve prosedürel beceriler için kullanılıyor. Bir YZ etkeni bir uzmanlık öğrencisini bir prosedür üzerinde eğitirse, bunu bir hastada yapmadan önce gerçekten güvenli biçimde öğrenip öğrenmediğini nasıl doğrulardınız?
- Sağlık meslekleri eğitimi yüksek riskli ve yetkinlik temelli olduğundan, değerlendirme soruları özel bir ağırlık taşır. YZ destekli değerlendirme klinik yetkinliğin değerlendirmesini hem nasıl iyileştirebilir hem nasıl tehdit edebilir?
- Tıpta YZ’ye aşırı güven özel bir kaygı konusudur. YZ ile eğitimin, bağımsız akıl yürütme konusunda daha yeteneksiz ama daha kendinden emin bir klinisyen nasıl üretebileceğini düşünüyorsunuz — ve buna karşı ne korunabilir?

## Giriş

Tıp ve sağlık meslekleri eğitiminde YZ, bilgi tabanının konu alanı kapsamının büyüyen bir dalıdır. Genel [[higher-ed|yükseköğretimin]] aksine, HPE klinik yetkinliklerin, prosedürel becerilerin ve mesleki yargının gelişimine yöneliktir; bu da YZ araçlarının nasıl tasarlandığını ve değerlendirildiğini şekillendirir.

### YZ sağlık meslekleri eğitiminde nasıl görünüyor

- **Temel öğrenme ilkelerini uygulamaya koymak.** [[fowlin-operationalizing-learning-principles-ai|Fowlin ve ark.]] (Güney Carolina Tıp Üniversitesi’nde geliştirilmiştir), YZ’nin eğitimcinin rehber rolünü değiştirmekten ziyade çağlar boyu süregelen öğrenme ilkelerini — Dewey’nin [[experiential-learning|deneyimsel öğrenmesi]], [[situated-learning|duruma gömülü biliş]] ve [[distributed-cognition|dağıtık biliş]] — uygulamak için kullanılması gerektiğini savunur. YZ, öğretmen [[student-engagement|öğrenci etkileşimi]] ve sonuçlarında merkezi olmaya devamederken [[personalized-learning|kişiselleştirilmiş]] ve [[adaptive-learning|uyarlamalı]] öğrenmeyi geliştirir.
- **Klinik beceriler ve pekiştirmeli öğrenme.** [[residencyrl-clinical-rl-training-2026|ResidencyRL]], uzmanlık eğitiminde klinik akıl yürütme ve prosedürel becerileri eğitmek için pekiştirmeli öğrenmeyi kullanır; YZ’yi gerçek klinik iş akışlarında bir beceri eğitimi ortağı olarak gösterir.
- **Simülasyon ve etmen YZ.** [[hdr-brachytherapy-agentic-ai-simulation-2026|Brakiterapide etmen YZ simülasyonu]], YZ etmenlerinin tıp uzmanlık alanlarında uygulamalı prosedürel eğitimi nasıl desteklediğini gösterir.
- **Tıbbi öğrenmenin oyunlaştırılması.** [[medgame-llm-medical-education-gamification|MedGame]], [[game-based-learning|oyunlaştırmayı]] ve LLM’leri tıp öğrencilerini harekete geçirmek için uygular.
- **Hemşirelik ve disiplinler arası eğitim.** [[alrazeeni-transforming-nursing-education-ai-2026|Hemşirelik eğitiminin YZ ile dönüşümü]], YZ’nin hemşirelik müfredatlarını ve öğretimini nasıl yeniden şekillendirdiğini belgeler. Bu sayfa, hemşireliği tıp, eczacılık, diş hekimliği ve yardımcı sağlık arasında bir program olarak tutar; ölçeklenebilir klinik yetkinliğin paylaşılan problemi üzerinde örgütlenir. Hemşireliğe özgü kayıt — YZ’nin belgelenmiş yararlarının durduğu bir yetkinlik sınırı, açıkça mesleki kimlik çerçevelemesi ve öğrencilerin işgücü [[anxiety-and-stress|kaygısı]] — [[nursing-education]] sayfasına aittir ve burada yeniden ifade edilmek yerine çapraz başvurulur.
- **Hemşirelikte YZ destekli simülasyon.** [[jiang-ai-powered-simulation-nursing-education-2026|Jiang ve ark. (2026)]]’ın 19 çalışmanın (N = 1.253) [[mixed-methods-research|karma yöntemler]] [[meta-analysis-systematic-review|sistematik derlemesi]], YZ kaynaklı [[simulation|simülasyonların]] (üretken YZ/LLM’ler, sanal hastalar/mankenler, YZ-geliştirilmiş VR/MR ve [[conversational-ai|sohbet robotları]]) en güçlü tasarımarda bilişsel bilgiyi ve [[affective-computing|duygusal]] sonuçları ([[self-efficacy]], iletişim güveni) önemli ölçüde iyileştirdiğini, ancak karmaşık psikomotor beceriler için tutarsız kaldığını buldu — bir [[rct]], YZ destekli simülasyonu standartlaştırılmış hastalardan *daha kötü* buldu. **"Özgünlük boşluğu"** kavramları — duygusal yankıda, sözsüz ipuçlarında ve dokunma incelemesinde öğrenen tarafından algılanan bir eksiklik — YZ’nin en iyi şekilde yüksek biçimde yapılandırılmış hedefler (temel iletişim, hikâye alma) için olduğunu gerekçelendirir ve insan-standartlaştırılmış hastaların ve klinik yerleştirmenin yerine değil yanında bir **kademeli simülasyon sürekliliği** içinde yer almalıdır. Bu, alanın [[simulation]] dalının ayırt edici, kanıta dayalı bir rafinasyonudur ve öğrenenlerin, yalnızca "yetkin" görülen YZ’ye kıyasla "hayırsever" algılanan insan geri bildirimini tercih ettiğini gösteren kabul-güven bulgusuna paraleldir.
- **Hemşirelikte [[learner-identity|mesleki kimliğin]] LLM’lerle yeniden yapılandırılması (2026).** [[sun-llm-nursing-education-professional-identity-2026|Sun ve ark. (2026)]]’ın 47 ülkedeki 489 çalışmanın (Whittemore & Knafl çerçevesi) kritik bütünleştirici derlemesi, soruyu hemşirelik eğitiminde [[llm|LLM]]’lerin ne yapabileceğinden, onların entegrasyonunun bir hemşirenin biçimlendirildiği *gelişimsel süreçlere* ne yaptığına taşır. Benner’in beceri kazanımı, bilişsel yük teorisi, otomasyon yanlılığı ve Wenger’in kimlik oluşumu yoluyla çerçevelenen derleme, aynı teknolojinin, yer değiştirdiği bilişsel işin hedef yetkinliğin dışında mı yoksa onu oluşturan bir parça mı olduğuna bağlı olarak hem yetkinliği geliştirdiğini hem de aşındırdığını bulur — yapılandırılmamış güven, etik akıl yürütme ve klinik yargıda ölçülebilir eksiklikler üretti. **Mesleki Kimlik Gerginlik Modeli**, mesleki oluşumu destekleyen LLM entegrasyonunu, sessizce onun yerine geçen entegrasyondan ayırt eder; **Yapısal Empati Bastırması**, ilişkisel ölçütlerde görünürdeki YZ "üstün performansını", gerçek YZ empatisinden ziyade sistemik aşırı çalışmanın bir belirtisi olarak yeniden çerçeveler. Bir kanıt boşluğu haritası, en yüksek politika sonucuna sahip alanların (mesleki kimlik, ilişkisel/etik yetkinlik, uzun vadeli sonuçlar) en ince titiz kanıt üzerinde durduğunu gösterir — hemşirelik eğitiminde kendinden emin konuşlandırma iddialarına karşı bir uyarı.
- **Klinik görüşme eğitiminde çok etmenli YZ standartlaştırılmış hastalar.** 95 analiz edilmiş tıp öğrencisiyle bir 2026 [[rct|randomize kontrollü çalışma]] ([[ai-standardized-patient-scaffolding-medical-2026|Yang ve ark.]])’ta, çok etmenli YZ standartlaştırılmış hasta eğitimi, yapılandırılmış LLM-dışı kademeli- ifşa kontrolüne göre nihai OSCE-uyumlu sınav puanlarını yükseltti (yüzde 71,8’e karşı yüzde 55,6; β = 16,4 puan yüzdesi; P = 3,30e-4), ikili tanı doğruluğunu ise istatistiksel olarak özdeş bıraktı (yüzde 84’e karşı yüzde 86; P = 1,000). Ayrışma, erken klinik eğitim kazanımlarının ilk olarak danışma süreci kalitesinde — iletişim (1–5 OSCE ölçeğinde ortalama 3,53’e karşı 2,64; P = 4,50e-4), empatik ifade ("empati ifade etme" kontrol listesi maddesinde +31 puan yüzdesi) ve seçili hikâye alma davranışları — ortaya çıkabileceğini, tanı uç noktalarında herhangi bir iyileşmeden önce; ve YZ hastalarının hâlâ profesyonellik ve hazırbulunuşluk yargıları için insan puanlayıcılara ve fakülteye ihtiyaç duyduğunu gösterir.
- **Öğrenciler öntanımlı olarak bir YZ hastasını aranabilir bir veri tabanı olarak ele alıyor.** Bir [[problem-based-learning|PBL]] pilotunda bir üretken YZ avatarıyla sesli görüşmede, öğrenciler kapalı uçlu, verimlilik odaklı sorular sordu — biri YZ’nin "sadece, tıpkı bir soru tabanı" olup olmadığını sordu — ve görüşmeler eski modüle göre 36–39 dakikaya karşı 55–65 dakika sürdü ([[genai-simulate-patient-history-pbl-2026|Mool ve ark., 2026]]).
- **Görev dağılımı ve SCAN çerçevesi.** [[ai-teammate-task-distribution-medical-training-2026|Tsim ve ark.]], YZ entegrasyonunu öğrenenin "yanlış kullanımı"ndan *yanlış sınıflandırmaya* taşır — gerçek zamanlı [[metacognition|üstbilişsel]] değerlendirmenin başarısız olması. SCAN çerçeveleri (İkame Et, Tamamla, Destekle, Pazarlık Edilemez), Vygotsky’nin [[sociocultural-learning|yakınsal gelişim bölgesi]]’ne dayanarak [[generative-ai|üretken YZ]] görevlerini bireysel öğrenenin gelişim durumuna göre dağıtır ve YZ-iskelemeli görevler içinde pasif etkileşimi, insan [[human-in-the-loop-ai|epistemik denetçileriyle]] YZ’den uzman yardımına yeniden tanımlama gerektiren, becerisizliğe giden gizli bir yol olarak tanımlar.
- **Döngüde-insan öğretim varlığı üretimi.** [[gen-mentor-dental-radiography-2026|Gen-Mentor]] (Dong ve ark. 2026), görüntü-dil modeli omurgasını bir dental radyografi iş akışına entegre eder: Faster R-CNN dört hedef bulguyu yerelleştirir (Dolgu, İmplant, Sıkışmış Diş, Çürük), koşullu bir difüzyon modeli sınıfa özgü sentetik ROI adayları üretir, bir VLM kanıta bağlı başlıklar oluşturur ve bir [[llm]] bunları vaka tanımlarına, karşılaştırmalara ve sınav istek metinlerine yeniden biçimlendirir — hepsi yapılandırılmış uzman incelemesinden önce. 45 diş hekimliği öğrencisiyle değerlendirilen (ortalama SUS 72,7) sistem, YZ tarafından üretilen öğretim varlıklarının [[human-in-the-loop-ai|döngüde-insan]] incelemesinin, uzman gözetimini sürdürürken vaka çeşitliliğini ve anında geri bildirim desteğini nasıl genişletebileceğini gösterir.
- **Eczacılık sınavlarının [[automated-assessment|YZ ile puanlanması]].** [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat, Das, Bhaumik & Thambi (2026)]], çoktan seçmeli, uygulanabilir tümünü seç, boşluk doldurma, listeleme, kısa yanıt ve kompozisyon maddelerinde bir insan fakülte puanlamasına karşı ChatGPT-5’i, 21 maddelik bir eczacılık sınavında (16 öğrenci) değerlendirdi. Model nesnel maddelerde fakülteye yakın eşleşti (CCC 0,935–1,000) ancak listeleme, kısa yanıt (CCC ≈ 0) ve kompozisyon (0,341–0,854) yanıtlarında güvenilmezdi; yapılandırılmış bir rubrik uzlaşıyı tutarlı biçimde iyileştirmedi — sağlık mesleklerinde yüksek riskli, yetkinlik temelli [[assessment]]’ta YZ’nin iyi belirtilmiş maddelere uygun olduğu, öznel ve açık uçlu klinik akıl yürütme için ise [[human-in-the-loop-ai|insan incelemesinin]] gerekli olduğu kanıtı.
- **Klinik iletişim için doğrulanmış bir LLM hâkimi.** [[sophie-clinical-communication-ai-assessment-2026|Hasan ve ark. (2026)]], 3E iletişim becerilerini yalnızca dökümlerden, insan puanlayıcıların uzlaşısına karşı Pearson 0,759 ve ICC(A,1) 0,746’ya ulaşan bir hâkimle puanladı; bireysel insanların yayılımı içinde, ancak en zayıf boyutu (Açıkça İfade Et) görüşmeler arasında iyileşmedi.
- **Senaryo tabanlı sağlık eğitiminde üretken YZ.** [[genai-scenario-based-healthcare-education-2026|Neto ve meslektaşları (2026)]], sağlık eğitiminde senaryo, vaka, problem ve simülasyon temelli öğrenmeye ilişkin 23 üretken YZ çalışmasını sistematik olarak derledi (PRISMA 2020). Temel bulguları, **[[prompt-engineering|istek metni tasarımının]] öğretim belirtimi işlevi görmesi** — uzman yazarlığın örtük bilişsel hedeflerini ve kalite ölçütlerini kodlamasıdır — ancak çalışmaların yalnızca yüzde 34,8’inin üretilen içeriği öğretim çerçeveleriyle hizaladığı ve yalnızca yüzde 34,8’inin yeniden üretmeye yetecek ayrıntıda istek metni bildirdiğidir. GPT-4 uygulamalarda baskındı (yüzde 44,4), melez [[human-ai-collaboration|insan-YZ işbirliği]] tamamen otomatik yaklaşımları geride bıraktı ve kanıt en güçlü biçimde yüksek mertebeli bilişsel beceriler için ortaya çıktı, ancak başka yerlerde tutarsızdı. Bu, tıp eğitiminde [[simulation|senaryo/simülasyon temelli]] ve [[problem-based-learning|problem temelli]] [[pedagogy]]’yi doğrulama ve entegrasyon kalitesi [[benchmark|kıyaslamalarıyla]] temellendirir.
- **Açık uçlu sınav sorularının YZ ile puanlanması.** [[olvet-genai-scoring-open-ended-medical-2026|Olvet ve ark. (2026)]], iki ABD tıp fakültesinde kliniğe öncesi [[assessment|değerlendirmelerdeki]] açık uçlu soruları [[generative-ai|GPT-4]]’ün güvenilir biçimde puanlayıp puanlayamayacağını sınadı. Fakülte puanlama rubriklerini üç tur hata-örüntü analizi boyunca yinelemeli olarak rafin ederken, YZ–fakülte puanlayıcılar arası güvenilirliği dört sorunun üçünde önemli-neredeyse mükemmel uzlaşıya ulaştı (ağırlıklı kappa 0,94’e kadar) ancak bütüncül rubrik maddesinde yalnızca orta düzeyde oldu (κw = 0,54); tutarsızlıklar her iki puanlayıcıya dayandı (GPT-4 çoklu yanıtlı veya rubrikte olmayan sözcük dağarcığı içeren yanıtları fazla puanladı; fakülte aşırı cömerti) ve ara sıra ortaya çıkan geri bildirim hataları [[human-in-the-loop-ai|insanları döngüde tutmayı]] sürdürdü. Yazarlar, otomatik AYS puanlamasının savı, ABD’deki tıp fakültelerinin yaklaşık yüzde 82’sinin kliniğe öncesi çalışmaları geçti/kaldı olarak notladığı ve kesin YZ puan uzlaşısının her zaman gerekli olmadığı yerlerde güçlendiğini savunur.
- **[[ai-ed-evaluation|YZ’yi değerlendirmek]] — öğretim etmenlerini yalnızca konuşlandırmak değil.** [[zhang-platform-scores-miss-ai-teaching-agents-2026|Zhang ve ark. (2026)]], bir endokrinoloji [[curriculum-design|müfredatında]] dört rol yapma paradigmasında (hasta, öğrenci, uzman, aile üyesi) sekiz LLM öğretim etmenini konuşlandırdı ve 167 öğrenci diyaloğunu 8 boyutlu bir öğretim kalitesi rubriğiyle puanladı. Platform puanları rubrik kalitesinden keskin biçimde ayrıştı; etmenler en çok bilgi boyutlarında, en az rol canlandırmada farklılaştı; uyarlamalı zorluk kalibrasyonu paylaşılan bir zayıflıktı; ve bir etmenin empatisini güçlendirmek, bilgi kapsamını iyileştirmeden rol yapma kalitesini yükseltti. Rol yapma paradigmalarının ayrıştırılabileceği bulgusu (öntanımlı hasta-doktor senaryosunun ötesinde), etmenleri açık pedagojik boyutlara göre tasarlamaya ve değerlendirmeye işaret eder.
- **Alanın kendi literatürünün biçimi.** [[sriram-ethical-ai-medical-education-bibliometric-2026|Sriram, Nichols, Ganti ve Gue (2026)]], tıp eğitiminde etik YZ literatürünün kendisini haritalar: 1995’ten 2026’ya 1.403 Web of Science yayını, iki on yıl ihmal edilebilir düzeyde, ardından 2023’te 113, 2024’te 256 ve 2025’te 500; 39 ülke yazarlık eşiğini aşar, başta ABD (533 yayın) gelir, ardından Çin (189) ve İngiltere (95) gelir; en çok atıf alan çalışmalar yetenek testleridir — her şeyden önce tıp lisans sınavlarındaki ChatGPT performansı — yönetişim bilimselliğinden ziyade. Okumaları, alanın hızlı büyüdüğü ama düzenli büyümediği ve [[governance|yönetişim]] çerçevelerinin ampirik değerlendirmesinin, atıf kaydının ödüllendirmediği iş olduğudur. Yayınlanan YZ-tıp eğitimi araştırmasının hacmini, güvenli kullanım sorularının yanıtlandığının kanıtı olarak ele alan herkes için faydalı bir uyarıdır.

153 raporlu bir tarama derlemesi, tıp eğitiminde üretken YZ’nin uygulamalarını haritalar — [[simulation|simülasyon]] ve klinik beceriler en büyük (47 rapor), değerlendirme üretimi ve geri bildirimden (22) ve vaka temelli öğrenme ve klinik akıl yürütmeden (21) önde — ancak yalnızca 13 raporda bir takip veya belleklenme sinyali vardı ve hiçbir hasta düzeyi sonuç bulunmadı ([[genai-medical-education-transformation-review-2026|Zhao ve ark. (2026)]]).

### Neden önemli

HPE, YZ’nin yararlarının (ölçeklenebilir pratik, uyarlamalı geri bildirim, simülasyon) risklere karşı ([[cognitive-offloading|Aşırı Güven]], uygulamalı klinik becerinin aşınması, etik ve güvenlik kaygıları) dengelenmesi gereken yüksek riskli, yetkinlik temelli bir alandır. Bilgi tabanının genel kavramları — [[teacher-role]], [[assessment]], [[feedback]], [[equity-in-ai-education]] ve [[ethics]] — hataların doğrudan hasta sonuçları doğurduğu sağlık mesleklerinde özellikle yoğun biçimde geçerlidir.

[[wang-safety-gap-productive-struggle-2026|Wang ve Shan (2026)]], ortaya çıkan "güvenlik boşluğuna" — bir öğrencinin YZ destekli performansı ile onu doğrulama yeteneği arasındaki ayrışma — ad verir ve yüksek riskli klinik eğitim için çözümleri geri tutmayı, yapıcı bilişsel sürtünmeyi ve Sokratik veya karşıt YZ mimarilerini reçete eder.

## Sağlık meslekleri eğitimcileri için çıkarımlar

- **Öğrenme ilkelerini uygulamak için YZ’yi kullanın, eğitimcinin yerini almak için değil.** [[fowlin-operationalizing-learning-principles-ai|Fowlin ve ark.]], YZ’nin deneyimsel, duruma gömülü ve dağıtık-biliş öğrenmesini uygulaması gerektiğini, öğretmenin ise etkileşim ve sonuçlarda merkezi olmaya devam etmesi gerektiğini savunur.
- **Klinik beceri eğitimi için YZ’den yararlanın.** [[residencyrl-clinical-rl-training-2026|ResidencyRL]] ve [[hdr-brachytherapy-agentic-ai-simulation-2026|etmen simülasyonu]], YZ’nin gerçek klinik iş akışlarında bir beceri eğitimi ortağı olduğunu gösterir — onu güvenli, ölçeklenebilir pratik eklediği yere yerleştirin.
- **Yüksek riskli yararları aşırı güvene karşı dengeleyin.** HPE yetkinlik temelli ve yüksek risklidir; YZ’nin uygulamalı klinik beceri ve yargının yerine geçmesine karşı korunun ve [[feedback]], [[assessment]] ve [[ethics]] konularını özellikle dikkatle uygulayın.
- **Oyunlaştırılmış ve disiplinler arası YZ’yi düşünceli biçimde uyarlayın.** [[medgame-llm-medical-education-gamification|Oyunlaştırılmış LLM öğrenmesi]] ve [[alrazeeni-transforming-nursing-education-ai-2026|hemşirelik eğitimi dönüşümü]] vaat sunar ancak güvenlik ve beceri sonuçları açısından değerlendirmeye ihtiyaç duyar; hemşirelik için özellikle, güvenlik-ve-beceri kanıtı — YZ destekli simülasyonun standartlaştırılmış hastaların gerisinde kaldığı RCT dâhil — [[nursing-education]] üzerinde toplanmıştır.

## Bağlı Kavramlar

- [[problem-based-learning]]
- [[higher-ed]]
- [[simulation]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[game-based-learning]]
- [[experiential-learning]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[teacher-role]]
- [[assessment]]
- [[feedback]]
- [[ai-education]]
- [[discipline-specific-aied]]
- [[nursing-education]] — sağlık meslekleri eğitiminin hemşirelik dalı
- [[virtual-and-augmented-reality]] — sürükleyici ve AR klinik eğitim

## Bağlı Makaleler

- [[genai-medical-education-transformation-review-2026]] — 153 tıp eğitimi üretken YZ raporunun tarama derlemesi: simülasyon önde, dayanıklılık ve hasta sonuçları ölçülmemiş
- [[ai-standardized-patient-scaffolding-medical-2026]] — Klinik Görüşme Eğitimi için İskeleleme-Odaklı Çok Etmenli Büyük Dil Modeli Sisteminin Değerlendirilmesi
- [[zhang-platform-scores-miss-ai-teaching-agents-2026]] — Tıp eğitiminde YZ öğretim etmenlerinin 8 boyutlu rubrikle değerlendirilmesi
- [[sun-llm-nursing-education-professional-identity-2026]] — LLM’ler, hemşirelik eğitimi yapısal boşlukları ve mesleki kimliğin yeniden yapılandırılması (Sun ve ark. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN çerçevesi: tıp eğitiminde YZ görev dağılımını yeniden düşünmek (Tsim ve ark. 2026)
- [[genai-simulate-patient-history-pbl-2026]]
- [[fowlin-operationalizing-learning-principles-ai]] — Sağlık meslekleri eğitiminde deneyimsel, duruma gömülü ve dağıtık bilişin YZ ile uygulamaya konması
- [[residencyrl-clinical-rl-training-2026]] — Uzmanlık eğitiminde klinik beceriler için pekiştirmeli öğrenme eğitimi
- [[medgame-llm-medical-education-gamification]] — Tıp eğitimi için oyunlaştırılmış LLM temelli öğrenme
- [[hdr-brachytherapy-agentic-ai-simulation-2026]] — Brakiterapi eğitimi için etmen YZ simülasyonu
- [[alrazeeni-transforming-nursing-education-ai-2026]] — Hemşirelik eğitiminin YZ ile dönüştürülmesi
- [[jiang-ai-powered-simulation-nursing-education-2026]] — Hemşirelikte YZ destekli simülasyon: karma yöntemler sistematik derlemesi
- [[wang-safety-gap-productive-struggle-2026]] — The Safety Gap: Restoring Productive Struggle
- [[gen-mentor-dental-radiography-2026]] — Gen-Mentor: döngüde-insan dental radyografi öğretimi (Dong ve ark. 2026)
- [[genai-scenario-based-healthcare-education-2026]] — Senaryo tabanlı sağlık eğitiminde üretken YZ’nin sistematik derlemesi (Neto ve ark. 2026)
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[olvet-genai-scoring-open-ended-medical-2026]]
- [[sophie-clinical-communication-ai-assessment-2026]] — Ölçeklenebilir YZ tabanlı klinik iletişim eğitimi ve otomatik değerlendirme
- [[sriram-ethical-ai-medical-education-bibliometric-2026]] — Tıp eğitiminde YZ etiğinin bibliyometrik haritası: çıktı 113’ten (2023) 500’e (2025) yükseldi, 39 ülke ve atıflar yönetişim yerine yetenek sınamasını ödüllendiriyor (Sriram ve ark. 2026)
