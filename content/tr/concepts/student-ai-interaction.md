---
title: Öğrenci–YZ Etkileşimi
created: "2026-10-14T21:45:00-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [student-ai-interaction]
technology: [generative-ai, intelligent-tutoring, learning-analytics, llm, prompt-engineering]
audience: [learners]
level: [higher ed]
confidence: high
translation_of: concepts/student-ai-interaction
source_updated: "2026-10-26T10:00:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Öğrenci–YZ etkileşimi** — öğrenenlerin öğrenme ve [[problem-solving|problem çözme]] sırasında [[generative-ai|üretici YZ]] sistemleriyle nasıl ilişki kurduğuna ilişkin örüntüler, süreçler ve bilişsel çalışma. Buradaki [[research-methods-aied|araştırma]], öğrencilerin YZ’den ne istediğini, istek metinlerinin ve diyalogların nasıl evrimleştiğini ile etkileşim niteliğinin [[learning-gains|öğrenme çıktıları]], [[cognitive-offloading]] ve [[agency]] ile nasıl ilişkilendiğini betimler.

## Dikkate Alınması Gereken Sorular

- Bir YZ sistemine (veya bir öğrenciye) yazdığınız son birkaç istek metnini düşünün. Bunların çoğunu doğrudan cevabı istemek mi, yoksa YZ’den açıklama, sorgulama veya değerlendirme yapmasını istemek mi olarak tanımlarsınız? Bu örüntünün öğrenme üzerindeki etkisinin ne olduğunu düşünüyorsunuz?
- Araştırma, öğrenci taleplerinin çoğunu az sayıda soru türünün oluşturduğunu ve soruların bir görev ilerledikçe değiştiğini bulmaktadır. Öğrencilerin soru sormasının daralmasının nedenini ne olarak düşünüyorsunuz ve bu durum aracı nasıl kullandıkları konusunda neye işaret ediyor?
- Sayfa, yüzeysel ve cevap arayan istek metinlerinin azalmış öğrenme ve aşırı bağımlılıkla ilişkili olduğunu, yansıtıcı ve doğrulama odaklı etkileşimin ise anlayışı desteklediğini ileri sürmektedir. 'İyi' bir istek metnini 'kötü' birinden ayıranın ne olduğunu düşünüyorsunuz — ve bu öğrencinin sorumluluğu mu, aracın tasarımının mı?
- Etkileşim niteliği, öğrencinin sabit bir niteliği olmaktan çok görev bağlamı ve iskeleleme tarafından şekilleniyorsa, bir kurs veya araç daha geniş ve daha verimli bir sorgulama yelpazesini davet edecek biçimde nasıl yeniden tasarlanabilir?
- Bir öğrencinin akıcı YZ diyalogunun gerçek öğrenmeyi mi yoksa yalnızca becerikli devretmeyi mi yansıttığını nasıl anlarsınız — ve bunu belirlemek için neyi kontrol ederdiniz?

## Giriş

Öğrenci–YZ etkileşimi, öğrenenlerin üretici YZ ile [[student-engagement|kavramasının]] gözlemlenebilir yüzeyidir — sordukları sorular, yazdıkları istek metinleri, YZ çıktısını görüşme ve doğrulama biçimleri ile bu örüntülerin görev aşamaları boyunca ve zaman içinde nasıl değiştiği. [[student-experience]], [[prompt-engineering]] ve [[learning-analytics]] kesişiminde yer alır ve eğitimde YZ kullanımının gerçek öğrenme mi yoksa [[cognitive-offloading|aşırı bağımlılık mı]] temsil ettiğine ilişkin tartışmaların merkezindedir. [[human-ai-collaboration]] insanlar ile modeller arasındaki bilişsel işbölümünün üst düzey çerçevesini sunarken, öğrenci–YZ etkileşimi bu ilişkinin somut, ölçülebilir gerçekleşimidir — öğrenenlerin ana ana yaptığı belirli sorgulamalar, istek metinleri ve görüşme hamleleri.


