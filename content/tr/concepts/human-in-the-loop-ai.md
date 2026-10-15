---
title: İnsan-Denetiminde Yapay Zeka
created: "2026-10-14T21:40:00-04:00"
connected_faqs: [ai-agents-support-students-instructors, designing-educational-ai-software, ai-feedback-at-scale]
type: concept
foundations: [ai-education]
technology: [generative-ai, human-in-the-loop-ai, learning-analytics, llm]
assessment: [assessment]
level: [higher ed, k 12]
confidence: medium
methods: [benchmark]
ethics: [pedagogical-safety]
reviewed_by: [editor]
translation_of: concepts/human-in-the-loop-ai
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **İnsan-denetiminde yapay zeka** — eğitim amaçlı [[ai-technologies|yapay zeka sistemleri]]nin, üretimi ölçeklendirirken [[pedagogy|pedagojik]] kaliteyi ve güvenliği koruyarak otomatik üretimi stratejik biçimde insan uzmanı muhakemesiyle serpiştirdiği tasarım örüntüsü. Değerlendirmeyi, geri bildirimi veya öğretimi tamamen otomatikleştirmek yerine, HITL (insan-denetiminde) bir insanı (eğitmen, alan uzmanı veya öğrenen) muhakemesinin marjinal değerinin en yüksek olduğu noktada karar döngüsünde tutar — kaliteyi değerlendirmek, uç durumlara karar vermek ve [[agency|öğrenen özerkliği]] ile güvenliğini korumak için. Merkezi tasarım sorusu insanları *dahil edip etmemek* değil, hat içinde gözetimlerinin en değerli ve en az ikame edilebilir olduğu yerin *neresi* olduğudur.

## Düşünülmesi Gereken Sorular

- Merkezi HITL tasarım sorusu insanları dahil edip etmemek değil, hat içinde muhakemelerinin en değerli olduğu yerin neresi olduğudur. Bir YZ değerlendirme veya geri bildirim sisteminde, hangi noktada insanın hat içinde kalması konusunda ısrar ederdiniz?
- Yapay zeka [[automated-question-generation|soru üretimi]] çalışmaları, bilgisayarların açıklığı ve geçerliliği iyi ele aldığını ama anlamlı çeldiriciler ve iyi geri bildirim için hâlâ insanlara gereksinim duyulduğunu buldu. Eğitimle ilgili muhakemenin bazı bölümleri neden otomasyona direnebilir?
- Bir değerlendirme, üç LLM’nin tutarsız ve ihtiyaca duyarsız öğrenci destek önerileri verdiğini buldu ve YZ öğrenciler hakkında tavsiyede bulunmadan önce insan muhakemesinin hâlâ gerekli olduğu sonucuna vardı. Bir yapay zeka mücadele eden bir öğrenci için destek ‘önerdiğinde’, bunu kimse gözden geçirmezse ne ters gidebilir?
- Sayfa, insanların ve algoritmaların farklı türde sorunları yakaladığını öne sürüyor — kesin biçimde doğrulanabilir olanı otomatikleştirin, nüansın ikame edilemez olduğu yerde muhakemeyi koruyun. Kendi uygulamanızda ikisi arasındaki sınır nerede?
- Hat içinde bir insan tutmak yalnızca kalite değil, öğrenen özerkliğini ve güvenliğini korumak olarak çerçeveleniyor. Tam otomasyon, öğrencilerin öğrenmelerinden kimin sorumlu olduğuna ilişkin hissini nasıl ustaca değiştirebilir?
- Yapay zeka daha özerk hale geldikçe, HITL gözetimi temel bir güvenlik siperi olarak tanımlanıyor. Hangi YZ özerklik düzeyinde kendinizi rahatsız hissederdiniz — ve bu rahatsızlık gözetimin nereye ait olduğu konusunda size ne söylüyor?

## Giriş

HITL, tamamen özerk [[ai-education|eğitimde yapay zeka]]nın sınırlarına ve risklerine bir yanıttır: otomatik sistemler ölçekte üretebilir ama eğitmenlerin ve uzmanların getirdiği bağlamsal, [[ethics|etik]] ve pedagojik muhakemeden yoksundur. İki yakın zamandaki uygulama farklı mimarileri gözsterir:

