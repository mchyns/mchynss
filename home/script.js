const subtitle = document.getElementById('subtitle');
const fullText = 'Teknik Informatika';
let currentText = '';
let index = 0;

function typeEffect() {
    if (index < fullText.length) {
        currentText = fullText.slice(0, ++index);
        subtitle.innerHTML = currentText;
        setTimeout(typeEffect, 150); // Adjust typing speed
    }
}

window.onload = typeEffect; // Start typing effect when the window loads