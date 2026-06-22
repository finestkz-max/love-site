
const music = document.getElementById("music");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

const mainScreen = document.getElementById("main-screen");
const movieScreen = document.getElementById("movie-screen");
const credits = document.getElementById("credits");

// Дни вместе


// Запуск музыки после первого касания

document.body.addEventListener(
    "click",
    () => {
        music.play();
    },
    { once: true }
);

// Да ❤️

yesBtn.addEventListener("click", () => {

    alert("❤️ Я знала ❤️\n\nОбожаю тебя очень сильно 🐱💕");

});

// Нет 😈

noBtn.style.left = "60%";
noBtn.style.top = "75%";

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {

    const x = Math.random() * 70;
    const y = Math.random() * 70;

    noBtn.style.left = x + "%";
    noBtn.style.top = y + "%";
}

// Нажми сюда ❤️

surpriseBtn.addEventListener("click", () => {

    mainScreen.style.display = "none";
    movieScreen.style.display = "block";

    let position = 700;

    credits.style.bottom = -position + "px";

    function scrollCredits() {

        if (position > 150) {

            position -= 2;

            credits.style.bottom = (-position) + "px";

            requestAnimationFrame(scrollCredits);

        }
    }

    scrollCredits();

});