Buyurucu destek, insan gözetiminin giderek zorunlu olduğunun savunulduğu bir alandır. [[lopez-pernas-llm-appropriate-student-support-2026|López-Pernas ve ark. (2026)]], üç LLM’nin öğrenci destek planlarını [[learning-analytics]] göstergelerinden önerebilip öneremeyeceğini test etti ve ihtirama duyarlılığın sınırlı olduğunu ile modeller arası keskin tutarsızlığı buldu; [[llm]] buyurucu danışmanlığı güvenli ve etik biçimde konuşlandırılmadan önce insan-denetiminde muhakemenin hâlâ gerekli olduğu sonucuna vardı.

Üçüncü bir mimari, insan muhakemesini modelin çıktısında değil onun *akış yukarısında* konumlandırır. [[lee-learner-question-types-ai-education-2026|Lee, Atif ve Kang’ın (2026)]] öğrenen sorusu sınıflandırma çalışmasında, üç doktora düzeyinde uzman bütün hattı yönetti: her [[constructivist]] rol için çalışma tanımlarını iyileştirdiler, tutarsızlıkların giderilmesinin ardından Fleiss’in kappa değeri 0,60’tan 0,83’e yükselene kadar bağımsız olarak etiketlediler ve eğitim veri kümesini dengelemek için kullanılan geri çevrilmiş ve yeniden ifade edilmiş maddeleri doğruladılar.

## CODE-GEN: İnsan-Denetiminde Çoktan Seçmeli Soru Üretimi

Duan ve ark. (2026), iki ajanlı bir [[rag]] tabanlı [[agentic-ai|ajan]] sistemi kurdu:
- **Üretici Ajan** — Kurs öğrenme hedefleriyle hizalı çoktan seçmeli kodlama soruları üretir
- **Doğrulayıcı Ajan** — Yedi pedagojik boyut üzerinden kaliteyi değerlendirir

**Değerlendirme:** 6 SME (alan uzmanı) 288 YZ tarafından üretilmiş soruyu yargıladı. İnsan doğrulamalı başarı oranları: boyutlar arasında **%79,9–%98,6**.

**YZ’nin Güçlü Olduğu Boyutlar (düşük insan yükü):**
- Soru açıklığı, kod geçerliliği, kavram hizalaması, doğru yanıt geçerliliği

**İnsanın Gerektiği Boyutlar (yüksek insan yükü):**
- Pedagojik açıdan anlamlı çeldirici tasarımı
- Yüksek kaliteli açıklayıcı [[feedback]]

Stratejik çıkarım: İnsan çabası, öğretim muhakemesinin ikame edilemez olduğu yerde yoğunlaştırılmalıdır; hesaplamalı doğrulama tamamen otomatikleştirilebilir.

## MAIC: İnsan-Denetiminde Senaryo Üretimi

Yu ve ark. (2024), Tsinghua Üniversitesi’nde 500’den fazla öğrenci ve 100.000’den fazla öğrenme kaydıyla çok ajanlı bir sınıf ([[teacher-role|Öğretmen]] Ajanı, Asistan Ajanı, sınıf arkadaşı arketipleri) konuşlandırdı. İnsan eğitmenler senaryo üretimine ve gözetimine katılır; böylece kitlesel ölçekte YZ güçlendirmesi pedagojik uzmanlığın yerini almaz.

## PedaCo: YZ Video Üretiminde İkili Bekçilik

Kim, Baek ve Kwak (2026), HITL’ı Mayer’ın Multimedya Öğrenmesine İlişkin Bilişsel Kuramına (CTML) dayanan *ilkeli direnci* somutlaştıran iki tamamlayıcı bekçilik katmanlı bir hat olan **PedaCo** (Pedagojik Ortak Yaratım) aracılığıyla [[video-education|YZ tarafından üretilen öğretim videosu]] alanına geniletiyor. **Birinci katman** insanı senaryo aşamasına yerleştirir: bir LLM senaryo taslağı hazırlar, bir YZ değerlendiricisi olası CTML ihlallerini işaretler (örneğin, “Sahne 3, önceden açıklama yapılmadan teknik terimler getiriyor”) ve eğitimci kabul etmeyi, düzeltmeyi veya yeniden üretmeyi seçer. **İkinci katman** sentez sonrasında tutarlılık, yedeklilik, zamansal bitişiklik, kiplilik ve görüntü kalitesi üzerine otomatik ölçütleri çalıştırır ve bunları eğitimci gözden geçirir. Denekler içi bir çalışmada (23 eğitimci), gözden geçirme temelli yaklaşım her CTML ilkesini iyileştirdi (ortalama puan 3,07→3,86, p<,01) ve eğitimciler üretim verimliliğini 4,26/5 olarak puanladı — sürtünme yük olarak değil verimli olarak algılandı. Tasarım ilkesi, bilgi tabanının HITL sentezini yankılar: insanlar ve algoritmalar *farklı* türde sorunları yakalar, bu nedenle en etkili sistemler hesaplamalı doğrulamanın kesin olduğu yerde (zamansal eşzamanlama) otomatikleştirir ve pedagojik nüansın ikame edilemez olduğu yerde (ton, kitleye uygunluk) insan muhakemesini korur.

