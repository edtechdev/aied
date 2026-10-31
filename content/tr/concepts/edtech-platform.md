---
title: Edtech Platformu
created: "2026-10-14T07:28:00-04:00"
type: concept
foundations: [ai-education]
pedagogy: [online-teaching-and-learning]
technology: [adaptive-learning, generative-ai, llm, personalized-learning, edtech-platform]
ethics: [equity-in-ai-education]
level: [k 12, higher ed]
confidence: high
connected_faqs: [designing-educational-ai-software]
connected_resources: [lesson-md, liascript, onmicro-ai, teacher-dev]
translation_of: concepts/edtech-platform
source_updated: "2026-10-25T17:00:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Edtech Platformu** — bir YZ yeteneğinin öğrenenlere ve eğitimcilere ulaştırıldığı dijital sistemler, öğrenme yönetim sistemleri (LMS), özel ders sistemleri ve çevrimiçi öğrenme ortamları. Eğitimde YZ bağlamında platform, bir YZ kapasitesinin öğrencilere ulaşıp ulaşmadığını, nasıl konuşlandırıldığını (açık mı özel mı, bütünleşik mi bağımsız mı) ve kimlerin ona erişebileceğini, uyarlayabileceğini ve değerlendirebileceğini belirleyen *altyapı katmanıdır*. Bu bilgi tabanındaki araştırmalar platformları birden fazla açıdan incelemektedir: tasarımları, benimsenme ve katılım kısıtları, kurumsal yönetişimleri ve eşitlik etkileri. ([[access-not-enough-ai-tutoring-2026]]) ([[oatutor-open-source-adaptive-tutor-2023]])

## Üzerinde Düşünülebilecek Sorular

- Karşılaştığınız son YZ özel ders veya geri bildirim aracını düşünün. Şimdi onun fiilen nerede “yaşadığını” düşünün — onu paketleyen LMS, platform veya uygulama. Bu kap, tarafsız bir teslim aracı mı gibi görünüyor, yoksa onun tasarım tercihleri (açık mı özel mi, bütünleşik mi bağımsız mı, bulut mu yerel mi) onunla neler yapabileceğinizi değiştirmiş olabilir mi?
- Bir çalışma, öğrencilerin neredeyse yarısının iyi tasarlanmış bir YZ özel ders platformunu hiç kullanmadığını ve yoğun kullanıcıların daha yüksek başarılı öğrencilere doğru yığıldığını buldu. Bir araç “ilke olarak” etkiliyse ama öğrenciler onu kullanmıyorsa, asıl sorun yetenek mi yoksa platform mu? Bu, edtech’i değerlendirme biçiminiz için ne anlama gelirdi?
- Özel mülk YZ platformları araştırmacıları bir avuç kapalı sisteme hapsedebilirken, OATutor gibi açık platformlar herkesin çatallamasına (fork), denemeler yapmasına ve yayımlamasına izin verir. YZ eğitimi kapalı, opak platformlar aracılığıyla sunulduğunda — araştırma, eşitlik ve kurumsal özerklik açısından — ne kaybedilebilir?
- Bir platformun iş modeli — kimin ödediği, verinin kimin olduğu, neyin optimize edildiği — üzerinde gerçekte yaşanan öğrenmeyi ne ölçüde şekillendirir? Bu etkiyi görmek için nereye bakardınız?
- Bazı yeni “YZ-mayın” platformlar, birçok öğrenciye tek bir video sunan MOOC modelini her öğrenci etrafında kurulmuş çok ajanlı bir sınıfla değiştiriyor. Devam etmeden önce, öğretim ajanlarla bire bir, öğretmenlerle birden çoğa dönüştüğünde neyi kaybetmekten kaygılanırdınız?

## Giriş

