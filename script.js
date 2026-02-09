// ================================
// Reveal hidden message + confetti
// ================================
function revealMessage() {
  const secret = document.getElementById("secret");
  secret.classList.remove("hidden");
  secret.style.visibility = "visible";
  secret.classList.add("fade-in");
  launchConfetti();
}

// ================================
// Floating hearts continuously with sparkles
// ================================
function createHearts() {
  const container = document.querySelector('.hearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.innerText = '🤎';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.opacity = Math.random() * 0.8 + 0.2;
    heart.style.pointerEvents = 'none';
    heart.style.animation = `floatUp ${5 + Math.random() * 5}s linear infinite`;
    container.appendChild(heart);

    createSparkles(heart);
  }
}

// ================================
// Sparkles trailing a heart
// ================================
function createSparkles(parent) {
  for (let i = 0; i < 3; i++) {
    const sparkle = document.createElement('span');
    sparkle.innerText = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = Math.random() * 10 + 6 + 'px';
    sparkle.style.left = Math.random() * 20 - 10 + 'px';
    sparkle.style.top = Math.random() * 20 - 10 + 'px';
    sparkle.style.opacity = Math.random() * 0.6 + 0.4;
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = `sparkle ${2 + Math.random() * 2}s infinite ease-in-out`;
    parent.appendChild(sparkle);
  }
}

// ================================
// Falling confetti (chocolate + hearts + sparkles)
// ================================
function launchConfetti() {
  const emojis = ['🍫', '🤎', '✨'];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('span');
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-40px';
    confetti.style.fontSize = Math.random() * 20 + 18 + 'px';
    confetti.style.opacity = Math.random() * 0.9 + 0.1;
    confetti.style.pointerEvents = 'none';
    confetti.style.animation = `fall ${5 + Math.random() * 3}s ease-in forwards`;
    document.body.appendChild(confetti);

    // Remove after animation finishes
    setTimeout(() => confetti.remove(), 6000);
  }
}

// ================================
// Typewriter effect
// ================================
function typeWriter(element, speed = 100) {
  const text = element.textContent.trim();
  element.innerHTML = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// ================================
// Initialize page
// ================================
document.addEventListener('DOMContentLoaded', () => {
  createHearts();

  const typewriterElement = document.querySelector('.typewriter');
  typeWriter(typewriterElement, 100);

  // Attach button click properly
  const btn = document.querySelector('.reveal-btn');
  btn.addEventListener('click', revealMessage);
});
