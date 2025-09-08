// Slideshow
const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 3000);

// Surprise Button & Confetti
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMsg = document.getElementById('surpriseMsg');

surpriseBtn.addEventListener('click', () => {
    surpriseMsg.textContent = "Harshali, you make my world beautiful ❤️";
    createConfetti();
});

// Confetti Function
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = getRandomColor();
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = 1;
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);

        let fall = 0;
        const fallInterval = setInterval(() => {
            if (fall > window.innerHeight) {
                confetti.remove();
                clearInterval(fallInterval);
            } else {
                confetti.style.top = fall + 'px';
                fall += Math.random() * 5 + 2;
            }
        }, 20);
    }
}

// Random Color
function getRandomColor() {
    const colors = ['#ff0', '#f0f', '#0ff', '#ff6347', '#7fff00', '#ff1493'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 3 + Math.random() * 3 + 's';
    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);
