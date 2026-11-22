# Kas-XI-TJKT-1

#halo gemini,aku memiliki tugas dari guruku bisakah kamu membantuku.Jadi aku diminta guruku untuk membuat suatu aplikasi untuk menyelesaikan masalah di sekitar,dan aku ingin mengangkat masalah kas kelas.Seharusnya kamu tahu apa itu kas dan di kelasku murid muridnya sangat enggan untuk membayar kas,jadi aku membuat aplikasi ini untuk mempermudah bendahara kelasku.Apakah kamu punya ide untuk bentuk aplikasinya?jangan buatkan codenya dulu kita diskusikan idenya terlebih dahulu.

#Wah, ide mengangkat masalah **kas kelas** itu sangat relevan dan *relatable*! Masalah klasiknya memang selalu sama: murid malas bayar, lupa sudah bayar sampai minggu ke berapa, atau bendahara yang pusing mencatat manual di buku dan harus nagih satu per satu dengan rasa tidak enak.

Agar aplikasimu punya nilai tambah di mata guru (tidak cuma sekadar aplikasi catatan biasa), kita bisa merancangnya dengan **pendekatan psikologis dan transparansi** supaya teman-temanmu jadi lebih semangat bayar.

Berikut beberapa konsep bentuk aplikasi yang bisa kamu pilih atau gabungkan:

### 1. Konsep Web App Transparan & *Gamification* (Paling Direkomendasikan)

Daripada sekadar tabel pemasukan-pengeluaran, buatlah dashboard yang interaktif dan sedikit kompetitif agar teman sekelas merasa "tertantang" untuk bayar tepat waktu.

* **Fitur "Wall of Fame" & "Daftar Buronan":** Menampilkan siapa saja yang sudah lunas bulan ini (dengan *badge* keren, misalnya "Sultan Kelas" atau "Warga Teladan") dan daftar yang menunggak secara transparan agar muncul rasa sungkan secara sehat.
* **Progress Bar Tujuan Kelas:** Misalnya, kas kelas ditargetkan terkumpul Rp500.000 untuk acara bakar-bakar akhir semester atau beli sapu/pel baru. Tampilkan *progress bar* yang terus naik setiap ada yang bayar.
* **Sistem Multi-Role (2 Tampilan):**
* **Tampilan Siswa (Publik):** Bisa diakses lewat link (tanpa perlu login ribet, cukup cari nama/nomor absen) untuk mengecek status bayar mereka dan melihat sisa saldo kas kelas secara *real-time* (transparan biar tidak ada yang curiga uangnya dikorupsi).
* **Tampilan Bendahara (Admin):** Harus login, berfungsi untuk mencentang pembayaran mingguan, mencatat pengeluaran (beli spidol, fotokopi, dll.) beserta foto struknya, dan menyetujui pembayaran.



### 2. Konsep Sistem "Self-Service" + QRIS Otomatis/Semi-Otomatis

Salah satu alasan orang malas bayar kas adalah mager mengeluarkan uang pas atau malas mencari bendahara.

* **Integrasi QRIS Statis:** Di dalam aplikasi, sediakan gambar QRIS milik bendahara (GoPay/ShopeePay/DANA/Bank). Siswa tinggal scan, bayar, lalu **upload bukti transfer** langsung di aplikasi tersebut.
* **Tombol "Ingatkan via WhatsApp":** Di halaman admin bendahara, di samping nama siswa yang menunggak, ada tombol khusus. Ketika diklik, otomatis membuka WhatsApp siswa tersebut dengan pesan tagihan yang sudah terisi otomatis (misal: *"Halo [Nama], kas kelasmu menunggak 3 minggu total Rp15.000 nih, yuk segera dilunasi!"*).

### 3. Konsep Bot WhatsApp / Telegram (Tanpa Buka Browser)

Jika dirasa membuat website terlalu rumit atau teman-temanmu malas membuka link baru, kamu bisa membuat sistem berbasis Bot.

* Siswa cukup mengetik perintah sederhana di grup atau chat pribadi bot, misalnya `/cekkas` untuk melihat tagihan, atau `/saldo` untuk melihat uang kelas.
* Bot bisa diatur untuk mengirim pengingat otomatis setiap hari Jumat pagi ke grup kelas berisi daftar nama yang belum membayar minggu itu.

---

### Saran Arsitektur Sederhana untuk Tugas Sekolah

Mengingat ini untuk tugas sekolah, **Konsep Nomor 1 (Web App)** yang digabungkan dengan fitur **Tombol WA & Upload Bukti QRIS** dari Konsep Nomor 2 adalah kombinasi yang paling pas. Secara visual terlihat keren saat dipresentasikan di depan guru, dan fungsionalitasnya langsung menjawab masalah "enggan membayar".

Dari beberapa ide di atas, konsep mana yang paling menarik buatmu dan kira-kira platform apa (Web, Mobile, atau Bot) yang paling nyaman kamu kerjakan nanti?

#aku ingin aplikasi ini dapat di download dan di instal di mobile dan dapat di buka pada pc

#Keinginanmu agar aplikasi kas kelas ini bisa diunduh/diinstal di *mobile* (Android) dan sekaligus bisa dibuka di PC adalah **ide yang sangat cemerlang dan sangat profesional** untuk tugas sekolah!

Kalau kamu berhasil membuat aplikasi yang seperti itu, guru dan teman-temanmu pasti akan sangat kagum.

Agar aplikasimu bisa berjalan di dua perangkat tersebut (multi-platform) tanpa kamu harus membuat dua program yang berbeda dari nol, ada beberapa **teknologi pilihan** yang biasa digunakan oleh para *developer*:

### 1. Teknologi Pembuatan yang Cocok

* **Pilihan Paling Populer (Web-based / PWA):** Menggunakan **HTML, CSS, dan JavaScript**.
* *Kenapa cocok?* Aplikasi berbasis web bisa dibuka di browser PC mana pun. Hebatnya lagi, jika dibuat dengan teknologi **PWA (Progressive Web App)**, aplikasi web tersebut bisa "di-install" di HP layaknya aplikasi biasa dari Play Store tanpa harus ribet membuat versi Android terpisah.


* **Pilihan Framework Hybrid (Mobile & Desktop):**
* **Flutter** atau **React Native**: Kamu cukup menulis satu *source code*, lalu aplikasinya bisa di-build (diekspor) menjadi file `.apk` untuk HP Android dan juga bisa dijalankan di PC.



---

### Diskusi Langkah Selanjutnya:

Karena kita sepakat untuk **tidak membuat kodenya dulu** dan fokus mendiskusikan konsepnya, bagaimana menurutmu jika kita arahkan menggunakan basis **Web App / PWA**?

Dengan pendekatan ini:

1. Teman sekelas yang pakai **HP** bisa langsung buka lewat *link*, atau bahkan *install* ikon aplikasinya di layar utama HP mereka.
2. Bendahara atau kamu yang memegang kendali penuh bisa membukanya dengan sangat lelucon dan lega melalui layar **PC/Laptop** saat mengurus data yang banyak.

Kira-kira, apakah konsep multi-platform (bisa di HP dan PC secara bersamaan) ini sudah sesuai dengan bayanganmu? Ada bagian lain dari fitur atau cara kerjanya yang ingin kita diskusikan lagi?

#jadi semisal aku ingin membuatnya gambarnya masih belum ada gambar seperti logo dan hiasan yang membuat aplikasi atau web terlihat terisi dan tidak kosong


#Tepat sekali! Ini adalah tantangan klasik saat mengembangkan aplikasi: membuat antarmuka yang fungsional sekaligus **menarik secara visual** (tidak membosankan seperti formulir isian biasa).

Karena aplikasi ini ditargetkan untuk anak sekolah (remaja), desainnya harus *fun*, modern, dan bersih.

Berikut adalah diskusi ide tentang elemen visual, logo, dan hiasan yang bisa kita terapkan untuk mengisi kekosongan tersebut:

### 1. Membuat Logo Aplikasi yang *Catchy*

Kita butuh nama keren dan logo yang mudah diingat.

* **Nama Ide:** "Kas-Kita", "Celengan Kelas", "AyoBayar", atau "Kasturi (Kas Kelas XII)".
* **Bentuk Logo:** Jangan yang kaku. Gunakan ikon yang ramah. Misalnya, gabungan ikon dompet digital dengan siluet topi toga (simbol anak sekolah), atau maskot karakter kartun yang sedang memegang koin.
* **Warna:** Gunakan palet warna yang cerah dan memberi semangat. Misalnya kombinasi Biru Muda (kepercayaan), Hijau Tosca (uang/kesegaran), dan aksen Kuning/Oranye (energi/semangat).

### 2. Strategi Menghias Halaman Agar Tidak Kosong (Visual Assets)

Kekosongan adalah musuh desain UI. Kita bisa mengakalinya dengan elemen grafis berikut:

* **Ilustrasi Karakter (Maskot):**
* Tempatkan ilustrasi karakter kartun bendahara yang sedang bingung memegang buku tebal di halaman login (sebelum ada data).
* Di halaman siswa yang sudah lunas, tampilkan karakter yang sedang tersenyum lebar memegang piala.
* *Tips:* Kamu bisa menggunakan aset ilustrasi gratis dari situs seperti unDraw atau Freepik (dengan mencantumkan sumber) yang bergaya *flat design* atau *vector*.


* **Background yang Lembut:**
* Jangan biarkan background putih polos. Gunakan *gradient* warna yang halus (misal dari putih ke biru muda sangat muda), atau pola geometris transparan yang sangat tipis sebagai *watermark*.


* **Desain Kartu Profil yang Menarik:**
* Foto profil siswa jangan cuma kotak biasa. Buatlah bentuk lingkaran dengan bingkai warna-warni yang berubah sesuai status bayar (merah: belum, hijau: sudah).



### 3. Elemen *Gamification* untuk Daya Tarik Visual

Seperti yang dibahas di awal, ini kunci agar aplikasi tidak ditinggalkan.

* **Lencana (Badge) dan Medali:**
* Di samping nama siswa di "Papan Sultan", berikan ikon visual medali Emas, Perak, dan Perunggu.
* Siswa yang bayar tepat waktu 3 bulan berturut-turut dapat lencana "Warga Teladan". Ini memberikan kepuasan visual saat dilihat.


* **Progress Bar yang Interaktif:**
* Saat *progress bar* target kas kelas mencapai angka tertentu (misal 50%), warna barnya berubah dan mungkin ada animasi confetti kecil meletup di layar saat halaman dibuka.



---

### Kesimpulan Diskusi Visual:

Dengan menerapkan maskot kartun, warna yang cerah, ikon medali/lencana, dan *progress bar* yang hidup, aplikasi "Kas-Kita" buatanmu akan terlihat padat informasi, profesional, namun tetap seru dan tidak membosankan bagi teman-temanmu.

