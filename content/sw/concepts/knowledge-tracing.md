---
title: Ufuatiliaji wa Maarifa
created: "2026-10-13T05:24:00-04:00"
type: concept
connected_faqs: [making-simulated-students-behave-like-learners]
technology: [adaptive-learning, intelligent-tutoring, knowledge-tracing, learning-analytics, llm, personalized-learning, student-modeling]
audience: [learners]
confidence: medium
reviewed_by: [editor]
translation_of: concepts/knowledge-tracing
source_updated: "2026-10-14T11:15:00-04:00"
translation_note: "Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa."
contributors: [editor]
ai_assist:
  - model: stepfun/step-5-preview:free
    role: translation
    date: "2026-10-13"
    agent: hermes-agent
---

*Tafsiri ya kiotomatiki ya ukurasa huu wa Kiingereza, ambayo haijakaguliwa na mzungumzaji mzawa.*

> **Ufuatiliaji wa maarifa** — kuunda mfano wa kile wanafunzi wanachojua kwa muda kwa kufuatilia utendaji wao katika mazoezi na kutabiri ustadi wa baadaye. Ni uzi tajiri zaidi wa kuunda mifano katika hifadhi hii ya maarifa, ikijumuisha mbinu za Bayesian, za kujifunza kwa kina, na zilizoboreshwa kwa [[llm|LLM]] za kufuatilia maarifa ya mwanafunzi yanavyobadilika.

## Maswali ya Kutafakari

- Ufuatiliaji wa maarifa huunda mfano wa kile unachojua kwa muda kutoka kwa utendaji wako katika mazoezi, ukifuatilia wakati maarifa yanapopatikana na yanapopotea. Majibu yako yanaweza kufichua nini kuhusu kama kweli unajua kitu kuliko tu ulijibiwa sahihi wakati huu?
- Ukurasa huu unaonya kwamba 'ustadi si sahihi' — mwanafunzi anaweza kuonekana ana ustadi lakini bado akitumia ujuzi vibaya kwa mpangilio wakati sharti la siri linapokiukwa. Umewahi kumwona mtu (au wewe mwenyewe) akionekana kama anaelewa kitu lakini kwa kweli hakuelewa?
- Ikiwa ufuatiliaji wa maarifa unalisha mifumo inayobadilika inayoamua nini kifundishwe ijayo, ni kitu gani kinakosea wakati mfano unachukua majibu sahihi kama ustadi wa kweli na kumsogeza mwanafunzi mbele mapema mno?
- Ufuatiliaji wa maarifa huja katika miundo mingi — Bayesian, neva, hypergraph, kulingana na mazungumzo, ulioboreshwa kwa LLM. Ni mabadiliko yapi unayotarajia kati ya mfano wenye uwazi unaoweza kuelezewa na mfano wenye nguvu lakini usio na uwazi?
- Ukurasa huu unaunganisha ufuatiliaji wa maarifa na wanafunzi walioigwa — kuzalisha hali za maarifa ambazo ufuatiliaji kwa kawaida huzitambua kutoka data halisi. Kuiga wanafunzi kunawezaje kusaidia kumpima mwalimu wa mtandaoni kabla ya kukutana na wanafunzi halisi?
- Kwa kuwa maarifa hupotea kwa muda, mfumo unaobadilika unapaswa kufanya nini na 'ustadi' wa zamani wa mwanafunzi baada ya kusahau? Ungebuni vipi kwa kuzingatia kusahau badala ya kudhani maarifa yanadumu?

## Utangulizi

Ufuatiliaji wa maarifa hubadilisha majibu ghafi ya mazoezi kuwa makadirio ya kile mwanafunzi amepata ustadi na kile bado anahitaji kujifunza. Tofauti na ufuatiliaji rahisi wa usahihi, ufuatiliaji wa maarifa huunda mfano wa mienendo ya kijamii ya muda ya kujifunza — wakati maarifa yanapopatikana, yanapopotea, na jinsi dhana zinavyohusiana.

