---
connected_resources: [mglearn]
title: "Pembelajaran Multibahasa"
created: "2026-08-19T09:55:00-04:00"
type: concept
technology: [llm]
ethics: [culturally-relevant-pedagogy, digital-divide, equity-in-ai-education, global-south, inclusive-learning, multilingual-learning]
discipline: [language learning]
confidence: medium
updated: "2026-11-08T11:16:43-05:00"
translation_of: "concepts/multilingual-learning"
source_updated: "2026-11-04T12:05:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-04"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> Pembelajaran multibahasa dalam pendidikan AI menyangkut cara [[ai-technologies|teknologi]] pendidikan dan sistem berbasis LLM mendukung siswa lintas bahasa, dialek, dan konteks bersumber daya rendah — serta risiko pengucilan linguistik ketika sistem AI dibangun terutama untuk bahasa dominan.

## Pertanyaan untuk Dipertimbangkan

- Sebagian besar model AI dilatih terutama pada bahasa bersumber daya tinggi seperti Inggris. Jika Anda berpikir, belajar, atau dinilai dalam bahasa lain, bagaimana itu merugikan Anda secara sistematis — bahkan bila alat tampak "berfungsi" dalam bahasa Inggris?
- Halaman ini memperingatkan bahwa bias monolingual yang tidak ditangani memperdalam kesenjangan digital dan melemahkan keadilan, terutama di Global South. Apa yang diperlukan keadilan sejati di luar menerjemahkan konten AI ke bahasa lain?
- Penilaian otomatis dapat menunjukkan bias bahasa, menghukum penutur non-asli bahkan untuk penalaran yang sama. Jika Anda menerapkan penilaian AI, apa yang Anda periksa agar penilaian itu adil lintas bahasa, bukan hanya akurat dalam satu bahasa?
- Halaman ini menunjukkan bahasa bersumber daya rendah dapat dilayani dengan [[llm-training-and-fine-tuning|penyetelan halus]] model pada korpus terkurasi, di bawah keterbatasan perangkat keras praktis. Kompromi apa yang Anda perkirakan antara efisiensi dan kesetiaan model dalam menangani bahasa bersumber daya rendah?
- AI multibahasa harus melampaui terjemahan untuk mencerminkan pedagogi relevan secara budaya — konten yang sesuai secara linguistik *dan* kontekstual. Bagaimana konten yang diterjemahkan sempurna masih gagal melayani siswa jika mengabaikan konteks dan budaya lokal?

## Pendahuluan

Pembelajaran multibahasa menyangkut pendidikan bagi siswa yang belajar atau berpikir dalam bahasa selain bahasa dominan, dan merupakan dimensi keadilan inti AI dalam pendidikan: [[generative-ai|AI generatif]] sebagian besar dilatih dan disetel pada bahasa bersumber daya tinggi, yang dapat merugikan semua orang di luarnya secara sistematis. Tema ini mencakup kerja teknis (mengadaptasi model ke bahasa bersumber daya rendah dan korpus dialek, [[rag|pengambilan]] dalam bahasa non-dominan), pertimbangan pedagogis ([[culturally-relevant-pedagogy|instruksi berakar lokal]]), dan keadilan struktural (siapa yang dapat mengakses AI pendidikan yang berguna) — sehingga tak terpisahkan dari [[digital-divide]] dan [[equity-in-ai-education]].

## Gambaran umum

Pembelajaran multibahasa adalah dimensi keadilan inti [[ai-education|AI dalam pendidikan]]. AI generatif dan [[llm|LLM]] sebagian besar dilatih dan disetel pada bahasa bersumber daya tinggi, yang dapat merugikan siswa yang belajar atau berpikir dalam bahasa lain secara sistematis. Tema ini mencakup tantangan teknis (mengadaptasi model ke bahasa bersumber daya rendah, korpus dialek, [[rag|RAG]] dalam bahasa non-dominan), pertimbangan [[pedagogy|pedagogis]] (instruksi relevan secara budaya dan berakar lokal), dan keadilan struktural (siapa yang mendapat akses ke AI pendidikan yang berguna).

## Pendekatan teknis

