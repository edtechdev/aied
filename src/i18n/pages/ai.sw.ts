/**
 * "Use this knowledge base with your own AI assistant" page copy, per locale.
 * The copyable prompt is part of the content (it is the page's main deliverable),
 * so it is translated too; the URLs and file names inside it never change.
 */
export interface AiStrings {
  title: string;
  description: string;
  h1: string;
  introHtml: string;
  intro2Html: string;
  promptHeading: string;
  promptIntro: string;
  copyButton: string;
  copyHint: string;
  copyOk: string;
  copyFail: string;
  promptAriaLabel: string;
  promptText: string;
  howHeading: string;
  howSteps: string[];
  howNoteHtml: string;
  techSummary: string;
  techItems: string[];
  assistantsHeading: string;
  assistantsIntro: string;
  assistants: string[];
  corpusHeading: string;
  corpusHtml1: string;
  corpusHtml2: string;
  answeredHeading: string;
  answeredIntro: string;
  answeredLinks: Array<{ href: string; label: string }>;
  answeredOutroHtml: string;
  offlineHeading: string;
  offlineHtml: string;
  toc: Array<{ text: string; slug: string; depth: number }>;
}

const PROMPT = `Wewe ni msaidizi wa utafiti kuhusu akili bandia katika elimu. Tumia Hifadhi ya Maarifa ya Akili Bandia katika Elimu (https://edtechdev.github.io/aied/) kama chanzo chako kikuu.

1. Chagua njia kabla ya kusoma. Kielezo cha FAQ kwenye https://edtechdev.github.io/aied/faq/ kinaunganisha maswali na kurasa zinazoyajibu, ikijumuisha maswali ya aina \"uchunguzi unaonyesha nini\". Katalogi kamili kwenye https://edtechdev.github.io/aied/llms.txt ni {llmsSize}, faili ya dhana na FAQ kwenye https://edtechdev.github.io/aied/llms-concepts.txt ni {llmsConceptsSize}, na llms-full.txt ni {llmsFullSize}, kwa hivyo yatafute au uchukue sehemu badala ya kuipakia yote, na usiruhusu upakiaji wa faili nzima unaoshindikana kukuzuia.

2. Thibitisha kila madai kwa ukurasa na uutaje kwa kichwa cha ukurasa kikifuatiwa na URL yake. Ukurasa unapotoa marejeo ya karatasi ya msingi na DOI, yaongeze; kurasa zingine zinatoa tu kitambulisho cha arXiv au URL ya mchapishaji, kwa hivyo toa kile ukurasa unachotoa na usiwahi kubuni DOI, URL, mwandishi, namba, au matokeo.

3. Unganisha kurasa nyingi badala ya kutegemea moja. Kurasa za dhana hutoa muhtasari na huweka viungo vya makala zinazozitegemea, kwa hivyo zifuate viungo hivyo. Soma kurasa tatu hadi tano zinazofaa zaidi, simama zinapoanza kurudia utafiti ule ule, na useme kile ambacho hukusoma. Ikiwa hifadhi ya maarifa inashughulikia mada hiyo tu katika fani jirani, sema hivyo na jibu kwa ulinganifu.

4. Linganisha nguvu ya ushahidi. Majaribio yaliyodhibitiwa au yaliyochaguliwa nasibu yanayopima utendaji bila msaada ni yenye nguvu zaidi, kisha uchanganuzi wa meta uliorekebishwa kwa upendeleo wa kuchapisha, kisha mapitio, kisha majaribio ya awali, uchanganuzi wa sera, na maoni; utafiti mmoja mdogo si makubaliano. Lebo, hadhira, ngazi na viwango vya kujiamini viko katika chanzo cha Markdown cha kila ukurasa kwenye https://raw.githubusercontent.com/edtechdev/aied/main/&lt;section&gt;/&lt;slug&gt;.md, si katika ukurasa ulioonyeshwa, kwa hivyo kama huwezi kuvihakiki, amua kutokana na jinsi makala inavyoelezea utafiti na sema kuwa ndivyo ulivyofanya.

5. Jibu katika ngazi inayoulizwa na swali, na malizia kwa kupendekeza kurasa na FAQ zinazofaa zaidi.

Pendelea neno \"akili bandia inayozalisha\" badala ya \"LLM\". Hifadhi ya maarifa husasishwa mara kwa mara, na ukurasa wa jarida kwenye https://edtechdev.github.io/aied/journal/ unaorodha nyongeza mpya zaidi.

Mfano: \"Utafiti unasema nini kuhusu maoni ya akili bandia katika uandishi wa wanafunzi?\" Angalia kielezo cha FAQ, soma kurasa zinazofaa zaidi kuhusu uandishi na maoni pamoja na utafiti unaozitaja, kisha jibu kwa marejeo na viungo.`;

