// script.js

// Data peserta CPNS (nama dan nilai SKD, SKB) untuk contoh
let participants = [];

// Fungsi untuk menghitung nilai akhir
function calculate() {
  const nama = document.getElementById('nama').value.trim();
  const skd = parseFloat(document.getElementById('skd').value);
  const skb = parseFloat(document.getElementById('skb').value);

  if (nama === "" || isNaN(skd) || isNaN(skb) || skd < 0 || skd > 550 || skb < 0 || skb > 500) {
    alert("Masukkan data yang valid!");
    return;
  }

  // Perhitungan nilai akhir
  const nilaiAkhir = ((skd / 550) * 40) + ((skb / 500) * 60);

  // Menambahkan peserta baru ke daftar
  participants.push({ nama, skd, skb, nilaiAkhir });

  // Mengurutkan peserta berdasarkan nilai akhir (tertinggi ke terendah)
  participants.sort((a, b) => b.nilaiAkhir - a.nilaiAkhir);

  // Memperbarui tabel rangking
  updateRankingTable();

  // Menampilkan nilai akhir di halaman
  document.getElementById('nilai-akhir').innerText = nilaiAkhir.toFixed(2);

  // Reset input setelah perhitungan
  resetForm();
}

// Fungsi untuk memperbarui tabel rangking
function updateRankingTable() {
  const tableBody = document.getElementById('ranking-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ""; // Kosongkan tabel

  participants.forEach((participant, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${participant.nama}</td>
      <td>${participant.nilaiAkhir.toFixed(2)}</td>
    `;
  });
}

// Fungsi untuk mereset form
function resetForm() {
  document.getElementById('nama').value = "";
  document.getElementById('skd').value = "";
  document.getElementById('skb').value = "";
  document.getElementById('nilai-akhir').innerText = "-";
}
