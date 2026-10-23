/**
 * "Bu bilgi tabanını kendi YZ asistanınızla kullanın" sayfasının metni, dile
 * göre. Kopyalanabilir istek metni içeriğin parçasıdır (sayfanın ana
 * teslimidir), bu nedenle çevrilir; içindeki URL’ler ve dosya adları asla
 * değişmez.
 */
import type { AiStrings } from './ai.en';

const PROMPT = `Eğitimde yapay zeka konusunda bir araştırma asistanısın. Birincil kaynağın olarak Eğitimde Yapay Zeka Bilgi Tabanı’nı (https://edtechdev.github.io/aied/) kullan.

1. Okumadan önce yönlendir. https://edtechdev.github.io/aied/faq/ adresindeki SSS dizini, soruları onları yanıtlayan sayfalara eşler; "araştırma ne gösteriyor" türünden sorular dahil. https://edtechdev.github.io/aied/llms.txt adresindeki tam katalog {llmsSize}, https://edtechdev.github.io/aied/llms-concepts.txt adresindeki kavram-ve-SSS dosyası {llmsConceptsSize} ve llms-full.txt {llmsFullSize}; bu nedenle tamamını yüklemek yerine bunları ara veya parçalarını getir, ve tüm dosyanın getirilmesinin başarısız olması seni durdurmasın.

2. Her iddiayı bir sayfaya dayandır ve sayfa başlığı artı URL’si olarak atıf yap. Sayfa alttaki makalenin atıfını ve DOI’sini verdiğinde bunları ekle; bazı sayfalar yalnızca bir arXiv kimliği veya yayıncı URL’si atıf yapar, bu nedenle sayfanın verdiğini ver ve asla bir DOI, URL, yazar, sayı veya bulgu uydurma.

3. Tek bir sayfaya yaslanmak yerine sayfalar arasında sentezle. Kavram sayfaları genel bakışı verir ve arkasındaki makalelere bağlantı verir, bu nedenle o bağlantıları takip et. En alakalı sayfalardan üç ila beşini oku, aynı çalışmaları tekrar etmeye başladıklarında dur, ve neyi okumadığını söyle. Bilgi tabanı konuyu yalnızca komşu bir alanda ele alıyorsa bunu söyle ve analoji yoluyla yanıtla.

4. Kanıtın gücünü eşleştir. Yardım almayan performansı ölçen kontrollü veya randomize deneyler en güçlüdür, sonra yayın yanlılığı için düzeltilmiş meta-analizler, sonra derlemeler, sonra pilotlar, politika analizleri ve görüşler; küçük bir çalışma fikir birliği değildir. Etiketler, kitle, seviye ve güven derecelendirmeleri render edilmiş sayfada değil, her sayfanın Markdown kaynağında https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md adresindedir; bu nedenle kontrol edemezsen, makalenin çalışmayı nasıl tarif ettiğinden yargıla ve bunun yaptığın şey olduğunu söyle.

5. Sorunun istediği düzeyde yanıtla, ve en alakalı sayfaları ve SSS’leri önererek kapat.

"LLM" yerine "üretken YZ" terimini tercih et. Bilgi tabanı düzenli olarak güncellenir ve https://edtechdev.github.io/aied/journal/ adresindeki günlük sayfası en yeni eklemeleri listeler.

Örnek: "Araştırma öğrencilerin yazma konusunda YZ geri bildirimi hakkında ne diyor?" SSS dizinini kontrol et, en alakalı yazma ve geri bildirim sayfalarını ve atıf yaptıkları çalışmaları oku, sonra atıflar ve bağlantılarla yanıtla.`;

