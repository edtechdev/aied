/**
 * Ana sayfa metni, dile göre. Her yerel modül aynı anahtarları dışa aktarır,
 * böylece sayfa bileşeni (`src/components/pages/HomePage.astro`) herhangi bir
 * dili dallanma olmadan görüntüler.
 */
import type { HomeStrings } from './home.en';

const tr: HomeStrings = {
  title: 'Ana sayfa',
  h1: 'Eğitimde Yapay Zeka Bilgi Tabanı',
  introHtml: `Eğitimde Yapay Zeka Bilgi Tabanı’na hoş geldiniz; öğreten, öğrenen, tasarlayan veya yöneten herkes için <a href="/aied/concepts/ai-education/">eğitimde yapay zeka</a> üzerine ücretsiz, kamu malı bir kaynak. Son açık erişimli eğitim araştırmalarını özetler ve sentezler. Sayfaları, site geliştiricisinin editoryal rehberliğinde bir YZ aracısı yazar ve günceller.`,
  navHeading: 'Siteyi gezinmek',
  navHtml: `Sol kenar çubuğundaki, alanlara göre düzenlenmiş dizine göz atın veya bir konu için <a href="/aied/search">arama</a> yapın. Makale sayfaları bir makaleyi amacına, yöntemlerine ve bulgularına indirger; kavram sayfaları bir fikir üzerine araştırmanın ne söylediğini toplar ve arkasındaki çalışmalara bağlantı verir. Bir sorudan başlamak isterseniz, <a href="/aied/faq">SSS</a> ziyaretçilerin önce sorduğu soruları kapsar; örneğin kurs YZ politikası veya YZ dedektörlerinin kullanılıp kullanılmayacağı. Bir araçtan başlamak isterseniz, <a href="/aied/resources">kaynaklar sayfası</a> ücretsiz araçları ve koleksiyonları listeler; her birinin kim tarafından yapıldığını ve maliyetini belirtir. Yukarıdaki harita alanı on iki dala ayırır ve merkezde <a href="/aied/concepts/ai-education/">Eğitimde Yapay Zeka</a> yer alır.`,
  chatHeading: 'Bilgi tabanıyla sohbet edin',
  chatHtml: `Bilgi tabanının tamamı makine tarafından okunabilir dosyalar olarak da yayınlanır, böylece bir YZ sohbet robotunu veya aracısını ona yönlendirebilir ve sayfaları atıflayan yanıtlar alabilirsiniz. <a href="/aied/ai">İstek metinleri burada</a>. Yeni sayfalar <a href="/aied/journal">günlüğe</a> girer; günlükte bir <a href="/aied/rss.xml">RSS beslemesi</a> vardır. Çevrimdışı okumak için <a href="/aied/aied.epub">EPUB</a> veya <a href="/aied/aied.pdf">PDF</a> dosyasını indirin.`,
  startingHeading: 'Kitleye göre önerilen başlangıç noktaları',
  startingIntro: 'Rolünüze uyan grupla başlayın.',
  groups: [
    {
      id: 'essential-concepts',
      heading: 'Temel kavramlar',
      html: `<a href="/aied/concepts/ai-literacy/">YZ okuryazarlığı</a>, <a href="/aied/concepts/misconceptions/">YZ hakkındaki yanlış kanılar</a>, <a href="/aied/concepts/agentic-ai/">etken YZ</a>, <a href="/aied/concepts/cognitive-offloading/">bilişsel yük boşaltma</a> ve <a href="/aied/concepts/interpreting-and-applying-aied-research/">bu araştırmayı nasıl yorumlayıp uygularsınız</a>, tek bir çalışmanın bir soruyu neden nadiren çözdüğü de dahil.`,
    },
    {
      id: 'instructors',
      heading: 'Öğretmenler',
      html: `<a href="/aied/concepts/teacher-role/">Değişen öğretmen rolü</a>, <a href="/aied/concepts/learning-design/">öğrenme tasarımı</a>, <a href="/aied/concepts/assessment/">değerlendirme</a>, <a href="/aied/concepts/feedback/">geri bildirim</a>, <a href="/aied/concepts/academic-integrity/">akademik dürüstlük</a>, <a href="/aied/concepts/framing-ai-use-for-students/">YZ kullanımını çerçevelemek</a> ve <a href="/aied/concepts/reducing-ai-misuse/">kötüye kullanımı azaltmak</a>. Dersinize özgü araçlar ve örnekler için <a href="/aied/concepts/discipline-specific-aied/">kendi disiplininizde YZ</a>’ye bakın.`,
    },
    {
      id: 'developers',
      heading: 'Geliştiriciler',
      html: `<a href="/aied/concepts/educational-technology-developers/">Eğitim için geliştirmek</a>, <a href="/aied/concepts/ai-technologies/">alttaki teknolojiler</a>, <a href="/aied/concepts/intelligent-tutoring/">akıllı özel ders</a>, <a href="/aied/concepts/multimodal/">çok kipli YZ</a>, <a href="/aied/concepts/student-modeling/">öğrenen modelleme</a> ve <a href="/aied/concepts/llm-training-and-fine-tuning/">öğretim için bir modeli eğitmek ve uyarlamak</a>.`,
    },
    {
      id: 'administrators',
      heading: 'Yöneticiler',
      html: `<a href="/aied/concepts/administrator/">Yönetici rolü</a>, <a href="/aied/concepts/governance/">YZ yönetişimi</a>, <a href="/aied/concepts/educational-policy-ai/">kurumsal politika</a>, <a href="/aied/concepts/legal-issues-and-risks/">hukuki konular ve riskler</a> ve <a href="/aied/concepts/change-management/">değişim yönetimi</a>.`,
    },
    {
      id: 'researchers',
      heading: 'Araştırmacılar',
      html: `<a href="/aied/concepts/research-methods-aied/">AIED’de araştırma yöntemleri</a>, <a href="/aied/concepts/theories-and-frameworks/">teoriler ve çerçeveler</a>, <a href="/aied/concepts/ai-ed-evaluation/">bir eğitim YZ müdahalesini değerlendirmek</a>, <a href="/aied/concepts/educational-measurement/">eğitimsel ölçme</a>, <a href="/aied/concepts/learning-gains/">öğrenme kazanımlarını ölçmek</a> ve <a href="/aied/concepts/limitations-in-aied-research/">bu kanıt tabanının çapraz sınırları</a>.`,
    },
  ],
  statsHeading: 'Bilgi tabanında ne var',
  statsIntro:
    'Her sayfa tarihlidir ve aşağıdaki sayılar şu anda yayınlanmış olanı yansıtır; listenin sonundaki "son güncelleme" tarihi en son düzenlemedir.',
  conceptMap: {
    title: 'Eğitimde Yapay Zeka kavram haritası',
    desc:
      'Merkezde Eğitimde Yapay Zeka’nın bulunduğu, on iki birinci düzey kavrama bağlı radyal bir harita: ' +
      'modelleme, öğrenme, eşitlik, geri bildirim, YZ okuryazarlığı, değerlendirme, disiplinler, ' +
      'pedagoji, etik, teknolojiler, değerlendirme ve araştırma.',
    navLabel: 'Eğitimde Yapay Zeka kavramları',
    center: 'Eğitimde Yapay Zeka',
    nodes: {
      'student-modeling': 'Modelleme',
      'learning-theories': 'Öğrenme',
      'equity-in-ai-education': 'Eşitlik',
      feedback: 'Geri bildirim',
      'ai-literacy': 'YZ Okuryazarlığı',
      assessment: 'Değerlendirme',
      'discipline-specific-aied': 'Disiplinler',
      pedagogy: 'Pedagoji',
      ethics: 'Etik',
      'ai-technologies': 'Teknolojiler',
      'ai-ed-evaluation': 'Değerlendirme',
      'research-methods-aied': 'Araştırma',
    },
  },
  toc: [
    { text: 'Siteyi gezinmek', slug: 'navigating-the-site', depth: 2 },
    { text: 'Bilgi tabanıyla sohbet edin', slug: 'chat-with-the-knowledge-base', depth: 2 },
    { text: 'Kitleye göre önerilen başlangıç noktaları', slug: 'starting-points', depth: 2 },
    { text: 'Temel kavramlar', slug: 'essential-concepts', depth: 3 },
    { text: 'Öğretmenler', slug: 'instructors', depth: 3 },
    { text: 'Geliştiriciler', slug: 'developers', depth: 3 },
    { text: 'Yöneticiler', slug: 'administrators', depth: 3 },
    { text: 'Araştırmacılar', slug: 'researchers', depth: 3 },
    { text: 'Bilgi tabanında ne var', slug: 'whats-in-the-knowledge-base', depth: 2 },
  ],
};

export default tr;
