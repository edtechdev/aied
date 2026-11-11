---
title: "Membangun Buku Teks Cerdas"
created: "2026-10-10T11:10:00-04:00"
type: resource
summary: "Panduan open-source Dan McCreary untuk membangun buku teks cerdas: buku teks daring dengan pencarian, navigasi, glosarium, kuis, grafik konsep dan simulasi tertanam, dibangun dengan MkDocs Material dan AI generatif, plus pustaka MicroSim interaktif buatan AI."
url: https://dmccreary.github.io/intelligent-textbooks/
source_code: https://github.com/dmccreary/intelligent-textbooks
author: "Dan McCreary"
resource_type: [ebook or guide, collection of activities]
access: [free]
license: "MIT (site content); CC BY-SA for MicroSims"
last_verified: "2026-10-10"
foundations: [curriculum-design, learning-design, design-thinking, misconceptions]
pedagogy: [active-learning, constructivist, self-directed-learning]
technology: [generative-ai, simulation, knowledge-graph, open-source, vibe-coding]
ethics: [accessibility]
assessment: [formative-assessment]
audience: [instructors, faculty developers, administrators]
level: [higher ed, graduate]
confidence: high
connected_resources: [pedagogical-promptbook, id-toolbox, claw-ed]
translation_of: resources/intelligent-textbooks
source_updated: "2026-10-10T11:10:00-04:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Situs **Intelligent Textbooks** adalah panduan langkah demi langkah Dan McCreary untuk membangun *buku
teks cerdas* — buku teks daring yang melampaui PDF statis dengan menambahkan pencarian, navigasi situs,
glosarium istilah, daftar isi, pengelolaan kuis, formula yang dirender, pratinjau media sosial,
pemeriksaan tautan, dan **grafik konsep** yang mudah divisualisasikan yang menunjukkan semua konsep dalam
sebuah mata kuliah beserta ketergantungannya. Panduannya berargumen bahwa banyak mata kuliah saat ini
dapat memperoleh manfaat dari buku teks daring berkualitas tinggi dengan fitur-fitur ini, dan
menunjukkan cara membangunnya memakai sistem build [MkDocs](http://mkdocs.com/) yang dipadukan dengan
tema Material dan AI generatif untuk membuat serta memelihara kontennya.

Gerakan yang menjadi cirinya adalah bahwa buku teks itu *ditulis dalam Markdown dan dihasilkan oleh AI*,
sebuah contoh konkret dari pola [[vibe-coding|penulisan berbantuan AI]] yang diterapkan pada
[[curriculum-design|konten mata kuliah]]: alih-alih memelihara situs besar dengan tangan, Anda
mendeskripsikan mata kuliahnya dan membiarkan AI generatif menghasilkan serta memelihara halamannya,
sementara rantai alatnya menangani navigasi, pencarian dan grafik konsep. Pustaka [Claude Code
Skills](https://dmccreary.github.io/ibook-skills/) pendampingnya mengklaim mengotomatiskan lebih dari 90%
tugas yang diperlukan untuk membangun buku teks tingkat 2 dari deskripsi mata kuliah.

## Sumber daya turunan: MicroSims

Pendamping alami panduan ini adalah pustaka **MicroSims** McCreary di
<https://dmccreary.github.io/microsims/> (sumber:
[github.com/dmccreary/microsims](https://github.com/dmccreary/microsims)), yang menyediakan simulasi
interaktif yang ditanam buku teks cerdas. Sebuah *MicroSim* (mikro-simulasi) adalah simulasi interaktif
sederhana yang dihasilkan dengan AI untuk membantu guru menjelaskan sebuah konsep, dan dapat ditanam di
buku teks cerdas atau situs mana pun yang menerima `iframe`. MicroSim menonjol karena tiga alasan:
**generasi berbantuan AI** (pola desain terstandardisasi mengubah deskripsi simulasi dalam bahasa alami
menjadi aset yang dapat dibagikan), **penanaman universal** (satu elemen HTML `iframe` menanamkannya ke
halaman mana pun), dan **kode yang transparan dan dapat diubah** (tanpa kotak hitam — satu klik membuka
simulasinya di editor web, dan lisensi Creative Commons memungkinkan sebagian besar guru memakainya tanpa
biaya lisensi). Istilah ini diciptakan Valerie Lockhart pada 2023 setelah ia menemukan guru dan siswa
dapat membangun simulasi dengan pustaka JavaScript p5.js dengan sedikit atau tanpa pelatihan.

Proyek ini juga menerbitkan JSON Schema untuk metadata MicroSim sehingga alat AI dapat menghasilkan
deskriptor yang dapat dicari, dengan registri MicroSim berfaset dalam rencana. Makalah penelitian yang
menjelaskan kerangkanya — *MicroSims: A Framework for AI-Generated, Scalable Educational Simulations with
Universal Embedding and Adaptive Learning Support* — ada di arXiv
([2511.19864](https://arxiv.org/abs/2511.19864)). Contoh simulasinya mencakup Bouncing Ball, Projectile
Motion, String Harmonics, Conway's Game of Life, Euler's Formula, dan bagan imbal hasil pasar saham,
masing-masing berjalan langsung di situsnya.

## Untuk siapa

Dosen dan perancang pembelajaran yang ingin membangun atau memelihara buku teks mata kuliah, terutama di
pendidikan tinggi dan pelatihan profesional, ditambah pengembang fakultas dan siapa pun yang memakai AI
generatif untuk menulis konten pendidikan. Panduan ini cocok bagi pendidik yang nyaman dengan alur kerja
Markdown-dan-Git (atau bersedia mempelajarinya) dan yang ingin AI menangani perpipaan situsnya —
pencarian, navigasi, grafik konsep — sehingga mereka dapat fokus pada pedagoginya.

## Catatan dan peringatan

Ini panduan dan rantai alat praktisi, bukan studi telaah sejawat — panduan ini menyajikan alur kerja dan
alasan pendidikan versinya sendiri (“buku teks cerdas membimbing siswa melewati konsep dalam pencarian
pengetahuan mereka”) alih-alih bukti hasil belajar. Makalah penelitian MicroSim adalah hal yang paling
mendekati dukungan empiris, dan makalah itu diterbitkan sendiri di arXiv. Kedua proyeknya open source
(repo intelligent-textbooks melaporkan lisensi MIT dan 38 bintang; MicroSims melaporkan lisensi Creative
Commons dan 13 bintang) dan aktif dipelihara. Grafik konsep dan struktur yang mendahulukan glosarium
memang berguna untuk penemuan, tetapi panduan ini mengasumsikan alur kerja penulisan yang cukup teknis —
MkDocs, Git, dan perkakas AI generatif — yang bisa menjadi hambatan bagi sebagian dosen. Pada saat
diingesti, registri untuk MicroSims masih hanya dalam rencana, sehingga menemukan simulasi tertentu yang
sudah ada bergantung pada pencarian dan navigasi situsnya sendiri.

## Konsep terkait

- [[curriculum-design]]
- [[learning-design]]
- [[pedagogical-patterns]]
- [[generative-ai]]
- [[simulation]]
- [[knowledge-graph]]
- [[vibe-coding]]
- [[open-source]]
- [[design-thinking]]
- [[educational-development]]
