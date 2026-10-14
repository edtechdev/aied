/**
 * SSS dizini sayfasının (`/aied/faq`) metni. Soruların kendileri `faqs`
 * koleksiyonundan gelir.
 */
import type { FaqStrings } from './faq.en';

const tr: FaqStrings = {
  title: 'SSS',
  h1: 'Sıkça Sorulan Sorular',
  introHtml:
    'Bu bölüm <strong>eğitimde yapay zeka</strong> hakkındaki yaygın soruları yanıtlar — araştırmanın YZ’nin öğretme ve öğrenmeyi nasıl etkilediği hakkında ne söylediği ve eğitimcilerin, öğretmenlerin ve öğretim tasarımcılarının bu kanıtı nasıl uygulamaya koyabileceği. Her yanıt, bu bilgi tabanında özetlenen araştırmadan damıtılmış bulguları sunar; soruyu derinlemesine okuma için ilgili kavramlara ve makalelere bağlar.',
  assistantHtml:
    'Burada yanıtlanmayan bir sorunuz mu var? Kendi YZ asistanınıza, bir aracıyı tam katalog üzerinde temellendirilmiş ve atıflı yanıtlar için nasıl yönlendireceğinizi gösteren <a href="/aied/ai">Bu bilgi tabanını kendi YZ asistanınızla kullanın</a> sayfasını kullanarak sorun.',
  empty: 'Henüz SSS yok.',
};

export default tr;
