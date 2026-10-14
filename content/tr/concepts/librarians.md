---
title: "Kütüphaneciler"
created: "2026-10-14T21:45:00-04:00"
type: concept
foundations: [ai-literacy, critical-thinking, academic-integrity, human-ai-collaboration]
pedagogy: [scaffolding, inquiry-based-learning, collaborative-learning, metacognition]
technology: [generative-ai, llm, knowledge-graph, recommender-systems-and-learning-paths, human-in-the-loop-ai, educational-nlp]
ethics: [trust, trust-calibration, ethics]
institutions: [governance, educational-policy-ai]
audience: [librarians, learners]
level: [higher ed, k 12]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/librarians
source_updated: "2026-09-20T12:40:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Kütüphaneciler** — bilgi okuryazarlığı öğreten, araştırma danışmalarını yürüten, koleksiyonlar ve erişim sistemleri kuran ve giderek YZ arama ve öneri araçlarına insan karşılığı olarak konumlanan kütüphane ve bilgi uzmanlarıdır. Bilgi tabanının araştırmalarında, bir modelin çözemeyeceği güvenilirlik sorununu — bir patentin, teknik bir standardın veya bir sektör raporunun güvenilmeye değer olup olmadığını — ele alan kişiler olarak ve ders ile politika ortak tasarımında eş olarak görünürler. [[ai-education|Eğitimde Yapay Zeka]] içindeki yerleri bu nedenle iki katlıdır: kaynak değerlendirme ve arama stratejisi öğreten eğiticiler olarak ve YZ erişimi çevresinde kurulmuş sistemlerin içindeki [[human-in-the-loop-ai|insan katmanı]] olarak.

## Dikkate Alınması Gereken Sorular

- YZ, bir kütüphanecinin eskiden karşıladığı olgusal başvuru sorusunu artık saniyeler içinde yanıtlayabilir. O işin hangi bölümü hiçbir zaman *yanıtın kendisiydi* — ve hangi bölümü bir kaynağa inanılmaya değer olup olmadığına ilişkin muhakemeydi?
- Sisteme gömülü kütüphaneciliğe ilişkin çalışmada, kaynak değerlendirme soruları danışmaları (38,5%) domine etmiştir; üstelik bunlar tam YZ’nin en az güvendiği vakalardır. Bu giderilmesi gereken bir tasarım hatası mıdır, yoksa güvenilirlik muhakemesinin otomasyona direndiğine ilişkin bir kanıt mıdır?
- [[genai-academic-search-workshop|CHIIR 2026 atölyesi]], bir güven boşluğu bildirmiştir — öğrenciler üreten YZ’ye [[trust-calibration|aşırı güven duyarken]] öğretim üyeleri ona güvensizlik duymaktadır. Böyle bir boşluğu kim kapatır: bir kütüphaneci mi, bir öğretim elemanı mı, yoksa kaynaklarını ve güven düzeyini gösteren bir arayüz mü?
- [[ithaka-sr-ai-skills-college-graduates-2026|Ithaka S+R]], kurumlarda hem YZ becerilerinin ne olduğuna ilişkin bir fikir birliği hem de onları değerlendirmeye yönelik bir çerçeve bulunmadığını tespit etmiştir. Bilgi okuryazarlığı öğretimi bu işin doğal yeri midir — ve bunu söylemek, kütüphanelerden kadrolarıyla uyuşmayan bir yük taşımalarını mı istemektedir?

## Giriş

Kütüphaneciler, bir öğrenenin sorusu ile bilimsel kayıt arasında duran uzmanlardır: başvuru ve irtibat kütüphanecileri, konu uzmanları, bilgi okuryazarlığı öğretimi veren öğretim kütüphanecileri ve koleksiyonlar ile depo alanlarını yöneten personel. [[ai-education|Eğitimde Yapay Zeka]] bağlamında, [[teacher-role|öğretmenlerden]] ve [[administrator|yöneticilerden]] çok daha az sık adları geçer; ancak derlem onlara özgü, sınanabilir bir rol vermektedir. Onlar, [[generative-ai]] üreten YZ’nin yarattığı güvenilirlik sorununun insan çözümü, yalnızca kaynak sağlamakla kalmayıp [[evaluative-judgment]] ve arama stratejisi öğreten eğiticiler ve — bilgi tabanındaki en güçlü vaka hâlinde — hizmetin yanında değil bir YZ sisteminin tasarlanmış bir bileşenidir.

