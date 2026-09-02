const startDate = new Date("2026-06-01T17:36:00");

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