Platform, bir YZ modeli veya yeteneği ile öğrenci arasında yer alır. Özel ders, değerlendirme, geri bildirim ve yönetimi kullanılabilir bir şey halinde paketleyen kap odur ve — kritik biçimde — tasarım tercihleri, erişilebilirliği ve dayandığı iş modeli aracılığıyla öğrenme çıktılarını şekillendirir. Bu kavram; Moodle gibi öğrenme yönetim sistemlerini, MOOC’lar gibi büyük ölçekli çevrimiçi platformları, özel [[intelligent-tutoring|zeki özel ders]] sistemlerini ve ortaya çıkan ajan tabanlı veya YZ-mayın kurs platformlarını kapsar. Kabı adlandırmak yazarlarını adlandırmak anlamına gelmez: platform konuşlandırılmış sistemdir, oysa ne yapacağına karar veren paydaş [[educational-technology-developers]]’dır — burada bu önemlidir, çünkü aşağıdaki benimsenme, eşitlik eğilimi ve tedarik bulguları genellikle bir platformun sınıfa hiç ulaşmadan önce yapılan tasarım tercihlerinin sonuçlarıdır.

## Eğitimde YZ bağlamında bir platformun işlevleri

Eğitimde YZ bağlamındaki platformlar birkaç ayrı işlev görür:

- **Öğretim ve özel ders sunmak** — LMS’e gömülü özel dersçilerden bağımsız uyarlanabilir özel ders platformlarına kadar [[intelligent-tutoring|YZ özel dersinin]] ve [[intelligent-tutoring]] sistemlerinin kabı.
- **Öğrenme ortamını yönetmek** — geleneksel LMS platformlarının sağladığı kurs organizasyonu, kayıt, ilerleme izleme ve yönetim.
- **Değerlendirme ve geri bildirime ev sahipliği yapmak** — [[automated-assessment]], [[formative-assessment]] ve [[feedback|geri bildirim döngülerinin]] çalıştığı yer.
- **Öğrenme verisi toplamak ve çözümlemek** — [[learning-analytics]] ve [[student-modeling]] için temel zemin.
- **Erişimi ve konuşlandırmayı yönetmek** — [[open-source]] mı özel mülk mü, yerel mi bulut mu ve hangi kurumların ve öğrencilerin kullanabileceğine ilişkin kararlar.

## Bilgi tabanı makalelerinden temel bulgular

### Kullanım, yetenekten çok sınırlayıcı olan etkendir

Bir platform ilke olarak etkili olup uygulamada başarısız olabilir, eğer öğrenciler onu kullanmazsa. Bir [[ai-literacy|YZ okuryazarlığı]] (okuma) özel ders platformuna ilişkin iki [[rct|RCT]]’de, **kontrol grubu öğrencilerinin neredeyse yarısının platformu hiç kullanmadığı** ve kullanıcıların haftada yalnızca 2–5 dakika ortalama süre ayırdığı bulunmuştur — okuma kazanımları için gereken dozdan çok uzakta. Yüz yüze yürütülen bir katılım özel dersçisi kullanımı ve katılımı belirgin biçimde artırmış, ancak yine de başarı kazanımları üretmemiştir; platform kullanıcıları daha yüksek başarılı öğrencilere doğru yığılmış ve bu durum eşitlik kaygıları doğurmuştur. ([[access-not-enough-ai-tutoring-2026]])

Sıralama yetenek kadar önemlidir: 2020–2025 yıllarına ilişkin 100’den fazla YZ-ve-eğitim çalışmasının derlemesi, uçtan uca platformları bir benimseme yığınının en üstüne yerleştirir ve kurumların, bu platformları ölçeklendiren şeyi satın almadan önce biçimlendirici değerlendirme, liderlik kapasitesi ve paylaşılan normları karara bağlaması gerektiğini savunur ([[raza-farooq-aied-review-2020-2025|Raza ve Farooq (2025)]]).

Boşluk giriş düzeyinde değil, ileti düzeyindedir: iki yıllık bir küme RCT’sinde öğrencilerin %96’sı Khanmigo’yu denemiştir, ancak ortanca öğrenci onunla yalnızca hata yaptığı oturumların %17’sinde ileti göndermiştir ve iletilerin yaklaşık %14,5’i gerçek bir matematik sorusu veya akıl yürütme adımı taşımaktadır — öğrenci başına yıllık \\$15 karşılığında ([[one-click-away-khanmigo-two-year-school-experiment-2026|Oreopoulos ve Low, 2026]]).

