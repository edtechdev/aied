/**
 * Kaynaklar dizini sayfasının (`/aied/resources`) metni. Liste `resources`
 * koleksiyonundan oluşturulur; o sayfalar çevrilene kadar İngilizce kalır.
 * Buradaki etiketler okuyucunun listenin üzerinde gördüğü şeydir.
 */
import type { ResourcesStrings } from './resources.en';

const tr: ResourcesStrings = {
  title: 'Kaynaklar',
  h1: 'Ücretsiz Araçlar ve Kaynaklar',
  introHtml: [
    'Eğitimde YZ için <strong>ücretsiz araçlar, koleksiyonlar, enstrümanlar ve formatlar</strong> — önce okumak zorunda kalmadan hemen kullanabileceğiniz şeyler. Çoğunlukla eğitimciler, öğretim tasarımcıları, kütüphaneciler ve araştırmacılar tarafından yapılırlar ve birçoğu profesyonel geliştirici olmayan kişilerce YZ yardımıyla inşa edilmiştir.',
    'Buradaki her şey etkileşimli değil. Tarayıcı araçlarının ve YZ özel derslerinin yanı sıra hazır istek metinleri ve "gem" kütüphaneleri, sınıf etkinlikleri koleksiyonları, brifing ve politika belgeleri, değerlendirme enstrümanları ve açık dosya formatları bulacaksınız. Her girdi, kimin yaptığını, ne tür bir şey olduğunu, kaynak kodunun mevcut olup olmadığını, kullanmanın maliyetini ve bağlantısının en son ne zaman kontrol edildiğini söyleyen bir sayfaya bağlantı veren kısa bir özet.',
    'Her girdi, bu bilgi tabanının kontrol etmediği harici bir siteye bağlantı verir ve bağlantılar periyodik olarak yeniden kontrol edilir — her sayfa bağlantısının en son onaylandığı tarihi gösterir. Bir araç taşındıysa, erişilemez olduysa veya burada olmayı hak edip eksikse en hızlı yol depoya bir issue açmaktır.',
  ],
  empty: 'Henüz kaynak yok.',
  groupLabels: {
    software: 'Yazılım',
    'ai tutor': 'YZ Özel Dersleri',
    'agent skill': 'Aracı Yetenekleri',
    'prompt or gem library': 'İstek Metni ve Gem Kütüphaneleri',
    'collection of tools': 'Araç Koleksiyonları',
    'collection of activities': 'Etkinlik Koleksiyonları',
    'assessment instrument': 'Değerlendirme Enstrümanları',
    'open format or specification': 'Açık Formatlar ve Spesifikasyonlar',
    'ebook or guide': 'E-kitaplar ve Kılavuzlar',
    'case study collection': 'Vaka Çalışması Koleksiyonları',
    'dataset or benchmark': 'Veri Setleri ve Kıyaslamalar',
  },
};

export default tr;
