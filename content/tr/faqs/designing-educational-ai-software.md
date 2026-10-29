---
title: "Etkili Eğitim Yapay Zeka Yazılımı Tasarlamaya Yönelik En İyi Uygulamalar ve İpuçları Nelerdir?"
created: "2026-10-14T21:30:00-04:00"
connected_faqs: [developing-ai-tutor, designing-ai-into-learning, making-ai-better-at-supporting-learning]
weight: 64
foundations: [learning-design]
ethics: [accessibility, equity-in-ai-education, pedagogical-safety]
technology: [edtech-platform]
translation_of: faqs/designing-educational-ai-software
source_updated: "2026-10-02T08:21:34-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

# Etkili Eğitim Yapay Zeka Yazılımı Tasarlamaya Yönelik En İyi Uygulamalar ve İpuçları Nelerdir?

**Eğitim yapay zekası, yalnızca eğitim amaçlı bir arayüze sahip genel amaçlı bir model olarak değil, bir öğretim sistemi olarak tasarlanmalıdır.** Bilgi tabanındaki son tasarım araştırmaları bu iddiayı daha somut bir biçime dönüştürüyor: en güçlü sistemler, **insan denetimi altında sınırlı alan uzmanları** olarak inşa edilir; onları kullanacak olan öğretmenler ve öğrenenlerle birlikte tasarlanır ve modelin hafızası yerine doğrulanabilir içeriğe dayandırılır. Pratik bir dizi tasarım kuralı:

- Sistemi açık öğrenme hedefleriyle uyumlu hale getirin.
- Hedeflenen bilişsel işi tamamlamak yerine iskeleleyin.
- Olgusal güvenilirliğin önemli olduğu durumlarda yanıtları öğretmenin onayladığı veya yetkili kaynaklara dayandırın.
- Belirsizliği kullanıcıya bildirin.
- Bir [[human-in-the-loop-ai|insana yükseltme yolu]] sağlayın.
- Kullanıcıyla aynı fikirde olmak yerine "nazik ama doğru" yanıtlar tasarlayın.
- Öğretmenlere anlamlı yapılandırma olanakları ve [[teacher-role|denetim]] imkânı tanıyın.
- Gereksiz öğrenen verisi toplamaktan kaçının ve yalnızca pedagojik olarak gerekli olanı toplayın (bkz. [[privacy]]).
- Erişilebilirliği baştan itibaren göz önünde bulundurun ([[accessibility]]).
- Farklı öğrenen gruplarında eşit olmayan performansı test edin (bkz. [[equity-in-ai-education|Eşitlik]]).
- Yalnızca tek seferlik gösteri istek metinleri yerine sürdürülen, çok turlu etkileşimi değerlendirin.

## Pedagojik güvenlik

[[pedagogical-safety|Pedagojik Güvenlik]] sayfası, eğitim için geleneksel güvenlik testinin yetersiz olduğunu vurgular. Bir sistem zehirli içerikten kaçınabilir ama yine de cevapları aşırı derecede açığa çıkararak, [[misconceptions]] pekiştirerek, düşünmeyi bastırarak, bağımlılığı teşvik ederek veya öğretim hedeflerinden saparak eğitim zararı verebilir. Sayfa; disipline duyarlı, çok turlu güvenlik değerlendirmesi, insanın döngüde olduğu kalite güvencesi, dayandırma (grounding) ve cevap vermek yerine yönlendirmeye yönelik hizalama önermektedir.

[[hazra-safetutors-pedagogical-safety-2026|SafeTutors]] [[benchmark]] ise bu uyarıyı sayılara dönüştürür. Test edilen her modelde — 3.8B açık ağırlıklı modellerden GPT-5-mini’ye kadar — [[pedagogy|pedagojik]] zarar evrenseldi; model ölçeği güvenliği güvenilir biçimde artırmadı ve hata oranları tek turlu etkileşimlerde %17,7’den çok turlu konuşmalarda %77,8’e yükseldi; ihlal kalıpları ise derse göre değişiyordu. Kıyas ölçütünün 11 boyutlu, 48 alt riskli taksonomisi (bilişsel, epistemik, [[metacognition|üstbilişsel]], [[motivation|motivasyonel]]-duygusal, gelişimsel ve eşitlik, öğretim hizalaması ve diğerleri) kullanışlı bir tasarım kontrol listesidir. Eğitim yazılımı belirten herkes için pratik ders şudur: bir sistem geleneksel ölçütlerle doğru ve "güvenli" olabilir ama öğrenmeyi sessizce aşındırabilir; dolayısıyla çok turlu, disipline duyarlı değerlendirme son bir kapı değil, bir gerekliliktir.

