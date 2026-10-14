---
title: Halüsinasyon Riski
created: "2026-10-14T21:50:00-04:00"
type: concept
foundations: [cognitive-offloading]
technology: [generative-ai, human-in-the-loop-ai, llm]
ethics: [hallucination-risk, pedagogical-safety]
connected_faqs: [verify-ai-output]
page_kind: [evaluation]
confidence: high
methods: [ai-ed-evaluation]
reviewed_by: [editor]
translation_of: concepts/hallucination-risk
source_updated: "2026-10-11T09:05:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Halüsinasyon Riski** — YZ sistemlerinin eğitim bağlamlarında makul görünen ama gerçekte yanlış veya uydurma içerik üretme tehlikesi; bu tür hataların [[learners]] öğrenenleri yanıltabileceği, [[trust]] güveni zedelediği ve geçersiz değerlendirmeler üretebildiği yerlerde. Halüsinasyon eğitimde özellikle sonuçları ağırdır, çünkü öğrenciler YZ hatalarını tespit etmek için gereken alan bilgisinden yoksun olabilir ve öğretmenler otoriter görünen ama temelsiz YZ kaynaklı teşhislere veya geri bildirimlere güvenebilir.

## Dikkate Alınması Gereken Sorular

- Öğrenciler sıklıkla bir YZ’nin hatasını fark etmek için gereken alan bilgisinden yoksundur ve öğretmenler otoriter görünen YZ teşhislerine güvenebilir. YZ ile öğrenen arasındaki bilgi asimetrisi, halüsinasyonu eğitimde özellikle nasıl tehlikeli hale getirir?
- Bir çalışma, öğrencilerin el yazısıyla yazdığı matematiği teşhis eden bir YZ’nin güven beyan ederken var olmayan kanıt alıntıları uydurabildiğini buldu. Bir YZ emin görünüp “kanıt” gösterdiğinde, sizi duraklatıp doğrulamaya yönlendiren şey ne olmalıdır?
- Bir [[intelligent-tutoring|AI tutor]] YZ özel ders aracı hatalı çözümleri aşırı derecede doğrular ve geçerli ama en uygun olmayan muhakemeyi aşırı derecede reddederse, ona güvenen öğrenciler ve öğretmenler üzerindeki uzun vadeli etki ne olur?
- Sayfa, süreçte insan denetimi, kanıt odaklı güven kalibrasyonu ve doğrulanmış kaynaklarda temellendirme gibi azaltıcı önlemler önerir. Bunlardan hangisi kendi bağlamınızda en uygulanabilir görünüyor ve yine de neyi yakalayamayabilir?
- Halüsinasyon aşırı güvenle nasıl etkileşebilir: YZ hatası neden kullanıcılar çıktıyı kuşkuyla karşıladığında değil, sorgusuz güvendiğinde en tehlikeli olur?
- Öğrencileriniz için bir [[ai-feedback-quality|AI feedback]] YZ geri bildirim aracı tasarlıyor olsaydınız, makul görünen ama yanlış çıktıya karşı korumak için hangi somut güvenceleri ısrarla talep ederdiniz — ve bunların işe yaradığını nasıl anlardınız?

## Giriş

Eğitim YZ’sinde halüsinasyon, bu bilgi tabanının makalelerinde belgelenen çeşitli biçimler alır: [[assessment|student assessment]] öğrenci değerlendirmesinde uydurma kanıt, öğrenen bilgisinin aşırı güvenli yanlış teşhisi ve öğrencilerin gerçek olarak kabul ettiği makul görünen ama yanlış açıklamalar. Risk eğitimde büyütülür, çünkü YZ ile öğrenen arasındaki bilgi asimetrisi öğrenenin YZ çıktılarını doğrulamak için zayıf konumlandığı anlamına gelir. Ek bir ortam, bir ders kitabının yerine geçen YZ tarafından üretilen kurs okumalarıdır: ticari metnini bu şekilde değiştiren bir yüksek lisans kursunda, kayda geçen 4.487 sayfadan yalnızca yaklaşık %0,80’i APA tarzı metin içi atıf taşıyordu ve DOI dizeleri neredeyse hiç yoktu, bu yüzden iddiaların çoğu yapıtın içinden denetlenemiyordu ([[sidorkin-ai-generated-course-readings-2026|Sidorkin, 2026]]). Bu izlenebilirlik boşluğu yanlış bir cevaptan farklıdır, çünkü metin otoriter okunurken onaylamanın sınırlı içsel yollarını sunar.

