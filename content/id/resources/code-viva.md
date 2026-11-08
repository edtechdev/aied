---
title: "Code Viva"
created: "2026-10-24T05:33:18-04:00"
type: resource
summary: "Alat peramban gratis yang menjalankan versi tertulis dan berbatas waktu dari ujian lisan kode untuk setiap siswa di mata kuliah pemrograman, mengusulkan skor dengan bukti kutipan untuk disetujui pengajar."
url: https://code-viva.pisan.me/
author: "Code Viva"
author_url: https://code-viva.pisan.me/
resource_type: [software]
access: [free]
last_verified: "2026-11-04"
foundations: [academic-integrity]
assessment: [oral-assessment, process-oriented-assessment]
discipline: [cs education]
audience: [instructors]
level: [higher ed]
translation_of: resources/code-viva
source_updated: "2026-11-04T17:55:00-05:00"
translation_note: "Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli."
contributors: [editor]
ai_assist:
  - model: deepseek/deepseek-v4.1-flash-1017
    role: translation
    date: "2026-11-03"
    agent: hermes-agent
---

*Terjemahan mesin otomatis halaman berbahasa Inggris ini, yang belum ditinjau oleh penutur asli.*

Code Viva menjalankan versi tertulis dan berbatas waktu dari sebuah [[oral-assessment|viva]] untuk
setiap siswa di mata kuliah pemrograman, sekitar lima belas sampai dua puluh menit per siswa, tanpa
pengajar di ruangan. Alat ini membaca kode dan riwayat commit yang dikumpulkan siswa, menulis empat
sampai enam pertanyaan tentang fungsi, nama dan commit siswa itu sendiri, dan memberi setiap siswa
tautan pribadi untuk menjawabnya.

## Apa yang dapat Anda lakukan dengannya

Pengumpulan datang dari ekspor Gradescope, zip unduhan Canvas, zip satu folder per siswa, atau GitHub
Classroom dengan token baca. Pengajar menetapkan durasi sesi, jumlah pertanyaan dan tenggat, menandai
waktu tambahan pada 1,25x sampai 3x, dan membaca, menyunting atau mengganti pertanyaan yang dihasilkan
sebelum mengirim tautan. Pertanyaan mencakup kasus dasar rekursi, penjaga tepi, pilihan struktur data,
nama variabel yang tidak jelas, skala dan penelusuran, kalimat dari spesifikasi tugas, serta pola
commit seperti satu commit besar atau commit tengah malam. Jawaban kembali sebagai kode respons, dan
layar tinjauan menampilkan setiap transkrip di samping usulan skor 0 sampai 3 beserta kalimat yang
menjadi dasarnya, plus antrean penanda yang diurutkan berdasarkan seberapa besar percakapan diperlukan.
Hasil diekspor ke CSV, dan sebelas mata kuliah demo memungkinkan pembaca mencoba seluruh alurnya pada
data rekaan.

## Untuk siapa

Pengajar mata kuliah pemrograman yang menginginkan bukti bahwa siswa dapat menjelaskan kodenya sendiri,
dan yang lebih suka berbicara dengan daftar siswa yang pendek daripada dengan semuanya; pertanyaan
commit menjadikannya bentuk [[process-oriented-assessment|asesmen berorientasi proses]].

## Catatan dan peringatan

Semuanya berjalan di peramban: mata kuliahnya berada di penyimpanan lokal dengan ekspor JSON,
pertanyaan berpindah di bagian tautan yang tidak dikirim peramban ke server, dan jawaban kembali hanya
sebagai kode yang dipilih siswa untuk dikirim, sehingga tidak ada data siswa yang mencapai pihak
ketiga. Generator pertanyaannya berbasis aturan, bukan digerakkan model. Menurut pengakuan alatnya
sendiri, pembaca kodenya bersifat heuristik, sehingga pemformatan atau makro yang tidak biasa dapat
menyembunyikan sebuah fungsi, dan skor dapat memberi ganjaran atas pengetahuan kosakata alih-alih
pemahaman kode, itulah sebabnya skor bersifat usulan yang disetujui pengajar dan mengapa alat ini
menyarankan taruhannya dijaga tetap rendah. Tidak ada lisensi dan tidak ada repositori sumber yang
diterbitkan, dan karena tautannya membawa pertanyaan, tautan itu mencapai beberapa kilobyte, cukup
panjang untuk terpotong di kotak pesan sistem manajemen pembelajaran.

## Konsep terkait

[[oral-assessment]], [[process-oriented-assessment]], [[academic-integrity]], [[cs-education]]