## Erişilebilirlik ve eşitlik

Erişilebilirlik; klavye ile kullanılabilirlik, ekran okuyucu uyumluluğu, altyazı ve deşifre metinleri, uygun kontrast, kullanılabilir metin alternatifleri ve yardımcı [[ai-technologies|teknolojilere]] uyumluluk gibi somut işletim gereksinimlerini içermelidir; yapay zeka tarafından üretilen erişilebilirlik özellikleri de yine de kalite kontrolü gerektirir. Bkz. [[accessibility]].

Eşitlik testi tüm hattı incelemeli ve yalnızca toplu doğruluğa güvenmek yerine davranışı dil, engellilik, kültür ve diğer ilgili öğrenen özelliklerine göre ayrımlı biçimde gözden geçirmelidir. Bilgi tabanının, [[equity-in-ai-education|Eşitlik]] başlığıyla birlikte özetlenen [[bias-mitigation]] rehberliğine bakın.

## Sınırlı yetki için tasarım, özerklik için değil

[[reichert-human-centered-llm-chatbot-design-teachers-2026|Reichert ve meslektaşlarının katılımcı tasarım çalışması]], altı ortaöğretim öğretmeniyle yürütülmüş olup, eğitim yapay zekasının özerk bir ajan olması gerektiği varsayımına karşı faydalı bir düzeltmedir. Kağıt üzerinde sınıf [[conversational-ai|sohbet robotları]] prototipleri tasarlamaları istendiğinde, her öğretmen iki boyutlu bir **sınırlı alan uzmanı** betimledi — kesin olarak tanımlanmış bir alanla sınırlı, insan denetimi altında çalışan özelleşmiş bir yetenek. *Yetki sınırları* öğretmenleri nihai denetimde tuttu, çünkü öğrenci öğrenimi ve güvenliğine ilişkin mesleki sorumluluk devredilemez; *uzmanlık sınırları* ise yapay zekanın bireysel öğrenciler, sınıf dinamiği ve kurumsal normlar hakkında bağlamsal bilgiden yoksun olmasını yansıttı.

Tasarladıkları mimari; içerik kapsamlandırma, içerik sunumu, öğrenci uyarlaması ve [[teacher-role|öğretmen]] denetiminden oluşan dört birbiriyle bağlantılı bileşene dayanıyordu ve bu yapı üç koruyucu katman üzerinde duruyordu: kapsamı sınırlayan alan sınırları, güvenli [[personalized-learning|kişiselleştirmeyi]] mümkün kılan içerik filtreleme ve belirsiz durumlar için öğretmen müdahalesi. Devretme seçiciydi: Gagné’nin öğretimin dokuz olayına eşlendiğinde, öğretmenler içerik sunma, alıştırma problemleri sağlama ve [[formative-assessment|biçimlendirici]] [[feedback]] verme için yapay zekayı kabul etti; ama hedefler belirleme veya [[summative-assessment|özetleyici]] [[assessment]] yürütme için reddetti. Dikkat çekici biçimde, model açıklamalarından çok davranışsal şeffaflığı — görünür sınırlar ve belirsizlik ipuçları — önceliklendirdiler ve altısı da tam konuşma kaydı, gerçek zamanlı uyarılar ve müdahale yeteneği talep etti; bunu güvensizlik değil, [[teacher-role|mesleki sorumlulukun]] bir ifadesi olarak gördüler.

## Paydaşlarla birlikte tasarlayın, yalnızca onlar için değil

İki çalışma daha bunu genişletiyor. [[ko-hughes-vsd-student-centered-its-2026|Ko ve Hughes]], topluluk kolejlerindeki öğrenciler ve eğitmenlerle — öğrenme platformu tasarımında tarihsel olarak dışlanmış bir paydaş grubu — bir [[intelligent-tutoring|akıllı öğretim sistemi]] üzerinde değere duyarlı tasarım uyguladı ve çözülmekten çok yönetilmesi gereken kalıcı değer gerilimleri buldu: şeffaflık ile yorumlanabilirlik, gizlilik ile öğretimsel içgörü ve [[agency|öğrenci özerkliği]] ile sistem yönlendirmeli [[scaffolding]]. Öğrenciler ham model şeffaflığına tercihen işbirlikçi, insanlaştırılmış açıklamaları yeğlediler ve ortaya çıkan prototip, [[explainable-ai]], insanın döngüde olduğu denetim ve [[privacy]] denetimleri başlıklarında 16 değere uyumlu özellik kodladı.

