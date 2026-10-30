---
title: "Öğrenci Çalışmalarını YZ ile Adil ve Güvenilir Biçimde Notlandırabilir miyim?"
created: "2026-10-30T16:00:00-04:00"
updated: "2026-10-30T16:00:00-04:00"
type: faq
connected_faqs: [redesign-assessment-ai-era, ai-feedback-at-scale, should-we-use-ai-detectors, checking-whether-educational-ai-works]
weight: 84
technology: [generative-ai, llm, human-in-the-loop-ai]
assessment: [automated-assessment, assessment-validity, ai-feedback-quality, summative-assessment, feedback]
methods: [quantitative-research, mixed-methods-research]
research_method: [experiment, case study]
audience: [instructors, assessment designers, assessment professionals, administrators]
level: [higher ed]
source_updated: "2026-10-30T11:40:00-04:00"
translation_of: faqs/ai-grading-fairness-reliability
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-30"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

İnandığınız bir değerlendirme ölçütünüz, saatlerinizden çok tesliminiz ve bir denemeyi okumak için gereken sürede bir puan ile birkaç kendinden emin paragraf döndüren bir aracınız var. Onu daha önce notlandırdığınız çalışmalarda deniyorsunuz. Puanların yarısı doğru görünüyor. Biri tuhaf biçimde cömert, biri tuhaf biçimde sert ve bunun araçtan mı yoksa denemeden mi kaynaklandığını henüz söyleyemiyorsunuz.

Bir meslektaşınıza vereceğiniz kısa yanıt: YZ notlandırma, daha önce notladığınız çalışmalara karşı denetlediğiniz görevlerde, gözetimli bir yardımcı ya da ikinci okuyucu olarak yer kazanır. Uzlaşma, değerlendirme türleri arasında aktarılmaz. On altı öğrencinin girdiği bir eczacılık sınavında [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat ve ark. (2026)]], nesnel madde türlerinde neredeyse tam uzlaşma, açık uçlu yanıtlarda ise güvenilmez uzlaşma buldu. Üç İngiliz üniversitesinde [[opraise-automated-marking-ai-assessment-2026|OpRaise projesi]], YZ ile insan değerlendiricilerin derece bandında kuruma göre zamanın %35 ile %65'i arasında uzlaştığını ve puanların ortaya doğru sıkıştığını buldu. Akıcı bir gerekçe, ölçütlerinizin uygulandığının kanıtı değildir. Sonucun [[assessment-validity|kararınız için geçerli]] olup olmadığı, kendinizin yanıtlaması gereken yerel bir sorudur ve kayda geçen bir not haline gelen her şeyden [[human-in-the-loop-ai|bir kişi sorumlu kalır]].

## Kısa özet

**1.** Herhangi bir şeyi çalıştırmadan önce rolü adlandırın: geri bildirim yardımcısı, ikinci okuyucu ya da birincil notlandırıcı. Bunlar farklı miktarda kanıt gerektirir.

**2.** Gerçek sorununuzu çözen, sonuçları en hafif rolle başlayın. Belirlenimci bir anahtar işi görüyorsa, bir LLM değer değil risk ekler.

**3.** Zaten notlandırdığınız çalışmalarda kalibre edin; güçlü, zayıf, sınırdaki ve alışılmadık yapıdaki teslimleri dahil edin. Elverişli örnekler hiçbir şey kanıtlamaz.

**4.** Kalibrasyon seti ile test setini ayrı tutun, yoksa aracı tanıdık denemelere ne kadar iyi uyarladığınızı ölçüyorsunuz demektir.

**5.** Korelasyon değil; tam uzlaşmayı, puan farklarını ve yanlılığın yönünü bildirin. Geçme/kalma sınırlarını özellikle kontrol edin.

**6.** Öğrencilere aracın hangi rolü oynadığını, notu kimin verdiğini ve nasıl inceleme isteyeceklerini söyleyin.

## YZ'nin ne yapmasına izin verildiğine karar verin

"YZ notlandırma" denen üç düzenleme var ve bunlar farklı yükümlülükler taşır.

