---
title: "conText"
created: "2026-11-12T19:15:00-05:00"
updated: "2026-11-13T12:50:00-05:00"
type: resource
summary: "Besplatan preglednik-podučavatelj koji pročita fotografiju bilježnice, PDF ili tekst i zatim provodi učenika kroz njega sokratski na engleskom ili španjolskom, crtajući uživo graf ideja koje povezuje dok govori."
url: https://context.aideatext.ai/?lang=en
author: "AIdeaText"
author_url: https://aideatext.ai/
resource_type: [software]
access: [free]
last_verified: "2026-11-12"
pedagogy: [socratic-method, metacognition, scaffolding]
technology: [conversational-ai, knowledge-graph, speech-and-voice-technologies]
assessment: [formative-assessment]
audience: [learners, instructors, faculty developers]
level: [k 12, higher ed]
translation_of: resources/context-aideatext
source_updated: "2026-11-12T18:05:00-05:00"
translation_note: "Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-12"
    agent: hermes-agent
---

*Automatski strojni prijevod ove engleske stranice, koji još nije pregledao izvorni govornik.*

conText je najčišća mala demonstracija smjera o kojem [[intelligent-tutoring|AI podučavanje]] uglavnom govori, a rijetko ga provodi: model ne odgovara na učenikovo pitanje, nego postavlja sljedeće, a učenikove ideje crtaju se kao graf dok govori. Učitajte fotografiju stranice bilježnice, PDF ili tekst, i alat najprije kaže što je razumio, a zatim započinje govorni [[socratic-method|sokratski]] dijalog. Svaka ideja koju učenik navede pojavljuje se kao čvor u živom [[knowledge-graph|grafu znanja]]; bridovi se pojavljuju kad ih razgovor poveže, a ploča izvješćuje koliko ideja ostaje nepovezano.

## Što možete raditi s njim

Petlja je namjerno kratka. Materijal ulazi (do 10 MB, osam PDF stranica ili 15,000 znakova teksta), podučavatelj ga pročita natrag, a razgovor je glasom — stranica navodi da podučavatelj ne ocjenjuje i ne piše umjesto učenika. Graf je artefakt koji sesiju čini vrijednom poslije: pokazuje koje je ideje učenik doista doveo u vezu, a koje su ostale labave, što je mnogo konkretnija stvar za pregled od transkripta razgovora. Sesija se može izvesti kao XML datoteka grafa i ponovno učitati drugog dana radi nastavka, a gumb za brisanje briše je odmah; inače je poslužitelj uklanja nakon jednog sata.

Ta kombinacija — podučavatelj koji uskraćuje odgovor, uz vizualni zapis zaključivanja — točno je unutar onoga što [[scaffolding|postupna potpora]] i [[metacognition|metakognitivna]] refleksija nastoje postići, i daje nastavniku nešto konkretno o čemu može pitati umjesto dovršenog eseja ili točnog broja. Okvir same stranice je da točan rezultat više ne dokazuje razumijevanje kad ga generativna umjetna inteligencija može proizvesti, pa proces mora biti vidljiv.

## Za koga je

Učenici koji rade na tekstu ili problemima i žele da ih se ispituje, a ne da im se odgovara umjesto njih; nastavnici koji žele niskorizičnu provjeru može li učenik povezivati ideje; i edukatori nastavnika koji traže konkretan primjer dokaza procesa. Nastavnici imaju vodič usklađen s kurikulumom na engleskom, španjolskom, portugalskom i francuskom; alat sam radi na engleskom i španjolskom, a video obilazak je na španjolskom.

## Napomene i upozorenja

Za alat namijenjen učenicima nije objavljena cijena ni račun, dok se institucionalna postava — oblak, lokalno ili hibridno — nudi kroz posebnu ponudu i sastanak; tretirajte „besplatno“ kao stanje javne demonstracije u studenom 2026., a ne kao jamstvo. Tekst i slike idu u hostanu uslugu koju pokreće Claude, a sama stranica kaže korisnicima da uklone imena, iznose, adrese i nazive tvrtki prije učitavanja, što teret deidentifikacije prebacuje na osobu koja učitava, a ne na platformu. Sesije se same brišu nakon sata osim ako nisu izvezene. Tvrtka iza toga također nudi institucijama širu platformu za procjenu putem grafova zaključivanja, a njezine tvrdnje o razlikovanju deduktivnih, induktivnih, abduktivnih i analogijskih grafova dolaze iz četiri referentna teksta — stranica to naziva demonstracijom, uz validaciju u mjerilu koja tek slijedi.

## Povezani pojmovi

- [[socratic-method]]
- [[knowledge-graph]]
- [[metacognition]]
- [[scaffolding]]
- [[formative-assessment]]
- [[speech-and-voice-technologies]]