- **Penyetelan halus untuk bahasa dengan sumber daya rendah:** Nwogo et al. (2026) [[multilingual-adaptive-learning-nigeria-2026|menyetel halus LLM yang telah disetel instruksi pada korpus Nigerian Pidgin yang dikurasi]] dalam platform [[adaptive-learning]], dan menganalisis secara sistematis kompromi kuantisasi (4/5/8-bit) antara kesetiaan semantik dan efisiensi komputasi — menunjukkan bahasa bersumber daya rendah dapat dilayani dalam keterbatasan perangkat keras praktis. Lihat juga [[bilingual-llm-lecture-companion-srl-2026|pendamping kuliah LLM bilingual]] untuk [[self-regulated-learning|pembelajaran yang diatur sendiri]].
- **Keadilan korpus dan data:** membangun korpus yang dikurasi (misalnya, Nigerian Pidgin, sistem pengetahuan India melalui [[iks-instruct-dataset-indian-knowledge|IKS-Instruct]]) adalah strategi berulang untuk memungkinkan keluaran model dalam bahasa siswa.
- **[[speech-and-voice-technologies|Voice-first]] dan konteks lisan:** [[kutti-ai-voice-first-learning-companion|pendamping voice-first]] dan [[structural-silence-underrepresented-language-ai-2026|analisis kesenyapan struktural]] menangani konteks ketika AI berbasis teks gagal melayani penutur bahasa yang kurang terwakili.

## Keadilan dan pedagogi

AI multibahasa harus melampaui terjemahan untuk mencerminkan [[culturally-relevant-pedagogy|pedagogi yang relevan secara budaya]] — menghasilkan konten yang sesuai secara linguistik dan kontekstual. Studi tentang [[llm-cultural-relevance-k12|relevansi budaya LLM di K-12]] dan [[scaffolding-critical-engagement-genai-minority-students|keterlibatan kritis dengan GenAI di kalangan siswa minoritas]] menunjukkan keselarasan linguistik dan budaya menentukan apakah siswa benar-benar memperoleh manfaat. Jika dibiarkan, bias monolingual AI memperdalam [[digital-divide]] dan melemahkan [[equity-in-ai-education|Keadilan]] di seluruh [[global-south|Global South]].

Translanguaging adalah kemampuan baru [[conversational-ai|chatbot]] generatif yang tidak dimiliki alat bahasa sebelumnya. Dalam [[meta-analysis-systematic-review|tinjauan sistematis]] 24 studi, siswa meminta frasa dan penjelasan kontekstual dalam bahasa sendiri sebagai jembatan ke bahasa target — penggunaan yang diklasifikasikan peninjau sebagai sub-kemampuan baru, bukan kemasan ulang ([[genai-chatbots-language-learning-affordances-review-2026|Lopez & Arabadzhy (2026)]]).

## Bias penilaian

Kekhawatiran multibahasa juga memengaruhi [[automated-assessment|penilaian otomatis]]: [[ai-scoring-language-bias-physics|penilaian AI dapat menunjukkan bias bahasa]] (misalnya, dalam [[physics-education|fisika]]), menghukum penutur non-asli. Memastikan alat penilaian adil lintas bahasa adalah bagian dari [[assessment-validity]].

Penilaian komparatif berbasis LLM adalah kasus ketika bias mengikuti garis dasar manusia, bukan model: skor tulisan informasional Kelas 3–6 konvergen dengan rubrik peneliti (r = .59–.73) dan menunjukkan pola bias prediktif bagi siswa multibahasa serupa penilaian manusia, tanpa bukti bahwa kemampuan atau biaya model lebih besar meningkatkan validitas ([[llm-comparative-judgment-writing-screening-2026|Mercer & Reed (2026)]]).

## Implikasi bagi instruktur dalam konteks multibahasa

