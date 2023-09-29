// Contoh sederhana untuk berinteraksi dengan form
const exchangeForm = document.getElementById('exchange-form');
const historyList = document.getElementById('history-list');

exchangeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const crypto = document.getElementById('crypto').value;
    const amount = document.getElementById('amount').value;

    // Simpan transaksi ke dalam daftar riwayat
    const transactionItem = document.createElement('li');
    transactionItem.textContent = `Tukar ${amount} ${crypto}`;
    historyList.appendChild(transactionItem);

    // Bersihkan input
    document.getElementById('amount').value = '';
});
