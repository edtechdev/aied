---
title: "SAMR Modeli"
created: "2026-10-14T21:35:00-04:00"
type: concept
foundations: [educational-development, learning-design, tpack, teacher-ai-competency]
technology: [ai-technologies, technology-acceptance-model]
page_kind: [framework]
audience: [instructors, curriculum designers, researchers]
level: [k 12, higher ed]
confidence: high
translation_of: concepts/samr-model
source_updated: "2026-10-26T00:30:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **SAMR modeli** — Ruben Puentedura tarafından geliştirilen, bir teknolojinin öğrenmeyi ne ölçüde dönüştürdüğünü dört düzey boyunca sınıflandıran bir teknoloji tümleştirme çerçevesi: **Yerine Koyma (Substitution), Güçlendirme (Augmentation), Değiştirme (Modification) ve Yeniden Tanımlama (Redefinition)**. Alt iki düzey (Yerine Koyma, Güçlendirme) mevcut bir görevi *geliştirir* — teknoloji önceden yapılanı daha iyi veya daha kolay yapar; üst ikisi (Değiştirme, Yeniden Tanımlama) onu *dönüştürür* — görevin ta kendisi daha önce mümkün olmayan bir şeye dönüşür. [[ai-education|Eğitimde YZ]]de, SAMR, [[generative-ai|üretici YZ]]'nin mevcut uygulamayı kademeli olarak iyileştirmek için mi yoksa öğrenmeyi yeniden kavramsallaştırmak için mi kullanıldığını sormak için standart bir mercektir ve öğretmenlerin teknolojiyi neden benimsediğinden çok nasıl tümleştirdiğini betimlemenin bir yolu olarak [[tpack|TPACK]] ile yan yana durur.

## Düşünülmesi Gerekenler

- Bir kursa YZ getirildiğinde, bu bir Yerine Koyma mıdır (bir [[conversational-ai|sohbet botu]] bir arama kutusunun yerini alır) yoksa bir Yeniden Tanımlama mıdır (önceden mümkün olmayan bir görev mümkün hâle gelir)? Hangi düzeyin uygun olduğunu ne belirler — ve dönüştürme her zaman hedef midir?
- SAMR ve [[technology-acceptance-model|teknoloji benimseme modelleri]] farklı soruları yanıtlar: benimseme teorisi bir öğretmenin veya kurumun bir aracı *neden* kabul ettiğini sorar; SAMR, aracın öğrenmeyi *ne kadar derinden* değiştirdiğini sorar. Verilmiş bir YZ tümleştirme çalışması aslında hangi soruyu yanıtlıyor?
- [[higher-ed|Yükseköğretimde]] YZ tümleştirmesine ilişkin bir [[meta-analysis-systematic-review|sistematik derleme]], kullanımların çoğunun Yerine Koyma veya Güçlendirme düzeyinde olduğunu, yalnızca bir çalışmanın Yeniden Tanımlamaya yaklaştığını buldu. Bu tipikse, YZ’nin potansiyeli ile sınıf gerçekliği arasındaki boşluk hakkında ne öne sürüyor?

- SAMR, eğitimcilerin teknoloji kullanımını planlamalarına yardımcı olmak için sıkça [[teacher-education|öğretmen]] [[educational-development|mesleki gelişiminde]] çağrılır. Bir dersin SAMR düzeyini sınıflandırmak, bir öğretmenin gerçekten yaptığı şeyi değiştirir mi, yoksa başlıca betimsel bir etiket midir?
- Eleştirmenler, SAMR’nin [[tpack|TPACK]] gibi, bilişi teknolojiden değişmeden varsayan hümanist bir ontolojiye dayandığını ve güç, veri mülkiyeti veya eşitlik hakkında hiçbir şey söylemediğini ileri sürer. Bir tümleştirme düzeyi merceği yeterli mi, yoksa YZ çağı tümleştirmesi daha eleştirel bir çerçeveye mi ihtiyaç duyar?

## Giriş

