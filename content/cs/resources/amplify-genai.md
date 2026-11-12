---
title: "Amplify GenAI"
created: "2026-11-12T11:06:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Platforma podnikové generativní AI od Vanderbilta s licencí MIT, nasazovaná na vlastním účtu AWS instituce: vlastní asistenti nad lokálními dokumenty, odpovědi s rozšířeným vyhledáváním, sdílení v celé organizaci a účtování nákladů až na jednotlivou zprávu."
url: https://www.amplifygenai.org/
source_code: https://github.com/gaiin-platform
author: "Vanderbilt University (gaiin-platform)"
author_url: https://www.vanderbilt.edu/agi/platforms/amplify/
resource_type: [software, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source, rag]
audience: [administrators, instructors, faculty developers, educational technology developers]
level: [higher ed]
connected_resources: [mindrouter]
translation_of: resources/amplify-genai
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatický strojový překlad této anglické stránky, který ještě nebyl zkontrolován rodilým mluvčím.*

Amplify GenAI je opačná sázka než celokampusová licence na komerčního asistenta: instituce provozuje platformu sama, na vlastním účtu Amazon Web Services, a platí za to, co spotřebuje. Vanderbilt ji postavil pro vlastní komunitu, uvolnil pod licencí MIT ve třech repozitářích a nyní ji nabízí dalším organizacím jako alternativu ke korporátním smlouvám za místo — argument zní, že drahou částí mají být modely, nikoli počet míst.

## Co s ní můžete dělat

Uživatelé vytvářejí vlastní asistenty nahráním dokumentů nebo připojením datových zdrojů a asistenti odpovídají pomocí [[rag|generování s rozšířeným vyhledáváním]] nad tímto materiálem, nikoli jen z obecného tréninku. Asistenty lze sdílet v celé organizaci, řetězit do jedné konverzace a vybavit šablonami promptů; platforma také vytváří soubory PowerPoint a Word, diagramy a vizualizace. Administrátoři dostanou to, co sdílená služba potřebuje: účtování nákladů až na úroveň zprávy, limity na uživatele, složky a pracovní prostory a SSO, to vše v nasazení, které instituce kontroluje.

Návrhovým rozhodnutím, na kterém pro [[higher-ed|vysokou školu]] záleží nejvíc, je model účtování. Vanderbilt uvádí, že při 1 300 uživatelích pilotu činily náklady na uživatele zhruba \$3 měsíčně včetně AWS a že polovina těchto uživatelů spotřebovala méně než \$1 měsíčně na tokenech — čísla, která univerzita předkládá jako případovou studii, nikoli jako auditovaný benchmark. Účtování podle spotřeby odměňuje kampus, kde většinu práce dělá menšina uživatelů, což je běžný tvar zavádění AI, a umožňuje odpovědět na otázku finančního oddělení („kolik to stojí na studenta?“) z logů, nikoli ze smlouvy.

## Pro koho je určena

Centrální IT a kanceláře CIO, které už provozují zátěž v AWS a chtějí alternativu komunitně podporovanou namísto komerčního podnikového asistenta; akademičtí pracovníci, kteří potřebují asistenty postavené na materiálu kurzu, aniž by ho posílali do spotřebitelského produktu dodavatele; a instituce, které chtějí jedno místo, kde uvidí, co lidé s modely dělají. Protože se platforma nasazuje na vlastní účet instituce, otázku umístění dat řeší nasazení, nikoli slib dodavatele.

## Poznámky a upozornění

Licence je zdarma, provoz nikoli: instituce platí AWS a poskytovatelům modelů. Volba modelu probíhá přes Amazon Bedrock (Anthropic, Mistral) nebo OpenAI a Microsoft Azure a provoz vlastních lokálních modelů není implementován. Projekt výslovně uvádí, že nemůže podporovat individuální nasazení, a odkazuje organizace na komerční partnery — realistické náklady tedy zahrnují personál nebo dodavatele. Jde o nasazení ze tří repozitářů (frontend, backend, infrastruktura) s desítkami hvězd, nikoli tisíci, a výše uvedené srovnání nákladů je vlastní zkušenost Vanderbilta, nikoli kontrolovaná studie. Instituce, které raději drží inferenci na vlastním hardwaru, by se měly podívat na [MindRouter](/aied/resources/mindrouter/) a číst oba texty společně: Amplify je aplikační vrstva nad modely dodavatelů, MindRouter je brána nad vlastními GPU.

## Související pojmy

- [[rag]]
- [[open-source]]
- [[edtech-platform]]
- [[governance]]
