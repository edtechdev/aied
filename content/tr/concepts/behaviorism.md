---
title: Davranışçılık
created: "2026-10-14T22:00:00-04:00"
type: concept
foundations: [learning-design]
pedagogy: [behaviorism, learning-theories]
technology: [adaptive-learning, generative-ai, intelligent-tutoring]
level: [higher ed]
confidence: medium
translation_of: concepts/behaviorism
source_updated: "2026-09-28T21:37:06-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Davranışçılık** — öğrenmeyi, içsel zihinsel durumlardaki değişimden ziyade uyaran–tepki ilişkilendirmeleri ve pekiştirme tarafından üretilen gözlemlenebilir davranıştaki değişim olarak ele alan öğrenme kuramı. [[ai-education|Eğitimde yapay zeka]] alanında davranışçı ilkeler, birçok [[intelligent-tutoring]] ve [[adaptive-learning]] sisteminde baskın olan tekrara dayalı uygulama, anlık geri bildirim ve uyarlanabilir ilerleme düzenlemelerinin temelini oluşturur.([[ai-vocational-education-training-review]])

## Düşünülmesi Gerekenler

- Davranışçılık, öğrenmeyi içsel zihinsel durumların değil, uyaran–tepki ve pekiştirme tarafından yönlendirilen gözlemlenebilir davranıştaki değişim olarak ele alır. Okumadan önce: geçmişinizdeki hangi eğitim deneyimleri ödül, tekrar ve anlık geri bildirim üzerine kuruluydu? Bunlar nelerde başarılı oldu, neleri gözden kaçırmış olabilir?
- Bu sayfadaki şaşırtıcı bir bulgu şudur: eğitim söylemi zengin yapılandırmacı kuramları savunduğu hallerde bile gerçek YZ uygulamaları ağırlıklı olarak davranışçıdır — tekrara dayalı uygulama, anlık geri bildirim, uyarlanabilir ilerleme. Kuramda modası geçmiş olmasına rağmen davranışçı mekanizmaların uygulamada neden baskın olduğunu düşünüyorsunuz?
- Sayfa, yapay zekâyı insan öğretimini kopyalamak için değil onu güçlendirmek için kullanma anlamına gelen bir eğitimsel “Turing Tuzağı” konusunda uyarıyor. Bir YZ sistemi doğru yanıtlar ve verimlilik için iyileştirme yapıyorsa, bir öğrenenin etkin bilgi inşasında sessizce neyi iyileştirme dışı bırakabilir?
- Davranışçı tasarımlar temel akıcılık — sözcük dağarcığı, aritmetik, kod sözdizimi — için güçlü ama tek başına yüksek düzeyli, kavramsal veya etken öğrenme için yetersiz olarak tanımlanır. Kendi öğrenmenizin neresinde tekrara dayalı bir YZ yardımcı olur, neresinde açıkça zarar verirdi?
- Sorulan tasarım sorusu davranışçılığın “doğru” olup olmadığı değil, belirli bir sistemin mekanizmalarının öğrenme hedefine hizmet edip etmediğidir. Bir YZ öğretmeninin anlık geri bildirimli, uyarlanabilir ilerlemeli tasarımının gerçekten aktarılabilir bir anlayış mı inşa ettiğini yoksa sadece gözlemlenebilir performansı iyi mi gösterdiğini nasıl anlarsınız?

## Giriş

Davranışçılık, öğrenmenin pekiştirme yoluyla uyaran–tepki bağlantılarının güçlenmesi veya zayıflaması olduğunu ve gözlemlenemeyen zihinsel yapıların öğrenmenin zayıf açıklamaları olduğunu ileri sürer. Eğitimdeki uygulamalı mirası **programlı öğretim ve tekrara dayalı uygulamadır**: içeriği küçük adımlarla sunmak, bir yanıt ortaya çıkarmak ve doğru yanıtları hemen pekiştirmek. Bu ilkeler, ilerlemeyi ve zorluğu öğrenci yanıtlarına göre uyarlayan ve anlık geri bildirim sağlayan [[adaptive-learning]] ve [[intelligent-tutoring]] sistemlerinin mekanizmalarıyla doğrudan örtüşür.

## Temel fikirler

