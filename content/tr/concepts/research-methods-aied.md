---
title: AIED’de Araştırma Yöntemleri
created: "2026-10-14T21:40:00-04:00"
type: concept
foundations: [ai-education]
assessment: [educational-measurement]
research_method: [experiment]
level: [higher ed]
page_kind: [evaluation]
confidence: high
connected_faqs: [research-gaps-aied, evaluating-ai-interventions-methods, equity-ethics-pedagogical-safety-research, reporting-interpreting-aied-research]
methods: [ai-ed-evaluation, benchmark, rct, research-methods-aied]
translation_of: concepts/research-methods-aied
source_updated: "2026-10-26T13:35:09-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **AIED’de araştırma yöntemleri** — araştırmacıların [[ai-education|eğitimde YZ]]’yi incelemek için kullandıkları ampirik tasarım, veri toplama stratejisi ve analitik teknik kümesi: YZ araçlarının öğrenmeyi destekleyip desteklemediği (ya da zarar verip vermediği) ve hangi koşullarda desteklediği. Bilgi tabanının derlemi deneysel, anket, nitel, tasarıma dayalı, hesaplamalı-kıyaslama ve inceleme yöntemlerini kapsar. Her birinin kendine özgü güçlü ve sınırlı yanları vardır ve aralarında seçim yapmak; iç geçerlilik (nedensel iddialara duyulan güven), dış geçerlilik (genellenebilirlik), ekolojik geçerlilik (gerçek dünya özgünlüğü) ve hızla değişen YZ araçlarını incelemenin uygulanabilirliği arasındaki ödünleşimleri içerir.

## Üzerinde Düşünülmesi Gereken Sorular

- Sayfanın merkezî gerilimi: nedensel çıkarım için en güçlü tasarımlar (rastgele deneyler) gerçek sınıflarda yürütülmesi en zor olanlardır, buna karşılık en özgün ortamlar daha zayıf nedensel denetim sunar. Bir [[intelligent-tutoring|YZ öğretmeninin]] öğrenmeye yardım edip etmediğine karar vermek zorunda kalsaydınız, bu iki başarısızlıktan hangisiyle yaşamayı tercih ederdiniz — ve neden?
- Okumadan önce, iç geçerlilik, dış geçerlilik ve ekolojik geçerlilik arasındaki farkı adlandırabiliyor musunuz? Sayfa, her tasarımın bunları ödünleştirdiğini savunuyor. Titiz biçimde nedensel olan bir çalışma, gerçek bir sınıf hakkında size neden neredeyse hiçbir yararlı şey söylemeyebilir?
- Bir kıyaslama, bir YZ’nin doğrulukta yüksek puan aldığını gösterir, ancak sayfa, yüksek kıyaslama doğruluğunun eğitim etkililiğini gerektirmediğinde ısrar eder. "Testi geçen" bir sistem neden öğrencilerin öğrenmesine yardım etmekte başarısız olabilir — ve eksik olan kanıt hangi türdendir?
- Tasarıma dayalı araştırma, gerçek bir müdahale üzerinde yineler ancak kazanımları belirli bir mekanizmaya atfedemez; buna karşılık bir RCT nedenleri yalıtır ancak yapay koşullarda yürütülür. YZ’nin hızlı değişim hızı göz önüne alındığında, titiz bir RCT’nin test ettiği araç eskiden önce ne kadar süre güncel kaldığını düşünüyorsunuz?
- Delphi uzlaşısı uzmanlar arasında bir uzlaşı, ampirik bir etki olmadığını ortaya koyar. Uzmanların inandığından mı, işe yarayan şeye dair verilerden mi bir yetkinlik çerçevesi kurmak meşrudur — ve pratikte ikisini nasıl ayırt ederdiniz?
- Sayfa üçgenleştirmeyi savunur — bir aracın işe yarıp yaramadığını ve nasıl işe yaradığını yargılamak için kıyaslama değerlendirmesi, deneyler, ölçüm ve nitel çalışmaları birleştirmeyi. Okumaya başlamadan önce, "bu YZ öğrenmeyi geliştirir" gibi bir iddiada size güven vermesi için her yöntem nerede gerekli olurdu?

## Giriş

AIED araştırmasındaki merkezî gerilim, nedensel çıkarım için en güçlü tasarımlar olan rastgele deneylerin, özgün YZ araçlarıyla gerçek sınıflarda yürütülmesinin çoğu zaman en zor olması, buna karşılık en özgün ortamların (saha yayılımları, vaka çalışmaları, kayıt verisi analizleri) daha zayıf nedensel denetim sunmasıdır. Tek bir yöntem bunu çözmez; alan, yöntemler arasında üçgenleştirerek ve her tasarımın hangi türde iddiayı destekleyebileceğini açıkça belirterek ilerler. Her yöntem ayrıca okuyucuların tartmak zorunda olduğu yatay kesen sınırlılıklar taşır — genellenebilirlik, ölçüm geçerliliği, YZ değişiminin hızlı temposu, tekrarlanabilirlik ve zayıf kuram kullanımı; bkz. [[limitations-in-aied-research]].

Sayfanın konusu bulgular değil yöntemdir. [[learning-sciences]], bu yöntemlerin hizmet ettiği esas alandır: bu sayfa bir çalışmanın nasıl tasarlanması, ölçülmesi ve raporlanması gerektiğini kapsarken, o sayfa alanın insanların nasıl öğrendiğine ve öğrenme ortamlarının nasıl tasarlanması gerektiğine ilişkin neler ortaya koyduğunu kapsar ve tasarıma dayalı ile karma yöntemleri birçok seçenek arasında iki seçenek değil, öğrenme bilimlerinin imza yaklaşımları olarak ele alır.

Bu sayfaya komşu olan [[ai-assisted-educational-research|YZ Destekli Eğitim Araştırması]] sayfası, YZ’yi alanın kendi çalışmasının bir aracı olarak ele alır: literatür taraması, tarama, inceleme otomasyonu, nitel kodlama, analiz ve yazma. Kapsamı, öğretme ve öğrenmenin bursu gibi uygulayıcı araştırmalarını içerir ve bu sayfanın betimlediği tasarımlardan ayrı kalır.