### Mbinu zilizoonyeshwa katika hifadhi ya maarifa

- **Mbinu za Bayesian:** [[stanbkt-bayesian-knowledge-tracing]] husanifisha utekelezaji wa BKT, wakati [[mbp-kt-meta-behavioral-knowledge-tracing]] unajumuisha ishara za tabia ya metaji
- **BKT ya ushahidi laini na kazi ya uangalizi ya LLM:** [[colearn-agentic-tutor-co-learning-loop-2026|CoLearn (He et al., 2026)]] huweka muundo wa BKT lakini hubadilisha uangalizi wa binari wa sahihi/sio sahihi — ingizo la kawaida la BKT — na la kuendelea: mtathmini wa [[llm]] hutoa ushahidi wa ustadi wenye alama pamoja na uzito wa kujiamini, unaochanganywa katika posterior iliyopunguzwa kwa kujiamini na kuwekewa kizingiti ili jibu lisilo sahihi wazi lisiweze kuinua kadirio, jambo ambalo hufanya sasisho kuwa tofauti inayopanua BKT ya kawaida badala ya kupungua kwa uzito kwake. Kama kazi hiyo ya uangalizi inaweza kuaminika inategemea mwanafunzi: ushahidi wa wastani ulitofautisha viwango vya uwezo kwa uwazi (0.25 dhaifu / 0.67 mchanganyiko / 0.77 nguvu) huku uhusiano ndani ya kiwango na ustadi wa kweli ukiwa tu r ≈ 0.15 / 0.48 / 0.41, na kwa hivyo hali iliyofuatiliwa ikibaki imani ya mwakala kuhusu mwanafunzi badala ya kipimo kilichopimwa kwa usahihi.
- **Mifano ya neva na mseto:** [[neural-symbolic-knowledge-tracing]] inaunganisha hoja za ishara na [[machine-learning|mitandao ya neva]]; [[explainable-probabilistic-kt]] inaendeleza mifano ya uwezekano inayoweza kuelezewa
- **Mitandao ya kumbukumbu ya hypergraph:** [[thymen-temporal-hypergraph-knowledge-tracing-2026|THyMeN]] inaongeza ufuatiliaji unaotegemea kumbukumbu (DKVMN) kwa hoja za hypergraph za muda, ikijenga mwingiliano wa daraja la juu unaobadilika kati ya dhana zinazotokea pamoja katika maswali ya ujuzi mwingi
- **Ufuatiliaji wa maarifa kulingana na mazungumzo:** [[huang-interpretable-knowledge-tracing-2026]] inabadilisha ufuatiliaji wa maarifa kwa ajili ya ufundishaji wa mazungumzo
- **Ulioboreshwa kwa LLM:** [[xie-hillm-cd-2026|HiLLM-CD]] inatumia LLM kwa ujenzi wa kiotomatiki wa mti wa dhana na utabiri wa ufaafu wa kihierakia
- **Ufuatiliaji wa maarifa wa kisemantiki, unaoelekezwa kwa mapendekezo:** [[exrec-exercise-recommendation-knowledge-tracing-2025|ExRec (Ozyurt, Almaci, Feuerriegel na Sachan, 2025)]] inaweka msingi *ingizo* badala ya usanifu: LLM huelezea kila swali kwa hatua za ufumbuzi na dhana za maarifa zilizolingana na Viwango vya Msingi vya Kitaifa vya Hisabati, kujifunza kwa kulinganisha hulinganisha embeddings za swali, hatua ya ufumbuzi na dhana (huku hasi za uongo zikiondolewa kwa kugawanya mapema tofauti za dhana kama vile "kutafsiri chati ya miraba" na "kusoma taarifa kutoka chati ya miraba"), na hasara ya ukalibishaji wa KC inaruhusu kifuatiliaji kutabiri hali ya maarifa ya kiwango cha dhana moja kwa moja badala ya kuitambua kwa kuitumia mfano kwa kila swali katika dhana hiyo. Kifuatiliaji kilichokalibishwa kisha hufanya kazi kama mazingira ya kujifunza kwa kuimarisha kwa ajili ya mapendekezo ya mazoezi, ambapo kadirio la thamani linalotegemea mfano huanzisha mkosozi kutoka kifuatiliaji chenyewe. Katika kazi nne kwenye XES3G5M zilizowasilishwa wastani kwa wanafunzi 2,048 wa mtihani, baseline zisizo za RL zilitoa faida ndogo au hasi za maarifa, mbinu endelevu za kutegemea thamani zilishinda zile za kutegemea sera, na kadirio la thamani linalotegemea mfano liliboresha mfululizo — kwa ukali zaidi kwenye kazi ya dhana dhaifu zaidi, ambapo lengo hubadilika kila hatua. Faida zilizoripotiwa ni asilimia ya uboreshaji wa juu wa maarifa, si matokeo ya kujifunza, na mfumo unategemea hatua za ufumbuzi zilizozalishwa ambazo ubora wake kifuatiliaji hurithi.
- **Ufuatiliaji wa maarifa unaotegemea matokeo (OKT):** [[pradeesh-outcome-knowledge-tracing-affinity-2026|Pradeesh et al. (2026)]] wanafuatilia maarifa ya mwanafunzi ndani ya mifumo ya Elimu Inayotegemea Matokeo kwa kuchukulia **matokeo ya kozi kama dhana za maarifa zenyewe**, na kuchukua nafasi yake "ramani za uhusiano" za OBE zilizothibitishwa na wataalam kati ya matokeo ya kozi na ya programu badala ya uhusiano wa dhana unaotokana na uangalizi au grafu. Muundo wa Mtandao wa Neva Ulioimarishwa na Kumbukumbu (MANN) huunda mfano wa jinsi kufikia matokeo ya kila moja kunavyoathiri mengine, na kuboresha BERT kunalingana na taaluma huimarisha embeddings za matokeo (huku mgongo wa GRU ukishinda LSTM). Kwenye data hai ya LMS ya programu ya [[engineering-education|uhandisi]] (wanafunzi 2,416, matokeo 966) OKT ilifikia AUC 89.81% — ikishinda DKT, DKVMN, EKT, na SimpleKT — huku ikitoa tu matokeo yanayoshindana kwenye ASSISTments, na kuthibitisha kuwa faida hiyo imeunganishwa na muundo wa [[curriculum-design|mtaala]] maalum wa OBE.