- **Öğrenme davranışsal değişimdir.** Hedef, ölçülebilir bir performans değişimidir, içselleştirilmiş bir anlayış değil. Bu durum davranışçı tasarımları akıcılık, hız ve doğruluk gibi gözlemlenebilir kazanımlar için doğal kılar.
- **Pekiştirme öğrenmeyi yönlendirir.** Doğru yanıtlar pekiştirilir, hatalar düzeltilir; genellikle anlık geri bildirimle — YZ öğretmenlik ve tekrar sistemlerinde her yerde bulunan bir tasarım kalıbı.([[ai-vocational-education-training-review]])
- **Küçük adımlar ve ilerlemeyle iskeleleme.** Öğretim, her adımda geri bildirimle artımlı birimlere bölünür; bu, uyarlanabilir sistemlerin alıştırmaları sıralama biçimine benzerdir.
- **Öğrenen bilgi inşasında büyük ölçüde pasiftir.** Çevre (ya da sistem) yanıtları yapılandırır ve ödüllendirir; öğrenen anlam kurmak yerine yanıt verir — [[constructivist]] varsayımların tam tersi.

## Davranışçılık ve eğitimde yapay zeka

### Davranışçı tasarımlar uygulamada baskındır

Ampirik çalışmalar sürekli olarak, söylem zengin kuramlar savunduğu durumlarda bile gerçek YZ uygulamalarının ağırlıklı olarak **davranışçı veya bilişsel odaklı** olduğunu — tekrara dayalı uygulama, anlık [[feedback]] ve uyarlanabilir ilerlemeyi öne çıkardığını — bulur. Mesleki eğitim ve öğretim (VET) alanında yapay zekâya ilişkin bir [[meta-analysis-systematic-review|sistematik derleme]], yapılandırmacı kuramların VET söyleminde savunulduğu sonucuna varmış, oysa **uygulamada davranışçı YZ uygulamaları baskındır** ve yapay zekâyı insan öğretimini kopyalamak için değil onu güçlendirmek için kullanma anlamına gelen bir eğitimsel “Turing Tuzağı” konusunda uyarmıştır.([[ai-vocational-education-training-review]])

### Çıktı eşdeğerliği: davranış artık öğrenmeyi doğrulamadığında

Davranışçılık öğrenmeyi gözlemlenebilir davranıştaki bir değişim olarak tanımlar; bu, onu üretici yapay zekânın en doğrudan utandırdığı kuram yapar: bir öğrenen artık, ürettiği eserin belgelediği varsayılan yetkinliğe sahip birinin işinden ayırt edilemeyen bir kompozisyon, bir analiz veya çalışan bir kod üretebilir. Gözlemlenebilir davranış özdeşken öğrenme gerçekleşmemiş olabilir; [[generativism-learning-theory|Üreticilik]] kuramının davranışsal eşdeğerlik sorunu olarak adlandırdığı bir başarısızlık biçimidir.

Performans ile öğrenme arasındaki uçurum yeni değildir, ancak yapay zeka onu genişletir. Bin yakın lise öğrencisinin yer aldığı bir saha deneyinde, standart bir asistana sınırsız erişim alıştırma performansını yüzde 48 artırırken, aynı öğrenciler ileride YZ kullanmadan alıştırma yapan akranlarına kıyasla yardımsız bir sınavda yüzde 17 daha düşük puan aldı; korumalı bir öğretmen sürümü bu eksiği büyük ölçüde giderdi ([[genai-performance-vs-learning]]). Davranışsal açıdan okunduğunda ders, pedagoji değil ölçümle ilgilidir: çıktı için iyileştirme yapan bir sistem, kuramın kendi öğrenme ölçütünü karşılarken amacında başarısız olabilir.

### Yapılandırmacılık ve etkenlik ile gerginlik

Tepki-ve-pekiştirme vurgusu, [[constructivist]], [[self-regulated-learning]] ve [[agency]] hedefleriyle doğrudan gerginlik içindedir. YZ sistemleri doğru yanıtlar ve verimlilik için iyileştirme yaptığında, öğrenenin etkin bilgi inşasına, eleştirel yansımasına ve özerk karar vermesine yetersiz hizmet edebilir. Bu, [[constructivist]] “isminde yapılandırmacı, uygulamasında davranışçı” kalıbında da işaret edilen aynı açıktır — ve yapay zekânın bilişsel işi öğrenciler için yaptığı durumlarda davranışçılığı [[cognitive-offloading]] ve [[cognitive-offloading|Aşırı Bağımlılık]] tartışmalarına bağlar.

### Davranışçı tasarımların hâlâ uygun olduğu yerler

Davranışçı ilkeler şu durumlar için uygun olmaya devam eder:

