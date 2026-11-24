---
title: "Infrastruktur AI Institusional"
created: "2026-11-12T07:36:15-05:00"
type: concept
connected_resources: [mindrouter, amplify-genai, canvas-mcp]
technology: [llm, generative-ai, open-source, edtech-platform]
ethics: [privacy]
audience: [administrators, educational technology developers, faculty developers]
level: [higher ed, k 12]
discipline: [information technology]
confidence: high
connected_concepts: [open-source, rag, privacy, governance, edtech-platform, llm, digital-divide, assessment, shadow-ai, critiques-of-ai-in-education]
connected_articles: [huijts-suilen-institutional-ai-sovereignty-gateway-2025, rodenbeck-purdue-on-prem-genai-inference-2025, rahaman-soa-on-prem-ai-gateway-2026, sheneman-mindrouter-institutional-ai-sovereignty-2026, guadalupe-academic-chatbot-local-llm-2026, zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026, pardos-borchers-institutional-workflows-oecd-2026, mcnamara-aimcai-continuous-assessment-infrastructure-2026, on-premises-rag-tutoring-business-education-2026, lata-ferpa-compliant-local-llm-autograder, making-ai-work-for-students-ofs-2026, watson-generative-ai-meaning-mediating-infrastructure-2026]
updated: "2026-11-24T14:04:29-05:00"
translation_of: "concepts/institutional-ai-infrastructure"
source_updated: "2026-11-23T11:40:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-24"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

> **Infrastruktur AI institusional** — lapisan komputasi, penyajian, perutean, dan kendali yang dioperasikan sebuah institusi agar model dapat dipakai lintas pengajaran, penelitian, dan administrasi menurut aturannya sendiri. Ia membentang dari GPU dan klaster tempat bobot disimpan, server inferensi yang menjawab permintaan, [[llm|gateway]] yang mengukur dan merutekan permintaan itu, kartu model dan log audit yang membuat susunan tersebut dapat diperiksa, pipa data yang menghubungkan catatan siswa dengan model, hingga staf yang menjalankan semuanya. Ia bukan objek yang sama dengan [[edtech-platform|platform edtech]] (wadah yang menghadap ke pembelajar) atau [[governance|tata kelola]] (kebijakan yang membatasi keduanya).

## Pertanyaan yang Perlu Dipertimbangkan

- Di mana model sesungguhnya berjalan di institusi Anda, dan bisakah seseorang menyebut nama orang yang dapat menjawab pertanyaan itu tanpa perlu memeriksa?
- Dari enam bentuk adopsi di bawah ini, yang mana yang sesungguhnya sudah Anda masuki, dan yang mana yang Anda kira sudah Anda masuki?
- Jika 90% pemakaian berasal dari 10% pengguna, manakah yang lebih baik bagi anggaran Anda, lisensi per kursi atau gateway terukur, dan tahukah Anda pemakaian Anda berbentuk apa?
- Sebuah dokumen kebijakan menyatakan bahwa permintaan tidak boleh meninggalkan yurisdiksi. Apa dalam tumpukan Anda yang menegakkannya, alih-alih meminta orang mengingatnya?
- Siapa yang bertanggung jawab ketika rekomendasi artikulasi mata kuliah salah, dan apakah infrastruktur Anda mencatat cukup untuk menjawabnya nanti?
- Untuk sekolah dasar, apa yang berubah ketika modelnya kecil dan berjalan di dalam gedung, bukan berskala frontier dan jarak jauh?

## Pendahuluan

Institusi menghabiskan tahun-tahun pertama [[generative-ai|AI generatif]] dengan membeli akses: lisensi [[conversational-ai|chatbot]] di sini, asisten penulisan di sana, masing-masing dengan ketentuan dan jalur datanya sendiri. Hasilnya adalah portofolio yang tak ada yang bisa menggambarkannya dalam satu kalimat, dan serangkaian pertanyaan (ke mana prompt itu pergi, siapa yang menyetujui model ini, berapa yang kita belanjakan) yang tak bisa dijawab satu kantor mana pun. Argumen bahwa lapisan ini memediasi makna, bukan sekadar menyampaikan alat, dikembangkan pada [[critiques-of-ai-in-education|Kritik terhadap AI dalam Pendidikan]].

