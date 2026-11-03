---
title: "Izrada inteligentnih udžbenika"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Vodič Dana McCrearyja otvorenog koda za izradu inteligentnih udžbenika: online udžbenika s pretraživanjem, navigacijom, pojmovnikom, kvizovima, grafom pojmova i ugrađenim simulacijama, izrađenih s MkDocs Materialom i generativnom umjetnom inteligencijom, uz knjižnicu MicroSims."
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
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

Mjesto **Intelligent Textbooks** McCrearyjev je vodič korak po korak za izradu *inteligentnih udžbenika* — online udžbenika koji nadilaze statične PDF-ove dodavanjem pretraživanja, navigacije mjestom, pojmovnika, sadržaja, upravljanja kvizovima, prikazanih formula, pregleda za društvene mreže, provjere poveznica i lako vizualiziranog **grafa pojmova** koji prikazuje sve pojmove u kolegiju i njihove ovisnosti. Vodič tvrdi da mnogi današnji kolegiji mogu imati koristi od kvalitetnih online udžbenika s tim značajkama i pokazuje kako ih izraditi pomoću sustava [MkDocs](http://mkdocs.com/) s temom Material i generativnom umjetnom inteligencijom za stvaranje i održavanje sadržaja.

Odlučujući je potez to što je udžbenik *napisan u Markdownu i generiran umjetnom inteligencijom*, konkretan primjer obrasca [[vibe-coding|autorskog rada uz pomoć umjetne inteligencije]] primijenjenog na [[curriculum-design|sadržaj kolegija]]: umjesto ručnog održavanja velikog mjesta, opišete kolegij i pustite generativnu umjetnu inteligenciju da proizvede i održava stranice, dok se alatni lanac brine za navigaciju, pretraživanje i graf pojmova. Popratna knjižnica [Claude Code Skills](https://dmccreary.github.io/ibook-skills/) tvrdi da automatizira više od 90 % poslova potrebnih za izradu udžbenika razine 2 iz opisa kolegija.

## Prateći izvor: MicroSims

Prirodni je pratilac ovog vodiča McCrearyjeva knjižnica **MicroSims** na <https://dmccreary.github.io/microsims/> (izvor: [github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), koja osigurava interaktivne simulacije koje inteligentni udžbenik ugrađuje. *MicroSim* (mikrosimulacija) jednostavna je interaktivna simulacija generirana umjetnom inteligencijom koja pomaže nastavnicima objasniti pojam i može se ugraditi u inteligentni udžbenik ili bilo koje mjesto koje prihvaća `iframe`. MicroSims se ističu po tri stvari: **generiranje uz pomoć umjetne inteligencije** (standardizirani obrasci dizajna pretvaraju opis simulacije prirodnim jezikom u datoteku koju se može dijeliti), **univerzalno ugrađivanje** (jedan HTML element `iframe` smješta je na svaku stranicu) i **transparentan kod koji se može mijenjati** (nema crne kutije — jedan klik otvara simulaciju u web-uređivaču, a licencija Creative Commons omogućuje većini nastavnika da ih rabe bez naknada). Naziv je 2023. skovala Valerie Lockhart nakon što je otkrila da nastavnici i studenti mogu izraditi simulacije u JavaScript knjižnici p5.js uz malo ili nimalo obuke.

Projekt objavljuje i JSON Schema za metapodatke MicroSims, pa alati umjetne inteligencije mogu generirati opise koji se mogu pretraživati, a facetirani registar MicroSims nalazi se u planu. Istraživački rad koji opisuje okvir — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with Universal Embedding and Adaptive Learning Support* — dostupan je na arXivu ([2511.19864](https://arxiv.org/abs/2511.19864)). Primjeri simulacija uključuju Bouncing Ball, Projectile Motion, String Harmonics, Conway's Game of Life, Euler's Formula i grafikon prinosa na burzi, a svaka radi uživo na mjestu.

## Za koga je

Nastavnici i dizajneri nastave koji žele izraditi ili održavati udžbenik za kolegij, posebno u visokom obrazovanju i stručnom osposobljavanju, te voditelji razvoja nastavnika i svatko tko rabi generativnu umjetnu inteligenciju za autorski rad u obrazovanju. Odgovara nastavnicima koji su upoznati s tijekom rada u Markdownu i Gitu (ili su ga spremni naučiti) i koji žele da umjetna inteligencija preuzme tehničku infrastrukturu mjesta — pretraživanje, navigaciju, graf pojmova — kako bi se oni mogli posvetiti pedagogiji.

## Napomene i upozorenja

Ovo je vodič praktičara i alatni lanac, a ne recenzirana studija — predstavlja tijek rada i vlastito obrazloženje („inteligentni udžbenici vode studente kroz pojmove na njihovu putu prema znanju“), a ne dokaze o ishodima učenja. Istraživački rad o MicroSims najbliži je empirijskoj potpori, a i on je samostalno objavljen na arXivu. Oba su projekta otvorenog koda (repozitorij intelligent-textbooks navodi MIT licenciju i 38 zvjezdica; MicroSims navodi licenciju Creative Commons i 13 zvjezdica) i aktivno se održavaju. Grafovi pojmova i struktura koja počinje pojmovnikom doista pomažu pronalaženju, ali vodič pretpostavlja prilično tehnički tijek rada — MkDocs, Git i alate generativne umjetne inteligencije — što nekima od nastavnika može biti prepreka. U trenutku unosa registar za MicroSims još je samo u planu, pa se pronalaženje određene postojeće simulacije oslanja na pretraživanje i navigaciju samog mjesta.

## Povezani pojmovi

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
