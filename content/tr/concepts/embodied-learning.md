---
title: Vüut Bulmuş Öğrenme
created: "2026-10-14T22:00:00-04:00"
type: concept
foundations: [computational-thinking]
pedagogy: [active-learning, embodied-learning, situated-learning]
technology: [educational-robotics]
confidence: high
translation_of: concepts/embodied-learning
source_updated: "2026-10-26T07:55:00-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

> **Vüut bulmuş öğrenme** — öğrenmenin bedensel deneyime, fiziksel etkileşime ve öğrenenin duyusal-motor bağlamına dayandığını belirten [[pedagogy|pedagojik]] ilke. Vüut bulmuş yaklaşımlar, bilişin salt soyut olmadığını, beden ve onun çevreyle etkileşimi tarafından şekillendiğini savunur. [[ai-education|Eğitimde YZ]] bağlamında vüut bulma, soyut kavramları (program mantığı veya sosyal beceriler gibi) gözlemlenebilir, elle tutulur davranışta temellendiren [[educational-robotics|eğitsel robotlar]] ve [[educational-robotics|sosyal robotlar]] aracılığıyla gerçekleşir.

## Dikkate Alınması Gereken Sorular

- Öğrenmeyi çoğu zaman “kafanın içinde” gerçekleşen, bedenin ise beyni taşıyıp gezdiren bir şey olarak düşünürüz. Ya öğrenme gerçekten bedensel deneyime ve çevreyle etkileşime dayanıyorsa? Bedeninizi gerektirdiğini düşündüğünüz bir konuyu düşünün — o konu salt soyut biçimde öğrenilebilir miydi?
- Vüut bulmuş yaklaşımlar, fiziksel ve elle tutulur bir ajanın öğrenenlerin soyut fikirleri somut sonuçlara bağlamasına yardımcı olduğunu iddia eder — örneğin bir programın robotu hareket ettirdiğini görmek gibi. Fiziksel bir şey yapmanın soyut bir kavramı sonunda “oturtmasını” ne zaman fark ettiniz?
- Bazı [[research-methods-aied|araştırmacılar]], jesti anlamanın kanıtı olarak ele alır — kavramsal kavrayışı değerlendirmek için öğrencilerin konuşmalarına paralel olarak el hareketlerini izler. Bir öğrencinin elleri kavramı sözcüklerinden önce “biliyorsa”, bu, öğrenmeyi nasıl değerlendirmemiz gerektiği konusunda ne ima edebilir?
- Ortaya çıkan bir eleştiri, soyut semboller üzerinde çalışan “bedensiz” YZ'ye meydan okumakta ve YZ'nin, öğrenenlerin düşüncesini dış kaynaklara devretmek yerine sürdürmek amacıyla vüut bulmuş zekânın etrafında tasarlanması gerektiğini savunmaktadır. Hiç bedeni olmamış bir YZ'nin vüut bulmuş öğrenmeyi tam olarak destekleyebileceğini düşünüyor musunuz?

## Giriş

Vüut bulmuş öğrenme, [[active-learning]], [[experiential-learning]] ve duruma bağlı/[[constructivist]] teorilerle yakından ilişkilidir. Temel iddia şudur: fiziksel, elle tutulur bir ajan, öğrenenlerin soyut fikirleri somut sonuçlara bağlamasına yardımcı olur — bir robotu hareket ettiren bir program ya da fiziksel bir robotla yapılan bir rol oyunu gibi — salt ekran temelli etkileşimin belki de sağlayamayacağı biçimde. Robotik, eğitimde YZ'nin en net vüut bulmasıdır; öğrenenlere göreceği, dokunacağı ve gözlemleyeceği bir şey sunar.

### Vüut bulmuş öğrenme bilgi tabanının araştırmalarında nasıl görünür

