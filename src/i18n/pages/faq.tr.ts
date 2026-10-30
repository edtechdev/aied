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
  sectionHeadings: {
    "Start here": "Buradan başlayın",
    "Course and institutional policy": "Kurs ve kurum politikası",
    "Designing courses and activities": "Kurs ve etkinlik tasarımı",
    "Assessment, feedback and integrity": "Değerlendirme, geri bildirim ve dürüstlük",
    "How students learn and use AI": "Öğrenciler YZ ile nasıl öğrenir",
    "Particular learners, access and wellbeing": "Özel öğrenenler, erişim, iyi oluş",
    "Careers and AI literacy": "Kariyer ve YZ okuryazarlığı",
    "Building and evaluating educational AI": "Eğitsel YZ geliştirme ve değerlendirme",
    "Research practice": "Araştırma pratiği",
  },
  sectionBlurbs: {
    "Start here": "Hangi rolde olursanız olun, belirli sorulardan önce okunmaya değer iki geniş soru.",
    "Course and institutional policy": "Öğrencilerin okuyacağı kuralları yazan eğitmenler ile bu kuralları program düzeyinde belirleyen yöneticiler ve akademik personel gelişimi uzmanları için.",
    "Designing courses and activities": "YZ'nin bir göreve, bir döneme ya da çevrimiçi bir kursa nerede gireceğine karar veren herkes ve YZ'nin kendilerine vermesi beklenen zamanı geri isteyen eğitmenler için.",
    "Assessment, feedback and integrity": "En büyük küme, çünkü kanıtların en keskin olduğu ve sonuçların öğrenci kaydına yansıdığı yer burası.",
    "How students learn and use AI": "Öğrencilerin gerçekte ne kazandığı, neyi kaybetme riski taşıdığı ve öğrenmeyi onlarda nasıl tutacağınızla ilgili sorular için.",
    "Particular learners, access and wellbeing": "Tasarımı sınıfta gerçekte kim varsa ona uyarlayan eğitmenler ve destek personeli ile kimin sınıfta olmadığını düşünen yöneticiler için.",
    "Careers and AI literacy": "Öğrencilerin 'bütün bunlar neye yarıyor' sorusuna yanıt veren müfredat tasarımcıları ve program yöneticileri için.",
    "Building and evaluating educational AI": "Bir YZ eğitmenini, simülasyonu ya da platformu gerçek bir kursa sokan geliştiriciler, öğretim tasarımcıları ve araştırmacılar için.",
    "Research practice": "Bu alanda çalışma bildiren, gözden geçiren ya da planlayan araştırmacılar için.",
  },
};

export default tr;
