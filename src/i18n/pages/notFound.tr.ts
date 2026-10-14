/**
 * 404 sayfasının (`/aied/404.html`) metni. Sayfa aksi hâlde arama sayfasıdır,
 * bu nedenle eklediği tek metinler başlık ve iki çıkış yoludur.
 */
import type { NotFoundStrings } from './notFound.en';

const tr: NotFoundStrings = {
  title: 'Sayfa Bulunamadı',
  h1: 'Sayfa Bulunamadı',
  messageHtml:
    'İstediğiniz sayfayı bulamadık. Sizi buraya getiren bağlantı güncel olmayabilir veya sayfa yeniden adlandırılmış olabilir. <a href="/aied/">Ana sayfadan</a> yeniden başlayabilirsiniz.',
  searchHtml:
    'Veya aşağıda tüm bilgi tabanında arama yapın. Her makale, kavram, SSS ve kaynak indekslenmiştir ve filtreler aramayı disipline, seviyeye, kitleye veya araştırma yöntemine göre daraltır.',
};

export default tr;