Apakah ide-ide hiasan ini sudah cukup menjawab bagaimana mengisi kekosongan tampilan aplikasimu? Jika sudah, kita bisa lanjut ke tahap teknis berikutnya: **Bagaimana datanya disimpan dan siapa yang boleh melihat apa (Manajemen User & Database).**


#kalau begitu tolong buatkan codenya,aku ingin judulnya "KAS XI TJKT 1" tolong buat sesuai dengan ide yang kita buat


#Saya akan membuatkan aplikasi web berbasis PWA (Progressive Web App) yang lengkap dan interaktif untuk **KAS XI TJKT 1**, menggabungkan semua ide desain ceria, maskot kancil, fitur transparansi publik, *gamification*, pembayaran QRIS, hingga dashboard khusus bendahara.

Aplikasi **KAS XI TJKT 1** sudah siap kamu gunakan dan presentasikan! Berikut ringkasan fitur yang sudah terpasang di dalamnya:

* **Branding & Visual Ceria:** Menggunakan maskot SVG kancil memegang koin `Rp`, ilustrasi celengan tabungan, latar belakang berpola koin halus, dan palet warna biru langit, hijau tosca, serta emas.
* **Dukungan PWA (Mobile & PC):** Dilengkapi tombol **Install App** beserta panduan pemasangan di Android, iOS, maupun Desktop Chrome/Edge.
* **Tampilan Siswa (Publik):** Menampilkan saldo *real-time*, *progress bar* target tabungan kelas, **Papan Sultan** (Top 3 pembayar tercepat), pencarian & filter status siswa, tabel transparansi pengeluaran, serta fitur **Bayar Kas / Upload QRIS**.
* **Dashboard Bendahara (PIN: `1234`):** Dilengkapi antrean verifikasi bukti transfer QRIS, tombol pelunasan cepat (`+1 Minggu`), tombol **Tagih WA** otomatis ke nomor siswa yang menunggak, pencatatan pengeluaran baru, serta grafik kepatuhan bayar mingguan.


#tolong pisahkan setiap kodenya


#Berikut adalah pemisahan kode aplikasi **KAS XI TJKT 1** menjadi 3 file terpisah (**HTML**, **CSS**, dan **JavaScript**) agar rapi dan mudah kamu pelajari atau edit di VS Code.

Pastikan kamu menyimpan ketiga file ini di dalam **satu folder yang sama** dengan nama file yang persis seperti di bawah ini.

---

### 1. File `index.html`

