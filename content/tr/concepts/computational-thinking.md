---
title: "Hesaplamalı Düşünme"
created: "2026-10-14T21:35:00-04:00"
type: concept
foundations: [ai-literacy]
technology: [adaptive-learning, generative-ai, llm, prompt-engineering]
discipline: [cs education, stem education]
level: [k 12]
confidence: high
reviewed_by: [editor]
translation_of: concepts/computational-thinking
source_updated: "2026-09-30T09:59:35-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Hesaplamalı düşünme** — ayrıştırma, örüntü tanıma, soyutlama ve algoritma tasarımını içeren bir problem çözme yaklaşımı. Yapay zeka eğitiminde hesaplamalı düşünme hem yapay zeka sistemlerini anlamak için bir ön koşuldur hem de yapay zeka araçlarının geliştirmeye yardımcı olabileceği bir beceridir.

## Üzerinde Düşünülebilecek Sorular

- Bir problemi parçalara ayırarak, örüntüleri fark ederek, özü soyutlayarak ve adımlar tasarlayarak çözdüğünüzde — bilgisayar olmadan bile hesaplamalı düşünme yapıyorsunuzdur. Bunu en son ne zaman yaptınız?
- Yaygın bir varsayım, hesaplamalı düşünmenin kodlamayla ya da “bilgisayar okuryazarlığı” ile aynı şey olduğudur. Bunlar nasıl farklı olabilir ve bu fark onu nasıl öğrettiğiniz açısından neden önemli olabilir?
- Araştırmalar, öğrencilerin yapay zeka önerilerini değerlendirme yeteneğini sınırlayan şeyin yapay zeka aracının kendisi değil, temel kavramlardaki yetersizlikleri olduğunu göstermektedir. Bir öğrenen, bir yapay zekanın çıktısını eleştirel biçimde değerlendirebilmeden önce hangi temel bilgilere sahip olmalıdır?
- Bazıları hesaplamalı düşünmenin öğrenenleri yapay zeka çıktılarını pasif biçimde tüketmekten yapay zeka ile inşa etmeye, eleştirmeye ve tasarlamaya doğru yönlendirmesi gerektiğini savunur. Öğrencileri tüketici değil üretici olarak gören bir sınıf gerçekte nasıl görünürdü?
- Üretken yapay zeka artık öğrencilerin hesaplamalı düşünme gelişimini puanlayabilir — yine de hem insanlar hem yapay zeka en zor yapısal öğe olan sistem düşünmesiyle zorlanmaktadır. Değerlendirmenin otomasyonunun nerede durması gerektiğini düşünüyorsunuz ve neden?
- Robotik araştırmalar, hesaplamalı düşünmenin yalnızca kavramlar açık hâle getirilip müfredata bağlandığında, yalıtılmış teknoloji alıştırmaları olarak ele alındığında değil, geliştiğini bulmuştur. Alttaki düşünmeyi adlandırmadan “teknoloji becerileri” öğretmenin riski nedir?

## Giriş

### Yapay zeka çağı sınıfında hesaplamalı düşünme

Bilgi tabanının bağlı makaleleri merkezi bir iddia üzerinde birleşir: hesaplamalı düşünme (Hesaplamalı Düşünme — CT), öğrencilerin yapay zeka ile eleştirel biçimde etkileşime girebilmesi için gereken kavramsal temeldir ve aynı zamanda iyi tasarlanmış yapay zeka destekli öğrenmeyle en doğrudan biçimde derinleşen beceridir. Aşağıda kanıtlar, bağlı makalelere dayanan dört tema altında toplanmıştır.