SAMR, öğrenme görevlerinin teknolojik dönüşümünün derinliğini betimler. Dört düzeyi, geliştirmeden dönüştürmeye çıkan bir ölçek oluşturur: **Yerine Koyma** (araç işlevsel bir değişiklik olmaksızın başkasının yerini alır — bir arama motoru yerine bir sohbet botu), **Güçlendirme** (araç yerine geçer ve iyileştirir — daktilo üzerinde bir kelime işlemcinin yazım denetimi), **Değiştirme** (görev önemli biçimde yeniden tasarlanır — öğrenciler paylaşılan bir YZ üretimi taslak üzerinde gerçek zamanlı işbirliği yapar) ve **Yeniden Tanımlama** (önceden düşünülemez yeni görevler mümkün hâle gelir — öğrenenler, YZ dışı hiçbir benzeri olmayan biçimlerde üretici bir modelle birlikte üretir). Model, [[ai-technologies|eğitim teknolojisi]] [[research-methods-aied|araştırmasında]] ve [[educational-development|öğretmen mesleki gelişiminde]], teknoloji tümleştirmesini planlama ve değerlendirmeye yönelik bir sözlük olarak yaygın biçimde kullanılır ve [[tpack|TPACK]] ile [[technology-acceptance-model|teknoloji benimseme]] çerçevelerinin standart bir yardakçısıdır — her ne kadar ikisinden de farklı bir soruyu yanıtlasa da.

## Dört düzeyin anlamı

- **Geliştirme (alt yarı):** Yerine Koyma ve Güçlendirme, doğasını değiştirmeden mevcut bir görevi iyileştirir. Rutin YZ kullanımının çoğu — [[automated-question-generation|soru üretimi]], hızlı metin üretimi, özetleme — burada yer alır: daha hızlı ve daha elverişlidir ama öğrenciden istenen şeyi değiştirmez.
- **Dönüştürme (üst yarı):** Değiştirme ve Yeniden Tanımlama görevin ta kendisini değiştirir. [[vibe-coding|Vibe coding]], bir modelle gerçek zamanlı birlikte inşa ve uyarlanabilir etkileşimli diyalog, üretici YZ’den önce mümkün olmayan görevlerdir ve ölçeğin dönüştürücü ucunu temsil eder.

SAMR sıkça [[icap-framework|ICAP çerçevesi]] ile eşlenir, çünkü ikisi uyumludur: [[thermomix-genai-education-analogy-2026|Rummel, Nachtigall & Panadero (2026)]]'in dört "yemekten öğrenmeye" senaryosu, ICAP [[student-engagement|katılım]] biçimlerini SAMR düzeylerine eşler — ICAP *Edilgen* ile SAMR *Yerine Koyma*, *Etkin* ile *Güçlendirme*, *Yapıcı* ile *Değiştirme* ve *Etkileşimli* ile *Yeniden Tanımlama* — edilgen devretmeden etkileşimli birlikte inşaya bir ilerlemeyi gösterir.

## Bilgi tabanından kanıtlar

- **Yükseköğretimde YZ tümleştirmesi büyük ölçüde kademeli, dönüştürücü değil.** [[alsheikh-mapping-ai-integration-higher-education-2026|AlSheikh ve ark. (2026)]], 959 kayıt arasından taranan 22 müdahale çalışmasının PRISMA sistematik derlemesinde, YZ tümleştirmesini SAMR modeliyle derecelendirdi ve çalışmaların çoğunun **Yerine Koyma veya Güçlendirme** düzeyinde kümleştiğini, daha azının Değiştirme’de olduğunu ve yalnızca birinin Yeniden Tanımlamaya yaklaştığını buldu. YZ tipik olarak müfredatları veya [[learning-gains|öğrenme çıktılarını]] yeniden kavramsallaştırmaktan ziyade mevcut uygulamayı iyileştirmek için getirildi — ağırlıklı olarak [[automated-assessment|değerlendirme otomasyonu]] ve [[personalized-learning|kişiselleştirilmiş öğrenme desteği]] tarafından domine edildi.
- **SAMR, üretici YZ kaynaklı [[curriculum-design|müfredat]] değişimi için yaygın bir analitik mercektir.** [[rewriting-curriculum-genai-pedagogy-2026|Sabani ve ark. (2026)]], beş müfredat değişimini (statikten dinamik, aktarımdan yeteneğe, yerelden [[governance|kurumsal]]a) SAMR ve yapıcı hizalamayı içeren kurulmuş merceklere eşler; modeli, üretici YZ’nin müfredatı nasıl yeniden şekillendirdiğindeki [[pedagogy|pedagojik]] mekanizmaları açıklığa kavuşturmak için kullanır.
- **SAMR ve TPACK, öğretmen-teknoloji tümleştirme standartlarının çıpasıdır.** [[crompton-faculty-technology-integration-standards-2026|Crompton ve ark. (2026)]], altı akademik personel teknoloji standartlarını mevcut çerçevelere — [[tpack]], RAT, SAMR, SETI — ve standartlara (ISTE, UNESCO, DigCompEdu) karşı konumlandırır; bunların çoğu [[k-12]] eğitimcilerini ya da yalnızca akademik personel rollerinin [[teacher-role|öğretmenlik]] kısmını hedefler ve yükseköğretim akademik personel gelişiminde bir boşluk bırakır.
- **SAMR, posthümanist eleştirinin hedefidir.** [[elsayed-pedagogical-symbiosis-posthuman-learner|Elsayed (2026)]], TPACK, SAMR ve [[ai-literacy]] modellerini, teknolojik aracılıkla temelden değişmeyen sınırlı bir öğrenen varsayan hümanist bir ontolojiyi paylaşmakla eleştirir ve bu enstrümantalist çerçevelerin YZ’nin bilişteki yapıcı rolünü ele alamayacağını savunur.
- **Tümleştirme için bir çerçeve, güç için bir çerçeve değil.** [[reclaiming-epistemic-agency-co-agency-2026|Poudyal (2026)]], SAMR’yi TPACK ve diğer tümleştirme çerçeveleriyle birlikte değerlendirir ve bunların hiçbirinin eşit güç, veri mülkiyeti veya hesap verebilirliği ele almadığını bulur; alternatif bir ekolojik ortak-etkililik çerçevesini gerekçelendirir.
- **Öğrenci kullanımı da SAMR’ye eşlenir ve geri bildirim her düzeyi kapsar.** Bir [[physics-education|fizik]] ünitesinde 31–36 öğrencinin üretici YZ beyanlarını kodlamak, öğrenmeyi yerine koyma–güçlendirmede, biçimlendirmeyi yerine koymada ve görev yapmayı değiştirme–yeniden tanımlamada yerleştirdi; geri bildirim ise — kontrol etme, açıklık getirme, doğrulama — dört düzeyin hepsinde görüldü ([[genai-use-changing-institutional-policy-physics-2026|Quince ve Faulconer (2026)]]).