Yerleşim, varlıktan daha önemli olabilir: uygulayıcılar bir Sosyal Öykü yazım aracını oldukça kullanılabilir buldu (SUS 86,8) ama gözden geçirmenin çok geç geldiğini bildirdi; çünkü üretimden önce belirlenen kültürel ve klinik kısıtlar — Batılı sokak giyimi yerine bir aba — çıktıdan sonraki düzenlemeyle telafi edilmesi daha zor olur ([[adapted-stories-social-story-intervention-2026|Enkhjargal ve ark. (2026)]]).

## YZ çağında HITL neden önemli

İnsan-denetiminde tasarım, birkaç yakınsayan nedenle bilgi tabanının [[agentic-ai|ajan]] yapay zeka ve [[reducing-ai-misuse|sorumlu YZ kullanımı]] tartışmalarının merkezine yerleşmiştir:
- **Pedagojik güvenlik.** [[pedagogical-safety]], gerçek öğretim yetkisine sahip yapay zekanın insan gözetimini sürdürmesini gerektirir; böylece hatalar, önyargılar veya zararlı çıktılar öğrenenlere ulaşmadan yakalanır. Bu, [[agentic-ai|hedefleri önleyici biçimde kovalayan]] özerk ajanlar için özellikle önemlidir.
- **Gözetim yalnızca kuramda değil, uygulamada nadirdir.** [[agentic-ai-education-scoping-review|Wang ve ark. (2026)]], 474 eğitim amaçlı ajan YZ sistemi boyunca sağlam, gömülü yönetişim ve insan-denetiminde gözetimin nadiren görüldüğünü buldu; oysa tek görevli özerklik ve çok ajanlı işbirliği arttı — tasarım ilkesi ile konuşlandırılmış pratik arasındaki uçurum.

- **Kritik soru, insanların ne kadar katıldığı değil, döngünün nasıl eyleme dönüştürüldüğüdür.** Bir öğrenme bilimleri bakışı, öğrenmeyi veri yakalama, hesaplamalı yorumlama ve olası yanıt çevresinde düzenlemenin pedagojik eylemi, sistemlerin neyi tespit edip üzerinde hareket edebileceğine bağımlı kıldığını; uyarıların ve etkileşim sınıflandırmalarının ise herhangi bir öğretmen ya da öğrenci hareket etmeden önce öğreneni yorumladığını savunur ([[in-the-loop-educational-ai-learning-sciences-2026|Pande (2026)]]).
- **Geçerlilik ve kalite denetimi.** HITL, [[automated-assessment|otomatik değerlendirme]] ve üretim için bir kalite kapısıdır — insanlar otomatik puanlamanın güvenilmez olduğu yerde karar verir (bkz. [[llms-do-not-grade-essays-like-humans-2026|LLM kompozisyon notlandırma]] [[research-methods-aied|araştırması]]) ve üretilmiş maddeleri doğrular. 42 notlandırma ve geri bildirim çalışması (2023–2025) üzerine yürütülen PRISMA kılavuzlu bir [[meta-analysis-systematic-review|sistematik derleme]] aynı sonuca açıkça ulaşıyor: LLM’ler kısa, iyi yapılandırılmış görevlerde insan değerlendiricileriyle eşleşiyor ama karmaşık, açık uçlu veya öznel işlerde insan muhakemesinin yerini tam olarak alamıyor; en yüksek notlandırma etkililiği, YZ kaynaklı notlandırmayı öğretmen gözetimi ve doğrulamasıyla birleştiren hibrit sistemlerde elde ediliyor ([[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]). [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat ve ark. (2026)]] bu sınırın somut olarak nereden geçtiğini gösteriyor: ChatGPT-5 nesnel eczacılık sınav maddelerinde fakülteyle eşleşti (CCC 0,935–1,000) ama kısa yanıtlı ve kompozisyon maddelerinde kendisine rubrik verilse bile güvenilmezdi; bu da yazarları karmaşık, öznel veya yüksek beklenti doğuran değerlendirmelerde insan gözden geçirmeli hibrit notlandırma önermeye yöneltti.
 Tekrarın bu gözetimin yerini tutmadığı da ortadadır: özdeş gönderimleri beş farklı günde yeniden puanlandığında, aynı model kendi sonuçlarını yalnızca Krippendorff’un alfa değeri 0,625 ile yeniden üretti; değişkenlik orta notlarda yoğunlaştı ve beş oturum sayımında A ile F hiç çıkmadı ([[llm-grading-assistants-public-health-2026|Brevik ve ark. (2026)]]).