[[wang-teacher-ai-co-design-review-2026|Wang, Liu ve Islam’in 28 ampirik çalışmanın derlemesi]] öğretmen–yapay zeka ortak tasarımına bir tasarım söz dağarcığı ekliyor: [[generative-ai|üretken yapay zeka]] başlıca ders planlama, istek metni üretimi ve yaratıcı fikir üretimi için kullanılıyor; yapay zeka ortak tasarımcı olmaktan çok daha sık yardımcı veya içerik üreticisi olarak hareket ediyor; ve öğretmenlerin hangi aracın hangi tasarım sorununa uyduğuna karar vermede kullanabileceği dört yinelenen olanak var — verimlilik, duyarlılık, [[creativity]] ve [[equity-in-ai-education|eşitlik]]. Her iki çalışma da tasarımı [[human-in-the-loop-ai|insanın döngüde olduğu]] [[human-ai-collaboration|işbirliği]] olarak görüyor — dışa dönüklük değil, [[usability-research|kullanılabilirlik araştırması]] — ve ikisi de danışılan paydaşların hiçbir doğruluk kıyas ölçütünün yakalayamayacağı gereksinimleri ortaya çıkardığını buldu.

## Dayandırın ve doğrulayın, modele güvenmeyin

Dayandırma mimari bir karardır, istek metni değil. [[cs-education|Giriş seviyesi programlama]] için güvenli bir [[rag|getirme destekli]] eğitmen olan [[eduguard-safe-rag-llm-tutor|EduGuard]]; öğretmenin onayladığı kurs getirmesini, mimari olarak ayrı bir iddia doğrulayıcısıyla, açık [[cognitive-offloading|aşırı güven]] denetimiyle ve yanlış kanıları, hata ayıklamayı, kod karışık sorguları ile saldırgan doğrudan cevap istek metinlerini kapsayan, eğitmenlerin yazdığı 600 sorguluk bir kıyas ölçütüyle eşleştirir — GPT-4o-mini ve Llama [[socratic-method|Sokratik]] eğitmen temel çizgilerini geride bırakır. Tasarımcılar için bu, "yanıtları öğretmenin onayladığı içeriğe dayandırın" ilkesinin somut biçimidir: doğrulayan bileşenleri konuşan bileşenlerden ayırın ve aktif olarak cevap çıkarmaya çalışan durumlara karşı test edin. Bkz. [[hallucination-risk|uydurma riski]].

Bu tasarım ilkelerinin nasıl kurulmuş bir eğitimene dönüştüğünü — tanılama, ipucu merdivenleri, geri bildirim ve değerlendirme — [[developing-ai-tutor]] başlığında; iyi kurulmuş bir aracın iyi kullanılıp kullanılmadığına karar veren pedagojik varsayılanları [[designing-ai-into-learning]] başlığında bulabilirsiniz.

**Öğrencinin teslim ettiği çalışmayı herhangi bir yapay zeka notlandırıcı için güvenilmeyen girdi olarak ele alın.** Çoğu tasarım önerisinin atladığı tehdit modeli, değerlendirilen eserin içinde yer alan saldırgan içeriktir. [[humble-prompt-injection-ai-grading-red-team-2026|Humble’ın (2026) saldırgan kırmızı ekip değerlendirmesi]], öğrencilerin teslim ettikleri çalışmalara gömülü istek metni enjeksiyonu yoluyla LLM tabanlı bir notlandırma sistemini manipüle edip edemeyeceğini test etti ve manipülasyonun işe yaradığını buldu: notlandırıcıya talimat veren, onu yeniden çerçeveleyen veya onun yerine rol oynayan enjeksiyonlar, çalışmayı değiştirmeden puanı kaydırıyor. Tasarım sonuçları yukarıdaki doğrulama mimarisindeki aynı ayrım ilkesinden gelir — notlandırma rubriğini ve talimatları öğrencinin denetimindeki bağlam penceresinin dışında tutun, teslimlerdeki talimat benzeri içeriği ayıklayın veya işaretleyin, bir teslimin kendi kriterlerini belirlemesine asla izin vermeyin ve önemli her notta insan kararını koruyun. Talimatlarını değerlendirdiği metnin aynısından okuyan bir yapay zeka notlandırıcı, rubriği adaya teslim etmiş olur.