[[ai-methodologies-science-education-research-2026|Martin, Rost, Koenen ve Graulich (2026)]] aynı incelemeyi alanın bilgi üretiminin kendisine uygular ve Chang’ın (2004) nomik-ölçüm problemini kullanır: bir niceliği ölçmek, onu gözlemlenebilir bir şeyle ilişkilendiren bir yasa gerektirir; ancak bu yasa, nicelik zaten bilinmeden ampirik olarak test edilemez. Araştırmacıdan değil, eğitim verilerinden ve en iyileştirmeden doğan YZ kaynaklı ölçüm işlevlerinin bunu çözmekten ziyde yoğunlaştırabileceğini savunurlar. Bu tür işlevler kesin görünebilir, ancak epistemik olarak opak kalır; böylece araştırmacının rolü, hesaplamalı çıktıları yorumlamaya ve doğrulamaya kayar. Yedi aşamalı yansıtıcı çerçeveleri (problemin çerçevelenmesi; alet edinim ve ölçüm; deney ve kanıta dayalı çıkarım; karşılaştırmalar ve replikasyon; norm ve uzlaşı inşası; uygulama ve sonuçları; sürekli iyileştirme) doğrulanmış bir yöntem değil, analitik bir yardımcı olarak sunulur ve karşılaştırılabilirliğin, bir modelin iyi başardığı alt kümeler yerine öğrenci nüfusları arasında genişlemesi gerektiğini savunurlar.

### Raporlama titizliği ve TEP-AIED modeli

YZ-eğitim çalışmalarının raporlama kalitesi kendisi bir araştırma konusudur. [[tep-aied-model-reporting-2026|TEP-AIED modeli (Hwang, Xie, Wah ve Gasevic, 2026)]], eğitimde YZ araştırmasını titizlikle sunmak için yapılandırılmış bir çerçeve sunar; bir çalışma raporunun temel bileşenlerini — kuram/teknoloji/eğitim problemi çerçevelenmesi, tasarım, veri, analiz ve sonuçlar — örgütler; böylece okuyucular ve değerlendirenler iddiaların desteklenip desteklenmediğini ve işin tekrarlanabilir olup olmadığını değerlendirebilir. Raporlamadaki alanın kronik zayıflıklarına (belirsiz araç tanımları, belirtilmemiş model sürümleri, atlanan değerlendirme ayrıntıları) yanıt verir; bunları [[limitations-in-aied-research|sınırlılıklar]] sayfası belgeler. TEP-AIED gibi raporlama çerçeveleri, yerleşik raporlama denetim listelerinin (örneğin deneyler için [[rct|CONSORT]] tarzı kılavuz, incelemeler için PRISMA tarzı kılavuz) yanında, alanın [[educational-measurement|yöntemsel şeffaflık]] ve tekrarlanabilirliğe doğru geniş hareketinin parçası olarak yer alır.

[[raise-framework-ai-education-reporting-2026|RAISE (Allison, 2026)]] aynı soruna ters yönden yaklaşır — anlatısal bir yapı yerine denetim listesi olarak. **On tematik alanda 30 madde** belirler (eğitim gerekçelendirmesi ve kuramsal temel, YZ sistemi özellikleri, YZ rolü ve etkileşimi, [[accessibility]] ve kültürel uygunluk, ortam ve katılımcılar, insan katılımı, çalışma tasarımı ve değerlendirmesi, etik ve güvenilirlik, şeffaflık ve tekrarlanabilirlik, sınırlılıklar ve çıkarımlar), düzenlenebilir bir sürüm ve öğrenen özerkliği, erişimde [[equity-in-ai-education|eşitlik]], veri [[governance]] ve algoritmik şeffaflığı kapsayan bir eşlikçi **Etik ve Risk Matrisi** ile birlikte. İki çerçeve birbirini doğrudan ele alır: TEP-AIED, RAISE’ı kapsamlı olarak nitelendirir ancak genişliğini kusur bulur; "genişliği ve ayrıntı düzeyi, onu rutin ampirik uygulamalar için karmaşık ve daha az erişilebilir kılabilir" şeklinde savunur; buna karşılık RAISE’ın kendi çerçevesi, hiçbir yöntem veya modeli zorunlu kılmadığını ve yalnızca seçimlerin görünür kılınmasını gerektirdiğini belirtir. Birlikte okunduğunda bu literatürdeki ödünleşimi işaret ederler — daha eksiksiz denetim listesine karşılık daha sade üç boyutlu anlatı — ve aynı pazarlığı kabul etmez maddeler üzerinde yakınsarlar: YZ sistemini adlandırmak ve sürümlemek, istek metinlerini ve etkileşim tasarımını açıklamak, işlem ve karşılaştırma koşullarını tanımlamak, etik incelemeyi ve risk azaltımını raporlamak ve sonuçların performans, kalıcılık mı aktarım mı ölçtüğünü belirtmek. Bir çalışmanın bu koşullar üzerinden değerlendirilmesi için raporlama aracının tasarım zamanında benimsenmesi, makale aşamasında toparlanması gerektiği anlamına gelir; her iki çerçevenin de üzerinde durduğu nokta budur. Derlem düzeyinde tarihsel analiz, kendisi şeffaflık yükümlülükleri olan bir yöntemsel seçimdir: [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian ve Doroudi]], her makaleyi AI×Ed çerçevelerinde özetlerin ve tam metinlerin yazar yargısına dayanarak konumlandırır, bunun sistematik veya ölçeklenebilir veri güdümlü bir sınıflandırma olmadığını açıkça kabul eder ve tam veri kümelerini replikasyon için tamamlayıcı materyal olarak kamuya açık hale getirir.

### Deneysel ve yarı-deneysel tasarımlar

Bir **etkililik çalışması**, bir müdahalenin amaçlanan öğrenme etkisini üretip üretmediğini test eder; tipik olarak sonuçları müdahaleyle ve müdahalesiz karşılaştıran deneysel veya yarı-deneysel tasarımlar kullanır. Deneyler, öğrencileri koşullara rastgele atar (örneğin YZ öğretmeni karşısında insan öğretmen veya YZ iskeleli karşısında desteksiz) ve öğrenme kazanımları, [[student-engagement|katılım]] veya motivasyon gibi sonuçlar üzerinde nedensel etkileri tahmin eder. **Randomize kontrollü deneyler** iç geçerlilik için altın standarttır. [[access-not-enough-ai-tutoring-2026|İnsan desteği artı YZ öğretmenliğine ilişkin randomize bir saha çalışması]] ve [[genai-can-harm-teaching-rct-2026|öğretmede üretken YZ’ye ilişkin bir RCT]] nedensel etkileri yalıtlamak için atama kullanır. **Yarı-deneysel** tasarımlar (önçalışma/sonçalışma, özneler arası veya randomizasyon olmadan eşleştirilmiş gruplar) bozulmamış sınıflarda daha uygulanabilirdir, ancak nedensel iddialarda daha zayıftır.