Memperlakukan AI sebagai infrastruktur adalah responsnya. Artinya ada lapisan penyajian bersama, sebuah gateway yang menerapkan aturan institusi pada setiap permintaan, dan telemetri yang cukup untuk melihat biaya, beban, dan kegagalan. Klaim dalam literatur bukan bahwa ini lebih murah. Klaimnya adalah bahwa ini menjadikan institusi pihak yang memutuskan, yang merupakan jenis klaim berbeda dan lebih sulit diuji.

Makalah-makalah yang terkumpul di sini juga memperlebar apa yang dihitung sebagai infrastruktur. Dua di antaranya menyangkut inferensi untuk obrolan dan pengajaran, satu menyangkut kantor registrar, dan satu menyangkut catatan penilaian. Begitu artikulasi mata kuliah, [[learning-analytics|analitik]] beban kerja, dan akumulasi bukti bergantung pada embedding dan panggilan model, kantor belakang sama bagiannya dengan rak GPU. Argumennya adalah bahwa infrastruktur ada di mana pun sebuah institusi diam-diam mendelegasikan suatu keputusan kepada model.

## Apa yang Sebenarnya Anda Pilih

Bidang ini menggambarkan enam bentuk, bukan dua. Perbedaannya ada pada siapa yang memegang data, siapa yang dapat mengubah model, dan siapa yang menanggung kegagalan.

**Alat teralihdayakan gratis.** Staf atau siswa memakai layanan vendor tanpa biaya. [[intelligent-tutoring|AI Tutor]] Pro, dari Contact North di Kanada, adalah kasus paling jelas: gratis, anonim, tanpa akun, dengan mode diskusi, [[self-assessment|pemeriksaan diri]], dan penyusunan panduan belajar. Playlab berada pada jalur yang sama, memungkinkan pendidik membangun aplikasi yang berlandaskan [[curriculum-design|kurikulum]] mereka sendiri sementara vendor menghosting model-modelnya. Biayanya bukan nol, melainkan ditangguhkan: tidak ada jejak audit institusional, tidak ada kendali kuota, dan ketentuan yang dapat berubah tanpa pemberitahuan. Ini tempat yang dapat dibela untuk uji coba dan tempat yang buruk untuk menetap.

**Kursi pada penyewa pendidikan komersial.** Sebuah distrik atau universitas membeli ChatGPT Edu, Microsoft 365 Copilot, Google Gemini for Education, atau penyewa sebanding. Pengadaan cepat, SSO dan konsol admin sudah termasuk, dan vendor memegang pilihan model serta retensi. Institusi memperoleh integrasi identitas dan kehilangan kemampuan untuk merutekan keluar dari satu penyedia.

**Platform yang Anda kelola sendiri.** [Amplify GenAI](/aied/resources/amplify-genai/) diterapkan ke akun AWS milik institusi sendiri, sehingga dokumen dan percakapan tetap berada di infrastruktur yang dikendalikan institusi sementara vendor menyediakan aplikasinya. Uji coba Vanderbilt melaporkan sekitar \$3 per pengguna per bulan pada 1.300 pengguna, separuhnya menghabiskan di bawah \$1 untuk token. Bentuk ini membeli kendali data tanpa membeli GPU.

**Gateway di atas penyedia campuran.** Satu pintu depan di hadapan backend lokal dan komersial, dilengkapi kuota, SSO, pencatatan log, dan perutean regional. Fontys membangunnya dalam tiga lapis; [MindRouter](/aied/resources/mindrouter/) dan SPIN mengimplementasikan variannya. Ini bentuk yang mengubah dokumen kebijakan menjadi kendala yang ditegakkan, dan membutuhkan insinyur platform, bukan petugas pengadaan.

**Inferensi milik sendiri.** GPU, penjadwal, server model, dan orang-orang yang menjalankannya. MindRouter di University of Idaho adalah kasus rujukan; SPIN di Georgia Tech adalah taruhan yang sama yang dibuat di dalam pusat HPC. Ini satu-satunya bentuk di mana institusi dapat menjawab panggilan pengadilan, regulator, atau perubahan harga vendor tanpa meminta izin.