Bu sayfa rolü komşularından ayrı ele alır. [[educational-technology-developers]] erişim ve öneri sistemlerini kurar; kütüphaneciler bu sistemlerin neyi sonuçlandırmak üzere güvenilmemesi gerektiğine karar verir. [[academic-integrity]] YZ kullanımını yazarlık ve açıklama çerçevesinde ele alır; kütüphanecinin çerçevesi — atıf, köken, erişim — buna komşudur ancak daha somuttur.

## Bilgi okuryazarlığı yalnızca yardım değil, öğretim olarak

Bu rol üzerine bilgi tabanındaki en ayrıntılı kanıt, üç programda 60 öğrenciyle sekiz hafta süren bir yarı deneysel çalışmada mühendislik araştırma ekipleri için kurulmuş [[ai-assisted-seminar-learning-information-literacy-2026|Huang’un sisteme gömülü kütüphaneciliğe dayalı seminer platformundan]] gelir (30’u bütünleşik platformda, 30’u geleneksel kütüphane öğretiminde). Bütünleşik grup, beş puanlık ACRL temelli bilgi okuryazarlığı ölçeğinde denetim grubunun 0,25’ine karşılık 0,78 puan kazanmıştır; grup içi en büyük kazanımlar arama becerilerinde (+0,87) ve kaynak değerlendirmede (+0,83), ardından bilgi sentezinde (+0,73) ve etik kullanım bilincinde (+0,70) görülmüştür. Dikkate değer olan, yalnızca performansa dayalı maddelerin bile büyük etkiler üretmiş olmasıdır; dolayısıyla kazanımlar salt güven değildir. Öğretilen şey kütüphane işine karşılık gelir: arama stratejisi oluşturma, kaynak değerlendirme, atıf ve depo alanında gezinme — daha sonra danışma kayıtlarını domine eden dört kategori.

Daha geniş derlem bir personel ve sunum sorusu ekler. [[genai-academic-search-workshop|CHIIR 2026 atölye raporu]], 2.076 öğrenci ve 101 kütüphanecinin katıldığı bir anket üzerine kurulmuş, bir kütüphanecinin 15 haftalık dijital okuryazarlık [[curriculum-design|müfredasını]] tanımlar ve sunanların tek oturumluk atölyelerin öğrencilere yanlış anlaşılmış bir temel bıraktığı yönündeki muhakemesini kaydeder; aynı raporda bir kütüphanecinin öğretim erişimi yaklaşık 1.700 birinci sınıf öğrencisi olarak sayılır.

## YZ’nin en zayıf olduğu yerde kütüphanecisi yükü taşıdı

Seminer platformu işbölümünü bilinçli yapmıştır: algoritmalar kitlesel ölçekte erişimi, insanlar belirsizlik altında değerlendirmeyi üstlenmiştir — ve kayıtlar bu bölümünün işlediğini göstermektedir. 312 danışma boyunca (katılımcı başına 10,4), kaynak değerlendirme ve kalite %38,5, arama stratejisi oluşturma %29,2, atıf yönetimi %18,6 ve depo alanında gezinme %13,7 oranında olup, bunların %73,4’ü altı saat içinde yanıtlanmıştır. Yazarlar bunu doğrudan model performansına bağlar: [[recommender-systems-and-learning-paths|öneri motoru]] 0,68 kesinlik ve 0,61 duyarlılığa ulaşmıştır; bu, Boole anahtar sözcük taban çizgisinden (0,52 ve 0,48) yükseliş olmakla birlikte patentler ve standartlar üzerine güvenilirlik muhakemeleri için yine yetersizdir; doğal dil sorgu işleme ise mühendisliğe özgü sorguların %72,8’ini doğru yanıtlamıştır. Memnuniyet aynı sırayı izler — kütüphaneci yardımı 5,0 üzerinden 4,3 ile en yüksek; ardından öneriler (4,1), sorgulama (3,9), seminerler (3,8), öğrenme yolları (3,6) ve [[knowledge-graph|bilgi grafiği]] (3,4) gelir; görüşmelerde 30 öğrenciden 21’inin kütüphanecilerin varlığına duyduğu güveni belirtmiş olması kayda geçmiştir. Kullanım heterojendir — 30’dan 11’i YZ’ye, 8’i kütüphanecilere dayanmış, 11’i her ikisini birlikte kullanmıştır.

