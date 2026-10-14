---
title: "Akıllı Ders Kitapları Oluşturmak"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Dan McCreary'ın akıllı ders kitapları oluşturmaya ilişkin açık kaynaklı rehberi — arama, gezinme, terimler sözlüğü, kısa sınavlar, kavram grafikleri ve gömülü simülasyonlarla donatılmış çevrimiçi ders kitapları — MkDocs Material ve üretken yapay zeka kullanılarak, YZ tarafından üretilmiş etkileşimli MicroSim'ler kitaplığı eşliğinde."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking]
pedagogy: [active-learning, constructivist, self-directed-learning, misconceptions]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: drafting
    date: "2026-10-10"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
reviewed_by: [editor]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Intelligent Textbooks** sitesi, Dan McCreary'ın *akıllı ders kitapları* oluşturmaya yönelik adım adım rehberidir — statik PDF'lerin ötesine geçen, arama, site içi gezinme, bir terimler sözlüğü, bir içindekiler tablosu, kısa sınav yönetimi, görselleştirilmiş formüller, sosyal medya önizlemeleri, bağlantı denetimi ve bir kurstaki tüm kavramları ile bunların bağımlılıklarını gösteren, kolayca görselleştirilebilen bir **kavram grafiği** ekleyen çevrimiçi ders kitaplar. Rehber, günümüzde birçok kursun bu özelliklere sahip yüksek kaliteli çevrimiçi ders kitaplarından yararlanabileceğini ileri sürüyor ve bunları, Material temasıyla eşleştirilmiş [MkDocs](http://mkdocs.com/) derleme sistemi ve içeriği oluşturup sürdürmek için üretken yapay zeka kullanarak nasıl inşa edileceğini gösteriyor.

Belirleyici hamle, ders kitabının *Markdown'ta yazılıp yapay zeka tarafından üretilmesidir*; bu, [[vibe-coding|YZ destekli yazım]] deseninin [[curriculum-design|kurs içeriği]] üzerine uygulanmış somut bir örneğidir: büyük bir siteyi elden sürdürmek yerine kursu tanımlarsınız ve üretken yapay zekanın sayfaları üretip sürmesine izin verirsiniz; gezinme, arama ve kavram grafiği ise araç zincirinin elindedir. Eşlikçi bir [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) kitaplığı, bir kurs tanımından 2. düzey bir ders kitabı inşa etmek için gereken görevlerin %90'ından fazlasını otomatikleştirdiğini iddia ediyor.

## Tamamlayıcı bir kaynak: MicroSims

Bu rehberin doğal tamamlayıcısı, akıllı bir ders kitabının gömdüğü etkileşimli simülasyonları sağlayan McCreary'ın <https://dmccreary.github.io/microsims/> adresindeki **MicroSims** kitaplığıdır (kaynak: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)). Bir *MicroSim* (mikro simülasyon), öğretmenlerin bir kavramı açıklamasına yardımcı olmak üzere yapay zeka ile üretilmiş basit bir etkileşimli simülasyondur ve bir akıllı ders kitabına veya `iframe` kabul eden herhangi bir siteye gömülebilir. MicroSim'ler üç nedenle ayırt edicidir: **YZ destekli üretim** (standartlaştırılmış tasarım kalıpları, bir simülasyonun doğal dille yapılmış tanımını paylaşılabilir bir varlığa dönüştürür), **evrensel gömme** (tek bir HTML `iframe` öğesi, bir simülasyonu herhangi bir sayfaya yerleştirir) ve **şeffaf, değiştirilebilir kod** (kara kutu yoktur — tek bir tıklama simülasyonu bir web düzenleyicisinde açar ve Creative Commons lisansı çoğu öğretmenin lisans ücreti ödemeden kullanmasına olanak tanır). Terim, Valerie Lockhart tarafından 2023'te, öğretmenlerin ve öğrencilerin p5.js JavaScript kitaplığıyla çok az veya hiç eğitim almadan simülasyonlar oluşturabildiklerini fark ettikten sonra ortaya atıldı.

Proje ayrıca, yapay zeka araçlarının aranabilir tanımlayıcılar üretebilmesi için bir MicroSim üst veri JSON Şeması yayınlıyor; çok yönlü bir MicroSim kayıt defteri ise yol haritasında. Çerçeveyi anlatan bir araştırma makalesi — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — arXiv'ta yer alıyor ([2511.19864](https://arxiv.org/abs/2511.19864)). Örnek simülasyonlar arasında Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula ve bir borsa getirisi grafiği bulunur; her biri sitede canlı olarak çalışır.

## Kimler için

Özellikle yükseköğretim ve mesleki eğitimde bir kurs ders kitabı oluşturmak veya sürdürmek isteyen eğitmenler ve öğretim tasarımcıları, ayrıca fakülte geliştiricileri ve eğitim içeriği yazmak için üretken yapay zeka kullanan herkes. Markdown ve Git iş akışına hâkim (veya öğrenmeye istekli) olan ve yapay zekânın site altyapısıyla — arama, gezinme, kavram grafiği — ilgilenmesini isteyen, böylece pedagojiye odaklanabilen eğitimciler için uygundur.

## Notlar ve uyarılar

Bu, hakemli bir çalışma değil, bir uygulayıcı rehberi ve araç zinciridir — öğrenme kazanımlarına ilişkin kanıttan ziyade bir iş akışı ve onun kendi eğitim gerekçesi ("akıllı ders kitapları, öğrencileri bilgi arayışında kavramlar arasında yönlendirir") sunar. MicroSim araştırma makalesi, ampirik dayanak olarak ona en yakın olan şeydir ve arXiv'ta öz yayınlıdır. Her iki proje de açık kaynaktır (intelligent-textbooks deposu MIT lisansı ve 38 yıldız bildiriyor; MicroSims Creative Commons lisansı ve 13 yıldız bildiriyor) ve etkin biçimde sürdülmektedir. Kavram grafikleri ve sözlük-öncelikli yapı, keşfedilebilirlik için gerçekten faydalıdır, ancak rehber oldukça teknik bir yazım iş akışı — MkDocs, Git ve üretken YZ araçları — varsayar; bu bazı fakülteler için engel olabilir. İçerik alındığında MicroSims kayıt defteri hâlâ yol haritasında olduğundan, belirli bir mevcut simülasyonu bulmak sitenin kendi arama ve gezinmesine bağlıdır.

## Bağlı kavramlar

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
