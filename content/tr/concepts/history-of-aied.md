---
title: Eğitimde Yapay Zekanın Tarihi
created: "2026-10-14T21:05:00-04:00"
type: concept
foundations: [agency, ai-education, history-of-aied]
pedagogy: [constructivist, learning-theories]
technology: [generative-ai, intelligent-tutoring]
confidence: high
translation_of: concepts/history-of-aied
source_updated: "2026-09-03T15:00:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Eğitimde Yapay Zekanın Tarihi** — yapay zekanın ve eğitimin 20. yüzyılın ortalarından bu yana birlikte nasıl evrimleştiğini ve geçmişteki kavramsal, terminolojik ve tasarım tercihlerinin öğrenmede yapay zeka konusundaki günümüz tartışmalarını nasıl sürekli biçimlendirmeye devam ettiğini inceleyen alan. Üretken yapay zekayı ani ve emsalsiz bir güç olarak ele almak yerine, tarihsel bir bakış açısı, alanın kuruluşundan bu yana yapısını belirleyen tekrarlayan gerilimleri ortaya çıkarır: denetim karşısında özerklik, standardizasyon karşısında yaratıcılık, otomasyon karşısında güçlendirme.

## Düşünülmesi Gereken Sorular

- Günümüzün üretken yapay zekası sıklıkla emsalsiz bir devrim olarak tanımlanır. Bu çerçeveleme (‘kronosantrizm’), altındaki tekrarlayan örüntüleri görmemizi nasıl engelleyebilir?
- Alan neredeyse ‘yapay zeka’ yerine ‘sibernetik’ olarak adlandırılacaktı. Makineleri bağımsız zekalar mı yoksa birbirine bağlı geri bildirim sistemlerinin parçası mı olarak gördüğümüze bu tek adlandırma tercihi nasıl şekil vermiş olabilir?
- Sayfa, AIED tarihini denetim (öğretimi eniyileyen Anderson’un bilişsel öğretmenleri) ile özerklik (öğrenenleri güçlendiren Papert’in yapılandırmacılığı) arasındaki bir gerilim olarak çerçeveliyor. Kendi eğitimde yapay zeka tercihleriniz bu yelpazenin neresine düşüyor — ve neden?
- Sayfanın savunduğuna göre kişiselleştirmenin iki anlamı vardır: aynı sonuca giden yolu çeşitlendirmek veya çeşitli, öğrenen yönelimli sonuçları olanaklı kılmak. Kurumunuz aslında hangi tür kişiselleştirmeyi hedefliyor ve sizce hangisini hedeflemelidir?
- Günümüzün GenAI tartışmaları bu tarihsel gerilimleri ‘yansıtıyorsa’, hangi geçmiş hataları tekrarlıyor olabiliriz — ve onları hatırlayarak hangi hatalardan kaçınabiliriz?
- Sayfa, teknik tasarım tercihlerinin öğrenmenin amacına ilişkin değer yargılarını içerdiğini ileri sürüyor. Kullandığınız bir yapay zeka eğitim aracında, sessiz sedasız standardizasyonu ya da öğrenen özerkliğini — hangisi olursa olsun — kayırıma mazhar eden bir tasarım kararı belirleyebilir misiniz?

## Giriş

Alanın tarihi doğrusal bir ilerleme değil, etkileri hâlâ yankılanan bir dizi koşula bağlı kararın öyküsüdür. Bu tarihi anlamak, ‘kronosantrizme’ (güncel gelişmeleri kendine özgü biçimde devrimci sayma eğilimine) karşı koruma sağlar, geçmiş hataların tekrarlanmasını önlemeye yardımcı olur ve çerçeveleme ve terminoloji tercihlerinin — teknolojinin yanı sıra — eğitimde yapay zekanın seyrini nasıl yönlendirdiğini ortaya koyar.

### Temel tarihsel izlekler

