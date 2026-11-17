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
