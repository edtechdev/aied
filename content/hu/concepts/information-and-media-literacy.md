---
title: "Információs és médiaírástudás"
created: "2026-11-05T05:20:00-05:00"
type: concept
foundations: [information-and-media-literacy, ai-literacy, critical-thinking, academic-integrity]
pedagogy: [critical-pedagogy]
technology: [generative-ai, llm]
ethics: [trust-calibration]
audience: [librarians, instructors, learners, curriculum designers]
level: [higher ed, k 12, adult learning]
page_kind: [synthesis]
confidence: high
updated: "2026-11-08T07:16:46-05:00"
translation_of: "concepts/information-and-media-literacy"
source_updated: "2026-11-05T05:20:00-05:00"
translation_note: "Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-08"
    agent: hermes-agent
---

*Ennek az angol oldalnak a gépi fordítása, amelyet még nem ellenőrzött anyanyelvi beszélő.*

> **Az információs és médiaírástudás** szomszédos képességek, amelyeket a MI ugyanazon a varraton ír át. Az információs írástudás középpontjában a pontos adatok megtalálása és ellenőrzése áll; a médiaírástudáséban annak megértése, ki hozott létre egy üzenetet, hogyan építette fel, és miért. Közös céljukban átfednek: felépíteni azt a [[critical-thinking|kritikai gondolkodást]], amely segít eligazodni a digitális világban és felismerni a téves információt — és most egy második problémát is osztanak: a [[generative-ai|generatív MI]] folyékony, hihető tartalmat állít elő, amelynek eredete és szándéka rejtve marad, így a médiaírástudás által mindig is feltett eredetkérdés az információs írástudásba is átköltözött.

## Megfontolandó kérdések

- Amikor egy chatbot magabiztos bekezdést ad vissza három hivatkozással, a diák információs írástudást, médiaírástudást vagy egyiket sem gyakorolja — és láthatóvá teszi-e a feladat ezt a különbséget?
- A deepfake-ek és a kitalált hivatkozások különböző hibák: az egyik a világról ad hamis feljegyzést, a másik a szakirodalomról. Meg tud tanítani egy kurzus mindkettőt anélkül, hogy mindkettőt rosszul tanítaná?
- A MI-detektorok és a tényellenőrzők maguk is modellek hibaaránnyal. Mi történik egy ellenőrzési tantervvel, ha az ellenőrző eszköz probabilisztikus?
- A médiaírástudást alkotáson keresztül tanították — a diákok médiát készítenek, hogy megértsék. Ha most egy modell készíti az artefaktumot, a pedagógia melyik része marad fenn?

## Bevezetés

A két írástudásnak külön intézményi otthona van. Az információs írástudást a könyvtár- és információtudomány kodifikálta, legláthatóbban az ACRL-keretrendszerben, a tekintély, a folyamat és az érték körüli diszpozíciók halmazaként. A médiaírástudás a kommunikáció- és médiatudományból, valamint az iskolai médianevelésből nőtt ki, és a szerzőségre, a technikára, a közönségre és a hatásra kérdez rá. Az egyik azt ítéli meg, hogy egy forrás érdemes-e hitelre; a másik azt kérdezi, ki készített egy üzenetet, és hogy mit tesz az üzenet.

Ez a felosztás mindig is tisztább volt elméletben, mint egy tanteremben. Mindkét írástudás arra tanítja a diákokat, hogy lassítsanak, ellenőrizzék az eredetet, és álljanak ellen a folyékonyságnak. Mindkettő arra a feltevésre épült, hogy az artefaktumnak volt szerzője, aki költséget fizetett az előállításáért. A generatív MI egyszerre vonja ki ezt a feltevést mindkettőből: a szöveg nyomon követhetetlen korpuszból szintetizálódik, a képeket és a hangokat klónozzák, az automatizált fiókok pedig magát a közönséget szimulálják.