- **Enstrüman doğrulama ve taban çizgisi denetimleri, etki tahmininden önce gelir.** [[genai-cognitive-scaffold-geometric-reasoning-2026|Davor (2026)]], Gana’lı bütün sınıf düzeyi iki lise sınıfını (86 öğrenci, grup başına 43) geometri iskelesi olarak GenAI üzerinden karşılaştırdı; örneklemi bir G*Power analiziyle boyutlandırdı ve çalışmadan önce Geometri Akıl Yürütme ve İspat Testini Spearman-Brown yarım test güvenilirliği 0,859’a pilot etti. Gruplar ön testte anlamlı biçimde farklılık göstermedi ve önceki performansa göre ayarlama yapan bir ANCOVA grup etkisini korudu (F(1, 83) = 50.30, p < ,001, kısmi η² = ,377). Rastgele atama olmaksızın, pilot güvenilirliği ve taban çizgisi eşdeğerlik denetimi, ayarlanmış karşılaştırmayı yorumlanabilir kılan şeydir.
- **Güçlü yanları:** en güçlü nedensel çıkarım; net sonuç ölçümü; etki büyüklüğü tahmini ve etkililik iddialarını destekler.
- **Sınırlılıkları:** pahalı ve yavaş; yapay koşullar ekolojik geçerliliği azaltabilir; hızla değişen YZ araçları uzun deneyleri çabuk eskitir; küçük örneklemler çoğu zaman anlamlı etkilerin tespitini güçsüz bırakır; potansiyel olarak yararlı araçların esirgenmesine ilişkin [[ethics|etik]] kısıtlar.
- **Örnekler:** [[access-not-enough-ai-tutoring-2026]], [[genai-can-harm-teaching-rct-2026]], [[adaptive-pretesting-retention]], [[agent-voice-accents-k12-group-learning]], [[ai-use-critical-thinking-medical-students-2026]].
- **Önkayıt yalnızca deneylere değil, ikincil analizlere de uygulanır.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]], ipuçlu satırları nasıl puanladıkları bakımından yalnızca farklılaşan dört [[knowledge-tracing]] güncelleme kuralını özdeş ASSISTments kayıtları (12.716 öğrenci, 985.813 puanlanmış olay) üzerinde çalıştırdı; doğrulayıcı yarıyı, kaydın URL’sini içeren bir dosya oluşana kadar mühürlü tuttu ve dört önkayıtlı tahminin tamamının tuttuğunu bildirdi. Herhangi bir tamamlamayı ödüllendirmek, sonraki yardımsız performansı bir beceri-zorluk sabitinin hemen üzerinde tahmin etti (birleşik AUC 0,604 karşısında 0,595), buna karşılık katı bir kurala göre %72,8 olana karşılık öğrenci–beceri çiftlerinin %93,9’unu öğrenildi olarak bildirdi. Bir kayıt birkaç sonucu desteklediğinde, analizi önceden sabitlemek karşılaştırmayı güvenilir kılan şeydir.

### Anket ve yapısal eşitlik modelleme çalışmaları

Yatay kesitli anketler, öz bildirilen tutumları, algıları, motivasyonu, [[self-efficacy]] ve [[technology-acceptance-model|teknoloji kabulünü]] ölçer; çoğu zaman hipotez ilişkilerini ve aracıları test etmek için regresyon veya yapısal eşitlik modellemesiyle (SEM/PLS-SEM) modellenir. Bunlar bilgi tabanının derlemini domine eder; özellikle kabul, motivasyon ve psikolojik mekanizma soruları için.

- **Güçlü yanları:** büyük örneklemler; geniş, düşük maliyetli kapsama; psikolojik mekanizmaların karmaşık aracılı modellerini test edebilir; gözlemlenmesi zor tutumları incelemek için uygulanabilir.
- **Sınırlılıkları:** yatay kesitli veriler nedensellik kuramaz; ortak yöntem/özbildirim yanlılığı; uygunluk örneklemesi genellenebilirliği sınırlar; aracılar manipülasyondan değil kovaryanstan çıkarılır.

Enstrümanın kendisi ayrı inceleme hak eder. Bir anketin, görüşmenin veya günlüğün ne ortaya koyabileceği ve ne koyamayacağı — ve insanların bildirdiği ile yaptıkları arasındaki belgelenmiş uçurum — [[self-report-measures]] üzerinde toplanmıştır.

- **Örnekler:** [[acceptance-ai-english-tools-2026]], [[genai-motivation-engagement-2026]], [[ai-autonomous-learning-accomplishment-2026]], [[genai-over-reliance-learning-2026]], [[ai-use-critical-thinking-medical-students-2026]].

### Nitel yöntemler

Görüşmeler, odak grupları ve tematik analiz; öğrencilerin ve öğretmenlerin YZ araçlarını nasıl deneyimlediğine, bunlara yükledikleri anlamlara ve standartlaştırılmış ölçümlerin gözden kaçırdığı gerilim ve zararlara ilişkin zengin, bağlamsal anlatılar üretir. [[hazra-safetutors-pedagogical-safety-2026|YZ öğretmeni güvenliğine ilişkin araştırma]] ve [[ai-changing-teaching-workflows|YZ’nin öğretme iş akışlarını nasıl değiştirdiği]] ağırlıklı olarak nitel kanıta dayanır. Nitel yaklaşımların tam ele alımı — tematik analiz, temel kuram, fenomenoloji/fenomenografi, söylem analizi, gözlem ve etnografi, vaka çalışmaları ve görüşmeler/odak grupları, her biri bilgi tabanı örnekleriyle — için ayrı [[qualitative-research]] kavram sayfasına bakınız.

- **Güçlü yanları:** derin ekolojik ve kavramsal içgörü; beklenmeyen olguları, riskleri ve mekanizmaları su yüzüne çıkarır; kuram inşası ve güven, [[agency|özerklik]] ve yazarlık gibi çelişkili kavramların incelenmesi için zorunludur.
- **Sınırlılıkları:** sınırlı genellenebilirlik; yorumsal ve araştırmacıya bağlı; küçük örneklemler; nedensel iddialar için daha zayıf destek; bulguların çalışmalar arasında sentezlenmesi zor olabilir.
- **Örnekler:** [[hazra-safetutors-pedagogical-safety-2026]], [[ai-changing-teaching-workflows]], [[scaffolding-critical-engagement-genai-minority-students]].

### Karma yöntemli tasarımlar

Karma yöntemli çalışmalar nicel ve nitel akımları birleştirir — çoğu zaman sırayla (örneğin QUAL→QUAN→qual) — böylece nitel veri, nicel bulguları açıklar veya bağlamsallaştırır. [[genai-over-reliance-learning-2026|GenAI ve sürdürülebilir öğrenmeye ilişkin karma yöntemli bir çalışma]] üç dalgalı anketleri eğitmen görüşmeleriyle eşler; [[t2i-competence-paradox-2026|yetkinlik paradoksu çalışması]] öğretim elemanı odak gruplarını, öğrenci anketini ve izleyici görüşmeleri kullanır.