- **Kiwango kimoja cha hivi karibuni kinanasa mengi ya yale mfano wa mlolongo unayanunua.** Kwenye majibu 1,927,265 ya hisabati kutoka kwa wanafunzi 8,996 wa Ufini, utambulisho wa kipengele pekee kilifika AUC .8362; kuongeza kipimo kimoja cha hivi karibuni kwa ugumu wa kipengele kilipandisha hadi .8669, kikirejesha 93.5% ya faida ya transformer iliyowekwa kwa hali ya swali ya .8690, huku muhtasari wa vipimo 128 wa historia ukifika .8687 tu ([[knowledge-tracing-compression-math-2026|Lahtinen & McMullen (2026)]]).
- **Ufuatiliaji wa picha pekee.** [[skill-acquisition-without-temporal-info|Nagai et al. (2026)]] wanazalisha mpangilio wa muda bandia kutoka mahusiano ya ujumuishaji kati ya seti za ujuzi za wanafunzi, wakichukulia seti zinazopanua kama mwendelezo wa kujifunza ili picha za wakati mmoja zibaki na kufuatiliwa — lakini fomulizi hiyo inadhani ujuzi haupotei kamwe, hivyo matumizi kwa wanafunzi wanaoregea yanahitaji mbinu ya wazi ya kusahau kwanza.