Ez az oldal azért tárgyalja a párost, mert a korpusz egyetlen tanítási problémaként kezeli őket, két kimeneti halmazzal. A bizonyíték egyenetlen — egy bibliometriai térkép és két rendszertanulmány az információs oldalon, egy kis beavatkozás és egy szakértői interjús vizsgálat a média oldalon —, és szinte egyik sem tesztel kombinált tantervet. Ez a hiány maga is olyan megállapítás, amelyet érdemes a gyakorlatba átvinni.

## Ahol a két konstrukció szétválik

Az információs írástudás tárgya a forrás, központi kérdése pedig, hogy az állítás igaz-e, és a mögötte álló bizonyíték hiteles-e. A médiaírástudás tárgya az üzenet, központi kérdése pedig, hogy ki készítette, hogyan, kinek és milyen célból. Egy kitalált hivatkozás az első próbán bukik el; egy deepfake átmehet minden tényellenőrzésen, amelyet egy diák ismer, miközben a másodikon elbukik.

Az empirikus szakirodalom tükrözi ezt a szétválást. Egy 236 amerikai egyetemistát felmérő vizsgálat azt kérdezte, hol kezdődnek a tudományos keresések, és a keresőmotorokat 45,5%-ban, a könyvtár kezdőlapját 27,9%-ban, egy MI-chatbotot pedig 26,6%-ban találta, a nemzetközi hallgatók pedig nagyjából kétszeres arányban helyettesítették a MI-t a könyvtári erőforrásokkal a hazai hallgatókéhoz képest ([[lund-ai-information-seeking-chatbots-libraries-2026|Lund és mtsai., 2026]]). Egy 32 tanulmányt áttekintő rendszertanulmány az MI-írástudás integrációját az információs írástudás tanításában „kezdeti szakaszban” találta, amely LibGuides és műhelyek révén valósul meg, nem tanterven keresztül ([[mirza-arif-ai-literacy-information-literacy-review-2026|Mirza és Arif, 2026]]). A média oldalon hét szakértővel készült interjúk és 141 diák felmérése a technológia beépülését a kritikai médiaírástudás tantervébe „korlátozottnak és gyakran felszínesnek” találta, a tanárok pedig alulképzettek a téves információt és deepfake-eket előállító eszközökhöz ([[critical-media-literacy-education-2026|a kritikai médiaírástudás-vizsgálat, 2026]]).

## Hogyan bonyolítja az MI az információs írástudást

Az első bonyodalom a nagy léptékű hamisítás. Egy modell meggyőző szöveget, hihető hivatkozásokat és magabiztos statisztikákat állít elő, amelyek nem is létezhetnek; az olvasó olyan szintézist kap, amelynek keresési nyoma törlődött. Az ellenőrzés más készséggé válik: nem az a kérdés, hogy „jó forrás-e ez”, hanem hogy „létezik-e ez a forrás, és azt mondja-e, amit a válasz állít”.

A második, hogy a keresési réteg összeomlott a válaszrétegbe. Amikor az eszköz visszakeres, kiválaszt és ír, az írástudó cselekedet a szintézis megítélésére tolódik. Ez az a maradék, amelyre a bizonyíték újra meg újra mutat: egy beágyazott könyvtárosi platform 0,78 pontot ért el 0,25-tel szemben egy ACRL-alapú műszeren, felülmúlva ezzel a hagyományos könyvtári oktatást, és a nyereséget hozó konzultációkat a forrásértékelési kérdések uralták ([[ai-assisted-seminar-learning-information-literacy-2026|Huang, 2026]]).

A harmadik a kapacitás. 412 akadémiai könyvtáros felmérésében 38 nigériai intézményben az önértékelt kompetencia magas volt az adatbázis-oktatásban (M = 4,07) és az információs írástudás átadásában (M = 4,02), az összesített MI-kompetencia azonban 2,86 volt, a leggyengébb a célok megtervezésében (M = 2,70) és az eredmények értékelésében (M = 2,62) ([[dada-librarians-information-literacy-ai-nigeria-2026|Dada, 2026]]). Egy 1 669 publikációval feltérképezett területtől azt kérik, hogy olyan kompetenciát tanítson, amelyet saját oktatói elmondásuk szerint még megtervezni sem tudnak ([[jabeen-lux-ai-information-literacy-scientometric-2026|Jabeen és Lux, 2026]]).