- **Güçlü yanları:** üçgenleştirme güveni arttırır; nicel genişlik artı nitel derinlik; beklenmeyen sonuçları açıklayabilir ve mekanizma ile büyüklük arasında köprü kurabilir.
- **Sınırlılıkları:** karma, kaynak yoğun ve yöntemsel açıdan zorlu; dikkatle tasarlanmazsa bütünleşme yüzeysel kalabilir; her akımın zayıflıklarını miras alır (örneğin özbildirim).
- **Örnekler:** [[genai-over-reliance-learning-2026]], [[t2i-competence-paradox-2026]], [[same-ai-different-pathways]], [[fouad-bentley-trust-utility-gap-physics-2026]].

### Tasarıma dayalı araştırma (DBR)

DBR, bir eğitim müdahalesini özgün bağlamlarda yinelemeli olarak tasarlar, uygular ve inceltir; kuram, tasarım ve gerçek dünya uygulaması arasında döner. Bilgi tabanında YZ öğrenme ortamlarının ve [[pedagogy|pedagojik]] modellerin geliştirilmesinde öne çıkar. Tam DBR döngüsü, örnekler ve güçlü/sınırlı yanları için ayrı [[design-based-research]] kavram sayfasına bakınız. Kanonik bir AIEd örneği, YZ Destekli [[collaborative-learning|İşbirlikçi Öğrenme]] modeli çalışmasıdır ([[ai-assisted-collaborative-learning-model-dbr|Putra ve ark.]]); dört aşamalı bir DBR döngüsü — ihtiyaç analizi, model tasarımı, sekiz haftalık sınıf uygulaması ve model inceliği — yürütmüş ve dört aşamalı bir öğrenme döngüsü üzerinde yinelemiştir (problemin belirlenmesi → YZ destekli işbirlikçi soruşturma → işbirlikçi [[problem-solving]] → yansıtma ve sunum). Diğer örnekler, [[ai-literacy]] [[teacher-education|öğretmen eğitimi]] ([[genai-literacy-training-teacher-education-dbr-2026]]) ve [[critical-thinking|eleştirel düşünce]] için [[generative-ai|GenAI]] [[scaffolding]] ([[critical-thinking-genai-scaffolding]]) geliştirir.

- **Güçlü yanları:** yüksek ekolojik geçerlilik ve pratik alaka; hem kullanılabilir ürünler hem kuram üretir; gerçek sınıfların ve evrimleşen YZ araçlarının karmaşıklığına duyarlıdır; bir model geliştirmek ve özgün uygulama kanıtına dayanarak inceltmek için uygundur.
- **Sınırlılıkları:** zayıf iç geçerlilik (az/hiç denetim grubu yok); bulgular bağlama bağlı ve genelleştirilmesi zordur; uzun zaman çizelgeleri; tasarımın hangi unsurunun bir sonuca yol açtığını yalıtmak zordur — DBR uygulanabilirlik ve iyileşme gösterir, ancak öğrenme kazanımlarını belirli bir mekanizmaya atfedemez.
- **Örnekler:** [[ai-assisted-collaborative-learning-model-dbr]], [[genai-literacy-training-teacher-education-dbr-2026]], [[critical-thinking-genai-scaffolding]], [[human-centered-ai-teacher-educators-2026]].

DBR, [[rct|deneylerin]] nedensel denetimini ekolojik özgünlük ve yinelemeli inceltmeyle ödünleştirir: "bu YZ öğrenme ortamını pratikte işleyecek biçimde nasıl tasarlarız?" soruları için doğru araçtır ve kanıtı, nedensel etkililikten çok kavram ispatı ve tasarım kılavuzu olarak en güçlüdür. DBR öğrenme kazanımlarını okumak, diğer tasarımlar gibi aynı [[limitations-in-aied-research|temkin]] gerektirir — yardımsız, denetimli bir sonuç ölçüsü olmadan, kazanımlar [[learning-gains|öğrenme kazanımları]] altında belgelenen aynı YZ kaynaklı performans şişmesi kafa karışıklığını yansıtabilir.

### Sistematik incelemeler ve meta-analizler

İncelemeler, yeni bir deney yürütmek yerine kanıt tabanını sentezler. Sistematik ve kapsamlı incelemeler, bir çalışma gövdesini aramak, taramak, değerlendirmek ve sentezlemek için şeffaf bir protokol uygular; meta-analizler ayrıca, ağırlıklı bir özet tahmini üretmek ve moderatörleri test etmek için çalışmalar arasında etki büyüklüklerini birleştirir. [[zerkouk-comprehensive-review-its-2025|Kapsamlı bir ITS incelemesi]] ve [[genai-higher-education-systematic-review-2026|yükseköğretimde GenAI’nin sistematik incelemesi]] yaklaşımı örneklendirir.

- **Güçlü yanları:** büyük, parçalanmış bir literatürün verimli sentezi; meta-analiz birleşik etki tahminleri üretir ve moderatörleri tespit eder; kanıta dayalı uygulama ve boşlukların belirlenmesi için zorunludur.
- **Sınırlılıkları:** dâhil edilen çalışmaların niteliğine bağlıdır (çöp girerse çöp çıkar); yayın yanlılığı; heterojen yöntemler ve sonuç ölçüleri sentezi zorlaştırır; YZ değişim hızı göz önüne alındığında hızla yaşlanır.
- **Meta-araştırma uyarısı (2026):** AIED sentez tabanının eleştirileri, erken dönem meta-analizlerinin çoğunun kavram tutarsızlığı, çözümlenmemiş heterojenlik, etki büyüklükleri arasındaki ele alınmamış bağımlılık ve geçersiz yayın yanlılığı değerlendirmesiyle baltalandığını göstermektedir — manşet YZ etki büyüklüklerini şişirir (bkz. [[bartos-ai-learning-meta-meta-analysis-2026]], [[oneill-presumed-effective-meta-analysis-2026]] ve [[weidlich-chatgpt-effect-search-cause-2025]]). Birleşik AIED etki büyüklüklerini üst sınır olarak ele alın.
- **Örnekler:** [[zerkouk-comprehensive-review-its-2025]], [[genai-higher-education-systematic-review-2026]], [[chatgpt-critical-creative-thinking-review]], [[zerkouk-comprehensive-review-its-2025]], [[agentic-ai-education-scoping-review]].

Eğitimde YZ’de sistematik inceleme ve meta-analizin daha eksiksiz ele alımı — birincil tasarımlarla ilişkileri, PRISMA raporlaması ve güçlü/sınırlı yanları dâhil — için ayrı [[meta-analysis-systematic-review]] kavram sayfasına bakınız.

### Hesaplamalı ve kıyaslama değerlendirmesi

