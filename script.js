function revealMessage() {
  document.getElementById("secret").style.display = "block";
}
// Create floating hearts dynamically
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

createHearts();