Bir **geri bildirim yardımcısı**, kabul etmeniz, yeniden yazmanız ya da atmanız için yorum taslakları yazar veya olası eksiklikleri işaretler. Risk yorum kalitesiyle sınırlıdır ve bir öğrenciye ulaşmadan önce her şeyi siz okursunuz. Bir **ikinci okuyucu**, ölçüt puanları önerir ya da kendi notlandırmanızı yapılandırmak için anlaşmazlıkları işaretler. Hataları yalnızca yanlış değil, işe yarar olmak zorundadır: dikkatsizce notlandıracağınız bir teslime sizi geri gönderen bir işaret, sahip olmaya değerdir. Bir **birincil notlandırıcı**, kayda geçen notlara dönüşen puanlar üretir. Bu, bu bilgi tabanındaki kanıtların dar ve yerel olarak doğrulanmış durumların ötesinde desteklemediği düzenlemedir.

Gerçek kısıtınızı ele alan en alt basamağı seçin. Notlandırma yükünüz sabit bir yanıt anahtarını kontrol etmekten geliyorsa, sıradan belirlenimci notlandırma bir dil modelinden daha şeffaf ve denetlenebilirdir; eczacılık çalışması da LLM'nin nesnel maddelerdeki avantajının kısmen notlandırma sırasında doğru yanıtların kendisine verilmesinden doğan bir yan ürün olduğunu ima eder. Modeli yorum gerektiren işlere ayırın, sonra o yorumu kontrol edin.

[[automated-assessment|Otomatik değerlendirme]] notlandırma, moderasyon ve geri bildirim üretiminin daha geniş makinesini kapsar. Bu sayfa onun altındaki yargı sorusudur.

## Kanıtların gerçekte gösterdiği

Uzlaşma madde türüne bağlıdır. [[falahat-chatgpt-grading-pharmacy-exams-2026|Falahat ve ark. (2026)]], 16 öğrencinin tamamladığı karma biçimli bir eczacılık sınavını notlandırdı ve çoktan seçmeli, uygun olanların tümünü seç ve boşluk doldurma maddelerinde fakülte notlandırmasıyla 0,935 ile 1,000 arasında uyum bildirdi. Öznel açık uçlu yanıtlardaki uzlaşma güvenilmezdi. Manşetten çok iki ayrıntı önemlidir. Notlandırma sırasında doğru yanıtlar sağlandı, bu da nesnel madde sonuçlarını pohpohlar; bir değerlendirme ölçütü eklemek ise uzlaşmayı tutarlı biçimde iyileştirmedi, bu da iyi bir ölçütün bir LLM'yi tutarlı bir notlandırıcıya dönüştürdüğü yaygın varsayımını zayıflatır. On altı öğrenci dersiniz hakkında bir iddiayı destekleyemez. Aktarılabilir bulgu, tek bir sınavın içindeki varyasyondur: çoktan seçmeli bölümünüzü işleyen bir sistem, denemeleriniz hakkında hiçbir şey söylemez.

Bant uzlaşması orta düzeyde ve dengesizdir. [[opraise-automated-marking-ai-assessment-2026|OpRaise raporu]] otantik lisans psikoloji denemelerini inceledi ve YZ ile insan değerlendiricilerin BK derece bandındaki uzlaşmasını Cambridge'de %63, Nottingham'da %53 ve Manchester Metropolitan'da %35 olarak buldu. Puanlar ortaya doğru sıkıştı ve kuyruklar en düşük doğrulukla notlandı: bir insanın 75 verdiği deneme her YZ sistemi tarafından birkaç puan daha düşük, 50 verilen bir deneme ise birkaç puan daha yüksek notlandı. İzlenmesi gereken arıza bu sıkışmadır, çünkü tam olarak dağılımınızın en üstündeki ve en altındaki öğrencilere zarar verirken ortayı iyi görünür bırakır. Bu, hakemli bir deneme değil bir proje raporudur ve kanıt tabanındaki en yararlı uyarıdır.

Kendi notlarınız kusurlu bir referanstır. Eğitmenler birbirleriyle anlaşmaz ve benzer bir denemeye verdiğiniz önceki puan bir yargıdır, bir temel doğru değildir. Bir notlandırıcıyla uzlaşma, o notlandırıcıyla tutarlılığı gösterir; bu da adaletle aynı şey değildir. Risklerin gerektirdiği yerde zor vakaları karara bağlamak için ikinci bir yetkin okuyucu kullanın ve YZ ile insan notlandırıcı arasındaki anlaşmazlığı, hangi tarafın haklı olduğuna dair bir hüküm değil, çalışmayı yeniden okuma dürtüsü olarak ele alın.