[[wang-student-ai-collaboration-peer-feedback-2026|Wang ve Guo (2026)]], üretici YZ ile açık uçlu diyaloğun akran değerlendirmesine ne kattığını belgeler: modele ilk önerisini kabul etmek yerine sorular yönelten öğrenciler, akranların daha yüksek puanladığı geri bildirim üretmiş ve daha fazla görev keyfi ile daha az kaygı bildirmiştir.

### Öğrenciler YZ’den ne istiyor

Araştırmanın temel bir akışı, **öğrenci taleplerinin türlerini ve niteliğini** ölçer. Çalışmalar — örneğin Graesser ve arkadaşlarının 18 türlü taksonomisi gibi — soru türü taksonomilerini öğrenci–YZ etkileşimlerini sınıflandırmak için uygulamakta ve sıklıkla analizi yüzlerce veya binlerce etkileşime ölçeklemek amacıyla birkaç örneklemli sınıflandırıcılar kullanmaktadır. Bulgular, öğrenci taleplerinin çoğunu az sayıda soru türünün oluşturduğunu ve öğrencilerin sorduğu soruların **bir görev ilerledikçe önemli ölçüde değiştiğini** göstermektedir (örn. [[student-ai-inquiry-types-cs2-2026]]). Bu görev bağımlılığı önemlidir: etkileşim niteliği öğrencinin sabit bir niteliği değil, problem bağlamı, [[scaffolding]] ve YZ aracının olanakları tarafından şekillenir. En küçük yaşlarda, [[vahedian-children-attitudes-ai-chatbot-2026|Vahedian Movahed ve Martin (2025)]] çocukların (6–14 yaş) bir [[conversational-ai|sohbet robotunun]] güvenilirliğini bilinen cevaplı sorular ("dinozor ne kadar büyüktür" gibi) sorarak etkin biçimde sınadığını — bu, epistemik öz-ajansın bir ifadesidir — bulmuştur; tipik çocuk yalnızca 1–3 soru sormuş, göze çarpan bir birinci sınıf öğrencisi ise 21 soru sormuş olup bu durum, öğrenenlerin sorduğu soruları gelişimsel ve bireysel çeşitliliğin nasıl şekillendirdiğini belirginleştirmektedir.

Taksonomilerin kendileri henüz uzlaşmamıştır: 33 çalışmadan 46 kategorizasyon boyunca benzer etiketler farklı olguları adlandırmakta olup inceleme, bilgi edinimi, değerlendirici geri bildirim, stratejik rehberlik, diyalogsal sorgulama, yapıt iyileştirme ve ortak düzenlemeyi kapsayan bir birim olarak *etkileşim bölümünü* — hedefe yönelik, zamansal olarak sınırlanmış bir değişim — önermektedir ([[student-llm-interaction-taxonomy-review-2026|Borchers, Jansen ve Weidlich (2026)]]).

Bu taksonomi çalışmalarını tamamlayan biçimde, [[yan-cognitive-outsourcing-genai-assessments-2026|Yan ve arkadaşları (2026)]] öğrenci taleplerinin *diyalog biçimini* betimlemektedir. Denetimsiz argümantasyon kompozisyonları tamamlayan 38 [[higher-ed|lisans öğrencisi]] arasında yüzde 76,32’si tek turlu "sor–cevap al–durdur" örüntüsünü kullanmıştır — tipik olarak ihtiyaçlarını belirtmeden değerlendirme başlığını yapıştırır ve memnun kalmadığında aynı istek metnini yeniden gönderir — ve yüzde 78,94’ü [[generative-ai|GenAI]]’ye yalnızca bir görevin başlangıcında (fikirler, arka plan) veya sonunda (düzeltme, uzunluk) dokunmuş olup onu okumadan ve bağımsız [[writing-education|yazımdan]] ayrı tutmuştur; yalnızca yüzde 23,68’i takip soruları ve kendi akıl yürütmesiyle yinelemeli bir diyalogu sürdürmüştür. Yazarlar bu örüntüleri **bilişsel dış kaynağa başvurma** ile **bilişsel yeniden dağıtımı** arasındaki bir yelpazeye yerleştirmektedir — öğrenmeye yüzeysel ve [[metacognition|derin yaklaşımların]] GenAI çağındaki benzeri — ve çoğu öğrencinin aracı yükseltilmiş bir arama motoru olarak algıladığını, bu durumun kendilerini dış kaynağa başvurma ucuna hapsettiğini belirtmektedir.