- **YZ okuryazarlığının ve eleştirel etkileşimin temeli olarak CT.** Bazı çalışmalar, öğrencilerin yapay zeka çıktılarını yalnızca tüketmek yerine değerlendirmesini sağlayan şeyin CT olduğunu göstermektedir. [[chat-debugging-human-ai-collaboration-circuits|Sohbetle hata ayıklama araştırması]], lisans öğrencilerinin LLM yardımıyla analog devrelerde hata ayıkladığında sınırlayıcı etkenin araç değil, *temel kavramlardaki ve eleştirel düşünmedeki yetersizlikleri* olduğunu bulmuştur; çünkü öğrenciler yapay zeka önerilerini değerlendirmek için gereken çekirdek fikirleri edinmemiştir. [[llm-intervention-design-cs-review|LLM müdahale tasarımı üzerine bir derleme]] benzer biçimde, etkili müdahaleleri “araç hayal kırıklığından” ayıran şeyin [[cs-education]] alanının sözdizimi ustalığı yerine hesaplamalı düşünmeye yönelmesi olduğunu sonuçlandırır. Erken çocukluk döneminde [[ai-play-framework-early-childhood-2026|AI-Play çerçevesi]], çocuklara “YZ parçalardan oluşan bir sistemdir” ve “YZ örneklerden öğrenir” öğretilerek elektrik gerektirmeyen, oyuna dayalı bir biçimde [[ai-literacy]] inşa eder — CT’nin gelişimsel olarak temelli ilk katmanı. Ve [[academic-league-of-ai-2026|bir YZ akademik ligi]], CT’yi [[project-based-learning]] yoluyla gerçek yurttaş YZ projelerine bağlar ve [[ai-literacy]] uygulamaya gömer. Birlikte bu çalışmalar, CT’nin YZ okuryazarlığının aktarılabilir bilişsel çekirdeği olduğunu düşündürmektedir.

- **Eğitim robotiği, CT için bir taşıyıcı olarak.** Robotik, [[k-12]] ve [[stem-education]] kapsamında CT gelişimi için en çok çalışılmış bağlamdır. [[computational-thinking-educational-robotics-secondary-2026|Ortaokul araştırması]], eğitim robotiğinin problem çözmeyi ve eleştirel düşünmeyi yalnızca CT kavramları açık hâle getirilip [[stem-education|STEAM]] müfredatına bağlandığında, yalıtılmış teknik alıştırmalar olarak ele alındığında değil, geliştirdiğini savunur. [[game-based-gamified-robotics-education-review-2026|95 çalışmayı kapsayan sistematik bir derleme]], robotiğin CT’yi, yaratıcılığı ve problem çözmeyi beslediğini; [[game-based-learning]] gibi oyuna dayalı yaklaşımların gayri resmi ortamlara uygun olduğunu, oyunlaştırmanın ise resmi sınıflarda baskın hâle geldiğini ve proje tabanlı öğrenmeyi desteklediğini doğrular. [[microbit-robotics-machine-learning-teacher-training-2026|Öğretmen eğitimi kanıtları]], bütünleşik bir Micro:bit + robot + makine öğrenmesi müdahalesinin öğretmen adayı eğitiminde anlamlı düzeyde CT bilgi kazanımları (d = 0,638) ürettiğini ve robotiğin gelecekteki öğretmenlerin CT öğretebilmesi için yerleşik biçimde benimsenmesi gerektiğini ileri sürer. LLM’ler bu eşiği daha da düşürebilir: [[edusim-llm-robotic-simulation-education-2026|EduSim-LLM]], bir LLM’yi robot benzetimiyle eşleştirerek yeni başlayanların robotları doğal dille kontrol etmesini sağlar ve CT’yi içeren robotiği düşük düzeyde kodlama gerektirmeden erişilebilir kılar.

- **“Daha yetenekli bir akran” olarak yapay zeka, kaynağı sınırlı robotik derslerinde CT’yi taşıyabilir.** Nijerya’daki 103 birinci sınıf lisans öğrencisiyle yürütülen 14 haftalık yarı-deneysel bir çalışmada, yapay zeka destekli problem tabanlı öğrenmenin (yakınsak gelişim bölgesi içinde ChatGPT ve Teachable Machine) sınav sonrası hesaplamalı düşünme ve robotik programlama başarısında geleneksel öğretimi aştığı ve cinsiyete göre bir farklılaşma bulunmadığı görülmüştür ([[ai-pbl-computational-thinking-2026|YZ-PBL robotik çalışması (2026)]]).

