---
title: "Repertoire"
created: "2026-11-19T10:52:00-05:00"
updated: "2026-11-19T10:52:00-05:00"
type: resource
summary: "Webová aplikace pro tvorbu krokových úloh s AI, v níž vyučující nastavuje roli modelu a brány pro používání studenty a identita studenta zůstává mimo kontext modelu."
url: https://repertoirebuilder.org/
author: "Joseph Slade"
author_url: https://repertoirebuilder.org/overview
resource_type: [application]
access: [free with account]
last_verified: "2026-11-19"
foundations: [learning-design]
technology: [llm]
ethics: [privacy, ai-use-disclosure]
audience: [instructors, instructional designers]
level: [higher ed]
connected_resources: []
contributors: [editor]
translation_of: resources/repertoire
source_updated: "2026-11-19T10:52:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
ai_assist:
  - model: qwen/qwen4-max:free
    role: translation
    date: "2026-11-19"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Nástroj pro tvorbu úloh s integrovanou AI, který postavil Joseph Slade na Oregon State University a provozuje jej AI Education Labs, Inc. Východiskem je, že alternativou k chatbotu bez omezení není zákaz, ale struktura: vyučující definuje kroky, jimiž student prochází, rozhoduje, jakou roli model v každém kroku hraje, a nastavuje, do jaké míry se na něj student smí opřít. Úloha se pak publikuje jako odkaz pro připojení, místo aby se šířila jako dokument s prompty.

## Co s ním můžete dělat

- **Nastavte roli modelu pro každou úlohu.** Tvůrce nabízí přednastavené role tutora, sokratovského tazatele, poskytovatele zpětné vazby a výzkumného asistenta, plus vlastní prompt, takže asistent se chová tak, jak úloha vyžaduje.
- **Vložte brány mezi kroky.** Krok může vyžadovat, aby student vysvětlil své uvažování, než postoupí dál, a pomoc AI lze pro každý krok zastropovat — rozhraní ukazuje zbývající počet místo neomezeného přístupu.
- **Zvolte pracovní plochu.** Studenti píší na stránku dokumentu s komentáři na okraji; rozložení chatu a poznámkového bloku jsou k dispozici tam, kde se pro úlohu hodí lépe než stránka.
- **Publikujte a sledujte uvažování, nejen výstup.** Odkaz pro připojení zapíše studenty, postup se ukládá průběžně a vyučující může číst přepis každého studenta a exportovat jej jako CSV nebo Markdown.
- **Navrhněte s AI, pak dolaďte.** Nastavení může začít několika otázkami, nahranou existující úlohou nebo úlohou z dřívějška, přičemž asistent na straně vyučujícího vyplní první návrh.

Publikované příklady naznačují zamýšlený rozsah: úloha z fyziky o důkazech a svědectvích, cvičení z biologie diagnostikující chybu v uvažování ve vysvětlení AI stážisty, a úloha z psychologie ověřující, zda novinový článek popisuje design studie.

## Pro koho je určen

Vyučující ve vyšším vzdělávání, kteří chtějí, aby [[learning-design|návrh výuky]] nesl politiku AI — tedy kteří raději omezí, jak lze model použít uvnitř úlohy, než aby hlídali, zda byl použit. Brány a nastavení rolí jsou návrhovým vyjádřením [[guardrails|zábran]] a aplikace míří na kurzovou práci, nikoli na institucionální nasazení chatu.

## Poznámky a upozornění

- **Pilotní fáze.** Podmínky uvádějí, že služba je nyní poskytována bezplatně pro piloty a že placené plány mohou být zavedeny s oznámením a že funkce se mohou měnit nebo být staženy. Neexistuje veřejná stránka s cenami; k cenám se dostanete až po přihlášení.
- **Tvrzení o soukromí je architektonické a stojí za pozorné přečtení.** Každý student dostane pro každou úlohu náhodný identifikátor relace, mapování studentského účtu na relaci zůstává na serveru Repertoire a model dostává anonymní relaci, kontext úlohy a studentův text. Háček je v samotné politice: text, který student napíše a který ho identifikuje, se odesílá jako každý jiný text, a vyučující kurzu může přepisy číst.
- **Inference třetí strany.** Odpovědi se generují přes Claude API společnosti Anthropic s API společnosti OpenAI jako zálohou, za obchodních podmínek, které podle politiky k září 2026 vylučují trénování na vstupech a výstupech API. Instituce by si to měla potvrdit vlastní smlouvou, nikoli webovou stránkou.
- **Není to hodnotitel.** Politika i podmínky popisují úsudky asistenta, jako je „cíl splněn“, jako pomůcku pro vyučujícího; známky a akademická rozhodnutí zůstávají na vyučujícím a instituci a rozhodnutí o [[ai-use-disclosure|zveřejnění používání AI]] studentům se ponechávají na vyučujícím.
- **Hostováno v USA.** Data jsou uložena v Google Cloud Firestore s hostingem u Vercel a politika řeší závazky podle FERPA tam, kde služba nakládá se vzdělávacími záznamy; uživatelům mimo USA je sdělováno, že jejich data jsou zpracovávána tam.

## Související pojmy

- [[learning-design]] — strukturovaný návrh zadání jako bod, kde se politika AI stává konkrétní.
- [[guardrails]] — brány zapojení a zastropovaná pomoc AI jako návrhová omezení.
- [[ai-use-disclosure]] — o tom, jak se používání AI oznamuje studentům, rozhoduje vyučující, nikoli platforma.