Sınırlayıcı etken, YZ’nin platformun içinde nerede durduğudur: 6.000 öğrencili bir ortaokul denemesinde ölçülen etki, alıştırma ortamı içindeki yapılandırılmış dokunuş noktalarından gelmiştir — ustalığa ulaşan öğrenci başına 2,0 “başlamama yardım et” kullanımı, 2,3 hatadan sonra yürütülen gözden geçirme ve 3,2 adım açıklaması — oysa YZ erişiminin tek başına çok az katkısı olmuştur ([[making-ai-tutoring-productive-mastery-math-2026|Oreopoulos ve ark. (2026)]]).

### Eğitimcilerin hangi araçları kullandığını bildirdikleri ve erişimi neyin kapattığı

Dokuz ülkeden 211 eğitimciyle kurulmuş 2026 tarihli bir tipolojiden gelen nadir bir sayım, sınıflara ulaşan araçların orantısız biçimde ücretsiz kademeye sahip olanlar olduğunu göstermektedir; çünkü herkesin erişebileceği ücretsiz bir sürüm, kabul ölçütü olarak belirlenmiştir ve en çok aday gösterilen girdiler amaca özgü platformlardan çok genel amaçlı asistanlar ve medya üreticileridir. Listelenen elli aracın yaklaşık yarısı görsel, ses, video veya slayt üretmektedir; belge temelli asistanlar (NotebookLM, Elicit, SciSpace, Humata, Research Rabbit) ise araştırma kategorisindeki en tutarlı kümeyi oluşturmaktadır. Özel [[intelligent-tutoring|özel ders]] sistemler, bildirilen kullanımın merkezinde değil, küçük ve derse özgü bir grup olarak görünür — bu durum yukarıdaki kullanım sorununu daha geniş bir çerçeveye yerleştirir; burada bir platform, öğrencilerin ve öğretmenlerin halihazırda açık tuttukları genel amaçlı araçlara karşı dikkat için yarışır. ([[typology-generative-ai-tools-education-2026]])

### Platform modeli önemlidir: açık mı özel mülk mü

- **Özel mülk platformlar** araştırma için engeller yaratır: [[adaptive-learning]] deneylerini çoğaltmak veya genişletmek isteyen araştırmacılar genellikle küçük sayıda kapalı platformla sınırlıdır.
- **Açık platformlar** bu engeli düşürür. **OATutor**, ITS ilkeleri üzerine kurulu ilk açık kaynaklı uyarlanabilir özel ders sistemidir — Creative Commons cebir içerik kütüphanesi, [[knowledge-tracing]] ustalık tahmini ve yerleşik A/B testi içeren, MIT lisanslı bir kod tabanı — araştırmacıların çatallamasına, denemeler yapmasına ve uçtan uca sistemin tamamını yayımlamasına olanak tanır. ([[oatutor-open-source-adaptive-tutor-2023]])
- **Şeffaflık ön yüklüdür.** 48 platform politikasının aynı denetiminde veri toplama ve üçüncü taraflarla paylaşım nispeten iyi açıklanırken YZ’ye özgü açıklama ve hesap verebilirlik geride kalmış; 48 platformun 16’sı (%33), görünür YZ özelliklerine rağmen anlamlı bir YZ açıklaması yapmamıştır ([[edtech-privacy-deferral-2026|Nair ve Greenstadt, 2026]]).

- **LMS API’si, oyunla bütünleşen bir platformun neyi değerlendirebileceğini sınırlar.** Blackboard içeriğinden oynanabilir bir dünya üreten bir hiper oyunlaştırma piloti, çoktan seçmeli veya açık uçlu soruları görüntüleyememiştir; çünkü öğrenci kapsamlı belirteçler hiçbir soru içeriği döndürmemiş ve çalışma zamanı yanıtlarını göndermek üzere hiçbir uç nokta bulunmamıştır ([[hypergamification-game-engine-lms|Yusubov ve ark., 2026]]).

