// Typing effect
const messages = [
  "Hey Awais...",
  "22? ...",
  "you officially belong to uncs!",
  "Happy Birthday!",
  "Banana consumption: critical",
  "Love life: not found"
];

let i = 0;
let j = 0;
let currentMessage = '';
let isDeleting = false;
const speed = 100;
const textElement = document.createElement('h2');
document.body.appendChild(textElement);

function type() {
  if (i < messages.length) {
    currentMessage = messages[i];
    if (!isDeleting) {
      textElement.textContent = currentMessage.substring(0, j+1);
      j++;
      if (j === currentMessage.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
    } else {
      j--;
      textElement.textContent = currentMessage.substring(0, j);
      if (j === 0) {
        isDeleting = false;
        i++;
      }
    }
    setTimeout(type, speed);
  }
}
type();

// Banana rain
function createBanana() {
  const banana = document.createElement('img');
  banana.src = 'https://i.imgur.com/G24LIGOg.jpg';
  banana.className = 'banana';
  banana.style.left = Math.random() * window.innerWidth + 'px';
  banana.style.animationDuration = 3 + Math.random() * 2 + 's';
  document.body.appendChild(banana);
  setTimeout(() => banana.remove(), 5000);
}
setInterval(createBanana, 500);

// Confetti
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * window.innerWidth + 'px';
  confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
  confetti.style.animationDuration = 2 + Math.random()*3 + 's';
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}
setInterval(createConfetti, 100);

// Roast button
const button = document.createElement('button');
button.textContent = "Press if you are Awais";
button.style.marginTop = '20px';
button.style.fontSize = '20px';
button.style.padding = '10px 20px';
document.body.appendChild(button);

button.addEventListener('click', () => {
  alert("Awais detected: Yapping level 100. Banana consumption critical. Love life: not found.");
});
