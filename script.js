// =========================
// SCREEN REFERENCES
// =========================

const screens = document.querySelectorAll(".screen");

const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const introScreen = document.getElementById("introScreen");
const quizScreen = document.getElementById("quizScreen");
const phoneScreen = document.getElementById("phoneScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const giftScreen = document.getElementById("giftScreen");
const letterScreen = document.getElementById("letterScreen");
const finalScreen = document.getElementById("finalScreen");

const bgMusic = document.getElementById("bgMusic");

function showScreen(screen){

    screens.forEach(s=>s.classList.remove("active"));

    screen.classList.add("active");

}