- **Yalıtım ve maliyet, platform tasarımı değişkenleridir.** VISMATIC, JupyterHub’ın aksine yanal hareketi ve ana makine ele geçirmesini engelleyen köksüz kapları (rootless containers), API düzeyinde süreç telemetrisiyle eşleştirir; 10–20 öğrenci için kapasiteli tek bir Raspberry Pi 5 düğümünde 19 öğrenci ve 1.880 kayıtlı olayı çalıştırır ([[vismatic-secure-sandbox-cs-education|Arroyo ve ark. (2026)]]).

### YZ-mayın platformlar çevrimiçi eğitimi yeniden şekillendiriyor

Platform paradigmasının kendisi evrim geçiriyor. **MAIC** (Massive AI-empowered Course — YZ Güçlendirmeli Kitlesel Kurs), MOOC’un “N öğrenciye bir video” modelini, öğrenci başına bir ajan anlamına gelen LLM tabanlı çok ajanlı bir sınıfla — “1 öğrenciye N ajan” — değiştirir; uzmanlaşmış Öğretmen, Asistan, Sınıf Arkadaşı ve Çözümleyici ajanlarını kullanarak ölçekte kişiselleştirilmiş, uyarlanabilir öğrenme sunar ve kurs üretimini ~\\$25K/60 saatten 2 \\$’ın altında/30 dakikaya indirir. ([[mooc-to-maic]]) Benzer biçimde, YZ ile bütünleşen LMS tasarımları, yalnızca iş akışı platformlarının ötesine geçerek politika kapılı (sınırlı) YZ, biçimlendirici ipucu verme, aralıklı tekrar ve öğretmen panolarıyla gerçek zamanlı öğretim desteğine geçmeyi önermektedir. ([[ai-lms-middle-school-longitudinal]]) Konuşlandırma yelpazesinin diğer ucunda, sınıfa gömülü YZ’nin canlı fiziksel ortamlarda uygulanabilir olduğunu kanıtlaması gerekir. Community Builder ([[breideband-community-builder-cobi-2026|CoBi]]) — konuşma tanıma ve dil anlama kullanarak küçük grup işbirlikçi söylemini görselleştiren, sınıf geneline yayılan bir platform — gürültülü ortaokul sınıflarında piyasa mikrofonları ve ölçeklenebilir bir bulut hattı kullanılarak başarılı biçimde konuşlandırılmış; gerçek zamanlı konuşma-YZ altyapısının özgün K-12 ortamlarında işleyebildiğini göstermiştir; ancak arayüz uyumsuzlukları (öğretmenin ve öğrencinin geri bildirimin grup mu sınıf düzeyinde mi olduğuna ilişkin görüşleri) konuşlandırma sürtünmesi yaratmıştır.

### İlgi temelli ve bağlam duyarlı platform özellikleri

Platformlar performans verisinin ötesinde kişiselleştirme yapabilir. **Taklif.AI**, üniversite ödevlerini öğrencilerin **ders dışı ilgi alanlarına ve kültürel bağlamlarına** göre üreten, LLM güçlü bir platformdur; [[culturally-relevant-pedagogy]] ile uyumludur ve herkese uyan tek biçimli ödevlerden ilgi güdümlü katılıma geçişi sağlar. ([[taklif-ai-interest-based-personalized-assignments]])

## Tasarım ve araştırma için çıkarımlar

