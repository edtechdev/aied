---
title: "YZ Araçlarını Benimserken Hangi Seçenekler ve Sorunlar Dikkate Alınmalı?"
created: "2026-11-12T19:20:00-05:00"
updated: "2026-11-14T04:15:00-05:00"
type: faq
connected_faqs: [institutional-ai-policy, course-ai-policy, checking-whether-educational-ai-works, what-not-to-do-ai-education]
weight: 88
foundations: [ai-literacy, human-ai-collaboration]
technology: [generative-ai, llm, open-source]
ethics: [privacy, equity-in-ai-education, ai-use-disclosure]
methods: [ai-ed-evaluation]
audience: [instructors, administrators, educational technology developers, policymakers, learners]
level: [higher ed, k 12]
institutions: [governance, institutional-ai-infrastructure, shadow-ai]
translation_of: faqs/adopting-ai-options-and-issues
source_updated: "2026-11-14T04:15:00-05:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

Bir bölüm başkanının [[intelligent-tutoring|akıllı özel ders]] platformu için üç fiyat teklifi ve cuma günü bir teslim tarihi var. Bir [[teacher-role|öğretmen]], personelin yarısının hâlihazırda kullandığı ücretsiz bir aracı kullanmak istiyor. Bir bilgi işlem müdürüne kurumun kendi modelini çalıştırıp çalıştırmaması gerektiği soruluyor ve bunun ne kadara mal olacağını söyleyemiyor.

Bunlar aynı sorunun üç farklı irtifadan sorulmuş hâli. Seçenekler bir satıcı listesinin ima ettiğinden daha az ve sorunlar herhangi bir üründen daha uzun sürüyor.

Seçim, önünüzdeki kararla eşleşmeli. Bir birey, bir araca ne koyacağına karar verir. Bir kurum, kimin hangi modeli hangi veriyle, hangi maliyetle kullanabileceğine ve bir şeyler ters gittiğinde kimin yanıt vereceğine karar verir. Kötü benimseme kararlarının çoğu, kurumsal soruyu bireysel bir araçla yanıtlamaktan doğar.

## Kısa özet

Beş kural çoğunu kapsar.

1. Önce veri sınırını netleştirin, çünkü diğer her şey yeniden müzakere edilebilir, o edilemez.
2. Size uyan en küçük biçimi seçin: pilot için ücretsiz ya da dışarıya verilmiş araçlar, GPU olmadan veri denetimi gerektiğinde barındırılan bir platform, kotalar ve yönlendirme gerektiğinde bir ağ geçidi ve kendi çıkarımınız yalnızca diğer üçü başarısız olduğunda.
3. Kişi başı ve kullanım bazlı fiyatlandırmayı kendi sayılarınızla karşılaştırın, çünkü kullanımın çoğu genellikle birkaç yoğun kullanıcıdan gelir.
4. Onaylanmış yolu onaylanmamış olandan daha hızlı yapın, çünkü EDUCAUSE personel ve öğretim elemanlarının %94'ünün işleri için YZ kullandığını, %54'ünün politikadan haberdar olduğunu ve %56'sının kurumun sağlamadığı araçları kullandığını buldu.
5. Sonra hangi kanıtın sizi durduracağına önceden karar verin, çünkü çıkış testi olmayan bir benimseme varsayılan olarak kalıcı hâle gelir.

## Birey düzeyinde

Bir öğretim elemanı ya da öğrenci, öğretme kararından önce bir veri kararı veriyor. Öğrenci adları, BEP ayrıntıları, disiplin notları ve yayımlanmamış araştırma sorumluluğu doğurur; bu yüzden önce ayıklayın ve aracın işi hâlâ yapıp yapmadığını kontrol edin. Sonra koşulları okuyun: saklama, girdilerinizle eğitim ve alt işleyiciler genellikle kimsenin açmadığı bir belgede durur ve yanıt beş dakikada bulunamıyorsa bilinmiyor olarak değerlendirin.