125 çalışmalık bir inceleme, yaygınlık ve tespit boşluğuna bir aralık koyar: %10–40 halüsinasyon oranları, tıp öğrencilerinin YZ hatalarını yalnızca zamanın %44–55’inde tespit etmesiyle ([[genai-higher-education-systematic-review-2026|Rathnayake (2026)]]).

**Değerlendirme halüsinasyonu** özellikle zararlıdır. **[[llm-cognitive-diagnosis-handwritten-math|MathCog]]**, bilişsel becerileri teşhis ederken LLM’lerin öğrenci el yazısında bulunmayan kanıt alıntıları uydurduğunu buldu; hatalı teşhislerin %58,5’i kanıtsal güvenin yanlış iddiasıyla birlikteydi. **[[llm-fallacy-misattribution]]**, [[llm]] muhakemesinde kanıtın sistematik aşırı atfedilmesini belgeledi — modeller var olmayan yerde kanıtsal destek iddia eder. İkisi de [[assessment-validity]] değerlendirme geçerliliğine ilişkin [[ai-ed-evaluation]] ve [[knowledge-tracing]] kaygılarına bağlanır. [[ivory-psychology-assessment-integrity-2026|Ivory ve ark. (2026)]], YZ çıktısı incelenmek yerine notlandırıldığında görülen iki hata kipi ekler: notlandırmadan geçen uydurma ayrıntılar — var olmayan, çözülemez bir DOI tamamlanmış bir incelenmiş makale ve kaynağın 329 dediği yerde 378 olarak bildirilen bir örneklem büyüklüğü — ve tek bir yanıt içinde kendi kendini çürütme, modelin doğru seçeneğe muhakeme yoluyla ulaşıp kapanış özetinde farklı bir seçenek bildirdiği yer. Referans listeleri şu anda doğruluktan ziyade biçimlendirme için notlandırıldığından, bu hata sınıfı, aynı aracı tekrar için kullanan öğrenciyi yanıltırken geçer notu alır.

Bir değerlendirme tasarım pilotunda, [[authentic-assessments-generative-ai-pilot-2026|Paula ve ark. (2026)]], tekrarlanan istem çalışmalarından sağ çıkan ve önemli akademik revizyon gerektiren uydurma referanslar ve gerçekçi olmayan zaman tahminleri buldu — öğrenci çalışmasında değil, eğitimciye yönelik bir taslak aracında halüsinasyon.

**Stratejik [[misconceptions]]** yanlış kanılar, açık halüsinasyonun daha incelikli bir akrabasıdır. [[milicevic-socratic-trap-strategic-misconceptions-2026|Miličević ve ark. (2026)]], yedi açık ağırlıklı modelden 35 temel bilgisayar bilimi kavramı için bir “[[socratic-method|Socratic]] Sokratik tuzak” üretmesini istedi — akıcı ve otoriter görünen ama ince, alana özgü bir hata üzerine oturan bir açıklama — ve üç alan uzmanı istenen 241 segmentin 221’ini (%91,7) stratejik yanlış kanı olarak doğruladı; BT alanları arasında anlamlı fark yoktu. Hatalar ağırlıklı olarak olgusal değil kavramsaldı (%66,5 karşı %33,5) ve hiçbiri salt mantıksal değildi; orta ila yüksek düzeyde ikna edici olarak derecelendirildiler (beş puanlı ölçekte M = 3,71), model kimliği varyansın %43’ünü açıklıyordu. Bireysel ifadeler doğru olabilecekken aralarındaki ilişki yanlış olduğundan, olgu denetimi yetersizdir; yazarlar [[ai-literacy|learners]] öğrenenlerin kavramsal doğrulama ve zihinsel model doğrulamasına ihtiyaç duyduğunu savunurlar. Ayrıca oranın, sıradan kullanımdaki bu tür hataların yaygınlığından ziyade düşmanca [[prompt-engineering|prompting]] istem çalışmaları altında bir yeteneği ölçtüğünü ve hiçbir öğrencinin test edilmediğini, dolayısıyla hiçbir aldatma veya öğrenme sonucunun ölçülmediğini uyarırlar.