**AI di dalam alat yang sudah Anda jalankan.** Tipe soal Moodle, mitra AI sebuah platform diskusi, alat umpan balik esai. Beban organisasionalnya rendah dan perubahan datang per mata kuliah, yang sekaligus menjadi batasnya: tidak ada yang dipelajari di pusat darinya.

Bentuk-bentuk ini bersarang. Sebuah gateway dapat menghadapi platform terhosting; platform terhosting dapat memanggil model lokal; alat gratis dapat menjadi uji coba yang tidak serta-merta membenarkan bentuk apa pun di atas. Pertanyaan yang berguna bukan bentuk mana yang terbaik, melainkan keputusan apa yang diam-diam dibuat setiap bentuk untuk Anda.

**Default sejati sektor ini adalah kursi pada penyewa vendor.** Tidak semua institusi membuat pilihan itu secara sadar. [[making-ai-work-for-students-ofs-2026|OfS dan Advance HE (2026)]], yang mengkaji 127 institusi, menemukan sebagian besar menyediakan alat melalui lisensi Microsoft 365 yang ada, paling umum Copilot Chat, dinilai karena lingkungannya yang tertutup menjaga data institusi di dalam amplop kepatuhan. Staf di institusi tanpa lisensi meraih alat gratis yang lebih kuat, kadang dengan data siswa, dan peserta menyuarakan bahwa tingkat gratis atau murah hari ini dapat menjadi kenaikan harga yang tidak dianggarkan di kemudian hari.

## Lapisan Gateway

Tiga implementasi kini menggambarkan langkah arsitektural yang sama dengan konsistensi yang tidak biasa.

[[huijts-suilen-institutional-ai-sovereignty-gateway-2025|Huijts dan Suilen]] di Fontys ICT memisahkan antarmuka bergaya ChatGPT yang terikat pada identitas institusi, inti perutean yang menegakkan anggaran dan kendala regional, serta lapisan penyedia berupa model lokal dan komersial. Setelah enam bulan dan 300 pengguna, batas bulanan \$500 tidak pernah terlampaui, dan setiap sesi dimulai dengan kartu model yang menyebut kemampuan, wilayah hosting, biaya, dan alternatifnya.

