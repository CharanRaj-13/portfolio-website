// Typing effect
const textElement = document.getElementById("typing-text");
const words = ["Cybersecurity Enthusiast", "Ethical Hacker", "Pentester", "Linux Specialist"];
let wordIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    if (!isDeleting && charIndex <= words[wordIndex].length) {
        currentText = words[wordIndex].substring(0, charIndex++);
    } else if (isDeleting && charIndex >= 0) {
        currentText = words[wordIndex].substring(0, charIndex--);
    }

    textElement.innerHTML = `I'm a <span class="highlight">${currentText}</span>`;

    if (!isDeleting && charIndex === words[wordIndex].length) {
        setTimeout(() => (isDeleting = true), 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
