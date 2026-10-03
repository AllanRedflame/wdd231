const messageDiv = document.getElementById("visit-message");

// Get last visit from localStorage
const lastVisit = localStorage.getItem("lastVisit");

// Get current time
const now = Date.now();

if (!lastVisit) {
    // First visit ever
    messageDiv.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate time difference in days
    const lastTime = Number(lastVisit);
    const difference = now - lastTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (days < 1) {
        messageDiv.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        messageDiv.textContent = "You last visited 1 day ago.";
    } else {
        messageDiv.textContent = `You last visited ${days} days ago.`;
    }
}

// Store the current visit time
localStorage.setItem("lastVisit", now);