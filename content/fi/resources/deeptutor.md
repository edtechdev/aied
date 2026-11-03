---
title: "DeepTutor"
created: "2026-09-20T17:30:00-04:00"
type: resource
summary: "DeepTutor-agenttisen tutorointikehyksen avoimen lähdekoodin julkaisu: yksi työtila tutorointiin, kysymysten tuottamiseen, mastery-harjoitteluun, tutkimukseen ja visualisointiin, tarkasteltavalla oppijamuistilla."
url: https://github.com/HKUDS/DeepTutor
author: "HKU Data Intelligence Lab (HKUDS)"
resource_type: [software, collection of tools]
access: [free]
license: "Apache 2.0"
last_verified: "2026-09-20"
foundations: [agentic-ai, ai-literacy]
pedagogy: [mastery-learning, self-regulated-learning, scaffolding]
technology: [intelligent-tutoring, personalized-learning, rag, llm]
assessment: [automated-question-generation]
level: [higher ed]
audience: [instructors, learners, researchers, instructional designers, educational technology developers]
confidence: high
connected_resources: [openmaic]
translation_of: resources/deeptutor
source_updated: "2026-09-20T17:30:00-04:00"
translation_note: "Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Tämän englanninkielisen sivun automaattinen konekäännös, jota ei ole vielä tarkastanut äidinkielinen puhuja.*

**DeepTutor** on sen tutorointikehyksen avoimen lähdekoodin toteutus, jota arvioitiin [[intelligent-tutoring|DeepTutor-tutkimuksessa]], ja se on kasvanut selvästi tuon artikkelin laajuuden yli yleiseksi agenttinatiiviksi oppimistyötilaksi. Tutorointi, ongelmanratkaisu, visailujen tuottaminen, mastery-harjoittelu, tutkimus ja visualisointi jakavat yhden kyvykkyysajoympäristön ja yhden istuntokontekstin, joten ongelmia ratkaistaessa rakentuva oppijaprofiili ehdollistaa sitä seuraavat selitykset ja harjoituskysymykset.

## Mitä sillä voi tehdä

Kymmenen tilaa – Chat, Ask Questions, Quiz, Research, Visualize, Solve, Course Study, Mastery Path, Immersive Reading ja Immersive Watching – toimivat samalla ajona, hyödyntäen uudelleenkäytettäviä tietopohjia, kirjoja, luonnoksia, muistikirjoja, kysymyspankkeja ja persoonia. Haku on tarkoituksella monimoottorinen: versioidut RAG-kirjastot LlamaIndexin, PageIndexin, GraphRAG:n, LightRAG:n tai etä-LightRAG-palvelimen päällä, sekä itse isännöity WeKnora-tietopohja, Tencent IMAn tai MarginNoten kirjasto tai linkitetty Obsidian-holvi. Muisti on tarkasteltavaa eikä läpinäkymätöntä: L1-jäljet, L2-pinnan tiivistelmät ja L3-synteesi ovat näkyvissä ja muokattavissa, ja Memory Graph yhdistää jokaisen tiivistelmän sen taustalla olevaan näyttöön. `deeptutor`-binääri tarjoaa terminaalin REPL:n ja striimaa NDJSONia mille tahansa agentille, joka haluaa ajaa sitä työkaluna, ja EduHub-yhteisö jakaa asennettavia taitoja.

## Kenelle se on tarkoitettu

Korkeakoulujen opettajille ja tutkijoille, jotka haluavat käyttöön otettavan version kehyksestä, josta artikkeli raportoi, kehittäjille, jotka rakentavat liitettävän ajoympäristön päälle, ja itseohjautuville oppijoille, jotka ovat valmiita ajamaan oman instanssinsa. Dokumentaatio on osoitteessa deeptutor.info.

## Huomioita

Lisensoitu Apache 2.0 -lisenssillä, versiossa 1.6.9 syyskuussa 2026 ja noin 40 000 GitHub-tähdellä. Sen taustalla oleva julkaistu arviointi – 10,8 %:n keskimääräinen parannus personoiduissa mittareissa vahvoihin perustasoihin verrattuna ja 29,4 % vahvempi yleinen agenttinen päättely viidellä runkomallilla TutorBench-vertailumittarissa – on tiivistetty [[zhao-deeptutor-agentic-personalized-tutoring-2026|artikkelisivulle]], jonka rajoitukset pätevät myös tässä. Kuten missä tahansa avoimen lähdekoodin tekoälypinossa, sinun on toimitettava mallintarjoajan avaimet, ja työpöytä- tai palvelinasennus edellyttää Python 3.11:tä ja Nodea.

## Liittyvät käsitteet
[[agentic-ai]], [[intelligent-tutoring]], [[personalized-learning]], [[rag]], [[open-source]], [[mastery-learning]], [[knowledge-tracing]], [[automated-question-generation]]
