// HTML elementlarini tanlab olamiz
const button = document.getElementById('mainBtn');
const resultText = document.getElementById('resultText');

// Tugma bosilganda ishlaydigan hodisa
button.addEventListener('click', function() {
    resultText.innerText = "Salom! Dasturingiz muvaffaqiyatli ishlamoqda!";
    resultText.style.color = "green";
    resultText.style.fontWeight = "bold";
});