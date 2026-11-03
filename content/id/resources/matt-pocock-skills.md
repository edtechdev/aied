---
title: "Skill untuk Engineer Sejati"
created: "2026-09-24T05:57:40-04:00"
type: resource
summary: "Kumpulan skill agen kecil yang dapat dikomposisi dan open-source dari Matt Pocock, termasuk skill mengajar multi-sesi, skill bertanya tanpa henti, dan panduan menulis dokumen yang dapat diikuti agen."
url: https://github.com/mattpocock/skills
source_code: https://github.com/mattpocock/skills
author: "Matt Pocock"
author_url: https://github.com/mattpocock
resource_type: [agent skill, collection of tools]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, human-ai-collaboration, teacher-ai-competency]
pedagogy: [self-directed-learning, metacognition, socratic-method]
technology: [generative-ai, prompt-engineering, pedagogical-agent]
audience: [instructors, learners, software developers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [clarity, education-agent-skills]
translation_of: resources/matt-pocock-skills
source_updated: "2026-09-27T03:31:33-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**Skills for Real Engineers** adalah direktori agent skill terbitan Matt Pocock: berkas instruksi kecil
yang dapat dikomposisi yang dipasang ke Claude Code, Codex atau agen lain, ditulis untuk diadaptasi
alih-alih diadopsi utuh. Sebagian besar koleksinya melayani kerja perangkat lunak, tetapi beberapa skill
adalah instrumen pendidikan yang dibangun untuk mengajar dan bertanya alih-alih untuk kode.

Contoh paling jelas adalah `teach`, yang berjalan lintas beberapa sesi dan memperlakukan direktori kerja
sebagai ruang kerja pengajaran yang stateful, sehingga kemajuan pembelajar dan pertanyaan terbukanya
bertahan antar percakapan alih-alih dimulai ulang setiap kali. `grill-me` dan primitif `grilling` di
baliknya mewawancarai pengguna tanpa henti tentang sebuah rencana sampai setiap cabangnya terselesaikan,
yaitu [[socratic-method|pertanyaan Sokratik]] sebagai prosedur yang dapat dipakai ulang alih-alih suasana
percakapan. `wait-what` merespons begitu sebuah pesan gagal mendarat dengan menyampaikannya ulang dalam
bahasa sederhana beserta konteks yang hilang, gerakan yang dikenali setiap pengajar dari menyaksikan
penjelasan yang meleset pertama kali. `writing-for-agents` membahas cara menulis dokumen yang dapat
diikuti [[prompt-engineering|agen]], yang kini menjadi bentuk praktis dari menulis instruksi untuk materi
mata kuliah [[pedagogical-agent|AI]]. `to-questionnaire` mengubah sebuah keputusan menjadi kuesioner bagi
siapa pun yang dapat menjawabnya, `handoff` memadatkan percakapan menjadi dokumen yang dapat dilanjutkan
agen lain, dan `wizard` menghasilkan panduan interaktif untuk langkah yang hanya dapat dilakukan orang.

## Yang perlu diketahui sebelum mengadopsinya

Semuanya [[open-source|open source]] di bawah MIT dan gratis diambil sebagai titik awal untuk
[[ai-literacy|literasi AI]] lokal atau [[self-directed-learning|studi mandiri]]. Adopsinya besar dan
bergerak cepat: sekitar 270.000 bintang dan 23.000 fork saat diperiksa pada September 2026, dengan commit
terbaru pada 18 September 2026. Peringatannya adalah cakupan. Skill-nya mengasumsikan konteks kerja
seorang [[human-ai-collaboration|engineer]], diorganisasi ke dalam keranjang engineering, productivity,
deprecated dan in-progress, sehingga beberapa entri secara eksplisit belum selesai atau sudah
dipensiunkan, dan README-nya sekaligus menjadi pendaftaran buletin. Perlakukan skill mengajar dan
bertanya sebagai bagian yang dapat dipindahkan, dan perkirakan untuk menulis ulang salah satunya sebelum
menaruhnya di depan siswa.

## Konsep terkait
[[socratic-method]], [[self-directed-learning]], [[metacognition]], [[prompt-engineering]], [[generative-ai]], [[pedagogical-agent]], [[ai-literacy]], [[human-ai-collaboration]], [[open-source]], [[teacher-ai-competency]]