**Uydurulmamış, manipüle edilmiş kanıt.** [[automated-assessment|automated grading]] otomatik notlandırmada ilgili bir hata kipi, dışarıdan taşınmış çıktıdır. [[humble-prompt-injection-ai-grading-red-team-2026|Humble (2026)]], rutin bir YZ notlandırma iş akışını kırmızı takımla test etti ve teslim edilen dosyanın içine gizlenmiş talimatların bir strateji için 9 tekerrürün 9’unda ve başka bir strateji için 18’inin 17’sinde görünür bir uyarı olmadan başarısız bir kompozisyonun notunu yükselttiğini buldu. İki ayrıntı [[trust-calibration|trust]] güveni etkiler: tespit edilen bir enjeksiyon, sohbeti sessizce devre dışı bırakarak engellendi ve kullanıcıya asla bildirilmedi; ve aracın yalnızca resmi ödev talimatlarını izleyeceğini duyurduğu bir çalıştırmada, aynı dosyanın altı yeniden çalıştırması yine de notu yükseltti. Bu şekilde elde edilen bir not hiçbir [[assessment-validity|validity]] geçerlilik iddiası taşımaz ve manipülasyon kalıcı bir iz bırakmadığından, görünmez olacak biçimde tasarlanmış çıktı üzerindeki tek gerçek denetim [[human-in-the-loop-ai|instructor]] öğretmende kalır.

Bu tür bir manipülasyona karşı savunmalar kendi ödünleşimlerini taşır: çok katmanlı bir güvenlik rayı hattı enjeksiyonların %46,34’ünü başarılı bıraktı ve Prompt Guard %38,48 bıraktı, oysa NeMo Guardrails her saldırıyı engelledi ama iyi niyetli öğrenci sorgularının %16,22’sini işaretledi — bir özel ders aracında kendisi pedagojik zarar olan bir yanlış pozitif oranı ([[prompt-injection-defenses-educational-llm-tutors|Maiorano (2026)]]).

**Özel ders halüsinasyonu** öğrenmeyi doğrudan etkiler. **[[yasir-llm-tutoring-agents-2026]]**, LLM’lerin hatalı çözümleri aşırı derecede doğrular ve geçerli ama en uygun olmayan muhakemeyi aşırı derecede reddettiğini buldu — hem öğrencileri hem öğretmenleri yanıltacak sistemik başarısızlıklar. **[[eduframetrap-llm-sycophancy-educational-safety]]** ve **[[eduguard-safe-rag-llm-tutor]]**, eğitim LLM’leri için güvenlik mekanizmalarını ele alır. Bu riskler [[pedagogical-safety]] ve [[human-in-the-loop-ai]] gereksinimlerine bağlanır.