1. **Yalnızca yetenek için değil, kullanım için tasarlayın.** Bir platformun etkililiği, öğrencilerin onunla gerçekten etkileşime girip girmediğine bağlıdır; destek yapıları, başlangıç (onboarding) süreçleri ve zamanlama, YZ’nin kendisi kadar önemlidir. ([[access-not-enough-ai-tutoring-2026]])
2. **Platform yapısını bir eşitlik kolu olarak ele alın.** Bir platformdan kimin yararlandığı erişime, altyapıya ve katılım kısıtlarına bağlıdır — platform tasarımı bir [[equity-in-ai-education]] merceğinden incelenmelidir. ([[access-not-enough-ai-tutoring-2026]])
3. **Araştırma için açık, çoğaltılabilir platformları tercih edin.** OATutor gibi açık kaynak platformlar, yeniden üretilebilir uyarlanabilir öğrenme araştırmalarını ve paylaşılan bir kanıt tabanını mümkün kılar. ([[oatutor-open-source-adaptive-tutor-2023]])
4. **YZ-mayın platformları yönetişim ve sınırlarla tasarlayın.** Platformlar YZ ile bütünleştikçe gizlilik öncelikli mimari, veri minimizasyonu, denetlenebilir kayıtlar ve rol tabanlı erişim kritik önemdedir — bu durum [[privacy]] ve [[governance]] kaygılarına bağlanır. ([[ai-lms-middle-school-longitudinal]])
Gizlilik politikaya değil hattın içine yerleştirilebilir: anonimleştirilmiş duruş yörüngeleri üzerinde eğitilmiş bir sınıf olayı dedektörü, küçükler için yüz ve görünüm ipuçlarını sistemden uzak tutar; ancak her yöntem, önerilen modelin en iyi doğruluğunun %63,41 olduğu gerçek sınıflara sıfır-örnek aktarımda doğruluk kaybetmiştir ([[privacy-aware-classroom-incident-recognition-2026|Parmar ve ark. (2026)]]).
5. **Önerileri öğretmenin alan dilinde açıklayın.** Bir platformun YZ özellikleri, açıklamaları anlaşılır ve pedagojik açıdan anlamlı olduğunda güven ve kullanım kazanır: bir YZ gruplama öneri aracıyla (GrouPer) yürütülen özne içi bir deneyde, [[xai-teachers-trust-edtech-recommendations-2026|Feldman-Maggor ve ark. (2025)]], müfredat diliyle çerçevelenen alana dayalı açıklamaların ham özellik önem derecesi açıklamalarına kıyasla öğretmenlerin anlaşılabilirlik, güven ve kabulunu belirgin biçimde daha fazla artırdığını bulmuştur — ve tam kabul için gerçek sınıf kullanımının hâlâ önemli olduğunu. ([[xai-teachers-trust-edtech-recommendations-2026]])
6. **Kanıt üreten sistemi, onu derecelendiren sistemden ayırın.** Ajanlar bir öğrencinin adına bir kursu tamamlayabildiğinde, [[credentials-carry-evidence-ai-agents-2026|Srivastava (2026)]], bir platformun öğrenenin akıl yürütmesine ilişkin çağdaş, incelenebilir kanıt yayımlaması ve onun tek derecelendiricisi olmaması gerektiğini savunur — ortam, veren ve doğrulayıcı bağımsız olmalıdır. ([[credentials-carry-evidence-ai-agents-2026]])
7. **Temsilleri tasarım zamanında üretin, çalışma zamanında değil.** [[edtech-design-time-generative-ui|Neshaei ve ark. (2026)]], çalışma zamanı uyarlamasının ölçekte doğrulanamayacağını savunur ve içeriği modaliteden bağımsız anlamsal kartlar olarak kodlamayı önerir; bu kartlardan etkileşimli, sesli, basitleştirilmiş metin ve düşük bant genişliği türevleri üretilir ve yayına girmeden önce öğretmenler tarafından onaylanır — öğrenci başına çıkarım maliyetini ortadan kaldırır; ancak hiçbir prototip rapor edilmemiştir.

## Yaygın yanlış anlamalar

**“Bir platform ilke olarak etkiliyse öğrenciler onu kullanır.”** Yetenek ile benimseme ayrı problemlerdir ve genellikle bağlayıcı olan benimsemedir. İki yıllık bir küme RCT’de **öğrencilerin %96’sı Khanmigo’yu denemiştir**, yani neredeyse evrensel bir benimseme; ancak medyan öğrenci ona yalnızca **hata yaptığı oturumların %17’sinde** mesaj atmıştır, yani aracın tam olarak bunun için kurulduğu anda. Sınıfı kayıt altına alan bir platform onu değiştirmemiştir.

**“Benimseme girişlerle ölçülür.”** Bilgilendirici boşluk mesaj düzeyindedir, hesap düzeyinde değil. Aynı denemede mesajların yalnızca **~%14,5’i gerçek bir matematiksel soru** taşımıştır. Öğrencilerin %96’sı erişim olayını oluşturmuş; etkileşimlerinin yaklaşık yedide biri entelektüel işi yapmıştır. Burada bir giriş sayısı bildirmek, var olmayan bir başarıyı betimlemek olurdu.

