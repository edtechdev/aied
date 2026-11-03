---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Agent vještina otvorenog koda i privatni uređivač u pregledniku koji osamnaest pravila za jasnije pisanje pretvaraju u načine rada za nacrt, prepisivanje i pregled teksta."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

**Clarity** spaja Agent vještinu s uređivačem u pregledniku, oboje izgrađeno oko osamnaest pravila za pisanje koje „zaslužuje svog čitatelja“. Vještina se instalira u agente za kodiranje poput Claude Codea i Codexa naredbom `npx skills add addyosmani/clarity`, a zatim radi u tri načina: način pregleda kritizira nacrt i ne dira datoteku, način prepisivanja uređuje nacrt na mjestu, a način intervjua najprije postavlja pitanja piscu i piše zajedno s njim na temelju odgovora. [[feedback|Povratna informacija]] koju pisac dobiva usmjerena je na sadržaj prije stila. Pravila pitaju za koga je tekst i što ta publika već zna, traže tvrdnje umjesto tema i konkretno umjesto apstraktnog, a prazno razvlačenje tretiraju kao problem neznanja čemu tekst služi, a ne kao problem rječnika.

Uređivač u pregledniku radi lokalno u stranici i ne prenosi nacrt. Prijavljuje znakove strojno napisanog teksta, čitljivost i praznine u sadržaju, što ga čini korisnim za pregled teksta koji je proizvela [[generative-ai|generativna umjetna inteligencija]] prije nego dođe do čitatelja. Projekt izričito kaže da je cilj pisanje koje ostaje prepoznatljivo autorovo, a ne proza skrojena da prođe [[ai-detection|otkrivanje umjetne inteligencije]], razliku koju će nastavnici prepoznati kad postavljaju politiku o [[writing-education|pisanju]] uz pomoć umjetne inteligencije.

## Što treba znati prije primjene

Repozitorij objavljuje protokol evaluacije, primjere prije i poslije u mapi `samples/` i referentne datoteke iza vještine, pa preglednik može provjeriti kako se pravila ponašaju, umjesto da tvrdnju prihvati na vjeru; ova stranica ne ponavlja nijedan izmjereni rezultat. Autor je Addy Osmani, licencija je MIT, a rad je neovisan, a ne proizvod neke ustanove. Projekt je mlad i aktivan: nastao je u kolovozu 2026., ima 54 commita, tri izdanja s najnovijom verzijom 0.2.1 tog rujna i otprilike 250 zvjezdica pri provjeri u rujnu 2026. Tri su suradnika unijela izmjene. Upute vještine učitavaju se u agenta koji čitatelj već pokreće, pa vrijede uobičajene napomene o [[prompt-engineering|inženjerstvu poticaja]]: kvaliteta kritike ovisi o nacrtu koji joj se preda.

## Povezani pojmovi
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