Bu örüntüleri epistemik çalışma olarak yeniden çerçeveleyen bir analizde, 200 eş programlama sohbet oturumunda öğrenci–GenAI etkileşimlerinin yüzde 78,8’inin dış kaynağa başvurma veya doğrulama arayışı gibi ustalık amacı olmayan hedef ve stratejiler üzerinde işlediği ve yalnızca yüzde 11,1’inin ustalık odaklı hedefleri epistemik gerekçelendirmeyle birleştirdiği görülmüştür ([[constructing-epistemic-ai-literacy-student-ai-co-programming|Wu (2026)]]).

50 örneklenen değişimi kodlamak, aynı davranış için üç yollu bir tipoloji sunar: [[three-pathways-student-ai-interaction-2026|Zahra (2026)]]; yüzde 46’sını modelin bir kâhin gibi davrandığı ve çıktının çok az sorgulanarak kabul edildiği Pasif İnceleme, yüzde 18’ini Doğrudan Soru ve yüzde 36’sını çıktıyı sorgulayan, yansıtan ve doğrulayan Stratejik Diyalog olarak sınıflandırmış olup dağılımı, kodlayıcılar arasında kappa = .48 olan bir kısıt-öncelikli tasarım argümanıyla eşleştirmiştir. 211 bilişim öğrencisi üzerine yapılan yedi ödevlik bir çalışma aynı sonuca ters yönden ulaşmaktadır: [[student-llm-use-cs-subfields-2026|Nizamani ve arkadaşları (2026)]] LLM benimsemesini algoritmalarda yüzde 89,6 ile yazılım mühendisliğinde yüzde 15,2 arasında ölçmüş ve bu yayılımı ödev karmaşıklığına, doğrulanabilirliğe ve iskelelemeye değil alt alana bağlamıştır.

### Etkileşim niteliği ve öğrenme

Tamamlayıcı bir akış, etkileşimin *biçimini* öğrenmeye bağlar. Yüzeysel veya alışkanlık halinde dar istek metinleri (YZ’den açıklama, sorgulama veya değerlendirme yapmasını istemek yerine cevabı üretmesini istemek) azalmış öğrenme ve artan aşırı bağımlılıkla ilişkiliyken, yansıtıcı ve doğrulama odaklı etkileşim [[metacognition]] ile kalıcı anlayışı destekler. Bu durum, öğrenci–YZ etkileşimini doğrudan [[intelligent-tutoring]] tasarımına bağlar: sistemler, daha geniş ve daha verimli bir sorgulama yelpazesini davet edecek ve yalnızca cevap vermek değil soru sormayı iskelemeyecek biçimde inşa edilebilir. Etkileşimin cevap arayan istek metinleri üzerinden hiç yürümesi gerekmez — YZ öğrencilerin kendi çalışmalarını eleştirdiğinde değişim yansıtıcı ve doğrulama odaklı bir diyaloga dönüşür: [[oppenheimer-llms-collaborative-learning-partners-2026|Oppenheimer, Cash ve Connell Pensky (2025)]] çalışmasında öğrenenlerin [[llm]] kompozisyon [[feedback]] yanıtları vakaların yüzde 92,7’sinde yansıtma, yüzde 93,6’sında kabul ve yüzde 87,8’inde LLM iddialarına etkin itiraz göstermiştir (değerlendiriciler arası κ’lar = 0.81–0.89) ve [[ai-feedback-quality|geri bildirim niteliğine]] yanıtları, öğrenilebilir bir beceri olarak yinelemeler boyunca gelişmiştir. Etkileşimin yansıtıcı yüzü doğrudan istek metni yoluyla işlemesi gerekmez — [[breideband-community-builder-cobi-2026|CoBi]]’de öğrenciler kendi [[collaborative-learning|işbirlikçi]] konuşmalarının sınıf düzeyinde YZ görselleştirmeleriyle etkileşime girmiş ve YZ’nin sınıflandırmalarının yanlış göründüğü zamanları üzerine görüşmüştür; görünürdeki yanlış sınıflandırmaları, YZ’nin kapasiteleri ve sınırlarına ilişkin anlayışlarını kalibre etme fırsatlarına dönüştürmüşlerdir ([[trust-calibration]]), çıktısını körü körüne kabul etmek yerine. Ancak etkileşim biçimi ile öğrenme arasındaki bağlantının bir sınırı vardır: [[page-cognitive-partnership-cycle-human-ai-2026|Page (2026)]] *konuşmada yinelemeyi* *bilişsel yinelemeden* ayırır; gerekçe, bir öğrencinin çıktıyı birçok tur boyunca iyileştirebilmesi, ardındaki zihinsel modelin ise değişmeden kalmasıdır; dolayısıyla öğrenmenin kanıtı değişimin uzunluğu veya akıcılığı değil öğrencinin bilişsel konumundaki değişimdir — tur sayısı, kavrama derinliğinin bir göstergesi değildir.