- **Öğrenen özerkliği.** Hat içinde bir insan tutmak [[agency]]’yi korur ve [[self-regulated-learning]]’i destekler; tamamen özerk desteğin indükleyebileceği [[cognitive-offloading|aşırı bağımlılığı]] karşı koyar.

- **Öğrenciler insanı kendileri yüksek beklenti doğuran uca koyar.** 93 lisans öğrencisi arasında %81,7’si notun %40’ını oluşturan dönem kompozisyonu için insan puanlamasını tercih etti, 93’ten 75’i yapay zekanın notlandırıcıların yerini almak yerine onlara yardım etmesini istedi ve 69 kişi YZ puanlamasının her zaman insanca gözden geçirilmesini istedi ([[when-students-prefer-ai-scoring-feedback-2026|Yildirim-Erbasli ve ark. (2026)]]).
- **Güven ve kalibrasyon.** Şeffaf insan gözetimi [[trust-calibration]]’ı destekler — öğrenenler ve eğitmenler sistemin arkasında nitelikli bir insanın durduğunu bilir.
- **Gözden geçirmeden önce görünür olan ölçütler uyumu artırır.** [[calibrating-trustworthiness-llm-education-2026|Coscia ve ark. (2026)]], değerlendiriciler LLM yanıtlarını karşılaştırırken güvenilirlik ölçütlerinin onlara gösterilmesinin değerlendiriciler arası uyumu Krippendorff’un alfa değeri 0,3987’den 0,4931’e yükselttiğini, daha fazla ölçüt eklemenin ise karşılık görmeden bilişsel ek yük getirdiğini buldu.
- **Sınırlandırılmış özerklik bir uyarı cümlesi değil, bir mimaridir.** [[ilieva-agentic-genai-higher-education-2026|Ilieva ve ark.’nin (2026)]] [[agentic-ai|ajan]] öğrenme desteğine ilişkin AGAI-HE çerçevesi, gözetimi modelin kendisine, pedagojik iş akışı ve ajan destek katmanlarının yanına üçüncü bir katman olarak yerleştirir: kabul edilebilir YZ kullanımını, pedagojik sınırları, [[privacy]] kurallarını, [[ai-use-disclosure|açıklama gereksinimlerini]], kaynak doğrulamasını, eğitmen denetim noktalarını, [[academic-integrity|dürüstlük]] mekanizmalarını ve nihai insan sorumluluğunu tanımlar ve her ajan işlevinin bir öğrenme gereksinimine, değerlendirme amacına veya yönetişim denetimine izlenebilir olmasını şart koşar. Bu, HITL’ın bir politika beyanından ziyade bir sistem tasarımı özelliği olduğu ilkesinin somut bir örneğidir — ve yazarların 130 öğrencili algı çalışması, o gözetim altında ajan orkestrasyonu eklemenin tek başına bir sohbet robotundan daha iyi bir öğrenme desteği olarak algılanmadığını hatırlatıyor.
- **İnsanın ne sıklıkla baktığı da kendisi bir tasarım kararıdır.** [[tripartite-feedback-framework-ai-assessment-2026|Venetsanos (2026)]], gözetimin *sıklığını* yerleşiminden ayırır: yüksek sıklıklı HITL, her YZ çıktısını öğrenenlere ulaşmadan önce gözden geçirmek; kalite denetimi, hızlı hata tespiti, hesap verebilirlik ve süregelen kalibrasyon sağlar ama otomasyonu güdüleyen verimliliği ortadan kaldırabilir ve not girme dönemlerini darboğaza uğratabilir; düşük sıklıklı HITL ise örnekleri yerinde denetlemek ve yalnızca işaretlenmiş vakaları gözden geçirmek; ölçeklenir ve dönüşüm süresini kısaltır ama gönderimlerde fark edilmeden yayılan hata riskini, hesap verebilirliği zayıflatmayı ve bazı öğrencilerin diğerlerinden daha kapsamlı insan gözden geçirmesi alması hâlinde bir [[equity-in-ai-education|eşitlik]] sorunu yaratmayı da beraberinde getirir. Evrensel bir yanıt reçete etmek yerine, çerçeve bu takasın disiplin hata toleranslarına, değerlendirmenin [[formative-assessment|biçimlendirici]] mi yoksa [[summative-assessment|toparlayıcı]] mı olduğuna, kohort büyüklüğüne ve kurumsal kaynaklara karşı açık biçimde yapılmasını şart koşar — ve alışılmış verimlilik savunusunun tersi yönünde bir varsayılana yer verir: yüksek sıklıklı gözetimle başlayın ve ancak önemli kanıt kabul edilebilir güvenilirlik, güvenlik ve adaleti gösterdiğinde onu kısın; böylece ispat yükü, *daha az* gözetimin güvenli olduğunu gösterme üzerinde durur. Makine ayrıca bu tür gözetimin arkasındaki ilkelerin personel çabasını azaltmak yerine kaydırabileceğini uyarır ve net verimlilik kazancının açık bir ampirik soru olarak kaldığını belirtir.
- Konuşlandırılmış insan gözetimi, kalite muhakemesinden ziyade onay yönlendirme anlamına gelebilir: hibrit bir sorgu sisteminde kabul alanı yalnızca çözümleyicinin soranla farklılaşıp farklılaşmadığını kodluyordu ve hiçbir ölçüt yanıt kalitesini değerlendirmiyordu ([[student-query-demand-hybrid-ai-support-2026|Gupta ve ark. (2026)]]).