## SAMR, TPACK ve teknoloji benimseme: nasıl farklılaşırlar

Üç çerçeve sıkça birbirine karıştırılır ama farklı soruları yanıtlar:

- **[[technology-acceptance-model|Teknoloji benimseme modelleri]]** (TAM, UTAUT), bir bireyin veya kurumun bir teknolojiyi neden kabul ettiğini ve kullanmaya devam ettiğini açıklar — algılanan fayda, kullanım kolaylığı ve sosyal etki.
- **[[tpack|TPACK]]**, bir öğretmenin teknolojiyi etkin biçimde tümleştirmek için ihtiyaç duyduğu *bilgiyi* betimler — teknolojik, pedagojik ve içerik bilgisinin etkileşimi, YZ çağında YZ-TPACK/üretici YZ-TPACK’a genişletilmiş hâli.
- **SAMR**, bir teknolojinin bir öğrenme görevini *ne kadar derinden* dönüştürdüğünü sınıflandırır, geliştirmeden yeniden tanımlamaya.

SAMR, planlama ve değerlendirmede kullanılan bir tümleştirme derinliği merceği olarak en iyi anlaşılır; benimseme teorisini (yayılmayı açıklar) ve TPACK’ı (öğretmen yeteneğini açıklar) tümler. YZ çağında, en verimli biçimde, üretici YZ’nin mevcut görevleri geliştirmek için mi yoksa gerçekten yeni olanları mümkün kılmak için mi uygulandığını sormak için kullanılır — bilgi tabanının değerlendirme ve müfredat araştırması boyunca işleyen bir ayrım.

## Uygulama için çıkarımlar

- **SAMR’yi derinlik sorusunu sormak için kullanın, dönüştürmeyi öngörmek için değil.** Geliştirme doğası gereği daha aşağı değildir; rutin YZ kullanımlarının çoğu meşru Yerine Koymalardır. Model teşhis edicidir, verilmiş bir kullanımın gerçekten neyi değiştirdiğini açıklığa kavuşturur.
- **ICAP ile eşleyin.** SAMR *görevin* neye dönüştüğünü betimler; ICAP öğrencinin *nasıl katıldığını* betimler. Birlikte kullanıldığında yüzeysel yerine koymayı derin etkileşimli birlikte inşadan ayırırlar.
- **Benimseme ve eşitlik mercekleriyle tümleyin.** SAMR, bir aracın neden benimsendiği veya kimin yararlandığı hakkında hiçbir şey söylemez. Onu [[technology-acceptance-model|benimseme modelleri]] ve [[equity-in-ai-education|eşitlik]] analiziyle eşleyerek, bir derinlik etiketinin [[critical-thinking|eleştirel değerlendirmenin]] yerine geçmesini önleyin.
- **Kademeli tümleştirmenin kanıtını bir başarısızlık değil, bir bulgu olarak ele alın.** YZ tümleştirmesinin çoğu Yerine Koyma/Güçlendirme’de kümleşiyorsa, tasarım görevi Yeniden Tanımlamayı zorlamak değil, dönüştürücü kullanımın daha iyi araçlardan çok farklı görev tasarımları gerektirdiğini fark etmektir.