Aracın neyi iyi yaptığını bilin. Üretilen metin taslak yazma, yeniden yapılandırma ve özetlemede en güçlü, aritmetik, atıflar ve güncel olgular gerektiren her şeyde en zayıftır. Size neye mal olduğunu da bilin. Ücretsiz bir katman ücretsizdir çünkü kullanım üründür ya da katman değişecektir ve ikisi de bir çıkışı akılda tutmak için nedendir.

İki soru kalıyor. Başka kim etkileniyor, çünkü bir dersi yeniden biçimlendiren bir araç, içindeki öğrenciler için bir karardır. Ve izin verilip verilmediği: varsa politikayı bir kez okuyun ve yoksa [[shadow-ai]] kanıtı, zaten varsayılan olarak politika yaptığınızı gösteriyor.

Kaba kural: onaylanmış araç erişilebilir olduğunda onu kullanın, olmadığında ne yaptığınızı ve nedenini yazın. Bu kayıt, yargı daha sonra sorgulandığında sizi koruyan şeydir.

## Kurum düzeyinde

Bir kurum tek bir satın almayla bir hizmet, bir veri akışı, bir destek yükümlülüğü ve bir siyasi taahhüt satın alır. Gerçek menü altı biçimden oluşur ve çoğu kurum farkında olmadan bunlardan iki ya da üçünün içindedir.

En kolay başlangıç ücretsiz, dışarıya verilmiş bir araçtır. Contact North'un AI Tutor Pro'su hesap gerektirmez ve Playlab, eğitimcilerin kendi [[curriculum-design|öğretim programlarına]] dayanan uygulamalar kurmasına izin verirken modelleri satıcı barındırır. İkisi de pilot için uygun, kalıcı çözüm olarak zayıftır: denetim izi yok, kota denetimi yok ve değişebilecek koşullar var.

Ticari bir kiracıda koltuk satın almak, ister [[generative-ai|ChatGPT]] Edu, Microsoft 365 Copilot ister Google Gemini for Education olsun, hızlı tedarik, SSO ve bir yönetici konsolu getirir; model seçimini ve saklamayı satıcıda bırakır.

Kendi barındırdığınız bir platform veriyi daha yakın tutar. [Amplify GenAI](/[[ai-education|aied]]/resources/amplify-genai/) kendi AWS hesabınıza kurulur ve Vanderbilt'in pilotu 1.300 kullanıcıda kullanıcı başına ayda yaklaşık \$3 bildirdi; bunların yarısı tokenlarda \$1'in altındaydı. Bu, GPU olmadan veri denetimi satın alır.

Aracı sağlayıcılar üzerinde bir ağ geçidi, birkaç hizmetin önüne tek bir giriş kapısı koyar. Kotalar, SSO, günlükleme ve bölgesel yönlendirme taşır; Fontys 300 kullanıcı için aylık \$500 tavanının altında bir tane çalıştırdı ve bu tavan hiç aşılmadı, [MindRouter](/aied/resources/mindrouter/) ise role göre ağırlıklı zamanlama ve enerji ölçümü ekler.

Kendi çıkarımınız en pahalı ve en bağımsız biçimdir. Purdue'nun iki hizmeti, personel hariç yaklaşık \$100.000 donanımla, 10'dan fazla [[open-source]] model üzerinde 1000'den fazla kullanıcıya ulaştı. Bir düzenleyiciye satıcının iznini istemeden yanıt verir.

Son biçim, hâlihazırda çalıştırdığınız araçların içindeki YZ'dir: bir Moodle soru türü, bir tartışma platformunun YZ ortağı, bir makale geri bildirim aracı. Düşük yük ve ders ders değişim, merkezde az şey öğrenilerek.

## Geçmeyen sorunlar