## HITL bilgi tabanının araştırmalarında nerede görülür

- **Otomatik değerlendirme ve notlandırma:** HITL sistemleri, kısa yanıtlı notlandırma ([[cong-confidence-asag-2026]]), kendi kendine açıklama değerlendirmesi ([[llm-automated-assessment-student-self-explanations]]) ve [[automated-essay-scoring|kompozisyon puanlama]] ([[psyscore-essay-scoring-zpd-feedback]]) alanlarında YZ üretimini/puanlamasını insan doğrulamasıyla birleştirir. [[cvengros-grading-handwritten-chemistry-ai-2026|Cvengros ve Kortemeyer]], bunu yüksek beklenti doğuran, elle yazılmış genel [[chemistry-education|kimya]] notlandırmasında somutlaştırır: bir [[multimodal]] LLM’nin güvenilirliği yanıt biçimine göre değiştiğinden (metinsel ve kimyasal tepki yanıtları güvenilirken çizim ve grafik rastgeleden kötü puan alıyor) ve yanlış pozitifler öğrencilerce fark edilmediğinden, ham YZ puanlarını güven süzgeçleriyle seçici bir kabul/erteleme politikasına dönüştürürler — kısmi kredi eşikleri, bir [[item-response-theory|IRT]] tabanlı risk eşiği ve soru türü hariç tutma — belirsiz ve grafiksel maddeleri insanlara erteleyerek; yazarların bu yaklaşımı [[assessment|eğitim değerlendirmesinde]] yapay zekayı yüksek riskli olarak belirleyen ve belgelenmiş insan gözetimini zorunlu kılan [[regulation|düzenleyici]] çerçevelere bağlar.
- **Geri bildirim sistemleri:** belgelenmiş insan gözetimini zorunlu kılar.
- **Ulusal bir değerlendirmede operasyonel HITL puanlama (2026):** [[human-in-the-loop-ai-scoring-national-assessment-2026|Curi ve ark. (2026)]], HITL’ı Uruguay’nın Acredita EB sınavında kurumsal ölçekte somutlaştırır. LLM puanlayıcının hataları sistematik biçimde tutucu olduğundan (notu düşük verme), iş akışı geçme/kalma sonucunun tam olarak Yazma bölümüne bağlı olduğu adayları insan gözden geçirmeye yönlendiren bir karar noktası mantığı kullanır — YZ’nin geçtiğini işaretlediği yanıtlar güvenle kabul edilirken, YZ’nin kaldığını işaretledikleri (vakaların %15,3–16,5’i) uzman değerlendiricilerce doğrulanır; bu da tam puanlama iş yükünü ≥%50 oranında azaltır ve yalnızca %0,2–0,6 düzeyinde kalıntı YZ hatalı geçirme riski bırakır. Bu, bir kaynak tahsis stratejisi olarak HITL’dır: insanlar tam olarak YZ’nin tutucu önyargısının aksi hâlde yüksek beklenti doğuran sonuçları değiştireceği yerde karar verir.
- **Ertelenme eşiğini rubriğin kendi çözünürlüğünden türetmek (2026).** [[ai-assisted-instructor-supervised-grading-feedback|Cruz ve ark. (2026)]], YZ–eğitmen toleransını 0,5 puana — bir gönderimini çapa bandına taşıyamayan en büyük tutarsızlığa — belirler ve 0,8 puandaki aykırı değerleri üst düzeye yükseltir; geri bildirim yayımlanmadan önce 362 gönderiden 11’ini (%3,0) insan gözden geçirmesine gönderir.
- **Değerlendiriciler arası uyum insan temel gerçeği değildir.** [[edubehaviors-auditable-coding-educational-dialogues-2026|Bernado ve ark. (2026)]], model ek açıklamasını hiçbir zaman insan altın etiketlerine karşı doğrulamadan denetim katmanına taşır; modeller arası uyumu (ortanca 0,401), paylaşılan model hatalarının hayatta kalabileceği bir iddia kalitesi vekili olarak bırakır. Onların tasarımı gözetimi süslemekten ziyade teşhis koyucu tutar: ara değerlendirmeler açık olduğundan, bir gözden geçirici hangi davranışların tetiklendiğini görebilir ve yanlış okunan bir davranışı kurguyu kötü kodlayan bir kuraldan ayırt edebilir.
- **Geri bildirim sistemleri:** insan-denetiminde geri bildirim tasarımı [[becerra-aicofe-feedback-2026|işbirlikçi geri bildirim sistemleri]] ve [[cong-confidence-asag-2026|güven bilincine sahip kısa yanıtlı notlandırma]] alanlarında görülür.
- **Sınıf işbirliği desteği.** [[breideband-community-builder-cobi-2026|CoBi]], öğretmeni, yükseltici küçük grup söylemini saptayan bir YZ sisteminde gözden geçiren insan olarak tutar: öğretmenler, onları “yerinde” bırakacak canlı gerçek zamanlı gösterim yerine eylem öncesi/sonrası gözden geçirmeyi açıkça tercih ettiler ve sistemin bireysel değil sınıf düzeyinde toplulaştırılmış geri bildirimi, [[privacy]], gözetim ve öğrenen [[agency]] arasındaki gerilimi gezmeye olanak veren şeydir.
- **Soru ve içerik üretimi:** CODE-GEN’in ötesinde, HITL değerlendirme ve [[scaffolding]] için soru üretimine yön verir ([[code-gen]], [[llm-difficulty-calibration-programming-exams-2026]]).
- **Ajan ve çok ajanlı sistemler:** yapay zeka daha özerk hale geldikçe, HITL gözetimi temel bir [[agentic-ai|tasarım siperi]] olarak işlev görür ([[agentic-ai-pedagogical-best-practice-2026]], [[guided-llm-scaffolding-independent-learning]]).
- **Karar sonucuna göre yönlendirme, model belirsizliğine göre değil (2026).** Uruguay’nın Acredita EB ulusal akreditasyon sınavına ilişkin [[human-in-the-loop-ai-scoring-national-assessment-2026|2026 çalışması]] (her biri yaklaşık 5.000–6.000 adaylı iki oturum), insan-denetiminde tasarımın model belirsizliğinden ziyade karar sonuçları tarafından yönlendirildiğinde nasıl göründüğünü gösterir. Bir GPT-5 puanlayıcı, 15 rubrik maddesinin %60–80’inde uzman değerlendiricilerle uyumluydı ama sistematik biçimde tutucuydu; geçme/kalma karşılaştırmalarının %15,3’ünde (2024) ve %16,5’inde (2025) insan-geçti/YZ-kaldı tutarsızlıkları üretti ve tersi neredeyse hiç görülmedi. Çerçeve bu nedenle YZ’nin geçtiğini işaretlediği sonuçları olduğu gibi kabul eder ve bir adayın sonucunu değiştirebilecek her YZ’nin kaldığını işaretlediği sonucu uzman gözden geçirmesine yönlendirir — önce geçme/kalma durumunun yazma bölümüne bağlı olamayacağı adayları atlayarak — tam insan puanlaması gerektiren yanıtları en az %50 oranında azaltır. İkinci bir 2026 tasarımı sınırı karşı tarafından çizer: çok ajanlı bir YZ standartlaştırılmış hasta platformunda ([[ai-standardized-patient-scaffolding-medical-2026|Yang ve ark.]]), insan gözetimi YZ’nin karar vermeye uygun olmadığı şeye saklıdır; bağlamsal yorumu, telafi çalışmasını ve hazır bulunuşluk değerlendirmelerini fakülte ile insan standartlaştırılmış hastalar sağlar ve sistemin [[medical-education|klinik]] yetkinliği özerk biçimde belirlemesine açıkça izin verilmez.

