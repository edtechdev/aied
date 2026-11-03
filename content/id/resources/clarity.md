---
title: "Clarity"
created: "2026-09-24T05:29:55-04:00"
type: resource
summary: "Agent Skill open-source dan editor peramban privat yang mengubah delapan belas aturan penulisan yang lebih jelas menjadi mode draf, tulis ulang dan tinjau untuk prosa."
url: https://clarity.addy.ie/
source_code: https://github.com/addyosmani/clarity
author: "Addy Osmani"
author_url: https://addyosmani.com/
resource_type: [agent skill, software]
access: [free]
license: "MIT"
last_verified: "2026-09-24"
foundations: [ai-literacy, critical-thinking]
technology: [generative-ai, prompt-engineering, open-source]
assessment: [feedback]
discipline: [writing education]
audience: [instructors, learners, researchers, instructional designers]
level: [higher ed, adult learning]
confidence: high
connected_resources: [education-agent-skills, id-toolbox]
translation_of: resources/clarity
source_updated: "2026-09-24T05:29:55-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

**Clarity** memadukan sebuah Agent Skill dengan editor peramban, keduanya dibangun di sekitar delapan
belas aturan penulisan yang “mendapatkan pembacanya”. Skill ini dipasang ke agen pengodean seperti
Claude Code dan Codex dengan `npx skills add addyosmani/clarity`, lalu bekerja dalam tiga mode: mode
tinjau mengkritik draf dan membiarkan berkasnya tidak tersentuh, mode tulis ulang menyunting draf di
tempat, dan mode wawancara mengajukan pertanyaan kepada penulis lebih dulu lalu menulis bersama dari
jawabannya. [[feedback]] yang diterima penulis diarahkan pada substansi sebelum gaya. Aturannya
menanyakan untuk siapa tulisan itu dan apa yang sudah diketahui pembacanya, mendorong klaim alih-alih
subjek dan hal spesifik alih-alih abstraksi, serta memperlakukan pengisi halaman sebagai masalah tidak
tahu untuk apa tulisan itu, bukan masalah kosakata.

Editor perambannya berjalan lokal di dalam halaman dan tidak mengunggah draf. Editor ini melaporkan
ciri-ciri prosa buatan mesin, keterbacaan, dan celah substansi, sehingga berguna untuk meninjau teks
yang dihasilkan [[generative-ai|AI generatif]] sebelum sampai ke pembaca. Proyek ini menegaskan bahwa
tujuannya adalah tulisan yang tetap jelas milik penulisnya, bukan prosa yang direkayasa untuk lolos
[[ai-detection|deteksi AI]], sebuah pembedaan yang akan dikenali pengajar ketika mereka menetapkan
kebijakan tentang [[writing-education|penulisan]] berbantuan AI.

## Yang perlu diketahui sebelum mengadopsinya

Repositorinya menerbitkan protokol evaluasi, sampel sebelum-dan-sesudah di `samples/`, dan berkas
referensi di balik skill, sehingga peninjau dapat memeriksa bagaimana aturannya berperilaku alih-alih
menerima klaim begitu saja; halaman ini tidak mengulang hasil terukur apa pun. Penulisnya adalah Addy
Osmani, lisensinya MIT, dan karyanya independen, bukan produk institusi mana pun. Proyek ini muda dan
aktif: dibuat Agustus 2026, 54 commit, tiga rilis dengan yang terbaru versi 0.2.1 pada September itu,
dan sekitar 250 bintang saat diperiksa pada September 2026. Tiga kontributor telah menggabungkan
perubahan. Instruksi skill dimuat ke agen yang sudah dijalankan pembaca, sehingga peringatan
[[prompt-engineering|rekayasa prompt]] yang biasa berlaku: kualitas kritiknya bergantung pada draf yang
diserahkan kepadanya.

## Konsep terkait
[[ai-literacy]], [[critical-thinking]], [[generative-ai]], [[prompt-engineering]], [[feedback]], [[assessment]], [[writing-education]]
