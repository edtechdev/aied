---
title: "MindRouter"
created: "2026-11-12T11:08:00-05:00"
updated: "2026-11-12T11:30:00-05:00"
type: resource
summary: "Brána inferencí s licencí Apache-2.0 z University of Idaho, která staví kampusový klaster uzlů GPU vLLM a Ollama za jediné rozhraní API kompatibilní s OpenAI a přidává spravedlivé plánování, kvóty tokenů na uživatele, SSO, auditní logování a živé sledování GPU a spotřeby energie."
url: https://github.com/ui-insight/MindRouter
source_code: https://github.com/ui-insight/MindRouter
author: "University of Idaho (ui-insight)"
resource_type: [software]
access: [free]
license: "Apache-2.0"
last_verified: "2026-11-12"
technology: [generative-ai, llm, open-source]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed]
connected_resources: [amplify-genai]
translation_of: resources/mindrouter
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

Většina kampusových diskusí o AI začíná tím, který model koupit, a končí před obtížnější otázkou: kde běží, kdo ho měří a kdo vidí logy. MindRouter je odpovědí na tuto druhou otázku. Je to samostatně hostovaná brána, která stojí před heterogenním clusterem serverů [[llm|LLM]] — uzlů vLLM a Ollama na GPU, které instituce vlastní — a vystavuje jedno API mluvící dialekty OpenAI, Anthropic a Ollama a překládá mezi nimi, takže stávající klientský kód funguje dál.

## Co s ním můžete dělat

Namiřte nástroj na bránu místo na koncový bod dodavatele. Za ní se MindRouter stará o to, co sdílené nasazení potřebuje: spravedlivé plánování s váženým deficitním round robinem, kvóty tokenů a požadavků na uživatele, přístup podle rolí s volitelným SSO přes Azure AD/Entra, Google, libovolného poskytovatele OIDC nebo SAML 2.0 a plné auditní logování promptů, odpovědí a artefaktů. Agent sidecar pro GPU hlásí využití, paměť, teplotu a příkon na uzel, takže administrátor vidí náklady na energii na požadavek a může backend plynule vypnout, když se blíží údržba. Pokrývá víc než chat — embeddingy, vidění, generování obrázků a videa, syntézu a rozpoznávání řeči, OCR dokumentů — a dodává servery MCP a dovednosti agentů pro kódovací asistenty.

Důvod, proč by to vysokou školu mělo zajímat, je ten, který projekt pojmenovává: [[institutional-ai-infrastructure|institucionální suverenita v oblasti AI]]. Prompty a dokumenty zůstávají na infrastruktuře, kterou instituce provozuje, místo aby procházely cloudem třetí strany, což se snáze obhajuje před akademickým senátem nebo úřadem pro [[privacy|ochranu soukromí]] než smlouva o zpracování dat s dodavatelem. Zda tento argument obstojí, závisí na tom, zda instituce má GPU, příkon a personál — brána činí lokální hosting zvládnutelným, ne levným.

## Pro koho je určen

Výzkumné výpočetní skupiny a centrální IT s existující kapacitou GPU, centra pro výuku a učení, která chtějí jedno místo pro měření využití akademiky a studenty, a administrátoři poměřující hostované podnikové platformy s vlastním provozem inferencí. Jde o nasazení Docker Compose s dokumentovanou konfigurací SSO a vlastním brandingem, udržované na University of Idaho, kde je autor představil na PEARC '26; projekt měl k listopadu 2026 22 hvězd a 3 forky.

## Poznámky a upozornění

Zdarma a open source pod Apache-2.0, ale náklady se přesouvají, nemizí: hardware, elektřina a čas personálu na provoz clusteru. Software je na poměry infrastruktury mladý — tři přispěvatelé, jediná výchozí instituce a vydání číslovaná ve stovkách tagů — takže škola by ho měla pilotovat vedle stávající služby, ne jako jedinou cestu k modelu. Publikované hodnocení chování plánování a kvót při skutečné kampusové zátěži v repozitáři není; místem, kde hledat vlastní popis autorů, je článek z PEARC.

## Související pojmy

- [[llm]]
- [[open-source]]
- [[edtech-platform]]
