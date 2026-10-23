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
    'Eğitimde YZ için ücretsiz araçlar, koleksiyonlar, enstrümanlar ve formatlardan oluşan seçilmiş bir set: önce okumak zorunda kalmadan hemen kullanabileceğiniz şeyler. Çoğunlukla eğitimciler, öğretim tasarımcıları, kütüphaneciler ve araştırmacılar tarafından yapılırlar ve birçoğu profesyonel geliştirici olmayan kişilerce YZ yardımıyla inşa edilmiştir.',
    'Buradaki her şey etkileşimli değil. Tarayıcı araçlarının ve YZ özel derslerinin yanı sıra hazır istek metni kütüphaneleri, sınıf etkinlikleri koleksiyonları, brifing ve politika belgeleri, değerlendirme enstrümanları ve açık dosya formatları bulunuyor. Her girdi, aracı anlatan bir sayfaya bağlantı verir: kimin yaptığı, ne tür bir şey olduğu, kaynak kodunun açık olup olmadığı, maliyeti ve bağlantısının en son ne zaman kontrol edildiği.',
    'Her girdi, bu bilgi tabanının kontrol etmediği harici bir siteye bağlantı verir ve bağlantılar periyodik olarak kontrol edilir; her sayfa bağlantısının en son onaylandığı tarihi gösterir. Bir araç taşındıysa, kapandıysa veya burada olması gerektiği halde eksikse, depoda <a href=\"https://github.com/edtechdev/aied/issues\" target=\"_blank\" rel=\"noopener\">bir issue açın</a>.',
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