- **Perluas AI ke bahasa siswa sendiri, bukan hanya bahasa Inggris.** Setel halus atau konfigurasikan model untuk bahasa dengan sumber daya rendah dan non-dominan ([[multilingual-adaptive-learning-nigeria-2026|platform Nigerian Pidgin]]) alih-alih memaksakan alat berbahasa Inggris saja; pasangkan AI dengan [[rag|RAG]] dan korpus lokal bila memungkinkan.
- **Lindungi penilaian dari bias bahasa.** [[ai-scoring-language-bias-physics|Penilaian AI]] dapat menghukum penutur non-asli — gunakan evaluasi yang sadar bahasa atau dimoderasi manusia untuk melindungi [[assessment-validity]] dan [[equity-in-ai-education|keadilan]].
- **Cerminkan budaya dan konteks, bukan hanya terjemahan.** AI multibahasa harus melampaui terjemahan menuju [[culturally-relevant-pedagogy|pedagogi yang relevan secara budaya]] — menghasilkan konten yang sesuai secara linguistik dan kontekstual ([[llm-cultural-relevance-k12|relevansi budaya K-12]]).
- **Pasangkan AI dengan struktur dukungan multibahasa.** Gunakan mode voice-first dan lisan ([[kutti-ai-voice-first-learning-companion|pendamping voice-first]]) ketika AI berbasis teks gagal, dan dukung [[self-regulated-learning|pengaturan diri]] dalam konteks bilingual ([[bilingual-llm-lecture-companion-srl-2026|pendamping kuliah bilingual]]).
- **Perhatikan kesenjangan digital.** Bias monolingual dalam AI memperdalam [[digital-divide]] dan melemahkan akses di [[global-south]] — rencanakan infrastruktur dan akses adil seiring pemilihan alat.

## Miskonsepsi umum

- **"Bahasa target harus mendominasi sejak hari pertama."** Dalam **tinjauan sistematis terhadap 24 studi**, siswa meminta **frasa dan penjelasan yang kontekstual dalam bahasa mereka sendiri sebagai jembatan ke bahasa target** — penggunaan yang diklasifikasikan peninjau sebagai sub-kemampuan benar-benar baru, bukan akal-akalan. Dukungan bahasa ibu berfungsi sebagai [[scaffolding|perancah]], bukan penghindaran.
- **"Penilaian bahasa AI bias terhadap penulis multibahasa."** Di sini bias mengikuti **garis dasar manusia, bukan model**: penilaian komparatif berbasis LLM pada **tulisan informasional Kelas 3-6 konvergen dengan rubrik peneliti (r = .59-.73)** dan menunjukkan pola sama dengan penilai manusia. Itu bukan bukti keadilan absolut — melainkan bukti model tidak menambahkan distorsi baru di atas yang sudah ada.
- **"Keluaran berkualitas terjemahan adalah bagian yang berguna."** Penggunaan sebagai jembatan bersifat eksplanatif dan situasional, bukan substitutif. Alat yang menggantikan produksi siswa menghilangkan latihan yang seharusnya dimungkinkan jembatan itu.

## Konsep terkait

- [[differential-effects-across-learner-groups]]
- [[language-learning]]
- [[llm]]
- [[equity-in-ai-education]]
- [[global-south]]
- [[digital-divide]]
- [[culturally-relevant-pedagogy]]
- [[inclusive-learning]]
- [[generative-ai]]

## Artikel terkait

- [[genai-chatbots-language-learning-affordances-review-2026]] — Chatbot GenAI memungkinkan translanguaging, penggunaan yang tidak didukung alat bahasa sebelumnya
- [[llm-comparative-judgment-writing-screening-2026]] — Validitas Penilaian Komparatif Model Bahasa Besar untuk Penyaringan Tulisan Universal
- [[multilingual-adaptive-learning-nigeria-2026]] — Platform Pembelajaran Adaptif Berbasis AI untuk Nigeria
- [[bilingual-llm-lecture-companion-srl-2026]] — Pendamping Kuliah LLM Bilingual
- [[structural-silence-underrepresented-language-ai-2026]] — Kesenyapan Struktural: Bahasa yang Kurang Terwakili
- [[llm-cultural-relevance-k12]] — Relevansi Budaya LLM di K-12
- [[scaffolding-critical-engagement-genai-minority-students]] — Keterlibatan Kritis dengan GenAI di Kalangan Siswa Minoritas
- [[iks-instruct-dataset-indian-knowledge]] — IKS-Instruct: Kumpulan Data Sistem Pengetahuan India
- [[kutti-ai-voice-first-learning-companion]] — Pendamping Pembelajaran Voice-First
- [[ai-scoring-language-bias-physics]] — Bias Bahasa dalam Penilaian AI pada Fisika
