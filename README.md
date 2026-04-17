# CodingCamp-30Mar26-naufal
# Chart Visualizer 
Tugas Akhir - Coding Camp 5-Day Software Engineering Course

Aplikasi pencatat pengeluaran harian berbasis web yang ringan, responsif, dan mudah digunakan. Dibuat dengan menggunakan Vanilla JavaScript untuk memenuhi persyaratan teknis tugas Coding Camp.

##  Fitur Utama (MVP)
* **Input Transaksi:** Mencatat nama item, jumlah biaya, dan kategori.
* **Daftar Riwayat:** Melihat daftar pengeluaran yang bisa dihapus secara mandiri.
* **Saldo Otomatis:** Total saldo yang terupdate secara real-time.
* **Visualisasi Data:** Pie chart interaktif menggunakan Chart.js untuk melihat distribusi pengeluaran.
* **Penyimpanan Lokal:** Data tersimpan di browser menggunakan Local Storage API (data tidak hilang saat refresh).

##  Tantangan Tambahan (Optional Challenges)
Saya telah mengimplementasikan 3 fitur tambahan:
1.  **Dark/Light Mode Toggle:** Mode tampilan gelap untuk kenyamanan mata.
2.  **Sortir Transaksi:** Fitur mengurutkan riwayat berdasarkan Harga Tertinggi, Terbaru, atau Kategori.
3.  **Responsive Design:** Tampilan yang optimal baik di desktop maupun perangkat mobile.

## Teknologi yang Digunakan
* **HTML5 & CSS3** (Custom Styling dengan CSS Variables)
* **Vanilla JavaScript** (Tanpa framework sesuai TC-1)
* **Chart.js** via CDN untuk visualisasi grafik.
* **Local Storage API** untuk manajemen database client-side.

## Bukti Penggunaan Kiro
![Screenshot Kiro](./docs/KiroChat.png)

##  Struktur Folder
```text
.
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
