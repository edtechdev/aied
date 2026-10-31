---
title: Kullanılabilirlik Araştırması
created: "2026-10-14T22:40:00-04:00"
type: concept
connected_faqs: [designing-educational-ai-software]
research_method: [system development, user study, interviews]
page_kind: [evaluation]
confidence: high
methods: [usability-research]
translation_of: concepts/usability-research
source_updated: "2026-10-26T01:30:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Kullanılabilirlik araştırması** — kullanıcıların bir yazılım sistemiyle ve onun kullanılabilirliği, faydalılığı ve kullanıcı deneyimi (UX) ile nasıl etkileşime girdiğinin ampirik çalışması. İnsan-bilgisayar etkileşiminden (HCI) derlenen kullanılabilirlik araştırması, bir YZ eğitim aracının kullanılabilir, öğrenilebilir, verimli ve tatmin edici olup olmadığını değerlendirir — öğrenenlerin onu gerçekten benimseyip ondan yararlanıp yararlanmadığını belirleyen nitelikler. Öğrenme olgularına dair [[qualitative-research|niteliksel soruşturma]] ve [[quantitative-research|niceliksel etkililik]] ile ayrı ama bütünleyicidir: kullanılabilirlik araştırması, öncelikle *kişi ile sistem arasındaki etkileşime* odaklanır, tek başına öğrenme çıktılarına değil.

## Üzerine Düşünülmesi Gereken Sorular

- Eğitimsel ya da başka türlü bir yazılım aracı hatırlayabilir misiniz — pedagojik açıdan sağlam ya da gerçekten güçlü, ama kafa karıştırıcı ya da hayal kırıklığı yaratan olduğu için kullanmayı bıraktığınız? Bu başarısızlık, öğrenmeye mal olmadan önce kullanılabilirlik araştırmasının açıklamaya çalıştığı şeydir.
- Yaygın bir varsayım, bir aracın eğitimsel etkililiğinin öğrenme kazanımlarının iyileşip iyileşmediğine bakılarak yargılanabileceğidir. Ama sayfa, bir aracın kullanılamaz olmasına rağmen bir denemede ‘işe yaradığı’ görünebileceğini ya da kullanılabilir olmasına rağmen öğretemeyebileceğini ileri sürer. Öğrenme kazanımları gösteren bir çalışma, aracın uygulamada kullanımının can sıkıcı olduğunu neden gözden kaçırabilir?
- Metodları okumadan önce, bir YZ öğretmeninin öğrenenler için kafa karıştırıcı, hayal kırıklığı yaratan ya da hataya açık olup olmadığını nasıl öğrenirdiniz? Fiilen ne yapardınız ya da ne gözlemlerdiniz — bir kullanıcının tatmin konusundaki kendi raporu, özenli gözlemenin yakalayacağı neyi kaçırırdı?
- Sesli düşünme çekirdek bir yöntemdir: kullanıcılar çalışırken düşüncelerini söyleyerek kafa karışıklığını ve zihinsel modelleri gerçek zamanlı ortaya koyar. Bir YZ aracı kullanan bir öğrenci olsaydınız, kafa karışıklığınızla ilgili basit bir ‘beğendiniz mi?’ anketinin asla yakalayamayacağı neyi ifade edebilirdiniz?
- Sayfa, bildirilen tatmin ile nesnel performansın ayrışabileceğini not eder: insanlar kendilerini gizlice yavaşlatan bir aracı sevdiğini söyleyebilir ya da gerçekten yardımcı olan bir aracı düşük değerlendirebilir. İnsanların söylediği ile davranışlarının gösterdiği arasındaki bu uçurumu nerede gördünüz?
- Kullanılabilirlik araştırması, bir aracın kullanılabilir olup olmadığını söyler, öğretip öğretmediğini değil. Bir YZ öğrenme aracını değerlendiriyorsanız, kullanılabilirlik kanıtını öğrenme kanıtıyla nasıl birleştirirdiniz — ve ikisini de geçen bir araç hâlâ neyi başaramazdı?

