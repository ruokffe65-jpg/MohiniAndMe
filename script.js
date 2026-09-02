const button = document.getElementById("heartButton");

button.addEventListener("click", () => {

    document.body.style.transition = "1s";

    document.body.style.background =
    "linear-gradient(135deg,#0f172a,#4c1d95,#ec4899)";

    button.innerHTML = "❤️ I Love You Betu ❤️";

    alert(
`Dear Mohini ❤️

This is only the beginning...

Your Kuchu Puchu has made something special just for you.

Get ready for our love story... 💖`
    );

});