- **Temellendirilmiş programlama:** [[roboblockly-conversational-block-robotics-ct-2026|RoboBlockly Studio]], [[cs-education|blok programlamayı]] vüut bulmuş robot uygulamasında temellendirerek yazma, çalıştırma, gözlemleme ve revize etme döngüsünü sıkı biçimde kurar; böylece öğrenenler kodlarının davranışa dönüştüğünü görür.
- **Sosyal-robotik etkileşim:** [[storytelling-in-education|hikâye anlatımı]] için kullanılan [[educational-robotics|sosyal robotlar]] ([[motibo-digital-storytelling-robots-motivation-2026|MotiBo]], [[robobuddy-llm-social-robots-classroom-2025|RoboBuddy]]), rol oyunu ([[remind-robot-mediated-roleplay-antibullying-2026|REMind]]) ve işaret dili ([[pepper-robot-sign-language-lis-2025|Pepper]]), ilişkisel ve [[social-emotional-learning|duygusal]] öğrenmeyi destekleyen vüut bulmuş sosyal etkileşim sağlar.
- **Vüut bulma özellikleri sonuçları yönlendiren şey değildir.** 11 RALL çalışmasını (N = 595, g = 0,83, I² = %84,4) kapsayan bir meta analiz, robot morfolojisinin, modalitenin, özerkliğin ve sosyal rolün ikinci dil öğrenimini yönlendirmediğini bulmuştur; grup temelli biçimler birebiri formatları geçmiş, böylece etkiyi taşıyan robotun gömülmesi değil konumu olmuştur ([[robot-assisted-language-learning-meta-analysis-2026|Wang ve ark. (2026)]]).
- **Vücut izleme, düzenlemeyi ölçülebilir bir sinyale dönüştürür.** Hareket etiketlerinin öğrenci ajanlarını yansıtılmış bir model üzerinde hareket ettirdiği karma gerçeklik bir fotosentez simülasyonunda, bir LLM hattı 40 dakikalık videoda kendini düzenleme davranışının 470 bölümünü etiketlemiş ve baskın olma davranışı %66,4 oranında gerçekleşmiştir ([[fonteles-embodied-learning-human-in-the-loop-multimodal-2026|Fonteles ve ark., 2026]]).
- **Vüut bulma ve yaratıcı yazma:** [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen|Yaratıcı yazmada robot-BBÜ bütünleşmesi araştırması]], vüut bulmanın öğrenenlerin etkileşimini ve sonuçlarını nasıl etkilediğini incelemektedir.
- **İnsan–robot etkileşimi:** [[educational-robotics|HRI]] araştırması ([[task-context-trust-educational-hri-2026|güven]], [[human-autonomy-agency-hri-review-2025|etki]]), fiziksel gömülmenin güveni, [[student-engagement|katılımı]] ve [[agency|özerkliği]] nasıl şekillendirdiğini inceler.
- **Anlamanın kanıtı olarak jest:** [[multimodal-embodied-cognition-oral-explanations-2026|Morphew ve ark.]], bilgisayarlı görü jest izlemesini konuşmanın [[llm]] analiziyle bütünleştirerek, mühendislik öğrencilerinin istatistiğe ilişkin kavramsal anlayışının hem konuşma hem jest yoluyla ifade edildiğini göstermektedir. Yüksek güvenilirlikli açıklayıcı jestler belirli kavramlar (özellikle ortalama) çevresinde kümelenmekte ve sıkı jest–konuşma eşleşmesi, tutarlı kavramsal konuşmayı işaret ederken ayrışma, gelişmekte olan fikirleri işaret etmektedir — bu durum, vüut bulmuş eylemi yalnızca bir öğrenme mekanizması olarak değil, [[multimodal|çok kipli öğrenme analitiği]] yoluyla [[assessment-validity|değerlendirmede]] bir kanıt olarak konumlandırmaktadır.

### Vüut bulmuş zekâ ve bedensiz YZ eleştirisi

Bilgi tabanının vüut bulma araştırmalarının ikinci, daha teorik akımı, YZ-[[sociocultural-learning|aracılı öğrenmede]] *bedenin* rolüne ilişkindir — fiziksel robotlar aracılığıyla değil, [[ai-technologies|YZ sistemlerinin]] kendilerinin (bedensel olup olmadığı veya olup olamayacağı) sorusu aracılığıyla. Bu çalışmalar, soyut bilgi işlemeye dayalı sembolik, bedensiz YZ modellerinin egemenliğine meydan okumaktadır:

- **Tasarım ilkesi olarak vüut bulmuş YZ.** **E3-HOT çerçevesi**, öğrenenlerin bilişsel özerkliğini ve [[critical-thinking|üst düzey düşünmeyi]] sürdürmek ([[cognitive-offloading|bilişsel dış kaynaklara devretmeyi]] teşvik etmek yerine) için YZ'nin, sanal–gerçek bütünleşik bir öğrenme ortamında *vüut bulmuş zekânın* — durumsal gömülme, vüut bulmuş katılım ve bilişsel yaratım — etrafında tasarlanması gerektiğini savunmaktadır. ([[zhu-e3-hot-embodied-intelligence-sustainable-learning]])
- **Bedensiz [[generative-ai|üretken YZ]]'nin sınırları.** Post-bilişsel yaklaşımlar, mevcut GenAI sistemlerinde propriyosepsiyon, çok kipli etki ve vüut bulmuş uygulamanın bulunmadığını ileri sürerek; durumsallığa, ortaya çıkışa (emergence) ve duyusal-motor eşleşmeye dayalı bir “vüut bulmuş YZ”'yi savunmakta ve insan–[[student-ai-interaction|YZ etkileşimi]] için algısal–[[affective-computing|duygusal]] bir koreografi önermektedir. ([[videla-embodied-ai-education-choreography]])
- **Gömülme, durumsallık ve sosyal yapılanma.** [[science-education|Bilim öğreniminde]], YZ araçları dijital uygulama topluluklarını ve sınır geçişini mümkün kılan “aracılaştırma yapıtları” işlevi görür; vüut bulmuş, özgün soruşturmayı gerçek dünya ve disiplinler arası bağlamlara bağlar. ([[li-ai-science-situated-learning-teachers-2025]]) Bu durum, vüut bulmayı [[situated-learning]] ve [[distributed-cognition]] ile ilişkilendirir.