## Giriş

Kullanılabilirlik ve UX araştırması şu gibi sorulara yanıt verir: Öğrenciler bu YZ öğretmenini nasıl kullanacaklarını çıkarabiliyor mu? YZ aracı kafa karıştırıcı, hayal kırıklığı yaratan ya da hataya açık mı? Öğretmenlerin ya da öğrenenlerin iş akışına uyuyor mu? Bu sorular, etkililik çalışmalarında ölçülen [[learning-gains|öğrenme kazanımlarının]] (ya da onun yokluğunun) önkoşuludur — ve bazen onun gizli nedenidir. Pedagojik açıdan sağlam ama kullanılamaz bir YZ aracı uygulamada başarısız olacaktır; kullanılabilirlik kanıtı bunun nedenini açıklar.

## Çekirdek yöntemler

- **Sesli düşünme protokolleri.** Kullanıcılar görevleri yerine getirirken düşüncelerini sesli olarak ifade eder; kavrayışı, kafa karışıklığını ve zihinsel modelleri gerçek zamanlı ortaya koyar. [[code-anchor-multi-view-visualization|Çok görünümlü kod görselleştirmeleri üzerine bir çalışma]] ve [[learn-framework-responsible-genai-pbl-2026|LEARN çerçevesi]], öğrenenlerin YZ destekli araçlara nasıl anlam yüklediğini anlamak için sesli düşünmeyi kullanır; [[feedback-futures-genai|geri bildirim gelecekleri]], öğrenenlerin YZ tarafından üretilen geri bildirimi nasıl işlediğini inceler.
- **Kullanıcı çalışmaları.** Yapılandırılmış görev temelli değerlendirmeler, verimliliği, hata oranlarını, tatmini ve tamamlamayı ölçer. [[rhaimi-productivemath-2025|ProductiveMath]], üreten YZ’ye dayalı bir uygulamanın verimli başarısızlık öğretimini desteklemedeki kullanılabilirliğini değerlendirir; [[supplynet-visual-exploratory-learning|SupplyNet]], görsel keşifçi bir öğrenme aracı üzerine bir kullanıcı çalışması yürütür; [[llm-chatbots-cs-multiple-choice|Bilgisayar bilimlerinde çoktan seçmeli LLM sohbet robotları]], etkileşim kalitesini değerlendirir.
- **Görüşmeler ve gözlem.** Niteliksel kullanılabilirlik görüşmeleri ve gözlem, kullanıcı deneyimini, tercihleri ve sorun noktalarını yakalar. [[icub-humanoid-storytelling-llm-hri-2025|Hikâye anlatan bir insansı robot üzerine kullanılabilirlik çalışması]], ebeveynlerin robotun bir çocukla etkileşime girmesine izin verip vermeyeceklerini sormak için yapılandırılmış değerlendirme kullanır; [[genai-architectural-design-studios|Tasarım stüdyolarında YZ]], özgün tasarım işinde YZ kullanan öğrencileri gözler ve görüşür.
- **Sistematik kullanılabilirlik değerlendirmesi.** Sezgisel değerlendirme, bilişsel gezinme ve anket temelli UX ölçütleri (örneğin SUS), kullanılabilirliği kurulmuş ölçütlere karşı sistematik biçimde değerlendirir.

## Kullanılabilirlik araştırması bilgi tabanında nasıl görünüyor