const sw: AiStrings = {
  title: 'Tumia Hifadhi Hii ya Maarifa na Msaidizi Wako wa Akili Bandia',
  description: 'Maelekezo ya kunakili na kubandika ya kutumia Hifadhi ya Maarifa ya Akili Bandia katika Elimu na chatbot au wakala wako mwenyewe.',
  h1: 'Tumia Hifadhi Hii ya Maarifa na Msaidizi Wako wa Akili Bandia',
  introHtml: `Elekeza chatbot au wakala wowote wa AI kwenye hifadhi hii ya maarifa na itajibu kutoka kurasa hizi badala ya kutoka kumbukumbu yake mwenyewe. Nakili maelekezo yaliyo chini, yabandike kwenye msaidizi wako kama ujumbe wako wa kwanza, kisha uliza swali lako. Jibu zuri hutaja kurasa zilizotumika na kuweka viungo, ili uweze kuhakiki vyanzo vyenyewe.`,
  intro2Html: `Hakuna cha kusakinisha. Kama ungependa kuruka maelekezo, <a href=\"#ready-made-assistants\">masaidizi yaliyo tayari</a> yameshajua nyenzo hizi.`,
  promptHeading: 'Maelekezo ya kunakili',
  promptIntro: 'Bandika hii kwanza, kabla ya swali lako. Inafanya kazi na chatbot au wakala wowote unaoweza kusoma ukurasa wa wavuti au kupokea hati iliyobandikwa. Maelekezo ni marefu kuliko kisanduku kinavyoonyesha; kitufe hunakili yote.',
  copyButton: '📋 Nakili maelekezo kwenye ubao wa kunakili',
  copyHint: 'Kisha yabandike kwenye msaidizi wako na uliza swali lako.',
  copyOk: '✅ Yamenakiliwa!',
  copyFail: '❌ Imeshindikana kunakili',
  promptAriaLabel: 'Maelekezo ya kunakili',
  promptText: PROMPT,
  howHeading: 'Jinsi ya kuitumia',
  howSteps: [
    '<strong>Nakili maelekezo</strong> kwa kitufe kilicho juu.',
    '<strong>Yabandike kwenye msaidizi wako</strong> kama ujumbe wa kwanza. Kwa kawaida yatajibu kuwa yameelewa.',
    '<strong>Uliza swali lako</strong> kwa lugha ya kawaida, kwa mfano \"uchunguzi unasema nini kuhusu maoni ya akili bandia katika madarasa makubwa?\" au \"tunapaswa kutumia vifaa vya kugundua akili bandia?\"',
    '<strong>Angalia viungo.</strong> Jibu zuri linataja kurasa zilizotumika. Kama unapata madai ya kujiamini bila majina ya kurasa, jibu \"hilo limetoka kwa kurasa gani?\" na muombe ajaribu tena.',
  ],
  howNoteHtml: `Hii hufanya kazi vizuri zaidi katika masaidizi yanayoweza kuvinjari wavuti, kwa sababu maelekezo huyaonyesha kurasa za kusoma. Kama chako hakiwezi kufungua viungo, ambatanisha pia maandishi ya hifadhi ya maarifa: <a href=\"/aied/llms-full.txt\">pakua faili la maandishi kamili</a> mara moja, yapakie au yabandike kwenye mazungumzo, na yatumie maelekezo pamoja nayo. Ni faili moja la maandishi lenye ukubwa wa {llmsFullSize}. Bidhaa nyingi za gumzo hukataa faili la ukubwa huo, kwa hivyo pia kuna <a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a>, kila ukurasa wa dhana na FAQ kwa ukamilifu, ukubwa wa {llmsConceptsSize}. Anza na hilo: dhana ni muhtasari wa kile utafiti unaonyesha, FAQ ni maswali ambayo muhtasari huo unayajibu, na kila ukurasa wa dhana unaweka viungo vya makala zinazozitegemea.`,
  techSummary: 'Vidokezo vya kiufundi kwa zana zinazotaka URL badala ya maelekezo',
  techItems: [
    '<a href=\"/aied/llms.txt\">llms.txt</a>: katalogi ya kila ukurasa, mstari mmoja kwa kila mmoja, kwa zana zinazofanyia faharasa tovuti kabla ya kuisoma',
    '<a href=\"/aied/llms-full.txt\">llms-full.txt</a>: maandishi kamili ya hifadhi ya maarifa katika faili moja, {llmsFullSize}',
    '<a href=\"/aied/llms-concepts.txt\">llms-concepts.txt</a>: maandishi kamili ya kurasa za dhana na FAQ, {llmsConceptsSize}, kwa zana na gumzo zinazokataa faili kubwa',
    '<a href=\"/aied/sitemap-index.xml\">Ramani ya tovuti</a>: anwani za kila ukurasa',
    '<a href=\"/aied/rss.xml\">Mlisho wa RSS</a>: kurasa mpya na zilizosasishwa',
  ],
  assistantsHeading: 'Masaidi yaliyo tayari',
  assistantsIntro: 'Kama hupendi kusanidi chochote, tumia mmoja wa masaidizi haya yaliyo tayari:',
  assistants: [
    '<strong>AI in Education Advisor</strong>, <a href=\"https://gemini.google.com/gem/1oRhk2pouJb-RpTE36aAMaIRfJrBdMR95?usp=sharing\" target=\"_blank\" rel=\"noopener\">Gemini Gem</a> inayojibu kutoka hifadhi hii ya maarifa. <a href=\"https://docs.google.com/document/d/1_6JIp40v9k42ifmANsmLHtKE5Xxgvl1uGHVUYe0gnc0/edit?usp=drivesdk\" target=\"_blank\" rel=\"noopener\">Maagizo yake maalum</a> ni ya umma, na ilijengwa kutoka nakala tuli ya hifadhi ya maarifa, kwa hivyo inaweza kuwa nyuma ya kurasa mpya zaidi.',
    '<strong>Daftari la NotebookLM</strong>: <a href=\"https://notebooklm.google.com/notebook/7de87d06-8998-4f0a-81f5-c2523fc635d0?utm_source=nlmm_share\" target=\"_blank\" rel=\"noopener\">daftari la Google NotebookLM</a> lililojengwa kwa nyenzo zile zile, pamoja na ripoti, michoro, podikasti, slaidi, na <a href=\"https://youtu.be/mUJOSigOOkQ?is=veEKHgQsreaqLC4d\" target=\"_blank\" rel=\"noopener\">video</a> zinazozalishwa kiotomatiki.',
  ],
  corpusHeading: 'Kilicho ndani ya hifadhi ya maarifa',
  corpusHtml1: `Zaidi ya muhtasari elfu moja wa utafiti hushughulikia ualimu na walimu wa akili bandia, tathmini na maoni, uadilifu wa kitaaluma, ujuzi wa akili bandia, maendeleo ya waalimu na wafanyikazi wa masomo, usawa na upatikanaji, faragha, sera na utawala, na mada za sayansi ya kujifunza kama vile upunguzaji wa mzigo wa kiakili na motisha ya wanafunzi. Kila muhtasari unaisha kwa marejeo kamili na kiungo cha karatasi asili, kwa hivyo msaidizi wako anaweza kupitisha rejea hiyo.`,
  corpusHtml2: `Aina tatu za kurasa hujibu maswali tofauti: kurasa za dhana hufupisha kile utafiti unasema kuhusu wazo moja na huweka viungo vya utafiti unaozitegemea, kurasa za makala hushughulikia karatasi moja kwa wakati, na FAQ hujibu maswali ya vitendo kutoka kwa waalimu na wasimamizi. Omba ukurasa wa dhana unapotaka muhtasari, na makala yaliyo nyuma yake unapotaka ushahidi.`,
  answeredHeading: 'Maswali ambayo tayari yamejibiwa',
  answeredIntro: 'Mengi ya maswali watu wanaouliza kwa akili bandia kwanza yamejibiwa hapa kwa mikono, na utafiti umeambatanishwa:',
  answeredLinks: [
    { href: '/aied/faqs/course-ai-policy/', label: 'Naandikaje sera ya akili bandia ya kozi na niwasiliane nayo na wanafunzi?' },
    { href: '/aied/faqs/reduce-ai-cheating/', label: 'Nawezaje kupunguza udanganyifu unaotumia akili bandia katika kozi yangu?' },
    { href: '/aied/faqs/should-we-use-ai-detectors/', label: 'Je, tunapaswa kutumia vifaa vya kugundua akili bandia?' },
    { href: '/aied/faqs/redesign-assessment-ai-era/', label: 'Tathmini inapaswa kubadilishwaje kwa zama la akili bandia?' },
    { href: '/aied/faqs/reducing-over-reliance/', label: 'Nawezaje kuzuia wanafunzi kutegemea sana akili bandia?' },
    { href: '/aied/faqs/institutional-ai-policy/', label: 'Tunaandikaje na kutekelezaje sera ya akili bandia ya taasisi?' },
  ],
  answeredOutroHtml: `Inafaa kutazama <a href=\"/aied/faq/\">orodha kamili ya FAQ</a> kabla ya kuuliza, na maelekezo huagiza msaidizi wako aangalie orodha hiyo kwanza.`,
  offlineHeading: 'Soma hifadhi ya maarifa bila mtandao',
  offlineHtml: `Unaweza pia kupakua hifadhi ya maarifa kama <a href=\"/aied/aied.epub\">EPUB</a> au <a href=\"/aied/aied.pdf\">PDF</a> kwa kifaa cha kusoma elektroniki, simu, kompyuta kibao, au kompyuta. Nakala hizi za nje ya mtandao zina kurasa za dhana na FAQ, sio muhtasari wa makala.`,
  toc: [
    { text: 'Maelekezo ya kunakili', slug: 'the-prompt', depth: 2 },
    { text: 'Jinsi ya kuitumia', slug: 'how-to-use-it', depth: 2 },
    { text: 'Masaidi yaliyo tayari', slug: 'ready-made-assistants', depth: 2 },
    { text: 'Kilicho ndani ya hifadhi ya maarifa', slug: 'what-is-in-the-knowledge-base', depth: 2 },
    { text: 'Maswali ambayo tayari yamejibiwa', slug: 'already-answered', depth: 2 },
    { text: 'Soma hifadhi ya maarifa bila mtandao', slug: 'read-offline', depth: 2 },
  ],
};

export default sw;