## Yaygın yanlış anlamalar

**“SAMR’de daha yukarıda olmak daha iyi öğretimdir.”** SAMR, YZ’nin öğrenmeyi *yeniden kavramsallaştırıp* kavramsallaştırmadığını yoksa mevcut uygulamayı *iyileştirip* iyileştirmediğini sormak için bir mercektir; bir kalite sıralaması değildir ve Yeniden Tanımlama her görev için doğru cevap değildir. Verimsiz bir adımı ortadan kaldıran bir yerine koyma, bulunduğu düzeye göre değil öğrenmeye göre yargılanan bir başarıdır.

**“YZ benimsemesi merdivende yukarı doğru ilerliyor.”** Dağılım alt uçta yoğunlaşmıştır. [[higher-ed|Yükseköğretimde]] YZ tümleştirmesi üzerine sistematik bir derleme, **kullanımların çoğunun Yerine Koyma ya da Güçlendirme düzeyinde kaldığını, yalnızca bir çalışmanın Yeniden Tanımlamaya yaklaştığını** bulmuştur. Bu nedenle SAMR’nin bu literatürdeki pratik kullanımı büyük ölçüde tanısaldır: alanın gerçekte nerede olduğunu adlandırır.

**“SAMR ile TPACK birbiriyle yarışan çerçevelerdir.”** Farklı şeyleri tanımlarlar: SAMR bir görevdeki *dönüşüm derecesini*, [[tpack|TPACK]] ise bir öğretmenin teknolojiyi iyi tümleştirmek için ihtiyaç duyduğu *bilgiyi* tanımlar. Bir öğretmen yüksek düzeyde TPACK yetkin olup yine de Yerine Koyma düzeyinde çalışabilir; bu yüzden ikisi arasında seçim yapılmaz, birlikte kullanılır.

**“Bir düzeyde dönüştürücü olan bir araç her düzeyde dönüştürücüdür.”** Aynı üretken araç bir derste bir Yerine Koymayı, başka bir derste bir Yeniden Tanımlamayı destekleyebilir, çünkü düzey teknolojinin değil görev tasarımının bir özelliğidir. Düzeyi araca atfetmek, tasarım kararlarının yerine benimseme kararları üretir.

## Bağlı kavramlar

- [[ai-education]] — Eğitimde YZ (şemsiye kavram)
- [[tpack]] — Teknolojik Pedagojik İçerik Bilgisi
- [[technology-acceptance-model]] — Teknoloji benimseme modelleri
- [[icap-framework]] — Bilişsel katılımın ICAP çerçevesi
- [[ai-technologies]] — YZ teknolojileri ve teknikleri
- [[teacher-ai-competency]] — Öğretmen YZ yeterliliği
- [[educational-development]] — Eğitsel gelişim
- [[learning-design]] — Öğrenme tasarımı
- [[k-12]] — K-12 eğitimi
- [[higher-ed]] — Yükseköğretim
- [[generative-ai]] — Üretici YZ

## Bağlı makaleler

- [[alsheikh-mapping-ai-integration-higher-education-2026]] — SAMR ile derecelendirilen yükseköğretimde YZ tümleştirmesi: çoğunlukla Yerine Koyma/Güçlendirme
- [[thermomix-genai-education-analogy-2026]] — ICAP ve SAMR’ın dört "yemekten öğrenmeye" senaryosuna eşlenmesi
- [[rewriting-curriculum-genai-pedagogy-2026]] — Üretici YZ kaynaklı müfredat değişimi mercekleri arasında SAMR
- [[crompton-faculty-technology-integration-standards-2026]] — Akademik personel teknoloji standartlarına bilgi veren çerçeveler arasında SAMR
- [[elsayed-pedagogical-symbiosis-posthuman-learner]] — SAMR’nin hümanist ontolojisinin posthümanist eleştirisi
- [[reclaiming-epistemic-agency-co-agency-2026]] — SAMR’nin güç, veri mülkiyeti ve hesap verebilirlik konusundaki sessizliği
- [[genai-use-changing-institutional-policy-physics-2026]] — Değişen kurumsal politikalara karşı öğrenci üretici YZ kullanımı: SAMR düzeylerine eşlenen kullanım işlevleri (Quince & Faulconer 2026)
