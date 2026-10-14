---
title: Ustalık Öğrenmesi
type: concept
pedagogy: [mastery-learning]
technology: [adaptive-learning, personalized-learning]
assessment: [assessment]
confidence: medium
created: "2026-10-14T22:25:00-04:00"
reviewed_by: [editor]
translation_of: concepts/mastery-learning
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

> **Ustalık öğrenmesi** — Benjamin Bloom tarafından biçimlendirilmiş, [[learners]]’ın sabit bir sınıf programına göre ilerlemek yerine her birimde tanımlanmış bir yeterlilik eşiğini gösterdikten sonra ilerlediği bir [[pedagogy|pedagojik]] çerçeve. Çoğu öğrencinin yeterli zaman, geri bildirim ve güncel durumlarına göre uyarlanmış öğretim verildiğinde ustalığa ulaşabileceği önkabulüne dayanır. YZ öğretmenliği ve uyarlamalı sistemler, öğrenen bilgisini sürekli modelleyerek, görev seçerek ve yeterlilik gösterilene kadar alıştırmayı sürdürerek bu modeli giderek daha fazla uygulamaya dökmektedir.

## Dikkate Alınması Gereken Sorular

- Okulun çoğu zamanı sabitler, başarıyı değişken bırakır — herkes belirli sayıda haftadan sonra ilerler. Ustalık öğrenmesi bunu tersine çevirir: başarı sabit tutulurken zaman, geri bildirim ve alıştırma değişir. Hangi model, zor bir şeyi öğrenme biçiminizle daha iyi örtüşüyor?
- Sayfadaki kritik bir uyarı: "doğruluk, ustalık değildir." Bir öğrenci anahtar bir kısıtı gözden kaçırırken doğru yanıtlar üretebilir ve sistemi ustalığı erkenden ilan etmeye kandırabilir. *Ne zaman yapmamak* gerektiğini gerçekten anlamadan doğru biçimde yerine getirebildiğiniz bir beceriyi düşünebiliyor musunuz?
- Ustalık temelli YZ, öğrenenlere kendi görevlerini seçme özerkliği verir; ancak simülasyonlar, saf öz-seçimin korkunç miktarda fazla alıştırmaya yol açabileceğini gösterir. Bir öğrencinin seçim yapmasına izin vermekle ilerlemeyi verimli kılacak kısıtlar dayatmak arasındaki doğru denge nerede?
- Sayfa, tek bir doğru performans değil kalıcı belleklenmeyi vurgular — bu yüzden ustalığı aralıklı alıştırma izlemelidir. Bir öğrenci bugün bir şeyi "ustalaşmış" gibi görünürken saatler içinde kaybedebilir mi?
- Bir YZ size bir konuyu "ustalaştığınızı" söylerse, inanmadan önce neyi kontrol etmesini istersiniz — birkaç yanıtı doğru almanın ötesinde?

## Giriş

Ustalık öğrenmesi, başarının sabit tutulması gerektiğini, zamanın ve desteğin değişmesi gerektiğini savunur: öğrenenler küçük, iyi sıralanmış birimler üzerinde çalışır ve ne öğrendiklerine bakılmaksızın yukarı taşınmak yerine bir ustalık ölçütünü karşılayana kadar düzeltici geri bildirim alır. Bloom’un yeniden çerçevelemesi, sık [[formative-assessment]] ve yeterliliğin açık bir tanımını öğretimin merkezine yerleştirir; ve tam olarak bu kombinasyon — tanı koyma, geri bildirim, uyarlamalı ilerleme hızı — [[adaptive-learning]] ve [[intelligent-tutoring]] tarafından otomatikleştirilendir. Bu nedenle YZ, ustalık yaklaşımlarının uygulanabilirliğini genişletir ve üretilen geri bildirimin bunu sertifikalandırmaya yetecek kadar iyi kalibre edilip edilmediği sorusunu keskinleştirir.

## Kökenler ve Temel Fikir

