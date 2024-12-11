// script.js

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai dari form input
    const nama = document.getElementById('nama').value;
    const skd = parseFloat(document.getElementById('skd').value);
    const skb = parseFloat(document.getElementById('skb').value);

    // Validasi input
    if (!nama || isNaN(skd) || isNaN(skb)) {
        alert('Mohon lengkapi semua data!');
        return;
    }

    // Hitung nilai akhir
    const nilaiAkhir = (skd * 0.4) + (skb * 0.6);

    // Menambahkan data hasil perhitungan ke dalam tabel
    const hasilTable = document.getElementById('tabelHasil');
    const row = hasilTable.insertRow();
    row.classList.add('border-b', 'hover:bg-gray-100');
    row.innerHTML = `
        <td class="px-6 py-3">${nama}</td>
        <td class="px-6 py-3">${skd}</td>
        <td class="px-6 py-3">${skb}</td>
        <td class="px-6 py-3">${nilaiAkhir.toFixed(2)}</td>
    `;

    // Mengurutkan tabel berdasarkan nilai akhir (descending)
    sortTable(3);
});

// Fungsi untuk mengurutkan tabel berdasarkan kolom
function sortTable(colIndex) {
    const rows = Array.from(document.getElementById('tabelHasil').rows);

    // Urutkan baris berdasarkan kolom yang dipilih
    rows.sort((a, b) => {
        const valA = parseFloat(a.cells[colIndex].innerText);
        const valB = parseFloat(b.cells[colIndex].innerText);
        return valB - valA;  // Urutkan secara descending
    });

    // Menyusun kembali tabel dengan baris yang sudah diurutkan
    const tbody = document.getElementById('tabelHasil');
    tbody.innerHTML = '';  // Hapus isi tabel
    tbody.append(...rows);  // Masukkan kembali baris yang sudah diurutkan
}

// Fitur Reset untuk menghapus data
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('nama').value = '';
    document.getElementById('skd').value = '';
    document.getElementById('skb').value = '';
    document.getElementById('tabelHasil').innerHTML = '';  // Hapus semua hasil di tabel
});
