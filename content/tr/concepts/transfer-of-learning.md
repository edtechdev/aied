---
title: Öğrenmenin Aktarımı
created: "2026-10-14T21:55:00-04:00"
type: concept
foundations: [cognitive-offloading]
pedagogy: [desirable-difficulties, metacognition, scaffolding, transfer-of-learning]
technology: [intelligent-tutoring]
level: [k 12]
confidence: high
translation_of: concepts/transfer-of-learning
source_updated: "2026-10-01T09:59:06-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Öğrenmenin Aktarımı** — bir bağlamda (ör. bir YZ aracıyla pratik) edinilen bilgi veya becerilerin, farklı bir bağlamda (ör. aracı olmadan bağımsız performans) ne ölçüde sürdüğü ve uygulandığı. [[ai-education|Eğitimde YZ’de]] aktarım merkezî açık sorudur: öğrencilerin YZ araçlarıyla *gösterdiği* performans kazanımlarının, onlar *olmadan* gösterabilecekleri kalıcı öğrenmeye dönüşüp dönüşmediği.

## Düşünülmesi Gereken Sorular

- İşte sayfanın belgelediği çarpıcı bir örüntü: öğrenciler YZ destekli görevlerde sıklıkla anında kazanımlar gösterir, ama YZ kaldırıldığında bu kazanımlar yok olabilir — hatta tersine dönebilir. Açıklamaları okumadan önce, o anda açıkça yardım eden bir aracın neden sonunda öğrencileri onsuz daha kötü durumda bırakabileceğini düşünüyorsunuz?
- Bir öğretmen, hesap makinesi veya asistanla yapmayı öğrendiğiniz ve sonra tek başınıza yapmak zorunda kaldığınız bir şeyi hatırlayın. Beceri aktarıldı mı, yoksa yardıma bağımlı mı hissettiniz? İyi aktarılan deneyimler ile aktarılmayanlar arasında farklı olan neydi?
- Yaygın bir sezgidir ki "pratik pratiktir" — bir görevi yardımla yapmak, onu tek başına yapmakla aynı beceriyi inşa eder. Bu sezgi nerede yanıltıcı olabilir, özellikle yardım sizi sürecin içinden geçirmek yerine muhakemeyi sizin yerinize tamamlayan bir YZ olduğunda?
- Sayfa "bir teknolojinin içindeki etkiler" ile "onun etkisi" arasında bir ayrım çizer — aracı kullanırken daha iyi performans göstermek ile onsuz daha yetkin hale gelmek. Eğitimci, tasarımcı veya öğrenciyseniz, bunlardan hangisi gerçek hedefiniz ve bunu başardığınızı nasıl anlardınız?
- Kanıt, ne kadar bilişsel işi devrettiğinizin önemli olduğunu düşündürür: dilbilgisi gibi yüzeysel görevleri dış kaynaklığa yüklemek, derin muhakeme ve yapıyı devretmekten daha az aktarımı zedeler. Bir ödevde en son YZ kullandığınız zamanı düşünün. Hangi "katmanı" devrettiniz ve seçiminiz neyi hatırlayacağınız hakkında ne öngörüyor?
- Sayfa, olumlu aktarımı destekleyebilecek koşullar önerir — [[pedagogy|pedagojik]] [[guardrails]], sönen destek, öğrenenin hazırbulunuşluğuna kalibrasyon. Bir YZ öğrenme aracı tasarlıyor (veya onun kullanıcısı) olsaydınız, kullanım sırasındaki kazanımların onsuz kalıcı bir yeteneğe dönüşmesini sağlamak için ısrarla neyi şart koşardınız?

## Giriş

