/**
 * Arama sayfasının metni, dile göre. Filtre çubuğu etiketleri çevrilir;
 * içerikten gelen facet değerleri (disiplinler, seviyeler, kavram slug’ları)
 * içeriktir, chrome değil, bu nedenle tanımladıkları (İngilizce) sayfada
 * yazıldığı gibi kalır — çevrilmemiş içerik konvansiyonu.
 */
import type { SearchStrings } from './search.en';

const tr: SearchStrings = {
  title: 'Ara',
  h1: 'Ara',
  intro: 'Makaleler ve kavramlar arasında arayın. Sonuçları daraltmak için filtreleri kullanın.',
  corpusIntro:
    'Bilgi tabanındaki her şey aranabilir — SSS’ler ve ücretsiz araçlar ve kaynaklar sayfaları dahil. Şu anda içerdikleri:',
  placeholder: 'Makale, kavram ve SSS ara...',
  filterLabels: {
    page_type: 'Tür',
    discipline: 'Disiplin',
    level: 'Seviye',
    audience: 'Hedef kitle',
    research_method: 'Çalışma tasarımı',
    page_kind: 'Sayfa türü',
  },
};

export default tr;
