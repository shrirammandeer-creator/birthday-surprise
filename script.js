console.log("Step 3 Loaded ❤️");

setTimeout(() => {

    document.getElementById("loadingScreen").classList.remove("active");

    document.getElementById("welcomeScreen").classList.add("active");

},3000);

document.getElementById("continueBtn").addEventListener("click",()=>{

    document.getElementById("introScreen").classList.remove("active");

    document.getElementById("quizScreen").classList.add("active");

});