Bloom’un ustalık öğrenmesi, öğretimin amacını "öğrencileri yeteneğe göre ayırmaktan" "ilerlemeden önce yeterliliği sağlamaya" taşıdı. Geleneksel öğretimin zamanı sabit, başarıyı değişken olarak ele aldığı yerde, ustalık öğrenmesi bunu tersine çevirir: başarı sabit tutulur, zaman, geri bildirim ve alıştırma değişmesine izin verilir. Öğrenenler küçük, iyi sıralanmış birimler üzerinde çalışır ve — en önemlisi — ustalık ölçütünün altında kaldıklarında yine de yukarı taşınmak yerine düzeltici geri bildirim alırlar. Bu, [[formative-assessment]]’ı modelin kalbine yerleştirir — bir öğrencinin ilerlemeye hazır olup olmadığını teşhis eden sık, düşük riskli kontroller — ve koltuk süresine değil gözlemlenebilir performansa bağlı [[assessment]]’ın açık bir kavramını önkoşul edinir.

## YZ Ustalığı Nasıl Uygulamaya Koyar

Klasik ustalık öğrenmesindeki darboğaz, her öğrencinin durumunu teşhis etmenin ve sonraki öğretimi kişiselleştirmenin öğretmen tarafındaki maliyetiydi. Modern YZ sistemleri buna [[student-modeling]] ve [[knowledge-tracing]] yoluyla saldırır: tek bir toplu skor yerine sistem, bir öğrencinin hangi bilgi bileşenlerini (veya hangilerini) ustalaştığının dinamik bir temsilini sürdürür. [[neural-symbolic-knowledge-tracing]] üzerindeki Responsible-DKT çalışması, derin bir öğrenen modeline açık ustalık kurallarını enjekte eder — tekrarlanan doğru yanıtlar tahmini ustalığı yükseltir, tekrarlanan yanlış yanıtlar ise ustalıksızlığın daha güçlü bir sinyalidir — [[intelligent-tutoring]]’ın üzerinde hareket edebileceği yorumlanabilir ve zamansal olarak güvenilir durum tahminleri üretir.

Ustalığın süregelen bir modeliyle sistemin işi *sırada ne sunulacağına* karar verme haline gelir. Öğrenenlerin görev seçimi stratejilerine ilişkin [[simulation|Simülasyonlar]], saf özerkliğin (örneğin öz-seçilmiş görevler, riskten kaçınan zayıflık hedefleme) çok adımlı karmaşık problemler üzerinde önemli ölçüde fazla alıştırmaya yol açabileceğini; hedefli sistem kısıtlarının ise verimli öğrenenlere küçük bir kayba mal olmadan uyumsuz stratejileri düzeltebileceğini gösterir. Tam olarak [[adaptive-learning]] ve [[personalized-learning]] sistemlerinin dengelemek zorunda olduğu ödünleşim budur: faydalı olduğunda [[agency|öğrenen özerkliği]] tanımak, ustalığa doğru ilerlemeyi verimli kılacak kısıtlamalar dayatmakla birlikte. Böyle kararlar ayrıca öğrenenlerin çabalarını düzenleme kapasiteleriyle etkileşir ve ustalık öğrenmesini [[self-regulated-learning]] ile bağlar.

**Ustalık çıkarımına kritik bir uyarı: doğruluk, ustalık değildir.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren ve Stamper (2026)]], bir beceriyi aşırı genelleştiren öğrenenlerin — kritik bir uygulama kısıtını atlarken doğru eylemler üreterek — ustalaşmış görünebileceğini gösterir; bu da [[knowledge-tracing]] tabanlı ustalık durdurma kurallarının, eylemin *yapılmaması* gerektiği bir durumla karşılaşmadan önce alıştırmayı bitirmesine yol açar. Çözüm, eylemi nasıl yapacağını değil *ne zaman yapmaktan kaçınacağını* değerlendirmektir: ustalık eşiği tetiklenmeden önce "eyleme geçme" dedektör görevlerini dâhil edin ve eksik kısıtı adlandıran [[feedback]] ile eşleştirin. Ustalık, yalnızca doğruluk değil, uygulama kısıtlarının ayrımı artı eylem yürütmesi olarak daha iyi anlaşılır.