**Sibernetikten ‘yapay zeka’ya.** John McCarthy 1956 Dartmouth Yaz Araştırma Projesi’ni planlarken, *yapay zeka* terimini *sibernetik* yerine bilinçli olarak seçti — kısmen alanı, analog geri bildirime odaklanan Norbert Wiener ve onun mirasından uzaklaştırmak için. Bu adlandırma kararı, makine yeteneklerini insan bilişiyle doğrudan karşılaştırmalı olarak çerçeveleyerek (antropomorfik çerçeveleme) onlarca yıl boyunca araştırma önceliklerini, kamusal algıyı ve etik tartışmaları yönlendirdi. Alan sibernetic çerçeveyi korumuş olsaydı, makul olan, makineyi bağımsız bir zeka kaynağı olarak konumlandıran ‘YZ öğretmenleri’ yerine geri bildirimi ve bağlantıyı öne çıkaran ‘sibernetik öğrenme sistemleri’nden söz ediyor olmamızdır.

**Bilişsel devrim ve ITS’nin kökleri.** Erken dönem öncüleri — Herbert Simon, Allen Newell, Marvin Minsky, John Anderson — yalnızca bilişi modellemiyorlardı; öğrenme ve öğretimle ilgili temel soruları araştırıyorlardı. Çalışmaları, eğitim psikolojisinin temelini oluşturan insan bilişine ilişkin bilgi işleme modelleri üretti ve 1960’lı–70’li yılların yapay zekasındaki sezgisel arama ve uzman sistemleri paradigmalarına kök salan [[intelligent-tutoring|Akıllı Öğretmen Sistemleri (ITS)]] ortaya çıkardı. Bu sistemler doğal olarak mevcut değerlendirme ve standardizasyon yapılarıyla uyumlu hale geldi ve zamanla AIED topluluğunda birleşti.

**Denetim karşısında özerklik: Anderson ve Papert.** John Anderson ile Seymour Papert’te somutlaşan iki rekabet eden vizyon ortaya çıktı. **Anderson’un** [[intelligent-tutoring|bilişsel öğretmenleri]] (ACT/ACT-R kuramı) bilgiyi üretim kurallarına ayırdı, kesin bireyselleştirilmiş geri bildirim sağladı ve geleneksel eğitim yapılarını pekiştirdi — yapay zekayı öğretimi eniyileme aracı olarak gören bir vizyon. **Papert’in** [[constructivist|yapılandırmacılığı]] (Logo, ‘mikrodünyalar’, öğrenme olarak hata ayıklama) bilgisayarları çocukların yaratıcı deneylerle bilgi inşa ettiği ortamlar olarak gördü — kurumsal hiyerarşilere meydan okuyan, yapay zekayı entelektüel güçlendirme aracı olarak gören bir vizyon. Denetim ile özerklik arasındaki bu ‘temel gerilim’, alan tarihinin ana eksenidir.

**Kişiselleştirmenin iki biçimi.** [[personalized-learning|Kişiselleştirme]], bu vizyonlara karşılık gelen iki ayrı yoruma sahiptir. İlki sonuçları sabit tutup yolu çeşitlendirir (Skinner’ın öğretme makinelerine; ustalığa yönelik özel ders verilmesine ilişkin Khan Academy vizyonuna kök salar). İkincisi ise çeşitli sonuçları benimser — öğrenenlerin bireysel ilgi ve yeteneklerini, standart müfredat sınırlarıyla kısıtlanmadan sürdürdüğü sonuçları (Zhao, 2024). ITS modeli birincisini, yapılandırmacılık ikincisini destekler.