**“Açık ya da tescilli olmak, sonuçları etkilemeyen bir lisans ayrıntısıdır.”** Platform modeli, kurumların sistemle neler yapabileceğini şekillendirir: OATutor gibi [[open-source|açık]] platformlar, MIT lisanslı, Creative Commons cebir içerik kütüphaneli, [[knowledge-tracing]] ustalık tahminli ve yerleşik A/B testli uyarlanabilir bir öğretmen olarak bir bölümün kendi pedagojisini ölçmesine ve değiştirmesine izin verir; kapalı bir platform bunu yapamaz. Lisans, deneyi kimin yürütebileceğini belirler.

**“Bir kurumda işleyen bir platform, benimsendiği gibi işler.”** Platform etkileri yerel yönetişimden geçer: gizlilik öncelikli mimari, veri asgarileştirmesi, denetlenebilir günlükler ve role dayalı erişim, YZ bütünleşik bir platformu konuşlandırılabilir kılan şeylerdir ve bunlar bir satıcı gösteriminden çıkarılabilecek özellikler değil, kurumsal kararlardır.

## Bağlı kavramlar

- [[personalized-learning]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[student-modeling]]
- [[knowledge-tracing]]
- [[automated-assessment]]
- [[formative-assessment]]
- [[generative-ai]]
- [[llm]]
- [[open-source]]
- [[ai-literacy]]
- [[student-experience]]
- [[teacher-role]]
- [[k-12]]
- [[higher-ed]]
- [[equity-in-ai-education]]
- [[privacy]]
- [[governance]]
- [[culturally-relevant-pedagogy]]
- [[stem-education]]
- [[educational-technology-developers]]

## Bağlı makaleler

- [[typology-generative-ai-tools-education-2026]] — What 211 educators reported using: 50 tools in nine categories
- [[making-ai-tutoring-productive-mastery-math-2026]] — Making AI tutoring productive: mastery-based math practice
- [[one-click-away-khanmigo-two-year-school-experiment-2026]] — One Click Away: Khanmigo in a two-year school experiment
- [[access-not-enough-ai-tutoring-2026]] — Take-up and engagement are the binding constraints for AI tutoring platforms
- [[oatutor-open-source-adaptive-tutor-2023]] — An open-source adaptive tutoring platform for replicable research
- [[mooc-to-maic]] — Moving from MOOC to LLM-driven multi-agent AI classrooms
- [[ai-lms-middle-school-longitudinal]] — AI-integrated LMS for middle school with bounded, privacy-first support
- [[taklif-ai-interest-based-personalized-assignments]] — Interest-based personalized assignment platform
- [[edusim-llm-robotic-simulation-education-2026]] — An LLM-robotic simulation platform for education
- [[teachy-mini-generative-social-robot-higher-ed-2026]] — A generative social-robot teaching platform in higher education
- [[hypergamification-game-engine-lms]] — A game-engine-based LMS integrating gamification
- [[edtech-design-time-generative-ui]] — Designing edtech for generative UI
- [[lata-ferpa-compliant-local-llm-autograder]] — FERPA-compliant local LLM autograder platform
- [[vismatic-secure-sandbox-cs-education]] — A secure sandbox platform for CS education
- [[learnmate2-llm-adaptive-learning]] — LLM-powered personalized adaptive learning platform
- [[privacy-aware-classroom-incident-recognition-2026]] — Privacy-aware computer vision in classroom platforms
- [[raza-farooq-aied-review-2020-2025]] — Comprehensive review of AIED research and systems
- [[credentials-carry-evidence-ai-agents-2026]] — Credentials that carry their evidence for AI-agent work
- [[breideband-community-builder-cobi-2026]]
- [[xai-teachers-trust-edtech-recommendations-2026]]
- [[edtech-privacy-deferral-2026]] — "We'll Fix It Later": Education, AI, and the Deferral of Student Privacy in EdTech
- [[synthetic-educational-data-structural-fidelity-2026]] — What Fidelity Metrics Miss: A Structural Check on Synthetic Educational Data
