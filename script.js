const subtitle = document.getElementById('subtitle');
const texts = ['Teknik Informatika', 'Semester 5']; // Array of texts to type
let currentTextIndex = 0;
let currentText = '';
let index = 0;
let isDeleting = false;

function typeEffect() {
    const fullText = texts[currentTextIndex];

    if (isDeleting) {
        currentText = fullText.slice(0, --index); // Delete characters
    } else {
        currentText = fullText.slice(0, ++index); // Type characters
    }

    subtitle.innerHTML = currentText;

    if (!isDeleting && index === fullText.length) {
        setTimeout(() => isDeleting = true, 1000); // Pause before starting to delete
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to the next text
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150); // Adjust typing and deleting speed
}

window.onload = typeEffect; // Start typing effect when the window loads

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const downloadBtn = document.getElementById("download-btn");
let currentImgIndex = 0;
const galleryPics = document.querySelectorAll('.gallery-pic');

function showModal(index) {
    currentImgIndex = index;
    const img = galleryPics[currentImgIndex];
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    downloadBtn.href = img.src;
    downloadBtn.download = img.src.split('/').pop(); // Set the download attribute
}

galleryPics.forEach((img, index) => {
    img.addEventListener('click', function() {
        showModal(index);
    });
});

const span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

function changeSlide(n) {
    currentImgIndex += n;
    if (currentImgIndex >= galleryPics.length) {
        currentImgIndex = 0;
    } else if (currentImgIndex < 0) {
        currentImgIndex = galleryPics.length - 1;
    }
    showModal(currentImgIndex);
}

// Add scroll event listener to update active link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
