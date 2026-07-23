console.log("Website Loaded ❤️");

// Loading → Welcome
setTimeout(() => {

    document.getElementById("loadingScreen").classList.remove("active");
    document.getElementById("welcomeScreen").classList.add("active");

}, 3000);


// Welcome → Intro
document.getElementById("startBtn").addEventListener("click", () => {

    document.getElementById("welcomeScreen").classList.remove("active");
    document.getElementById("introScreen").classList.add("active");

});


// Intro → Quiz
document.getElementById("continueBtn").addEventListener("click", () => {

    document.getElementById("introScreen").classList.remove("active");
    document.getElementById("quizScreen").classList.add("active");

});