### Uhusiano na dhana zingine

Ufuatiliaji wa maarifa unahusiana karibu na [[student-modeling]] — wakati ufuatiliaji wa maarifa mahususi huunda mfano wa maarifa ya kiakili kwa muda, kuunda mfano wa mwanafunzi ni mazoezi pana zaidi ya kuwakilisha nyanja zote za mwanafunzi (hali ya [[affective-computing|kihisia]], [[student-engagement|ushirikiano]], mapendeleo). Ufuatiliaji wa maarifa unalisha mifumo ya [[adaptive-learning]] na [[personalized-learning]] inayohitaji kujua nini kifundishwe ijayo, na majukwaa ya [[intelligent-tutoring]] yanayotumia makadirio ya ustadi kuchagua matatizo yanayofaa. Unaungana na [[learning-analytics]] kwa ajili ya ubuni wa dashibodi na uingiliaji, na na [[cognitive-diagnosis]] kwa [[assessment]] ya ujuzi wa undani mdogo. Vijenzi vya ufuatiliaji wa maarifa pia vinaelekeza [[simulating-students|wanafunzi walioigwa]] — hali ya kiakili ya mwanafunzi aliyeigwa mara nyingi hufomaliwa kwa mienendo ile ile ya ustadi/kupotea ambayo ufuatiliaji wa maarifa huunda mfano, hivyo [[simulation]] ni njia ya *kuzalisha* hali za maarifa ambazo mbinu za ufuatiliaji kwa kawaida *huzitambua* kutoka data halisi ya majibu.

**Onyo la wigo: ufuatiliaji hukadiria ustadi wa kikoa, si ufahamu wa daraja la juu.** Mapitio ya miaka 15 ya masudio 127 ya ufundishaji wenye akili yanagundua kuwa ufuatiliaji wa Bayesian na wa kujifunza kwa kina uliborewa katika kipindi hicho lakini bado hauwezi kuunda mfano wa michakato ya kiakili ya daraja la juu, metaji, au motisha — hali ambazo mfumo unaobadilika ungehitaji kulenga zaidi ([[zerkouk-comprehensive-review-its-2025|Zerkouk et al. (2025)]]).

**Onyo: ustadi si sahihi.** [[deceptive-overgeneralization-adaptive-learning-2026|An, McLaren, na Stamper (2026)]] wanaonyesha kuwa dhana ya hali mbili za BKT (kujifunza/kutokujifunza) inaweza kukiukwa na *ugawanyaji wa udanganyifu* — wanafunzi wanaweza kuonekana wana ustadi lakini bado wakitumia ujuzi vibaya kwa mpangilio wakati kikomo cha siri cha matumizi kinapokiukwa. Hii inahimiza ufuatiliaji wa ufahamu wa masharti (kujua *lini kujizuia* na kitendo), si tu usahihi wa kitendo, wakati makadirio ya ustadi yanaendesha kanuni za kusimama za [[adaptive-learning|mabadiliko]].