**GenAI çağı için dersler.** Üretken yapay zeka konusundaki günümüz tartışmaları bu tarihsel gerilimleri yakından yansıtıyor. GenAI sıklıkla yeni nesil bir akıllı öğretmen olarak konumlandırılıyor (Anderson’u sürdürerek) ve bu da gözetim, veri toplama ve standardizasyon kaygılarını gündeme getiriyor. Diğer taraftan yaratıcı özerkliğin aracı olabilir (Papert’i sürdürerek); bu durum değerlendirmeyi yeniden düşünmemizi ve daha belirsiz sonuçları kabul etmemizi gerektiriyor. [[mishra-control-vs-agency-history-2025|Mishra ve ark.]] sonuç olarak şunu belirtiyor: kurumsal güçler tekrar tekrar mevcut yapıları güçlendiren yaklaşımları tercih ediyor — ve seçtiğimiz dil ve metaforlar gelecekteki olanakları biçimlendirecektir. [[rismanchian-ai-education-four-decades-aixed-2026|Rismanchian ve Doroudi’nin AI×Ed çerçevesi]] bu sezgisel değerlendirmeye ampirik bir zemin sunuyor: AIED bildirilerinden (1985, 1993, 2021, 2024) ve IJAIED’den (2004, 2014, 2021) makaleleri iki eksen üzerinde konumlandırarak — yapay zekanın rolü (uygulamalı araç karşısında insan zekasına analoji) ve son kullanıcı — insan zekasına bir analoji olarak yapay zeka kullanan önemli bir erken dönem araştırması içeren çeşitli bir karışımdan (öğrenmenin hesaplamalı modelleri, Papert’in mikrodünyaları, bilgi ediniminde ajan tabanlı modeller) 2000’lere gelindiğinde uygulamalı, aracı kullanımlara neredeyse tamamen yönelen bir alanın izini sürüyorlar. Dikkat çeken nokta, üretken yapay zeka döneminin bu seyri kısmen tersine çevirmiş görünmesi: AIED 2024’te alanın ‘YZ-analoji’ kadranındaki dört makaleden üçü LLM tabanlıydı; bunlar arasında LLM tabanlı öğretilebilir ajanlar üzerine en iyi makale çalışması da yer alıyor.

## Üretken yapay zekanın son etkisi

[[generative-ai|Üretken yapay zeka]] — metin için [[llm|büyük dil modelleri]]nin yanı sıra görüntü, ses ve video üreteçlerini de içeren geniş bir aile — AIED tarihinde alanın kuruluşundan bu yana en önemli sonuç dönüm noktasını işaret ediyor. LLM’ler bu ailenin en öne çıkan üyesi ve sınıf içi etkinin çoğunun itici gücü; ancak yeni metin, görüntü, ses ve kod üretme yeteneğine sahip üretken yapay zeka bir bütün olarak eğitimi yeniden biçimlendiren daha geniş kuvvettir. En iyi, temiz bir kopuş olarak değil AIED tarihine karşı anlaşılır. Üretken yapay zeka çağını ayırt eden birkaç özellik şunlardır:

**Ölçek ve erişim.** Önceki on yılların bilişsel öğretmenleri ve ITS’leri kontrollü laboratuvar ve sınıf ortamlarında çalışırken, LLM’ler piyasaya çıkışından birkaç ay içinde yüz milyonlarca öğrenene ve eğitimciye ulaşarak gündelik yazma, ödev ve öğretime neredeyse anında girdi. GenAI tartışması, benzeri görülmemiş bir hızla uzman dergilerinden sınıflara, yönetim kurullarına ve yasama meclislerine taşındı.

**Yeni bir yetenek türü.** Önceki AIED sistemleri bilişi modelleyip yapılandırılmış öğretim sunuyordu (Anderson geleneği). LLM’ler ise açık uçlu üretim gerçekleştiriyor — kompozisyon, açıklama, kod ve diyalog üretiyor — ve bu da önceki ITS’lerin asla yapamadığı biçimlerde öğrenen özerkliğini ve yaratıcılığı (Papert geleneği) öne çıkarıyor. İşte bu nedenle günümüz anı denetim karşısında özerklik gerilimini bu denli keskin biçimde yeniden alevlendiriyor: aynı araç hem sonuçları denetleyen yeni nesil bir akıllı öğretmen olarak hem de özerkliği büyüten yaratıcı bir ortak yazar ve düşünce ortağı olarak konuşlandırılabilir.