Gerginlik iki yönde de keser. YZ’nin en kötü başa çıktığı vakalar güvenilirlik soruları olmuştur ve platformun kendi yazarları, güvenilirlik karar noktasında bir insan uzmanı tutmanın çıkarılabilecek pratik ders olduğu sonucuna varır. Ancak çalışma tek merkezli ve rastgele atanmamıştır, üç bileşeni hiçbir zaman ayrılmamıştır ve yazarlar sonuçları "yalnızca ön nitelikte" olarak nitelendirir; kütüphanecisi desteği çekildikten sonra sürekliliğin hiç sınanmadığını not eder. Kazanımların nedeni insan katmanı mıydı yoksa 0,68 kesinlikli bir öneri motorunun etrafındaki güvenlik ağı mı, açık kalmaya devam etmektedir.

## Ortak tasarım, işbirliği ve doğrulamanın maliyetini kimin üstlendiği

Kütüphaneciler hizmet sağlayıcı olarak değil ortak tasarımcı olarak da görünür. [[maybee-disruptive-partnerships-sap-2025|Maybee, LeGrand ve Fundator]], Purdue Üniversitesi’nde Algorithmic Literacy için Partners programını belgeler — akademik kütüphanecilerin kolaylaştırdığı, lisans öğrencileri ile öğretim üyelerinin YZ kurs [[educational-policy-ai|politikaları]] ve YZ bütünleşikli [[group-work|grup projeleri]] ortaklaşa ürettiği altı haftalık bir öğrenci–öğretim üyesi öğrenme topluluğu. Yazarlar bunu, öğrencilerin [[ai-misuse-learning-harm|YZ’yi kötüye kullanması]]na ilişkin eksiklik temelli anlatılara bir alternatif olarak çerçeveler ve SPIRaL programının öğrenci yansımaları bilgi okuryazarlığının yeniden öğrenildiğini gösterir: katılımcılar başlangıçta onu kaynak değerlendirmeyle özdeşleştirmiş, ardından onu [[agency]] temsil yetkisi ile bağlantılı katmanlı bir bilimsel uygulama olarak okumaya yönelmiştir. Kaynakları denetlemekten bilgi üretimini yargılamaya uzanan bu dönüşüm, kütüphanecinin üretmek için konumlandırıldığı dönüşümdür.

Rolün sınırlarını belirleyen iki dal daha vardır. [[pearls-epistemic-verification-2026|PEARLS çerçevesi]], altı doğrulama boyutundan üçüne Access (Erişim), Legitimacy (Meşruiyet) ve Source (Kaynak) adını verir ve doğrulamanın veri tabanı erişimi, disiplin dilini ve bazen ücretli araçları tükettiğini not eder — dolayısıyla daha az kaynağa sahip olan öğrenenler, sorumlu kullanımı kanıtlama yükünü daha ağır taşır ve kütüphaneciler, ortak tasarımın gerektirdiği taraflar arasında adlandırılır. [[aarc-ai-research-competency-2026|AARC çerçevesi]] öğretim hedefini açık kılar: doğrula, atıf yap ve yansıt — araştırma süreci üzerinden, ürüne değil değerlendirilen yinelenen taahhütler olarak; uydurma ve önyargıyı tespit etmek dahil. [[hingle-collaborative-ai-literacy-2025|Hingle ve Johri]]’nin derlemesi, kütüphanelerin halihazırda kullandığı tasarımların aktığını gösterir: grup çalışmasının bilgi okuryazarlığına yararları [[ai-literacy]] öğrenimine genelleşir; [[agentic-ai|YZ ajanları]] eş olarak dahil olduğunda bile.

## Eğitimde Yapay Zeka için çıkarımlar

