// =========================
// SCREEN REFERENCES
// =========================

const quizScreen = document.getElementById("quizScreen");
const nextQuestion = document.getElementById("nextQuestion");
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

const introScreen = document.getElementById("introScreen");
const continueJourney = document.getElementById("continueJourney");

startButton.addEventListener("click",()=>{

    bgMusic.play().catch(()=>{});

    showScreen(introScreen);

});

continueJourney.addEventListener("click",()=>{

    showScreen(quizScreen);

});
});

});