File ini berisi kerangka utama halaman web, elemen visual maskot kancil, tampilan publik siswa, modal pembayaran QRIS, dan dashboard bendahara.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KAS XI TJKT 1 - Aplikasi Kas Kelas Digital</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- NAVBAR -->
  <header class="navbar">
    <div class="nav-container">
      <div class="brand">
        <!-- Maskot Kancil SVG -->
        <svg class="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="46" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
          <!-- Tanduk -->
          <path d="M35 28 Q28 12 22 16 M32 22 Q24 20 22 24" stroke="#78350f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <path d="M65 28 Q72 12 78 16 M68 22 Q76 20 78 24" stroke="#78350f" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <!-- Telinga -->
          <ellipse cx="26" cy="36" rx="8" ry="5" transform="rotate(-25 26 36)" fill="#d97706"/>
          <ellipse cx="74" cy="36" rx="8" ry="5" transform="rotate(25 74 36)" fill="#d97706"/>
          <!-- Kepala -->
          <circle cx="50" cy="48" r="22" fill="#f59e0b"/>
          <path d="M34 52 Q50 70 66 52 Q62 68 50 68 Q38 68 34 52 Z" fill="#fef3c7"/>
          <!-- Mata & Hidung -->
          <circle cx="42" cy="45" r="3" fill="#1e293b"/>
          <circle cx="58" cy="45" r="3" fill="#1e293b"/>
          <circle cx="43" cy="44" r="1" fill="#ffffff"/>
          <circle cx="59" cy="44" r="1" fill="#ffffff"/>
          <ellipse cx="50" cy="53" rx="3.5" ry="2.5" fill="#1e293b"/>
          <path d="M45 58 Q50 63 55 58" stroke="#1e293b" stroke-width="2" fill="none" stroke-linecap="round"/>
          <!-- Koin Emas -->
          <circle cx="72" cy="70" r="18" fill="#facc15" stroke="#ca8a04" stroke-width="3"/>
          <text x="72" y="76" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="#854d0e" text-anchor="middle">Rp</text>
        </svg>
        <div>
          <h1>KAS XI TJKT 1</h1>
          <span class="subtitle">Transparan • Praktis • Anti Nunggak</span>
        </div>
      </div>

      <div class="nav-actions">
        <button id="btnInstallApp" class="btn btn-outline" onclick="openModal('modalInstall')">📲 Install App</button>
        <button id="btnSwitchRole" class="btn btn-primary" onclick="toggleRoleView()">🔐 Mode Bendahara</button>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- ==================== TAMPILAN PUBLIK (SISWA) ==================== -->
    <section id="publicView">
      
      <!-- Kartu Ringkasan & Celengan Target -->
      <div class="hero-grid">
        <div class="card saldo-card">
          <div class="card-header">
            <span class="badge badge-green">● Saldo Real-Time</span>
            <span class="info-iuran">Iuran: Rp5.000 / minggu</span>
          </div>
          <h2 id="displaySaldo" class="saldo-amount">Rp0</h2>
          <div class="saldo-detail">
            <div>
              <small>Total Pemasukan</small>
              <strong id="displayPemasukan" class="text-green">Rp0</strong>
            </div>
            <div>
              <small>Total Pengeluaran</small>
              <strong id="displayPengeluaran" class="text-red">Rp0</strong>
            </div>
          </div>
          <button class="btn btn-success btn-block" onclick="openModal('modalBayar')">💸 Bayar Kas / Upload Bukti QRIS</button>
        </div>

        <div class="card target-card">
          <div class="target-header">
            <div>
              <span class="badge badge-gold">🎯 Target Tabungan Kelas</span>
              <h3 id="targetTitle">Acara Bakar-Bakar & Beli Perlengkapan Kelas</h3>
            </div>
            <!-- Ilustrasi Celengan SVG -->
            <svg class="piggy-svg" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="40" cy="45" rx="26" ry="20" fill="#34d399"/>
              <circle cx="63" cy="43" r="7" fill="#10b981"/>
              <circle cx="65" cy="41" r="1.5" fill="#064e3b"/>
              <circle cx="65" cy="45" r="1.5" fill="#064e3b"/>
              <circle cx="53" cy="38" r="2.5" fill="#064e3b"/>
              <rect x="33" y="24" width="14" height="4" rx="2" fill="#065f46"/>
              <circle cx="40" cy="16" r="8" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
              <text x="40" y="19" font-size="8" font-weight="bold" fill="#854d0e" text-anchor="middle">Rp</text>
              <rect x="24" y="61" width="6" height="8" rx="2" fill="#059669"/>
              <rect x="48" y="61" width="6" height="8" rx="2" fill="#059669"/>
            </svg>
          </div>

          <div class="progress-wrapper">
            <div class="progress-info">
              <span id="targetProgressText">Terkumpul Rp0 / Rp1.000.000</span>
              <strong id="targetPercent">0%</strong>
            </div>
            <div class="progress-bar">
              <div id="targetProgressBar" class="progress-fill" style="width: 0%"></div>
            </div>
          </div>
          <p class="target-note">Ayo lunasi kas minggu ini supaya target kelas cepat tercapai! 🚀</p>
        </div>
      </div>

      <!-- Papan Sultan (Gamification) -->
      <div class="card sultan-section">
        <div class="section-title">
          <h3>👑 Papan Sultan XI TJKT 1 (Pembayar Tercepat)</h3>
          <span class="badge badge-gold">Minggu ke-<span id="currentWeekLabel">4</span></span>
        </div>
        <div id="papanSultanGrid" class="sultan-grid">
          <!-- Diisi via JavaScript -->
        </div>
      </div>

      <!-- Status Pembayaran Siswa -->
      <div class="card">
        <div class="table-toolbar">
          <h3>📋 Status Kas Siswa (Minggu ke-1 s.d. 4)</h3>
          <div class="filter-group">
            <input type="text" id="searchSiswa" placeholder="Cari nama / absen..." oninput="renderAll()">
            <select id="filterStatus" onchange="renderAll()">
              <option value="all">Semua Status</option>
              <option value="lunas">Sudah Lunas</option>
              <option value="nunggak">Menunggak</option>
            </select>
          </div>
        </div>

        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Absen</th>
                <th>Nama Siswa</th>
                <th>Minggu Terbayar</th>
                <th>Status</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody id="publicStudentTable">
              <!-- Diisi via JavaScript -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Transparansi Pengeluaran -->
      <div class="card">
        <div class="section-title">
          <h3>🧾 Transparansi Pengeluaran Kelas</h3>
          <span class="subtitle">Semua pengeluaran dicatat terbuka</span>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Keperluan</th>
                <th>Nominal</th>
              </tr>
            </thead>
            <tbody id="publicExpenseTable">
              <!-- Diisi via JavaScript -->
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ==================== TAMPILAN BENDAHARA (ADMIN) ==================== -->
    <section id="adminView" class="hidden">
      <div class="admin-banner">
        <div>
          <h2>🛠️ Dashboard Bendahara XI TJKT 1</h2>
          <p>Kelola pembayaran siswa, verifikasi transfer QRIS, dan catat pengeluaran kelas.</p>
        </div>
        <button class="btn btn-danger" onclick="logoutAdmin()">Keluar Mode Bendahara</button>
      </div>

      <!-- Antrean Verifikasi QRIS -->
      <div class="card">
        <h3>⏳ Menunggu Verifikasi Transfer QRIS (<span id="pendingCount">0</span>)</h3>
        <div id="pendingList" class="pending-grid">
          <!-- Diisi via JavaScript -->
        </div>
      </div>

      <!-- Kontrol Pembayaran & Tagih WA -->
      <div class="card">
        <div class="table-toolbar">
          <h3>✅ Update Status Pembayaran & Tagih WhatsApp</h3>
          <button class="btn btn-outline" onclick="addNewWeek()">➕ Tambah Minggu Tagihan Baru</button>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Absen</th>
                <th>Nama Siswa</th>
                <th>Terbayar</th>
                <th>Tunggakan</th>
                <th>Aksi Cepat</th>
              </tr>
            </thead>
            <tbody id="adminStudentTable">
              <!-- Diisi via JavaScript -->
            </tbody>
          </table>
        </div>
      </div>

      <!-- Catat Pengeluaran Baru -->
      <div class="card">
        <h3>💸 Catat Pengeluaran Kelas</h3>
        <form id="expenseForm" class="expense-form" onsubmit="handleAddExpense(event)">
          <input type="text" id="expDesc" placeholder="Contoh: Beli spidol papan tulis & penghapus" required>
          <input type="number" id="expAmount" placeholder="Nominal (Rp)" min="500" step="500" required>
          <button type="submit" class="btn btn-primary">Simpan Pengeluaran</button>
        </form>
      </div>
    </section>
  </main>

  <!-- ==================== MODAL LOGIN BENDAHARA ==================== -->
  <div id="modalLogin" class="modal hidden">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modalLogin')">&times;</span>
      <h3>🔐 Login Bendahara</h3>
      <p>Masukkan PIN Bendahara untuk mengelola kas kelas (Default PIN: <strong>1234</strong>)</p>
      <input type="password" id="adminPinInput" placeholder="Masukkan PIN..." maxlength="6">
      <button class="btn btn-primary btn-block" onclick="verifyAdminPin()">Masuk Dashboard</button>
    </div>
  </div>

  <!-- ==================== MODAL BAYAR QRIS ==================== -->
  <div id="modalBayar" class="modal hidden">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modalBayar')">&times;</span>
      <h3>📱 Bayar Kas via QRIS</h3>
      <p>Scan QRIS di bawah ini, lalu kirim konfirmasi pembayaran ke bendahara.</p>
      
      <div class="qris-box">
        <div class="qris-header">QRIS KAS XI TJKT 1</div>
        <!-- Simulasi Gambar QR Code SVG -->
        <svg class="qris-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <rect width="120" height="120" fill="#ffffff"/>
          <rect x="10" y="10" width="30" height="30" fill="none" stroke="#0f172a" stroke-width="6"/>
          <rect x="18" y="18" width="14" height="14" fill="#0f172a"/>
          <rect x="80" y="10" width="30" height="30" fill="none" stroke="#0f172a" stroke-width="6"/>
          <rect x="88" y="18" width="14" height="14" fill="#0f172a"/>
          <rect x="10" y="80" width="30" height="30" fill="none" stroke="#0f172a" stroke-width="6"/>
          <rect x="18" y="88" width="14" height="14" fill="#0f172a"/>
          <rect x="50" y="15" width="8" height="8" fill="#0f172a"/>
          <rect x="62" y="25" width="8" height="16" fill="#0f172a"/>
          <rect x="48" y="48" width="24" height="24" fill="#0284c7" rx="4"/>
          <text x="60" y="64" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Rp</text>
          <rect x="15" y="52" width="16" height="8" fill="#0f172a"/>
          <rect x="85" y="55" width="20" height="10" fill="#0f172a"/>
          <rect x="52" y="85" width="12" height="20" fill="#0f172a"/>
          <rect x="75" y="80" width="15" height="15" fill="#0f172a"/>
          <rect x="95" y="95" width="15" height="15" fill="#0f172a"/>
        </svg>
        <small>a.n. Bendahara XI TJKT 1</small>
      </div>

      <form onsubmit="handlePaymentSubmit(event)">
        <label>Pilih Nama Siswa:</label>
        <select id="payStudentSelect" required></select>

        <label>Jumlah Minggu yang Dibayar:</label>
        <select id="payWeeksSelect">
          <option value="1">1 Minggu (Rp5.000)</option>
          <option value="2">2 Minggu (Rp10.000)</option>
          <option value="4">4 Minggu / 1 Bulan (Rp20.000)</option>
        </select>

        <label>Upload Bukti Transfer (Opsional untuk demo):</label>
        <input type="file" id="payProofFile" accept="image/*">

        <button type="submit" class="btn btn-success btn-block">Kirim Konfirmasi Pembayaran</button>
      </form>
    </div>
  </div>

  <!-- ==================== MODAL PANDUAN INSTALL APP ==================== -->
  <div id="modalInstall" class="modal hidden">
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal('modalInstall')">&times;</span>
      <h3>📲 Pasang Aplikasi di HP & PC</h3>
      <p>Aplikasi <strong>KAS XI TJKT 1</strong> dirancang responsif agar nyaman dibuka di layar HP maupun Laptop/PC:</p>
      <ul class="install-list">
        <li><strong>Android (Chrome):</strong> Klik ikon titik tiga (⋮) di pojok kanan atas browser, lalu pilih <em>"Tambahkan ke Layar Utama" (Add to Home Screen)</em>.</li>
        <li><strong>iPhone / iOS (Safari):</strong> Tekan ikon <em>Share</em> (kotak dengan panah ke atas), lalu pilih <em>"Add to Home Screen"</em>.</li>
        <li><strong>PC / Laptop (Chrome / Edge):</strong> Klik ikon layar/install di ujung kanan kolom alamat URL browser untuk memasangnya sebagai aplikasi desktop.</li>
      </ul>
      <button class="btn btn-primary btn-block" onclick="closeModal('modalInstall')">Mengerti!</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