Öğrenmenin aktarımı eğitim [[research-methods-aied|araştırmasında]] temel bir kaygıdır ve YZ araçları bunu acil hale getirmiştir. Eğitimde YZ çalışmalarında belgelenen tanımlayıcı ampirik örüntü bir **aktarım paradoksudur**: YZ kullanan öğrenciler YZ’nin erişilebilir olduğu görevlerde tipik olarak anında, ölçülebilir kazanımlar gösterir, ama YZ kaldırıldığında ve öğrencilerin anlayışı bağımsız olarak göstermesi gerektiğinde bu kazanımlar sıklıkla sürdürülemez — hatta tersine döner. Bu örüntü, iş başındaki mekanizmalar olarak [[cognitive-offloading|Aşırı Bel Bağlama]], Bilişsel Yük Kuramı ve [[metacognition]] sorumlu tutar ve [[intelligent-tutoring|YZ Öğreticilik]] tasarımına ilişkin tartışmalarla doğrudan bağlantılıdır.

Hazırbulunuşluk aktarım değildir: YZ destekli konuşma pratiği, insanlarla konuşma kaygısında düşüş ve insanlarla iletişim kurma isteğinde yükseklikle ilişkilidir; ancak her iki çalışma da insan konuşmasını gözlemlememiştir; YZ provasından insan iletişim yeteneğine giden yol, test edilmemiş bir pedagojik öneri olarak kalmıştır ([[ai-speaking-practice-communicative-readiness-2026|Wang ve Li (2026)]]).

### Aktarım paradoksu

YZ kullanan öğrenciler, YZ’nin erişilebilir olduğu görevlerde tipik olarak **anında, ölçülebilir kazanımlar** gösterir. Ancak YZ kaldırıldığında:

- Etkiler **karışık veya olumsuz** hale gelir
- Kazanımlar sıklıkla **aktarımı başarısız olur** değerlendirilmemiş bağlamlara
- Öğrenciler bağımsız muhakemenin pahasına **araca bağımlı** hale gelebilir

[[stanford-evidence-base-ai-k12-2026|K-12’de YZ’ye ilişkin Stanford Kanıt Tabanı]] derlemesinde sentezlenen kanıt tabanı, alanlar boyunca tutarlıdır:

| Çalışma | Bağlam | Anında Etki | Aktarım Etkisi | Mekanizma |
|---|---|---|---|---|
| Bastani ve ark. (2025) | Lise matematiği | Daha yüksek pratik notları | Kitapsız finallerde **yaklaşık %17 daha kötü** | Genel amaçlı sohbet robotu işi yaptı |
| Chen ve ark. (2025) | Programlama ödevi | Daha yüksek ödev puanları | Yardımsız sınavlarda **iyileşme yok** | [[llm]]-Öğretici problemleri öğrenciler için çözdü |
| Lehmann ve ark. (2025) | Programlama | Daha fazla konu işlendi | **Anlayışı zararlı**; boşlukları genişletti | Düşük ön bilgiye sahip öğrenenler için genel YZ |
| Stadler ve ark. (2024) | Akademik araştırma | Daha hızlı görev tamamlama | Aramaya karşı **daha düşük nitelikli muhakeme** | Azalmış bilişsel [[student-engagement|angajman]] |
| Kosmyna ve ark. (2025) | Kompozisyon yazma | Daha yüksek kompozisyon niteliği | Kendi alıntılarının **%83’ü hatırlayamadı** | Yazarlığın dış kaynaklığa yüklenmesi |

Beş çalışmanın tamamı, genel amaçlı YZ müdahale olduğunda **olumsuz veya sıfır aktarım** örüntüsü gösterir.

### Aktarımı zayıflatan mekanizmalar

**Üstbilişsel yerinden edilme.** Muhakemeyi tamamlayan YZ, öğrencilerin kendi anlayışlarını izleme ve strateji seçme olanaklarını azaltır. YZ kullanan öğrenciler, sorgulandıklarında cevaplarını açıklamada daha yeteneksizdi. Bu, öz izleme üzerine [[metacognition]] araştırması ve [[vibe-compiler-metacognition-genai-agency-2026|yapılandırılmış kursların üstbilişsel yetkinliği artırırken ham LLM asistanlarının artırmadığına ilişkin kanıtla]] bağlantılıdır.