**İkinci bir uyarı eşiğin arkasındaki kanıt kuralına ilişkindir.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]], ASSISTments 2012–13 matematik kayıtlarından aynı olay dizileri üzerinde dört güncelleme kuralı çalıştırdı — 12.716 öğrenci ve 985.813 puanlı olaydan oluşan doğrulayıcı bir yarı — ve ilan edilen ustalık sayısının öğrenenlerle değil kurala göre değiştiğini buldu: herhangi bir tamamlamayı kredi saymak, 113.428 öğrenci–beceri çiftinin yüzde 93,9’unu 0,95 arka olasılığının ötesine geçirdi; buna karşılık ipuçlu veya yeniden denenmiş satırların ilk denemelerde başarısız sayıldığı durumda yüzde 72,8 oldu. Muafiyetli kuralın katı kuralın önünde ilan ettiği çiftler, kuralların hemfikir olduğu yüzde 85,7’ye karşı yüzde 70,9 yardımsız doğruluğa ulaştı; bu da 0,744 taban oranının altındadır. Yardımlı tamamlamaları sayan bir ilerleme kapısı, sonraki bağımsız çalışmaları ortalamanın altında olan öğrencileri sertifikalandırır; bu da bir ustalık nişanının neyi sertifikalandırdığını güncelleme kuralı içinde [[help-seeking|yardım]] muamelesinin — sayısal eşiğin kendisinin değil — belirlediği anlamına gelir.

## Uygulama, Belleklenme ve YZ Desteğinin Sınırları

Ustalık ayrıca kalıcı belleklenmeye değil yalnızca tek bir doğru performansa bağlıdır. [[retrieval-spacing-interleaving|Geri çağırma alıştırması]] ve unutma eğrisi üzerine bilişsel bilim, ustalık eşiğine ulaşıldıktan sonra aralıklı alıştırma uygulamayı gerekçelendirir. Memdora gibi YZ aralıklı tekrar sistemleri, okuma anında alıştırma materyalleri üretir ve en gelişmiş algoritmalarla planlanan, bilişsel temelli geri çağırma etkileşimleri taksonomisi sunar; böylece elde edilen ustalık saatler içinde kaybolmak yerine zaman içinde pekiştirilir. Bu tasarımlar, geri çağırmanın çabasını kendisi öğrenme sürecinin bir parçası haline getirmek için [[cognitive-psychology]] ve [[desirable-difficulties]] ilkesinden yararlanır.

Son olarak, kanıt, YZ tarafından üretilen desteğin tekdüze biçimde yararlı olduğunu varsaymaya karşı uyarır. Yeni programcılar için YZ tarafından üretilen canlandırılmış izler üzerine çok kurumlu bir [[governance|kurumsal]] çalışmada, yararlar bağlama bağlı ve kısa vadeliydi; orta [[student-engagement|etkileşim]] düzeyindeki öğrenenlerde koordinasyon maliyetlerine atfedilen bir performans düşüşü görüldü — bir aracı topluca uygulamak yerine desteği öğrenenin güncel durumuna göre kişiselleştirme gereğini vurgulayan, uzmanlık-tersine dönüş tarzı bir etki. Benzer şekilde, [[higher-ed|yükseköğretimde]] [[ai-literacy|YZ okuryazarlığı]]nın bir gelişimsel sürekliliği, ustalığı YZ araçlarını akıcı biçimde benimsemek olarak değil, her birinin kendi [[formative-assessment]] stratejilerine sahip olduğu bilgili ve eleştirel kullanım aşamalarından geçmek olarak konumlandırır. Bu bulgular birlikte, YZ destekli ustalık öğrenmesini bireysel öğrenenlere kalibre edilmesi, sürdürülebilir biçimde aralıklanması ve akıcı çıktı yerine gerçek yeterlilik açısından değerlendirilmesi gereken bir sistem olarak çerçeveler.

