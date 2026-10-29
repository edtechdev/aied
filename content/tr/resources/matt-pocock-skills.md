---
title: "Gerçek Mühendisler için Beceriler"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Çok oturumlu bir öğretim becerisi, acımasız bir sorgulama becerisi ve bir ajanın izleyebileceği belgeler yazmaya ilişkin rehberlik dahil olmak üzere küçük, birleştirilebilir ajan becerilerinden oluşan Matt Pocock'ın açık kaynaklı koleksiyonu."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash
    role: drafting
    date: "2026-09-24"
    agent: hermes-agent
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-14"
    agent: hermes-agent
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir."
---

*Bu İngilizce sayfanın bir ana dili konuşanı tarafından gözden geçirilmemiş otomatik çevirisidir.*

**Gerçek Mühendisler için Beceriler**, Matt Pocock'ın yayınlanmış ajan becerileri dizinidir: Claude Code, Codex veya başka bir ajana kurulan, bütün olarak benimsenmekten ziyade uyarlanmak üzere yazılmış küçük, birleştirilebilir yönerge dosyaları. Koleksiyonun çoğu yazılım işine hizmet eder, ancak birkaç beceri, kod için değil öğretme ve sorgulama için inşa edilmiş eğitim araçlarıdır.

En açık örnek, birden çok oturum üzerinde çalışan ve çalışma dizinini durum taşıyan bir öğretim çalışma alanı olarak ele alan `teach` becerisidir; böylece bir öğrenenin ilerlemesi ve açık soruları her seferinde yeniden başlamak yerine konuşmalar arasında korunur. `grill-me` ve onun temelindeki `grilling` ilkesi, her dal çözülene kadar kullanıcıyı bir plan hakkında acımasızca sorgular; bu, konuşma havasından ziyade yeniden kullanılabilir bir prosedür olarak [[socratic-method|Sokratik sorgulama]] olarak karşımıza çıkar. `wait-what`, bir mesajın yerine ulaşmadığı anda, onu eksik bağlamla birlikte sade dille yeniden sunarak karşılık verir; herhangi bir öğretmenin, bir açıklamanın ilk seferde hedefini ıskalamasını izlerken tanıdığı bir hamledir. `writing-for-agents`, bir [[prompt-engineering|ajan]]ın izleyebileceği belgelerin nasıl yazılacağını kapsar; bu, günümüzde [[pedagogical-agent|YZ]] kurs materyalleri için yönerge yazmanın pratik biçimidir. `to-questionnaire`, bir kararı onu yanıtlayabilecek kişiler için bir anket formuna dönüştürür; `handoff`, bir konuşmayı başka bir ajanın devam edebileceği bir belgeye sıkıştırır; `wizard` ise yalnızca bir insanın gerçekleştirebileceği adımlar için etkileşimli bir kılavuz üretir.

## Benimsemeden önce bilinmesi gerekenler

Her şey MIT altında [[open-source|açık kaynaktır]] ve yerel [[ai-literacy|YZ okuryazarlığı]] ya da [[self-directed-learning|öz yönelimli çalışma]] için bir başlangıç noktası olarak ücretsiz alınabilir. Benimseme geniş ve hızlı hareket ediyor: Eylül 2026'da kontrol edildiğinde yaklaşık 270.000 yıldız ve 23.000 fork, en son commit ise 18 Eylül 2026'da. Uyarı kapsamdır. Beceriler bir [[human-ai-collaboration|mühendisin]] çalışma bağlamını varsayar; mühendislik, üretkenlik, kullanımdan kaldırılmış ve devam eden bölmeler halinde düzenlenirler, bu nedenle bazı girdiler açıkça tamamlanmamış veya emeklidir ve README aynı zamanda bir bülten kaydı işlevi görür. Öğretme ve sorgulama becerilerini aktarılabilir kısım olarak görün ve birini öğrencilerin önüne koymadan önce herhangi birini yeniden yazmayı bekleyin.

## Bağlı kavramlar
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