Etkileşimi değil aracı yolun belirleyicisi yapar: yaklaşık 1.000 lise matematik öğrencisiyle yürütülen saha deneyinde, kısıtlamasız GPT-4 alıştırma puanlarını yüzde 48 artırmış ancak yardımsız sınav puanlarını yüzde 17 düşürmüştür; öğretmen tasarımı ipuçlarıyla sınırlandırılmış aynı model ise alıştırmayı yüzde 127 artırmış ve açığı büyük ölçüde gidermiştir ([[naim-bypass-offload-scaffold-llm-learning-2026|Lee, 2026]]).

Öğrencilerin ne kadar değil, etkili biçimde istek metni yazıp yazmadığı başarıyı izlemiştir: YZ Sorgu Verimliliği ile YZ Kaynaklı Problem Çözme, 128 mühendislik öğrencisi boyunca akademik performansın en güçlü öngörücüleri olmuş ve not ortalaması denetlendiğinde dahi anlamlı kalmıştır ([[isaza-chatgpt-engineering-prompting-2026|Isaza Dominguez ve arkadaşları (2026)]]).

Davranışsal bağlam, sorunun kendisinden ayrı bir sinyaldir: TutorTrace’in dört uygulamasında (480 öğrenen, yaklaşık 180.000 IDE olayı) yardımı öğrenenin son davranışsal durumuna bağlamak, bağımsız çalışma içermeyen sorgular arasındaki aralıkları yüzde 50,0’dan yüzde 20,7’ye düşürmüş ve yaklaşan sorguların yalnızca davranıştan öngörülebilir olduğunu göstermiştir (AUROC = .726) ([[tutortrace-learner-behavioral-states-2026|Barron ve arkadaşları (2026)]]).

Yoğunluk mekanizma değildir: öğrencileri ses ile metin arasında dönüşümlü olarak yönlendirmek, dakika başına diyalog turunu neredeyse ikiye katlamış (0,75’e karşılık 1,34) ancak haftalık ustalığı değiştirmemiştir; yazarlar, yazılı kanalın ilk tuş vuruşundan önceki ortanca 26 saniyelik düşünmeyi kodlama eyleminin kendisi olarak okumaktadır ([[ai-tutor-modality-randomized-field-experiment-2026|Yang, Van Alstyne ve Dellarocas (2026)]]).

Bir doğrulama döngüsü yine de yüzeysel kalabilir: bir lisans veritabanı kursunda dört haftalık bir LLM ajanı uygulamasının gecikmeli ardışık analizinde anlamlı bir Sorgu–Değerlendirme–Sorgu döngüsü bulunmuş, ancak alt düzey durumlarda güçlü öz geçiş döngüleri görülmüş ve etkileşimlerin yalnızca yüzde 3,92’si üst düzey bilişe ulaşmıştır ([[li-dbagent-llm-educational-agent-cs-2026|Li ve arkadaşları (2026)]]).