**Onyo unaohusiana unahusu *jinsi* mifano ya ufuatiliaji inavyothibitishwa ikilinganishwa na inavyotumika.** [[schuetze-knowledge-tracing-forgetting-2026|Schuetze, Yan, na Carvalho (2025)]] waliosoa BKT, BKT yenye Kusahau, na Mfano wa Vipengele vya Nyongeza kwenye seti ya data ya kujifunza-upya ya mfululizo ya vipindi vingi na wakagundua kuwa yanarudia mienendo ya kujifunza yanaposogezwa kwa nyuma kwenye vipindi vyote (AUC inayokubalika ≈ 0.74–0.79); lakini chini ya **uthibitishaji wa mseto unaotegemea muda** — kufunza kwenye kipindi kimoja kutabiri kile kinachofuata, mpangilio halisi wa matumizi — mifano yote mitatu inakadiria kupita utendaji wa baadaye kwa takribani 47–58%, inashindwa kukamata [[desirable-difficulties|athari ya nafasi]], na inaweza hata kutabiri mpangilio wa mtiririko usio sahihi kati ya hali za mazoezi. Kwa kushtusha, mifano *isiyo na* mbinu ya wazi ya kusahau ilifanya kazi karibu sawa na toleo lililoimarishwa kwa kusahau kadiri vipindi vilivyoongezeka, ikipendekeza kuwa kusahau kulijazwa kwa kiasi katika vigezo vingine (mfano, viingilishi vya kila mwanafunzi katika AFM) badala ya kuundwa mfano kwa kweli. Waandishi wanaunganisha hili na tofauti ya kujifunza dhidi ya utendaji: mifano maarufu huchanganya utendaji wa juu wa wakati huo na uwezekano mkubwa wa uhifadhi wa muda mrefu. Athari ya vitendo ni kwamba kifuatiliaji kinachoonekana vizuri kwenye usogezaji wa nyuma kinaweza kupotosha mifumo inayobadilika inayotumia makadirio yake ya ustadi, ikihitaji tathmini ya mbele na mifano yanayochukulia muda wa uhifadhi, nafasi, na kusahau kati ya vipindi.

**Onyo zaidi unahusu kanuni ya ushahidi inayolisha sasisho.** [[crediting-assisted-work-inflates-mastery-2026|Srivastava (2026)]] alitumia kanuni nne za sasisho kwenye matukio yale yale ya ASSISTments 2012–13, zikitoofautiana tu katika jinsi zinavyopima safu mlalo zilizokamilishwa kwa msaada, kwenye nusu ya kuthibitisha ya wanafunzi 12,716 na matukio 985,813 yaliyopimwa. Kusoma safu lililoonyeshwa au lilijaribiwa-upya kama jaribio la kwanza lililoshindwa lilitabiri utendaji wa baadaye bila msaada vizuri zaidi (AUC iliyounganishwa 0.658); kutoa sifa kwa ukamilishaji wowote ulilitabiri vibaya zaidi (0.604), takribani juu kidogo tu ya thamani ya kudumu inayojua tu ugumu wa ujuzi (0.595). Chaguo lile lile linaamua hesabu ya ustadi: kutoa sifa kwa ukamilishaji kulitangaza 93.9% ya jozi 113,428 za mwanafunzi–ujuzi kuwa na ustadi dhidi ya 72.8% chini ya kanuni kali, na jozi ambazo kanuni ya upole zilitangaza kuwa mbele za kali zilienda kwa usahihi bila msaada wa 70.9% dhidi ya 85.7% pale zilizokubaliana, chini ya kiwango cha msingi cha 0.744. Hali iliyofuatiliwa kwa hivyo ni kwa kiasi sehemu ya kanuni ya kupima badala ya mwanafunzi peke yake, hivyo kadirio la ustadi linalotumiwa na lango la [[adaptive-learning|mabadiliko]] linapaswa kubeba kanuni iliyoizalisha.

**Onyo la uwezo: mifano ya jumla ya lugha inafuatilia maarifa kidogo tu juu ya msingi wa kawaida.** [[worden-foundationalassist-knowledge-tracing-dataset-2026|Worden et al. (2026)]] walitoa FoundationalASSIST, ambayo inarejesha maandishi kamili ya swali, majibu wanafunzi walioyatoa kweli na chaguo zao za kuchanganya ambazo seti za data za awali za ufuatiliaji zilitupa, na wakapima [[llm|LLM]] nne za mstari wa mbele kama vifuatiliaji vya zero-shot. Bora, GPT-OSS-120B, ilifikia asilimia 56.2 dhidi ya asilimia 51.3 ambayo kanuni ya kutabiri-sahihi-daima tayari inapata (AUC-ROC 0.559), bila uboreshaji kutoka historia ndefu zaidi, na Llama-3.3-70B ilikuwa sahihi asilimia 85.4 ya wakati mwanafunzi alijibiwa sahihi lakini asilimia 12.6 tu alipokosea — ushahidi kwamba mfano wa kuuza kama ulivyo unafuatilia matumaini badala ya ufahamu, hivyo ujuzi wa kifuatiliaji unapaswa kusomwa dhidi ya msingi wa kawaida ambao kazi yake inaruhusu.

