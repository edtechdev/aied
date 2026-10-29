---
title: "Ukuran dan Metode Penelitian Apa yang Dapat Dipakai Pengajar untuk Mengevaluasi Intervensi Terkait AI?"
created: "2026-08-25T09:20:00-04:00"
connected_faqs: [does-ai-help-students-learn, checking-whether-educational-ai-works, research-gaps-aied]
weight: 55
audience: [instructors, researchers, faculty developers]
assessment: [assessment, self-report-measures]
page_kind: [evaluation]
methods: [ai-ed-evaluation, research-methods-aied]
updated: "2026-10-29T14:48:08-04:00"
translation_of: faqs/evaluating-ai-interventions-methods
source_updated: "2026-10-28T11:47:13-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-10-29"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Anda menjalankan uji coba di dua kelas, mengumpulkan survei akhir unit, dan memiliki rapat fakultas tiga pekan lagi ketika seseorang akan bertanya apakah itu berhasil. Atau seorang penelaah bertanya apa kondisi pembanding Anda, dan kelas yang lain melakukan hal yang berbeda. Bagaimanapun juga: apa yang akan dianggap sebagai bukti di sini?

Cocokkan metodenya dengan klaimnya. Survei memberi tahu apakah mahasiswa menyukai kegiatannya. Apakah mereka belajar memerlukan ukuran kinerja, dan apakah AI menyebabkan keuntungannya memerlukan kondisi pembanding.

## Versi singkat

**1.** Tulis klaimnya dalam satu kalimat, dengan hasilnya disebutkan. “Mahasiswa yang memakai tutor memperoleh nilai lebih tinggi pada ujian tanpa bantuan” dapat diuji.

**2.** Jalankan pengukuran dasar, intervensi, pengukuran pasca segera, dan pengukuran lanjutan yang diambil tanpa AI.

**3.** Jelaskan kondisi pembandingnya sama cermatnya dengan perlakuan, bahkan ketika kondisi itu adalah praktik Anda yang sudah ada.

**4.** Ukur kinerja berbantuan dan pembelajaran mandiri secara terpisah, dan perlakukan rata-rata yang terbit sebagai hipotesis tentang kelas Anda.

## Pilih metode yang dapat dipertahankan oleh pertanyaan Anda

Halaman [[research-methods-aied|Metode Penelitian dalam AIED]] menguraikan apa yang diperoleh setiap opsi. Eksperimen teracak memberi inferensi kausal terkuat. Desain pra/pasca atau kelompok berpasangan yang kuasi-eksperimental cocok untuk kelas utuh dan mendukung klaim yang lebih lemah. Wawancara, kelompok fokus, observasi, dan analisis artefak [[qualitative-research|kualitatif]] mengungkap mekanisme dan pengalaman yang tak terduga. [[mixed-methods-research|Metode campuran]] memasangkan bukti hasil dengan sebuah penjelasan. [[design-based-research|Penelitian berbasis desain]] cocok bagi pengajar yang menyempurnakan intervensi lintas iterasi.

Analisis kualitatif berbantuan AI masuk dalam daftar itu dengan satu syarat. Ia menata ulang korpus wawancara dalam hitungan menit, sehingga [[chain-behind-claim-warrantability-2026|keterjaminan klaim]] sama pentingnya dengan akurasi: catatlah penataan ulang yang terdokumentasi sehingga pembaca dapat memeriksa, membantah, dan merevisi jalur dari data ke klaim.

Survei adalah [[self-report-measures|ukuran lapor diri]]: tepat untuk sikap, keliru untuk pembelajaran.

## Beri nama pada kondisi pembanding

Tiga syarat membuat klaim kausal dapat ditafsirkan: perlakuan yang dijelaskan secara presisi, kondisi pembanding yang terdefinisi baik, dan ukuran pembelajaran yang bertahan lama yang valid. [[weidlich-chatgpt-effect-search-cause-2025|Weidlich et al. (2025)]] mengaudit 19 perbandingan ChatGPT dalam pendidikan terhadap kriteria itu. Empat (21%) memenuhi ketiganya. Perlakuan terdefinisi baik pada 74%, kelompok kontrol pada 42%, hasil yang memenuhi syarat sebagai pembelajaran pada 53%.

Mode kegagalan itu mudah direproduksi. [[generative-ai|Alat serba guna]] yang diperkenalkan bersama kegiatan baru, umpan balik baru, atau antarmuka yang dirancang ulang mencampuradukkan medium dengan metodenya, dan hasil yang signifikan itu milik desain ulangnya.

## Ukur hasil yang benar-benar Anda pedulikan

Sintesis [[ai-ed-evaluation|Evaluasi AI Ed]] merekomendasikan perolehan belajar tanpa bantuan, retensi tertunda, transfer ke tugas baru, kualitas penalaran, [[misconceptions|miskonsepsi]], penyerapan umpan balik, dan kinerja subkelompok. Keterlibatan, kepuasan, log penggunaan AI, [[self-efficacy|efikasi diri]], dan [[technology-acceptance-model|persepsi kebermanfaatan]] adalah ukuran sekunder yang wajar dan pengganti yang buruk bagi pembelajaran. Beban kerja dan penghematan waktu termasuk hasil implementasi, pertanyaan yang berbeda.