Bernstein ve Sibia (2026), BB2 öğrencilerinin GenAI açıklamalarını ele alma biçiminde yinelemeli bir süzme örüntüsü belgeler ([[student-reception-genai-analogies-computing-2026]]): öğrenciler açıklamaları ders notlarıyla çapraz referanslarlar, kaynağını sormakta ("böyle bir şey olmadan çok daha şüpheci olurdum...") ve tutarsızlık için takip sorularıyla yoklamakta olup tek bir kabul ya da ret kararı vermemektedirler. Öğrenciler ayrıca hangi bilgi ve geçmişe sahip olduğunu varsaydıkları açıklamaları da okumaktadır — müfredatın ötesinde varsayılan [[prior-knowledge|ön bilgi]], varsayılan spor ve oyun referansları ("bilişimin daha çok erkek egemen tarafı") ve aşırı tekrar, hayali okur hakkında sinyal olarak işlev görmüştür; aşırı iskeleleme yalnızca verimsiz değil küçümseyici olarak okunmuştur.

Bir görevdeki doğru *noktada* YZ’ye danışmak, tek bir istek metninin ifade biçimi kadar önemlidir: aynı çalışmada [[yan-cognitive-outsourcing-genai-assessments-2026|Yan ve arkadaşları (2026)]] yeniden dağıtım odaklı azınlığın bağımsız çalışmayı GenAI danışmasıyla dönüşümlü olarak yürüttüğini ve toplam çabanın değişmediğini ancak odakta kayma olduğunu — kaynakların aramadan argümantasyon niteliğini ve dengeyi denetlemeye kaydığını ve yüzeysel akılda tutmaya karşı önlem olarak oturumlardan sonra yansıtma notları yazdığını — bulmuştur; buna karşılık ustalık hedefleri olan ancak [[ai-literacy|YZ okuryazarlığı]] zayıf öğrenenler, "niyetle değil, varsayılan olarak" yük boşaltarak bir "verimlilik paradoksu"na düşmüştür.

### Etkileşimden pedagojiye

Öğrenci–YZ etkileşiminin betimlenmesi [[learning-design]]’ı bilgilendirir: eğitmenler öğrencilerin sorgulama örüntülerinin dar veya yüzeysel olduğu anları fark edebilir ve sorgulamayı genişleten müdahaleler tasarlayabilir; [[teacher-role]], öğrencileri YZ ile verimli biçimde etkileşim kurmada koçluğa doğru kayar. Ayrıca etkili istek metni yazmayı ve doğrulamayı doğuştan gelen beceriler değil öğrenilebilir beceriler olarak ele alan [[ai-literacy]] müfredatlarını temellendirir.

Tasarım kolları bu varsayılanı kaydırabilir: yaklaşık 70 öğrencinin aldığı zaman uyumsuz bir fizik kursunda notlandırılan yapıt cevap değil diyalog dökümüydü; ancak birçok öğrenci yine de modelin Sokratik takip sorularını yanıtlamadan uzun soru listeleri sormuştur — ölçütlerin yakalamak için yazıldığı başarısızlık kipi budur ([[context-prompts-physics-assignments-2026|Rodriguez ve Wulff (2026)]]).

Öğretmen tarafından yazılan istek metinleri bu kolların biridir, ancak uygulanan titizlik hedefin gerisinde kalmaktadır: 1.479 konuşma boyunca, yüzde 38’i öğretmenin hedeflediği Bilgi Derinliği düzeyinin altında kalmış olup DOK 3’te yaklaşık yüzde 50’ye yaklaşmıştır; açık bitiş çizgileri bu boşluğu 0,22 düzey daraltmış ve "doğrudan cevap yok" koruması YZ’nin nihai cevap oranını 8,5 yüzde puan düşürmüştür ([[teacher-authored-prompts-student-ai-dialogue|Liu ve arkadaşları (2026)]]).