**Erişim denkleminin tersine dönmesi.** Tarihsel olarak kişiselleştirilmiş özel ders kıt ve pahalıydı; GenAI uyarlanabilir birebir desteği neredeyse bedelsiz ve evrensel hale getirerek önceki AIED’yi biçimlendiren erişilebilirlik ve maliyet engellerini köklü biçimde düşürdü. Ancak yeni riskleri de beraberinde getirdi: algoritmik önyargı, halüsinasyon, gözetim, veri toplama ve eğitimcilerin beceri kaybı.

**YZ okuryazarlığı ve kötüye kullanım konusunda tazelenen kaygı.** Üretken yapay zeka dönemi [[ai-literacy]] meseleini acil kıldı ve [[academic-integrity]] tartışmalarını (tespit karşısında diyalog) yeniden çerçeveledi; oysa bu tartışmalar otomasyon, standardizasyon ve epistemik bağımlılık konusundaki uzun süreli kaygıları canlandırdı. Bunlar alanın özgün gerilimlerinin modern dışavurumlarıdır.

**Kronosantrizmin riski.** [[mishra-control-vs-agency-history-2025|Mishra ve ark.]] uyarıyor: üretken yapay zeka çevresindeki heyecan sıklıkla tarihsel farkındalıktan yoksun kalıyor ve bu da konuşmayı teknoloji müjdecilerinin domine etmesine izin veriyor. Günümüzün GenAI tartışmalarının Anderson–Papert ayrımını ve 1955 sibernetik adlandırma kararını yankıladığını anlamak, bugünü kaçınılmaz saymak yerine bilinçli tercihler yapmamızı sağlar. Asıl soru üretken yapay zeka araçlarının neler yapabileceği değil, onlardan ne yapmasını istediğimizdir — ve bu, nereden geldiğimize bağlı bir karardır.

## Çıkarımlar

- **Heyecanı tarihsel okuyun.** Her yeni yapay zeka dalgasının devrimci olarak çerçevelendiğini fark edin; tarihsel farkındalık sürekliliği ortaya koyar ve konuşmanın kurumsal çıkarlarca domine edilmesine direnmeye yardımcı olur.
- **Tasarım tercihlerini değer tercihleri olarak görün.** Eğitimde yapay zeka konusundaki teknik kararlar, öğrenmenin amacına ilişkin ideolojik konumları içerir — bunları görünür kılın ve sorgulayın.
- **Denetimi özerkliğe karşı bilinçli tartın.** Yapay zekanın standart sonuçlara doğru eniyilemesi mi yoksa çeşitli, öğrenen yönelimli sonuçları olanaklı kılması mı gerektiği, teknik bir veri değil, kurumsal ve siyasi sonuçları olan gerçek bir tercihtir.
- **Öğrenen özerkliğini koruyun.** Açık uçlu, öğrenen merkezli yaklaşımlar lehine standardizasyon ve denetime duyulan yinelenen direnç, savunmaya değer kalıcı bir eksendir.

## Bağlı kavramlar

- [[ai-education]]
- [[intelligent-tutoring]]
- [[constructivist]]
- [[agency]]
- [[personalized-learning]]
- [[generative-ai]]
- [[learning-theories]]
- [[adaptive-learning]]
- [[ai-literacy]]
- [[creativity]]
- [[teacher-role]]
- [[ethics]]

## Bağlı makaleler

- [[mishra-control-vs-agency-history-2025]] — Control vs. Agency: Exploring the History of AI in Education
- [[prezenski-human-centered-ai-aided-learning]] — Human-centered AI-aided learning (engages Anderson's legacy)
- [[cognitive-commons-ai-expertise-regeneration]] — Cognitive commons and AI expertise (historical framing)
- [[programming-its]] — Programming Intelligent Tutoring Systems
- [[lak2026-hint-button-unproductive-use]] — Revisiting the hint button in cognitive tutors
- [[socrates-students-instructors-llms-lbt-2025]] — Learning-by-teaching with LLMs (Papert's constructionism lineage)
- [[rismanchian-ai-education-four-decades-aixed-2026]]
