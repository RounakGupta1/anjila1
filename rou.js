document.getElementById("wishButton").addEventListener("click", () => {
    alert("Happy Birthday Anjila! 🎉🎂 May your year ahead be as amazing as you are!");
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);
    confettiEffect();
  });
  
  function confettiEffect() {
    for (let i = 0; i < 100; i++) {
      const confetto = document.createElement("div");
      confetto.className = "confetto";
      confetto.style.background = getRandomColor();
      confetto.style.left = Math.random() * window.innerWidth + "px";
      confetto.style.animationDuration = Math.random() * 3 + 2 + "s";
      document.body.appendChild(confetto);
    }
  }
  
  function getRandomColor() {
    const colors = ["#ffcccb", "#f76c6c", "#ff9999", "#fad0c4", "#ffb6c1"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function goBack() {
    window.location.href = 'suprise.html'; // Redirects back to the main page
    }