Kullanmama da kendisi [[pedagogy]]’nin planlaması gereken bir etkileşim örüntüsüdür. GenAI kullanımının [[assessment]] açık biçimde izin verildiği üç kursta 85 [[teacher-education|öğretmen adayını]] inceleyen [[zou-is-this-a-trap-student-teachers-genai-2026|Zou ve arkadaşları (2026)]], bunların yüzde 62,4’ünün (85’ten 53’ü) GenAI’yi hiç kullanmadığını — benzer İngiltere ve Avustralya araştırmalarında görülen yüzde 79–83 benimseme düzeyinin çok altında — ve benimseyenlerin kullanımının üretken değil yüzeysel ve düzeltici olduğunu bulmuştur (dil bilgisi ve yazım denetimi yüzde 43,8, açıklık denetimleri yüzde 34,4, metin üretimi yalnızca yüzde 18,8). Seçimleri teknik güçlükten çok değerlendirme tasarımını ve kurumsal kültürü izlemiştir: benimsemeyenlerin yüzde 41,5’i haksız yere [[academic-integrity|intihal]] ile suçlanmaktan korkmuş, görüşülen on bir kişiden dokuzu ise izin veren politikanın kendisini olası bir "tuzak" olarak okumuştur. 32 anket bildirimi kullanan ile 28 öz beyan arasındaki boşluk, öğrencilerin *bildirdiği* YZ etkileşiminin notlandırılmış sonuçlardan etkilendiğini — öğrenci–YZ etkileşiminin öğrenme analitiği hesapları için bir ölçüm uyarısı — göstermektedir.

## Öğrenci–YZ Sohbetinde Disiplin ve Bilişsel Kavrama

- **Öğrenci–YZ sohbetinde disiplinle ilişkili bilişsel kavrama.** Chang ve Li (2026), kişi içi ve disiplinler arası bir tasarımla 116 kurstaki YZ’ye yönelik öğrenci istek metinlerini analiz etmekte olup öğrenci–YZ konuşmalarının sabit bireysel etkileşim tarzlarından çok **disiplinle ilişkili** bilişsel kavramayı yansıttığını göstermektedir. İstek metinlerin yaklaşık yüzde 62’si genel olarak üst düzey bilişsel talebi kodlamış olsa da Bloom düzeyi profilleri disipline göre keskin biçimde farklılaşmıştır: [[stem-education|STEM]] kursları Uygulama ağırlıklı istek metinler (yüzde 20,8), dil kursları Anlama ağırlıklı (yüzde 31,7) ve sosyal bilimler kursları Yaratma ağırlıklı (yüzde 33,8) talepler uyarmıştır. Kişi içi eşleştirilmiş karşılaştırmalar, aynı öğrencilerin sosyal bilimler kurslarında STEM kurslarına kıyasla belirgin biçimde daha fazla üst düzey istek metni ürettiğini doğrulamıştır (birleştirilmiş n = 16, p < .001) ve kurs düzeyindeki çeşitlilik öğrenci düzeyindeki çeşitliliği aşmıştır — bu, YZ öğretim asistanlarının disiplinsel bağlam göz önünde bulundurularak tasarlanması ve değerlendirilmesi yönünde güçlü bir argümandır.

- **Öğrencilerin YZ'yi ne kadar kullanması, onun hakkında ne hissettiklerini yordamadı.** 819 öğrenci arasında cinsiyet, kendi bildirdiği YZ uzmanlığı ve kullanım sıklığının hiçbiri bir MANOVA'da anlamlılığa ulaşmadı (Wilks Lambda 0.997, p = 0.551; 0.990, p = 0.295). Bu örneklemde yoğun ve seyrek kullanıcılar aynı görüşleri taşıyordu ([[ai-chatbots-emotional-support-human-connection-2025|Al-Zahrani (2025)]]).

## Yaygın yanlış anlamalar

