/* ===========================================
   HAPPY BIRTHDAY DIKSHA ❤️
   JavaScript Part 1
=========================================== */

// All screens
const screens = document.querySelectorAll(".screen");

// Helper function to show a screen
function showScreen(id) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

// ==========================
// LOADING SCREEN
// ==========================

window.addEventListener("load", () => {

    showScreen("loadingScreen");

    setTimeout(() => {
        showScreen("welcomeScreen");
    }, 3000);

});

// ==========================
// BUTTONS
// ==========================

document.getElementById("startJourney").addEventListener("click", () => {

    showScreen("introScreen");

});

document.getElementById("continueJourney").addEventListener("click", () => {

    showScreen("quizScreen");

});