- **YZ öğrenme aracı değerlendirmesi.** [[rhaimi-productivemath-2025|ProductiveMath]], [[supplynet-visual-exploratory-learning|SupplyNet]] ve [[anvil-ai-educational-animations|eğitim animasyonları]], kullanılabilirlik ve UX açısından değerlendirilir.
- **İnsan-robot ve [[conversational-ai|konuşma tabanlı YZ]] etkileşimi.** [[icub-humanoid-storytelling-llm-hri-2025|İnsansı hikâye anlatma çalışması]], [[llm]] destekli etkileşimin açık bir kullanılabilirlik çalışmasıdır; [[conversational-ai-agents-umbrella-review-2026|konuşma tabanlı YZ etmenleri üzerine bir şemsiye derleme]], kullanılabilirlik ve etkileşim kalitesini yinelenen bir tema olarak belirler.
- **Tasarım ve iyileştirme.** Kullanılabilirlik bulguları yinelemeli tasarımı besler (bkz. [[design-thinking]] ve [[learning-design]]); araçları etkililik testinden önce ya da onunla birlikte iyileştirir.
- **Bağlamlar arası tek bir ölçüt ve onu sınırlayan tavan.** [[mendonca-llm-feedback-perceived-usefulness-programming-2026|Mendonça ve ark. (2026)]], alan, görev ve ölçüt sabit tutulurken eğitim düzeyi değiştiğinden, 144 öğrencinin 893 geri bildirim cevabı ve 237 rapor üzerine verdiği puanlar disiplinlerden çok bağlamları karşılaştırır — ve yalnızca algılanan doğruluk düzeyler arasında farklılaşmıştır. Çalışma ayrıca bu tür kullanıcı değerlendirmesinin sınırını da adlandırır: öğrencilerin %72,2 ile %86,4’ü ortalama olarak 5 üzerinden en az 4 puan vermiştir ve yazarlar, önceden bir marj belirlenmediğinden anlamlı olmayan farklılıkların denkliği kurmadığını belirtir.
- **Bulgunun bir parçası olarak bildirilen değerlendirici tasarımı.** [[bespoke-industry-personalized-lecture-videos-2026|Puech ve ark. (2026)]], 25 alan uzmanından 92 yeniden üretilmiş dersi, “standart bir MOOC dersinin kalitesinde” çıpalı bir dereceli puanlama anahtarına göre değerlendirmelerini istemiş; her videoyu tek bir değerlendiriciye atamıştır (k = 1), böylece paneli yinelenen puanlar toplamak yerine derlemin daha geniş bir kısmına yaymıştır. Ödünleşim gizlenmek yerine modellenir: rastgele kesişimli bir model, artık varyansın yaklaşık %35’ini değerlendiriciye atfeder (ICC = 0,35) ve aralıklar değerlendirici kümelerine göre kümelenir; uzman panelinin “çıtanın üstünde ya da eşitte %87” bulgusunu dürüst bir aralıkla bildirebilmesinin yolu budur.

## Diğer araştırma aileleriyle ilişkisi

Kullanılabilirlik araştırması, veri toplama yöntemlerini [[qualitative-research|niteliksel araştırma]] ile paylaşır (görüşmeler, gözlem, sesli düşünme) ama *amaçta* farklıdır: niteliksel araştırma, anlamı ve deneyimi yorumlayarak anlayış ve kuram kurar; kullanılabilirlik araştırması ise bir yapıtı kullanılabilirlik/UX ölçütlerine karşı değerlendirir. Ayrıca [[ai-ed-evaluation]] (bir sistemin çalışıp çalışmadığını değerlendirme) ve [[educational-measurement|ölçüm]] (kullanılabilirlik yapılarını nicelendirme) ile örtüşür. Bilgi tabanı, kullanılabilirliği ayrı ama bağlantılı bir metodolojik akım olarak ele alır — [[human-ai-collaboration]], [[student-experience]] ve etkili YZ öğrenme araçlarının tasarımıyla ilgilidir. Daha geniş metodoloji manzarasına nasıl oturduğu için bkz. [[research-methods-aied]].

## Güçlü yönleri ve sınırlılıkları

