const messages = [
  "Hey Awais...",
  "22? ...",
  "You officially belong to uncs!",
  "Happy Birthday!",
  "Banana consumption: critical",
  "Love life: not found"
];

const messagesDiv = document.getElementById('messages');
const roastBtn = document.getElementById('roast-btn');
const scene = document.getElementById('scene');

let i = 0;

// Show messages one by one like a video
function showNextMessage() {
  if (i >= messages.length) {
    // Show roast button at the end
    roastBtn.style.opacity = 1;
    roastBtn.style.transform = "scale(1)";
    return;
  }
  const msg = document.createElement('div');
  msg.textContent = messages[i];
  msg.style.opacity = 0;
  msg.style.transition = "opacity 1s";
  messagesDiv.appendChild(msg);
  setTimeout(() => msg.style.opacity = 1, 100);
  
  // Confetti burst
  for(let j=0;j<15;j++){
    createConfetti();
  }
  
  i++;
  setTimeout(showNextMessage, 2000); // delay between messages
}

// Confetti function
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random()*window.innerWidth+'px';
  const colors = ["#ffcc00","#ff66ff","#66ffff","#66ff66","#ff6666"];
  confetti.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  confetti.style.animationDuration = (2 + Math.random()*2)+'s';
  scene.appendChild(confetti);
  setTimeout(() => confetti.remove(), 4000);
}

// Start the “video” after Shrek enters
window.onload = () => {
  setTimeout(showNextMessage, 4000); // start after intro animations
}

// Roast button
roastBtn.addEventListener('click', () => {
  alert("Awais detected: Yapping level 100. Banana consumption critical. Love life: not found.");
});

      