## Sentez

İnsan-denetiminde tasarım yalnızca bir güvenlik önlemi değildir — bir **kaynak tahsis stratejisidir**. Sınır sorunu insanları dahil edip etmemek değil, hat içinde muhakemelerinin marjinal değerinin en yüksek olduğu yerin *neresi* olduğudur. En etkili HITL sistemleri, kıt insan uzmanlığını otomatik sistemlerin en zayıf olduğu yerde (çeldirici tasarımı, açıklayıcı geri bildirim, uç durum kararı, etik muhakeme) yoğunlaştırır ve gerisini otomatikleştirir — kaliteyi, güvenliği ve güveni korurken üretimi ölçeklendirir.
- **İnsan gözetimi YZ destekli çalışmada sürer.** [[scaffolding-systematic-reviews-2026|Sistematik derleme araştırması]], YZ otomasyon araçlarının prosedürel yükleri azalttığını (örneğin tarama) ama yorumlayıcı kararların hâlâ önemli düzeyde insan gözetimi gerektirdiğini buldu; [[kim-ai-andragogy-2026|andragogi araştırması]], insan-denetiminde yapay zekayı (paylaşılan zihinsel modeller, ortak yaratım) temel bir YZ tasarım ilkesi haline getirir.
- **Kurumsal ölçekte insan-denetiminde yapay zeka.** Qin (2026), Lingnan Üniversitesi’nin etik muhakemeyi, eleştirel muhakemeyi ve toplumsal sorumluluğu öne çıkarırken [[generative-ai|GenAI]] erişimini demokratikleştiren bir insan-denetiminde eğitim modeli geliştirdiğini anlatıyor. Model, yapay zeka [[curriculum-design|müfredat]] boyunca gömülendikçe bile insanları muhakeme ve değerlerin odağı olarak konumlandırır — [[higher-ed|yükseköğretim]]de insan-denetiminde ilkelerinin somut bir [[governance|kurumsal]] örneği.
- **Öğrenenler kendi özel derslerinin insan-denetiminde unsurudur.** Topluluk kolej öğrencileriyle [[ko-hughes-vsd-student-centered-its-2026|Değere Duyarlı Tasarım]], bir ITS için öğrenen yönelimli HITL özelliklerinin tamamını üretti (yeniden değerlendirme ve gözden geçirme üzerinde denetim, kişiselleştirilmiş hedefler/hız, gözden geçirme için yer imi, ustalık üzerinde güveni onaylama ve bir YZ yardımı katılım düzeyi denetimi); öğrenciyi uyarlanabilir kararların pasif bir tüketicisi olmaktan çok özel ders döngüsünün etkin bir denetçisi olarak konumlandırır. Çalışma ayrıca eğitmenlerin, bu tür öğrenen denetiminin sistem kaynaklı öğrenme yolunun bütünlüğünü zayıflatıp zayıflatamayacağı konusunda bölündüğünü buldu — insan (öğrenen karşısında öğretmen) muhakemesinin nerede en çok değer kattığına ilişkin daha geniş kaynak tahsis sorusunun bir örneği.
- **YZ’den uzmana yükseltme bir insan-denetiminde hamledir.** SCAN çerçevesi görevleri öğrenen uzaklığına göre dört üretken YZ kipine atar ve doğru atanmış bir YZ görevi içindeki pasif [[student-engagement|katılımı]], öğrenenin YZ’den uzman yardımına kaydırılması gerektiğini bildiren bir beceri kaybı sinyali olarak okur; insan epistemik bir denetçi olarak işlev görür ([[ai-teammate-task-distribution-medical-training-2026|Tsim ve ark. (2026)]]).
- **YZ benimseme tavsiyesinin gözetimi.** Şüpheci kullanıcıların danıştığı [[conversational-ai|konuşma tabanlı yapay zeka]] sistemleri benimsemeyi teşvik etmeye eğilimli olabildiğinden, insan gözetimi ve bağımsız değerlendirme şarttır. Çoğu sınırda ilerleyen modelin şüpheci kırsal [[k-12]] personelini [[student-engagement|katılım]]a doğru yönlendirdiğini gösteren bir denetim, eleştirel olmayan güven yerine şeffaf, denetlenebilir YZ tavsiyesi gereksinimini pekiştirir.