## Hogyan bonyolítja az MI a médiaírástudást

A médiaírástudás alapító kérdései egy célirányos alkotót feltételeztek. A deepfake-ek, a hangklónozás és az automatizált botok három módon törik meg ezt a feltevést: az artefaktumnak nem is lehet emberi szerzője, a közönség lehet szintetikus, a szándék pedig az elköteleződésre való optimalizálás lehet, nem pedig bárki meggyőzése.

A tantervi bizonyíték arra utal, hogy az iskolák nem tartottak lépést. A szakértői interjúk a tanárképzést nevezik meg szűk keresztmetszetként, nem a diákok ellenállását, és olyan [[critical-pedagogy|kritikai pedagógiai]] keretezést sürgetnek, amely az értékelést etikai és részvételi gyakorlatként kezeli, nem eszközképzésként. A közszolgálati média számára készült megbízott jelentés azt találta, hogy a 14–19 évesek ellátása a funkcionális MI-készségek felé billen, a kritikai értékeléstől elfelé, annak ellenére, hogy több mint 40 keretrendszert tekintettek át, és 35 szakértőt interjúvoltak meg ([[ai-literacies-young-adults-2025|az AI literacies jelentés, 2025]]).

## Az MI mint védekező eszköz — állítások és fenntartások

A MI védekező oldalon való használatának érve hihető és széles körben hangoztatott: automatizált hitelesség-ellenőrzések, amelyek egy forrás előtörténetét és nyelvét vizsgálják elfogultságjelek után kutatva, deepfake-detektorok, metaadat-elemzők, amelyek eredeti származási jelzéseket keresnek, valamint szimulációk, amelyek révén a diákok valósághű szintetikus anyagon gyakorolhatják az értékelést. Ezek a képességek valódi termékek, és a tantermi használat valódi gyakorlat.

A bizonyíték vékonyabb, mint az állítások. A detektorok probabilisztikusak, és a generátorok fejlődésével romlanak; egy tényellenőrző modell maga is modell, tehát a diáknak az ellenőrzőt is meg kell ítélnie; a származási metaadatok pedig csak akkor segítenek, ha a termelő úgy dönt, hogy hozzáadja őket. A korpusz egyik legszilárdabb eredménye, hogy az MI-támogatott médiaírástudás-tanítás kis léptékben működhet: egy 18 órás, az 5E modellre épülő program nagy nyereséget hozott 36 negyedik osztályos tanulónál egy török iskolában ([[demir-akar-ai-media-literacy-children-2026|Demir és Akar, 2026]]). Harminchat diák koncepcióigazolás, nem közbeszerzési érv.

A könyvtárszakma egyik véleménycikke továbbviszi ugyanezt a gondolatot: a MI átvállalhatja az információs írástudás *átadását* visszakeresés, adaptív tutoriálok, chatbotok és automatizált tényellenőrzés révén, miközben az integráció a [[librarians|könyvtárosoké]], nem a szállítóké ([[offem-ai-information-literacy-library-users-2026|Offem és Arikpo, 2026]]). A cikk nem közöl adatot, tehát tervezési vázlat arról, hol élhet a tanítás, nem pedig bizonyíték arra, hogy működik.

Együtt olvasva a mérleg két oldala egy szabályt sugall: a MI átveheti a *gyakorlási* terhet — valósághű szcenáriók, azonnali visszajelzés, lépték —, de az *ítélőképesség* terhe a tanulónál marad, és minden eszközt, amely azt állítja, hogy helyettesíti, mért hibaszámú detektorként kell értékelni, nem válaszkulcsként bevezetni.

## Mit jelent ez a gyakorlatban