**Azaltıcı yaklaşımlar** arasında YZ’nin [[teacher-role|teacher]] öğretmen muhakemesini desteklediği yerine değiştirdiği [[human-in-the-loop-ai]] tasarımları, kanıtsal kaliteye göre güveni kalibre eden kanıt odaklı mimariler (MathCog’un savunduğu gibi) ve LLM çıktılarını doğrulanmış kaynaklarla sınırlayan [[rag]] temelli temellendirme yer alır. [[cognitive-offloading|Over-Reliance]] Aşırı Güven kavramı yakından ilişkilidir — halüsinasyon, kullanıcılar YZ çıktılarını sorgusuz güvendiğinde en tehlikelidir. [[sidorkin-ai-generated-course-readings-2026|Sidorkin (2026)]], azaltıcı yığınının tam olarak kapsamadığı bir hata kipi ekler: aşırı özgül kurumsal iddialar, kayda geçen sayfaların yaklaşık %1,03’ünün “Sacramento State” gibi adlandırılmış bir yerleşkeyi, revize edilmiş devam, kadro ve terfi kuralları veya CSU Yönetici Emirleri hakkında emin politika fiilleriyle eşleştirmesiyle, bunların hiçbiri metinden doğrulanamaz. Bunu pahalı yapan şey özgüllüktür, çünkü uydurma yerel bir ayrıntı, bir okuyucunun makullik denetiminden geçecek kadar kesin görünür ve çalışmanın önerdiği çare teknikten ziyade prosedüreldir: üretimi öğretim elemanı incelemesi altında taslak üretim olarak ele almak, sonra kaynakları getiri ile güçlendirilmiş bir tasarıma doğru derlemek.

**Etiketlenmiş güvenilmezlik bildirilen bağımlılığı düşürdü, artırmadı.** 546 katılımcı aynı GAI diyalogunu ya uydurma bilgi içeriyor ya da doğrulanmış olarak doğru etiketiyle okuduğunda, uydurma etiketi daha düşük [[trust]] güven ve algılanan denetlenebilirlik ile daha yüksek bilişsel uyumsuzluk ve hayal kırıklığı yanında *daha düşük* bağımlılık puanları üretti (M = 2,935 karşı 3,254) ([[frontiers-gai-hallucination-dependence-2026|Liu ve ark. (2026)]]). Sonuç, bu sayfanın aşırı güven mantığını nitelemektedir: bir çıktının uydurma olabileceğini görmek, ona yaslanmaya devam etmekle aynı şey değildir.

## Bağlı kavramlar

- [[cognitive-offloading]]
- [[human-in-the-loop-ai]]
- [[ai-ed-evaluation]]
- [[pedagogical-safety]]
- [[knowledge-tracing]]
- [[rag]]
- [[academic-integrity]]
- [[teacher-role]]
- [[multimodal]]
- [[generative-ai]]
- [[llm]]
- [[productive-failure]]

## Bağlı makaleler

- [[frontiers-gai-hallucination-dependence-2026]] — Labeling a GAI dialogue as fabricated lowered trust and dependence together
- [[ivory-psychology-assessment-integrity-2026]] — Fabricated citations and self-contradicting outputs inside passable student work (Ivory et al. 2026)
- [[llm-cognitive-diagnosis-handwritten-math]]
- [[llm-fallacy-misattribution]]
- [[yasir-llm-tutoring-agents-2026]]
- [[eduframetrap-llm-sycophancy-educational-safety]]
- [[eduguard-safe-rag-llm-tutor]]
- [[prompt-injection-defenses-educational-llm-tutors]]
- [[veriforge-narrative-drafting-scaffolding-2026]]
- [[genai-higher-education-systematic-review-2026]]
- [[sidorkin-ai-generated-course-readings-2026]]
- [[milicevic-socratic-trap-strategic-misconceptions-2026]] — SocraticTrap-CS: fluently plausible explanations that are wrong at the conceptual level (Miličević et al. 2026)
- [[humble-prompt-injection-ai-grading-red-team-2026]] — Hidden prompt injections raise AI-graded marks undetected, and detected attacks go unreported (Humble 2026)

- [[authentic-assessments-generative-ai-pilot-2026]] — Designing Authentic Assessments with Generative AI: A Pilot Study of Assessment Authentifire in Higher Education