- **Temel beceri ve akıcılık oluşturma** — tekrar ve anlık geri bildirimin ölçülebilir biçimde otomasyonu artırdığı yerler (örneğin sözcük dağarcığı, aritmetik, kod sözdizimi).
- **[[adaptive-learning]] ve [[intelligent-tutoring]]** — adım adım alıştırma, yanıta dayalı ilerleme ve anlık geri bildirime dayananlar.([[ai-vocational-education-training-review]])
- **İyi tanımlanmış alanlarda düşük riskli [[formative-assessment]]** ve tekrar — hedef kazanımın gözlemlenebilir olduğu ve ona giden yolun büyük ölçüde prosedürel olduğu yerler.

Tasarım sorusu davranışçılığın “doğru” olup olmadığı değil, belirli bir YZ sisteminin davranışçı mekanizmalarının *öğrenme hedefine* hizmet edip etmediğidir — prosedürel akıcılık için güçlü olabilirler; yüksek düzeyli, kavramsal veya etken öğrenme için tek başına yetersizdirler.

## Davranışçılık ve “yapay zeka hakkında eğitim”

Davranışçılık, öğrenenlerin yapay zekâyı bir konu olarak karşılaması biçiminde de görülür. Kuram, [[generative-ai|üretici yapay zekâ]]nın eğitimcileri yeniden ele almaya yönelttiği dört baskın [[learning-theories|öğrenme kuramı]]ndan biridir — davranışçılık, bilişselcilik, yapılandırmacılık ve bağlantıcılık.([[generativism-learning-theory]]) Ayrıca işbirlikçi öğrenme ve tasarım bağlamlarında, öğrenenlere öğretilen kuramsal zeminin parçası olarak atıfta bulunulur.([[ccct-cooperative-learning-technique]]) Davranışçılığı anlamak, öğrenenlerin pek çok YZ aracının (ve bunlar üzerine kurulu ürünlerin) neden tepki-ve-pekiştirme için tasarlandığını, daha derin inşa için değil, görmelerini sağlar.

## Tasarım ve araştırma için çıkarımlar

1. **Mekanizmaları hedeflerle eşleştirin.** Davranışçı tekrar-ve-geri bildirim tasarımları prosedürel akıcılığa ve gözlemlenebilir kazanımlara uygundur; tek başına kavramsal, aktarılabilir veya etken öğrenme hedefleri için zayıf bir uyumdur.
2. **Kuram–uygulama uçurumunu izleyin.** Araştırmacılar, bir YZ uygulamasının davranışçı mekanizmalarının savunulan öğrenme hedefine hizmet edip etmediğini yoksa yapay zekânın bir cevap makinesi olarak “Turing Tuzağı”nı sessizce mi tekrarladığını denetlemelidir.([[ai-vocational-education-training-review]])
3. **Davranışçılığı daha zengin iskelelemelerle eşleştirin.** Anlık geri bildirimli tasarımlar, saf tekrar olarak tek başına durmaktansa daha geniş bir [[scaffolding]] ve [[self-regulated-learning]] bağlamına gömüldüğünde en etkilidir.
4. **Gözlemlenebilir *ve* aktarılabilir kazanımları değerlendirin.** Davranışçı başarı ölçütleri (hız, doğruluk), öğrenmenin aktarılıp genelleşip genelleşmediğine ilişkin ölçülerle — [[transfer-of-learning]] ve [[research-methods-aied]] çerçevesinde — tamamlanmalıdır.

## Bağlı kavramlar

- [[constructivist]]
- [[cognitive-psychology]] — Bilişselcilik, öğrenme kuramının üçüncü klasik kutbu
- [[learning-design]]
- [[adaptive-learning]]
- [[intelligent-tutoring]]
- [[feedback]]
- [[formative-assessment]]
- [[self-regulated-learning]]
- [[agency]]
- [[cognitive-offloading]]
- [[learning-theories]]

## Bağlı makaleler

- [[ai-vocational-education-training-review]] — Savunulan yapılandırmacılığa rağmen davranışçı YZ tasarımları VET uygulamasında baskındır; “Turing Tuzağı”
- [[generativism-learning-theory]] — Üretici yapay zekânın yeniden düşünülmesini istediği dört baskın kuramdan biri olarak davranışçılık
- [[ccct-cooperative-learning-technique]] — Yükseköğretimde işbirlikçi öğrenme tasarımında atıfta bulunulan davranışçılık
- [[wang-multi-agent-systems-learning-designers-2025]] — İşbirlikçi çok etmenli tasarım yaklaşımları arasında davranışçı bir persona