- **Egy eljárást tanítson, két tárgyra.** Az ellenőrizhető rutin — kövesse az állítást a forrásig, a forrást a szerzőig, kérdezze meg, mit tesz az artefaktum — ugyanúgy működik egy hivatkozásnál és egy videónál. Nevezze meg, melyik tárgyat értékeli a feladat.
- **A detektálást bizonyítékként kezelje, ne ítéletként.** Egy detektor kimenete valószínűség; tanítsa meg a diákokat, hogy második módszerrel erősítsék meg, és mondják meg, mi változtatná meg a véleményüket.
- **Tartsa a tantervben az alkotást.** A média készítése volt az a pedagógia, amely konkréttá tette a kritikát; a MI-vel való generálás csak akkor támogathatja, ha a diákok megvizsgálják azokat a választásokat, amelyeket az eszköz meghozott helyettük.
- **Tegyen könyvtárost vagy médiaszakembert a munkafolyamatba.** E szakirodalom legerősebb tanítási eredménye olyan dizájnból származik, amelybe az emberi konzultáció be volt építve, nem utólag kínálták.
- **A tanterv megírása előtt mérje fel a személyzet kapacitását.** A mért hiány a célok megtervezésénél és az eredmények értékelésénél van, nem az eszközhasználatnál.

## A bizonyítékok korlátai

Az itteni tanulmányok többsége kicsi, önbevalláson alapul, vagy mindkettő: 236 diák egy felmérésben, 36 gyermek egy beavatkozásban, 412 könyvtáros, aki önmagát értékeli. A bibliometriai láthatóság nem gyakorlat, és a scientometriai szerzők ezt ki is mondják. A korpuszban egyetlen tanulmány sem értékel kombinált információs- és médiaírástudás-tantervet, a gyakorlati szakirodalom által ajánlott detektor- és tényellenőrző eszközök pedig nagyrészt mérés nélkül maradnak ezekben a forrásokban. Azt az állítást, hogy az MI-vezérelt ellenőrzés javítja az eredményeket, tervezési hipotézisként kell kezelni, amíg valaki kontrollal szemben nem teszteli.

## Kapcsolódó fogalmak

- [[ai-literacy]]
- [[libraries]]
- [[librarians]]
- [[critical-thinking]]
- [[critical-pedagogy]]
- [[academic-integrity]]
- [[trust-calibration]]
- [[generative-ai]]
- [[higher-ed]]

## Kapcsolódó cikkek

- [[mirza-arif-ai-literacy-information-literacy-review-2026]] — Mapping the Integration of AI Literacy Into Information Literacy Instruction in Academic Libraries: A Systematic Review of Emerging Research
- [[jabeen-lux-ai-information-literacy-scientometric-2026]] — How artificial intelligence is reshaping information literacy in academic libraries: A global Scientometric analysis (2020–2025)
- [[lund-ai-information-seeking-chatbots-libraries-2026]] — Artificial intelligence (AI) and information seeking: A comparative exploration of AI chatbots, search engines, and library resources as information sources among university students
- [[ai-assisted-seminar-learning-information-literacy-2026]] — Developing an AI-Assisted Seminar-Based Learning Platform With Embedded Librarian Support
- [[clinton-lisell-open-pedagogy-ai-tools-2026]] — Information literacy through open pedagogy: What's the role of AI tools?
- [[huang-genai-academic-information-resources-2026]] — Generative artificial intelligence reshapes university students' sustainable use of academic information resources
- [[dada-librarians-information-literacy-ai-nigeria-2026]] — Academic Librarians' Student Engagement for Promoting Information Literacy and Artificial Intelligence Instruction in Nigerian Tertiary Institutions
- [[offem-ai-information-literacy-library-users-2026]] — Artificial Intelligence as a Tool for Promoting Information Literacy among Library Users
- [[critical-media-literacy-education-2026]] — Technology, education and critical media literacy: potential, challenges, and opportunities
- [[demir-akar-ai-media-literacy-children-2026]] — Transforming clicks into critical thinking: An AI-based media literacy program for children
- [[ai-literacies-young-adults-2025]] — Supporting AI Literacies for Young Adults Aged 14-19