- **LLM ya kupita-moja inaweza kufuatilia maarifa kabla ya wanafunzi yeyote kurekodiwa.** Ikiulizwa kama swali moja la kuandikwa bila data ya jukwaa lengwa, Jev ilifikia AUC ya wastani ya .706, juu ya bora ya mifano 28 ya kina ya ufuatiliaji yaliyofunzwa kwa wanafunzi 8 (.689) na ikaendelea mbele hadi ufuatiliaji uliosimamiwa unapofika sawa kwa wanafunzi 64-128 ([[system-one-llm-knowledge-tracing-2026|Lee & Park, 2026]]).

## Dhana Zilizounganishwa

- [[learners]] — Wanafunzi: muunganisho wa dhana za upande wa mwanafunzi
- [[student-modeling]]
- [[knowledge-graph]]
- [[adaptive-learning]]
- [[personalized-learning]]
- [[intelligent-tutoring]]
- [[learning-analytics]]
- [[formative-assessment]]
- [[ai-education]]
- [[ai-ed-evaluation]]
- [[multimodal]]
- [[teacher-role]]
- [[cognitive-offloading]]
- [[llm]]
- [[simulating-students]]
- [[recommender-systems-and-learning-paths]]
- [[student-support-and-success]] — kadirio la ustadi la undani mdogo linalisha maamuzi ya msaada

## Makala Zilizounganishwa
- [[deceptive-overgeneralization-adaptive-learning-2026]] — Ugawanyaji wa udanganyifu: ustadi unaobadilika unaweza kusimamisha mazoezi kabla ya wanafunzi kujua lini kujizuia na kitendo (An, McLaren & Stamper 2026)
- [[huang-interpretable-knowledge-tracing-2026]]
- [[thymen-temporal-hypergraph-knowledge-tracing-2026]]
- [[skill-acquisition-without-temporal-info]]
- [[xie-hillm-cd-2026]]
- [[zerkouk-comprehensive-review-its-2025]]
- [[graph-its-adaptive-algorithms-2026]] — Ufundishaji Wenye Akili Unaotegemea Grafu kwa Vikoa Vinavyobadilika (2026)
- [[pradeesh-outcome-knowledge-tracing-affinity-2026]] — Ufuatiliaji wa maarifa unaotegemea matokeo kwa ramani za uhusiano
- [[schuetze-knowledge-tracing-forgetting-2026]]
- [[exrec-exercise-recommendation-knowledge-tracing-2025]] — ufuatiliaji unaowekwa kisemantiki wenye hali zilizokalibishwa kwa KC, unayotumika kama mazingira ya RL kwa mapendekezo
- [[colearn-agentic-tutor-co-learning-loop-2026]] — CoLearn: Mwalimu wa Wakala Anayejifunza Mwanafunzi wake katika Kitanzi cha Kujifunza cha Binadamu–AI
- [[crediting-assisted-work-inflates-mastery-2026]] — Kanuni ipi ya ushahidi inaamua dai la ustadi (Srivastava 2026)
- [[system-one-llm-knowledge-tracing-2026]] — LLM ya kupita-moja inafuatilia maarifa juu ya mifano ya kina yaliyofunzwa kwa wanafunzi 8, kwa sehemu ya gharama (Lee & Park 2026)
- [[knowledge-tracing-compression-math-2026]] — Kubana historia ya mwanafunzi katika ufuatiliaji wa maarifa ya hisabati
