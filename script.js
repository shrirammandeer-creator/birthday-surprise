// =========================
// SCREEN REFERENCES
// =========================

const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const startButton = document.getElementById("startJourney");
const bgMusic = document.getElementById("bgMusic");

// =========================
// SHOW SCREEN
// =========================

function showScreen(screen){

    document.querySelectorAll(".screen").forEach(s=>{
        s.classList.remove("active");
    });

    screen.classList.add("active");

}

// =========================
// LOADING
// =========================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        showScreen(welcomeScreen);

    },3000);

});

// =========================
// START BUTTON
// =========================

startButton.addEventListener("click",()=>{

    bgMusic.play().catch(()=>{});

    alert("❤️ Perfect! Our Journey Starts Here...");

});