**Üretken yükün baskılanması.** Genel amaçlı YZ yalnızca dışsal (dikkat dağıtan) bilişsel yükü değil, *üretken* yükü de azaltır — kalıcı bilgiyi kodlayan üretken zihinsel emeği. Daha kolay pratik daha iyi hissettirir ama daha zayıf izler depolar. Bilişsel Yük Kuramına ve [[stanford-evidence-base-ai-k12-2026|öğreticiliğe özgü YZ ile genel YZ arasındaki]] ayrıma bakın.

**Aşırı bel bağlama / uzmanlık ters çevirmesi.** Kendilerine cevaplar verilen acemiler şema inşa etmez. Genel YZ cevaplar sağlar; etkili öğreticilik yapılandırılmış rehberlik sağlar. Acemilere uzman düzeyinde kısayollar verildiğinde öğrenme aksamış olur — [[desirable-difficulties]] ilkesinin tersi.

**Araca bağımlı performans.** Öğrenciler, alan genellemesi inşa etmek yerine YZ aracının özgün imkânlarına göre optimize edebilir ([[prompt-engineering|istek metni mühendisliği]], üretilen kod yapısına bel bağlama) — üretken görünen ama kalıcı öğrenmeyi yerinden eden bir [[cognitive-offloading-speedup-illusion|bilişsel dış kaynaklığa yükleme]] biçimi.

Korumalı bir sınıf da yanlış alışkanlık öğretebilir: [[shi-genai-experiential-learning-management-education-2026|Shi, Dai ve Zhang (2026)]], kuralları önceden sabitlenmiş simülasyonların belirsizliği süzerek kurala uymayı pekiştirdiğini; bu nedenle içinde oluşan karar alışkanlıklarının, öğrenciler gerçek ortamlarda çatışan çıkarlar ve eksik bilgiyle karşılaştığında bilişsel bir yük haline gelebileceğini uyarır.
**Katmana duyarlı dış kaynaklığa yükleme ve aktarım.** [[layer-sensitive-cognitive-offloading-writing-2026|Chen (2026)]], Salomon, Perkins ve Globerson’ın "teknolojinin içindeki etkiler ile onun etkisi" ayrımını [[generative-ai|GenAI]] destekli yazmada doğrudan test eder: sekiz haftalık bir yarı-deneysel çalışma, açık YZ işbirliğinin desteklenen yazma performansını en üst düzeye çıkardığını ama YZ’siz bağımsız yakın aktarım sonuçlarını en *düşük* düzeyde bıraktığını; yansımayla sınırlandırılmış desteğin ise bağımsız yetkinliği koruduğunu bulmuştur. Daha derin dış kaynaklığa yükleme katmanları (muhakeme, yapı) yüzeysel katmanlardan (dilbilgisi) daha kötü aktarımı öngörmüştür. Bu, YZ’nin *içindeki* destek performans kazanımlarının *onun etkisi* bağımsız performansa aktarılmadığına ilişkin doğrudan sınıf kanıtıdır — ve aktarımı şekillendiren şeyin YZ kullanılıp kullanılmadığı değil, devrin derinliği olduğunu gösterir.

Tamamlayıcı, karışık gibi görünen bir örnek [[physics-education|fizik]] alanından gelir: Bochum Ruhr Üniversitesi’nin giriş düzeyi nükleer ve parçacık fizik kursunun yeniden tasarımında ([[ai-particle-physics-education-redesign-2026|Mikhasenko ve ark., 2026]]) öğrenciler işbirlikçi, kaynak zengini araştırma problemlerini YZ desteğiyle başarıyla tamamlamış; ancak aynı öğrenciler geleneksel yardımsız bir yazılı sınavda 80 üzerinden ortalama 20,6 almış ve ciddi çaba gösteren birkaçı standart hesaplamaları tamamlayamamıştır. Yazarlar bunu, yardımlı performansın kendiliğinden istenmeyen performansa aktarılmadığına ilişkin kanıt olarak okur ve çözümlerini bilinçli tasarımdır: yazılı sınavı tek not belirleyici yapmak, çözümlü problemleri önceden yayımlamak ki sınıf zamanı hazırlıklı tartışmaya dönüşsün ve keşif amaçlı YZ’ye izin verilen çalışmanın çevresine ön koşul hazırlığı, çözümlü örnekler ve pekiştirme eklemek.