- **Paylaşımlı denetimli ustalık öğrenmesi, öğrenenin görev seçimi stratejisi kadar verimlidir.** Bir simülasyon çalışması (koşu başına 1.000 simüle öğrenci, gerçek MathTutor ve DataShop kayıtlarına uydurulmuş AFM ve BKT parametreleri) dokuz görev seçimi stratejisini karşılaştırdı. Verimlilik bir mertebe farkla değişir: en kötü durumda ustalık kaybı en küçük olan beceriyi seçen riskten kaçınan "En Kötü Durum Kaybını En Aza İndir" stratejisi, denklem çözmede 30,28 kat fazla alıştırma üretir (grafik yorumlamada 28,93 kat), diğer stratejilerde ortalama 1,73 ± 0,38’e karşılık. Hedefli sistem kısıtları onu cerrahi bir şekilde kurtarır: görev seçimi kısıtları fazla alıştırmayı 12,88/14,46 kata indirir, soru seçimindeki "Daha Zor Olanı Tercih Et" önyargısı ise 1,98 kata (Cohen’s d = 1,86) indirir — hâlihazırda verimli stratejiler ise etkilenmez. Tasarım çıkarımı: kısıtlar strateji-farkında olmalı, iyi olanları vergilendirmeden patolojik öz-düzenleyicileri korumalı ve simülasyon-önce yeniden tasarım, çözümü keşfetmek için öğrencileri 30 kat fazla alıştırmaya maruz bırakmaktan kaçınmalıdır. ([[noh-simulating-task-selection-2026]])

Standartlara dayalı notlama, ustalık öğrenmesinin değerlendirme karşılığıdır ve [[mesny-innovative-assessment-grading-management-2026|Mesny, Roberge-Maltais & Galy (2026)]], bunu yükseköğretim eğitimcilerinin benimseyebileceği "öğrenmeye yönelik değerlendirme" ile uyumlu beş yenilikçi uygulama arasında tanımlar — ancak onu yönetim-eğitimi söyleminde neredeyse hiç bulunmadığını görürler. Bunu normatif engellere bağlarlar: norma-referanslı "eğri üzerinden notlama", dışsallaşmaya yönelik sinyalleme (sıralamalar, stajlar, akreditasyon) ve öğrencilerin araca dayalı zihniyeti, ustalık odaklı, notasız yaklaşımlara direnir. Önerileri kademeli denemelerdir — örneğin ölçeklendirmeden önce tek bir görev için standartlara dayalı rubrikler sunmak — program düzeyinde koordinasyon ve belgelenmiş Öğretmenlik ve Öğrenimi alanındaki bilimsel çalışmalara (Scholarship of [[teacher-role|Teaching]] and Learning) ilişkin kanıtlarla desteklenir.

## Bağlı Kavramlar

- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[knowledge-tracing]]
- [[student-modeling]]
- [[self-regulated-learning]]
- [[formative-assessment]]
- [[desirable-difficulties]]
- [[retrieval-spacing-interleaving]] — ustalık döngüleri içinde pratik motoru olarak geri çağırma ve aralıklama

## Bağlı Makaleler

- [[deceptive-overgeneralization-adaptive-learning-2026]] — Aldatıcı aşırı genelleme: uyarlamalı ustalık, öğrenenler bir eylemi ne zaman yapmaktan kaçınacağını bilmeden alıştırmayı bitirebilir (An, McLaren & Stamper 2026)
- [[neural-symbolic-knowledge-tracing]] — Sorumlu ve yorumlanabilir öğrenen modelleme için derin öğrenmeye ustalık/ustalıksızlık kuralları enjekte etmek
- [[mesny-innovative-assessment-grading-management-2026]]
- [[crediting-assisted-work-inflates-mastery-2026]] — Yardımlı işe kredi vermek ustalığı şişirir: kimin ustalaşmış ilan edileceğine hangi kanıt kuralı karar verir (Srivastava 2026)
- [[noh-simulating-task-selection-2026]] — Ustalık öğrenmesinde öğrenenlerin görev seçimi stratejilerini ve sistem kısıtlarını simüle etmek (Noh ve ark. 2026)