## Bağlı kavramlar

- [[pedagogical-patterns]] — Where human review sits in tested sequences, and what has never been tested in isolation
- [[guardrails]]
- [[formative-assessment]]
- [[automated-assessment]]
- [[scaffolding]]
- [[teacher-role]]
- [[ai-literacy]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[student-experience]]
- [[self-regulated-learning]]
- [[metacognition]]
- [[educational-development]]
- [[generative-ai]]
- [[agency]]
- [[pedagogical-safety]]
- [[trust-calibration]]
- [[agentic-ai]]
- [[cognitive-offloading]]
- [[cognitive-surrender]]
- [[student-support-and-success]] — human judgment inside an automated support flow

## Bağlı makaleler

- [[lee-learner-question-types-ai-education-2026]] — Expert-labeled question classification: humans govern labeling, augmentation, and error analysis (Lee, Atif & Kang 2026)
- [[ilieva-agentic-genai-higher-education-2026]] — Human supervision and governance as the third layer of agentic GAI course design (Ilieva et al. 2026)
- [[ko-hughes-vsd-student-centered-its-2026]] — Value-sensitive design of student-centered ITS (learners in the tutoring loop)
- [[human-in-the-loop-ai-scoring-national-assessment-2026]] — HITL AI-assisted scoring in a large-scale national writing assessment (Curi et al. 2026)
- [[ai-teammate-task-distribution-medical-training-2026]] — SCAN framework: rethinking AI task distribution in medical training (Tsim et al. 2026)
- [[agentic-ai-education-scoping-review]]
- [[becerra-aicofe-feedback-2026]]
- [[calibrating-trustworthiness-llm-education-2026]]
- [[code-gen]]
- [[cong-confidence-asag-2026]]
- [[chen-teacharena-language-agents-realistic-teaching-2026]]
- [[llm-difficulty-calibration-programming-exams-2026]]
- [[llms-do-not-grade-essays-like-humans-2026]] — LLMs do not grade essays like humans (Mathew et al. 2026)
- [[kim-ai-andragogy-2026]] — AI Applications in Supporting Andragogy (Kim et al. 2026)
- [[scaffolding-systematic-reviews-2026]] — Scaffolding Systematic Reviews with Mentoring and AI (Wang 2026)
- [[ai-assisted-instructor-supervised-grading-feedback]] — AI-assisted instructor-supervised grading and feedback
- [[lopez-pernas-llm-appropriate-student-support-2026]] — Can AI deliver appropriate support for diverse student profiles? A large-scale evaluation
- [[breideband-community-builder-cobi-2026]]
- [[cvengros-grading-handwritten-chemistry-ai-2026]]
- [[falahat-chatgpt-grading-pharmacy-exams-2026]]
- [[jukiewicz-chatgpt-teacher-assessment-feedback-2026]]
- [[ai-standardized-patient-scaffolding-medical-2026]] — Evaluating Scaffolding-Oriented Multi-Agent Large Language Model System for Clinical Interview Training
- [[tripartite-feedback-framework-ai-assessment-2026]] — Tripartite framework: sorting feedback by epistemic status and the five boundary principles for AI involvement (Venetsanos 2026)
- [[adapted-stories-social-story-intervention-2026]] — AI-Assisted Social Story Intervention for Special Education: The Design of AdaptED Stories
- [[edubehaviors-auditable-coding-educational-dialogues-2026]] — EduBehaviors: Assertion-based Schemas for Auditable Coding of Educational Dialogues
- [[nlp-student-evaluation-teaching-scoping-review-2026]] — From Sentiment Classification to Actionable and Responsible Feedback: A Scoping Review and Evidence Map of NLP in Student Evaluation of Teaching, 2015–2026
- [[llm-grading-assistants-public-health-2026]] — Identical LLM grading reruns on different days reproduce at only Krippendorff's alpha 0.625
- [[when-students-prefer-ai-scoring-feedback-2026]] — Undergraduates prefer human scoring for high-stakes work and AI as an assistant, not a replacement
- [[student-query-demand-hybrid-ai-support-2026]] — What Students Actually Ask: Demand Structure and Automation Potential in a Hybrid Support System
- [[in-the-loop-educational-ai-learning-sciences-2026]] — Rethinking "In-The-Loop" Approaches in Educational AI: A Learning Sciences Perspective