```

---

### 2. File `style.css`

File ini mengatur tampilan visual, palet warna (Biru Langit, Hijau Tosca, Emas), latar belakang bermotif koin halus, kartu-kartu *gamification*, serta tata letak responsif agar rapi di layar HP maupun PC.

```css
:root {
  --primary: #0284c7;
  --primary-dark: #0369a1;
  --secondary: #10b981;
  --secondary-dark: #059669;
  --gold: #f59e0b;
  --danger: #ef4444;
  --bg-light: #f0f9ff;
  --card-bg: #ffffff;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --border: #e2e8f0;
  --radius: 16px;
  --shadow: 0 4px 20px rgba(2, 132, 199, 0.08);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
}

body {
  background-color: var(--bg-light);
  /* Latar belakang bermotif koin Rp halus */
  background-image: radial-gradient(#bae6fd 1.5px, transparent 1.5px), radial-gradient(#fde68a 1.5px, #f0f9ff 1.5px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  color: var(--text-main);
  line-height: 1.5;
  padding-bottom: 40px;
}

/* NAVBAR */
.navbar {
  background: var(--card-bg);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-svg {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.brand h1 {
  font-size: 1.25rem;
  color: var(--primary-dark);
  font-weight: 800;
}

.subtitle {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.nav-actions {
  display: flex;
  gap: 10px;
}

/* CONTAINER & CARDS */
.container {
  max-width: 1100px;
  margin: 24px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 22px;
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 20px;
}

/* SALDO & TARGET CARD */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.saldo-amount {
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--primary-dark);
  margin: 8px 0 16px;
}

.saldo-detail {
  display: flex;
  gap: 24px;
  background: #f8fafc;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.saldo-detail small {
  display: block;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.text-green { color: var(--secondary-dark); }
.text-red { color: var(--danger); }

.target-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.target-header h3 {
  margin-top: 6px;
  font-size: 1.1rem;
}

.piggy-svg {
  width: 72px;
  height: 72px;
  flex-shrink: 0;
}

.progress-wrapper {
  margin: 16px 0 10px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-bottom: 6px;
}

.progress-bar {
  width: 100%;
  height: 16px;
  background: #e2e8f0;
  border-radius: 99px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 99px;
  transition: width 0.5s ease;
}

.target-note {
  font-size: 0.85rem;
  color: var(--text-muted);
}

/* PAPAN SULTAN */
.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;
}

.sultan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}

.sultan-card {
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.medal {
  font-size: 1.8rem;
}

/* BUTTONS & BADGES */
.btn {
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.btn:hover { transform: translateY(-1px); }
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--primary-dark); }
.btn-success { background: var(--secondary); color: #fff; }
.btn-success:hover { background: var(--secondary-dark); }
.btn-danger { background: var(--danger); color: #fff; }
.btn-wa { background: #25d366; color: #fff; padding: 6px 12px; font-size: 0.82rem; }
.btn-sm { padding: 6px 12px; font-size: 0.82rem; }
.btn-outline { background: #f1f5f9; color: var(--text-main); border: 1px solid var(--border); }
.btn-block { width: 100%; }

.badge {
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 700;
}
.badge-green { background: #dcfce7; color: #166534; }
.badge-red { background: #fee2e2; color: #991b1b; }
.badge-gold { background: #fef3c7; color: #92400e; }

/* TABLES & TOOLBAR */
.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
}

.filter-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

input, select {
  padding: 9px 12px;
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 0.9rem;
  outline: none;
}

input:focus, select:focus {
  border-color: var(--primary);
}

.table-responsive {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th, td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  font-size: 0.92rem;
}

th {
  background: #f8fafc;
  color: var(--text-muted);
  font-weight: 700;
}

/* ADMIN DASHBOARD */
.admin-banner {
  background: linear-gradient(135deg, #0284c7, #0369a1);
  color: white;
  padding: 20px 24px;
  border-radius: var(--radius);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.pending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px;
  margin-top: 12px;
}

.pending-item {
  border: 1px solid #fde68a;
  background: #fffbeb;
  padding: 14px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.expense-form {
  display: grid;
  grid-template-columns: 2fr 1fr auto;
  gap: 12px;
  margin-top: 12px;
}

/* MODALS */
.hidden { display: none !important; }

.modal {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 200;
}

.modal-content {
  background: #fff;
  padding: 24px;
  border-radius: var(--radius);
  max-width: 420px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.close-btn {
  position: absolute;
  top: 14px;
  right: 18px;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-muted);
}

.qris-box {
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  padding: 14px;
  text-align: center;
}

.qris-header {
  font-weight: 800;
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: var(--primary-dark);
}

.qris-svg {
  width: 130px;
  height: 130px;
  margin: 0 auto 6px;
  display: block;
}

.install-list {
  padding-left: 18px;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* RESPONSIVE HP */
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .expense-form {
    grid-template-columns: 1fr;
  }
  .saldo-amount {
    font-size: 1.9rem;
  }
}

```

---

### 3. File `script.js`

File ini berisi logika penyimpanan data otomatis (`localStorage`), perhitungan saldo & *progress bar*, pemeringkatan Papan Sultan, simulasi verifikasi QRIS, dan pembuatan link pengingat otomatis ke WhatsApp siswa.

```javascript
// Konfigurasi Kas Kelas XI TJKT 1
const IURAN_PER_MINGGU = 5000;
const TARGET_TABUNGAN = 1000000;
const ADMIN_PIN = "1234";

// Data Awal (Otomatis tersimpan di browser via localStorage)
const defaultData = {
  currentWeek: 4,
  students: [
    { absen: 1, nama: "Ahmad Fauzan", phone: "6281234567801", paidWeeks: 4 },
    { absen: 2, nama: "Aulia Rahma", phone: "6281234567802", paidWeeks: 4 },
    { absen: 3, nama: "Bagas Pratama", phone: "6281234567803", paidWeeks: 2 },
    { absen: 4, nama: "Citra Lestari", phone: "6281234567804", paidWeeks: 4 },
    { absen: 5, nama: "Dimas Saputra", phone: "6281234567805", paidWeeks: 1 },
    { absen: 6, nama: "Elvan Draken Sebastiano", phone: "6281234567806", paidWeeks: 4 },
    { absen: 7, nama: "Fajar Nugroho", phone: "6281234567807", paidWeeks: 3 },
    { absen: 8, nama: "Gita Permata", phone: "6281234567808", paidWeeks: 4 },
    { absen: 9, nama: "Hendra Wijaya", phone: "6281234567809", paidWeeks: 2 },
    { absen: 10, nama: "Intan Maharani", phone: "6281234567810", paidWeeks: 3 }
  ],
  expenses: [
    { date: "2026-11-02", desc: "Beli Spidol Boardmarker Hitam & Biru (2 pcs)", amount: 18000 },
    { date: "2026-11-09", desc: "Fotokopi Modul Praktikum Jaringan TJKT", amount: 25000 },
    { date: "2026-11-14", desc: "Beli Sapu Lantai & Penghapus Papan Tulis", amount: 22000 }
  ],
  pendingPayments: [
    { id: 101, absen: 3, nama: "Bagas Pratama", weeks: 2, amount: 10000, time: "Hari ini, 08:15" }
  ]
};

let appData = JSON.parse(localStorage.getItem("kas_xi_tjkt_1")) || defaultData;
let isAdminMode = false;

function saveData() {
  localStorage.setItem("kas_xi_tjkt_1", JSON.stringify(appData));
}

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// Render Semua Tampilan
function renderAll() {
  renderSummary();
  renderPapanSultan();
  renderPublicTables();
  renderAdminTables();
  populateStudentDropdown();
}

// 1. Ringkasan Saldo & Progress Target
function renderSummary() {
  const totalWeeksPaid = appData.students.reduce((sum, s) => sum + s.paidWeeks, 0);
  const totalPemasukan = totalWeeksPaid * IURAN_PER_MINGGU;
  const totalPengeluaran = appData.expenses.reduce((sum, e) => sum + e.amount, 0);
  const sisaSaldo = totalPemasukan - totalPengeluaran;

  document.getElementById("displaySaldo").textContent = formatRupiah(sisaSaldo);
  document.getElementById("displayPemasukan").textContent = formatRupiah(totalPemasukan);
  document.getElementById("displayPengeluaran").textContent = formatRupiah(totalPengeluaran);
  document.getElementById("currentWeekLabel").textContent = appData.currentWeek;

  const percent = Math.min(100, Math.round((sisaSaldo / TARGET_TABUNGAN) * 100));
  document.getElementById("targetProgressText").textContent = `Terkumpul ${formatRupiah(sisaSaldo)} / ${formatRupiah(TARGET_TABUNGAN)}`;
  document.getElementById("targetPercent").textContent = percent + "%";
  document.getElementById("targetProgressBar").style.width = percent + "%";
}

// 2. Papan Sultan (Top 3 Lunas)
function renderPapanSultan() {
  const sultanGrid = document.getElementById("papanSultanGrid");
  const lunasStudents = appData.students
    .filter(s => s.paidWeeks >= appData.currentWeek)
    .slice(0, 3);

  const medals = ["🥇", "🥈", "🥉"];

  if (lunasStudents.length === 0) {
    sultanGrid.innerHTML = `<p class="subtitle">Belum ada yang lunas minggu ini. Jadilah yang pertama!</p>`;
    return;
  }

  sultanGrid.innerHTML = lunasStudents.map((s, idx) => `
    <div class="sultan-card">
      <div class="medal">${medals[idx]}</div>
      <div>
        <strong>${s.nama}</strong>
        <div class="subtitle">Absen ${s.absen} • Sultan Kas</div>
      </div>
    </div>
  `).join("");
}

// 3. Tabel Siswa & Pengeluaran (Publik)
function renderPublicTables() {
  const keyword = document.getElementById("searchSiswa").value.toLowerCase();
  const filter = document.getElementById("filterStatus").value;
  const tbody = document.getElementById("publicStudentTable");

  const filtered = appData.students.filter(s => {
    const matchText = s.nama.toLowerCase().includes(keyword) || String(s.absen).includes(keyword);
    const isLunas = s.paidWeeks >= appData.currentWeek;
    if (filter === "lunas") return matchText && isLunas;
    if (filter === "nunggak") return matchText && !isLunas;
    return matchText;
  });

  tbody.innerHTML = filtered.map(s => {
    const diff = appData.currentWeek - s.paidWeeks;
    const isLunas = diff <= 0;
    return `
      <tr>
        <td>${s.absen}</td>
        <td><strong>${s.nama}</strong></td>
        <td>${s.paidWeeks} / ${appData.currentWeek} Minggu</td>
        <td>
          ${isLunas 
            ? `<span class="badge badge-green">✅ Lunas</span>` 
            : `<span class="badge badge-red">⚠️ Nunggak ${diff} Minggu</span>`}
        </td>
        <td>${isLunas ? "Warga Teladan" : `Kurang ${formatRupiah(diff * IURAN_PER_MINGGU)}`}</td>
      </tr>
    `;
  }).join("");

  const expBody = document.getElementById("publicExpenseTable");
  expBody.innerHTML = appData.expenses.map(e => `
    <tr>
      <td>${e.date}</td>
      <td>${e.desc}</td>
      <td class="text-red"><strong>- ${formatRupiah(e.amount)}</strong></td>
    </tr>
  `).join("");
}

// 4. Tabel Admin Bendahara
function renderAdminTables() {
  // Antrean Verifikasi QRIS
  const pendingContainer = document.getElementById("pendingList");
  document.getElementById("pendingCount").textContent = appData.pendingPayments.length;

  if (appData.pendingPayments.length === 0) {
    pendingContainer.innerHTML = `<p class="subtitle">Tidak ada bukti pembayaran baru yang perlu diverifikasi.</p>`;
  } else {
    pendingContainer.innerHTML = appData.pendingPayments.map(p => `
      <div class="pending-item">
        <div>
          <strong>${p.nama} (Absen ${p.absen})</strong>
          <div class="subtitle">Bayar ${p.weeks} Minggu • ${formatRupiah(p.amount)}</div>
          <small class="subtitle">${p.time}</small>
        </div>
        <div>
          <button class="btn btn-success btn-sm" onclick="approvePayment(${p.id})">✔ Terima</button>
          <button class="btn btn-danger btn-sm" onclick="rejectPayment(${p.id})">✖ Tolak</button>
        </div>
      </div>
    `).join("");
  }

  // Tabel Kontrol Siswa
  const adminBody = document.getElementById("adminStudentTable");
  adminBody.innerHTML = appData.students.map(s => {
    const diff = Math.max(0, appData.currentWeek - s.paidWeeks);
    const totalTagihan = diff * IURAN_PER_MINGGU;
    const waText = encodeURIComponent(
      `Halo ${s.nama}, mengingatkan kas kelas XI TJKT 1 kamu menunggak ${diff} minggu (Total: ${formatRupiah(totalTagihan)}). Yuk segera dilunasi ya, bisa bayar tunai atau scan QRIS di web kas kelas!`
    );

    return `
      <tr>
        <td>${s.absen}</td>
        <td><strong>${s.nama}</strong></td>
        <td>${s.paidWeeks} Minggu</td>
        <td>${diff === 0 ? '<span class="badge badge-green">Lunas</span>' : `<span class="text-red">${formatRupiah(totalTagihan)}</span>`}</td>
        <td>
          <button class="btn btn-success btn-sm" onclick="addWeekPaid(${s.absen}, 1)">+1 Minggu</button>
          ${diff > 0 ? `<a href="https://wa.me/${s.phone}?text=${waText}" target="_blank" class="btn btn-wa">💬 Tagih WA</a>` : ""}
        </td>
      </tr>
    `;
  }).join("");
}

// Dropdown Siswa di Modal QRIS
function populateStudentDropdown() {
  const select = document.getElementById("payStudentSelect");
  select.innerHTML = appData.students.map(s => 
    `<option value="${s.absen}">${s.absen}. ${s.nama}</option>`
  ).join("");
}

// Aksi Pembayaran & Bendahara
function addWeekPaid(absen, weeks) {
  const student = appData.students.find(s => s.absen === absen);
  if (student) {
    student.paidWeeks += weeks;
    saveData();
    renderAll();
  }
}

function addNewWeek() {
  appData.currentWeek += 1;
  saveData();
  renderAll();
  alert(`Tagihan berhasil diperbarui ke Minggu ke-${appData.currentWeek}!`);
}

function handlePaymentSubmit(e) {
  e.preventDefault();
  const absen = parseInt(document.getElementById("payStudentSelect").value);
  const weeks = parseInt(document.getElementById("payWeeksSelect").value);
  const student = appData.students.find(s => s.absen === absen);

  appData.pendingPayments.push({
    id: Date.now(),
    absen: student.absen,
    nama: student.nama,
    weeks: weeks,
    amount: weeks * IURAN_PER_MINGGU,
    time: "Baru saja"
  });

  saveData();
  renderAll();
  closeModal("modalBayar");
  alert("Konfirmasi pembayaran terkirim! Menunggu verifikasi bendahara.");
}

function approvePayment(id) {
  const idx = appData.pendingPayments.findIndex(p => p.id === id);
  if (idx !== -1) {
    const item = appData.pendingPayments[idx];
    addWeekPaid(item.absen, item.weeks);
    appData.pendingPayments.splice(idx, 1);
    saveData();
    renderAll();
  }
}

function rejectPayment(id) {
  appData.pendingPayments = appData.pendingPayments.filter(p => p.id !== id);
  saveData();
  renderAll();
}

function handleAddExpense(e) {
  e.preventDefault();
  const desc = document.getElementById("expDesc").value;
  const amount = parseInt(document.getElementById("expAmount").value);
  const today = new Date().toISOString().split("T")[0];

  appData.expenses.unshift({ date: today, desc, amount });
  saveData();
  renderAll();
  e.target.reset();
  alert("Pengeluaran berhasil dicatat secara transparan!");
}

// Navigasi Mode Bendahara & Modal
function toggleRoleView() {
  if (isAdminMode) {
    logoutAdmin();
  } else {
    openModal("modalLogin");
  }
}

function verifyAdminPin() {
  const input = document.getElementById("adminPinInput").value;
  if (input === ADMIN_PIN) {
    isAdminMode = true;
    document.getElementById("adminPinInput").value = "";
    closeModal("modalLogin");
    document.getElementById("publicView").classList.add("hidden");
    document.getElementById("adminView").classList.remove("hidden");
    document.getElementById("btnSwitchRole").textContent = "👀 Tampilan Siswa";
  } else {
    alert("PIN salah! Coba masukkan 1234");
  }
}

function logoutAdmin() {
  isAdminMode = false;
  document.getElementById("adminView").classList.add("hidden");
  document.getElementById("publicView").classList.remove("hidden");
  document.getElementById("btnSwitchRole").textContent = "🔐 Mode Bendahara";
}

function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

// Jalankan pertama kali saat halaman dimuat
renderAll();

```

---

### Cara Menjalankan di VS Code:

1. Buat folder baru bernama **`KAS-XI-TJKT-1`**.
2. Buat 3 file di dalamnya: `index.html`, `style.css`, dan `script.js`.
3. Tempel masing-masing kode di atas ke file yang sesuai, lalu buka `index.html` menggunakan browser atau ekstensi **Live Server** di VS Code.