- **CT değerlendirme ve gelişimi için araç olarak LLM’ler.** [[generative-ai|Üretken yapay zeka]], CT’yi ölçmek ve iskelelemek için ölçeklenebilir yollar sunar. [[llm-computational-thinking-physics-2026|Fizikte CT değerlendirme araştırması]], LLM’lerin geniş öğrenci sayılı [[physics-education]] derslerinde Veri Uygulamaları ve Hesaplamalı Problem Çözme Uygulamaları alanındaki gelişimi puanlamada insan değerlendiricileri yansıtabildiğini göstermiştir — ancak hem insanlar hem de LLM daha karmaşık Sistem Düşünmesi yapısal öğesiyle zorlanmış, bu da otomasyon için net bir sınır çizmiştir. [[visual-query-tracer-declarative-logic-learning|Görsel sorgu izleme]], görselleştirmenin soyut hesaplamayı nasıl iskeleyeleyebileceğini ve CT gelişimini destekleyen sezgiyi nasıl inşa edebileceğini gösterir. [[student-misconceptions-conditionals-loops-taxonomy|Koşullu ifadeler ve döngülere ilişkin yanlış kanı sınıflandırması]], [[scaffolding]] ve otomatik yanlış kanı tespiti için ince ayrıntılı hedefler sunlayarak [[misconceptions]] ile bağlantı kurar. Bu araçların en iyi sonucu ise pedagojik tasarım öncülük ettiğinde vermektedir: [[llm-intervention-design-cs-review|Bilgisayar bilimi derlemesi]], iskeleyeli geri bildirimle donatılmış dönem boyu süren “Sanal Öğretmen” tasarımlarının CT’yi tutarlı biçimde geliştirdiğini, yapılandırılmamış araç erişiminin ise hayal kırıklığını artırdığını bulmuştur.

Kalıcı yetkinlikler, uygulama otomasyonleştirildiğinde kayar: bir atölye raporu öğretilmesi gereken beceriler arasında soyutlama, hesaplamalı düşünme ve bir “doğrulama yelpazesi”ni sayar ve yaklaşık 1.000 öğrencinin katıldığı bir denemeye atıfta bulunur; bu denemde kısıtlanmamış GPT-4 erişimi uygulama performansını %48 artırmış, ancak yapay zeka geri çekildiğinde sınav puanlarını %17 düşürmüştür ([[reshaping-cs-education-genai|Lee ve ark. (2026)]]).

- **K-12, öğretmen eğitimi ve değerlendirme yeniden tasarımı boyunca CT.** CT, [[k-12]]’nin tamamından [[higher-ed]] yelpazesine uzanan bir alanı kapsar ve değerlendirmeyi yeniden şekillendirmektedir. Erken çocukluk ucunda AI-Play, CT ve YZ okuryazarlığını anaokulu öncesi–K2 düzeyindeki öğrenenlere ve teknik olmayan ailelere taşımaktadır; üniversite ucunda ise [[genai-oop-programming-assessments-2026|OOP değerlendirme çalışması]], 2026 yılındaki üretken YZ sistemlerinin otantik programlama sınavlarında ortalama öğrenciyi geride bıraktığını, yine de arayüzlerde, soyut sınıflarda ve kalıtımda başarısız olduğunu bulmuştur — bu tekrarlayan kavramsal boşluklar, CT’nin otomasyonu açısından tam olarak nerede zor kaldığını göstermektedir. [[solving-vs-evaluating-genai-solutions|Rastgele atamalı bir A/B çapraz çalışması]], değerlendirme ve eleştiri görevlerinin üretimle karşılaştırılabilir sonuçlar verdiğini göstererek CT’nin kusurlu YZ çözümlerini yargılayarak çalıştırılabileceğini düşündürmüştür; ancak kazanımların kasıtlı iskeleleme gerektirdiği belirtilmiştir. Bütün bunların temelinde öğretmen vardır: Micro:bit çalışması CT öğretimini doğrudan [[teacher-education]] ile ilişkilendirir ve [[hashmi-socratic-physics-chatbot-2025|Sokratik sohbet botu araştırması]], CT’nin gerektirdiği kesin problem formülasyonunu ölçülebilir ders performansına bağlar.

- **Doğrulanmış bir ölçüt, CT’nin nerede en zor olduğunu gösterir.** Kanıt Merkezli Tasarım ile kurulan ve 461 YZ programlama öğrencisi üzerinde madde yanıt teorisiyle doğrulanan 34 maddelik bir hesaplamalı düşünme testi, zorluğu müfredat boyunca eşit dağılmak yerine veri gösterimi, mantıksal işleç sıralaması ve döngü yapılarında yoğunlaştırmıştır ([[zhang-ct-ai-training-test-2026|Zhang & Zhang (2026)]]).

### Yapay zeka tüketicilerinden üreticilere, yaratıcılara ve tasarımcılara geçiş ve CT