[[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] mendorong gagasan yang sama ke dalam penjadwalan. Permintaan diberi bobot berdasarkan peran ([[administrator]] 10, dosen 5, staf 2, mahasiswa 1) melalui Weighted Deficit Round Robin, dan pemilihan backend menambahkan skor lunak untuk latensi, beban, dan preferensi administrator. Gateway menyimpan log audit, dan ia mengukur energi serta token.

[[rahaman-soa-on-prem-ai-gateway-2026|SPIN di Georgia Tech]] menjadikan pemisahan itu eksplisit di batas API: LiteLLM dan PostgreSQL pada mesin virtual khusus CPU, vLLM dan Triton pada node GPU di dalam Slurm, dengan host, port, dan kunci backend diresolusikan dari basis data saat permintaan masuk. Mengganti model menjadi pembaruan basis data yang tak terlihat oleh klien.

Perbedaan-perbedaannya memberi pelajaran. Fontys mengatur portofolio banyak penyedia, MindRouter mengatur kapasitas bersama yang langka, dan SPIN mengatur inferensi pada penjadwal batch yang dirancang untuk mengakhiri tugas. Ketiganya bertemu pada satu klaim: permukaan API adalah kontraknya, dan model di baliknya dapat diganti.

## Penyajian adalah kebijakan, bukan tolok ukur

[[rodenbeck-purdue-on-prem-genai-inference-2025|Dua layanan Purdue]] mencapai lebih dari 1.000 pengguna pada 10+ model [[open-source|sumber terbuka]] dengan perangkat keras sekitar \$100.000, dan sekitar 40% aktif tiap bulan. Keputusan yang penting adalah tim mempertahankan Ollama, bukan vLLM, meskipun vLLM unggul 4-5x dalam laju, karena mendukung banyak model lebih penting daripada kecepatan mentah bagi komunitas yang ingin mencoba hal-hal.

Uji beban SPIN memberi separuh lain dari gambaran itu. Terhadap mesin tiruan pada 1.000 permintaan konkuren per detik, mesin virtual gateway 8-vCPU mencapai 76% dari laju agregat ideal, sementara bare metal 8-worker mencapai 98%. Lapisan proxy murah sampai tidak lagi, dan ambangnya terukur, bukan misterius.

Kedua hasil itu tidak dapat digeneralisasi menjadi aturan. Keduanya menegaskan bahwa laju, rentang model, dan kesederhanaan operasional saling mengorbankan, dan pertukaran itu sebaiknya dibuat secara sadar, bukan diwariskan dari default vendor.

## Komputasi tepi mengubah argumen

[[zulfiqar-iqbal-local-ai-infrastructure-slms-primary-2026|Zulfiqar dan Iqbal]] menggambarkan alternatif berskala sekolah: komputer desktop atau mini PC rekondisi dengan GPU kelas awal, menghosting sebuah model berukuran antara 1B dan 13B parameter, dengan indikasi biaya beberapa ratus hingga beberapa ribu dolar Australia per server. Kasus ekonomi mereka adalah sebuah sekolah dengan 400 siswa yang tidak dapat menyerap biaya API cloud kumulatif di seluruh kelas. Kejujuran mereka ialah pengakuan bahwa belum ada perbandingan biaya siklus hidup komprehensif, sehingga penghematan itu adalah hipotesis, bukan temuan.

Pada skala mata kuliah, [[on-premises-rag-tutoring-business-education-2026|CourseChat]] menunjukkan logika yang sama di bawah kendala berbeda: model produksi 8B dipertahankan dibanding kandidat lebih besar yang gagal pada gerbang latensi kelas. [[guadalupe-academic-chatbot-local-llm-2026|Guadalupe, Topón, dan Iza]] memenuhi target median 5 detik pada 3,57 s tetapi melewatkannya pada p95 dengan 6,47 s, dan melacak sekitar 96% waktu end-to-end ke proses pembangkitan.

Berjalan secara lokal mengubah pertanyaan privasi dari kontraktual menjadi fisik, dan tidak menjawabnya. Penerapan lokal dengan pencatatan prompt penuh tetap merupakan sistem retensi; yang berubah adalah siapa yang dapat dipaksa menyerahkannya.

## Kantor belakang juga infrastruktur

[[pardos-borchers-institutional-workflows-oecd-2026|Pardos dan Borchers]] berargumen bahwa lokasi yang paling berdampak dari [[ai-education|AI dalam pendidikan]] bukanlah jendela obrolan, melainkan registrar, kantor penasihat akademik, dan komite kurikulum. Contoh-contoh mereka berupa embedding, bukan percakapan: vektor mata kuliah yang dipelajari dari riwayat pendaftaran, terjemahan mesin antara ruang vektor dua institusi, dan pipeline penandaan yang memetakan sumber terbuka ke sebuah standar.

Angka-angkanya spesifik. Prediksi transfer berbasis embedding memvalidasi 65 artikulasi yang ada dan kini diuji coba dengan 59 institusi serta empat sistem [[higher-ed|pendidikan tinggi]]. Jam kredit hanya menjelaskan 6% varians beban kerja yang dipersepsikan, sedangkan fitur aktivitas LMS menjelaskan 36%. Penandaan AI kolaboratif memotong waktu sekitar 50%, tetapi mengurangi akurasi sebesar 35%.

Temuan adopsi itulah yang seharusnya diingat perencana infrastruktur. Dalam eksperimen 2×2, menyembunyikan rekomendasi outlier berkonfiden rendah menaikkan penerimaan dan produktivitas administrator, sementara meminta pengguna menandai rekomendasi menurunkan penerimaan kecuali outlier ditampilkan. Sebuah pemberi rekomendasi yang lebih akurat masih dapat gagal karena cara keluarannya disajikan, yang menjadikan desain antarmuka bagian dari infrastruktur, bukan sentuhan akhir.

## Penilaian sebagai masalah infrastruktur

[[mcnamara-aimcai-continuous-assessment-infrastructure-2026|AIM-CAI]] berargumen bahwa bukti yang dibutuhkan untuk menafsirkan pembelajaran sudah ada, tetapi terpecah di sistem-sistem yang tidak dapat saling membaca. Kerangkanya memiliki enam lapisan fungsional, tiga batas inferensial yang membatasi apa yang dapat ditopang sebuah potret, dan tujuh persyaratan tata kelola, termasuk keterauditan, estimasi ketidakpastian, dan override manusia. Itu adalah kerangka, bukan penerapan, dan para penulis menyatakannya.

[[lata-ferpa-compliant-local-llm-autograder|LaTA]] menyediakan kasus yang lebih sempit: model penalaran lokal yang menghilangkan pertanyaan [[privacy|FERPA]] tentang mengirim pekerjaan siswa ke vendor, alih-alih mengelolanya. Bersama-sama, keduanya menyiratkan bahwa infrastruktur penilaian bukan fitur platform pembelajaran, melainkan masalah terpisah dengan model datanya sendiri dan mode kegagalannya sendiri. Ini adalah tingkat infrastruktur dari [[learning-environments-as-systems|lingkungan pembelajaran sebagai sistem]]: lapisan yang memutuskan apakah alat tingkat mata kuliah dapat ditopang sama sekali.

## Biaya, latensi, dan masalah visibilitas

Tema yang berulang di seluruh implementasi adalah bahwa biaya dan latensi hanya terlihat ketika ada yang mengukurnya. Angka perangkat keras \$100.000 milik Purdue adalah angka modal dengan biaya staf yang tidak disebutkan. Tolok ukur gateway SPIN membatasi overhead proxy dan tidak mengatakan apa pun tentang latensi end-to-end. Akuntansi energi [[sheneman-mindrouter-institutional-ai-sovereignty-2026|MindRouter]] melaporkan daya normal sekitar 9,4 kW dibandingkan puncak teramati 14,1 kW dan maksimum teoretis 22,1 kW, serta 872.997.430 token dalam jendela 17 hari menyiratkan penghematan tahunan \$82.843 hingga \$251.806 dibanding padanan komersial menurut tarif makalah tersebut.

Platform terhosting berskala distrik melaporkan aritmetika sejenis: PSD401 AI Studio mengklaim biaya per token 67 hingga 90% lebih rendah daripada alternatif komersial. Tidak satu pun angka ini dapat dibandingkan lintas institusi tanpa penyebut yang sama. Yang dapat dibandingkan adalah praktik mengukurnya sendiri.

## Kedaulatan memiliki dimensi keadilan

Sebuah gateway dapat merutekan ke model lokal yang menangani bahasa institusi dengan buruk, dan keheningan yang dihasilkannya tidak netral. Argumen infrastruktur dan argumen [[digital-divide|kesenjangan digital]] bertemu di sini: institusi dengan klaster dan staf memperoleh kapabilitas, dan yang tanpa keduanya menyerap apa pun yang ditawarkan vendor dengan harga berapa pun yang ditetapkan vendor. Tingkat gratis sungguh berguna dan sungguh rapuh, yang membuat perlakuan terhadapnya sebagai strategi permanen menjadi keputusan tentang institusi mana yang dilayani.

**Infrastruktur juga memediasi makna.** [[watson-generative-ai-meaning-mediating-infrastructure-2026|Watson, Morgner, dan Brezovec (2026)]] memperlakukan AI generatif sebagai infrastruktur yang memediasi makna, yang memformat ulang prompt, [[rubrics|rubrik]], umpan balik, dan genre menjadi bentuk yang komunikatif dan masuk akal, sehingga pengadaan dan audit harus bertanya gaya komunikatif siapa yang dikenali sebuah sistem, bantuan apa yang dinormalisasikannya, dan apakah ekspektasi soal kecepatan dan kerapian melayang lebih cepat daripada dukungannya.

## Implikasi bagi Praktik

Administrator senior dapat mulai dengan menamai bentuk yang sesungguhnya ditempati setiap unit. Enam bentuk itu berbeda dalam hal siapa yang memegang data dan siapa yang menanggung kegagalan, dan kebanyakan institusi berada di beberapa bentuk sekaligus: penyewa untuk staf, alat gratis di satu departemen, platform terhosting di lainnya. Inventaris satu halaman tentang apa yang dipakai, ke mana data pergi, dan siapa yang dapat mengubah model lebih berguna daripada dokumen strategi yang menggambarkan salah satunya.

Pimpinan IT dan perpustakaan dapat menjadikan gateway sebagai tempat kebijakan ditegakkan. Fontys, MindRouter, dan SPIN bertemu pada kontrak yang sama: satu permukaan API, kuota per pengguna, integrasi identitas, perutean regional, dan kartu model yang ditampilkan sebelum permintaan dikirim. Aturan yang hidup di dalam PDF dan aturan yang hidup di dalam gateway adalah objek berbeda, dan hanya yang kedua yang berlaku ketika model baru muncul.

Staf keuangan dan pengadaan dapat mengukur biaya sebelum memilih pemasok. Lisensi per kursi, platform terhosting, dan gateway terukur memberi imbalan pada bentuk pemakaian yang berbeda, dan satu-satunya cara mengetahui mana yang lebih murah adalah mengukur token, pengguna aktif, dan beban puncak. Layanan Purdue mencapai sekitar 1.000 pengguna dengan perangkat keras sekitar \$100.000; sebuah uji coba terhosting melaporkan sekitar \$3 per pengguna per bulan. Angka-angka itu tidak dapat dibandingkan tanpa penyebut yang sama.

Pusat pengajaran dan pembelajaran dapat memperlakukan uji coba pada tingkat gratis sebagai uji coba. Alat gratis adalah alasan banyak pendidik dapat mencoba apa pun, dan alat itu datang tanpa jejak audit, tanpa kuota, dan dengan ketentuan yang dapat berubah. Uji coba yang berhasil sebaiknya pindah ke bentuk yang dapat diatur institusi.

Pemimpin sekolah tanpa pusat data tetap dapat menjalankan model lokal. Komputer desktop rekondisi dengan GPU kelas awal menghosting model kecil untuk satu gedung, dan perolehan privasi bersifat fisik, bukan kontraktual. Ia tetap sistem retensi, sehingga pencatatan dan akses tetap merupakan keputusan desain.

Ketua departemen dapat melihat melampaui jendela obrolan. Artikulasi, analitik beban kerja, penandaan, dan catatan penilaian adalah tempat institusi sudah mendelegasikan keputusan kepada model, dan sistem-sistem itu membutuhkan tata kelola yang sama dengan chatbot, biasanya dengan pengawasan lebih sedikit.

## Miskonsepsi Umum

**"On-premises lebih murah."** Biaya lisensi hilang, lalu muncul perangkat keras, listrik, pendinginan, dan staf. Layanan Purdue menghabiskan sekitar \$100.000 untuk perangkat keras sebelum ada yang dibayar menjalankannya, dan staf adalah bagian yang tidak menyusut.

**"Gateway hanyalah proxy."** Proxy meneruskan. Gateway memutuskan model mana, wilayah mana, anggaran mana, pengguna mana, apa yang dicatat, dan apa yang dikatakan kepada pengguna sebelum ia menekan kirim.

**"Lokal berarti privat."** Lokalitas mengubah siapa yang dapat memanggil data dengan panggilan pengadilan, bukan apakah data itu disimpan. Pencatatan audit, penyimpanan prompt, dan akses administrator adalah pilihan desain, dan penerapan lokal dengan pencatatan penuh tetap merupakan permukaan pengawasan.

**"Membeli GPU adalah strateginya."** Kapasitas tanpa penjadwalan, kuota, dan dukungan menjadi antrean. Kasus-kasus yang berhasil menggambarkan tata kelola dan operasi setidaknya sebanyak perangkat keras.

**"Masalah AI adalah chatbot."** Sebagian besar nilai institusional yang digambarkan dalam literatur ini berada pada artikulasi, analitik beban kerja, penandaan, dan catatan penilaian, tempat tidak ada siswa yang pernah membuka jendela obrolan.
