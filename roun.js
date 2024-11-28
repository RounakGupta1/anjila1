function goBack() {
    window.location.href = 'index.html'; // Redirects back to the main page
  }

  // Confetti Effect
  const confettiContainer = document.getElementById('confetti-container');
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = getRandomColor();
    confettiContainer.appendChild(confetti);
  }

  function getRandomColor() {
    const colors = ['#ffcccb', '#f76c6c', '#ff9999', '#fad0c4', '#ffb6c1', '#ffc107', '#a29bfe'];
    return colors[Math.floor(Math.random() * colors.length)];
  }