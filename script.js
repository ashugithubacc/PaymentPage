const qrButton = document.getElementById('qrButton');
const bankButton = document.getElementById('bankButton');
const qrCodeImage = document.getElementById('qrCodeImage');
const bankDetails = document.getElementById('bankDetails');

qrButton.addEventListener('click', () => {
    qrCodeImage.classList.remove('hidden');
    bankDetails.classList.add('hidden');
});

bankButton.addEventListener('click', () => {
    qrCodeImage.classList.add('hidden');
    bankDetails.classList.remove('hidden');
});