Minimum pada skala kelas adalah pengukuran dasar, intervensi, pengukuran pasca segera, dan ukuran lanjutan tanpa bantuan. Tambahkan kondisi pembanding bila Anda dapat: praktik yang sudah ada, tanpa AI, AI tanpa batas melawan AI dengan perancah, atau dua desain alternatif. Nilai kinerja berbantuan dan tanpa bantuan dengan instrumen terpisah, karena satu rubrik akan mencampurkannya.

## Bacalah setiap angka sebagai hipotesis

Efek rata-rata dari literatur adalah pemandu yang lemah bagi satu kelas. [[oneill-presumed-effective-meta-analysis-2026|Audit O'Neill (2026)]] atas 14 [[meta-analysis-systematic-review|meta-analisis]] berdampak tinggi menemukan bahwa tidak satu pun memberikan dasar yang valid bagi klaimnya. [[learning-gains|“prestasi akademik”]] yang digabungkan mencampur skor tes, motivasi, [[self-efficacy|efikasi diri]], dan sikap menjadi satu estimasi. Heterogenitasnya ekstrem: I² berkisar dari 77,2% hingga 94,4% pada 13 analisis yang melaporkannya, dan 12 di antaranya berada di atas 80%. Ke-14 analisis menilai [[limitations-in-aied-research|bias publikasi]] secara tidak valid, dan 61% studi primer yang diperiksa secara acak mengandung masalah validitas. Empat analisis melaporkan varians antarstudi, dua melaporkan interval prediksi, dan kedua interval itu mencakup nol.

Skor yang praktis bisa mengukur konstruk yang salah. Dalam [[zhang-platform-scores-miss-ai-teaching-agents-2026|evaluasi atas delapan agen pengajar AI]], agen yang berada di peringkat ketiga pada skor platformnya sendiri berada di peringkat terakhir pada rubrik yang divalidasi pakar, karena skor platform mengindeks kinerja mahasiswa selama interaksi. Perlakukan metrik dasbor sebagai hipotesis.

## Apa yang sering disalahpahami pengajar

Survei kepuasan mengukur pembelajarannya. Survei itu mengukur kepuasan, yang oleh sintesis Evaluasi AI Ed didaftar sebagai ukuran sekunder di samping hasil belajar.

Kenaikan pra/pasca menunjukkan intervensinya berhasil. Itu menunjukkan skor naik. Apakah ukurannya memenuhi syarat sebagai pembelajaran adalah pertanyaan terpisah, dan audit itu menemukan hasil belajar yang memenuhi syarat pada 53% perbandingan yang ditinjaunya.

Ukuran efek yang terbit dapat dipindahkan ke kelas saya. Ke-14 meta-analisis O'Neill tidak dapat menopang klaim yang dibangun di atasnya, dan kedua interval prediksi yang dilaporkan mencakup nol.

Analitik platform mengukur mutu pengajaran. Agen peringkat ketiga Zhang berada di posisi terakhir pada rubrik pakar.

## Apa yang akan kembali kepada Anda

**“Kami sudah punya evaluasi akhir mata kuliah.”** Itu mengukur mata kuliahnya, dan dijalankan setelah semester ketika Anda membutuhkan jawabannya.

**“Kelompok pembanding mustahil dalam mata kuliah yang utuh.”** Bandingkan dengan versi tahun lalu dari tugas yang sama, atau dengan kelas kedua, dan jelaskan perbedaannya secara jujur. Desain kuasi-eksperimental lebih lemah, dan tetap informatif ketika alternatifnya adalah klaim tanpa pembanding.

**“Ukuran efek dalam meta-analisis itu besar.”** Pada hasil yang mana, di kelas siapa? Kedua interval prediksi yang ditemukan O'Neill mencakup nol.

**“Dasbor kami menunjukkan keterlibatan yang kuat.”** Keterlibatan adalah ukuran sekunder dalam daftar Evaluasi AI Ed. Letakkan ukuran pembelajaran tanpa bantuan di sampingnya.

## Yang perlu dilakukan pekan ini

**1.** Tulis klaim Anda dalam satu kalimat dan garisbawahi hasilnya.

**2.** Tambahkan ukuran lanjutan tanpa bantuan ke kalender, setelah intervensi dan bukan pada pekan yang sama.

**3.** Tulis satu paragraf yang menjelaskan kondisi pembanding, dengan kerincian yang sama seperti perlakuan.

**4.** Tarik angka platform yang sudah Anda miliki dan tandai masing-masing sebagai hasil artefak atau hasil belajar.

**5.** Minta satu kolega membaca desainnya dan menyebutkan apa lagi yang berubah selama semester.

## Ke mana selanjutnya

[[does-ai-help-students-learn|Apakah AI membantu mahasiswa belajar?]] merangkum apa yang ditunjukkan bukti hasil, dan [[research-gaps-aied|Celah Penelitian dalam AIED]] membahas di mana buktinya menipis. [[checking-whether-educational-ai-works|Bagaimana kita tahu sebuah AI pendidikan bekerja dengan benar?]] adalah versi pertanyaan ini bagi orang yang membangun atau membeli sebuah sistem.