Hesaplamalı değerlendirme, insan öğrenenleri incelemek yerine [[ai-technologies|YZ sistemlerini]] doğrudan değerlendirir — kıyaslamalara, zemin gerçeği etiketlerine veya insan yargılarına karşı. Bu, [[benchmark|kıyaslamaları]], [[llm]]-hakem yaklaşımlarını içerir. Bu, [[ai-ed-evaluation]]’e (aşağıdaki ayrıma bakınız) en yakın yöntemdir.

- **Güçlü yanları:** hızlı, ölçeklenebilir, tekrarlanabilir; modellerin ve sistem sürümlerinin birebir karşılaştırmasını olanaklı kılar; sistem geliştirme ve kalite güvencesi için zorunludur.
- **Sınırlılıkları:** öğrenmeyi değil, sistem çıktısını ölçer — yüksek kıyaslama doğruluğu eğitim etkililiğini gerektirmez; zemin gerçeği ve rubrik niteliğinin kendisi çelişkilidir; insanların algıladığı pedagojik niteliği gözden kaçırabilir. [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian ve Doroudi]], LLM’lerin doğal dil esnekliğinin salt teknik ölçütleri yetersiz kıldığını, öğrenmeyle ilgili niteliği yargılamak için daha önce yalnızca insan özneleri için ayrılmış [[simulating-students|simüle edilmiş öğrenciler]], YZ-[[teacher-role|öğretmen]] testleri ve davranış bilimi analizleri gibi insana ilham alan değerlendirme yaklaşımlarını gerektirdiğini savunur ve LLM’leri temkinli biçimde incelemenin insan öğrenmesine ilişkin içgörü üretebileceğini belirtir.
- **Ayrık katılımcılar, rastgele bölmeler değil, dedektör değerlendirmesinde veri kaçağını önler.** [[detecting-gpt-assisted-writing-stylometric-2026|Kumar ve ark. (2026)]], her biri bir yardımsız ve bir yinelemeli örnek üreten 90 yazardan stilometrik bir [[ai-detection|dedektör]] oluşturdu; bir katılımcıdan gelen her pencerenin tek bir kıvrımda kalmasını sağlayarak yazar stilinin bölme üzerinden sızmamasını temin etti ve 18 kişiyi tümüyle dışarıda tuttu. Rastgele orman, ROC-AUC 0,870’e F1 0,842 ile ulaştı, ancak bağımsız olarak yazılmış 18 belgenin 4’ünü (%22,2) GPT destekli olarak işaretledi; yazarlar bu yanlış pozitif oranı yayılımla ilgili sonucu olarak ele alır ve modeli otomatik bir usulsüzlük taraması değil, karar desteği olarak çerçeveler.
- **Örnekler:** [[teachbench-llm-teaching-evaluation]], [[jeon-isd-agent-bench-2026]], [[ground-truth-reliability-aied]], [[cong-confidence-asag-2026]], [[drawedumath-vlm-struggling-students-2026]].
- **Otomatik hatlar için raporlama standartları ve denetlenmiş kıyaslamalar.** İki 2026 makalesi yöntemsel hesap verebilirliği çalışmanın ötesine genişletir. PRISMA-LLM, 888 inceleme otomasyonu makalesini ve 14.726 eklemeyi haritalar; yazılım veya ürün makalelerinin %38,0’sinin hiç değerlendirme raporlamadığını, LLM makalelerinin %9,3’ünün ise bunu yaptığını ve yalnızca pozitif olan LLM değerlendirmelerinin %52’sinin yüksek barlı bir kaygıyı karşılamadan bıraktığını bulur; inceleme iş akışının neresinde otomasyonun devreye girdiğini belirleyen bir raporlama önerir ([[prisma-llm-ai-assisted-systematic-reviews-2026]]). Altı [[physics-education|fizik]] kıyaslamasının uzman yeniden notlandırma denetimi, sorunu enstrüman düzeyinde aynı biçimde gösterir: denetlenen 250 rettirlemeden yalnızca 12’si (%4,80) gerçek model hatasıyken, 143’ü madde kusuru ve 95’i notlandırıcı hatasıdır ([[frontier-models-physics-benchmark-audit-2026]]). Her ikisi, hesaplamalı değerlendirmelerin sonuçları öğrenenler veya modeller hakkında bulgu olarak okunmadan önce denetlenmiş bir hata bütçesine ihtiyaç duyduğunu savunur.
- **İnsan uzlaşısı denetimini dedektör geliştirmeye yerleştirin, sonrasına değil.** [[baker-taylorizable-process-textual-detector-development-2026|Baker ve meslektaşları (2026)]], bilişsel kavramların metinsel dedektörleri için yedi adımlık bir süreç belirler — veri kümesi seçimi, kavram tanımı, kod kitabı taslağı, insan değerlendirici-arası denetim, kategori inceliği, dedektör inşası ve uygulama — böylece insan kodlamalı etiketler üzerindeki güvenilirlik, herhangi bir [[llm|LLM]]-hakem yayılımından önce gelir. Asgari standart olarak şans düzeltmeli uzlaşı ölçütlerini (Cohen’ın veya Fleiss’in κ’su, Krippendorff’un α’sı), öğrenci düzeyinde çapraz doğrulama ve alt grup hata analizini gerektirir ve bu tür [[educational-nlp|dedektörler]] yayılımdaki platformların içine yerleştikçe yanlış ölçümün bir zarar kaynağı haline geldiğini savunur.

### Diğer tasarımlar: boylamsal, vaka ve simülasyon çalışmaları

Başlıca ailelerin ötesinde, bilgi tabanı öğrenenleri zaman içinde izleyen **boylamsal** tasarımları ([[ai-lms-middle-school-longitudinal|boylamsal bir LMS çalışması]]), özgün kullanımın **vaka ve doğal ortam** çalışmalarını ([[ai-in-the-wild-college|gerçek öğrenci etkileşimlerinin geniş ölçekli analizi]]) ve LLM’lerin öğrencilerin veya hastaların yerine geçtiği **simülasyon** çalışmalarını ([[llm-student-simulation-teacher-insights|simüle edilmiş öğrenciler olarak LLM’ler]], [[simulation]]) kullanır. Bunlar, gerçekçilik ve aksi hâlde gözlemlenmesi zor olgulara erişim için genişliği veya denetimi ödünleştirir.

### Uzman uzlaşısı yöntemleri: Delphi tekniği

