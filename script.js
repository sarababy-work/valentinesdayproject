// Reveal hidden message
function revealMessage() {
  document.getElementById("secret").style.display = "block";
  launchConfetti(); // optional: roses confetti
}

// Floating hearts dynamically
function createHearts() {
  const body = document.body;
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.innerText = '❤️';
    heart.style.position = 'absolute';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    heart.style.opacity = Math.random();
    heart.style.animation = `floatUp ${5 + Math.random() * 5}s linear infinite`;
    body.appendChild(heart);
  }
}

// Confetti / roses on reveal
function launchConfetti() {
  for(let i=0; i<50; i++){
    const confetti = document.createElement('div');
    confetti.innerText = '🌹';
    confetti.style.position = 'absolute';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = Math.random() * -50 + 'px';
    confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
    confetti.style.animation = `fall ${3 + Math.random()*3}s linear forwards`;
    document.body.appendChild(confetti);
  }
}

// Typewriter effect
function typeWriter(element, speed = 100) {
  const text = element.innerHTML;
  element.innerHTML = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Start floating hearts and typewriter
createHearts();
const typewriterElement = document.querySelector('.typewriter');
typeWriter(typewriterElement, 100); // 100ms per character