- **Güçlü yönleri:** benimsemeyi ve öğrenmeyi engelleyen kullanılabilirlik engellerini doğrudan belirler; uygulamaya dönük tasarım rehberliği üretir; bir aracın neden kullanımda işe yaradığını ya da başarısız olduğunu açıklayarak etkililik ve niteliksel araştırmayı bütünler; büyük deneylere kıyasla nispeten hızlı ve ucuzdur.
- **Sınırlılıkları:** kullanılabilirlik bulguları öğrenme etkilerini kurmaz (kullanılabilir bir araç hâlâ öğretemeyebilir); küçük örneklemler ve göreve özgü ortamlar genellenebilirliği sınırlar; öz bildirim tatmini nesnel performanstan ayrışabilir; araştırmacı ve görev tasarımına bağımlılık vardır.

## Yaygın yanlış anlamalar

**"Kullanılabilir bir sistem iyi bir eğitim sistemidir."** Kullanılabilirlik araştırması kişi ile sistem arasındaki etkileşimi ele alır, öğrenme sonuçlarını değil ve ikisi her iki yönde de ayrışır: pedagojik olarak güçlü bir araç sinir bozucu olduğu için terk edilebilir ve sürtünmesiz bir araç hiçbir şey öğretmeyebilir. Kolaylık, kullanımın ön koşuludur, kullanımın değerli olduğunun kanıtı değil.

**"Kullanılabilirlik, geliştirmenin sonunda yapılan bir cila etkinliğidir."** Kullanılabilirlik, tasarımı bitirmek yerine biçimlendiren çekirdek tekniklere sahip bir yöntem ailesidir: gözlem, görev analizi, sesli düşünme, buluşsal inceleme. Pedagoji sabitlendikten sonra sürtünmeyi keşfetmek, genellikle ya arayüzün sorun etrafında yeniden tasarlanmasını ya da aracın terk edilmesini üretir.

**"Bir aracı terk eden öğrencilerin motivasyonu yoktu."** Terk etme, çoğu zaman kullanıcının tasarımcının hiç ölçmediği bir etkileşim maliyetini doğru okumasıdır. Kimsenin kullanmadığı bir araç etki üretemeyeceğinden, terk etme oranı başlı başına bir eğitim sonucudur.

**"Kullanılabilirlik testi, öğrenmeyi ölçmekle aynı şeydir."** Farklı soruları yanıtlarlar ve hiçbiri diğerinin yerini tutmaz; başarısızlık kipi, ikisinden birini benimseme için yeterli saymaktır.

## Bağlı kavramlar

- [[research-methods-aied]]
- [[qualitative-research]]
- [[human-ai-collaboration]]
- [[student-experience]]
- [[ai-ed-evaluation]]
- [[learning-design]]
- [[design-thinking]]
- [[intelligent-tutoring]]

## Bağlı makaleler

- [[icub-humanoid-storytelling-llm-hri-2025]] — LLM destekli hikâye anlatan bir insansı robot üzerine kullanılabilirlik çalışması
- [[rhaimi-productivemath-2025]] — ProductiveMath: üreten YZ’ye dayalı bir uygulamanın kullanılabilirliği
- [[supplynet-visual-exploratory-learning]] — SupplyNet kullanıcı çalışması
- [[anvil-ai-educational-animations]] — YZ tarafından üretilen eğitim animasyonlarının kullanılabilirliği
- [[code-anchor-multi-view-visualization]] — Çok görünümlü kod görselleştirmeleri üzerine sesli düşünme çalışması
- [[learn-framework-responsible-genai-pbl-2026]] — LEARN çerçevesi ve sesli düşünme değerlendirmesi
- [[feedback-futures-genai]] — Öğrenenler YZ tarafından üretilen geri bildirimi nasıl işler
- [[llm-chatbots-cs-multiple-choice]] — Bilgisayar bilimleri çoktan seçmeli soruları için LLM sohbet robotları
- [[conversational-ai-agents-umbrella-review-2026]] — Konuşma tabanlı YZ etmenleri üzerine şemsiye derleme