Delphi yöntemi, yanıtın henüz ampirik olarak bilinmediği bir soruda **uzman uzlaşısı** oluşturmak için yapılandırılmış bir tekniktir — bilgi tabanında en sık, uygulayıcıların ve araştırmacıların üzerinde anlaşabileceği çerçeveler, yetkinlik listeleri ve tanımlar geliştirmek için kullanılır. Bir Delphi çalışmasında, bir uzman paneli ardışık anket turlarına yanıt verir; her turdan sonra grubun yanıtlarının anonim bir özeti geri bildirim olarak sunulur ve uzmanlar, grup uzlaşma sağlayana kadar yanıtlarını revize eder (tipik olarak önceden belirlenmiş bir eşikle tanımlanır, örneğin %75). Tek bir anket veya oy yerine, yinelemeli ve anonim danışma yoluyla kavram geçerliliği ve mesleki uzlaşı inşa etmenin bir yoludur.

- **Güçlü yanları:** farklı bir uzman panelinden, yüzyüze grup baskıları olmadan uzlaşı üretir (anonimlik baskınlık etkilerini azaltır); doğrulanmış bir ölçüm bulunmadığında kavramları, yetkinlikleri ve çerçeveleri tanımlamaya uygundur; yinelemeli turlar uzmanların inceltmesine ve yakınsamasına olanak tanır; tam deneylerin veya büyük örneklemlerin pratik olmadığı yerlerde uygulanabilir.
- **Sınırlılıkları:** uzlaşı ampirik kanıt değil, uzman yargısını yansıtır — etki değil, uzlaşı ortaya koyar; sonuçlar panelin [[writing-education|kompozisyonuna]] ve (öznel) uzlaşı eşiğine bağlıdır; birden fazla tur boyunca yavaş olabilir; tek bir panelin yargısı genellemeyebilir.
- **Örnekler:** [[the-scaffolded-ai-literacy-sail-framework-results-of-a-delphi-study-for-equitabl|SAIL çerçeve çalışması]] (üç tur, 17 uzman, YZ okuryazarlığı yetkinlik düzeylerinin incelenmesi), [[hcap-human-centric-ai-pedagogy-framework-2026|HCAP çerçeve çalışması]] (üç tur, 30 öğretmen, 25 YZ-öğretmen yetkinliğinin tanımlanması), [[ai-literacy-heptagon-2026|YZ Okuryazarlığı Yedigeni]] (uzman girdisi/uzlaşısını bir PRISMA kılavuzlu inceleme ile birlikte kullandı) ve.

Delphi çoğu zaman diğer yöntemlerle birleştirilir — örneğin, uzman uzlaşısı, bir çerçeveyi doğrulamak için kullanılabilir (SAIL ve HCAP’ta olduğu gibi) ve bu çerçeve daha sonra tasarıma dayalı araştırma veya anket çalışmaları yoluyla test edilir veya uygulanır. Nitel ve uzman yargısı yaklaşımlarının yanında yer alır ve çerçeve temelli enstrümanların [[educational-measurement|geçerliliğine]] katkıda bulunur.

### Araştırma karşısında değerlendirme: bağlantılar ve ayrımlar

Araştırma ile değerlendirme yakından ilişkili ancak ayrıdır. **Araştırma**, YZ’nin öğrenmeyi nasıl etkilediğine ilişkin genellenebilir sorular sorar — "iskeleleme öğrenme kazanımlarını geliştirir mi?" — ve belirli çalışmanın ötesine aktarılan kuram ile kanıt inşa etmeyi amaçlar. **Değerlendirme** (bkz. [[ai-ed-evaluation]]), belirli bir YZ aracının veya sisteminin işe yarayıp yaramadığını değerlendirir — kıyaslamalara, rubriklere veya ilgili taraflarca tanımlanan ölçütlere karşı kesin, güvenilir, pedagojik olarak sağlam ve amaca uygun olup olmadığını. Araştırma iç geçerliliği ve genellemeyi, değerlendirme sistem niteliğini ve yerel karar alma sürecini önemser.

Sınırlar bulanıktır: kıyaslama çalışmaları araştırmayı besleyebilen değerlendirmedir ve değerlendirme enstrümanları (rubrikler, zemin gerçeği kümeleri, geçerlilik çerçeveleri), araştırmanın netleştirdiği [[educational-measurement]] ve [[assessment-validity]] kaygılarına bağlıdır. Tersine, öğrenmeyi destekleyene ilişkin araştırma bulguları, YZ araçlarının nasıl [[ai-ed-evaluation|değerlendirildiğini]] beslemelidir. Bilgi tabanı bunları tamamlayıcı olarak ele alır: hesaplamalı ve kıyaslama değerlendirmesi ([[benchmark]], [[ai-ed-evaluation]]) bir YZ sisteminin teknik olarak sağlam olup olmadığını söylerken, etkililik ve anket araştırması ([[rct]]) insanların öğrenmesine yardım edip etmediğini söyler.

### Yöntemler arasında seçim yapmak

Yöntem seçimi araştırma sorusunu izler. Nedensel etki soruları deneyleri ([[rct]]) tercih eder; mekanizma ve algı soruları anket ve nitel çalışmaları; sistem niteliği soruları hesaplamalı değerlendirmeyi ([[benchmark]], [[ai-ed-evaluation]]); sentez soruları incelemeleri ve meta-analizleri; tasarım soruları DBR’yi; bir kavramın, yetkinliğin veya çerçevenin ne içermesi gerektiğine dair uzmanların ne üzerinde anlaştığına ilişkin sorular ise Delphi tekniği gibi uzman uzlaşısı yöntemlerini tercih eder. Alanın heterojenliği ve YZ değişim hızı göz önüne alındığında, bilgi tabanının derlemi, üçgenleştirmeye — bir aracın işe yarıp yaramadığını ve öğrenmeye yardım edip etmediğini yargılamak için hesaplamalı değerlendirmeyi etkililik, nitel ve uzman uzlaşısı kanıtlarıyla birleştirmeyi — doğru bilinçli bir hareketi yansıtır.

Aynı ölçüde önemli olan, herhangi bir tek çalışmayı, AIED araştırmasının tamamını etkileyen **yatay kesen sınırlılıklar** bilinciyle okumaktır — yöntemsel kısıtlar, yavaş yayına karşı YZ değişiminin hızlı temposu, tekrarlanabilirlik ve FAIR uygulaması boşlukları, tescilli araçlara güvenme ve zayıf veya eleştirel olmayan kuram kullanımı. Bkz. [[limitations-in-aied-research]].

## Ana araştırma geleneklerinin karşılaştırılması

Üç başlıca araştırma geleneği — [[quantitative-research|nicel]], [[qualitative-research|nitel]] ve deneysel — ne iddia edebilecekleri, neyi feda ettikleri ve her birinin ne zaman uygun olduğu konusunda temelden farklıdır. Bu karşıtlıkları anlamak, hem eğitimde YZ araştırması tasarlamak hem de okumak için zorunludur.

### Her gelenek ne ortaya koyar