Vüut bulmuş öğrenme; [[educational-robotics]], [[educational-robotics]], [[educational-robotics]], [[active-learning]], [[experiential-learning]], [[situated-learning]], [[distributed-cognition]], [[computational-thinking]] ve [[social-emotional-learning]] ile bağlantılıdır.

## Yaygın yanlış anlamalar

- **“Vücut, vücut bulmuş öğrenmeyi işler kılan şeydir.”** **11 RALL çalışmasını (N = 595, g = 0.83, I² = %84,4)** kapsayan bir meta analiz, **robot morfolojisinin, modalitenin, özerkliğin ve sosyal rolün** ikinci dil öğrenme çıktılarını **yönlendirmediğini** bulmuştur. Vücut bulma özellikleri etkin bileşen değildi ve heterojenlik yeterince yüksekti (I² = %84,4) ki havuzlanmış etki çok karışık bir müdahale kümesini betimler.
- **“Büyük bir etki mekanizmayı çözer.”** 11 çalışma genelinde 595 katılımcıyla g = 0.83 gerçek bir sinyaldir ve neyin ürettiğini tanımlamaz. Tasarım özellikleri etkiyi yönlendirmediğine göre akla yatkın mekanizma donanımda değil pedagojik etkinlikte durur; bu da neye yatırım yapılacağını değiştirir.
- **“Vücut bulma ölçülemez, dolayısıyla kuramsal kalır.”** Vücut izleme, düzenlemeyi **ölçülebilir bir sinyale** dönüştürebilir: hareket etiketlerinin öğrenci ajanlarını yansıtılmış bir model üzerinde hareket ettirdiği karma gerçeklik bir fotosentez simülasyonunda bir LLM hattı, **470 bölümü** düzenleme davranışı olarak etiketlemiştir. Yapı, tanımlanması zor olduğu yerde bile işlevselleştirilebilir.

## Bağlı kavramlar
- [[educational-robotics]]
- [[active-learning]]
- [[experiential-learning]]
- [[situated-learning]]
- [[distributed-cognition]]
- [[computational-thinking]]
- [[social-emotional-learning]]
- [[learning-theories]]
- [[multimodal]]
- [[assessment-validity]]
- [[virtual-and-augmented-reality]] — vüut bulmayı doğrudan yararlanılmaya çalışan modalite

## Bağlı makaleler
- [[fonteles-embodied-learning-human-in-the-loop-multimodal-2026]] — Hareket izlemeli fotosentez simülasyonu, bir LLM hattıyla çözümlenmiştir (Fonteles ve ark. 2026)
- [[multimodal-embodied-cognition-oral-explanations-2026]] — A Multimodal Framework for Embodied Cognition in Oral Explanations
- [[zhu-e3-hot-embodied-intelligence-sustainable-learning]] — Fostering Sustainable Learning via Embodied Intelligence (E3-HOT)
- [[roboblockly-conversational-block-robotics-ct-2026]] — RoboBlockly Studio
- [[motibo-digital-storytelling-robots-motivation-2026]] — MotiBo
- [[remind-robot-mediated-roleplay-antibullying-2026]] — REMind
- [[pepper-robot-sign-language-lis-2025]] — Pepper and Sign Language
- [[enhancing-creative-writing-with-robot-llm-integration-the-interplay-of-embodimen]] — Robot-LLM Integration in Creative Writing
- [[robot-assisted-language-learning-meta-analysis-2026]] — Meta-analysis of AI-enhanced embodied robot-assisted language learning
- [[vargas-situated-learning-ai-review-2024]]
- [[li-ai-science-situated-learning-teachers-2025]]
- [[vargas-ai-catalyst-situated-learning-2026]]
- [[videla-embodied-ai-education-choreography]]