- **“Etkileşim taksonomileri yerleşmiştir.”** **33 çalışmadan 46 kategorizasyon boyunca benzer etiketler farklı olguları adlandırmaktadır**; incelemenin birim olarak *etkileşim bölümünü* önermesinin nedeni budur. Bir taksonomiden ödünç alınan kodlama şeması, farklı bir yapıyı ölçüyor olabilir.
- **“Öğrenciler YZ'yi özel öğretmen olarak kullanır.”** Denetimsiz argümantasyon kompozisyonlarını tamamlayan **38 lisans öğrencisi** arasında **%76,32'si tek turlu sor-cevap al-durdur örüntüsünü kullanmıştır** ve tipik olarak değerlendirme başlığını yapıştırmıştır. Baskın örüntü tek turlu bilgi çekmedir; bu, özel öğretmenlik değildir.
- **“Daha fazla YZ kullanımı, materyalle daha fazla etkileşim olduğunu gösterir.”** **200 eş programlama sohbet oturumunun** analizi, **öğrenci-GenAI etkileşimlerinin %78,8'inin ustalık dışı amaç ve stratejiler üzerinde işlediğini** bulmuştur. Etkileşim hacmi öğrenme yöneliminden başka bir şeyi ölçmüştür; dolayısıyla oturum sayıları yanıltıcı bir etkileşim vekilidir.

## Bağlı kavramlar

- [[learners]] — Öğrenenler: öğrenen tarafına ilişkin kavramlar için üst başlık
- [[human-ai-collaboration]]
- [[student-experience]]
- [[prompt-engineering]]
- [[learning-analytics]]
- [[cognitive-offloading]]
- [[intelligent-tutoring]]
- [[metacognition]]
- [[agency]]
- [[generative-ai]]
- [[llm]]
- [[ai-literacy]]

## Bağlı makaleler

- [[ai-chatbots-emotional-support-human-connection-2025]] — Kullanım sıklığı ve kendi bildirilen uzmanlık 819 öğrenci boyunca hiçbir şeyi yordamadı

- [[yan-cognitive-outsourcing-genai-assessments-2026]] — Denetimsiz öğrenci–GenAI değerlendirmelerinde bilişsel dış kaynağa başvurma ve yeniden dağıtım (Yan ve ark. 2026)
- [[zou-is-this-a-trap-student-teachers-genai-2026]] — "Is this a trap?": öğretmen adaylarının değerlendirmelerde GenAI’yi benimsememesi (Zou ve ark. 2026)
- [[tutortrace-learner-behavioral-states-2026]]
- [[student-ai-inquiry-types-cs2-2026]] — Öğrenci–YZ etkileşiminde talep türlerinin analizi
- [[student-llm-interaction-taxonomy-review-2026]] — Öğrenci–LLM Etkileşim Taksonomi İncelemesi
- [[teacher-authored-prompts-student-ai-dialogue]] — Öğrenci–YZ Diyalogunda Öğretmen Tarafından Yazılan İstek Metinleri
- [[constructing-epistemic-ai-literacy-student-ai-co-programming]] — Constructing Epistemic AI Literacy
- [[dura-llm-cs2]] — Demystify, Use, Reflect, Assess (DURA): BB2’de LLM bütünleşimi
- [[li-dbagent-llm-educational-agent-cs-2026]] — BB eğitiminde LLM tabanlı eğitim ajanı (DBagent)
- [[isaza-chatgpt-engineering-prompting-2026]] — Kayıtlı istek metni yazma ve bütünleştirme davranışları
- [[breideband-community-builder-cobi-2026]]
- [[oppenheimer-llms-collaborative-learning-partners-2026]]
- [[vahedian-children-attitudes-ai-chatbot-2026]]
- [[student-reception-genai-analogies-computing-2026]] — Flawed but Memorable: Student Critical Reception of Interest-Personalized GenAI Analogies in Computing Education
- [[naim-bypass-offload-scaffold-llm-learning-2026]] — Bypass, Offload, or Scaffold: A Conceptual Model of How Large Language Models Shape Learning
- [[ai-tutor-modality-randomized-field-experiment-2026]] — When AI Tutors Speak: Evidence from a Randomized Field Experiment
- [[context-prompts-physics-assignments-2026]] — Artificial Intelligence Driven Physics Assignments using Context Prompts
- [[three-pathways-student-ai-interaction-2026]] — Öğrenci–YZ etkileşiminin Üç Yol tipolojisi: yüzde 46 Pasif İnceleme, yüzde 18 Doğrudan Soru, yüzde 36 Stratejik Diyalog