Yapay zeka çağında CT için merkezi bir hedef, öğrencileri ve öğretmenleri yapay zeka çıktılarını *pasif tüketimden* yapay zeka ile ve yapay zeka için *yaratmaya, inşa etmeye ve tasarlamaya* doğru taşımaktır — CT’yi yaparak öğrenmeyle (constructionism) uyumlu kılan bir gündem. Bilgi tabanının bağlı makaleleri bu üretici/yaratıcı/tasarımcı dönüşünü giderek daha açık biçimde ortaya koymaktadır. [[ai-writes-code-student-writes-model-2026|Model yazarlığı araştırması]], üretken YZ ile öğrenerek inşa etmeyi ölçülebilir bir “model yazarlığı” süreci olarak yeniden çerçeveler; öğrenciler yapay zeka tarafından üretilmiş kodu ya da yanıtları yalnızca tüketmek yerine YZ modellerini yazar, hata ayıklar ve üzerinde yineleme yapar. [[code-to-learn-genai-artifact-construction-2026|CtL-GenAI çerçevesi]], bunu üretken YZ çağı için yapıcılık olarak işlevselleştirir ve öğrencilerin YZ ile inşa ettiği yapıtları CT gelişiminin motoru olarak ele alır. [[computational-thinking-ai-agent-creation|YZ ajanı yaratımı yoluyla CT]], yapay zeka ajanlarını yalnızca kullanmak değil, tasarlamak yerine ayrıştırma, soyutlama ve algoritmik akıl yürütmeyi doğrudan çalıştırdığını gösterir.

Yeni meta-analitik kanıtlar bu tabloyu keskinleştirir. [[astor-computational-thinking-meta-review-2026|128 CT sistematik derlemesini kapsayan bir meta-derleme]], alanın CT’yi problemleri çözmek için hesaplama adımları ve algoritmalar kullanan soyut modellerle akıl yürütme biçimi olarak tanımlayan birleşik bir tanım üzerinde yakınlaştığını bulmaktadır — bu, üretim odaklı öğrenmenin talep ettiği, yanıt tüketmekten çok model kurma türünden düşüncenin tam olarak kendisidir. [[tsingidou-ct-robotics-kindergarten-2026|Çocukluk dönemi robotikte CT araştırması]], erken çocukluktaki öğrenenlerin bile robotlarla oyuna dayalı inşa yoluyla üretici hâle geldiğini; problem tabanlı öğrenmeyi, hikâye anlatıcılığını ve iskelelemeyi kullanarak teknolojiyi yalnızca işletilen değil, inşa edilen bir şey olarak görmeye giden gelişimsel ilk adımı attığını göstermektedir. Ve [[solving-vs-evaluating-genai-solutions|değerlendirme ve eleştiri araştırması]], CT’nin kusurlu YZ çözümlerini yargılayarak ve hata ayıklayarak çalıştırılabileceğini göstermektedir — bu, pasif tüketim tuzağına direnen, YZ çıktısına karşı üretici bir duruştur.

Pratik sonuç, CT öğretiminin öğrenenlerin *YZ ile şeyler yapmasını* sağlayacak biçimde tasarlanması gerektiğidir — modelleri yazmak, ajanlar inşa etmek, yapıtlar oluşturmak ve YZ çıktısını eleştirmek — bitmiş çözümleri teslim almak yerine. Bu hem CT’yi derinleştirir hem de [[ai-literacy]] salt kavramsal değil, katılımcı ve yaratıcı olarak inşa edilmesini sağlar. Öğretmenlerin ise YZ araçlarını kullanmaktan YZ destekli öğrenme etkinlikleri tasarlamaya geçmek için desteğe ihtiyacı vardır (bkz. [[teacher-role]] ve [[professional-training]]).

### Pratik rehberlik