const tr: AiStrings = {
  title: 'Bu bilgi tabanını kendi YZ asistanınızla kullanın',
  description: 'Eğitimde Yapay Zeka Bilgi Tabanı’nı kendi sohbet robotunuz veya aracınızla kullanmak için kopyala-yapıştır istek metni.',
  h1: 'Bu bilgi tabanını kendi YZ asistanınızla kullanın',
  introHtml: `Herhangi bir YZ sohbet robotunu veya aracısını bu bilgi tabanına yönlendirin; kendi belleğinden değil, bu sayfalardan yanıt verir. Aşağıdaki istek metnini kopyalayın, asistanınıza ilk mesaj olarak yapıştırın, sonra sorunuzu sorun. İyi bir yanıt, kullandığı sayfaları adlandırır ve onlara bağlantı verir, böylece kaynakları kendiniz kontrol edebilirsiniz.`,
  intro2Html: `Kurulacak bir şey yok. İstek metnini atlamayı tercih ederseniz, <a href="#ready-made-assistants">hazır asistanlar</a> bu materyali zaten bilir.`,
  promptHeading: 'Kopyalanacak istek metni',
  promptIntro: 'Bunu sorunuzdan önce yapıştırın. Bir web sayfasını okuyabilen veya yapıştırılmış bir belge kabul edebilen herhangi bir sohbet robotu veya aracıyla çalışır. İstek metni kutunun gösterdiğinden uzundur; düğme tamamını kopyalar.',
  copyButton: '📋 İstek metnini panoya kopyala',
  copyHint: 'Sonra asistanınıza yapıştırın ve sorunuzu sorun.',
  copyOk: '✅ Kopyalandı!',
  copyFail: '❌ Kopyalama başarısız',
  promptAriaLabel: 'Kopyalanacak istek metni',
  promptText: PROMPT,
  howHeading: 'Nasıl kullanılır',
  howSteps: [
    '<strong>İstek metnini yukarıdaki düğmeyle kopyalayın</strong>.',
    '<strong>Asistanınıza ilk mesaj olarak yapıştırın</strong>. Genellikle anladığını söyleyerek yanıt verir.',
    '<strong>Sorunuzu düz dille sorun</strong>, örneğin "araştırma büyük sınıflarda YZ geri bildirimi hakkında ne diyor?" veya "YZ dedektörleri kullanmalı mıyız?"',
    '<strong>Bağlantıları kontrol edin.</strong> İyi bir yanıt kullandığı sayfaları adlandırır. Sayfa adı olmadan kendinden emin iddialar alırsanız, "bu hangi sayfadan geldi?" diye yanıtlayın ve tekrar denemesini isteyin.',
  ],
  howNoteHtml: `Bu, istek metni onları okumak üzere sayfalara yönlendirdiğinden, web’de gezinme yapabilen asistanlarda en iyi sonucu verir. Sizinki bağlantıları açamıyorsa, bilgi tabanının metnini de ekleyin: <a href="/aied/llms-full.txt">tam metin dosyasını bir kez indirin</a>, sohbete yükleyin veya yapıştırın ve istek metnini onunla birlikte kullanın. Tek bir metin dosyasıdır, {llmsFullSize} boyutundadır. Birçok sohbet ürünü bu boyuttaki bir dosyayı reddeder, bu nedenle <a href="/aied/llms-concepts.txt">llms-concepts.txt</a> de vardır; her kavram ve SSS sayfasının tamamı, {llmsConceptsSize} boyutunda. Önce ona başvurun: kavramlar araştırmanın ne gösterdiğinin sentezleridir, SSS’ler o sentezlerin yanıtladığı sorulardır ve her kavram sayfası arkasındaki makalelere bağlantı verir.`,
  techSummary: 'İstek metni yerine URL isteyen araçlar için teknik notlar',
  techItems: [
    '<a href="/aied/llms.txt">llms.txt</a>: okumadan önce bir siteyi indeksleyen araçlar için her sayfanın kataloğu, her biri bir satır',
    '<a href="/aied/llms-full.txt">llms-full.txt</a>: tek dosyada bilgi tabanının tam metni, {llmsFullSize}',
    '<a href="/aied/llms-concepts.txt">llms-concepts.txt</a>: kavram ve SSS sayfalarının tam metni, {llmsConceptsSize}, daha büyük dosyayı reddeden araçlar ve sohbetler için',
    '<a href="/aied/sitemap-index.xml">Site haritası</a>: her sayfanın adresi',
    '<a href="/aied/rss.xml">RSS beslemesi</a>: yeni ve güncellenen sayfalar',
  ],
  assistantsHeading: 'Hazır asistanlar',
  assistantsIntro: 'Bir şey kurmak istemiyorsanız, bu hazır asistanlardan birini kullanın:',
  assistants: [
    '<strong>Eğitimde YZ Danışmanı</strong>, bu bilgi tabanından yanıt veren bir <a href="https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing" target="_blank" rel="noopener">Gemini Gem</a>. <a href="https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk" target="_blank" rel="noopener">Özel talimatları</a> herkese açıktır ve bilgi tabanının bir statik kopyasından oluşturulmuştur, bu nedenle en yeni sayfalardan geri kalabilir.',
    '<strong>NotebookLM defteri</strong>: <a href="https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share" target="_blank" rel="noopener">Google NotebookLM defteri</a>, aynı materyal üzerine kurulu; otomatik oluşturulmuş raporlar, infografikler, bir podcast, slaytlar ve <a href="https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d" target="_blank" rel="noopener">bir video</a> içerir.',
  ],
  corpusHeading: 'Bilgi tabanında ne var',
  corpusHtml1: `Özel ders ve YZ özel dersleri, değerlendirme ve geri bildirim, akademik dürüstlük, YZ okuryazarlığı, öğretmen ve fakülte gelişimi, eşitlik ve erişilebilirlik, gizlilik, politika ve yönetişim ve bilişsel yük boşaltma ile öğrenen motivasyonu gibi öğrenme bilimi konularını kapsayan binden fazla araştırma özeti. Her özet tam atıf ve özgün makaleye bir bağlantı ile biter, böylece asistanınız referansı iletebilir.`,
  corpusHtml2: `Üç tür sayfa farklı soruları yanıtlar: kavram sayfaları bir fikir üzerine araştırmanın ne söylediğini özetler ve arkasındaki çalışmalara bağlantı verir, makale sayfaları bir seferde bir makaleyi kapsar ve SSS’ler öğretmenlerin ve yöneticilerin pratik sorularını yanıtlar. Genel bakış istediğinizde bir kavram sayfası, kanıt istediğinizde arkasındaki makaleleri isteyin.`,
  answeredHeading: 'Hâlihazırda yanıtlanmış sorular',
  answeredIntro: 'İnsanların bir YZ’ye önce sorduğu soruların çoğu burada elle, araştırma eşliğinde yanıtlanmıştır:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Kurs YZ politikası nasıl yazarım ve öğrencilere nasıl iletirim?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Kursumda YZ ile hileyi nasıl azaltabilirim?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'YZ dedektörleri kullanmalı mıyız?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Değerlendirme YZ çağı için nasıl yeniden tasarlanmalı?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Öğrencilerin YZ’ye aşırı güvenmesini nasıl önlerim?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Kurumsal bir YZ politikasını nasıl yazar ve uygularız?' },
  ],
  answeredOutroHtml: `Sormadan önce <a href="/aied/faq/">SSS’lerin tam listesine</a> göz atmaya değer ve istek metni asistanınıza o listeyi önce kontrol etmesini söyler.`,
  offlineHeading: 'Bilgi tabanını çevrimdışı okuyun',
  offlineHtml: `Bilgi tabanını bir e-okuyucu, telefon, tablet veya bilgisayar için <a href="/aied/aied.epub">EPUB</a> veya <a href="/aied/aied.pdf">PDF</a> olarak da indirebilirsiniz. Bu çevrimdışı sürümler kavram sayfalarını ve SSS’leri içerir, makale özetlerini içermez.`,
  toc: [
    { text: 'Kopyalanacak istek metni', slug: 'the-prompt', depth: 2 },
    { text: 'Nasıl kullanılır', slug: 'how-to-use-it', depth: 2 },
    { text: 'Hazır asistanlar', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Bilgi tabanında ne var', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Hâlihazırda yanıtlanmış sorular', slug: 'already-answered', depth: 2 },
    { text: 'Bilgi tabanını çevrimdışı okuyun', slug: 'read-offline', depth: 2 },
  ],
};

export default tr;