## Olumlu aktarımı destekleyen koşullar

Sınırlı kanıt, aktarımın şu durumlarda mümkün olduğunu düşündürür:

- **Pedagojik koruyucu raylar vardır** — adım adım ipuçları, [[misconceptions|yanlış kanı]] hedefleme, [[socratic-method|Sokratik sorgulama]] (Bastani ve ark., 2025 öğreticilik varyantı)
- **Geleneksel stratejiler korunur** — YZ kullanımıyla eşlenen not tutma tutmayı iyileştirmiştir (Kreijkes ve ark., 2026)
- **YZ, [[summative-assessment|toplayıcı]] değil [[formative-assessment|biçimlendirici]] pratik için kullanılır** — değerlendirme sırasında değil, öğrenme sırasında iskeleleme
- **Pratik biçimi, aktarılan bilgiyle eşleşir.** [[rachatasumrit-example-problem-ratio-2026|Rachatasumrit, Koedinger ve Carvalho (2025)]], hatırlama pratiği kazanımlarının sıklıkla tanıdık olmayan problemlere aktarılamadığını — bir prosedürün belleğini güçlendirdikleri ama yeni bağlamlarda kullanımını mümkün kılmadıklarını — ve yeni uygulamalara kalıcı genelleşmenin pratiği beceri çıkarımını destekleyen çözümlü örneklerle eşlemeyi gerektirdiğini bulur; dolayısıyla en uygun örnek–problem oranı, içeriğin sözümona bir bilgi mi yoksa genelleştirilebilir bir beceri mi olduğuna bağlıdır.
- **Öğrenen uzmanlığı kalibre edilir** — araç, varsayılan olarak tam desteğe dönmek yerine desteği hazırbulunuşluğa uyarlar

- **Öğrenmeyi yardımdan ayıran ölçüt olarak aktarım.** [[yan-agentivism-learning-theory-ai-2026|Yan ve Gašević (2026)]], insan–YZ öğrenme kuramlarını azalan destek altında aktarım etrafında kurar: yardımlı performans, yalnızca destek geri çekildiğinde yetenek sürdüyorsa öğrenme sayılır; bu da aktarımı birçok sonuçtan biri değil, test haline getirir. Önermeleri yöneldir: YZ destekli çalışma sırasında kaynak denetimi veya gerekçelendirme istemek gecikmiş performansı iyileştirmeli, yeniden yapılandırma olmadan tekrarlanan düşük sürtüşmeli devir ise öğrenenlerin kendi yetkinliklerine ilişkin kalibrasyonunu zayıflatmalıdır.
- **Rehberlik işle eş konumdadır.** Yukarıdaki tablodaki olumsuz aktarım örüntüsüne karşın, 36 katılımcılı bir karşılaştırmada masa robotu tarafından desteklenen öğrenenlerin yardım geri çekildiğinde puanlarını 10 üzerinden 7,0 düzeyinde tutarken, ChatGPT destekli öğrencilerin 10 üzerinden 4,4’e düştüğü görülmüştür; %60 daha yüksek bir kısa dönem aktarım puanı ([[aifred-desk-robotic-ai-guidance-2026|Orlando ve ark. (2026)]]). Sonuç, görevden yaklaşık 35 dakika sonra ölçülen kısa dönem aktarımdır; gecikmiş tutum testi yoktur ve tek bir kampüste 36 katılımcıyla yürütülmüştür.

Bu, pedagojik koruyucu raylara sahip öğreticiliğe özgü araçların genel amaçlı [[conversational-ai|sohbet robotlarını]] geride bıraktığını gösteren [[intelligent-tutoring|YZ Öğreticilik]] araştırmasıyla ve yetkinlik arttıkça desteği söndürmeye ilişkin [[scaffolding]] ilkeleriyle uyumludur.

