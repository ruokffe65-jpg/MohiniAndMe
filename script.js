const startDate = new Date("2025-08-03T02:40:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("loveTimer").textContent =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

updateTimer();
setInterval(updateTimer, 1000);

const button = document.getElementById("heartButton");

button.addEventListener("click", () => {
    alert("❤️ Welcome to Our Universe, Mohini ❤️");
});

// ===== Floating Hearts =====

function createHeart() {
    const container = document.getElementById("hearts");

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