- **Güvenilirlik karar noktasında bir insan tutun.** 0,68 civarında bir kesinlik, yüzeye çıkan materyalin kabaca üçte birini eşleştirmeden bırakmıştır ve kaynak değerlendirme en çok talep edilen danışma türü olmuştur — bu, herhangi bir YZ arama veya öneri katmanı için bir tasarım ipucudur.
- **Bilgi okuryazarlığını öğretim olarak ele alın.** Performansa dayalı maddelerde ayakta kalan kazanımlar arama stratejisi ve kaynak değerlendirmeydi; bunları öğretim kütüphanecileri zaten öğretmekte ve YZ çıktısına atıf yapmak ile onu doğrulamak da bunları gerektirmektedir ([[academic-integrity]], [[critical-thinking]]).
- **Heterojen yollar için tasarım yapın.** YZ’yi, kütüphanecileri veya her ikisini aşağı yukarı eşit oranda tercih eden gruplarla, danışmaları konu ve iş yüküne göre yönlendirmek 312’sini katılımcı başına 10,4 olarak karşılamıştır; tek bir zorunlu yol bazı öğrenenlere yetersiz hizmet verir.
- **Güveni ve kaynakları görünür kılın.** Atölyenin arama-öğrenme çizgisi, hangi bilişsel süreçlerin dış kaynak kullanımına aktarılmaması gerektiğini sormakta ve karar noktalarını koruyan arayüzler çağrısında bulunmaktadır — kütüphanecilerin sıradan çalışma standardı olan kaynak görünürlüğünden belirleyebilecekleri bir [[scaffolding|iskele]].
- **Yalnızca modeli değil insan katmanını bütçeleyin.** Danışmalar saatler içinde, kitlesel ölçekte yanıtlanmıştır; çünkü personel bilinçli biçimde yönlendirilmiştir. Öğrenenlerin güvenilirlik muhakemesini tek başına üstleneceklerini varsaymak, bu maliyeti onu ödemeye en az donanımlı kişilere aktarır.

## Bağlı kavramlar

- [[ai-literacy]]
- [[evaluative-judgment]]
- [[critical-thinking]]
- [[academic-integrity]]
- [[human-in-the-loop-ai]]
- [[human-ai-collaboration]]
- [[recommender-systems-and-learning-paths]]
- [[knowledge-graph]]
- [[scaffolding]]
- [[inquiry-based-learning]]
- [[research-methods-aied]]
- [[higher-ed]]
- [[learners]]

## Bağlı makaleler

- [[ai-assisted-seminar-learning-information-literacy-2026]] — Sisteme gömülü kütüphaneciliğe dayalı seminer platformu; kaynak değerlendirmeyle yönlendirilen 312 danışma
- [[genai-academic-search-workshop]] — Üreten YZ ve akademik arama üzerine CHIIR 2026 atölyesi; kütüphaneci güven boşluğu
- [[maybee-disruptive-partnerships-sap-2025]] — YZ okuryazarlığını öğrencilerle eş olarak ortak tasarlayan akademik kütüphaneciler
- [[aarc-ai-research-competency-2026]] — Öğretilebilir araştırma taahhütleri olarak doğrula, atıf yap, yansıt
- [[pearls-epistemic-verification-2026]] — Altı boyutlu doğrulama protokolü; kapı olarak erişim ve meşruiyet
- [[hingle-collaborative-ai-literacy-2025]] — YZ okuryazarlığı için işbirlikçi öğrenme; bilgi okuryazarlığı yararlarının aktarılması
- [[ithaka-sr-ai-skills-college-graduates-2026]] — Öğretim elemanları atıf yapmayı ve sorumlu kullanımı en üstte sıralar, ancak 26 beceriden yalnızca birkaçını öğretir
- [[bird-multimodal-educational-literature-2026]] — İngilizce öğretmenleri ve kütüphaneciler gibi teknik olmayan kullanıcılar için kurulmuş metin karmaşıklık aracı
- [[cognitive-offloading-llm-synthesis-writing]] — YZ kaynakları onlar için sentezlediğinde öğrenenlerin dış kaynak kullanımına aktardıkları
- [[citation-errors-hallucinations-computing-education-2026]] — Bir doğrulama sorunu olarak uydurma ve hatalı atıflar
