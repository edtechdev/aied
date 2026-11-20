---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Öğretmenin modelin rolünü ve öğrenci kullanımı üzerindeki kapıları belirlediği ve öğrenci kimliğinin modelin bağlamı dışında tutulduğu adım adım YZ ödevleri oluşturmak için bir web uygulaması."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
connected_concepts: [learning-design, guardrails, ai-use-disclosure]
---
*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

YZ ile bütünleşik ödevler için bir oluşturucu; Oregon State University'de Joseph Slade tarafından geliştirildi ve AI Education Labs, Inc. tarafından işletiliyor. Temel düşünce şu: Sınırsız chatbot kullanımının alternatifi yasak değil, yapıdır: Öğretmen öğrencinin ilerlediği adımları tanımlar, modelin her adımda hangi rolü oynayacağına karar verir ve öğrencinin ona ne kadar yaslanabileceğini belirler. Ödev daha sonra bir prompt belgesi olarak dağıtılmak yerine bir katılım bağlantısı olarak yayımlanır.

## Bu kaynakla neler yapılabilir

- **Her ödev için modelin rolünü belirleyin.** Oluşturucu; özel ders öğretmeni, Sokratik sorgulayıcı, geri bildirim sağlayıcı ve araştırma asistanı ön ayarlarının yanı sıra özel bir prompt sunar; böylece asistan, görevin gerektirdiği şekilde davranır.
- **Adımlar arasına kapılar koyun.** Bir adım, öğrencinin ilerlemeden önce akıl yürütmesini açıklamasını gerektirebilir ve YZ yardımı her adım için sınırlandırılabilir — arayüz, sınırsız erişim yerine kalan sayıyı gösterir.
- **Çalışma yüzeyini seçin.** Öğrenciler, kenar boşluğunda yorumlar bulunan bir belge sayfasında yazar; sohbet ve defter düzenleri ise göreve sayfadan daha iyi uydukları durumlarda kullanılabilir.
- **Yayımlayın ve yalnızca çıktıyı değil, akıl yürütmeyi izleyin.** Katılım bağlantısı öğrencileri kaydeder, ilerleme öğrenciler çalıştıkça kaydedilir ve öğretmen her öğrencinin transkriptini okuyup CSV veya Markdown olarak dışa aktarabilir.
- **YZ ile taslak oluşturun, sonra iyileştirin.** Kurulum birkaç sorudan, yüklenmiş mevcut bir ödevden veya önceki bir ödevden başlayabilir; öğretmen tarafındaki asistan ilk taslağı doldurur.

Yayımlanan örnekler amaçlanan yelpazeyi gösteriyor: fizikte kanıt ve tanıklık üzerine bir görev, bir YZ stajyerinin açıklamasındaki akıl yürütme hatasını teşhis eden bir biyoloji alıştırması ve bir haberin bir çalışmanın tasarımını anlatıp anlatmadığını kontrol eden bir psikoloji görevi.

## Kimler için

YZ politikasını [[learning-design|öğrenme tasarımının]] taşımasını isteyen yükseköğretimdeki öğretmenler — yani bir modelin görev içinde nasıl kullanılabileceğini sınırlamayı, kullanılıp kullanılmadığını denetlemeye tercih edenler. Kapılar ve rol ayarları, [[guardrails|güvenlik raylarının]] tasarım aşamasındaki ifadesidir ve uygulama, kurumsal sohbet dağıtımından çok ders içi çalışmalara yöneliktir.

## Notlar ve uyarılar

- **Pilot aşaması.** Koşullar, hizmetin şu anda pilot uygulamalar için ücretsiz sunulduğunu, ücretli planların bildirim yapılarak kullanıma sokulabileceğini ve özelliklerin değişebileceğini veya geri çekilebileceğini belirtir. Herkese açık bir fiyatlandırma sayfası yoktur; fiyatlandırmaya yalnızca oturum açtıktan sonra ulaşırsınız.
- **Gizlilik iddiası mimaridir ve dikkatle okunmaya değer.** Her öğrenci her ödev için rastgele bir oturum tanımlayıcısı alır, öğrenci hesabı ile oturum arasındaki eşleme Repertoire sunucusunda kalır ve model anonim oturumu, ödev bağlamını ve öğrencinin yazdıklarını alır. Çekince politikanın kendisindedir: öğrencinin yazdığı ve kimliğini belli eden metin, diğer her metin gibi gönderilir ve dersin öğretmeni transkriptleri okuyabilir.
- **Üçüncü taraf çıkarımı.** Yanıtlar, Anthropic'in Claude API'si üzerinden, yedek olarak OpenAI'ın API'si ile üretilir; politika, bu ticari koşulların Eylül 2026 itibarıyla API girdileri ve çıktıları üzerinde eğitimi hariç tuttuğunu söyler. Bir kurum bunu bir web sayfası yerine kendi sözleşmesi üzerinden doğrulamalıdır.
- **Bir notlandırıcı değildir.** Politika ve koşulların ikisi de "hedef karşılandı" gibi asistan yargılarını öğretmene yardımcı olarak tanımlar; notlar ve akademik kararlar öğretmende ve kurumda kalır ve öğrencilere [[ai-use-disclosure|YZ kullanımının açıklanması]] hakkındaki kararlar öğretmene bırakılır.
- **ABD'de barındırılıyor.** Veriler, Vercel barındırmasıyla Google Cloud Firestore'da durur ve politika, hizmetin eğitim kayıtlarını işlediği yerlerde FERPA yükümlülüklerini ele alır; Amerika Birleşik Devletleri dışındaki kullanıcılara verilerinin orada işlendiği bildirilir.
