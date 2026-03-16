// Elements
const startBtn = document.getElementById('start-btn');
const intro = document.getElementById('intro');
const messagesDiv = document.getElementById('messages');
const roastBtn = document.getElementById('roast-btn');

const messages = [
  "Hey Awais...",
  "22? ...",
  "You officially belong to uncs!",
  "Happy Birthday!",
  "Banana consumption: critical",
  "Love life: not found"
];

let i = 0;
let j = 0;
let currentMessage = '';
let isDeleting = false;
const speed = 100;

// Typing function with color variation
function typeMessage() {
  if (i < messages.length) {
    currentMessage = messages[i];
    const colors = ["#f5f5dc", "#a0e600", "#ffff66", "#ffd700", "#ffffff"];
    if (!isDeleting) {
      messagesDiv.textContent = currentMessage.substring(0, j+1);
      messagesDiv.style.color = colors[Math.floor(Math.random()*colors.length)];
      j++;
      if (j === currentMessage.length) {
        isDeleting = true;
        setTimeout(typeMessage, 1000);
        return;
      }
    } else {
      j--;
      messagesDiv.textContent = currentMessage.substring(0, j);
      if (j === 0) {
        isDeleting = false;
        i++;
      }
    }
    setTimeout(typeMessage, speed);
  } else {
    roastBtn.style.display = 'inline-block';
  }
}

// Start button click
startBtn.addEventListener('click', () => {
  intro.style.display = 'none';
  messagesDiv.style.display = 'block';
  typeMessage();

  // Start confetti
  setInterval(createConfetti, 100);
});

// Confetti
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  const confettiColors = ["#ffcc00", "#ff66ff", "#66ffff", "#66ff66", "#ff6666"];
  confetti.style.backgroundColor = confettiColors[Math.floor(Math.random()*confettiColors.length)];
  confetti.style.animationDuration = 2 + Math.random()*3 + 's';
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

// Roast button
roastBtn.addEventListener('click', () => {
  alert("Awais detected: Yapping level 100. Banana consumption critical. Love life: not found.");
});
  