### Yanıtsız sorular

1. **Zaman ölçeği:** Aktarım haftalar/aylar süren kullanımla iyileşir mi, yoksa bağımlılık derinleşir mi?
2. **Alan farkları:** Aktarım iyi yapılandırılmış alanlarda (matematik) mi kötü yapılandırılmış alanlara (yazma) göre daha mı iyi?
3. **Bireysel farklar:** Yüksek [[prior-knowledge]] sahip öğrenciler acemilere göre daha az aktarım kaybı mı yaşar?
4. **Beceri düzeltme:** Açık "YZ-kapalı" pratik seansları araç bağımlılığını tersine çevirebilir mi?

### İlgili kavramlarla bağlantılar

Öğrenmenin aktarımı [[metacognition]] (anlayışın öz izlenmesi), Bilişsel Yük Kuramıyla (üretken ve dışsal yük), [[desirable-difficulties]] (üretken zorlanma), [[scaffolding]] (sönen destek), [[cognitive-offloading|Aşırı Bel Bağlamayla]] (araca bağımlılık) ve [[sociocultural-learning]] (genel amaçlı YZ’nin öğrenciler için işi tamamlayarak GYÇ’nin dışında işlemesi) bağlantılıdır. Yardımlı performans ile gerçek öğrenme arasındaki köprüdür — [[stanford-evidence-base-ai-k12-2026]] ile [[intelligent-tutoring|YZ Öğreticilik]] etkililiği için merkezî soru arasındaki ayrım.

## Bağlı kavramlar

- [[pedagogical-patterns]] — Bu dizilerin çoğunun nihayetinde yargılandığı sonuç
- [[metacognition]]
- [[desirable-difficulties]]
- [[cognitive-offloading]]
- [[scaffolding]]
- [[sociocultural-learning]]
- [[intelligent-tutoring]]
- [[k-12]]
- [[self-regulated-learning]]
- [[learning-theories]]
- [[productive-failure]] — Üretken Başarısızlık

## Bağlı makaleler
- [[yan-agentivism-learning-theory-ai-2026]] — Dört mekanizma ve altı sınanabilir önermiyle insan–YZ etkileşimi için orta düzey bir öğrenme kuramı (Yan ve Gašević 2026)

- [[layer-sensitive-cognitive-offloading-writing-2026]] — GenAI destekli yazmada katmana duyarlı bilişsel dış kaynaklığa yükleme (Chen 2026)
- [[stanford-evidence-base-ai-k12-2026]]
- [[educational-llm-alignment]]
- [[cognitive-offloading-speedup-illusion]]
- [[vibe-compiler-metacognition-genai-agency-2026]]
- [[learnity-graphs-lifelong-learning-framework-2026]]
- [[young-people-learning-generative-ai-rapid-review-2026]] — Performans–öğrenme ayrımı ve kalıcı aktarım
- [[puech-pedagogical-steering-llm-productive-failure-2025]] — Üretken Başarısızlık için LLM’lerin Pedagojik Yönlendirilmesi
- [[rachatasumrit-example-problem-ratio-2026]]
- [[ai-particle-physics-education-redesign-2026]] — Parçacık Fiziki Eğitiminde YZ: Araştırma Problemleri ve Temel Beceriler
- [[shi-genai-experiential-learning-management-education-2026]] — korumalı sınıf simülasyonlarının dışarısında başarısız olan karar alışkanlıkları oluşturabileceğini savunur

- [[ai-speaking-practice-communicative-readiness-2026]] — YZ destekli konuşma pratiği insanlara yönelik isteği yükseltmiş ama hiçbir çalışma insan konuşmasını gözlemlememiştir
- [[aifred-desk-robotic-ai-guidance-2026]] — AIfred: Masa Başında İşlevsel Robotik Gömülmeyle Geliştirilmiş Öğrenme