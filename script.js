// Reveal hidden message
function revealMessage() {
  const secret = document.getElementById("secret");
  secret.classList.remove("hidden");
  secret.style.visibility = "visible";
  launchConfetti();
}

// Floating hearts dynamically
function createHearts() {
  const container = document.querySelector('.hearts');
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div'); // ✅ create element
    heart.innerText = '🤎';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.opacity = Math.random();
    heart.style.animation = `floatUp ${5 + Math.random() * 5}s linear infinite`;
    container.appendChild(heart);
  }
}

// Confetti / chocolate hearts on reveal
function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const emojis = ['🍫', '🤎', '✨'];
    const confetti = document.createElement('span'); // ✅ create element
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-40px';
    confetti.style.fontSize = Math.random() * 20 + 18 + 'px';
    confetti.style.opacity = Math.random();
    confetti.style.pointerEvents = 'none';
    confetti.style.animation = `fall ${5 + Math.random() * 3}s ease-in forwards`;

    document.body.appendChild(confetti);

    // Remove after animation
    setTimeout(() => {
      confetti.remove();
    }, 6000);
  }
}

// Typewriter effect
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

// Start floating hearts and typewriter
createHearts();
const typewriterElement = document.querySelector('.typewriter');
typeWriter(typewriterElement, 100);