| Boyut | Nicel / anket | Nitel | Deneysel |
|---|---|---|---|
| Çekirdek soru | Ne kadar? Nasıl ilişkili? | Ne anlama geliyor? Nasıl deneyimleniyor? | X, Y’ye neden olur mu? |
| Birincil veri | Sayılar, ölçekler, özbildirim | Sözcükler, gözlemler, ürünler | Atanmış koşullar arası sonuç ölçüleri |
| Çıkarım hedefi | Örüntüler, korelasyonlar, aracılık | Anlam, mekanizmalar, kategoriler | Nedensel etkiler |
| İç geçerlilik | Zayıf (korelasyonel) | Zayıf (denetim yok) | Güçlü (rastgele atama) |
| Dış geçerlilik | Güçlü (büyük örneklemler) | Sınırlı (küçük, bağlama bağlı) | Orta (denetimli koşullar) |
| Ekolojik geçerlilik | Orta | Yüksek | Daha düşük (yapay koşullar) |

- **[[quantitative-research|Nicel araştırma]]** değişkenler arasındaki ilişkileri ölçer ve modeller — anketler, SEM/PLS-SEM, ölçüm, boylamsal izleme. Genişlik, kesinlik ve genellenebilirlik sağlar, ancak yatay kesitli verilerden nedensellik kuramaz ve [[educational-measurement|ölçüm]] sınırlılıklarını (özbildirim yanlılığı dâhil) miras alır.
- **[[qualitative-research|Nitel araştırma]]** anlamı ve deneyimi yorumlar — görüşmeler, odak grupları, tematik analiz, temel kuram, fenomenografi, söylem analizi, gözlem/etnografi, vaka çalışmaları. Derinlik, mekanizma ve kuram inşası sağlar (bkz. [[theory-development-aied]]), ancak sınırlı genellenebilirlik ve zayıf nedensel destek sunar.
- **Deneysel ve yarı-deneysel tasarımlar** (bkz. [[rct]]), rastgele atama veya eşleştirilmiş karşılaştırma yoluyla nedensel etkileri tahmin eder — maliyet, hız ve ekolojik geçerlilik pahasına, iç geçerlilik için altın standart.


[[bulut-technology-supported-formative-assessment-2026|Bulut (2026)]], bu dördünden ayrı duran bir bibliyometrik damar ekler: bir alanın kavramsal gelişimini izlemek için 407 kaydı eş-sözcük ve eş-yazarlık ağı üzerinden haritalar. Yazar, bunun üzerine kurduğu SWOT okumasının bağımsız bir analitik teknik değil yorumlayıcı bir araç olduğunu açıkça belirtir; bu, bu gelenekte sentez ile analiz arasındaki sınırı işaret eder.

### Ölçüm ve karma yöntem bağlantıları

Nicel çalışma, incelenen kavramlar için güvenilir, geçerli enstrümanlara bağlıdır: [[educational-measurement]]. Nitel çalışma, bu enstrümanların gözden kaçırabileceği mekanizmaları ve anlamları ortaya çıkarır. **Deneysel** çalışma, bir müdahalenin enstrümanların ölçtüğü sonuçlara *neden olup olmadığını* tahmin eder. Üçü tamamlayıcı katmanlardır: enstrümanlar kavramları nicelleştirir, deneyler nedenselliği ortaya koyar ve nitel çalışma sayıların ardındaki *nasıl ve neden*i açıklar.

[[mixed-methods-research|Karma yöntemli tasarımlar]], güçlü yanlarının birbirinin zayıflıklarını gidermesi için bilerek nicel ve nitel akımları birleştirir — üçgenleştirmenin güveni arttırdığı nicel genişlik artı nitel derinlik.

### Kullanılabilirlik ve HCI araştırması

Ayrı bir yöntemsel akım olan [[usability-research|kullanılabilirlik ve HCI araştırması]], kullanıcıların bir YZ sistemiyle nasıl etkileşime girdiğini değerlendirir: kullanılabilirliğini, yararlılığını, öğrenilebilirliğini ve kullanıcı deneyimini; yüksek sesle düşünme protokolleri, yapılandırılmış kullanıcı çalışmaları, görüşmeler ve gözlem kullanarak. [[ai-ed-evaluation]]’e en yakın olanıdır ve bir *ön koşul* sorusuna yanıt verir: pedagojik olarak sağlam bir araç bile kullanılamaz hale geldiğinde başarısız olur. Kullanılabilirlik araştırması, nitel araştırmayla veri toplama yöntemlerini paylaşır, ancak anlamı yorumlamak yerine bir ürünü değerlendirmeyi amaçlar.

### Gelenekler arasında faydalar ve sınırlılıklar

- **Nicel/anket:** faydalar — büyük örneklemler, geniş kapsama, karmaşık aracıları test eder, verimli. Sınırlılıklar — nedensellik yok, özbildirim yanlılığı, uygunluk örneklemesi, enstrümanlar yanlış kavramı ölçebilir.
- **Nitel:** faydalar — derin içgörü, beklenmeyen olguları ve zararları su yüzüne çıkarır, kuram inşası için zorunludur, temsil edilmeyen sesleri merkeze alır. Sınırlılıklar — sınırlı genellenebilirlik, araştırmacıya bağımlılık, küçük örneklemler, zayıf nedensel destek, sentezi zor.
- **Deneysel:** faydalar — en güçlü nedensel çıkarım, net sonuç ölçümü, etki büyüklüğü tahmini. Sınırlılıklar — pahalı/yavaş, yapay koşullar, hızla değişen YZ sonuçları eskitir, güçsüz küçük örneklemler, etik kısıtlar.
- **Karma yöntemler:** faydalar — üçgenleştirme, genişlik + derinlik, beklenmeyen sonuçları açıklar. Sınırlılıklar — karma, kaynak yoğun, bütünleşme yüzeysel kalabilir, her akımın zayıflıklarını miras alır.
- **Kullanılabilirlik/HCI:** faydalar — benimseme engellerini belirler, uygulanabilir tasarım kılavuzu sunar, hızlı ve ucuz. Sınırlılıklar — öğrenme etkilerini ortaya koymaz, küçük örneklemler, özbildirim memnuniyeti yanıltıcı olabilir.

Pratikte, eğitimde YZ araştırması nadiren tek bir geleneğe temiz biçimde düşer. En güçlü kanıt üçgenleştirir: bir hesaplamalı veya kullanılabilirlik değerlendirmesi sistemin işlediğini, bir deney öğrenmeye neden olduğunu, nicel enstrümanlar kavramları ölçtüğünü ve nitel çalışma mekanizmaları ve anlamları ortaya çıkardığını gösterir — birlikte bir aracın öğrenmeye yardım edip etmediğini ve *nasıl ve neden* yardım ettiğini yanıtlar.