[[privacy|Veri koruması]] önce gelir. Önemli olan, artık var olan ve daha önce olmayan hangi kaydın oluştuğu, nerede durduğu ve kimin erişebildiğidir. Bir sınıf listesi alan araç, sözleşme ne derse desin kurumsal bir kayıt oluşturmuştur.

Kimlik ve erişim sırada. Ölçekte kullanılan her şey SSO, role dayalı erişim ve çıkış süreçleri gerektirir; ayrılan bir çalışanın hesabını kapatamayan bir araç, verilerinizle ayakta duran bir hesap bırakır.

Maliyetler, fiyatın nasıl sayıldığına bağlıdır. Kişi başı fiyatlandırma kişi sayısını, kullanım bazlı fiyatlandırma kullanımı ödüllendirir. Kullanıcıların küçük bir payı genellikle tokenların çoğunu ürettiği için, kişi başı fiyat yoğun kullanıcılar başka yere gidene kadar ucuz görünür.

Ölçüm genellikle eksik parçadır. EDUCAUSE, işle ilgili bir YZ stratejisi olanların %92, yatırım getirisini ölçenlerin %13 olduğunu buldu. Aracın neyin yerini aldığını söyleyemiyorsanız yenilemeyi savunamazsınız.

[[equity-in-ai-education|Eşitlik]] ve erişilebilirlik, sonradan bir düzeltmeye değil satın almaya aittir. Hızlı bir bağlantı, ücretli bir katman ya da İngilizce akıcılığı gerektiren bir araç, faydasını eşitsiz dağıtır.

[[academic-integrity|Akademik dürüstlük]], değerlendirmenin neyi ölçtüğünü değiştirir. Bir araç ödevi tamamlayabiliyorsa, gözden geçirilmesi gereken ödevdir.

Personel ve satıcıya bağımlılık, fiyat kadar önemlidir. Yukarıdaki biçimlerin ücretsiz olanı dışında her biri bir sahip gerektirir ve olağan başarısızlık, dördüncü ya da beşinci biçimi satın alıp onu zaten meşgul olan kişiyle donatmaktır. Yenilemede, bir fiyat değişikliğinde ve bir modelin kullanımdan kaldırılmasında ne olacağını sorun; ağ geçidi biçimleri, yanıtın bir geçiş değil yönlendirme değişikliği olması için vardır.

## İyi bir ilk yıl nasıl görünür

Bir şey başlamadan önce iki ya da üç ölçüt seçin: kim kullandı, ne için, etkin kullanıcı başına neye mal oldu ve işte ne değişti. Bu sayıları üretemeyen bir pilot, bütçesi olan bir demodur.

Sınır koşullarını aynı zamanda kontrol edin. Araç öğrenci kayıtlarına dokunduysa, veri akışı gizlilik ofisine söylediğinizle eşleşti mi? Kullanım ölçülmediyse, bunun nedeni araç rapor verememesi miydi yoksa kimse sormaması mı?

Onaylanmış yolu kısa tutun. EDUCAUSE rakamları, insanların yönetişimi atladığını çünkü onaylanmış yolun görevden daha uzun sürdüğünü gösteriyor. Model kartı ve aynı gün erişimi olan bir ağ geçidi, bir BT kolaylığı olduğu kadar bir yönetişim aracıdır.

## Yaygın hatalar

Problemi adlandırmadan bir platform satın almak, kullanım istatistikleri ve çok az şey üretir. Ücretsizi bir strateji olarak ele almak pilot için işe yarar, altyapı olarak başarısız olur. Yerel bir model, kimin mahkeme celbi alabileceğini değiştirir; istemlerin saklanıp saklanmayacağına karar vermez. Etki yerine memnuniyeti ölçmek, "öğretmenler hoşuna gitti"yi olmadığı bir bulguya dönüştürür. Ve uygulanabilir bir yol olmadan yayımlanan bir politika, kurallar yerine tercihleri tanımlar.
