---
title: "idstack"
created: "2026-09-24T05:08:48-04:00"
type: resource
summary: "Kumpulan open-source berisi sebelas skill Claude Code yang mengaudit sebuah mata kuliah terhadap basis bukti desain pembelajaran, menandai setiap rekomendasi dengan tingkat buktinya."
url: https://idstack.org/
source_code: https://github.com/savvides/idstack
author: "savvides"
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [learning-design, design-thinking, ai-literacy]
pedagogy: [online-teaching-and-learning, active-learning]
technology: [open-source, generative-ai, prompt-engineering]
ethics: [accessibility, universal-design-for-learning, bias-mitigation]
assessment: [assessment, formative-assessment, feedback]
audience: [instructional designers, instructors, curriculum designers, faculty developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [id-toolbox, education-agent-skills]
translation_of: resources/idstack
source_updated: "2026-09-24T05:08:48-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**idstack** adalah kumpulan open-source berisi sebelas skill untuk [[learning-design|desain
pembelajaran]] berbasis bukti, didistribusikan sebagai plugin Claude Code dengan ekstensi panel samping
Chrome pendamping. Alih-alih menyusun draf mata kuliah, skill-nya mengaudit satu mata kuliah: mereka
mengklasifikasikan tujuan terhadap taksonomi Bloom revisi, memeriksa keselarasan konstruktif antara
tujuan, aktivitas dan asesmen, menandai masalah beban kognitif, dan meninjau aksesibilitas terhadap WCAG
2.1 AA serta Universal Design for Learning. Setiap rekomendasi membawa tingkat bukti, dari T1 untuk
meta-analisis dan uji acak sampai T5 untuk pendapat pakar. Proyek ini menyatakan bahwa sitasinya
bersandar pada 108 studi telaah sejawat di sebelas domain penelitian; jumlah itu adalah klaim proyeknya
sendiri, dan bibliografinya diterbitkan dalam Markdown sehingga peninjau dapat memeriksanya.

Mata kuliah masuk melalui koneksi Canvas API, berkas IMS Common Cartridge, paket SCORM, ekspor PDF dari
alat authoring, atau dokumen yang ditempel. Manifes proyek bersama mengingat mata kuliahnya antar sesi,
dan skill pipeline merangkai tahap desainnya sambil melewati pekerjaan yang sudah selesai. Tinjauan
dilaporkan terhadap delapan standar Quality Matters dan kerangka Community of Inquiry, memisahkan
kehadiran pengajaran, sosial dan kognitif, lalu mengurutkan rekomendasi berdasarkan tingkat keparahannya.

## Yang perlu diketahui sebelum mengadopsinya

Plugin ini memerlukan Claude Code dan shell bash untuk dipasang; PowerShell dan cmd tidak dapat
menjalankan skrip penyiapannya, dan Python 3 disarankan untuk tren skor. Data mata kuliah tetap di folder
proyek pada mesin pembaca sendiri, dan hanya keluar melalui integrasi yang dipanggil pengguna, seperti
panggilan Canvas API. Inferensi langsung ekstensi Chrome memerlukan kunci API Google AI Studio gratis
milik pembaca sendiri, meskipun mode simulasi mendemonstrasikannya tanpa kunci. Proyek ini menyebut
dirinya beta pada versi 3.5.1.0 dan memperingatkan perubahan yang merusak antar versi minor, dan
diterbitkan di bawah akun GitHub savvides alih-alih oleh penulis bernama.

## Konsep terkait
[[learning-design]], [[design-thinking]], [[online-teaching-and-learning]], [[accessibility]], [[universal-design-for-learning]], [[assessment]], [[generative-ai]], [[open-source]]