Tutarlılık ile sağlam yargı birbirinden ayrılır. Bir model, ölçütlerinizi kötü uygularken yeniden çalıştırmada neredeyse aynı puanları döndürebilir, çünkü yinelenebilirlik istikrarı ölçer, geçerliliği değil. OpRaise kuyrukları örüntüyü gösteriyor: sistem, en çok önem taşıyan denemelerde istikrarlı ve yanlıştı.

## Bir notla temas etmeden önce yöntemi doğrulayın

Bunu, gerçekten aldığınız yanıtları kapsayan, önceden değerlendirilmiş ve uygun biçimde korunmuş teslimlerde çalışın: güçlü, zayıf, sınırda, eksik, alışılmadık yapıda ve doğru yanıtları tanıdık olmayan bir biçimde ifade edilmiş.

**1. Ölçütleri belirtin ve kanıt isteyin.** Ödevi, değerlendirme ölçütünü, notlandırma kurallarını ve meşru alternatif yanıtların nasıl puan kazandığına dair örnekleri verin. Tanımlanabilir pasajlara bağlı, ölçüt düzeyinde kısa gerekçeler isteyin. Sonra bu gerekçeleri teslimin kendisine karşı kendiniz kontrol edin.

**2. Kalibrasyonu değerlendirmeden ayırın.** Bir sette ayarlayın, başka bir sette test edin. Bu ayrım olmadan doğrulanmış bir yöntemi iyi uyarlanmış bir yöntemden ayırt edemezsiniz.

**3. Önem taşıyan kararları ölçün.** Tam uzlaşmayı, puan farklarının büyüklüğünü ve yönünü ve modelin sistematik olarak daha yüksek mi yoksa daha düşük mü not verdiğini kaydedin. Geçme/kalma ve diğer sonuç doğuran sınırları ayrı ayrı inceleyin. Yüksek bir korelasyon, sistematik bir kaymanın üzerinde oturabilir.

**4. Yinelenebilirliği ve alt grup davranışını test edin.** Bir alt kümeyi aynı ayarlarla yeniden çalıştırın. Ölçüt düzeyindeki hataları ve dilin, biçimlendirmenin ya da meşru üslubun daha zayıf bir anlayış sanılmasını arayın. Küçük alt grup sayıları temkinliliği destekler, bir adalet iddiasını değil.

**5. Yükseltme kuralını yazın.** Hangi vakaların her zaman insan notlandırması alacağına ve anlaşmazlıkların nasıl çözüleceğine karar verin. Modelin beyan ettiği güvenin karar vermesine izin vermeyin; güvenin ağırlık taşıyabilmesi için gözlenen hatalara karşı doğrulanması gerekir.

**6. İş akışını koruyun.** Onaylanmış bir ortam kullanın, kimliği belirleyici bilgiyi en aza indirin ve ölçüt ile talimatları teslim edilen içerikten ayrı tutun. Bu ayrım manipülasyonu saklamayı zorlaştırır. İmkânsız kılmaz.

**7. Kontrolü geçersiz kılacak şeyleri kaydedin.** Modeli ve sürümü, istemi, ölçütü ve ayarları saklayın. Bir model güncellemesi ya da ölçüt revizyonu, süreklilik varsaymak yerine temsili kontrolleri yineleme nedenidir.

## Düzenlemeyi öğrencilere görünür kılın

Öğrenciler aracın hangi rolü oynadığını, kimin karar verdiğini ve bir sonuca nasıl itiraz edeceklerini bilme hakkına sahiptir. Belirsiz açıklama kuşku üretir; ayrıntı işleyebilir bir ilişki üretir. Şöyle bir şey: "Onaylanmış bir YZ aracı taslağınız üzerine ölçüt yorumları taslaklayabilir. Her yorumu ben inceliyorum ve notunuzu ben belirliyorum. Bir yorum çalışmanızı yanlış temsil ediyorsa bana ulaşın." Sonra bunu doğru kılın.

İki arıza yönü ayrı ilgi gerektirir. Aşırı puan kırmalar öğrencilerin bildirdiği durumlardır ve itirazlara egemen olurlar. Hak edilmemiş puan ise dile getirilmeyen ve kaydı sessizce bozan durumdur. İkisi için de örnekleme yapın ve iş akışının size bir şey kazandırıp kazandırmadığına karar verirken doğrulama saatlerinizi de hesaba katın.

