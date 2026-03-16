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

// Disable button at start
roastBtn.disabled = true;

function showNextMessage() {
  if (i >= messages.length) {
    // Enable button at the end
    roastBtn.disabled = false;
    roastBtn.style.opacity = 1;
    roastBtn.style.transform = "scale(1)";
    return;
  }

  // Create and show message
  const msg = document.createElement('div');
  msg.textContent = messages[i];
  msg.style.opacity = 0;
  msg.style.transition = "opacity 1s";
  messagesDiv.appendChild(msg);
  
  // Small delay to fade in
  setTimeout(() => { msg.style.opacity = 1; }, 100);

  // Confetti burst
  for(let j=0;j<15;j++){
    createConfetti();
  }

  i++;
  // Next message after 2 seconds
  setTimeout(showNextMessage, 2000);
}

// Confetti
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

// Start sequence after page loads
window.onload = () => {
  setTimeout(showNextMessage, 4000); // waits for Shrek entry animation
}

// Roast button click
roastBtn.addEventListener('click', () => {
  alert("Awais detected: Yapping level 100. Banana consumption critical. Love life: not found.");
});
  