Eğitimciler için tutarlı mesaj, CT’nin pasif YZ kullanımı yerine *açık, iskeleyeli, gözlemlenebilir* etkileşimle geliştiğidir. Robotiği müfredata açık CT kavramı eşlemesiyle eşleştirin; LLM’leri [[simulation]], doğal dille kontrol ve CT gelişiminin ölçeklenebilir değerlendirmesi için kullanırken Sistem Düşünmesi gibi yapısal öğeler için insan yargısını saklayın; ve değerlendirmeleri ham üretim yerine YZ çıktısının değerlendirmesini ve teşhisini öne çıkaran biçimde yeniden tasarlayın. Ayar ne olursa olsun — erken çocuklukta elektrik gerektirmeyen oyun, ortaöğretimde [[stem-education]] dersinde robotlar ya da [[higher-ed]] düzeyinde Sanal Öğretmenler — etkinliği, öğrencilerin bitmiş çözümler almak yerine ayrıştırma, örüntü, soyutlama ve algoritma üzerine akıl yürütmek zorunda kalacağı biçimde yapılandırın.

### İlgili kavramlarla bağlantılar

Hesaplamalı düşünme, [[ai-literacy]] ile [[critical-thinking]] altında yükselen paylaşılan bilişsel temeldir, [[cs-education]] ve [[k-12]] bilişim eğitiminin müfredatsal çekirdeğidir ve [[educational-robotics]], [[game-based-learning]] ile [[project-based-learning]] uygulamalarının en iyi tasarlandığında hizmet etmek için hedeflediği kavramsal amaçtır. Bu beceri, [[llm|büyük dil modelleri]] ve [[generative-ai]] iskeleleme araçları olarak kullanıldığında derinleşir ve öğrenci yanlış kanı sınıflandırmalarının ile CT duyarlı değerlendirmelerin ölçmeyi hedeflediği beceridir. Öğretmenler bunu [[teacher-education]] ve [[professional-training]] yoluyla geliştirir ve bu beceri [[physics-education]] ile genel olarak [[stem-education|STEM]] başta olmak üzere alanlar arasında aktarılır.

- **Hesaplamalı düşünme, YZ asistanıyla öğrenmeyi yordar.** [[computational-thinking-aica-2026|Sekizinci sınıf öğrencileri]] arasında hesaplamalı düşünmesi yüksek olanlar, YZ kodlama asistanlı bir derste düşük CT’li akranlarına göre belirgin biçimde daha iyi performans gösterdi ve asistanı yanıt getirmek için değil, anlamak için kullandı.

## Bağlı kavramlar

- [[cs-education]]
- [[stem-education]]
- [[ai-literacy]]
- [[k-12]]
- [[prompt-engineering]]
- [[adaptive-learning]]
- [[llm]]
- [[generative-ai]]
- [[higher-ed]]
- [[educational-robotics]]
- [[game-based-learning]]
- [[project-based-learning]]
- [[physics-education]]
- [[scaffolding]]
- [[critical-thinking]]
- [[teacher-education]]
- [[simulation]]
- [[socratic-method]]
- [[misconceptions]]
- [[agentic-ai]]

## Bağlı makaleler

- [[ai-pbl-computational-thinking-2026]]
- [[computational-thinking-ai-agent-creation]]
- [[reshaping-cs-education-genai]]
- [[prompt-problems-nl-programming-mistakes]]
- [[llm-computational-thinking-physics-2026]]
- [[hashmi-socratic-physics-chatbot-2025]]
- [[visual-query-tracer-declarative-logic-learning]]
- [[llm-intervention-design-cs-review]]
- [[academic-league-of-ai-2026]]
- [[ai-play-framework-early-childhood-2026]]
- [[edusim-llm-robotic-simulation-education-2026]]
- [[computational-thinking-educational-robotics-secondary-2026]]
- [[microbit-robotics-machine-learning-teacher-training-2026]]
- [[chat-debugging-human-ai-collaboration-circuits]]
- [[student-misconceptions-conditionals-loops-taxonomy]]
- [[genai-oop-programming-assessments-2026]]
- [[game-based-gamified-robotics-education-review-2026]]
- [[solving-vs-evaluating-genai-solutions]]
- [[zhang-ct-ai-training-test-2026]] — Computational Thinking in AI Training Test (CTAT)
- [[computational-thinking-aica-2026]] — Computational Thinking Levels and AI Coding Assistants (2026)
- [[ai-writes-code-student-writes-model-2026]] — Model authorship: theory & measurement for learning-by-construction with GenAI
- [[code-to-learn-genai-artifact-construction-2026]] — CtL-GenAI: constructionism framework for artifact construction
- [[astor-computational-thinking-meta-review-2026]] — CT meta-review of 128 systematic reviews
- [[tsingidou-ct-robotics-kindergarten-2026]] — Systematic review of CT via robotics in kindergarten