## Size geri dönecek olanlar

**"İnsanlar da yanlı."** Öyledirler; karşılaştırmanın tek bir notlandırıcının puanını ölçü olarak değil, açık ölçütleri gerektirmesinin nedeni de budur. Buradaki argüman OpRaise'ın kurumsal yayılımıdır: üç üniversitedeki insan notlandırıcılar aynı sistemlerle bu kadar farklı bant uzlaşması ürettiyse, insan referansı sabit bir ölçü çubuğu değil, belirtilmesi gereken şeyin bir parçasıdır.

**"Ölçüt onu nesnel kılıyor."** Bir ölçüt beklentileri açık kılar. Onu uygulamak yine yorumdur ve eczacılık çalışması, ölçüt sağlamanın uzlaşmayı tutarlı biçimde iyileştirmediğini buldu. Ölçütün size kazandırdığı şey, gerekçeler için denetlenebilir bir standarttır; puanların garantisi değil.

**"Her şeyi kontrol etmem gerekir, bu da amacı boşa çıkarır."** Bazı görevler için doğru sonuç budur ve yanıt işi daraltmaktır. Yorumları kendi notlandırma notlarınızdan taslaklamak, yargıyı sizde bırakır ve yazma işini ortadan kaldırır. Sınırdaki teslimlere konan ikinci okuyucu işaretleri, dikkatinizi sonucu değiştirdiği yerde yoğunlaştırır.

**"Meslektaşım denedi ve iyi çalıştı."** Neyi ölçtüğünü sorun. Bu literatürde olumlu değerlendirmeler hatalarla birlikte sıradan biçimde var olur ve birkaç makul çıktı okuyan meslektaşınız bir gösterim yapmıştır, doğrulama değil. Soru, onların yönteminin en son fark edeceğiniz denemelere ne yapacağıdır.

## Bu hafta ne yapmalı

**1.** Bir değerlendirme seçin ve YZ'nin oynayacağı tek rolü yazın. Onu bir basamak yukarı taşımanıza izin verecek kanıtın ne olacağını yazın.

**2.** Onu, güçlü bir tane, zayıf bir tane, sınırda bir tane ve alışılmadık ama meşru bir yapıya sahip bir tane içerecek biçimde seçilmiş, zaten notlandırdığınız beş teslimde çalıştırın.

**3.** Her anlaşmazlığı çalışma ve ölçütle birlikte kaydedin ve yalnızca yanlış değil kabul edilemez sayacağınız hataları adlandırın.

**4.** Puan farklarının tutarlı bir yönde gidip gitmediğini test edin ve geçme/kalma sınırınızı ayrıca kontrol edin.

**5.** Öğrenciye dönük açıklama paragrafını ve inceleme yolunu taslaklayın; doğrulama sürenizi önlediğiniz notlandırma süresiyle karşılaştırın.

## Bundan sonra nereye gidilir

[[assessment-validity|Değerlendirme geçerliliği]] bu soruları belirleyen kavramdır: kanıtın, yapmak istediğiniz çıkarımı destekleyip desteklemediği. [[automated-assessment|Otomatik değerlendirme]] teknolojiyi ve biçimler arasında ölçülen performansını kapsar; [[ai-feedback-at-scale|ölçekte YZ geri bildirimi]] ise üretilen yorumların ve öğrencilerin onlara göre hareket edip etmediğinin komşu sorununu ele alır.

Öğrenciler YZ kullanırken bir notun neyi temsil etmesi gerektiği, yapı ikamesi ve kimliği doğrulanmış süreç kanıtı dahil, için [[redesign-assessment-ai-era|YZ çağında değerlendirmeyi yeniden tasarlama]] sayfasına bakın. Tespitin savunulabilir bir görev tasarımının yerini alıp alamayacağı için [[should-we-use-ai-detectors|YZ tespit araçlarının kullanılıp kullanılmayacağı]] sayfasına bakın. Tüm bunların altındaki değerlendirme sorusu için [[checking-whether-educational-ai-works|eğitsel bir YZ'nin işe yarayıp yaramadığını kontrol etme]] sayfasına bakın.