## Yaygın yanlış anlamalar

**“Yüksek kıyaslama doğruluğu eğitim etkililiğini gösterir.”** Göstermez ve bu açık, alanın merkezî ölçüm problemidir: bir sistem doğrulukta yüksek puan alırken hiçbir öğrenme üretmeyebilir, çünkü kıyaslama doğruluğu kıyaslamanın belirlediği koşullar altındaki görev performansını ölçer. Eğitim etkililiği, teknolojinin denetlemediği koşullar altında bir öğrenen çıktısı gerektirir.

**“Bir araştırma geleneği yöntemsel olarak üstündür.”** Gelenekler, yapıları gereği bir sınırlılığı diğeriyle değişir. Tasarıma dayalı araştırma gerçek bir müdahale üzerinde yineler ancak kazanımları belirli bir mekanizmaya atfedemez; bir [[rct|RCT]] ise nedenleri yalıtır ancak yapay koşullarda yürütülür. Aralarında seçim yapmak, hangi yöntemin daha iyi olduğunu değil, hangi iddiayı yapabileceğinizi seçmektir.

**“Hoşgörülü bir ölçüm kuralı küçük bir yöntemsel tercihtir.”** Bulguyu değiştirir. Herhangi bir tamamlamayı ödüllendirmek, sonraki yardımsız performansı **bir beceri-zorluk sabitinin neredeyse hiç üzerinde (birleşik AUC 0,595'e karşı 0,604)** tahmin ederken, katı bir kural altında **öğrenci-beceri çiftlerinin %72,8'ine karşı %93,9'unu öğrenildi** olarak bildirmiştir. Kural, kimin hazır ilan edildiğinde 21 puanlık bir fark üretmiş ve bunun karşılığında neredeyse hiç öngörüsel iyileşme göstermemiştir.

**“İstatistiksel anlamlılık bir müdahalenin işe yarayıp yaramadığını çözer.”** Bir etkinin saptanabilir olup olmadığını çözer. Bunun bir *öğrenme* etkisi olup olmadığı sonuç ölçüsüne, karşılaştırmaya ve ölçümün alındığı koşullara bağlıdır; bu sayfanın bölümlerindeki tasarım ve raporlama tercihlerinin analiz kadar ağırlık taşımasının nedeni budur.

## Bağlı kavramlar

- [[interpreting-and-applying-aied-research]]
- [[ai-ed-evaluation]]
- [[rct]]
- [[benchmark]]
- [[meta-analysis-systematic-review]]
- [[ai-assisted-educational-research]] — YZ Destekli Eğitim Araştırması
- [[educational-measurement]]
- [[assessment-validity]]
- [[simulation]]
- [[ai-education]]
- [[higher-ed]]
- [[limitations-in-aied-research]]
- [[learning-gains]]
- [[theory-development-aied]] — Eğitimde YZ’de Kuram Geliştirme
- [[qualitative-research]] — Nitel Araştırma
- [[quantitative-research]] — Nicel Araştırma
- [[mixed-methods-research]] — Karma Yöntemli Araştırma
- [[design-based-research]] — Tasarıma Dayalı Araştırma
- [[usability-research]] — Kullanılabilirlik Araştırması
- [[self-report-measures]]
- [[learning-sciences]]

## Bağlı makaleler

- [[ai-methodologies-science-education-research-2026]] — YZ yöntemlerinin fen eğitimi araştırmasını nasıl dönüştürebileceğine ilişkin yansıtma için yedi aşamalı epistemik yineleme çerçevesi (Martin ve ark., 2026)
- [[access-not-enough-ai-tutoring-2026]] — Erişim Yeterli Değil: İnsan Desteği YZ Öğretmenliğiyle Katılımı Geliştirir
- [[genai-can-harm-teaching-rct-2026]] — Üretken YZ Öğretmeye Zarar Verebilir
- [[genai-over-reliance-learning-2026]] — Geliştirmeden Aşırı Güvene: Karma Yöntemli Bir Çalışma
- [[acceptance-ai-english-tools-2026]] — YZ Destekli İngilizce Dil Öğrenme Araçlarının Kabulü
- [[hazra-safetutors-pedagogical-safety-2026]] — YZ Öğretmeni Güvenliği ve Pedagojik Zararlar
- [[zerkouk-comprehensive-review-its-2025]] — Akıllı Öğretim Sistemlerinin Kapsamlı İncelemesi
- [[ai-assisted-collaborative-learning-model-dbr]] — YZ Destekli İşbirlikçi Öğrenme Modeli için Tasarıma Dayalı Araştırma
- [[teachbench-llm-teaching-evaluation]] — TeachBench: LLM Öğretme Yeteneğinin Değerlendirilmesi
- [[ground-truth-reliability-aied]] — Zemin Gerçeğini Modernleştirmek: Güvenilirlik ve Geçerliliğe Doğru Dört Kayma
- [[llm-student-simulation-teacher-insights]] — LLM’ler İnsan Öğrenenleri Etkili Biçimde Simüle Edebilir mi?
- [[raise-framework-ai-education-reporting-2026]] — RAISE: eğitimde YZ çalışmalarının şeffaf raporlanması için on alanda 30 madde (Allison 2026)
- [[ai-lms-middle-school-longitudinal]] — YZ Bütünleşik Öğrenme Yönetim Sistemi: Boylamsal Bir Çalışma
- [[ai-in-the-wild-college]] — YZ Doğal Ortamda: Özgün Etkileşimlerin Geniş Ölçekli Analizi
- [[same-ai-different-pathways]] — Aynı YZ, Farklı Yollar: Mekanizmaların Açımlanması
- [[tep-aied-model-reporting-2026]] — Eğitimde YZ araştırmasını titizlikle raporlamak için TEP-AIED modeli (Hwang, Xie, Wah ve Gasevic 2026)
- [[t2i-competence-paradox-2026]] — Yetkinlik Paradoksu: Sanat ve Tasarımda Metinden Görüntüye GenAI
- [[rismanchian-ai-education-four-decades-aixed-2026]]
- [[weidlich-chatgpt-effect-search-cause-2025]] — Eğitimde ChatGPT: Neden Arayan Bir Etki
- [[bartos-ai-learning-meta-meta-analysis-2026]] — YZ’nin öğrenme üzerindeki etkisinin meta-meta-analizi
- [[oneill-presumed-effective-meta-analysis-2026]] — Varsayılan Olarak Etkili: kusurlu AIED meta-analizi denetimi
- [[synthetic-educational-data-structural-fidelity-2026]] — Doğruluk Ölçütlerinin Gözden Kaçırdığı: Sentetik Eğitim Verisine Yapısal Bir Bakış
